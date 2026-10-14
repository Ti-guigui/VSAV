/* ==========================================================
   Pulsar VSAV — outils de révision
   Plan jusqu'à l'examen, flashcards à répétition espacée, examen blanc chronométré,
   défi du jour, série de jours, badges et suivi de progression.
   S'appuie sur les points d'extension de js/app.js (VSAV.views, VSAV.acts…).
   ========================================================== */
(function () {
  'use strict';
  var V = window.VSAV, C = V.core, U = V.util, icon = V.icon, esc = U.esc, strip = U.strip, $ = U.$, $all = U.$all;
  function S() { return V.state(); }
  var DAY = 864e5, ACC = '#4338ca';

  /* ---------------------------------------------------------- outils */
  function parseDay(k) { var p = k.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function addDays(d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); return x; }
  function daysBetween(a, b) { return Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()) - new Date(a.getFullYear(), a.getMonth(), a.getDate())) / DAY); }
  var JOURS = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'], MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  function fmtDay(d) { return JOURS[d.getDay()] + ' ' + d.getDate() + ' ' + MOIS[d.getMonth()]; }
  function plural(n, w) { return n + ' ' + w + (n > 1 ? 's' : ''); }
  function seeded(str) {
    var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () { h += 0x6D2B79F5; var t = h; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function partsWithQuiz() { return V.parts.filter(function (p) { return C.chapsOf(p.id).some(function (c) { return c.quiz.length; }); }); }
  function qPool(pids) {
    var ids = [];
    V.chapters.forEach(function (c) { if (pids.indexOf(c.part) >= 0 && c.status !== 'vide') c.quiz.forEach(function (q, i) { ids.push(C.qid(c, i)); }); });
    return ids;
  }
  function partChecks(name, selected) {
    return '<div class="chips">' + partsWithQuiz().map(function (p) {
      var on = !selected || selected.indexOf(p.id) >= 0;
      return '<label class="chip" style="--pc:' + p.color + '"><input type="checkbox" name="' + name + '" value="' + p.id + '"' + (on ? ' checked' : '') + '><span>' + esc(p.tab) + '</span></label>';
    }).join('') + '</div><div class="row small" style="margin-top:6px"><button class="btn ghost" type="button" data-act="chk-all" data-n="' + name + '">Tout cocher</button><button class="btn ghost" type="button" data-act="chk-none" data-n="' + name + '">Tout décocher</button></div>';
  }
  function checked(name) { return $all('input[name="' + name + '"]:checked').map(function (i) { return i.value; }); }
  V.acts['chk-all'] = function (a) { $all('input[name="' + a.getAttribute('data-n') + '"]').forEach(function (i) { i.checked = true; }); };
  V.acts['chk-none'] = function (a) { $all('input[name="' + a.getAttribute('data-n') + '"]').forEach(function (i) { i.checked = false; }); };

  /* ---------------------------------------------------------- série de jours & badges */
  function streak() {
    var d = S().days || {}, today = new Date(), cur = 0, k = 0;
    if (!d[C.dayKey(today)]) k = 1; // la série tient encore si on a révisé hier
    while (d[C.dayKey(addDays(today, -k))]) { cur++; k++; }
    var keys = Object.keys(d).filter(function (x) { return d[x] > 0; }).sort(), best = 0, run = 0, prev = null;
    keys.forEach(function (x) { var dt = parseDay(x); run = prev && daysBetween(prev, dt) === 1 ? run + 1 : 1; best = Math.max(best, run); prev = dt; });
    return { cur: cur, best: Math.max(best, cur), today: !!d[C.dayKey(today)], total: keys.length };
  }
  function fcStats(ids) {
    var fc = S().fc, now = Date.now(), r = { nouv: 0, dues: 0, maitr: 0, vues: 0, total: ids.length };
    ids.forEach(function (id) { var e = fc[id]; if (!e) { r.nouv++; return; } r.vues++; if (e.due <= now) r.dues++; if (e.b >= 4) r.maitr++; });
    return r;
  }
  function badges() {
    var st = C.globalStats(), sk = streak(), s = S();
    var rev = Object.keys(s.fc).reduce(function (a, k) { return a + (s.fc[k].n || 0); }, 0);
    var bestExam = (s.exams || []).reduce(function (a, e) { return Math.max(a, e.note); }, 0);
    var defis = Object.keys(s.defi || {}).length;
    var fullPart = V.parts.some(function (p) { return C.chapsOf(p.id).some(function (c) { return c.status !== 'vide'; }) && C.partProgress(p.id) === 100; });
    return [
      { ic: 'book', t: 'Premier pas', d: 'Lire un premier chapitre', ok: st.read >= 1 },
      { ic: 'list', t: 'Grand lecteur', d: 'Lire 25 chapitres', ok: st.read >= 25 },
      { ic: 'target', t: 'Quizzeur', d: 'Réaliser 10 quiz de chapitre', ok: st.quizDone >= 10 },
      { ic: 'flame', t: 'En route', d: '3 jours de révision d’affilée', ok: sk.best >= 3 },
      { ic: 'flame', t: 'Régulier', d: '7 jours d’affilée', ok: sk.best >= 7 },
      { ic: 'flame', t: 'Inarrêtable', d: '30 jours d’affilée', ok: sk.best >= 30 },
      { ic: 'brain', t: 'Mémoire vive', d: '100 flashcards révisées', ok: rev >= 100 },
      { ic: 'brain', t: 'Mémoire d’acier', d: '1 000 flashcards révisées', ok: rev >= 1000 },
      { ic: 'clock', t: 'Examen réussi', d: 'Au moins 12/20 à un examen blanc', ok: bestExam >= 12 },
      { ic: 'star', t: 'Excellence', d: 'Au moins 16/20 à un examen blanc', ok: bestExam >= 16 },
      { ic: 'bolt', t: 'Défi relevé', d: '7 défis du jour réalisés', ok: defis >= 7 },
      { ic: 'reset', t: 'Leçons retenues', d: '20 erreurs maîtrisées', ok: st.mastered >= 20 },
      { ic: 'shield', t: 'Partie bouclée', d: 'Lire tous les chapitres d’une partie', ok: fullPart }
    ];
  }

  /* ---------------------------------------------------------- plan de révision */
  function chapDone(c) {
    var s = S(); if (!s.read[c.id]) return false;
    if (!c.quiz.length) return true;
    var q = s.quiz[c.id]; return !!q && q.best / c.quiz.length >= 0.8;
  }
  function doneToday(c) {
    var s = S(), k = C.dayKey();
    var t = Math.max(s.read[c.id] || 0, (s.quiz[c.id] || {}).t || 0);
    return chapDone(c) && t && C.dayKey(new Date(t)) === k;
  }
  function planCompute() {
    var p = S().plan; if (!p) return null;
    var exam = parseDay(p.date), today = new Date(), left = daysBetween(today, exam);
    var chaps = V.chapters.filter(function (c) { return p.parts.indexOf(c.part) >= 0 && c.status !== 'vide'; });
    var done = chaps.filter(chapDone), todo = chaps.filter(function (c) { return !chapDone(c); });
    var reserve = left >= 7 ? 2 : left >= 3 ? 1 : 0; // derniers jours : examen blanc + erreurs
    var studyDays = Math.max(1, left - reserve);
    var tDone = chaps.filter(doneToday);
    var per = Math.ceil((todo.length + tDone.length) / studyDays);
    var todayTodo = todo.slice(0, Math.max(0, per - tDone.length));
    var rest = todo.slice(todayTodo.length), days = [];
    for (var i = 1; rest.length && i < studyDays; i++) { days.push({ d: addDays(today, i), chaps: rest.splice(0, per) }); }
    if (rest.length && days.length) days[days.length - 1].chaps = days[days.length - 1].chaps.concat(rest);
    else if (rest.length) todayTodo = todayTodo.concat(rest);
    var rev = [];
    for (var r = reserve; r >= 1; r--) rev.push(addDays(exam, -r));
    return { p: p, exam: exam, left: left, chaps: chaps, done: done, todo: todo, per: per, today: tDone.concat(todayTodo), tDone: tDone, days: days, rev: rev, reserve: reserve };
  }
  function chapTask(c) {
    var s = S(), ok = chapDone(c), q = s.quiz[c.id];
    return '<a class="task' + (ok ? ' done' : '') + '" href="#/c/' + c.id + '" style="--cc:' + C.accentOf(c) + '"><span class="tick">' + (ok ? icon('check', '') : '') + '</span>' +
      '<span class="tt"><b>' + esc(c.short || c.title) + '</b><span class="small muted">' + esc((V.partById[c.part] || {}).tab || '') + ' · ' +
      (s.read[c.id] ? 'lu ✓' : 'à lire') + (c.quiz.length ? ' · quiz ' + (q ? q.best + '/' + c.quiz.length : 'à faire') + ' (objectif 80 %)' : '') + '</span></span></a>';
  }
  V.views.plan = function () {
    var r = C.route(); r.accent = ACC; r.title = 'Plan de révision';
    var pc = planCompute(), edit = r.params.edit;
    var h = '<div class="wrap">' + C.heroHtml({ motif: 'pin', color: ACC, crumb: '<a href="#/reviser">Réviser</a> › Plan', title: 'Mon plan jusqu’à l’examen', sub: 'Indique ta date d’examen et les parties à réviser : les chapitres sont répartis jour par jour, puis le plan se réajuste tout seul selon ton avancement.' });
    if (!pc || edit) {
      var p = (S().plan || {});
      var min = C.dayKey(addDays(new Date(), 1));
      h += '<div class="card"><h2 style="margin-top:0">' + (pc ? 'Modifier le plan' : 'Créer mon plan') + '</h2>' +
        '<label class="field"><span>Date de l’examen (ou de l’évaluation)</span><input type="date" id="plan-date" min="' + min + '" value="' + esc(p.date || C.dayKey(addDays(new Date(), 21))) + '"></label>' +
        '<div class="field"><span>Parties à réviser</span>' + partChecks('plan-p', p.parts || ['foad', 'tut', 'p1', 'p2', 'p3', 'socle']) + '</div>' +
        '<p class="small muted">Un chapitre est considéré comme acquis quand il est marqué « lu » et que son quiz est réussi à 80 % ou plus.</p>' +
        '<div class="row"><button class="btn primary" type="button" data-act="plan-save">' + icon('check', '') + 'Enregistrer le plan</button>' + (pc ? '<a class="btn ghost" href="#/plan">Annuler</a>' : '') + '</div></div></div>';
      return h;
    }
    var pct = pc.chaps.length ? Math.round(pc.done.length / pc.chaps.length * 100) : 0;
    h += '<div class="grid g3" style="margin-bottom:14px"><div class="card stat"><b>' + (pc.left > 0 ? 'J-' + pc.left : pc.left === 0 ? 'Jour J' : 'Passé') + '</b>' + esc(fmtDay(pc.exam)) + '</div>' +
      '<div class="card stat"><b>' + pc.done.length + '/' + pc.chaps.length + '</b>chapitres acquis</div>' +
      '<div class="card stat"><b>' + (pc.todo.length ? pc.per : 0) + '</b>chapitre(s) par jour</div></div>' +
      '<div class="card" style="margin-bottom:14px"><div class="row" style="justify-content:space-between"><b>Avancement du plan</b><span class="small muted">' + pct + ' %</span></div><div class="meter" style="--pc:' + ACC + '"><i style="width:' + pct + '%"></i></div></div>';
    if (pc.left < 0) {
      h += '<div class="callout"><b>La date d’examen est passée.</b> Crée un nouveau plan pour la prochaine échéance.</div>';
    } else if (!pc.todo.length) {
      h += '<div class="callout ok"><b>Tous les chapitres du plan sont acquis 👏</b> Entretiens ta mémoire : flashcards, examen blanc et erreurs.</div>' + revTasks();
    } else {
      h += '<h2>Aujourd’hui</h2><div class="tasks">' + pc.today.map(chapTask).join('') + '</div>' + revTasks();
      if (pc.days.length) {
        h += '<h2>Jours suivants</h2>';
        pc.days.forEach(function (d) { h += '<details class="card day"><summary><b>' + esc(fmtDay(d.d)) + '</b> <span class="small muted">· ' + plural(d.chaps.length, 'chapitre') + '</span></summary><div class="tasks">' + d.chaps.map(chapTask).join('') + '</div></details>'; });
      }
      pc.rev.forEach(function (d) { h += '<div class="card day"><b>' + esc(fmtDay(d)) + '</b> <span class="small muted">· révision finale : examen blanc, erreurs, flashcards, L’essentiel</span></div>'; });
    }
    h += '<div class="row" style="margin-top:16px"><a class="btn" href="#/plan?edit=1">' + icon('pin', '') + 'Modifier le plan</a><button class="btn danger" type="button" data-act="plan-del">' + icon('trash', '') + 'Supprimer le plan</button></div></div>';
    return h;
  };
  function revTasks() {
    var dues = fcStats(allCardIds()).dues, err = C.activeErrors().length, df = S().defi[C.dayKey()];
    return '<div class="tasks" style="margin-top:8px">' +
      '<a class="task' + (df != null ? ' done' : '') + '" href="#/defi"><span class="tick">' + (df != null ? icon('check', '') : '') + '</span><span class="tt"><b>Défi du jour</b><span class="small muted">' + (df != null ? 'fait : ' + df + '/5' : '5 questions, 2 minutes') + '</span></span></a>' +
      '<a class="task' + (!dues ? ' done' : '') + '" href="#/flash"><span class="tick">' + (!dues ? icon('check', '') : '') + '</span><span class="tt"><b>Flashcards à revoir</b><span class="small muted">' + (dues ? plural(dues, 'carte') + ' à revoir' : 'rien à revoir aujourd’hui') + '</span></span></a>' +
      '<a class="task' + (!err ? ' done' : '') + '" href="#/erreurs"><span class="tick">' + (!err ? icon('check', '') : '') + '</span><span class="tt"><b>Mes erreurs</b><span class="small muted">' + (err ? plural(err, 'question') + ' à retravailler' : 'aucune erreur active') + '</span></span></a></div>';
  }
  V.acts['plan-save'] = function () {
    var date = ($('#plan-date') || {}).value, parts = checked('plan-p');
    if (!date || parseDay(date) <= new Date()) { U.toast('Choisis une date à venir'); return; }
    if (!parts.length) { U.toast('Coche au moins une partie'); return; }
    S().plan = { date: date, parts: parts, created: Date.now() }; C.save(); U.toast('Plan enregistré'); if (location.hash === '#/plan') V.go(); else location.hash = '#/plan';
  };
  V.acts['plan-del'] = function () { if (confirm('Supprimer le plan de révision ?')) { S().plan = null; C.save(); V.go(); } };

  /* ---------------------------------------------------------- flashcards (répétition espacée) */
  var BOX_DAYS = [0, 1, 2, 4, 8, 16, 32]; // boîte → intervalle en jours
  function essCards() {
    var r = [];
    V.essentiel.forEach(function (g, gi) { (g.items || []).forEach(function (it, ii) { r.push('e:' + gi + ':' + ii); }); });
    return r;
  }
  function deckIds(deck) { return deck === 'ess' ? essCards() : qPool([deck]); }
  function allCardIds() { return essCards().concat(qPool(V.parts.map(function (p) { return p.id; }))); }
  function cardContent(id) {
    if (id.indexOf('e:') === 0) {
      var p = id.split(':'), g = V.essentiel[+p[1]], it = g && g.items[+p[2]]; if (!it) return null;
      return { tag: 'L’essentiel · ' + g.t, front: it.k, back: it.v, link: it.go ? '#/c/' + it.go : '#/essentiel', color: '#a15c00' };
    }
    var f = C.findQ(id); if (!f) return null;
    return { tag: (f.c.short || f.c.title), front: f.q.q, back: '<b>' + f.q.c[0] + '</b>' + (f.q.e ? '<div class="small" style="margin-top:8px">' + f.q.e + '</div>' : ''), link: '#/c/' + f.c.id + (f.q.s ? '/' + f.q.s : ''), color: C.accentOf(f.c) };
  }
  var fs = null; // session de flashcards en cours
  function deckName(deck) { return deck === 'ess' ? 'L’essentiel' : (V.partById[deck] || {}).tab || deck; }
  V.views.flash = function (seg) {
    var r = C.route(); r.accent = '#7c3aed'; r.title = 'Flashcards';
    var deck = seg[1];
    var h = '<div class="wrap">' + C.heroHtml({ motif: 'brain', color: '#7c3aed', crumb: '<a href="#/reviser">Réviser</a> › Flashcards', title: deck ? 'Flashcards — ' + esc(deckName(deck)) : 'Flashcards', sub: 'Lis la question, cherche la réponse dans ta tête, retourne la carte et sois honnête : une carte connue revient de plus en plus tard (1, 2, 4, 8, 16, 32 jours), une carte ratée revient tout de suite.' });
    if (deck && (deck === 'ess' || V.partById[deck])) {
      if (!fs || fs.deck !== deck) {
        var ids = deckIds(deck), now = Date.now(), fc = S().fc;
        var due = ids.filter(function (id) { return fc[id] && fc[id].due <= now; }).sort(function (a, b) { return fc[a].due - fc[b].due; });
        var nouv = C.shuffle(ids.filter(function (id) { return !fc[id]; })).slice(0, 15);
        fs = { deck: deck, queue: due.slice(0, 40).concat(nouv), flipped: false, seen: 0, ok: 0, total: Math.min(due.length, 40) + nouv.length };
      }
      if (!fs.queue.length) {
        var st = fcStats(deckIds(deck));
        h += '<div class="card stat"><div class="score-big">✓</div><p><b>' + (fs.seen ? 'Séance terminée !' : 'Rien à revoir pour l’instant.') + '</b>' + (fs.seen ? ' ' + fs.ok + ' carte(s) sue(s) du premier coup sur ' + fs.seen + ' passage(s).' : '') + '</p><p class="muted small">' + st.maitr + ' carte(s) maîtrisée(s) sur ' + st.total + ' · ' + st.nouv + ' jamais vue(s).</p>' +
          '<div class="row" style="justify-content:center">' + (st.nouv ? '<button class="btn primary" type="button" data-act="fc-more">' + icon('play', '') + '15 nouvelles cartes</button>' : '') + '<a class="btn" href="#/flash">Autres paquets</a></div></div></div>';
        return h;
      }
      var cid = fs.queue[0], cc = cardContent(cid);
      if (!cc) { fs.queue.shift(); return V.views.flash(seg); }
      var box = (S().fc[cid] || {}).b;
      h += '<div class="row small muted" style="justify-content:space-between;margin-bottom:8px"><span>' + esc(cc.tag) + '</span><span>Restant : ' + fs.queue.length + (box != null ? ' · boîte ' + box + '/6' : ' · nouvelle') + '</span></div>' +
        '<div class="fcard' + (fs.flipped ? ' flipped' : '') + '" style="--cc:' + cc.color + '" data-act="fc-flip" role="button" tabindex="0" aria-label="Retourner la carte">' +
        '<div class="fc-front"><div class="fc-lbl">Question</div><div class="fc-txt">' + cc.front + '</div>' + (fs.flipped ? '' : '<div class="fc-hint small muted">Touche la carte ou appuie sur Espace pour voir la réponse</div>') + '</div>' +
        (fs.flipped ? '<div class="fc-back"><div class="fc-lbl">Réponse</div><div class="fc-txt">' + cc.back + '</div><a class="small" href="' + cc.link + '">Revoir dans le cours →</a></div>' : '') + '</div>';
      if (fs.flipped) {
        h += '<div class="fc-rate"><button class="btn rate-bad" type="button" data-act="fc-rate" data-v="0"><b>À revoir</b><span>1</span></button>' +
          '<button class="btn rate-mid" type="button" data-act="fc-rate" data-v="1"><b>Hésitant</b><span>2</span></button>' +
          '<button class="btn rate-ok" type="button" data-act="fc-rate" data-v="2"><b>Je savais</b><span>3</span></button></div>';
      }
      return h + '<div class="row" style="margin-top:14px"><a class="btn ghost" href="#/flash" data-act="fc-quit">' + icon('prev', '') + 'Quitter la séance</a></div></div>';
    }
    // liste des paquets
    var decks = [{ id: 'ess', t: 'L’essentiel', s: 'Chiffres, seuils et conduites à tenir', color: '#a15c00', motif: 'star' }].concat(partsWithQuiz().map(function (p) { return { id: p.id, t: p.tab, s: p.title, color: p.color, motif: p.motif }; }));
    var all = fcStats(allCardIds());
    h += '<div class="grid g3" style="margin-bottom:14px"><div class="card stat"><b>' + all.dues + '</b>cartes à revoir</div><div class="card stat"><b>' + all.maitr + '</b>maîtrisées</div><div class="card stat"><b>' + all.nouv + '</b>jamais vues</div></div><div class="grid g2">';
    decks.forEach(function (d) {
      var st = fcStats(deckIds(d.id)), pct = st.total ? Math.round(st.maitr / st.total * 100) : 0;
      h += '<a class="card tile" href="#/flash/' + d.id + '" style="--pc:' + d.color + '"><div class="band" style="background-image:' + V.patternBg(d.motif, d.color) + '"><b>' + esc(d.t) + '</b><span class="ic">' + icon(d.motif) + '</span></div>' +
        '<p class="small muted">' + esc(d.s) + '</p><div class="row small" style="justify-content:space-between"><span>' + (st.dues ? '<span class="pill warn">' + st.dues + ' à revoir</span>' : '<span class="pill ok">à jour</span>') + ' ' + st.nouv + ' nouvelles</span><span>' + pct + ' % maîtrisé</span></div><div class="meter"><i style="width:' + pct + '%"></i></div></a>';
    });
    return h + '</div></div>';
  };
  V.acts['fc-flip'] = function () { if (fs && !fs.flipped) { fs.flipped = true; V.go(); } };
  V.acts['fc-quit'] = function () { fs = null; };
  V.acts['fc-more'] = function () {
    var fc = S().fc, ids = C.shuffle(deckIds(fs.deck).filter(function (id) { return !fc[id]; })).slice(0, 15);
    fs.queue = ids; fs.total = ids.length; V.go();
  };
  V.acts['fc-rate'] = function (a) { rate(+a.getAttribute('data-v')); };
  function rate(v) {
    if (!fs || !fs.flipped || !fs.queue.length) return;
    var id = fs.queue.shift(), fc = S().fc, e = fc[id] || { b: 0, n: 0, due: 0 }, first = !fs.again || fs.again.indexOf(id) < 0;
    e.n++;
    if (v === 0) { e.b = 0; e.due = Date.now(); fs.queue.splice(Math.min(fs.queue.length, 4), 0, id); (fs.again = fs.again || []).push(id); }
    else if (v === 1) { e.b = Math.max(1, e.b); e.due = Date.now() + Math.max(1, Math.round(BOX_DAYS[e.b] / 2)) * DAY; }
    else { e.b = Math.min(6, e.b + 1); e.due = Date.now() + BOX_DAYS[e.b] * DAY; if (first) fs.ok++; }
    fc[id] = e; fs.seen++; fs.flipped = false; C.logActivity(1); C.save(); V.go();
  }
  V.binders.flash = function () {
    function key(ev) {
      if (!fs || C.route().name !== 'flash' || /INPUT|TEXTAREA|SELECT/.test((ev.target || {}).tagName)) return;
      if ((ev.key === ' ' || ev.key === 'Enter') && !fs.flipped && !/^(A|BUTTON)$/.test(ev.target.tagName)) { ev.preventDefault(); V.acts['fc-flip'](); }
      else if (fs.flipped && /^[123]$/.test(ev.key)) rate(+ev.key - 1);
    }
    document.addEventListener('keydown', key);
    V.onStop(function () { document.removeEventListener('keydown', key); });
  };

  /* ---------------------------------------------------------- examen blanc */
  var ex = null; // examen en cours
  V.views.examen = function () {
    var r = C.route(); r.accent = '#0f766e'; r.title = 'Examen blanc';
    var h = '<div class="wrap">' + C.heroHtml({ motif: 'clock', color: '#0f766e', crumb: '<a href="#/reviser">Réviser</a> › Examen blanc', title: 'Examen blanc', sub: 'Des questions tirées au hasard dans les parties choisies, sans correction pendant l’épreuve, avec un chrono. Note sur 20, détail par partie et correction à la fin. Les erreurs rejoignent ton carnet.' });
    if (ex && ex.result) return h + resultHtml() + '</div>';
    if (ex) {
      var i = ex.cur, f = C.findQ(ex.ids[i]), answered = Object.keys(ex.ans).length;
      h += '<div class="exam-top card"><div><b>Question ' + (i + 1) + ' / ' + ex.ids.length + '</b><div class="small muted">' + answered + ' réponse(s) donnée(s)</div></div>' +
        (ex.limit ? '<div class="timer" id="exam-timer">' + fmtTime(ex.limit - (Date.now() - ex.start)) + '</div>' : '') + '</div>' +
        '<div class="q"><div class="qn">' + esc(f.c.short || f.c.title) + '</div><div class="qh">' + f.q.q + '</div><div class="choices">' +
        ex.order[i].map(function (k) { return '<button type="button" class="xchoice' + (ex.ans[i] === k ? ' picked' : '') + '" data-act="exam-pick" data-k="' + k + '" aria-pressed="' + (ex.ans[i] === k) + '">' + f.q.c[k] + '</button>'; }).join('') + '</div></div>' +
        '<div class="row" style="justify-content:space-between;margin:12px 0"><button class="btn" type="button" data-act="exam-nav" data-d="-1"' + (i ? '' : ' disabled') + '>' + icon('prev', '') + 'Précédente</button>' +
        (i < ex.ids.length - 1 ? '<button class="btn primary" type="button" data-act="exam-nav" data-d="1">Suivante' + icon('next', '') + '</button>' : '<button class="btn primary" type="button" data-act="exam-end">' + icon('check', '') + 'Terminer et corriger</button>') + '</div>' +
        '<div class="card"><div class="small muted" style="margin-bottom:6px">Aller à la question :</div><div class="qgrid">' + ex.ids.map(function (id, k) { return '<button type="button" class="' + (ex.ans[k] != null ? 'a' : '') + (k === i ? ' cur' : '') + '" data-act="exam-go" data-i="' + k + '">' + (k + 1) + '</button>'; }).join('') + '</div>' +
        '<div class="row" style="margin-top:12px"><button class="btn" type="button" data-act="exam-end">' + icon('check', '') + 'Rendre la copie</button><button class="btn ghost danger" type="button" data-act="exam-quit">Abandonner</button></div></div></div>';
      return h;
    }
    var last = (S().exams || []).slice(-1)[0];
    h += '<div class="card"><h2 style="margin-top:0">Préparer l’épreuve</h2><div class="field"><span>Parties</span>' + partChecks('ex-p', (S().plan || {}).parts) + '</div>' +
      '<label class="field"><span>Nombre de questions</span><select id="ex-n"><option value="20">20 questions</option><option value="40" selected>40 questions</option><option value="60">60 questions</option><option value="100">100 questions</option></select></label>' +
      '<label class="field"><span>Chrono</span><select id="ex-t"><option value="45">45 s par question</option><option value="60" selected>1 min par question</option><option value="0">Sans chrono</option></select></label>' +
      '<label class="chk"><input type="checkbox" id="ex-err"> Inclure en priorité mes erreurs actives</label>' +
      '<div class="row" style="margin-top:12px"><button class="btn primary" type="button" data-act="exam-start">' + icon('play', '') + 'Commencer l’examen</button></div></div>';
    if (last) h += '<p class="small muted" style="margin-top:10px">Dernier examen : <b>' + last.note + '/20</b> le ' + esc(fmtDay(new Date(last.t))) + '. Historique dans <a href="#/progres">Mes progrès</a>.</p>';
    return h + '</div>';
  };
  function fmtTime(ms) { ms = Math.max(0, ms); var s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ':' + ('0' + s % 60).slice(-2); }
  V.acts['exam-start'] = function () {
    var parts = checked('ex-p'), n = +$('#ex-n').value, t = +$('#ex-t').value, withErr = $('#ex-err').checked;
    var pool = qPool(parts); if (!pool.length) { U.toast('Coche au moins une partie'); return; }
    var pick = [];
    if (withErr) pick = C.shuffle(C.activeErrors().filter(function (id) { return pool.indexOf(id) >= 0; })).slice(0, Math.floor(n / 2));
    pick = pick.concat(C.shuffle(pool.filter(function (id) { return pick.indexOf(id) < 0; })).slice(0, n - pick.length));
    pick = C.shuffle(pick);
    ex = { ids: pick, ans: {}, cur: 0, parts: parts, start: Date.now(), limit: t ? t * 1000 * pick.length : 0,
      order: pick.map(function (id) { return C.shuffle(C.findQ(id).q.c.map(function (x, k) { return k; })); }) };
    V.go();
  };
  V.acts['exam-pick'] = function (a) { ex.ans[ex.cur] = +a.getAttribute('data-k'); $all('.xchoice').forEach(function (b) { var on = b === a; b.classList.toggle('picked', on); b.setAttribute('aria-pressed', on); }); var g = $all('.qgrid button')[ex.cur]; if (g) g.classList.add('a'); };
  V.acts['exam-nav'] = function (a) { ex.cur = Math.max(0, Math.min(ex.ids.length - 1, ex.cur + +a.getAttribute('data-d'))); V.go(); };
  V.acts['exam-go'] = function (a) { ex.cur = +a.getAttribute('data-i'); V.go(); };
  V.acts['exam-quit'] = function () { if (confirm('Abandonner l’examen ? Rien ne sera enregistré.')) { ex = null; V.go(); } };
  V.acts['exam-end'] = function () {
    var miss = ex.ids.length - Object.keys(ex.ans).length;
    if (miss && !confirm(plural(miss, 'question') + ' sans réponse (comptées fausses). Rendre la copie ?')) return;
    finishExam();
  };
  V.acts['exam-new'] = function () { ex = null; V.go(); };
  function finishExam() {
    var good = 0, byPart = {};
    ex.ids.forEach(function (id, k) {
      var f = C.findQ(id), ok = ex.ans[k] === 0, p = f.c.part;
      if (ok) good++;
      byPart[p] = byPart[p] || { n: 0, ok: 0 }; byPart[p].n++; if (ok) byPart[p].ok++;
      C.recordAnswer(id, ok);
    });
    var note = Math.round(good / ex.ids.length * 200) / 10;
    ex.result = { good: good, note: note, byPart: byPart, dur: Date.now() - ex.start };
    var s = S(); s.exams = (s.exams || []).concat([{ t: Date.now(), n: ex.ids.length, good: good, note: note, parts: ex.parts }]).slice(-40);
    C.save(); V.go();
  }
  function resultHtml() {
    var r = ex.result, msg = r.note >= 16 ? 'Excellent travail !' : r.note >= 12 ? 'Bon résultat, continue comme ça.' : r.note >= 10 ? 'C’est juste : vise les parties les plus faibles.' : 'Il faut consolider : reprends les chapitres et retravaille tes erreurs.';
    var h = '<div class="card stat"><div class="score-big">' + String(r.note).replace('.', ',') + ' / 20</div><p><b>' + msg + '</b><br>' + r.good + ' bonne(s) réponse(s) sur ' + ex.ids.length + ' · durée ' + fmtTime(r.dur) + '</p>' +
      '<div class="row" style="justify-content:center"><button class="btn primary" type="button" data-act="exam-new">' + icon('reset', '') + 'Nouvel examen</button>' + (C.activeErrors().length ? '<a class="btn" href="#/revision">Retravailler mes erreurs</a>' : '') + '<a class="btn" href="#/progres">Mes progrès</a></div></div>';
    h += '<h2>Résultat par partie</h2><div class="card">';
    Object.keys(r.byPart).forEach(function (pid) {
      var b = r.byPart[pid], p = V.partById[pid], pct = Math.round(b.ok / b.n * 100);
      h += '<div style="margin:10px 0;--pc:' + p.color + '"><div class="row" style="justify-content:space-between"><b>' + esc(p.tab) + '</b><span class="small ' + (pct < 50 ? 'bad-t' : 'muted') + '">' + b.ok + '/' + b.n + ' · ' + pct + ' %</span></div><div class="meter"><i style="width:' + pct + '%"></i></div></div>';
    });
    h += '</div><h2>Correction</h2>';
    ex.ids.forEach(function (id, k) {
      var f = C.findQ(id), a = ex.ans[k], ok = a === 0;
      h += '<details class="card corr ' + (ok ? 'ok' : 'ko') + '"><summary><span class="pill ' + (ok ? 'ok' : 'bad') + '">' + (k + 1) + (ok ? ' ✓' : ' ✗') + '</span> ' + esc(strip(f.q.q)) + '</summary><div class="expl">' +
        (ok ? '' : '<div>Ta réponse : ' + (a == null ? '<i>aucune</i>' : f.q.c[a]) + '</div>') + '<div><b>Bonne réponse :</b> ' + f.q.c[0] + '</div>' + (f.q.e ? '<div class="small">' + f.q.e + '</div>' : '') +
        ' <a class="small" href="#/c/' + f.c.id + (f.q.s ? '/' + f.q.s : '') + '">Revoir le cours →</a></div></details>';
    });
    return h;
  }
  V.binders.examen = function () {
    if (!ex || ex.result || !ex.limit) return;
    var t = setInterval(function () {
      var el = $('#exam-timer'), left = ex.limit - (Date.now() - ex.start);
      if (el) { el.textContent = fmtTime(left); el.classList.toggle('low', left < 60000); }
      if (left <= 0) { clearInterval(t); U.toast('Temps écoulé : copie rendue'); finishExam(); }
    }, 500);
    V.onStop(function () { clearInterval(t); });
  };

  /* ---------------------------------------------------------- défi du jour */
  function defiIds() {
    var pool = qPool(V.parts.map(function (p) { return p.id; })), rnd = seeded('defi-' + C.dayKey()), out = [];
    while (out.length < 5 && pool.length) out.push(pool.splice(Math.floor(rnd() * pool.length), 1)[0]);
    return out;
  }
  V.views.defi = function () {
    var r = C.route(); r.accent = '#b45309'; r.title = 'Défi du jour';
    var done = S().defi[C.dayKey()], ids = defiIds();
    var h = '<div class="wrap">' + C.heroHtml({ motif: 'bolt', color: '#b45309', crumb: '<a href="#/reviser">Réviser</a> › Défi du jour', title: 'Défi du jour', sub: '5 questions tirées dans tout le programme, les mêmes pour toute la journée. Un défi par jour entretient ta série et ta mémoire.', meta: [esc(fmtDay(new Date())), done != null ? 'Réalisé : ' + done + '/5' : 'À faire'] });
    h += '<div id="defi">' + ids.map(function (id, k) { var f = C.findQ(id); return '<div class="small muted" style="margin-top:12px">' + esc((V.partById[f.c.part] || {}).tab) + ' · ' + esc(f.c.short || f.c.title) + '</div>' + C.questionHtml(f.c, f.i, k + 1, ids.length); }).join('') + '</div><div class="card" id="defi-score" hidden></div></div>';
    return h;
  };
  V.onChoice.defi = function (ch) {
    C.answer(ch, function () {
      var box = $('#defi'), n = $all('.q', box).length, answered = $all('.q.answered', box).length;
      if (answered < n) return;
      var good = $all('.q', box).filter(function (q) { return !q.querySelector('.wrong'); }).length, k = C.dayKey(), s = S();
      var first = s.defi[k] == null; if (first) { s.defi[k] = good; C.save(); }
      var sk = streak(), sc = $('#defi-score'); sc.hidden = false;
      sc.innerHTML = '<div class="stat"><div class="score-big">' + good + ' / ' + n + '</div><p>' + (first ? '' : '(score du jour déjà enregistré : ' + s.defi[k] + '/5) ') + 'Série : <b>' + plural(sk.cur, 'jour') + '</b> 🔥</p><div class="row" style="justify-content:center"><a class="btn primary" href="#/reviser">Continuer à réviser</a>' + (good < n ? '<a class="btn" href="#/revision">Retravailler mes erreurs</a>' : '') + '</div></div>';
      sc.scrollIntoView({ behavior: V.reduceMotion ? 'auto' : 'smooth', block: 'center' });
    });
  };

  /* ---------------------------------------------------------- progrès */
  function heatmap() {
    var d = S().days || {}, weeks = 17, today = new Date();
    var start = addDays(today, -((today.getDay() + 6) % 7) - (weeks - 1) * 7); // lundi, il y a 16 semaines
    var cs = 13, gap = 3, w = weeks * (cs + gap) + 26, hgt = 7 * (cs + gap) + 18, out = '';
    for (var k = 0; k < weeks * 7; k++) {
      var day = addDays(start, k); if (day > today) break;
      var v = d[C.dayKey(day)] || 0, lvl = v === 0 ? 0 : v < 5 ? 1 : v < 15 ? 2 : v < 35 ? 3 : 4;
      var x = 26 + Math.floor(k / 7) * (cs + gap), y = 16 + (k % 7) * (cs + gap);
      out += '<rect class="hm l' + lvl + '" x="' + x + '" y="' + y + '" width="' + cs + '" height="' + cs + '" rx="3"><title>' + esc(fmtDay(day)) + ' : ' + v + ' activité(s)</title></rect>';
      if (day.getDate() <= 7 && k % 7 === 0) out += '<text class="hm-t" x="' + x + '" y="10">' + MOIS[day.getMonth()] + '</text>';
    }
    ['lun', '', 'mer', '', 'ven', '', 'dim'].forEach(function (l, i) { if (l) out += '<text class="hm-t" x="0" y="' + (16 + i * (cs + gap) + 10) + '">' + l + '</text>'; });
    return '<svg class="heat" viewBox="0 0 ' + w + ' ' + hgt + '" role="img" aria-label="Activité des 17 dernières semaines">' + out + '</svg>' +
      '<div class="row small muted" style="justify-content:flex-end;gap:4px">Moins <svg width="80" height="12" aria-hidden="true">' + [0, 1, 2, 3, 4].map(function (l) { return '<rect class="hm l' + l + '" x="' + l * 16 + '" y="0" width="12" height="12" rx="3"/>'; }).join('') + '</svg> Plus</div>';
  }
  function examChart() {
    var e = (S().exams || []).slice(-15); if (!e.length) return '<p class="muted">Aucun examen blanc pour l’instant. <a href="#/examen">En passer un</a></p>';
    var W = 560, H = 190, L = 30, R = 12, T = 12, B = 26, n = e.length;
    function X(i) { return n === 1 ? (L + W - R) / 2 : L + i * (W - L - R) / (n - 1); }
    function Y(v) { return T + (20 - v) / 20 * (H - T - B); }
    var g = [0, 5, 10, 15, 20].map(function (v) { return '<line class="ax" x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(v) + '" y2="' + Y(v) + '"/><text class="axt" x="' + (L - 6) + '" y="' + (Y(v) + 4) + '" text-anchor="end">' + v + '</text>'; }).join('');
    var pts = e.map(function (x, i) { return X(i) + ',' + Y(x.note); }).join(' ');
    var dots = e.map(function (x, i) { return '<circle class="pt" cx="' + X(i) + '" cy="' + Y(x.note) + '" r="4.5"><title>' + esc(fmtDay(new Date(x.t))) + ' : ' + x.note + '/20 (' + x.good + '/' + x.n + ')</title></circle>'; }).join('');
    var lab = e.map(function (x, i) { return (n <= 8 || i % 2 === 0 || i === n - 1) ? '<text class="axt" x="' + X(i) + '" y="' + (H - 8) + '" text-anchor="middle">' + new Date(x.t).getDate() + '/' + (new Date(x.t).getMonth() + 1) + '</text>' : ''; }).join('');
    return '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Notes des examens blancs sur 20">' + g + '<line class="ax pass" x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(10) + '" y2="' + Y(10) + '"/>' + (n > 1 ? '<polyline class="ln" points="' + pts + '"/>' : '') + dots + lab + '</svg>';
  }
  V.views.progres = function () {
    var r = C.route(); r.accent = '#be185d'; r.title = 'Mes progrès';
    var sk = streak(), st = C.globalStats(), bs = badges(), got = bs.filter(function (b) { return b.ok; }).length;
    var h = '<div class="wrap">' + C.heroHtml({ motif: 'ecg', color: '#be185d', crumb: '<a href="#/reviser">Réviser</a> › Progrès', title: 'Mes progrès', sub: 'Ta régularité, tes notes d’examen blanc, ta maîtrise par partie et tes badges.' });
    h += '<div class="grid g3" style="margin-bottom:14px"><div class="card stat"><b>' + sk.cur + ' 🔥</b>jour(s) de série' + (sk.today ? '' : '<div class="small muted">révise aujourd’hui pour la prolonger</div>') + '</div><div class="card stat"><b>' + sk.best + '</b>meilleure série</div><div class="card stat"><b>' + sk.total + '</b>jours de révision</div><div class="card stat"><b>' + got + '/' + bs.length + '</b>badges</div></div>';
    h += '<h2>Régularité</h2><div class="card">' + heatmap() + '</div>';
    h += '<h2>Examens blancs</h2><div class="card">' + examChart() + '</div>';
    h += '<h2>Maîtrise par partie</h2><div class="card"><div class="small muted" style="margin-bottom:6px">Lecture · réussite moyenne aux quiz · flashcards maîtrisées</div>';
    partsWithQuiz().forEach(function (p) {
      var cs = C.chapsOf(p.id), qs = cs.filter(function (c) { return S().quiz[c.id] && c.quiz.length; });
      var avg = qs.length ? Math.round(qs.reduce(function (a, c) { return a + S().quiz[c.id].best / c.quiz.length; }, 0) / qs.length * 100) : 0;
      var f = fcStats(deckIds(p.id)), fp = f.total ? Math.round(f.maitr / f.total * 100) : 0, lu = C.partProgress(p.id);
      h += '<div class="mast" style="--pc:' + p.color + '"><b>' + esc(p.tab) + '</b>' + [[lu, 'lu'], [avg, 'quiz'], [fp, 'cartes']].map(function (m) { return '<div class="mcell"><div class="row small" style="justify-content:space-between"><span class="muted">' + m[1] + '</span><span>' + m[0] + ' %</span></div><div class="meter"><i style="width:' + m[0] + '%"></i></div></div>'; }).join('') + '</div>';
    });
    h += '</div><h2>Badges</h2><div class="badges">' + bs.map(function (b) { return '<div class="bdg' + (b.ok ? ' on' : '') + '"><span class="bi">' + icon(b.ic) + '</span><b>' + esc(b.t) + '</b><span class="small muted">' + esc(b.d) + '</span></div>'; }).join('') + '</div>';
    h += '<p class="small muted" style="margin-top:14px">' + st.read + ' chapitres lus · ' + st.quizDone + ' quiz · ' + st.mastered + ' erreurs maîtrisées.</p></div>';
    return h;
  };

  /* ---------------------------------------------------------- page « Réviser » et bandeau d'accueil */
  function hubCards() {
    var pc = planCompute(), dues = fcStats(allCardIds()).dues, df = S().defi[C.dayKey()], last = (S().exams || []).slice(-1)[0], err = C.activeErrors().length;
    function card(href, ic, color, t, s, badge) {
      return '<a class="card hub" href="' + href + '" style="--cc:' + color + '"><span class="hub-ic">' + icon(ic) + '</span><span class="hub-t"><b>' + t + '</b><span class="small muted">' + s + '</span></span>' + (badge ? '<span class="pill ' + badge[0] + '">' + badge[1] + '</span>' : '') + '</a>';
    }
    return '<div class="grid g2">' +
      card('#/plan', 'pin', ACC, 'Plan de révision', pc ? (pc.left >= 0 ? 'Examen ' + (pc.left ? 'dans ' + plural(pc.left, 'jour') : 'aujourd’hui') + ' · ' + pc.done.length + '/' + pc.chaps.length + ' chapitres acquis' : 'Date passée : crée un nouveau plan') : 'Ta date d’examen → un programme jour par jour', pc && pc.left >= 0 && pc.today.length ? ['info', pc.today.filter(function (c) { return !chapDone(c); }).length + ' à faire'] : null) +
      card('#/defi', 'bolt', '#b45309', 'Défi du jour', '5 questions sur tout le programme', df != null ? ['ok', df + '/5'] : ['warn', 'à faire']) +
      card('#/flash', 'brain', '#7c3aed', 'Flashcards', 'Répétition espacée : chaque carte revient au bon moment', dues ? ['warn', dues + ' à revoir'] : ['ok', 'à jour']) +
      card('#/examen', 'clock', '#0f766e', 'Examen blanc', 'Chronométré, noté sur 20, corrigé', last ? ['info', 'dernier ' + String(last.note).replace('.', ',') + '/20'] : null) +
      card('#/erreurs', 'reset', '#9d0208', 'Mes erreurs', 'Retravailler jusqu’à maîtrise', err ? ['bad', err + ' active' + (err > 1 ? 's' : '')] : ['ok', '0']) +
      card('#/progres', 'ecg', '#be185d', 'Mes progrès', 'Série, calendrier, notes, badges', null) + '</div>';
  }
  V.views.reviser = function () {
    var r = C.route(); r.accent = ACC; r.title = 'Réviser';
    var sk = streak();
    return '<div class="wrap">' + C.heroHtml({ motif: 'target', color: ACC, crumb: 'Espace de révision', title: 'Réviser intelligemment', sub: 'Un plan jusqu’à l’examen, des flashcards qui reviennent au bon moment, des examens blancs chronométrés et un défi chaque jour. Tout reste dans ce navigateur, hors ligne.', meta: ['Série : ' + plural(sk.cur, 'jour') + ' 🔥', 'Meilleure : ' + sk.best] }) + hubCards() + '</div>';
  };
  V.homeExtra = function () {
    var sk = streak(), df = S().defi[C.dayKey()], dues = fcStats(allCardIds()).dues, pc = planCompute();
    return '<div class="card today" style="margin-bottom:16px"><div class="today-sk"><span class="flame' + (sk.today ? ' on' : '') + '">' + icon('flame') + '</span><span><b>' + plural(sk.cur, 'jour') + '</b><span class="small muted">' + (sk.today ? 'de série, bravo !' : sk.cur ? 'révise aujourd’hui pour garder ta série' : 'commence ta série aujourd’hui') + '</span></span></div>' +
      '<div class="row today-act">' +
      (df == null ? '<a class="btn primary" href="#/defi">' + icon('bolt', '') + 'Défi du jour</a>' : '<a class="btn" href="#/defi">' + icon('check', '') + 'Défi : ' + df + '/5</a>') +
      '<a class="btn" href="#/flash">' + icon('brain', '') + (dues ? dues + ' carte' + (dues > 1 ? 's' : '') + ' à revoir' : 'Flashcards') + '</a>' +
      (pc && pc.left >= 0 ? '<a class="btn" href="#/plan">' + icon('pin', '') + (pc.left ? 'J-' + pc.left : 'Jour J') + ' · plan</a>' : '<a class="btn" href="#/plan">' + icon('pin', '') + 'Créer mon plan</a>') +
      '<a class="btn" href="#/examen">' + icon('clock', '') + 'Examen blanc</a></div></div>';
  };
})();
