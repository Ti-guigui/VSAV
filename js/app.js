/* ==========================================================
   Pulsar VSAV — moteur de l'application (100 % statique)
   Contenu : js/data/*.js · Schémas / animations : js/svg.js
   ========================================================== */
(function () {
  'use strict';

  var VSAV = window.VSAV = {
    parts: [], chapters: [], byId: {}, partById: {}, essentiel: [], svg: {}, anim: {}, version: '1.0.0'
  };
  var KEY = 'pulsar-vsav-v1';
  var DEFAULT_ACCENT = '#b5172a';
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  VSAV.reduceMotion = reduceMotion;

  /* ---------------------------------------------------------- icônes */
  var ICONS = {
    heart: 'M12 20.5s-7.5-4.6-9.4-9.4A5 5 0 0 1 12 6.4a5 5 0 0 1 9.4 4.7c-1.9 4.8-9.4 9.4-9.4 9.4z',
    ecg: 'M2 12h4l2.2-5 3.6 10 2.4-6 1.6 1H22',
    drop: 'M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z',
    snow: 'M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5',
    sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
    bolt: 'M13 2L4 14h7l-1 8 9-12h-7z',
    wave: 'M2 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 15c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 21c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2',
    brain: 'M9.5 4A3 3 0 0 0 6.6 6.3 3 3 0 0 0 4.5 11a3 3 0 0 0 1 5 3 3 0 0 0 4.5 3 2 2 0 0 0 2-2V5.5A2 2 0 0 0 9.5 4zM14.5 4a3 3 0 0 1 2.9 2.3 3 3 0 0 1 2.1 4.7 3 3 0 0 1-1 5 3 3 0 0 1-4.5 3 2 2 0 0 1-2-2',
    lungs: 'M12 3v8M12 10c-1.5 0-2.5.8-3.2 2.2C8 14 8 17 8 19c-2.2.4-5-.6-5-3.6 0-5 2.6-9.4 5-9.4 2 0 4 1.7 4 4M12 10c1.5 0 2.5.8 3.2 2.2.8 1.8.8 4.8.8 6.8 2.2.4 5-.6 5-3.6 0-5-2.6-9.4-5-9.4-2 0-4 1.7-4 4',
    bone: 'M8.5 7.1L16.9 15.5M7.6 3.3a2.4 2.4 0 0 0-4.2 2.1 2.4 2.4 0 0 0 2.1 4.2l8.9 8.9a2.4 2.4 0 0 0 4.2 2.1 2.4 2.4 0 0 0 2.1-4.2l-8.9-8.9a2.4 2.4 0 0 0-4.2-4.2z',
    car: 'M3 13.5l2.2-5.5h13.6l2.2 5.5V18h-3v-2H6v2H3zM3 13.5h18M7 15.5h.01M17 15.5h.01M8 8l1-3h6l1 3',
    stretcher: 'M2 14h20M4 14v4M20 14v4M3 19h2M19 19h2M6 11h6a2 2 0 0 1 2 2v1M17.5 9.5a2 2 0 1 0 0 .01',
    cross: 'M9 3h6v6h6v6h-6v6H9v-6H3V9h6z',
    shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
    eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    baby: 'M12 3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM6 21c0-4 2.7-7.5 6-7.5s6 3.5 6 7.5M10.5 7h.01M13.5 7h.01',
    team: 'M9 4.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6a2.5 2.5 0 1 0 0 5M17.5 14c2.4.4 4 2.6 4 5',
    bug: 'M12 7a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0v-5a3 3 0 0 1 3-3zM12 7V4M9 11H5M15 11h4M9 15.5H5M15 15.5h4M10 4l-1.5-1.5M14 4l1.5-1.5',
    flame: 'M12 2.5c1.2 4 6 6 6 11a6 6 0 0 1-12 0c0-3 1.8-5 3-6 0 2 1 3 2 3.2 0-3-1-5.6 1-8.2z',
    skull: 'M12 3a8 8 0 0 0-5 14.2V20h10v-2.8A8 8 0 0 0 12 3zM9 11.5h.01M15 11.5h.01M10 16.5h4M12 20v-3',
    rope: 'M12 2v5M7.5 7h9l-1.3 6a3.3 3.3 0 0 1-6.4 0zM12 16v6',
    hand: 'M8 13V5.5a1.5 1.5 0 0 1 3 0V11M11 10V4a1.5 1.5 0 0 1 3 0v6M14 10V5.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7 6 6 0 0 1-5-2.8l-2.6-4.4a1.5 1.5 0 0 1 2.6-1.5L8 14',
    strap: 'M3 7h18M3 12h18M3 17h18M7 4v16M17 4v16',
    spray: 'M8 10h7v11H8zM9.5 10V7h4v3M14 4.5h3M17 2.5v4M19.5 3h.01M19.5 6h.01',
    blast: 'M12 2l1.8 5.6 5.7-1.9-3.7 4.7 5.2 2.8-5.9.6.9 5.9-4-4.3-4 4.3.9-5.9-5.9-.6 5.2-2.8-3.7-4.7 5.7 1.9z',
    mountain: 'M2 20l7-12 4 6.5 2.5-3.5L22 20zM9 8l1.5 2.5',
    chair: 'M7 3v9h10M7 12v9M17 12v9M7 16.5h10M10 3h4',
    walk: 'M13 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM10 21l2.2-6.5 2.8 3V21M8.5 11.5l3-3.5 3 2.7 3 1M11.5 8.5l-2 5',
    ambulance: 'M2 6.5h11v10H2zM13 9.5h4.5l3.5 3.5v3.5h-8M6 19.5a2 2 0 1 0 0-.01M17 19.5a2 2 0 1 0 0-.01M7.5 8.5v5M5 11h5',
    bottle: 'M10 2.5h4v3h-4zM8 5.5h8V21H8zM12 11v6M9 14h6',
    psy: 'M12 2.5a7.5 7.5 0 0 0-7.5 7.5c0 2.2 1 3.3 1 5.3V21h7.5v-2.5h3a2 2 0 0 0 2-2v-3l2.2-1-2.2-3.4A7.5 7.5 0 0 0 12 2.5zM10 9.5a2 2 0 1 1 3 1.7c-.6.4-1 .9-1 1.6M12 15.5h.01',
    defib: 'M3.5 6h17v12h-17zM13 8l-3.5 4.5h4.5L10.5 17',
    clip: 'M9 3h6v3H9zM6 5h3M15 5h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1M9 12l2 2 4-4',
    book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M9 7h6',
    star: 'M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z',
    target: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM12 11.2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6',
    alert: 'M12 3l10 18H2zM12 10v5M12 18h.01',
    bulb: 'M9 18h6M10 21.5h4M12 2.5a6.5 6.5 0 0 0-3.8 11.8V16h7.6v-1.7A6.5 6.5 0 0 0 12 2.5z',
    list: 'M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01',
    image: 'M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M15.5 8.5a1.5 1.5 0 1 0 0 .01',
    play: 'M7 4.5v15l12-7.5z',
    pause: 'M7 4.5h3.5v15H7zM13.5 4.5H17v15h-3.5z',
    prev: 'M15 5l-7 7 7 7',
    next: 'M9 5l7 7-7 7',
    reset: 'M3.5 12a8.5 8.5 0 1 0 2.5-6M3.5 3.5V8H8',
    print: 'M7 8V3h10v5M7 17H4v-7h16v7h-3M7 14h10v7H7z',
    download: 'M12 3v12M7 10l5 5 5-5M4 20h16',
    upload: 'M12 15V3M7 8l5-5 5 5M4 20h16',
    trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
    moon: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
    check: 'M4 12.5l5 5L20 6.5',
    clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
    pin: 'M12 21s7-6.3 7-12a7 7 0 0 0-14 0c0 5.7 7 12 7 12zM12 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
    grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
    molecule: 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM19 16.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM19 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM6.5 6.5l3 3M17.5 6.5l-3 3M17.5 17.5l-3-3',
    road: 'M8 2L4 22M16 2l4 20M12 3v3M12 10v4M12 18v3',
    neck: 'M8 3h8M9 3c0 3-1.5 4.5-1.5 7h9C16.5 7.5 15 6 15 3M6 10h12l-1 3H7zM8 13v8M16 13v8',
    pelvis: 'M4 6c2 0 3 2 5 2h6c2 0 3-2 5-2-.5 5-3 7-5 9l-1 4h-4l-1-4c-2-2-4.5-4-5-9zM12 8v6',
    hospital: 'M4 21V6l8-3 8 3v15M9 21v-5h6v5M12 7.5v5M9.5 10h5'
  };
  VSAV.ICONS = ICONS;
  function icon(name, cls) {
    var d = ICONS[name] || ICONS.cross;
    return '<svg class="' + (cls || 'ic') + '" viewBox="0 0 24 24" aria-hidden="true"><path d="' + d + '"/></svg>';
  }
  VSAV.icon = icon;

  /* fond thématique : motif d'icônes répété sur un dégradé de la couleur de la partie / du chapitre */
  function patternBg(motif, color) {
    var d = ICONS[motif] || ICONS.cross;
    var tile = '<svg xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 132 132">' +
      '<g fill="none" stroke="#fff" stroke-opacity=".17" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
      '<path transform="translate(10 12) scale(1.9)" d="' + d + '"/>' +
      '<path transform="translate(78 74) rotate(-14 20 20) scale(1.5)" d="' + d + '"/></g>' +
      '<circle cx="104" cy="22" r="2" fill="#fff" fill-opacity=".18"/><circle cx="30" cy="104" r="2" fill="#fff" fill-opacity=".18"/></svg>';
    return 'url("data:image/svg+xml,' + encodeURIComponent(tile) + '"), linear-gradient(135deg, ' + color + ', color-mix(in srgb, ' + color + ' 62%, #000))';
  }
  VSAV.patternBg = patternBg;

  /* ---------------------------------------------------------- utilitaires */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’']/g, "'"); }
  function strip(html) { var d = document.createElement('div'); d.innerHTML = html || ''; return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function toast(msg) { var t = $('#toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove('on'); }, 2400); }
  VSAV.util = { $: $, $all: $all, esc: esc, norm: norm, strip: strip, toast: toast };

  /* ---------------------------------------------------------- état (localStorage) */
  var state = load();
  function blank() { return { v: 1, theme: 'auto', read: {}, quiz: {}, err: {}, last: null }; }
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!s || typeof s !== 'object') return blank();
      var b = blank(); for (var k in b) if (!(k in s)) s[k] = b[k];
      return s;
    } catch (e) { return blank(); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* stockage indisponible */ } updateBadge(); }
  VSAV.state = function () { return state; };

  /* ---------------------------------------------------------- enregistrement du contenu */
  VSAV.part = function (p) { VSAV.parts.push(p); VSAV.partById[p.id] = p; };
  VSAV.chap = function (c) {
    c.sections = c.sections || []; c.quiz = c.quiz || []; c.key = c.key || []; c.traps = c.traps || []; c.sources = c.sources || [];
    c.status = c.status || 'complet';
    VSAV.chapters.push(c); VSAV.byId[c.id] = c;
  };
  VSAV.ess = function (groups) { VSAV.essentiel = VSAV.essentiel.concat(groups); };
  function chapsOf(pid) { return VSAV.chapters.filter(function (c) { return c.part === pid; }); }
  function accentOf(c) { return c.accent || (VSAV.partById[c.part] || {}).color || DEFAULT_ACCENT; }
  function qid(c, i) { return c.id + '#' + i; }
  function findQ(id) { var p = id.split('#'); var c = VSAV.byId[p[0]]; if (!c) return null; var q = c.quiz[+p[1]]; return q ? { c: c, q: q, i: +p[1] } : null; }

  /* ---------------------------------------------------------- erreurs */
  var MASTERY = 2; // bonnes réponses consécutives pour considérer une question maîtrisée
  function recordAnswer(id, ok) {
    var e = state.err[id];
    if (!ok) {
      if (!e) e = state.err[id] = { n: 0, streak: 0, m: false, t: 0 };
      e.n++; e.streak = 0; e.m = false; e.t = Date.now();
    } else if (e) {
      e.streak++; if (e.streak >= MASTERY) e.m = true; e.t = Date.now();
    }
    save();
  }
  function activeErrors() { return Object.keys(state.err).filter(function (k) { return !state.err[k].m && findQ(k); }); }
  function updateBadge() {
    var b = $('#err-badge'); if (!b) return;
    var n = activeErrors().length; b.hidden = !n; b.textContent = n > 99 ? '99+' : n;
  }

  /* ---------------------------------------------------------- thème */
  function applyTheme() {
    var t = state.theme;
    var dark = t === 'dark' || (t === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }
  function setAccent(color) { document.documentElement.style.setProperty('--accent', color || DEFAULT_ACCENT); var m = $('meta[name="theme-color"]'); if (m) m.setAttribute('content', color || '#9d0208'); }

  /* ---------------------------------------------------------- rendu des blocs */
  var ROLE_RE = /^((?:Secouristes?|Équipiers?|S)\s?\d+(?:\s*(?:,|et|&|\+)\s*\d+)*(?:\s*\(éventuellement\s*\d+\))?|Chef d’agrès|CA|Aide|L’aide|Tous)\s*:\s*/i;
  function stepHtml(s) {
    var who = '';
    var m = s.match(ROLE_RE);
    if (m) { who = '<span class="who">' + esc(m[1].replace(/Secouristes?\s?/i, 'S').replace(/Équipiers?\s?/i, 'É')) + '</span>'; s = s.slice(m[0].length); }
    s = s.replace(/«[^»]+»/g, function (x) { return '<span class="cmd">' + x + '</span>'; });
    return who + s;
  }
  function stepsBlock(steps, title) {
    return '<div class="stepper" data-stepper>' +
      '<div class="stepper-bar no-print"><b>' + esc(title || 'Étapes') + '</b>' +
      '<span class="prog" aria-hidden="true"><i></i></span>' +
      '<button class="btn" type="button" data-st="prev" aria-label="Étape précédente">' + icon('prev', '') + '</button>' +
      '<button class="btn primary" type="button" data-st="play">' + icon('play', '') + '<span>Pas à pas</span></button>' +
      '<button class="btn" type="button" data-st="next" aria-label="Étape suivante">' + icon('next', '') + '</button></div>' +
      '<ol class="steps">' + steps.map(function (s) { return '<li>' + stepHtml(s) + '</li>'; }).join('') + '</ol></div>';
  }
  function figBlock(f, i) {
    var inner = '';
    if (f.svg && VSAV.svg[f.svg]) inner = VSAV.svg[f.svg](f.a || {});
    else if (f.anim) inner = '<div class="anim-host" data-anim="' + esc(f.anim) + '" data-args="' + esc(JSON.stringify(f.a || {})) + '"></div>';
    else if (f.img) inner = '<img src="' + esc(f.img) + '" alt="' + esc(f.alt || f.cap || 'Schéma') + '" loading="lazy" data-zoom>';
    return '<figure class="schema' + (f.anim ? ' is-anim' : '') + '">' + (f.anim ? inner : '<div class="fig">' + inner + '</div>') +
      '<figcaption><b>' + esc(f.cap || 'Schéma') + '</b>' + (f.txt || '') +
      (f.src ? '<div class="small muted">Source : ' + esc(f.src) + '</div>' : '') + '</figcaption></figure>';
  }
  VSAV.figBlock = figBlock;

  function mountDynamic(root) {
    $all('[data-anim]', root).forEach(function (el) {
      var name = el.getAttribute('data-anim'); var a = {};
      try { a = JSON.parse(el.getAttribute('data-args') || '{}'); } catch (e) { /* ignore */ }
      if (VSAV.anim[name]) { try { VSAV.anim[name](el, a); } catch (err) { el.innerHTML = '<p class="callout bad">Animation indisponible.</p>'; if (window.console) console.warn(err); } }
    });
    $all('[data-stepper]', root).forEach(initStepper);
    $all('img[data-zoom]', root).forEach(function (img) {
      img.addEventListener('click', function () {
        var lb = document.createElement('div'); lb.className = 'lightbox'; lb.innerHTML = '<img src="' + img.getAttribute('src') + '" alt="' + esc(img.alt) + '">';
        lb.addEventListener('click', function () { lb.remove(); }); document.body.appendChild(lb);
      });
    });
  }
  VSAV.mountDynamic = mountDynamic;

  function initStepper(box) {
    var lis = $all('ol.steps > li', box), i = -1, timer = null;
    var bar = $('.prog i', box), playBtn = $('[data-st="play"]', box);
    function show(n) {
      i = Math.max(0, Math.min(lis.length - 1, n));
      lis.forEach(function (li, k) { li.classList.toggle('on', k === i); li.classList.toggle('done', k < i); });
      bar.style.width = ((i + 1) / lis.length * 100) + '%';
      var r = lis[i].getBoundingClientRect();
      if (r.top < 120 || r.bottom > window.innerHeight - 90) lis[i].scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
    }
    function stop() { clearTimeout(timer); timer = null; playBtn.querySelector('span').textContent = 'Pas à pas'; playBtn.innerHTML = icon('play', '') + '<span>Pas à pas</span>'; }
    function tick() {
      if (i >= lis.length - 1) { stop(); return; }
      show(i + 1);
      var len = lis[i].textContent.length;
      timer = setTimeout(tick, Math.min(9000, 2200 + len * 38));
    }
    playBtn.addEventListener('click', function () {
      if (timer) { stop(); return; }
      if (i >= lis.length - 1) i = -1;
      playBtn.innerHTML = icon('pause', '') + '<span>Pause</span>';
      tick();
    });
    $('[data-st="prev"]', box).addEventListener('click', function () { stop(); show(i - 1); });
    $('[data-st="next"]', box).addEventListener('click', function () { stop(); show(i + 1); });
    lis.forEach(function (li, k) { li.addEventListener('click', function () { stop(); show(k); }); });
  }

  /* ---------------------------------------------------------- navigation : onglets & barre latérale */
  function renderPartTabs(activePart) {
    var h = '<a href="#/" style="--pc:' + DEFAULT_ACCENT + '"' + (!activePart ? ' aria-current="page"' : '') + '><span class="dot"></span>Accueil</a>';
    VSAV.parts.forEach(function (p) {
      h += '<a href="#/p/' + p.id + '" style="--pc:' + p.color + '"' + (activePart === p.id ? ' aria-current="page"' : '') + '><span class="dot"></span>' + esc(p.tab) + '</a>';
    });
    $('#part-tabs').innerHTML = h;
    var cur = $('#part-tabs [aria-current="page"]'); if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  function statusMark(c) {
    if (c.status === 'vide') return '<span class="st pill bad" title="Non rédigé">à venir</span>';
    if (c.status === 'partiel') return '<span class="st pill warn" title="Partiel">partiel</span>';
    if (state.read[c.id]) return '<span class="st" title="Lu" style="color:var(--ok)">✓</span>';
    return '';
  }
  function renderSidebar(activePart, activeChap) {
    var h = '<div class="side-sec">' +
      sideLink('#/', 'pin', 'Accueil', !activePart && route.name === 'home') +
      sideLink('#/essentiel', 'star', 'L’essentiel', route.name === 'essentiel') +
      sideLink('#/fiches', 'clip', 'Fiches mémoire', route.name === 'fiches') +
      sideLink('#/erreurs', 'reset', 'Mes erreurs', route.name === 'erreurs' || route.name === 'revision') +
      sideLink('#/gestion', 'grid', 'Gestion & progression', route.name === 'gestion') + '</div>';
    if (activePart) {
      var p = VSAV.partById[activePart];
      h += '<div class="side-sec" style="--pc:' + p.color + '"><div class="side-h">' + esc(p.tab) + ' — chapitres</div>';
      var lastSeq = null;
      chapsOf(activePart).forEach(function (c) {
        if (c.seq !== lastSeq) { h += '<div class="side-h" style="text-transform:none;letter-spacing:0;font-size:12px;color:var(--ink2)">' + esc(c.seq) + '</div>'; lastSeq = c.seq; }
        h += '<a class="side-link" style="--pc:' + accentOf(c) + '" href="#/c/' + c.id + '"' + (c.id === activeChap ? ' aria-current="page"' : '') + '><span class="ic">' + icon(c.motif) + '</span><span>' + esc(c.short || c.title) + '</span>' + statusMark(c) + '</a>';
      });
      h += '</div>';
    } else {
      h += '<div class="side-sec"><div class="side-h">Parties du programme</div>';
      VSAV.parts.forEach(function (p) {
        h += '<a class="side-link" style="--pc:' + p.color + '" href="#/p/' + p.id + '"><span class="ic">' + icon(p.motif) + '</span><span>' + esc(p.tab) + '</span><span class="st muted">' + chapsOf(p.id).length + '</span></a>';
      });
      h += '</div>';
    }
    $('#sidebar').innerHTML = h;
  }
  function sideLink(href, ic, label, cur) {
    return '<a class="side-link" href="' + href + '"' + (cur ? ' aria-current="page"' : '') + '><span class="ic">' + icon(ic) + '</span><span>' + esc(label) + '</span></a>';
  }
  function setBottomNav(name) {
    var map = { home: 'home', cours: 'cours', part: 'cours', chap: 'cours', quiz: 'cours', essentiel: 'essentiel', erreurs: 'erreurs', revision: 'erreurs', plus: 'plus', fiches: 'plus', gestion: 'plus', recherche: 'plus' };
    $all('.bottom-nav a').forEach(function (a) { if (a.getAttribute('data-nav') === map[name]) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  }

  /* ---------------------------------------------------------- routeur */
  var route = { name: 'home' };
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var q = ''; var qi = h.indexOf('?'); if (qi >= 0) { q = h.slice(qi + 1); h = h.slice(0, qi); }
    var params = {}; q.split('&').forEach(function (kv) { if (!kv) return; var p = kv.split('='); params[decodeURIComponent(p[0])] = decodeURIComponent((p[1] || '').replace(/\+/g, ' ')); });
    var seg = h.split('/').filter(Boolean).map(decodeURIComponent);
    return { seg: seg, params: params };
  }
  function go() {
    var r = parseHash(), s = r.seg, main = $('#main');
    var name = s[0] || 'home';
    route = { name: name, seg: s, params: r.params };
    var activePart = null, activeChap = null, accent = DEFAULT_ACCENT, html = '';
    try {
      if (name === 'home') html = viewHome();
      else if (name === 'cours') html = viewCours();
      else if (name === 'p' && VSAV.partById[s[1]]) { route.name = 'part'; activePart = s[1]; accent = VSAV.partById[s[1]].color; html = viewPart(VSAV.partById[s[1]]); }
      else if (name === 'c' && VSAV.byId[s[1]]) { route.name = 'chap'; var c = VSAV.byId[s[1]]; activePart = c.part; activeChap = c.id; accent = accentOf(c); html = viewChapter(c); }
      else if (name === 'quiz' && VSAV.byId[s[1]]) { var cq = VSAV.byId[s[1]]; activePart = cq.part; activeChap = cq.id; accent = accentOf(cq); html = viewQuiz(cq); }
      else if (name === 'erreurs') html = viewErreurs();
      else if (name === 'revision') html = viewRevision();
      else if (name === 'fiches') { activePart = null; if (s[1] && VSAV.partById[s[1]]) accent = VSAV.partById[s[1]].color; html = viewFiches(s[1]); }
      else if (name === 'essentiel') html = viewEssentiel();
      else if (name === 'gestion') html = viewGestion();
      else if (name === 'plus') html = viewPlus();
      else if (name === 'recherche') html = viewSearch(r.params.q || '');
      else { route.name = 'home'; html = '<div class="wrap"><div class="card empty"><h1>Page introuvable</h1><p><a href="#/">Retour à l’accueil</a></p></div></div>'; }
    } catch (err) {
      html = '<div class="wrap"><div class="callout bad"><b>Erreur d’affichage</b>' + esc(err.message) + '</div></div>';
      if (window.console) console.error(err);
    }
    var sp = $('#search-pop'); if (sp) sp.hidden = true;
    setAccent(accent);
    renderPartTabs(activePart);
    renderSidebar(activePart, activeChap);
    setBottomNav(route.name);
    VSAV.stopAll();
    main.innerHTML = html;
    mountDynamic(main);
    bindView(main);
    // ancre de section
    if (route.name === 'chap' && s[2]) {
      var target = document.getElementById('s-' + s[2]);
      if (target) {
        if (r.params.q) highlightIn(target, r.params.q);
        setTimeout(function () { target.scrollIntoView({ block: 'start', behavior: 'auto' }); target.classList.add('flash'); }, 30);
      }
    } else { window.scrollTo(0, 0); }
    document.title = (route.title ? route.title + ' — ' : '') + 'Pulsar VSAV';
    if (route.name === 'chap') { state.last = activeChap; save(); }
  }
  VSAV.go = go;
  var stoppers = [];
  VSAV.onStop = function (fn) { stoppers.push(fn); };
  VSAV.stopAll = function () { stoppers.forEach(function (f) { try { f(); } catch (e) { /* */ } }); stoppers = []; };

  function highlightIn(root, q) {
    var terms = norm(q).split(/\s+/).filter(function (t) { return t.length > 1; });
    if (!terms.length) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), nodes = [], n;
    while ((n = walker.nextNode())) { if (n.parentNode && !/^(SCRIPT|STYLE|svg|text|tspan)$/i.test(n.parentNode.nodeName) && !n.parentNode.closest('svg')) nodes.push(n); }
    nodes.forEach(function (node) {
      var t = node.nodeValue, nt = norm(t), hits = [];
      terms.forEach(function (term) { var k = nt.indexOf(term); while (k >= 0) { hits.push([k, k + term.length]); k = nt.indexOf(term, k + term.length); } });
      if (!hits.length) return;
      hits.sort(function (a, b) { return a[0] - b[0]; });
      var frag = document.createDocumentFragment(), pos = 0;
      hits.forEach(function (h) { if (h[0] < pos) return; frag.appendChild(document.createTextNode(t.slice(pos, h[0]))); var mk = document.createElement('mark'); mk.textContent = t.slice(h[0], h[1]); frag.appendChild(mk); pos = h[1]; });
      frag.appendChild(document.createTextNode(t.slice(pos))); node.parentNode.replaceChild(frag, node);
    });
  }

  /* ---------------------------------------------------------- vues */
  function heroHtml(o) {
    return '<header class="hero" style="background-image:' + patternBg(o.motif, o.color) + '">' +
      '<span class="hero-ic">' + icon(o.motif) + '</span>' +
      (o.crumb ? '<div class="crumb">' + o.crumb + '</div>' : '') +
      '<h1>' + o.title + '</h1>' + (o.sub ? '<p>' + o.sub + '</p>' : '') +
      (o.meta ? '<div class="meta">' + o.meta.map(function (m) { return '<span>' + m + '</span>'; }).join('') + '</div>' : '') + '</header>';
  }
  function partProgress(pid) {
    var cs = chapsOf(pid).filter(function (c) { return c.status !== 'vide'; });
    if (!cs.length) return 0;
    var done = cs.filter(function (c) { return state.read[c.id]; }).length;
    return Math.round(done / cs.length * 100);
  }
  function globalStats() {
    var cs = VSAV.chapters.filter(function (c) { return c.status !== 'vide'; });
    var read = cs.filter(function (c) { return state.read[c.id]; }).length;
    var quizDone = Object.keys(state.quiz).filter(function (k) { return VSAV.byId[k]; }).length;
    var qTotal = VSAV.chapters.reduce(function (a, c) { return a + c.quiz.length; }, 0);
    var mastered = Object.keys(state.err).filter(function (k) { return state.err[k].m; }).length;
    return { chap: cs.length, read: read, quizDone: quizDone, qTotal: qTotal, active: activeErrors().length, mastered: mastered };
  }

  function viewHome() {
    route.title = 'Accueil';
    var st = globalStats();
    var last = state.last && VSAV.byId[state.last];
    var h = '<div class="wrap">' + heroHtml({ motif: 'ecg', color: DEFAULT_ACCENT, crumb: 'Formations Équipier VSAV (SUAP) et Équipier incendie', title: 'Révise l’application des techniques VSAV', sub: 'Cours partie par partie, schémas expliqués et animés, fiches mémoire, l’essentiel à retenir, quiz et carnet d’erreurs. Tout fonctionne hors ligne.', meta: [st.chap + ' chapitres rédigés', st.qTotal + ' questions', 'Sources : fiches FT · PR · AC (MAJ 05/2024) · livret Équipier incendie'] });
    h += '<div class="grid g3" style="margin-bottom:16px">' +
      '<div class="card stat"><b>' + st.read + '/' + st.chap + '</b>chapitres lus</div>' +
      '<div class="card stat"><b>' + st.quizDone + '</b>quiz réalisés</div>' +
      '<a class="card stat" style="text-decoration:none;color:inherit" href="#/erreurs"><b>' + st.active + '</b>erreurs à retravailler</a></div>';
    if (last) h += '<a class="card chap-card" style="--cc:' + accentOf(last) + ';margin-bottom:16px" href="#/c/' + last.id + '"><span class="ic">' + icon(last.motif) + '</span><span><span class="s">Reprendre là où tu t’es arrêté</span><span class="t">' + esc(last.title) + '</span></span></a>';
    h += '<h2>Les parties du programme</h2><div class="grid g2">';
    VSAV.parts.forEach(function (p) {
      var pr = partProgress(p.id);
      h += '<a class="card tile" href="#/p/' + p.id + '" style="--pc:' + p.color + '"><div class="band" style="background-image:' + patternBg(p.motif, p.color) + '"><b>' + esc(p.tab) + '</b><span class="ic">' + icon(p.motif) + '</span></div>' +
        '<h3>' + esc(p.title) + '</h3><p class="small muted">' + esc(p.desc) + '</p>' +
        '<div class="row small" style="justify-content:space-between"><span>' + chapsOf(p.id).length + ' chapitres</span><span>' + pr + ' % lu</span></div><div class="meter"><i style="width:' + pr + '%"></i></div></a>';
    });
    h += '</div><h2>Apprendre en images</h2><div class="grid g2">' +
      figBlock({ anim: 'xabcde', cap: 'Le bilan primaire XABCDE, pas à pas', txt: '<p>Suis la molécule d’oxygène : on traite ce qui tue en premier, dans l’ordre.</p>', src: 'PR - Bilan primaire' }) +
      figBlock({ anim: 'rcp', a: { mode: 'adulte' }, cap: 'Le rythme de la RCP', txt: '<p>Compressions à 100–120/min, cycles 30/2 (adulte) ou 15/2 (enfant, nourrisson).</p>', src: 'PR ACR · FT Compression thoracique · Mémento SSUAP' }) +
      '</div><h2>Raccourcis</h2><div class="grid g3">' +
      quick('#/essentiel', 'star', 'L’essentiel', 'Chiffres, seuils et conduites à tenir clés') +
      quick('#/fiches', 'clip', 'Fiches mémoire', 'Une fiche courte par matière, imprimable') +
      quick('#/erreurs', 'reset', 'Mes erreurs', 'Retravailler jusqu’à maîtrise') +
      quick('#/gestion', 'grid', 'Gestion', 'Progression, export, thème') + '</div></div>';
    return h;
  }
  function quick(href, ic, t, s) { return '<a class="card chap-card" style="--cc:var(--accent)" href="' + href + '"><span class="ic">' + icon(ic) + '</span><span><span class="t">' + t + '</span><span class="s">(' + s + ')</span></span></a>'; }

  function viewCours() {
    route.title = 'Cours';
    var h = '<div class="wrap">' + heroHtml({ motif: 'book', color: '#334155', crumb: 'Programmes Équipier VSAV v2024-05 et Équipier incendie', title: 'Tous les cours', sub: 'Choisis une partie, puis un chapitre. Chaque chapitre indique sa fiche source.' });
    VSAV.parts.forEach(function (p) { h += '<h2 style="color:' + p.color + '">' + esc(p.title) + '</h2>' + chapterCards(p.id); });
    return h + '</div>';
  }
  function chapterCards(pid) {
    var h = '', lastSeq = null;
    chapsOf(pid).forEach(function (c) {
      if (c.seq !== lastSeq) { if (lastSeq !== null) h += '</div>'; h += '<h3>' + esc(c.seq) + '</h3><div class="grid g2">'; lastSeq = c.seq; }
      var badge = c.status === 'vide' ? ' <span class="pill bad">non rédigé</span>' : c.status === 'partiel' ? ' <span class="pill warn">partiel</span>' : (state.read[c.id] ? ' <span class="pill ok">lu</span>' : '');
      var qz = state.quiz[c.id] ? ' · quiz ' + state.quiz[c.id].best + '/' + c.quiz.length : '';
      h += '<a class="card chap-card" style="--cc:' + accentOf(c) + '" href="#/c/' + c.id + '"><span class="ic">' + icon(c.motif) + '</span><span><span class="t">' + esc(c.title) + badge + '</span><span class="s">' + esc(c.sources.slice(0, 2).join(' · ')) + qz + '</span></span></a>';
    });
    return h + (lastSeq !== null ? '</div>' : '');
  }
  function viewPart(p) {
    route.title = p.title;
    var cs = chapsOf(p.id);
    var h = '<div class="wrap">' + heroHtml({ motif: p.motif, color: p.color, crumb: '<a href="#/cours">Cours</a> › ' + esc(p.tab), title: esc(p.title), sub: esc(p.desc), meta: [cs.length + ' chapitres', partProgress(p.id) + ' % lu'] });
    if (p.intro) h += '<div class="why">' + p.intro + '</div>';
    h += chapterCards(p.id);
    h += '<div class="row" style="margin-top:18px"><a class="btn" href="#/fiches/' + p.id + '">' + icon('clip', '') + 'Fiches mémoire de cette partie</a></div></div>';
    return h;
  }

  var SEC_ICONS = { why: 'bulb', key: 'star', quiz: 'target', src: 'book' };
  function viewChapter(c) {
    route.title = c.title;
    var p = VSAV.partById[c.part];
    var cs = chapsOf(c.part), idx = cs.indexOf(c);
    var h = '<div class="wrap">' + heroHtml({ motif: c.motif, color: accentOf(c), crumb: '<a href="#/p/' + p.id + '">' + esc(p.tab) + '</a> › ' + esc(c.seq), title: esc(c.title), sub: c.summary ? esc(c.summary) : '', meta: c.sources.map(esc) });
    // navigation interne
    h += '<nav class="chap-nav no-print" aria-label="Sections du chapitre">';
    if (c.why) h += '<a href="#/c/' + c.id + '/pourquoi">Pourquoi ?</a>';
    c.sections.forEach(function (s) { h += '<a href="#/c/' + c.id + '/' + s.id + '">' + esc(s.nav || s.t) + '</a>'; });
    if (c.key.length || c.traps.length) h += '<a href="#/c/' + c.id + '/cles">Points clés & pièges</a>';
    if (c.quiz.length) h += '<a href="#/quiz/' + c.id + '">Quiz (' + c.quiz.length + ')</a>';
    h += '</nav>';
    if (c.status !== 'complet') {
      h += '<div class="callout ' + (c.status === 'vide' ? 'bad' : 'warn') + '"><b>' + (c.status === 'vide' ? 'Chapitre non rédigé' : 'Chapitre partiellement rédigé') + '</b>' + (c.todo || '') + '</div>';
    }
    if (c.why) h += '<section class="sec" id="s-pourquoi"><h2><span class="h-ic">' + icon('bulb', '') + '</span>Comprendre : le pourquoi</h2><div class="why">' + c.why + '</div></section>';
    c.sections.forEach(function (s) {
      h += '<section class="sec" id="s-' + s.id + '"><h2><span class="h-ic">' + icon(s.ic || 'list', '') + '</span>' + esc(s.t) + '</h2>' +
        (s.src ? '<div class="src">Fiche source : ' + esc(s.src) + '</div>' : '') + (s.html || '') +
        (s.steps ? stepsBlock(s.steps, s.stepsTitle) : '') +
        (s.figs ? s.figs.map(figBlock).join('') : '') + (s.after || '') + '</section>';
    });
    if (c.key.length || c.traps.length) {
      h += '<section class="sec" id="s-cles"><h2><span class="h-ic">' + icon('star', '') + '</span>Points clés & pièges fréquents</h2><div class="kp">';
      if (c.key.length) h += '<div class="card"><h3 style="color:var(--ok)">' + icon('check', 'ic" style="width:18px;height:18px') + 'À retenir</h3><ul class="check">' + c.key.map(function (k) { return '<li>' + k + '</li>'; }).join('') + '</ul></div>';
      if (c.traps.length) h += '<div class="card"><h3 style="color:var(--bad)">' + icon('alert', 'ic" style="width:18px;height:18px') + 'Pièges fréquents</h3><ul class="trap">' + c.traps.map(function (k) { return '<li>' + k + '</li>'; }).join('') + '</ul></div>';
      h += '</div></section>';
    }
    h += '<section class="sec" id="s-sources"><h2><span class="h-ic">' + icon('book', '') + '</span>Sources du chapitre</h2><ul>' + c.sources.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' +
      '<p class="small muted">Contenu rédigé exclusivement à partir des documents fournis (dossier « Modules formations SPV CHALONS », partie 1 – SUAP). En cas de doute, la fiche officielle fait foi.</p></section>';
    h += '<div class="row no-print" style="margin:18px 0">';
    if (c.quiz.length) h += '<a class="btn primary" href="#/quiz/' + c.id + '">' + icon('target', '') + 'Faire le quiz (' + c.quiz.length + ' questions)</a>';
    if (c.status !== 'vide') h += '<button class="btn" type="button" data-act="read" data-id="' + c.id + '">' + icon('check', '') + (state.read[c.id] ? 'Lu ✓ (annuler)' : 'Marquer comme lu') + '</button>';
    h += '</div><div class="row no-print" style="justify-content:space-between">' +
      (idx > 0 ? '<a class="btn ghost" href="#/c/' + cs[idx - 1].id + '">' + icon('prev', '') + esc(cs[idx - 1].short || cs[idx - 1].title) + '</a>' : '<span></span>') +
      (idx < cs.length - 1 ? '<a class="btn ghost" href="#/c/' + cs[idx + 1].id + '">' + esc(cs[idx + 1].short || cs[idx + 1].title) + icon('next', '') + '</a>' : '') + '</div></div>';
    return h;
  }

  /* --- quiz de chapitre --- */
  function questionHtml(c, i, n, total) {
    var q = c.quiz[i];
    var order = shuffle(q.c.map(function (txt, k) { return { txt: txt, ok: k === 0 }; }));
    return '<div class="q" data-qid="' + esc(qid(c, i)) + '"><div class="qn">Question ' + n + (total ? ' / ' + total : '') + '</div><div class="qh">' + q.q + '</div><div class="choices">' +
      order.map(function (o) { return '<button type="button" class="choice" data-ok="' + (o.ok ? 1 : 0) + '">' + o.txt + '</button>'; }).join('') + '</div></div>';
  }
  function viewQuiz(c) {
    route.title = 'Quiz — ' + c.title;
    var h = '<div class="wrap">' + heroHtml({ motif: 'target', color: accentOf(c), crumb: '<a href="#/c/' + c.id + '">' + esc(c.short || c.title) + '</a> › Quiz', title: 'Quiz : ' + esc(c.short || c.title), sub: 'Chaque mauvaise réponse est enregistrée dans « Mes erreurs » pour être retravaillée jusqu’à maîtrise.' });
    if (!c.quiz.length) return h + '<div class="card empty">Pas encore de questions pour ce chapitre.</div></div>';
    h += '<div id="quiz" data-chap="' + c.id + '" data-total="' + c.quiz.length + '">';
    c.quiz.forEach(function (q, i) { h += questionHtml(c, i, i + 1, c.quiz.length); });
    h += '</div><div class="card" id="quiz-score" hidden></div><div class="row no-print" style="margin-top:14px"><a class="btn" href="#/c/' + c.id + '">' + icon('prev', '') + 'Retour au chapitre</a><a class="btn" href="#/quiz/' + c.id + '?r=' + Date.now() + '">' + icon('reset', '') + 'Recommencer</a></div></div>';
    return h;
  }
  function answer(btn, onDone) {
    var box = btn.closest('.q'); if (box.classList.contains('answered')) return;
    box.classList.add('answered');
    var ok = btn.getAttribute('data-ok') === '1';
    $all('.choice', box).forEach(function (b) { b.disabled = true; if (b.getAttribute('data-ok') === '1') b.classList.add('right'); });
    if (!ok) btn.classList.add('wrong');
    var id = box.getAttribute('data-qid'); var f = findQ(id);
    recordAnswer(id, ok);
    var link = f.q.s ? ' <a href="#/c/' + f.c.id + '/' + f.q.s + '">Revoir la section →</a>' : ' <a href="#/c/' + f.c.id + '">Revoir le chapitre →</a>';
    var ex = document.createElement('div'); ex.className = 'expl';
    ex.innerHTML = (ok ? '<b style="color:var(--ok)">Bonne réponse.</b> ' : '<b style="color:var(--bad)">Erreur enregistrée.</b> Bonne réponse : « ' + f.q.c[0] + ' ». ') + (f.q.e || '') + link;
    box.appendChild(ex);
    if (onDone) onDone(ok, box);
  }

  /* --- erreurs --- */
  function viewErreurs() {
    route.title = 'Mes erreurs';
    var act = activeErrors(), all = Object.keys(state.err).filter(function (k) { return findQ(k); });
    var mastered = all.filter(function (k) { return state.err[k].m; });
    var h = '<div class="wrap">' + heroHtml({ motif: 'reset', color: '#9d0208', crumb: 'Carnet d’erreurs', title: 'Mes erreurs', sub: 'Chaque question ratée est gardée ici. Elle est considérée comme maîtrisée après ' + MASTERY + ' bonnes réponses consécutives.', meta: [act.length + ' à retravailler', mastered.length + ' maîtrisées'] });
    if (!all.length) return h + '<div class="card empty"><p><b>Aucune erreur enregistrée pour l’instant.</b></p><p>Fais les quiz des chapitres : chaque erreur apparaîtra ici avec son explication.</p><a class="btn primary" href="#/cours">Aller aux cours</a></div></div>';
    h += '<div class="row" style="margin-bottom:12px">' + (act.length ? '<a class="btn primary" href="#/revision">' + icon('play', '') + 'Retravailler mes ' + act.length + ' erreur' + (act.length > 1 ? 's' : '') + '</a>' : '<span class="pill ok">Toutes tes erreurs sont maîtrisées 👏</span>') +
      (mastered.length ? '<button class="btn ghost" type="button" data-act="clear-mastered">' + icon('trash', '') + 'Vider les maîtrisées</button>' : '') + '</div>';
    var byChap = {};
    all.forEach(function (k) { var f = findQ(k); (byChap[f.c.id] = byChap[f.c.id] || []).push(k); });
    Object.keys(byChap).forEach(function (cid) {
      var c = VSAV.byId[cid];
      h += '<div class="card" style="margin:12px 0;border-left:5px solid ' + accentOf(c) + '"><div class="row" style="justify-content:space-between"><b>' + esc(c.title) + '</b><a class="small" href="#/c/' + c.id + '">Revoir le cours</a></div>';
      byChap[cid].forEach(function (k) {
        var f = findQ(k), e = state.err[k];
        h += '<details style="margin-top:8px"><summary>' + (e.m ? '<span class="pill ok">maîtrisée</span> ' : '<span class="pill bad">' + e.n + ' erreur' + (e.n > 1 ? 's' : '') + ' · ' + e.streak + '/' + MASTERY + '</span> ') + strip(f.q.q) + '</summary>' +
          '<div class="expl"><b>Bonne réponse :</b> ' + f.q.c[0] + (f.q.e ? '<br>' + f.q.e : '') + (f.q.s ? ' <a href="#/c/' + c.id + '/' + f.q.s + '">Voir la section →</a>' : '') + '</div></details>';
      });
      h += '</div>';
    });
    return h + '</div>';
  }
  var session = null;
  function viewRevision() {
    route.title = 'Révision des erreurs';
    var act = activeErrors();
    var h = '<div class="wrap">' + heroHtml({ motif: 'target', color: '#9d0208', crumb: '<a href="#/erreurs">Mes erreurs</a> › Révision', title: 'Retravailler mes erreurs', sub: 'Une question à la fois. Une question ratée revient en fin de série jusqu’à ce que tu la réussisses.' });
    if (!act.length) return h + '<div class="card empty"><p><b>Rien à retravailler.</b></p><a class="btn" href="#/erreurs">Retour</a></div></div>';
    session = { queue: shuffle(act), done: 0, ok: 0, total: act.length };
    return h + '<div id="rev"></div></div>';
  }
  function revisionNext() {
    var box = $('#rev'); if (!box || !session) return;
    if (!session.queue.length) {
      box.innerHTML = '<div class="card stat"><div class="score-big">✓</div><p><b>Série terminée !</b> ' + session.ok + ' bonne(s) réponse(s) sur ' + session.done + ' tentative(s).</p><p class="muted">Encore ' + activeErrors().length + ' question(s) à consolider (' + MASTERY + ' réussites consécutives nécessaires).</p><div class="row" style="justify-content:center">' + (activeErrors().length ? '<a class="btn primary" href="#/revision?r=' + Date.now() + '">Nouvelle série</a>' : '') + '<a class="btn" href="#/erreurs">Voir mon carnet</a></div></div>';
      return;
    }
    var id = session.queue.shift(), f = findQ(id);
    box.innerHTML = '<div class="row small muted" style="justify-content:space-between"><span>' + esc(f.c.title) + '</span><span>Restant : ' + (session.queue.length + 1) + '</span></div>' + questionHtml(f.c, f.i, session.done + 1, 0) + '<div class="row" id="rev-next" hidden><button class="btn primary" type="button" data-act="rev-next">Question suivante ' + icon('next', '') + '</button></div>';
  }

  /* --- fiches mémoire --- */
  function viewFiches(pid) {
    route.title = 'Fiches mémoire';
    var parts = pid && VSAV.partById[pid] ? [VSAV.partById[pid]] : VSAV.parts;
    var h = '<div class="wrap">' + heroHtml({ motif: 'clip', color: pid ? VSAV.partById[pid].color : '#334155', crumb: 'Fiches mémoire générées par matière', title: pid ? 'Fiches mémoire — ' + esc(VSAV.partById[pid].tab) : 'Fiches mémoire', sub: 'Générées automatiquement à partir des points clés de chaque chapitre : format court, prêt à imprimer (1 matière = 1 série de fiches).' });
    h += '<div class="row no-print" style="margin-bottom:12px"><a class="btn' + (!pid ? ' primary' : '') + '" href="#/fiches">Toutes</a>';
    VSAV.parts.forEach(function (p) { h += '<a class="btn' + (pid === p.id ? ' primary' : '') + '" href="#/fiches/' + p.id + '" style="' + (pid === p.id ? 'background:' + p.color + ';border-color:' + p.color : '') + '">' + esc(p.tab) + '</a>'; });
    h += '<button class="btn" type="button" data-act="print">' + icon('print', '') + 'Imprimer</button></div>';
    parts.forEach(function (p) {
      h += '<h2 style="color:' + p.color + '">' + esc(p.title) + '</h2><div class="memo-cols">';
      chapsOf(p.id).forEach(function (c) {
        if (c.status === 'vide') return;
        var pts = (c.memo || c.key).slice(0, 7);
        h += '<div class="memo" style="--cc:' + accentOf(c) + '"><h3>' + esc(c.short || c.title) + '</h3><div class="src">' + esc(c.sources.join(' · ')) + '</div><ul>' + pts.map(function (k) { return '<li>' + k + '</li>'; }).join('') + '</ul>' +
          (c.traps[0] ? '<div class="trapline">⚠ ' + c.traps[0] + '</div>' : '') + '</div>';
      });
      h += '</div>';
    });
    return h + '</div>';
  }

  /* --- l'essentiel --- */
  function viewEssentiel() {
    route.title = 'L’essentiel';
    var h = '<div class="wrap">' + heroHtml({ motif: 'star', color: '#a15c00', crumb: 'Synthèse', title: 'L’essentiel', sub: 'Les chiffres, seuils et conduites à tenir les plus importants, regroupés. Chaque ligne renvoie à la section du cours concernée.' });
    h += '<nav class="chap-nav no-print">' + VSAV.essentiel.map(function (g, i) { return '<a href="#/essentiel" data-jump="ess-' + i + '">' + esc(g.t) + '</a>'; }).join('') + '<button class="btn" type="button" data-act="print" style="flex:none">' + icon('print', '') + 'Imprimer</button></nav>';
    VSAV.essentiel.forEach(function (g, i) {
      h += '<section class="sec ess-group" id="ess-' + i + '"><h2><span class="h-ic">' + icon(g.ic || 'star', '') + '</span>' + esc(g.t) + '</h2>' + (g.html || '');
      (g.items || []).forEach(function (it) {
        h += '<div class="ess-item"><div class="k">' + it.k + '</div><div class="v">' + it.v + (it.go ? ' <a class="go no-print" href="#/c/' + it.go + '">→ cours</a>' : '') + '</div></div>';
      });
      h += '</section>';
    });
    return h + '</div>';
  }

  /* --- gestion --- */
  function viewGestion() {
    route.title = 'Gestion';
    var st = globalStats();
    var h = '<div class="wrap">' + heroHtml({ motif: 'grid', color: '#334155', crumb: 'Application', title: 'Gestion & progression', sub: 'Ta progression est enregistrée uniquement dans ce navigateur (localStorage). Exporte-la pour la sauvegarder ou la transférer.' });
    h += '<div class="grid g3"><div class="card stat"><b>' + st.read + '/' + st.chap + '</b>chapitres lus</div><div class="card stat"><b>' + st.quizDone + '</b>quiz réalisés</div><div class="card stat"><b>' + st.active + '</b>erreurs actives</div><div class="card stat"><b>' + st.mastered + '</b>erreurs maîtrisées</div></div>';
    h += '<h2>Progression par partie</h2><div class="card">';
    VSAV.parts.forEach(function (p) {
      var pr = partProgress(p.id), cs = chapsOf(p.id);
      var qs = cs.filter(function (c) { return state.quiz[c.id]; });
      var avg = qs.length ? Math.round(qs.reduce(function (a, c) { return a + state.quiz[c.id].best / c.quiz.length; }, 0) / qs.length * 100) : null;
      h += '<div style="margin:10px 0;--pc:' + p.color + '"><div class="row" style="justify-content:space-between"><b>' + esc(p.tab) + '</b><span class="small muted">' + pr + ' % lu · ' + qs.length + '/' + cs.length + ' quiz' + (avg !== null ? ' · réussite moyenne ' + avg + ' %' : '') + '</span></div><div class="meter"><i style="width:' + pr + '%"></i></div></div>';
    });
    h += '</div><h2>Apparence</h2><div class="card"><div class="row" role="radiogroup" aria-label="Thème">' +
      ['auto', 'light', 'dark'].map(function (t) { return '<button class="btn' + (state.theme === t ? ' primary' : '') + '" type="button" data-act="theme" data-v="' + t + '" aria-pressed="' + (state.theme === t) + '">' + { auto: 'Automatique (système)', light: 'Clair', dark: 'Sombre' }[t] + '</button>'; }).join('') + '</div></div>';
    h += '<h2>Sauvegarde</h2><div class="card"><div class="row"><button class="btn" type="button" data-act="export">' + icon('download', '') + 'Exporter ma progression (.json)</button><label class="btn">' + icon('upload', '') + 'Importer…<input type="file" accept="application/json,.json" data-act="import" hidden></label></div>' +
      '<p class="small muted">L’import remplace la progression actuelle de ce navigateur.</p></div>';
    h += '<h2>Réinitialisation</h2><div class="card"><div class="row"><button class="btn danger" type="button" data-act="reset-err">' + icon('trash', '') + 'Effacer mes erreurs</button><button class="btn danger" type="button" data-act="reset-all">' + icon('trash', '') + 'Tout réinitialiser</button></div></div>';
    var todo = VSAV.chapters.filter(function (c) { return c.status !== 'complet'; });
    h += '<h2>État de rédaction du contenu</h2><div class="card"><p>' + VSAV.chapters.filter(function (c) { return c.status === 'complet'; }).length + ' chapitres rédigés en entier · ' + todo.filter(function (c) { return c.status === 'partiel'; }).length + ' partiels · ' + todo.filter(function (c) { return c.status === 'vide'; }).length + ' non rédigés.</p><ul>' +
      todo.map(function (c) { return '<li><a href="#/c/' + c.id + '">' + esc(c.title) + '</a> — <span class="pill ' + (c.status === 'vide' ? 'bad' : 'warn') + '">' + (c.status === 'vide' ? 'non rédigé' : 'partiel') + '</span> ' + strip(c.todo || '') + '</li>'; }).join('') + '</ul></div>';
    h += '<h2>À propos</h2><div class="card small"><p><b>Pulsar VSAV</b> v' + VSAV.version + ' — application de révision non officielle. Logo original ; aucun logo institutionnel. Le contenu médical provient uniquement des fiches fournies (FT, PR, AC, mémento SSUAP, mémos A6, MAJ 05/2024) ; la fiche officielle fait toujours foi.</p><p>Installation : depuis le navigateur, « Ajouter à l’écran d’accueil » (PWA). Fonctionne hors ligne après la première visite.</p></div></div>';
    return h;
  }
  function viewPlus() {
    route.title = 'Plus';
    return '<div class="wrap">' + heroHtml({ motif: 'grid', color: '#334155', title: 'Plus' }) + '<div class="grid g2">' +
      quick('#/cours', 'book', 'Tous les cours', 'Partie par partie, chapitre par chapitre') +
      quick('#/fiches', 'clip', 'Fiches mémoire', 'Par matière, imprimables') +
      quick('#/essentiel', 'star', 'L’essentiel', 'Chiffres et conduites à tenir') +
      quick('#/erreurs', 'reset', 'Mes erreurs', 'Carnet et révision') +
      quick('#/gestion', 'grid', 'Gestion', 'Progression, thème, export / import') + '</div></div>';
  }

  /* ---------------------------------------------------------- recherche */
  var index = null;
  function buildIndex() {
    index = [];
    VSAV.chapters.forEach(function (c) {
      var base = c.title + ' ' + c.sources.join(' ');
      index.push({ c: c, sid: '', t: c.title, sub: c.seq, txt: (c.summary || '') + ' ' + strip(c.why), extra: base });
      c.sections.forEach(function (s) {
        var txt = strip(s.html) + ' ' + (s.steps || []).join(' ') + ' ' + (s.figs || []).map(function (f) { return (f.cap || '') + ' ' + strip(f.txt || ''); }).join(' ') + ' ' + strip(s.after || '');
        index.push({ c: c, sid: s.id, t: s.t, sub: c.title, txt: txt, extra: (s.src || '') + ' ' + c.title });
      });
      if (c.key.length || c.traps.length) index.push({ c: c, sid: 'cles', t: 'Points clés & pièges', sub: c.title, txt: strip(c.key.join(' • ') + ' • ' + c.traps.join(' • ')), extra: c.title });
    });
    VSAV.essentiel.forEach(function (g) {
      (g.items || []).forEach(function (it) { index.push({ ess: true, go: it.go, t: strip(it.k), sub: 'L’essentiel · ' + g.t, txt: strip(it.v), extra: '' }); });
    });
    index.forEach(function (e) { e.n = norm(e.t + ' ' + e.txt + ' ' + e.extra); e.nt = norm(e.t); });
  }
  function search(q, limit) {
    if (!index) buildIndex();
    var terms = norm(q).split(/\s+/).filter(function (t) { return t.length > 0; });
    if (!terms.length) return [];
    var res = [];
    index.forEach(function (e) {
      var score = 0;
      for (var i = 0; i < terms.length; i++) {
        var t = terms[i]; var k = e.n.indexOf(t);
        if (k < 0) return;
        score += 1 + (e.nt.indexOf(t) >= 0 ? 6 : 0) + (new RegExp('(^|[^a-z0-9])' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).test(e.n) ? 2 : 0);
      }
      if (e.sid === '') score -= 3;
      res.push({ e: e, score: score });
    });
    res.sort(function (a, b) { return b.score - a.score; });
    return res.slice(0, limit || 50).map(function (r) { return r.e; });
  }
  VSAV.search = search;
  function snippet(e, q) {
    var terms = norm(q).split(/\s+/).filter(function (t) { return t.length > 1; }), txt = e.txt || '', nt = norm(txt);
    var pos = -1; terms.some(function (t) { pos = nt.indexOf(t); return pos >= 0; });
    var start = Math.max(0, pos - 60), raw = txt.slice(start, start + 170);
    var ns = norm(raw), marks = [];
    terms.forEach(function (t) { var k = ns.indexOf(t); while (k >= 0) { marks.push([k, k + t.length]); k = ns.indexOf(t, k + t.length); } });
    marks.sort(function (a, b) { return a[0] - b[0]; });
    var out = '', last = 0;
    marks.forEach(function (m) { if (m[0] < last) return; out += esc(raw.slice(last, m[0])) + '<mark>' + esc(raw.slice(m[0], m[1])) + '</mark>'; last = m[1]; });
    out += esc(raw.slice(last));
    return (start > 0 ? '…' : '') + out + (txt.length > start + 170 ? '…' : '');
  }
  function resultHref(e, q) {
    if (e.ess) return e.go ? '#/c/' + e.go : '#/essentiel';
    var sid = e.sid || (e.c.why ? 'pourquoi' : (e.c.sections[0] ? e.c.sections[0].id : ''));
    return '#/c/' + e.c.id + (sid ? '/' + sid : '') + '?q=' + encodeURIComponent(q);
  }
  function viewSearch(q) {
    route.title = 'Recherche';
    var res = q ? search(q, 80) : [];
    var h = '<div class="wrap">' + heroHtml({ motif: 'eye', color: '#334155', crumb: 'Recherche', title: q ? 'Résultats pour « ' + esc(q) + ' »' : 'Recherche', sub: res.length + ' résultat(s). Clique pour aller directement à la section concernée.' });
    if (!res.length) h += '<div class="card empty">Aucun résultat. Essaie un autre mot (ex. « garrot », « 15 l/min », « Glasgow », « MID »).</div>';
    res.forEach(function (e) {
      h += '<a class="card" style="display:block;margin:10px 0;text-decoration:none;color:inherit;border-left:5px solid ' + (e.c ? accentOf(e.c) : 'var(--accent)') + '" href="' + resultHref(e, q) + '"><div class="small muted">' + esc(e.sub) + '</div><b>' + esc(e.t) + '</b><div class="small">' + snippet(e, q) + '</div></a>';
    });
    return h + '</div>';
  }
  function initSearch() {
    var input = $('#search-input'), pop = $('#search-pop'), form = $('#search-form'), sel = -1, t;
    function close() { pop.hidden = true; sel = -1; }
    function render() {
      var q = input.value.trim();
      if (q.length < 2) { close(); return; }
      var res = search(q, 8);
      pop.innerHTML = (res.length ? res.map(function (e) { return '<a href="' + resultHref(e, q) + '"><div class="sr-c">' + esc(e.sub) + '</div><div class="sr-t">' + esc(e.t) + '</div><div class="sr-x">' + snippet(e, q) + '</div></a>'; }).join('') : '<a href="#/recherche?q=' + encodeURIComponent(q) + '"><div class="sr-x">Aucun résultat direct</div></a>') +
        '<a class="sr-all" href="#/recherche?q=' + encodeURIComponent(q) + '">Voir tous les résultats →</a>';
      pop.hidden = false; sel = -1;
    }
    input.addEventListener('input', function () { clearTimeout(t); t = setTimeout(render, 120); });
    input.addEventListener('focus', function () { if (input.value.trim().length >= 2) render(); });
    input.addEventListener('keydown', function (ev) {
      var links = $all('a', pop);
      if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
        if (pop.hidden) return; ev.preventDefault();
        sel = (sel + (ev.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
        links.forEach(function (a, k) { a.classList.toggle('sel', k === sel); });
      } else if (ev.key === 'Escape') { close(); }
    });
    form.addEventListener('submit', function (ev) {
      ev.preventDefault(); clearTimeout(t);
      var links = $all('a', pop);
      if (sel >= 0 && links[sel]) location.hash = links[sel].getAttribute('href');
      else if (input.value.trim()) location.hash = '#/recherche?q=' + encodeURIComponent(input.value.trim());
      close(); input.blur();
    });
    pop.addEventListener('click', function () { setTimeout(close, 10); input.blur(); });
    document.addEventListener('click', function (ev) { if (!form.contains(ev.target)) close(); });
  }

  /* ---------------------------------------------------------- interactions des vues */
  function bindView(main) {
    if (route.name === 'revision' && session) revisionNext();
    $all('[data-jump]', main).forEach(function (a) { a.addEventListener('click', function (ev) { ev.preventDefault(); var t = document.getElementById(a.getAttribute('data-jump')); if (t) t.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); }); });
  }
  document.addEventListener('click', function (ev) {
    var ch = ev.target.closest('.choice');
    if (ch && !ch.disabled) {
      if (route.name === 'quiz') {
        answer(ch, function () {
          var quiz = $('#quiz'), total = +quiz.getAttribute('data-total');
          var answered = $all('.q.answered', quiz).length;
          if (answered === total) {
            var good = $all('.q .choice.right', quiz).filter(function (b) { return !b.closest('.q').querySelector('.wrong'); }).length;
            var cid = quiz.getAttribute('data-chap'), prev = state.quiz[cid];
            state.quiz[cid] = { best: Math.max(good, prev ? prev.best : 0), last: good, n: (prev ? prev.n : 0) + 1, t: Date.now() };
            save();
            var sc = $('#quiz-score'); sc.hidden = false;
            sc.innerHTML = '<div class="stat"><div class="score-big">' + good + ' / ' + total + '</div><p>' + (good === total ? 'Parfait, chapitre maîtrisé !' : (total - good) + ' erreur(s) ajoutée(s) à ton carnet.') + '</p><div class="row" style="justify-content:center">' + (good < total ? '<a class="btn primary" href="#/revision">Retravailler mes erreurs</a>' : '') + '<a class="btn" href="#/c/' + cid + '">Retour au chapitre</a></div></div>';
            sc.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
          }
        });
      } else if (route.name === 'revision') {
        answer(ch, function (ok, box) {
          session.done++; if (ok) session.ok++; else session.queue.push(box.getAttribute('data-qid'));
          var nx = $('#rev-next'); nx.hidden = false; nx.querySelector('button').focus();
        });
      }
      return;
    }
    var a = ev.target.closest('[data-act]'); if (!a) return;
    var act = a.getAttribute('data-act');
    if (act === 'read') { var id = a.getAttribute('data-id'); if (state.read[id]) delete state.read[id]; else state.read[id] = Date.now(); save(); toast(state.read[id] ? 'Chapitre marqué comme lu' : 'Marque retirée'); go(); }
    else if (act === 'rev-next') revisionNext();
    else if (act === 'print') window.print();
    else if (act === 'theme') { state.theme = a.getAttribute('data-v'); save(); applyTheme(); go(); }
    else if (act === 'export') {
      var blob = new Blob([JSON.stringify({ app: 'pulsar-vsav', exported: new Date().toISOString(), state: state }, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob), l = document.createElement('a'); l.href = url; l.download = 'pulsar-vsav-progression.json'; document.body.appendChild(l); l.click(); l.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      toast('Progression exportée');
    }
    else if (act === 'reset-err') { if (confirm('Effacer toutes les erreurs enregistrées ?')) { state.err = {}; save(); toast('Erreurs effacées'); go(); } }
    else if (act === 'reset-all') { if (confirm('Réinitialiser toute la progression (lectures, quiz, erreurs) ?')) { var th = state.theme; state = blank(); state.theme = th; save(); toast('Progression réinitialisée'); go(); } }
    else if (act === 'clear-mastered') { Object.keys(state.err).forEach(function (k) { if (state.err[k].m) delete state.err[k]; }); save(); go(); }
  });
  document.addEventListener('change', function (ev) {
    var el = ev.target;
    if (el.getAttribute && el.getAttribute('data-act') === 'import' && el.files && el.files[0]) {
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var data = JSON.parse(rd.result); var s = data.state || data;
          if (!s || typeof s !== 'object' || !('err' in s) || !('read' in s)) throw new Error('format');
          var b = blank(); for (var k in b) if (!(k in s)) s[k] = b[k];
          state = s; save(); applyTheme(); toast('Progression importée'); go();
        } catch (e) { toast('Fichier invalide : import annulé'); }
      };
      rd.readAsText(el.files[0]);
    }
  });

  /* ---------------------------------------------------------- démarrage */
  VSAV.start = function () {
    applyTheme();
    if (window.matchMedia) window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { if (state.theme === 'auto') applyTheme(); });
    $('#theme-btn').addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      state.theme = dark ? 'light' : 'dark'; save(); applyTheme();
      if (route.name === 'gestion') go();
    });
    initSearch();
    window.addEventListener('hashchange', go);
    updateBadge();
    go();
    if ('serviceWorker' in navigator && location.protocol !== 'file:') {
      window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { /* hors ligne indisponible */ }); });
    }
  };
})();
