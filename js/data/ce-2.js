/* CHEF D’ÉQUIPE INCENDIE — fichier 2 : CE 2 (Stratégie d’extinction)
   Sources : Livret stagiaire Chef d’équipe incendie SDIS 51 (v2019.1), Partie 2 (p. 13-22) ;
   GDO Incendies de structures (version du 16 avril 2018), p. 22 et p. 34-35 ;
   GTO Établissements et techniques d’extinction (2018), fiches ETEX-STR-TDE (p. 79-106) ;
   Documents formateur CE INC : PARTIE A séquence 1 (séquence, diaporama « Les lances », schéma muet corrigé,
   document stagiaire « Les lances à eau à main », fiches INC 8.1 à 8.9 FMPA Reims-Witry, 2011),
   PARTIE A séquence 2 (séquence, fiches de tâche démonstrative et applicative, grille d’observation),
   PARTIE C « Lecture feu » (séquence TOOTEM, fiches de tâche, grille d’observation).
   Dossiers Drive vides : « PARTIE C lecture feu / 5 TOOTEM » et « PARTIE D caisson à feu ». */
var CE2 = 'CE 2 — Stratégie d’extinction';
var CE2_LIV = 'Livret stagiaire Chef d’équipe incendie SDIS 51 (v2019.1)';
var CE2_GDO = 'GDO Incendies de structures (2018)';
var CE2_GTO = 'GTO Établissements et techniques d’extinction (2018)';
var CE2_FA1 = 'Documents formateur CE INC, PARTIE A séquence 1 « Les lances à eau à main »';
var CE2_DIA = 'Diaporama formateur « Les lances » (PARTIE A, séquence 1)';
var CE2_FMPA = 'Document stagiaire « Les lances à eau à main » (fiches INC 8.1 à 8.9, FMPA Reims-Witry, 2011)';
var CE2_FA2 = 'Documents formateur CE INC, PARTIE A séquence 2 « Techniques de lances »';
var CE2_FC = 'Documents formateur CE INC, PARTIE C « Lecture feu » (séquence 1 TOOTEM)';

/* =====================================================================================
   1. LIRE LE FEU
   ===================================================================================== */
VSAV.chap({
  id: 'ce-lecture-feu', part: 'ce', seq: CE2,
  title: 'Lire le feu : FFCOS et lecture des fumées', short: 'Lire le feu (FFCOS)', motif: 'eye',
  sources: [CE2_LIV + ', Partie 2, intro et § 2.1 (p. 13-18)', CE2_GDO + ', chap. 1 § 1.5 (p. 22) et section III « Analyse de risques » (p. 34-35)', CE2_GTO + ', ETEX-STR-TDE § 3.1 (p. 82-83)'],
  summary: 'Le chef d’équipe porte-lance lit le feu (Fumées, Flammes, Chaleur, Ouvertures, Sons) pour situer le feu sur sa courbe de développement et choisir ses actions.',
  why: '<b>Pourquoi le chef d’équipe doit-il savoir lire le feu ?</b> Parce que c’est lui qui tient la lance. Ses actions sur le feu ont des <b>répercussions immédiates</b>, positives ou négatives : bien choisies, le sinistre baisse et la propagation est maîtrisée ; mal choisies, le feu échappe au binôme et c’est la <b>sécurité des personnels</b> qui est en jeu. Le livret le résume : une mauvaise lecture du feu induira forcément de mauvaises actions.',
  sections: [
    { id: 'role', t: 'Le porte-lance doit comprendre le « système feu »', ic: 'target', src: CE2_LIV + ', p. 13 et 16 ; ' + CE2_GTO + ', p. 82-83',
      html: '<p>Le chef d’équipe incendie est <b>le porte-lance du binôme</b>. Il doit comprendre le « système feu » pour avoir la meilleure lecture possible du feu <b>à l’instant T</b>, et agir en fonction de ce qu’il voit (livret, p. 13).</p>' +
        '<ul class="check"><li>« Tous les facteurs que je vois, que je ressens, que j’entends, vont permettre de savoir <b>où le feu se situe dans sa courbe de développement</b>. »</li><li>« À chaque avancée dans la courbe vont correspondre <b>des actions à effectuer</b>. »</li><li>Le livret renvoie au <b>livret stagiaire Équipier incendie</b> pour la compréhension du développement du feu, et au <b>GDO p. 34-35</b> pour la lecture du feu.</li></ul>' +
        '<p>Le GTO précise que le chef d’équipe choisit, en concertation avec le chef d’agrès, le type d’établissement et la manière d’utiliser sa lance à partir de la <b>lecture du feu</b>, de la <b>lecture du bâtiment</b> et de l’<b>analyse des activités</b> qu’il abrite. Avant de pénétrer dans un local, il recherche les <b>signes d’alarme</b> des accidents thermiques et <b>rend compte</b> à son chef d’agrès en cas de nécessité.</p>' +
        '<div class="callout ok">Rappels de la partie équipier à maîtriser : <a href="#/c/inc-developpement">le développement du feu</a> (phases, FLC/FLV) et <a href="#/c/inc-phenomenes">les phénomènes thermiques</a> (flashover, backdraft, FGI et leurs indicateurs).</div>' },
    { id: 'ffcos', t: 'F.F.C.O.S : les cinq familles d’indices', ic: 'list', src: CE2_LIV + ', p. 17 ; ' + CE2_GDO + ', section III § 1-2 (p. 34-35)',
      html: '<p>Le livret donne le moyen mnémotechnique <b>FFCOS</b> pour faire une lecture <b>complète</b> du feu. Il ne détaille que les fumées : « les autres items seront abordés au travers des différentes parties du livret ». Le GDO, auquel le livret renvoie, décrit ce qu’il faut observer pour chaque indice.</p>' +
        '<div class="tw"><table><thead><tr><th>Lettre</th><th>Indice</th><th>Ce que le GDO fait observer (p. 34-35)</th></tr></thead><tbody>' +
        '<tr><td><b>F</b></td><td>Fumées</td><td>L’un des indicateurs <b>les plus importants</b>. Emplacement et apparence renseignent sur l’emplacement du feu, son régime (FLC ou FLV) et son stade de développement. À l’arrivée : <b>débit, couleur, vélocité, sens de tirage</b>.</td></tr>' +
        '<tr><td><b>F</b></td><td>Flammes</td><td>Souvent l’indicateur le plus évident : <b>volume</b> (aire et taille), <b>emplacement</b>, <b>couleur</b>, <b>potentiel fumigène</b>, <b>vélocité</b>.</td></tr>' +
        '<tr><td><b>C</b></td><td>Chaleur</td><td>Ne s’observe pas à l’œil nu, mais par ses effets : vélocité des fumées, <b>dégradation des matériaux</b> (déformation…), présence de <b>pyrolyse</b>, <b>ressenti des équipes</b>. La caméra thermique apporte un complément.</td></tr>' +
        '<tr><td><b>O</b></td><td>Ouvertures</td><td>Le GDO range les ouvrants dans les <b>conditions aérauliques</b> à identifier : vent, ouvrants existants <b>ouverts ou fermés</b> ; la lecture du bâtiment relève aussi le <b>nombre et le type d’ouvrants</b>.</td></tr>' +
        '<tr><td><b>S</b></td><td>Sons</td><td>Leur nature renseigne sur ce qui brûle (crépitement ou sifflement du bois, bouillonnement des liquides) ; ils sont <b>assourdis dans les atmosphères chaudes et sous-ventilées</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Le GDO associe toujours <b>lecture du feu et lecture bâtimentaire</b> (activité et occupants, dimensions, mode constructif, matériaux, volumes à risques comme combles et faux-plafonds, distribution intérieure). Ces indicateurs permettent « le plus souvent de déterminer la <b>phase</b> et le <b>régime</b> du feu ».</p>' +
        '<div class="callout warn">L’évaluation se fait à l’arrivée par les indicateurs extérieurs, puis <b>tout au long de l’opération grâce à l’observation et aux comptes rendus des équipes</b> (GDO, p. 35) : ce que tu vois à l’intérieur, le chef d’agrès ne le voit pas. Ton compte rendu fait partie de la lecture du feu.</div>' },
    { id: 'comix', t: 'Lire les fumées : C.O.M.I.X', ic: 'alert', src: CE2_LIV + ', p. 17',
      html: '<p>« Une lecture des fumées s’avère <b>indispensable</b> ! » Premier moyen mnémotechnique du livret :</p>' +
        '<div class="tw"><table><thead><tr><th>Lettre</th><th>Les fumées sont…</th><th>Explication du livret</th></tr></thead><tbody>' +
        '<tr><td><b>C</b></td><td>Chaudes</td><td>Elles viennent du feu et vont <b>propager la chaleur</b>.</td></tr>' +
        '<tr><td><b>O</b></td><td>Opaques</td><td>Elles gênent <b>la vue, mais aussi l’ouïe</b> : les suies (solides) et les aérosols (gouttelettes) font écran.</td></tr>' +
        '<tr><td><b>M</b></td><td>Mobiles</td><td>Elles se déplacent et cherchent <b>la moindre ouverture</b> pour s’échapper.</td></tr>' +
        '<tr><td><b>I</b></td><td>Inflammables</td><td>Elles sont composées d’environ <b>300 gaz différents</b>, qui ont chacun leur réaction propre à la chaleur.</td></tr>' +
        '<tr><td><b>X</b></td><td>toXiques</td><td>Présence d’éléments chimiques (CO, CO<sub>2</sub>, HCl…) et <b>faible taux d’oxygène</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">COMIX est déjà vu côté équipier (<a href="#/c/inc-fumees">Les fumées et la puissance du feu</a>), avec les chiffres du diaporama et du Guide d’instruction.</p>' },
    { id: 'itore', t: 'Ou encore : I.T.O.R.E', ic: 'molecule', src: CE2_LIV + ', p. 18 ; ' + CE2_GDO + ', § 1.5 (p. 22)',
      html: '<p>Le livret propose un second moyen mnémotechnique (« ou encore »), dont les initiales en couleur forment <b>I-T-O-R-E</b> :</p>' +
        '<div class="tw"><table><thead><tr><th>Lettre</th><th>Les fumées sont…</th><th>Explication du livret</th></tr></thead><tbody>' +
        '<tr><td><b>I</b></td><td>Inflammables</td><td>(voir COMIX)</td></tr>' +
        '<tr><td><b>T</b></td><td>Toxiques</td><td>(voir COMIX)</td></tr>' +
        '<tr><td><b>O</b></td><td>Opaques</td><td>(voir COMIX)</td></tr>' +
        '<tr><td><b>R</b></td><td>Rayonnantes</td><td>Issue d’une combustion, la fumée est chaude ; tout corps chauffé rayonnant à son tour, la fumée est un <b>fort vecteur de propagation</b> de l’incendie.</td></tr>' +
        '<tr><td><b>E</b></td><td>Envahissantes</td><td>Voir l’encadré ci-dessous.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Coquille du livret :</b> la définition donnée pour « Envahissante » (« en plus d’être inflammables, les gaz composant la fumée d’incendie se révèlent être d’une grande toxicité ») reprend en fait celle de la toxicité. Le GDO (p. 22), qui liste sept dangers des fumées — inflammabilité/explosivité, toxicité/corrosivité, émission de particules, opacité, rayonnement, <b>envahissement et frein à la mobilité</b>, chaleur — rattache l’envahissement à la gêne aux déplacements. Les deux acronymes du livret ne retiennent pas les mêmes dangers : COMIX insiste sur la chaleur et la mobilité, ITORE sur le rayonnement et l’envahissement.</div>' },
    { id: 'agir', t: 'De la lecture aux actions', ic: 'bulb', src: CE2_LIV + ', p. 16 ; ' + CE2_FC + ' ; ' + CE2_GTO + ', ETEX-STR-TDE § 3.1 (p. 82)',
      html: '<p>La lecture du feu n’est pas un exercice théorique : elle commande les gestes du porte-lance.</p>' +
        '<ul class="check"><li><b>Devant une porte</b> : la lecture se fait lettre par lettre avec le <a href="#/c/ce-tootem">TOOTEM</a> (tester la porte, observer les signes d’alarme d’explosion de fumée ou d’embrasement généralisé éclair, puis seulement ouvrir).</li><li><b>Dans le volume</b> : le <b>test de plafond</b> renseigne sur la température des fumées ; il conditionne l’<b>inertage</b> ou la progression (voir <a href="#/c/ce-techniques-lance">Techniques de lance</a>).</li><li><b>Pendant l’extinction</b> : le GTO demande au porte-lance de rendre compte régulièrement du résultat de ses actions ; une extinction qui prend un <b>temps inhabituel</b> doit remonter au chef d’agrès, car la méthode est peut-être inadaptée.</li></ul>' +
        '<p class="small muted">Le livret propose aussi des vidéos (QR codes p. 18) : « La dangerosité des fumées », « Analyse de la fumée et de l’incendie », « CNPP — Au cœur des fumées ».</p>' }
  ],
  key: ['Le CE est le porte-lance : ses actions ont des effets immédiats sur le feu et la sécurité.', 'FFCOS : Fumées, Flammes, Chaleur, Ouvertures, Sons.', 'La lecture situe le feu sur sa courbe ; à chaque stade, des actions.', 'COMIX : Chaudes, Opaques, Mobiles, Inflammables, toXiques.', 'ITORE : Inflammables, Toxiques, Opaques, Rayonnantes, Envahissantes.', 'Fumées : débit, couleur, vélocité, sens de tirage (GDO).', 'Sons assourdis = atmosphère chaude et sous-ventilée.', 'La lecture continue toute l’opération grâce aux comptes rendus des équipes.'],
  traps: ['Croire que la chaleur se voit : on n’en observe que les effets (vélocité des fumées, matériaux dégradés, pyrolyse, ressenti).', 'Lire le feu sans lire le bâtiment (combles, faux-plafonds, ouvrants).', 'Confondre les deux acronymes : le R et le E de ITORE n’existent pas dans COMIX.', 'Garder pour soi ce qu’on voit : le chef d’agrès dépend du compte rendu du chef d’équipe.'],
  quiz: [
    { q: 'Que signifie F.F.C.O.S ?', c: ['Fumées, Flammes, Chaleur, Ouvertures, Sons', 'Feu, Fumées, Combustible, Oxygène, Source', 'Flammes, Fumées, Couleur, Odeur, Suies', 'Fumées, Foyer, Chaleur, Occupants, Sauvetage'], e: 'Livret CE, p. 17 : moyen mnémotechnique pour une lecture complète du feu.', s: 'ffcos' },
    { q: 'Selon le livret CE, à quoi sert la lecture du feu ?', c: ['Savoir où le feu se situe dans sa courbe de développement pour choisir les actions', 'Calculer le débit de la pompe', 'Remplacer la reconnaissance du chef d’agrès', 'Choisir l’engin à engager'], e: 'Livret p. 16 : « À chaque avancée dans la courbe vont correspondre des actions à effectuer. »', s: 'role' },
    { q: 'Dans le second moyen mnémotechnique du livret (ITORE), que signifie le R ?', c: ['Rayonnantes', 'Rapides', 'Respirables', 'Résiduelles'], e: 'Livret p. 18 : tout corps chauffé rayonne, la fumée est donc un fort vecteur de propagation.', s: 'itore' },
    { q: 'Quels indices de la fumée le GDO fait-il relever à l’arrivée ?', c: ['Débit, couleur, vélocité, sens de tirage', 'Odeur, goût, température exacte', 'Pression, humidité, densité', 'Seulement la couleur'], e: 'GDO, section III § 2.2 (p. 35).', s: 'ffcos' },
    { q: 'Des sons assourdis indiquent, selon le GDO :', c: ['Une atmosphère chaude et sous-ventilée', 'Un feu éteint', 'Une bonne ventilation', 'Un feu de liquide'], e: 'GDO § 2.4 : « Les sons sont assourdis dans les atmosphères chaudes et sous-ventilées. »', s: 'ffcos' },
    { q: 'Comment observe-t-on la chaleur selon le GDO ?', c: ['Par ses effets : vélocité des fumées, dégradation des matériaux, pyrolyse, ressenti', 'Directement à l’œil nu', 'Uniquement au thermomètre', 'Par la couleur des flammes seulement'], e: 'GDO § 2.5 (p. 35) ; la caméra thermique apporte un complément.', s: 'ffcos' },
    { q: 'D’après le livret, de combien de gaz différents les fumées sont-elles composées ?', c: ['Environ 300', 'Environ 30', 'Environ 3 000', 'Un seul : le CO'], e: 'Livret p. 17, item « Inflammable » de COMIX.', s: 'comix' },
    { q: 'Une extinction prend un temps inhabituel. Que fait le chef d’équipe ?', c: ['Il en rend compte au chef d’agrès : la méthode est peut-être inadaptée', 'Il augmente la pression de la pompe lui-même', 'Il continue sans rien dire', 'Il ouvre toutes les fenêtres'], e: 'GTO, ETEX-STR-TDE § 3.1 (p. 82) : cela doit faire l’objet d’une remontée d’information.', s: 'agir' }
  ]
});

/* =====================================================================================
   2. TOOTEM
   ===================================================================================== */
VSAV.chap({
  id: 'ce-tootem', part: 'ce', seq: CE2,
  title: 'TOOTEM : pénétrer dans un volume en feu', short: 'TOOTEM', motif: 'shield',
  status: 'partiel',
  todo: ' Le dossier « 5 TOOTEM » du Drive formateur (PARTIE C) est <b>vide</b>, et le § 2.3 « Le passage de porte » du livret CE ne contient qu’un renvoi au livret équipier et une vidéo. Ce chapitre repose sur la séquence, les deux fiches de tâche et la grille d’observation de la PARTIE C, qui ne développent pas l’acronyme lettre par lettre.',
  sources: [CE2_FC + ' : séquence, fiche de tâche démonstrative, fiche de tâche applicative, grille d’observation', CE2_LIV + ', § 2.3 « Le passage de porte » (p. 22)', CE2_GTO + ', ETEX-STR-TDE § 3.1-3.2 (p. 82-83), TDE-1 (p. 86) et TDE-5 (p. 97)'],
  summary: 'Tester la porte, Observer, Ouvrir, Tester le plafond, Engagement Minimal : la chronologie que le chef d’équipe applique avant d’engager son binôme dans un volume.',
  why: '<b>Pourquoi une chronologie aussi stricte ?</b> Derrière une porte fermée, on ne voit rien. Chaque étape du TOOTEM apporte une information <b>avant</b> de prendre le risque suivant : la porte renseigne sur la chaleur, les signes d’alarme sur un risque d’explosion de fumée ou d’embrasement, le test de plafond sur la température des fumées. Le binôme ne s’engage qu’au bout de la chaîne, et <b>le moins possible</b> à la fois.',
  sections: [
    { id: 'objectif', t: 'L’objectif de la séquence', ic: 'target', src: CE2_FC + ', séquence 1 et fiches de tâche',
      html: '<p>À l’issue de la séquence, l’apprenant doit être capable, <b>en binôme</b>, d’appliquer les différentes étapes du <b>TOOTEM</b> lors de la <b>pénétration dans un volume en feu</b>, en respectant les consignes de sécurité. La séquence « Lecture du feu » (1 h) s’ouvre sur une activité de découverte autour du mot « <b>flash-over</b> ».</p>' +
        '<p>Ce qu’il faut retenir selon la fiche de séquence : les <b>étapes du TOOTEM</b>, les <b>techniques d’extinction</b>, les <b>règles de sécurité</b>.</p>' +
        '<p><b>Avant la première lettre</b>, le porte-lance (fiches de tâche) :</p><ul class="check"><li>prend la lance, son équipier en appui ;</li><li><b>règle son jet en diffusé d’attaque</b>, « entre 15° et 45° » — la grille exige qu’il le fasse <b>avant d’entrer</b> ;</li><li><b>se met à genoux</b> pour progresser.</li></ul>' },
    { id: 'lettres', t: 'Les lettres T-O-O-T-EM', ic: 'list', src: CE2_FC + ', fiches de tâche et grille d’observation',
      html: '<p>Les documents ne développent pas l’acronyme mot à mot : les lettres correspondent aux critères de la <b>grille d’observation</b>, dans l’ordre, et la fiche de tâche décrit les gestes associés.</p>' +
        '<div class="tw"><table><thead><tr><th>Lettre</th><th>Critère de la grille</th><th>Gestes (fiche de tâche)</th><th>Pour quoi faire</th></tr></thead><tbody>' +
        '<tr><td><b>T</b></td><td>Teste la porte</td><td>Toucher la porte <b>avec le jet de la lance</b> et <b>avec son gant</b></td><td>Observer si l’eau se vaporise sur la porte et si celle-ci se dégrade sous la chaleur, pour <b>estimer la chaleur radiante</b></td></tr>' +
        '<tr><td><b>O</b></td><td>Observe les signes</td><td>Observer (à l’exercice : simuler et dire) <b>tous les signes d’alarme significatifs</b></td><td>Repérer ce qui peut annoncer une <b>explosion de fumée</b> ou un <b>embrasement généralisé éclair</b></td></tr>' +
        '<tr><td><b>O</b></td><td>Ouvre la porte</td><td>Ouvrir le volume <b>en veillant à se protéger</b></td><td>Uniquement <b>si les conclusions des deux étapes précédentes l’autorisent</b></td></tr>' +
        '<tr><td><b>T</b></td><td>Teste son plafond</td><td>Test de plafond, <b>tuyau bien coudé à 90° par rapport au sol</b> ; si l’eau n’est pas retombée : <b>inertage</b> (ouverture de la lance pendant <b>2 s</b>)</td><td>Tester la <b>température des fumées</b> ; l’inertage refroidit la couche de fumée</td></tr>' +
        '<tr><td><b>EM</b></td><td>Engagement minimum</td><td>Engagement minimal des personnels d’attaque <b>si l’eau est retombée</b>, par étapes de <b>1 à 2 mètres</b> avant un nouveau test</td><td>N’exposer que le strict nécessaire, et refaire la lecture à chaque bond</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">Les fiches écrivent « Engagement Minimal », la grille « Engagement minimum ».</p>' },
    { id: 'pas', t: 'Le TOOTEM pas à pas', ic: 'play', src: CE2_FC + ', fiche de tâche applicative',
      steps: ['Tous : EPI complets (sinon la manœuvre est arrêtée), lance en diffusé d’attaque entre 15° et 45°, à genoux.', 'T — Tester la porte : la toucher avec le jet et avec le gant ; l’eau se vaporise-t-elle ? la porte se dégrade-t-elle ? J’estime la chaleur radiante.', 'O — Observer : rechercher et annoncer les signes d’alarme d’une explosion de fumée ou d’un embrasement généralisé éclair.', 'O — Ouvrir : seulement si les deux étapes précédentes l’autorisent, en se protégeant.', 'T — Tester le plafond : tuyau coudé à 90° par rapport au sol ; l’eau ne retombe pas → inertage, lance ouverte 2 s, puis nouveau test.', 'EM — Engagement minimal : l’eau retombe → progresser de 1 à 2 mètres, puis refaire un test.'], stepsTitle: 'TOOTEM (5 lettres)' },
    { id: 'binome', t: 'Qui fait quoi dans le binôme', ic: 'team', src: CE2_GTO + ', ETEX-STR-TDE § 3.1-3.2 (p. 82-83) ; ' + CE2_FC,
      html: '<div class="tw"><table><thead><tr><th>Chef d’équipe (porte-lance)</th><th>Équipier (double porte-lance)</th></tr></thead><tbody>' +
        '<tr><td>Prend les décisions nécessaires à la sécurité du binôme, notamment l’<b>ouverture sécurisée des ouvrants</b> et le placement en amont du foyer (éviter la zone entre le foyer et le sortant).</td><td>Aide le porte-lance : ajuste l’établissement (coudes, coincements aux angles de portes), le fait suivre, l’aide à obtenir le bon angle d’application.</td></tr>' +
        '<tr><td>Avant de pénétrer : position <b>la plus basse possible</b>, recherche des <b>signes d’alarme</b> et compte rendu au chef d’agrès si nécessaire, <b>chemin de repli</b> prévu, conditions réunies pour entrer.</td><td>Se place <b>de l’autre côté du tuyau</b> pour un champ de vision complet (chef + équipier = 360°), observe le feu et signale tout signe d’aggravation.</td></tr>' +
        '<tr><td>Dans le local : explorer bas, <b>par avancées successives</b>, hors du sens de tirage ; adapter le jet en respectant le débit commandé.</td><td>Lors d’un repli, peut s’éloigner un peu du chef pour tirer le tuyau.</td></tr>' +
        '</tbody></table></div>' +
        '<p>La grille évalue aussi le savoir-être du porte-lance : <b>prévient le chef de toutes anomalies</b>, manipule la lance avec soin, contrôle ses actions (notion des risques), fluidité des gestes.</p>' },
    { id: 'porte', t: 'TOOTEM et passage de porte', ic: 'shield', src: CE2_LIV + ', § 2.3 (p. 22) ; ' + CE2_GTO + ', TDE-1 (p. 86) et TDE-5 (p. 97)',
      html: '<p>Pour le passage de porte, le livret CE renvoie au <b>livret stagiaire Équipier incendie</b> (et à une vidéo « Le passage de porte ») : revois le chapitre <a href="#/c/inc-passage-porte">Le passage de porte</a> (six phases : observation, protection, ouverture, engagement, progression, extinction ; placement de l’équipier côté poignée ou côté gonds). Le TOOTEM en est la version condensée que le chef d’équipe déroule.</p>' +
        '<p>Le GTO ajoute deux repères : les <b>impulsions longues</b> (ouverture rapide puis 2 à 5 s environ en fermeture progressive) « seront aussi à appliquer lors des passages de portes pour sécuriser l’ambiance derrière la porte » ; en <b>situation pré-backdraft</b>, la porte est entrouverte pour une application en jet 30° de 1 à 2 s vers le plafond, puis refermée à 1 cm environ pour observer la sortie de vapeur.</p>' +
        '<div class="callout warn"><b>Écarts entre sources (à connaître, sans trancher) :</b><ul class="check"><li><b>Progression</b> : par étapes de <b>1 à 2 m</b> (fiche TOOTEM, comme le logigramme du diaporama équipier) ; neutralisation de la fumée <b>tous les 2 m</b> (livret équipier).</li><li><b>Inertage</b> : ouverture de la lance pendant <b>2 s</b> après un test de plafond où l’eau ne retombe pas (fiche TOOTEM) ; <b>impulsion JDA débit maxi</b> dans le volume, porte refermée ensuite, quand le plafond est bas et dense (livret équipier) ; jet 30° pendant <b>1 à 2 s</b> en pré-backdraft (GTO).</li><li><b>Test de la porte</b> : avec le jet et le gant (fiche TOOTEM) ; avec la main gantée, du bas vers le haut (livret équipier).</li></ul></div>' },
    { id: 'grille', t: 'Comment tu seras évalué', ic: 'check', src: CE2_FC + ', grille d’observation et fiche de tâche applicative',
      html: '<div class="tw"><table><thead><tr><th>Savoir-faire (fait / non fait)</th><th>Savoir-être (A bien, B moyen, C insuffisant)</th></tr></thead><tbody>' +
        '<tr><td><ul class="check"><li>EPI complet (sinon la manœuvre est arrêtée)</li><li>Règle son jet en diffusé d’attaque avant d’entrer</li><li>Respecte la chronologie du T.O.O.T.EM</li><li>Teste la porte</li><li>Observe les signes</li><li>Ouvre la porte</li><li>Teste son plafond</li><li>Engagement minimum</li></ul></td>' +
        '<td><ul class="check"><li>Fluidité des gestes</li><li>Prévient le chef de toutes anomalies</li><li>Manipule la lance avec soin</li><li>Contrôle ses actions (notion des risques)</li></ul></td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout bad">Un seul item « non fait » ou deux cases « C » = <b>manœuvre à refaire</b>.</div>' +
        '<p class="small muted">Organisation de l’activité applicative : 2 h 20, deux groupes encadrés chacun par un formateur ; matériel : 1 FPT, DMRS, 4 tuyaux de 45/20 m, 1 division mixte, 1 tuyau de 70/20 m ; terrain de manœuvre avec une porte donnant sur un volume.</p>' }
  ],
  key: ['TOOTEM : Tester la porte, Observer les signes, Ouvrir, Tester le plafond, Engagement Minimal.', 'Avant d’entrer : jet en diffusé d’attaque (15 à 45°), à genoux.', 'Tester la porte avec le jet et le gant : vaporisation, dégradation = chaleur radiante.', 'Signes d’alarme : explosion de fumée, embrasement généralisé éclair.', 'On n’ouvre que si les deux premières étapes l’autorisent.', 'Eau qui ne retombe pas au test de plafond → inertage 2 s.', 'Eau qui retombe → engagement minimal, bonds de 1 à 2 m puis nouveau test.', 'Évaluation : 1 « non fait » ou 2 « C » = à refaire.'],
  traps: ['Ouvrir avant d’avoir testé la porte et observé les signes.', 'Régler la lance une fois la porte ouverte : le jet se règle avant d’entrer.', 'Avancer de plusieurs mètres d’un coup sans refaire de test de plafond.', 'Inverser la règle du test de plafond : c’est l’eau qui ne retombe pas (vaporisée) qui impose l’inertage.'],
  quiz: [
    { q: 'Dans quel ordre la grille d’observation liste-t-elle les étapes du TOOTEM ?', c: ['Teste la porte, observe les signes, ouvre la porte, teste son plafond, engagement minimum', 'Ouvre la porte, teste son plafond, observe, teste la porte, engagement', 'Observe, ouvre, teste la porte, engagement, teste son plafond', 'Teste son plafond, teste la porte, ouvre, observe, engagement'], e: 'Grille d’observation PARTIE C, séquence 1 : la chronologie fait partie des critères.', s: 'lettres' },
    { q: 'À quoi sert le test de la porte avec le jet et le gant ?', c: ['Estimer la chaleur radiante (vaporisation de l’eau, dégradation de la porte)', 'Vérifier que la porte est fermée à clé', 'Refroidir le foyer', 'Mesurer la pression à la lance'], e: 'Fiche de tâche PARTIE C.', s: 'lettres' },
    { q: 'Après le test de plafond, l’eau n’est pas retombée. Que fait le porte-lance ?', c: ['Un inertage : ouverture de la lance pendant 2 s', 'Il progresse de 2 m', 'Il passe en jet droit et entre', 'Il ferme la lance et attend'], e: 'Fiche de tâche : l’inertage refroidit la couche de fumée ; l’engagement n’a lieu que si l’eau est retombée.', s: 'lettres' },
    { q: 'Que signifie « EM » dans TOOTEM ?', c: ['Engagement Minimal (ou minimum)', 'Extinction Massive', 'Évacuation Médicale', 'Écran de Mousse'], e: 'Fiches de tâche (« Engagement Minimal ») et grille (« Engagement minimum »).', s: 'lettres' },
    { q: 'Quelle progression la fiche TOOTEM prévoit-elle entre deux tests ?', c: ['Des étapes de 1 à 2 mètres', '5 mètres', 'Jusqu’au foyer d’un seul bond', '10 mètres'], e: 'Fiche de tâche PARTIE C ; le livret équipier parle de neutralisation tous les 2 m.', s: 'lettres' },
    { q: 'Quand le jet doit-il être réglé en diffusé d’attaque ?', c: ['Avant d’entrer', 'Après l’ouverture de la porte', 'Uniquement face au foyer', 'Jamais : on reste en jet droit'], e: 'Grille d’observation : « Règle son jet en diffusé d’attaque avant d’entrer » ; fiche : entre 15° et 45°.', s: 'objectif' },
    { q: 'Que se passe-t-il à l’évaluation si un seul item de savoir-faire est « non fait » ?', c: ['La manœuvre est à refaire', 'Rien, il faut 3 items', 'L’apprenant est éliminé du stage', 'On passe à la manœuvre suivante'], e: 'Légende de la grille : 1 « non fait » ou 2 cases « C » = manœuvre à refaire.', s: 'grille' },
    { q: 'Avant de pénétrer dans un local, le GTO demande au porte-lance de :', c: ['Se placer le plus bas possible, rechercher les signes d’alarme, prévoir un chemin de repli', 'Se tenir debout face à la porte', 'Ouvrir en grand pour ventiler', 'Laisser l’équipier entrer le premier'], e: 'GTO, ETEX-STR-TDE § 3.1 (p. 83).', s: 'binome' }
  ]
});

/* =====================================================================================
   3. LES LANCES À MAIN
   ===================================================================================== */
VSAV.chap({
  id: 'ce-lances', part: 'ce', seq: CE2,
  title: 'Les lances à main du porte-lance', short: 'Lances à main', motif: 'drop',
  sources: [CE2_DIA + ', diapos 3 à 17', CE2_FA1 + ' : séquence, schéma muet corrigé', CE2_FMPA],
  summary: 'Lances traditionnelles et lances à débit variable, tableau des caractéristiques, jets droit et diffusés, gestion du débit et lances spéciales.',
  why: '<b>Pourquoi le chef d’équipe doit-il connaître ses lances par cœur ?</b> Parce que la lance est son outil de travail et qu’il l’utilisera dans le noir, sous ARI et avec des gants. Le document stagiaire le rappelle : avec une lance à débit et jet réglables, le porte-lance gère lui-même le potentiel hydraulique, <b>indépendamment de l’alimentation</b> assurée par l’engin. Encore faut-il savoir ce que chaque réglage produit.',
  sections: [
    { id: 'familles', t: 'Deux familles de lances', ic: 'grid', src: CE2_DIA + ', diapos 3-4 ; schéma muet corrigé',
      html: '<p>Montées à l’extrémité des tuyaux, les lances servent à <b>former</b> et à <b>diriger</b> le jet. Il en existe deux familles :</p>' +
        '<div class="tw"><table><thead><tr><th>Famille</th><th>Description</th></tr></thead><tbody>' +
        '<tr><td><b>Lances traditionnelles</b> (ancien modèle)</td><td>Fût tronconique et poignée de manœuvre ; orifice de sortie <b>circulaire</b> qui projette l’eau en jet bâton ou diffusé. Le diaporama les qualifie de lances « à débit fixe et jet réglables ».</td></tr>' +
        '<tr><td><b>Lances à débit variable</b> (L.D.V.)</td><td>Lances à <b>débit et jet réglables</b>, en forme de pistolet.</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">À l’activité applicative, ces éléments sont contrôlés sur un schéma muet (10 minutes, 2 erreurs tolérées).</p>',
      figs: [{ img: 'img/ce/2/lance-traditionnelle.jpg', cap: 'Lance traditionnelle', txt: '<p>Demi-raccord, fût tronconique, robinet d’ouverture/fermeture et ajutage avec orifice. Sur le fût tronconique, on peut trouver une rousture.</p>', src: CE2_DIA + ', diapo 4' }] },
    { id: 'traditionnelles', t: 'Les lances traditionnelles', ic: 'list', src: CE2_DIA + ', diapo 5',
      html: '<div class="tw"><table><thead><tr><th>Appellation</th><th>Orifice</th></tr></thead><tbody>' +
        '<tr><td>Lance du dévidoir tournant (<b>LDT</b>) de 20</td><td>7 mm</td></tr>' +
        '<tr><td><b>Petite lance</b> de 40</td><td>14 mm</td></tr>' +
        '<tr><td><b>Grosse lance</b> de 65</td><td>18 mm</td></tr>' +
        '<tr><td><b>Lance à grande puissance</b> 100</td><td>25 mm</td></tr>' +
        '</tbody></table></div>' +
        '<p>Le nombre qui suit le nom de la lance est le diamètre de son <b>raccord</b> (voir le tableau des caractéristiques).</p>' },
    { id: 'ldv', t: 'Les lances à débit variable', ic: 'drop', src: CE2_DIA + ', diapos 6-8 ; ' + CE2_FMPA + ', fiches 8.1 et 8.5',
      html: '<p>Elles forment et dirigent un jet d’eau sur le foyer tout en permettant au porte-lance de <b>faire varier sa forme</b> et de <b>régler son débit</b> : il utilise la <b>quantité d’eau adaptée à l’intensité du foyer</b>.</p>' +
        '<p>Deux sortes : la <b>LDMR</b> (lance à diffuseur mixte réglable) et la <b>LDMRS</b> (lance à diffuseur mixte réglable <b>stabilisé</b>).</p>' +
        '<p><b>Gestion des débits</b> (document stagiaire, fiche 8.5) : le porte-lance gère lui-même le débit de sa lance pendant l’attaque. Il peut l’<b>augmenter rapidement</b> en cas de besoin, ou être appelé à le <b>réduire sur ordre du chef du dispositif</b>. Le débit est adapté :</p>' +
        '<ul class="check"><li>au <b>type de feu</b> : intensité du foyer, volume à éteindre important, potentiel calorifique élevé ;</li><li>à la <b>phase du feu</b> : débit élevé au début de l’attaque, faible pour les phases de noyage ;</li><li>aux <b>risques potentiels</b> : propagation, menace pour les intervenants.</li></ul>',
      figs: [{ img: 'img/ce/2/ldv-description.jpg', cap: 'Description d’une lance à débit variable', txt: '<p>Système de formation des jets, bague de réglage de débit, levier d’ouverture et de fermeture, poignée de maintien, demi-raccord.</p>', src: CE2_DIA + ', diapo 7' }] },
    { id: 'tableau', t: 'Le tableau des caractéristiques', ic: 'grid', src: CE2_DIA + ', diapo 9',
      html: '<div class="tw"><table><thead><tr><th>Lance</th><th>Ø tuyaux (mm)</th><th>Débit (L/min)</th><th>Pression lance</th><th>Ø raccord (mm)</th><th>Orifice (mm)</th></tr></thead><tbody>' +
        '<tr><td>LDT</td><td>22</td><td>58</td><td>3,5 bars</td><td>20</td><td>7</td></tr>' +
        '<tr><td>PL</td><td>45</td><td>250</td><td>3,5 bars</td><td>40</td><td>14</td></tr>' +
        '<tr><td>GL</td><td>70</td><td>500</td><td>5,7 bars</td><td>65</td><td>18</td></tr>' +
        '<tr><td>LGP</td><td>110</td><td>1 000</td><td>6 bars</td><td>100</td><td>25</td></tr>' +
        '<tr><td>LDV 250</td><td>45</td><td>250</td><td>7 bars</td><td>40</td><td>/</td></tr>' +
        '<tr><td>LDV 500</td><td>45</td><td>500</td><td>7 bars</td><td>40</td><td>/</td></tr>' +
        '<tr><td>LDV 500</td><td>70</td><td>500</td><td>7 bars</td><td>65</td><td>/</td></tr>' +
        '<tr><td>LDV 500 (sic)</td><td>70</td><td>1 000</td><td>7 bars</td><td>65</td><td>/</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Écarts avec la partie équipier :</b><ul class="check"><li>Le diaporama CE donne <b>7 bars</b> pour toutes les LDV ; la fiche MAT/10 du livret équipier donne <b>6 bars</b> pour la DMRS (0 à 500 L/min), le Guide d’instruction 6 bars (boisseau sphérique) ou 6,8 bars (boisseau coulissant) : voir <a href="#/c/inc-ldv">Les lances à eau du SDIS 51</a>.</li><li>La dernière ligne du tableau s’intitule « LDV 500 » mais annonce <b>1 000 L/min</b> ; le Guide d’instruction cité côté équipier parle de LDV de diamètre 70 offrant <b>200 à 950 L/min</b>.</li><li>Pour la LDT, le tableau distingue tuyau de 22 et raccord de 20 ; les sources équipier donnent selon les cas 20, 22, 25 ou 33 mm.</li></ul>Se référer à la fiche du matériel en dotation.</div>' },
    { id: 'jets', t: 'Les jets du porte-lance', ic: 'spray', src: CE2_DIA + ', diapos 10-13 ; ' + CE2_FMPA + ', fiches 8.2 à 8.4',
      html: '<p>Les jets doivent permettre d’<b>atteindre</b> un foyer par une portée efficace, d’<b>absorber</b> de la chaleur par une répartition de l’eau, de <b>protéger</b> un binôme ou une structure par un écran d’eau.</p>' +
        '<div class="tw"><table><thead><tr><th></th><th>Jet droit</th><th>Jet diffusé d’attaque</th><th>Jet diffusé de protection</th></tr></thead><tbody>' +
        '<tr><th>Portée</th><td>Grande</td><td>Moyenne</td><td>Faible</td></tr>' +
        '<tr><th>Pénétration</th><td>Bonne</td><td>Bonne</td><td>Aucune</td></tr>' +
        '<tr><th>Surface de contact</th><td>Faible</td><td>Grande</td><td>Très grande</td></tr>' +
        '<tr><th>Refroidissement</th><td>Mauvais</td><td>Bon</td><td>Très bon</td></tr>' +
        '<tr><th>Utilisations</th><td>Attaque à l’air libre ; attaque à distance (risque d’effondrement, feu de véhicule, moyen élévateur aérien) ; effet mécanique ou pénétrant dans une masse de combustible ; grande surface en feu ; écran d’eau de grande portée ; vent fort</td><td>Attaque en volume clos ou semi-ouvert ; attaque massive ; feux virulents ; <b>test du plafond</b> ; inertage des fumées ; inertage par création de vapeur ; certaines nappes d’hydrocarbures en feu</td><td>Écran de protection thermique (rideau d’eau) ; protection du binôme en cas de fort dégagement de chaleur soudain, d’un E.G.E…</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Jet diffusé d’attaque</b> (fiche 8.3) : eau pulvérisée en cône de <b>15 à 45°</b> ; il remplit la double fonction de lutte contre l’incendie et de <b>protection du binôme</b> contre le rayonnement, compromis entre portée et absorption de chaleur. <b>Jet diffusé de protection</b> (fiche 8.4) : jet diffusé dans <b>la plus grande ouverture possible</b>.</p>' +
        '<div class="callout bad"><b>Risque électrique :</b> si l’eau doit être employée en présence de risques électriques, le jet diffusé d’attaque doit présenter un angle d’ouverture de <b>30° minimum</b> (document stagiaire, fiche 8.3).</div>' +
        '<p class="small muted">Le GTO, repris côté équipier (<a href="#/c/inc-lances-jets">Les lances : rôle, règle des 5 D et types de jets</a>), ajoute le <b>jet brisé</b> et le <b>jet purge</b>.</p>' },
    { id: 'quatred', t: 'Les « quatre D » du réglage', ic: 'bulb', src: CE2_FMPA + ', fiches 8.1 à 8.9',
      html: '<p>Le document stagiaire résume les paramètres sur lesquels joue le porte-lance par les <b>« quatre D »</b> :</p>' +
        '<div class="tw"><table><thead><tr><th>D</th><th>Sur quoi on agit</th></tr></thead><tbody>' +
        '<tr><td><b>Diffusion</b></td><td>Le type de jet : droit, diffusé d’attaque, diffusé de protection.</td></tr>' +
        '<tr><td><b>Débit</b></td><td>Le débit à appliquer, selon le type de feu, sa phase et les risques.</td></tr>' +
        '<tr><td><b>Direction</b></td><td>L’orientation du jet : balayage horizontal ou vertical, mouvement en cercle, lettres (T, Z, O, 8).</td></tr>' +
        '<tr><td><b>Durée</b></td><td>Le temps d’application : par impulsion ou en continu.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>4 D ou 5 D ?</b> Le document stagiaire CE (2011) parle de « quatre D » ; le livret équipier (2019) enseigne la <b>règle des 5 D</b>, qui ajoute la <b>Distance</b>, conséquence des autres D (<a href="#/c/inc-lances-jets">chapitre équipier</a>).</div>' },
    { id: 'speciales', t: 'Les lances spéciales', ic: 'star', src: CE2_DIA + ', diapos 14-17',
      html: '<p>Lors d’incendies à caractère industriel, il faut d’importants moyens hydrauliques, permettant au personnel de travailler <b>à distance et en sécurité</b> : on utilise des <b>lances canons</b> sur trépieds ou remorquables, alimentées par plusieurs établissements de <b>70 ou 110 mm</b> selon les modèles.</p>' +
        '<div class="tw"><table><thead><tr><th>Exemple du diaporama</th><th>Alimentation</th></tr></thead><tbody>' +
        '<tr><td>Lance canon</td><td>2 entrées de 100 mm</td></tr>' +
        '<tr><td>Lance sur trépied</td><td>2 entrées de 70 mm</td></tr>' +
        '<tr><td>Lance canon mousse (remorquable)</td><td>1 entrée de 100 mm</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">Lance rideau d’eau, lance feu de cheminée et lance canon portable : voir le chapitre équipier <a href="#/c/inc-ldv">Les lances à eau du SDIS 51 et les lances spéciales</a>.</p>' }
  ],
  key: ['Deux familles : lances traditionnelles (ancien modèle) et lances à débit variable (LDV).', 'LDMR / LDMRS : diffuseur mixte réglable (stabilisé).', 'LDT 7 mm, petite lance 14 mm, grosse lance 18 mm, LGP 25 mm d’orifice.', 'Diaporama CE : LDV à 7 bars (la fiche MAT/10 équipier dit 6 bars pour la DMRS).', 'Jet diffusé d’attaque : 15 à 45°, sert au test du plafond et à l’inertage.', 'Risque électrique : diffusé d’attaque à 30° minimum.', 'Débit élevé au début de l’attaque, faible au noyage ; réduit sur ordre du chef.', 'Quatre D : Diffusion, Débit, Direction, Durée.'],
  traps: ['Utiliser le jet droit en volume clos : faible surface de contact, mauvais refroidissement.', 'Attendre que la pompe règle le débit : avec une LDV, c’est le porte-lance qui gère.', 'Croire que le jet diffusé de protection pénètre dans les fumées : aucune pénétration.', 'Retenir un seul chiffre de pression pour les LDV sans vérifier le matériel en dotation.'],
  quiz: [
    { q: 'Quelles sont les deux familles de lances à eau à main ?', c: ['Les lances traditionnelles et les lances à débit variable', 'Les lances à mousse et les lances à poudre', 'Les lances de 45 et les lances de 70', 'Les lances canons et les lances rideaux'], e: 'Diaporama « Les lances », diapo 3, et schéma muet corrigé.', s: 'familles' },
    { q: 'Que signifie LDMRS ?', c: ['Lance à diffuseur mixte réglable stabilisé', 'Lance à débit multiple à réglage simple', 'Lance de dévidoir mobile à raccord symétrique', 'Lance à double mode de régulation sécurisée'], e: 'Diaporama, diapo 8 : LDMR et LDMRS.', s: 'ldv' },
    { q: 'Quel est l’orifice de la petite lance de 40 ?', c: ['14 mm', '7 mm', '18 mm', '25 mm'], e: 'Diaporama, diapo 5 : LDT 7 mm, petite lance 14 mm, grosse lance 18 mm, LGP 25 mm.', s: 'traditionnelles' },
    { q: 'Quelle pression le tableau du diaporama CE donne-t-il pour les LDV ?', c: ['7 bars', '3,5 bars', '5,7 bars', '16 bars'], e: 'Diaporama, diapo 9 ; attention, la fiche MAT/10 du livret équipier indique 6 bars pour la DMRS.', s: 'tableau' },
    { q: 'En présence de risques électriques, le jet diffusé d’attaque doit avoir un angle d’ouverture de :', c: ['30° minimum', '15° maximum', '45° exactement', '130°'], e: 'Document stagiaire « Les lances à eau à main », fiche 8.3.', s: 'jets' },
    { q: 'Le test du plafond se fait en :', c: ['Jet diffusé d’attaque', 'Jet droit', 'Jet diffusé de protection', 'Mode purge'], e: 'Diaporama, diapo 12 : utilisations préconisées du jet diffusé d’attaque.', s: 'jets' },
    { q: 'Quel jet a une grande portée mais un mauvais refroidissement ?', c: ['Le jet droit', 'Le jet diffusé d’attaque', 'Le jet diffusé de protection', 'Aucun'], e: 'Diaporama, diapo 11 : grande portée, bonne pénétration, faible surface de contact, mauvais refroidissement.', s: 'jets' },
    { q: 'Selon le document stagiaire, quand le débit doit-il être faible ?', c: ['Pendant les phases de noyage', 'Au début de l’attaque', 'Sur un feu virulent', 'Quand le volume à éteindre est important'], e: 'Fiche 8.5 : débit élevé au début de l’attaque, faible pour les phases de noyage.', s: 'ldv' }
  ]
});

/* =====================================================================================
   4. TECHNIQUES DE LANCE
   ===================================================================================== */
VSAV.chap({
  id: 'ce-techniques-lance', part: 'ce', seq: CE2,
  title: 'Techniques de lance du chef d’équipe', short: 'Techniques de lance', motif: 'spray',
  status: 'partiel',
  todo: ' Le dossier « PARTIE D caisson à feu » du Drive formateur est <b>vide</b> (aucun fichier) : rien n’est disponible sur la mise en pratique en caisson. La fiche GTO ETEX-STR-TDE-9 (moyens portatifs de projection d’agent extincteur) est indiquée « en cours de réalisation » dans le GTO.',
  sources: [CE2_LIV + ', § 2.2 « Les techniques de lance » (p. 19-21)', CE2_FA2 + ' : séquence 2, fiches de tâche démonstrative et applicative, grille d’observation', CE2_FMPA + ', fiches 8.6 à 8.9', CE2_GTO + ', ETEX-STR-TDE à TDE-8 (p. 79-106)'],
  summary: 'À genoux, diffusé d’attaque, test de plafond, inertage, réserve, T-Z-O, position de survie ; et les techniques d’extinction du GTO que le CE choisit et applique.',
  why: '<b>Pourquoi répéter ces gestes jusqu’à l’automatisme ?</b> Le livret est clair : la LDV est « l’outil, l’arme du CE INC pour combattre un feu », et elle s’utilisera principalement <b>dans le noir, sous ARI et avec des gants</b>, donc <b>à l’aveugle</b>. Comment être efficace sans mettre son binôme en danger quand cet outil n’est pas maîtrisé ?',
  sections: [
    { id: 'arme', t: 'La LDV, arme du chef d’équipe', ic: 'target', src: CE2_LIV + ', § 2.2 (p. 19-21)',
      html: '<p>La LDV offre plusieurs types d’utilisation. Il n’est pas concevable qu’un CE INC ne connaisse pas <b>toutes ses possibilités</b> et <b>ses manipulations par cœur</b>. Le livret renvoie au <b>GTO Établissements et techniques d’extinction, p. 79 à 105</b>.</p>' +
        '<p>Il illustre la partie par des vidéos (QR codes) : progression, attaque combinée, attaque pulsing-penciling, attaque d’atténuation (vue générale, vue à la caméra thermique, action du jet), et une comparaison « bonne technique / mauvaise technique ».</p>' +
        '<p>Le GTO décrit ce sur quoi le porte-lance agit (p. 81) : la <b>forme du jet</b> (diffusion, distribution, dispersion), la <b>quantité d’eau</b> (débit et durée d’ouverture), l’<b>angle d’application</b> par rapport au sol et la <b>gestuelle</b> (impulsions, T, Z, O, 8…).</p>' },
    { id: 'gestes', t: 'Les gestes de la séquence « Techniques de lances »', ic: 'play', src: CE2_FA2 + ', fiches de tâche et grille d’observation',
      steps: ['Prendre la lance, l’équipier en appui.', 'Se mettre à genoux pour manœuvrer : la stabilité est bien meilleure.', 'Régler le jet en diffusé d’attaque, entre 15° et 45°.', 'Constituer une réserve de tuyau (critère de la grille d’observation).', 'Réaliser un test de plafond en coudant bien le tuyau à 90° par rapport au sol.', 'Si l’eau n’est pas retombée : inertage, lance ouverte pendant 2 s.', 'Foyer en vue : réaliser le T, le Z, le O.', 'Face à un embrasement généralisé (flashover) : position de survie avec son binôme.'], stepsTitle: 'Gestes du porte-lance (8)',
      after: '<p class="small muted">Les fiches regroupent ces gestes sous « test de plafond, inertage, crayonnage, position de survie ». Activité applicative : 2 h, en binôme, deux groupes encadrés ; matériel : 1 FPT, DMRS, 4 tuyaux de 45/20 m, 1 division mixte, 1 tuyau de 70/20 m.</p>' },
    { id: 'tzo', t: 'Le T, le Z, le O (et le 8)', ic: 'grid', src: CE2_FMPA + ', fiches 8.7-8.8 ; ' + CE2_FA2 + ' ; ' + CE2_GTO + ', ETEX-STR-TDE-4 (p. 95-96)',
      html: '<p>Le document stagiaire appelle « <b>méthode des lettres</b> » ou <b>crayonnage</b> ce mouvement de lance ; le point de départ de chaque lettre est <b>en partie haute</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Lettre</th><th>Utilisation (document stagiaire)</th></tr></thead><tbody>' +
        '<tr><td><b>T</b></td><td>Peut être utilisé dans un <b>couloir</b>.</td></tr>' +
        '<tr><td><b>Z</b></td><td>Dans un <b>volume moyen</b>, centré sur le feu et les fumées.</td></tr>' +
        '<tr><td><b>O</b></td><td>Permet de balayer le feu, les fumées et les parois.</td></tr>' +
        '<tr><td><b>8</b></td><td><b>Attaque combinée</b> : associe attaque directe et indirecte en manœuvrant la lance sur le foyer et la couche de fumée ; balayage global du volume.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Le document stagiaire définit l’<b>attaque directe</b> (eau projetée directement sur un foyer localisé et visible) et l’<b>attaque indirecte</b> (eau projetée vers le haut du volume quand le binôme ne voit pas le foyer et/ou ne peut pas pénétrer en raison de son intensité).</p>' +
        '<p>Le GTO (fiche TDE-4, extinction combinée ou massive) : depuis l’<b>extérieur</b>, sur des feux <b>pleinement développés</b> (post-flashover), jet généralement diffusé en T, Z, O, 8, carré, rectangle… en commençant par le haut ; geste « posé » <b>jusqu’à 5 à 6 secondes</b>, éventuellement répété deux fois sans refermer si le débit paraît juste.</p>' +
        '<div class="callout warn"><b>Les sources ne situent pas le T-Z-O au même endroit :</b> la fiche de tâche formateur en fait une attaque « que l’on réalise lorsque le binôme a le <b>foyer en vue</b> » ; le document stagiaire cite le T dans un couloir ; le GTO réserve l’extinction combinée à l’<b>extérieur du local</b> pour ne pas subir le <b>retour de vapeur</b>, et prévient qu’elle peut propager l’incendie à un volume adjacent s’il existe un ouvrant entre les deux. Le vocabulaire diffère aussi : « crayonnage » désigne le T-Z-O (document stagiaire, fiches formateur, illustration du GTO), alors que le « <b>penciling</b> » du GTO (TDE-2) est une <b>application d’eau très ponctuelle</b> en jet étroit, grosses gouttes.</div>',
      figs: [{ img: 'img/ce/2/extinction-combinee-tzo.jpg', cap: 'Extinction combinée en « crayonnage » : T, Z, O', txt: '<p>Le binôme, à genoux à l’ouverture du volume, trace la lettre avec le jet en partant du haut du volume.</p>', src: CE2_GTO + ', ETEX-STR-TDE-4, p. 95 (illustration n°1)' }] },
    { id: 'duree', t: 'Durée d’application : impulsion ou continu', ic: 'clock', src: CE2_FMPA + ', fiche 8.9 ; ' + CE2_GTO + ', ETEX-STR-TDE-1 (p. 85-86)',
      html: '<div class="tw"><table><thead><tr><th>Mode</th><th>Document stagiaire (fiche 8.9)</th><th>GTO (fiche TDE-1)</th></tr></thead><tbody>' +
        '<tr><td><b>Impulsion</b></td><td>Projection par « ouvrir/fermer » ; impulsion de courte durée : le dispositif reste ouvert « quelques secondes » pour une quantité d’eau contrôlée.</td><td>Impulsion <b>courte</b> (pulsing) : ½ seconde au plus ; impulsion <b>longue</b> : ouverture rapide puis 2 à 5 s environ en fermeture progressive.</td></tr>' +
        '<tr><td><b>Continu</b></td><td>Robinet maintenu ouvert quand l’extinction nécessite un volume d’eau important ou pour couvrir une grande surface.</td><td>—</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn">« Quelques secondes » (document stagiaire, 2011) n’est pas l’impulsion courte du GTO (½ s au plus) : les repères de réglage (débits, angles) sont détaillés dans le chapitre équipier <a href="#/c/inc-modes-attaque">Les modes d’attaque et les techniques d’extinction</a>.</div>' },
    { id: 'gto', t: 'Les techniques d’extinction du GTO', ic: 'book', src: CE2_GTO + ', ETEX-STR-TDE § 1 (p. 81) et fiches TDE-1 à TDE-8 (p. 85-106)',
      html: '<p>« Le choix d’une méthode repose avant tout sur l’<b>analyse de la situation</b>. » Les fiches du GTO auxquelles renvoie le livret :</p>' +
        '<div class="tw"><table><thead><tr><th>Fiche</th><th>Technique</th><th>Repère clé pour le porte-lance</th></tr></thead><tbody>' +
        '<tr><td>TDE-1</td><td>Refroidissement des fumées (gas cooling)</td><td>Impulsions courtes (pulsing) ou longues ; proche du flashover, pas d’impulsions mais jet droit en balayage des parois hautes ; <b>ne pas évoluer sous des rollovers</b></td></tr>' +
        '<tr><td>TDE-2</td><td>Extinction directe</td><td>Badigeonnage (painting), application ponctuelle (penciling), ricochet ; en attaque intérieure, jet droit à privilégier</td></tr>' +
        '<tr><td>TDE-3</td><td>Extinction indirecte</td><td>Local dont on peut refermer la porte ; diffusé 20 à 30°, 100 à 300 L/min vers le plafond</td></tr>' +
        '<tr><td>TDE-4</td><td>Extinction combinée / massive</td><td>T, Z, O, 8… depuis l’extérieur, feu pleinement développé</td></tr>' +
        '<tr><td>TDE-5</td><td>Situation pré-backdraft</td><td>Extinction indirecte depuis la porte, inertage par trouée ou percement</td></tr>' +
        '<tr><td>TDE-6</td><td>Repli sous protection hydraulique</td><td>Anges danseurs, chaleur qui persiste malgré l’action de lance : repli sous impulsions</td></tr>' +
        '<tr><td>TDE-7</td><td>Feu piloté par le vent</td><td>Attaquer le vent dans le dos ; gérer les ouvrants</td></tr>' +
        '<tr><td>TDE-8</td><td>Attaque d’atténuation</td><td>De l’extérieur, <b>jet droit</b> vers le milieu du plafond, <b>250 L/min minimum</b> ; en jet diffusé, aucun effet</td></tr>' +
        '<tr><td>TDE-9</td><td>Moyens portatifs de projection d’agent extincteur</td><td><i>En cours de réalisation</i> dans le GTO</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">Le détail (débits, angles, durées) est dans le chapitre équipier <a href="#/c/inc-modes-attaque">Les modes d’attaque et les techniques d’extinction</a> : le chef d’équipe doit le maîtriser parfaitement, puisque c’est lui qui choisit la technique avec son chef d’agrès et la met en œuvre.</p>' },
    { id: 'survie', t: 'La position de survie', ic: 'alert', src: CE2_FA2 + ', fiches de tâche ; ' + CE2_GTO + ', ETEX-STR-TDE § 4 (p. 84)',
      html: '<p>Les fiches de tâche la font réaliser « avec son binôme » face à un <b>embrasement généralisé (flash over)</b>. Le GTO la décrit comme la technique de protection du binôme lorsque <b>le repli n’est plus possible</b> et que les intervenants sont directement menacés par le phénomène :</p>' +
        '<ul class="check"><li>se jeter au sol <b>face contre terre</b>, <b>binôme regroupé</b> ;</li><li>maintenir la lance <b>au-dessus des casques</b> en <b>jet de diffusion de protection au débit maximum</b>.</li></ul>' +
        '<p>Avant d’en arriver là, le GTO liste les mesures de protection : lecture attentive de l’incendie, itinéraire de repli et de secours, repli dès que la progression n’est plus sécurisée, impulsions adaptées, progression au ras du sol en évaluant en permanence la situation.</p>' +
        '<p class="small muted">Photo de la position : chapitre équipier <a href="#/c/inc-binome-attaque">Le rôle du binôme impliqué dans l’attaque</a>.</p>' },
    { id: 'grille', t: 'Comment tu seras évalué', ic: 'check', src: CE2_FA2 + ', séquence 2 et grille d’observation',
      html: '<div class="tw"><table><thead><tr><th>Savoir-faire (fait / non fait)</th><th>Savoir-être (A, B, C)</th></tr></thead><tbody>' +
        '<tr><td><ul class="check"><li>EPI complet (sinon la manœuvre est arrêtée)</li><li>Règle le jet en diffusé d’attaque</li><li>Réalise un test de plafond</li><li>Constitue une réserve</li><li>Réalise un inertage</li><li>Réalise le TOZ</li><li>Réalise la position de survie</li></ul></td>' +
        '<td><ul class="check"><li>Sait utiliser la lance</li><li>Prend soin de la lance</li><li>Respecte les positions de travail</li></ul></td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout bad">Un « non fait » ou deux « C » = <b>manœuvre à refaire</b>.</div>' +
        '<p class="small muted">La fiche de séquence fixe l’objectif « individuellement », les fiches de tâche « en binôme ». La mise en pratique en caisson à feu (PARTIE D du Drive) n’est pas documentée : le dossier est vide.</p>' }
  ],
  key: ['La LDV est l’arme du CE ; elle s’utilise à l’aveugle (noir, ARI, gants).', 'À genoux : meilleure stabilité.', 'Diffusé d’attaque entre 15° et 45°.', 'Test de plafond, tuyau coudé à 90° ; eau non retombée → inertage 2 s.', 'T couloir, Z volume moyen, O balayage ; 8 = attaque combinée ; départ en partie haute.', 'GTO : extinction combinée depuis l’extérieur, jusqu’à 5 à 6 s.', 'Atténuation : jet droit au plafond, 250 L/min minimum.', 'Survie : au sol face contre terre, regroupés, lance au-dessus des casques en diffusé de protection au débit maximum.'],
  traps: ['Confondre crayonnage (T-Z-O) et penciling du GTO (application très ponctuelle).', 'Faire des impulsions dans une fumée instable proche du flashover.', 'Rester debout pour manœuvrer en volume : on perd en stabilité et on s’expose.', 'Oublier de constituer une réserve de tuyau avant de progresser.'],
  quiz: [
    { q: 'Pourquoi le livret dit-il que la LDV s’utilise « à l’aveugle » ?', c: ['Parce qu’on l’utilise principalement dans le noir, avec l’ARI et des gants', 'Parce qu’elle n’a pas de repères de réglage', 'Parce que le chef d’agrès la règle à distance', 'Parce qu’on ferme les yeux pour se protéger'], e: 'Livret CE, § 2.2 (p. 19).', s: 'arme' },
    { q: 'Pourquoi le porte-lance se met-il à genoux pour manœuvrer ?', c: ['La stabilité est bien meilleure', 'Pour aller plus vite', 'Pour voir le plafond', 'Pour que l’équipier passe devant'], e: 'Fiches de tâche PARTIE A, séquence 2.', s: 'gestes' },
    { q: 'Comment l’inertage est-il réalisé dans les fiches de tâche ?', c: ['Ouverture de la lance pendant 2 s, quand l’eau n’est pas retombée au test de plafond', 'Jet droit continu pendant 30 s', 'Lance fermée, on attend que la fumée descende', 'Mode purge au sol'], e: 'Fiches de tâche PARTIE A séquence 2 et PARTIE C.', s: 'gestes' },
    { q: 'Selon le document stagiaire, quelle lettre utilise-t-on dans un couloir ?', c: ['Le T', 'Le Z', 'Le O', 'Le 8'], e: 'Fiche 8.7 : T dans un couloir, Z dans un volume moyen, O pour balayer feu, fumées et parois.', s: 'tzo' },
    { q: 'Le mouvement en « 8 » permet :', c: ['Une attaque combinée, directe et indirecte, avec balayage global du volume', 'Une protection du binôme uniquement', 'Un noyage des braises', 'Un test de plafond'], e: 'Document stagiaire, fiche 8.8.', s: 'tzo' },
    { q: 'D’où le GTO fait-il réaliser l’extinction combinée (T, Z, O, 8) ?', c: ['Depuis l’extérieur du local, pour ne pas subir le retour de vapeur', 'Au contact du foyer', 'Depuis le toit uniquement', 'Depuis le local voisin, porte fermée'], e: 'GTO, ETEX-STR-TDE-4 (p. 95-96) ; la fiche formateur parle d’une attaque « lorsque le binôme a le foyer en vue ».', s: 'tzo' },
    { q: 'Position de survie : que fait le binôme ?', c: ['Il se jette au sol face contre terre, regroupé, lance au-dessus des casques en diffusé de protection au débit maximum', 'Il court vers la sortie lance fermée', 'Il se met dos à dos debout', 'Il passe en jet droit vers le plafond'], e: 'GTO, ETEX-STR-TDE § 4 (p. 84) ; fiches de tâche : face à un embrasement généralisé.', s: 'survie' },
    { q: 'Pour une attaque d’atténuation, le GTO impose :', c: ['Un jet droit vers le plafond, 250 L/min minimum', 'Un jet diffusé de protection', 'Un débit de 58 L/min', 'Des impulsions courtes'], e: 'GTO, ETEX-STR-TDE-8 : en jet diffusé, la technique n’aurait aucun effet.', s: 'gto' }
  ]
});
