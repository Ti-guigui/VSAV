/* ÉQUIPIER / CHEF D'AGRÈS PPBE — fichier 4 : PPBE 5 (ouverture de porte, procédures, transmissions, conduite, responsabilités)
   Sources : dossier Drive « 3 - PPBE - ex DIV », sous-dossier chef d'agrès PPBE :
   - POP-15 « Ouverture de porte » (indice 03 du 09/02/2023), NDS 161 et fiche d'aide à la décision (2014), avis de passage (26/07/2023) ;
   - notes de service SDIS 51 n° 175 modifiée (20/01/2016), 240 bis (05/02/2019), 031 (23/03/2009), 093 (18/02/2011),
     064 (04/03/2010), 119 (10/07/2012), 095 modifiée (08/03/2017), 216 (22/01/2016), 258 (10/02/2017), lues sur les PDF numérisés ;
   - POP-19 « Insalubrité » (indice 02 du 25/10/2022) et note opérationnelle n° 8 modifiée (02/02/2018) ;
   - présentations « Les transmissions », « Conduite CA PPBE » (MAJ 2 janvier 2023), « Responsabilités du chef d'agrès », « Les médias » ;
   - évaluation diagnostique CA PPBE. */
var PB5 = 'PPBE 5 — Chef d’agrès PPBE : procédures, transmissions, responsabilités';
var POP15 = 'POP-15 « Ouverture de porte » (SDIS 51, indice 03 du 09/02/2023)';
var TRANS = 'Présentation « Les transmissions » (formation CA PPBE, SDIS 51) et NDS 095 modifiée (08/03/2017)';
var COND = 'Présentation « Conduite CA PPBE » (SDIS 51, MAJ 2 janvier 2023)';
var RESP = 'Présentation « Responsabilités du chef d’agrès » (formation CA PPBE, SDIS 51)';

/* ================================================================ 1. Ouverture de porte */
VSAV.chap({
  id: 'ppbe-ouverture-porte', part: 'ppbe', seq: PB5,
  title: 'Ouverture de porte : entrer, sécuriser, rendre compte', short: 'Ouverture de porte', motif: 'shield',
  sources: [POP15, 'Note de service SDIS 51 n° 161 et fiche d’aide à la décision « ouverture de porte » (2014)', 'Avis de passage SDIS 51 (version du 26/07/2023)'],
  summary: 'Cadre juridique, conduite à tenir de la reconnaissance à la pénétration, choix de l’accès, sécurisation des lieux, avis de passage et compte rendu.',
  why: '<b>Pourquoi tant de formalisme ?</b> Entrer chez quelqu’un sans son accord porte atteinte à l’inviolabilité du domicile. C’est l’<b>état de nécessité</b> (une personne peut être en danger) qui le justifie. Chaque geste doit donc être motivé, limité au nécessaire et tracé.',
  sections: [
    { id: 'cadre', t: 'Cadre juridique', ic: 'book', src: POP15,
      html: '<ul class="check"><li>L’intervention repose sur l’<b>alerte</b> et sa <b>validation par le CTA-CODIS</b> : c’est l’<b>état de nécessité</b> qui autorise la pénétration.</li>' +
        '<li>La présence des <b>forces de l’ordre</b> n’est <b>pas une obligation légale</b>. Elle est utile si l’occupant refuse l’accès ou se montre agressif.</li>' +
        '<li>Une simple <b>porte claquée</b> (pas de personne en danger, pas de risque) ne relève pas de l’urgence : renvoi vers un serrurier ou intervention payante (voir <a href="#/c/ppbe-procedures/payant">interventions payantes</a>).</li></ul>' },
    { id: 'cat', t: 'Conduite à tenir', ic: 'list', src: POP15,
      steps: ['<b>Prendre contact avec le requérant</b> (une conférence téléphonique via le CTA est possible) : qui, depuis quand, antécédents, animaux.',
        '<b>Reconnaissance</b> : bruits, odeurs, courrier accumulé, voisins, lumières, accès possibles.',
        '<b>Risque pour les SP</b> (personne agressive, arme, menace) : se retirer, attendre les forces de l’ordre et entrer <b>par une porte</b>, police en tête.',
        '<b>Pas de risque identifié</b> : le LSPCC est autorisé selon le GTO pour atteindre une ouverture en étage.',
        'Entrer <b>de préférence par une fenêtre</b>, en brisant un carreau, plutôt que de forcer la porte.',
        'Si les moyens sont insuffisants : <b>demander des renforts</b>.',
        'Pénétrer <b>en binôme</b>, avec <b>au minimum un détecteur CO</b> en fonctionnement.'],
      stepsTitle: 'Déroulé',
      after: '<div class="callout warn"><b>Rappel</b>La technique de forcement relève du <a href="#/c/ppbe-forcement/techniques">forcement</a> ; l’accès en étage relève du <a href="#/c/ppbe-lspcc/appart">LSPCC</a>.</div>' },
    { id: 'apres', t: 'Après l’ouverture', ic: 'check', src: POP15,
      html: '<ul class="check"><li><b>Refermer les lieux</b> de façon sûre (porte, fenêtre condamnée, carreau obturé).</li>' +
        '<li>Si c’est impossible : <b>remettre la garde</b> des lieux aux <b>forces de l’ordre</b> ou au <b>maire</b> (police municipale). En attendant, rester sur place, statut ANTARES <b>« disponible radio »</b>.</li>' +
        '<li><b>Doute sur l’identité</b> d’une personne qui veut entrer : seule la police peut la laisser entrer. <b>Les SP ne contrôlent pas l’identité.</b></li>' +
        '<li>Laisser <b>toujours</b> l’<b>avis de passage</b>, rempli entièrement.</li>' +
        '<li>Noter les <b>dégâts</b> et le <b>nom du sinistré</b> dans le <b>CRSS</b>.</li></ul>' },
    { id: 'avis', t: 'L’avis de passage', ic: 'clip', src: 'Avis de passage SDIS 51 (version du 26/07/2023)',
      html: '<div class="tw"><table><thead><tr><th>Rubrique</th><th>Contenu</th></tr></thead><tbody>' +
        '<tr><td>Motif</td><td>Feu, odeur suspecte, fuite d’eau, personne ne répondant pas, fuite de gaz, personne à terre</td></tr>' +
        '<tr><td>Dégâts</td><td>Volet, vitre, porte brisés</td></tr>' +
        '<tr><td>Information</td><td>Les forces de l’ordre ont été informées</td></tr>' +
        '<tr><td>Responsabilité</td><td>Les SP ne sont <b>pas responsables financièrement</b> : l’occupant contacte son <b>assureur</b></td></tr>' +
        '<tr><td>Attestation</td><td>Auprès du SDIS 51, Route de Montmirail, CS 50010, 51510 Fagnières, ou attestation@sdis51.fr</td></tr>' +
        '</tbody></table></div>' }
  ],
  key: ['L’<b>état de nécessité</b>, validé par le CTA-CODIS, justifie la pénétration.', 'Police : <b>pas obligatoire</b>, mais en tête s’il y a un risque pour les SP.', 'Fenêtre plutôt que porte ; binôme et <b>détecteur CO</b>.', 'Lieux refermés ou garde remise ; <b>avis de passage</b> toujours laissé ; dégâts au <b>CRSS</b>.'],
  traps: ['Contrôler l’identité de quelqu’un qui veut entrer : c’est le rôle de la police, pas des SP.', 'Partir en laissant un logement ouvert sans l’avoir confié à la police ou au maire.'],
  quiz: [
    { q: 'Qu’est-ce qui autorise les SP à pénétrer dans un domicile ?', c: ['L’état de nécessité, après validation du CTA-CODIS', 'La présence de la police', 'L’accord écrit du maire', 'L’accord du voisin'], e: 'POP-15.', s: 'cadre' },
    { q: 'La présence des forces de l’ordre est :', c: ['Non obligatoire, utile en cas de refus ou d’agressivité', 'Toujours obligatoire', 'Interdite', 'Obligatoire la nuit'], e: 'POP-15.', s: 'cadre' },
    { q: 'Accès à privilégier en l’absence de risque :', c: ['Une fenêtre, en brisant un carreau', 'La porte d’entrée au bélier', 'Le toit', 'La cave'], e: 'POP-15.', s: 'cat' },
    { q: 'Matériel minimal à l’entrée du binôme :', c: ['Un détecteur CO', 'Une lance', 'Un ARI', 'Un explosimètre seulement'], e: 'POP-15.', s: 'cat' },
    { q: 'Impossible de refermer le logement. Vous :', c: ['Remettez la garde à la police ou au maire, en restant disponible radio', 'Partez en laissant l’avis de passage', 'Confiez les clés au voisin', 'Laissez le logement ouvert'], e: 'POP-15.', s: 'apres' },
    { q: 'Qui paie la vitre brisée ?', c: ['L’occupant, via son assureur', 'Le SDIS', 'Le chef d’agrès', 'La mairie'], e: 'Avis de passage.', s: 'avis' }
  ]
});

/* ================================================================ 2. Procédures */
VSAV.chap({
  id: 'ppbe-procedures', part: 'ppbe', seq: PB5,
  title: 'Procédures du chef d’agrès : payant, insalubrité, CO, prompt secours, détecteur', short: 'Procédures CA', motif: 'clip',
  sources: ['Note de service SDIS 51 n° 175 modifiée (20/01/2016)', 'NDS 240 bis (05/02/2019) et NDS 031 (23/03/2009)', 'POP-19 « Insalubrité » (indice 02 du 25/10/2022) et note opérationnelle n° 8 modifiée (02/02/2018)', 'NDS 093 (18/02/2011), NDS 064 (04/03/2010), NDS 119 (10/07/2012)'],
  summary: 'Interventions payantes et réquisitions, signalement d’insalubrité, intoxication au CO, prompt secours, détecteur multigaz MicroClip.',
  why: '<b>Pourquoi le CA doit-il les connaître ?</b> Sur ces interventions, c’est lui qui fait signer, remplit les fiches et rend compte. Une procédure oubliée, c’est une facture contestée, un signalement perdu ou une victime de CO non suivie.',
  sections: [
    { id: 'payant', t: 'Interventions payantes et réquisitions', ic: 'clip', src: 'NDS 175 modifiée (20/01/2016) ; NDS 240 bis (2019) ; NDS 031 (2009)',
      html: '<ul class="check"><li>La <b>demande d’intervention</b> est <b>signée avant toute action</b> ; le COS explique le <b>devis</b>.</li>' +
        '<li>Ce n’est <b>pas une facture</b> : <b>aucun paiement sur place</b>. Un <b>titre de recette</b> du Trésor public suit.</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Prestation (NDS 175)</th><th>Forfait</th><th>Avec échelle aérienne</th></tr></thead><tbody>' +
        '<tr><td>Destruction de nid</td><td>184 €</td><td>368 €</td></tr>' +
        '<tr><td>Ouverture de porte</td><td>276 €</td><td>414 €</td></tr>' +
        '<tr><td>Ascenseur bloqué</td><td>276 €</td><td>—</td></tr>' +
        '<tr><td>Capture d’animaux errants</td><td>138 €</td><td>—</td></tr>' +
        '<tr><td>Autres prestations</td><td colspan="2"><b>46 € / h / SP</b></td></tr></tbody></table></div>' +
        '<p>Le décompte commence au <b>départ des SP</b> (le trajet compte). La <b>première heure est indivisible</b>, puis par tranches d’une demi-heure : 35 min = 1 h ; 1 h 15 = 1 h 30.</p>' +
        '<div class="callout warn"><b>Montants selon les notes</b>La NDS 240 bis (2019) fixe le nid d’hyménoptères à <b>200 €</b> (<b>400 €</b> avec EA), révisé chaque année. La NDS 031 (2009) parlait de 9 vacations (≈ 94,68 €). Appliquer le barème en vigueur indiqué par le CODIS.</div>' +
        '<p class="small muted">Ne sont pas facturés : les collectivités et les personnes signalées par le CCAS. Animal errant : formulaire à 11 vacations signé par le maire ; la commune paie les frais vétérinaires (NDS 105).</p>' },
    { id: 'insalubrite', t: 'Insalubrité', ic: 'alert', src: 'POP-19 (indice 02 du 25/10/2022) ; note opérationnelle n° 8 modifiée (02/02/2018)',
      html: '<p>Un logement est insalubre lorsqu’il constitue un <b>danger pour la santé</b> de ses occupants ou du voisinage.</p>' +
        '<ul class="check"><li>Installation <b>électrique</b> dangereuse.</li><li>Appareils à <b>combustion</b> (risque CO).</li><li>Risque de <b>chute</b>.</li><li><b>Humidité</b>, moisissures.</li><li>Accumulation de <b>déchets</b> ou d’encombrants.</li></ul>' +
        '<p>C’est le <b>maire</b> qui établit l’insalubrité. Le <b>COS remplit la fiche</b> (enfants, animaux, volume d’encombrement, victime agressive) ; le <b>chef de centre</b> la vise et l’envoie par courriel à la <b>mairie</b> et au <b>pôle départemental habitat indigne</b> (ddt-habitat-indigne@marne.gouv.fr), copie operation@sdis51.fr.</p>' +
        '<div class="callout ok"><b>Secret professionnel</b>Ce signalement est prévu par la note : il est compatible avec le secret professionnel.</div>' },
    { id: 'co', t: 'Intoxication au monoxyde de carbone', ic: 'molecule', src: 'NDS 093 (18/02/2011)',
      html: '<ul class="check"><li><b>Transport systématique</b> pour bilan, jusqu’à <b>3 victimes</b>.</li>' +
        '<li>Au-delà : demander via le CODIS un <b>membre du SSSM</b>, qui se coordonne avec le 15.</li>' +
        '<li><b>Toujours alerter GrDF</b>. Si la commune est desservie, GrDF envoie un agent : le COS n’est <b>pas disponible</b> avant le point de situation avec GrDF.</li></ul>' },
    { id: 'prompt', t: 'Prompt secours', ic: 'ambulance', src: 'NDS 064 (04/03/2010)',
      html: '<p>Quand le VSAV du centre est indisponible, un <b>VID, VL ou VLHR</b> armé de <b>2 SP qualifiés SAP</b> part avec le <b>sac de l’avant et l’O<sub>2</sub></b> (ou le bloc O<sub>2</sub> du FPT). Un <b>VSAV d’un autre centre</b> est engagé en parallèle. Le CA transmet les messages comme d’habitude.</p>' },
    { id: 'detecteur', t: 'Détecteur multigaz MicroClip XT', ic: 'bolt', src: 'NDS 119 (10/07/2012)',
      html: '<p>Détecteur <b>BW GasAlert MicroClip XT</b> (CO et % de la LIE) : un par FPT, FPTGP, FPTHR, FPTR, porté avec sa sangle.</p>' +
        '<div class="tw"><table><thead><tr><th>Gaz</th><th>Alarme basse</th><th>Alarme haute</th></tr></thead><tbody><tr><td>CO</td><td>50 ppm</td><td>200 ppm</td></tr><tr><td>Explosivité</td><td>20 % LIE</td><td>60 % LIE</td></tr></tbody></table></div>' +
        '<ul class="check"><li>Mise en route <b>en air sain</b> ; il teste lui-même ses alarmes. Si l’une ne fonctionne pas : <b>ne pas l’utiliser</b>.</li>' +
        '<li>Recharger sous <b>20 %</b> (2 à 3 h).</li>' +
        '<li>Nettoyer avec des produits à base d’eau, <b>sans alcool</b> ; pas de silicones, aérosols ni solvants près des cellules.</li></ul>' +
        '<p class="small muted">Détails d’emploi : <a href="#/c/inc-explosimetrie/microclip">explosimétrie</a>.</p>' }
  ],
  key: ['Payant : <b>signature avant</b> l’action, pas de paiement sur place.', 'Première heure indivisible, puis demi-heures ; le trajet compte.', 'CO : transport jusqu’à <b>3</b> victimes, GrDF <b>toujours</b> alerté.', 'MicroClip : <b>50/200 ppm</b> et <b>20/60 % LIE</b>, démarrage en air sain.'],
  traps: ['Encaisser de l’argent sur place.', 'Quitter une intoxication CO avant le point de situation avec GrDF.'],
  quiz: [
    { q: 'Quand la demande d’intervention payante est-elle signée ?', c: ['Avant toute action', 'Après l’intervention', 'Au retour au centre', 'À réception du titre de recette'], e: 'NDS 175.', s: 'payant' },
    { q: 'Intervention payante de 35 min à 2 SP (hors forfait). Combien d’heures facturées par SP ?', c: ['1 h', '35 min', '30 min', '1 h 30'], e: 'Première heure indivisible.', s: 'payant' },
    { q: 'Le trajet aller est-il compté ?', c: ['Oui, dès le départ des SP', 'Non, seulement le temps sur place', 'Seulement la nuit', 'Seulement avec EA'], e: 'NDS 175.', s: 'payant' },
    { q: 'Qui établit l’insalubrité d’un logement ?', c: ['Le maire', 'Le COS', 'Le chef de centre', 'Le médecin du SDIS'], e: 'POP-19.', s: 'insalubrite' },
    { q: 'Intoxication CO, 2 victimes :', c: ['Transport systématique pour bilan', 'Laissées sur place si elles vont bien', 'Transport seulement des enfants', 'Avis du voisinage'], e: 'NDS 093.', s: 'co' },
    { q: 'Seuils du MicroClip pour le CO :', c: ['50 et 200 ppm', '20 et 60 ppm', '10 et 100 ppm', '100 et 500 ppm'], e: 'NDS 119.', s: 'detecteur' },
    { q: 'Prompt secours : quel équipage ?', c: ['2 SP qualifiés SAP avec sac de l’avant et O2', 'Un seul SP', '4 SP en FPT', 'Un infirmier seul'], e: 'NDS 064.', s: 'prompt' }
  ]
});

/* ================================================================ 3. Transmissions */
VSAV.chap({
  id: 'ppbe-transmissions', part: 'ppbe', seq: PB5,
  title: 'Transmissions : statuts, messages, bilans', short: 'Transmissions', motif: 'wave',
  sources: [TRANS],
  summary: 'Réseau ANTARES, statuts, message d’ambiance et compte rendu, bilan au 15, vocabulaire normalisé, canaux tactiques, indicatifs et structure d’un message.',
  why: '<b>Pourquoi une discipline radio ?</b> Le CTA-CODIS ne voit rien : il ne sait que ce que le CA lui dit. Un message court, normalisé et donné à temps permet d’envoyer les bons renforts et d’informer les autorités.',
  sections: [
    { id: 'reseau', t: 'Le réseau', ic: 'wave', src: TRANS,
      html: '<ul class="check"><li>Réseau <b>ANTARES</b> ; le <b>CTA-CODIS</b> est la station directrice.</li><li>Un <b>canal OPE</b> unique pour l’opérationnel.</li>' +
        '<li>Réseau d’<b>alerte</b> (CTA ↔ engins) et réseau de <b>travail</b> (sur les lieux).</li></ul>' },
    { id: 'statuts', t: 'Les statuts', ic: 'list', src: 'NDS 095 modifiée (08/03/2017)',
      html: '<div class="tw"><table><thead><tr><th>Statut</th><th>Signification</th><th>Précisions</th></tr></thead><tbody>' +
        '<tr><td>1</td><td>Véhicule parti</td><td>Message vocal seulement pour une exception : équipage incomplet, infirmier à bord, réengagement</td></tr>' +
        '<tr><td>2</td><td>Sur les lieux</td><td>Puis message d’ambiance vocal dans les <b>5 min</b></td></tr>' +
        '<tr><td>3</td><td>Message / compte rendu</td><td>Dans les <b>20 min</b>, puis toutes les <b>30 min</b> maximum</td></tr>' +
        '<tr><td>4</td><td>Urgent</td><td>« Urgent ×3 » : le CTA impose le silence radio</td></tr>' +
        '<tr><td>5</td><td>Transport hôpital</td><td></td></tr>' +
        '<tr><td>6</td><td>Arrivée hôpital</td><td></td></tr>' +
        '<tr><td>7</td><td>Disponible</td><td></td></tr>' +
        '<tr><td>8</td><td>Indisponible</td><td>Motif par téléphone au CTA</td></tr>' +
        '<tr><td>9</td><td>Rentré</td><td></td></tr></tbody></table></div>' },
    { id: 'messages', t: 'Ambiance et compte rendu', ic: 'book', src: TRANS,
      html: '<div class="tw"><table><thead><tr><th>Message</th><th>Quand</th><th>Trame</th></tr></thead><tbody>' +
        '<tr><td>Ambiance</td><td>Dans les 5 min, vocal, sans statut</td><td>Je suis · je vois · je demande</td></tr>' +
        '<tr><td>Compte rendu (statut 3)</td><td>Dans les 20 min, puis toutes les 30 min</td><td>Je suis · je vois · je prévois · je fais · je demande</td></tr></tbody></table></div>' +
        '<p><b>Structure</b> : <b>entête</b> (destinataire « de » émetteur), <b>corps</b>, <b>final</b> (« parlez », « collationnez », « terminé »).</p>' +
        '<p>Victimes : <b>DCD</b>, <b>blessés graves</b>, <b>blessés légers</b>, <b>impliqués</b>. Les termes UA/UR sont réservés au médecin.</p>' +
        '<p>Feu : <b>circonscrit</b>, <b>maître du feu</b>, <b>éteint</b> ; on ne dit jamais « reprise de feu ». Personnes : <b>sauvetage</b>, <b>mise en sécurité</b>, <b>évacuation</b>, <b>mise à l’abri</b>.</p>' },
    { id: 'bilan', t: 'Le bilan au 15', ic: 'cross', src: TRANS,
      html: '<ul class="check"><li>Bilan sur le canal <b>SSU</b> vers le <b>CRRA 15</b> ; sans réponse radio : <b>03 26 27 15 15</b>.</li><li>Toujours <b>avant de quitter les lieux</b>.</li><li>Bilan <b>complet</b> ou <b>simplifié</b> selon la SAP 10.</li></ul>' },
    { id: 'tactique', t: 'Canaux tactiques et indicatifs', ic: 'grid', src: TRANS,
      html: '<p>Canaux tactiques 3/4 : <b>614, 633, 664, 673</b> ; 1/2 : <b>602</b> (RMAR 614, RWIT 633). Tout changement de canal est annoncé.</p>' +
        '<div class="tw"><table><thead><tr><th>Autorité</th><th>Indicatif</th></tr></thead><tbody>' +
        '<tr><td>Préfet</td><td>ARAMIS</td></tr><tr><td>Sous-préfet</td><td>BAZIN</td></tr><tr><td>Directeur de cabinet</td><td>PORTHOS</td></tr><tr><td>SIRACEDPC</td><td>ARIEL</td></tr>' +
        '<tr><td>DDSIS</td><td>LANCELOT</td></tr><tr><td>Médecin chef SDIS</td><td>HIPPOCRATE</td></tr><tr><td>Médecin chef SAMU</td><td>HERACLES</td></tr><tr><td>Chef de groupement</td><td>GARETH</td></tr><tr><td>Chef de centre</td><td>MERLIN</td></tr></tbody></table></div>' }
  ],
  key: ['Ambiance dans les <b>5 min</b> ; compte rendu dans les <b>20 min</b>, puis toutes les <b>30 min</b>.', 'Statut 4 = <b>urgent</b>, silence radio.', 'Bilan au 15 <b>avant de quitter les lieux</b>.', 'Jamais « reprise de feu ».'],
  traps: ['Parler d’UA/UR sans médecin.', 'Changer de canal sans l’annoncer.'],
  quiz: [
    { q: 'Délai du message d’ambiance après l’arrivée :', c: ['5 min', '20 min', '30 min', '1 h'], e: 'NDS 095.', s: 'statuts' },
    { q: 'Trame du compte rendu :', c: ['Je suis, je vois, je prévois, je fais, je demande', 'Je suis, je vois, je demande', 'J’ai vu, j’ai fait, je propose', 'Qui, quoi, où'], e: 'Présentation transmissions.', s: 'messages' },
    { q: 'Statut 8 :', c: ['Indisponible', 'Rentré', 'Urgent', 'Sur les lieux'], e: 'NDS 095.', s: 'statuts' },
    { q: 'Quand passer le bilan au 15 ?', c: ['Toujours avant de quitter les lieux', 'À l’arrivée à l’hôpital', 'Au retour au centre', 'Seulement si grave'], e: 'Présentation transmissions.', s: 'bilan' },
    { q: 'Indicatif du chef de centre :', c: ['MERLIN', 'GARETH', 'LANCELOT', 'ARAMIS'], e: 'Présentation transmissions.', s: 'tactique' },
    { q: 'Quel terme est proscrit ?', c: ['Reprise de feu', 'Feu circonscrit', 'Maître du feu', 'Feu éteint'], e: 'Présentation transmissions.', s: 'messages' }
  ]
});

/* ================================================================ 4. Conduite */
VSAV.chap({
  id: 'ppbe-conduite', part: 'ppbe', seq: PB5,
  title: 'Conduite des engins : dérogations, interdits, responsabilités', short: 'Conduite des engins', motif: 'road',
  sources: [COND, 'Note de service SDIS 51 n° 216 (22/01/2016)', 'Note de service SDIS 51 n° 258 (10/02/2017)', 'Évaluation diagnostique CA PPBE'],
  summary: 'Véhicule d’intérêt général prioritaire, dérogations du code de la route et leurs limites, alcool et stupéfiants, formation des conducteurs, déplacements non urgents et désignation du conducteur.',
  why: '<b>Pourquoi le CA s’en occupe ?</b> Le conducteur est <b>personnellement responsable</b>, mais c’est le CA qui juge l’urgence et lui rappelle ses devoirs. Un nid de guêpes dans un hangar ne justifie pas un sens interdit.',
  sections: [
    { id: 'priorite', t: 'Priorité et dérogations', ic: 'road', src: COND,
      html: '<ul class="check"><li><b>R311-1</b> : véhicule d’intérêt général prioritaire. <b>R414-9</b> : les usagers doivent céder le passage.</li>' +
        '<li><b>R432-1</b> : dérogation seulement avec les <b>avertisseurs spéciaux</b>, une <b>urgence justifiée</b> et <b>sans mettre en danger</b> autrui.</li>' +
        '<li>Feux visibles de tous côtés à 50 m ; feux de croisement allumés par usage.</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Règle</th><th>En urgence</th></tr></thead><tbody>' +
        '<tr><td>Feu rouge</td><td>Franchissable avec prudence</td></tr>' +
        '<tr><td>Vitesse</td><td>Dérogeable, en restant maître du véhicule</td></tr>' +
        '<tr><td>Ligne continue</td><td>Franchissable avec précaution</td></tr>' +
        '<tr><td>Sens interdit</td><td>Possible si les circonstances l’exigent</td></tr>' +
        '<tr><td>Stationnement</td><td>Dérogeable</td></tr>' +
        '<tr><td>Ceinture</td><td>Dérogeable selon le code, mais <b>obligatoire</b> au SDIS 51 (RI art. 255)</td></tr>' +
        '<tr><td>Bande d’arrêt d’urgence</td><td><b>Circulation interdite</b> (R412-8)</td></tr></tbody></table></div>' },
    { id: 'interdits', t: 'Jamais dérogeable', ic: 'alert', src: COND,
      html: '<div class="callout bad"><b>Aucune dérogation</b>Feux rouges clignotants (passages à niveau, R412-30) · limitations de tonnage (R422-4) · hauteurs limites. Les conditions météo s’imposent aussi.</div>' +
        '<div class="tw"><table><thead><tr><th>Alcool</th><th>Sanction</th></tr></thead><tbody>' +
        '<tr><td>Au-delà de 0,5 g/l</td><td>Interdit</td></tr>' +
        '<tr><td>Au-delà de 0,8 g/l</td><td>2 ans, 4 500 €, 6 points</td></tr>' +
        '<tr><td>Avec blessés graves</td><td>Jusqu’à 30 000 €</td></tr>' +
        '<tr><td>Accident mortel</td><td>Jusqu’à 10 ans et 150 000 €</td></tr></tbody></table></div>' +
        '<p class="small muted">Stupéfiants : article L235-1 du code de la route.</p>' },
    { id: 'formation', t: 'Devenir conducteur', ic: 'walk', src: 'NDS 216 (22/01/2016)',
      html: '<ul class="check"><li>Conduite opérationnelle seulement avec un <b>permis hors période probatoire</b>.</li>' +
        '<li><b>Référents conduite</b> et <b>carnet de conduite</b>.</li>' +
        '<li>Prise en main : <b>1 h</b> de théorie, <b>1 h 30</b> de pratique, puis (hors VL) <b>4 h</b> de conduite et un circuit de validation.</li>' +
        '<li>Permis C : 4 h et le circuit avant le stage conducteur engin pompe.</li>' +
        '<li>Perfectionnement <b>annuel</b> ; 30 à 45 min de familiarisation avec un nouveau gros véhicule.</li></ul>' },
    { id: 'non-urgent', t: 'Déplacements non urgents et désignation', ic: 'clip', src: 'NDS 258 (10/02/2017)',
      html: '<p>Renforts, reconstitution, relèves, <b>interventions payantes</b> : code de la route <b>strictement</b> respecté, <b>sans avertisseurs</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Type de trajet</th><th>Après un avis de contravention</th></tr></thead><tbody>' +
        '<tr><td>Urgent</td><td>Exonération demandée : pas d’amende, pas de retrait de points</td></tr>' +
        '<tr><td>Non urgent ou autre</td><td>Le conducteur est <b>désigné</b>, paie et perd des points</td></tr></tbody></table></div>' +
        '<p>Depuis le 1/1/2017, l’employeur <b>doit désigner</b> le conducteur, sinon amende de 4e classe (750 € ; 3 750 € pour la personne morale). Le conducteur est informé sous <b>10 jours</b>. Une vitesse injustifiée peut entraîner des mesures contre le conducteur et le CA.</p>' }
  ],
  key: ['Dérogation = avertisseurs + urgence justifiée + pas de danger pour autrui.', 'Jamais : passage à niveau, tonnage, hauteur, BAU.', 'Ceinture obligatoire au SDIS 51.', 'Non urgent : code strict, conducteur désigné.'],
  traps: ['Prendre un sens interdit pour un nid de guêpes : l’urgence n’est pas justifiée.', 'Croire que le statut de SP protège personnellement le conducteur.'],
  quiz: [
    { q: 'Pour un nid de guêpes dans un hangar, prendre un sens interdit est :', c: ['Injustifié', 'Autorisé avec avertisseurs', 'Obligatoire pour gagner du temps', 'Autorisé la nuit'], e: 'Évaluation diagnostique CA PPBE.', s: 'priorite' },
    { q: 'Quelle règle n’est jamais dérogeable ?', c: ['Les feux rouges clignotants d’un passage à niveau', 'Le feu rouge', 'La ligne continue', 'Le stationnement'], e: 'R412-30.', s: 'interdits' },
    { q: 'La ceinture au SDIS 51 :', c: ['Obligatoire (RI art. 255)', 'Facultative en urgence', 'Interdite en VSAV', 'Facultative en ville'], e: 'Présentation conduite.', s: 'priorite' },
    { q: 'Rouler sur la bande d’arrêt d’urgence est :', c: ['Interdit', 'Autorisé en urgence', 'Autorisé pour les SP', 'Toléré'], e: 'R412-8.', s: 'priorite' },
    { q: 'Radar lors d’une relève (non urgent) :', c: ['Le conducteur est désigné, paie et perd des points', 'Le SDIS paie', 'Exonération automatique', 'Le CA paie'], e: 'NDS 258.', s: 'non-urgent' },
    { q: 'Condition de permis pour la conduite opérationnelle :', c: ['Hors période probatoire', 'Permis depuis 10 ans', 'Permis C', 'Aucune'], e: 'NDS 216.', s: 'formation' }
  ]
});

/* ================================================================ 5. Responsabilités et médias */
VSAV.chap({
  id: 'ppbe-responsabilites', part: 'ppbe', seq: PB5,
  title: 'Responsabilités du chef d’agrès et relations avec les médias', short: 'Responsabilités', motif: 'book',
  sources: [RESP, 'Présentation « Les médias » (formation CA PPBE, SDIS 51)', 'Code pénal, art. 221-6, 222-19, 222-20, 223-3, 223-6, 223-7'],
  summary: 'Devoirs du CA, secret professionnel, responsabilités civile, pénale et administrative, infractions, omission de porter secours, communication avec la presse.',
  why: '<b>Pourquoi le CA doit-il le savoir ?</b> Il répond de l’intervention, des procédures et du matériel. <b>« La confiance n’exclut pas le contrôle. »</b>',
  sections: [
    { id: 'devoirs', t: 'Devoirs et secret', ic: 'eye', src: RESP,
      html: '<ul class="check"><li><b>Devoir de réserve</b> et <b>discrétion professionnelle</b>.</li>' +
        '<li><b>Secret professionnel</b> (sanction pénale) : santé, vie privée, locaux privés, nature de l’intervention. Il s’impose vis-à-vis de l’employeur, de la famille, de la presse, des collègues, de la hiérarchie et de la police.</li>' +
        '<li>Partage possible pour la <b>mission</b>, la <b>fiche bilan / CRSS</b> ou sa <b>propre défense</b>.</li></ul>' },
    { id: 'types', t: 'Les responsabilités', ic: 'shield', src: RESP,
      html: '<div class="tw"><table><thead><tr><th>Faute</th><th>Juridiction</th><th>Qui paie</th></tr></thead><tbody>' +
        '<tr><td>Faute de service</td><td>Tribunal administratif</td><td>Le service</td></tr>' +
        '<tr><td>Faute personnelle détachable du service</td><td>Tribunal judiciaire</td><td>L’agent</td></tr></tbody></table></div>' +
        '<p>Une faute peut aussi entraîner une <b>sanction disciplinaire</b>, indépendante des poursuites.</p>' +
        '<div class="tw"><table><thead><tr><th>Infraction</th><th>Tribunal</th><th>Prescription</th></tr></thead><tbody>' +
        '<tr><td>Contravention</td><td>Tribunal de police</td><td>1 an</td></tr><tr><td>Délit</td><td>Tribunal correctionnel</td><td>3 ans</td></tr><tr><td>Crime</td><td>Cour d’assises</td><td>10 ans</td></tr></tbody></table></div>' },
    { id: 'penal', t: 'Infractions non intentionnelles et omission de secours', ic: 'alert', src: RESP,
      html: '<ul class="check"><li><b>Maladresse, imprudence</b> : atteintes involontaires (art. 222-19, 222-20 et 221-6 du code pénal). L’auteur peut être direct, indirect ou médiat.</li>' +
        '<li><b>Omission de porter secours</b> (art. 223-6) : <b>5 ans</b> et <b>75 000 €</b>.</li>' +
        '<li>Abstention de combattre un sinistre (art. 223-7) : <b>2 ans</b> et <b>30 000 €</b>.</li>' +
        '<li><b>Délaissement</b> d’une personne vulnérable : art. 223-3.</li></ul>' },
    { id: 'medias', t: 'Les médias', ic: 'team', src: 'Présentation « Les médias » (formation CA PPBE, SDIS 51)',
      html: '<p>La communication revient au service communication, à l’officier presse ou au maire. Le CA ne s’exprime <b>qu’en tant que COS</b>, sans échelon supérieur présent, et avec <b>un seul interlocuteur</b>.</p>' +
        '<div class="tw"><table><thead><tr><th>Dire</th><th>Ne pas dire</th></tr></thead><tbody>' +
        '<tr><td>Nature, actions, moyens, bilan succinct, évolution, difficultés</td><td>Noms, détails morbides, suppositions sur les causes</td></tr></tbody></table></div>' +
        '<p>Informer ensuite le <b>CODIS</b>.</p>' }
  ],
  key: ['« La confiance n’exclut pas le contrôle. »', 'Secret professionnel, y compris envers collègues et police.', 'Faute de service : le service paie ; faute détachable : l’agent.', 'Médias : COS seulement, faits seulement, puis CODIS informé.'],
  traps: ['Donner le nom d’une victime à un journaliste.', 'Croire que le secret ne s’applique pas entre collègues.'],
  quiz: [
    { q: 'Le secret professionnel s’impose-t-il envers la hiérarchie ?', c: ['Oui', 'Non', 'Seulement pour la santé', 'Seulement hors intervention'], e: 'Présentation responsabilités.', s: 'devoirs' },
    { q: 'Une faute de service est jugée par :', c: ['Le tribunal administratif', 'La cour d’assises', 'Le tribunal de police', 'Le conseil de discipline seulement'], e: 'Présentation responsabilités.', s: 'types' },
    { q: 'Prescription d’un délit :', c: ['3 ans', '1 an', '10 ans', '6 mois'], e: 'Présentation responsabilités.', s: 'types' },
    { q: 'Omission de porter secours (art. 223-6) :', c: ['5 ans et 75 000 €', '2 ans et 30 000 €', '1 an et 15 000 €', '10 ans et 150 000 €'], e: 'Code pénal.', s: 'penal' },
    { q: 'Un journaliste demande le nom de la victime :', c: ['On ne le donne pas', 'On le donne si la famille est prévenue', 'On le donne au CODIS seulement après', 'On le donne s’il est connu'], e: 'Présentation médias.', s: 'medias' },
    { q: 'Après une déclaration à la presse, le COS :', c: ['Informe le CODIS', 'N’a rien à faire', 'Prévient le maire uniquement', 'Rédige un communiqué'], e: 'Présentation médias.', s: 'medias' }
  ]
});

VSAV.ess([{ t: 'PPBE — L’essentiel', ic: 'shield', items: [
  { k: 'Volume à épuiser', v: 'L × l × h ; débit en m³/h', go: 'ppbe-epuisement/calcul' },
  { k: 'Bâchage', v: 'Chevauchement <b>≈ 80 cm</b>, du bas vers le haut', go: 'ppbe-bachage/toiture' },
  { k: 'Hyménoptères', v: 'Jamais d’essence ; signature <b>avant</b> si payant', go: 'ppbe-hymenopteres/destruction' },
  { k: 'Ouverture de porte', v: 'Fenêtre plutôt que porte ; binôme + <b>détecteur CO</b> ; avis de passage', go: 'ppbe-ouverture-porte/cat' },
  { k: 'Payant', v: '1re heure indivisible, puis ½ h ; <b>46 € / h / SP</b>', go: 'ppbe-procedures/payant' },
  { k: 'CO', v: 'Transport jusqu’à <b>3</b> victimes, GrDF toujours alerté', go: 'ppbe-procedures/co' },
  { k: 'Messages', v: 'Ambiance <b>5 min</b> · CR <b>20 min</b> puis <b>30 min</b>', go: 'ppbe-transmissions/statuts' },
  { k: 'Jamais dérogeable', v: 'Passage à niveau, tonnage, hauteur, BAU', go: 'ppbe-conduite/interdits' },
  { k: 'Omission de secours', v: '<b>5 ans</b> et <b>75 000 €</b>', go: 'ppbe-responsabilites/penal' }
] }]);
