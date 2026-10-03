/* CHEF D’AGRÈS TOUT ENGIN INCENDIE — fichier 2 : prévention, gaz, hydraulique, stratégie, situations particulières
   Source : livret stagiaire « Chef d’agrès incendie » V2018.2 du SDIS 51 (partie 2 : INC). */
var CATE2 = 'CA INC 2 — Décider face au feu';

VSAV.chap({
  id: 'cate-prevention', part: 'cate', seq: CATE2,
  title: 'Lire le bâtiment : prévention appliquée, ERP, SSI', short: 'Bâtiment et prévention', motif: 'grid',
  sources: [LCA + ', § 2.1.3'],
  summary: 'Ce que la réglementation met à disposition du chef d’agrès : types et catégories d’ERP, entrepôts, voies engins et échelles, baies accessibles, résistance au feu, moyens de secours, désenfumage, SSI et agents SSIAP, et la méthode de raisonnement tactique appliquée au bâtiment.',
  why: '<b>Pourquoi le chef d’agrès doit-il connaître la prévention ?</b> Un bâtiment est « un assemblage de boîtes empilées » : ses recoupements, ses dégagements et ses équipements dictent la stratégie d’attaque. Le plan d’intervention, l’agent SSIAP et le tableau du SSI sont des aides précieuses dès la reconnaissance. Les bases sont dans <a href="#/c/inc-pao">La prévention appliquée à l’opération</a>.',
  sections: [
    { id: 'erp', t: 'ERP : types et catégories', ic: 'grid', src: LCA + ', § 2.1.3 § 1',
      html: '<div class="tw"><table><thead><tr><th>Type</th><th>Exploitation</th></tr></thead><tbody>' +
        '<tr><td>J</td><td>Structures d’accueil pour personnes âgées ou handicapées</td></tr><tr><td>L</td><td>Salles d’audition, de conférence, de spectacle, à usage multiple</td></tr><tr><td>M</td><td>Magasins, centres commerciaux</td></tr><tr><td>N</td><td>Restaurants, débits de boissons</td></tr><tr><td>O</td><td>Hôtels, pensions de famille</td></tr><tr><td>P</td><td>Salles de danse, salles de jeux</td></tr><tr><td>R</td><td>Enseignement, formation, centres de vacances et de loisirs</td></tr><tr><td>S</td><td>Bibliothèques, centres de documentation</td></tr><tr><td>T</td><td>Expositions</td></tr><tr><td>U</td><td>Établissements de soins</td></tr><tr><td>V</td><td>Lieux de culte</td></tr><tr><td>W</td><td>Administrations, banques, bureaux</td></tr><tr><td>X</td><td>Établissements sportifs couverts</td></tr><tr><td>Y</td><td>Musées</td></tr>' +
        '</tbody></table></div>' +
        '<p>Types spéciaux : PA (plein air), CTS (chapiteaux, tentes), SG (structures gonflables), PS (parcs de stationnement couverts), OA (hôtels-restaurants d’altitude), GA (gares), EF (établissements flottants), REF (refuges de montagne).</p>' +
        '<div class="tw"><table><thead><tr><th>Catégorie</th><th>Effectif (public + personnel)</th></tr></thead><tbody><tr><td>1re</td><td>Plus de 1500</td></tr><tr><td>2e</td><td>701 à 1500</td></tr><tr><td>3e</td><td>301 à 700</td></tr><tr><td>4e</td><td>Du seuil d’assujettissement à 300</td></tr><tr><td>5e</td><td>Sous le seuil d’assujettissement</td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Types J, O, U, R</b>Public vulnérable (J, U), de passage (O) ou jeune (R) : <b>transfert horizontal</b> vers une zone isolée par un mur coupe-feu, espaces d’attente sécurisés (EAS), SSI de catégorie A, surveillance permanente pour U et J. Points de vigilance : état réel du transfert horizontal, commandes manuelles du CMSI, stockage de bouteilles d’oxygène (U).</div>' },
    { id: 'construction', t: 'Desserte, façades et résistance au feu', ic: 'road', src: LCA + ', § 2.1.3 § 4 à 10',
      html: '<div class="tw"><table><thead><tr><th>Élément</th><th>Repères</th></tr></thead><tbody>' +
        '<tr><td><b>Voie engins</b></td><td>Largeur 3 ou 6 m, force portante 160 kN, hauteur libre 3,50 m, pente inférieure à 15 %</td></tr>' +
        '<tr><td><b>Voie échelles</b></td><td>Longueur minimale 10 m, pente maximale 10 %, permet de desservir toutes les baies</td></tr>' +
        '<tr><td><b>Baie accessible</b></td><td>1,30 m de haut sur 0,90 m de large au minimum</td></tr>' +
        '<tr><td><b>Résistance au feu</b></td><td>SF (stable au feu) = R ; PF (pare-flamme) = RE ; CF (coupe-feu) = REI</td></tr>' +
        '<tr><td><b>Entrepôts</b></td><td>Structure métallique : stabilité d’environ 15 min en feu généralisé ; cellules de 3000 à 6000 m² ; <b>périmètre de 1,5 fois la hauteur</b> ; prudence pour pénétrer ; repérer le cantonnement pour le désenfumage</td></tr>' +
        '</tbody></table></div>' +
        '<p>Les règles ne s’appliquent pas aux bâtiments construits <b>avant</b> leur entrée en vigueur (principe d’antériorité). Dégagements : normaux, accessoires, de secours ; protégés s’ils sont encloisonnés ou à l’air libre (au moins 50 % de vide sur la paroi). Les circulations figurent en vert sur les plans d’intervention.</p>' },
    { id: 'moyens', t: 'Moyens de secours, désenfumage et SSI', ic: 'bulb', src: LCA + ', § 2.1.3 § 11 à 13',
      steps: [
        'Aller à l’écran de contrôle et de signalisation (ECS) du SSI pour localiser précisément le sinistre.',
        'Contrôler les voyants du CMSI : ils doivent être rouges fixes.',
        'Un voyant qui n’est pas rouge fixe (par exemple rouge clignotant) signale un dispositif actionné de sécurité (DAS) non actionné : l’enclencher manuellement ou envoyer un binôme vérifier.',
        'Signaler toute défaillance du SSI à l’exploitant et au CTA-CODIS ou au service prévention.'
      ], stepsTitle: 'Face au SSI',
      after: '<ul class="check"><li><b>Agents SSIAP</b> : SSIAP 1 (agent), 2 (chef d’équipe), 3 (chef de service). Ce sont les personnes ressources : les garder à proximité pendant la reconnaissance.</li><li><b>Sprinkler</b> : on peut arrêter l’aspersion d’un volume dès que ses propres moyens hydrauliques sont disponibles (commandes dans un local dédié, voir le plan).</li><li><b>Désenfumage</b> : naturel ou mécanique, déclenchement automatique ou manuel ; ne jamais combiner désenfumage et ventilation opérationnelle.</li><li>Moyens facilitant l’action : BI, PI, points d’aspiration, colonnes sèches ou humides, plans, ascenseurs prioritaires, tours d’incendie, trémies d’attaque.</li><li><b>Plan d’intervention</b> : l’exploiter tout au long de l’intervention (point de rassemblement, EAS, organes de coupure).</li></ul>' }
  ],
  key: ['J, U : public vulnérable ; transfert horizontal et EAS.', '1re catégorie : plus de 1500 personnes.', 'SF = R, PF = RE, CF = REI.', 'Entrepôt : périmètre de 1,5 fois la hauteur.', 'SSI : ECS puis voyants CMSI rouges fixes.', 'Agent SSIAP et plan d’intervention : personnes et outils ressources.', 'Jamais désenfumage + ventilation opérationnelle ensemble.'],
  traps: ['Ignorer l’agent SSIAP pendant la reconnaissance.', 'Croire qu’un vieux bâtiment respecte les règles actuelles.', 'Laisser un DAS non actionné sans vérification.', 'Combiner désenfumage du bâtiment et ventilateur.', 'S’engager sans réserve dans un entrepôt métallique en feu généralisé.'],
  quiz: [
    { q: 'Un ERP de type U est :', c: ['Un établissement de soins', 'Un magasin', 'Un hôtel', 'Un musée'], e: 'Livret CA INC § 2.1.3 § 1.', s: 'erp' },
    { q: 'Un ERP de 1re catégorie accueille :', c: ['Plus de 1500 personnes', 'Moins de 300 personnes', '301 à 700 personnes', 'Moins de 50 personnes'], e: 'Livret CA INC § 2.1.3 § 1.', s: 'erp' },
    { q: 'Quel critère européen correspond au « coupe-feu » français ?', c: ['REI', 'R', 'RE', 'EI'], e: 'Livret CA INC § 2.1.3 § 10.', s: 'construction' },
    { q: 'Sur le CMSI, un voyant rouge clignotant signifie :', c: ['Le dispositif de sécurité n’est pas actionné', 'Tout fonctionne', 'Le feu est éteint', 'L’alarme est coupée'], e: 'Livret CA INC § 2.1.3 § 13.', s: 'moyens' },
    { q: 'Périmètre de sécurité autour d’un entrepôt menaçant de s’effondrer :', c: ['1,5 fois sa hauteur', 'La moitié de sa hauteur', '10 m', 'Aucun'], e: 'Livret CA INC § 2.1.3 § 4.', s: 'construction' }
  ]
});

VSAV.chap({
  id: 'cate-gaz', part: 'cate', seq: CATE2,
  title: 'Explosions, explosimétrie et procédures gaz (PGC, PGR)', short: 'Explosions et gaz', motif: 'blast',
  sources: [LCA + ', § 2.1.1, § 2.1.2, § 2.1.4, § 2.3.5 et grille de message gaz'],
  summary: 'Déflagration et détonation, la conduite à tenir face à un risque d’explosion, les limites d’explosivité des gaz courants, les pièges de l’explosimètre, la procédure gaz classique ou renforcée, les zones de 50 et 100 m, les pressions des réseaux et les seuils d’action.',
  why: '<b>Pourquoi ce chapitre ?</b> La procédure gaz renforcée est née des explosions mortelles de 2007. Le chef d’agrès décide du positionnement de l’engin, du périmètre, de l’évacuation ou du confinement à partir de mesures qu’il doit savoir interpréter. Compléments : <a href="#/c/inc-explosimetrie">explosimétrie</a> et <a href="#/c/inc-fuites-gaz">fuites de gaz</a>.',
  sections: [
    { id: 'explosions', t: 'Les explosions', ic: 'blast', src: LCA + ', § 2.1.1 et 2.1.2',
      html: '<div class="tw"><table><thead><tr><th></th><th>Déflagration</th><th>Détonation</th></tr></thead><tbody><tr><td>Vitesse</td><td>Inférieure à celle du son (moins de 340 m/s)</td><td>Supérieure à celle du son</td></tr><tr><td>Surpression</td><td>4 à 10 bars</td><td>20 à 30 bars</td></tr></tbody></table></div>' +
        '<p>Effets : <b>souffle</b>, chaleur, front de flamme, <b>effets missiles</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Gaz</th><th>LIE</th><th>LSE</th></tr></thead><tbody><tr><td>Hydrogène</td><td>4,1 %</td><td>74,5 %</td></tr><tr><td>Monoxyde de carbone</td><td>12,5 %</td><td>74,2 %</td></tr><tr><td>Méthane</td><td>5,3 %</td><td>15,4 %</td></tr><tr><td>Propane</td><td>2,2 %</td><td>9,5 %</td></tr><tr><td>Butane</td><td>1,9 %</td><td>8,4 %</td></tr><tr><td>Acétylène</td><td>1,5 %</td><td>Plus de 80 %</td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Au-dessus de la LSE</b>Un mélange trop riche n’est pas sans risque : en ventilant, il redescend dans le domaine d’explosivité.</div>' },
    { id: 'cat-explosion', t: 'Conduite à tenir et explosimètre', ic: 'list', src: LCA + ', § 2.1.2',
      steps: [
        'Reconnaître, visualiser, analyser.',
        'Stabiliser la situation et revenir dans une zone sûre pour les intervenants et la population.',
        'Stationner l’engin avant ou après les lieux, au vent du sinistre.',
        'N’engager que le personnel strictement nécessaire, sous ARI.',
        'Faire mettre en place un périmètre de sécurité.',
        'Identifier le gaz, puis utiliser l’explosimètre (allumé avant d’arriver ; téléphones et bips laissés dans l’engin).',
        'Ventiler si une atmosphère explosive est détectée.'
      ], stepsTitle: 'Risque d’explosion',
      after: '<ul class="check"><li>L’explosimètre mesure de 0 à 100 % de la <b>LIE</b>, étalonné sur un gaz (souvent le méthane) : pour un autre gaz, le COS convertit avec un abaque. Les techniciens du gaz utilisent un catharomètre (0 à 100 % de gaz).</li><li>Le mélange n’est jamais homogène : on ne peut affirmer être sous la LIE qu’après avoir <b>trouvé et stoppé la fuite</b>, <b>inspecté parties hautes et basses</b> de tous les volumes et <b>identifié le gaz</b>.</li><li>Densité : gaz plus léger que l’air (gaz naturel) en partie haute ; plus lourd (butane, propane) en partie basse.</li></ul>' },
    { id: 'pgr', t: 'PGC, PGR et seuils d’action', ic: 'shield', src: LCA + ', § 2.1.4, § 2.3.5 et grille de message gaz',
      html: '<div class="tw"><table><thead><tr><th>Zone</th><th>Contenu</th></tr></thead><tbody><tr><td><b>Zone d’exclusion</b> (danger)</td><td>Rayon de <b>50 m</b> a priori, évolutif, délimité par les sapeurs-pompiers, tenu par les forces de l’ordre ; évacuation complète (confinement possible sur décision du COS) ; accès réservé aux intervenants strictement nécessaires.</td></tr><tr><td><b>Zone contrôlée et de soutien</b></td><td>Environ <b>100 m</b> autour de la fuite ; on y coordonne l’engagement ; périmètre d’ordre public tenu par les forces de l’ordre.</td></tr></tbody></table></div>' +
        '<div class="tw"><table><thead><tr><th>Mesure (% de la LIE)</th><th>Action</th></tr></thead><tbody><tr><td>Plus de 60 %</td><td>ARI capelé et <b>évacuation totale</b></td></tr><tr><td>Plus de 40 %</td><td>Évacuation totale si possible</td></tr><tr><td>Plus de 20 %</td><td>Confinement et/ou évacuation</td></tr><tr><td>Moins de 20 %</td><td>Confinement</td></tr></tbody></table></div>' +
        '<ul class="check"><li>Engin à 50 m, LDV 500 en protection, mesures du sol jusqu’à l’étage le plus élevé, cartographie (lieu, heure, concentration), matériel antidéflagrant, aucune sonnette ni éclairage si les détecteurs se déclenchent. Monoxyde de carbone : ARI dès les relevés positifs (seuils 10 et 50 ppm).</li><li><b>Fuite enflammée : ne pas l’éteindre</b>, refroidir ce qui est soumis au rayonnement et attendre le gestionnaire.</li><li>Réseaux : basse pression 19 à 50 mbar ; moyenne pression A jusqu’à 400 mbar, B jusqu’à 4 bars, C jusqu’à 25 bars ; haute pression 25 à 80 bars.</li><li>Conversion du propane : volume en m³ = masse en kg ÷ 1,88. Citerne extérieure de propane : appeler l’astreinte indiquée, fermer les vannes de la citerne et de la chaudière.</li></ul>' }
  ],
  key: ['Déflagration < 340 m/s ; détonation > 340 m/s.', 'Méthane 5 à 15 % ; propane 2,2 à 9,5 % ; butane 1,9 à 8,4 %.', 'Explosimètre : % de la LIE, étalonné méthane.', 'Zone d’exclusion 50 m ; zone contrôlée 100 m.', '> 60 % LIE : ARI et évacuation totale ; < 20 % : confinement.', 'Fuite enflammée : ne pas éteindre, refroidir autour.', 'Engin au vent, personnel minimum sous ARI.'],
  traps: ['Croire un mélange au-dessus de la LSE sans danger.', 'Conclure à l’absence de gaz après une seule mesure.', 'Éteindre une fuite de gaz enflammée.', 'Garder son téléphone allumé dans la zone.', 'Mesurer un gaz lourd seulement en partie haute.'],
  quiz: [
    { q: 'Une détonation se propage :', c: ['Plus vite que le son', 'Moins vite que le son', 'À 1 m/s', 'Sans surpression'], e: 'Livret CA INC § 2.1.2.', s: 'explosions' },
    { q: 'Limites d’explosivité du méthane (livret) :', c: ['Environ 5 % à 15 %', '1 % à 2 %', '20 % à 80 %', '50 % à 100 %'], e: 'Livret CA INC § 2.1.1 § 2.', s: 'explosions' },
    { q: 'Rayon a priori de la zone d’exclusion sur une fuite de gaz :', c: ['50 m', '5 m', '500 m', '1 km'], e: 'Livret CA INC § 2.1.4 § 2.', s: 'pgr' },
    { q: 'Relevé à plus de 60 % de la LIE :', c: ['ARI capelé et évacuation totale', 'Confinement simple', 'Aucune mesure', 'Ouvrir les fenêtres et partir'], e: 'Grille de message fuite de gaz.', s: 'pgr' },
    { q: 'Face à une fuite de gaz enflammée :', c: ['On ne l’éteint pas ; on refroidit ce qui est exposé', 'On l’éteint immédiatement à la poudre', 'On l’éteint au jet bâton', 'On coupe la canalisation à la scie'], e: 'Livret CA INC § 2.3.5, PGC/PGR.', s: 'pgr' },
    { q: 'Où positionner l’engin face à un risque d’explosion ?', c: ['Avant ou après les lieux, au vent du sinistre', 'Devant la façade concernée', 'Sous le vent', 'Dans la cour du bâtiment'], e: 'Livret CA INC § 2.1.2.', s: 'cat-explosion' }
  ]
});

VSAV.chap({
  id: 'cate-hydraulique', part: 'cate', seq: CATE2,
  title: 'Hydraulique du chef d’agrès : pertes de charge, débit disponible, alimentation, relais', short: 'Hydraulique du CA', motif: 'drop',
  sources: [LCA + ', § 2.2'],
  summary: 'Les pertes de charge et l’effet du dénivelé, la pression de refoulement, le débit encore disponible sur un poteau, les groupes du SDIS, la mousse, l’aspiration et le principe d’un calcul de relais.',
  why: '<b>Pourquoi le chef d’agrès calcule-t-il ?</b> Il doit assurer une <b>alimentation pérenne</b> de son engin et pallier les lacunes de la défense extérieure contre l’incendie : savoir s’il peut ajouter une lance sur un poteau, ou à quelle distance placer un engin en relais. Les bases sont dans <a href="#/c/inc-besoins-eau">Besoins en eau et hydraulique</a>.',
  sections: [
    { id: 'pertes', t: 'Pertes de charge et refoulement', ic: 'drop', src: LCA + ', § 2.2.1',
      html: '<ul class="check"><li>Les pertes de charge sont <b>proportionnelles à la longueur</b> de l’établissement et à la rugosité des tuyaux, <b>inversement liées au diamètre</b>, et proportionnelles au <b>carré du débit</b> : doubler le débit multiplie les pertes par 4. Elles ne dépendent pas de la pression.</li><li>Formule : J = (Q₁ ÷ Qn)² × Jn, avec Jn la perte de charge de référence du tuyau (par hectomètre).</li><li><b>Dénivelé</b> : 10 m de dénivelé = 1 bar perdu en montée, gagné en descente.</li><li><b>Pression de refoulement</b> = pression à la lance + pertes de charge (J par hectomètre × longueur) + dénivelé.</li><li>Un sapeur-pompier tient environ <b>25 daN</b> de réaction de lance.</li></ul>' },
    { id: 'poteau', t: 'Combien reste-t-il sur le poteau ?', ic: 'target', src: LCA + ', § 2.2.1',
      html: '<p>Q max = Q utilisé × √(P statique ÷ P utilisée), avec P utilisée = P statique – P lue au vacuomètre.</p>' +
        '<div class="callout ok"><b>Exemple du livret</b>Pression statique de 8 bars ; deux LDV 500 établies, soit 1000 L/min ; le vacuomètre indique 5 bars, donc P utilisée = 3 bars. Q max = 1000 × √(8 ÷ 3) ≈ 1,6 × 1000 = <b>1600 L/min</b> : il reste environ 600 L/min. <b>Si le vacuomètre indique 0, ne pas ajouter de lance.</b></div>' +
        '<p>Réseaux : ramifié (pression et débit varient avec la longueur et la demande), maillé, mixte. En cas de carence de pression au poteau : double alimentation en 70.</p>' },
    { id: 'alimentation', t: 'Alimentation, mousse et relais', ic: 'list', src: LCA + ', § 2.2.2 et 2.2.3',
      html: '<div class="tw"><table><thead><tr><th>Moyen</th><th>Repères</th></tr></thead><tbody><tr><td>Aspiration</td><td>Hauteur théorique 10 m, en pratique pas plus de 8 m</td></tr><tr><td>Hydro-éjecteur</td><td>Jusqu’à 25 m, débit maximal d’environ 490 L/min</td></tr><tr><td>Turbopompe</td><td>Jusqu’à 19 m, débit maximal d’environ 1800 L/min</td></tr></tbody></table></div>' +
        '<ul class="check"><li><b>Mousse</b> : eau + émulseur = solution moussante ; solution + air = mousse. Concentration de 1 à 6 % (souvent 3 %). Foisonnement bas, moyen ou haut (inertage). La projection ne doit <b>jamais être interrompue</b> : vérifier avant de commencer que l’eau et l’émulseur suffisent. Appliquer en douceur, par exemple en faisant glisser la mousse sur une paroi.</li><li><b>Groupes du SDIS</b> : groupe incendie (2 FPT, 1 EPA, chef de groupe), groupe alimentation (2 camions-dévidoirs, 1 FPT, 1 motopompe remorquable, chef de groupe), groupe LIF (2 FPT avec lance-canon, 1 camion-dévidoir, 1 camion-citerne, chef de groupe).</li></ul>' +
        '<div class="callout info"><b>Le principe du relais</b>Il faut un relais quand la pression nécessaire dépasse celle d’un seul engin ou la pression de tenue des tuyaux (15 bars). Méthode : calculer le débit et la pression de refoulement nécessaires ; vérifier que la somme des pressions des engins (à régime donné) les dépasse ; en déduire un pourcentage de travail commun ; fixer la pression de chaque engin ; placer le premier engin à la distance où il a « consommé » sa pression (pression ÷ perte de charge moyenne par hectomètre). Les engins les moins maniables et qui aspirent le mieux se placent côté point d’eau.</div>' }
  ],
  key: ['Pertes de charge ∝ longueur et débit² ; × 4 si le débit double.', '10 m de dénivelé = 1 bar.', 'P refoulement = P lance + J × longueur + dénivelé.', 'Q max = Q utilisé × √(P statique ÷ P utilisée).', 'Vacuomètre à 0 : pas de lance supplémentaire.', 'Aspiration ≤ 8 m en pratique.', 'Mousse : jamais d’interruption.'],
  traps: ['Croire que la pression influe sur les pertes de charge.', 'Ajouter une lance alors que le vacuomètre est à 0.', 'Oublier le dénivelé dans la pression de refoulement.', 'Commencer une attaque à la mousse sans réserve suffisante d’émulseur.'],
  quiz: [
    { q: 'Si le débit double, les pertes de charge sont :', c: ['Multipliées par 4', 'Multipliées par 2', 'Inchangées', 'Divisées par 2'], e: 'Livret CA INC § 2.2.1 § 3.', s: 'pertes' },
    { q: 'Un dénivelé positif de 20 m représente une perte d’environ :', c: ['2 bars', '20 bars', '0,2 bar', '10 bars'], e: 'Livret CA INC § 2.2.1 § 3.', s: 'pertes' },
    { q: 'Le vacuomètre indique 0 bar sur le poteau :', c: ['On n’ajoute pas de lance', 'On peut ajouter deux lances', 'Le poteau est fermé', 'C’est normal'], e: 'Livret CA INC § 2.2.1.', s: 'poteau' },
    { q: 'Hauteur d’aspiration utilisable en pratique :', c: ['Pas plus de 8 m', '25 m', '50 m', '1 m'], e: 'Livret CA INC § 2.2.3.', s: 'alimentation' },
    { q: 'Pourquoi vérifier les réserves avant une attaque à la mousse ?', c: ['La projection ne doit jamais être interrompue', 'La mousse se périme', 'Pour le compte rendu', 'Ce n’est pas utile'], e: 'Livret CA INC § 2.3.2 § 2.', s: 'alimentation' }
  ]
});

VSAV.chap({
  id: 'cate-strategie', part: 'cate', seq: CATE2,
  title: 'Stratégie d’extinction : lire le feu, doser l’eau, attaque de transition, ventilation', short: 'Stratégie d’extinction', motif: 'flame',
  sources: [LCA + ', § 2.3.1 à 2.3.4'],
  summary: 'Le système feu et l’équation de Thomas, les indicateurs BFCOE, la puissance liée aux ouvrants, le débit d’eau minimal ajustable, le PROCEDIS des procédés d’extinction, l’attaque de transition et les règles de la ventilation opérationnelle.',
  why: '<b>« Qui maîtrise l’air maîtrise le feu. »</b> Le chef d’agrès choisit où et comment attaquer à partir de la lecture des fumées et des ouvrants. Rien ne sert de mobiliser tous les moyens : il faut être stratège. Lecture du feu côté binôme : <a href="#/c/ce-lecture-feu">FFCOS et lecture des fumées</a>.',
  sections: [
    { id: 'lecture', t: 'Lire le feu', ic: 'eye', src: LCA + ', § 2.3.1',
      html: '<ul class="check"><li><b>Équation de Thomas</b> : air + combustible = fumées (en débit massique). Plus on fait entrer d’air, plus il y a de fumées.</li><li><b>Indicateurs BFCOE</b> : bâtiment, fumées, chaleur, ouvrants, échanges.</li><li>Un feu en volume clos est souvent <b>limité par la ventilation</b> : ouvrir peut provoquer un phénomène thermique (pré-mélange) ; en volume ouvert, le feu atteint sa pleine puissance. 2 m³ de fumées ont le potentiel d’1 m³ de méthane.</li><li><b>Puissance</b> (kW) ≈ 1500 × surface de l’ouvrant × √hauteur de l’ouvrant : une porte de 2 m sur 1 m ≈ 4,2 MW.</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Fumées</th><th>Interprétation</th></tr></thead><tbody><tr><td>Turbulentes</td><td>Forte chaleur : embrasement proche</td></tr><tr><td>Épaisses, foncées, rapides</td><td>Foyer proche, ouvrant probable</td></tr><tr><td>Claires et poussées</td><td>Feu éloigné mais chaud</td></tr><tr><td>Claires</td><td>Pyrolyse</td></tr><tr><td>Foncées (gris, brun)</td><td>Feu sous-ventilé</td></tr></tbody></table></div>' },
    { id: 'eau', t: 'Doser l’eau et choisir le procédé', ic: 'drop', src: LCA + ', § 2.3.1 et 2.3.2',
      html: '<ul class="check"><li>Travailler avec un <b>débit minimal ajustable</b> : trop de vapeur abaisse le plafond de fumées, brûle et aveugle. Si le plafond descend, le seuil utile est dépassé.</li><li>Le <b>test de la cloche</b> renseigne sur la température des fumées (plus elles sont chaudes, plus la « cloche » remonte vite) ; le test du plafond n’en est pas un indicateur.</li><li>Seul le <b>rayonnement</b> met le sapeur-pompier en danger ; il dépend de la distance, de la surface et de la couleur des flammes et de la puissance.</li><li>Garder les <b>ouvrants fermés</b> pendant les reconnaissances pour limiter la puissance et protéger les communs.</li></ul>' +
        '<div class="tw"><table><thead><tr><th>PROCEDIS</th><th>Procédé</th></tr></thead><tbody><tr><td>P</td><td>Part du feu</td></tr><tr><td>R</td><td>Refroidissement</td></tr><tr><td>O</td><td>Obturation</td></tr><tr><td>C</td><td>Coupure</td></tr><tr><td>E</td><td>Étouffement</td></tr><tr><td>D</td><td>Dispersion</td></tr><tr><td>I</td><td>Inhibition</td></tr><tr><td>S</td><td>Soufflage</td></tr></tbody></table></div>' },
    { id: 'transition', t: 'Attaque de transition et stratégie d’attaque', ic: 'target', src: LCA + ', § 2.3.2 § 4 et 2.3.3',
      html: '<p>L’<b>attaque de transition</b> consiste à projeter de l’eau de façon très contrôlée depuis l’extérieur dans le volume en feu pour <b>atténuer</b> le feu, puis à <b>terminer l’extinction en sécurité</b> par l’intérieur. Avec une bonne technique de lance, les essais montrent qu’elle :</p>' +
        '<ul class="check"><li>ne pousse pas les fumées vers les autres pièces ;</li><li>ne déstratifie pas les fumées ;</li><li>n’augmente ni la chaleur ni la vapeur au point de brûler sapeurs-pompiers ou victimes ;</li><li>n’inonde pas le bâtiment.</li></ul>' +
        '<p>Pour choisir le point d’attaque : desserte du bâtiment, plans d’intervention, personnes ressources, distribution intérieure et recoupements (attaquer par zone, secteur ou compartiment), reconnaissance cubique, source-flux-cibles, moyens de secours déjà actionnés.</p>' },
    { id: 'ventilation', t: 'La ventilation opérationnelle', ic: 'wave', src: LCA + ', § 2.3.4',
      html: '<ul class="check"><li><b>Jamais</b> combinée avec le système de désenfumage du bâtiment.</li><li>Pas de fumée à l’arrivée : <b>pas de ventilation opérationnelle</b>.</li><li>Vigilance sur le sens de circulation de l’air, la présence de personnes dans les circulations et la position des ouvrants.</li><li>Ventilateurs électriques, thermiques ou hydrauliques ; distance d’utilisation de 2 à 6 m de l’ouvrant selon le modèle pour un débit maximal.</li></ul>' +
        '<p class="small muted">Techniques de lance et de pénétration du binôme : <a href="#/c/ce-techniques-lance">techniques de lance</a> et <a href="#/c/ce-tootem">TOOTEM</a>.</p>' }
  ],
  key: ['Air + combustible = fumées (Thomas).', 'BFCOE ; regarder les fumées, pas les flammes.', 'Puissance ≈ 1500 × A × √H.', 'Débit minimal ajustable ; test de la cloche.', 'PROCEDIS : part du feu, refroidissement, obturation, coupure, étouffement, dispersion, inhibition, soufflage.', 'Attaque de transition : atténuer, puis finir en sécurité.', 'Pas de VO sans fumée ; jamais VO + désenfumage.'],
  traps: ['Ouvrir un volume clos sous-ventilé sans lance prête.', 'Noyer le volume avec un débit maximal.', 'Se fier au test du plafond pour la température.', 'Mettre un ventilateur alors que le désenfumage fonctionne.', 'Croire que l’attaque depuis l’extérieur brûle forcément les binômes à l’intérieur.'],
  quiz: [
    { q: 'Selon l’équation de Thomas, faire entrer plus d’air :', c: ['Produit plus de fumées', 'Éteint toujours le feu', 'N’a aucun effet', 'Supprime la pyrolyse'], e: 'Livret CA INC § 2.3.1 § 1.', s: 'lecture' },
    { q: 'Des fumées foncées grises ou brunes indiquent :', c: ['Un feu sous-ventilé', 'Une simple pyrolyse', 'Un feu éteint', 'De la vapeur d’eau'], e: 'Livret CA INC § 2.3.1 § 5.', s: 'lecture' },
    { q: 'Quel débit d’eau privilégier en progression ?', c: ['Un débit minimal ajustable', 'Le débit maximal en permanence', 'Aucun débit', 'Un jet bâton continu'], e: 'Livret CA INC § 2.3.1.', s: 'eau' },
    { q: 'Que signifie le « S » de PROCEDIS ?', c: ['Soufflage', 'Sauvetage', 'Surveillance', 'Sprinkler'], e: 'Livret CA INC § 2.3.2.', s: 'eau' },
    { q: 'L’idée maîtresse de l’attaque de transition :', c: ['Atténuer le feu, puis terminer l’extinction en sécurité', 'Inonder le bâtiment', 'Pousser les fumées dehors', 'Attendre que le feu s’éteigne seul'], e: 'Livret CA INC § 2.3.3.', s: 'transition' },
    { q: 'Aucune fumée à l’arrivée des secours :', c: ['Pas de ventilation opérationnelle', 'Ventiler systématiquement', 'Mettre deux ventilateurs', 'Déclencher le désenfumage et ventiler'], e: 'Livret CA INC § 2.3.4.', s: 'ventilation' }
  ]
});

VSAV.chap({
  id: 'cate-situations', part: 'cate', seq: CATE2,
  title: 'Gestion d’une intervention : règles communes et situations particulières', short: 'Situations particulières', motif: 'alert',
  sources: [LCA + ', § 2.3.5 et § 2.4'],
  summary: 'Les règles communes du chef d’agrès, puis les points clés d’un feu d’habitation, d’un feu de véhicule GPL, d’une odeur suspecte, d’une menace d’effondrement, d’un risque radioactif et d’un feu de TMD, et enfin le déblai, la préservation des traces et la surveillance.',
  why: '<b>Des règles simples qui sauvent</b> : « 1 binôme = 1 action », une échelle dès qu’il y a des fumées au-dessus du 2e étage, une vigie pour parler aux victimes aux fenêtres. Le livret les rassemble pour que le chef d’agrès les ait en tête avant même d’arriver.',
  sections: [
    { id: 'communes', t: 'Règles communes', ic: 'list', src: LCA + ', § 2.3.5 § 1',
      html: '<ul class="check"><li><b>Positionner l’engin</b> : au point d’attaque pour le premier FPT ; <b>50 m avant</b> pour une fuite de gaz ou une odeur suspecte ; anticiper la place de l’échelle et des autres engins.</li><li>Garder les <b>ouvrants fermés</b> pendant les reconnaissances.</li><li>Sur accident de la route, les engins lourds (FPT, VSR) servent de tampon et de protection.</li><li><b>1 binôme = 1 action.</b></li><li>Caméra thermique pour rechercher les victimes.</li><li>Colonne sèche : vérifier que les raccords sont obturés avant la mise en eau.</li><li>Le témoin ou le requérant est un interlocuteur privilégié.</li><li>Penser à la défense contre l’incendie et à la <b>coupure des énergies</b> ; anticiper un point de rassemblement des victimes (PRV) si nécessaire.</li></ul>' },
    { id: 'specifiques', t: 'Règles spécifiques', ic: 'flame', src: LCA + ', § 2.3.5 § 2',
      html: '<div class="tw"><table><thead><tr><th>Situation</th><th>Points clés</th></tr></thead><tbody>' +
        '<tr><td><b>Incendie</b></td><td>Demander une <b>échelle</b> dès qu’il y a des fumées au-dessus du 2e étage ; questionner le témoin (configuration, bouteilles de gaz, victimes) ; échelle possible en position de repli pour un binôme ; une <b>vigie</b> parle aux victimes aux ouvrants ; feu en sous-sol : percuter le lanterneau (« skydome »).</td></tr>' +
        '<tr><td><b>Feu de VL GPL</b></td><td>Se renseigner dès le départ sur la carburation ; risques de torchère et d’éclatement du réservoir (BLEVE) avec missiles ; engin <b>en écran à 50 m</b>, si possible dans les trois quarts avant ; périmètre de <b>100 m</b> ; LDV 500 sur 3 tuyaux, binôme de sécurité ; après extinction, lance amarrée à l’arrière pour refroidir.</td></tr>' +
        '<tr><td><b>Odeur suspecte</b></td><td>Explosimètre allumé avant d’arriver, électronique laissée dans l’engin ; détecteurs déclenchés : binôme sous ARI, ni sonnette ni éclairage ; périmètre de 50 m, LDV 500, mesures du sol au dernier étage ; ventiler ; barrer la fuite si possible.</td></tr>' +
        '<tr><td><b>Menace d’effondrement</b></td><td>Engins à une distance <b>au moins égale à la hauteur</b> du bâtiment ; périmètre interdit au public de <b>1,5 fois la hauteur</b>.</td></tr>' +
        '<tr><td><b>Risque radioactif</b></td><td>Phase réflexe : urgence classique traitée avec un effectif minimum en protection maximale, renseignements immédiats sur la source, périmètre de 50 m a priori, impliqués regroupés pour contrôle ; seules les urgences vitales sont prises en charge et transportées ; demande immédiate des moyens spécialisés. Un irradié n’est pas dangereux, un contaminé l’est.</td></tr>' +
        '<tr><td><b>Feu de TMD</b></td><td>Identifier le produit (codes, documents) ; itinéraire <b>dos au vent</b> ; périmètre de 50 m, porté à 100 m ou 500 m en cas de risque d’explosion ; agent extincteur adapté (eau limitée, pas de jet bâton) ; action sur la source ; envisager le « mode RCH ». Code <b>X</b> : ni eau ni mousse.</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">Détails : <a href="#/c/sr-tmd">TMD</a>, <a href="#/c/gn-godr-rad">GODR radiologique</a>, <a href="#/c/inc-feu-vehicule-energie">feux de véhicules à énergies alternatives</a>.</p>' },
    { id: 'deblai', t: 'Déblai, traces et indices, surveillance', ic: 'eye', src: LCA + ', § 2.4',
      html: '<ul class="check"><li><b>Déblai</b> : retirer les matériaux brûlés pour éviter toute reprise ; dégarnir avec soin ; le chef d’agrès reste intransigeant sur la sécurité (ARI, LSPCC). Les produits de combustion sont nombreux et dangereux : envisager une protection respiratoire de type RCH.</li><li><b>Traces et indices</b> : la recherche des causes à des fins judiciaires incombe aux forces de l’ordre ; feu supposé criminel : déblai en concertation avec elles. La RCCI des SDIS sert le retour d’expérience, pas l’enquête.</li><li><b>Surveillance</b> : mise en place par le COS, parfois sur plusieurs jours, à tour de rôle ; moyens hydrauliques et caméra thermique sur place, <b>toujours un moyen radio</b> ; réquisition d’engins de chantier possible par le préfet. Discrétion et honnêteté.</li></ul>' +
        '<p class="small muted">Voir aussi <a href="#/c/inc-deblai">déblai et surveillance</a> et <a href="#/c/inc-rehabilitation">réhabilitation (POP-32)</a>.</p>' }
  ],
  key: ['1 binôme = 1 action.', 'Fumées au-dessus du R+2 : demander une échelle.', 'Gaz et odeur suspecte : engin 50 m avant.', 'GPL : engin en écran à 50 m, périmètre 100 m.', 'Effondrement : engins à la hauteur du bâtiment, périmètre 1,5 × H.', 'RAD : urgence classique en effectif minimum, périmètre 50 m.', 'Traces et indices : déblai avec les forces de l’ordre.'],
  traps: ['Engager deux actions avec un seul binôme.', 'Oublier la vigie face aux victimes aux fenêtres.', 'Se garer face au réservoir d’un véhicule GPL en feu.', 'Mettre en eau une colonne sèche sans vérifier les raccords.', 'Déblayer un feu suspect sans prévenir les forces de l’ordre.'],
  quiz: [
    { q: 'À partir de quand demander une échelle sur un feu d’habitation ?', c: ['Dès qu’il y a des fumées au-dessus du 2e étage', 'Seulement au-delà du 10e étage', 'Jamais pour une habitation', 'Seulement s’il y a des flammes en toiture'], e: 'Livret CA INC § 2.3.5 § 2.', s: 'specifiques' },
    { q: 'Feu de VL GPL : où placer l’engin ?', c: ['En écran à 50 m, si possible dans les trois quarts avant', 'Collé au véhicule', 'Derrière le réservoir', 'À 5 m'], e: 'Livret CA INC § 2.3.5 § 2.', s: 'specifiques' },
    { q: 'Menace d’effondrement : périmètre interdit au public ?', c: ['1,5 fois la hauteur du bâtiment', 'La moitié de la hauteur', '5 m', 'Aucun'], e: 'Livret CA INC § 2.3.5.', s: 'specifiques' },
    { q: 'Qui mène la recherche des causes d’un incendie à des fins judiciaires ?', c: ['Les forces de l’ordre', 'Le chef d’agrès', 'Le maire', 'L’assureur'], e: 'Livret CA INC § 2.4 § 2.', s: 'deblai' },
    { q: 'Que doit-on toujours laisser sur place lors d’une surveillance ?', c: ['Un moyen radio', 'Un ventilateur', 'L’échelle aérienne', 'Rien'], e: 'Livret CA INC § 2.4 § 3.', s: 'deblai' },
    { q: 'Que signifie la règle « 1 binôme = 1 action » ?', c: ['Un binôme ne reçoit qu’une mission à la fois', 'Il faut un binôme par victime', 'Un seul binôme par intervention', 'Le binôme choisit son action'], e: 'Livret CA INC § 2.3.5 § 1.', s: 'communes' }
  ]
});

VSAV.chap({
  id: 'cate-vegetaux', part: 'cate', seq: CATE2,
  title: 'Feux de récoltes et risques agricoles (engrais)', short: 'Récoltes et engrais', motif: 'sun',
  sources: [LCA + ', chapitres 8 et 9'],
  summary: 'Les feux de récolte sur pied, d’andains et de chaumes, les facteurs de propagation, la grille de départ, les EPI, l’attaque par les flancs, la sécurité des engins et le risque des engrais azotés.',
  why: '<b>Un risque très marnais</b> : grandes cultures et engrais sont partout dans le département. Un feu de récolte progresse vite, change de direction avec le vent et menace fermes et villages ; un stock d’ammonitrates chauffé peut dégager des gaz toxiques, voire détoner.',
  sections: [
    { id: 'recoltes', t: 'Feux de récolte', ic: 'sun', src: LCA + ', chapitre 8',
      html: '<ul class="check"><li><b>Récolte sur pied</b> : propagation très rapide, fort rayonnement. <b>Andains</b> de paille : sautes de feu portées par les tourbillons. <b>Chaumes</b> (éteules) : propagation dans toutes les directions selon le vent.</li><li>Facteurs : végétation, <b>vent</b> (apport d’oxygène, flammes rabattues, particules transportées), <b>relief</b> (bien plus rapide en montée).</li><li>Risques : fumées, lignes électriques, gazoducs, éoliennes, routes et voies ferrées, conduite hors chemin, agriculteurs sur place.</li><li>Départ type : une unité feux de végétation (par exemple 2 CCF, un chef de groupe et un VLHR) ; deux unités forment un groupe.</li><li>EPI d’attaque : casque F2 visière baissée et cagoule, veste textile, gants ; sous-vêtements en coton ; veste F1 emportée ; allègement possible au noyage sur ordre du COS.</li></ul>' },
    { id: 'attaque', t: 'Reconnaître, attaquer, se protéger', ic: 'target', src: LCA + ', chapitre 8',
      steps: [
        'Accès : arriver par une rocade ou une pénétrante sous le vent, par la zone déjà brûlée ; respecter la catégorie de son engin.',
        'Reconnaissance : points sensibles menacés (maisons, fermes, bourg), surfaces menacées évaluées avec l’exploitant et transmises au CODIS, force du vent ; la progression vaut environ 3 % de la vitesse du vent.',
        'Attaque par les flancs, jamais par la tête : réduire la tête en attaquant un côté, les renforts sur le flanc opposé ; défendre les points sensibles en faisant la part du feu ; LDV 45 à 250 L/min sur une récolte sur pied.',
        'Solliciter l’agriculteur (déchaumage, part du feu) en lui rappelant les consignes de sécurité.',
        'Alimentation : anticiper ; noria de porteurs d’eau s’il n’y a pas d’hydrant.',
        'Surveillance : noyage soigné contre les reprises, hydratation du personnel.'
      ], stepsTitle: 'Conduite',
      after: '<div class="callout bad"><b>Sécurité</b>Vitres fermées, ventilation coupée, portes de cabine fermées ; personne sur le CCF en mouvement pour manœuvrer une lance ; <b>toujours un itinéraire de repli</b> si le vent tourne. Danger inévitable : jet diffusé de protection à 500 L/min, se réfugier dans le CCF en autoprotection, gagner les zones brûlées ; à pied, fuir vers les flancs.</div>' },
    { id: 'engrais', t: 'Les engrais', ic: 'molecule', src: LCA + ', chapitre 9',
      html: '<ul class="check"><li>Trois éléments fertilisants : azote (N), phosphore (P), potassium (K). Engrais simples ou composés, en sacs, big-bags de 500 à 600 kg ou vrac.</li><li>Tous sont des <b>oxydants</b> qui peuvent intensifier un incendie et se décomposer à la chaleur en émettant des fumées et gaz <b>toxiques</b> (ammoniac, oxydes d’azote : vapeurs rousses).</li><li><b>Engrais azotés simples</b> (nitrate d’ammonium, ammonitrates) : décomposition dès 170 °C, caractère explosif au-delà de 200 à 300 °C ; <b>détonation possible</b> s’ils sont contaminés par des combustibles, confinés ou soumis à une explosion primaire (surpression, effets missiles).</li><li>Très solubles : les eaux d’extinction deviennent un flux de <b>pollution</b>.</li></ul>' }
  ],
  key: ['Attaquer par les flancs, jamais par la tête.', 'Progression ≈ 3 % de la vitesse du vent ; bien plus rapide en montée.', 'Entrer par la zone brûlée, sous le vent ; itinéraire de repli.', 'LDV 45 à 250 L/min sur récolte sur pied.', 'Danger : jet diffusé de protection, CCF en autoprotection.', 'Ammonitrates : oxydants, gaz toxiques, détonation possible.'],
  traps: ['Attaquer la tête d’un feu de récolte poussé par le vent.', 'Laisser les vitres ouvertes ou un équipier sur le CCF en mouvement.', 'S’engager sans itinéraire de repli.', 'Arroser un stock d’engrais sans penser aux eaux polluées et aux gaz toxiques.'],
  quiz: [
    { q: 'Comment attaque-t-on un feu de récolte ?', c: ['Par les flancs', 'Par la tête du feu', 'Par l’arrière uniquement', 'On attend qu’il s’arrête'], e: 'Livret CA INC chapitre 8 § 9.', s: 'attaque' },
    { q: 'Par où accéder à un feu de récolte ?', c: ['Sous le vent, par la zone déjà brûlée', 'Face au front de flammes', 'Par la culture encore intacte', 'Par le milieu du champ'], e: 'Livret CA INC chapitre 8 § 7.', s: 'attaque' },
    { q: 'Vitesse approximative de progression d’un feu de récolte selon le livret ?', c: ['Environ 3 % de la vitesse du vent', 'La vitesse du vent', '50 % de la vitesse du vent', 'Elle ne dépend pas du vent'], e: 'Livret CA INC chapitre 8 § 8.', s: 'attaque' },
    { q: 'Les engrais azotés simples (ammonitrates) chauffés peuvent :', c: ['Dégager des gaz toxiques et détoner', 'Éteindre le feu', 'Être arrosés sans aucun risque', 'Ne présenter aucun danger'], e: 'Livret CA INC chapitre 9.', s: 'engrais' },
    { q: 'En cas de danger inévitable dans un feu de récolte, l’équipage du CCF :', c: ['Se réfugie dans le CCF en autoprotection et gagne les zones brûlées', 'Court vers la tête du feu', 'Ouvre les vitres pour mieux voir', 'Abandonne la lance et s’allonge dans la culture'], e: 'Livret CA INC chapitre 8 § 12.', s: 'attaque' }
  ]
});
