/* ==========================================================
   Pulsar VSAV — schémas SVG dessinés et animations pédagogiques
   Toutes les valeurs affichées proviennent des fiches citées.
   ========================================================== */
(function () {
  'use strict';
  var V = window.VSAV, S = V.svg, A = V.anim, esc = V.util.esc, icon = V.icon;
  var RM = V.reduceMotion;

  /* ---------------------------------------------------------- aides de dessin */
  function svgOpen(w, h, label) { return '<svg class="sv" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + esc(label || 'Schéma') + '" xmlns="http://www.w3.org/2000/svg">' + defs(); }
  function defs() {
    return '<defs><marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:var(--muted)"/></marker>' +
      '<marker id="arwA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:var(--accent)"/></marker></defs>';
  }
  function txt(x, y, s, cls, anchor) {
    var lines = String(s).split('\n');
    return '<text x="' + x + '" y="' + y + '" class="' + (cls || '') + '" text-anchor="' + (anchor || 'middle') + '">' +
      lines.map(function (l, i) { return '<tspan x="' + x + '" dy="' + (i ? '1.2em' : 0) + '">' + esc(l) + '</tspan>'; }).join('') + '</text>';
  }
  function box(x, y, w, h, s, fill, stroke, tcls) {
    var n = String(s).split('\n').length;
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="9" class="' + (fill || 'f-card') + ' ' + (stroke || 's-line') + '" stroke-width="1.6"/>' +
      txt(x + w / 2, y + h / 2 - (n - 1) * 7.8 + 4.5, s, tcls || '');
  }
  function line(x1, y1, x2, y2, cls, mk) { return '<path d="M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2 + '" class="nf ' + (cls || 's-mut') + '" stroke-width="1.6"' + (mk === false ? '' : ' marker-end="url(#arw)"') + '/>'; }
  function path(d, cls, mk) { return '<path d="' + d + '" class="nf ' + (cls || 's-mut') + '" stroke-width="1.6"' + (mk === false ? '' : ' marker-end="url(#arw)"') + '/>'; }

  /* Organigramme simple : nœuds positionnés + liens (bas→haut, coudés si besoin) */
  function flow(o) {
    var h = svgOpen(o.w, o.h, o.label), N = {};
    o.nodes.forEach(function (n) { N[n.id] = n; });
    (o.edges || []).forEach(function (e) {
      var a = N[e[0]], b = N[e[1]], lab = e[2];
      var ax = a.x + a.w / 2, ay = a.y + a.h, bx = b.x + b.w / 2, by = b.y, d;
      if (e[3] === 'side') { ax = (bx > ax ? a.x + a.w : a.x); ay = a.y + a.h / 2; d = 'M' + ax + ' ' + ay + 'H' + bx + 'V' + (by - 2); }
      else if (Math.abs(ax - bx) < 4) d = 'M' + ax + ' ' + ay + 'V' + (by - 2);
      else { var my = ay + (by - ay) / 2; d = 'M' + ax + ' ' + ay + 'V' + my + 'H' + bx + 'V' + (by - 2); }
      h += path(d, 's-mut');
      if (lab) {
        var lx = e[3] === 'side' ? (ax + bx) / 2 : (Math.abs(ax - bx) < 4 ? ax + 16 : bx + (bx > ax ? -14 : 14));
        var ly = e[3] === 'side' ? ay - 6 : (Math.abs(ax - bx) < 4 ? ay + (by - ay) / 2 + 4 : ay + (by - ay) / 2 - 5);
        h += txt(lx, ly, lab, 't-s t-b');
      }
    });
    o.nodes.forEach(function (n) { h += '<g class="node" data-n="' + n.id + '">' + box(n.x, n.y, n.w, n.h, n.t, n.c || 'f-card', n.s || 's-line', n.tc) + '</g>'; });
    return h + (o.extra || '') + '</svg>';
  }
  S.flow = flow;

  /* Petit lecteur commun (barre de contrôle) */
  function ctrl(buttons) { return '<div class="anim-ctrl">' + buttons + '</div>'; }
  function btn(act, label, ic, primary) { return '<button class="btn' + (primary ? ' primary' : '') + '" type="button" data-a="' + act + '">' + (ic ? icon(ic, '') : '') + '<span>' + label + '</span></button>'; }
  function seg(name, opts, cur) {
    return '<span class="seg" role="group">' + opts.map(function (o) { return '<button type="button" data-seg="' + name + '" data-v="' + o[0] + '" aria-pressed="' + (o[0] === cur) + '">' + o[1] + '</button>'; }).join('') + '</span>';
  }
  function bindSeg(el, name, fn) {
    el.querySelectorAll('[data-seg="' + name + '"]').forEach(function (b) {
      b.addEventListener('click', function () {
        el.querySelectorAll('[data-seg="' + name + '"]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        fn(b.getAttribute('data-v'));
      });
    });
  }

  /* ==========================================================
     ANIMATION 1 — RCP : rythme des compressions / insufflations
     Sources : Mémento SSUAP, FT Compression thoracique, PR ACR adulte / enfant-nourrisson,
     PR Nouveau-né, FT Ventilation artificielle (insufflation ≈ 1 s)
     ========================================================== */
  var RCP_MODES = {
    adulte: { ct: 30, ins: 2, bpm: 110, min: 100, max: 120, depth: 'environ 5 cm, sans dépasser 6 cm', hands: 'talon d’une main, l’autre par-dessus, doigts entrecroisés et relevés', zone: 'centre de la poitrine, moitié inférieure du sternum, strictement sur la ligne médiane', label: 'Adulte — 30 / 2', initial: 'Pas d’insufflations initiales (sauf noyé : 5 insufflations)' },
    enfant: { ct: 15, ins: 2, bpm: 110, min: 100, max: 120, depth: 'au moins 1/3 de l’épaisseur du thorax, soit environ 5 cm', hands: 'talon d’une main (technique adulte possible si grand enfant)', zone: 'un travers de doigt au-dessus de l’appendice xiphoïde', label: 'Enfant — 15 / 2', initial: '5 insufflations initiales' },
    nourrisson: { ct: 15, ins: 2, bpm: 110, min: 100, max: 120, depth: 'au moins 1/3 de l’épaisseur du thorax, soit environ 4 cm', hands: 'pulpe des 2 pouces côte à côte (à 2 secouristes ou plus), pulpe de 2 doigts si seul', zone: 'moitié inférieure du sternum, un travers de doigt au-dessus de l’appendice xiphoïde', label: 'Nourrisson — 15 / 2', initial: '5 insufflations initiales' },
    nn: { ct: 3, ins: 1, bpm: 120, min: 120, max: 120, depth: 'au moins 1/3 de l’épaisseur du thorax', hands: 'pulpe des 2 pouces, doigts englobant le thorax', zone: 'moitié inférieure du sternum, un travers de doigt au-dessus de l’appendice xiphoïde', label: 'Nouveau-né à la naissance — 3 / 1', initial: '40 insufflations à l’air en 1 min avant la RCP si l’état reste inchangé ; RCP sans défibrillateur' }
  };
  A.rcp = function (el, a) {
    var mode = a.mode && RCP_MODES[a.mode] ? a.mode : 'adulte', M = RCP_MODES[mode], bpm = M.bpm;
    var playing = false, raf = 0, t0 = 0, elapsedBefore = 0, sound = false, actx = null, lastBeat = -1;
    el.innerHTML = '<div class="stage">' + svgOpen(520, 250, 'Animation du rythme de la RCP') +
      '<rect x="0" y="0" width="520" height="250" class="f-bg" rx="12" opacity=".5"/>' +
      // sol + victime (vue de profil)
      '<rect x="40" y="198" width="440" height="10" rx="3" class="f-card s-line" stroke-width="1"/>' +
      '<g id="rcp-body"><path id="rcp-chest" d="M110 196 C112 160 150 150 200 150 L330 152 C360 154 372 170 374 196 Z" class="f-skin s-ink" stroke-width="1.4"/>' +
      '<path d="M374 196 C382 186 400 182 420 186 L456 192 L456 196 Z" class="f-skin s-ink" stroke-width="1.4"/>' +
      '<circle cx="86" cy="178" r="22" class="f-skin s-ink" stroke-width="1.4"/><path d="M64 178h-6" class="nf s-ink" stroke-width="1.4"/></g>' +
      // BAVU
      '<g id="rcp-bavu" opacity=".35"><rect x="40" y="128" width="58" height="28" rx="14" class="f-info s-info" stroke-width="1.6" id="rcp-ball"/><path d="M98 142 h10 v12 h-6" class="nf s-info" stroke-width="3"/>' + txt(69, 122, 'BAVU', 't-s t-b') + '</g>' +
      // secouriste : bras + mains
      '<g id="rcp-arms"><path d="M262 40 L258 118 M286 40 L282 118" class="nf s-ink" stroke-width="12" stroke-linecap="round"/><rect x="246" y="116" width="50" height="16" rx="7" class="f-acc"/>' +
      '<path d="M274 20 v18" class="nf s-ink" stroke-width="22" stroke-linecap="round"/></g>' +
      '<path d="M271 136 v8" class="nf s-acc" stroke-width="2" id="rcp-depth"/>' +
      // compteur
      '<text x="470" y="44" text-anchor="end" class="t-acc" style="font-size:40px" id="rcp-count">0</text>' +
      '<text x="470" y="66" text-anchor="end" class="t-s t-b" id="rcp-phase">Prêt</text>' +
      '<text x="470" y="86" text-anchor="end" class="t-s" id="rcp-cycle"></text>' +
      '<text x="24" y="34" text-anchor="start" class="t-b" id="rcp-label"></text>' +
      '<text x="24" y="54" text-anchor="start" class="t-s" id="rcp-time">0:00</text>' +
      '</svg></div>' +
      ctrl(seg('mode', [['adulte', 'Adulte'], ['enfant', 'Enfant'], ['nourrisson', 'Nourrisson'], ['nn', 'Nouveau-né']], mode) +
        btn('play', 'Démarrer', 'play', true) + btn('reset', 'Remettre à zéro', 'reset') +
        '<label class="small row" style="gap:6px">Rythme <input type="range" data-a="bpm" min="100" max="120" step="1" value="' + bpm + '" style="width:110px"><span class="anim-readout" data-a="bpmv">' + bpm + '/min</span></label>' +
        '<label class="small row" style="gap:6px"><input type="checkbox" data-a="snd"> Métronome sonore</label>') +
      '<div class="anim-panel small" data-a="info"></div>';
    var q = function (s) { return el.querySelector(s); };
    var arms = q('#rcp-arms'), chest = q('#rcp-chest'), bavu = q('#rcp-bavu'), ball = q('#rcp-ball');
    var cnt = q('#rcp-count'), ph = q('#rcp-phase'), cyc = q('#rcp-cycle'), tm = q('#rcp-time');
    var bpmIn = q('[data-a="bpm"]'), bpmV = q('[data-a="bpmv"]'), playB = q('[data-a="play"]');
    function info() {
      q('#rcp-label').textContent = M.label;
      q('[data-a="info"]').innerHTML = '<b>' + esc(M.label) + '</b> · Fréquence ' + (M.min === M.max ? M.max + '/min' : M.min + ' à ' + M.max + '/min') +
        ' · Profondeur : ' + esc(M.depth) + '<br>Zone : ' + esc(M.zone) + ' · Appui : ' + esc(M.hands) + '<br><i>' + esc(M.initial) + '</i>. Temps de compression = temps de relâchement ; laisser le thorax reprendre sa forme. Relais toutes les 2 minutes.' +
        (RM ? '<br><b>Mouvement réduit activé</b> : l’animation n’affiche que le compteur.' : '');
      bpmIn.disabled = M.min === M.max; bpmIn.min = M.min; bpmIn.max = M.max; bpmIn.value = bpm; bpmV.textContent = bpm + '/min';
    }
    function cycleLen() { return M.ct * 60 / bpm + M.ins * 2; } // insufflation : ~1 s d’insufflation + ~1 s d’expiration (illustratif)
    function beep(f) { if (!sound) return; try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); var o = actx.createOscillator(), g = actx.createGain(); o.frequency.value = f; g.gain.value = .08; o.connect(g); g.connect(actx.destination); o.start(); o.stop(actx.currentTime + .05); } catch (e) { /* */ } }
    function render(t) {
      var L = cycleLen(), c = Math.floor(t / L), r = t - c * L, ctT = M.ct * 60 / bpm, dy = 0, inflate = 0, beat;
      if (r < ctT) {
        var per = 60 / bpm, k = Math.floor(r / per), f = (r - k * per) / per;
        dy = f < .5 ? f * 2 : (1 - f) * 2; // compression = relâchement
        cnt.textContent = k + 1; ph.textContent = 'Compressions'; beat = c * 1000 + k;
        if (beat !== lastBeat) { lastBeat = beat; beep(880); }
        bavu.setAttribute('opacity', '.35');
      } else {
        var r2 = r - ctT, j = Math.floor(r2 / 2), g = r2 - j * 2;
        inflate = g < 1 ? g : 2 - g;
        cnt.textContent = j + 1; ph.textContent = 'Insufflation ' + (j + 1) + '/' + M.ins; beat = c * 1000 + 500 + j;
        if (beat !== lastBeat) { lastBeat = beat; beep(440); }
        bavu.setAttribute('opacity', '1');
      }
      cyc.textContent = 'Cycle ' + (c + 1) + ' · ' + M.ct + '/' + M.ins;
      var sec = Math.floor(t), mm = Math.floor(sec / 60), ss = sec % 60;
      tm.textContent = mm + ':' + (ss < 10 ? '0' : '') + ss + (t >= 120 && t % 120 < 6 ? '  → RELAIS (toutes les 2 min)' : '');
      if (!RM) {
        arms.setAttribute('transform', 'translate(0 ' + (dy * 16).toFixed(2) + ')');
        chest.setAttribute('transform', 'translate(0 ' + (dy * 9).toFixed(2) + ') scale(1 1)');
        chest.style.transformOrigin = '240px 196px';
        ball.setAttribute('transform', 'translate(' + (inflate * 6) + ' ' + (inflate * 4) + ') scale(' + (1 - inflate * .22) + ' ' + (1 - inflate * .3) + ')');
        q('#rcp-body').setAttribute('transform', 'translate(0 ' + (-inflate * 5).toFixed(2) + ')');
      }
    }
    function loop(now) { if (!playing) return; render(elapsedBefore + (now - t0) / 1000); raf = requestAnimationFrame(loop); }
    function play() { if (playing) { pause(); return; } playing = true; t0 = performance.now(); playB.innerHTML = icon('pause', '') + '<span>Pause</span>'; raf = requestAnimationFrame(loop); }
    function pause() { if (playing) elapsedBefore += (performance.now() - t0) / 1000; playing = false; cancelAnimationFrame(raf); playB.innerHTML = icon('play', '') + '<span>Reprendre</span>'; }
    function reset() { pause(); elapsedBefore = 0; lastBeat = -1; render(0); cnt.textContent = '0'; ph.textContent = 'Prêt'; playB.innerHTML = icon('play', '') + '<span>Démarrer</span>'; }
    playB.addEventListener('click', play);
    q('[data-a="reset"]').addEventListener('click', reset);
    bpmIn.addEventListener('input', function () { var cur = playing; pause(); bpm = +bpmIn.value; bpmV.textContent = bpm + '/min'; elapsedBefore = 0; if (cur) play(); });
    q('[data-a="snd"]').addEventListener('change', function (e) { sound = e.target.checked; });
    bindSeg(el, 'mode', function (v) { mode = v; M = RCP_MODES[v]; bpm = M.bpm; info(); reset(); });
    info(); reset();
    V.onStop(function () { playing = false; cancelAnimationFrame(raf); });
  };

  /* ==========================================================
     ANIMATION 2 — XABCDE : le chemin de la molécule d’oxygène
     Source : PR - Bilan primaire (MAJ 05/2024)
     ========================================================== */
  var XABCDE = [
    { l: 'X', n: 'Hémorragie', c: '#c0262d', o: 'Stopper et maintenir en permanence l’arrêt de l’hémorragie : on stoppe la diminution du volume sanguin.', g: ['Hémorragie visible → technique d’arrêt du saignement immédiate : compression manuelle, pansement compressif (type israélien), garrot tourniquet, pansement hémostatique.'] },
    { l: 'A', n: 'Airway — voies aériennes', c: '#d97706', o: 'Maintenir en permanence la liberté des voies aériennes et la stabilisation du rachis cervical : l’O₂ doit pouvoir entrer.', g: ['Maintien tête (stabilisation).', 'Inconscient sur le ventre → retournement d’urgence ; sur le dos → LVA adaptée.', 'OBVA / suffocation complète → désobstruction ; lien constrictif → relâcher ; casque intégral → retrait.', 'Corps étranger visible → extraction digitale ; liquides (sang, vomissures) → aspiration.'] },
    { l: 'B', n: 'Breathing — ventilation', c: '#0f766e', o: 'S’assurer de l’efficacité de la respiration : l’O₂ arrive-t-il aux poumons puis aux globules rouges ?', g: ['Appréciation sur 10 s : fréquence, amplitude, rythme, symétrie (si inconscient : pouls en simultané).', 'Pas de ventilation / ventilation agonique (≤ 6 mvts/min) → RCP si pas de pouls ; insufflations au BAVU.', 'SpO₂ < 94 % → MHC 15 L/min puis 9 à 15 L/min (objectif 94–98 %) ; IRC < 89 % → objectif 89–92 %.', 'Détresse respiratoire → O₂ au MHC quelle que soit la SpO₂ + position d’attente.'] },
    { l: 'C', n: 'Circulation', c: '#b91c1c', o: 'Rechercher les signes d’une défaillance circulatoire : l’O₂ est-il transporté jusqu’aux organes ?', g: ['Pouls radial, sinon central (carotidien, fémoral) sur 10 s ; TRC ; peau (pâleur, marbrures, sueurs, extrémités froides).', 'Palper les « boîtes à sang » : thorax, abdomen, bassin, cuisses.', 'ACR → RCP + DAE. Contrôler l’efficacité des gestes du X.', 'Détresse circulatoire → O₂ quelle que soit la SpO₂ + position d’attente.'] },
    { l: 'D', n: 'Disability — neurologique', c: '#7c3aed', o: 'Évaluer la fonction cérébrale : l’O₂ est-il utilisé correctement par les cellules ?', g: ['Score de Glasgow, pupilles (diamètre, symétrie, réactivité), motricité et sensibilité des 4 membres.', 'Trouble de conscience → glycémie capillaire.', 'Détresse neurologique → O₂ suivant la saturation ; Glasgow < 8 → présence médicale recommandée.', 'Position d’attente adaptée (PLS…).'] },
    { l: 'E', n: 'Exposition — environnement', c: '#1d4ed8', o: 'S’assurer qu’il n’y a pas de lésion vitale cachée et lutter contre l’hypo / l’hyperthermie (triade létale).', g: ['On découvre, on regarde, on recouvre.', 'Hypothermie < 35 °C ; hyperthermie > 40 °C avec trouble de conscience ; brûlure grave ; traumatisme pénétrant ; section de membre.', 'Couvrir, refroidir si besoin, extraire du milieu hostile.'] }
  ];
  A.xabcde = function (el) {
    var i = -1, timer = null, W = 560, xs = XABCDE.map(function (_, k) { return 50 + k * 92; });
    var g = svgOpen(W, 150, 'Chemin de la molécule d’oxygène dans le bilan XABCDE') +
      '<path d="M50 70 C120 20 190 120 280 70 S 440 20 510 70" class="nf s-line" stroke-width="5" stroke-dasharray="2 9" stroke-linecap="round"/>';
    XABCDE.forEach(function (s, k) {
      var y = 70 + (k % 2 ? 0 : 0);
      g += '<g class="node" data-k="' + k + '" style="cursor:pointer"><circle cx="' + xs[k] + '" cy="' + y + '" r="27" fill="' + s.c + '" opacity=".92"/>' +
        '<text x="' + xs[k] + '" y="' + (y + 9) + '" text-anchor="middle" class="t-w" style="font-size:26px">' + s.l + '</text>' +
        txt(xs[k], y + 48, s.n.split(' — ')[0], 't-s t-b') + '</g>';
    });
    g += '<g id="o2"><circle cx="20" cy="70" r="11" fill="#fff" stroke="#1b5fa8" stroke-width="2.5"/><text x="20" y="74" text-anchor="middle" style="font-size:10px;font-weight:800;fill:#1b5fa8">O₂</text></g></svg>';
    el.innerHTML = '<div class="stage">' + g + '</div>' + ctrl(btn('prev', 'Préc.', 'prev') + btn('play', 'Lecture', 'play', true) + btn('next', 'Suiv.', 'next') + '<span class="small muted">« Traiter en premier ce qui tue en premier »</span>') + '<div class="anim-panel" data-a="panel"><b>Clique sur une lettre ou lance la lecture.</b> Pour chaque item, les gestes de survie sont initiés avant de passer au suivant.</div>';
    var o2 = el.querySelector('#o2'), panel = el.querySelector('[data-a="panel"]'), pb = el.querySelector('[data-a="play"]');
    function show(k) {
      i = Math.max(0, Math.min(XABCDE.length - 1, k)); var s = XABCDE[i];
      el.querySelectorAll('.node').forEach(function (n) { n.classList.toggle('dim', +n.getAttribute('data-k') > i); });
      o2.style.transition = RM ? 'none' : 'transform .8s ease';
      o2.setAttribute('transform', 'translate(' + (xs[i] - 20) + ' -38)');
      panel.innerHTML = '<h4 style="color:' + s.c + '">' + s.l + ' — ' + esc(s.n) + '</h4><p>' + esc(s.o) + '</p><ul>' + s.g.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    }
    function stop() { clearTimeout(timer); timer = null; pb.innerHTML = icon('play', '') + '<span>Lecture</span>'; }
    function tick() { if (i >= XABCDE.length - 1) { stop(); return; } show(i + 1); timer = setTimeout(tick, 5200); }
    pb.addEventListener('click', function () { if (timer) { stop(); return; } if (i >= XABCDE.length - 1) i = -1; pb.innerHTML = icon('pause', '') + '<span>Pause</span>'; tick(); });
    el.querySelector('[data-a="prev"]').addEventListener('click', function () { stop(); show(i - 1); });
    el.querySelector('[data-a="next"]').addEventListener('click', function () { stop(); show(i + 1); });
    el.querySelectorAll('.node').forEach(function (n) { n.addEventListener('click', function () { stop(); show(+n.getAttribute('data-k')); }); });
    V.onStop(stop);
  };

  /* ==========================================================
     ANIMATION 3 — La chaîne des bilans
     Sources : PR Bilan secondaire (schéma), PR Bilan primaire, PR Bilan de surveillance
     ========================================================== */
  var BILANS = [
    { t: 'Départ', d: 'Départ en intervention : on anticipe d’après le motif d’appel.' },
    { t: 'Circonstanciel', d: 'À la présentation sur intervention : prévention des dangers (intervenants, entourage, victimes). Les dangers sont-ils maîtrisables ? Besoin de moyens supplémentaires ?' },
    { t: 'Primaire', d: 'Au contact de la victime : recherche d’une détresse vitale (XABCDE), gestes de survie immédiats, catégorisation UA / UR / IMP par le chef d’agrès, demande de moyens médicaux si besoin.' },
    { t: 'Secondaire', d: 'Après le primaire : chiffrer fonction par fonction (sur 1 minute), interrogatoire (OPQRST, SAMPLER), examen de la tête aux pieds.' },
    { t: 'Surveillance', d: 'Dès la fin du primaire et/ou secondaire, en permanence jusqu’à la fin de la prise en charge : paramètres toutes les 5 min max si détresse, sinon toutes les 10 à 15 min.' }
  ];
  A.bilans = function (el) {
    var i = -1, timer = null, W = 560;
    var g = svgOpen(W, 120, 'Chronologie des bilans');
    BILANS.forEach(function (b, k) {
      var x = 14 + k * 110;
      g += '<g class="node" data-k="' + k + '" style="cursor:pointer"><path d="M' + x + ' 30 h88 l14 24 -14 24 h-88 l14 -24z" class="f-accs s-acc" stroke-width="1.6"/>' + txt(x + 54, 58, b.t, 't-b') + txt(x + 54, 100, (k + 1) + '', 't-s') + '</g>';
    });
    g += '</svg>';
    el.innerHTML = '<div class="stage">' + g + '</div>' + ctrl(btn('play', 'Dérouler', 'play', true) + btn('next', 'Étape suivante', 'next')) + '<div class="anim-panel" data-a="p"><b>Les bilans s’enchaînent toujours dans le même ordre.</b> Clique sur une étape.</div>';
    var p = el.querySelector('[data-a="p"]'), pb = el.querySelector('[data-a="play"]');
    function show(k) { i = Math.max(0, Math.min(BILANS.length - 1, k)); el.querySelectorAll('.node').forEach(function (n) { n.classList.toggle('dim', +n.getAttribute('data-k') !== i); }); p.innerHTML = '<h4>' + (i + 1) + '. ' + esc(BILANS[i].t) + '</h4>' + esc(BILANS[i].d); }
    function stop() { clearTimeout(timer); timer = null; pb.innerHTML = icon('play', '') + '<span>Dérouler</span>'; }
    function tick() { if (i >= BILANS.length - 1) { stop(); return; } show(i + 1); timer = setTimeout(tick, 4200); }
    pb.addEventListener('click', function () { if (timer) { stop(); return; } if (i >= BILANS.length - 1) i = -1; pb.innerHTML = icon('pause', '') + '<span>Pause</span>'; tick(); });
    el.querySelector('[data-a="next"]').addEventListener('click', function () { stop(); show(i + 1); });
    el.querySelectorAll('.node').forEach(function (n) { n.addEventListener('click', function () { stop(); show(+n.getAttribute('data-k')); }); });
    V.onStop(stop);
  };

  /* ==========================================================
     ANIMATION 4 — DAE : les 5 étapes + position des électrodes
     Source : FT - Utilisation d’un DAE
     ========================================================== */
  var DAE = [
    ['Mise en marche', 'Ouvrir le capot ou appuyer sur marche/arrêt ; une voix guide l’opérateur. La RCP continue.'],
    ['Connexion des électrodes', 'Dénuder, sécher (raser si très velu), coller les électrodes selon le schéma, connecter le câble — sans interrompre la RCP.'],
    ['Analyse du rythme', 'Si l’appareil le demande : arrêter la RCP et ne plus toucher la victime pendant l’analyse.'],
    ['Délivrance du choc', 'Si choc indiqué : s’écarter, appuyer sur le bouton si demandé, puis REPRENDRE IMMÉDIATEMENT la RCP sans attendre les consignes vocales.'],
    ['Arrêt de l’appareil', 'Uniquement à la demande du médecin des services de secours.']
  ];
  A.dae = function (el) {
    var i = -1, who = 'adulte';
    function torso() {
      var g = svgOpen(360, 260, 'Position des électrodes du DAE') +
        '<path d="M110 30 C120 16 240 16 250 30 L282 90 L270 250 H90 L78 90 Z" class="f-skin s-ink" stroke-width="1.4"/>' +
        '<path d="M180 40 V170" class="nf s-mut" stroke-width="2" stroke-dasharray="4 4"/>' + txt(180, 190, 'sternum', 't-s') +
        '<path d="M128 46 Q150 52 172 46 M188 46 Q210 52 232 46" class="nf s-mut" stroke-width="1.5"/>' + txt(150, 40, 'clavicule droite', 't-s') +
        '<path d="M276 96 Q290 110 284 130" class="nf s-mut" stroke-width="1.5"/>' + txt(312, 100, 'aisselle\ngauche', 't-s');
      if (who === 'adulte') {
        g += '<g class="elec" data-s="1"><rect x="128" y="56" width="44" height="58" rx="6" class="f-acc" opacity=".9"/>' + txt(150, 90, '1', 't-w') + '</g>' +
          '<g class="elec" data-s="1"><rect x="228" y="128" width="44" height="58" rx="6" class="f-acc" opacity=".9" transform="rotate(-12 250 157)"/>' + txt(250, 162, '2', 't-w') + '</g>' +
          txt(20, 236, '1 : juste sous la clavicule droite, contre le bord droit du sternum', 't-s', 'start') +
          txt(20, 252, '2 : côté gauche du thorax, 5 à 10 cm sous l’aisselle gauche', 't-s', 'start');
      } else {
        g += '<g class="elec" data-s="1"><rect x="156" y="80" width="48" height="56" rx="6" class="f-acc" opacity=".9"/>' + txt(180, 113, 'avant', 't-w') + '</g>' +
          '<g class="elec" data-s="1"><rect x="156" y="150" width="48" height="56" rx="6" class="nf s-acc" stroke-width="2.5" stroke-dasharray="5 4"/>' + txt(180, 183, 'dos', 't-acc') + '</g>' +
          txt(20, 236, 'Nourrisson : une électrode devant, au milieu du thorax,', 't-s', 'start') + txt(20, 252, 'l’autre dans le dos, entre les deux omoplates (pointillés)', 't-s', 'start');
      }
      return g + '<g id="dae-flash" opacity="0"><path d="M188 98 L168 132 h18 l-16 30 36-42 h-18 l16-22z" fill="#ffd166" stroke="#a15c00"/></g></svg>';
    }
    function render() {
      el.innerHTML = '<div class="stage">' + torso() + '</div>' + ctrl(seg('who', [['adulte', 'Adulte / enfant'], ['nourrisson', 'Nourrisson']], who) + btn('next', 'Étape suivante', 'next', true) + btn('reset', 'Recommencer', 'reset')) + '<div class="anim-panel" data-a="p"></div>';
      bindSeg(el, 'who', function (v) { who = v; render(); show(i < 0 ? 0 : i); });
      el.querySelector('[data-a="next"]').addEventListener('click', function () { show(i >= DAE.length - 1 ? 0 : i + 1); });
      el.querySelector('[data-a="reset"]').addEventListener('click', function () { show(0); });
    }
    function show(k) {
      i = k;
      el.querySelectorAll('.elec').forEach(function (e) { e.style.opacity = i >= 1 ? 1 : .15; });
      var fl = el.querySelector('#dae-flash'); fl.setAttribute('opacity', i === 3 ? 1 : 0);
      el.querySelector('[data-a="p"]').innerHTML = '<h4>Étape ' + (i + 1) + ' / 5 — ' + esc(DAE[i][0]) + '</h4>' + esc(DAE[i][1]) +
        (i === 1 ? '<br><span class="small muted">Si pas d’électrodes « enfant », utiliser les électrodes adulte. Dispositif implantable sous la clavicule droite → coller à un travers de main. Retirer un timbre médicamenteux et essuyer.</span>' : '');
    }
    render(); show(0);
  };

  /* ==========================================================
     ANIMATION 5 — Score de Glasgow interactif
     Sources : Mémento SSUAP, Mémo D (A6)
     ========================================================== */
  A.glasgow = function (el) {
    var Y = [[4, 'Spontanée'], [3, 'À la demande'], [2, 'À la douleur'], [1, 'Pas d’ouverture']];
    var Vb = [[5, 'Orientée'], [4, 'Désorientée / confuse'], [3, 'Obnubilée / incohérente'], [2, 'Grognements / incompréhensible'], [1, 'Pas de réponse']];
    var M = [[6, 'À la demande'], [5, 'À la douleur : adaptée'], [4, 'À la douleur : évitement / retrait'], [3, 'À la douleur : en flexion'], [2, 'À la douleur : en extension'], [1, 'Pas de réponse']];
    function sel(n, arr) { return '<label><b>' + n + '</b><select data-g>' + arr.map(function (o) { return '<option value="' + o[0] + '">' + o[0] + ' — ' + esc(o[1]) + '</option>'; }).join('') + '</select></label>'; }
    el.innerHTML = '<div class="stage" style="display:block"><div class="glasgow">' + sel('Yeux (Y) 1 à 4', Y) + sel('Verbal (V) 1 à 5', Vb) + sel('Moteur (M) 1 à 6', M) + '</div></div><div class="anim-panel"><span class="gl-res" data-a="r"></span> <span data-a="c"></span></div>';
    function upd() {
      var s = 0; el.querySelectorAll('[data-g]').forEach(function (x) { s += +x.value; });
      el.querySelector('[data-a="r"]').textContent = 'Glasgow = ' + s + ' / 15';
      el.querySelector('[data-a="c"]').innerHTML = s < 8 ? '<span class="pill bad">Score &lt; 8 : présence médicale recommandée (prise en compte des voies aériennes)</span>' : s === 15 ? '<span class="pill ok">Score maximal : victime consciente et orientée</span>' : '<span class="pill warn">Trouble de la conscience : glycémie capillaire, surveillance de l’évolution</span>';
    }
    el.querySelectorAll('[data-g]').forEach(function (x) { x.addEventListener('change', upd); }); upd();
  };

  /* ==========================================================
     ANIMATION 6 — Arbre de repérage en cas de nombreuses victimes
     Source : FT - Repérage en cas de nombreuses victimes
     ========================================================== */
  var COLORS = { NOIRE: '#111', ROUGE: '#c0262d', JAUNE: '#d4a106', VERTE: '#1a8a3d' };
  var TRIAGE = {
    q1: { q: 'Le décès ne fait-il aucun doute ? (tête séparée du tronc, victime déchiquetée ou démembrée, raideur cadavérique)', y: 'r_noir1', n: 'q2' },
    q2: { q: 'La victime a-t-elle perdu connaissance ?', y: 'q3', n: 'q4' },
    q3: { q: 'Après une libération des voies aériennes, respire-t-elle ?', y: 'r_rouge1', n: 'r_noir2' },
    q4: { q: 'Présente-t-elle une détresse vitale évidente ? (hémorragie, FR > 30/min ou FC > 120/min chez l’adulte)', y: 'r_rouge2', n: 'q5' },
    q5: { q: 'Peut-elle se déplacer, seule ou avec de l’aide ?', y: 'r_vert', n: 'r_jaune' },
    r_noir1: { c: 'NOIRE', a: 'Ne pas déplacer la victime, attribuer une fiche d’identification.' },
    r_noir2: { c: 'NOIRE', a: 'Fiche d’identification. La réanimation n’est débutée qu’à la demande du médecin ou sur ordre du responsable, une fois toutes les victimes prises en charge.' },
    r_rouge1: { c: 'ROUGE', a: 'Mettre en PLS, fiche d’identification. Prise en charge médicale prioritaire, le plus souvent sur place.' },
    r_rouge2: { c: 'ROUGE', a: 'Geste de secours adapté (garrot, pansement compressif, position d’attente) sans rester immobilisé auprès d’elle, fiche d’identification.' },
    r_jaune: { c: 'JAUNE', a: 'Fiche d’identification. Aucun geste sur place : prise en charge dès que possible, après un éventuel déplacement au poste médical avancé.' },
    r_vert: { c: 'VERTE', a: 'Fiche d’identification. La diriger vers le Point de Rassemblement des Victimes (PRV), à l’écart du sinistre.' }
  };
  A.triage = function (el) {
    var path = [];
    function render(id) {
      var n = TRIAGE[id], h = '<div class="stage" style="display:block">';
      h += '<div class="tree-path">' + (path.length ? path.map(esc).join(' › ') : 'Aborder les victimes une à une, en commençant par la plus proche · bilan primaire succinct') + '</div>';
      if (n.q) h += '<div class="tree-q">' + esc(n.q) + '</div><div class="row">' + btn('y', 'Oui', 'check', true) + btn('n', 'Non', '') + '</div>';
      else h += '<p><span class="tag-col" style="background:' + COLORS[n.c] + '">Couleur ' + n.c + '</span></p><p>' + esc(n.a) + '</p>' + btn('r', 'Nouvelle victime', 'reset', true);
      el.innerHTML = h + '</div>';
      if (n.q) {
        el.querySelector('[data-a="y"]').addEventListener('click', function () { path.push(n.q.split(' ?')[0] + ' : oui'); render(n.y); });
        el.querySelector('[data-a="n"]').addEventListener('click', function () { path.push(n.q.split(' ?')[0] + ' : non'); render(n.n); });
      } else el.querySelector('[data-a="r"]').addEventListener('click', function () { path = []; render('q1'); });
    }
    render('q1');
  };

  /* ==========================================================
     ANIMATION 7 — Aide à la décision : oxygène par inhalation
     Sources : Mémento SSUAP, Memo B, FT Administration d’O₂ par inhalation
     ========================================================== */
  A.o2 = function (el) {
    el.innerHTML = '<div class="stage" style="display:block"><div class="o2form">' +
      '<label>Situation <select data-o="sit"><option value="none">Pas de détresse vitale</option><option value="xabc">Détresse en X, A, B ou C (respiratoire / circulatoire)</option><option value="d">Détresse neurologique (D)</option><option value="co">Fumées d’incendie, CO, accident de décompression</option><option value="nospo">Détresse vitale, SpO₂ impossible à mesurer</option></select></label>' +
      '<label>Insuffisant respiratoire chronique (IRC) <input type="checkbox" data-o="irc"></label>' +
      '<label>SpO₂ mesurée (%) <input type="number" min="50" max="100" value="96" data-o="spo"></label></div></div><div class="anim-panel" data-a="r"></div>';
    function upd() {
      var sit = el.querySelector('[data-o="sit"]').value, irc = el.querySelector('[data-o="irc"]').checked, spo = +el.querySelector('[data-o="spo"]').value, r;
      var seuil = irc ? 89 : 94, obj = irc ? '89 à 92 %' : '94 à 98 %';
      if (sit === 'xabc') r = '<b>O₂ systématique au MHC à 15 L/min</b>, quelle que soit la SpO₂ (bilan primaire critique en X-A-B-C).';
      else if (sit === 'co') r = '<b>MHC à 15 L/min quel que soit le niveau de SpO₂.</b>';
      else if (sit === 'nospo') r = '<b>MHC à 15 L/min</b>, quels que soient les antécédents, dans l’attente d’un avis médical.';
      else if (spo < seuil) r = '<b>SpO₂ ' + spo + ' % &lt; ' + seuil + ' %</b> → débit initial 15 L/min (MHC), puis ajuster de 9 à 15 L/min pour un objectif de <b>' + obj + '</b>.' + (sit === 'd' ? ' (Détresse neurologique : O₂ suivant la saturation.)' : '');
      else r = '<b>SpO₂ ' + spo + ' % ≥ ' + seuil + ' %</b> → pas d’indication à l’O₂ sur ce seul critère' + (sit === 'd' ? ' (détresse neurologique : O₂ suivant la saturation)' : '') + '. Surveiller. Objectif ' + obj + '.';
      el.querySelector('[data-a="r"]').innerHTML = r + '<div class="small muted" style="margin-top:6px">Le MHC ne s’utilise pas en dessous de 6 L/min. Ne jamais utiliser un insufflateur manuel comme moyen d’inhalation. But : lutter contre l’hypoxie sans entraîner d’hyperoxie.</div>';
    }
    el.querySelectorAll('[data-o]').forEach(function (x) { x.addEventListener('input', upd); x.addEventListener('change', upd); }); upd();
  };

  /* ==========================================================
     ANIMATION 8 — Sorties de véhicule (vue de dessus)
     Sources : FT Sortie latérale / oblique / arrière d’une victime
     ========================================================== */
  var SORTIES = {
    lat: { n: 'Sortie latérale', team: '3 + 1 équipiers (5e possible)', when: 'Véhicule peu déformé ; atteinte du rachis sans perte de motricité ni de sensibilité. À proscrire si atteinte du bassin ou du fémur.', d: 'M250 120 C250 120 250 150 250 190', board: 'M150 132 H262' },
    obl: { n: 'Sortie oblique', team: '4 équipiers minimum (5e possible)', when: 'Quand la position du véhicule ne permet pas l’extraction par l’arrière, après découpe du montant central côté victime (à défaut à l’opposé).', d: 'M250 120 C250 150 290 175 320 200', board: 'M182 96 L262 132' },
    arr: { n: 'Sortie arrière', team: '5 équipiers minimum', when: 'Dégagement latéral impossible ou atteintes traumatiques majeures (fémur, bassin, rachis…). Toit pas obligatoirement retiré.', d: 'M250 120 C200 120 120 120 40 120', board: 'M60 120 H250' }
  };
  A.sorties = function (el, a) {
    var cur = a.type || 'lat';
    function draw() {
      var s = SORTIES[cur];
      var g = svgOpen(420, 240, 'Vue de dessus : ' + s.n) +
        '<rect x="70" y="60" width="300" height="120" rx="40" class="f-bg s-ink" stroke-width="1.6"/>' + // voiture
        '<rect x="170" y="70" width="40" height="45" rx="6" class="f-card s-line" stroke-width="1"/><rect x="170" y="125" width="40" height="45" rx="6" class="f-card s-line" stroke-width="1"/>' +
        '<rect x="230" y="70" width="44" height="45" rx="6" class="f-card s-line" stroke-width="1"/><rect x="230" y="125" width="44" height="45" rx="6" class="f-accs s-acc" stroke-width="2"/>' +
        txt(252, 152, 'victime', 't-s t-b') + txt(320, 52, 'avant', 't-s') + txt(100, 52, 'arrière', 't-s') +
        '<path d="' + s.board + '" class="nf s-warn" stroke-width="9" stroke-linecap="round" opacity=".8"/>' + txt(120, 205, 'plan dur', 't-s') +
        '<path d="' + s.d.replace('M250 120', 'M252 148') + '" class="nf s-acc" stroke-width="3" marker-end="url(#arwA)" stroke-dasharray="7 6"' + (RM ? '' : '><animate attributeName="stroke-dashoffset" from="26" to="0" dur="1s" repeatCount="indefinite"/></path>') + (RM ? '/>' : '') +
        '</svg>';
      el.innerHTML = '<div class="stage">' + g + '</div>' + ctrl(seg('t', [['lat', 'Latérale'], ['obl', 'Oblique'], ['arr', 'Arrière']], cur)) + '<div class="anim-panel"><h4>' + esc(s.n) + ' — ' + esc(s.team) + '</h4>' + esc(s.when) + '<br><span class="small muted">Dans tous les cas : victime immobilisée au préalable dans l’ACT ; technique « soulager – glisser » ; ne jamais prendre appui sur la victime ni sur un équipier en contact avec elle.</span></div>';
      bindSeg(el, 't', function (v) { cur = v; draw(); });
    }
    draw();
  };

  /* ==========================================================
     ANIMATION 9 — Brancardage : place des porteurs (vue de dessus)
     Sources : FT Brancardage à 3 / à 4 secouristes, AC Principes généraux du brancardage
     ========================================================== */
  A.brancard = function (el) {
    var n = '3', sens = 'plat';
    function draw() {
      var g = svgOpen(460, 200, 'Position des porteurs autour du brancard');
      var dir = sens === 'descente' ? -1 : 1; // sens de la marche : vers la droite
      g += '<rect x="110" y="70" width="240" height="60" rx="10" class="f-card s-ink" stroke-width="1.6"/>';
      // victime : tête côté marche (sauf descente : pieds en avant)
      var headX = sens === 'descente' ? 130 : 330;
      g += '<circle cx="' + headX + '" cy="100" r="15" class="f-skin s-ink" stroke-width="1.2"/>' + txt(headX, 150, 'tête', 't-s');
      g += '<path d="M380 100 h60" class="nf s-acc" stroke-width="3" marker-end="url(#arwA)"/>' + txt(410, 88, 'marche', 't-s t-b');
      function p(x, y, lbl, chef) { return '<circle cx="' + x + '" cy="' + y + '" r="15" class="' + (chef ? 'f-acc' : 'f-info') + ' s-ink" stroke-width="1"/>' + txt(x, y + 5, lbl, chef ? 't-w' : 't-b'); }
      var front = 365, back = 95, pos = [];
      if (n === '3') {
        if (sens === 'plat') pos = [[back, 100, '1', 1], [front, 55, '2'], [front, 145, '3']];
        else if (sens === 'montee') pos = [[front, 100, '1', 0], [back, 55, '2'], [back, 145, '3']];
        else pos = [[back, 100, '1', 0], [front, 55, '2'], [front, 145, '3']];
      } else pos = [[back, 55, '1', 1], [back, 145, '4'], [front, 55, '2'], [front, 145, '3']];
      pos.forEach(function (q) { g += p(q[0], q[1], q[2], q[3]); });
      g += '</svg>';
      var msg = n === '3'
        ? (sens === 'plat' ? 'Terrain plat : le secouriste 1 (chef) est aux pieds, entre les hampes ; 2 et 3 à la tête, de part et d’autre. Victime tête en avant.'
          : sens === 'montee' ? 'Montée : un secouriste à l’avant et deux à l’arrière. Ceux qui sont vers le bas relèvent les poignées (ceinture, poitrine ou épaule) pour garder le brancard horizontal.'
            : 'Descente : deux secouristes vers l’avant et un vers l’arrière ; il est préférable de brancarder la victime les pieds en avant.')
        : 'À 4 : secouristes 1 (chef) et 4 aux pieds, 2 et 3 à la tête. En pente / escalier, ceux qui sont vers le bas relèvent les poignées ; en descente, pieds en avant de préférence.';
      el.innerHTML = '<div class="stage">' + g + '</div>' + ctrl(seg('n', [['3', 'À 3'], ['4', 'À 4']], n) + (n === '3' ? seg('s', [['plat', 'Terrain plat'], ['montee', 'Montée'], ['descente', 'Descente']], sens) : '')) + '<div class="anim-panel">' + esc(msg) + '<br><span class="small muted">Commandements en deux temps : « Attention pour lever… Levez ! ». Dos plat, travail avec les cuisses ; brancard horizontal, sans secousse ni balancement.</span></div>';
      bindSeg(el, 'n', function (v) { n = v; if (v === '4') sens = 'plat'; draw(); });
      bindSeg(el, 's', function (v) { sens = v; draw(); });
    }
    draw();
  };

  /* ==========================================================
     SCHÉMAS STATIQUES (fonctions → chaîne SVG)
     ========================================================== */

  /* Zone de compression thoracique — FT Compression thoracique */
  S.compression = function () {
    return svgOpen(460, 260, 'Zone d’appui des compressions thoraciques') +
      '<path d="M120 20 C130 8 330 8 340 20 L372 120 L350 250 H110 L88 120 Z" class="f-skin s-ink" stroke-width="1.4"/>' +
      '<rect x="216" y="40" width="28" height="150" rx="10" class="f-card s-mut" stroke-width="1.5"/>' +
      '<path d="M216 190 L230 214 L244 190" class="f-card s-mut" stroke-width="1.5"/>' +
      '<rect x="216" y="115" width="28" height="75" rx="6" class="f-acc" opacity=".55"/>' +
      '<circle cx="230" cy="168" r="9" class="f-acc"/>' +
      line(330, 168, 248, 168, 's-acc') + txt(392, 164, 'point d’appui\n(talon de la main)', 't-s t-b') +
      line(300, 125, 250, 140, 's-mut') + txt(350, 112, 'moitié inférieure\ndu sternum', 't-s') +
      line(150, 214, 222, 210, 's-mut') + txt(110, 222, 'appendice xiphoïde :\nne pas appuyer', 't-s') +
      txt(230, 30, 'ligne médiane', 't-s') + '</svg>';
  };

  /* Chaîne de survie — AC Arrêt cardiaque */
  S.chaine = function () {
    var steps = ['Reconnaître\nles signes / l’AC', 'Alerter\nprécocement', 'RCP\nprécoce', 'Défibrillation\nprécoce', 'Prise en charge\nmédicale'];
    var g = svgOpen(560, 130, 'Chaîne de survie');
    steps.forEach(function (s, k) {
      var x = 10 + k * 110;
      g += '<rect x="' + x + '" y="30" width="96" height="62" rx="31" class="' + (k === 3 ? 'f-acc' : 'f-accs') + ' s-acc" stroke-width="2"/>' + txt(x + 48, 56, s, k === 3 ? 't-w' : 't-b');
      if (k < 4) g += '<path d="M' + (x + 96) + ' 61 h14" class="nf s-acc" stroke-width="5"/>';
    });
    return g + txt(280, 118, 'Survie augmentée de 4 à 40 % · chaque minute gagnée pour le DAE : jusqu’à +10 %', 't-s t-b') + '</svg>';
  };

  /* Canule oropharyngée : choix de la taille — FT Mise en place de la canule */
  S.canule = function () {
    return svgOpen(440, 220, 'Mesure de la canule oropharyngée') +
      '<path d="M120 40 C200 20 280 40 300 90 C312 120 300 150 284 168 L262 176 L250 196 L210 200 C190 180 170 172 150 170 C120 168 100 140 100 110 C100 80 104 52 120 40 Z" class="f-skin s-ink" stroke-width="1.4"/>' +
      '<path d="M252 150 q14 4 22 0" class="nf s-ink" stroke-width="1.6"/>' + // bouche
      '<circle cx="265" cy="148" r="3" class="f-acc"/>' + txt(330, 136, 'incisives', 't-s t-b') + line(310, 138, 270, 147, 's-mut') +
      '<circle cx="172" cy="172" r="3" class="f-acc"/>' + txt(96, 196, 'angle de la mandibule', 't-s t-b') + line(120, 188, 168, 174, 's-mut') +
      '<path d="M265 150 L172 172" class="nf s-acc" stroke-width="3" stroke-dasharray="6 4"/>' +
      '<g transform="translate(250 40)"><path d="M0 0 h18 v10 h-5 v18 c0 40 40 50 60 30" class="nf s-acc" stroke-width="7" stroke-linecap="round"/></g>' + txt(360, 40, 'canule', 't-s t-b') +
      txt(220, 214, 'Taille = distance incisives → angle de la mandibule', 't-b') + '</svg>';
  };

  /* Garrot : où le poser — FT Le garrot */
  S.garrot = function () {
    return svgOpen(520, 200, 'Position du garrot') +
      '<path d="M20 70 H420 C450 70 480 80 490 100 C480 120 450 130 420 130 H20 Z" class="f-skin s-ink" stroke-width="1.4"/>' +
      txt(40, 60, 'racine du membre', 't-s t-b', 'start') +
      '<ellipse cx="270" cy="100" rx="22" ry="34" class="nf s-mut" stroke-width="1.5" stroke-dasharray="4 4"/>' + txt(270, 160, 'articulation :\njamais dessus', 't-s') +
      '<path d="M372 86 l18 8 -10 6 14 8" class="nf s-bad" stroke-width="3"/>' + txt(392, 160, 'plaie', 't-s t-b') +
      '<rect x="318" y="64" width="16" height="72" rx="4" class="f-acc"/>' + txt(326, 50, 'garrot', 't-acc') +
      '<path d="M336 40 H378" class="nf s-acc" stroke-width="1.6" marker-start="url(#arwA)" marker-end="url(#arwA)"/>' + txt(357, 32, '5 à 7 cm', 't-s t-b') +
      txt(170, 190, 'Entre la plaie et la racine du membre · noter l’heure de pose · laisser visible', 't-s', 'middle') + '</svg>';
  };

  /* Contention pelvienne — FT Contention pelvienne */
  S.pelvis = function () {
    return svgOpen(460, 240, 'Position de la ceinture pelvienne') +
      '<path d="M90 50 C120 40 160 70 190 70 H270 C300 70 340 40 370 50 C380 110 340 150 300 170 L280 200 H180 L160 170 C120 150 80 110 90 50 Z" class="f-bg s-ink" stroke-width="1.5"/>' +
      '<circle cx="110" cy="150" r="14" class="f-card s-ink" stroke-width="1.4"/><circle cx="350" cy="150" r="14" class="f-card s-ink" stroke-width="1.4"/>' +
      '<rect x="70" y="138" width="320" height="26" rx="8" class="f-acc" opacity=".55"/>' +
      '<rect x="212" y="134" width="36" height="34" rx="6" class="f-card s-acc" stroke-width="2"/>' + txt(230, 156, 'symphyse', 't-s t-b') +
      txt(60, 196, 'grand trochanter', 't-s t-b', 'start') + txt(400, 196, 'grand trochanter', 't-s t-b', 'end') +
      txt(230, 30, 'Compression circonférentielle : rapproche les ailes iliaques', 't-s t-b') +
      txt(230, 228, 'Centrée sur les grands trochanters · fermeture sur la symphyse · reste en place à l’hôpital', 't-s') + '</svg>';
  };

  /* Thermomètre de l’hypothermie — PR Bilan primaire (E) */
  S.hypothermie = function () {
    var rows = [[35, 32, 'Légère', '#7cc4f5'], [32, 28, 'Modérée', '#3a8fd6'], [28, 24, 'Sévère', '#1f5fa8'], [24, 18, 'Profonde', '#12305c']];
    var g = svgOpen(480, 250, 'Gravité de l’hypothermie selon la température centrale');
    g += '<rect x="60" y="20" width="34" height="190" rx="17" class="f-card s-ink" stroke-width="1.5"/><circle cx="77" cy="222" r="22" fill="#12305c"/>';
    rows.forEach(function (r, k) {
      var y = 30 + k * 45;
      g += '<rect x="64" y="' + y + '" width="26" height="45" fill="' + r[3] + '"/>' + '<path d="M100 ' + y + ' h18" class="nf s-ink" stroke-width="1.4"/>' + txt(124, y + 5, r[0] + ' °C', 't-s t-b', 'start') +
        '<rect x="200" y="' + (y + 6) + '" width="250" height="34" rx="8" fill="' + r[3] + '" opacity=".9"/>' + txt(325, y + 28, r[2] + (k < 3 ? ' : ' + r[0] + ' > T° > ' + r[1] + ' °C' : ' : T° < 24 °C'), 't-w');
    });
    return g + txt(240, 245, 'Hypothermie : T° corporelle < 35 °C', 't-s t-b') + '</svg>';
  };

  /* Glycémie capillaire — Mémento SSUAP, PR Malaise hypoglycémique */
  S.glycemie = function () {
    var g = svgOpen(520, 170, 'Seuils de glycémie capillaire'), x0 = 30, k = 3.6; // 1 mg/dl = 3.6 px à partir de 20
    function X(v) { return x0 + (v - 20) * k; }
    g += '<rect x="' + X(20) + '" y="60" width="' + (X(50) - X(20)) + '" height="30" class="f-bad"/>' +
      '<rect x="' + X(50) + '" y="60" width="' + (X(60) - X(50)) + '" height="30" class="f-warn"/>' +
      '<rect x="' + X(60) + '" y="60" width="' + (X(80) - X(60)) + '" height="30" class="f-bg"/>' +
      '<rect x="' + X(80) + '" y="60" width="' + (X(120) - X(80)) + '" height="30" class="f-ok"/>' +
      '<rect x="' + X(120) + '" y="60" width="' + (X(150) - X(120)) + '" height="30" class="f-bg"/>';
    [50, 60, 80, 120].forEach(function (v) { g += '<path d="M' + X(v) + ' 52 V98" class="nf s-ink" stroke-width="1.5"/>' + txt(X(v), 114, v + ' mg/dl', 't-s t-b'); });
    g += txt((X(80) + X(120)) / 2, 80, 'Norme 80–120', 't-b') + txt((X(20) + X(50)) / 2, 80, 'hypo', 't-b') +
      txt(X(50), 40, 'Enfant 2–15 ans : hypoglycémie < 50', 't-s t-b') + txt(X(60) + 40, 140, 'Adulte : hypoglycémie < 60 mg/dl (0,6 g/l)', 't-s t-b') + '</svg>';
    return g;
  };

  /* Surveillance : fréquence de contrôle — PR Bilan de surveillance */
  S.surveillance = function () {
    var g = svgOpen(520, 160, 'Fréquence de contrôle des paramètres vitaux');
    g += '<path d="M30 60 H500" class="nf s-mut" stroke-width="2" marker-end="url(#arw)"/><path d="M30 120 H500" class="nf s-mut" stroke-width="2" marker-end="url(#arw)"/>';
    for (var t = 0; t <= 30; t += 5) g += '<circle cx="' + (30 + t * 15) + '" cy="60" r="7" class="f-acc"/>';
    [0, 10, 25].forEach(function (t) { g += '<circle cx="' + (30 + t * 15) + '" cy="120" r="7" class="f-ok s-ok"/>'; });
    g += txt(30, 40, 'Victime en détresse : au maximum toutes les 5 min', 't-b', 'start') + txt(30, 100, 'Autres cas : toutes les 10 à 15 min', 't-b', 'start') + txt(500, 150, 'temps (min)', 't-s', 'end');
    return g + '</svg>';
  };

  /* Arbre simplifié : immobilisation du rachis — PR Traumatisme du dos et du cou */
  S.rachis = function () {
    return flow({
      w: 560, h: 330, label: 'Décision d’immobilisation du rachis', nodes: [
        { id: 'a', x: 150, y: 10, w: 260, h: 44, t: 'Traumatisme avec suspicion\nde lésion du rachis', c: 'f-accs', s: 's-acc', tc: 't-b' },
        { id: 'b', x: 150, y: 80, w: 260, h: 44, t: 'Détresse vitale ? → la traiter d’abord\n(limiter les mouvements du rachis)', c: 'f-bad', s: 's-bad' },
        { id: 'c', x: 10, y: 160, w: 250, h: 74, t: 'Immobilisation complète si :\nexamen non fiable (A) · signes rachis (B)\nou moelle (C) · traumatisme à haut\nrisque (D) + > 65 ans ou antécédents (E)', c: 'f-warn', s: 's-warn' },
        { id: 'd', x: 300, y: 160, w: 250, h: 74, t: 'Plaie pénétrante isolée\ndu thorax, du cou ou de la tête :\nne pas immobiliser,\navis médical', c: 'f-info', s: 's-info' },
        { id: 'e', x: 10, y: 262, w: 250, h: 58, t: 'Brancard cuillère → MID (priorité)\nplan dur exceptionnel', c: 'f-ok', s: 's-ok', tc: 't-b' },
        { id: 'f', x: 300, y: 262, w: 250, h: 58, t: 'Victime agitée / déformation\npréexistante : respecter la position\n(MID, maintien tête si possible)', c: 'f-card' }
      ], edges: [['a', 'b'], ['b', 'c'], ['b', 'd'], ['c', 'e'], ['d', 'f']]
    });
  };

  /* Hémorragie externe — PR Hémorragie externe */
  S.hemorragie = function () {
    return flow({
      w: 560, h: 420, label: 'Logigramme hémorragie externe', nodes: [
        { id: 'a', x: 150, y: 8, w: 260, h: 40, t: 'Se protéger · allonger · observer la plaie', c: 'f-accs', s: 's-acc', tc: 't-b' },
        { id: 'b', x: 150, y: 70, w: 260, h: 40, t: 'Compression manuelle possible ?' },
        { id: 'c', x: 10, y: 140, w: 240, h: 40, t: 'Compression manuelle directe', c: 'f-ok', s: 's-ok' },
        { id: 'd', x: 310, y: 140, w: 240, h: 40, t: 'Poser un garrot', c: 'f-bad', s: 's-bad' },
        { id: 'e', x: 10, y: 206, w: 240, h: 40, t: 'Efficace ? oui → pansement compressif\n(non → zone garrotable ?)' },
        { id: 'f', x: 310, y: 206, w: 240, h: 40, t: 'Saignement stoppé ?\nnon → resserrer le garrot' },
        { id: 'g', x: 10, y: 272, w: 240, h: 54, t: 'Pansement compressif inefficace :\nreprendre la compression directe\n+ pansement compressif par-dessus' },
        { id: 'h', x: 310, y: 272, w: 240, h: 54, t: 'Toujours inefficace : 2e garrot entre le\n1er et la racine et/ou packing avec\npansement hémostatique' },
        { id: 'i', x: 60, y: 352, w: 440, h: 54, t: 'O₂ en inhalation quelle que soit la SpO₂ · poursuivre le bilan primaire\nsurveiller · lutter contre l’hypothermie', c: 'f-info', s: 's-info', tc: 't-b' }
      ], edges: [['a', 'b'], ['b', 'c', 'oui'], ['b', 'd', 'non'], ['c', 'e'], ['d', 'f'], ['e', 'g'], ['f', 'h'], ['g', 'i'], ['h', 'i']]
    });
  };

  /* Nouveau-né — PR Prise en charge du nouveau-né à la naissance (logigramme) */
  S.nouveaune = function () {
    return flow({
      w: 560, h: 410, label: 'Logigramme du nouveau-né', nodes: [
        { id: 'a', x: 130, y: 8, w: 300, h: 40, t: 'Bonne santé ? (cri + tonus présents)', c: 'f-accs', s: 's-acc', tc: 't-b' },
        { id: 'b', x: 10, y: 80, w: 240, h: 56, t: 'OUI : clamper (≥ 1 min de vie)\npuis couper · protéger du froid\n(séchage, bonnet, couverture)', c: 'f-ok', s: 's-ok' },
        { id: 'c', x: 310, y: 80, w: 240, h: 56, t: 'NON : clamper & couper sans attendre\nLVA (tête neutre) + aspiration\nprudente bouche puis narines', c: 'f-bad', s: 's-bad' },
        { id: 'd', x: 310, y: 166, w: 240, h: 40, t: 'État inchangé : 40 insufflations\nà l’air en 1 min' },
        { id: 'e', x: 310, y: 236, w: 240, h: 40, t: 'Évaluer la fréquence cardiaque (FC)', tc: 't-b' },
        { id: 'f', x: 10, y: 320, w: 160, h: 56, t: 'FC < 60/min\nRCP 3 / 1\n(+ O₂, sans DAE)', c: 'f-bad', s: 's-bad' },
        { id: 'g', x: 200, y: 320, w: 160, h: 56, t: '60 < FC < 100\ninsufflations\nà l’air', c: 'f-warn', s: 's-warn' },
        { id: 'h', x: 390, y: 320, w: 160, h: 56, t: 'Au-delà :\nsurveillance\nétroite', c: 'f-ok', s: 's-ok' }
      ], edges: [['a', 'b'], ['a', 'c'], ['c', 'd'], ['d', 'e'], ['e', 'f'], ['e', 'g'], ['e', 'h']],
      extra: txt(280, 402, 'Réévaluer toutes les minutes · thorax immobile après 5 insufflations → vérifier LVA et étanchéité du masque', 't-s')
    });
  };

  /* OVA — PR OVA complète ou partielle */
  S.ova = function () {
    return flow({
      w: 560, h: 330, label: 'Logigramme obstruction des voies aériennes', nodes: [
        { id: 'a', x: 150, y: 8, w: 260, h: 40, t: 'Obstruction des voies aériennes', c: 'f-accs', s: 's-acc', tc: 't-b' },
        { id: 'b', x: 10, y: 80, w: 250, h: 56, t: 'COMPLÈTE\n1 à 5 claques dans le dos\n(ou compressions thoraciques)', c: 'f-bad', s: 's-bad' },
        { id: 'c', x: 300, y: 80, w: 250, h: 72, t: 'PARTIELLE\nNe jamais désobstruer · position\npréférée · encourager à tousser\nO₂ · poursuivre le bilan', c: 'f-warn', s: 's-warn' },
        { id: 'd', x: 10, y: 168, w: 250, h: 50, t: 'Inefficace → 1 à 5 compressions\nabdominales (adulte, enfant)' },
        { id: 'e', x: 300, y: 180, w: 250, h: 56, t: 'Si toux inefficace + fatigue,\nobstruction complète ou arrêt\nrespiratoire → désobstruction' },
        { id: 'f', x: 60, y: 262, w: 440, h: 48, t: 'Perte de connaissance → procédure RCP\n(les compressions thoraciques chassent le corps étranger : « effet piston »)', c: 'f-info', s: 's-info', tc: 't-b' }
      ], edges: [['a', 'b'], ['a', 'c'], ['b', 'd'], ['c', 'e'], ['d', 'f'], ['e', 'f']]
    });
  };

  /* Inconscient sur le dos — PR Inconscient sur le dos */
  S.inconscient = function () {
    return flow({
      w: 560, h: 300, label: 'Victime inconsciente sur le dos', nodes: [
        { id: 'a', x: 150, y: 8, w: 260, h: 40, t: 'Suspicion de traumatisme du rachis ?', c: 'f-accs', s: 's-acc', tc: 't-b' },
        { id: 'b', x: 10, y: 80, w: 250, h: 50, t: 'OUI : stabilisation\nLVA par élévation du menton', c: 'f-warn', s: 's-warn' },
        { id: 'c', x: 300, y: 80, w: 250, h: 50, t: 'NON : LVA par bascule\nde la tête en arrière', c: 'f-info', s: 's-info' },
        { id: 'd', x: 10, y: 160, w: 250, h: 68, t: 'Respire : maintenir LVA, aspirateur\nprêt, restriction du rachis,\nlaisser sur le dos, couvrir', c: 'f-ok', s: 's-ok' },
        { id: 'e', x: 300, y: 160, w: 250, h: 50, t: 'Respire : PLS, couvrir', c: 'f-ok', s: 's-ok' },
        { id: 'f', x: 150, y: 252, w: 260, h: 40, t: 'Ne respire pas : procédure RCP', c: 'f-bad', s: 's-bad', tc: 't-b' }
      ], edges: [['a', 'b'], ['a', 'c'], ['b', 'd'], ['c', 'e'], ['d', 'f'], ['e', 'f']]
    });
  };

  /* Relevage en pont — FT Relevage à 3 / 4 secouristes (vue de dessus) */
  S.pont = function (a) {
    var four = a.n === 4;
    var g = svgOpen(500, 200, 'Position des secouristes pour le relevage en pont');
    g += '<rect x="90" y="120" width="300" height="50" rx="8" class="f-card s-line" stroke-width="1.5"/>' + txt(240, 150, four ? 'brancard / MID (le long de la victime)' : 'brancard (le long de la victime)', 't-s');
    g += '<path d="M120 70 H360" class="nf s-ink" stroke-width="22" stroke-linecap="round" opacity=".18"/><circle cx="110" cy="70" r="16" class="f-skin s-ink" stroke-width="1.2"/>' + txt(110, 40, 'tête', 't-s');
    function p(x, y, l, chef) { return '<circle cx="' + x + '" cy="' + y + '" r="14" class="' + (chef ? 'f-acc' : 'f-info') + ' s-ink" stroke-width="1"/>' + txt(x, y + 5, l, chef ? 't-w' : 't-b'); }
    if (four) g += p(70, 70, '1', 1) + p(190, 70, '4') + p(260, 70, '3') + p(360, 70, '2') + txt(70, 102, 'tête', 't-s') + txt(190, 102, 'épaules', 't-s') + txt(260, 102, 'bassin', 't-s') + txt(360, 102, 'chevilles', 't-s');
    else g += p(84, 70, '1', 1) + p(240, 70, '3') + p(380, 70, '2') + txt(84, 102, 'nuque/omoplates', 't-s') + txt(240, 102, 'taille', 't-s') + txt(380, 102, 'chevilles', 't-s');
    g += txt(250, 192, four ? 'Pont néerlandais à 4 : S1 à la tête (prise latéro-latérale) commande ; 2, 3, 4 en pont' : 'Pont néerlandais à 3 : S1 à la tête commande ; 3 enjambe et pose le pied sur la hampe extérieure', 't-s t-b');
    return g + '</svg>';
  };

  /* Position semi-assise / positions d’attente — schéma générique */
  S.positions = function () {
    var g = svgOpen(560, 170, 'Positions d’attente selon la détresse');
    var items = [['Assise / demi-assise', 'détresse respiratoire,\ntrauma thorax (gêne resp.)'], ['Allongée horizontale', 'détresse circulatoire,\nAVC (à plat)'], ['PLS', 'inconsciente qui respire\n(non traumatisée)'], ['Sur le côté', 'femme enceinte avant\naccouchement, trauma face']];
    items.forEach(function (it, k) {
      var x = 10 + k * 138;
      g += '<rect x="' + x + '" y="10" width="128" height="150" rx="12" class="f-accs s-acc" stroke-width="1.4"/>' + txt(x + 64, 36, it[0], 't-b');
      if (k === 0) g += '<path d="M' + (x + 30) + ' 110 L' + (x + 60) + ' 70 M' + (x + 60) + ' 110 H' + (x + 104) + '" class="nf s-ink" stroke-width="7" stroke-linecap="round"/><circle cx="' + (x + 64) + '" cy="60" r="9" class="f-skin s-ink"/>';
      if (k === 1) g += '<path d="M' + (x + 30) + ' 100 H' + (x + 104) + '" class="nf s-ink" stroke-width="7" stroke-linecap="round"/><circle cx="' + (x + 22) + '" cy="98" r="9" class="f-skin s-ink"/>';
      if (k === 2) g += '<path d="M' + (x + 30) + ' 104 H' + (x + 80) + ' L' + (x + 96) + ' 90 M' + (x + 80) + ' 104 L' + (x + 104) + ' 106" class="nf s-ink" stroke-width="7" stroke-linecap="round"/><circle cx="' + (x + 22) + '" cy="100" r="9" class="f-skin s-ink"/>';
      if (k === 3) g += '<path d="M' + (x + 30) + ' 102 H' + (x + 104) + '" class="nf s-ink" stroke-width="9" stroke-linecap="round"/><circle cx="' + (x + 22) + '" cy="98" r="9" class="f-skin s-ink"/>';
      g += txt(x + 64, 136, it[1], 't-s');
    });
    return g + '</svg>';
  };

  /* Technique des deux seaux — FT Nettoyage et désinfection */
  S.seaux = function () {
    var g = svgOpen(520, 190, 'Technique des deux seaux');
    g += '<path d="M60 70 h90 l-10 90 h-70z" fill="#d62839" opacity=".85"/><path d="M360 70 h90 l-10 90 h-70z" fill="#1b5fa8" opacity=".85"/>' +
      txt(105, 120, 'LAVAGE', 't-w') + txt(405, 120, 'RINÇAGE', 't-w') + txt(105, 60, 'détergent-désinfectant\n(dilution du fournisseur)', 't-s') + txt(405, 60, 'eau propre du réseau', 't-s') +
      '<path d="M160 100 C230 60 290 60 350 100" class="nf s-acc" stroke-width="2.5" marker-end="url(#arwA)"/>' + txt(255, 58, 'essorer la frange', 't-s t-b') +
      '<path d="M350 140 C290 180 230 180 160 140" class="nf s-acc" stroke-width="2.5" marker-end="url(#arwA)"/>' + txt(255, 184, 'tremper à nouveau · sol en « S », du fond vers la sortie', 't-s t-b');
    return g + '</svg>';
  };

  /* Écharpes — FT Mise en place d’une écharpe */
  S.echarpe = function () {
    var g = svgOpen(540, 170, 'Choisir l’écharpe selon la lésion');
    [['Main, poignet,\navant-bras', 'Écharpe simple', 'main légèrement\nau-dessus du coude'], ['Bras', 'Écharpe simple\n+ contre-écharpe', 'bras plaqué\ncontre le thorax'], ['Épaule (clavicule,\nomoplate)', 'Écharpe oblique', 'doigts visibles · bras écarté :\nrembourrage, ne jamais\nrapprocher le coude']].forEach(function (r, k) {
      var x = 10 + k * 178;
      g += '<rect x="' + x + '" y="10" width="166" height="150" rx="12" class="f-accs s-acc" stroke-width="1.4"/>' + txt(x + 83, 34, r[0], 't-b') + '<path d="M' + (x + 30) + ' 70 L' + (x + 136) + ' 70 L' + (x + 83) + ' 108 Z" class="f-acc" opacity=".6"/>' + txt(x + 83, 94, r[1], 't-w') + txt(x + 83, 128, r[2], 't-s');
    });
    return g + '</svg>';
  };
})();
