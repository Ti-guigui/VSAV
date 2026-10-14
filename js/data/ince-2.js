/* CHEF D’ÉQUIPE INCENDIE — fichier 2 : CE INC 3 (manœuvres ARI) et CE INC 4 (manœuvres incendie M1 à M6)
   Sources : dossier « 4 - INC / 2 - Chef d’équipe INC » du SDIS 51 — DOC FORMATEUR CE INC, PARTIE E (manœuvres ARI :
   ligne de vie, procédure opérationnelle, reconnaissance longue distance, B1-1, B1-2, B2, B3, B5, exposé A 1 bis) et
   PARTIE G (document formateur M1 à M6, grilles d’évaluation formative, diaporamas « manœuvre binôme ») ;
   comparaisons ponctuelles avec le GTO Engagement en milieu vicié (DGSCGC, 2019) et le livret stagiaire Chef d’équipe incendie (v2019.1).
   Le niveau Équipier (ARI, engagement en milieu vicié, établissements) est traité dans inc-3.js et inc-4.js. */
var INCE_2_SEQ_ARI = 'CE INC 3 — Manœuvres ARI';
var INCE_2_SEQ_MAN = 'CE INC 4 — Manœuvres incendie';
var INCE_2_PE = 'SDIS 51, doc. formateur CE INC, partie E';
var INCE_2_PG = 'SDIS 51, doc. formateur CE INC, partie G';
var INCE_2_GTO = 'GTO Engagement en milieu vicié (DGSCGC, 2019)';
var INCE_2_DOSSIER = INCE_2_PE + ', B2 « dossier complet » (livrets formateur et stagiaire ARI)';
var INCE_2_DOCM = INCE_2_PG + ', « Rôle du binôme dans différentes manœuvres incendie » (document formateur M1 à M6)';
var INCE_2_GRILLES = INCE_2_PG + ', grilles d’évaluation formative « Chef d’équipe » M1 à M6';

/* =====================================================================================
   CE INC 3 — CHAPITRE 1 : atmosphères non respirables (B1-1)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-ari-atmospheres', part: 'ince', seq: INCE_2_SEQ_ARI,
  title: 'Les atmosphères non respirables', short: 'Atmosphères non respirables', motif: 'molecule',
  sources: [INCE_2_PE + ', séquence B1-1 : diaporama commenté « Atmosphères non respirables » (FOR 2A/B, 2009)', 'Document stagiaire B1-1-5 et questionnaire Vrai/Faux corrigé B1-1-4', 'Fiche séquentielle « Atmosphères non respirables »'],
  summary: 'Définitions, composition de l’air, fumées d’incendie (ambiance chaude) et épandages toxiques (ambiance froide) : pourquoi l’ARI, et jusqu’à quand.',
  why: '<b>Pourquoi le chef d’équipe doit-il maîtriser ces notions ?</b> Il est personnellement responsable de la sécurité individuelle au sein de son binôme, notamment du respect des règles d’engagement sous ARI (livret CE). Comprendre qu’une atmosphère peut tuer <b>même froide</b>, et <b>même après l’extinction</b>, c’est savoir refuser que son équipier retire son masque au déblai ou dans un local mal ventilé.',
  sections: [
    { id: 'defs', t: 'Quelques définitions', ic: 'book', src: 'Diaporama B1-1, diapositives « Quelques définitions » ; document stagiaire B1-1-5',
      html: '<p>Les définitions donnent des termes précis pour analyser le danger (commentaire formateur du diaporama).</p>' +
        '<div class="tw"><table><thead><tr><th>Terme</th><th>Définition (SDIS 51)</th></tr></thead><tbody>' +
        '<tr><td>Aérosol</td><td>Suspension dans un milieu gazeux de particules solides ou liquides ayant une vitesse de chute <b>inférieure à 0,25 m/s</b></td></tr>' +
        '<tr><td>Air respirable</td><td>Air approprié à la respiration</td></tr>' +
        '<tr><td>Brouillard</td><td>Suspension de gouttelettes dans un gaz</td></tr>' +
        '<tr><td>Fumée</td><td>Ensemble de gaz de combustion et des particules entraînées par ceux-ci</td></tr>' +
        '<tr><td>Impureté</td><td>Matière solide, liquide ou gazeuse, indésirable dans l’air</td></tr>' +
        '<tr><td>Particule</td><td>Petite partie de matière solide ou liquide</td></tr>' +
        '<tr><td>Poussière</td><td>Particules solides de dimensions et de provenance diverses, qui peuvent généralement rester un certain temps dans l’air</td></tr>' +
        '<tr><td>Vapeur</td><td>Phase gazeuse d’une substance qui est solide ou liquide à <b>20 °C et 1 bar absolu</b></td></tr>' +
        '</tbody></table></div>' },
    { id: 'air', t: 'La composition de l’air et la norme NF EN 12021', ic: 'lungs', src: 'Diaporama B1-1, diapositives « La composition de l’air » et commentaire formateur',
      html: '<div class="tw"><table><thead><tr><th>Air ambiant (diaporama)</th><th>Part</th></tr></thead><tbody>' +
        '<tr><td>Azote</td><td><b>78 %</b></td></tr><tr><td>Oxygène</td><td><b>21 %</b></td></tr>' +
        '<tr><td>Autres gaz</td><td><b>1 %</b>, dont 0,9 % d’argon et 0,035 % de gaz carbonique</td></tr></tbody></table></div>' +
        '<p>La norme <b>NF EN 12021</b> (air respirable des appareils) doit garantir au porteur :</p>' +
        '<div class="tw"><table><thead><tr><th>Constituant</th><th>Exigence (commentaire du diaporama)</th></tr></thead><tbody>' +
        '<tr><td>Oxygène</td><td><b>21 % ± 1 %</b> en volume (air sec)</td></tr>' +
        '<tr><td>Dioxyde de carbone (CO₂)</td><td>teneur faible : ne doit pas excéder <b>500 mg/m³ (500 ppm)</b></td></tr>' +
        '<tr><td>Monoxyde de carbone (CO)</td><td>quasi nulle : ne doit pas excéder <b>15 mg/m³ (15 ppm)</b></td></tr></tbody></table></div>' +
        '<div class="callout ok">Les ARI ont pour but de <b>créer et maintenir une atmosphère respirable isolée</b> de l’air extérieur vicié.</div>' },
    { id: 'combustion', t: 'De la combustion aux fumées', ic: 'flame', src: 'Diaporama B1-1, diapositives « La combustion » et commentaire formateur ; document stagiaire B1-1-5',
      html: '<p>La combustion est une <b>réaction exothermique</b> (« qui dégage de la chaleur ») entre l’oxygène de l’air (le comburant) et certaines substances solides, liquides ou gazeuses (les combustibles), après activation par une source d’énergie.</p>' +
        '<p>Elle produit un rayonnement lumineux, de la chaleur et des <b>résidus gazeux et/ou solides</b> : gaz, suies, cendres, reliquats incombustibles, sous forme d’aérosols, d’impuretés, de particules ou de poussières. Cet ensemble gaz + solides constitue les <b>fumées d’incendie</b>.</p>' +
        '<p>Les atmosphères non respirables se classent en deux familles :</p>' +
        '<div class="tw"><table><thead><tr><th>Famille</th><th>Ambiance</th><th>Agression</th></tr></thead><tbody>' +
        '<tr><td>Fumées d’incendie</td><td><b>Chaude</b></td><td>Physique (chaleur) + chimique (toxicité)</td></tr>' +
        '<tr><td>Épandages et atmosphères toxiques</td><td><b>Froide</b></td><td>Toxique, respiratoire et souvent cutanée</td></tr></tbody></table></div>' },
    { id: 'fumees', t: 'Les fumées d’incendie : le danger dure après l’extinction', ic: 'skull', src: 'Diaporama B1-1, diapositives « Les fumées d’incendie » et commentaire formateur ; fiche séquentielle B1-1',
      html: '<p>La toxicité des fumées <b>dépend du ou des combustibles</b> : le risque chimique des fumées est le risque toxique du produit libéré par la combustion.</p>' +
        '<div class="tw"><table><thead><tr><th>Combustible (exemple du diaporama)</th><th>Gaz libéré par la combustion</th><th>Volume</th></tr></thead><tbody>' +
        '<tr><td>1 kg de PVC</td><td>Acide chlorhydrique</td><td><b>280 litres</b></td></tr>' +
        '<tr><td>1 kg de polyuréthane</td><td>Acide cyanhydrique</td><td><b>5 à 30 litres</b></td></tr></tbody></table></div>' +
        '<p>Sous l’effet de la chaleur, certains matériaux comme le <b>béton absorbent les gaz de combustion</b> ; après l’extinction, ces gaz sont libérés.</p>' +
        '<div class="callout bad">La protection respiratoire est donc également nécessaire <b>pendant le déblai</b>. Le diaporama recommande l’ARI lors du déblai, dans les locaux mal ventilés, et globalement <b>dès qu’il y a un doute ou un risque</b>.</div>' },
    { id: 'epandages', t: 'Épandages et atmosphères toxiques : une ambiance froide n’exclut pas le danger', ic: 'alert', src: 'Diaporama B1-1, diapositives « Les épandages et les atmosphères toxiques » et commentaire formateur',
      html: '<p>Ils résultent de <b>processus chimiques</b> ou de <b>fuites de grande importance</b> (par exemple des réservoirs de produits toxiques). Le pouvoir de pénétration des toxiques dans l’organisme dépend souvent de leur <b>forme</b> :</p>' +
        '<ul class="check"><li><b>Solides</b> : particules fibreuses ;</li><li><b>Liquides</b> : solutions aqueuses acides ou basiques ;</li><li><b>Gaz</b> : lésions pulmonaires (œdème aigu du poumon, irritations) ou réactions liées à leur toxicité (collapsus cardio-pulmonaire, troubles neurologiques, voire coma). Exemples : chlore, phosgène, ammoniac, CO.</li></ul>' +
        '<p>Le diaporama illustre aussi les lésions cutanées de l’ypérite (gaz moutarde) : le risque est respiratoire et <b>souvent cutané</b>.</p>' +
        '<div class="callout warn">L’évaluation des risques présentés par les toxiques doit permettre de <b>compléter la protection respiratoire par une tenue étanche</b>.</div>' }
  ],
  key: ['Fumée = gaz de combustion + particules entraînées.', 'Air : 78 % azote, 21 % oxygène, 1 % autres gaz.', 'NF EN 12021 : O₂ 21 % ± 1 %, CO₂ ≤ 500 ppm, CO ≤ 15 ppm.', 'Combustion = réaction exothermique.', '1 kg de PVC → 280 l d’acide chlorhydrique ; 1 kg de polyuréthane → 5 à 30 l d’acide cyanhydrique.', 'Le béton relargue les gaz après extinction : ARI au déblai.', 'Fumées = ambiance chaude ; épandages toxiques = ambiance froide, tout aussi dangereuse.'],
  traps: ['Faire retirer les masques au déblai parce que « le feu est éteint ».', 'Croire qu’une atmosphère froide est sans danger.', 'Inverser les proportions d’azote et d’oxygène de l’air.'],
  quiz: [
    { q: 'Vrai ou faux : « L’air est composé de 78 % d’oxygène et de 21 % d’azote. »', c: ['Faux : 21 % d’oxygène et 78 % d’azote', 'Vrai', 'Faux : 50 % de chaque', 'Faux : 16 % d’oxygène'], e: 'Corrigé B1-1-4 : 21 % d’oxygène et 78 % d’azote (plus 1 % d’autres gaz).', s: 'air' },
    { q: 'Vrai ou faux : « Lors d’un déblai, les concentrations de gaz toxiques sont faibles. »', c: ['Faux : des gaz sont libérés après l’extinction', 'Vrai', 'Vrai, sauf en présence de PVC', 'Vrai si le local est en béton'], e: 'Corrigé B1-1-4 : libération des gaz après extinction (le béton absorbe puis relargue les gaz de combustion).', s: 'fumees' },
    { q: 'La combustion est une réaction…', c: ['Exothermique', 'Endothermique', 'Sans échange de chaleur', 'Uniquement chimique, jamais thermique'], e: 'Exothermique = qui dégage de la chaleur. « Endothermique » est l’affirmation fausse du questionnaire B1-1-3.', s: 'combustion' },
    { q: 'Quel volume d’acide chlorhydrique la combustion d’1 kg de PVC peut-elle libérer selon le diaporama ?', c: ['280 litres', '5 à 30 litres', '28 litres', '2 800 litres'], e: 'Exemple du diaporama B1-1 ; 5 à 30 litres correspondent à l’acide cyanhydrique d’1 kg de polyuréthane.', s: 'fumees' },
    { q: 'Selon la norme NF EN 12021 citée par le SDIS 51, quelle doit être la teneur en oxygène de l’air inhalé ?', c: ['21 % ± 1 % en volume', 'Plus de 25 % du volume', '17 % minimum', '100 %'], e: 'L’affirmation « excéder 25 % » du questionnaire est fausse : le corrigé donne 21 % ± 1 %.', s: 'air' },
    { q: 'Vrai ou faux : « Le port de l’ARI ne se fait que lors de l’attaque d’un incendie. »', c: ['Faux : attaque, déblai et dès qu’il y a doute ou risque', 'Vrai', 'Vrai, sauf feu de cave', 'Faux : uniquement lors des sauvetages'], e: 'Corrigé B1-1-4 (« attaque, déblai… ») et commentaire du diaporama (locaux mal ventilés, doute, risque).', s: 'fumees' },
    { q: 'Vrai ou faux : « Une atmosphère froide exclut un danger. »', c: ['Faux : épandages et atmosphères toxiques sont des ambiances froides', 'Vrai', 'Vrai en extérieur', 'Faux seulement en présence de flammes'], e: 'Corrigé B1-1-4 : les épandages ou atmosphères toxiques sont dangereux en ambiance froide.', s: 'epandages' },
    { q: 'Qu’est-ce qu’un aérosol selon les définitions du SDIS 51 ?', c: ['Une suspension de particules solides ou liquides dans un gaz, de vitesse de chute inférieure à 0,25 m/s', 'La phase gazeuse d’un liquide à 20 °C', 'Une suspension de gouttelettes dans un gaz', 'Un ensemble de gaz de combustion'], e: 'Les autres réponses définissent respectivement la vapeur, le brouillard et (en partie) la fumée.', s: 'defs' }
  ]
});

/* =====================================================================================
   CE INC 3 — CHAPITRE 2 : contraintes physiologiques (B1-2)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-ari-contraintes', part: 'ince', seq: INCE_2_SEQ_ARI,
  title: 'Les contraintes physiologiques du port de l’ARI', short: 'Contraintes physiologiques', motif: 'heart',
  sources: [INCE_2_PE + ', séquence B1-2 : texte lacunaire corrigé B1-2-3', 'Diaporama « Contraintes physiologiques » (B1-2) et fiche séquentielle', INCE_2_DOSSIER + ', fiche individuelle d’entraînement au port de l’ARI'],
  summary: 'Perturbations sensorielles et augmentation du travail du porteur : ce qui rend l’équipier moins lucide et plus gourmand en air.',
  why: '<b>Pourquoi le chef d’équipe s’en préoccupe-t-il ?</b> Chaque contrainte du port de l’ARI finit au même endroit : <b>plus de travail, plus de consommation d’air, moins de lucidité</b>. Le chef d’équipe, qui décide du rythme et du retour de son binôme, doit savoir reconnaître ces effets chez son équipier — et chez lui-même.',
  sections: [
    { id: 'familles', t: 'Deux familles de contraintes', ic: 'list', src: 'Diaporama B1-2, diapositive 3 ; fiche séquentielle B1-2 ; texte lacunaire corrigé B1-2-3',
      html: '<div class="tw"><table><thead><tr><th>Les perturbations sensorielles</th><th>L’augmentation du travail du porteur</th></tr></thead><tbody>' +
        '<tr><td>Modification du schéma corporel</td><td>Résistances respiratoires</td></tr>' +
        '<tr><td>Déficit sensoriel</td><td>Augmentation de l’espace mort</td></tr>' +
        '<tr><td>Vie de relation</td><td>Stress émotif</td></tr>' +
        '<tr><td></td><td>Poids de l’appareil</td></tr>' +
        '<tr><td></td><td>Conséquences sur la thermorégulation</td></tr></tbody></table></div>' },
    { id: 'schema', t: 'Un corps plus large, moins mobile', ic: 'walk', src: 'Texte lacunaire corrigé B1-2-3, § 3 ; diaporama B1-2, diapositive 4',
      html: '<ul class="check"><li><b>Capacités de mobilisation</b> du tronc et du cou modifiées.</li>' +
        '<li><b>Gabarit augmenté</b> : de l’ordre de <b>50 à 60 %</b> pour la circonférence thoracique.</li>' +
        '<li><b>Ballant d’inertie</b> : surtout lors des passages d’obstacles et de la marche rapide ; il est <b>augmenté lorsque les sangles ne sont pas correctement réglées</b>.</li></ul>' +
        '<div class="callout ok">D’où l’intérêt de l’« A » d’ajustement du harnais dans le R.A.P.A.C.E et du contrôle croisé avant l’engagement.</div>' },
    { id: 'sens', t: 'Voir, entendre, sentir, communiquer : tout est dégradé', ic: 'eye', src: 'Texte lacunaire corrigé B1-2-3, § 4 à 6 ; diaporama B1-2, diapositives 5 à 7',
      html: '<div class="tw"><table><thead><tr><th>Sens</th><th>Effet du port de l’ARI</th></tr></thead><tbody>' +
        '<tr><td>Vue</td><td><b>Champ visuel réduit</b> (obliger à majorer les mouvements de la tête) ; <b>acuité diminuée</b>, surtout avec de la buée à l’intérieur de la pièce faciale ou des projections sur sa face externe ; fumées en plus</td></tr>' +
        '<tr><td>Ouïe et odorat</td><td>Perception faussée : les bruits de <b>petites fuites de gaz</b>, les <b>odeurs</b> de gaz ou de vapeurs d’hydrocarbure ne sont pas perçus</td></tr>' +
        '<tr><td>Rayonnement</td><td>Perception des rayonnements limitée (diaporama)</td></tr>' +
        '<tr><td>Vie de relation</td><td>Réception et émission des messages verbaux difficiles (ARI + tenue de protection)</td></tr></tbody></table></div>',
      figs: [{ img: 'img/ince-2/binome-fumees.jpg', cap: 'Évoluer sous ARI dans les fumées', txt: '<p>Champ visuel réduit, acuité diminuée, sons et odeurs filtrés : le binôme doit compenser par des mouvements de tête plus amples et une communication simple et convenue.</p>', src: 'Diaporama « Contraintes physiologiques » (B1-2), SDIS 51' }] },
    { id: 'travail', t: 'Respirer coûte plus cher', ic: 'lungs', src: 'Texte lacunaire corrigé B1-2-3, § 7 et 8',
      html: '<ul class="check"><li><b>Résistance à l’inspiration</b> : effort nécessaire pour abaisser la surpression à l’intérieur du masque, ce qui actionne le microrégulateur et provoque l’arrivée d’air.</li>' +
        '<li><b>Résistance à l’expiration</b> : effort nécessaire pour rejeter l’air expiré par la soupape.</li>' +
        '<li><b>Espace mort</b> : volume résiduel entre les alvéoles pulmonaires et la soupape d’expiration de la pièce faciale.</li></ul>' +
        '<p><b>Stress émotif</b> : ces contraintes sont amplifiées par des facteurs individuels (manque d’expérience, manque de pratique au port de l’ARI), par la nature de l’intervention, l’hostilité de l’environnement et l’anxiété qui en découle. Conséquences : augmentation de la <b>fréquence cardiaque</b> (libération d’hormones surrénaliennes), perte de la maîtrise de soi et de la lucidité, et surtout <b>augmentation du travail et donc de la consommation d’air</b>.</p>' },
    { id: 'poids', t: 'Le poids et la chaleur', ic: 'sun', src: 'Texte lacunaire corrigé B1-2-3, § 9 et 10',
      html: '<div class="tw"><table><thead><tr><th>Contrainte</th><th>Repères</th><th>Conséquence</th></tr></thead><tbody>' +
        '<tr><td>Poids de l’ARI</td><td>Norme : <b>18 kg</b> maximum ; un ARI pèse <b>10 à 16 kg</b>, soit <b>15 à 20 %</b> de supplément au poids du porteur</td><td>Dépense énergétique accrue, fatigue plus rapide</td></tr>' +
        '<tr><td>Thermorégulation</td><td>Température corporelle à maintenir autour de <b>37 °C</b> (thermogenèse / thermolyse)</td><td>À l’effort, seule la sudation refroidit ; les EPI limitent son évaporation. Reste la ventilation, dont la fréquence augmente : <b>lucidité perturbée, consommation d’air accrue</b></td></tr></tbody></table></div>' },
    { id: 'ce', t: 'Ce que le chef d’équipe en retient', ic: 'team', src: INCE_2_DOSSIER + ' (fiche individuelle d’entraînement ; procédure opérationnelle)',
      html: '<p>La fiche individuelle d’entraînement au port de l’ARI classe le comportement de chaque sapeur-pompier :</p>' +
        '<div class="tw"><table><thead><tr><th>Classe</th><th>Profil</th></tr></thead><tbody>' +
        '<tr><td><b>A</b></td><td>SP confirmés, habitués et entraînés à évoluer en milieu hostile</td></tr>' +
        '<tr><td><b>B</b></td><td>SP confirmés, mais avec un manque d’entraînement au port de l’ARI</td></tr>' +
        '<tr><td><b>C</b></td><td>SP ayant un trouble du comportement : panique, irritabilité, stress émotif</td></tr></tbody></table></div>' +
        '<p>Les résultats B et C doivent être justifiés dans l’observation du formateur. Le chef d’agrès doit connaître l’aptitude au port de l’ARI de ses personnels <b>afin que les binômes formés soient homogènes et efficaces</b> ; les plus à l’aise sont chargés en priorité des longues reconnaissances.</p>' }
  ],
  key: ['Deux familles : perturbations sensorielles et augmentation du travail du porteur.', 'Gabarit : + 50 à 60 % de circonférence thoracique ; ballant aggravé par des sangles mal réglées.', 'Fuites et odeurs de gaz ne sont plus perçues sous ARI.', 'Espace mort = volume entre alvéoles et soupape d’expiration.', 'ARI : 10 à 16 kg (norme ≤ 18 kg), soit 15 à 20 % du poids du porteur.', 'Stress, chaleur, poids : tous augmentent la consommation d’air.'],
  traps: ['Se fier à l’odorat ou à l’ouïe pour détecter une fuite de gaz sous ARI.', 'Négliger le réglage des sangles : le ballant d’inertie augmente.', 'Associer deux porteurs de niveaux très différents sans en tenir compte.'],
  quiz: [
    { q: 'De combien le port de l’ARI augmente-t-il la circonférence thoracique du porteur, selon le texte du SDIS 51 ?', c: ['De l’ordre de 50 à 60 %', 'De 5 à 10 %', 'Du double', 'Elle ne change pas'], e: 'Texte lacunaire corrigé B1-2-3 : augmentation du gabarit de l’ordre de 50 à 60 % pour la circonférence thoracique.', s: 'schema' },
    { q: 'Qu’est-ce qui augmente le ballant d’inertie ?', c: ['Des sangles mal réglées', 'Un masque mal nettoyé', 'Une bouteille de 300 bar', 'Le port de gants'], e: 'Il est surtout présent au passage d’obstacles et en marche rapide, et augmenté lorsque les sangles ne sont pas correctement réglées.', s: 'schema' },
    { q: 'Pourquoi le porteur d’ARI risque-t-il de ne pas détecter une petite fuite de gaz ?', c: ['Ouïe et odorat sont perturbés par l’appareil', 'Le gaz ne traverse pas la tenue', 'Le CO est toujours visible', 'La soupape à la demande filtre les bruits aigus'], e: 'B1-2-3 : bruits de petites fuites et odeurs de gaz ou d’hydrocarbures ne sont pas perçus.', s: 'sens' },
    { q: 'Qu’appelle-t-on l’espace mort ?', c: ['Le volume résiduel entre les alvéoles pulmonaires et la soupape d’expiration', 'L’air restant dans la bouteille sous 50 bar', 'Le volume du flexible moyenne pression', 'La zone non explorée d’une pièce'], e: 'Définition du texte lacunaire corrigé B1-2-3.', s: 'travail' },
    { q: 'Combien pèse un ARI, d’après le texte lacunaire corrigé ?', c: ['10 à 16 kg (la norme limite à 18 kg)', '5 à 8 kg', '18 à 25 kg', 'Exactement 18 kg'], e: 'Soit 15 à 20 % de supplément au poids du porteur.', s: 'poids' },
    { q: 'Quelle est la conséquence commune du stress, du poids et de la chaleur sous ARI ?', c: ['Une augmentation de la consommation d’air', 'Une baisse de la fréquence cardiaque', 'Une amélioration de la vigilance', 'Une baisse de la pression dans le masque'], e: 'Toutes ces contraintes augmentent le travail du porteur et donc sa consommation d’air, et perturbent sa lucidité.', s: 'travail' },
    { q: 'Sur la fiche individuelle d’entraînement, à quoi correspond la classe B ?', c: ['SP confirmés mais manquant d’entraînement au port de l’ARI', 'SP présentant un trouble du comportement', 'SP habitués et entraînés au milieu hostile', 'SP inaptes au port de l’ARI'], e: 'A = confirmés et entraînés ; B = manque d’entraînement ; C = trouble du comportement (panique, irritabilité, stress émotif).', s: 'ce' }
  ]
});

/* =====================================================================================
   CE INC 3 — CHAPITRE 3 : composition de l’ARI et consommation (B2)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-ari-materiel', part: 'ince', seq: INCE_2_SEQ_ARI,
  title: 'Composition de l’ARI et consommation du porteur', short: 'ARI : composition et consommation', motif: 'bottle',
  sources: [INCE_2_DOSSIER + ' : présentation détaillée de l’ARI', INCE_2_DOSSIER + ' : fiche individuelle d’entraînement et technique de calcul des consommations', INCE_2_GTO + ', chap. I et III (comparaison)'],
  summary: 'Chaque élément de l’ARICO et sa vérification, puis comment mesurer la consommation d’air d’un porteur.',
  why: '<b>Pourquoi le chef d’équipe doit-il connaître l’appareil dans le détail ?</b> Il vérifie l’appareil de son équipier lors du contrôle croisé et il fixe le moment du retour : savoir ce que fait chaque organe (détendeur, soupape, sifflet, balise) et combien d’air consomme son binôme, c’est éviter la mauvaise surprise au fond du local.',
  sections: [
    { id: 'elements', t: 'Les éléments de l’ARICO', ic: 'list', src: INCE_2_DOSSIER + ', activité démonstrative et livret stagiaire',
      html: '<div class="tw"><table><thead><tr><th>Élément</th><th>Rôle</th><th>À retenir</th></tr></thead><tbody>' +
        '<tr><td>Pièce faciale (masque)</td><td>Protège et isole le porteur ; canalise l’air fourni par le régulateur</td><td>Types variables selon fabricants ; la plupart avec dispositif phonique. Vérifiée et nettoyée après chaque utilisation, rangée si possible en housse fermée</td></tr>' +
        '<tr><td>Harnais</td><td>Répartit le poids ; supporte les éléments de sécurité et la ou les bouteilles</td><td>Réglage correct des sangles (ballant d’inertie)</td></tr>' +
        '<tr><td>Bouteille(s)</td><td>Réserve d’air comprimé</td><td>Marquages : fabricant, date d’épreuve, pression d’épreuve et de service, poids, capacité, nature et identification du gaz. Pleines et vides différenciées par <b>bouchon ou plombage</b>. Contenance retenue : <b>6 litres d’eau</b></td></tr>' +
        '<tr><td>Détendeur haute pression</td><td>Abaisse la pression de la bouteille à <b>6 ou 7 bar</b> avec un débit continu et régulier</td><td>Reçoit le manomètre et le <b>sifflet de fin de charge</b> (déclenchement à <b>50 bar</b>) ; alimente la soupape par le tuyau moyenne pression</td></tr>' +
        '<tr><td>Soupape à la demande</td><td>Abaisse les 7 bar à une surpression de <b>1,5 à 3 millibars</b> ; débit jusqu’à <b>300 l/min</b></td><td>By-pass pour augmenter l’arrivée d’air (effort violent, panique). Encliquetée <b>juste avant l’engagement</b></td></tr>' +
        '<tr><td>Système sonore de détresse (balise)</td><td>Localiser le porteur, prévenir d’un incident</td><td>Se déclenche si le porteur reste immobile un temps prédéterminé (<b>90 secondes</b> selon le livret formateur) ; déclenchement manuel possible ; peut porter une plaque de contrôle</td></tr>' +
        '<tr><td>Liaison personnelle, ligne guide, tableau de contrôle</td><td>Matériel d’exploration et de suivi</td><td>Voir le chapitre « La ligne de vie »</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout warn"><b>Divergences entre sources :</b> le dossier SDIS 51 indique un sifflet de fin de charge à <b>50 bar</b> ; le GTO 2019 parle d’un déclenchement « en dessous de <b>55 bars environ</b> ». Le livret formateur fixe le déclenchement de la balise à <b>90 s</b> d’immobilité ; le livret stagiaire et le GTO parlent seulement d’une « période donnée » / d’un « temps prédéterminé ». Retiens le principe et vérifie la notice de ton matériel.</div>',
      figs: [{ img: 'img/ince-2/porteur-ari.jpg', cap: 'Porteur équipé de l’ARI', txt: '<p>Bouteille dorsale, harnais, détendeur et flexible jusqu’au masque : c’est l’ensemble que le chef d’équipe contrôle chez son équipier pendant le contrôle croisé.</p>', src: 'Diaporama « L’opération, la procédure opérationnelle », partie E séquence 2, SDIS 51' }] },
    { id: 'conso', t: 'Mesurer la consommation d’un porteur', ic: 'clock', src: INCE_2_DOSSIER + ', séquence « théorie sur la mise en œuvre » : activité démonstrative et fiche individuelle',
      html: '<p>Lors de la séquence, les stagiaires prennent leur pouls, capèlent l’ARI et effectuent une <b>marche lente de 5 minutes</b>, reprennent leur pouls, puis une <b>marche rapide de 5 minutes</b>, et reprennent leur pouls. Les pressions de départ et d’arrivée sont notées sur la fiche individuelle.</p>' +
        '<div class="tw"><table><thead><tr><th>Formule de la fiche individuelle</th><th>Signification</th></tr></thead><tbody>' +
        '<tr><td><b>Q = (P0 − P1) × V ÷ T</b></td><td>Q : débit consommé (l/min) ; P0 : pression de départ ; P1 : pression d’arrivée (bar) ; V : volume de la bouteille (l) ; T : temps (min)</td></tr></tbody></table></div>' +
        '<p>La fiche comporte aussi le pouls au repos, le <b>pouls limite</b>, le nombre de tractions et le classement du comportement (A, B, C).</p>' +
        '<div class="callout ok">Cette consommation individuelle (Q) est celle que le contrôleur utilise pour calculer la durée d’engagement théorique : voir « Procédure opérationnelle ».</div>' }
  ],
  key: ['Détendeur HP : 6 ou 7 bar ; il porte manomètre et sifflet de fin de charge.', 'Sifflet : 50 bar (dossier SDIS 51) – environ 55 bar (GTO).', 'Soupape à la demande : surpression de 1,5 à 3 mbar, jusqu’à 300 l/min ; encliquetée juste avant l’engagement.', 'Balise : déclenchement après immobilité (90 s selon le livret formateur) ou manuel.', 'Bouteille pleine : bouchon ou plombage.', 'Consommation : Q = (P0 − P1) × V ÷ T.'],
  traps: ['Encliqueter la soupape trop tôt et consommer de l’air avant l’engagement.', 'Prendre une bouteille sans bouchon ni plomb pour une bouteille pleine.', 'Confondre pression de la bouteille (bar) et surpression du masque (millibars).'],
  quiz: [
    { q: 'À quelle pression le détendeur haute pression ramène-t-il l’air de la bouteille ?', c: ['6 ou 7 bar', '1,5 à 3 millibars', '50 bar', '200 bar'], e: 'Dossier B2 : le détendeur HP abaisse la pression à 6 ou 7 bar avec un débit continu et régulier.', s: 'elements' },
    { q: 'Quelle surpression la soupape à la demande maintient-elle dans le masque selon le dossier SDIS 51 ?', c: ['1,5 à 3 millibars', '6 à 7 bar', '1,5 à 3 bar', 'Aucune, elle est à pression négative'], e: 'Elle abaisse les 7 bar à une surpression de 1,5 à 3 millibars, avec un débit pouvant aller jusqu’à 300 l/min.', s: 'elements' },
    { q: 'Quand la soupape à la demande doit-elle être encliquetée ?', c: ['Juste avant l’engagement', 'Dès la sortie de l’engin', 'Après le premier palier d’exploration', 'Au retour, pour purger'], e: 'Dossier B2, présentation de la soupape à la demande.', s: 'elements' },
    { q: 'À quelle pression le dossier SDIS 51 situe-t-il le déclenchement du sifflet de fin de charge ?', c: ['50 bar (le GTO indique environ 55 bar)', '180 bar', '10 bar', '280 bar'], e: 'Divergence signalée : 50 bar dans le dossier SDIS 51, « en dessous de 55 bars environ » dans le GTO 2019.', s: 'elements' },
    { q: 'Comment distingue-t-on une bouteille pleine d’une bouteille vide ?', c: ['Par un bouchon ou un plombage', 'Par la couleur de l’ogive', 'Par son poids uniquement', 'Par la date d’épreuve'], e: 'Dossier B2 : différencier les bouteilles pleines des vides par un bouchon ou plombage.', s: 'elements' },
    { q: 'Quelle formule de la fiche individuelle donne la consommation Q d’un porteur ?', c: ['Q = (P0 − P1) × V ÷ T', 'Q = P × V ÷ 90', 'Q = (P0 + P1) ÷ T', 'Q = V ÷ (P0 − P1)'], e: 'P0 et P1 : pressions de départ et d’arrivée, V : volume de la bouteille, T : temps.', s: 'conso' },
    { q: 'Quelle durée de marche lente puis de marche rapide la séquence prévoit-elle pour mesurer la consommation ?', c: ['5 minutes chacune', '1 minute chacune', '15 minutes chacune', '30 minutes au total, sans pause'], e: 'Dossier B2 : marche lente 5 minutes, puis marche rapide 5 minutes, avec prise de pouls après chaque phase.', s: 'conso' }
  ]
});

/* =====================================================================================
   CE INC 3 — CHAPITRE 4 : la ligne de vie (séquence 1)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-ari-lignevie', part: 'ince', seq: INCE_2_SEQ_ARI,
  title: 'La ligne de vie : liaison personnelle, ligne guide, tableau de contrôle', short: 'Ligne de vie', motif: 'rope',
  sources: [INCE_2_PE + ', séquence 1 « Composition d’une ligne de vie » : guide formateur, livret de l’apprenant, questionnaire Vrai/Faux et corrigé', INCE_2_DOSSIER, INCE_2_GTO + ', chap. I § 1.3.1 (comparaison)'],
  summary: 'Ligne de vie = ligne guide + liaison personnelle ; tableau et plaques de contrôle ; dispositif de dérivation.',
  why: '<b>Pourquoi le chef d’équipe doit-il la connaître par cœur ?</b> Dans une fumée dense, la ligne guide est le seul chemin sûr vers la sortie et le seul lien avec le contrôleur. C’est le chef d’équipe qui choisit comment son binôme s’y relie (liaison courte ou longue) selon la mission : une erreur de montage, et le binôme perd son retour.',
  sections: [
    { id: 'compo', t: 'De quoi est faite la ligne de vie ?', ic: 'list', src: 'Livret de l’apprenant, séquence 1 ; guide formateur séquence 1 (matériel de démonstration)',
      html: '<div class="callout ok"><b>Ligne de vie = ligne guide + liaison personnelle.</b></div>' +
        '<p>Matériel présenté en démonstration : le GNR ARI, une <b>ligne guide</b>, une <b>liaison personnelle</b>, un <b>tableau de contrôle</b>, une <b>plaque de contrôle</b> et un <b>dispositif de dérivation</b> (qui permet d’installer des ramifications à partir de la ligne guide).</p>' },
    { id: 'liaison', t: 'La liaison personnelle', ic: 'rope', src: 'Livret de l’apprenant, séquence 1 ; GTO 2019, chap. I § 1.3.1',
      html: '<p>Elle permet au personnel du binôme d’être en <b>liaison constante</b> et de se déplacer le long de la ligne guide. Chaque porteur en est équipé (et pas seulement le chef d’équipe).</p>' +
        '<div class="tw"><table><thead><tr><th>Partie</th><th>Longueur</th><th>Usage</th></tr></thead><tbody>' +
        '<tr><td>Liaison courte</td><td><b>1,25 m</b></td><td>Attachée sur la ligne guide ou sur l’équipier</td></tr>' +
        '<tr><td>Seconde partie (enrouleur automatique de 4,75 m sur l’illustration)</td><td>jusqu’à <b>6 m</b> au total</td><td>Exploration approfondie</td></tr></tbody></table></div>' +
        '<p>Le GTO 2019 donne la même logique : longueur totale de 6 m, diamètre 4 mm, utilisable en version courte (1,25 m) ou longue (6 m).</p>',
      figs: [
        { img: 'img/ince-2/liaison-personnelle.jpg', cap: 'Les deux parties de la liaison personnelle', txt: '<p>À gauche la liaison courte de 1,25 m ; à droite l’enrouleur automatique de 4,75 m : ensemble, 6 m.</p>', src: 'Livret de l’apprenant, séquence 1 « Composition d’une ligne de vie », SDIS 51' },
        { img: 'img/ince-2/liaison-positions.jpg', cap: 'Position courte et position longue', txt: '<p>En haut, la liaison en position 1,25 m sur la ligne guide ; en bas, l’enrouleur déroulé permet de s’écarter de 1,25 m à 6 m.</p>', src: 'Livret de l’apprenant, séquence 1, SDIS 51' }
      ] },
    { id: 'guide', t: 'La ligne guide', ic: 'road', src: 'Livret de l’apprenant, séquence 1 ; règles de base B3 ; GTO 2019, chap. I § 1.3.1',
      html: '<p>Elle permet de <b>revenir facilement au point d’entrée</b> et <b>relie les porteurs d’ARI au contrôleur</b> resté à l’extérieur. Elle sert au personnel, pas à arrimer du matériel.</p>' +
        '<div class="tw"><table><thead><tr><th>Caractéristique</th><th>Livret SDIS 51</th><th>GTO 2019</th></tr></thead><tbody>' +
        '<tr><td>Longueur</td><td><b>50 à 60 m</b></td><td>50 à 60 m (diamètre 6 à 8 mm)</td></tr>' +
        '<tr><td>Repères</td><td>Tous les <b>2,50 m</b> : nœuds ou olives</td><td>Repères de progression</td></tr>' +
        '<tr><td>Sortie</td><td><b>Une</b> olive ou une petite drisse indique la sortie (« se mettre sur son 31 pour sortir »)</td><td>1 olive isolée = direction de la sortie (« vie ») ; 3 olives successives = direction du sinistre (« in-cen-die »)</td></tr></tbody></table></div>' +
        '<p>Les règles de base d’emploi précisent que <b>l’établissement réalisé peut servir de ligne guide</b> ; le GTO cite aussi la lance alimentée.</p>',
      figs: [{ img: 'img/ince-2/ligne-guide.jpg', cap: 'Lignes guides en sac et sur dévidoir', txt: '<p>Deux conditionnements de 50 à 60 m : lovée dans un sac ou enroulée sur un tambour, avec mousqueton d’amarrage.</p>', src: 'Livret de l’apprenant, séquence 1, SDIS 51' }] },
    { id: 'controle', t: 'Tableau et plaques de contrôle', ic: 'clip', src: 'Livret de l’apprenant, séquence 1 ; diaporama procédure opérationnelle, diapositives 4 et 5',
      html: '<ul class="check"><li>Le <b>tableau de contrôle</b> regroupe les plaques de contrôle et permet le <b>suivi du personnel engagé</b> (nombre de porteurs et temps d’engagement).</li>' +
        '<li>La <b>plaque de contrôle</b> porte : le <b>nom du porteur</b>, la <b>pression</b> de la bouteille à l’engagement et l’<b>heure d’entrée</b>.</li></ul>',
      figs: [
        { img: 'img/ince-2/plaque-controle.jpg', cap: 'Plaque de contrôle renseignée', txt: '<p>Nom du porteur, pression à l’engagement (ici 300) et heure d’entrée (10 h 00).</p>', src: 'Livret de l’apprenant, séquence 1, SDIS 51' },
        { img: 'img/ince-2/tableau-controle.jpg', cap: 'Tableau de contrôle en exercice', txt: '<p>Le contrôleur y regroupe les plaques par binôme, avec le point d’accès, l’heure de rappel et, en bas, le binôme de sécurité.</p>', src: 'Livret de l’apprenant, séquence 1, SDIS 51' }
      ] }
  ],
  key: ['Ligne de vie = ligne guide + liaison personnelle.', 'Liaison personnelle : 6 m au total, dont une liaison courte de 1,25 m ; chaque porteur en a une.', 'Ligne guide : 50 à 60 m, repères tous les 2,50 m.', 'Une olive isolée (ou une petite drisse) indique la sortie.', 'Plaque de contrôle : nom, pression à l’engagement, heure d’entrée.', 'L’établissement réalisé peut servir de ligne guide.'],
  traps: ['Croire que seul le chef d’équipe porte une liaison personnelle.', 'Utiliser la ligne guide pour arrimer du matériel.', 'Penser que plusieurs olives indiquent la sortie (au GTO, 3 olives = direction du sinistre).'],
  quiz: [
    { q: 'Vrai ou faux : « La ligne guide sert à arrimer du matériel. »', c: ['Faux : elle sert au personnel', 'Vrai', 'Vrai pour les lances seulement', 'Vrai, sauf en reconnaissance'], e: 'Corrigé du Vrai/Faux, séquence 1 : la ligne guide relie les porteurs au contrôleur et leur permet de revenir au point d’entrée.', s: 'guide' },
    { q: 'Quelle est la longueur de la ligne guide ?', c: ['50 à 60 m', '70 m', '20 m', '100 m'], e: 'Corrigé : « 70 mètres » est faux, la ligne guide mesure 50 à 60 m (le GTO donne la même longueur).', s: 'guide' },
    { q: 'Vrai ou faux : « La longueur de la liaison personnelle est de 6 mètres maximum. »', c: ['Vrai', 'Faux : 1,25 m', 'Faux : 12 m', 'Faux : 50 m'], e: 'Corrigé : vrai. Elle comprend une liaison courte de 1,25 m et une partie longue pour l’exploration.', s: 'liaison' },
    { q: 'Qui porte une liaison personnelle ?', c: ['Les deux membres du binôme', 'Le chef d’équipe seulement', 'L’équipier seulement', 'Le contrôleur'], e: 'Corrigé du Vrai/Faux : « n’est portée que par le chef d’équipe » est faux — « les deux ».', s: 'liaison' },
    { q: 'Comment la sortie est-elle repérée sur la ligne guide ?', c: ['Par une seule olive (ou une petite drisse)', 'Par plusieurs olives', 'Par un nœud tous les 2,50 m', 'Par une bande réfléchissante'], e: 'Corrigé : « Non, 1 seule ». Les nœuds ou olives tous les 2,50 m sont de simples repères de progression.', s: 'guide' },
    { q: 'Vrai ou faux : « La ligne de vie est composée d’une ligne guide plus deux liaisons personnelles. »', c: ['Vrai', 'Faux : une ligne guide seule', 'Faux : deux lignes guides', 'Faux : une liaison personnelle seule'], e: 'Corrigé du Vrai/Faux : vrai (une ligne guide, et la liaison personnelle de chaque porteur du binôme).', s: 'compo' },
    { q: 'Quelles informations porte la plaque de contrôle ?', c: ['Nom du porteur, pression à l’engagement, heure d’entrée', 'Nom du contrôleur et heure de rappel', 'Groupe sanguin et numéro de bouteille', 'Mission et point d’attaque'], e: 'Livret de l’apprenant. Le nom du contrôleur et l’heure de rappel figurent sur le tableau de contrôle.', s: 'controle' }
  ]
});

/* =====================================================================================
   CE INC 3 — CHAPITRE 5 : procédure opérationnelle avant / pendant / après (séquence 2)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-ari-procedure', part: 'ince', seq: INCE_2_SEQ_ARI,
  title: 'Procédure opérationnelle : avant, pendant et après l’engagement sous ARI', short: 'Procédure opérationnelle ARI', motif: 'clip',
  sources: [INCE_2_PE + ', séquence 2 : diaporama « L’opération, la procédure opérationnelle » (17 diapositives) et guide formateur', INCE_2_DOSSIER + ', « La procédure opérationnelle »', INCE_2_GTO + ', chap. II et III (comparaison)'],
  summary: 'Qui désigne quoi, ce que contrôle le contrôleur, le calcul de la durée d’engagement, le R.A.P.A.C.E et les quatre façons d’utiliser la ligne de vie.',
  why: '<b>Pourquoi une procédure aussi cadrée ?</b> Le dossier SDIS 51 rappelle qu’elle est <b>la même pour tous les centres de secours</b> : un binôme de n’importe quel CS peut s’insérer dans le dispositif d’un autre. Le chef d’équipe en est l’acteur clé : il se fait enregistrer, applique le code de communication, choisit le mode de liaison et fait respecter les règles par son équipier.',
  sections: [
    { id: 'ca', t: 'Le chef d’agrès désigne', ic: 'team', src: 'Diaporama, diapositive 3 ; dossier B2, procédure opérationnelle',
      html: '<ul class="check"><li>le <b>personnel</b> (les porteurs d’ARI), après reconnaissance, en décidant de la technique opérationnelle ;</li><li>le <b>point d’entrée</b> ;</li><li>le <b>contrôleur</b>.</li></ul>' +
        '<p>Il doit connaître l’aptitude de ses personnels au port de l’ARI pour former des <b>binômes homogènes et efficaces</b> ; les plus à l’aise sont chargés en priorité des longues reconnaissances (les plus performants des premières).</p>' +
        '<div class="callout warn">Dans un souci de rapidité, la <b>première reconnaissance peut être effectuée sans binôme de sécurité</b>, mais celui-ci doit être mis en place <b>le plus rapidement possible</b> (dossier B2).</div>' },
    { id: 'controleur', t: 'Le contrôleur avant l’engagement', ic: 'clip', src: 'Diaporama, diapositives 4, 5 et 7 ; dossier B2',
      html: '<ul class="check"><li><b>Enregistre</b> les binômes équipés d’ARI avant l’engagement (au maximum <b>5 binômes, dont le binôme de sécurité</b>) ;</li>' +
        '<li><b>Regroupe et renseigne</b> les plaques de contrôle (nom du porteur, heure d’entrée, pression à l’engagement) ;</li>' +
        '<li>Établit un <b>code de communication</b> avec l’ensemble des binômes ;</li>' +
        '<li>Désigne la <b>fonction</b> des binômes : exploration ou sécurité ;</li>' +
        '<li>Calcule le délai d’intervention, l’<b>heure de rappel</b> et l’<b>heure de sortie théorique</b> ;</li>' +
        '<li>Vérifie que les masques et appareils sont <b>compatibles</b>, que les ARI d’un même binôme sont <b>de même type</b>, et qu’ils sont <b>capelés à l’extérieur</b> de la zone à risque.</li></ul>' +
        '<p>Le tableau de contrôle comporte : sortie prévisible, nom du contrôleur, heure de rappel, point d’accès, binôme de sécurité.</p>' },
    { id: 'calcul', t: 'Calculer la durée d’engagement théorique', ic: 'clock', src: 'Diaporama, diapositives 6 et 7 ; dossier B2, technique de calcul des consommations',
      html: '<div class="tw"><table><thead><tr><th>Formule</th><th>Termes</th></tr></thead><tbody>' +
        '<tr><td><b>T = P × V ÷ Q</b></td><td>T : délai d’intervention théorique sous ARI (min) ; P : pression relevée au manomètre HP avant l’engagement (bar) ; V : volume en litres d’eau de la bouteille (<b>6 l</b> pour les mono-bouteilles) ; Q : consommation du porteur relevée à l’entraînement (l/min)</td></tr>' +
        '<tr><td><b>T = P × 6 ÷ 90 ≈ 0,07 P</b></td><td>En l’absence de fichier individuel d’aptitude, on retient une consommation moyenne de <b>90 l/min</b></td></tr></tbody></table></div>' +
        '<p>Application de la formule (calcul) : pour P = 300 bar, 300 × 6 ÷ 90 = <b>20 min</b> ; l’arrondi 0,07 × 300 donne 21 min.</p>' +
        '<div class="callout warn">Le GTO 2019 (repris dans le chapitre Équipier « ARI : fonctionnement ») calcule avec un facteur de compressibilité et d’autres volumes de bouteille : les ordres de grandeur sont proches, mais le calcul théorique <b>ne remplace jamais la lecture régulière du manomètre</b>.</div>' },
    { id: 'porteurs', t: 'Les porteurs avant l’engagement : vérifications et R.A.P.A.C.E', ic: 'check', src: 'Diaporama, diapositives 8 et 9 ; dossier B2, « Les règles à connaître et les vérifications à effectuer par les porteurs »',
      html: '<ul class="check"><li>Vérifier le bon état général du matériel (ARI, masque) <b>avant de capeler</b> ; ne <b>jamais intervertir les masques</b> d’un appareil à l’autre ; capeler <b>à l’extérieur</b> de la zone à risques.</li>' +
        '<li>Vérifier que le dispositif identifiant le plein de la bouteille est en place et que la balise porte sa plaque de contrôle si elle existe.</li>' +
        '<li>Vérifier le matériel d’exploration : <b>lampe portative, ligne guide, liaison personnelle, système sonore de détresse, dispositif de dérivation</b>.</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Lettre</th><th>Action (diaporama SDIS 51)</th></tr></thead><tbody>' +
        '<tr><td><b>R</b></td><td>Ouverture complète du (des) <b>robinet(s)</b></td></tr>' +
        '<tr><td><b>A</b></td><td><b>Ajustement</b> du harnais</td></tr>' +
        '<tr><td><b>P</b></td><td><b>Pression</b> au manomètre : <b>≥ 280 bar</b> (bouteilles 300 bar) ; le dossier B2 précise ≥ 180 ou ≥ 280 bar selon la pression maximale des bouteilles</td></tr>' +
        '<tr><td><b>A</b></td><td><b>Armement</b> des signaux sonores : sifflet de fin de charge et système sonore de détresse</td></tr>' +
        '<tr><td><b>C</b></td><td><b>Code</b> de communication (immuable), défini avec le contrôleur</td></tr>' +
        '<tr><td><b>E</b></td><td><b>Étanchéité</b> du masque</td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Divergence :</b> les documents SDIS 51 de la formation CE exigent <b>280 bar</b> pour une bouteille de 300 bar ; le GTO 2019 fixe la pression minimale à la pression nominale moins 10 %, soit <b>270 bar</b>. Applique la consigne en vigueur dans ton SDIS.</div>' },
    { id: 'pendant', t: 'Pendant l’engagement : le contrôleur et l’alerte de détresse', ic: 'alert', src: 'Diaporama, diapositive 10 ; dossier B2',
      html: '<ul class="check"><li>Contrôle <b>un seul point d’accès</b> ;</li><li>Supervise au maximum <b>10 porteurs, soit 5 binômes dont celui de sécurité</b> ;</li><li>Fait assurer l’approvisionnement en <b>bouteilles de rechange</b> ;</li><li>Garde toujours à proximité un <b>binôme de sécurité</b> prêt à porter secours ;</li><li>Reste en relation constante avec le <b>COS</b> et le tient informé ;</li><li>Prend les <b>mesures d’urgence</b> en cas de besoin.</li></ul>' +
        '<div class="callout bad">Le <b>code de détresse est immuable</b> : c’est le déclenchement du signal sonore de détresse. Lorsqu’il retentit, <b>tous les binômes engagés rejoignent la sortie</b> et le contrôleur engage immédiatement le binôme de sécurité pour retrouver le binôme en difficulté.</div>' +
        '<p>D’autres moyens existent : radio UHF, liaison audio-filaire (fils intégrés à la ligne guide, récepteurs dans les masques), radio intégrée au casque. Le GTO 2019 formule la même limite autrement : <b>10 porteurs, soit 4 binômes et le binôme de sécurité</b>.</p>' },
    { id: 'liaisons', t: 'Comment le binôme se relie à la ligne de vie', ic: 'rope', src: 'Diaporama, diapositives 11 à 15 ; dossier B2',
      html: '<div class="tw"><table><thead><tr><th>Situation</th><th>Équipier</th><th>Chef d’équipe</th></tr></thead><tbody>' +
        '<tr><td><b>Reconnaissance</b></td><td>Relié à la ligne guide par sa liaison courte (1,25 m)</td><td>Relié à l’équipier par la même longueur de 1,25 m</td></tr>' +
        '<tr><td><b>Travaux sur place</b> (ou attaque)</td><td colspan="2">Chacun est relié <b>individuellement à la ligne guide</b> par sa liaison courte de 1,25 m</td></tr>' +
        '<tr><td><b>Reconnaissance latérale</b> (ligne guide déroulée dans le couloir)</td><td>Relié à la ligne guide par sa liaison courte</td><td>Relié à l’équipier par les <b>6 m</b> de sa liaison : il explore les pièces sans se désolidariser</td></tr>' +
        '<tr><td><b>Opération complexe</b></td><td colspan="2">Les équipes qui <b>sortent sont prioritaires</b> sur celles qui pénètrent ; des <b>ramifications</b> (ligne guide n° 1, n° 2…) sont installées avec les dispositifs de dérivation</td></tr></tbody></table></div>' +
        '<ul class="check"><li>La ligne guide est placée de façon à garantir un <b>retour sûr et rapide</b> ; elle est amarrée régulièrement à des points fixes, <b>ni trop bas ni trop haut</b>.</li><li>Elle doit être <b>amarrée avant de faire demi-tour</b>.</li><li>Le binôme reste <b>solidaire</b>.</li></ul>',
      figs: [
        { img: 'img/ince-2/binome-reconnaissance.jpg', cap: 'Reconnaissance', txt: '<p>L’équipier (au fond) est relié à la ligne guide ; le chef d’équipe est relié à son équipier par 1,25 m.</p>', src: 'Diaporama « L’opération, la procédure opérationnelle », diapositive 11, SDIS 51' },
        { img: 'img/ince-2/binome-travaux-sur-place.jpg', cap: 'Travaux sur place', txt: '<p>Chaque membre du binôme est relié à la ligne guide par sa liaison courte : les deux mains restent libres pour travailler.</p>', src: 'Diaporama, diapositive 12, SDIS 51' },
        { img: 'img/ince-2/binome-reco-laterale.jpg', cap: 'Reconnaissance latérale', txt: '<p>La ligne guide reste dans le couloir ; le chef d’équipe déploie les 6 m de sa liaison pour explorer une pièce sans perdre le lien.</p>', src: 'Diaporama, diapositive 13, SDIS 51' }
      ] },
    { id: 'apres', t: 'Après l’engagement', ic: 'reset', src: 'Diaporama, diapositive 16 ; dossier B2',
      steps: ['Nettoyer et vérifier le masque (remis en housse de protection).', 'Nettoyer et vérifier tous les éléments.', 'Vérifier l’état des bouteilles, les remplir et vérifier la pression d’air.', 'Plomber et remettre bouchons et plaques de contrôle sur toutes les bouteilles opérationnelles.', 'Ranger tout le matériel à son emplacement d’origine.', 'Retirer tout matériel ayant subi une agression chimique ou thermique importante et le faire contrôler par le fabricant ou un laboratoire notifié ; signaler toute anomalie.'], stepsTitle: 'Remise en condition' }
  ],
  key: ['Le chef d’agrès désigne le personnel, le point d’entrée et le contrôleur.', 'Contrôleur : 1 point d’accès, 10 porteurs maximum (5 binômes dont celui de sécurité).', 'T = P × V ÷ Q ; par défaut Q = 90 l/min, V = 6 l, soit T ≈ 0,07 P.', 'R.A.P.A.C.E : Robinet, Ajustement, Pression (≥ 280 bar SDIS 51 – 270 bar GTO), Armement, Code, Étanchéité.', 'Signal de détresse : tous les binômes sortent, le binôme de sécurité est engagé.', 'Reconnaissance latérale : chef relié à l’équipier par 6 m, équipier sur la ligne guide en liaison courte.', 'Les équipes qui sortent sont prioritaires.'],
  traps: ['Croire qu’une seule bouteille à 300 bar donne toujours 30 minutes : le calcul par défaut donne environ 20 min.', 'Laisser engager deux ARI de types différents dans un même binôme.', 'Faire demi-tour sans avoir amarré la ligne guide.', 'Oublier de mettre en place le binôme de sécurité après une première reconnaissance rapide.'],
  quiz: [
    { q: 'Combien de porteurs un contrôleur peut-il superviser au maximum ?', c: ['10, soit 5 binômes dont celui de sécurité', '6, soit 3 binômes', '20, sans compter le binôme de sécurité', 'Autant que de bouteilles disponibles'], e: 'Diaporama, diapositive 10. Le GTO formule : 10 porteurs, soit 4 binômes et le binôme de sécurité.', s: 'pendant' },
    { q: 'Quelle consommation moyenne retient-on en l’absence de fichier individuel d’aptitude ?', c: ['90 l/min', '40 l/min', '135 l/min', '300 l/min'], e: 'La formule devient T = P × 6 ÷ 90, arrondie à T = 0,07 P.', s: 'calcul' },
    { q: 'Avec la formule simplifiée du SDIS 51, quelle durée théorique donne une bouteille de 6 l à 300 bar ?', c: ['Environ 20 min', 'Environ 30 min', 'Environ 45 min', 'Environ 10 min'], e: '300 × 6 ÷ 90 = 20 min (0,07 × 300 = 21 min avec l’arrondi).', s: 'calcul' },
    { q: 'Que se passe-t-il quand un signal sonore de détresse retentit ?', c: ['Tous les binômes engagés rejoignent la sortie ; le binôme de sécurité est engagé', 'Seul le binôme le plus proche se dirige vers le signal', 'Le contrôleur attend 5 minutes avant d’agir', 'Les binômes poursuivent leur mission'], e: 'Diaporama, diapositive 10, et dossier B2.', s: 'pendant' },
    { q: 'En reconnaissance latérale, comment le chef d’équipe est-il relié ?', c: ['À son équipier par les 6 m de sa liaison', 'Directement à la ligne guide par 1,25 m', 'Il se détache pour explorer', 'Au contrôleur par une seconde ligne guide'], e: 'L’équipier reste sur la ligne guide en liaison courte ; le chef explore les pièces sans se désolidariser.', s: 'liaisons' },
    { q: 'Quelle pression minimale le diaporama SDIS 51 exige-t-il au R.A.P.A.C.E pour une bouteille de 300 bar ?', c: ['280 bar (le GTO 2019 indique 270 bar)', '200 bar', '300 bar exactement', '250 bar'], e: 'Divergence signalée : 280 bar dans les documents SDIS 51, 270 bar (pression nominale − 10 %) dans le GTO.', s: 'porteurs' },
    { q: 'Que vérifie le contrôleur avant l’engagement ?', c: ['Compatibilité masque/appareil, ARI identiques dans le binôme, capelage hors zone à risque', 'Le groupe sanguin des porteurs', 'Uniquement la pression des bouteilles', 'L’état de la pompe de l’engin'], e: 'Diaporama, diapositive 7, et dossier B2.', s: 'controleur' },
    { q: 'En opération complexe, qui est prioritaire sur la ligne guide ?', c: ['Les équipes qui sortent', 'Les équipes qui pénètrent', 'Le binôme le plus gradé', 'Le binôme de sécurité, toujours'], e: 'Diaporama, diapositive 14, et dossier B2.', s: 'liaisons' }
  ]
});

/* =====================================================================================
   CE INC 3 — CHAPITRE 6 : règles de base d’emploi (B3)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-ari-regles', part: 'ince', seq: INCE_2_SEQ_ARI,
  title: 'Les règles de base d’emploi et de sécurité de l’ARI', short: 'Règles de base ARI', motif: 'shield',
  sources: [INCE_2_PE + ', séquence B3 : livret formateur (justifications et document formateur B3-6)', 'Livret stagiaires B3 « Les règles de base d’emploi et de sécurité »', 'Diaporama « Les règles de base et de sécurité d’emploi de l’A.R.I » ; fiches d’activité B3-4 et B3-7'],
  summary: 'Ce qu’il faut toujours faire et ne jamais faire, avant, pendant et après l’engagement — avec la raison de chaque règle.',
  why: '<b>Pourquoi des règles « immuables » ?</b> Le livret les dit immuables, à respecter par chaque porteur, mais <b>non exhaustives</b>. Le chef d’équipe doit pouvoir les justifier à son équipier : une règle comprise est une règle appliquée, même sous le stress.',
  sections: [
    { id: 'avant', t: 'Avant l’engagement', ic: 'check', src: 'Livret stagiaires B3 ; diaporama B3 ; livret formateur B3 (justifications)',
      html: '<div class="tw"><table><thead><tr><th>Il faudra toujours…</th><th>Parce que… (justification du livret formateur)</th></tr></thead><tbody>' +
        '<tr><td>Vérifier, avant de capeler, le bon état général du masque</td><td>Sinon le porteur risque de ne pas s’apercevoir d’une défaillance ou d’un défaut</td></tr>' +
        '<tr><td>Vérifier l’armement du sifflet à l’ouverture de la bouteille</td><td>Un sifflet qui ne fonctionne pas indique un dysfonctionnement du dispositif de fin de charge</td></tr>' +
        '<tr><td>Contrôler la pression de la bouteille au manomètre</td><td>Elle permet de calculer le temps d’engagement du binôme</td></tr>' +
        '<tr><td>Établir un code d’alerte selon les moyens de communication (sonores, filaires, radios)</td><td>Il assure la relation dans le binôme et avec le contrôleur à l’extérieur</td></tr>' +
        '<tr><td>Capeler l’ARI à l’air frais, à l’extérieur de la zone à risque</td><td>—</td></tr>' +
        '<tr><td>Contrôler l’étanchéité du masque</td><td>—</td></tr></tbody></table></div>' +
        '<div class="tw"><table><thead><tr><th>Il ne faudra jamais…</th><th>Parce que…</th></tr></thead><tbody>' +
        '<tr><td>Intervertir les masques d’un type d’appareil à l’autre</td><td>Non-respect de l’homologation de l’appareil ; risque de mauvais fonctionnement des soupapes d’expiration</td></tr>' +
        '<tr><td>Pénétrer dans la zone à risques si la pression est inférieure à <b>180 bar</b> (ARICO remplis à 200 bar) ou <b>280 bar</b> (ARICO remplis à 300 bar)</td><td>Risque de retour trop précoce du porteur</td></tr></tbody></table></div>' +
        '<div class="callout warn">Le GTO 2019 retient pour une bouteille de 300 bar une pression minimale de <b>270 bar</b> (nominale − 10 %) : divergence avec les 280 bar des documents SDIS 51.</div>' },
    { id: 'pendant', t: 'Pendant l’engagement', ic: 'team', src: 'Livret stagiaires B3 ; diaporama B3 ; livret formateur B3',
      html: '<div class="tw"><table><thead><tr><th>Règle</th><th>Contenu</th><th>Justification</th></tr></thead><tbody>' +
        '<tr><td><b>1. Enregistrer et surveiller les binômes</b></td><td>Les plaques de contrôle sont données au contrôleur pour qu’il les renseigne. Un binôme engagé est <b>indissociable</b> pendant l’opération</td><td>Meilleure gestion des engagements et surveillance des binômes ; on ne laisse <b>jamais un équipier seul sous ARI</b></td></tr>' +
        '<tr><td><b>2. Assurer la communication</b></td><td>Entre les membres du binôme ; entre le binôme et le contrôleur (radio, corne de brume, etc.)</td><td>—</td></tr>' +
        '<tr><td><b>3. Utiliser la ligne de vie</b></td><td>Rester accroché à la ligne guide <b>en permanence</b> ; l’établissement réalisé peut servir de ligne guide</td><td>Sécurité du binôme en cas de retour d’urgence, et en cas de sauvetage par un autre binôme</td></tr></tbody></table></div>' },
    { id: 'apres', t: 'Après l’engagement', ic: 'reset', src: 'Livret stagiaires B3 ; diaporama B3 ; livret formateur B3',
      html: '<div class="tw"><table><thead><tr><th>Il faudra toujours…</th><th>Parce que…</th></tr></thead><tbody>' +
        '<tr><td>Nettoyer et vérifier le masque et tous les éléments (bouteille, harnais, tuyauterie)</td><td>Relever tous les défauts qui risquent d’engendrer un dysfonctionnement</td></tr>' +
        '<tr><td>Remplir les bouteilles et vérifier la pression d’air</td><td>S’assurer que la bouteille a atteint la pression minimale d’engagement</td></tr>' +
        '<tr><td>Plomber et remettre bouchons et plaques de contrôle sur les bouteilles opérationnelles</td><td>Le plomb et le bouchon assurent au prochain porteur que l’appareil est opérationnel</td></tr>' +
        '<tr><td>Ranger tout le matériel à son emplacement d’origine</td><td>—</td></tr>' +
        '<tr><td>Retirer tout matériel ayant subi une agression chimique ou thermique importante et le faire contrôler (fabricant ou laboratoire notifié)</td><td>Sécurité des prochains porteurs</td></tr></tbody></table></div>' },
    { id: 'qroc', t: 'Le QROC corrigé (document formateur B3-6)', ic: 'clip', src: 'Livret formateur B3, document formateur B3-6 ; fiche d’activité B3-7',
      html: '<p>Le stagiaire doit citer les règles en 10 minutes, <b>trois oublis tolérés</b>. Réponses attendues :</p>' +
        '<div class="tw"><table><thead><tr><th>Avant</th><th>Pendant</th><th>Après</th></tr></thead><tbody>' +
        '<tr><td>Bon état général du masque ; pression au manomètre (180 mini pour 200 bar, 280 mini pour 300 bar) ; armement du sifflet à l’ouverture ; code d’alerte ; capeler à l’air frais ; étanchéité du masque</td>' +
        '<td>Enregistrer et surveiller les binômes engagés ; code de communication et d’alerte ; utiliser la ligne de vie</td>' +
        '<td>Nettoyer et vérifier le masque ; nettoyer et vérifier les autres éléments ; changer la bouteille d’air ; retirer pour contrôle le matériel agressé ; ranger le matériel à son emplacement</td></tr></tbody></table></div>' }
  ],
  key: ['Règles immuables, à respecter par chaque porteur, non exhaustives.', 'Jamais d’interversion de masques : homologation et soupapes d’expiration.', 'Pression minimale : 180 bar (bouteilles 200 bar), 280 bar (bouteilles 300 bar) — 270 bar au GTO.', 'Un binôme engagé est indissociable : jamais un équipier seul sous ARI.', 'Rester accroché à la ligne guide en permanence.', 'Plomb + bouchon = bouteille opérationnelle pour le prochain porteur.'],
  traps: ['Capeler dans la zone enfumée pour gagner du temps.', 'Considérer que la pression n’a pas besoin d’être relevée si la bouteille est plombée.', 'Remettre en service un appareil exposé à une forte agression thermique sans contrôle.'],
  quiz: [
    { q: 'Pourquoi ne faut-il jamais intervertir les masques d’un type d’appareil à l’autre ?', c: ['Non-respect de l’homologation et risque de mauvais fonctionnement des soupapes d’expiration', 'Pour des raisons d’hygiène uniquement', 'Parce que les masques n’ont pas la même couleur', 'Parce que le sifflet ne fonctionnerait plus'], e: 'Livret stagiaires B3 et justification du livret formateur.', s: 'avant' },
    { q: 'En dessous de quelle pression ne doit-on pas pénétrer avec un ARICO rempli à 200 bar (documents SDIS 51) ?', c: ['180 bar', '150 bar', '200 bar', '100 bar'], e: 'Règle « il ne faudra jamais » : 180 b pour les ARICO remplis à 200 b, 280 b pour ceux remplis à 300 b.', s: 'avant' },
    { q: 'Que signifie un sifflet qui ne se fait pas entendre à l’ouverture de la bouteille ?', c: ['Un dysfonctionnement du dispositif de fin de charge', 'Que la bouteille est pleine', 'Que le masque est étanche', 'Que la balise est armée'], e: 'Justification du livret formateur B3.', s: 'avant' },
    { q: 'Pourquoi rester accroché en permanence à la ligne guide ?', c: ['Pour le retour d’urgence et pour permettre le sauvetage par un autre binôme', 'Pour mesurer la distance parcourue', 'Pour économiser l’air', 'Pour que le contrôleur entende le binôme'], e: 'Justification du livret formateur B3 (règles pendant l’engagement).', s: 'pendant' },
    { q: 'Qu’est-ce qui assure au prochain porteur qu’un appareil est opérationnel ?', c: ['La présence du plomb et du bouchon', 'Une étiquette « vérifié »', 'Le rangement dans l’engin', 'La propreté du masque'], e: 'Justification du livret formateur B3 (règles après l’engagement).', s: 'apres' },
    { q: 'Que peut-on utiliser comme ligne guide d’après les règles de base ?', c: ['L’établissement réalisé', 'Une commande de 20 m', 'Le câble électrique du local', 'La sangle du harnais'], e: 'Livret stagiaires B3 : « L’établissement réalisé peut servir de ligne guide ».', s: 'pendant' }
  ]
});

/* =====================================================================================
   CE INC 3 — CHAPITRE 7 : déroulement type d’une reconnaissance (exposé A 1 bis)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-ari-reconnaissance', part: 'ince', seq: INCE_2_SEQ_ARI,
  title: 'Le déroulement type d’une reconnaissance sous ARI', short: 'Déroulement d’une reconnaissance', motif: 'eye',
  sources: [INCE_2_PE + ', exposé « A 1 bis : déroulement type d’une reconnaissance » (diaporama)', 'Livret stagiaire Chef d’équipe incendie SDIS 51 (v2019.1), partie 1 (GOC) et § 4.1 « Rôle du chef d’équipe pendant la reconnaissance »'],
  summary: 'Objectifs de la reconnaissance, rôle du binôme et du chef d’équipe, et seuil des 20 m au-delà duquel on applique le GNR ARI avec ligne de vie.',
  why: '<b>Pourquoi la reconnaissance est-elle décisive ?</b> C’est la première étape de toute intervention : elle détermine les actions à réaliser. Le livret CE rappelle que c’est sur les <b>comptes rendus des chefs d’équipe</b>, par exemple après une reconnaissance longue sous ARI dans un sous-sol complexe, que le COS décide de la manœuvre : une erreur de local reconnu peut compromettre l’intervention et la sécurité des binômes suivants.',
  sections: [
    { id: 'objectifs', t: 'Objectifs et réactions immédiates', ic: 'target', src: 'Exposé A 1 bis, diapositives « Généralité » et « Objectifs »',
      html: '<p>La reconnaissance est la <b>première étape</b> à réaliser sur tout type d’intervention ; elle sert à déterminer les actions à réaliser pour mener à bien l’opération. Elle renseigne sur :</p>' +
        '<ul class="check"><li>les <b>sauvetages</b> à opérer ;</li><li>les <b>endroits les plus exposés</b> ;</li><li>les <b>matières en présence</b>.</li></ul>' },
    { id: 'feux', t: 'Le déroulement type lors des feux', ic: 'flame', src: 'Exposé A 1 bis, diapositive « Le déroulement type lors des feux »',
      html: '<p>Dès son arrivée, le <b>chef d’agrès</b>, accompagné d’un <b>binôme d’attaque</b>, explore les endroits menacés par l’incendie pour :</p>' +
        '<ul class="check"><li>effectuer les <b>sauvetages ou mises en sécurité</b> ;</li><li><b>couper les fluides</b> ;</li><li>apprécier les risques de <b>propagation</b> ;</li><li>déterminer les <b>points d’attaque</b>, les <b>cheminements</b> et les communications intérieures.</li></ul>' +
        '<p>La reconnaissance est effectuée <b>en binôme</b> car la progression est difficile (fumées). Le binôme s’équipe de l’ARI, effectue la mission désignée par le chef d’agrès (sauvetages, reconnaissance dans les étages enfumés, ouverture de pyrodôme…) et <b>rend compte de sa mission</b>, en respectant les règles de protection individuelle et collective.</p>',
      figs: [{ img: 'img/ince-2/reconnaissance-fumees.jpg', cap: 'Binômes sous ARI en progression dans les fumées', txt: '<p>Visibilité réduite et cheminement encombré : c’est la situation où le chef d’équipe doit rester méthodique et ne laisser aucun volume dans le doute.</p>', src: 'Diaporama « Les règles de base et de sécurité d’emploi de l’A.R.I » (séquence B3), SDIS 51' }] },
    { id: 'distance', t: 'Au-delà de 20 m : la manœuvre du GNR ARI', ic: 'rope', src: 'Exposé A 1 bis, diapositive « Les situations spécifiques »',
      html: '<p>Lors de reconnaissances dans des <b>locaux de grande envergure</b>, où la visibilité est réduite et les accès nombreux, et <b>dès que la distance entre le point d’accès et le but à atteindre est supérieure à 20 m</b>, la manœuvre doit être conforme au <b>GNR Appareil respiratoire isolant</b> (ligne de vie, contrôleur).</p>' +
        '<p>Avant toute manœuvre, le personnel doit être sensibilisé aux <b>atmosphères non respirables</b> et aux <b>contraintes physiologiques</b>, et connaître parfaitement le matériel lié à l’exploration :</p>' +
        '<ul class="check"><li>ARI et balise sonore ;</li><li>liaison personnelle et ligne guide ;</li><li>tableau et plaque de contrôle ;</li><li>dispositif de dérivation.</li></ul>' },
    { id: 'role-ce', t: 'Le rôle du chef d’équipe pendant la reconnaissance', ic: 'team', src: 'Livret stagiaire Chef d’équipe incendie (v2019.1), partie 1 et § 4.1',
      html: '<ul class="check"><li>Mission : une <b>reconnaissance intégrale</b> de tous les volumes rencontrés, <b>méthodique et précise</b>, de sorte qu’aucun volume ne soit quitté avec un doute sur la présence d’une victime.</li>' +
        '<li>Il peut s’aider du <b>manche de la hache à tête plate</b> pour atteindre les endroits difficiles d’accès.</li>' +
        '<li>Il effectue régulièrement des <b>appels verbaux</b>, répartis dans le temps et l’espace, et fait <b>régner le silence</b> dans le binôme pour discerner les réponses ou plaintes des victimes.</li>' +
        '<li>Sa communication avec l’équipier est <b>claire et concise</b>, mais suffisante pour que l’équipier connaisse ses intentions et ses actions.</li>' +
        '<li>Il demande au chef d’agrès les moyens nécessaires (ouverture d’issues par manœuvre de force) ; en cas de péril, il peut visiter les locaux à son initiative et rend compte immédiatement d’un refus des occupants.</li>' +
        '<li>Il rend compte <b>sans délai</b> de tout danger, potentiel ou avéré, et ne se détourne de sa mission qu’en cas d’urgence absolue (personne en danger immédiat, binôme en difficulté).</li></ul>' +
        '<div class="callout ok">Pour le marquage des portes, le livret CE renvoie au livret Équipier (POP-16), traité dans la partie Équipier incendie.</div>' }
  ],
  key: ['La reconnaissance est la première étape de toute intervention.', 'Elle renseigne sur les sauvetages, les endroits exposés et les matières en présence.', 'Feux : sauvetages, coupure des fluides, propagation, points d’attaque et cheminements.', 'Distance point d’accès → but > 20 m : manœuvre conforme au GNR ARI.', 'Le chef d’équipe ne quitte aucun volume avec un doute sur une victime.', 'Appels verbaux réguliers et silence dans le binôme.'],
  traps: ['Engager une reconnaissance longue dans un grand volume sans ligne de vie ni contrôleur.', 'Parler sans cesse à son équipier et ne plus entendre les victimes.', 'Se détourner de sa mission sans urgence absolue.'],
  quiz: [
    { q: 'Au-delà de quelle distance entre le point d’accès et le but la manœuvre doit-elle être conforme au GNR ARI ?', c: ['20 m', '50 m', '5 m', '100 m'], e: 'Exposé A 1 bis, « Les situations spécifiques » : distance supérieure à 20 m, locaux de grande envergure, visibilité réduite.', s: 'distance' },
    { q: 'Sur quoi la reconnaissance renseigne-t-elle en priorité selon l’exposé ?', c: ['Les sauvetages à opérer, les endroits les plus exposés, les matières en présence', 'Le nombre d’engins à demander, uniquement', 'L’identité du propriétaire', 'La météo'], e: 'Exposé A 1 bis, diapositive « Objectifs ».', s: 'objectifs' },
    { q: 'Pourquoi la reconnaissance est-elle effectuée en binôme ?', c: ['Parce que la progression est difficile (fumées)', 'Pour aller deux fois plus vite', 'Parce que le chef d’agrès reste à l’engin', 'Parce qu’un seul ARI ne suffit pas'], e: 'Exposé A 1 bis : la reconnaissance est effectuée en binôme car la progression est difficile.', s: 'feux' },
    { q: 'Que fait le chef d’équipe pour repérer d’éventuelles victimes ?', c: ['Il fait des appels verbaux réguliers et fait régner le silence dans le binôme', 'Il crie en continu', 'Il attend que les victimes se signalent par radio', 'Il laisse l’équipier explorer seul'], e: 'Livret CE, § 4.1.', s: 'role-ce' },
    { q: 'Quelle est la mission du chef d’équipe en reconnaissance selon le livret CE ?', c: ['Une reconnaissance intégrale de tous les volumes, sans laisser de doute', 'Une reconnaissance rapide des seules pièces enfumées', 'Uniquement la recherche du foyer', 'Uniquement le marquage des portes'], e: 'Livret CE, § 4.1 : reconnaissance intégrale, méthodique, précise.', s: 'role-ce' }
  ]
});

/* =====================================================================================
   CE INC 3 — CHAPITRE 8 : mises en situation (reconnaissance longue distance, cave à fumée) et évaluation
   ===================================================================================== */
VSAV.chap({
  id: 'ince-ari-exercices', part: 'ince', seq: INCE_2_SEQ_ARI,
  title: 'Reconnaissance longue distance et cave à fumée : ce qui est évalué', short: 'Exercices ARI et évaluation', motif: 'target',
  sources: [INCE_2_PE + ', séquence 3 « Reconnaissance longue distance » : fiche séquentielle, guide formateur, fiche d’activité, grille d’évaluation formative', INCE_2_PE + ', séquence B5 « Exercice en cave à fumée » : fiche séquentielle et fiche d’activité B5-3', INCE_2_DOSSIER + ', grille d’évaluation B4-2-1'],
  summary: 'Progresser à l’aide de la ligne de vie dans un local enfumé, réaliser une mission en binôme — et les critères qui valident le chef d’équipe.',
  why: '<b>Pourquoi connaître la grille ?</b> Elle dit exactement ce qu’on attend d’un chef d’équipe sous ARI : s’équiper, vérifier, se contrôler mutuellement, s’engager en sécurité, communiquer, rester à l’aise. Et elle rappelle que <b>la rapidité ne doit jamais être privilégiée au détriment de la sécurité</b>.',
  sections: [
    { id: 'reco-longue', t: 'La reconnaissance longue distance', ic: 'rope', src: 'Fiche séquentielle et fiche d’activité, séquence 3',
      html: '<p>Objectif : progresser <b>en binôme</b> dans un local à l’aide de la ligne de vie, en respectant les règles d’utilisation et de sécurité. Les binômes réalisent sous ARI la mise en place de la ligne de vie dans <b>quatre manœuvres</b> :</p>' +
        '<ul class="check"><li>la simple reconnaissance ;</li><li>la reconnaissance latérale ;</li><li>l’opération complexe ;</li><li>la dérivation.</li></ul>' +
        '<p>Ce qu’il faut retenir (fiche séquentielle) : mise en place de la ligne de vie dans les meilleures conditions (<b>respect des points d’amarrage et des nœuds</b>), respect du GNR, communication, gestion du stress, connaissance des 4 manœuvres, <b>respect de la liaison courte</b> et de la direction donnée.</p>' +
        '<div class="callout ok">Consigne au formateur : faire comprendre à l’équipier que son objectif est de <b>tendre au mieux la ligne guide</b>, de réaliser au mieux ses points d’amarrage et de <b>rester tout le temps sur sa liaison courte</b>.</div>' },
    { id: 'deroulement', t: 'Le déroulement d’un passage', ic: 'list', src: 'Fiche d’activité séquence 3 ; fiche d’activité B5-3',
      steps: ['Formateur : accueille le binôme à l’entrée de la pièce enfumée, porte fermée.', 'Formateur : s’assure que le contrôle croisé est effectué pendant l’équipement, ainsi que toutes les règles avant l’engagement ; si une règle n’est pas appliquée, il arrête la manœuvre et redirige les stagiaires.', 'Formateur : donne la mission, s’assure qu’elle est bien saisie par le binôme, puis ouvre la porte pour l’engagement.', 'Formateur : surveille l’évolution du binôme et le respect des règles pendant l’engagement.', 'Formateur : accueille le binôme à l’extérieur pour faire le point sur la mission.', 'Formateur : s’assure de la remise en état du matériel et, en cave à fumée, de la prise en charge du binôme par le SSSM à la sortie.'], stepsTitle: 'Un passage en local enfumé' },
    { id: 'cave', t: 'L’exercice en cave à fumée (B5)', ic: 'spray', src: 'Fiche séquentielle B5 ; fiche d’activité B5-3',
      html: '<p>Thème : <b>trouver et fermer une vanne</b> dans une pièce enfumée, en binôme sous ARI. Matériel : producteur de fumée froide, pièce ou local encombré, tableau de contrôle, compresseur.</p>' +
        '<p>La séquence commence par un questionnaire vrai-faux sur les <b>contraintes visuelles, auditives et psychologiques</b> engendrées par les fumées. Résultat attendu : chaque stagiaire adopte un <b>comportement adapté</b> au travail en binôme, sous ARI et dans une pièce enfumée, pour assurer la mission.</p>' },
    { id: 'grille', t: 'La grille d’évaluation formative du chef d’équipe sous ARI', ic: 'clip', src: 'Grille d’évaluation formative, séquence 3 « Évaluation du chef d’équipe lors de la mise en œuvre de l’ARI » ; grille B4-2-1 du dossier B2',
      html: '<div class="tw"><table><thead><tr><th>Critères (grille séquence 3)</th><th>Critères complémentaires (grille B4-2-1)</th></tr></thead><tbody>' +
        '<tr><td>S’équipe correctement</td><td>S’équipe correctement sans geste d’énervement</td></tr>' +
        '<tr><td>Effectue le R.A.P.A.C.E</td><td>S’engage en toute sécurité (gants, liaison personnelle)</td></tr>' +
        '<tr><td>Effectue un contrôle croisé</td><td>Effectue correctement les nœuds d’amarrage de la ligne guide</td></tr>' +
        '<tr><td>S’engage en toute sécurité</td><td>Établit sans peine une dérivation</td></tr>' +
        '<tr><td>Communique avec son binôme</td><td>Agit rapidement avec efficacité ; sait retrouver son chemin</td></tr>' +
        '<tr><td>Évolue à l’aise avec l’ARI</td><td>Évolue à l’aise avec l’ARI</td></tr></tbody></table></div>' +
        '<div class="callout bad"><b>Règle de validation :</b> <b>1 NON en case grisée</b> ou <b>2 NON</b> sur l’ensemble des cases entraînent la non-validation. Le délai doit rester raisonnable, mais <b>en aucun cas la rapidité ne doit être privilégiée au détriment de la sécurité</b>.</div>' }
  ],
  key: ['Quatre manœuvres de ligne de vie : simple reconnaissance, latérale, opération complexe, dérivation.', 'L’équipier tend la ligne guide, soigne les amarrages et reste sur sa liaison courte.', 'Contrôle croisé et règles avant l’engagement vérifiés avant d’ouvrir la porte.', 'Cave à fumée : trouver et fermer une vanne ; prise en charge SSSM à la sortie.', 'Validation : 1 NON grisé ou 2 NON = non validé.', 'La rapidité ne prime jamais sur la sécurité.'],
  traps: ['Engager le binôme avant d’avoir vérifié que la mission est comprise.', 'Croire qu’un exercice réussi vite compense un oubli du R.A.P.A.C.E.'],
  quiz: [
    { q: 'Quelles sont les quatre manœuvres de ligne de vie travaillées en reconnaissance longue distance ?', c: ['Simple reconnaissance, reconnaissance latérale, opération complexe, dérivation', 'Attaque, protection, déblai, surveillance', 'Montée, descente, traversée, retour', 'Entrée, sortie, relève, évacuation'], e: 'Fiche d’activité de la séquence 3.', s: 'reco-longue' },
    { q: 'Quel objectif le formateur fixe-t-il à l’équipier sur la ligne guide ?', c: ['La tendre au mieux, soigner les amarrages et rester sur sa liaison courte', 'La dérouler le plus vite possible', 'La laisser au sol pour gagner du temps', 'La confier au chef d’équipe'], e: 'Fiche d’activité, séquence 3.', s: 'reco-longue' },
    { q: 'Quelle est la règle de non-validation de la grille d’évaluation formative ?', c: ['1 NON en case grisée ou 2 NON sur l’ensemble', '3 NON sur l’ensemble', '1 NON quelconque', 'Un temps supérieur à 10 minutes'], e: 'Grille d’évaluation formative de la séquence 3.', s: 'grille' },
    { q: 'Quel est le thème de l’exercice en cave à fumée (B5-3) ?', c: ['Trouver et fermer une vanne dans une pièce enfumée', 'Sauver un mannequin au 3e étage', 'Établir une LDT', 'Réaliser un passage de porte'], e: 'Fiche d’activité B5-3.', s: 'cave' },
    { q: 'Que fait le formateur si une règle avant l’engagement n’est pas appliquée ?', c: ['Il arrête la manœuvre et redirige les stagiaires', 'Il le note et laisse continuer', 'Il engage quand même le binôme de sécurité', 'Il recommence l’exercice une semaine plus tard'], e: 'Fiches d’activité séquence 3 et B5-3.', s: 'deroulement' }
  ]
});

/* =====================================================================================
   CE INC 4 — CHAPITRE 9 : les manœuvres M1 à M6 et l’évaluation du chef d’équipe ; M1 (LDT)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-mvr-principes', part: 'ince', seq: INCE_2_SEQ_MAN,
  title: 'Les manœuvres M1 à M6 et la grille du chef d’équipe', short: 'Manœuvres M1 à M6 : principes', motif: 'grid',
  sources: [INCE_2_DOCM + ' : tableau récapitulatif et M1', INCE_2_GRILLES, INCE_2_PG + ', fiche séquentielle « Les différentes manœuvres M1 à M6 »', INCE_2_PG + ', diaporamas « M2 », « M3 », « Équipes en binômes – manœuvre SDIS 51 »'],
  summary: 'Les 13 manœuvres de binôme, les commandements, les critères communs d’évaluation du chef d’équipe et la M1 (LDT).',
  why: '<b>Pourquoi des manœuvres numérotées ?</b> Un commandement bref (« M3.3 », « Établissez ») déclenche des gestes connus de tous, dans un ordre fixe : le chef d’agrès gagne du temps et le chef d’équipe sait ce que fait son équipier sans le regarder. La grille d’évaluation montre aussi que le chef d’équipe est jugé <b>autant sur la sécurité et la conduite de son binôme</b> que sur les gestes eux-mêmes.',
  sections: [
    { id: 'tableau', t: 'Tableau récapitulatif des manœuvres', ic: 'grid', src: INCE_2_DOCM + ', tableau récapitulatif',
      html: '<div class="tw"><table><thead><tr><th>N°</th><th>Manœuvre</th><th>Binôme</th></tr></thead><tbody>' +
        '<tr><td><b>M1</b></td><td>Établissement de la LDT</td><td>Attaque</td></tr>' +
        '<tr><td><b>M2.1</b></td><td>Alimentation d’une division au moyen du dévidoir</td><td>Alimentation</td></tr>' +
        '<tr><td><b>M2.2</b></td><td>Alimentation d’une division au moyen de tuyaux roulés en double</td><td>Alimentation</td></tr>' +
        '<tr><td><b>M2.3</b></td><td>Alimentation d’une colonne sèche au moyen du dévidoir</td><td>Alimentation</td></tr>' +
        '<tr><td><b>M2.4</b></td><td>Alimentation d’une colonne sèche au moyen de tuyaux roulés en double</td><td>Alimentation</td></tr>' +
        '<tr><td><b>M3.1</b></td><td>LDMR(S) 500 par l’extérieur au moyen de la commande</td><td>Attaque + alimentation</td></tr>' +
        '<tr><td><b>M3.2</b></td><td>LDMR(S) 500 au moyen de l’échelle à coulisses</td><td>Attaque + alimentation</td></tr>' +
        '<tr><td><b>M3.3</b></td><td>LDMR(S) 500 par les communications existantes avec le sac d’attaque</td><td>Attaque</td></tr>' +
        '<tr><td><b>M3.4</b></td><td>LDMR(S) 500 par les communications existantes avec des tuyaux roulés en double</td><td>Attaque</td></tr>' +
        '<tr><td><b>M3.5</b></td><td>LDMR(S) 500 dans les étages par le jour central de l’escalier</td><td>Attaque + alimentation</td></tr>' +
        '<tr><td><b>M4</b></td><td>Alimentation de l’engin</td><td>Alimentation</td></tr>' +
        '<tr><td><b>M5</b></td><td>Établissement d’une lance à mousse</td><td>Attaque</td></tr>' +
        '<tr><td><b>M6</b></td><td>Remplacement / prolongation de tuyau</td><td>Attaque</td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Attention, numérotations divergentes :</b> le diaporama « M3 » numérote autrement (M3.1 = sac d’attaque par les communications existantes, M3.1 bis = tuyaux en double, M3.2 = <b>LDMR(S) 1000</b> en tuyaux de 70, M3.3 = par l’extérieur à la commande) ; le diaporama « Équipes en binômes » propose encore une autre liste (3.1 de plain-pied, 3.4 à l’échelle à coulisses, 3.5 sur colonne sèche ; 4.1 à 4.5 alimentation de l’engin à moins de 10 m, moins de 20 m, plus de 20 m, par l’établissement, par aspiration ; 5.1/5.2 proportionneur mobile ou fixe ; 6.1/6.2 remplacement ou prolongement). Ce chapitre suit le <b>document formateur et les grilles</b>.</div>' },
    { id: 'commandements', t: 'Les commandements du chef d’agrès', ic: 'play', src: INCE_2_PG + ', diaporamas « M2 » et « M3 » ; diaporama « M5 » (CSP Reims, 2000)',
      html: '<div class="tw"><table><thead><tr><th>Temps</th><th>Exemple (diaporamas SDIS 51)</th><th>Réaction du binôme</th></tr></thead><tbody>' +
        '<tr><td><b>Commandement préparatoire</b></td><td><span class="cmd">« Binôme d’attaque ! Pour l’établissement d’une LDMR(S) 500 au moyen du sac d’attaque, EN RECONNAISSANCE »</span></td><td>Le binôme prend le matériel et <b>suit le chef d’agrès</b></td></tr>' +
        '<tr><td><b>Commandement d’exécution</b></td><td><span class="cmd">« Pour l’établissement d’une LDMR(S) 500, point d’attaque…, prise d’eau…, accès…, mission…, ÉTABLISSEZ »</span></td><td>Chaque membre exécute les gestes de la manœuvre</td></tr></tbody></table></div>' +
        '<p>Pour le binôme d’alimentation, l’ordre d’exécution précise l’<b>emplacement de la division</b> (ou l’orifice d’alimentation de la colonne sèche) et la <b>prise d’eau</b>. Pour une lance à mousse, il précise aussi l’<b>emplacement du proportionneur</b>.</p>' },
    { id: 'criteres', t: 'Les critères communs d’évaluation du chef d’équipe', ic: 'clip', src: INCE_2_GRILLES,
      html: '<p>Chaque fiche d’évaluation formative « Chef d’équipe » comporte les mêmes critères, plus les gestes propres à la manœuvre :</p>' +
        '<div class="tw"><table><thead><tr><th>Critère à observer</th><th>Case NON</th></tr></thead><tbody>' +
        '<tr><td>Surveille et observe son environnement en permanence</td><td></td></tr>' +
        '<tr><td><b>Porte les EPI adaptés</b></td><td><b>grisée</b></td></tr>' +
        '<tr><td>Applique les consignes pour évoluer en sécurité dans sa zone (balisage, coupure des fluides, explosimètre…) — sur les grilles M1, M3.1 BAT, M3.2 BAT, M3.3 à M3.5, M5 et M6</td><td></td></tr>' +
        '<tr><td><b>Est attentif à la sécurité du binôme, ne réalise pas de gestes dangereux</b></td><td><b>grisée</b></td></tr>' +
        '<tr><td>Adopte un comportement calme (ne panique pas, maîtrise son stress, reste concentré sur ses objectifs)</td><td></td></tr>' +
        '<tr><td>Assure son intervention en respectant les règles des GNR (établissements, manœuvre en binôme) : gestes de la manœuvre</td><td></td></tr>' +
        '<tr><td>Communique avec son binôme (rend compte, compréhensible, clair)</td><td></td></tr>' +
        '<tr><td><b>Est capable de corriger son équipier si une erreur est commise</b></td><td></td></tr>' +
        '<tr><td>Respecte et applique les ordres donnés par le chef d’agrès</td><td></td></tr></tbody></table></div>' +
        '<div class="callout bad"><b>1 NON en case grisée ou 2 NON</b> sur l’ensemble entraînent la non-validation. <b>En cas de NON grisé, la manœuvre doit être stoppée</b> et le stagiaire informé des gestes dangereux.</div>' +
        '<p class="small muted">Cases grisées relevées d’après la mise en forme des fichiers de grilles.</p>' },
    { id: 'm1', t: 'M1 : établissement de la LDT', ic: 'flame', src: INCE_2_DOCM + ', M1 ; grille M1',
      html: '<div class="tw"><table><thead><tr><th>Chef BAT</th><th>Équipier BAT</th></tr></thead><tbody>' +
        '<tr><td>Décroche la LDT</td><td></td></tr>' +
        '<tr><td>Fait une réserve sur l’épaule</td><td></td></tr>' +
        '<tr><td>Se rend au point d’attaque</td><td>Facilite le déroulement du tuyau</td></tr>' +
        '<tr><td></td><td>Dépose le 1<sup>er</sup> raccord au pied du chef</td></tr>' +
        '<tr><td>Crie <span class="cmd">« Halte »</span> dès que l’équipier a déposé le 1<sup>er</sup> raccord</td><td></td></tr>' +
        '<tr><td></td><td>Retransmet l’ordre <span class="cmd">« Halte »</span></td></tr>' +
        '<tr><td>Attaque le feu</td><td>Double le chef</td></tr></tbody></table></div>' +
        '<p>Remarque : pour faciliter la manœuvre, le <b>BAL peut s’intercaler judicieusement</b>. Gestes évalués chez le chef : décroche la LDT, se rend au point d’attaque, crie « halte » dès que l’équipier a posé le 1<sup>er</sup> raccord, attaque le feu.</p>' }
  ],
  key: ['M1 LDT ; M2 alimentation de division ou de colonne sèche ; M3 LDMR(S) 500 ; M4 alimentation de l’engin ; M5 mousse ; M6 remplacement/prolongation.', 'Commandement préparatoire « … EN RECONNAISSANCE » puis d’exécution « … ÉTABLISSEZ ».', 'Ordre d’exécution : point d’attaque, prise d’eau, accès, mission.', 'Cases grisées : port des EPI adaptés ; sécurité du binôme (pas de geste dangereux).', '1 NON grisé ou 2 NON = non validé ; NON grisé = manœuvre stoppée.', 'M1 : le chef crie « Halte » quand l’équipier a déposé le 1er raccord.'],
  traps: ['Confondre les numéros de manœuvre entre documents (M3.1 n’a pas le même contenu dans le document formateur et dans le diaporama M3).', 'Oublier que le chef d’équipe est évalué sur sa capacité à corriger son équipier.', 'Partir établir avant le commandement d’exécution.'],
  quiz: [
    { q: 'Quels critères ont la case NON grisée sur les grilles « Chef d’équipe » ?', c: ['Le port des EPI adaptés et la sécurité du binôme (pas de geste dangereux)', 'La communication et la rapidité', 'Le respect des ordres et le calme', 'Uniquement les gestes de la manœuvre'], e: 'D’après la mise en forme des grilles M1 à M6 ; un NON grisé suffit à invalider et impose d’arrêter la manœuvre.', s: 'criteres' },
    { q: 'Que se passe-t-il en cas de NON sur une case grisée ?', c: ['La manœuvre est stoppée et le stagiaire informé des gestes dangereux', 'On termine la manœuvre puis on en discute', 'Rien si les autres cases sont OUI', 'Le stagiaire refait uniquement la partie fautive'], e: 'Mention des grilles d’évaluation formative.', s: 'criteres' },
    { q: 'Dans la M1, quand le chef BAT crie-t-il « Halte » ?', c: ['Dès que l’équipier a déposé le 1er raccord', 'Quand la LDT est entièrement déroulée', 'Quand le conducteur a mis en eau', 'En arrivant au point d’attaque, avant tout'], e: 'Document formateur M1 : l’équipier dépose le 1er raccord au pied du chef, le chef crie « Halte », l’équipier retransmet.', s: 'm1' },
    { q: 'Que précise le commandement d’exécution d’une LDMR(S) 500 dans les diaporamas ?', c: ['Point d’attaque, prise d’eau, accès, mission', 'Uniquement le nom du binôme', 'Le débit et la pression de la pompe', 'L’heure de sortie prévisible'], e: 'Diaporama M3 : « Pour l’établissement d’une LDMR(S) 500, point d’attaque…, prise d’eau…, accès…, mission…, ÉTABLISSEZ ».', s: 'commandements' },
    { q: 'Que fait le binôme au commandement préparatoire « … EN RECONNAISSANCE » ?', c: ['Il prend le matériel et suit le chef d’agrès', 'Il commence immédiatement l’établissement', 'Il attend à l’engin', 'Il s’équipe et part seul reconnaître'], e: 'Diaporamas M2 et M3 : « Prennent le sac d’attaque et suivent le chef d’agrès », « Décrochent le dévidoir et suivent le chef d’agrès ».', s: 'commandements' },
    { q: 'Quel critère d’évaluation est propre au rôle de chef d’équipe ?', c: ['Est capable de corriger son équipier si une erreur est commise', 'Sait conduire l’engin', 'Remplit la plaque de contrôle du contrôleur', 'Décide seul de la prise d’eau'], e: 'Ce critère figure sur toutes les grilles « Chef d’équipe » M1 à M6.', s: 'criteres' }
  ]
});

/* =====================================================================================
   CE INC 4 — CHAPITRE 10 : le binôme d’alimentation (M2.1 à M2.4, M4)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-mvr-alimentation', part: 'ince', seq: INCE_2_SEQ_MAN,
  title: 'Le chef BAL : alimenter une division, une colonne sèche, l’engin (M2, M4)', short: 'M2 et M4 : alimentation', motif: 'drop',
  sources: [INCE_2_DOCM + ' : M2.1 à M2.4 et M4', INCE_2_GRILLES + ' (M2.1, M2.2, M2.4, M4)', INCE_2_PG + ', diaporama « M2 »', INCE_2_PG + ', diaporama « M4 » (CSP Reims, service formation, 2000)'],
  summary: 'Ce que fait le chef du binôme d’alimentation, geste par geste, et ce que fait son équipier.',
  why: '<b>Pourquoi le chef BAL compte-t-il autant ?</b> Sans eau, pas d’attaque. Le chef BAL pose la division ou raccorde la colonne sèche au bon endroit et dans le bon sens, puis <b>vérifie tout l’établissement</b> en remontant vers le point d’attaque : c’est lui qui garantit que l’eau arrivera au binôme d’attaque.',
  sections: [
    { id: 'm21', t: 'M2.1 : division au moyen du dévidoir', ic: 'drop', src: INCE_2_DOCM + ', M2.1 ; grille M2.1 ; diaporama M2, diapositive 1',
      html: '<div class="tw"><table><thead><tr><th>Chef BAL</th><th>Équipier BAL</th></tr></thead><tbody>' +
        '<tr><td colspan="2">Décrochent le dévidoir et suivent le chef d’agrès</td></tr>' +
        '<tr><td>Pose la division au sol</td><td>Bascule la flèche si besoin</td></tr>' +
        '<tr><td colspan="2">Tirent le dévidoir vers le point d’eau</td></tr>' +
        '<tr><td>Donne le ½ raccord au conducteur qui met en eau (sauf ordre contraire) ou se raccorde sur la prise d’eau et l’ouvre</td><td>Remet le dévidoir en état et le dépose à proximité de l’engin</td></tr>' +
        '<tr><td colspan="2">Vérifient l’établissement en remontant vers le point d’attaque et se mettent à disposition du chef d’agrès</td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Les sources divergent sur le rôle du chef BAL pendant le déroulement :</b> la grille M2.1 indique qu’il <b>tient la division pendant que l’équipier tire le dévidoir</b> ; le diaporama M2 qu’il <b>rejoint l’équipier et tire le dévidoir</b> jusqu’au point d’eau ; le document formateur que les deux « tirent le dévidoir ». De même, le diaporama fait <b>s’équiper des ARI</b> le BAL avant de vérifier l’établissement, quand le document formateur le présente comme une possibilité.</div>' },
    { id: 'm22', t: 'M2.2 : division au moyen de tuyaux roulés en double', ic: 'wave', src: INCE_2_DOCM + ', M2.2 ; grille M2.2 ; diaporama M2, diapositive 2',
      html: '<div class="tw"><table><thead><tr><th>Chef BAL</th><th>Équipier BAL</th></tr></thead><tbody>' +
        '<tr><td>Se munit d’<b>1 tuyau de 70 × 20 m</b> et d’une <b>division 65 / 2 × 40</b></td><td>Se munit de <b>2 tuyaux de 70 × 20 m</b></td></tr>' +
        '<tr><td colspan="2">Suivent le chef d’agrès</td></tr>' +
        '<tr><td>Déroule son tuyau et le raccorde à la division</td><td>Déroule un ou deux tuyaux selon la distance ; raccorde les tuyaux entre eux</td></tr>' +
        '<tr><td><b>Vérifie la fermeture des tubulures et en ouvre une partiellement</b></td><td></td></tr>' +
        '<tr><td>Rejoint l’équipier</td><td>Donne le ½ raccord au conducteur qui met en eau (sauf ordre contraire) ou se raccorde sur la prise d’eau et l’ouvre</td></tr>' +
        '<tr><td colspan="2">Vérifient l’établissement en remontant vers le point d’attaque et se mettent à disposition du chef d’agrès</td></tr></tbody></table></div>' },
    { id: 'm23', t: 'M2.3 et M2.4 : alimenter une colonne sèche', ic: 'road', src: INCE_2_DOCM + ', M2.3 et M2.4 ; grille M2.4 ; diaporama M2, diapositives 3 et 4',
      html: '<div class="tw"><table><thead><tr><th></th><th>Chef BAL</th><th>Équipier BAL</th></tr></thead><tbody>' +
        '<tr><td><b>M2.3</b> (dévidoir)</td><td>Se munit de la <b>vanne purge de 65 mm</b> ; retire la division du dévidoir ; raccorde la vanne purge à la colonne sèche et au tuyau du dévidoir ; rejoint l’équipier</td><td>Tire le dévidoir vers la prise d’eau ; donne le ½ raccord au conducteur ou se raccorde sur la prise d’eau et l’ouvre</td></tr>' +
        '<tr><td><b>M2.4</b> (tuyaux en double)</td><td>Se munit d’<b>1 tuyau de 70 × 20 m</b>, d’une <b>vanne purge de 65 mm</b> et d’un <b>tuyau de 70 × 2 m</b> ; déroule le 70 × 20 m ; raccorde la vanne purge à la colonne sèche et au tuyau ; rejoint l’équipier</td><td>Se munit de 2 tuyaux de 70 × 20 m ; déroule un ou deux tuyaux selon la distance, les raccorde ; donne le ½ raccord au conducteur ou se raccorde sur la prise d’eau</td></tr></tbody></table></div>' +
        '<div class="callout bad">Point de vigilance commun : <b>attention au sens de la vanne purge</b>. Puis les deux vérifient l’établissement en remontant vers le point d’attaque et se mettent à disposition du chef d’agrès.</div>' +
        '<p class="small muted">La grille M2.4 et le document formateur écrivent « au tuyau du dévidoir » pour la M2.4 ; le diaporama M2 précise « au tuyau de 70 × 20 mètres », ce qui correspond au matériel de cette manœuvre.</p>' },
    { id: 'm4', t: 'M4 : alimentation de l’engin', ic: 'ambulance', src: INCE_2_DOCM + ', M4 ; grille M4 ; diaporama M4 (CSP Reims, 2000)',
      steps: ['Tous : décrochent le dévidoir et enlèvent la division si nécessaire.', 'Chef BAL : à l’engin, passe le raccord au conducteur, puis prend le matériel nécessaire pour ouvrir l’hydrant (PI/BI).', 'Tous : tirent le dévidoir vers l’hydrant.', 'Chef BAL : à l’hydrant, ouvre l’eau pour purger.', 'Chef BAL : réalise le branchement.', 'Tous : vérifient l’établissement en remontant vers l’engin et rangent le dévidoir.', 'Tous : se mettent à disposition du chef d’agrès.'], stepsTitle: 'M4 — gestes du binôme d’alimentation',
      html: '<p>Commandement du diaporama M4 : <span class="cmd">« Binôme d’alimentation ! Avec le dévidoir : ALIMENTEZ L’ENGIN ! »</span> (sur poteau ou sur bouche d’incendie).</p>',
      figs: [{ img: 'img/ince-2/m4-alimentation-engin.jpg', cap: 'Trois temps forts de la M4', txt: '<p>De gauche à droite : le raccord est passé au conducteur à l’engin ; à l’hydrant, l’eau est ouverte pour purger ; le tuyau est branché sur le poteau et le volant manœuvré.</p>', src: 'Diaporama « M4 – Alimentation de l’engin », CSP Reims, service formation (2000), pictogrammes' }],
      after: '<div class="callout ok">Le document formateur rappelle qu’une fois sa mission terminée, le BAL peut décider de <b>s’équiper d’ARI</b> avant de rejoindre le chef d’agrès.</div>' }
  ],
  key: ['M2.1 : le chef BAL pose la division au sol ; l’équipier bascule la flèche si besoin.', 'M2.2 : chef = 1 × 70/20 m + division 65/2×40 ; équipier = 2 × 70/20 m.', 'M2.2 : le chef vérifie la fermeture des tubulures et en ouvre une partiellement.', 'Colonne sèche : vanne purge de 65 mm, attention à son sens.', 'M4 : à l’hydrant, ouvrir l’eau pour purger avant de brancher.', 'Fin de manœuvre BAL : vérifier l’établissement en remontant, se mettre à disposition du CA.'],
  traps: ['Raccorder la vanne purge à l’envers.', 'Brancher sur l’hydrant sans l’avoir purgé.', 'Laisser toutes les tubulures de la division fermées (ou toutes ouvertes).'],
  quiz: [
    { q: 'En M2.2, de quel matériel se munit le chef BAL ?', c: ['1 tuyau de 70 × 20 m et une division 65 / 2 × 40', '2 tuyaux de 70 × 20 m', 'Une vanne purge de 65 mm', 'Le dévidoir et la division'], e: 'Document formateur et grille M2.2 ; l’équipier prend 2 tuyaux de 70 × 20 m.', s: 'm22' },
    { q: 'En M2.2, que fait le chef BAL une fois la division raccordée ?', c: ['Il vérifie la fermeture des tubulures et en ouvre une partiellement', 'Il ouvre toutes les tubulures en grand', 'Il part immédiatement au point d’attaque', 'Il attend l’ordre du conducteur'], e: 'Document formateur M2.2.', s: 'm22' },
    { q: 'Quel accessoire est indispensable pour alimenter une colonne sèche (M2.3, M2.4) ?', c: ['La vanne purge de 65 mm', 'Le proportionneur', 'La commande', 'Le col de cygne'], e: 'Avec cette consigne : attention au sens de la vanne purge.', s: 'm23' },
    { q: 'En M4, que fait le chef BAL à l’hydrant avant de réaliser le branchement ?', c: ['Il ouvre l’eau pour purger', 'Il ferme la vanne de l’engin', 'Il pose la division', 'Il attend le chef d’agrès'], e: 'Document formateur et grille M4.', s: 'm4' },
    { q: 'Comment se termine une manœuvre du binôme d’alimentation ?', c: ['Vérification de l’établissement en remontant, puis mise à disposition du chef d’agrès', 'Retour immédiat à l’engin sans vérification', 'Prise de la lance d’attaque', 'Départ en reconnaissance seul'], e: 'Document formateur M2.1 à M2.4 et M4.', s: 'm21' },
    { q: 'Selon la grille M2.1, que fait le chef BAL pendant que l’équipier tire le dévidoir ?', c: ['Il tient la division (le diaporama le fait tirer le dévidoir avec l’équipier)', 'Il ouvre la prise d’eau', 'Il bascule la flèche', 'Il établit la lance'], e: 'Divergence signalée entre la grille M2.1, le diaporama M2 et le document formateur.', s: 'm21' }
  ]
});

/* =====================================================================================
   CE INC 4 — CHAPITRE 11 : le binôme d’attaque et la LDMR(S) 500 (M3.1 à M3.5)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-mvr-attaque', part: 'ince', seq: INCE_2_SEQ_MAN,
  title: 'Établir une LDMR(S) 500 en binôme (M3.1 à M3.5)', short: 'M3 : LDMR(S) 500', motif: 'flame',
  sources: [INCE_2_DOCM + ' : M3.1 à M3.5', INCE_2_GRILLES + ' (M3.1 BAL/BAT, M3.2 BAL/BAT, M3.3, M3.4, M3.5)', INCE_2_PG + ', diaporama « M3 »'],
  summary: 'Par l’extérieur à la commande, à l’échelle à coulisses, par les communications existantes ou par le jour de l’escalier : qui fait quoi, chef BAT et chef BAL.',
  why: '<b>Pourquoi le chef d’équipe doit-il connaître les deux binômes ?</b> Dans les M3.1, M3.2 et M3.5, le binôme d’attaque et le binôme d’alimentation travaillent ensemble et se parlent par commandements (« attention pour envoyer », « envoyez », « hissez », « ouvrez »). Le chef d’équipe peut être évalué <b>en BAT ou en BAL</b> : il doit savoir à quel moment il donne l’ordre et à quel moment il l’attend.',
  sections: [
    { id: 'm31', t: 'M3.1 : par l’extérieur au moyen de la commande', ic: 'rope', src: INCE_2_DOCM + ', M3.1 ; grilles M3.1 BAT et M3.1 BAL',
      html: '<div class="tw"><table><thead><tr><th>Chef BAT</th><th>Équipier BAT</th></tr></thead><tbody>' +
        '<tr><td>Déroule son tuyau parallèlement à la façade</td><td>Déroule ses tuyaux parallèlement à la façade</td></tr>' +
        '<tr><td>Raccorde sa lance</td><td>Réalise ses branchements ; donne le ½ raccord au conducteur ou raccorde à la prise d’eau désignée</td></tr>' +
        '<tr><td colspan="2">Se rendent au niveau concerné</td></tr>' +
        '<tr><td>Crie <span class="cmd">« Attention pour envoyer »</span></td><td>Envoie la commande à l’ordre du BAL</td></tr>' +
        '<tr><td colspan="2">Hissent la lance</td></tr>' +
        '<tr><td>Se rend au point d’attaque</td><td>Constitue la réserve, amarre la lance à un point fixe, ordonne l’ouverture de l’eau</td></tr>' +
        '<tr><td>Attaque le feu</td><td>Vient doubler le chef</td></tr></tbody></table></div>' +
        '<div class="tw"><table><thead><tr><th>Chef BAL</th><th>Équipier BAL</th></tr></thead><tbody>' +
        '<tr><td colspan="2">Se placent à l’endroit où sera hissée la lance</td></tr>' +
        '<tr><td>Donne l’ordre <span class="cmd">« Envoyez »</span></td><td>Sécurise la zone de réception</td></tr>' +
        '<tr><td colspan="2">Amarrent la lance avec la commande et ordonnent <span class="cmd">« Hissez »</span> ; facilitent la montée du tuyau</td></tr>' +
        '<tr><td>Ordonne l’ouverture de l’eau au conducteur ou ouvre l’eau à la prise d’eau</td><td></td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Autre version :</b> le diaporama « M3 » (sa M3.3) réalise cette manœuvre avec le <b>seul binôme d’attaque</b> : le chef BAT récupère la commande de l’équipier, monte, crie « attention pour envoyer », envoie la commande au commandement « envoyez », hisse au commandement « hissez », se constitue une réserve, amarre le tuyau et ordonne « ouvrez » ; l’équipier BAT, resté en bas, sécurise la zone, donne « envoyez », amarre la lance et ordonne « hissez », puis ouvre l’eau et vient doubler le chef.</div>' },
    { id: 'm32', t: 'M3.2 : au moyen de l’échelle à coulisses', ic: 'walk', src: INCE_2_DOCM + ', M3.2 ; grilles M3.2 BAT et M3.2 BAL',
      html: '<div class="tw"><table><thead><tr><th>Chef BAT</th><th>Équipier BAT</th></tr></thead><tbody>' +
        '<tr><td>Déroule son tuyau parallèlement à la façade ; raccorde sa lance</td><td>Déroule ses tuyaux parallèlement à la façade ; réalise ses branchements ; donne le ½ raccord au conducteur ou raccorde à la prise d’eau désignée</td></tr>' +
        '<tr><td><b>Passe le tuyau entre ses jambes</b>, puis monte à l’étage concerné</td><td>Fait suivre le tuyau puis monte derrière le chef</td></tr>' +
        '<tr><td>Se rend au point d’attaque</td><td>Constitue la réserve d’<b>au moins 1 tuyau</b>, puis l’amarre à un point fixe ; ordonne l’ouverture de l’eau</td></tr>' +
        '<tr><td>Attaque le feu</td><td>Double le chef</td></tr></tbody></table></div>' +
        '<div class="tw"><table><thead><tr><th>Chef BAL</th><th>Équipier BAL</th></tr></thead><tbody>' +
        '<tr><td colspan="2">Emmènent l’échelle où elle sera dressée</td></tr>' +
        '<tr><td>Dresse puis développe l’échelle</td><td>Maintient les montants</td></tr>' +
        '<tr><td>Fait suivre le tuyau pour l’équipier BAT</td><td></td></tr>' +
        '<tr><td>Ordonne l’ouverture de l’eau au conducteur ou ouvre l’eau à la prise d’eau</td><td></td></tr></tbody></table></div>' },
    { id: 'm33', t: 'M3.3 et M3.4 : par les communications existantes', ic: 'team', src: INCE_2_DOCM + ', M3.3 et M3.4 ; grilles M3.3 et M3.4 ; diaporama M3, diapositives 1 et 2',
      html: '<div class="tw"><table><thead><tr><th></th><th>Chef BAT</th><th>Équipier BAT</th></tr></thead><tbody>' +
        '<tr><td><b>M3.3</b> (sac d’attaque)</td><td>Prennent le sac d’attaque et suivent le chef d’agrès. Le chef <b>sort le premier tuyau du sac</b> et <b>indique le point d’eau</b> à l’équipier ; arrange sa réserve de tuyau ; attaque le feu</td><td>Tire le sac d’attaque jusqu’au point d’eau ; raccorde à la prise d’eau et ouvre la tubulure, ou donne le ½ raccord au conducteur qui ouvre l’eau sauf ordre contraire ; remonte l’établissement et vient doubler le chef</td></tr>' +
        '<tr><td><b>M3.4</b> (tuyaux roulés en double)</td><td>Se munit d’<b>un tuyau de 45 × 20 m</b> et d’une <b>LDMR(S) 500</b> ; suit le chef d’agrès ; déroule son tuyau et le raccorde à sa lance ; arrange sa réserve ; attaque le feu</td><td>Se munit de <b>deux tuyaux de 45 × 20 m</b> ; déroule un tuyau, le raccorde au tuyau du chef et à la prise d’eau ; ouvre la tubulure ou donne le ½ raccord au conducteur ; remonte l’établissement et vient doubler le chef</td></tr></tbody></table></div>' +
        '<p>Le diaporama M3 précise que <b>le troisième tuyau est déroulé sur ordre du chef d’agrès</b>, et décline la même manœuvre en <b>LDMR(S) 1000</b> avec des tuyaux de 70 × 20 m.</p>' },
    { id: 'm35', t: 'M3.5 : dans les étages par le jour central de l’escalier', ic: 'road', src: INCE_2_DOCM + ', M3.5 ; grille M3.5',
      html: '<div class="tw"><table><thead><tr><th>Chef BAT</th><th>Équipier BAT</th></tr></thead><tbody>' +
        '<tr><td>Déroule son tuyau <b>perpendiculairement à l’entrée</b> du bâtiment ; raccorde sa lance</td><td>Déroule ses tuyaux perpendiculairement à l’entrée ; réalise ses branchements ; donne le ½ raccord au conducteur ou raccorde à la prise d’eau désignée</td></tr>' +
        '<tr><td>Monte à l’étage concerné, <b>lance à la main, tuyau à l’extérieur de la rampe</b></td><td>Monte avec le chef et facilite le déroulement du tuyau</td></tr>' +
        '<tr><td>Se rend au point d’attaque ; <b>ordonne l’ouverture de l’eau</b></td><td>Constitue une réserve et amarre le tuyau</td></tr>' +
        '<tr><td>Attaque le feu</td><td>Double le chef</td></tr></tbody></table></div>' +
        '<div class="tw"><table><thead><tr><th>Chef BAL</th><th>Équipier BAL</th></tr></thead><tbody>' +
        '<tr><td colspan="2">Installent une prise d’eau si le chef d’agrès l’a demandé</td></tr>' +
        '<tr><td>Fait suivre le tuyau à travers le jour de l’escalier pour le BAT</td><td>Fait suivre le tuyau pour son chef ; retourne ouvrir l’eau</td></tr></tbody></table></div>' }
  ],
  key: ['M3.1 : BAT crie « Attention pour envoyer », BAL répond « Envoyez », amarre et ordonne « Hissez ».', 'M3.2 : le chef BAT passe le tuyau entre ses jambes avant de monter ; réserve d’au moins 1 tuyau.', 'M3.3 : le chef BAT sort le premier tuyau du sac et indique le point d’eau.', 'M3.4 : chef = 1 × 45/20 m + LDMR(S) 500 ; équipier = 2 × 45/20 m.', 'M3.5 : lance à la main, tuyau à l’extérieur de la rampe ; le chef BAT ordonne l’ouverture.', 'L’équipier BAT finit toujours par doubler le chef.'],
  traps: ['Hisser avant que le BAL ait sécurisé la zone et donné « Envoyez ».', 'Monter dans l’escalier avec le tuyau côté intérieur de la rampe.', 'Oublier la réserve et l’amarrage avant l’ouverture de l’eau.'],
  quiz: [
    { q: 'En M3.1 (document formateur), qui donne l’ordre « Envoyez » ?', c: ['Le chef BAL', 'Le chef BAT', 'Le conducteur', 'Le chef d’agrès'], e: 'Le chef BAT crie « Attention pour envoyer », le chef BAL répond « Envoyez » et son équipier sécurise la zone de réception.', s: 'm31' },
    { q: 'En M3.1, qui ordonne « Hissez » ?', c: ['Le binôme d’alimentation, après avoir amarré la lance à la commande', 'Le chef BAT, depuis l’étage', 'Le chef d’agrès', 'Personne : on hisse dès l’envoi'], e: 'Document formateur M3.1 : le BAL amarre la lance avec la commande et ordonne « Hissez ».', s: 'm31' },
    { q: 'En M3.2, que fait le chef BAT avant de monter à l’échelle à coulisses ?', c: ['Il passe le tuyau entre ses jambes', 'Il ouvre l’eau', 'Il amarre la lance au pied de l’échelle', 'Il attend que l’équipier soit en haut'], e: 'Document formateur et grille M3.2 BAT.', s: 'm32' },
    { q: 'En M3.3, que fait le chef BAT au début de l’établissement ?', c: ['Il sort le premier tuyau du sac d’attaque et indique le point d’eau à l’équipier', 'Il tire le sac jusqu’au point d’eau', 'Il raccorde à la prise d’eau', 'Il dresse l’échelle'], e: 'C’est ensuite l’équipier qui tire le sac jusqu’au point d’eau.', s: 'm33' },
    { q: 'En M3.4, de combien de tuyaux de 45 × 20 m se munit l’équipier BAT ?', c: ['Deux', 'Un', 'Trois', 'Aucun, il prend le dévidoir'], e: 'Le chef prend un tuyau de 45 × 20 m et la LDMR(S) 500 ; le troisième tuyau est déroulé sur ordre du chef d’agrès (diaporama M3).', s: 'm33' },
    { q: 'En M3.5, comment le chef BAT monte-t-il à l’étage ?', c: ['Lance à la main, tuyau à l’extérieur de la rampe', 'Lance à l’épaule, tuyau dans le jour de l’escalier', 'Par l’ascenseur', 'Sans la lance, hissée ensuite'], e: 'Document formateur et grille M3.5 ; le BAL fait suivre le tuyau à travers le jour de l’escalier.', s: 'm35' }
  ]
});

/* =====================================================================================
   CE INC 4 — CHAPITRE 12 : lance à mousse (M5) et remplacement / prolongation de tuyau (M6)
   ===================================================================================== */
VSAV.chap({
  id: 'ince-mvr-mousse-m6', part: 'ince', seq: INCE_2_SEQ_MAN,
  title: 'Lance à mousse (M5) et remplacement ou prolongation de tuyau (M6)', short: 'M5 mousse et M6 tuyau', motif: 'spray',
  sources: [INCE_2_DOCM + ' : M5 et M6', INCE_2_GRILLES + ' (M5, M6)', INCE_2_PG + ', diaporamas « M5 » et « M6 » (CSP Reims, service formation, 2000)'],
  summary: 'Qui porte le proportionneur et où l’intercaler ; qui commande la fermeture et la réouverture de l’eau quand on change un tuyau.',
  why: '<b>Pourquoi ces deux manœuvres sont-elles des manœuvres de chef ?</b> Dans la M5, le chef d’équipe apporte la lance <b>et le proportionneur</b>. Dans la M6, c’est lui qui <b>ordonne la fermeture de l’eau</b>, rebranche et annonce « ouvrez » : il garde la maîtrise du moment où son binôme se retrouve sans eau face au feu.',
  sections: [
    { id: 'm5', t: 'M5 : établissement d’une lance à mousse', ic: 'bottle', src: INCE_2_DOCM + ', M5 ; grille M5 ; diaporama M5',
      html: '<div class="tw"><table><thead><tr><th>Chef BAT</th><th>Équipier BAT</th></tr></thead><tbody>' +
        '<tr><td>Se munit de la <b>lance à mousse</b>, d’un tuyau et du <b>proportionneur</b>, puis se rend au point d’attaque</td><td>Se munit de deux tuyaux et se rend au point d’attaque</td></tr>' +
        '<tr><td>Déroule son tuyau, raccorde sa lance</td><td>Déroule 1 ou 2 tuyaux si nécessaire</td></tr>' +
        '<tr><td></td><td>Réalise 1 ou 2 branchements ; <b>intercale le proportionneur</b> entre le 1<sup>er</sup> et le 2<sup>e</sup> tuyau, ou entre le 2<sup>e</sup> et le 3<sup>e</sup></td></tr>' +
        '<tr><td></td><td>Ouvre ou ordonne l’ouverture de l’eau</td></tr>' +
        '<tr><td>Attaque le feu</td><td>Surveille l’établissement, puis vient doubler le chef au point d’attaque</td></tr></tbody></table></div>' +
        '<p>Commandement (diaporama M5) : <span class="cmd">« Binôme d’attaque ! Pour l’établissement d’une lance à mousse : EN RECONNAISSANCE ! »</span> puis <span class="cmd">« Une lance à mousse ! Point d’attaque…, emplacement du proportionneur…, prise d’eau…, accès…, mission… : ÉTABLISSEZ ! »</span>. Le diaporama distingue l’établissement directement sur l’engin et sur une division alimentée.</p>' +
        '<p class="small muted">Le fonctionnement de la mousse et des proportionneurs est traité dans la partie Équipier (« La mousse et ses moyens de production »).</p>' },
    { id: 'm6', t: 'M6 : remplacement ou prolongation de tuyau', ic: 'reset', src: INCE_2_DOCM + ', M6 ; grille M6 ; diaporama M6',
      steps: ['Chef d’équipe BAT : poursuit son action ; l’équipier récupère un tuyau et rejoint le chef.', 'Équipier BAT : déroule le tuyau.', 'Équipier BAT : se rend à la prise d’eau et annonce « prêt ».', 'Chef d’équipe BAT : ordonne la fermeture de l’eau.', 'Équipier BAT : ferme l’eau ou répercute l’ordre au conducteur.', 'Chef d’équipe BAT : débranche et rebranche sa lance, raccorde les tuyaux et annonce « ouvrez ».', 'Équipier BAT : ouvre l’eau ou répercute l’ordre au conducteur, puis vient doubler le chef au point d’attaque.'], stepsTitle: 'M6 — enchaînement chef / équipier',
      html: '<p>Le diaporama M6 décline trois cas : <b>changement de tuyau sur division alimentée</b>, <b>changement de tuyau sur établissement de manœuvre</b>, <b>prolongement sur division alimentée</b>.</p>',
      after: '<div class="callout ok">Gestes évalués chez le chef d’équipe (grille M6) : <b>poursuit son action</b>, <b>ordonne la fermeture de l’eau</b>, débranche et rebranche sa lance, raccorde les tuyaux et <b>annonce « ouvrez »</b>. L’eau n’est coupée qu’au dernier moment, quand le tuyau est prêt et l’équipier à la prise d’eau.</div>' }
  ],
  key: ['M5 : le chef porte la lance à mousse, un tuyau et le proportionneur.', 'M5 : proportionneur entre le 1er et le 2e tuyau, ou entre le 2e et le 3e.', 'M5 : l’ordre d’exécution précise l’emplacement du proportionneur.', 'M6 : le chef poursuit son action pendant que l’équipier prépare le tuyau.', 'M6 : le chef ordonne la fermeture, rebranche et annonce « ouvrez ».'],
  traps: ['Faire fermer l’eau avant que l’équipier ait déroulé le tuyau et annoncé « prêt ».', 'Laisser le chef quitter le point d’attaque pour aller chercher le tuyau.'],
  quiz: [
    { q: 'En M5, qui transporte le proportionneur ?', c: ['Le chef BAT', 'L’équipier BAT', 'Le conducteur', 'Le chef BAL'], e: 'Document formateur M5 : le chef se munit de la lance à mousse, d’un tuyau et du proportionneur ; l’équipier prend deux tuyaux.', s: 'm5' },
    { q: 'Où l’équipier intercale-t-il le proportionneur en M5 ?', c: ['Entre le 1er et le 2e tuyau, ou entre le 2e et le 3e', 'Directement sur la lance', 'Sur la pompe de l’engin uniquement', 'Après le dernier tuyau'], e: 'Document formateur M5.', s: 'm5' },
    { q: 'En M6, qui ordonne la fermeture de l’eau ?', c: ['Le chef BAT', 'L’équipier BAT', 'Le conducteur, de sa propre initiative', 'Le chef d’agrès, par radio'], e: 'Document formateur et grille M6 : le chef ordonne, l’équipier ferme ou répercute au conducteur.', s: 'm6' },
    { q: 'En M6, à quel moment le chef ordonne-t-il la fermeture ?', c: ['Quand l’équipier a déroulé le tuyau et annoncé « prêt » à la prise d’eau', 'Dès qu’il constate la fuite, avant toute préparation', 'Après avoir débranché sa lance', 'Quand le chef d’agrès arrive'], e: 'Enchaînement du document formateur M6 : le chef poursuit son action pendant la préparation.', s: 'm6' },
    { q: 'Que fait le chef BAT en M6 une fois les tuyaux raccordés ?', c: ['Il annonce « ouvrez »', 'Il ferme la division', 'Il retourne à l’engin', 'Il change de lance'], e: 'Grille M6 : débranche et rebranche sa lance, raccorde les tuyaux et annonce « ouvrez ».', s: 'm6' }
  ]
});

/* ===================================================================================== L’essentiel */
VSAV.ess([
  { t: 'Chef d’équipe INC — Manœuvres ARI', ic: 'lungs', items: [
    { k: 'Ligne de vie', v: 'ligne guide <b>50-60 m</b> + liaison personnelle <b>6 m</b> (courte <b>1,25 m</b>)', go: 'ince-ari-lignevie/liaison' },
    { k: 'Sortie sur la ligne guide', v: '<b>1 olive</b> isolée (ou petite drisse)', go: 'ince-ari-lignevie/guide' },
    { k: 'Plaque de contrôle', v: 'nom, pression à l’engagement, heure d’entrée', go: 'ince-ari-lignevie/controle' },
    { k: 'Contrôleur', v: '1 point d’accès, <b>10 porteurs</b> (5 binômes dont sécurité)', go: 'ince-ari-procedure/pendant' },
    { k: 'Durée théorique', v: '<b>T = P × V ÷ Q</b> ; par défaut ≈ <b>0,07 P</b> (Q = 90 l/min, V = 6 l)', go: 'ince-ari-procedure/calcul' },
    { k: 'Pression mini (300 bar)', v: '<b>280 bar</b> (SDIS 51) – <b>270 bar</b> (GTO)', go: 'ince-ari-procedure/porteurs' },
    { k: 'Reconnaissance latérale', v: 'chef relié à l’équipier par <b>6 m</b>', go: 'ince-ari-procedure/liaisons' },
    { k: 'Seuil GNR ARI', v: 'distance accès → but <b>&gt; 20 m</b>', go: 'ince-ari-reconnaissance/distance' },
    { k: 'Soupape à la demande', v: '<b>1,5 à 3 mbar</b>, jusqu’à <b>300 l/min</b>', go: 'ince-ari-materiel/elements' }
  ] },
  { t: 'Chef d’équipe INC — Manœuvres M1 à M6', ic: 'flame', items: [
    { k: 'Validation des grilles', v: '<b>1 NON grisé</b> ou <b>2 NON</b> = non validé', go: 'ince-mvr-principes/criteres' },
    { k: 'Cases grisées', v: 'EPI adaptés ; sécurité du binôme', go: 'ince-mvr-principes/criteres' },
    { k: 'Commandements', v: '« … EN RECONNAISSANCE » puis « … ÉTABLISSEZ »', go: 'ince-mvr-principes/commandements' },
    { k: 'Colonne sèche', v: 'vanne purge de <b>65 mm</b> : attention au sens', go: 'ince-mvr-alimentation/m23' },
    { k: 'M3.1 commande', v: 'BAT « attention pour envoyer » → BAL « envoyez » → « hissez »', go: 'ince-mvr-attaque/m31' },
    { k: 'M6', v: 'le chef BAT ordonne la fermeture et annonce « ouvrez »', go: 'ince-mvr-mousse-m6/m6' }
  ] }
]);
