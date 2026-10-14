/* SUAP CHEF D’AGRÈS VSAV — fichier 1 : apports de connaissances (séquences CA VSAV 1 et CA VSAV 2)
   Sources : dossier « 1 - SUAP / 3 - Chef d’agrès VSAV / Apports de connaissances » du SDIS 51 :
   AC Les bilans (GDMC / Pôle SUAP, 22/03/2022), AC Physiologie humaine pour le secouriste (FMPA 2022),
   fiche La triade létale (v2022.1), Trauma du rachis (arbre décisionnel + études de cas, formation continue EPN nov. 2021),
   diaporama Civière bariatrique Lecco XL, Doctrine SINUS 2020 (V2.0) + diaporama AC SINUS, DTA Évènements majeurs
   et attentats V4 (24/11/2020), Formation attentat SDS (FMPA risque attentat, SSSM), Présentation RAD 57, SPDT - SPDTRE. */
var CAV_1_SEQ1 = 'CA VSAV 1 — Bilans et physiologie';
var CAV_1_SEQ2 = 'CA VSAV 2 — Situations particulières';

/* =====================================================================================
   CA VSAV 1 — CHAPITRE 1 : conduire les bilans
   ===================================================================================== */
VSAV.chap({
  id: 'cav-bilans', part: 'cav', seq: CAV_1_SEQ1,
  title: 'Conduire les bilans en chef d’agrès : décider et transmettre', short: 'Bilans : conduite du CA', motif: 'clip',
  sources: ['AC « Les bilans », SDIS 51 — GDMC / Pôle SUAP, 22/03/2022'],
  summary: 'Circonstanciel, primaire XABCDE, secondaire BCDEF, surveillance : à chaque étape, une décision du chef d’agrès (renforts, moyens médicaux, transmission).',
  why: '<b>Pourquoi le chef d’agrès doit-il « piloter » le bilan ?</b> L’équipier sait réaliser chaque geste ; le chef d’agrès, lui, doit savoir <b>quand</b> demander des moyens de secours supplémentaires, <b>quand</b> demander un moyen médical et <b>quand</b> transmettre à la coordination médicale. La nouvelle chronologie (bilan primaire XABCDE à la place du bilan d’urgence vitale) place ces décisions à des moments précis : les connaître, c’est ne perdre aucune minute pour une victime critique.',
  sections: [
    { id: 'chrono', t: 'La chronologie : quatre bilans, trois décisions', ic: 'clock', src: 'AC Les bilans 2022, diapos 4, 6, 10, 28, 40',
      html: '<p>L’organisation des bilans a changé. <b>Avant</b> : bilan circonstanciel, bilan d’urgence vitale, bilan complémentaire, surveillance. <b>Maintenant</b> : bilan <b>circonstanciel</b>, bilan <b>primaire</b> (X-A-B-C-D-E, qui <b>remplace le bilan d’urgence vitale</b>), bilan <b>secondaire</b> (B-C-D-E-F) et <b>surveillance</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Jalon de la frise</th><th>Ce que décide ou fait le chef d’agrès</th></tr></thead><tbody>' +
        '<tr><td>Départ, présentation sur intervention</td><td>Bilan circonstanciel (méthode des 3 S)</td></tr>' +
        '<tr><td>Demande de moyens de secours supplémentaires</td><td>Dès le circonstanciel : la situation dépasse-t-elle les moyens engagés ?</td></tr>' +
        '<tr><td>Contact avec la victime</td><td>Bilan primaire : traiter en premier ce qui tue en premier</td></tr>' +
        '<tr><td>Demande de moyens médicaux</td><td>À la fin du bilan primaire si la victime est <b>critique</b></td></tr>' +
        '<tr><td>Transmission du bilan à la coordination médicale</td><td>Après le bilan secondaire (ou immédiatement si victime critique) ; nouvelle transmission en cas d’aggravation</td></tr></tbody></table></div>',
      figs: [{ img: 'img/cav-1/bilans-chrono.jpg', cap: 'Frise chronologique des bilans', txt: '<p>Les jalons du haut sont des <b>décisions</b> (moyens supplémentaires, moyens médicaux, transmission) ; les blocs du bas sont les <b>bilans</b>. La flèche rouge rappelle que la surveillance est permanente et qu’une <b>aggravation</b> fait revenir au bilan primaire.</p>', src: 'AC Les bilans, SDIS 51 2022, diapo 40' }] },
    { id: 'troiss', t: 'Le bilan circonstanciel : la méthode des 3 S', ic: 'shield', src: 'AC Les bilans 2022, diapo 7',
      html: '<p>Le bilan circonstanciel permet d’<b>analyser l’intervention</b>, d’<b>aborder la victime en sécurité</b>, de <b>confirmer l’adéquation moyens / situation</b> et de <b>demander des renforts</b> si nécessaire. En cas de danger non maîtrisable : dégagement d’urgence.</p>' +
        '<div class="tw"><table><thead><tr><th>S</th><th>Question</th><th>Points à analyser</th></tr></thead><tbody>' +
        '<tr><td><b>Sécurité</b></td><td>Existe-t-il un danger ?</td><td>Prévention des dangers (intervenants, entourage, victime…) ; nature des dangers ; sont-ils maîtrisables ?</td></tr>' +
        '<tr><td><b>Scène</b></td><td>Que s’est-il passé ?</td><td>Nature d’intervention ; lieux (VP, domicile…) ; accès ; <b>cinétique</b></td></tr>' +
        '<tr><td><b>Situation</b></td><td>Les informations initiales en ma possession sont-elles correctes ?</td><td>Analyser la ou les victimes : nombre, position, attitude</td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Rôle du chef d’agrès</b> : c’est à ce moment que se joue l’adéquation des moyens. Une erreur de nombre de victimes ou une cinétique sous-estimée se corrige par une demande de renfort <b>précoce</b>, pas au moment du transport.</div>' },
    { id: 'primaire', t: 'Le bilan primaire XABCDE : gestes urgents à faire réaliser', ic: 'target', src: 'AC Les bilans 2022, diapos 10 à 25',
      html: '<p>Principe : <b>traiter en premier ce qui tue en premier</b>. Chaque lettre est appréciée rapidement (ventilation et circulation sur <b>10 secondes</b>) et débouche immédiatement sur un geste.</p>' +
        '<div class="tw"><table><thead><tr><th>Lettre</th><th>Objectif</th><th>Gestes urgents</th></tr></thead><tbody>' +
        '<tr><td><b>X</b> Hémorragie visible</td><td>Stopper la diminution du volume sanguin et maintenir en permanence l’arrêt de l’hémorragie</td><td>Compression manuelle, pansement compressif type israélien, garrot tourniquet, pansement hémostatique, en respectant la procédure</td></tr>' +
        '<tr><td><b>A</b> Airway</td><td>Liberté permanente des voies aériennes ; stabilisation du rachis cervical si suspicion de trauma (d’après le circonstanciel)</td><td>Retournement d’urgence, désobstruction, relâchement d’un lien constrictif, retrait de casque intégral, LVA adaptée, extraction digitale, aspiration. La stabilisation sera relâchée selon l’<b>algorithme décisionnel d’immobilisation du rachis</b></td></tr>' +
        '<tr><td><b>B</b> Breathing</td><td>Efficacité et maintien de la fonction respiratoire</td><td>Fréquence, amplitude, rythme, symétrie ; exposition du thorax (hématome, emphysème, plaie soufflante) ; SpO₂ à l’air ambiant sans retarder les gestes. Ventilation absente, inefficace ou agonique (amplitude faible et fréquence lente <b>≤ 6 mvt/min</b>) : pouls en simultané, RCP s’il est absent</td></tr>' +
        '<tr><td><b>C</b> Circulation</td><td>Fonction circulatoire, maîtrise des hémorragies externes, détection précoce d’une hémorragie interne</td><td>Pouls radial puis, s’il est absent, central (carotidien, fémoral) ; peau (pâleur, marbrures, extrémités froides, sueurs) ; <b>TRC &gt; 3 s = détresse circulatoire</b> ; palpation des « boîtes à sang ». ACR : RCP + DSA ; contrôler l’efficacité du geste du X</td></tr>' +
        '<tr><td><b>D</b> Disability</td><td>Fonction cérébrale et système nerveux central</td><td>Score de Glasgow, pupilles (diamètre, symétrie, réactivité), motricité et sensibilité des 4 membres, <b>glycémie capillaire si trouble de la conscience</b>, convulsions répétitives</td></tr>' +
        '<tr><td><b>E</b> Exposition</td><td>Pas de lésion vitale cachée ; lutter contre l’hypo- ou l’hyperthermie</td><td>On découvre, on regarde, on recouvre ; couvrir, refroidir si besoin, extraire du milieu hostile, lutter contre la triade létale</td></tr></tbody></table></div>' +
        '<p>Éléments recherchés au E : hypothermie (température corporelle <b>&lt; 35 °C</b>), hyperthermie (<b>&gt; 40 °C</b> avec trouble de la conscience = coup de chaleur), brûlure grave, traumatisme pénétrant dans une zone critique (tête, cou, tronc, racine de membre), section de membre.</p>' +
        '<div class="callout bad"><b>Glasgow &lt; 8</b> : la présence médicale est recommandée pour une prise en compte efficace des voies aériennes supérieures (intubation, dispositif invasif de ventilation par ISP…).</div>',
      figs: [{ img: 'img/cav-1/boites-a-sang.jpg', cap: 'Les « boîtes à sang »', txt: '<p>Cinq zones anatomiques critiques en cas d’hémorragie : <b>thorax, abdomen, bassin et les deux cuisses</b>. Le secouriste les observe et les palpe : <b>une palpation douloureuse = danger</b> (suspicion d’hémorragie interne).</p>', src: 'AC Les bilans, SDIS 51 2022, diapo 17' }] },
    { id: 'o2', t: 'L’oxygène : les seuils à faire appliquer', ic: 'lungs', src: 'AC Les bilans 2022, diapos 16, 19, 22',
      html: '<div class="tw"><table><thead><tr><th>Situation</th><th>Conduite</th></tr></thead><tbody>' +
        '<tr><td>SpO₂ <b>&lt; 94 %</b></td><td>Inhalation au MHC, débit initial <b>15 L/min</b> puis ajuster de <b>8 à 15 L/min</b> pour un objectif de SpO₂ de <b>94 à 98 %</b></td></tr>' +
        '<tr><td>Insuffisant respiratoire chronique (IRC) : SpO₂ <b>&lt; 89 %</b></td><td>MHC à <b>15 L/min</b> puis ajuster de <b>8 à 15 L/min</b> pour un objectif de <b>89 à 92 %</b></td></tr>' +
        '<tr><td>Signes de détresse respiratoire</td><td>O₂ au MHC en fonction de l’âge, <b>quelle que soit la SpO₂</b></td></tr>' +
        '<tr><td>Signes de détresse circulatoire</td><td>O₂ <b>quelle que soit la SpO₂</b></td></tr>' +
        '<tr><td>Signes de détresse neurologique</td><td>O₂ <b>suivant la saturation</b></td></tr></tbody></table></div>' +
        '<p>Dans tous les cas : mise en position d’attente adaptée.</p>' },
    { id: 'critique', t: 'Fin du bilan primaire : critique ou non critique ?', ic: 'alert', src: 'AC Les bilans 2022, diapo 26',
      html: '<p>Le bilan primaire se termine par <b>une seule question</b>, qui appartient au chef d’agrès : <b>ma victime est-elle critique ou non critique ?</b></p>' +
        '<div class="tw"><table><thead><tr><th>Victime critique</th><th>Victime non critique</th></tr></thead><tbody>' +
        '<tr><td><ul class="check"><li><b>Transmission du bilan</b></li><li><b>Demande de renforts adaptés (médical)</b></li><li>Vérification de l’efficacité des gestes d’urgence</li><li>Poursuite du bilan secondaire</li></ul></td><td><ul class="check"><li>Poursuite du bilan secondaire</li><li>Transmission du bilan à la coordination médicale ensuite</li></ul></td></tr></tbody></table></div>' +
        '<div class="callout warn">Pour une victime critique, on <b>n’attend pas</b> la fin du bilan secondaire pour transmettre : la demande de moyen médical part dès la fin du primaire.</div>' },
    { id: 'secondaire', t: 'Le bilan secondaire BCDEF : chiffrer, examiner, interroger', ic: 'list', src: 'AC Les bilans 2022, diapos 29 à 38',
      html: '<p>Il permet de <b>détailler et chiffrer</b> fonction vitale par fonction vitale, d’identifier les lésions non reconnues au primaire (examen région par région) et les problèmes moins graves. Il comporte : mesure des constantes, interrogatoire, examen complet (tête aux pieds), restriction et immobilisation du rachis si nécessaire, immobilisation des traumatismes, prise en charge d’une pathologie.</p>' +
        '<div class="tw"><table><thead><tr><th>Lettre</th><th>Contenu</th></tr></thead><tbody>' +
        '<tr><td><b>B</b></td><td>Respiration sur <b>1 minute</b> (fréquence, rythme, amplitude, symétrie) ; SpO₂ ; signes associés : difficulté à parler (compter &lt; 6), sueurs, cyanose, bruits anormaux (sifflement, gargouillement, râles), pincement des ailes du nez (enfant), tirage, balancement thoraco-abdominal, somnolence</td></tr>' +
        '<tr><td><b>C</b></td><td>Pouls sur <b>1 minute</b> (fréquence, rythme, amplitude bien frappé / filant, symétrie) ; TRC (détresse si &gt; 3 s) ; peau ; <b>tension artérielle</b> (aux 2 bras si nécessaire)</td></tr>' +
        '<tr><td><b>D</b></td><td>Évolution du Glasgow ; pupilles ; perte de connaissance initiale ; agitation ; convulsions ; troubles de la parole, de l’équilibre ; paralysie faciale, hémiplégie ; suspicion d’AVC → <b>FAST</b> (visage, bras, parole, temps)</td></tr>' +
        '<tr><td><b>E</b></td><td>Palper de la tête aux pieds, rechercher une pathologie, questionner sur les plaintes ; mesurer la température ; glycémie selon la situation ; surface brûlée (<b>score de Wallace</b>) ; immobilisation du rachis selon l’<b>algorithme décisionnel</b> ; fractures, plaies ; préparer au transport</td></tr>' +
        '<tr><td><b>F</b></td><td>Antécédents par le <b>SAMPLER</b> (plus complet que MHTA) : Symptômes, Allergies, Médicaments, Passé médico-chirurgical, Last meal (dernier repas), Événements, Risques (antécédents familiaux, facteurs aggravants, toxiques)</td></tr></tbody></table></div>' +
        '<p><b>Interrogatoire de la douleur — OPQRST</b> : Origine (début), Provoqué par (mécanisme), Qualité, Région, Sévérité (évaluation), Temps (depuis quand). Examen de chaque région : <b>regarder, palper, écouter, sentir</b>.</p>' },
    { id: 'surveillance', t: 'Surveillance et réévaluation : le rythme à imposer', ic: 'ecg', src: 'AC Les bilans 2022, diapo 41',
      html: '<p>La surveillance débute dès la fin du bilan secondaire et dure <b>jusqu’à la fin de la prise en charge</b>. Le secouriste contrôle respiration et circulation, toute modification de la conscience et des plaintes, et réconforte la victime en lui expliquant ce qui se passe.</p>' +
        '<div class="tw"><table><thead><tr><th>Victime</th><th>Contrôle des paramètres vitaux</th></tr></thead><tbody>' +
        '<tr><td>Présentant une détresse (état critique / UA)</td><td>Toutes les <b>5 minutes</b></td></tr>' +
        '<tr><td>Autres cas</td><td>Toutes les <b>10 à 15 minutes</b></td></tr></tbody></table></div>',
      steps: ['Réaliser les gestes de secours adaptés — en cours de transport, arrêter le VSAV si besoin', 'Refaire le bilan primaire', 'Chef d’agrès : transmettre un nouveau bilan à la régulation médicale'],
      stepsTitle: 'Si l’état de la victime s’aggrave' }
  ],
  key: ['Bilan primaire XABCDE = remplace le bilan d’urgence vitale', '3 S : Sécurité, Scène, Situation', 'Fin du primaire : victime critique → transmission + demande de moyen médical', 'TRC &gt; 3 s = détresse circulatoire', 'SpO₂ &lt; 94 % : MHC 15 L/min puis 8-15 L/min (objectif 94-98 %)', 'Glasgow &lt; 8 : présence médicale recommandée', 'Surveillance : 5 min si détresse, 10 à 15 min sinon', 'Aggravation : gestes, refaire le primaire, nouveau bilan au SAMU'],
  traps: ['Attendre la fin du bilan secondaire pour demander un moyen médical chez une victime critique.', 'Retarder les gestes de secours pour mesurer la SpO₂ à l’air ambiant.', 'Oublier de retransmettre un bilan quand l’état de la victime se dégrade pendant le transport.'],
  quiz: [
    { q: 'Que remplace le bilan primaire XABCDE ?', c: ['Le bilan d’urgence vitale', 'Le bilan circonstanciel', 'Le bilan de surveillance', 'Le bilan complémentaire'], e: 'Diapo « Le bilan primaire X-A-B-C-D-E : remplace le bilan d’urgence vitale ».', s: 'chrono' },
    { q: 'Votre victime est jugée critique à la fin du bilan primaire. Que faites-vous en priorité ?', c: ['Transmettre le bilan et demander des renforts médicaux, vérifier les gestes, puis poursuivre le secondaire', 'Terminer le bilan secondaire avant tout appel', 'Partir immédiatement sans transmettre', 'Refaire le bilan circonstanciel'], e: 'Fin du bilan primaire : victime critique → transmission du bilan, demande de renforts adaptés (médical), vérification de l’efficacité des gestes, poursuite du bilan secondaire.', s: 'critique' },
    { q: 'Quels sont les trois S du bilan circonstanciel ?', c: ['Sécurité, Scène, Situation', 'Signes, Symptômes, Surveillance', 'Sécurité, Secours, Soins', 'Scène, Saturation, Surveillance'], e: 'Méthodologie des 3 S : Sécurité (danger ?), Scène (que s’est-il passé ?), Situation (les informations initiales sont-elles correctes ?).', s: 'troiss' },
    { q: 'Victime sans antécédent, SpO₂ à 91 %. Quel débit initial au MHC ?', c: ['15 L/min puis ajustement de 8 à 15 L/min pour 94-98 %', '6 L/min fixe', '9 L/min puis arrêt à 94 %', 'Pas d’oxygène sans détresse'], e: 'SpO₂ < 94 % : MHC débit initial 15 L/min puis ajuster de 8 à 15 L/min pour un objectif de 94 à 98 %.', s: 'o2' },
    { q: 'Chez un insuffisant respiratoire chronique, quel est l’objectif de SpO₂ ?', c: ['89 à 92 %', '94 à 98 %', '100 %', '85 à 88 %'], e: 'IRC : oxygène si SpO₂ < 89 %, débit initial 15 L/min puis ajusté pour un objectif de 89 à 92 %.', s: 'o2' },
    { q: 'Quel temps de recoloration cutanée signe une détresse circulatoire ?', c: ['Supérieur à 3 secondes', 'Supérieur à 1 seconde', 'Supérieur à 10 secondes', 'Inférieur à 2 secondes'], e: 'Diapos C du bilan primaire et secondaire : détresse circulatoire si TRC supérieur à 3 secondes.', s: 'primaire' },
    { q: 'À quel rythme surveiller les paramètres d’une victime en détresse (UA) ?', c: ['Toutes les 5 minutes', 'Toutes les 10 à 15 minutes', 'Toutes les 30 minutes', 'Une seule fois avant le départ'], e: 'Paramètres contrôlés toutes les 5 minutes chez une victime en détresse (état critique / UA), toutes les 10 à 15 minutes dans les autres cas.', s: 'surveillance' },
    { q: 'Quel outil d’interrogatoire le bilan secondaire utilise-t-il pour les antécédents ?', c: ['SAMPLER', 'FAST', 'AVPU', 'OPQRST'], e: 'Le F (Familiar / antécédents) s’appuie sur le SAMPLER, plus complet que MHTA ; OPQRST sert à analyser la douleur, FAST à dépister l’AVC.', s: 'secondaire' }
  ]
});

/* =====================================================================================
   CA VSAV 1 — CHAPITRE 2 : physiologie et état de choc
   ===================================================================================== */
VSAV.chap({
  id: 'cav-physio', part: 'cav', seq: CAV_1_SEQ1,
  title: 'Physiologie des fonctions vitales et état de choc', short: 'Physiologie et choc', motif: 'lungs',
  sources: ['AC « La physiologie humaine pour le secouriste », SDIS 51, FMPA 2022 (MAJ 01/03/2022), parties I à V et VIII'],
  summary: 'Respiration, circulation, système nerveux : comment l’oxygène arrive aux cellules, ce qui se passe quand il manque, et pourquoi la tension chute en dernier.',
  why: '<b>Pourquoi un chef d’agrès doit-il connaître la physiologie ?</b> Pour <b>anticiper</b> au lieu de constater. Une victime qui « tient sa tension » peut être en état de choc compensé : la fréquence cardiaque et la fréquence respiratoire montent bien avant la chute de la pression artérielle. Le but de toute la chaîne de secours est le même : <b>éviter la mort cellulaire</b> en maintenant l’apport d’oxygène aux cellules.',
  sections: [
    { id: 'respi', t: 'La fonction respiratoire', ic: 'lungs', src: 'AC Physiologie 2022, diapos 5 à 8',
      html: '<p>On distingue la <b>respiration externe</b> (transfert de l’oxygène de l’atmosphère au sang) et la <b>respiration interne ou cellulaire</b> (diffusion de l’oxygène des globules rouges vers les tissus). Les artères pulmonaires amènent le sang désoxygéné du cœur aux poumons ; les échanges O₂ / CO₂ se font dans les capillaires qui recouvrent les alvéoles ; les veines pulmonaires ramènent le sang oxygéné au cœur.</p>' +
        '<div class="tw"><table><thead><tr><th>Atteintes des voies aériennes supérieures (VAS)</th><th>Atteintes des voies aériennes inférieures (VAI)</th></tr></thead><tbody><tr>' +
        '<td>Inconscience avec chute du tonus musculaire ; obstruction (OBVA) ; vomissements, sang ; traumatisme contondant ou pénétrant de la face antérieure du cou</td>' +
        '<td>Traumatisme contondant ; <b>pneumothorax</b> (air dans la cavité pleurale) ; <b>hémothorax</b> (sang dans l’espace pleural) ; <b>volet costal</b> (2 côtes adjacentes ou plus fracturées en plusieurs endroits) ; plaie soufflante ; pneumothorax ouvert</td></tr></tbody></table></div>' +
        '<p>Une respiration <b>anormale</b> (bruyante, difficulté à parler) attire l’attention au premier abord : risque d’<b>hypoxie</b> alvéolaire puis cellulaire (oxygène disponible insuffisant).</p>' },
    { id: 'circu', t: 'La fonction circulatoire', ic: 'heart', src: 'AC Physiologie 2022, diapos 10 à 15',
      html: '<p>Rôle : acheminer l’oxygène du sang jusqu’aux cellules et éliminer les déchets du métabolisme vers les poumons. Le sang contient les <b>globules rouges</b> (transport de l’oxygène), les <b>globules blancs</b> et anticorps (lutte contre l’infection), les <b>plaquettes et facteurs de coagulation</b>, des protéines et nutriments (glucose).</p>' +
        '<div class="tw"><table><thead><tr><th>Terme</th><th>Définition</th></tr></thead><tbody>' +
        '<tr><td>Systole</td><td>Force de l’onde pulsée par la contraction ventriculaire</td></tr>' +
        '<tr><td>Diastole</td><td>Pression au repos dans les vaisseaux entre les contractions</td></tr>' +
        '<tr><td>Pression différentielle</td><td>Différence systolique – diastolique : c’est elle que le secouriste <b>perçoit en prenant un pouls</b></td></tr></tbody></table></div>' +
        '<p>Atteintes : perte de sang (hémorragie), dysfonctionnement de la pompe cardiaque, vasodilatation → <b>hypoperfusion</b> (flux sanguin inadéquat vers les cellules) = hypoxie cellulaire.</p>' },
    { id: 'nerveux', t: 'La fonction nerveuse et le système nerveux autonome', ic: 'brain', src: 'AC Physiologie 2022, diapos 17 à 20',
      html: '<p><b>SNC</b> = encéphale (cerveau, cervelet, tronc cérébral) + moelle épinière : centre de régulation. <b>SNP</b> = nerfs crâniens et rachidiens : lignes de communication (voie sensitive afférente vers le SNC, voie motrice efférente vers muscles et glandes). Le <b>système nerveux autonome</b> dirige les fonctions involontaires ; ses deux branches s’opposent pour maintenir l’équilibre.</p>' +
        '<div class="tw"><table><thead><tr><th></th><th>Parasympathique</th><th>Sympathique</th></tr></thead><tbody>' +
        '<tr><td>Objectif</td><td>Conserver l’énergie, fonctions habituelles</td><td>Maintenir le sang oxygéné vers les tissus critiques en le détournant des zones non essentielles</td></tr>' +
        '<tr><td>Effets</td><td>↓ FC, ↓ FR, ↓ TA, vasodilatation des zones non essentielles</td><td>↑ FC, ↑ FR, ↑ TA, <b>vasoconstriction</b> des zones non essentielles (périphérie, intestins)</td></tr>' +
        '<tr><td>Situation</td><td>Repos, relaxation</td><td>Urgence, activité physique</td></tr></tbody></table></div>' },
    { id: 'moelle', t: 'Les atteintes médullaires du rachis : repères', ic: 'neck', src: 'AC Physiologie 2022, diapo 21',
      html: '<p>Rachis : <b>7 cervicales, 12 thoraciques (dorsales), 5 lombaires, 5 sacrées, 4 coccygiennes</b>. Une atteinte médullaire est une rupture totale ou partielle, ou une compression permanente ou transitoire de la moelle, d’origine traumatique ou dégénérative.</p>' +
        '<div class="tw"><table><thead><tr><th>Niveau</th><th>Signification</th></tr></thead><tbody>' +
        '<tr><td><b>C4</b></td><td>Commande respiratoire : lésion au-dessus = <b>arrêt respiratoire</b></td></tr>' +
        '<tr><td><b>T4</b></td><td>Ligne mamelonnaire (repère visuel, victime en décubitus dorsal)</td></tr>' +
        '<tr><td><b>T10</b></td><td>Ligne ombilicale (repère visuel, victime en décubitus dorsal)</td></tr></tbody></table></div>' +
        '<p>Ces lignes servent à <b>préciser la région douloureuse</b> ou la limite d’un trouble sensitif lors de la palpation, et donc à rédiger un bilan précis.</p>',
      figs: [{ img: 'img/cav-1/rachis-medullaire.jpg', cap: 'Rachis, moelle épinière et repères C4 / T4 / T10', txt: '<p>À gauche, les étages vertébraux ; au centre, la moelle et les nerfs rachidiens ; à droite, les territoires sensitifs : la bande T4 passe par les mamelons, T10 par l’ombilic.</p>', src: 'AC Physiologie humaine pour le secouriste, SDIS 51 2022, diapo 21' }] },
    { id: 'interactions', t: 'Interactions des fonctions vitales', ic: 'grid', src: 'AC Physiologie 2022, diapo 23',
      html: '<p>On peut vivre plusieurs semaines sans manger, plusieurs jours sans boire, mais <b>sans respirer</b> : quelques secondes → sensation de malaise ; quelques minutes → lésions cérébrales puis mort.</p>' +
        '<div class="tw"><table><thead><tr><th>Détresse</th><th>Conséquence</th></tr></thead><tbody>' +
        '<tr><td>Respiratoire</td><td>Risque d’<b>hypoxie</b> (oxygénation pulmonaire inadéquate)</td></tr>' +
        '<tr><td>Cardiaque / circulatoire (choc, hémorragie, ACR, FV)</td><td>Risque d’<b>hypoperfusion</b> ; atteinte neurologique et respiratoire par absence de circulation</td></tr>' +
        '<tr><td>Neurologique</td><td>Perte de vigilance → perte des mouvements respiratoires, perte du tonus (obstruction des VAS), perte des réflexes de toux et de déglutition → risque d’<b>asphyxie</b></td></tr></tbody></table></div>' +
        '<div class="callout warn">Une détresse n’arrive jamais seule longtemps : chacune entraîne les deux autres. C’est pourquoi le bilan primaire les recherche toutes, dans l’ordre.</div>' },
    { id: 'choc', t: 'L’état de choc : du métabolisme aérobie à l’anaérobie', ic: 'drop', src: 'AC Physiologie 2022, diapos 25 à 29',
      html: '<p><b>Définition</b> : changement des fonctions cellulaires suite à une <b>hypoperfusion</b>. Normalement, la cellule fonctionne en <b>aérobie</b> : O₂ + glucose = énergie (ATP) + eau + CO₂ et déchets ; cela suppose des voies aériennes dégagées, des poumons fonctionnels et une circulation correcte. Sinon, elle bascule en <b>anaérobie</b> : production d’énergie « de secours » sans oxygène, à partir des graisses, <b>environ 17 fois moins</b> productive, avec une quantité excessive d’<b>acide</b> (baisse du pH → acidose).</p>' +
        '<div class="tw"><table><thead><tr><th>Type de choc</th><th>Altération</th><th>Exemples</th></tr></thead><tbody>' +
        '<tr><td>Hypovolémique</td><td>Volume liquidien</td><td>Hémorragie (fréquent chez le traumatisé)</td></tr>' +
        '<tr><td>Distributif</td><td>Tonus vasculaire</td><td>Lésion de moelle épinière, choc anaphylactique</td></tr>' +
        '<tr><td>Cardiogénique</td><td>Contractilité du cœur</td><td>Infarctus du myocarde, tamponnade</td></tr></tbody></table></div>' },
    { id: 'ischemie', t: 'Sensibilité à l’ischémie et principe de Fick', ic: 'clock', src: 'AC Physiologie 2022, diapos 30 et 31',
      html: '<div class="tw"><table><thead><tr><th>Organes</th><th>Tolérance à l’ischémie</th></tr></thead><tbody>' +
        '<tr><td>Cœur, cerveau, poumons</td><td><b>4 à 6 minutes</b></td></tr>' +
        '<tr><td>Reins, foie, tube digestif</td><td><b>45 à 90 minutes</b></td></tr>' +
        '<tr><td>Muscles, os, peau</td><td><b>4 à 6 heures</b></td></tr></tbody></table></div>' +
        '<p>Le cerveau n’a <b>aucune réserve</b> : il dépend en permanence de la perfusion.</p>' +
        '<p><b>Principe de Fick</b> — trois composantes nécessaires à l’oxygénation des cellules : 1) apport d’O₂ aux globules rouges dans les poumons (<b>conserver l’oxygénation</b>) ; 2) apport des globules rouges aux tissus (<b>conserver le volume liquidien</b>) ; 3) délivrance de l’O₂ aux cellules (<b>conserver la perfusion</b>). Pour le secouriste : prévenir ou inverser le métabolisme anaérobie pour éviter la mort des cellules, des organes puis de la victime.</p>' },
    { id: 'compensation', t: 'La compensation physiologique : pourquoi la TA chute en dernier', ic: 'ecg', src: 'AC Physiologie 2022, diapo 32',
      html: '<div class="tw"><table><thead><tr><th></th><th>Choc compensé</th><th>Choc décompensé</th></tr></thead><tbody>' +
        '<tr><td>FC / FR</td><td>Tachycardie, tachypnée</td><td>Tachycardie et tachypnée puis <b>bradycardie, bradypnée</b></td></tr>' +
        '<tr><td>Pression artérielle</td><td>Maintenue</td><td>Chute</td></tr>' +
        '<tr><td>Conscience (AVPU)</td><td>A</td><td>V → P → U</td></tr>' +
        '<tr><td>Pouls</td><td>Radial filant, carotidien bien frappé</td><td>Radial absent, carotidien filant ; perfusion cellulaire insuffisante</td></tr></tbody></table></div>' +
        '<div class="callout warn">La diapositive associe le pouls radial absent à « TA &lt; 8 mmHg systolique » : l’unité paraît erronée (valeur vraisemblablement exprimée en cmHg). À faire préciser par le formateur ; ne pas retenir ce chiffre tel quel.</div>' +
        '<p><b>AVPU</b> (moins précis que Glasgow, plus simple) : <b>A</b>lert (consciente, éveillée), <b>V</b>erbal (réagit à la voix), <b>P</b>ain (réagit à la douleur), <b>U</b>nresponding (aucune réaction).</p>' +
        '<div class="callout bad">La tension artérielle est l’une des constantes qui <b>chute en dernier</b> : l’organisme compense d’abord en accélérant la fréquence cardiaque et respiratoire. D’où l’importance d’une <b>appréciation manuelle de la FC et de la FR</b>.</div>',
      figs: [{ img: 'img/cav-1/compensation-choc.jpg', cap: 'Compensé puis décompensé', txt: '<p>Le volume sanguin (ligne rouge) baisse en continu. Tant que FC et FR augmentent, la PA et la conscience restent stables (compensé). Puis la PA s’effondre, la conscience passe de V à U et FC / FR finissent par s’effondrer (décompensé).</p>', src: 'AC Physiologie humaine pour le secouriste, SDIS 51 2022, diapo 32' }] },
    { id: 'or', t: 'Les principes d’or du secouriste', ic: 'star', src: 'AC Physiologie 2022, diapo 42',
      html: '<div class="tw"><table><thead><tr><th>Lutter contre le métabolisme anaérobie</th><th>Respecter la période d’or</th></tr></thead><tbody>' +
        '<tr><td><ul class="check"><li>Maintenir les VAS perméables</li><li>Lutter contre les hémorragies</li><li>Oxygéner</li><li>Lutter contre l’hypothermie</li></ul></td><td><ul class="check"><li>Bilan efficient précoce</li><li>Régulation médicale précoce</li><li>Soins médicaux précoces</li></ul></td></tr></tbody></table></div>' +
        '<p>La colonne de droite est celle du <b>chef d’agrès</b> : c’est lui qui fait gagner ou perdre du temps à la régulation et à l’arrivée des soins médicaux.</p>' }
  ],
  key: ['Objectif : éviter la mort cellulaire', 'Anaérobie : environ 17 fois moins d’énergie + acidose', 'Ischémie : cœur, cerveau, poumons 4 à 6 min', 'TA = constante qui chute en dernier', 'C4 : lésion au-dessus = arrêt respiratoire', 'T4 ligne mamelonnaire, T10 ligne ombilicale', 'Chocs : hypovolémique, distributif, cardiogénique', 'Période d’or : bilan, régulation et soins médicaux précoces'],
  traps: ['Se rassurer devant une tension normale alors que FC et FR montent : choc compensé.', 'Confondre hypoxie (défaut d’oxygénation) et hypoperfusion (défaut d’irrigation).', 'Retenir le chiffre « TA < 8 mmHg » de la diapositive sans le faire vérifier.'],
  quiz: [
    { q: 'Quelle constante chute en dernier dans l’état de choc ?', c: ['La pression artérielle', 'La fréquence cardiaque', 'La fréquence respiratoire', 'La température'], e: 'Le corps compense d’abord en augmentant FC et FR ; la tension artérielle est l’une des constantes qui chute en dernier.', s: 'compensation' },
    { q: 'Combien de temps le cerveau tolère-t-il l’ischémie ?', c: ['4 à 6 minutes', '45 à 90 minutes', '4 à 6 heures', '30 secondes'], e: 'Cœur, cerveau, poumons : 4 à 6 minutes ; le cerveau n’a aucune réserve.', s: 'ischemie' },
    { q: 'Le métabolisme anaérobie produit, par rapport à l’aérobie…', c: ['Environ 17 fois moins d’énergie et un excès d’acide', 'Deux fois plus d’énergie', 'Autant d’énergie mais plus de CO₂', 'De l’énergie sans aucun déchet'], e: 'Production d’énergie environ 17 fois moindre, principal résidu : quantité excessive d’acide (acidose).', s: 'choc' },
    { q: 'Une lésion médullaire au-dessus de quel niveau provoque un arrêt respiratoire ?', c: ['C4', 'T4', 'T10', 'L1'], e: 'C4 = commande respiratoire : lésion au-dessus = arrêt respiratoire.', s: 'moelle' },
    { q: 'Un choc anaphylactique est un choc…', c: ['Distributif (altération du tonus vasculaire)', 'Hypovolémique', 'Cardiogénique', 'Obstructif'], e: 'Distributif : altération du tonus vasculaire (lésion de moelle, choc anaphylactique).', s: 'choc' },
    { q: 'Quels effets a le système nerveux sympathique ?', c: ['Augmentation FC, FR, TA et vasoconstriction périphérique', 'Baisse de FC, FR et TA', 'Vasodilatation des zones non essentielles', 'Ralentissement de la respiration au repos'], e: 'Sympathique : situation d’urgence, ↑ FC, ↑ FR, ↑ TA, vasoconstriction des zones non essentielles.', s: 'nerveux' },
    { q: 'Quelle pression le secouriste perçoit-il en prenant un pouls manuel ?', c: ['La pression différentielle', 'La pression diastolique seule', 'La pression veineuse', 'La pression intracrânienne'], e: 'La pression différentielle (systolique – diastolique) est celle que détecte le secouriste lors d’une prise de pouls.', s: 'circu' }
  ]
});

/* =====================================================================================
   CA VSAV 1 — CHAPITRE 3 : hypothermie et triade létale
   ===================================================================================== */
VSAV.chap({
  id: 'cav-triade', part: 'cav', seq: CAV_1_SEQ1,
  title: 'Hypothermie et triade létale', short: 'Triade létale', motif: 'snow',
  sources: ['AC « La physiologie humaine pour le secouriste », SDIS 51 FMPA 2022, parties VI et VII', 'Fiche « La triade létale », SDIS 51 GDMC / CFD / Pôle SUAP, v2022.1 (07/03/22)', 'Formation attentat SDS (FMPA risque attentat, SSSM), diapos 10 et 17'],
  summary: 'Hypothermie, acidose et coagulopathie s’entretiennent : l’hypothermie est le seul des trois maillons que le secouriste peut combattre seul.',
  why: '<b>Pourquoi parler de « triade » ?</b> Trois phénomènes interdépendants qui, si l’on ne fait rien, entraînent la mort : le froid aggrave l’acidose et la coagulopathie, qui elles-mêmes aggravent le saignement. La coagulopathie ne se traite que médicalement, l’acidose aussi ; mais <b>l’hypothermie peut être combattue sans médecin</b>, par des gestes simples — à condition qu’ils soient bien faits. Le chef d’agrès doit l’exiger dès le E du bilan primaire.',
  sections: [
    { id: 'hypo', t: 'L’hypothermie accidentelle : classification', ic: 'snow', src: 'AC Physiologie 2022, diapos 34 et 35',
      html: '<p>L’homme est homéotherme (≈ 37 °C). L’<b>hypothermie accidentelle</b> est une chute involontaire de la température corporelle <b>&lt; 35 °C</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>T° centrale</th><th>Gravité (stade)</th><th>Signes associés</th><th>Réponse physiologique</th></tr></thead><tbody>' +
        '<tr><td>35 &gt; T &gt; 32 °C</td><td>Légère (I)</td><td>Consciente, frissons</td><td>Compensation : tachycardie, tachypnée</td></tr>' +
        '<tr><td>32 &gt; T &gt; 28 °C</td><td>Modérée (II)</td><td>Troubles cognitifs (hallucinations), vigilance qui s’aggrave, disparition des frissons</td><td>Décompensation : bradycardie, bradypnée</td></tr>' +
        '<tr><td>28 &gt; T &gt; 24 °C</td><td>Sévère (III)</td><td>Perte de connaissance, pouls périphérique peu perceptible voire absent, absence totale de frissons</td><td>Bradycardie +++, bradypnée +++, chute de la TA</td></tr>' +
        '<tr><td>T &lt; 24 °C</td><td>Profonde (IV)</td><td>État de mort apparente évoluant vers l’ACR</td><td>ACR</td></tr></tbody></table></div>' +
        '<p class="small muted">La réponse physiologique de ce tableau ne vaut que pour l’hypothermie isolée ; un autre état de choc associé modifie la réponse.</p>' },
    { id: 'rechauffement', t: 'Thermorégulation et réchauffement', ic: 'sun', src: 'AC Physiologie 2022, diapos 36 et 37',
      html: '<p>Au froid, le sang chaud se concentre au centre du corps pour préserver les organes nobles ; la périphérie se refroidit. Réchauffer <b>brutalement</b> provoque une vasodilatation périphérique brutale : le sang froid périphérique revient vers le centre, refroidit les organes nobles (cœur) et expose à l’<b>ACR</b>. Le réchauffement <b>passif</b> (<b>0,5 à 2 °C/h</b>) est adapté : réchauffement central, vasodilatation lente, mélange optimisé.</p>',
      figs: [{ img: 'img/cav-1/rechauffement.jpg', cap: 'Réchauffement brutal ou passif', txt: '<p>De gauche à droite : agression par le froid, victime hypotherme (compensation), réchauffement brutal (aggravation, risque ACR), réchauffement passif progressif (adapté).</p>', src: 'AC Physiologie humaine pour le secouriste, SDIS 51 2022, diapo 37' }] },
    { id: 'triade', t: 'Les trois maillons de la triade', ic: 'alert', src: 'AC Physiologie 2022, diapo 39 ; fiche La triade létale v2022.1 ; Formation attentat SDS, diapo 17',
      html: '<div class="tw"><table><thead><tr><th>Maillon</th><th>Définition</th><th>Qui agit ?</th></tr></thead><tbody>' +
        '<tr><td><b>Hypothermie</b></td><td>Température &lt; 35 °C</td><td><b>Le secouriste</b>, sans présence médicale ; elle aggrave acidose et coagulopathie, et favorise le métabolisme anaérobie par vasoconstriction périphérique</td></tr>' +
        '<tr><td><b>Acidose</b></td><td>Accumulation d’acides = baisse du pH sanguin</td><td>Traitement médical ; le secouriste la combat en <b>conservant un métabolisme aérobie</b> (VAS, oxygène, hémorragies)</td></tr>' +
        '<tr><td><b>Coagulopathie</b></td><td>Défaillance du mécanisme normal de coagulation</td><td>Prise en charge <b>uniquement médicale</b></td></tr></tbody></table></div>' +
        '<div class="callout bad">La fiche SDIS 51 indique que <b>chaque degré perdu</b> fait perdre à l’organisme <b>10 % de facteur de coagulation</b> ; le diaporama attentat du SSSM formule « chaque degré perdu ampute de 10 % les fonctions d’hémostase », avec un impact significatif sur la survie dès <b>T &lt; 35-36 °C</b> et « pas ou peu de survivants » si <b>T &lt; 32-34 °C</b> (références d’études citées sur la diapositive).</div>' },
    { id: 'cat', t: 'Conduite à tenir contre la triade', ic: 'check', src: 'Fiche La triade létale v2022.1 ; AC Les bilans 2022, diapo 25 ; AC Physiologie 2022, diapo 40',
      html: '<p>La fiche triade létale reprend les lettres X et C du bilan primaire et y ajoute la lutte contre le froid.</p>',
      steps: ['X : arrêter immédiatement l’hémorragie visible (compression manuelle, pansement compressif type israélien, garrot tourniquet, pansement hémostatique)', 'X : maintenir en permanence l’arrêt de l’hémorragie', 'C : signes de détresse circulatoire → oxygène au MHC quelle que soit la SpO₂', 'E : couvrir la victime de façon adaptée et efficace', 'E : extraire rapidement et efficacement du milieu hostile', 'E : réchauffer la victime progressivement'],
      stepsTitle: 'Lutter contre la triade létale' },
    { id: 'couverture', t: 'Couvrir : un geste simple, efficace s’il est bien fait', ic: 'hand', src: 'AC Physiologie 2022, diapo 40 (notes formateur)',
      html: '<ul class="check"><li><b>Papillonner</b> la victime avec la couverture : cela limite le contact avec le sol — la victime se refroidit davantage par <b>conduction</b> au contact du sol froid que par l’air extérieur.</li><li><b>Border</b> la couverture : elle ne s’envole pas par vent.</li></ul>' +
        '<div class="callout warn">« Couvrir une victime est un geste simple, qui peut être efficace s’il est bien fait, mais inutile si celui-ci est mal fait. » Le chef d’agrès vérifie la qualité du geste, pas seulement sa réalisation.</div>',
      figs: [{ img: 'img/cav-1/couverture.jpg', cap: 'Couverture posée dessus ou papillonnée', txt: '<p>En haut : couverture simplement posée, la victime reste au contact du sol (à proscrire). En bas : victime emballée et bordée (correct).</p>', src: 'AC Physiologie humaine pour le secouriste, SDIS 51 2022, diapo 40' }] }
  ],
  key: ['Hypothermie accidentelle : T &lt; 35 °C', 'Stades : 35-32 légère, 32-28 modérée, 28-24 sévère, &lt; 24 profonde', 'Disparition des frissons = stade II ou plus', 'Réchauffement passif 0,5 à 2 °C/h ; brutal = risque d’ACR', 'Triade : hypothermie, acidose, coagulopathie', '1 degré perdu = 10 % de facteurs de coagulation', 'Seule l’hypothermie se combat sans médecin', 'Couverture papillonnée et bordée : isoler du sol'],
  traps: ['Poser une couverture sur la victime sans l’isoler du sol.', 'Réchauffer brutalement une victime en hypothermie sévère.', 'Croire qu’une victime qui ne frissonne plus va mieux.'],
  quiz: [
    { q: 'Quel maillon de la triade létale le secouriste peut-il combattre sans présence médicale ?', c: ['L’hypothermie', 'La coagulopathie', 'L’acidose', 'Aucun'], e: 'La coagulopathie et l’acidose se traitent médicalement ; l’hypothermie peut être combattue par de simples gestes secouristes.', s: 'triade' },
    { q: 'Combien de facteurs de coagulation l’organisme perd-il par degré de température perdu (fiche SDIS 51) ?', c: ['10 %', '1 %', '25 %', '50 %'], e: 'Fiche triade létale : « chaque degré perdu par l’organisme, il perd 10 % facteur de coagulation ».', s: 'triade' },
    { q: 'Une victime à 30 °C de température centrale est en hypothermie…', c: ['Modérée (stade II)', 'Légère (stade I)', 'Sévère (stade III)', 'Profonde (stade IV)'], e: '32 > T > 28 °C : hypothermie modérée, stade II, avec disparition des frissons.', s: 'hypo' },
    { q: 'Pourquoi le réchauffement brutal est-il dangereux ?', c: ['La vasodilatation brutale ramène le sang froid vers le cœur : risque d’ACR', 'Il provoque des brûlures', 'Il fait remonter trop vite la tension', 'Il est sans danger'], e: 'Réchauffement brutal : vasodilatation périphérique brutale, le sang froid pénètre en partie centrale, refroidit les organes nobles, risque d’ACR.', s: 'rechauffement' },
    { q: 'Pourquoi papillonner la victime dans la couverture ?', c: ['Pour limiter la perte de chaleur par conduction au contact du sol', 'Pour faciliter la prise de pouls', 'Pour permettre la ventilation de la peau', 'Pour que la couverture brille mieux'], e: 'La victime se refroidit plus par conduction avec le sol froid que par l’air extérieur ; border limite aussi l’envol par vent.', s: 'couverture' },
    { q: 'Le secouriste lutte contre l’acidose en…', c: ['Conservant un métabolisme aérobie de la victime', 'Administrant du bicarbonate', 'Réchauffant brutalement la victime', 'Faisant boire la victime'], e: 'L’acidose se traite médicalement ; le secouriste la combat en conservant le métabolisme aérobie (VAS, O₂, arrêt des hémorragies).', s: 'triade' }
  ]
});

/* =====================================================================================
   CA VSAV 1 — CHAPITRE 4 : trauma du rachis, l’arbre décisionnel
   ===================================================================================== */
VSAV.chap({
  id: 'cav-rachis', part: 'cav', seq: CAV_1_SEQ1,
  title: 'Trauma du rachis : l’arbre décisionnel d’immobilisation', short: 'Rachis : arbre décisionnel', motif: 'neck',
  sources: ['Trauma du rachis — trauma_arbre_decisionnel (diaporama)', 'Trauma du rachis — études de cas, formation continue des EPN (4, 18, 25 nov. 2021), conception ADC F. Vaxelaire (SDIS 55) et MHC G. Bois (SIS 68), relecture commission médicale du CNPC', 'AC Les bilans 2022, diapos 13 et 34'],
  summary: 'Quatre questions, dans l’ordre, pour décider d’une immobilisation corps entier — et savoir quand ne pas immobiliser.',
  why: '<b>Pourquoi un arbre de décision ?</b> L’immobilisation systématique a un coût : temps sur place, douleur, inconfort, et pour certaines victimes une mortalité plus élevée. L’arbre permet au chef d’agrès de décider <b>sur des critères objectifs</b> et de justifier sa décision dans le bilan. Il s’applique au <b>traumatisme contondant</b> ; les plaies pénétrantes isolées suivent une autre logique.',
  sections: [
    { id: 'arbre', t: 'L’arbre : quatre questions dans l’ordre', ic: 'list', src: 'trauma_arbre_decisionnel, diapo 1',
      html: '<p>Titre de l’arbre (mise à jour 2021) : <b>traumatisme contondant</b>. La stabilisation manuelle du rachis cervical posée au A du bilan primaire est relâchée ou poursuivie selon cet algorithme.</p>',
      steps: ['Les réponses de la victime sont-elles fiables ? NON → immobilisation du rachis (corps entier). OUI → question suivante', 'Présence de signes d’atteinte du rachis ou de la moelle ? OUI → immobilisation. NON → question suivante', 'Traumatisme à haut risque d’atteinte du rachis ? NON → pas d’immobilisation. OUI → question suivante', 'Âge > 65 ans ou antécédent à risque ? OUI → immobilisation. NON → pas d’immobilisation'],
      stepsTitle: 'Dérouler l’arbre',
      figs: [{ img: 'img/cav-1/arbre-rachis.jpg', cap: 'Arbre de décision pour indiquer l’immobilisation du rachis', txt: '<p>Toutes les sorties de droite mènent à l’<b>immobilisation corps entier</b> ; on n’arrive à « pas d’immobilisation » que par un haut risque absent, ou par un haut risque présent chez une victime de 65 ans ou moins sans antécédent à risque.</p>', src: 'Études de cas trauma du rachis, formation continue EPN 2021, diapo 5' }] },
    { id: 'fiabilite', t: '(1) Victime aux réponses non fiables', ic: 'psy', src: 'trauma_arbre_decisionnel, diapo 2 ; études de cas, diapo 4',
      html: '<ul class="check"><li>Présence d’une <b>détresse vitale</b></li><li><b>Altération du niveau de conscience</b></li><li>Non-coopération, difficultés de communication</li><li>Influence de l’<b>alcool</b> ou d’autres drogues</li><li>Présence d’une <b>atteinte traumatique sévère</b></li></ul>' +
        '<div class="callout warn"><b>Mises à jour 2021</b> — ajoutés : « présence d’une détresse vitale » et « présence d’une atteinte traumatique sévère ». Supprimés : « lésion qui détourne l’attention de la victime » et « nombreuses lésions qui empêchent de rechercher des signes d’atteinte du rachis ». Les études de cas continuent toutefois d’employer la notion de <b>lésion distrayante</b> (« une douleur peut en cacher une autre ») pour justifier la non-fiabilité.</div>' },
    { id: 'signes', t: '(2) et (3) Signes d’atteinte du rachis et de la moelle', ic: 'bone', src: 'trauma_arbre_decisionnel, diapo 2',
      html: '<div class="tw"><table><thead><tr><th>(2) Atteinte du rachis</th><th>(3) Atteinte de la moelle épinière</th></tr></thead><tbody><tr>' +
        '<td><ul class="check"><li>Douleur spontanée du rachis</li><li>Douleur du rachis à la mobilisation, à la marche</li><li>Raideur de nuque empêchant de tourner la tête</li><li>Douleur à la palpation prudente du rachis</li><li>Déformation évidente du rachis</li></ul></td>' +
        '<td><ul class="check"><li>Perte ou diminution de force / motricité des mains ou des pieds</li><li>Perte ou diminution de la sensibilité des membres</li><li>Engourdissement, décharges électriques (paresthésies)</li><li>Perte des urines ou des matières fécales</li><li>Érection chez l’homme (victime inconsciente, trouvée déshabillée)</li></ul></td></tr></tbody></table></div>' },
    { id: 'hautrisque', t: '(4) Traumatismes à haut risque et (5) antécédents', ic: 'car', src: 'trauma_arbre_decisionnel, diapo 2 ; études de cas, diapo 16',
      html: '<p><b>(4) Traumatismes à haut risque d’atteinte du rachis</b> :</p><ul class="check">' +
        '<li>Chute sur la tête d’une hauteur <b>&gt; 1 m</b> (plongeon : rachis cervical) ou chute sur les pieds ou les fesses <b>&gt; 3 m</b> (rachis dorso-lombo-sacré)</li>' +
        '<li>Passager d’un véhicule accidenté à grande vitesse (voies rapides, autoroutes, <b>&gt; 40 km/h</b> avec arrêt brutal contre un obstacle ou sur une courte distance <b>&lt; 10 m</b>, déformation de l’habitacle)</li>' +
        '<li>Absence de ceinture de sécurité (et déclenchement des airbags)</li><li>Retournement du véhicule (tonneaux)</li><li>Victime éjectée du véhicule</li><li>Véhicules à moteur de loisirs (jet-ski, quad, kart…)</li><li>Collision avec un 2 roues (conducteur ou passager)</li><li>Piéton renversé</li><li>Chute de cheval (jockey)</li></ul>' +
        '<p class="small muted">Les études de cas précisent « &gt; 1 mètre (5 marches) » et « obstacle fixe » ; l’arbre seul ne donne pas ces précisions.</p>' +
        '<p><b>(5) Antécédents à risque</b> : traumatisme vertébral ancien (fracture, luxation) ; chirurgie de la colonne ; maladie de la colonne ou des os qui la fragilise (ostéoporose).</p>' },
    { id: 'sans', t: 'Pas d’indication : faire se dégager la victime', ic: 'walk', src: 'Études de cas trauma du rachis 2021, diapo 24',
      html: '<p>« En l’absence d’indication d’immobilisation corps entier, rechercher la <b>coopération de la victime</b> et lui demander de <b>se dégager elle-même</b>, puis, si elle le peut, de s’allonger sur le brancard. <b>Interrompre tout mouvement</b> si la victime présente une aggravation de la douleur ou des signes d’atteinte de la moelle. »</p>' },
    { id: 'penetrant', t: 'Plaie pénétrante isolée : ne pas immobiliser', ic: 'alert', src: 'Études de cas trauma du rachis 2021, diapos 20 et 21',
      html: '<p>Victime présentant une plaie pénétrante isolée du thorax, du cou ou de la tête : « appliquer la conduite à tenir devant une plaie du thorax, du cou ou de la tête ; <b>ne pas immobiliser</b> la victime ; demander un avis médical ; respecter les consignes. »</p>' +
        '<div class="callout warn"><b>Justification</b> citée (directives norvégiennes 2017) : dans une étude rétrospective de 2010 (Haut et al.), les victimes de lésions pénétrantes immobilisées avaient une mortalité <b>deux fois supérieure (14,7 %)</b>, probablement parce que l’immobilisation retardait la chirurgie ; les lésions médullaires y étaient extrêmement rares (<b>0,01 %</b>).</div>' },
    { id: 'particuliers', t: 'Cas particuliers : victime agitée, rachis déformé', ic: 'psy', src: 'Études de cas trauma du rachis 2021, diapos 30 et 31',
      html: '<p><b>Victime agitée ou non coopérante</b> (intoxication alcoolique, enfant…) qui refuse toute immobilisation : ne pas l’immobiliser, la laisser s’installer dans la position la plus confortable en essayant de <b>maintenir à 2 mains la tête dans l’axe</b>, et <b>demander un avis médical</b>.</p>' +
        '<p><b>Déformation préexistante</b> (cyphose, scoliose) ou <b>victime très âgée</b> (ostéoporose) : l’immobilisation horizontale corps entier est difficile et peut être contre-productive. Respecter la position et la déformation, immobiliser dans la position la plus confortable : <b>seul le matelas immobilisateur à dépression</b> le permet.</p>' }
  ],
  key: ['Arbre valable pour le traumatisme contondant', 'Réponses non fiables → immobilisation corps entier', 'Signes du rachis ou de la moelle → immobilisation', 'Haut risque + (&gt; 65 ans ou ATCD) → immobilisation', 'L’âge seul ou la cinétique seule ne suffisent pas', 'Plaie pénétrante isolée : pas d’immobilisation, avis médical', 'Victime agitée : tête maintenue à 2 mains, avis médical', 'Rachis déformé : MID dans la position de confort'],
  traps: ['Immobiliser systématiquement toute victime de plus de 65 ans.', 'Immobiliser une plaie par balle isolée du thorax et retarder le transport.', 'Considérer comme fiable un motard conscient mais souffrant d’une fracture ouverte très douloureuse.', 'Forcer l’immobilisation d’une victime agitée qui la refuse.'],
  quiz: [
    { q: 'Première question de l’arbre décisionnel ?', c: ['Les réponses de la victime sont-elles fiables ?', 'La victime a-t-elle plus de 65 ans ?', 'La cinétique est-elle importante ?', 'Y a-t-il une douleur du rachis ?'], e: 'L’arbre commence par la fiabilité des réponses : si elles ne sont pas fiables, immobilisation corps entier.', s: 'arbre' },
    { q: 'Lequel de ces critères rend les réponses de la victime NON fiables ?', c: ['Influence de l’alcool', 'Âge supérieur à 65 ans', 'Chute de cheval', 'Antécédent de chirurgie du dos'], e: 'Critères de non-fiabilité : détresse vitale, altération de la conscience, non-coopération, alcool / drogues, atteinte traumatique sévère.', s: 'fiabilite' },
    { q: 'Quels critères ont été AJOUTÉS à la non-fiabilité en 2021 ?', c: ['Détresse vitale et atteinte traumatique sévère', 'Lésion qui détourne l’attention et lésions multiples', 'Âge et antécédents', 'Douleur et paresthésies'], e: 'Rajouts 2021 : présence d’une détresse vitale, présence d’une atteinte traumatique sévère. Suppressions : lésion qui détourne l’attention, nombreuses lésions.', s: 'fiabilite' },
    { q: 'Quelle hauteur de chute sur les pieds ou les fesses définit un haut risque ?', c: ['Plus de 3 mètres', 'Plus de 1 mètre', 'Plus de 5 mètres', 'Toute chute de sa hauteur'], e: 'Chute sur la tête > 1 m (rachis cervical) ; chute sur les pieds ou les fesses > 3 m (rachis dorso-lombo-sacré).', s: 'hautrisque' },
    { q: 'Victime d’une plaie pénétrante isolée du thorax : immobilisation du rachis ?', c: ['Non : CAT de la plaie, avis médical', 'Oui, systématiquement', 'Oui si la victime a plus de 65 ans', 'Seulement un collier cervical'], e: 'Plaie pénétrante isolée : ne pas immobiliser, demander un avis médical. Mortalité deux fois supérieure en cas d’immobilisation (étude Haut 2010).', s: 'penetrant' },
    { q: 'Sans indication d’immobilisation, comment sortir la victime ?', c: ['Lui demander de se dégager elle-même puis de s’allonger sur le brancard', 'La relever à 4 secouristes', 'L’extraire sur plan dur', 'Attendre le médecin'], e: 'Rechercher la coopération : la victime se dégage seule puis s’allonge si elle le peut ; interrompre tout mouvement en cas d’aggravation.', s: 'sans' },
    { q: 'Quel matériel permet d’immobiliser une victime âgée à la colonne déformée dans sa position de confort ?', c: ['Le matelas immobilisateur à dépression', 'Le plan dur', 'L’attelle cervico-thoracique', 'Le brancard cuillère seul'], e: 'Seul le matelas immobilisateur à dépression permet d’immobiliser dans la position la plus confortable en respectant la déformation.', s: 'particuliers' }
  ]
});

/* =====================================================================================
   CA VSAV 1 — CHAPITRE 5 : trauma du rachis, études de cas
   ===================================================================================== */
VSAV.chap({
  id: 'cav-rachis-cas', part: 'cav', seq: CAV_1_SEQ1,
  title: 'Trauma du rachis : dix cas pratiques corrigés', short: 'Rachis : cas pratiques', motif: 'target',
  sources: ['Trauma du rachis — études de cas (diaporama et support PDF), formation continue des EPN nov. 2021, relecture commission médicale du CNPC'],
  summary: 'Dix situations réelles à trancher avec l’arbre : immobiliser ou non, et pourquoi.',
  why: '<b>Pourquoi s’entraîner sur des cas ?</b> L’arbre est simple sur le papier, mais sur le terrain deux réflexes trompent : « il est âgé, j’immobilise » et « la voiture a fait des tonneaux, j’immobilise ». Les cas montrent que <b>l’âge seul</b> et <b>la cinétique seule</b> ne justifient pas l’immobilisation, alors qu’une <b>douleur distrayante</b> ou une <b>odeur d’alcool</b> la rendent obligatoire. Ouvre la réponse seulement après avoir déroulé l’arbre.',
  sections: [
    { id: 'methode', t: 'Méthode', ic: 'bulb', src: 'Études de cas trauma du rachis 2021',
      html: '<p>Pour chaque cas, réponds dans l’ordre : <b>1)</b> réponses fiables ? <b>2)</b> signes rachis / moelle ? <b>3)</b> traumatisme à haut risque ? <b>4)</b> âge &gt; 65 ans ou antécédent à risque ? Puis ouvre la correction.</p>',
      figs: [{ img: 'img/cav-1/arbre-rachis.jpg', cap: 'L’arbre à garder sous les yeux', txt: '<p>Chaque correction indique la branche par laquelle on sort de l’arbre.</p>', src: 'Études de cas trauma du rachis, formation continue EPN 2021, diapo 5' }] },
    { id: 'c1', t: 'Cas 1 — Homme, 54 ans, chute d’échelle', ic: 'target', src: 'Études de cas 2021, cas n° 1',
      html: '<p>Chute d’échelle, <b>perte de connaissance</b>.</p><details><summary><b>Réponse</b></summary><div class="callout ok"><b>Immobilisation indiquée.</b> Fiabilité : NON (altération du niveau de conscience). On sort de l’arbre dès la première question.</div></details>' },
    { id: 'c2', t: 'Cas 2 — Fille, 15 ans, chute de cheval', ic: 'target', src: 'Études de cas 2021, cas n° 2',
      html: '<p>Consciente, orientée. En tentant de se relever : vive douleur au dos. Douleur à la palpation du rachis thoracique. <b>Fourmillements (paresthésies)</b> des membres inférieurs.</p><details><summary><b>Réponse</b></summary><div class="callout ok"><b>Immobilisation indiquée.</b> Fiabilité : OUI. Signes d’atteinte du rachis : OUI (douleur à la palpation, douleur à la mobilisation) ; signes d’atteinte de la moelle : OUI (paresthésies).</div></details>' },
    { id: 'c3', t: 'Cas 3 — Homme, 32 ans, AVP VL / moto', ic: 'target', src: 'Études de cas 2021, cas n° 3',
      html: '<p>Motard conscient, orienté. <b>Fracture ouverte de la jambe droite</b> avec vive douleur. Pas de signe d’atteinte du rachis ni de la moelle.</p><details><summary><b>Réponse</b></summary><div class="callout ok"><b>Immobilisation indiquée.</b> Fiabilité : NON. « Une douleur peut en cacher une autre » : <b>lésion distrayante</b> — toute lésion produisant une douleur importante qui empêche de ressentir une autre douleur, en particulier au rachis cervical (fracture d’os long, traumatisme abdominal ou thoracique, lacération grave, arrachement de membre, écrasement, brûlure étendue…).</div></details>' },
    { id: 'c4', t: 'Cas 4 — Femme, 74 ans, chute de sa hauteur', ic: 'target', src: 'Études de cas 2021, cas n° 4',
      html: '<p>Consciente, orientée, <b>aucune plainte</b>. Pas de signe d’atteinte du rachis ni de la moelle. Pas d’antécédent à risque.</p><details><summary><b>Réponse</b></summary><div class="callout ok"><b>Immobilisation NON indiquée.</b> Fiabilité OUI ; signes NON ; traumatisme à haut risque NON → on sort à gauche. <b>L’âge (&gt; 65 ans) à lui seul ne justifie pas l’immobilisation.</b></div></details>' },
    { id: 'c5', t: 'Cas 5 — Homme, 75 ans, VL seul, plusieurs tonneaux', ic: 'target', src: 'Études de cas 2021, cas n° 5',
      html: '<p>Conscient, orienté, <b>sorti seul</b> du véhicule, marche à l’arrivée des secours. Pas de signe d’atteinte du rachis ni de la moelle.</p><details><summary><b>Réponse</b></summary><div class="callout ok"><b>Immobilisation indiquée.</b> Fiabilité OUI ; signes NON ; haut risque OUI (tonneaux) ; âge &gt; 65 ans OUI.</div></details>' },
    { id: 'c6', t: 'Cas 6 — Homme, 25 ans, VL seul, plusieurs tonneaux', ic: 'target', src: 'Études de cas 2021, cas n° 6',
      html: '<p>Même accident que le cas 5. Conscient, orienté, sorti seul, marche. Pas de signe, <b>pas d’antécédent à risque</b>.</p><details><summary><b>Réponse</b></summary><div class="callout ok"><b>Immobilisation NON indiquée.</b> Haut risque OUI mais âge ≤ 65 ans et pas d’ATCD → pas d’immobilisation. <b>La cinétique à elle seule ne justifie pas l’immobilisation.</b></div></details>' },
    { id: 'c7', t: 'Cas 7 — Homme, 29 ans, plaie par arme à feu au thorax', ic: 'target', src: 'Études de cas 2021, cas n° 7',
      html: '<p>Conscient. Plaie par arme à feu au thorax.</p><details><summary><b>Réponse</b></summary><div class="callout ok"><b>Immobilisation NON indiquée.</b> Plaie pénétrante isolée du thorax : CAT de la plaie, ne pas immobiliser, avis médical, respecter les consignes. L’arbre « traumatisme contondant » ne s’applique pas.</div></details>' },
    { id: 'c8', t: 'Cas 8 — Homme, 40 ans, VL contre un mur à 50 km/h', ic: 'target', src: 'Études de cas 2021, cas n° 8',
      html: '<p>Vitesse estimée 50 km/h. Conducteur <b>ceinturé</b>, airbag déclenché, non incarcéré. Conscient, orienté, pas de signe, pas d’antécédent à risque.</p><details><summary><b>Réponse</b></summary><div class="callout ok"><b>Immobilisation NON indiquée.</b> Haut risque OUI (&gt; 40 km/h contre un obstacle) mais âge ≤ 65 ans et pas d’ATCD. Demander à la victime de se dégager elle-même puis de s’allonger sur le brancard ; interrompre tout mouvement si la douleur augmente ou si des signes médullaires apparaissent.</div></details>' },
    { id: 'c9', t: 'Cas 9 — Femme, 34 ans, chute dans les escaliers', ic: 'target', src: 'Études de cas 2021, cas n° 9',
      html: '<p><b>Somnolente</b>, dégage une <b>odeur d’alcool</b>, présence de bouteilles.</p><details><summary><b>Réponse</b></summary><div class="callout ok"><b>Immobilisation indiquée.</b> Fiabilité NON (altération de la conscience, influence de l’alcool).</div></details>' },
    { id: 'c10', t: 'Cas 10 — Homme, 52 ans, SDF, chute de sa hauteur', ic: 'target', src: 'Études de cas 2021, cas n° 10',
      html: '<p>Odeur d’alcool, bouteilles. Hématome au front, <b>perte de connaissance passagère</b>. Conscient, désorienté, <b>agité</b>.</p><details><summary><b>Réponse</b></summary><div class="callout ok"><b>Immobilisation indiquée… mais agitation.</b> Fiabilité NON. Si la victime refuse toute immobilisation : ne pas l’immobiliser de force, la laisser dans la position la plus confortable en maintenant à 2 mains la tête dans l’axe, <b>demander un avis médical</b>.</div></details>' }
  ],
  key: ['L’âge seul ne justifie pas l’immobilisation (cas 4)', 'La cinétique seule ne la justifie pas non plus (cas 6, 8)', 'Haut risque + &gt; 65 ans = immobilisation (cas 5)', 'Lésion distrayante = réponses non fiables (cas 3)', 'Alcool ou somnolence = non fiable (cas 9)', 'Plaie pénétrante isolée : pas d’immobilisation (cas 7)', 'Victime agitée : tête à 2 mains + avis médical (cas 10)'],
  traps: ['Juger fiable une victime consciente qui souffre d’une lésion très douloureuse ailleurs.', 'Immobiliser par principe après des tonneaux une victime jeune, sans signe ni antécédent.'],
  quiz: [
    { q: 'Femme de 74 ans, chute de sa hauteur, aucune plainte, aucun signe, pas d’antécédent : immobilisation ?', c: ['Non : pas de traumatisme à haut risque', 'Oui : elle a plus de 65 ans', 'Oui : toute chute impose l’immobilisation', 'Collier cervical seul'], e: 'Cas 4 : fiabilité OUI, signes NON, haut risque NON → pas d’immobilisation ; l’âge seul ne suffit pas.', s: 'c4' },
    { q: 'Homme de 75 ans, tonneaux, sorti seul, marche, aucun signe : immobilisation ?', c: ['Oui : haut risque et âge > 65 ans', 'Non : il marche', 'Non : il est sorti seul', 'Seulement s’il le demande'], e: 'Cas 5 : haut risque OUI (tonneaux) et âge > 65 ans OUI → immobilisation corps entier.', s: 'c5' },
    { q: 'Homme de 25 ans, même accident (tonneaux), aucun signe, pas d’antécédent : immobilisation ?', c: ['Non : la cinétique seule ne suffit pas', 'Oui : les tonneaux imposent l’immobilisation', 'Oui : il est sous le choc', 'Collier cervical obligatoire'], e: 'Cas 6 : haut risque OUI mais âge ≤ 65 ans et pas d’ATCD → pas d’immobilisation.', s: 'c6' },
    { q: 'Motard conscient avec fracture ouverte très douloureuse de jambe, sans signe rachidien : pourquoi immobiliser ?', c: ['Lésion distrayante : réponses non fiables', 'Parce que c’est un motard', 'Parce que la fracture est ouverte', 'On n’immobilise pas'], e: 'Cas 3 : une douleur peut en cacher une autre ; la lésion distrayante rend les réponses non fiables → immobilisation.', s: 'c3' },
    { q: 'Victime agitée, alcoolisée, avec PC passagère, qui refuse l’immobilisation. Que faire ?', c: ['Position de confort, tête maintenue à 2 mains dans l’axe, avis médical', 'L’immobiliser de force sur le plan dur', 'La laisser sur place', 'La sangler sur une chaise'], e: 'Cas 10 : immobilisation indiquée mais agitation → ne pas immobiliser, position de confort, tête à 2 mains, avis médical.', s: 'c10' },
    { q: 'Conducteur ceinturé, 40 ans, 50 km/h contre un mur, aucun signe ni antécédent : comment le sortir ?', c: ['Lui demander de se dégager seul puis de s’allonger sur le brancard', 'Extraction sur plan dur après découpe', 'ACT puis plan dur', 'Attendre un médecin'], e: 'Cas 8 : pas d’indication → rechercher la coopération, la victime se dégage elle-même ; interrompre si aggravation.', s: 'c8' }
  ]
});

/* =====================================================================================
   CA VSAV 1 — CHAPITRE 6 : civière bariatrique Lecco XL
   ===================================================================================== */
VSAV.chap({
  id: 'cav-bariatrique', part: 'cav', seq: CAV_1_SEQ1,
  title: 'La civière bariatrique Lecco XL', short: 'Civière bariatrique', motif: 'stretcher',
  sources: ['Diaporama « Civière bariatrique Lecco XL », SDIS 51'],
  summary: 'Une civière d’évacuation jusqu’à 400 kg, dotée à l’équipe départementale GRIMP.',
  why: '<b>Pourquoi le chef d’agrès doit-il la connaître ?</b> Face à une victime de forte corpulence ou lourdement médicalisée, le brancardage avec le matériel du VSAV peut être impossible ou dangereux pour la victime et l’équipage. Savoir qu’un moyen adapté existe — et qu’il relève du GRIMP — permet de l’anticiper au lieu d’improviser.',
  sections: [
    { id: 'dotation', t: 'Dotation et usage', ic: 'stretcher', src: 'Diaporama Civière bariatrique Lecco XL, diapo 2',
      html: '<ul class="check"><li>Depuis <b>janvier 2015</b>, l’équipe départementale <b>GRIMP</b> est dotée d’une civière d’évacuation bariatrique (brancard Kong Lecco XL).</li>' +
        '<li>Évacuation de personnes <b>lourdement médicalisées</b> ou de <b>forte corpulence, jusqu’à 400 kg</b>.</li>' +
        '<li>Largeur maintenue à <b>75 cm</b> pour passer les ouvertures standard.</li>' +
        '<li>Livrée avec une <b>roue amovible</b> facilitant le déplacement au sol vers le moyen de transport ; pourrait aussi être engagée pour des brancardages <b>de longue durée ou difficiles</b>.</li></ul>' +
        '<p class="small muted">Le diaporama ne précise pas les modalités de demande de ce moyen : se référer aux consignes du CTA-CODIS.</p>',
      figs: [{ img: 'img/cav-1/lecco-roue.jpg', cap: 'Civière Lecco XL sur sa roue amovible', txt: '<p>Les roues sont montées au centre de l’armature : la civière se manœuvre comme une brouette jusqu’au vecteur de transport.</p>', src: 'Diaporama Civière bariatrique Lecco XL, SDIS 51' }] },
    { id: 'descriptif', t: 'Descriptif', ic: 'list', src: 'Diaporama Civière bariatrique Lecco XL, diapos 3 et 4',
      html: '<div class="tw"><table><thead><tr><th>Élément</th><th>Caractéristique</th></tr></thead><tbody>' +
        '<tr><td>Armature</td><td>Aluminium, entièrement démontable</td></tr><tr><td>Masse</td><td>Très légère : <b>15 kg</b></td></tr>' +
        '<tr><td>Enveloppe</td><td>Tissu très résistant, lavable</td></tr><tr><td>Transport</td><td>Sac de transport</td></tr>' +
        '<tr><td>Déplacement</td><td>Roues amovibles montées au centre de l’armature</td></tr></tbody></table></div>' },
    { id: 'maintien', t: 'Maintien de la victime', ic: 'strap', src: 'Diaporama Civière bariatrique Lecco XL, diapo 5',
      html: '<ul class="check"><li>1 <b>cale-tête</b> avec 1 sangle frontale</li><li>1 large sangle <b>thoracique et abdominale</b> (Velcro)</li><li>1 sangle au niveau du <b>bassin</b> (Velcro)</li><li>2 sangles au niveau des <b>jambes</b></li><li>Fermeture de l’enveloppe par <b>fermeture à glissière</b></li><li><b>4 autres sangles</b> complètent le sanglage</li></ul>',
      figs: [{ img: 'img/cav-1/lecco-sanglage.jpg', cap: 'Enveloppe et sanglage', txt: '<p>Enveloppe ouverte : on distingue le cale-tête en partie haute et les sangles transversales.</p>', src: 'Diaporama Civière bariatrique Lecco XL, SDIS 51' }] },
    { id: 'facade', t: 'Évacuation en façade', ic: 'rope', src: 'Diaporama Civière bariatrique Lecco XL, diapo 6',
      html: '<p>L’évacuation de la victime <b>en façade</b> est de la compétence de l’équipe départementale <b>GRIMP</b>. Un système de <b>pantoires réglables</b> permet d’incliner la civière pour le confort de la victime.</p>' }
  ],
  key: ['Civière Lecco XL : équipe départementale GRIMP depuis janvier 2015', 'Charge jusqu’à 400 kg', 'Largeur 75 cm : passe les ouvertures standard', 'Masse 15 kg, armature aluminium démontable', 'Roue amovible au centre de l’armature', 'Évacuation en façade : compétence GRIMP'],
  traps: ['Croire que la civière bariatrique fait partie de l’armement du VSAV : elle est dotée au GRIMP.'],
  quiz: [
    { q: 'Quelle charge maximale la civière Lecco XL accepte-t-elle ?', c: ['400 kg', '150 kg', '250 kg', '600 kg'], e: 'Diaporama : évacuation de personnes de forte corpulence jusqu’à 400 kg.', s: 'dotation' },
    { q: 'Quelle unité est dotée de la civière bariatrique ?', c: ['L’équipe départementale GRIMP', 'Chaque VSAV', 'Les VPRV', 'Le SSSM'], e: 'Depuis janvier 2015, l’équipe départementale GRIMP est dotée de cette civière.', s: 'dotation' },
    { q: 'Pourquoi sa largeur est-elle limitée à 75 cm ?', c: ['Pour passer par les ouvertures standard', 'Pour entrer dans un ascenseur de 1 personne', 'Pour réduire son poids', 'Pour la norme routière'], e: 'Sa largeur a été maintenue à 75 cm afin de permettre le passage par des ouvertures standard.', s: 'dotation' },
    { q: 'Quelle est la masse de la civière ?', c: ['15 kg', '5 kg', '30 kg', '45 kg'], e: 'Armature aluminium entièrement démontable, très légère : 15 kg.', s: 'descriptif' },
    { q: 'Qui réalise une évacuation en façade avec cette civière ?', c: ['L’équipe départementale GRIMP', 'L’équipage du VSAV', 'Le chef de groupe', 'Le SMUR'], e: 'L’évacuation en façade est de la compétence de l’équipe départementale GRIMP (pantoires réglables).', s: 'facade' }
  ]
});

/* =====================================================================================
   CA VSAV 2 — CHAPITRE 7 : SINUS
   ===================================================================================== */
VSAV.chap({
  id: 'cav-sinus', part: 'cav', seq: CAV_1_SEQ2,
  title: 'SINUS : dénombrer, catégoriser et tracer les victimes', short: 'SINUS', motif: 'list',
  sources: ['Doctrine de mise en œuvre du Système d’Information NUmérique Standardisé (SINUS), SDIS 51, 01/01/2020, version V2.0', 'Diaporama AC « SINUS », SDIS 51'],
  summary: 'Bracelet, fiche intermédiaire, fiche navette : ce que le chef d’agrès VSAV pose, remplit et transmet dès 6 victimes.',
  why: '<b>Pourquoi SINUS concerne-t-il le chef d’agrès ?</b> Parce que la traçabilité des victimes commence <b>au contact</b>, pas au PMA. Chaque bracelet posé par un VSAV alimente en temps réel le décompte des victimes, leur identité et leur catégorisation pour la préfecture, le SAMU, les forces de l’ordre, la justice et l’information des familles. Une victime évacuée sans bracelet ni fiche navette est une victime « perdue » pour le bilan officiel.',
  sections: [
    { id: 'principe', t: 'Principe du dispositif', ic: 'bulb', src: 'Doctrine SINUS 2020, p. 4-5',
      html: '<p>SINUS regroupe les renseignements de chaque victime sous un <b>identifiant unique (QR code)</b>, toutes rattachées à un même événement. Il produit en temps réel un <b>décompte</b> des victimes, leur <b>identité</b> et leur <b>catégorisation</b>, et facilite l’enquête judiciaire et l’information des familles. Il est intégré à la disposition spécifique <b>ORSEC NOVI</b>.</p>' +
        '<ul class="check"><li>Une base de données <b>SINUS</b>, une application terrain <b>ARCSINUS</b>, du matériel (bracelets, fiches intermédiaires, douchette, ordinateur portable, clé GSM).</li>' +
        '<li>Chaque victime, <b>quel que soit son état — UA, UR, impliquée (IMP) ou décédée (DCD)</b> — reçoit un <b>bracelet</b> et une <b>FMA</b> ou une <b>fiche intermédiaire</b> (strictement la même utilisation).</li>' +
        '<li>Les étiquettes détachables portent le même QR code : elles peuvent être apposées sur les <b>effets personnels</b> ou sur des <b>membres sectionnés</b>.</li>' +
        '<li>La <b>validation des identités</b> est du ressort <b>exclusif des forces de l’ordre</b>.</li></ul>' +
        '<p>Services utilisateurs : préfecture (dont la cellule d’information du public), SDIS, DDSP, gendarmerie, ARS, SAMU, procureur de la République, police judiciaire.</p>' +
        '<p class="small muted">Le nom développé varie : « Système d’Information NUmérique Standardisé » (doctrine), « Système d’Informations Numérisé Standardisé » (diaporama), « Système d’information numérique unique standardisé » (note de bas de page de la DTA attentats).</p>' },
    { id: 'seuils', t: 'Seuils, modes et phases', ic: 'grid', src: 'Doctrine SINUS 2020, p. 5-6',
      html: '<p>Pour aguerrir les sapeurs-pompiers, SINUS est mis en œuvre <b>dès 6 victimes</b> en intervention courante, et <b>systématiquement</b> dans un dispositif NOVI.</p>' +
        '<div class="tw"><table><thead><tr><th>Mode</th><th>Situation</th></tr></thead><tbody>' +
        '<tr><td>1. SINUS au quotidien</td><td>À partir de 6 victimes, sans PMA</td></tr>' +
        '<tr><td>2. SINUS NOVI</td><td>Interventions nécessitant un plan NOVI (PMA)</td></tr>' +
        '<tr><td>3. SINUS PRV</td><td>Un ou plusieurs PRV pour des évacuations rapides (réponse attentat)</td></tr></tbody></table></div>' +
        '<div class="tw"><table><thead><tr><th>Phase</th><th>Comment</th></tr></thead><tbody>' +
        '<tr><td>1. Dénombrement</td><td>Pose d’un bracelet sur chaque victime</td></tr>' +
        '<tr><td>2. Catégorisation</td><td>Au quotidien : <b>par le CA VSAV après avoir passé son bilan au SAMU</b> ; en NOVI : par un médecin au secrétariat d’entrée du PMA (ou du PRV)</td></tr>' +
        '<tr><td>3. Identification</td><td>Simultanée si la personne peut et veut décliner son identité ; sinon, ou pour un DCD, un <b>X</b> dans la rubrique nom (sans prénom). Personnel intervenant (SP, FDO, SAMU, AASC…) : <b>X</b> à la place du nom</td></tr>' +
        '<tr><td>4. Évacuation</td><td>Vecteur et destination, renseignés grâce à la <b>fiche navette</b> (partie bleue)</td></tr></tbody></table></div>' },
    { id: 'materiel', t: 'Le matériel : ce qu’il y a dans le VSAV', ic: 'ambulance', src: 'Doctrine SINUS 2020, p. 5-6',
      html: '<div class="tw"><table><thead><tr><th>Engin</th><th>Dotation SINUS</th></tr></thead><tbody>' +
        '<tr><td><b>Chaque VSAV</b></td><td><b>1 anneau de 10 bracelets</b> et <b>10 fiches intermédiaires SDIS</b></td></tr>' +
        '<tr><td>7 VLCG départ immédiat</td><td>Kit ARCSINUS : ordinateur + clé GSM + clé USB, lecteur de QR code, 30 bracelets (anneaux de 10), 30 FMA, 30 fiches intermédiaires, carnet de liaison, fiches mémento</td></tr>' +
        '<tr><td>Modules PMA et VPRV</td><td>5 anneaux de 10 bracelets et 50 fiches intermédiaires en réserve</td></tr></tbody></table></div>' +
        '<p><b>Fiche intermédiaire SDIS</b> : <b>partie rouge</b> qui reste autour du cou de la victime ; <b>partie bleue</b> = <b>fiche navette</b> à destination du CDG ARCSINUS.</p>' },
    { id: 'bracelet', t: 'Poser le bracelet', ic: 'hand', src: 'Diaporama AC SINUS, diapos 4 à 6 ; Doctrine SINUS 2020, p. 8',
      html: '<ul class="check"><li>Posé dans la <b>zone de l’avant</b> (chantier), avant le ramassage.</li><li>Sur le <b>poignet droit</b> ; nourrisson : <b>jambe droite</b> ; si impossible : sur la tête.</li><li><b>Chaque victime</b> a un bracelet, <b>même les DCD</b>.</li><li>1 bracelet = 1 victime = <b>6 étiquettes</b> (membres arrachés, effets personnels, suivi familial…).</li><li>Coller <b>2 étiquettes sur chaque fiche</b> (FMA ou fiche intermédiaire) : le talon d’évacuation sera détaché pour le transport.</li></ul>' +
        '<p class="small muted">Emplacement du bracelet et nombre d’étiquettes : précisés par le diaporama, pas par la doctrine.</p>',
      figs: [{ img: 'img/cav-1/sinus-bracelet.jpg', cap: 'Bracelet SINUS au poignet', txt: '<p>Le bracelet porte le QR code ; les étiquettes détachables reprennent le même code.</p>', src: 'Diaporama AC SINUS, SDIS 51, diapo 5' },
        { img: 'img/cav-1/sinus-fma.jpg', cap: 'Bracelet et fiche médicale de l’avant', txt: '<p>Les flèches montrent où coller les étiquettes : une sur le corps de la FMA, une sur le <b>talon d’évacuation</b> (fiche navette) qui sera détaché à la sortie.</p>', src: 'Diaporama AC SINUS, SDIS 51, diapo 6' }] },
    { id: 'ca', t: 'Tâches du chef d’agrès VSAV (SINUS au quotidien)', ic: 'clip', src: 'Doctrine SINUS 2020, p. 7 et 9',
      html: '<p>La doctrine liste les tâches des CA VSAV lorsque SINUS est activé :</p>',
      steps: ['Chef d’agrès : coller une étiquette du bracelet sur chaque feuillet de la fiche bilan', 'Chef d’agrès : effectuer le bilan et renseigner la fiche bilan VSAV', 'Chef d’agrès : remplir la fiche intermédiaire SDIS (partie rouge)', 'Chef d’agrès : transmettre le bilan au SAMU (si absence de SMUR)', 'Chef d’agrès : remplir la fiche navette (partie bleue)', 'Chef d’agrès : vérifier, avant de quitter les lieux, que les victimes portent bracelets et fiches', 'Chef d’agrès : reporter le numéro du bracelet SINUS dans la partie victime du CRSS'],
      stepsTitle: 'Le CA VSAV et SINUS',
      after: '<div class="callout bad"><b>Victime UA à évacuer avant l’activation de SINUS</b> : SINUS ne doit <b>en aucun cas retarder</b> l’évacuation d’une UA. Le chef d’agrès pose un bracelet (anneau du VSAV), remplit la fiche intermédiaire (parties rouge et bleue) et, <b>avant son départ vers le CH</b>, remet la <b>partie navette (bleue)</b> au CDG sur le terrain, qui fera le lien avec le CDG ARCSINUS.</div>' },
    { id: 'designe', t: 'Le CA désigné (CA ARCSINUS)', ic: 'team', src: 'Doctrine SINUS 2020, p. 8, 11 et 14',
      html: '<p>Le CDG ARCSINUS désigne un CA parmi les CA VSAV. Au quotidien, ce <b>CA désigné</b> :</p>' +
        '<ul class="check"><li>récupère les bracelets par anneau de 10 et les fiches intermédiaires ;</li><li>pose un bracelet et une fiche à <b>chaque victime, y compris les DCD</b>, et colle 2 étiquettes sur la fiche ;</li><li>complète et récupère la fiche navette des DCD ;</li><li>fait remplir la partie rouge par les autres CA ;</li><li>collecte les informations des UA, UR et IMP sur le carnet de liaison ;</li><li>transmet les fiches navettes complétées (destination, vecteur) au CDG ARCSINUS et le soutient.</li></ul>' +
        '<p>En mode PMA ou PRV, il travaille à l’avant ou au PRV, rend la souche de chaque anneau au CDG ARCSINUS pour en obtenir un nouveau, et renseigne pour les DCD la catégorie d’âge, le sexe et la case DCD. <b>L’accès aux victimes DCD en zone d’exclusion ne se fait qu’après accord des forces de l’ordre.</b></p>' },
    { id: 'impliques', t: 'Impliqués ou évacués ?', ic: 'walk', src: 'Doctrine SINUS 2020, p. 9',
      html: '<p>Lors d’interventions avec nombreux impliqués (feux urbains, train, AVP bus…), il faut dissocier :</p>' +
        '<ul class="check"><li>les <b>impliqués</b> : personnes ayant bénéficié d’un <b>bilan sapeur-pompier, même a minima</b> (par exemple une mesure de carboxyhémoglobine au <b>RAD 57</b>), regroupées sur un <b>PRV</b> et donc <b>équipées d’un bracelet</b> ;</li>' +
        '<li>les <b>évacués</b> : regroupés sur un <b>PRE</b>, <b>sans bracelet</b>.</li></ul>',
      figs: [{ img: 'img/cav-1/sinus-impliques.jpg', cap: 'Schéma de principe : impliqué ou évacué', txt: '<p>Une victime symptomatique devient impliquée (PRV, bilan, SINUS) ; une personne asymptomatique est évacuée (PRE) mais rejoint le PRV si un symptôme apparaît.</p>', src: 'Doctrine SINUS 2020, SDIS 51, p. 9' }] },
    { id: 'fma', t: 'FMA, talon d’évacuation et cas particuliers', ic: 'hospital', src: 'Diaporama AC SINUS, diapos 7 et 8 ; Doctrine SINUS 2020, p. 7 et 15',
      html: '<p><b>Fiche médicale de l’avant (FMA)</b> : fiche bilan simplifiée rédigée par le médecin (ou sous sa direction) au PMA. Identité remplie au secrétariat ; état et destination remplis par le médecin. Le <b>talon d’évacuation</b> est détaché au secrétariat de sortie : <b>le CA en charge du transport l’emporte</b> ; la FMA reste au PMA.</p>' +
        '<div class="tw"><table><thead><tr><th>Lieu</th><th>Action</th></tr></thead><tbody>' +
        '<tr><td>Chantier</td><td>Pose du bracelet + FMA si possible</td></tr><tr><td>Entrée PMA</td><td>Contrôle du bracelet + attribution de la FMA si absente</td></tr>' +
        '<tr><td>Sortie PMA</td><td>Contrôle du bracelet et de la FMA complète ; distribution des talons aux CA en charge des norias</td></tr><tr><td>Zone d’évacuation</td><td>Les CA récupèrent les talons d’évacuation</td></tr></tbody></table></div>' +
        '<p><b>Victime se présentant directement à l’hôpital</b> : comptée dans <b>SIVIC</b> (numéro commençant par <b>HP</b>) ; l’interconnexion complète le bilan terrain SINUS (numéro commençant par <b>TR</b>).</p>' +
        '<div class="callout warn"><b>Policiers, gendarmes ou sapeurs-pompiers blessés</b> : circuit d’évacuation obligatoirement court vers un CH identifié par un médecin en liaison avec le DSM, sans passage au PRV ni au PMA ni régulation par le CRAA 15 (informé ensuite). Un <b>VSAV réservé</b>, couvert par la fonction SSO, est dédié à cette mission et remplacé autant que de besoin. <b>L’identité et le nombre des personnels blessés ne doivent jamais être divulgués.</b></div>' +
        '<p class="small muted">PRV : « point de rassemblement des victimes » dans la doctrine SINUS, « point de regroupement des victimes » dans la DTA attentats.</p>' }
  ],
  key: ['SINUS au quotidien dès 6 victimes ; systématique en NOVI', 'Chaque VSAV : 1 anneau de 10 bracelets + 10 fiches intermédiaires', 'Bracelet pour TOUTES les victimes, DCD compris', 'Fiche intermédiaire : partie rouge au cou, partie bleue = navette', 'SINUS ne retarde jamais l’évacuation d’une UA', 'CA VSAV : n° de bracelet reporté dans le CRSS', 'Validation des identités : forces de l’ordre exclusivement', 'Impliqué = bilan SP (même RAD 57) + bracelet ; évacué = sans bracelet'],
  traps: ['Ne pas poser de bracelet sur un décédé.', 'Retarder l’évacuation d’une UA pour attendre l’activation de SINUS.', 'Partir vers l’hôpital en gardant la fiche navette (partie bleue) au lieu de la remettre au CDG.', 'Divulguer l’identité d’un intervenant blessé.'],
  quiz: [
    { q: 'À partir de combien de victimes SINUS est-il mis en œuvre en intervention courante dans la Marne ?', c: ['6 victimes', '3 victimes', '10 victimes', 'Uniquement en plan NOVI'], e: 'Doctrine 2020 : seuils adaptés pour aguerrir les SP, SINUS au quotidien à partir de 6 victimes ; systématique en NOVI.', s: 'seuils' },
    { q: 'Quelle dotation SINUS trouve-t-on dans chaque VSAV ?', c: ['1 anneau de 10 bracelets et 10 fiches intermédiaires', '30 bracelets et 30 FMA', '5 anneaux de 10 bracelets', 'Aucune, tout est dans la VLCG'], e: 'Un anneau de 10 bracelets et 10 fiches intermédiaires SDIS par VSAV, pour les victimes évacuées avant activation.', s: 'materiel' },
    { q: 'Vous devez évacuer une UA avant l’activation de SINUS. Que faites-vous de la partie bleue de la fiche intermédiaire ?', c: ['Je la remets au CDG sur le terrain avant de partir', 'Je la garde avec la victime jusqu’au CH', 'Je la jette', 'Je la donne au SAMU au téléphone'], e: 'Le CA pose un bracelet, remplit la fiche (rouge et bleue) et donne la partie navette (bleue) au CDG sur le terrain avant son départ vers le CH.', s: 'ca' },
    { q: 'Qui catégorise les victimes lors de SINUS au quotidien ?', c: ['Le CA VSAV après avoir passé son bilan au SAMU', 'Le CDG ARCSINUS', 'Les forces de l’ordre', 'Le CTA-CODIS'], e: 'Catégorisation : par le CA VSAV après son bilan au SAMU au quotidien, ou par un médecin à l’entrée du PMA / PRV.', s: 'seuils' },
    { q: 'Qui valide l’identité des victimes ?', c: ['Exclusivement les forces de l’ordre', 'Le chef d’agrès', 'Le médecin du PMA', 'La préfecture'], e: 'La validation des identités est du ressort exclusif des forces de l’ordre.', s: 'principe' },
    { q: 'Une victime décédée reçoit-elle un bracelet SINUS ?', c: ['Oui, chaque victime en reçoit un, DCD compris', 'Non, seulement les blessés', 'Seulement si elle est identifiée', 'Seulement en plan NOVI'], e: 'Chaque victime, quel que soit son état (UA, UR, IMP, DCD), reçoit un bracelet ; son identité est notée X si inconnue.', s: 'principe' },
    { q: 'Où reporter le numéro du bracelet SINUS à l’issue de l’intervention ?', c: ['Dans la partie victime du CRSS', 'Sur la main courante radio', 'Sur la carte vitale', 'Nulle part'], e: 'Tâche des CA VSAV : reporter le numéro du bracelet SINUS dans la partie victime du CRSS.', s: 'ca' },
    { q: 'Un pompier est blessé lors d’une intervention NOVI. Quelle règle s’applique ?', c: ['Circuit court vers un CH identifié, VSAV réservé, identité jamais divulguée', 'Passage obligatoire au PMA', 'Régulation classique par le 15 avant tout départ', 'Transport par ses collègues en VL'], e: 'Doctrine : circuit court sans PRV ni PMA ni régulation CRAA 15 (informé), VSAV réservé couvert par le SSO, identité et nombre jamais divulgués.', s: 'fma' }
  ]
});

/* =====================================================================================
   CA VSAV 2 — CHAPITRE 8 : attentats, doctrine et sécurité
   ===================================================================================== */
VSAV.chap({
  id: 'cav-attentat', part: 'cav', seq: CAV_1_SEQ2,
  title: 'Attentats : doctrine d’engagement et sécurité de l’équipage', short: 'Attentats : doctrine', motif: 'shield',
  sources: ['Doctrine opérationnelle Évènements majeurs et attentats (DTA) V4, SDIS 51, 24/11/2020 — parties « Menace », « Avant », « Centre d’incendie et de secours » et annexes VII, VIII (NRBC), IX'],
  summary: 'Sur-attentat, zonage, non-auto-engagement, comptes rendus : les règles qui protègent l’équipage du VSAV engagé sur un attentat.',
  why: '<b>Pourquoi une doctrine spécifique ?</b> Sur un attentat, le danger n’est pas terminé à l’arrivée des secours : retour d’un assaillant, tireur embusqué, engin explosif, véhicule bélier… Les secours deviennent des cibles. La doctrine du SDIS 51 fixe une réponse <b>graduée, sobre et pragmatique</b> : peu de moyens à l’avant, une réserve au point de regroupement, et un engagement toujours <b>coordonné avec les forces de l’ordre</b>. Le chef d’agrès doit connaître ces règles pour ne pas exposer son équipage.',
  sections: [
    { id: 'menace', t: 'La menace et le risque de sur-attentat', ic: 'alert', src: 'DTA attentats V4, p. 3',
      html: '<p>Les modes opératoires évoluent : actions de masse toujours possibles, mais actions plus ciblées en développement ; armes par destination (véhicules), explosifs ; risque NRBC probable.</p>' +
        '<div class="callout bad"><b>Sur-attentat</b> — toujours à prendre en compte : retour sur zone d’un assaillant, tireur embusqué, engin explosif, véhicule bélier, agression individualisée.</div>' +
        '<ul class="check"><li>Vigilance particulière envers les personnes et l’environnement ; redouter la présence de <b>pièges</b> (victimes, véhicules, locaux) ou d’agressions.</li><li>Toute situation ou comportement à risque est <b>signalé sans délai aux forces de police</b>.</li><li><b>Aucune action directe sur la menace</b> n’est engagée par les sapeurs-pompiers.</li></ul>' },
    { id: 'reponse', t: 'Une réponse graduée : premier départ et réserve', ic: 'team', src: 'DTA attentats V4, p. 3, 5, 14',
      html: '<p>L’effort porte sur la compréhension du risque et une réponse <b>graduée, sobre et pragmatique</b> : ne pas engager un dispositif trop important (réserve en cas d’actions multiples) et <b>éviter la saturation de l’avant</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Élément</th><th>Règle</th></tr></thead><tbody>' +
        '<tr><td>Premier départ « réponse attentat »</td><td>1 CDC, 1 CDG, <b>1 VSAV</b>, 1 FPT, 1 VPRV</td></tr>' +
        '<tr><td>Tenue</td><td><b>Tenue de feu complète</b> pour tous les intervenants (sauf intervenants GREX)</td></tr>' +
        '<tr><td>Renforts</td><td>Se stationnent au <b>CRM</b> (centre de regroupement des moyens) indiqué par le CODIS et <b>attendent un ordre d’engagement</b></td></tr>' +
        '<tr><td>Chaîne de commandement</td><td>Règle de <b>non-auto-engagement</b></td></tr>' +
        '<tr><td>Médias</td><td>Aucune information communiquée</td></tr></tbody></table></div>' +
        '<p>La remontée d’information <b>rapide</b> est la règle, même sans vision globale ; elle se distingue des comptes rendus opérationnels recoupés et validés.</p>' },
    { id: 'zonage', t: 'Le zonage et les points de regroupement', ic: 'pin', src: 'DTA attentats V4, p. 15-16, 24, annexes II et VIII',
      html: '<div class="tw"><table><thead><tr><th>Zone / point</th><th>Rôle</th></tr></thead><tbody>' +
        '<tr><td><b>Zone d’exclusion</b></td><td><b>Interdite aux sapeurs-pompiers</b> ; forces spécialisées</td></tr>' +
        '<tr><td><b>Zone contrôlée</b></td><td>Corridors d’extraction sécurisés par les forces de l’ordre ; PEV et PRV</td></tr>' +
        '<tr><td><b>Zone de soutien</b></td><td>Installation des moyens de secours, PMA, PC</td></tr>' +
        '<tr><td>PEV</td><td>Point d’extraction des victimes</td></tr><tr><td>PRV</td><td>Point de regroupement des victimes</td></tr>' +
        '<tr><td>PMA</td><td>Poste médical avancé</td></tr><tr><td>PRI / CADI</td><td>Point de regroupement des impliqués / centre d’accueil des impliqués</td></tr></tbody></table></div>' +
        '<p>Emplacement d’un PRV : <b>accessible, proximité, sécurité, ergonomie, évolutivité</b> ; en zone close, facilement sécurisable, protégée des tirs et projections. Le zonage est <b>mobile et évolutif</b>, à la diligence des forces de police : <b>repli des forces de sécurité = repli des moyens d’extraction</b>.</p>' +
        '<p class="small muted">La doctrine SINUS cite quatre critères pour le PRV (proximité, accessibilité, sécurité, ergonomie) ; la DTA en ajoute un cinquième, l’évolutivité. Le schéma de zonage de la DTA porte la mention « ne pas diffuser » : il n’est pas reproduit ici.</p>' },
    { id: 'avant', t: 'À l’avant : extraire sans s’exposer', ic: 'hand', src: 'DTA attentats V4, p. 14-16, 18',
      html: '<ul class="check"><li>Stationner les engins <b>en sécurité, avec possibilité de repli</b> ; prévoir dès que possible des zones de repli.</li>' +
        '<li>Engager un <b>minimum de personnel</b>, sous protection balistique si possible.</li>' +
        '<li>Se déplacer <b>à couvert</b> (mobilier urbain, écran) ; ne pas s’exposer inutilement.</li>' +
        '<li>Effort porté sur les victimes <b>sauvables et directement accessibles</b> ; disposer les victimes à couvert.</li>' +
        '<li><b>Contrôler l’absence de piège</b> (ceinture explosive, arme) avant l’arrivée au PRV.</li>' +
        '<li>Impliqués valides : regroupement <b>à la voix, à distance</b>, en zone contrôlée ; l’ouverture des vêtements est demandée <b>par les forces de police</b> (risque de ceinture explosive).</li>' +
        '<li>Appliquer le <b>damage control</b> et le <b>secourisme de l’avant</b> ; faire poser les bracelets SINUS au PRV.</li></ul>' +
        '<div class="callout warn">En l’absence des forces de l’ordre : rester en retrait, chercher un site adapté comme PRV, faire réaliser les gestes de survie (garrot, secourisme de l’avant) sur les victimes qui <b>viennent</b> au secours.</div>' },
    { id: 'cr', t: 'Rendre compte : message d’ambiance puis toutes les 10 à 15 minutes', ic: 'clip', src: 'DTA attentats V4, p. 15-16, 24',
      html: '<p>Le premier commandement rend compte <b>immédiatement</b> au CODIS par un <b>message d’ambiance</b>, puis par des <b>messages de situation toutes les 10 à 15 minutes</b>, en répondant à :</p>' +
        '<ul class="check"><li>De quoi s’agit-il ? Comment se caractérise la menace ?</li><li>Est-elle encore présente ? Vers où semble-t-elle se diriger ?</li><li>Volume estimé de victimes, <b>nombre d’UA</b> (même approximatif) ;</li><li>Forces présentes et actions engagées.</li></ul>' +
        '<p>Objectif fixé au COS : <b>évacuer les UA dans les 30 minutes</b> et envisager la stabilisation des UR sur le PRV.</p>' },
    { id: 'nrbc', t: 'Suspicion NRBC : la place du VSAV', ic: 'molecule', src: 'DTA attentats V4, p. 16-17 et annexe VIII',
      html: '<div class="tw"><table><thead><tr><th>Moyen</th><th>Tenue</th></tr></thead><tbody>' +
        '<tr><td>1<sup>er</sup> FPT</td><td>Tenue de feu / ARI (périmètre de sécurité, PEV)</td></tr>' +
        '<tr><td>Autres FPT, VLSM, UMD, CDG</td><td>Type 3 + ARF</td></tr><tr><td>VRT</td><td>Niveau de protection pouvant être supérieur (entrée en zone d’exclusion)</td></tr>' +
        '<tr><td><b>VSAV, VPCC</b></td><td><b>Tenue F1 — reste en zone de soutien</b></td></tr></tbody></table></div>' +
        '<p>Arrivée : <b>stationner à 100 m a priori</b>, <b>arrivée au vent</b>. Points d’extraction : PEV1 asymptomatiques valides, PEV2 symptomatiques valides, PEV3 invalides extraits de la zone d’exclusion. <b>Décontamination d’urgence</b> : protection des VAS, déshabillage de la première couche, rhabillage (couverture de survie ou tenue papier) pour éviter l’hypothermie. Sensibiliser les intervenants au <b>transfert de contamination</b>.</p>' },
    { id: 'cis', t: 'Au centre de secours et protection balistique', ic: 'shield', src: 'DTA attentats V4, p. 30-31 et annexes VI, VII',
      html: '<ul class="check"><li><b>Ne pas contacter le CTA-CODIS</b> : attendre d’être contacté.</li><li>Tous les personnels engagés, en renfort ou en reconstitution, se munissent de leur <b>tenue de feu</b> (vérifier qu’elle est complète avant l’engagement).</li><li>Armer les engins judicieusement : les plus jeunes ou les moins expérimentés restent en soutien.</li><li>Limiter les communications radio et téléphoniques avec le CTA-CODIS ; communication vers l’extérieur interdite.</li></ul>' +
        '<p><b>Protection balistique</b> : les VPRV transportent un lot de <b>8 packs individuels</b> chacun. La chasuble s’enfile <b>par la tête</b> sur la veste de TSI <b>manches baissées</b>, avec l’aide du binôme, puis on clipse les attaches latérales ; le retrait se fait en binôme (clips détachés, retrait par la tête).</p>' }
  ],
  key: ['Toujours envisager le sur-attentat', 'Aucune action directe sur la menace', 'Premier départ : 1 CDC, 1 CDG, 1 VSAV, 1 FPT, 1 VPRV', 'Tenue de feu complète pour tous', 'Renforts au CRM, pas d’auto-engagement', 'Zone d’exclusion interdite aux SP', 'Comptes rendus toutes les 10 à 15 min ; UA évacuées en 30 min', 'NRBC : VSAV en tenue F1, en zone de soutien, à 100 m au vent'],
  traps: ['S’auto-engager vers le site depuis son CIS ou appeler le CTA-CODIS pour proposer son aide.', 'Pénétrer en zone d’exclusion pour aller chercher une victime.', 'Faire ouvrir les vêtements d’un impliqué valide par un sapeur-pompier au contact.', 'Suivre une extraction alors que les forces de sécurité se replient.'],
  quiz: [
    { q: 'Quelle est la composition du premier départ « réponse attentat » ?', c: ['1 CDC, 1 CDG, 1 VSAV, 1 FPT, 1 VPRV', '3 VSAV et 1 FPT', '1 CDG et 2 VSAV', 'Tous les moyens disponibles du secteur'], e: 'DTA V4 : moyens limités, 1 CDC, 1 CDG, 1 VSAV, 1 FPT (CSP mixte ou CS Suippes), 1 VPRV.', s: 'reponse' },
    { q: 'Votre VSAV est engagé en renfort sur un attentat. Où vous rendez-vous ?', c: ['Au CRM indiqué par le CODIS, en attente d’un ordre', 'Directement au plus près des victimes', 'Au PMA de votre choix', 'Au CIS le plus proche du site'], e: 'Les renforts se stationnent au CRM indiqué par le CODIS et attendent un ordre d’engagement du CODIS ou du CDC de l’avant.', s: 'reponse' },
    { q: 'La zone d’exclusion est…', c: ['Interdite aux sapeurs-pompiers', 'Le lieu du PMA', 'La zone des renforts', 'Ouverte aux SP sous protection balistique'], e: 'Le COS rappelle que la zone d’exclusion est interdite aux SP ; les victimes sont extraites par les corridors vers les PEV et PRV.', s: 'zonage' },
    { q: 'À quel rythme le commandement de l’avant rend-il compte au CODIS ?', c: ['Message d’ambiance puis toutes les 10 à 15 minutes', 'Une fois en fin d’intervention', 'Toutes les heures', 'Uniquement sur demande'], e: 'Message d’ambiance immédiat puis messages de situation toutes les 10 à 15 minutes.', s: 'cr' },
    { q: 'En cas de suspicion NRBC, quelle tenue et quelle position pour le VSAV ?', c: ['Tenue F1, en zone de soutien', 'Type 3 + ARF, en zone d’exclusion', 'Tenue de feu + ARI au PEV1', 'Tenue civile au CRM'], e: 'Annexe NRBC : VSAV et VPCC en tenue F1, restent en zone de soutien ; stationnement à 100 m a priori, arrivée au vent.', s: 'nrbc' },
    { q: 'Votre CIS apprend qu’un attentat est en cours dans le département. Que fait le chef de garde ?', c: ['Il n’appelle pas le CTA-CODIS et attend d’être contacté', 'Il appelle le CTA-CODIS pour proposer ses moyens', 'Il envoie son VSAV sur place', 'Il informe la presse locale'], e: 'DTA, fiche chef de garde : ne pas contacter le CTA-CODIS, renforcer l’effectif, rappeler la règle de non-auto-engagement.', s: 'cis' },
    { q: 'Qui demande l’ouverture des vêtements d’un impliqué valide pour écarter une ceinture explosive ?', c: ['Les forces de police', 'Le chef d’agrès', 'L’équipier du VSAV au contact', 'Le médecin du PMA'], e: 'Regroupement à la voix à distance en zone contrôlée, demande d’ouverture des vêtements par les forces de police.', s: 'avant' }
  ]
});

/* =====================================================================================
   CA VSAV 2 — CHAPITRE 9 : blessés par armes de guerre, damage control
   ===================================================================================== */
VSAV.chap({
  id: 'cav-attentat-blesses', part: 'cav', seq: CAV_1_SEQ2,
  title: 'Blessés par armes de guerre : secourisme de l’avant et damage control', short: 'Attentats : blessés', motif: 'blast',
  sources: ['Formation attentat SDS — « Prise en charge des victimes dans un contexte d’attentat ou de fusillade », FMPA risque attentat, Service de santé et de secours médical SDIS 51', 'DTA attentats V4, SDIS 51, 24/11/2020, p. 14 et 26', 'Fiche « La triade létale », SDIS 51 v2022.1'],
  summary: 'Morts évitables, algorithme de prise en charge en nombreuses victimes, arrêt des hémorragies, lutte contre l’hypothermie : la logique « damage control ».',
  why: '<b>Pourquoi changer de logique ?</b> Face à des blessés par armes de guerre, le pronostic est <b>chirurgical</b> : la victime doit arriver vite au bloc. Le secouriste ne « répare » pas, il <b>contrôle les dégâts</b> : stopper les hémorragies, libérer les voies aériennes, lutter contre le froid, puis évacuer. C’est la course contre la montre de la <b>golden hour</b> ; le chef d’agrès doit prioriser, sans s’attarder sur une victime au détriment des autres.',
  sections: [
    { id: 'victimes', t: 'Quelles victimes ?', ic: 'alert', src: 'Formation attentat SDS, diapos 2 à 7',
      html: '<ul class="check"><li>Blessures par <b>arme à feu</b> ou victimes d’<b>explosion</b> (« armes et blessures de guerre »)</li><li><b>Hémorragies</b> internes ou externes</li><li>Blessures <b>abdominales ou thoraciques</b></li><li>Gros <b>délabrements de membres</b>, polycriblage</li><li>Répartition des victimes <b>inhabituelle</b> entre DCD, UA, UR et impliqués</li></ul>' },
    { id: 'evitables', t: 'Les morts évitables', ic: 'target', src: 'Formation attentat SDS, diapo 9 (étude Holcomb, forces spéciales US 2001-2004)',
      html: '<p>Selon l’étude citée, <b>20 à 30 % des décès</b> au combat auraient pu être évités par une prise en charge médico-chirurgicale adaptée. Trois causes de morts évitables :</p>' +
        '<div class="tw"><table><thead><tr><th>Cause</th><th>Part des morts évitables</th></tr></thead><tbody>' +
        '<tr><td><b>Hémorragies des membres</b></td><td><b>60 %</b></td></tr><tr><td>Pneumothorax compressif</td><td>33 %</td></tr><tr><td>Obstruction des voies aériennes</td><td>6 %</td></tr></tbody></table></div>',
      figs: [{ img: 'img/cav-1/morts-evitables.jpg', cap: 'Trois causes de morts évitables', txt: '<p>L’hémorragie des membres est de loin la première cause : c’est pourquoi le X (arrêt des hémorragies) passe avant tout le reste.</p>', src: 'Formation attentat SDS, SSSM SDIS 51, diapo 9' }] },
    { id: 'algo', t: 'Algorithme de prise en charge des blessés (ORSEC nombreuses victimes)', ic: 'list', src: 'Formation attentat SDS, diapo 12',
      html: '<p>Chaque question appelle, si la réponse est OUI, le geste indiqué ; sinon on passe à la question suivante.</p>',
      steps: ['Inconscient qui ne ventile pas ? → RCP seulement si les détresses vitales des autres victimes sont déjà prises en charge', 'Hémorragie externe ? → pansement compressif ; si inefficace, garrot tourniquet en cas de plaie garrottable', 'Inconscient qui ventile ? → PLS', 'Détresse respiratoire ? → position demi-assise avec oxygène ; pansement non occlusif en cas de plaie thoracique', 'Détresse circulatoire (pouls radial non perçu) ? → allongé à plat dos, jambes surélevées', 'Traumatisme ou plaie abdominale ? → allongé à plat dos, jambes fléchies', 'Autre → position la plus adaptée', 'Dans tous les cas : lutte contre l’hypothermie'],
      stepsTitle: 'Algorithme NOVI',
      after: '<div class="callout bad">En nombreuses victimes, la <b>RCP</b> d’un inconscient qui ne ventile pas n’est entreprise que si les détresses vitales des autres victimes sont <b>déjà prises en charge</b>.</div>' },
    { id: 'hemorragies', t: 'Stopper les hémorragies', ic: 'drop', src: 'Formation attentat SDS, diapos 13 à 16 ; AC Les bilans 2022, diapo 11',
      html: '<div class="tw"><table><thead><tr><th>Moyen</th><th>Précision du diaporama</th></tr></thead><tbody>' +
        '<tr><td>Pansement compressif</td><td>Prise en charge secouriste</td></tr>' +
        '<tr><td>Pansement israélien</td><td>Noté « (SMUR) »</td></tr>' +
        '<tr><td><b>Garrot tourniquet</b> (plaies garrottables)</td><td>Adulte : <b>VSAV, FPT, VLCG</b> ; enfant : <b>VPRV</b></td></tr>' +
        '<tr><td>Pansements hémostatiques</td><td>Notés « (SMUR) »</td></tr></tbody></table></div>' +
        '<p class="small muted">Divergence : le diaporama attentat attribue le pansement israélien et le pansement hémostatique au SMUR, alors que l’AC « Les bilans » (2022) les cite parmi les techniques d’arrêt du saignement du X. Se référer à l’armement réel du VSAV et à la procédure hémorragie en vigueur.</p>',
      figs: [{ img: 'img/cav-1/garrot.jpg', cap: 'Garrot tourniquet', txt: '<p>Garrot adulte présent dans les VSAV, FPT et VLCG ; les garrots enfant sont dans les VPRV (diaporama SSSM).</p>', src: 'Formation attentat SDS, SSSM SDIS 51, diapo 15' }] },
    { id: 'hypothermie', t: 'Lutter contre l’hypothermie', ic: 'snow', src: 'Formation attentat SDS, diapos 10 et 17 ; fiche La triade létale',
      html: '<p>La triade létale (hypothermie, acidose, coagulopathie) tue les blessés hémorragiques. Selon le diaporama, chaque degré perdu ampute de 10 % les fonctions d’hémostase, l’impact sur la survie est significatif dès <b>T &lt; 35-36 °C</b> et il y a « pas ou peu de survivants » si <b>T &lt; 32-34 °C</b>. Couvrir, isoler du sol et extraire rapidement du milieu hostile, pour <b>toutes</b> les victimes.</p>' },
    { id: 'damage', t: 'Le damage control médical : ce que fera l’équipe médicale', ic: 'hospital', src: 'Formation attentat SDS, diapos 18 à 22',
      html: '<p>Comprendre la suite de la chaîne aide le chef d’agrès à transmettre l’essentiel. Les actions suivantes sont <b>médicales</b> :</p>' +
        '<ul class="check"><li>Vérifier l’arrêt des hémorragies (« garrot desserré à 15 min » selon la diapositive) ;</li><li>Lutte contre l’hypothermie ;</li><li>Objectif : <b>pouls radial présent et victime consciente</b> ; remplissage a minima avec <b>hypotension permissive</b> ;</li><li>Amines vasopressives (noradrénaline) dès que le remplissage dépasse 1 à 1,5 litre ; acide tranexamique (Exacyl) 1 g en 20 minutes ; antalgie très prudente ;</li><li>Exsufflation des pneumothorax suffocants.</li></ul>' +
        '<p><b>Damage control surgery</b> : opération écourtée (gestes courts pour arrêter le saignement, fixateurs externes, fermeture temporaire), réanimation post-opératoire (réchauffement, correction du pH et de l’hémostase), puis réparation définitive une fois la victime stabilisée.</p>' +
        '<div class="callout warn">Le desserrage du garrot est un geste de l’équipe médicale décrit dans la partie « prise en charge médicale » du diaporama : il ne fait pas partie des gestes du secouriste.</div>' },
    { id: 'pedia', t: 'Particularités pédiatriques et chaîne des secours', ic: 'baby', src: 'Formation attentat SDS, diapos 23 et 24 ; DTA attentats V4, p. 24 et 26',
      html: '<div class="tw"><table><thead><tr><th>Repère</th><th>Valeur</th></tr></thead><tbody>' +
        '<tr><td>Enfant considéré comme un adulte</td><td><b>10 ans ou 30 kg</b></td></tr><tr><td>Estimation du poids</td><td><b>(âge × 2) + 8</b></td></tr></tbody></table></div>' +
        '<p><b>Le pronostic des victimes est chirurgical</b> : « course contre la montre », c’est la <b>golden hour</b>. Côté doctrine, le premier médecin sur place coordonne les gestes de survie réalisés par les secouristes pour les EU et UA, et débute les évacuations au plus tôt ; l’objectif est l’évacuation des UA dans les 30 minutes.</p>' }
  ],
  key: ['Pronostic chirurgical : golden hour', '20 à 30 % de morts évitables', '1<sup>re</sup> cause évitable : hémorragie des membres (60 %)', 'NOVI : RCP seulement si les autres détresses sont prises en charge', 'Garrot adulte : VSAV, FPT, VLCG ; enfant : VPRV', 'Pouls radial non perçu : à plat dos, jambes surélevées', 'Plaie abdominale : à plat dos, jambes fléchies', 'Enfant = adulte à 10 ans ou 30 kg ; poids = (âge × 2) + 8'],
  traps: ['Débuter une RCP prolongée alors que d’autres victimes ont des hémorragies non contrôlées.', 'Fermer une plaie thoracique par un pansement occlusif : le diaporama prescrit un pansement non occlusif.', 'Négliger l’hypothermie chez un blessé hémorragique en été.'],
  quiz: [
    { q: 'Quelle est la première cause de mort évitable chez le blessé par arme de guerre ?', c: ['L’hémorragie des membres', 'Le pneumothorax compressif', 'L’obstruction des voies aériennes', 'L’hypothermie'], e: 'Étude citée : hémorragies des membres 60 %, pneumothorax compressif 33 %, obstruction des voies aériennes 6 %.', s: 'evitables' },
    { q: 'En nombreuses victimes, un inconscient qui ne ventile pas…', c: ['N’a une RCP que si les détresses vitales des autres victimes sont déjà prises en charge', 'A toujours une RCP immédiate', 'Est mis en PLS', 'Est évacué en priorité'], e: 'Algorithme ORSEC NOVI : RCP si détresses vitales des autres victimes déjà prises en charge.', s: 'algo' },
    { q: 'Hémorragie externe d’un membre en contexte attentat : premier geste de l’algorithme ?', c: ['Pansement compressif, puis garrot tourniquet si inefficace et plaie garrottable', 'Garrot systématique d’emblée', 'Compression à distance', 'Surélévation du membre'], e: 'Algorithme : pansement compressif ; si inefficace, garrot tourniquet en cas de plaie garrottable.', s: 'algo' },
    { q: 'Victime dont le pouls radial n’est pas perçu : quelle position ?', c: ['Allongée à plat dos, jambes surélevées', 'Demi-assise', 'PLS', 'Assise jambes pendantes'], e: 'Détresse circulatoire (pouls radial non perçu) : position allongée à plat dos, jambes surélevées.', s: 'algo' },
    { q: 'Où trouve-t-on les garrots tourniquets enfant selon le diaporama SSSM ?', c: ['Dans les VPRV', 'Dans chaque VSAV', 'Dans les FPT', 'Uniquement au SMUR'], e: 'Garrot adulte : VSAV, FPT, VLCG ; enfant : VPRV.', s: 'hemorragies' },
    { q: 'À partir de quel âge ou poids un enfant est-il pris en charge comme un adulte ?', c: ['10 ans ou 30 kg', '8 ans ou 25 kg', '12 ans ou 40 kg', '15 ans ou 50 kg'], e: 'Particularités pédiatriques : 10 ans ou 30 kg = adulte ; poids estimé = (âge × 2) + 8.', s: 'pedia' },
    { q: 'Quel est l’objectif hémodynamique du damage control médical ?', c: ['Pouls radial présent et victime consciente', 'Tension normale à tout prix', 'Fréquence cardiaque inférieure à 60', 'SpO₂ à 100 %'], e: 'Damage control : objectif pouls radial et conscient, remplissage a minima avec hypotension permissive.', s: 'damage' }
  ]
});

/* =====================================================================================
   CA VSAV 2 — CHAPITRE 10 : RAD 57
   ===================================================================================== */
VSAV.chap({
  id: 'cav-rad57', part: 'cav', seq: CAV_1_SEQ2,
  title: 'Mesurer le monoxyde de carbone : le RAD 57', short: 'RAD 57 (SpCO)', motif: 'molecule',
  sources: ['Présentation « Mesure de la carboxyhémoglobine à l’aide du RAD 57 », SDIS 51 (référence NDS 93 bis)', 'Doctrine SINUS 2020, p. 9'],
  summary: 'CO-oxymètre de pouls : poser le capteur correctement, vérifier l’indice de perfusion, lire la SpCO et l’interpréter.',
  why: '<b>Pourquoi un CO-oxymètre ?</b> Le monoxyde de carbone se fixe sur l’hémoglobine à la place de l’oxygène ; un oxymètre de pouls classique ne fait pas la différence. Le RAD 57 mesure directement le taux de <b>carboxyhémoglobine (SpCO)</b>, de façon non invasive. Pour le chef d’agrès, c’est un critère objectif pour décider d’un transport, d’un avis médical, ou pour classer une personne comme impliquée sur une intervention à nombreuses victimes.',
  sections: [
    { id: 'quoi', t: 'Qu’est-ce que le RAD 57 ?', ic: 'molecule', src: 'Présentation RAD 57, diapos 2 et 3',
      html: '<p>Moniteur <b>non invasif</b> de saturation artérielle en oxygène (SpO₂), de fréquence cardiaque, d’<b>indice de perfusion</b> et de saturation en <b>carboxyhémoglobine</b>.</p>' +
        '<p>La <b>CO-oxymétrie</b> est une méthode continue et non invasive qui mesure la concentration de monoxyde de carbone dans le sang artériel (<b>SpCO</b>), sur le même principe que l’oxymétrie de pouls (spectrophotométrie). Le résultat est donné en <b>% de SpCO</b> : le taux de CO combiné à l’hémoglobine.</p>',
      figs: [{ img: 'img/cav-1/rad57.jpg', cap: 'Le RAD 57 et son capteur', txt: '<p>Boîtier à écran double et capteur de doigt relié par câble.</p>', src: 'Présentation RAD 57, SDIS 51, diapo 2' }] },
    { id: 'appareil', t: 'L’appareil', ic: 'bolt', src: 'Présentation RAD 57, diapos 6 à 9',
      html: '<div class="tw"><table><thead><tr><th>Élément</th><th>Fonctionnement</th></tr></thead><tbody>' +
        '<tr><td>Bouton marche / arrêt</td><td>Appuyer pour allumer ; appuyer et maintenir pour éteindre</td></tr>' +
        '<tr><td>Témoin de batterie</td><td>4 LED vertes, chacune = <b>25 %</b></td></tr>' +
        '<tr><td>Alimentation</td><td><b>4 piles AA alcalines</b> uniquement ; environ <b>8 heures</b> de fonctionnement</td></tr>' +
        '<tr><td>Allumage</td><td>Chaque LED s’allume, tonalité d’une seconde, <b>calibrage : ne pas toucher le capteur</b> ; vérifier l’absence de message d’alarme ; attendre l’autotest</td></tr>' +
        '<tr><td>Écran par défaut</td><td>SpO₂ et pouls</td></tr>' +
        '<tr><td>Barographe de droite</td><td><b>Indice de perfusion (Pi)</b> : doit être <b>supérieur à 1</b> pour une mesure fiable ; sinon chercher un doigt mieux vascularisé</td></tr>' +
        '<tr><td>Barographe de gauche</td><td>Taux de CO</td></tr></tbody></table></div>' },
    { id: 'mesure', t: 'Réaliser la mesure', ic: 'hand', src: 'Présentation RAD 57, diapos 4, 5, 10, 11',
      html: '<p>La présentation est rédigée pour le contrôle d’un <b>sapeur-pompier</b>, mais la technique est la même pour une victime.</p>',
      steps: ['Vérifier que les doigts sont propres (absence de suie), sans vernis ni faux ongle, et chauds', 'Choisir l’index, le majeur ou l’annulaire — pas le pouce ni l’auriculaire (vascularisation insuffisante)', 'Insérer le doigt jusqu’au bout : la LED rouge au milieu de l’ongle, le câble au-dessus (côté ongle), le capteur ne doit pas tourner', 'Allumer l’appareil et laisser le calibrage se faire sans toucher le capteur', 'Attendre l’affichage de la SpO₂ et vérifier l’indice de perfusion (> 1)', 'Appuyer sur « display » pour basculer en mode SpCO', 'Reporter le résultat sur la fiche bilan VSAV'],
      stepsTitle: 'Mesure de la SpCO',
      figs: [{ img: 'img/cav-1/rad57-capteur.jpg', cap: 'Positionnement du capteur', txt: '<p>Doigt enfoncé jusqu’au bout, ongle centré sous les diodes, câble côté ongle.</p>', src: 'Présentation RAD 57, SDIS 51, diapo 10' },
        { img: 'img/cav-1/rad57-ecran.jpg', cap: 'Affichage en mode SpCO', txt: '<p>L’écran indique ici 20 % de SpCO (« CO » sur la ligne du bas) ; les barographes latéraux donnent le taux de CO et l’indice de perfusion.</p>', src: 'Présentation RAD 57, SDIS 51, diapo 11' }] },
    { id: 'interpretation', t: 'Interpréter le résultat', ic: 'list', src: 'Présentation RAD 57, diapo 12 (guide de référence)',
      html: '<div class="tw"><table><thead><tr><th>HbCO %</th><th>Signes et symptômes</th><th>Traitement hospitalier</th></tr></thead><tbody>' +
        '<tr><td>0 – 4</td><td>Aucun</td><td>Aucun</td></tr>' +
        '<tr><td>5 – 9</td><td>Maux de tête modérés (normal pour un fumeur)</td><td>Aucun</td></tr>' +
        '<tr><td>10 – 19</td><td>Maux de tête, essoufflement</td><td>O₂ 100 %, envisager le transport</td></tr>' +
        '<tr><td>20 – 29</td><td>Maux de tête, nausée, fatigue, désorientation</td><td>O₂ 100 %, transport, envisager le caisson hyperbare</td></tr>' +
        '<tr><td>30 – 39</td><td>Maux de tête sévères, vomissements, vertiges, PC</td><td>O₂ 100 %, transport, caisson hyperbare</td></tr>' +
        '<tr><td>40 – 49</td><td>Confusion, syncope, tachycardie</td><td>O₂ 100 %, transport, caisson hyperbare</td></tr>' +
        '<tr><td>50 – 59</td><td>Convulsion, choc, apnée</td><td>O₂ 100 %, transport, caisson hyperbare</td></tr>' +
        '<tr><td>60 et +</td><td>Arythmies cardiaques, coma, mort</td><td>O₂ 100 %, transport, caisson hyperbare</td></tr></tbody></table></div>' +
        '<p>Ce tableau est un <b>guide de référence</b> : la décision de transport et d’orientation se prend avec la régulation médicale. La présentation renvoie à la <b>NDS 93 bis</b>, dont le contenu ne figure pas dans les sources de ce chapitre.</p>' +
        '<div class="callout warn">Sur une intervention avec nombreux impliqués (doctrine SINUS), une simple mesure au RAD 57 constitue un <b>bilan a minima</b> : la personne devient <b>impliquée</b> et reçoit un bracelet SINUS.</div>' }
  ],
  key: ['RAD 57 : SpO₂, pouls, indice de perfusion et SpCO', 'Doigts propres, sans vernis, chauds', 'Index, majeur ou annulaire — jamais pouce ni auriculaire', 'Indice de perfusion &gt; 1 pour une mesure fiable', 'Ne pas toucher le capteur pendant le calibrage', '4 piles AA alcalines, environ 8 h', 'HbCO 10-19 % : O₂ 100 %, envisager le transport', 'Mesure RAD 57 = bilan a minima → impliqué SINUS'],
  traps: ['Mesurer sur un doigt souillé de suie ou froid.', 'Lire la SpO₂ d’un intoxiqué au CO comme un signe rassurant.', 'Se fier à une mesure avec un indice de perfusion inférieur à 1.'],
  quiz: [
    { q: 'Quels doigts utiliser pour la mesure au RAD 57 ?', c: ['Index, majeur ou annulaire', 'Pouce ou auriculaire', 'N’importe lequel', 'Uniquement le pouce'], e: 'Index, majeur, annulaire ; pas le pouce ni l’auriculaire (manque de vascularisation).', s: 'mesure' },
    { q: 'Quelle valeur d’indice de perfusion garantit une mesure fiable ?', c: ['Supérieure à 1', 'Inférieure à 1', 'Égale à 0', 'Supérieure à 10'], e: 'Barographe de droite : l’indice de perfusion doit être supérieur à 1, sinon chercher un doigt plus vascularisé.', s: 'appareil' },
    { q: 'Une SpCO de 15 % avec maux de tête et essoufflement relève, selon le guide, de…', c: ['O₂ 100 %, envisager le transport', 'Aucun traitement', 'Caisson hyperbare systématique', 'Retour à domicile'], e: '10-19 % : maux de tête, essoufflement ; O₂ 100 %, envisager le transport.', s: 'interpretation' },
    { q: 'Que faut-il éviter pendant le calibrage à l’allumage ?', c: ['Toucher le capteur', 'Regarder l’écran', 'Tenir le boîtier', 'Allumer dans le VSAV'], e: 'À l’allumage, calibrage de l’appareil : ne pas toucher le capteur.', s: 'appareil' },
    { q: 'Quelle alimentation utilise le RAD 57 ?', c: ['4 piles AA alcalines', 'Une batterie lithium rechargeable', '2 piles 9 V', 'Le secteur uniquement'], e: '4 piles « AA », alcalines uniquement, environ 8 heures de fonctionnement.', s: 'appareil' },
    { q: 'Sur une intervention à nombreux impliqués, une personne mesurée au RAD 57…', c: ['Est un impliqué et reçoit un bracelet SINUS', 'Reste un évacué sans bracelet', 'Doit obligatoirement être transportée', 'Sort du dispositif'], e: 'Doctrine SINUS : les impliqués ont bénéficié d’un bilan SP même a minima (mesure au RAD 57) et sont équipés d’un bracelet.', s: 'interpretation' }
  ]
});

/* =====================================================================================
   CA VSAV 2 — CHAPITRE 11 : soins psychiatriques sans consentement
   ===================================================================================== */
VSAV.chap({
  id: 'cav-spdt', part: 'cav', seq: CAV_1_SEQ2,
  title: 'Soins psychiatriques sans consentement : SPDT, SPDRE, SPPI', short: 'SPDT / SPDRE', motif: 'psy',
  sources: ['Diaporama « Hospitalisations d’office — SPDT - SPDTRE », SDIS 51'],
  summary: 'Les documents que le chef d’agrès doit avoir en main avant de transporter une personne en soins psychiatriques sous contrainte.',
  why: '<b>Pourquoi le chef d’agrès est-il en première ligne ?</b> Transporter une personne contre sa volonté est une atteinte à sa liberté : elle n’est légale que dans un cadre précis. Le diaporama met la vérification des pièces à la charge du <b>chef d’agrès</b> : sans elles, le transport n’a pas de base légale. Il rappelle aussi qui peut ordonner une contrainte physique et quand les forces de l’ordre sont obligatoires.',
  sections: [
    { id: 'regimes', t: 'Trois régimes de soins sans consentement', ic: 'list', src: 'Diaporama SPDT - SPDTRE, diapo 3',
      html: '<div class="tw"><table><thead><tr><th>Sigle</th><th>Signification</th></tr></thead><tbody>' +
        '<tr><td><b>SPDT</b></td><td>Soins psychiatriques à la demande d’un tiers</td></tr>' +
        '<tr><td><b>SPDRE</b></td><td>Soins psychiatriques à la demande d’un représentant de l’État</td></tr>' +
        '<tr><td><b>SPPI</b></td><td>Soins psychiatriques en cas de péril imminent</td></tr></tbody></table></div>' +
        '<p class="small muted">Le titre du diaporama écrit « SPDTRE » alors que le contenu emploie « SPDRE ». Le diaporama ne détaille pas le régime SPPI. La procédure départementale SAP 03 (hospitalisation en psychiatrie avec ou sans consentement) relève des notes de service et n’est pas reprise ici.</p>' },
    { id: 'spdt', t: 'SPDT : ce que le chef d’agrès doit avoir', ic: 'clip', src: 'Diaporama SPDT - SPDTRE, diapos 4 et 5',
      html: '<ul class="check"><li>Une <b>demande d’admission manuscrite et signée</b> par un membre de la famille ou par une personne justifiant de l’existence de relations avec le malade ;</li>' +
        '<li><b>2 certificats médicaux</b> établis par <b>deux médecins</b>, datant de <b>moins de 15 jours</b> : l’un par un médecin <b>n’exerçant pas</b> dans la structure qui accueillera la victime, l’autre par un médecin <b>de la structure d’accueil</b>.</li></ul>' +
        '<div class="callout warn"><b>Victime mineure</b> : la procédure ne se justifie plus. C’est au <b>représentant légal</b> de solliciter les soins psychiatriques d’urgence.</div>' },
    { id: 'spdre', t: 'SPDRE : la décision du représentant de l’État', ic: 'shield', src: 'Diaporama SPDT - SPDTRE, diapos 6 et 7',
      html: '<p>Mesure d’<b>ordre administratif</b> : admission en soins psychiatriques sous contrainte d’une personne qui porte une <b>atteinte grave à l’ordre public</b> ou qui a un <b>comportement dangereux</b> pour elle-même ou pour les tiers.</p>' +
        '<p>Le chef d’agrès doit s’assurer d’avoir :</p><ul class="check"><li><b>2 certificats médicaux circonstanciés</b> (rédigés sous la forme précisée par la loi) ;</li><li>un <b>arrêté du représentant de l’État</b> dans le département.</li></ul>' },
    { id: 'contrainte', t: 'Agitation, contrainte et dignité', ic: 'hand', src: 'Diaporama SPDT - SPDTRE, diapo 8',
      html: '<ul class="check"><li>Lorsque la victime est particulièrement agitée, un emploi de la force <b>strictement proportionné et nécessaire</b> peut être envisagé pour garantir la sécurité et le transport.</li>' +
        '<li>La <b>contrainte physique</b> est <b>ordonnée uniquement par un médecin</b>.</li><li>Dès qu’il y a contrainte physique, le <b>recours aux forces de l’ordre est obligatoire</b>.</li>' +
        '<li>En tout état de cause, la <b>dignité</b> et les autres libertés individuelles doivent être respectées.</li></ul>' }
  ],
  key: ['SPDT = demande d’un tiers ; SPDRE = représentant de l’État ; SPPI = péril imminent', 'SPDT : demande manuscrite signée + 2 certificats de moins de 15 jours', 'SPDT : un médecin extérieur + un médecin de la structure d’accueil', 'Mineur : c’est le représentant légal qui sollicite les soins', 'SPDRE : 2 certificats circonstanciés + arrêté du représentant de l’État', 'Contrainte physique : ordonnée par un médecin, forces de l’ordre obligatoires'],
  traps: ['Accepter un transport en SPDT avec un seul certificat médical.', 'Appliquer la procédure SPDT à un mineur.', 'Décider seul d’une contention physique sans médecin ni forces de l’ordre.'],
  quiz: [
    { q: 'Pour une SPDT, combien de certificats médicaux le chef d’agrès doit-il vérifier ?', c: ['2 certificats de moins de 15 jours, par deux médecins', '1 certificat du médecin traitant', '3 certificats', 'Aucun, la demande du tiers suffit'], e: 'SPDT : demande manuscrite et signée + 2 certificats médicaux par deux médecins, datant de moins de 15 jours.', s: 'spdt' },
    { q: 'Qui signe la demande d’admission en SPDT ?', c: ['Un membre de la famille ou une personne justifiant de relations avec le malade', 'Le chef d’agrès', 'Le maire', 'Le médecin régulateur'], e: 'Demande manuscrite et signée par un membre de la famille ou une personne justifiant de l’existence de relations avec le malade.', s: 'spdt' },
    { q: 'La victime est mineure. Que prévoit le diaporama ?', c: ['La procédure ne se justifie plus : le représentant légal sollicite les soins', 'La SPDT s’applique normalement', 'Seul le préfet peut décider', 'Le chef d’agrès signe la demande'], e: 'Si la victime est mineure, c’est au représentant légal de solliciter les soins psychiatriques d’urgence.', s: 'spdt' },
    { q: 'Quelles pièces pour une SPDRE ?', c: ['2 certificats médicaux circonstanciés et un arrêté du représentant de l’État', 'Une demande de la famille', 'Un seul certificat', 'Un procès-verbal de police'], e: 'SPDRE : 2 certificats médicaux circonstanciés + arrêté du représentant de l’État dans le département.', s: 'spdre' },
    { q: 'Qui peut ordonner une contrainte physique, et avec quelle condition ?', c: ['Un médecin uniquement, avec recours obligatoire aux forces de l’ordre', 'Le chef d’agrès seul', 'La famille', 'N’importe quel sapeur-pompier en cas d’agitation'], e: 'Contrainte physique ordonnée uniquement par un médecin ; dès qu’il y a contrainte, recours aux forces de l’ordre obligatoire.', s: 'contrainte' }
  ]
});

/* ===================================================================================== L’essentiel */
VSAV.ess([
  { t: 'SUAP Chef d’agrès — Bilans et physiologie', ic: 'clip', items: [
    { k: 'Fin du bilan primaire', v: 'victime <b>critique</b> → transmission + moyen médical', go: 'cav-bilans/critique' },
    { k: 'Oxygène', v: 'SpO₂ &lt; <b>94 %</b> (IRC &lt; <b>89 %</b>) : MHC <b>15 L/min</b> puis 8-15', go: 'cav-bilans/o2' },
    { k: 'Surveillance', v: '<b>5 min</b> si détresse, <b>10-15 min</b> sinon', go: 'cav-bilans/surveillance' },
    { k: 'Ischémie cerveau', v: '<b>4 à 6 min</b>', go: 'cav-physio/ischemie' },
    { k: 'Choc', v: 'la TA chute <b>en dernier</b>', go: 'cav-physio/compensation' },
    { k: 'Hypothermie', v: '&lt; <b>35 °C</b> ; 1 °C perdu = <b>10 %</b> de facteurs de coagulation', go: 'cav-triade/triade' },
    { k: 'Rachis', v: 'non fiable / signes / haut risque + <b>&gt; 65 ans</b> ou ATCD', go: 'cav-rachis/arbre' },
    { k: 'Civière Lecco XL', v: 'GRIMP, jusqu’à <b>400 kg</b>, largeur <b>75 cm</b>', go: 'cav-bariatrique/dotation' }
  ] },
  { t: 'SUAP Chef d’agrès — Situations particulières', ic: 'alert', items: [
    { k: 'SINUS au quotidien', v: 'dès <b>6 victimes</b> ; VSAV : <b>10 bracelets</b> + 10 fiches', go: 'cav-sinus/seuils' },
    { k: 'UA avant SINUS', v: 'bracelet + fiche ; partie <b>bleue</b> au CDG avant départ', go: 'cav-sinus/ca' },
    { k: 'Attentat — 1er départ', v: '1 CDC, 1 CDG, 1 VSAV, 1 FPT, 1 VPRV', go: 'cav-attentat/reponse' },
    { k: 'Comptes rendus attentat', v: 'toutes les <b>10 à 15 min</b> ; UA évacuées en <b>30 min</b>', go: 'cav-attentat/cr' },
    { k: 'Morts évitables', v: 'hémorragie des membres <b>60 %</b>', go: 'cav-attentat-blesses/evitables' },
    { k: 'RAD 57', v: 'indice de perfusion <b>&gt; 1</b> ; 10-19 % : O₂ 100 %', go: 'cav-rad57/interpretation' },
    { k: 'SPDT', v: 'demande signée + <b>2 certificats</b> &lt; <b>15 jours</b>', go: 'cav-spdt/spdt' }
  ] }
]);
