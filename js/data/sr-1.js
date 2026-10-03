/* SECOURS ROUTIER — fichier 1 : MGO SR, énergies alternatives, transport de matières dangereuses
   Sources : dossier « EQ-CA secours routiers » du CFD 51 (pôle secours routiers) — connaissances complémentaires CA SR. */
var SR1 = 'Secours routier 1 — Reconnaître et sécuriser';

var MGOSR = 'MGO SR appliquée aux véhicules nouvelles générations : sécurisation du site, du véhicule, de la victime et des techniques de désincarcération (CFD 51, pôle SR, 2021-2022)';
var CPLSR = 'Complément de connaissances CA SR (CFD 51, MAJ août 2021)';
var POP04 = 'POP 04 — Balisage d’urgence pour intervention sur le réseau routier (indice 03 du 20/09/2021) et NDS n° 218 modifiée (SDIS 51)';
var BALSR = 'Secours routiers : le balisage (CFD 51, pôle SR, MAJ 08-2021) et FT 26 le balisage';
var VBSA = 'Dossier pédagogique du stage VBSA (SDIS 51, modif. 2023) : sécurité de la zone d’intervention, balisage, ouvrants, vitrages';

VSAV.chap({
  id: 'sr-balisage', part: 'sr', seq: SR1,
  title: 'Le balisage d’urgence et la sécurité de la zone d’intervention', short: 'Balisage d’urgence', motif: 'road',
  sources: [POP04, BALSR, VBSA],
  summary: 'Pourquoi le balisage des sapeurs-pompiers est un « balisage d’urgence », la flèche lumineuse (croix ou flèche), la pose des cônes en stop net ou en biseau, les trois zones (tampon, travail, stationnement), les cas particuliers (virage, côte, autoroute, TMD) et la protection individuelle et collective.',
  why: '<b>Pourquoi c’est vital ?</b> Le sur-accident tue des sapeurs-pompiers : l’accident du pont de Loriol, sur l’autoroute du Soleil, a coûté la vie à cinq d’entre eux et a conduit à repenser le balisage et à créer les véhicules de balisage. Le VSAV qui arrive le premier se place d’abord en protection ; dès l’arrivée du VSR ou du VBSA, il se repositionne après l’accident.',
  sections: [
    { id: 'principes', t: 'Un balisage d’urgence, provisoire', ic: 'alert', src: POP04 + ' ; ' + BALSR,
      html: '<ul class="check"><li>Le balisage relève de la <b>police de la circulation</b> : police, gendarmerie ou <b>gestionnaire de voirie</b> (État-DIR, conseil départemental, commune, sociétés d’autoroute). Ils doivent être informés dès le traitement de l’alerte.</li><li>Premiers sur les lieux, les sapeurs-pompiers prennent les premières mesures conservatoires : c’est un <b>balisage d’urgence</b>, à compléter ou remplacer par celui du gestionnaire dès son arrivée.</li><li>Il protège les intervenants, les victimes et les autres usagers. Il n’a pas vocation à rester en place après l’intervention, mais le chef d’agrès peut le laisser si le danger l’exige : le SDIS ne supplée pas durablement le gestionnaire du réseau.</li><li>Le <b>COS</b> coordonne l’ensemble des moyens publics et privés engagés.</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Type de voie</th><th>Flèche lumineuse embarquée (FLE)</th><th>Cônes</th></tr></thead><tbody>' +
        '<tr><td><b>Bidirectionnelle</b> (double sens : RD, RN)</td><td><b>Croix seule</b> : un obstacle que l’automobiliste franchit sous sa propre responsabilité</td><td>En <b>stop net</b></td></tr>' +
        '<tr><td><b>Unidirectionnelle</b> (autoroute, 2 × 2 voies)</td><td>Flèche gauche ou droite selon la position de l’accident et des secours</td><td>En <b>biseau</b></td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Seules les forces de l’ordre régulent et dévient la circulation</b>Sur une route à double sens, les sapeurs-pompiers n’affichent jamais de flèche.</div>' },
    { id: 'mise-en-oeuvre', t: 'Poser le balisage (VSR, VBSA)', ic: 'list', src: POP04,
      steps: [
        'S’arrêter au minimum 150 m avant l’accident (à adapter). Sur voie bidirectionnelle, si l’on arrive par la voie opposée : dépasser l’accident, faire demi-tour, puis revenir.',
        'Dresser la FLE (ou le triangle) : croix sur voie bidirectionnelle, flèche sur voie unidirectionnelle, flash selon l’équipement.',
        'Les deux équipiers (VSRM, VSRS) ou l’équipier et le chef d’agrès (VBSA) descendent du côté non roulant.',
        'L’équipier prend le chariot de balisage et dépose le premier tri-flash sur l’accotement, sous la surveillance du second.',
        'Ils posent les cônes derrière le véhicule (stop net ou biseau) en commençant par l’accotement, puis passent devant le véhicule.',
        'Ils poursuivent le balisage en reculant, face à la circulation, protégés par le véhicule qui avance jusqu’à l’accident.',
        'Au contact, l’équipier prend le second chariot et finalise le dispositif ; le conducteur braque les roues pour qu’un choc arrière ne projette pas l’engin vers l’accident.',
        'Retrait : manœuvre aussi dangereuse qu’à l’arrivée, même procédure en sens inverse.'
      ], stepsTitle: 'Procédure POP 04',
      after: '<p>Les cônes doivent empiéter le moins possible sur la voie laissée circulable. <b>En virage</b>, le premier triangle doit être visible au plus tard à l’entrée du virage ; <b>en côte</b>, il est placé au sommet de la côte. Sur autoroute, le dispositif s’adapte selon que l’accident est sur la bande d’arrêt d’urgence, la voie de droite ou la voie de gauche.</p>' },
    { id: 'zones', t: 'Les trois zones', ic: 'grid', src: POP04,
      html: '<div class="tw"><table><thead><tr><th>Zone (dans le sens de la circulation)</th><th>Contenu</th></tr></thead><tbody>' +
        '<tr><td><b>Zone tampon</b></td><td>Environ <b>150 m minimum</b> avant le VSR ou le VBSA, à moduler selon la voie, la météo, la configuration. Elle écarte les usagers : <b>aucun véhicule, aucune personne</b> après la pose du balisage.</td></tr>' +
        '<tr><td><b>Zone de travail</b></td><td><b>50 m minimum</b> : l’accident et les intervenants.</td></tr>' +
        '<tr><td><b>Zone de stationnement</b></td><td>Après la zone de travail : primo-intervenants et renforts (sapeurs-pompiers, SMUR, autres services).</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout info"><b>Situation particulière</b>Accident avec TMD ou feu avec effluents liquides ou gazeux : le COS peut placer la zone de stationnement <b>avant</b> la zone de travail. Dans tous les cas, il adapte les distances (route communale, nationale chargée, autoroute, météo).</div>' },
    { id: 'protection', t: 'Protection individuelle et collective', ic: 'shield', src: VBSA,
      html: '<ul class="check"><li><b>La sécurité de la zone d’intervention</b> comprend le balisage, la protection incendie (extincteur), le port des EPI et la mise en œuvre des équipements de protection collective.</li><li><b>Individuelle</b> : casque (le casque F1 est imposé en secours routier au vu des véhicules électriques et hybrides), lunettes, gants, veste d’intervention, <b>gilet haute visibilité</b>, surpantalon SR ; être visible <b>de jour comme de nuit</b>.</li><li><b>Collective</b> : tout ce qui prévient le sur-accident pendant l’intervention (véhicule, FLE, cônes, tri-flash, éclairage).</li></ul>' +
        '<p class="small muted">Le stage VBSA reprend ces règles le matin (sécurité, balisage, mises en situation sur route ouverte), puis, l’après-midi, le calage, la gestion des vitrages, des portières et du coffre-capot : voir <a href="#/c/sr-ft-roues">Fiches techniques VL sur ses roues</a>.</p>' }
  ],
  key: ['Balisage SP = balisage d’urgence, remplacé par celui du gestionnaire.', 'Double sens : croix uniquement, cônes en stop net.', 'Chaussées séparées : flèche, cônes en biseau.', 'Arrêt à 150 m minimum avant l’accident.', 'Pose en reculant, face à la circulation, protégé par le véhicule.', 'Zone tampon ≥ 150 m (personne dedans), travail ≥ 50 m, puis stationnement.', 'Roues braquées à l’arrêt.', 'Retrait aussi dangereux que la pose.'],
  traps: ['Afficher une flèche sur une route à double sens.', 'Stationner ou marcher dans la zone tampon.', 'Tourner le dos à la circulation pendant la pose.', 'Retirer le balisage à la hâte en fin d’intervention.', 'Garder les roues droites à l’arrêt.', 'Croire que le balisage SP peut remplacer durablement celui du gestionnaire.'],
  quiz: [
    { q: 'Sur une route départementale à double sens, quelle signalisation afficher sur la FLE ?', c: ['La croix', 'Une flèche vers la gauche', 'Une flèche vers la droite', 'Aucune'], e: 'POP 04 : règles d’utilisation des FLE.', s: 'principes' },
    { q: 'Comment pose-t-on les cônes sur une voie bidirectionnelle ?', c: ['En stop net', 'En biseau', 'En ligne au milieu de la chaussée', 'On n’en pose pas'], e: 'POP 04 : principe de mise en œuvre.', s: 'principes' },
    { q: 'À quelle distance minimale de l’accident le véhicule de balisage s’arrête-t-il d’abord ?', c: ['150 m', '15 m', '50 m', '500 m'], e: 'POP 04.', s: 'mise-en-oeuvre' },
    { q: 'Quelle zone doit rester vide de tout véhicule et de toute personne ?', c: ['La zone tampon', 'La zone de travail', 'La zone de stationnement', 'Aucune'], e: 'POP 04 : les zones.', s: 'zones' },
    { q: 'Quelle est la longueur minimale de la zone de travail ?', c: ['50 m', '5 m', '150 m', '300 m'], e: 'POP 04 : les zones.', s: 'zones' },
    { q: 'Le gestionnaire de voirie arrive et met en place son propre balisage :', c: ['Le balisage SP est complété ou remplacé par le sien', 'Le balisage SP reste prioritaire', 'Il faut doubler les deux balisages', 'Le SP doit lui demander une autorisation écrite'], e: 'NDS 218 et POP 04 : balisage d’urgence.', s: 'principes' },
    { q: 'Pourquoi le conducteur braque-t-il les roues à l’arrêt ?', c: ['Pour qu’un choc arrière ne projette pas l’engin vers l’accident', 'Pour faciliter le départ', 'Pour économiser les freins', 'C’est interdit'], e: 'POP 04.', s: 'mise-en-oeuvre' }
  ]
});

VSAV.chap({
  id: 'sr-mgo', part: 'sr', seq: SR1,
  title: 'La MGO secours routier du CA SR : reconnaître, choisir le plan, sécuriser', short: 'MGO du CA SR', motif: 'car',
  sources: [MGOSR, CPLSR],
  summary: 'Les cinq objectifs de l’intervention, la reconnaissance du chef d’agrès, les plans de désincarcération (A, B, urgence) et les niveaux de la victime, les équipements de sécurité des véhicules nouvelles générations (airbags, prétensionneurs, arceaux, capot actif, vérins, vitrages, renforts) et la sécurisation des techniques de désincarcération : dégarnir, dessiner, distance.',
  why: '<b>Pourquoi ce chapitre ?</b> Les 5 S et les 5 i sont détaillés dans le chapitre <a href="#/c/gn-godr-sr">GODR secours routier</a>. Ici, on reprend ce que le CFD 51 ajoute pour le <b>chef d’agrès SR</b> : il fait sa reconnaissance pendant que l’équipe balise et cale, choisit le plan de désincarcération avec le CA VSAV, et sait où il ne faut <b>jamais</b> couper ni poser d’outil sur un véhicule moderne.',
  sections: [
    { id: 'objectifs', t: 'Les objectifs et le choix du plan', ic: 'target', src: MGOSR + ' ; ' + CPLSR,
      html: '<ul class="check"><li><b>Sortir la victime</b> par les opérations de désincarcération et de dégagement nécessaires.</li><li>Protéger intervenants et victimes des <b>équipements impactants</b> du véhicule (airbags, renforts…) en les identifiant et en les localisant <b>avant toute découpe</b>.</li><li>Les protéger des <b>énergies embarquées</b> et de l’<b>instabilité</b> du véhicule : neutraliser les énergies, immobiliser le véhicule.</li><li>Assurer le <b>secours à personne</b> (prise en charge secouriste, médicale, psychologique) et protéger la victime des éléments extérieurs.</li><li>Sécuriser la <b>zone d’intervention</b> (contexte routier, sur-accident).</li></ul>' +
        '<p>Ces actions suivent les <b>5 S</b> (le SPID) mais <b>pas dans un ordre chronologique strict</b> : certaines se font en même temps. <b>Principe de base : adapter l’espace à la victime, et non l’inverse.</b> Le CA SR décide du plan pendant que l’équipe cale le véhicule, ce qui suppose d’avoir fait sa reconnaissance, idéalement dès la phase de balisage.</p>' +
        '<div class="tw"><table><thead><tr><th>Plan</th><th>Quand</th><th>Principe</th></tr></thead><tbody>' +
        '<tr><td><b>Plan A</b> (sûr, « confort »)</td><td>État clinique stable</td><td>Désincarcération « longue », extraction améliorée, à 0° (axiale)</td></tr>' +
        '<tr><td><b>Plan B</b> (rapide)</td><td>L’état de la victime se dégrade</td><td>Sortie rapide en respectant strictement l’axe tête-cou-tronc</td></tr>' +
        '<tr><td><b>Plan d’urgence</b> (plan C)</td><td>Urgence vitale (ACR…)</td><td>Extraction immédiate, dégagement d’urgence</td></tr>' +
        '</tbody></table></div>' +
        '<div class="tw"><table><thead><tr><th>Niveau</th><th>État de la victime</th></tr></thead><tbody><tr><td>1</td><td>Sortie seule</td></tr><tr><td>2</td><td>Blessée, non piégée</td></tr><tr><td>3</td><td><b>Piégée</b> (ne peut sortir seule, sans outil de désincarcération)</td></tr><tr><td>4</td><td><b>Incarcérée</b> (sa sortie nécessite un outil de désincarcération)</td></tr><tr><td>5</td><td>Éjectée</td></tr></tbody></table></div>' +
        '<p>Toujours garder <b>deux plans en tête</b> : un plan A (axe de sortie idéal) et un plan B (axe par défaut). Pendant qu’un binôme travaille sur le piégeage, l’autre prépare la sortie.</p>' },
    { id: 'reconnaissance', t: 'La reconnaissance et le message au CODIS', ic: 'eye', src: CPLSR,
      steps: [
        'Pendant que les équipiers balisent : déterminer le type de véhicule et prendre connaissance de la FAD (fiche d’aide à la décision).',
        'Choisir les premières actions : protection incendie, éclairage, gestion des batteries (acte réflexe sur véhicule électrique ou hybride, acte réfléchi sur carburation classique), et, avant de couper la batterie, reculer un siège ou baisser une vitre si c’est utile.',
        'Évaluer la cinétique du choc.',
        'Compter les victimes : questionner occupants et témoins, chercher les éjectés aux alentours et sous le véhicule, repérer les sièges auto.',
        'Analyser l’environnement (circulation, réseau électrique, gaz, ouvrage d’art, TMD…).',
        'Choisir les techniques de désincarcération en relation avec le CA VSAV ou le chef de groupe.',
        'Donner les consignes de sécurité à tous les intervenants : le sapeur-pompier est COS et a sous sa responsabilité forces de l’ordre, SMUR, services techniques…'
      ], stepsTitle: 'La reconnaissance du CA SR',
      after: '<ul class="check"><li>Au CODIS : remonter l’identité des victimes ayant des <b>fonctions particulières</b> (un élu, par exemple).</li><li>Demander les moyens SP supplémentaires (FPT, chef de groupe, VSAV, VRT, GRIMP, SD…) ; on peut demander une mise en relation avec un conseiller technique.</li><li>Demander les moyens extérieurs : service autoroute, forces de l’ordre, Enedis, GRDF, services techniques de la ville.</li></ul>' +
        '<div class="callout warn"><b>Cas particuliers</b>AVP sur un boîtier de gaz, le réseau électrique, un ouvrage d’art ou un TMD : se demander si la fuite est neutralisable, si un dégagement d’urgence est nécessaire, quels EPI pour les binômes, faire des relevés explosimétriques. <b>Ligne électrique : 5 m minimum de la haute tension, 3 m de la moyenne tension</b>, attention aux <b>3 réenclenchements</b> automatiques du réseau et à la <b>tension de pas</b> (différence de potentiel entre les pieds près d’un point où le courant entre dans le sol).</div>' },
    { id: 'equipements', t: 'Les équipements de sécurité des véhicules nouvelles générations', ic: 'shield', src: MGOSR,
      html: '<div class="tw"><table><thead><tr><th>Équipement</th><th>Danger</th><th>Règle</th></tr></thead><tbody>' +
        '<tr><td><b>Airbags</b></td><td>Déclenchement intempestif ; un airbag déployé n’est pas forcément inerte (multi-niveaux selon la gravité du choc)</td><td>Ne jamais agir sur leurs emplacements ; rester hors zone de déploiement ; un airbag n’est sécurisé qu’avec un dispositif de protection</td></tr>' +
        '<tr><td><b>Prétensionneurs</b></td><td>Cartouche pyrotechnique à mise à feu électronique</td><td>Ne jamais agir sur leurs emplacements ; sectionner la ceinture</td></tr>' +
        '<tr><td><b>Arceaux pyrotechniques</b> (ROPS, cabriolets)</td><td>Sortie brutale des arceaux, même a posteriori lors d’un retrait de toit non conventionnel</td><td>Interdiction d’évoluer dans leur zone de déploiement</td></tr>' +
        '<tr><td><b>Capot actif</b> (protection des piétons)</td><td>Levée pyrotechnique du capot</td><td>Ne rien poser sur le capot, aucun calage sur le capot</td></tr>' +
        '<tr><td><b>Vérins</b> de hayon ou de capot</td><td>Effet missile dans un feu ; projection d’huile s’il est sectionné</td><td>Ne jamais couper un vérin sur sa partie la plus large ; le déposer avec l’outil de dégarnissage ou un tournevis plat</td></tr>' +
        '<tr><td><b>Vitrages</b></td><td>Coupures, atteinte des yeux, inhalation de particules lors de la découpe</td><td>Masque FFP2 pour sauveteurs et victime (à défaut masque d’inhalation O₂ pour la victime) ; éviter la cagoule de feu qui retient les particules</td></tr>' +
        '<tr><td><b>Renforts structuraux</b> (aciers THLE, UHLE)</td><td>Jusqu’à 7 à 10 fois la résistance d’un acier doux : la cisaille peut être inefficace même à 700 bars</td><td>« Avant de couper, savoir ce que l’on coupe » ; méthodes alternatives</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout info"><b>Idée reçue</b>Une petite voiture (Fiat 500, Smart…) n’est <b>pas</b> moins résistante : la réduction des zones de déformation impose de renforcer la cellule de survie.</div>' +
        '<p><b>Protéger la victime</b> : protection d’airbag, section de la ceinture, masque FFP lors de la découpe des vitres, couverture contre les projections, protection contre le bruit. <b>Contre les airbags</b> : ceinturer le volant, ne rien déposer sur la planche de bord, désactiver l’airbag passager, puis déconnecter la batterie de servitude (borne – puis borne +). Le calculateur peut garder une réserve d’énergie un moment après la coupure : rester hors des volumes de gonflage.</p>' },
    { id: 'trois-d', t: 'Sécuriser les techniques : dégarnir, dessiner, distance', ic: 'clip', src: MGOSR,
      html: '<div class="tw"><table><thead><tr><th>Les 3 D</th><th>Contenu</th></tr></thead><tbody>' +
        '<tr><td><b>Dégarnir</b></td><td>Sous la responsabilité du chef d’agrès, à la main ou avec les outils adaptés : identifier les zones de coupe possibles, les zones de danger (haute tension, airbags) et les zones inappropriées (renforts), en complément de la FAD.</td></tr>' +
        '<tr><td><b>Dessiner</b></td><td>Marquer sur le véhicule les énergies et les points de coupe selon une charte graphique commune, pour que tous aient la même information. <b>Aucune indication = absence de risque.</b></td></tr>' +
        '<tr><td><b>Distance</b></td><td>Règle des <b>30-60-90</b> : 30 cm des airbags latéraux, 60 cm de l’airbag conducteur, 90 cm de l’airbag passager.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout ok"><b>Avant de toucher aux énergies</b>Il peut être utile d’<b>utiliser l’énergie du véhicule</b> avant de la couper : ouvrir le coffre, baisser une vitre, reculer un siège. Une fois la batterie coupée, ce n’est plus possible.</div>' }
  ],
  key: ['Adapter l’espace à la victime, pas l’inverse.', 'Plan A sûr (stable), plan B rapide (dégradation), plan d’urgence (urgence vitale).', 'Piégée : sort sans outil ; incarcérée : il faut un outil de désincarcération.', 'Reconnaissance pendant le balisage : FAD, cinétique, nombre de victimes, environnement.', 'Ligne électrique : 5 m de la HT, 3 m de la MT ; 3 réenclenchements ; tension de pas.', 'Jamais d’action sur airbags, prétensionneurs, arceaux ; rien sur le capot.', 'Vérin : ne jamais le couper sur sa partie large.', '3 D : dégarnir, dessiner, distance (30-60-90).'],
  traps: ['Croire qu’une petite citadine se découpe plus facilement.', 'Couper la batterie avant d’avoir reculé le siège ou ouvert le coffre alors que c’était utile.', 'Poser un outil ou une cale sur un capot actif.', 'Sectionner un vérin de hayon en son milieu.', 'Retirer le hard-top d’un cabriolet sans penser aux arceaux pyrotechniques.', 'Oublier les éjectés et les sièges auto lors du comptage des victimes.'],
  quiz: [
    { q: 'Quel est le principe de base du choix du plan de désincarcération ?', c: ['Adapter l’espace à la victime, et non l’inverse', 'Sortir la victime par le chemin le plus court quelle que soit sa position', 'Toujours retirer le toit', 'Attendre le SMUR avant toute découpe'], e: 'MGO SR, sécurisation du site : le plan de désincarcération.', s: 'objectifs' },
    { q: 'L’état d’une victime incarcérée se dégrade : quel plan ?', c: ['Plan B (rapide) en respectant l’axe tête-cou-tronc', 'Plan A (sûr)', 'Aucun changement', 'Attendre la stabilisation complète'], e: 'MGO SR et complément de connaissances CA SR.', s: 'objectifs' },
    { q: 'Une victime « incarcérée » est une victime :', c: ['Dont la sortie nécessite un outil de désincarcération', 'Sortie seule du véhicule', 'Éjectée du véhicule', 'Blessée mais non piégée'], e: 'Complément de connaissances CA SR : niveaux 1 à 5.', s: 'objectifs' },
    { q: 'Distance minimale à respecter près d’une ligne haute tension ?', c: ['5 m', '1 m', '3 m', '50 cm'], e: 'Complément de connaissances CA SR : 5 m HT, 3 m MT.', s: 'reconnaissance' },
    { q: 'Que signifient les 3 D de la sécurisation des techniques de désincarcération ?', c: ['Dégarnir, dessiner, distance', 'Découper, dégager, déplacer', 'Détecter, décider, diffuser', 'Désactiver, déconnecter, démonter'], e: 'MGO SR, sécurisation désincarcération.', s: 'trois-d' },
    { q: 'Comment retirer un vérin de hayon ?', c: ['Avec l’outil de dégarnissage ou un tournevis plat, sans le couper sur sa partie large', 'En le coupant en son milieu', 'En le chauffant', 'On le laisse toujours en place'], e: 'MGO SR, sécurisation du site : les vérins.', s: 'equipements' },
    { q: 'Sur un véhicule à capot actif :', c: ['On ne pose rien et on ne cale rien sur le capot', 'On pose les outils sur le capot pour gagner du temps', 'On cale le véhicule par le capot', 'Le risque disparaît après le choc'], e: 'MGO SR, sécurisation victime : générateurs de capot actif.', s: 'equipements' },
    { q: 'Sur le marquage du véhicule, une zone sans aucune indication signifie :', c: ['Absence de risque', 'Zone non vérifiée', 'Zone interdite', 'Airbag présent'], e: 'MGO SR, « Dessiner ».', s: 'trois-d' }
  ]
});

var VEA = 'Interventions pour secours routiers appliquées aux véhicules à énergies alternatives : électrique-hybride, GPL, GNV, hydrogène (CFD 51, stage CA SR)';

VSAV.chap({
  id: 'sr-energies', part: 'sr', seq: SR1,
  title: 'Véhicules à énergies alternatives : électrique, hybride, GPL, GNV, hydrogène', short: 'Énergies alternatives', motif: 'bolt',
  sources: [VEA, MGOSR],
  summary: 'Reconnaître l’énergie (logos, trappe, pot d’échappement, rubrique P.3), comprendre la batterie de traction et le service plug, les dispositifs de coupure de type « loop », les organes de sécurité des réservoirs GPL, GNV et hydrogène, et la réponse opérationnelle des 5 i adaptée à chaque énergie.',
  why: '<b>Pourquoi approfondir ?</b> Le <a href="#/c/gn-godr-sr">GODR secours routier</a> donne le cadre. Les diaporamas du stage CA SR précisent les chiffres et les gestes qui changent tout sur le terrain : quel code lire sur la carte grise, pourquoi ne jamais toucher un câble orange, quand une torchère est normale et quand elle doit inquiéter.',
  sections: [
    { id: 'identifier', t: 'Identifier l’énergie embarquée', ic: 'eye', src: VEA,
      html: '<ul class="check"><li><b>Logos et marquages</b> commerciaux, trappe de chargement (électrique) ou de remplissage spécifique (gaz, souvent couplée à l’orifice essence ou gazole).</li><li><b>Absence de pot d’échappement</b> : véhicule 100 % électrique.</li><li><b>Câbles orange</b> haute tension ; <b>vannes manuelles</b> externes (GNV).</li><li>Questionner le propriétaire ; consulter la <b>FAD</b> ou une application de type « rescue code ».</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Rubrique P.3 du certificat d’immatriculation</th><th>Énergie</th></tr></thead><tbody><tr><td><b>EL</b></td><td>Électrique</td></tr><tr><td><b>EH</b></td><td>Essence / hybride non rechargeable</td></tr><tr><td><b>GH</b></td><td>Gazole / hybride non rechargeable</td></tr><tr><td><b>GL</b></td><td>Gazole / hybride rechargeable</td></tr><tr><td><b>EG</b></td><td>Essence / GPL</td></tr><tr><td><b>GN</b></td><td>Gaz naturel (GNV)</td></tr></tbody></table></div>' },
    { id: 'electrique', t: 'Véhicules électriques et hybrides', ic: 'bolt', src: VEA,
      html: '<ul class="check"><li><b>Hybride</b> : double motorisation électrique et thermique, qui fonctionnent seules ou ensemble.</li><li><b>Batterie de traction</b> (plomb, nickel, lithium-ion, lithium-métal-polymère) : <b>200 à 400 kg</b>, ce qui modifie l’équilibre du véhicule et donc le <b>calage</b>.</li><li>Risques : <b>électrique</b> (courant continu haute tension, environ 400 V), <b>thermique</b> (emballement de la batterie après un choc), <b>chimique</b> (électrolyte très alcalin) et <b>toxique</b> (fuite, emballement).</li><li>Les relais coupent la batterie haute tension quand le véhicule est hors tension (témoin « Ready » éteint) ou quand les airbags frontaux se déclenchent.</li><li><b>Câbles orange</b> : interdiction de les toucher, écraser, couper ou débrancher. Gants isolants et écran facial obligatoires s’il faut manipuler un câble ou un composant endommagé.</li></ul>' +
        '<div class="callout bad"><b>Le service plug</b>Outil de maintenance du constructeur, pas un équipement pour les sapeurs-pompiers. Il n’existe aucun standard d’emplacement. Selon le diaporama, seul le groupe <b>Renault-Nissan</b> autorise sa manipulation par les sapeurs-pompiers via ses ERG. Le retirer <b>ne décharge pas</b> la batterie. En cas de manipulation : gants isolants 1000 V, les deux visières du casque baissées, regard détourné.</div>' +
        '<p><b>Le « loop »</b> (Tesla et assimilés) : gaine basse tension 12 V signalée par un repère orange ; sa section complète coupe la sortie de la batterie haute tension. Certaines carrosseries portent une <b>zone de coupe</b> marquée derrière laquelle passe le loop. D’autres constructeurs (BMW) ont un dispositif équivalent, à localiser sur la FAD. Après la coupure, la haute tension peut rester active quelques minutes.</p>' },
    { id: 'gaz', t: 'GPL, GNV et hydrogène', ic: 'blast', src: VEA,
      html: '<div class="tw"><table><thead><tr><th></th><th>GPL</th><th>GNV</th><th>Hydrogène (H₂)</th></tr></thead><tbody>' +
        '<tr><td><b>Stockage</b></td><td>Liquide, 7 à 8 bars ; réservoir acier de 3 à 4 mm, jusqu’à 150 L (VL) ou 600 L (bus)</td><td>Gazeux, réservoirs tarés à 200 bars (utilisation à 18 bars)</td><td>Gazeux, 350 ou 700 bars, réservoir cylindrique souvent à l’arrière (en hauteur sur les bus)</td></tr>' +
        '<tr><td><b>Densité</b></td><td>Plus lourd que l’air</td><td>Plus léger que l’air, inodore (odorisé)</td><td>Très léger (0,06) ; LIE 4 %, LSE 75 % ; s’enflamme très facilement</td></tr>' +
        '<tr><td><b>Sécurité</b></td><td>Polyvanne (clapets, limiteur de débit) ; <b>soupape</b> qui s’ouvre au-delà de 27 bars : torchère d’abord intermittente</td><td>Électrovanne, <b>vanne manuelle ¼ de tour</b>, limiteur de débit ; <b>thermofusible</b> à 110 °C : torchère continue d’environ 5 m</td><td>Électrovanne, cheminée d’évacuation ; thermofusible à 110 °C : torchère <b>quasi invisible</b> (environ 2000 °C) jusqu’à épuisement</td></tr>' +
        '<tr><td><b>Risques</b></td><td>Torchère, explosion du réservoir, fuite gazeuse ou liquide</td><td>Explosion, effet missile, fuite, appauvrissement en O₂ en milieu clos</td><td>Inflammation, explosion ; flamme qui rayonne peu</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Torchère GPL</b>Une soupape qui fonctionne par intermittence régule la pression ; une ouverture <b>permanente</b> signale une hausse importante de pression dans le réservoir.</div>' +
        '<p>Un véhicule à hydrogène est un <b>véhicule électrique</b> qui produit son électricité : il cumule les risques de la haute tension et du gaz. Feux de ces véhicules : <a href="#/c/inc-feu-vehicule-energie">chapitre incendie dédié</a>.</p>' },
    { id: 'reponse', t: 'La réponse opérationnelle (5 i)', ic: 'list', src: MGOSR + ' ; ' + VEA,
      steps: [
        'Identifier : observer, questionner, rechercher l’énergie (logo, câbles orange, carte grise, orifice de réservoir, réservoirs gaz).',
        'Inspecter sans toucher : câbles orange, batteries, fuites ; pour le gaz, levée de doute (explosimètre, odeur, tubulures ou réservoir endommagés).',
        'Interdire toute action sur les vecteurs d’énergie ; sur un VE, interdire de toucher la carcasse et de toucher, sectionner ou comprimer les câbles orange.',
        'Immobiliser : moteur arrêté, contact coupé, frein de parc, levier en « P », clé retirée (clé intelligente éloignée de plus de 5 m et déposée dans le VSR), calage primaire puis complémentaire.',
        'Isoler — phase réflexe : déconnecter la batterie 12 ou 24 V (borne –) ou retirer les fusibles ; cela ouvre les relais haute tension et ferme les électrovannes gaz.',
        'Isoler — phase réfléchie, si désincarcération ou danger immédiat (câble sectionné ou dénudé, batterie endommagée) : service plug seulement si l’ERG l’autorise ; GNV ou H₂ : vannes si elles sont accessibles ; GPL : pas d’autre action que l’électrovanne.'
      ], stepsTitle: 'Les 5 i par énergie',
      after: '<div class="callout bad"><b>« Je ne sais pas ? Je ne fais pas ! »</b>Sans connaître les préconisations de l’ERG pour ce véhicule, pas de manipulation du service plug.</div>' +
        '<p>La coupure de la batterie de servitude inhibe la pyrotechnie, l’électronique de bord et le circuit haute tension des VE. Son emplacement figure notamment sur la FAD. Les mesures classiques de prévention de l’incendie <b>passent après</b> la mise en sécurité électrique sur un VE ou un hybride.</p>' }
  ],
  key: ['P.3 : EL électrique, EH/GH hybride non rechargeable, GL hybride rechargeable, EG GPL, GN GNV.', 'Batterie de traction 200 à 400 kg : penser au calage.', 'Câble orange : ne jamais toucher, couper, écraser.', 'Service plug : uniquement si l’ERG l’autorise ; la batterie reste chargée.', 'Loop : gaine 12 V à sectionner pour couper la haute tension.', 'GPL : soupape à 27 bars, torchère intermittente puis permanente si danger.', 'GNV : 200 bars, vanne ¼ de tour, thermofusible 110 °C.', 'H₂ : 350-700 bars, flamme invisible, LIE 4 % – LSE 75 %.'],
  traps: ['Croire qu’un service plug retiré rend la batterie inoffensive.', 'Chercher une flamme visible sur une fuite d’hydrogène enflammée.', 'Oublier le poids du pack batterie dans le calage.', 'Laisser la clé intelligente dans ou près du véhicule.', 'Prendre la torchère intermittente d’un GPL pour une aggravation, ou l’inverse.'],
  quiz: [
    { q: 'Sur le certificat d’immatriculation, « EL » en rubrique P.3 signifie :', c: ['Véhicule électrique', 'Essence-GPL', 'Hybride rechargeable gazole', 'Gaz naturel'], e: 'Diaporama VE-VEH : rubrique P.3.', s: 'identifier' },
    { q: 'Quel code P.3 indique un véhicule Essence / GPL ?', c: ['EG', 'GN', 'EL', 'GL'], e: 'Diaporama GPL.', s: 'identifier' },
    { q: 'Qu’est-ce que le « loop » chez Tesla ?', c: ['Une gaine 12 V dont la section coupe la sortie haute tension de la batterie', 'Un câble orange 400 V à couper', 'Un airbag de toit', 'Un capteur de retournement'], e: 'Diaporama VE-VEH : particularité Tesla.', s: 'electrique' },
    { q: 'Le service plug d’un véhicule électrique :', c: ['Ne se manipule que si l’ERG du constructeur l’autorise', 'Se retire systématiquement en phase réflexe', 'Décharge la batterie quand on le retire', 'Est au même endroit sur tous les modèles'], e: 'MGO SR sécurisation véhicule et diaporama VE-VEH.', s: 'electrique' },
    { q: 'À quelle température le thermofusible d’un réservoir GNV se déclenche-t-il ?', c: ['110 °C', '27 °C', '400 °C', '1000 °C'], e: 'Diaporama GNV.', s: 'gaz' },
    { q: 'Quelle action d’isolement est possible sur un véhicule GPL ?', c: ['Aucune autre que l’électrovanne (coupure de la batterie)', 'Fermer la vanne ¼ de tour', 'Retirer le service plug', 'Percer le réservoir'], e: 'MGO SR, réponse opérationnelle GPL et GNV.', s: 'reponse' },
    { q: 'La flamme d’une fuite d’hydrogène enflammée est :', c: ['Quasi invisible, autour de 2000 °C', 'Jaune et très lumineuse', 'Toujours accompagnée de fumée noire', 'Froide'], e: 'Diaporama hydrogène.', s: 'gaz' },
    { q: 'Sur un véhicule électrique, la coupure de la batterie 12 V est :', c: ['La phase réflexe, qui ouvre les relais haute tension', 'Une action interdite', 'Une phase réfléchie réservée à l’ERG', 'Sans effet sur la haute tension'], e: 'MGO SR sécurisation véhicule.', s: 'reponse' }
  ]
});

var TMDSR = 'Le transport de matières dangereuses (stage CA SR, CFD 51, MAJ 1 du 09/08/2021)';

VSAV.chap({
  id: 'sr-tmd', part: 'sr', seq: SR1,
  title: 'Accident de transport de matières dangereuses (TMD)', short: 'TMD', motif: 'molecule',
  sources: [TMDSR, CPLSR],
  summary: 'Les risques des matières dangereuses, la plaque orange et le code danger (Kemler), les classes de danger, les citernes et le vrac, les colis radioactifs, les documents de bord, la particularité du GNL et la conduite à tenir du premier chef d’agrès : agir sur la source, le flux et la cible et renseigner le CODIS.',
  why: '<b>Pourquoi le CA SR doit-il le savoir ?</b> Sur un accident de poids lourd, l’engin de secours routier peut être le premier sur les lieux. Lire la plaque orange, se placer selon le vent et définir un périmètre se fait <b>avant</b> l’arrivée des équipes RCH.',
  sections: [
    { id: 'signaletique', t: 'Lire la plaque orange', ic: 'grid', src: TMDSR,
      html: '<p>La plaque orange porte en haut le <b>code danger</b> (2 ou 3 chiffres, code Kemler) et en bas le <b>numéro ONU</b> (numéro de matière). Une plaque <b>sans chiffres</b> à l’avant et à l’arrière signale des produits différents ou un transport multiple. <b>Doubler un chiffre intensifie le danger.</b> Un <b>X</b> devant le code signifie : <b>pas d’eau</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Chiffre</th><th>1er chiffre : danger principal</th><th>2e ou 3e chiffre : danger subsidiaire</th></tr></thead><tbody>' +
        '<tr><td>0</td><td>—</td><td>Absence de danger subsidiaire</td></tr>' +
        '<tr><td>1</td><td>Explosif</td><td>—</td></tr>' +
        '<tr><td>2</td><td>Gaz</td><td>Émanation de gaz</td></tr>' +
        '<tr><td>3</td><td>Liquide inflammable</td><td>Inflammable</td></tr>' +
        '<tr><td>4</td><td>Solide inflammable</td><td>—</td></tr>' +
        '<tr><td>5</td><td>Comburant</td><td>Comburant</td></tr>' +
        '<tr><td>6</td><td>Toxique</td><td>Toxique</td></tr>' +
        '<tr><td>7</td><td>Radioactif</td><td>—</td></tr>' +
        '<tr><td>8</td><td>Corrosif</td><td>Corrosif</td></tr>' +
        '<tr><td>9</td><td>Dangers divers</td><td>Réaction violente</td></tr>' +
        '</tbody></table></div>' +
        '<p>Exemples : <b>22</b> gaz liquéfié réfrigéré asphyxiant ; <b>333</b> liquide pyrophorique ; <b>539</b> peroxyde organique inflammable ; <b>606</b> matière infectieuse ; <b>90</b> matière dangereuse pour l’environnement. Les <b>classes</b> de danger (1 explosibles, 2 gaz, 3 liquides inflammables, 4.1 à 4.3 solides, 5.1 comburants, 5.2 peroxydes, 6.1 toxiques, 6.2 infectieux, 7 radioactifs, 8 corrosifs, 9 divers) figurent sur les étiquettes en losange.</p>' },
    { id: 'chargement', t: 'Citernes, vrac, colis et documents', ic: 'clip', src: TMDSR + ' ; ' + CPLSR,
      html: '<ul class="check"><li><b>Citernes</b> : calorifugée (thermomètre sur la paroi : chocolat, goudron…), acide, hydrocarbures (souvent multi-compartiments), gaz, pulvérulent (farine, ciment…). Les containers portent leurs documents sur leur structure.</li><li><b>Vrac</b> : les quantités autorisées varient selon le produit (par exemple 333 L d’essence, 1000 L de gazole) ; impossible de juger la quantité de l’extérieur.</li><li><b>Documents de bord</b>, dans la <b>cabine</b> : lettre de voiture (quantité, nombre, emballage, expéditeur, destinataire), <b>fiche de sécurité</b> par produit, <b>consignes de sécurité</b> (dangers, mesures, protection du conducteur).</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Étiquette radioactive</th><th>Débit au contact</th><th>Si l’emballage est intact</th></tr></thead><tbody>' +
        '<tr><td><b>7A</b> (fond blanc)</td><td>Jusqu’à 5 µSv/h</td><td>Manipulable sans précaution particulière</td></tr>' +
        '<tr><td><b>7B</b> (fond jaune)</td><td>5 à 500 µSv/h</td><td>Manipuler rapidement</td></tr>' +
        '<tr><td><b>7C</b> (fond jaune)</td><td>500 à 2000 µSv/h</td><td>Manipuler rapidement et isoler</td></tr>' +
        '<tr><td><b>7D</b></td><td>Sur le véhicule (côtés et arrière)</td><td>Voir chaque colis</td></tr>' +
        '<tr><td><b>7E</b></td><td>Matières fissiles</td><td>Éloigner les colis entre eux</td></tr>' +
        '</tbody></table></div>' +
        '<p>Les colis de type A, B et C résistent respectivement à un accident mineur, important et aérien. <b>L’urgence vitale prime sur le risque radiologique</b> ; se protéger par le <b>temps, l’écran et la distance</b> (voir <a href="#/c/gn-godr-rad">GODR radiologique</a>).</p>' },
    { id: 'gnl', t: 'La particularité du GNL', ic: 'snow', src: TMDSR,
      html: '<ul class="check"><li><b>GPL</b> : propane ou butane liquéfiés sous faible pression. <b>GNV</b> : gaz naturel comprimé (au moins 200 bars) comme carburant. <b>GNL</b> : gaz naturel (plus de 90 % de méthane) liquéfié vers <b>-160 °C</b>, liquide cryogénique, inodore, non toxique ; son volume est réduit d’environ <b>600 fois</b>.</li><li>Code danger <b>223</b> : gaz liquéfié réfrigéré qui, en se réchauffant, se détend jusqu’à 600 fois son volume et devient inflammable ou explosif.</li><li>À vérifier : le <b>manomètre de cuve</b> (tarée à environ 4 bars) ; aiguille au-delà du repère rouge = <b>périmètre de sécurité immédiat</b> et contact avec la société via le document de transport.</li><li>Organes de sécurité : évent de sécurité (ouvert = fuite), <b>soupapes</b> tarées à 15 bars, <b>système de ventilation des soupapes</b> en partie basse gauche de la remorque.</li></ul>' +
        '<div class="callout bad"><b>Ne jamais obstruer la ventilation des soupapes</b>Ni eau (elle gèlerait), ni poudre (elle s’agglomère) : une sortie bouchée met la cuve en pression avec un risque d’explosion. Fuite de GNL : périmètre de sécurité, RCH de permanence et société de transport.</div>' },
    { id: 'cat', t: 'Conduite à tenir du premier chef d’agrès', ic: 'list', src: TMDSR,
      steps: [
        'Avant l’arrivée : prendre les renseignements du CODIS, choisir l’itinéraire et le positionnement de l’engin selon le vent, s’équiper des EPI.',
        'Sur les lieux : reconnaissance (nature du sinistre, chargement et quantité, risques), sauvetage et prise en charge des victimes, périmètre de sécurité, engagement minimum de personnels.',
        'Premières mesures : récupérer les documents si c’est possible sans danger ; établissement pour extinction ou protection selon le produit, attention aux eaux de ruissellement.',
        'Agir sur la source seulement sans s’exposer (vannes, colmatage, obturation, serrage de brides).',
        'Agir sur le flux : rideau d’eau, tapis de mousse, endiguement, merlon de terre, absorbant, obturation des égouts.',
        'Agir sur la cible : périmètre, confinement ou évacuation, EPI des intervenants.',
        'Renseigner le CODIS : type d’accident, victimes, produit, mesures prises, renforts, évolution possible (pollution, nuage) ; demander les équipes spécialisées.'
      ], stepsTitle: 'Conduite à tenir',
      after: '<div class="callout info"><b>Rappel</b>Cette conduite ne remplace pas la MGO de l’accident ou du feu ; elle s’y ajoute. Une situation TMD évolue : anticiper les renforts et ne pas s’exposer inutilement. Voir aussi <a href="#/c/inc-rch-rad">Risques chimiques et radiologiques</a>.</div>' }
  ],
  key: ['Plaque orange : code danger en haut, n° ONU en bas.', 'Chiffre doublé = danger intensifié ; X = pas d’eau.', '1 explosif, 2 gaz, 3 liquide inflammable, 4 solide inflammable, 5 comburant, 6 toxique, 7 radioactif, 8 corrosif, 9 divers.', 'Documents dans la cabine : lettre de voiture, fiches et consignes de sécurité.', '7A manipulable, 7B rapidement, 7C rapidement et isoler.', 'GNL : -160 °C, × 600 ; manomètre de cuve ; ne jamais boucher la ventilation des soupapes.', 'Source, flux, cible ; renseigner le CODIS.'],
  traps: ['Arroser une matière dont le code commence par X.', 'S’approcher face au vent.', 'Projeter de l’eau ou de la poudre dans la ventilation des soupapes d’une citerne GNL.', 'Croire qu’une plaque sans chiffre signifie absence de danger.', 'S’exposer pour récupérer les documents de bord.'],
  quiz: [
    { q: 'Sur la plaque orange, le nombre du bas indique :', c: ['Le numéro ONU de la matière', 'Le code danger', 'Le poids du chargement', 'Le numéro du transporteur'], e: 'Diaporama TMD : signalétique.', s: 'signaletique' },
    { q: 'Que signifie la lettre X devant un code danger ?', c: ['Ne pas utiliser d’eau', 'Matière explosive', 'Danger inconnu', 'Transport exceptionnel'], e: 'Diaporama TMD : code Kemler.', s: 'signaletique' },
    { q: 'Dans un code danger, le chiffre 3 en première position signifie :', c: ['Liquide inflammable', 'Gaz', 'Toxique', 'Corrosif'], e: 'Diaporama TMD : code Kemler.', s: 'signaletique' },
    { q: 'Où trouve-t-on les documents de transport d’un camion TMD ?', c: ['Dans la cabine du conducteur', 'Uniquement au siège de l’entreprise', 'Sur la plaque orange', 'Dans la citerne'], e: 'Diaporama TMD : documents de transport.', s: 'chargement' },
    { q: 'Un colis radioactif intact étiqueté 7B :', c: ['Peut être manipulé rapidement', 'Ne doit jamais être approché', 'Se manipule sans aucune précaution', 'Doit être arrosé'], e: 'Diaporama TMD : colis radioactifs.', s: 'chargement' },
    { q: 'Feu près d’une citerne de GNL : que faut-il impérativement préserver ?', c: ['Le système de ventilation des soupapes, sans eau ni poudre', 'Le pare-brise du tracteur', 'Les feux arrière', 'Le réservoir de gazole'], e: 'Diaporama TMD : GNL, synthèse.', s: 'gnl' },
    { q: 'Établir un rideau d’eau ou un merlon de terre, c’est agir sur :', c: ['Le flux', 'La source', 'La cible', 'Le conducteur'], e: 'Diaporama TMD : source, flux, cible.', s: 'cat' }
  ]
});
