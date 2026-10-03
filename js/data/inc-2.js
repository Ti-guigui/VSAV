/* ÉQUIPIER INCENDIE — fichier 2 : Incendie 3 — Le matériel de lutte contre l’incendie
   Sources : Livret stagiaire Équipier incendie SDIS 51 (v2019) § 2.2 à 2.7 et « La mousse » ;
   Guide d’instruction et de manœuvre INC (SDIS 51) ; diaporama formateur « Moyens de production de mousse » ;
   Fiches Halligan S+F (2015) ; GDR Tuyaux en écheveaux (SDIS 51, 2018) ; GTO Établissements et techniques
   d’extinction (2018) ; GTO Sauvetage et mise en sécurité (DGSCGC). */
var INC3 = 'Incendie 3 — Le matériel de lutte contre l’incendie';
var LIV = 'Livret stagiaire Équipier incendie SDIS 51 (v2019)';
var GIM = 'Guide d’instruction et de manœuvre INC (SDIS 51)';

/* ======================================================================= 1. EXTINCTEURS */
VSAV.chap({
  id: 'inc-extincteurs', part: 'inc', seq: INC3,
  title: 'Les extincteurs', short: 'Extincteurs', motif: 'spray',
  sources: [LIV + ', § 2.2 Les extincteurs (p. 22-25)', GIM + ', « Les extincteurs » (matériel du FPT)', 'GDO Incendies de structures (2018), § « Interrompre la réaction chimique en chaîne »'],
  summary: 'Trois familles d’agents (eau additivée, poudre, CO2), une classe de feu par agent, et les deux modèles embarqués sur le FPT.',
  why: '<b>Pourquoi connaître l’agent avant la classe ?</b> Un extincteur n’éteint que les feux pour lesquels son agent est adapté : le pictogramme répond à deux questions, « <b>quelle classe de feu ?</b> » et « <b>quel agent dans l’appareil ?</b> ». Se tromper, c’est perdre l’effet de l’appareil voire aggraver la situation (eau sur un feu de friteuse ou électrique, CO2 qui ne refroidit pas assez un liquide déjà très chaud…).',
  sections: [
    { id: 'agents', t: 'Les trois agents extincteurs', ic: 'list', src: LIV + ', § 2.2 § 1 Les agents extincteurs, p. 22-23',
      html: '<div class="tw"><table><thead><tr><th>Agent</th><th>Mode d’action</th><th>À retenir</th></tr></thead><tbody>' +
        '<tr><td><b>Eau</b> (pulvérisée, souvent additivée)</td><td><b>Refroidissement</b></td><td>Agent principal des feux de <b>classe A</b>. Le diffuseur pulvérise de fines gouttelettes : plus grande surface d’absorption de chaleur et protection partielle de l’utilisateur. L’additif (émulseur, le plus souvent de l’<b>AFFF</b>, Agent Formant un Film Flottant) abaisse la tension superficielle : l’eau devient plus <b>mouillante</b> et forme une pellicule étanche qui isole le combustible de l’air. L’additif est en pré-mélange ou dans un réservoir intérieur percé à la mise en pression.</td></tr>' +
        '<tr><td><b>Poudre</b> (ABC, BC, D)</td><td>Principalement <b>étouffement et isolement</b>, plus une action <b>inhibitrice</b> sur les réactions chimiques de la combustion</td><td>Éteint le feu <b>le plus rapidement</b>. Sur les liquides, la ré-inflammation reste possible : consolider parfois à la mousse. Seul agent efficace sur les <b>feux de gaz de grande ampleur</b>. Seuls extincteurs utilisables par <b>températures négatives</b> et sur des tensions <b>supérieures à 1 000 V</b>.</td></tr>' +
        '<tr><td><b>CO2</b> (dioxyde de carbone, « neige carbonique »)</td><td>Principalement <b>étouffement</b>, accessoirement refroidissement</td><td>Liquide sous pression ; à l’ouverture, la détente brutale fait chuter la température jusqu’à <b>-78 °C</b>. Plus lourd que l’air à température ambiante, il devient plus léger dès <b>179 °C</b> : il faut couvrir <b>simultanément toute la surface</b> en feu. Efficace sur les feux <b>naissants</b> de gaz (C) et de liquides (B). Utilisable sur des tensions <b>inférieures à 5 000 V</b> ; sans résidu (informatique).</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Divergences entre sources.</b> Pression du CO2 : le livret indique <b>70 bars</b> (forme liquide à température ambiante), le Guide d’instruction indique <b>50 bars</b> dans le corps de l’extincteur du FPT. Poudre : le livret parle d’une action principale d’<b>étouffement/isolement</b> complétée par une action inhibitrice ; le Guide écrit qu’elle agit « principalement en <b>inhibant</b> le feu et en isolant le combustible » et qu’elle n’a <b>aucun pouvoir refroidissant</b>.</div>' },
    { id: 'classes', t: 'Classes de feu et pictogrammes', ic: 'image', src: LIV + ', § 2.2, p. 24',
      html: '<p>Chaque extincteur porte un pictogramme qui indique la ou les classes de feu traitées et l’agent contenu :</p>' +
        '<div class="tw"><table><thead><tr><th>Marquage</th><th>Agent</th></tr></thead><tbody>' +
        '<tr><td>A</td><td>Eau pulvérisée</td></tr><tr><td>AB</td><td>Eau pulvérisée avec additif</td></tr>' +
        '<tr><td>AF</td><td>Eau pulvérisée — feu de friteuse</td></tr><tr><td>ABF</td><td>Eau pulvérisée avec additif — feu de friteuse</td></tr>' +
        '<tr><td>B</td><td>CO2</td></tr><tr><td>ABC</td><td>Poudre polyvalente</td></tr>' +
        '<tr><td>D</td><td>Feu de métaux (poudre spécifique)</td></tr><tr><td>F</td><td>Feu de friteuse (poudre spécifique)</td></tr>' +
        '</tbody></table></div>',
      figs: [{ img: 'img/inc/2/ext-classes.jpg', cap: 'Pictogrammes des extincteurs', txt: '<p>Lire le bandeau de couleur sous le pictogramme : la lettre donne la <b>classe de feu</b>, le texte donne l’<b>agent</b>. Les poudres D et F sont des poudres <b>spécifiques</b>.</p>', src: LIV + ', p. 24' }] },
    { id: 'types', t: 'Portatifs, mobiles et fixes', ic: 'grid', src: LIV + ', § 2.2, p. 24',
      html: '<ul class="check"><li><b>Portatifs</b> : connus de tous, portés à la main.</li>' +
        '<li><b>Mobiles</b> : masse comprise entre <b>20 et 200 kg</b>, montés sur un châssis à roues (utilisation limitée en présence d’escaliers). Même fonctionnement et mêmes agents que les portatifs, mais une autonomie et une efficacité accrues ; tuyau beaucoup plus long, parfois terminé par une lance-pistolet ; <b>cartouche de gaz toujours externe</b>.</li>' +
        '<li><b>Fixes</b> : installés là où existe un risque particulier ; déclenchement manuel ou automatique (capteurs) ; réserve d’agent souvent sous pression permanente acheminée par tuyauterie. On y utilise souvent des <b>gaz inertants</b> (data centers), là où un autre agent provoquerait des dégâts considérables.</li></ul>' +
        '<p>Le GDO Incendies de structures cite, pour l’inhibition de la réaction en chaîne, les installations fixes à gaz de type FE 13 ou FM 200 dans les locaux sensibles, et l’emploi des extincteurs à poudre par les secours « en particulier sur les feux électriques ».</p>' },
    { id: 'fpt', t: 'Les extincteurs du FPT', ic: 'spray', src: GIM + ', « Les extincteurs »',
      html: '<p>Le FPT du SDIS 51 emporte <b>1 extincteur CO2 de 5 kg</b> et <b>2 extincteurs poudre de 9 kg</b>.</p>' +
        '<ul class="check"><li><b>CO2</b> : appareil à <b>pression permanente</b>. Partie haute gazeuse, partie basse liquide : le gaz propulse le liquide par le tube plongeur ; il se vaporise en produisant du froid. Éléments : goupille de sécurité, poignée de manœuvre, disque de rupture, <b>tromblon</b>.</li>' +
        '<li><b>Ne pas toucher le tromblon pendant l’utilisation</b> : risque de brûlure par le froid.</li>' +
        '<li><b>Poudre</b> : l’étiquette indique le nom du fabricant, le type d’appareil et sa contenance, le mode d’emploi, les pictogrammes, les précautions d’emploi, l’homologation et l’estampille.</li></ul>',
      figs: [
        { img: 'img/inc/2/ext-etiquette.jpg', cap: 'Étiquette d’un extincteur à poudre ABC', txt: '<p>Mode d’emploi en 3 temps : enlever la goupille de sécurité, appuyer sur le levier de commande, presser la gâchette en dirigeant le jet sur la base des flammes. Les pictogrammes A, B, C rappellent les classes traitées.</p>', src: GIM + ', « Extincteur poudre »' },
        { img: 'img/inc/2/ext-distances.jpg', cap: 'Distance d’attaque : CO2 et poudre', txt: '<p>Les schémas du Guide indiquent une attaque à environ <b>1 m</b> pour le CO2 et à <b>3 à 4 m</b> pour la poudre : le CO2, gaz volatil, doit être appliqué au plus près.</p>', src: GIM + ', schémas « CO2 » et « poudres »' }] },
    { id: 'co2', t: 'Le CO2 : précautions', ic: 'alert', src: LIV + ', § 2.2, p. 23',
      html: '<div class="callout warn"><ul><li>Efficacité limitée lorsque le liquide en feu a déjà atteint son <b>point d’auto-inflammation</b> : il se rallume spontanément après extinction.</li><li>Utile pour refroidir des appareils électriques en surchauffe, mais prudence : des objets trop brutalement refroidis peuvent <b>exploser</b>.</li><li>Le gaz ne reste au contact du feu que quelques instants : couvrir toute la surface en même temps.</li></ul></div>' }
  ],
  key: ['Eau = refroidissement, agent principal du feu de classe A.', 'Poudre : éteint le plus vite, utilisable par gel et au-delà de 1 000 V, seule efficace sur les grands feux de gaz.', 'CO2 : étouffement, -78 °C à la détente, utilisable sous 5 000 V, sans résidu.', 'CO2 plus léger que l’air dès 179 °C : couvrir toute la surface en même temps.', 'Extincteurs mobiles : 20 à 200 kg, cartouche toujours externe.', 'FPT SDIS 51 : 1 CO2 5 kg + 2 poudre 9 kg.'],
  traps: ['Toucher le tromblon d’un extincteur CO2 en fonctionnement (brûlure par le froid).', 'Croire qu’une extinction à la poudre d’un feu de liquide est définitive : la ré-inflammation reste possible.', 'Confondre les tensions limites : poudre au-delà de 1 000 V, CO2 sous 5 000 V.'],
  quiz: [
    { q: 'Quel est le mode d’action principal du CO2 ?', c: ['L’étouffement', 'L’inhibition chimique', 'Le refroidissement seul', 'La dilution du combustible'], e: 'Le CO2 agit principalement par étouffement ; dans une moindre mesure par refroidissement (détente jusqu’à -78 °C).', s: 'agents' },
    { q: 'Quels sont les seuls extincteurs utilisables par températures négatives ?', c: ['Les extincteurs à poudre', 'Les extincteurs à eau additivée', 'Les extincteurs CO2', 'Les extincteurs à mousse'], e: 'Le livret précise que les extincteurs à poudre sont les seuls utilisables à des températures négatives et sur des tensions supérieures à 1 000 V.', s: 'agents' },
    { q: 'À partir de quelle température le CO2 devient-il plus léger que l’air ?', c: ['179 °C', '78 °C', '100 °C', '500 °C'], e: 'Plus lourd que l’air à température ambiante, il devient plus léger dès 179 °C : il faut couvrir simultanément toute la surface en feu.', s: 'agents' },
    { q: 'Un extincteur marqué « D » est destiné :', c: ['Aux feux de métaux (poudre spécifique)', 'Aux feux de friteuse', 'Aux feux de gaz', 'Aux feux électriques'], e: 'D = feu de métaux, traité avec une poudre spécifique ; F = feu de friteuse.', s: 'classes' },
    { q: 'Masse d’un extincteur mobile :', c: ['20 à 200 kg', '2 à 9 kg', '200 à 500 kg', '9 à 20 kg'], e: 'Les extincteurs mobiles pèsent entre 20 et 200 kg et sont montés sur roues ; leur cartouche de gaz est toujours externe.', s: 'types' },
    { q: 'Quelle est la dotation en extincteurs d’un FPT du SDIS 51 ?', c: ['1 CO2 de 5 kg et 2 poudre de 9 kg', '2 CO2 de 5 kg et 1 poudre de 9 kg', '1 eau de 6 L et 1 poudre de 9 kg', '2 CO2 de 2 kg'], e: 'Guide d’instruction : 1 extincteur CO2 5 kg et 2 extincteurs poudre 9 kg.', s: 'fpt' },
    { q: 'Pourquoi l’eau des extincteurs est-elle souvent additivée ?', c: ['L’additif la rend plus mouillante et forme une pellicule isolante', 'Pour qu’elle ne gèle pas', 'Pour la rendre conductrice', 'Pour augmenter sa pression'], e: 'L’émulseur (souvent AFFF) abaisse la tension superficielle : la goutte s’étale, pénètre mieux et forme une pellicule étanche qui isole le combustible de l’air.', s: 'agents' }
  ]
});

/* ======================================================================= 2. LANCES : PRINCIPES ET JETS */
VSAV.chap({
  id: 'inc-lances-jets', part: 'inc', seq: INC3,
  title: 'Les lances : rôle, règle des 5 D et types de jets', short: 'Lances et jets', motif: 'target',
  sources: [LIV + ', § 2.3 Les lances (p. 25-30)', GIM + ', « Les lances à eau à main »'],
  summary: 'Une lance forme, projette et dirige le jet ; le porte-lance agit sur les 5 D et choisit le jet adapté à l’effet recherché.',
  why: '<b>Pourquoi tant de réglages ?</b> On n’éteint un feu qu’en <b>absorbant plus de calories qu’il n’en produit</b>. Cette puissance d’extinction dépend du <b>débit</b> et du <b>temps d’application</b>, mais aussi de la forme du jet : un jet mal choisi gaspille l’eau, ne refroidit pas les fumées ou ne protège pas le binôme.',
  sections: [
    { id: 'role', t: 'Le rôle d’une lance', ic: 'target', src: LIV + ', § 2.3, p. 25',
      html: '<p>Les lances ont pour but de <b>former</b>, <b>projeter</b> et <b>diriger</b> le jet <b>le mieux adapté à l’effet recherché</b>.</p>' +
        '<p>L’efficacité d’une lance tient à sa <b>capacité d’absorption calorifique</b>, aussi appelée <b>puissance d’extinction</b> : c’est la combinaison du <b>débit</b> et du <b>temps d’application</b>. Il faut donc un jet de bonne qualité et un débit adapté, en restant dans la <b>plage de pression définie par le constructeur</b>.</p>' +
        '<p>Le Guide rappelle qu’un incendie s’éteint en atteignant la <b>base des flammes</b>, mais que la dangerosité des <b>fumées</b> doit être prise en compte autant que le foyer.</p>',
      figs: [{ img: 'img/inc/2/lance-role.jpg', cap: 'Former, projeter, diriger', txt: '<p>Les trois fonctions d’une lance, au service du jet le mieux adapté à l’effet recherché.</p>', src: LIV + ', p. 25' }] },
    { id: 'cinqd', t: 'La règle des 5 D', ic: 'list', src: LIV + ', § 2.3, p. 26',
      html: '<p>Pour être efficace, le porte-lance intervient sur les <b>5 D</b> de sa lance :</p>' +
        '<div class="tw"><table><thead><tr><th>D</th><th>Nature</th><th>Sur quoi agit-on ?</th></tr></thead><tbody>' +
        '<tr><td><b>Débit</b></td><td>Action</td><td>Poignée / réglage de débit</td></tr>' +
        '<tr><td><b>Direction</b></td><td>Action</td><td>Orientation de la lance (poignée de préhension)</td></tr>' +
        '<tr><td><b>Diffusion</b></td><td>Action</td><td>Tête de diffusion (forme du jet)</td></tr>' +
        '<tr><td><b>Durée</b></td><td>Variable</td><td>Temps d’application ; c’est une variable du débit</td></tr>' +
        '<tr><td><b>Distance</b></td><td>Conséquence</td><td>Résulte du débit, de la direction et de la diffusion</td></tr>' +
        '</tbody></table></div><p>« La Durée est une variable du Débit qui, combiné à la Direction et à la Diffusion, détermine la Distance. »</p>',
      figs: [{ img: 'img/inc/2/lance-5d.jpg', cap: 'Règle des 5 D', txt: '<p>Flèches rouges : actions du porte-lance (débit, direction, diffusion). Flèche bleue : la durée, variable du débit. Flèches vertes : la distance, conséquence des trois actions.</p>', src: LIV + ', p. 26' }] },
    { id: 'qualite', t: 'Qualité d’un jet', ic: 'wave', src: LIV + ', § 2.3.1 § 1 Les différents types de jets, p. 29',
      html: '<p>Entre la tête de diffusion et le point d’impact, le jet subit le frottement de l’air, la force et le sens du vent, etc. Sa qualité dépend de la <b>pression à la lance</b>, du <b>réglage</b> de la lance, de sa <b>conception</b> et de sa <b>qualité de fabrication</b>.</p>' +
        '<p>Les jets doivent permettre :</p><ul class="check"><li>d’<b>atteindre un foyer</b> par une portée efficace ;</li><li>d’<b>absorber de la chaleur</b> par création d’une surface d’échange ;</li><li>de <b>protéger</b> le binôme ou une structure par création d’un écran d’eau.</li></ul>' },
    { id: 'jets', t: 'Les cinq types de jets', ic: 'grid', src: LIV + ', § 2.3.1, tableau p. 30',
      html: '<div class="tw"><table><thead><tr><th>Jet</th><th>Domaine d’application</th><th>Observations</th></tr></thead><tbody>' +
        '<tr><td><b>Jet droit</b></td><td>Atteindre une cible à distance (atténuation, attaque massive, ricochet…) ; atteindre les matériaux fibreux (tissus, bois…) ; d’une manière générale, mouillage et refroidissement des matériaux en feu.</td><td>Généralement <b>consommateur d’eau</b> ; le débit influe sur la distance projetée.</td></tr>' +
        '<tr><td><b>Jet brisé</b></td><td>Envoi d’une masse d’eau sur des surfaces combustibles en limitant l’effet cinétique du jet droit.</td><td>Diffuseur positionné complètement à droite et robinet de lance <b>ouvert très partiellement</b>.</td></tr>' +
        '<tr><td><b>Jet diffusé d’attaque</b></td><td>Refroidissement des fumées et gaz chauds, attaque massive ; générer une ventilation favorisant la progression du binôme ou pour ventiler un volume.</td><td>Le porte-lance agit sur le débit, l’angle du cône de diffusion et l’angle d’application.</td></tr>' +
        '<tr><td><b>Jet diffusé de protection</b></td><td>Protection du binôme face à un rayonnement important (foyer, phénomène à cinétique rapide).</td><td>Préconisé pour <b>protéger l’équipe</b> : écran hydraulique qui n’a que très peu d’incidence mécanique sur le volume gazeux.</td></tr>' +
        '<tr><td><b>Jet purge</b> (grosses gouttes)</td><td>Refroidissement direct des matériaux en feu.</td><td>Surtout en phase de <b>déblai</b>, à faibles débits, pour maîtriser l’accumulation d’eau.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Sur la LDV du SDIS 51 (fiche MAT/10), le sélecteur de jet donne dans l’ordre : <b>jet droit</b>, <b>jet diffusé d’attaque</b> (angle de 15 à 45°, position tactile + bossage), <b>jet diffusé de protection</b> (angle de 130°).</p>' }
  ],
  key: ['Une lance forme, projette et dirige le jet le mieux adapté à l’effet recherché.', 'Puissance d’extinction = débit × temps d’application.', '5 D : Débit, Direction, Diffusion (actions), Durée (variable), Distance (conséquence).', 'Jet diffusé d’attaque : 15 à 45°, refroidit fumées et gaz chauds.', 'Jet diffusé de protection : 130°, écran d’eau pour le binôme.', 'Jet purge : grosses gouttes, déblai, faibles débits.'],
  traps: ['Croire que le jet de protection refroidit le volume gazeux : il n’a que très peu d’incidence mécanique sur celui-ci.', 'Classer la distance parmi les actions : c’est la conséquence des autres D.'],
  quiz: [
    { q: 'Dans la règle des 5 D, la Distance est :', c: ['La conséquence du débit, de la direction et de la diffusion', 'Une action directe du porte-lance', 'Une variable du débit', 'Sans rapport avec le débit'], e: 'Le livret : « La Durée est une variable du Débit qui, combiné à la Direction et à la Diffusion, détermine la Distance ».', s: 'cinqd' },
    { q: 'La puissance d’extinction d’une lance est la combinaison :', c: ['Du débit et du temps d’application', 'De la pression et du diamètre du tuyau', 'De la portée et de l’angle du jet', 'Du nombre de lances et de la pression'], e: 'La capacité d’absorption calorifique (puissance d’extinction) combine débit et temps d’application.', s: 'role' },
    { q: 'Quel jet est préconisé pour protéger le binôme d’un rayonnement important ?', c: ['Le jet diffusé de protection', 'Le jet droit', 'Le jet purge', 'Le jet brisé'], e: 'Le jet diffusé de protection forme un écran hydraulique ; sur la LDV MAT/10 son angle est de 130°.', s: 'jets' },
    { q: 'Le jet purge est utilisé principalement :', c: ['En phase de déblai, à faibles débits', 'Pour l’attaque massive à distance', 'Pour refroidir les fumées', 'Pour ventiler un volume'], e: 'Grosses gouttes, refroidissement direct des matériaux, surtout en déblai, afin de maîtriser l’accumulation d’eau.', s: 'jets' },
    { q: 'Angle du jet diffusé d’attaque sur la LDV du SDIS 51 :', c: ['15 à 45°', '130°', '60°', '90°'], e: 'Fiche MAT/10 : jet diffusé d’attaque de 15 à 45° (position tactile + bossage), jet de protection de 130°.', s: 'jets' },
    { q: 'Quel jet est « généralement consommateur d’eau » ?', c: ['Le jet droit', 'Le jet diffusé de protection', 'Le jet purge', 'Le jet diffusé d’attaque'], e: 'Tableau du livret : le jet droit est généralement consommateur d’eau, le débit influant sur la distance projetée.', s: 'jets' }
  ]
});

/* ======================================================================= 3. LDV ET LANCES SPÉCIALES */
VSAV.chap({
  id: 'inc-ldv', part: 'inc', seq: INC3,
  title: 'Les lances à eau du SDIS 51 et les lances spéciales', short: 'LDV et lances spéciales', motif: 'drop',
  sources: [LIV + ', § 2.3.1 Les lances à eau (fiche MAT/10, p. 27-29, 31)', GIM + ', « Les L.D.V du S.D.I.S 51 » et « Les lances spéciales »', 'GTO Établissements et techniques d’extinction (2018), § lance canon / queue de paon'],
  summary: 'La lance à diffuseur mixte réglable stabilisée (DMRS), la LDV à boisseau sphérique, et les lances spéciales du FPT.',
  why: '<b>Pourquoi un boisseau coulissant et un déflecteur ?</b> Ils maintiennent une <b>pression relativement constante à l’orifice</b> quel que soit le débit : le porte-lance garde un jet efficace et sa portée même lorsqu’il ouvre partiellement la lance. « Tout se passe comme si le porte-lance était en possession des commandes de la pompe. »',
  sections: [
    { id: 'dmrs', t: 'La lance DMRS (fiche MAT/10)', ic: 'drop', src: LIV + ', fiche MAT/10, p. 27-28',
      html: '<div class="tw"><table><tbody>' +
        '<tr><th>Type</th><td>Lance à diffuseur mixte réglable et pression stabilisée, type OPTRAMATIC 500</td></tr>' +
        '<tr><th>Pression d’utilisation</th><td><b>6 bars</b></td></tr><tr><th>Débits disponibles</th><td><b>0 à 500 l/min</b></td></tr>' +
        '<tr><th>Sélecteur de jets</th><td>Jet droit, jet diffusé d’attaque, jet diffusé de protection et purge</td></tr>' +
        '<tr><th>Sécurité</th><td>Mode basse pression en cas de sous-alimentation</td></tr>' +
        '<tr><th>Raccord</th><td>Raccord tournant DSP 40 à verrou PN25</td></tr>' +
        '<tr><th>Affectation</th><td>4 lances par FPT, FPTHR et FPTGP pour les CSP mixtes ; 1 lance par FPT, FPTHR, FPTL pour les autres centres</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Sélecteur de mode</b> (3 positions) : <b>Régulation 6 bars</b> (500 l/min à 6 bars à la lance) ; <b>Basse pression</b> (conserve la qualité des jets lorsque la pression est inférieure à 6 bars) ; <b>Purge</b> (noyage, évacuation d’un corps étranger).</p>' +
        '<p><b>Maintenance</b> : nettoyer si besoin à l’eau et au savon ; <b>rincer à l’eau claire après utilisation en eau dopée</b> ; remiser la lance en position jet droit.</p>',
      figs: [{ img: 'img/inc/2/ldv-dmrs.jpg', cap: 'Description de la LDV DMRS', txt: '<p>Poignée de manœuvre (ouverture/fermeture et réglage du débit en mode régulation 6 bars), poignée de préhension, raccord d’entrée orientable, sélecteur de mode, sélecteur de jet et manchon denté pour une diffusion pleine.</p>', src: LIV + ', fiche MAT/10, p. 27' }] },
    { id: 'boisseau', t: 'Boisseau coulissant et déflecteur', ic: 'molecule', src: LIV + ', p. 29 ; ' + GIM + ', « L.D.V à boisseau coulissant »',
      html: '<p>La poignée commande un <b>boisseau coulissant</b> qui contrôle le débit selon son ouverture, comme un deuxième ajutage. Il ne provoque <b>ni turbulence ni perte de charge significative</b> (flux laminaire), n’est pas affecté par la pression (pas de blocage) et <b>diminue les coups de bélier</b>.</p>' +
        '<p>La pression de l’eau pousse le <b>déflecteur</b>, au centre de la tête de diffusion, contre un ressort : il fait varier la surface de l’ajutage et maintient une pression relativement constante à l’orifice quel que soit le débit. Selon le Guide, « une ouverture partielle de la lance n’aura aucun impact sur la qualité du jet et la portée restera efficace ».</p>' +
        '<p>La DMRS possède une <b>double régulation</b> : le sélecteur, sur le déflecteur, permet de passer d’une régulation standard à une <b>basse pression de sécurité de 3 bars</b> ; en cas de chute de pression, portée et qualité du jet sont préservées, mais le débit diminue.</p>',
      figs: [
        { img: 'img/inc/2/ldv-deflecteur.jpg', cap: 'Principe du déflecteur', txt: '<p>L’eau pousse le déflecteur, le ressort le rappelle : l’ajutage s’ouvre ou se ferme selon le débit, et la pression à l’orifice reste stable.</p>', src: GIM + ' ; ' + LIV + ', p. 29' },
        { img: 'img/inc/2/ldv-boisseau.jpg', cap: 'Boisseau coulissant : ouverture à 50 % et à 100 %', txt: '<p>En manœuvrant la poignée, le boisseau recule plus ou moins et augmente la surface de passage de l’eau.</p>', src: GIM + ', vues en coupe' }] },
    { id: 'comparaison', t: 'LDV à boisseau sphérique ou coulissant', ic: 'grid', src: GIM + ', « Les L.D.V du S.D.I.S 51 »',
      html: '<div class="tw"><table><thead><tr><th></th><th>LDV à boisseau sphérique</th><th>LDV à boisseau coulissant</th></tr></thead><tbody>' +
        '<tr><th>Équipement</th><td>Tête de diffusion, poignée ouverture/fermeture, bague de réglage du débit (4 positions)</td><td>Tête de diffusion (clic de repérage du jet diffusé d’attaque), poignée à réglage de débit, stabilisateur de pression, raccord DSP 40 avec filtre</td></tr>' +
        '<tr><th>Pression à l’orifice</th><td>6 bars</td><td>6,8 bars</td></tr>' +
        '<tr><th>Débits</th><td>100, 250, 350, 475 l/min</td><td>40 à 500 l/min</td></tr>' +
        '<tr><th>Portée max (jet droit)</th><td>40 m</td><td>40 m</td></tr>' +
        '<tr><th>Indications</th><td>Feu en espace ouvert ; eau ou eau dopée ; mousse avec adaptateurs. Utilisable en clos/semi-ouvert, mais la LDV à boisseau coulissant est à privilégier.</td><td>Incendies en volume clos ou semi-ouvert ; attaque par impulsion ; crayonnage</td></tr>' +
        '<tr><th>Contre-indications</th><td>Pression supérieure à 6 bars (recul sans gain de performance) ; robinet partiellement ouvert (sauf purge)</td><td>Cône poly-mousse ; pression inférieure à 7 bars</td></tr>' +
        '</tbody></table></div>' +
        '<p>Le Guide cite aussi une « autre LDV » à boisseau coulissant avec tromblon pour la mousse (6 bars, 150 à 500 l/min, portée 44 m) et des <b>LDV de diamètre 70</b> offrant <b>200 à 950 l/min</b>.</p>' +
        '<div class="callout warn"><b>Divergence.</b> Pour la lance à boisseau coulissant, le livret (fiche MAT/10) indique 6 bars, 0 à 500 l/min et un mode basse pression ; le Guide indique 6,8 bars à l’orifice, 40 à 500 l/min et contre-indique l’emploi sous 7 bars. Les deux documents ne décrivent pas forcément le même modèle : se référer à la fiche du matériel en dotation.</div>',
      figs: [{ img: 'img/inc/2/ldv-spherique.jpg', cap: 'LDV à boisseau sphérique', txt: '<p>Dispositif d’ouverture/fermeture, réglage du débit, formation du jet, déflecteur ; le déflecteur avance ou recule selon la position voulue.</p>', src: GIM }] },
    { id: 'emploi', t: 'Emploi, surveillance et contrôle', ic: 'check', src: GIM + ', « Évolution – surveillance » et « Entretien »',
      html: '<ul class="check"><li>En attente, poser la lance <b>sur sa poignée</b> (robinet) pour protéger la tête de diffusion des chocs.</li>' +
        '<li>Ne pas l’exposer inutilement aux rayonnements ; la ranger dès qu’elle n’est plus en eau.</li>' +
        '<li>Par sécurité, <b>fermer la lance lors des déplacements</b>.</li><li>Risque de gel : laisser la lance <b>légèrement ouverte</b>.</li>' +
        '<li>Un jet déformé se corrige à tout moment par la <b>purge</b> (élimination des débris bloqués dans la tête).</li>' +
        '<li>Rincer après utilisation d’additif ; vérifier la présence et la propreté du filtre (boisseau coulissant).</li></ul>' +
        '<p><b>Contrôle périodique</b> : lance connectée à un tuyau de 45 mm de 20 m établi à l’horizontale et le plus droit possible, sur un débitmètre (la sortie des Caméléon permet la lecture du débit) ; pression de refoulement réglée à <b>7,5 bars</b> pour la LDV à boisseau sphérique et à <b>10 bars</b> pour la LDV à boisseau coulissant.</p>' },
    { id: 'speciales', t: 'Les lances spéciales', ic: 'star', src: GIM + ', « Les lances spéciales » ; ' + LIV + ', p. 31 ; GTO Établissements (2018)',
      html: '<div class="tw"><table><thead><tr><th>Lance</th><th>Rôle</th><th>Caractéristiques</th></tr></thead><tbody>' +
        '<tr><td><b>Lance rideau d’eau</b> (queue de paon)</td><td>Créer un rideau d’eau pour empêcher les vapeurs toxiques d’un produit dangereux de progresser sous le vent ; selon le GTO, rideau d’eau face à un flux thermique.</td><td>Diamètre 40 : 500 l/min selon pression ; à 6 bars, jet de 6 m de haut et 28 m de large ; pression nominale 16 bars, épreuve 25 bars. <b>Pas de réserve en boucle</b> sur le tuyau qui l’alimente : la mise en pression ferait bouger le dispositif.</td></tr>' +
        '<tr><td><b>Lance feu de cheminée</b></td><td>Se raccorde au tuyau de la LDT pour pulvériser un brouillard d’eau dans le conduit.</td><td>25 l/min à 6 bars ; diffusion à 60° ; raccord GFR 20 tournant ; robinet à boisseau sphérique ; nominale 16 bars, épreuve 25,5 bars.</td></tr>' +
        '<tr><td><b>Lance canon portable</b></td><td>Selon le GTO : attaque en masse d’un incendie sur une surface importante (notamment couper une propagation entre deux bâtiments).</td><td>Établie sur une ligne de Ø 70 à l’aide d’un dévidoir (ou 110 mm sur dévidoir automobile). Fiche détaillée : classeur opérationnel SDIS 51, partie 2.</td></tr>' +
        '</tbody></table></div>',
      figs: [{ img: 'img/inc/2/lances-speciales.jpg', cap: 'Lance rideau d’eau et lance feu de cheminée', txt: '<p>À gauche, la queue de paon (plaque qui dirige l’écran d’eau) ; à droite, la lance feu de cheminée à long tube coudé.</p>', src: GIM }] }
  ],
  key: ['DMRS : 6 bars, 0 à 500 l/min, raccord DSP 40 (fiche MAT/10).', 'Sélecteur de mode : régulation 6 bars, basse pression, purge.', 'Basse pression de sécurité : 3 bars (débit réduit, jet conservé).', 'Boisseau coulissant : pas de perte de charge, moins de coups de bélier.', 'En attente, lance posée sur sa poignée ; fermée pendant les déplacements ; entrouverte s’il gèle.', 'LDV 70 : 200 à 950 l/min.', 'Queue de paon : 6 m × 28 m à 6 bars, pas de réserve en boucle.'],
  traps: ['Pousser la LDV à boisseau sphérique au-delà de 6 bars : plus de recul, aucune performance en plus.', 'Oublier de rincer la lance après une utilisation en eau dopée.', 'Faire une réserve en boucle sur l’alimentation d’une lance rideau d’eau.'],
  quiz: [
    { q: 'Pression d’utilisation de la lance DMRS selon la fiche MAT/10 :', c: ['6 bars', '3 bars', '10 bars', '16 bars'], e: 'Fiche MAT/10 : pression d’utilisation 6 bars, débits de 0 à 500 l/min. Attention, le Guide indique 6,8 bars pour sa LDV à boisseau coulissant.', s: 'dmrs' },
    { q: 'À quoi sert le mode « basse pression » de la DMRS ?', c: ['Conserver la qualité des jets lorsque la pression est inférieure à 6 bars', 'Augmenter le débit au-delà de 500 l/min', 'Purger la lance', 'Produire de la mousse'], e: 'En cas de sous-alimentation, la régulation passe sur une basse pression de sécurité de 3 bars : le débit baisse mais la portée et la qualité du jet sont préservées.', s: 'dmrs' },
    { q: 'Quel est l’intérêt du boisseau coulissant ?', c: ['Régler le débit sans turbulence ni perte de charge et limiter les coups de bélier', 'Augmenter la pression à l’orifice', 'Filtrer l’eau', 'Remplacer la pompe'], e: 'Le flux reste laminaire dans toutes les positions ; la manœuvre n’est pas affectée par la pression et diminue les coups de bélier.', s: 'boisseau' },
    { q: 'En attente, comment pose-t-on une LDV ?', c: ['Sur sa poignée d’ouverture/fermeture', 'Sur la tête de diffusion', 'Debout sur le raccord', 'Dans le tuyau'], e: 'Poser la lance sur sa poignée protège la tête de diffusion d’éventuels chocs.', s: 'emploi' },
    { q: 'Par risque de gel, la lance doit être :', c: ['Laissée légèrement ouverte', 'Fermée complètement', 'Démontée', 'Mise en mode purge et fermée'], e: 'Guide d’instruction : en cas de risque de gel, laisser la lance légèrement ouverte.', s: 'emploi' },
    { q: 'Débit des LDV de diamètre 70 citées par le Guide :', c: ['200 à 950 l/min', '0 à 500 l/min', '40 à 500 l/min', '25 l/min'], e: 'Le Guide mentionne des LDV en diamètre 70 offrant 200 à 950 l/min.', s: 'comparaison' },
    { q: 'Pourquoi ne fait-on pas de réserve en boucle sur le tuyau d’une lance rideau d’eau ?', c: ['La mise sous pression ferait bouger le dispositif', 'Cela réduit la hauteur du rideau', 'Le tuyau risque de geler', 'Cela empêche la purge'], e: 'La pression de l’eau ferait bouger la lance au moment de la mise en eau de l’établissement.', s: 'speciales' }
  ]
});

/* ======================================================================= 4. TUYAUX */
VSAV.chap({
  id: 'inc-tuyaux', part: 'inc', seq: INC3,
  title: 'Les tuyaux', short: 'Tuyaux', motif: 'wave',
  sources: [LIV + ', § 2.4 Les tuyaux (p. 33-34)', GIM + ', « Les tuyaux »', 'GDR Tuyaux en écheveaux (SDIS 51, 2018), § II', 'GTO Établissements et techniques d’extinction (2018), § 2 Choix des tuyaux'],
  summary: 'Alimentation, refoulement, aspiration : diamètres, longueurs, conditionnements, règles d’emploi et précautions.',
  why: '<b>Pourquoi tant de soin avec un simple tuyau ?</b> C’est lui qui amène l’eau à la lance : une fuite, un pli ou un coude brusque, et la pression chute au point d’attaque, là où le binôme en a besoin. Le bon diamètre, le bon conditionnement et les bons gestes font gagner du temps et protègent l’établissement.',
  sections: [
    { id: 'categories', t: 'Trois catégories de tuyaux', ic: 'list', src: LIV + ', § 2.4 § 1, p. 33',
      html: '<ul class="check"><li><b>Alimentation</b> : de la prise d’eau (BI, PI) vers l’engin-pompe.</li><li><b>Refoulement</b> : de la pompe aux lances.</li><li><b>Aspiration</b> : alimentent la pompe par aspiration depuis un point d’eau.</li></ul>' +
        '<p>On distingue les tuyaux <b>souples</b> et <b>semi-rigides</b>. Un tuyau se désigne par son <b>diamètre nominal</b> et sa <b>longueur</b> : un tuyau de 70 mm de 20 m se dit « <b>tuyau de 70, 20 mètres</b> ».</p>' +
        '<div class="tw"><table><thead><tr><th>Classification</th><th>Ø nominal (mm)</th><th>Longueur (m)</th><th>Type</th></tr></thead><tbody>' +
        '<tr><td rowspan="2"><b>Alimentation</b></td><td>110</td><td>20</td><td>Souple</td></tr><tr><td>70</td><td>40 et 20</td><td>Souple</td></tr>' +
        '<tr><td rowspan="4"><b>Refoulement</b></td><td>110</td><td>40</td><td>Souple</td></tr><tr><td>70</td><td>40 et 20</td><td>Souple</td></tr><tr><td>45</td><td>20</td><td>Souple</td></tr><tr><td>20</td><td>20</td><td>Semi-rigide</td></tr>' +
        '<tr><td rowspan="3"><b>Aspiration</b></td><td>100</td><td>2 ; 4 et 5</td><td>Semi-rigide</td></tr><tr><td>65</td><td>4</td><td>Semi-rigide</td></tr><tr><td>40</td><td>4</td><td>Semi-rigide</td></tr>' +
        '</tbody></table></div>' +
        '<p>Le Guide précise : tuyaux d’aspiration en toile caoutchoutée renforcée d’une <b>spire métallique</b> pour ne pas s’aplatir lors de la mise en aspiration ; au FPT, diamètres 22 (LDT semi-rigide), 45 et 70 mm au refoulement, 70 et 110 mm à l’alimentation ; longueurs de 20 m pour les petits tuyaux (22 et 45) et de 20 et 40 m pour les gros (70, 110).</p>' +
        '<div class="callout warn"><b>Divergences.</b> Longueur des tuyaux d’aspiration : le livret donne 2, 4 ou 5 m (Ø 100) et 4 m (Ø 65 et 40) ; le Guide et le GTO indiquent « en général 2 mètres ». Diamètre des tuyaux semi-rigides de la LDT : 20 mm dans le tableau du livret, 22 mm dans le Guide, 25 ou 33 mm (et plus loin 23 ou 33 mm) dans le GTO.</div>',
      figs: [{ img: 'img/inc/2/tuyaux-types.jpg', cap: 'Tuyaux d’alimentation, de refoulement et d’aspiration', txt: '<p>Pastille verte : alimentation ; jaune : refoulement ; bleue : aspiration (semi-rigides). Les tuyaux souples jaunes servent à l’alimentation et au refoulement ; le tuyau rouge roulé est un semi-rigide de refoulement.</p>', src: LIV + ', p. 33' }] },
    { id: 'conditionnement', t: 'Les conditionnements', ic: 'grid', src: 'GTO Établissements (2018), § 2 ; ' + GIM,
      html: '<p>Selon le GTO, le conditionnement dans l’engin peut être :</p><ul class="check"><li>tuyaux semi-rigides non pliés (aspiraux rangés dans des coffres) ;</li><li>tuyaux semi-rigides enroulés sur un dévidoir (LDT) ;</li><li>tuyaux souples roulés sur eux-mêmes <b>en couronne</b> ;</li><li>tuyaux souples roulés <b>en « O »</b> (libres, en sac) ;</li><li>tuyaux souples pliés <b>en écheveaux</b> (en coffres, paniers, sac, libres) ;</li><li>tuyaux souples roulés sur un dévidoir (tournant ou mobile).</li></ul>' +
        '<p>Plus le diamètre est important, plus le débit peut être élevé et les pertes de charge faibles : les gros diamètres servent aux débits importants et/ou aux établissements longs.</p>',
      figs: [{ img: 'img/inc/2/tuyaux-conditionnement.jpg', cap: 'Conditionnements rencontrés sur les engins', txt: '<p>Tuyaux en couronne, pré-connectés, épaulés (Z et O), roulés sur dévidoir (22, 45 et 70), avec le rappel des règles : peu de tuyaux, pas d’enchevêtrement ni de torsions, réserve au point d’attaque, bordure des trottoirs, DFT pour couper une rue.</p>', src: GIM }] },
    { id: 'couronne', t: 'Établir des tuyaux en couronne', ic: 'road', src: LIV + ', § 2.4 § 2-3, p. 34',
      html: '<p>Un établissement est la disposition donnée aux tuyaux pour amener l’eau d’une prise d’eau au point d’attaque. Trois possibilités :</p>' +
        '<div class="tw"><table><thead><tr><th>Établissement</th><th>Situation</th><th>Longueur à compter</th></tr></thead><tbody>' +
        '<tr><td><b>Horizontal</b></td><td>Sol sensiblement plat ou plancher</td><td>—</td></tr>' +
        '<tr><td><b>Vertical</b></td><td>Cage d’escalier (jour), long d’un mur ou d’une échelle</td><td><b>3 à 4 m par étage</b></td></tr>' +
        '<tr><td><b>Rampant</b></td><td>Suit le cheminement d’un escalier</td><td><b>6 à 8 m par étage</b></td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Règles d’emploi</b> :</p><ul class="check"><li>Faire une <b>grande réserve en boucle</b> au point d’attaque ou à la division.</li><li>Dérouler du <b>point d’attaque vers la prise d’eau</b> désignée par le chef d’agrès (dos au feu).</li><li>Dérouler de bas en haut (avec une commande) ou de haut en bas (dans le jour d’une cage d’escalier).</li><li>Disposer les tuyaux le plus près possible des trottoirs ; le moins de tuyaux possible, par le chemin le plus court ; éviter l’enchevêtrement.</li><li>Éviter de couper les rues ; sinon tuyaux <b>perpendiculaires au trottoir</b> et dispositifs de franchissement (<b>DFT</b>).</li><li>Éviter torsions, plis et coudes brusques, surtout aux angles des murs.</li></ul>' },
    { id: 'precautions', t: 'Précautions d’emploi', ic: 'alert', src: LIV + ', § 2.4 § 4, p. 34',
      html: '<ul class="check"><li>Ne pas les laisser reposer sur des décombres brûlants, coupants ou pointus.</li><li><b>Ne pas marcher dessus</b>, même pour les rouler.</li><li>Ne pas heurter les raccords à des objets durs.</li><li>Ne pas les rouler ni les plier quand ils sont <b>gelés</b>.</li><li>Attention aux coudes et angles de murs lors des déplacements.</li><li>Les rouler et les mettre à l’abri dès qu’ils ne servent plus.</li><li>Manœuvrer <b>doucement</b> robinets et vannes : éviter les <b>coups de bélier</b>.</li><li>En période de gel, laisser les lances partiellement ouvertes.</li><li>Abriter le plus possible les tuyaux des chutes de matériaux.</li></ul>' },
    { id: 'echeveaux', t: 'Les tuyaux en écheveaux', ic: 'list', src: 'GDR Tuyaux en écheveaux (SDIS 51), § I.5.3 et II',
      html: '<p>Un écheveau est « un assemblage de fils repliés plusieurs fois sur eux-mêmes et liés afin qu’ils ne s’emmêlent pas » : on regroupe sous ce terme les tuyaux <b>pré-connectés ou épaulés</b> sous différents modes de pliage (Ø 45/20 m en « Z » et en « O », Ø 70/20 m en « Z » épaulés ou lovés en caisse, Ø 110 lovés en « Z » en coffre).</p>' +
        '<p><b>Avantages</b> : établissement du point d’attaque vers la prise d’eau, mais aussi de la prise d’eau vers le point d’attaque ; durée d’établissement réduite ; matériel et effort mieux répartis entre chef et équipier ; mains libres ; meilleure ergonomie ; gain physiologique avant l’attaque ; binôme non dissocié.</p>' +
        '<div class="tw"><table><thead><tr><th>Porteur</th><th>Matériel de base</th></tr></thead><tbody>' +
        '<tr><td>Chef BAT</td><td>1 tuyau Ø 45 plié en O avec 1 LDMRS, projecteur, ARI, radio (option), outils de forcement</td></tr>' +
        '<tr><td>Équipier BAT</td><td>2 tuyaux Ø 45 pliés en Z, commande, ARI, caméra thermique</td></tr>' +
        '<tr><td>Chef BAL</td><td>1 tuyau Ø 70/20 plié en Z avec division 65/2×40, matériels sur ordre, projecteur, radio (option)</td></tr>' +
        '<tr><td>Équipier BAL</td><td>2 tuyaux Ø 70/20 pliés en Z, matériels sur ordre, projecteur, commande</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Reconditionnement</b> : bien vider l’eau résiduelle (le pliage ne l’évacue pas, contrairement au roulage) ; bien serrer pour limiter l’air ; privilégier des tuyaux secs ; vérifier sangle et mousqueton de la division d’attaque. Pliage en « Z » à genoux, dos droit, la longueur étant mesurée avec le manche de la hache à tête plate ; chaque extrémité doit porter un demi-raccord.</p>' },
    { id: 'entretien', t: 'Entretien des tuyaux', ic: 'check', src: GIM + ', « Les tuyaux – entretien »',
      steps: ['Repérer et signaler toute anomalie ou fuite.', 'Savonner, brosser et rincer à grande eau l’enveloppe extérieure (boue, poussière, végétaux, graviers…).', 'Éprouver les tuyaux jusqu’à leur pression d’épreuve.', 'Maintenir la pression environ 1 minute et repérer les fuites.', 'Vider les tuyaux et les faire sécher.', 'Une fois secs, rouler les tuyaux sur eux-mêmes.'], stepsTitle: 'Reconditionner un tuyau' }
  ],
  key: ['Alimentation : prise d’eau → engin ; refoulement : pompe → lances ; aspiration : point d’eau → pompe.', 'On désigne un tuyau par diamètre et longueur : « tuyau de 70, 20 mètres ».', 'Vertical : 3 à 4 m par étage ; rampant : 6 à 8 m par étage.', 'Dérouler du point d’attaque vers la prise d’eau, réserve en boucle au point d’attaque.', 'Couper une rue : tuyaux perpendiculaires au trottoir + DFT.', 'Manœuvrer doucement vannes et robinets (coups de bélier).'],
  traps: ['Marcher sur un tuyau « juste pour le rouler ».', 'Inverser vertical et rampant : le rampant suit l’escalier et demande deux fois plus de tuyau.', 'Plier un tuyau en écheveau encore plein d’eau.'],
  quiz: [
    { q: 'Combien de tuyau compte-t-on par étage pour un établissement rampant ?', c: ['6 à 8 m', '3 à 4 m', '10 à 12 m', '20 m'], e: 'Rampant (suit l’escalier) : 6 à 8 m par étage ; vertical (jour d’escalier, façade) : 3 à 4 m.', s: 'couronne' },
    { q: 'Les tuyaux de refoulement transportent l’eau :', c: ['De la pompe aux lances', 'Du poteau d’incendie à l’engin', 'D’un point d’eau naturel à la pompe', 'De la citerne à la pompe'], e: 'Alimentation = prise d’eau vers l’engin ; refoulement = pompe vers lances ; aspiration = point d’eau vers pompe.', s: 'categories' },
    { q: 'Dans quel sens déroule-t-on les tuyaux en couronne ?', c: ['Du point d’attaque vers la prise d’eau', 'De la prise d’eau vers le point d’attaque', 'Peu importe', 'De l’engin vers la prise d’eau uniquement'], e: 'Livret : dérouler du point d’attaque vers la prise d’eau désignée par le chef d’agrès (dos au feu).', s: 'couronne' },
    { q: 'Si un établissement doit couper une rue :', c: ['Tuyaux perpendiculaires au trottoir et DFT', 'Tuyaux en diagonale', 'Tuyaux le long du caniveau sans protection', 'Réserve en boucle sur la chaussée'], e: 'Éviter de couper les rues ; sinon disposer les tuyaux perpendiculairement au trottoir et utiliser les dispositifs de franchissement de tuyaux.', s: 'couronne' },
    { q: 'Pourquoi les tuyaux d’aspiration sont-ils semi-rigides ?', c: ['Pour ne pas s’aplatir lors de la mise en aspiration', 'Pour être plus légers', 'Pour résister au gel', 'Pour se plier en écheveau'], e: 'Ils sont renforcés d’une spire métallique pour ne pas s’aplatir sous la dépression.', s: 'categories' },
    { q: 'Lors de l’entretien, on maintient la pression d’épreuve pendant :', c: ['Environ 1 minute', '10 secondes', '15 minutes', '1 heure'], e: 'Guide d’instruction : maintenir la pression pendant 1 minute environ et repérer les fuites.', s: 'entretien' },
    { q: 'Quel est un avantage des tuyaux en écheveaux ?', c: ['Le binôme n’est pas dissocié pendant l’établissement', 'On n’a plus besoin de division', 'Les tuyaux n’ont plus de raccords', 'Ils se remettent en place sans les vider'], e: 'GDR : durée réduite, effort réparti, mains libres, gain physiologique, non-dissociation du binôme…', s: 'echeveaux' }
  ]
});

/* ======================================================================= 5. DÉVIDOIRS */
VSAV.chap({
  id: 'inc-devidoirs', part: 'inc', seq: INC3,
  title: 'Les dévidoirs', short: 'Dévidoirs', motif: 'reset',
  sources: [LIV + ', § 2.5 Les dévidoirs (p. 35-37)', GIM + ', « Les dévidoirs »', 'GTO Établissements et techniques d’extinction (2018), § 3.4 LDT'],
  summary: 'Tournants, auxiliaires, mobiles, automobiles : stocker et dérouler beaucoup de tuyaux, vite.',
  why: '<b>Pourquoi des dévidoirs ?</b> Dérouler un à un, à la main, des centaines de mètres de tuyaux serait long et fastidieux. Le dévidoir stocke plusieurs tuyaux et permet de les dérouler <b>en nombre, facilement et rapidement</b> : un temps précieux gagné sur l’incendie.',
  sections: [
    { id: 'types', t: 'Les quatre types de dévidoirs', ic: 'grid', src: LIV + ', § 2.5, p. 35-37',
      html: '<div class="tw"><table><thead><tr><th>Dévidoir</th><th>Description</th><th>Armement</th><th>Engins</th></tr></thead><tbody>' +
        '<tr><td><b>Tournant</b></td><td>Fixé à l’arrière des engins-pompes, directement alimenté par la pompe : établissement facile et rapide</td><td>Longueur totale : <b>40 m</b></td><td>FPT, CCR, CCF</td></tr>' +
        '<tr><td><b>Auxiliaire</b></td><td>Fixé à l’arrière ou dans un coffre ; établissement rapide pour les engins d’attaque</td><td>Plusieurs tuyaux de <b>45 mm × 20 m</b>, le dernier muni d’une lance et parfois d’une vanne d’arrêt ; <b>60 à 120 m</b> au total</td><td>CCR, CCF</td></tr>' +
        '<tr><td><b>Mobile</b></td><td>Tiré en marchant ou en courant ; situé à l’arrière des véhicules</td><td><b>5 tuyaux de 70 mm × 40 m</b> = <b>200 m</b>, puis une <b>division mixte</b> sur le dernier tuyau</td><td>FPT (la plupart des engins d’incendie)</td></tr>' +
        '<tr><td><b>Automobile</b></td><td>Alimentation des établissements de longue distance ou des engins éloignés des hydrants et points d’eau</td><td>Équipé d’une <b>motopompe remorquable</b></td><td>Voir les engins</td></tr>' +
        '</tbody></table></div>',
      figs: [{ img: 'img/inc/2/devidoirs.jpg', cap: 'Dévidoir tournant, dévidoir mobile, dévidoir fixe à bobine', txt: '<p>De gauche à droite : le dévidoir tournant en coffre arrière, le dévidoir mobile à bobine (70) et le dévidoir fixe à bobine armé en 45.</p>', src: GIM }] },
    { id: 'fpt', t: 'Les dévidoirs du FPT (SDIS 51)', ic: 'car', src: GIM + ', « Les dévidoirs »',
      html: '<p>Les véhicules d’incendie disposent de deux à trois types de dévidoirs : <b>1 dévidoir tournant</b>, <b>2 dévidoirs mobiles à bobine (70)</b>, <b>1 dévidoir fixe à bobine (45)</b> sur certains véhicules.</p>' +
        '<ul class="check"><li><b>Dévidoir tournant</b> : équipe la grande majorité des engins-pompes ; armé de <b>deux tuyaux semi-rigides de 20 m</b>, plus une longueur de <b>2 m</b> qui relie les tuyaux à la ligne de refoulement fixe de la pompe.</li>' +
        '<li><b>Dévidoir mobile à bobine</b> : se détache et est tiré par le personnel d’alimentation ; modèle courant armé de <b>200 m de tuyaux souples de 70 mm (5 × 40 m)</b> ; un support soudé sur la traverse reçoit à demeure une <b>division mixte 65/65-2×40</b>. Éléments : demi-cadre, roues, frein, fourchette, support de division, bobine, flasques.</li>' +
        '<li><b>Dévidoir fixe à bobine</b> : armé de tuyaux de 45, il permet d’établir rapidement une ligne d’attaque.</li></ul>' +
        '<div class="callout warn"><b>LDT : longueurs différentes selon les sources.</b> Le livret indique 40 m pour le dévidoir tournant, le Guide 2 × 20 m + 2 m de liaison, et le GTO décrit la lance du dévidoir tournant (LDT) comme 40 à 80 m de tuyaux semi-rigides, maintenus en eau en permanence (sauf hivernage si nécessaire).</div>' },
    { id: 'rouler', t: 'Rouler un dévidoir mobile', ic: 'team', src: LIV + ', § 2.5, encadré p. 37',
      html: '<p>Manœuvre exécutée par <b>3 sapeurs-pompiers</b>.</p>',
      steps: ['Poser la flèche du dévidoir à terre.', 'Deux sapeurs-pompiers se placent de part et d’autre du dévidoir, les pieds sous les roues.', 'Le troisième place le premier raccord dans l’emplacement prévu.', 'Les deux premiers font tourner la bobine en tirant sur les flasques.', 'Le troisième tire fortement sur le tuyau en le guidant : largeurs bord à bord, sans bosses.', 'Sur les derniers tours du cinquième tuyau, faire chevaucher les largeurs de moitié.', 'À chaque extrémité, laisser une largeur disponible pour intercaler les raccords.', 'Brancher le dernier demi-raccord sur la division et fixer celle-ci sur le demi-cadre.'], stepsTitle: 'Rouler le dévidoir mobile (3 SP)',
      after: '<div class="callout ok">Le Guide ajoute pour les raccords : <b>ne pas leur donner de coups de pied</b> pour les positionner sur un dévidoir à bobine.</div>' }
  ],
  key: ['4 types : tournant, auxiliaire, mobile, automobile.', 'Tournant : alimenté par la pompe, 40 m (livret).', 'Auxiliaire : tuyaux 45 × 20 m, 60 à 120 m, CCR/CCF.', 'Mobile : 5 × 70 mm × 40 m = 200 m + division mixte.', 'Automobile : longues distances, motopompe remorquable.', 'Rouler un dévidoir mobile : 3 SP, pieds sous les roues.'],
  traps: ['Confondre dévidoir mobile (70 mm, 200 m) et dévidoir auxiliaire (45 mm, 60 à 120 m).', 'Positionner les raccords à coups de pied sur la bobine.'],
  quiz: [
    { q: 'Armement d’un dévidoir mobile :', c: ['5 tuyaux de 70 mm × 40 m, soit 200 m, et une division mixte', '2 tuyaux semi-rigides de 20 m', 'Plusieurs tuyaux de 45 × 20 m, 60 à 120 m', '10 tuyaux de 110 × 20 m'], e: 'Livret : 5 tuyaux de 70 × 40 m soit 200 m, puis une division mixte raccordée sur le dernier tuyau.', s: 'types' },
    { q: 'Quel dévidoir est directement alimenté par la pompe ?', c: ['Le dévidoir tournant', 'Le dévidoir mobile', 'Le dévidoir automobile', 'Le dévidoir auxiliaire'], e: 'Le dévidoir tournant, fixé à l’arrière des engins-pompes, est directement alimenté par la pompe.', s: 'types' },
    { q: 'Combien de sapeurs-pompiers pour rouler un dévidoir mobile ?', c: ['3', '2', '4', '1'], e: 'Deux font tourner la bobine (pieds sous les roues), le troisième guide le tuyau.', s: 'rouler' },
    { q: 'Sur les derniers tours du cinquième tuyau, les largeurs doivent :', c: ['Se chevaucher de moitié', 'Être bord à bord', 'Être espacées d’une largeur', 'Être croisées'], e: 'Bord à bord pendant l’enroulement, puis chevauchement de moitié sur les derniers tours du cinquième tuyau.', s: 'rouler' },
    { q: 'Le dévidoir automobile est équipé :', c: ['D’une motopompe remorquable', 'D’une lance canon', 'D’un injecteur mousse', 'D’une échelle à coulisse'], e: 'Il sert aux établissements de longue distance ou à alimenter des engins éloignés des points d’eau, et emporte une motopompe remorquable.', s: 'types' },
    { q: 'Sur quels engins trouve-t-on des dévidoirs auxiliaires ?', c: ['CCR et CCF', 'FPT uniquement', 'EPS et BEA', 'VSAV'], e: 'Livret : les dévidoirs auxiliaires équipent les CCR et les CCF.', s: 'types' }
  ]
});

/* ======================================================================= 6. ENGINS */
VSAV.chap({
  id: 'inc-engins', part: 'inc', seq: INC3,
  title: 'Les engins de lutte contre l’incendie', short: 'Engins', motif: 'car',
  sources: [LIV + ', § 2.6 (renvoi au classeur opérationnel SDIS 51, partie 4)', GIM + ', « La mousse », « Les moyens élévateurs aériens », « Le matériel incendie annexe »', 'GTO Sauvetage et mise en sécurité (DGSCGC), § 2 Moyens élévateurs aériens'],
  summary: 'Ce que le corpus dit de l’engin-pompe (FPT) et de son matériel annexe, et des moyens élévateurs aériens.',
  why: '<b>Pourquoi connaître son engin ?</b> L’équipier doit savoir <b>ce qu’emporte son FPT</b> (eau, émulseur, lances, dévidoirs, matériels) pour sortir le bon matériel sans hésiter et comprendre les possibilités et les limites de l’engin avant l’arrivée des renforts.',
  status: 'partiel', todo: 'Le livret renvoie, pour « Les engins de lutte contre l’incendie », au classeur opérationnel du SDIS 51 (partie 4 : Les engins), absent du corpus : pas de fiches descriptives des FPT, CCF, CCR, FPTGP… Seules les informations dispersées dans le Guide d’instruction et le GTO sont reprises ici.',
  sections: [
    { id: 'limite', t: 'Ce que contient (et ne contient pas) le corpus', ic: 'book', src: LIV + ', § 2.6, p. 38',
      html: '<div class="callout warn">Le livret stagiaire ne décrit pas les engins : il renvoie au <b>classeur opérationnel du SDIS de la Marne, partie 4 « Les engins »</b>. Ce chapitre rassemble seulement ce que les autres documents disent des engins (sigles cités sans définition développée dans les sources : FPT, FPTHR, FPTGP, FPTL, CCR, CCF).</div>' },
    { id: 'fpt', t: 'L’engin-pompe (FPT) : eau, émulseur, matériel', ic: 'car', src: GIM + ', « La mousse » et « Les principaux outils à bord d’un F.P.T » ; ' + LIV + ', § 2.3',
      html: '<p>Les FPT du SDIS 51 peuvent être équipés de :</p><div class="tw"><table><tbody>' +
        '<tr><th>Cuve d’eau</th><td>3 000 litres</td></tr><tr><th>Cuve d’émulseur</th><td>200 litres</td></tr><tr><th>Cuve d’additif</th><td>100 litres</td></tr>' +
        '<tr><th>Dosage intégré</th><td>Système « <b>Caméléon</b> » ou « <b>Caddysis</b> » : la solution moussante est préparée directement dans la pompe, sans injecteur-proportionneur</td></tr>' +
        '<tr><th>Débit d’émulseur</th><td>Caméléon : 24 l/min (au maximum 1 LM 4 ou LDV mousse à 6 %) ; Caddysis : 24 ou 36 l/min (jusqu’à 1 LM 4 et 1 LM 2 à 6 %)</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Matériel cité dans les sources</b> :</p><ul class="check"><li>Extincteurs : 1 CO2 5 kg, 2 poudre 9 kg.</li><li>Dévidoirs : 1 tournant, 2 mobiles à bobine (70), parfois 1 fixe à bobine (45).</li><li>Lances DMRS : 4 par FPT, FPTHR et FPTGP pour les CSP mixtes, 1 par FPT, FPTHR, FPTL pour les autres centres.</li><li>Mousse : LM 2 et générateur moyen foisonnement de 40 dans les FPT ; LM 4 et générateur de 65 dans les FPTGP. Un FPT contient 2 LM 2 ou 1 LM 4 (ou LDV avec tromblon).</li><li>Échelles à main : à coulisse 2 plans grand modèle, à crochets, parisienne (télescopique), de toit.</li></ul>' +
        '<p>Lors d’une intervention pour incendie, le conducteur rend accessibles les échelles de son FPT dès que le chef d’agrès a défini le positionnement de l’engin.</p>' },
    { id: 'annexe', t: 'Matériels annexes embarqués', ic: 'grid', src: GIM + ', « Le matériel incendie annexe »',
      html: '<div class="tw"><table><thead><tr><th>Matériel</th><th>Données du Guide</th></tr></thead><tbody>' +
        '<tr><td><b>Ventilateur thermique</b></td><td>Jusqu’à <b>36 000 m³/h</b> ; moteur 4 temps de 6 cv ; arrêt automatique en cas de basculement ou de manque d’huile. Ventiler pour protéger, désenfumer, ou en l’absence d’installations fixes. Placer sur un sol stable et plat ; pour une porte standard, à une distance égale à la <b>diagonale de la porte</b> (entre <b>0,90 et 6 m</b>) ; inclinaison maximale 20°. <b>Ventilation d’attaque interdite au SDIS 51.</b> Ne pas le placer dans un local clos (gaz d’échappement, CO), ne pas le déplacer moteur tournant.</td></tr>' +
        '<tr><td><b>Ventilateur hydraulique</b> (turbine)</td><td>Soufflage en pression positive ou extraction ; antidéflagrant par nature. Seul : 17 bars → 28 000 m³/h ; avec brumisateur : 10 bars → 13 000 m³/h ; en extraction avec gaine : 3 120 m³/h. Ne jamais l’alimenter en solution moussante ni inverser alimentation/retour ; mettre la turbine à la terre.</td></tr>' +
        '<tr><td><b>Stoppeur de fumée</b></td><td>Équipe les moyens aériens ; agit sur les fumées, le foyer et l’engagement des binômes ; 70 cm à 1,15 m ; résiste à 600 °C ; ne pas le mettre au contact des flammes ; rincer et sécher après usage.</td></tr>' +
        '<tr><td><b>Lot feu de cheminée</b></td><td>Accéder au bouchon de suies et le traiter : seau à débris, gants anti-chaleur, rallonges, seau-pompe, massette, burin, pelle, chaîne et boulet, rétroviseur, hérissons. Attention aux dégâts occasionnés.</td></tr>' +
        '</tbody></table></div>',
      figs: [
        { img: 'img/inc/2/ventilateurs.jpg', cap: 'Ventilateur thermique et ventilateur hydraulique', txt: '<p>À gauche, le ventilateur thermique sur roues ; à droite, la turbine hydraulique avec son dispositif venturi-brumisateur.</p>', src: GIM },
        { img: 'img/inc/2/annexes.jpg', cap: 'Stoppeur de fumée et lot feu de cheminée', txt: '<p>Le stoppeur se fixe dans l’encadrement d’une porte ; le lot feu de cheminée regroupe hérissons, rallonges, seau-pompe et outils.</p>', src: GIM }] },
    { id: 'mea', t: 'Les moyens élévateurs aériens (MEA)', ic: 'mountain', src: GIM + ', « Les moyens élévateurs aériens » ; GTO Sauvetage et mise en sécurité, § 2',
      html: '<p><b>Missions</b> : sauvetages et mises en sécurité dans les étages lorsque les communications existantes ne sont plus praticables, attaque de feu, itinéraire de secours, évacuations sanitaires, reconnaissance d’appartement, pont à tuyaux, opérations diverses.</p>' +
        '<p><b>Au SDIS 51</b> : échelle pivotante séquentielle (<b>EPS</b>) 32 m, échelle pivotante combinée (<b>EPC</b>) 33 m, bras élévateur aérien (<b>BEA</b>) 32 m.</p>' +
        '<p><b>Atteintes normalisées</b> (GTO) :</p><div class="tw"><table><thead><tr><th>Échelle</th><th>Hauteur verticale</th><th>Portée</th></tr></thead><tbody>' +
        '<tr><td>EPS 18 m</td><td>18 m</td><td>3 m</td></tr><tr><td>EPS 24 m</td><td>23,50 m</td><td>6 m</td></tr><tr><td>EPS 30 m</td><td>28 m</td><td>10 m</td></tr></tbody></table></div>' +
        '<p>Terminologie : <b>hauteur</b> (du sol au dernier échelon), <b>portée théorique</b> (du dernier échelon ou du panier au point le plus saillant du véhicule), <b>angle de dressage</b> ; la <b>charge par personne</b> est calculée sur 90 kg. Les bras élévateurs (BEAA ou CBEA) peuvent être articulés et/ou télescopiques.</p>',
      figs: [{ img: 'img/inc/2/mea.jpg', cap: 'Échelle pivotante et bras élévateur aérien', txt: '<p>À gauche, une échelle pivotante ; à droite, un bras élévateur aérien articulé avec sa nacelle.</p>', src: GIM }] }
  ],
  key: ['FPT SDIS 51 : 3 000 L d’eau, 200 L d’émulseur, 100 L d’additif.', 'Caméléon/Caddysis : solution moussante préparée dans la pompe, sans injecteur.', 'Ventilateur thermique : 36 000 m³/h ; distance = diagonale de la porte (0,90 à 6 m).', 'Ventilation d’attaque interdite au SDIS 51.', 'MEA du SDIS 51 : EPS 32 m, EPC 33 m, BEA 32 m.'],
  traps: ['Placer un ventilateur thermique dans un local clos (monoxyde de carbone).', 'Alimenter la turbine du ventilateur hydraulique en solution moussante.'],
  quiz: [
    { q: 'Capacité de la cuve d’eau d’un FPT du SDIS 51 selon le Guide :', c: ['3 000 litres', '200 litres', '1 000 litres', '6 000 litres'], e: 'Guide : 1 cuve d’eau de 3 000 L, 1 cuve d’émulseur de 200 L, 1 cuve d’additif de 100 L.', s: 'fpt' },
    { q: 'Quel est l’avantage des systèmes Caméléon ou Caddysis ?', c: ['La solution moussante se prépare dans la pompe, sans injecteur-proportionneur', 'Ils augmentent la pression de la pompe', 'Ils remplacent les lances à mousse', 'Ils fabriquent de la mousse haut foisonnement'], e: 'Le prémélange eau + émulseur se réalise directement dans la pompe de l’engin.', s: 'fpt' },
    { q: 'À quelle distance d’une porte standard place-t-on le ventilateur thermique ?', c: ['La diagonale de la porte, entre 0,90 et 6 m', 'Collé à la porte', '10 m minimum', 'Dans le local à ventiler'], e: 'Guide d’instruction : distance équivalente à la diagonale de la porte, comprise entre 0,90 et 6 m.', s: 'annexe' },
    { q: 'Au SDIS 51, la ventilation d’attaque est :', c: ['Interdite', 'Obligatoire', 'Réservée au ventilateur hydraulique', 'Laissée au choix du binôme'], e: 'Le Guide précise : « Interdiction de faire de la ventilation d’attaque au sein du S.D.I.S de la Marne ».', s: 'annexe' },
    { q: 'Quels moyens élévateurs aériens le Guide cite-t-il au SDIS 51 ?', c: ['EPS 32 m, EPC 33 m, BEA 32 m', 'EPS 18 m et EPS 24 m', 'EPA 45 m uniquement', 'BEA 18 m et EPC 24 m'], e: 'Guide d’instruction, « Les M.E.A ».', s: 'mea' },
    { q: 'Le stoppeur de fumée résiste jusqu’à :', c: ['600 °C', '179 °C', '1 000 °C', '80 °C'], e: 'Guide : résistance 600 °C, mais ne pas le mettre au contact des flammes.', s: 'annexe' }
  ]
});

/* ======================================================================= 7. ÉCHELLES */
VSAV.chap({
  id: 'inc-echelles', part: 'inc', seq: INC3,
  title: 'Les échelles à main et l’échelle aérienne', short: 'Échelles', motif: 'walk',
  sources: [LIV + ', § 2.7 Les matériels d’incendie, échelles (p. 41-44)', GIM + ', « Les échelles à main »'],
  summary: 'Échelle à crochets, échelle à coulisse, montée et croisement sur l’échelle aérienne.',
  why: '<b>Pourquoi tant de règles pour monter une échelle ?</b> Ces matériels servent souvent dans l’urgence, en hauteur et dans des espaces restreints : une échelle mal testée, mal inclinée ou surchargée, et c’est la chute. L’échelle à crochets, en particulier, est un <b>matériel de sauvetage d’extrême urgence</b> dont le maniement doit être parfaitement maîtrisé.',
  sections: [
    { id: 'types', t: 'Les échelles du FPT', ic: 'list', src: GIM + ', « Les échelles à main » ; ' + LIV + ', p. 41',
      html: '<p>Sur un FPT du SDIS 51 : échelle à coulisse 2 plans grand modèle, échelle à crochets, échelle parisienne (télescopique), échelle de toit.</p>' +
        '<div class="tw"><table><thead><tr><th>Caractéristique</th><th>À crochets (livret)</th><th>À crochets (Guide)</th><th>À coulisse 2 plans GM (Guide)</th></tr></thead><tbody>' +
        '<tr><td>Longueur reployée</td><td>2,34 m</td><td>sans objet</td><td>5,00 m</td></tr>' +
        '<tr><td>Longueur déployée</td><td>4,20 m</td><td>4,20 m</td><td>8,10 m</td></tr>' +
        '<tr><td>Largeur</td><td>30 cm entre les crochets ; 25 cm entre les montants</td><td>0,17 m minimum entre les montants (0,26 m entre les pointes)</td><td>0,30 m</td></tr>' +
        '<tr><td>Masse maximale</td><td>15 kg</td><td>15 kg</td><td>45 kg</td></tr>' +
        '<tr><td>Échelons / entretoises</td><td>13 à 14 échelons ; 2 entretoises</td><td>—</td><td>—</td></tr>' +
        '<tr><td>Capacité</td><td>—</td><td>1 homme dessus</td><td>2 personnes</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Divergence.</b> Les largeurs de l’échelle à crochets diffèrent entre le livret (30 cm entre crochets, 25 cm entre montants) et le Guide (0,17 m entre montants, 0,26 m entre les pointes). Le livret renvoie, pour l’échelle à coulisse, au livret EQ DIV (§ 2.4.1).</div>' },
    { id: 'crochets', t: 'L’échelle à crochets', ic: 'mountain', src: LIV + ', p. 41-42 ; ' + GIM + ', « L’échelle à crochets »',
      html: '<p>Elle sert à <b>progresser d’étage en étage par la façade</b>, parfois sur des espaces restreints (balcons) et au-delà de la hauteur des moyens aériens. Missions : sauvetage/mise en sécurité, reconnaissance.</p>' +
        '<div class="tw"><table><thead><tr><th>Indications</th><th>Contre-indications</th></tr></thead><tbody><tr><td><ul><li>Tester l’échelle avant de monter</li><li>Travailler majoritairement avec les bras</li><li><b>1 homme dessus</b></li><li>Toujours emporter le <b>LSPCC</b> pour le sauvetage</li><li>En attente : crochets contre le sol</li></ul></td><td><ul><li>Ne pas prendre en compte l’environnement</li><li>Travailler sur les sabots</li><li>Positionner l’échelle à l’horizontale</li></ul></td></tr></tbody></table></div>' +
        '<p><b>Points de la technique décrite par le Guide</b> : saisir le plan au niveau du 4ᵉ échelon et se redresser en engageant l’avant-bras sous les montants, en appui sur la cuisse (fente avant) ; dresser l’échelle crochets en avant en 3 mouvements environ, pouces sur les montants, et la placer délicatement sur le premier balcon (le chef annonce « balcon ») ; tester l’échelle avant de grimper ; pour gagner l’étage supérieur, saisir l’entretoise, lever et tourner l’échelle ; l’équipier sécurise l’échelle pendant que le chef d’équipe monte et inversement (mains sur les échelons, avant-bras derrière les montants, genoux à l’extérieur des montants).</p>' +
        '<p>L’utilisation et le maniement vous sont enseignés en formation.</p>',
      figs: [{ img: 'img/inc/2/echelle-crochets.jpg', cap: 'L’échelle à crochets', txt: '<p>Crochets protégés par leur capuchon de caoutchouc, entretoises, charnières (à verrouiller avant l’emploi), verrous, échelons, montants.</p>', src: LIV + ', p. 41' }] },
    { id: 'coulisse', t: 'L’échelle à coulisse', ic: 'walk', src: GIM + ', « L’échelle à coulisse »',
      html: '<p>Constituée de <b>2 plans</b>, elle permet d’accéder aux étages par l’extérieur lorsque les communications existantes sont impraticables et d’atteindre des toitures de faible hauteur. Manœuvre en binôme. Missions : sauvetage/mise en sécurité, établissement de lance.</p>' +
        '<ul class="check"><li>Travailler avec les cuisses ; monter de manière <b>dissymétrique</b> (pied gauche, main droite).</li><li>Dépasser de <b>2 ou 3 échelons</b> le balcon à atteindre, ou de <b>1 mètre</b> une toiture.</li><li>Accès au <b>2ᵉ étage maximum</b> (prolongement possible avec l’échelle à crochets).</li><li>Utilisation non déployée en pont pour les établissements de tuyaux, 2 personnes maximum en simultané.</li><li>Interdit : travailler à plus de deux sur l’échelle ; l’utiliser près de conducteurs électriques sans respecter les périmètres de sécurité.</li><li><b>Pied d’échelle</b> : le manipulateur se tient droit, pieds contre les sabots, bras tendus à l’horizontale, mains à hauteur d’épaule sur les montants. L’équipier sécurise l’échelle en tenant les montants et surveille l’environnement (chutes de matériaux…).</li></ul>',
      figs: [{ img: 'img/inc/2/echelle-coulisse.jpg', cap: 'Échelle à coulisse 2 plans', txt: '<p>Deux plans coulissants, sabots, trait, poulie, guides et parachutes.</p>', src: GIM }] },
    { id: 'aerienne', t: 'Monter et descendre à l’échelle aérienne', ic: 'mountain', src: LIV + ', p. 43-44',
      steps: ['L’échelle étant dressée, regarder l’échelon que l’on va saisir en gardant la tête légèrement relevée.', 'Position de départ : pied gauche sur le premier échelon, main droite sur l’échelon à hauteur des yeux.', 'Pied droit sur l’échelon supérieur au pied gauche, main gauche sur l’échelon inférieur à l’autre main.', 'Monter en restant à un angle de 90° par rapport à l’horizontale.', 'Effectuer l’ascension bras tendus à l’écartement des épaules, paumes vers le sol, pieds peu engagés, talons levés.', 'Pour la descente, appliquer le même principe qu’à la montée.'], stepsTitle: 'Montée sur l’échelle aérienne',
      after: '<div class="callout ok"><b>Croisement d’un binôme</b> : sur le parc de l’échelle, le sapeur <b>descendant a la priorité</b> ; le sapeur montant s’efface pour le laisser passer.</div>',
      figs: [{ img: 'img/inc/2/echelle-aerienne.jpg', cap: 'Montée à 90° sur l’échelle aérienne', txt: '<p>L’équipier reste vertical (90° avec l’horizontale) quel que soit l’angle de dressage du parc.</p>', src: LIV + ', p. 43' }] }
  ],
  key: ['Échelle à crochets : sauvetage d’extrême urgence, 4,20 m, 15 kg max, 1 homme dessus.', 'Toujours tester l’échelle avant de monter.', 'Échelle à coulisse : dépasser le balcon de 2 ou 3 échelons, la toiture de 1 m.', 'Échelle à coulisse : 2ᵉ étage maximum, jamais plus de 2 personnes.', 'Échelle aérienne : monter à 90°, bras tendus, talons levés.', 'Croisement : le descendant est prioritaire.'],
  traps: ['Travailler sur les sabots de l’échelle à crochets.', 'Partir en sauvetage à l’échelle à crochets sans le LSPCC.', 'Croire que le montant est prioritaire lors d’un croisement sur l’échelle aérienne.'],
  quiz: [
    { q: 'Longueur dépliée de l’échelle à crochets :', c: ['4,20 m', '2,34 m', '8,10 m', '5,00 m'], e: 'Livret : 4,20 m dépliée, 2,34 m reployée, 15 kg maximum.', s: 'types' },
    { q: 'Combien de personnes à la fois sur l’échelle à crochets ?', c: ['1', '2', '3', 'Autant que nécessaire'], e: 'Guide : « 1 homme dessus ».', s: 'crochets' },
    { q: 'De combien doit dépasser l’échelle à coulisse un balcon à atteindre ?', c: ['2 ou 3 échelons', '1 échelon', '1 mètre', '5 échelons'], e: '2 ou 3 échelons pour un balcon, 1 mètre pour une toiture.', s: 'coulisse' },
    { q: 'Lors d’un croisement sur l’échelle aérienne :', c: ['Le sapeur descendant a la priorité', 'Le sapeur montant a la priorité', 'Les deux s’arrêtent', 'Le plus gradé passe'], e: 'Livret : le descendant a la priorité, le montant s’efface.', s: 'aerienne' },
    { q: 'Angle de montée de l’équipier sur l’échelle aérienne :', c: ['90°', '75°', '45°', 'Celui du parc d’échelle'], e: 'L’équipier doit monter et descendre à un angle de 90°.', s: 'aerienne' },
    { q: 'Quel matériel faut-il toujours emporter avec l’échelle à crochets pour un sauvetage ?', c: ['Le LSPCC', 'Une LDV 45', 'Le stoppeur de fumée', 'Une échelle de toit'], e: 'Indication du Guide : toujours emporter le lot de sauvetage et de protection contre les chutes.', s: 'crochets' }
  ]
});

/* ======================================================================= 8. FORCEMENT */
VSAV.chap({
  id: 'inc-forcement', part: 'inc', seq: INC3,
  title: 'Le forcement : Halligan et outils de forcement', short: 'Forcement (Halligan)', motif: 'hand',
  sources: ['Fiches Halligan S+F « Forcement des accès » (SDIS 51, 11/08/2015)', LIV + ', § 2.7, p. 40', GIM + ', « Le matériel de déblai » et « Le matériel de forcement »'],
  summary: 'Décrire le Halligan, forcer une porte tirante ou poussante en binôme (écarter, engager, forcer) et connaître les autres outils.',
  why: '<b>Pourquoi une méthode ?</b> Le forcement sert à pénétrer dans des locaux dont les accès sont verrouillés, obstrués ou inexistants. Sans méthode, on frappe au hasard, on se blesse et on perd du temps ; avec <b>un chef qui guide l’outil et un équipier qui ne frappe que sur ordre</b>, la porte cède vite et en sécurité.',
  sections: [
    { id: 'outil', t: 'Le Halligan', ic: 'hand', src: 'Fiches Halligan, F1 et F2',
      html: '<p>Outil de <b>forcement à main</b>, souvent associé à un <b>outil de frappe</b> (masse ou hache à tête plate), mais aux nombreuses autres utilisations. Créé en <b>1948</b> par Hugh Halligan, pompier de New York, qui cherchait un outil polyvalent.</p>' +
        '<ul class="check"><li>Parties : <b>herminette</b>, <b>pointeau</b>, <b>manche</b>, <b>fourche incurvée</b>.</li><li>76,2 cm / 4,4 kg ; alliage d’aluminium allégé, finition nickelée.</li><li>Halligan + outil de frappe = « <b>the irons</b> », « la ferraille ».</li></ul>' +
        '<p>Vocabulaire de la porte : le <b>bloc-porte</b> est l’ensemble formé par le bâti, l’huisserie, les vantaux et la quincaillerie de fermeture et de rotation ; le <b>butoir</b> est la partie du cadre sur laquelle la porte prend appui.</p>',
      figs: [{ img: 'img/inc/2/halligan-outil.jpg', cap: 'Descriptif du Halligan et des outils de frappe', txt: '<p>Herminette, fourche incurvée, pointeau, manche ; outils de frappe : masse ou hache à tête plate (tête plate = zone de frappe).</p>', src: 'Fiches Halligan, F2' }] },
    { id: 'binome', t: 'Le cadre du forcement en binôme', ic: 'team', src: 'Fiches Halligan, F5 ; ' + LIV + ', p. 40',
      html: '<div class="callout bad"><b>Le port des EPI est obligatoire lors de tout forcement d’ouvrant.</b> Opérations diverses : au minimum tenue F1 complète + casque + gants. Incendie : tenue de feu complète + ARI capelé si nécessaire. Sur incendie, si la situation le nécessite, une <b>LDV en eau</b> doit être prête (protection, contrôle de la température de la porte, des fumées…).</div>' +
        '<div class="tw"><table><thead><tr><th></th><th>Chef</th><th>Équipier</th></tr></thead><tbody>' +
        '<tr><td>Rôle</td><td>Manœuvre le <b>Halligan</b> ; dirige le forcement par des ordres forts et clairs</td><td>Manœuvre l’<b>outil de frappe</b> ; entièrement concentré sur la percussion et les ordres</td></tr>' +
        '<tr><td>Position</td><td>Peut manœuvrer son outil avec une bonne visibilité de la zone de travail</td><td>Debout si la zone de frappe est au niveau ou au-dessus de son plexus ; à genoux ou en trépied en dessous. Une main à environ 15 cm sous la tête de l’outil, l’autre en bas du manche</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Ordres</b> : un ordre « <b>FRAPPE</b> » = <b>une</b> frappe ; « <b>STOP</b> » ou main levée lorsque le chef interrompt les frappes pour replacer l’outil ou passer à l’étape suivante.</p>' },
    { id: 'base', t: 'Technique générale : écarter, engager, forcer', ic: 'list', src: 'Fiches Halligan, F6',
      html: '<div class="tw"><table><tbody><tr><th>1. ÉCARTER</th><td>Créer ou augmenter l’interstice entre l’ouvrant et son cadre pour faciliter l’insertion de l’outil.</td></tr><tr><th>2. ENGAGER</th><td>Engager l’outil entre l’ouvrant et son cadre.</td></tr><tr><th>3. FORCER</th><td>Exercer une force de bras de levier.</td></tr></tbody></table></div>' +
        '<p><b>Portes tirantes</b> : gonds visibles ; surtout bâtiments publics, industriels, commerciaux, locaux techniques, et en habitation accès aux caves et parkings. <b>Portes poussantes</b> : pas de gonds visibles ; surtout portes d’entrée de pavillon ou d’appartement.</p>' },
    { id: 'tirante', t: 'Forcer une porte tirante', ic: 'hand', src: 'Fiches Halligan, F7',
      steps: ['Écarter : zone de travail à environ 15 cm au-dessus ou en dessous du point de verrouillage.', 'Insérer l’herminette de 4 cm de profondeur maximum entre la porte et le cadre, en s’aidant de l’outil de frappe.', 'Faire levier de bas en haut pour augmenter l’interstice.', 'Engager : le chef tire le manche du Halligan de façon continue vers lui en donnant les ordres « FRAPPE » et en surveillant la zone de travail ; l’herminette s’engage entre la porte et le butoir.', 'Le chef commande « STOP » une fois l’herminette suffisamment engagée.', 'Forcer : forte traction du Halligan vers soi pour créer le bras de levier qui fait céder le point de verrouillage.'], stepsTitle: 'Porte tirante',
      figs: [{ img: 'img/inc/2/halligan-tirante.jpg', cap: 'Technique porte tirante', txt: '<p>Les quatre temps : insertion de l’herminette, levier pour écarter, engagement sous les frappes, traction pour forcer.</p>', src: 'Fiches Halligan, F7' }] },
    { id: 'poussante', t: 'Forcer une porte poussante', ic: 'hand', src: 'Fiches Halligan, F8 à F10',
      steps: ['Tester : pousser ou frapper en haut, au milieu et en bas de la porte ; l’écartement constaté indique les points de verrouillage.', 'Écarter : à environ 15 cm du point de verrouillage, insérer l’herminette puis la basculer du côté opposé au pointeau pour écarter la porte de son cadre.', 'Engager : placer la fourche incurvée à la même hauteur, côté convexe vers le cadre ; sous les frappes, redresser progressivement le Halligan jusqu’à 90° de la porte pour engager la fourche entre la porte et le butoir.', 'Forcer : stopper les frappes et faire levier avec le manche, force exercée vers la porte.', 'Si le verrou n’a pas cédé : caler avec la hache à tête plate, réinsérer l’herminette et forcer.', 'Contrôler l’ouverture soudaine de la porte (poignée tenue à la main, avec une sangle ou avec le pointeau).'], stepsTitle: 'Porte poussante',
      after: '<ul class="check"><li><b>Plusieurs points de verrouillage</b> : répéter les 3 phases pour chacun ; s’ils sont rapprochés (environ <b>50 cm maximum</b>), travailler entre les deux pour les forcer simultanément.</li><li><b>Verrou</b> : pointeau sur la partie creuse de la serrure, une frappe sur ordre, éjection du verrou par l’intérieur.</li><li>Porte en retrait : on peut faire un trou dans le mur pour manœuvrer l’outil ; couloir étroit : frapper l’épaulement de la fourche en faisant glisser la tête de la hache le long du Halligan.</li></ul>' },
    { id: 'autres', t: 'Autres usages et autres outils', ic: 'grid', src: 'Fiches Halligan, F15 à F22 ; ' + GIM + ', « Le matériel de forcement »',
      html: '<p><b>Autres utilisations du Halligan</b> : casser un cadenas (pointeau dans l’anse + frappe, ou seul : anse dans la fourche, vriller et faire levier) ; marchepied ; outil de calage (échelle, matériel, porte, se caler sur un toit, tester un plancher) ; lève-plaque, levage, déblai, brise-vitre ; augmenter son rayon de reconnaissance (sous un lit…) ; créer une zone de survie ou un itinéraire de secours ; percer la tôle ; soulever le capot d’un véhicule en feu pour y introduire la LDV.</p>' +
        '<p><b>Si le Halligan ne suffit pas</b> (portes blindées…) : <b>ouvre-porte hydraulique à main</b> (portes poussantes métalliques, bâti métal de préférence) ; <b>découpeuse thermique</b> (rideaux, portes métalliques, grilles, béton…) ; <b>écarteur électrique</b> (force d’écartement d’environ 3 tonnes, disponible dans les FPT).</p>' +
        '<p><b>Outils de forcement et de déblai</b> du FPT (Guide) : gaffe, hachette, balai, pelle, pioche, fourches droite et recourbée, masse, grande pince, outils de pénétration, Halligan, coupe-boulon, disqueuse thermique.</p>' },
    { id: 'disqueuse', t: 'La disqueuse thermique', ic: 'alert', src: GIM + ', « La disqueuse thermique »',
      html: '<p>Découpe à moteur thermique pour réaliser trouées ou ouvertures dans des bâtiments clos. Lot : caisse, découpeuse, disques, bidon de carburant pré-mélangé, lot de bord (clé à disque, tournevis, tige), outil de pénétration.</p>' +
        '<div class="tw"><table><thead><tr><th>Indications</th><th>Contre-indications</th></tr></thead><tbody><tr><td>Métaux (rideaux de fer, bardages, portes blindées…) ; matériaux de construction (dès que possible avec un moyen hydraulique pour limiter poussières et étincelles)</td><td>Désincarcération courante ; ambiance explosive ; atmosphère confinée ou mal aérée ; pièces contenant de l’<b>amiante</b> ; personnel non formé</td></tr></tbody></table></div>' +
        '<div class="callout warn">Gaz d’échappement toxiques dès que le moteur tourne ; projection de particules incandescentes (risque d’incendie) ; poussières ; risque de <b>rupture du disque</b> s’il est mal refroidi ; vérifier le disque (remplacer s’il est fissuré) ; EPI obligatoires. Démarrer la découpeuse au moins deux fois par semaine.</div>',
      figs: [{ img: 'img/inc/2/disqueuse.jpg', cap: 'Découpeuse thermique à disque', txt: '<p>Respecter le sens de rotation indiqué sur le disque lors de son remplacement, moteur arrêté.</p>', src: GIM }] }
  ],
  key: ['EPI obligatoires pour tout forcement d’ouvrant.', 'Chef = Halligan et ordres ; équipier = outil de frappe.', 'Un ordre « FRAPPE » = une frappe ; « STOP » ou main levée.', 'Écarter, engager, forcer.', 'Travail à environ 15 cm du point de verrouillage ; herminette engagée de 4 cm max (porte tirante).', 'Deux verrous à moins de 50 cm : travailler entre les deux.', 'Contrôler l’ouverture soudaine d’une porte poussante.'],
  traps: ['Frapper en continu sans ordre : un ordre = une frappe.', 'Forcer une porte sur incendie sans LDV prête alors que la situation l’exige.', 'Utiliser la disqueuse en atmosphère confinée ou explosive.'],
  quiz: [
    { q: 'Dans le binôme de forcement, qui manœuvre le Halligan ?', c: ['Le chef, qui donne les ordres', 'L’équipier', 'Le conducteur', 'Les deux alternativement'], e: 'Le chef manœuvre le Halligan et dirige ; l’équipier manœuvre l’outil de frappe.', s: 'binome' },
    { q: 'Que signifie un ordre « FRAPPE » ?', c: ['Une seule frappe', 'Frapper jusqu’à l’ordre STOP', 'Trois frappes', 'Frapper de toutes ses forces jusqu’à ouverture'], e: 'Fiche F5 : un ordre FRAPPE = UNE FRAPPE.', s: 'binome' },
    { q: 'Les trois temps de la technique générale :', c: ['Écarter, engager, forcer', 'Tester, frapper, ouvrir', 'Engager, écarter, frapper', 'Frapper, forcer, contrôler'], e: 'Écarter (créer l’interstice), engager (l’outil), forcer (bras de levier).', s: 'base' },
    { q: 'Sur une porte tirante, l’herminette s’insère de :', c: ['4 cm de profondeur maximum', '15 cm', '50 cm', 'Toute sa longueur'], e: 'Fiche F7 : herminette insérée de 4 cm maximum, à environ 15 cm du point de verrouillage.', s: 'tirante' },
    { q: 'Comment reconnaît-on une porte tirante ?', c: ['Ses gonds sont visibles', 'Elle n’a pas de serrure', 'Elle s’ouvre vers l’intérieur', 'Elle est toujours blindée'], e: 'Portes tirantes : gonds visibles ; portes poussantes : pas de gonds visibles.', s: 'base' },
    { q: 'Deux points de verrouillage distants de moins de 50 cm :', c: ['On travaille entre les deux pour les forcer simultanément', 'On les force un par un en commençant par le haut', 'On utilise obligatoirement la disqueuse', 'On abandonne le forcement'], e: 'Fiche F9 : lorsque deux points sont rapprochés (environ 50 cm maximum), travailler entre les deux.', s: 'poussante' },
    { q: 'Force d’écartement de l’écarteur électrique du FPT :', c: ['Environ 3 tonnes', 'Environ 300 kg', 'Environ 30 tonnes', 'Environ 1 tonne'], e: 'Fiche F15 : écarteur électrique, force d’écartement environ 3 tonnes, disponible dans les FPT.', s: 'autres' }
  ]
});

/* ======================================================================= 9. MOUSSE */
VSAV.chap({
  id: 'inc-mousse', part: 'inc', seq: INC3,
  title: 'La mousse et ses moyens de production', short: 'La mousse', motif: 'bottle',
  sources: [LIV + ', § 2.3.2 Les lances à mousse (p. 32) et § « La mousse » (p. 45-47)', 'Diaporama formateur « Les moyens de production de mousse »', GIM + ', « La production de mousse » et chapitre « La mousse »'],
  summary: 'Eau + émulseur = solution moussante ; + air = mousse. Injecteur, lances, foisonnements, taux et taux d’application.',
  why: '<b>Pourquoi la mousse ?</b> Sur certains feux (liquides inflammables, métaux…), l’eau seule est peu ou pas efficace. La mousse, plus légère, <b>s’étale en tapis</b> à la surface du liquide : en épaisseur suffisante, elle est étanche aux vapeurs inflammables et à l’oxygène. C’est l’agent privilégié des feux de <b>classe B</b> (hydrocarbures et liquides polaires).',
  sections: [
    { id: 'definition', t: 'Définition et principe de fabrication', ic: 'molecule', src: 'Diaporama « Moyens de production de mousse » ; ' + GIM + ', « La mousse » ; ' + LIV + ', p. 45',
      html: '<p>Une mousse est un <b>assemblage de bulles</b> : une atmosphère gazeuse emprisonnée dans une mince pellicule de solution moussante. Sa résistance au feu dépend de son aptitude à <b>retenir son liquide</b>. La solution est composée d’eau et de <b>1 à 6 %</b> d’émulseur (Guide).</p>' +
        '<p>Trois éléments sont indispensables, mélangés <b>dans l’ordre</b> : <b>eau + émulseur = solution moussante</b> (prémélange), puis <b>solution moussante + air = mousse</b> (brassage énergique dans la lance).</p>' +
        '<p>Deux possibilités pour créer de la mousse (livret) : le <b>système Caméléon</b>, directement via un FPT équipé, ou un <b>injecteur-proportionneur</b> dans un établissement de tuyaux.</p>',
      figs: [{ img: 'img/inc/2/mousse-schema.jpg', cap: 'Schéma type de production de mousse', txt: '<p>1. L’eau traverse l’injecteur ; sa vitesse crée une aspiration dans la canne plongée dans le bidon d’émulseur (<b>effet venturi</b>). 2. En sortie d’injecteur : solution moussante. 3. Au contact de l’air aspiré par les orifices de la lance, elle prend du volume et devient mousse.</p>', src: LIV + ', p. 45' }] },
    { id: 'injecteur', t: 'L’injecteur-proportionneur', ic: 'drop', src: GIM + ', « Les injecteurs-proportionneurs » ; diaporama',
      html: '<p>Appareil placé <b>entre la prise d’eau et la lance</b> qui, par effet venturi, aspire l’émulseur et le mélange à l’eau ; une <b>molette</b> règle le taux de concentration. Certains engins possèdent un proportionneur fixe, ce qui permet des établissements plus longs.</p>' +
        '<div class="tw"><table><tbody><tr><th>Pression d’alimentation</th><td>10 bars</td></tr><tr><th>Pression nominale</th><td>16 bars</td></tr><tr><th>Perte de charge</th><td>35 %</td></tr>' +
        '<tr><th>Après l’injecteur</th><td>Distance la plus courte possible ; <b>ne pas dépasser 40 m de tuyaux</b></td></tr>' +
        '<tr><th>Diamètre</th><td>Correspond à la lance (existe en 45 et 70)</td></tr><tr><th>Sécurité</th><td>Clapet (bille) anti-retour : empêche l’eau de remonter dans le bidon</td></tr></tbody></table></div>' +
        '<ul class="check"><li>Régler la concentration déterminée par le chef d’agrès.</li><li>Canne d’aspiration (1 m) immergée dans le bidon d’émulseur.</li><li>Attention au <b>sens de raccordement</b>.</li><li>Rincer à l’eau après usage ; contrôler que la bille n’est pas collée.</li></ul>',
      figs: [{ img: 'img/inc/2/mousse-injecteur.jpg', cap: 'Injecteur-proportionneur', txt: '<p>Raccord d’entrée, corps, robinet doseur (molette), raccord de sortie, clapet à bille anti-retour, flexible et canne d’aspiration.</p>', src: GIM }] },
    { id: 'actions', t: 'Les modes d’action', ic: 'flame', src: LIV + ', p. 46 ; ' + GIM + ' ; diaporama',
      html: '<ul class="check"><li><b>Isolement</b> : le tapis bloque les vapeurs inflammables.</li><li><b>Étouffement</b> : il empêche l’apport d’oxygène.</li><li><b>Refroidissement</b> : la mousse détruite au contact des flammes libère de la vapeur d’eau.</li><li><b>Écran</b> contre le rayonnement de la chaleur.</li></ul>' +
        '<p>Les mousses ont une faible teneur en eau, sont légères, plus ou moins persistantes, <b>incompatibles avec certains autres moyens d’extinction</b> et <b>conductrices de l’électricité</b>. Une extinction n’est possible que si les effets positifs (production, progression du tapis) l’emportent sur les effets négatifs (destruction par décantation, solubilisation, évaporation, contamination).</p>' +
        '<div class="callout warn"><b>Divergence.</b> Le diaporama formateur présente le principe d’extinction de la mousse par <b>refroidissement</b> (vaporisation de l’eau) ; le livret et le Guide décrivent quatre actions : isolement, étouffement, refroidissement et écran.</div>',
      figs: [{ img: 'img/inc/2/mousse-actions.jpg', cap: 'Les quatre actions de la mousse', txt: '<p>Isolement (vapeurs bloquées), étouffement (comburant bloqué), refroidissement, écran (rayonnement arrêté).</p>', src: LIV + ', p. 46' }] },
    { id: 'taux', t: 'Concentration, foisonnement, rendement', ic: 'grid', src: LIV + ', p. 47 ; diaporama ; ' + GIM,
      html: '<div class="tw"><table><thead><tr><th>Taux</th><th>Formule</th><th>Exemple</th></tr></thead><tbody>' +
        '<tr><td><b>Concentration</b></td><td>volume d’émulseur / volume de solution moussante</td><td>3 L d’émulseur + 97 L d’eau = 100 L de solution → <b>3 %</b></td></tr>' +
        '<tr><td><b>Foisonnement</b></td><td>volume de mousse / volume de solution moussante</td><td>1 m³ (1 000 L) de mousse avec 100 L de solution → <b>10</b></td></tr>' +
        '<tr><td><b>Rendement</b></td><td>volume de mousse / volume d’émulseur</td><td>1 000 L de mousse avec 3 L d’émulseur → <b>333</b></td></tr>' +
        '</tbody></table></div>' +
        '<p>Le foisonnement correspond à la <b>taille de la bulle</b> (quantité d’air) : bas foisonnement = petites bulles, haut foisonnement = grosses bulles. Le diaporama ajoute que le rendement est la caractéristique principale d’une mousse (« plus le rendement est élevé, meilleure est la mousse »).</p>' +
        '<div class="tw"><table><thead><tr><th>Foisonnement</th><th>Livret</th><th>Diaporama</th><th>Guide</th></tr></thead><tbody>' +
        '<tr><td>Bas (BF)</td><td>inférieur à 20</td><td>2 à 20</td><td>2 à 20</td></tr><tr><td>Moyen (MF)</td><td>20 à 200</td><td>20 à 200</td><td>20 à 200</td></tr><tr><td>Haut (HF)</td><td>200 à 1 000</td><td>supérieur à 200</td><td>200 à 1 000</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn">Les bornes du bas et du haut foisonnement varient légèrement selon les sources (tableau ci-dessus) ; le moyen foisonnement (20 à 200) est identique partout.</div>' },
    { id: 'lances', t: 'Lances et générateurs', ic: 'target', src: LIV + ', § 2.3.2, p. 32 ; diaporama ; ' + GIM,
      html: '<div class="tw"><table><thead><tr><th>Matériel</th><th>Foisonnement</th><th>Caractéristiques</th><th>Engin</th></tr></thead><tbody>' +
        '<tr><td><b>LM 2</b></td><td>Bas</td><td>Ø 40 mm ; 200 l/min de solution max (2 m³/min de mousse) ; pression nominale 16 bars ; portée 18 m (foisonnement 10, concentration 3 %)</td><td>FPT</td></tr>' +
        '<tr><td><b>LM 4</b></td><td>Bas</td><td>400 l/min de solution max (4 m³/min) ; Ø 65 mm (livret) ou Ø 70 (Guide)</td><td>FPTGP</td></tr>' +
        '<tr><td><b>Générateur MF Ø 40</b></td><td>Moyen</td><td>200 l/min max</td><td>FPT</td></tr>' +
        '<tr><td><b>Générateur MF Ø 65</b></td><td>Moyen</td><td>400 l/min max</td><td>FPTGP</td></tr>' +
        '<tr><td><b>Générateur HF</b> (ex. Turbex)</td><td>Haut</td><td>Gros ventilateur muni d’un tamis ; déverse la mousse dans des espaces clos (caves, entrepôts, cales de navire, galeries de câbles), éventuellement guidée par une gaine</td><td>—</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Lance à projection</b> (bas foisonnement) : interventions extérieures sur des feux à fort rayonnement ; projette la mousse à plus de 20 m (diaporama) ; peu sensible au vent et à la pluie, couverture stable et résistante. <b>Lance à déversement</b> (moyen foisonnement) : consolide une extinction faite en bas foisonnement ou prévient l’inflammation d’une nappe ; portée n’excédant pas 10 m ; tapis plus important que les LM 2 et LM 4 mais plus sensible aux intempéries et moins résistant à la ré-inflammation.</p>' +
        '<p><b>Consignes LM</b> (Guide) : ne pas fermer la lance à la poignée ; attention à ne pas <b>percer le tapis</b> de mousse ; attention aux réglages de débit (LDV + adaptateur) ; rincer à l’eau après usage.</p>' +
        '<div class="callout warn"><b>Divergences.</b> Diamètre de la LM 4 : 65 mm (livret) ou 70 (Guide). Portée en bas foisonnement : « plus de 20 m » (diaporama) ; 18 m pour la LM 2 (Guide, à foisonnement 10 et concentration 3 %).</div>',
      figs: [{ img: 'img/inc/2/mousse-lances.jpg', cap: 'Lances à mousse bas foisonnement', txt: '<p>Lances à mousse : l’air est aspiré par les orifices à l’arrière du fût et brassé avec la solution moussante.</p>', src: GIM }] },
    { id: 'emulseurs', t: 'Émulseurs et additif du SDIS 51', ic: 'bottle', src: GIM + ', « Les émulseurs »',
      html: '<ul class="check"><li>Deux familles : émulseurs à base <b>protéinique</b> et à base <b>synthétique</b>. Le SDIS 51 utilise des émulseurs <b>synthétiques</b> (tensio-actifs hydrocarbonés), qui donnent tous les foisonnements selon le matériel, mais sont moins efficaces sur les feux très chauds et résistent moins bien à la ré-inflammation.</li>' +
        '<li>L’émulseur du SDIS 51 est de type <b>AFFF alcool résistant</b> (Agent Formant un Film Flottant) ; durée de vie 10 ans.</li>' +
        '<li>Additif mouillant/moussant <b>BIOFOR C</b> : facilite l’extinction des feux de véhicules et de plastiques ; concentration réglée à <b>0,25 %</b> sur les FPT dotés d’un système de dosage, à <b>1 %</b> sur un injecteur traditionnel.</li>' +
        '<li>Exemple : une LM 2 avec injecteur réglé à 3 % consomme <b>194 L d’eau/min</b> et <b>6 L d’émulseur/min</b> (LM 4 : 388 L d’eau et 12 L d’émulseur/min).</li></ul>' },
    { id: 'application', t: 'Taux d’application et débit d’extinction', ic: 'clip', src: GIM + ', « Taux d’application »',
      html: '<p><b>Taux d’application</b> = quantité de solution moussante à appliquer par m² et par minute : <b>T = Q / S</b> (l/min/m²). Il varie selon le liquide, sa température, l’émulseur…</p>' +
        '<div class="tw"><table><tbody><tr><th>Hydrocarbures (non miscibles)</th><td><b>10 l/min/m²</b></td></tr><tr><th>Produits miscibles à l’eau (alcools, cétones : très destructeurs de mousse)</th><td><b>15 l/min/m²</b></td></tr>' +
        '<tr><th>Temps d’extinction (pour information)</th><td>surface &lt; 400 m² : 30 min ; &gt; 400 m² : 60 min</td></tr></tbody></table></div>' +
        '<p>Dans l’attente des moyens nécessaires, le COS peut utiliser un <b>débit de temporisation égal à la moitié du débit d’extinction</b> (diminuer l’intensité, protéger les installations, limiter les propagations).</p>' +
        '<p><b>Exemple du Guide</b> : rétention de sans-plomb 95 de 200 m², concentration 3 %, taux 10 l/min/m² → débit d’extinction 200 × 10 = <b>2 000 l/min</b> de solution ; émulseur 2 000 × 3 / 100 = <b>60 l/min</b> ; sur 30 min : <b>1 800 L d’émulseur</b>, à comparer aux 200 L d’un FPT.</p>' }
  ],
  key: ['Mousse = eau + émulseur (solution moussante) + air.', 'Injecteur : effet venturi, 10 bars, pas plus de 40 m de tuyaux après lui.', 'Actions : isolement, étouffement, refroidissement, écran.', 'Concentration = émulseur / solution ; foisonnement = mousse / solution ; rendement = mousse / émulseur.', 'BF 2 à 20 (< 20), MF 20 à 200, HF 200 à 1 000 (> 200).', 'LM 2 : 200 l/min (FPT) ; LM 4 : 400 l/min (FPTGP).', 'Taux d’application : 10 l/min/m² (hydrocarbures), 15 (miscibles).', 'La mousse conduit l’électricité.'],
  traps: ['Dépasser 40 m de tuyaux entre l’injecteur et la lance.', 'Fermer la lance à mousse à la poignée ou percer le tapis de mousse.', 'Confondre foisonnement (mousse / solution) et rendement (mousse / émulseur).', 'Croire la mousse utilisable sans risque sur une installation sous tension : elle est conductrice.'],
  quiz: [
    { q: 'Le taux de foisonnement est le rapport :', c: ['Volume de mousse / volume de solution moussante', 'Volume d’émulseur / volume de solution moussante', 'Volume de mousse / volume d’émulseur', 'Volume d’eau / volume d’émulseur'], e: 'Foisonnement = mousse / solution ; concentration = émulseur / solution ; rendement = mousse / émulseur.', s: 'taux' },
    { q: '3 L d’émulseur + 97 L d’eau donnent 1 m³ de mousse. Le foisonnement est de :', c: ['10', '3 %', '333', '100'], e: '1 000 L de mousse / 100 L de solution = 10 (concentration 3 %, rendement 333).', s: 'taux' },
    { q: 'Longueur maximale de tuyaux après l’injecteur-proportionneur :', c: ['40 m', '20 m', '100 m', '200 m'], e: 'Guide : ne pas dépasser 40 m de tuyaux après l’injecteur (pertes de charge importantes).', s: 'injecteur' },
    { q: 'Sur quel principe fonctionne l’injecteur-proportionneur ?', c: ['L’effet venturi', 'Une pompe électrique', 'La gravité', 'La pression de l’émulseur'], e: 'La vitesse de l’eau crée une aspiration dans la canne plongée dans l’émulseur.', s: 'definition' },
    { q: 'Le moyen foisonnement correspond à un foisonnement de :', c: ['20 à 200', '2 à 20', '200 à 1 000', 'Plus de 1 000'], e: 'Valeur commune à toutes les sources ; les bornes du bas et du haut foisonnement varient légèrement.', s: 'taux' },
    { q: 'Taux d’application pour un feu d’hydrocarbures non miscibles :', c: ['10 l/min/m²', '15 l/min/m²', '5 l/min/m²', '25 l/min/m²'], e: 'Guide : 10 l/min/m² pour les hydrocarbures, 15 pour les produits miscibles à l’eau.', s: 'application' },
    { q: 'Débit maximal de la LM 2 :', c: ['200 l/min de solution moussante', '400 l/min', '24 l/min', '950 l/min'], e: 'LM 2 : Ø 40, 200 l/min, présente dans les FPT ; LM 4 : 400 l/min, dans les FPTGP.', s: 'lances' },
    { q: 'Quelle lance utilise-t-on pour consolider une extinction faite en bas foisonnement ?', c: ['La lance à déversement (moyen foisonnement)', 'La LM 4', 'La lance rideau d’eau', 'La LDV en jet droit'], e: 'Diaporama : la lance à déversement (MF) consolide une extinction BF ou protège une nappe ; portée n’excédant pas 10 m.', s: 'lances' }
  ]
});

/* ======================================================================= L’ESSENTIEL */
VSAV.ess([{ t: 'Incendie — Le matériel de lutte', ic: 'flame', items: [
  { k: 'Extincteurs du FPT', v: '1 CO2 <b>5 kg</b> + 2 poudre <b>9 kg</b>', go: 'inc-extincteurs/fpt' },
  { k: 'Tensions limites', v: 'Poudre : utilisable <b>même au-delà de 1 000 V</b> ; CO2 : <b>sous 5 000 V</b> (feu de PPV : ≤ 1 000 V, procédure POP/02)', go: 'inc-extincteurs/agents' },
  { k: 'Règle des 5 D', v: 'Débit, Direction, Diffusion → <b>Distance</b> ; Durée', go: 'inc-lances-jets/cinqd' },
  { k: 'Jets diffusés (LDV MAT/10)', v: 'Attaque <b>15 à 45°</b> ; protection <b>130°</b>', go: 'inc-lances-jets/jets' },
  { k: 'LDV DMRS', v: '<b>6 bars</b>, 0 à <b>500 l/min</b>, basse pression <b>3 bars</b>', go: 'inc-ldv/dmrs' },
  { k: 'Établissement vertical / rampant', v: '<b>3 à 4 m</b> / <b>6 à 8 m</b> par étage', go: 'inc-tuyaux/couronne' },
  { k: 'Dévidoir mobile', v: '<b>5 × 40 m</b> de 70 = <b>200 m</b> + division', go: 'inc-devidoirs/types' },
  { k: 'FPT SDIS 51', v: '<b>3 000 L</b> d’eau, <b>200 L</b> d’émulseur, <b>100 L</b> d’additif', go: 'inc-engins/fpt' },
  { k: 'Échelle à crochets', v: '<b>4,20 m</b>, <b>15 kg</b>, 1 homme dessus', go: 'inc-echelles/types' },
  { k: 'Forcement', v: 'Écarter, engager, forcer ; 1 ordre = <b>1 frappe</b>', go: 'inc-forcement/base' },
  { k: 'Injecteur mousse', v: '<b>10 bars</b>, max <b>40 m</b> de tuyaux après', go: 'inc-mousse/injecteur' },
  { k: 'Foisonnements', v: 'BF <b>&lt; 20</b>, MF <b>20-200</b>, HF <b>200-1 000</b>', go: 'inc-mousse/taux' },
  { k: 'Taux d’application', v: '<b>10</b> l/min/m² (hydrocarbures), <b>15</b> (miscibles)', go: 'inc-mousse/application' }
] }]);
