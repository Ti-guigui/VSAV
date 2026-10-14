/* CHEF D’AGRÈS VSAV — fichier 2 : CA VSAV 3 (procédures v2) et CA VSAV 4 (notes de service, mémos et mémentos)
   Sources : dossier « 1 - SUAP / 3 - Chef d’agrès VSAV » du SDIS 51 (fiches procédures « Chef d’Agrès VSAV » MAJ 03/2024,
   PR SR MAJ 12-2023, NDS 095 modifiée, 300, 362, 415, 434, POP-19, procédures SAP 03 et SAP 10, mémos B-C-D, Mémento SSUAP)
   et dossier « 4 - Formateur premiers secours » (Mémento SUAP v2024-03). Les comparaisons « ce qui change » portent sur
   les versions Équipier déjà présentes dans l’application (partie1.js, socle.js, tutorat.js, foad.js, partie2.js). */
var CAV_2_S3 = 'CA VSAV 3 — Procédures v2';
var CAV_2_S4 = 'CA VSAV 4 — Notes de service, mémos et mémentos';

/* =====================================================================================
   CA VSAV 3 — CHAPITRE 1 : sécurité, défenestré, préservation des traces et indices
   ===================================================================================== */
VSAV.chap({
  id: 'cav-securite-pti', part: 'cav', seq: CAV_2_S3,
  title: 'Sécuriser la scène, défenestré et préservation des traces et indices', short: 'Sécurité, défenestré, PTI', motif: 'shield', accent: '#b45309',
  sources: ['PR - Sécurité sur intervention v2, Chef d’Agrès VSAV (SDIS 51, MAJ 21/03/2024)', 'PR - Défénestré, Chef d’Agrès VSAV (SDIS 51, MAJ 22/03/2024)', 'PR - PTI préservation des traces et indices, Chef d’Agrès VSAV (SDIS 51, MAJ 22/03/2024)'],
  summary: 'Le chef d’agrès lit la scène avant la victime : dangers, point de saut d’un défenestré, traces à ne pas détruire.',
  why: '<b>Pourquoi ces trois fiches vont ensemble ?</b> Elles décrivent ce que fait le chef d’agrès <b>pendant que l’équipage soigne</b>. Le bilan circonstanciel protège l’équipage et la victime du suraccident ; pour un défénestré, c’est lui qui dit si le motif de départ est le bon (gaz ? incendie ? autre victime ?) ; et quand la cause peut ne pas être accidentelle, ses choix (cheminement, nombre d’intervenants, ce qu’on touche) conditionnent l’enquête. Ne pas respecter ces règles peut <b>compliquer l’enquête et parfois incriminer les primo-intervenants</b>.',
  sections: [
    { id: 'dangers', t: 'Reconnaître les dangers au bilan circonstanciel', ic: 'alert', src: 'PR - Sécurité sur intervention v2 (MAJ 21/03/2024)',
      html: '<p>La fiche v2 situe la protection <b>dans le bilan circonstanciel</b>. Pour reconnaître les dangers :</p>' +
        '<ul class="check"><li>approche <b>prudente</b> de la zone pour évaluer les dangers pour les intervenants et les témoins ;</li><li>repérer les personnes exposées et le <b>nombre de victimes</b> (se renseigner éventuellement auprès des témoins) ;</li><li>regarder autour de la victime <b>en restant à distance</b>, pour repérer les dangers persistants qui la menacent.</li></ul>' +
        '<p>Puis, selon cette première analyse :</p>',
      steps: ['Délimiter clairement, largement et visiblement la zone d’intervention ou de danger et empêcher toute intrusion.', 'Mettre en place les moyens de protection collective en dotation.', 'Supprimer immédiatement, et si possible de façon permanente, les dangers environnants (protection des intervenants, de la victime, des autres personnes ; prévention du suraccident).', 'En cas d’impossibilité ou de danger réel et imminent pour la victime : dégagement d’urgence.', 'Utiliser tous les moyens matériels disponibles et, si besoin, le concours de toute autre personne pouvant aider.'], stepsTitle: 'Protéger',
      after: '<div class="callout ok">Selon les moyens humains disponibles, toutes ces actions peuvent se faire <b>simultanément</b>. La fiche v2 n’ajoute pas de geste à la version Équipier présente dans l’app (FOAD « Protection et sécurité ») : elle rappelle surtout que l’organisation de la protection relève du <b>bilan circonstanciel</b>.</div>' },
    { id: 'defenestre', t: 'Défénestré : qui fait quoi ?', ic: 'team', src: 'PR - Défénestré (MAJ 22/03/2024), p. 1',
      steps: ['Chef d’agrès : bilan circonstanciel du point de chute, systématique.', 'Équipiers : bilan primaire + secondaire, puis gestes d’urgence.', 'Chef d’agrès : reconnaissance jusqu’au point de saut = bilan circonstanciel du lieu de la défenestration, avec ou sans les forces de l’ordre selon la situation, par le chef d’agrès ou le chef de groupe.', 'Chef d’agrès : participe ensuite au conditionnement de la victime.'], stepsTitle: 'Répartition des rôles',
      figs: [{ img: 'img/cav-2/defenestre-roles.jpg', cap: 'Défénestré : deux colonnes d’action en parallèle', txt: '<p>À gauche le chef d’agrès (point de chute, puis point de saut), à droite les équipiers (bilans et gestes d’urgence). L’astérisque rappelle que la reconnaissance du lieu de l’intervention doit <b>toujours</b> être réalisée (par exemple, MGO « incendie »).</p>', src: 'PR - Défénestré, p. 1' }] },
    { id: 'saut', t: 'La reconnaissance du point de saut', ic: 'target', src: 'PR - Défénestré (MAJ 22/03/2024), p. 2',
      html: '<p>Le lieu de l’intervention comprend <b>le point de chute ET le point de saut</b>. La reconnaissance du point de saut est <b>obligatoire</b> : c’est le bilan circonstanciel qui répond à cinq questions.</p>' +
        '<div class="tw"><table><thead><tr><th>Question</th><th>Pourquoi</th></tr></thead><tbody>' +
        '<tr><td>Que s’est-il passé ?</td><td>Chute accidentelle, fuite devant un danger, geste volontaire…</td></tr>' +
        '<tr><td>Les informations initiales sont-elles correctes ?</td><td>Requalifier la nature de l’intervention si besoin</td></tr>' +
        '<tr><td>Existe-t-il un danger immédiat à venir ?</td><td>Gaz, feu : la victime a pu fuir un sinistre</td></tr>' +
        '<tr><td>Combien y a-t-il de victimes ?</td><td>D’autres personnes peuvent être restées dans le logement</td></tr>' +
        '<tr><td>Les moyens sont-ils suffisants pour le moment ?</td><td>Demander des renforts</td></tr></tbody></table></div>' +
        '<p class="small muted">La colonne « Pourquoi » illustre les questions ; seules les questions sont dans la fiche.</p>' +
        '<div class="tw"><table><thead><tr><th>Qui reconnaît ?</th><th>Conditions</th></tr></thead><tbody>' +
        '<tr><td><b>Le chef d’agrès du VSAV seul</b> (motif de départ erroné), avec un <b>détecteur multi-gaz</b></td><td>Uniquement <b>après stabilisation de la victime</b> et si le cheminement jusqu’au point de saut est sans complexité ni danger identifié. Sinon (danger, complexité, événement particulier ne permettant pas de se séparer de l’équipage en sécurité) : <b>attendre les renforts</b>. Dans tous les cas : <b>requalification</b> de la nature d’intervention et <b>demande de renforts</b> pour compléter le train de départ (<b>au minimum un chef de groupe</b>).</td></tr>' +
        '<tr><td>Le FPT / MEA (train de départ complet « défénestré ») ou le chef de groupe</td><td>Selon l’organisation de l’intervention.</td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Lieux gelés par les forces de l’ordre</b> avant la reconnaissance : après concertation et validation avec elles, une <b>levée de doute gaz</b> doit être réalisée (ouverture possible du gaz par la victime en cas de suicide), en accord avec les FO.</div>' +
        '<p>La fiche conclut : toutes les situations ne peuvent pas être écrites ; l’analyse du <b>premier COS</b> est essentielle et il appartient au chef d’agrès de prendre la décision qui lui semble la plus appropriée.</p>' },
    { id: 'pti-quand', t: 'PTI : quand y penser ?', ic: 'eye', src: 'PR - PTI préservation des traces et indices (MAJ 22/03/2024), p. 1',
      html: '<p>À l’appel, à l’arrivée ou en cours d’intervention, certains éléments laissent penser que la cause <b>n’est pas accidentelle</b> : <b>contenants suspects</b>, <b>véhicules ou personnes suspects</b>, <b>ouvrants fracturés</b>. En SSUAP, questionnements, scènes ou témoignages peuvent établir sans équivoque une scène de crime, une mort suspecte, un viol, une agression physique…</p>' +
        '<p><b>Pourquoi ?</b> Préserver au maximum les traces et indices qui permettront peut-être à la police ou à la gendarmerie de trouver l’auteur des faits. <b>Avec quoi ?</b> Engagement <b>minimum</b> de personnel, <b>gants</b> à usage unique, <b>masque</b>.</p>' },
    { id: 'pti-comment', t: 'PTI : le « gel des lieux »', ic: 'hand', src: 'PR - PTI préservation des traces et indices (MAJ 22/03/2024), p. 2',
      steps: ['Limiter le nombre d’intervenants.', 'Déterminer un cheminement d’accès unique, en longeant au maximum les murs.', 'Garder en mémoire les actions réalisées.', 'Porter des gants à usage unique et, si possible, un masque.', 'Ne pas modifier l’environnement (portes, fenêtres… dans un bâtiment ; ou dans un véhicule).', 'Ne pas déplacer le corps sauf si des actions sont entreprises (RCP) : préciser alors aux forces de l’ordre l’emplacement initial du corps et les gestes effectués.', 'Ne pas fouiller le corps ; ne pas toucher la lettre en cas de suicide présumé.', 'Si possible, prendre des photos avant de modifier la scène, pour l’usage exclusif des forces de l’ordre.'], stepsTitle: 'Comment',
      after: '<div class="tw"><table><thead><tr><th>Situation</th><th>Consigne</th></tr></thead><tbody>' +
        '<tr><td>Arme à feu</td><td>Ne pas toucher l’arme (si inévitable, maintenir la configuration et toucher le minimum) ; découper les vêtements si besoin <b>sans impacter les trous déjà présents</b>.</td></tr>' +
        '<tr><td>Pendaison</td><td>Desserrer le nœud ou, à défaut, <b>couper la corde sans défaire le nœud</b>.</td></tr>' +
        '<tr><td>Principes généraux</td><td>Se tenir à la disposition de l’<b>OPJ</b> ; communiquer les <b>identités de tout l’équipage</b> (prélèvements discriminatoires à venir) ; communiquer les actions des SP (ouverture de porte, dégagement d’urgence, RCP…).</td></tr></tbody></table></div>' },
    { id: 'pti-risques', t: 'PTI : risques pour l’équipage', ic: 'clip', src: 'PR - PTI préservation des traces et indices, p. 2',
      html: '<div class="callout bad"><b>Article 434-4 du code pénal</b> (cité par la fiche) : est puni de <b>trois ans d’emprisonnement et de 45 000 euros d’amende</b> le fait, en vue de faire obstacle à la manifestation de la vérité, [de modifier l’état des lieux…]. Le non-respect de certaines règles peut compliquer l’enquête et quelquefois <b>incriminer les primo-intervenants</b>.</div>' +
        '<p><b>Efficacité attendue :</b> l’action des secours ne compromet pas le travail des techniciens d’investigation criminelle ou de médecine légale. Les soins restent prioritaires : la fiche autorise à déplacer le corps pour une RCP, à condition de le dire aux forces de l’ordre.</p>' }
  ],
  key: ['Protection organisée au bilan circonstanciel : délimiter, protéger, supprimer le danger, dégagement d’urgence si danger réel et imminent.', 'Défénestré : le CA fait le circonstanciel du point de chute puis reconnaît le point de saut ; les équipiers font bilans et gestes.', 'Point de saut seul (VSAV) : après stabilisation de la victime, cheminement sans danger, détecteur multi-gaz.', 'Toujours requalifier et demander des renforts (au minimum un chef de groupe).', 'PTI : peu d’intervenants, cheminement unique le long des murs, gants et masque, ne rien modifier.', 'Pendaison : couper la corde sans défaire le nœud ; arme : ne pas y toucher.', 'Art. 434-4 CP : 3 ans et 45 000 €.'],
  traps: ['Croire que le point de chute suffit : la reconnaissance du point de saut est obligatoire.', 'Quitter son équipage pour monter au point de saut alors que la victime n’est pas stabilisée ou que le cheminement est dangereux.', 'Défaire le nœud du lien de pendaison ou découper les vêtements à travers les trous de balle.', 'Oublier de dire aux forces de l’ordre où était le corps avant la RCP.'],
  quiz: [
    { q: 'Défénestré : qui réalise le bilan circonstanciel du point de chute ?', c: ['Le chef d’agrès, systématiquement', 'L’équipier n° 1', 'Le chef de groupe uniquement', 'Les forces de l’ordre'], e: 'PR Défénestré : CA = bilan circonstanciel du point de chute systématique ; équipiers = bilans primaire et secondaire, gestes d’urgence.', s: 'defenestre' },
    { q: 'Le chef d’agrès du VSAV seul peut reconnaître le point de saut :', c: ['Après stabilisation de la victime, avec un détecteur multi-gaz, si le cheminement est sans danger', 'Dès l’arrivée, avant tout bilan', 'Jamais, c’est le rôle exclusif des forces de l’ordre', 'Uniquement avec un ARI'], e: 'Uniquement après stabilisation de la victime et avec un cheminement sans complexité ni danger identifié ; sinon attendre les renforts.', s: 'saut' },
    { q: 'Dans tous les cas de défénestration avec VSAV seul, le CA demande au minimum :', c: ['Un chef de groupe (requalification + renforts)', 'Un second VSAV', 'Une équipe cynotechnique', 'Rien si la victime est stable'], e: 'Requalification de la nature de l’intervention et demande de renforts pour compléter le train de départ (au minimum chef de groupe).', s: 'saut' },
    { q: 'Les forces de l’ordre ont gelé les lieux avant la reconnaissance. Que prévoit la fiche ?', c: ['Une levée de doute gaz après concertation et validation avec elles', 'Aucune reconnaissance', 'Entrer sans les prévenir pour gagner du temps', 'Attendre la police technique et scientifique'], e: 'Ouverture possible du gaz par la victime en cas de suicide : levée de doute réalisée en accord avec les FO.', s: 'saut' },
    { q: 'Victime pendue : comment libérer le cou en préservant les indices ?', c: ['Desserrer le nœud ou couper la corde sans défaire le nœud', 'Défaire le nœud soigneusement', 'Attendre les forces de l’ordre', 'Couper au ras du nœud puis jeter le lien'], e: 'PR PTI, intervention pour pendaison.', s: 'pti-comment' },
    { q: 'Quelle consigne de cheminement donne la fiche PTI ?', c: ['Un accès unique, en longeant au maximum les murs', 'Le chemin le plus court au centre de la pièce', 'Plusieurs accès pour aller plus vite', 'Aucune consigne'], e: 'Déterminer un cheminement d’accès unique en longeant les murs, limiter le nombre d’intervenants.', s: 'pti-comment' },
    { q: 'Pourquoi communiquer l’identité de tout l’équipage à l’OPJ ?', c: ['Pour les prélèvements discriminatoires à venir', 'Pour une sanction', 'Pour la facturation', 'Ce n’est pas demandé'], e: 'Principes généraux de la fiche PTI.', s: 'pti-comment' },
    { q: 'Sanction prévue par l’article 434-4 du code pénal cité dans la fiche PTI :', c: ['3 ans d’emprisonnement et 45 000 € d’amende', '1 an et 15 000 €', '5 ans et 75 000 €', 'Une simple amende de 1 500 €'], e: 'Obstacle à la manifestation de la vérité : 3 ans et 45 000 €.', s: 'pti-risques' }
  ]
});

/* =====================================================================================
   CA VSAV 3 — CHAPITRE 2 : arrêt cardiaque adulte, enfant, nourrisson (v2)
   ===================================================================================== */
VSAV.chap({
  id: 'cav-acr', part: 'cav', seq: CAV_2_S3,
  title: 'Arrêt cardiaque de l’adulte, de l’enfant et du nourrisson : la conduite du chef d’agrès', short: 'ACR v2 (adulte, enfant)', motif: 'defib', accent: '#be123c',
  sources: ['PR ACR Adulte v2, Chef d’Agrès VSAV (SDIS 51, MAJ 21/03/2024)', 'PR ACR Enfant nourrisson, Chef d’Agrès VSAV (SDIS 51, MAJ 21/03/2024)', 'Mémento SSUAP (SDIS 51)'],
  summary: 'Organiser l’équipe autour de la RCP : qui masse, qui pose le DAE, quand demander le renfort, quand relayer.',
  why: '<b>Pourquoi une fiche « chef d’agrès » sur un geste que tout l’équipage connaît ?</b> Parce qu’en RCP, ce qui fait gagner ou perdre des secondes, c’est l’<b>organisation</b> : répartir alerte, compressions et DAE selon le nombre de secouristes, poser les électrodes sans arrêter le massage, faire tourner les masseurs toutes les deux minutes au moment de l’analyse, savoir quand passer aux insufflations seules. Le contenu des gestes est détaillé dans le chapitre Tutorat « L’arrêt cardiaque » de l’app ; ici, on se place côté chef d’agrès.',
  sections: [
    { id: 'orga', t: 'Organiser l’équipe selon le nombre de secouristes', ic: 'team', src: 'PR ACR Adulte v2, p. 1 ; PR ACR Enfant nourrisson, p. 1',
      html: '<div class="tw"><table><thead><tr><th>Situation</th><th>Adulte</th><th>Enfant / nourrisson</th></tr></thead><tbody>' +
        '<tr><td>2 secouristes avec DAE</td><td>L’un poursuit le massage, le second met en œuvre le DAE <b>et demande un renfort médical immédiatement après la première analyse</b> (et la délivrance éventuelle du 1<sup>er</sup> choc).</td><td rowspan="2">Un ou deux secouristes poursuivent massage <b>et</b> ventilation, l’autre met en œuvre le DAE. Le renfort médical est demandé juste après le début de la RCP (ordre de la fiche).</td></tr>' +
        '<tr><td>3 secouristes ou plus</td><td>Alerte, massage et DAE <b>simultanément</b>.</td></tr>' +
        '<tr><td>Électrodes</td><td colspan="2">Posées <b>sans interrompre</b> la RCP ; interruption des compressions limitée au minimum au moment des insufflations.</td></tr>' +
        '<tr><td>Relais</td><td colspan="2">Toutes les <b>deux minutes</b>, au moment de l’analyse du rythme par le DAE s’il est en place.</td></tr></tbody></table></div>' },
    { id: 'sequence', t: 'La séquence de la fiche', ic: 'heart', src: 'PR ACR Adulte v2 ; PR ACR Enfant nourrisson',
      steps: ['Enfant / nourrisson seulement : retirer délicatement tout corps étranger visible et facilement accessible, puis 5 insufflations immédiates (de préférence à l’insufflateur manuel de taille adaptée), en restant attentif à toute toux, mouvement ou reprise respiratoire.', 'RCP immédiate : 30 compressions / 2 insufflations chez l’adulte ; 15 / 2 chez l’enfant et le nourrisson.', 'DAE le plus tôt possible ; poursuivre la RCP jusqu’à ce qu’il demande l’interruption.', 'Reprendre la RCP immédiatement après la délivrance ou non d’un choc, sans attendre les instructions vocales.', 'O₂ par insufflation dès que possible, sans retarder la réanimation.', 'Aspiration des sécrétions si nécessaire, sans retarder ni interrompre la RCP ou le choc.', 'Canule oropharyngée si la ventilation est inefficace par difficulté à maintenir les voies aériennes libres.', 'Poursuivre jusqu’à l’arrivée des renforts médicalisés ou la reprise d’une respiration normale ; surveiller pouls et signes de vie.'], stepsTitle: 'Arrêt cardiaque',
      after: '<div class="tw"><table><thead><tr><th>Encadré chiffré de la fiche</th><th>Adulte</th><th>Enfant</th><th>Nourrisson</th></tr></thead><tbody>' +
        '<tr><td>Débit d’O₂ en insufflation</td><td colspan="3"><b>15 L/min</b></td></tr>' +
        '<tr><td>Compressions / insufflations</td><td><b>30 / 2</b></td><td colspan="2"><b>15 / 2</b></td></tr>' +
        '<tr><td>Rythme</td><td colspan="3"><b>100 à 120 / min</b></td></tr></tbody></table></div>' +
        '<p class="small">Le Mémento SSUAP ajoute le cas particulier du <b>noyé adulte : 5 insufflations initiales</b> (voir le chapitre Noyade).</p>' },
    { id: 'evolution', t: 'Adapter la conduite à l’évolution', ic: 'ecg', src: 'PR ACR Adulte v2, p. 2 ; PR ACR Enfant nourrisson, p. 2',
      html: '<p><b>Surveiller</b> l’apparition d’un pouls carotidien ou fémoral pendant les insufflations (le localiser pendant les compressions et maintenir la position lors des insufflations ; chez l’adulte, la fiche précise « <b>à partir de 3 secouristes</b> ») et d’autres signes de vie (respire, bouge, ouvre les yeux).</p>' +
        '<div class="tw"><table><thead><tr><th>Situation</th><th>Conduite</th></tr></thead><tbody>' +
        '<tr><td>Pouls perçu (hors compressions) mais ventilation absente ou anormale (<b>FR ≤ 6 mvts/min</b>)</td><td>Arrêter les compressions, poursuivre les insufflations, contrôler le pouls en permanence. Adulte : <b>10 insufflations/min</b>. Enfant : <b>15 à 20/min</b>. Nourrisson : <b>25 à 30/min</b> (limite inférieure de la fréquence normale pour l’âge).</td></tr>' +
        '<tr><td>La victime se réveille (bouge, ouvre les yeux, respire normalement)</td><td>Cesser compressions et ventilation ; <b>réaliser un bilan primaire</b> ; surveillance constante de la conscience et de la ventilation <b>en la gardant sur le dos</b> ; protéger du froid, du chaud, des intempéries ; <b>se tenir prêt à reprendre la RCP</b> (risque majeur de récidive).</td></tr>' +
        '<tr><td>Autres cas</td><td>Poursuivre la RCP dans l’attente de l’équipe médicale.</td></tr></tbody></table></div>' },
    { id: 'change', t: 'Ce qui change par rapport à la version Équipier', ic: 'list', src: 'Comparaison PR ACR « Chef d’Agrès » (03/2024) / chapitre Tutorat « L’arrêt cardiaque » de l’app (PR enfant-nourrisson MAJ 05/2024)',
      html: '<div class="tw"><table><thead><tr><th>Point</th><th>Version Équipier (app)</th><th>Version Chef d’agrès</th></tr></thead><tbody>' +
        '<tr><td>Renfort médical (enfant)</td><td>« en urgence absolue »</td><td>« Demander un renfort médical » (sans qualificatif)</td></tr>' +
        '<tr><td>Organisation à 2 avec DAE (enfant)</td><td>Non détaillée dans l’app</td><td>Un ou deux secouristes massent et ventilent, l’autre pose le DAE</td></tr>' +
        '<tr><td>Relais toutes les 2 min (enfant)</td><td>Déduit de la fiche adulte</td><td>Écrit dans la fiche enfant-nourrisson</td></tr>' +
        '<tr><td>Encadré chiffré</td><td>—</td><td>O₂ 15 L/min, 30/2 ou 15/2, 100 à 120/min en bas de fiche</td></tr></tbody></table></div>' +
        '<div class="callout ok">Sur le fond, les gestes sont <b>identiques</b> : aucun chiffre ne change entre les deux versions.</div>' }
  ],
  key: ['À 2 avec DAE (adulte) : l’un masse, l’autre pose le DAE et demande le renfort après la 1re analyse.', 'À 3 ou plus : alerte, massage et DAE en même temps.', 'Électrodes posées sans arrêter la RCP ; reprise immédiate après le choc.', 'Relais toutes les 2 minutes, pendant l’analyse.', 'Enfant / nourrisson : corps étranger visible retiré, 5 insufflations, puis 15/2.', 'Pouls sans ventilation (FR ≤ 6) : 10/min adulte, 15–20 enfant, 25–30 nourrisson.', 'Réveil : bilan primaire, sur le dos, prêt à reprendre.'],
  traps: ['Arrêter le massage pour coller les électrodes ou attendre la voix du DAE après le choc.', 'Asseoir la victime qui se réveille : elle reste sur le dos.', 'Oublier de prévoir le relais des masseurs au moment de l’analyse.'],
  quiz: [
    { q: 'Adulte, 2 secouristes avec DAE : quand demander le renfort médical ?', c: ['Immédiatement après la première analyse (et le choc éventuel)', 'Avant de commencer la RCP', 'Après 10 minutes de RCP', 'Seulement si le DAE ne délivre pas de choc'], e: 'PR ACR adulte v2 : le second secouriste met en œuvre le DAE et demande le renfort juste après la première analyse.', s: 'orga' },
    { q: 'Adulte, 3 secouristes ou plus :', c: ['Alerte, massage et DAE sont réalisés simultanément', 'On masse à trois à tour de rôle', 'On attend le DAE avant de masser', 'L’un des trois reste en réserve'], e: 'À trois secouristes ou plus, les trois actions sont simultanées.', s: 'orga' },
    { q: 'À quel moment les masseurs se relaient-ils ?', c: ['Toutes les 2 minutes, lors de l’analyse du rythme par le DAE', 'Toutes les 5 minutes', 'À chaque insufflation', 'Quand le masseur le demande'], e: 'Relais toutes les deux minutes, au moment de l’analyse si le DAE est en place.', s: 'orga' },
    { q: 'Nourrisson : pouls perçu, ventilation absente. Fréquence des insufflations ?', c: ['25 à 30 / min', '10 / min', '15 à 20 / min', '40 à 60 / min'], e: 'Nourrisson 25 à 30/min ; enfant 15 à 20/min ; adulte 10/min.', s: 'evolution' },
    { q: 'Seuil de ventilation « anormale » retenu par la fiche :', c: ['FR ≤ 6 mvts/min', 'FR ≤ 12 mvts/min', 'FR ≤ 20 mvts/min', 'FR > 30 mvts/min'], e: 'Pouls perçu et ventilation absente ou anormale (FR ≤ 6 mvts/min) : insufflations seules.', s: 'evolution' },
    { q: 'La victime se réveille. Que fait le chef d’agrès ?', c: ['Cesser RCP, bilan primaire, la garder sur le dos, prêt à reprendre', 'La mettre en position demi-assise', 'Retirer les électrodes du DAE', 'Arrêter la surveillance'], e: 'Risque majeur de récidive : surveillance constante sur le dos, prêt à reprendre.', s: 'evolution' },
    { q: 'Quelle différence de rédaction existe entre fiche Équipier et fiche CA pour l’enfant ?', c: ['La fiche CA demande un renfort médical sans préciser « en urgence absolue »', 'La fiche CA passe à 30/2', 'La fiche CA supprime les 5 insufflations', 'La fiche CA baisse l’O₂ à 9 L/min'], e: 'Les chiffres sont identiques ; seule la formulation du renfort et l’organisation à 2 sont précisées.', s: 'change' }
  ]
});

/* =====================================================================================
   CA VSAV 3 — CHAPITRE 3 : les trois détresses vitales (v2)
   ===================================================================================== */
VSAV.chap({
  id: 'cav-detresses', part: 'cav', seq: CAV_2_S3,
  title: 'Détresses circulatoire, respiratoire et neurologique (v2)', short: 'Détresses vitales v2', motif: 'alert', accent: '#dc2626',
  sources: ['PR Détresse circulatoire v2, Chef d’Agrès VSAV (SDIS 51, MAJ 21/03/2024)', 'PR Détresse respiratoire v2 (MAJ 21/03/2024)', 'PR Détresse neurologique v2 (MAJ 21/03/2024)', 'Mémo B (A6) ; Mémento SSUAP'],
  summary: 'Trois fiches bâties sur le même plan : définir, reconnaître avec des seuils, installer, oxygéner, demander un avis.',
  why: '<b>Pourquoi raisonner « détresse » plutôt que « maladie » ?</b> Le chef d’agrès n’a pas à poser un diagnostic : il doit repérer qu’une <b>fonction vitale</b> est atteinte, car les trois fonctions sont étroitement liées — l’atteinte de l’une entraîne, plus ou moins vite, celle des deux autres, puis le décès. Les fiches v2 donnent des <b>seuils chiffrés</b> (pouls, PA, FR, SpO₂) qui rendent le bilan transmissible au médecin régulateur et qui fondent la « criticité » de la NDS 362.',
  sections: [
    { id: 'causes', t: 'Définition et causes', ic: 'list', src: 'PR Détresses circulatoire, respiratoire, neurologique v2 (« Quand ? Pourquoi ? »)',
      html: '<p>Une détresse est une atteinte d’une fonction vitale dont l’évolution peut affecter <b>à court terme</b> les autres fonctions et conduire au décès. L’arrêt cardiaque, l’arrêt respiratoire et la perte de connaissance en sont les formes majeures ; on peut présenter des signes visibles de détresse <b>sans</b> être à ce stade.</p>' +
        '<div class="tw"><table><thead><tr><th>Détresse</th><th>Causes citées par la fiche</th></tr></thead><tbody>' +
        '<tr><td>Circulatoire</td><td><b>Le cœur</b> (infarctus, insuffisance cardiaque) ; <b>la quantité de sang</b> (hémorragie, déshydratation : diarrhée, brûlure étendue…) ; <b>le contenant</b> = dilatation des vaisseaux (réaction allergique grave, intoxication grave).</td></tr>' +
        '<tr><td>Respiratoire</td><td>Obstruction grave ou partielle des voies aériennes (corps étranger, allergie, traumatisme, infection) ; maladies pulmonaires dont l’asthme ; traumatisme du thorax ; inhalation de produits caustiques ou de fumées.</td></tr>' +
        '<tr><td>Neurologique</td><td>Traumatisme (choc sur la tête) ; maladie du cerveau (AVC), de la moelle ou des nerfs ; certaines intoxications ; manque de sucre.</td></tr></tbody></table></div>' },
    { id: 'seuils', t: 'Les signes chiffrés', ic: 'target', src: 'PR Détresse circulatoire v2, p. 2 ; PR Détresse respiratoire v2, p. 2',
      html: '<div class="tw"><table><thead><tr><th>Détresse</th><th>Signes essentiels</th><th>Autres signes</th></tr></thead><tbody>' +
        '<tr><td><b>Circulatoire</b></td><td>Pouls <b>radial imperceptible</b> alors que le carotidien est présent ; <b>PA systolique &lt; 90 mmHg</b> (ou baisse de <b>plus de 30 %</b> de la PA habituelle chez l’hypertendu).</td><td>FC <b>&gt; 120</b>/min au repos ou <b>&lt; 40</b>/min ; <b>TRC &gt; 3 s</b> ; pâleur (extrémités, paupière inférieure, lèvres) ; marbrures (face antérieure des genoux) ; sueurs froides ; soif ; agitation, angoisse de mort ; vertiges puis somnolence si assis ou debout.</td></tr>' +
        '<tr><td><b>Respiratoire</b></td><td>Respiration <b>rapide</b> (souvent <b>&gt; 30 mvts/min</b>), <b>superficielle</b> ; hypoxie objectivée par une <b>SpO₂ &lt; 94 %</b> (<b>&lt; 89 %</b> chez l’insuffisant respiratoire chronique).</td><td>Voir « ce que la victime dit / ce qu’on voit / ce qu’on entend ».</td></tr>' +
        '<tr><td><b>Neurologique</b></td><td>Perte de connaissance : ne réagit pas à la parole, à une secousse douce des épaules, à la demande d’ouvrir les yeux ou de serrer la main.</td><td>Altération de la conscience (somnolence, retard de réponse), convulsions, désorientation, amnésie de l’événement, perte de connaissance temporaire, paralysie, asymétrie du visage, <b>asymétrie des pupilles</b>, pupilles aréactives, anomalie de la parole.</td></tr></tbody></table></div>' +
        '<div class="callout warn">Toute victime qui a perdu connaissance et ne respire pas (ou respiration agonique / anormale) = <b>arrêt cardiaque</b>. Toute victime qui a perdu connaissance et respire est à <b>haut risque de détresse respiratoire</b> : ses voies aériennes sont menacées.</div>' },
    { id: 'respi', t: 'Détresse respiratoire : dire, voir, entendre', ic: 'lungs', src: 'PR Détresse respiratoire v2, p. 2',
      html: '<div class="tw"><table><thead><tr><th>Ce que la victime dit</th><th>Ce que le secouriste voit</th><th>Ce que le secouriste entend</th></tr></thead><tbody><tr>' +
        '<td>« Je suis gênée / j’ai du mal à respirer », « J’étouffe », « J’ai mal quand je respire »</td>' +
        '<td>Refuse de s’allonger, reste assise ; efforts respiratoires, muscles du haut du thorax et du cou contractés ; <b>sueurs</b> sans effort ni fièvre (défaut d’épuration du CO₂) ; <b>cyanose</b> (doigts, lobes d’oreilles, lèvres) ; confusion, somnolence, agitation (cerveau mal oxygéné, CO₂ accumulé) ; chez l’enfant, battement des ailes du nez et <b>tirage</b>.</td>' +
        '<td>Difficulté ou impossibilité de parler ; <b>sifflement</b> (voies rétrécies, asthme) ; <b>gargouillements</b> (sécrétions, vomissures) ; <b>râles</b> (liquide dans les poumons : noyade, insuffisance cardiaque).</td></tr></tbody></table></div>' },
    { id: 'cat', t: 'Conduite à tenir chez la victime consciente', ic: 'stretcher', src: 'PR Détresses circulatoire, respiratoire, neurologique v2 (« Comment ? »)',
      html: '<div class="tw"><table><thead><tr><th></th><th>Circulatoire</th><th>Respiratoire</th><th>Neurologique</th></tr></thead><tbody>' +
        '<tr><td>D’abord</td><td>Arrêter une <b>hémorragie externe</b></td><td>Lever une <b>obstruction grave</b> des voies aériennes</td><td>—</td></tr>' +
        '<tr><td>Position</td><td><b>Allongée horizontale</b> (circulation cérébrale, gestes facilités, conséquences retardées)</td><td><b>Ne jamais allonger</b> : assise ou demi-assise (libère le diaphragme) ; desserrer les vêtements</td><td><b>Allongée</b>, protection thermique, isolée rapidement du sol</td></tr>' +
        '<tr><td>Oxygène</td><td>O₂ en inhalation</td><td>O₂ en inhalation <b>si nécessaire</b> ; sans saturomètre : O₂ puis adaptation après avis du médecin</td><td>O₂ <b>si nécessaire</b> ; sans saturomètre : O₂ puis adaptation après avis du médecin</td></tr>' +
        '<tr><td>Froid</td><td>Couvrir, ne pas laisser sur le sol</td><td>—</td><td>Protection thermique</td></tr>' +
        '<tr><td>Ensuite</td><td colspan="3">Compléter le bilan primaire ; bilan secondaire et gestes nécessaires ; <b>avis médical</b> en transmettant le bilan ; surveiller.</td></tr>' +
        '<tr><td>Surveiller surtout</td><td>Pouls, FC, conscience — <b>aggravation brutale avec arrêt cardiaque possible à toute mobilisation</b> (relevage, brancardage)</td><td>La respiration</td><td>L’état neurologique</td></tr></tbody></table></div>' +
        '<p>Victime qui a perdu connaissance : <b>ne respire pas</b> (ou anormalement) → procédure arrêt cardiaque ; <b>respire</b> → conduite devant une perte de connaissance.</p>' },
    { id: 'o2', t: 'Oxygène : ce que disent fiches, mémo et mémento', ic: 'bottle', src: 'PR Détresses v2 ; Mémo B (A6) ; Mémento SSUAP',
      html: '<div class="tw"><table><thead><tr><th>Détresse</th><th>Fiche procédure v2</th><th>Mémo B / Mémento SSUAP</th></tr></thead><tbody>' +
        '<tr><td>Circulatoire</td><td>« Administrer de l’oxygène en inhalation »</td><td>Mémo B : O₂ <b>quelle que soit la SpO₂</b> ; Mémento : critique en C → O₂ <b>systématique 15 L/min</b></td></tr>' +
        '<tr><td>Respiratoire</td><td>O₂ « <b>si nécessaire</b> »</td><td>Mémo B : O₂ <b>quelle que soit la SpO₂</b> ; Mémento : critique en B → O₂ systématique 15 L/min</td></tr>' +
        '<tr><td>Neurologique</td><td>O₂ « si nécessaire » ; sans saturomètre, O₂ puis adapter après avis</td><td>Mémo B : O₂ <b>suivant la SpO₂</b> ; sans saturation, mettre sous O₂. Mémento : critique en D → O₂ en fonction de la saturation</td></tr></tbody></table></div>' +
        '<div class="callout warn"><b>Divergence de formulation :</b> pour la détresse respiratoire, la fiche procédure v2 écrit « si nécessaire » alors que le Mémo B et le Mémento SSUAP prévoient l’O₂ quelle que soit la SpO₂ (systématique en cas de criticité B). Les sources ne sont pas tranchées ici : en cas de doute, demander l’avis du médecin régulateur.</div>' },
    { id: 'change', t: 'Ce que les fiches v2 apportent', ic: 'bulb', src: 'Comparaison avec le chapitre FOAD « Le bilan primaire XABCDE » de l’app',
      html: '<p>Dans la formation Équipier présente dans l’app, les détresses sont abordées <b>dans le bilan primaire</b> (XABCDE). Les fiches v2 du chef d’agrès en font trois procédures autonomes, construites sur le plan <b>Quand ? Pourquoi ? Avec quoi ? Comment ? Risques ? Efficacités ?</b>, avec :</p>' +
        '<ul class="check"><li>les <b>causes</b> classées (cœur / quantité de sang / contenant pour la circulation) ;</li><li>les <b>seuils</b> : PAS &lt; 90 mmHg ou baisse &gt; 30 % chez l’hypertendu, FC &gt; 120 ou &lt; 40, TRC &gt; 3 s, FR &gt; 30, SpO₂ &lt; 94 % (89 % IRC) ;</li><li>le rappel du <b>risque d’arrêt cardiaque à la mobilisation</b> d’une victime en détresse circulatoire ;</li><li>la conduite en <b>l’absence de saturomètre</b> (O₂ puis adaptation après avis médical).</li></ul>' }
  ],
  key: ['Les trois fonctions vitales sont liées : l’atteinte de l’une retentit sur les autres.', 'Circulatoire : radial absent / carotidien présent ; PAS < 90 mmHg (ou −30 % chez l’hypertendu).', 'Aussi : FC > 120 ou < 40, TRC > 3 s, marbrures, sueurs froides, soif.', 'Respiratoire : FR souvent > 30, SpO₂ < 94 % (< 89 % IRC) ; ne jamais allonger.', 'Circulatoire et neurologique : allonger ; isoler du sol.', 'Mobiliser une victime en détresse circulatoire peut déclencher l’arrêt cardiaque.', 'Inconscient qui respire = voies aériennes menacées.'],
  traps: ['Allonger une victime en détresse respiratoire qui veut rester assise.', 'Oublier l’hémorragie externe avant de traiter la détresse circulatoire.', 'Brancarder sans précaution une victime en détresse circulatoire.', 'Croire que l’absence de saturomètre dispense de l’oxygène.'],
  quiz: [
    { q: 'Signe essentiel de détresse circulatoire selon la fiche v2 :', c: ['Pouls radial imperceptible alors que le carotidien est présent', 'FR à 18/min', 'SpO₂ à 96 %', 'Pupilles symétriques'], e: 'Avec la PAS < 90 mmHg (ou baisse > 30 % chez l’hypertendu).', s: 'seuils' },
    { q: 'Chez un hypertendu, la fiche retient comme signe de détresse circulatoire :', c: ['Une baisse de plus de 30 % de sa PA habituelle', 'Une PAS > 140 mmHg', 'Une baisse de 5 %', 'Une PA normale'], e: 'PAS < 90 mmHg ou diminution de la PA habituelle de l’hypertendu de plus de 30 %.', s: 'seuils' },
    { q: 'Fréquences cardiaques évocatrices de détresse circulatoire au repos :', c: ['> 120/min ou < 40/min', '> 100/min ou < 60/min', '> 90/min', '< 80/min'], e: 'FC > 120 battements/min au repos ou < 40/min.', s: 'seuils' },
    { q: 'Seuil de SpO₂ objectivant une hypoxie chez l’insuffisant respiratoire chronique :', c: ['< 89 %', '< 94 %', '< 98 %', '< 80 %'], e: 'SpO₂ < 94 %, ou < 89 % chez l’IRC.', s: 'seuils' },
    { q: 'Détresse respiratoire, victime consciente : position ?', c: ['Jamais allongée : assise ou demi-assise', 'Allongée horizontale', 'PLS', 'Jambes surélevées'], e: 'Ne jamais allonger ; libérer les mouvements du diaphragme.', s: 'cat' },
    { q: 'Pourquoi la fiche alerte-t-elle sur le relevage d’une victime en détresse circulatoire ?', c: ['Risque majeur d’aggravation brutale avec arrêt cardiaque', 'Risque de fracture', 'Risque d’hypoglycémie', 'Aucun risque particulier'], e: 'Le risque d’aggravation brutale est majeur lors de toute mobilisation (relevage, brancardage).', s: 'cat' },
    { q: 'Sifflements entendus chez une victime en détresse respiratoire évoquent :', c: ['Un rétrécissement des voies aériennes (asthme)', 'Du liquide dans les poumons', 'Un encombrement par vomissures', 'Une hémorragie interne'], e: 'Sifflement = gêne au passage de l’air dans des voies rétrécies ; râles = liquide ; gargouillements = sécrétions.', s: 'respi' },
    { q: 'Sur l’oxygène en détresse respiratoire, que signale le chapitre ?', c: ['La fiche dit « si nécessaire », le Mémo B « quelle que soit la SpO₂ »', 'Toutes les sources interdisent l’O₂', 'Toutes les sources disent 6 L/min', 'Aucune source n’en parle'], e: 'Divergence de formulation à connaître ; le mémento rend l’O₂ systématique en cas de criticité B.', s: 'o2' }
  ]
});

/* =====================================================================================
   CA VSAV 3 — CHAPITRE 4 : hémorragie externe (v2)
   ===================================================================================== */
VSAV.chap({
  id: 'cav-hemorragie', part: 'cav', seq: CAV_2_S3,
  title: 'Hémorragie externe (v2) : décider garrot ou pansement hémostatique', short: 'Hémorragie externe v2', motif: 'drop', accent: '#b91c1c',
  sources: ['PR hemorragie v2, Chef d’Agrès VSAV (SDIS 51, MAJ 21/03/2024)'],
  summary: 'La fiche v2 met en texte le logigramme : compression, pansement compressif, puis garrot ou packing selon la zone.',
  why: '<b>Pourquoi le chef d’agrès doit-il maîtriser l’arbre ?</b> Parce que c’est lui qui décide, souvent en quelques secondes, de passer au garrot d’emblée (plusieurs victimes, accès impossible, isolement) ou de revenir à la compression, et qui doit <b>transmettre l’heure de pose</b>. Une hémorragie externe menace immédiatement la vie : le cœur compense d’abord en accélérant, puis la pression s’effondre et la pompe peut « se désamorcer ».',
  sections: [
    { id: 'reco', t: 'Reconnaître', ic: 'eye', src: 'PR hemorragie v2, p. 1',
      html: '<p>Épanchement de sang <b>abondant et visible</b>, qui s’écoule à travers une plaie et <b>ne s’arrête pas spontanément</b>. Le plus souvent traumatique (coup, chute, couteau, balle…), plus rarement médical (<b>rupture de varices</b>).</p>' +
        '<ul class="check"><li>Le plus souvent évidente dès le début du bilan primaire.</li><li>Parfois découverte au bilan secondaire : elle peut être <b>masquée</b> par la position de la victime ou un vêtement (manteau, blouson).</li><li>À distinguer d’un saignement minime (écorchure, éraflure, abrasion) qui s’arrête seul.</li></ul>' },
    { id: 'cat', t: 'Conduite à tenir', ic: 'hand', src: 'PR hemorragie v2, p. 2',
      steps: ['Se protéger les mains (gants à usage unique) ; écarter les vêtements si nécessaire.', 'Compression manuelle directe en l’absence de corps étranger, quelle que soit la localisation.', 'Compression efficace : pansement compressif.', 'Pansement compressif inefficace : reprendre la compression directe, puis garrot (zone garrotable) ou pansement hémostatique maintenu par un pansement compressif (zone non garrotable).', 'Compléter le bilan primaire ; détresse circulatoire → procédure adaptée.', 'Transmettre le bilan primaire pour avis médical ; bilan secondaire et gestes nécessaires.', 'Protéger du froid, isoler du sol (l’hypothermie aggrave l’état), rassurer.', 'Surveiller : arrêt de l’hémorragie sans relâcher la compression, signes d’aggravation circulatoire.'], stepsTitle: 'Arrêter l’hémorragie' },
    { id: 'garrot', t: 'Garrot d’emblée et zones', ic: 'strap', src: 'PR hemorragie v2, p. 2',
      html: '<div class="callout warn"><b>Garrot d’emblée</b> si la compression directe d’un membre est <b>inefficace ou impossible</b> — victime avec de nombreuses lésions, plusieurs victimes, accès à la plaie impossible — ou dans certaines situations : catastrophes, théâtres d’opérations militaires ou apparentés, isolement. <b>Noter l’heure de pose</b> pour la communiquer à l’équipe qui assure le relais.</div>' +
        '<div class="tw"><table><thead><tr><th>Zone</th><th>Où ?</th><th>Si le pansement compressif échoue</th></tr></thead><tbody>' +
        '<tr><td><b>Garrotable</b></td><td>Membres supérieurs et inférieurs</td><td>Garrot</td></tr>' +
        '<tr><td><b>Non garrotable</b></td><td>Jonction membres-tronc (pli de l’aine, creux axillaire), fesses, tronc, cou, tête</td><td>Pansement imbibé de substance hémostatique, maintenu par un pansement compressif</td></tr></tbody></table></div>' +
        '<p><b>Fracture ouverte ou corps étranger visible :</b> ne toucher ni à l’os ni au corps étranger (leur présence peut limiter le saignement) ; si le saignement reste important et massif, poser un garrot.</p>' },
    { id: 'logigramme', t: 'Le logigramme', ic: 'grid', src: 'PR hemorragie v2, p. 4',
      html: '<p>Le logigramme ajoute les étapes de rattrapage : garrot qui ne stoppe pas le saignement → <b>le resserrer</b> → toujours inefficace → <b>second garrot entre le premier et la racine du membre</b> et/ou pansement hémostatique ; en zone non garrotable, <b>packing</b> de la plaie avec un pansement hémostatique. Toutes les branches aboutissent à : <b>O₂ en inhalation quelle que soit la SpO₂</b>, poursuite du bilan primaire, surveillance, lutte contre l’hypothermie.</p>',
      figs: [{ img: 'img/cav-2/hemorragie-logigramme.jpg', cap: 'Logigramme « hémorragie externe »', txt: '<p>Lis-le de gauche à droite : compression possible ? efficace ? pansement compressif efficace ? Sinon, zone garrotable ou non. À droite, la branche « compression impossible » mène directement au garrot.</p>', src: 'PR hemorragie v2, p. 4' }] },
    { id: 'change', t: 'Ce qui change par rapport à la version Équipier', ic: 'list', src: 'Comparaison PR hemorragie v2 (03/2024) / chapitre Socle « Hémorragies externes » de l’app (PR MAJ 05/2024)',
      html: '<div class="tw"><table><thead><tr><th>Point</th><th>Version Équipier (app)</th><th>Version Chef d’agrès v2</th></tr></thead><tbody>' +
        '<tr><td>Forme</td><td>Principes + logigramme + fiches techniques</td><td>Procédure rédigée (Quand ? Pourquoi ? Avec quoi ? Comment ? Risques ? Efficacités ?) + le <b>même logigramme</b></td></tr>' +
        '<tr><td>Causes</td><td>—</td><td>Traumatique le plus souvent ; médicale : rupture de varices</td></tr>' +
        '<tr><td>Hémorragie masquée</td><td>—</td><td>Par la position ou un vêtement : à chercher au bilan secondaire</td></tr>' +
        '<tr><td>Transmission</td><td>—</td><td>Transmettre le <b>bilan primaire</b> pour avis médical, puis bilan secondaire</td></tr>' +
        '<tr><td>Physiopathologie</td><td>—</td><td>Tachycardie de compensation, puis effondrement de la pression et « désamorçage de la pompe »</td></tr></tbody></table></div>' +
        '<div class="callout">La rubrique « Efficacités ? » de la fiche v2 commence par « aider la victime à prendre un traitement médicamenteux si nécessaire » : cette ligne, reprise telle quelle, semble issue d’une autre fiche (douleur thoracique). Les trois autres objectifs sont : arrêter immédiatement l’hémorragie, rechercher une détresse circulatoire, limiter ses conséquences.</div>' }
  ],
  key: ['Hémorragie externe = abondante, visible, ne s’arrête pas seule.', 'Compression directe d’abord, puis pansement compressif.', 'Garrot d’emblée : compression impossible / inefficace, nombreuses victimes, catastrophe, isolement.', 'Zone non garrotable (aine, aisselle, fesses, tronc, cou, tête) : pansement hémostatique + compressif.', 'Garrot inefficace : resserrer, puis 2e garrot entre le 1er et la racine du membre.', 'Noter et transmettre l’heure de pose du garrot.', 'O₂ quelle que soit la SpO₂, lutte contre l’hypothermie.'],
  traps: ['Rater une hémorragie cachée sous un blouson ou par la position.', 'Retirer le corps étranger ou l’os d’une fracture ouverte.', 'Oublier l’heure de pose du garrot.', 'Garrotter un pli de l’aine : c’est une zone non garrotable.'],
  quiz: [
    { q: 'Quelle cause médicale d’hémorragie externe cite la fiche v2 ?', c: ['La rupture de varices', 'L’hypoglycémie', 'L’asthme', 'L’AVC'], e: 'Le plus souvent traumatique, plus rarement médicale (rupture de varices).', s: 'reco' },
    { q: 'Dans quelle situation poser un garrot sans passer par la compression ?', c: ['Plusieurs victimes ou accès à la plaie impossible', 'Plaie du cou', 'Saignement minime', 'Victime consciente'], e: 'Compression inefficace ou impossible (nombreuses lésions, plusieurs victimes, accès impossible) ou catastrophe, théâtre militaire, isolement.', s: 'garrot' },
    { q: 'Le pli de l’aine est une zone :', c: ['Non garrotable : pansement hémostatique + pansement compressif', 'Garrotable', 'Où l’on ne fait rien', 'Où l’on pose deux garrots'], e: 'Jonction membres-tronc, fesses, tronc, cou, tête = zone non garrotable.', s: 'garrot' },
    { q: 'Le garrot ne stoppe pas le saignement malgré son resserrage :', c: ['Second garrot entre le premier et la racine du membre', 'Retirer le garrot', 'Second garrot sous la plaie', 'Lever le membre et attendre'], e: 'Logigramme p. 4 ; et/ou pansement imbibé de substance hémostatique.', s: 'logigramme' },
    { q: 'Que retrouve-t-on en bas de toutes les branches du logigramme ?', c: ['O₂ en inhalation quelle que soit la SpO₂, bilan primaire, lutte contre l’hypothermie', 'Transport immédiat sans bilan', 'Retrait du garrot après 10 minutes', 'Position demi-assise'], e: 'Administrer l’O₂ (quelle que soit la SpO₂), poursuivre le bilan primaire, surveiller, lutter contre l’hypothermie.', s: 'logigramme' },
    { q: 'Corps étranger visible dans une plaie qui saigne :', c: ['Ne pas y toucher ; garrot si saignement massif', 'Le retirer rapidement', 'Le pousser pour comprimer', 'Comprimer directement dessus'], e: 'Sa présence peut limiter le saignement ; sa mobilisation pourrait aggraver la lésion.', s: 'garrot' }
  ]
});

/* =====================================================================================
   CA VSAV 3 — CHAPITRE 5 : AVC et malaise hypoglycémique (v2)
   ===================================================================================== */
VSAV.chap({
  id: 'cav-avc-hypo', part: 'cav', seq: CAV_2_S3,
  title: 'AVC et malaise hypoglycémique : ce que le chef d’agrès doit recueillir', short: 'AVC & hypoglycémie v2', motif: 'brain', accent: '#6d28d9',
  sources: ['PR - AVC, Chef d’Agrès VSAV (SDIS 51, MAJ 22/03/2024)', 'PR Malaise hypoglycémique chez le diabétique v2, Chef d’Agrès VSAV (SDIS 51, MAJ 22/03/2024)', 'Mémo D (A6)'],
  summary: 'Deux malaises qui se ressemblent : l’heure de début et la glycémie font la différence.',
  why: '<b>Pourquoi traiter ces deux fiches ensemble ?</b> Une <b>hypoglycémie peut simuler un AVC</b> : la fiche AVC impose de la rechercher et de la corriger <b>avant d’affirmer</b> des signes d’AVC. Et pour l’AVC, la fiche explique pourquoi le temps compte : l’infarctus cérébral (85 % des cas) peut bénéficier de traitements très efficaces s’ils sont administrés <b>2 à 3 heures</b> après le début des signes. L’heure de début, les antécédents et les contre-indications à l’IRM que recueille le chef d’agrès servent directement au neurologue.',
  sections: [
    { id: 'avc-meca', t: 'AVC et AIT : les mécanismes', ic: 'brain', src: 'PR - AVC, p. 1 et 4',
      html: '<div class="tw"><table><thead><tr><th>Type</th><th>Mécanisme</th><th>À retenir</th></tr></thead><tbody>' +
        '<tr><td><b>Infarctus cérébral</b></td><td>Obstruction d’une artère : spasme, plaque d’athérome (thrombose), caillot venu d’ailleurs (embolie)</td><td>Le plus fréquent (<b>85 %</b>) ; traitements efficaces si précoces (<b>2 à 3 h</b>)</td></tr>' +
        '<tr><td><b>Hémorragie cérébrale</b></td><td>Rupture d’un vaisseau (victime hypertendue) ou d’une malformation (anévrisme) ; tumeurs, troubles de la coagulation</td><td>L’hématome comprime en plus les cellules nerveuses</td></tr>' +
        '<tr><td><b>AIT</b></td><td>L’obstruction se résorbe spontanément</td><td>Mêmes signes, de quelques secondes à quelques minutes, <b>jamais plus d’une heure</b> ; signe d’alarme, mêmes risques</td></tr></tbody></table></div>' +
        '<p>Privées d’oxygène et de sucre, les cellules nerveuses se détériorent puis meurent <b>en quelques minutes</b>. L’AVC est la <b>1<sup>re</sup> cause de handicap</b> chez l’adulte et la <b>3<sup>e</sup> cause de mortalité</b>.</p>' },
    { id: 'avc-signes', t: 'AVC : les signes, bilan par bilan', ic: 'eye', src: 'PR - AVC, p. 2',
      html: '<p><b>Bilan primaire</b> (souvent brutalement) : perte de connaissance ou trouble de la conscience ; déficit moteur d’une moitié du corps.</p>' +
        '<div class="tw"><table><thead><tr><th>Terme</th><th>Sens</th></tr></thead><tbody><tr><td>Hémiplégie</td><td>Paralysie d’une moitié du corps</td></tr><tr><td>Monoplégie</td><td>Paralysie d’un seul membre</td></tr><tr><td>Hémiparésie</td><td>Troubles moteurs d’une moitié du corps</td></tr><tr><td>Monoparésie</td><td>Troubles moteurs d’un seul membre</td></tr><tr><td>Aphasie / dysarthrie</td><td>Perte de la parole / difficulté à articuler</td></tr></tbody></table></div>' +
        '<p><b>Bilan secondaire</b> : les trois signes <b>FAST</b> sont recherchés systématiquement — bouche déformée (plus visible à la grimace), bras tendus devant soi dont l’un retombe, difficulté à répéter une phrase. Signes associés : baisse de vision, diamètre des pupilles, céphalée brutale inhabituelle, troubles de l’équilibre ou chutes inexpliquées.</p>' +
        '<div class="callout warn">Même si les signes sont <b>passagers</b>, la gravité et la conduite à tenir restent <b>les mêmes</b>.</div>' },
    { id: 'avc-interro', t: 'AVC : ce que le chef d’agrès fait préciser', ic: 'clip', src: 'PR - AVC, p. 2',
      steps: ['L’heure d’apparition des signes et l’heure où la victime a été vue pour la dernière fois sans signes.', 'Des signes neurologiques identiques dans les 24 heures précédentes.', 'Des antécédents de crise convulsive ; la présence de fièvre.', 'L’état de validité habituel : autonome ou grabataire (fauteuil roulant, alité).', 'Les facteurs de risque : HTA et maladie cardiovasculaire, diabète, hypercholestérolémie, obésité, tabagisme, traitement anticoagulant.', 'Les antécédents utiles en secteur spécialisé : chirurgie récente, stimulateur cardiaque ou contre-indication à l’IRM.', 'La glycémie capillaire : rechercher et corriger une hypoglycémie avant d’affirmer des signes d’AVC.'], stepsTitle: 'Interrogatoire victime / famille' },
    { id: 'avc-cat', t: 'AVC : conduite à tenir et NIHSS', ic: 'list', src: 'PR - AVC, p. 3',
      html: '<p>Perte de connaissance avec respiration → conduite devant une perte de connaissance ; détresse neurologique → conduite adaptée. <b>Victime consciente avec signes d’AVC ou d’AIT</b> : position <b>strictement horizontale</b> à plat, ou PLS si nausées / vomissements (près des <b>2/3</b> ont des troubles de la déglutition) ; O₂ selon la saturation ; glycémie ; bilan complémentaire ; avis médical ; surveiller ; protéger du froid ; garder la position pendant le transport. Orientation idéale : unité neuro-vasculaire / USI neurologique.</p>' +
        '<p>Le régulateur peut faire rechercher d’autres signes ou vous mettre en relation avec un neurologue. La fiche CA liste le <b>score NIHSS</b>, à réaliser <b>avec la coordination médicale</b> :</p>' +
        '<div class="tw"><table><thead><tr><th>Item NIHSS</th><th>Ce qu’on teste</th></tr></thead><tbody>' +
        '<tr><td>État de conscience</td><td>Score de Glasgow</td></tr><tr><td>Orientation</td><td>Âge et mois en cours</td></tr><tr><td>Commandes</td><td>Ouvrir / fermer les yeux et le poing</td></tr><tr><td>Mouvements horizontaux des yeux</td><td>Suivre un stylo des yeux</td></tr><tr><td>Champ visuel</td><td>—</td></tr><tr><td>Paralysie faciale</td><td>—</td></tr><tr><td>Motricité des 4 membres</td><td>Membres supérieurs <b>10 s</b>, inférieurs <b>5 s</b></td></tr><tr><td>Ataxie</td><td>Épreuve doigt-nez</td></tr><tr><td>Sensibilité</td><td>—</td></tr><tr><td>Langage</td><td>Aphasie, dysarthrie</td></tr></tbody></table></div>' },
    { id: 'hypo-signes', t: 'Hypoglycémie : comprendre et reconnaître', ic: 'drop', src: 'PR Malaise hypoglycémique v2, p. 1-2',
      html: '<p>L’insuline permet au sucre de pénétrer dans les tissus. Chez le diabétique, un <b>apport insuffisant de sucre</b> ou un <b>excès de traitement</b> provoque un manque grave de sucre. Facteurs favorisants : alimentation inadaptée, exercice inhabituel, excès de traitement, <b>déshydratation</b>, <b>fièvre</b>. NB : un malaise hypoglycémique existe aussi chez le non-diabétique (effort, jeûne).</p>' +
        '<div class="tw"><table><thead><tr><th>Bilan primaire</th><th>Bilan secondaire (plaintes)</th></tr></thead><tbody><tr>' +
        '<td>Perte de connaissance, trouble de la conscience ; convulsions généralisées ; trouble du comportement (prostration, agitation, agressivité, fatigue, ralentissement, <b>ébriété sans alcool</b>) ; sueurs abondantes sans effort ; pâleur. Parfois des signes évoquant un <b>AVC</b>.</td>' +
        '<td>Faim ; grande fatigue, mal de tête ; cœur qui bat vite ; troubles de la vue ; tremblements.</td></tr></tbody></table></div>' +
        '<p>L’hypoglycémie peut déclencher brutalement convulsions ou perte de connaissance ; l’hyperglycémie, elle, s’installe progressivement et fait rarement appel aux secours.</p>',
      figs: [{ img: 'img/cav-2/memo-d-pupilles.jpg', cap: 'Mémo D : pupilles, FAST et glycémie', txt: '<p>Le même mémo regroupe les pupilles (myosis, intermédiaire, mydriase), l’acronyme FAST et les seuils de glycémie : norme <b>80 à 120 mg/dl</b> ; hypoglycémie <b>&lt; 60 mg/dl</b> chez l’adulte, <b>&lt; 50 mg/dl</b> de 2 à 15 ans.</p>', src: 'Mémo D (A6), p. 2' }] },
    { id: 'hypo-cat', t: 'Hypoglycémie : conduite à tenir', ic: 'bottle', src: 'PR Malaise hypoglycémique v2, p. 2-3',
      html: '<p>Devant un malaise chez un diabétique : <b>mesure de la glycémie capillaire</b>, en précisant l’<b>unité</b> (mg/dl) lors de la transmission. Hypoglycémie si <b>&lt; 60 mg/dl</b> ; norme <b>80 à 120 mg/dl</b>. Perte de connaissance : gestes d’urgence, glycémie <b>lors du bilan primaire si la victime respire</b>.</p>',
      steps: ['Victime consciente sans détresse vitale : bilan secondaire et glycémie si le matériel est disponible.', 'Resucrer si glycémie < 60 mg/dl ou origine du malaise inconnue, ET victime réveillée, réactive, capable d’avaler.', 'Adulte : de préférence 4 morceaux ou 4 cuillères à café de sucre dilués dans un verre d’eau, du miel, sinon une boisson sucrée (jus de fruit). Enfant : 2 à 3 morceaux ou cuillères. Bonbons au sucrose efficaces.', 'Faute de sucre disponible : après accord du CRRA 15, solution de resucrage en sachet unidose GlucoPulse Resucrage+.', 'Avis médical avec le bilan et la glycémie si l’état ne s’améliore pas rapidement ou en cas de doute.', 'Surveiller : 10 à 15 minutes entre l’ingestion et l’amélioration ; seconde dose possible après 15 minutes sans amélioration.', 'Prendre le carnet de surveillance de glycémie de la victime.'], stepsTitle: 'Resucrer',
      after: '<div class="callout warn">La fiche indique un sachet GlucoPulse Resucrage+ « <b>de 15 mg</b> » et renvoie à une note d’information « GlucoPulse » qui ne figure pas dans le corpus : vérifie l’unité exacte dans cette note avant de la mémoriser.</div>' },
    { id: 'change', t: 'Ce qui change par rapport à la version Équipier', ic: 'list', src: 'Comparaison fiches CA (03/2024) / chapitres « AVC » et « Hypoglycémie » de l’app (PR Équipier MAJ 05/2024)',
      html: '<div class="tw"><table><thead><tr><th>Point</th><th>Version Équipier (app)</th><th>Version Chef d’agrès</th></tr></thead><tbody>' +
        '<tr><td>AVC : contenu</td><td>FAST et conduite à tenir</td><td>+ mécanismes (85 %, 2-3 h), AIT, vocabulaire du déficit, interrogatoire détaillé, <b>NIHSS</b></td></tr>' +
        '<tr><td>AVC et glycémie</td><td>Glycémie à mesurer</td><td>Corriger l’hypoglycémie <b>avant d’affirmer</b> l’AVC</td></tr>' +
        '<tr><td>Hypo : glycémie chez la victime inconsciente qui respire</td><td>« lors du <b>4<sup>e</sup> regard</b> »</td><td>« lors du <b>bilan primaire</b> »</td></tr>' +
        '<tr><td>Hypo : seuil enfant</td><td>&lt; 50 mg/dl de 2 à 15 ans (dans la fiche)</td><td>La fiche ne cite que <b>&lt; 60 mg/dl</b> ; le seuil enfant reste dans le Mémo D et le Mémento</td></tr>' +
        '<tr><td>Hypo : sucre</td><td>Jus d’orange ou miel</td><td>Sucre <b>dilué dans un verre d’eau</b>, miel, jus de fruit ; <b>GlucoPulse</b> après accord du CRRA 15</td></tr>' +
        '<tr><td>Hypo : nouveautés</td><td>—</td><td>Unité mg/dl à transmettre, norme 80–120, carnet de surveillance, signes et facteurs favorisants</td></tr></tbody></table></div>' }
  ],
  key: ['Infarctus cérébral = 85 % des AVC, traitable si précoce (2 à 3 h).', 'AIT : mêmes signes, jamais plus d’une heure, même gravité.', 'Heure de début + heure « vue pour la dernière fois sans signes ».', 'Contre-indication à l’IRM, stimulateur, anticoagulant : à transmettre.', 'Hypoglycémie peut simuler un AVC : glycémie avant d’affirmer l’AVC.', 'Hypo < 60 mg/dl (norme 80–120) ; préciser l’unité mg/dl.', 'Sucre seulement si réveillée, réactive, capable d’avaler ; 2e dose à 15 min.'],
  traps: ['Négliger un AIT parce que « tout est rentré dans l’ordre ».', 'Ne noter que l’heure d’appel au lieu de l’heure de début des signes.', 'Transmettre une glycémie sans son unité.', 'Faire avaler du sucre à une victime somnolente.'],
  quiz: [
    { q: 'Quelle proportion des AVC est due à une obstruction artérielle (infarctus cérébral) ?', c: ['85 %', '15 %', '50 %', '100 %'], e: 'PR AVC : cause la plus fréquente (85 %), traitable si précoce.', s: 'avc-meca' },
    { q: 'Durée maximale des signes d’un AIT selon la fiche :', c: ['Jamais plus d’une heure', '24 heures', '10 secondes', '3 heures'], e: 'De quelques secondes à quelques minutes, jamais plus d’une heure.', s: 'avc-meca' },
    { q: 'Quelle heure le CA doit-il faire préciser en plus de l’heure d’apparition des signes ?', c: ['L’heure où la victime a été vue pour la dernière fois sans signes', 'L’heure du dernier repas', 'L’heure de l’appel au 18', 'L’heure du coucher'], e: 'Indispensable pour décider d’un traitement précoce.', s: 'avc-interro' },
    { q: 'Pourquoi la fiche fait-elle rechercher une contre-indication à l’IRM ?', c: ['Pour l’hospitalisation en secteur spécialisé (imagerie)', 'Pour choisir le brancard', 'Pour le score de Glasgow', 'Pour l’oxygénothérapie'], e: 'Antécédents nécessaires à la prise en charge en secteur spécialisé.', s: 'avc-interro' },
    { q: 'Le score NIHSS se réalise :', c: ['Avec la coordination médicale', 'Seul, avant tout bilan', 'À l’hôpital uniquement', 'Par la famille'], e: 'PR AVC : « réaliser avec la coordination médicale ».', s: 'avc-cat' },
    { q: 'Victime diabétique inconsciente qui respire : quand mesurer la glycémie selon la fiche v2 ?', c: ['Lors du bilan primaire', 'Uniquement à l’hôpital', 'Jamais', 'Après le transport'], e: 'Fiche v2 : « lors du bilan primaire si la victime respire » (la version Équipier disait « au 4e regard »).', s: 'hypo-cat' },
    { q: 'Délai avant d’envisager une seconde dose de sucre :', c: ['15 minutes sans amélioration', '2 minutes', '1 heure', 'Immédiatement'], e: 'Compter 10 à 15 min entre ingestion et amélioration.', s: 'hypo-cat' },
    { q: 'Pourquoi chercher une hypoglycémie devant des signes d’AVC ?', c: ['Une hypoglycémie peut simuler un AVC', 'Le sucre aggrave l’AVC', 'Pour calculer le NIHSS', 'Ce n’est pas utile'], e: 'Il faut la rechercher et la corriger avant d’affirmer des signes d’AVC.', s: 'avc-interro' }
  ]
});

/* =====================================================================================
   CA VSAV 3 — CHAPITRE 6 : douleur thoracique non traumatique (v2)
   ===================================================================================== */
VSAV.chap({
  id: 'cav-douleur-thoracique', part: 'cav', seq: CAV_2_S3,
  title: 'Douleur thoracique non traumatique (v2) : analyser la douleur', short: 'Douleur thoracique v2', motif: 'heart', accent: '#e11d48',
  sources: ['PR Douleur thoracique non traumatique v2, Chef d’Agrès VSAV (SDIS 51, MAJ 21/03/2024)', 'Mémento SSUAP (OPQRTS)'],
  summary: 'Du cœur à la paroi, plusieurs causes : l’interrogatoire structuré oriente vers la bonne filière de soins.',
  why: '<b>Pourquoi tant de questions sur une douleur ?</b> Parce que certaines causes — occlusion coronaire, fissuration de l’aorte, embolie pulmonaire — imposent une prise en charge <b>spécifique et urgente</b> et une orientation vers une <b>filière adaptée</b>. Le médecin régulateur décide sur la qualité de la description : type, siège, irradiation, intensité, évolution, circonstances. Et comme l’infarctus peut se compliquer de fibrillation ventriculaire, la fiche demande de <b>s’assurer qu’un défibrillateur est à proximité</b>.',
  sections: [
    { id: 'causes', t: 'Les causes possibles', ic: 'list', src: 'PR Douleur thoracique v2, p. 1',
      html: '<div class="tw"><table><thead><tr><th>Organe</th><th>Causes</th><th>Risque vital cité</th></tr></thead><tbody>' +
        '<tr><td>Cœur et gros vaisseaux</td><td>Occlusion d’une artère coronaire ; inflammation du péricarde ; fissuration de l’aorte</td><td>Infarctus → fibrillation ventriculaire → arrêt cardiaque ; aorte → hémorragie interne</td></tr>' +
        '<tr><td>Poumon</td><td>Infection ; décollement (pneumothorax, hémothorax) ; inflammation de la plèvre ; occlusion d’une artère pulmonaire (embolie)</td><td>Embolie massive → arrêt cardiaque ; évolution vers une détresse respiratoire</td></tr>' +
        '<tr><td>Tube digestif</td><td>Reflux de liquide gastrique dans l’œsophage</td><td>—</td></tr>' +
        '<tr><td>Paroi thoracique</td><td>Névralgie</td><td>—</td></tr>' +
        '<tr><td>Autre</td><td>Crise d’angoisse</td><td>—</td></tr></tbody></table></div>' +
        '<p>Circonstances qui peuvent orienter : descente d’avion, alitement prolongé, immobilisation plâtrée, après un accouchement.</p>' },
    { id: 'signes', t: 'Décrire la douleur et chercher la gravité', ic: 'eye', src: 'PR Douleur thoracique v2, p. 2',
      html: '<p>La douleur est au premier plan ; elle peut débuter au repos, pendant ou après un effort. Elle peut être ressentie <b>en étau</b>, <b>en coup de poignard</b>, comme une <b>déchirure</b>, un <b>poids</b> sur le thorax, une <b>brûlure</b>, ou <b>augmenter avec la respiration</b>. Préciser son siège (centre, côté, dos), son <b>irradiation</b> (cou, mâchoire, épaules, bras, creux de l’estomac), sa sévérité (échelle de douleur), son installation (brutale / progressive), son caractère continu ou intermittent, sa durée.</p>' +
        '<div class="callout bad"><b>Signes de gravité</b> : malaise avec pâleur et sueurs abondantes sans effort ; pouls mal frappé, irrégulier ou <b>asymétrique</b> ; nausées, vomissements ; signes de détresse vitale.</div>' +
        '<p>Antécédents et terrain : épisode similaire, hospitalisation ; antécédents cardio-vasculaires (angine de poitrine, infarctus) ou pulmonaires (embolie, phlébites) ; facteurs de risque : tabagisme, <b>tabagisme avec contraceptifs oraux</b>, obésité, diabète, hypertension, hypercholestérolémie ; antécédents familiaux similaires.</p>' },
    { id: 'questions', t: 'Les questions du bilan secondaire', ic: 'clip', src: 'PR Douleur thoracique v2, p. 3 ; Mémento SSUAP',
      steps: ['Première fois ? Épisodes identiques ?', 'Depuis combien de temps ?', 'Localisation précise de la douleur ?', 'Type de douleur (pique, brûle, pince…) ?', 'Irradiation ?', 'Intensité ?', 'Continue ou discontinue ?', 'Conditions de survenue (effort ou repos) ?', 'Aggravée par (inspiration, mouvements…) ?', 'Calmée par (repos complet, position…) ?', 'Antécédents et traitements personnels ?', 'Antécédents et traitements familiaux ?'], stepsTitle: 'Douze questions',
      after: '<p class="small">Rapprochement pédagogique : ces questions recouvrent l’<b>OPQRTS</b> du Mémento SSUAP (Origine, Provoqué par, Qualité, Région, Sévérité, Temps).</p>' },
    { id: 'cat', t: 'Conduite à tenir', ic: 'heart', src: 'PR Douleur thoracique v2, p. 3-4',
      html: '<div class="tw"><table><thead><tr><th>Au bilan primaire</th><th>Conduite</th></tr></thead><tbody>' +
        '<tr><td>Signes de détresse respiratoire</td><td>Conduite détresse respiratoire (assise ou demi-assise, O₂ si nécessaire) ; avis médical</td></tr>' +
        '<tr><td>Signes de détresse circulatoire</td><td>Conduite détresse circulatoire (allongée horizontale, O₂ si nécessaire, lutter contre le froid) ; avis médical</td></tr>' +
        '<tr><td>Pas de détresse évidente</td><td>Conduite devant un malaise : <b>repos immédiat</b> ; position où elle se sent le mieux ; O₂ si nécessaire ; <b>avis médical après le bilan complémentaire</b> ; traitement prescrit administré à la demande de la victime ou du régulateur ; respecter les consignes</td></tr></tbody></table></div>' +
        '<div class="callout warn">Dans tous les cas, si la victime perd connaissance brutalement : gestes d’urgence en priorité. <b>Efficacités</b> : préserver les fonctions vitales, position la mieux tolérée, <b>défibrillateur à proximité</b>, avis médical, aide à la prise du traitement.</div>' },
    { id: 'change', t: 'Ce qui change par rapport à la version Équipier', ic: 'list', src: 'Comparaison PR v2 (03/2024) / chapitre « Douleur thoracique » de l’app (PR Équipier MAJ 05/2024)',
      html: '<div class="tw"><table><thead><tr><th>Point</th><th>Version Équipier (app)</th><th>Version Chef d’agrès v2</th></tr></thead><tbody>' +
        '<tr><td>Moment de l’avis médical (sans détresse)</td><td>Après le <b>bilan secondaire</b></td><td>Après le <b>bilan complémentaire</b></td></tr>' +
        '<tr><td>Coquille du titre</td><td>Deux fois « détresse respiratoire » (2<sup>e</sup> = circulatoire)</td><td>Corrigée : « détresse circulatoire »</td></tr>' +
        '<tr><td>Défibrillateur</td><td>—</td><td>S’assurer qu’un défibrillateur est à proximité</td></tr>' +
        '<tr><td>Contenu nouveau</td><td>—</td><td>Causes par organe, description de la douleur, signes de gravité, terrain, 12 questions, risques</td></tr></tbody></table></div>' }
  ],
  key: ['Causes cardiaques, pulmonaires, digestives, pariétales, angoisse.', 'Gravité : pâleur + sueurs sans effort, pouls irrégulier ou asymétrique, vomissements, détresse.', 'Décrire : type, siège, irradiation, intensité, évolution, circonstances.', 'Sans détresse : repos immédiat, position de confort, avis après le bilan complémentaire.', 'Défibrillateur à proximité.', 'Traitement prescrit seulement à la demande de la victime ou du régulateur.'],
  traps: ['Faire marcher la victime jusqu’au VSAV.', 'Se contenter de « mal à la poitrine » sans décrire la douleur.', 'Laisser le DAE dans la cellule.'],
  quiz: [
    { q: 'Signe de gravité associé à une douleur thoracique :', c: ['Pouls asymétrique', 'Douleur reproduite à la palpation sans autre signe', 'Victime calme et colorée', 'Douleur ancienne connue'], e: 'Pouls mal frappé, irrégulier et/ou asymétrique ; malaise avec pâleur et sueurs ; nausées ; détresse.', s: 'signes' },
    { q: 'Quel facteur de risque particulier la fiche cite-t-elle chez la femme ?', c: ['Tabagisme avec contraceptifs oraux', 'Grossesse en cours', 'Port de talons', 'Ménopause'], e: 'Facteurs de risque : tabagisme, tabagisme avec contraceptifs oraux, obésité, diabète, HTA, hypercholestérolémie.', s: 'signes' },
    { q: 'Que demande la rubrique « Efficacités » en plus de l’avis médical ?', c: ['S’assurer qu’un défibrillateur est à proximité', 'Donner de l’aspirine', 'Faire un ECG', 'Allonger systématiquement'], e: 'L’infarctus peut se compliquer de fibrillation ventriculaire.', s: 'cat' },
    { q: 'Sans détresse évidente, la fiche v2 demande l’avis médical :', c: ['Après le bilan complémentaire', 'Avant tout bilan', 'Uniquement si la douleur dure 1 heure', 'Jamais'], e: 'Version Équipier : après le bilan secondaire ; version CA : après le bilan complémentaire.', s: 'change' },
    { q: 'Quelle cause de douleur thoracique peut entraîner une hémorragie interne ?', c: ['La fissuration de l’aorte', 'Le reflux gastrique', 'La névralgie', 'La crise d’angoisse'], e: 'Risques ? : la fissuration de l’aorte peut entraîner une hémorragie interne.', s: 'causes' },
    { q: 'Douleur thoracique avec détresse respiratoire : position ?', c: ['Assise ou demi-assise', 'Allongée horizontale', 'PLS', 'Debout'], e: 'Conduite détresse respiratoire.', s: 'cat' }
  ]
});

/* =====================================================================================
   CA VSAV 3 — CHAPITRE 7 : noyade et pendaison (v2)
   ===================================================================================== */
VSAV.chap({
  id: 'cav-noyade-pendaison', part: 'cav', seq: CAV_2_S3,
  title: 'Atteintes circonstancielles : noyade et pendaison (v2)', short: 'Noyade & pendaison v2', motif: 'wave', accent: '#0369a1',
  sources: ['PR La noyade v2, Chef d’Agrès VSAV (SDIS 51, MAJ 21/03/2024)', 'PR La pendaison v2, Chef d’Agrès VSAV (SDIS 51, MAJ 21/03/2024)', 'PR - PTI préservation des traces et indices (MAJ 22/03/2024)'],
  summary: 'Deux asphyxies : la noyade change l’ordre de la RCP, la pendaison impose de penser au rachis et aux indices.',
  why: '<b>Pourquoi des spécificités ?</b> Dans la noyade, l’arrêt cardiaque est presque toujours <b>dû à l’hypoxie</b> : on commence donc par <b>oxygéner</b> (5 insufflations initiales) et on bannit les manœuvres de désobstruction, qui font régurgiter. Dans la pendaison, la chute du corps peut léser la moelle cervicale et la scène peut être judiciaire : on libère le cou <b>sans défaire le nœud</b> et en stabilisant le rachis.',
  sections: [
    { id: 'noy-def', t: 'Noyade : vocabulaire et états', ic: 'wave', src: 'PR La noyade v2, p. 1',
      html: '<div class="tw"><table><thead><tr><th>Terme</th><th>Définition de la fiche</th></tr></thead><tbody>' +
        '<tr><td>Submersion</td><td>Visage recouvert d’eau ou de liquide : asphyxie et arrêt cardiaque en quelques minutes</td></tr>' +
        '<tr><td>Immersion</td><td>Corps dans l’eau, tête au-dessus (souvent gilet) : voies aériennes libres mais <b>hypothermie rapide</b></td></tr>' +
        '<tr><td>Victime d’une noyade</td><td>Quel que soit son devenir (décès, survie avec ou sans séquelles)</td></tr>' +
        '<tr><td>Noyé</td><td>Décédé à la suite d’une noyade sans qu’aucun geste de réanimation n’ait été réalisé</td></tr></tbody></table></div>' +
        '<p>C’est le <b>bilan circonstanciel</b> qui évoque la noyade. Selon le temps passé dans l’eau, l’âge et les antécédents, la victime peut être : consciente, fatiguée, froide, angoissée, avec une <b>toux persistante</b> (eau dans les poumons) ; consciente en détresse respiratoire (vomissements, frissons) ; inconsciente en détresse respiratoire ; en arrêt cardiaque.</p>' +
        '<p><b>Causes</b> : incapacité à garder les voies aériennes hors de l’eau (ne sait pas nager, crampes, épuisement, véhicule ou bateau coulé) ; affection médicale dans l’eau (trouble de conscience, convulsion, AVC, trouble du rythme) ; traumatisme (rachis après plongeon en eau peu profonde) ; plongée. Facteurs favorisants : hypothermie, hypoglycémie, alcool, toxiques.</p>' },
    { id: 'noy-sauvetage', t: 'Noyade : sortir la victime de l’eau', ic: 'rope', src: 'PR La noyade v2, p. 2',
      steps: ['Alerter ou faire alerter immédiatement les secours spécialisés.', 'Éviter de pénétrer dans l’eau chaque fois que possible ; sinon, dispositif de flottaison, jamais seul, jamais tête la première.', 'Parler à la victime ; lui envoyer un objet (bouée, bâton, corde, vêtement) si elle est proche du bord ; sinon une embarcation.', 'Sortir la victime rapidement : la probabilité d’une lésion de la colonne est très faible.', 'Victime en arrêt cardiaque : sortie aussi rapide que possible en limitant la flexion et l’extension du cou.'], stepsTitle: 'Sauvetage',
      after: '<p>Les <b>sauveteurs spécialisés</b> peuvent immobiliser le rachis cervical et thoracique avant la sortie dans de rares cas : <b>plongeon en eau peu profonde</b> ; accident de sport nautique (toboggan, scooter des mers, kitesurf, ski nautique, véhicule tombé à l’eau…) avec signes d’atteinte du rachis ou rachis non examinable (lésions multiples, alcool…).</p>' +
        '<p><b>Ensuite, dans tous les cas</b> : compléter le bilan primaire ; déshabiller sans mobilisations intempestives ; <b>sécher sans friction</b> ; couvertures et protection du vent ; bilan secondaire ; transmettre le bilan pour avis ; surveiller. Consciente sans suspicion de trauma : position où elle se sent le mieux, à l’abri du vent.</p>' },
    { id: 'noy-specif', t: 'Noyade : les spécificités de la réanimation', ic: 'lungs', src: 'PR La noyade v2, p. 3',
      html: '<div class="tw"><table><thead><tr><th>Geste</th><th>Spécificité</th></tr></thead><tbody>' +
        '<tr><td>Ventilation</td><td>Idéalement <b>5 insufflations initiales</b> avant les compressions ; à défaut, compressions d’abord jusqu’à pouvoir insuffler. Les sauveteurs spécialisés peuvent ventiler pendant le dégagement (équipement flottant).</td></tr>' +
        '<tr><td>Compressions</td><td>Seulement <b>hors de l’eau</b> (terre ou embarcation). Secouriste isolé : <b>5 cycles de RCP</b> avant d’aller alerter. Dans les embarcations : dispositifs automatiques de massage possibles.</td></tr>' +
        '<tr><td>Oxygène</td><td>Rapide, systématique, haute concentration (<b>15 L/min</b>) tant que la victime est en arrêt et tant qu’on n’obtient pas de SpO₂ fiable.</td></tr>' +
        '<tr><td>Défibrillation</td><td><b>Sécher le thorax</b> avant de coller les électrodes.</td></tr>' +
        '<tr><td>Désobstruction</td><td><b>Interdite</b> (tapes dans le dos, compressions abdominales) : régurgitation, inhalation, lésions, retard de RCP. La <b>mousse</b> aux lèvres (eau + air) ne gêne pas la ventilation : ne pas insister pour l’enlever.</td></tr>' +
        '<tr><td>Régurgitation</td><td>Tourner immédiatement sur le côté, retirer les débris aux doigts, aspirer ; si lésion cervicale suspectée, retourner <b>d’un bloc</b>.</td></tr></tbody></table></div>' +
        '<p><b>Risques</b> : l’hypoxie (arrêt volontaire de la respiration et spasme laryngé) est la conséquence majeure ; sa <b>durée</b> conditionne le devenir. Régurgitations fréquentes ; hypothermie rapide (plus encore chez l’enfant) ; arrêt le plus souvent d’origine respiratoire. En France, <b>plus de 500 décès par an</b> ; <b>2<sup>e</sup> cause de décès accidentel</b> de 1 à 14 ans ; <b>plus des deux tiers</b> des victimes sont des hommes ; surtout en mer, cours ou plans d’eau.</p>' },
    { id: 'pendaison', t: 'Pendaison et strangulation', ic: 'rope', src: 'PR La pendaison v2, p. 1-2 ; PR PTI, p. 2',
      html: '<p><b>Pendaison</b> : suspension du corps par le cou. <b>Strangulation</b> : constriction du cou ou pression sur la gorge. Accidentelle (vêtement ou cravate pris dans une machine, jeux d’enfants) ou volontaire (suicide, crime).</p>' +
        '<div class="tw"><table><thead><tr><th>Bilan</th><th>Ce qu’on peut trouver</th></tr></thead><tbody>' +
        '<tr><td>Circonstanciel</td><td>Corps pendu, <b>même si une partie du corps touche le sol</b> ; objet constrictif autour du cou</td></tr>' +
        '<tr><td>Primaire</td><td>Perte de connaissance, arrêt cardiaque, détresse respiratoire</td></tr>' +
        '<tr><td>Victime consciente</td><td><b>Voix rauque</b>, difficulté à respirer</td></tr>' +
        '<tr><td>Secondaire</td><td>Marques de strangulation</td></tr></tbody></table></div>',
      steps: ['Ne pas détruire, jeter ou déplacer les objets plus que nécessaire (PTI : desserrer le nœud ou couper la corde sans défaire le nœud).', 'Soutenir la victime en se faisant aider ; desserrer et enlever rapidement toute constriction du cou.', 'Allonger au sol en limitant les mouvements du rachis cervical ; bilan primaire avec stabilisation du rachis.', 'Détresse vitale : arrêt cardiaque (pas de respiration, doute, gasps), perte de connaissance même avec respiration difficile, détresse respiratoire → conduite adaptée.', 'Sans détresse : compléter le bilan en maintenant la tête, avis médical, immobilisation complète du rachis si nécessaire, surveillance, forces de l’ordre si nécessaire.'], stepsTitle: 'Conduite à tenir',
      after: '<p><b>Risques</b> : la pression sur le cou comprime voies aériennes et vaisseaux (air et sang vers le cerveau interrompus) ; la chute du corps peut provoquer une <b>lésion vertébrale avec atteinte de la moelle</b>.</p>' },
    { id: 'change', t: 'Ce qui change par rapport à la version Équipier', ic: 'list', src: 'Comparaison fiches v2 (03/2024) / chapitre « Pendaison » (partie 1) et chapitre Tutorat « L’arrêt cardiaque » de l’app',
      html: '<div class="tw"><table><thead><tr><th>Point</th><th>Dans l’app (Équipier)</th><th>Version Chef d’agrès v2</th></tr></thead><tbody>' +
        '<tr><td>Noyade</td><td>Pas de chapitre dédié ; mention du noyé (5 insufflations) dans l’ACR</td><td>Procédure complète : définitions, états, sauvetage, spécificités, risques ; « transmettre le bilan pour avis » ajouté dans « Dans tous les cas »</td></tr>' +
        '<tr><td>Pendaison : gestes</td><td>Soutenir, libérer, allonger, stabiliser</td><td><b>Identiques</b></td></tr>' +
        '<tr><td>Pendaison : nouveau</td><td>—</td><td>Définitions, bilan circonstanciel (corps touchant le sol), voix rauque, marques, risques rachidiens</td></tr></tbody></table></div>' }
  ],
  key: ['Submersion = visage sous l’eau ; immersion = tête hors de l’eau mais hypothermie.', 'Sortir vite : lésion du rachis très peu probable (sauf plongeon en eau peu profonde, sports nautiques).', 'Noyade en ACR : 5 insufflations initiales, O₂ 15 L/min.', 'Jamais de tapes dans le dos ni de compressions abdominales chez le noyé.', 'Sécher le thorax avant le DAE ; compressions seulement hors de l’eau.', 'Pendaison : corps pendu même si une partie touche le sol.', 'Libérer le cou sans défaire le nœud ; stabiliser le rachis.'],
  traps: ['Pratiquer des compressions abdominales pour « vider l’eau ».', 'Perdre du temps à enlever la mousse aux lèvres.', 'Écarter la pendaison parce que les pieds touchent le sol.', 'Frotter vigoureusement la victime pour la sécher.'],
  quiz: [
    { q: 'Victime de noyade en arrêt cardiaque : par quoi commencer idéalement ?', c: ['5 insufflations initiales', '30 compressions', 'Des tapes dans le dos', 'La pose du DAE sur thorax mouillé'], e: 'L’arrêt est dû à l’hypoxie : 5 insufflations avant les compressions ; à défaut, compressions d’abord.', s: 'noy-specif' },
    { q: 'Les manœuvres de désobstruction chez le noyé sont :', c: ['Dangereuses et à ne pas réaliser', 'Systématiques', 'Recommandées avant la RCP', 'À faire uniquement chez l’enfant'], e: 'Régurgitation, inhalation, lésions et retard de RCP.', s: 'noy-specif' },
    { q: 'Secouriste isolé devant un noyé en arrêt :', c: ['5 cycles de RCP avant d’aller alerter', 'Alerter avant tout geste', '1 minute de RCP puis alerter', 'Ne rien faire seul'], e: 'Spécificité « compressions thoraciques » de la fiche.', s: 'noy-specif' },
    { q: 'Différence entre immersion et submersion :', c: ['Immersion : tête hors de l’eau ; submersion : visage recouvert', 'Ce sont des synonymes', 'Immersion : arrêt en quelques minutes', 'Submersion : toujours un gilet de sauvetage'], e: 'L’immersion expose surtout à l’hypothermie.', s: 'noy-def' },
    { q: 'Dans quel cas les sauveteurs spécialisés peuvent-ils immobiliser le rachis avant la sortie de l’eau ?', c: ['Plongeon en eau peu profonde', 'Toute noyade', 'Victime qui tousse', 'Jamais'], e: 'Rares cas : plongeon en eau peu profonde, accident de sport nautique avec signes ou rachis non examinable.', s: 'noy-sauvetage' },
    { q: 'Statistique citée par la fiche noyade :', c: ['Plus de 500 décès par an en France', 'Moins de 50 décès par an', '1re cause de décès de l’adulte', 'Victimes majoritairement des femmes'], e: '> 500 décès/an ; 2e cause de décès accidentel de 1 à 14 ans ; hommes > 2/3.', s: 'noy-specif' },
    { q: 'Signe évocateur chez une victime de strangulation consciente :', c: ['Une voix rauque', 'Une hypoglycémie', 'Une mydriase bilatérale', 'Une fièvre'], e: 'Raucité de la voix ou difficulté à respirer.', s: 'pendaison' }
  ]
});

/* =====================================================================================
   CA VSAV 3 — CHAPITRE 8 : victime casquée et extraction en SR
   ===================================================================================== */
VSAV.chap({
  id: 'cav-casque-sr', part: 'cav', seq: CAV_2_S3,
  title: 'Victime casquée sur le ventre et extraction en secours routier', short: 'Casque & extraction SR', motif: 'neck', accent: '#c2410c',
  sources: ['PR victime avec casque de protection v2, Chef d’Agrès VSAV (SDIS 51, MAJ 22/03/2024)', 'PR - Extraction et immobilisation de la victime en SR au VSAV (SDIS 51 / GFOR / Pôle SUAP, MAJ 12-2023)'],
  summary: 'Retourner une victime casquée selon sa conscience ; choisir le matériel d’extraction avant de toucher la victime.',
  why: '<b>Pourquoi une procédure « casque » ?</b> Un casque, quel qu’il soit, surélève la tête : posée sur un plan dur, la nuque part en <b>hyperflexion</b>. On préfère donc retourner la victime consciente <b>à même le sol</b> à trois. Inconsciente, l’urgence est inverse : il faut libérer les voies aériennes et apprécier la ventilation <b>tout de suite</b>, donc retournement d’urgence. En secours routier, c’est le chef d’agrès qui doit <b>anticiper</b> relevage et immobilisation avant l’extraction, car la victime doit être mobilisée le moins possible.',
  sections: [
    { id: 'casque', t: 'Victime casquée sur le ventre : deux logigrammes', ic: 'neck', src: 'PR victime avec casque de protection v2, p. 1-3',
      html: '<p><b>Matériel</b> : matériel de restriction du rachis cervical, brancard cuillère, MID et sa pompe. Dans les deux cas, <b>stabilisation permanente du rachis</b> par maintien de la tête en prise <b>latéro-latérale</b> (imposée par le casque).</p>' +
        '<div class="tw"><table><thead><tr><th></th><th>Victime inconsciente</th><th>Victime consciente</th></tr></thead><tbody>' +
        '<tr><td>Retournement</td><td><b>D’urgence, à 2 secouristes au minimum</b> (un 3<sup>e</sup> peut se placer aux membres inférieurs)</td><td><b>À 3 secouristes, à même le sol</b>, sans plan dur</td></tr>' +
        '<tr><td>Pourquoi</td><td>Libérer rapidement les voies aériennes et apprécier la ventilation</td><td>Éviter l’hyperflexion de la nuque sur le plan dur, en respectant l’axe tête-cou-tronc</td></tr>' +
        '<tr><td>Ensuite</td><td>Retrait du casque → bilan primaire : LVA par <b>élévation du menton</b>, respiration appréciée avec <b>prise de pouls simultanée</b> → respiration efficace : poursuivre ; absente ou agonique : RCP</td><td>Retrait du casque → bilan primaire</td></tr></tbody></table></div>',
      figs: [{ img: 'img/cav-2/casque-inconscient.jpg', cap: 'Logigramme « victime casquée inconsciente sur le ventre »', txt: '<p>Stabilisation permanente → retournement d’urgence à 2 au minimum → retrait du casque → bilan primaire (élévation du menton, respiration + pouls) → poursuite du bilan ou RCP.</p>', src: 'PR victime avec casque de protection v2, p. 2' }] },
    { id: 'sr-choix', t: 'Extraction SR : le choix du chef d’agrès', ic: 'car', src: 'PR - Extraction et immobilisation de la victime en SR au VSAV (MAJ 12-2023)',
      html: '<p>L’arbre complet est détaillé dans le chapitre « Procédure d’extraction et d’immobilisation en secours routier » de l’app. Côté chef d’agrès, retiens les décisions :</p>' +
        '<div class="tw"><table><thead><tr><th>Décision</th><th>Options de la fiche</th></tr></thead><tbody>' +
        '<tr><td>Immobiliser le rachis ?</td><td>Selon l’« arbre décisionnel bilan traumatique du rachis ». NON : relâcher la stabilisation, accompagner prudemment la sortie.</td></tr>' +
        '<tr><td>Victime <b>assise</b> (extraction à 0°, 30°, 60°, 90°)</td><td>Suppléer la stabilisation par du matériel : <b>ACT + plan dur sans cale-tête</b>, ou <b>BOA + demi-plan dur + plan dur concave</b>. Retrait du matériel d’extraction avant le MID.</td></tr>' +
        '<tr><td>Victime <b>allongée</b> (extraction à 0°, dans l’axe)</td><td>Plan dur directement, puis retrait du plan dur avant MID : <b>brancard cuillère</b> ou <b>pont amélioré à 4 porteurs + 1</b>.</td></tr>' +
        '<tr><td>Immobilisation corps entier</td><td><b>MID en priorité</b> ; défaillance du MID : plan dur + cale-tête + sangles araignées.</td></tr>' +
        '<tr><td>Enfant au sol</td><td>Brancard cuillère plutôt que plan dur ; le plan dur est réservé à l’extraction.</td></tr></tbody></table></div>' +
        '<div class="callout warn">L’immobilisation de la colonne ne doit <b>jamais</b> passer avant la prise en charge d’une détresse vitale ; tout matériel d’extraction est <b>obligatoirement retiré</b> avant l’immobilisation du corps entier ; la victime est toujours arrimée au brancard en plus des sangles.</div>' }
  ],
  key: ['Casque : maintien de tête latéro-latéral, stabilisation permanente.', 'Inconsciente sur le ventre : retournement d’urgence à 2 au minimum.', 'Consciente sur le ventre : retournement à 3 à même le sol, sans plan dur.', 'Casque sur plan dur = risque d’hyperflexion de la nuque.', 'SR : anticiper le relevage avant l’extraction.', 'Retirer ACT / BOA / plan dur avant le MID ; MID prioritaire.'],
  traps: ['Poser une victime casquée consciente sur un plan dur pour la retourner.', 'Attendre un troisième secouriste pour retourner une victime casquée inconsciente.', 'Immobiliser dans le MID avec l’attelle d’extraction encore en place.'],
  quiz: [
    { q: 'Victime casquée consciente sur le ventre : technique privilégiée ?', c: ['Retournement à 3 secouristes à même le sol, sans plan dur', 'Retournement sur plan dur', 'Retrait du casque avant de la retourner', 'Retournement à 1 secouriste'], e: 'Le casque peut entraîner une hyperflexion de la nuque sur le plan dur.', s: 'casque' },
    { q: 'Victime casquée inconsciente sur le ventre :', c: ['Retournement d’urgence à 2 secouristes au minimum', 'Attendre le médecin', 'Retournement à 4 sur plan dur', 'Laisser sur le ventre'], e: 'Libérer rapidement les voies aériennes et apprécier la ventilation.', s: 'casque' },
    { q: 'Quelle prise de tête impose la présence du casque ?', c: ['Latéro-latérale', 'Occipito-frontale', 'Mentonnière', 'Aucune'], e: 'Maintien tête prise latéro-latérale, dû à la présence du casque.', s: 'casque' },
    { q: 'Après retrait du casque chez l’inconscient, la LVA se fait par :', c: ['Élévation du menton', 'Bascule prudente de la tête en arrière', 'Ouverture forcée de la bouche', 'PLS immédiate'], e: 'Bilan primaire : LVA par élévation du menton, respiration avec prise de pouls simultanée.', s: 'casque' },
    { q: 'Victime allongée dans un véhicule : extraction ?', c: ['À 0° dans l’axe, au plan dur', 'À 90° avec BOA', 'Avec ACT obligatoire', 'Par le toit sans matériel'], e: 'Puis retrait du plan dur (cuillère ou pont amélioré 4 + 1) avant le MID.', s: 'sr-choix' },
    { q: 'MID défaillant : quel repli pour l’immobilisation corps entier ?', c: ['Plan dur + cale-tête + sangles araignées', 'BOA seule', 'Brancard sans immobilisation', 'Attelle cervicale seule'], e: 'PR SR : en cas de défaillance du MID.', s: 'sr-choix' }
  ]
});

/* =====================================================================================
   CA VSAV 4 — CHAPITRE 9 : catégorisation des victimes (NDS 362)
   ===================================================================================== */
VSAV.chap({
  id: 'cav-categorisation', part: 'cav', seq: CAV_2_S4,
  title: 'Catégoriser les victimes : impliquée, UA, UR (NDS 362)', short: 'Catégorisation (NDS 362)', motif: 'target', accent: '#0f766e',
  sources: ['NDS 362 - Catégorisation des victimes (SDIS 51, Sous-direction santé ; exemplaire du corpus sans date ni numéro porté)', 'NDS 95 modifiée, annexe 1 (exemples de comptes rendus)', 'Mémo C (A6)'],
  summary: 'Un vocabulaire commun SAMU / sapeurs-pompiers, fondé sur la criticité XABCDE.',
  why: '<b>Pourquoi un vocabulaire imposé ?</b> La catégorisation est une information importante lors du passage du bilan au <b>CRRA 15</b> : en un mot (UA, UR, impliquée), le médecin régulateur sait à quoi s’attendre. La NDS 362 l’ancre sur les critères <b>XABCDE</b> du bilan, ce qui la rend objective, et permet de demander un SMUR ou un ISP <b>dès le bilan primaire</b> sans attendre la fin du bilan secouriste.',
  sections: [
    { id: 'etats', t: 'Les états d’une victime', ic: 'list', src: 'NDS 362, § I-II',
      html: '<p><b>Victime</b> : personne présente sur le lieu d’un événement, d’un accident ou d’un attentat, pouvant présenter un dommage physique ou psychique directement causé par celui-ci.</p>' +
        '<div class="tw"><table><thead><tr><th>État</th><th>Définition</th></tr></thead><tbody>' +
        '<tr><td>Impliquée</td><td>Non blessée physiquement, exposée directement à un risque de mort ou de blessure ; peut avoir besoin d’une prise en charge, notamment médico-psychologique</td></tr>' +
        '<tr><td>Malade</td><td>Non décédée, état caractérisé par une <b>affection</b> nécessitant les secours</td></tr>' +
        '<tr><td>Blessée</td><td>Non décédée, état caractérisé par une <b>atteinte corporelle traumatique</b></td></tr>' +
        '<tr><td>En ACR</td><td>—</td></tr>' +
        '<tr><td>Décédée</td><td>Décès constaté par un médecin, ou par les sapeurs-pompiers quand la tête est séparée du tronc, rigidité cadavérique, ou victime déchiquetée</td></tr></tbody></table></div>' },
    { id: 'criticite', t: 'Critique ou altérée : les critères XABCDE', ic: 'target', src: 'NDS 362, § III',
      html: '<div class="tw"><table><thead><tr><th></th><th>Victime <b>critique</b> (bilan primaire)</th><th>Victime <b>altérée</b> (bilan secondaire)</th></tr></thead><tbody>' +
        '<tr><td><b>X</b></td><td>Hémorragie visible non maîtrisée</td><td>—</td></tr>' +
        '<tr><td><b>A</b></td><td>Obstruction des voies aériennes non maîtrisée (corps étranger impossible à extraire, œdème laryngé…)</td><td>—</td></tr>' +
        '<tr><td><b>B</b></td><td>Ventilation <b>&gt; 30 mvts/min</b>, cyanose marquée, asymétrie respiratoire franche</td><td>SpO₂ sous la norme, FR hors normes</td></tr>' +
        '<tr><td><b>C</b></td><td>Absence de pouls périphériques, TRC allongé, suspicion d’hémorragie interne (« boîtes à sang »)</td><td>PA, FC hors normes</td></tr>' +
        '<tr><td><b>D</b></td><td>Inconsciente qui respire, altération neurologique, <b>Glasgow ≤ 12</b>, agitée et/ou prostrée après un traumatisme crânien</td><td>Déficit sensitivo-moteur, dysarthrie (signes d’AVC), glycémie hors normes</td></tr>' +
        '<tr><td><b>E</b></td><td>Brûlures graves, plaies graves, hypothermie…</td><td>Déformation d’un membre…</td></tr></tbody></table></div>' +
        '<p>Victime <b>non critique</b> : tout autre cas. Les « boîtes à sang » du Mémo C sont le thorax, l’abdomen, le bassin et les cuisses.</p>' },
    { id: 'classes', t: 'Impliquée, urgence absolue, urgence relative', ic: 'alert', src: 'NDS 362, § IV',
      html: '<div class="tw"><table><thead><tr><th>Catégorie</th><th>Critère</th></tr></thead><tbody>' +
        '<tr><td>Impliquée</td><td>Ni blessée ni malade ; peut nécessiter une prise en charge psychologique</td></tr>' +
        '<tr><td><b>UA</b> — urgence absolue</td><td>Blessée ou malade présentant <b>une ou plusieurs criticités</b></td></tr>' +
        '<tr><td><b>UR</b> — urgence relative</td><td>Blessée ou malade <b>sans criticité</b></td></tr></tbody></table></div>' +
        '<ul class="check"><li>S’applique à <b>tout bilan</b> du risque courant : SSUAP, SR, INC…</li><li>Annoncée <b>« a priori »</b> : peut évoluer avec l’état de la victime, le bilan d’un ISP ou la reclassification par un médecin.</li><li>Dire « UA » ou « UR » <b>n’exonère pas</b> du bilan complet transmis au CRRA 15.</li><li>Criticité établie dès le bilan primaire : demande de <b>SMUR via le CRRA 15</b> ou d’<b>ISP protocolé via le CTA-CODIS</b> possible <b>avant</b> la poursuite du bilan.</li></ul>' },
    { id: 'novi', t: 'Plan ORSEC NOVI : le tri rapide', ic: 'team', src: 'NDS 362, § V ; comparaison avec le chapitre FOAD « Repérage en cas de nombreuses victimes » de l’app',
      html: '<p>Dans le cadre de la doctrine SINUS, <b>dès 6 victimes</b>, une catégorisation rapide est réalisée en quatre catégories :</p>' +
        '<div class="tw"><table><thead><tr><th>NDS 362 (NOVI)</th><th>Critères</th><th>Rapprochement avec la FT « repérage » (app)</th></tr></thead><tbody>' +
        '<tr><td>Décédée</td><td>Décès sans aucun doute (tête séparée, rigidité, déchiquetée) <b>ou en arrêt cardio-respiratoire</b></td><td>Noire</td></tr>' +
        '<tr><td><b>UA</b></td><td>Hémorragie ; consciente avec détresse vitale évidente (<b>FR &gt; 30/min ou FC &gt; 120/min</b>) ; perte de connaissance avec respiration (après une éventuelle LVA)</td><td>Rouge (mêmes critères)</td></tr>' +
        '<tr><td><b>UR</b></td><td>Pas de détresse vitale et <b>ne peut pas se déplacer</b></td><td>Jaune</td></tr>' +
        '<tr><td>Impliquée</td><td>Ni blessée ni malade</td><td>Verte = victime qui se déplace (vers le PRV)</td></tr></tbody></table></div>' +
        '<p class="small muted">Le rapprochement avec les couleurs est une aide à la mémorisation : la NDS 362 n’emploie pas de couleurs.</p>' +
        '<div class="callout warn">Attention : en <b>intervention courante</b>, « en ACR » est un état à part entière ; en <b>NOVI</b>, l’ACR est classé avec les décédées.</div>' },
    { id: 'message', t: 'Dans le message de compte rendu', ic: 'clip', src: 'NDS 95 modifiée, annexe 1',
      html: '<p>La catégorisation figure dans le canevas de compte rendu tablette (« urgence absolue, urgence relative, décédée, impliquée »). Exemples donnés par la NDS 95 :</p>' +
        '<ul class="check"><li>« Homme 65 ans <b>UR</b> chute à domicile. Après accord CRRA 15, transport au CH Y. »</li><li>« Femme 30 ans <b>UA</b> malaise sur lieu de travail, transport médicalisé sur CH Z. »</li><li>« Homme 18 ans <b>UR</b> chute sur voie publique. Après accord CRRA 15 victime laissée sur place. »</li></ul>' +
        '<div class="callout">La NDS 95 renvoie, pour ces catégories, à la <b>NDS 356</b> (doctrine de secours routier), que la NDS 362 cite elle-même en référence. L’exemplaire de la NDS 362 du corpus ne porte ni date ni numéro.</div>' }
  ],
  key: ['5 états : impliquée, malade, blessée, en ACR, décédée.', 'UA = au moins une criticité ; UR = aucune criticité.', 'Critique en B : FR > 30 ; critique en D : Glasgow ≤ 12 ou inconsciente qui respire.', 'Critique = bilan primaire ; altérée = bilan secondaire.', 'Catégorie annoncée a priori, révisable ; bilan complet toujours transmis.', 'Criticité au primaire : SMUR (CRRA 15) ou ISP (CTA-CODIS) sans attendre.', 'NOVI dès 6 victimes : décédée (dont ACR), UA, UR, impliquée.'],
  traps: ['Croire qu’annoncer « UA » dispense du bilan complet.', 'Classer UR une victime inconsciente qui respire : c’est une criticité en D.', 'Oublier qu’en NOVI l’ACR est rangé avec les décédées.'],
  quiz: [
    { q: 'Une victime UA est une victime blessée ou malade qui :', c: ['Présente une ou plusieurs criticités', 'Ne peut pas marcher', 'A plus de 75 ans', 'A une SpO₂ à 96 %'], e: 'NDS 362 § IV : UA = une ou plusieurs criticités ; UR = aucune.', s: 'classes' },
    { q: 'Seuil de Glasgow définissant une criticité en D :', c: ['≤ 12', '≤ 8', '< 15', '≤ 3'], e: 'Critique en D : inconsciente qui respire, altération neurologique, Glasgow ≤ 12, agitée/prostrée après TC.', s: 'criticite' },
    { q: 'Critique en B selon la NDS 362 :', c: ['Ventilation > 30 mvts/min, cyanose marquée, asymétrie franche', 'FR à 16/min', 'SpO₂ à 95 %', 'Toux simple'], e: 'L’altération en B (SpO₂, FR hors normes) relève du bilan secondaire.', s: 'criticite' },
    { q: 'Criticité établie dès le bilan primaire : que permet la NDS ?', c: ['Demander un SMUR via le CRRA 15 ou un ISP via le CTA-CODIS avant la fin du bilan', 'Partir sans bilan', 'Transporter sans avis médical', 'Rien de particulier'], e: 'Demande possible avant la poursuite du bilan secouriste.', s: 'classes' },
    { q: 'À partir de combien de victimes la catégorisation rapide NOVI est-elle réalisée ?', c: ['6', '3', '10', '20'], e: 'Doctrine SINUS : dès que le nombre de victimes sera de 6.', s: 'novi' },
    { q: 'En NOVI, une victime en arrêt cardio-respiratoire est catégorisée :', c: ['Décédée', 'UA', 'UR', 'Impliquée'], e: 'NDS 362 § V : décédée = décès sans aucun doute ou ACR.', s: 'novi' },
    { q: 'Les sapeurs-pompiers peuvent considérer une victime décédée si :', c: ['Tête séparée du tronc, rigidité cadavérique ou victime déchiquetée', 'Elle ne respire pas depuis 1 minute', 'Elle est froide', 'Elle a plus de 90 ans'], e: 'Sinon le décès est constaté par un médecin.', s: 'etats' }
  ]
});

/* =====================================================================================
   CA VSAV 4 — CHAPITRE 10 : remontée d’information (NDS 95 modifiée + tablettes)
   ===================================================================================== */
VSAV.chap({
  id: 'cav-remontee-info', part: 'cav', seq: CAV_2_S4,
  title: 'Remontée d’information : status, messages et tablette (NDS 95 modifiée)', short: 'Status & messages (NDS 95)', motif: 'clip', accent: '#1d4ed8',
  sources: ['NDS 95 modifiée - Gestion opérationnelle et commandement, message de remontée d’information (SDIS 51, 18 mai 2022 ; texte OCR vérifié sur l’image des pages)', 'Mémo « Usage des tablettes opérationnelles en intervention », complément de la NDS 95 modifiée (SDIS 51)'],
  summary: 'Les 9 status, quand parler à la radio, et comment le chef d’agrès rend compte par la tablette.',
  why: '<b>Pourquoi tant de règles pour parler ?</b> Le CTA-CODIS est la <b>station directrice</b> du réseau ANTARES : il dirige et autorise les communications. Les status remplacent la voix pour tout ce qui est routinier (départ, arrivée, hôpital, disponibilité) et libèrent le canal pour l’essentiel. Une remontée réactive et continue permet de <b>dimensionner</b> la réponse, de rendre compte aux autorités et d’assurer une <b>traçabilité</b> en cas de contentieux.',
  sections: [
    { id: 'reseau', t: 'Le réseau dirigé', ic: 'team', src: 'NDS 95 modifiée, § 1-2 (p. 1-2)',
      html: '<ul class="check"><li>ANTARES, mis en place en <b>2015</b>, est pleinement intégré au processus opérationnel.</li><li>Le CTA-CODIS collecte le renseignement, coordonne, rend compte à la chaîne de commandement et renseigne les autorités ; une partie de ses prérogatives peut être déléguée à un PC (PCC, PCS, PCA) ou transférée au COD / PCO.</li><li>Les engins demandent <b>systématiquement l’autorisation</b> de converser par status avant leur message de demande de moyens.</li><li>Status défaillants : « <b>CODIS 51 de COS abcd, status hors service, parlez</b> ».</li><li>Seuls les status <b>n° 1 à 9</b> sont autorisés dans la Marne.</li></ul>' +
        '<p>Après un status 3, le CTA-CODIS engage la communication par « <b>ENGIN CIS de CODIS 51, parlez</b> ».</p>' },
    { id: 'status', t: 'Les status du VSAV', ic: 'list', src: 'NDS 95 modifiée, § 3 (p. 2-4)',
      html: '<div class="tw"><table><thead><tr><th>Status</th><th>Usage</th><th>Voix ?</th></tr></thead><tbody>' +
        '<tr><td><b>1</b> Véhicule parti</td><td>Départ ; suffit à valider le départ</td><td>Non</td></tr>' +
        '<tr><td><b>3</b> Message (transit)</td><td>Signaler un effectif différent du ticket de départ ou une convergence interne ; demander un complément (adresse, confirmation, renfort)</td><td>Oui, canal OPE</td></tr>' +
        '<tr><td><b>2</b> Véhicule sur les lieux</td><td>Arrivée</td><td>Non, sauf adresse ou informations de départ fausses (status 3 préalable)</td></tr>' +
        '<tr><td><b>3</b> Message d’ambiance</td><td>Synthétique, dès l’arrivée du 1<sup>er</sup> COS (<b>5 minutes maximum</b>) ; toute demande de renfort est justifiée</td><td>Oui, canal OPE</td></tr>' +
        '<tr><td><b>3</b> Compte rendu</td><td>CA : par la <b>tablette</b> (canevas) ; radio par status 3 impérative pour toute demande motivée de moyens</td><td>Tablette / voix</td></tr>' +
        '<tr><td><b>4</b> Message urgent</td><td>= « urgent, urgent, urgent » : renfort prioritaire, accident, problème grave ; priorité de communication</td><td>Oui, canal OPE</td></tr>' +
        '<tr><td><b>5</b> Transport hôpital</td><td>Départ vers le CH ; destination précisée dans le compte rendu tablette</td><td>Non</td></tr>' +
        '<tr><td><b>6</b> Arrivée hôpital</td><td>Sert aussi aux statistiques de temps passé à l’hôpital</td><td>Non</td></tr>' +
        '<tr><td><b>7</b> Véhicule disponible</td><td>Disponible sur son secteur, ou hors secteur mais capable d’y intervenir en <b>≤ 20 minutes</b> (SDACR 9.2) ; le VSAV renseigne seulement l’état « quitte le CH » sur la tablette</td><td>Non</td></tr>' +
        '<tr><td><b>8</b> Véhicule indisponible</td><td>Reconditionnement <b>&gt; 30 minutes</b> : avertir le chef de salle ; durée indéterminée (désinfection, casse, manque de matériel) : téléphone au CTA-CODIS</td><td>—</td></tr>' +
        '<tr><td><b>9</b> Véhicule rentré</td><td>Validé dès le retour au CIS</td><td>Non</td></tr></tbody></table></div>' +
        '<p class="small">Hors département, les status passent grâce à l’InterAVL dans l’Aisne, la Seine-et-Marne, l’Aube et la Haute-Marne ; pour les Ardennes et la Meuse, ils sont validés dès l’entrée dans le département (ou par tablette).</p>' },
    { id: 'cr', t: 'Le compte rendu du chef d’agrès', ic: 'clip', src: 'NDS 95 modifiée, § 3.5 et 4, annexe 1 (p. 3-5, 8-9)',
      html: '<p>Les CA transmettent leurs comptes rendus <b>par la tablette</b>, selon les canevas. Ils renseignent les autorités (préfecture, COZ…), la chaîne de commandement, et permettent au chef de salle de clôturer l’intervention (nature BRQ). Dès que plusieurs moyens sont engagés, <b>seul le COS</b> communique avec le CTA-CODIS ; tout changement de COS ou arrivée d’un niveau supérieur est signalé.</p>' +
        '<div class="tw"><table><thead><tr><th>Canevas SUAP</th><th>Contenu attendu</th></tr></thead><tbody>' +
        '<tr><td>« Je vois »</td><td>Sexe / âge ; <b>catégorisation</b> (UA, UR, décédée, impliquée) ; lieu (voie publique, lieu public, domicile, travail) ; nature (blessé : chute, autolyse, sport… ; malaise : suspicion d’AVC, douleur thoracique, détresse respiratoire… ; IMV, intoxication ; relevage)</td></tr>' +
        '<tr><td>« Je fais »</td><td>Actions menées (relevage, immobilisation, dégagement d’urgence…) ; devenir (laissée sur place, destination hôpital) ; toute information utile</td></tr></tbody></table></div>' +
        '<p><b>Secours routier</b> : description (type et nombre de véhicules, position, tonneaux, type de choc, cinétique), situation des victimes (piégée, incarcérée, hors du véhicule), état (impliquée, décédée, ACR, UA, UR), actions (balisage, protection incendie…), devenir.</p>' +
        '<div class="callout warn"><b>PNRPAA</b> (personne ne répondant pas aux appels) : les dégâts causés pour entrer sont clairement indiqués dans le compte rendu, en complément de l’annexe de la POP 15 laissée sur place.</div>',
      figs: [{ img: 'img/cav-2/canevas-cr-suap.jpg', cap: 'Canevas du message de compte rendu SUAP sur tablette', txt: '<p>Le cadre vert (« Je vois ») décrit la victime et la situation ; le cadre orange (« Je fais ») décrit ce qui a été fait et le devenir de la victime.</p>', src: 'NDS 95 modifiée, annexe 1, p. 8' }] },
    { id: 'suap', t: 'Cas particuliers du SUAP', ic: 'ambulance', src: 'NDS 95 modifiée, § 7 (p. 5)',
      html: '<div class="tw"><table><thead><tr><th>Sujet</th><th>Règle</th></tr></thead><tbody>' +
        '<tr><td>Transmission des bilans</td><td>Directement par la tablette (bilans dématérialisés)</td></tr>' +
        '<tr><td>Échange téléphonique avec le CRRA 15</td><td>Composer impérativement le <b>03.26.27.15.15</b> (enregistrement interne au SDIS 51)</td></tr>' +
        '<tr><td>Bilan « simplifié »</td><td>Résumé du bilan complet pour écourter l’échange avec le CRRA 15 ; selon la NDS 95, réservé au <b>mode dégradé</b> (fiche papier, tablettes hors service) ; ne remplace jamais le bilan complet (procédure SAP 10)</td></tr>' +
        '<tr><td>Attente au CH</td><td>Anormalement longue (<b>&gt; 20 minutes</b>) : informer le CTA-CODIS par téléphone</td></tr>' +
        '<tr><td>Moyens médicalisés</td><td>Le CA contacte <b>directement le CRRA 15</b> par SSU (ou téléphone) ; demande obligatoirement motivée ; le CTA-CODIS n’a <b>aucune légitimité</b> à être en relais</td></tr></tbody></table></div>' },
    { id: 'tablette', t: 'La tablette : cinq règles', ic: 'grid', src: 'Mémo « Usage des tablettes opérationnelles », complément NDS 95',
      steps: ['J’exploite les statuts de la tablette pour les changements d’état de mon véhicule.', 'Je transmets mes messages d’ambiance ou de compte rendu depuis la tablette (synthèse vocale ou saisie manuscrite) ; le CODIS accuse réception par « Reçu pour le CODIS » ; sans réception, je sollicite le CODIS pour passer mon message à la radio.', 'J’envoie mon bilan victime depuis la tablette et j’en informe le CRRA 15 sur le TKG SSU : « CRRA15 de VSAV1 RWIT → Envoi du bilan via fiche victime xxx » (xxx = trois derniers chiffres du numéro du bilan). Refus de transport ou prise en charge par un tiers : partie « absence de transport » et fiche de refus signée avec le n° d’intervention.', 'Je veille le TKG SSU pour connaître mon CH de destination.', 'J’utilise les voies radio pour toute demande urgente, selon les procédures existantes.'], stepsTitle: 'Usage de la tablette',
      after: '<div class="callout">En cas de dysfonctionnement de la tablette, l’usage classique d’ANTARES (voix radio) est de rigueur ; je m’assure en permanence de la bonne réception de mes messages et statuts au CODIS.</div>' },
    { id: 'degrade', t: 'Mode dégradé, opérations multiples, départements limitrophes', ic: 'alert', src: 'NDS 95 modifiée, § 5, 9 et 10 (p. 5-7)',
      html: '<ul class="check"><li><b>Mode dégradé</b> : l’OBNSIC (précisé par l’OBDSIC) reste la base ; les tablettes sont la première cible des défaillances électroniques et cyberattaques ; le CTA-CODIS indique les modalités de résilience.</li><li><b>Opérations multiples (PCA)</b> : le CA ne transmet pas de status de déplacement ; il utilise les status 3 et 4 pour les renforts et rend compte <b>à son retour au PCA</b>.</li><li><b>Départements limitrophes</b> (CIAM) : arrivé dans le département demandeur, le chef de détachement informe le CTA-CODIS territorialement compétent (TKG 218 ou téléphone au 18) ; il suit la doctrine de la Marne tant qu’il commande ; en fin d’intervention, il informe le CTA-CODIS 51.</li></ul>' }
  ],
  key: ['Status 1 parti, 2 sur les lieux, 3 message, 4 urgent, 5 transport hôpital, 6 arrivée hôpital, 7 disponible, 8 indisponible, 9 rentré.', 'Ambiance : dès l’arrivée du 1er COS, 5 minutes maximum.', 'CA : comptes rendus par tablette (Je vois / Je fais).', 'Demande de moyens médicalisés : directement au CRRA 15, motivée.', 'Téléphone CRRA 15 : 03.26.27.15.15 (enregistré).', 'Attente au CH > 20 min ; reconditionnement > 30 min : prévenir.', 'Status 7 hors secteur si retour sur secteur ≤ 20 min.'],
  traps: ['Passer par le CTA-CODIS pour demander un SMUR.', 'Parler à la radio pour annoncer l’arrivée sur les lieux sans raison.', 'Croire que le bilan simplifié remplace le bilan complet.', 'Oublier de mentionner les dégâts d’une ouverture de porte (PNRPAA).'],
  quiz: [
    { q: 'Quel status signale « véhicule sur les lieux » ?', c: ['2', '1', '5', '6'], e: 'Status 2, sans message voix sauf adresse ou informations fausses.', s: 'status' },
    { q: 'Délai maximal du message d’ambiance après l’arrivée du 1er COS :', c: ['5 minutes', '20 minutes', '30 minutes', '1 minute'], e: 'NDS 95 § 3.4 : synthétique, dès l’arrivée du 1er COS (5 min max).', s: 'status' },
    { q: 'Le chef d’agrès transmet ses comptes rendus :', c: ['Par la tablette, selon les canevas', 'Uniquement par téléphone', 'Uniquement à la radio', 'Au retour au centre'], e: 'NDS 95 § 3.5.1 ; la radio (status 3) reste impérative pour toute demande motivée de moyens.', s: 'cr' },
    { q: 'Pour obtenir un moyen médicalisé, le CA :', c: ['Contacte directement le CRRA 15 et motive sa demande', 'Demande au CTA-CODIS de relayer', 'Attend la fin du bilan complet', 'Appelle le SMUR sur son portable'], e: 'Le CTA-CODIS n’a aucune légitimité à être en relais.', s: 'suap' },
    { q: 'Attente anormale au CH : à partir de quand informer le CTA-CODIS ?', c: ['Plus de 20 minutes', 'Plus de 5 minutes', 'Plus d’une heure', 'Jamais'], e: 'NDS 95 § 7 : par téléphone.', s: 'suap' },
    { q: 'Status 7 hors secteur : condition ?', c: ['Pouvoir intervenir sur son secteur en 20 minutes ou moins', 'Être rentré au CIS', 'Avoir fini la désinfection', 'Avoir l’accord du SAMU'], e: 'SDACR 9.2 ; le VSAV renseigne l’état « quitte le CH ».', s: 'status' },
    { q: 'Reconditionnement de plus de 30 minutes prévu :', c: ['Le CA avertit le chef de salle', 'Status 9', 'Rien à signaler', 'Status 4'], e: 'Status 8 + information du chef de salle.', s: 'status' },
    { q: 'Le CODIS a bien reçu un message tablette quand il répond :', c: ['« Reçu pour le CODIS »', '« Parlez »', '« Bien copié »', '« Fin de message »'], e: 'Mémo tablettes, règle 2.', s: 'tablette' }
  ]
});

/* =====================================================================================
   CA VSAV 4 — CHAPITRE 11 : le bilan patient-victime (NDS 415, SAP 10)
   ===================================================================================== */
VSAV.chap({
  id: 'cav-bilan-bpv', part: 'cav', seq: CAV_2_S4,
  title: 'La fiche bilan : BPV sur tablette et procédure SAP 10', short: 'Fiche bilan (BPV, SAP 10)', motif: 'clip', accent: '#7c3aed',
  sources: ['NDS 415 - Activation du nouveau bilan patient-victime (BPV) (SDIS 51, 12/06/2023 ; texte OCR vérifié sur l’image)', 'Procédure SAP 10 - Fiche bilan SUAP / intervention P2SH (SDIS 51, version 11, MAJ 23/05/2022 ; texte OCR vérifié sur l’image)'],
  summary: 'Le bilan est un document médical et juridique : obligatoire, complet, saisi jusqu’à la fin de la prise en charge.',
  why: '<b>Pourquoi tant d’exigence sur un formulaire ?</b> Le bilan est le <b>premier élément du dossier médical</b> : il est soumis au <b>secret médical</b>, la justice peut le <b>réquisitionner</b>, et la responsabilité du chef d’agrès, du personnel P2SH et du SDIS peut être engagée s’il est mal rempli. C’est aussi un <b>guide</b> pour le chef d’agrès : en suivant ses rubriques XABCDE, il n’oublie rien.',
  sections: [
    { id: 'bpv', t: 'Le BPV en XABCDE (NDS 415)', ic: 'clip', src: 'NDS 415 (12/06/2023)',
      html: '<ul class="check"><li>La NDS 415 <b>annule et remplace la note 386 du 03/02/2023</b> (version « martyre » du BPV).</li><li>À compter de sa parution, le nouveau bilan patient-victime sur le principe <b>XABCDE</b> est activé sur les <b>tablettes LEGO</b>.</li><li>Il fait suite à l’enseignement du bilan en XABCDE <b>débuté le 1<sup>er</sup> janvier 2022</b>.</li></ul>' },
    { id: 'principes', t: 'Rôle et statut du bilan', ic: 'shield', src: 'SAP 10, § 1-3 (p. 1-2)',
      html: '<p>La SAP 10 présente le <b>BPV</b> (version tablette LEGO) et le <b>BVPSSH</b> (bilan victime du pôle santé, P2SH) et rappelle les grands principes du bilan secouriste. Elle s’applique à tous les sapeurs-pompiers utilisant la tablette. <b>Tablette en panne : tout bilan est retranscrit sur fiche papier.</b></p>' +
        '<div class="tw"><table><thead><tr><th>Le bilan est…</th><th>Conséquence</th></tr></thead><tbody>' +
        '<tr><td>Le reflet de la prise en charge et un « guide » pour le CA</td><td>On suit ses rubriques</td></tr>' +
        '<tr><td>Le 1<sup>er</sup> élément du dossier médical</td><td>Soumis au secret médical</td></tr>' +
        '<tr><td>Systématique pour toute victime SSUAP / P2SH</td><td>—</td></tr>' +
        '<tr><td>Réquisitionnable par la justice</td><td>Responsabilité du CA, du P2SH et du SDIS engagée s’il est mal rempli</td></tr></tbody></table></div>' },
    { id: 'contenu', t: 'Ce que contient le bilan', ic: 'list', src: 'SAP 10, § 4.1 à 4.3 (p. 2-3)',
      html: '<div class="tw"><table><thead><tr><th>BPV (SSUAP)</th><th>BVPSSH (P2SH) : BPV +</th></tr></thead><tbody><tr>' +
        '<td>État civil et adresse ; date et lieu ; bilan circonstanciel ; bilan d’urgence vitale <b>et heure de réalisation</b> ; bilan complémentaire ; antécédents et traitement ; prise en charge ; bilan de surveillance ; orientation</td>' +
        '<td>Antécédents et traitement ; bilan d’urgence vitale et questionnaires spécifiques (suspicion d’AVC, parturiente) ; protocole utilisé ; thérapeutique et surveillance ; identification du rédacteur P2SH</td></tr></tbody></table></div>' +
        '<ul class="check"><li><b>Obligatoire pour toute victime</b> ; pas de bilan pour les <b>impliqués</b>.</li><li>Avec <b>SINUS</b> : le bilan est uniquement retranscrit sur la <b>fiche médicale de l’avant</b> (FMA).</li><li>Un <b>bilan final</b> est réalisé et saisi en fin de prise en charge, que la victime soit « laissée sur place » ou « confiée à un autre service » (IOA, SMUR, médecin libéral, forces de l’ordre) — hors décès.</li><li>Contenu : motif d’appel, plaintes, circonstances (cinétique et état des véhicules en AVP), éléments physiologiques, description et intensité de la douleur, lésions, antécédents et traitements, gestes, renforts demandés, lieu d’hospitalisation souhaité si précisé.</li></ul>' },
    { id: 'allegee', t: 'Transmission allégée ou bilan simplifié ?', ic: 'bolt', src: 'SAP 10, § 4.3 (p. 3) ; NDS 95 modifiée, § 7 (p. 5)',
      html: '<p>La SAP 10 autorise une <b>transmission allégée</b> du bilan, pour alléger le travail de la régulation, dans les situations suivantes — <b>un bilan complet restant obligatoire</b> :</p>' +
        '<ul class="check"><li>relevages ;</li><li>contusions et plaies simples ;</li><li>suspicions d’entorse du doigt, du poignet, du pied, de la cheville ou du genou ;</li><li>traumatismes périphériques des extrémités sans suspicion de fracture, non ouverts et non déplacés ;</li><li>brûlures simples ;</li><li>problèmes sociaux isolés.</li></ul>' +
        '<div class="callout warn"><b>Deux textes à concilier :</b> la NDS 95 modifiée (18/05/2022) indique que les bilans simplifiés sont « dédiés uniquement au <b>mode dégradé</b> avec fiche bilan papier » et renvoie à la SAP 10 pour leur procédure ; la SAP 10 (23/05/2022) liste des situations de transmission allégée sans mentionner le mode dégradé. Les deux exigent un bilan complet. Fais-toi préciser la pratique en vigueur par ton encadrement.</div>' },
    { id: 'deces', t: 'Le fascicule décès', ic: 'book', src: 'SAP 10, § 5 et annexe 2 (p. 4 et 6)',
      html: '<p>Fascicule que le chef d’agrès peut proposer aux proches confrontés à un décès, pour les guider dans leurs démarches et l’aider à répondre à leurs questions.</p>' +
        '<div class="callout bad">À proposer <b>uniquement</b> en cas de <b>rigidité cadavérique</b> et en <b>l’absence d’obstacle médico-légal</b>.</div>' +
        '<ul class="check"><li>Imprimé par chaque centre ; <b>trois exemplaires</b> dans le classeur documentation de chaque VSAV.</li><li>Conseils qu’il contient : couvrir le corps d’un drap, réduire l’éclairage, fermer volets et fenêtres (surtout par temps chaud), éteindre le chauffage ; faire constater le décès par un médecin (certificat) ; contacter une entreprise de pompes funèbres ; déclarer le décès à la mairie du lieu de décès.</li></ul>' +
        '<p><b>Gestion documentaire</b> : toute fiche bilan ou refus de transport est transmise au <b>P2SH chaque mois</b>.</p>' }
  ],
  key: ['NDS 415 : BPV XABCDE activé sur tablettes LEGO (remplace la note 386).', 'Bilan = 1er élément du dossier médical, secret médical, réquisitionnable.', 'Obligatoire pour toute victime, pas pour les impliqués.', 'SINUS : bilan retranscrit sur la fiche médicale de l’avant.', 'Bilan final même si laissée sur place ou confiée à un autre service.', 'Tablette en panne : fiche papier.', 'Fascicule décès : rigidité cadavérique et pas d’obstacle médico-légal.'],
  traps: ['Ne pas faire de bilan final quand la victime est laissée sur place.', 'Remettre le fascicule décès alors qu’il existe un obstacle médico-légal.', 'Penser qu’une transmission allégée dispense de remplir le bilan complet.'],
  quiz: [
    { q: 'La NDS 415 active sur tablette un bilan construit sur le principe :', c: ['XABCDE', 'ABC', 'SAMPLER', 'OPQRST'], e: 'Nouveau BPV XABCDE sur tablettes LEGO.', s: 'bpv' },
    { q: 'Pourquoi le bilan est-il soumis au secret médical ?', c: ['C’est le premier élément du dossier médical', 'Parce qu’il est saisi sur tablette', 'Parce qu’il est signé par le CA', 'Il ne l’est pas'], e: 'SAP 10 : il représente le premier élément du dossier médical.', s: 'principes' },
    { q: 'Pour quelle catégorie de victimes le bilan n’est-il pas réalisé ?', c: ['Les impliqués', 'Les UR', 'Les enfants', 'Les victimes laissées sur place'], e: 'SAP 10 § 4.2.', s: 'contenu' },
    { q: 'En cas d’utilisation de SINUS, le bilan est retranscrit :', c: ['Uniquement sur la fiche médicale de l’avant', 'Sur une feuille libre', 'Sur la tablette et la FMA', 'Nulle part'], e: 'SAP 10 § 4.2.', s: 'contenu' },
    { q: 'Le fascicule décès peut être remis à la famille :', c: ['En cas de rigidité cadavérique sans obstacle médico-légal', 'Dans tous les décès', 'Uniquement à l’hôpital', 'Après une RCP non efficace'], e: 'SAP 10 § 5 (en gras dans la procédure).', s: 'deces' },
    { q: 'Les fiches bilan et refus de transport sont transmises au P2SH :', c: ['Chaque mois', 'Chaque année', 'Jamais', 'Après chaque intervention par la victime'], e: 'SAP 10 § 6 : gestion documentaire.', s: 'deces' }
  ]
});

/* =====================================================================================
   CA VSAV 4 — CHAPITRE 12 : refus de transport, perfusés, psychiatrie
   ===================================================================================== */
VSAV.chap({
  id: 'cav-transport', part: 'cav', seq: CAV_2_S4,
  title: 'Transporter ou non : refus, victime perfusée, hospitalisation en psychiatrie', short: 'Refus, perfusés, psychiatrie', motif: 'ambulance', accent: '#0e7490',
  sources: ['Procédure SAP 10, § 4.4 et annexe 1 (SDIS 51, version 11, 23/05/2022)', 'NDS 300 - Transport de victimes perfusées (SDIS 51, 13/09/2019 ; texte OCR vérifié sur l’image)', 'Procédure SAP 03 - Hospitalisation en psychiatrie des victimes avec et/ou sans consentement (SDIS 51, version 3, MAJ 10/11/2021)'],
  summary: 'Trois situations où le chef d’agrès engage sa responsabilité sur la décision de transport.',
  why: '<b>Pourquoi ces règles ?</b> Le refus de transport est un droit de la victime, mais <b>sa capacité à juger</b> peut être altérée (hypoglycémie, traumatisme crânien, alcool…) : la responsabilité du chef d’agrès peut être engagée s’il n’a pas respecté la conduite à tenir. La perfusion ne fait pas partie des gestes enseignés aux sapeurs-pompiers : on ne surveille pas ce qu’on ne sait pas surveiller. Et l’hospitalisation sans consentement est une <b>privation de liberté</b> encadrée par la loi : sans les bons documents, pas de transport.',
  sections: [
    { id: 'refus', t: 'Le refus de transport', ic: 'hand', src: 'SAP 10, § 4.4 et 4.4.1 (p. 3-4)',
      html: '<p>La victime en mesure de s’exprimer et d’analyser la situation peut refuser sa prise en charge. Le problème majeur est d’<b>évaluer sa capacité de jugement</b>, altérée notamment par : hypoglycémie, traumatisme crânien, stress, alcoolisation, prise de toxiques ou de médicaments.</p>',
      steps: ['Réaliser un bilan complet de la victime avec saisie du bilan.', 'Informer la victime des conséquences éventuelles de son refus, de préférence devant témoin(s).', 'Transmettre le bilan au médecin régulateur du CRRA 15 ; informer le CODIS.', 'Établir le refus de transport en deux exemplaires, dont un remis à la victime, après s’être assuré qu’elle dispose de tous les éléments pour confirmer sa décision ; noter précisément les informations fournies.', 'Ne jamais établir de refus pour une victime manifestement incapable d’exprimer son consentement.', 'Faire contresigner par des témoins.', 'Conseiller de consulter un médecin dans les plus brefs délais et noter ce conseil sur le refus.', 'Informer le CRRA 15 du refus final confirmé par la victime.'], stepsTitle: 'Conduite à tenir',
      figs: [{ img: 'img/cav-2/refus-transport.jpg', cap: 'Formulaire de refus de transport (annexe 1 de la SAP 10)', txt: '<p>Trois blocs à connaître : signature de la victime (« lu et approuvé » de sa main), <b>refus de signature</b> attesté par le chef d’agrès, description des informations données, et deux <b>témoins autres que sapeurs-pompiers</b>.</p>', src: 'SAP 10, annexe 1, p. 5' }] },
    { id: 'refus-cas', t: 'Refus : les cas particuliers', ic: 'alert', src: 'SAP 10, § 4.4.2 (p. 4)',
      html: '<div class="tw"><table><thead><tr><th>Situation</th><th>Règle</th></tr></thead><tbody>' +
        '<tr><td>Victime qui demande à être raccompagnée chez elle ou dans son lieu de vie (EHPAD, foyer…)</td><td><b>Refuser</b></td></tr>' +
        '<tr><td>Voie publique, comportement anormal, bilan vital normal, suspicion d’alcoolisation, refus de transport</td><td>Demander au CTA-CODIS l’intervention des <b>forces de l’ordre</b> (ivresse publique manifeste)</td></tr>' +
        '<tr><td>Refus des parents ou du tuteur pour un mineur</td><td>Demander le <b>chef de groupe</b> et/ou les <b>forces de l’ordre</b> si la décision semble préjudiciable (suspicion de sévices ou privations) ou si l’hospitalisation est indispensable et confirmée par le régulateur</td></tr>' +
        '<tr><td>Mineur seul</td><td>Ne peut pas refuser son transport ni être considéré « ne nécessitant pas de transport »</td></tr>' +
        '<tr><td>Victime sous tutelle / curatelle</td><td><b>Aucun refus possible</b> ; laissée sur place seulement sur décision du régulateur si elle ne nécessite pas de transport</td></tr></tbody></table></div>' +
        '<div class="callout ok">Ne pas confondre « victime qui <b>refuse</b> son transport » et « victime qui <b>ne nécessite pas</b> de transport » : dans le second cas, décidé ou confirmé par le régulateur après le bilan, <b>le refus de transport est inutile</b>.</div>' },
    { id: 'perfuses', t: 'Victime perfusée (NDS 300)', ic: 'bottle', src: 'NDS 300 (13/09/2019)',
      html: '<p>La surveillance d’une perfusion — quelle qu’en soit l’origine (médecin de ville, SMUR, SSSM) — <b>ne fait pas partie des gestes enseignés</b> aux sapeurs-pompiers.</p>' +
        '<div class="tw"><table><thead><tr><th>Situation</th><th>Transport en VSAV</th></tr></thead><tbody>' +
        '<tr><td>Perfusion en cours</td><td><b>Non</b>, sauf présence d’un personnel médical ou paramédical (infirmier) avec l’équipage</td></tr>' +
        '<tr><td>Perfusion <b>clampée</b> (débit complètement arrêté)</td><td>Possible sans médicalisation</td></tr>' +
        '<tr><td>Perfusion retirée, cathéter laissé en place avec un bouchon</td><td>Possible sans médicalisation</td></tr>' +
        '<tr><td>Rares situations exceptionnelles (nombreuses victimes)</td><td>Envisageable <b>uniquement après accord du médecin régulateur</b></td></tr></tbody></table></div>' +
        '<div class="callout warn">Dans tous les cas, le chef d’agrès fait <b>noter sur la fiche bilan</b>, par le médecin ou l’infirmier, les éventuels médicaments injectés et leur surveillance spécifique.</div>' },
    { id: 'psy-modes', t: 'Les trois modes d’admission en psychiatrie', ic: 'psy', src: 'SAP 03, § 2 (p. 1-2)',
      html: '<div class="tw"><table><thead><tr><th>Mode</th><th>Principe</th><th>Documents</th></tr></thead><tbody>' +
        '<tr><td><b>SPL</b> — soins psychiatriques libres</td><td>Avec consentement ; mêmes droits que tout patient, peut partir à tout moment</td><td>—</td></tr>' +
        '<tr><td><b>SPDT</b> — à la demande d’un tiers</td><td>Troubles rendant le consentement impossible et imposant des soins immédiats avec surveillance constante en milieu hospitalier ; demande d’un membre de la famille, d’un tiers ou du directeur de l’établissement</td><td>Procédure normale : <b>2 certificats</b> + demande du tiers. Péril imminent : <b>1 certificat</b> d’un médecin extérieur à l’établissement. Urgence : <b>1 certificat</b> + demande du tiers</td></tr>' +
        '<tr><td><b>SPDRE</b> — sur décision du représentant de l’État</td><td>Troubles nécessitant des soins ET compromettant la sûreté des personnes ou portant gravement atteinte à l’ordre public (« hospitalisation d’office »)</td><td><b>Arrêté préfectoral</b> pris au vu d’un certificat médical et d’un arrêté municipal provisoire (maire)</td></tr></tbody></table></div>' +
        '<p>Dans tous les cas, l’hospitalisation se fait après avis médical, dans l’unité du pôle correspondant au <b>lieu de résidence habituel</b> du patient.</p>' },
    { id: 'psy-ca', t: 'Psychiatrie : ce que vérifie le chef d’agrès', ic: 'shield', src: 'SAP 03, § 1, 4 et 5 (p. 1, 3-4)',
      html: '<ul class="check"><li>Mission confiée au SDIS par le CRRA dans le cadre de l’<b>indisponibilité ambulancière</b>.</li><li>Dès que le besoin est identifié (régulation ou sur place), le <b>SMUR</b> est engagé en complément du VSAV.</li><li><b>Police ou gendarmerie</b> demandée chaque fois que nécessaire, notamment si une <b>contrainte physique</b> doit être imposée ou si la <b>sécurité des intervenants</b> est menacée.</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Admission</th><th>Pour transporter, il faut…</th></tr></thead><tbody>' +
        '<tr><td>SPDT</td><td>Les éléments du § 2 (certificat(s) et demande du tiers selon la procédure) ; transport sans consentement possible vers l’établissement déterminé par le CRRA (en général le SAU le plus proche)</td></tr>' +
        '<tr><td>SPDRE</td><td>L’<b>arrêté du maire ou du préfet</b> précisant l’établissement receveur + un certificat médical. <b>Danger immédiat</b> : transport possible vers l’établissement déterminé par le CRRA sans attendre l’arrêté</td></tr>' +
        '<tr><td>Sortie autorisée non accompagnée (programme de soins) refusant de rentrer</td><td>Transport normalement assuré par l’établissement ; si les SP le font, il est facturé à l’hôpital, qui peut envoyer une équipe paramédicale. SPDT : certificat de demande de réintégration signé du directeur de garde ; SPDRE : certificat médical de réintégration du psychiatre et/ou arrêté préfectoral de réadmission</td></tr></tbody></table></div>' +
        '<div class="callout bad"><b>Victime agitée</b> : son transport <b>ne peut pas</b> être réalisé par l’équipage VSAV seul ; elle peut nécessiter les forces de l’ordre et/ou une sédation par le médecin présent (SMUR).</div>' }
  ],
  key: ['Refus : bilan complet, information devant témoin, CRRA 15, CODIS, formulaire en 2 exemplaires.', 'Jamais de refus pour une victime incapable de consentir ; tutelle/curatelle : aucun refus possible.', 'Mineur seul : ne peut pas refuser.', '« Ne nécessite pas de transport » (régulateur) ≠ refus : pas de formulaire.', 'Perfusion en cours : pas de VSAV sans infirmier ou médecin, sauf clampée, bouchon ou accord du régulateur (NOVI).', 'SPDRE : arrêté du maire ou du préfet + certificat ; danger immédiat : transport sans attendre.', 'Victime agitée : jamais l’équipage VSAV seul.'],
  traps: ['Faire signer un refus à une victime alcoolisée ou confuse.', 'Raccompagner une victime chez elle à sa demande.', 'Transporter une perfusion qui coule sans soignant.', 'Partir avec une victime en SPDRE sans l’arrêté (hors danger immédiat).'],
  quiz: [
    { q: 'En combien d’exemplaires le refus de transport est-il établi ?', c: ['Deux, dont un remis à la victime', 'Un seul, conservé au centre', 'Trois', 'Aucun, l’oral suffit'], e: 'SAP 10 § 4.4.1.', s: 'refus' },
    { q: 'Une victime sous curatelle refuse son transport :', c: ['Aucun refus possible ; laissée sur place seulement sur décision du régulateur', 'Elle signe le formulaire', 'Son voisin signe', 'On la laisse sur place'], e: 'SAP 10 § 4.4.2.', s: 'refus-cas' },
    { q: 'Le régulateur estime qu’une victime ne nécessite pas de transport :', c: ['Le refus de transport est inutile', 'Il faut quand même un refus signé', 'Il faut l’emmener', 'Il faut appeler les forces de l’ordre'], e: 'Ne pas confondre refus et absence de nécessité de transport.', s: 'refus-cas' },
    { q: 'Victime perfusée par un médecin de ville, perfusion en cours, pas de soignant disponible :', c: ['Pas de transport VSAV sauf perfusion clampée ou retirée avec bouchon', 'Transport en surveillant le débit', 'Transport si la victime est consciente', 'Retirer soi-même la perfusion'], e: 'NDS 300 : la surveillance d’une perfusion n’est pas un geste enseigné.', s: 'perfuses' },
    { q: 'NDS 300 : dans quel cas exceptionnel un VSAV non médicalisé peut-il transporter une perfusion en cours ?', c: ['Nombreuses victimes, après accord du médecin régulateur', 'Si l’hôpital est proche', 'Si la famille accompagne', 'Jamais'], e: 'Rares situations exceptionnelles, uniquement après accord du régulateur.', s: 'perfuses' },
    { q: 'SPDRE : quel document le CA doit-il posséder pour transporter ?', c: ['L’arrêté du maire ou du préfet + un certificat médical', 'La demande d’un tiers', 'Rien', 'Une carte d’identité'], e: 'Sauf danger immédiat : transport possible sans attendre l’arrêté.', s: 'psy-ca' },
    { q: 'SPDT en procédure normale : combien de certificats médicaux ?', c: ['Deux, avec la demande du tiers', 'Un seul', 'Trois', 'Aucun'], e: 'SAP 03 § 2 ; péril imminent : 1 certificat ; urgence : 1 certificat + demande du tiers.', s: 'psy-modes' },
    { q: 'Victime agitée à hospitaliser en psychiatrie :', c: ['Jamais transportée par l’équipage VSAV seul', 'Transport sous sangles par le VSAV', 'Transport si la famille est d’accord', 'Laissée sur place'], e: 'Forces de l’ordre et/ou sédation par le médecin présent.', s: 'psy-ca' }
  ]
});

/* =====================================================================================
   CA VSAV 4 — CHAPITRE 13 : signalements (maltraitance, insalubrité)
   ===================================================================================== */
VSAV.chap({
  id: 'cav-signalements', part: 'cav', seq: CAV_2_S4,
  title: 'Signaler : suspicion de maltraitance et insalubrité', short: 'Maltraitance & insalubrité', motif: 'alert', accent: '#9d174d',
  sources: ['PR - Découverte d’un cas de maltraitance, Chef d’Agrès VSAV (SDIS 51, MAJ 21/03/2024)', 'NDS 434 - Signalement pour suspicion d’un cas de maltraitance (SDIS 51, décembre 2023 ; texte OCR vérifié sur l’image) et procédure SSUAP 04 (12/12/2023) en annexe', 'Fiche de signalement - Suspicion d’un cas de maltraitance (version décembre 2023)', 'POP-19 - Signalement du constat d’insalubrité sur intervention (indice 02, 25/10/2022) et son annexe'],
  summary: 'Lever le secret, transmettre au médecin et à l’IAO, remplir la fiche : la chaîne du signalement.',
  why: '<b>Pourquoi le chef d’agrès doit-il signaler ?</b> Parce que la loi l’y <b>oblige</b> : le sapeur-pompier doit révéler tout crime ou délit dont il est témoin (article 40 du CPP, article 434-3 du code pénal) et peut être jugé responsable s’il n’agit pas pour empêcher une atteinte à l’intégrité d’une personne (article 223-6). C’est une situation où le <b>secret professionnel est levé</b>. Pour l’insalubrité, c’est le maire qui constate et décide des suites : sans signalement des pompiers, il ne le saura souvent jamais.',
  sections: [
    { id: 'cadre', t: 'Le cadre légal', ic: 'book', src: 'NDS 434, § I-III (p. 1-2)',
      html: '<div class="tw"><table><thead><tr><th>Texte</th><th>Objet</th></tr></thead><tbody>' +
        '<tr><td>Code pénal, art. 223-6</td><td>Non-assistance à personne en danger</td></tr>' +
        '<tr><td>Code pénal, art. 434-3</td><td>Non-assistance à personne vulnérable (non-dénonciation)</td></tr>' +
        '<tr><td>Code pénal, art. 226-14</td><td>Levée du secret professionnel</td></tr>' +
        '<tr><td>Code de procédure pénale, art. 40</td><td>Dénonciation d’un crime ou d’un délit</td></tr></tbody></table></div>' +
        '<p>Le code pénal ne définit pas la maltraitance ; il définit la <b>personne vulnérable</b> : qui ne peut pas se défendre (mineure, âgée, malade, infirme, déficiente physique ou mentale, femme enceinte…). Formes : <b>violences physiques</b> (dont enfermement, surmédication, mauvais usage de médicaments) ; <b>abus sexuels</b> ; <b>menaces et préjudices psychologiques</b> (insultes, harcèlement, humiliation, chantage affectif, infantilisation) ; <b>négligences, abandons, privations</b> (soins, nourriture, boissons…).</p>' },
    { id: 'procedure', t: 'En intervention : deux voies concomitantes', ic: 'list', src: 'NDS 434, § IV ; procédure SSUAP 04 (p. 3-4) ; PR - Découverte d’un cas de maltraitance (p. 1)',
      html: '<p>La prise en charge reste <b>classique</b>, avec régulation par le CRRA 15 ; pendant la transmission du bilan, le chef d’agrès <b>informe le médecin régulateur</b> de la suspicion en précisant les éléments relevés. La fiche procédure CA ajoute : en cas de suspicion, <b>le transport doit être la priorité</b> (prise en charge médicale et suivi par les autorités).</p>' +
        '<div class="tw"><table><thead><tr><th>Victime transportée</th><th>Victime laissée sur place</th></tr></thead><tbody><tr>' +
        '<td>À l’arrivée aux urgences, informer l’<b>IAO</b> (infirmière d’accueil et d’orientation) de la suspicion ; l’IAO garantit la continuité et déclenche la procédure interne de l’hôpital. Noter dans le <b>CRSS</b> cette remontée faite à l’IAO. Au retour, remplir la <b>fiche de signalement</b>.</td>' +
        '<td>Recueillir le <b>maximum d’informations</b> : noms et adresses des personnes présentes, description des éléments remarquables ; remplir la fiche de signalement ; remplir rigoureusement le <b>CRSS</b>.</td></tr></tbody></table></div>' +
        '<div class="callout warn">Si le refus de transport par le tuteur légal n’est <b>pas acceptable</b> (victime UA par exemple), demander le concours des partenaires (<b>SAMU, forces de l’ordre</b>). Si la victime est <b>adulte et possède toutes ses facultés</b>, son refus de transport ne peut pas être refusé. Mineur avec refus de l’autorité parentale : voir la SAP 10 (cas particuliers) et la NDS 146.</div>' },
    { id: 'fiche', t: 'La fiche de signalement', ic: 'clip', src: 'Fiche de signalement - Suspicion d’un cas de maltraitance (déc. 2023) ; NDS 434 § IV-V ; PR - Découverte d’un cas de maltraitance',
      html: '<ul class="check"><li><b>Intervention</b> : n°, date, nature, adresse, commune.</li><li><b>Victime</b> : majeure / mineure / sous curatelle / handicapée ; identité ; adresse si différente ; si mineure ou sous tutelle, <b>représentants légaux 1 et 2</b>.</li><li>Transport à l’hôpital oui / non, hôpital de destination.</li><li><b>Compte rendu circonstancié et factuel</b>, précisant au maximum les faits constatés.</li><li>Rédacteur (nom, grade, centre, date, signature) et <b>visa du chef de centre</b>.</li></ul>' +
        '<p>La fiche est <b>scannée puis envoyée par mail</b> aux adresses indiquées sur la fiche (affaires générales et opération du SDIS 51). Le service administratif et juridique transmet aux services compétents, accompagné du CRSS fourni par le groupement mise en œuvre opérationnelle : <b>le CRSS doit être factuel et complet</b>.</p>' +
        '<div class="callout">La fiche procédure CA décrit le circuit ainsi : rassembler informations et pièces et les transmettre au <b>chef de centre</b>, qui les communique au <b>service juridique (copie CODIS)</b>. La NDS 434 et la fiche prévoient un envoi par mail aux services affaires générales et opération. Les deux circuits passent par le chef de centre (visa) ; suis la fiche en vigueur.</div>',
      figs: [{ img: 'img/cav-2/fiche-maltraitance.jpg', cap: 'Fiche de signalement d’une suspicion de maltraitance (page 1)', txt: '<p>Page 1 : intervention et identité de la victime (avec ses représentants légaux si elle est mineure ou sous tutelle). La page 2 contient le compte rendu, l’identité du rédacteur et le visa du chef de centre.</p>', src: 'Fiche de signalement, version décembre 2023, p. 1' }] },
    { id: 'insalubrite', t: 'Insalubrité constatée en intervention (POP-19)', ic: 'pin', src: 'POP-19 (indice 02, 25/10/2022) et annexe',
      html: '<p><b>Insalubrité</b> : logement qui présente un <b>danger pour la santé des occupants ou des voisins</b> en raison de son état ou de ses conditions d’occupation. Il appartient au <b>maire</b> (ou à ses services) de constater et de décider des suites.</p>',
      steps: ['COS : remplir la fiche de signalement d’un état d’insalubrité.', 'COS : la transmettre pour visa au chef de centre (ou à son représentant).', 'Chef de centre : l’envoyer par mail au service concerné de la mairie (à défaut, adresse générique) et au pôle départemental de lutte contre l’habitat indigne (DDT).', 'Copie au groupement mise en œuvre opérationnelle.'], stepsTitle: 'Circuit du signalement',
      after: '<p><b>La fiche</b> demande notamment : n° et nature d’intervention, adresse précise (escalier, étage, porte), immeuble collectif ; victime agressive ou réfractaire aux secours ; présence d’<b>animaux</b> (type) et d’<b>enfants</b> (nombre) ; <b>logement encombré</b> (nature, volume approximatif en m³) ; transport et structure ; identité de l’occupant (locataire ou propriétaire) et du propriétaire ; personne avisée de la démarche en mairie ; compte rendu.</p>' }
  ],
  key: ['Obligation de signaler : art. 40 CPP, 434-3 et 223-6 CP ; secret levé (226-14).', 'Informer le médecin régulateur de la suspicion pendant le bilan.', 'Transport prioritaire ; informer l’IAO et le noter dans le CRSS.', 'Laissée sur place : noms, adresses, éléments remarquables.', 'Fiche de signalement factuelle, visa du chef de centre, envoi par mail.', 'Insalubrité : le COS remplit la fiche POP-19, le chef de centre l’envoie à la mairie et au pôle habitat indigne.'],
  traps: ['Se taire au nom du secret professionnel.', 'Écrire des interprétations au lieu des faits constatés.', 'Oublier de prévenir l’IAO à l’arrivée aux urgences.', 'Envoyer la fiche d’insalubrité sans visa du chef de centre.'],
  quiz: [
    { q: 'Quel article impose de dénoncer un crime ou un délit ?', c: ['Article 40 du code de procédure pénale', 'Article 434-4 du code pénal', 'Article L.1111-4 du code de la santé publique', 'Article 1240 du code civil'], e: 'NDS 434 : art. 40 CPP (dénonciation) ; art. 226-14 CP (levée du secret).', s: 'cadre' },
    { q: 'À qui le chef d’agrès signale-t-il la suspicion à l’arrivée aux urgences ?', c: ['À l’infirmière d’accueil et d’orientation (IAO)', 'Au premier médecin rencontré', 'À l’accueil administratif', 'À personne'], e: 'L’IAO garantit la continuité et déclenche la procédure interne ; mention dans le CRSS.', s: 'procedure' },
    { q: 'Victime laissée sur place : que recueille en plus le CA ?', c: ['Noms et adresses des personnes présentes, éléments remarquables', 'Une photo de la victime', 'Le numéro de sécurité sociale', 'Rien de plus'], e: 'Procédure SSUAP 04, cas 2.', s: 'procedure' },
    { q: 'Le compte rendu de la fiche de signalement doit être :', c: ['Circonstancié et factuel', 'Une interprétation des faits', 'Le plus court possible', 'Rédigé par la victime'], e: 'Fiche de signalement, page 2.', s: 'fiche' },
    { q: 'Victime UA dont le tuteur refuse le transport :', c: ['Demander le concours du SAMU et des forces de l’ordre', 'Faire signer le refus et partir', 'Transporter de force sans prévenir', 'Attendre le lendemain'], e: 'SSUAP 04 : refus non acceptable, concours des services partenaires.', s: 'procedure' },
    { q: 'POP-19 : qui constate officiellement l’insalubrité ?', c: ['Le maire ou ses services', 'Le chef d’agrès', 'Le CTA-CODIS', 'Le propriétaire'], e: 'Les SP signalent ; le maire constate et décide des suites.', s: 'insalubrite' },
    { q: 'POP-19 : qui envoie la fiche à la mairie et au pôle habitat indigne ?', c: ['Le chef de centre, après visa', 'Le COS directement depuis la tablette', 'La victime', 'Le CODIS'], e: 'Le COS remplit, le chef de centre vise et transmet (copie au groupement opérationnel).', s: 'insalubrite' }
  ]
});

/* =====================================================================================
   CA VSAV 4 — CHAPITRE 14 : mémos B, C, D et mémentos
   ===================================================================================== */
VSAV.chap({
  id: 'cav-memos', part: 'cav', seq: CAV_2_S4,
  title: 'Mémos B, C, D et Mémentos SSUAP / SUAP : les chiffres de poche', short: 'Mémos et mémentos', motif: 'book', accent: '#475569',
  sources: ['Mémo B (A6) - Breathing / Ventilation (SDIS 51)', 'Mémo C (A6) - Circulation (SDIS 51)', 'Mémo D (A6) - Disability (SDIS 51)', 'Mémento SSUAP (dossier Chef d’agrès VSAV ; PDF du 30/05/2024)', 'Mémento SUAP v2024-03 (dossier Formateur premiers secours ; PDF du 19/03/2024)'],
  summary: 'Normes par âge, oxygène, AVPU, Glasgow, glycémie, RAD-57 — et la seule différence entre les deux mémentos.',
  why: '<b>Pourquoi des mémos de poche ?</b> Le chef d’agrès doit comparer en temps réel ce qu’il mesure à une <b>norme qui dépend de l’âge</b> : 30 mouvements par minute, c’est une détresse chez l’adulte et une valeur normale chez le nourrisson. Les mémos B, C, D suivent l’ordre du bilan (XABCDE) et donnent les seuils qui fondent la criticité ; le mémento réunit RCP, oxygène et aides à l’interrogatoire sur une feuille.',
  sections: [
    { id: 'normes', t: 'Normes par âge', ic: 'grid', src: 'Mémo B ; Mémo C ; Mémento SSUAP, p. 1',
      html: '<div class="tw"><table><thead><tr><th></th><th>Adulte</th><th>Enfant</th><th>Nourrisson</th><th>Nouveau-né</th><th>NN à la naissance</th></tr></thead><tbody>' +
        '<tr><td>Âge</td><td>À partir de la puberté</td><td>1 an à la puberté</td><td>1 semaine à 1 an</td><td>Moins d’1 semaine</td><td>À la naissance</td></tr>' +
        '<tr><td>FR (mvts/min)</td><td><b>12 à 20</b></td><td><b>20 à 30</b></td><td><b>30 à 40</b></td><td colspan="2"><b>40 à 60</b></td></tr>' +
        '<tr><td>FC (bat/min)</td><td><b>60 à 100</b></td><td><b>70 à 140</b></td><td><b>100 à 160</b></td><td colspan="2"><b>120 à 160</b></td></tr></tbody></table></div>' +
        '<p>Bilan primaire : appréciation sur <b>10 secondes</b> ; bilan secondaire : évaluation sur <b>1 minute</b> (FR et pouls). Critères <b>F-A-R-S</b> : Fréquence, Amplitude, Régularité (pas plus de <b>6 s</b> sans mouvement respiratoire), Symétrie.</p>' },
    { id: 'memo-b', t: 'Mémo B : ventilation et oxygène', ic: 'lungs', src: 'Mémo B (A6), p. 1-2',
      html: '<div class="tw"><table><thead><tr><th>Situation</th><th>Oxygène (mémo B)</th></tr></thead><tbody>' +
        '<tr><td>SpO₂ &lt; 94 %</td><td>Débit initial <b>15 L/min</b>, puis ajuster de <b>9 à 15 L/min</b> pour un objectif de <b>94 à 98 %</b></td></tr>' +
        '<tr><td>IRC, SpO₂ &lt; 89 %</td><td>Débit initial <b>15 L/min</b>, puis ajuster de <b>9 à 15 L/min</b> pour un objectif de <b>89 à 92 %</b></td></tr>' +
        '<tr><td>Détresse respiratoire</td><td>O₂ quelle que soit la SpO₂</td></tr><tr><td>Détresse circulatoire</td><td>O₂ quelle que soit la SpO₂</td></tr>' +
        '<tr><td>Détresse neurologique</td><td>O₂ suivant la SpO₂ ; en l’absence de saturation, mettre sous O₂</td></tr></tbody></table></div>' +
        '<p><b>Coloration</b> : peau (face, extrémités) et muqueuses (lèvres, normalement roses) ; la <b>cyanose</b> traduit une insuffisance d’oxygénation des tissus. <b>Qualité</b> : normale (silencieuse), superficielle (thorax et abdomen à peine perceptibles), difficile (effort, muscles du cou, pincement des ailes du nez chez l’enfant), bruyante (sifflements, ronflements, gargouillements, râles).</p>',
      figs: [{ img: 'img/cav-2/memo-b.jpg', cap: 'Mémo B (A6), recto', txt: '<p>Normes de FR, règles d’oxygénation selon la SpO₂ et la détresse, durée d’appréciation (10 s / 1 min) et critères F-A-R-S.</p>', src: 'Mémo B (A6), p. 1' }] },
    { id: 'memo-c', t: 'Mémo C : circulation', ic: 'heart', src: 'Mémo C (A6)',
      html: '<ul class="check"><li>Bilan primaire (10 s) : <b>pouls périphérique</b> présent ? sinon, <b>pouls central</b> ? — fréquence, amplitude (bien frappé ou filant), régularité, symétrie.</li><li><b>TRC &gt; 3 secondes</b> = détresse circulatoire.</li><li>Aspect de la peau <b>THC</b> : <b>T</b>empérature (extrémités froides), <b>H</b>umidité (sueurs abondantes et persistantes), <b>C</b>oloration (pâleur, marbrures).</li><li>Tension artérielle <b>aux deux bras</b> si nécessaire.</li><li><b>Boîtes à sang</b> : thorax, abdomen, bassin, cuisses — observées et palpées à la recherche de douleur ou d’hémorragie interne.</li></ul>',
      figs: [{ img: 'img/cav-2/memo-c.jpg', cap: 'Mémo C (A6)', txt: '<p>À noter : la FC normale est la même (120 à 160) pour le nouveau-né et le nouveau-né à la naissance.</p>', src: 'Mémo C (A6), p. 1' }] },
    { id: 'memo-d', t: 'Mémo D : conscience, Glasgow, pupilles, glycémie', ic: 'brain', src: 'Mémo D (A6) ; Mémento SSUAP, p. 2 et 4',
      html: '<div class="tw"><table><thead><tr><th>AVPU</th><th>EVDA</th><th>Niveau</th></tr></thead><tbody>' +
        '<tr><td>A — Alert</td><td>E — Éveillé</td><td>Consciente de ce qui se passe autour d’elle</td></tr><tr><td>V — Verbal</td><td>V — Voix</td><td>Répond aux commandes verbales</td></tr><tr><td>P — Pain</td><td>D — Douleur</td><td>Réagit aux stimuli douloureux</td></tr><tr><td>U — Unresponsive</td><td>A — Aucune</td><td>Ne réagit pas aux stimuli douloureux</td></tr></tbody></table></div>' +
        '<div class="tw"><table><thead><tr><th>Glasgow (3 à 15)</th><th>Mémo D</th><th>Mémento</th></tr></thead><tbody>' +
        '<tr><td>Yeux 4-3-2-1</td><td>Spontanée, à la demande, à la douleur, nulle</td><td>Spontanée, à la demande, à la douleur, pas d’ouverture</td></tr>' +
        '<tr><td>Verbale 5-4-3-2-1</td><td>Orientée, confuse, incohérente, incompréhensible, aucune</td><td>Orientée, désorientée, obnubilée, grognements à la douleur, pas de réponse</td></tr>' +
        '<tr><td>Motrice 6-5-4-3-2-1</td><td>À la demande ; à la douleur : adaptée, retrait, flexion, extension, nulle</td><td>À la demande ; à la douleur : adaptée, évitement, en flexion, en extension, pas de réponse</td></tr></tbody></table></div>' +
        '<p>Les cotations sont identiques ; seuls les libellés de la réponse verbale et motrice diffèrent entre le mémo D et le mémento. <b>Pupilles</b> : diamètre (myosis, intermédiaire, mydriase), symétrie, réactivité. <b>FAST</b> pour l’AVC. <b>Glycémie</b> : norme <b>80 à 120 mg/dl</b> ; hypoglycémie <b>&lt; 60 mg/dl</b> (adulte), <b>&lt; 50 mg/dl</b> (2 à 15 ans).</p>' },
    { id: 'memento', t: 'Le Mémento : RCP, oxygène, interrogatoire, RAD-57', ic: 'book', src: 'Mémento SSUAP, p. 1-3',
      html: '<div class="tw"><table><thead><tr><th>RCP</th><th>Adulte</th><th>Enfant</th><th>Nourrisson / nouveau-né</th><th>Naissance</th></tr></thead><tbody>' +
        '<tr><td>Insufflations initiales</td><td>Noyé : 5</td><td>5</td><td>Tête en position neutre, 5</td><td>P.A.S.S., puis 40 insufflations à l’air sur 1 min</td></tr>' +
        '<tr><td>CT / insufflations</td><td>30 / 2</td><td colspan="2">15 / 2</td><td>3 / 1</td></tr>' +
        '<tr><td>Amplitude</td><td>Environ 5 cm sans dépasser 6 cm</td><td>Au moins 1/3 de l’épaisseur ou environ 5 cm</td><td colspan="2">Au moins 1/3 de l’épaisseur, soit environ 4 cm (2 pouces)</td></tr>' +
        '<tr><td>Fréquence</td><td colspan="2">&gt; 100/min sans dépasser 120/min</td><td>Nourrisson : idem ; nouveau-né : 120/min</td><td>120/min</td></tr>' +
        '<tr><td>O₂ en insufflation</td><td colspan="4">15 L/min</td></tr></tbody></table></div>' +
        '<p><b>O₂ par inhalation</b> : bilan primaire critique en X-A-B-C → <b>15 L/min systématique</b> ; critique en D → selon la saturation ; sans mesure possible de la SpO₂ et détresse vitale → inhalation systématique dans l’attente d’un avis médical. Aides : <b>OPQRTS</b> (douleur), <b>SAMPLER</b> (antécédents), <b>FAST</b>, <b>PASS</b> (nouveau-né : Position neutre, Aspiration si besoin, Sécher, Stimuler).</p>' +
        '<div class="tw"><table><thead><tr><th>HbCO (RAD-57)</th><th>Signes</th><th>Traitement préhospitalier</th></tr></thead><tbody>' +
        '<tr><td>0-4 %</td><td>Aucun (fumeur : 3 à 5 % en plus)</td><td>Aucun (normal pour un non-fumeur)</td></tr><tr><td>5-9 %</td><td>Maux de tête modérés</td><td>Aucun (normal pour un fumeur)</td></tr><tr><td>10-19 %</td><td>Maux de tête, essoufflement</td><td>Vérifier ventilation et circulation ; O₂ 100 % ; envisager transport</td></tr><tr><td>20-29 %</td><td>Maux de tête, nausées, fatigue, désorientation</td><td>O₂ 100 %, transport ; envisager caisson hyperbare</td></tr><tr><td>30-39 %</td><td>Maux de tête sévères, vomissements, vertiges, perte de connaissance</td><td>O₂ 100 %, transport, caisson hyperbare</td></tr><tr><td>40-49 %</td><td>Confusion, syncope, tachycardie</td><td>idem</td></tr><tr><td>50-59 %</td><td>Convulsion, choc, apnée</td><td>idem</td></tr><tr><td>60 % et plus</td><td>Arythmies, coma, mort</td><td>idem</td></tr></tbody></table></div>',
      figs: [{ img: 'img/cav-2/memento-ssuap.jpg', cap: 'Mémento SSUAP : tableau RCP et administration d’oxygène', txt: '<p>Remarque les cellules fusionnées : la FR 40-60 et la FC 120-160 valent pour le nouveau-né et la naissance ; la technique à deux pouces vaut du nourrisson à la naissance.</p>', src: 'Mémento SSUAP, p. 1' }] },
    { id: 'diff', t: 'Mémento SSUAP ou Mémento SUAP v2024-03 : qu’est-ce qui diffère ?', ic: 'bulb', src: 'Comparaison page à page des deux PDF (Mémento SSUAP du dossier CA, 30/05/2024 ; Mémento SUAP v2024-03 du dossier Formateur, 19/03/2024)',
      html: '<p>Les deux mémentos ont la même mise en page (4 pages A3) et le même contenu ; la comparaison des pages ne montre <b>qu’une seule différence</b>, dans le tableau « Administration d’oxygène par inhalation » :</p>' +
        '<div class="tw"><table><thead><tr><th>Ligne</th><th>Mémento SUAP v2024-03 (Formateur, mars 2024)</th><th>Mémento SSUAP (Chef d’agrès, mai 2024)</th><th>Mémo B</th></tr></thead><tbody>' +
        '<tr><td>SpO₂ &lt; 94 % (objectif 94-98 %)</td><td>15 L/min puis ajuster de <b>10 à 15 L/min</b></td><td>15 L/min puis ajuster de <b>9 à 15 L/min</b></td><td>9 à 15 L/min</td></tr>' +
        '<tr><td>IRC, SpO₂ &lt; 89 % (objectif 89-92 %)</td><td>ajuster de <b>10 à 15 L/min</b></td><td>ajuster de <b>9 à 15 L/min</b></td><td>9 à 15 L/min</td></tr></tbody></table></div>' +
        '<div class="callout warn">La borne basse d’ajustement du débit d’O₂ est de <b>10 L/min</b> dans la version v2024-03 et de <b>9 L/min</b> dans la version de mai 2024 et dans le Mémo B. Le chapitre ne tranche pas : vérifie la version en vigueur dans ton centre.</div>' }
  ],
  key: ['FR : adulte 12-20, enfant 20-30, nourrisson 30-40, nouveau-né 40-60.', 'FC : adulte 60-100, enfant 70-140, nourrisson 100-160, nouveau-né 120-160.', 'Primaire 10 s, secondaire 1 min ; F-A-R-S.', 'SpO₂ < 94 % (IRC < 89 %) : 15 L/min puis ajuster (9 ou 10 à 15 L/min selon la version).', 'TRC > 3 s ; boîtes à sang : thorax, abdomen, bassin, cuisses.', 'Glasgow 3 à 15 ; AVPU = EVDA.', 'Glycémie : 80-120 ; hypo < 60 adulte, < 50 de 2 à 15 ans.'],
  traps: ['Appliquer les normes adultes à un nourrisson.', 'Oublier qu’un mémento a deux versions qui diffèrent sur la borne basse du débit d’O₂.', 'Confondre « pouls périphérique » et « pouls central » au bilan primaire.'],
  quiz: [
    { q: 'FR normale d’un enfant (1 an à la puberté) :', c: ['20 à 30 mvts/min', '12 à 20 mvts/min', '30 à 40 mvts/min', '40 à 60 mvts/min'], e: 'Mémo B / Mémento.', s: 'normes' },
    { q: 'FC normale d’un nourrisson :', c: ['100 à 160 bat/min', '60 à 100 bat/min', '70 à 140 bat/min', '120 à 160 bat/min'], e: 'Mémo C : nourrisson 100 à 160 ; nouveau-né 120 à 160.', s: 'normes' },
    { q: 'Critère « régularité » de la respiration selon le mémo B :', c: ['Pas plus de 6 secondes entre deux mouvements', 'Pas plus de 10 secondes', 'Exactement 12 mouvements par minute', 'Symétrie du thorax'], e: 'Régularité : l’absence de plus de 6 secondes entre les mouvements respiratoires.', s: 'normes' },
    { q: 'Que signifie THC dans le mémo C ?', c: ['Température, Humidité, Coloration de la peau', 'Tension, Hémorragie, Conscience', 'Thorax, Hanches, Cuisses', 'TRC, Hypoxie, Cyanose'], e: 'Aspect de la peau : extrémités froides, sueurs, pâleur / marbrures.', s: 'memo-c' },
    { q: 'Quelles sont les « boîtes à sang » ?', c: ['Thorax, abdomen, bassin, cuisses', 'Crâne, cou, bras', 'Mains, pieds, visage', 'Dos et épaules'], e: 'Zones à observer et palper à la recherche d’une hémorragie interne.', s: 'memo-c' },
    { q: 'Seuil d’hypoglycémie chez un enfant de 2 à 15 ans (mémo D) :', c: ['< 50 mg/dl', '< 60 mg/dl', '< 80 mg/dl', '< 40 mg/dl'], e: 'Adulte < 60 mg/dl ; 2 à 15 ans < 50 mg/dl.', s: 'memo-d' },
    { q: 'Quelle est la seule différence entre le Mémento SSUAP (mai 2024) et le Mémento SUAP v2024-03 ?', c: ['La borne basse d’ajustement du débit d’O₂ (9 ou 10 L/min)', 'Le rapport compressions/insufflations', 'Les normes de FC', 'Le score de Glasgow'], e: '9 à 15 L/min (SSUAP mai 2024, Mémo B) contre 10 à 15 L/min (v2024-03).', s: 'diff' },
    { q: 'RAD-57 : HbCO entre 20 et 29 %. Conduite indiquée ?', c: ['O₂ 100 %, transport, envisager caisson hyperbare', 'Aucun traitement', 'Laisser sur place', 'O₂ 2 L/min'], e: 'Mémento : vérifier ventilation et circulation, 100 % oxygène, transport, envisager caisson hyperbare.', s: 'memento' }
  ]
});

/* ===================================================================================== L’essentiel */
VSAV.ess([
  { t: 'Chef d’agrès VSAV — Procédures v2', ic: 'star', items: [
    { k: 'Défénestré', v: 'CA : point de chute <b>puis point de saut</b> (multi-gaz) ; renfort <b>≥ chef de groupe</b>', go: 'cav-securite-pti/saut' },
    { k: 'PTI', v: 'Cheminement unique le long des murs ; corde coupée <b>sans défaire le nœud</b>', go: 'cav-securite-pti/pti-comment' },
    { k: 'ACR : pouls sans ventilation', v: '<b>10</b>/min adulte · <b>15-20</b> enfant · <b>25-30</b> nourrisson', go: 'cav-acr/evolution' },
    { k: 'Détresse circulatoire', v: 'PAS <b>&lt; 90</b> mmHg (−30 % HTA) · FC <b>&gt; 120 / &lt; 40</b> · TRC <b>&gt; 3 s</b>', go: 'cav-detresses/seuils' },
    { k: 'Détresse respiratoire', v: 'FR <b>&gt; 30</b> · SpO₂ <b>&lt; 94 %</b> (<b>&lt; 89 %</b> IRC) · jamais allongée', go: 'cav-detresses/seuils' },
    { k: 'Zone non garrotable', v: 'aine, aisselle, fesses, tronc, cou, tête → <b>pansement hémostatique</b>', go: 'cav-hemorragie/garrot' },
    { k: 'AVC', v: 'Infarctus <b>85 %</b>, traitement si <b>2-3 h</b> ; AIT <b>&lt; 1 h</b> ; NIHSS avec la régulation', go: 'cav-avc-hypo/avc-meca' },
    { k: 'Hypoglycémie', v: '<b>&lt; 60 mg/dl</b> (norme 80-120) ; 2e dose à <b>15 min</b>', go: 'cav-avc-hypo/hypo-cat' },
    { k: 'Noyade en ACR', v: '<b>5</b> insufflations initiales, O₂ <b>15 L/min</b>, jamais de désobstruction', go: 'cav-noyade-pendaison/noy-specif' },
    { k: 'Victime casquée sur le ventre', v: 'Inconsciente : retournement d’urgence à <b>2</b> ; consciente : à <b>3</b> à même le sol', go: 'cav-casque-sr/casque' }
  ] },
  { t: 'Chef d’agrès VSAV — Notes de service et mémos', ic: 'clip', items: [
    { k: 'UA / UR', v: 'UA = <b>≥ 1 criticité</b> XABCDE ; critique D : Glasgow <b>≤ 12</b>', go: 'cav-categorisation/criticite' },
    { k: 'NOVI (SINUS)', v: 'dès <b>6</b> victimes : décédée (dont ACR), UA, UR, impliquée', go: 'cav-categorisation/novi' },
    { k: 'Message d’ambiance', v: 'status <b>3</b> + voix, <b>5 min</b> max après l’arrivée', go: 'cav-remontee-info/status' },
    { k: 'Moyens médicalisés', v: 'CA → <b>CRRA 15</b> directement (03.26.27.15.15), demande motivée', go: 'cav-remontee-info/suap' },
    { k: 'Attente au CH', v: '<b>&gt; 20 min</b> : téléphone au CTA-CODIS', go: 'cav-remontee-info/suap' },
    { k: 'Bilan', v: 'Obligatoire (sauf impliqués), secret médical ; fiches au P2SH <b>chaque mois</b>', go: 'cav-bilan-bpv/contenu' },
    { k: 'Refus de transport', v: '<b>2</b> exemplaires, témoins ; impossible sous tutelle/curatelle ou mineur seul', go: 'cav-transport/refus-cas' },
    { k: 'Perfusion (NDS 300)', v: 'Pas de VSAV seul sauf <b>clampée</b>, bouchon, ou accord du régulateur', go: 'cav-transport/perfuses' },
    { k: 'Maltraitance', v: 'Régulateur + <b>IAO</b> + CRSS + fiche de signalement visée', go: 'cav-signalements/procedure' },
    { k: 'O₂ (mémentos)', v: '15 L/min puis <b>9</b> à 15 (mai 2024, mémo B) ou <b>10</b> à 15 (v2024-03)', go: 'cav-memos/diff' }
  ] }
]);
