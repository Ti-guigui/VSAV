/* CHEF D’ÉQUIPE INCENDIE — fichier 4 : CE 4 (Reconnaissances et engagement sous ARI)
   Sources : Livret stagiaire Chef d’équipe incendie SDIS 51 (v2019.1), partie 4 (§ 4.1 p. 26, § 4.2 p. 27) et partie 1 (p. 8) ;
   Dossier formateur CE INC SDIS 51, partie E « manœuvres ARI » : exposé A1 bis « Déroulement type d’une reconnaissance » ;
   séquence 1 « Composition d’une ligne de vie » ; séquence 2 « Procédure opérationnelle avant, pendant, après » (diaporama,
   guide formateur, fiche individuelle d’entraînement) ; séquence 3 « Reconnaissance longue distance » (fiche d’activité,
   grille d’évaluation formative) ; B1-1 « Atmosphères non respirables » (diaporama, livret formateur B1-6, vrai/faux corrigé
   B1-1-4, document stagiaire B1-1-5) ; B1-2 « Contraintes physiologiques » (diaporama, texte lacunaire corrigé B1-2-3) ;
   B2 « dossier complet » (composition de l’ARI, B4-1 consommation, B4-2 mise en œuvre) ; B3 « Règles de base d’emploi »
   (livret formateur, cours, livret stagiaires) ; B5 « Exercice en cave à fumée » (fiche séquentielle, fiche d’activité B5-3) ;
   POP-16 SDIS 51 « Marquage des portes » (indice 02, 2023) ; GTO Engagement en milieu vicié (DGSCGC, décembre 2019). */
var CE4 = 'CE 4 — Reconnaissances et engagement sous ARI';
var CE4_LIV = 'Livret stagiaire Chef d’équipe incendie SDIS 51 (v2019.1)';
var CE4_GTO = 'GTO Engagement en milieu vicié (DGSCGC, déc. 2019)';
var CE4_FOR = 'Dossier formateur CE INC SDIS 51, partie E « manœuvres ARI »';
var CE4_POP = 'POP-16 SDIS 51 « Marquage des portes lors des reconnaissances » (indice 02, 13/03/2023)';

/* =====================================================================================
   CE 4 — CHAPITRE 1 : le chef d’équipe en reconnaissance
   ===================================================================================== */
VSAV.chap({
  id: 'ce-reco', part: 'ce', seq: CE4,
  title: 'Le chef d’équipe en reconnaissance', short: 'CE en reconnaissance', motif: 'eye',
  sources: [CE4_LIV + ', § 4.1 (p. 26), § 4.2 (p. 27) et partie 1 (p. 8)', CE4_FOR + ', exposé A1 bis « Déroulement type d’une reconnaissance »', CE4_POP, CE4_GTO + ', chap. III § 1.2 à 2 (p. 39-49)'],
  summary: 'Reconnaissance intégrale, méthodique, rythmée par les appels et le silence : le chef d’équipe cherche, son équipier assure le binôme, et le compte rendu nourrit la décision du COS.',
  why: '<b>Pourquoi le chef d’équipe est-il si exposé en reconnaissance ?</b> Le livret le dit sans détour : c’est sur les <b>comptes rendus des chefs d’équipe</b>, par exemple à l’issue d’une reconnaissance longue sous ARI dans un sous-sol complexe, que le COS décide de sa manœuvre. Une mauvaise évaluation ou une <b>erreur de local reconnu</b> peut compromettre le succès de l’intervention et la sécurité des binômes engagés ensuite. Le chef d’équipe ne quitte donc <b>aucun volume avec un doute</b>.',
  sections: [
    { id: 'enjeu', t: 'Le premier maillon de l’information', ic: 'target', src: CE4_LIV + ', partie 1 (p. 8-9)',
      html: '<p>Le chef d’équipe est le <b>premier maillon</b> de la chaîne de commandement. Il reçoit ses ordres du <b>chef d’agrès</b> et lui <b>rend compte en cours d’action et en fin de mission</b>.</p>' +
        '<ul class="check"><li>Il respecte strictement le <b>secteur attribué</b> et les <b>points de passage obligés</b>.</li><li>Il vérifie qu’il dispose des moyens nécessaires et <b>demande</b> au chef d’agrès ceux qui lui manquent (notamment pour forcer une issue).</li><li>Il <b>n’interfère pas</b> avec les autres actions commandées ; seule une urgence absolue (personne en danger immédiat, binôme en difficulté) l’autorise à détourner son binôme de sa mission.</li></ul>' +
        '<p class="small muted">Visite des locaux privés en cas de péril, refus des occupants : voir <a href="#/c/ce-mgo">CE 1 — La MGO côté chef d’équipe</a>.</p>' },
    { id: 'role', t: 'Le rôle du chef d’équipe pendant la reconnaissance', ic: 'eye', src: CE4_LIV + ', § 4.1 (p. 26)',
      html: '<div class="tw"><table><thead><tr><th>Exigence</th><th>Ce que le chef d’équipe fait</th></tr></thead><tbody>' +
        '<tr><td><b>Intégrale</b></td><td>Il reconnaît <b>tous les volumes</b> qu’il rencontre.</td></tr>' +
        '<tr><td><b>Méthodique, précise, curieuse</b></td><td>Aucun volume visité n’est quitté avec un <b>doute</b> sur la présence possible d’une victime.</td></tr>' +
        '<tr><td><b>Allonge</b></td><td>Il s’aide du <b>manche de la hache à tête plate</b> pour atteindre les endroits difficiles d’accès et augmenter l’allonge de son bras.</td></tr>' +
        '<tr><td><b>Appels verbaux</b></td><td>Réguliers, <b>répartis dans le temps et dans l’espace</b> : ils signalent aux victimes la présence des secours.</td></tr>' +
        '<tr><td><b>Silence</b></td><td>C’est au chef de <b>faire régner le silence</b> dans le binôme pour discerner réponses et plaintes.</td></tr>' +
        '<tr><td><b>Communication</b></td><td><b>Claire et concise</b> pour ne pas parasiter les recherches, mais suffisante pour que l’équipier connaisse ses <b>intentions</b> et ses <b>actions</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout ok">Le chef cherche ; l’équipier assure la sécurité du binôme (ligne guide tendue, amarrages, liaison courte, comptage des repères). Voir le point de vue équipier : <a href="#/c/inc-reco">Reconnaissances : méthodes de recherche et marquage</a>.</div>' },
    { id: 'deroulement', t: 'Le déroulement type d’une reconnaissance', ic: 'list', src: CE4_FOR + ', exposé A1 bis (diapos 2 à 6)',
      html: '<p>La reconnaissance est la <b>première étape</b> de toute intervention : elle détermine les actions à réaliser. Elle renseigne sur les <b>sauvetages</b> à opérer, les <b>endroits les plus exposés</b> et les <b>matières en présence</b>.</p>' +
        '<p>Lors des feux, le <b>chef d’agrès</b>, dès son arrivée et accompagné d’un binôme d’attaque, explore les endroits menacés pour : effectuer les sauvetages ou mises en sécurité, couper les fluides, apprécier les risques de propagation, déterminer les points d’attaque, les cheminements et les communications intérieures.</p>' +
        '<p>La reconnaissance se fait <b>en binôme</b> car la progression est difficile (fumées) : le binôme <b>s’équipe d’ARI</b>, effectue la mission désignée par le chef d’agrès (sauvetages, reconnaissance dans les étages enfumés, ouverture de pyrodôme…), puis <b>rend compte de la mission</b>. Il respecte les règles de <b>protection individuelle</b> et de <b>protection collective</b>.</p>' },
    { id: 'longue', t: 'Situations spécifiques : grands volumes et longues distances', ic: 'rope', src: CE4_FOR + ', exposé A1 bis (diapos 7 à 10) ; ' + CE4_GTO + ', chap. III § 1.2 (p. 40-41)',
      html: '<p>Dans les locaux de <b>grande envergure</b>, à visibilité réduite, aux accès nombreux, et <b>dès que la distance entre le point d’accès et le but dépasse 20 m</b>, l’exposé A1 bis impose une manœuvre conforme au <b>GNR Appareil respiratoire isolant</b> (ligne de vie : voir <a href="#/c/ce-ligne-vie">Ligne de vie et reconnaissance longue distance</a>).</p>' +
        '<p>Avant toute manœuvre, le personnel doit être <b>sensibilisé</b> aux atmosphères non respirables et aux contraintes physiologiques, et connaître parfaitement le matériel d’exploration : <b>ARI, balise sonore, liaison personnelle, ligne guide, tableau de contrôle, plaque de contrôle, dispositif de dérivation</b>.</p>' +
        '<div class="callout warn"><b>Écart entre sources :</b> le seuil de <b>20 m</b> vient de l’exposé formateur, qui renvoie au GNR ARI (le GTO 2019 cite dans sa bibliographie un « Guide national de référence » ARI de <b>1999</b>). Le GTO 2019 ne fixe pas de distance : il réserve l’engagement sur ligne de vie aux cas de visibilité réduite ou nulle, de cheminement complexe (élévation, virages, cave, entrepôt, souterrain…), d’obstacles, ou dès que l’endurance du binôme peut être altérée. Applique la consigne de ton encadrement.</div>' },
    { id: 'methode', t: 'Méthodes : ce que le chef organise dans son binôme', ic: 'grid', src: CE4_GTO + ', chap. III § 1.2 à 2 (p. 42-48)',
      html: '<ul class="check"><li><b>Avant l’engagement</b>, le sens de reconnaissance est défini dans le binôme : « <b>main gauche</b> » ou « <b>main droite</b> » ; on longe le mur du côté choisi et on <b>ressort par la porte d’entrée</b>.</li>' +
        '<li><b>Petit espace</b> : un membre reconnaît, l’autre reste à l’entrée ; ils restent reliés et gardent la <b>communication verbale</b>.</li>' +
        '<li><b>Avec un moyen hydraulique</b> : le chef d’équipe <b>garde le contrôle de sa lance</b>, placée entre le foyer et la pièce à reconnaître ; c’est alors l’<b>équipier</b> qui reconnaît le local.</li>' +
        '<li><b>Méthode circulaire</b> : le chef, attaché à l’équipier, fait des « va-et-vient » et s’éloigne au fur et à mesure pour couvrir toute la pièce.</li>' +
        '<li><b>Ordre</b> en bâtiment à étages : étage du foyer, étage directement au-dessus, dernier étage, puis étages intermédiaires et inférieurs.</li></ul>',
      figs: [{ img: 'img/ce/4/exploration-piece.jpg', cap: 'Exploration d’une pièce (exemple)', txt: '<p>Le binôme entre, suit le mur sur le côté choisi, contourne et visite chaque meuble (bureau, lit, placard) puis ressort par la porte d’entrée : aucun recoin n’est laissé dans le doute.</p>', src: CE4_FOR + ', séquence 2, diaporama « Procédure opérationnelle », diapo 15' }] },
    { id: 'marquage', t: 'Le marquage des portes : ce que le chef vérifie', ic: 'clip', src: CE4_POP + ' ; ' + CE4_LIV + ', p. 26 (renvoi au livret EQ INC § 4.3)',
      html: '<p>Le livret CE renvoie au livret équipier (§ 4.3) pour le marquage. La POP-16 en vigueur fixe le code : <b>/</b> à l’entrée (en cours), <b>X</b> à la sortie (effectuée), <b>C</b> + nombre de personnes <b>confinées</b>, <b>E</b> + nombre de personnes <b>évacuées</b>, <b>cercle</b> autour de la croix pour une 2<sup>de</sup> reconnaissance. Craie ou marqueur effaçable, <b>en partie basse</b>.</p>' +
        '<ul class="check"><li>Les portes (d’entrée et intérieures) sont <b>refermées</b> après reconnaissance.</li><li>Les nombres inscrits (C, E) sont ceux que le chef annonce dans son <b>compte rendu</b> au chef d’agrès.</li></ul>' +
        '<div class="callout warn">Le livret équipier 2019 reproduit l’ancienne POP-16 (indice 1, 2014 : X = reconnu et vide, ? = non reconnu, écriture à 1 m du sol). La POP-16 indice 02 (2023) la remplace. Détail : <a href="#/c/inc-reco">chapitre équipier</a>.</div>' },
    { id: 'extraction', t: 'Les méthodes d’extraction (§ 4.2)', ic: 'hand', src: CE4_LIV + ', § 4.2 (p. 27)',
      html: '<div class="callout warn">Le § 4.2 « Méthodes d’extraction » du livret CE porte la mention « <b>En cours de réalisation</b> » : aucun contenu n’est fourni. Pour l’abordage et le dégagement d’un sapeur-pompier en difficulté, voir le chapitre équipier <a href="#/c/inc-ari-sauvegarde">Sauvegarde opérationnelle</a> (GTO).</div>' }
  ],
  status: 'partiel',
  todo: '<p>Le § 4.2 « Méthodes d’extraction » du livret CE (p. 27) est « en cours de réalisation » : section à compléter quand le SDIS publiera ce contenu.</p>',
  key: ['Reconnaissance intégrale : aucun volume quitté avec un doute.', 'Manche de la hache à tête plate pour augmenter l’allonge.', 'Appels verbaux répartis dans le temps et l’espace ; le chef impose le silence.', 'Communication claire et concise avec l’équipier.', 'Rendre compte au chef d’agrès en cours d’action et en fin de mission.', 'Exposé formateur : au-delà de 20 m entre accès et objectif → manœuvre GNR ARI (ligne de vie).', 'Avec une lance, le chef la garde ; l’équipier reconnaît le local.'],
  traps: ['Confier les appels à l’équipier et laisser parler tout le monde : c’est le chef qui fait régner le silence.', 'Quitter une pièce « presque » vue : une erreur de local reconnu fausse la décision du COS.', 'Sortir de son secteur ou interférer avec une autre action commandée sans urgence absolue.', 'Chercher le § 4.2 du livret pour les extractions : il est vide (« en cours de réalisation »).'],
  quiz: [
    { q: 'Quelle est la mission du chef d’équipe pendant la reconnaissance selon le livret CE ?', c: ['Une reconnaissance intégrale de tous les volumes rencontrés', 'Une reconnaissance des seules pièces enfumées', 'La tenue de la ligne guide pendant que l’équipier cherche', 'Le marquage des portes uniquement'], e: 'Livret CE § 4.1 : la mission du chef d’équipe est d’effectuer une reconnaissance intégrale dans tous les volumes qu’il rencontre.', s: 'role' },
    { q: 'Quel outil le livret propose-t-il pour augmenter l’allonge du bras du chef ?', c: ['Le manche de la hache à tête plate', 'La lance à débit variable', 'La ligne guide', 'La caméra thermique'], e: 'Livret CE § 4.1 : le manche de la hache à tête plate permet d’atteindre les endroits difficiles d’accès.', s: 'role' },
    { q: 'Qui fait régner le silence dans le binôme pendant les recherches ?', c: ['Le chef d’équipe', 'L’équipier', 'Le contrôleur', 'Le chef d’agrès par radio'], e: 'Livret CE § 4.1 : c’est au chef de faire régner le silence pour discerner les réponses ou plaintes des victimes.', s: 'role' },
    { q: 'Selon l’exposé formateur A1 bis, à partir de quelle distance entre le point d’accès et le but la manœuvre doit-elle suivre le GNR ARI ?', c: ['Plus de 20 m', 'Plus de 5 m', 'Plus de 60 m', 'Plus de 100 m'], e: 'Exposé A1 bis : distance supérieure à 20 m (ou grands locaux, visibilité réduite, accès nombreux). Le GTO 2019 ne fixe pas de distance.', s: 'longue' },
    { q: 'Reconnaissance avec un moyen hydraulique : qui reconnaît le local ?', c: ['L’équipier, le chef gardant sa lance entre le foyer et la pièce', 'Le chef, l’équipier tenant la lance', 'Les deux ensemble, lance posée au sol', 'Le binôme de sécurité'], e: 'GTO 2019, chap. III § 1.2 : le chef d’équipe conserve le contrôle de sa lance ; l’équipier réalise la reconnaissance à sa place.', s: 'methode' },
    { q: 'Pourquoi le compte rendu du chef d’équipe est-il déterminant ?', c: ['Le COS décide de sa manœuvre à partir de ces comptes rendus', 'Il sert uniquement au rapport d’intervention', 'Il permet de calculer la consommation d’air', 'Il remplace le marquage des portes'], e: 'Livret CE p. 8 : une mauvaise évaluation ou une erreur de local reconnu peut avoir des conséquences importantes sur la manœuvre et la sécurité des binômes suivants.', s: 'enjeu' },
    { q: 'Que contient le § 4.2 « Méthodes d’extraction » du livret CE ?', c: ['Rien : il est « en cours de réalisation »', 'La méthode du pont humain', 'Les techniques LSPCC', 'Le déshabillage du sauveteur inconscient'], e: 'Livret CE p. 27 : « En cours de réalisation ».', s: 'extraction' }
  ]
});

/* =====================================================================================
   CE 4 — CHAPITRE 2 : atmosphères non respirables
   ===================================================================================== */
VSAV.chap({
  id: 'ce-atmospheres', part: 'ce', seq: CE4,
  title: 'Atmosphères non respirables', short: 'Atmosphères non respirables', motif: 'molecule',
  sources: [CE4_FOR + ', séquence B1-1 : diaporama « Atmosphères non respirables » (20 diapositives)', CE4_FOR + ', B1-1 : livret formateur (document B1-6), document stagiaire B1-1-5, vrai/faux corrigé B1-1-4, fiche séquentielle', CE4_GTO + ', préface et chap. I § 3'],
  summary: 'Fumées d’incendie (ambiance chaude) et épandages toxiques (ambiance froide) : pourquoi le chef d’équipe impose l’ARI jusqu’au déblai.',
  why: '<b>Pourquoi le chef d’équipe doit-il maîtriser ces notions ?</b> C’est lui qui, au plus près du risque, voit la tentation de « tomber le masque » : au déblai, quand la fumée a disparu, ou devant une fuite froide qui ne brûle pas. La séquence B1-1 répond : les fumées restent dangereuses <b>après l’extinction</b> (le béton relâche les gaz) et <b>une atmosphère froide n’exclut pas un danger</b>.',
  sections: [
    { id: 'definitions', t: 'Quelques définitions', ic: 'book', src: CE4_FOR + ', B1-1 diaporama (diapos 3 à 6) et document stagiaire B1-1-5',
      html: '<div class="tw"><table><thead><tr><th>Terme</th><th>Définition</th></tr></thead><tbody>' +
        '<tr><td>Aérosol</td><td>Suspension dans un milieu gazeux de particules solides ou liquides ayant une vitesse de chute <b>inférieure à 0,25 m/s</b>.</td></tr>' +
        '<tr><td>Air respirable</td><td>Air approprié à la respiration.</td></tr>' +
        '<tr><td>Brouillard</td><td>Suspension de gouttelettes dans un gaz.</td></tr>' +
        '<tr><td>Fumée</td><td>Ensemble de gaz de combustion et des particules entraînées par ceux-ci.</td></tr>' +
        '<tr><td>Impureté</td><td>Matière solide, liquide ou gazeuse, indésirable dans l’air.</td></tr>' +
        '<tr><td>Particule</td><td>Petite partie de matière solide ou liquide.</td></tr>' +
        '<tr><td>Poussière</td><td>Particules solides de dimensions et de provenance diverses pouvant rester un certain temps dans l’air.</td></tr>' +
        '<tr><td>Vapeur</td><td>Phase gazeuse d’une substance solide ou liquide à <b>20 °C et 1 bar absolu</b>.</td></tr>' +
        '</tbody></table></div>' },
    { id: 'air', t: 'Composition de l’air et rôle de l’ARI', ic: 'lungs', src: CE4_FOR + ', B1-1 diaporama (diapos 7-8) ; vrai/faux corrigé B1-1-4',
      html: '<p>L’air contient <b>21 % d’oxygène</b> et <b>78 % d’azote</b> (1 % d’autres gaz). La norme <b>NF EN 12021</b> doit garantir à l’air respiré : une teneur en oxygène de <b>21 %</b> (le corrigé du vrai/faux précise <b>21 % ± 1 %</b>), une teneur en CO₂ <b>faible</b>, une teneur en CO <b>quasi nulle</b>.</p>' +
        '<div class="callout ok">Les ARI ont pour but de <b>créer et maintenir une atmosphère respirable isolée de l’air extérieur vicié</b>.</div>' },
    { id: 'combustion', t: 'La combustion produit les fumées', ic: 'flame', src: CE4_FOR + ', B1-1 diaporama (diapos 9-11) ; document stagiaire B1-1-5',
      html: '<p>La combustion est une réaction <b>exothermique</b> entre l’oxygène de l’air et certaines substances (solides, liquides, gazeuses), après activation par une source d’énergie. Combustible + comburant + énergie d’activation donnent : <b>chaleur</b>, <b>rayonnement lumineux</b>, <b>gaz et résidus</b> = <b>fumées d’incendie</b>.</p>' +
        '<p>Les atmosphères non respirables se classent en deux familles :</p>' +
        '<div class="tw"><table><thead><tr><th>Famille</th><th>Ambiance</th></tr></thead><tbody>' +
        '<tr><td>Fumées d’incendie</td><td><b>Chaude</b></td></tr><tr><td>Épandages ou atmosphères toxiques</td><td><b>Froide</b></td></tr></tbody></table></div>' },
    { id: 'fumees', t: 'Les fumées d’incendie', ic: 'skull', src: CE4_FOR + ', B1-1 diaporama (diapos 13-15) ; fiche séquentielle B1-1 ; vrai/faux corrigé B1-1-4',
      html: '<p>Ambiance chaude = <b>agression physique</b> + <b>agression chimique</b> liée à la toxicité. La toxicité <b>dépend du ou des combustibles</b> : le risque chimique des fumées est le risque toxique du combustible.</p>' +
        '<div class="tw"><table><thead><tr><th>Combustible (1 kg)</th><th>Produit libéré</th><th>Volume</th></tr></thead><tbody>' +
        '<tr><td>PVC</td><td>Acide chlorhydrique</td><td><b>280 litres</b></td></tr>' +
        '<tr><td>Polyuréthane</td><td>Acide cyanhydrique</td><td><b>5 à 30 litres</b></td></tr></tbody></table></div>' +
        '<div class="callout bad"><b>Danger même après extinction</b> : il y a libération de gaz. Le béton <b>absorbe</b> les gaz de combustion sous l’effet de la chaleur et les <b>relâche</b> après extinction. Le risque est donc <b>important lors du déblai</b> : protection respiratoire. Le port de l’ARI ne se limite pas à l’attaque (attaque, déblai…).</div>' },
    { id: 'epandages', t: 'Épandages et atmosphères toxiques', ic: 'spray', src: CE4_FOR + ', B1-1 diaporama (diapos 16-19) ; fiche séquentielle B1-1',
      html: '<p>Ils résultent de <b>processus chimiques</b> ou de <b>fuites</b>. Le pouvoir de pénétration des toxiques dans l’organisme dépend essentiellement de leur <b>forme</b> :</p>' +
        '<ul class="check"><li><b>Solides</b> : particules fibreuses ;</li><li><b>Liquides</b> : solutions aqueuses acides ou basiques ;</li><li><b>Gaz</b> : lésions pulmonaires (œdème aigu du poumon, irritations) ou réactions toxiques (collapsus cardio-pulmonaire, troubles neurologiques voire coma). Exemples : <b>chlore, phosgène, ammoniac, CO</b>.</li></ul>' +
        '<p>L’exemple de l’ypérite (gaz moutarde) rappelle que le risque est respiratoire et <b>souvent cutané</b> : l’évaluation des risques doit permettre de <b>compléter la protection respiratoire par une tenue étanche</b>.</p>' +
        '<div class="callout warn">Une atmosphère <b>froide n’exclut pas un danger</b>.</div>' },
    { id: 'ce', t: 'Ce que le chef d’équipe en tire', ic: 'shield', src: CE4_GTO + ', chap. I § 3.1 et 3.2 ; ' + CE4_FOR + ', B1-1',
      html: '<ul class="check"><li>Il fait porter l’ARI dans tout milieu vicié <b>ou susceptible de l’être</b>, y compris au déblai (gaz relâchés).</li><li>Il ne décide pas seul d’un passage à l’appareil filtrant : c’est le <b>COS</b>, sous conditions (O₂ &gt; 17 %, polluant identifié et mesuré, filtre adapté…).</li><li>Il signale au chef d’agrès tout épandage ou toute odeur suspecte : le risque peut aussi être cutané.</li></ul>' +
        '<p class="small muted">Cas d’obligation de l’ARI et conditions du filtrant : <a href="#/c/inc-ari-contraintes">chapitre équipier « Milieu vicié et contraintes »</a>.</p>' }
  ],
  key: ['Air : 21 % O₂, 78 % N₂ ; NF EN 12021 : O₂ 21 % (± 1 %), CO₂ faible, CO quasi nul.', 'L’ARI crée et maintient une atmosphère respirable isolée de l’air vicié.', 'Fumées d’incendie = ambiance chaude ; épandages toxiques = ambiance froide.', '1 kg de PVC → 280 l d’acide chlorhydrique ; 1 kg de polyuréthane → 5 à 30 l d’acide cyanhydrique.', 'Danger après extinction : le béton relâche les gaz → ARI au déblai.', 'Pénétration des toxiques selon leur forme ; compléter par une tenue étanche si besoin.'],
  traps: ['Croire qu’au déblai les concentrations de gaz toxiques sont faibles : c’est faux (vrai/faux B1-1-4).', 'Confondre les pourcentages : 21 % d’oxygène et 78 % d’azote, pas l’inverse.', 'Croire qu’une fuite froide est sans danger.'],
  quiz: [
    { q: 'La combustion d’1 kg de PVC libère environ :', c: ['280 l d’acide chlorhydrique', '5 à 30 l d’acide cyanhydrique', '280 l de monoxyde de carbone', '28 l d’acide chlorhydrique'], e: 'Diaporama B1-1 : 1 kg de PVC → 280 l d’acide chlorhydrique ; 1 kg de polyuréthane → 5 à 30 l d’acide cyanhydrique.', s: 'fumees' },
    { q: 'Lors d’un déblai, les concentrations de gaz toxiques sont :', c: ['Potentiellement élevées : des gaz sont libérés après extinction', 'Toujours faibles', 'Nulles si la fumée a disparu', 'Uniquement dangereuses à l’air libre'], e: 'Vrai/faux corrigé B1-1-4 : affirmation « faibles » = FAUX ; libération des gaz après extinction (le béton les relâche).', s: 'fumees' },
    { q: 'Les épandages et atmosphères toxiques correspondent à une ambiance :', c: ['Froide', 'Chaude', 'Toujours explosive', 'Sans danger respiratoire'], e: 'B1-1 : fumées d’incendie = ambiance chaude ; épandages = ambiance froide, qui n’exclut pas un danger.', s: 'epandages' },
    { q: 'Le pouvoir de pénétration d’un toxique dans l’organisme dépend essentiellement :', c: ['De sa forme (solide, liquide, gaz)', 'De sa couleur', 'De la température extérieure', 'De la durée de l’intervention'], e: 'Fiche séquentielle B1-1 et vrai/faux corrigé : affirmation VRAIE.', s: 'epandages' },
    { q: 'Quelle teneur en oxygène la norme impose-t-elle à l’air respiré (corrigé du vrai/faux) ?', c: ['21 % ± 1 %', 'Plus de 25 %', '17 %', '78 %'], e: 'Vrai/faux corrigé B1-1-4 : « doit excéder 25 % » est FAUX ; c’est 21 % ± 1 %.', s: 'air' },
    { q: 'Un aérosol est une suspension de particules dont la vitesse de chute est inférieure à :', c: ['0,25 m/s', '2,5 m/s', '25 m/s', '0,025 m/s'], e: 'Définition B1-1 : vitesse de chute inférieure à 0,25 m/s.', s: 'definitions' },
    { q: 'La combustion est une réaction :', c: ['Exothermique', 'Endothermique', 'Sans production de gaz', 'Qui ne nécessite pas d’énergie d’activation'], e: 'Diaporama B1-1 : réaction exothermique, après activation par une source d’énergie.', s: 'combustion' }
  ]
});

/* =====================================================================================
   CE 4 — CHAPITRE 3 : contraintes physiologiques et consommation d’air
   ===================================================================================== */
VSAV.chap({
  id: 'ce-contraintes', part: 'ce', seq: CE4,
  title: 'Contraintes physiologiques et consommation d’air', short: 'Contraintes et consommation', motif: 'heart',
  sources: [CE4_FOR + ', séquence B1-2 : diaporama « Contraintes physiologiques », texte lacunaire corrigé B1-2-3, fiche séquentielle', CE4_FOR + ', séquence 2 « Procédure opérationnelle » (diaporama, guide formateur, fiche individuelle d’entraînement) et dossier B2 (séquence B4-1, documents B4-1-1 et B4-1-2)', CE4_GTO + ', chap. III § 1.2 (notes 17-18) et annexe B (p. 80)'],
  summary: 'Ce que l’ARI coûte au porteur, comment mesurer sa consommation (Q = (P0 − P1) × V / T) et estimer son délai d’intervention (T = P × V / Q).',
  why: '<b>Pourquoi le chef d’équipe s’y intéresse-t-il ?</b> Il engage son équipier dans les fumées et décide du retour. Connaître les contraintes lui permet de <b>repérer l’équipier qui décroche</b> (stress, chaleur, souffle) ; connaître sa propre consommation et celle de son équipier lui permet d’<b>anticiper l’heure de sortie</b>. Côté chef d’agrès, la fiche individuelle sert à former des <b>binômes homogènes</b> et à confier les longues reconnaissances aux plus à l’aise.',
  sections: [
    { id: 'familles', t: 'Deux familles de contraintes', ic: 'list', src: CE4_FOR + ', B1-2 diaporama (diapo 2) et fiche séquentielle',
      html: '<div class="tw"><table><thead><tr><th>Perturbations sensorielles</th><th>Augmentation du travail du porteur</th></tr></thead><tbody>' +
        '<tr><td>Modification du schéma corporel<br>Déficit sensoriel<br>Vie de relation</td><td>Résistances respiratoires<br>Augmentation de l’espace mort<br>Stress émotif<br>Poids de l’appareil<br>Conséquences sur la thermorégulation</td></tr></tbody></table></div>' },
    { id: 'sensorielles', t: 'Les perturbations sensorielles', ic: 'eye', src: CE4_FOR + ', B1-2 texte lacunaire corrigé B1-2-3 ; diaporama (diapos 3-6)',
      html: '<ul class="check"><li><b>Schéma corporel</b> : mobilisation du tronc et du cou modifiée ; <b>gabarit augmenté</b> (de l’ordre de <b>50 à 60 %</b> pour la circonférence thoracique) ; <b>ballant d’inertie</b>, surtout au passage d’obstacles et en marche rapide, augmenté si les sangles sont mal réglées.</li>' +
        '<li><b>Vue</b> : champ visuel réduit (il faut majorer les mouvements de tête) ; acuité diminuée par la <b>buée</b> intérieure ou les <b>projections</b> extérieures, sans compter les fumées.</li>' +
        '<li><b>Ouïe et odorat</b> perturbés : petites fuites de gaz, odeurs de gaz ou de vapeurs d’hydrocarbures <b>ne sont pas perçues</b>. Perception des rayonnements limitée.</li>' +
        '<li><b>Vie de relation</b> : ARI et tenue rendent difficiles l’émission et la réception des messages verbaux.</li></ul>' +
        '<div class="callout ok">Conséquence pour le chef : messages <b>courts</b>, répétés si besoin, et vérification que l’équipier a compris (voir la communication « claire et concise » du livret CE § 4.1).</div>' },
    { id: 'travail', t: 'L’augmentation du travail du porteur', ic: 'lungs', src: CE4_FOR + ', B1-2 texte lacunaire corrigé B1-2-3',
      html: '<div class="tw"><table><thead><tr><th>Contrainte</th><th>Mécanisme</th></tr></thead><tbody>' +
        '<tr><td>Résistance à l’<b>inspiration</b></td><td>Effort pour abaisser la surpression du masque, ce qui actionne le microrégulateur.</td></tr>' +
        '<tr><td>Résistance à l’<b>expiration</b></td><td>Effort pour rejeter l’air par la soupape.</td></tr>' +
        '<tr><td><b>Espace mort</b></td><td>Volume résiduel entre les alvéoles et la soupape d’expiration du masque.</td></tr>' +
        '<tr><td><b>Stress émotif</b></td><td>Manque d’expérience ou de pratique, nature de l’intervention, hostilité du milieu, anxiété → fréquence cardiaque accrue (hormones surrénaliennes), perte de maîtrise et de lucidité, <b>consommation d’air accrue</b>.</td></tr>' +
        '<tr><td><b>Poids</b></td><td>Norme : 18 kg maximum ; un ARI pèse <b>10 à 16 kg</b>, soit <b>15 à 20 %</b> du poids du porteur → dépense énergétique et fatigue plus rapide.</td></tr>' +
        '<tr><td><b>Thermorégulation</b></td><td>Le corps doit rester vers <b>37 °C</b>. À l’effort, seule la sudation refroidit ; sous EPI son évaporation est limitée, il reste la ventilation, qui s’accélère → lucidité perturbée et consommation accrue.</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">Approche GTO (espace mort, débits selon l’effort) : <a href="#/c/inc-ari-contraintes">chapitre équipier</a> et <a href="#/c/inc-ari-principe">ARI : fonctionnement</a>.</p>' },
    { id: 'delai', t: 'Calculer le délai d’intervention théorique', ic: 'clock', src: CE4_FOR + ', séquence 2, diaporama (diapos 6-7) ; dossier B2, séquence B4-1',
      html: '<p>Le contrôleur calcule l’<b>heure de sortie prévisible</b> par :</p>' +
        '<div class="callout ok"><b>T = P × V / Q</b> — T : délai d’intervention théorique (min) ; P : pression lue au manomètre HP avant engagement (bar) ; V : volume en eau de la bouteille (<b>6 litres</b> pour les mono-bouteilles) ; Q : consommation du porteur relevée à l’entraînement (l/min).</div>' +
        '<p>En l’absence de fichier individuel d’aptitude, on retient une consommation moyenne de <b>90 l/min</b> : T = P × 6 / 90, arrondi à <b>T = 0,07 P</b>.</p>' +
        '<p class="small muted">Exemple de calcul (illustration) : P = 300 bar → 300 × 6 / 90 = 20 min ; la formule arrondie donne 0,07 × 300 = 21 min. L’arrondi majore légèrement le délai.</p>' +
        '<div class="callout warn"><b>Écart entre sources :</b> le GTO 2019 (annexe B) calcule le volume d’air avec un facteur de compressibilité (Z = 1,1 à 300 bar) et une consommation de <b>100 l/min</b> ; il indique qu’une bouteille de <b>6 l à 300 bar</b> à 90 l/min offre <b>15 min</b> en conservant <b>50 bar de réserve</b>. La formule formateur ne garde ni réserve ni facteur Z. Dans tous les cas, le manomètre fait foi.</div>' },
    { id: 'fiche', t: 'La fiche individuelle d’entraînement au port de l’ARI', ic: 'clip', src: CE4_FOR + ', séquence 2 (guide formateur) ; dossier B2, documents B4-1-1 et B4-1-2',
      html: '<p>Chaque stagiaire renseigne : âge, <b>pouls au repos</b>, <b>pouls limite</b>, nombre de tractions, puis pour chaque exercice (<b>marche normale, marche rapide, tour, cave</b>) les pressions et pouls de départ, d’arrivée et leur différence.</p>' +
        '<div class="callout ok"><b>Débit (consommation) : Q = (P0 − P1) × V / T</b> — P0 : pression de départ ; P1 : pression d’arrivée ; V : volume de la bouteille ; T : temps.</div>' +
        '<p class="small muted">Exemple de calcul (illustration) : départ 300 bar, arrivée 240 bar, bouteille 6 l, 5 min → (300 − 240) × 6 / 5 = 72 l/min.</p>' +
        '<p><b>Pouls limite</b> (tableau B4-1-2, de 17 à 60 ans) : par exemple 170 à 20 ans, 161,5 à 30 ans, 153 à 40 ans, 144,5 à 50 ans, 136 à 60 ans.</p>' +
        '<p>La séquence B4-1 fait prendre le pouls au repos, puis après <b>5 min de marche lente</b> et <b>5 min de marche rapide</b> sous ARI.</p>' },
    { id: 'classes', t: 'Classer le comportement du porteur : A, B, C', ic: 'psy', src: CE4_FOR + ', fiche individuelle d’entraînement (B4-1-1) ; dossier B2 (séquence B4-2) ; séquence 2, diaporama (diapo 3)',
      html: '<div class="tw"><table><thead><tr><th>Classe</th><th>Profil</th></tr></thead><tbody>' +
        '<tr><td><b>A</b></td><td>SP confirmés, habitués et entraînés à évoluer en milieu hostile.</td></tr>' +
        '<tr><td><b>B</b></td><td>SP confirmés, mais avec un manque d’entraînement au port de l’ARI.</td></tr>' +
        '<tr><td><b>C</b></td><td>SP ayant un trouble du comportement : panique, irritabilité, stress émotif.</td></tr></tbody></table></div>' +
        '<p>Les résultats B et C sont <b>justifiés</b> dans la case « Observation » du formateur.</p>' +
        '<p>À quoi ça sert : le chef d’agrès doit connaître l’aptitude au port de l’ARI de ses personnels pour former des binômes <b>homogènes et efficaces</b> ; les plus à l’aise (les plus performants) sont chargés en priorité des <b>longues reconnaissances</b> et des premières reconnaissances.</p>' }
  ],
  key: ['Deux familles : perturbations sensorielles / augmentation du travail du porteur.', 'Gabarit + 50 à 60 % (circonférence thoracique) ; ballant d’inertie.', 'Fuites et odeurs de gaz non perçues sous ARI.', 'ARI 10 à 16 kg (norme ≤ 18 kg), soit 15 à 20 % du poids du porteur.', 'Stress et chaleur → ventilation accrue → consommation accrue.', 'T = P × V / Q ; à défaut 90 l/min et 6 l : T ≈ 0,07 P.', 'Q = (P0 − P1) × V / T.', 'Classes A, B, C ; les plus à l’aise pour les longues reconnaissances.'],
  traps: ['Se fier au délai théorique sans regarder le manomètre : stress et chaleur font grimper la consommation.', 'Oublier que le calcul formateur ne garde aucune réserve (le GTO raisonne avec 50 bar de réserve).', 'Binômer un porteur A avec un porteur C pour une longue reconnaissance.'],
  quiz: [
    { q: 'Formule du délai d’intervention théorique sous ARI :', c: ['T = P × V / Q', 'T = Q × V / P', 'T = (P0 − P1) × V', 'T = P / (V × Q)'], e: 'Diaporama séquence 2 : T = P × V / Q (P en bar, V en litres d’eau, Q en l/min).', s: 'delai' },
    { q: 'Sans fiche individuelle, quelle consommation moyenne retient le formateur ?', c: ['90 l/min', '40 l/min', '135 l/min', '300 l/min'], e: 'Diaporama séquence 2 : 90 l/min, d’où T = P × 6 / 90 ≈ 0,07 P.', s: 'delai' },
    { q: 'Un porteur part à 300 bar et revient à 240 bar après 5 min avec une bouteille de 6 l. Sa consommation :', c: ['72 l/min', '60 l/min', '12 l/min', '360 l/min'], e: 'Q = (P0 − P1) × V / T = 60 × 6 / 5 = 72 l/min.', s: 'fiche' },
    { q: 'Un sapeur-pompier confirmé mais manquant d’entraînement au port de l’ARI est classé :', c: ['B', 'A', 'C', 'Inapte'], e: 'Fiche individuelle : A = confirmé et entraîné ; B = confirmé, manque d’entraînement ; C = trouble du comportement.', s: 'classes' },
    { q: 'De combien le gabarit thoracique du porteur augmente-t-il environ avec l’ARI ?', c: ['50 à 60 %', '5 à 10 %', '100 %', '15 à 20 %'], e: 'Texte lacunaire corrigé B1-2-3 : de l’ordre de 50 à 60 % pour la circonférence thoracique ; 15 à 20 % correspond au poids ajouté.', s: 'sensorielles' },
    { q: 'Pourquoi la thermorégulation fait-elle consommer plus d’air sous ARI ?', c: ['La sudation est freinée par les EPI, le corps compense en ventilant plus', 'L’air de la bouteille est trop froid', 'Le masque chauffe l’air inspiré', 'La bouteille se vide plus vite à la chaleur'], e: 'B1-2-3 : l’évaporation de la sueur est limitée par les EPI ; reste la ventilation, dont la fréquence augmente.', s: 'travail' },
    { q: 'À qui le chef d’agrès confie-t-il en priorité les longues reconnaissances ?', c: ['Aux personnels les plus à l’aise au port de l’ARI', 'Aux plus jeunes', 'Aux plus gradés', 'À tour de rôle sans critère'], e: 'Diaporama séquence 2 (diapo 3) et dossier B2 : les plus à l’aise / les plus performants, en priorité.', s: 'classes' }
  ]
});

/* =====================================================================================
   CE 4 — CHAPITRE 4 : composition de l’ARI
   ===================================================================================== */
VSAV.chap({
  id: 'ce-ari-composition', part: 'ce', seq: CE4,
  title: 'L’ARI : composition et matériels associés', short: 'Composition de l’ARI', motif: 'bottle',
  sources: [CE4_FOR + ', dossier B2 « Composition, principes de fonctionnement et matériels associés » (livret formateur, livret stagiaire, document B2-4)', CE4_GTO + ', chap. I § 1.1.1 et 1.3 (p. 11-21) et chap. II § 4.3 (p. 37)'],
  summary: 'Pièce faciale, harnais, bouteille, détendeur, soupape à la demande, système sonore de détresse, liaison personnelle, plaque de contrôle : à quoi sert chaque élément et ce que le chef vérifie.',
  why: '<b>Pourquoi le chef d’équipe doit-il connaître chaque pièce ?</b> Il contrôle son équipier (contrôle croisé), répond de son binôme et doit comprendre ce que signifie un sifflet, une alarme ou un débit insuffisant. Le dossier formateur B2 retient huit éléments « à argumenter » : ce sont ceux dont dépend directement la sécurité du binôme.',
  sections: [
    { id: 'elements', t: 'Les éléments et leur fonction', ic: 'list', src: CE4_FOR + ', dossier B2, livret formateur (séquence B2, activité démonstrative)',
      html: '<div class="tw"><table><thead><tr><th>Élément</th><th>Fonction et points clés</th></tr></thead><tbody>' +
        '<tr><td><b>Pièce faciale</b> (masque)</td><td>Protège et isole le porteur, canalise l’air fourni par le régulateur. Types variables selon fabricant ; la plupart ont un <b>dispositif phonique</b>. Vérifiée et nettoyée après chaque utilisation, rangée si possible en housse fermée.</td></tr>' +
        '<tr><td><b>Harnais</b></td><td>Répartit le poids, supporte les éléments de sécurité et la ou les bouteilles. Un bon réglage des sangles limite le <b>ballant d’inertie</b>.</td></tr>' +
        '<tr><td><b>Bouteille(s)</b></td><td>Réserve d’air comprimé. Marquages : fabricant, date et pression d’épreuve, pression de service, poids, capacité, nature du gaz. Respecter la pression de service ; distinguer pleines et vides par <b>bouchon ou plombage</b>. Contenance retenue par le formateur : <b>6 litres</b> d’eau.</td></tr>' +
        '<tr><td><b>Détendeur haute pression</b></td><td>Abaisse la pression à <b>6 ou 7 bar</b> avec un débit continu et régulier ; reçoit le <b>manomètre</b> et le <b>sifflet de fin de charge</b> ; alimente la SAD par le tuyau moyenne pression.</td></tr>' +
        '<tr><td><b>Soupape à la demande</b> (SAD)</td><td>Abaisse les 7 bar à une surpression de <b>1,5 à 3 millibars</b>, débit jusqu’à <b>300 l/min</b>. Un <b>by-pass</b> augmente l’arrivée d’air en cas d’effort violent ou de panique. Elle est <b>encliquetée juste avant l’engagement</b>.</td></tr>' +
        '<tr><td><b>Système sonore de détresse</b></td><td>Localise le porteur ou prévient d’un incident ; se déclenche si le porteur reste immobile un temps prédéterminé (le livret formateur indique <b>90 secondes</b>) ; déclenchable manuellement ; peut porter la plaque de contrôle.</td></tr>' +
        '<tr><td><b>Liaison personnelle</b></td><td>6 m au total ; partie courte de <b>1,25 m</b> attachée sur la ligne guide ou sur l’équipier ; le reste pour l’exploration approfondie.</td></tr>' +
        '<tr><td><b>Plaque de contrôle</b></td><td>Nom du porteur, pression à l’engagement, heure d’entrée.</td></tr>' +
        '</tbody></table></div>',
      figs: [{ img: 'img/ce/4/ari-schema.jpg', cap: 'Composition de l’ARI (corrigé du schéma muet)', txt: '<p>Masque (NF EN 136, classe 3), soupape à la demande, bouteille, détendeur HP (NF EN 137), harnais (NF EN 137), système sonore de détresse avec plaque de contrôle en option, liaison personnelle (option).</p>', src: CE4_FOR + ', dossier B2, document B2-4' }] },
    { id: 'chiffres', t: 'Les valeurs à connaître… et leurs écarts', ic: 'bolt', src: CE4_FOR + ', dossier B2 ; ' + CE4_GTO + ', chap. I § 1.1.1 et chap. II § 4.3',
      html: '<div class="tw"><table><thead><tr><th>Valeur</th><th>Dossier formateur B2</th><th>GTO 2019</th></tr></thead><tbody>' +
        '<tr><td>Moyenne pression</td><td>6 ou 7 bar</td><td>6 ou 7 bar</td></tr>' +
        '<tr><td>Déclenchement du sifflet de fin de charge</td><td><b>50 bar</b></td><td>vers <b>55 bar</b> environ</td></tr>' +
        '<tr><td>Débit de la SAD</td><td>jusqu’à <b>300 l/min</b></td><td>surpression non garantie au-delà de <b>314 l/min</b> de débit de pointe</td></tr>' +
        '<tr><td>Délai du détecteur d’immobilité</td><td><b>90 s</b></td><td>« période donnée » (non chiffrée)</td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Écart entre sources :</b> le dossier formateur (2009) et le GTO (2019) ne donnent pas les mêmes seuils. Retiens le principe commun : au <b>sifflet de fin de charge</b>, retour <b>systématique et immédiat</b> au point de pénétration.</div>' },
    { id: 'materiels', t: 'Les matériels associés (exploration)', ic: 'rope', src: CE4_FOR + ', dossier B2 (séquence B4-2) ; ' + CE4_GTO + ', chap. I § 1.3',
      html: '<p>Les porteurs vérifient aussi le matériel d’exploration : <b>lampe portative</b>, <b>ligne guide</b>, <b>liaison personnelle</b>, <b>dispositif de dérivation</b> (et système sonore de détresse). Ils vérifient que le <b>dispositif identifiant le plein</b> de la bouteille est en place et que la balise possède sa <b>plaque de contrôle</b> si elle existe.</p>' +
        '<p>La ligne de vie (ligne guide + liaison personnelle) est détaillée dans <a href="#/c/ce-ligne-vie">Ligne de vie et reconnaissance longue distance</a> ; la mécanique de l’ARI et l’autonomie selon le GTO dans <a href="#/c/inc-ari-principe">ARI : fonctionnement</a>.</p>' }
  ],
  key: ['Huit éléments clés : masque, harnais, bouteille, détendeur HP, SAD, système sonore de détresse, liaison personnelle, plaque de contrôle.', 'Détendeur HP : 6 ou 7 bar ; il porte manomètre et sifflet.', 'SAD : 1,5 à 3 mbar de surpression, by-pass, encliquetée juste avant l’engagement.', 'Sifflet : 50 bar (formateur) / 55 bar environ (GTO) → retour immédiat.', 'Détecteur d’immobilité : 90 s selon le livret formateur.', 'Bouteille pleine identifiée par bouchon ou plombage.'],
  traps: ['Encliqueter la SAD trop tôt : on consomme l’air de la bouteille avant l’engagement.', 'Prendre une bouteille sans bouchon ni plomb : rien ne garantit qu’elle est pleine.', 'Croire que le by-pass est un mode normal de respiration : il sert à l’effort violent, à la panique ou à la purge.'],
  quiz: [
    { q: 'À quelle pression le détendeur haute pression abaisse-t-il l’air de la bouteille ?', c: ['6 ou 7 bar', '1,5 à 3 millibars', '50 bar', '200 ou 300 bar'], e: 'Dossier B2 : le détendeur HP abaisse la pression à 6 ou 7 bar ; la SAD délivre ensuite 1,5 à 3 mbar de surpression.', s: 'elements' },
    { q: 'Quand la soupape à la demande doit-elle être encliquetée ?', c: ['Juste avant l’engagement', 'Dès la sortie de l’engin', 'Pendant le trajet', 'Une fois dans la fumée'], e: 'Dossier B2 : elle doit être encliquetée juste avant l’engagement.', s: 'elements' },
    { q: 'Quel élément porte le manomètre et le sifflet de fin de charge ?', c: ['Le détendeur haute pression', 'La soupape à la demande', 'Le masque', 'Le harnais'], e: 'Dossier B2 : le détendeur HP reçoit le manomètre et le sifflet de fin de charge.', s: 'elements' },
    { q: 'Selon le dossier formateur, après combien de temps d’immobilité le système sonore de détresse se déclenche-t-il ?', c: ['90 secondes', '10 secondes', '5 minutes', '30 minutes'], e: 'Livret formateur B2 : temps prédéterminé de 90 secondes ; le GTO parle seulement d’une « période donnée ».', s: 'elements' },
    { q: 'À quoi sert le by-pass de la SAD selon le dossier B2 ?', c: ['Augmenter l’arrivée d’air en cas d’effort violent ou de panique', 'Couper l’air du masque', 'Alimenter le manomètre', 'Déclencher la balise'], e: 'Dossier B2 : le système by-pass augmente l’arrivée d’air en cas d’effort violent ou de panique.', s: 'elements' },
    { q: 'Le sifflet de fin de charge se déclenche à 50 bar selon le formateur ; et selon le GTO 2019 ?', c: ['Vers 55 bar environ', 'À 100 bar', 'À 270 bar', 'À 10 bar'], e: 'GTO chap. II § 4.3 : en dessous de 55 bar environ ; retour systématique et immédiat.', s: 'chiffres' }
  ]
});

/* =====================================================================================
   CE 4 — CHAPITRE 5 : règles de base d’emploi et procédure opérationnelle
   ===================================================================================== */
VSAV.chap({
  id: 'ce-ari-regles', part: 'ce', seq: CE4,
  title: 'Règles de base d’emploi et procédure opérationnelle ARI', short: 'ARI : règles et procédure', motif: 'check',
  sources: [CE4_FOR + ', séquence B3 « Règles de base d’emploi et de sécurité » (livret formateur, cours, livret stagiaires)', CE4_FOR + ', séquence 2 « Procédure opérationnelle avant, pendant, après » (diaporama 17 diapos) et dossier B2 (séquence B4-2)', CE4_GTO + ', chap. II § 3-4 (p. 33-37)'],
  summary: 'Les règles immuables avant, pendant et après l’engagement, leur justification, et qui fait quoi : chef d’agrès, contrôleur, porteurs.',
  why: '<b>Pourquoi des règles « immuables » ?</b> Le cours B3 les présente comme <b>immuables, non exhaustives, à respecter par chaque porteur</b>. Le livret formateur donne pour chacune sa <b>justification</b> : le chef d’équipe qui sait <i>pourquoi</i> une règle existe la fait respecter à son équipier sans discussion, même dans l’urgence.',
  sections: [
    { id: 'avant', t: 'Avant l’engagement', ic: 'check', src: CE4_FOR + ', B3 cours (diapos 5-6) et livret formateur (justifications)',
      html: '<div class="tw"><table><thead><tr><th>Règle</th><th>Pourquoi (livret formateur B3)</th></tr></thead><tbody>' +
        '<tr><td><b>Toujours</b> vérifier le bon état du masque avant de capeler</td><td>Un défaut non vu met le porteur en danger.</td></tr>' +
        '<tr><td><b>Toujours</b> vérifier l’armement du sifflet à l’ouverture de la bouteille</td><td>Un sifflet muet signale un dysfonctionnement du dispositif de fin de charge.</td></tr>' +
        '<tr><td><b>Toujours</b> contrôler la pression au manomètre</td><td>Elle permet de calculer le temps d’engagement du binôme.</td></tr>' +
        '<tr><td><b>Toujours</b> établir un code d’alerte (sonore, filaire, radio)</td><td>Il relie les membres du binôme entre eux et au contrôleur.</td></tr>' +
        '<tr><td><b>Toujours</b> capeler à l’air frais, hors zone à risque, et contrôler l’étanchéité du masque</td><td>—</td></tr>' +
        '<tr><td><b>Jamais</b> intervertir les masques d’un type d’appareil à l’autre</td><td>Mauvais fonctionnement possible de la soupape d’expiration ; homologation non respectée.</td></tr>' +
        '<tr><td><b>Jamais</b> pénétrer sous <b>180 bar</b> (ARICO à 200 bar) ou <b>280 bar</b> (ARICO à 300 bar)</td><td>Risque d’un retour trop précoce du porteur.</td></tr></tbody></table></div>' },
    { id: 'pendant', t: 'Pendant l’engagement', ic: 'team', src: CE4_FOR + ', B3 cours (diapo 8) et livret formateur ; dossier B2 (séquence B4-2)',
      html: '<ul class="check"><li><b>Enregistrer et surveiller</b> les binômes : les plaques de contrôle sont données au contrôleur pour qu’il les renseigne (meilleure gestion et surveillance des engagements).</li>' +
        '<li>Un binôme engagé est <b>indissociable</b> : on ne laisse jamais un équipier seul sous ARI.</li>' +
        '<li><b>Assurer la communication</b> dans le binôme et avec le contrôleur (radio, corne de brume…).</li>' +
        '<li><b>Utiliser la ligne de vie</b> : rester accroché à la ligne guide en permanence (retour d’urgence, sauvetage par un autre binôme). L’établissement réalisé peut servir de ligne guide.</li>' +
        '<li>Le binôme <b>ressort</b> au déclenchement du <b>sifflet de fin de charge</b> ou du <b>système sonore de détresse</b>. Les équipes qui sortent sont <b>prioritaires</b>.</li></ul>' },
    { id: 'apres', t: 'Après l’engagement', ic: 'reset', src: CE4_FOR + ', B3 cours (diapo 10) et livret formateur (justifications)',
      html: '<ul class="check"><li>Nettoyer et vérifier le <b>masque</b>, puis tous les éléments (bouteille, masque, harnais, tuyauterie) : on relève les défauts avant qu’ils ne provoquent un dysfonctionnement.</li>' +
        '<li>Vérifier l’état des bouteilles, les <b>remplir</b> et vérifier la pression : on s’assure qu’elles atteignent la pression minimale d’engagement.</li>' +
        '<li><b>Plomber</b> et remettre <b>bouchons et plaques de contrôle</b> : cela garantit au prochain porteur que l’appareil est opérationnel.</li>' +
        '<li>Ranger le matériel à son emplacement d’origine.</li>' +
        '<li><b>Retirer</b> tout matériel ayant subi une agression chimique ou thermique importante et le faire contrôler (fabricant ou laboratoire notifié).</li></ul>' +
        '<p class="small muted">Compte rendu de sortie, récupération et réengagement : <a href="#/c/inc-ari-apres">chapitre équipier</a>.</p>' },
    { id: 'roles', t: 'Procédure opérationnelle : qui fait quoi ?', ic: 'list', src: CE4_FOR + ', séquence 2, diaporama (diapos 3 à 10) ; dossier B2 (séquence B4-2)',
      html: '<div class="tw"><table><thead><tr><th>Acteur</th><th>Missions</th></tr></thead><tbody>' +
        '<tr><td><b>Chef d’agrès</b></td><td>Après reconnaissance, décide de la technique et <b>désigne</b> le personnel (porteurs d’ARI), le <b>point d’entrée</b> et le <b>contrôleur</b>. Connaît l’aptitude de ses personnels pour des binômes homogènes.</td></tr>' +
        '<tr><td><b>Contrôleur</b></td><td>Enregistre les binômes ; regroupe et renseigne les plaques ; établit le code de communication ; désigne la fonction des binômes (<b>exploration</b> ou <b>sécurité</b>) ; complète le tableau de contrôle (heure de rappel, sortie prévisible) ; vérifie masques et appareils compatibles, ARI du binôme de <b>même type</b>, capelage hors zone viciée ; contrôle <b>un seul point d’accès</b> ; supervise <b>10 porteurs au maximum, soit 5 binômes dont celui de sécurité</b> ; fait assurer l’approvisionnement en bouteilles ; garde un binôme de sécurité prêt ; reste en relation avec le COS ; prend les mesures d’urgence.</td></tr>' +
        '<tr><td><b>Porteurs</b> (chef d’équipe et équipier)</td><td>Vérifient leur matériel et le matériel d’exploration, ne permutent jamais les masques, capèlent hors zone, effectuent le <b>R.A.P.A.C.E</b>.</td></tr></tbody></table></div>' +
        '<p>Dans un souci de rapidité, le dossier B2 admet que la <b>première reconnaissance</b> soit effectuée sans binôme de sécurité, celui-ci devant être mis en place <b>le plus rapidement possible</b>. Le GTO prévoit qu’un <b>sauvetage</b> peut justifier l’envoi immédiat d’un binôme sans contrôleur ni binôme de sécurité, l’information du chef d’agrès et l’enregistrement restant primordiaux.</p>',
      figs: [{ img: 'img/ce/4/plaque-controle.jpg', cap: 'La plaque de contrôle', txt: '<p>Le chef de binôme remet les plaques au contrôleur : nom du porteur, pression à l’engagement, heure d’entrée.</p>', src: CE4_FOR + ', séquence 2, diaporama, diapo 4' },
        { img: 'img/ce/4/tableau-controle.jpg', cap: 'Le tableau de contrôle', txt: '<p>Nom du contrôleur, point d’accès, heure de rappel, plaques de chaque binôme avec l’heure de sortie prévisible ; la dernière rangée est réservée au binôme de sécurité.</p>', src: CE4_FOR + ', séquence 2, diaporama, diapo 5' }] },
    { id: 'rapace', t: 'Le R.A.P.A.C.E et le code de communication', ic: 'shield', src: CE4_FOR + ', séquence 2, diaporama (diapo 10) ; dossier B2 (séquence B4-2)',
      html: '<div class="tw"><table><thead><tr><th>Lettre</th><th>Contenu (dossier formateur)</th></tr></thead><tbody>' +
        '<tr><td><b>R</b></td><td>Ouverture complète du (des) robinet(s)</td></tr>' +
        '<tr><td><b>A</b></td><td>Ajustement du harnais</td></tr>' +
        '<tr><td><b>P</b></td><td>Pression au manomètre (≥ 180 bar ou ≥ 280 bar selon la pression maximale des bouteilles)</td></tr>' +
        '<tr><td><b>A</b></td><td>Armement des signaux sonores (sifflet de fin de charge, système sonore de détresse)</td></tr>' +
        '<tr><td><b>C</b></td><td>Code de communication, défini avec le contrôleur (« immuable »)</td></tr>' +
        '<tr><td><b>E</b></td><td>Étanchéité du masque</td></tr></tbody></table></div>' +
        '<div class="callout bad"><b>Code de détresse immuable</b> : c’est le déclenchement du <b>signal sonore de détresse</b>. Quand il retentit, <b>tous les binômes engagés rejoignent la sortie</b> et le contrôleur engage immédiatement le binôme de sécurité. D’autres moyens existent : radio UHF, liaison audio-filaire intégrée à la ligne guide, radio intégrée au casque.</div>' +
        '<div class="callout warn"><b>Écarts entre sources :</b> pression minimale <b>280 bar</b> (bouteille 300 bar) pour le dossier formateur, <b>270 bar</b> (nominale − 10 %) pour le GTO 2019. Contrôleur : « 10 porteurs, soit <b>5 binômes dont celui de sécurité</b> » (formateur) contre « 10 porteurs, soit <b>4 binômes et le binôme de sécurité</b> » (GTO). Le GTO ajoute un <b>tableau de gestion des reconnaissances</b> (TGR) et l’engagement du binôme de sécurité <b>sans préavis</b> si le temps prévu est dépassé. Applique la consigne de ton encadrement.</div>' +
        '<p class="small muted">Contrôle croisé et habillage selon le GTO : <a href="#/c/inc-ari-avant">ARI : avant l’engagement</a>.</p>' }
  ],
  key: ['Règles immuables, non exhaustives, pour chaque porteur.', 'Jamais intervertir les masques ; jamais entrer sous 180 bar (200 bar) ou 280 bar (300 bar) selon le formateur.', 'Plaques au contrôleur ; binôme indissociable ; accroché à la ligne guide en permanence.', 'Le chef d’agrès désigne personnel, point d’entrée, contrôleur.', 'Contrôleur : 1 point d’accès, 10 porteurs maximum.', 'Signal sonore de détresse = tous les binômes sortent, le binôme de sécurité entre.', 'Après : nettoyer, remplir, plomber, ranger, retirer le matériel agressé.'],
  traps: ['Garder sa plaque de contrôle sur soi : le contrôleur ne sait plus qui est engagé ni depuis quand.', 'Engager un binôme avec deux ARI de types différents.', 'Continuer sa reconnaissance quand une balise de détresse retentit : tous les binômes sortent.', 'Remettre une bouteille sans plomb ni bouchon dans l’engin.'],
  quiz: [
    { q: 'Pourquoi ne faut-il jamais intervertir les masques d’un type d’appareil à l’autre ?', c: ['Risque de dysfonctionnement de la soupape d’expiration et homologation non respectée', 'Pour des raisons d’hygiène uniquement', 'Parce que les tailles diffèrent', 'Pour ne pas fausser le manomètre'], e: 'Livret formateur B3 : intervertir peut entraîner un dysfonctionnement de la soupape d’expiration et un non-respect de l’homologation.', s: 'avant' },
    { q: 'Selon le dossier formateur, pression minimale d’engagement d’un ARICO rempli à 200 bar :', c: ['180 bar', '200 bar', '150 bar', '270 bar'], e: 'Cours B3 : 180 bar pour les ARICO à 200 bar, 280 bar pour les ARICO à 300 bar.', s: 'avant' },
    { q: 'Qui désigne le point d’entrée et le contrôleur ?', c: ['Le chef d’agrès', 'Le chef d’équipe', 'Le contrôleur lui-même', 'Le binôme de sécurité'], e: 'Diaporama séquence 2 (diapo 3) : le chef d’agrès désigne le personnel, le point d’entrée et le contrôleur.', s: 'roles' },
    { q: 'Un signal sonore de détresse retentit. Que font les autres binômes engagés ?', c: ['Ils rejoignent la sortie', 'Ils partent chercher le binôme en difficulté', 'Ils poursuivent leur mission', 'Ils coupent leur propre balise'], e: 'Diaporama séquence 2 et dossier B2 : tous les binômes engagés rejoignent la sortie ; le contrôleur engage le binôme de sécurité.', s: 'rapace' },
    { q: 'Pourquoi plomber et reboucher les bouteilles après usage ?', c: ['Pour garantir au prochain porteur que l’appareil est opérationnel', 'Pour éviter le vol', 'Pour faciliter le gonflage', 'Pour indiquer la date d’épreuve'], e: 'Livret formateur B3 : la présence du plomb et du bouchon assure au prochain porteur que l’appareil est opérationnel.', s: 'apres' },
    { q: 'Que vérifie le contrôleur concernant les deux ARI d’un même binôme ?', c: ['Qu’ils sont de même type', 'Qu’ils ont exactement la même pression', 'Qu’ils ont la même date d’épreuve', 'Qu’ils viennent du même engin'], e: 'Diaporama séquence 2 (diapo 8) : masque et appareil compatibles, ARI du binôme de même type, capelés hors zone.', s: 'roles' },
    { q: 'Que représente le « C » du R.A.P.A.C.E dans le dossier formateur ?', c: ['Le code de communication, défini avec le contrôleur', 'Le contrôle croisé', 'La cagoule', 'Le casque'], e: 'Dossier B2 : C = code de communication à définir avec le contrôleur ; le code de détresse reste immuable.', s: 'rapace' }
  ]
});

/* =====================================================================================
   CE 4 — CHAPITRE 6 : ligne de vie et reconnaissance longue distance
   ===================================================================================== */
VSAV.chap({
  id: 'ce-ligne-vie', part: 'ce', seq: CE4,
  title: 'Ligne de vie et reconnaissance longue distance', short: 'Ligne de vie, longue distance', motif: 'rope',
  sources: [CE4_FOR + ', séquence 1 « Composition d’une ligne de vie » (guide formateur, livret apprenant, vrai/faux corrigé)', CE4_FOR + ', séquence 2, diaporama (diapos 11 à 15) ; dossier B2 (séquence B4-2, extraits du GNR)', CE4_FOR + ', séquence 3 « Reconnaissance longue distance » (fiche séquentielle, fiche d’activité, grille d’évaluation formative) ; B5 « Exercice en cave à fumée » (fiche séquentielle, fiche d’activité B5-3)', CE4_GTO + ', chap. I § 1.3.1 (p. 18-21) et chap. III § 1 (p. 39-47)'],
  summary: 'Ligne guide, liaison personnelle, tableau et plaques de contrôle, dérivation ; les quatre manœuvres (simple reconnaissance, latérale, opération complexe, dérivation) et ce sur quoi le chef d’équipe est évalué.',
  why: '<b>Pourquoi tant de rigueur sur une simple corde ?</b> Dans une fumée opaque et sur une longue distance, la ligne de vie est le <b>seul lien physique</b> entre le binôme, la sortie et le contrôleur. Le chef d’équipe donne la direction et explore ; l’équipier tend la ligne et réalise les amarrages. La grille d’évaluation le rappelle : la rapidité ne doit <b>jamais</b> être privilégiée au détriment de la sécurité.',
  sections: [
    { id: 'composition', t: 'Composition de la ligne de vie', ic: 'list', src: CE4_FOR + ', séquence 1 (livret apprenant, vrai/faux corrigé) ; dossier B2 (extraits du GNR)',
      html: '<div class="callout ok"><b>Ligne de vie = ligne guide + liaison personnelle.</b></div>' +
        '<div class="tw"><table><thead><tr><th>Élément</th><th>Caractéristiques</th></tr></thead><tbody>' +
        '<tr><td><b>Ligne guide</b></td><td>Permet de revenir facilement au point d’entrée et relie les porteurs au <b>contrôleur resté à l’extérieur</b>. Longueur <b>50 à 60 m</b>, repères <b>tous les 2,50 m</b> (nœuds ou olives). Une olive ou une petite drisse indique la sortie (moyen mnémotechnique : « se mettre sur son <b>31</b> pour sortir »). Elle ne sert pas à arrimer du matériel.</td></tr>' +
        '<tr><td><b>Liaison personnelle</b></td><td>Portée par <b>les deux</b> membres du binôme. Longueur totale <b>6 m</b> en deux parties : <b>1,25 m</b> (liaison courte) attachée sur la ligne guide ou sur l’équipier ; le reste pour l’exploration approfondie. Exemple de matériel : enrouleur automatique de 4,75 m.</td></tr>' +
        '<tr><td><b>Tableau de contrôle</b></td><td>Regroupe les plaques et suit le personnel engagé (nombre de porteurs, temps d’engagement).</td></tr>' +
        '<tr><td><b>Plaque de contrôle</b></td><td>Nom du porteur, pression à l’engagement, heure d’entrée.</td></tr>' +
        '<tr><td><b>Dispositif de dérivation</b></td><td>Plaques ou clés permettant des ramifications à partir de la ligne guide.</td></tr></tbody></table></div>',
      figs: [{ img: 'img/ce/4/lignes-guides.jpg', cap: 'Lignes guides et repères', txt: '<p>Ligne guide en sac ou sur tambour. En bas, les repères : vers la sortie (« VIE ») et vers l’intervention (« INCENDIE »), lus selon l’ordre des olives rencontrées.</p>', src: CE4_FOR + ', dossier B2 (extrait du GNR)' },
        { img: 'img/ce/4/liaisons-perso.jpg', cap: 'La liaison personnelle', txt: '<p>Liaison courte de 1,25 m et enrouleur ; en position 1,25 m, puis déployée de 1,25 m à 6 m pour explorer en restant relié à la ligne guide.</p>', src: CE4_FOR + ', dossier B2 (extrait du GNR)' }] },
    { id: 'manoeuvres', t: 'Les quatre manœuvres sur ligne de vie', ic: 'walk', src: CE4_FOR + ', séquence 2, diaporama (diapos 11 à 14) ; séquence 3, fiche d’activité ; dossier B2 (séquence B4-2)',
      html: '<div class="tw"><table><thead><tr><th>Manœuvre</th><th>Chef d’équipe</th><th>Équipier</th></tr></thead><tbody>' +
        '<tr><td><b>Simple reconnaissance</b></td><td>Relié à l’<b>équipier</b> par 1,25 m de sa liaison.</td><td>Relié à la <b>ligne guide</b> par 1,25 m de sa liaison.</td></tr>' +
        '<tr><td><b>Travaux sur place</b> (ou attaque)</td><td colspan="2">Chacun relié <b>individuellement</b> à la ligne guide par sa liaison courte (1,25 m).</td></tr>' +
        '<tr><td><b>Reconnaissance latérale</b></td><td>Relié à l’équipier par les <b>6 m</b> de sa liaison : il explore les pièces sans se désolidariser de la ligne guide.</td><td>Relié à la ligne guide, déroulée dans le couloir, par sa liaison <b>courte</b>.</td></tr>' +
        '<tr><td><b>Opération complexe / dérivation</b></td><td colspan="2">Les équipes qui <b>sortent</b> sont prioritaires sur celles qui pénètrent ; des ramifications (ligne guide n° 2) sont installées sur la ligne n° 1 au moyen des <b>dispositifs de dérivation</b>.</td></tr></tbody></table></div>',
      figs: [{ img: 'img/ce/4/modes-liaison.jpg', cap: 'Simple reconnaissance, travaux sur place, reconnaissance latérale', txt: '<p>À gauche, l’équipier tient la ligne guide, le chef est attaché à lui ; au centre, chacun est attaché à la ligne guide pour travailler ; à droite, le chef s’éloigne sur sa liaison longue pendant que l’équipier reste sur la ligne.</p>', src: CE4_FOR + ', séquence 2, diaporama, diapos 11 à 13' },
        { img: 'img/ce/4/derivation.jpg', cap: 'Opération complexe : dérivation', txt: '<p>Une plaque de dérivation fixée sur la ligne guide n° 1 permet d’y accrocher une ligne guide n° 2.</p>', src: CE4_FOR + ', séquence 2, diaporama, diapo 14' }] },
    { id: 'pose', t: 'Poser et utiliser la ligne guide', ic: 'pin', src: CE4_FOR + ', dossier B2 (séquence B4-2) ; séquence 3, fiche d’activité',
      html: '<ul class="check"><li>La ligne guide est placée pour garantir un retour <b>sûr et rapide</b> ; elle est <b>amarrée régulièrement</b> à des points fixes, <b>ni trop bas ni trop haut</b>.</li>' +
        '<li>Elle doit être <b>amarrée avant de faire demi-tour</b>.</li>' +
        '<li>Le binôme reste <b>solidaire</b> ; il ressort au <b>sifflet de fin de charge</b> ou au <b>système sonore de détresse</b>.</li>' +
        '<li>Objectif de l’<b>équipier</b> : tendre au mieux sa ligne guide, réaliser au mieux ses points d’amarrage, rester <b>tout le temps sur sa liaison courte</b>.</li>' +
        '<li>Objectif du <b>chef d’équipe</b> : respecter la <b>direction donnée</b>, communiquer, gérer le stress du binôme.</li></ul>' },
    { id: 'evaluation', t: 'Ce sur quoi le chef d’équipe est évalué', ic: 'star', src: CE4_FOR + ', séquence 3 (grille d’évaluation formative, fiche séquentielle) ; dossier B2 (grille B4-2-1)',
      html: '<p><b>Grille d’évaluation formative du chef d’équipe</b> (séquence 3) — OUI / NON :</p>' +
        '<ol><li>S’équipe correctement</li><li>Effectue le R.A.P.A.C.E</li><li>Effectue un contrôle croisé</li><li>S’engage en toute sécurité</li><li>Communique avec son binôme</li><li>Évolue à l’aise avec l’ARI</li></ol>' +
        '<div class="callout warn"><b>1 NON en case grisée</b> ou <b>2 NON</b> sur l’ensemble = non validé. Les cases grisées ne sont pas identifiables dans la version texte du document. La mise en œuvre doit se faire « dans des délais raisonnables », mais <b>la rapidité ne doit en aucun cas être privilégiée au détriment de la sécurité</b>.</div>' +
        '<p>« Ce qu’il faut retenir » de la séquence : mise en place de la ligne de vie (points d’amarrage, nœuds), respect du GNR, communication, gestion du stress, connaître les <b>4 manœuvres</b>, respect de la liaison courte, respect de la direction donnée.</p>' +
        '<p>La grille B4-2-1 (évaluation de l’équipier, mauvais à excellent) ajoute : s’équiper <b>sans geste d’énervement</b>, nœuds d’amarrage corrects, établir sans peine une dérivation, agir rapidement avec efficacité, <b>savoir retrouver son chemin</b>.</p>' },
    { id: 'exercice', t: 'L’exercice : reconnaissance longue distance et cave à fumée', ic: 'target', src: CE4_FOR + ', séquence 3 (fiche d’activité) ; B5 (fiche séquentielle, fiche d’activité B5-3)',
      steps: ['Chaque binôme est accueilli à l’entrée de la pièce enfumée, porte fermée.', 'Le contrôle croisé est effectué pendant l’équipement, ainsi que toutes les règles avant l’engagement ; une règle non appliquée arrête la manœuvre.', 'La mission est donnée au binôme ; on s’assure qu’elle est bien comprise, puis la porte est ouverte pour l’engagement.', 'La bonne évolution du binôme et le respect des règles sont surveillés pendant l’engagement.', 'À la sortie, point sur la mission avec le binôme.', 'En cave à fumée (B5) : remise en état du matériel et prise en charge du binôme par le SSSM à la sortie.'], stepsTitle: 'Déroulé d’un passage (6)',
      html: '<p>Séquence 3 : en binôme sous ARI, mettre en place la ligne de vie en <b>simple reconnaissance</b>, <b>reconnaissance latérale</b>, <b>opération complexe</b> et <b>dérivation</b>. Séquence B5 : trouver et <b>fermer une vanne</b> dans une pièce enfumée ; on y travaille les contraintes <b>visuelles, auditives et psychologiques</b> et un comportement adapté au travail en binôme.</p>' },
    { id: 'gto', t: 'Ce que dit le GTO 2019 (écarts avec les documents formateur)', ic: 'alert', src: CE4_GTO + ', chap. I § 1.3.1 (p. 18-21), chap. II § 3.2 et 4 (p. 33-37), chap. III § 1.2 à 1.4 (p. 40-47), bibliographie',
      html: '<div class="tw"><table><thead><tr><th>Point</th><th>Documents formateur (GNR)</th><th>GTO 2019</th></tr></thead><tbody>' +
        '<tr><td>Ligne guide</td><td>50 à 60 m, repères tous les 2,50 m</td><td>50 à 60 m, diamètre 6 à 8 mm, repères de progression</td></tr>' +
        '<tr><td>Repères</td><td>« Une olive ou une petite drisse indique la sortie » (« 31 »)</td><td>1 olive isolée en 2<sup>e</sup> = sortie (« vie ») ; 3 olives en 2<sup>e</sup> = sinistre (« in-cen-die »)</td></tr>' +
        '<tr><td>Liaison personnelle</td><td>6 m dont 1,25 m de liaison courte</td><td>6 m, diamètre 4 mm, version courte 1,25 m ou longue 6 m</td></tr>' +
        '<tr><td>Reconnaissance latérale</td><td>Chef relié à l’équipier par 6 m, équipier sur la ligne guide en liaison courte</td><td>Deux modes : <b>dissocié</b> (identique) ou <b>associé</b> (binôme relié par la liaison courte du chef, liaison de l’équipier déployée jusqu’à 6 m) ; jamais les deux liaisons longues en même temps (sauf victime avérée)</td></tr>' +
        '<tr><td>Dérivations</td><td>Possibles sur la ligne guide</td><td>Jusqu’à <b>3</b> sur la ligne guide, surtout en grands volumes</td></tr>' +
        '<tr><td>Durée d’engagement</td><td>Calcul T = P × V / Q</td><td>Ligne de vie : <b>15 à 25 min</b> ; latérale et circulaire : 25 min maximum</td></tr>' +
        '<tr><td>Établissement comme ligne guide</td><td>Autorisé</td><td>Tuyau de 45 mm, établissement &lt; 40 m depuis la prise d’eau</td></tr>' +
        '<tr><td>Suivi</td><td>Tableau de contrôle</td><td>Tableau de gestion des reconnaissances (TGR, annexe C)</td></tr>' +
        '<tr><td>Longue durée</td><td>Reconnaissance longue distance au-delà de 20 m (exposé A1 bis)</td><td>Groupe d’exploration longue durée (GELD) : au minimum un chef et deux binômes, sur décision du COS</td></tr></tbody></table></div>' +
        '<div class="callout warn">Les documents formateur s’appuient sur le <b>GNR ARI</b>, que le GTO 2019 cite dans sa bibliographie comme « Guide national de référence » de <b>1999</b>. Le GTO, plus récent, ne dit pas explicitement qu’il le remplace. Les principes sont communs (ligne de vie, liaison courte, binôme indissociable), mais les détails divergent : <b>applique la consigne de ton encadrement</b>. Rappel côté équipier : <a href="#/c/inc-ari-engagement">ARI : pendant l’engagement</a>.</div>' }
  ],
  key: ['Ligne de vie = ligne guide + liaison personnelle (portée par les deux).', 'Ligne guide 50 à 60 m, repères tous les 2,50 m ; « 31 » pour sortir.', 'Liaison personnelle 6 m dont 1,25 m de liaison courte.', 'Simple reconnaissance : équipier sur la ligne (1,25 m), chef sur l’équipier (1,25 m).', 'Latérale : chef sur l’équipier par 6 m ; travaux sur place : chacun sur la ligne en liaison courte.', 'Amarrer la ligne avant de faire demi-tour ; les sortants sont prioritaires.', 'Grille CE : 1 NON grisé ou 2 NON = non validé ; jamais la vitesse avant la sécurité.'],
  traps: ['Lâcher la liaison courte de l’équipier pour « aller plus vite » : il doit rester tout le temps dessus.', 'Faire demi-tour sans amarrer la ligne guide.', 'Déployer les deux liaisons longues en même temps (GTO) : zones non explorées.', 'Confondre les codes de repères des documents formateur et du GTO.'],
  quiz: [
    { q: 'Longueur d’une ligne guide :', c: ['50 à 60 m', '70 m', '20 m', '100 m'], e: 'Vrai/faux corrigé séquence 1 : « 70 m » est faux ; 50 à 60 m (même valeur dans le GTO).', s: 'composition' },
    { q: 'Tous les combien de mètres la ligne guide porte-t-elle un repère (documents formateur) ?', c: ['2,50 m', '1,25 m', '6 m', '10 m'], e: 'Livret apprenant séquence 1 : repères tous les 2,50 m (nœuds ou olives).', s: 'composition' },
    { q: 'Qui porte une liaison personnelle ?', c: ['Les deux membres du binôme', 'Le chef d’équipe seulement', 'L’équipier seulement', 'Le contrôleur'], e: 'Vrai/faux corrigé séquence 1 : « n’est portée que par le chef » est faux ; les deux.', s: 'composition' },
    { q: 'En simple reconnaissance, comment le chef d’équipe est-il relié ?', c: ['À l’équipier, par 1,25 m de sa liaison', 'Directement à la ligne guide par 6 m', 'Au contrôleur par la ligne guide', 'Il n’est pas relié'], e: 'Diaporama séquence 2 (diapo 11) : l’équipier est relié à la ligne guide par 1,25 m ; le chef à l’équipier par la même longueur.', s: 'manoeuvres' },
    { q: 'En reconnaissance latérale (documents formateur), le chef est relié à l’équipier par :', c: ['Les 6 m de sa liaison', '1,25 m', 'Une seconde ligne guide', 'Un tuyau alimenté'], e: 'Diaporama séquence 2 (diapo 13) : le chef est relié à l’équipier par les 6 m ; l’équipier reste sur la ligne guide en liaison courte.', s: 'manoeuvres' },
    { q: 'Que doit-on faire avant de faire demi-tour sur une ligne guide ?', c: ['L’amarrer', 'La couper', 'La déposer au sol', 'La rembobiner entièrement'], e: 'Dossier B2 (séquence B4-2) : la ligne guide doit être amarrée avant de faire demi-tour.', s: 'pose' },
    { q: 'Grille d’évaluation du chef d’équipe : quand le candidat n’est-il pas validé ?', c: ['1 NON en case grisée ou 2 NON au total', 'Dès 1 NON quelconque', 'À partir de 3 NON', 'S’il dépasse le temps imparti'], e: 'Grille séquence 3 : 1 NON en case grisée ou 2 NON sur l’ensemble ; la rapidité ne prime jamais sur la sécurité.', s: 'evaluation' },
    { q: 'Selon le GTO 2019, combien de dérivations peut-on effectuer sur une ligne guide ?', c: ['Jusqu’à 3', 'Une seule', 'Jusqu’à 10', 'Aucune limite'], e: 'GTO chap. I § 1.3.1 : jusqu’à 3 dérivations, principalement en grands volumes.', s: 'gto' }
  ]
});
