/* ÉQUIPIER INCENDIE — fichier 4 : Incendie 6 (ARI et engagement en milieu vicié) et Incendie 7 (reconnaissances et sauvetages)
   Sources : livret stagiaire Équipier incendie SDIS 51 (v2019), GTO Engagement en milieu vicié (DGSCGC, déc. 2019),
   GTO Sauvetage et mise en sécurité (DGSCGC, V1.1), POP-16 SDIS 51 (indice 02, 2023), diaporamas formateur A.R.I et LSPCC,
   Guide d’instruction et de manœuvre INC (SDIS 51). */
var INC4_S6 = 'Incendie 6 — ARI et engagement en milieu vicié';
var INC4_S7 = 'Incendie 7 — Reconnaissances et sauvetages';

/* =====================================================================================
   INCENDIE 6 — CHAPITRE 1 : principe de fonctionnement et autonomie
   ===================================================================================== */
VSAV.chap({
  id: 'inc-ari-principe', part: 'inc', seq: INC4_S6,
  title: 'L’ARI : principe de fonctionnement et autonomie', short: 'ARI : fonctionnement', motif: 'lungs',
  sources: ['GTO Engagement en milieu vicié (DGSCGC, 2019), chap. I § 1 et annexes A-B', 'Guide d’instruction et de manœuvre INC (SDIS 51), partie ARI', 'Livret stagiaire Équipier incendie SDIS 51 (v2019), partie 4'],
  summary: 'De la bouteille à 300 bar au masque en légère surpression : comment l’ARICO fournit l’air, et combien de temps.',
  why: '<b>Pourquoi comprendre la mécanique ?</b> L’ARI est un équipement de protection individuelle de <b>catégorie III</b> : il protège contre des risques pouvant entraîner des lésions irréversibles ou la mort. Savoir comment l’air passe de la bouteille au masque permet de vérifier le bon fonctionnement, de comprendre les alarmes, et surtout d’estimer son <b>autonomie</b> : c’est elle qui limite le temps passé dans les fumées.',
  sections: [
    { id: 'compo', t: 'Composition d’un ARI à circuit ouvert (ARICO)', ic: 'list', src: 'GTO Engagement en milieu vicié 2019, chap. I § 1.1.1',
      html: '<p>Un ARICO fonctionne avec une <b>réserve d’air comprimé sous haute pression</b> portée sur le dos. L’utilisateur est alimenté <b>à la demande</b> ; l’air expiré est rejeté à l’extérieur par la <b>soupape d’expiration</b> du masque. Il est obligatoirement constitué de :</p>' +
        '<ul class="check"><li>une <b>réserve d’air</b> : une ou plusieurs bouteilles équipées de leur robinet ;</li><li>un <b>dossard et un harnais</b> ;</li><li>un <b>détendeur HP/MP</b>, avec un dispositif d’échappement qui s’ouvre si la moyenne pression dépasse le seuil autorisé ;</li><li>un <b>flexible moyenne pression</b> reliant le détendeur à la SAD ;</li><li>une <b>soupape à la demande (SAD)</b> = détendeur MP/BP ;</li><li>un <b>manomètre</b> (pneumatique ou électronique) et son <b>flexible haute pression</b> ;</li><li>une <b>pièce faciale</b> (masque complet) ;</li><li>un <b>sifflet de fin de charge</b>.</li></ul>' +
        '<p>Options possibles : détecteur d’immobilité, indicateur de température, enregistrement de données, boîtier de contrôle et de sécurité (ICS), 2<sup>e</sup> raccordement moyenne pression (entrée, sortie pour alimenter une seconde personne, ou combiné), dispositif <b>by-pass</b>.</p>',
      figs: [{ img: 'img/inc/4/arico.jpg', cap: 'Appareil respiratoire isolant à circuit ouvert', txt: '<p>Repère le trajet de l’air : réserve d’air → robinetterie → détendeur (HP→MP) → flexible MP → soupape à la demande (MP→BP) → pièce faciale. Le flexible HP alimente le manomètre ; le sifflet de fin de charge est sur le circuit.</p>', src: 'GTO Engagement en milieu vicié 2019, p. 13' }] },
    { id: 'pressions', t: 'Trois étages de pression', ic: 'bolt', src: 'GTO Engagement en milieu vicié 2019, chap. I § 1.1.1 ; Guide d’instruction INC SDIS 51',
      html: '<div class="tw"><table><thead><tr><th>Étage</th><th>Valeur</th><th>Organe</th></tr></thead><tbody>' +
        '<tr><td>Haute pression (HP)</td><td><b>200 ou 300 bar</b> selon les bouteilles</td><td>Bouteille</td></tr>' +
        '<tr><td>Moyenne pression (MP)</td><td><b>6 ou 7 bar</b></td><td>Après le détendeur HP/MP</td></tr>' +
        '<tr><td>Basse pression (BP)</td><td><b>légèrement supérieure à 1 bar</b></td><td>Après la SAD, dans le masque</td></tr></tbody></table></div>' +
        '<p>La basse pression légèrement supérieure à la pression atmosphérique maintient une <b>surpression dans la pièce faciale</b> : en cas de petite fuite, l’air sort au lieu que les fumées entrent. Le guide SDIS 51 précise qu’en France <b>seule la SAD à pression positive</b> est autorisée pour les sapeurs-pompiers.</p>' +
        '<p>Le <b>by-pass</b> de la SAD fournit une arrivée d’air supplémentaire dans le masque ; il sert aussi à <b>purger</b> le circuit après utilisation.</p>' +
        '<div class="callout warn">La surpression <b>n’est pas garantie</b> pour des débits de pointe supérieurs à <b>314 l/min</b> (ventilation supérieure à 100 l/min) : elle ne peut donc pas être considérée comme un argument de sécurité dans toutes les configurations (GTO).</div>' +
        '<div class="callout bad">Pour une étanchéité efficace, le masque complet doit être porté en contact direct sur une <b>peau rasée</b>.</div>' },
    { id: 'bouteilles', t: 'Les bouteilles', ic: 'bottle', src: 'GTO Engagement en milieu vicié 2019, chap. I § 1.1.1',
      html: '<div class="tw"><table><thead><tr><th>Type</th><th>Composition</th></tr></thead><tbody>' +
        '<tr><td>Type I</td><td>Bouteilles métalliques</td></tr><tr><td>Type II</td><td>Bouteilles métalliques renforcées</td></tr>' +
        '<tr><td>Type III</td><td>Composites avec liner métallique</td></tr><tr><td>Type IV</td><td>Composites avec liner plastique</td></tr></tbody></table></div>' +
        '<p>En intervention comme au CS, les bouteilles se manipulent avec la plus grande vigilance : la <b>robinetterie est particulièrement sensible aux chocs</b> (GTO, chap. IV).</p>' },
    { id: 'autonomie', t: 'Calculer son autonomie', ic: 'clock', src: 'GTO Engagement en milieu vicié 2019, § 1.1.1 et annexe B ; Guide d’instruction INC SDIS 51 (loi de Mariotte)',
      html: '<p>L’autonomie dépend de la <b>quantité d’air disponible</b> et de la <b>consommation du porteur</b> (variable selon l’individu et l’effort). Pour simplifier, on retient une consommation « haute » d’environ <b>100 l/min</b> (effort intense) lors d’un incendie.</p>' +
        '<div class="tw"><table><thead><tr><th>Source</th><th>Calcul (bouteille 7 l à 300 bar, 100 l/min)</th><th>Résultat</th></tr></thead><tbody>' +
        '<tr><td>GTO 2019 (annexe B)</td><td>Capacité = (P × V) / (Z × Patm) = (300 × 7) / (1,1 × 1) = <b>1 909 l</b> ; 1 909 / 100</td><td>≈ <b>19 min</b></td></tr>' +
        '<tr><td>Guide d’instruction SDIS 51 (loi de Mariotte)</td><td>300 × 7 = 2 100 l ; 2 100 / 100</td><td><b>21 min</b></td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Divergence entre sources :</b> le GTO applique un facteur de compressibilité de l’air <b>Z = 1,1</b> (à 300 bar, 15 °C) et trouve environ <b>19 min</b> ; le guide SDIS 51 applique Mariotte sans ce facteur et trouve <b>21 min</b>. Dans les deux cas, le calcul <b>ne dispense jamais</b> de consulter régulièrement le manomètre.</div>' +
        '<p>Le GTO donne aussi deux repères (notes du chap. III) : une bouteille de <b>6 l (300 bar)</b> à 90 l/min offre <b>15 min</b> en conservant 50 bar de réserve ; une bouteille de <b>9 l (300 bar)</b> à 90 l/min offre <b>25 min</b> avec 50 bar de réserve.</p>' +
        '<p><b>Mesurer sa propre consommation</b> (guide SDIS 51) : (pression d’engagement − pression de sortie) × volume de la bouteille ÷ temps d’engagement. Connaître sa consommation permet au chef d’agrès de « binômer » des personnels de consommation proche.</p>' },
    { id: 'conso', t: 'Consommation selon l’effort', ic: 'lungs', src: 'GTO Engagement en milieu vicié 2019, chap. III § 7.8 et annexe A',
      html: '<div class="tw"><table><thead><tr><th>Effort</th><th>Consommation</th></tr></thead><tbody>' +
        '<tr><td>Repos / mode « économie d’air »</td><td>jusqu’à <b>10 l/min</b></td></tr>' +
        '<tr><td>Modéré</td><td><b>40 à 70 l/min</b></td></tr>' +
        '<tr><td>Intense</td><td><b>90 ou 100 l/min</b></td></tr>' +
        '<tr><td>Très intense (≤ 5 min)</td><td><b>135 l/min</b></td></tr></tbody></table></div>' +
        '<p>L’annexe A du GTO associe par exemple <b>105 l/min</b> aux activités de sauvetage et de lutte contre l’incendie d’intensité élevée (travail continu ≤ 15 min : ramper, escalader, porter une lance) et <b>135 l/min</b> à l’intensité maximale (monter des escaliers et échelles à vitesse élevée, transporter des victimes ; &lt; 5 min).</p>' },
    { id: 'autres', t: 'Autres appareils', ic: 'grid', src: 'GTO Engagement en milieu vicié 2019, chap. I § 1.1.2 et 1.2',
      html: '<p><b>ARI à circuit fermé (ARICF)</b> : régénère l’air expiré (cartouche absorbant le CO₂). Utilisé pour les autonomies importantes (explorations de longue durée, feux de navires…). Masse limitée à <b>16 kg</b> (NF EN 145) contre <b>18 kg</b> pour l’ARICO prêt à l’emploi (NF EN 137).</p>' +
        '<p><b>Appareils filtrants</b> (masque complet + filtre) : ils ne fournissent pas d’air, ils filtrent l’air ambiant. Filtres anti-aérosols P1 (80 %), P2 (94 %), P3 (99,95 %) ; filtres anti-gaz à charbon actif repérés par lettre et couleur (A marron, B gris, E jaune, K vert…). Leur durée de vie réelle n’est pas prévisible : leur emploi exige une <b>connaissance exacte du polluant</b> (voir chapitre suivant).</p>' }
  ],
  key: ['ARICO : air comprimé HP → détendeur HP/MP → SAD (MP/BP) → masque.', 'HP 200 ou 300 bar ; MP 6 ou 7 bar ; BP légèrement > 1 bar (surpression).', 'Masque sur peau rasée pour l’étanchéité.', 'Consommation « haute » de référence : environ 100 l/min.', '7 l à 300 bar à 100 l/min : ≈ 19 min (GTO) ou 21 min (guide SDIS 51).', 'Le calcul ne remplace jamais la lecture régulière du manomètre.'],
  traps: ['Croire que la surpression protège toujours : elle n’est plus garantie au-delà de 314 l/min de débit de pointe.', 'Se fier au seul calcul d’autonomie : stress, chaleur et effort font varier la consommation.'],
  quiz: [
    { q: 'Quelle pression règne dans le masque d’un ARICO ?', c: ['Légèrement supérieure à 1 bar', '6 ou 7 bar', '200 ou 300 bar', 'Légèrement inférieure à 1 bar'], e: 'La SAD délivre une basse pression légèrement supérieure à la pression atmosphérique : c’est la surpression qui empêche l’entrée des fumées en cas de petite fuite.', s: 'pressions' },
    { q: 'Quel organe abaisse la pression de la moyenne à la basse pression ?', c: ['La soupape à la demande', 'Le détendeur HP/MP', 'Le robinet de bouteille', 'Le manomètre'], e: 'Le détendeur HP/MP ramène 200/300 bar à 6/7 bar ; la SAD (détendeur MP/BP) ramène à un peu plus de 1 bar.', s: 'pressions' },
    { q: 'Selon le GTO, autonomie d’un ARICO 7 l à 300 bar pour 100 l/min :', c: ['Environ 19 minutes', 'Environ 30 minutes', 'Environ 10 minutes', 'Environ 45 minutes'], e: 'GTO annexe B : (300 × 7) / 1,1 = 1 909 l, soit environ 19 min. Le guide SDIS 51 trouve 21 min sans le facteur de compressibilité.', s: 'autonomie' },
    { q: 'Pourquoi le masque doit-il être porté sur une peau rasée ?', c: ['Pour garantir l’étanchéité et éviter une fuite dangereuse', 'Pour le confort thermique', 'Pour éviter la buée', 'Pour que la membrane phonique fonctionne'], e: 'Une barbe empêche le joint facial de plaquer : la fuite peut mettre en danger le porteur.', s: 'pressions' },
    { q: 'Quelle consommation le GTO retient-il pour un effort très intense (≤ 5 min) ?', c: ['135 l/min', '40 l/min', '70 l/min', '10 l/min'], e: 'Très intense : jusqu’à 135 l/min sur une période n’excédant pas 5 minutes ; 10 l/min correspond au mode « économie d’air ».', s: 'conso' },
    { q: 'À quoi sert le by-pass de la SAD ?', c: ['Fournir une arrivée d’air supplémentaire et purger le circuit', 'Couper l’air en cas de fuite', 'Mesurer la pression de la bouteille', 'Déclencher le sifflet de fin de charge'], e: 'GTO § 1.1.1 : le by-pass fournit un supplément d’air dans le masque et sert aussi à purger le circuit après utilisation.', s: 'pressions' }
  ]
});

/* =====================================================================================
   INCENDIE 6 — CHAPITRE 2 : atmosphères non respirables et contraintes
   ===================================================================================== */
VSAV.chap({
  id: 'inc-ari-contraintes', part: 'inc', seq: INC4_S6,
  title: 'Atmosphères non respirables et contraintes physiologiques', short: 'Milieu vicié et contraintes', motif: 'alert',
  sources: ['GTO Engagement en milieu vicié (DGSCGC, 2019), chap. I § 2 et 3, lexique', 'Guide d’instruction et de manœuvre INC (SDIS 51)'],
  summary: 'Quand l’ARI est obligatoire, quand un filtrant est envisageable, et ce que l’ARI coûte au corps.',
  why: '<b>Pourquoi parler des contraintes ?</b> L’ARI protège les voies respiratoires mais il <b>pèse, gêne la respiration, réduit la vue et l’ouïe</b> et accélère le cœur. Un porteur qui connaît ces effets reconnaît l’épuisement à temps, gère son stress et son air, et ne transforme pas sa protection en piège.',
  sections: [
    { id: 'atmo', t: 'Atmosphère respirable, atmosphère dangereuse', ic: 'molecule', src: 'GTO Engagement en milieu vicié 2019, préface et lexique',
      html: '<p><b>Air respirable</b> : environ <b>78 % d’azote, 21 % d’oxygène</b> et 1 % de gaz divers.</p>' +
        '<p><b>Atmosphère dangereuse</b> (viciée) : toute atmosphère <b>appauvrie en oxygène</b> et/ou contenant des substances (aérosols, gaz, vapeurs toxiques) à des concentrations dangereuses pour la santé. Elle impose un engagement sous protection respiratoire adaptée.</p>' +
        '<p><b>Fumées</b> : ensemble visible des particules solides et/ou liquides en suspension et des gaz issus d’une combustion ou d’une pyrolyse.</p>' },
    { id: 'obligatoire', t: 'Quand l’ARI est-il obligatoire ?', ic: 'shield', src: 'GTO Engagement en milieu vicié 2019, chap. I § 3.1',
      html: '<p><b>Par principe</b>, les ARI autonomes sont utilisés en priorité dans tous les milieux où l’air est vicié <b>ou susceptible de l’être</b>. Le port est obligatoire en cas de :</p>' +
        '<ul class="check"><li>présence de produits toxiques ;</li><li><b>qualité de l’air ambiant inconnue</b> ;</li><li>atmosphère appauvrie en oxygène (<b>O₂ &lt; 17 %</b>) ;</li><li>présence de produits de combustion tels que le <b>monoxyde de carbone</b> ;</li><li>milieu susceptible d’évoluer : <b>embrasement, explosion</b>.</li></ul>' },
    { id: 'filtrant', t: 'Le filtrant : seulement sous conditions', ic: 'spray', src: 'GTO Engagement en milieu vicié 2019, chap. I § 1.2 et 3.2',
      html: '<p>En phase de déblai par exemple, le <b>COS</b> peut passer de l’ARI à un appareil filtrant, uniquement si <b>toutes</b> les conditions suivantes sont réunies :</p>' +
        '<ul class="check"><li>oxygène <b>&gt; 17 %</b> (air libre ou local largement ventilé) ;</li><li>polluant <b>identifié</b> et concentration <b>mesurée</b> ;</li><li>concentration la plus élevée prévisible <b>connue</b> ;</li><li>filtre <b>adapté</b> au polluant et à sa concentration ;</li><li>risque d’<b>instabilité</b> de l’atmosphère évalué.</li></ul>' +
        '<div class="callout bad">Si une seule condition manque, l’ARI est <b>indispensable</b>. En cas de résistance respiratoire accrue, d’odeur du contaminant dans le masque ou de doute, quitter <b>immédiatement</b> la zone.</div>' },
    { id: 'physiques', t: 'Contraintes physiques', ic: 'bone', src: 'GTO Engagement en milieu vicié 2019, chap. I § 2.1.1',
      html: '<p>Le port de l’ARI <b>déplace le centre de gravité</b>, augmente le travail musculaire et la dépense énergétique, diminue les performances, et limite les déplacements dans les passages étroits et les franchissements (échelle à crinoline, milieu effondré…). La masse de l’ARICO prêt à l’emploi ne doit pas dépasser <b>18 kg</b> (NF EN 137).</p>' +
        '<p>Ne pas trop serrer ceintures et harnais : l’ARI doit reposer essentiellement sur la <b>ceinture ventrale</b>, ce qui préserve la <b>couche d’air</b> isolante de la tenue de protection.</p>' },
    { id: 'physio', t: 'Contraintes physiologiques', ic: 'heart', src: 'GTO Engagement en milieu vicié 2019, chap. I § 2.1.2',
      html: '<ul class="check"><li><b>Espace mort augmenté</b> : l’espace mort (≈ 150 ml chez l’adulte) ne participe pas aux échanges ; le masque l’augmente. Une partie du CO₂ expiré est ré-inspirée → l’augmentation du CO₂ sanguin provoque une <b>hyperventilation</b> et donc une <b>surconsommation</b>.</li>' +
        '<li><b>Résistances respiratoires accrues</b> : l’arrivée d’air sous pression facilite un peu l’inspiration mais rend l’<b>expiration plus difficile</b> (contre-indication possible dans certaines pathologies pulmonaires). Consommation de 10 l/min au repos à 135 l/min pour un travail très intense.</li>' +
        '<li><b>Fréquence cardiaque accrue</b> (travail respiratoire, effort, chaleur, stress) : épuisement plus rapide, <b>déshydratation</b>, <b>hypoglycémie</b>.</li></ul>',
      figs: [{ img: 'img/inc/4/espace-mort.jpg', cap: 'Volume de l’espace mort', txt: '<p>L’air contenu entre les cavités nasales et les bronchioles, auquel s’ajoute le volume du masque non renouvelé, n’est pas « utile » : plus il est grand, plus on ré-inspire de CO₂.</p>', src: 'GTO Engagement en milieu vicié 2019, p. 24' }] },
    { id: 'psycho', t: 'Contraintes psychologiques et sensorielles', ic: 'brain', src: 'GTO Engagement en milieu vicié 2019, chap. I § 2.1.3, 2.2 et 2.3',
      html: '<p>Le masque crée une <b>sensation d’inconfort</b> (effort expiratoire). Un sapeur-pompier qui <b>perd son calme accélère son rythme respiratoire</b> et épuise rapidement sa réserve d’air ; des difficultés de concentration peuvent apparaître.</p>' +
        '<p>L’équipement réduit la <b>perception de l’espace</b> (champ de vision réduit), les capacités de <b>communication</b> et l’<b>acuité auditive</b> (bruits respiratoires, casque, cagoule).</p>' +
        '<p>Le temps d’intervention est enfin limité par la <b>réserve d’air</b> (consommation et capacité de la bouteille). L’accoutumance à l’ambiance opérationnelle et l’entraînement physique régulier retardent les effets de l’effort.</p>' }
  ],
  key: ['Air respirable : ≈ 21 % O₂, 78 % N₂.', 'ARI obligatoire : toxiques, air inconnu, O₂ < 17 %, CO, milieu évolutif.', 'Filtrant : décision du COS, O₂ > 17 % et polluant identifié, mesuré, filtre adapté.', 'Espace mort du masque → ré-inspiration de CO₂ → hyperventilation → surconsommation.', 'Expiration plus difficile sous ARI ; cœur accéléré → déshydratation, hypoglycémie.', 'Perdre son calme = vider sa bouteille.'],
  traps: ['Prendre un appareil filtrant pour un appareil « isolant » : il ne fournit pas d’oxygène.', 'Serrer fort le harnais : on écrase la couche d’air isolante de la tenue.'],
  quiz: [
    { q: 'En dessous de quel taux d’oxygène le port de l’ARI est-il obligatoire ?', c: ['17 %', '21 %', '10 %', '25 %'], e: 'GTO § 3.1 : atmosphère appauvrie en oxygène (O₂ < 17 %). Le filtrant n’est envisageable qu’au-dessus de 17 %.', s: 'obligatoire' },
    { q: 'Qui peut décider le passage de l’ARI à un appareil filtrant ?', c: ['Le COS, si toutes les conditions sont réunies', 'Chaque porteur selon son ressenti', 'Le contrôleur ARI seul', 'Le chef d’équipe dès que la fumée diminue'], e: 'GTO § 3.2 : seul le COS, avec O₂ > 17 %, polluant identifié et mesuré, filtre adapté et instabilité évaluée.', s: 'filtrant' },
    { q: 'Qualité de l’air inconnue : quelle protection ?', c: ['ARI obligatoire', 'Masque filtrant P3', 'Aucune si pas de fumée visible', 'Filtre anti-gaz A'], e: 'Une qualité d’air inconnue fait partie des cas où l’ARI est obligatoire.', s: 'obligatoire' },
    { q: 'Quel effet l’augmentation de l’espace mort produit-elle ?', c: ['Ré-inspiration de CO₂ et hyperventilation', 'Économie d’air', 'Baisse de la fréquence cardiaque', 'Meilleure étanchéité'], e: 'Le CO₂ ré-inspiré augmente dans le sang et déclenche un réflexe d’hyperventilation : on consomme plus.', s: 'physio' },
    { q: 'Sous ARI, quel temps respiratoire devient plus difficile ?', c: ['L’expiration', 'L’inspiration', 'Les deux de façon égale', 'Aucun'], e: 'L’arrivée d’air sous pression facilite légèrement l’inspiration mais rend l’expiration plus difficile.', s: 'physio' },
    { q: 'Sur quoi l’ARI doit-il reposer essentiellement ?', c: ['La ceinture ventrale', 'Les bretelles serrées au maximum', 'Les épaules', 'Le casque'], e: 'GTO § 2.1.1 : sur la ceinture ventrale, sans trop serrer, pour préserver la couche d’air de la tenue.', s: 'physiques' }
  ]
});

/* =====================================================================================
   INCENDIE 6 — CHAPITRE 3 : préparation et règles avant l’engagement
   ===================================================================================== */
VSAV.chap({
  id: 'inc-ari-avant', part: 'inc', seq: INC4_S6,
  title: 'Avant l’engagement : préparation, contrôles, enregistrement', short: 'ARI : avant l’engagement', motif: 'check',
  sources: ['Diaporama formateur « A.R.I - Règles à respecter avant l’engagement »', 'GTO Engagement en milieu vicié (DGSCGC, 2019), chap. II', 'Guide d’instruction et de manœuvre INC (SDIS 51) : R.A.P.A.C.E, règles communes'],
  summary: 'Entraînement, habillage, R.A.P.A.C.E, contrôle croisé, pression minimale et enregistrement.',
  why: '<b>Pourquoi tant de contrôles ?</b> Une fois dans les fumées, il est trop tard pour découvrir un robinet mal ouvert, une SAD mal encliquetée ou une balise non armée. Le guide SDIS 51 le rappelle : l’essentiel du R.A.P.A.C.E se fait <b>dans l’engin</b>, pour qu’une anomalie ne retarde pas l’engagement. Le contrôle croisé et l’enregistrement garantissent qu’on sait <b>qui</b> est entré, <b>avec combien d’air</b> et <b>quand</b>.',
  sections: [
    { id: 'diapo', t: 'Les règles de base avant engagement (diaporama SDIS 51)', ic: 'list', src: 'Diaporama « A.R.I - Règles à respecter avant l’engagement »',
      html: '<ul class="check"><li>Toujours vérifier, avant de capeler, le <b>bon état général</b> du matériel (ARI, masque…).</li><li><b>Ne jamais intervertir les masques</b> d’un appareil à l’autre.</li><li>Contrôler la <b>pression de la bouteille au manomètre</b>.</li><li>Ne jamais pénétrer dans la zone à risques si la pression est inférieure à <b>280 bar</b> pour les ARICO à 300 bar (voir la divergence ci-dessous).</li><li>Vérifier l’<b>armement du sifflet de fin de charge</b> à l’ouverture de la bouteille.</li><li>Établir un <b>code d’alerte</b> selon les moyens de communication employés.</li><li><b>Capeler l’ARI à l’extérieur</b> de la zone à risques.</li><li>Contrôler l’<b>étanchéité du masque</b>.</li></ul>' +
        '<p class="small muted">Avertissement du diaporama : ces règles ne sont pas exhaustives ; chaque porteur doit comprendre et respecter la procédure opérationnelle.</p>' },
    { id: 'prepa', t: 'Se préparer en amont', ic: 'walk', src: 'GTO Engagement en milieu vicié 2019, chap. II § 1',
      html: '<div class="tw"><table><thead><tr><th>Préparation</th><th>Contenu</th></tr></thead><tbody>' +
        '<tr><td>Physique</td><td>Entraînement régulier en ambiance dégradée, exercices cardio-respiratoires, renforcement musculaire, bonne nuit de sommeil avant la garde.</td></tr>' +
        '<tr><td>Physiologique</td><td>Alimentation équilibrée, hydratation régulière (avant de partir au feu), préservation du potentiel physique, exercices d’aisance sous ARI.</td></tr>' +
        '<tr><td>Psychologique</td><td>Anticiper les situations stressantes ; s’entraîner à garder ses capacités sous stress.</td></tr></tbody></table></div>' },
    { id: 'rapace', t: 'Le R.A.P.A.C.E (SDIS 51)', ic: 'check', src: 'Guide d’instruction et de manœuvre INC (SDIS 51), « Les règles de sécurité »',
      html: '<p>Le guide SDIS 51 impose de « mettre en œuvre la technique du R.A.P.A.C.E et réaliser un contrôle croisé ». <b>R.A.P.A</b> se fait pendant le trajet, <b>C.E</b> avant l’engagement.</p>' +
        '<div class="tw"><table><thead><tr><th>Lettre</th><th>Action</th><th>Quand</th></tr></thead><tbody>' +
        '<tr><td><b>R</b></td><td>Robinet complètement ouvert</td><td>Dans l’engin</td></tr>' +
        '<tr><td><b>A</b></td><td>Ajustement du harnais</td><td>Dans l’engin</td></tr>' +
        '<tr><td><b>P</b></td><td>Pression au manomètre</td><td>Dans l’engin</td></tr>' +
        '<tr><td><b>A</b></td><td>Armement de la balise sonore de détresse (sifflet + balise sonore de localisation)</td><td>Dans l’engin</td></tr>' +
        '<tr><td><b>C</b></td><td>Code de communication (établissement et contrôles)</td><td>Avant engagement</td></tr>' +
        '<tr><td><b>E</b></td><td>Étanchéité du masque</td><td>Avant engagement</td></tr></tbody></table></div>' +
        '<p>Au-delà de la sécurité, le R.A.P.A.C.E « calme le jeu » : c’est un signal fort qui professionnalise le geste. Tout dysfonctionnement est annoncé au chef d’agrès.</p>',
      figs: [{ img: 'img/inc/4/rapace.jpg', cap: 'R.A.P.A.C.E', txt: '<p>Six vérifications, dont quatre réalisées pendant le trajet : une anomalie découverte au moment de s’engager ferait perdre un temps précieux.</p>', src: 'Guide d’instruction et de manœuvre INC (SDIS 51)' }] },
    { id: 'habillage', t: 'Habillage : position d’attente puis équipement', ic: 'shield', src: 'GTO Engagement en milieu vicié 2019, chap. II § 2.1',
      html: '<p>L’ajustement du harnais se fait <b>hors de l’engin</b>. Les trois protections de la tête se positionnent dans un ordre précis :</p>' +
        '<div class="tw"><table><thead><tr><th>Ordre</th><th>Masque à filet / brides</th><th>Masque à griffes</th></tr></thead><tbody>' +
        '<tr><td>1</td><td>Masque complet</td><td>Cagoule de protection thermique</td></tr>' +
        '<tr><td>2</td><td>Cagoule (enveloppe la tête, la fixation du masque et la jupe)</td><td>Casque</td></tr>' +
        '<tr><td>3</td><td>Casque, coiffant les deux précédents</td><td>Masque, brides encliquetées sur le casque</td></tr></tbody></table></div>' +
        '<p><b>Position d’attente</b> : verrouiller la SAD si applicable ; ouvrir la bouteille <b>lentement et complètement</b> (ou la faire ouvrir par son binôme) ; vérifier l’<b>armement du sifflet</b> (sifflement à la mise en pression) ; masque en attente autour du cou ; vérifier la pression.</p>' +
        '<p><b>Équipement avant engagement</b> (en zone contrôlée) : fermer la boucle ventrale, ajuster le harnais (moins serré pour garder la couche d’air), mettre le masque, cagoule sans peau apparente, casque et mentonnière, contrôler pression/autonomie, <b>armer la balise de détresse</b>, le chef d’équipe se munit d’une radio.</p>' },
    { id: 'croise', t: 'Le contrôle croisé', ic: 'team', src: 'GTO Engagement en milieu vicié 2019, chap. II § 2.2',
      html: '<p>Le contrôle croisé intervient une fois l’habillage terminé. Il est <b>obligatoire</b>, réalisé <b>en vis-à-vis</b> sous la responsabilité du binôme, et validé par le responsable du point de pénétration (chef d’agrès, contrôleur ou binôme lui-même).</p>' +
        '<p>Il vérifie tenue de feu, cagoule, masque (ajustement, étanchéité, brides), <b>SAD</b> (encliquetage), casque (jugulaire) et bouteille (pression). La liaison SAD-masque se vérifie en <b>faisant pivoter la SAD tout en exerçant une légère traction</b>.</p>',
      figs: [{ img: 'img/inc/4/controle-croise.jpg', cap: 'Le contrôle croisé', txt: '<p>Le chef contrôle l’équipier puis l’équipier contrôle le chef, point par point : tenue, cagoule, masque, SAD, casque, bouteille.</p>', src: 'GTO Engagement en milieu vicié 2019, p. 32' }] },
    { id: 'conditions', t: 'Conditions minimales d’engagement et enregistrement', ic: 'clip', src: 'GTO Engagement en milieu vicié 2019, chap. II § 4.1 à 4.3 ; Guide d’instruction INC SDIS 51 ; diaporama A.R.I « avant »',
      html: '<p>Conditions minimales (GTO) : pression <b>≥ pression nominale − 10 %</b>, contrôle croisé <b>réalisé et satisfaisant</b>, binôme <b>enregistré</b>. Tout engagement en dessous de la pression minimale est restreint à des missions limitées et à vue, validé par le responsable du point de pénétration.</p>' +
        '<div class="tw"><table><thead><tr><th>Source</th><th>Pression minimale (bouteille 300 bar)</th></tr></thead><tbody>' +
        '<tr><td>GTO 2019 (nominale − 10 %)</td><td><b>270 bar</b></td></tr>' +
        '<tr><td>Guide d’instruction SDIS 51</td><td><b>270 bar</b> (et 180 bar pour une bouteille de 200 bar)</td></tr>' +
        '<tr><td>Diaporama SDIS 51 « avant l’engagement »</td><td><b>280 bar</b></td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Divergence entre sources :</b> le diaporama formateur indique 280 bar, le GTO et le guide d’instruction 270 bar. Applique la consigne de ton encadrement.</div>' +
        '<p><b>Enregistrement</b> (dernière étape de contrôle, avant chaque engagement ou réengagement), en zone contrôlée auprès du chef d’agrès ou du contrôleur : <b>noms</b> et <b>pression d’engagement</b>, <b>heure d’entrée</b>, remise des <b>clés des balises</b> avec les plaquettes. Le diaporama « pendant » précise que le chef de binôme donne les <b>plaques de contrôle</b> au contrôleur, qui y inscrit nom, pression et heure d’engagement.</p>' +
        '<p><b>Autonomie</b> : un engagement comprend trois temps, <b>aller – mission – retour</b>. Le <b>sifflet de fin de charge</b> se déclenche vers <b>55 bar environ</b> : retour <b>systématique et immédiat</b> au point de pénétration.</p>' }
  ],
  key: ['Ne jamais intervertir les masques ; capeler à l’air frais.', 'R.A.P.A.C.E : Robinet, Ajustement, Pression, Armement balise / Code, Étanchéité.', 'Contrôle croisé obligatoire, en vis-à-vis, après l’habillage.', 'Pression mini 300 bar : 270 bar (GTO, guide) – 280 bar (diaporama).', 'Enregistrement : noms, pression, heure d’entrée, clés de balise.', 'Sifflet de fin de charge ≈ 55 bar : retour immédiat.'],
  traps: ['Ouvrir la bouteille au dernier moment : une anomalie retarde l’engagement (R.A.P.A dans l’engin).', 'Oublier d’armer la balise « parce qu’on reste dehors » : le GTO l’impose même à vue.', 'Confondre sifflet de fin de charge et alarme d’immobilité.'],
  quiz: [
    { q: 'Dans R.A.P.A.C.E, que signifie le « C » ?', c: ['Code de communication', 'Contrôle croisé', 'Casque', 'Cagoule'], e: 'Guide SDIS 51 : C = code de communication (établissement et contrôles), réalisé avant l’engagement avec E (étanchéité du masque).', s: 'rapace' },
    { q: 'Quelles lettres du R.A.P.A.C.E sont réalisées pendant le trajet ?', c: ['R.A.P.A', 'C.E', 'R et E seulement', 'Toutes, au point de pénétration'], e: 'R.A.P.A pendant le trajet, C.E avant l’engagement : cela permet de détecter une anomalie sans retarder l’engagement.', s: 'rapace' },
    { q: 'Pression minimale d’engagement d’une bouteille 300 bar selon le GTO :', c: ['270 bar', '250 bar', '300 bar', '200 bar'], e: 'Pression nominale moins 10 % : 270 bar. Le diaporama SDIS 51 indique 280 bar.', s: 'conditions' },
    { q: 'Le sifflet de fin de charge se déclenche vers :', c: ['55 bar', '100 bar', '150 bar', '10 bar'], e: 'GTO § 4.3 : sous environ 55 bar, retour systématique et immédiat du binôme.', s: 'conditions' },
    { q: 'Le contrôle croisé est réalisé :', c: ['En vis-à-vis, après l’habillage, il est obligatoire', 'Seul devant un miroir', 'Uniquement à l’entraînement', 'Par le contrôleur seul après l’engagement'], e: 'GTO § 2.2 : obligatoire, en vis-à-vis, validé par le responsable du point de pénétration.', s: 'croise' },
    { q: 'Avec un masque à filet/brides, quel est l’ordre des protections de la tête ?', c: ['Masque, cagoule, casque', 'Cagoule, casque, masque', 'Casque, masque, cagoule', 'Cagoule, masque, casque'], e: 'Masque à filet/brides : masque, puis cagoule enveloppant sa fixation, puis casque. Avec un masque à griffes : cagoule, casque, masque.', s: 'habillage' },
    { q: 'Comment vérifie-t-on la liaison SAD-masque ?', c: ['En faisant pivoter la SAD avec une légère traction', 'En appuyant sur le manomètre', 'En fermant le robinet', 'En retirant le masque'], e: 'GTO § 2.2 : rotation de la SAD avec légère traction ; l’étanchéité se teste selon les préconisations du fabricant.', s: 'croise' }
  ]
});

/* =====================================================================================
   INCENDIE 6 — CHAPITRE 4 : pendant l’engagement
   ===================================================================================== */
VSAV.chap({
  id: 'inc-ari-engagement', part: 'inc', seq: INC4_S6,
  title: 'Pendant l’engagement : binôme, contrôleur, ligne de vie', short: 'ARI : pendant l’engagement', motif: 'rope',
  sources: ['Diaporama formateur « A.R.I - Règles à respecter pendant l’engagement »', 'GTO Engagement en milieu vicié (DGSCGC, 2019), chap. I § 1.3, chap. II § 3-4, chap. III § 1 et 6', 'Guide d’instruction et de manœuvre INC (SDIS 51)', 'Livret stagiaire Équipier incendie SDIS 51 (v2019), partie 4'],
  summary: 'Trois principes, des rôles clairs, la ligne de vie et les techniques d’engagement, l’évacuation générale.',
  why: '<b>Pourquoi cette organisation ?</b> Dans une fumée opaque, on perd ses repères en quelques mètres. Tout est pensé pour que le binôme <b>retrouve toujours la sortie</b> (ligne de vie), que quelqu’un <b>sache où il est</b> (contrôleur) et qu’une équipe soit <b>prête à aller le chercher</b> (binôme de sécurité).',
  sections: [
    { id: 'principes', t: 'Trois principes pendant l’engagement', ic: 'target', src: 'Diaporama « A.R.I - Règles à respecter pendant l’engagement » ; GTO 2019, chap. III',
      html: '<div class="tw"><table><thead><tr><th>Diaporama SDIS 51</th><th>GTO 2019</th></tr></thead><tbody>' +
        '<tr><td><b>Enregistrement et surveillance</b> du binôme ; on ne se sépare jamais.</td><td>Le binôme engagé doit être <b>enregistré</b>.</td></tr>' +
        '<tr><td><b>Communication</b> par des moyens appropriés.</td><td>Le binôme possède un <b>moyen de communication</b> (corne, radio, ligne guide…).</td></tr>' +
        '<tr><td>Utilisation systématique de la <b>ligne de vie</b> ; en opérations courantes, la lance à débit variable peut servir de ligne guide.</td><td>L’<b>itinéraire de repli</b> doit être facilement identifiable (ligne de vie en l’absence de repère).</td></tr></tbody></table></div>' },
    { id: 'roles', t: 'Les rôles : binôme, contrôleur, binôme de sécurité', ic: 'team', src: 'GTO Engagement en milieu vicié 2019, chap. II § 3 ; Guide d’instruction INC SDIS 51',
      html: '<p><b>Binôme d’exploration</b> : un chef et un équipier, <b>indissociables</b> ; un sapeur-pompier ne s’engage <b>jamais seul</b>. Contact permanent (physique, visuel ou verbal). L’autonomie doit permettre l’aller, la mission et le retour. Si l’un des deux n’est plus en mesure d’accomplir la mission, le binôme <b>se replie</b>.</p>' +
        '<p><b>Contrôleur</b> : enregistre les binômes et régule <b>un seul point de pénétration</b> (frontière zone d’exclusion / zone contrôlée). Il vérifie les EPI, établit le code de communication et rappelle le code général d’évacuation, regroupe les plaques, gère au maximum <b>10 porteurs, soit 4 binômes et le binôme de sécurité</b> (le guide SDIS 51 dit « au plus 5 binômes dont le binôme de sécurité »), écoute en permanence, rend compte au COS et prend les mesures d’urgence.</p>' +
        '<p><b>Binôme de sécurité</b> : mis en place <b>le plus rapidement possible</b> au point de pénétration, sous la <b>seule autorité du contrôleur</b>, même niveau d’équipement que les engagés. En attente : masque sur le visage, <b>SAD non encliquetée</b>, bouteille ouverte. Engagé sur ordre dès qu’un binôme est en difficulté (compte rendu radio, signal sonore, balise de détresse) ; il est alors remplacé au plus tôt.</p>' +
        '<div class="callout ok">Un <b>sauvetage</b> peut justifier l’envoi immédiat d’un binôme sans contrôleur ni binôme de sécurité ; l’information du chef d’agrès et l’enregistrement restent primordiaux.</div>' },
    { id: 'lignevie', t: 'La ligne de vie', ic: 'rope', src: 'GTO Engagement en milieu vicié 2019, chap. I § 1.3.1 ; Guide d’instruction INC SDIS 51 ; livret SDIS 51 § 4.2',
      html: '<p><b>Ligne de vie = ligne guide + liaison personnelle.</b> Elle donne un lien physique et continu avec le point de pénétration.</p>' +
        '<div class="tw"><table><thead><tr><th>Élément</th><th>Caractéristiques</th></tr></thead><tbody>' +
        '<tr><td>Ligne guide</td><td>Tambour ou sac ; <b>50 à 60 m</b> ; diamètre <b>6 à 8 mm</b> ; repères de progression (olives).</td></tr>' +
        '<tr><td>Liaison personnelle</td><td><b>6 m</b> au total, diamètre <b>4 mm</b> ; version courte <b>1,25 m</b> ou longue <b>6 m</b>.</td></tr>' +
        '<tr><td>Dérivations</td><td>Clés ou plaquettes ; grands volumes ; <b>jusqu’à 3</b> dérivations sur la ligne guide.</td></tr>' +
        '<tr><td>Établissement</td><td>Un tuyau (45 mm) alimenté peut servir de ligne guide ; longueur depuis la prise d’eau <b>&lt; 40 m</b>.</td></tr></tbody></table></div>' +
        '<p><b>Repères (olives)</b> — le GTO : <b>1 olive isolée en 2<sup>e</sup></b> = vers la <b>sortie</b> (1 syllabe : « vie ») ; <b>3 olives successives en 2<sup>e</sup></b> = vers le <b>sinistre</b> (« in-cen-die »). Le guide SDIS 51 dit la même chose avec un autre moyen mnémotechnique : 1 olive puis 3 = vers l’incendie (« 13 porte malheur ») ; 3 puis 1 = vers la sortie (« je sors sur mon 31 »).</p>' +
        '<p><b>Rôle de l’équipier</b> (livret) : rester en <b>contact permanent avec la ligne guide</b> et la maintenir <b>tendue</b> pour un retour sûr et rapide, garder le contact avec le <b>guide de référence</b> (main droite / gauche) et compter les <b>repères tactiles</b> pour établir au retour un plan de la zone explorée.</p>',
      figs: [{ img: 'img/inc/4/ligne-de-vie.jpg', cap: 'Ligne de vie par ligne guide ou par établissement', txt: '<p>À gauche, le binôme est relié à une ligne guide filaire ; à droite, à un tuyau alimenté (40 m maximum).</p>', src: 'GTO Engagement en milieu vicié 2019, p. 19' },
        { img: 'img/inc/4/ligne-guide-olives.jpg', cap: 'Repères de progression de la ligne guide', txt: '<p>La flèche rouge indique la direction de l’incendie, la verte celle de la sortie : c’est l’olive rencontrée <b>en second</b> qui renseigne (1 = sortie, 3 = sinistre).</p>', src: 'GTO Engagement en milieu vicié 2019, p. 19' }] },
    { id: 'techniques', t: 'Les techniques d’engagement', ic: 'walk', src: 'GTO Engagement en milieu vicié 2019, chap. III § 1',
      html: '<div class="tw"><table><thead><tr><th>Technique</th><th>Quand</th><th>Temps d’engagement</th></tr></thead><tbody>' +
        '<tr><td>À vue – configuration 1 (air respirable)</td><td>Missions éloignées du feu ou post-incendie, bonne visibilité. Masque en attente, bouteille ouverte, balises armées, pas d’amarrage entre eux.</td><td>Non limité</td></tr>' +
        '<tr><td>À vue – configuration 2 (air non respirable ou dégradation)</td><td>Le binôme passe sous ARI et rend compte ; contrôleur et équipe de sécurité.</td><td>Limité à <b>45 min</b></td></tr>' +
        '<tr><td>Sur ligne de vie (progression)</td><td>Visibilité réduite ou nulle, cheminement complexe, obstacles, endurance susceptible d’être altérée.</td><td><b>15 à 25 min</b></td></tr>' +
        '<tr><td>Méthode latérale</td><td>Espace vaste, exclusivement à partir d’une ligne guide filaire.</td><td>Limité à <b>25 min</b></td></tr>' +
        '<tr><td>Méthode circulaire</td><td>Petits espaces (chambre…).</td><td>Limité à <b>25 min</b></td></tr></tbody></table></div>' +
        '<p>Même à vue, <b>l’enregistrement est systématique</b> et l’armement de la balise obligatoire. Les durées sont données pour des ARICO.</p>' +
        '<p><b>Méthode latérale</b> : « mode associé » (les deux porteurs reliés par la liaison courte du chef, la liaison de l’équipier sur la main courante et déployée jusqu’à 6 m) ou « mode dissocié » (l’équipier relié par sa liaison courte à la ligne guide, la liaison du chef reliée à l’équipier jusqu’à 6 m). Les deux liaisons ne sont <b>jamais déployées en version longue en même temps</b> (sauf victime avérée dans une pièce, exceptionnellement).</p>' +
        '<p><b>Avec un moyen hydraulique</b> : chef et équipier liés entre eux, contact permanent avec le tuyau ; la liaison attachée au tuyau glisse librement (40 m maximum). Le chef garde le contrôle de sa lance, placée entre le foyer et la pièce à reconnaître ; dans ce cas, c’est l’<b>équipier</b> qui reconnaît le local.</p>',
      figs: [{ img: 'img/inc/4/methode-laterale.jpg', cap: 'Méthode latérale en mode associé', txt: '<p>Le binôme balaie des bandes parallèles à la ligne guide, en s’en écartant à chaque passage grâce à la liaison longue.</p>', src: 'GTO Engagement en milieu vicié 2019, p. 43' }] },
    { id: 'repli', t: 'Itinéraires de repli, de secours et évacuation générale', ic: 'alert', src: 'GTO Engagement en milieu vicié 2019, chap. II § 3.1 et chap. III § 6',
      html: '<p><b>Itinéraire de repli</b> : le chemin d’accès normal emprunté pour entrer, reconnu et libéré ; à utiliser <b>en priorité</b>, il permet le repli avec les moyens hydrauliques.</p>' +
        '<p><b>Itinéraire de secours</b> : différent du premier, il s’y substitue s’il n’est plus fonctionnel ; création anticipée (échelles à coulisse du 1<sup>er</sup> au 2<sup>e</sup> étage, moyens élévateurs aériens au-delà). Les échelles servent d’abord aux sauvetages. Les binômes sont avisés de sa localisation exacte.</p>' +
        '<p>À défaut, se mettre à l’abri (pièce, escalier encloisonné, EAS…). <b>Balises lumineuses</b> : <b>vertes</b> = cheminement, repli, secours, zone protégée ; <b>rouges</b> = danger, obstacle, zone rouge ; placées près du sol.</p>' +
        '<div class="callout bad"><b>Évacuation générale</b> (menace imminente : effondrement, explosion…) : message radio « <b>Évacuation, évacuation, évacuation</b> », transmissible par <b>n’importe quel intervenant</b>, complété par tout dispositif (deux-tons, sifflets, corne…). Tous sortent et rejoignent le <b>point de regroupement</b> (par défaut leur engin).</div>' +
        '<p>Pendant la progression, les binômes laissent la <b>priorité aux binômes sortants</b> et rejoignent le point de pénétration à <b>demi-pression d’engagement</b> en cas de cheminement complexe.</p>' }
  ],
  key: ['Binôme indissociable ; jamais seul.', 'Contrôleur : 1 point de pénétration, 10 porteurs max (4 binômes + sécurité).', 'Binôme de sécurité en attente : masque au visage, SAD non encliquetée, bouteille ouverte.', 'Ligne guide 50-60 m ; liaison personnelle 1,25 m / 6 m.', 'Olive en 2e : 1 = sortie, 3 = incendie.', 'À vue : 45 min max sous ARI ; ligne de vie 15-25 min ; latérale/circulaire 25 min.', '« Évacuation » ×3 par radio : tous au point de regroupement.'],
  traps: ['Lâcher la ligne guide « juste un instant » : c’est le lien vers la sortie.', 'Croire que le binôme de sécurité peut être utilisé pour une autre mission : il est sous la seule autorité du contrôleur.', 'Déployer les deux liaisons longues en même temps : risque de zones non explorées.'],
  quiz: [
    { q: 'Sur une ligne guide, 3 olives successives rencontrées en second indiquent :', c: ['La direction du sinistre', 'La direction de la sortie', 'Une dérivation', 'La fin de la ligne'], e: 'GTO : 3 olives en 2e = vers le sinistre (« in-cen-die ») ; 1 olive isolée en 2e = vers la sortie (« vie »).', s: 'lignevie' },
    { q: 'Longueur d’une liaison personnelle en version courte :', c: ['1,25 m', '6 m', '50 m', '0,5 m'], e: 'Liaison personnelle de 6 m au total, utilisable en version courte (1,25 m) ou longue (6 m).', s: 'lignevie' },
    { q: 'Combien de porteurs un contrôleur gère-t-il au maximum selon le GTO ?', c: ['10 porteurs (4 binômes + binôme de sécurité)', '4 porteurs', '20 porteurs', 'Autant que nécessaire'], e: 'GTO § 3.2 : 10 porteurs maximum, soit 4 binômes et le binôme de sécurité.', s: 'roles' },
    { q: 'Position du binôme de sécurité en attente :', c: ['Masque sur le visage, SAD non encliquetée, bouteille ouverte', 'ARI dans l’engin, bouteille fermée', 'Engagé derrière le binôme d’attaque', 'Sans ARI, en soutien logistique'], e: 'GTO § 3.3.1 : il doit pouvoir intervenir rapidement ; en cas de buée, faire encliqueter la SAD et respirer.', s: 'roles' },
    { q: 'Engagement à vue devenu « air non respirable » : temps limite ?', c: ['45 minutes', '15 minutes', 'Non limité', '25 minutes'], e: 'GTO § 1.1, configuration 2 : temps limité à 45 min, géré par un contrôleur avec une équipe de sécurité.', s: 'techniques' },
    { q: 'Qui peut transmettre l’ordre d’évacuation générale ?', c: ['N’importe quel intervenant', 'Uniquement le COS', 'Uniquement le contrôleur', 'Uniquement le CODIS'], e: 'GTO § 6 : la transmission est réalisée par n’importe quel intervenant, par radio en priorité.', s: 'repli' },
    { q: 'Longueur maximale d’un établissement servant de ligne de vie :', c: ['40 m depuis la prise d’eau', '60 m', '100 m', '20 m'], e: 'GTO § 1.2 : avec un moyen hydraulique, l’établissement depuis la prise d’eau est inférieur à 40 m.', s: 'lignevie' }
  ]
});

/* =====================================================================================
   INCENDIE 6 — CHAPITRE 5 : sauvegarde opérationnelle
   ===================================================================================== */
VSAV.chap({
  id: 'inc-ari-sauvegarde', part: 'inc', seq: INC4_S6,
  title: 'Sauvegarde opérationnelle : détresse, gestion de l’air, sauvetage du sauveteur', short: 'Sauvegarde et détresse', motif: 'skull',
  sources: ['GTO Engagement en milieu vicié (DGSCGC, 2019), chap. III § 7', 'Livret stagiaire Équipier incendie SDIS 51 (v2019), § 4.4 (système sonore de détresse)', 'GTO Sauvetage et mise en sécurité (DGSCGC, V1.1), chap. IV'],
  summary: 'Anticiper, évaluer, se dégager, NELAR, AAALEERTER, économiser l’air et porter secours à un équipier.',
  why: '<b>Pourquoi s’y entraîner ?</b> Désorientation, piégeage dans des câbles, rupture d’air, effondrement : ces incidents arrivent sans prévenir, dans le noir et le stress. Les réflexes appris (message <b>NELAR</b>, procédure <b>AAALEERTER</b>, techniques de respiration) font gagner les minutes d’air qui permettent au binôme de sécurité d’arriver.',
  sections: [
    { id: 'situations', t: 'Anticiper et évaluer', ic: 'eye', src: 'GTO Engagement en milieu vicié 2019, chap. III § 7, 7.1 et 7.2',
      html: '<p>La sauvegarde opérationnelle regroupe les notions, comportements et techniques pour <b>éviter de se mettre en danger</b>, s’extraire d’un péril imminent ou attendre les secours. Situations à risque : phénomènes thermiques, explosion, effondrement ; dissociation du binôme, désorientation, piégeage dans des fils, emmêlage de la ligne, malaise, problème technique sur l’ARI, perte radio, perte d’eau à la lance, rupture d’air.</p>' +
        '<p><b>Anticiper</b> : lecture du feu (bâtiment, fumée, flammes, chaleur, ouvertures, sons), connaissance des phénomènes thermiques, maîtrise des outils.</p>' +
        '<p><b>Évaluer</b> après un incident : quel est le problème ? l’environnement peut-il se dégrader ? quelle est mon autonomie ? ai-je besoin d’assistance ? Puis choisir : <b>tenter une évacuation</b> (effort intense) ou <b>se mettre en condition d’attendre les secours</b> (économie d’air). Réévaluer à chaque évolution.</p>',
      figs: [{ img: 'img/inc/4/sauvegarde.jpg', cap: 'Logigramme de la sauvegarde du porteur', txt: '<p>Incident → extraction réflexe de la situation dangereuse → analyse → message NELAR → envoi du binôme de sécurité → évacuation de la zone ou attente (AAALEERTER), en revenant à l’analyse à chaque évolution.</p>', src: 'GTO Engagement en milieu vicié 2019, p. 65' }] },
    { id: 'degager', t: 'Se dégager', ic: 'hand', src: 'GTO Engagement en milieu vicié 2019, chap. III § 7.3',
      html: '<p>Avant de franchir un obstacle, évaluer ses <b>dimensions</b>, sa <b>nature</b>, sa <b>solidité</b> et la <b>stabilité</b> de ce qu’il y a derrière.</p>' +
        '<ul class="check"><li><b>Fils ou câbles</b> : s’allonger sur le flanc gauche, bras gauche en avant (sens d’ouverture du robinet), desserrer légèrement la bretelle droite, bras droit au-dessus de la tête pour dégager ; préserver l’accès au robinet ; outils au besoin (pince, hache, Halligan).</li>' +
        '<li><b>Passage étroit</b> : passage en avant (bras croisés), sur le dos (bras gauche et épaule d’abord, puis la bouteille), profil réduit (une bretelle desserrée, bouteille décalée).</li>' +
        '<li><b>Retrait de l’ARI</b> : en <b>dernier recours</b> ; SAD conservée sur le masque, une main toujours sur l’ARI, robinet à portée de main.</li></ul>' },
    { id: 'nelar', t: 'Le message de détresse NELAR', ic: 'alert', src: 'GTO Engagement en milieu vicié 2019, chap. III § 7.4 ; GTO Sauvetage et mise en sécurité, chap. IV § 3.1',
      html: '<p>Dès que le binôme est dans une situation dont il ne peut s’extraire seul, il lance <b>immédiatement</b> par radio : « <b>URGENT, URGENT, URGENT</b> » puis :</p>' +
        '<div class="tw"><table><thead><tr><th>Lettre</th><th>Contenu</th><th>Exemple (GTO Sauvetage)</th></tr></thead><tbody>' +
        '<tr><td><b>N</b></td><td>Nom de celui qui passe le message</td><td>binôme « X », mon équipier est en difficulté, inconscient et ventile</td></tr>' +
        '<tr><td><b>E</b></td><td>Engin d’affectation</td><td>FPT Y</td></tr>' +
        '<tr><td><b>L</b></td><td>Localisation</td><td>à 10 m de la cage d’escalier sur la ligne guide 1</td></tr>' +
        '<tr><td><b>A</b></td><td>Air restant (du binôme)</td><td>il lui reste 110 bars</td></tr>' +
        '<tr><td><b>R</b></td><td>Renfort nécessaire (qui, avec quoi) ou pas</td><td>je veux un binôme de sauvetage et je commence le dégagement</td></tr></tbody></table></div>' +
        '<p>Le COS <b>répète</b> le message à l’émetteur pour confirmer sa prise en compte, ce qui peut aussi diminuer son stress.</p>' },
    { id: 'hommemort', t: 'Le système sonore de détresse (« homme mort »)', ic: 'bolt', src: 'Livret stagiaire Équipier incendie SDIS 51 (v2019), § 4.4 ; GTO Engagement en milieu vicié 2019, chap. I § 1.3.2',
      html: '<p>Le <b>détecteur d’immobilité</b> alerte (signaux sonores et lumineux) si le porteur reste immobile au-delà d’une période donnée. Le livret SDIS 51 fixe les règles :</p>' +
        '<ul class="check"><li>Quand l’alarme retentit, <b>tous les binômes présents dans le volume en sortent</b> : le contrôleur identifie ainsi le binôme en difficulté et engage le binôme de sécurité.</li>' +
        '<li>La découverte d’une victime <b>ne nécessite pas</b> le déclenchement, <b>sauf</b> si le binôme sait qu’il ne pourra pas la sortir seul.</li>' +
        '<li>Binôme perdu ou emprisonné : garder son <b>calme</b> pour économiser l’air, tenter d’abord une <b>communication radio</b>, revenir sur ses pas si possible ou s’éloigner du feu, chercher une autre sortie ou un endroit sûr.</li>' +
        '<li>Si <b>aucune communication radio</b> n’a pu être établie : activer le système sonore de détresse dès que possible.</li></ul>' +
        '<div class="callout warn">Un déclenchement prématuré stoppe toutes les reconnaissances du volume et peut gêner la transmission des informations.</div>' },
    { id: 'aaaleerter', t: 'Attendre les secours : AAALEERTER', ic: 'clock', src: 'GTO Engagement en milieu vicié 2019, chap. III § 7.6',
      html: '<div class="tw"><table><thead><tr><th>Action</th><th>Contenu</th></tr></thead><tbody>' +
        '<tr><td><b>A</b>ir</td><td>Je contrôle pression restante et autonomie au manomètre.</td></tr>' +
        '<tr><td><b>A</b>lerte</td><td>Je passe le message NELAR.</td></tr>' +
        '<tr><td><b>A</b>larme</td><td>Je déclenche la balise sonore de mon ARI (touche SOS) ; sans réponse radio, aussi la touche SOS du portatif.</td></tr>' +
        '<tr><td><b>É</b>clairer</td><td>J’allume mon projecteur pour me signaler.</td></tr>' +
        '<tr><td><b>É</b>conomiser l’air</td><td>J’applique une des 4 méthodes de respiration.</td></tr>' +
        '<tr><td><b>R</b>ester près du sol</td><td>Position basse au contact d’un mur : air plus frais, meilleure visibilité.</td></tr>' +
        '<tr><td><b>T</b>aper</td><td>Je fais du bruit, sur une surface métallique si possible.</td></tr>' +
        '<tr><td><b>E</b>xplorer</td><td>Je balaie le sol pour retrouver le tuyau, le mur pour retrouver un ouvrant.</td></tr>' +
        '<tr><td><b>R</b>emonter ma cagoule</td><td>Plus d’air (ni raccord possible) : je retire la SAD, remonte la cagoule sur le masque pour « filtrer », respire au ras du sol — <b>dernier recours</b> (risque d’intoxication).</td></tr></tbody></table></div>' +
        '<p>Rester calme ; le binôme reste <b>indissociable</b>.</p>' },
    { id: 'air', t: 'Gérer son air', ic: 'lungs', src: 'GTO Engagement en milieu vicié 2019, chap. III § 7.7 à 7.9',
      html: '<p><b>Débit d’air insuffisant</b> : vérifier l’ouverture complète du robinet, appuyer sur le bouton de la SAD, contrôler la pression, signaler le problème à l’équipier. Non résolu → règles de sauvegarde du binôme.</p>' +
        '<div class="tw"><table><thead><tr><th>Technique d’économie d’air</th><th>Principe</th></tr></thead><tbody>' +
        '<tr><td>Sauter une respiration</td><td>Inspirer profondément, retenir jusqu’au seuil limite, expirer lentement.</td></tr>' +
        '<tr><td>Intervalle respiratoire</td><td>Inspirer 5 s, retenir 5 s, expirer 5 s, retenir 5 s.</td></tr>' +
        '<tr><td>Méthode Reilly</td><td>Inspirer normalement, expirer lentement en bourdonnant.</td></tr>' +
        '<tr><td>Méthode 2/4”</td><td>Inspirer 2 s, expirer 4 s.</td></tr></tbody></table></div>' +
        '<p>À tester et entraîner à l’avance, avec et sans effort. Position de récupération économe : assis jambes sur les côtés ou allongé sur le flanc.</p>' +
        '<p><b>Gérer une fuite</b> (bris d’équipement, ce n’est pas une technique d’économie) : ouvrir le robinet d’<b>1/4 de tour</b> et inspirer, fermer et retenir, expirer lentement, recommencer.</p>' },
    { id: 'sauveteur', t: 'Porter secours à un équipier', ic: 'cross', src: 'GTO Sauvetage et mise en sécurité V1.1, chap. IV § 1 à 3 ; GTO Engagement en milieu vicié 2019, § 7.9.2 et 7.10',
      html: '<p>Le sapeur-pompier victime est une « victime particulière » (ARI, tenue, localisation) ; sa prise en charge sollicite aussi l’affect des collègues. <b>Abordage</b> :</p>' +
        '<ul class="check"><li>le retourner s’il est sur le ventre ;</li><li><b>stopper l’alarme</b> du détecteur d’immobilité (pour écouter et passer un message) ;</li><li>vérifier la conscience (appel verbal, puis saisir les mains) ;</li><li>vérifier la présence d’air dans le masque (écoute, appui sur la SAD) ;</li><li>lire la <b>pression au manomètre</b> : elle donne le degré d’urgence ;</li><li>assister en air (entre équipiers ou lot d’assistance en air respirable) ;</li><li>« packaging » : sangle ventrale passée sous la cuisse et bretelles serrées, le harnais fait corps avec la victime.</li></ul>' +
        '<p>Puis traction au sol par le dossard, les poignets ou les chevilles, en choisissant le côté de prise qui <b>évite de fermer le robinet</b>. Le dossard peut être converti en harnais.</p>' +
        '<p><b>Déshabiller un sauveteur inconscient</b> (GTO vicié) : 2 sauveteurs minimum, un à la tête (T) et un entre les jambes (J), en une trentaine de secondes ; (T) coupe la SAD et retire masque et cagoule, (J) ouvre la veste, puis à « prêt » (J) tire en reculant.</p>' +
        '<p class="small muted">Le livret SDIS 51 (§ 4.4 « Sauvetage du sauveteur ») indique « en cours de réalisation » : cette section s’appuie sur les GTO nationaux.</p>' }
  ],
  key: ['Évaluer : problème, environnement, autonomie, besoin d’aide.', 'NELAR : Nom, Engin, Localisation, Air, Renfort, précédé de « URGENT ×3 ».', 'Alarme d’immobilité : tous les binômes sortent du volume.', 'Victime découverte : pas d’alarme sauf si on ne peut pas la sortir seul.', 'AAALEERTER pour attendre les secours en économisant l’air.', '4 techniques de respiration : sauter, intervalle, Reilly, 2/4.', 'Fuite : robinet 1/4 de tour, ouvrir-inspirer, fermer-retenir.'],
  traps: ['Déclencher l’alarme dès la découverte d’une victime : cela fait sortir tous les binômes du volume.', 'Retirer l’ARI dès qu’un passage est étroit : c’est le dernier recours.', 'Tracter un équipier du mauvais côté et fermer son robinet.'],
  quiz: [
    { q: 'Dans NELAR, le « A » signifie :', c: ['Air restant du binôme', 'Alarme', 'Adresse', 'Appel'], e: 'NELAR : Nom, Engin, Localisation, Air restant, Renfort nécessaire.', s: 'nelar' },
    { q: 'L’alarme « homme mort » retentit dans un volume : que font les autres binômes ?', c: ['Ils sortent tous du volume', 'Ils cherchent immédiatement le binôme', 'Ils continuent leur reconnaissance', 'Ils coupent leur balise'], e: 'Livret SDIS 51 : tous les binômes du volume sortent, le contrôleur identifie le binôme en difficulté et engage le binôme de sécurité.', s: 'hommemort' },
    { q: 'Un binôme découvre une victime qu’il peut sortir seul. Déclenche-t-il le système sonore de détresse ?', c: ['Non', 'Oui, toujours', 'Oui, après la sortie', 'Seulement si la victime est consciente'], e: 'Livret : la découverte d’une victime ne nécessite pas le déclenchement, sauf si le binôme ne pourra pas la sortir seul.', s: 'hommemort' },
    { q: 'Dans AAALEERTER, que signifie « Remonter ma cagoule » ?', c: ['Dernier recours sans air : retirer la SAD et filtrer la fumée avec la cagoule', 'Remonter la cagoule pour mieux entendre', 'Remettre la cagoule après la sortie', 'Signaler sa position'], e: 'Uniquement lorsqu’il n’y a plus d’air et aucun raccordement possible ; le porteur s’expose à l’intoxication.', s: 'aaaleerter' },
    { q: 'Méthode de respiration 2/4 :', c: ['Inspirer 2 s, expirer 4 s', 'Inspirer 4 s, expirer 2 s', '2 respirations puis 4 s d’apnée', 'Inspirer 2 fois, expirer 4 fois'], e: 'GTO § 7.9.1 : inspirer sur 2 secondes, expirer sur 4 secondes, recommencer.', s: 'air' },
    { q: 'En abordant un équipier inconscient, pourquoi stopper l’alarme du détecteur d’immobilité ?', c: ['Pour l’écouter et pouvoir passer un message radio', 'Pour économiser sa batterie', 'Pour ne pas alerter le contrôleur', 'Parce qu’elle consomme de l’air'], e: 'GTO Sauvetage chap. IV § 2 : l’alarme empêche d’entendre l’équipier et de passer un message de détresse.', s: 'sauveteur' },
    { q: 'Premier réflexe face à un débit d’air insuffisant ?', c: ['Vérifier l’ouverture complète du robinet', 'Retirer le masque', 'Déclencher l’évacuation générale', 'Remonter sa cagoule'], e: 'GTO § 7.7 : robinet, bouton de la SAD, pression, signaler à l’équipier ; si non résolu, règles de sauvegarde.', s: 'air' }
  ]
});

/* =====================================================================================
   INCENDIE 6 — CHAPITRE 6 : retour et après l’engagement
   ===================================================================================== */
VSAV.chap({
  id: 'inc-ari-apres', part: 'inc', seq: INC4_S6,
  title: 'Retour, réengagement et règles après l’engagement', short: 'ARI : après l’engagement', motif: 'reset',
  sources: ['Diaporama formateur « A.R.I - Règles à respecter après l’engagement »', 'GTO Engagement en milieu vicié (DGSCGC, 2019), chap. III § 3-4 et chap. IV'],
  summary: 'Rendre compte (J’ai vu / J’ai fait / Je propose / Je redoute), récupérer, remettre à niveau et reconditionner.',
  why: '<b>Pourquoi ces règles ?</b> Le compte rendu du binôme est la seule « image » de l’intérieur dont dispose le commandement. La récupération physique évite d’engager un binôme épuisé ; le reconditionnement rend l’appareil sûr pour le <b>prochain</b> porteur et limite l’exposition aux suies toxiques.',
  sections: [
    { id: 'cr', t: 'Le compte rendu de sortie', ic: 'clip', src: 'GTO Engagement en milieu vicié 2019, chap. III § 3',
      html: '<p>À l’issue des engagements, un compte rendu verbal ou graphique est fait au contrôleur :</p>' +
        '<div class="tw"><table><thead><tr><th>Formule</th><th>Contenu</th></tr></thead><tbody>' +
        '<tr><td>« <b>J’ai vu</b> »</td><td>a. accès actuels et possibles ; b. parcours (longueur, particularités) ; c. niveaux et pièces impactés</td></tr>' +
        '<tr><td>« <b>J’ai fait</b> »</td><td>d. actions réalisées</td></tr>' +
        '<tr><td>« <b>Je propose</b> »</td><td>e. actions à mettre en œuvre</td></tr>' +
        '<tr><td>« <b>Je redoute</b> »</td><td>f. évolution du sinistre et conséquences</td></tr></tbody></table></div>' +
        '<p>Le livret SDIS 51 rappelle que l’équipier compte les repères tactiles de la ligne guide pour établir <b>au retour</b> un plan le plus fidèle possible.</p>' },
    { id: 'reeng', t: 'Le réengagement et la récupération', ic: 'walk', src: 'GTO Engagement en milieu vicié 2019, chap. III § 4 et 4.1',
      html: '<p>Réengagement = nouvelle mission après une phase de récupération. Il est conditionné, que le feu soit maîtrisé ou non, par une <b>autonomie suffisante</b> pour la mission (aller / travail / retour) et un <b>état physique satisfaisant validé par le chef d’agrès</b>. La pression disponible est mentionnée au point de pénétration. Prévoir des <b>relèves</b> limite les réengagements.</p>' +
        '<p><b>Récupération</b> (durée fixée par le chef d’agrès) : poser l’ARI ; retirer casque et masque, ouvrir la veste (retrait veste et cagoule si possible) ; s’hydrater et/ou s’alimenter ; faible sollicitation physique (assis ou à genoux).</p>' +
        '<p><b>Remise à niveau du matériel</b> (à ne pas confondre avec la remise en état de fin d’opération) : changement des bouteilles, contrôle visuel et remise en état des dossards et masques, dans une zone propre et abritée si possible.</p>' },
    { id: 'personnel', t: 'Remise en condition du personnel', ic: 'drop', src: 'GTO Engagement en milieu vicié 2019, chap. IV § 1',
      html: '<ul class="check"><li><b>Hydratation</b> : compense les pertes en eau et minéraux, favorise la récupération (boire avant et après l’effort).</li><li><b>Hygiène</b> corporelle, nettoyage ou échange des vêtements : pour soi et pour son entourage.</li><li><b>Repos</b> physiologique selon l’intensité et la durée du travail sous ARI.</li></ul>' },
    { id: 'materiel', t: 'Reconditionnement de l’ARI', ic: 'reset', src: 'Diaporama « A.R.I - Règles à respecter après l’engagement » ; GTO Engagement en milieu vicié 2019, chap. IV § 2',
      html: '<p><b>Diaporama SDIS 51</b> — les personnels spécialisés doivent :</p>' +
        '<ul class="check"><li>nettoyer le <b>masque</b> ;</li><li><b>remplir les bouteilles</b> et vérifier la pression ;</li><li>nettoyer tous les éléments ;</li><li><b>plomber</b> les bouteilles ;</li><li>ranger le matériel à son emplacement d’origine ;</li><li><b>retirer du service</b> tout matériel ayant subi une agression chimique ou thermique importante et le faire contrôler (fabricant ou laboratoire notifié).</li></ul>' +
        '<p><b>GTO</b> : sur place, selon la salissure, le COS peut préconiser un brossage à sec, un rinçage léger à l’eau savonneuse, un emballage avant transport. Au CS, sous protection adaptée : nettoyer ARI et accessoires, vérifier la pression, nettoyer et contrôler les masques, retirer le matériel agressé ou déformé, rendre compte de toute indisponibilité, remplir les bouteilles (personnel formé ; air de qualité, analyse pendant le gonflage préconisée), ranger. Chaque ARI a une <b>fiche de suivi</b> (bouteille, masque, dossard).</p>' }
  ],
  key: ['Compte rendu : J’ai vu, J’ai fait, Je propose, Je redoute.', 'Réengagement : autonomie suffisante + état physique validé par le chef d’agrès.', 'Récupération : poser l’ARI, ouvrir la veste, boire, s’asseoir.', 'Après : nettoyer le masque, remplir et plomber les bouteilles, ranger.', 'Matériel agressé chimiquement ou thermiquement : retiré du service et contrôlé.'],
  traps: ['Confondre remise à niveau (pendant l’opération) et reconditionnement (fin d’opération).', 'Remettre en service un masque ou une bouteille ayant subi une forte chaleur sans contrôle.'],
  quiz: [
    { q: '« Je redoute » correspond dans le compte rendu à :', c: ['L’évolution du sinistre et ses conséquences', 'Les actions réalisées', 'Les accès possibles', 'Les actions à mettre en œuvre'], e: 'J’ai vu (accès, parcours, niveaux), J’ai fait (actions), Je propose (actions à mener), Je redoute (évolution et conséquences).', s: 'cr' },
    { q: 'Qui valide l’état physique d’un binôme avant réengagement ?', c: ['Le chef d’agrès', 'Le binôme lui-même', 'Le conducteur', 'Le binôme de sécurité'], e: 'GTO § 4 : état physique satisfaisant validé par le chef d’agrès, en plus d’une autonomie suffisante.', s: 'reeng' },
    { q: 'Un ARI a subi une agression thermique importante :', c: ['Il est retiré du service et contrôlé', 'Il est rincé et remis en service', 'Seule la bouteille est changée', 'Il est utilisé uniquement en exercice'], e: 'Diaporama « après » et GTO : retrait du service et contrôle par le fabricant ou un laboratoire notifié.', s: 'materiel' },
    { q: 'Que comprend la remise à niveau du matériel pendant l’opération ?', c: ['Changement des bouteilles et contrôle visuel des dossards et masques', 'Le gonflage des bouteilles au compresseur', 'La désinfection complète des masques', 'Le plombage des bouteilles'], e: 'GTO § 4.2 : changement des bouteilles, contrôle visuel et remise en état des dossards et masques, avant un éventuel réengagement.', s: 'reeng' }
  ]
});

/* =====================================================================================
   INCENDIE 7 — CHAPITRE 7 : reconnaissances et marquage
   ===================================================================================== */
VSAV.chap({
  id: 'inc-reco', part: 'inc', seq: INC4_S7,
  title: 'Reconnaissances : méthodes de recherche et marquage des portes', short: 'Reconnaissances', motif: 'eye',
  sources: ['Livret stagiaire Équipier incendie SDIS 51 (v2019), § 4.1 à 4.4', 'GTO Engagement en milieu vicié (DGSCGC, 2019), chap. III § 1.4, 2 et 5', 'POP-16 SDIS 51 « Marquage des portes lors des reconnaissances » (indice 02, 13/03/2023)', 'Guide d’instruction et de manœuvre INC (SDIS 51) : « Où chercher en priorité ? »'],
  summary: 'Le binôme de reconnaissance cherche vite, partout, avec méthode, et marque ce qu’il a vu.',
  why: '<b>Pourquoi une méthode ?</b> Le temps sous ARI est limité : le livret insiste pour couvrir un maximum de surface dans ce temps. Une recherche systématique (main droite / gauche, pièce par pièce) évite d’oublier une victime ; le marquage évite de refaire deux fois la même pièce et dit aux équipes suivantes ce qui a été fait.',
  sections: [
    { id: 'mission', t: 'La mission du binôme de reconnaissance', ic: 'target', src: 'Livret stagiaire SDIS 51, § 4.1 et 4.2',
      html: '<p>Le binôme indique au chef d’agrès : la présence de <b>victimes</b>, la <b>localisation du foyer</b>, les <b>cheminements</b> et <b>accès</b>, les <b>risques</b> et les difficultés rencontrées. Il doit être doté d’une <b>radio</b> pour rendre compte en temps réel, et réfléchir aux <b>itinéraires de secours</b>.</p>' +
        '<ul class="check"><li>Être <b>curieux</b> : visiter tous les volumes (meubles, placards…) aussi petits soient-ils.</li><li>Écouter les appels et signes de présence ; attention aux <b>enfants</b>, qui se cachent et peuvent être impressionnés par l’apparence du binôme.</li><li>Progresser au maximum en <b>position basse</b> : moins rapide, mais reconnaissance plus complète, moins de chutes et température plus faible au sol.</li><li>S’équiper de moyens de <b>marquage</b>, d’outils de forcement (Halligan, hache) et de la <b>caméra thermique</b>, jugée indispensable.</li></ul>' +
        '<p><b>L’équipier</b> assiste le chef pour qu’il se concentre sur la recherche et veille à la sécurité du binôme (ligne guide tendue, guide main droite / gauche, comptage des repères).</p>' },
    { id: 'methode', t: 'Méthodes de recherche', ic: 'grid', src: 'Livret stagiaire SDIS 51, § 4.4 ; GTO Engagement en milieu vicié 2019, chap. III § 1.4 et 2',
      html: '<p><b>Circulation</b> (livret) : chef et équipier progressent <b>côte à côte</b>, reliés par la portion courte de la liaison, en traînant entre eux la barre Halligan ou la hache ; avec le manche de la hache, le binôme couvre plus de <b>2 m de largeur</b> et balaie tout le couloir dès le premier passage.</p>' +
        '<p><b>Petit volume</b> : le livret indique que pour les volumes <b>&lt; 35 m²</b>, l’équipier peut rester à la porte et le chef chercher seul, liaison passée à <b>6 m</b>. Le GTO prévoit qu’un membre reconnaît le petit espace pendant que l’autre reste à l’entrée en maintenant la communication verbale ; lors des reconnaissances avec un moyen hydraulique, c’est l’<b>équipier</b> qui reconnaît le local, le chef gardant sa lance entre le foyer et la pièce.</p>' +
        '<p><b>Méthode circulaire</b> (GTO) : le chef, attaché à l’équipier, fait des « va-et-vient » à partir de sa position et s’éloigne au fur et à mesure pour couvrir toute la pièce.</p>' +
        '<p><b>Règles de déplacement</b> (GTO) : debout, accroupi ou <b>à quatre pattes</b> (à privilégier dans une pièce enfumée : moins de chutes de plain-pied) ; descendre un escalier <b>en marche arrière</b> ; longer les murs du côté choisi (<b>main gauche</b> ou <b>main droite</b>, défini avant l’engagement) et <b>ressortir par la porte d’entrée</b>.</p>',
      figs: [{ img: 'img/inc/4/recherche-piece.jpg', cap: 'Trois techniques de recherche dans une pièce', txt: '<p>Les tracés rouges montrent le parcours du binôme, les cônes le champ de la caméra thermique : le livret rappelle que son emploi est primordial pour parfaire la reconnaissance.</p>', src: 'Livret stagiaire SDIS 51, p. 82' }] },
    { id: 'ou', t: 'Où et dans quel ordre chercher ?', ic: 'pin', src: 'GTO Engagement en milieu vicié 2019, chap. III § 2 ; Guide d’instruction INC SDIS 51',
      html: '<p><b>Recherche primaire</b> : au plus tôt, d’abord dans les endroits les plus probables (renseignements, lecture du feu), puis le reste du bâtiment. <b>Recherche secondaire</b> : après maîtrise et suppression des dangers, approfondie, si possible par d’autres binômes.</p>' +
        '<p>Menée en même temps que l’extinction, la recherche commence <b>près du foyer</b> et s’en écarte vers la sortie. En bâtiment à étages : <b>étage du feu</b>, puis <b>étage au-dessus</b>, puis <b>dernier étage</b>, puis étages intermédiaires et inférieurs.</p>' +
        '<p>Chercher dans les salles de bain (baignoires, douches), penderies, <b>sous les lits</b> et meubles, au sous-sol… Le guide SDIS 51 (statistique nationale 2008-2014) : <b>43 %</b> des personnes décédées sont retrouvées dans leur <b>chambre</b>, 20 % dans le salon / séjour, 13 % dans l’entrée et le couloir ; vérifier aussi derrière les portes, le long des murs et au pied des fenêtres.</p>',
      figs: [{ img: 'img/inc/4/ordre-etages.jpg', cap: 'Ordre de reconnaissance dans un immeuble', txt: '<p>1<sup>re</sup> étape : l’étage concerné par l’incendie ; 2<sup>e</sup> : l’étage directement au-dessus ; 3<sup>e</sup> : le dernier étage, où s’accumulent fumées et chaleur.</p>', src: 'GTO Engagement en milieu vicié 2019, p. 48' }] },
    { id: 'marquage', t: 'Le marquage des portes (POP-16)', ic: 'clip', src: 'POP-16 SDIS 51, indice 02 (2023) ; GTO Engagement en milieu vicié 2019, chap. III § 5',
      html: '<p>Les pièces reconnues sont marquées pour préciser l’avancée des reconnaissances et éviter une perte de temps par répétition. Les portes (d’entrée et intérieures) sont <b>refermées après reconnaissance</b> pour que les pièces ne soient pas envahies par les fumées ni gagnées par l’incendie. Moyen : une <b>craie</b> ou un crayon marqueur effaçable.</p>' +
        '<div class="tw"><table><thead><tr><th>Marque</th><th>Signification</th></tr></thead><tbody>' +
        '<tr><td><b>/</b> (un trait à l’entrée)</td><td>Reconnaissance <b>en cours</b></td></tr>' +
        '<tr><td><b>X</b> (2<sup>e</sup> trait à la sortie)</td><td>Reconnaissance <b>effectuée</b></td></tr>' +
        '<tr><td><b>C</b> + chiffre (complément SDIS 51)</td><td>Personnes <b>confinées</b> (ex. C2 = 2 personnes)</td></tr>' +
        '<tr><td><b>E</b> + chiffre (complément SDIS 51)</td><td>Personnes <b>évacuées</b> (ex. E4 = 4 personnes)</td></tr>' +
        '<tr><td><b>Cercle</b> autour de la croix</td><td><b>Seconde</b> reconnaissance effectuée</td></tr></tbody></table></div>' +
        '<p>Marquer de préférence <b>en partie basse</b> de la zone d’écriture, pour rester visible si les circulations s’enfument.</p>' +
        '<div class="callout warn"><b>Divergence entre versions :</b> le livret 2019 (§ 4.3) reproduit l’ancienne POP-16 (indice 1, 2014) : <b>X</b> = appartement reconnu et vide, <b>?</b> = non reconnu, C/E + nombre, craie de plusieurs couleurs, écriture à environ <b>1 m du sol</b>. La POP-16 indice 02 (2023), alignée sur le GTO 2019, utilise / puis X, un cercle pour la 2<sup>e</sup> reconnaissance, et le marquage en partie basse.</div>',
      figs: [{ img: 'img/inc/4/pop16-marquage.jpg', cap: 'POP-16 : conduite à tenir', txt: '<p>De gauche à droite : reconnaissance en cours, reconnaissance effectuée, 2 personnes confinées, 4 personnes évacuées, seconde reconnaissance.</p>', src: 'POP-16 SDIS 51, indice 02 (13/03/2023)' }] }
  ],
  key: ['Rechercher victimes, foyer, accès, risques ; rendre compte par radio.', 'Visiter tous les volumes, position basse, caméra thermique.', 'Main droite / main gauche choisie avant l’engagement ; ressortir par la porte d’entrée.', 'Ordre : étage du feu, étage au-dessus, dernier étage, puis le reste.', '43 % des victimes décédées sont retrouvées dans leur chambre.', 'Marquage : / en cours, X effectuée, C confinés, E évacués, cercle = 2e reco.', 'Refermer les portes après reconnaissance ; marquer en partie basse.'],
  traps: ['Laisser une porte ouverte après la reconnaissance : la pièce s’enfume.', 'Oublier les petits volumes (placards, sous les lits) où se cachent les enfants.', 'Utiliser l’ancien code « ? / X » du livret au lieu de la POP-16 en vigueur.'],
  quiz: [
    { q: 'Selon la POP-16 en vigueur, un « / » sur une porte signifie :', c: ['Reconnaissance en cours', 'Reconnaissance effectuée', 'Local vide', 'Seconde reconnaissance'], e: 'Un trait à l’entrée = en cours ; un 2e trait formant une croix à la sortie = effectuée.', s: 'marquage' },
    { q: 'Que signifie « E4 » sous une croix ?', c: ['4 personnes évacuées', '4e étage reconnu', '4 personnes confinées', '4 binômes engagés'], e: 'Complément SDIS 51 : E + chiffre = personnes évacuées ; C + chiffre = personnes confinées.', s: 'marquage' },
    { q: 'Où écrire le marquage ?', c: ['En partie basse de la zone d’écriture', 'Le plus haut possible', 'Sur le sol devant la porte', 'Sur la poignée'], e: 'Pour rester visible en cas d’envahissement des circulations par les fumées.', s: 'marquage' },
    { q: 'Dans un immeuble, quel étage reconnaît-on en deuxième ?', c: ['L’étage directement au-dessus du feu', 'Le dernier étage', 'Le rez-de-chaussée', 'L’étage en dessous du feu'], e: 'GTO § 2 : étage du foyer, puis étage directement au-dessus, puis dernier étage, puis les autres.', s: 'ou' },
    { q: 'Dans une pièce envahie de fumée, quelle position privilégier ?', c: ['À quatre pattes', 'Debout', 'Accroupi sur les talons', 'Allongé sans bouger'], e: 'GTO : le déplacement à quatre pattes réduit le risque de chute de plain-pied ; le livret ajoute que la température est plus faible au sol.', s: 'methode' },
    { q: 'Comment descendre un escalier en recherche ?', c: ['En marche arrière', 'En courant', 'Sur le dos', 'Face à la pente sans appui'], e: 'GTO § 2 : la descente d’un escalier se fait en marche arrière pour limiter les risques de chute.', s: 'methode' },
    { q: 'Que fait-on de la porte après avoir reconnu une pièce ?', c: ['On la referme', 'On la laisse grande ouverte', 'On la démonte', 'On la bloque entrouverte'], e: 'POP-16 / GTO : les portes sont fermées pour que les pièces ne soient pas envahies par les fumées ou gagnées par l’incendie.', s: 'marquage' }
  ]
});

/* =====================================================================================
   INCENDIE 7 — CHAPITRE 8 : sauvetages et mises en sécurité
   ===================================================================================== */
VSAV.chap({
  id: 'inc-sauvetage', part: 'inc', seq: INC4_S7,
  title: 'Sauvetages et mises en sécurité : confinement, évacuation', short: 'Sauvetage, mise en sécurité', motif: 'hand',
  sources: ['Livret stagiaire Équipier incendie SDIS 51 (v2019), § 6.1 et § 4.4 (découverte d’une victime, cagoule)', 'GTO Sauvetage et mise en sécurité (DGSCGC, V1.1), chap. II et chap. III § 1-2', 'GTO Engagement en milieu vicié (DGSCGC, 2019), chap. III § 2', 'Guide d’instruction et de manœuvre INC (SDIS 51)'],
  summary: 'Distinguer sauvetage et mise en sécurité, choisir entre confinement et évacuation, sortir une victime des fumées.',
  why: '<b>Pourquoi distinguer ?</b> Le sauvetage est la mission première des sapeurs-pompiers et la seule qui justifie une <b>prise de risque réfléchie</b>. Savoir si une personne est en péril immédiat (sauvetage) ou menacée à brève échéance (mise en sécurité), et s’il vaut mieux la confiner ou l’évacuer, évite d’exposer inutilement la victime et les sauveteurs.',
  sections: [
    { id: 'defs', t: 'Sauvetage ou mise en sécurité ?', ic: 'book', src: 'Livret SDIS 51 § 6.1 ; GTO Sauvetage et mise en sécurité, chap. II § 1.1 ; Guide d’instruction INC SDIS 51',
      html: '<div class="tw"><table><thead><tr><th></th><th>Livret SDIS 51</th><th>GTO Sauvetage</th></tr></thead><tbody>' +
        '<tr><td><b>Sauvetage</b></td><td>Soustraire d’un péril <b>direct ou imminent</b> une victime dans l’incapacité ou l’impossibilité de s’y soustraire d’elle-même.</td><td>Soustraire une personne d’un danger imminent qui, sans aide extérieure, serait vouée à une <b>mort certaine</b>.</td></tr>' +
        '<tr><td><b>Mise en sécurité</b></td><td>Déplacer une personne qui pourrait subir les effets du sinistre en l’accompagnant ou en la dirigeant vers une zone de sécurité.</td><td>Protéger d’une menace plus ou moins différée : déplacement commandé et accompagné vers une zone sécurisée, ou à défaut confinement sur place.</td></tr></tbody></table></div>' +
        '<p class="small muted">Les deux formulations du sauvetage diffèrent : le livret insiste sur l’incapacité de la victime, le GTO sur l’issue fatale sans aide.</p>' +
        '<p>Les sauvetages s’effectuent <b>en priorité dès qu’ils sont évidents</b> ; le chef d’agrès choisit la technique (agrès, manœuvres, dégagements d’urgence). La rapidité prime, mais <b>sans risques inconsidérés</b> pour la victime comme pour les sauveteurs. Le sauvetage utilise de préférence les <b>communications existantes</b> (plus rapides, commodes et sûres) ; sinon, par l’extérieur (MEA, échelles, lots de sauvetage).</p>' },
    { id: 'confin', t: 'Confinement ou évacuation', ic: 'shield', src: 'GTO Sauvetage et mise en sécurité, chap. II § 1.1.2 et 1.1.3',
      html: '<p><b>Confinement</b> : laisser les personnes où elles sont pour les maintenir à l’abri des effets d’un danger (dans le cas le plus défavorable, étanchéité du local). <b>Évacuation</b> : ordonner préventivement aux personnes de quitter la zone de danger, au besoin en les accompagnant ; elle doit être <b>cadrée et accompagnée</b> pour éviter la panique.</p>' +
        '<div class="tw"><table><thead><tr><th></th><th>Avantages</th><th>Inconvénients</th></tr></thead><tbody>' +
        '<tr><td><b>Évacuation</b></td><td>Personnes hors de la zone de danger.</td><td>Délais importants ; moyens conséquents (humains, matériels, logistique, lieu d’accueil) ; exposition possible pendant le trajet.</td></tr>' +
        '<tr><td><b>Confinement</b></td><td>Réalisation rapide ; pas d’exposition directe au danger.</td><td>Procédure difficile à faire respecter dans le temps ; isolement des personnes ; personnes restant dans la zone de danger.</td></tr></tbody></table></div>' +
        '<p>Le COS peut préférer le confinement quand le trajet d’évacuation fait courir un risque trop important. Les évacuations relèvent du <b>DOS</b>, sur proposition du COS. En feux de forêts, le confinement reste la règle pour les structures en dur.</p>' +
        '<p>Consignes de l’opérateur au requérant qui ne peut pas sortir (feu d’appartement) : se mettre à l’abri dans une pièce opposée au sinistre, fermer la porte, mettre un <b>linge humide au bas de la porte</b>, se manifester aux fenêtres. Feu de cage d’escalier : ne pas évacuer par l’escalier enfumé, ne pas prendre l’ascenseur.</p>' },
    { id: 'analyse', t: 'Analyser avant d’agir', ic: 'brain', src: 'GTO Sauvetage et mise en sécurité, chap. II § 1.2 ; Guide d’instruction INC SDIS 51 (balance bénéfice-risque)',
      html: '<p>Quatre éléments conditionnent l’action : l’<b>environnement</b>, la <b>victime</b> (comportement : coopérante, paniquée… ; état : valide, invalide, consciente…), le <b>sauveteur / matériel</b>, le <b>temps</b> (degré d’urgence, cinétique figée ou évolutive). Questionnement : quels enjeux ? quelle mission, est-elle réalisable ? quel est mon degré d’exposition ?</p>' +
        '<p>Le COS peut agir sur la <b>source</b> (coupure gaz, attaque du foyer), sur le <b>flux</b> (désenfumage, moyen hydraulique) et/ou sur la <b>cible</b> (évacuation, confinement).</p>' +
        '<div class="callout warn">Le guide SDIS 51 rappelle la balance bénéfice-risque (« risquer beaucoup pour sauver beaucoup, risquer peu pour sauver peu et ne rien risquer pour ne rien sauver ») et qu’agir sur le feu — parfois simplement <b>fermer une porte</b> — fait gagner du temps pour rechercher une victime : « une porte fermée peut sauver la vie ».</div>' },
    { id: 'valide', t: 'Mise en sécurité d’une personne valide et dégagements d’urgence', ic: 'walk', src: 'GTO Sauvetage et mise en sécurité, chap. III § 1 et 2 ; livret SDIS 51 § 6.1',
      html: '<p>Victime valide : le sauveteur <b>accompagne, aide et conseille</b> ; elle n’est <b>jamais laissée seule</b>. Priorité aux communications existantes ; MEA en cas d’impraticabilité ou de mises en sécurité multiples. Aides possibles : consignes au porte-voix, ventilation (fermeture de la porte du local sinistré, stoppeur de fumée…), assistance respiratoire (cagoule de fuite, masque de l’ARI partagé en mode dégradé).</p>' +
        '<p>Le livret : après avoir rassuré la victime, le binôme la prend en charge pour traverser les fumées jusqu’au point de sortie ; elle est accompagnée jusqu’au <b>VSAV</b> ou au <b>point de rassemblement des victimes (PRV)</b>.</p>' +
        '<p><b>Dégagement d’urgence</b> = sauvetage sans matériel, pour déplacer la victime de quelques mètres en quelques secondes vers un lieu sûr. Uniquement si le danger est <b>réel, immédiat, vital et non contrôlable</b>. Techniques : traction par les poignets, par les chevilles, avec équipier-relais, « porter pompier »… ou avec matériel (plan dur, grande sangle du lot de sauvetage).</p>',
      figs: [{ img: 'img/inc/4/aide-victime.jpg', cap: 'Techniques d’aide à la victime', txt: '<p>Selon l’état de la victime : elle marche soutenue, ou elle est portée à dos, dans les bras, en « porter pompier », ou à 4 mains (« chaise »).</p>', src: 'GTO Sauvetage et mise en sécurité V1.1, p. 66' }] },
    { id: 'decouverte', t: 'Découverte d’une victime dans les fumées', ic: 'cross', src: 'Livret SDIS 51 § 4.4 (§ 3 et § 4) ; GTO Engagement en milieu vicié 2019, chap. III § 2 ; Guide d’instruction INC SDIS 51',
      html: '<p>Dès qu’une victime est découverte, son <b>sauvetage devient prioritaire</b> : l’extraire au plus vite dans les meilleures conditions de sécurité, avec discernement et en concertation. Le <b>chef d’équipe</b> choisit le mode : confinement dans un volume à l’abri des fumées, évacuation par les communications existantes avec la <b>cagoule de sauvetage</b>, évacuation avec le lot de sauvetage ou par échelle à coulisse / aérienne.</p>' +
        '<p><b>Cagoule d’évacuation</b> (fiche SDIS 51 du livret) : 3 couches réfléchissantes résistant à l’eau et à la flamme, vision panoramique, boudin de cou avec cordelette, tuyau de 2<sup>e</sup> sortie. <b>2 cagoules par engin pompe</b> (FPT, FPTHR, FPTGP), sur l’ARI de chaque chef d’équipe. Conduite : ouvrir la sacoche et l’emballage, déplier, enfiler en écartant le boudin du cou, <b>connecter le flexible sur la prise secondaire de l’ARI</b>, évacuer immédiatement, nettoyer après usage.</p>' +
        '<div class="callout warn"><b>Limites :</b> exclusivement pour l’évacuation ou pour pallier la défaillance de l’ARI d’un sapeur-pompier. Son emploi <b>diminue fortement l’autonomie</b> de l’ARI du porteur. Débit : <b>40 à 50 l/min en continu</b> selon le livret, <b>40 ± 2 l/min</b> selon le guide d’instruction SDIS 51 (divergence de chiffres).</div>' +
        '<p>Le GTO confie cette mission au sauveteur disposant de la <b>plus grande autonomie</b> : prendre contact, expliquer la procédure, équiper la victime, l’évacuer vers un lieu protégé. <b>Espaces d’attente sécurisés (EAS)</b> en ERP : se renseigner, repérer sur les plans, contacter les personnes, reconnaître, décider confinement ou évacuation.</p>' }
  ],
  key: ['Sauvetage = péril imminent ; mise en sécurité = menace différée.', 'Seuls les sauvetages/mises en sécurité justifient une prise de risque réfléchie.', 'Communications existantes en priorité.', 'Confinement : rapide mais personnes restées dans la zone ; évacuation : décidée par le DOS sur proposition du COS.', 'Victime déplacée jamais laissée seule ; jusqu’au VSAV ou au PRV.', 'Dégagement d’urgence : danger réel, immédiat, vital, non contrôlable.', 'Cagoule : 2 par engin pompe, sur la prise secondaire de l’ARI ; réduit l’autonomie.'],
  traps: ['Évacuer par une cage d’escalier enfumée au lieu de confiner.', 'Faire un dégagement d’urgence pour un danger contrôlable.', 'Oublier que la cagoule consomme l’air de l’ARI du sauveteur.'],
  quiz: [
    { q: 'Selon le GTO, la mise en sécurité consiste en priorité à :', c: ['Un déplacement commandé et accompagné vers une zone sécurisée', 'Un dégagement d’urgence', 'Un sauvetage par l’extérieur', 'Une attente sans contact'], e: 'GTO chap. II § 1.1.2 : déplacement commandé et accompagné, ou à défaut confinement sur place.', s: 'defs' },
    { q: 'Qui décide d’une évacuation de population ?', c: ['Le DOS, sur proposition du COS', 'Le chef d’équipe', 'Le contrôleur ARI', 'L’opérateur du CTA'], e: 'GTO chap. II : les décisions d’évacuation relèvent du DOS, sur proposition du COS ; leur réalisation peut être confiée aux forces de l’ordre.', s: 'confin' },
    { q: 'Un inconvénient du confinement est :', c: ['Les personnes restent dans la zone de danger', 'Les délais de mise en œuvre sont très longs', 'Il exige un lieu d’accueil', 'Il expose au danger pendant le trajet'], e: 'Confinement : rapide et sans exposition directe, mais isolement, difficulté à faire respecter la consigne et présence dans la zone de danger.', s: 'confin' },
    { q: 'Un dégagement d’urgence n’est réalisé que si le danger est :', c: ['Réel, immédiat, vital et non contrôlable', 'Possible à moyen terme', 'Uniquement lié au feu', 'Signalé par le requérant'], e: 'GTO chap. III § 2 : ces quatre conditions sont cumulatives.', s: 'valide' },
    { q: 'Sur quoi se connecte la cagoule d’évacuation ?', c: ['Sur la prise secondaire de l’ARI du sauveteur', 'Sur la bouteille de la victime', 'Directement sur le robinet', 'Elle fonctionne sans raccordement'], e: 'Fiche SDIS 51 : connecter le flexible sur la prise secondaire de l’appareil respiratoire ; cela diminue l’autonomie du porteur.', s: 'decouverte' },
    { q: 'Combien de cagoules d’évacuation par engin pompe au SDIS 51 ?', c: ['2, sur l’ARI de chaque chef d’équipe', '1, dans le coffre', '4, une par porteur', 'Aucune, elles sont dans le VSAV'], e: 'Fiche du livret : 2 cagoules par engin pompe (FPT, FPTHR, FPTGP) sur l’ARI de chaque chef d’équipe.', s: 'decouverte' },
    { q: 'Où la victime mise en sécurité est-elle accompagnée selon le livret ?', c: ['Jusqu’au VSAV ou au PRV', 'Jusqu’à la porte du bâtiment, puis laissée seule', 'Au point de pénétration', 'Dans l’engin pompe'], e: 'Livret § 6.1 : la victime est accompagnée jusqu’au VSAV ou au point de rassemblement des victimes pour être prise en charge.', s: 'valide' }
  ]
});

/* =====================================================================================
   INCENDIE 7 — CHAPITRE 9 : sauvetages au moyen du LSPCC
   ===================================================================================== */
VSAV.chap({
  id: 'inc-lspcc', part: 'inc', seq: INC4_S7,
  title: 'Les sauvetages au moyen du LSPCC', short: 'Sauvetages au LSPCC', motif: 'rope',
  sources: ['Livret stagiaire Équipier incendie SDIS 51 (v2019), § 6.2 (renvoi au GNR LSPCC)', 'Diaporamas formateur « Manœuvres LSPCC » (1 et 2)', 'GTO Sauvetage et mise en sécurité (DGSCGC, V1.1), chap. I § 3 et chap. III § 3', 'Guide d’instruction et de manœuvre INC (SDIS 51) : composition du LSPCC SDIS 51'],
  summary: 'Possibilités et limites, composition, facteur de chute, ancrage, sauvetage par l’extérieur, en excavation et reconnaissance d’appartement.',
  why: '<b>Pourquoi tant de rigueur ?</b> Le LSPCC (lot de sauvetage et de protection contre les chutes) est l’<b>alternative</b> quand les moyens plus sûrs (communications existantes, échelles) sont impossibles ou qu’il faut agir tout de suite. On travaille alors dans le vide, avec une victime : un mousqueton mal vissé ou un mauvais ancrage ne pardonnent pas.',
  sections: [
    { id: 'usages', t: 'Possibilités et limites', ic: 'list', src: 'GTO Sauvetage et mise en sécurité, chap. I § 3 et chap. III § 3 ; diaporama « Manœuvres LSPCC 2 »',
      html: '<p>Le livret SDIS 51 renvoie pour cette partie au <b>GNR « Lot de sauvetage et de protection contre les chutes »</b> ; le diaporama formateur aussi (« se référer au GNR en vigueur »).</p>' +
        '<p><b>Utilisations</b> : sauvetage ou mise en sécurité par l’extérieur ; reconnaissance d’appartement ; puits, fosses, excavations ; abordage et sécurisation d’une victime en péril ; déplacement d’une victime inconsciente ou invalide ; évolution avec risque de chute. <b>Limites</b> : matériel insuffisant ou situation nécessitant une équipe spécialisée ; état de la victime nécessitant une prise en charge spécifique.</p>' +
        '<div class="tw"><table><thead><tr><th>Manœuvres vues à l’équipier DIV</th><th>Manœuvres vues à l’équipier INC</th></tr></thead><tbody><tr><td>Reconnaissance d’appartement ; progression sur un toit</td><td><b>Sauvetage par l’extérieur ; sauvetage en excavation</b></td></tr></tbody></table></div>' +
        '<div class="callout warn">Il appartient au <b>COS</b>, au regard de son analyse des risques, de valider l’emploi du LSPCC ou de faire appel à une équipe spécialisée (SMPM…).</div>' },
    { id: 'compo', t: 'Composition', ic: 'grid', src: 'Guide d’instruction et de manœuvre INC (SDIS 51) ; GTO Sauvetage et mise en sécurité, chap. I § 3.1',
      html: '<div class="tw"><table><thead><tr><th>LSPCC SDIS 51 (guide d’instruction)</th><th>Lot « engin » national (GTO)</th></tr></thead><tbody>' +
        '<tr><td>1 corde</td><td>Corde semi-statique <b>30 m</b>, Ø 12 à 13 mm, nœud de huit double à chaque extrémité</td></tr>' +
        '<tr><td>4 anneaux cousus rouges + 4 anneaux cousus bleus</td><td>3 anneaux de 80 cm + 3 anneaux de 150 cm</td></tr>' +
        '<tr><td>6 mousquetons symétriques + 1 à verrouillage automatique + 1 demi-lune</td><td>6 mousquetons à vis + 1 à fermeture automatique</td></tr>' +
        '<tr><td>1 descendeur type 8</td><td>Frein de charge</td></tr>' +
        '<tr><td>1 poulie ; 1 harnais cuissard ; 1 triangle d’évacuation</td><td>1 poulie ; 1 harnais ; 1 triangle d’évacuation à bretelles</td></tr>' +
        '<tr><td>2 cordelettes ; 1 protection de corde</td><td>En option : cordelettes (50-60 cm), protection de corde, commande (30 m, Ø 7 mm)</td></tr></tbody></table></div>' +
        '<p class="small muted">Les deux colonnes ne décrivent pas le même lot : le SDIS 51 a sa propre dotation, différente du lot « engin » type décrit par le GTO (sac jaune ; le lot « échelle » a un sac bleu et une corde de 60 m).</p>' +
        '<p>Règles d’emploi des agrès (GTO) : efforts des mousquetons <b>uniquement dans le grand axe</b>, vis fermée à la main sans forcer, jamais en appui sur un angle ; la poulie ne doit pas « vriller » ; protection de corde <b>systématique</b> (face toilée contre la corde) ; cordelettes jamais pour un amarrage (3 tours minimum pour un autobloquant) ; mousqueton à verrouillage automatique pour l’encordement sternal du triangle.</p>' },
    { id: 'forces', t: 'Notions de risques et de forces', ic: 'alert', src: 'GTO Sauvetage et mise en sécurité, chap. III § 3.1',
      html: '<p><b>Facteur de chute</b> (Fc) = hauteur de chute ÷ longueur de corde qui amortit la chute. <b>Fc &gt; 1 interdit ; Fc = 1 à éviter.</b> Les points d’amarrage restent au-dessus ou au niveau de l’axe de déplacement.</p>' +
        '<p><b>Effet pendulaire</b> : décalé par rapport à l’ancrage, on balance lors de la chute, à une vitesse parfois équivalente à une chute ; collisions graves.</p>' +
        '<p><b>Syndrome du harnais</b> : une suspension inerte et prolongée réduit voire arrête le retour veineux ; perte de connaissance puis décès possibles en quelques minutes. Signes : étourdissement, malaise, tremblements, angoisse, troubles visuels, nausées. Conduite : dégager au plus vite, gestes de secours, surveillance attentive (aggravation brutale possible), avis médical précoce. <b>À l’exercice, un mannequin simule obligatoirement la victime.</b></p>' +
        '<p><b>Frottements</b> : surveiller la corde sur les arêtes et les frottements corde sur corde.</p>',
      figs: [{ img: 'img/inc/4/facteur-chute.jpg', cap: 'Facteur de chute', txt: '<p>Point d’ancrage au-dessus du sauveteur : facteur &lt; 1 (correct). Au niveau : facteur 1 (à éviter). En dessous : facteur &gt; 1 (interdit, danger).</p>', src: 'GTO Sauvetage et mise en sécurité V1.1, p. 69' }] },
    { id: 'systeme', t: 'Ancrage, amarrage et règles de mise en œuvre', ic: 'pin', src: 'GTO Sauvetage et mise en sécurité, chap. III § 3.2 et 3.4',
      html: '<p>Un système = <b>ancrage</b> (point fixe) + <b>amarrage</b> (connexion par agrès textiles/métalliques) + <b>dispositif</b> + <b>charge</b> + <b>équipier</b> qualifié.</p>' +
        '<ul class="check"><li>Ancrage naturel (arbre, rocher), structurel (poutre, pilier, rambarde, colonne sèche, échelle aérienne, fourgon) ou artificiel (échelle à main, outil de forcement…). <b>En cas de doute, le multiplier.</b></li>' +
        '<li>Véhicule en point d’ancrage : moteur arrêté et clé retirée, vitesse engagée, frein de parc serré, roues calées.</li>' +
        '<li>Amarrage a minima : <b>un connecteur et un anneau cousu</b> ; angle entre deux anneaux <b>≤ 90°</b> ; un nœud réduit la résistance.</li>' +
        '<li>Mousquetons <b>vissés</b> (sens de vissage vers le bas si possible) ; huit descendeur <b>toujours en point fixe</b> ; un mousqueton pour relier deux anneaux ; ne pas marcher sur les textiles ; matériel jamais posé sur des débris.</li>' +
        '<li><b>Mise au vide</b> = phase critique : frein sécurisé, mou anticipé ; victime inconsciente portée par 2 sauveteurs pieds en avant, face vers le sol. Une fois en tension, <b>vérifier</b> (amarrages, frottements) et tester le frein sur quelques centimètres.</li></ul>' +
        '<p>Nœuds utiles : huit double, nœud français (autobloquant), tête d’alouette (diminue la résistance de l’anneau), clé d’arrêt sur huit descendeur.</p>' },
    { id: 'exterieur', t: 'Sauvetage par l’extérieur', ic: 'team', src: 'GTO Sauvetage et mise en sécurité, chap. III § 3.4.2',
      html: '<p>Le chef d’agrès désigne le personnel, indique le lieu de sauvetage et fixe les moyens d’accès. Quand l’urgence empêche tout amarrage, l’<b>équipier sert de point fixe</b> : muni du harnais équipé du descendeur, allongé, <b>jambes à 90° contre le mur</b>, il contrôle la descente ; le chef d’agrès participe alors à la mise au vide.</p>' +
        '<div class="callout bad">La hauteur entre le frein de charge et le point d’appui sur le passage dans le vide doit être <b>≥ 20 cm</b>.</div>',
      steps: ['Chef d’équipe (binôme 1) : se munit du lot de sauvetage, se rend au lieu désigné, va chercher la victime et l’approche de l’endroit choisi.', 'Équipier (binôme 1) : se munit d’une commande.', 'Binôme 2 : se munit du matériel sur ordre.', 'Chef d’équipe : choisit un ou deux points fixes, réalise l’amarrage, installe le dispositif de descente après avoir estimé la hauteur.', 'Équipier : équipe la victime du triangle ou du harnais.', 'Chef d’équipe : relie le harnais ou le triangle à la corde avec le mousqueton ; vérifie la fermeture de tous les mousquetons.', 'Équipier : accroche la commande (qui écarte la victime de la façade) à l’anneau dorsal et envoie l’autre extrémité au binôme 2.', 'Équipier : engage la victime dans la descente ; chef d’équipe : veille au frein de charge et aide à l’engagement.', 'Chef d’équipe : contrôle et régule la descente ; binôme 2 : écarte la victime de la façade puis la réceptionne.'], stepsTitle: 'Répartition des rôles (GTO)',
      figs: [{ img: 'img/inc/4/sauvetage-exterieur.jpg', cap: 'Schéma de principe de la descente d’une victime', txt: '<p>A : ancrage/amarrage ; FC : frein de charge ; C : charge (victime) ; E : équipiers. La commande, tenue en bas, écarte la victime de la façade. Une protection de corde protège l’arête.</p>', src: 'GTO Sauvetage et mise en sécurité V1.1, p. 78' }] },
    { id: 'excavation', t: 'Sauvetage en puits, fosse ou excavation', ic: 'mountain', src: 'GTO Sauvetage et mise en sécurité, chap. III § 3.4.3',
      html: '<p>Deux binômes : un <b>binôme de sauvetage</b> (le chef, en harnais, descend sur une corde avec une poulie reliée à son harnais) et un <b>binôme de remontée</b> (installe son propre dispositif et une poulie reliée au triangle d’évacuation de la victime). Le chef du binôme de sauvetage équipe la victime du triangle ; victime et sauveteur sont remontés (mouflage), en même temps ou l’un après l’autre.</p>' +
        '<div class="callout bad">Le port de l’<b>ARI est obligatoire</b> lorsqu’on redoute une atmosphère viciée dans l’excavation. Le contrôle préalable se fait au <b>détecteur de gaz</b>.</div>',
      figs: [{ img: 'img/inc/4/excavation.jpg', cap: 'Descente et remontée avec mouflage', txt: '<p>Deux ancrages (A) et deux freins de charge (FC) : l’un pour la descente du sauveteur, l’autre pour la remontée de la victime, avec poulies (P) de mouflage.</p>', src: 'GTO Sauvetage et mise en sécurité V1.1, p. 80' }] },
    { id: 'appart', t: 'Reconnaissance d’appartement et évolution', ic: 'eye', src: 'Diaporama « Manœuvres LSPCC » ; GTO Sauvetage et mise en sécurité, chap. III § 3.4.4 et 3.4.5',
      html: '<p>Dérivée du sauvetage par l’extérieur (ancrage humain ou point fixe), elle permet de pénétrer dans un appartement autrement que par les communications existantes, depuis l’étage supérieur. Le diaporama SDIS 51 demande de penser à :</p>' +
        '<ul class="check"><li>l’<b>OFD+</b> et la lampe ; le <b>détecteur CO</b> ; l’avis de passage ;</li><li>après ouverture de l’ouvrant, <b>se présenter à voix haute</b> ;</li><li><b>ne jamais se détacher</b> tant que l’appartement n’est pas « sécurisé » (animaux, forcené…) ;</li><li>éviter de rester longtemps seul à l’intérieur ; prévoir un <b>itinéraire de repli</b>.</li></ul>' +
        '<p>Le GTO : le sauveteur peut rester amarré pendant la reconnaissance succincte de la première pièce ; en l’absence de risque, après avoir informé l’équipier qui assure, il se désolidarise, fixe le mousqueton de la corde sur un point d’attache et poursuit.</p>' +
        '<p><b>Évolution au LSPCC</b> : corde la plus tendue possible, assureur attentif (reprendre le mou), jamais de facteur de chute &gt; 1.</p>' },
    { id: 'controle', t: 'Contrôle et entretien', ic: 'check', src: 'GTO Sauvetage et mise en sécurité, chap. I § 3.2',
      html: '<p><b>Avant l’emploi</b> (vérifications quotidiennes ou selon le SIS) — tactiles : corps étrangers, âme de corde écrasée, gaine abrasée ; visuelles : fissures des pièces métalliques, usure ou souillure des textiles et coutures. <b>Après</b> : corde souillée lavée à l’eau douce à <b>30 °C maximum</b>, sans détergent, séchée à plat et à l’ombre ; mêmes vérifications ; retourner la corde en la remettant dans le sac.</p>' +
        '<p><b>Réforme</b> possible après l’amortissement d’une chute (corde, harnais, anneaux), et vigilance en cas d’atmosphère ou de produits corrosifs, brûlure ou fonte, gaine coupée laissant voir l’âme, réduction de diamètre, perte de souplesse ou hernie. En cas de doute, le matériel est <b>mis de côté immédiatement</b> et un compte rendu est fait.</p>' }
  ],
  key: ['LSPCC = alternative quand les moyens plus sûrs sont impossibles ; emploi validé par le COS.', 'Équipier INC : sauvetage par l’extérieur et en excavation.', 'Facteur de chute > 1 interdit, = 1 à éviter.', 'Amarrage mini : 1 connecteur + 1 anneau cousu ; angle ≤ 90°.', 'Mousquetons vissés, effort dans le grand axe ; huit toujours en point fixe.', 'Équipier en point fixe : allongé, jambes à 90° contre le mur ; frein ≥ 20 cm du point d’appui.', 'Excavation : ARI si atmosphère viciée redoutée, détecteur de gaz.'],
  traps: ['Faire travailler un mousqueton en porte-à-faux ou sur une arête : résistance nulle.', 'Utiliser une cordelette pour un amarrage.', 'Se détacher dès l’entrée dans l’appartement, avant de l’avoir sécurisé.', 'Laisser une victime suspendue inerte : syndrome du harnais.'],
  quiz: [
    { q: 'Quels facteurs de chute sont interdits ?', c: ['Supérieurs à 1', 'Inférieurs à 1', 'Égaux à 1', 'Aucun'], e: 'GTO : facteurs > 1 interdits, facteurs 1 à éviter ; on garde les amarrages au-dessus ou au niveau de l’axe de déplacement.', s: 'forces' },
    { q: 'Quelles manœuvres LSPCC sont vues à l’équipier INC ?', c: ['Sauvetage par l’extérieur et sauvetage en excavation', 'Reconnaissance d’appartement et progression sur un toit', 'Uniquement la progression sur un toit', 'Aucune, elles relèvent du SMPM'], e: 'Diaporama « Manœuvres LSPCC 2 » : reconnaissance d’appartement et toit sont vus à l’équipier DIV ; extérieur et excavation à l’équipier INC.', s: 'usages' },
    { q: 'Hauteur minimale entre le frein de charge et le point d’appui sur le vide :', c: ['20 cm', '5 cm', '1 m', '50 cm'], e: 'GTO § 3.4.2 : obligatoirement supérieure ou égale à 20 centimètres.', s: 'exterieur' },
    { q: 'Rôle de la commande lors d’un sauvetage par l’extérieur :', c: ['Écarter la victime de la façade', 'Freiner la descente', 'Amarrer le harnais', 'Remonter le sauveteur'], e: 'La commande, accrochée à l’anneau dorsal et tenue par le binôme 2, écarte la victime de la façade.', s: 'exterieur' },
    { q: 'Un véhicule peut servir d’ancrage si :', c: ['Moteur arrêté clé retirée, vitesse engagée, frein serré, roues calées', 'Il est moteur tournant pour plus de stabilité', 'Le frein de parc est serré, c’est suffisant', 'Il s’agit d’un engin pompe uniquement'], e: 'GTO § 3.2.1 : les quatre conditions sont nécessaires.', s: 'systeme' },
    { q: 'En reconnaissance d’appartement, quand peut-on se détacher ?', c: ['Quand l’appartement est sécurisé et après avoir informé l’assureur', 'Dès que l’on a franchi la fenêtre', 'Jamais, même pour poursuivre la reconnaissance', 'Dès qu’on entend la victime'], e: 'Diaporama : ne jamais se détacher tant que l’appartement n’est pas sécurisé ; GTO : en l’absence de risque, après avoir informé l’équipier qui assure.', s: 'appart' },
    { q: 'Comment laver une corde souillée ?', c: ['Eau douce à 30 °C maximum, sans détergent, séchage à plat à l’ombre', 'Au nettoyeur haute pression', 'En machine à 60 °C avec lessive', 'On ne la lave jamais'], e: 'GTO chap. I § 3.2.2.', s: 'controle' },
    { q: 'Sauvetage en excavation avec atmosphère viciée redoutée :', c: ['ARI obligatoire et contrôle préalable au détecteur de gaz', 'Cagoule d’évacuation pour le sauveteur', 'Masque filtrant P1', 'Aucune protection, la descente est rapide'], e: 'GTO § 3.4.3 : le port de l’ARI est obligatoire ; contrôle préalable au détecteur de gaz.', s: 'excavation' }
  ]
});

/* ===================================================================================== L’essentiel */
VSAV.ess([
  { t: 'Incendie — ARI et engagement en milieu vicié', ic: 'lungs', items: [
    { k: 'Pressions ARICO', v: 'HP <b>200/300 bar</b> → MP <b>6/7 bar</b> → BP <b>≈ 1 bar</b>', go: 'inc-ari-principe/pressions' },
    { k: 'Autonomie 7 l / 300 bar à 100 l/min', v: '<b>≈ 19 min</b> (GTO) – <b>21 min</b> (guide SDIS 51)', go: 'inc-ari-principe/autonomie' },
    { k: 'ARI obligatoire', v: 'air inconnu, toxiques, CO, <b>O₂ &lt; 17 %</b>, milieu évolutif', go: 'inc-ari-contraintes/obligatoire' },
    { k: 'R.A.P.A.C.E', v: 'Robinet, Ajustement, Pression, Armement / Code, Étanchéité', go: 'inc-ari-avant/rapace' },
    { k: 'Pression mini (300 bar)', v: '<b>270 bar</b> (GTO, guide) – <b>280 bar</b> (diaporama)', go: 'inc-ari-avant/conditions' },
    { k: 'Sifflet de fin de charge', v: '<b>≈ 55 bar</b> : retour immédiat', go: 'inc-ari-avant/conditions' },
    { k: 'Contrôleur', v: '1 point de pénétration, <b>10 porteurs</b> max', go: 'inc-ari-engagement/roles' },
    { k: 'Ligne guide / liaison', v: '<b>50-60 m</b> / <b>1,25 m</b> ou <b>6 m</b>', go: 'inc-ari-engagement/lignevie' },
    { k: 'Message de détresse', v: '« URGENT ×3 » + <b>NELAR</b>', go: 'inc-ari-sauvegarde/nelar' },
    { k: 'Compte rendu', v: 'J’ai vu – J’ai fait – Je propose – Je redoute', go: 'inc-ari-apres/cr' }
  ] },
  { t: 'Incendie — Reconnaissances et sauvetages', ic: 'hand', items: [
    { k: 'Marquage POP-16', v: '<b>/</b> en cours, <b>X</b> fait, <b>C</b>n confinés, <b>E</b>n évacués, <b>cercle</b> 2e reco', go: 'inc-reco/marquage' },
    { k: 'Ordre des étages', v: 'feu → au-dessus → dernier → autres', go: 'inc-reco/ou' },
    { k: 'Dégagement d’urgence', v: 'danger réel, immédiat, vital, non contrôlable', go: 'inc-sauvetage/valide' },
    { k: 'Cagoule d’évacuation', v: '<b>2</b> par engin pompe, prise secondaire de l’ARI', go: 'inc-sauvetage/decouverte' },
    { k: 'Facteur de chute', v: '<b>&gt; 1</b> interdit, <b>= 1</b> à éviter', go: 'inc-lspcc/forces' },
    { k: 'Frein / point d’appui', v: '<b>≥ 20 cm</b>', go: 'inc-lspcc/exterieur' }
  ] }
]);
