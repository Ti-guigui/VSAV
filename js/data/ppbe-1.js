/* PPBE — fichier 1 : Équipier PPBE, généralités et opérations diverses
   Sources : Livret stagiaire Équipier Protection des Personnes, des Biens et de l’Environnement SDIS 51 (version 2017-1, modifiée 2022, validée 08/2022) ;
   Fiche individuelle pré-stage Équipier PPBE (SDIS 51) ; Évaluation dogmatique (diagnostique) Équipier PPBE SDIS 51 (modif. févr. 2022). */
var PP1 = 'PPBE 1 — Équipier PPBE : cadre, sécurité et MGO';
var PP2 = 'PPBE 2 — Les opérations diverses de l’équipier';
var LIVPP = 'Livret stagiaire Équipier PPBE SDIS 51 (2022)';
var PREPP = 'Fiche individuelle pré-stage Équipier PPBE (SDIS 51)';
var EVALPP = 'Évaluation diagnostique Équipier PPBE SDIS 51 (févr. 2022)';

/* =====================================================================================
   CHAPITRE 1 — CADRE DU MODULE, HYGIÈNE ET SÉCURITÉ
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-securite', part: 'ppbe', seq: PP1,
  title: 'Le module Équipier PPBE : hygiène, sécurité et opérations diverses', short: 'Hygiène, sécurité, OD', motif: 'shield',
  sources: [LIVPP + ', parties 1 et 2 (p. 5-7)', PREPP, EVALPP],
  summary: 'En plus de la sécurité des personnes, les sapeurs-pompiers protègent les biens et l’environnement : ce sont les « opérations diverses », où chaque mission a ses propres risques.',
  why: '<b>Pourquoi un module à part pour des interventions « sans feu » ?</b> Parce que ces missions (fuite d’eau, inondation, ouverture de porte, animaux, nids d’insectes, bâchage…) sont très fréquentes et chacune expose à un danger précis : glissade et électricité sur une fuite d’eau, chute sur un toit, morsure, envenimation, renversement sur la chaussée. L’équipier doit donc <b>maîtriser le matériel et les règles de sécurité</b> propres à chaque opération diverse, sous les ordres de son chef d’agrès.',
  sections: [
    { id: 'prestage', t: 'Avant le stage : fiche pré-stage et évaluation diagnostique', ic: 'check', src: PREPP + ' ; ' + EVALPP,
      html: '<p>Le stagiaire se présente le <b>1er jour du stage</b> avec la fiche individuelle pré-stage <b>signée par son chef de centre</b>. Les savoir-faire sont vus en CIS (date + nom du référent) puis validés pendant le stage par les MSP et/ou APP ; les savoirs sont validés par une <b>évaluation diagnostique</b> (questionnaire réédité au J1 et compté dans l’évaluation).</p>' +
        '<div class="tw"><table><thead><tr><th>Savoir-faire vus en CIS</th><th>Savoirs (auto-formation)</th></tr></thead><tbody>' +
        '<tr><td><ul class="check"><li>Mettre en œuvre les échelles 2 plans</li><li>Découvrir le contenu du LSPCC</li><li>Mettre en œuvre le groupe électrogène et son matériel associé</li><li>Mettre en œuvre le groupe d’épuisement thermique</li><li>Découvrir et monter une ligne d’aspiration</li><li>Mettre en œuvre le matériel d’épuisement électrique (aspirateur, pompe)</li></ul></td>' +
        '<td><ul class="check"><li>Maîtriser le contenu du LSPCC</li><li>Manœuvre reconnaissance d’appartement</li><li>Manœuvre progression sur toiture</li><li>Règles de sécurité et limites d’emploi du matériel d’épuisement électrique</li><li>Règles de mise en œuvre et limites d’emploi des groupes thermiques (électrogène, épuisement)</li></ul></td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">Les questions de l’évaluation diagnostique (cubage, débits, groupe électrogène, bâchage, échelle à coulisse, LSPCC…) sont reprises dans les quiz de cette partie.</p>' },
    { id: 'epi', t: 'L’équipement individuel', ic: 'shield', src: LIVPP + ', partie 1 (p. 5)',
      html: '<p>Quelle que soit l’intervention, le personnel travaille en sécurité : il se protège (<b>protection individuelle</b>) et protège ceux qui interviennent avec lui (<b>protection collective</b>). Ne pas s’équiper réglementairement est contraire à la sécurité individuelle : c’est prendre un risque inacceptable.</p>' +
        '<div class="callout ok"><b>Arrêté du 6 mai 2000, article 2</b>« Le port de la tenue d’intervention de base est obligatoire dans toutes les circonstances opérationnelles qui ne requièrent pas le port d’équipements spéciaux. » Elle peut être adaptée selon la situation et/ou sur ordre du chef d’agrès.</div>' +
        '<p><b>Tenue d’intervention de base</b> : casque, tenue F1, veste de protection, ceinturon d’intervention, gants de protection, bottes d’intervention avec ou sans lacets. Sur ordre du COS : casque F2 au lieu du F1, gilet haute visibilité, parka ou « softshell »…</p>' +
        '<p>La tenue sert à : <b>se protéger</b> (froid, rayonnement thermique, agressions, chocs, humidité) ; <b>être vu</b> de jour comme de nuit (bandes rétroréfléchissantes) ; <b>être identifié</b> dans sa fonction (bandes de couleur selon le grade).</p>' },
    { id: 'regles', t: 'Règles de sécurité en opération et hygiène', ic: 'alert', src: LIVPP + ', partie 1 (p. 5-6)',
      html: '<p>La sécurité du personnel est garantie en prenant toutes les mesures pour :</p><ul class="check"><li>éviter l’effondrement des éléments porteurs des bâtiments en les protégeant ;</li><li>assurer la protection respiratoire des intervenants (masques FFP2…) ;</li><li>garantir la bonne utilisation des matériels et engins spécialisés.</li></ul>' +
        '<p>Ventilation et éclairage complètent la sécurisation d’un site. En cas de risque d’explosion ou d’effondrement, ou de reconnaissance sous ARI, le chef de groupe veille à engager <b>le minimum de personnel</b> simultanément.</p>' +
        '<p><b>Hygiène</b> : lavage régulier des mains à l’eau savonneuse, hygiène corporelle, change de tenue après une intervention contaminante — <b>on ne rentre jamais chez soi en tenue d’intervention</b> — et port systématique de gants (à usage unique en secours à personnes, de travail en PPBE ou incendie). Au centre : sanitaires, chambres et vestiaires tenus avec rigueur.</p>' },
    { id: 'vehicule', t: 'Sécurité à bord des véhicules', ic: 'car', src: LIVPP + ', partie 1 (p. 6)',
      html: '<ul class="check"><li>Ceinture de sécurité obligatoire, en intervention comme en toute autre occasion.</li><li>On ne monte ni ne descend d’un véhicule sans en avoir reçu l’ordre ou la mission.</li><li>À l’arrivée, on reste dans le véhicule tant que le chef d’agrès n’a pas donné l’ordre d’en descendre ; non employé, on reste dans le véhicule.</li><li>Le conducteur reste toujours disponible pour son véhicule (à bord, à la pompe…), sauf cas très particulier.</li></ul>' +
        '<p>Bandes rétroréfléchissantes, éclairages spécifiques et feux de détresse des engins font partie de la <b>sécurité collective</b>.</p>' },
    { id: 'collectif', t: 'Les dispositions collectives de sécurité', ic: 'team', src: LIVPP + ', partie 1 (p. 6)',
      steps: ['Respecter strictement les ordres reçus.', 'Agir en concertation.', 'Rester constamment en liaison.', 'Surveiller son environnement proche.', 'Ne s’engager que si le cheminement est sûr et la retraite certaine.', 'Réfléchir avant l’action.', 'Informer son supérieur hiérarchique de tout fait nouveau ou de toute initiative.', 'Rendre compte sans délai lorsque la mission est terminée.'], stepsTitle: 'Les 8 règles de chaque sapeur-pompier',
      after: '<p>Le dispositif de secours y ajoute : un <b>périmètre de sécurité</b> selon la nature du risque et le dégagement de l’espace de travail, le <b>balisage</b> du site et, sur les interventions d’ampleur, la désignation d’un <b>officier sécurité</b> (conseiller du COS : il évalue le niveau global de sécurité, en rend compte et propose des corrections).</p>' },
    { id: 'od', t: 'Les opérations diverses et leurs risques', ic: 'list', src: LIVPP + ', partie 2 (p. 7)',
      html: '<div class="tw"><table><thead><tr><th>Intervention</th><th>Risques</th></tr></thead><tbody>' +
        '<tr><td>Fuite d’eau</td><td>Glissade, risque électrique</td></tr>' +
        '<tr><td>Inondations</td><td>Noyade</td></tr>' +
        '<tr><td>Ouverture de porte</td><td>Blessure, chute et agression</td></tr>' +
        '<tr><td>Recherche, récupération d’objet</td><td>Blessure, chute</td></tr>' +
        '<tr><td>Dépose d’objet</td><td>Chute, écrasement</td></tr>' +
        '<tr><td>Faits d’animaux</td><td>Griffures, morsures, envenimation et zoonoses</td></tr>' +
        '<tr><td>Dégagement et nettoyage de chaussée</td><td>Renversement par un véhicule</td></tr>' +
        '<tr><td>Éboulement, effondrement</td><td>Écrasement, ensevelissement</td></tr>' +
        '<tr><td>Pollution, contamination</td><td>Atteinte de la santé</td></tr>' +
        '<tr><td>Découverte d’engin explosif</td><td>Explosion, incendie et blast</td></tr>' +
        '<tr><td>Piquets de sécurité, surveillance</td><td>Multiples victimes</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Les qualités d’un bon équipier</b> : parfaite connaissance des matériels et techniques ; rigueur dans le respect des ordres du chef d’agrès ; respect des règles de sécurité et du port des EPI ; vigilance sur l’environnement de travail pour soi et son équipe ; compte rendu au chef d’agrès (difficultés, évolution) ; calme et courtoisie, en rassurant les sinistrés.</p>' +
        '<p class="small muted">Les ascenseurs (partie 12 du livret) sont vus au stage Équipier incendie : voir <a href="#/c/inc-ascenseurs">Les ascenseurs : personnes bloquées en cabine</a>.</p>' }
  ],
  key: ['Tenue d’intervention de base obligatoire (arrêté du 6 mai 2000, art. 2) sauf équipements spéciaux.', 'Tenue de base : casque, F1, veste, ceinturon, gants, bottes.', 'Tenue : se protéger, être vu, être identifié.', 'Ne jamais rentrer chez soi en tenue d’intervention ; gants systématiques.', 'Ceinture obligatoire ; on ne descend du véhicule que sur ordre du chef d’agrès.', 'S’engager seulement si le cheminement est sûr et la retraite certaine.', 'Fuite d’eau → glissade et électricité ; animaux → morsures, envenimation, zoonoses ; chaussée → renversement.', 'Fiche pré-stage signée par le chef de centre, apportée le 1er jour.'],
  traps: ['Quitter l’engin à l’arrivée sans ordre du chef d’agrès « pour gagner du temps ».', 'Oublier le risque électrique sur une simple fuite d’eau.', 'Rentrer chez soi en tenue après une intervention contaminante.', 'Croire que le gilet haute visibilité ou le casque F2 se choisissent librement : c’est sur ordre du COS.'],
  quiz: [
    { q: 'Quel texte rend obligatoire le port de la tenue d’intervention de base ?', c: ['L’arrêté du 6 mai 2000 (article 2)', 'Le code de la route', 'Le règlement intérieur du CIS uniquement', 'Aucun texte, c’est une recommandation'], e: 'Livret PPBE p. 5 : article 2 de l’arrêté du 06 mai 2000.', s: 'epi' },
    { q: 'Quels sont les principaux risques d’une intervention pour fuite d’eau ?', c: ['Glissade et risque électrique', 'Noyade et ensevelissement', 'Explosion et blast', 'Morsures et zoonoses'], e: 'Livret PPBE p. 7, tableau des opérations diverses. (Question 1 de l’évaluation diagnostique.)', s: 'od' },
    { q: 'Lors d’un dégagement ou nettoyage de chaussée, le risque principal est :', c: ['Le renversement par un véhicule', 'La noyade', 'La chute de hauteur', 'L’intoxication au CO'], e: 'Livret PPBE p. 7 : d’où le balisage et le gilet haute visibilité sur la voie publique.', s: 'od' },
    { q: 'À l’arrivée sur les lieux, l’équipier :', c: ['Reste dans le véhicule tant que le chef d’agrès n’a pas donné l’ordre d’en descendre', 'Descend immédiatement pour reconnaître', 'Descend pour baliser sans attendre', 'Va au-devant du requérant'], e: 'Livret PPBE p. 6, sécurité à bord des véhicules.', s: 'vehicule' },
    { q: 'Parmi ces règles, laquelle fait partie des dispositions collectives de sécurité ?', c: ['Ne s’engager que si le cheminement est sûr et la retraite certaine', 'Agir seul pour aller plus vite', 'Rendre compte uniquement en fin de journée', 'Prendre des initiatives sans prévenir'], e: 'Livret PPBE p. 6 : les 8 règles de chaque sapeur-pompier.', s: 'collectif' },
    { q: 'Après une intervention contaminante, il faut :', c: ['Changer de tenue ; ne jamais regagner son domicile en tenue d’intervention', 'Rentrer chez soi et laver la tenue en machine', 'Simplement se laver les mains', 'Garder la tenue jusqu’à la prochaine garde'], e: 'Livret PPBE p. 5, hygiène et alimentation.', s: 'regles' },
    { q: 'Avec quoi le stagiaire doit-il se présenter le premier jour du stage Équipier PPBE ?', c: ['La fiche individuelle pré-stage signée par son chef de centre', 'Son LSPCC personnel', 'Une attestation de l’évaluation finale', 'Rien de particulier'], e: 'Fiche individuelle pré-stage Équipier PPBE.', s: 'prestage' },
    { q: 'La tenue de protection doit permettre de se protéger, d’être vu et :', c: ['D’être identifié dans sa fonction', 'D’être plus rapide', 'De se passer des gants', 'D’éviter l’ARI'], e: 'Livret PPBE p. 5 : bandes de couleur selon le grade.', s: 'epi' }
  ]
});

/* =====================================================================================
   CHAPITRE 2 — LA MGO DES INTERVENTIONS PPBE
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-mgo', part: 'ppbe', seq: PP1,
  title: 'La Marche Générale des Opérations des interventions PPBE', short: 'MGO PPBE', motif: 'list',
  sources: [LIVPP + ', partie 3 (p. 8)'],
  summary: 'Quatre temps : reconnaissance de la situation, protection, mise en place des moyens d’action, actions post-évènement.',
  why: '<b>Pourquoi une MGO pour une simple inondation de cave ?</b> Parce que l’ordre des actions protège d’abord les personnes, puis les biens, et évite d’engager du matériel à l’aveugle. La reconnaissance permet au chef d’agrès de dimensionner la réponse (matériel, renforts, durée) ; l’équipier, lui, note ce qui est fait pour que le compte rendu (CRSS) soit précis.',
  sections: [
    { id: 'phases', t: 'Les 4 phases', ic: 'list', src: LIVPP + ', partie 3 (p. 8)',
      steps: ['Chef d’agrès : reconnaissance de la situation — ampleur du sinistre, risques présents, personnes concernées et menacées par l’évolution possible, biens à sauver ou à protéger, matériel à mettre en œuvre, demandes de moyens supplémentaires.', 'Protection : comme pour un incendie, les personnes menacées, impliquées ou concernées sont mises à l’abri hors de la zone d’intervention ; les biens menacés sont mis à l’abri ou déplacés si les moyens humains le permettent ; un périmètre de sécurité peut être établi.', 'Mise en place des moyens d’action : dimensionnée par le COS (évènement mineur) ou coordonnée par un chef de groupe ou plus (grande ampleur). Port des EPI obligatoire pour tout intervenant ; recours aux professionnels (charpentier…) toujours privilégié.', 'Actions post-évènement : épuisement de locaux après une décrue, pose d’étaiement sur des biens dont la structure a évolué (humidité, affaissement du sol…).'], stepsTitle: 'MGO des interventions PPBE',
      after: '<div class="callout ok">L’équipier <b>note les actions effectuées et leurs conséquences</b> pour permettre au chef d’agrès d’établir un <b>CRSS précis</b>.</div>' +
        '<p class="small muted">La reconnaissance est <b>réalisée par le chef d’agrès</b>. Comparer avec la MGO incendie : <a href="#/c/inc-mgo">La Marche Générale des Opérations</a>.</p>' }
  ],
  key: ['MGO PPBE : reconnaissance → protection → moyens d’action → post-évènement.', 'Reconnaissance réalisée par le chef d’agrès.', 'Personnes d’abord mises à l’abri hors zone, puis biens.', 'EPI obligatoires pendant la mise en place des moyens.', 'Recours aux professionnels (charpentier…) toujours privilégié.', 'Noter actions et conséquences pour le CRSS.'],
  traps: ['Commencer à pomper avant d’avoir mis les personnes à l’abri et reconnu les risques.', 'Oublier que des actions peuvent suivre l’évènement (décrue, étaiement).'],
  quiz: [
    { q: 'Quelle est la première phase de la MGO des interventions PPBE ?', c: ['La reconnaissance de la situation', 'La mise en place des moyens d’action', 'La protection des biens', 'Les actions post-évènement'], e: 'Livret PPBE p. 8.', s: 'phases' },
    { q: 'Qui réalise la reconnaissance de la situation ?', c: ['Le chef d’agrès', 'L’équipier le plus ancien', 'Le requérant', 'Le CODIS'], e: 'Livret PPBE p. 8 : « Réalisée par le chef d’agrès ».', s: 'phases' },
    { q: 'Pendant la mise en place des moyens d’action, le port des EPI est :', c: ['Obligatoire pour tout intervenant', 'Facultatif sans fumée', 'Réservé au chef d’agrès', 'Laissé au choix de l’équipier'], e: 'Livret PPBE p. 8.', s: 'phases' },
    { q: 'Pour réparer une charpente, le livret recommande :', c: ['De privilégier toujours le recours à des professionnels (charpentier…)', 'De faire réparer par l’équipe PPBE', 'D’attendre la prochaine garde', 'De demander au propriétaire de monter sur le toit'], e: 'Livret PPBE p. 8, phase 3.', s: 'phases' },
    { q: 'Pourquoi l’équipier note-t-il les actions effectuées et leurs conséquences ?', c: ['Pour que le chef d’agrès établisse un CRSS précis', 'Pour facturer lui-même le requérant', 'Pour informer la presse', 'Ce n’est pas demandé'], e: 'Livret PPBE p. 8.', s: 'phases' }
  ]
});

/* =====================================================================================
   CHAPITRE 3 — ASSÈCHEMENT / ÉPUISEMENT : RECONNAISSANCE ET CALCULS
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-epuisement-calculs', part: 'ppbe', seq: PP2,
  title: 'Assèchement et épuisement : reconnaissance et calculs', short: 'Épuisement : calculs', motif: 'drop',
  sources: [LIVPP + ', partie 4 (p. 9-12)', EVALPP],
  summary: 'Avant de pomper : reconnaître (crue ? point bas ? où évacuer ?), calculer le volume d’eau et en déduire la durée de pompage.',
  why: '<b>Pourquoi calculer avant de pomper ?</b> Le volume d’eau et le débit du matériel donnent la <b>durée de l’intervention</b> : c’est ce qui permet au chef d’agrès de choisir le bon matériel, de demander des renforts et d’informer les sinistrés. Et pomper pendant une crue ne sert à rien tant que la décrue n’est pas amorcée.',
  sections: [
    { id: 'reco', t: 'Réactions immédiates et reconnaissance', ic: 'eye', src: LIVPP + ', partie 4 (p. 9 et 12)',
      html: '<p><b>Réactions immédiates</b> commandées par le chef d’agrès : évacuation et mise en sécurité des occupants, barrage des fluides, périmètre de sécurité…</p>' +
        '<p>La <b>reconnaissance</b> détermine : l’ampleur du sinistre ; les risques présents (<b>énergie, fluide, fosses</b>…) ; les personnes concernées ou menacées ; les biens à sauver ou protéger ; le matériel à mettre en œuvre ; les moyens supplémentaires ; <b>la durée estimée de l’intervention</b>.</p>' +
        '<p><b>Assèchement</b> : habitation avec un « faible » niveau d’eau. <b>Épuisement</b> : grande quantité d’eau (inondation, rupture de grosse canalisation en sous-sol d’immeuble ou parking souterrain…).</p>',
      figs: [{ img: 'img/ppbe/epuisement-reco.jpg', cap: 'Les questions à se poser avant un épuisement', txt: '<p>Point le plus bas pour placer la pompe ; éventuel dénivelé ; <b>crue ? inutile de pomper tant que la décrue n’est pas amorcée</b> ; point de station de la pompe <b>strictement horizontal</b> ; évacuer l’eau vers les pentes, avaloirs pluviaux, fossés, égouts pour ne pas provoquer d’autres dégâts.</p>', src: LIVPP + ', p. 12' }] },
    { id: 'cubage', t: 'Calcul du cubage et de la durée', ic: 'target', src: LIVPP + ', partie 4 (p. 9-11)',
      html: '<p>Une fois la hauteur d’eau estimée : <b>volume (m³) = surface de la pièce (m²) × hauteur d’eau (m)</b>. Pour un rectangle, S = A × B, donc V = (A × B) × H.</p>' +
        '<div class="callout ok"><b>Exemple du livret</b>Pièce de 2,5 m × 8 m, hauteur d’eau 0,60 m → surface 2,5 × 8 = <b>20 m²</b> → volume 20 × 0,60 = <b>12 m³</b>. Avec une pompe électrique de <b>15 m³/h</b> : 12 ÷ 15 = <b>0,8 h</b>, soit 0,8 × 60 = <b>48 minutes</b>.</div>' +
        '<p>Durée (h) = volume (m³) ÷ débit (m³/h) ; on multiplie par 60 pour l’obtenir en minutes.</p>' +
        '<h3>Conversion des débits les plus usuels</h3><div class="tw"><table><thead><tr><th>L/s</th><th>L/min</th><th>m³/h</th></tr></thead><tbody>' +
        '<tr><td>4,2</td><td>250</td><td>15</td></tr><tr><td>8,3</td><td>500</td><td>30</td></tr><tr><td>16,7</td><td>1 000</td><td>60</td></tr><tr><td>25</td><td>1 500</td><td>90</td></tr><tr><td>33,3</td><td>2 000</td><td>120</td></tr>' +
        '</tbody></table></div><p class="small muted">Rappel : 1 m³ = 1 000 L ; 1 m³/h = 1 000 L ÷ 60 min ≈ 16,7 L/min. Le livret donne aussi les aires (carré l × l, rectangle L × l, triangle b × h ÷ 2, disque π × r²) et les volumes usuels (p. 10-11).</p>' },
    { id: 'psy', t: 'L’aspect psychologique', ic: 'heart', src: LIVPP + ', partie 4 (p. 9)',
      html: '<p>L’eau est un vecteur de destruction des biens (pourrissement, destruction…). Faire preuve de <b>bienveillance</b> envers les sinistrés et les décharger du « travail d’Hercule » en mobilisant les personnels pour sauver ce qui peut l’être : <b>surélever les meubles, sortir les objets de valeur</b>…</p>' }
  ],
  key: ['Reconnaissance : risques énergie, fluides, fosses ; durée estimée de l’intervention.', 'Crue : inutile de pomper tant que la décrue n’est pas amorcée.', 'Pompe au point le plus bas, posée strictement à l’horizontale.', 'Évacuer vers pentes, avaloirs pluviaux, fossés, égouts.', 'V = S × H ; rectangle : (A × B) × H.', 'Durée (h) = V ÷ débit ; × 60 pour les minutes.', '12 m³ à 15 m³/h → 0,8 h = 48 min.', '15 m³/h = 250 L/min ≈ 4,2 L/s ; 60 m³/h = 1 000 L/min.'],
  traps: ['Multiplier par 60 le volume au lieu de la durée en heures.', 'Pomper pendant la montée des eaux.', 'Rejeter l’eau là où elle crée d’autres dégâts.', 'Oublier la hauteur d’eau dans le calcul (surface seule).'],
  quiz: [
    { q: 'Pièce de 2,5 m × 8 m avec 0,60 m d’eau, pompe de 15 m³/h. Durée de pompage ?', c: ['48 minutes', '12 minutes', '1 h 20', '20 minutes'], e: 'Livret p. 9 : 2,5 × 8 = 20 m² ; × 0,60 = 12 m³ ; 12 ÷ 15 = 0,8 h = 48 min.', s: 'cubage' },
    { q: 'Vrai ou faux : le cubage d’un rectangle se calcule S (A × B) × H.', c: ['Vrai', 'Faux'], e: 'Évaluation diagnostique Q14 : surface A × B multipliée par la hauteur d’eau.', s: 'cubage' },
    { q: 'Le chiffre obtenu en divisant le volume (m³) par le débit (m³/h) est une durée en heures. Pour l’avoir en minutes :', c: ['On le multiplie par 60', 'On le divise par 60', 'On le multiplie par 1 000', 'On le divise par 15'], e: 'Livret p. 9 : 0,8 h × 60 = 48 min. (Évaluation diagnostique Q15 : ce n’est pas le cubage qu’on multiplie par 60.)', s: 'cubage' },
    { q: 'Un débit de 15 m³/h correspond à environ :', c: ['250 L/min', '15 L/min', '1 000 L/min', '25 L/s'], e: 'Livret p. 11, tableau de conversion des débits.', s: 'cubage' },
    { q: 'L’eau monte encore dans le quartier (crue). Que faire du pompage ?', c: ['Il est inutile de pomper tant que la décrue n’est pas amorcée', 'Pomper au maximum immédiatement', 'Pomper vers la rue voisine', 'Pomper uniquement la nuit'], e: 'Livret p. 12.', s: 'reco' },
    { q: 'Où place-t-on la pompe ?', c: ['Au point le plus bas, sur un point de station strictement horizontal', 'Au point le plus haut', 'N’importe où dans la pièce', 'Dans l’engin'], e: 'Livret p. 12.', s: 'reco' },
    { q: 'La différence entre assèchement et épuisement tient surtout à :', c: ['La quantité d’eau : faible pour l’assèchement, grande pour l’épuisement', 'La couleur de l’eau', 'L’heure de l’intervention', 'Le type de pompe uniquement'], e: 'Livret p. 11.', s: 'reco' }
  ]
});

/* =====================================================================================
   CHAPITRE 4 — LE MATÉRIEL D’ÉPUISEMENT
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-epuisement-materiel', part: 'ppbe', seq: PP2,
  title: 'Le matériel d’épuisement : thermique, hydraulique, électrique, manuel', short: 'Matériel d’épuisement', motif: 'wave',
  sources: [LIVPP + ', partie 4 (p. 12-18)', EVALPP],
  summary: 'Motopompes, hydroéjecteur, vide-cave, pompes électriques, aspirateur à eau et matériel manuel : capacités, mise en œuvre et règles de sécurité.',
  why: '<b>Pourquoi tant de matériels différents ?</b> Ce sont les causes et l’importance de l’inondation qui décident. Un moteur thermique produit du monoxyde de carbone : il reste dehors. Un appareil électrique dans l’eau peut électrocuter : prise de terre, protection différentielle et boîtiers étanches. Connaître les limites (débit, hauteur d’aspiration) évite de choisir un appareil qui n’arrivera jamais à vider le local.',
  sections: [
    { id: 'capacites', t: 'Capacités des matériels', ic: 'list', src: LIVPP + ', p. 13-18 (encadrés des matériels)',
      html: '<div class="tw"><table><thead><tr><th>Matériel</th><th>Type</th><th>Débit</th><th>Hauteur maxi d’aspiration</th></tr></thead><tbody>' +
        '<tr><td><b>Motopompe d’épuisement (MPE)</b></td><td>Thermique</td><td>15 à 60 m³/h selon les modèles</td><td>7 m</td></tr>' +
        '<tr><td><b>Motopompe remorquable (MPR)</b></td><td>Thermique</td><td>60 à 120 m³/h selon les modèles</td><td>7 m</td></tr>' +
        '<tr><td><b>Hydroéjecteur</b></td><td>Hydraulique</td><td>15 m³/h maxi</td><td>20 m</td></tr>' +
        '<tr><td><b>Vide-cave</b></td><td>Hydraulique</td><td>30 m³/h maxi</td><td>25 m (25 à 30 m maxi selon le texte)</td></tr>' +
        '<tr><td><b>Pompe d’épuisement électrique</b></td><td>Électrique</td><td>15 à 30 m³/h selon les modèles</td><td>Propre à chaque modèle</td></tr>' +
        '<tr><td><b>Aspirateur à eau</b></td><td>Électrique</td><td>Cuve de 50 à 60 L</td><td>Assèchement de quelques millimètres</td></tr>' +
        '</tbody></table></div><p class="small muted">Valeurs des encadrés du livret ; se référer à la notice du constructeur. La motopompe flottante est surtout utilisée par les CCF (feux de forêts).</p>' },
    { id: 'mpe', t: 'La motopompe d’épuisement (MPE)', ic: 'alert', src: LIVPP + ', p. 13-14',
      html: '<p>Matériel portable : pompe avec dispositif d’amorçage accouplée à un moteur thermique. Avant le départ : niveaux d’huile et de carburant, tuyau d’aspiration et sa crépine, jerrican d’essence ; <b>amarrer le matériel dans l’engin</b>.</p>' +
        '<div class="callout warn"><b>Consignes de sécurité avant de démarrer</b>MPE <b>obligatoirement sur terrain plat</b> (ou calée à plat sur une faible pente) et <b>à l’extérieur des locaux inondés</b> (intoxication au CO par les gaz d’échappement) ; plein <b>moteur arrêté</b> ; éviter autant que possible l’aspiration en <b>« col de cygne »</b> (tuyau qui passe au-dessus de la MPE et forme un coude emprisonnant de l’air, ce qui gêne l’aspiration).</div>',
      steps: ['MPE placée à l’extérieur pour éviter tout risque d’intoxication.', 'Ne jamais l’utiliser en relais.', 'Amarrer la MPE si la surface n’est pas plane.', 'Utiliser une crépine.', 'Avant l’utilisation, vérifier que tous les organes sont bien fixés.', 'Remplir le bloc pompe d’eau.', 'Prendre les précautions nécessaires lors du remplissage de carburant.', 'Vérifier le bon déroulement de l’assèchement (crépine, évacuation).', 'Vidanger le corps de pompe et rincer la MPE après chaque utilisation.'], stepsTitle: 'Mise en œuvre de la MPE (9 points)' },
    { id: 'aspiration', t: 'Ligne d’aspiration et cavitation (pour information)', ic: 'team', src: LIVPP + ', p. 14-15',
      html: '<p>La motopompe remorquable (tractée par un timon) fonctionne en aspiration ; elle est vue au stage Équipier incendie. Mise en œuvre d’une ligne d’aspiration : le binôme pose la <b>crépine à environ 8 m pour 4 tuyaux</b> (2 m par tuyau) de l’arrière de la MPR, le <b>flotteur</b> à côté de la crépine, la <b>commande</b> à côté du flotteur, puis les tuyaux bout à bout sans les raccorder, de l’engin vers la crépine.</p>' +
        '<div class="tw"><table><thead><tr><th>Chef</th><th>Équipier</th></tr></thead><tbody><tr><td><ul class="check"><li>Se place côté crépine, pieds de part et d’autre de la crépine ; regarde la propreté du joint.</li><li>Raccorde crépine et 1er tuyau, serre les demi-raccords avec les clés tricoises, mains à plat ; idem vers l’engin.</li><li>Amarre le flotteur à la crépine ; fait deux demi-clefs (demi-raccord de la crépine, demi-raccord du tuyau).</li><li>Immerge la crépine une fois la ligne raccordée ; attache la commande en amont du courant à un point fixe (engin, piquet) pour éloigner la crépine de la berge.</li></ul></td>' +
        '<td><ul class="check"><li>Se place face au chef (dos à l’engin), pieds de part et d’autre du tuyau ; regarde la propreté du joint.</li><li>Aide le chef à raccorder le 1er tuyau et la crépine ; mêmes gestes vers l’engin.</li><li>Aide le conducteur à raccorder la ligne sur la pompe de l’engin ; aide le chef à immerger la crépine.</li></ul></td></tr></tbody></table></div>' +
        '<p><b>Précautions</b> : laisser le raccord filtre monté en permanence ; surveiller le refroidissement moteur ; en cas de gel, vidanger pompe et amorceur (et bloc moteur si circuit ouvert) ; toujours créer un circuit d’eau dans le corps de pompe si aucune lance ne débite (purge ou refoulement légèrement ouvert) : une pompe atteint <b>40 °C après 5 minutes à 10 bars</b> sans débit.</p>' +
        '<div class="callout bad"><b>Cavitation : danger !</b>La pompe veut donner plus qu’elle ne reçoit : bruit très caractéristique. Causes : crépine bouchée, prise d’air sur l’aspiration, hauteur géométrique d’aspiration trop élevée (<b>&gt; 7,50 m</b>).</div>' },
    { id: 'hydraulique', t: 'Le matériel hydraulique : hydroéjecteur et vide-cave', ic: 'drop', src: LIVPP + ', p. 16-17',
      html: '<p><b>Hydroéjecteur</b> : pour un volume d’eau limité, ou pomper dans une nappe quand la mise en aspiration d’une pompe est impossible (distance, hauteur trop élevée). Alimenté par un engin pompe en <b>DN 45 sous 8 à 10 bars</b> ; l’eau en pression forme un jet qui aspire par dépression (cône de Venturi) ; eau motrice et eau aspirée sortent ensemble par la <b>sortie DN 70</b>. Sa puissance de pompage est <b>inférieure à celle du vide-cave</b>.</p>' +
        '<p><b>Vide-cave</b> : caves, puits, réservoirs, cales, locaux inondés ; <b>idéal pour les eaux chargées</b> ; utile aussi quand l’aspiration est trop profonde (25 à 30 m maxi) ou la prise d’eau difficile d’accès. Deux circuits : entraînement de la turbine par l’eau sous pression, et pompage-refoulement. Il fonctionne <b>immergé</b>, turbine alimentée par un tuyau de <b>70 mm</b>.</p>',
      steps: ['Descendre le vide-cave avec une commande en évitant les chocs.', 'Selon l’emplacement de travail, sangler les raccords des tuyaux.', 'Disposer le vide-cave bien à plat sur son embase.', 'Mettre éventuellement une protection contre les grosses impuretés (panier en osier…).', 'Veiller à ce que l’eau d’alimentation soit entre 6 et 8 bars.', 'Nettoyer de temps en temps la crépine ; laver et rincer le matériel après usage.'], stepsTitle: 'Mise en œuvre du vide-cave' },
    { id: 'electrique', t: 'Le matériel électrique et manuel', ic: 'bolt', src: LIVPP + ', p. 17-18',
      html: '<p><b>Pompe d’épuisement électrique</b> (15 ou 30 m³/h, moteur à commande à distance par câble) :</p><ul class="check"><li>ne jamais immerger la fiche du câble ;</li><li>prise de courant munie d’une <b>prise de terre</b> ;</li><li>la partie basse de la pompe toujours dans l’eau en fonctionnement ;</li><li>ne pas la poser à même le sol : intercaler un objet (une brique) pour éviter d’aspirer boue ou sable ;</li><li>l’amarrer avec une commande ; le moins de coudes possible sur le refoulement ;</li><li>débrancher avant toute manipulation ; ne la porter que par sa poignée.</li></ul>' +
        '<div class="callout bad"><b>Électricité et eau</b>La source d’énergie se prend chez les voisins ou par un groupe électrogène placé à l’extérieur des locaux touchés. <b>L’emploi des protections différentielles et des boîtiers étanches est obligatoire</b> pour tout matériel électrique.</div>' +
        '<p><b>Aspirateur à eau</b> : petits volumes (pas assez de hauteur pour une autre solution), cuve de 50 à 60 L, assèche quelques millimètres ; finition après épuisement ou endroits délicats.</p>' +
        '<p><b>Matériel manuel</b> : raclettes (fine couche de liquide), cuissardes (garder les vêtements secs), écopes (enlever et transporter l’eau), serpillières (canaliser l’eau, assécher les parquets, à placer au seuil des portes).</p>' }
  ],
  key: ['MPE : 15-60 m³/h, 7 m ; MPR : 60-120 m³/h, 7 m.', 'Hydroéjecteur : DN 45 à 8-10 bars, sortie DN 70, 15 m³/h, 20 m.', 'Vide-cave : immergé, alimenté en 70 mm à 6-8 bars, 30 m³/h, eaux chargées.', 'Pompe électrique : 15 à 30 m³/h ; fiche jamais immergée ; sur une brique.', 'Différentiel + boîtiers étanches obligatoires pour tout matériel électrique.', 'Matériel thermique toujours à l’extérieur (CO) ; plein moteur arrêté.', 'Éviter le col de cygne ; cavitation si crépine bouchée, prise d’air, aspiration > 7,50 m.', 'MPE jamais en relais ; vidanger et rincer après usage.'],
  traps: ['Faire tourner une motopompe ou un groupe dans une cave fermée.', 'Croire que la MPR débite 30 m³/h (c’est 60 à 120).', 'Croire que l’hydroéjecteur aspire à 7 m maxi (c’est 20 m).', 'Poser la pompe électrique directement au fond du puisard.', 'Brancher une pompe électrique sans différentiel ni boîtier étanche.'],
  quiz: [
    { q: 'Vrai ou faux : une motopompe remorquable (MPR) débite 30 m³/h.', c: ['Faux : 60 à 120 m³/h selon les modèles', 'Vrai'], e: 'Livret p. 14 (encadré MPR). Évaluation diagnostique Q16.', s: 'capacites' },
    { q: 'Vrai ou faux : une motopompe d’épuisement (MPE) débite entre 15 et 60 m³/h.', c: ['Vrai', 'Faux'], e: 'Livret p. 13 (encadré MPE). Évaluation diagnostique Q17.', s: 'capacites' },
    { q: 'Vrai ou faux : la hauteur maximale d’aspiration d’un hydroéjecteur est de 7 m.', c: ['Faux : 20 m', 'Vrai'], e: 'Livret p. 16 (encadré hydroéjecteur). 7 m est la hauteur des motopompes. Évaluation diagnostique Q18.', s: 'capacites' },
    { q: 'Vrai ou faux : une pompe électrique débite de 15 à 30 m³/h.', c: ['Vrai', 'Faux'], e: 'Livret p. 17. Évaluation diagnostique Q19.', s: 'electrique' },
    { q: 'Vrai ou faux : protection différentielle et boîtiers étanches sont obligatoires pour la mise en œuvre de tout matériel électrique.', c: ['Vrai', 'Faux'], e: 'Livret p. 18 : « Il est obligatoire d’utiliser les protections différentielles et les boîtiers étanches ». Évaluation diagnostique Q20.', s: 'electrique' },
    { q: 'Vrai ou faux : on peut utiliser du matériel thermique dans un espace clos.', c: ['Faux : risque d’intoxication au CO', 'Vrai'], e: 'Livret p. 13 et 19 : MPE et groupes électrogènes à l’extérieur. Évaluation diagnostique Q21.', s: 'mpe' },
    { q: 'Vrai ou faux : pour une aspiration rapide et efficace, il faut réaliser un « col de cygne ».', c: ['Faux : il faut l’éviter, le coude emprisonne de l’air', 'Vrai'], e: 'Livret p. 13. Évaluation diagnostique Q22.', s: 'mpe' },
    { q: 'L’hydroéjecteur est alimenté par :', c: ['Un établissement de 45 mm sous 8 à 10 bars depuis un engin pompe', 'Un groupe électrogène', 'Un tuyau de 110 mm à 2 bars', 'Une batterie'], e: 'Livret p. 16 ; sortie DN 70.', s: 'hydraulique' },
    { q: 'Quel matériel est idéal pour les eaux chargées ?', c: ['Le vide-cave', 'L’aspirateur à eau', 'L’hydroéjecteur', 'La serpillière'], e: 'Livret p. 17.', s: 'hydraulique' },
    { q: 'Quelle est une cause fréquente de cavitation ?', c: ['Une crépine d’aspiration bouchée', 'Une pompe trop froide', 'Un tuyau de refoulement trop court', 'Une pression d’eau trop faible au refoulement'], e: 'Livret p. 15 : crépine bouchée, prise d’air, hauteur d’aspiration > 7,50 m.', s: 'aspiration' },
    { q: 'Pourquoi intercaler une brique sous la pompe électrique ?', c: ['Pour éviter d’aspirer de la boue ou du sable', 'Pour qu’elle refroidisse', 'Pour la rendre visible', 'Pour la mettre à la terre'], e: 'Livret p. 18.', s: 'electrique' },
    { q: 'Lors de la mise en place d’une ligne d’aspiration de 4 tuyaux, la crépine est posée à environ :', c: ['8 m de l’arrière de l’engin', '4 m', '20 m', '2 m'], e: 'Livret p. 14 : un multiple de 2 m par tuyau.', s: 'aspiration' }
  ]
});

/* =====================================================================================
   CHAPITRE 5 — L’ÉCLAIRAGE
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-eclairage', part: 'ppbe', seq: PP2,
  title: 'Les opérations d’éclairage et le groupe électrogène', short: 'Éclairage', motif: 'sun',
  sources: [LIVPP + ', partie 5 (p. 19-21)', EVALPP],
  summary: 'Éclairer de haut en formant un large cône de lumière, avec un groupe électrogène placé dehors, sur terrain plat et mis à la terre.',
  why: '<b>Pourquoi l’éclairage est-il une mesure de sécurité ?</b> Parce qu’une zone d’intervention de nuit est accidentée (débris, trous, éléments instables). Mais un projecteur mal placé, à hauteur d’homme, éblouit intervenants et victimes ; et un groupe électrogène mal installé intoxique (CO) ou électrocute.',
  sections: [
    { id: 'principes', t: 'Éclairer la zone', ic: 'sun', src: LIVPP + ', p. 19',
      html: '<p>Éclairer de façon optimale en prenant de préférence des <b>points en hauteur</b> pour former un <b>« cône d’éclairage »</b> le plus large possible ; <b>éviter l’éclairage direct et horizontal à hauteur d’homme</b> qui éblouit.</p>' +
        '<p><b>Groupe électrogène</b> : moteur thermique produisant de l’électricité (portable, embarqué, remorquable ou automobile) ; démarrage au lanceur ou au démarreur ; puissance en VA, kVA ou MVA. Certains engins ont des moyens plus puissants : FEV (fourgon électro-ventilateur), CEEV (cellule éclairage électro-ventilateur) ou cellule d’éclairage.</p>' +
        '<p><b>Matériels</b> : lampes portatives ; projecteurs 500 W sur trépied ou mât, avec prise Maréchal ; ballons d’éclairage (dans les VSR) : <b>2 000 W, 1 400 m²</b> éclairés ; matériel auxiliaire : enrouleur, boîtier de jonction, trépied télescopique.</p>' },
    { id: 'securite', t: 'Rappels des mesures de sécurité', ic: 'alert', src: LIVPP + ', p. 21',
      html: '<ul class="check"><li>Groupe électrogène <b>à l’extérieur des locaux sinistrés</b>, sur <b>terrain plat</b>.</li><li>Plein fait <b>moteur arrêté</b>.</li><li>Ne surtout pas oublier la <b>mise à la terre</b>.</li><li>Dévidoir de câble : le <b>dérouler entièrement</b> pour éviter l’échauffement de la bobine et un début d’incendie.</li><li>Projecteurs halogènes très chauds : ne pas les manipuler allumés ni peu après extinction ; une fois montés, les déplacer sur leur trépied sans les incliner.</li><li>Ne jamais allumer les projecteurs si le mât du véhicule n’est pas déployé ; respecter un temps de refroidissement avant de ranger (sauf LED) ; vérifier le <b>reploiement complet du mât</b> avant de déplacer l’engin.</li></ul>' +
        '<div class="callout warn">Même si les matériels sont sécurisés, <b>électricité et humidité ne font pas bon ménage</b> : vigilance permanente pendant la manipulation.</div>' }
  ],
  key: ['Éclairer en hauteur, cône large ; jamais horizontal à hauteur d’homme.', 'Groupe électrogène : dehors, terrain plat, plein moteur arrêté, mise à la terre.', 'Dévidoir de câble entièrement déroulé.', 'Puissance d’un groupe en VA / kVA / MVA.', 'Ballon d’éclairage : 2 000 W, 1 400 m².', 'Mât déployé avant d’allumer ; replié avant de rouler.'],
  traps: ['Laisser le câble enroulé sur le dévidoir.', 'Déplacer un projecteur halogène encore chaud en l’inclinant.', 'Rouler avec le mât d’éclairage incomplètement replié.'],
  quiz: [
    { q: 'Règles de sécurité pour la mise en œuvre d’un groupe électrogène :', c: ['À l’extérieur, sur terrain plat, plein moteur arrêté et mise à la terre', 'Dans le local sinistré pour limiter la longueur de câble', 'N’importe où, il est sécurisé', 'Sur l’engin, moteur tournant pendant le plein'], e: 'Livret p. 21. Évaluation diagnostique Q6.', s: 'securite' },
    { q: 'Vrai ou faux : avec du matériel électrique sur groupe électrogène, la mise à la terre et le disjoncteur différentiel sont seulement « conseillés ».', c: ['Faux : la mise à la terre ne doit surtout pas être oubliée et le différentiel est obligatoire', 'Vrai'], e: 'Livret p. 18 et 21. Évaluation diagnostique Q23.', s: 'securite' },
    { q: 'Pourquoi dérouler entièrement un dévidoir de câble ?', c: ['Pour éviter l’échauffement de la bobine et un début d’incendie', 'Pour mieux voir le câble', 'Pour gagner du temps au rangement', 'Pour augmenter la puissance'], e: 'Livret p. 21.', s: 'securite' },
    { q: 'Comment placer les projecteurs ?', c: ['En hauteur, pour former un cône d’éclairage large, sans éclairage horizontal à hauteur d’homme', 'À hauteur d’homme, face aux intervenants', 'Au ras du sol', 'Face aux victimes'], e: 'Livret p. 19.', s: 'principes' },
    { q: 'Le ballon d’éclairage des VSR éclaire environ :', c: ['1 400 m² pour 2 000 W', '100 m² pour 500 W', '5 000 m² pour 10 kW', '400 m² pour 1 000 W'], e: 'Livret p. 20.', s: 'principes' }
  ]
});

/* =====================================================================================
   CHAPITRE 6 — LE FORCEMENT
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-forcement', part: 'ppbe', seq: PP2,
  title: 'Les opérations de forcement', short: 'Forcement', motif: 'hand',
  sources: [LIVPP + ', partie 6 (p. 22-23)'],
  summary: 'Les outils de forcement, leurs règles de sécurité et les principes : vérifier que c’est bien fermé, briser la vitre dans un coin haut, privilégier salle de bain, cuisine et toilettes.',
  why: '<b>Pourquoi tant de prudence pour « ouvrir une porte » ?</b> Un outil-levier rallongé peut éclater, une disqueuse peut toucher un câble ou enflammer une atmosphère explosive, et un bris de vitre projette des éclats. Et forcer une porte déjà ouverte, c’est des dégâts inutiles : on vérifie d’abord.',
  sections: [
    { id: 'outils', t: 'Les matériels', ic: 'hand', src: LIVPP + ', p. 22',
      html: '<div class="tw"><table><thead><tr><th>Outil</th><th>Usage</th></tr></thead><tbody>' +
        '<tr><td>Grande et petite pince</td><td>Outils de base pour forcer portes et fenêtres.</td></tr>' +
        '<tr><td>Hache d’incendie</td><td>Casser un angle de porte ou de fenêtre ; dégager des montants les morceaux de verre restés accrochés.</td></tr>' +
        '<tr><td>Hachette multifonction (outil de forcement et déblai, OFD)</td><td>Hache, marteau, arrache-clou et pince.</td></tr>' +
        '<tr><td>Coupe-boulon (petit et grand modèle)</td><td>Couper chaînes et cadenas.</td></tr>' +
        '<tr><td>Masse</td><td>Casser murs de parpaings, plaques de plâtre, plaques de ciment.</td></tr>' +
        '<tr><td>Écarteur</td><td>Écarter une porte de son huisserie.</td></tr>' +
        '<tr><td>Cisaille</td><td>Couper des éléments d’acier (barreaux).</td></tr>' +
        '<tr><td>Tronçonneuse</td><td>Couper des pièces de menuiserie uniquement.</td></tr>' +
        '<tr><td>Disqueuse</td><td>Créer des ouvertures dans les rideaux métalliques.</td></tr>' +
        '<tr><td>Barre Halligan + hache à tête plate (« la ferraille »)</td><td>Principalement forcer l’ouverture de porte.</td></tr>' +
        '</tbody></table></div><p class="small muted">Voir aussi <a href="#/c/inc-forcement">Le forcement : Halligan et outils de forcement</a> (partie Incendie).</p>' },
    { id: 'securite', t: 'Mesures de sécurité', ic: 'alert', src: LIVPP + ', p. 23',
      html: '<ul class="check"><li><b>Généralités</b> : ranger les outils à leur emplacement dans les coffres ; revêtir les protections (casque, lunettes, gants…) ; rester vigilant (chute de matériaux, bris de verre).</li>' +
        '<li><b>Outils de frappe</b> : outils <b>antidéflagrants</b> dans les zones à risque d’explosion.</li>' +
        '<li><b>Outils-leviers</b> (petite, grande pince…) : <b>jamais de rallonge</b> (tube d’acier) pour augmenter l’effet de levier : l’outil peut éclater.</li>' +
        '<li><b>Cisailles, disqueuses, scies</b> : EPI adaptés ; attention aux fils électriques cachés et canalisations ; jamais de disqueuse ni de machine thermique en atmosphère inflammable ou explosible.</li></ul>' },
    { id: 'techniques', t: 'Techniques de forcement', ic: 'target', src: LIVPP + ', p. 23',
      html: '<ul class="check"><li>S’assurer que la serrure est <b>effectivement verrouillée</b> : inutile d’enfoncer une porte ou une fenêtre déjà ouverte.</li><li>Le bris de vitre se fait <b>dans un coin de la partie haute</b> ; si nécessaire avec une échelle à coulisse, à défaut demander un MEA, et s’assurer au moyen du <b>LSPCC</b>.</li><li>Accès à privilégier : fenêtres de <b>salle de bain, cuisine et toilettes</b>.</li></ul>' +
        '<p class="small muted">Pour la partie forcement des accès, se rapprocher des référents des centres. Cadre et conduite à tenir d’une ouverture de porte : <a href="#/c/ppbe-ca-ouverture-porte">Ouverture de porte urgente (NDS 161 / POP 15)</a>.</p>' }
  ],
  key: ['Vérifier que la serrure est bien verrouillée avant de forcer.', 'Vitre brisée dans un coin de la partie haute.', 'Accès privilégiés : salle de bain, cuisine, toilettes.', 'Jamais de rallonge sur un outil-levier.', 'Outils antidéflagrants en zone à risque d’explosion.', 'Tronçonneuse : menuiserie uniquement ; disqueuse : rideaux métalliques.'],
  traps: ['Enfoncer une porte qui n’était pas fermée à clé.', 'Rallonger la grande pince avec un tube pour « avoir plus de force ».', 'Utiliser une disqueuse près d’une fuite de gaz.'],
  quiz: [
    { q: 'Avant de forcer une porte, le sapeur-pompier doit d’abord :', c: ['S’assurer que la serrure est effectivement verrouillée', 'Casser la vitre la plus proche', 'Appeler un serrurier', 'Démonter les gonds'], e: 'Livret p. 23.', s: 'techniques' },
    { q: 'Où briser une vitre pour entrer ?', c: ['Dans un coin de la partie haute', 'Au centre', 'Dans un coin bas', 'Peu importe'], e: 'Livret p. 23.', s: 'techniques' },
    { q: 'Quelles fenêtres faut-il privilégier pour pénétrer ?', c: ['Salle de bain, cuisine et toilettes', 'Salon et chambres', 'Les plus grandes baies vitrées', 'Celles de la façade principale'], e: 'Livret p. 23.', s: 'techniques' },
    { q: 'Pourquoi ne pas mettre de rallonge sur une pince ?', c: ['La force dépasse celle prévue et l’outil peut éclater', 'Cela abîme la porte', 'C’est trop long à mettre en place', 'Ce n’est pas interdit'], e: 'Livret p. 23.', s: 'securite' },
    { q: 'Quel outil sert à créer des ouvertures dans les rideaux métalliques ?', c: ['La disqueuse', 'La tronçonneuse', 'La masse', 'L’écarteur'], e: 'Livret p. 22 ; la tronçonneuse ne coupe que la menuiserie.', s: 'outils' },
    { q: 'En zone à risque d’explosion, on utilise des outils de frappe :', c: ['Antidéflagrants', 'Électriques', 'Thermiques', 'En acier trempé'], e: 'Livret p. 23.', s: 'securite' }
  ]
});

/* =====================================================================================
   CHAPITRE 7 — TRONÇONNAGE
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-tronconnage', part: 'ppbe', seq: PP2,
  title: 'Élagage et tronçonnage (approche théorique)', short: 'Tronçonnage', motif: 'alert',
  sources: [LIVPP + ', partie 7 (p. 24-26)'],
  summary: 'Partie théorique : les VID de la Marne ne sont pas équipés de tronçonneuse. Machine, EPI, ravitaillement, démarrage, position de travail et aire de sécurité.',
  why: '<b>Pourquoi l’étudier si les VID n’en ont pas ?</b> Après une tempête, dégager la voie publique ou abattre un arbre menaçant fait partie de la protection des biens. Deux dangers majeurs : la <b>chaîne</b> (lésions graves, section de membre) et le <b>bois</b> (un arbre peut tourner sur lui-même et tomber sur le tronçonneur), sans compter les fils électriques tombés.',
  sections: [
    { id: 'machine', t: 'La machine et ses EPI', ic: 'alert', src: LIVPP + ', p. 24-25',
      html: '<p>Moteur thermique <b>deux temps (mélange à 4 %)</b>, entretenu et mis en œuvre selon le constructeur. Seule l’urgence autorise un travail dans des conditions non idéales (personnel reposé, météo favorable, travail de jour). Si possible, <b>baliser le danger et intervenir plus tard</b> ; sans péril, l’autorité de police fait appel à une entreprise spécialisée.</p>' +
        '<p><b>EPI</b> : casque avec protection auditive et oculaire ; veste d’intervention ; gants de travail ; <b>surpantalon avec garniture anti-coupure (norme EN 381)</b> ; bottes d’intervention.</p>',
      figs: [{ img: 'img/ppbe/tronconneuse.jpg', cap: 'Description de la tronçonneuse', txt: '<p>Frein de chaîne, poignée anti-dérapante, lanceur, double gâchette, protège-main, remplissages carburant et huile de chaîne, ergot de blocage de chaîne, guide-chaîne, chaîne de coupe, griffes, échappement.</p>', src: LIVPP + ', p. 24' }] },
    { id: 'utilisation', t: 'Vérification, ravitaillement, démarrage', ic: 'list', src: LIVPP + ', p. 25-26',
      html: '<p><b>Vérifications</b> : bon état de fonctionnement ; frein de chaîne et protège-main avant ; guide-chaîne parfaitement monté ; chaîne correctement tendue ; gâchette d’accélérateur.</p>' +
        '<p><b>Ravitaillement</b> : moteur arrêté ; <b>huile de chaîne (1) avant l’essence (2)</b> ; pas de flamme, pas de cigarette, endroit aéré.</p>',
      steps: ['S’éloigner d’au moins 3 m du lieu du plein (risque d’incendie).', 'Poser la tronçonneuse sur un sol dur et plat, chaîne sans contact avec un objet.', 'Mettre le frein de chaîne.', 'Engager un pied dans la poignée arrière et plaquer la machine au sol avec la poignée avant.', 'Bouton de contact sur marche ou starter selon les conditions climatiques.', 'Tirer sur la poignée du lanceur.', 'Reprendre la machine fermement, main droite sur la poignée avant, main gauche sur la poignée arrière, et libérer le frein de chaîne.'], stepsTitle: 'Démarrage (une seule personne, personne dans le rayon d’action)' },
    { id: 'position', t: 'Position de travail et aire de sécurité', ic: 'shield', src: LIVPP + ', p. 26',
      html: '<p><b>Position</b> : poignée à pleine main, pouce dessous ; pieds écartés ; jambes pliées, coudes en appui sur les genoux ; travailler près du tronc, faire corps avec la machine ; s’aider de la jambe droite ; machine toujours côté droit du tronc ; deux pieds sur un sol ferme.</p>' +
        '<div class="callout warn"><b>Aire de travail</b>Abattage : distance minimale de sécurité = <b>deux fois la hauteur de l’arbre</b> le plus haut de la zone. Tronçonnage : <b>4,50 m minimum entre intervenants</b>.</div>' +
        '<ul class="check"><li>Faire couper le courant par EDF pour tout travail à proximité des réseaux.</li><li>Interdire la tronçonneuse au personnel non formé (plus de 10 000 tr/min).</li><li>Ne pas travailler seul ; ni observateurs ni animaux dans l’aire de travail.</li><li>Personne à proximité au démarrage ni pendant la coupe.</li><li>Jamais de coupe sans avoir repéré un chemin de fuite.</li></ul>',
      figs: [{ img: 'img/ppbe/abattage-zone.jpg', cap: 'Zone d’abattage', txt: '<p>Schéma du livret illustrant la zone de chute des arbres ; la règle à retenir est celle du texte : distance minimale de sécurité égale à deux fois la hauteur de l’arbre le plus haut.</p>', src: LIVPP + ', p. 26' }] }
  ],
  key: ['VID de la Marne non équipés de tronçonneuse : approche théorique.', 'Moteur 2 temps, mélange 4 %.', 'EPI : casque + protections auditive et oculaire, surpantalon anti-coupure EN 381.', 'Plein moteur arrêté, huile de chaîne avant essence ; démarrer à 3 m du plein.', 'Frein de chaîne mis au démarrage.', 'Abattage : 2 × hauteur de l’arbre ; tronçonnage : 4,50 m entre intervenants.', 'Jamais seul, chemin de fuite repéré, courant coupé près des réseaux.'],
  traps: ['Démarrer la tronçonneuse à l’endroit même où l’on vient de faire le plein.', 'Démarrer frein de chaîne desserré.', 'Laisser des curieux dans l’aire d’abattage.'],
  quiz: [
    { q: 'Les VID du SDIS de la Marne sont-ils équipés de tronçonneuse ?', c: ['Non, la partie tronçonnage est théorique', 'Oui, tous', 'Uniquement en hiver', 'Uniquement les VID de Reims'], e: 'Livret p. 24.', s: 'machine' },
    { q: 'Distance minimale de sécurité pendant l’abattage d’un arbre :', c: ['Deux fois la hauteur de l’arbre le plus haut de la zone', '4,50 m', 'La hauteur de l’arbre', '10 m'], e: 'Livret p. 26.', s: 'position' },
    { q: 'Pendant le tronçonnage, la distance minimale entre intervenants est de :', c: ['4,50 m', '1,50 m', '3 m', '10 m'], e: 'Livret p. 26.', s: 'position' },
    { q: 'Ordre du ravitaillement :', c: ['Moteur arrêté, huile de chaîne puis essence', 'Essence puis huile, moteur tournant', 'Huile seule', 'Peu importe'], e: 'Livret p. 26.', s: 'utilisation' },
    { q: 'Le surpantalon de l’utilisateur doit comporter :', c: ['Une garniture anti-coupure (norme EN 381)', 'Des bandes rétroréfléchissantes seulement', 'Une doublure thermique', 'Rien de particulier'], e: 'Livret p. 25.', s: 'machine' },
    { q: 'Au démarrage, on s’éloigne du lieu du plein d’au moins :', c: ['3 m', '50 cm', '10 m', '1 m'], e: 'Livret p. 26.', s: 'utilisation' }
  ]
});

/* =====================================================================================
   CHAPITRE 8 — BÂCHAGE
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-bachage', part: 'ppbe', seq: PP2,
  title: 'Phénomènes météorologiques : le bâchage', short: 'Bâchage', motif: 'shield',
  sources: [LIVPP + ', partie 8 (p. 27-29)', EVALPP],
  summary: 'Bâches textiles ou plastifiées, situations de bâchage (incendie, intempéries, inondation), vocabulaire de la charpente et technique de bâchage de toiture.',
  why: '<b>Pourquoi le bâchage est-il dangereux ?</b> Le risque principal est la <b>chute de hauteur</b> : toitures pentues, fragilisées, souvent humides, et le vent qui s’engouffre sous la bâche peut déséquilibrer le sapeur-pompier. D’où le LSPCC obligatoire et l’importance de savoir sur quoi on peut prendre appui dans une charpente.',
  sections: [
    { id: 'baches', t: 'Les bâches et les situations de bâchage', ic: 'list', src: LIVPP + ', p. 27',
      html: '<p><b>Bâches textiles</b> : grand modèle <b>6 m × 4 m</b>, petit modèle <b>3,5 m × 3 m</b>, avec œillets pour fixation par clous et ligatures. Avantage : solidité ; inconvénient : poids. <b>Bâches plastifiées</b> (polyéthylène) : légères (avantage au transport, inconvénient par grand vent), plus fragiles ; en rouleaux à usage unique sur lesquels on peut clouer un contre-lattage, uniquement pour protéger toitures et ouvertures.</p>' +
        '<div class="callout warn"><b>Précautions avant la pose</b>Pour ne pas détériorer la bâche, <b>enlever les clous restés</b> et <b>éviter les bords</b> (arêtes).</div>' +
        '<ul class="check"><li><b>Incendie</b> : objets menacés par fumées et eaux placés <b>au centre de la pièce</b>, surélevés et recouverts le plus hermétiquement possible ; après le feu, obturer toutes les ouvertures contre les intempéries.</li><li><b>Intempéries</b> : surélever les biens puis les recouvrir d’une bâche (pas de contact avec le sol mouillé).</li><li><b>Inondation</b> : surélever au maximum et <b>envelopper à partir du bas</b>.</li><li>Meubles : plateforme de surélévation (parpaings, briques…) au centre de la pièce, rassembler meubles et objets de valeur, recouvrir. Marchandises : même principe, bâche placée dessous.</li></ul>' },
    { id: 'charpente', t: 'La charpente : où prendre appui ?', ic: 'eye', src: LIVPP + ', p. 27-28',
      html: '<ul class="check"><li><b>Pannes</b> : on peut s’y fixer et marcher dessus.</li><li><b>Chevrons</b> : on peut s’y fixer (selon leur état).</li><li><b>Liteaux</b> : supportent le revêtement (tuiles, ardoises) ; <b>ne doivent pas être utilisés pour se fixer</b>.</li></ul>',
      figs: [{ img: 'img/ppbe/charpente.jpg', cap: 'Exemple de ferme traditionnelle', txt: '<p>Panne faîtière, pannes intermédiaires et panne sablière portent les chevrons, qui portent les liteaux.</p>', src: LIVPP + ', p. 28' }] },
    { id: 'technique', t: 'Bâcher une toiture', ic: 'target', src: LIVPP + ', p. 28-29',
      steps: ['Replier la bâche en accordéon pour faciliter le travail.', 'Monter la bâche pliée au faîtage, la fixer, puis la déplier.', 'Faire chevaucher les bâches d’environ 80 cm, la bâche du haut recouvrant celle du bas, pour éviter l’infiltration de l’eau de pluie.', 'Maintenir la bâche par des cordes ou des poids.'], stepsTitle: 'Technique de bâchage sur toiture',
      figs: [{ img: 'img/ppbe/bachage-techniques.jpg', cap: 'Techniques de bâchage', txt: '<p>Bâche repliée en accordéon, montée au faîtage puis dépliée ; chevauchement d’environ 80 cm ; maintien par cordes ou poids.</p>', src: LIVPP + ', p. 28' }],
      after: '<div class="callout bad"><b>Règle de sécurité systématique</b>Le risque est la chute de hauteur (toitures pentues, fragilisées, humides ; déploiement de bâche par grand vent). <b>Le lot de sauvetage et de protection contre les chutes (LSPCC) est obligatoire</b>, et le maniement d’objets de manutention justifie le port complet des EPI tout au long des opérations.</div>' }
  ],
  key: ['Bâches textiles : 6 × 4 m et 3,5 × 3 m.', 'Avant la pose : enlever les clous, éviter les bords.', 'Incendie : objets au centre, surélevés, recouverts.', 'Inondation : surélever, envelopper par le bas.', 'Pannes et chevrons : appuis possibles ; liteaux : jamais.', 'Bâche pliée en accordéon, montée au faîtage puis dépliée.', 'Chevauchement ≈ 80 cm ; maintien par cordes ou poids.', 'LSPCC obligatoire sur toiture.'],
  traps: ['Se fixer sur un liteau.', 'Poser la bâche du bas par-dessus celle du haut : l’eau s’infiltre.', 'Monter sur un toit sans LSPCC « juste pour une bâche ».'],
  quiz: [
    { q: 'De combien les bâches doivent-elles se chevaucher sur une toiture ?', c: ['Environ 80 cm', 'Environ 10 cm', 'Environ 2 m', 'Elles ne doivent pas se chevaucher'], e: 'Livret p. 28 (schéma). Évaluation diagnostique Q8.', s: 'technique' },
    { q: 'Règle de sécurité systématique lors d’un bâchage de toiture :', c: ['L’emploi du LSPCC (protection contre les chutes)', 'Travailler seul pour aller vite', 'Retirer son casque pour mieux voir', 'Monter sans gants pour mieux tenir'], e: 'Livret p. 29 : LSPCC obligatoire. Évaluation diagnostique Q9.', s: 'technique' },
    { q: 'Précautions avant la pose d’une bâche :', c: ['Enlever les clous restés et éviter les bords', 'Mouiller la bâche', 'La couper aux dimensions', 'La peindre'], e: 'Livret p. 27. Évaluation diagnostique Q7.', s: 'baches' },
    { q: 'Sur quel élément de charpente ne faut-il jamais se fixer ?', c: ['Les liteaux', 'Les pannes', 'Les chevrons en bon état', 'La panne faîtière'], e: 'Livret p. 27-28.', s: 'charpente' },
    { q: 'Première étape de la technique de bâchage sur toiture :', c: ['Replier la bâche en accordéon', 'Clouer la bâche en bas du toit', 'Lancer la bâche depuis le sol', 'Déplier la bâche au sol puis la tirer'], e: 'Livret p. 28 : accordéon, faîtage, fixation, dépliage.', s: 'technique' },
    { q: 'En cas d’inondation, on protège les biens en :', c: ['Les surélevant au maximum et en les enveloppant à partir du bas', 'Les recouvrant par le haut seulement', 'Les sortant sous la pluie', 'Les laissant au sol'], e: 'Livret p. 27.', s: 'baches' },
    { q: 'Dimensions de la grande bâche textile :', c: ['6 m × 4 m', '3,5 m × 3 m', '10 m × 8 m', '2 m × 2 m'], e: 'Livret p. 27.', s: 'baches' }
  ]
});

/* =====================================================================================
   CHAPITRE 9 — ÉCHELLES À MAIN
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-echelles', part: 'ppbe', seq: PP2,
  title: 'Les échelles à main', short: 'Échelles à main', motif: 'list',
  sources: [LIVPP + ', partie 9 (p. 30-31)', EVALPP],
  summary: 'Échelles à crochets et à coulisse : caractéristiques, parties de l’échelle à coulisse, pied d’échelle au 1/3 et règles de sécurité.',
  why: '<b>Pourquoi le pied d’échelle compte-t-il autant ?</b> Trop droite, l’échelle bascule en arrière ; trop inclinée, elle glisse et fléchit. Le pied à environ <b>un tiers de la longueur développée</b> donne la stabilité. Et l’échelle à coulisse déployée n’a <b>aucune résistance horizontale</b> : on ne l’utilise jamais comme passerelle.',
  sections: [
    { id: 'types', t: 'Les échelles et leurs caractéristiques', ic: 'list', src: LIVPP + ', p. 30',
      html: '<p>But premier d’une échelle : le <b>sauvetage</b> et la mise en protection des personnes lors des incendies. L’échelle à coulisse (2 ou 3 plans) accède aux étages par l’extérieur, pour établir des lances, faire des sauvetages et des mises en sécurité. Matériel d’urgence, mis en œuvre par une équipe constituée (exceptionnellement un homme seul).</p>' +
        '<div class="tw"><table><thead><tr><th>Type</th><th>Longueur reployée</th><th>Longueur déployée</th><th>Poids</th><th>Manœuvre</th><th>Utilisation</th></tr></thead><tbody>' +
        '<tr><td>Crochets</td><td>—</td><td>4,25 m</td><td>8 kg</td><td>Individuelle</td><td>Reconnaissances, sauvetages</td></tr>' +
        '<tr><td>Crochets pliables</td><td>2,40 m</td><td>4,25 m</td><td>9 kg</td><td>Individuelle</td><td>Reconnaissances, sauvetages</td></tr>' +
        '<tr><td>Coulisse petit modèle</td><td>3,60 m</td><td>5,60 m</td><td>20 kg</td><td>Individuelle</td><td rowspan="3">Reconnaissances, sauvetages, établissements</td></tr>' +
        '<tr><td>Coulisse grand modèle</td><td>5 m</td><td>9 m</td><td>33 kg</td><td>Une équipe</td></tr>' +
        '<tr><td>Coulisse 3 plans</td><td>5,60 m</td><td>14,30 m</td><td>75 kg</td><td>Deux équipes</td></tr>' +
        '</tbody></table></div>' +
        '<p>Échelle à coulisse 2 plans : niveaux <b>R+1 et R+2</b> (et toitures de faible hauteur) ; 3 plans : <b>R+3</b>. Résistance horizontale déployée <b>nulle</b> ; elle supporte deux hommes reployée, et deux hommes sur le deuxième plan une fois dressée.</p><p class="small muted">Voir aussi <a href="#/c/inc-echelles">Les échelles à main et l’échelle aérienne</a>.</p>' },
    { id: 'parties', t: 'Les parties de l’échelle à coulisse', ic: 'eye', src: LIVPP + ', p. 30',
      html: '<ul class="check"><li><b>1er plan</b> (grand plan) et <b>2e plan</b> (petit plan) ;</li><li><b>poulie</b> en tête du 1er plan, sur laquelle passe le trait ;</li><li><b>parachutes</b> qui bloquent le 2e plan sur les échelons du 1er ;</li><li><b>trait (cordelette)</b> qui sert à développer l’échelle.</li></ul>',
      figs: [{ img: 'img/ppbe/echelle-coulisse-detail.jpg', cap: 'Détail d’une échelle à coulisse', src: LIVPP + ', p. 30' }] },
    { id: 'pied', t: 'Le pied d’échelle', ic: 'target', src: LIVPP + ', p. 31',
      html: '<p>L’échelle ne doit être ni trop développée ni trop inclinée : le pied est éloigné du mur d’environ <b>1/3 de la longueur développée</b>. Vérification : <b>un pas par étage</b>, le <b>test du coude</b>, ou la technique des <b>bras tendus</b> (le manipulateur, droit, pieds contre les sabots, tend les bras à l’horizontale : ses mains arrivent sur les montants à hauteur d’épaule).</p>' +
        '<div class="callout ok"><b>Exemple</b>Échelle déployée à 2,50 m : pied ≈ 2,50 ÷ 3 ≈ <b>0,83 m</b> du mur.</div>' +
        '<div class="callout warn">Une fois sur l’échelle, <b>les deux pieds ne doivent jamais être sur le même échelon</b> : risque de déséquilibre important.</div>',
      figs: [{ img: 'img/ppbe/pied-echelle.jpg', cap: 'Ni trop droite, ni trop inclinée', txt: '<p>Trop droite, elle bascule ; trop inclinée, elle glisse ; le triangle mur-sol-échelle (test du coude) vérifie l’angle.</p>', src: LIVPP + ', p. 31' }] }
  ],
  key: ['Échelle à coulisse : 1er plan (grand), 2e plan (petit), poulie, parachutes, trait.', '2 plans : R+1 et R+2 ; 3 plans : R+3.', 'Grand modèle : 5 m reployée, 9 m déployée, 33 kg, une équipe.', 'Pied d’échelle ≈ 1/3 de la longueur développée.', 'Vérifier : un pas par étage, test du coude, bras tendus.', 'Jamais les deux pieds sur le même échelon.', 'Résistance horizontale déployée nulle.'],
  traps: ['Placer le pied à la moitié de la longueur (trop incliné).', 'Monter avec les deux pieds sur le même échelon.', 'Utiliser l’échelle déployée à l’horizontale comme passerelle.'],
  quiz: [
    { q: 'Calcul du pied d’échelle pour une échelle déployée à 2,50 m :', c: ['≈ 0,83 m (1/3 de 2,50 m)', '1,25 m (moitié)', '2,50 m', '0,25 m'], e: 'Livret p. 31 : environ 1/3 de la longueur développée. Évaluation diagnostique Q12.', s: 'pied' },
    { q: 'Les différentes parties d’une échelle à coulisse :', c: ['1er plan (grand plan), 2e plan (petit plan), poulie, parachutes, trait', 'Crochet, pointe, montant unique', 'Plateau, tourelle, parc échelle', 'Sabot, potence, treuil'], e: 'Livret p. 30. Évaluation diagnostique Q10.', s: 'parties' },
    { q: 'Règle de sécurité une fois le sapeur-pompier positionné sur l’échelle à coulisse :', c: ['Ne jamais avoir les deux pieds sur le même échelon', 'Toujours se tenir aux échelons du haut', 'Se pencher pour mieux voir', 'Lâcher les mains pour travailler'], e: 'Livret p. 31. Évaluation diagnostique Q11.', s: 'pied' },
    { q: 'L’échelle à coulisse 2 plans permet d’atteindre :', c: ['R+1 et R+2', 'R+3', 'R+5', 'Seulement le rez-de-chaussée'], e: 'Livret p. 30.', s: 'types' },
    { q: 'Combien de personnes pour l’échelle à coulisse 3 plans ?', c: ['Deux équipes (75 kg, 14,30 m)', 'Une personne', 'Une équipe', 'Trois équipes'], e: 'Livret p. 30, tableau.', s: 'types' },
    { q: 'Quelle méthode permet de vérifier le pied d’échelle ?', c: ['Le test des bras tendus (ou du coude, ou un pas par étage)', 'La mesure au décamètre obligatoire', 'Le niveau à bulle', 'Aucune, à l’œil'], e: 'Livret p. 31.', s: 'pied' }
  ]
});
