/* ÉQUIPIER PPBE — fichier 2 : PPBE 3 (forcement, tronçonnage, bâchage, échelles à main, LSPCC)
   Sources : dossier Drive « 3 - PPBE - ex DIV » :
   - livret stagiaire Équipier PPBE SDIS 51 (v2017-1 modifié 2022), Parties 6 à 11 (p. 22-43 ; figures p. 28, 30, 31 relues sur le PDF) ;
   - « LSPCC / NDS 390 - Doctrine du Lot de sauvetage et protection contre les chutes - pièce jointe.pdf »
     (doctrine départementale LSPCC, version 1, mai 2022) ;
   - « LSPCC / A2 contrôles et entretien / controle et entretien.ppsx » (diaporama SDIS 51 / équipier DIV / 2014) ;
   - évaluation diagnostique Équipier PPBE (fév. 2022), questions 7 à 12 et 24 à 34. */
var PB3 = 'PPBE 3 — Forcement, tronçonnage, bâchage, échelles, LSPCC';
var PL2 = 'Livret stagiaire Équipier PPBE SDIS 51 (v2017-1, modifié 2022)';
var NDS390 = 'Doctrine départementale LSPCC SDIS 51 (NDS 390, v1 mai 2022)';
var LSPCC_DIA = 'Diaporama « LSPCC : entretien et contrôle » (SDIS 51, équipier DIV, 2014)';

/* ================================================================ 1. Forcement */
VSAV.chap({
  id: 'ppbe-forcement', part: 'ppbe', seq: PB3,
  title: 'Les opérations de forcement', short: 'Forcement', motif: 'hand',
  sources: [PL2 + ', Partie 6 « Le forcement » (p. 22-23)'],
  summary: 'Les outils de forcement des engins, leurs règles de sécurité et les principes du forcement d’un accès.',
  why: '<b>Pourquoi forcer « intelligemment » ?</b> Chaque dégât coûte au sinistré, et un outil mal employé blesse le sapeur-pompier. Le livret insiste sur un réflexe simple : <b>vérifier que c’est bien fermé à clé</b> avant de casser, et passer de préférence par une fenêtre de petite pièce.',
  sections: [
    { id: 'outils', t: 'Les matériels de forcement', ic: 'hand', src: PL2 + ', p. 22',
      html: '<div class="tw"><table><thead><tr><th>Outil</th><th>Usage</th></tr></thead><tbody>' +
        '<tr><td>Grande pince, petite pince</td><td>Outils de base pour forcer portes et fenêtres.</td></tr>' +
        '<tr><td>Hache d’incendie</td><td>Casser un angle de porte ou de fenêtre ; séparer des montants les morceaux de verre restés accrochés.</td></tr>' +
        '<tr><td>Hachette multifonction (outil de forcement et déblai, OFD)</td><td>Hache, marteau, arrache-clou et pince.</td></tr>' +
        '<tr><td>Coupe-boulon (petit et grand modèle)</td><td>Couper chaînes et cadenas.</td></tr>' +
        '<tr><td>Masse</td><td>Casser murs de parpaings, plaques de plâtre, plaques de ciment.</td></tr>' +
        '<tr><td>Écarteur</td><td>Écarter une porte de son huisserie.</td></tr>' +
        '<tr><td>Cisaille</td><td>Couper des éléments d’acier (barreaux).</td></tr>' +
        '<tr><td>Tronçonneuse</td><td>Couper des pièces de menuiserie uniquement.</td></tr>' +
        '<tr><td>Disqueuse</td><td>Créer des ouvertures dans les rideaux métalliques.</td></tr>' +
        '<tr><td>Barre Halligan + hache à tête plate (« la ferraille »)</td><td>Principalement forcer l’ouverture de porte.</td></tr></tbody></table></div>' +
        '<p>Les techniques au Halligan (porte tirante, poussante…) sont détaillées dans <a href="#/c/inc-forcement">Le forcement (incendie)</a>.</p>' },
    { id: 'securite', t: 'Les mesures de sécurité', ic: 'alert', src: PL2 + ', p. 23',
      html: '<div class="tw"><table><thead><tr><th>Domaine</th><th>Règle</th></tr></thead><tbody>' +
        '<tr><td>Généralités</td><td>Ranger les outils dans les coffres prévus ; revêtir les protections (<b>casque, lunettes, gants</b>…) ; rester vigilant (chutes de matériaux, bris de verre).</td></tr>' +
        '<tr><td>Outils de frappe</td><td>Utiliser des outils <b>antidéflagrants</b> là où il y a un risque d’explosion.</td></tr>' +
        '<tr><td>Outils-leviers (pinces…)</td><td><b>Jamais de rallonge</b> (tube d’acier) pour allonger le manche : l’outil peut éclater sous un effort supérieur à celui prévu.</td></tr>' +
        '<tr><td>Cisailles, disqueuses, scies</td><td>EPI adaptés ; attention aux <b>fils électriques cachés et canalisations</b> ; <b>pas de disqueuse ni de machine thermique en atmosphère inflammable ou explosible</b>.</td></tr></tbody></table></div>' },
    { id: 'techniques', t: 'Les principes du forcement', ic: 'target', src: PL2 + ', p. 23',
      html: '<ul class="check"><li>S’assurer que la serrure est <b>effectivement verrouillée</b> : il est inutile d’enfoncer une porte ou une fenêtre déjà ouverte !</li><li>Briser la vitre <b>dans un coin de la partie haute</b> ; si nécessaire, utiliser une <b>échelle à coulisse</b> ou à défaut demander un <b>MEA</b>, et s’assurer au moyen du <b>LSPCC</b>.</li><li>Accès à privilégier : les fenêtres des <b>salles de bain, cuisines et toilettes</b>.</li></ul>' +
        '<p>Pour la pratique du forcement des accès, le livret renvoie aux <b>référents de chaque centre</b>. Le cadre réglementaire (état de nécessité, avis de passage…) est dans <a href="#/c/ppbe-ouverture-porte">L’ouverture de porte</a>.</p>' }
  ],
  key: ['Vérifier que la porte ou la fenêtre est bien verrouillée avant de forcer.', 'Vitre brisée dans un coin de la partie haute ; échelle à coulisse (ou MEA) et LSPCC si besoin.', 'Privilégier les fenêtres de salle de bain, cuisine, toilettes.', 'Jamais de rallonge sur un outil-levier.', 'Outils antidéflagrants en zone explosive ; pas de disqueuse ni de thermique en atmosphère inflammable.', 'Disqueuse = rideaux métalliques ; coupe-boulon = chaînes, cadenas ; écarteur = porte/huisserie.'],
  traps: ['Enfoncer une porte qui n’était pas fermée à clé.', 'Allonger le manche d’une pince avec un tube pour forcer plus fort.', 'Briser la vitre au centre ou en partie basse.', 'Utiliser la disqueuse en présence d’une odeur de gaz.'],
  quiz: [
    { q: 'Avant de forcer une porte, l’équipier vérifie d’abord :', c: ['Que la serrure est effectivement verrouillée', 'Que la masse est disponible', 'Que le propriétaire a signé un devis', 'Que la police est sur place'], e: 'Livret PPBE p. 23 : inutile d’enfoncer une porte déjà ouverte.', s: 'techniques' },
    { q: 'Où brise-t-on la vitre d’une fenêtre à forcer ?', c: ['Dans un coin de la partie haute', 'Au centre', 'En partie basse, près de la poignée', 'N’importe où'], e: 'Livret PPBE p. 23.', s: 'techniques' },
    { q: 'Quelles fenêtres faut-il privilégier pour pénétrer ?', c: ['Salles de bain, cuisines et toilettes', 'Salon et séjour', 'Chambres', 'Baies vitrées'], e: 'Livret PPBE p. 23.', s: 'techniques' },
    { q: 'Pourquoi ne jamais mettre de rallonge sur une pince ?', c: ['L’effort dépasse celui prévu et l’outil peut éclater', 'Cela abîme la porte', 'Cela ralentit le forcement', 'C’est réservé au chef d’agrès'], e: 'Livret PPBE p. 23, outils-leviers.', s: 'securite' },
    { q: 'Quel outil sert à créer des ouvertures dans les rideaux métalliques ?', c: ['La disqueuse', 'L’écarteur', 'La masse', 'Le coupe-boulon'], e: 'Livret PPBE p. 22.', s: 'outils' },
    { q: 'En zone à risque d’explosion, les outils de frappe doivent être :', c: ['Antidéflagrants', 'En acier trempé', 'Électriques', 'Interdits dans tous les cas'], e: 'Livret PPBE p. 23.', s: 'securite' }
  ]
});

/* ================================================================ 2. Tronçonnage */
VSAV.chap({
  id: 'ppbe-tronconnage', part: 'ppbe', seq: PB3,
  title: 'Élagage et tronçonnage (approche théorique)', short: 'Tronçonnage', motif: 'alert',
  sources: [PL2 + ', Partie 7 « Élagage et tronçonnage » (p. 24-26)'],
  summary: 'La tronçonneuse, ses EPI, sa mise en œuvre, la position de travail et la sécurité de l’aire de travail.',
  why: '<b>Pourquoi une approche théorique ?</b> Les VID du SDIS de la Marne <b>ne sont pas équipés de tronçonneuse</b>. Mais après une tempête, les sapeurs-pompiers dégagent la voie publique d’arbres ou de poteaux, ou abattent ceux qui menacent de tomber : il faut connaître les dangers, qui sont graves (section de membre, arbre qui tourne et tombe sur le tronçonneur).',
  sections: [
    { id: 'machine', t: 'La machine et ses dangers', ic: 'alert', src: PL2 + ', p. 24-25',
      html: '<p>Moteur thermique <b>deux temps</b> (mélange à <b>4 %</b>) ; entretien et mise en œuvre selon le constructeur. Elle coupe à <b>plus de 10 000 tours/minute</b>.</p>' +
        '<ul class="check"><li>Danger lié à la machine : coupure par la chaîne (lésions graves, section de membre), brûlure par le pot d’échappement.</li><li>Danger lié au bois : un arbre peut <b>tourner sur lui-même et tomber sur le tronçonneur</b>.</li><li>Danger lié au contexte : <b>fils électriques</b> (tombés à terre ou non).</li></ul>' +
        '<p>Seule l’urgence autorise un travail dans des conditions non idéales (personnel reposé, météo favorable, travail de jour). Si possible, <b>baliser le danger et intervenir plus tard</b> ; sans péril, l’<b>autorité de police</b> fait appel à une entreprise spécialisée.</p>' },
    { id: 'epi', t: 'Les EPI du tronçonnage', ic: 'shield', src: PL2 + ', p. 25',
      html: '<ul class="check"><li>Casque avec <b>protection auditive et oculaire</b> ;</li><li>veste d’intervention ; gants de travail ;</li><li><b>surpantalon avec garniture anti-coupure (norme EN 381)</b> ;</li><li>bottes d’intervention avec ou sans lacets.</li></ul>' },
    { id: 'utilisation', t: 'Vérifier, ravitailler, démarrer', ic: 'list', src: PL2 + ', p. 25-26',
      html: '<p><b>Vérification :</b> frein de chaîne et protège-main avant fonctionnels ; guide-chaîne parfaitement monté ; chaîne correctement tendue ; gâchette d’accélérateur testée.</p>' +
        '<p><b>Ravitaillement :</b> moteur arrêté ; <b>plein d’huile de chaîne (1) avant le plein d’essence (2)</b> ; ni flamme ni cigarette, endroit aéré.</p>',
      steps: ['S’éloigner d’au moins 3 m du lieu du plein (risque d’incendie).', 'Poser la tronçonneuse sur un sol dur et plat, chaîne sans contact.', 'Mettre le frein de chaîne.', 'Engager un pied dans la poignée arrière et plaquer la machine au sol avec la poignée avant.', 'Contact sur marche ou starter selon le climat.', 'Tirer sur la poignée du lanceur.', 'Reprendre la machine fermement à deux mains et libérer le frein de chaîne.'], stepsTitle: 'Le démarrage (une seule personne, personne dans le rayon d’action)',
      after: '<div class="callout warn"><b>À vérifier auprès du formateur</b>Le livret écrit « main droite sur la poignée avant et main gauche sur la poignée arrière » ; la prise habituelle d’une tronçonneuse est l’inverse (main gauche à l’avant, main droite à l’arrière, sur la gâchette). Écart signalé, non tranché ici.</div>' },
    { id: 'position', t: 'La position de travail', ic: 'walk', src: PL2 + ', p. 26',
      html: '<ul class="check"><li>Poignée à pleine main, <b>pouce toujours en dessous</b>.</li><li>Pieds écartés pour la stabilité ; jambes pliées, coudes en appui sur les genoux.</li><li>Travailler <b>près du tronc</b> et <b>faire corps</b> avec la machine ; s’aider de la jambe droite pour la porter ; la machine toujours du côté droit du tronc.</li><li>Toujours couper avec <b>les deux pieds sur un sol ferme</b>.</li></ul>' },
    { id: 'aire', t: 'La sécurité de l’aire de travail', ic: 'target', src: PL2 + ', p. 26',
      html: '<div class="tw"><table><thead><tr><th>Situation</th><th>Distance minimale</th></tr></thead><tbody><tr><td>Abattage d’un arbre</td><td><b>2 fois la hauteur</b> de l’arbre le plus haut de la zone d’abattage</td></tr><tr><td>Tronçonnage</td><td><b>4,50 m</b> entre les intervenants</td></tr></tbody></table></div>' +
        '<ul class="check"><li>Faire <b>couper le courant</b> par le distributeur pour tout travail à proximité des réseaux.</li><li>Interdire la tronçonneuse au personnel <b>non formé</b>.</li><li><b>Ne pas travailler seul</b> ; ni observateurs ni animaux dans l’aire de travail ; personne à proximité au démarrage ou pendant la coupe.</li><li><b>Repérer un chemin de fuite</b> avant de commencer à couper.</li></ul>' }
  ],
  key: ['Les VID du SDIS 51 n’ont pas de tronçonneuse : partie théorique.', 'Moteur 2 temps, mélange 4 % ; plus de 10 000 tr/min.', 'Surpantalon anti-coupure EN 381, casque avec protections auditive et oculaire.', 'Plein d’huile de chaîne avant l’essence, moteur arrêté ; démarrer à 3 m du plein, frein de chaîne mis.', 'Abattage : 2 × la hauteur de l’arbre ; tronçonnage : 4,50 m entre intervenants.', 'Jamais seul ; chemin de fuite repéré avant de couper ; courant coupé près des réseaux.'],
  traps: ['Démarrer la machine sur le lieu du plein.', 'Démarrer frein de chaîne libéré.', 'Couper en équilibre sur un tronc ou une échelle.', 'Laisser des curieux dans la zone de 2 fois la hauteur de l’arbre.'],
  quiz: [
    { q: 'Les VID du SDIS de la Marne sont-ils équipés de tronçonneuse ?', c: ['Non, la partie tronçonnage est théorique', 'Oui, tous', 'Oui, ceux des CSP uniquement', 'Oui, sur demande au CODIS'], e: 'Livret PPBE p. 24.', s: 'machine' },
    { q: 'Quelle distance minimale de sécurité pendant l’abattage d’un arbre ?', c: ['2 fois la hauteur de l’arbre le plus haut de la zone', '4,50 m', '10 m', 'La hauteur de l’arbre'], e: 'Livret PPBE p. 26.', s: 'aire' },
    { q: 'Quelle distance entre intervenants pendant le tronçonnage ?', c: ['4,50 m minimum', '1,50 m', '3 m', '10 m'], e: 'Livret PPBE p. 26.', s: 'aire' },
    { q: 'Dans quel ordre fait-on les pleins ?', c: ['Huile de chaîne, puis essence, moteur arrêté', 'Essence, puis huile, moteur tournant', 'Essence seulement', 'Peu importe'], e: 'Livret PPBE p. 25-26.', s: 'utilisation' },
    { q: 'À quelle distance du lieu du plein démarre-t-on la tronçonneuse ?', c: ['Au moins 3 m', 'Au moins 1 m', 'Au moins 10 m', 'Sur place'], e: 'Livret PPBE p. 26 : risque d’incendie.', s: 'utilisation' },
    { q: 'Quelle pièce d’EPI est propre au tronçonnage ?', c: ['Le surpantalon avec garniture anti-coupure EN 381', 'La combinaison anti-hyménoptères', 'Le harnais du LSPCC', 'Le masque FFP2'], e: 'Livret PPBE p. 25.', s: 'epi' },
    { q: 'Que faire avant de commencer à couper un arbre ?', c: ['Repérer un chemin pour échapper à la chute de l’arbre', 'Retirer son casque pour mieux entendre', 'Libérer le frein de chaîne au sol', 'Faire approcher les témoins'], e: 'Livret PPBE p. 26.', s: 'aire' }
  ]
});

/* ================================================================ 3. Bâchage */
VSAV.chap({
  id: 'ppbe-bachage', part: 'ppbe', seq: PB3,
  title: 'Le bâchage (phénomènes météorologiques)', short: 'Bâchage', motif: 'shield',
  sources: [PL2 + ', Partie 8 « Le bâchage » (p. 27-29)', 'Évaluation diagnostique Équipier PPBE (SDIS 51), questions 7 à 9'],
  summary: 'Types de bâches, situations de bâchage (incendie, intempéries, inondation), vocabulaire de charpente, techniques sur toiture et règles de sécurité.',
  why: '<b>Pourquoi bâcher ?</b> Après un incendie ou une tempête, l’eau de pluie peut détruire ce que le sinistre a épargné. Bâcher, c’est protéger les biens. Mais le risque principal est pour le sapeur-pompier : <b>la chute de hauteur</b> sur une toiture pentue, fragile et souvent humide, aggravée par le vent qui gonfle la bâche.',
  sections: [
    { id: 'baches', t: 'Les différents types de bâches', ic: 'list', src: PL2 + ', p. 27',
      html: '<div class="tw"><table><thead><tr><th>Bâche</th><th>Avantage</th><th>Inconvénient</th></tr></thead><tbody>' +
        '<tr><td><b>Textile</b>, grand modèle <b>6 m × 4 m</b> ou petit modèle <b>3,5 m × 3 m</b> ; œillets pour fixation par clous et ligatures</td><td>Solidité</td><td>Poids au transport</td></tr>' +
        '<tr><td><b>Plastifiée</b> (polyéthylène), type grande surface de bricolage</td><td>Faible poids</td><td>Plus fragile ; le faible poids devient un inconvénient par grand vent</td></tr>' +
        '<tr><td><b>Plastifiée en rouleau, à usage unique</b>, sur laquelle on cloue un contre-lattage</td><td colspan="2">Uniquement pour la protection des toitures et des ouvertures (portes, fenêtres…)</td></tr></tbody></table></div>' +
        '<p><b>Précaution d’emploi :</b> pour ne pas détériorer la bâche, <b>enlever les clous restés en place</b> et <b>éviter les bords</b>.</p>' },
    { id: 'situations', t: 'Les situations de bâchage', ic: 'drop', src: PL2 + ', p. 27 et 29',
      html: '<div class="tw"><table><thead><tr><th>Situation</th><th>Principe</th></tr></thead><tbody>' +
        '<tr><td>Pendant un incendie</td><td>Objets menacés par les fumées et les eaux placés <b>au centre de la pièce</b>, <b>surélevés</b>, recouverts le plus hermétiquement possible.</td></tr>' +
        '<tr><td>Après un incendie</td><td><b>Obturer toutes les ouvertures</b> pour éviter les dommages des intempéries.</td></tr>' +
        '<tr><td>Intempéries</td><td>Surélever les biens (pas de contact avec le sol mouillé), puis les recouvrir.</td></tr>' +
        '<tr><td>Inondation</td><td><b>Surélever au maximum</b> les biens et les <b>envelopper à partir du bas</b>.</td></tr>' +
        '<tr><td>Meubles et objets divers</td><td>Préparer une plateforme de surélévation (parpaings, briques…) au centre de la pièce, y rassembler meubles et objets de valeur, recouvrir d’une bâche adaptée.</td></tr>' +
        '<tr><td>Marchandises</td><td>Mêmes principes ; placer aussi une bâche <b>dessous</b> les marchandises.</td></tr></tbody></table></div>' },
    { id: 'charpente', t: 'Le vocabulaire de la charpente', ic: 'grid', src: PL2 + ', p. 27-28',
      html: '<div class="tw"><table><thead><tr><th>Élément</th><th>Pour le sapeur-pompier</th></tr></thead><tbody><tr><td><b>Panne</b></td><td>Permet de se fixer et de <b>marcher</b> sur la charpente.</td></tr><tr><td><b>Chevron</b></td><td>Permet de se fixer dessus (selon son état).</td></tr><tr><td><b>Liteau</b></td><td>Sert à poser le revêtement (tuiles, ardoises) : <b>ne doit pas être utilisé pour se fixer</b>.</td></tr></tbody></table></div>' },
    { id: 'toiture', t: 'Bâcher une toiture', ic: 'shield', src: PL2 + ', p. 28',
      steps: ['Replier la bâche en accordéon pour faciliter le travail.', 'Monter la bâche pliée au faîtage.', 'La fixer au faîtage, puis la déplier.', 'Faire chevaucher les bâches d’environ 80 cm, celle du haut recouvrant celle du bas, pour éviter l’infiltration de l’eau de pluie.', 'Maintenir le bas de la bâche par des cordes ou des poids.'], stepsTitle: 'Technique de bâchage sur toiture',
      figs: [{ img: 'img/ppbe/bachage-toiture.jpg', cap: 'Ferme traditionnelle et technique de bâchage', txt: '<p>En haut : panne faîtière, panne intermédiaire, panne sablière, chevrons, liteaux. En bas : bâche repliée en accordéon, montée au faîtage puis dépliée ; chevauchement d’environ 80 cm ; maintien par cordes ou poids.</p>', src: PL2 + ', p. 28' }] },
    { id: 'securite', t: 'Les règles de sécurité', ic: 'alert', src: PL2 + ', p. 29',
      html: '<div class="callout bad"><b>Le risque : la chute de hauteur</b>Toitures pentues, fragiles, souvent humides, et déploiement de bâches par grand vent qui déséquilibre le sapeur-pompier.</div>' +
        '<ul class="check"><li>Le <b>lot de sauvetage et de protection contre les chutes (LSPCC) est obligatoire</b> (voir <a href="#/c/ppbe-lspcc/evolution">l’évolution au LSPCC</a>).</li><li>La manutention justifie le <b>port complet des EPI</b> pendant toute l’opération (gants notamment).</li></ul>' }
  ],
  key: ['Bâches textiles : 6 × 4 m et 3,5 × 3 m ; solides mais lourdes.', 'Avant de poser : enlever les clous restés, éviter les bords.', 'Incendie : objets au centre de la pièce, surélevés, recouverts hermétiquement.', 'Inondation : surélever et envelopper à partir du bas.', 'Panne et chevron : on s’y fixe ; liteau : jamais.', 'Toiture : accordéon → faîtage → fixer → déplier ; chevauchement ≈ 80 cm ; bas tenu par cordes ou poids.', 'LSPCC obligatoire sur une toiture.'],
  traps: ['S’amarrer sur un liteau.', 'Déplier la bâche avant de l’avoir fixée au faîtage par grand vent.', 'Monter sur le toit sans LSPCC « pour aller vite ».', 'Faire chevaucher les bâches dans le mauvais sens (eau qui s’infiltre).'],
  quiz: [
    { q: 'De combien les bâches doivent-elles se chevaucher sur une toiture ?', c: ['Environ 80 cm', 'Environ 10 cm', 'Environ 2 m', 'Elles ne doivent pas se chevaucher'], e: 'Schéma du livret p. 28 (question 8 de l’évaluation).', s: 'toiture' },
    { q: 'Quelle est la règle de sécurité systématique lors d’un bâchage sur toiture ?', c: ['L’emploi du LSPCC, obligatoire', 'Le port de cuissardes', 'Travailler seul pour limiter la charge', 'Retirer ses gants pour mieux tenir la bâche'], e: 'Livret p. 29 (question 9 de l’évaluation).', s: 'securite' },
    { q: 'Sur quel élément de charpente ne doit-on jamais se fixer ?', c: ['Le liteau', 'La panne', 'Le chevron en bon état', 'La panne faîtière'], e: 'Livret p. 27-28.', s: 'charpente' },
    { q: 'Quelles précautions avant la pose d’une bâche ?', c: ['Enlever les clous restés et éviter les bords', 'Mouiller la bâche', 'La découper aux dimensions exactes', 'La plier en quatre'], e: 'Livret p. 27 (question 7 de l’évaluation).', s: 'baches' },
    { q: 'Pendant un incendie, comment protège-t-on les objets menacés par les eaux ?', c: ['Au centre de la pièce, surélevés, recouverts hermétiquement', 'Contre les murs, au sol', 'Dehors, sous la pluie', 'Dans l’engin'], e: 'Livret p. 27.', s: 'situations' },
    { q: 'Dans quel ordre bâche-t-on une toiture ?', c: ['Plier en accordéon, monter au faîtage, fixer, déplier', 'Déplier au sol, hisser, fixer', 'Fixer en bas, puis remonter vers le faîtage', 'Clouer au centre puis tendre'], e: 'Schéma du livret p. 28.', s: 'toiture' },
    { q: 'Quelles sont les dimensions du grand modèle de bâche textile ?', c: ['6 m × 4 m', '3,5 m × 3 m', '10 m × 8 m', '4 m × 2 m'], e: 'Livret p. 27.', s: 'baches' }
  ]
});

/* ================================================================ 4. Échelles à main */
VSAV.chap({
  id: 'ppbe-echelles', part: 'ppbe', seq: PB3,
  title: 'Les échelles à main', short: 'Échelles à main', motif: 'strap',
  sources: [PL2 + ', Partie 9 « Les échelles » (p. 30-31)', 'Évaluation diagnostique Équipier PPBE (SDIS 51), questions 10 à 12'],
  summary: 'Caractéristiques des échelles, composition de l’échelle à coulisse, pied d’échelle et règles de sécurité.',
  why: '<b>Pourquoi tant de soin pour poser une échelle ?</b> Une échelle trop droite bascule en arrière, une échelle trop inclinée glisse ou casse. La règle du <b>tiers</b> et ses moyens de vérification (pas par étage, coude, bras tendus) garantissent la stabilité.',
  sections: [
    { id: 'types', t: 'Les échelles à main', ic: 'list', src: PL2 + ', p. 30',
      html: '<p>Le but d’une échelle est le <b>sauvetage et la mise en protection des personnes</b> lors des incendies, mais elle sert dans de multiples missions.</p>' +
        '<div class="tw"><table><thead><tr><th>Échelle</th><th>Reployée</th><th>Déployée</th><th>Poids</th><th>Manœuvre</th><th>Utilisation</th></tr></thead><tbody>' +
        '<tr><td>À crochets</td><td>–</td><td>4,25 m</td><td>8 kg</td><td rowspan="3">Individuelle</td><td rowspan="2">Reconnaissances, sauvetages</td></tr>' +
        '<tr><td>À crochets pliable</td><td>2,40 m</td><td>4,25 m</td><td>9 kg</td></tr>' +
        '<tr><td>À coulisse petit modèle</td><td>3,60 m</td><td>5,60 m</td><td>20 kg</td><td rowspan="3">Reconnaissances, sauvetages, établissements</td></tr>' +
        '<tr><td>À coulisse grand modèle</td><td>5 m</td><td>9 m</td><td>33 kg</td><td>Une équipe</td></tr>' +
        '<tr><td>À coulisse 3 plans</td><td>5,60 m</td><td>14,30 m</td><td>75 kg</td><td>Deux équipes</td></tr></tbody></table></div>' },
    { id: 'coulisse', t: 'L’échelle à coulisse', ic: 'strap', src: PL2 + ', p. 30',
      html: '<p>Deux ou trois plans ; elle sert à accéder aux étages par l’extérieur, à établir des lances, aux sauvetages et mises en sécurité. Matériel d’urgence, mis en œuvre par une équipe (exceptionnellement un homme seul) ; l’aluminium remplace peu à peu le bois.</p>' +
        '<ul class="check"><li><b>2 plans : R+1 et R+2</b> ; <b>3 plans : R+3</b> (et toitures de faible hauteur).</li><li><b>Résistance horizontale déployée nulle</b> ; reployée, elle supporte deux hommes ; dressée, elle supporte <b>deux hommes sur le deuxième plan</b>.</li><li>Composition : <b>1<sup>er</sup> plan</b> (grand plan), <b>2<sup>e</sup> plan</b> (petit plan), <b>poulie</b>, <b>parachutes</b>, <b>trait</b> (cordelette).</li></ul>',
      figs: [{ img: 'img/ppbe/echelle-coulisse.jpg', cap: 'Les échelles à main et le détail de l’échelle à coulisse', txt: '<p>Le trait fait monter le 2<sup>e</sup> plan par la poulie ; les parachutes le verrouillent sur les échelons du 1<sup>er</sup> plan.</p>', src: PL2 + ', p. 30' }] },
    { id: 'pied', t: 'Le pied d’échelle', ic: 'target', src: PL2 + ', p. 31',
      html: '<p>Pour être stable, l’échelle ne doit être <b>ni trop développée, ni trop inclinée</b> : le pied est éloigné du mur d’environ <b>1/3 de la longueur développée</b>.</p>' +
        '<div class="callout ok"><b>Exemple</b>Échelle développée à 6 m : pied à environ 6 ÷ 3 = <b>2 m</b> du mur.</div>' +
        '<p>Pour vérifier le pied d’échelle : <b>un pas par étage</b>, le <b>test du coude</b>, ou la technique des <b>bras tendus</b> (le manipulateur, pieds contre les sabots, tend les bras à l’horizontale et pose ses mains à hauteur d’épaule sur les montants).</p>' +
        '<div class="callout bad"><b>Règle de sécurité sur l’échelle</b>Les <b>deux pieds ne doivent jamais être sur le même échelon</b> : le risque de déséquilibre est important.</div>',
      figs: [{ img: 'img/ppbe/pied-echelle.jpg', cap: 'Échelle trop développée, échelle trop inclinée, test du coude', txt: '<p>À gauche, l’échelle trop droite bascule ; au centre, l’échelle trop inclinée glisse ; à droite, le triangle du test du coude.</p>', src: PL2 + ', p. 31' }] }
  ],
  key: ['Coulisse 2 plans : R+1 et R+2 ; 3 plans : R+3.', 'Coulisse : 1er plan, 2e plan, poulie, parachutes, trait.', 'Résistance horizontale déployée nulle ; deux hommes sur le 2e plan.', 'Pied d’échelle ≈ 1/3 de la longueur développée.', 'Vérifier : un pas par étage, test du coude, bras tendus.', 'Jamais les deux pieds sur le même échelon.', 'Coulisse grand modèle : 5 m → 9 m, 33 kg, une équipe.'],
  traps: ['Poser l’échelle presque verticale « pour gagner en hauteur ».', 'Utiliser l’échelle déployée comme passerelle horizontale.', 'Monter à deux sur le premier plan.', 'Poser les deux pieds sur le même échelon pour travailler.'],
  quiz: [
    { q: 'À quelle distance du mur place-t-on le pied d’une échelle ?', c: ['Environ 1/3 de la longueur développée', 'Environ 1/2 de la longueur', '1 m quelle que soit la longueur', 'Environ 1/5 de la longueur'], e: 'Livret PPBE p. 31.', s: 'pied' },
    { q: 'Quelle règle de sécurité une fois positionné sur l’échelle à coulisse ?', c: ['Ne jamais avoir les deux pieds sur le même échelon', 'Toujours avoir les deux pieds sur le même échelon', 'Lâcher les mains pour travailler', 'Se tenir dos à l’échelle'], e: 'Livret p. 31 (question 11 de l’évaluation).', s: 'pied' },
    { q: 'L’échelle à coulisse deux plans permet d’atteindre :', c: ['R+1 et R+2', 'R+3', 'R+4', 'Uniquement le rez-de-chaussée'], e: 'Livret p. 30.', s: 'coulisse' },
    { q: 'Quelle est la résistance horizontale d’une échelle à coulisse déployée ?', c: ['Nulle', 'Deux hommes', 'Un homme', '150 kg'], e: 'Livret p. 30.', s: 'coulisse' },
    { q: 'Quels éléments composent l’échelle à coulisse ?', c: ['1er plan, 2e plan, poulie, parachutes, trait', 'Crochets, pointes, sabots', 'Plateau, tourelle, berce', 'Flèche, panier, vérins'], e: 'Schéma du livret p. 30 (question 10 de l’évaluation).', s: 'coulisse' },
    { q: 'Quel moyen permet de vérifier le pied d’échelle ?', c: ['Le test du coude', 'Le test de la commande', 'Le pas de course', 'Le niveau à bulle'], e: 'Avec un pas par étage et la technique des bras tendus (livret p. 31).', s: 'pied' },
    { q: 'Combien pèse l’échelle à coulisse grand modèle ?', c: ['33 kg', '20 kg', '75 kg', '9 kg'], e: 'Tableau du livret p. 30 : 5 m reployée, 9 m déployée, une équipe.', s: 'types' }
  ]
});

/* ================================================================ 5. LSPCC */
VSAV.chap({
  id: 'ppbe-lspcc', part: 'ppbe', seq: PB3,
  title: 'Le LSPCC en PPBE : composition, contrôle et emploi', short: 'LSPCC en PPBE', motif: 'rope',
  sources: [PL2 + ', Partie 11 « Le LSPCC » (p. 40-43)', NDS390, LSPCC_DIA, 'Évaluation diagnostique Équipier PPBE (SDIS 51), questions 24 à 34'],
  summary: 'Composition des lots engin et échelle, règles d’emploi des agrès, contrôle et réforme, notions de risque, reconnaissance d’appartement et protection contre les chutes.',
  why: '<b>Pourquoi le LSPCC en PPBE ?</b> Reconnaître un appartement par l’étage supérieur, bâcher une toiture, détruire un nid en hauteur : autant de situations de chute possible. Le lot est composé d’<b>EPI de catégorie III</b> (risque de lésions irréversibles ou mortelles) : il ne tolère ni approximation ni matériel douteux.',
  sections: [
    { id: 'usages', t: 'Les manœuvres en PPBE et les limites', ic: 'list', src: PL2 + ', p. 40 ; ' + NDS390 + ', p. 4 et 10',
      html: '<p>En PPBE, le LSPCC sert à deux manœuvres : la <b>reconnaissance d’appartement</b> et la <b>protection contre les chutes</b> (progression sur toiture). Les autres techniques sont vues au stage équipier incendie : voir <a href="#/c/inc-lspcc">Les sauvetages au moyen du LSPCC</a>.</p>' +
        '<p>Le LSPCC est une <b>alternative</b> quand des moyens plus sûrs (communications existantes, échelles aériennes ou à main) sont impossibles et/ou qu’une action immédiate s’impose. <b>Le COS valide son emploi</b> ou fait appel à l’équipe secours en milieux périlleux. Limites : matériel insuffisant ou situation relevant d’une équipe spécialisée ; état de la victime nécessitant une prise en charge spécifique.</p>' },
    { id: 'compo', t: 'La composition des lots', ic: 'clip', src: NDS390 + ', p. 5-8 ; ' + PL2 + ', p. 40-42',
      html: '<div class="tw"><table><thead><tr><th>Agrès</th><th>Lot « engin »</th><th>Lot « échelle »</th></tr></thead><tbody>' +
        '<tr><td>Sac de transport</td><td>Jaune citron</td><td>Bleu</td></tr>' +
        '<tr><td>Corde semi-statique (gaine + âme, Ø 12 à 13 mm, nœud de huit double à chaque extrémité)</td><td><b>30 m</b></td><td><b>60 m</b></td></tr>' +
        '<tr><td>Anneaux de sangle cousus bleus de <b>80 cm</b></td><td>3</td><td>6</td></tr>' +
        '<tr><td>Anneaux de sangle cousus rouges de <b>150 cm</b></td><td>3</td><td>3</td></tr>' +
        '<tr><td>Mousquetons à vis + mousqueton à fermeture automatique</td><td><b>6 + 1</b></td><td><b>9 + 1</b></td></tr>' +
        '<tr><td>Harnais</td><td>1</td><td>2</td></tr>' +
        '<tr><td>Triangle d’évacuation à bretelles</td><td>1</td><td>En option (recommandé)</td></tr>' +
        '<tr><td colspan="3">Plus : <b>frein de charge</b> (anciennement « 8 descendeur »), <b>poulie</b> (deux au SDIS 51), et en option <b>cordelettes</b> (50-60 cm, deux au SDIS 51), <b>protection de corde</b>, <b>commande</b> (30 m, Ø 7 mm, un mousqueton à chaque extrémité).</td></tr></tbody></table></div>' +
        '<p class="small muted">La doctrine annonce, dans le courant de 2023, un 2<sup>e</sup> mousqueton à fermeture automatique par lot (fermeture du harnais et du triangle) ; en attendant, le 1<sup>er</sup> est <b>obligatoirement sur le harnais</b>.</p>' },
    { id: 'regles', t: 'Les règles d’emploi des agrès', ic: 'alert', src: NDS390 + ', p. 5-8 et 14-17',
      html: '<div class="tw"><table><thead><tr><th>Agrès</th><th>À respecter</th></tr></thead><tbody>' +
        '<tr><td>Corde</td><td>Vigilance sur les frottements, surtout sur le <b>brin dormant</b> (arêtes vives, béton aggloméré) ; <b>protection de corde systématique</b> ; conditionnement soigné pour un bon déroulement.</td></tr>' +
        '<tr><td>Anneaux cousus</td><td>Pour les amarrages. <b>Interdit</b> d’amarrer du matériel avec (sauf protections de corde) ; pas de manœuvre de force ; ne jamais travailler sur la couture ; <b>pas de nœud pour les raccourcir</b> ; angle entre deux anneaux <b>jamais &gt; 90°</b>. Traction d’un personnel au sol avec le LSPCC <b>proscrite</b>.</td></tr>' +
        '<tr><td>Mousquetons</td><td>Effort <b>uniquement dans le grand axe</b> ; virole vissée et verrouillée à la main, sans forcer, « sens de vissage » vers le bas ; jamais en appui sur un angle (résistance nulle) ; un mousqueton pour relier deux anneaux cousus.</td></tr>' +
        '<tr><td>Harnais et triangle</td><td>Fermeture par le <b>connecteur automatique</b> ; anneau dorsal et attaches sternales sont des points d’amarrage ; attaches du triangle symétriques. En urgence absolue (incendie…), le triangle peut équiper une victime inconsciente.</td></tr>' +
        '<tr><td>Frein de charge</td><td>Toujours sur un amarrage (en fixe) ; tester par une traction sur le brin libre ; à la mise au vide, sécurisé par une <b>clé d’arrêt réalisée, vérifiée et testée</b> ou en tenant fermement le brin libre.</td></tr>' +
        '<tr><td>Cordelettes</td><td>Poignées par nœud autobloquant (<b>3 tours minimum</b>, brins parallèles) ; jamais pour un amarrage.</td></tr>' +
        '<tr><td>Protection de corde</td><td>Un morceau de tuyau de 110 souple peut servir ; la corde touche la <b>face toilée</b> (la paroi lisse chauffe et fond).</td></tr></tbody></table></div>' },
    { id: 'notions', t: 'Notions de risques et de forces', ic: 'target', src: NDS390 + ', p. 10-11',
      html: '<div class="tw"><table><thead><tr><th>Notion</th><th>À retenir</th></tr></thead><tbody>' +
        '<tr><td><b>Facteur de chute</b> (fc = hauteur de chute ÷ longueur de corde qui amortit)</td><td><b>fc &gt; 1 interdit ; fc = 1 à éviter.</b></td></tr>' +
        '<tr><td><b>Effet pendulaire</b></td><td>Décalé par rapport au dernier amarrage, on chute en pendule : vitesse proche de la chute libre, percussion, corde qui frotte et peut rompre.</td></tr>' +
        '<tr><td><b>Tirant d’air</b></td><td>Hauteur libre sous le sauveteur. La corde disponible jusqu’au dernier amarrage doit être inférieure à cette hauteur + l’élasticité (<b>1,5 m</b> lot classique, <b>2,5 m</b> lot échelle). Ex. : 2 m libres → moins de 3,5 m de corde.</td></tr>' +
        '<tr><td><b>Syndrome du harnais</b></td><td>Suspension inerte et prolongée : perte de connaissance et défaillance multiviscérale, pronostic vital engagé à très court terme. En exercice, privilégier un mannequin.</td></tr>' +
        '<tr><td><b>Frottements</b></td><td>Les frottements « corde sur corde » sont proscrits.</td></tr></tbody></table></div>' +
        '<p><b>Ancrage</b> fiable (taper, chercher à bouger) : naturel, structurel (poutre, IPN, poteau, engin), artificiel. Un véhicule est fiable <b>moteur arrêté, clés retirées, vitesse engagée, frein de parc serré</b>. Échelle bloquée en travers d’une porte autorisée <b>reployée</b>, anneaux sur les deux montants ; <b>MEA interdit</b> comme ancrage. Toute confection de nœud réduit la résistance de la corde.</p>' },
    { id: 'appart', t: 'La reconnaissance d’appartement', ic: 'eye', src: NDS390 + ', p. 23 ; ' + PL2 + ', p. 40',
      html: '<p>Pour une personne ne répondant pas aux appels ou une ouverture de porte avec victime, le LSPCC permet à un sauveteur d’<b>accéder à un étage depuis un étage supérieur</b>. Technique identique au sauvetage par l’extérieur.</p>' +
        '<ul class="check"><li>Prévoir des <b>moyens radio</b>.</li><li>Arrivé, en l’absence de risque et <b>après avoir informé l’équipier chargé de l’assurance</b>, le sauveteur se désolidarise du système, fixe le mousqueton de la corde sur un point d’attache et poursuit sa reconnaissance.</li><li>Si l’urgence empêche un amarrage, <b>l’équipier peut servir d’ancrage</b> (point fixe) : allongé, harnais avec frein de charge, jambes à 90° contre le mur, il contrôle la descente ; <b>au moins 20 cm</b> entre le frein de charge et le point d’appui sur le passage dans le vide.</li></ul>' },
    { id: 'evolution', t: 'L’évolution avec risque de chute (progression sur toiture)', ic: 'mountain', src: NDS390 + ', p. 24',
      steps: ['Équipier : réalise l’amarrage principal sur un ancrage solide (ex. : poutre métallique).', 'Équipier : assure le chef en étant vigilant à sa progression.', 'Chef d’équipe : se munit d’anneaux cousus et de connecteurs, progresse et réalise son premier amarrage intermédiaire.', 'Chef d’équipe : réalise des amarrages intermédiaires tout au long de sa progression.'], stepsTitle: 'Exemple de progression (doctrine LSPCC)',
      after: '<ul class="check"><li>La corde reste <b>la plus tendue possible</b>.</li><li>L’assureur reste attentif et à l’écoute pour donner ou reprendre du mou.</li><li>Le sauveteur ne doit <b>jamais se retrouver au-dessus d’un facteur de chute 1</b> : amarrages toujours au-dessus de l’axe de déplacement ou au même niveau.</li><li><b>Interdit de démonter des amarrages posés</b> ; en cas de manque, prendre le matériel d’un autre lot ou faire appel au GRIMP.</li></ul>' },
    { id: 'controle', t: 'Contrôle, entretien et réforme', ic: 'check', src: NDS390 + ', p. 9 ; ' + LSPCC_DIA,
      html: '<p><b>Avant emploi</b> (vérifications quotidiennes, ou fréquence fixée par le SIS si lots scellés) :</p>' +
        '<div class="tw"><table><thead><tr><th>Tactiles</th><th>Visuelles</th></tr></thead><tbody><tr><td>Corps étrangers dans les agrès textiles ; écrasement de l’âme ; abrasion ou usure de la gaine.</td><td>Fissures ou cassures des pièces métalliques ; usure ou souillure des agrès textiles et de leurs coutures.</td></tr></tbody></table></div>' +
        '<p><b>Après emploi :</b> corde souillée lavée à l’<b>eau douce à 30 °C maximum, sans détergent</b>, séchée <b>à plat et à l’ombre</b> ; mêmes vérifications ; <b>retourner la corde</b> en la remettant dans le sac. Pièces métalliques nettoyées et contrôlées.</p>' +
        '<div class="callout bad"><b>Causes de réforme immédiate</b>La <b>chute d’une personne</b> (amortie par la corde, le harnais ou les anneaux) ; l’exposition en <b>atmosphère corrosive</b> ; la souillure par <b>produits corrosifs</b> ; une partie <b>brûlée ou fondue</b> ; une <b>gaine coupée ou usée</b> laissant voir l’âme ; une <b>réduction de diamètre</b>, une perte de souplesse localisée ou une hernie de l’âme.</div>' +
        '<p>Au moindre doute, le matériel est <b>mis de côté immédiatement</b> et un compte rendu est adressé au référent. Le diaporama de 2014 précise : durée de vie maximale de la corde <b>7 ans</b>, année de mise en service repérée par une <b>couleur</b> ; entretien par le responsable des lots du centre (avec si besoin une équipe spécialisée comme le GRIMP) ; contrôle par un responsable avant remise en service.</p>' }
  ],
  key: ['En PPBE : reconnaissance d’appartement et protection contre les chutes.', 'Lot engin : corde 30 m, 3 + 3 anneaux, 6 mousquetons à vis + 1 automatique, 1 harnais, 1 triangle.', 'Lot échelle : corde 60 m, 6 + 3 anneaux, 9 + 1 mousquetons, 2 harnais.', 'Anneaux bleus 80 cm, rouges 150 cm ; angle ≤ 90° ; jamais sur la couture ni noués.', 'Mousqueton : effort dans le grand axe, vissé vers le bas.', 'fc > 1 interdit ; fc = 1 à éviter ; tirant d’air + 1,5 m (lot classique).', 'Véhicule ancrage : moteur arrêté, clés retirées, vitesse engagée, frein serré ; MEA interdit.', 'Réforme immédiate : chute d’une personne, corrosif, brûlure/fonte, âme visible, hernie.', 'Corde : eau douce 30 °C maxi sans détergent, séchage à plat à l’ombre.'],
  traps: ['Remplacer le mousqueton automatique du harnais par un mousqueton à vis.', 'Faire un nœud dans un anneau cousu pour le raccourcir.', 'Démonter un amarrage intermédiaire pendant la progression.', 'Laver la corde avec un détergent ou la sécher au soleil.', 'Remettre en service une corde qui a amorti une chute « parce qu’elle a l’air intacte ».', 'Utiliser le LSPCC pour tracter du matériel ou un personnel au sol.'],
  quiz: [
    { q: 'Quelle est la longueur de la corde du LSPCC « classique » (lot engin) ?', c: ['30 m', '60 m', '20 m', '50 m'], e: 'Doctrine LSPCC p. 5 ; 60 m pour le lot échelle (question 26 de l’évaluation).', s: 'compo' },
    { q: 'Combien de mousquetons à vis contient le lot engin ?', c: ['6, plus 1 mousqueton à fermeture automatique', '9, plus 1 automatique', '3 seulement', '12'], e: 'Doctrine LSPCC p. 6 (question 29 de l’évaluation) ; ils assurent la liaison entre les matériels.', s: 'compo' },
    { q: 'Combien d’anneaux cousus dans le lot engin ?', c: ['3 bleus de 80 cm et 3 rouges de 150 cm', '6 bleus et 3 rouges', '2 bleus et 2 rouges', '10 de 120 cm'], e: 'Doctrine LSPCC p. 6 ; ils servent aux amarrages (question 30 de l’évaluation).', s: 'compo' },
    { q: 'Sur le harnais, le mousqueton à fermeture automatique peut être remplacé par un mousqueton à vis :', c: ['Faux', 'Vrai'], e: 'La fermeture est assurée par le connecteur automatique ; il est obligatoirement sur le harnais (doctrine p. 6-7 ; question 31).', s: 'regles' },
    { q: 'Un facteur de chute supérieur à 1 est :', c: ['Interdit', 'À éviter', 'Autorisé avec le lot échelle', 'Sans conséquence'], e: 'Doctrine LSPCC p. 10 : fc > 1 interdit, fc = 1 à éviter.', s: 'notions' },
    { q: 'Laquelle est une cause de réforme immédiate de la corde ?', c: ['Elle a amorti la chute d’une personne', 'Elle a été mouillée à l’eau claire', 'Elle a été utilisée en exercice', 'Elle a plus de 6 mois'], e: 'Doctrine p. 9 ; aussi corrosif, brûlure, âme visible, hernie (question 32 de l’évaluation).', s: 'controle' },
    { q: 'Comment laver une corde souillée ?', c: ['Eau douce à 30 °C maxi, sans détergent, séchage à plat à l’ombre', 'Eau chaude et lessive, séchage au soleil', 'Nettoyeur haute pression', 'On ne la lave jamais'], e: 'Doctrine LSPCC p. 9.', s: 'controle' },
    { q: 'Dans la progression sur toiture, quel est le rôle de l’équipier ?', c: ['Réaliser l’amarrage principal et assurer le chef pendant sa progression', 'Progresser en tête et poser les amarrages intermédiaires', 'Démonter les amarrages derrière le chef', 'Rester dans l’engin'], e: 'Doctrine LSPCC p. 24 (question 34 de l’évaluation).', s: 'evolution' },
    { q: 'En reconnaissance d’appartement avec l’équipier en point fixe, quelle distance minimale entre le frein de charge et le point d’appui sur le vide ?', c: ['20 cm', '5 cm', '1 m', 'Aucune'], e: 'Doctrine LSPCC p. 20 ; l’équipier, allongé, jambes à 90° contre le mur, contrôle la descente (question 33 de l’évaluation).', s: 'appart' },
    { q: 'Quel angle maximal entre deux anneaux cousus d’un amarrage ?', c: ['90°', '45°', '120°', '180°'], e: 'Doctrine LSPCC p. 15 : au-delà, sursollicitation des ancrages.', s: 'regles' },
    { q: 'Un véhicule est un ancrage fiable si :', c: ['Moteur arrêté, clés retirées, vitesse engagée, frein de parc serré', 'Moteur tournant pour la pompe', 'Il pèse plus de 3,5 t', 'C’est un MEA'], e: 'Doctrine LSPCC p. 13 ; le MEA est interdit comme ancrage.', s: 'notions' },
    { q: 'Pendant une progression, il manque des anneaux. L’équipier :', c: ['Prend le matériel d’un autre lot ou demande le GRIMP, sans démonter d’amarrage', 'Démonte un amarrage déjà posé', 'Fait un nœud dans la corde pour amarrer', 'Continue sans amarrage'], e: 'Doctrine LSPCC p. 24 : interdit de démonter des amarrages posés.', s: 'evolution' }
  ]
});
