/* SOCLE TRANSVERSE — prérequis du module transverse (MAJ 05/2024) */
var SOC = 'Prérequis du module transverse';

VSAV.chap({
  id: 'hemorragies', part: 'socle', seq: SOC, title: 'Hémorragies externes : compression, pansement compressif, garrot', short: 'Hémorragies externes', motif: 'drop', accent: '#b91c1c',
  sources: ['PR - Hémorragie externe (MAJ 05/2024)', 'FT - Compression manuelle', 'FT - Pansement compressif', 'FT - Le garrot'],
  summary: 'Le X du bilan : arrêter immédiatement le saignement et le maintenir arrêté.',
  why: '<b>Pourquoi le X passe avant tout ?</b> Le sang transporte l’oxygène : une hémorragie importante vide la « réserve » en quelques minutes et rend inutiles tous les autres gestes. La plupart des hémorragies s’arrêtent simplement en <b>appuyant sur la plaie</b> ; le garrot est réservé aux cas où la compression est inefficace ou impossible.',
  sections: [
    { id: 'logigramme', t: 'Le logigramme', ic: 'drop', src: 'PR - Hémorragie externe',
      html: '<p>Se protéger (gants), allonger la victime, observer la plaie. Os ou corps étranger visible : <b>ne pas y toucher</b> (ils peuvent limiter le saignement) ; saignement important et massif → garrot.</p>',
      figs: [{ svg: 'hemorragie', cap: 'Arrêter une hémorragie externe', txt: '<p>Toujours terminer par : O₂ en inhalation quelle que soit la SpO₂, poursuite du bilan primaire, surveillance, lutte contre l’hypothermie.</p>', src: 'PR - Hémorragie externe, p. 2' }, { img: 'img/fiches/hemorragie-logigramme.jpg', cap: 'Logigramme original', txt: '', src: 'PR - Hémorragie externe, p. 2' }] },
    { id: 'compression', t: 'Compression manuelle', ic: 'hand', src: 'FT - Compression manuelle',
      html: '<p>Toute hémorragie externe accessible <b>sans corps étranger</b>. Technique facile, rapide, très efficace dans la plupart des cas.</p>',
      steps: ['Appuyer fortement sur l’endroit qui saigne, main protégée par un gant.', 'Interposer dès que possible plusieurs compresses, un pansement ou un tissu propre.', 'Maintenir jusqu’au relais par un pansement compressif (la victime peut appuyer elle-même si elle en est capable, ex. nombreuses victimes).'],
      after: '<p class="small">Risque d’AEV (contamination). Compression parfois à prolonger chez les personnes sous médicaments fluidifiant le sang.</p>' },
    { id: 'pansement', t: 'Pansement compressif', ic: 'list', src: 'FT - Pansement compressif',
      html: '<p>Relaie une compression manuelle efficace quand la localisation le permet (libère le secouriste). Bande <b>élastique</b> indispensable pour une pression suffisante. Substitution la plus rapide possible.</p><p><b>Pansement compressif d’urgence :</b> compresse sur la plaie, un tour, bande passée dans la languette (applicateur de pression), tendue en sens inverse, enroulée serrée, fixée par les crochets.</p><p><b>Zones non garrotables</b> : contre-appui osseux opposé — cou (aisselle opposée), aisselle (collier cervical), fesse et pli inguinal (bassin), cuir chevelu (menton).</p><div class="callout warn"><b>Surveiller l’extrémité</b>Douleur importante, extrémité froide, engourdie ou violacée → avis médical rapide. Cou, thorax, abdomen : compression parfois insuffisante → maintenir la compression manuelle.</div>' },
    { id: 'garrot', t: 'Le garrot', ic: 'alert', src: 'FT - Le garrot',
      html: '<p>Quand la compression est <b>inefficace ou impossible</b> : nombreuses lésions, plusieurs victimes, plaie inaccessible, corps étranger, situations particulières (catastrophe, isolement…). <b>Uniquement aux membres.</b> Il interrompt totalement la circulation en amont.</p>',
      figs: [{ svg: 'garrot', cap: 'Où poser le garrot ?', txt: '<p>À quelques centimètres de la plaie (idéalement 5 à 7 cm), entre la plaie et la racine du membre, jamais sur une articulation.</p>', src: 'FT - Le garrot' }],
      steps: ['Glisser la sangle autour du membre, à 5–7 cm de la plaie, entre la plaie et la racine, jamais sur une articulation.', 'Passer la sangle dans la boucle pour qu’elle entoure le membre.', 'Actionner le serrage jusqu’à l’arrêt du saignement, puis le bloquer (dispositif à l’extérieur du membre).', 'Laisser le garrot visible de préférence (sinon vérifier souvent son efficacité).', 'Noter l’heure de pose : sur le garrot, la fiche, voire le front (nombreuses victimes).'], stepsTitle: 'Garrot spécifique',
      after: '<ul class="trap"><li>Ne se desserre que sur ordre d’un médecin.</li><li>Saignement persistant : resserrer ; sinon 2e garrot entre le 1er et la racine et/ou pansement hémostatique + pansement compressif.</li><li>Impossible au cou ou trop près de la racine (aine, aisselle) : compression manuelle ou pansement compressif avec contre-appui.</li><li>Garrot improvisé : lien de toile 3 à 5 cm de large et 1,50 m minimum, bâton solide en tourniquet.</li></ul>' }
  ],
  key: ['Gants ; allonger ; compression manuelle directe d’abord.', 'Compression impossible / inefficace en zone garrotable → garrot.', 'Garrot : 5–7 cm au-dessus, entre plaie et racine, jamais sur une articulation, heure notée.', 'Garrot desserré seulement sur ordre médical.', 'Zone non garrotable : pansement compressif avec contre-appui ou packing hémostatique.', 'O₂ quelle que soit la SpO₂ + lutte contre l’hypothermie.'],
  memo: ['Compression manuelle → pansement compressif', 'Garrot : 5–7 cm au-dessus de la plaie, jamais sur articulation', 'Noter l’heure ; desserrage = médecin', 'Inefficace : resserrer, 2e garrot, hémostatique', 'Corps étranger / os visible : ne pas y toucher', 'O₂ quelle que soit la SpO₂'],
  traps: ['Retirer un corps étranger d’une plaie qui saigne.', 'Poser le garrot sur le coude ou le genou.', 'Desserrer le garrot pour « vérifier ».', 'Oublier de noter l’heure de pose.'],
  quiz: [
    { q: 'Distance idéale entre la plaie et le garrot :', c: ['5 à 7 cm', '1 cm', '20 cm', 'À la racine du membre systématiquement'], e: 'FT Le garrot : à quelques centimètres (idéalement 5 à 7 cm), entre la plaie et la racine.', s: 'garrot' },
    { q: 'Qui peut décider de desserrer un garrot ?', c: ['Un médecin', 'Le secouriste toutes les 20 minutes', 'La victime', 'Le chef d’agrès'], e: 'Une fois posé, il ne doit être desserré que sur ordre d’un médecin.', s: 'garrot' },
    { q: 'Plaie du cou qui saigne abondamment :', c: ['Compression manuelle ou pansement compressif avec contre-appui sur l’aisselle opposée', 'Garrot autour du cou', 'Rien, attendre le médecin', 'Garrot au bras'], e: 'Le garrot est impossible au cou.', s: 'pansement' },
    { q: 'Le garrot reste inefficace après resserrage :', c: ['2e garrot entre le 1er et la racine et/ou pansement hémostatique', 'Retirer le garrot', 'Poser un garrot sous la plaie', 'Lever le membre et attendre'], e: 'FT Le garrot : efficacité.', s: 'garrot' },
    { q: 'Hémorragie avec corps étranger visible dans la plaie :', c: ['Ne pas retirer le corps étranger ; garrot si saignement massif', 'Retirer le corps étranger puis comprimer', 'Comprimer directement sur le corps étranger', 'Ignorer'], e: 'PR Hémorragie externe : cas particuliers.', s: 'logigramme' }
  ]
});

VSAV.chap({
  id: 'lva-pls', part: 'socle', seq: SOC, title: 'Victime inconsciente : LVA, retournement et PLS', short: 'LVA et PLS', motif: 'lungs', accent: '#d97706',
  sources: ['PR - Inconscient sur le dos (MAJ 05/2024)', 'PR - Victime sur le ventre', 'FT - LVA chez une victime non traumatisée', 'FT - PLS à 1 secouriste'],
  summary: 'Choisir la LVA selon la suspicion de traumatisme, puis PLS ou RCP selon la respiration.',
  why: '<b>Pourquoi libérer les voies aériennes ?</b> Chez la victime inconsciente, le tonus musculaire chute : sur le dos, <b>la langue tombe en arrière</b> et bouche le pharynx. La bascule de la tête et l’élévation du menton décollent la langue. La PLS garde les voies aériennes libres en laissant les liquides s’écouler vers l’extérieur.',
  sections: [
    { id: 'dos', t: 'Victime inconsciente sur le dos', ic: 'lungs', src: 'PR - Inconscient sur le dos',
      figs: [{ svg: 'inconscient', cap: 'Logigramme : inconscient sur le dos', txt: '<p>La suspicion d’atteinte du rachis est déterminée par le bilan circonstanciel. Le bilan primaire doit être rapide pour mettre vite la victime en position adaptée.</p>', src: 'PR - Inconscient sur le dos' }] },
    { id: 'ventre', t: 'Victime sur le ventre', ic: 'list', src: 'PR - Victime sur le ventre',
      html: '<p>La position sur le ventre gêne tout : bilan, arrêt d’une hémorragie, retrait de casque, LVA, appréciation de la respiration.</p><ul class="check"><li><b>Consciente</b> : suspicion de rachis → stabilisation occipito-frontale (anticipe le retournement) ; laisser dans la position ; retournement seulement en équipe, sous les ordres du chef d’agrès, avec le matériel adapté.</li><li><b>Inconsciente</b> : retournement d’urgence (à 2 secouristes en équipe, seul si isolé), puis LVA par élévation du menton (suspicion de rachis) ou bascule de tête.</li></ul>' },
    { id: 'lva', t: 'LVA chez la victime non traumatisée', ic: 'lungs', src: 'FT - LVA chez une victime non traumatisée',
      steps: ['Desserrer ou dégrafer tout ce qui gêne la respiration.', 'Paume de la main côté tête sur le front ; 2 ou 3 doigts de l’autre main sous la pointe du menton, sur l’os (pas dans la partie molle).', 'Ramener la tête en position neutre si nécessaire, puis basculer doucement en arrière en élevant le menton.', 'Ouvrir la bouche ; retirer les corps étrangers visibles, y compris les prothèses dentaires décrochées (pas celles en place).'],
      after: '<p><b>Nouveau-né et nourrisson</b> : la bascule se limite à ramener la tête en <b>position neutre</b> (sinon obstruction).</p>' },
    { id: 'pls', t: 'PLS à 1 secouriste', ic: 'team', src: 'FT - PLS à 1 secouriste',
      html: '<p>Victime qui a perdu connaissance, <b>qui respire</b> et <b>non suspecte de traumatisme</b> (traumatisé : PLS à 2 ou plus, tête dans l’axe).</p>',
      steps: ['Préparer : retirer les lunettes, rapprocher les membres inférieurs, bras côté secouriste à angle droit, coude plié paume vers le haut.', 'Amener le dos de la main opposée contre l’oreille côté secouriste et la maintenir paume contre paume.', 'Saisir la jambe opposée derrière le genou et la relever, pied au sol.', 'Tourner : tirer sur la jambe pour faire pivoter la victime vers soi jusqu’à ce que le genou touche le sol, en un seul temps.', 'Dégager doucement la main sous la tête en préservant la bascule (maintenir le coude).', 'Stabiliser : hanche et genou de la jambe du dessus à angle droit ; ouvrir la bouche sans mobiliser la tête.'],
      after: '<p><b>Nourrisson</b> : sur le côté, le plus souvent dans les bras du sauveteur.</p>' }
  ],
  key: ['Suspicion de rachis : élévation du menton + stabilisation ; sinon bascule de la tête.', 'Respire + rachis : rester sur le dos, LVA maintenue, aspirateur prêt.', 'Respire sans rachis : PLS ; ne respire pas : RCP.', 'Inconscient sur le ventre : retournement d’urgence.', 'Nourrisson / nouveau-né : tête en position neutre.', 'PLS : hanche et genou à angle droit, bouche ouverte.'],
  traps: ['Basculer la tête d’un traumatisé.', 'Retirer une prothèse dentaire bien en place.', 'Mettre en PLS à 1 secouriste une victime traumatisée.'],
  quiz: [
    { q: 'Inconscient sur le dos, suspicion de rachis, respire :', c: ['Maintenir la LVA par élévation du menton, laisser sur le dos, aspirateur prêt', 'PLS à 1 secouriste', 'Bascule de la tête en arrière', 'Position assise'], e: 'PR Inconscient sur le dos (branche OUI).', s: 'dos' },
    { q: 'Pourquoi une victime inconsciente sur le dos peut-elle s’obstruer ?', c: ['La langue chute en arrière par perte du tonus', 'Les poumons se ferment', 'Le cœur ralentit', 'Elle avale sa langue'], e: 'FT LVA : diminution du tonus musculaire.', s: 'lva' },
    { q: 'LVA chez le nourrisson :', c: ['Ramener la tête en position neutre', 'Bascule maximale de la tête', 'Tête fléchie sur la poitrine', 'Aucune LVA'], e: 'Du fait de leur anatomie, sinon obstruction.', s: 'lva' },
    { q: 'Fin de la PLS : la jambe du dessus est placée…', c: ['Hanche et genou à angle droit', 'Tendue', 'Repliée sous l’autre', 'Sur la poitrine'], e: 'FT PLS à 1 secouriste : stabilité de la position.', s: 'pls' }
  ]
});

VSAV.chap({
  id: 'ova', part: 'socle', seq: SOC, title: 'Obstruction des voies aériennes (OVA)', short: 'Obstruction des voies aériennes', motif: 'lungs', accent: '#ea580c',
  sources: ['PR - OVA complète ou partielle (MAJ 05/2024)', 'FT - Désobstruction par la méthode des claques dans le dos', 'FT - Désobstruction par la méthode des compressions abdominales'],
  summary: 'Complète : claques puis compressions. Partielle : jamais de désobstruction.',
  why: '<b>Pourquoi ne pas désobstruer une obstruction partielle ?</b> Si l’air passe encore, la toux est le meilleur moyen d’expulser le corps étranger ; une manœuvre pourrait le déplacer et rendre l’obstruction complète. À l’inverse, l’obstruction complète tue en quelques minutes : claques et compressions créent un « effet piston » pour chasser le corps étranger.',
  sections: [
    { id: 'logigramme', t: 'Complète ou partielle ?', ic: 'lungs', src: 'PR - OVA complète ou partielle',
      figs: [{ svg: 'ova', cap: 'Logigramme OVA', txt: '<p>Partielle : position préférée, encourager la toux, O₂, poursuivre le bilan, surveiller. Désobstruer si toux inefficace avec fatigue, obstruction devenue complète ou arrêt de la respiration.</p>', src: 'PR - OVA complète ou partielle' }] },
    { id: 'claques', t: 'Claques dans le dos', ic: 'hand', src: 'FT - Claques dans le dos',
      steps: ['Adulte / grand enfant : debout ou assis ; se placer sur le côté et légèrement en arrière, soutenir le thorax, pencher la victime en avant.', 'Donner 1 à 5 claques vigoureuses entre les omoplates avec le talon de la main ouverte.', 'Arrêter dès que la désobstruction est obtenue.', 'Enfant tenant sur la cuisse : assis, l’enfant à plat ventre sur la cuisse, face vers le bas, 1 à 5 claques.', 'Nourrisson (sur l’avant-bras) : à califourchon face vers le sol, tête maintenue par l’angle de la mâchoire sans appuyer sur la gorge, tête plus basse que le thorax, 1 à 5 claques.'] },
    { id: 'abdominales', t: 'Compressions abdominales (adulte, enfant)', ic: 'hand', src: 'FT - Compressions abdominales',
      steps: ['Après 5 claques inefficaces, si l’on peut se tenir derrière la victime (debout ou à genoux pour un enfant).', 'Bras sous ceux de la victime, la pencher en avant.', 'Poing au creux de l’estomac, juste au-dessus du nombril ; l’autre main dessus ; avant-bras sans appui sur les côtes.', 'Tirer franchement vers l’arrière et vers le haut : 1 à 5 compressions, en relâchant entre chaque.', 'Arrêter dès que la désobstruction est obtenue.'],
      after: '<p><b>Efficacité :</b> rejet du corps étranger, toux (adulte), pleurs ou cris (enfant, nourrisson), reprise d’une respiration normale. Risque de lésions internes : ne pas diminuer la vigueur pour autant. Perte de connaissance → RCP.</p>' }
  ],
  key: ['Partielle : jamais de désobstruction ; tousser, position préférée, O₂.', 'Complète : 1 à 5 claques dans le dos, puis 1 à 5 compressions abdominales.', 'Nourrisson : sur l’avant-bras, tête plus basse que le thorax.', 'Perte de connaissance → RCP (effet piston des compressions).'],
  traps: ['Taper dans le dos d’une victime qui tousse efficacement.', 'Appuyer les avant-bras sur les côtes.'],
  quiz: [
    { q: 'Obstruction partielle (la victime tousse) :', c: ['Encourager la toux, position préférée, O₂, ne pas désobstruer', 'Claques dans le dos immédiates', 'Compressions abdominales', 'Faire boire de l’eau'], e: 'PR OVA : ne jamais pratiquer de techniques de désobstruction.', s: 'logigramme' },
    { q: 'Combien de claques dans le dos par série ?', c: ['1 à 5', '10', '30', '2'], e: 'FT Claques dans le dos.', s: 'claques' },
    { q: 'Position du poing pour les compressions abdominales :', c: ['Au creux de l’estomac, juste au-dessus du nombril', 'Sur le sternum', 'Sous le nombril', 'Sur les côtes'], e: 'FT Compressions abdominales.', s: 'abdominales' },
    { q: 'La victime d’OVA perd connaissance :', c: ['Appliquer la procédure RCP', 'Continuer les claques', 'PLS', 'Attendre'], e: 'PR OVA.', s: 'logigramme' }
  ]
});

VSAV.chap({
  id: 'oxygene', part: 'socle', seq: SOC, title: 'Administration d’oxygène par inhalation', short: 'Oxygène par inhalation', motif: 'bottle', accent: '#0369a1',
  sources: ['FT - Administration d’oxygène par inhalation (MAJ 05/2024)', 'Mémento SSUAP', 'Memo B (A6)'],
  summary: 'Indications, dispositifs (MHC, masque simple, lunettes), débits et objectifs de SpO₂.',
  why: '<b>Pourquoi ne pas mettre de l’O₂ à tout le monde ?</b> Il faut <b>lutter contre l’hypoxie sans entraîner d’hyperoxie</b> : l’excès d’O₂ peut être néfaste (AVC, maladie cardiaque avec O₂ sanguin normal) et dangereux chez l’insuffisant respiratoire chronique avancé. D’où le pilotage par la SpO₂, sauf détresse ou intoxications où l’O₂ est systématique.',
  sections: [
    { id: 'indications', t: 'Indications', ic: 'bottle', src: 'FT - Administration d’oxygène par inhalation',
      html: '<p>Victime qui <b>respire</b> (FR &gt; 6/min) et présente :</p><ul class="check"><li>une détresse respiratoire ou circulatoire ;</li><li>une intoxication aux fumées d’incendie ou au CO ;</li><li>un accident lié à la plongée ;</li><li>une SpO₂ &lt; 94 % (&lt; 89 % chez l’insuffisant respiratoire chronique) ;</li><li>une crise douloureuse chez un drépanocytaire.</li></ul><p>SpO₂ non mesurable (extrémités froides, panne) + détresse vitale : O₂ systématique dans l’attente d’un avis médical.</p>',
      figs: [{ anim: 'o2', cap: 'Simulateur : quel débit d’oxygène ?', txt: '<p>Choisis la situation et la SpO₂ : l’outil applique les règles du mémento et du memo B.</p>', src: 'Mémento SSUAP · Memo B · FT Inhalation' }] },
    { id: 'dispositifs', t: 'Dispositifs et débits', ic: 'list', src: 'FT - Administration d’oxygène par inhalation',
      html: '<div class="tw"><table><tr><th></th><th>MHC (haute concentration)</th><th>Masque simple</th><th>Lunettes</th></tr><tr><td>Plage</td><td>9 à 15 L/min</td><td>6 à 9 L/min</td><td>1 à 6 L/min</td></tr><tr><td>Débit initial</td><td>15 L/min</td><td>9 L/min</td><td>1–2 L/min, ou 2 L/min de plus que le débit habituel</td></tr><tr><td>Concentration</td><td>60 à 90 % (9–15 L/min)</td><td>40 à 60 % (5–10 L/min)</td><td>basse à modérée</td></tr><tr><td>Usage</td><td>Détresse vitale d’emblée ; SpO₂ 94–98 % ; jamais &lt; 6 L/min</td><td>&lt; 5 L/min : résistance, réinhalation du CO₂</td><td>IRC aggravée (SpO₂ 89–94 %), si possible sur avis médical ; irritation &gt; 4 L/min</td></tr></table></div><p><b>Objectifs de saturation :</b> 94 à 98 % (adulte, enfant, nourrisson) ; 89 à 92 % chez l’insuffisant respiratoire chronique.</p><p><b>Technique :</b> ouvrir la bouteille, relier le tuyau, MHC d’emblée si détresse, débit initial, remplir le ballon réserve du MHC en obturant la valve avec les doigts, poser le masque, ajuster selon la SpO₂, surveiller.</p><div class="callout bad"><b>Interdit</b>L’insufflateur manuel (avec ou sans ballon-réserve) n’est jamais un moyen d’inhalation.</div>' }
  ],
  key: ['Inhalation = victime qui respire (FR > 6).', 'Détresse respiratoire / circulatoire, CO, fumées, plongée : MHC 15 L/min quelle que soit la SpO₂.', 'SpO₂ < 94 % → 15 L/min puis 9–15 (objectif 94–98 %).', 'IRC < 89 % → objectif 89–92 %.', 'MHC jamais < 6 L/min ; remplir le ballon réserve avant de poser.', 'Lutter contre l’hypoxie sans hyperoxie.'],
  traps: ['Utiliser un BAVU comme masque d’inhalation.', 'MHC à 3 L/min.', 'Viser 98 % chez un insuffisant respiratoire chronique.'],
  quiz: [
    { q: 'Plage de débit du MHC :', c: ['9 à 15 L/min', '1 à 6 L/min', '6 à 9 L/min', '20 à 25 L/min'], e: 'FT Inhalation, tableau 15.', s: 'dispositifs' },
    { q: 'Objectif de SpO₂ chez l’insuffisant respiratoire chronique :', c: ['89 à 92 %', '94 à 98 %', '100 %', '80 à 85 %'], e: 'Tableau 16.', s: 'dispositifs' },
    { q: 'Intoxication au CO :', c: ['MHC 15 L/min quelle que soit la SpO₂', 'Selon la SpO₂', 'Lunettes 2 L/min', 'Pas d’O₂'], e: 'Cas particuliers de la FT : fumées, CO, accident de décompression.', s: 'indications' },
    { q: 'Avant de poser le MHC :', c: ['Remplir le ballon réserve en obturant la valve avec les doigts', 'Vider le ballon réserve', 'Régler à 3 L/min', 'Humidifier le masque'], e: 'FT Inhalation : comment.', s: 'dispositifs' }
  ]
});

VSAV.chap({
  id: 'brulures', part: 'socle', seq: SOC, title: 'Les brûlures', short: 'Brûlures', motif: 'flame', accent: '#dc2626',
  sources: ['PR - Les brûlures (MAJ 05/2024)', 'PR - Bilan secondaire (score de Wallace)'],
  summary: 'Thermique, chimique, électrique, interne : refroidir, protéger, évaluer la gravité.',
  why: '<b>Pourquoi refroidir vite ?</b> Même après la suppression de la cause, la brûlure continue de s’étendre en profondeur et en surface. L’eau tempérée (15 à 25 °C) stoppe ce processus et soulage. Mais sur une grande surface ou chez une victime en détresse circulatoire, l’arrosage peut provoquer une hypothermie : d’où les conditions strictes.',
  sections: [
    { id: 'thermique', t: 'Brûlure thermique', ic: 'flame', src: 'PR - Les brûlures',
      html: '<p>Vêtements en feu : empêcher de courir, rouler la victime au sol, étouffer avec un vêtement ou une couverture (mouillé si possible).</p><div class="callout info"><b>Conditions du refroidissement (eau 15–25 °C, sans pression)</b>Brûlure de moins de 30 minutes <b>et</b> victime consciente <b>et</b> sans détresse circulatoire <b>et</b> surface &lt; 20 % (adulte) ou &lt; 10 % (enfant, nourrisson). À défaut d’eau : compresses enduites de gel d’eau.</div><p>Retirer les vêtements le plus tôt possible (sans ôter ceux qui adhèrent), bijoux, montres, ceintures avant le gonflement.</p><div class="tw"><table><tr><th>Brûlure grave</th><th>Brûlure simple</th></tr><tr><td>Arroser 10 min minimum, idéalement 20 ; traiter la détresse ; ne pas percer les cloques ; protéger (pansement / champ stérile / film plastique non adhésif ; drap stérile si très étendue) ; couverture isotherme (hypothermie rapide) ; rechercher surface, localisation, circonstances, traces noires narines / bouche / langue, voix rauque</td><td>Arroser jusqu’à disparition de la douleur ; ne pas percer les cloques ; pansement stérile ou film plastique non adhésif ; poursuivre le bilan</td></tr></table></div>',
      figs: [{ img: 'img/fiches/wallace.jpg', cap: 'Estimer la surface : score de Wallace', txt: '<p>Schéma de la fiche bilan secondaire (pourcentages par région, faces antérieure et postérieure).</p>', src: 'PR - Bilan secondaire, p. 4' }] },
    { id: 'autres', t: 'Brûlures chimiques, électriques, internes', ic: 'skull', src: 'PR - Les brûlures',
      html: '<ul class="check"><li><b>Chimique</b> : supprimer la cause ; ôter (en se protégeant) vêtements et chaussures imbibés ; laver à grande eau tempérée (15–25 °C) au moins <b>20 minutes</b> ; œil : maintenir ouvert, rincer abondamment sans que l’eau coule sur l’autre œil.</li><li><b>Électrique</b> : ne jamais toucher avant la suppression du risque ; détresse → conduite adaptée ; rechercher points d’entrée et de sortie ; traiter comme une brûlure thermique.</li><li><b>Interne par ingestion</b> : sur le côté, ne jamais faire vomir ni boire, garder l’emballage et le produit.</li><li><b>Interne par inhalation</b> (fumées, produits chimiques) : lutter contre la détresse respiratoire, surveillance permanente.</li></ul>' }
  ],
  key: ['Eau tempérée 15–25 °C, sans pression.', 'Refroidir si < 30 min, consciente, sans détresse circulatoire, < 20 % adulte / < 10 % enfant.', 'Grave : 10 min minimum (idéal 20) puis protéger, couverture isotherme.', 'Chimique : lavage ≥ 20 min.', 'Ne jamais percer les cloques.', 'Signes d’inhalation : traces noires, voix rauque.'],
  traps: ['Arroser une brûlure étendue chez un enfant en état de choc.', 'Arracher les vêtements collés à la peau.', 'Faire vomir après ingestion d’un caustique.'],
  quiz: [
    { q: 'Température de l’eau de refroidissement :', c: ['15 à 25 °C', '0 à 5 °C', '37 °C', '40 °C'], e: 'PR Brûlures.', s: 'thermique' },
    { q: 'Brûlure de 15 % chez un enfant : refroidissement par arrosage ?', c: ['Non, la limite est 10 % chez l’enfant', 'Oui, sans limite', 'Oui, limite 20 %', 'Seulement avec de la glace'], e: 'Surface < 20 % adulte, < 10 % enfant ou nourrisson.', s: 'thermique' },
    { q: 'Durée minimale de lavage d’une brûlure chimique :', c: ['20 minutes', '2 minutes', '5 minutes', '1 heure'], e: 'PR Brûlures : vingt minutes au moins.', s: 'autres' },
    { q: 'Brûlure grave : durée d’arrosage ?', c: ['10 minutes minimum, idéalement 20', 'Jusqu’à l’hôpital', '1 minute', 'Pas d’arrosage'], e: 'PR Brûlures : brûlure grave.', s: 'thermique' }
  ]
});
