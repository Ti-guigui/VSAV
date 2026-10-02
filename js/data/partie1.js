/* PARTIE 1 — Séquence 1.1 Les pathologies · Séquence 1.2 Atteintes circonstancielles
   Sources : fiches procédures « Valise péda Équipier VSAV » (MAJ 05/2024).
   NB : les AC « Les affections spécifiques » et « Les atteintes circonstancielles » citées par le programme
   ne figurent pas dans les documents fournis ; les chapitres s’appuient sur les PR et FT. */
var S11 = 'Séquence 1.1 — Les pathologies', S12 = 'Séquence 1.2 — Atteintes circonstancielles';

VSAV.chap({
  id: 'avc', part: 'p1', seq: S11, title: 'L’accident vasculaire cérébral (AVC)', short: 'AVC', motif: 'brain', accent: '#6d28d9',
  sources: ['PR - Les accidents vasculaires cérébraux (MAJ 05/2024)', 'PR - Bilan secondaire (FAST)', 'Mémo D (A6)'],
  summary: 'Reconnaître un AVC ou un AIT avec FAST, installer à plat et obtenir vite un avis médical.',
  why: '<b>Pourquoi la vitesse et l’orientation comptent ?</b> Les victimes d’AVC sont idéalement acheminées vers une <b>unité neuro-vasculaire</b> (unité de soins intensifs neurologiques). Une prise en charge précoce dans ces centres réduit la mortalité et les séquelles. D’où le <b>T de FAST</b> : l’heure de début des signes est une information capitale pour le médecin. Et comme près des <b>2/3 des victimes</b> ont des troubles de la déglutition, on surveille la respiration et on prévient l’inhalation (PLS si vomissements).',
  sections: [
    { id: 'fast', t: 'Reconnaître : FAST', ic: 'eye', src: 'PR - Bilan secondaire · Mémo D',
      html: '<div class="tw"><table><tr><th>Lettre</th><th>Signe recherché</th></tr><tr><td><b>F</b>ace</td><td>Paralysie faciale</td></tr><tr><td><b>A</b>rm (bras)</td><td>Déficit moteur</td></tr><tr><td><b>S</b>peech (parole)</td><td>Anomalie de la parole</td></tr><tr><td><b>T</b>ime (temps)</td><td>Depuis combien de temps ?</td></tr></table></div>' },
    { id: 'cat', t: 'Conduite à tenir', ic: 'list', src: 'PR - Les accidents vasculaires cérébraux',
      html: '<p>Victime qui a perdu connaissance et respire → conduite devant une perte de connaissance. Consciente avec détresse neurologique → conduite devant une détresse neurologique. <b>Consciente avec signes d’AVC ou d’AIT :</b></p>',
      steps: ['Installer la victime en position strictement horizontale, à plat, ou en PLS si nausées et vomissements.', 'Administrer de l’oxygène si nécessaire.', 'Mesurer la glycémie capillaire.', 'Rechercher les éléments spécifiques de l’AVC : signes, facteurs de risque, antécédents.', 'Transmettre le bilan pour un avis médical et respecter les consignes (le régulateur peut faire chercher d’autres signes ou mettre en relation avec un neurologue).', 'Surveiller attentivement : évolution des signes, conscience, respiration.', 'Protéger du froid ; maintenir la position initiale pendant le transport.'] }
  ],
  key: ['FAST : Face, Arm, Speech, Time.', 'Consciente avec signes d’AVC : strictement à plat (PLS si vomissements).', 'Glycémie capillaire systématique.', '≈ 2/3 des AVC ont des troubles de la déglutition.', 'Orientation idéale : unité neuro-vasculaire.'],
  traps: ['Asseoir la victime « pour qu’elle soit mieux » : la fiche demande la position strictement horizontale.', 'Oublier de noter l’heure de début des signes.', 'Faire boire la victime (troubles de la déglutition).'],
  quiz: [
    { q: 'Que signifie le T de FAST ?', c: ['Time : depuis combien de temps ?', 'Température', 'Tension artérielle', 'Tremblements'], e: 'Face, Arm, Speech, Time.', s: 'fast' },
    { q: 'Position d’une victime consciente présentant des signes d’AVC sans vomissement :', c: ['Strictement horizontale, à plat', 'Demi-assise', 'Assise', 'Jambes surélevées'], e: 'PR AVC : position strictement horizontale à plat, ou PLS si nausées / vomissements.', s: 'cat' },
    { q: 'Quelle mesure est systématique devant une suspicion d’AVC ?', c: ['La glycémie capillaire', 'La température rectale', 'Le score de Wallace', 'Le RAD-57'], e: 'PR AVC : réaliser une mesure de la glycémie capillaire.', s: 'cat' },
    { q: 'Proportion de victimes d’AVC avec troubles de la déglutition :', c: ['Près des 2/3', 'Environ 1 sur 10', 'Aucune', 'La totalité'], e: 'Près des 2/3 des victimes présentent des troubles de la déglutition associés.', s: 'cat' }
  ]
});

VSAV.chap({
  id: 'convulsions', part: 'p1', seq: S11, title: 'La crise convulsive généralisée', short: 'Crise convulsive', motif: 'bolt', accent: '#7e22ce',
  sources: ['PR - La crise convulsive généralisée (MAJ 05/2024)'],
  summary: 'Protéger sans contraindre pendant la crise, puis libérer les voies aériennes et surveiller.',
  why: '<b>Pourquoi ne jamais contraindre ?</b> Les mouvements de la crise sont involontaires : les bloquer expose la victime et le secouriste à des blessures. Le danger réel est autour (chute, objets) puis <b>après</b> la crise (voies aériennes, respiration). La victime n’avale pas sa langue : rien dans la bouche.',
  sections: [
    { id: 'cat', t: 'Conduite à tenir chez l’adulte ou l’enfant', ic: 'list', src: 'PR - La crise convulsive généralisée',
      html: '<div class="callout bad"><b>Règle d’or</b>Ne jamais contraindre les mouvements de la victime durant toute la crise. Ne rien placer entre ses dents ni dans sa bouche.</div>',
      steps: ['Début de crise : allonger la victime au sol si elle ne l’est pas ; écarter les personnes autour.', 'Pendant la crise : protéger la tête (vêtement ou tissu plié dessous, sans couvrir les voies aériennes) ; écarter les objets traumatisants.', 'Fin des convulsions : vérifier la liberté des voies aériennes et la respiration.', 'Ne respire plus : débuter la RCP. Respire : installer en PLS.', 'Quand elle redevient consciente : la garder au calme et la rassurer.', 'Dans tous les cas : poursuivre le bilan, rechercher un traumatisme, noter l’heure de survenue et la durée de la crise.', 'Mesurer la glycémie capillaire après la phase convulsive.', 'Transmettre un bilan, appliquer les consignes, surveiller jusqu’au retour à un état de conscience normal.'] },
    { id: 'nourrisson', t: 'Particularités chez le nourrisson', ic: 'baby', src: 'PR - La crise convulsive généralisée',
      html: '<p>Prise en charge identique, mais en plus :</p><ul class="check"><li>Prendre la température de l’enfant.</li><li>Le découvrir, placer des linges humides sur son front et sa nuque.</li><li>Aérer et ventiler la pièce.</li><li>Transmettre un bilan <b>systématiquement</b>.</li></ul>' }
  ],
  key: ['Ne jamais contraindre ; rien dans la bouche.', 'Protéger la tête et écarter les objets.', 'Après : LVA, respiration → RCP ou PLS.', 'Noter heure et durée ; glycémie après la crise.', 'Nourrisson : température, découvrir, linges humides, aérer, bilan systématique.'],
  traps: ['Mettre un objet entre les dents « pour qu’elle n’avale pas sa langue ».', 'Tenir les membres pour arrêter les mouvements.'],
  quiz: [
    { q: 'Pendant la crise convulsive, il faut :', c: ['Protéger la tête et écarter les objets dangereux', 'Maintenir fermement les membres', 'Placer un objet entre les dents', 'Faire boire la victime'], e: 'Ne jamais contraindre ; protéger la tête, écarter les objets traumatisants.', s: 'cat' },
    { q: 'À la fin des convulsions, la victime respire mais reste inconsciente :', c: ['PLS', 'RCP', 'Position assise', 'Sucre par la bouche'], e: 'Respire → PLS ; ne respire plus → RCP.', s: 'cat' },
    { q: 'Quand mesure-t-on la glycémie ?', c: ['Après la phase convulsive', 'Pendant les convulsions', 'Jamais', 'Uniquement chez le diabétique'], e: 'PR : mesure de la glycémie capillaire après la phase convulsive.', s: 'cat' },
    { q: 'Spécifique au nourrisson :', c: ['Prendre la température, découvrir, linges humides front et nuque', 'Le couvrir chaudement', 'Le mettre en position assise', 'Ne pas transmettre de bilan'], e: 'Plus : aérer la pièce et transmettre un bilan systématiquement.', s: 'nourrisson' }
  ]
});

VSAV.chap({
  id: 'asthme', part: 'p1', seq: S11, title: 'La crise d’asthme', short: 'Crise d’asthme', motif: 'lungs', accent: '#0f766e',
  sources: ['PR - La crise d’asthme (MAJ 05/2024)'],
  summary: 'Soustraire au déclencheur, position assise, aider à prendre le traitement, oxygène si nécessaire.',
  why: '<b>Pourquoi la position assise ?</b> En position assise ou demi-assise, la victime mobilise mieux ses muscles respiratoires : c’est souvent la position où elle se sent le mieux pour respirer. Le stress aggrave la gêne : rassurer fait partie du traitement.',
  sections: [
    { id: 'cat', t: 'Conduite à tenir', ic: 'list', src: 'PR - La crise d’asthme',
      steps: ['Soustraire la victime aux facteurs déclenchants possibles (atmosphère enfumée, polluée, poussière).', 'La mettre au repos dans la position où elle respire le mieux, souvent assise ou demi-assise.', 'Dégrafer tout ce qui gêne la respiration.', 'Rassurer, lui demander de rester calme.', 'L’aider à prendre son médicament prescrit pour la crise (le plus souvent un aérosol doseur).', 'Administrer de l’oxygène en inhalation si nécessaire.', 'Demander un avis médical en transmettant le bilan ; surveiller particulièrement la respiration.'],
      after: '<div class="callout bad"><b>Perte de connaissance</b>Si la victime perd connaissance et ne respire plus : conduite à tenir devant un arrêt cardiaque.</div>',
      figs: [{ svg: 'positions', cap: 'Choisir la position d’attente', txt: '<p>Gêne respiratoire → assise ou demi-assise ; détresse circulatoire → allongée ; inconsciente qui respire → PLS.</p>', src: 'PR Asthme · PR Douleur thoracique · PR Traumatisme du thorax · PR AVC' }] }
  ],
  key: ['Soustraire au déclencheur (fumée, pollution, poussière).', 'Position assise / demi-assise.', 'Aider à prendre le traitement (aérosol doseur).', 'O₂ si nécessaire ; avis médical.', 'Perte de connaissance sans respiration → RCP.'],
  traps: ['Allonger une victime en crise d’asthme.', 'Administrer soi-même un médicament non prescrit : on aide la victime à prendre SON traitement.'],
  quiz: [
    { q: 'Position d’une victime en crise d’asthme :', c: ['Celle où elle respire le mieux, souvent assise ou demi-assise', 'Allongée à plat', 'PLS d’emblée', 'Jambes surélevées'], e: 'PR Crise d’asthme.', s: 'cat' },
    { q: 'Le traitement de crise de l’asthmatique est le plus souvent :', c: ['Un aérosol doseur', 'Un comprimé de sucre', 'Un auto-injecteur d’adrénaline', 'De l’aspirine'], e: 'Aider la victime à prendre le médicament prescrit, souvent un aérosol doseur.', s: 'cat' },
    { q: 'Première action devant une crise d’asthme dans une pièce enfumée :', c: ['Soustraire la victime à cette atmosphère', 'Lui donner à boire', 'L’allonger', 'Prendre sa température'], e: 'Soustraire aux facteurs déclenchants.', s: 'cat' }
  ]
});

VSAV.chap({
  id: 'douleur-thoracique', part: 'p1', seq: S11, title: 'La douleur thoracique non traumatique', short: 'Douleur thoracique', motif: 'heart', accent: '#be123c',
  sources: ['PR - La douleur thoracique non traumatique (MAJ 05/2024)', 'AC - Arrêt cardiaque (signes annonciateurs)'],
  summary: 'La conduite dépend de la détresse associée ; sans détresse, repos et avis médical.',
  why: '<b>Pourquoi se méfier ?</b> Une douleur serrant la poitrine, permanente, angoissante, irradiant dans le cou et les bras, avec gêne respiratoire et sueurs, peut <b>annoncer un arrêt cardiaque</b> (AC - Arrêt cardiaque). Le repos immédiat diminue le travail du cœur ; la surveillance permet d’agir vite si la victime perd connaissance.',
  sections: [
    { id: 'cat', t: 'Conduite selon la situation', ic: 'list', src: 'PR - La douleur thoracique non traumatique',
      html: '<div class="tw"><table><tr><th>La victime présente…</th><th>Conduite</th></tr><tr><td>Des signes de détresse respiratoire</td><td>Position assise ou demi-assise, oxygène si nécessaire ; avis médical, respecter les consignes</td></tr><tr><td>Des signes de détresse circulatoire</td><td>Position allongée horizontale, oxygène si nécessaire, lutter contre le froid ; avis médical</td></tr><tr><td>Pas de signe évident de détresse</td><td>Conduite devant un malaise (ci-dessous)</td></tr></table></div><p class="small muted">NB : la fiche source porte deux fois le titre « détresse respiratoire » ; le contenu de la 2e ligne correspond à la détresse circulatoire.</p>',
      steps: ['Mettre la victime au repos immédiatement.', 'L’installer dans la position où elle se sent le mieux.', 'Administrer de l’oxygène si nécessaire.', 'Demander un avis médical après avoir réalisé le bilan secondaire.', 'Administrer, à la demande de la victime ou du médecin régulateur, le traitement prescrit qu’elle utilise.', 'Respecter les consignes.'], stepsTitle: 'Sans détresse évidente',
      after: '<div class="callout bad"><b>Dans tous les cas</b>Si la victime perd connaissance brutalement : conduite adaptée et gestes d’urgence en priorité.</div>' }
  ],
  key: ['Détresse respiratoire → assise / demi-assise + O₂ si nécessaire.', 'Détresse circulatoire → allongée horizontale + O₂ + froid.', 'Sans détresse : repos immédiat, position de confort, bilan secondaire puis avis médical.', 'Traitement prescrit : à la demande de la victime ou du régulateur.', 'Risque d’arrêt cardiaque : rester prêt.'],
  traps: ['Laisser la victime marcher jusqu’au VSAV.', 'Donner un médicament de sa propre initiative.'],
  quiz: [
    { q: 'Douleur thoracique avec signes de détresse circulatoire : position ?', c: ['Allongée horizontale', 'Assise', 'Demi-assise', 'Debout'], e: 'Détresse circulatoire : position allongée horizontale, O₂ si nécessaire, lutter contre le froid.', s: 'cat' },
    { q: 'Douleur thoracique sans détresse évidente : première action ?', c: ['Mettre la victime au repos immédiatement', 'La faire marcher pour tester', 'Lui donner de l’aspirine', 'La mettre en PLS'], e: 'Conduite devant un malaise : repos immédiat.', s: 'cat' },
    { q: 'Le traitement personnel de la victime est administré :', c: ['À sa demande ou à celle du médecin régulateur', 'Systématiquement par le secouriste', 'Jamais', 'Uniquement à l’hôpital'], e: 'PR Douleur thoracique non traumatique.', s: 'cat' }
  ]
});

VSAV.chap({
  id: 'hypoglycemie', part: 'p1', seq: S11, title: 'Le malaise hypoglycémique chez le diabétique', short: 'Hypoglycémie', motif: 'drop', accent: '#c2410c',
  sources: ['PR - Malaise hypoglycémique chez le diabétique (MAJ 05/2024)', 'Mémento SSUAP', 'Mémo D (A6)'],
  summary: 'Mesurer, resucrer si la victime peut avaler, réévaluer après 10 à 15 minutes.',
  why: '<b>Pourquoi tant d’importance ?</b> Le cerveau a besoin de sucre : une hypoglycémie peut donner un malaise, un comportement inhabituel (pensez « état de crise »), voire une perte de connaissance. Le resucrage par la bouche est simple et efficace — <b>à condition que la victime puisse avaler</b>, sinon elle risque de s’étouffer.',
  sections: [
    { id: 'seuils', t: 'Les seuils', ic: 'drop', src: 'Mémento SSUAP · Mémo D · PR Malaise hypoglycémique',
      figs: [{ svg: 'glycemie', cap: 'Glycémie capillaire : normes et seuils', txt: '<p>Norme 80 à 120 mg/dl. Hypoglycémie : <b>&lt; 60 mg/dl (0,6 g/l) chez l’adulte</b>, <b>&lt; 50 mg/dl (0,5 g/l) chez l’enfant de 2 à 15 ans</b>.</p>', src: 'Mémento SSUAP · PR Malaise hypoglycémique' }] },
    { id: 'cat', t: 'Conduite à tenir', ic: 'list', src: 'PR - Malaise hypoglycémique chez le diabétique',
      html: '<p><b>Perte de connaissance :</b> gestes d’urgence en priorité ; glycémie capillaire lors du 4e regard si la victime respire.</p><p><b>Victime consciente, sans détresse vitale :</b></p>',
      steps: ['Réaliser le bilan secondaire.', 'Mesurer la glycémie capillaire si le matériel est disponible.', 'Aider à prendre du sucre si glycémie < 60 mg/dl (adulte) ou < 50 mg/dl (enfant 2–15 ans), ou si l’origine du malaise est inconnue, et que la victime est réveillée, réactive et capable d’avaler.', 'Adulte : 4 morceaux ou 4 cuillères à café de sucre de préférence ; sinon boisson sucrée (jus d’orange) ou miel. Enfant : 2 à 3 morceaux ou cuillères. Les bonbons au sucrose sont aussi efficaces.', 'Demander un avis médical (bilan + résultat de glycémie) si l’état ne s’améliore pas rapidement ou en cas de doute.', 'Surveiller : compter 10 à 15 minutes entre l’ingestion et l’amélioration. Sans amélioration au bout de 15 minutes, une seconde dose de sucre peut être prise.'] }
  ],
  key: ['Norme 80–120 mg/dl.', 'Hypo : < 60 mg/dl adulte, < 50 mg/dl enfant 2–15 ans.', 'Resucrer seulement si réveillée, réactive, capable d’avaler.', 'Adulte 4 morceaux / cuillères ; enfant 2 à 3.', 'Effet en 10–15 min ; 2e dose possible après 15 min sans amélioration.', 'Inconscient : glycémie au 4e regard si respire.'],
  memo: ['Norme 80–120 mg/dl', 'Hypo adulte < 60 mg/dl (0,6 g/l) · enfant 2–15 ans < 50 mg/dl', 'Sucre si conscient ET capable d’avaler', '4 morceaux adulte · 2–3 enfant', 'Réévaluer à 10–15 min ; 2e dose à 15 min si besoin'],
  traps: ['Donner du sucre par la bouche à une victime somnolente ou inconsciente.', 'Confondre les seuils adulte (60) et enfant (50).'],
  quiz: [
    { q: 'Seuil d’hypoglycémie chez l’adulte :', c: ['< 60 mg/dl', '< 50 mg/dl', '< 80 mg/dl', '< 120 mg/dl'], e: 'Adulte < 60 mg/dl (0,6 g/l) ; enfant 2–15 ans < 50 mg/dl.', s: 'seuils' },
    { q: 'Seuil d’hypoglycémie chez un enfant de 8 ans :', c: ['< 50 mg/dl', '< 60 mg/dl', '< 80 mg/dl', '< 40 mg/dl'], e: 'Enfant de 2 à 15 ans : < 50 mg/dl.', s: 'seuils' },
    { q: 'Quantité de sucre recommandée chez l’adulte :', c: ['4 morceaux ou 4 cuillères à café', '1 morceau', '10 morceaux', 'Un verre d’eau'], e: 'Adulte : 4 morceaux ; enfant : 2 à 3.', s: 'cat' },
    { q: 'Délai avant amélioration après ingestion de sucre :', c: ['Environ 10 à 15 minutes', 'Immédiat', '1 heure', '2 minutes'], e: 'Une 2e dose peut être donnée sans amélioration au bout de 15 minutes.', s: 'cat' },
    { q: 'Condition indispensable pour donner du sucre par la bouche :', c: ['Victime réveillée, réactive et capable d’avaler', 'Victime inconsciente', 'Glycémie > 120 mg/dl', 'Accord de la famille'], e: 'Sinon risque de fausse route.', s: 'cat' }
  ]
});

VSAV.chap({
  id: 'allergie', part: 'p1', seq: S11, title: 'La réaction allergique grave', short: 'Réaction allergique grave', motif: 'alert', accent: '#a21caf',
  sources: ['PR - La réaction allergique grave (MAJ 05/2024)'],
  summary: 'Soustraire à la cause, traiter la détresse, aider à utiliser l’auto-injecteur d’adrénaline.',
  why: '<b>Pourquoi agir vite ?</b> Une réaction allergique grave peut toucher la respiration (œdème des voies respiratoires, sifflements) et la circulation (chute de tension, pouls rapide et difficile à percevoir). L’auto-injecteur d’adrénaline (AIA) prescrit est le traitement d’urgence ; le secouriste l’administre à la demande de la victime ou du régulateur.',
  sections: [
    { id: 'cat', t: 'Conduite à tenir', ic: 'list', src: 'PR - La réaction allergique grave',
      html: '<div class="tw"><table><tr><th>Situation</th><th>Conduite</th></tr><tr><td>Ne respire pas / gasps</td><td>Conduite devant un arrêt cardiaque</td></tr><tr><td>Consciente, détresse respiratoire (souffle court, sifflements à l’expiration, œdème des voies respiratoires)</td><td>Position assise ou demi-assise, O₂ si nécessaire</td></tr><tr><td>Consciente, détresse circulatoire (chute de PA, pouls rapide difficile à percevoir)</td><td>Position strictement horizontale, O₂ si nécessaire</td></tr><tr><td>Possède un auto-injecteur d’adrénaline (AIA)</td><td>L’administrer à la demande de la victime ou du médecin régulateur ; avis médical immédiat ; surveiller</td></tr><tr><td>Pas de détresse vitale (réaction simple)</td><td>Conduite devant un malaise ; avis médical</td></tr></table></div><p>Sans amélioration ou en cas de récidive <b>10 à 15 minutes</b> après la 1re injection, une <b>2e injection</b> peut être réalisée (si possible après nouvel avis). Le régulateur peut demander l’injection même sans détresse vitale.</p>' }
  ],
  key: ['Soustraire à la cause.', 'Détresse respiratoire → assise ; circulatoire → strictement horizontale.', 'AIA : à la demande de la victime ou du régulateur.', '2e injection possible après 10 à 15 min sans amélioration ou récidive.'],
  traps: ['Allonger à plat une victime en détresse respiratoire.', 'Attendre que la victime soit en arrêt pour utiliser l’AIA.'],
  quiz: [
    { q: 'Réaction allergique avec détresse circulatoire : position ?', c: ['Strictement horizontale', 'Assise', 'Demi-assise', 'PLS systématique'], e: 'PR Réaction allergique grave.', s: 'cat' },
    { q: 'Quand peut-on faire une 2e injection d’adrénaline ?', c: ['Sans amélioration ou récidive 10 à 15 min après la 1re', 'Immédiatement après la 1re', 'Jamais', 'Après 1 heure'], e: 'Si possible après un nouvel avis du régulateur.', s: 'cat' },
    { q: 'Qui décide de l’administration de l’auto-injecteur ?', c: ['La victime ou le médecin régulateur', 'Le témoin', 'Le secouriste seul', 'Le pharmacien'], e: 'Administrer à la demande de la victime ou du médecin régulateur le traitement prescrit.', s: 'cat' }
  ]
});

/* ---------------- Séquence 1.2 ---------------- */

VSAV.chap({
  id: 'electrique', part: 'p1', seq: S12, title: 'L’accident électrique', short: 'Accident électrique', motif: 'bolt', accent: '#ca8a04',
  sources: ['PR - Accident électrique (MAJ 05/2024)', 'AC - Protection et sécurité'],
  summary: 'Ne jamais toucher avant la coupure, puis traiter détresses, brûlures et lésions de projection.',
  why: '<b>Pourquoi tant de prudence ?</b> Tant que la victime est en contact (direct ou via l’eau) avec un conducteur sous tension, la toucher, c’est devenir soi-même victime. Ensuite, l’électricité provoque des lésions parfois cachées : brûlures (points d’entrée et de sortie), contractions musculaires violentes, projections. Chez la femme enceinte, il existe un risque pour le fœtus.',
  sections: [
    { id: 'securite', t: 'Sécuriser avant tout', ic: 'shield', src: 'PR - Accident électrique',
      html: '<ul class="trap"><li>Ne pas s’approcher ni toucher la victime avant d’être certain que l’alimentation est coupée (haute tension : attendre l’avis des autorités responsables).</li><li>Faire écarter les personnes et leur interdire de toucher la victime.</li><li>Véhicule en contact avec une ligne : ne pas s’approcher, ordonner aux occupants de <b>rester dedans</b> jusqu’à l’assurance de la mise hors tension.</li></ul><p>Couper le courant (débrancher) ou le faire couper par une personne qualifiée (EDF, SNCF…). <b>On peut s’approcher et manipuler des victimes frappées par la foudre.</b></p>' },
    { id: 'cat', t: 'Prise en charge', ic: 'list', src: 'PR - Accident électrique',
      steps: ['Enlever les vêtements en combustion et les chaussures (prévenir d’autres lésions thermiques).', 'Détresse vitale : conduite adaptée.', 'Brûlures : conduite face à une brûlure thermique et électrique (points d’entrée et de sortie).', 'Compléter le bilan : lésions dues à une contraction musculaire ou à une projection.', 'Gestes et soins complémentaires ; avis médical et consignes.', 'Femme enceinte : le préciser lors de la transmission (risque pour le fœtus).'] }
  ],
  key: ['Pas de contact avant coupure certaine.', 'Véhicule touché par une ligne : occupants restent dedans.', 'Foudroyé : on peut le toucher.', 'Rechercher brûlures (entrée / sortie) et lésions de projection.', 'Signaler une grossesse.'],
  traps: ['Tirer la victime avant la coupure.', 'Faire sortir les occupants d’une voiture en contact avec une ligne.'],
  quiz: [
    { q: 'Une voiture est en contact avec une ligne électrique tombée :', c: ['Ordonner aux occupants de rester à l’intérieur', 'Les faire sortir immédiatement', 'Ouvrir les portières pour les aider', 'Toucher la carrosserie pour tester'], e: 'Ne pas s’approcher, les occupants restent dedans jusqu’à confirmation de la mise hors tension.', s: 'securite' },
    { q: 'Peut-on toucher une victime frappée par la foudre ?', c: ['Oui', 'Non, jamais', 'Seulement avec des gants isolants', 'Après 30 minutes'], e: 'PR Accident électrique : on peut s’approcher et manipuler des victimes frappées par la foudre.', s: 'securite' },
    { q: 'Pourquoi signaler une grossesse lors du bilan ?', c: ['Risque pour le fœtus', 'Pour choisir le VSAV', 'Ce n’est pas utile', 'Pour la facturation'], e: 'Il existe un risque pour le fœtus.', s: 'cat' }
  ]
});

VSAV.chap({
  id: 'chaleur', part: 'p1', seq: S12, title: 'Les affections liées à la chaleur', short: 'Chaleur', motif: 'sun', accent: '#ea580c',
  sources: ['PR - Prise en charge d’une affection liée à la chaleur (MAJ 05/2024)', 'PR - Bilan primaire (E)'],
  summary: 'Crampe, insolation, coup de chaleur : soustraire à la cause, réhydrater, refroidir.',
  why: '<b>Pourquoi refroidir de plusieurs façons ?</b> Le corps perd sa chaleur par <b>convection</b> (courant d’air, ventilateur), <b>évaporation</b> (pulvériser de l’eau) et contact avec le froid (linges froids, glace sur les gros troncs vasculaires : plis de l’aine, aisselles, tête, nuque). Combiner ces moyens accélère la baisse de température. Au bilan primaire, une T° &gt; 40 °C avec trouble de la conscience évoque un coup de chaleur.',
  sections: [
    { id: 'base', t: 'Dans tous les cas', ic: 'sun', src: 'PR - Affection liée à la chaleur',
      html: '<ul class="check"><li>Soustraire la victime à la cause ; détresse vitale → conduite adaptée.</li><li>Sans détresse : position de confort ; réhydrater avec de l’eau ou mieux un liquide avec glucides et sels minéraux (jus de fruits, boissons de l’effort) <b>sauf vomissements</b>.</li></ul>' },
    { id: 'formes', t: 'Selon la forme', ic: 'list', src: 'PR - Affection liée à la chaleur',
      html: '<div class="tw"><table><tr><th>Forme</th><th>Conduite</th></tr><tr><td>Crampe</td><td>Refroidir éventuellement (glace), étirements doux, massages ; ne pas reprendre l’activité avant l’arrêt complet des signes</td></tr><tr><td>Insolation</td><td>Refroidir selon le degré d’hyperthermie et les moyens (voir étapes) ; glace sans contact direct avec la peau ; poursuivre le bilan</td></tr><tr><td>Coup de chaleur / hyperthermie maligne d’effort</td><td>Endroit frais (climatisé si possible), refroidir, objectif <b>T° &lt; 39,4 °C</b> ; bain d’eau fraîche éventuel après avis médical ; transmettre le bilan sans délai : prise en charge médicale d’urgence</td></tr></table></div>',
      steps: ['Retirer les vêtements en laissant les sous-vêtements.', 'Ventiler (courant d’air, ventilateur) : perte de chaleur par convection.', 'Pulvériser de l’eau à température ambiante : perte par évaporation.', 'Appliquer des linges ou draps imbibés d’eau froide.', 'Placer de la glace, sans contact direct avec la peau, aux plis de l’aine, aisselles, tête, nuque.', 'Surveiller l’évolution des détresses et la température.'], stepsTitle: 'Refroidir une victime' }
  ],
  key: ['Soustraire à la cause.', 'Réhydrater (sauf vomissements) : glucides + sels minéraux.', 'Refroidir : déshabiller, ventiler, pulvériser, linges froids, glace sur gros troncs.', 'Coup de chaleur : objectif < 39,4 °C, urgence médicale.'],
  traps: ['Poser la glace directement sur la peau.', 'Faire boire une victime qui vomit.'],
  quiz: [
    { q: 'Objectif de température lors d’un coup de chaleur :', c: ['< 39,4 °C', '< 37 °C', '< 41 °C', '< 35 °C'], e: 'PR Chaleur : retrouver une température inférieure à 39,4 °C.', s: 'formes' },
    { q: 'Pulvériser de l’eau sur la victime augmente la perte de chaleur par :', c: ['Évaporation', 'Convection', 'Rayonnement', 'Conduction exclusive'], e: 'La ventilation agit par convection, la pulvérisation par évaporation.', s: 'formes' },
    { q: 'Où placer la glace ?', c: ['Plis de l’aine, aisselles, tête, nuque, sans contact direct', 'Directement sur le ventre', 'Dans la bouche', 'Sur les pieds uniquement'], e: 'Au niveau des gros troncs vasculaires, sans contact direct.', s: 'formes' }
  ]
});

VSAV.chap({
  id: 'plongee', part: 'p1', seq: S12, title: 'Les accidents liés à la plongée', short: 'Plongée', motif: 'wave', accent: '#0369a1',
  sources: ['PR - Accidents liés à la plongée (MAJ 05/2024)', 'FT - Administration d’oxygène par inhalation'],
  summary: 'O₂ 15 L/min quelle que soit la SpO₂, eau plate, recueil des paramètres de plongée.',
  why: '<b>Pourquoi l’O₂ à 15 L/min même si la saturation est bonne ?</b> Dans l’accident de décompression, l’oxygène à haute concentration est un traitement en soi, d’où l’exception à la règle « O₂ selon la SpO₂ ». Les <b>paramètres de plongée</b> sont indispensables au médecin pour décider de l’orientation (caisson).',
  sections: [
    { id: 'cat', t: 'Conduite à tenir', ic: 'list', src: 'PR - Accidents liés à la plongée',
      steps: ['Déséquiper la victime et la sortir le plus rapidement possible de l’eau.', 'Détresse vitale : conduite adaptée sans tarder.', 'Sans détresse : repos, position adaptée ou demi-assise si elle préfère.', 'Déshabiller, sécher, protéger du froid.', 'O₂ en inhalation au MHC à 15 L/min, quelle que soit la SpO₂, jusqu’à la prise en charge médicale.', 'Faire boire de l’eau plate : 0,5 à 1 L fractionné sur une heure, sauf trouble de conscience, vomissements ou refus.', 'Transmettre le bilan et appliquer les consignes (aspirine souvent demandée par le médecin dans les 30 premières minutes, sans allergie ni saignement).', 'Surveiller.'] },
    { id: 'infos', t: 'Renseignements à recueillir avant de transmettre', ic: 'clip', src: 'PR - Accidents liés à la plongée',
      html: '<ul class="check"><li>Paramètres : type (apnée, bouteilles…), lieu, profondeur, durée, remontée avec paliers, heure de sortie.</li><li>Tables ou ordinateur de plongée (à joindre à la fiche d’intervention).</li><li>Nombre de plongées dans les 24 h précédentes.</li><li>Événements : stress, remontée rapide, douleurs à la descente…</li><li>Heure d’apparition des symptômes et évolution.</li></ul>' }
  ],
  key: ['MHC 15 L/min quelle que soit la SpO₂.', 'Eau plate 0,5 à 1 L sur 1 h (sauf contre-indication).', 'Joindre ordinateur / tables de plongée.', 'Plongées des 24 dernières heures.'],
  traps: ['Adapter le débit d’O₂ à la SpO₂ comme pour une autre victime.', 'Faire boire une victime avec trouble de conscience.'],
  quiz: [
    { q: 'Oxygénothérapie après un accident de plongée :', c: ['MHC 15 L/min quelle que soit la SpO₂', 'Selon la SpO₂, objectif 94–98 %', 'Lunettes 2 L/min', 'Pas d’oxygène'], e: 'PR Plongée : 15 L/min quelle que soit la saturation jusqu’à la prise en charge médicale.', s: 'cat' },
    { q: 'Quelle quantité d’eau plate faire boire ?', c: ['0,5 à 1 L fractionné sur une heure', '2 L d’un coup', 'Un verre', 'Aucune'], e: 'Sauf trouble de conscience, vomissements ou refus.', s: 'cat' },
    { q: 'Sur combien d’heures recense-t-on les plongées précédentes ?', c: ['24 heures', '6 heures', '48 heures', '7 jours'], e: 'Nombre de plongées dans les vingt-quatre heures précédant l’action de secours.', s: 'infos' }
  ]
});

VSAV.chap({
  id: 'accouchement', part: 'p1', seq: S12, title: 'L’accouchement inopiné', short: 'Accouchement inopiné', motif: 'baby', accent: '#db2777',
  sources: ['PR - Accouchement inopiné (MAJ 05/2024)'],
  summary: 'Bilan de la parturiente, préparation, réalisation de l’accouchement et délivrance.',
  why: '<b>Pourquoi sur le côté et pas sur le dos ?</b> L’installation sur le dos est à proscrire avant l’accouchement (la fiche l’impose). Le secouriste <b>accompagne</b> un phénomène naturel : il ne tire jamais sur l’enfant ni sur le cordon, il ralentit la sortie de la tête pour éviter les déchirures et anticipe la réanimation éventuelle du nouveau-né.',
  sections: [
    { id: 'avant', t: 'L’accouchement n’a pas encore eu lieu', ic: 'clip', src: 'PR - Accouchement inopiné',
      html: '<p><b>Installer la future maman sur le côté</b> (sur le dos : à proscrire) et réaliser son bilan en recueillant :</p><ul class="check"><li>Suivi de la grossesse ; nombre de grossesses et d’accouchements et leur déroulement.</li><li>Date et lieu prévus ; grossesse simple ou multiple.</li><li>Type d’accouchement prévu (voie basse, césarienne), présentation (tête, siège, épaule).</li><li>Heure de début des contractions, durée et intervalle.</li><li>Perte des eaux : heure et couleur du liquide (transparent, trouble, sanglant).</li></ul><p>Demander un avis médical. Transport possible → brancard, allongée <b>sur le côté et ceinturée</b>, surveillance. Sinon accouchement sur place.</p>' },
    { id: 'preparer', t: 'Préparer l’accouchement sur place', ic: 'list', src: 'PR - Accouchement inopiné',
      html: '<ul class="check"><li>Serviettes de bain propres et sèches, récipient pour les liquides et le placenta.</li><li>Matériel de réanimation du nouveau-né : O₂, insufflateur pédiatrique, aspirateur de mucosités avec sonde adaptée, oxymètre de pouls.</li><li>Gants à usage unique et protection contre les projections (masque, lunettes).</li></ul>' },
    { id: 'realiser', t: 'Réaliser l’accouchement', ic: 'baby', src: 'PR - Accouchement inopiné',
      steps: ['Mère en position demi-assise, cuisses fléchies et écartées (ex. bord du lit).', 'Besoin irrépressible de pousser ou haut du crâne visible : lui faire attraper et hyper-fléchir ses cuisses.', 'Pousser vers le bas en retenant sa respiration dès la contraction, si possible jusqu’à son maximum ; reposer les jambes à la fin.', 'Recommencer jusqu’à l’apparition de la moitié de la tête, puis cesser de faire pousser.', 'Laisser l’expulsion se terminer naturellement en ralentissant la sortie de la tête d’une main (éviter les déchirures du périnée).', 'Maintenir la tête à deux mains sans s’opposer à sa rotation (quart de tour à droite ou à gauche).', 'Tête sortie : vérifier la présence d’un circulaire du cordon autour du cou et le dégager.', 'Bien maintenir l’enfant (sortie souvent très rapide), soutenir son corps par-dessous : il est glissant. Ne jamais tirer sur l’enfant.', 'Noter l’heure de naissance ; prendre en charge le nouveau-né ; surveiller la mère jusqu’à la délivrance.'] },
    { id: 'delivrance', t: 'Accouchement déjà réalisé et délivrance', ic: 'drop', src: 'PR - Accouchement inopiné',
      html: '<p>Si l’accouchement a déjà eu lieu : bilans simultanés de la mère et du nouveau-né, avis médical avec les deux bilans, prise en charge du nouveau-né, surveillance et assistance de la mère pendant la délivrance.</p>',
      steps: ['Laisser sortir le placenta sans tirer dessus ni sur le cordon.', 'Le recueillir (cuvette, sac plastique) et l’acheminer avec la mère à l’hôpital pour vérifier son intégrité.', 'S’assurer de l’absence d’hémorragie extériorisée (une hémorragie gravissime peut survenir après la délivrance → conduite adaptée).', 'Placer un pansement absorbant et surveiller la mère.'], stepsTitle: 'La délivrance' }
  ],
  key: ['Avant l’accouchement : sur le côté (jamais sur le dos).', 'Recueillir : suivi, parité, terme, présentation, contractions, poche des eaux.', 'Cesser de faire pousser à mi-tête ; ralentir la sortie.', 'Circulaire du cordon : le dégager.', 'Ne jamais tirer sur l’enfant, le placenta ou le cordon.', 'Noter l’heure de naissance ; placenta conservé pour l’hôpital.'],
  traps: ['Allonger la parturiente sur le dos pour le transport.', 'Tirer sur le cordon pour accélérer la délivrance.'],
  quiz: [
    { q: 'Position de la parturiente avant l’accouchement (transport) :', c: ['Allongée sur le côté, ceinturée', 'Sur le dos', 'Assise', 'Debout'], e: 'L’installation sur le dos est à proscrire.', s: 'avant' },
    { q: 'À quel moment cesse-t-on de faire pousser la mère ?', c: ['Dès que la moitié de la tête est apparue', 'Dès le début des contractions', 'Après la sortie des épaules', 'Jamais'], e: 'Ensuite on laisse l’expulsion se terminer naturellement en ralentissant la tête.', s: 'realiser' },
    { q: 'Tête sortie, le cordon entoure le cou :', c: ['Dégager le circulaire du cordon', 'Tirer sur l’enfant', 'Attendre la délivrance', 'Repousser la tête'], e: 'Vérifier et dégager un circulaire du cordon.', s: 'realiser' },
    { q: 'Que faire du placenta ?', c: ['Le recueillir et l’acheminer avec la mère pour vérifier son intégrité', 'Le jeter', 'Tirer dessus pour accélérer', 'Le laisser sur place'], e: 'PR Accouchement : délivrance.', s: 'delivrance' }
  ]
});

VSAV.chap({
  id: 'nouveau-ne', part: 'p1', seq: S12, title: 'Le nouveau-né à la naissance et le soin du cordon', short: 'Nouveau-né & cordon', motif: 'baby', accent: '#e11d48',
  sources: ['PR - Prise en charge du nouveau-né à la naissance (MAJ 05/2024)', 'FT - Soin au cordon ombilical (MAJ 05/2024)', 'Mémento SSUAP (PASS)'],
  summary: 'Évaluer cri et tonus, protéger du froid, clamper, réanimer si besoin (40 insufflations, RCP 3/1).',
  why: '<b>Pourquoi le froid est-il l’ennemi n°1 ?</b> Le nouveau-né, mouillé de liquide amniotique, se refroidit très vite : on le <b>sèche par tamponnement</b> et on l’enveloppe (bonnet, serviettes, peau contre peau). <b>Pourquoi clamper ?</b> Le clampage déclenche les mécanismes d’adaptation (circulation et respiration) au passage à la vie extra-utérine ; chez le nouveau-né en bonne santé on attend <b>au minimum 1 minute de vie</b>.',
  sections: [
    { id: 'evaluer', t: 'Évaluer le nouveau-né', ic: 'eye', src: 'PR - Prise en charge du nouveau-né à la naissance',
      html: '<p>Poser le nouveau-né sur le ventre de sa mère, sur le côté, peau contre peau, tête bien dégagée ; mettre une paire de gants propre. Apprécier son <b>cri ou sa respiration</b> et son <b>tonus</b>. Une <b>pâleur</b> doit alerter et être transmise.</p><div class="grid g2"><div class="card"><h3>En bonne santé</h3><p>Respiration et cri vigoureux, tonus vif : clamper au minimum après 1 minute de vie (puis couper), sécher par tamponnement, envelopper tête et corps sauf la face (ou sac en polyéthylène), bonnet, couvrir la mère, surveiller. Transport dans un système fermé et fixé (incubateur, lit-auto).</p></div><div class="card"><h3>Pas en bonne santé</h3><p>Ne respire pas, ou ne crie pas, ou respiration anormale, ou hypotonique → avis médical en urgence <b>et</b> manœuvres de réanimation.</p></div></div><p class="small">PASS (Mémento) : <b>P</b>osition neutre de la tête, <b>A</b>spiration si besoin, <b>S</b>écher, <b>S</b>timuler.</p>' },
    { id: 'reanimer', t: 'Réanimer le nouveau-né', ic: 'heart', src: 'PR - Prise en charge du nouveau-né à la naissance',
      steps: ['Clamper le cordon dès que possible (puis le couper).', 'Placer le nouveau-né sur une surface plane recouverte d’un linge propre.', 'LVA : tête en position neutre ; si nécessaire, aspirer prudemment la bouche puis les narines.', 'État inchangé : 40 insufflations à l’air en 1 minute (thorax immobile après 5 insufflations → vérifier LVA et étanchéité du masque).', 'Mettre en fonction l’appareil de mesure de la fréquence cardiaque si disponible (SpO₂, monitoring).', 'État toujours inchangé : RCP avec apport d’O₂, SANS défibrillateur, 3 compressions pour 1 insufflation à une fréquence instantanée de 120/min.', 'Réévaluer toutes les minutes ; amélioration (crie, respire, s’agite) → surveillance étroite ; doute → reprendre la RCP.'],
      figs: [{ svg: 'nouveaune', cap: 'Logigramme du nouveau-né', txt: '<p>Si la FC est mesurable : &lt; 60/min → RCP 3/1 ; entre 60 et 100 → insufflations à l’air ; au-delà → surveillance étroite.</p>', src: 'PR - Prise en charge du nouveau-né, p. 3' }, { img: 'img/fiches/nouveau-ne-logigramme.jpg', cap: 'Logigramme original de la fiche', txt: '<p>Note : sur la fiche, la case « surveillance étroite » porte la mention « Mvts &gt; à 60 / min » ; la logique du logigramme (60–100 → insufflations) indique qu’elle concerne la FC au-dessus de cette plage.</p>', src: 'PR - Prise en charge du nouveau-né, p. 3' }] },
    { id: 'cordon', t: 'Soin au cordon ombilical', ic: 'list', src: 'FT - Soin au cordon ombilical',
      html: '<p><b>Quand :</b> après la naissance, après la 1re minute de vie ; parfois pendant l’accouchement si circulaire serré. <b>Matériel :</b> compresses stériles, 2 clamps de Barr, ciseaux stériles.</p>',
      steps: ['Changer les gants de l’accouchement ; gants et lunettes (ou visière) de protection.', 'Essuyer le cordon avec une compresse sur la zone des clamps.', 'Poser le 1er clamp à environ 10 à 15 cm de l’ombilic et le verrouiller.', 'Pincer le cordon avec une compresse stérile pour le vider de son sang sur environ 3 à 5 cm à partir du 1er clamp.', 'Placer le 2e clamp sur le cordon toujours pincé et le verrouiller.', 'Couper entre les deux clamps.', 'Recouvrir le cordon et le clamp côté nouveau-né d’une compresse stérile.'],
      after: '<ul class="trap"><li>Ne jamais tirer sur le cordon ; ne sectionner qu’entre les deux clamps.</li><li>1er clamp assez loin de l’ombilic pour ne pas pincer d’intestin.</li><li>Circulaire impossible à libérer : clamps plus rapprochés, section prudente avec les doigts en protection.</li><li>Nouveau-né en détresse : on peut s’affranchir de la désinfection (gants propres).</li><li>Cordon déjà rompu : un clamp côté nouveau-né, un côté mère après désinfection.</li></ul><p><b>Efficacité :</b> aucun saignement après la section.</p>' }
  ],
  key: ['Cri + tonus = bonne santé ; pâleur = alerte.', 'Bonne santé : clamper ≥ 1 min de vie ; sécher, bonnet, peau contre peau.', 'Détresse : clamper sans attendre, LVA tête neutre, aspiration bouche puis narines.', '40 insufflations à l’air en 1 min.', 'RCP 3/1 à 120/min, avec O₂, sans DAE ; réévaluer chaque minute.', 'Cordon : 1er clamp à 10–15 cm, vider 3–5 cm, 2e clamp, couper entre.'],
  traps: ['Basculer la tête du nouveau-né en arrière : position neutre.', 'Utiliser le DAE chez le nouveau-né à la naissance.', 'Couper le cordon en dehors des deux clamps.'],
  quiz: [
    { q: 'Délai minimal avant de clamper le cordon d’un nouveau-né en bonne santé :', c: ['1 minute de vie', 'Immédiatement', '10 minutes', 'Après la délivrance'], e: 'PR Nouveau-né : clamper au minimum après 1 minute de vie.', s: 'evaluer' },
    { q: 'Nouveau-né qui ne respire pas malgré LVA et aspiration :', c: ['40 insufflations à l’air en 1 minute', '30 compressions puis 2 insufflations', 'Pose du DAE', 'Sucre sous la langue'], e: 'Si l’état est inchangé : 40 insufflations à l’air en 1 min.', s: 'reanimer' },
    { q: 'Rythme de la RCP du nouveau-né :', c: ['3 compressions pour 1 insufflation, 120/min', '30/2 à 100/min', '15/2 à 110/min', '5/1 à 60/min'], e: 'RCP avec O₂, sans défibrillateur, 3/1 à 120/min.', s: 'reanimer' },
    { q: 'À quelle distance de l’ombilic pose-t-on le 1er clamp ?', c: ['Environ 10 à 15 cm', '1 cm', '30 cm', 'Contre l’ombilic'], e: 'FT Soin au cordon : 10 à 15 cm, pour ne pas pincer d’intestin.', s: 'cordon' },
    { q: 'Ordre d’aspiration chez le nouveau-né :', c: ['La bouche puis les narines', 'Les narines puis la bouche', 'Uniquement les narines', 'On n’aspire jamais'], e: 'Aspirer prudemment sa bouche puis ses narines.', s: 'reanimer' }
  ]
});

VSAV.chap({
  id: 'froid', part: 'p1', seq: S12, title: 'L’hypothermie et les gelures', short: 'Hypothermie & gelures', motif: 'snow', accent: '#2563eb',
  sources: ['PR - L’hypothermie (MAJ 05/2024)', 'PR - Les gelures (MAJ 05/2024)', 'PR - Bilan primaire (E)'],
  summary: 'Mobiliser sans à-coups, réchauffer selon la gravité, RCP adaptée ; gelures : pas de friction, pas plus de 39 °C.',
  why: '<b>Pourquoi mobiliser si doucement ?</b> Les victimes en hypothermie modérée ou sévère sont <b>très instables</b> : une mobilisation brutale peut déclencher un arrêt cardiaque. <b>Pourquoi ne pas réchauffer une gelure trop tôt ?</b> Une gelure réchauffée puis à nouveau exposée au froid s’aggrave ; et une chaleur &gt; 39 °C ou sèche crée des brûlures sur des tissus insensibles.',
  sections: [
    { id: 'hypo', t: 'Hypothermie : soustraire et classer', ic: 'snow', src: 'PR - L’hypothermie · PR - Bilan primaire',
      html: '<ul class="check"><li>Équipes spécialisées si nécessaire (montagne, GRIMP) ; mettre à l’abri du vent ; isoler dans un endroit chaud (véhicule, ambulance…).</li><li>Ôter les vêtements mouillés <b>en mobilisant délicatement</b> (couper si pénible ou douloureux).</li></ul>',
      figs: [{ svg: 'hypothermie', cap: 'Gravité de l’hypothermie', txt: '<p>Légère 35–32 °C, modérée 32–28 °C, sévère 28–24 °C, profonde &lt; 24 °C.</p>', src: 'PR - Bilan primaire' }] },
    { id: 'hypo-cat', t: 'Hypothermie : conduite selon l’état', ic: 'list', src: 'PR - L’hypothermie',
      html: '<div class="tw"><table><tr><th>État</th><th>Conduite</th></tr><tr><td>Pas de signe de vie</td><td>RCP avec précautions (ci-dessous)</td></tr><tr><td>Inconsciente, respire même très lentement</td><td>Conduite devant une perte de connaissance + réchauffer</td></tr><tr><td>Hypothermie modérée ou sévère</td><td>Allonger, mobiliser avec précaution, O₂, bilan pour avis, évacuation rapide, réchauffement actif (pas de frisson)</td></tr><tr><td>Hypothermie légère</td><td>Bilan, consignes, réchauffement passif (frissons intenses : protéger du vent et de l’humidité, drap + couverture) ; mobiliser si pas de moyen de réchauffement</td></tr></table></div><div class="callout warn"><b>RCP de la victime hypotherme</b>Rechercher les signes de vie <b>au moins 1 minute</b> (doute → RCP) ; paroi thoracique rigide (compressions et insufflations plus difficiles) ; confirmer avec un thermomètre hypotherme ; un cœur hypotherme peut ne pas répondre au choc : <b>3 chocs maximum si T° &lt; 30 °C</b> tant que la victime n’est pas réchauffée ; RCP seulement si l’équipe est en sécurité.</div>' },
    { id: 'gelures', t: 'Les gelures', ic: 'hand', src: 'PR - Les gelures',
      steps: ['Soustraire au froid : endroit chaud à l’abri du vent ; prévenir ou traiter l’hypothermie, prendre en charge un traumatisme associé.', 'Enlever doucement gants, bagues, chaussures ; desserrer élastiques et bandes auto-agrippantes.', 'Ôter les vêtements mouillés ; sécher sans frictionner les zones gelées.', 'Gelures mineures : réchauffer les extrémités contre la peau du sauveteur (main, aisselle) pendant 10 minutes.', 'Transmettre le bilan pour avis ; rhabiller avec des vêtements amples, secs et chauds ou une couverture.'],
      after: '<div class="callout bad"><b>Ne jamais réchauffer une gelure</b>s’il existe le moindre risque de nouvelle exposition au froid, ou à proximité d’une prise en charge médicale.</div><p>Sans risque de réexposition et si la prise en charge médicale tarde : gelures sévères de <b>moins de 24 h</b> immergées dans l’eau entre <b>37 et 39 °C</b> pendant <b>20 à 30 minutes</b> (ou jusqu’à coloration rouge/pourpre et souplesse). Sachets chauffants : jamais directement, tissu interposé. <b>&gt; 39 °C ou chaleur sèche : proscrit.</b> Cloques : gaze stérile (aussi entre les doigts), ne pas y toucher, éviter tout refroidissement.</p>' }
  ],
  key: ['Hypothermie < 35 °C ; légère 35–32, modérée 32–28, sévère 28–24, profonde < 24.', 'Mobiliser très prudemment, sans à-coups (risque d’arrêt cardiaque).', 'Signes de vie recherchés ≥ 1 min ; 3 chocs max si < 30 °C.', 'Légère avec frissons : réchauffement passif ; modérée / sévère sans frisson : actif.', 'Gelure : pas de friction ; eau 37–39 °C, 20–30 min, si < 24 h et pas de réexposition.'],
  traps: ['Frictionner une zone gelée.', 'Réchauffer une gelure alors que la victime va être réexposée au froid.', 'Chocs répétés sans limite chez une victime < 30 °C.'],
  quiz: [
    { q: 'Durée minimale de recherche des signes de vie chez une victime hypotherme :', c: ['Au moins 1 minute', '10 secondes', '5 minutes', 'Pas de recherche'], e: 'La recherche de ventilation ou de pouls est très difficile ; en cas de doute, débuter la RCP.', s: 'hypo-cat' },
    { q: 'Nombre maximal de chocs si T° < 30 °C tant que la victime n’est pas réchauffée :', c: ['3', '1', '5', 'Illimité'], e: 'PR Hypothermie : limiter à 3 défibrillations.', s: 'hypo-cat' },
    { q: 'Hypothermie légère avec frissons intenses : quel réchauffement ?', c: ['Passif', 'Actif', 'Bain chaud', 'Aucun'], e: 'Passif (protéger du vent, drap, couverture) ; actif pour modérée ou sévère sans frisson.', s: 'hypo-cat' },
    { q: 'Température de l’eau pour réchauffer une gelure sévère :', c: ['Entre 37 et 39 °C', '20 °C', '45 °C', 'Eau glacée'], e: 'Pendant 20 à 30 min, si gelure < 24 h et sans risque de réexposition.', s: 'gelures' },
    { q: 'Gelures mineures : réchauffement possible…', c: ['Contre la peau du sauveteur pendant 10 minutes', 'Par friction énergique', 'Avec un sèche-cheveux', 'Dans la neige'], e: 'Main, creux de l’aisselle, pendant 10 minutes.', s: 'gelures' }
  ]
});

VSAV.chap({
  id: 'intoxications', part: 'p1', seq: S12, title: 'Les intoxications', short: 'Intoxications', motif: 'skull', accent: '#4d7c0f',
  sources: ['PR - Les intoxications (MAJ 05/2024)', 'FT - Administration d’oxygène par inhalation', 'Mémento SSUAP (RAD-57)'],
  summary: 'Ingestion, opiacés, projection cutanée, environnement toxique.',
  why: '<b>Pourquoi ne pas faire vomir ?</b> Un toxique caustique brûle une seconde fois en remontant et la victime peut inhaler ses vomissements. <b>Pourquoi les opiacés sont-ils si dangereux ?</b> Ils dépriment la respiration jusqu’à l’arrêt par anoxie : la surveillance de la FR et l’antidote (naloxone) sauvent des vies.',
  sections: [
    { id: 'ingestion', t: 'Ingestion, injection', ic: 'list', src: 'PR - Les intoxications',
      html: '<ul class="check"><li>Bilans primaire et secondaire, gestes adaptés.</li><li>Circonstances, nature du ou des toxiques, dose supposée, heure de prise ; rechercher emballages et flacons.</li><li><b>Ne pas faire vomir ni boire la victime.</b></li><li>Transmettre le bilan, appliquer les consignes, surveiller.</li></ul>' },
    { id: 'opiaces', t: 'Opiacés / opioïdes', ic: 'lungs', src: 'PR - Les intoxications',
      html: '<p>Signes caractéristiques : <b>dépression respiratoire, troubles de la conscience, myosis</b> ; évolution possible vers la perte de connaissance et la mort par anoxie.</p>',
      steps: ['Dépression respiratoire (FR < 12/min) et/ou perte de connaissance : O₂ en inhalation.', 'Retirer les patchs de médicaments éventuels.', 'Surveiller la ventilation en permanence ; ventilation artificielle si FR < 6/min.', 'Demander un avis médical.', 'Naloxone intranasale disponible : 1 pulvérisation dans une narine dès 14 ans ; renouveler au bout de 2 à 3 min si pas d’amélioration ou réapparition des signes.'] },
    { id: 'peau-env', t: 'Projection cutanée et environnement toxique', ic: 'skull', src: 'PR - Les intoxications',
      html: '<p><b>Projection sur la peau :</b> brûlure → conduite face à une brûlure chimique ; sans brûlure → procédure de l’entreprise ou consignes transmises par les secours.</p><p><b>Environnement toxique :</b> se protéger (distance, supprimer la cause, aérer), soustraire la victime au plus vite. Nombreuses victimes → conduite adaptée ; nombre restreint → victimes à distance de l’atmosphère toxique, moyens spécialisés, regards et gestes adaptés à distance, bilan.</p><p>CO, fumées d’incendie : O₂ au MHC 15 L/min quelle que soit la SpO₂ (FT Inhalation) — voir aussi le tableau RAD-57 du chapitre <a href="#/c/securite/co">Sécurité</a>.</p>' }
  ],
  key: ['Ne pas faire vomir ni boire.', 'Garder emballages et flacons ; dose et heure.', 'Opiacés : dépression respiratoire + troubles de conscience + myosis.', 'FR < 12 : O₂ ; FR < 6 : ventilation artificielle.', 'Naloxone nasale dès 14 ans, renouvelable à 2–3 min.', 'CO / fumées : MHC 15 L/min quelle que soit la SpO₂.'],
  traps: ['Faire boire du lait ou faire vomir.', 'Oublier de retirer un patch de médicament.'],
  quiz: [
    { q: 'Victime ayant ingéré un toxique :', c: ['Ne pas la faire vomir ni boire', 'La faire vomir rapidement', 'Lui donner du lait', 'Lui faire boire beaucoup d’eau'], e: 'PR Intoxications.', s: 'ingestion' },
    { q: 'Signes caractéristiques d’un surdosage en opiacés :', c: ['Dépression respiratoire, troubles de conscience, myosis', 'Hyperthermie, sueurs, mydriase', 'Toux et sifflements', 'Hémorragie'], e: 'Myosis = pupilles serrées.', s: 'opiaces' },
    { q: 'À partir de quel âge la naloxone intranasale peut-elle être administrée ?', c: ['14 ans', '18 ans', '6 ans', 'Dès la naissance'], e: 'Chez toute victime âgée de 14 ans et plus.', s: 'opiaces' },
    { q: 'Opiacés : seuil de FR pour se tenir prêt à ventiler artificiellement :', c: ['FR < 6/min', 'FR < 20/min', 'FR < 12/min', 'FR > 30/min'], e: 'O₂ si FR < 12 ; ventilation artificielle si FR < 6.', s: 'opiaces' }
  ]
});

VSAV.chap({
  id: 'pendaison', part: 'p1', seq: S12, title: 'Pendaison, strangulation', short: 'Pendaison', motif: 'rope', accent: '#57534e',
  sources: ['PR - Pendaison - strangulation (MAJ 05/2024)'],
  summary: 'Soutenir, libérer le cou, allonger en protégeant le rachis, préserver les indices.',
  why: '<b>Pourquoi penser au rachis ?</b> La pendaison peut léser la colonne cervicale : on allonge en limitant ses mouvements et on stabilise la tête pendant le bilan. <b>Pourquoi ne rien déplacer ?</b> La situation peut relever d’une enquête : on ne détruit, jette ou déplace les objets que si c’est nécessaire.',
  sections: [
    { id: 'cat', t: 'Conduite à tenir', ic: 'list', src: 'PR - Pendaison - strangulation',
      html: '<div class="callout warn"><b>Indices</b>Ne pas détruire, jeter ou déplacer les objets plus que nécessaire. Demander les forces de l’ordre si nécessaire.</div>',
      steps: ['Soutenir la victime en cas de pendaison, en se faisant aider.', 'Desserrer et enlever rapidement toute source de constriction du cou.', 'Allonger la victime au sol en limitant autant que possible les mouvements du rachis cervical.', 'Réaliser le bilan en assurant une stabilisation du rachis.', 'Détresse vitale : conduite adaptée (arrêt cardiaque si pas de respiration, doute ou gasps ; perte de connaissance ; détresse respiratoire).', 'Sans détresse : compléter le bilan en stabilisant la tête, avis médical, immobilisation complète du rachis si nécessaire, surveillance.'] }
  ],
  key: ['Soutenir puis libérer le cou rapidement.', 'Allonger en limitant les mouvements cervicaux ; stabilisation de la tête.', 'Préserver les objets ; forces de l’ordre si nécessaire.'],
  traps: ['Couper le lien sans soutenir la victime.', 'Jeter le lien ou ranger la pièce.'],
  quiz: [
    { q: 'Première action devant une personne pendue :', c: ['La soutenir en se faisant aider et libérer le cou', 'Appeler la police et attendre', 'Prendre des photos', 'Couper le lien sans la tenir'], e: 'Soutenir, desserrer et enlever la constriction.', s: 'cat' },
    { q: 'Pourquoi limiter les mouvements du cou lors de l’allongement ?', c: ['Risque de lésion du rachis cervical', 'Pour ne pas réveiller la victime', 'Pour faciliter l’enquête', 'Ce n’est pas nécessaire'], e: 'Allonger en limitant les mouvements du rachis cervical et le stabiliser.', s: 'cat' }
  ]
});

VSAV.chap({
  id: 'piqures', part: 'p1', seq: S12, title: 'Piqûres et morsures', short: 'Piqûres et morsures', motif: 'bug', accent: '#65a30d',
  sources: ['PR - Piqûres et morsures (MAJ 05/2024)'],
  summary: 'Insectes, méduses et animaux marins, serpents, morsures, tiques.',
  why: '<b>Pourquoi un bilan urgent pour une « simple » piqûre ?</b> Une piqûre dans la bouche ou la gorge peut obstruer les voies aériennes en gonflant, et chez un allergique elle peut provoquer une réaction grave (œdème de Quincke, choc). Pour le reste, chaque animal a sa conduite : la chaleur inactive certains venins marins, l’aspiration est inutile et dangereuse pour les serpents.',
  sections: [
    { id: 'general', t: 'Dans tous les cas', ic: 'alert', src: 'PR - Piqûres et morsures',
      html: '<ul class="check"><li>Soustraire au danger ; hémorragie ou détresse → conduite adaptée.</li><li>Bilan en urgence si détresse vitale ou antécédent de réaction allergique grave dans ces circonstances.</li></ul>' },
    { id: 'insecte', t: 'Piqûre d’insecte', ic: 'bug', src: 'PR - Piqûres et morsures',
      steps: ['Retirer le plus vite possible le dard (abeille) avec une pince à écharde, sans écraser la poche à venin.', 'Bilan en urgence si la piqûre siège dans la bouche ou la gorge, ou si la victime est allergique.', 'Piqûre à la main : retirer bagues et bracelets avant le gonflement.', 'Appliquer du froid ; bouche ou gorge : faire sucer de la glace.', 'Allergique au venin d’hyménoptères : l’aider à s’injecter son traitement.', 'Conseiller de consulter si douleur ou gonflement persistent ou si la rougeur s’étend.'] },
    { id: 'marin', t: 'Animaux marins', ic: 'wave', src: 'PR - Piqûres et morsures',
      html: '<p><b>Méduses :</b> enlever les filaments (main gantée), arroser de <b>vinaigre</b> jusqu’à diminution de la douleur ; si elle persiste, mousse à raser ou sable puis racler sans frotter avec une carte rigide ; puis eau chaude (aussi chaude que tolérable) jusqu’à disparition de la douleur — à défaut, froid.</p><p><b>Vives, rascasses… :</b> zone dans l’eau chaude <b>30 minutes minimum</b> ; avis médical si nécessaire.</p>' },
    { id: 'serpent', t: 'Serpents, morsures, tiques', ic: 'list', src: 'PR - Piqûres et morsures',
      html: '<div class="callout bad"><b>Serpent</b>Jamais d’aspiration (bouche ou appareil), pas de sérum antivenimeux.</div><ul class="check"><li>Serpent : allonger, calmer, rassurer, ne pas mobiliser le membre, retirer bagues et bracelets proches, laver à l’eau ou au sérum physiologique sans frotter, pansement, bilan, surveillance.</li><li>Morsure animale ou humaine : lavage à l’eau ou au sérum physiologique, conduite face à une plaie grave.</li><li>Tique : tire-tique selon son guide, chercher d’autres tiques, consulter rapidement si rougeur ou éruption.</li><li>Contact de la peau avec la salive d’un animal errant : avis médical.</li></ul>' }
  ],
  key: ['Bouche / gorge ou allergique → bilan en urgence.', 'Dard : pince à écharde, sans écraser la poche à venin ; froid.', 'Méduse : vinaigre, mousse à raser / sable, racler, eau chaude.', 'Vive : eau chaude ≥ 30 min.', 'Serpent : jamais d’aspiration ni de sérum ; membre immobile.'],
  traps: ['Pincer le dard avec les doigts et vider la poche à venin.', 'Aspirer une morsure de serpent.', 'Frotter une piqûre de méduse.'],
  quiz: [
    { q: 'Piqûre de méduse : premier produit à appliquer ?', c: ['Du vinaigre', 'De l’eau douce froide', 'De l’alcool', 'De l’urine'], e: 'Arroser dès que possible avec du vinaigre de table.', s: 'marin' },
    { q: 'Morsure de serpent : que faut-il proscrire ?', c: ['L’aspiration du venin', 'Allonger la victime', 'Laver au sérum physiologique', 'Retirer les bagues'], e: 'Ne jamais pratiquer d’aspiration ni injecter de sérum antivenimeux.', s: 'serpent' },
    { q: 'Piqûre de guêpe dans la gorge :', c: ['Bilan en urgence, faire sucer de la glace', 'Attendre que ça passe', 'Faire boire chaud', 'Retirer le dard avec les doigts'], e: 'Bouche ou gorge : bilan en urgence et glace à sucer.', s: 'insecte' },
    { q: 'Piqûre de vive :', c: ['Eau chaude pendant 30 minutes minimum', 'Glace pendant 30 minutes', 'Vinaigre', 'Garrot'], e: 'Placer la zone dans l’eau chaude au moins 30 minutes.', s: 'marin' }
  ]
});

VSAV.chap({
  id: 'suspension', part: 'p1', seq: S12, title: 'Le syndrome de suspension', short: 'Syndrome de suspension', motif: 'mountain', accent: '#0d9488',
  sources: ['PR - Syndrome de suspension (MAJ 05/2024)'],
  summary: 'Dégager vite et en sécurité, membres inférieurs à l’horizontale, puis allonger.',
  why: '<b>Pourquoi les jambes à l’horizontale ?</b> Une personne suspendue immobile dans son harnais est menacée par la position elle-même : en attendant le dégagement (souvent par des équipes spécialisées montagne ou GRIMP), on essaie de maintenir ses membres inférieurs horizontaux — ou on lui demande de le faire si elle le peut.',
  sections: [
    { id: 'cat', t: 'Conduite à tenir', ic: 'list', src: 'PR - Syndrome de suspension',
      html: '<p>Dégagement <b>le plus rapide possible</b>, en toutes conditions de sécurité, souvent par des équipes spécialisées. En attendant : membres inférieurs à l’horizontale (par la victime elle-même si coopérante).</p><div class="tw"><table><tr><th>Victime décrochée</th><th>Conduite</th></tr><tr><td>A perdu connaissance</td><td>Allonger au sol, conduite devant une perte de connaissance (qui respire / qui ne respire pas ou gasps)</td></tr><tr><td>Consciente</td><td>Position allongée horizontale ; desserrer le harnais (le retirer ensuite si nécessaire avant l’évacuation) ; lésions associées (chute, électrocution) ; O₂ si nécessaire ; lutter contre l’hypothermie ; avis médical ; surveillance régulière</td></tr></table></div>' }
  ],
  key: ['Dégagement rapide et sécurisé (équipes spécialisées).', 'En attendant : membres inférieurs horizontaux.', 'Consciente décrochée : allongée horizontale, harnais desserré.', 'Rechercher lésions associées, lutter contre l’hypothermie.'],
  traps: ['Installer la victime décrochée en position assise.'],
  quiz: [
    { q: 'En attendant le dégagement d’une victime suspendue :', c: ['Essayer de maintenir ses membres inférieurs à l’horizontale', 'La laisser jambes pendantes', 'Couper la corde immédiatement', 'Lui faire boire de l’eau'], e: 'PR Syndrome de suspension.', s: 'cat' },
    { q: 'Victime consciente décrochée : position ?', c: ['Allongée horizontale, harnais desserré', 'Assise contre un rocher', 'Debout pour marcher', 'Tête en bas'], e: 'Position allongée horizontale puis desserrer le harnais.', s: 'cat' }
  ]
});

VSAV.chap({
  id: 'explosion', part: 'p1', seq: S12, title: 'Les victimes d’explosion (effet de souffle)', short: 'Explosion / effet de souffle', motif: 'blast', accent: '#b91c1c',
  sources: ['PR - Victimes d’explosion (MAJ 05/2024)'],
  summary: 'Sécurité des lieux, regroupement, bilan systématique pour toute personne exposée au souffle.',
  why: '<b>Pourquoi un bilan systématique même sans blessure visible ?</b> L’effet de souffle peut léser les organes internes sans trace extérieure : toute personne exposée fait l’objet d’un bilan transmis. À noter : les protections respiratoires des services publics ne protègent pas du risque respiratoire lié à l’explosion.',
  sections: [
    { id: 'cat', t: 'Conduite à tenir', ic: 'list', src: 'PR - Victimes d’explosion',
      steps: ['Garantir la sécurité des lieux et des intervenants.', 'Nombreuses victimes : les regrouper en un point et appliquer la conduite adaptée (repérage).', 'Nombre restreint : demander des moyens spécialisés si nécessaire, réaliser chaque regard et les gestes adaptés.', 'Transmettre le bilan — systématique pour toute personne exposée à l’effet de souffle — et appliquer les consignes.', 'Surveiller attentivement les victimes.'] }
  ],
  key: ['Sécurité d’abord.', 'Bilan transmis systématiquement pour toute personne exposée au souffle.', 'Les protections respiratoires ne protègent pas du risque respiratoire de l’explosion.'],
  traps: ['Laisser repartir une victime « indemne » exposée au souffle sans bilan.'],
  quiz: [
    { q: 'Pour qui la transmission du bilan est-elle systématique ?', c: ['Toute personne exposée à l’effet de souffle', 'Seulement les blessés visibles', 'Seulement les inconscients', 'Personne'], e: 'PR Victimes d’explosion.', s: 'cat' },
    { q: 'Nombreuses victimes d’une explosion :', c: ['Les regrouper en un point', 'Les disperser', 'Traiter d’abord la plus bruyante', 'Attendre la fin de l’incendie'], e: 'Regrouper les victimes en un point et appliquer la conduite adaptée.', s: 'cat' }
  ]
});

VSAV.chap({
  id: 'compression-membre', part: 'p1', seq: S12, title: 'La compression de membre', short: 'Compression de membre', motif: 'hand', accent: '#9a3412',
  sources: ['PR - La compression de membre (MAJ 05/2024)'],
  summary: 'Évaluer la durée de compression, avis médical ; garrot exceptionnel si > 4 h sans avis possible.',
  why: '<b>Pourquoi la durée compte-t-elle ?</b> La durée de compression conditionne la conduite décidée par le médecin. D’où la première action : <b>évaluer la durée par rapport à l’horaire de l’événement</b>. Le garrot avant dégagement n’est envisagé que dans des circonstances exceptionnelles, sans avis médical possible.',
  sections: [
    { id: 'cat', t: 'Conduite à tenir', ic: 'list', src: 'PR - La compression de membre',
      steps: ['Évaluer la durée de la compression par rapport à l’horaire de l’événement.', 'Réaliser chaque regard et les gestes adaptés (souvent limités : victime peu accessible, risques liés aux circonstances).', 'Transmettre un bilan pour obtenir un avis médical.', 'Protéger contre le froid, la chaleur, les intempéries et les risques du dégagement (projections).', 'Rassurer en parlant, surtout si la victime est inaccessible ; surveiller.'] },
    { id: 'exception', t: 'Circonstances exceptionnelles', ic: 'alert', src: 'PR - La compression de membre',
      html: '<p>Impossibilité de transmettre le bilan, pas d’équipe médicale dans un délai adapté, ou urgence absolue :</p><ul class="check"><li>Évaluer la durée de la compression.</li><li><b>Garrot si la compression dure plus de 4 heures</b> ou pour arrêter une hémorragie externe non accessible.</li><li>Dégager la victime dans tous les cas ; regards et gestes (immobilisation des fractures…) ; surveillance.</li></ul>' }
  ],
  key: ['Noter / évaluer la durée de compression.', 'Avis médical systématique.', 'Exceptionnel sans avis : garrot si > 4 h ou hémorragie inaccessible, puis dégager.'],
  traps: ['Dégager immédiatement sans avis alors qu’un avis est possible.'],
  quiz: [
    { q: 'Sans avis médical possible, au-delà de quelle durée de compression pose-t-on un garrot avant dégagement ?', c: ['4 heures', '30 minutes', '1 heure', '12 heures'], e: 'PR Compression de membre : durée de compression supérieure à quatre heures.', s: 'exception' },
    { q: 'Première action devant un membre comprimé :', c: ['Évaluer la durée de la compression', 'Dégager immédiatement', 'Poser un garrot', 'Masser le membre'], e: 'Évaluer la durée par rapport à l’horaire de l’événement.', s: 'cat' }
  ]
});

VSAV.chap({
  id: 'foudre', part: 'p1', seq: S12, title: 'Les accidents liés à la foudre', short: 'Foudre', motif: 'bolt', accent: '#4338ca',
  sources: ['PR - Accidents liés à la foudre (MAJ 05/2024)'],
  summary: 'Mise en sécurité, ACR, hypothermie, rachis, brûlures ; règles de sécurité pour l’équipe.',
  why: '<b>Pourquoi tant de règles pour l’équipe ?</b> Le risque de foudroiement persiste : un secouriste foudroyé devient victime. Les règles visent à réduire la surface exposée et à éviter les points hauts et conducteurs. Côté victime : un déficit neurologique peut venir de la foudre ou d’une chute — on traite comme un traumatisme du rachis.',
  sections: [
    { id: 'cat', t: 'Prise en charge de la victime', ic: 'list', src: 'PR - Accidents liés à la foudre',
      html: '<ul class="check"><li>Mise en sécurité ; extraction d’urgence si risque de suraccident (foudre, chute de pierres…).</li><li>Arrêt cardiorespiratoire → conduite adaptée. Hypothermie avérée ou à prévenir → conduite adaptée.</li><li>Troubles neurologiques (sensibilité, motricité) : difficile de distinguer foudre et traumatisme post-chute → <b>conduite traumatisme du dos et du cou</b>.</li><li>Brûlures → procédure brûlures thermiques ; trouble de conscience → conduite adaptée.</li></ul>' },
    { id: 'regles', t: 'Rappels de sécurité', ic: 'shield', src: 'PR - Accidents liés à la foudre',
      html: '<ul class="check"><li>Casque ; <b>distance &gt; 3 m entre individus</b> ; petits pas ; radios et téléphones au fond du sac.</li><li>S’éloigner des arêtes, sommets, arbres isolés ; éviter les clairières.</li><li>Montagne : cône de protection de rayon égal à la hauteur du pic dominant, à plus d’1 m de la paroi.</li><li>Grotte : au fond, à distance des parois, pas à l’entrée.</li><li>Risque élevé : assis en boule sur un sac ou une corde, se délester du matériel métallique.</li></ul>' }
  ],
  key: ['Extraction d’urgence si risque de suraccident.', 'Déficit neurologique → traiter comme un traumatisme du rachis.', 'Distance > 3 m entre individus, petits pas, éviter points hauts.', 'Risque élevé : assis en boule sur un sac / une corde.'],
  traps: ['Se regrouper serrés sous un arbre isolé.'],
  quiz: [
    { q: 'Distance minimale entre intervenants en cas de risque persistant de foudre :', c: ['Plus de 3 m', '50 cm', '1 m', '10 m'], e: 'PR Foudre : distance entre individus > 3 m.', s: 'regles' },
    { q: 'Victime foudroyée avec déficit moteur : quelle conduite ?', c: ['Celle du traumatisme du dos et du cou', 'Aucune particulière', 'La faire marcher', 'Position assise'], e: 'Difficile de rattacher le déficit à la foudre ou à la chute.', s: 'cat' },
    { q: 'Risque de foudre élevé, quelle posture ?', c: ['Assis en boule sur un sac ou une corde', 'Debout bras levés', 'Allongé à plat sur la roche', 'Sous un arbre isolé'], e: 'Et se délester du matériel métallique conducteur.', s: 'regles' }
  ]
});
