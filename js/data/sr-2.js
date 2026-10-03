/* SECOURS ROUTIER — fichier 2 : matériel, stabilisation et fiches techniques véhicule léger
   Sources : fiches techniques SR du SDIS 51 (sommaire MAJ5 du 24/08/2021), lexique matériels et tenue SR, manuel KLS. */
var SR2 = 'Secours routier 2 — Désincarcérer un véhicule léger';

var FTSR = 'Fiches techniques secours routiers du SDIS 51 (niveau 1 et 2, chef d’agrès et équipier SR, sommaire MAJ5 du 24/08/2021)';
var LEXSR = 'Lexique matériels et tenue SR (SDIS 51, CFD, référent départemental SR, MAJ 2022)';

VSAV.chap({
  id: 'sr-materiel', part: 'sr', seq: SR2,
  title: 'Le matériel de désincarcération et la stabilisation du véhicule', short: 'Matériel et calage', motif: 'clip',
  sources: [LEXSR, FTSR + ' : FT 0, FT 12, FT 15', CPLSR, 'Manuel d’utilisation du kit léger de stabilisation LQS (Scorpe)'],
  summary: 'Les outils hydrauliques (pinces, écarteurs, outil combiné, vérins) et leur usage, les cales et les kits légers de stabilisation (KLS), et la stabilisation d’un véhicule sur ses roues, sur le côté ou sur le toit, avec ses risques.',
  why: '<b>Pourquoi commencer par là ?</b> Toutes les fiches techniques supposent un véhicule <b>stable</b> : un véhicule qui bouge pendant une découpe aggrave la victime. Et choisir le bon outil (pince droite ou courbe, écarteur ou vérin) fait gagner de précieuses minutes. La stabilisation prend du temps, mais elle en fait gagner ensuite.',
  sections: [
    { id: 'outils', t: 'Les outils hydrauliques', ic: 'clip', src: LEXSR,
      html: '<div class="tw"><table><thead><tr><th>Outil</th><th>Usage principal</th></tr></thead><tbody>' +
        '<tr><td><b>Pince droite</b></td><td>Montant C, fers plats</td></tr>' +
        '<tr><td><b>Pince courbe</b> (cisaille)</td><td>Montants A et B, bas de caisse</td></tr>' +
        '<tr><td><b>Écarteur</b> (grand modèle)</td><td>Levage d’urgence, écartement de charge, création d’ouverture, arrachement du montant B</td></tr>' +
        '<tr><td><b>Outil combiné</b> (écarteur et pince)</td><td>Ouverture de portière, coffre, capot ; petites coupes. Maniable par un seul équipier, moins fatigant que l’écarteur lourd</td></tr>' +
        '<tr><td><b>Vérins</b> petit et grand modèle</td><td>Poussée horizontale, verticale ou oblique (tableau de bord, montant B, agrandissement)</td></tr>' +
        '<tr><td><b>Coussins de levage</b></td><td>Levage de quelques centimètres (voir la fiche des coussins de chaque VSR)</td></tr>' +
        '<tr><td><b>Petit matériel</b></td><td>Barre « halligan tool », découpe-pare-brise manuel, scie sabre, film pour vitrages, boucliers et protections de coupe, corde à cliquet (« rope ratchet »)</td></tr>' +
        '<tr><td><b>Extraction</b></td><td>Planche « Rescate Jota », système de maintien BOA</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout info"><b>Le groupe hydraulique</b>Le matériel travaille à 700 bars, mais il passe d’abord par une phase à 300 bars : il ne bascule à 700 bars que lorsque l’outil force. Relâcher la commande pendant l’effort fait retomber la pression ; il faut alors repartir de zéro.</div>' +
        '<p><b>Règles de sécurité</b> : ne jamais se placer entre l’outil et le véhicule ; travailler sur les points faibles, pousser sur les points forts ; contrôler le <b>poinçonnement</b> (la tête d’un vérin ou d’un écarteur qui s’enfonce dans la tôle) en intercalant une cale.</p>' },
    { id: 'cales', t: 'Les cales et les kits de stabilisation', ic: 'grid', src: LEXSR + ' ; manuel LQS',
      html: '<ul class="check"><li><b>Cales résine</b> (biaises, octogonales, carrées, d’épaisseurs variées) et <b>cales escaliers</b> : toutes situations.</li><li><b>Cales bois</b> et cales « <b>Stab Pack</b> » : véhicule sur ses roues, tapis de cales sous un coussin de levage.</li><li><b>Cales spécifiques</b> (cale d’angle, « crocodile », cale intérieure) : remplacer le montant B comme appui de vérin, réduire la course d’un vérin, éviter le poinçonnement.</li><li><b>KLS</b> (kit léger de stabilisation), étais, bastaings : véhicule sur le côté, sur le toit ou instable.</li></ul>' +
        '<div class="callout warn"><b>Le KLS est un étai, pas un vérin</b>Il ne transmet ni effort ni mouvement. Il se pose avec un angle optimal de <b>25 à 35°</b> ; la sangle, accrochée sur un point bas du véhicule et tendue à la manivelle puis au cliquet, forme un <b>triangle</b> avec l’étai. Chaque jambe tient environ une tonne. On verrouille l’étai une fois en place, puis on pose le second de la même façon.</div>' },
    { id: 'stabiliser', t: 'Stabiliser selon la position du véhicule', ic: 'car', src: FTSR + ' : FT 0, FT 12, FT 15 ; ' + CPLSR,
      html: '<div class="tw"><table><thead><tr><th>Position</th><th>Stabilisation</th></tr></thead><tbody>' +
        '<tr><td><b>Sur ses roues</b> (FT 0)</td><td>Calage primaire des roues non directrices (abordage rapide), puis calage <b>3 ou 4 points</b> sous les longerons de bas de caisse selon le nombre et la place des victimes ; mêmes cales du même côté si possible. En complément, neutraliser les suspensions avec une <b>sangle à cliquet</b>.</td></tr>' +
        '<tr><td><b>Sur le côté</b> (FT 12)</td><td>Caler d’abord le côté « sensible » qui risque de faire basculer le véhicule (en général côté pavillon) avec des cales escaliers ou biaises sous les montants A et C, puis poser les KLS sur les points forts du côté opposé. Variante : sangle à cliquet vers un support fiable (arbre, pylône) en comblant les vides (« packing »).</td></tr>' +
        '<tr><td><b>Sur le toit</b> (FT 15)</td><td>Cales biaises et escaliers sous les montants A et C pour combler les vides ; KLS si besoin ; réadapter le calage selon la technique choisie et l’évolution du véhicule. Attention à la répartition avant-arrière (moteur, pack batterie).</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout bad"><b>Anticiper la suite</b>Une cale mal placée peut empêcher la technique choisie : une cale escalier qui bloque l’ouverture de la portière pour une sortie à 90°, un KLS qui condamne une portière. Le calage se pense avec le plan de désincarcération.</div>' +
        '<p><b>Risques</b> : mouvement du véhicule pendant la stabilisation, pincement, écrasement, brûlure, écoulement de fluides, centre de gravité déplacé par le moteur ou la batterie de traction. <b>Contrôler le calage après chaque grande action</b> (chaque découpe) et systématiquement avant l’extraction.</p>' }
  ],
  key: ['Pince droite : montant C ; pince courbe : montants A et B.', 'Outil combiné : portières, coffre, capot, maniable seul.', 'Jamais entre l’outil et le véhicule ; cale contre le poinçonnement.', 'KLS = étai à 25-35°, sangle en triangle ; ce n’est pas un vérin.', 'Sur roues : calage primaire puis 3 ou 4 points + sangle sur suspensions.', 'Sur le côté : caler d’abord le côté qui fait basculer, puis KLS.', 'Contrôler le calage après chaque découpe et avant l’extraction.'],
  traps: ['Utiliser un KLS pour pousser ou lever.', 'Placer une cale qui bloque l’axe de sortie prévu.', 'Relâcher la commande pendant l’effort de l’outil.', 'Oublier le poids du pack batterie dans la stabilisation.', 'Ne pas recontrôler le calage après une découpe.'],
  quiz: [
    { q: 'Quelle pince utilise-t-on principalement pour couper les montants A et B ?', c: ['La pince courbe', 'La pince droite', 'L’écarteur', 'Le vérin'], e: 'Lexique matériels SR.', s: 'outils' },
    { q: 'Le KLS (kit léger de stabilisation) :', c: ['Est un étai qui ne transmet ni effort ni mouvement', 'Sert à lever le véhicule', 'Remplace le vérin pour pousser le tableau de bord', 'Se pose à la verticale'], e: 'Manuel LQS.', s: 'cales' },
    { q: 'Angle optimal de pose d’un KLS :', c: ['25 à 35°', '5°', '60 à 80°', '90°'], e: 'Manuel LQS.', s: 'cales' },
    { q: 'Véhicule sur ses roues : quel calage après le calage primaire ?', c: ['Calage 3 ou 4 points sous les bas de caisse', 'Calage sur le capot', 'Aucun', 'Calage sur le toit'], e: 'FT 0.', s: 'stabiliser' },
    { q: 'Véhicule sur le côté : quel côté caler en premier ?', c: ['Le côté sensible qui risque de faire basculer le véhicule', 'Le côté le plus facile d’accès', 'Le côté des roues', 'Peu importe'], e: 'FT 12.', s: 'stabiliser' },
    { q: 'Quand contrôle-t-on le calage ?', c: ['Après chaque grande action et avant l’extraction', 'Uniquement à la pose', 'À la fin de l’intervention', 'Jamais'], e: 'FT 0 et complément de connaissances CA SR.', s: 'stabiliser' }
  ]
});

VSAV.chap({
  id: 'sr-ft-roues', part: 'sr', seq: SR2,
  title: 'Fiches techniques : véhicule léger sur ses roues (FT 1 à FT 11)', short: 'FT VL sur ses roues', motif: 'car',
  sources: [FTSR + ' : FT 1 à FT 11', VBSA],
  summary: 'Les techniques du SDIS 51 sur un véhicule sur ses roues : gestion des vitrages, ouvertures de portière, de capot et de coffre, baies latérales (voie américaine), agrandissement de l’espace de survie, relevage et bascule du tableau de bord, demi-pavillon et « jack in the box », gestion des pédales.',
  why: '<b>Comment lire une fiche technique ?</b> Chaque fiche répond à <b>Quand</b>, <b>Pourquoi</b>, <b>Avec quoi</b>, <b>Comment</b> (en phases), <b>Risques</b> et <b>Efficacité</b>. Le chef d’agrès choisit la technique selon le plan (A, B ou urgence) ; l’équipier doit connaître les phases et les risques pour ne pas aggraver la victime.',
  sections: [
    { id: 'vitrages', t: 'FT 11 : la gestion des vitrages', ic: 'shield', src: FTSR + ' : FT 11',
      steps: [
        'Poser un film adhésif transparent sur la vitre à gérer, le dérouler en chassant les bulles d’air (une bulle empêche le verre d’adhérer). À défaut : scotch large, puis drap ou tapis de sol.',
        'Percer la vitre avec un outil adapté et la retirer en évitant toute chute de verre dans l’habitacle.',
        'Pare-brise : protéger d’abord la victime (masque FFP2 au minimum ou masque d’inhalation selon son état) et le sapeur-pompier qui découpe (FFP3 recommandé, FFP2 au minimum).',
        'Créer un trou dans un angle du pare-brise, puis découper au découpe-pare-brise ou à la scie sabre selon le besoin.',
        'Vitrage ancien jointé (non collé) : couper le joint au cutter et extraire la vitre.'
      ], stepsTitle: 'Phases',
      after: '<p><b>Quand</b> : dès qu’on travaille sur la structure avec une victime ou l’écureuil dans l’habitacle. <b>Risques</b> : film mal posé et verre qui tombe sur la victime ; inhalation de particules de silice ; film opaque qui masque l’intérieur (points de coupe, victime).</p>' },
    { id: 'ouvrants', t: 'FT 1 et FT 2 : portières, capot, coffre', ic: 'car', src: FTSR + ' : FT 1, FT 1 bis, FT 2',
      html: '<div class="tw"><table><thead><tr><th>Fiche</th><th>Technique</th></tr></thead><tbody>' +
        '<tr><td><b>FT 1 bis</b> Portière par la poignée (méthode « classique »)</td><td>Après gestion du vitrage, écarter la tôle à la barre halligan au niveau de la serrure (ou pincer, ou écarter dans le cadre de fenêtre) ; placer l’outil mixte ou l’écarteur dans l’entrebâillement et travailler sur le point fort, horizontalement ou verticalement en utilisant son poids ; couper si besoin la serrure à la pince courbe, couper le tirant et sangler la portière.</td></tr>' +
        '<tr><td><b>FT 1</b> Portière par les charnières</td><td>Dégager les charnières (halligan ou pincement de l’aile : attention au système « start and stop » et à l’amortisseur), placer l’outil sur les charnières, ouvrir en continu ; une balle ou une cale dans la poignée neutralise le verrouillage. Préférer l’écarteur dans le cadre de fenêtre plutôt que pincer l’aile au milieu.</td></tr>' +
        '<tr><td><b>FT 2</b> Capot</td><td>Outil posé à l’arrière du capot, entre la grille d’aération et le pare-brise, ouvrir jusqu’à accéder à la batterie (emplacement vérifié sur la FAD). Palliatif : déposer l’optique avant et tirer le câble de déverrouillage. Risque : capot actif.</td></tr>' +
        '<tr><td><b>FT 2</b> Coffre</td><td>Faire sauter un bloc optique arrière pour trouver un point fort, forcer latéralement jusqu’à faire céder la serrure ; pour retirer le hayon, déposer d’abord les fixations des vérins au tournevis plat. Permet une extraction « à zéro » ou l’accès de l’écureuil.</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Risques communs</b> : vitre qui éclate et projette sur la victime ou les sauveteurs ; tôle qui se déchire (« millefeuille ») et fait perdre du temps ; chute de la porte. Maîtriser les ouvertures de portes permet d’offrir très vite un accès au VSAV ou au médecin.</p>' },
    { id: 'baies', t: 'FT 3, 4 et 5 : les baies latérales', ic: 'grid', src: FTSR + ' : FT 3, FT 3 bis, FT 4, FT 5',
      html: '<p><b>Quand</b> : victime incarcérée dont l’état impose une sortie <b>au minimum oblique</b> dans un temps relativement court. <b>But</b> : retirer d’un bloc portière arrière, montant B et portière avant.</p>' +
        '<div class="tw"><table><thead><tr><th>Fiche</th><th>Principe</th></tr></thead><tbody>' +
        '<tr><td><b>FT 3</b> Voie américaine à l’écarteur</td><td>Ouvrir la portière arrière par la poignée, coupe de décharge en bas du montant B ; écarteur entre le support de banquette et le bas du montant B (au renfort du bloc de ceinture) ; arracher, puis couper le haut du montant B et emmener l’ensemble vers l’avant, sanglé.</td></tr>' +
        '<tr><td><b>FT 4</b> Voie américaine au vérin</td><td>Même logique avec un petit vérin appuyé sur une cale spécifique dans l’angle tunnel central / banquette (à défaut le rail de siège).</td></tr>' +
        '<tr><td><b>FT 3 bis</b> Écarteur et grand vérin</td><td>Couper le haut du montant B, ouvrir un espace à l’écarteur puis le remplacer par le vérin pour pousser le montant B vers le bas : l’ensemble des portières s’abaisse au sol.</td></tr>' +
        '<tr><td><b>FT 5</b> Véhicule 3 portes</td><td>Couper le haut du montant B, utiliser l’écarteur comme bras de levier, grignoter la tôle (cisaille ou scie sabre) puis abaisser la partie découpée ; protéger les coupes.</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Risques</b> : l’arrachement ne se fait pas, l’outil s’enfonce dans le plancher ou poinçonne le tunnel central, l’abaissement fait bouger le véhicule. La portière avant reste fermée pendant la poussée pour renforcer l’ensemble.</p>' },
    { id: 'survie', t: 'FT 6, 7, 8 et 10 : espace de survie, tableau de bord, pédales', ic: 'target', src: FTSR + ' : FT 6, FT 7, FT 8.1 à 8.4, FT 10',
      html: '<ul class="check"><li><b>FT 6 Agrandir l’espace de survie</b> : vérin vertical ou horizontal sur un point stable (cale contre le poinçonnement) ; abaisser la banquette arrière par arrachement (écarteur ou vérin vers l’arrière) ; ou couper à la cisaille ou au coupe-pédale les branches du volant qui compriment la victime (« demi-lune »).</li><li><b>FT 7 Relever le tableau de bord</b> (volant, colonne de direction) : écarteur entre le haut du volant et le montant A que l’on referme doucement ; écarteur ou petit vérin sous le volant ; sangle à cliquet ou KLS avec une sangle autour du volant, éventuellement un bastaing ; en dernier lieu, écarteur et chaînes.</li><li><b>FT 8 Bascule du tableau de bord</b> (victime à l’avant, montants B présents) : vérins en pré-tension sur la base des montants B, coupe de la partie médiane des montants A (en gardant assez de matière), gestion du pare-brise, <b>coupe de décharge</b> en bas de caisse parallèle aux longerons, puis poussée uniforme. Variantes : un vérin et un écarteur (8.2), un vérin central (8.4), une cale spécifique, l’écarteur ou en dernier recours la barre halligan pour remplacer un montant B absent.</li><li><b>FT 10 Gérer les pédales</b> : sangle en tour mort ou tête d’alouette sur la pédale tirée par l’écarteur vertical sur le bas de caisse ; ou section de l’embase au coupe-pédale (à défaut pince courbe).</li></ul>' +
        '<div class="callout warn"><b>Points de vigilance</b>Tête de vérin qui « ripe » et tombe sur la victime ; action sur le volant qui déclenche l’airbag ; sangle qui casse avec un effet fouet ; coupe du longeron côté moteur : attention au « start and stop » et aux amortisseurs. La pré-tension du vérin limite le retour du tableau de bord vers la victime (effet mémoire).</div>' },
    { id: 'pavillon', t: 'FT 9 : demi-pavillon et « jack in the box »', ic: 'car', src: FTSR + ' : FT 9, FT 9.1, particularité cabriolet',
      html: '<ul class="check"><li><b>Demi-pavillon avant</b> : après le coffre et les portières arrière, couper les montants C, coupe de décharge avant les montants B, rabattre le toit vers l’avant et l’arrimer.</li><li><b>Demi-pavillon arrière</b> : après le pare-brise et les portières avant, couper les montants A et avant les montants B, rabattre le toit vers l’arrière.</li><li><b>Pavillon complet avant</b> : quand le toit ne peut pas partir par l’arrière ; couper les montants C et B, décharge avant les montants A, rabattre sur le capot. Palliatif : découpe longitudinale du toit à la scie sabre.</li><li><b>« Jack in the box »</b> (FT 9.1) : en complément d’une baie latérale, grand vérin en partie centrale sur un point fort, poussée continue sur le haut du montant B opposé : l’habitacle s’agrandit latéralement.</li></ul>' +
        '<div class="callout bad"><b>Risques</b>Toit mal arrimé qui retombe ; poinçonnement du montant B ; déclenchement des airbags latéraux lors des coupes. <b>Cabriolet</b> : si les arceaux de sécurité ne se sont pas déployés, ils peuvent se déclencher lors d’un retrait de toit non conventionnel : rappel de sécurité à toute l’équipe.</div>' }
  ],
  key: ['Chaque FT : quand, pourquoi, avec quoi, comment, risques, efficacité.', 'Vitrages : film sans bulles ; FFP2 victime, FFP3 conseillé pour le découpeur.', 'Portière : par la poignée ou par les charnières, toujours sur un point fort.', 'Capot : outil entre grille d’aération et pare-brise ; attention capot actif.', 'Baie latérale : sortie au minimum oblique, portière avant fermée pendant la poussée.', 'Bascule du tableau de bord : vérins en pré-tension, coupe médiane des A, coupe de décharge en bas de caisse.', 'Demi-pavillon : toujours arrimer le toit.'],
  traps: ['Découper le pare-brise sans masque pour la victime.', 'Laisser une bulle d’air sous le film adhésif.', 'Pincer l’aile avant au milieu sur un véhicule « start and stop ».', 'Couper entièrement les montants A avant une bascule.', 'Laisser un vérin sans surveillance du poinçonnement.', 'Oublier d’arrimer le toit rabattu.'],
  quiz: [
    { q: 'Quelle protection respiratoire pour le sapeur-pompier qui découpe un pare-brise ?', c: ['FFP3 recommandé, FFP2 au minimum', 'Aucune', 'La cagoule de feu', 'Un masque chirurgical'], e: 'FT 11.', s: 'vitrages' },
    { q: 'Pourquoi éviter les bulles d’air sous le film adhésif ?', c: ['Le verre n’adhère pas au film à cet endroit', 'Pour l’esthétique', 'Pour voir les airbags', 'Le film se déchire'], e: 'FT 11.', s: 'vitrages' },
    { q: 'Ouverture du capot à l’outil : où place-t-on l’outil ?', c: ['À l’arrière du capot, entre la grille d’aération et le pare-brise', 'Sur la calandre', 'Sur le pavillon', 'Sous le pare-chocs'], e: 'FT 2 ouverture capot.', s: 'ouvrants' },
    { q: 'Une baie latérale est indiquée pour :', c: ['Une sortie au minimum oblique dans un temps relativement court', 'Une victime sortie seule', 'Un véhicule sur le toit uniquement', 'Ouvrir le coffre'], e: 'FT 3, 4 et 5.', s: 'baies' },
    { q: 'Bascule du tableau de bord : que coupe-t-on sur les montants A ?', c: ['La partie médiane, en gardant assez de matière pour pousser', 'Rien', 'Toute la hauteur', 'Uniquement le joint'], e: 'FT 8.1.', s: 'survie' },
    { q: 'Pourquoi mettre le vérin en pré-tension avant les coupes d’une bascule ?', c: ['Pour limiter le retour du tableau de bord vers la victime', 'Pour économiser l’huile', 'Pour tester le vérin', 'Ce n’est pas utile'], e: 'FT 8.', s: 'survie' },
    { q: 'Quel est le risque principal d’un demi-pavillon mal réalisé ?', c: ['Le toit mal arrimé retombe sur la victime et les sauveteurs', 'La batterie se recharge', 'Les pédales se bloquent', 'Aucun'], e: 'FT 9.', s: 'pavillon' }
  ]
});

VSAV.chap({
  id: 'sr-ft-cote-toit', part: 'sr', seq: SR2,
  title: 'Fiches techniques : véhicule sur le côté et sur le toit (FT 12 à FT 18)', short: 'FT VL côté et toit', motif: 'car',
  sources: [FTSR + ' : FT 12 à FT 18'],
  summary: 'Sur le côté : demi-pavillon latéral (la « charnière ») et agrandissement d’habitacle. Sur le toit : coquille d’huître, coquille lyonnaise et voie américaine inversée.',
  why: '<b>Ce qui change</b> : le véhicule n’est plus dans sa position « naturelle », la gravité travaille contre les sauveteurs et les repères haut-bas sont inversés. Le calage (<a href="#/c/sr-materiel">FT 12 et FT 15</a>) doit anticiper les points de coupe, et les vitrages hauts sont gérés avant toute découpe.',
  sections: [
    { id: 'cote', t: 'Véhicule sur le côté (FT 13 et FT 14)', ic: 'car', src: FTSR + ' : FT 13, FT 14',
      html: '<div class="tw"><table><thead><tr><th>Fiche</th><th>Principe</th></tr></thead><tbody>' +
        '<tr><td><b>FT 13</b> Demi-pavillon latéral (méthode de la « charnière »)</td><td>Caler en anticipant les coupes ; retirer le hayon, gérer pare-brise et vitrages hauts ; marquer les coupes sur les montants A, B, C côté toit ; faire des coupes de décharge en bas du toit sans toucher au montant A ; préparer un lit de cales à hauteur du toit, l’abaisser dessus et protéger les coupes.</td></tr>' +
        '<tr><td><b>FT 14</b> Agrandissement d’habitacle (total ou partiel)</td><td>Véhicule « enroulé » autour d’un obstacle : victime conditionnée au préalable sur plan dur ou demi-planche ; coupes des montants B et C, décharges à l’avant du toit ; retirer les KLS et pousser au grand vérin (cale bois contre le poinçonnement) en prenant appui sur la structure fixe. C’est une « coquille d’huître » adaptée au véhicule sur le côté. Variante partielle : coupe haute et poussée verticale dans le cadre de fenêtre.</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Risques</b> : vitrage non géré qui tombe dans l’habitacle ; coupes basses mal faites qui obligent à forcer et provoquent des secousses.</p>' },
    { id: 'toit', t: 'Véhicule sur le toit (FT 16, 17 et 18)', ic: 'car', src: FTSR + ' : FT 16, FT 17, FT 18',
      html: '<p><b>But commun</b> : agrandir l’intérieur d’un véhicule déformé sur le toit et créer un <b>tunnel d’extraction</b>, sans notion d’urgence.</p>' +
        '<div class="tw"><table><thead><tr><th>Fiche</th><th>Principe</th></tr></thead><tbody>' +
        '<tr><td><b>FT 16</b> Coquille d’huître</td><td>Retirer le coffre s’il gêne ; écraser si besoin les montants C à l’écarteur pour fragiliser les renforts, couper les montants C et B (fragiliser le montant A pour créer un point de rupture) ; lever simultanément avec un ou plusieurs vérins : le pavillon reste au sol et le reste du véhicule s’ouvre ; sécuriser aux KLS.</td></tr>' +
        '<tr><td><b>FT 17</b> Coquille lyonnaise</td><td>Ouvrir les portières arrière ; écraser les bas de caisse, couper les montants D et C, l’échappement et les traverses en amont des montants B (sans couper les B) ; écarteur lourd sur un lit de cales avec des chaînes sur des points forts, sécurisé par une sangle à cliquet : en refermant l’écarteur, l’arrière se lève et s’ouvre.</td></tr>' +
        '<tr><td><b>FT 18</b> Voie américaine inversée</td><td>Ouvrir la portière arrière, coupe de décharge du montant B en partie haute (<b>le haut et le bas sont inversés</b>) ; pousser au vérin ou à l’écarteur pour arracher le montant B, comme sur roues (FT 4) ; couper le bas du montant B ; écarter la portière avant pour faire sauter la charnière haute si besoin.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Risques</b>Effondrement de la structure ; écoulement de carburant lors de la levée ; chaînes mal arrimées ; outil qui tombe dans l’habitacle ; vérin en position axiale qui gêne la sortie (le retirer une fois l’ensemble sécurisé).</div>' }
  ],
  key: ['Sur le côté : la « charnière » abaisse le toit sur un lit de cales.', 'Agrandissement d’habitacle : victime conditionnée sur plan dur avant la poussée.', 'Ne pas toucher au montant A dans les coupes de décharge du toit.', 'Sur le toit : créer un tunnel d’extraction, sans urgence.', 'Coquille d’huître : le pavillon reste au sol, le reste se lève.', 'Coquille lyonnaise : écarteur et chaînes, l’arrière se lève.', 'Voie américaine inversée : haut et bas inversés.'],
  traps: ['Commencer les coupes avant d’avoir géré les vitrages hauts.', 'Laisser le vérin dans l’axe de sortie de la victime.', 'Oublier le risque d’écoulement de carburant à la levée.', 'Inverser les repères de coupe sur un véhicule sur le toit.'],
  quiz: [
    { q: 'Sur un véhicule sur le toit, la coquille d’huître consiste à :', c: ['Laisser le pavillon au sol et lever le reste du véhicule avec des vérins', 'Retirer complètement le toit', 'Retourner le véhicule sur ses roues', 'Ouvrir uniquement le coffre'], e: 'FT 16.', s: 'toit' },
    { q: 'Quel matériel caractérise la coquille lyonnaise ?', c: ['Un écarteur lourd avec des chaînes et un lit de cales', 'Deux vérins seulement', 'Des coussins de levage', 'Une scie sabre seule'], e: 'FT 17.', s: 'toit' },
    { q: 'Voie américaine inversée : à quoi faut-il penser ?', c: ['Le haut et le bas du véhicule sont inversés', 'Il faut d’abord remettre le véhicule sur ses roues', 'Le montant B ne se coupe jamais', 'Elle se fait sans calage'], e: 'FT 18.', s: 'toit' },
    { q: 'FT 13 (la « charnière ») : sur quoi pose-t-on le toit abaissé ?', c: ['Sur un lit de cales à hauteur du toit', 'Directement au sol', 'Sur la victime', 'Sur le capot'], e: 'FT 13.', s: 'cote' },
    { q: 'Avant un agrandissement d’habitacle sur le côté (FT 14), la victime est :', c: ['Conditionnée au préalable sur plan dur ou demi-planche', 'Laissée sans protection', 'Extraite avant toute action', 'Assise sur le siège passager'], e: 'FT 14.', s: 'cote' }
  ]
});
