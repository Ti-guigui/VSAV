/* PPBE — fichier 2 : risque animalier, hyménoptères et LSPCC (Équipier PPBE)
   Sources : Livret stagiaire Équipier PPBE SDIS 51 (2022), parties 10 et 11 ;
   « Le risque animalier », Vét. LCL M. LANHAM, SSSM SDIS 51 (11/2021) ; « Les différents serpents de Champagne-Ardenne » (SDIS 51) ;
   Fiche « La capture des serpents » (Sgt J. GALAND, 2015) ; NDS 240 bis (2019) destruction d’hyménoptères – frelons asiatiques ;
   Doctrine départementale LSPCC (NDS 390, version 1, mai 2022) ; diaporama « LSPCC – entretien et contrôle » (SDIS 51 / Équipier DIV, 2014). */
var PP3 = 'PPBE 3 — Animaux et hyménoptères';
var PP4 = 'PPBE 4 — Le LSPCC en PPBE';
var LIVPP2 = 'Livret stagiaire Équipier PPBE SDIS 51 (2022)';
var LANHAM = '« Le risque animalier », Vét. LCL M. Lanham, SSSM SDIS 51 (11/2021)';
var SERP = '« Les différents serpents de Champagne-Ardenne » (dossier NAC, SDIS 51)';
var CAPT = 'Fiche « La capture des serpents » (SDIS 51, 2015)';
var NDS240 = 'NDS 240 bis du 06/02/2019 — destruction d’hyménoptères, frelons asiatiques (SDIS 51)';
var NDS390 = 'Doctrine départementale LSPCC — NDS 390 (SDIS 51, v1 mai 2022)';
var LSPDIAPO = 'Diaporama « LSPCC : entretien et contrôle » (SDIS 51, Équipier DIV, 2014)';

/* =====================================================================================
   CHAPITRE 10 — LE RISQUE ANIMALIER
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-animaux', part: 'ppbe', seq: PP3,
  title: 'Le risque animalier : espèces, dangers et conduite à tenir', short: 'Risque animalier', motif: 'bug',
  sources: [LIVPP2 + ', partie 10 (p. 32-37)', LANHAM],
  summary: 'Interventions fréquentes, dangereuses et difficiles : connaître les dangers de chaque espèce, la conduite générale à tenir et le matériel de capture et de contention.',
  why: '<b>Pourquoi un animal blesse-t-il des sapeurs-pompiers ?</b> Presque toujours par <b>comportement défensif</b> : il a peur, il est coincé, il souffre. Le vétérinaire du SDIS 51 résume : en France, il y a environ trois fois plus d’interventions impliquant des animaux que de sorties pour incendie, elles sont dangereuses, leurs réactions ne sont pas stéréotypées, et il faut respecter un cadre légal strict de protection animale. Il faut donc de la méthode, du calme et s’adapter en permanence à l’animal.',
  sections: [
    { id: 'especes', t: 'Catégories, identification et dangers', ic: 'list', src: LIVPP2 + ', p. 32',
      html: '<p>Chaque mission animalière présente un danger. Pour les gros animaux, les animaux sauvages ou exotiques, il est indispensable de faire intervenir un <b>vétérinaire</b> (vétérinaires sapeurs-pompiers du SSSM, unité vétérinaire départementale).</p>' +
        '<p><b>3 catégories</b> : espèces <b>sauvages</b> (vivent dans la nature, pas habituées à l’homme) ; espèces <b>protégées</b> (faune sauvage captive, détention réglementée) ; espèces <b>domestiques</b> (apprivoisées par l’homme).</p>' +
        '<p><b>Identification</b> : chiens et chats : tatouage ou puce, fichier central ; bovins : bague sanitaire à 10 chiffres (les 2 premiers = département) ; chevaux : livret signalétique et puce (chevaux de course).</p>' +
        '<div class="tw"><table><thead><tr><th>Animal</th><th>Dangers physiques</th></tr></thead><tbody>' +
        '<tr><td>Cheval</td><td>Ruades et morsures</td></tr><tr><td>Bovin</td><td>Coups de cornes, tentatives de charge, coups de pieds (postérieurs)</td></tr><tr><td>Ovin, caprin</td><td>Coups de cornes, coups de tête</td></tr><tr><td>Porcin</td><td>Morsures, tentatives de charge (sanglier)</td></tr><tr><td>Chien</td><td>Morsures</td></tr><tr><td>Chat</td><td>Morsures, griffures</td></tr>' +
        '</tbody></table></div><p><b>Dangers infectieux</b> : piqûres d’insectes, infection cutanée, morsure, blessure (zoonoses).</p>' },
    { id: 'domestiques', t: 'Les conseils du vétérinaire par espèce', ic: 'eye', src: LANHAM,
      html: '<ul class="check"><li><b>Chien</b> (morsure +++, attention à la bouche) : ne jamais le fixer dans les yeux ; ne jamais le prendre directement par le collier ; <b>museler systématiquement</b> avant manipulation ; ne pas s’approcher trop vite ; parler doucement ; éviter le combat. Matériel : lasso (tête), lacette ou muselière (bouche). Morsure : déclaration au maire, surveillance sanitaire et évaluation comportementale de l’animal ; lavage rapide au savon de Marseille.</li>' +
        '<li><b>Chat</b> (morsure, griffure, zoonose) : bonne contention ; couverture, filet, pince à chat ; cage robuste.</li>' +
        '<li><b>Cheval</b> (postérieurs +++, poids, morsure) : pas de gestes brusques, mains derrière le dos, pas de couvre-chef ; lui parler ; l’aborder <b>par sa gauche</b> en allant vers l’épaule ; bras par-dessus l’encolure pour passer le licol ; s’il s’échappe, rester à 1-1,5 m et marcher à côté ; oreilles couchées en arrière : méfiance.</li>' +
        '<li><b>Gros bovins</b> (postérieurs, cornes, poids) : observation, zones de sécurité, comportement de groupe. <b>Petits ruminants</b> : les asseoir ou coucher sur le dos pour les maîtriser ; saisir jarret ou oreille pour les faire avancer. <b>Porcs</b> (morsures) : lasso métallique, porte.</li>' +
        '<li><b>Animaux sauvages</b> : stress et force +++ — <b>ils peuvent mourir de stress</b>. Chauves-souris (gants, épuisette, carton) ; oiseaux (aveuglement, ailes collées au corps ; rapaces protégés).</li></ul>' },
    { id: 'conduite', t: 'Conduite générale à tenir', ic: 'shield', src: LIVPP2 + ', p. 36-37 ; ' + LANHAM,
      steps: ['Assurer sa propre sécurité (EPI complet) et celle des autres (périmètre de sécurité).', 'Protéger l’animal en maintenant un périmètre de sécurité pour éviter le sur-accident.', 'Adopter une attitude calme et déterminée ; prévenir l’animal pour ne pas le surprendre.', 'Ne pas soutenir le regard de l’animal.', 'Éviter les mouvements brusques.', 'Adapter son comportement et son équipement à l’attitude de l’animal.'], stepsTitle: 'Conduite générale (livret)',
      after: '<p><b>Principes du vétérinaire</b> : engager le <b>minimum de personnel</b> (idéal : un binôme) pour l’action directe ; tenir curieux et « pseudo-experts » à distance ; étudier le comportement de l’animal ; chercher un véritable expert (éleveur, vétérinaire, maître) ; connaître point de fuite et point critique.</p>' +
        '<div class="tw"><table><thead><tr><th>Notion</th><th>Définition</th><th>Valeurs</th></tr></thead><tbody>' +
        '<tr><td><b>Ligne (zone) de fuite</b></td><td>Distance de sécurité de l’animal : il peut encore s’enfuir.</td><td>Vache ≈ 5 m ; chien ≈ 10 m</td></tr>' +
        '<tr><td><b>Ligne critique</b></td><td>Espace vital : l’animal se sent coincé et répond par l’attaque (dominant) ou la soumission (dominé).</td><td>Chat 50 cm à 1 m ; chien 1,50 à 3 m</td></tr>' +
        '</tbody></table></div><p>Le lasso ou la pince permettent de respecter ces distances. <b>Chat</b> : gros dos, poils hérissés, oreilles aplaties, grondements ; s’il « crache », le point critique est franchi : risque d’attaque. <b>Chien</b> : se faire considérer comme dominant ; soumission active (courbé, queue basse, petits coups de langue : se méfier, il est craintif) ou passive (sur le dos, abdomen exposé : le traiter doucement).</p>' },
    { id: 'situations', t: 'Situations types', ic: 'list', src: LIVPP2 + ', p. 35-37',
      html: '<div class="tw"><table><thead><tr><th>Mission</th><th>Risques</th><th>Conduite à tenir</th></tr></thead><tbody>' +
        '<tr><td>Chien blessé, accidenté ou inanimé</td><td>Morsures</td><td>L’approcher par l’arrière pour apprécier ses réactions, le museler, le mettre sur un brancard.</td></tr>' +
        '<tr><td>Chien bloqué sur une paroi rocheuse</td><td>Morsures</td><td>Faire intervenir le GRIMP ; s’il est affamé, ne le nourrir qu’après l’intervention.</td></tr>' +
        '<tr><td>Chien enfermé dans une voiture</td><td>Coup de chaleur souvent mortel (pour le chien)</td><td>Si on peut ouvrir : le mouiller pour le refroidir, l’emmener chez le vétérinaire. Sinon : arroser la voiture.</td></tr>' +
        '<tr><td>Chien dans une voiture accidentée</td><td>Morsures</td><td>Faire intervenir un animalier ; l’attraper au lasso et le faire sortir.</td></tr>' +
        '<tr><td>Chien méchant menaçant la sécurité</td><td>Morsure</td><td>Animalier ; maîtriser au lasso ou au filet ; forces de l’ordre.</td></tr>' +
        '<tr><td>Chat perché au sommet d’un arbre</td><td>Griffure, morsure</td><td><b>Ce n’est pas une urgence.</b></td></tr>' +
        '<tr><td>Cheval ou vache ayant glissé dans un trou</td><td>Coups de pied, de corne ; animal affolé très dangereux</td><td>Vétérinaire (souvent tranquilliser avant d’intervenir) ; animaliers, plongeurs ou GRIMP si nécessaire.</td></tr>' +
        '<tr><td>Cheval ou bovin tombé dans une piscine</td><td>Noyade de l’animal</td><td>Pomper rapidement jusqu’à ce qu’il ait pied ; en attendant, le soutenir, tête hors de l’eau.</td></tr>' +
        '<tr><td>Écurie ou étable en feu</td><td>Les bêtes affolées retournent dans le feu ; bousculade, piétinement, cornes</td><td>Sortir les animaux au plus vite (couvrir la tête des chevaux) et les maintenir parqués ; vétérinaire.</td></tr>' +
        '<tr><td>Accident de camion d’animaux vivants</td><td>Divagation, collisions, animaux excités</td><td>Vétérinaire ; récupérer les animaux, les charger en bétaillère ; trier ceux restant dans le camion.</td></tr>' +
        '<tr><td>Cheval ou bovin en divagation</td><td>Accident de circulation, coups, charge</td><td>Bloquer la circulation ; agir dans le calme sans exciter l’animal ; animalier, vétérinaire ou agriculteur pour la capture.</td></tr>' +
        '<tr><td>Animaux exotiques ou de cirque</td><td>Propres à l’animal (éléphant, girafe, panthère, bison, singe : les plus dangereux)</td><td>Vétérinaire ; calmer la population ; prévenir le propriétaire.</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Procédures particulières</b> : animal enlisé, dans l’eau ou en excavation → c’est le vétérinaire qui juge des moyens. Animal blessé → transport sur plan dur, relevage inspiré du secourisme, contention parfaite. Oiseau → filets, appâts (graines). Bovins et chevaux : harnais de sauvetage dans la berce « sauvetage déblaiement », renfort spécialisé possible.</p>' },
    { id: 'contention', t: 'Matériel de capture et de contention', ic: 'hand', src: LIVPP2 + ', p. 33-34',
      html: '<ul class="check"><li><b>Lasso</b> : maîtriser chiens et chats. <b>Lacette</b> : cordelette de <b>1,20 m</b> pour museler les animaux à museau pointu.</li><li><b>Cage</b> : soigner ou transporter chien ou chat capturé. <b>Pince à chat</b> : saisir et serrer le cou du chat grâce à la poignée.</li><li><b>Cordelette</b> : confectionner un licol (autour des cornes ou du cou, puis du mufle). <b>Mouchette</b> : tenir l’animal par le nez.</li><li><b>Fusil hypodermique</b> : capture à distance des gros animaux, tir maxi ≈ <b>40 m</b>, seringue d’anesthésiant, <b>sous contrôle d’un vétérinaire</b>.</li><li><b>Sangles de levage</b> : sortir un cheval ou un bovin d’un trou, d’une piscine.</li><li>Reptiles : crochet ou pince à serpent, glacière, couverture (lézards, iguanes : caché, l’animal se calme).</li></ul>' },
    { id: 'cadre', t: 'Le cadre légal', ic: 'book', src: LANHAM,
      html: '<ul class="check"><li>Le <b>maire</b> est responsable des animaux errants sur sa commune (prise en charge, soins, information — art. R 211-12 du code rural).</li><li>Un <b>groupe cynotechnique</b> existe dans la Marne : ne pas hésiter à le déclencher.</li><li>Zoonoses : maladies animales transmissibles à l’homme.</li><li>Protection animale : sévices graves ou cruauté envers un animal domestique punis jusqu’à <b>3 ans et 30 000 €</b> d’amende, <b>5 ans et 75 000 €</b> en cas de mort de l’animal.</li></ul>' +
        '<p class="small muted">Prise en charge des animaux blessés ou errants par le SDIS (NDS 105) : voir <a href="#/c/ppbe-ca-payantes">Interventions payantes, hyménoptères et animaux</a>.</p>' }
  ],
  key: ['Gros animaux, sauvages ou exotiques : faire intervenir un vétérinaire.', 'Chien : ne pas le fixer, ne pas le prendre par le collier, museler avant manipulation.', 'Cheval : l’aborder par sa gauche, vers l’épaule ; oreilles couchées = méfiance.', 'Minimum de personnel (binôme), curieux à distance, calme.', 'Ligne de fuite : vache ≈ 5 m, chien ≈ 10 m ; ligne critique : chat 0,5-1 m, chien 1,5-3 m.', 'Chat qui « crache » : point critique franchi.', 'Chat dans un arbre : pas une urgence.', 'Fusil hypodermique : ≈ 40 m, sous contrôle vétérinaire ; lacette 1,20 m.'],
  traps: ['Fixer un chien dans les yeux ou le saisir par le collier.', 'Engager tout l’équipage autour d’un animal affolé.', 'Croire qu’un animal sauvage ne risque rien à être stressé : il peut en mourir.', 'Traiter un chien en soumission passive avec brutalité.'],
  quiz: [
    { q: 'Avant de manipuler un chien, il faut :', c: ['Le museler systématiquement', 'Le prendre par le collier', 'Le fixer dans les yeux pour le dominer', 'Courir vers lui'], e: 'Diaporama du vétérinaire Lanham : museler systématiquement, ne jamais le prendre par le collier ni le fixer.', s: 'domestiques' },
    { q: 'Par quel côté aborder un cheval ?', c: ['Par sa gauche, en allant vers son épaule', 'Par l’arrière', 'De face, en le regardant', 'Par la droite en courant'], e: 'Diaporama Lanham, consignes d’approche du cheval.', s: 'domestiques' },
    { q: 'La ligne de fuite d’un chien est d’environ :', c: ['10 m', '50 cm', '1,50 m', '40 m'], e: 'Livret p. 37 : vache ≈ 5 m, chien ≈ 10 m.', s: 'conduite' },
    { q: 'Un chat qui « crache » signifie :', c: ['Que le point critique est franchi : risque d’attaque', 'Qu’il est en soumission', 'Qu’il a faim', 'Qu’il est malade'], e: 'Livret p. 37.', s: 'conduite' },
    { q: 'Chat perché au sommet d’un arbre :', c: ['Ce n’est pas une urgence', 'Engagement immédiat de l’échelle aérienne', 'Abattre l’arbre', 'Appel au GRIMP en urgence'], e: 'Livret p. 35, tableau des situations.', s: 'situations' },
    { q: 'Chien enfermé dans une voiture en plein soleil, voiture ouvrable :', c: ['Le mouiller pour le refroidir et l’emmener chez le vétérinaire', 'Le laisser dans la voiture vitres ouvertes', 'Lui donner à manger', 'Attendre le propriétaire'], e: 'Livret p. 35 : coup de chaleur souvent mortel.', s: 'situations' },
    { q: 'Cheval tombé dans une piscine :', c: ['Pomper rapidement jusqu’à ce qu’il ait pied et lui maintenir la tête hors de l’eau en attendant', 'Le tirer immédiatement par le licol', 'Vider la piscine sans s’occuper de lui', 'Attendre le vétérinaire sans rien faire'], e: 'Livret p. 36.', s: 'situations' },
    { q: 'Le fusil hypodermique :', c: ['S’utilise sous le contrôle d’un vétérinaire, tir maxi ≈ 40 m', 'Peut être utilisé par tout équipier', 'Tire des balles réelles', 'Porte à 200 m'], e: 'Livret p. 34.', s: 'contention' },
    { q: 'Combien de personnel engager pour l’action directe sur un animal ?', c: ['Le minimum, idéalement un binôme', 'Tout l’équipage', 'Une seule personne toujours', 'Au moins six'], e: 'Diaporama Lanham, principes généraux.', s: 'conduite' }
  ]
});

/* =====================================================================================
   CHAPITRE 11 — SERPENTS ET NAC
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-serpents', part: 'ppbe', seq: PP3,
  title: 'Les NAC et les serpents : reconnaître et capturer', short: 'Serpents et NAC', motif: 'bug',
  sources: [LIVPP2 + ', p. 33 et 37', SERP, CAPT, LANHAM],
  summary: 'Reconnaître vipère et couleuvre, connaître les 7 serpents de Champagne-Ardenne et ceux d’animalerie, et capturer sans blesser l’animal ni l’intervenant.',
  why: '<b>Pourquoi ne jamais tuer un serpent ?</b> Parce que <b>tous les serpents de Champagne-Ardenne sont des espèces protégées</b> : interdiction de les capturer hors nécessité, de les blesser, de les tuer, de les déplacer ou de détruire leur ponte. Et même les espèces d’animalerie ne doivent pas être tuées. L’intervention vise donc à protéger les personnes <b>et</b> l’animal.',
  sections: [
    { id: 'nac', t: 'Les NAC et la différence vipère / couleuvre', ic: 'eye', src: LIVPP2 + ', p. 33',
      html: '<p><b>NAC</b> (nouveaux animaux de compagnie) : animaux sauvages détenus par des particuliers ; un certificat de capacité (CDC) encadre la détention de certaines catégories.</p>' +
        '<div class="tw"><table><thead><tr><th></th><th>Vipère (venimeuse)</th><th>Couleuvre (non venimeuse)</th></tr></thead><tbody>' +
        '<tr><td>Corps</td><td>Trapu, petite taille (&lt; 80 cm), queue courte</td><td>Svelte, allongé, queue effilée</td></tr>' +
        '<tr><td>Tête</td><td>Triangulaire, <b>V sur la tête</b>, pupilles verticales</td><td>Pas de V, pupilles rondes</td></tr>' +
        '<tr><td>Écailles de la tête</td><td>Petites écailles</td><td>Grandes écailles</td></tr>' +
        '<tr><td>Signe</td><td>Ligne en zigzag foncée sur le dos ; mouvements plus lents</td><td>Grise, brune, roussâtre</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Morsure — premiers soins</b> (vétérinaire Lanham) : <b>à ne pas faire</b> : faire bouger, faire boire de l’alcool, garrot, aspirer avec la bouche, brûler. <b>À faire</b> : désinfecter, refroidir le lieu de la morsure.</p>' },
    { id: 'especes', t: 'Les serpents de Champagne-Ardenne', ic: 'list', src: SERP,
      html: '<p>La région compte <b>7 espèces</b> en milieu naturel, <b>toutes protégées</b> :</p><div class="tw"><table><thead><tr><th>Espèce</th><th>Fréquence</th><th>Repères</th></tr></thead><tbody>' +
        '<tr><td>Couleuvre à collier</td><td>Courante</td><td>Mâle ≈ 1,10 m, femelle 1,60-2 m ; collier jaune-blanc (s’efface avec l’âge) ; semi-aquatique ; peut siffler ou faire la morte.</td></tr>' +
        '<tr><td>Coronelle lisse</td><td>Courante</td><td>Rarement &gt; 70 cm ; écailles très lisses ; inoffensive.</td></tr>' +
        '<tr><td>Couleuvre d’Esculape</td><td>Rare</td><td>≈ 1,50 m (jusqu’à 2 m) ; arboricole (charpentes, arbres) ; constrictrice.</td></tr>' +
        '<tr><td>Couleuvre verte et jaune</td><td>Courante</td><td>1,10-1,30 m ; très craintive, peut mordre à plusieurs reprises si menacée.</td></tr>' +
        '<tr><td>Couleuvre vipérine</td><td>Courante</td><td>70-90 cm ; zigzag sur le dos (confusion possible) mais pupilles rondes ; totalement inoffensive.</td></tr>' +
        '<tr><td><b>Vipère aspic</b></td><td>Courante, <b>venimeuse</b></td><td>≈ 70 cm ; tête triangulaire, museau retroussé, pupilles verticales ; n’injecte pas toujours de venin.</td></tr>' +
        '<tr><td><b>Vipère péliade</b></td><td>Rare, <b>venimeuse</b></td><td>50-70 cm ; venin très puissant (peut tuer un enfant) ; surtout au sud-ouest du département.</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Serpents d’animalerie</b> (non venimeux, interdits de tuer) : lampropeltis (serpent roi), pantherophis (serpent des blés), <b>boa</b> (jusqu’à 3,70 m et 25 kg : au moins <b>3 sapeurs-pompiers au-delà de 2 m, 4 au-delà de 3 m</b> — un à la tête puis un par mètre ; distance de sécurité d’1 m s’il est agressif), python royal. Python réticulé (interdit à la vente, 4 à 9 m) : renfort d’au minimum un <b>FPT R</b>.</p>' },
    { id: 'capture', t: 'Capturer un serpent', ic: 'hand', src: CAPT + ' ; ' + LIVPP2 + ', p. 37',
      html: '<p><b>Objectif</b> : capturer sans blesser l’animal tout en protégeant l’intervenant. <b>Matériel</b> : crochet de manipulation (tige de 50 cm à 1 m coudée), sac de transport (toile qui laisse respirer), EPI.</p>' +
        '<div class="tw"><table><thead><tr><th>Serpent</th><th>EPI</th></tr></thead><tbody><tr><td>&lt; 1,20 m et non dangereux</td><td>Tenue F1 manches baissées, gants d’intervention, bottes ou rangers</td></tr><tr><td>≥ 1,20 m ou dangereux</td><td>Tenue F1 + <b>tenue de feu complète</b>, gants, bottes ou rangers</td></tr></tbody></table></div>' +
        '<ul class="check"><li><b>Petit serpent</b> : le crocheter vers le milieu du corps, le soulever doucement et le placer d’un geste continu dans le sac préparé ; refermer en retirant le crochet.</li><li><b>Moyen (≤ 1,20 m)</b> : crochet au premier tiers côté tête, soulever les deux tiers, tenir le bout de la queue pour le stabiliser, le placer dans le sac.</li><li><b>Grand (&gt; 1,20 m)</b> : rester à <b>1 m au moins</b> le temps d’analyser ; <b>au-delà de 2 m, demander du renfort</b> ; bloquer la tête avec un outil (manche de pelle), saisir juste derrière les mâchoires à deux mains ; les équipiers se répartissent le long du corps.</li></ul>' +
        '<p>Livret : se protéger les mains, engager le minimum de personnel, éloigner les curieux, crochet à serpent, <b>l’équipier protège son binôme avec un bâton</b>, reptile dans un sac, remis aux forces de l’ordre, au vétérinaire ou <b>relâché à 3 km de toute habitation</b>.</p>' +
        '<div class="callout warn"><b>Devenir de l’animal</b>Serpent du milieu naturel : remis en liberté sauf s’il est blessé (→ vétérinaire). Espèce de vente autorisée : peut être confiée à une animalerie. <b>Il est strictement interdit de tuer un serpent, quelle que soit son espèce.</b> Espèce exotique : ne rien faire sans la présence d’un spécialiste.</div>' }
  ],
  key: ['Vipère : trapue < 80 cm, tête triangulaire avec V, pupilles verticales, petites écailles sur la tête.', 'Couleuvre : svelte, queue effilée, pupilles rondes, grandes écailles sur la tête.', '7 serpents en Champagne-Ardenne, tous protégés ; 2 vipères (aspic, péliade).', 'Interdit de tuer un serpent, quelle que soit l’espèce.', 'Serpent ≥ 1,20 m ou dangereux : tenue de feu complète.', 'Au-delà de 2 m : renfort ; boa > 2 m : 3 SP, > 3 m : 4 SP.', 'Relâcher à 3 km de toute habitation, ou vétérinaire si blessé.', 'Morsure : pas de garrot, pas d’aspiration, pas d’alcool ; désinfecter, refroidir.'],
  traps: ['Prendre une couleuvre vipérine (zigzag) pour une vipère, ou l’inverse : regarder pupilles et tête.', 'Tuer le serpent « par sécurité ».', 'Faire un garrot ou aspirer une morsure de vipère.', 'Attaquer seul un grand serpent constricteur.'],
  quiz: [
    { q: 'Quel signe caractérise la vipère ?', c: ['Une tête triangulaire avec un V et des pupilles verticales', 'Une queue longue et effilée', 'Des pupilles rondes', 'Un collier jaune'], e: 'Livret p. 33 et dossier serpents de Champagne-Ardenne.', s: 'nac' },
    { q: 'Combien d’espèces de serpents vivent en milieu naturel en Champagne-Ardenne ?', c: ['7, toutes protégées', '2, non protégées', '12', '3 dont 2 venimeuses non protégées'], e: 'Dossier « Les différents serpents de Champagne-Ardenne ».', s: 'especes' },
    { q: 'Peut-on tuer un serpent dangereux sur intervention ?', c: ['Non, il est strictement interdit de tuer un serpent quelle que soit son espèce', 'Oui, si c’est une vipère', 'Oui, si le propriétaire le demande', 'Oui, s’il est blessé'], e: 'Fiche « La capture des serpents ».', s: 'capture' },
    { q: 'Où relâcher un serpent capturé du milieu naturel non blessé ?', c: ['À 3 km de toute habitation', 'Dans le jardin voisin', 'À 300 m', 'Dans une animalerie'], e: 'Livret p. 33 et 37.', s: 'capture' },
    { q: 'EPI pour un serpent de 1,50 m :', c: ['Tenue F1 et tenue de feu complète, gants, bottes', 'Tenue F1 manches relevées', 'Gants seuls', 'Combinaison hyménoptères'], e: 'Fiche capture : ≥ 1,20 m ou dangereux → tenue de feu complète.', s: 'capture' },
    { q: 'Face à une morsure de vipère, on ne doit pas :', c: ['Poser un garrot ou aspirer avec la bouche', 'Désinfecter', 'Refroidir le lieu de la morsure', 'Rassurer la victime'], e: 'Diaporama Lanham : à ne pas faire : faire bouger, alcool, garrot, aspirer, brûler.', s: 'nac' },
    { q: 'Boa de 3,20 m : combien de sapeurs-pompiers pour le maîtriser ?', c: ['4 (un à la tête puis un tous les mètres)', '1', '2', '3'], e: 'Dossier serpents : 3 au-delà de 2 m, 4 au-delà de 3 m.', s: 'especes' },
    { q: 'Lors de la capture d’un reptile, le rôle de l’équipier est de :', c: ['Protéger son binôme à l’aide d’un bâton', 'Saisir le serpent à mains nues', 'Filmer la scène', 'Éloigner le serpent en le frappant'], e: 'Livret p. 37.', s: 'capture' }
  ]
});

/* =====================================================================================
   CHAPITRE 12 — LES HYMÉNOPTÈRES
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-hymenopteres', part: 'ppbe', seq: PP3,
  title: 'Les hyménoptères : guêpes, frelons, abeilles', short: 'Hyménoptères', motif: 'spray',
  sources: [LIVPP2 + ', p. 38-39', NDS240, LANHAM],
  summary: 'Reconnaître les espèces, s’équiper complètement hors zone, détruire le nid au bon moment avec la bonne technique, et savoir réagir aux piqûres.',
  why: '<b>Pourquoi tant d’EPI pour un nid ?</b> Un frelon asiatique peut <b>projeter du venin à distance</b> et son aiguillon perce des tissus épais ; les attaques autour du nid sont violentes et coordonnées. Une piqûre peut être mortelle selon le nombre, le siège, l’état de santé et l’allergie. D’où l’équipement complet, mis <b>hors de la zone de danger</b>, et le contrôle croisé.',
  sections: [
    { id: 'especes', t: 'Reconnaître les espèces', ic: 'eye', src: LIVPP2 + ', p. 38',
      html: '<ul class="check"><li><b>Guêpes</b> : taille fine, abdomen annelé jaune et noir ; nids à plusieurs étages d’alvéoles, enterrés, accrochés ou dans un mur.</li><li><b>Frelons</b> : plus gros (3 à 4 cm), jaune et roux le plus souvent ; piqûre très douloureuse.</li><li><b>Abeilles</b> : plus petites, marron ; essaims de 10 000 à 60 000. Destruction uniquement s’il y a un danger ou si la capture de la reine est impossible, <b>sinon contacter un apiculteur</b>.</li></ul>' +
        '<p>Frelon asiatique : pas agressif hors de la zone de protection de son nid, mais attaque violemment pour le défendre ; distance de sécurité recommandée à la population : <b>plus de 5 m</b> sans protection (NDS 240 bis). Nids observés d’environ 60 cm de diamètre, jusqu’à 12 à 22 m de hauteur (photos du dossier stagiaire).</p>',
      figs: [{ img: 'img/ppbe/hymenopteres-especes.jpg', cap: 'Abeille domestique, bourdon terrestre, guêpe commune, frelon européen, frelon asiatique', src: LIVPP2 + ', p. 38' }] },
    { id: 'epi', t: 'Équipement et doctrine opérationnelle', ic: 'shield', src: NDS240 + ' ; ' + LIVPP2 + ', p. 38',
      html: '<p>Tous les centres sont équipés de <b>tenues dédiées « frelon asiatique »</b>. Pour tout type d’hyménoptères :</p>',
      steps: ['S’équiper complètement en dehors de la zone de danger.', 'Porter les EPI complets — TSI manches baissées, combinaison de protection, lunettes, masque FFP2 — y compris pendant la reconnaissance.', 'Réaliser un contrôle croisé (port et étanchéité aux pieds et aux mains).', 'Mettre à l’écart les personnes non équipées (sapeurs-pompiers et tiers).', 'Détruire le nid au moyen d’insecticide (liquide ou poudre).'], stepsTitle: 'Règles élémentaires de sécurité (NDS 240 bis)',
      after: '<p>Avec une EPS : l’échelier s’équipe d’une tenue complète et fait attention à la manipulation (champ de vision réduit) ; un personnel inapte aux hyménoptères le signale et se fait remplacer.</p>' +
        '<p><b>Matériel de destruction</b> : vaporisateur à pression (pulvériser à l’entrée du nid et sur ses parois), <b>rincé après chaque intervention</b>. <b>Produit insecticide</b> : ne pas fumer à proximité, ne pas ingérer, ne pas se frotter les yeux, se rincer les mains, rincer le matériel. Le vétérinaire signale aussi la poudre rémanente (essaim inaccessible) ou l’insecticide pulvérisé de préférence la nuit, restes emportés en sac poubelle.</p>' },
    { id: 'destruction', t: 'Techniques de destruction', ic: 'spray', src: LIVPP2 + ', p. 39',
      html: '<div class="callout ok"><b>Quand ?</b>Tôt le matin ou à la tombée de la nuit : les insectes sont rassemblés dans le nid et plus calmes.</div>' +
        '<div class="tw"><table><thead><tr><th>Nid</th><th>Technique</th></tr></thead><tbody><tr><td>Suspendu</td><td>Pulvériser, puis récupérer le nid dans un sac.</td></tr><tr><td>Enterré</td><td>Pulvériser au ras du sol et creuser.</td></tr><tr><td>Dans un mur</td><td>Pulvériser l’entrée, creuser si nécessaire.</td></tr><tr><td>Sous toiture</td><td>Dégarnir (toiture, laine de verre, lambris) et traiter le nid.</td></tr></tbody></table></div>' +
        '<p>Attention aux dégradations : vérifier que le nid n’est pas accessible autrement avant de casser ; <b>prévenir le propriétaire</b> si l’on doit casser ; travaux trop importants (nombreuses tuiles) → professionnel. En lieu privé sans danger, la destruction est facturée (le chef d’agrès fait remplir le formulaire « intervention payante »).</p>' +
        '<div class="callout bad"><b>Précautions</b>Ne jamais détruire un nid avec de l’essence ; ne pas allumer de feu dans un conduit de cheminée contenant un nid ; en hauteur (toit, arbre), <b>LSPCC obligatoire</b> ; ne jamais frapper sur un tronc renfermant un nid ; éviter l’inhalation du produit et les projections dans les yeux.</div>' },
    { id: 'piqures', t: 'Les piqûres', ic: 'alert', src: LIVPP2 + ', p. 39 ; ' + LANHAM,
      html: '<p>Vive inflammation locale ; peut être grave voire mortelle. <b>Facteurs de gravité</b> : le nombre, le siège, l’état de santé de la victime, l’allergie.</p>',
      steps: ['Extraire le dard (sans presser la glande à venin, ce qui injecterait le venin).', 'Tamponner avec un antiseptique.', 'Surveiller la victime.', 'Si aggravation : consulter un médecin ou transporter à l’hôpital.'], stepsTitle: 'Conduite à tenir',
      after: '<p class="small muted">Victime : voir aussi les chapitres secouristes <a href="#/c/piqures">Piqûres et morsures</a> et <a href="#/c/allergie">Réaction allergique grave</a> (Partie 1).</p>' }
  ],
  key: ['Abeilles : essaim de 10 000 à 60 000 ; contacter un apiculteur sauf danger.', 'Frelon : 3 à 4 cm ; asiatique : venin projeté, > 5 m sans protection.', 'S’équiper hors zone ; EPI complets dès la reconnaissance ; contrôle croisé.', 'TSI manches baissées, combinaison, lunettes, FFP2.', 'Destruction tôt le matin ou à la tombée de la nuit.', 'Jamais d’essence, jamais de feu dans un conduit avec nid, jamais frapper un tronc.', 'En hauteur : LSPCC obligatoire.', 'Piqûre : gravité = nombre, siège, état de santé, allergie.'],
  traps: ['S’équiper au pied du nid.', 'Faire la reconnaissance sans EPI « juste pour voir ».', 'Presser le dard pour l’extraire.', 'Intervenir en plein après-midi sur un nid actif.'],
  quiz: [
    { q: 'À quel moment détruire un nid ?', c: ['Tôt le matin ou à la tombée de la nuit', 'En plein midi', 'Juste après la pluie', 'N’importe quand'], e: 'Livret p. 39 : insectes rassemblés et plus calmes.', s: 'destruction' },
    { q: 'Où les intervenants doivent-ils s’équiper ?', c: ['En dehors de la zone de danger', 'Au pied du nid', 'Après la reconnaissance', 'Dans le jardin du requérant, près du nid'], e: 'NDS 240 bis.', s: 'epi' },
    { q: 'Les EPI complets sont portés :', c: ['Y compris lors de la reconnaissance', 'Seulement pendant la pulvérisation', 'Seulement pour les frelons asiatiques', 'Seulement en hauteur'], e: 'NDS 240 bis : TSI manches baissées, combinaison, lunettes, FFP2.', s: 'epi' },
    { q: 'Nid de guêpes enterré :', c: ['Pulvériser au ras du sol et creuser', 'Verser de l’essence et enflammer', 'Arroser à la lance', 'Le laisser'], e: 'Livret p. 39.', s: 'destruction' },
    { q: 'Nid dans un conduit de cheminée :', c: ['Ne pas allumer de feu dans le conduit', 'Allumer un feu pour l’enfumer', 'Boucher le conduit', 'Utiliser de l’essence'], e: 'Livret p. 39, précautions.', s: 'destruction' },
    { q: 'Face à un essaim d’abeilles sans danger, on :', c: ['Contacte un apiculteur', 'Détruit systématiquement', 'Arrose l’essaim', 'Laisse les requérants s’en occuper'], e: 'Livret p. 38.', s: 'especes' },
    { q: 'Facteurs de gravité d’une piqûre :', c: ['Le nombre, le siège, l’état de santé de la victime, l’allergie', 'Uniquement la couleur de l’insecte', 'L’heure de la piqûre', 'La température extérieure seule'], e: 'Livret p. 39.', s: 'piqures' },
    { q: 'Distance de sécurité recommandée vis-à-vis d’un nid de frelons asiatiques sans équipement :', c: ['Plus de 5 m', '50 cm', '1 m', 'Aucune'], e: 'NDS 240 bis, cas particulier des frelons asiatiques.', s: 'especes' }
  ]
});

/* =====================================================================================
   CHAPITRE 13 — LSPCC : COMPOSITION, CONTRÔLE, ENTRETIEN
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-lspcc-composition', part: 'ppbe', seq: PP4,
  title: 'Le LSPCC : composition, contrôle et entretien', short: 'LSPCC : composition', motif: 'rope',
  sources: [NDS390 + ', p. 4-9', LIVPP2 + ', partie 11 (p. 40-43)', LSPDIAPO, 'Évaluation diagnostique Équipier PPBE SDIS 51 (févr. 2022)'],
  summary: 'Lot engin et lot échelle : sac, corde, frein de charge, anneaux cousus, connecteurs, poulie, harnais, triangle, options ; vérifications et causes de réforme immédiate.',
  why: '<b>Pourquoi tant de rigueur sur un sac de cordes ?</b> Le LSPCC est composé d’<b>EPI de catégorie III</b> : ils protègent contre des chutes pouvant entraîner des lésions irréversibles ou mortelles. Un agrès textile abîmé ne se voit pas toujours : contrôle tactile et visuel avant et après chaque emploi, et en cas de doute le matériel est <b>mis de côté immédiatement</b>.',
  sections: [
    { id: 'emplois', t: 'Emplois du LSPCC', ic: 'list', src: NDS390 + ', p. 4 ; ' + LIVPP2 + ', p. 40',
      html: '<p>En PPBE, les manœuvres LSPCC sont la <b>reconnaissance d’appartement</b> et la <b>protection contre les chutes</b> ; les autres techniques sont vues au stage Équipier incendie (<a href="#/c/inc-lspcc">Les sauvetages au moyen du LSPCC</a>).</p>' +
        '<p><b>Possibilités</b> (doctrine) : sauvetage ou mise en sécurité par l’extérieur ; reconnaissance d’appartement ; sauvetage en puits, fosses, excavations ; abordage et sécurisation d’une victime en péril ; déplacement d’une victime inconsciente ou invalide ; évolution avec risque de chute. <b>Limites</b> : matériel insuffisant ou situation relevant d’une équipe spécialisée ; état de la victime nécessitant une prise en charge spécifique.</p>' },
    { id: 'composition', t: 'Composition : lot engin et lot échelle', ic: 'rope', src: NDS390 + ', p. 5-8',
      html: '<div class="tw"><table><thead><tr><th>Agrès</th><th>Lot engin</th><th>Lot échelle</th><th>À retenir</th></tr></thead><tbody>' +
        '<tr><td>Sac de transport</td><td>Jaune citron</td><td>Bleu</td><td>Rangement, transport à dos ; en situation dégradée, peut servir de protection de corde.</td></tr>' +
        '<tr><td>Corde semi-statique</td><td><b>30 m</b></td><td><b>60 m</b></td><td>Gaine + âme, Ø 12 à 13 mm, nœud de huit double serti ou sous gaine thermorétractable à chaque extrémité. Vigilance sur le <b>brin dormant</b> (frottements).</td></tr>' +
        '<tr><td>Frein de charge (ex-« huit descendeur »)</td><td>1</td><td>1</td><td>Régule la descente par friction ; assure une personne lors des progressions.</td></tr>' +
        '<tr><td>Anneaux de sangle cousus bleus 80 cm</td><td>3</td><td>6</td><td rowspan="2">18 à 25 mm de large ; réalisation des amarrages. Jamais de manœuvre de force, jamais sur la couture.</td></tr>' +
        '<tr><td>Anneaux de sangle cousus rouges 150 cm</td><td>3</td><td>3</td></tr>' +
        '<tr><td>Mousquetons à vis</td><td><b>6</b></td><td><b>9</b></td><td rowspan="2">Liaison entre matériels ; travail dans le grand axe ; vis fermée à la main, sans forcer ; jamais en appui sur un angle (résistance nulle).</td></tr>' +
        '<tr><td>Mousqueton à fermeture automatique</td><td>1 (+1 prévu en 2023)</td><td>1 (+1 prévu en 2023)</td></tr>' +
        '<tr><td>Poulie</td><td colspan="2">2 au SDIS 51</td><td>Renvoi (fixe) ou mouflage (mobile : divise le poids de la charge par deux). Ne doit pas vriller.</td></tr>' +
        '<tr><td>Harnais</td><td>1</td><td>2</td><td>Sur la victime ou le sauveteur ; fermé par connecteur automatique ; l’anneau dorsal est un point d’amarrage comme les attaches sternales.</td></tr>' +
        '<tr><td>Triangle d’évacuation à bretelles</td><td>1</td><td>Option (recommandé)</td><td>Évacuation rapide ; peut équiper une victime inconsciente en urgence absolue ; mousqueton automatique pour l’encordement sternal.</td></tr>' +
        '<tr><td>Cordelettes (option)</td><td colspan="2">2 au SDIS 51</td><td>50 à 60 cm, Ø inférieur à la corde ; nœud autobloquant (3 tours minimum) ; jamais pour un amarrage.</td></tr>' +
        '<tr><td>Protection de corde (option)</td><td colspan="2">—</td><td>Contre angles vifs et matériaux coupants ; corde en contact avec la <b>face toilée</b>.</td></tr>' +
        '<tr><td>Commande (option)</td><td colspan="2">—</td><td>30 m, Ø 7 mm, tressée, un mousqueton à chaque bout ; écarter la victime de la façade ; peut mesurer une hauteur.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Mousquetons automatiques</b>Dans l’attente du 2e mousqueton automatique (dotation 2023), le 1er est <b>obligatoirement sur le harnais</b>. Sur le harnais, le connecteur automatique ne se remplace pas par un mousqueton à vis : la fermeture est assurée par un connecteur automatique conforme à la notice.</div>' +
        '<p class="small muted">L’ancien livret indique aussi que les anneaux peuvent servir de nœud autobloquant, de dispositif de traction ou d’amarrage de matériel ; la doctrine 2022 <b>interdit</b> d’amarrer du matériel avec les anneaux cousus (sauf protections de corde) : c’est la doctrine qui fait foi.</p>' },
    { id: 'controle', t: 'Contrôle et entretien', ic: 'check', src: NDS390 + ', p. 9 ; ' + LSPDIAPO,
      html: '<p><b>Avant emploi</b> : vérification régulière du contenu du sac et de l’état du matériel (vérifications quotidiennes, ou fréquence définie par le SIS si les lots sont scellés).</p>' +
        '<div class="tw"><table><thead><tr><th>Vérifications tactiles</th><th>Vérifications visuelles</th></tr></thead><tbody><tr><td><ul class="check"><li>Corps étrangers dans les agrès en fibres synthétiques</li><li>Écrasement de l’âme de la corde</li><li>Abrasion ou usure de la gaine</li></ul></td><td><ul class="check"><li>Fissures ou cassures des pièces métalliques</li><li>Usures ou souillures des agrès textiles et de leurs coutures</li></ul></td></tr></tbody></table></div>' +
        '<p><b>Après emploi</b> : corde souillée lavée à l’eau douce <b>30 °C maxi, sans détergent</b>, séchée <b>à plat et à l’ombre</b> ; mêmes vérifications ; <b>retourner la corde</b> en la remettant dans le sac. Les pièces métalliques sont nettoyées et contrôlées.</p>' +
        '<p><b>Durée de vie maximale de la corde : 7 ans</b> (diaporama 2014, qui rappelle aussi un code couleur annuel de marquage : 2009 gris, 2010 bleu clair, 2011 noir, 2012 bleu foncé, 2013 vert, 2014 jaune, 2015 rouge…).</p>' +
        '<p>L’entretien incombe au <b>responsable des lots de sauvetage</b> du centre (avec si besoin une équipe départementale spécialisée, GRIMP…) ; le matériel est contrôlé par un responsable avant remise en service. En cas de doute : matériel mis de côté et compte rendu au référent.</p>' },
    { id: 'reforme', t: 'Causes de réforme immédiate', ic: 'alert', src: NDS390 + ', p. 9 ; ' + LIVPP2 + ', p. 43',
      html: '<div class="callout bad"><b>Réforme immédiate des agrès en fibres synthétiques</b><ul class="trap"><li>La <b>chute d’une personne</b> (l’amortissement d’une chute, quelle que soit la hauteur, peut entraîner la réforme de la corde, du harnais ou des anneaux) ;</li><li>l’exposition en atmosphère corrosive ;</li><li>la souillure par produits corrosifs ;</li><li>la brûlure ou la fonte d’une partie de la corde ;</li><li>la coupure ou l’usure de la gaine laissant apparaître l’âme ;</li><li>la réduction de diamètre, une perte de souplesse localisée ou une hernie de l’âme.</li></ul></div>' }
  ],
  key: ['EPI de catégorie III ; doute = matériel mis de côté + compte rendu.', 'Corde semi-statique 12-13 mm : 30 m (lot engin), 60 m (lot échelle).', 'Lot engin : 6 mousquetons à vis + 1 automatique ; lot échelle : 9 + 1.', 'Anneaux : 3 bleus 80 cm + 3 rouges 150 cm (engin) ; 6 bleus + 3 rouges (échelle).', 'Harnais : 1 (engin), 2 (échelle) ; fermé par connecteur automatique.', 'Commande : 30 m, 7 mm.', 'Lavage 30 °C maxi sans détergent, séchage à plat à l’ombre ; corde retournée.', 'Corde : durée de vie maxi 7 ans ; réforme après chute d’une personne.'],
  traps: ['Remplacer le connecteur automatique du harnais par un mousqueton à vis.', 'Sécher la corde au soleil ou laver au détergent.', 'Faire un nœud dans un anneau cousu pour le raccourcir.', 'Remettre en service une corde ayant arrêté une chute sans contrôle.'],
  quiz: [
    { q: 'Longueur de la corde d’un LSPCC « classique » (lot engin) :', c: ['30 m', '60 m', '15 m', '50 m'], e: 'Doctrine LSPCC p. 5 : 30 m lot engin, 60 m lot échelle. Évaluation diagnostique Q26.', s: 'composition' },
    { q: 'Combien de mousquetons à vis dans un LSPCC « classique » (lot engin) ?', c: ['6 (plus 1 mousqueton à fermeture automatique)', '9', '3', '12'], e: 'Doctrine LSPCC p. 6 : ils assurent la liaison entre les matériels. Évaluation diagnostique Q29.', s: 'composition' },
    { q: 'Combien d’anneaux de sangle cousus dans un lot engin et à quoi servent-ils ?', c: ['6 (3 bleus de 80 cm, 3 rouges de 150 cm) pour réaliser les amarrages', '2 pour porter le sac', '9 pour la traction de charges', '12 pour fixer le matériel'], e: 'Doctrine LSPCC p. 6. Évaluation diagnostique Q30.', s: 'composition' },
    { q: 'Vrai ou faux : sur le harnais, le mousqueton à connecteur rapide peut être remplacé par un mousqueton à vis.', c: ['Faux', 'Vrai'], e: 'Doctrine p. 6-7 : la fermeture du harnais est assurée par un connecteur automatique ; dans l’attente du 2e, le 1er est obligatoirement sur le harnais. Évaluation diagnostique Q31.', s: 'composition' },
    { q: 'Parmi ces situations, laquelle est une cause de réforme immédiate d’un agrès textile ?', c: ['Une gaine coupée laissant apparaître l’âme', 'Une corde mouillée par la pluie', 'Un sac décoloré', 'Une corde utilisée en manœuvre sans incident'], e: 'Doctrine p. 9. Évaluation diagnostique Q32.', s: 'reforme' },
    { q: 'Comment laver une corde souillée ?', c: ['À l’eau douce à 30 °C maxi sans détergent, séchage à plat et à l’ombre', 'En machine à 60 °C avec lessive', 'Au nettoyeur haute pression', 'On ne la lave jamais'], e: 'Doctrine p. 9.', s: 'controle' },
    { q: 'Durée de vie maximale d’une corde de LSPCC selon le diaporama d’entretien :', c: ['7 ans', '2 ans', '15 ans', 'Illimitée'], e: 'Diaporama « LSPCC entretien et contrôle » (2014).', s: 'controle' },
    { q: 'Que fait-on en cas de doute sur l’intégrité d’un agrès ?', c: ['On le met de côté immédiatement et on rend compte au référent', 'On l’utilise une dernière fois', 'On le répare avec du ruban adhésif', 'On le garde pour l’entraînement'], e: 'Doctrine p. 5.', s: 'controle' },
    { q: 'Quelles sont les deux manœuvres LSPCC propres à l’équipier PPBE ?', c: ['La reconnaissance d’appartement et la protection contre les chutes', 'Le sauvetage en excavation et le mouflage', 'La descente en rappel et le sauvetage d’animaux', 'L’ascension d’arbre et l’élagage'], e: 'Livret PPBE p. 40.', s: 'emplois' }
  ]
});

/* =====================================================================================
   CHAPITRE 14 — LSPCC : NOTIONS, AMARRAGES ET MANŒUVRES PPBE
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-lspcc-emploi', part: 'ppbe', seq: PP4,
  title: 'Le LSPCC : notions de risque, amarrages et manœuvres PPBE', short: 'LSPCC : manœuvres', motif: 'rope',
  sources: [NDS390 + ', p. 10-24', LIVPP2 + ', p. 40 et 43', 'Évaluation diagnostique Équipier PPBE SDIS 51 (févr. 2022)'],
  summary: 'Facteur de chute, effet pendulaire, tirant d’air, syndrome du harnais ; ancrage, amarrage, nœuds ; reconnaissance d’appartement par l’extérieur et progression avec risque de chute (toiture).',
  why: '<b>Pourquoi le LSPCC n’est-il qu’une alternative ?</b> Parce que les communications existantes, les échelles aériennes ou à main sont plus sûres. Le LSPCC sert quand elles sont impossibles et que la situation exige une action immédiate ; c’est le <b>COS</b> qui valide son emploi ou fait appel à l’équipe secours en milieux périlleux. Et chaque erreur (facteur de chute &gt; 1, mousqueton sur un angle, anneau sur sa couture) peut être fatale.',
  sections: [
    { id: 'notions', t: 'Notions de risque et de force', ic: 'alert', src: NDS390 + ', p. 10-11',
      html: '<ul class="check"><li><b>Facteur de chute (fc)</b> = hauteur de chute (H) ÷ longueur de corde qui amortit (L). <b>fc &gt; 1 interdit ; fc = 1 à éviter.</b></li><li><b>Effet pendulaire</b> : décalé par rapport au dernier amarrage, on chute en pendule : vitesse parfois équivalente à une chute libre, percussion d’obstacles, frottement et rupture possible de la corde.</li><li><b>Tirant d’air</b> : hauteur libre sous le personnel. La corde disponible entre sauveteur et dernier amarrage doit être inférieure à cette hauteur, élasticité comprise (<b>1,5 m lot classique, 2,5 m lot échelle</b>). Exemple : 2 m libres → moins de 2 + 1,5 = <b>3,5 m</b> de corde.</li><li><b>Syndrome du harnais</b> : suspension inerte prolongée → perte de connaissance et défaillance multiviscérale, pronostic vital engagé à très court terme ; en exercice, privilégier un mannequin.</li><li><b>Frottements</b> : frottement « corde sur corde » proscrit.</li></ul>' +
        '<p class="small muted">Schéma du facteur de chute : <a href="#/c/inc-lspcc">Les sauvetages au moyen du LSPCC</a>.</p>' },
    { id: 'systeme', t: 'Ancrage, amarrage, dispositif, charge, binôme', ic: 'list', src: NDS390 + ', p. 12-15',
      html: '<p><b>Ancrage</b> : support solide (naturel : rocher, arbre — testé en tapant avec un OFD ; structurel : poutre, pilier, rambarde, IPN, poteau, engin ; artificiel : échelle, barre Halligan, broches — ces dernières seulement en <b>double amarrage sur deux ancrages distincts</b>). Tester en tapant, en cherchant à le bouger.</p>' +
        '<p><b>Véhicule</b> fiable comme ancrage si : moteur arrêté, clés retirées ; vitesse engagée (à l’inverse de la pente) ; frein de parc serré. <b>Échelles</b> : MEA interdit en point d’ancrage ; échelle bloquée en travers d’une porte autorisée si <b>reployée</b>, anneaux prenant <b>les deux montants</b> (mur solide) ; échelle à un plan proscrite ; jamais en surplomb ; jamais une échelle à crochets sur ses pointes. Un <b>sauveteur</b> peut servir d’ancrage en urgence.</p>' +
        '<div class="callout warn"><b>Règles de l’amarrage</b>Au minimum un connecteur et un anneau cousu sur un ancrage fiable ; répartir la charge entre plusieurs ancrages ; <b>angle entre 2 anneaux ≤ 90°</b> ; jamais travailler sur les coutures ; virole vissée, mousquetons tête en bas ; jamais de nœud sur un anneau cousu pour le raccourcir ; mousqueton jamais en porte-à-faux, toujours dans le grand axe.</div>' +
        '<p><b>Dispositif</b> : agrès connectés aux ancrages par les amarrages pour déplacer une charge. <b>Charge</b> : sauveteur ou victime. <b>Binôme</b> : deux sapeurs-pompiers, dont au moins un chef d’équipe et un équipier.</p>' +
        '<p><b>Nœuds</b> (tout nœud réduit la résistance de la corde) : <b>huit double</b> ; <b>nœud français</b> (autobloquant à la cordelette, à défaut un anneau cousu) ; <b>tête d’alouette</b> (diminue fortement la résistance de l’anneau, doit travailler dans le bon axe) ; <b>clé d’arrêt sur frein de charge</b> : réalisée, vérifiée (les 2 brins dans le grand trou), testée, elle permet de lâcher le brin libre.</p>' },
    { id: 'operation', t: 'Règles en opération', ic: 'check', src: NDS390 + ', p. 17-18',
      html: '<ul class="check"><li>Choisir la technique la plus simple et la plus sécurisante ; prévoir un parc matériel identifié (le sac, une bâche).</li><li>Pas de matériel sur un sol jonché de débris ; éviter de marcher sur les textiles.</li><li>Mousquetons vissés, sens de vissage vers le bas ; un mousqueton pour relier deux anneaux.</li><li>Frein de charge toujours sur un amarrage (en fixe) ; tester par une traction sur le brin libre.</li><li><b>Mise au vide = phase critique</b> : frein sécurisé par une clé réalisée-vérifiée-testée, ou brin tenu fermement (avec ou sans demi-clé).</li><li>Une fois la charge en tension : vérifier amarrages, agrès, frottements, tester le frein sur quelques centimètres.</li></ul>' },
    { id: 'reco', t: 'Reconnaissance d’appartement (ouverture de porte)', ic: 'eye', src: NDS390 + ', p. 20 et 23 ; ' + LIVPP2 + ', p. 40',
      html: '<p>Pour une personne ne répondant pas aux appels ou une ouverture de porte avec victime, le LSPCC permet à un sauveteur d’accéder à un étage <b>depuis un étage supérieur</b>, avec la même technique que le sauvetage par l’extérieur. Moyens radio indispensables. En l’absence de risque, après avoir informé l’équipier chargé de l’assurance, le sauveteur se désolidarise du système, fixe le mousqueton de la corde sur un point d’attache et poursuit sa reconnaissance.</p>' +
        '<p><b>Avec un point fixe</b> : le frein de charge est sur un amarrage. <b>Sauveteur en point fixe</b> (urgence, aucun amarrage possible) : l’<b>équipier sert d’ancrage</b>, harnais sur lequel est installé le frein de charge, <b>allongé, jambes à 90° contre le mur</b>, il contrôle la descente ; hauteur entre frein de charge et point d’appui sur le vide <b>≥ 20 cm</b>. Le chef d’agrès désigne le personnel, indique le lieu et fixe les moyens d’accès.</p>' +
        '<div class="callout ok"><b>Rôle de l’équipier</b>En reconnaissance d’appartement par point fixe constitué par le sauveteur, l’équipier est le point d’ancrage : il assure et contrôle la descente du chef d’équipe au frein de charge, reste attentif et en liaison, et ne lâche jamais le brin libre sans clé d’arrêt réalisée, vérifiée et testée.</div>' },
    { id: 'progression', t: 'Évolution avec risque de chute (progression sur toiture)', ic: 'mountain', src: NDS390 + ', p. 23-24',
      steps: ['Équipier : réalise l’amarrage principal sur un ancrage solide (ex. poutre métallique).', 'Équipier : assure le chef en étant vigilant à sa progression (donne ou reprend du mou à l’écoute du sauveteur).', 'Chef d’équipe : muni d’anneaux cousus et de connecteurs, progresse et réalise son premier amarrage intermédiaire.', 'Chef d’équipe : réalise des amarrages intermédiaires tout au long de sa progression.'], stepsTitle: 'Progression au moyen du LSPCC',
      after: '<div class="callout warn"><b>Prescriptions</b>Corde la plus tendue possible ; l’assureur reste attentif et à l’écoute ; le sauveteur ne doit jamais se trouver au-dessus d’un <b>facteur de chute 1</b> : amarrages toujours au-dessus de l’axe de déplacement ou au même niveau ; <b>interdit de démonter des amarrages posés</b> (manque de matériel → autre lot ou équipe milieux périlleux).</div>' }
  ],
  key: ['LSPCC = alternative ; le COS valide son emploi.', 'fc = H ÷ L ; fc > 1 interdit, fc = 1 à éviter.', 'Tirant d’air : élasticité 1,5 m (lot classique), 2,5 m (lot échelle).', 'Angle entre 2 anneaux ≤ 90° ; jamais sur la couture ; pas de nœud sur un anneau.', 'Véhicule ancrage : moteur arrêté, clés retirées, vitesse engagée, frein serré.', 'Échelle ancrage : reployée, deux montants ; MEA interdit.', 'Mise au vide : phase critique, clé d’arrêt réalisée-vérifiée-testée.', 'Équipier en point fixe : allongé, jambes à 90°, ≥ 20 cm frein/arête.', 'Progression : amarrages au-dessus ou au niveau de l’axe ; ne jamais démonter un amarrage posé.'],
  traps: ['Progresser au-dessus de son dernier amarrage (fc > 1).', 'Utiliser l’échelle aérienne comme point d’ancrage.', 'Lâcher le brin libre sans clé d’arrêt testée.', 'Laisser la corde frotter sur une autre corde.', 'Démonter un amarrage intermédiaire pour le réutiliser plus loin.'],
  quiz: [
    { q: 'Quel facteur de chute est interdit ?', c: ['Supérieur à 1', 'Égal à 0', 'Inférieur à 0,5', 'Égal à 0,3'], e: 'Doctrine p. 10 : fc > 1 interdit, fc = 1 à éviter.', s: 'notions' },
    { q: 'Hauteur libre de 2 m sous le sauveteur, lot classique : longueur de corde maximale entre le sauveteur et le dernier amarrage ?', c: ['Moins de 3,5 m', 'Moins de 2 m', 'Moins de 4,5 m', 'Peu importe'], e: 'Doctrine p. 11 : 2 m + 1,5 m d’élasticité.', s: 'notions' },
    { q: 'L’angle formé entre deux anneaux cousus d’un amarrage ne doit jamais dépasser :', c: ['90°', '45°', '120°', '180°'], e: 'Doctrine p. 15 : risque de sursollicitation des ancrages.', s: 'systeme' },
    { q: 'Peut-on utiliser une échelle aérienne (MEA) comme point d’ancrage ?', c: ['Non, c’est interdit (NDS 2019-44)', 'Oui, toujours', 'Oui, si elle est déployée', 'Seulement en PPBE'], e: 'Doctrine p. 13.', s: 'systeme' },
    { q: 'Dans la manœuvre reconnaissance d’appartement par point fixe constitué par le sauveteur, le rôle de l’équipier est :', c: ['De servir d’ancrage : allongé, frein de charge sur son harnais, jambes à 90° contre le mur, il contrôle la descente', 'De descendre en premier dans l’appartement', 'D’attendre au pied de l’immeuble', 'De forcer la porte palière'], e: 'Doctrine p. 20. Évaluation diagnostique Q33.', s: 'reco' },
    { q: 'Dans la manœuvre progression sur toiture, le rôle de l’équipier est :', c: ['Réaliser l’amarrage principal sur un ancrage solide puis assurer le chef d’équipe en restant vigilant à sa progression', 'Progresser en tête et poser les amarrages intermédiaires', 'Démonter les amarrages derrière le chef', 'Tenir l’échelle en bas'], e: 'Doctrine p. 24. Évaluation diagnostique Q34.', s: 'progression' },
    { q: 'Hauteur minimale entre le frein de charge et le point d’appui sur le passage dans le vide (équipier en point fixe) :', c: ['20 cm', '5 cm', '1 m', '50 cm'], e: 'Doctrine p. 20.', s: 'reco' },
    { q: 'Un véhicule est un ancrage fiable si :', c: ['Moteur arrêté et clés retirées, vitesse engagée à l’inverse de la pente, frein de parc serré', 'Le moteur tourne pour pouvoir le déplacer', 'Il est au point mort', 'Il est garé en pente'], e: 'Doctrine p. 13.', s: 'systeme' },
    { q: 'Qui valide l’emploi du LSPCC ?', c: ['Le COS, au regard de son analyse des risques', 'L’équipier', 'Le requérant', 'Le CODIS seul'], e: 'Doctrine p. 10.', s: 'notions' },
    { q: 'Pour une clé d’arrêt sur le frein de charge, il faut qu’elle soit :', c: ['Réalisée, vérifiée et testée', 'Seulement réalisée', 'Faite par le chef d’agrès', 'Remplacée par un nœud de huit'], e: 'Doctrine p. 16.', s: 'systeme' }
  ]
});
