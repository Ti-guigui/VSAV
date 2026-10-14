/* CHEF D’ÉQUIPE INCENDIE — fichier 1 : CE INC 1 (le chef d’équipe) et CE INC 2 (techniques de lances, forcement, lecture du feu)
   Sources : livret stagiaire Chef d’équipe incendie SDIS 51 (v2019.1) ; dossier formateur CE INC du SDIS 51 :
   partie A (séquences 1 et 2, document stagiaire « Les lances à eau à main », diaporama « Les lances », schéma muet,
   fiches de tâche, grille d’observation), partie B (fiches Halligan S+F), partie C (séquence, fiches de tâche et grille
   « TOOTEM ») ; GDO Incendies de structures (2018) p. 34-35 et GTO Établissements et techniques d’extinction (2018),
   auxquels le livret renvoie. Les manœuvres ARI et M1-M6 sont traitées dans un autre fichier. */
var INCE_1_SEQ1 = 'CE INC 1 — Le chef d’équipe';
var INCE_1_SEQ2 = 'CE INC 2 — Techniques de lances, forcement, lecture du feu';
var INCE_1_LIV = 'Livret stagiaire Chef d’équipe incendie SDIS 51 (v2019.1)';
var INCE_1_DOCL = 'Document stagiaire « Les lances à eau à main » (FMPA Reims-Witry, fiches INC 8.1 à 8.9, 2011)';
var INCE_1_DIAPO = 'Diaporama « Les lances » (CE INC, partie A, séquence 1)';
var INCE_1_FTA = 'Fiches de tâche « Mise en œuvre des lances » (CE INC, partie A, séquence 2)';
var INCE_1_FTC = 'Fiches de tâche « TOOTEM » (CE INC, partie C, séquence 1)';
var INCE_1_HAL = 'Fiches Halligan S+F « Forcement des accès » (SDIS 51, 11/08/2015)';
var INCE_1_GDO = 'GDO Incendies de structures (DGSCGC, 2018)';
var INCE_1_GTO = 'GTO Établissements et techniques d’extinction (DGSCGC, 2018)';

/* =====================================================================================
   CE INC 1 — CHAPITRE 1 : la fonction de chef d’équipe
   ===================================================================================== */
VSAV.chap({
  id: 'ince-fonction', part: 'ince', seq: INCE_1_SEQ1,
  title: 'La fonction de chef d’équipe incendie : objectifs, compétences, chaîne de commandement', short: 'Fonction de chef d’équipe', motif: 'team',
  sources: [INCE_1_LIV + ', préambule (p. 3), § 1.1 (p. 6-7) et § 1.2 § 1 (p. 8)'],
  summary: 'Première fonction de commandement : le chef d’équipe dirige son équipier, exécute la mission du chef d’agrès et en rend compte.',
  why: '<b>Pourquoi le chef d’équipe est-il si important ?</b> C’est le <b>premier maillon</b> de la chaîne de commandement : tous les ordres, du COS au chef d’agrès, finissent par être exécutés par un binôme qu’il dirige. Et c’est sur ses comptes rendus que les chefs décident de la suite. Une erreur à son niveau (local mal reconnu, ordre mal transmis) se répercute sur toute l’intervention et sur la sécurité des binômes suivants.',
  sections: [
    { id: 'preambule', t: 'Une fonction de commandement', ic: 'star', src: INCE_1_LIV + ', préambule, p. 3',
      html: '<p>Le livret le dit dès le préambule : la fonction de chef d’équipe incendie est <b>la première fonction qui implique du commandement sur intervention</b>. Le chef d’équipe est à la fois :</p>' +
        '<ul class="check"><li><b>responsable de son équipier</b> ;</li><li><b>responsable de la mission</b> que lui a confiée son chef d’agrès.</li></ul>' +
        '<div class="callout warn">Le livret CE a été conçu « en totale complémentarité » avec le livret Équipier incendie : le chef d’équipe doit <b>maîtriser parfaitement</b> les techniques et connaissances du module équipier. Commander un binôme suppose d’abord de savoir faire soi-même ce qu’on demande.</div>' +
        '<p>Devise du livret : <b>« Analyser pour comprendre, Agir pour maîtriser. »</b></p>' },
    { id: 'objectifs', t: 'Les objectifs du module', ic: 'target', src: INCE_1_LIV + ', § 1.1, p. 6',
      html: '<div class="tw"><table><thead><tr><th>Domaine</th><th>Objectif du chef d’équipe</th></tr></thead><tbody>' +
        '<tr><td><b>Savoir</b></td><td>Connaître le feu et son comportement, le matériel et les techniques de lutte contre l’incendie.</td></tr>' +
        '<tr><td><b>Savoir-faire</b></td><td><b>Diriger une équipe incendie</b> en opération.</td></tr>' +
        '<tr><td><b>Savoir-être</b></td><td>Adopter une <b>attitude responsable</b> vis-à-vis de son équipe et <b>s’adapter à l’évolution de la situation</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Définition du livret : <i>« Placé sous les ordres du chef d’agrès, le chef d’équipe de sapeur-pompier dirige son équipier et coordonne l’action de son équipe lors des opérations de secours. »</i></p>' +
        '<p class="small muted">Comparaison : pour l’équipier, le savoir-faire est de « mettre en œuvre le matériel » et le savoir-être d’« exécuter les ordres du chef d’agrès ». Le chef d’équipe passe de l’exécution à la <b>direction</b> et à l’<b>adaptation</b>.</p>' },
    { id: 'competences', t: 'Les 4 activités / compétences du CE INC', ic: 'list', src: INCE_1_LIV + ', § 1.1, p. 7',
      html: '<ol>' +
        '<li><b>S’intégrer dans une chaîne de commandement</b> en qualité de chef d’équipe : rôle et responsabilités du chef d’équipe, organisation de la chaîne de commandement, principes et bases du commandement opérationnel, compte rendu.</li>' +
        '<li><b>Adapter l’action du binôme</b> aux contraintes de l’environnement et aux risques : premières mesures conservatoires, prévention appliquée à l’opération, préservation des traces et indices, techniques professionnelles de sauvetage et d’extinction.</li>' +
        '<li><b>Appliquer et faire appliquer les règles de sécurité</b> au sein de l’équipe : équipements de protection individuelle, moyens de protection.</li>' +
        '<li><b>Manager une équipe opérationnelle</b> : communication opérationnelle, dynamique de groupe, prise de décision.</li>' +
        '</ol><p>À la fin du stage, le chef d’équipe doit être à même de mener l’ensemble de ces activités.</p>' +
        '<div class="callout ok">Noter les verbes : « appliquer <b>et faire appliquer</b> », « manager », « adapter ». Ce qui distingue le chef d’équipe de l’équipier, c’est qu’il répond aussi des actes de son équipier.</div>' },
    { id: 'principes', t: 'Les 4 principes du commandement opérationnel', ic: 'check', src: INCE_1_LIV + ', § 1.2 § 1, p. 8',
      steps: ['Le chef d’équipe dirige son binôme (le chef d’équipe et son équipier).', 'Le chef d’équipe ne donne des ordres qu’à son subordonné direct.', 'Le chef d’équipe rend compte à son supérieur direct : le chef d’agrès.', 'Le chef d’équipe contrôle les actions de son subordonné direct, notamment le respect des mesures de sécurité.'],
      stepsTitle: 'Principes de base du commandement',
      after: '<p><b>Pourquoi ?</b> Ce principe d’encadrement vise à garantir le <b>succès de l’intervention avec la plus grande sécurité possible</b> : il évite toute confusion dans les ordres et dans les comptes rendus, et facilite le contrôle des actions menées (personnels, missions, moyens), selon un niveau de compétence défini et garanti.</p>' },
    { id: 'chaine', t: 'Premier maillon de la chaîne', ic: 'team', src: INCE_1_LIV + ', § 1.2 § 1 « La chaîne de commandement », p. 8',
      html: '<p>L’organisation opérationnelle repose sur le bon fonctionnement de la chaîne de commandement. Le chef d’équipe en est le <b>premier maillon</b> : c’est sur lui que repose le succès des ordres donnés, quel que soit le niveau qui les a émis.</p>' +
        '<div class="callout warn"><b>Exemple du livret :</b> après une reconnaissance longue sous ARI dans un sous-sol complexe, c’est sur les <b>comptes rendus des chefs d’équipe</b> que le COS décide de la manœuvre. Une mauvaise évaluation, une erreur de local reconnu… peuvent avoir des conséquences très importantes sur le succès de la manœuvre ou sur la <b>sécurité des binômes engagés ensuite</b>.</div>' +
        '<p>Le <b>supérieur direct</b> du chef d’équipe est le <b>chef d’agrès</b> : il reçoit de lui ses ordres et lui rend <b>toujours</b> compte, en cours d’action et en fin de mission.</p>' }
  ],
  key: ['Chef d’équipe = première fonction de commandement sur intervention.', 'Responsable de son équipier ET de la mission reçue du chef d’agrès.', 'Savoir-faire : diriger une équipe incendie ; savoir-être : attitude responsable, s’adapter.', '4 compétences : chaîne de commandement, adapter l’action du binôme, (faire) appliquer la sécurité, manager.', 'Ordres au seul subordonné direct ; compte rendu au seul supérieur direct (chef d’agrès).', 'Le chef d’équipe contrôle les actions de son équipier, notamment la sécurité.'],
  traps: ['Croire que le chef d’équipe peut se passer de maîtriser les techniques d’équipier : le livret exige qu’il les maîtrise parfaitement.', 'Rendre compte directement au COS ou à un autre chef que son chef d’agrès (hors urgence).', 'Sous-estimer le poids d’un compte rendu : le COS bâtit sa manœuvre dessus.'],
  quiz: [
    { q: 'Qui est le supérieur direct du chef d’équipe ?', c: ['Le chef d’agrès', 'Le chef de groupe', 'Le COS', 'Le conducteur de l’engin'], e: 'Livret p. 8 : le supérieur direct du chef d’équipe est le chef d’agrès, dont il reçoit les ordres et à qui il rend compte.', s: 'chaine' },
    { q: 'Le savoir-faire attendu du chef d’équipe incendie est de :', c: ['Diriger une équipe incendie en opération', 'Mettre en œuvre le matériel de lutte contre l’incendie', 'Commander un engin', 'Rédiger le rapport d’intervention'], e: 'Livret § 1.1 : savoir-faire = diriger une équipe incendie en opération.', s: 'objectifs' },
    { q: 'À qui le chef d’équipe donne-t-il des ordres ?', c: ['À son seul subordonné direct, son équipier', 'À tous les équipiers de l’agrès', 'Aux autres binômes s’il les croise', 'Au conducteur'], e: 'Principe du commandement : il ne donne d’ordres qu’à son subordonné direct.', s: 'principes' },
    { q: 'Pourquoi le livret qualifie-t-il le chef d’équipe de « premier maillon » ?', c: ['Les ordres de tous niveaux finissent exécutés par son binôme et ses comptes rendus fondent les décisions', 'Il arrive toujours le premier sur les lieux', 'Il commande les autres chefs d’équipe', 'Il est le plus ancien de l’équipage'], e: 'Livret p. 8 : c’est sur lui que repose le succès des ordres donnés ; le COS décide sur ses comptes rendus.', s: 'chaine' },
    { q: 'Laquelle de ces compétences fait partie des 4 activités du CE INC ?', c: ['Appliquer et faire appliquer les règles de sécurité au sein de l’équipe', 'Établir l’ordre initial du groupe', 'Diriger la colonne', 'Rédiger la prévision opérationnelle'], e: 'Livret p. 7 : compétence n° 3.', s: 'competences' },
    { q: 'Quel est le but des principes de commandement selon le livret ?', c: ['Garantir le succès de l’intervention avec la plus grande sécurité possible', 'Accélérer l’arrivée sur les lieux', 'Réduire le nombre de comptes rendus', 'Remplacer le chef d’agrès'], e: 'Ils évitent la confusion des ordres et comptes rendus et facilitent le contrôle des actions.', s: 'principes' }
  ]
});

/* =====================================================================================
   CE INC 1 — CHAPITRE 2 : ordres, sécurité, initiative
   ===================================================================================== */
VSAV.chap({
  id: 'ince-responsabilites', part: 'ince', seq: INCE_1_SEQ1,
  title: 'Rôle, obligations et responsabilités : ordres, sécurité du binôme, initiative', short: 'Ordres, sécurité, initiative', motif: 'shield',
  sources: [INCE_1_LIV + ', § 1.2 § 1 (p. 8-9), § 2 et § 3 (p. 11)'],
  summary: 'Exécuter la mission avec rigueur, répercuter les ordres sans les déformer, répondre de la sécurité du binôme, doser l’initiative.',
  why: '<b>Pourquoi tant d’insistance sur la discipline… et sur l’initiative ?</b> La réussite d’une opération tient à la <b>coordination</b> de binômes qui agissent au même moment (sauvetage, extinction, coupure des fluides, ouverture des ouvrants). Un binôme qui sort de sa mission peut ruiner l’action d’un autre. Mais un chef d’équipe qui n’ose rien décider face à l’imprévu met aussi son binôme en danger. Le livret le résume : <b>« un défaut comme un excès d’initiative peuvent avoir des conséquences dramatiques »</b>.',
  sections: [
    { id: 'obligations', t: 'Rôle et obligations', ic: 'list', src: INCE_1_LIV + ', § 1.2, « Rôle et obligations du chef d’équipe », p. 8-9',
      html: '<p>Une fois ses ordres reçus, le chef d’équipe doit assurer le succès de sa mission <b>par tous les moyens mis à sa disposition</b>. Il doit faire preuve :</p>' +
        '<ul class="check"><li>de <b>discipline</b> dans l’exécution ;</li><li>d’<b>esprit de décision</b> face aux difficultés non prévues, à l’évolution de la situation, à la découverte d’une victime… ;</li><li>de <b>respect du secteur attribué</b> et des <b>points de passage obligés</b>.</li></ul>' +
        '<p>L’exécution parfaite de la mission doit être son <b>unique objectif</b> ; il agit avec <b>rigueur</b> en toutes circonstances. Il doit avant tout <b>s’assurer qu’il dispose des moyens nécessaires</b> et demander à son chef d’agrès ceux qui lui manquent ou viendraient à lui manquer.</p>' +
        '<div class="callout warn"><b>Ne pas interférer.</b> Les actions des binômes doivent être réalisées chronologiquement et au bon moment. Le chef d’équipe veille à ne jamais interférer sur les autres actions commandées et se concentre sur sa mission. <b>Seul un critère d’urgence absolue</b> peut l’autoriser à détourner son binôme : porter secours à une personne en danger immédiat ou à un binôme en difficulté, par exemple.</div>' },
    { id: 'responsabilites', t: 'Les responsabilités du chef d’équipe', ic: 'star', src: INCE_1_LIV + ', § 1.2, « Les responsabilités du chef d’équipe », p. 9',
      html: '<p>Premier maillon de la chaîne, le chef d’équipe est <b>responsable de sa mission et de son binôme</b> : il dirige son équipe et répond des résultats de son action. <b>« Être responsable, c’est diriger. »</b></p>' +
        '<ul class="check"><li>Il doit avoir une <b>parfaite maîtrise de la situation</b>, que seule sa <b>compétence</b> peut lui donner.</li><li>Il doit être en toute circonstance un <b>exemple</b> pour son équipier : rigueur, courage, courtoisie, probité…</li><li>Incendie, secours à personne, protection des biens ou de l’environnement : son action s’intègre à <b>chaque étape de la MGO</b> (voir le chapitre suivant).</li></ul>' },
    { id: 'ordres', t: 'Transmettre l’ordre à l’équipier', ic: 'team', src: INCE_1_LIV + ', § 1.2 § 2 « Le chef d’équipe et son équipier : ordres et sécurité », p. 11',
      html: '<p><b>Tout ordre donné par le chef d’agrès doit être répercuté</b> par le chef d’équipe à son équipier, et le chef d’équipe doit <b>s’assurer de sa bonne compréhension</b>. Il en dépend :</p>' +
        '<ul class="check"><li>le <b>succès de la mission</b> et la <b>sécurité collective</b> de l’agrès ;</li><li>la capacité de l’équipier à <b>seconder efficacement</b> son chef ;</li><li>en cas d’<b>accident du chef d’équipe</b>, la capacité de l’équipier à rendre compte avec précision (localisation de l’accident notamment), voire à <b>continuer seul la mission</b>.</li></ul>' +
        '<div class="callout bad">Un ordre ne doit <b>jamais être interprété ou modifié</b>, sauf <b>urgence avérée</b> ou <b>modification de la situation</b> (le cheminement prévu s’avère impraticable, un plafond menace de s’effondrer…).</div>' },
    { id: 'securite', t: 'Responsable de la sécurité du binôme', ic: 'shield', src: INCE_1_LIV + ', § 1.2 § 2, p. 11',
      html: '<div class="tw"><table><thead><tr><th>Niveau</th><th>Rôle du chef d’équipe</th></tr></thead><tbody>' +
        '<tr><td>Sécurité <b>collective</b> de l’équipage</td><td>Il y <b>participe activement</b> en respectant les consignes générales du chef d’agrès.</td></tr>' +
        '<tr><td>Sécurité <b>individuelle</b> au sein de son équipe</td><td>Il en est <b>personnellement et directement responsable</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Exemples cités par le livret : règles d’utilisation des <b>EPI</b>, règles d’<b>engagement sous ARI</b>, règles d’emploi du <b>LSPCC</b>, <b>balisage</b> (secours routier), <b>barrage des fluides</b> (gaz), mais aussi sécurité au sens large : <b>sécurité des cheminements</b>, <b>prévention du coup de chaleur</b>…</p>' +
        '<p>En cours de mission, il rend compte <b>sans aucun délai</b> de tout danger ou risque, potentiel ou avéré, qu’il est susceptible de rencontrer.</p>' +
        '<p class="small muted">Le texte du livret écrit à cet endroit « à son chef d’équipe » ; d’après tout le reste du chapitre, le destinataire du compte rendu est le chef d’agrès.</p>' },
    { id: 'initiative', t: 'Exécuter la mission… et savoir prendre l’initiative', ic: 'bulb', src: INCE_1_LIV + ', § 1.2 § 3 « Le chef d’équipe et son chef d’agrès », p. 11',
      html: '<p>Le chef d’équipe remplit avec rigueur la mission reçue : il en respecte <b>la lettre et l’esprit</b>. Il doit cependant faire preuve d’<b>esprit de décision (ou d’initiative)</b> face à toute évolution imprévue de la situation ou face à tout danger.</p>' +
        '<div class="tw"><table><thead><tr><th>Défaut d’initiative</th><th>Excès d’initiative</th></tr></thead><tbody><tr><td>Le binôme continue une mission devenue dangereuse ou inutile, ne réagit pas à une victime découverte.</td><td>Le binôme quitte sa mission, interfère avec un autre binôme, ouvre un ouvrant au mauvais moment.</td></tr></tbody></table></div>' +
        '<div class="callout warn">Les deux « peuvent avoir des conséquences dramatiques ». Le chef d’équipe tient toujours compte de son environnement (<b>autres binômes</b> notamment) et ne se détourne <b>jamais de sa mission sans une impérieuse nécessité</b> ; s’il le fait, il en <b>rend compte immédiatement</b>.</div>' +
        '<p class="small muted">Les exemples du tableau illustrent le propos du livret ; seuls les principes encadrés sont cités textuellement.</p>' }
  ],
  key: ['Unique objectif : l’exécution parfaite de la mission, avec rigueur.', 'Vérifier ses moyens ; demander au chef d’agrès ce qui manque.', 'Ne jamais interférer avec les autres binômes ; seule l’urgence absolue autorise à détourner son binôme.', 'Tout ordre du CA est répercuté à l’équipier et sa compréhension vérifiée.', 'Un ordre n’est jamais interprété ni modifié, sauf urgence avérée ou situation modifiée.', 'Sécurité individuelle du binôme : responsabilité personnelle et directe du CE.', 'Défaut comme excès d’initiative : conséquences dramatiques possibles.'],
  traps: ['Transmettre l’ordre « à sa façon » à l’équipier : un ordre ne s’interprète pas.', 'Se porter sur une autre action « pour aider » sans urgence absolue.', 'Oublier que l’équipier doit pouvoir rendre compte, voire continuer seul, si le chef est blessé : il doit connaître la mission.'],
  quiz: [
    { q: 'Le chef d’équipe peut détourner son binôme de sa mission :', c: ['Seulement sur un critère d’urgence absolue (personne en danger immédiat, binôme en difficulté)', 'Dès qu’il juge une autre action plus utile', 'Jamais, même en cas d’urgence', 'Sur demande d’un témoin'], e: 'Livret p. 9 : seul un critère d’urgence absolue peut l’y autoriser.', s: 'obligations' },
    { q: 'Pourquoi l’équipier doit-il bien comprendre l’ordre reçu par son chef ?', c: ['Pour seconder efficacement et, si le chef est accidenté, rendre compte voire continuer seul', 'Pour pouvoir le modifier si besoin', 'Pour le transmettre aux autres binômes', 'Ce n’est pas nécessaire : il suit son chef'], e: 'Livret § 2, p. 11.', s: 'ordres' },
    { q: 'Un ordre du chef d’agrès peut être modifié par le chef d’équipe :', c: ['En cas d’urgence avérée ou de modification de la situation', 'S’il pense avoir une meilleure idée', 'Jamais, quelle que soit la situation', 'Si l’équipier le propose'], e: 'Exemples du livret : cheminement impraticable, plafond menaçant de s’effondrer.', s: 'ordres' },
    { q: 'La sécurité individuelle au sein de l’équipe relève :', c: ['De la responsabilité personnelle et directe du chef d’équipe', 'Du seul chef d’agrès', 'De chaque équipier pour lui-même uniquement', 'Du COS'], e: 'Le CE participe à la sécurité collective et répond personnellement de la sécurité individuelle de son équipe.', s: 'securite' },
    { q: 'Selon le livret, « être responsable, c’est… »', c: ['Diriger', 'Obéir', 'Rendre compte', 'Contrôler'], e: 'Livret p. 9.', s: 'responsabilites' },
    { q: 'Avant d’exécuter sa mission, le chef d’équipe doit avant tout :', c: ['S’assurer qu’il dispose des moyens nécessaires et demander ceux qui manquent', 'Attendre un second ordre écrit', 'Prévenir le COS directement', 'Choisir lui-même son secteur'], e: 'Livret p. 8 : il demande à son chef d’agrès les moyens qui lui manquent ou viendraient à manquer.', s: 'obligations' },
    { q: 'Que dit le livret de l’initiative du chef d’équipe ?', c: ['Un défaut comme un excès d’initiative peuvent avoir des conséquences dramatiques', 'L’initiative est interdite au chef d’équipe', 'L’initiative prime toujours sur la mission', 'Seul l’équipier peut prendre une initiative'], e: 'Livret § 3, p. 11.', s: 'initiative' }
  ]
});

/* =====================================================================================
   CE INC 1 — CHAPITRE 3 : le chef d’équipe dans la MGO
   ===================================================================================== */
VSAV.chap({
  id: 'ince-mgo', part: 'ince', seq: INCE_1_SEQ1,
  title: 'Le chef d’équipe à chaque étape de la MGO', short: 'CE et MGO', motif: 'list',
  sources: [INCE_1_LIV + ', § 1.2 § 1, encadrés « Reconnaissance » à « Surveillance » (p. 9-10)'],
  summary: 'Ce que le chef d’équipe doit faire, décider ou signaler en reconnaissance, sauvetage, établissement, attaque, protection, déblai et surveillance.',
  why: '<b>Pourquoi un rôle à chaque étape ?</b> La MGO décrit ce que doit penser le chef ; le chef d’équipe en est l’exécutant sur le terrain. À chaque étape, le livret lui fixe un <b>point de vigilance propre</b> : le droit d’entrer chez autrui, la sécurité de l’équipier pendant l’attaque, les objets de valeur, les indices… Ce sont des responsabilités que l’équipier n’a pas.',
  sections: [
    { id: 'reco', t: 'Reconnaissance : visiter tout son secteur', ic: 'eye', src: INCE_1_LIV + ', p. 9',
      html: '<p>Quel que soit le type d’intervention, le chef d’agrès peut confier au chef d’équipe une ou plusieurs <b>reconnaissances partielles</b>. Il visite <b>tous les locaux</b> du secteur imparti et demande les moyens nécessaires, notamment pour ouvrir les issues qui nécessitent une <b>manœuvre de force</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Situation</th><th>Conduite du chef d’équipe</th></tr></thead><tbody>' +
        '<tr><td>Principe</td><td>La propriété privée est <b>inviolable</b>, protégée par la loi.</td></tr>' +
        '<tr><td><b>Péril</b></td><td>Il a le droit de visiter appartements, caves, greniers, ateliers… <b>à son initiative</b>.</td></tr>' +
        '<tr><td>Refus des occupants</td><td>Il en <b>rend compte immédiatement</b>.</td></tr>' +
        '<tr><td><b>Pas d’urgence</b></td><td>Il demande impérativement au chef d’agrès l’<b>assistance de la police ou de la gendarmerie</b> et <b>attend leur arrivée</b> avant de pénétrer.</td></tr>' +
        '</tbody></table></div>' },
    { id: 'sauvetage', t: 'Sauvetage : initiative et compte rendu', ic: 'hand', src: INCE_1_LIV + ', p. 9',
      html: '<p>Les sauvetages sont <b>ordonnés par le chef d’agrès</b>. Mais le chef d’équipe doit faire preuve d’<b>initiative</b> si un sauvetage à faire se présente à lui, à n’importe quel moment de l’intervention.</p>' +
        '<ul class="check"><li>Toujours avoir à l’esprit la <b>sécurité de son équipier</b>.</li><li><b>Rendre compte immédiatement</b> d’un sauvetage en cours ou terminé.</li></ul>' +
        '<div class="callout warn">Pour un sauvetage, s’il doit traverser un appartement ou un local et que les occupants s’y opposent, le chef d’équipe a <b>le droit et le devoir</b> d’y pénétrer malgré tout, <b>de force si nécessaire</b>.</div>' },
    { id: 'etab-attaque', t: 'Établissement et attaque', ic: 'flame', src: INCE_1_LIV + ', p. 10',
      html: '<div class="tw"><table><tbody>' +
        '<tr><th>Établissement</th><td>Le chef d’équipe s’assure que son équipier <b>exécute correctement la manœuvre</b> et se conforme aux <b>règles d’établissement des tuyaux</b>.</td></tr>' +
        '<tr><th>Attaque</th><td>Phase <b>dangereuse</b>, notamment pour progresser à l’intérieur des locaux en feu. Le chef d’équipe veille à <b>ne pas prendre de risques inutiles ni à en faire courir</b> à son équipier ; il <b>rend compte en permanence</b> au chef d’agrès de l’évolution de la situation.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Dans le binôme d’attaque, c’est le chef d’équipe qui tient la lance (voir la séquence CE INC 2 : techniques de lance, lecture du feu, TOOTEM).</p>' },
    { id: 'protection', t: 'Protection : les objets de valeur', ic: 'shield', src: INCE_1_LIV + ', p. 10',
      html: '<p>La protection peut atténuer très sensiblement les conséquences d’un sinistre. Le chef d’équipe prend les dispositions pour qu’<b>aucun objet de valeur</b> (bijoux, argent, toiles, argenterie…) ne reste dans les lieux et le remet à son <b>chef d’agrès</b> ou, éventuellement, directement à la <b>police ou à la gendarmerie</b>.</p>' },
    { id: 'deblai', t: 'Déblai : soigneux, utile, sûr… et attentif aux indices', ic: 'target', src: INCE_1_LIV + ', p. 10',
      html: '<p>Après l’extinction, une explosion, un mouvement de terrain… le chef d’équipe s’assure que le déblai de son secteur est :</p>' +
        '<ul class="check"><li><b>soigneux</b>, sans déblai inutile ;</li><li><b>propre</b> : ne pas abîmer ni salir les pièces et cages d’escalier non touchées ;</li><li><b>sûr</b> : il est notamment <b>interdit de jeter des gravats par les fenêtres</b>.</li></ul>' +
        '<div class="callout warn">Il signale <b>sans délai</b> au chef d’agrès (ou directement à la police ou à la gendarmerie) toute découverte d’<b>objet suspect</b> (engin explosif, armes…) ou <b>de valeur</b> (bijoux, liquidités, œuvres d’art…), et veille à ne pas faire disparaître, autant que possible, les <b>indices</b> pouvant servir à une enquête criminelle.</div>' },
    { id: 'surveillance', t: 'Surveillance : commander un détachement', ic: 'clock', src: INCE_1_LIV + ', p. 10',
      html: '<p>Le chef d’équipe peut commander un <b>détachement de surveillance</b> comprenant <b>jusqu’à 4 sapeurs</b>. Il assure les <b>rondes ou contrôles prescrits</b> et <b>rend compte de leur exécution</b>.</p>' }
  ],
  key: ['Reconnaissance : visiter tous les locaux du secteur ; en cas de péril, entrer à son initiative.', 'Sans urgence et refus d’entrée : demander police/gendarmerie et attendre.', 'Sauvetage : initiative si nécessaire, le droit et le devoir d’entrer, de force s’il le faut ; compte rendu immédiat.', 'Attaque : pas de risque inutile pour soi ni l’équipier ; compte rendu permanent.', 'Objets de valeur : remis au chef d’agrès ou à la police/gendarmerie.', 'Déblai : pas de gravats par les fenêtres ; signaler objets suspects ou de valeur ; préserver les indices.', 'Surveillance : détachement jusqu’à 4 sapeurs.'],
  traps: ['Forcer une porte sans péril ni urgence alors que l’occupant refuse : il faut rendre compte et attendre les forces de l’ordre.', 'Garder sur soi un objet de valeur trouvé au déblai au lieu de le remettre.', 'Déblayer « large » : le déblai inutile est proscrit et peut détruire des indices.'],
  quiz: [
    { q: 'Pas de péril, l’occupant refuse l’accès à la cave à reconnaître. Le chef d’équipe :', c: ['Rend compte et demande au chef d’agrès l’assistance des forces de l’ordre, puis attend leur arrivée', 'Force la porte immédiatement', 'Renonce et passe au local suivant sans rien dire', 'Demande à l’équipier de surveiller l’occupant'], e: 'Livret p. 9 : sans urgence, il demande impérativement police ou gendarmerie et attend leur arrivée.', s: 'reco' },
    { q: 'Pour un sauvetage, des occupants s’opposent au passage par leur appartement :', c: ['Le chef d’équipe a le droit et le devoir d’y pénétrer, de force si nécessaire', 'Il doit attendre la police', 'Il doit chercher un autre itinéraire quoi qu’il arrive', 'Il doit obtenir l’accord écrit du propriétaire'], e: 'Livret p. 9.', s: 'sauvetage' },
    { q: 'Combien de sapeurs au maximum le chef d’équipe peut-il commander en détachement de surveillance ?', c: ['4', '2', '6', '8'], e: 'Livret p. 10 : jusqu’à 4 sapeurs.', s: 'surveillance' },
    { q: 'Au déblai, que fait-on des gravats ?', c: ['On ne les jette jamais par les fenêtres', 'On les jette par la fenêtre la plus proche', 'On les laisse dans les escaliers', 'On les mouille puis on les jette dehors'], e: 'Livret p. 10 : il est notamment interdit de jeter des gravats par les fenêtres.', s: 'deblai' },
    { q: 'Un bijou est trouvé pendant la protection. Le chef d’équipe :', c: ['Le remet à son chef d’agrès ou éventuellement à la police ou à la gendarmerie', 'Le laisse en place', 'Le confie au voisin', 'Le garde jusqu’au retour au centre'], e: 'Livret p. 10.', s: 'protection' },
    { q: 'Pendant l’attaque, le chef d’équipe rend compte au chef d’agrès :', c: ['En permanence, de l’évolution de la situation', 'Uniquement à la fin', 'Seulement s’il trouve une victime', 'Jamais : il est sous ARI'], e: 'Livret p. 10 : il rend compte en permanence.', s: 'etab-attaque' }
  ]
});

/* =====================================================================================
   CE INC 1 — CHAPITRE 4 : le compte rendu
   ===================================================================================== */
VSAV.chap({
  id: 'ince-compte-rendu', part: 'ince', seq: INCE_1_SEQ1,
  title: 'Le compte rendu du chef d’équipe', short: 'Compte rendu', motif: 'clip',
  sources: [INCE_1_LIV + ', § 1.2 § 3, « Les comptes rendus en cours d’action » et « Le compte rendu en fin de mission » (p. 12)', INCE_1_LIV + ', § 1.2 (p. 8-11)'],
  summary: 'Je suis, je vois, je fais, je demande : quand rendre compte, et comment, en cours d’action et en fin de mission.',
  why: '<b>Pourquoi rendre compte si souvent ?</b> Le chef d’agrès ne voit pas ce que voit le binôme dans la fumée. <b>C’est de la fréquence et de la qualité des comptes rendus</b> que dépend sa capacité à optimiser la manœuvre : engager un autre binôme, demander des renforts, changer de tactique. Un compte rendu tardif ou confus, c’est une décision prise à l’aveugle.',
  sections: [
    { id: 'structure', t: 'Je suis, je vois, je fais, je demande', ic: 'list', src: INCE_1_LIV + ', p. 12',
      html: '<p>Le compte rendu opérationnel doit <b>obligatoirement</b> répondre aux questions suivantes :</p>' +
        '<div class="tw"><table><thead><tr><th>Rubrique</th><th>Contenu (exemples d’application)</th></tr></thead><tbody>' +
        '<tr><td><b>Je suis</b></td><td>Où se trouve le binôme (niveau, local, repère).</td></tr>' +
        '<tr><td><b>Je vois</b></td><td>Ce qui est constaté : feu, fumées, victime, danger.</td></tr>' +
        '<tr><td><b>Je fais</b></td><td>L’action en cours ou réalisée.</td></tr>' +
        '<tr><td><b>Je demande</b></td><td>Les moyens ou ordres nécessaires.</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">Le livret ne donne que les quatre rubriques ; la colonne de droite illustre leur contenu.</p>' },
    { id: 'quand', t: 'Quand le compte rendu est impératif', ic: 'alert', src: INCE_1_LIV + ', p. 12 ; § 1.2 p. 9-11',
      html: '<p>Le chef d’équipe rend compte <b>régulièrement</b> en cours de mission. Le compte rendu en cours d’action est <b>impératif</b> :</p>' +
        '<ul class="check"><li>lorsque les <b>moyens s’avèrent insuffisants</b> ;</li><li>en cas de <b>difficulté à remplir la mission</b> ;</li><li>en cas d’<b>accident</b> ;</li><li>en cas de <b>découverte de victime, d’objet suspect ou de valeur</b>, etc.</li></ul>' +
        '<p>Le reste du livret ajoute : rendre compte <b>immédiatement</b> d’un sauvetage en cours ou terminé, d’un refus d’accès des occupants, et <b>sans aucun délai</b> de tout danger ou risque, potentiel ou avéré ; rendre compte <b>en permanence</b> de l’évolution de la situation pendant l’attaque.</p>' },
    { id: 'qualites', t: 'Clair, précis, concis', ic: 'check', src: INCE_1_LIV + ', p. 12',
      html: '<div class="tw"><table><thead><tr><th>Qualité</th><th>Définition du livret</th></tr></thead><tbody>' +
        '<tr><td><b>Clair</b></td><td>Un seul objet par compte rendu.</td></tr>' +
        '<tr><td><b>Précis</b></td><td>Pas de détails superflus ou inutiles.</td></tr>' +
        '<tr><td><b>Concis</b></td><td>Un seul objet par compte rendu.</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">Le livret donne la même définition (« un seul objet par compte rendu ») pour « clair » et pour « concis » : c’est vraisemblablement une erreur de recopie, signalée telle quelle.</p>' },
    { id: 'fin', t: 'Le compte rendu de fin de mission', ic: 'reset', src: INCE_1_LIV + ', p. 12',
      html: '<p>Il doit permettre au chef d’agrès de <b>mesurer le résultat de la mission</b> et, le cas échéant, de <b>donner une nouvelle mission</b> au chef d’équipe.</p>' +
        '<div class="callout ok">Un compte rendu de fin de mission dit donc : mission terminée ou non, ce qui reste à faire, l’état du binôme. Un binôme qui ne rend pas compte reste « en mission » pour son chef, qui ne peut pas le réemployer.</div>' +
        '<p class="small muted">La phrase encadrée est une explication ; le livret ne liste pas le contenu détaillé du compte rendu de fin de mission.</p>' }
  ],
  key: ['Je suis, je vois, je fais, je demande.', 'Compte rendu impératif : moyens insuffisants, difficulté, accident, découverte (victime, objet suspect ou de valeur).', 'Clair, précis, concis.', 'Fin de mission : permettre au CA de mesurer le résultat et de donner une nouvelle mission.', 'La qualité de la manœuvre dépend de la fréquence et de la qualité des comptes rendus.'],
  traps: ['Mélanger plusieurs sujets dans un même message : un seul objet par compte rendu.', 'Attendre la fin de mission pour signaler un danger : c’est « sans aucun délai ».', 'Oublier le « je demande » : le chef d’agrès ne devine pas les besoins.'],
  quiz: [
    { q: 'Les quatre rubriques du compte rendu opérationnel sont :', c: ['Je suis, je vois, je fais, je demande', 'Je vois, je pense, j’agis, je rends compte', 'Qui, quoi, où, quand', 'Je suis, je fais, je préviens, je repars'], e: 'Livret p. 12.', s: 'structure' },
    { q: 'Lequel de ces cas n’impose PAS un compte rendu en cours d’action selon la liste du livret ?', c: ['Le binôme progresse normalement dans le cheminement prévu', 'Les moyens s’avèrent insuffisants', 'Un accident survient', 'Un objet suspect est découvert'], e: 'Les cas impératifs : moyens insuffisants, difficulté, accident, découverte de victime/objet suspect ou de valeur. Il faut néanmoins rendre compte régulièrement.', s: 'quand' },
    { q: 'Un compte rendu « précis » signifie selon le livret :', c: ['Pas de détails superflus ou inutiles', 'Un seul objet par compte rendu', 'Donné toutes les 5 minutes', 'Écrit sur la tablette'], e: 'Livret p. 12.', s: 'qualites' },
    { q: 'À quoi sert le compte rendu de fin de mission ?', c: ['Permettre au chef d’agrès de mesurer le résultat et de donner une nouvelle mission', 'Remplir le rapport d’intervention', 'Informer la presse', 'Demander la relève systématique'], e: 'Livret p. 12.', s: 'fin' },
    { q: 'Votre binôme découvre une victime pendant la reconnaissance. Que faites-vous en matière de compte rendu ?', c: ['Un compte rendu immédiat au chef d’agrès', 'Rien avant d’être ressorti', 'Un compte rendu au binôme voisin', 'Attendre que l’équipier le fasse'], e: 'Découverte de victime = compte rendu impératif ; le sauvetage en cours ou terminé se signale aussi immédiatement.', s: 'quand' }
  ]
});

/* =====================================================================================
   CE INC 1 — CHAPITRE 5 : reconnaissance, sauvetages, PAO
   ===================================================================================== */
VSAV.chap({
  id: 'ince-reco', part: 'ince', seq: INCE_1_SEQ1,
  title: 'Reconnaissance, sauvetages et PAO : ce que le livret CE demande', short: 'Reconnaissance du CE', motif: 'eye',
  sources: [INCE_1_LIV + ', Partie 3 (p. 24), Partie 4 § 4.1-4.2 (p. 26-27), Partie 5 (p. 29)', INCE_1_HAL + ', F20 « Augmenter son rayon de reconnaissance »'],
  status: 'partiel',
  todo: 'Le § 4.2 « Méthodes d’extraction » du livret est marqué « En cours de réalisation » ; les parties Sauvetages (LSPP) et PAO renvoient au GNR LSPCC et au livret Équipier incendie, sans contenu propre.',
  summary: 'Une reconnaissance intégrale, méthodique et curieuse ; appels verbaux et silence dans le binôme ; renvois du livret pour le LSPCC et la PAO.',
  why: '<b>Pourquoi le livret insiste-t-il sur la « curiosité » ?</b> Une victime cachée sous un lit, derrière une porte ou dans un placard n’est trouvée que si on va la chercher. Le chef d’équipe ne doit <b>quitter aucun volume avec un doute</b> : c’est lui qui dira au chef d’agrès « local reconnu, personne », et cette phrase engage la vie des occupants.',
  sections: [
    { id: 'reco-ce', t: 'Le rôle du chef d’équipe en reconnaissance', ic: 'eye', src: INCE_1_LIV + ', § 4.1, p. 26',
      html: '<p>La mission du chef d’équipe est d’effectuer une <b>reconnaissance intégrale dans tous les volumes</b> qu’il rencontre. Ses reconnaissances doivent être <b>méthodiques, précises</b>, et il doit être <b>curieux</b> : aucun volume visité ne doit être quitté avec un doute sur la présence possible d’une victime.</p>' +
        '<ul class="check"><li><b>Allonger son bras</b> : il peut s’aider du manche de la <b>hache à tête plate</b> pour atteindre les endroits difficiles d’accès.</li><li><b>Appels verbaux</b> réguliers, <b>répartis dans le temps et l’espace</b> : ils signalent aux victimes la présence des secours.</li><li><b>Faire régner le silence</b> dans le binôme pour discerner les réponses ou les plaintes des victimes.</li><li><b>Communication avec l’équipier</b> : claire et concise pour ne pas parasiter les recherches, mais suffisante pour qu’il connaisse les intentions et les actions du chef.</li></ul>' +
        '<p>En complément, le livret renvoie au livret Équipier incendie, § 4.3 « Marquage des portes lors des reconnaissances ».</p>',
      figs: [{ img: 'img/ince-1/reco-ce.jpg', cap: 'Reconnaissance en binôme sous ARI', txt: '<p>Le chef d’équipe fouille le volume en s’aidant de l’outil pour sonder sous et derrière le mobilier ; l’équipier reste au contact.</p>', src: INCE_1_LIV + ', p. 26' }] },
    { id: 'outils', t: 'Augmenter son rayon de recherche avec l’outil', ic: 'hand', src: INCE_1_HAL + ', F20',
      html: '<p>La fiche Halligan précise la technique : l’outil permet d’<b>augmenter le rayon de la zone de recherche</b>, sous un lit ou tout meuble haut sur pied, et de faire rapidement le tour d’une pièce.</p>' +
        '<div class="tw"><table><thead><tr><th>Outil</th><th>Geste</th></tr></thead><tbody>' +
        '<tr><td>Halligan</td><td>Pointeau et herminette en contact avec le sol, <b>agiter la fourche incurvée</b>.</td></tr>' +
        '<tr><td>Hache à tête plate</td><td>Tenir dans sa main la tête plate, <b>agiter le manche en fibre</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn">Le même outil permet de <b>créer sa zone de survie ou un itinéraire de secours</b> en cas d’évolution rapide du feu ou d’effondrement : fracturer des ouvrants, ouvrir des brèches dans des cloisons minces…</div>' },
    { id: 'extraction', t: 'Méthodes d’extraction', ic: 'stretcher', src: INCE_1_LIV + ', § 4.2, p. 27',
      html: '<div class="callout warn">Le livret (v2019.1) indique pour ce paragraphe : <b>« En cours de réalisation »</b>. Aucune méthode d’extraction n’y est décrite.</div>' },
    { id: 'lspp', t: 'Sauvetages au moyen du LSPCC', ic: 'rope', src: INCE_1_LIV + ', Partie 3 § 3.1, p. 24 ; bibliographie p. 30',
      html: '<p>Pour cette partie, le livret renvoie directement au <b>Guide national de référence (GNR) « Lot de sauvetage et de protection contre les chutes »</b>, principalement pour deux manœuvres :</p>' +
        '<ul class="check"><li>sauvetage d’une victime par l’extérieur — <b>points fixes naturels</b> ;</li><li>sauvetage d’une victime par l’extérieur — <b>point fixe humain</b>.</li></ul>' +
        '<p class="small muted">Le titre du livret écrit « LSPP » ; le reste du livret et sa bibliographie parlent du LSPCC (GNR LSPCC, 1999). Le GNR n’est pas fourni dans le dossier CE INC.</p>' },
    { id: 'pao', t: 'Prévention appliquée à l’opération (PAO)', ic: 'clip', src: INCE_1_LIV + ', Partie 5, p. 29',
      html: '<p>Le livret CE ne développe pas la PAO : il renvoie à la partie « Prévention appliquée à l’opération » du <b>livret stagiaire Équipier incendie</b>. Rappel du référentiel CE (compétence 2) : « notions de prévention appliquée à l’opération » et « préservation des traces et indices » font partie des savoirs à maîtriser.</p>' }
  ],
  key: ['Reconnaissance intégrale de tous les volumes, méthodique, précise, curieuse.', 'Ne quitter aucun volume avec un doute sur la présence d’une victime.', 'Appels verbaux répartis dans le temps et l’espace ; silence dans le binôme pour écouter.', 'Allonger son bras : manche de la hache à tête plate, fourche du Halligan.', 'Communication avec l’équipier claire et concise.'],
  traps: ['Parler en permanence avec l’équipier : on n’entend plus les plaintes des victimes.', 'Quitter une pièce sans avoir sondé sous le lit ou derrière les meubles.', 'Croire que le livret CE décrit les méthodes d’extraction : le § 4.2 est encore vide.'],
  quiz: [
    { q: 'Pourquoi le chef d’équipe fait-il régner le silence dans le binôme pendant la recherche ?', c: ['Pour discerner les réponses ou les plaintes des victimes', 'Pour économiser l’air', 'Pour ne pas réveiller les occupants', 'Parce que la radio est interdite'], e: 'Livret p. 26.', s: 'reco-ce' },
    { q: 'Les appels verbaux en reconnaissance doivent être :', c: ['Réguliers, répartis dans le temps et l’espace', 'Uniques, à l’entrée du local', 'Faits uniquement par l’équipier', 'Évités pour ne pas affoler'], e: 'Ils signalent la présence des secours aux éventuelles victimes.', s: 'reco-ce' },
    { q: 'Avec le Halligan, comment augmenter son rayon de recherche sous un lit ?', c: ['Pointeau et herminette au sol, agiter la fourche incurvée', 'Lancer l’outil sous le lit', 'Frapper le sommier avec la fourche', 'Soulever le lit avec le pointeau'], e: 'Fiche Halligan F20.', s: 'outils' },
    { q: 'Quand peut-on quitter un volume reconnu ?', c: ['Quand il ne reste aucun doute sur la présence possible d’une victime', 'Après 30 secondes', 'Dès que la porte est marquée', 'Quand l’équipier le demande'], e: 'Livret p. 26 : aucun volume ne doit être quitté avec un doute.', s: 'reco-ce' },
    { q: 'Pour les sauvetages par l’extérieur, le livret CE renvoie au :', c: ['GNR Lot de sauvetage et de protection contre les chutes', 'GDO Incendies de structures', 'Livret chef d’agrès', 'Guide ARI'], e: 'Livret § 3.1 : points fixes naturels et point fixe humain.', s: 'lspp' }
  ]
});

/* =====================================================================================
   CE INC 2 — CHAPITRE 6 : les lances à eau à main (partie A, séquence 1)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-lances', part: 'ince', seq: INCE_1_SEQ2,
  title: 'Les lances à eau à main : familles, description et caractéristiques', short: 'Lances à eau à main', motif: 'drop',
  sources: [INCE_1_DIAPO, 'Schéma muet et corrigé « Les lances » (CE INC, partie A, séquence 1)', 'Fiche séquence « Les lances à eau à main » (CE INC, partie A, séquence 0)', INCE_1_DOCL + ', fiche 8.1'],
  summary: 'Lances traditionnelles et lances à débit variable : pièces, orifices, débits et pressions du tableau de la séquence.',
  why: '<b>Pourquoi revoir les lances au niveau chef d’équipe ?</b> Le livret CE l’explique : la LDV est « l’outil, l’arme du CE INC », et elle s’emploie <b>dans le noir, sous ARI et avec des gants</b>, donc à l’aveugle. Le chef d’équipe doit connaître chaque organe par cœur pour le trouver au toucher, et connaître débits et pressions pour savoir ce qu’il demande à l’engin.',
  sections: [
    { id: 'sequence', t: 'L’objectif de la séquence', ic: 'target', src: 'Fiche séquence « Les lances à eau à main », partie A',
      html: '<p>Séquence de <b>1 h 10</b> : à la fin, l’apprenant doit être capable, <b>au moyen d’un schéma muet</b>, de connaître la description, le rôle et les caractéristiques des lances, <b>2 erreurs tolérées</b> (exercice en 10 minutes).</p>' +
        '<p>Contenu de l’exposé : description, caractéristiques, différents jets, pression, débit, mise en œuvre.</p>' +
        '<p><b>Rôle d’une lance</b> (diaporama) : montée à l’extrémité des tuyaux, elle sert à <b>former et à diriger le jet</b>.</p>' },
    { id: 'familles', t: 'Deux familles de lances (schéma muet corrigé)', ic: 'image', src: 'Schéma muet corrigé « Les lances » ; ' + INCE_1_DIAPO,
      html: '<div class="tw"><table><thead><tr><th>Famille</th><th>Description</th><th>Pièces à nommer</th></tr></thead><tbody>' +
        '<tr><td><b>Lances traditionnelles</b> (ancien modèle)</td><td>Débit fixe ; fût tronconique et poignée de manœuvre ; orifice de sortie <b>circulaire</b> qui projette l’eau en jet bâton ou diffusé.</td><td>Ajutage avec orifice ; robinet d’ouverture/fermeture ; fût tronconique ; demi-raccord. <i>Nota : sur le fût tronconique, on peut trouver une rousture.</i></td></tr>' +
        '<tr><td><b>Lances à débit variable</b> (LDV, « lance à débit multiple et variable »)</td><td>Débit et jet réglables ; forme de <b>pistolet</b>.</td><td>Levier d’ouverture/fermeture ; système de formation des jets ; poignée de maintien ; demi-raccord ; bague de réglage de débit.</td></tr>' +
        '</tbody></table></div>' +
        '<p>L’intérêt de la LDV : le porte-lance fait varier la <b>forme</b> du jet et règle son <b>débit</b>, donc utilise la quantité d’eau <b>adaptée à l’intensité du foyer</b>.</p>' +
        '<p class="small muted">Le diaporama qualifie d’abord les lances traditionnelles de « lance à débit fixe et jet réglables » ; le document stagiaire parle de « lances à débit et jet réglables » pour les LDV.</p>',
      figs: [{ img: 'img/ince-1/familles-lances.jpg', cap: 'Les deux familles de lances du schéma muet', txt: '<p>À gauche, une lance traditionnelle (fût tronconique, ajutage) ; à droite, une lance à débit variable en forme de pistolet. Exercice : retrouver sur chacune les 4 et 5 pièces du tableau.</p>', src: 'Schéma muet « Les lances », partie A' }] },
    { id: 'traditionnelles', t: 'Les lances traditionnelles et leur orifice', ic: 'list', src: INCE_1_DIAPO,
      html: '<div class="tw"><table><thead><tr><th>Lance</th><th>Diamètre du raccord</th><th>Orifice</th></tr></thead><tbody>' +
        '<tr><td>Lance du dévidoir tournant (<b>LDT</b>)</td><td>20</td><td>7 mm</td></tr>' +
        '<tr><td><b>Petite lance</b> (PL)</td><td>40</td><td>14 mm</td></tr>' +
        '<tr><td><b>Grosse lance</b> (GL)</td><td>65</td><td>18 mm</td></tr>' +
        '<tr><td>Lance à grande puissance (<b>LGP</b>)</td><td>100</td><td>25 mm</td></tr>' +
        '</tbody></table></div>',
      figs: [{ img: 'img/ince-1/lances-traditionnelles.jpg', cap: 'Lances traditionnelles de différents calibres', txt: '<p>Du plus gros au plus petit calibre : lances à fût tronconique, robinet d’ouverture/fermeture et demi-raccord.</p>', src: INCE_1_DIAPO }] },
    { id: 'ldv', t: 'LDMR et LDMRS', ic: 'drop', src: INCE_1_DIAPO,
      html: '<p>Le diaporama distingue deux sortes de lances à débit variable :</p>' +
        '<ul class="check"><li><b>LDMRS</b> : lance à diffuseur mixte réglable <b>stabilisé</b> ;</li><li><b>LDMR</b> : lance à diffuseur mixte réglable.</li></ul>' +
        '<p>Les fiches de tâche des séquences 2 (lances) et TOOTEM utilisent une <b>DMRS</b> (diffuseur mixte réglable stabilisé). Le fonctionnement détaillé (boisseau, déflecteur, sélecteur de mode) figure au niveau Équipier incendie.</p>' },
    { id: 'tableau', t: 'Tableau des caractéristiques', ic: 'grid', src: INCE_1_DIAPO + ', diapositive « Tableau des caractéristiques »',
      html: '<div class="tw"><table><thead><tr><th>Lance</th><th>Ø tuyau</th><th>Débit (L/min)</th><th>Pression</th><th>Ø raccord</th><th>Orifice</th></tr></thead><tbody>' +
        '<tr><td>LDT</td><td>22</td><td>58</td><td>3,5 bars</td><td>20</td><td>7</td></tr>' +
        '<tr><td>PL</td><td>45</td><td>250</td><td>3,5 bars</td><td>40</td><td>14</td></tr>' +
        '<tr><td>GL</td><td>70</td><td>500</td><td>5,7 bars</td><td>65</td><td>18</td></tr>' +
        '<tr><td>LGP</td><td>110</td><td>1 000</td><td>6 bars</td><td>100</td><td>25</td></tr>' +
        '<tr><td>LDV 250</td><td>45</td><td>250</td><td>7 bars</td><td>40</td><td>/</td></tr>' +
        '<tr><td>LDV 500</td><td>45</td><td>500</td><td>7 bars</td><td>40</td><td>/</td></tr>' +
        '<tr><td>LDV 500</td><td>70</td><td>500</td><td>7 bars</td><td>65</td><td>/</td></tr>' +
        '<tr><td>LDV 500 (sic)</td><td>70</td><td>1 000</td><td>7 bars</td><td>65</td><td>/</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Divergences à connaître :</b><ul><li>La dernière ligne du diaporama s’intitule « LDV 500 » pour un débit de 1 000 L/min : erreur probable de libellé (lance de 1 000 L/min sur tuyau de 70), reproduite telle quelle.</li><li>Le diaporama indique <b>7 bars</b> pour les LDV ; le livret Équipier incendie (fiche MAT/10) donne pour la DMRS du SDIS 51 un mode <b>régulation 6 bars</b>. Les valeurs dépendent du modèle : se référer à la fiche du matériel en dotation.</li></ul></div>' },
    { id: 'speciales', t: 'Les lances spéciales', ic: 'grid', src: INCE_1_DIAPO + ', diapositives « Les lances spéciales »',
      html: '<p>Sur les incendies à caractère industriel, il faut d’importants moyens hydrauliques, qui permettent aussi au personnel de <b>travailler à distance et en sécurité</b> : <b>lances canons sur trépied ou remorquables</b>, alimentées par plusieurs établissements de 70 ou 110 mm selon les modèles.</p>' +
        '<div class="tw"><table><thead><tr><th>Exemple du diaporama</th><th>Alimentation</th></tr></thead><tbody>' +
        '<tr><td>Lance canon</td><td>2 entrées de 100 mm</td></tr><tr><td>Lance sur trépied</td><td>2 entrées de 70 mm</td></tr><tr><td>Lance canon mousse</td><td>1 entrée de 100 mm</td></tr>' +
        '</tbody></table></div>',
      figs: [{ img: 'img/ince-1/lances-speciales.jpg', cap: 'Lances spéciales', txt: '<p>Une lance sur trépied et une lance canon sur roues : elles se posent et permettent de s’éloigner du foyer.</p>', src: INCE_1_DIAPO }] }
  ],
  key: ['Deux familles : lances traditionnelles (débit fixe) et lances à débit variable (LDV).', 'Traditionnelle : ajutage avec orifice, robinet, fût tronconique, demi-raccord.', 'LDV : levier, système de formation des jets, poignée, demi-raccord, bague de débit.', 'Orifices : LDT 7, PL 14, GL 18, LGP 25 mm.', 'Diaporama : PL 250 L/min, GL 500 L/min, LGP 1 000 L/min ; LDV à 7 bars (6 bars pour la DMRS selon le livret EQ).', 'LDMRS = lance à diffuseur mixte réglable stabilisé.'],
  traps: ['Confondre diamètre du tuyau (45, 70) et diamètre du raccord (40, 65).', 'Retenir 7 bars comme une valeur universelle : le livret Équipier donne 6 bars pour la DMRS du SDIS 51.', 'Croire qu’on règle le débit d’une lance traditionnelle : son orifice est fixe.'],
  quiz: [
    { q: 'Quel est le diamètre d’orifice d’une petite lance de 40 ?', c: ['14 mm', '7 mm', '18 mm', '25 mm'], e: 'Diaporama : PL orifice 14 mm ; LDT 7, GL 18, LGP 25 mm.', s: 'traditionnelles' },
    { q: 'Quelle pièce n’appartient PAS à une lance traditionnelle ?', c: ['La bague de réglage de débit', 'Le fût tronconique', 'L’ajutage avec orifice', 'Le robinet d’ouverture/fermeture'], e: 'La bague de réglage de débit est propre aux lances à débit variable.', s: 'familles' },
    { q: 'Que signifie LDMRS ?', c: ['Lance à diffuseur mixte réglable stabilisé', 'Lance à débit multiple réglable simple', 'Lance de dévidoir mobile à refoulement sécurisé', 'Lance à double mode régulé standard'], e: 'Diaporama « Les lances ».', s: 'ldv' },
    { q: 'Débit d’une grosse lance (GL) selon le tableau du diaporama :', c: ['500 L/min', '250 L/min', '1 000 L/min', '58 L/min'], e: 'GL : tuyau 70, 500 L/min, 5,7 bars, raccord 65, orifice 18.', s: 'tableau' },
    { q: 'Quel est l’avantage principal d’une LDV ?', c: ['Adapter la quantité d’eau à l’intensité du foyer', 'Fonctionner sans pression', 'Supprimer le recul', 'Ne jamais se boucher'], e: 'Diaporama : elle permet d’utiliser la quantité d’eau adaptée à l’intensité du foyer.', s: 'familles' },
    { q: 'Pourquoi le chef d’équipe doit-il connaître les organes de sa LDV par cœur ?', c: ['Parce qu’elle s’utilise dans le noir, sous ARI et avec des gants', 'Pour l’examen seulement', 'Pour la démonter en intervention', 'Pour en changer le débit à la pompe'], e: 'Livret CE § 2.2 : utilisation « à l’aveugle ».', s: 'sequence' },
    { q: 'Une lance sur trépied du diaporama est alimentée par :', c: ['2 entrées de 70 mm', '1 entrée de 45 mm', '2 entrées de 100 mm', '1 entrée de 110 mm'], e: 'Lance canon : 2 entrées de 100 ; trépied : 2 entrées de 70 ; canon mousse : 1 entrée de 100.', s: 'speciales' }
  ]
});

/* =====================================================================================
   CE INC 2 — CHAPITRE 7 : choisir son jet, les « quatre D »
   ===================================================================================== */
VSAV.chap({
  id: 'ince-jets', part: 'ince', seq: INCE_1_SEQ2,
  title: 'Choisir son jet et piloter sa lance : débit, diffusion, direction, durée', short: 'Choisir son jet', motif: 'target',
  sources: [INCE_1_DOCL + ', fiches 8.1 à 8.9', INCE_1_DIAPO + ', diapositives « Les différents jets »'],
  summary: 'Les paramètres que le porte-lance règle lui-même : forme du jet et ses usages, gestion du débit, mouvements de lance, jet continu ou par impulsion.',
  why: '<b>Pourquoi est-ce au chef d’équipe de choisir ?</b> Dans le binôme d’attaque, le chef d’équipe est le <b>porte-lance</b>. Le document stagiaire le souligne : la LDV permet une « véritable <b>gestion du potentiel hydraulique</b> par le porte-lance, indépendamment de l’alimentation assurée par l’engin ». Le bon jet au bon moment éteint et protège ; le mauvais gaspille l’eau ou expose le binôme.',
  sections: [
    { id: 'quatre-d', t: 'Les « quatre D » du porte-lance', ic: 'list', src: INCE_1_DOCL + ', fiches 8.1-8.2',
      html: '<p>L’ensemble des paramètres sur lesquels joue le porte-lance se mémorise par les <b>quatre D</b> :</p>' +
        '<div class="tw"><table><thead><tr><th>D</th><th>Ce que l’on règle</th></tr></thead><tbody>' +
        '<tr><td><b>Diffusion</b></td><td>Le type de jet (droit, diffusé d’attaque, diffusé de protection).</td></tr>' +
        '<tr><td><b>Débit</b></td><td>La quantité d’eau projetée, adaptée à la situation.</td></tr>' +
        '<tr><td><b>Direction</b></td><td>L’orientation du jet et les mouvements de lance.</td></tr>' +
        '<tr><td><b>Durée</b></td><td>Le temps d’application : continu ou par impulsion.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Divergence :</b> ce document (2011) parle de <b>quatre D</b> ; le livret Équipier incendie SDIS 51 enseigne la règle des <b>cinq D</b>, qui ajoute la <b>Distance</b>, conséquence du débit, de la direction et de la diffusion. Les deux approches ne se contredisent pas sur le fond.</div>' },
    { id: 'jets', t: 'Les trois jets et leurs usages', ic: 'spray', src: INCE_1_DOCL + ', fiches 8.2-8.4 ; ' + INCE_1_DIAPO,
      html: '<p>Les jets doivent permettre d’<b>atteindre</b> un foyer (portée efficace), d’<b>absorber</b> de la chaleur (répartition de l’eau) et de <b>protéger</b> un binôme ou une structure (écran d’eau).</p>' +
        '<div class="tw"><table><thead><tr><th></th><th>Jet droit</th><th>Diffusé d’attaque</th><th>Diffusé de protection</th></tr></thead><tbody>' +
        '<tr><th>Portée</th><td>Grande</td><td>Moyenne</td><td>Faible</td></tr>' +
        '<tr><th>Pénétration</th><td>Bonne</td><td>Bonne</td><td>Aucune</td></tr>' +
        '<tr><th>Surface de contact</th><td>Faible</td><td>Grande</td><td>Très grande</td></tr>' +
        '<tr><th>Refroidissement</th><td>Mauvais</td><td>Bon</td><td>Très bon</td></tr>' +
        '<tr><th>Usages (diaporama)</th><td>Attaque à l’air libre ; attaque à distance (risque d’effondrement, feu de véhicule, attaque sur MEA) ; effet mécanique ou pénétrant dans une masse de combustible ; grande surface en feu ; écran d’eau de grande portée ; vent fort</td><td>Attaque en volume clos ou semi-ouvert ; attaque massive ; feux virulents ; <b>test du plafond</b> ; inertage des fumées ; inertage par création de vapeur ; certaines nappes d’hydrocarbures en feu</td><td>Écran de protection thermique (rideau d’eau) ; protection du binôme en cas de fort dégagement de chaleur soudain, d’EGE…</td></tr>' +
        '</tbody></table></div>' +
        '<ul class="check"><li><b>Diffusé d’attaque</b> : jet d’eau pulvérisée, <b>cône de 15 à 45°</b> ; double fonction de lutte contre l’incendie et de protection du binôme contre le rayonnement ; compromis entre portée et absorption de chaleur.</li><li><b>Diffusé de protection</b> : jet diffusé dans la <b>plus grande ouverture possible</b>, qui protège simultanément les deux équipiers face à un grand dégagement calorifique.</li></ul>' +
        '<div class="callout bad"><b>Risque électrique :</b> si l’eau doit être employée, le jet diffusé d’attaque doit présenter un angle d’ouverture de <b>30° minimum</b> (document stagiaire, fiche 8.4).</div>',
      figs: [{ img: 'img/ince-1/jets.jpg', cap: 'Jet droit, jet diffusé d’attaque, jet diffusé de protection', txt: '<p>Plus le cône s’ouvre, plus la portée diminue et plus la surface de contact (donc le refroidissement) augmente. Le diffusé d’attaque (15 à 45°) est le jet de progression du binôme.</p>', src: INCE_1_DOCL + ', fiches 8.2 à 8.4' }] },
    { id: 'debit', t: 'Gérer son débit', ic: 'drop', src: INCE_1_DOCL + ', fiche 8.5',
      html: '<p>Le porte-lance gère lui-même le débit au cours de l’attaque : il peut l’<b>augmenter rapidement</b> en cas de besoin, et peut aussi être appelé à le <b>réduire sur ordre du chef du dispositif</b>.</p>' +
        '<p>Le débit à appliquer tient compte :</p>' +
        '<ul class="check"><li>du <b>type de feu</b> et de l’<b>intensité du foyer</b> ;</li><li>de la <b>phase du feu</b> : <b>débit élevé au début de l’attaque</b>, <b>faible pour les phases de noyage</b> ;</li><li>du <b>volume à éteindre</b> et du <b>potentiel calorifique</b> ;</li><li>de la <b>propagation</b>, des <b>risques potentiels</b> et de la <b>menace pour les intervenants</b>.</li></ul>' },
    { id: 'direction', t: 'Diriger le jet : balayages et types d’attaque', ic: 'next', src: INCE_1_DOCL + ', fiches 8.6-8.8',
      html: '<p>Le porte-lance peut effectuer un <b>balayage horizontal</b>, un <b>balayage vertical</b> ou un <b>mouvement en cercle</b> (balayage global du volume).</p>' +
        '<div class="tw"><table><thead><tr><th>Attaque</th><th>Principe (document stagiaire)</th></tr></thead><tbody>' +
        '<tr><td><b>Directe</b></td><td>Projeter l’eau directement sur un foyer <b>localisé et visible</b>.</td></tr>' +
        '<tr><td><b>Indirecte</b></td><td>Projeter l’eau <b>vers le haut du volume</b>, quand le binôme ne voit pas le foyer et/ou ne peut pas pénétrer à cause de son intensité.</td></tr>' +
        '<tr><td><b>Combinée</b></td><td>Associer attaque directe et indirecte en manœuvrant la lance sur le foyer et la couche de fumée ; méthode des lettres (« <b>crayonnage</b> » : T, Z, O), départ en partie haute.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Les gestes T, Z, O sont détaillés dans le chapitre suivant.</p>',
      figs: [{ img: 'img/ince-1/direction.jpg', cap: 'Mouvements de lance', txt: '<p>À gauche, les balayages (horizontal, vertical) ; à droite, le mouvement en cercle qui balaie l’ensemble du volume.</p>', src: INCE_1_DOCL + ', fiche 8.7' }] },
    { id: 'duree', t: 'La durée : jet continu ou par impulsion', ic: 'clock', src: INCE_1_DOCL + ', fiche 8.9',
      html: '<div class="tw"><table><thead><tr><th>Mode</th><th>Geste</th><th>Quand ?</th></tr></thead><tbody>' +
        '<tr><td><b>En continu</b></td><td>Le dispositif d’ouverture/fermeture reste en position ouverte.</td><td>Extinction nécessitant un volume d’eau important ou une grande surface à couvrir.</td></tr>' +
        '<tr><td><b>Par impulsion</b></td><td>Ouvert seulement <b>quelques secondes</b> : on projette une <b>quantité d’eau contrôlée</b> sur le foyer ou dans les fumées.</td><td>Jet de courte durée, sur le foyer ou dans les fumées.</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">Le GTO Établissements et techniques d’extinction, auquel renvoie le livret CE, précise des repères chiffrés pour les impulsions courtes et longues (voir chapitre suivant).</p>' }
  ],
  key: ['Quatre D (document 2011) : diffusion, débit, direction, durée ; le livret EQ ajoute la distance (5 D).', 'Jet droit : grande portée, bonne pénétration, mauvais refroidissement.', 'Diffusé d’attaque : 15 à 45°, portée moyenne, bon refroidissement ; test du plafond et inertage.', 'Diffusé de protection : plus grande ouverture possible, protège tout le binôme.', 'Risque électrique : diffusé d’attaque à 30° minimum.', 'Débit élevé au début de l’attaque, faible au noyage ; réduction sur ordre du chef du dispositif.', 'Attaque indirecte : vers le haut du volume quand le foyer n’est pas visible.'],
  traps: ['Progresser en jet droit dans un volume clos : mauvais refroidissement des fumées.', 'Utiliser un jet diffusé d’attaque fermé (moins de 30°) près d’une installation électrique.', 'Garder le débit maximal au noyage : dégâts des eaux inutiles.'],
  quiz: [
    { q: 'Angle d’ouverture du jet diffusé d’attaque :', c: ['15 à 45°', '5 à 10°', '60 à 90°', 'La plus grande ouverture possible'], e: 'Document stagiaire fiche 8.4 et fiches de tâche : 15° à 45°.', s: 'jets' },
    { q: 'En présence d’un risque électrique, le jet diffusé d’attaque doit avoir un angle minimum de :', c: ['30°', '15°', '45°', '90°'], e: 'Document stagiaire fiche 8.4.', s: 'jets' },
    { q: 'Quel jet a la plus grande surface de contact et le meilleur refroidissement ?', c: ['Le jet diffusé de protection', 'Le jet droit', 'Le jet diffusé d’attaque', 'Le jet bâton'], e: 'Diffusé de protection : très grande surface de contact, très bon refroidissement, portée faible, aucune pénétration.', s: 'jets' },
    { q: 'Quel jet le diaporama préconise-t-il pour le test du plafond ?', c: ['Le jet diffusé d’attaque', 'Le jet droit', 'Le jet diffusé de protection', 'Le jet en purge'], e: 'Utilisations du diffusé d’attaque : volume clos, attaque massive, test du plafond, inertage…', s: 'jets' },
    { q: 'L’attaque indirecte consiste à :', c: ['Projeter l’eau vers le haut du volume quand le foyer n’est pas visible ou inaccessible', 'Arroser le foyer visible', 'Arroser les murs extérieurs', 'Attaquer depuis un autre étage'], e: 'Document stagiaire fiche 8.8.', s: 'direction' },
    { q: 'Au noyage, le débit doit être :', c: ['Faible', 'Maximal', 'Identique au début de l’attaque', 'Nul'], e: 'Gestion des débits : élevé au début de l’attaque, faible pour les phases de noyage.', s: 'debit' },
    { q: 'Le jet droit est préconisé notamment :', c: ['Pour une attaque à distance (risque d’effondrement, feu de véhicule, MEA) ou par vent fort', 'Pour le test du plafond', 'Pour protéger le binôme d’un EGE', 'Pour inerter un volume clos'], e: 'Diaporama, utilisations du jet droit.', s: 'jets' }
  ]
});

/* =====================================================================================
   CE INC 2 — CHAPITRE 8 : gestes de lance (partie A, séquence 2)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-gestes-lance', part: 'ince', seq: INCE_1_SEQ2,
  title: 'Les gestes de lance du chef d’équipe : test du plafond, inertage, crayonnage, position de survie', short: 'Gestes de lance', motif: 'flame',
  sources: [INCE_1_FTA + ' (activités démonstrative et applicative)', 'Grille d’observations « Manipulation de lances » (CE INC, partie A, séquence 2)', INCE_1_LIV + ', § 2.2 (p. 19-21)', INCE_1_DOCL + ', fiche 8.8', INCE_1_GTO + ', ETEX-STR-TDE-1 et TDE-4 (p. 85-96)'],
  summary: 'La séquence pratique « techniques de lances » : se mettre à genoux, régler en diffusé d’attaque, tester le plafond, inerter, crayonner T-Z-O, se mettre en position de survie.',
  why: '<b>Pourquoi ces gestes précis ?</b> Ils répondent à une question simple : « Puis-je avancer ? ». Le <b>test du plafond</b> mesure la chaleur des fumées sans s’y exposer ; l’<b>inertage</b> les refroidit si elles sont trop chaudes ; le <b>crayonnage</b> éteint quand le foyer est en vue ; la <b>position de survie</b> est le dernier recours face à l’embrasement. Le livret CE le rappelle : comment être efficace sans mettre son binôme en danger si cet outil n’est pas maîtrisé ?',
  sections: [
    { id: 'arme', t: 'La LDV, « l’arme » du chef d’équipe', ic: 'star', src: INCE_1_LIV + ', § 2.2, p. 19-21 ; Partie 2, p. 14',
      html: '<p>Le livret CE : le chef d’équipe incendie est le <b>porte-lance du binôme</b>. Ses actions sur le feu ont des <b>répercussions immédiates</b>, positives ou négatives : efficaces, elles font baisser l’intensité et maîtrisent la propagation ; mauvaises, elles laissent le feu échapper et peuvent atteindre la <b>sécurité des personnels</b>.</p>' +
        '<ul class="check"><li>La LDV offre plusieurs types d’utilisation : il n’est « pas concevable » qu’un CE INC n’en connaisse pas <b>toutes les possibilités et les manipulations par cœur</b>.</li><li>Elle s’utilise principalement <b>dans le noir</b>, avec l’<b>ARI</b> et des <b>gants</b> : une utilisation <b>à l’aveugle</b>.</li></ul>' +
        '<p>Pour les techniques de lance, le livret renvoie au <b>GTO Établissements et techniques d’extinction, p. 79 à 105</b>, et à des vidéos : progression, attaque combinée, attaque pulsing-penciling, attaque d’atténuation (présentation, vue à la caméra thermique, action du jet), bonne et mauvaise technique de lance.</p>' },
    { id: 'seance', t: 'La séquence « techniques de lances »', ic: 'clock', src: 'Fiche séquence 2 « Techniques de lances » ; ' + INCE_1_FTA,
      html: '<p><b>Objectif</b> : appliquer individuellement (en binôme pour l’activité applicative) les techniques de lances en fonction des différentes situations, en respectant les consignes de sécurité. Durée de la séquence : <b>2 h</b> (découverte 5 min, démonstration 15 min, application 1 h 40).</p>' +
        '<div class="tw"><table><tbody><tr><th>Tenue</th><td>EPI complets, tenue de feu</td></tr><tr><th>Matériel</th><td>1 FPT, DMRS (1 pour la démonstration, 2 pour l’application), 4 tuyaux de 45/20 m, 1 division mixte, 1 tuyau de 70/20 m</td></tr><tr><th>Encadrement</th><td>Formateurs FOR1 et INC1 (1 au minimum pour la démonstration, 2 pour l’application)</td></tr></tbody></table></div>' },
    { id: 'gestes', t: 'Les gestes, dans l’ordre', ic: 'play', src: INCE_1_FTA,
      steps: ['Prendre la lance, un équipier en appui.', 'Se mettre à genoux pour manœuvrer : la stabilité est bien meilleure.', 'Régler le jet en diffusé d’attaque, entre 15° et 45°.', 'Test du plafond : un coup de lance vers le plafond, tuyau bien coudé à 90° par rapport au sol.', 'Inertage : ouverture de la lance pendant 2 s, si l’eau n’est pas retombée lors du test du plafond.', 'Crayonnage T, Z, O : quand le binôme a le foyer en vue.', 'Position de survie avec son binôme : face à un embrasement généralisé éclair (flashover).'],
      stepsTitle: 'Mise en œuvre des lances (fiche de tâche)',
      after: '<div class="callout ok"><b>Lire le test du plafond :</b> l’eau projetée au plafond <b>retombe</b> → les fumées ne l’ont pas vaporisée ; elle <b>ne retombe pas</b> → les fumées sont assez chaudes pour la vaporiser : on <b>inerte</b> (2 s) avant d’avancer. C’est la logique reprise dans le TOOTEM (dernier chapitre).</div>' },
    { id: 'toz', t: 'Le crayonnage : T, Z, O', ic: 'target', src: INCE_1_DOCL + ', fiche 8.8 ; ' + INCE_1_FTA + ' ; ' + INCE_1_GTO + ', ETEX-STR-TDE-4 (p. 95-96)',
      html: '<p>Le document stagiaire décrit une « méthode des lettres » pour l’attaque combinée : le porte-lance trace une lettre avec son jet, <b>le point de départ étant en partie haute</b>. Il associe à chaque geste un usage :</p>' +
        '<ul class="check"><li>un geste qui permet de <b>balayer le feu, les fumées et les parois</b> ;</li><li>un geste <b>dans un volume moyen, centré sur le feu et les fumées</b> ;</li><li>un geste qui <b>peut être utilisé dans un couloir</b>.</li></ul>' +
        '<p class="small muted">Dans le document d’origine, les lettres T, Z et O sont des dessins ; l’extraction du texte ne permet pas d’affecter avec certitude chaque usage à chaque lettre.</p>' +
        '<div class="callout warn"><b>Divergence entre sources :</b><ul><li>Les fiches de tâche du SDIS 51 font réaliser le « T, Z, O » <b>pendant la progression</b>, « lorsque le binôme a le <b>foyer en vue</b> ».</li><li>Le <b>GTO 2018</b> (fiche TDE-4) réserve l’extinction combinée en T, Z, O, 8… aux feux <b>pleinement développés</b>, <b>depuis l’extérieur</b> du local, « afin de ne pas subir le retour de vapeur », avec des gestes « posés » jusqu’à <b>5 à 6 s</b> ; il prévient qu’elle peut propager le feu à un volume adjacent s’il existe un ouvrant entre les deux.</li></ul>En stage, applique la consigne de l’encadrement ; en intervention, tiens compte du retour de vapeur.</div>',
      figs: [{ img: 'img/ince-1/crayonnage-toz.jpg', cap: 'Crayonnage en T, en Z et en O', txt: '<p>Le binôme est à genoux à l’entrée du volume ; le jet part du haut et dessine la lettre sur le feu, les fumées et les parois.</p>', src: INCE_1_DOCL + ', fiche 8.8' }] },
    { id: 'impulsions', t: 'Repères du GTO pour les impulsions', ic: 'snow', src: INCE_1_GTO + ', ETEX-STR-TDE-1 (p. 85-86)',
      html: '<p>Le livret CE renvoie au GTO pour les techniques de lance ; ses repères chiffrés complètent la fiche de tâche :</p>' +
        '<div class="tw"><table><thead><tr><th></th><th>Impulsion courte (pulsing)</th><th>Impulsion longue</th></tr></thead><tbody>' +
        '<tr><th>Geste</th><td>Ouverture/fermeture la plus rapide possible : <b>une demi-seconde au plus</b></td><td>Ouverture rapide puis <b>2 à 5 s</b> environ en fermeture progressive</td></tr>' +
        '<tr><th>Réglage repère</th><td>100 à 250 L/min environ, angle 30 à 60°</td><td>100 à 300 L/min, angle 20 à 30° environ</td></tr>' +
        '<tr><th>Structures</th><td>Habitations standards, hôtels, bureaux</td><td>Magasins, entrepôts, atriums, garages ; <b>passages de portes</b></td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">La fiche de tâche SDIS 51 fixe l’inertage à une ouverture de 2 s en jet diffusé d’attaque de 15 à 45° ; le GTO donne des angles de 20 à 60° selon l’impulsion. Selon la largeur du volume, le GTO prévoit 2 ou 3 impulsions.</p>' },
    { id: 'grille', t: 'Ce que l’évaluateur observe', ic: 'check', src: 'Grille d’observations « Manipulation de lances », CE, partie A, séquence 2',
      html: '<div class="tw"><table><thead><tr><th>Savoir-faire (critères objectifs)</th><th>Savoir-être (critères subjectifs)</th></tr></thead><tbody><tr><td><ul class="check"><li>EPI complet (sinon, <b>arrêt de la manœuvre</b>)</li><li>Règle le jet de la lance en diffusé d’attaque</li><li>Réalise un test de plafond</li><li>Réalise un inertage</li><li>Réalise le TOZ</li><li>Réalise la position de survie</li></ul></td><td><ul class="check"><li>Sait utiliser la lance</li><li>Prend soin de la lance</li><li>Respecte les positions de travail</li><li>Adapte son comportement à la situation</li><li>Respecte les règles de sécurité</li></ul></td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Règle :</b> 1 item « non fait » ou 2 cases « C » (insuffisant) = <b>manœuvre à refaire</b>. Cotation : A = bien, B = moyen, C = insuffisant.</div>' }
  ],
  key: ['Le chef d’équipe est le porte-lance du binôme ; ses actions ont des effets immédiats.', 'À genoux pour manœuvrer : meilleure stabilité.', 'Diffusé d’attaque entre 15° et 45° avant d’agir.', 'Test du plafond : tuyau coudé à 90° ; l’eau ne retombe pas → inertage.', 'Inertage : ouverture de la lance pendant 2 s.', 'T, Z, O : foyer en vue (fiches SDIS 51) ; depuis l’extérieur sur feu pleinement développé (GTO).', 'Position de survie : face à un embrasement généralisé éclair.', 'Grille : 1 « non fait » ou 2 « C » = à refaire ; EPI incomplet = arrêt.'],
  traps: ['Avancer alors que l’eau du test du plafond n’est pas retombée.', 'Manœuvrer la lance debout : stabilité moindre et exposition à la chaleur.', 'Crayonner à l’intérieur d’un volume pleinement développé : retour de vapeur (GTO).'],
  quiz: [
    { q: 'Pourquoi se mettre à genoux pour manœuvrer la lance ?', c: ['La stabilité est bien meilleure', 'Pour économiser l’air', 'Pour mieux voir le plafond', 'Pour que l’équipier passe devant'], e: 'Fiche de tâche : « la stabilité est bien meilleure de cette façon ».', s: 'gestes' },
    { q: 'Lors du test du plafond, le tuyau doit être coudé à :', c: ['90° par rapport au sol', '45°', '15°', 'Il doit rester droit'], e: 'Fiche de tâche : tuyau bien coudé à 90° par rapport au sol.', s: 'gestes' },
    { q: 'L’eau du test du plafond ne retombe pas. Que faites-vous ?', c: ['Un inertage : ouverture de la lance pendant 2 s', 'Vous progressez immédiatement', 'Vous passez en jet droit', 'Vous vous relevez pour mieux voir'], e: 'Les fumées vaporisent l’eau : elles sont chaudes. La fiche prévoit un inertage de 2 s.', s: 'gestes' },
    { q: 'Selon les fiches de tâche SDIS 51, le T, Z, O se réalise :', c: ['Lorsque le binôme a le foyer en vue', 'Avant d’ouvrir la porte', 'Uniquement au déblai', 'Pour se protéger d’un flashover'], e: 'Fiche de tâche partie A, séquence 2. Le GTO le place depuis l’extérieur sur feu pleinement développé : divergence signalée.', s: 'toz' },
    { q: 'Quand le binôme se met-il en position de survie ?', c: ['Face à un embrasement généralisé éclair (flashover)', 'À chaque ouverture de porte', 'Pendant le test du plafond', 'Quand l’ARI siffle'], e: 'Fiche de tâche : position de survie face à un flashover.', s: 'gestes' },
    { q: 'Durée d’une impulsion courte (pulsing) selon le GTO :', c: ['Une demi-seconde au plus', '2 à 5 secondes', '5 à 6 secondes', '10 secondes'], e: 'GTO ETEX-STR-TDE-1. L’impulsion longue dure 2 à 5 s environ.', s: 'impulsions' },
    { q: 'Sur la grille d’observations, quand la manœuvre est-elle à refaire ?', c: ['1 item « non fait » ou 2 cases « C »', '3 items « non fait »', 'Une seule case « B »', 'Jamais, c’est une évaluation formative'], e: 'Légende de la grille ; un EPI incomplet arrête la manœuvre.', s: 'grille' },
    { q: 'Pourquoi le livret CE parle-t-il d’une utilisation « à l’aveugle » de la LDV ?', c: ['Elle s’utilise dans le noir, sous ARI et avec des gants', 'Elle n’a pas de repères', 'On ferme les yeux pour se protéger', 'On ne voit jamais le jet'], e: 'Livret § 2.2.', s: 'arme' }
  ]
});

/* =====================================================================================
   CE INC 2 — CHAPITRE 9 : diriger un forcement (partie B)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-forcement', part: 'ince', seq: INCE_1_SEQ2,
  title: 'Diriger un forcement : la porte pédagogique', short: 'Diriger un forcement', motif: 'hand',
  sources: [INCE_1_HAL + ', F1 à F22 (dossier formateur CE INC, partie B « porte pédagogique de forcement »)'],
  summary: 'Le chef d’équipe tient le Halligan et commande : choisir la technique selon la porte, commander les frappes, gérer plusieurs verrouillages, choisir un autre outil.',
  why: '<b>Pourquoi parler de commandement pour un forcement ?</b> Dans le binôme, <b>le chef manœuvre le Halligan et dirige</b>, l’équipier frappe et ne fait que cela. Tout repose donc sur les décisions du chef : où placer l’outil, quand frapper, quand s’arrêter pour replacer, quand changer de méthode. Un chef qui voit mal sa zone de travail ou donne des ordres flous expose les mains de chacun et perd du temps devant une porte derrière laquelle il y a peut-être une victime ou du feu.',
  sections: [
    { id: 'objectifs', t: 'Objectifs de la séquence', ic: 'target', src: INCE_1_HAL + ', F1',
      html: '<p>À la fin de la séquence, le stagiaire doit être capable de :</p>' +
        '<ul class="check"><li><b>décrire l’outil</b> et ses différentes utilisations ;</li><li><b>réaliser le forcement</b> d’une porte tirante et d’une porte poussante ;</li><li><b>respecter rigoureusement</b> les principes de sécurité liés à l’utilisation de l’outil.</li></ul>' +
        '<p>Le <b>forcement</b> est l’ensemble des techniques utilisées pour pénétrer dans des locaux ou des sites dont les accès sont <b>verrouillés, obstrués ou inexistants</b>. Rappel : le Halligan (1948, Hugh Halligan, pompier de New York) s’emploie avec un outil de frappe (masse ou hache à tête plate) ; l’ensemble forme « la ferraille ».</p>' },
    { id: 'commander', t: 'Commander le binôme de forcement', ic: 'team', src: INCE_1_HAL + ', F5',
      html: '<div class="tw"><table><thead><tr><th></th><th>Le chef</th><th>L’équipier</th></tr></thead><tbody>' +
        '<tr><th>Outil</th><td><b>Halligan</b> ; dirige par des ordres <b>forts et clairs</b></td><td><b>Outil de frappe</b> ; entièrement concentré sur la percussion et sur les ordres du chef</td></tr>' +
        '<tr><th>Position</th><td>Peut manœuvrer son outil tout en ayant une <b>bonne visibilité de sa zone de travail</b></td><td>Debout si la zone de frappe est au niveau ou au-dessus de son plexus ; à genoux ou en trépied en dessous ; une main à environ 15 cm sous la tête de l’outil, l’autre en bas du manche</td></tr>' +
        '</tbody></table></div>' +
        '<div class="tw"><table><thead><tr><th>Ordre</th><th>Effet</th></tr></thead><tbody><tr><td><b>« FRAPPE »</b></td><td><b>Une</b> frappe, et une seule.</td></tr><tr><td><b>« STOP »</b> ou main levée</td><td>Le chef interrompt les frappes pour <b>replacer son outil</b> ou <b>passer à une autre étape</b>.</td></tr></tbody></table></div>' +
        '<div class="callout bad"><b>EPI</b> : opérations diverses, au minimum tenue F1 complète + casque + gants ; incendie, tenue de feu complète + ARI capelé si nécessaire. Sur incendie, si la situation le nécessite, une <b>LDV en eau</b> doit être prête à protéger le personnel et à réaliser les contrôles habituels (température de la porte, réaction sur les sorties et couleur des fumées…).</div>',
      figs: [{ img: 'img/ince-1/forcement-ordres.jpg', cap: 'Positionnements et ordres', txt: '<p>À gauche, l’équipier debout ou à genoux selon la hauteur de frappe, mains placées sur le manche. À droite, le chef tient le Halligan et commande : « FRAPPE » (une frappe) puis « STOP » (main levée) pour replacer l’outil.</p>', src: INCE_1_HAL + ', F5' }] },
    { id: 'diagnostic', t: 'Avant de forcer : lire la porte', ic: 'eye', src: INCE_1_HAL + ', F3-F4, F8',
      html: '<div class="tw"><table><thead><tr><th>Porte</th><th>Reconnaissance</th><th>Où la rencontre-t-on ?</th></tr></thead><tbody>' +
        '<tr><td><b>Tirante</b></td><td><b>Gonds visibles</b></td><td>Bâtiments publics, industriels, commerciaux, locaux techniques ; en habitation : caves, parkings souterrains</td></tr>' +
        '<tr><td><b>Poussante</b></td><td>Pas de gonds visibles</td><td>Habitations : portes d’entrée de pavillon ou d’appartement</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Tester une porte poussante</b> : pousser ou frapper <b>en haut, au milieu et en bas</b>. L’écartement constaté ou non de la porte par rapport à son cadre indique le <b>nombre de points de verrouillage</b>.</p>' +
        '<p>Technique générale, à retenir dans l’ordre : <b>écarter</b> (créer l’interstice), <b>engager</b> (l’outil entre ouvrant et cadre), <b>forcer</b> (bras de levier). Zone de travail à environ <b>15 cm</b> au-dessus ou en dessous du point de verrouillage. Le détail des gestes figure au niveau Équipier.</p>' +
        '<div class="callout warn">Sur porte poussante, <b>contrôler l’ouverture soudaine</b> de la porte : tenir la poignée avec la main ou une sangle, ou avec le pointeau du Halligan. Le chef se place de préférence <b>côté cadre</b> pour bien voir la zone de travail.</div>',
      figs: [{ img: 'img/ince-1/forcement-tester.jpg', cap: 'Tester une porte poussante', txt: '<p>Pousser ou frapper en haut, au milieu et en bas : là où la porte ne s’écarte pas de son cadre se trouve un point de verrouillage.</p>', src: INCE_1_HAL + ', F8' }] },
    { id: 'verrouillages', t: 'Plusieurs points de verrouillage, verrous', ic: 'grid', src: INCE_1_HAL + ', F9-F10',
      html: '<ul class="check"><li><b>Plusieurs points de verrouillage</b> (porte tirante ou poussante) : répéter les <b>3 phases</b> du forcement pour chaque point.</li><li>Deux points <b>rapprochés (environ 50 cm maximum)</b> : travailler <b>entre les deux</b> pour les forcer simultanément.</li><li><b>Verrou</b> : positionner le Halligan, <b>pointeau sur la partie creuse de la serrure</b> ; <b>une frappe sur ordre</b> ; le verrou est éjecté par l’intérieur.</li></ul>' +
        '<p><b>Échec sur porte poussante</b> : si le point de verrouillage n’a pas lâché, caler l’espace créé avec la hache à tête plate, réinsérer l’herminette et forcer de nouveau.</p>',
      figs: [{ img: 'img/ince-1/forcement-verrouillages.jpg', cap: 'Plusieurs points de verrouillage', txt: '<p>Porte métallique à trois points : on répète écarter-engager-forcer à chaque point. Serrure multipoints : les points rapprochés (50 cm maximum) se forcent ensemble en travaillant entre les deux.</p>', src: INCE_1_HAL + ', F9' }] },
    { id: 'configurations', t: 'Portes difficiles : retrait, couloir, renforts', ic: 'alert', src: INCE_1_HAL + ', F11-F13',
      html: '<div class="tw"><table><thead><tr><th>Situation</th><th>Solution de la fiche</th></tr></thead><tbody>' +
        '<tr><td>Porte <b>encastrée ou en retrait</b></td><td>Faire un <b>trou dans le mur</b> pour guider l’herminette dans l’arrêt de porte et lui donner l’espace pour s’éloigner de la porte.</td></tr>' +
        '<tr><td>Porte dans un <b>couloir étroit</b></td><td>Peu de place pour manier la hache : faire glisser la tête de la hache le long du Halligan et <b>frapper l’épaulement de la fourche</b> (il doit être bien carré) ; placer le biseau sur le cadre peut faciliter l’entrée et donner un meilleur angle.</td></tr>' +
        '<tr><td>Porte avec <b>cornière de renfort</b> (fer plat ou blindée, boulonnée, partielle ou sur toute la longueur)</td><td>Fourche entre le renfort et le cadre, Halligan perpendiculaire à la porte ; verrouiller le bout de la fourche dans le butoir et pousser fermement pour <b>écarter</b> ; repositionner et guider pour <b>engager</b> ; prendre appui sur la cornière pour <b>forcer</b>.</td></tr>' +
        '<tr><td>Variante : renfort vissé dans le cadre</td><td>Guider l’extrémité de la fourche entre renfort et cadre jusqu’à toucher la porte ; pousser l’outil vers la porte pour faire sauter ou tordre le renfort ; engager puis forcer.</td></tr>' +
        '</tbody></table></div>' },
    { id: 'autres-outils', t: 'Savoir changer d’outil', ic: 'bolt', src: INCE_1_HAL + ', F15',
      html: '<p>Si le Halligan ne peut pas être utilisé (portes blindées…), d’autres outils du FPT le complètent « pour une gestion rationnelle et pragmatique du forcement » :</p>' +
        '<div class="tw"><table><thead><tr><th>Outil</th><th>Emploi</th></tr></thead><tbody>' +
        '<tr><td>Ouvre-porte hydraulique à main</td><td>Uniquement sur porte <b>poussante en métal</b>, bâti métal de préférence ; mâchoire insérée entre porte et bâti puis écartée « en pompant ».</td></tr>' +
        '<tr><td>Découpeuse thermique</td><td>Rideaux et portes métalliques, portes de garage, grilles de sécurité, béton…</td></tr>' +
        '<tr><td>Écarteur électrique</td><td>Force d’écartement d’environ <b>3 tonnes</b> ; disponible dans les FPT.</td></tr>' +
        '<tr><td>O.F.D.</td><td>Outils de forcement légers, <b>à l’usage des chefs d’agrès</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout ok">Rôle du chef d’équipe : constater que la méthode ne marche pas, <b>arrêter</b> plutôt que s’acharner, et <b>rendre compte</b> au chef d’agrès en demandant l’outil adapté (« je demande »).</div>' },
    { id: 'usages', t: 'Le Halligan au service du chef d’équipe', ic: 'hand', src: INCE_1_HAL + ', F16 à F22',
      html: '<ul class="check"><li><b>Casser un cadenas</b> : en binôme, pointeau dans l’anse, frapper en levant le manche ; seul, anse dans la fourche incurvée, vriller et faire levier.</li><li><b>Marchepied</b> : positionner, pointer le sol au pointeau pour éviter le glissement, replacer bien calé, monter ; astuce : une commande fixée sur l’outil permet de le récupérer.</li><li><b>Calage</b> : caler une échelle, du matériel, une porte ; se caler sur un toit ; <b>tester un plancher ou un toit</b>.</li><li><b>Levage, déblai, bris</b> : lève-plaque, lever un portail ou une poutre, arracher planches et coffrages, briser une vitre.</li><li><b>Reconnaissance</b> : augmenter son rayon de recherche ; créer une <b>zone de survie</b> ou un <b>itinéraire de secours</b> (fracturer un ouvrant, ouvrir une cloison mince).</li><li><b>Tôle</b> : percer pour dégager des rivets, créer un point d’amorce pour un écarteur hydraulique.</li><li><b>Feu de VL</b> : pointer à l’angle avant du capot ou au-dessus des passages de roue, soulever la tôle en faisant levier, <b>insérer la LDV</b> dans le compartiment moteur.</li></ul>' }
  ],
  key: ['Le chef tient le Halligan et commande ; l’équipier frappe.', 'Ordres forts et clairs : « FRAPPE » = une frappe ; « STOP » ou main levée.', 'Le chef se place pour voir sa zone de travail.', 'Sur incendie : LDV en eau prête si la situation le nécessite.', 'Porte poussante : tester en haut, au milieu, en bas ; contrôler l’ouverture soudaine.', 'Points rapprochés (≈ 50 cm max) : travailler entre les deux.', 'Halligan inefficace : ouvre-porte hydraulique, découpeuse, écarteur électrique (≈ 3 t) ; rendre compte.'],
  traps: ['Laisser l’équipier frapper en continu : chaque frappe est commandée.', 'Ouvrir brutalement une porte poussante sur un feu sans la retenir ni avoir la LDV prête.', 'S’acharner sur une porte blindée au lieu de demander un autre outil.'],
  quiz: [
    { q: 'Dans le binôme de forcement, le rôle du chef d’équipe est de :', c: ['Manœuvrer le Halligan et diriger par des ordres forts et clairs', 'Frapper avec la masse', 'Éclairer la zone de travail', 'Tenir la LDV pendant que l’équipier force'], e: 'Fiche F5 : le chef manœuvre le Halligan et dirige le forcement.', s: 'commander' },
    { q: 'L’ordre « STOP » (ou main levée) sert à :', c: ['Interrompre les frappes pour replacer l’outil ou passer à l’étape suivante', 'Demander une frappe plus forte', 'Signaler la fin de l’intervention', 'Demander le changement de rôle'], e: 'Fiche F5.', s: 'commander' },
    { q: 'Comment déterminer le nombre de points de verrouillage d’une porte poussante ?', c: ['Pousser ou frapper en haut, au milieu et en bas et observer l’écartement', 'Compter les serrures visibles seulement', 'Demander au voisin', 'Forcer au milieu et voir'], e: 'Fiche F8, phase « TESTER ».', s: 'diagnostic' },
    { q: 'Porte dans un couloir étroit où la hache ne peut pas être maniée :', c: ['Glisser la tête de hache le long du Halligan et frapper l’épaulement de la fourche', 'Renoncer au forcement', 'Frapper directement la serrure à la main', 'Utiliser le pointeau comme levier sur le mur'], e: 'Fiche F11.', s: 'configurations' },
    { q: 'L’ouvre-porte hydraulique à main s’utilise :', c: ['Uniquement sur porte poussante en métal, bâti métal de préférence', 'Sur toutes les portes', 'Sur les portes tirantes en bois', 'Sur les rideaux métalliques'], e: 'Fiche F15.', s: 'autres-outils' },
    { q: 'Sur un incendie, que doit-on avoir prêt pendant un forcement si la situation le nécessite ?', c: ['Une LDV en eau', 'Une deuxième masse', 'Un explosimètre', 'Un brancard'], e: 'Fiche F5 : protection du personnel et contrôles (température de la porte, fumées).', s: 'commander' },
    { q: 'Un verrou se force :', c: ['Pointeau sur la partie creuse de la serrure, une frappe sur ordre', 'Par trois frappes rapides sur la poignée', 'Avec la fourche dans le trou de serrure', 'Par traction sur la poignée'], e: 'Fiche F10 : le verrou est éjecté par l’intérieur.', s: 'verrouillages' }
  ]
});

/* =====================================================================================
   CE INC 2 — CHAPITRE 10 : lecture du feu et TOOTEM (partie C)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-lecture-feu', part: 'ince', seq: INCE_1_SEQ2,
  title: 'Lire le feu et pénétrer dans un volume : FFCOS, fumées, TOOTEM', short: 'Lecture du feu, TOOTEM', motif: 'eye',
  sources: [INCE_1_LIV + ', Partie 2 § 2.1 (p. 14-18)', INCE_1_GDO + ', Section III « Analyse de risques », § 1-2 (p. 34-35)', 'Fiche séquence « Lecture du feu » (CE INC, partie C, séquence 1)', INCE_1_FTC + ' (activités démonstrative et applicative)', 'Grille d’observation « T.O.O.T.EM » (CE INC, partie C, séquence 1)'],
  summary: 'Ce que je vois, ressens et entends dit où en est le feu : FFCOS, dangers des fumées, puis la méthode TOOTEM pour franchir une porte.',
  why: '<b>Pourquoi lire le feu ?</b> Le livret CE : « tous les facteurs que je vois, que je ressens, que j’entends vont permettre de savoir où le feu se situe dans sa courbe de développement » ; à chaque avancée dans la courbe correspondent des actions, et <b>une mauvaise lecture du feu induira forcément de mauvaises actions</b>. Derrière une porte fermée, l’erreur se paie par un backdraft ou un flashover : d’où une méthode, le TOOTEM, qui oblige à observer avant d’ouvrir et à tester avant d’avancer.',
  sections: [
    { id: 'ffcos', t: 'FFCOS : les cinq familles d’indices', ic: 'list', src: INCE_1_LIV + ', p. 16-17 ; ' + INCE_1_GDO + ', p. 34-35',
      html: '<p>Le livret propose des moyens mnémotechniques pour lire complètement le feu, puis les fumées, « afin de ne pas passer à côté d’un danger ». Il renvoie au GDO (p. 34-35), dont voici les indicateurs :</p>' +
        '<div class="tw"><table><thead><tr><th>FFCOS</th><th>Ce que le GDO demande d’analyser</th></tr></thead><tbody>' +
        '<tr><td><b>F</b>umées</td><td>Un des indicateurs les plus importants, avec leur mode de circulation : emplacement et apparence renseignent sur l’emplacement du feu, son régime (FLC ou FLV) et son stade. À l’arrivée : <b>débit, couleur, vélocité, sens de tirage</b>…</td></tr>' +
        '<tr><td><b>F</b>lammes</td><td>Souvent l’indicateur le plus évident : <b>volume</b> (aire et taille), <b>emplacement</b>, <b>couleur</b>, <b>potentiel fumigène</b>, <b>vélocité</b>.</td></tr>' +
        '<tr><td><b>C</b>haleur</td><td>Non visible à l’œil nu, on observe ses effets : vélocité des fumées, <b>dégradation des matériaux</b> (déformation…), présence de <b>pyrolyse</b>, <b>ressenti des équipes</b>. La caméra thermique peut compléter.</td></tr>' +
        '<tr><td><b>O</b>uvertures</td><td>Conditions aérauliques : <b>vent</b>, <b>ouvrants existants ouverts ou fermés</b> (le GDO parle de « conditions de ventilation »).</td></tr>' +
        '<tr><td><b>S</b>ons</td><td>Nature des matériaux qui brûlent (crépitement ou sifflement du bois, bouillonnement de liquides) ; les sons sont <b>assourdis</b> dans les atmosphères <b>chaudes et sous-ventilées</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Le GDO y associe la <b>lecture du bâtiment</b> (activité, occupants, mode constructif, matériaux, volumes à risque, ouvrants…). L’évaluation se fait à l’arrivée, puis <b>tout au long de l’opération grâce à l’observation et aux comptes rendus des équipes</b> : c’est le rôle du chef d’équipe.</p>' },
    { id: 'fumees', t: 'Lire les fumées : COMIX et ITORE', ic: 'skull', src: INCE_1_LIV + ', p. 17-18',
      html: '<p>Le livret s’attarde sur les <b>fumées</b> : « une lecture des fumées s’avère indispensable ». Deux moyens mnémotechniques :</p>' +
        '<div class="tw"><table><thead><tr><th>COMIX</th><th>Livret CE</th></tr></thead><tbody>' +
        '<tr><td><b>C</b>haudes</td><td>Elles viennent du feu et propagent la chaleur.</td></tr>' +
        '<tr><td><b>O</b>paques</td><td>Elles gênent la vue mais aussi l’ouïe : suies et aérosols font écran.</td></tr>' +
        '<tr><td><b>M</b>obiles</td><td>Elles se déplacent et cherchent la moindre ouverture pour s’échapper.</td></tr>' +
        '<tr><td><b>I</b>nflammables</td><td>Composées d’<b>environ 300 gaz différents</b>, chacun avec sa réaction propre à la chaleur.</td></tr>' +
        '<tr><td>to<b>X</b>iques</td><td>CO, CO<sub>2</sub>, HCl… et un faible taux d’oxygène.</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>« Ou encore » ITORE</b> : <b>I</b>nflammable, <b>T</b>oxique, <b>O</b>paque, <b>R</b>ayonnante (la fumée, chaude, rayonne à son tour : fort vecteur de propagation), <b>E</b>nvahissante.</p>' +
        '<p class="small muted">Le livret donne pour « Envahissante » une définition qui reprend celle de la toxicité (erreur de recopie probable) ; le sens attendu est celui de « Mobile » dans COMIX.</p>' },
    { id: 'sequence', t: 'La séquence « lecture du feu »', ic: 'clock', src: 'Fiche séquence « Lecture du feu » ; ' + INCE_1_FTC,
      html: '<p><b>Objectif</b> : en binôme, <b>appliquer les différentes étapes du TOOTEM lors de la pénétration dans un volume en feu</b>, en respectant les consignes de sécurité. Séquence d’1 h (découverte « autour du mot flash-over », démonstration lettre par lettre, application).</p>' +
        '<div class="tw"><table><tbody><tr><th>Matériel</th><td>1 FPT, DMRS (1 ou 2), 4 tuyaux de 45/20 m, 1 division mixte, 1 tuyau de 70/20 m</td></tr><tr><th>Lieu</th><td>Terrain de manœuvre avec <b>porte donnant sur un volume</b></td></tr></tbody></table></div>' +
        '<p class="small muted">Durées : la fiche séquence prévoit 40 min d’application ; la fiche de tâche applicative indique 2 h 20.</p>' },
    { id: 'tootem', t: 'TOOTEM, lettre par lettre', ic: 'play', src: INCE_1_FTC,
      steps: ['Avant d’entrer : prendre la lance avec un équipier, régler le jet en diffusé d’attaque entre 15° et 45°, se mettre à genoux pour progresser.', 'T — TESTER la porte : la toucher avec le jet de la lance et avec le gant ; observer la vaporisation de l’eau et si la porte se dégrade sous l’effet de la chaleur, pour estimer la chaleur radiante.', 'O — OBSERVER : relever (et dire) tous les signes d’alarme pouvant annoncer une explosion de fumée ou un embrasement généralisé éclair.', 'O — OUVRIR le volume, seulement si les conclusions des deux étapes précédentes l’autorisent, en veillant à se protéger.', 'T — TESTER la température des fumées : test du plafond, tuyau bien coudé à 90° par rapport au sol. Si l’eau ne retombe pas : inertage (ouverture de la lance 2 s) pour refroidir la couche de fumée.', 'EM — ENGAGEMENT MINIMAL des personnels d’attaque (si l’eau est retombée), par étapes de 1 à 2 mètres avant un nouveau test.'],
      stepsTitle: 'T.O.O.T.EM',
      after: '<div class="callout warn"><b>Pourquoi cet ordre ?</b> Chaque lettre conditionne la suivante : on n’ouvre que si la porte et les signes l’autorisent ; on n’avance que si le plafond l’autorise ; et on ne s’engage que du <b>minimum</b> nécessaire, par bonds de 1 à 2 m, pour retester aussitôt.</div>' },
    { id: 'signes', t: 'Les signes d’alarme à rechercher', ic: 'alert', src: INCE_1_FTC + ' ; ' + INCE_1_GDO + ', p. 34-35 ; ' + INCE_1_LIV + ', p. 17',
      html: '<p>La fiche de tâche demande d’« observer tous les signes d’alarme significatifs pouvant annoncer une explosion de fumée ou un embrasement généralisé éclair », sans en dresser la liste. On les cherche dans les cinq familles du FFCOS :</p>' +
        '<ul class="check"><li><b>Porte</b> : l’eau projetée se vaporise, la porte se dégrade sous la chaleur.</li><li><b>Fumées</b> : débit, couleur, vélocité, sens de tirage ; fumées qui sortent par les interstices.</li><li><b>Chaleur</b> : dégradation des matériaux, pyrolyse, chaleur ressentie.</li><li><b>Sons</b> : assourdis dans une atmosphère chaude et sous-ventilée.</li><li><b>Ouvertures</b> : volume fermé (sous-ventilé) ou ouvrants ouverts, vent.</li></ul>' +
        '<p class="small muted">Les indices détaillés du flashover et du backdraft (suies, plafond de fumée qui descend, etc.) sont traités au niveau Équipier incendie (phénomènes thermiques).</p>' },
    { id: 'grille', t: 'Ce que l’évaluateur observe', ic: 'check', src: 'Grille d’observation « T.O.O.T.EM », CE, partie C, séquence 1',
      html: '<div class="tw"><table><thead><tr><th>Savoir-faire (critères objectifs)</th><th>Savoir-être (critères subjectifs)</th></tr></thead><tbody><tr><td><ul class="check"><li>EPI complet (sinon, <b>arrêt de la manœuvre</b>)</li><li>Règle son jet en diffusé d’attaque <b>avant d’entrer</b></li><li>Teste la porte</li><li>Observe les signes</li><li>Ouvre la porte</li><li>Teste son plafond</li><li>Engagement minimum</li></ul></td><td><ul class="check"><li>Fluidité des gestes</li><li>Manipule la lance avec soin</li><li><b>Contrôle ses actions</b> (notion des risques)</li><li><b>Respecte la chronologie</b> du T.O.O.T.EM</li><li>Adapte son comportement à la situation</li><li>Respecte les règles de sécurité</li><li><b>Prévient le chef de toutes anomalies</b></li></ul></td></tr></tbody></table></div>' +
        '<div class="callout warn">1 item « non fait » ou 2 cases « C » = <b>manœuvre à refaire</b> (A = bien, B = moyen, C = insuffisant).</div>' }
  ],
  key: ['Une mauvaise lecture du feu induit forcément de mauvaises actions.', 'FFCOS : Fumées, Flammes, Chaleur, Ouvertures, Sons.', 'Fumées : COMIX (Chaudes, Opaques, Mobiles, Inflammables, toXiques) ou ITORE.', 'Fumées inflammables : environ 300 gaz différents.', 'TOOTEM : Tester la porte, Observer, Ouvrir, Tester le plafond, Engagement Minimal.', 'Jet en diffusé d’attaque 15-45° réglé AVANT d’entrer ; progression à genoux.', 'Eau qui ne retombe pas → inertage 2 s ; progression par étapes de 1 à 2 m.'],
  traps: ['Ouvrir la porte avant de l’avoir testée et d’avoir observé les signes.', 'Ne pas respecter la chronologie du TOOTEM : elle est un critère d’évaluation.', 'S’engager « en grand » après un test favorable : l’engagement reste minimal, par bonds de 1 à 2 m.', 'Garder pour soi une anomalie : prévenir le chef fait partie de la grille.'],
  quiz: [
    { q: 'Que signifie FFCOS ?', c: ['Fumées, Flammes, Chaleur, Ouvertures, Sons', 'Feu, Fumée, Combustible, Oxygène, Source', 'Flammes, Fumées, Couleur, Odeur, Suies', 'Fumées, Foyer, Chaleur, Oxygène, Structure'], e: 'Livret CE p. 17.', s: 'ffcos' },
    { q: 'Que signifient les lettres de TOOTEM ?', c: ['Tester la porte, Observer, Ouvrir, Tester le plafond, Engagement Minimal', 'Toucher, Ouvrir, Observer, Tirer, Éteindre, Mouiller', 'Tester, Ouvrir, Occuper, Traiter, Évacuer, Marquer', 'Température, Oxygène, Opacité, Toxicité, Explosivité, Mobilité'], e: 'Fiches de tâche partie C.', s: 'tootem' },
    { q: 'Comment teste-t-on la porte dans le TOOTEM ?', c: ['Avec le jet de la lance et avec le gant, en observant la vaporisation et la dégradation', 'En l’ouvrant légèrement', 'En frappant avec le Halligan', 'Avec la caméra thermique uniquement'], e: 'Fiche de tâche : toucher la porte avec le jet et le gant pour estimer la chaleur radiante.', s: 'tootem' },
    { q: 'Après le test du plafond, l’eau est retombée. Que fait le binôme ?', c: ['Un engagement minimal, par étapes de 1 à 2 m avant un nouveau test', 'Un inertage de 2 s', 'Il ressort', 'Il progresse jusqu’au foyer sans s’arrêter'], e: 'L’eau retombée indique des fumées qui ne la vaporisent pas : engagement minimal, puis nouveau test.', s: 'tootem' },
    { q: 'Les sons assourdis indiquent selon le GDO une atmosphère :', c: ['Chaude et sous-ventilée', 'Froide et bien ventilée', 'Sans fumée', 'Riche en oxygène'], e: 'GDO p. 35.', s: 'ffcos' },
    { q: 'D’après le livret CE, combien de gaz différents composent environ les fumées ?', c: ['300', '30', '3 000', '3'], e: 'Livret p. 17 : environ 300 gaz différents, chacun avec sa réaction à la chaleur.', s: 'fumees' },
    { q: 'Quand règle-t-on le jet en diffusé d’attaque dans le TOOTEM ?', c: ['Avant d’entrer, avant même de tester la porte', 'Après l’ouverture de la porte', 'Uniquement pour l’inertage', 'Au moment de l’engagement'], e: 'Fiche de tâche et grille : « règle son jet en diffusé d’attaque avant d’entrer ».', s: 'grille' },
    { q: 'Pour la chaleur, invisible à l’œil nu, le GDO conseille d’observer :', c: ['La vélocité des fumées, la dégradation des matériaux, la pyrolyse, le ressenti des équipes', 'Uniquement la couleur des flammes', 'La couleur du ciel', 'La pression de la pompe'], e: 'GDO § 2.5, p. 35.', s: 'ffcos' }
  ]
});

/* =====================================================================================
   L’ESSENTIEL
   ===================================================================================== */
VSAV.ess([
  { t: 'Chef d’équipe INC — commandement et lances', ic: 'star', items: [
    { k: 'Principes du commandement', v: 'ordres au <b>seul subordonné direct</b> ; compte rendu au <b>chef d’agrès</b>', go: 'ince-fonction/principes' },
    { k: 'Détourner sa mission', v: 'seulement en <b>urgence absolue</b>', go: 'ince-responsabilites/obligations' },
    { k: 'Ordre reçu', v: 'répercuté à l’équipier, <b>jamais interprété</b> (sauf urgence ou situation modifiée)', go: 'ince-responsabilites/ordres' },
    { k: 'Détachement de surveillance', v: 'jusqu’à <b>4 sapeurs</b>', go: 'ince-mgo/surveillance' },
    { k: 'Compte rendu', v: '<b>Je suis, je vois, je fais, je demande</b> — clair, précis, concis', go: 'ince-compte-rendu/structure' },
    { k: 'Orifices traditionnelles', v: 'LDT <b>7</b> · PL <b>14</b> · GL <b>18</b> · LGP <b>25 mm</b>', go: 'ince-lances/traditionnelles' },
    { k: 'Diffusé d’attaque', v: '<b>15 à 45°</b> ; <b>30° mini</b> si risque électrique', go: 'ince-jets/jets' },
    { k: 'Test du plafond', v: 'tuyau coudé à <b>90°</b> ; eau non retombée → inertage <b>2 s</b>', go: 'ince-gestes-lance/gestes' },
    { k: 'Forcement', v: '« FRAPPE » = <b>une</b> frappe ; points à <b>≈ 50 cm</b> : entre les deux', go: 'ince-forcement/commander' },
    { k: 'FFCOS', v: 'Fumées, Flammes, Chaleur, Ouvertures, Sons', go: 'ince-lecture-feu/ffcos' },
    { k: 'TOOTEM', v: 'Tester porte, Observer, Ouvrir, Tester plafond, Engagement Minimal (<b>1 à 2 m</b>)', go: 'ince-lecture-feu/tootem' }
  ] }
]);
