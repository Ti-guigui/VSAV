/* PARTIE 3 — Relevage, brancardage et aide au déplacement (FT MAJ 05/2024) */
var S31 = 'Séquence 3.1 — Relevage', S32 = 'Séquence 3.2 — Brancardage et aide au déplacement';

VSAV.chap({
  id: 'portage', part: 'p3', seq: S31, title: 'Préparer un dispositif de portage', short: 'Dispositif de portage', motif: 'stretcher',
  sources: ['FT - Préparation d’un dispositif de portage (MAJ 05/2024)'],
  summary: 'Drap, couverture, couverture de survie, sangles : préparer avant de relever.',
  why: '<b>Pourquoi préparer avant ?</b> Une victime posée sur un brancard non préparé devra être remobilisée pour l’envelopper. Préparé à l’avance, le dispositif permet d’<b>envelopper totalement</b> la victime et de la <b>maintenir</b> par des sangles qui l’empêchent de chuter.',
  sections: [
    { id: 'materiel', t: 'Le matériel', ic: 'list', src: 'FT - Préparation d’un dispositif de portage',
      html: '<ul class="check"><li><b>Drap</b> (toile ou intissé, de préférence à usage unique ; stérile pour les brûlures étendues).</li><li><b>Couverture</b> contre le froid (bactériostatique, lavable, ou drap intercalé).</li><li><b>Couverture de survie</b> : film métallisé argenté / doré, <b>1,80 × 2,20 m</b>, limite la perte de chaleur et protège du vent ; peut être stérile.</li><li><b>Sangles de fixation</b> (sangles-araignées avec les plans durs).</li></ul>' },
    { id: 'comment', t: 'Comment faire', ic: 'stretcher', src: 'FT - Préparation d’un dispositif de portage',
      steps: ['Monter le brancard si nécessaire.', 'Installer un drap ou une couverture de survie sur le brancard avant d’y déposer la victime.', 'Installer la victime avec une technique adaptée à son état, puis l’envelopper.', 'Recouvrir d’une couverture.', 'Sangler la victime : les sangles passent par-dessus la couverture.'], stepsTitle: 'Pour un brancard',
      after: '<p><b>Chaise de transport :</b> le drap ne doit pas traîner au sol, et ni drap ni couverture ne doivent rendre les sangles inaccessibles.</p>' }
  ],
  key: ['Drap / couverture de survie posés avant la victime.', 'Couverture par-dessus, puis sangles par-dessus la couverture.', 'Couverture de survie 1,80 × 2,20 m.', 'Chaise : drap ne traînant pas au sol, sangles accessibles.'],
  traps: ['Sangler sous la couverture : l’ensemble n’est pas maintenu.'],
  quiz: [
    { q: 'Les sangles de maintien passent :', c: ['Par-dessus la couverture', 'Sous le drap', 'Directement sur la peau', 'Sous la couverture'], e: 'Afin que l’ensemble soit parfaitement maintenu.', s: 'comment' },
    { q: 'Dimensions d’une couverture de survie :', c: ['1,80 × 2,20 m', '1 × 1 m', '2,50 × 3 m', '0,80 × 1,20 m'], e: 'FT Préparation d’un dispositif de portage.', s: 'materiel' }
  ]
});

VSAV.chap({
  id: 'relevage-pont', part: 'p3', seq: S31, title: 'Relevage à 3 et à 4 secouristes (techniques du pont)', short: 'Relevage en pont', motif: 'team',
  sources: ['FT - Relevage à 3 secouristes (MAJ 05/2024)', 'FT - Relevage à 4 secouristes (MAJ 05/2024)'],
  summary: 'Pont néerlandais et pont simple à 3, pont néerlandais et pont amélioré à 4.',
  why: '<b>Pourquoi passer à 4 ?</b> À 4 secouristes, un équipier se consacre au <b>maintien de la tête</b> (prise latéro-latérale) : c’est la technique quand la victime est lourde ou suspecte d’un traumatisme du rachis si le brancard cuillère est inutilisable. Le « pont néerlandais » déplace la victime latéralement vers le brancard posé à côté ; le « pont simple / amélioré » la soulève pour qu’un aide glisse le brancard dessous.',
  sections: [
    { id: 'trois', t: 'Relevage à 3 secouristes', ic: 'team', src: 'FT - Relevage à 3 secouristes',
      html: '<p>Si la corpulence le permet ; une 4e personne peut glisser le brancard. S1 au-dessus de la tête (commande), S2 au-dessus des pieds, S3 entre les deux. Ramener d’abord les avant-bras de la victime sur son tronc.</p>',
      figs: [{ svg: 'pont', a: { n: 3 }, cap: 'Pont néerlandais à 3 (vue de dessus)', txt: '<p>S1 : une main sous la nuque, l’autre sous les omoplates. S2 : les chevilles. S3 : sous la taille / la ceinture si solide.</p>', src: 'FT - Relevage à 3 secouristes' }],
      steps: ['Brancard le long du corps, roulettes bloquées.', 'S1 et S2 se font face (tête et pieds) et bloquent les poignées avec le pied côté brancard.', 'S3 s’appuie sur l’épaule de S1, enjambe la victime et pose le pied au milieu de la hampe extérieure, sous le drap.', 'Prises : S1 nuque + omoplates, S2 chevilles, S3 taille / ceinture.', 'S1 : « Êtes-vous prêts ? » — « Prêts ! » — « Attention pour lever… Levez ! » : se relever dos plat, déplacer latéralement jusqu’au brancard.', 'S1 ordonne de poser ; poser doucement ; se dégager successivement sans heurter la victime.'], stepsTitle: 'Pont néerlandais à 3',
      after: '<p><b>Pont simple</b> (3 porteurs + 1 aide) : brancard dans l’axe aux pieds ; les 3 en pont, jambes écartées ; même prise ; « Levez ! » puis <span class="cmd">« Envoyez le brancard ! »</span> : l’aide glisse le brancard entre les jambes jusqu’à la tête, puis <span class="cmd">« Posez ! »</span>.</p>' },
    { id: 'quatre', t: 'Relevage à 4 secouristes', ic: 'team', src: 'FT - Relevage à 4 secouristes',
      html: '<p>Victime lourde, ou suspecte d’un traumatisme du rachis quand le brancard cuillère ne peut être utilisé. S1 à la tête, <b>prise latéro-latérale</b>, commande. Un collier posé pour l’extraction reste en place jusqu’à la fin du relevage et de l’immobilisation.</p>',
      figs: [{ svg: 'pont', a: { n: 4 }, cap: 'Pont néerlandais à 4 (vue de dessus)', txt: '<p>S1 tête (genou au sol côté brancard, entre les hampes, contre la poignée) ; S2 chevilles ; S3 bassin ; S4 épaules.</p>', src: 'FT - Relevage à 4 secouristes' }],
      steps: ['Brancard (MID, plan dur si besoin) le long du corps, roulettes bloquées ; stabilisation du rachis si suspicion.', 'S2, 3 ou 4 ramènent les bras de la victime sur son tronc.', 'S2 aux pieds bloque les poignées avec son pied ; S3 (bassin) et S4 (épaules) enjambent la victime en s’appuyant l’un sur l’autre, pied sur la hampe extérieure sous le drap.', 'Prises : S4 sous les épaules, S3 sous la taille / ceinture, S2 les chevilles.', 'S1 : « Êtes-vous prêts ? » — « Prêts ! » — « Attention pour lever… Levez ! » : déplacement latéral jusqu’au brancard, S1 accompagne.', 'Poser doucement ; se dégager dans l’ordre 3 et 4, puis 2 ; S1 seulement si la stabilisation du rachis est assurée.'], stepsTitle: 'Pont néerlandais à 4',
      after: '<p><b>Pont amélioré</b> : S1 à la tête en trépied (ou en pont si le brancard passe par la tête) ; S2, 3, 4 en pont aux épaules, au bassin et aux jambes (épaules et bassin se font face, jambes face à la tête) ; « Levez ! », « Envoyez le brancard ! », arrêt sous la tête, « Posez ! ». Dégagement 3 et 4, puis 2 ; l’équipier de tête ne lâche qu’après restriction des mouvements du rachis (MID, blocs de tête) si suspicion.</p>' }
  ],
  key: ['Le secouriste de tête commande toujours.', 'À 3 : S1 nuque/omoplates, S3 taille, S2 chevilles.', 'À 4 : S1 prise latéro-latérale ; 4 épaules, 3 bassin, 2 chevilles.', 'Néerlandais = déplacement latéral ; simple / amélioré = brancard glissé dessous.', 'Dos plat ; se relever avec les cuisses.', 'Collier d’extraction gardé jusqu’à l’immobilisation.'],
  traps: ['Lâcher la tête avant que la restriction du rachis soit assurée.', 'Oublier de bloquer les roulettes du brancard.'],
  quiz: [
    { q: 'Qui commande un relevage en pont ?', c: ['Le secouriste placé à la tête', 'Celui aux pieds', 'Le plus ancien', 'L’aide qui pousse le brancard'], e: 'FT Relevage à 3 / à 4.', s: 'trois' },
    { q: 'Ordre « Envoyez le brancard ! » : technique concernée ?', c: ['Pont simple / pont amélioré', 'Pont néerlandais', 'Alèse portoir', 'Brancard cuillère'], e: 'L’aide glisse le brancard entre les jambes des secouristes.', s: 'trois' },
    { q: 'Relevage à 4 : prise de S1 sur la tête ?', c: ['Latéro-latérale', 'Occipito-frontale', 'Main sous le menton', 'Aucune'], e: 'Stabilisation du rachis par prise latéro-latérale.', s: 'quatre' },
    { q: 'Ordre de dégagement après pose (pont néerlandais à 4) :', c: ['3 et 4, puis 2 ; S1 seulement si le rachis est stabilisé', 'S1 d’abord', 'Tous en même temps', '2 puis 3 puis 4 puis 1'], e: 'FT Relevage à 4.', s: 'quatre' }
  ]
});

VSAV.chap({
  id: 'cuillere', part: 'p3', seq: S31, title: 'Utilisation du brancard cuillère', short: 'Brancard cuillère', motif: 'stretcher', accent: '#16a34a',
  sources: ['FT - Utilisation du brancard cuillère (MAJ 05/2024)'],
  summary: 'Le moyen de relevage qui mobilise le moins la victime : référence pour le traumatisé du rachis.',
  why: '<b>Pourquoi le privilégier ?</b> Les deux lames se glissent latéralement sous la victime <b>sans la soulever</b> : de tous les moyens de relevage, c’est celui qui, bien utilisé, mobilise le moins et risque le moins d’aggraver une lésion du rachis. C’est le moyen de <b>première intention</b> pour relever un traumatisé du rachis allongé sur le dos et le poser dans le MID.',
  sections: [
    { id: 'quand', t: 'Indications', ic: 'list', src: 'FT - Utilisation du brancard cuillère',
      html: '<ul class="check"><li>Relever une victime allongée et l’installer sur un dispositif de portage ; 1re intention pour le traumatisé du rachis → MID.</li><li>Zone surbaissée où le pont est impossible (sous un train, un véhicule…).</li><li>Victime non traumatisée souillée (matériel inoxydable, nettoyable).</li><li>Transfert d’un dispositif de portage à un autre.</li></ul><p>Matériel : brancard cuillère + 2 blocs de tête. 3 intervenants : S1 à genou à la tête (prise latéro-latérale, commande), S2 et S3 de chaque côté.</p>' },
    { id: 'comment', t: 'Technique', ic: 'stretcher', src: 'FT - Utilisation du brancard cuillère',
      steps: ['Déplier le brancard, le placer le long de la victime, régler la longueur et verrouiller.', 'Vérifier la rigidité en tirant sur la partie mobile côté jambes, puis désolidariser les deux parties.', 'Assurer la stabilisation ou la restriction du rachis cervical si suspicion.', 'S2 et S3 placent la face palmaire des mains de la victime sur ses cuisses (pour ne pas les pincer).', 'S2 et S3 glissent chacun une cuillère, à tour de rôle ; pendant que l’un glisse, l’autre tire légèrement la victime vers lui (épaule et hanche).', 'Vérifier que les cuillères sont face à face ; les réunir avec les encliquetages : d’abord à la tête, puis aux pieds.', 'Vérifier la fermeture en tirant latéralement sur les deux parties.', 'Mettre en place les blocs de tête (le maintien de tête peut alors être relâché) ; arrimer la victime si brancardage.'] }
  ],
  key: ['1re intention : traumatisé du rachis sur le dos → MID.', 'Mains de la victime sur ses cuisses.', 'Glisser à tour de rôle en tirant légèrement la victime.', 'Fermer à la tête d’abord, puis aux pieds ; vérifier en tirant latéralement.', 'Blocs de tête → le maintien manuel peut être relâché.'],
  traps: ['Pincer la victime (fesses, mains) à la fermeture.', 'Brancarder sans vérifier le verrouillage.'],
  quiz: [
    { q: 'Ordre de fermeture des encliquetages :', c: ['Tête puis pieds', 'Pieds puis tête', 'Simultanément', 'Peu importe'], e: 'FT Brancard cuillère.', s: 'comment' },
    { q: 'Pourquoi placer les mains de la victime sur ses cuisses ?', c: ['Pour ne pas les pincer à la fermeture', 'Pour la réchauffer', 'Pour prendre le pouls', 'Par confort uniquement'], e: 'Éviter de les pincer pendant la fermeture du brancard.', s: 'comment' },
    { q: 'Moyen de 1re intention pour relever un traumatisé du rachis allongé sur le dos :', c: ['Le brancard cuillère', 'L’alèse portoir', 'La chaise de transport', 'L’aide à la marche'], e: 'Pour l’installer ensuite sur le MID.', s: 'quand' }
  ]
});

VSAV.chap({
  id: 'relevage-particulier', part: 'p3', seq: S31, title: 'Relevage d’une victime en position particulière', short: 'Position particulière', motif: 'team', accent: '#15803d',
  sources: ['FT - Relevage d’une victime en position particulière (MAJ 05/2024)'],
  summary: 'Relever sans perdre la position d’attente : PLS, cuisses fléchies, demi-assise, assise (chaise).',
  why: '<b>Pourquoi conserver la position ?</b> La position d’attente a été choisie pour traiter une détresse (PLS pour les voies aériennes, demi-assise pour la respiration…). La perdre au relevage, c’est risquer d’aggraver l’état de la victime.',
  sections: [
    { id: 'positions', t: 'Selon la position', ic: 'list', src: 'FT - Relevage d’une victime en position particulière',
      html: '<div class="tw"><table><tr><th>Position</th><th>Technique</th></tr><tr><td>PLS</td><td>À 4 secouristes ; le secouriste de tête maintient la tête (latéro-latérale) ; celui aux pieds ramène le membre inférieur fléchi sur l’autre et saisit les chevilles ensemble ; position maintenue si possible par un MID</td></tr><tr><td>À plat dos, cuisses fléchies</td><td>2 ou 3 secouristes soulèvent la moitié supérieure en pont ; le secouriste aux pieds saisit les genoux</td></tr><tr><td>Demi-assise</td><td>Le secouriste de tête glisse ses avant-bras sous les aisselles (peut saisir les poignets opposés ou la ceinture) ; matériel de calage transféré sur le brancard après la dépose</td></tr></table></div>' },
    { id: 'chaise', t: 'Victime assise → chaise de transport', ic: 'chair', src: 'FT - Relevage d’une victime en position particulière',
      html: '<p>Possible si la victime tient assise et que cette position n’est pas contre-indiquée. Facilite escaliers et ascenseurs. 3 intervenants.</p>',
      steps: ['S1 : place la chaise préparée sur le côté de la victime.', 'S2 : croise les bras de la victime sur sa poitrine, se place derrière, glisse ses avant-bras sous les aisselles et saisit les poignets opposés.', 'S3 : face à la victime, légèrement accroupi, un pied décalé vers la chaise, glisse ses avant-bras sous les genoux.', 'S2 : « Êtes-vous prêts ? » — « Prêts ! » — « Attention pour lever… Levez ! »', 'S2 et S3 se relèvent dos plat, déplacent latéralement et posent doucement sur la chaise.', 'S1 aide à la réception, enveloppe dans le drap, couvre, arrime avant le transport.'] }
  ],
  key: ['La position d’attente est conservée pendant le relevage.', 'PLS : 4 secouristes, chevilles saisies ensemble, MID si possible.', 'Chaise : c’est S2 (derrière) qui commande.'],
  traps: ['Remettre à plat une victime en PLS pour la relever.'],
  quiz: [
    { q: 'Relevage d’une victime en PLS : combien de secouristes ?', c: ['4', '2', '3', '1'], e: 'FT Relevage en position particulière.', s: 'positions' },
    { q: 'Transfert d’une victime assise sur une chaise de transport : qui commande ?', c: ['Le secouriste 2, placé derrière la victime', 'Le secouriste 1 qui tient la chaise', 'Le secouriste 3 face à la victime', 'La victime'], e: 'S2 : « Êtes-vous prêts ? »…', s: 'chaise' }
  ]
});

VSAV.chap({
  id: 'alese', part: 'p3', seq: S31, title: 'Transfert d’une victime à l’aide d’une alèse portoir', short: 'Alèse portoir', motif: 'stretcher', accent: '#22c55e',
  sources: ['FT - Transfert d’une victime à l’aide d’une alèse portoir (MAJ 05/2024)'],
  summary: 'Roulement au sol pour glisser l’alèse ; réservée aux victimes sans atteinte grave.',
  why: '<b>Pourquoi l’alèse ?</b> Elle facilite les changements de support (brancard → lit) en limitant les contraintes pour le dos des secouristes. Mais ce n’est <b>pas un plan dur</b> et la technique repose sur un roulement : elle est <b>interdite</b> pour une atteinte traumatique grave (rachis, membres non immobilisés).',
  sections: [
    { id: 'comment', t: 'Technique (3 intervenants minimum)', ic: 'list', src: 'FT - Transfert d’une victime à l’aide d’une alèse portoir',
      html: '<p>Indications : changement prévisible de brancard (alèse posée sur le brancard d’avance), transfert d’un malade ou d’un blessé sans atteinte grave, transport dans un endroit exigu.</p>',
      steps: ['Bras de la victime le long du corps, paumes sur les cuisses.', 'S1 à la tête : prise latéro-latérale ; il commande.', 'S2 et S3 placent l’alèse roulée ou repliée le long de la victime, centrée, puis se placent côté retournement (tronc et membres inférieurs) et saisissent épaule, bassin, membres inférieurs alignés.', 'S1 : « Êtes-vous prêts ? » — « Prêts ! » — « Attention pour tourner… Tournez ! » : rotation lente, d’un bloc, tête accompagnée dans l’axe.', 'S1 : « Glissez le portoir ! » : glisser l’alèse le plus loin possible sous le dos, centrée.', 'S1 : « Posez ! » ; S2 et S3 passent de l’autre côté.', 'Nouveau « Tournez ! » : dérouler l’alèse, reposer la victime.'] }
  ],
  key: ['Roulement au sol à 3, ordres de S1.', 'Alèse centrée sur la hauteur de la victime.', 'Interdite si traumatisme du rachis ou membre non immobilisé.'],
  traps: ['Utiliser l’alèse pour relever un traumatisé grave.'],
  quiz: [
    { q: 'Contre-indication de l’alèse portoir :', c: ['Atteinte traumatique grave (rachis, membre non immobilisé)', 'Victime âgée', 'Victime malade sans traumatisme', 'Passage d’un brancard à un lit'], e: 'FT Alèse portoir : risques.', s: 'comment' },
    { q: 'Ordre donné pour glisser l’alèse sous la victime :', c: ['« Glissez le portoir ! »', '« Envoyez le brancard ! »', '« Basculez ! »', '« Soulagez ! »'], e: 'FT Alèse portoir.', s: 'comment' }
  ]
});

VSAV.chap({
  id: 'brancardage', part: 'p3', seq: S32, title: 'Brancardage à 3 et à 4 secouristes', short: 'Brancardage', motif: 'stretcher', accent: '#15803d',
  sources: ['FT - Brancardage à 3 secouristes (MAJ 05/2024)', 'FT - Brancardage à 4 secouristes (MAJ 05/2024)'],
  summary: 'Terrain plat, obstacle, passage étroit, pente et escalier.',
  why: '<b>Pourquoi des commandements si codifiés ?</b> La synchronisation évite la chute du brancard et de la victime ; les secouristes à l’avant annoncent les obstacles ; le chef aux pieds voit la victime et l’équipe. À 4, le brancardage convient aux trajets longs ou difficiles et aux victimes corpulentes.',
  sections: [
    { id: 'plat', t: 'Terrain plat', ic: 'stretcher', src: 'FT - Brancardage à 3 / à 4 secouristes',
      html: '<p>À 3 : S1 aux pieds entre les hampes (commande), S2 et S3 à la tête. À 4 : S1 et S4 aux pieds, S2 et S3 à la tête. Victime installée et arrimée, <b>tête en avant</b> dans le sens de la marche.</p>',
      figs: [{ anim: 'brancard', cap: 'Animation : place des porteurs', txt: '<p>À 3 en montée : 1 à l’avant, 2 à l’arrière ; en descente : 2 à l’avant, 1 à l’arrière, pieds en avant de préférence.</p>', src: 'FT - Brancardage à 3 / à 4' }],
      steps: ['S1 : « Pour le brancardage… En position ! » : tous accroupis face à leur poignée, cuisses écartées, dos plat.', 'S1 : « Êtes-vous prêts ? » — « Prêts ! » — « Attention pour lever… Levez ! » : se relever à la force des cuisses.', 'S1 : « Attention pour avancer… » : quart de tour dans le sens de la marche, une main sur la poignée.', 'S1 : « Avancez ! » ; ceux de l’avant annoncent les obstacles.', 'S1 : « Attention pour arrêter… Arrêtez ! » puis « Attention pour poser… » : quart de tour face au brancard.', 'S1 : « Posez ! » : brancard descendu horizontalement, posé doucement.'] },
    { id: 'obstacles', t: 'Obstacle, passage étroit, pente', ic: 'list', src: 'FT - Brancardage à 3 / à 4 secouristes',
      html: '<ul class="check"><li><b>Obstacle (à 3)</b> : brancard perpendiculaire contre l’obstacle ; « Face au brancard ! » ; l’avant est posé sur l’obstacle ; S2 et S3 passent de l’autre côté et reprennent les poignées avant ; « Envoyez ! » jusqu’à ce que S1 touche l’obstacle ; S1 passe et se place entre les poignées avant ; S2 et S3 coulissent jusqu’à l’obstacle, hampe à deux mains ; « Envoyez ! ». À 4, S4 passe entre les poignées et soutient le brancard pendant que S1 franchit et réceptionne.</li><li><b>Passage étroit</b> : arrêt, chacun passe à l’intérieur des hampes sans lâcher, dos à dos ; progression en pas chassés ; reprise des places ensuite.</li><li><b>Pente / escalier</b> : vérifier l’arrimage ; ceux qui sont vers le bas relèvent les poignées (ceinture, poitrine, épaule) pour garder l’horizontale ; à 3 : montée 1 avant / 2 arrière, descente 2 avant / 1 arrière ; en descente, de préférence <b>pieds en avant</b>.</li></ul>' }
  ],
  key: ['Chef (S1) aux pieds ; victime tête en avant.', 'Ordres en deux temps, audibles, clairs.', 'Brancard horizontal, sans secousse ni balancement.', 'Pente : ceux du bas relèvent les poignées ; descente pieds en avant.', 'À 3 : montée 1 avant / 2 arrière ; descente 2 avant / 1 arrière.'],
  traps: ['Descendre un escalier tête en avant.', 'Lâcher la hampe en passage étroit.'],
  quiz: [
    { q: 'Brancardage à 3 en descente :', c: ['Deux secouristes vers l’avant, un vers l’arrière, pieds en avant de préférence', 'Un à l’avant, deux à l’arrière, tête en avant', 'Trois à l’arrière', 'Peu importe'], e: 'FT Brancardage à 3.', s: 'obstacles' },
    { q: 'Où se place le secouriste qui commande un brancardage à 3 ?', c: ['Aux pieds de la victime, entre les hampes', 'À la tête', 'Sur le côté', 'Devant le brancard'], e: 'FT Brancardage à 3.', s: 'plat' },
    { q: 'Passage étroit : comment progresser ?', c: ['À l’intérieur des hampes, dos à dos, en pas chassés', 'En penchant le brancard', 'En soulevant le brancard au-dessus des têtes', 'En lâchant une hampe'], e: 'FT Brancardage.', s: 'obstacles' }
  ]
});

VSAV.chap({
  id: 'chaise', part: 'p3', seq: S32, title: 'Déplacement à l’aide d’une chaise de transport', short: 'Chaise de transport', motif: 'chair', accent: '#16a34a',
  sources: ['FT - Déplacement d’une victime à l’aide d’une chaise de transport (MAJ 05/2024)'],
  summary: 'Pour les étages, escaliers et ascenseurs étroits, si la victime supporte la position assise.',
  why: '<b>Pourquoi la chaise ?</b> Elle répond à une vraie difficulté de brancardage en étages, escaliers ou ascenseurs étroits — à condition que la victime <b>ne présente ni détresse ni atteinte grave</b> et <b>supporte la position assise</b>.',
  sections: [
    { id: 'comment', t: 'Technique', ic: 'chair', src: 'FT - Déplacement à l’aide d’une chaise de transport',
      steps: ['Victime installée et arrimée ; verrouillage de la chaise et arrimage vérifiés.', 'Demander à la victime de garder les mains croisées sur la poitrine et de ne pas s’agripper.', 'Saisir les poignées, prévenir la victime et basculer légèrement la chaise en arrière.', 'Faire rouler la chaise en surveillant les obstacles.', 'Obstacle ou escalier : un 2e secouriste saisit les poignées aux pieds pour aider à soulever.', 'Un 3e secouriste précède : ouvre les portes, dégage le passage, sécurise le sauveteur aux pieds en le tenant par la ceinture lors de la descente.', 'Dès que possible, placer la chaise à côté du brancard pour le transfert.'] }
  ],
  key: ['Indication : pas de détresse ni d’atteinte grave, position assise supportée.', 'Mains croisées sur la poitrine, ne pas s’agripper.', 'Vérifier verrouillage et arrimage avant toute manœuvre.', '3e secouriste : ouvre la voie et tient le porteur aux pieds par la ceinture en descente.'],
  traps: ['Laisser la victime s’agripper à la rampe.'],
  quiz: [
    { q: 'Que demande-t-on à la victime installée sur la chaise ?', c: ['Garder les mains croisées sur la poitrine et ne pas s’agripper', 'Tenir les accoudoirs fermement', 'Se lever dans les virages', 'Aider à pousser'], e: 'FT Chaise de transport.', s: 'comment' },
    { q: 'Rôle du 3e secouriste dans l’escalier :', c: ['Précéder, ouvrir les portes et sécuriser le porteur aux pieds en descente', 'Tenir la tête de la victime', 'Porter le sac', 'Rester au VSAV'], e: 'FT Chaise de transport.', s: 'comment' }
  ]
});

VSAV.chap({
  id: 'arrimage', part: 'p3', seq: S32, title: 'Arrimage d’une victime', short: 'Arrimage', motif: 'strap', accent: '#15803d',
  sources: ['FT - Arrimage d’une victime (MAJ 05/2024)'],
  summary: 'Toute victime est arrimée avant le brancardage, sans comprimer le bas du thorax ni le haut de l’abdomen.',
  why: '<b>Pourquoi obligatoire ?</b> Les mouvements du brancardage peuvent faire chuter la victime. Mais un serrage excessif peut comprimer, blesser ou donner une sensation d’oppression : les sangles évitent les blessures, le cou, le bas du thorax et le haut de l’abdomen (zones respiratoires).',
  sections: [
    { id: 'comment', t: 'Technique', ic: 'strap', src: 'FT - Arrimage d’une victime',
      steps: ['Refermer drap et couverture(s) sur la victime.', 'Arrimer avec le harnais du brancard, une sangle-araignée ou trois sangles.', 'Trois sangles : haut du thorax (au-dessus d’un bras et en dessous de l’autre), bassin, cuisses juste au-dessus des genoux.', 'Aucune sangle sur une blessure, le cou, la partie inférieure du thorax ou supérieure de l’abdomen.', 'Victime dans un MID sur brancard : arrimer l’ensemble « victime-matelas » de la même façon.', 'Brancard sans sangles : utiliser des sangles, pas de cordes ni cordages.'] }
  ],
  key: ['Arrimage obligatoire avant tout brancardage.', 'Sangles : haut du thorax (sous un bras), bassin, au-dessus des genoux.', 'Jamais sur blessure, cou, bas du thorax, haut de l’abdomen.', 'Pas de cordes.'],
  traps: ['Sangler sur le haut de l’abdomen (gêne respiratoire).'],
  quiz: [
    { q: 'La sangle thoracique passe :', c: ['Au-dessus d’un bras et en dessous de l’autre', 'Sur le cou', 'Sur le haut de l’abdomen', 'Sous les deux bras'], e: 'FT Arrimage.', s: 'comment' },
    { q: 'À défaut de sangles de fixation sur le brancard :', c: ['Utiliser des sangles, pas de cordes', 'Utiliser des cordes', 'Ne pas arrimer', 'Tenir la victime à la main'], e: 'FT Arrimage.', s: 'comment' }
  ]
});

VSAV.chap({
  id: 'deplacement', part: 'p3', seq: S32, title: 'Aide à la marche et déplacement d’une victime non valide', short: 'Aide à la marche & non valide', motif: 'walk', accent: '#65a30d',
  sources: ['FT - Aide à la marche (MAJ 05/2024)', 'FT - Déplacement d’une victime non valide (MAJ 05/2024)'],
  summary: 'Déplacer sur quelques mètres une victime sans traumatisme du rachis ni des membres.',
  why: '<b>Pourquoi ces techniques sont-elles limitées ?</b> Elles servent à mettre une victime à l’abri ou au calme sur <b>quelques mètres</b>. Elles mobilisent la colonne et les membres : elles sont <b>interdites</b> en cas de suspicion de traumatisme de la colonne vertébrale ou des membres (inférieurs pour l’aide à la marche).',
  sections: [
    { id: 'marche', t: 'Aide à la marche', ic: 'walk', src: 'FT - Aide à la marche',
      html: '<ul class="check"><li><b>À 1 secouriste</b> (victime qui porte son poids) : l’aider à se lever, passer son bras autour de son cou et le tenir au poignet ; passer son avant-bras derrière son dos, main sous l’aisselle ou à la ceinture.</li><li><b>À 2 secouristes</b> (difficulté à tenir debout) : même technique, un de chaque côté.</li></ul>' },
    { id: 'nonvalide', t: 'Victime non valide', ic: 'team', src: 'FT - Déplacement d’une victime non valide',
      html: '<div class="tw"><table><tr><th>Technique</th><th>Mise en œuvre (2 secouristes minimum)</th></tr><tr><td>Saisie des extrémités (espace étroit)</td><td>Victime assise ; S1 accroupi derrière, avant-bras sous les aisselles, saisit les poignets opposés ; S2 entre les jambes, face à la marche, bras sous les genoux de l’extérieur vers l’intérieur ; « Êtes-vous prêt ? » — « Prêt ! » — « Avancez ! » puis « Halte ! Attention pour poser… Posez ! »</td></tr><tr><td>Chaise à mains</td><td>De chaque côté au niveau des hanches ; un avant-bras derrière le dos (main sur l’épaule de l’autre), l’autre sous les genoux (poignets agrippés) ; anneau de toile possible ; la victime passe les bras autour des cous</td></tr><tr><td>Chaise d’ameublement</td><td>Chaise solide ; S1 derrière bascule doucement en arrière en prévenant ; S2 face à la victime saisit les pieds avant ; jambes de la victime entre les pieds de la chaise ; se relever ensemble au commandement de S1</td></tr></table></div>' }
  ],
  key: ['Quelques mètres seulement, vers un abri ou une zone calme.', 'Interdit si suspicion de traumatisme de la colonne ou des membres.', 'Commandements : « Avancez ! », « Halte ! Attention pour poser… Posez ! ».'],
  traps: ['Faire marcher une victime qui se plaint de la cheville.'],
  quiz: [
    { q: 'Contre-indication de l’aide à la marche :', c: ['Suspicion de traumatisme de la colonne ou des membres inférieurs', 'Victime âgée', 'Pluie', 'Victime consciente'], e: 'FT Aide à la marche.', s: 'marche' },
    { q: 'Technique adaptée pour sortir une victime non valide d’un espace étroit :', c: ['Saisie des extrémités', 'Chaise à mains', 'Brancardage à 4', 'Alèse portoir'], e: 'FT Déplacement d’une victime non valide.', s: 'nonvalide' }
  ]
});

VSAV.chap({
  id: 'vecteur', part: 'p3', seq: S32, title: 'Installation dans un vecteur de transport', short: 'Installation dans le VSAV', motif: 'ambulance', accent: '#15803d',
  sources: ['FT - Installation d’une victime dans un vecteur de transport (MAJ 05/2024)'],
  summary: 'Charger le chariot-brancard dans le VSAV à 3 (parfois 4), le verrouiller, décharger à l’inverse.',
  why: '<b>Pourquoi jamais seul ?</b> Le chargement combine le poids de la victime et du chariot, les roulettes à guider dans les rails et les pieds à libérer : à un seul secouriste, la chute est probable. Le chef se place au pied du brancard pour voir l’équipe et la victime.',
  sections: [
    { id: 'chargement', t: 'Chargement d’un chariot-brancard', ic: 'ambulance', src: 'FT - Installation dans un vecteur de transport',
      steps: ['Vérifier l’arrimage de la victime avant la manœuvre.', 'Deux secouristes à la tête maintiennent le chariot et guident les roulettes dans les rails.', 'Avant du chariot sur les rails : le(s) secouriste(s) aux pieds libère(nt) les pieds avant (poignée de commande) et pousse(nt) le brancard.', 'Chariot entré aux deux tiers : ceux de la tête soutiennent ; ceux des pieds libèrent et replient les pieds arrière.', 'Vérifier que le système de fixation (3 points) est verrouillé.', 'Déchargement : exactement l’inverse ; vérifier le verrouillage des pieds avant de déplacer le brancard.'] },
    { id: 'regles', t: 'Règles', ic: 'alert', src: 'FT - Installation dans un vecteur de transport',
      html: '<ul class="check"><li>Brancard verrouillé au sol ou au porte-brancard ; brancard le plus horizontal possible.</li><li>Dos droit, flexion des genoux et des hanches.</li><li><b>Jamais à un seul secouriste.</b></li><li>L’arrimage dans le véhicule et la fermeture des portes incombent au <b>conducteur</b>.</li><li>Plusieurs brancards : le blessé le plus grave est le plus accessible.</li><li>Le chef de manœuvre se place au pied du brancard.</li></ul>' }
  ],
  key: ['3 secouristes (parfois 4), jamais seul.', 'Pieds avant libérés une fois l’avant sur les rails ; pieds arrière aux 2/3.', 'Fixation 3 points vérifiée.', 'Conducteur responsable de l’arrimage dans le véhicule et des portes.', 'Victime la plus grave = la plus accessible.'],
  traps: ['Déplacer le brancard déchargé sans vérifier le verrouillage des pieds.'],
  quiz: [
    { q: 'À quel moment libère-t-on les pieds arrière du chariot ?', c: ['Quand le chariot est entré aux deux tiers', 'Avant de poser l’avant sur les rails', 'Une fois le chariot entièrement entré', 'Jamais'], e: 'FT Installation dans un vecteur de transport.', s: 'chargement' },
    { q: 'Qui est responsable de l’arrimage dans le véhicule et de la fermeture des portes ?', c: ['Le conducteur', 'Le chef d’agrès', 'L’équipier le plus jeune', 'La victime'], e: 'FT Installation dans un vecteur de transport.', s: 'regles' },
    { q: 'Nombre minimal de secouristes pour charger un chariot-brancard :', c: ['3 (parfois 4)', '1', '2', '6'], e: 'En aucun cas la manœuvre ne doit être réalisée à un seul secouriste.', s: 'chargement' }
  ]
});

VSAV.chap({
  id: 'msp', part: 'p3', seq: 'MSP / Cas concrets', title: 'Mises en situation professionnelle (MSP) et cas concrets', short: 'MSP / cas concrets', motif: 'target', accent: '#64748b',
  status: 'vide', todo: 'Le programme indique « Se référer à la liste des MSP » : cette liste <b>ne figure pas</b> dans les documents fournis. Chapitre non rédigé. En attendant, entraîne-toi avec les animations (XABCDE, RCP, repérage SNV) et le carnet d’erreurs.',
  sources: ['Programme Équipier VSAV v2024-05 (ligne « MSP / CAS CONCRET »)'],
  summary: 'Liste des MSP non fournie.'
});
