/* GUIDES NATIONAUX — fichier 3 : milieux périlleux, sauvetage-déblaiement, milieu agricole, silos, navires
   Sources : guides de doctrine (GDO) et de techniques opérationnelles (GTO) de la DGSCGC (bureau de la doctrine, BDFE).
   Rappel des guides : la doctrine relève du droit souple ; elle guide l’action sans imposer de méthode stricte. */
var GN3 = 'Guides 3 — Milieux particuliers et sauvetage';
var GDOMPM = 'GDO Interventions en milieu périlleux et montagne (DGSCGC, 04/2019)';

/* =====================================================================================
   GDO MILIEU PÉRILLEUX ET MONTAGNE
   ===================================================================================== */

VSAV.chap({
  id: 'gn-perilleux', part: 'gn', seq: GN3,
  title: 'GDO Interventions en milieu périlleux et montagne', short: 'GDO milieu périlleux', motif: 'mountain',
  sources: [GDOMPM],
  summary: 'Souterrain, canyon, montagne et « autres milieux périlleux » : leurs risques, les acteurs, la prise d’appel et les mesures du COS, avec la balance bénéfice / risque au cœur de la décision.',
  why: '<b>Pourquoi un guide pour des interventions « ordinaires » ?</b> Un simple malaise au 3e étage devient une intervention en milieu périlleux si l’escalier, l’ascenseur et l’échelle aérienne sont inutilisables. Le guide apprend à reconnaître ces situations, à mesurer les <b>limites du matériel des primo-intervenants</b> (LSPCC par exemple) et à faire appel à temps aux spécialistes (SMPM, ELD, SD). Les fonctions de chef du dispositif spécialisé et de COS doivent rester dissociées.',
  sections: [
    { id: 'milieux', t: 'Les quatre milieux et leurs risques', ic: 'mountain', src: GDOMPM + ', chap. 1 (p. 13-25)',
      html: '<div class="tw"><table><thead><tr><th>Milieu</th><th>Caractéristiques et dangers</th></tr></thead><tbody>' +
        '<tr><td><b>Souterrain</b> (grottes, gouffres, mines, carrières, caves, catacombes, réseaux urbains)</td><td>Obscurité, température, humidité, longues progressions, étroitures, instabilité, <b>accumulation de gaz</b> (CO₂, H₂S, gaz d’explosifs), crues souterraines. Feu : engagement de moyens traditionnels très compliqué.</td></tr>' +
        '<tr><td><b>Canyon</b></td><td>Engagement (difficile d’en sortir), montée brutale des eaux (orage, barrage), eau vive, chutes de pierres, obstacles immergés, hypothermie.</td></tr>' +
        '<tr><td><b>Montagne / haute montagne</b></td><td>Isolement, accès difficile, terrain escarpé, météo (vent, neige, orage) ; en haute montagne : altitude, engagement, froid et refroidissement éolien, glaciers.</td></tr>' +
        '<tr><td><b>Autres milieux périlleux</b></td><td>Naturels (falaises, arbres, excavations, puits, ravins) ou artificiels (grues, pylônes, éoliennes, silos, châteaux d’eau, IGH, ponts, tunnels, barrages, téléphériques).</td></tr>' +
        '</tbody></table></div>' +
        '<p>Dès la reconnaissance, les difficultés portent sur la progression, l’abordage, le sauvetage, la prise en charge et l’évacuation de la victime, les <b>limites des moyens courants</b>, la sécurité des intervenants et du site.</p>' },
    { id: 'appel', t: 'La prise d’appel', ic: 'ecg', src: GDOMPM + ', chap. 2 section 2 (p. 33-34)',
      html: '<ul class="check"><li><b>Localiser précisément</b> : adresse, point remarquable (nom du canyon, dernier obstacle franchi, échappatoire), coordonnées GPS (SMS, plateforme de localisation des appels d’urgence, opérateurs).</li><li><b>Décrire la problématique</b> : nature, contexte, nombre de victimes et d’impliqués, gravité, niveau de pratique et d’équipement, victime à l’abri ou exposée.</li><li><b>Nature du requérant</b> : un professionnel du milieu sur place peut être une aide précieuse.</li><li><b>Facteurs aggravants</b> : risque de suraccident, nombreuses victimes, public sensible, nuit et intempéries, hélicoptère indisponible, transmissions difficiles, accès long.</li></ul>' +
        '<p>Dès qu’un milieu particulier apparaît, un spécialiste (chef d’unité ou conseiller technique SMPM / ELD / SD) peut appuyer le traitement de l’alerte. En montagne, la loi « montagne » (2016) répartit les secours : privés sur le domaine skiable et le hors-piste revenant gravitairement sur les pistes, publics au-delà.</p>' },
    { id: 'mesures', t: 'Les mesures du COS', ic: 'target', src: GDOMPM + ', chap. 2 section 3 (p. 35-40)',
      steps: ['Équipement : les primo-intervenants revêtent les EPI dont ils disposent ; leur implication dépend des limites d’emploi de leur matériel ; le COS fixe son idée de manœuvre après analyse de la balance bénéfice / risque.', 'Accès : si les engins classiques ou une équipe à pied suffisent, le COS juge s’il engage des sauveteurs (péril direct et imminent = sauvetage) ; sinon il demande les moyens spécialisés (engins chenillés…). Un hélicoptère reste sous la responsabilité du COS ; le pilote juge la faisabilité du vol.', 'Prise en compte : la reconnaissance complète les données, analyse les risques (éviter le suraccident), fixe l’idée de manœuvre et demande les spécialités nécessaires (SMPM, ELD, SD, RAD-CHIM, plongeurs, cynotechnie). Les drones aident à la prise d’information.', 'Sécurité de la zone (priorité du COS) : d’abord sans engager de personnel (détecteur multigaz à distance, consignation), puis avec les moyens disponibles si urgence ou stabilisation de la victime, enfin avec les équipes spécialisées.', 'MGO selon la dominante : SUAP (se protéger, protéger la victime et la zone, gestes de secours, renforts, bilans, surveillance), protection des biens (balance bénéfice / risque, attendre l’équipe spécialisée si besoin ; animaux : mesurer les enjeux avant d’exposer une vie humaine), autres (spécialistes en appui).', 'Retour à la normale : fatigue et perte de vigilance — maintenir la protection des intervenants, prévoir les relèves.'], stepsTitle: 'Chronologie des mesures opérationnelles',
      after: '<div class="callout warn"><b>Rappels</b>Le recours à l’hélicoptère n’est pas synonyme d’intervention spécialisée. Les fonctions de <b>chef du dispositif spécialisé</b> et de <b>COS</b> doivent être <b>dissociées</b>. La médicalisation peut être « externe » (équipe médicale accompagnée par le SMPM) ou « interne » (personnel médical inscrit sur la liste d’aptitude SMPM).</div>' +
        '<p class="small muted">Côté équipier : limites du LSPCC et progression avec risque de chute dans <a href="#/c/ppbe-lspcc-emploi">Le LSPCC : notions de risque, amarrages et manœuvres PPBE</a>.</p>' }
  ],
  key: ['4 milieux : souterrain, canyon, montagne, autres milieux périlleux (naturels ou artificiels).', 'Situation périlleuse = intervention courante nécessitant des techniques du milieu périlleux.', 'Souterrain : gaz (CO₂, H₂S), obscurité, crues, étroitures.', 'Prise d’appel : localiser précisément d’abord.', 'Balance bénéfice / risque et limites du matériel des primo-intervenants.', 'Sécurisation de la zone = priorité du COS, d’abord sans engager de personnel.', 'Hélicoptère sous la responsabilité du COS ; le pilote juge la faisabilité.', 'COS et chef du dispositif spécialisé : fonctions dissociées.'],
  traps: ['Engager les primo-intervenants au-delà des limites du LSPCC « parce qu’on est sur place ».', 'Croire qu’un hélicoptère rend l’intervention « spécialisée ».', 'Exposer un sapeur-pompier pour un animal sans mesurer les enjeux.', 'Relâcher la vigilance en fin d’opération.'],
  quiz: [
    { q: 'Combien de « milieux » le GDO distingue-t-il ?', c: ['4 : souterrain, canyon, montagne, autres milieux périlleux', '2 : naturel et artificiel', '3 : montagne, mer, ville', '6'], e: 'GDO milieu périlleux, chap. 1 section 1.', s: 'milieux' },
    { q: 'Un malade au 3e étage, escalier, ascenseur et échelle aérienne inutilisables :', c: ['Relève d’une évacuation spécifique avec méthode du milieu périlleux', 'N’est jamais un milieu périlleux', 'Doit attendre que l’ascenseur soit réparé', 'Relève du secours en montagne'], e: 'GDO p. 13 : exemple de « situation périlleuse ».', s: 'milieux' },
    { q: 'Première étape de la prise d’appel en milieu périlleux :', c: ['Localiser précisément la ou les personnes en détresse', 'Envoyer un hélicoptère', 'Demander le niveau de pratique', 'Prévenir la presse'], e: 'GDO chap. 2 section 2.', s: 'appel' },
    { q: 'La sécurisation de la zone se fait d’abord :', c: ['Sans engagement de personnel (détecteur à distance, consignation) pour figer la situation', 'Avec tout l’équipage', 'Uniquement avec les spécialistes', 'Après l’évacuation de la victime'], e: 'GDO chap. 2 section 3 § 4.', s: 'mesures' },
    { q: 'Un hélicoptère engagé sur l’opération est placé sous la responsabilité :', c: ['Du COS, le pilote jugeant la faisabilité du vol', 'Du pilote seul', 'Du SAMU', 'Du chef du dispositif spécialisé'], e: 'GDO chap. 2 section 3 § 2.', s: 'mesures' },
    { q: 'Quel gaz peut s’accumuler en milieu souterrain ?', c: ['CO₂ et H₂S notamment', 'Uniquement l’oxygène', 'Aucun', 'Seulement le méthane domestique'], e: 'GDO p. 15.', s: 'milieux' },
    { q: 'Les fonctions de chef du dispositif spécialisé et de COS :', c: ['Doivent être dissociées', 'Doivent être tenues par la même personne', 'Sont toujours tenues par le SAMU', 'N’existent pas en milieu périlleux'], e: 'GDO p. 39, renvoi au GDO Exercice du commandement.', s: 'mesures' }
  ]
});

/* =====================================================================================
   GDO SILOS + PIO FEUX DE SILOS
   ===================================================================================== */

var GDOSILO = 'GDO Interventions dans les silos (DGSCGC, 09/2019)';
var PIOSILO = 'PIO 2017-02 Feux de silos bois et céréales (DGSCGC)';

VSAV.chap({
  id: 'gn-silos', part: 'gn', seq: GN3,
  title: 'GDO Interventions dans les silos (et PIO feux de silos)', short: 'GDO silos', motif: 'blast',
  sources: [GDOSILO, PIOSILO],
  summary: 'Types de silos, activité vitale du grain, explosion de poussières, auto-échauffement, feu à cœur et de surface ; conduite à tenir : couper les flux, périmètres, pas d’eau dans le grain, mousse, inertage, vidange ; ensevelissement.',
  why: '<b>Pourquoi un feu de silo est-il si piégeux ?</b> Parce que le grain est vivant (il respire et chauffe), que la poussière en suspension peut <b>exploser</b> (Metz 1982 : 12 morts ; Blaye 1998 : 11 morts) et que l’eau, réflexe habituel, fait gonfler le grain, alourdit la cellule jusqu’à la rupture et le fait prendre en masse. Le PIO rappelle que <b>41 % des blessés légers sur ces opérations sont des sapeurs-pompiers</b> et que les blessures les plus graves suivent l’ouverture d’ouvrants.',
  sections: [
    { id: 'connaitre', t: 'Connaître le silo et le grain', ic: 'eye', src: GDOSILO + ', chap. 1 section 1',
      html: '<p><b>Stockages à plat</b> (moins de 10 m : silos couloirs, stockages à plat en box, silos boudins, taupinières) ; <b>verticaux</b> (silo comble ≤ 40 m, béton « cathédrale » ≤ 60 m, cylindrique métallique ≤ 20 m de haut et 30 m de diamètre, dôme ≤ 25 m, bacs, stockages de chaudières bois). La structure ne dit ni la nature ni la quantité de matière.</p>' +
        '<p>Le grain conserve une <b>activité vitale</b> : <b>respiration</b> (amidon + O₂ → eau + CO₂ + chaleur ; la chaleur produite double pour +5 °C ou +2 % d’humidité), <b>fermentation</b> sans oxygène (CO₂, alcool, chaleur, moisissures), <b>germination</b>. D’où la surveillance de la température (silothermométrie : une sonde peut ignorer un point chaud situé à plus d’1 m).</p>' +
        '<p>Équipements : cellules (ouvertes ou fermées), as de carreau, boisseaux ; transporteurs à bande, à chaîne (« Redler »), à vis, pneumatiques ; <b>élévateur à godets</b> (le plus dangereux pour l’explosion de poussières) ; séchoirs (gaz ou fioul : <b>40 % des feux de silos</b>) ; filtres à manches et cyclones (propagation possible d’une particule incandescente).</p>' },
    { id: 'phenomenes', t: 'Phénomènes redoutés et risques', ic: 'blast', src: GDOSILO + ', chap. 1 section 1 § 5 à 9',
      html: '<div class="tw"><table><thead><tr><th>Phénomène</th><th>À retenir</th></tr></thead><tbody>' +
        '<tr><td><b>Explosion de poussières</b></td><td>Poussières combustibles &lt; 500 µm (voire 1 000) ; <b>hexagone</b> = triangle du feu + poussières en suspension + nuage dans le domaine d’explosivité + confinement. Explosion primaire puis <b>secondaire</b> (poussières soulevées). Évents et portes de découplage : <b>refermer les portes après chaque passage</b>.</td></tr>' +
        '<tr><td><b>Auto-échauffement</b></td><td>Oxydation lente, fermentation (humidité &gt; 15 %), condensation. Sans flamme : CO, CO₂, alcools, chaleur difficile à voir à la caméra thermique ; reprise possible à l’ouverture d’une trappe ou à la vidange ; condensation sur les parois et goudrons = indices.</td></tr>' +
        '<tr><td><b>Feu de surface</b></td><td>Triangle du feu, source externe ; vite détecté ; sucres et plastiques fondent (feu de type hydrocarbure).</td></tr>' +
        '<tr><td><b>Explosion de gaz</b></td><td>Méthane, CO, H₂… issus de fermentation ou pyrolyse ; peut déclencher une explosion de poussières.</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Autres risques</b> : rupture des parois (surcharge, <b>eau en excès</b>, explosion) avec projections et ensevelissement ; acier qui perd sa résistance ; bois de 2e et 3e transformation → <b>acide cyanhydrique</b> ; <b>anoxie</b> (CO₂, azote d’inertage) ; boues de station d’épuration (risque biologique) ; poussières fines (FFP2/FFP3) ; énergies.</p>' +
        '<div class="callout bad"><b>Ensevelissement</b>Le grain en mouvement agit comme des sables mouvants : <b>enfoncé jusqu’aux genoux, on ne peut presque plus se dégager seul</b>. Colonnes et « ponts » de grains (effet voûte) peuvent céder ; pièces en mouvement (vis, bandes) causent des blessures graves.</div>' },
    { id: 'conduite', t: 'Conduite des opérations incendie', ic: 'target', src: GDOSILO + ', chap. 2 section 2 ; ' + PIOSILO,
      html: '<p>La MGO du GDO Incendies de structures s’applique, avec trois actions globales : <b>arrêter les flux</b> (produit, poussières, ventilation), <b>isoler</b> parties hautes et basses, <b>couper les énergies</b> de la cellule sinistrée <b>en concertation avec l’exploitant</b> — la coupure électrique n’est que <b>partielle</b> (garder manutention, éclairage, thermométrie, automatismes).</p>' +
        '<div class="tw"><table><thead><tr><th>Périmètre d’exclusion réflexe</th><th>Valeur</th></tr></thead><tbody><tr><td>Silo plat</td><td>25 m</td></tr><tr><td>Silo vertical</td><td>50 m</td></tr><tr><td>Phase réfléchie</td><td><b>1,5 × la hauteur</b> de l’installation (ou plan d’intervention)</td></tr></tbody></table></div>' +
        '<ul class="check"><li>Renseignements auprès de l’exploitant : produit, quantité, capacité, températures, depuis quand, opérations en cours, historique, actions déjà faites.</li><li>Reconnaissance avec l’exploitant, EPI textiles, détection et protection respiratoire (ARI).</li><li><b>Eau</b> : seulement en faible quantité et <b>en jet diffusé</b> sur un feu accessible, pour fixer les poussières et protéger structures et équipements ; <b>à proscrire pour un feu à cœur</b> (gonflement, poids, prise en masse).</li><li><b>Mousse moyen foisonnement</b> : tapis entretenu en surface du grain ; à privilégier pour un feu de surface d’oléagineux (comportement d’hydrocarbure).</li><li><b>Inertage</b> (CO₂ ou azote, gazeux) : feu à cœur (point chaud &gt; 60 °C) et cellule fermée étanche ; injection en partie haute et à la base ; O₂ visé &lt; 8 % ; long (parfois plusieurs jours) ; jamais systématique ; inadapté au sucre, à la farine, à l’amidon.</li><li><b>Vidange</b> : phase la plus longue et la plus délicate, sous mousse ou atmosphère appauvrie, vitesse maîtrisée ; la vidange par le système de manutention est un <b>dernier recours</b> ; seule la vidange totale éteint un feu à cœur.</li></ul>' +
        '<div class="callout warn"><b>Feu à cœur : deux règles à ne jamais perdre de vue</b>Pas d’eau dans le grain ; pas de poussière en suspension (pas de jet droit).</div>' },
    { id: 'suap', t: 'Explosion, ensevelissement et malaise', ic: 'alert', src: GDOSILO + ', chap. 2 sections 3 et 4',
      html: '<p><b>Explosion</b> : effets jusqu’à 200 m ; contrôler les accès, limiter le nombre de sauveteurs, surveiller la stabilité des structures, anticiper la longue durée.</p>' +
        '<p><b>Personne ensevelie visible</b> (avec spécialistes milieu périlleux / sauvetage-déblaiement) : protéger victime et sauveteurs (chutes, voies respiratoires, yeux) ; <b>stabiliser la zone</b> avec des structures planes posées sur le grain ; <b>coffrer</b> autour de la victime à mesure que le grain est retiré (seaux, aspiration) ; extraire par le point de sortie le plus adapté. <b>Non visible</b> : techniques de sauvetage-déblaiement (évacuation par le haut, vidange douce par gravité, ouverture).</p>' +
        '<p><b>Malaise dans un silo</b> : redouter l’<b>anoxie</b> (CO₂, gaz toxiques) → extraction rapide et recherche des causes.</p>' }
  ],
  key: ['Hexagone d’explosion de poussières : triangle du feu + suspension + domaine d’explosivité + confinement.', 'Élévateur à godets : équipement le plus dangereux pour l’explosion de poussières.', 'Refermer les portes de découplage après chaque passage.', 'Exclusion réflexe : 25 m (plat), 50 m (vertical) ; puis 1,5 × la hauteur.', 'Couper flux, isoler, couper les énergies avec l’exploitant ; coupure électrique partielle.', 'Feu à cœur : pas d’eau dans le grain, pas de poussière en suspension ; extinction par vidange totale.', 'Mousse moyen foisonnement ; inertage si cellule étanche et feu à cœur, O₂ < 8 %.', 'Grain jusqu’aux genoux : impossible de se dégager seul.'],
  traps: ['Arroser massivement une cellule en feu à cœur.', 'Utiliser un jet droit qui soulève les poussières.', 'Couper toute l’électricité du site.', 'Ouvrir une trappe sans protection ni tapis de mousse (flash thermique, explosion de gaz imbrûlés).', 'Descendre dans une cellule sans stabilisation ni protection contre les chutes.'],
  quiz: [
    { q: 'Périmètre d’exclusion réflexe pour un feu de silo vertical :', c: ['50 m', '25 m', '10 m', '200 m'], e: 'GDO silos chap. 2 : 25 m silo plat, 50 m silo vertical, puis 1,5 × la hauteur.', s: 'conduite' },
    { q: 'Pour un feu à cœur dans une cellule de grain, l’eau est :', c: ['À proscrire pour l’extinction (gonflement, poids, prise en masse)', 'Le meilleur agent', 'À injecter en jet droit', 'À utiliser en grande quantité par le haut'], e: 'GDO silos chap. 2 § 3 a.', s: 'conduite' },
    { q: 'L’hexagone d’explosion de poussières ajoute au triangle du feu :', c: ['Poussières en suspension, nuage dans le domaine d’explosivité, confinement', 'Eau, vent, chaleur', 'Oxygène, azote, CO₂', 'Électricité, gaz, fioul'], e: 'GDO silos chap. 1 § 5 a.', s: 'phenomenes' },
    { q: 'Lors des reconnaissances, les portes de découplage doivent être :', c: ['Refermées après chaque passage', 'Laissées ouvertes pour la ventilation', 'Démontées', 'Bloquées par un coin'], e: 'GDO silos chap. 1 § 5 a.', s: 'phenomenes' },
    { q: 'Quelle mousse privilégier dans un silo ?', c: ['Moyen foisonnement', 'Bas foisonnement', 'Haut foisonnement', 'Aucune'], e: 'GDO silos chap. 2 § 3 b.', s: 'conduite' },
    { q: 'La coupure électrique dans un silo sinistré doit être :', c: ['Partielle, pour garder manutention, éclairage, thermométrie et automatismes', 'Totale immédiatement', 'Faite par les sapeurs-pompiers seuls', 'Inutile'], e: 'GDO silos chap. 2 § 2 b.', s: 'conduite' },
    { q: 'Victime ensevelie visible dans le grain : on stabilise la zone puis on :', c: ['Coffre autour de la victime à mesure que le grain est retiré', 'La tire immédiatement par les bras', 'Vidange la cellule par le bas', 'Arrose pour fixer le grain'], e: 'GDO silos chap. 2 section 4.', s: 'suap' },
    { q: 'Quelle part des feux de silos concerne les séchoirs ?', c: ['40 %', '5 %', '75 %', '100 %'], e: 'GDO silos chap. 2 § 6.', s: 'connaitre' }
  ]
});

/* =====================================================================================
   GDO USAR (MILIEU EFFONDRÉ OU INSTABLE)
   ===================================================================================== */

var GDOUSAR = 'GDO Interventions en milieu effondré ou instable — USAR (DGSCGC)';

VSAV.chap({
  id: 'gn-usar', part: 'gn', seq: GN3,
  title: 'GDO USAR : interventions en milieu effondré ou instable', short: 'GDO USAR', motif: 'blast',
  sources: [GDOUSAR],
  summary: 'Effondrements de bâtiments, mouvements de terrain, séismes, tempêtes ; risques pour les sauveteurs et les victimes ; règles de sécurité des primo-intervenants ; unités de sauvetage, d’appui et de recherche (USAR) ; zonage, évaluation bâtimentaire, tranchées et MGO en 5 phases.',
  why: '<b>Pourquoi les primo-intervenants doivent-ils connaître ce guide ?</b> Ce sont eux qui arrivent les premiers devant un immeuble effondré, un fontis ou une tranchée éboulée. Le principal risque pour le sauveteur est l’<b>ensevelissement</b> par un effondrement secondaire (rue de Trévise 2019 : 4 morts dont 2 sapeurs-pompiers). Ils doivent savoir sécuriser, sauver les victimes de surface et <b>ne pas dérégler l’équilibre instable</b> des décombres, en attendant les spécialistes.',
  sections: [
    { id: 'phenomenes', t: 'Effondrements et mouvements de terrain', ic: 'blast', src: GDOUSAR + ', chap. 1',
      html: '<p><b>Causes d’effondrement</b> : sols argileux, vétusté, termites, travaux mal faits, travaux souterrains, cavités, incendie (feu et eau), explosion, séisme, tempête, inondation, fuites de réseaux. Hauteur des décombres ≈ <b>1/3 de la hauteur</b> de l’immeuble ; cône de projection jusqu’à la <b>mi-hauteur</b> en largeur.</p>' +
        '<div class="tw"><table><thead><tr><th>Type</th><th>Description</th><th>Dégagement</th></tr></thead><tbody>' +
        '<tr><td><b>À plat</b></td><td>Superposition de planchers ; vides aléatoires près d’un meuble ou d’un élément résistant.</td><td>Couche par couche, ou latéralement par une ouverture.</td></tr>' +
        '<tr><td><b>En V</b></td><td>Les poutres ont pivoté sur leurs appuis ; peut casser les planchers inférieurs.</td><td>Ne pas déplacer les plans inclinés encastrés ; latéralement par porte ou fenêtre.</td></tr>' +
        '<tr><td><b>En oblique</b></td><td>Un appui de plancher a cédé ; victimes au pied des murs ou sous les plans.</td><td>Latéralement, après étaiement éventuel.</td></tr>' +
        '</tbody></table></div><p>Les <b>espaces de survie</b> (vides fermés par planchers, murs, mobilier) offrent plus de chances aux victimes.</p>' +
        '<p><b>Mouvements de terrain</b> : affaissement (lent, peu de victimes), <b>fontis</b> (effondrement localisé brutal en entonnoir), effondrement généralisé (carrières), glissement (niches d’arrachement, fissures, arbres basculés), éboulements (pierres &lt; 1 dm³, blocs, gros blocs &gt; 1 m³), retrait-gonflement des argiles, <b>effondrement de tranchée</b> (souvent sur de petits chantiers), coulée de boue (jusqu’à 90 km/h). Séisme : magnitude (Richter, énergie ×30 par degré) et intensité (MSK, 1 à 12).</p>' +
        '<p><b>Incendie</b> : la stabilité des murs porteurs décroît avec la durée du feu ; toute trouée dans un mur porteur risque la ruine ; l’eau projetée et son poids fragilisent murs et planchers bois ; guetter craquements, fléchissements, déformations.</p>' },
    { id: 'risques', t: 'Risques pour les sauveteurs et les victimes', ic: 'alert', src: GDOUSAR + ', chap. 2',
      html: '<p>Matériaux et efforts : compression, traction, flexion, cisaillement, flambage, torsion (la pierre et la brique résistent bien à la compression mais mal à la traction et à la flexion). <b>Risques secondaires</b> : eau (noyade en sous-sol), gaz (explosion, anoxie, intoxication), électricité, radioactifs, chimiques, munitions — souci permanent du COS. <b>Amiante</b> à rechercher dans les bâtiments anciens.</p>' +
        '<div class="tw"><table><thead><tr><th>Victime</th><th>Situation</th></tr></thead><tbody><tr><td><b>Emmurée</b></td><td>Sous les décombres mais dans un espace suffisant ; souvent légère ou indemne.</td></tr><tr><td><b>Incarcérée</b></td><td>Prisonnière d’un amas, immobile ; souvent grave.</td></tr><tr><td><b>Ensevelie</b></td><td>Sous des matériaux plus ou moins meubles (gravats, céréales) qui l’écrasent.</td></tr></tbody></table></div>' +
        '<p>Penser au <b>souffle</b> si une explosion est à l’origine, et aux lésions cachées d’une victime tombée de plusieurs étages. Le vécu psychologique (sidération, agitation, agressivité, renoncement) doit être repéré pour anticiper son comportement.</p>' },
    { id: 'securite', t: 'Règles de sécurité des primo-intervenants', ic: 'shield', src: GDOUSAR + ', chap. 3',
      steps: ['Évaluer la sécurité des systèmes effondrés ou instables avant d’engager des sauveteurs.', 'Ne pas déranger l’équilibre instable des décombres.', 'Tester la solidité du sol par une pression prudente du pied.', 'Ne jamais déplacer une pièce qui soutient des décombres (poutre, porte, meuble) : la contourner, sinon la sécuriser.', 'Ne pas longer les murs fissurés ou structures non stabilisées (les faire étayer).', 'Se déplacer en binôme, lentement, à quelques mètres l’un de l’autre ; main courante si besoin.', 'Placer une « sonnette » (observateur muni d’un sifflet) qui surveille le secteur.', 'Rester le plus silencieux possible pour entendre les craquements annonciateurs.'], stepsTitle: 'Avant l’arrivée des unités USAR',
      after: '<p>Surveillance des systèmes instables : sonnette, <b>télémètre</b> laser (alarme au-delà d’un seuil de 2 à 100 mm, portée jusqu’à 50 m), contrôleurs de stabilité ; connaître à tout instant le nombre et la position des sauveteurs, le signal d’alarme et le point de regroupement. Les étais ne servent jamais de vérins pour « redresser » une structure.</p>' +
        '<p>Le COS : brief, protections collectives, <b>personnel strictement nécessaire</b>, contact permanent avec les binômes, chemin et signal de repli, détecteurs (explosimètre, CO), ventilation et éclairage, relèves régulières, <b>binôme de sécurité</b>, soutien psychologique. Les 48 premières heures sont essentielles, mais la fatigue pousse à négliger la sécurité.</p>' },
    { id: 'usar', t: 'Les unités USAR et la conduite des opérations', ic: 'team', src: GDOUSAR + ', chap. 4 et 5',
      html: '<p>Les unités de sauvetage-déblaiement sont devenues <b>unités de sauvetage, d’appui et de recherche (USAR)</b>, selon les standards INSARAG : emplois d’équipier, chef d’unité, chef de section ; avec les équipes <b>cynotechniques</b>. <b>Unité</b> = 1 chef d’unité + 6 équipiers (reconnaître, premiers sauvetages, étayer, percer, évacuer) ; <b>groupe</b> = 2 unités ; <b>colonne</b> = 2 à 4 groupes. Plus petit élément : l’<b>équipe</b> (chef d’unité + 2 binômes).</p>' +
        '<ul class="check"><li><b>Primo-intervenants</b> : sauvetage urgent sous l’autorité du COS, <b>périmètre de sécurité</b> réflexe, puis <b>dégagement des victimes de surface</b>.</li><li><b>Zonage</b> : exclusion (rouge), contrôlée (orange), soutien (verte) ; points d’accès et de contrôle ; édifice menaçant ruine : périmètre réflexe = <b>1,5 × la hauteur</b>.</li><li><b>Évaluation bâtimentaire</b> (spécialistes formés RBAT) : trouver les espaces de survie, protéger les sauveteurs, puis permettre le retour des habitants ; les termes « péril » / « péril imminent » sont des notions juridiques du DOS, à ne pas employer dans les messages.</li><li><b>Tranchée effondrée</b> : périmètre infranchissable = <b>2 × la profondeur</b> ; silence ; moteurs coupés ; minimum de personnel ; sonnette ; blindage ; sauveteurs amarrés ; aborder sans charger les bords (platelage, échelle, bastaings) ; coffrage près de la victime ; protéger sa tête et ses voies aériennes.</li><li><b>Grande ampleur</b> : 5 phases (MGO 1 à 5 = ASR 1 à 5 de l’INSARAG) : reconnaissance de la zone, des secteurs, victimes facilement accessibles, victimes ensevelies, déblaiement généralisé et recherche des corps.</li></ul>' }
  ],
  key: ['Principal risque du sauveteur : l’ensevelissement (effondrement secondaire).', '3 types d’effondrement : à plat, en V, en oblique ; espaces de survie.', 'Ne jamais déplacer un élément qui soutient des décombres.', 'Binôme, lentement, sonnette, silence pour entendre les craquements.', 'Primo-intervenants : périmètre puis victimes de surface.', 'Zonage rouge / orange / vert ; menace de ruine : 1,5 × la hauteur.', 'Tranchée : périmètre 2 × la profondeur, sauveteurs amarrés, blindage.', 'Unité USAR : 1 chef + 6 équipiers ; MGO en 5 phases.'],
  traps: ['Retirer une poutre ou un meuble qui calait des décombres.', 'Longer un mur fissuré.', 'Se pencher au bord d’une tranchée éboulée sans platelage.', 'Écrire « péril imminent » dans un message de renseignement.', 'Engager beaucoup de monde sur des décombres instables.'],
  quiz: [
    { q: 'Quel est le principal risque pour les sauveteurs en milieu effondré ?', c: ['L’ensevelissement par effondrement secondaire', 'La noyade', 'Le coup de chaleur', 'L’électrisation seule'], e: 'GDO USAR, chap. 2 § 2.1.', s: 'risques' },
    { q: 'Un élément (poutre, porte, meuble) soutient des décombres. Que faire ?', c: ['Ne jamais le déplacer : le contourner, sinon le sécuriser', 'Le retirer pour accéder plus vite', 'Le tirer avec une corde', 'Le découper immédiatement'], e: 'GDO USAR, chap. 3 § 1.', s: 'securite' },
    { q: 'Rôle de la « sonnette » :', c: ['Observer le secteur et alerter (sifflet) en cas de mouvement', 'Appeler les victimes', 'Tenir le registre des entrées', 'Diriger les secours'], e: 'GDO USAR, chap. 3.', s: 'securite' },
    { q: 'Périmètre de sécurité autour d’une tranchée effondrée :', c: ['2 fois la profondeur de la tranchée', '1,5 fois sa longueur', '5 m', '50 m'], e: 'GDO USAR, chap. 5 § 4.2.', s: 'usar' },
    { q: 'Périmètre réflexe autour d’un édifice menaçant ruine :', c: ['1,5 fois sa hauteur', '2 fois sa hauteur', '10 m', 'La largeur du trottoir'], e: 'GDO USAR, chap. 5 § 2.2.', s: 'usar' },
    { q: 'Une victime enfouie mais dans un espace suffisant pour survivre, souvent peu blessée, est dite :', c: ['Emmurée', 'Incarcérée', 'Ensevelie', 'Impliquée'], e: 'GDO USAR, chap. 2 § 2.2.', s: 'risques' },
    { q: 'Composition d’une unité USAR de base :', c: ['1 chef d’unité et 6 équipiers', '1 chef et 2 équipiers', '2 groupes', '4 équipes cynotechniques'], e: 'GDO USAR, chap. 4 § 3.1.1.1.', s: 'usar' },
    { q: 'Première mission des primo-intervenants une fois le périmètre posé :', c: ['Dégager les victimes de surface', 'Déblayer avec des engins lourds', 'Évaluer tous les bâtiments du quartier', 'Attendre sans rien faire'], e: 'GDO USAR, chap. 5 § 1.', s: 'usar' }
  ]
});

/* =====================================================================================
   GDO BATEAUX EN EAUX INTÉRIEURES
   ===================================================================================== */

var GDOITV = 'GDO Interventions sur les bateaux en eaux intérieures (DGSCGC, 10/2018)';

VSAV.chap({
  id: 'gn-bateaux-fluviaux', part: 'gn', seq: GN3,
  title: 'GDO Interventions sur les bateaux en eaux intérieures', short: 'GDO bateaux fluviaux', motif: 'wave',
  sources: [GDOITV],
  summary: 'Voies navigables, écluses et vocabulaire fluvial ; scénarios (incendie, collision, voie d’eau, pollution) ; analyse avec le capitaine, sauvetage selon la position du bateau, stabilité, pollution, sécurité de la zone et lutte contre le sinistre.',
  why: '<b>Pourquoi un guide pour les rivières et canaux ?</b> Le transport fluvial se développe (8 500 km de voies navigables, 53 millions de tonnes en 2017) et la Marne est traversée par des canaux. À bord, tout est contraint : accès réduit, <b>coque métallique qui conduit la chaleur</b>, mouvements du bateau, remous. Les eaux d’extinction menacent la <b>stabilité</b> du bateau et polluent la rivière.',
  sections: [
    { id: 'milieu', t: 'Connaître le milieu fluvial', ic: 'wave', src: GDOITV + ', lexique et chap. 1',
      html: '<p>Réseau classé par gabarit (classe 0 à 6), surtout de classe 1 (gabarit « Freycinet ») ; <b>VNF</b> gère 80 % du réseau. Nombreux ouvrages : barrages, <b>écluses</b> (jusqu’à plus de 20 m de chute), échelles d’écluses, ponts, tunnels.</p>' +
        '<div class="tw"><table><thead><tr><th>Terme</th><th>Sens</th></tr></thead><tbody><tr><td>Amont / aval</td><td>D’où vient / vers où descend le cours d’eau</td></tr><tr><td>Montant / avalant</td><td>Bateau qui remonte / descend le courant</td></tr><tr><td>Rive droite / gauche</td><td>Définies <b>en regardant vers l’aval</b> (un plaisancier qui remonte peut se tromper)</td></tr><tr><td>Bâbord / tribord</td><td>Gauche / droite du bateau en regardant vers l’avant</td></tr><tr><td>Bief</td><td>Section entre deux écluses</td></tr><tr><td>Bajoyer</td><td>Paroi latérale d’une écluse</td></tr><tr><td>Tirant d’eau / d’air</td><td>Hauteur immergée / hauteur au-dessus de l’eau</td></tr><tr><td>À couple</td><td>Bateaux amarrés côte à côte</td></tr></tbody></table></div>' +
        '<p>Accidents d’écluse : chute de personnes, écrasement entre bateau et bajoyers, bateau resté amarré pendant la vidange du sas, voie d’eau ; accès aux écluses parfois difficiles à trouver.</p>' },
    { id: 'appel', t: 'Scénarios et prise d’appel', ic: 'ecg', src: GDOITV + ', chap. 2 sections I à III',
      html: '<p>Les plus fréquents : <b>incendies et collisions</b>. Enjeux : victimes à bord ou à l’eau ; propagation à tout le bateau, aux bateaux voisins et aux pontons ; rupture d’amarres et dérive ; voie d’eau ; atteinte d’un ouvrage ; pollution de l’eau et de l’air ; perte de chargement.</p>' +
        '<ul class="check"><li>Localiser : commune, accès, <b>point kilométrique</b>, bief.</li><li>Situation du bateau : à quai, en route, à couple…</li><li>Requérant : témoin, capitaine, éclusier ; facteurs aggravants (matières dangereuses…).</li><li>Conseils : se tenir à distance, premiers secours, <b>repérer l’endroit où une victime a coulé</b>, baliser, guider les secours ; si le bateau est en route, privilégier sa <b>mise à quai</b> dans un lieu sans autre cible.</li></ul>' },
    { id: 'mesures', t: 'Les mesures opérationnelles', ic: 'target', src: GDOITV + ', chap. 2 section IV',
      html: '<p><b>Objectifs du COS</b> : limiter le nombre et l’aggravation des victimes, la propagation, préserver le bateau et les ouvrages, éviter les pollutions. <b>L’analyse se construit avec le capitaine</b> : position (à quai, à flots, échoué, coulé), capacité à manœuvrer, électricité et pompes du bord, <b>stabilité</b> (amarrage, gîte), moyens de secours du bord, environnement.</p>' +
        '<div class="tw"><table><thead><tr><th>Position</th><th>Sauvetage / mise en sécurité</th></tr></thead><tbody>' +
        '<tr><td>À quai</td><td>Évacuation complète à privilégier, en concertation avec le capitaine.</td></tr>' +
        '<tr><td>Dans une écluse</td><td>Jouer sur la hauteur d’eau, moyens aériens, LSPCC, milieu périlleux, déplacer le bateau (tunnel), mise à l’eau.</td></tr>' +
        '<tr><td>À flots</td><td>Dispositions du bateau, transbordement, échouage volontaire, mise à l’eau.</td></tr>' +
        '<tr><td>Échoué</td><td>Mise à l’eau si inaccessible (dispositif de récupération) ; surveiller la stabilité.</td></tr>' +
        '<tr><td>Coulé / renversé</td><td>Récupérer les personnes en surface ; recherches à bord en sauvetage subaquatique en surface non libre.</td></tr>' +
        '</tbody></table></div>' +
        '<p>En incendie, mettre les personnes à l’abri des fumées (transfert vertical ou horizontal) ; toujours un <b>décompte</b> vers une zone de débarquement.</p>' +
        '<ul class="check"><li><b>Pollution</b> : agir sur le flux, barrages flottants ; identifier les cibles en aval (captage, baignade).</li><li><b>Stabilité</b> : surveillée dès le début ; pomper au plus tôt ; renforcer amarrage ou ancrage. L’épuisement des eaux d’extinction se fait <b>au même débit que l’extinction</b>, même bateau sur cale.</li><li><b>Sécurité</b> : spécialistes du risque aquatique ; <b>gilet de sauvetage obligatoire pour les non-spécialistes</b> ; vigies en amont et en aval ; éclairage ; trafic interrompu (avis à la batellerie avec VNF, appel VHF, forces de l’ordre).</li><li><b>Incendie</b> : désaccoupler les bateaux à couple ; <b>refroidir coque, pont et amarres</b> (conduction) ; point de pénétration matérialisé, suivi des engagés, <b>binôme de sécurité</b> ; cheminement long et complexe → techniques de longue durée ou spécialistes ; relèves et soutien sanitaire ; ventilation seulement avec entrant et sortant cohérents.</li><li><b>Voie d’eau</b> : agir sur l’origine (vanne), colmater de l’intérieur (coussin, matelas + planche) ; si le débit entrant dépasse le pompage : confiner le local et renforcer les cloisons ; marquer le niveau d’eau pour suivre l’efficacité.</li><li><b>Avarie</b> : poussage ou remorquage vers un abri, à faible vitesse, points d’accroche multipliés, charge vers l’arrière ; sociétés spécialisées privilégiées.</li></ul>' }
  ],
  key: ['Rives définies en regardant vers l’aval ; bâbord à gauche vers l’avant.', 'Bief = entre deux écluses ; localiser par point kilométrique.', 'Incendies et collisions : sinistres les plus fréquents.', 'Analyse construite avec le capitaine ; stabilité surveillée dès le début.', 'Bateau en route : privilégier la mise à quai.', 'Gilet de sauvetage obligatoire pour les non-spécialistes ; vigies amont/aval.', 'Refroidir coque, pont et amarres (conduction thermique).', 'Épuiser les eaux d’extinction au même débit que l’extinction.'],
  traps: ['Noyer un bateau sous l’eau d’extinction sans pomper.', 'Oublier les amarres qui fondent et le bateau qui dérive.', 'Travailler en bord de quai sans gilet de sauvetage.', 'Laisser circuler les autres bateaux pendant l’intervention.'],
  quiz: [
    { q: 'La rive droite d’un cours d’eau est définie :', c: ['En regardant vers l’aval', 'En regardant vers l’amont', 'Selon le sens du bateau', 'Selon la carte IGN'], e: 'GDO bateaux, lexique.', s: 'milieu' },
    { q: 'Un « bief » est :', c: ['La section d’un cours d’eau comprise entre deux écluses', 'Le côté gauche du bateau', 'Un ponton de débarquement', 'La paroi d’une écluse'], e: 'GDO bateaux, lexique.', s: 'milieu' },
    { q: 'Pour un non-spécialiste du risque aquatique travaillant au bord de l’eau :', c: ['Le gilet de sauvetage est impératif', 'Le gilet est facultatif', 'L’ARI suffit', 'Aucune protection particulière'], e: 'GDO bateaux, chap. 2 section IV § 5.', s: 'mesures' },
    { q: 'Pourquoi refroidir la coque et les amarres pendant un feu de bateau ?', c: ['La coque conduit la chaleur et les amarres peuvent fondre ou brûler', 'Pour éviter la rouille', 'Pour faire couler le bateau', 'Ce n’est pas utile'], e: 'GDO bateaux, chap. 2 section IV § 6.', s: 'mesures' },
    { q: 'Les eaux d’extinction déversées dans un bateau doivent être :', c: ['Épuisées au même débit que l’extinction', 'Laissées dans la cale', 'Rejetées en amont', 'Pompées seulement après l’extinction'], e: 'GDO bateaux, chap. 2 section IV § 6.', s: 'mesures' },
    { q: 'Avec qui le COS construit-il l’analyse de la situation ?', c: ['Le capitaine du bateau', 'Le maire', 'Les passagers', 'La presse'], e: 'GDO bateaux, chap. 2 section IV § 1.', s: 'mesures' },
    { q: 'Un bateau sinistré est en route : on privilégie :', c: ['Sa mise à quai dans un lieu sans autre cible', 'Qu’il continue jusqu’au port suivant', 'Son abandon au milieu de la rivière', 'Son passage en écluse'], e: 'GDO bateaux, chap. 2 section III.', s: 'appel' }
  ]
});

/* =====================================================================================
   GTO SAUVETAGE ET MISE EN SÉCURITÉ
   ===================================================================================== */

var GTOSMS = 'GTO Sauvetage et mise en sécurité, V1.1 (DGSCGC, 2020)';

VSAV.chap({
  id: 'gn-sauvetage', part: 'gn', seq: GN3,
  title: 'GTO Sauvetage et mise en sécurité', short: 'GTO sauvetage', motif: 'rope',
  sources: [GTOSMS],
  summary: 'Sauvetage, mise en sécurité, confinement, évacuation ; principes d’exécution ; moyens élévateurs aériens et distances aux lignes électriques ; dégagements d’urgence ; LSPCC ; échelles à crochets et à coulisse.',
  why: '<b>Pourquoi le sauvetage est-il à part ?</b> Parce que « seuls les sauvetages ou mises en sécurité des personnes peuvent justifier une prise de risque réfléchie pour les sapeurs-pompiers engagés ». Mais même là, le COS choisit le moyen qui expose le moins le sauveteur et la victime, et le risque pris ne doit jamais se prolonger en intensité ni en durée.',
  sections: [
    { id: 'definitions', t: 'Sauvetage, mise en sécurité, confinement, évacuation', ic: 'list', src: GTOSMS + ', chap. 2 § 1',
      html: '<div class="tw"><table><thead><tr><th>Action</th><th>Définition</th></tr></thead><tbody>' +
        '<tr><td><b>Sauvetage</b></td><td>Soustraire une personne d’un <b>danger imminent</b> qui, sans aide, serait vouée à une mort certaine. De préférence par les <b>communications existantes</b> (les plus rapides et sûres), sinon par l’extérieur (MEA, échelles, LSPCC).</td></tr>' +
        '<tr><td><b>Mise en sécurité</b></td><td>Protéger d’une menace plus ou moins différée : déplacement commandé et accompagné vers une zone sûre, ou à défaut confinement.</td></tr>' +
        '<tr><td><b>Confinement</b></td><td>Laisser les personnes où elles sont, à l’abri ; préférable quand le trajet d’évacuation est trop risqué.</td></tr>' +
        '<tr><td><b>Évacuation</b></td><td>Faire quitter préventivement une zone de danger évolutif, cadrée et accompagnée (éviter la panique).</td></tr>' +
        '</tbody></table></div>' +
        '<p>Feux de forêts : confinement la règle, évacuation l’exception ; l’évacuation est décidée par le DOS sur proposition du COS. L’<b>opérateur de salle</b> est le premier acteur des sauvetages : il guide le requérant jusqu’à l’arrivée des secours.</p>' +
        '<p><b>Principes d’exécution</b> : analyser l’environnement, la victime (comportement, état), le sauveteur et son matériel, le temps (urgence, cinétique) ; chaque intervenant est acteur de sa propre sécurité ; le conducteur descend systématiquement les échelles et les met en attente pour gagner du temps.</p>' },
    { id: 'mea', t: 'Moyens élévateurs aériens', ic: 'alert', src: GTOSMS + ', chap. 1 § 2',
      html: '<p>Dangers : heurt d’obstacles (balcons, cheminées, antennes, arbres), lignes électriques parfois masquées par la fumée ou le brouillard, vent (abaque du constructeur), foudre. Sapeurs-pompiers dans le panier <b>obligatoirement amarrés</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Ligne</th><th>Distance de sécurité minimale</th></tr></thead><tbody><tr><td>Basse tension (240/400 V)</td><td>1 m</td></tr><tr><td>Ligne de contact de tramway</td><td>3 m</td></tr><tr><td>Caténaires SNCF</td><td>3 m</td></tr><tr><td>HTA (1 000 à 20 000 V)</td><td>3 m</td></tr><tr><td>HTB (&gt; 50 000 V)</td><td>5 m</td></tr></tbody></table></div>' +
        '<p>Distances à <b>augmenter s’il pleut ou si une lance est établie</b> à proximité ; mieux vaut choisir un emplacement très dégagé. Positions : axe avant (portée réduite), axe arrière (portée maximale), pivotement à 90° (portée maximale si stabilisation maximale) ; éviter les angles intermédiaires à 45° (un seul stabilisateur).</p>' },
    { id: 'degagement', t: 'Dégagements d’urgence et LSPCC', ic: 'hand', src: GTOSMS + ', chap. 3 § 2 et 3',
      html: '<p>Le <b>dégagement d’urgence</b> (sauvetage sans matériel) déplace la victime de quelques mètres en quelques secondes vers un lieu sûr, <b>seulement si le danger est réel, immédiat, vital et non contrôlable</b>. Sans matériel : traction par les poignets, par les chevilles, avec équipier-relais, « porter pompier ». Avec matériel : plan dur, grande sangle du lot de sauvetage.</p>' +
        '<p><b>LSPCC</b> : alternative quand les communications existantes et les échelles sont impossibles ; validé par le COS. Facteur de chute &gt; 1 interdit, = 1 à éviter ; effet pendulaire ; syndrome du harnais ; frottements.</p>' +
        '<p class="small muted">Détails : <a href="#/c/inc-lspcc">Les sauvetages au moyen du LSPCC</a>, <a href="#/c/ce-sauvetage-ext">Sauvetage par l’extérieur au LSPCC</a>, <a href="#/c/ppbe-lspcc-emploi">Le LSPCC en PPBE</a>.</p>' },
    { id: 'echelles', t: 'Sauvetages aux échelles', ic: 'list', src: GTOSMS + ', chap. 3 § 4 à 6',
      html: '<ul class="check"><li><b>Échelle à crochets</b> : progression de balcon en balcon ou de rebord en rebord ; descente d’une victime valide (seule ou accompagnée) ou invalide ; prolongement d’une échelle à coulisse.</li><li><b>Échelle à coulisse 2 plans</b> : sauvetage d’une victime valide ; victime invalide ou inconsciente par la technique à trois ou à deux sapeurs-pompiers ; échelle utilisable sur le toit d’un engin ; victime en excavation.</li><li><b>Échelle à coulisse en itinéraire de secours</b> : amarrée par le haut ou bloquée au sol, pied d’échelle augmenté pour l’évacuation rapide des sapeurs-pompiers.</li><li><b>MEA</b> avec ou sans panier de secours, victime valide, suspendue dans le vide ou invalide.</li></ul>' +
        '<p class="small muted">Voir <a href="#/c/inc-echelles">Les échelles à main et l’échelle aérienne</a> et <a href="#/c/inc-sauvetage">Sauvetages et mises en sécurité</a>.</p>' }
  ],
  key: ['Seuls les sauvetages et mises en sécurité justifient une prise de risque réfléchie.', 'Sauvetage : danger imminent ; d’abord par les communications existantes.', 'Mise en sécurité : menace différée ; déplacement accompagné ou confinement.', 'Évacuation décidée par le DOS sur proposition du COS.', 'Distances MEA : BT 1 m, tram/SNCF/HTA 3 m, HTB 5 m, augmentées par pluie ou lance.', 'Personnel du panier toujours amarré.', 'Dégagement d’urgence seulement si danger réel, immédiat, vital, non contrôlable.', 'LSPCC : alternative validée par le COS ; fc > 1 interdit.'],
  traps: ['Sauver par l’extérieur alors que l’escalier est praticable.', 'Approcher l’échelle aérienne d’une ligne HTA à 2 m sous la pluie.', 'Faire un dégagement d’urgence sans danger immédiat (risque d’aggraver la victime).', 'Évacuer un camping sous un feu de forêt au lieu de confiner.'],
  quiz: [
    { q: 'Le sauvetage doit être opéré de préférence :', c: ['Par les communications existantes', 'Par l’échelle aérienne systématiquement', 'Par le LSPCC', 'Par le toit'], e: 'GTO sauvetage, chap. 2 § 1.1.1.', s: 'definitions' },
    { q: 'Distance de sécurité minimale d’un MEA à une ligne HTB (> 50 000 V) :', c: ['5 m', '1 m', '3 m', '50 cm'], e: 'GTO sauvetage, chap. 1 § 2.3.2.', s: 'mea' },
    { q: 'Distance minimale à une ligne basse tension :', c: ['1 m', '5 m', '3 m', '10 m'], e: 'GTO sauvetage, chap. 1 § 2.3.2.', s: 'mea' },
    { q: 'Un dégagement d’urgence n’est réalisé que si le danger est :', c: ['Réel, immédiat, vital et non contrôlable', 'Probable dans l’heure', 'Signalé par un témoin', 'Électrique uniquement'], e: 'GTO sauvetage, chap. 3 § 2.', s: 'degagement' },
    { q: 'Quelles actions peuvent justifier une prise de risque réfléchie des sapeurs-pompiers ?', c: ['Seulement les sauvetages et mises en sécurité de personnes', 'La protection des biens de valeur', 'L’extinction rapide', 'La sauvegarde des véhicules'], e: 'GTO sauvetage, chap. 2 § 1.', s: 'definitions' },
    { q: 'Le confinement est préférable à l’évacuation quand :', c: ['Le trajet d’évacuation fait prendre un risque trop important', 'Les personnes le souhaitent', 'Il fait nuit', 'Le feu est éteint'], e: 'GTO sauvetage, chap. 2 § 1.1.2.', s: 'definitions' },
    { q: 'Les sapeurs-pompiers dans le panier d’un MEA doivent :', c: ['Être obligatoirement amarrés', 'Se tenir à la rambarde seulement', 'Retirer leur casque', 'Être au moins quatre'], e: 'GTO sauvetage, chap. 1 § 2.5.', s: 'mea' }
  ]
});

/* =====================================================================================
   GDO INTERVENTIONS EN MILIEU AGRICOLE
   ===================================================================================== */

var GDOAGRI = 'GDO Interventions en milieu agricole (DGSCGC, 2019)';

VSAV.chap({
  id: 'gn-agricole', part: 'gn', seq: GN3,
  title: 'GDO Interventions en milieu agricole', short: 'GDO milieu agricole', motif: 'grid',
  sources: [GDOAGRI],
  summary: 'Un milieu isolé, à la DECI souvent faible, qui cumule les risques : engrais (ammonitrates), phytosanitaires, méthanisation, fosses à lisier (H₂S), machines agricoles, fourrage qui fermente, animaux, munitions. Conduite à tenir pour les incendies, accidents, explosions et pollutions.',
  why: '<b>Pourquoi ce guide concerne-t-il le VSAV ?</b> Les machines agricoles sont la <b>première cause d’accident grave</b> des agriculteurs (plus de 50 décès par an : renversements de tracteur, happements, écrasements) et les désincarcérations y sont longues. Les <b>fosses à lisier</b> libèrent de l’<b>H₂S</b>, mortel et inodore à forte concentration : un « malaise dans une fosse » est un piège qui a déjà tué des sauveteurs.',
  sections: [
    { id: 'contexte', t: 'Un milieu particulier', ic: 'pin', src: GDOAGRI + ', chap. 1',
      html: '<ul class="check"><li>Motifs variés : feux (bâtiments, engins, champs, produits dangereux), <b>SUAP</b>, accidents du travail et de la circulation, animaux, fuites, pollutions.</li><li><b>DECI</b> souvent insuffisante (exploitations isolées) : penser aux réserves, forages et systèmes d’irrigation de l’exploitant ; anticiper les porteurs d’eau.</li><li><b>Accès</b> parfois difficiles (fermes isolées, montagne) ; aux abords des bâtiments, des <b>fosses</b> peuvent s’effondrer sous un engin ou piéger un sapeur-pompier.</li><li>Exploitations diversifiées : gîtes, fermes pédagogiques, centres équestres (public).</li><li>Partenaires : chambre d’agriculture, services vétérinaires (DDPP), ARS, DREAL, Office de la biodiversité, réseau RADART, INERIS (cellule d’appui 24 h/24).</li></ul>' },
    { id: 'risques', t: 'Les principales sources de risque', ic: 'alert', src: GDOAGRI + ', chap. 2',
      html: '<div class="tw"><table><thead><tr><th>Source</th><th>Danger principal</th></tr></thead><tbody>' +
        '<tr><td><b>Ammonitrates</b> (engrais azotés haut dosage, 33,5 %)</td><td>Comburants ; décomposition avec gaz toxiques (NOx…) ; <b>détonation possible</b> s’ils sont contaminés (matière organique, hydrocarbures, eaux d’extinction…) et chauffés ou confinés.</td></tr>' +
        '<tr><td><b>Engrais composés NPK/NK</b></td><td>Décomposition <b>auto-entretenue</b> qui continue sans source de chaleur, avec fumées toxiques.</td></tr>' +
        '<tr><td><b>Produits phytosanitaires</b></td><td>Fumées très toxiques, aérosols et solvants inflammables, pollution.</td></tr>' +
        '<tr><td><b>Méthanisation</b> (biogaz)</td><td>Méthane (explosion), CO₂, CO, <b>H₂S</b> (toxique), pollution.</td></tr>' +
        '<tr><td><b>Alcools, chais</b></td><td>Vapeurs inflammables ; <b>CO₂ de fermentation</b> en espace confiné (asphyxie).</td></tr>' +
        '<tr><td><b>Lisier, fosses</b></td><td>CO₂, CH₄, NH₃ et surtout <b>H₂S</b> : odeur d’œuf pourri à très faible dose, <b>inodore dès 150 ppm</b>, mortel ; bouffée toxique à la rupture de la croûte ; effondrement des caillebotis (pré-fosses de 0,5 à 2,5 m).</td></tr>' +
        '<tr><td><b>Machines agricoles</b></td><td>Renversement, happement par les pièces en rotation, écrasement, contact avec une ligne électrique ; incendie (jusqu’à 900 L de carburant et 450 L d’huile sur une moissonneuse), effet missile.</td></tr>' +
        '<tr><td><b>Fourrage</b></td><td><b>Fermentation</b> : danger au-delà de 45 °C à cœur, <b>auto-combustion possible dès 70 °C</b> ; signes : vapeur, odeur de « roussi », tassement ; chute des balles, « cheminées » cachées.</td></tr>' +
        '<tr><td><b>Élevages</b></td><td>Animaux paniqués, divagation, <b>zoonoses</b> (toute morsure ou coup expose à l’infection) ; bâtiments avicoles et porcins très isolés (mousses) : EGE, explosion de fumées, structure métallique fragile.</td></tr>' +
        '<tr><td><b>Explosifs et munitions</b></td><td>Munitions anciennes découvertes en terre.</td></tr>' +
        '</tbody></table></div>' },
    { id: 'incendies', t: 'Incendies : les consignes clés', ic: 'flame', src: GDOAGRI + ', chap. 3 sect. II-1',
      html: '<ul class="check"><li><b>Reconnaissance</b> avec l’exploitant : accès, risques et enjeux, points d’eau, structure, ventilation (statique ou dynamique), stockages, nombre d’animaux.</li><li><b>Sauvetages</b> de personnes en priorité ; pour les animaux, analyser le bénéfice/risque avant d’engager.</li><li><b>Engrais</b> : zone d’exclusion de <b>200 m</b> (contrôlée 200 à 300 m), écarter les engrais non touchés, éviter l’accumulation d’engrais fondu en milieu confiné, attaque massive à l’eau, lances fixées, CMIC.</li><li><b>Phytosanitaires</b> : zone contrôlée de <b>100 m</b>, ARI, confinement ou évacuation selon le vent, mousse en second temps, rétention des eaux, déblai sous ARI.</li><li><b>Engins</b> : mettre le conducteur en sécurité, mousse si beaucoup d’huile ou de carburant, attention aux éclatements.</li><li><b>Animaux</b> : agir dans le calme, détacher et parquer, <b>empêcher le retour des bêtes au feu</b> (très fréquent), vétérinaire.</li><li><b>Élevage avicole ou porcin</b> sans sauvetage humain : <b>personne à l’intérieur</b>, attaque par l’extérieur.</li><li><b>Récoltes sur pied</b> : risque d’hyperthermie du personnel, pénétrer par la zone brûlée, attention aux fossés.</li><li>« Laisser brûler » possible dans certaines conditions, décision du DOS après concertation.</li><li>Collaboration de l’agriculteur et de ses engins possible, mais le <b>COS reste responsable</b> de leur sécurité.</li><li>Déblai : toiture en <b>fibrociment</b> = amiante possible → strict nécessaire, sous protection respiratoire, matériaux humidifiés.</li></ul>' },
    { id: 'accidents', t: 'Accidents, fosses et animaux', ic: 'ambulance', src: GDOAGRI + ', chap. 3 sect. II-2',
      steps: [
        'Baliser (suraccident) ; attention aux lignes électriques en contact avec l’engin.',
        'Mettre l’engin en sécurité : coupure, calage.',
        'Victime coincée dans ou sous une machine : anticiper le matériel de désincarcération et le levage lourd ; demander tôt les vecteurs d’évacuation.',
        'Fosse à lisier : détecteur multigaz indispensable ; ne jamais descendre sans ARI ; risque d’anoxie et de toxicité (H₂S).',
        'Animaux : limiter le deux-tons, périmètre de sécurité selon l’espèce, conseils du propriétaire et du vétérinaire, lieu de regroupement.',
        'Pollution : maîtriser l’eau projetée, levées de terre, obturer les égouts, services spécialisés.'
      ], stepsTitle: 'Accident en milieu agricole' },
    { id: 'explosion', t: 'Méthanisation, munitions et pollutions', ic: 'blast', src: GDOAGRI + ', chap. 3 sect. II-3 et II-4',
      html: '<ul class="check"><li><b>Unité de méthanisation</b> : EPI et ARI, <b>engins à 100 m au moins</b>, détecteur multigaz, appareils non antidéflagrants laissés aux engins, minimum de personnel sous protection hydraulique ; avec l’exploitant, fermer les vannes d’intrants et de sortie du biogaz ; relevés réguliers (CH₄, CO, H₂S, NH₃…).</li><li><b>Munitions découvertes</b> : éloigner le public, zone d’exclusion de <b>100 m minimum</b>, <b>ne pas toucher</b>, ne pas arroser ni recouvrir, pas de radio à proximité, pas de vibrations, pas de garde à côté (même en véhicule) ; démineurs.</li><li><b>Pollutions</b> (lait, alcool, lisier, engrais…) : origine et nature, colmater, retenir, protéger les captages d’eau, éviter le contact avec les eaux polluées, hygiène des mains.</li></ul>' }
  ],
  key: ['Milieu isolé, DECI faible : anticiper l’eau et les renforts.', 'Machines agricoles : 1re cause d’accident grave ; désincarcérations longues.', 'Fosse à lisier : H₂S inodore dès 150 ppm, mortel ; détecteur et ARI.', 'Ammonitrates : comburants, détonation possible s’ils sont contaminés ; 200 m.', 'Phytosanitaires : 100 m, ARI, eaux d’extinction retenues.', 'Fourrage : auto-combustion possible dès 70 °C.', 'Animaux : calme, parquer, empêcher le retour au feu.', 'Munitions : 100 m, ne pas toucher, pas de radio, démineurs.'],
  traps: ['Descendre dans une fosse à lisier pour secourir une victime sans ARI.', 'Se fier à l’odeur d’œuf pourri pour juger la présence d’H₂S.', 'Engager du personnel dans un bâtiment avicole en feu sans sauvetage à faire.', 'Laisser les animaux libérés revenir vers le bâtiment en feu.', 'Rouler près des fosses avec un engin lourd.', 'Arroser ou recouvrir une munition découverte.'],
  quiz: [
    { q: 'À partir de quelle concentration l’H₂S devient-il inodore ?', c: ['Environ 150 ppm', '0,02 ppm', '1 ppm', 'Il est toujours inodore'], e: 'GDO milieu agricole, chap. 2 sect. VII.', s: 'risques' },
    { q: 'Victime inconsciente au fond d’une fosse à lisier : que faire ?', c: ['Ne pas descendre sans détecteur et ARI ; ventiler et engager des moyens adaptés', 'Descendre immédiatement sans protection', 'Jeter une corde à la victime', 'Attendre qu’elle remonte seule'], e: 'GDO milieu agricole, chap. 3 sect. II-2 et II-4.', s: 'accidents' },
    { q: 'À partir de quelle température à cœur un fourrage peut-il basculer en auto-combustion ?', c: ['70 °C', '20 °C', '45 °C est toujours normal et sans risque', '150 °C'], e: 'GDO milieu agricole, chap. 2 sect. IX.', s: 'risques' },
    { q: 'Feu en présence d’engrais : quelle zone d’exclusion ?', c: ['200 m', '20 m', '50 m', '1 km'], e: 'GDO milieu agricole, chap. 3 sect. II-1.', s: 'incendies' },
    { q: 'Feu de bâtiment d’élevage avicole sans personne à sauver :', c: ['Aucun sapeur-pompier ne s’engage à l’intérieur ; attaque par l’extérieur', 'Attaque intérieure immédiate', 'On ouvre toutes les portes et on entre', 'On attend sans rien faire'], e: 'GDO milieu agricole, chap. 3 sect. II-1.', s: 'incendies' },
    { q: 'Que faire face à une munition découverte dans un champ ?', c: ['Éloigner le public, 100 m minimum, ne pas toucher, appeler les démineurs', 'La déplacer à l’écart', 'L’arroser pour la refroidir', 'La recouvrir de terre'], e: 'GDO milieu agricole, chap. 3 sect. II-3.', s: 'explosion' },
    { q: 'Lors d’un feu, les animaux libérés ont souvent tendance à :', c: ['Retourner vers le bâtiment en feu', 'Fuir très loin définitivement', 'Rester immobiles', 'Se coucher'], e: 'GDO milieu agricole, chap. 3 sect. II-1.', s: 'incendies' },
    { q: 'Près d’une unité de méthanisation, à quelle distance stationner les engins ?', c: ['À 100 m au moins', 'Au contact du digesteur', 'À 10 m', 'Peu importe'], e: 'GDO milieu agricole, chap. 3 sect. II-3.', s: 'explosion' }
  ]
});

/* =====================================================================================
   GTO SECOURS EN MILIEU PÉRILLEUX ET MONTAGNE
   ===================================================================================== */

var GTOSMPM = 'GTO Secours en milieu périlleux et montagne, 1re édition (DGSCGC, 06/2021)';
var GDOMPM2 = 'GDO Interventions en milieu périlleux et montagne, 2e édition (DGSCGC, 06/2021)';

VSAV.chap({
  id: 'gn-smpm-techniques', part: 'gn', seq: GN3,
  title: 'GTO Secours en milieu périlleux et montagne', short: 'GTO SMPM', motif: 'rope',
  sources: [GTOSMPM, GDOMPM2],
  summary: 'Les techniques réservées aux spécialistes SMPM vues par l’équipier : la chaîne ancrage-amarrage-dispositif-charge, le facteur de chute et la force choc, le syndrome du harnais, les civières, l’évacuation en façade des personnes de forte corpulence et le point chaud.',
  why: '<b>Pourquoi l’équipier VSAV doit-il connaître ces techniques ?</b> Parce qu’il accueille la victime à la sortie de la civière et qu’il peut demander ces moyens : une <b>personne de forte corpulence ou lourdement médicalisée</b> qu’on ne peut descendre par l’escalier, une victime <b>suspendue inconsciente dans un harnais</b> (péril imminent), un blessé mouillé et froid qu’une simple couverture de survie ne protège pas.',
  sections: [
    { id: 'systeme', t: 'La notion de système', ic: 'rope', src: GTOSMPM + ', chap. 2',
      html: '<p>Toute manœuvre repose sur une chaîne : <b>ancrage</b> (point solide : arbre, rocher, structure) → <b>amarrage</b> (liaison entre l’ancrage et le dispositif) → <b>dispositif</b> (porteur, équipement, environnement civière, translation : treuil, frein de charge, contrepoids) → <b>charge</b> (victime, secouriste, animal, matériel) → <b>spécialiste</b>.</p>' +
        '<p>La <b>charge</b> est le point central de la mission : tout vise son confort, sa fluidité de déplacement et sa sécurité. Les accidents en milieu périlleux sont surtout d’<b>origine humaine</b>. Les techniques ne sont mises en œuvre que par des personnels habilités à la spécialité.</p>' },
    { id: 'chute', t: 'Facteur de chute, force choc et syndrome du harnais', ic: 'alert', src: GTOSMPM + ', chap. 3',
      html: '<ul class="check"><li><b>Facteur de chute</b> = hauteur de chute ÷ longueur de corde qui amortit la chute (de 0 à 2). Les frottements réduisent la corde efficace : le facteur réel est toujours <b>plus élevé</b> que le facteur théorique.</li><li><b>Force choc</b> : dépend de la corde, du facteur de chute et du poids ; un système d’arrêt des chutes doit la limiter à <b>600 daN</b>.</li></ul>' +
        '<div class="callout bad"><b>Victime inconsciente suspendue dans un harnais</b>Son espérance de vie est <b>limitée</b> : position, relâchement musculaire et autres phénomènes provoquent des troubles graves et rapides de la ventilation et de la circulation, aggravés par l’hypothermie ou les chutes de matériaux. C’est un <b>péril imminent</b> : les techniques de sauvetage (par le haut, par le bas) doivent être parfaitement maîtrisées.</div>' },
    { id: 'civieres', t: 'Civières et techniques d’évacuation', ic: 'stretcher', src: GTOSMPM + ', chap. 1 et 4',
      html: '<p>Plusieurs types de civières selon le milieu : <b>verticalisable</b> (espace confiné), milieu vertical, neige ou glacier, <b>forte corpulence</b>, hélicoptère. Le conditionnement de la victime relève des <b>gestes de secourisme</b>, traditionnels ou adaptés.</p>' +
        '<div class="tw"><table><thead><tr><th>Technique</th><th>Usage</th></tr></thead><tbody><tr><td>Plan incliné</td><td>Civière glissée ou portée en suivant la pente</td></tr><tr><td>Secours en paroi</td><td>Civière <b>toujours accompagnée</b> d’un spécialiste qui la guide et surveille la victime ; corde d’assurance</td></tr><tr><td>Cacolet</td><td>Victime portée sur le dos du sauveteur quand son état ne nécessite pas de civière</td></tr><tr><td>Cordes tendues (tyrolienne)</td><td>Franchir un vide ou un cours d’eau, horizontalement ou en oblique</td></tr><tr><td>Balancier contrepoids</td><td>Remontée rapide et simple d’une civière</td></tr><tr><td><b>Évacuation en façade</b> (TEF)</td><td>Sortir d’un bâtiment une personne de <b>forte corpulence</b> ou lourdement médicalisée quand les moyens courants sont insuffisants</td></tr><tr><td>Installations téléportées</td><td>Évacuation de télésièges ou télécabines à la demande du chef d’exploitation</td></tr></tbody></table></div>' +
        '<p>Après l’extraction, un <b>brancardage</b> est souvent nécessaire avant la remise au vecteur d’évacuation.</p>' },
    { id: 'pointchaud', t: 'Le point chaud', ic: 'snow', src: GTOSMPM + ', chap. 1 § 2.3.1 et chap. 4 § 8',
      html: '<p>En ambiance froide ou humide, <b>une couverture de survie seule ne suffit pas</b> pour un blessé mouillé. Le point chaud est un abri isolé et chauffé pour <b>reposer, réchauffer, réhydrater et restaurer</b> la victime en attendant l’équipe médicale ou l’évacuation.</p>' +
        '<ul class="check"><li>Victime allongée avec deux personnes accroupies à ses côtés.</li><li>Kit minimal : bâche au sol, ficelle, <b>6 couvertures de survie renforcées</b>, points de fixation, pinces, source de chaleur (bougie, carbure, réchaud), nourriture.</li><li>Principe de l’igloo : une <b>fosse à air froid</b> en point bas, le blessé placé en hauteur dans la bulle d’air chaud, l’assistant entrant <b>par-dessous</b> sans ouvrir l’abri.</li><li>Deux montages : le <b>banc</b> (gros blocs isolés) et l’<b>étagère</b> (plateforme creusée dans une pente).</li></ul>' +
        '<p class="small muted">Rappel secouriste : <a href="#/c/gn-perilleux">GDO milieu périlleux et montagne</a> pour les milieux et la conduite des opérations.</p>' }
  ],
  key: ['Chaîne : ancrage → amarrage → dispositif → charge → spécialiste.', 'La charge (victime) est au centre de la mission.', 'Facteur de chute réel > théorique ; force choc limitée à 600 daN.', 'Victime inconsciente suspendue dans un harnais = péril imminent.', 'Civière en paroi toujours accompagnée ; cacolet si l’état le permet.', 'Évacuation en façade pour forte corpulence ou victime lourdement médicalisée.', 'Point chaud : couverture de survie seule insuffisante pour un blessé mouillé.'],
  traps: ['Croire qu’une victime suspendue « peut attendre » les spécialistes sans risque.', 'Penser qu’une couverture de survie suffit pour un blessé mouillé dans le froid.', 'S’improviser cordiste sans habilitation SMPM.', 'Oublier qu’un brancardage suit souvent l’extraction.'],
  quiz: [
    { q: 'Comment calcule-t-on le facteur de chute ?', c: ['Hauteur de chute divisée par la longueur de corde qui amortit la chute', 'Poids multiplié par la hauteur', 'Longueur de corde divisée par le poids', 'Hauteur de chute en mètres'], e: 'GTO SMPM, chap. 3 § 2.1.', s: 'chute' },
    { q: 'Une personne inconsciente suspendue dans un harnais :', c: ['A une espérance de vie limitée : péril imminent', 'Est en sécurité tant que le harnais tient', 'Peut attendre plusieurs heures', 'Doit être laissée suspendue jusqu’au SMUR'], e: 'GTO SMPM, chap. 3 § 5.', s: 'chute' },
    { q: 'Quelle technique permet de sortir d’un bâtiment une personne de forte corpulence quand l’escalier est impraticable ?', c: ['Une technique d’évacuation en façade (TEF)', 'Le cacolet de sentier', 'La tyrolienne horizontale', 'Le point chaud'], e: 'GTO SMPM, chap. 4 § 6.', s: 'civieres' },
    { q: 'Dans un point chaud, où place-t-on le blessé ?', c: ['En hauteur, dans la bulle d’air chaud, au-dessus de la fosse à air froid', 'Au point le plus bas', 'À l’entrée de l’abri', 'À l’extérieur'], e: 'GTO SMPM, chap. 4 § 8.', s: 'pointchaud' },
    { q: 'Lors d’un secours en paroi, la civière est :', c: ['Systématiquement accompagnée d’un spécialiste', 'Descendue seule', 'Toujours hélitreuillée', 'Remplacée par un cacolet'], e: 'GTO SMPM, chap. 4 § 3.2.', s: 'civieres' },
    { q: 'La plupart des accidents en milieu périlleux sont d’origine :', c: ['Humaine', 'Matérielle', 'Météorologique', 'Animale'], e: 'GTO SMPM, chap. 2 § 2.5.', s: 'systeme' }
  ]
});

/* =====================================================================================
   GTO SECOURS EN MILIEUX EFFONDRÉS OU INSTABLES (USAR)
   ===================================================================================== */

var GTOUSAR = 'GTO Secours en milieux effondrés ou instables, 1re édition (DGSCGC, 09/2021)';

VSAV.chap({
  id: 'gn-usar-techniques', part: 'gn', seq: GN3,
  title: 'GTO Secours en milieux effondrés ou instables', short: 'GTO USAR', motif: 'grid',
  sources: [GTOUSAR],
  summary: 'Les techniques des unités de sauvetage, d’appui et de recherche (USAR) : évaluation du risque bâtimentaire, marquage des bâtiments et des chantiers, recherche des victimes (chiens, écoute, « silence sur le chantier »), et sauvetage en décombres avec barquette.',
  why: '<b>Pourquoi l’équipier VSAV doit-il le connaître ?</b> Après une explosion de gaz ou un effondrement, le VSAV reçoit les victimes extraites des décombres et travaille au milieu des équipes USAR. Savoir lire un <b>marquage</b>, respecter le <b>« silence sur le chantier »</b> pendant l’écoute et connaître les limites des manœuvres de descente (victime en détresse circulatoire) évite des erreurs graves.',
  sections: [
    { id: 'evaluation', t: 'Évaluer le risque bâtimentaire', ic: 'eye', src: GTOUSAR + ', chap. 2',
      html: '<p>L’évaluation bâtimentaire est une estimation <b>qualitative et rapide</b> des dommages pour engager les équipes par les meilleurs accès et signaler les zones les plus dangereuses ; son objectif unique est la <b>mise en sécurité des personnes</b>. Les dommages sont relevés sur une fiche (EBRAS) et le bâtiment est classé de <b>vert à noir</b> ; une affiche est fixée à l’accès (poignée, portail).</p>' },
    { id: 'marquage', t: 'Marquer la zone d’intervention', ic: 'clip', src: GTOUSAR + ', chap. 3',
      html: '<ul class="check"><li>Le marquage évite que des équipes successives refassent le même travail ; il est placé près de l’entrée, bien visible, dans une couleur contrastée.</li><li><b>Faces</b> du bâtiment : côté rue principale = <b>1</b>, puis 2, 3, 4 dans le sens des aiguilles d’une montre.</li><li><b>Intérieur</b> : quadrants A, B, C, D dans le sens des aiguilles d’une montre à partir de l’angle des faces 1 et 2 ; <b>E</b> = partie centrale (hall, ascenseurs, escaliers).</li><li><b>Étages</b> : rez-de-chaussée, étage 1, 2… et sous-sol 1, 2…</li><li><b>Rubalise</b> pour les zones de travail ; marquage des zones dangereuses ; marquage des chantiers selon le système international <b>INSARAG</b> (en français : dangers, entrée, identification du SIS, travail terminé).</li></ul>' },
    { id: 'recherche', t: 'Rechercher les victimes', ic: 'target', src: GTOUSAR + ', chap. 4',
      html: '<ul class="check"><li>Recueillir auprès des rescapés et témoins qui était présent et où, pour cibler les recherches.</li><li>Les <b>équipes cynotechniques</b> sont engagées en premier dès que possible : mobiles, rapides, efficaces même dans le bruit, détectent les victimes inconscientes ou décédées ; le chien se fatigue (repos 30 min après 15 à 25 min de travail) et perd la trace si trop de monde passe sur la zone.</li><li><b>Écoute</b> : détection puis localisation avec des capteurs ; <b>pas de radio</b> chez les opérateurs.</li></ul>' +
        '<div class="callout warn"><b>« Silence sur le chantier ! »</b>Au coup de sifflet ou de corne de brume, toute discussion et tout travail cessent. Écoute d’ambiance, puis <b>appel</b> à la masselotte : <b>5 coups rapprochés puis 3 coups espacés</b>. La victime répond souvent en imitant le rythme, en tapant ou en grattant. Une détection doit être confirmée par une autre équipe ou un chien.</div>' },
    { id: 'sauvetage', t: 'Le sauvetage en décombres', ic: 'stretcher', src: GTOUSAR + ', chap. 9',
      html: '<ul class="check"><li>Choix de la méthode selon le lieu, la météo, le nombre et l’état des victimes, les dangers secondaires, le matériel et le personnel.</li><li>Sécurité : tenue adaptée, règles de progression en décombres, <b>protection contre les chutes</b> pour tout intervenant en zone effondrée ou en hauteur, <b>main courante</b>, détection de gaz et protection respiratoire si besoin.</li><li><b>Glissade</b> : la victime conditionnée et arrimée dans une <b>barquette</b> descend en glissant sur une échelle à coulisse inclinée, freinée par une corde ; au moins 6 sauveteurs ; casque, lunettes et couverture pour la victime, qui est <b>rassurée</b> par un sauveteur qui l’accompagne.</li><li>La <b>charnière</b> permet de descendre en gardant la barquette horizontale.</li></ul>' +
        '<div class="callout bad"><b>Victime en détresse circulatoire</b>La glissade (déplacement non horizontal) est <b>déconseillée sans avis médical</b> ; préférer une technique qui conserve l’horizontalité.</div>' +
        '<p class="small muted">Doctrine et sécurité des primo-intervenants : <a href="#/c/gn-usar">GDO milieux effondrés ou instables</a>.</p>' }
  ],
  key: ['Évaluation bâtimentaire rapide, classement vert à noir, affiche à l’accès.', 'Faces 1 à 4 (1 = rue principale), quadrants A à D + E central.', 'Marquage INSARAG pour éviter les doublons.', 'Chiens engagés en premier si possible.', '« Silence sur le chantier » ; appel 5 coups + 3 coups.', 'Barquette : victime arrimée, casquée, rassurée.', 'Détresse circulatoire : pas de glissade sans avis médical.'],
  traps: ['Parler ou utiliser la radio pendant une phase d’écoute.', 'Piétiner une zone de recherche avant le passage des chiens.', 'Évacuer en glissade inclinée une victime en état de choc sans avis médical.', 'Progresser en hauteur sur des décombres sans protection contre les chutes.'],
  quiz: [
    { q: 'Comment est numérotée la face d’un bâtiment côté rue principale ?', c: ['1', 'A', '4', 'E'], e: 'GTO USAR, chap. 3 § 2.1.', s: 'marquage' },
    { q: 'Que signifie le quadrant E à l’intérieur d’un bâtiment ?', c: ['La partie centrale : hall, ascenseurs, escaliers', 'L’entrée', 'L’étage', 'L’extérieur'], e: 'GTO USAR, chap. 3 § 2.1.', s: 'marquage' },
    { q: 'Au commandement « Silence sur le chantier » :', c: ['Toute discussion et tout travail cessent dans la zone de recherche', 'Seuls les engins s’arrêtent', 'On parle à voix basse', 'On utilise la radio uniquement'], e: 'GTO USAR, chap. 4 § 3.1.', s: 'recherche' },
    { q: 'Quelle séquence d’appel est frappée avec la masselotte ?', c: ['5 coups rapprochés puis 3 coups espacés', '3 coups puis 5 coups', '1 coup toutes les minutes', '10 coups rapides'], e: 'GTO USAR, chap. 4 § 3.1.', s: 'recherche' },
    { q: 'La glissade d’une barquette sur échelle inclinée est déconseillée :', c: ['Pour une victime en détresse circulatoire sans avis médical', 'Pour toute victime consciente', 'Pour une victime casquée', 'Jamais'], e: 'GTO USAR, chap. 9 § 2.2.', s: 'sauvetage' },
    { q: 'Après combien de temps de travail un chien de recherche doit-il se reposer ?', c: ['15 à 25 minutes (repos d’au moins 30 min)', '2 heures', '5 minutes', 'Il n’a jamais besoin de repos'], e: 'GTO USAR, chap. 4 § 4.', s: 'recherche' }
  ]
});

/* =====================================================================================
   GDO INTERVENTIONS À BORD DES NAVIRES ET BATEAUX EN MILIEU MARITIME (IBNB)
   ===================================================================================== */

var GDOIBNB = 'GDO Interventions à bord des navires et bateaux en milieu maritime (IBNB) (DGSCGC, 2017)';

VSAV.chap({
  id: 'gn-navires', part: 'gn', seq: GN3,
  title: 'GDO Interventions à bord des navires (IBNB)', short: 'GDO navires (IBNB)', motif: 'wave',
  sources: [GDOIBNB],
  summary: 'Qui dirige quoi selon la position du navire (à quai ou en mer), les particularités d’un navire, l’aide médicale en mer (CCMM, SCMM, SMUR maritime, DSM mer), la marche générale des opérations à bord, le point de pénétration, l’unité d’investigation et les règles de sécurité.',
  why: '<b>Pourquoi ce guide ?</b> Le gigantisme des navires (des milliers de passagers) fait du « risque navire » un <b>risque majeur</b>, et tout sinistre qui commence en mer peut se terminer à quai. Le VSAV peut être engagé à quai pour un blessé à bord ou au débarquement de nombreuses victimes : il doit connaître l’organisation médicale maritime et les dangers d’un navire (coursives étroites, fumées, énergie 440 V, stabilité).',
  sections: [
    { id: 'direction', t: 'Priorités, direction et commandement', ic: 'team', src: GDOIBNB + ', chap. 1 sect. II à IV',
      html: '<p>Priorités, comme partout : <b>1. les vies humaines</b>, 2. les biens, 3. l’environnement.</p>' +
        '<div class="tw"><table><thead><tr><th>Position du navire</th><th>DOS</th><th>COS</th></tr></thead><tbody><tr><td>À quai ou au mouillage dans les limites administratives du port</td><td>Préfet de département</td><td><b>SDIS</b> (droit commun)</td></tr><tr><td>Chenal, rade, en mer (zone maritime)</td><td><b>Préfet maritime</b></td><td>Pas de COS en mer : coordination par le <b>CROSS</b> ; le capitaine reste chargé de la lutte, les renforts sont mis à sa disposition</td></tr></tbody></table></div>' +
        '<ul class="check"><li>Le SIS fait face à un sinistre <b>déjà installé</b> qui a échappé à l’équipage.</li><li>S’appuyer sur les <b>moyens du bord</b> en concertation avec le capitaine, mais garantir soi-même la <b>permanence de l’eau</b> : le réseau du bord ne suffit pas à protéger les intervenants.</li><li>Travailler avec l’équipage (guidage, connaissance du navire).</li><li>Du personnel non spécialisé IBNB peut être engagé pour des actions simples (surveillance, refroidissement, <b>prise en charge et accompagnement de victimes</b>) hors zone d’exclusion, encadré par des spécialistes.</li></ul>' },
    { id: 'medical', t: 'L’aide médicale en mer', ic: 'ambulance', src: GDOIBNB + ', chap. 2 sect. II',
      html: '<ul class="check"><li>Sans médecin à bord, le <b>capitaine</b> est responsable des soins ; il peut demander un avis au <b>CCMM</b> (centre de consultations médicales maritimes, SAMU de Toulouse).</li><li>Pour une évacuation, le CCMM passe par le <b>CROSS</b>, qui le met en relation avec le <b>SAMU de coordination médicale maritime (SCMM)</b>, doté d’un <b>SMUR maritime</b>.</li><li>Catastrophe en mer : le CROSS désigne un <b>DSM mer</b> ; les équipes médicales sont subordonnées au capitaine du navire sur lequel elles opèrent, mais restent seules juges de leurs actes médicaux. Un <b>PMA mer</b> peut être armé.</li><li>À terre, le SAMU départemental organise l’accueil ; idéalement, tous les naufragés passent par un <b>point de débarquement</b> pour la traçabilité.</li></ul>' },
    { id: 'mgo', t: 'La marche des opérations à bord', ic: 'list', src: GDOIBNB + ', chap. 3 sect. I',
      steps: [
        'Sauvetages et mises en sécurité : évacuer immédiatement la tranche sinistrée (entre deux cloisons résistantes au feu ou à l’eau), puis définir les zones de mise à l’abri.',
        'Analyse de la situation du navire : sinistre, propulsion, énergie, stabilité (gîte), moyens fixes du bord, environnement.',
        'Établissements et attaque directe (incendie ou voie d’eau) par un point de pénétration.',
        'Gestion des fumées : confinement, désenfumage des accès et des zones de mise à l’abri.',
        'Fermeture du « cube » : refroidir ou surveiller les cloisons verticales et horizontales autour du volume sinistré, traiter gaines et nappes de câbles, protéger les équipements sensibles.',
        'Surveillance de la stabilité (eaux d’extinction !) et du plan d’eau, puis déblai.'
      ], stepsTitle: 'Les phases propres au navire',
      after: '<p>Une évacuation complète du navire peut être décidée s’il est à quai ou entièrement menacé.</p>' },
    { id: 'securite', t: 'Point de pénétration et sécurité', ic: 'shield', src: GDOIBNB + ', chap. 1 sect. IX et chap. 3 sect. II',
      html: '<ul class="check"><li><b>Point de pénétration</b> : accès unique à la zone d’exclusion où l’on <b>enregistre les entrées et sorties</b> (tableau de gestion, balises sonores) ; tenu par un spécialiste IBNB ; binôme(s) de sécurité en attente.</li><li><b>Unité d’investigation</b> : au moins <b>3 binômes</b> (attaque, soutien, sécurité).</li><li><b>Coupure du 440 V</b> (et de la haute tension) : préalable à l’engagement.</li><li>Choisir des cheminements désenfumables, avec un itinéraire de repli ; caméra thermique et radio pour les binômes ; ligne de vie ou tuyau comme fil d’Ariane.</li><li>Garder un vecteur nautique ou aérien pour une évacuation d’urgence ; surveiller la mer, la météo et la <b>stabilité</b> ; suivre en permanence le nombre et la position des intervenants à bord.</li></ul>' }
  ],
  key: ['Priorités : vies, biens, environnement.', 'À quai dans le port : COS SDIS ; en mer : préfet maritime, CROSS, capitaine.', 'Permanence de l’eau assurée par le SIS, pas par le bord.', 'Soins à bord : CCMM ; évacuation : CROSS + SCMM + SMUR maritime.', 'Évacuer d’abord la tranche sinistrée.', 'Point de pénétration : contrôle des entrées et sorties, binôme de sécurité.', 'UI = 3 binômes minimum ; coupure du 440 V avant engagement.', 'Les eaux d’extinction menacent la stabilité du navire.'],
  traps: ['Croire que les moyens incendie du bord suffisent à protéger les intervenants.', 'S’engager dans les coursives sans passer par le point de pénétration.', 'Oublier l’effet des eaux d’extinction sur la stabilité.', 'Chercher un COS sapeur-pompier pour un navire en mer.'],
  quiz: [
    { q: 'Navire en feu à quai dans les limites administratives du port : qui est COS ?', c: ['Le SDIS', 'Le capitaine du navire', 'Le préfet maritime', 'Le CROSS'], e: 'GDO IBNB, chap. 1 sect. III.', s: 'direction' },
    { q: 'En mer, qui coordonne les secours ?', c: ['Le CROSS, sous l’autorité du préfet maritime', 'Le SDIS le plus proche', 'Le maire de la commune côtière', 'Le SAMU départemental'], e: 'GDO IBNB, chap. 1 sect. III.', s: 'direction' },
    { q: 'Quel service donne un avis médical à un capitaine de navire sans médecin à bord ?', c: ['Le CCMM (centre de consultations médicales maritimes)', 'Le CTA-CODIS', 'Le centre antipoison', 'La capitainerie'], e: 'GDO IBNB, chap. 2 sect. II.', s: 'medical' },
    { q: 'Première mesure de mise en sécurité à bord :', c: ['Évacuer la tranche sinistrée entre deux cloisons résistantes', 'Évacuer tout le navire par la mer', 'Ouvrir toutes les portes étanches', 'Arrêter les machines'], e: 'GDO IBNB, chap. 3 sect. I § 1-1.', s: 'mgo' },
    { q: 'Une unité d’investigation comprend au minimum :', c: ['3 binômes : attaque, soutien, sécurité', '1 binôme', '2 équipiers et un chef', '10 sapeurs-pompiers'], e: 'GDO IBNB, chap. 3 sect. II § 1.2.', s: 'securite' },
    { q: 'Quel préalable à l’engagement des équipes dans un local sinistré du navire ?', c: ['La coupure du réseau 440 V (et haute tension)', 'L’arrêt des radars', 'L’ouverture des hublots', 'Aucun'], e: 'GDO IBNB, chap. 3 sect. II § 1.3.1.', s: 'securite' },
    { q: 'Les moyens hydrauliques du bord :', c: ['Ne garantissent pas un débit suffisant pour protéger les intervenants', 'Suffisent toujours', 'Sont interdits aux pompiers', 'Remplacent les engins du SIS'], e: 'GDO IBNB, chap. 1 sect. IV.', s: 'direction' }
  ]
});
