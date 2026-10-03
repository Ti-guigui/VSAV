/* CHEF D’AGRÈS TOUT ENGIN INCENDIE — fichier 1 : commandement, gestion chronologique, messages
   Source : livret stagiaire « Chef d’agrès incendie » V2018.2 du SDIS 51 (partie 1 : GOC). */
var CATE1 = 'CA INC 1 — Commander l’intervention';
var LCA = 'Livret stagiaire Chef d’agrès incendie V2018.2 (SDIS 51)';

VSAV.chap({
  id: 'cate-commandement', part: 'cate', seq: CATE1,
  title: 'Commander : principes, rôle du chef d’agrès, DOS et COS', short: 'Principes du commandement', motif: 'team',
  sources: [LCA + ', § 1.1.1'],
  summary: 'Ce qu’est commander en opération, les quatre principes fondamentaux, les activités du chef d’agrès une équipe et tout engin, et la place du DOS et du COS.',
  why: '<b>Pourquoi un chapitre sur le commandement ?</b> Le livret le résume ainsi : commander, c’est <b>responsabiliser</b> ses subordonnés directs pour qu’ils adhèrent à vos choix, et <b>rendre compte</b> à son supérieur pour qu’il les comprenne. Sur intervention, il faut décider vite, sans connaître tous les paramètres, et rester celui vers qui les regards se tournent.',
  sections: [
    { id: 'principes', t: 'Les principes fondamentaux', ic: 'team', src: LCA + ', § 1.1.1 § 2',
      html: '<ul class="check"><li>Vous ne donnez des ordres <b>qu’à vos subordonnés directs</b>.</li><li>Vous <b>contrôlez</b> l’exécution des ordres (la confiance n’exclut pas le contrôle).</li><li>Vous <b>rendez compte</b> à l’échelon immédiatement supérieur.</li><li>Vous <b>assumez toujours</b> la responsabilité des actions que vous commandez.</li></ul>' +
        '<p>Le commandement se distingue du management par l’<b>immédiateté</b> : les ordres doivent être précis, clairs et efficaces pour que les gestes découlent de réflexes. C’est aussi un acte de <b>communication</b> qui réunit plusieurs acteurs autour d’un objectif commun.</p>' +
        '<div class="callout info"><b>La posture du chef d’agrès</b>Exemplaire (tenue propre, EPI réglementaires), juste, rigoureux, à l’écoute ; il pratique la <b>reformulation</b> pour vérifier que ses ordres sont compris. Il assume ses décisions sans se justifier sur le moment : la cinétique d’une intervention ne permet pas de débattre. L’échange a lieu au <b>débriefing</b>.</div>' },
    { id: 'role', t: 'Le rôle du chef d’agrès', ic: 'list', src: LCA + ', § 1.1.1 § 3',
      html: '<div class="tw"><table><thead><tr><th>Activité</th><th>Contenu</th></tr></thead><tbody>' +
        '<tr><td><b>1. Guider son agrès</b></td><td>Recueillir les données de l’alerte, gérer le départ, acheminer l’équipe.</td></tr>' +
        '<tr><td><b>2. Gérer l’intervention</b> (COS ou sous l’autorité d’un COS)</td><td>Reconnaissances, sécurisation, analyse, tactique, direction et contrôle des équipes, renforts, coordination avec les centres opérationnels, sécurité de l’équipage.</td></tr>' +
        '<tr><td><b>3. Rendre compte</b></td><td>Messages opérationnels, comptes rendus d’intervention.</td></tr>' +
        '<tr><td><b>4. Maintenir la capacité opérationnelle</b></td><td>Reconditionnement de l’engin, remise en état des EPI, <b>débriefing</b> des équipes (tout engin).</td></tr>' +
        '<tr><td><b>5. Coordonner les engins</b> dans l’attente du chef de groupe (tout engin)</td><td>Diriger les équipes, déterminer le premier point de rassemblement des moyens, prendre en compte les actions réalisées, assurer le relais avec le chef de groupe et se mettre à sa disposition.</td></tr>' +
        '<tr><td><b>6. Communiquer</b> (tout engin)</td><td>Accueillir et informer élus, autorités et médias.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Le <b>chef d’agrès une équipe</b> commande un agrès de trois sapeurs-pompiers au plus (lui et un binôme) ; le <b>chef d’agrès tout engin</b> commande l’engagement de n’importe quel agrès.</p>' },
    { id: 'dos-cos', t: 'DOS et COS', ic: 'shield', src: LCA + ', § 1.1.1 § 4',
      html: '<ul class="check"><li>Le <b>DOS</b> (directeur des opérations de secours) est le <b>maire</b> sur sa commune, le <b>préfet</b> dans le département, le <b>préfet maritime</b> en mer. Il décide des orientations stratégiques et valide les actions proposées par le COS.</li><li>Le <b>COS</b> (commandant des opérations de secours), en principe un sapeur-pompier, met en œuvre <b>tous les moyens publics et privés</b> mobilisés, sous l’autorité du DOS. Il est responsable des moyens humains et matériels sur le site.</li><li>En cas de <b>péril imminent</b>, le COS prend les mesures nécessaires à la protection de la population et à la sécurité des personnels engagés.</li></ul>' }
  ],
  key: ['Ordres aux subordonnés directs seulement ; contrôler ; rendre compte ; assumer.', 'Commander = communiquer ; reformuler pour vérifier.', 'Tout engin : coordonne les engins en attendant le chef de groupe.', 'DOS : maire, préfet, préfet maritime.', 'COS : met en œuvre tous les moyens publics et privés.', 'Débattre au débriefing, pas pendant l’action.'],
  traps: ['Donner un ordre directement à l’équipier d’un autre chef.', 'Ne pas contrôler un ordre donné.', 'Se justifier ou négocier ses ordres en pleine action.', 'Confondre le DOS (autorité de police) et le COS (sapeur-pompier).'],
  quiz: [
    { q: 'À qui le chef d’agrès donne-t-il ses ordres ?', c: ['À ses subordonnés directs uniquement', 'À tous les sapeurs-pompiers présents', 'Aux équipiers des autres engins', 'Au CODIS'], e: 'Livret CA INC § 1.1.1 § 2.', s: 'principes' },
    { q: 'Qui peut être directeur des opérations de secours (DOS) sur le territoire d’une commune ?', c: ['Le maire', 'Le chef d’agrès', 'Le chef de groupe', 'Le médecin du SMUR'], e: 'Livret CA INC § 1.1.1 § 4.', s: 'dos-cos' },
    { q: 'Le chef d’agrès tout engin, en attendant le chef de groupe :', c: ['Coordonne l’action des engins et détermine le premier point de rassemblement', 'Attend sans agir', 'Quitte les lieux', 'Commande seulement son binôme'], e: 'Livret CA INC § 1.1.1 § 3.', s: 'role' },
    { q: 'Quand discuter des choix tactiques avec son équipe ?', c: ['Au débriefing après l’intervention', 'Pendant l’attaque', 'Avant chaque ordre', 'Jamais'], e: 'Livret CA INC, la posture du chef d’agrès.', s: 'principes' }
  ]
});

VSAV.chap({
  id: 'cate-chronologie', part: 'cate', seq: CATE1,
  title: 'La gestion chronologique d’une intervention', short: 'Gestion chronologique', motif: 'clock',
  sources: [LCA + ', § 1.1.2'],
  summary: 'De la lecture du ticket de départ au compte rendu : reconnaissance (QQOQCCP, FFCOS, reconnaissance cubique), ordre initial SMES, message d’ambiance, ordre de conduite (source, flux, cibles), sécurité (SECURITE), communication et message de compte rendu.',
  why: '<b>Pourquoi un fil chronologique ?</b> Une intervention est complexe et chaque fois nouvelle. Une suite de <b>phases réflexes</b> cadre la réflexion du chef d’agrès et évite d’oublier un aspect fondamental, alors qu’on ne peut retenir que « cinq cases » d’information à la fois : <b>écrire</b> aide à ne rien oublier.',
  sections: [
    { id: 'phases', t: 'Les phases, dans l’ordre', ic: 'clock', src: LCA + ', § 1.1.2 § 0 à 8',
      steps: [
        'Prise en compte (ticket de départ) : adresse, point d’eau, zone d’intervention, accès ; analyse sur plan, ajustée en transit ; contact CODIS si l’information manque.',
        'Reconnaissance et prise d’informations : QQOQCCP (qui, quoi, où et par où, quand, comment et combien, pourquoi), personnes ressources, indicateurs FFCOS (flammes, fumées, chaleur, ouvrants, sons et structure), reconnaissance cubique de toutes les faces du volume.',
        'Ordre initial (SMES) donné oralement aux binômes, avec réactions immédiates (sauvetages, mises en sécurité) et mesures conservatoires (périmètre, coupure des fluides).',
        'Message d’ambiance au CODIS entre T+5 et T+10 minutes : je suis, je vois, je demande.',
        'Ordre de conduite : SMES ajusté après les retours des binômes et des témoins, avec la méthode source-flux-cibles et un schéma.',
        'Sécurité et recherche des dangers, contrôle et communication tout au long de l’intervention.',
        'Message de compte rendu entre T+15 et T+30 minutes : je suis, je vois, je fais, (je prévois), je demande ; puis messages réguliers.'
      ], stepsTitle: 'Gestion chronologique',
      after: '<p>La <b>MGO</b> reste le fil directeur complémentaire de cette chronologie (voir <a href="#/c/inc-mgo">MGO de l’équipier</a> et <a href="#/c/ce-mgo">le chef d’équipe dans la MGO</a>). La reconnaissance en est l’étape clé : s’imposer la <b>reconnaissance cubique</b>.</p>' },
    { id: 'smes', t: 'L’ordre initial : SMES', ic: 'list', src: LCA + ', § 1.1.2 § 2',
      html: '<div class="tw"><table><thead><tr><th></th><th>Contenu</th><th>Exemple (feu de VL, FPT)</th></tr></thead><tbody>' +
        '<tr><td><b>S</b>ituation</td><td>Description de la situation</td><td>« Feu de VL à carburation essence, sans risque de propagation. »</td></tr>' +
        '<tr><td><b>M</b>ission</td><td>Objectif à atteindre</td><td>« Assurez l’extinction du véhicule. »</td></tr>' +
        '<tr><td><b>E</b>xécution</td><td>Ordres aux équipiers</td><td>« Établissement d’une LDV 45 directement sur l’engin, 3 tuyaux ; BAT, point d’attaque ici ; établissez ! »</td></tr>' +
        '<tr><td><b>S</b>écurité</td><td>Mesures individuelles et collectives</td><td>« ARI capelé ; attention, pas de jet bâton. »</td></tr>' +
        '</tbody></table></div>' +
        '<p>L’<b>ordre de conduite</b> reprend le SMES une fois la situation mieux connue. Pour prioriser, raisonner en <b>source</b> (ce qui est à l’origine : le foyer, la canalisation), <b>flux</b> (fumées, nuage gazeux, liquides : ils annoncent la propagation et guident les reconnaissances et la ventilation) et <b>cibles</b> (personnes, biens, environnement).</p>' },
    { id: 'messages', t: 'Message d’ambiance et compte rendu', ic: 'bolt', src: LCA + ', § 1.1.2 § 3 et 4',
      html: '<div class="tw"><table><thead><tr><th>Message</th><th>Quand</th><th>Structure</th></tr></thead><tbody>' +
        '<tr><td><b>Ambiance</b></td><td>Avant T+10 min (entre T+5 et T+10)</td><td><b>Je suis</b> (adresse, environnement succinct) — <b>je vois</b> (sinistre, victimes) — <b>je demande</b> (renforts, forces de l’ordre, partenaires, conseiller technique, autorités)</td></tr>' +
        '<tr><td><b>Compte rendu</b> (complémentaire)</td><td>Vers T+15 min (entre T+15 et T+30), puis régulièrement</td><td><b>Je suis</b> (description précise) — <b>je vois</b> (origine, surface, victimes et état, risques) — <b>je fais</b> (lances, techniques, mesures conservatoires) — <b>je prévois</b> (évolution, longue durée) — <b>je demande</b></td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout ok"><b>Exemple de message d’ambiance</b>« Je suis au 50 rue …, bâtiment d’habitation collective R+5/-1. Je vois un feu localisé dans un appartement au R+2, plusieurs victimes se manifestent aux ouvrants, sauvetage en cours par l’EPS. Je demande un deuxième VSAV, les forces de l’ordre, ERDF et GRDF. Fin de message, message de compte rendu suivra. »</div>' +
        '<p>Le CODIS doit pouvoir se représenter l’intervention le plus justement possible. Voir aussi <a href="#/c/cate-messages">les grilles de message par type d’intervention</a>.</p>' },
    { id: 'securite', t: 'Sécurité et communication', ic: 'shield', src: LCA + ', § 1.1.2 § 6 et 7',
      html: '<div class="tw"><table><thead><tr><th>SECURITE</th><th>Signification</th></tr></thead><tbody>' +
        '<tr><td><b>S</b></td><td>Périmètre de sécurité</td></tr><tr><td><b>E</b></td><td>Explosion, effondrement, émanation, électricité</td></tr><tr><td><b>C</b></td><td>Le jeu en vaut-il la chandelle ? (bénéfice-risque)</td></tr><tr><td><b>U</b></td><td>Un pour tous, tous pour un</td></tr><tr><td><b>R</b></td><td>Règles de l’art : des techniques réalisées en tenant compte de la sécurité</td></tr><tr><td><b>I</b></td><td>Image (à étudier au retour)</td></tr><tr><td><b>T</b></td><td>Thermorégulation</td></tr><tr><td><b>E</b></td><td>EPI</td></tr>' +
        '</tbody></table></div>' +
        '<p>Ce mnémonique s’appuie sur le rapport « Pourny » sur la sécurité des sapeurs-pompiers en intervention. Le chef d’agrès est le <b>garant de la sécurité</b> de chacun à toutes les phases : il contrôle en permanence et reste intransigeant. <b>Communiquer</b> : discours clair, cohérent, simple et synthétique ; faire reformuler (« répète ce que je t’ai demandé »).</p>' }
  ],
  key: ['Ticket → reconnaissance → SMES → ambiance (T+5 à T+10) → ordre de conduite → compte rendu (T+15 à T+30).', 'QQOQCCP et FFCOS ; reconnaissance cubique.', 'SMES : situation, mission, exécution, sécurité.', 'Source, flux, cibles.', 'Ambiance : je suis, je vois, je demande.', 'Compte rendu : + je fais, je prévois.', 'SECURITE ; écrire pour ne rien oublier.'],
  traps: ['Engager les binômes sans ordre initial structuré.', 'Envoyer le message d’ambiance après 10 minutes.', 'Oublier « je fais » et « je prévois » dans le compte rendu.', 'Limiter la reconnaissance à la face d’arrivée.', 'Ne pas faire reformuler un ordre important.'],
  quiz: [
    { q: 'Que signifie SMES ?', c: ['Situation, mission, exécution, sécurité', 'Source, moyens, effectifs, secours', 'Sauvetage, mise en sécurité, extinction, surveillance', 'Situation, message, évacuation, sécurité'], e: 'Livret CA INC § 1.1.2 § 2.', s: 'smes' },
    { q: 'Dans quel délai envoyer le message d’ambiance ?', c: ['Dans les 10 premières minutes', 'Après 30 minutes', 'À la fin de l’intervention', 'Seulement si le CODIS le demande'], e: 'Livret CA INC § 1.1.2 § 3.', s: 'messages' },
    { q: 'Quelles rubriques le message de compte rendu ajoute-t-il au message d’ambiance ?', c: ['Je fais et je prévois', 'Je pars et je rentre', 'Je compte et je signe', 'Aucune'], e: 'Livret CA INC § 1.1.2 § 4.', s: 'messages' },
    { q: 'Dans la méthode source-flux-cibles, les fumées d’un feu sont :', c: ['Un flux', 'La source', 'Une cible', 'Un moyen'], e: 'Livret CA INC § 1.1.2 § 5.', s: 'smes' },
    { q: 'La reconnaissance « cubique » consiste à :', c: ['Analyser toutes les faces internes et externes du volume', 'Ne reconnaître que l’étage du feu', 'Mesurer le volume en m³', 'Faire le tour du pâté de maisons'], e: 'Livret CA INC § 1.1.2 § 1 et § 9.', s: 'phases' },
    { q: 'Dans SECURITE, le « E » regroupe :', c: ['Explosion, effondrement, émanation, électricité', 'Eau, émulseur, échelle, éclairage', 'Équipe, engin, effectif, état-major', 'Évacuation seulement'], e: 'Livret CA INC § 1.1.2 § 6.', s: 'securite' }
  ]
});

VSAV.chap({
  id: 'cate-messages', part: 'cate', seq: CATE1,
  title: 'Les grilles de message par type d’intervention et les transmissions', short: 'Messages et ANTARES', motif: 'bolt',
  sources: [LCA + ', grilles de message radio et § 1.1.3'],
  summary: 'Ce que le CODIS attend dans les messages d’un feu, d’un accident de la route, d’une fuite de gaz, d’un accident de matières dangereuses et d’un feu de végétaux, et les bases du réseau radio ANTARES.',
  why: '<b>Pourquoi des grilles ?</b> Sous stress, on oublie facilement la coupure des énergies, l’état des victimes ou le sens du vent. Les grilles du livret listent, pour chaque type d’intervention, ce qu’il faut avoir vu et transmettre : elles servent de pense-bête à la reconnaissance comme au message.',
  sections: [
    { id: 'communs', t: 'Ce qui revient dans tous les messages', ic: 'list', src: LCA + ', grilles de message',
      html: '<ul class="check"><li><b>Je suis</b> : adresse précise, description de l’environnement.</li><li><b>Victimes et impliqués</b> : décédés, <b>UA</b>, <b>UR</b>, <b>UMP</b>, indemnes ; sauvetages, mises en sécurité, déplacés, confinés ; personnes manquantes ; identité et nationalité si utile.</li><li><b>Je prévois</b> : évolution prévisible, opération de longue durée, chômage technique, relogement, plan ORSEC NOVI.</li><li><b>Je demande</b> : PRV ou PRI (point de rassemblement des victimes ou des impliqués), CRM, renforts SP, soutien sanitaire, relève, CUMP, lots spécialisés, <b>alimentation pérenne</b>, services extérieurs.</li><li><b>Services extérieurs</b> à citer : autorités (préfet, maire…), forces de l’ordre, services sanitaires (SAMU, ARS…), services supports (ENEDIS-RTE, GRDF-GRT, SANEF-DIR Est, services des eaux, SNCF, VNF, ONF…).</li></ul>' },
    { id: 'grilles', t: 'Les points propres à chaque type d’intervention', ic: 'grid', src: LCA + ', grilles de message',
      html: '<div class="tw"><table><thead><tr><th>Type</th><th>À voir et à transmettre</th></tr></thead><tbody>' +
        '<tr><td><b>Incendie</b></td><td>Placement des engins, coupure électricité et gaz ; bâtiment (usage, niveaux, surface totale et sinistrée), localisation du feu, risques (structure, ligne HT, RCH, route), risque de propagation ; état « feu circonscrit », « maître du feu », « feu éteint » ; lances et débits, ventilation, relevés caméra thermique et CO, SSI, compartimentage.</td></tr>' +
        '<tr><td><b>Accident de la route</b></td><td>Placement, coupure batterie, protection airbag ; PK et sens, voie concernée ; véhicules, carburation, chargement ou TMD ; type de choc, cinétique, position des véhicules, circulation ; incarcéré, piégé, éjecté ; balisage, protection incendie, désincarcération ; DZ possible.</td></tr>' +
        '<tr><td><b>Fuite de gaz</b></td><td>Périmètre de sécurité de 50 m, points d’ignition ; nature du gaz, bouteille ou citerne, capacité, fuite ouverte, fermée ou enflammée, canalisation (pression, matériau) ; relevés (communs, air libre), sens du vent, logements impactés par la coupure ; « fin de PGR, risque maîtrisé ».</td></tr>' +
        '<tr><td><b>Matières dangereuses</b></td><td>Arriver <b>dos au vent</b>, périmètre de 50 m, regrouper les impliqués, ARI, engagement minimum ; code danger, code matière, pictogramme, contenant, état physique, type de fuite ; cibles ; relevés, endiguement, obturation ; CMIC ou CMIR, dépollution.</td></tr>' +
        '<tr><td><b>Feu de végétaux</b></td><td>Fréquence tactique entre engins ; coordonnées (DFCI, GPS) ; nature (broussailles, forêt, récolte, andain, chaume), axe de propagation et front de feu, vent, pente, surfaces (1 ha = 100 m × 100 m, à peu près un terrain de football), points sensibles ; attaque ou jalonnement de flanc, traitement des lisières, noyage ; renforts terrestres ou aériens.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Rappels de la grille AVP</b>Écoulement de carburant : récupération, protection incendie, tapis de mousse préventif. Véhicule GPL : protection des sapeurs-pompiers et des victimes, véhicule en barrage, deux lances pour une extinction rapide. Véhicule à hydrogène : localiser la soupape. Véhicule électrique : déconnecter la batterie selon l’ERG. Détail dans la partie <a href="#/c/sr-energies">Secours routier</a>.</div>' },
    { id: 'antares', t: 'Le réseau ANTARES', ic: 'bolt', src: LCA + ', § 1.1.3',
      html: '<ul class="check"><li><b>ANTARES</b> (adaptation nationale des transmissions aux risques et aux secours) fonctionne sur l’infrastructure nationale partagée des télécommunications (INPT) ; il remonte au CODIS la voix et des données de façon sécurisée.</li><li><b>Mode direct (DIR)</b> : d’un poste à l’autre sans relais ; c’est le mode <b>tactique</b>, limité à quelques kilomètres.</li><li><b>Mode talkgroup (TKG)</b> : relayé par tous les relais du département, entendu par le CTA-CODIS et tous les postes couverts.</li><li>Les <b>statuts</b> (parti, sur les lieux, transport hôpital, disponible, rentré…) se transmettent depuis le terminal ; un <b>message urgent</b> a un statut dédié.</li><li>L’<b>ordre complémentaire des transmissions</b> (OCT) est implicite au niveau groupe ; il devient explicite (type colonne) dès qu’un poste de commandement est activé.</li><li>Le <b>RFGI</b> est le numéro unique de chaque poste : réseau, flotte (service), groupe matériel, identité ; il identifie l’appelant.</li></ul>' }
  ],
  key: ['Victimes : DCD, UA, UR, UMP, indemnes ; personnes manquantes.', 'Toujours penser à l’alimentation pérenne et aux services extérieurs.', 'Gaz et TMD : périmètre de 50 m ; TMD dos au vent.', 'Feu : circonscrit, maître du feu, éteint.', 'ANTARES : DIR = tactique sans relais ; TKG = relayé, entendu du CODIS.', 'RFGI = identité unique du poste.'],
  traps: ['Oublier de signaler les personnes manquantes.', 'Arriver face au vent sur un accident TMD.', 'Utiliser le talkgroup pour les échanges tactiques entre engins voisins.', 'Annoncer « feu éteint » alors qu’il n’est que circonscrit.'],
  quiz: [
    { q: 'Le mode direct (DIR) d’ANTARES :', c: ['Relie les postes sans passer par les relais, sur quelques kilomètres', 'Passe par tous les relais du département', 'Est réservé au CODIS', 'Sert uniquement aux statuts'], e: 'Livret CA INC § 1.1.3.', s: 'antares' },
    { q: 'Sur un accident de matières dangereuses, comment arriver sur les lieux ?', c: ['Dos au vent', 'Face au vent', 'Par le chemin le plus court quel que soit le vent', 'Toujours par l’aval'], e: 'Grille de message matières dangereuses.', s: 'grilles' },
    { q: 'Quel périmètre de sécurité la grille « fuite de gaz » prévoit-elle a priori ?', c: ['50 m', '5 m', '500 m', 'Aucun'], e: 'Grille de message fuite de gaz.', s: 'grilles' },
    { q: 'Que signifie UA dans le bilan des victimes ?', c: ['Urgence absolue', 'Unité d’alerte', 'Urgence ambulatoire', 'Usager absent'], e: 'Grilles de message.', s: 'communs' },
    { q: 'Le RFGI d’un poste radio sert à :', c: ['Identifier de façon unique l’appelant', 'Régler le volume', 'Choisir la fréquence tactique', 'Coder les messages'], e: 'Livret CA INC § 1.1.3.', s: 'antares' }
  ]
});
