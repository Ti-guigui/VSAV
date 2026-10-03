/* ÉQUIPIER INCENDIE — fichier 1 : Incendie 1 (Déroulement d’une intervention) et Incendie 2 (Connaître le feu)
   Sources : Livret stagiaire Équipier incendie SDIS 51 (v2019), diaporamas formateur SDIS 51 (La Marche Générale des Opérations,
   La combustion, La propagation du feu, Les procédés d’extinction, Rôle du binôme impliqué dans l’attaque),
   GDO Incendies de structures (version du 16 avril 2018), Guide d’instruction et de manœuvre INC. */
var INC1A = 'Incendie 1 — Déroulement d’une intervention';
var INC1B = 'Incendie 2 — Connaître le feu';
var LIV = 'Livret stagiaire Équipier incendie SDIS 51 (v2019)';
var GDO = 'GDO Incendies de structures (2018)';

/* =====================================================================================
   INCENDIE 1 — DÉROULEMENT D’UNE INTERVENTION
   ===================================================================================== */

VSAV.chap({
  id: 'inc-hierarchie', part: 'inc', seq: INC1A,
  title: 'Se situer au sein d’un système hiérarchisé', short: 'Système hiérarchisé', motif: 'team',
  sources: [LIV + ', § 1.1 (p. 10-11)', 'Diaporama formateur SDIS 51 « Le rôle du binôme impliqué dans l’attaque »'],
  summary: 'Qui commande qui, de l’équipier au chef de site ; ce qu’on attend de l’équipier incendie dans son binôme.',
  why: '<b>Pourquoi une chaîne de commandement aussi stricte ?</b> Sur un feu, plusieurs binômes travaillent en même temps dans un milieu hostile (fumées, chaleur, effondrement). Seul celui qui a la vue d’ensemble — le chef d’agrès, puis le chef de groupe, de colonne… — peut coordonner les actions sans que l’une mette en danger l’autre (une porte ouverte au mauvais moment, une lance en face d’une autre). L’équipier est <b>les yeux et les bras</b> de son chef : il rend compte de ce qu’il voit et exécute, <b>sans initiative qui pourrait nuire à la sécurité du binôme</b>.',
  sections: [
    { id: 'objectifs', t: 'Objectifs du module incendie', ic: 'target', src: LIV + ', § 1.1 (p. 10)',
      html: '<div class="tw"><table><thead><tr><th>Domaine</th><th>Ce que l’apprenant doit acquérir</th></tr></thead><tbody>' +
        '<tr><td><b>Savoir</b></td><td>Connaître le feu et son comportement, le matériel et les techniques de lutte contre l’incendie.</td></tr>' +
        '<tr><td><b>Savoir-faire</b></td><td>Mettre en œuvre le matériel de lutte contre l’incendie.</td></tr>' +
        '<tr><td><b>Savoir-être</b></td><td>Exécuter efficacement les activités incendie conformément aux ordres donnés par le chef d’agrès.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn">L’équipier incendie est sous les <b>ordres directs du chef d’équipe</b>. Il respecte scrupuleusement les consignes qui lui sont données et <b>ne prend pas d’initiative qui pourrait nuire à la sécurité du binôme</b>.</div>' },
    { id: 'chaine', t: 'La chaîne de commandement', ic: 'list', src: LIV + ', § 1.1, tableau « Image1 » (p. 10)',
      html: '<p>Chaque niveau gère <b>l’engagement opérationnel et la sécurité</b> de l’échelon placé sous ses ordres. Le grade indiqué est le grade <b>minimum</b> pour tenir la fonction.</p>' +
        '<div class="tw"><table><thead><tr><th>Dénomination</th><th>Grade minimum</th><th>Fonction</th><th>Commande</th></tr></thead><tbody>' +
        '<tr><td>Chef de site</td><td>Commandant</td><td>Engagement opérationnel et sécurité de <b>plusieurs colonnes</b></td><td>Plus d’une colonne</td></tr>' +
        '<tr><td>Chef de colonne</td><td>Capitaine</td><td>… de la <b>colonne</b></td><td>2 à 4 groupes</td></tr>' +
        '<tr><td>Chef de groupe</td><td>Lieutenant</td><td>… du <b>groupe</b></td><td>2 à 4 engins</td></tr>' +
        '<tr><td>Chef d’agrès tout engin</td><td>Adjudant</td><td>… de <b>tout engin</b> et de son équipage</td><td>1 engin</td></tr>' +
        '<tr><td>Chef d’agrès engin à 1 équipe</td><td>Sergent</td><td>… d’un <b>engin à 1 équipe</b> et de son équipage</td><td>1 engin</td></tr>' +
        '<tr><td>Chef d’équipe</td><td>Caporal</td><td>Gère le <b>binôme</b></td><td>1 binôme</td></tr>' +
        '</tbody></table></div>',
      figs: [{ img: 'img/inc/1/hierarchie.jpg', cap: 'Se situer au sein d’un système hiérarchisé', txt: '<p>Du binôme (chef d’équipe, caporal) jusqu’au chef de site (commandant) : chaque échelon commande 2 à 4 échelons inférieurs à partir du groupe.</p>', src: LIV + ', p. 10' }] },
    { id: 'binomes', t: 'Le binôme et ses missions', ic: 'team', src: 'Diaporama « Le rôle du binôme impliqué dans l’attaque », diapos 2, 3, 5 et 6',
      html: '<p>Les binômes sont <b>les yeux et les bras du chef d’agrès</b>. Pour des raisons d’efficacité, un binôme n’effectue <b>qu’une seule action à la fois</b>. C’est <b>pendant le trajet</b> que le chef d’agrès désigne les fonctions des binômes.</p>' +
        '<div class="tw"><table><thead><tr><th>Binôme</th><th>Mission</th></tr></thead><tbody>' +
        '<tr><td><b>BAT</b> — binôme d’attaque</td><td>Reçoit la mission d’attaque ; attaque le sinistre à l’aide d’une lance. En règle générale, les établissements se font du point d’attaque à la prise d’eau. Sauf ordre contraire, chaque BAT s’équipe d’ARI pendant le trajet.</td></tr>' +
        '<tr><td><b>BAL</b> — binôme d’alimentation</td><td>Alimente l’établissement (prises d’eau et/ou engin pompe). Peut ensuite recevoir une nouvelle mission (nouvelle lance, binôme de sécurité…).</td></tr>' +
        '<tr><td>Binôme de sécurité</td><td>Se tient prêt à intervenir en cas de défaillance ou de problème d’un binôme engagé.</td></tr>' +
        '<tr><td>Binôme d’appui et de soutien</td><td>Protège l’action menée par le ou les premiers binômes.</td></tr>' +
        '<tr><td>Binôme de reconnaissance</td><td>Indique au chef d’agrès les communications, les cheminements, les difficultés, les personnes à secourir…</td></tr>' +
        '<tr><td>Binôme de sauvetage</td><td>Met en œuvre les moyens nécessaires aux sauvetages et mises en sécurité.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Remarque : le binôme n’a <b>pas de fonction unique</b>. Dans le BAT, le <b>chef</b> est le <b>porte-lance</b> ; l’<b>équipier</b> est le <b>double porte-lance</b>, qui facilite la manœuvre et la progression de l’établissement.</p>' +
        '<div class="callout bad">Le binôme reste <b>indissociable</b> pendant toute la durée de l’engagement, quelle que soit la situation (difficulté d’attaque, incident, sauvetage, repli…). Seule exception citée : l’attaque par l’extérieur, où il peut être exceptionnellement scindé pour deux actions distinctes.</div>' },
    { id: 'devoirs', t: 'Les devoirs de l’équipier', ic: 'check', src: 'Diaporama « Le rôle du binôme impliqué dans l’attaque », diapo 4',
      steps: ['Est vigilant, aide le chef d’équipe.', 'Veille à la sécurité du binôme.', 'Relève le chef d’équipe quand cela est nécessaire.', 'Déblaie pour faciliter la progression du chef d’équipe.', 'Écarte tout ce qui peut devenir un aliment pour le feu.', 'Entraîne dans le foyer les parties qui menacent de s’écrouler.'], stepsTitle: 'Devoirs de l’équipier (6)' },
    { id: 'competences', t: 'Les 8 activités / compétences de l’EQ INC', ic: 'list', src: LIV + ', § 1.1 (p. 11)',
      html: '<ol>' +
        '<li><b>Analyser son environnement</b> (reconnaissances, rôle dans le binôme, règles de sécurité, prévention appliquée à l’opération).</li>' +
        '<li><b>Réaliser un sauvetage</b> (avec ou sans matériel, LSPCC, échelles à main, sauvetage de sauveteur).</li>' +
        '<li><b>Sécuriser la zone d’intervention</b> (risques gaz, RCH, RAD, électrique, effondrement… ; explosimétrie, coupure des fluides, déblai, préservation des traces et indices, surveillance).</li>' +
        '<li><b>Évoluer avec aisance</b> sur une intervention avec les EPI (dont l’ARI).</li>' +
        '<li><b>Évoluer sur un moyen élévateur aérien.</b></li>' +
        '<li><b>Réaliser un établissement</b> (matériels, règles d’établissement des tuyaux, hydraulique élémentaire, manœuvres en binôme).</li>' +
        '<li><b>Réaliser une extinction en binôme</b> : combustion, propagation, MGO, agents extincteurs, procédés d’extinction, phénomènes thermiques, utilisation de la lance.</li>' +
        '<li><b>Maintenir la capacité opérationnelle</b> des équipements, véhicules et matériels.</li>' +
        '</ol><p class="small muted">Cette séquence et la suivante couvrent surtout la compétence 7 (connaître le feu, la MGO) ; les autres sont traitées dans les autres séquences de la partie incendie.</p>' }
  ],
  key: ['L’équipier incendie est sous les ordres directs du chef d’équipe (caporal), qui gère 1 binôme.', 'Chef d’agrès tout engin : adjudant ; engin à 1 équipe : sergent.', 'Chef de groupe (lieutenant) : 2 à 4 engins ; chef de colonne (capitaine) : 2 à 4 groupes ; chef de site (commandant) : plus d’une colonne.', 'Les binômes sont les yeux et les bras du chef d’agrès ; une seule action à la fois.', 'Fonctions désignées par le chef d’agrès pendant le trajet.', 'Binôme indissociable pendant tout l’engagement.', 'BAT : chef = porte-lance, équipier = double porte-lance.'],
  traps: ['Prendre une initiative « pour bien faire » qui compromet la sécurité du binôme : interdit.', 'Se séparer de son binôme à l’intérieur d’un volume : le binôme est indissociable (seule exception : attaque par l’extérieur).', 'Confondre chef d’équipe (binôme) et chef d’agrès (engin et équipage).'],
  quiz: [
    { q: 'L’équipier incendie est placé sous les ordres directs :', c: ['Du chef d’équipe', 'Du chef de groupe', 'Du conducteur', 'Du chef de colonne'], e: 'Livret § 1.1 : « L’équipier incendie est sous les ordres directs du chef d’équipe », qui gère le binôme.', s: 'objectifs' },
    { q: 'Quel est le grade minimum d’un chef d’agrès tout engin ?', c: ['Adjudant', 'Caporal', 'Sergent', 'Lieutenant'], e: 'Chef d’agrès tout engin : adjudant ; chef d’agrès engin à 1 équipe : sergent ; chef d’équipe : caporal.', s: 'chaine' },
    { q: 'Un chef de groupe commande :', c: ['2 à 4 engins', '1 binôme', '2 à 4 groupes', 'Plus d’une colonne'], e: 'Groupe = 2 à 4 engins ; colonne = 2 à 4 groupes ; site = plus d’une colonne.', s: 'chaine' },
    { q: 'Quand le chef d’agrès désigne-t-il les fonctions des binômes ?', c: ['Pendant le trajet', 'Au retour au centre', 'Uniquement après la reconnaissance complète', 'Au moment de l’alerte, par la salle opérationnelle'], e: 'Diaporama « Rôle du binôme » : « Pendant le trajet, le chef d’agrès désigne les fonctions des binômes ».', s: 'binomes' },
    { q: 'Dans le binôme d’attaque, le double porte-lance est :', c: ['L’équipier, qui aide le porte-lance à la manœuvre et à la progression', 'Le chef d’agrès', 'Le chef de BAT', 'Le conducteur'], e: 'Le chef BAT est le porte-lance ; l’équipier BAT est le double porte-lance.', s: 'binomes' },
    { q: 'Parmi ces actions, laquelle fait partie des devoirs de l’équipier ?', c: ['Écarter tout ce qui peut devenir un aliment pour le feu', 'Décider seul du point d’attaque', 'Quitter son chef d’équipe pour explorer une autre pièce', 'Ouvrir les ouvrants pour ventiler sans ordre'], e: 'Les 6 devoirs : vigilance et aide, sécurité du binôme, relève du chef d’équipe, déblai pour la progression, écarter l’aliment du feu, entraîner dans le foyer ce qui menace de s’écrouler.', s: 'devoirs' },
    { q: 'Un binôme peut-il effectuer plusieurs actions simultanément ?', c: ['Non, pour des raisons d’efficacité il n’effectue qu’une seule action à la fois', 'Oui, s’il est expérimenté', 'Oui, à condition d’en rendre compte', 'Oui, seulement à l’air libre'], e: 'Diaporama « Rôle du binôme » : une seule action à la fois. Le binôme n’a cependant pas de fonction unique : il peut recevoir successivement plusieurs missions.', s: 'binomes' }
  ]
});

VSAV.chap({
  id: 'inc-mgo', part: 'inc', seq: INC1A,
  title: 'La Marche Générale des Opérations (1) : principes, reconnaissances, ventilation, sauvetages', short: 'MGO : principes', motif: 'list',
  sources: [LIV + ', § 1.2 (renvoi au GDO, section III, p. 68 à 83)', 'Diaporama formateur SDIS 51 « La Marche Générale des Opérations »', GDO + ', chapitre 3, section III (p. 68-72)'],
  summary: 'La MGO n’est pas une liste chronologique : ce sont 11 critères de réflexion du COS. Reconnaissances, placement des engins, ventilation, sauvetages.',
  why: '<b>Pourquoi la MGO n’est-elle pas une « check-list » ?</b> Le GDO insiste : trop souvent vue comme un enchaînement chronologique, la MGO est en fait l’<b>approche</b> que doivent avoir les équipes et surtout le COS. Les 11 critères sont des <b>outils de réflexion</b> qui se combinent : on peut ventiler et sauver en même temps, protéger avant même d’éteindre. L’objectif final est de <b>revenir à un état le plus proche possible de la situation normale</b>. L’équipier qui comprend cette logique sait pourquoi on lui demande, par exemple, de fermer une porte avant d’attaquer.',
  sections: [
    { id: 'principe', t: 'Une approche, pas une chronologie', ic: 'bulb', src: GDO + ', p. 68 ; diaporama MGO',
      html: '<p>La marche générale des opérations de lutte contre l’incendie correspond à l’<b>approche</b> que doivent avoir les équipes d’intervenants et en particulier le <b>commandant des opérations de secours (COS)</b>. L’efficacité repose sur la <b>coordination</b> la plus efficace possible des différentes actions, dans l’objectif de revenir à un état le plus proche de la situation normale.</p>' +
        '<p>Cette réflexion s’appuie sur <b>onze critères</b> :</p>' +
        '<ul class="check"><li>Reconnaissances</li><li>Placement des engins</li><li>Sauvetage et mise en sécurité</li><li>Attaque</li><li>Établissements</li><li>Ventilation</li><li>Protection</li><li>Surveillance</li><li>Déblai</li><li>Remise en condition des hommes et reconditionnement du matériel</li><li>Préservation des traces et indices</li></ul>' +
        '<p class="small muted">Le GDO détaille aussi le <b>relogement</b> (§ 9), traité avec les actions de fin d’intervention.</p>',
      figs: [{ img: 'img/inc/1/mgo-onze-criteres.jpg', cap: 'Les onze critères de la MGO', txt: '<p>Les critères sont disposés en roue autour de la « lutte contre les incendies de structure » : aucun ordre imposé, ils s’articulent selon la situation.</p>', src: 'Diaporama « La Marche Générale des Opérations » (reprend le schéma n°14 du GDO, p. 68)' }] },
    { id: 'reco', t: 'Les reconnaissances', ic: 'eye', src: GDO + ', § 1 (p. 69) ; diaporama MGO',
      html: '<p><b>Objet :</b> collecter les informations relatives à l’analyse de la zone d’intervention (ZI), au sinistre, aux personnes et biens menacés, en tenant compte de tous les axes de propagation potentiels dans le temps. Elles permettent au COS de fixer les <b>objectifs</b> et les <b>idées de manœuvre</b>.</p>' +
        '<div class="tw"><table><tbody>' +
        '<tr><th>Quand ?</th><td>Dès l’arrivée sur les lieux… et <b>en permanence</b> : la prise d’information doit durer toute l’intervention, pour tous les acteurs, et faire l’objet d’un <b>compte rendu systématique</b> à son supérieur.</td></tr>' +
        '<tr><th>Par qui ?</th><td>Le chef d’agrès FPT, accompagné ou non de son ou ses binômes (diaporama).</td></tr>' +
        '<tr><th>Types</th><td>Reconnaissance initiale ; secondaire ou complémentaire ; finale (diaporama).</td></tr>' +
        '<tr><th>Questions</th><td>À quoi sommes-nous confrontés ? Quels sont les risques imminents ? Victimes ?…</td></tr>' +
        '</tbody></table></div>' +
        '<p>L’évaluation doit être <b>précoce</b> pour déclencher les <b>réactions immédiates</b> : sauvetages ou mise en sécurité, demande de renforts, coupure des fluides (diaporama). Elle reste <b>permanente</b> pour suivre les risques de la ZI, l’efficacité des actions et l’évolution du sinistre.</p>' +
        '<div class="callout ok">Le premier chef d’agrès qui sait qu’il sera vite rejoint par un supérieur peut faire une reconnaissance très sommaire ; celui qui sait qu’il restera seul un moment doit faire une reconnaissance plus approfondie (GDO).</div>' },
    { id: 'engins', t: 'Le placement des engins', ic: 'pin', src: 'Diaporama « La Marche Générale des Opérations »',
      html: '<ul class="check"><li>Le <b>premier engin-pompe doit dépasser l’adresse</b>, en prévision de l’emplacement des échelles aériennes.</li><li>Lors de la reconnaissance autour du bâtiment, prendre garde aux <b>façades inaccessibles</b> et aux <b>courettes intérieures</b>.</li></ul>' },
    { id: 'ventil', t: 'La ventilation opérationnelle', ic: 'wave', src: GDO + ', § 2 (p. 69-70) ; diaporama MGO',
      html: '<div class="callout warn">« Un feu ventile, très bien, bien, peu ou très peu, mais il ventile, faute de quoi il s’éteint. »</div>' +
        '<p>La ventilation opérationnelle ne se résume pas à l’usage de ventilateurs : c’est un concept qui regroupe <b>toutes les actions qui maîtrisent les flux gazeux</b> (anti-ventilation, VPP, désenfumage naturel ou forcé, protection d’un volume par surpression…). Trois actions principales, <b>sans ordre chronologique</b> :</p>' +
        '<div class="tw"><table><tbody><tr><th>Protéger</th><td>Empêcher les fumées de venir dans un volume.</td></tr><tr><th>Désenfumer</th><td>Évacuer les fumées d’un local sans lien direct avec le local en feu.</td></tr><tr><th>Attaquer</th><td>Agir sur les fumées et le foyer ; canaliser leur propagation.</td></tr></tbody></table></div>' +
        '<p>Moyens : canalisation des flux (cloisonnement, ouvertures, fermetures), utilisation ou limitation du tirage, du vent, des ventilateurs. Comme pour les lances, les actions de ventilation sont <b>adaptées au fur et à mesure</b> de l’évolution de la situation.</p>' },
    { id: 'sauvetages', t: 'Sauvetages et mises en sécurité (vue d’ensemble)', ic: 'shield', src: GDO + ', § 3 (p. 71-72) ; diaporama MGO',
      html: '<p><b>SAUVER</b> reste la priorité de l’engagement des sapeurs-pompiers.</p>' +
        '<div class="tw"><table><tbody>' +
        '<tr><th>Sauvetage</th><td>Extraire une personne soumise à un <b>danger vital et imminent</b>, qui ne peut s’y soustraire par ses propres moyens. Il justifie parfois une plus grande exposition au risque : la <b>balance bénéfice/risque</b> guide le COS.</td></tr>' +
        '<tr><th>Mise en sécurité</th><td>Éloigner des personnes d’une menace <b>plus ou moins différée</b> ; à réaliser dans les meilleures conditions de sécurité (évacuation différée après assainissement des circulations, confinement…).</td></tr>' +
        '</tbody></table></div>' +
        '<p>Types cités : sauvetages <b>à vue</b> (victimes visibles de l’extérieur), sauvetages <b>en exploration</b> (accès par un itinéraire hostile), technique <b>AIDES</b> (Accéder, Isoler, Désenfumer, Explorer, Sauver ou Sortir).</p>' +
        '<p>Diaporama : action <b>immédiate</b> dès l’arrivée sur toute victime visible, <b>par tout sapeur-pompier</b> et <b>par tous les moyens</b> ; par les communications existantes ou par l’extérieur ; <b>éviter de faire passer les victimes dans la fumée</b> ; <b>ne pas laisser les victimes seules</b>.</p>' +
        '<p class="small muted">Les techniques de sauvetage (échelles, LSPCC…) sont traitées dans la séquence dédiée.</p>' }
  ],
  key: ['MGO = 11 critères de réflexion du COS, pas une chronologie.', 'Objectif : revenir à un état le plus proche de la situation normale.', 'Reconnaissances : dès l’arrivée et en permanence, avec compte rendu systématique.', 'Réactions immédiates : sauvetages/mises en sécurité, renforts, coupure des fluides.', 'Le 1er engin-pompe dépasse l’adresse pour laisser la place aux échelles aériennes.', 'Ventilation opérationnelle : protéger, désenfumer, attaquer (sans ordre chronologique).', 'Sauver reste la priorité ; balance bénéfice/risque.'],
  traps: ['Croire que la MGO s’applique dans l’ordre, étape après étape.', 'Garer le premier engin-pompe devant l’adresse : il gêne la mise en place des échelles aériennes.', 'Réduire la ventilation opérationnelle à l’utilisation du ventilateur.'],
  quiz: [
    { q: 'Sur combien de critères s’appuie la réflexion de la MGO selon le GDO ?', c: ['11', '7', '5', '9'], e: 'GDO p. 68 : « Cette réflexion s’appuie sur les onze critères » (schéma n°14).', s: 'principe' },
    { q: 'La MGO est avant tout :', c: ['Une approche de réflexion du COS, dont les critères se combinent', 'Une liste d’actions à exécuter strictement dans l’ordre', 'Une procédure réservée au chef de site', 'Un document de prévision rédigé avant l’intervention'], e: 'Le GDO rappelle qu’elle est « trop souvent considérée comme l’enchaînement chronologique de différentes actions » alors qu’il s’agit d’une approche.', s: 'principe' },
    { q: 'Où se place le premier engin-pompe ?', c: ['Il dépasse l’adresse pour laisser la place aux échelles aériennes', 'Devant l’entrée principale', 'Au plus près de l’hydrant', 'Avant l’adresse, pour se protéger'], e: 'Diaporama MGO : « Le premier engin-pompe doit dépasser l’adresse, en prévision de l’emplacement des échelles aériennes ».', s: 'engins' },
    { q: 'Quelles sont les trois actions principales de la ventilation opérationnelle ?', c: ['Protéger, désenfumer, attaquer', 'Ouvrir, ventiler, fermer', 'Refroidir, étouffer, disperser', 'Reconnaître, sauver, éteindre'], e: 'GDO § 2 : protéger (empêcher les fumées d’entrer), désenfumer (local sans lien direct avec le feu), attaquer (agir sur fumées et foyer).', s: 'ventil' },
    { q: 'Les reconnaissances doivent être :', c: ['Précoces et permanentes, avec compte rendu systématique', 'Réalisées une seule fois à l’arrivée', 'Faites uniquement par le COS', 'Terminées avant tout sauvetage'], e: 'GDO : prioritaires en début d’intervention, mais la prise d’information doit être permanente pour tous les acteurs, avec compte rendu au supérieur.', s: 'reco' },
    { q: 'Qu’est-ce qui distingue le sauvetage de la mise en sécurité ?', c: ['Le sauvetage concerne un danger vital et imminent ; la mise en sécurité une menace plus ou moins différée', 'Le sauvetage se fait toujours avec une échelle', 'La mise en sécurité est réservée aux victimes blessées', 'Aucune différence'], e: 'GDO § 3.1 : sans frontière nette, le sauvetage extrait d’un danger vital et imminent ; la mise en sécurité éloigne d’une menace différée.', s: 'sauvetages' },
    { q: 'Lors d’un sauvetage, il faut :', c: ['Éviter de faire passer les victimes dans la fumée et ne pas les laisser seules', 'Toujours les faire sortir par l’escalier enfumé, chemin le plus court', 'Les laisser seules dès qu’elles sont dehors', 'Attendre l’établissement d’une lance dans tous les cas'], e: 'Diaporama MGO : par les communications existantes ou par l’extérieur, éviter la fumée, ne pas laisser les victimes seules.', s: 'sauvetages' }
  ]
});

VSAV.chap({
  id: 'inc-mgo-suite', part: 'inc', seq: INC1A,
  title: 'La Marche Générale des Opérations (2) : attaque, protection, déblai, surveillance, fin d’intervention', short: 'MGO : de l’attaque à la fin', motif: 'flame',
  sources: ['Diaporama formateur SDIS 51 « La Marche Générale des Opérations »', GDO + ', chapitre 3, section III, § 4 à 11 (p. 72-83)'],
  summary: 'Les grandes familles d’actions contre le feu, puis protection, établissements, déblai, surveillance, relogement, réhabilitation et traces et indices.',
  why: '<b>Pourquoi s’intéresser à ce qui vient après les flammes ?</b> Une grande partie des dégâts et des accidents survient hors de l’attaque : dégâts des eaux, reprise de feu, effondrement ou intoxication pendant le déblai (phase dite <b>accidentogène</b> car la vigilance baisse), contamination par les suies au retour. Comprendre chaque critère permet à l’équipier de ne pas « détruire » la preuve d’une cause d’incendie, de protéger les biens sans qu’on le lui demande deux fois et de rester vigilant jusqu’au bout.',
  sections: [
    { id: 'attaque', t: 'Les actions contre le feu (vue d’ensemble)', ic: 'flame', src: GDO + ', § 4 (p. 72-79) ; diaporama MGO',
      html: '<p>Dans la grande majorité des cas, c’est l’<b>eau</b> qui est utilisée. Les familles d’actions décrites :</p>' +
        '<div class="tw"><table><thead><tr><th>Action</th><th>Principe</th></tr></thead><tbody>' +
        '<tr><td>Lutte contre les propagations <b>externes</b></td><td>Action défensive : pulvériser sur un sortant (refroidir les fumées dès leur sortie), réduire le rayonnement (lance « queue de paon »), arroser les biens exposés ; éloigner le combustible est aussi possible.</td></tr>' +
        '<tr><td>Lutte contre les propagations <b>internes</b></td><td>Dans le bâtiment mais hors du volume en feu : pulvérisation, lance écran, trouées ou exutoires.</td></tr>' +
        '<tr><td>Attaque <b>massive depuis l’extérieur</b></td><td>Agressive depuis une position défensive : enjeux ne justifiant pas l’exposition, ventilation incontrôlable, grands volumes. Nécessite des moyens hydrauliques importants.</td></tr>' +
        '<tr><td>Attaque de <b>feu naissant</b></td><td>Offensive, directe et rapide, feu encore contrôlé par le combustible, sans risque pour les intervenants ; débits relativement faibles.</td></tr>' +
        '<tr><td>Attaque avec <b>ventilation positive</b></td><td>Au contact du feu, visibilité améliorée et chaleur évacuée ; débit d’application <b>125 à 250 L/min</b>.</td></tr>' +
        '<tr><td>Attaque en <b>anti-ventilation</b></td><td>Priver le feu de comburant en limitant les ouvertures ; souvent quand le feu était déjà sous-ventilé.</td></tr>' +
        '<tr><td>Attaque de <b>transition</b> (atténuation)</td><td>Limitée dans le temps (<b>10 à 15 s</b> pour des volumes courants), menée de l’extérieur, jet concentré au plafond, <b>250 à 500 L/min</b>, avant l’attaque intérieure.</td></tr>' +
        '<tr><td><b>Repli défensif</b></td><td>Passage à un mode plus défensif si les conditions s’aggravent ; sous protection hydraulique, puis refermer la porte entre l’équipe et le feu dès que possible.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn">Sans maîtrise de la ventilation, l’attaque offensive d’un feu en croissance doit rester exceptionnelle : <b>l’excès de débit ne compense pas le défaut de maîtrise de la ventilation</b>.</div>' +
        '<p class="small muted">Débits et durées : diaporama MGO, repris du GDO (§ 4.5 et 4.7 ; le GDO précise « avec une LDV 500 » pour l’attaque de transition). Les techniques d’attaque et de lance sont détaillées dans les séquences dédiées.</p>' },
    { id: 'etab', t: 'Les établissements (principes)', ic: 'list', src: 'Diaporama MGO, d’après le GTO Établissements et techniques d’extinction',
      html: '<p>Phase quasi systématique, ils acheminent l’agent extincteur aux lances. Principes de choix :</p><ul class="check"><li>acheminer l’agent extincteur le plus approprié (en général l’eau, additivée ou non) ;</li><li>dans des temps compatibles avec la cinétique de l’opération ;</li><li>en préservant le potentiel physique des équipes ;</li><li>en anticipant l’évolution possible du sinistre (prolongements, compléments).</li></ul><div class="callout ok">L’établissement idéal répond au besoin, se fait <b>rapidement et en sécurité</b>, avec une <b>économie de personnel et d’efforts</b>.</div>' },
    { id: 'protection', t: 'La protection', ic: 'shield', src: GDO + ', § 6 (p. 80) ; diaporama MGO',
      html: '<p>Protéger des <b>effets directs</b> du feu et des fumées, mais aussi des conséquences de la lutte elle-même (<b>dégâts des eaux</b>, conséquences de la coupure des fluides). Biens à valeur financière, patrimoniale, sentimentale, ou indispensables au retour à la normale (clés, documents administratifs, fichiers clients, comptabilité…). Environnement : canaliser les flux liquides et gazeux (eaux d’extinction, effluents).</p>' +
        '<p>Modes d’action sur la <b>cible</b> (déplacement des biens…) ou sur le <b>flux</b> (bâchage, endiguement, assèchement, protection contre les fumées par la ventilation).</p>' +
        '<div class="callout warn"><b>Quand ?</b> « Quand l’eau ruisselle sur les biens à protéger, il est déjà trop tard. » La question se pose dès le début de l’intervention, parfois même avant l’extinction.</div>' },
    { id: 'deblai', t: 'Le déblai', ic: 'alert', src: GDO + ', § 7 (p. 81) ; diaporama MGO',
      html: '<p>Il facilite l’extinction et élimine les risques de reprise de feu. C’est une <b>phase accidentogène</b> : les risques persistent (ambiance toxique, effondrement, risque électrique, blessures) alors que la vigilance diminue (fatigue, désengagement d’une partie des moyens). Des mesures de toxiques (ex. détecteur CO) permettent d’adapter la protection respiratoire.</p>' +
        '<div class="callout bad">Des déblais <b>trop poussés</b> rendent très difficile l’expertise judiciaire et la recherche des causes et circonstances de l’incendie.</div>' },
    { id: 'surveillance', t: 'La surveillance', ic: 'clock', src: GDO + ', § 8 (p. 81) ; diaporama MGO',
      html: '<p>S’assurer de l’absence de reprise de feu et que des tiers ne s’exposent pas aux risques. Elle est effectuée <b>en continu</b> avec les moyens de répondre à une évolution défavorable. Le gardiennage n’est pas une mission des SDIS, mais le COS éclaire les sinistrés (à défaut l’autorité locale) sur les mesures à prendre.</p>' +
        '<div class="callout ok">En situation courante, l’<b>absence de point chaud vérifiée pendant deux heures</b> peut permettre au COS de considérer le feu comme totalement éteint.</div>' +
        '<p>GDO : avant de quitter les lieux, les gaz de pyrolyse et de combustion doivent être recherchés dans toute la structure. Une fumée blanche inexpliquée par l’extinction est à considérer comme une pyrolyse (une fumée jaunâtre en est un indicateur plutôt fiable).</p>' },
    { id: 'fin', t: 'Relogement, réhabilitation, traces et indices', ic: 'check', src: GDO + ', § 9 à 11 (p. 82-83) ; diaporama MGO',
      html: '<div class="tw"><table><tbody>' +
        '<tr><th>Relogement</th><td>Responsabilité du <b>DOS</b> ; dès que des logements sont inutilisables (fumées, suies, stabilité, absence d’énergie), le COS l’en informe au plus tôt.</td></tr>' +
        '<tr><th>Réhabilitation et reconditionnement</th><td>Nettoyage maximum des EPI et matériels sur place, selon 4 options : pas nécessaire ; souillure superficielle (brossage léger à sec, rinçage léger si besoin) ; souillure importante / dépôts gras (brossage à l’eau savonneuse puis rinçage) ; souillure trop élevée ou conditions défavorables : <b>emballage</b> avant retour. Déshabillage en amont de la zone de soutien par des SP protégés (FFP3, masque à cartouche ou ARI, gants à usage unique). <b>Lavage des mains et des chaussants</b> avant de remonter dans le véhicule.</td></tr>' +
        '<tr><th>Préservation des traces et indices (PTI)</th><td>Limiter l’altération et la contamination de la scène : observation et mémorisation, <b>déblai temporisé et/ou adapté</b>. Objectifs : comprendre comment le feu a débuté et s’est propagé (assurances, justice), identifier comportements et équipements à risque, alimenter le retour d’expérience.</td></tr>' +
        '</tbody></table></div>' }
  ],
  key: ['L’eau est l’agent extincteur utilisé dans la grande majorité des cas.', 'Attaque de transition : 10 à 15 s, de l’extérieur, jet au plafond, 250 à 500 L/min.', 'Attaque sous ventilation positive : 125 à 250 L/min.', 'Excès de débit ne compense pas le défaut de maîtrise de la ventilation.', '« Quand l’eau ruisselle sur les biens, il est déjà trop tard » : protéger tôt.', 'Déblai = phase accidentogène ; déblai trop poussé = traces et indices détruits.', 'Surveillance : absence de point chaud 2 h → feu considéré éteint par le COS (situation courante).', 'Relogement : responsabilité du DOS, informé au plus tôt par le COS.'],
  traps: ['Relâcher sa vigilance (et son ARI) pendant le déblai : ambiance toxique et effondrements persistent.', 'Tout déblayer « pour être sûr » et détruire les traces et indices.', 'Remonter dans l’engin avec une tenue souillée sans lavage des mains et des chaussants.'],
  quiz: [
    { q: 'Quelle est la durée indicative d’une attaque de transition pour des volumes courants ?', c: ['10 à 15 secondes', '1 à 2 minutes', '2 à 3 secondes', '5 minutes'], e: 'GDO § 4.7 et diaporama MGO : attaque limitée dans le temps, de l’ordre de 10 à 15 s, menée de l’extérieur, avant l’attaque intérieure.', s: 'attaque' },
    { q: 'Débit indiqué pour l’attaque de transition :', c: ['De l’ordre de 250 à 500 L/min', '125 à 250 L/min', '60 L/min', '1 000 L/min minimum'], e: 'Débit important car une faible partie de l’eau sera efficace et il faut une portée et une diffusion suffisantes (GDO : avec une LDV 500).', s: 'attaque' },
    { q: 'Sans maîtrise possible de la ventilation, augmenter le débit :', c: ['Ne compense pas le défaut de maîtrise de la ventilation', 'Suffit toujours à éteindre le feu', 'Supprime le risque de phénomène thermique', 'Est la règle pour une attaque offensive'], e: 'Diaporama MGO / GDO : l’excès de débit ne peut compenser le défaut de maîtrise de la ventilation et peut mettre les intervenants en danger.', s: 'attaque' },
    { q: 'Pourquoi le déblai est-il une phase accidentogène ?', c: ['Les risques persistent alors que la vigilance des intervenants diminue', 'Parce qu’il se fait toujours de nuit', 'Parce qu’il est réalisé sans lance', 'Parce qu’il est réalisé par la police'], e: 'GDO § 7 : ambiance toxique, effondrement, risque électrique et blessures persistent ; fatigue et baisse de vigilance.', s: 'deblai' },
    { q: 'En situation courante, le COS peut considérer le feu comme totalement éteint après :', c: ['Deux heures sans point chaud vérifié', 'Dix minutes sans flamme', 'Le départ du dernier engin', 'Une heure de déblai'], e: 'GDO § 8 et diaporama : absence de point chaud vérifiée pendant deux heures.', s: 'surveillance' },
    { q: 'Quand doit-on penser à la protection des biens ?', c: ['Dès le début de l’intervention, parfois avant l’extinction', 'Uniquement après l’extinction', 'Pendant la surveillance', 'Seulement à la demande du propriétaire'], e: '« Quand l’eau ruisselle sur les biens à protéger, il est déjà trop tard. »', s: 'protection' },
    { q: 'Qui est responsable du relogement des sinistrés ?', c: ['Le DOS, informé au plus tôt par le COS', 'Le chef d’agrès', 'L’équipier du BAL', 'Le SDIS seul'], e: 'GDO § 9 : le relogement relève de la responsabilité du DOS.', s: 'fin' },
    { q: 'Avant de réintégrer le véhicule après un feu, il faut systématiquement :', c: ['Se laver les mains et laver les effets chaussants', 'Retirer son casque seulement', 'Rincer l’ARI à grande eau', 'Rien, le nettoyage se fait au centre'], e: 'GDO § 10 : un lavage systématique des mains et des effets chaussants doit être effectué avant de réintégrer le véhicule.', s: 'fin' }
  ]
});

/* =====================================================================================
   INCENDIE 2 — CONNAÎTRE LE FEU
   ===================================================================================== */

VSAV.chap({
  id: 'inc-combustion', part: 'inc', seq: INC1B,
  title: 'La combustion et le triangle du feu', short: 'Combustion', motif: 'flame',
  sources: [LIV + ', § 2.1.1 et 2.1.1.1 (p. 15-17, 22)', 'Diaporama formateur SDIS 51 « La combustion »', GDO + ', § 1.1 et 1.2 (p. 19-20)', 'Guide d’instruction et de manœuvre INC (la combustion)'],
  summary: 'Combustible + comburant + énergie d’activation ; ce qui brûle, ce sont des gaz ; vitesses de combustion ; combustion complète ou incomplète.',
  why: '<b>Pourquoi apprendre la chimie du feu ?</b> Parce que chaque geste d’extinction consiste à <b>retirer un côté du triangle</b>. Et parce que comprendre qu’un solide ne brûle pas directement — il chauffe, émet des <b>gaz de pyrolyse</b>, et ce sont eux qui s’enflamment — explique pourquoi les fumées d’un incendie sont elles-mêmes un combustible, base de tous les phénomènes thermiques dangereux.',
  sections: [
    { id: 'definition', t: 'Définitions', ic: 'book', src: LIV + ', § 2.1.1 (p. 15) ; ' + GDO + ', § 1.1 (p. 19-20)',
      html: '<p><b>Combustion</b> (livret) : réaction chimique d’<b>oxydoréduction</b> entre un oxydant (le <b>comburant</b>) et un réducteur (le <b>combustible</b>), qui se manifeste en présence d’une <b>énergie d’activation</b>. Sa manifestation visible est la flamme ; elle s’accompagne d’un dégagement de chaleur et de lumière : c’est une réaction <b>exothermique</b>.</p>' +
        '<div class="tw"><table><tbody><tr><th>Feu</th><td>(GDO, ISO 13943) Combustion auto-entretenue assurée pour produire des effets utiles et dont le développement est <b>maîtrisé</b> dans le temps et dans l’espace.</td></tr>' +
        '<tr><th>Incendie</th><td>Combustion qui se développe de manière <b>incontrôlée</b> dans le temps et dans l’espace.</td></tr></tbody></table></div>' },
    { id: 'triangle', t: 'Le triangle du feu', ic: 'molecule', src: 'Diaporamas « La combustion » et « Les procédés d’extinction » ; ' + LIV + ', p. 16',
      html: '<p>Trois éléments indispensables à l’éclosion et à l’entretien du feu :</p>' +
        '<div class="tw"><table><thead><tr><th>Élément</th><th>Ce que c’est</th></tr></thead><tbody>' +
        '<tr><td><b>Comburant</b></td><td>Corps chimique qui permet la combustion ; principalement le <b>dioxygène de l’air</b> (air : 21 % O₂, 78 % N₂, 1 % gaz rares).</td></tr>' +
        '<tr><td><b>Combustible</b></td><td>Toute substance susceptible de brûler, solide, liquide ou gazeuse. Sa nature et son état de division influencent la vitesse de combustion. En réalité, ce sont les <b>vapeurs et gaz</b> que le combustible émet qui brûlent.</td></tr>' +
        '<tr><td><b>Énergie d’activation</b></td><td>Flamme, étincelle, source de chaleur, augmentation de pression… d’origine chimique, mécanique, électrique…</td></tr>' +
        '</tbody></table></div>',
      figs: [{ img: 'img/inc/1/triangle-elements.jpg', cap: 'Le triangle du feu', txt: '<p>Supprimer un seul des trois côtés suffit à arrêter la combustion : c’est le principe de tous les procédés d’extinction.</p>', src: 'Diaporama « Les procédés d’extinction » (repris dans le livret, p. 16)' }] },
    { id: 'energie', t: 'Les formes de l’énergie d’activation', ic: 'bolt', src: 'Diaporama « La combustion »',
      html: '<div class="tw"><table><tbody>' +
        '<tr><th>Mécanique</th><td>Frottement, choc mécanique, compression.</td></tr>' +
        '<tr><th>Électrique</th><td>Court-circuit, arc.</td></tr>' +
        '<tr><th>Biologique</th><td>Fermentation…</td></tr>' +
        '<tr><th>Calorique</th><td>Chaleur, préchauffage (ex. : chalumeau).</td></tr>' +
        '<tr><th>Chimique</th><td>Catalyseur (abaisse la barrière énergétique).</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Causes d’incendie</b> (livret p. 22) : <b>humaines</b> (imprudence de fumeur, ignorance, négligence, malveillance), <b>naturelles</b> (foudre, soleil — effet de loupe, surpression de bouteilles —, fermentation des fourrages), <b>énergétiques</b> (étincelles, arcs, frottements, réactions chimiques exothermiques, échauffement de conducteurs, électricité statique).</p>' },
    { id: 'mecanisme', t: 'Ce qui brûle vraiment : la pyrolyse', ic: 'molecule', src: GDO + ', § 1.2 (p. 20) ; Guide d’instruction INC',
      steps: ['Production des gaz de pyrolyse : la matière chauffe par transfert thermique et se décompose en émettant des gaz inflammables.', 'Inflammation des gaz : assez de gaz, mélangé à l’air, et une source d’énergie suffisante allument le mélange.', 'Établissement et maintien de la flamme : la flamme se maintient si les gaz dégagés sont en quantité suffisante, l’apport d’air suffisant et les conditions thermiques adéquates.'], stepsTitle: 'Les 3 étapes du mécanisme du feu (GDO)',
      after: '<div class="callout ok">Guide d’instruction : « Lorsque nous sommes confrontés à un feu de table, ce n’est pas la table en elle-même qui brûle mais les produits de pyrolyse produits par la chaleur. » Quelle que soit la matière, on combat toujours un feu sous forme <b>gazeuse</b>.</div>',
      figs: [{ img: 'img/inc/1/mecanisme-feu.jpg', cap: 'Mécanisme du feu', txt: '<p>(1) l’énergie fait monter la température de surface du matériau ; (2) les gaz de pyrolyse s’enflamment au contact d’une source d’énergie ; (3) la flamme s’établit et se maintient.</p>', src: GDO + ', schéma n°2, p. 20' }] },
    { id: 'vitesses', t: 'Les vitesses de combustion', ic: 'clock', src: LIV + ', § 2.1.1.1 (p. 16) ; diaporama « La combustion »',
      html: '<div class="tw"><table><thead><tr><th>Combustion</th><th>Livret</th><th>Exemple</th></tr></thead><tbody>' +
        '<tr><td><b>Lente</b></td><td>Faible dégagement de chaleur, absence totale de flammes.</td><td>Rouille (livret) ; cigarette qui se consume (diaporama)</td></tr>' +
        '<tr><td><b>Spontanée</b></td><td>Sans énergie d’activation extérieure : engendrée par la propre chaleur des matériaux.</td><td>Foin humide qui fermente</td></tr>' +
        '<tr><td><b>Vive</b></td><td>Fort dégagement de chaleur, flammes, énergie d’activation. Combustion « normale et classique ».</td><td>Feu de forêt, de voiture</td></tr>' +
        '<tr><td><b>Très vive</b> (déflagration)</td><td>Accompagnée d’une surpression ; vitesse <b>inférieure à celle du son</b> (&lt; 340 m/s), surpression de <b>4 à 10 bars</b>.</td><td>Mise à feu d’un chalumeau, explosion de fumées</td></tr>' +
        '<tr><td><b>Instantanée</b> (détonation)</td><td>Mélange en proportions idéales ; vitesse <b>supérieure à celle du son</b> (&gt; 340 m/s), surpression de <b>20 à 30 bars</b>.</td><td>Coup de fusil, BLEVE</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Divergence entre sources — combustion spontanée :</b> le livret la décrit avec « fort dégagement de chaleur et présence de flammes » ; le diaporama « La combustion » la décrit comme « une combustion lente avec absence de flamme visible » par auto-échauffement, souvent cachée au cœur du combustible (montée en température de quelques heures à plusieurs jours). Les deux s’accordent sur l’absence d’énergie d’activation extérieure et l’exemple du foin.</div>' +
        '<p class="small muted">Le diaporama précise que la rouille, combustion lente qui ne dégage pas de chaleur, n’est pas une réaction intéressante pour les sapeurs-pompiers.</p>' },
    { id: 'complete', t: 'Combustion complète ou incomplète', ic: 'drop', src: LIV + ', p. 17 ; diaporama « La combustion »',
      html: '<div class="tw"><table><thead><tr><th></th><th>Complète</th><th>Incomplète</th></tr></thead><tbody>' +
        '<tr><th>Comburant</th><td>En quantité suffisante</td><td>Insuffisant (feux en espace clos ou semi-ouvert)</td></tr>' +
        '<tr><th>Flammes</th><td>Bleues, peu éclairantes</td><td>Orange, très éclairantes</td></tr>' +
        '<tr><th>Produits</th><td>Principalement CO₂ et eau ; incombustibles</td><td>Imbrûlés, encore <b>combustibles</b> ; fumée souvent noire, monoxyde de carbone</td></tr>' +
        '<tr><th>En intervention</th><td>Très rare</td><td>La plus souvent rencontrée</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout bad"><b>En général, un incendie est une combustion VIVE INCOMPLÈTE</b> (livret) : ses fumées contiennent des produits qui peuvent encore brûler.</div>' }
  ],
  key: ['Triangle du feu : combustible, comburant (O₂ de l’air), énergie d’activation.', 'Combustion = réaction d’oxydoréduction exothermique.', 'Incendie = combustion qui se développe de façon incontrôlée dans le temps et l’espace.', 'Ce sont les gaz de pyrolyse qui brûlent, pas le solide.', 'Déflagration : < 340 m/s, 4 à 10 bars ; détonation : > 340 m/s, 20 à 30 bars.', 'Un incendie est en général une combustion vive incomplète.', 'Combustion incomplète : flammes orange, fumées noires, CO, imbrûlés combustibles.'],
  traps: ['Penser que le bois ou le canapé brûle directement : ce sont ses gaz de pyrolyse.', 'Confondre déflagration (subsonique) et détonation (supersonique).', 'Croire que les fumées sont un simple déchet : issues d’une combustion incomplète, elles brûlent encore.'],
  quiz: [
    { q: 'Quels sont les trois éléments du triangle du feu ?', c: ['Combustible, comburant, énergie d’activation', 'Eau, air, chaleur', 'Fumée, flamme, braise', 'Oxygène, azote, carbone'], e: 'Il faut les trois pour que le feu naisse et s’entretienne ; en supprimer un éteint le feu.', s: 'triangle' },
    { q: 'Dans un incendie de structure, le comburant est principalement :', c: ['Le dioxygène de l’air', 'L’azote', 'Le monoxyde de carbone', 'La vapeur d’eau'], e: 'Diaporama : « Il s’agit principalement du dioxygène présent dans l’air » (21 % O₂).', s: 'triangle' },
    { q: 'Lorsqu’une table brûle, ce qui brûle réellement, ce sont :', c: ['Les gaz de pyrolyse émis par le bois chauffé', 'Les fibres solides du bois', 'L’azote de l’air', 'La vapeur d’eau'], e: 'GDO § 1.2 et Guide d’instruction : la matière chauffée se décompose en gaz inflammables, qui s’enflamment.', s: 'mecanisme' },
    { q: 'Une combustion très vive dont la vitesse est inférieure à celle du son s’appelle :', c: ['Une déflagration', 'Une détonation', 'Une combustion lente', 'Une pyrolyse'], e: 'Livret : < 340 m/s et surpression de 4 à 10 bars = déflagration ; > 340 m/s et 20 à 30 bars = détonation.', s: 'vitesses' },
    { q: 'Quelle surpression le livret associe-t-il à une détonation ?', c: ['20 à 30 bars', '4 à 10 bars', '1 à 2 bars', 'Plus de 100 bars'], e: 'Combustion instantanée : vitesse > 340 m/s, surpression de 20 à 30 bars.', s: 'vitesses' },
    { q: 'L’inflammation du foin humide par fermentation est un exemple de combustion :', c: ['Spontanée', 'Instantanée', 'Très vive', 'Complète'], e: 'Elle se produit sans énergie d’activation extérieure, par la propre chaleur du matériau.', s: 'vitesses' },
    { q: 'En général, un incendie est une combustion :', c: ['Vive incomplète', 'Lente complète', 'Instantanée complète', 'Spontanée complète'], e: 'Livret p. 17 : « En général, un incendie est une combustion vive incomplète ».', s: 'complete' },
    { q: 'Des flammes orange très éclairantes et une fumée noire indiquent :', c: ['Une combustion incomplète par manque de comburant', 'Une combustion complète', 'Une combustion lente', 'L’absence de combustible'], e: 'Combustion incomplète : apport en comburant insuffisant, flammes orange, imbrûlés et CO.', s: 'complete' }
  ]
});

VSAV.chap({
  id: 'inc-fumees', part: 'inc', seq: INC1B,
  title: 'Les fumées et la puissance du feu', short: 'Fumées', motif: 'skull',
  sources: ['Diaporama formateur SDIS 51 « La combustion » (produits de combustion, fumée, COMIX)', GDO + ', § 1.4 et 1.5 (p. 21-22)', 'Guide d’instruction et de manœuvre INC (les fumées d’incendie)'],
  summary: 'Les fumées sont chaudes, opaques, mobiles, inflammables et toxiques (COMIX) ; la puissance d’un feu se mesure en watts.',
  why: '<b>Pourquoi tant d’importance aux fumées ?</b> Ce sont elles qui tuent la plupart des victimes et qui provoquent les accidents de sapeurs-pompiers : elles aveuglent, empoisonnent, transportent la chaleur loin du foyer et peuvent <b>s’enflammer d’un coup</b>. Le GDO les qualifie de véritable mélange combustible : il faut les traiter <b>autant que le foyer lui-même</b>.',
  sections: [
    { id: 'produits', t: 'Produits de combustion et fumée', ic: 'molecule', src: 'Diaporama « La combustion » ; ' + GDO + ', § 1.5',
      html: '<p><b>Produits de combustion</b> : particules gazeuses, liquides et solides engendrées par la combustion ou la pyrolyse. Visibles (flammes, fumées) ou invisibles (certains gaz comme le CO), mesurés en % ou en ppm. Combustibles s’ils proviennent d’une combustion incomplète.</p>' +
        '<p><b>Fumée</b> : ensemble visible des particules solides et/ou liquides en suspension dans les gaz, résultant d’une combustion ou d’une pyrolyse. Gaz habituels : dioxyde de carbone, monoxyde de carbone, vapeur d’eau, et selon les matériaux cyanure d’hydrogène, chlorure d’hydrogène, oxyde nitreux, hydrocarbures… Ces gaz contiennent souvent des <b>combustibles imbrûlés</b> (GDO).</p>' },
    { id: 'comix', t: 'Les dangers des fumées : C.O.M.I.X', ic: 'alert', src: 'Diaporama « La combustion » ; Guide d’instruction INC',
      html: '<div class="tw"><table><thead><tr><th>Lettre</th><th>Danger</th><th>Pourquoi</th></tr></thead><tbody>' +
        '<tr><td><b>C</b></td><td>Chaude</td><td>La plus grande partie de la chaleur est emportée par convection dans le panache ; chargée de suies, la fumée <b>rayonne</b> et peut enflammer les combustibles proches.</td></tr>' +
        '<tr><td><b>O</b></td><td>Opaque</td><td>Suies et aérosols font écran : visibilité réduite à quelques centimètres, faisceau de la lampe invisible ; sons assourdis, distances mal appréciées.</td></tr>' +
        '<tr><td><b>M</b></td><td>Mobile</td><td>Déplacement vertical très rapide ; elle s’insinue partout (portes, gaines VMC, gaines techniques), jusque dans les combles et pièces éloignées.</td></tr>' +
        '<tr><td><b>I</b></td><td>Inflammable, voire explosive</td><td>Issue d’une combustion incomplète, chargée de produits inflammables (diaporama : CO à 125 000 ppm soit 12,5 %).</td></tr>' +
        '<tr><td><b>X</b></td><td>Toxique</td><td>Pauvre en oxygène, riche en CO, HCN, HCl ; plusieurs centaines de degrés : milieu irrespirable.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Guide d’instruction : le CO a une température d’auto-inflammation de 600 °C ; quand la zone gazeuse haute (plafond de fumée) atteint cette température, il peut s’enflammer spontanément.</p>' +
        '<div class="callout warn"><b>Deux présentations selon les sources :</b> le diaporama et le Guide d’instruction retiennent <b>5 dangers</b> (COMIX) ; le GDO en liste <b>7</b> : inflammabilité/explosivité, toxicité/corrosivité, émission de particules, opacité, rayonnement, envahissement et frein à la mobilité, chaleur.</div>' },
    { id: 'puissance', t: 'La puissance d’un feu', ic: 'bolt', src: GDO + ', § 1.4 (p. 21)',
      html: '<p>La puissance d’un feu est la quantité d’énergie thermique dégagée par unité de temps : elle s’exprime en <b>watts</b> (1 W = 1 J/s). Elle dépend de la nature, de la quantité, de la position du combustible et de l’apport en comburant : elle peut être <b>limitée par le combustible (FLC)</b> ou <b>par la ventilation (FLV)</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Combustible</th><th>Puissance dégagée</th></tr></thead><tbody>' +
        '<tr><td>Cigarette</td><td>5 W</td></tr><tr><td>Allumette</td><td>50 W</td></tr><tr><td>Bougie</td><td>80 W</td></tr>' +
        '<tr><td>Corbeille de papiers</td><td>150 kW</td></tr><tr><td>Poubelle</td><td>50 à 300 kW</td></tr>' +
        '<tr><td>Fauteuil</td><td>2 MW</td></tr><tr><td>Sapin de Noël</td><td>1 à 2 MW</td></tr><tr><td>Canapé</td><td>1 à 3 MW</td></tr>' +
        '<tr><td>Feu de salon ou chambre développé</td><td>3 à 10 MW</td></tr></tbody></table></div>' +
        '<div class="callout ok">Guide d’instruction : la quantité de fumées produite est égale à l’air entrant plus les gaz de pyrolyse émis. « Plus vous laissez la porte ouverte, plus l’incendie sera puissant. »</div>' }
  ],
  key: ['COMIX : Chaude, Opaque, Mobile, Inflammable, toXique.', 'La fumée est un combustible : imbrûlés et CO.', 'Le GDO liste 7 dangers (ajoute particules, rayonnement, frein à la mobilité, corrosivité).', 'Puissance en watts : canapé 1 à 3 MW, salon/chambre développé 3 à 10 MW.', 'FLC = feu limité par le combustible ; FLV = feu limité par la ventilation.', 'Porte maintenue ouverte = plus d’air = feu plus puissant.'],
  traps: ['Penser qu’une fumée claire ou refroidie est sans danger : elle peut rester inflammable.', 'Croire que la fumée reste dans la pièce du feu : elle migre par les gaines et les combles.'],
  quiz: [
    { q: 'Que signifie l’acronyme C.O.M.I.X ?', c: ['Chaude, Opaque, Mobile, Inflammable, toXique', 'Combustible, Oxygène, Mélange, Inflammation, eXplosion', 'Convection, Opacité, Mouvement, Isolation, eXtinction', 'Chaleur, Odeur, Masse, Incandescence, eXtension'], e: 'Moyen mnémotechnique des 5 dangers des fumées (diaporama « La combustion »).', s: 'comix' },
    { q: 'Pourquoi la fumée est-elle inflammable ?', c: ['Elle résulte d’une combustion incomplète et contient des produits encore combustibles', 'Parce qu’elle contient beaucoup d’oxygène', 'Parce qu’elle contient de la vapeur d’eau', 'Elle ne l’est jamais'], e: 'Les imbrûlés et le CO présents dans la fumée peuvent encore réagir avec le comburant.', s: 'comix' },
    { q: 'Selon le Guide d’instruction, à quelle température le CO peut-il s’auto-enflammer ?', c: ['600 °C', '100 °C', '1 200 °C', '300 °C'], e: 'Quand la zone gazeuse haute atteint 600 °C, le CO qu’elle contient peut s’enflammer spontanément.', s: 'comix' },
    { q: 'Quelle puissance le GDO donne-t-il pour un feu de salon ou de chambre développé ?', c: ['3 à 10 MW', '150 kW', '50 à 300 kW', '80 W'], e: 'Tableau du GDO § 1.4 : fauteuil 2 MW, canapé 1 à 3 MW, salon/chambre développé 3 à 10 MW.', s: 'puissance' },
    { q: 'La fumée envahit des combles éloignés de la pièce en feu. Quel caractère l’explique ?', c: ['Sa mobilité', 'Son opacité', 'Sa toxicité', 'Sa couleur'], e: 'Fumée mobile : déplacement vertical rapide, elle s’insinue par tous les orifices (gaines de VMC, gaines techniques…).', s: 'comix' }
  ]
});

VSAV.chap({
  id: 'inc-propagation', part: 'inc', seq: INC1B,
  title: 'Les modes de propagation du feu', short: 'Propagation', motif: 'wave',
  sources: [LIV + ', § 2.1.1.1 « Propagation de la combustion » (p. 18-19)', 'Diaporama formateur SDIS 51 « La propagation du feu »', GDO + ', § 1.3 (p. 21)', 'Guide d’instruction et de manœuvre INC (modes de propagation)'],
  summary: 'Rayonnement, convection, conduction, projection : comment le feu passe d’un objet, d’une pièce, d’un étage à l’autre.',
  why: '<b>Pourquoi distinguer les modes de propagation ?</b> Parce que chacun appelle une parade différente : on se protège du <b>rayonnement</b> par un écran d’eau, on bloque la <b>convection</b> en fermant les portes et en refroidissant les fumées, on surveille la <b>conduction</b> à travers les murs et poutres métalliques, on guette les <b>projections</b> loin du foyer. Le feu ne se contente pas de « s’étendre » : il voyage par ces quatre chemins, souvent en même temps.',
  sections: [
    { id: 'modes', t: 'Les 4 modes de propagation', ic: 'wave', src: LIV + ', p. 18-19 ; diaporama « La propagation du feu » ; ' + GDO + ', § 1.3',
      html: '<p>Au cours d’un incendie, le feu se transmet de proche en proche par transfert de chaleur. Ces modes opèrent <b>simultanément ou séparément</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Mode</th><th>Principe</th><th>Exemple</th></tr></thead><tbody>' +
        '<tr><td><b>1. Rayonnement</b></td><td>Énergie émise par un corps chaud sous forme d’ondes électromagnétiques, <b>sans support matériel</b> ni contact. Elle chauffe les combustibles proches jusqu’à ce qu’ils émettent des gaz qui s’enflamment. Il varie avec la température du corps.</td><td>Chaleur ressentie sur les mains devant une cheminée.</td></tr>' +
        '<tr><td><b>2. Convection</b></td><td>Transfert par un <b>fluide en mouvement</b> (gaz, liquide), du bas vers le haut : un gaz chaud est moins dense et monte. Verticale, ou horizontale si les gaz rencontrent un obstacle.</td><td>Montée de la fumée chaude ; fumées dans les volumes de la structure.</td></tr>' +
        '<tr><td><b>3. Conduction</b></td><td>Transfert <b>au travers d’une matière solide</b>, de la zone chaude vers la zone froide. Le côté non exposé peut échauffer un combustible en contact. Un matériau est isolant ou conducteur.</td><td>Barre de fer chauffée à une extrémité.</td></tr>' +
        '<tr><td><b>4. Projection</b> de particules enflammées</td><td>Déplacement d’objets enflammés : explosion, flammèches, chute d’objets incandescents, écoulement de liquide en feu. Peut survenir loin du foyer.</td><td>Pommes de pin qui éclatent, brandons portés par le vent.</td></tr>' +
        '</tbody></table></div>',
      figs: [{ img: 'img/inc/1/modes-propagation.jpg', cap: 'Les modes de propagation', txt: '<p>(1) rayonnement autour du foyer, (2) convection de l’air chaud vers le haut, (3) conduction dans le support, (4) projection de particules enflammées. L’air frais entre en partie basse.</p>', src: 'Diaporama « La propagation du feu » (repris dans le livret, p. 18)' }] },
    { id: 'convection', t: 'Zoom sur la convection et la conduction', ic: 'image', src: 'Diaporama « La propagation du feu »',
      html: '<p>Diaporama : les fumées de convection peuvent atteindre <b>600 °C</b> ; elles cèdent leur énergie tout au long de leur parcours et échauffent les combustibles à proximité jusqu’à leur inflammation. Le mouvement de l’air chaud aspire en permanence de l’air frais vers la flamme pour l’alimenter en oxygène.</p>',
      figs: [
        { img: 'img/inc/1/convection.jpg', cap: 'La convection', txt: '<p>L’air réchauffé par la flamme monte (poussée d’Archimède) en emportant les produits de combustion ; l’air frais, plus lourd, est aspiré vers la base de la flamme.</p>', src: 'Diaporama « La propagation du feu »' },
        { img: 'img/inc/1/conduction.jpg', cap: 'La conduction', txt: '<p>Les atomes chauffés vibrent et transmettent leur énergie de proche en proche aux atomes voisins (diffusion moléculaire) à travers le solide conducteur.</p>', src: 'Diaporama « La propagation du feu »' }
      ] },
    { id: 'parts', t: 'Quelle part pour chaque mode ?', ic: 'grid', src: LIV + ', p. 19 ; Guide d’instruction INC',
      html: '<div class="tw"><table><thead><tr><th>Source</th><th>Convection</th><th>Rayonnement</th><th>Conduction</th></tr></thead><tbody>' +
        '<tr><td>Livret (chaleur produite par une combustion)</td><td><b>65 %</b> (en partie haute)</td><td><b>35 %</b></td><td>—</td></tr>' +
        '<tr><td>Guide d’instruction (propagation du feu dans une enceinte)</td><td><b>70 %</b></td><td><b>25 %</b></td><td><b>5 %</b></td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Divergence entre sources :</b> les chiffres ne sont pas identiques et ne mesurent pas exactement la même chose (répartition de la chaleur produite / part de la propagation dans une enceinte). Retenir l’idée commune : <b>la convection domine</b>, le rayonnement vient ensuite.</div>' },
    { id: 'facteurs', t: 'Ce qui fait varier la vitesse de propagation', ic: 'list', src: LIV + ', p. 18 ; diaporama « La propagation du feu »',
      html: '<ul class="check"><li><b>Facteurs géométriques</b> : épaisseur, surface, forme…</li><li><b>Disposition dans l’espace</b> : position horizontale, verticale…</li><li><b>Autres facteurs</b> : température, humidité de l’air, teneur en oxygène, inhibition.</li></ul>' }
  ],
  key: ['4 modes : rayonnement, convection, conduction, projection.', 'Ils opèrent simultanément ou séparément.', 'Rayonnement : sans support matériel ni contact.', 'Convection : fluide en mouvement, du bas vers le haut (fumées jusqu’à 600 °C selon le diaporama).', 'Conduction : à travers un solide.', 'La convection est le mode prédominant (65 % selon le livret, 70 % selon le Guide d’instruction).'],
  traps: ['Oublier la conduction : un feu peut se propager à travers un mur ou une poutre métallique sans flamme visible.', 'Ne surveiller que le foyer alors que les projections peuvent allumer un feu à distance.'],
  quiz: [
    { q: 'Quel mode de propagation se fait sans support matériel ni contact ?', c: ['Le rayonnement', 'La conduction', 'La convection', 'La projection'], e: 'Le rayonnement propage l’énergie sous forme d’ondes électromagnétiques.', s: 'modes' },
    { q: 'La montée verticale de la fumée chaude est un exemple de :', c: ['Convection', 'Conduction', 'Rayonnement', 'Projection'], e: 'Livret : « Le déplacement vertical de la fumée chaude est un bon exemple de convection ».', s: 'modes' },
    { q: 'Une barre métallique chauffée à une extrémité devient chaude à l’autre : c’est la…', c: ['Conduction', 'Convection', 'Projection', 'Pyrolyse'], e: 'La conduction transfère la chaleur au travers d’une matière solide.', s: 'modes' },
    { q: 'Selon le livret, quelle part de la chaleur produite est transportée par convection ?', c: ['65 %', '35 %', '5 %', '100 %'], e: 'Livret p. 19 : 65 % par convection, 35 % par rayonnement. Le Guide d’instruction donne 70 / 25 / 5 % pour la propagation dans une enceinte.', s: 'parts' },
    { q: 'Les brandons emportés par le vent illustrent :', c: ['La projection de particules enflammées', 'La conduction', 'Le rayonnement', 'L’inhibition'], e: 'La projection peut allumer des foyers à des distances assez lointaines du foyer initial.', s: 'modes' },
    { q: 'Lequel de ces facteurs influence la vitesse de propagation ?', c: ['La teneur en oxygène', 'La couleur du combustible', 'Le grade du chef d’agrès', 'L’heure de l’alerte'], e: 'Facteurs : géométriques, disposition dans l’espace, température, humidité, teneur en O₂, inhibition.', s: 'facteurs' }
  ]
});

VSAV.chap({
  id: 'inc-extinction', part: 'inc', seq: INC1B,
  title: 'Les procédés d’extinction et les classes de feux', short: 'Extinction et classes', motif: 'spray',
  sources: [LIV + ', § 2.1.1.1 « Les modes d’extinction » (p. 19-21) et § 2.1.1.2 (p. 21)', 'Diaporama formateur SDIS 51 « Les procédés d’extinction »', GDO + ', chapitre 1, section II (p. 32-34)', 'Guide d’instruction et de manœuvre INC (effets de l’eau, procédés d’extinction)'],
  summary: 'P.R.O.C.É.D.I.S. : agir sur un côté du triangle ; les classes A, B, C, D, F.',
  why: '<b>Pourquoi connaître tous les procédés quand on éteint presque toujours à l’eau ?</b> Parce que l’eau elle-même agit de plusieurs façons (refroidissement, étouffement par la vapeur, inertage, soufflage, dispersion) et que certains feux exigent autre chose : fermer une vanne éteint une fuite de gaz enflammée mieux que n’importe quelle lance, et la classe du feu oriente le choix de l’agent extincteur.',
  sections: [
    { id: 'principe', t: 'Le principe', ic: 'molecule', src: LIV + ', p. 19 ; diaporama « Les procédés d’extinction »',
      html: '<p>Les procédés d’extinction consistent à agir, <b>séparément ou simultanément</b>, sur un ou plusieurs éléments du triangle du feu — le <b>combustible</b>, le <b>comburant</b> et l’<b>énergie d’activation</b> — afin d’en modifier les proportions ou d’en empêcher le contact.</p>',
      figs: [{ img: 'img/inc/1/triangle-feu.jpg', cap: 'Rappel : la combustion', txt: '<p>Réaction exothermique entre un comburant (O₂ de l’air) et un combustible (solide, liquide ou gazeux) sous l’influence d’une énergie d’activation.</p>', src: 'Diaporama « La combustion »' }] },
    { id: 'procedis', t: 'P.R.O.C.É.D.I.S.', ic: 'list', src: 'Diaporama « Les procédés d’extinction » ; ' + LIV + ', p. 19-21',
      html: '<div class="tw"><table><thead><tr><th></th><th>Procédé</th><th>Objectif</th><th>Exemple</th><th>Agit sur</th></tr></thead><tbody>' +
        '<tr><td><b>P</b></td><td>Part du feu</td><td>Séparation physique entre matériaux en feu et intacts</td><td>Retourner la terre autour d’un feu de champ</td><td>Combustible</td></tr>' +
        '<tr><td><b>R</b></td><td>Refroidissement</td><td>Abaisser la température du combustible sous sa limite d’inflammation</td><td>Lance à eau, extincteur à eau pulvérisée</td><td>Énergie d’activation</td></tr>' +
        '<tr><td><b>O</b></td><td>Obstruction d’une conduite / fermeture d’un robinet</td><td>Couper l’alimentation en combustible (fuites enflammées de gaz, liquides inflammables)</td><td>Vanne d’arrêt gaz, barrage au compteur, écrasement d’une conduite</td><td>Combustible</td></tr>' +
        '<tr><td><b>C</b></td><td>Coupure de l’alimentation électrique</td><td>Supprimer la source de chaleur de l’appareil</td><td>Arrêt coup de poing, disjoncteur</td><td>Énergie d’activation</td></tr>' +
        '<tr><td><b>É</b></td><td>Étouffement</td><td>Barrière physique entre combustible et comburant</td><td>Tapis de mousse sur un bac d’hydrocarbure, serpillère humide sur une friteuse, nuage de CO₂</td><td>Comburant</td></tr>' +
        '<tr><td><b>D</b></td><td>Dispersion</td><td>Fractionner le foyer en petits foyers pour abaisser la température</td><td>Dispersion mécanique à la lance, au croc</td><td>Énergie d’activation (livret)</td></tr>' +
        '<tr><td><b>I</b></td><td>Inhibition</td><td>Bloquer le processus chimique qui permet à l’oxygène de participer à la combustion</td><td>Systèmes fixes des salles informatiques</td><td>Réaction combustible / comburant</td></tr>' +
        '<tr><td><b>S</b></td><td>Soufflage</td><td>Projeter un fluide sur les flammes ; action sur les vapeurs inflammables et gaz de pyrolyse</td><td>Souffler une bougie</td><td>—</td></tr>' +
        '</tbody></table></div>' +
        '<p>Refroidissement : selon le type de feu et sa localisation, on peut d’abord devoir <b>refroidir les fumées et l’ambiance thermique</b> avant d’agir sur le combustible.</p>' +
        '<div class="callout warn"><b>Divergences entre sources :</b> le texte du livret ne décrit pas le <b>soufflage</b> (présent dans le diaporama et dans l’acronyme PROCEDIS) ; la <b>dispersion</b> agit sur l’énergie d’activation selon le livret et le diaporama, sur « le combustible et l’énergie d’activation » selon le Guide d’instruction ; le Guide rattache le soufflage au combustible et ajoute l’<b>isolement</b> et l’<b>inertage</b> (remplacer l’O₂ par un gaz inerte, action sur le comburant).</div>' },
    { id: 'eau', t: 'Comment agit l’eau', ic: 'drop', src: 'Guide d’instruction INC (effets de l’eau) ; ' + GDO + ', section II (p. 32-34)',
      html: '<div class="tw"><table><tbody>' +
        '<tr><th>Refroidissement</th><td>En se vaporisant, l’eau absorbe l’énergie de la combustion (énergie).</td></tr>' +
        '<tr><th>Étouffement</th><td>La vapeur forme une barrière qui limite l’apport d’air (comburant).</td></tr>' +
        '<tr><th>Inertage</th><td>La vapeur abaisse la teneur en O₂ au voisinage des flammes ; elle « inerte » aussi les fumées (GDO).</td></tr>' +
        '<tr><th>Soufflage</th><td>Projetée violemment, elle perturbe l’écoulement des vapeurs combustibles.</td></tr>' +
        '<tr><th>Dispersion</th><td>En jet plein, elle disperse les matériaux en feu.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Guide d’instruction : <b>1 L d’eau à 100 °C ≈ 1 700 L de vapeur</b> ; à 500 °C ≈ 4 200 L. La vapeur prend la place de l’oxygène.</p>' +
        '<p>Le GDO résume la maîtrise du feu en 4 leviers : <b>contrôler l’arrivée d’air</b> (anti-ventilation, gestion des ouvrants), <b>agir sur les fumées</b> (les évacuer, les refroidir, les inerter), <b>agir sur le combustible</b> (l’évacuer, le refroidir), <b>interrompre la réaction chimique</b> (poudre sur feux électriques, gaz d’extinction fixes).</p>' },
    { id: 'classes', t: 'Les classes de feux', ic: 'grid', src: LIV + ', § 2.1.1.2 (p. 21) ; Guide d’instruction INC',
      html: '<div class="tw"><table><thead><tr><th>Classe</th><th>Feux de…</th><th>Exemples (livret)</th></tr></thead><tbody>' +
        '<tr><td><b>A</b></td><td>Matériaux solides</td><td>Bois, papier…</td></tr>' +
        '<tr><td><b>B</b></td><td>Liquides ou solides liquéfiables</td><td>Essence, alcool, huile…</td></tr>' +
        '<tr><td><b>C</b></td><td>Gaz</td><td>Méthane, éthane, propane, butane…</td></tr>' +
        '<tr><td><b>D</b></td><td>Métaux</td><td>Sodium, magnésium, aluminium…</td></tr>' +
        '<tr><td><b>F</b></td><td>Auxiliaires de cuisson</td><td>Huiles et graisses végétales et animales sur les appareils de cuisson</td></tr>' +
        '</tbody></table></div>' +
        '<p>Guide d’instruction : en classe A, ce sont les gaz de pyrolyse qui brûlent ; en classe B, les vapeurs dégagées par le liquide chauffé ; en classe C, le gaz lui-même.</p>' +
        '<p class="small muted">Note : la liste du livret pour la classe D se termine par « butane » ; le butane étant un gaz, il relève de la classe C, où le livret le cite aussi (probable coquille).</p>',
      figs: [{ img: 'img/inc/1/classes-feux.jpg', cap: 'Les classes de feux', txt: '<p>Pictogrammes A (solides), B (liquides), C (gaz), D (métaux), F (auxiliaires de cuisson). Il n’y a pas de classe E.</p>', src: LIV + ', p. 21' }] }
  ],
  key: ['PROCEDIS : Part du feu, Refroidissement, Obstruction, Coupure électrique, Étouffement, Dispersion, Inhibition, Soufflage.', 'Refroidissement → énergie d’activation ; étouffement → comburant ; part du feu et obstruction → combustible.', 'Inhibition : bloque la réaction chimique combustible / comburant.', 'Fuite de gaz enflammée : fermer la vanne (obstruction).', 'Classes : A solides, B liquides, C gaz, D métaux, F auxiliaires de cuisson.', '1 L d’eau à 100 °C ≈ 1 700 L de vapeur (Guide d’instruction).'],
  traps: ['Chercher une classe E : elle n’existe pas dans la liste.', 'Associer l’étouffement à l’énergie d’activation : il agit sur le comburant.', 'Oublier que refroidir les fumées peut être nécessaire avant d’atteindre le combustible.'],
  quiz: [
    { q: 'Le refroidissement agit sur :', c: ['L’énergie d’activation', 'Le comburant', 'Le combustible uniquement', 'La réaction chimique en chaîne'], e: 'Livret et diaporama : l’extinction par refroidissement est obtenue en agissant sur l’énergie d’activation.', s: 'procedis' },
    { q: 'Une serpillère humide posée sur une friteuse en feu est un exemple de :', c: ['Étouffement', 'Dispersion', 'Part du feu', 'Inhibition'], e: 'Étouffement : barrière physique entre combustible et comburant ; agit sur le comburant.', s: 'procedis' },
    { q: 'Fermer la vanne d’arrêt d’une fuite de gaz enflammée, c’est agir sur :', c: ['Le combustible', 'Le comburant', 'L’énergie d’activation', 'La température des fumées'], e: 'Obstruction d’une conduite / fermeture d’un robinet : on coupe l’alimentation en combustible.', s: 'procedis' },
    { q: 'Que signifie le « I » de P.R.O.C.É.D.I.S. ?', c: ['Inhibition', 'Isolement', 'Inertage', 'Inondation'], e: 'Inhibition : bloquer le processus chimique qui permet à l’oxygène de participer à la combustion (ex. : systèmes fixes des salles informatiques).', s: 'procedis' },
    { q: 'Un feu d’huile de friteuse appartient à la classe :', c: ['F', 'B', 'D', 'A'], e: 'Classe F : feux liés aux auxiliaires de cuisson (huiles et graisses végétales et animales).', s: 'classes' },
    { q: 'Un feu de magnésium appartient à la classe :', c: ['D', 'C', 'A', 'F'], e: 'Classe D : feux de métaux (sodium, magnésium, aluminium…).', s: 'classes' },
    { q: 'Un feu de propane appartient à la classe :', c: ['C', 'B', 'D', 'A'], e: 'Classe C : feux de gaz (méthane, éthane, propane, butane…).', s: 'classes' },
    { q: 'Selon le Guide d’instruction, 1 litre d’eau à 100 °C produit environ :', c: ['1 700 L de vapeur', '17 L de vapeur', '170 L de vapeur', '17 000 L de vapeur'], e: 'Guide d’instruction : 1 L d’eau à 100 °C = 1 700 L de vapeur ; à 500 °C = 4 200 L. La vapeur chasse l’oxygène (inertage).', s: 'eau' }
  ]
});

VSAV.chap({
  id: 'inc-developpement', part: 'inc', seq: INC1B,
  title: 'Comprendre le développement d’un feu', short: 'Développement du feu', motif: 'clock',
  sources: [LIV + ', § 5.2 (p. 90-92)', GDO + ', § 1.6 (p. 22-23)', 'Guide d’instruction et de manœuvre INC (le développement d’un incendie)'],
  summary: 'Phases du feu en local, régimes FLC / FLV, rôle déterminant de l’apport d’air : « qui maîtrise l’air maîtrise le feu ».',
  why: '<b>Pourquoi savoir dans quelle phase est le feu ?</b> Parce que le danger et la bonne tactique en dépendent. Un feu naissant se traite vite et à faible débit ; un feu <b>sous-ventilé</b> qui couve derrière une porte fermée peut repartir violemment dès qu’on lui donne de l’air. Le paramètre décisif n’est pas la quantité de meubles mais l’<b>apport d’air</b> : c’est pourquoi on gère les ouvrants avant même d’ouvrir la lance.',
  sections: [
    { id: 'phases', t: 'Les phases du développement', ic: 'clock', src: GDO + ', § 1.6 ; ' + LIV + ', § 5.2',
      html: '<div class="tw"><table><thead><tr><th>Phase (GDO)</th><th>Ce qui se passe</th><th>Régime</th></tr></thead><tbody>' +
        '<tr><td><b>Feu naissant</b></td><td>Dégagement de chaleur modéré, fumées peu abondantes ; seul le combustible influe (gaz de pyrolyse en quantité limitée).</td><td>FLC</td></tr>' +
        '<tr><td><b>Croissance</b></td><td>Puissance, température et fumées augmentent ; les objets exposés s’échauffent et s’enflamment. Évolution selon la ventilation, la nature et l’état de division des matières, le bâtiment.</td><td>FLC ou FLV selon la ventilation</td></tr>' +
        '<tr><td><b>Pleinement développé</b></td><td>Inflammation de l’ensemble des combustibles de la pièce ; puissance et risques de propagation maximum. Conséquence immédiate d’un embrasement généralisé.</td><td>FLV</td></tr>' +
        '<tr><td><b>Régression (déclin)</b></td><td>Fin de la combustion des matériaux ; puissance en baisse, mais les risques liés aux fumées restent présents.</td><td>Redevient FLC</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Divergence de découpage :</b> le livret décrit <b>trois</b> phases (croissance, feu pleinement développé, déclin) ; le GDO en décrit <b>quatre</b> en distinguant le feu naissant. Le livret précise que cette représentation est « tout à fait arbitraire » : on peut estimer l’évolution des températures, mais pas la durée de chaque phase.</div>',
      figs: [{ img: 'img/inc/1/courbe-developpement.jpg', cap: 'Courbe de développement classique du feu', txt: '<p>Trait plein : local ventilé — feu naissant, croissance (FLC), flashover, feu pleinement développé (FLV), déclin par épuisement du combustible. Pointillés noirs : cas de confinement (FLV), le feu décline par manque d’O₂. Pointillés orange : une rupture de confinement relance le feu.</p>', src: GDO + ', schéma n°3, p. 22' }] },
    { id: 'croissance', t: 'La croissance : l’air décide', ic: 'wave', src: LIV + ', § 5.2 (p. 90-91)',
      html: '<p>La première flamme dispose en général d’assez d’oxygène. Les échanges thermiques se font d’abord par <b>convection</b> des gaz chauds sur les parois, puis par <b>rayonnement</b> des flammes, enfin par <b>conduction</b> dans les éléments proches. Si le foyer reçoit de l’air frais — dans un local, le plus souvent par le <b>bris des vitres (vers 70 à 100 °C)</b> — le développement est brusquement accéléré.</p>' +
        '<p>L’arrivée d’air étant souvent moins rapide que l’augmentation de l’intensité, il peut se produire une <b>accalmie, généralement provisoire</b>, avec forte production de fumées. Paramètres en jeu : alimentation en air neuf et conditions de ventilation, nature/masse/inflammabilité du combustible, position des combustibles, géométrie du local, revêtement des parois, force et direction du vent, température extérieure.</p>' +
        '<div class="callout bad"><b>QUI MAÎTRISE L’AIR, MAÎTRISE LE FEU.</b> L’apport d’air est le paramètre le plus important : feu bien ventilé = développement rapide ; local fermé = le feu peut s’éteindre de lui-même par manque d’oxygène.</div>' },
    { id: 'flcflv', t: 'Feu limité par le combustible ou par la ventilation', ic: 'grid', src: LIV + ', p. 91 ; ' + GDO + ', § 1.6',
      html: '<div class="tw"><table><thead><tr><th></th><th>FLC — limité par le combustible</th><th>FLV — limité par la ventilation</th></tr></thead><tbody>' +
        '<tr><th>Oxygène</th><td>Suffisant</td><td>Insuffisant</td></tr>' +
        '<tr><th>Le feu dépend de</th><td>Du potentiel calorifique présent</td><td>De l’apport d’air frais</td></tr>' +
        '<tr><th>Évolution (GDO)</th><td>Développement et puissance maximum</td><td>Confinement maintenu : quasi auto-extinction ; rupture du confinement : reprise de la croissance, plus ou moins rapide et violente</td></tr>' +
        '</tbody></table></div>' +
        '<p>GDO : les feux développés en structure, dès lors qu’ils concernent des pièces meublées, sont <b>systématiquement limités par la ventilation</b> en plein développement. Le livret indique qu’au cours d’un incendie, le feu passe successivement par ces deux régimes.</p>' +
        '<div class="callout ok">Image du Guide d’instruction : un coureur de 10 km. Au départ, il dépend de ses muscles qui chauffent (FLC) ; « chaud », il dépend de son souffle — un sac sur la tête et il s’arrête (FLV) ; en fin de course, il manque de muscles (déclin, de nouveau FLC).</div>' },
    { id: 'plein', t: 'Plein développement et déclin : les chiffres', ic: 'clock', src: LIV + ', § 5.2 (p. 91-92)',
      html: '<div class="tw"><table><tbody>' +
        '<tr><th>Bris des vitres</th><td>Vers 70 à 100 °C</td></tr>' +
        '<tr><th>Feu pleinement développé</th><td>Température de <b>1 000 à 1 200 °C</b> selon la charge calorifique ; durée et intensité fonction du potentiel calorifique et de l’arrivée d’air.</td></tr>' +
        '<tr><th>Déclin</th><td>Les flammes régressent et laissent place aux braises ; la température décroît lentement, de façon linéaire, de <b>7 à 10 °C par minute</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Plus la phase active a été longue, plus longue sera la décroissance. Pendant le déclin, de nouveaux foyers peuvent naître (conduction, rayonnement des braises) et des structures fragilisées peuvent s’effondrer.</p>' +
        '<div class="callout warn">Livret : à la phase de plein développement, l’incendie est influencé « soit par la ventilation, soit par le combustible » ; le GDO précise qu’à ce stade le feu est limité par la ventilation.</div>' }
  ],
  key: ['Phases (GDO) : naissant, croissance, pleinement développé, régression ; le livret en compte 3.', 'Qui maîtrise l’air maîtrise le feu : l’apport d’air est le paramètre le plus important.', 'Bris des vitres vers 70 à 100 °C (livret).', 'Plein développement : 1 000 à 1 200 °C (livret).', 'Déclin : baisse de 7 à 10 °C par minute (livret).', 'FLC : assez d’O₂, dépend du combustible ; FLV : manque d’O₂, dépend de l’air.', 'Feu de pièce meublée développé = limité par la ventilation (GDO).'],
  traps: ['Prendre l’accalmie d’un feu sous-ventilé pour une extinction : elle est généralement provisoire.', 'Ouvrir une porte sur un feu FLV sans précaution : la rupture du confinement relance le feu.', 'Croire que la phase de déclin est sans risque : fumées, reprises de feu et effondrements persistent.'],
  quiz: [
    { q: 'Quel paramètre le livret désigne-t-il comme le plus important dans le développement d’un feu ?', c: ['L’apport d’air', 'La couleur des flammes', 'La hauteur sous plafond', 'L’heure de la journée'], e: '« Ce paramètre d’apport d’air est le plus important dans le développement d’un feu. Qui maîtrise l’air, maîtrise le feu. »', s: 'croissance' },
    { q: 'Vers quelle température le livret situe-t-il le bris des vitres ?', c: ['70 à 100 °C', '300 à 400 °C', '1 000 °C', '20 à 40 °C'], e: 'Livret § 5.2 : l’alimentation en air frais se produit le plus souvent par le bris des vitres, vers 70 à 100 °C.', s: 'croissance' },
    { q: 'Température atteinte en phase de feu pleinement développé selon le livret :', c: ['1 000 à 1 200 °C', '300 à 500 °C', '100 à 200 °C', '2 000 à 2 500 °C'], e: 'Livret : la température s’élève très rapidement jusqu’à 1 000 à 1 200 °C selon la charge calorifique.', s: 'plein' },
    { q: 'En phase de déclin, la température décroît d’environ :', c: ['7 à 10 °C par minute', '50 à 100 °C par minute', '1 °C par heure', '200 °C par minute'], e: 'Livret : décroissance lente et linéaire de 7 à 10 °C par minute.', s: 'plein' },
    { q: 'Un feu dont la combustion dépend uniquement de l’apport d’air frais est :', c: ['Limité par la ventilation (FLV)', 'Limité par le combustible (FLC)', 'Un feu naissant', 'Un feu éteint'], e: 'Apport d’O₂ insuffisant : le régime dépend de l’air frais, c’est un FLV.', s: 'flcflv' },
    { q: 'Un feu naissant est limité par :', c: ['Le combustible', 'La ventilation', 'Le comburant', 'La pression'], e: 'GDO : au stade naissant, seuls les gaz de pyrolyse (en quantité limitée) influent : feu limité par le combustible.', s: 'phases' },
    { q: 'Un feu sous-ventilé dont le confinement est maintenu peut :', c: ['Aboutir à une quasi auto-extinction', 'Atteindre obligatoirement sa puissance maximale', 'Devenir un FLC sans changement', 'Se propager par conduction uniquement'], e: 'GDO : maintien du confinement → quasi auto-extinction ; rupture → reprise plus ou moins rapide et violente.', s: 'flcflv' }
  ]
});

VSAV.chap({
  id: 'inc-phenomenes', part: 'inc', seq: INC1B,
  title: 'Les phénomènes thermiques : flashover, backdraft, FGI', short: 'Phénomènes thermiques', motif: 'blast',
  sources: [LIV + ', § 5.2.1 (p. 92-93)', GDO + ', § 1.7 et section III § 2 (p. 23-26, 34-35)', 'Guide d’instruction et de manœuvre INC (les phénomènes thermiques)'],
  summary: 'Les progressions rapides du feu : embrasement généralisé éclair, explosion de fumées, inflammations de gaz issus d’un incendie ; leurs signes.',
  why: '<b>Pourquoi ces phénomènes tuent-ils des sapeurs-pompiers ?</b> Parce qu’ils transforment en quelques secondes un volume « gérable » en fournaise ou en explosion. Les matériaux de synthèse et l’isolation moderne (double, triple vitrage) les rendent plus fréquents et moins visibles. Chacun est déclenché par <b>un côté du triangle du feu</b> : comprendre lequel, c’est savoir quel geste l’évite — ne pas donner d’air, refroidir les fumées, éloigner toute source d’ignition.',
  sections: [
    { id: 'contexte', t: 'Pourquoi des phénomènes thermiques ?', ic: 'bulb', src: LIV + ', § 5.2.1 (p. 92-93) ; ' + GDO + ', § 1.7',
      html: '<p>La plupart des feux combattus se produisent dans des volumes <b>clos ou semi-ouverts</b>. Matériaux de synthèse et meilleure isolation font que ces feux, initialement faibles, peuvent se développer très vite en produisant beaucoup de fumées et, par <b>pyrolyse</b>, des gaz combustibles. Les fumées constituent en réalité un <b>véritable mélange combustible</b>.</p>' +
        '<p>GDO : on entend par phénomènes thermiques l’ensemble des <b>progressions rapides du feu</b> provoquant une augmentation significative et/ou brutale de sa puissance. Ils peuvent survenir à toutes les phases de l’incendie et dans plusieurs zones d’un même bâtiment : le risque dépend du <b>moment</b> et du <b>lieu</b> de l’intervention. Trois familles :</p>' +
        '<div class="tw"><table><thead><tr><th>Famille</th><th>Terme français</th><th>Déclencheur (côté du triangle)</th></tr></thead><tbody>' +
        '<tr><td><b>Flashover</b></td><td>Embrasement généralisé éclair (EGE)</td><td>Énergie / chaleur accumulée avec veine d’air maintenue</td></tr>' +
        '<tr><td><b>Backdraft</b></td><td>Explosion de fumées (de type backdraft)</td><td><b>Apport de comburant</b> (l’énergie est déjà présente)</td></tr>' +
        '<tr><td><b>Fire Gas Ignition (FGI)</b></td><td>Inflammations de gaz issus d’un incendie</td><td><b>Apport d’énergie d’activation</b></td></tr>' +
        '</tbody></table></div>',
      figs: [{ img: 'img/inc/1/phenomenes-temps.jpg', cap: 'Apparition des phénomènes dans le temps', txt: '<p>L’explosion de fumées peut survenir pendant la croissance ou pendant le déclin (feu confiné) ; l’embrasement généralisé éclair marque le passage de la croissance au plein développement.</p>', src: LIV + ', p. 93' }] },
    { id: 'flashover', t: 'Le flashover (embrasement généralisé éclair)', ic: 'flame', src: GDO + ', § 1.7.1 ; Guide d’instruction INC',
      html: '<p>Passage <b>brutal</b> d’un feu localisé à l’embrasement généralisé de <b>tous les matériaux combustibles</b> d’un volume <b>ventilé</b>. Il aboutit systématiquement à un feu pleinement développé. Toutes les pièces d’un habitat actuel renferment une charge calorifique suffisante pour en produire un.</p>' +
        '<p>Conditions : apport suffisant de gaz combustibles + niveau d’énergie suffisant + <b>maintien d’une veine d’apport d’air</b>.</p>' +
        '<p>Guide d’instruction : la couche de fumée au plafond chauffe tout ce qui l’entoure (convection) et rayonne vers les objets en dessous ; les combustibles pyrolysent ; des flammes peuvent courir à l’interface air/fumées (<b>roll-over</b>) ; quand les gaz de pyrolyse atteignent leur température d’auto-inflammation, tout s’embrase. Contrairement aux autres, il <b>perdure</b> dans le temps. Variante : le <b>flashover induit par la ventilation</b>, quand on ouvre et <b>maintient ouverte</b> la porte d’un local sous-ventilé chargé de chaleur et de gaz (une ouverture de quelques secondes pour vérifier la présence d’une victime n’a pas d’incidence catastrophique selon ce guide).</p>' +
        '<div class="callout warn"><b>Indicateurs (GDO)</b> : suies noires (signe de flammes dans le volume) ; fumées envahissant <b>plus de la moitié de la hauteur</b> ; plafond de fumées qui s’épaissit et s’assombrit vers le noir ; convection importante ; écoulements d’air vers l’intérieur en partie basse de l’ouvrant (« respiration » du feu).</div>' },
    { id: 'backdraft', t: 'Le backdraft (explosion de fumées)', ic: 'blast', src: GDO + ', § 1.7.2 et tableau p. 26 ; ' + LIV + ', p. 93',
      html: '<p>Feu <b>sous-ventilé</b> pendant un certain temps dans un volume <b>clos</b> : les fumées accumulées sont rarement à leur température d’auto-inflammation. La création d’un nouveau courant (fenêtre qui se brise, <b>ouverture de porte</b>, toiture dégradée) apporte de l’air qui <b>réactive une flamme</b>, laquelle provoque l’<b>explosion des fumées</b> accumulées ; la réaction traverse la pièce et en sort. Le facteur déclencheur est l’<b>apport de comburant</b>.</p>' +
        '<p>Le risque augmente dans les bâtiments « basse consommation », bien isolés, à fenêtres étanches, où les indicateurs de chaleur sont moins évidents.</p>' +
        '<div class="callout bad"><b>Indicateurs (GDO)</b> : fumées épaisses accumulées <b>jusqu’au sol</b> ; couleur claire brun/jaune (chargées en gaz de pyrolyse) ; dépôts noirs huileux sur les parois et vitres ; sortie de fumée rapide (forte pression) ; <b>alternance de sorties de fumée et d’entrées d’air</b> par une ouverture, parfois audibles (pulsations) = backdraft imminent.</div>' },
    { id: 'fgi', t: 'Les Fire Gas Ignition (FGI)', ic: 'alert', src: GDO + ', § 1.7.3 et tableau p. 26 ; Guide d’instruction INC',
      html: '<p>Inflammation d’une accumulation de produits de combustion riches en gaz imbrûlés et/ou de gaz de pyrolyse, mise en contact avec une <b>source de chaleur</b>. Contrairement au backdraft, ce n’est pas la ventilation qui déclenche : c’est l’<b>apport d’énergie d’activation</b>. Ils peuvent se produire avec des <b>fumées refroidies</b> (« froides »), généralement dans les <b>couloirs et volumes adjacents</b>, vides, conduits, cages d’escalier ou d’ascenseur, faux plafonds…</p>' +
        '<div class="tw"><table><thead><tr><th>Sous-catégorie</th><th>Régime</th></tr></thead><tbody>' +
        '<tr><td><b>Flash fire</b> (feu éclair)</td><td>Front de flammes sans onde de pression (ou négligeable).</td></tr>' +
        '<tr><td><b>Smoke explosion</b></td><td>Front de flammes générant une <b>onde de pression</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Exemple du Guide d’instruction : feu de chambre éteint rapidement sans refroidir les matériaux ; au déblai, les gaz de pyrolyse accumulés au plafond s’enflamment quand on sort un matelas contenant des braises. Source d’énergie possible : le feu lui-même, un appareil électrique, un débris braisant pendant le déblai.</p>' +
        '<div class="callout warn"><b>Attention au vocabulaire :</b> le livret emploie « explosion de fumées » pour le backdraft ; le GDO nomme le backdraft « explosion de fumées de type backdraft » et traduit aussi la <i>smoke explosion</i> (une FGI) par « explosion de fumées » ; le Guide d’instruction précise que la smoke explosion est « à ne pas confondre avec l’explosion de fumée ». Ce qui les distingue : le <b>déclencheur</b> (air pour le backdraft, énergie pour la FGI).</div>' },
    { id: 'synthese', t: 'Synthèse et lecture du feu', ic: 'eye', src: GDO + ', § 1.7.4 (p. 25) et section III § 1-2 (p. 34-35)',
      html: '<div class="tw"><table><thead><tr><th></th><th>Flashover</th><th>Backdraft</th><th>FGI</th></tr></thead><tbody>' +
        '<tr><th>Volume</th><td>Ventilé (veine d’air maintenue)</td><td>Clos, feu sous-ventilé</td><td>Souvent adjacent, éloigné du foyer</td></tr>' +
        '<tr><th>Déclencheur</th><td>Chaleur accumulée + air</td><td>Rupture du confinement (air)</td><td>Source d’ignition (énergie)</td></tr>' +
        '<tr><th>Fumées</th><td>Noires, épaisses, &gt; moitié de la hauteur</td><td>Épaisses jusqu’au sol, brun/jaune, dépôts huileux, pulsations</td><td>Parfois plus claires, accumulées à distance, difficiles à percevoir</td></tr>' +
        '</tbody></table></div>' +
        '<p>Les indicateurs de <b>lecture du feu</b> (GDO) : le bâtiment et sa destination, la <b>fumée</b> (débit, couleur, vélocité, sens de tirage), les <b>flammes</b> (volume, emplacement, couleur, vélocité), les <b>sons</b> (assourdis dans les atmosphères chaudes et sous-ventilées), la <b>chaleur</b> (vélocité des fumées, dégradation des matériaux, pyrolyse, ressenti, caméra thermique).</p>',
      figs: [{ img: 'img/inc/1/synthese-phenomenes.jpg', cap: 'Synthèse des phénomènes thermiques', txt: '<p>Les proportions entre comburant, chaleur et combustible (gaz de pyrolyse) déterminent la qualité et la cinétique de la combustion : flashover, backdraft ou FGI.</p>', src: GDO + ', schéma n°4, p. 25' }] }
  ],
  key: ['3 familles : flashover (EGE), backdraft (explosion de fumées), FGI.', 'Flashover : tout le volume ventilé s’embrase ; aboutit à un feu pleinement développé.', 'Backdraft : feu sous-ventilé + apport d’air soudain (ouverture de porte).', 'FGI : gaz accumulés + source d’énergie ; possible avec fumées froides, souvent dans les volumes adjacents.', 'Signes de backdraft : fumées jusqu’au sol, brun/jaune, dépôts huileux, pulsations.', 'Signes de flashover : fumées noires sur plus de la moitié de la hauteur, plafond qui s’épaissit.', 'Bâtiments bien isolés : risque accru et indicateurs moins visibles.'],
  traps: ['Croire qu’une fumée refroidie ne peut plus s’enflammer (FGI).', 'Confondre backdraft (déclenché par l’air) et FGI (déclenchée par une énergie).', 'Penser que le danger est fini après l’extinction : FGI possibles au déblai.', 'Laisser une porte ouverte sur un local sous-ventilé chargé de chaleur.'],
  quiz: [
    { q: 'Quel est le facteur déclencheur d’un backdraft ?', c: ['Un apport soudain de comburant (air)', 'Une source d’énergie extérieure', 'Le refroidissement des fumées', 'La conduction dans un mur'], e: 'GDO : « Le facteur déclencheur est l’apport de comburant, l’énergie suffisante étant déjà présente dans la pièce. »', s: 'backdraft' },
    { q: 'Quel est l’élément déclencheur d’une FGI ?', c: ['L’apport d’énergie d’activation', 'L’ouverture d’une porte', 'La fin du combustible', 'L’augmentation de la pression atmosphérique'], e: 'GDO : à la différence du backdraft, ce n’est pas la ventilation : l’élément déclencheur est l’apport d’énergie d’activation.', s: 'fgi' },
    { q: 'Le flashover correspond à :', c: ['Le passage brutal d’un feu localisé à l’embrasement de tous les combustibles d’un volume ventilé', 'L’explosion de fumées après ouverture d’une porte', 'L’inflammation de fumées froides dans un couloir', 'L’extinction spontanée d’un feu confiné'], e: 'GDO § 1.7.1 : famille des embrasements généralisés éclairs ; aboutit à un feu pleinement développé.', s: 'flashover' },
    { q: 'Fumées épaisses jusqu’au sol, brun-jaune, dépôts huileux sur les vitres et pulsations à l’ouvrant évoquent :', c: ['Un backdraft imminent', 'Un feu naissant', 'Un feu en déclin sans danger', 'Une combustion complète'], e: 'Indicateurs du GDO (tableau p. 26) : l’alternance de sorties de fumée et d’entrées d’air est un indicateur courant d’un backdraft imminent.', s: 'backdraft' },
    { q: 'Une FGI peut-elle se produire avec des fumées refroidies ?', c: ['Oui', 'Non, il faut des fumées à plus de 600 °C', 'Non, seulement dans la pièce en feu', 'Oui, mais uniquement à l’air libre'], e: 'GDO : « ces phénomènes peuvent se produire avec des fumées qui se sont refroidies (fumées dites froides) ».', s: 'fgi' },
    { q: 'Quelle différence entre flash fire et smoke explosion ?', c: ['La smoke explosion génère une onde de pression, pas le flash fire', 'Le flash fire est déclenché par l’air', 'La smoke explosion n’existe qu’en extérieur', 'Aucune, ce sont des synonymes'], e: 'GDO § 1.7.3 : front de flammes sans onde de pression = flash fire ; avec onde de pression = smoke explosion.', s: 'fgi' },
    { q: 'Indicateur d’un flashover selon le GDO :', c: ['Fumées envahissant plus de la moitié de la hauteur du volume, s’assombrissant', 'Fumées blanches au ras du sol uniquement', 'Absence totale de fumées', 'Flammes bleues peu éclairantes'], e: 'GDO : suies noires, envahissement de plus de la moitié de la hauteur, épaississement du plafond de fumées, assombrissement vers le noir.', s: 'flashover' },
    { q: 'Pourquoi les bâtiments « basse consommation » augmentent-ils le risque de backdraft ?', c: ['Bonne isolation et fenêtres étanches confinent le feu et masquent les indicateurs de chaleur', 'Ils contiennent moins de combustible', 'Ils sont toujours ventilés mécaniquement', 'Leurs vitres cassent à basse température'], e: 'GDO : risque accru avec bonne isolation et fenêtres étanches ; les indicateurs de chaleur peuvent être moins évidents.', s: 'backdraft' }
  ]
});

VSAV.ess([{
  t: 'Incendie — Déroulement d’une intervention et connaissance du feu', ic: 'flame',
  items: [
    { k: 'Chef d’équipe (caporal)', v: 'gère <b>1 binôme</b> ; l’EQ INC est sous ses ordres directs', go: 'inc-hierarchie/chaine' },
    { k: 'MGO', v: '<b>11 critères</b> de réflexion du COS, pas une chronologie', go: 'inc-mgo/principe' },
    { k: '1er engin-pompe', v: '<b>dépasse l’adresse</b> (place des échelles aériennes)', go: 'inc-mgo/engins' },
    { k: 'Attaque de transition', v: '<b>10 à 15 s</b>, de l’extérieur, <b>250 à 500 L/min</b>', go: 'inc-mgo-suite/attaque' },
    { k: 'Surveillance', v: 'pas de point chaud pendant <b>2 h</b> → feu considéré éteint (situation courante)', go: 'inc-mgo-suite/surveillance' },
    { k: 'Triangle du feu', v: 'combustible + comburant + énergie d’activation', go: 'inc-combustion/triangle' },
    { k: 'Déflagration / détonation', v: '<b>&lt; 340 m/s</b>, 4 à 10 bars / <b>&gt; 340 m/s</b>, 20 à 30 bars', go: 'inc-combustion/vitesses' },
    { k: 'Fumées', v: '<b>C.O.M.I.X</b> : chaude, opaque, mobile, inflammable, toxique', go: 'inc-fumees/comix' },
    { k: 'Propagation', v: 'rayonnement, convection, conduction, projection ; convection <b>65 %</b> (livret)', go: 'inc-propagation/parts' },
    { k: 'Procédés d’extinction', v: '<b>P.R.O.C.É.D.I.S.</b>', go: 'inc-extinction/procedis' },
    { k: 'Classes de feux', v: 'A solides, B liquides, C gaz, D métaux, F cuisson', go: 'inc-extinction/classes' },
    { k: 'Développement', v: 'vitres <b>70-100 °C</b> ; plein développement <b>1 000-1 200 °C</b> ; déclin <b>7-10 °C/min</b>', go: 'inc-developpement/plein' },
    { k: 'Phénomènes thermiques', v: 'flashover (chaleur), backdraft (<b>air</b>), FGI (<b>énergie</b>)', go: 'inc-phenomenes/contexte' }
  ]
}]);
