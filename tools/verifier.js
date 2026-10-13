#!/usr/bin/env node
/* ==========================================================
   Pulsar VSAV — vérificateur du contenu et du pré-cache
   Usage : node tools/verifier.js
   Charge les scripts de index.html (dans l'ordre) dans un bac à
   sable vm, puis contrôle la cohérence des données :
   identifiants, liens internes, images/vidéos, quiz, sw.js.
   Code de sortie : 1 s'il y a au moins une erreur, 0 sinon
   (les avertissements ne font pas échouer).
   Zéro dépendance, Node 18+.
   ========================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RACINE = path.resolve(__dirname, '..');
const erreurs = [];
const avertissements = [];
const err = (msg) => erreurs.push(msg);
const avert = (msg) => avertissements.push(msg);
const existe = (rel) => { try { return fs.statSync(path.join(RACINE, rel)).isFile(); } catch (e) { return false; } };
const lire = (rel) => fs.readFileSync(path.join(RACINE, rel), 'utf8');

/* ---------------------------------------------------------- index.html */
const html = lire('index.html');
const scripts = [...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map((m) => m[1]);
const liens = [...html.matchAll(/<link\b[^>]*\bhref="([^"#:]+)"/g)].map((m) => m[1]);
scripts.concat(liens).forEach((f) => { if (!existe(f)) err('index.html référence un fichier absent : ' + f); });

/* ---------------------------------------------------------- bac à sable
   Reproduit l'enregistrement du contenu de js/app.js (VSAV.part, VSAV.chap,
   VSAV.ess, mêmes valeurs par défaut) sans DOM ni localStorage.
   À garder en phase avec la section « enregistrement du contenu » de app.js. */
const VSAV = {
  parts: [], chapters: [], byId: {}, partById: {}, essentiel: [], svg: {}, anim: {},
  reduceMotion: true,
  icon: () => '',
  util: { esc: (s) => String(s == null ? '' : s), $: () => null, $all: () => [], norm: String, strip: String, toast: () => {} }
};
VSAV.part = function (p) { VSAV.parts.push(p); VSAV.partById[p.id] = p; };
VSAV.chap = function (c) {
  c.sections = c.sections || []; c.quiz = c.quiz || []; c.key = c.key || []; c.traps = c.traps || []; c.sources = c.sources || [];
  c.status = c.status || 'complet';
  VSAV.chapters.push(c); VSAV.byId[c.id] = c;
};
VSAV.ess = function (groups) { VSAV.essentiel = VSAV.essentiel.concat(groups); };

const bac = { VSAV, console };
bac.window = bac;
vm.createContext(bac);
for (const f of scripts) {
  if (f === 'js/app.js' || !existe(f)) continue; // moteur remplacé par les simulations ci-dessus
  try { vm.runInContext(lire(f), bac, { filename: f }); }
  catch (e) { err(f + ' : exécution impossible — ' + e.message); }
}

/* ---------------------------------------------------------- identifiants */
function doublons(liste) {
  const vus = new Set(), dbl = new Set();
  liste.forEach((x) => (vus.has(x) ? dbl.add(x) : vus.add(x)));
  return [...dbl];
}
doublons(VSAV.parts.map((p) => p.id)).forEach((id) => err('Partie en double : « ' + id + ' »'));
doublons(VSAV.chapters.map((c) => c.id)).forEach((id) => err('Chapitre en double : « ' + id + ' »'));
VSAV.parts.forEach((p) => { if (!p.id || !p.title) err('Partie sans id ou sans titre : ' + JSON.stringify(p.id)); });

/* Sections atteignables d'un chapitre (#/c/<chap>/<section>) : les sections
   + les ancres générées par app.js (pourquoi, cles, sources). */
function ancres(c) {
  const a = new Set(c.sections.map((s) => s.id));
  if (c.why) a.add('pourquoi');
  if (c.key.length || c.traps.length) a.add('cles');
  a.add('sources');
  return a;
}

const STATUTS = ['complet', 'partiel', 'vide'];
VSAV.chapters.forEach((c) => {
  const ou = 'Chapitre « ' + c.id + ' »';
  if (!c.id || !c.title) err(ou + ' : id ou titre manquant');
  if (!VSAV.partById[c.part]) err(ou + ' : partie inconnue « ' + c.part + ' »');
  if (!STATUTS.includes(c.status)) err(ou + ' : statut inconnu « ' + c.status + ' »');
  else if (c.status !== 'complet') avert(ou + ' : ' + (c.status === 'vide' ? 'non rédigé' : 'partiellement rédigé'));
  c.sections.forEach((s, i) => { if (!s.id) err(ou + ' : section n° ' + (i + 1) + ' sans id'); });
  doublons(c.sections.map((s) => s.id)).forEach((id) => err(ou + ' : section en double « ' + id + ' »'));
  ['pourquoi', 'cles', 'sources'].forEach((r) => {
    if (c.sections.some((s) => s.id === r)) err(ou + ' : la section « ' + r + ' » entre en conflit avec une ancre générée par app.js');
  });
  // schémas dessinés et animations : doivent exister dans js/svg.js
  c.sections.forEach((s) => (s.figs || []).forEach((f) => {
    if (f.svg && !VSAV.svg[f.svg]) err(ou + '/' + s.id + ' : schéma svg inconnu « ' + f.svg + ' »');
    if (f.anim && !VSAV.anim[f.anim]) err(ou + '/' + s.id + ' : animation inconnue « ' + f.anim + ' »');
  }));
});

/* ---------------------------------------------------------- quiz
   Format : { q: 'énoncé', c: [bonne réponse, …leurres], e: 'explication', s: 'section' }
   La bonne réponse est toujours c[0] (app.js mélange ensuite les choix). */
let nbQuestions = 0;
VSAV.chapters.forEach((c) => {
  const a = ancres(c);
  c.quiz.forEach((q, i) => {
    nbQuestions++;
    const ou = 'Quiz « ' + c.id + ' » question ' + (i + 1);
    if (typeof q.q !== 'string' || !q.q.trim()) err(ou + ' : énoncé manquant');
    if (!Array.isArray(q.c) || q.c.length < 2) { err(ou + ' : il faut au moins 2 choix (c[0] = bonne réponse)'); return; }
    if (q.c.some((x) => typeof x !== 'string' || !x.trim())) err(ou + ' : choix vide ou non textuel');
    doublons(q.c).forEach((x) => err(ou + ' : choix en double « ' + x + ' »'));
    if (q.s != null && !a.has(q.s)) err(ou + ' : section de renvoi inconnue « ' + q.s + ' »');
  });
});

/* ---------------------------------------------------------- liens et médias
   Parcourt toutes les chaînes du contenu pour y trouver les liens internes
   (href="#/…") et les fichiers (src=, poster=, href= relatifs, champs img). */
const STATIQUES = ['', 'cours', 'erreurs', 'revision', 'essentiel', 'gestion', 'plus', 'recherche', 'fiches'];
function verifierRoute(h, ou) {
  const route = h.replace(/^#\/?/, '').split('?')[0];
  const seg = route.split('/').filter(Boolean).map((x) => { try { return decodeURIComponent(x); } catch (e) { return x; } });
  const nom = seg[0] || '';
  if (nom === 'c' || nom === 'quiz') {
    const c = VSAV.byId[seg[1]];
    if (!c) return err(ou + ' : lien vers un chapitre inconnu « ' + h + ' »');
    if (nom === 'c' && seg[2] && !ancres(c).has(seg[2])) err(ou + ' : lien vers une section inconnue « ' + h + ' »');
    if (nom === 'quiz' && !c.quiz.length) err(ou + ' : lien vers un quiz vide « ' + h + ' »');
  } else if (nom === 'p') {
    if (!VSAV.partById[seg[1]]) err(ou + ' : lien vers une partie inconnue « ' + h + ' »');
  } else if (nom === 'fiches') {
    if (seg[1] && !VSAV.partById[seg[1]]) err(ou + ' : lien vers une partie inconnue « ' + h + ' »');
  } else if (!STATIQUES.includes(nom)) err(ou + ' : route inconnue « ' + h + ' »');
}

const medias = new Set(); // fichiers référencés (pour le contrôle du pré-cache)
function verifierFichier(f, ou) {
  if (/^(https?:|data:|mailto:|tel:|\/\/)/i.test(f)) return; // ressources externes : hors périmètre
  const rel = f.split(/[?#]/)[0].replace(/^\.\//, '');
  if (!rel) return;
  medias.add(rel);
  if (!existe(rel)) err(ou + ' : fichier absent « ' + rel + ' »');
}

function parcourir(v, ou) {
  if (typeof v === 'string') {
    for (const m of v.matchAll(/\bhref=["'](#[^"']*)["']/g)) verifierRoute(m[1], ou);
    for (const m of v.matchAll(/\b(?:src|poster|href)=["']([^"'#][^"']*)["']/g)) verifierFichier(m[1], ou);
  } else if (Array.isArray(v)) v.forEach((x) => parcourir(x, ou));
  else if (v && typeof v === 'object') Object.keys(v).forEach((k) => {
    if (k === 'img' && typeof v[k] === 'string') verifierFichier(v[k], ou);
    parcourir(v[k], ou);
  });
}
VSAV.parts.forEach((p) => parcourir(p, 'Partie « ' + p.id + ' »'));
VSAV.chapters.forEach((c) => c.sections.forEach((s) => parcourir(s, 'Chapitre « ' + c.id + ' »/' + s.id)));
VSAV.chapters.forEach((c) => {
  const reste = Object.assign({}, c); delete reste.sections;
  parcourir(reste, 'Chapitre « ' + c.id + ' »');
});
VSAV.essentiel.forEach((g, i) => {
  const ou = 'L’essentiel « ' + (g.t || 'groupe ' + (i + 1)) + ' »';
  parcourir(g, ou);
  (g.items || []).forEach((it) => { if (it.go) verifierRoute('#/c/' + it.go, ou + ' (go)'); });
});

/* ---------------------------------------------------------- service worker */
const sw = lire('sw.js');
let assets = null;
try {
  const m = /const ASSETS = (\[[\s\S]*?\]);/.exec(sw);
  assets = m ? JSON.parse(m[1]) : null;
} catch (e) { /* signalé ci-dessous */ }
if (!assets) err('sw.js : tableau ASSETS introuvable ou illisible');
else {
  doublons(assets).forEach((a) => err('sw.js : entrée ASSETS en double « ' + a + ' »'));
  const enCache = new Set(assets.map((a) => a.replace(/^\.\//, '')));
  assets.forEach((a) => {
    const rel = a.replace(/^\.\//, '');
    if (rel && !existe(rel)) err('sw.js : ASSETS liste un fichier absent « ' + a + ' »');
  });
  if (!enCache.has('')) err('sw.js : « ./ » absent de ASSETS');
  // tout ce que charge index.html doit être pré-caché
  ['index.html'].concat(scripts, liens).forEach((f) => {
    if (!enCache.has(f.replace(/^\.\//, ''))) err('sw.js : « ' + f + ' » (chargé par index.html) absent de ASSETS');
  });
  // images des cours : pré-cachées ; vidéos (et leurs affiches) : volontairement lues en ligne
  medias.forEach((f) => {
    if (!f.startsWith('videos/') && existe(f) && !enCache.has(f)) err('sw.js : « ' + f + ' » (référencé par le contenu) absent de ASSETS');
  });
  // images présentes dans img/ mais jamais utilisées
  assets.filter((a) => a.startsWith('./img/')).forEach((a) => {
    if (!medias.has(a.slice(2))) avert('Image pré-cachée mais référencée nulle part : ' + a.slice(2));
  });
}

/* ---------------------------------------------------------- rapport */
const parStatut = (s) => VSAV.chapters.filter((c) => c.status === s).length;
const nbSections = VSAV.chapters.reduce((n, c) => n + c.sections.length, 0);
console.log('Pulsar VSAV — vérification du contenu');
console.log('  ' + scripts.length + ' scripts chargés depuis index.html');
console.log('  ' + VSAV.parts.length + ' parties, ' + VSAV.chapters.length + ' chapitres (' +
  parStatut('complet') + ' complets, ' + parStatut('partiel') + ' partiels, ' + parStatut('vide') + ' non rédigés), ' + nbSections + ' sections');
console.log('  ' + nbQuestions + ' questions de quiz, ' + VSAV.essentiel.length + ' groupes « L’essentiel »');
console.log('  ' + medias.size + ' fichiers médias référencés, ' + (assets ? assets.length : 0) + ' entrées pré-cachées dans sw.js');

if (avertissements.length) {
  console.log('\n⚠ ' + avertissements.length + ' avertissement(s) :');
  avertissements.forEach((a) => console.log('  - ' + a));
}
if (erreurs.length) {
  console.log('\n✗ ' + erreurs.length + ' erreur(s) :');
  erreurs.forEach((e) => console.log('  - ' + e));
  process.exit(1);
}
console.log('\n✓ Aucune erreur.');
