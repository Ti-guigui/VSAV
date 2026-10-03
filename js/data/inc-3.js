/* ÉQUIPIER INCENDIE — fichier 3 : Hydraulique (livret Partie 3) ; Établissements et stratégie d’extinction (livret Partie 5 hors 5.2) */
var INC4 = 'Incendie 4 — Hydraulique', INC5 = 'Incendie 5 — Établissements et stratégie d’extinction';
var LIV3 = 'Livret stagiaire Équipier incendie SDIS 51 (v2019)';
var GTO_ETEX = 'GTO Établissements et techniques d’extinction (DGSCGC, 2018)';
var GIM = 'Guide d’instruction et de manœuvre INC (SDIS 51)';
var GDR_ECH = 'GDR Tuyaux en écheveaux (SDIS 51, v 03/05/2018)';

/* ================================================================ INCENDIE 4 — HYDRAULIQUE */

VSAV.chap({
  id: 'inc-besoins-eau', part: 'inc', seq: INC4,
  title: 'Les besoins en eau et les notions d’hydraulique', short: 'Besoins en eau', motif: 'drop',
  sources: [LIV3 + ', Partie 3, § 3.1', GTO_ETEX + ', fiches ETEX-STR-RES et RES-1 (p. 13-23) et ETEX-STR-ETB (p. 47-48)', GIM + ', « Les établissements »'],
  summary: '120 m³ pendant 2 heures, le RDDECI, les types de réseaux et ce qui fait perdre de la pression dans un établissement.',
  why: '<b>Pourquoi l’équipier doit-il comprendre l’eau ?</b> L’eau est l’agent extincteur de base. Une lance qui manque d’eau ou de pression, c’est un binôme qui ne peut plus se protéger. Savoir d’où vient l’eau (réseau, réserve), combien il en faut et ce qui la freine dans les tuyaux (longueur, débit, diamètre, dénivelé), c’est comprendre pourquoi le chef d’agrès choisit un tuyau de 70 plutôt que de 45, ou fait alimenter l’engin dès l’arrivée.',
  sections: [
    { id: 'risque', t: 'Combien d’eau faut-il ?', ic: 'drop', src: LIV3 + ', § 3.1 § 1 ; ' + GTO_ETEX + ', ETEX-STR-RES § 1.1-1.2',
      html: '<p>Une étude des années 40 a pris pour base une durée moyenne d’extinction de <b>2 heures</b> et l’engin de base de l’époque, la <b>motopompe de 60 m³/h</b>. Il faut donc disposer d’au moins <b>120 m³ d’eau pendant 2 heures</b> sans avoir à se réalimenter. Cette quantité, fixée par la circulaire du <b>10/12/1951</b>, s’appelle le <b>risque moyen (ou courant)</b>. Elle permet d’alimenter <b>deux LDV 500 pendant deux heures</b>.</p>' +
        '<div class="callout ok"><b>À retenir au niveau équipier</b> (le livret le dit expressément : les volumes détaillés ne sont pas à connaître par cœur) : <b>120 m³ d’eau pendant 2 heures</b> sur les lieux du sinistre.</div>' +
        '<p>Depuis décembre 2015 au niveau national (arrêté du 15 décembre 2015, référentiel national) et décembre 2016 au SDIS 51, le <b>RDDECI</b> (règlement départemental de la défense extérieure contre l’incendie), arrêté par le préfet, redimensionne les besoins en eau selon le risque. Exemple du livret : une habitation de plain-pied de moins de 250 m² n’est pas défendue comme un magasin de vêtements de plus de 500 m².</p>' +
        '<div class="tw"><table><thead><tr><th>Risque (GTO)</th><th>Exemples</th><th>Quantité d’eau indicative</th></tr></thead><tbody>' +
        '<tr><td>Courant faible</td><td>Habitation isolée en zone rurale</td><td>Minimum <b>30 m³</b> utilisables en 1 h ou instantanément</td></tr>' +
        '<tr><td>Courant ordinaire</td><td>Lotissement, immeuble collectif</td><td>À partir de <b>60 m³</b> en 1 h et jusqu’à <b>120 m³</b> en 2 h</td></tr>' +
        '<tr><td>Courant important</td><td>Quartier historique, habitat saturé, mixte artisanat</td><td>À partir de <b>120 m³</b> en 2 h, plusieurs sources, au cas par cas</td></tr>' +
        '<tr><td>Particulier</td><td>ERP, patrimoine, bâtiments industriels ou agricoles non ICPE</td><td>Approche individualisée</td></tr>' +
        '</tbody></table></div><p class="small muted">Valeurs indicatives, ajustées dans chaque département (GTO).</p>' +
        '<p>Le maire doit s’assurer de l’existence, de la suffisance et de la disponibilité des ressources en eau ; le SIS fait les reconnaissances opérationnelles des points d’eau et les recense.</p>' },
    { id: 'reseaux', t: 'D’où vient l’eau : les réseaux', ic: 'wave', src: LIV3 + ', § 3.1 § 2 ; ' + GTO_ETEX + ', ETEX-STR-RES-1 § 2',
      html: '<p>Les sapeurs-pompiers utilisent les <b>réseaux de distribution</b>, les <b>points d’eau naturels</b> et les <b>réserves artificielles</b>. Le réseau permet de multiplier les prises d’eau, donc de raccourcir les établissements (moins de pertes de charge, moins d’usure) ; il est en revanche très onéreux. Il comprend captages, conduites d’adduction, réservoirs (château d’eau), canalisations de distribution et points d’eau incendie.</p>' +
        '<div class="tw"><table><thead><tr><th>Réseau</th><th>Principe</th><th>Conséquence</th></tr></thead><tbody>' +
        '<tr><td><b>Palmé / étoilé</b> (ramifié)</td><td>Un seul réservoir, conduites en cul-de-sac, un seul sens de circulation</td><td>Encrassage ; une rupture prive tout un secteur</td></tr>' +
        '<tr><td><b>Maillé</b></td><td>Circuit fermé : chaque hydrant a deux arrivées d’eau possibles</td><td>Si une arrivée défaille, l’autre alimente encore</td></tr>' +
        '<tr><td><b>Maillé bouclé</b> (livret)</td><td>Circuit fermé alimenté par deux réservoirs</td><td>Le plus fiable (grandes agglomérations), mais le plus coûteux</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Pression du réseau :</b> le réservoir en hauteur donne une pression de <b>1 bar par 10 mètres de dénivelée</b>. À défaut de pente suffisante, des pompes de relevage augmentent la pression.</p>' +
        '<div class="callout warn">Débit et pression d’un réseau ne sont pas stables : consommation (matin et soir, arrosage l’été), travaux, saison pour les points d’eau naturels.</div>',
      figs: [
        { img: 'img/inc/3/reseaux.jpg', cap: 'Réseau en étoile et réseau maillé', txt: '<p>À gauche, un seul château d’eau dessert les poteaux par des branches en cul-de-sac. À droite, deux réservoirs et un maillage : l’eau peut arriver par plusieurs chemins.</p>', src: GTO_ETEX + ', p. 23 (illustrations 4 et 5)' },
        { img: 'img/inc/3/pression-hydrant.jpg', cap: '1 bar par 10 m de dénivelée', txt: '<p>Réservoir à 20 m au-dessus de la prise d’eau : 2 bars statiques au point le plus bas.</p>', src: GTO_ETEX + ', p. 22 (illustration 3)' }
      ] },
    { id: 'notions', t: 'Débit, pression, pertes de charge', ic: 'bolt', src: GTO_ETEX + ', ETEX-STR-ETB § 1 (p. 47-48) ; ' + GIM,
      html: '<ul class="check">' +
        '<li><b>Débit (Q)</b> : quantité d’eau qui passe par unité de temps (Q = V/t). On parle en <b>L/min</b> pour les lances et les pompes, en <b>m³/h</b> pour les ressources en eau (hydrants).</li>' +
        '<li><b>Pression (P)</b> : force par unité de surface, en bar (1 bar = 1 kg/cm²).</li>' +
        '<li><b>Pression statique</b> : toutes lances fermées, débit nul ; identique partout sur terrain plat.</li>' +
        '<li><b>Pression dynamique</b> : eau en mouvement ; différente en chaque point, elle oblige à calculer les pertes de charge (relais, norias…).</li>' +
        '<li><b>Pression atmosphérique</b> : 10,33 m d’eau soit 1,013 bar au niveau de la mer. Conséquence : tout dispositif d’alimentation d’une pompe doit garantir <b>au moins 1 bar</b> à sa sortie.</li></ul>' +
        '<p><b>Pertes de charge (J, en bar/hm)</b> : pertes de pression dues au frottement de l’eau contre les parois et entre ses molécules. Elles sont :</p>' +
        '<ul class="check"><li>proportionnelles à la <b>longueur</b> de l’établissement ;</li><li>proportionnelles au <b>carré du débit</b> : doubler le débit multiplie les pertes par <b>4</b> ;</li><li>inversement proportionnelles au <b>diamètre</b> ;</li><li><b>indépendantes de la pression</b> (seul le débit compte) ;</li><li>fonction de la rugosité du tuyau ;</li><li>liées au dénivelé : <b>1 bar perdu par 10 m</b> de montée, 1 bar gagné par 10 m de descente.</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Tuyau Ø (mm)</th><th>Nature</th><th>Débit</th><th>J (bar/hm)</th><th>Pression LDV</th></tr></thead><tbody>' +
        '<tr><td>22</td><td>Semi-rigide</td><td>58 L/min (3,5 m³/h)</td><td>2,2</td><td>6 bars</td></tr>' +
        '<tr><td>22</td><td>PIL</td><td>58 L/min (3,5 m³/h)</td><td>1,7</td><td>6 bars</td></tr>' +
        '<tr><td>45</td><td>PIL</td><td>250 L/min (15 m³/h)</td><td>1,5</td><td>6 à 8 bars selon modèle</td></tr>' +
        '<tr><td>70</td><td>PIL</td><td>500 L/min (30 m³/h)</td><td>0,55</td><td>6 à 8 bars selon modèle</td></tr>' +
        '<tr><td>110</td><td>PIL</td><td>1000 L/min (60 m³/h)</td><td>0,28</td><td>6 à 8 bars selon modèle</td></tr>' +
        '</tbody></table></div><p class="small muted">Tableau du Guide d’instruction et de manœuvre INC du SDIS 51 (PIL : paroi interne lisse).</p>' +
        '<div class="callout ok"><b>Conclusion pratique :</b> le chef d’agrès préfère amener des tuyaux de <b>gros diamètre au plus près du sinistre</b> pour éviter des pertes de charge inutiles (Guide d’instruction). C’est tout le sens de la division d’alimentation sur tuyaux de 70.</div>' }
  ],
  key: ['Risque courant : 120 m³ d’eau pendant 2 heures (circulaire du 10/12/1951).', '120 m³/2 h = 2 LDV 500 pendant 2 h.', 'Le RDDECI dimensionne les besoins selon le risque.', 'Réseau maillé : deux arrivées d’eau par hydrant ; étoilé : cul-de-sac.', '1 bar par 10 m de dénivelée.', 'Pertes de charge ∝ longueur et carré du débit, inversement ∝ diamètre, indépendantes de la pression.', 'Au moins 1 bar à l’arrivée de la pompe.'],
  traps: ['Croire que les pertes de charge dépendent de la pression : seul le débit compte.', 'Penser que doubler le débit double les pertes : il les multiplie par 4.', 'Oublier qu’un réseau d’eau est moins performant aux heures de forte consommation.'],
  quiz: [
    { q: 'Quelle quantité d’eau définit le risque courant (à retenir au niveau équipier) ?', c: ['120 m³ pendant 2 heures', '60 m³ pendant 1 heure', '30 m³ instantanément', '240 m³ pendant 4 heures'], e: 'Base : 2 h d’extinction × motopompe de 60 m³/h. Circulaire du 10/12/1951.', s: 'risque' },
    { q: 'Si l’on double le débit dans un tuyau, les pertes de charge sont :', c: ['Multipliées par 4', 'Multipliées par 2', 'Inchangées', 'Divisées par 2'], e: 'Elles sont proportionnelles au carré du débit.', s: 'notions' },
    { q: 'Les pertes de charge dépendent :', c: ['Du débit, de la longueur, du diamètre et de la rugosité', 'De la pression de refoulement', 'Uniquement de la longueur', 'Uniquement du diamètre'], e: 'Elles sont indépendantes de la pression : c’est la quantité d’eau qui frotte aux parois qui compte.', s: 'notions' },
    { q: 'Quel est l’avantage d’un réseau maillé sur un réseau étoilé ?', c: ['Chaque hydrant reste alimenté si une arrivée d’eau défaille', 'Il coûte moins cher', 'Il donne une pression plus élevée', 'Il ne s’encrasse jamais'], e: 'Le réseau maillé est en circuit fermé : deux arrivées possibles par hydrant.', s: 'reseaux' },
    { q: 'Un établissement monte de 10 mètres. Effet sur la pression ?', c: ['Perte de 1 bar', 'Gain de 1 bar', 'Perte de 0,1 bar', 'Aucun effet'], e: '1 bar par 10 m de dénivelée : perte en montée, gain en descente.', s: 'notions' },
    { q: 'Pourquoi faut-il au moins 1 bar à l’arrivée d’une pompe alimentée par un hydrant ?', c: ['Pour contrer la pression atmosphérique et permettre à l’eau de « couler »', 'Pour protéger les tuyaux de 110', 'Parce que la pompe ne supporte pas plus', 'Pour respecter le code de la route'], e: 'La pression atmosphérique vaut environ 1 bar : en dessous, l’alimentation n’est pas assurée (GTO).', s: 'notions' },
    { q: 'Quel tuyau a les pertes de charge les plus faibles à son débit nominal, selon le tableau du SDIS 51 ?', c: ['Ø 110 (0,28 bar/hm à 1000 L/min)', 'Ø 45 (1,5 bar/hm)', 'Ø 22 semi-rigide (2,2 bar/hm)', 'Ø 70 (0,55 bar/hm)'], e: 'Plus le diamètre est grand, moins l’eau frotte.', s: 'notions' }
  ]
});

VSAV.chap({
  id: 'inc-pei', part: 'inc', seq: INC4,
  title: 'Les points d’eau incendie (PEI)', short: 'Points d’eau incendie', motif: 'pin',
  sources: [LIV3 + ', Partie 3, § 3.2 et fiches techniques annexes 2.2, 2.3, 2.8, 2.9 (p. 61-67)', GTO_ETEX + ', fiches ETEX-STR-RES-1 et RES-2 (p. 17-43)'],
  summary: 'Poteaux, bouches, points d’aspiration et réserves : les reconnaître et manœuvrer un PI ou une BI.',
  why: '<b>Pourquoi maîtriser les PEI ?</b> Le binôme d’alimentation et le conducteur doivent mettre en eau un hydrant vite et sans danger. Dégorger avant de raccorder évite d’envoyer cailloux et boues dans la pompe ; ouvrir progressivement évite les coups de bélier et la surpression, d’autant plus dangereux que certains réseaux sont surpressés. La couleur d’un poteau renseigne aussi, d’un coup d’œil, sur ce qu’on va trouver.',
  sections: [
    { id: 'definition', t: 'Définition et familles', ic: 'list', src: LIV3 + ', § 3.2 ; ' + GTO_ETEX + ', ETEX-STR-RES § 3',
      html: '<p>Les <b>PEI</b> sont les points d’eau nécessaires à l’alimentation des moyens des services d’incendie et de secours. Ce sont des ouvrages publics ou privés <b>utilisables en permanence</b> : bouches et poteaux normalisés, mais aussi points d’eau naturels ou artificiels et autres prises d’eau.</p>' +
        '<p>Le GTO distingue trois familles : les <b>hydrants</b> (poteaux et bouches), les <b>points d’aspiration</b>, et toute autre prise d’eau.</p>' +
        '<div class="callout warn"><b>Distance entre deux PEI :</b> le livret indique qu’elle varie selon le risque local, <b>200 m ou 400 m maximum</b>. Le GTO précise qu’en risque courant important elle est généralement de <b>200 m</b>, « car nos dévidoirs à main sont armés de 200 m de tuyaux de 70 mm ».</div>' +
        '<div class="tw"><table><thead><tr><th>Symbole (plans de secours)</th><th>Désignation</th></tr></thead><tbody><tr><td>Cercle</td><td>Poteau d’incendie (PI)</td></tr><tr><td>Carré</td><td>Bouche d’incendie (BI)</td></tr><tr><td>Triangle</td><td>Point d’aspiration aménagé (PA)</td></tr><tr><td>Rectangle</td><td>Citerne aérienne ou enterrée (CI)</td></tr></tbody></table></div>' },
    { id: 'pi', t: 'Les poteaux d’incendie (PI)', ic: 'pin', src: GTO_ETEX + ', ETEX-STR-RES-1 § 1 et 3 ; ' + LIV3 + ', fiche technique annexe 2.2 (p. 62)',
      html: '<p>Un hydrant normalisé est raccordé à un réseau sous pression capable de fournir le débit pendant au moins 2 heures, il est incongelable (colonne à <b>1 m minimum</b> sous terre) et signalé.</p>' +
        '<div class="tw"><table><thead><tr><th>PI (GTO)</th><th>Débit</th><th>Sorties</th><th>Ouverture</th></tr></thead><tbody>' +
        '<tr><td>PI de 80</td><td>30 m³/h</td><td>1 × 65 (+ éventuellement 2 × 40)</td><td>13 tours</td></tr>' +
        '<tr><td>PI de 100</td><td>60 m³/h (17 L/s, 1 000 L/min)</td><td>1 × 100 + 2 × 65</td><td>13 tours</td></tr>' +
        '<tr><td>PI de 150</td><td>120 m³/h</td><td>2 × 100 + 1 × 65</td><td>17 tours</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Couleurs</b> (sur au moins 50 % du corps, d’après la fiche du SDIS 51) :</p>' +
        '<ul class="check"><li><b>Rouge</b> : relié au réseau d’eau, pression d’au moins 1 bar.</li><li><b>Jaune sur le haut</b> : PI de 150 mm (seulement chez certains fabricants) ; le GTO parle d’une partie du capot ou de la coquille peinte en jaune pour le PI de 150, et en gris pour le PI de 100.</li><li><b>Jaune</b> (au moins 50 %) : réseau <b>surpressé</b>, précautions particulières, réducteurs de pression à disposition.</li><li><b>Bleu</b> : poteau sans pression, poteau d’aspiration.</li></ul>' +
        '<div class="callout warn"><b>Pression : deux chiffres selon la source.</b> Le RDDECI de la Marne (fiche du livret) demande une pression dynamique de <b>1 bar minimum, jusqu’à 8 bars maximum</b> dans le cas d’un réseau surpressé, avec des réducteurs de pression au-delà de 5 bars. Le GTO national indique pour un hydrant normalisé <b>1 bar minimum et 16 bars maximum</b>, et considère comme « haute pression » un PEI dont la pression dynamique à 60 m³/h dépasse <b>6 bars</b>.</div>' +
        '<p>Sur un PEI haute pression : s’assurer du bon raccordement, <b>ouvrir progressivement</b> dans le sens inverse des aiguilles d’une montre, limiter la surpression dans la pompe. Les nouveaux PI sont souvent de type <b>« choc »</b> : en cas d’accident, le système de fermeture n’est pas arraché et l’eau ne jaillit pas.</p>',
      figs: [{ img: 'img/inc/3/pi.jpg', cap: 'Poteau d’incendie ouvert et fermé', txt: '<p>Volant de manœuvre, ½ raccords de 65 et de 100 mm, portes solidaires du socle ; capot fermé : carré de manœuvre 30 × 30.</p>', src: LIV3 + ', p. 63' }] },
    { id: 'manoeuvre-pi', t: 'Manœuvre d’un poteau d’incendie', ic: 'play', src: LIV3 + ', § 3.2 § 4 (p. 63)',
      steps: ['OUVRIR le couvercle avec la clé de poteau.', 'ENLEVER un des bouchons obturateurs.', 'DÉGORGER le poteau : ouvrir le régulateur de quelques tours dans le sens inverse des aiguilles d’une montre pour expulser les corps étrangers de la colonne.', 'REFERMER, puis monter sur le raccord adapté le tuyau d’alimentation ou la division.', 'OUVRIR progressivement dans le sens inverse des aiguilles d’une montre : 13 tours, puis revenir d’un quart de tour (17 tours pour les PI 2 × 100).'], stepsTitle: 'Mettre en eau un PI',
      after: '<p>Le GTO précise lui aussi que les PI de 80 et 100 s’ouvrent en <b>13 tours</b> et le PI de 150 (2 sorties de 100) en <b>17 tours</b>.</p>' },
    { id: 'bi', t: 'Les bouches d’incendie (BI)', ic: 'grid', src: GTO_ETEX + ', ETEX-STR-RES-1 § 4 ; ' + LIV3 + ', fiche technique annexe 2.3 (p. 64-65)',
      html: '<ul class="check"><li>Colonne montante de <b>100 mm minimum</b> ; il n’existe pas de BI de 80 mm.</li><li>Débit de <b>1 000 L/min</b> (GTO) ; le RDDECI de la Marne demande 30 à 60 m³/h et 1 bar de pression dynamique minimum.</li><li>Munie d’une <b>douille à rebord saillant</b> (demi-raccord Keyser mâle de 100 mm) sur laquelle on coiffe une retenue ou un coude d’alimentation.</li><li>Deux BI de 100 jumelées peuvent offrir 2 000 L/min (120 m³/h).</li><li>Ouverture à la <b>clé de barrage</b>, en <b>13 tours</b>.</li></ul>' +
        '<p><b>Implantation (SDIS 51)</b> : entre <b>1 et 5 m</b> du bord de la chaussée accessible aux secours, <b>0,50 m</b> de dégagement autour et <b>2 m</b> d’espace libre au-dessus ; le SDIS préconise plutôt des poteaux, plus visibles.</p>' +
        '<p><b>Signalisation</b> : plaque de 220 × 100 mm, fond blanc, caractères rouges, adossée à un mur ; elle indique le type, le diamètre de la colonne et la position de la bouche en mètres en partant du mur, dos au mur. Le stationnement au droit des BI est interdit (code de la route, art. R.417-10).</p>',
      figs: [{ img: 'img/inc/3/bi.jpg', cap: 'Bouche d’incendie', txt: '<p>Couvercle sur le trottoir ; une fois ouvert : le demi-raccord Keyser mâle de 100 mm et le carré de manœuvre 30 × 30 mm.</p>', src: LIV3 + ', p. 65' }] },
    { id: 'manoeuvre-bi', t: 'Manœuvre d’une bouche d’incendie', ic: 'play', src: LIV3 + ', § 3.2 § 4 (p. 65)',
      steps: ['SOULEVER le couvercle.', 'COIFFER le carré du régulateur avec la clé de barrage.', 'DÉGORGER la bouche en ouvrant le régulateur de quelques tours (sens inverse des aiguilles d’une montre) pour expulser les corps étrangers de la canalisation.', 'REFERMER et monter la pièce de jonction adaptée (retenue ou coude d’alimentation).', 'OUVRIR le régulateur dans le sens inverse des aiguilles d’une montre : 13 tours, puis revenir d’un quart de tour.'], stepsTitle: 'Mettre en eau une BI' },
    { id: 'aspiration', t: 'Points d’eau naturels, artificiels et aires d’aspiration', ic: 'wave', src: LIV3 + ', § 3.2 § 1-3 et fiches annexes 2.8, 2.9 (p. 60, 66-67) ; ' + GTO_ETEX + ', ETEX-STR-RES-2',
      html: '<p><b>Naturels</b> : rivières, canaux, lacs, étangs, nappes phréatiques, puits. <b>Artificiels</b> : citernes, piscines, lavoirs, bassins. Ils ne sont utilisables comme PEI que s’ils répondent aux critères du RDDECI. Les <b>piscines privées</b> ne sont pas considérées comme des PEI (pérennité, situation juridique, accès), même si elles peuvent servir si les conditions le permettent (GTO).</p>' +
        '<div class="tw"><table><thead><tr><th>Aire d’aspiration</th><th>Valeur</th></tr></thead><tbody>' +
        '<tr><td>Motopompe (remorquable)</td><td><b>12 m²</b> minimum (4 m × 3 m)</td></tr>' +
        '<tr><td>Engin pompe (poids lourd)</td><td><b>32 m²</b> minimum (8 m × 4 m)</td></tr>' +
        '<tr><td>Pente</td><td><b>2 %</b> (évacuation des eaux) ; le GTO la limite à <b>7 %</b> (gel, boue)</td></tr>' +
        '<tr><td>Côté eau</td><td>Talus (terre ou de préférence maçonnerie ou madriers) contre les chutes</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Dispositif fixe d’aspiration</b> (GTO) : ½ raccord symétrique entre <b>0,5 et 0,8 m</b> au-dessus de l’aire, canalisation rigide ou semi-rigide, crépine sans clapet au moins à <b>0,5 m du fond</b> et <b>0,3 m sous le niveau le plus bas</b>. Il peut prendre la forme d’un <b>poteau d’aspiration bleu</b>. Les points d’aspiration sont signalés par un panneau à <b>triangle bleu</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Réserves (fiches SDIS 51)</th><th>Aménagements</th></tr></thead><tbody>' +
        '<tr><td>Réserve souple</td><td>Une aire d’aspiration et une prise fixe par tranche de <b>120 m³</b> ; distance crépine-engin ≤ <b>8 m</b> ; poteau d’aspiration à raccord symétrique tournant sans coquille ; accessible en tout temps. Poteaux d’aspiration recommandés contre le gel.</td></tr>' +
        '<tr><td>Citerne enterrée avec poteau d’aspiration</td><td>Un poteau d’aspiration par tranche de 120 m³ ; aire de <b>32 m²</b> minimum par poteau ; profondeur d’aspiration ≥ <b>80 cm</b> ; hauteur entre point d’aspiration et niveau le plus bas &lt; <b>5,5 m</b> ; distance pompe-crépine &lt; <b>8 m</b> ; tampons circulaires Ø 80 cm peints en bleu ; poteau protégé par un arceau.</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>RIA, colonnes sèches et humides</b> : voir le chapitre consacré à la prévention appliquée à l’opération (PAO).</p>' }
  ],
  key: ['PEI = ouvrage utilisable en permanence par les secours (hydrants, points d’aspiration, autres prises).', 'PI 80 : 30 m³/h ; PI 100 : 60 m³/h ; PI 150 : 120 m³/h.', 'PI et BI : 13 tours ; PI de 150 (2 × 100) : 17 tours ; revenir d’un quart de tour.', 'Toujours dégorger avant de raccorder, puis ouvrir progressivement.', 'PI jaune = réseau surpressé ; bleu = aspiration ; rouge = réseau ≥ 1 bar.', 'BI : clé de barrage, douille Keyser de 100, 1 000 L/min.', 'Aire d’aspiration : 4 × 3 m (motopompe), 8 × 4 m (engin), pente 2 %.'],
  traps: ['Raccorder sans dégorger : les corps étrangers partent dans la pompe.', 'Ouvrir brutalement un hydrant, surtout sur réseau surpressé (poteau jaune).', 'Confondre poteau bleu (aspiration, sans pression) et poteau jaune (surpressé).', 'Croire qu’il existe des bouches d’incendie de 80 mm.'],
  quiz: [
    { q: 'Quelle est la première action après avoir ouvert le capot et ôté un bouchon d’un PI ?', c: ['Dégorger le poteau de quelques tours', 'Raccorder directement le tuyau', 'Ouvrir 13 tours d’un coup', 'Prévenir le CTA'], e: 'Dégorger expulse les corps étrangers de la colonne avant raccordement.', s: 'manoeuvre-pi' },
    { q: 'Combien de tours pour ouvrir un PI 2 × 100 (PI de 150) ?', c: ['17 tours', '13 tours', '10 tours', '20 tours'], e: '13 tours pour les PI de 80 et de 100 et pour les BI, 17 pour le PI de 150 (2 × 100).', s: 'manoeuvre-pi' },
    { q: 'Un poteau peint en jaune sur plus de 50 % de sa surface est :', c: ['Relié à un réseau surpressé', 'Un poteau d’aspiration', 'Hors service', 'Un PI de 80'], e: 'Le jaune signale des précautions particulières ; des réducteurs de pression doivent être disponibles.', s: 'pi' },
    { q: 'Débit d’un PI de 100 selon le GTO ?', c: ['60 m³/h (1 000 L/min)', '30 m³/h', '120 m³/h', '17 m³/h'], e: '60 m³/h, soit 17 L/s ou 1 000 L/min.', s: 'pi' },
    { q: 'Avec quoi manœuvre-t-on une bouche d’incendie ?', c: ['La clé de barrage', 'La clé de poteau', 'La tricoise', 'Le pèse-bouche'], e: 'La clé de barrage coiffe le carré du régulateur de la BI.', s: 'manoeuvre-bi' },
    { q: 'Surface minimale d’une aire d’aspiration pour un engin pompe ?', c: ['32 m² (8 m × 4 m)', '12 m² (4 m × 3 m)', '20 m²', '50 m²'], e: '12 m² pour une motopompe, 32 m² pour un engin pompe.', s: 'aspiration' },
    { q: 'Que dit le livret sur la distance entre deux PEI ?', c: ['Elle dépend du risque : 200 m ou 400 m maximum', 'Toujours 100 m', 'Toujours 1 km', 'Elle n’est pas réglementée'], e: 'Le GTO indique généralement 200 m en risque courant important (dévidoirs de 200 m de tuyaux de 70).', s: 'definition' },
    { q: 'Après avoir ouvert une BI de 13 tours, le livret demande :', c: ['De revenir d’un quart de tour', 'D’ouvrir encore 4 tours', 'De refermer complètement', 'De retirer la clé de barrage et de dégorger'], e: 'PI comme BI : ouvrir progressivement 13 tours (17 pour les PI 2 × 100) et revenir d’un quart de tour.', s: 'manoeuvre-bi' }
  ]
});

VSAV.chap({
  id: 'inc-jonction', part: 'inc', seq: INC4,
  title: 'Les pièces de jonction', short: 'Pièces de jonction', motif: 'clip',
  sources: [LIV3 + ', Partie 3, § 3.3 (p. 68-72)', GIM + ', « Les pièces de jonction »'],
  summary: 'Raccords, coude d’alimentation, retenue, divisions, collecteurs, vannes : relier les éléments d’un établissement.',
  why: '<b>Pourquoi connaître chaque pièce ?</b> Sur intervention, le chef d’agrès demande « une retenue », « une division mixte » : il faut savoir ce que c’est, où on la prend et ce qu’elle permet. Choisir le coude ou la retenue, c’est choisir entre un tuyau de 110 court (moins de 20 m) et deux tuyaux de 70 plus longs.',
  sections: [
    { id: 'definition', t: 'Définition : 2R – 2C – 1D – 1V', ic: 'list', src: LIV3 + ', § 3.3 § 1',
      html: '<p>Les pièces de jonction font partie du matériel d’extinction : elles relient les éléments d’un établissement (lances, prises d’eau, accessoires hydrauliques). Moyen mnémotechnique du livret :</p>' +
        '<div class="callout ok"><b>2R – 2C – 1D – 1V</b> : <b>R</b>accords, <b>R</b>etenues ; <b>C</b>oudes d’alimentation, <b>C</b>ollecteurs (d’alimentation et de refoulement) ; <b>D</b>ivisions ; <b>V</b>annes.</div>',
      figs: [{ img: 'img/inc/3/jonction.jpg', cap: 'Les pièces de jonction', txt: '<p>Coude d’alimentation, retenue, divisions, collecteur d’alimentation, vanne de pied d’échelle et vanne Ø 40 / 100.</p>', src: LIV3 + ', p. 70-72' }] },
    { id: 'raccords', t: 'Les raccords', ic: 'clip', src: LIV3 + ', § 3.3 § 2 ; ' + GIM,
      html: '<p>Deux demi-raccords assemblés forment un raccord. On les désigne par leur <b>type</b> et leur <b>diamètre nominal intérieur</b> (ex. : <b>DSP 40</b> = Dubois Spécial Paris 40 mm).</p>' +
        '<div class="tw"><table><thead><tr><th>Type</th><th>Description</th><th>Où ?</th></tr></thead><tbody>' +
        '<tr><td><b>Symétriques</b></td><td>Deux demi-raccords identiques : deux tenons, un joint et son logement, une virole à molette avec deux rampes de verrouillage</td><td>—</td></tr>' +
        '<tr><td>A.R (aspiration-refoulement)</td><td>Symétrique auto-étanche, Ø 100 et 65 (livret)</td><td>Tuyaux d’alimentation et d’aspiration de 70, 110, 150 (Guide d’instruction)</td></tr>' +
        '<tr><td>D.S.P (Dubois Spécial Paris)</td><td>Symétrique auto-étanche, Ø 65 et 40</td><td>Grande majorité des tuyaux d’extinction de 45 et 70</td></tr>' +
        '<tr><td><b>Non symétriques</b> G.F.R (gros filets ronds)</td><td>Demi-raccord femelle + demi-raccord mâle, serrage à vis</td><td>Tuyaux du dévidoir tournant (Ø 20)</td></tr>' +
        '<tr><td>Keyser (à levier ou papillon)</td><td>Non symétrique</td><td>Pièces qui coiffent les bouches d’incendie</td></tr>' +
        '</tbody></table></div>' +
        '<ul class="check"><li><b>Raccords de réduction</b> : deux demi-raccords de même type mais de diamètres différents ; les plus courants : <b>40/20 – 65/40 – 100/65</b>.</li><li><b>Raccords intermédiaires</b> : même diamètre, types différents (ex. GFR-DSP pour prolonger la LDT).</li></ul>' +
        '<div class="callout warn"><b>Contre-indications (Guide d’instruction) :</b> ne pas claquer les demi-raccords au sol, ne pas donner de coups de pied dans les raccords, ne pas serrer à la tricoise (détérioration du joint) sauf les raccords Guillemin et A.R.</div>',
      figs: [{ img: 'img/inc/3/raccords.jpg', cap: 'Les principaux raccords', txt: '<p>Symétriques A.R et D.S.P ; non symétriques G.F.R et Keyser ; raccord de réduction ; raccord intermédiaire GFR-DSP.</p>', src: LIV3 + ', p. 69-70' }] },
    { id: 'alimentation', t: 'Coude d’alimentation, retenue, collecteur', ic: 'drop', src: LIV3 + ', § 3.3 § 3, 4 et 6 ; ' + GIM,
      html: '<div class="tw"><table><thead><tr><th>Pièce</th><th>Ce qu’elle fait</th><th>Quand</th></tr></thead><tbody>' +
        '<tr><td><b>Coude d’alimentation</b></td><td>Se coiffe sur la BI (demi-raccord Keyser) et raccorde un tuyau de <b>110</b> à l’engin</td><td>Alimentation à <b>moins de 20 m</b> de l’engin pompe (réservée au conducteur selon le Guide d’instruction)</td></tr>' +
        '<tr><td><b>Retenue</b></td><td>Se coiffe sur la BI et raccorde <b>deux tuyaux de 70</b> ; deux orifices de 65 à vannes</td><td>Alimentation à <b>plus de 20 m</b> de l’engin pompe</td></tr>' +
        '<tr><td><b>Collecteur d’alimentation</b> (2 × 65 / 100)</td><td>Alimente avec <b>deux lignes de 70</b> un engin, une colonne sèche ou humide de 100 ; clapet anti-retour qui bloque l’autre entrée</td><td>Existe aussi en 2 × 100 / 100 pour une pompe 2000/15</td></tr>' +
        '</tbody></table></div>' },
    { id: 'divisions', t: 'Les divisions', ic: 'target', src: LIV3 + ', § 3.3 § 5 ; ' + GIM,
      html: '<p>Une division partage un établissement en deux ou plusieurs établissements de diamètre identique ou plus petit.</p>' +
        '<ul class="check"><li>65 / 2 × 40</li><li>65 / 1 × 65 et 2 × 40 (« division <b>mixte</b> »)</li><li>100 / 2 × 65 et 100 / 3 × 65</li><li>100 / 1 × 100 et 2 × 65 (« division mixte »)</li><li>40 / 1 × 40 et 2 × 20 (« division feux de forêts », raccords GFR et DSP)</li></ul>' +
        '<p>Sur le FPT du SDIS 51 (Guide d’instruction) : la <b>division mixte 65-65/2 × 40</b> est la <b>division d’alimentation</b> (prise d’eau extérieure au plus près de l’accès des secours) ; la <b>division simple 65/2 × 40</b> est la <b>division d’attaque</b>, établie dans les étages en prolongement.</p>' },
    { id: 'vannes', t: 'Les vannes', ic: 'pause', src: LIV3 + ', § 3.3 § 7 ; ' + GIM,
      html: '<ul class="check"><li>Montées entre deux tuyaux, elles stoppent momentanément l’eau dans un établissement.</li><li><b>Vanne de pied d’échelle (à purge)</b> : alimente un établissement vertical et permet la <b>vidange</b> de la partie verticale ou rampante. Au SDIS 51, on la trouve sur les moyens aériens.</li><li><b>Vannes de Ø 40 et 100 (sans purge)</b> : alimentent rapidement, sans ordre d’ouverture, un établissement de 45 ou 110 ; elles facilitent les prolongements <b>sans étrangleur</b>.</li></ul>' }
  ],
  key: ['2R – 2C – 1D – 1V : raccords, retenues, coudes, collecteurs, divisions, vannes.', 'Raccord désigné par type + diamètre intérieur (DSP 40).', 'Coude d’alimentation : 110, moins de 20 m ; retenue : 2 × 70, plus de 20 m.', 'Division mixte 65-65/2 × 40 = division d’alimentation ; 65/2 × 40 = division d’attaque.', 'GFR : tuyaux de la LDT ; Keyser : sur les BI.', 'Vanne de pied d’échelle : à purge, pour vidanger un établissement vertical.'],
  traps: ['Inverser coude (moins de 20 m, 110) et retenue (plus de 20 m, 2 × 70).', 'Serrer un raccord DSP à la tricoise : on abîme le joint.', 'Croire qu’un raccord intermédiaire change le diamètre (c’est le rôle du raccord de réduction).'],
  quiz: [
    { q: 'Pour alimenter l’engin sur une BI située à plus de 20 m, on utilise :', c: ['Une retenue et deux tuyaux de 70', 'Un coude d’alimentation et un tuyau de 110', 'Une division 65/2 × 40', 'Une vanne de pied d’échelle'], e: 'Retenue : plus de 20 m ; coude : moins de 20 m.', s: 'alimentation' },
    { q: 'Que signifie « DSP 40 » ?', c: ['Raccord Dubois Spécial Paris de 40 mm de diamètre intérieur', 'Division simple pour 40 m', 'Dévidoir sur pompe de 40 L', 'Demi-raccord à serrage progressif'], e: 'On désigne un raccord par son type et son diamètre nominal intérieur.', s: 'raccords' },
    { q: 'Les raccords GFR équipent principalement :', c: ['Les tuyaux du dévidoir tournant (Ø 20)', 'Les tuyaux d’aspiration', 'Les bouches d’incendie', 'Les tuyaux de 110'], e: 'Gros filets ronds : raccords à vis, non symétriques.', s: 'raccords' },
    { q: 'Une division « mixte » 65 / 1 × 65 et 2 × 40 permet :', c: ['De prolonger en 65 tout en alimentant deux lignes de 40', 'D’aspirer dans une réserve', 'De réduire la pression', 'D’alimenter une BI'], e: 'Elle conserve une sortie de même diamètre et deux sorties plus petites.', s: 'divisions' },
    { q: 'Quel est le rôle de la purge d’une vanne de pied d’échelle ?', c: ['Vidanger la partie verticale ou rampante de l’établissement', 'Régler le débit de la lance', 'Dégorger un poteau', 'Réduire les pertes de charge'], e: 'Livret § 3.3 § 7.', s: 'vannes' },
    { q: 'Le moyen mnémotechnique des pièces de jonction est :', c: ['2R – 2C – 1D – 1V', '3R – 1C – 2D', '2P – 2V – 1R', '1R – 1C – 1D – 1V'], e: 'Raccords, Retenues ; Coudes, Collecteurs ; Divisions ; Vannes.', s: 'definition' }
  ]
});

VSAV.chap({
  id: 'inc-accessoires-hyd', part: 'inc', seq: INC4,
  title: 'Les accessoires hydrauliques', short: 'Accessoires hydrauliques', motif: 'list',
  sources: [LIV3 + ', Partie 3, § 3.4 (p. 72-75)', GIM + ', « Les accessoires hydrauliques »', GTO_ETEX + ', ETEX-STR-ETB § 3.2'],
  summary: 'Clés, étrangleur, DFT, crépine, flotteur, hydro-éjecteur… les pièces qui font circuler, protéger et contrôler l’eau.',
  why: '<b>Pourquoi ces « petits » matériels comptent-ils ?</b> Sans clé, pas d’hydrant ; sans DFT, un camion coupe la ligne et le binôme n’a plus d’eau ; sans étrangleur, impossible de changer un tuyau percé sans tout couper à la pompe. Ces accessoires garantissent la <b>pérennité</b> de l’établissement pendant toute l’intervention (GTO).',
  sections: [
    { id: 'definition', t: 'Définition et outils de manœuvre', ic: 'list', src: LIV3 + ', § 3.4 § 1-4 ; ' + GIM,
      html: '<p>On appelle <b>accessoire hydraulique</b> l’ensemble des pièces relatives à la circulation et à la distribution de l’eau dans un établissement.</p>' +
        '<ul class="check"><li><b>Clé de poteau</b> (dite « fédérale ») : ouvrir et fermer les coffres des PI, démonter et remonter les bouchons obturateurs, manœuvrer le carré du régulateur du PI.</li><li><b>Clé de barrage</b> : manœuvrer la bouche d’incendie ; pliante, avec un ergot pour soulever les plaques.</li><li><b>Tricoise et polycoise</b> : compléter le serrage des raccords, ouvrir les coffrets gaz, colonnes sèches ou humides et diverses portes.</li></ul>',
      figs: [{ img: 'img/inc/3/accessoires.jpg', cap: 'Quelques accessoires hydrauliques', txt: '<p>Clé de poteau, clé de barrage, tricoise et polycoise, étrangleur, crochet d’amarrage, bouchons obturateurs, crépines.</p>', src: LIV3 + ', p. 72-73' }] },
    { id: 'circulation', t: 'Maîtriser et protéger l’établissement', ic: 'shield', src: LIV3 + ', § 3.4 § 5-7 et 11 ; ' + GIM,
      html: '<div class="tw"><table><thead><tr><th>Accessoire</th><th>Rôle</th></tr></thead><tbody>' +
        '<tr><td><b>Étrangleur</b></td><td>Arrêter momentanément l’eau dans un établissement <b>sans fermer la division</b> (remplacer un tuyau, prolonger une ligne d’alimentation) ; étranglement de 70 à 110 mm (Guide d’instruction)</td></tr>' +
        '<tr><td><b>Crochet ou collier d’amarrage</b></td><td>Amarrer les établissements le long d’une échelle aérienne ; le serrage est assuré par la mise en pression</td></tr>' +
        '<tr><td><b>Bouchon obturateur</b></td><td>En forme de demi-raccord : obturer les orifices des pompes et des hydrants (et des colonnes sèches)</td></tr>' +
        '<tr><td><b>D.F.T</b> (dispositif de franchissement de tuyaux)</td><td>Laisser passer les véhicules sur une ligne qui traverse une voie sans l’endommager ; placé dans le sens de passage des véhicules</td></tr>' +
        '<tr><td><b>Obturateur de fuite</b> (Guide d’instruction)</td><td>Parer en urgence une fuite sur un tuyau : disposition provisoire qui garde la pression et permet un repli sans couper l’eau</td></tr>' +
        '</tbody></table></div>' },
    { id: 'aspiration', t: 'Aspirer : crépine, flotteur, filtre', ic: 'wave', src: LIV3 + ', § 3.4 § 8-10 ; ' + GIM,
      html: '<ul class="check"><li><b>Crépine d’aspiration</b> : au bout des tuyaux d’aspiration de Ø 40, 65 et 100, elle empêche boue, cailloux et feuilles d’entrer dans la pompe ; toujours associée à un <b>flotteur</b> relié à une <b>commande</b>. Il existe des crépines droites et plates pour les faibles hauteurs d’eau.</li><li><b>Flotteur</b> : monté systématiquement sur la crépine, il l’empêche de reposer sur le fond.</li><li><b>Filtre amovible</b> : arrête les impuretés qui pourraient pénétrer dans la pompe.</li></ul>' +
        '<div class="callout warn"><b>Profondeur de la crépine : deux valeurs.</b> Le livret indique que le flotteur maintient la crépine à une profondeur <b>maximum de 50 cm</b> ; le Guide d’instruction du SDIS 51 parle d’une ligne maintenue « entre deux eaux (<b>80 cm maxi</b>) ». Se conformer à la consigne du formateur.</div>' },
    { id: 'epuisement', t: 'Épuiser, pulvériser, mesurer', ic: 'drop', src: LIV3 + ', § 3.4 § 12-16',
      html: '<div class="tw"><table><thead><tr><th>Matériel</th><th>Usage</th></tr></thead><tbody>' +
        '<tr><td><b>Hydro-éjecteur</b></td><td>Épuiser de faibles volumes d’eau, pomper là où la mise en aspiration est impossible (engin trop loin, dénivelé trop grand) en utilisant l’eau comme énergie ; réalimenter un engin porteur d’eau</td></tr>' +
        '<tr><td><b>Vide-cave</b></td><td>Épuiser l’eau des sous-sols, énergie fournie par le refoulement d’un engin pompe</td></tr>' +
        '<tr><td><b>Pompe électrique</b></td><td>Épuiser des eaux chargées quand les moteurs thermiques sont exclus ou que les hydrants sont trop loin</td></tr>' +
        '<tr><td><b>Seau-pompe</b></td><td>Seau + pompe à main : petits feux, foyers secondaires difficiles d’accès (cheminée, broussailles)</td></tr>' +
        '<tr><td><b>Pèse-bouche / pèse-poteau</b></td><td>Contrôler la <b>pression statique</b> d’un hydrant</td></tr>' +
        '<tr><td><b>Contrôleur de débit (débitmètre)</b></td><td>Mesurer le débit d’un hydrant ou d’un établissement, en m³/h</td></tr>' +
        '</tbody></table></div>' }
  ],
  key: ['Clé de poteau : PI (coffre, bouchons, carré) ; clé de barrage : BI.', 'Étrangleur : couper l’eau sans fermer la division.', 'DFT : protéger une ligne qui traverse une voie.', 'Crépine toujours associée à un flotteur relié à une commande.', 'Pèse-bouche = pression statique ; débitmètre = débit en m³/h.', 'Hydro-éjecteur et vide-cave utilisent l’eau comme énergie.'],
  traps: ['Confondre clé de poteau et clé de barrage.', 'Laisser la crépine reposer sur le fond : elle aspire boue et cailloux.', 'Croire que le pèse-poteau mesure le débit.'],
  quiz: [
    { q: 'Quel accessoire permet de couper l’eau dans un établissement sans fermer la division ?', c: ['L’étrangleur', 'Le bouchon obturateur', 'Le DFT', 'Le flotteur'], e: 'Il sert notamment à remplacer un tuyau endommagé.', s: 'circulation' },
    { q: 'Le pèse-bouche sert à contrôler :', c: ['La pression statique d’un hydrant', 'Le débit d’une lance', 'Le poids de la bouche', 'La profondeur d’une réserve'], e: 'Le débit se mesure avec un contrôleur de débit (débitmètre).', s: 'epuisement' },
    { q: 'La crépine d’aspiration doit toujours être associée à :', c: ['Un flotteur relié à une commande', 'Un étrangleur', 'Une retenue', 'Un vide-cave'], e: 'Le flotteur l’empêche de reposer sur le fond.', s: 'aspiration' },
    { q: 'Un DFT sert à :', c: ['Permettre aux véhicules de franchir une ligne de tuyaux sans l’endommager', 'Diviser un établissement', 'Filtrer l’eau d’aspiration', 'Amarrer un tuyau sur une échelle'], e: 'Dispositif de franchissement de tuyaux, placé dans le sens de passage.', s: 'circulation' },
    { q: 'Avec quoi épuise-t-on l’eau d’un sous-sol grâce au refoulement d’un engin pompe ?', c: ['Un vide-cave', 'Un seau-pompe', 'Un débitmètre', 'Une crépine plate'], e: 'Le vide-cave utilise l’eau refoulée par l’engin comme énergie.', s: 'epuisement' }
  ]
});

/* ================================================================ INCENDIE 5 — ÉTABLISSEMENTS ET STRATÉGIE D’EXTINCTION */

VSAV.chap({
  id: 'inc-etablissements', part: 'inc', seq: INC5,
  title: 'Les établissements : principes, règles et commandements', short: 'Établissements : règles', motif: 'road',
  sources: [LIV3 + ', Partie 5, § 5.1.1 (renvoi au GTO p. 47-77)', 'Diaporamas formateur « Les établissements » (manœuvres d’établissement)', GTO_ETEX + ', ETEX-STR-ETB § 2-6 (p. 49-54)', GIM],
  summary: 'Horizontal, vertical, rampant ; règles d’emploi des tuyaux ; sécurité ; BAT, BAL, conducteur ; ordres préparatoires et d’exécution.',
  why: '<b>Pourquoi des règles si précises ?</b> Un établissement doit amener l’agent extincteur <b>dans des délais compatibles avec la cinétique du feu</b> tout en <b>préservant le potentiel physique</b> des équipes pour la lutte (GTO). Un tuyau mal disposé se plie, se perce ou se coince : la lance perd son débit au pire moment. Et un ordre clair évite que deux binômes fassent la même chose ou rien.',
  sections: [
    { id: 'definition', t: 'Qu’est-ce qu’un établissement ?', ic: 'road', src: 'Diaporama « Les établissements », diapo 2 ; ' + GDR_ECH + ', § III.1.2',
      html: '<p>Un <b>établissement</b> est la disposition donnée aux tuyaux pour amener l’eau depuis une <b>prise d’eau</b> vers le <b>point d’attaque</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Type</th><th>Définition</th><th>Longueur à prévoir (diaporama)</th></tr></thead><tbody>' +
        '<tr><td><b>Horizontal</b></td><td>Tuyaux sur un sol sensiblement plat ou un plancher</td><td>—</td></tr>' +
        '<tr><td><b>Vertical</b></td><td>Tuyaux qui s’élèvent dans une cage d’escalier, le long d’un mur ou d’une échelle</td><td><b>3 à 4 m par étage</b></td></tr>' +
        '<tr><td><b>Rampant</b> (oblique)</td><td>Tuyaux qui suivent les marches d’un escalier</td><td><b>6 à 8 m par étage</b></td></tr>' +
        '</tbody></table></div>' +
        '<p>Le GDR écheveaux du SDIS 51 donne un repère en tuyaux (tuyaux de 20 m), à titre indicatif : <b>rampant 1 tuyau pour 2 étages</b> + 1 tuyau au point d’attaque ; <b>vertical 1 tuyau pour 4 étages</b> + 1 tuyau au point d’attaque.</p>' },
    { id: 'principes', t: 'Les quatre principes (GTO)', ic: 'bulb', src: GTO_ETEX + ', ETEX-STR-ETB, préambule (p. 47)',
      html: '<ul class="check"><li>Acheminer l’agent extincteur le plus approprié (en général l’eau, additivée ou non).</li><li>Le faire dans des temps compatibles avec la <b>cinétique</b> de l’opération.</li><li><b>Préserver le potentiel physique</b> des équipes pour favoriser la phase de lutte.</li><li><b>Anticiper</b> l’évolution du sinistre, donc les prolongements ou compléments à engager.</li></ul>' +
        '<p><b>Vocabulaire</b> du point d’eau vers le feu : le <b>point d’eau incendie</b> alimente l’engin pompe ; la <b>prise d’eau</b> alimente l’établissement d’attaque (engin, division, colonne sèche ou humide, poteau relais…) ; la <b>ligne d’attaque</b> est en règle générale une lance et <b>2 à 3 tuyaux souples de 45</b>.</p>' },
    { id: 'regles', t: 'Règles d’établissement et précautions', ic: 'check', src: 'Diaporama « Les établissements », diapos 3-4 ; ' + GDR_ECH + ', § III.1.1',
      html: '<p><b>Règles d’emploi :</b></p><ul class="check">' +
        '<li>Faire une <b>grande réserve en boucle</b> au point d’attaque ou à la division.</li>' +
        '<li>Dérouler du <b>point d’attaque vers la prise d’eau</b> désignée par le chef d’agrès (<b>dos au feu</b>).</li>' +
        '<li>Dérouler de bas en haut (avec une commande) ou de haut en bas (dans le jour d’une cage d’escalier).</li>' +
        '<li>Disposer les tuyaux au plus près des trottoirs ; employer le moins de tuyaux possible par le chemin le plus court ; éviter l’enchevêtrement.</li>' +
        '<li>Éviter de couper les rues ; sinon tuyaux perpendiculaires au trottoir et DFT.</li>' +
        '<li>Éviter torsions, plis et coudes brusques, surtout aux angles des murs.</li></ul>' +
        '<p><b>Précautions pour ne pas détériorer les tuyaux :</b></p><ul class="check">' +
        '<li>Pas de repos sur des décombres brûlants, coupants ou pointus ; ne pas marcher dessus, même pour les rouler.</li>' +
        '<li>Ne pas heurter les raccords ; ne pas rouler ni plier un tuyau gelé.</li>' +
        '<li>Manœuvrer <b>doucement</b> robinets et vannes pour éviter les <b>coups de bélier</b>.</li>' +
        '<li>En période de gel, laisser les lances <b>partiellement ouvertes</b>.</li>' +
        '<li>Mettre les tuyaux à l’abri des chutes de matériaux ; les rouler et les ranger dès qu’ils ne servent plus.</li></ul>' +
        '<p>Le GDR écheveaux ajoute : établir à une <b>allure soutenue sans courir</b>, au moins une radio par binôme, <b>mise en eau sur ordre</b>, finaliser en zone de sécurité ; dans une cage d’escalier, écarter le tuyau vers l’extérieur ; au passage d’une porte, vérifier que le tuyau ne se coince pas (cale fortement recommandée).</p>' },
    { id: 'securite', t: 'Sécurité pendant l’établissement', ic: 'shield', src: GTO_ETEX + ', ETEX-STR-ETB § 4 (p. 51-52)',
      html: '<p>Pendant qu’ils établissent, les personnels <b>ne peuvent pas utiliser l’eau pour se protéger</b>. Il faut donc éviter d’établir :</p>' +
        '<ul class="check"><li><b>devant les ouvrants</b> : angle de diffusion d’un éventuel phénomène à cinétique rapide d’environ <b>30°</b> ;</li><li>au droit des façades et sous les toitures touchées par l’incendie.</li></ul>' +
        '<p>Le moyen hydraulique doit être <b>prêt à l’emploi avant d’entrer</b> en zone d’exclusion : à l’extérieur d’un volume de plain-pied, au <b>niveau N-1</b> en superstructure, hors de la zone de propagation en infrastructure. Vérifier régulièrement les tuyaux (débris incandescents).</p>' +
        '<p>Autres risques : routier (balisage, bords de voie, DFT), chute (main courante, pont d’échelle, amarrages), débris contondants (nettoyage sommaire du sol).</p>' },
    { id: 'missions', t: 'BAT, BAL et conducteur', ic: 'team', src: GTO_ETEX + ', ETEX-STR-ETB § 5.1 ; diaporama « Rôle du binôme impliqué dans l’attaque », diapo 5',
      html: '<ul class="check"><li><b>BAT</b> (binômes d’attaque) : établir la ou les lignes d’attaque.</li><li><b>BAL</b> (binômes d’alimentation) : alimenter les prises d’eau et/ou l’engin pompe ; ensuite, ils peuvent recevoir une mission BAT (nouvelle lance, binôme de sécurité…).</li><li><b>Conducteur</b> : alimenter <b>seul</b> son engin si la prise d’eau est à <b>moins de 20 m</b>, avec l’aide du BAL pour une alimentation au dévidoir ou en aspiration ; garantir l’eau dans l’établissement d’attaque ; prévenir le chef d’agrès de tout dysfonctionnement.</li></ul>' +
        '<p>Nomenclature des manœuvres (GTO) : <b>ETB-1</b> LDT ; <b>ETB-2</b> division d’alimentation ou d’attaque ; <b>ETB-3</b> ligne d’attaque sur une prise d’eau ; <b>ETB-4</b> alimentation d’un dispositif hydraulique ; <b>ETB-5</b> établissements particuliers ; <b>ETB-6</b> prolongation ou remplacement de tuyau. Réalisables avec des tuyaux sur dévidoir, en couronne ou en écheveaux. Au SDIS 51, le Guide d’instruction précise que les manœuvres <b>M1 à M6</b> restent d’actualité pour les FPT à tuyaux en couronne.</p>' },
    { id: 'ordres', t: 'Les commandements', ic: 'bolt', src: GTO_ETEX + ', ETEX-STR-ETB § 6 ; diaporama « Les établissements », diapos 6-8',
      html: '<p>Un ordre doit être <b>assez précis</b> pour ne laisser que la latitude voulue par le chef d’agrès, rester <b>concis</b> et correspondre en principe à <b>une seule action</b> ; ensuite les binômes <b>rendent compte</b>.</p>' +
        '<ul class="check"><li><b>Pendant le trajet</b> : le chef d’agrès précise les fonctions des binômes et les consignes particulières.</li><li><b>Ordre préparatoire</b> : se termine par <span class="cmd">« … en reconnaissance »</span> ; il indique le matériel à emporter. Exemple : <span class="cmd">« Pour l’établissement d’une LDV 500 sur division d’alimentation, avec le dévidoir mobile, en reconnaissance »</span>.</li><li><b>Ordre d’exécution</b> : se termine par <span class="cmd">« … établissez ! »</span>. Les <b>restrictions</b> (établissement à sec, pénétration sur ordre) sont données <b>avant</b> « établissez ».</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Un ordre d’établissement contient</th><th>Question</th></tr></thead><tbody><tr><td>La nature du moyen hydraulique</td><td>« Ce que je veux »</td></tr><tr><td>L’emplacement</td><td>« À quel endroit »</td></tr><tr><td>Le cheminement (éventuellement le sens)</td><td>« Par où »</td></tr><tr><td>La mission</td><td>« Pour quelle mission »</td></tr><tr><td>Les conditions de sécurité</td><td>—</td></tr></tbody></table></div>' +
        '<p class="small">Exemple d’ordre d’exécution : <span class="cmd">« Vous réalisez l’extinction du feu en accédant par les communications existantes. Le point d’attaque est l’entrée de l’appartement, le point d’eau le fourgon. Vous pénétrez dans l’appartement sur ordre… Établissez ! »</span></p>' }
  ],
  key: ['Établissement : tuyaux de la prise d’eau au point d’attaque.', 'Vertical 3 à 4 m par étage ; rampant 6 à 8 m par étage.', 'Dérouler du point d’attaque vers la prise d’eau, dos au feu, avec une réserve.', 'Ne pas établir devant les ouvrants (cône d’environ 30°).', 'Moyen hydraulique prêt avant d’entrer (N-1 en étage).', 'Conducteur seul si prise d’eau à moins de 20 m.', 'Ordre préparatoire : « … en reconnaissance » ; exécution : « … établissez ! ».'],
  traps: ['Donner (ou attendre) une restriction après « établissez » : elle doit venir avant.', 'Établir sous une façade ou devant une fenêtre en feu.', 'Ouvrir brutalement une vanne : coup de bélier.', 'Oublier la réserve au point d’attaque : le porte-lance ne peut plus progresser.'],
  quiz: [
    { q: 'Combien de mètres de tuyau prévoir par étage pour un établissement rampant (diaporama) ?', c: ['6 à 8 m', '3 à 4 m', '10 à 12 m', '1 à 2 m'], e: 'Vertical : 3 à 4 m par étage ; rampant : 6 à 8 m.', s: 'definition' },
    { q: 'Dans quel sens déroule-t-on en règle générale les tuyaux ?', c: ['Du point d’attaque vers la prise d’eau, dos au feu', 'De la prise d’eau vers le feu, face au feu', 'Peu importe', 'Toujours depuis l’engin'], e: 'Diaporama « Les établissements », règles d’emploi des tuyaux.', s: 'regles' },
    { q: 'Comment se termine un ordre d’exécution d’établissement ?', c: ['« … établissez ! »', '« … en reconnaissance »', '« … à vos rangs »', '« … en avant ! »'], e: '« En reconnaissance » termine l’ordre préparatoire.', s: 'ordres' },
    { q: 'Où place-t-on une restriction d’engagement (ex. : pénétrer sur ordre) ?', c: ['Avant « établissez »', 'Après « établissez »', 'Dans l’ordre préparatoire uniquement', 'Par radio une fois en place'], e: 'GTO § 6.2 : les restrictions sont formulées avant l’ordre « établissez ».', s: 'ordres' },
    { q: 'Le conducteur alimente seul son engin quand la prise d’eau est :', c: ['À moins de 20 m de l’engin', 'À moins de 60 m', 'À moins de 200 m', 'Jamais'], e: 'Au-delà, ou en aspiration ou au dévidoir, il est aidé par le BAL.', s: 'missions' },
    { q: 'Pourquoi éviter d’établir devant les ouvrants ?', c: ['Un phénomène à cinétique rapide peut s’y diffuser (cône d’environ 30°) alors que l’équipe ne peut pas se protéger avec l’eau', 'Pour ne pas salir la façade', 'Parce que les tuyaux gênent les échelles', 'Pour économiser des tuyaux'], e: 'GTO § 4.1 sécurité vis-à-vis du feu.', s: 'securite' },
    { q: 'En période de gel, la règle est :', c: ['Laisser les lances partiellement ouvertes', 'Fermer toutes les lances', 'Vider l’engin', 'Plier les tuyaux gelés'], e: 'Et ne jamais rouler ni plier un tuyau gelé.', s: 'regles' }
  ]
});

VSAV.chap({
  id: 'inc-manoeuvres-etb', part: 'inc', seq: INC5,
  title: 'Les manœuvres d’établissement ETB-1 à ETB-6', short: 'Manœuvres ETB-1 à 6', motif: 'ambulance',
  sources: [GTO_ETEX + ', fiches ETEX-STR-ETB-1 à ETB-6 (p. 55-78)', 'Diaporama « Les établissements », diapo 5', GIM],
  summary: 'LDT, division d’alimentation ou d’attaque, ligne d’attaque, alimentation de l’engin, établissements particuliers, prolongement.',
  why: '<b>Pourquoi plusieurs manœuvres types ?</b> Il n’y a pas un établissement idéal : la LDT est immédiate mais courte ; la division sur tuyaux de 70 amène de gros débits près du feu avec peu de pertes de charge ; la division d’attaque évite de monter des dizaines de mètres de 45 dans les étages. Connaître les objectifs de chaque manœuvre permet de comprendre l’ordre du chef d’agrès et d’anticiper.',
  sections: [
    { id: 'etb1', t: 'ETB-1 : la lance du dévidoir tournant (LDT)', ic: 'play', src: GTO_ETEX + ', ETEX-STR-ETB-1 (p. 55-57)',
      html: '<p><b>40 à 80 m</b> de tuyaux semi-rigides pré-connectés à la lance et à la pompe, maintenus en eau. Objectif : une lance de <b>80 à 300 L/min</b> à proximité immédiate du fourgon, pour un sinistre de plain-pied ou en étage limité (maison, garage, appartement au R+1, cave…). Commandement : <span class="cmd">« Pour l’établissement de la LDT, en reconnaissance »</span>.</p>' +
        '<div class="callout warn">Le GTO donne le diamètre des tuyaux de LDT tantôt en <b>23 ou 33 mm</b> (fiche ETB-1 § 1), tantôt en <b>25 ou 33 mm</b> (§ 3.4 et tableau) ; le Guide d’instruction du SDIS 51 parle de tuyaux de <b>22</b>.</div>' +
        '<ul class="check"><li>Avantages : rapidité, maniabilité, reconditionnement facile ; peut être prolongée par des tuyaux souples.</li><li>Contraintes : limitée par sa longueur ; si elle s’avère inefficace, il faut changer d’établissement et on perd du temps.</li><li>Le chef d’équipe fait une <b>réserve de deux à trois tours sur l’épaule</b>.</li><li>Établissement vertical : tuyaux établis au sol puis hissés à la commande, ou tirés derrière le chef BAT sur une échelle ; solidarisés par sangles ou crochets d’échelle.</li></ul>' },
    { id: 'etb2', t: 'ETB-2 : division d’alimentation ou d’attaque', ic: 'target', src: GTO_ETEX + ', ETEX-STR-ETB-2 (p. 59-62) ; ' + GIM,
      html: '<p>Alimenter une division au plus près du sinistre pour y connecter une ou deux lignes d’attaque. Les tuyaux de <b>70</b> limitent les pertes de charge.</p>' +
        '<div class="tw"><table><thead><tr><th>Moyen (division d’alimentation)</th><th>Avantages</th><th>Contraintes</th></tr></thead><tbody>' +
        '<tr><td>Dévidoir mobile (de la division vers l’engin)</td><td>Prise d’eau jusqu’à <b>400 m</b> (2 dévidoirs) ; repérage des accès au premier aller</td><td>Obstacles (escaliers, muret, haie)</td></tr>' +
        '<tr><td>Division sur tuyaux de 70 en écheveaux dans un coffre (de l’engin vers la division)</td><td>Rapide, BAL vite disponible, faisable par le conducteur</td><td>Longueur limitée à <b>60 m</b></td></tr>' +
        '<tr><td>Division et trois tuyaux de 70 en couronne</td><td>Conditionnement connu de tous</td><td>Port difficile, établissement à peaufiner</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Division d’attaque</b> (en prolongation) : pour un sinistre en étage élevé, elle limite le recours aux tuyaux de 45, générateurs de pertes de charge (les établissements obliques exigent de grandes longueurs). Elle peut remplacer une colonne sèche défectueuse ou multiplier les actions.</p>' +
        '<p><b>Colonne sèche</b> : alimentée comme une division ; <b>vérifier les bouchons</b> de chaque orifice (sinon perte d’efficacité pour le binôme ou inondation) ; un sac de bouchons est généralement emporté.</p>' },
    { id: 'etb3', t: 'ETB-3 : ligne d’attaque sur une prise d’eau', ic: 'flame', src: GTO_ETEX + ', ETEX-STR-ETB-3 (p. 63-66)',
      html: '<p>Une lance connectée à <b>2 ou 3 tuyaux souples de 45</b> (couronne, sac d’attaque, écheveaux épaulés, dévidoir, coffre). La ligne d’attaque doit être <b>protégée des effets du feu</b>. Commandement : <span class="cmd">« Pour l’établissement d’une lance (nature, débit) à l’aide de (tuyaux en couronne, sac d’attaque, écheveaux, dévidoir…), en reconnaissance »</span> ; la prise d’eau est précisée après désignation du point d’attaque.</p>' +
        '<div class="tw"><table><thead><tr><th>Prise d’eau</th><th>Pour quel sinistre (GTO)</th></tr></thead><tbody>' +
        '<tr><td>L’engin</td><td>Plain-pied ou étage limité, à proximité immédiate du fourgon</td></tr>' +
        '<tr><td>Division d’alimentation</td><td>En étages, <b>en général au maximum R+4</b>, établissement oblique par les escaliers</td></tr>' +
        '<tr><td>Colonne sèche ou humide</td><td>En étage d’un bâtiment équipé</td></tr>' +
        '<tr><td>Division d’attaque</td><td><b>Au-delà du R+4</b> (sans colonne sèche ou humide)</td></tr>' +
        '</tbody></table></div>' +
        '<div class="tw"><table><thead><tr><th>Matériel proposé (GTO)</th><th>ARI</th><th>Lampe</th><th>Lance</th><th>Tuyaux 45</th><th>Autre</th></tr></thead><tbody>' +
        '<tr><td>Chef d’agrès</td><td>—</td><td>1</td><td>—</td><td>—</td><td>Radio, outil de forcement</td></tr>' +
        '<tr><td>Chef BAT</td><td>1</td><td>1</td><td>1</td><td>1</td><td>Radio*, caméra thermique*</td></tr>' +
        '<tr><td>Équipier BAT</td><td>1</td><td>1</td><td>—</td><td>2</td><td>Radio*, commande</td></tr>' +
        '</tbody></table></div><p class="small muted">* si en dotation.</p>',
      figs: [
        { img: 'img/inc/3/lance-division-alim.jpg', cap: 'Lance sur division d’alimentation', txt: '<p>Ligne de 70 de l’engin à la division posée en pied d’immeuble, puis tuyaux de 45 qui montent par l’escalier jusqu’au point d’attaque (en général jusqu’au R+4).</p>', src: GTO_ETEX + ', p. 65 (illustration 2)' },
        { img: 'img/inc/3/lance-division-attaque.jpg', cap: 'Lance sur division d’attaque', txt: '<p>Au-delà du R+4 : la ligne de 70 est prolongée dans les étages jusqu’à une division d’attaque, d’où part la ligne de 45.</p>', src: GTO_ETEX + ', p. 66 (illustration 3)' }
      ] },
    { id: 'etb4', t: 'ETB-4 : alimenter le dispositif hydraulique', ic: 'drop', src: GTO_ETEX + ', ETEX-STR-ETB-4 (p. 67-73)',
      html: '<p>Les lances actuelles sont efficaces avec moins d’eau : avec une citerne d’environ <b>3 000 L</b> (FPT), l’alimentation de l’engin n’est plus une obligation absolue dans les premiers temps. Un VPI (600 à 1 200 L) doit en revanche être alimenté rapidement.</p>' +
        '<ul class="check"><li>Une pompe ne doit pas travailler à plus de <b>80 %</b> de ses capacités (risque de rupture hydraulique).</li><li>Alimentation optimisée : <b>une ligne de 110</b> ou <b>deux lignes de 70</b>.</li><li>Pression minimale à l’arrivée de la pompe : <b>1 bar</b>.</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Situation</th><th>Qui</th><th>Matériel proposé</th></tr></thead><tbody>' +
        '<tr><td>Engin au point d’eau</td><td>Conducteur</td><td>1 tuyau de <b>10 m de Ø 110</b>, clé de poteau ou de bouche, col de cygne (si bouche)</td></tr>' +
        '<tr><td>Ligne de 70 à proximité immédiate</td><td>Conducteur</td><td>1 tuyau de 20 m de Ø 70 (jusqu’à 3 si écheveaux), clé, retenue (si bouche)</td></tr>' +
        '<tr><td>Plus loin</td><td>BAL (+ conducteur : collecteur)</td><td>Tuyaux de 70 en couronne (généralement pas plus de trois) ou 1 à 2 dévidoirs mobiles, clé, retenue</td></tr>' +
        '<tr><td>Point d’eau naturel</td><td>Conducteur aidé du BAL</td><td>Aspiraux, crépine, flotteur ; MPR ou motopompe flottante si besoin. Sur un dispositif fixe : vérifier son état puis refouler dedans quelques secondes</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Établissements particuliers</b> : au-delà d’environ <b>400 m</b> (deux dévidoirs de 70 d’un FPT), on préfère une ligne de <b>110</b> ; un dévidoir automobile établit environ <b>100 m en 2 minutes</b>. Noria : un PI de 60 m³/h remplit une citerne de 3 000 L en près de 3 min, plus 2 à 5 min pour installer et 2 à 5 min pour défaire. Citerne souple : 3 000 à 10 000 L, environ <b>20 min</b> de montage.</p>' +
        '<div class="callout warn">Le conducteur veille à <b>sécuriser sa zone de travail</b>. Pour garantir l’eau aux lances, il est préférable de laisser l’engin qui alimente en place et de le remplir par les norias.</div>' },
    { id: 'etb5', t: 'ETB-5 : établissements particuliers', ic: 'shield', src: GTO_ETEX + ', ETEX-STR-ETB-5 (p. 75)',
      html: '<p>Lance <b>canon</b> (attaquer en masse un feu de grande surface) ou lance <b>queue de paon</b> (rideau d’eau face à un flux thermique), notamment pour <b>couper la propagation entre deux bâtiments</b>. Dispositif fixe sur une ligne de 70 au dévidoir (ou de 110 au dévidoir automobile). Les lances elles-mêmes sont traitées dans le chapitre consacré au matériel.</p>' },
    { id: 'etb6', t: 'ETB-6 : prolonger ou remplacer un tuyau', ic: 'reset', src: GTO_ETEX + ', ETEX-STR-ETB-6 (p. 77-78)',
      html: '<p>Deux objectifs : <b>la sécurité</b> des intervenants au plus près du feu et <b>la durée de coupure d’eau la plus courte possible</b>. La coordination, notamment par radio, est fondamentale. Le prolongement est décidé par le chef d’agrès après concertation ; le tuyau de rechange est si possible apporté par une autre équipe pour <b>ne pas dissocier le binôme</b>.</p>',
      steps: ['Chef d’équipe : se met en sécurité, garde le contact visuel avec le feu et ordonne la fermeture de l’eau.', 'Équipier BAT : ferme l’alimentation sur ordre (l’ordre est répercuté au conducteur si la ligne part directement de l’engin).', 'Équipier BAT : établit le tuyau (remplacement ou prolongement).', 'Équipier BAT : rouvre l’eau sur ordre du chef d’équipe.', 'Le binôme poursuit son action ; le chef informe le chef d’agrès des conséquences sur le feu.'], stepsTitle: 'Remplacement d’un tuyau sur la ligne d’attaque',
      after: '<div class="callout ok">Dans tous les cas, <b>la fermeture de l’eau est commandée par le chef d’équipe du binôme d’attaque</b> : c’est sa sécurité et celle de son équipier qui sont en jeu. Sur une ligne d’alimentation, c’est généralement le BAL qui intervient.</div>' }
  ],
  key: ['ETB-1 LDT : 40 à 80 m, 80 à 300 L/min, plain-pied ou étage limité.', 'ETB-2 : division au plus près du feu sur tuyaux de 70 ; dévidoir jusqu’à 400 m (2 dévidoirs).', 'Lance sur division d’alimentation : en général jusqu’au R+4 ; au-delà, division d’attaque.', 'Pompe à 80 % maximum ; alimentation par 1 × 110 ou 2 × 70.', 'Au-delà d’environ 400 m : ligne de 110.', 'Prolongement : la fermeture de l’eau est commandée par le chef BAT.'],
  traps: ['Croire que l’engin doit toujours être alimenté avant d’attaquer (avec 3 000 L ce n’est plus une obligation absolue).', 'Oublier de vérifier les bouchons d’une colonne sèche.', 'Dissocier le binôme pour aller chercher un tuyau de rechange.'],
  quiz: [
    { q: 'Quel débit peut atteindre la LDT selon le GTO ?', c: ['80 à 300 L/min', '500 L/min', '1 000 L/min', '20 à 50 L/min'], e: 'Fiche ETEX-STR-ETB-1, objectif.', s: 'etb1' },
    { q: 'Au-delà de quel niveau le GTO prévoit-il une division d’attaque (sans colonne sèche) ?', c: ['Au-delà du R+4', 'Dès le R+1', 'Au-delà du R+10', 'Jamais'], e: 'La lance sur division d’alimentation couvre en général jusqu’au R+4.', s: 'etb3' },
    { q: 'Jusqu’à quelle distance un dévidoir mobile permet-il d’alimenter une prise d’eau ?', c: ['400 m avec 2 dévidoirs', '60 m', '1 km', '20 m'], e: 'Tableau ETB-2 ; les écheveaux de 70 en coffre sont limités à 60 m.', s: 'etb2' },
    { q: 'Qui commande la fermeture de l’eau lors du remplacement d’un tuyau de la ligne d’attaque ?', c: ['Le chef d’équipe du binôme d’attaque', 'Le conducteur', 'Le chef d’agrès uniquement', 'Le BAL'], e: 'C’est la sécurité de son binôme qui est en jeu.', s: 'etb6' },
    { q: 'À quel pourcentage maximal de ses capacités évite-t-on de faire travailler une pompe ?', c: ['80 %', '50 %', '100 %', '120 %'], e: 'Pour préserver la pompe et la sécurité des intervenants (rupture hydraulique).', s: 'etb4' },
    { q: 'Au-delà d’environ quelle distance préfère-t-on une ligne de 110 ?', c: ['400 m', '40 m', '100 m', '2 km'], e: '400 m correspondent à deux dévidoirs de 70 d’un FPT.', s: 'etb4' },
    { q: 'Que faut-il vérifier avant d’alimenter une colonne sèche ?', c: ['La présence des bouchons à chaque orifice', 'La pression du réseau d’eau potable', 'Que l’ascenseur fonctionne', 'Le poids de la colonne'], e: 'Un orifice ouvert = perte d’efficacité pour le binôme ou inondation.', s: 'etb2' }
  ]
});

VSAV.chap({
  id: 'inc-echeveaux', part: 'inc', seq: INC5,
  title: 'Les tuyaux en écheveaux (GDR SDIS 51)', short: 'Tuyaux en écheveaux', motif: 'rope',
  sources: [GDR_ECH, LIV3 + ', Partie 5, § 3 « Établissement des tuyaux en écheveaux » (renvoi au GDR)'],
  summary: 'Tuyaux pliés en Z et en O, épaulés : matériel du binôme, division de pied d’immeuble, sens d’établissement.',
  why: '<b>Pourquoi les écheveaux ?</b> Le SDIS 51 les a adoptés pour corriger les défauts du sac d’attaque : binôme qui se désolidarise, difficulté à atteindre le 7e étage, postures pénibles. Épaulés, les tuyaux laissent les <b>mains libres</b>, répartissent l’effort entre chef et équipier et permettent d’établir <b>aussi bien depuis la prise d’eau</b> que depuis le point d’attaque : on gagne du temps et de l’énergie avant l’attaque.',
  sections: [
    { id: 'definition', t: 'Définition et avantages', ic: 'rope', src: GDR_ECH + ', § II.1',
      html: '<p>« Écheveau » : un assemblage de fils repliés plusieurs fois sur eux-mêmes et liés pour ne pas s’emmêler. On regroupe sous ce terme les tuyaux <b>pré-connectés ou épaulés</b> sous différents pliages : <b>Ø 45/20 m en « Z » et en « O »</b>, Ø 70/20 m en Z (épaulés ou en caisse), Ø 110 lovés en Z en coffre.</p>' +
        '<ul class="check"><li>Établissement du point d’attaque à la prise d’eau, mais aussi <b>de la prise d’eau au point d’attaque</b> (eau plus vite si nécessaire).</li><li>Durée d’établissement réduite ; effort et matériel répartis entre chef et équipier.</li><li>Transport mains libres, meilleure ergonomie, gain physiologique avant l’attaque.</li><li><b>Pas de dissociation du binôme</b> pendant l’établissement.</li></ul>' +
        '<p>L’emploi des écheveaux relève de la seule décision du chef d’agrès ; il n’a aucun caractère obligatoire et les manœuvres M1 à M6 restent en vigueur.</p>',
      figs: [{ img: 'img/inc/3/echeveaux-pliages.jpg', cap: 'Tuyaux de Ø 45/20 m épaulés en « Z » et en « O »', txt: '<p>Le tuyau en O porte la lance : il est réservé à l’attaque, au plus près du sinistre.</p>', src: GDR_ECH + ', p. 9' }] },
    { id: 'materiel', t: 'Le matériel de base du binôme', ic: 'list', src: GDR_ECH + ', § I.5.3',
      html: '<div class="tw"><table><thead><tr><th>Fonction</th><th>Tuyaux</th><th>Autre matériel</th></tr></thead><tbody>' +
        '<tr><td><b>Chef BAT</b></td><td>1 tuyau Ø 45 plié en <b>O</b> avec sa lance (LDMRS)</td><td>Projecteur, ARI, radio (option), outils de forcement</td></tr>' +
        '<tr><td><b>Équipier BAT</b></td><td>2 tuyaux Ø 45 pliés en <b>Z</b></td><td>Commande, ARI, caméra thermique</td></tr>' +
        '<tr><td><b>Chef BAL</b></td><td>1 tuyau Ø 70/20 plié en Z avec la <b>division 65/2 × 40</b></td><td>Matériel sur ordre, projecteur, radio (option)</td></tr>' +
        '<tr><td><b>Équipier BAL</b></td><td>2 tuyaux Ø 70/20 pliés en Z</td><td>Matériel sur ordre, projecteur, commande</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Reconditionnement</b> : bien vider l’eau résiduelle (elle n’est pas chassée par le pliage), bien serrer pour chasser l’air, privilégier des tuyaux secs, vérifier sangle et mousqueton de la division d’attaque.</p>' },
    { id: 'pied-immeuble', t: 'La division de pied d’immeuble', ic: 'hospital', src: GDR_ECH + ', § III.2.2-III.2.3',
      html: '<p>Un sac de <b>2 tuyaux de Ø 70/20 m</b> et d’une <b>division mixte</b> : il crée une prise d’eau au niveau du point d’accès des secours. Le chef d’agrès décide seul de son établissement (lui-même, conducteur, BAT ou BAL) et de sa mise en eau.</p>' +
        '<p><b>Commandements :</b> BAT <span class="cmd">« M3 : pour l’établissement d’une lance X, en reconnaissance »</span> (couronnes) ou <span class="cmd">« E3 : pour l’établissement d’une lance X épaulés, en reconnaissance »</span> ; BAL <span class="cmd">« M2 »</span> (dévidoir ou couronnes) ou <span class="cmd">« E2 : pour l’établissement d’une division d’attaque, en reconnaissance »</span>.</p>' +
        '<p><b>Conducteur</b> : en aspiration, aidé du BAL ; à <b>moins de 20 m</b> d’un hydrant, il alimente seul (1 tuyau Ø 110/20 m ou 2 × Ø 110/10 m pliés en Z, ou 2 tuyaux Ø 70/20 m en couronne) ; à plus de 20 m, manœuvre BAL. Pour les manœuvres d’attaque, il ouvre l’eau sur ordre du chef BAT ou du chef d’agrès.</p>',
      figs: [{ img: 'img/inc/3/echeveaux-schema.jpg', cap: 'Du point d’eau au point d’attaque', txt: '<p>Alimentation en 110 à moins de 20 m (ou double alimentation à plus de 20 m), division de pied d’immeuble, division d’attaque montée par le BAL, LDV épaulée du BAT jusqu’au point d’attaque.</p>', src: GDR_ECH + ', p. 21' }] },
    { id: 'sens', t: 'Dans quel sens établir ?', ic: 'next', src: GDR_ECH + ', § III.2.3 et logigrammes (p. 18-28)',
      html: '<div class="tw"><table><thead><tr><th>Situation</th><th>Sens</th></tr></thead><tbody>' +
        '<tr><td>Cheminement <b>identifié ou évident</b> et feu <b>localisé</b></td><td>Du <b>point d’eau</b> au <b>point d’attaque</b> (gage d’efficacité et de rapidité)</td></tr>' +
        '<tr><td>Cheminement <b>non identifié</b> ou feu <b>non localisé</b></td><td>Reconnaissance approfondie, puis du <b>point d’attaque</b> au <b>point d’eau</b> (règle générale)</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Seuil de la division d’attaque : formulations différentes.</b> Le GDR indique une division d’attaque « <b>systématique à partir du R+4</b> » (« en cas de sinistre à partir du 4e étage, établissement systématique d’une division »), alors que son logigramme oppose « <b>&gt; R+3</b> » (BAL : division d’attaque) et « <b>&lt; R+3</b> » (BAT seul). Le GTO national place la lance sur division d’alimentation « en général au maximum au R+4 » et la division d’attaque « au-delà du R+4 ».</div>' +
        '<ul class="check"><li>Mise en eau à <b>N-1</b> si la cage d’escalier n’est pas protégée ou dès la présence d’un plafond de fumées.</li><li>Cage d’escalier cloisonnée : laisser la division dans la cage d’escalier.</li><li><b>Amarrer</b> l’établissement en étage ; <b>ne mettre l’eau que sur ordre</b>.</li><li>Dans l’escalier, le tuyau est disposé contre les parois externes (sauf escalier en colimaçon) ; raccordements à hauteur d’homme.</li></ul>' },
    { id: 'ldv-epaulee', t: 'La LDV épaulée, du point d’eau au point d’attaque', ic: 'team', src: GDR_ECH + ', « LDV épaulée » (p. 23)',
      steps: ['Chef d’équipe et équipier BAT se munissent de leur matériel de base et restent ensemble pendant tout le transit.', 'Chef d’équipe : pré-connecte les tuyaux de l’équipier (non obligatoire), raccorde le tuyau de l’équipier à la prise d’eau et ouvre la tubulure selon la configuration.', 'Équipier : suit le chef d’agrès jusqu’au point d’attaque et déplie 1 ou 2 tuyaux en Z au besoin ; le chef suit en ajustant le tuyau sur l’extérieur de l’escalier.', 'Chef d’équipe : pose son tuyau en O et vérifie sa lance ; l’équipier branche le Z au O et amarre le raccord.', 'Chef d’équipe : ordonne l’ouverture de l’eau au conducteur ; l’équipier facilite la progression et double le chef.'], stepsTitle: 'LDV épaulée (BAT)',
      after: '<p>Le binôme décide de mettre 2 ou 3 tuyaux selon le besoin ; le dispositif est établi au plus près du point d’attaque pour progresser avec le tuyau en O.</p>' }
  ],
  key: ['Écheveaux = tuyaux pré-connectés ou épaulés pliés en Z ou en O.', 'Chef BAT : tuyau de 45 en O avec la lance ; équipier BAT : 2 tuyaux de 45 en Z.', 'Division de pied d’immeuble : 2 × 70/20 m + division mixte.', 'Cheminement connu et feu localisé : du point d’eau au point d’attaque.', 'Sinon : reconnaissance, puis du point d’attaque au point d’eau.', 'Mise en eau à N-1 si cage non protégée ou plafond de fumées ; eau sur ordre.'],
  traps: ['Établir depuis le point d’eau alors que le feu n’est pas localisé.', 'Reconditionner un écheveau sans vider l’eau résiduelle.', 'Séparer chef et équipier BAT pendant le transit.'],
  quiz: [
    { q: 'Quel tuyau porte le chef BAT en écheveaux ?', c: ['Un tuyau de 45 plié en O avec sa lance', 'Deux tuyaux de 45 pliés en Z', 'Un tuyau de 70 en Z avec la division', 'Un tuyau de 110'], e: 'L’équipier BAT porte deux tuyaux de 45 en Z.', s: 'materiel' },
    { q: 'Le feu est localisé et le cheminement évident. On établit :', c: ['Du point d’eau au point d’attaque', 'Du point d’attaque au point d’eau', 'Seulement avec la LDT', 'Après une reconnaissance approfondie seulement'], e: 'GDR : gage d’efficacité et de rapidité.', s: 'sens' },
    { q: 'De quoi se compose la division de pied d’immeuble ?', c: ['2 tuyaux de Ø 70/20 m et une division mixte', '1 tuyau de 110 et une retenue', '3 tuyaux de 45 et une lance', 'Une colonne sèche'], e: 'Elle crée une prise d’eau au point d’accès des secours.', s: 'pied-immeuble' },
    { q: 'Quand met-on en eau à N-1 ?', c: ['Si la cage d’escalier n’est pas protégée ou dès la présence d’un plafond de fumées', 'Toujours au rez-de-chaussée', 'Jamais', 'Seulement au-dessus du R+10'], e: 'GDR, consignes LDV épaulée.', s: 'sens' },
    { q: 'Quel est un avantage des écheveaux cité par le GDR ?', c: ['Pas de dissociation du binôme pendant l’établissement', 'Aucun entraînement nécessaire', 'Moins de pertes de charge que la LDT', 'Pas besoin de radio'], e: 'Avec aussi la répartition des efforts et le transport mains libres.', s: 'definition' }
  ]
});

VSAV.chap({
  id: 'inc-binome-attaque', part: 'inc', seq: INC5,
  title: 'Le rôle du binôme impliqué dans l’attaque', short: 'Binôme d’attaque', motif: 'team',
  sources: ['Diaporama formateur « Rôle du binôme impliqué dans l’attaque »', GTO_ETEX + ', ETEX-STR-TDE § 3-4 (p. 82-84)', 'GDO Incendies de structures (2018), chap. 2'],
  summary: 'Point d’attaque, types de binômes, rôles du porte-lance et de l’équipier, règles d’engagement, positions et protection.',
  why: '<b>Pourquoi un binôme indissociable ?</b> Les binômes sont « les yeux et les bras du chef d’agrès ». Le porte-lance a les yeux sur le feu ; l’équipier, placé de l’autre côté du tuyau, surveille le reste : ensemble ils voient à <b>360°</b>. Rester ensemble quoi qu’il arrive, c’est pouvoir se secourir, se replier et se protéger avec la lance.',
  sections: [
    { id: 'generalites', t: 'Attaque et point d’attaque', ic: 'target', src: 'Diaporama « Rôle du binôme… », diapos 2-3 ; GDO Incendies de structures, chap. 2',
      html: '<p>L’<b>attaque</b> consiste à abattre les flammes et enrayer la propagation jusqu’à l’extinction ; l’arrivée d’eau et la baisse de température facilitent les sauvetages. Le <b>point d’attaque</b>, désigné par le chef d’agrès, est l’emplacement du porte-lance ; il peut varier au cours du sinistre.</p>' +
        '<ul class="check"><li><b>Un binôme, une action</b> à la fois ; fonctions désignées pendant le trajet.</li><li>Le binôme n’a pas de fonction unique.</li><li>Les actions offensives à l’intérieur d’un volume se font <b>systématiquement en binôme</b> ; le COS met en place dès que possible un <b>binôme de sécurité</b> (GDO).</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Binôme</th><th>Mission</th></tr></thead><tbody>' +
        '<tr><td>Attaque (BAT)</td><td>Attaque du sinistre avec une lance ; s’équipe d’ARI pendant le trajet sauf ordre contraire</td></tr>' +
        '<tr><td>Alimentation (BAL)</td><td>Alimente l’établissement</td></tr>' +
        '<tr><td>Sécurité</td><td>Prêt à intervenir en cas de défaillance d’un binôme engagé</td></tr>' +
        '<tr><td>Appui et soutien</td><td>Protège l’action des premiers binômes</td></tr>' +
        '<tr><td>Reconnaissance</td><td>Indique communications, cheminements, difficultés, personnes à secourir</td></tr>' +
        '<tr><td>Sauvetage</td><td>Sauvetages et mises en sécurité (voir le chapitre consacré aux sauvetages)</td></tr>' +
        '</tbody></table></div>' },
    { id: 'roles', t: 'Porte-lance et double porte-lance', ic: 'team', src: GTO_ETEX + ', ETEX-STR-TDE § 3.1-3.3 ; diaporama, diapos 4 et 6',
      html: '<p><b>Chef BAT = porte-lance.</b> Avec le chef d’agrès, il choisit l’établissement et la façon d’utiliser la lance (lecture du feu, du bâtiment, de l’activité), veille aux conditions de ventilation, rend compte régulièrement. Une extinction qui dure anormalement doit être signalée : la méthode est peut-être inadaptée.</p>' +
        '<ul class="check"><li><b>Avant de pénétrer</b> : position la plus basse possible, à l’écart des effets d’un phénomène thermique ; rechercher les signes d’alarme ; prévoir un chemin de repli ; s’assurer que les conditions sont remplies.</li><li><b>Dans le local</b> : explorer bas, par avancées successives, hors du sens de tirage ; adapter le jet en respectant le débit commandé ; <b>se replier en cas de baisse anormale de l’eau</b> à la lance et rendre compte ; n’utiliser que l’eau strictement nécessaire.</li><li>Se placer dans le sens de tirage <b>en amont du foyer</b> : éviter la zone entre le foyer et le sortant.</li></ul>' +
        '<p><b>Équipier BAT = double porte-lance.</b> Devoirs (diaporama) : être vigilant et aider le chef ; veiller à la sécurité du binôme ; relever le chef si nécessaire ; déblayer pour faciliter sa progression ; écarter ce qui peut alimenter le feu ; entraîner dans le foyer les parties qui menacent de s’écrouler. Le GTO ajoute : ajuster l’établissement (coudes, coincements), le protéger des zones à risque, le faire suivre, aider à obtenir le bon angle, se placer <b>de l’autre côté du tuyau</b> (chef + équipier = 360°), observer le feu.</p>' +
        '<div class="callout ok"><b>Gestion des efforts :</b> l’équipier est généralement le plus sollicité. À la découverte d’une victime, il peut être pertinent que le chef, moins fatigué, prenne la victime en charge et que l’équipier tienne la lance le temps de l’extraction (GTO). La découverte d’une victime justifie l’arrêt momentané de la progression (diaporama).</div>' },
    { id: 'engagement', t: 'Règles d’engagement', ic: 'shield', src: 'Diaporama « Rôle du binôme… », diapos 7-11',
      html: '<div class="tw"><table><thead><tr><th>Emport pendant le trajet</th><th>ARI</th><th>Cagoule d’évacuation</th><th>Lance</th><th>Tuyaux</th><th>Commande</th><th>Lampe</th></tr></thead><tbody>' +
        '<tr><td>Chef</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>Équipier</td><td>1</td><td>0</td><td>0</td><td>2</td><td>1</td><td>1</td></tr></tbody></table></div>' +
        '<ul class="check"><li>Sur les lieux, avant engagement : <b>contrôle croisé</b> des EPI (règles de l’ARI : voir le chapitre consacré).</li><li>Rester en binôme <b>indissociable</b> toute la durée de l’engagement, sauf attaque par l’extérieur où il peut exceptionnellement être scindé.</li><li><b>À l’air libre</b> : ARI coiffé sur ordre ; attaquer du côté non atteint par le feu et les fumées, si possible dans la direction du vent ; se placer au <b>niveau du plan du feu ou légèrement au-dessus</b>, hors des fumées et du rayonnement, stable et protégé des chutes.</li><li><b>Dans un local</b> (appartement, cave, parking, cage d’escalier…) : <b>ARI obligatoirement coiffé</b>.</li></ul>' +
        '<p><b>Itinéraire de repli</b> : le trajet emprunté en entrant, à utiliser en priorité pour sortir. <b>Itinéraire de secours</b> : le remplace s’il n’est plus praticable ; recherché dès l’arrivée (échelles, moyens aériens, une ouverture) ; sa position est indiquée à tous.</p>',
      figs: [{ img: 'img/inc/3/faces.jpg', cap: 'Dénomination des faces', txt: '<p>L’accès principal est la face A (Alpha), puis on tourne dans le sens des aiguilles d’une montre : B (Bravo), C (Charlie), D (Delta).</p>', src: 'Diaporama « Rôle du binôme… », diapo 11' }] },
    { id: 'positions', t: 'Positions, progression et protection', ic: 'walk', src: 'Diaporama « Rôle du binôme… », diapos 12-15 ; ' + GTO_ETEX + ', ETEX-STR-TDE § 4',
      html: '<ul class="check"><li><b>Debout</b> : la plus stable et commode, pour l’air libre (feu de VL, entrepôt) ; travailler de <b>¾ face, pieds décalés</b>, tuyau sous le bras pour amortir le recul ; le double porte-lance se place derrière. Tuyau à l’épaule pour une attaque plongeante (habitacle de véhicule).</li><li><b>À genoux</b> : primordiale en feu clos ou semi-clos ; toujours de ¾ face, tuyau sous le bras et sur le haut de la cuisse.</li><li><b>Progression</b> : garder un genou au sol et glisser l’autre jambe pour revenir vite en position de travail ; lance tenue en partie haute pour ne pas la dérégler.</li><li><b>Repli</b> : en se protégeant avec la lance en <b>jet diffusé de protection au débit maximum</b>.</li></ul>' +
        '<div class="callout bad"><b>Protection ultime</b> : si le repli n’est plus possible et que le binôme est directement menacé par un phénomène thermique, il <b>se jette au sol face contre terre, regroupé</b>, et maintient la lance <b>au-dessus des casques</b> en jet diffusé de protection au <b>débit maximum</b>.</div>' +
        '<p>Mesures de protection (GTO) : lecture attentive du feu, itinéraire de repli et de secours, repli hors du volume dès que la progression n’est plus sûre, impulsions adaptées, progression au ras du sol.</p>',
      figs: [
        { img: 'img/inc/3/position-genoux.jpg', cap: 'Position à genoux', txt: '<p>Binôme à genoux, de ¾ face, l’équipier derrière le porte-lance.</p>', src: 'Diaporama « Rôle du binôme… »' },
        { img: 'img/inc/3/protection-binome.jpg', cap: 'Technique de protection du binôme', txt: '<p>Au sol, face contre terre, regroupés, la lance au-dessus des casques en jet diffusé de protection.</p>', src: GTO_ETEX + ', p. 84 (schéma 1)' }
      ] },
    { id: 'logigramme', t: 'Le logigramme du binôme', ic: 'list', src: 'Diaporama « Rôle du binôme… », diapo 17',
      html: '<p>Après le <b>contrôle croisé des EPI</b> : si la porte est ouverte et le foyer visible, attaque et extinction. Sinon, <b>observation</b> de la porte et recherche des signes d’explosion de fumées (si oui : ne pas ouvrir, rendre compte), évaluation de l’ambiance thermique, <b>ouverture contrôlée</b>, analyse des fumées et test du plafond : si l’eau retombe et la chaleur est acceptable, <b>progression de 1 à 2 m</b> ; si l’eau se vaporise (difficulté de lisibilité, chaleur inacceptable), <b>inertage</b>. Détail des gestes au chapitre « Le passage de porte ».</p>',
      figs: [{ img: 'img/inc/3/logigramme-binome.jpg', cap: 'Logigramme du binôme', txt: '<p>Contrôle croisé EPI → porte ouverte ? → observation → ouverture contrôlée → test du plafond → progression de 1 à 2 m ou inertage → foyer visible ? → attaque / extinction.</p>', src: 'Diaporama « Rôle du binôme… », diapo 17' }] }
  ],
  key: ['Un binôme, une action ; binôme indissociable (sauf attaque par l’extérieur).', 'Chef BAT = porte-lance ; équipier = double porte-lance (360° à deux).', 'Local : ARI obligatoirement coiffé ; air libre : sur ordre.', 'Itinéraire de repli = celui de l’entrée ; itinéraire de secours = alternative.', 'Faces A, B, C, D dans le sens horaire depuis l’accès principal.', 'Travailler de ¾ face ; à genoux en feu clos.', 'Protection ultime : au sol, regroupés, lance au-dessus des casques, diffusé au débit maximum.'],
  traps: ['Se tenir entre le foyer et le sortant (dans le sens de tirage).', 'Continuer à progresser alors que l’eau baisse à la lance : il faut se replier et rendre compte.', 'Travailler face au jet, pieds alignés : le recul déséquilibre.', 'Croire que l’itinéraire de secours est celui par lequel on est entré.'],
  quiz: [
    { q: 'Dans un local en feu, l’ARI est :', c: ['Obligatoirement coiffé', 'Coiffé sur ordre', 'Facultatif', 'Laissé au camion'], e: 'À l’air libre seulement, il est coiffé sur ordre.', s: 'engagement' },
    { q: 'L’itinéraire de repli est :', c: ['Le trajet emprunté en entrant, à utiliser en priorité pour sortir', 'Une échelle posée en façade', 'Le plus court chemin vers le foyer', 'Le trajet du binôme de sécurité'], e: 'L’itinéraire de secours le remplace s’il n’est plus praticable.', s: 'engagement' },
    { q: 'Comment nomme-t-on les faces d’un bâtiment ?', c: ['A = accès principal, puis B, C, D dans le sens des aiguilles d’une montre', 'A = face au vent, puis sens inverse', 'Par les points cardinaux', 'A = face du feu'], e: 'Diaporama, dénomination des faces.', s: 'engagement' },
    { q: 'Que fait le binôme menacé par un phénomène thermique quand le repli est impossible ?', c: ['Se jette au sol regroupé, face contre terre, lance au-dessus des casques en diffusé de protection au débit maximum', 'Court vers la sortie', 'Ferme la lance pour économiser l’eau', 'Ouvre une fenêtre'], e: 'GTO § 4 et diaporama, diapo 15.', s: 'positions' },
    { q: 'Que doit faire le porte-lance si l’arrivée d’eau à la lance baisse anormalement ?', c: ['Se replier et rendre compte', 'Continuer en jet droit', 'Ouvrir davantage la lance', 'Attendre sur place'], e: 'GTO, rôle du chef d’équipe dans le local.', s: 'roles' },
    { q: 'Pourquoi l’équipier se place-t-il de l’autre côté du tuyau ?', c: ['Pour avoir un champ de vision complet : chef + équipier = 360°', 'Pour tirer plus fort', 'Pour laisser passer les autres binômes', 'Pour tenir la lance'], e: 'GTO § 3.2.', s: 'roles' },
    { q: 'Quelle position est primordiale en feu clos ou semi-clos ?', c: ['À genoux, de ¾ face', 'Debout de face', 'Allongé sur le dos', 'Accroupi dos au feu'], e: 'Au plus près du sol, stable, lance contrôlée.', s: 'positions' }
  ]
});

VSAV.chap({
  id: 'inc-passage-porte', part: 'inc', seq: INC5,
  title: 'Le passage de porte', short: 'Passage de porte', motif: 'shield',
  sources: [LIV3 + ', Partie 5, § 5.3 (p. 94-99)', 'GDO Incendies de structures (2018), section III « Analyse de risques » (p. 34-35)', GTO_ETEX + ', ETEX-STR-TDE-1 et TDE-5'],
  summary: 'Observation, protection, ouverture, engagement, progression, extinction : franchir une porte sans déclencher l’inflammation des fumées.',
  why: '<b>Pourquoi la porte est-elle un moment critique ?</b> Derrière, les fumées chaudes et combustibles, parfois au-dessus de leur température d’auto-inflammation, n’attendent que de l’air. Ouvrir, c’est leur en donner : elles peuvent s’enflammer, revenir dans le local ou se propager dans le couloir, et brûler ceux qui ouvrent. Et un feu correctement ventilé peut <b>doubler de puissance toutes les 60 secondes</b> (livret). <b>Maîtriser l’entrée d’air est donc une nécessité.</b>',
  sections: [
    { id: 'porte', t: 'Ce que toutes les portes ont en commun', ic: 'alert', src: LIV3 + ', § 5.3.1',
      html: '<ul class="check"><li>La porte fait entrer l’<b>air frais</b>, donc ventile le feu.</li><li>C’est une <b>zone de turbulence</b> : les gaz chauds au plafond descendent le long des parois ; en haut des portes, la puissance thermique est supérieure à celle du milieu du local. Une fois la porte passée, le binôme se trouve dans une zone très chaude où il doit rester quelques instants pour analyser.</li><li>La porte peut être le point de départ du <b>cône d’expansion</b> d’une éventuelle explosion.</li><li>C’est une <b>interface</b> entre un local plein de fumées combustibles chaudes et un couloir qui contient le comburant.</li></ul>' +
        '<p>À l’ouverture, deux phénomènes possibles : une inflammation qui <b>retourne dans le local</b> (accélération d’un embrasement généralisé, voire phénomène explosif) ; une inflammation qui <b>se propage dans le couloir</b> s’il est enfumé (fuite par un faux-plafond, pyrolyse à travers la cloison). Les phénomènes thermiques eux-mêmes sont détaillés dans le chapitre consacré.</p>' },
    { id: 'objectifs', t: 'Les objectifs', ic: 'target', src: LIV3 + ', § 5.3.1',
      html: '<ul class="check"><li><b>Estimer</b> la situation de l’autre côté avant d’ouvrir.</li><li><b>Améliorer la résistance de la porte</b> si possible (utile s’il faut rebrousser chemin).</li><li><b>Éviter l’auto-inflammation des fumées</b> à l’ouverture.</li><li><b>Refroidir la zone derrière la porte</b>, puisque c’est là qu’il faudra aller.</li></ul>' +
        '<div class="callout bad"><b>Le sauvetage d’une victime visible est prioritaire à toutes autres actions.</b> Suivant la situation, le chef d’équipe <b>rend compte rapidement</b> au chef d’agrès.</div>' },
    { id: 'phases', t: 'Les six phases de la mise en œuvre', ic: 'list', src: LIV3 + ', § 5.3.2 (p. 97-99)',
      html: '<p class="small">JDA : jet diffusé d’attaque. « Débit mini / intermédiaire / maxi » : réglage de débit de la lance.</p>' +
        '<div class="tw"><table><thead><tr><th>Phase</th><th>Objectif</th><th>Action</th><th>Pourquoi</th></tr></thead><tbody>' +
        '<tr><td rowspan="3"><b>1. Observation</b></td><td>Sens d’ouverture</td><td>Le chef examine le sens d’ouverture et vérifie que la poignée est manœuvrable</td><td>Détermine le placement du binôme</td></tr>' +
        '<tr><td>Dégradation du revêtement</td><td>Le chef touche la porte <b>du bas vers le haut</b>, gants de protection gardés</td><td>Sous la chaleur, le revêtement peut être dégradé et adhérer au gant</td></tr>' +
        '<tr><td>Présence de fumée</td><td>Le binôme regarde si de la fumée s’échappe par les interstices et en partie haute du couloir</td><td>—</td></tr>' +
        '<tr><td rowspan="3"><b>2. Protection</b></td><td>Se placer à genoux en sécurité</td><td>Porte <b>poussante</b> : l’équipier côté <b>poignée</b>. Porte <b>tirante</b> : l’équipier côté <b>gonds</b></td><td>L’équipier maîtrise l’ouvrant hors du cône d’expansion ; le chef tient la lance à deux mains face à l’ouverture</td></tr>' +
        '<tr><td>Prolonger la résistance de la porte</td><td>Si la porte est dégradée : le chef dépose de l’eau sur le haut de la porte (<b>jet droit, débit mini</b>)</td><td>La porte fait écran et limite l’apport de comburant</td></tr>' +
        '<tr><td>Éviter l’inflammation des fumées</td><td>Si fumée au-dessus du binôme : <b>2 impulsions courtes (JDA débit mini)</b>, une au-dessus de lui, une au-dessus de l’équipier, pour suspendre les gouttelettes au-dessus de la porte dans les fumées</td><td>À l’ouverture, les fumées chaudes rencontreront le comburant et pourraient enflammer la couche déjà présente dans le couloir</td></tr>' +
        '<tr><td rowspan="3"><b>3. Ouverture</b></td><td>Apprécier le plafond de fumée</td><td>L’équipier entrouvre ; le chef évalue hauteur et densité du plafond</td><td>—</td></tr>' +
        '<tr><td>Inerter le volume</td><td>Plafond <b>bas et dense</b> : une impulsion <b>JDA débit maxi</b> dans le volume, puis l’équipier referme ; à renouveler jusqu’à inertage complet</td><td>Resté dehors, le binôme sature le volume de vapeur sans s’exposer</td></tr>' +
        '<tr><td>Refroidir la couche de fumée</td><td>Plafond <b>haut et dense</b> : une impulsion <b>JDA débit intermédiaire</b> dans la couche de fumée, puis on referme ; à renouveler en présence de flammes dans les fumées</td><td>Fumées refroidies derrière la porte ; le débit contenu évite la déstratification et garde la visibilité</td></tr>' +
        '<tr><td rowspan="2"><b>4. Engagement</b></td><td>Limiter l’apport de comburant</td><td>Le binôme entre et <b>referme la porte sur le tuyau</b></td><td>Le feu est contrôlé par le comburant : un apport massif augmenterait son intensité</td></tr>' +
        '<tr><td>Neutraliser la couche de fumée</td><td>Impulsion <b>JDA débit mini</b> devant soi, <b>angle de 45°</b> par rapport au sol ; corriger ou renouveler</td><td>Fumées refroidies et inertées qui se rétractent sans se déstratifier ; peu de vapeur</td></tr>' +
        '<tr><td rowspan="2"><b>5. Progression</b></td><td>Progresser en sécurité, limiter la vapeur</td><td><b>Tous les 2 mètres</b> : neutralisation de la couche de fumée (JDA débit mini, 45°) ; l’équipier contrôle l’environnement en permanence</td><td>Traitement régulier : évite la réinflammation des fumées derrière le binôme</td></tr>' +
        '<tr><td>Stopper la pyrolyse</td><td>Paquets d’eau (<b>jet droit débit mini</b>) sur le mobilier en pyrolyse à proximité</td><td>Refroidit l’objet et laisse un film d’eau contre le retour de pyrolyse</td></tr>' +
        '<tr><td rowspan="2"><b>6. Extinction</b></td><td>Éteindre progressivement</td><td>Alterner paquets d’eau (<b>jet droit débit intermédiaire</b>) sur le foyer visible et impulsions (JDA débit mini) dans la fumée résiduelle</td><td>Les paquets d’eau traversent la zone chaude sans trop s’évaporer et atteignent le foyer</td></tr>' +
        '<tr><td>Noyer les braises</td><td>Badigeonner le foyer (<b>jet droit débit mini</b>), mode <b>purge</b> de la lance ; se relever si la température est supportable</td><td>Les grosses gouttes refroidissent mieux</td></tr>' +
        '</tbody></table></div>',
      figs: [{ img: 'img/inc/3/porte-phases.jpg', cap: 'Les six phases du passage de porte', txt: '<p>Observation (sens d’ouverture, toucher de la porte), protection (eau sur le haut de la porte, impulsions au-dessus du binôme), ouverture contrôlée par l’équipier, engagement porte refermée sur le tuyau, progression à genoux, extinction.</p>', src: LIV3 + ', p. 97-99' }] },
    { id: 'memo', t: 'Le passage de porte en pas à pas', ic: 'play', src: LIV3 + ', § 5.3.2',
      steps: ['Observation : sens d’ouverture et poignée, toucher la porte du bas vers le haut avec le gant, fumée aux interstices et au plafond du couloir.', 'Protection : à genoux ; équipier côté poignée (porte poussante) ou côté gonds (porte tirante) ; eau sur le haut d’une porte dégradée ; 2 impulsions courtes au-dessus du binôme si fumée.', 'Ouverture : l’équipier entrouvre ; plafond bas et dense → impulsion débit maxi et on referme (inerter) ; plafond haut → impulsion débit intermédiaire et on referme (refroidir).', 'Engagement : entrer et refermer la porte sur le tuyau ; impulsion débit mini à 45° devant soi.', 'Progression : neutraliser la fumée tous les 2 m ; paquets d’eau sur le mobilier qui pyrolyse.', 'Extinction : paquets d’eau sur le foyer et impulsions dans la fumée résiduelle ; noyer les braises en mode purge.'], stepsTitle: 'Six phases',
      after: '<p>Le GTO décrit la même logique : les <b>impulsions longues</b> (ouverture rapide puis 2 à 5 s environ en fermeture progressive) « seront aussi à appliquer lors des passages de portes pour sécuriser l’ambiance derrière la porte » ; en situation pré-backdraft, la porte est entrouverte pour une application à 30° de 1 à 2 s vers le plafond, puis refermée à 1 cm environ pour observer la sortie de vapeur (voir le chapitre suivant).</p>' },
    { id: 'lecture', t: 'Lire le feu avant d’ouvrir', ic: 'eye', src: 'GDO Incendies de structures (2018), p. 34-35 (renvoi du livret « La lecture du feu »)',
      html: '<p>Le livret renvoie à la <b>lecture du feu</b> du GDO : associée à la lecture du bâtiment, elle permet le plus souvent de déterminer la phase et le régime du feu.</p>' +
        '<div class="tw"><table><thead><tr><th>Indicateur</th><th>Ce qu’on observe</th></tr></thead><tbody>' +
        '<tr><td>Le bâtiment</td><td>Activité, occupants, dimensions, mode constructif, matériaux, volumes à risque (combles, faux-plafonds), distribution, ouvrants</td></tr>' +
        '<tr><td>La fumée</td><td>Débit, couleur, vélocité, sens de tirage : l’un des indicateurs les plus importants</td></tr>' +
        '<tr><td>Les flammes</td><td>Volume, emplacement, couleur, potentiel fumigène, vélocité</td></tr>' +
        '<tr><td>Les sons</td><td>Crépitement du bois, bouillonnement ; sons assourdis dans les atmosphères chaudes et sous-ventilées</td></tr>' +
        '<tr><td>La chaleur</td><td>Vélocité des fumées, déformation des matériaux, pyrolyse, ressenti des équipes ; caméra thermique en complément</td></tr>' +
        '</tbody></table></div>' }
  ],
  key: ['Un feu bien ventilé peut doubler de puissance toutes les 60 s : maîtriser l’air.', 'Six phases : observation, protection, ouverture, engagement, progression, extinction.', 'Toucher la porte du bas vers le haut, gants gardés.', 'Porte poussante : équipier côté poignée ; tirante : côté gonds.', 'Plafond bas et dense : inerter (débit maxi) ; haut : refroidir (débit intermédiaire).', 'Entrer et refermer la porte sur le tuyau ; neutraliser à 45° tous les 2 m.', 'Victime visible : sauvetage prioritaire sur tout.'],
  traps: ['Ouvrir en grand pour « voir » : apport d’air massif et inflammation des fumées.', 'Se placer dans le cône d’ouverture de la porte.', 'Laisser la porte ouverte derrière soi une fois engagé.', 'Arroser massivement en diffusé dans la fumée : on la déstratifie et on perd toute visibilité.'],
  quiz: [
    { q: 'Porte poussante : où se place l’équipier ?', c: ['Côté poignée', 'Côté gonds', 'Face à la porte', 'Derrière le chef'], e: 'Porte tirante : côté gonds. Il maîtrise l’ouvrant hors du cône d’expansion.', s: 'phases' },
    { q: 'Comment le chef d’équipe touche-t-il la porte en phase d’observation ?', c: ['Avec la main, du bas vers le haut, en gardant ses gants', 'Avec le dos de la main nue', 'Avec la lance', 'Il ne la touche pas'], e: 'Sous la chaleur, le revêtement peut être dégradé et adhérer au gant.', s: 'phases' },
    { q: 'À l’ouverture, le plafond de fumée est bas et dense. Que fait-on ?', c: ['Impulsion JDA débit maxi dans le volume puis on referme, jusqu’à inertage', 'On entre immédiatement', 'Jet droit sur la porte', 'On ouvre en grand pour ventiler'], e: 'Le binôme, resté dehors, sature le volume de vapeur sans s’exposer.', s: 'phases' },
    { q: 'Que fait le binôme juste après être entré ?', c: ['Il referme la porte sur le tuyau', 'Il ouvre les fenêtres', 'Il se relève pour voir', 'Il cherche le compteur électrique'], e: 'Le feu est contrôlé par le comburant : un apport massif augmenterait son intensité.', s: 'phases' },
    { q: 'Pendant la progression, la couche de fumée est neutralisée :', c: ['Tous les 2 mètres, JDA débit mini à 45°', 'Une seule fois à l’entrée', 'En continu au débit maximum', 'Seulement si on voit des flammes'], e: 'Cela évite la réinflammation des fumées derrière le binôme.', s: 'phases' },
    { q: 'Pourquoi refroidir la zone juste derrière la porte ?', c: ['Parce que c’est là que le binôme va se trouver une fois la porte passée', 'Pour protéger la peinture', 'Pour éteindre le foyer', 'Pour faire de la vapeur dans le couloir'], e: 'En haut des portes, la puissance thermique est supérieure au milieu du local.', s: 'objectifs' },
    { q: 'Quelle action est prioritaire sur toutes les autres pendant le passage de porte ?', c: ['Le sauvetage d’une victime visible', 'L’inertage du volume', 'La neutralisation des fumées', 'Le noyage des braises'], e: 'Livret § 5.3.2, encadré « Ouverture ».', s: 'objectifs' }
  ]
});

VSAV.chap({
  id: 'inc-modes-attaque', part: 'inc', seq: INC5,
  title: 'Les modes d’attaque et les techniques d’extinction', short: 'Modes d’attaque', motif: 'flame',
  sources: [LIV3 + ', Partie 5, § 5.4 (renvoi au GTO p. 79-105)', GTO_ETEX + ', fiches ETEX-STR-TDE à TDE-8 (p. 81-106)', 'GDO Incendies de structures (2018), chap. 2 § 2 et chap. 3 § 4'],
  summary: 'Tactiques offensive, défensive, de transition ; types de jets ; refroidissement des fumées, extinctions directe, indirecte, combinée ; repli ; vent ; atténuation.',
  why: '<b>Pourquoi tant de techniques ?</b> L’eau éteint de plusieurs façons : en refroidissant le combustible, en se vaporisant dans les fumées, en inertant un volume. Le bon geste dépend de ce qu’on veut obtenir : protéger le binôme, stabiliser le plafond de fumée, atteindre un foyer masqué ou casser un feu depuis l’extérieur. Un geste inadapté (diffusé large dans une fumée instable) peut au contraire <b>mettre le feu à la fumée</b>.',
  sections: [
    { id: 'tactiques', t: 'Offensif, défensif, transition', ic: 'target', src: 'GDO Incendies de structures, chap. 2 § 2 (p. 49-52)',
      html: '<div class="tw"><table><thead><tr><th>Tactique</th><th>Principe</th><th>Limite</th></tr></thead><tbody>' +
        '<tr><td><b>Offensive</b></td><td>Faire rapidement régresser le feu et l’éteindre ; engagement proche du feu</td><td>Une certaine vulnérabilité des SP</td></tr>' +
        '<tr><td><b>Défensive</b></td><td>Exposer moins les SP ; actions en périphérie des volumes en feu, efficaces contre l’extension</td><td>Extinction rapide difficile (sauf gros débits atteignant le foyer)</td></tr>' +
        '<tr><td><b>De transition</b></td><td>Passer de l’une à l’autre : <b>attaque d’atténuation</b> par l’extérieur avant l’attaque intérieure, ou <b>repli défensif</b> vers la circulation commune</td><td>—</td></tr>' +
        '</tbody></table></div>' +
        '<ul class="check"><li><b>Feu naissant</b> : la rapidité d’action, même avec peu d’eau, est à privilégier (mode offensif) ; si l’extinction n’est pas rapide, envisager un repli défensif.</li><li><b>Feu développé</b> : une tactique défensive peut être efficace, peu exposante et peu consommatrice de personnel (une attaque de transition peut être réalisée par une seule personne).</li><li><b>Attaque massive depuis l’extérieur</b> : « tactique agressive menée depuis une position défensive », quand les enjeux ne justifient pas l’exposition, que la ventilation n’est pas contrôlable, ou sur de grands volumes.</li></ul>' },
    { id: 'jets', t: 'Agir sur la lance : les types de jets', ic: 'spray', src: GTO_ETEX + ', ETEX-STR-TDE § 2 (p. 81-82)',
      html: '<p>Le porte-lance agit sur la <b>forme du jet</b>, la <b>quantité d’eau</b> (débit et durée d’ouverture), l’<b>angle d’application</b> et la <b>gestuelle</b> (impulsions, T, Z, O, 8…).</p>' +
        '<div class="tw"><table><thead><tr><th>Jet</th><th>Usage</th><th>Observations</th></tr></thead><tbody>' +
        '<tr><td><b>Droit</b></td><td>Atteindre une cible à distance (atténuation, attaque massive, ricochet), matériaux fibreux, mouillage et refroidissement des matériaux</td><td>Consommateur d’eau ; la portée dépend du débit</td></tr>' +
        '<tr><td><b>Brisé</b></td><td>Masse d’eau sur des surfaces combustibles en limitant l’effet cinétique du jet droit</td><td>Diffuseur complètement à droite, robinet très partiellement ouvert</td></tr>' +
        '<tr><td><b>Diffusé d’attaque</b> (JDA)</td><td>Refroidir fumées et gaz chauds, attaque massive, ventiler un volume</td><td>On agit sur le débit, l’angle du cône et l’angle d’application</td></tr>' +
        '<tr><td><b>Diffusé de protection</b></td><td>Protéger le binôme d’un rayonnement important</td><td>Écran hydraulique, très peu d’effet sur le volume gazeux</td></tr>' +
        '<tr><td><b>Purge</b> (grosses gouttes)</td><td>Refroidir directement les matériaux en feu</td><td>Surtout au déblai, faibles débits</td></tr>' +
        '</tbody></table></div>' },
    { id: 'gas-cooling', t: 'Refroidir les fumées (gas cooling)', ic: 'snow', src: GTO_ETEX + ', ETEX-STR-TDE-1 (p. 85-87)',
      html: '<p>Objectif : convertir l’eau en vapeur grâce à l’énergie de la fumée. On diminue le rayonnement, on prévient le flashover, on reste sous la température d’auto-inflammation, on stabilise ou rehausse le plafond de fumée, on inerte par la vapeur.</p>' +
        '<div class="tw"><table><thead><tr><th>Impulsion</th><th>Geste</th><th>Repère de réglage</th><th>Pour</th></tr></thead><tbody>' +
        '<tr><td><b>Courte</b></td><td>Ouverture/fermeture la plus rapide possible (<b>½ seconde</b> au plus), devant soi</td><td>100 à 250 L/min environ, angle 30 à 60°</td><td>Locaux d’habitation, hôtels, bureaux</td></tr>' +
        '<tr><td><b>Longue</b></td><td>Ouverture rapide puis <b>2 à 5 s</b> environ en fermeture progressive</td><td>100 à 300 L/min, angle 20 à 30° environ</td><td>Magasins, entrepôts, atriums, garages ; passages de portes</td></tr>' +
        '</tbody></table></div><p>Selon la largeur du volume, 2 ou 3 impulsions pour traiter toute la largeur.</p>' +
        '<div class="callout bad"><b>Limites :</b> proche du flashover (plafond bas, interface turbulente), les impulsions sont fortement déconseillées (effet piston, brassage, mise à feu de la fumée) : passer en <b>jet droit</b>, 100 à 300 L/min, robinet partiellement ouvert, balayage des parties hautes des parois et du plafond. <b>Ne pas évoluer sous des rollovers : c’est le signe d’un flashover imminent. Repliez-vous !</b></div>',
      figs: [{ img: 'img/inc/3/impulsions.jpg', cap: 'Impulsions longues et courtes', txt: '<p>En haut : impulsion longue (2 à 5 s) qui forme un nuage étendu. En bas : impulsion courte (½ seconde), répétée 2 à 3 fois.</p>', src: GTO_ETEX + ', p. 86 (schéma 2)' }] },
    { id: 'directe', t: 'L’extinction directe', ic: 'drop', src: GTO_ETEX + ', ETEX-STR-TDE-2 (p. 89-91)',
      html: '<p>Placer l’eau <b>directement sur les surfaces combustibles</b> pour les refroidir ; applications « massives » et précises, en tactique offensive. En attaque intérieure, le <b>jet droit</b> est à privilégier pour garder une ambiance tenable.</p>' +
        '<ul class="check"><li><b>Badigeonnage (painting)</b> : déposer l’eau sur une surface sans déstratifier le plafond de fumée ; zigzag de haut en bas ou balayage ; robinet partiellement ouvert.</li><li><b>Application ponctuelle (penciling)</b> : un paquet d’eau sur une petite surface ciblée ; ouverture partielle et courte, jet étroit, grosses gouttes.</li><li><b>Ricochet</b> : le jet étroit, robinet complètement ouvert, rebondit sur le plafond pour atteindre une surface masquée ; protège du rayonnement et du risque d’effondrement. Limiter les dégâts des eaux, ne pas soulever de braises, limiter les temps d’application. Depuis l’extérieur, c’est une attaque d’atténuation.</li></ul>' },
    { id: 'indirecte', t: 'Extinction indirecte et combinée', ic: 'molecule', src: GTO_ETEX + ', ETEX-STR-TDE-3 et TDE-4 (p. 93-96)',
      html: '<p><b>Indirecte</b> : produire de la vapeur avec la chaleur des parois ; la vapeur remplit le volume et prive le foyer d’air (inertage, dilution, surpression). Pour un local <b>dont on peut refermer la porte</b> (foyer masqué, situation pré-backdraft) : jet diffusé de 20 à 30° environ, 100 à 300 L/min, en badigeonnant largement le plafond ; la porte est repoussée après chaque application.</p>' +
        '<p><b>Combinée ou massive</b> : effets direct et indirect dans le même geste, <b>depuis l’extérieur</b>, sur un feu pleinement développé : jet généralement diffusé en T, Z, O, 8…, en commençant par le haut du volume, gestes « posés » jusqu’à 5 à 6 s.</p>' +
        '<div class="callout warn">L’extinction combinée se fait depuis l’extérieur pour ne pas subir le <b>retour de vapeur</b> ; elle peut propager l’incendie à un volume adjacent s’il existe un ouvrant entre les deux.</div>',
      figs: [{ img: 'img/inc/3/extinction-indirecte.jpg', cap: 'Principe de l’extinction indirecte', txt: '<p>Depuis l’ouverture, le jet diffusé vise le plafond chaud : la vapeur produite envahit le volume et inerte le foyer masqué.</p>', src: GTO_ETEX + ', p. 93 (schéma 1)' }] },
    { id: 'prebackdraft', t: 'Situation pré-backdraft', ic: 'alert', src: GTO_ETEX + ', ETEX-STR-TDE-5 (p. 97-99)',
      html: '<p>Local fermé dont le feu s’est arrêté de croître par manque d’oxygène. On contrôle la situation en produisant de la vapeur :</p>' +
        '<ul class="check"><li><b>Extinction indirecte depuis la porte</b> : entrouvrir, application en jet 30° pendant 1 à 2 s (plus si le local est grand) vers le plafond, refermer partiellement (environ 1 cm) et observer : la sortie de vapeur « sous pression » renseigne sur l’ambiance. Recommencer jusqu’à une sortie de vapeur sans surpression, puis entrer en attaque directe (caméra thermique utile).</li><li><b>Inertage par trouée</b> : une trouée d’environ <b>20 × 20 cm</b> dans la paroi pour y passer la lance, ou percement pour une lance à brouillard, lance perçante ou perforante (attention aux placards et meubles derrière la paroi).</li><li>En dernier recours et si les conditions le permettent : ventiler le local pour déclencher la mise à feu.</li></ul>' },
    { id: 'repli', t: 'Se replier sous protection hydraulique', ic: 'prev', src: GTO_ETEX + ', ETEX-STR-TDE-6 (p. 101-102)',
      html: '<p>Deux indicateurs de danger : des flammes isolées dans la fumée, sans lien avec le foyer (<b>« anges danseurs »</b>), et la <b>chaleur ressentie</b>. Si la chaleur persiste malgré l’action de lance, l’équipe ne prend pas le dessus : elle doit se replier.</p>' +
        '<ul class="check"><li><b>Repli sous refroidissement des fumées</b> : impulsions longues en général ; un diffusé de protection un peu large n’est pas exclu si les gaz chauds occupent toute la hauteur.</li><li><b>Repli sous écran d’eau</b> : corridor hydraulique à plusieurs lances pour extraire des victimes (y compris des intervenants) ; manœuvre à haut risque : même abaissée à 100 °C, la vapeur brûle, et il faut d’importants moyens en eau.</li></ul>' },
    { id: 'vent', t: 'Feu piloté par le vent et attaque d’atténuation', ic: 'wave', src: GTO_ETEX + ', ETEX-STR-TDE-7 et TDE-8 (p. 103-106)',
      html: '<p>Le vent crée une surpression sur la façade exposée : si l’air traverse le foyer, la puissance du feu et la vitesse des gaz chauds augmentent fortement (<b>effet chalumeau</b>), source de nombreux accidents graves. Il faut lire le cheminement de l’air, gérer les ouvrants, ne pas se trouver dans le flux et <b>attaquer le vent dans le dos</b> (attaque d’atténuation, attaque depuis une pièce de la même face exposée, stoppeur de vent).</p>' +
        '<p><b>Attaque d’atténuation</b> (transitoire, de temporisation) : elle ne vise pas à éteindre mais à <b>stopper très vite le développement</b> d’un feu proche du flashover ou pleinement développé, <b>depuis l’extérieur</b>. Elle repose sur la rapidité et la quantité d’eau.</p>' +
        '<ul class="check"><li>Lance en <b>jet droit</b>, à travers une ouverture, en visant le <b>milieu du plafond</b> : l’impact disperse de grosses gouttes sur les combustibles.</li><li>Débit adapté, <b>250 L/min minimum</b> ; durée limitée pour éviter les dégâts des eaux ; un moyen élévateur aérien améliore l’efficacité.</li><li>À privilégier sur les feux pilotés par le vent avant une attaque intérieure.</li></ul>' +
        '<div class="callout bad">Une lance en <b>jet diffusé</b> n’aura <b>aucun effet</b> pour une attaque d’atténuation.</div>' }
  ],
  key: ['Offensif (proche du feu), défensif (périphérie), transition (atténuation, repli défensif).', 'Impulsion courte : ½ s, 100 à 250 L/min, 30 à 60° ; longue : 2 à 5 s, 100 à 300 L/min, 20 à 30°.', 'Ne pas évoluer sous des rollovers : repli.', 'Extinction directe en attaque intérieure : jet droit (painting, penciling, ricochet).', 'Indirecte : diffusé 20 à 30° vers le plafond d’un local qu’on peut refermer.', 'Combinée (T, Z, O, 8) : depuis l’extérieur, feu pleinement développé.', 'Atténuation : jet droit au plafond, 250 L/min minimum, jamais en diffusé.'],
  traps: ['Faire des impulsions dans une fumée instable proche du flashover.', 'Réaliser une extinction combinée de l’intérieur : retour de vapeur.', 'Tenter une attaque d’atténuation en jet diffusé.', 'Attaquer face au vent sur un feu piloté par le vent.'],
  quiz: [
    { q: 'Durée d’une impulsion courte selon le GTO ?', c: ['Une demi-seconde au plus', '2 à 5 secondes', '10 secondes', '1 minute'], e: 'L’impulsion longue dure environ 2 à 5 s en fermeture progressive.', s: 'gas-cooling' },
    { q: 'Que faire face à des rollovers au-dessus du binôme ?', c: ['Se replier : c’est le signe d’un flashover imminent', 'Les éteindre par des impulsions et avancer', 'Ouvrir une fenêtre', 'Se relever pour mieux voir'], e: 'GTO, fiche TDE-1 : « Repliez-vous ! ».', s: 'gas-cooling' },
    { q: 'Pour une attaque d’atténuation, la lance est réglée en :', c: ['Jet droit vers le plafond, 250 L/min minimum', 'Jet diffusé de protection', 'Mode purge', 'Jet brisé au sol'], e: 'Un jet diffusé n’aurait aucun effet.', s: 'vent' },
    { q: 'L’extinction combinée (T, Z, O, 8) se pratique :', c: ['Depuis l’extérieur sur un feu pleinement développé', 'À l’intérieur, au contact du foyer', 'Uniquement sur feu naissant', 'Au déblai'], e: 'Pour ne pas subir le retour de vapeur.', s: 'indirecte' },
    { q: 'L’extinction indirecte est adaptée :', c: ['À un local dont on peut refermer la porte, foyer masqué ou pré-backdraft', 'Aux feux en plein air', 'Aux feux de véhicules', 'Au noyage des braises'], e: 'La vapeur produite au plafond inerte le volume.', s: 'indirecte' },
    { q: 'Une attaque d’atténuation par l’extérieur avant une attaque intérieure est une tactique :', c: ['De transition', 'Défensive pure', 'Offensive pure', 'De sauvetage'], e: 'GDO, chap. 2 § 2.3.', s: 'tactiques' },
    { q: 'Quels sont les deux indicateurs de danger qui imposent le repli selon le GTO ?', c: ['Les « anges danseurs » et la chaleur ressentie qui persiste', 'La couleur de la lance et le bruit', 'La pression de la pompe et l’heure', 'La présence d’eau au sol et la fumée blanche'], e: 'Fiche TDE-6.', s: 'repli' },
    { q: 'En attaque intérieure, l’extinction directe privilégie :', c: ['Le jet droit', 'Le diffusé de protection', 'Le jet brisé', 'Le mode purge'], e: 'Pour maintenir l’ambiance thermique la plus tenable possible (GTO TDE-2).', s: 'directe' }
  ]
});

VSAV.chap({
  id: 'inc-feu-vehicule-energie', part: 'inc', seq: INC5,
  title: 'Feux de véhicules GPL, GNV, H2, électriques ou hybrides', short: 'Véhicules à énergie alternative', motif: 'car',
  status: 'partiel',
  todo: '<p>Le livret (§ 5.1.2) renvoie au <b>classeur opérationnel du SDIS de la Marne, partie 6 « Procédures opérationnelles », POP 14 et POP 14bis</b>, et à une vidéo d’essai réel du SDIS 86 ; aucun de ces documents ne figure dans les sources fournies. Le § 5.1.3 « véhicule électrique ou hybride » apparaît au sommaire du livret mais pas dans les pages de la version 2019.2. La procédure doit être ajoutée à partir des POP 14 / 14bis.</p>',
  sources: [LIV3 + ', Partie 5, § 5.1.2 (renvoi aux POP 14 et 14bis) et sommaire § 5.1.3', LIV3 + ', § 2.6 Notions d’explosimétrie (tableau des domaines d’explosivité)', GIM + ', procédures gaz', 'Diaporama « Rôle du binôme… », diapo 12'],
  summary: 'Ce que disent les sources disponibles ; la procédure détaillée relève des POP 14 et 14bis du SDIS 51.',
  why: '<b>Pourquoi un chapitre à part ?</b> Le livret ne traite pas ces feux comme un feu de véhicule ordinaire : il renvoie à des <b>procédures opérationnelles dédiées</b> du SDIS 51 (POP 14 et 14bis). Les gaz concernés ont des domaines d’explosivité larges (l’hydrogène surtout) : on ne s’improvise pas sur ce type d’intervention.',
  sections: [
    { id: 'reference', t: 'Où trouver la procédure', ic: 'book', src: LIV3 + ', § 5.1.2 (p. 88) et sommaire',
      html: '<ul class="check"><li><b>GPL, GNV et H2</b> : le livret renvoie au <b>classeur opérationnel du SDIS de la Marne</b>, partie 6 « Les procédures opérationnelles », <b>POP 14</b> et <b>POP 14bis</b>, ainsi qu’à une vidéo d’essai feu réel « Feux de VL GNV / GPL » du SDIS 86.</li><li><b>Véhicule électrique ou hybride</b> (§ 5.1.3) : annoncé au sommaire du livret, sans contenu dans la version 2019.2 fournie.</li></ul>' +
        '<div class="callout warn">Ce chapitre ne remplace pas les POP 14 et 14bis : aucune distance de sécurité, aucun débit ni aucun geste spécifique n’est donné ici, faute de source.</div>' },
    { id: 'gaz', t: 'Ce que les sources disponibles apprennent sur ces gaz', ic: 'blast', src: LIV3 + ', § 2.6 (tableau LIE / LSE) ; ' + GIM,
      html: '<p>Le tableau des domaines d’explosivité du livret (partie explosimétrie) montre combien ces gaz sont dangereux :</p>' +
        '<div class="tw"><table><thead><tr><th>Gaz</th><th>LIE</th><th>LSE</th></tr></thead><tbody>' +
        '<tr><td>Hydrogène (H2)</td><td>4,1 %</td><td>74,5 %</td></tr><tr><td>Méthane</td><td>5,3 %</td><td>15,4 %</td></tr><tr><td>Propane</td><td>2,2 %</td><td>9,5 %</td></tr><tr><td>Butane</td><td>1,9 %</td><td>8,4 %</td></tr></tbody></table></div>' +
        '<p>Le Guide d’instruction du SDIS 51 rappelle que le gaz naturel est du <b>méthane</b>. Le domaine d’explosivité de l’hydrogène (de 4,1 à 74,5 %) est nettement plus large que ceux du méthane, du propane ou du butane du même tableau. Les notions LIE / LSE et l’explosimètre sont traitées dans le chapitre consacré au matériel.</p>' },
    { id: 'binome', t: 'Rappels généraux pour le binôme', ic: 'team', src: 'Diaporama « Rôle du binôme… », diapos 9 et 12',
      html: '<ul class="check"><li>Feu de véhicule à l’air libre : attaque du côté non atteint par le feu et les fumées, si possible <b>dans la direction du vent</b> ; ARI coiffé sur ordre.</li><li>Position <b>debout</b>, de ¾ face ; pour l’habitacle, attaque « plongeante » tuyau à l’épaule, aidé de l’équipier.</li><li>Se référer à la POP du SDIS pour les véhicules à énergie alternative.</li></ul>' }
  ],
  key: ['GPL, GNV et H2 : procédure SDIS 51 = POP 14 et POP 14bis.', 'Hydrogène : LIE 4,1 % – LSE 74,5 % (domaine très large).', 'Gaz naturel = méthane : LIE 5,3 % – LSE 15,4 %.', 'Feu de véhicule : attaquer dos au vent, côté non atteint.'],
  traps: ['Traiter un véhicule GPL, GNV, H2 ou électrique comme un véhicule thermique classique sans consulter la POP.', 'Sous-estimer l’hydrogène : il est inflammable de 4,1 % à 74,5 %.'],
  quiz: [
    { q: 'Quelles procédures du SDIS 51 traitent les feux de véhicules GPL, GNV et H2 ?', c: ['POP 14 et POP 14bis', 'POP 16', 'POP 32', 'GTO Sauvetage'], e: 'Livret § 5.1.2 : classeur opérationnel, partie 6. (POP 16 : marquage des portes ; POP 32 : réhabilitation.)', s: 'reference' },
    { q: 'Domaine d’explosivité de l’hydrogène selon le livret ?', c: ['4,1 % à 74,5 %', '5,3 % à 15,4 %', '1,9 % à 8,4 %', '12,5 % à 74,2 %'], e: '5,3-15,4 % : méthane ; 1,9-8,4 % : butane ; 12,5-74,2 % : oxyde de carbone.', s: 'gaz' },
    { q: 'Le gaz naturel (GNV) est principalement :', c: ['Du méthane', 'De l’hydrogène', 'Du propane', 'De l’acétylène'], e: 'Guide d’instruction : « le gaz naturel (méthane) ».', s: 'gaz' },
    { q: 'Sur un feu de véhicule à l’air libre, le binôme attaque de préférence :', c: ['Du côté non atteint, dans la direction du vent', 'Face au vent', 'Par le côté le plus enfumé', 'Depuis le dessus du véhicule'], e: 'Diaporama « Rôle du binôme… », règles d’engagement à l’air libre.', s: 'binome' }
  ]
});

VSAV.ess([{ t: 'Incendie — Hydraulique et établissements', ic: 'drop', items: [
  { k: 'Risque courant', v: '<b>120 m³</b> pendant <b>2 h</b> (= 2 LDV 500)', go: 'inc-besoins-eau/risque' },
  { k: 'Pertes de charge', v: '∝ longueur et <b>carré du débit</b> ; 1 bar / 10 m de dénivelée', go: 'inc-besoins-eau/notions' },
  { k: 'PI 80 / 100 / 150', v: '<b>30 / 60 / 120 m³/h</b>', go: 'inc-pei/pi' },
  { k: 'Ouvrir un PI ou une BI', v: 'Dégorger, raccorder, <b>13 tours</b> (17 pour PI 2 × 100), revenir ¼ de tour', go: 'inc-pei/manoeuvre-pi' },
  { k: 'Aire d’aspiration', v: '<b>4 × 3 m</b> motopompe, <b>8 × 4 m</b> engin, pente 2 %', go: 'inc-pei/aspiration' },
  { k: 'Coude / retenue', v: 'Coude 110 : <b>&lt; 20 m</b> ; retenue 2 × 70 : <b>&gt; 20 m</b>', go: 'inc-jonction/alimentation' },
  { k: 'Pièces de jonction', v: '<b>2R – 2C – 1D – 1V</b>', go: 'inc-jonction/definition' },
  { k: 'Longueur par étage', v: 'Vertical <b>3 à 4 m</b>, rampant <b>6 à 8 m</b>', go: 'inc-etablissements/definition' },
  { k: 'Ordres', v: '« … en reconnaissance » puis « … <b>établissez !</b> »', go: 'inc-etablissements/ordres' },
  { k: 'Division d’attaque', v: 'Au-delà du <b>R+4</b> (GTO)', go: 'inc-manoeuvres-etb/etb3' }
] }, { t: 'Incendie — Attaque', ic: 'flame', items: [
  { k: 'Passage de porte', v: 'Observation, protection, ouverture, engagement, progression, extinction', go: 'inc-passage-porte/phases' },
  { k: 'Équipier à la porte', v: 'Poussante : côté <b>poignée</b> ; tirante : côté <b>gonds</b>', go: 'inc-passage-porte/phases' },
  { k: 'Progression', v: 'Neutraliser la fumée <b>tous les 2 m</b>, JDA débit mini à 45°', go: 'inc-passage-porte/phases' },
  { k: 'Impulsions', v: 'Courte <b>½ s</b> ; longue <b>2 à 5 s</b>', go: 'inc-modes-attaque/gas-cooling' },
  { k: 'Atténuation', v: 'Jet <b>droit</b> au plafond, <b>250 L/min</b> minimum', go: 'inc-modes-attaque/vent' },
  { k: 'Protection ultime', v: 'Au sol, regroupés, lance au-dessus des casques, diffusé débit maxi', go: 'inc-binome-attaque/positions' }
] }]);
