/* CHEF D’ÉQUIPE INCENDIE — fichier 1 : CE 1 (Commandement et rôle du chef d’équipe)
   Sources : Livret stagiaire Chef d’équipe incendie SDIS 51 (v2019.1), Partie 1 « Déroulement d’une intervention » (p. 5-12) ;
   Fiche individuelle de pré-stage CE INC (SDIS 51) ;
   GDO Incendies de structures (2018), chapitre 3, section III (MGO : § 1 reconnaissances p. 69, § 11 PTI p. 83). */
var CE1 = 'CE 1 — Commandement et rôle du chef d’équipe';
var LIVCE = 'Livret stagiaire Chef d’équipe incendie SDIS 51 (v2019.1)';
var GDOCE = 'GDO Incendies de structures (2018)';
var FICHECE = 'Fiche individuelle de pré-stage CE INC (SDIS 51)';

/* =====================================================================================
   CHAPITRE 1 — LE CHEF D’ÉQUIPE DANS LA CHAÎNE DE COMMANDEMENT
   ===================================================================================== */

VSAV.chap({
  id: 'ce-role', part: 'ce', seq: CE1,
  title: 'Le chef d’équipe dans la chaîne de commandement', short: 'Rôle du chef d’équipe', motif: 'team',
  sources: [LIVCE + ', § 1.1 (p. 6-7) et § 1.2 § 1 (p. 8-9)', FICHECE],
  summary: 'Placé sous les ordres du chef d’agrès, le chef d’équipe dirige son équipier : premier maillon de la chaîne de commandement, il est responsable de sa mission et de son binôme.',
  why: '<b>Pourquoi le chef d’équipe est-il si important alors qu’il ne commande qu’un seul équipier ?</b> Parce qu’il est le <b>premier maillon</b> de la chaîne de commandement : c’est sur lui que repose le succès des ordres, quel que soit le niveau qui les a donnés. Le livret prend l’exemple d’une longue reconnaissance sous ARI dans un sous-sol complexe : le COS va décider de toute sa manœuvre à partir des comptes rendus des chefs d’équipe. Une mauvaise évaluation ou une erreur de local reconnu peut compromettre le succès final <b>et la sécurité des binômes engagés ensuite</b>. Passer d’équipier à chef d’équipe, c’est passer de « j’exécute » à « je dirige, je contrôle et je rends compte ».',
  sections: [
    { id: 'objectifs', t: 'Objectifs du module chef d’équipe', ic: 'target', src: LIVCE + ', § 1.1 (p. 6)',
      html: '<div class="tw"><table><thead><tr><th>Domaine</th><th>Ce que l’apprenant doit acquérir</th></tr></thead><tbody>' +
        '<tr><td><b>Savoir</b></td><td>Connaître le feu et son comportement, le matériel et les techniques de lutte contre l’incendie.</td></tr>' +
        '<tr><td><b>Savoir-faire</b></td><td><b>Diriger une équipe incendie</b> en opération.</td></tr>' +
        '<tr><td><b>Savoir-être</b></td><td>Adopter une <b>attitude responsable</b> vis-à-vis de son équipe et <b>s’adapter</b> à l’évolution de la situation.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout ok">« Placé sous les ordres du <b>chef d’agrès</b>, le chef d’équipe de sapeur-pompier <b>dirige son équipier</b> et <b>coordonne l’action de son équipe</b> lors des opérations de secours. »</div>' +
        '<p class="small muted">Comparer avec l’équipier (<a href="#/c/inc-hierarchie">Se situer au sein d’un système hiérarchisé</a>) : le savoir est identique, mais le savoir-faire passe de « mettre en œuvre le matériel » à « diriger une équipe », et le savoir-être de « exécuter conformément aux ordres » à « attitude responsable et adaptation ».</p>' },
    { id: 'competences', t: 'Les 4 activités / compétences du CE INC', ic: 'list', src: LIVCE + ', § 1.1 (p. 7)',
      html: '<ol>' +
        '<li><b>S’intégrer dans une chaîne de commandement en qualité de chef d’équipe</b> : rôle et responsabilités du chef d’équipe, organisation de la chaîne de commandement, principes du commandement opérationnel, compte rendu, bases du commandement opérationnel.</li>' +
        '<li><b>Adapter l’action du binôme aux contraintes de l’environnement et aux risques</b> : premières mesures conservatoires, notions de prévention appliquée à l’opération, préservation des traces et indices, techniques professionnelles de sauvetage et d’extinction.</li>' +
        '<li><b>Appliquer et faire appliquer les règles de sécurité au sein de l’équipe</b> : équipements de protection individuelle, moyens de protection.</li>' +
        '<li><b>Manager une équipe opérationnelle</b> : communication opérationnelle, dynamique de groupe, prise de décision.</li>' +
        '</ol><p class="small muted">Cette séquence couvre surtout la compétence 1 (commandement, compte rendu) ; les autres sont traitées dans les séquences suivantes de la partie chef d’équipe.</p>' },
    { id: 'prestage', t: 'Prérequis : la fiche individuelle de pré-stage', ic: 'check', src: FICHECE,
      html: '<p>Avant le stage (étape <b>obligatoire</b> du parcours), le stagiaire travaille en auto-formation les documents numériques du centre de formation départemental. Les <b>savoirs</b> sont validés par une <b>évaluation diagnostique</b> en présentiel ; les <b>savoir-faire</b> par des mises en situation professionnelles et des ateliers de pédagogie personnalisée. Chaque thème est vu en CIS avec un référent (date et nom).</p>' +
        '<div class="tw"><table><thead><tr><th>Thème</th><th>Savoir-faire à maîtriser avant le stage</th></tr></thead><tbody>' +
        '<tr><td rowspan="3"><b>Les matériels</b></td><td><b>LDJR</b> (lance à débit et jet réglables) : maîtriser les différents jets et débits.</td></tr>' +
        '<tr><td><b>Échelles</b> : connaître les capacités d’utilisation des échelles à coulisse et à crochet ; maîtriser l’échelle à coulisse 2 plans et l’échelle à crochet.</td></tr>' +
        '<tr><td><b>ARI</b> : connaître ses éléments ; savoir présenter le matériel de longue reconnaissance ; maîtriser l’ARI (capelé) et ses accessoires.</td></tr>' +
        '<tr><td><b>Les manœuvres</b></td><td>Maîtriser les manœuvres ETB et les manœuvres LSPCC.</td></tr>' +
        '<tr><td><b>Contrôle et reconditionnement</b></td><td>Savoir contrôler, nettoyer et reconditionner son ARI et le LSPCC.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn">Le stagiaire se présente le <b>1er jour</b> de sa formation avec cette fiche <b>complétée et signée par son chef de centre</b> (ou son représentant).</div>' },
    { id: 'principes', t: 'Les principes du commandement opérationnel', ic: 'team', src: LIVCE + ', § 1.2, § 1 (p. 8)',
      steps: ['Le chef d’équipe dirige son binôme (le chef d’équipe et son équipier).', 'Le chef d’équipe ne donne des ordres qu’à son subordonné direct.', 'Le chef d’équipe rend compte à son supérieur direct : le chef d’agrès.', 'Le chef d’équipe contrôle les actions de son subordonné direct, notamment le respect des mesures de sécurité.'], stepsTitle: 'Les 4 principes de base (4)',
      after: '<p>But essentiel de ce principe d’encadrement : <b>garantir le succès d’une intervention avec la plus grande sécurité possible</b>. Il évite toute confusion dans les ordres donnés et dans les comptes rendus, et facilite le contrôle des actions menées (personnels, missions, moyens), selon un niveau de compétence défini et garanti.</p>' },
    { id: 'chaine', t: 'Le premier maillon de la chaîne', ic: 'list', src: LIVCE + ', § 1.1 (p. 6) et § 1.2, § 1 (p. 8)',
      html: '<p>L’organisation opérationnelle repose sur le bon fonctionnement de la chaîne de commandement. Le chef d’équipe en est le <b>premier maillon</b> : c’est sur lui que repose le succès des ordres donnés, quel que soit le niveau de la chaîne.</p>' +
        '<div class="tw"><table><thead><tr><th>Dénomination</th><th>Grade minimum</th><th>Commande</th></tr></thead><tbody>' +
        '<tr><td>Chef d’agrès tout engin</td><td>Adjudant</td><td>1 engin</td></tr>' +
        '<tr><td>Chef d’agrès engin à 1 équipe</td><td>Sergent</td><td>1 engin</td></tr>' +
        '<tr><td><b>Chef d’équipe</b></td><td><b>Caporal</b></td><td><b>1 binôme</b></td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">Extrait ; tableau complet (jusqu’au chef de site) : <a href="#/c/inc-hierarchie">Se situer au sein d’un système hiérarchisé</a>.</p>' +
        '<div class="callout ok">Le <b>supérieur direct</b> du chef d’équipe est le <b>chef d’agrès</b> : il reçoit de lui ses ordres et doit toujours lui rendre compte <b>en cours d’action et en fin de mission</b>.</div>' },
    { id: 'obligations', t: 'Rôle et obligations', ic: 'target', src: LIVCE + ', § 1.2, § 1 (p. 8-9)',
      html: '<p>Une fois ses ordres reçus, le chef d’équipe doit assurer le succès de sa mission <b>par tous les moyens mis à sa disposition</b>. Il doit pour cela faire preuve de :</p>' +
        '<ul class="check"><li><b>discipline</b> dans l’exécution ;</li><li><b>esprit de décision</b> face à la situation (difficultés non prévues, évolution de la situation, découverte d’une victime…) ;</li><li>respect parfait du <b>secteur</b> qui lui est attribué et des <b>points de passage obligés</b>.</li></ul>' +
        '<p>L’exécution parfaite de la mission doit être son <b>unique objectif</b> : il agit avec rigueur en toutes circonstances. Avant tout, il s’assure qu’il <b>dispose des moyens nécessaires</b> et demande à son chef d’agrès ceux qui lui manquent ou viendraient à lui manquer.</p>' +
        '<p>La réussite d’une opération résulte de la <b>coordination des actions de chaque binôme</b> (sauvetage, extinction, coupure des fluides, ouverture des ouvrants…), réalisées chronologiquement et au bon moment. Le chef d’équipe veille donc à <b>ne jamais interférer</b> sur les autres actions commandées et se concentre sur sa mission.</p>' +
        '<div class="callout warn">Seul un critère d’<b>urgence absolue</b> peut l’autoriser à détourner son binôme de sa mission : par exemple se porter au secours d’une personne en danger immédiat ou d’un binôme en difficulté.</div>' },
    { id: 'responsabilites', t: 'Les responsabilités du chef d’équipe', ic: 'shield', src: LIVCE + ', § 1.2, § 1 (p. 9)',
      html: '<p>Premier maillon de la chaîne, le chef d’équipe est <b>responsable de sa mission et de son binôme</b> : il dirige son équipe et est en cela responsable des résultats de son action. <b>« Être responsable, c’est diriger. »</b></p>' +
        '<ul class="check"><li>Il doit avoir une <b>parfaite maîtrise de la situation</b>, que seule sa <b>compétence</b> peut lui donner.</li><li>Il est en toute circonstance un <b>exemple</b> pour son équipier : rigueur, courage, courtoisie, probité…</li><li>Incendie, secours à personne, protection des biens ou de l’environnement : son action s’intègre à <b>chaque étape de la MGO</b> (voir chapitre suivant), avec une pleine conscience de ses responsabilités.</li></ul>' }
  ],
  key: ['Savoir-faire du CE : diriger une équipe incendie en opération ; savoir-être : attitude responsable et adaptation.', 'Le CE est placé sous les ordres du chef d’agrès, dirige son équipier et coordonne l’action de son équipe.', '4 principes : dirige son binôme, ordres au seul subordonné direct, rend compte au chef d’agrès, contrôle (notamment la sécurité).', 'Premier maillon de la chaîne de commandement : le succès des ordres repose sur lui.', 'Chef d’équipe : caporal, 1 binôme ; supérieur direct : chef d’agrès.', 'Rend compte en cours d’action ET en fin de mission.', 'Ne détourne son binôme de sa mission qu’en cas d’urgence absolue.', '« Être responsable, c’est diriger. »'],
  traps: ['Donner un ordre à un sapeur qui n’est pas son subordonné direct, ou en recevoir d’un autre que son chef d’agrès sans le signaler.', 'Interférer avec l’action d’un autre binôme « pour aider » : les actions sont coordonnées et chronologiques.', 'Partir en mission sans vérifier qu’on dispose des moyens nécessaires.', 'Croire que le chef d’équipe n’a qu’à exécuter : il dirige, contrôle et est responsable des résultats.'],
  quiz: [
    { q: 'Selon le livret CE, le savoir-faire visé par le module chef d’équipe est :', c: ['Diriger une équipe incendie en opération', 'Mettre en œuvre le matériel de lutte contre l’incendie', 'Commander un engin et son équipage', 'Rédiger le compte rendu de sortie de secours'], e: 'Livret CE § 1.1 (p. 6) : savoir-faire « Diriger une équipe incendie en opération ». « Mettre en œuvre le matériel » est le savoir-faire de l’équipier.', s: 'objectifs' },
    { q: 'Combien d’activités / compétences le livret attribue-t-il au CE INC ?', c: ['4', '8', '6', '11'], e: 'Livret CE § 1.1 (p. 7) : s’intégrer dans une chaîne de commandement, adapter l’action du binôme, appliquer et faire appliquer les règles de sécurité, manager une équipe. (L’équipier en a 8.)', s: 'competences' },
    { q: 'À qui le chef d’équipe donne-t-il des ordres ?', c: ['À son seul subordonné direct', 'À tout sapeur présent sur l’intervention', 'Aux équipiers des autres binômes de l’engin', 'Au conducteur de l’engin-pompe'], e: 'Livret CE § 1.2 § 1 (p. 8) : « le chef d’équipe ne donne des ordres qu’à son subordonné direct ».', s: 'principes' },
    { q: 'Quel est le but essentiel des principes du commandement opérationnel ?', c: ['Garantir le succès de l’intervention avec la plus grande sécurité possible', 'Réduire le nombre de comptes rendus', 'Permettre à chacun de choisir sa mission', 'Accélérer le retour au centre'], e: 'Livret CE p. 8 : ils évitent la confusion dans les ordres et comptes rendus et facilitent le contrôle des actions.', s: 'principes' },
    { q: 'Pourquoi le chef d’équipe est-il qualifié de « premier maillon » de la chaîne de commandement ?', c: ['Parce que le succès des ordres, quel que soit le niveau, repose sur lui et sur ses comptes rendus', 'Parce qu’il est le premier à arriver sur les lieux', 'Parce qu’il commande le premier engin', 'Parce qu’il est le plus ancien de l’équipage'], e: 'Livret CE p. 8 : exemple du COS qui décide de sa manœuvre à partir des comptes rendus des chefs d’équipe après une reconnaissance sous ARI.', s: 'chaine' },
    { q: 'Quand le chef d’équipe peut-il détourner son binôme de la mission reçue ?', c: ['Seulement en cas d’urgence absolue (personne en danger immédiat, binôme en difficulté)', 'Dès qu’il juge une autre action plus utile', 'Lorsqu’un autre binôme semble en retard', 'Jamais, même pour un binôme en difficulté'], e: 'Livret CE p. 9 : « Seul un critère d’urgence absolue peut l’autoriser à détourner son binôme de sa mission ».', s: 'obligations' },
    { q: 'Avant d’exécuter sa mission, le chef d’équipe doit avant tout :', c: ['S’assurer qu’il dispose des moyens nécessaires et demander au chef d’agrès ceux qui manquent', 'Attendre l’arrivée du chef de groupe', 'Effectuer une reconnaissance complète du bâtiment', 'Rédiger un compte rendu écrit'], e: 'Livret CE p. 8 : « le chef d’équipe doit avant tout s’assurer qu’il dispose des moyens nécessaires et demander à son chef d’agrès ceux qui lui manquent ».', s: 'obligations' },
    { q: 'Avec quel document le stagiaire CE INC doit-il se présenter le 1er jour du stage ?', c: ['La fiche individuelle de pré-stage complétée et signée par son chef de centre', 'Son livret d’équipier annoté', 'Une attestation de visite médicale', 'Le compte rendu de sa dernière intervention'], e: 'Fiche individuelle de pré-stage CE INC : document à présenter le 1er jour, complété et signé par le chef de centre ou son représentant.', s: 'prestage' }
  ]
});

/* =====================================================================================
   CHAPITRE 2 — LE CHEF D’ÉQUIPE À CHAQUE ÉTAPE DE LA MGO
   ===================================================================================== */

VSAV.chap({
  id: 'ce-mgo', part: 'ce', seq: CE1,
  title: 'Le chef d’équipe à chaque étape de la MGO', short: 'CE et MGO', motif: 'list',
  sources: [LIVCE + ', § 1.2, § 1 (p. 9-10)', GDOCE + ', chapitre 3, section III, § 1 (p. 69) et § 11 (p. 83)'],
  summary: 'Reconnaissance, sauvetage, établissement, attaque, protection, déblais, surveillance : ce que le chef d’équipe doit faire, faire faire et signaler à chaque critère de la MGO.',
  why: '<b>Pourquoi un chapitre MGO « côté chef d’équipe » ?</b> L’équipier connaît déjà les critères de la MGO. Le chef d’équipe, lui, doit savoir <b>ce qui relève de sa décision</b> (visiter un local en cas de péril, forcer une porte pour un sauvetage), <b>ce qu’il doit contrôler</b> chez son équipier (règles d’établissement, déblai propre et sûr) et <b>ce qu’il doit signaler</b> (refus des occupants, objet de valeur ou suspect, sauvetage en cours). C’est là que se jouent souvent les questions juridiques : propriété privée, objets de valeur, indices.',
  sections: [
    { id: 'rappel', t: 'Rappel : la MGO', ic: 'bulb', src: GDOCE + ', section III (p. 68)',
      html: '<p>La MGO n’est pas une chronologie : ce sont <b>onze critères de réflexion</b> qui se combinent selon la situation. Ils sont détaillés côté équipier :</p>' +
        '<ul class="check"><li><a href="#/c/inc-mgo">MGO (1) : principes, reconnaissances, ventilation, sauvetages</a></li><li><a href="#/c/inc-mgo-suite">MGO (2) : attaque, protection, déblai, surveillance, fin d’intervention</a></li></ul>' +
        '<p>Le livret CE précise, pour chaque étape, ce qu’on attend <b>en plus</b> du chef d’équipe. Son action s’y intègre « de manière particulière » et il doit y être « parfaitement conscient de ses responsabilités » (livret p. 9).</p>' },
    { id: 'reco', t: 'Reconnaissance', ic: 'eye', src: LIVCE + ', p. 9 ; ' + GDOCE + ', § 1 (p. 69)',
      html: '<p>Quel que soit le type d’intervention, le chef d’agrès peut confier au chef d’équipe <b>une ou des reconnaissances partielles</b>. Le chef d’équipe :</p>' +
        '<ul class="check"><li>est particulièrement attentif en visitant <b>tous les locaux</b> du secteur qui lui a été imparti ;</li><li>demande à son chef d’agrès tous les moyens nécessaires, notamment pour l’<b>ouverture des issues</b> nécessitant une <b>manœuvre de force</b>.</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Situation</th><th>Conduite du chef d’équipe</th></tr></thead><tbody>' +
        '<tr><td>Principe</td><td>La <b>propriété privée est inviolable</b>, protégée par la loi.</td></tr>' +
        '<tr><td>En cas de <b>péril</b></td><td>Il a le droit de visiter appartements, caves, greniers, ateliers… <b>à son initiative</b>.</td></tr>' +
        '<tr><td><b>Refus des occupants</b></td><td>Il en <b>rend compte immédiatement</b>.</td></tr>' +
        '<tr><td><b>Pas d’urgence</b></td><td>Il demande <b>impérativement</b> à son chef d’agrès l’assistance de la <b>police ou de la gendarmerie</b> et <b>attend leur arrivée</b> avant de pénétrer dans les locaux.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout ok">GDO § 1 : la prise d’information doit être <b>permanente</b> tout au long de l’intervention, pour tous les acteurs, et faire l’objet d’un <b>compte rendu systématique vers son supérieur</b>.</div>' +
        '<p class="small muted">Le rôle du chef d’équipe pendant la reconnaissance (Partie 4 du livret) est détaillé dans une séquence ultérieure.</p>' },
    { id: 'sauvetage', t: 'Sauvetage', ic: 'shield', src: LIVCE + ', p. 9',
      html: '<p>Les sauvetages sont <b>ordonnés par le chef d’agrès</b>. Toutefois, le chef d’équipe doit faire preuve d’<b>initiative</b> si, à un quelconque moment de l’intervention, un sauvetage à faire se présente à lui. Il :</p>' +
        '<ul class="check"><li>garde toujours à l’esprit la <b>sécurité de son équipier</b> ;</li><li><b>rend compte immédiatement</b> d’une opération de sauvetage en cours ou terminée.</li></ul>' +
        '<div class="callout warn">Si, pour un sauvetage, il doit traverser un appartement ou un local et que les occupants s’y opposent, le chef d’équipe a <b>le droit et le devoir</b> d’y pénétrer malgré tout, <b>de force si nécessaire</b>.</div>' },
    { id: 'etab-attaque', t: 'Établissement et attaque', ic: 'flame', src: LIVCE + ', p. 10',
      html: '<div class="tw"><table><thead><tr><th>Étape</th><th>Ce que fait le chef d’équipe</th></tr></thead><tbody>' +
        '<tr><td><b>Établissement</b></td><td>S’assure que son équipier <b>exécute correctement la manœuvre</b> et se conforme aux <b>règles d’établissement des tuyaux</b>.</td></tr>' +
        '<tr><td><b>Attaque</b></td><td>Phase <b>dangereuse</b>, notamment lors de la progression à l’intérieur des locaux en feu : il veille tout particulièrement à <b>ne pas prendre de risques inutiles ni à en faire courir à son équipier</b>, et <b>rend compte en permanence</b> à son chef d’agrès de l’évolution de la situation.</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">Techniques correspondantes côté équipier : <a href="#/c/inc-etablissements">établissements</a>, <a href="#/c/inc-binome-attaque">binôme d’attaque</a>.</p>' },
    { id: 'protection', t: 'Protection', ic: 'shield', src: LIVCE + ', p. 10',
      html: '<p>La protection peut atténuer très sensiblement les conséquences d’un sinistre. Le chef d’équipe prend les dispositions nécessaires pour qu’<b>aucun objet de valeur</b> (bijoux, argent, toiles, argenterie…) <b>ne reste dans les lieux</b>.</p>' +
        '<div class="callout ok">Les objets de valeur sont remis, le cas échéant, au <b>chef d’agrès</b> ou, éventuellement, <b>directement à la police ou à la gendarmerie</b>.</div>' },
    { id: 'deblais', t: 'Déblais', ic: 'alert', src: LIVCE + ', p. 10 ; ' + GDOCE + ', § 11 (p. 83)',
      html: '<p>À l’issue de l’extinction, ou après une explosion, un mouvement de terrain…, le chef d’équipe s’assure que le déblai est fait <b>très soigneusement</b> dans son secteur :</p>' +
        '<ul class="check"><li><b>aucun déblai inutile</b> n’est entrepris ;</li><li>il est fait <b>proprement</b> (sans abîmer ou salir les pièces et/ou cages d’escalier non touchées) ;</li><li>il est fait <b>en toute sécurité</b>.</li></ul>' +
        '<div class="callout bad">Il est notamment <b>interdit de jeter des gravats par les fenêtres</b>.</div>' +
        '<p>Au cours du déblai, il signale <b>sans délai</b> au chef d’agrès (ou éventuellement directement à la police ou à la gendarmerie) toute découverte d’<b>objet suspect</b> (engin explosif, armes…) ou <b>de valeur</b> (bijoux, liquidités, œuvres d’art…). Il veille à ne pas faire disparaître, autant que faire se peut, tout <b>indice</b> pouvant servir à exploiter une piste criminelle.</p>' +
        '<p class="small muted">GDO § 11 : la préservation des traces et indices repose sur l’observation et la mémorisation, le déblai temporisé et/ou adapté ; si le déblai nécessaire à l’extinction doit les faire disparaître, les équipes veillent, dans la mesure du possible, à les recueillir en amont. Voir aussi <a href="#/c/inc-deblai">le déblai côté équipier</a>.</p>' },
    { id: 'surveillance', t: 'Surveillance', ic: 'clock', src: LIVCE + ', p. 10',
      html: '<p>Le chef d’équipe peut être amené à <b>commander un détachement de surveillance</b> comprenant <b>jusqu’à 4 sapeurs</b>. Il assure les <b>rondes ou contrôles prescrits</b> et <b>rend compte de leur exécution</b>.</p>' +
        '<p class="small muted">Critères de fin de surveillance (GDO) : voir <a href="#/c/inc-mgo-suite">MGO (2)</a>.</p>' }
  ],
  key: ['Reconnaissance partielle : visiter tous les locaux du secteur imparti, demander les moyens de forcement au chef d’agrès.', 'Propriété privée inviolable ; en cas de péril, visite à son initiative ; refus des occupants → compte rendu immédiat.', 'Sans urgence : demander police/gendarmerie via le chef d’agrès et attendre leur arrivée.', 'Sauvetage : ordonné par le chef d’agrès, mais initiative si un sauvetage se présente ; compte rendu immédiat ; droit et devoir de forcer le passage.', 'Établissement : contrôler la manœuvre de l’équipier et les règles d’établissement.', 'Attaque : pas de risques inutiles, compte rendu permanent.', 'Objets de valeur : ne rien laisser, remettre au chef d’agrès ou à la police/gendarmerie.', 'Déblai : soigneux, propre, sûr ; interdit de jeter des gravats par les fenêtres ; signaler objets suspects/de valeur ; préserver les indices.', 'Surveillance : détachement jusqu’à 4 sapeurs, rondes et compte rendu.'],
  traps: ['Entrer sans urgence dans un local dont les occupants refusent l’accès, sans attendre police ou gendarmerie.', 'Renoncer à un sauvetage parce que des occupants refusent le passage : le CE a le droit et le devoir de forcer.', 'Garder sur soi ou laisser sur place un objet de valeur trouvé.', 'Jeter les gravats par la fenêtre pour aller plus vite.', 'Déblayer « à fond » et faire disparaître des indices.'],
  quiz: [
    { q: 'En reconnaissance, sans urgence, les occupants refusent l’accès à un local que le chef d’équipe estime devoir visiter. Il doit :', c: ['Rendre compte et demander, via le chef d’agrès, l’assistance de la police ou de la gendarmerie, puis attendre leur arrivée', 'Forcer la porte immédiatement', 'Renoncer définitivement à la visite sans rien dire', 'Demander à son équipier de passer par une fenêtre'], e: 'Livret CE p. 9 : refus → compte rendu immédiat ; sans urgence, il doit impérativement demander police ou gendarmerie et attendre leur arrivée.', s: 'reco' },
    { q: 'En cas de péril, le chef d’équipe peut-il visiter caves, greniers ou appartements ?', c: ['Oui, il en a le droit à son initiative', 'Non, jamais sans l’accord écrit du propriétaire', 'Uniquement en présence du maire', 'Uniquement sur ordre du chef de groupe'], e: 'Livret CE p. 9 : la propriété privée est inviolable, mais en cas de péril le chef d’équipe a le droit de visiter ces locaux à son initiative.', s: 'reco' },
    { q: 'Pour un sauvetage, des occupants s’opposent au passage par leur appartement. Le chef d’équipe :', c: ['A le droit et le devoir d’y pénétrer malgré tout, de force si nécessaire', 'Doit attendre la police', 'Doit chercher un autre itinéraire sans jamais forcer', 'Doit demander l’accord du COS avant tout'], e: 'Livret CE p. 9 : « le chef d’équipe a le droit et le devoir de pénétrer malgré tout dans le lieu considéré, de force si nécessaire ».', s: 'sauvetage' },
    { q: 'Qui ordonne les sauvetages ?', c: ['Le chef d’agrès, le chef d’équipe faisant preuve d’initiative si un sauvetage se présente à lui', 'Le chef d’équipe seul', 'L’équipier qui voit la victime', 'La police'], e: 'Livret CE p. 9 : sauvetages ordonnés par le chef d’agrès ; initiative du CE si un sauvetage se présente, avec compte rendu immédiat.', s: 'sauvetage' },
    { q: 'Pendant l’établissement, le rôle propre du chef d’équipe est de :', c: ['S’assurer que son équipier exécute correctement la manœuvre et respecte les règles d’établissement des tuyaux', 'Choisir seul le point d’attaque', 'Alimenter l’engin-pompe', 'Rester à l’engin pour la radio'], e: 'Livret CE p. 10, ÉTABLISSEMENT.', s: 'etab-attaque' },
    { q: 'Au cours du déblai, le chef d’équipe trouve des bijoux. Il doit :', c: ['Le signaler sans délai au chef d’agrès ou éventuellement directement à la police ou à la gendarmerie', 'Les remettre au premier voisin présent', 'Les laisser sur place', 'Les conserver jusqu’au retour au centre'], e: 'Livret CE p. 10 : toute découverte d’objet suspect ou de valeur est signalée sans délai au chef d’agrès ou éventuellement à la police/gendarmerie.', s: 'deblais' },
    { q: 'Quelle pratique est explicitement interdite pendant le déblai ?', c: ['Jeter des gravats par les fenêtres', 'Utiliser une lance', 'Porter l’ARI', 'Rendre compte au chef d’agrès'], e: 'Livret CE p. 10 : le déblai doit être fait en toute sécurité, « il est notamment interdit de jeter des gravats par les fenêtres ».', s: 'deblais' },
    { q: 'Un chef d’équipe peut commander un détachement de surveillance de :', c: ['Jusqu’à 4 sapeurs', 'Jusqu’à 2 sapeurs', 'Jusqu’à 8 sapeurs', '2 à 4 engins'], e: 'Livret CE p. 10, SURVEILLANCE : détachement « comprenant jusqu’à 4 sapeurs » ; rondes, contrôles et compte rendu.', s: 'surveillance' }
  ]
});

/* =====================================================================================
   CHAPITRE 3 — ORDRES, SÉCURITÉ DU BINÔME ET COMPTE RENDU
   ===================================================================================== */

VSAV.chap({
  id: 'ce-ordres-cr', part: 'ce', seq: CE1,
  title: 'Ordres, sécurité du binôme et compte rendu', short: 'Ordres et compte rendu', motif: 'clip',
  sources: [LIVCE + ', § 1.2, § 2 (p. 11) et § 3 (p. 11-12)', GDOCE + ', chapitre 3, section III, § 1 (p. 69)'],
  summary: 'Répercuter l’ordre sans l’interpréter, répondre personnellement de la sécurité individuelle du binôme, exécuter la mission avec juste ce qu’il faut d’initiative et rendre compte : je suis, je vois, je fais, je demande.',
  why: '<b>Pourquoi tant d’insistance sur l’ordre et le compte rendu ?</b> Le chef d’équipe est l’interface entre le chef d’agrès et l’équipier. Vers le bas, un ordre mal transmis met en jeu la mission et la <b>sécurité collective</b> de l’agrès — et si le chef d’équipe est blessé, c’est l’équipier qui devra rendre compte et peut-être finir seul la mission. Vers le haut, c’est « de la fréquence et de la qualité » de ses comptes rendus que le chef d’agrès optimise sa manœuvre. Un compte rendu clair et précis vaut autant qu’une lance bien tenue.',
  sections: [
    { id: 'ordre', t: 'Répercuter l’ordre à son équipier', ic: 'team', src: LIVCE + ', § 2 (p. 11)',
      html: '<p>Le chef d’équipe s’assure de la <b>bonne compréhension par son équipier</b> de l’ordre donné par le chef d’agrès. <b>Tout ordre</b> du chef d’agrès doit être <b>répercuté</b> par le chef d’équipe à son équipier : de cette compréhension dépendent le <b>succès de la mission</b> et la <b>sécurité collective</b> de l’agrès.</p>' +
        '<div class="callout warn">Un ordre ne doit <b>jamais être interprété ou modifié</b>, sauf en cas d’<b>urgence avérée</b> ou de <b>modification de la situation</b> (le cheminement prévu s’avère impraticable, un plafond menace de s’effondrer…).</div>' +
        '<p>Bien informer son équipier, c’est aussi la garantie qu’il <b>seconde efficacement</b> son chef d’équipe et, en cas d’accident survenu à ce dernier, qu’il puisse <b>rendre compte avec précision</b> (localisation de l’accident notamment), voire <b>continuer seul la mission</b>.</p>' },
    { id: 'securite', t: 'Responsable de la sécurité du binôme', ic: 'shield', src: LIVCE + ', § 2 (p. 11)',
      html: '<div class="tw"><table><thead><tr><th>Niveau</th><th>Rôle du chef d’équipe</th></tr></thead><tbody>' +
        '<tr><td><b>Sécurité collective</b> (équipage de l’agrès)</td><td>Il y <b>participe activement</b> en respectant les consignes générales données par le chef d’agrès.</td></tr>' +
        '<tr><td><b>Sécurité individuelle</b> (au sein de son équipe)</td><td>Il en est <b>personnellement et directement responsable</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Domaines cités par le livret :</p>' +
        '<ul class="check"><li>règles d’utilisation des <b>EPI</b> ;</li><li>règles d’<b>engagement sous ARI</b> ;</li><li>règles d’emploi du <b>LSPCC</b> ;</li><li>règles de <b>balisage</b> (secours routier) ;</li><li><b>barrage des fluides</b> (gaz) ;</li><li>sécurité au sens large : sécurité des <b>cheminements</b>, prévention du <b>coup de chaleur</b>…</li></ul>' +
        '<p>Il est le <b>premier maillon de la chaîne de sécurité</b> et a, dans ce domaine comme dans celui du respect des ordres et du compte rendu, une <b>responsabilité éminente</b>.</p>' +
        '<div class="callout bad">En cours de mission, il rend compte <b>sans aucun délai</b> de <b>tout danger ou risque, potentiel ou avéré</b>, qu’il est susceptible de rencontrer.</div>' },
    { id: 'mission', t: 'Exécuter la mission : rigueur et esprit d’initiative', ic: 'target', src: LIVCE + ', § 3 (p. 11)',
      html: '<p>Le chef d’équipe est <b>responsable de l’exécution de la mission</b> confiée par son chef d’agrès. Il la remplit avec <b>rigueur</b> et en respecte <b>la lettre et l’esprit</b>.</p>' +
        '<p>Il doit cependant faire preuve d’<b>esprit de décision</b> (ou esprit d’initiative) face à toute <b>évolution imprévue</b> de la situation ou face à tout <b>danger</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Défaut d’initiative</th><th>Excès d’initiative</th></tr></thead><tbody>' +
        '<tr><td>Ne pas réagir à un danger ou à une évolution imprévue.</td><td>Se détourner de sa mission sans impérieuse nécessité, interférer avec les autres binômes.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn">« Un défaut comme un excès d’initiative peuvent avoir des conséquences <b>dramatiques</b>. » Le chef d’équipe tient toujours compte de son environnement (<b>autres binômes</b> notamment) et ne se détourne jamais de sa mission sans une <b>impérieuse nécessité</b>.</div>' },
    { id: 'cr-trame', t: 'Le compte rendu en cours d’action', ic: 'clip', src: LIVCE + ', § 3 (p. 12)',
      steps: ['Je suis…', 'Je vois…', 'Je fais…', 'Je demande…'], stepsTitle: 'Le compte rendu opérationnel répond obligatoirement à (4)',
      after: '<p>Le chef d’équipe rend compte <b>régulièrement</b> à son chef d’agrès en cours de mission : c’est de la <b>fréquence et de la qualité</b> de ses comptes rendus que le chef d’agrès va pouvoir optimiser la manœuvre.</p>' },
    { id: 'cr-cas', t: 'Quand et comment rendre compte', ic: 'alert', src: LIVCE + ', § 3 (p. 12) ; ' + GDOCE + ', § 1 (p. 69)',
      html: '<p>Un compte rendu en cours d’action est <b>impératif</b> :</p>' +
        '<ul class="check"><li>lorsque les <b>moyens</b> s’avèrent <b>insuffisants</b> ;</li><li>en cas de <b>difficulté</b> à remplir la mission ;</li><li>en cas d’<b>accident</b> ;</li><li>en cas de découverte de <b>victime</b>, d’<b>objet suspect</b> ou <b>de valeur</b>, etc.</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Le compte rendu doit être</th><th>Précision du livret</th></tr></thead><tbody>' +
        '<tr><td><b>Clair</b></td><td>(un seul objet par compte rendu)</td></tr>' +
        '<tr><td><b>Précis</b></td><td>(pas de détails superflus ou inutiles)</td></tr>' +
        '<tr><td><b>Concis</b></td><td>(un seul objet par compte rendu)</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">GDO § 1 : l’information recueillie tout au long de l’intervention doit être partagée et faire l’objet d’un compte rendu systématique vers son supérieur.</p>' },
    { id: 'cr-fin', t: 'Le compte rendu de fin de mission', ic: 'check', src: LIVCE + ', § 3 (p. 12)',
      html: '<p>Il doit permettre au chef d’agrès de <b>mesurer le résultat de la mission</b> et, le cas échéant, d’en <b>donner une nouvelle</b> au chef d’équipe.</p>' +
        '<div class="callout ok">Le chef d’équipe rend donc compte <b>deux fois</b> : en cours d’action (régulièrement et dans les cas impératifs) et en fin de mission.</div>' },
    { id: 'coquilles', t: 'Note sur le texte du livret', ic: 'book', src: LIVCE + ', p. 11-12',
      html: '<div class="callout warn"><b>Coquilles probables du livret</b> (signalées sans corriger la source) :<ul class="check"><li>p. 11 : « rendre compte sans aucun délai à son <b>chef d’équipe</b> » — le sens (et le reste du livret, qui fait du chef d’agrès le supérieur direct) indique <b>chef d’agrès</b>.</li><li>p. 12 : « concis (un seul objet par compte-rendu) » reprend mot pour mot la précision de « clair » ; la précision propre à « concis » n’est pas donnée par le livret.</li></ul></div>' }
  ],
  key: ['Tout ordre du chef d’agrès est répercuté à l’équipier, et sa compréhension vérifiée.', 'Un ordre n’est jamais interprété ni modifié, sauf urgence avérée ou modification de la situation.', 'Équipier bien informé = peut rendre compte (localisation) voire continuer seul si le CE est accidenté.', 'Sécurité collective : le CE y participe ; sécurité individuelle de l’équipe : il en est personnellement et directement responsable.', 'Rendre compte sans aucun délai de tout danger ou risque, potentiel ou avéré.', 'Respecter la lettre et l’esprit de la mission ; défaut comme excès d’initiative peuvent être dramatiques.', 'Compte rendu : je suis, je vois, je fais, je demande.', 'Compte rendu impératif : moyens insuffisants, difficulté, accident, découverte de victime / objet suspect ou de valeur.', 'Clair, précis, concis ; compte rendu de fin de mission pour mesurer le résultat et recevoir une nouvelle mission.'],
  traps: ['« Adapter » l’ordre du chef d’agrès sans urgence avérée ni changement de situation.', 'Garder l’ordre pour soi : l’équipier doit le connaître pour seconder et, si besoin, continuer seul.', 'Penser que la sécurité individuelle de l’équipier relève du chef d’agrès : c’est la responsabilité personnelle du chef d’équipe.', 'Attendre la fin de mission pour signaler un danger ou une victime.', 'Faire un compte rendu fourre-tout avec plusieurs objets et des détails inutiles.'],
  quiz: [
    { q: 'Le chef d’équipe peut modifier l’ordre reçu du chef d’agrès :', c: ['Seulement en cas d’urgence avérée ou de modification de la situation', 'Dès qu’il pense avoir une meilleure idée', 'Jamais, même si le plafond menace de s’effondrer', 'Si son équipier est d’accord'], e: 'Livret CE § 2 (p. 11) : un ordre ne doit jamais être interprété ou modifié, sauf urgence avérée ou modification de la situation (cheminement impraticable, plafond menaçant…).', s: 'ordre' },
    { q: 'Pourquoi le chef d’équipe doit-il s’assurer que son équipier a bien compris l’ordre ?', c: ['Pour que l’équipier seconde efficacement et puisse rendre compte voire continuer seul si le chef d’équipe est accidenté', 'Pour que l’équipier puisse contester l’ordre', 'Parce que l’équipier rend compte directement au COS', 'Uniquement pour la traçabilité administrative'], e: 'Livret CE § 2 : c’est la garantie que l’équipier seconde son chef d’équipe et, en cas d’accident, rende compte avec précision (localisation) voire continue seul la mission.', s: 'ordre' },
    { q: 'De la sécurité individuelle au sein de son équipe, le chef d’équipe est :', c: ['Personnellement et directement responsable', 'Simplement associé, la responsabilité étant celle du chef d’agrès', 'Non concerné, chaque sapeur répondant de lui-même', 'Responsable seulement sous ARI'], e: 'Livret CE § 2 (p. 11) : il participe à la sécurité collective et « est personnellement et directement responsable de la sécurité individuelle au sein de son équipe ».', s: 'securite' },
    { q: 'À propos de l’initiative, le livret indique :', c: ['Qu’un défaut comme un excès d’initiative peuvent avoir des conséquences dramatiques', 'Que le chef d’équipe ne doit jamais prendre d’initiative', 'Que l’initiative prime toujours sur la mission reçue', 'Que seul l’excès d’initiative est dangereux'], e: 'Livret CE § 3 (p. 11) : il respecte la lettre et l’esprit de la mission, fait preuve d’esprit de décision face à l’imprévu ou au danger, et ne s’en détourne jamais sans impérieuse nécessité.', s: 'mission' },
    { q: 'Quelle est la trame obligatoire du compte rendu opérationnel ?', c: ['Je suis, je vois, je fais, je demande', 'Je vois, je pense, je propose', 'Qui, quoi, où, quand, comment', 'Je pars, j’arrive, je reviens'], e: 'Livret CE § 3 (p. 12) : le compte rendu doit obligatoirement répondre à « je suis ; je vois ; je fais ; je demande ».', s: 'cr-trame' },
    { q: 'Lequel de ces cas n’est PAS cité comme rendant le compte rendu en cours d’action impératif ?', c: ['La fin de l’établissement prévu sans difficulté', 'Des moyens qui s’avèrent insuffisants', 'Un accident', 'La découverte d’une victime ou d’un objet suspect'], e: 'Livret CE p. 12 : moyens insuffisants, difficulté à remplir la mission, accident, découverte de victime, d’objet suspect ou de valeur.', s: 'cr-cas' },
    { q: 'Le compte rendu du chef d’équipe doit toujours être :', c: ['Clair, précis et concis', 'Long et détaillé', 'Écrit', 'Adressé au COS directement'], e: 'Livret CE p. 12 : clair (un seul objet), précis (pas de détails superflus), concis.', s: 'cr-cas' },
    { q: 'À quoi sert le compte rendu de fin de mission ?', c: ['Permettre au chef d’agrès de mesurer le résultat et, le cas échéant, de donner une nouvelle mission', 'Clore définitivement l’intervention', 'Informer la presse', 'Remplacer les comptes rendus en cours d’action'], e: 'Livret CE § 3 (p. 12), « Le compte-rendu en fin de mission ».', s: 'cr-fin' }
  ]
});
