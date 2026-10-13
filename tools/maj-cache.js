#!/usr/bin/env node
/* ==========================================================
   Pulsar VSAV — mise à jour du pré-cache du service worker
   Usage : node tools/maj-cache.js
   - régénère le tableau ASSETS de sw.js (fichiers pré-cachés) ;
   - remplace CACHE par 'pulsar-vsav-<8 premiers caractères du
     sha256 du contenu des fichiers listés>'.
   Idempotent : sans changement de fichier, sw.js n'est pas réécrit.
   Zéro dépendance, Node 18+.
   ========================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const RACINE = path.resolve(__dirname, '..');
const SW = path.join(RACINE, 'sw.js');

/* Périmètre du pré-cache (identique à la liste historique) :
   - "./" (la page d'accueil) ;
   - à la racine : la page HTML, le manifeste et les icônes (svg, png) ;
   - tout css/, js/ (moteur + données) et img/ (schémas des cours).
   Volontairement exclus : videos/ (lues en ligne, jamais mises en cache),
   docs/, tools/, .github/, README.md, _headers, .nojekyll et sw.js lui-même. */
const RACINE_EXT = /\.(html|webmanifest|svg|png)$/i;
const DOSSIERS = ['css', 'js', 'img'];

/* Liste récursive des fichiers d'un dossier (chemins relatifs, séparateur « / »). */
function lister(dossier) {
  const abs = path.join(RACINE, dossier);
  if (!fs.existsSync(abs)) return [];
  const res = [];
  for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const rel = dossier + '/' + e.name;
    if (e.isDirectory()) res.push(...lister(rel));
    else if (e.isFile()) res.push(rel);
  }
  return res;
}

/* Fichiers à pré-cacher, triés par ordre de code (stable, indépendant de la locale). */
function fichiersAttendus() {
  const racine = fs.readdirSync(RACINE, { withFileTypes: true })
    .filter((e) => e.isFile() && RACINE_EXT.test(e.name))
    .map((e) => e.name);
  const tous = racine.concat(...DOSSIERS.map(lister));
  return tous.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}

/* Tableau ASSETS complet : "./" en tête, puis "./<fichier>". */
function assetsAttendus() {
  return ['./'].concat(fichiersAttendus().map((f) => './' + f));
}

/* Empreinte : sha256 de (chemin + NUL + contenu + NUL) pour chaque fichier, dans l'ordre trié. */
function empreinte(fichiers) {
  const h = crypto.createHash('sha256');
  for (const f of fichiers) {
    h.update(f + '\0');
    h.update(fs.readFileSync(path.join(RACINE, f)));
    h.update('\0');
  }
  return h.digest('hex').slice(0, 8);
}

const RE_CACHE = /const CACHE = '[^']*';/;
const RE_ASSETS = /const ASSETS = \[[\s\S]*?\];/;

/* Lecture du tableau ASSETS actuel de sw.js (pour comparaison et pour le vérificateur). */
function lireAssets(source) {
  const m = RE_ASSETS.exec(source);
  if (!m) return null;
  return JSON.parse(m[0].replace(/^const ASSETS = /, '').replace(/;$/, ''));
}

function main() {
  const avant = fs.readFileSync(SW, 'utf8');
  if (!RE_CACHE.test(avant) || !RE_ASSETS.test(avant)) {
    console.error('✗ sw.js : déclaration « const CACHE = … » ou « const ASSETS = [ … ]; » introuvable.');
    process.exit(1);
  }
  const fichiers = fichiersAttendus();
  const assets = assetsAttendus();
  const cache = 'pulsar-vsav-' + empreinte(fichiers);

  const anciens = lireAssets(avant) || [];
  const ajoutes = assets.filter((a) => !anciens.includes(a));
  const retires = anciens.filter((a) => !assets.includes(a));

  const tableau = 'const ASSETS = [\n' + assets.map((a) => '  ' + JSON.stringify(a)).join(',\n') + '\n];';
  // fonctions de remplacement : évite l'interprétation des « $ » dans le texte inséré
  const apres = avant
    .replace(RE_CACHE, () => "const CACHE = '" + cache + "';")
    .replace(RE_ASSETS, () => tableau);

  if (apres === avant) {
    console.log('✓ sw.js déjà à jour (' + cache + ', ' + assets.length + ' fichiers pré-cachés).');
    return;
  }
  fs.writeFileSync(SW, apres);
  console.log('✓ sw.js mis à jour : ' + cache + ', ' + assets.length + ' fichiers pré-cachés.');
  ajoutes.forEach((a) => console.log('  + ajouté  ' + a));
  retires.forEach((a) => console.log('  - retiré  ' + a));
}

module.exports = { RACINE, assetsAttendus, lireAssets };

if (require.main === module) main();
