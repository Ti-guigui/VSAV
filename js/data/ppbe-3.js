/* ÉQUIPIER PPBE — fichier 3 : PPBE 4 (le risque animalier, serpents et NAC, hyménoptères)
   Sources : dossier Drive « 3 - PPBE - ex DIV » :
   - livret stagiaire Équipier PPBE SDIS 51 (v2017-1 modifié 2022), Partie 10 (p. 32-39 ; tableaux p. 35-36 relus sur le PDF) ;
   - « les NAC » : présentation « Le risque animalier » (Vét. LCL M. LANHAM, SSSM SDIS 51, 11/2021), fiche « La capture des serpents »
     (crochet et sac de transport, SDIS 51, 2015), « Les différents serpents de Champagne-Ardenne » ;
   - notes de service SDIS 51 n° 031 (23/03/2009, hyménoptères), n° 240 bis (05/02/2019, hyménoptères - frelons asiatiques),
     n° 105 (23/03/2012, animaux blessés), lues sur les PDF numérisés ;
   - « PHOTOS nid de frelons asiatique.docx » (dimensions des nids). */
var PB4 = 'PPBE 4 — Le risque animalier et les hyménoptères';
var PL3 = 'Livret stagiaire Équipier PPBE SDIS 51 (v2017-1, modifié 2022)';
var LANHAM = 'Présentation « Le risque animalier » (Vét. LCL M. Lanham, SSSM SDIS 51, 11/2021)';
var CAPT = 'Fiche « La capture des serpents » (SDIS 51, 2015)';
var SERP = 'Document « Les différents serpents de Champagne-Ardenne » (dossier NAC, SDIS 51)';

/* ================================================================ 1. Risque animalier */
VSAV.chap({
  id: 'ppbe-animaux', part: 'ppbe', seq: PB4,
  title: 'Le risque animalier : approcher, capturer, contenir', short: 'Risque animalier', motif: 'eye',
  sources: [PL3 + ', Partie 10 (p. 32-37)', LANHAM, 'Note de service SDIS 51 n° 105 « Prise en charge des animaux blessés » (23/03/2012)'],
  summary: 'Catégories d’animaux, identification, dangers, conduite générale, zones de fuite et critique, matériel de capture, situations types et cadre des interventions.',
  why: '<b>Pourquoi tant de méthode ?</b> Il y a en France <b>trois fois plus d’interventions impliquant des animaux que de sorties pour incendie</b> (environ une par minute). Elles sont <b>fréquentes, dangereuses</b> (réactions défensives), <b>difficiles</b> (aucune réaction stéréotypée) et encadrées par la loi (protection animale). Il faut donc du calme, de l’observation et la capacité de s’adapter.',
  sections: [
    { id: 'categories', t: 'Catégories, identification, dangers', ic: 'list', src: PL3 + ', p. 32',
      html: '<p>Pour les gros animaux, les animaux sauvages ou exotiques, <b>l’intervention d’un vétérinaire est indispensable</b>. Les vétérinaires sapeurs-pompiers font partie du <b>SSSM</b> (unité vétérinaire départementale).</p>' +
        '<div class="tw"><table><thead><tr><th>Catégorie</th><th>Définition</th></tr></thead><tbody><tr><td>Espèces sauvages</td><td>Vivent dans la nature, pas habituées au contact de l’homme.</td></tr><tr><td>Espèces protégées</td><td>Faune sauvage captive ; détention réglementée.</td></tr><tr><td>Espèces domestiques</td><td>Espèces communes apprivoisées par l’homme.</td></tr></tbody></table></div>' +
        '<div class="tw"><table><thead><tr><th>Animal</th><th>Identification</th><th>Dangers physiques</th></tr></thead><tbody>' +
        '<tr><td>Chien</td><td>Tatouage ou puce, fichier central (I-CAD)</td><td>Morsures</td></tr>' +
        '<tr><td>Chat</td><td>Idem</td><td>Morsures, griffures (et zoonoses)</td></tr>' +
        '<tr><td>Bovin</td><td>Bague sanitaire à <b>10 chiffres</b> (les 2 premiers = département)</td><td>Coups de cornes, tentatives de charge, coups de pied (postérieurs)</td></tr>' +
        '<tr><td>Cheval</td><td>Livret signalétique et puce électronique</td><td>Ruades et morsures</td></tr>' +
        '<tr><td>Ovin, caprin</td><td>–</td><td>Coups de cornes, coups de tête</td></tr>' +
        '<tr><td>Porcin (sanglier)</td><td>–</td><td>Morsures, tentatives de charge</td></tr></tbody></table></div>' +
        '<p>Dangers infectieux : piqûres d’insectes, infection cutanée, morsure, blessure… et <b>zoonoses</b> (maladies animales transmissibles à l’homme).</p>' },
    { id: 'conduite', t: 'La conduite générale à tenir', ic: 'shield', src: PL3 + ', p. 36 ; ' + LANHAM + ', diapo 10',
      html: '<p>En général, l’animal en confiance se laisse aborder : le prévenir pour ne pas le surprendre et ne montrer <b>aucun signe d’intimidation</b>.</p><ul class="check"><li>Assurer <b>sa propre sécurité</b> (EPI complets) et celle des autres (<b>périmètre de sécurité</b>).</li><li>Protéger l’animal par ce périmètre pour éviter le sur-accident.</li><li>Attitude <b>calme et déterminée</b> ; <b>ne pas soutenir le regard</b> de l’animal ; éviter les mouvements brusques.</li><li>Adapter comportement et équipement à l’attitude de l’animal.</li><li><b>Engager le minimum de personnel</b> (idéal : un binôme) ; tenir les curieux et les « pseudo-experts » à distance ; chercher un véritable expert (éleveur, vétérinaire, maître).</li></ul>' },
    { id: 'zones', t: 'Zone de fuite et zone critique', ic: 'target', src: PL3 + ', p. 37',
      html: '<div class="tw"><table><thead><tr><th>Notion</th><th>Définition</th><th>Valeurs</th></tr></thead><tbody>' +
        '<tr><td><b>Ligne (zone) de fuite</b></td><td>Distance de sécurité pour l’animal : distance minimum qui le sépare de son adversaire en lui laissant la possibilité de s’enfuir.</td><td>Vache ≈ <b>5 m</b> ; chien ≈ <b>10 m</b></td></tr>' +
        '<tr><td><b>Ligne critique</b></td><td>Espace vital : en deçà, l’animal se sent coincé et répond par l’<b>attaque</b> (dominant) ou la <b>soumission</b> (dominé).</td><td>Chat <b>50 cm à 1 m</b> ; chien <b>1,50 m à 3 m</b></td></tr></tbody></table></div>' +
        '<p>Ne pas fixer l’animal, ne pas s’approcher trop vite, respecter la zone de fuite et <b>ne pas entrer dans la zone critique</b>. Le lasso et la pince permettent de respecter ces distances.</p>' },
    { id: 'especes', t: 'Lire le comportement : chien, chat, cheval, bovins', ic: 'eye', src: PL3 + ', p. 37 ; ' + LANHAM + ', diapos 3-7',
      html: '<div class="tw"><table><thead><tr><th>Animal</th><th>Signes et règles</th></tr></thead><tbody>' +
        '<tr><td><b>Chien</b> (danger : morsure +++)</td><td>Ne jamais le fixer dans les yeux ni le prendre directement par le collier ; <b>museler systématiquement avant manipulation</b> ; parler doucement. Se faire considérer comme dominant. <b>Soumission active</b> (courbé, queue basse, oreilles en arrière, petits coups de langue) : s’en méfier, il est craintif et peut perdre le contrôle. <b>Soumission passive</b> (sur le dos, abdomen exposé) : le traiter doucement.</td></tr>' +
        '<tr><td><b>Chat</b> (morsures, griffures, zoonoses)</td><td>Gros dos, pattes raidies, poils hérissés, queue sur le côté, oreilles aplaties, nez plissé, grondement : s’il <b>« crache »</b>, le point critique est franchi, l’attaque est possible. Contention, couverture, filet, pince à chat, cage robuste.</td></tr>' +
        '<tr><td><b>Cheval</b> (postérieurs +++, poids, morsure)</td><td>Pas de geste brusque, mains derrière le dos, pas de couvre-chef ; lui parler ; l’aborder <b>par sa gauche</b>, vers l’épaule ; un bras par-dessus l’encolure pour mettre le licol. S’il s’échappe, rester à 1 m–1,5 m et marcher à côté. <b>Oreilles couchées en arrière : méfiance.</b></td></tr>' +
        '<tr><td><b>Gros bovins</b></td><td>Postérieurs, cornes, poids ; observer, respecter les zones de sécurité, comportement de groupe.</td></tr>' +
        '<tr><td>Petits ruminants</td><td>Pour maîtriser : asseoir ou coucher sur le dos ; pour faire avancer : saisir jarret ou oreille.</td></tr>' +
        '<tr><td>Animaux sauvages</td><td>Stress et force +++ : <b>ils peuvent mourir de stress</b>. Chauves-souris (gants, épuisette, carton), oiseaux (aveugler, ailes collées au corps ; rapaces protégés).</td></tr></tbody></table></div>' },
    { id: 'materiel', t: 'Le matériel de capture et de contention', ic: 'rope', src: PL3 + ', p. 33-34',
      html: '<div class="tw"><table><thead><tr><th>Pour…</th><th>Matériel</th></tr></thead><tbody>' +
        '<tr><td>Chiens, chats</td><td><b>Lasso</b> (maîtriser) ; <b>lacette</b> (cordelette de <b>1,20 m</b> qui muselle les animaux à museau pointu) ; <b>cage</b> (soigner, transporter) ; <b>pince à chat</b> (saisir le cou) ; fusil hypodermique (vétérinaire).</td></tr>' +
        '<tr><td>Bovins, chevaux</td><td><b>Cordelette</b> pour un licol (autour des cornes ou du cou, puis du mufle) ; <b>mouchette</b> (tenir l’animal par le nez) ; <b>sangles de levage</b> (animal tombé dans un trou, une piscine) ; harnais de sauvetage de la berce sauvetage-déblaiement.</td></tr>' +
        '<tr><td>Capture à distance</td><td><b>Fusil hypodermique</b> : seringue anesthésiante, tir jusqu’à <b>40 m environ</b>, <b>uniquement sous le contrôle d’un vétérinaire</b>.</td></tr>' +
        '<tr><td>Reptiles, lézards</td><td>Crochet et pince à serpent, sac de toile ou glacière ; <b>couverture</b> pour les lézards et iguanes (caché, l’animal se calme). Voir <a href="#/c/ppbe-serpents">Serpents et NAC</a>.</td></tr>' +
        '<tr><td>Oiseaux</td><td>Filets, appâts (graines).</td></tr></tbody></table></div>',
      figs: [{ img: 'img/ppbe/lacette.jpg', cap: 'La lacette : museler un chien', txt: '<p>Une boucle autour du museau, les brins croisés sous la mâchoire, puis noués derrière la nuque.</p>', src: PL3 + ', p. 34' }] },
    { id: 'situations', t: 'Les situations types', ic: 'list', src: PL3 + ', p. 35-37',
      html: '<div class="tw"><table><thead><tr><th>Mission</th><th>Risques</th><th>Conduite à tenir</th></tr></thead><tbody>' +
        '<tr><td>Chien blessé, accidenté, inanimé</td><td>Morsures</td><td>Approcher <b>par l’arrière</b> pour apprécier ses réactions ; museler ; mettre sur un brancard.</td></tr>' +
        '<tr><td>Chien bloqué sur une paroi rocheuse</td><td>Morsures</td><td>Équipe <b>GRIMP</b> ; s’il est affamé, ne le nourrir qu’après l’intervention.</td></tr>' +
        '<tr><td>Chien enfermé dans une voiture</td><td>Coup de chaleur souvent mortel (pour le chien)</td><td>Si on peut ouvrir : le mouiller pour le refroidir, l’emmener chez le vétérinaire. Sinon, <b>arroser la voiture</b>.</td></tr>' +
        '<tr><td>Chien dans une voiture accidentée</td><td>Morsures</td><td>Faire intervenir un animalier ; l’attraper au lasso et le faire sortir.</td></tr>' +
        '<tr><td>Chien méchant menaçant la sécurité</td><td>Morsure</td><td>Animalier ; lasso ou filet ; forces de l’ordre.</td></tr>' +
        '<tr><td>Chat perché au sommet d’un arbre</td><td>Griffure, morsure</td><td><b>Ce n’est pas une urgence.</b></td></tr>' +
        '<tr><td>Cheval ou vache tombé dans un trou</td><td>Coups de pied, de corne ; un animal affolé est très dangereux</td><td>Le tranquilliser ; vétérinaire, animaliers (plongeurs ou GRIMP si nécessaire).</td></tr>' +
        '<tr><td>Cheval ou bovin dans une piscine</td><td>Noyade de l’animal</td><td>Pomper rapidement jusqu’à ce qu’il ait pied ; en attendant, soutenir l’animal, tête hors de l’eau.</td></tr>' +
        '<tr><td>Écurie ou étable en feu</td><td>Bêtes affolées qui retournent dans le feu ; bousculade, piétinement, cornes</td><td>Sortir les animaux au plus vite (couvrir la tête des chevaux) et les maintenir parqués ; vétérinaire.</td></tr>' +
        '<tr><td>Camion d’animaux vivants accidenté</td><td>Divagation et collisions graves ; animaux excités difficiles à récupérer</td><td>Vétérinaire ; récupérer les animaux, les charger dans une bétaillère ; trier ceux restés dans le camion.</td></tr>' +
        '<tr><td>Cheval ou bovin en divagation</td><td>Accident de la circulation ; coups, charge</td><td><b>Bloquer la circulation</b> ; agir dans le calme ; animalier, vétérinaire ou agriculteur pour la capture.</td></tr>' +
        '<tr><td>Animaux exotiques ou de cirque</td><td>Propres à l’animal (éléphant, girafe, panthère, bison, singe : les plus dangereux)</td><td>Vétérinaire ; calmer la population ; prévenir le propriétaire.</td></tr></tbody></table></div>' +
        '<p><b>Animal enlisé, dans l’eau ou en excavation :</b> le vétérinaire juge des moyens. <b>Relevage d’un animal blessé :</b> sur un plan dur, comme en secourisme, avec une contention parfaite.</p>' },
    { id: 'cadre', t: 'Le cadre : maire, animaux errants et blessés', ic: 'book', src: 'NDS SDIS 51 n° 105 (2012) ; ' + LANHAM + ', diapos 4 et 11',
      html: '<ul class="check"><li>Le <b>maire</b> est responsable des animaux errants sur sa commune ; il organise leur prise en charge (code rural, art. R.211-11 et R.211-12). En l’absence de propriétaire, la prise en charge d’un animal relève de l’<b>autorité de police municipale</b> : ces missions sont <b>exclues du champ de compétence des sapeurs-pompiers</b>.</li>' +
        '<li><b>Animal sauvage</b> : le CTA-CODIS contacte l’<b>ONCFS</b> (Office national de la chasse et de la faune sauvage) ; s’il ne peut intervenir, on applique les dispositions des animaux domestiques.</li>' +
        '<li><b>Animal domestique</b> : la demande est transmise au maire. S’il souhaite l’intervention des sapeurs-pompiers, il transmet au CTA-CODIS un <b>accord préalable de prise en charge financière</b> (frais vétérinaires à la charge de la commune).</li>' +
        '<li><b>Exception</b> : un animal en péril dont le sauvetage ne relève pas de moyens conventionnels peut être pris en charge <b>à titre gracieux</b>, sur appréciation du chef de groupe CODIS.</li>' +
        '<li>Morsure de chien : déclaration au maire, surveillance sanitaire et évaluation comportementale de l’animal. Il existe un <b>groupe cynophile</b> dans la Marne.</li>' +
        '<li>Le code pénal punit les sévices graves ou actes de cruauté envers un animal domestique (<b>3 ans et 30 000 €</b> ; <b>5 ans et 75 000 €</b> en cas de mort de l’animal).</li></ul>' +
        '<p>Les tarifs (capture d’animaux errants) sont dans <a href="#/c/ppbe-procedures/payant">Interventions payantes</a>.</p>' }
  ],
  key: ['Gros animaux, sauvages ou exotiques : vétérinaire indispensable (SSSM).', 'Calme, ne pas fixer l’animal, pas de geste brusque, minimum de personnel, périmètre.', 'Zone de fuite : vache ≈ 5 m, chien ≈ 10 m. Zone critique : chat 50 cm–1 m, chien 1,50–3 m.', 'Chien : museler avant toute manipulation ; jamais par le collier.', 'Chat qui « crache » : point critique franchi.', 'Cheval : aborder par la gauche, vers l’épaule ; oreilles couchées = méfiance.', 'Lacette 1,20 m ; fusil hypodermique ≈ 40 m, sous contrôle vétérinaire.', 'Chat dans un arbre : pas une urgence ; chien dans une voiture au soleil : le refroidir.', 'Animaux errants : responsabilité du maire.'],
  traps: ['Saisir un chien par le collier.', 'Fixer l’animal dans les yeux pour « l’impressionner ».', 'Laisser les curieux s’approcher et conseiller.', 'Aborder un cheval par l’arrière.', 'Utiliser un fusil hypodermique sans vétérinaire.'],
  quiz: [
    { q: 'Quelle est la zone critique d’un chien ?', c: ['1,50 m à 3 m', '50 cm à 1 m', 'Environ 10 m', 'Environ 5 m'], e: 'Livret PPBE p. 37 ; environ 10 m est sa zone de fuite.', s: 'zones' },
    { q: 'Un chat « crache ». Cela signifie :', c: ['Que le point critique est franchi : risque d’attaque', 'Qu’il est soumis', 'Qu’il a faim', 'Qu’il est malade'], e: 'Livret PPBE p. 37.', s: 'especes' },
    { q: 'Par quel côté aborde-t-on un cheval ?', c: ['Par sa gauche, en allant vers son épaule', 'Par l’arrière', 'Face à la tête', 'Par sa droite, vers la croupe'], e: 'Présentation « Le risque animalier », diapo 6.', s: 'especes' },
    { q: 'Avant de manipuler un chien, il faut :', c: ['Le museler', 'Le prendre par le collier', 'Le fixer dans les yeux', 'Lui donner à manger'], e: 'Présentation « Le risque animalier », diapo 3.', s: 'especes' },
    { q: 'Quelle est la longueur de la lacette ?', c: ['1,20 m', '50 cm', '3 m', '30 m'], e: 'Livret PPBE p. 34 : elle muselle les animaux à museau pointu.', s: 'materiel' },
    { q: 'Le fusil hypodermique peut être utilisé :', c: ['Uniquement sous le contrôle d’un vétérinaire', 'Par tout chef d’agrès', 'Par l’équipier formé', 'Jamais en France'], e: 'Livret PPBE p. 34 ; distance de tir maxi ≈ 40 m.', s: 'materiel' },
    { q: 'Un chat est perché au sommet d’un arbre :', c: ['Ce n’est pas une urgence', 'On engage immédiatement l’échelle aérienne', 'On abat l’arbre', 'On appelle le GRIMP'], e: 'Tableau des situations, livret p. 35.', s: 'situations' },
    { q: 'Un chien est enfermé dans une voiture en plein soleil, on ne peut pas ouvrir :', c: ['On arrose la voiture', 'On attend le propriétaire', 'On casse toujours la vitre côté conducteur', 'On ne fait rien'], e: 'Livret PPBE p. 35 : coup de chaleur souvent mortel.', s: 'situations' },
    { q: 'Qui est responsable des animaux errants sur une commune ?', c: ['Le maire', 'Le SDIS', 'Le vétérinaire du SSSM', 'La gendarmerie'], e: 'NDS 105 et présentation « Le risque animalier ».', s: 'cadre' },
    { q: 'Un cheval ou un bovin divague sur la route. Première action ?', c: ['Bloquer la circulation', 'Le poursuivre en courant', 'L’effrayer pour le faire sortir', 'Attendre le propriétaire sans rien faire'], e: 'Livret PPBE p. 36.', s: 'situations' }
  ]
});

/* ================================================================ 2. Serpents et NAC */
VSAV.chap({
  id: 'ppbe-serpents', part: 'ppbe', seq: PB4,
  title: 'Serpents et nouveaux animaux de compagnie (NAC)', short: 'Serpents et NAC', motif: 'wave',
  sources: [PL3 + ', Partie 10 « Les reptiles – Les NAC » (p. 33 et 37)', CAPT, SERP, LANHAM + ', diapo 8'],
  summary: 'Reconnaître vipère et couleuvre, les serpents de Champagne-Ardenne et d’animalerie, capturer selon la taille, équipement et devenir de l’animal.',
  why: '<b>Pourquoi apprendre à reconnaître ?</b> Des 7 serpents sauvages de la région, seules deux vipères sont venimeuses, et <b>toutes les espèces sont protégées</b>. Identifier l’animal décide de l’équipement, de la technique de capture et de ce qu’on en fait ensuite. Dans tous les cas : <b>il est strictement interdit de tuer un serpent</b>.',
  sections: [
    { id: 'reconnaitre', t: 'Vipère ou couleuvre ?', ic: 'eye', src: PL3 + ', p. 33 ; ' + SERP,
      html: '<div class="tw"><table><thead><tr><th></th><th>Vipère (venimeuse)</th><th>Couleuvre (non venimeuse)</th></tr></thead><tbody>' +
        '<tr><td>Silhouette</td><td>Trapue, <b>moins de 80 cm</b> (aspic jusqu’à 1 m), corps épais, <b>queue courte</b></td><td>Svelte et allongée, <b>queue effilée</b></td></tr>' +
        '<tr><td>Tête</td><td><b>Triangulaire</b>, <b>V sur la tête</b>, museau retroussé (aspic)</td><td>Pas de V</td></tr>' +
        '<tr><td>Pupille</td><td><b>Verticale</b></td><td><b>Ronde</b></td></tr>' +
        '<tr><td>Dos</td><td>Ligne foncée en <b>zigzag</b></td><td>Gris, brun, roussâtre, vert-olive…</td></tr>' +
        '<tr><td>Mouvements</td><td>Plus lents</td><td>Plus rapides</td></tr></tbody></table></div>' },
    { id: 'especes', t: 'Les serpents de Champagne-Ardenne et d’animalerie', ic: 'list', src: SERP,
      html: '<div class="tw"><table><thead><tr><th>Espèce</th><th>Repères</th></tr></thead><tbody>' +
        '<tr><td>Couleuvre à collier (courante)</td><td>Mâle ≈ 1,10 m, femelle 1,60 à 2 m ; collier jaune-blanc (s’efface avec l’âge) ; semi-aquatique ; coups de tête, liquide nauséabond, sifflement, fait la morte.</td></tr>' +
        '<tr><td>Coronelle lisse (courante)</td><td>Rarement plus de 70 cm ; tête arrondie, écailles très lisses ; totalement inoffensive.</td></tr>' +
        '<tr><td>Couleuvre d’Esculape (rare)</td><td>≈ 1,50 m (jusqu’à 2 m) ; brun-vert olivâtre ; arboricole, parfois dans les charpentes.</td></tr>' +
        '<tr><td>Couleuvre verte et jaune (courante)</td><td>1,10 à 1,50 m ; ronciers, murs de pierres ; peut mordre à plusieurs reprises.</td></tr>' +
        '<tr><td>Couleuvre vipérine (courante)</td><td>70 à 90 cm ; zigzag sombre (confusion avec la vipère) mais <b>pupilles rondes</b> ; inoffensive.</td></tr>' +
        '<tr><td><b>Vipère aspic</b> (courante, <b>venimeuse</b>)</td><td>≈ 70 cm (jusqu’à 1 m) ; s’enroule, tête en ressort ; beaucoup de morsures sans venin.</td></tr>' +
        '<tr><td><b>Vipère péliade</b> (rare, <b>venimeuse</b>)</td><td>50 à 70 cm ; surtout au sud-ouest du département ; venin très puissant (peut tuer un enfant).</td></tr></tbody></table></div>' +
        '<p><b>Toutes ces espèces sont protégées</b> : interdit de les capturer (hors intervention), blesser, tuer, déplacer, ou de détruire leur ponte.</p>' +
        '<p><b>En animalerie (NAC, non venimeux) :</b> lampropeltis (serpent roi, jusqu’à 1,50 m, morsure douloureuse), pantherophis (serpent des blés, paisible), <b>boa</b> (1,20 à 3,70 m, 20-25 kg, très musclé : <b>au moins 3 SP au-delà de 2 m, 4 au-delà de 3 m</b>, un à la tête puis un par mètre ; distance de 1 m si agressif), <b>python</b> (le python réticulé, interdit à la vente, atteint 4 à 9 m et 90 à 140 kg : <b>renfort d’un FPT au minimum</b>).</p>' +
        '<p>Les NAC sont des animaux sauvages détenus par des particuliers ; certaines catégories exigent un <b>certificat de capacité</b>.</p>' },
    { id: 'epi', t: 'L’équipement', ic: 'shield', src: CAPT + ' ; ' + PL3 + ', p. 33',
      html: '<div class="tw"><table><thead><tr><th>Serpent</th><th>EPI</th></tr></thead><tbody><tr><td>Taille <b>&lt; 1,20 m</b> et non dangereux</td><td>Tenue F1 <b>manches baissées</b>, gants d’intervention, bottes ou rangers.</td></tr><tr><td>Taille <b>≥ 1,20 m</b> ou dangereux</td><td>Tenue F1 + <b>tenue de feu complète</b>, gants, bottes ou rangers.</td></tr></tbody></table></div>' +
        '<p>Matériel : <b>crochet à serpent</b> (tige métallique de 50 cm à 1 m, coudée), <b>pince à serpent</b> (saisir au plus près de la tête en le tenant à distance), <b>sac de toile</b> (l’animal respire au travers) ou <b>glacière</b> pour le transport.</p>' },
    { id: 'capture', t: 'Capturer selon la taille', ic: 'hand', src: CAPT,
      html: '<p><b>Principes :</b> se protéger les mains, engager le minimum de personnel, éloigner les curieux ; l’équipier protège son binôme à l’aide d’un bâton.</p>' +
        '<div class="tw"><table><thead><tr><th>Méthode</th><th>Gestes</th></tr></thead><tbody>' +
        '<tr><td><b>1. Petite taille</b></td><td>Attraper le serpent <b>vers le milieu du corps</b> avec le crochet, le soulever doucement, le placer d’un geste continu dans le sac préparé, <b>refermer le sac en retirant le crochet</b>. Identifié et non venimeux : capture possible à la main gantée.</td></tr>' +
        '<tr><td><b>2. Taille moyenne (≤ 1,20 m)</b></td><td>Crochet dans le <b>premier tiers côté tête</b> ; soulever jusqu’à décoller les deux tiers ; tenir le bout de la queue pour un 2<sup>e</sup> point d’appui ; placer dans le sac. Non venimeux identifié : bloquer la tête au crochet, la saisir juste derrière, mettre le serpent dans le sac <b>en commençant par la queue</b>, lâcher la tête à mi-hauteur du sac et refermer.</td></tr>' +
        '<tr><td><b>3. Grande taille (&gt; 1,20 m)</b></td><td>Distance de sécurité d’<b>au moins 1 m</b> le temps d’analyser ; <b>au-delà de 2 m, demander du renfort</b> ; bloquer la tête avec un outil (manche de pelle…), saisir l’arrière de la tête à ras des mâchoires à deux mains <b>sans lâcher</b> ; les autres équipiers maintiennent le corps à intervalles réguliers.</td></tr></tbody></table></div>' +
        '<p>Animal inaccessible : le déloger avec prudence, sans le stresser ; démonter ou faire démonter les installations (radiateur, coffrage de baignoire…). <b>Limite</b> du crochet : la rapidité, pour que le serpent ne remonte pas vers la main.</p>' },
    { id: 'devenir', t: 'Que devient le serpent ?', ic: 'pin', src: CAPT + ' ; ' + PL3 + ', p. 33 et 37',
      html: '<ul class="check"><li>Serpent venant du <b>milieu naturel</b> : remis en liberté (le livret précise : <b>à 3 km de toute habitation</b>), sauf s’il est blessé.</li><li>Serpent <b>blessé</b> : conduit chez le <b>vétérinaire</b>.</li><li>Espèce issue de la <b>vente autorisée</b> : peut être confiée à une animalerie ; le livret cite aussi la remise aux forces de l’ordre.</li><li>Espèce exotique près d’une habitation : <b>ne rien faire sans un spécialiste</b> (livret p. 36).</li><li><b>Il est strictement interdit de tuer un serpent, quelle que soit son espèce.</b></li></ul>' +
        '<div class="callout warn"><b>Victime mordue</b>Les soins suivent la <a href="#/c/piqures/serpent">PR Piqûres et morsures</a> (jamais d’aspiration, membre immobilisé, lavage sans frotter). La présentation « Le risque animalier » (2021) conseille de désinfecter à l’eau de Javel et de refroidir : en cas de doute, <b>la fiche SSUAP officielle fait foi</b>.</div>' }
  ],
  key: ['Vipère : trapue, queue courte, tête triangulaire avec V, pupille verticale, zigzag.', 'Couleuvre : svelte, queue effilée, pupille ronde, pas de V.', '7 espèces en Champagne-Ardenne, 2 vipères venimeuses (aspic, péliade) ; toutes protégées.', 'Interdit de tuer un serpent, quelle que soit l’espèce.', '< 1,20 m : F1 manches baissées ; ≥ 1,20 m ou dangereux : tenue de feu complète.', 'Crochet au milieu (petit) ou au 1er tiers côté tête (moyen) ; > 2 m : renfort.', 'Boa : 3 SP au-delà de 2 m, 4 au-delà de 3 m.', 'Milieu naturel : relâché à 3 km de toute habitation ; blessé : vétérinaire.'],
  traps: ['Tuer une vipère « pour la sécurité des enfants » : interdit.', 'Identifier à la couleur seule (la vipérine a un zigzag mais des pupilles rondes).', 'Saisir à main nue un serpent non identifié.', 'Transporter le serpent dans un sac plastique hermétique.', 'Aspirer une morsure de vipère.'],
  quiz: [
    { q: 'Quel signe oriente vers une vipère ?', c: ['La pupille verticale', 'La queue longue et effilée', 'La pupille ronde', 'Le collier jaune'], e: 'Avec la tête triangulaire et le V (livret p. 33 ; document serpents de Champagne-Ardenne).', s: 'reconnaitre' },
    { q: 'Combien d’espèces de serpents vivent en milieu naturel en Champagne-Ardenne ?', c: ['7, dont 2 vipères venimeuses', '3, toutes venimeuses', '12, dont 6 venimeuses', '2'], e: 'Document « Les différents serpents de Champagne-Ardenne ».', s: 'especes' },
    { q: 'Peut-on tuer un serpent dangereux en intervention ?', c: ['Non, c’est strictement interdit quelle que soit l’espèce', 'Oui, si c’est une vipère', 'Oui, sur ordre du chef d’agrès', 'Oui, s’il est exotique'], e: 'Fiche « La capture des serpents ».', s: 'devenir' },
    { q: 'Pour un serpent de 1,50 m, quelle tenue ?', c: ['Tenue F1 plus tenue de feu complète', 'Tenue F1 manches relevées', 'Combinaison anti-hyménoptères seule', 'Aucune tenue particulière'], e: 'Fiche capture : ≥ 1,20 m ou dangereux.', s: 'epi' },
    { q: 'Petit serpent : où place-t-on le crochet ?', c: ['Vers le milieu du corps', 'Sur la tête', 'Au bout de la queue', 'Au premier tiers côté queue'], e: 'Fiche capture, méthode n° 1.', s: 'capture' },
    { q: 'À partir de quelle longueur faut-il demander du renfort ?', c: ['Plus de 2 m', 'Plus de 50 cm', 'Plus de 1 m', 'Jamais'], e: 'Fiche capture, méthode n° 3.', s: 'capture' },
    { q: 'Un serpent capturé dans la nature, non blessé, est :', c: ['Relâché à 3 km de toute habitation', 'Gardé au centre de secours', 'Euthanasié', 'Confié au premier voisin'], e: 'Livret PPBE p. 33 et 37 ; blessé : vétérinaire.', s: 'devenir' },
    { q: 'Combien de sapeurs-pompiers pour maîtriser un boa de plus de 3 m ?', c: ['4', '2', '3', '1 avec la pince'], e: 'Document serpents : 3 au-delà de 2 m, 4 au-delà de 3 m (un à la tête puis un par mètre).', s: 'especes' }
  ]
});

/* ================================================================ 3. Hyménoptères */
VSAV.chap({
  id: 'ppbe-hymenopteres', part: 'ppbe', seq: PB4,
  title: 'Les hyménoptères et le frelon asiatique', short: 'Hyménoptères', motif: 'bug',
  sources: [PL3 + ', Partie 10 « Les hyménoptères » (p. 38-39)', 'Note de service SDIS 51 n° 240 bis « Interventions pour destruction d’hyménoptères - frelons asiatiques » (05/02/2019)', 'Note de service SDIS 51 n° 031 « Interventions pour destruction d’hyménoptères » (23/03/2009) et modèle de demande', LANHAM + ', diapos 8-9'],
  summary: 'Guêpes, frelons, abeilles ; équipement et produit ; techniques de destruction selon le nid ; frelon asiatique ; piqûres ; quand le SDIS intervient gratuitement.',
  why: '<b>Pourquoi le frelon asiatique change tout ?</b> Il n’est pas agressif loin de son nid mais attaque de façon <b>violente et coordonnée</b> pour le défendre, et il peut <b>pulvériser du venin à distance</b> avec un aiguillon capable de percer des tissus épais. D’où des tenues dédiées, des lunettes et un masque FFP2 même pour la reconnaissance.',
  sections: [
    { id: 'especes', t: 'Guêpes, frelons, abeilles', ic: 'bug', src: PL3 + ', p. 38',
      html: '<div class="tw"><table><thead><tr><th>Insecte</th><th>Repères</th></tr></thead><tbody>' +
        '<tr><td>Guêpe</td><td>Taille fine, abdomen annelé jaune et noir ; nids à plusieurs étages d’alvéoles, <b>enterrés, accrochés ou dans un mur</b>.</td></tr>' +
        '<tr><td>Frelon</td><td>Plus gros (<b>3 à 4 cm</b>), souvent jaune et roux ; piqûre très douloureuse.</td></tr>' +
        '<tr><td>Abeille</td><td>Plus petite, marron ; essaims de <b>10 000 à 60 000</b> abeilles. Destruction <b>seulement s’il existe un danger ou si la capture de la reine est impossible</b> ; sinon, contacter un <b>apiculteur</b>.</td></tr>' +
        '<tr><td>Frelon asiatique (nid)</td><td>Nid d’environ <b>60 cm de diamètre</b> pour 80 cm à 1 m de « longueur », parfois très haut (photos du dossier : 12 et 22 m).</td></tr></tbody></table></div>' },
    { id: 'materiel', t: 'Le matériel et le produit', ic: 'spray', src: PL3 + ', p. 38',
      html: '<ul class="check"><li><b>Protection :</b> combinaison de protection intégrale avec casque et gants.</li><li><b>Destruction :</b> vaporisateur à pression pour pulvériser l’insecticide à l’entrée du nid et sur ses parois ; <b>rincé après chaque intervention</b>. La présentation « risque animalier » cite aussi la <b>poudre rémanente</b> (à tout moment, ou si l’essaim est inaccessible).</li><li><b>Produit insecticide :</b> ne pas fumer à proximité, ne pas ingérer, ne pas se frotter les yeux, se rincer les mains, rincer le matériel.</li></ul>' },
    { id: 'destruction', t: 'Les techniques de destruction', ic: 'target', src: PL3 + ', p. 39',
      html: '<p>Détruire <b>tôt le matin ou à la tombée de la nuit</b> : les insectes sont rassemblés dans le nid et plus calmes.</p>' +
        '<div class="tw"><table><thead><tr><th>Nid</th><th>Technique</th></tr></thead><tbody><tr><td>Suspendu</td><td>Pulvériser le nid, prendre un sac et récupérer le nid.</td></tr><tr><td>Enterré</td><td>Pulvériser au ras du sol et creuser.</td></tr><tr><td>Dans un mur</td><td>Pulvériser l’entrée et creuser si nécessaire.</td></tr><tr><td>Sous toiture</td><td>Dégarnir (laine de verre, lambris) et traiter le nid.</td></tr></tbody></table></div>' +
        '<p><b>Attention aux dégradations :</b> s’assurer que le nid n’est pas accessible autrement avant de casser ; <b>prévenir le propriétaire</b> si l’on doit casser ; travaux trop importants (nombreuses tuiles) : faire appel à un professionnel.</p>' +
        '<div class="callout bad"><b>Précautions</b>Ne <b>jamais</b> détruire un nid avec de l’<b>essence</b> ; ne pas allumer de feu dans un conduit de cheminée contenant un nid ; en hauteur (toit, arbre), <b>LSPCC obligatoire</b> ; ne jamais frapper sur un tronc renfermant un nid ; éviter l’inhalation du produit et la projection dans les yeux.</div>' },
    { id: 'asiatique', t: 'Frelon asiatique : la doctrine (NDS 240 bis)', ic: 'alert', src: 'NDS SDIS 51 n° 240 bis (2019)',
      html: '<p>Conserver une <b>distance de sécurité de plus de 5 m</b> vis-à-vis d’un nid sans équipement de protection (recommandation aussi pour la population). Tous les centres sont équipés de <b>tenues dédiées « frelon asiatique »</b>.</p>',
      steps: ['Les intervenants s’équipent complètement en dehors de la zone de danger.', 'EPI complets impératifs, y compris pour la reconnaissance : TSI manches baissées, combinaison de protection, lunettes de protection, masque FFP2.', 'Contrôle croisé des équipements (port et étanchéité aux pieds et aux mains).', 'Les personnes non équipées (sapeurs-pompiers et tiers) sont mises à l’écart.', 'Destruction du nid au moyen d’insecticide (liquide ou poudre).'], stepsTitle: 'Doctrine pour tout type d’hyménoptères',
      after: '<p><b>Avec une échelle aérienne (EPS) :</b> l’échelier s’équipe d’une tenue de protection complète et fait attention à la manipulation (champ de vision réduit). Un personnel déclenché à l’EPS mais <b>inapte</b> aux interventions hyménoptères le signale et se fait remplacer.</p>' },
    { id: 'engagement', t: 'Gratuit ou payant ? Les conditions d’engagement', ic: 'clip', src: 'NDS SDIS 51 n° 240 bis (2019) et n° 031 (2009)',
      html: '<p>Le SDIS n’est compétent en destruction d’hyménoptères <b>que s’il existe un risque réel ou imminent pour les personnes</b>. Il intervient <b>sans délai et gratuitement</b> :</p>' +
        '<ul class="check"><li>dans un <b>ERP</b>, si le public est directement exposé ;</li><li>sur la <b>voie publique</b>, si le public est directement exposé ;</li><li>dans un <b>lieu privé</b>, si les insectes empêchent d’accéder ou de vivre dans un espace de vie courante (cuisine, salle à manger, salle de bain, chambre…) ou pénètrent massivement dans les parties habitables (surtout en cas d’allergie présumée ou avérée) ;</li><li>toute autre situation jugée urgente par le chef de salle du CTA-CODIS (insectes particulièrement agressifs…).</li></ul>' +
        '<p>Sinon, le requérant consulte un <b>prestataire privé</b>. En cas d’indisponibilité, le SDIS peut intervenir en <b>prestation payante</b> : <b>accord verbal</b> du requérant au CTA-CODIS (conversation enregistrée), puis sur place le <b>chef d’agrès fait signer la demande de prestation avant d’entreprendre la destruction</b>. Ne sont pas facturés : les collectivités publiques et les personnes en situation de précarité signalées par le CCAS (NDS 031).</p>' +
        '<p>Montants et formulaires : <a href="#/c/ppbe-procedures/payant">Interventions payantes et réquisitions</a>.</p>' },
    { id: 'piqures', t: 'Les piqûres', ic: 'drop', src: PL3 + ', p. 39 ; ' + LANHAM + ', diapo 8',
      html: '<p>Les piqûres de guêpes ou de frelons provoquent une vive inflammation locale ; elles peuvent être <b>graves, voire mortelles</b>. Facteurs de gravité : <b>le nombre</b>, <b>le siège</b>, <b>l’état de santé</b> de la victime, <b>l’allergie</b>.</p>' +
        '<p>Le livret indique : extraire le dard, tamponner avec un antiseptique, surveiller, consulter ou transporter si aggravation. En retirant le dard, <b>ne pas presser la glande à venin</b> (cela injecte le venin).</p>' +
        '<div class="callout warn"><b>La fiche SSUAP fait foi</b>Pour la victime, suivre la <a href="#/c/piqures/insecte">PR Piqûres et morsures</a> : dard retiré à la pince à écharde sans écraser la poche à venin, froid, bilan en urgence si piqûre dans la bouche ou la gorge ou si la victime est allergique.</div>' }
  ],
  key: ['Destruction tôt le matin ou à la tombée de la nuit.', 'Combinaison intégrale, casque, gants ; frelon asiatique : + lunettes et FFP2, même en reconnaissance.', 'Frelon asiatique : plus de 5 m d’un nid sans protection.', 'S’équiper hors zone, contrôle croisé (pieds, mains), non-équipés à l’écart.', 'Jamais d’essence, jamais de feu dans une cheminée avec un nid, LSPCC en hauteur.', 'Abeilles : apiculteur, destruction seulement si danger ou reine impossible à capturer.', 'Gratuit si risque réel pour les personnes (ERP, voie publique, pièce de vie) ; sinon prestataire, ou prestation payante signée AVANT la destruction.', 'Gravité d’une piqûre : nombre, siège, état de santé, allergie.'],
  traps: ['S’équiper au pied du nid.', 'Faire la reconnaissance d’un nid de frelons asiatiques sans lunettes ni FFP2.', 'Commencer la destruction payante avant la signature de la demande.', 'Taper sur le tronc pour « voir s’il y a un nid ».', 'Détruire un essaim d’abeilles sans chercher d’apiculteur.'],
  quiz: [
    { q: 'À quel moment détruit-on un nid ?', c: ['Tôt le matin ou à la tombée de la nuit', 'En plein midi', 'Pendant une averse', 'Peu importe'], e: 'Livret PPBE p. 39 : insectes rassemblés et plus calmes.', s: 'destruction' },
    { q: 'Quelle distance de sécurité sans protection vis-à-vis d’un nid de frelons asiatiques ?', c: ['Plus de 5 m', '1 m', '50 cm', '20 m'], e: 'NDS 240 bis (2019).', s: 'asiatique' },
    { q: 'Pour un nid d’hyménoptères, quels EPI sont impératifs selon la NDS 240 bis, y compris en reconnaissance ?', c: ['TSI manches baissées, combinaison, lunettes de protection, masque FFP2', 'Tenue F1 seule', 'ARI', 'Gants seuls'], e: 'Doctrine opérationnelle, NDS 240 bis.', s: 'asiatique' },
    { q: 'Où les intervenants s’équipent-ils ?', c: ['Complètement en dehors de la zone de danger', 'Au pied du nid', 'Dans l’habitation', 'Sur l’échelle'], e: 'NDS 240 bis.', s: 'asiatique' },
    { q: 'Un essaim d’abeilles s’est posé sur une haie privée, sans danger :', c: ['On contacte un apiculteur', 'On le détruit immédiatement', 'On le brûle', 'On l’arrose'], e: 'Livret PPBE p. 38.', s: 'especes' },
    { q: 'Lequel de ces gestes est interdit ?', c: ['Détruire un nid avec de l’essence', 'Pulvériser l’entrée du nid', 'Récupérer un nid suspendu dans un sac', 'Rincer le pulvérisateur'], e: 'Livret PPBE p. 39.', s: 'destruction' },
    { q: 'Un nid de guêpes empêche d’utiliser la cuisine d’une maison. L’intervention est :', c: ['Réalisée gratuitement par le SDIS', 'Toujours payante', 'Refusée', 'Réservée à un prestataire'], e: 'NDS 240 bis : lieu privé, espace de vie courante.', s: 'engagement' },
    { q: 'En prestation payante, quand le chef d’agrès fait-il signer la demande ?', c: ['Avant d’entreprendre la destruction', 'Après la destruction', 'Au retour au centre', 'Jamais, c’est le CODIS'], e: 'NDS 240 bis et 031.', s: 'engagement' },
    { q: 'Quels facteurs aggravent une piqûre ?', c: ['Le nombre, le siège, l’état de santé, l’allergie', 'La couleur de l’insecte', 'L’heure de la piqûre', 'La température extérieure'], e: 'Livret PPBE p. 39.', s: 'piqures' },
    { q: 'Pour travailler sur un nid en toiture, il faut :', c: ['Utiliser obligatoirement le LSPCC', 'Monter sans harnais pour être plus mobile', 'Frapper la toiture pour déloger les insectes', 'Allumer un feu dans la cheminée'], e: 'Livret PPBE p. 39.', s: 'destruction' }
  ]
});
