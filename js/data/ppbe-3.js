/* PPBE — fichier 3 : dossier stagiaire Chef d’agrès PPBE (APIS)
   Sources : documents de révision pré-stage CA PPBE (diaporamas « Responsabilités du CA », « Relation médias », « Transmissions » MAJ 1 janv. 2022,
   « Conduite » MAJ 2 janv. 2023) ; notes de service SDIS 51 du dossier « note de service SDIS51-CA PPBE MAJ 02-2022 » :
   NDS 064, note « Intoxication au CO », NDS 119 (détecteur Explo/CO), NDS 031, NDS 240 bis, NDS 095 modifiée, NDS 105, NDS 161, NDS 175 modifiée,
   NDS 216, NDS 258, note opérationnelle 8 modifiée, POP 15, POP 19. */
var PP5 = 'PPBE 5 — Chef d’agrès PPBE (dossier stagiaire)';
var CARESP = 'Diaporama « Responsabilités du chef d’agrès » (pré-stage CA PPBE, MAJ 1, janv. 2022)';
var CAMED = 'Diaporama « Relation médias » (pré-stage CA PPBE, MAJ 1, janv. 2022)';
var CATRANS = 'Diaporama « Transmissions » (pré-stage CA PPBE, MAJ 1, janv. 2022)';
var CACOND = 'Diaporama « Conduite des véhicules en intervention » (pré-stage CA PPBE, MAJ 2, janv. 2023)';
var N095 = 'NDS 095 modifiée — gestion opérationnelle, remontée d’information (SDIS 51, 2017) et annexes';
var N216 = 'NDS 216 — conduite des véhicules du SDIS (22/01/2016)';
var N258 = 'NDS 258 — contraventions impliquant un véhicule de service (SDIS 51)';
var N161 = 'NDS 161 — interventions urgentes nécessitant une ouverture de porte (2014) et fiche d’aide à la décision';
var POP15 = 'POP 15 — ouverture de porte (indice 03, 09/02/2023) et avis de passage (07/2023)';
var N031 = 'NDS 031 — destruction d’hyménoptères (23/03/2009) et modèle de demande';
var N240 = 'NDS 240 bis — destruction d’hyménoptères, frelons asiatiques (06/02/2019)';
var N175 = 'NDS 175 modifiée — réquisitions, facturation d’interventions (20/01/2016)';
var N105 = 'NDS 105 — prise en charge des animaux blessés (2012)';
var N064 = 'NDS 064 — interventions en prompt secours (04/03/2010)';
var NCO = 'Note de service « Intoxication au CO » (SDIS 51, 18/02/2011)';
var N119 = 'NDS 119 — appareil de détection Explo/CO et fiche descriptive n° 10 (2012)';
var POP19 = 'POP 19 — signalement du constat d’insalubrité (indice 02, 25/10/2022) ; note opérationnelle 8 modifiée (02/02/2018)';

/* =====================================================================================
   CHAPITRE 15 — RESPONSABILITÉS DU CHEF D’AGRÈS ET MÉDIAS
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-ca-responsabilites', part: 'ppbe', seq: PP5,
  title: 'Les responsabilités du chef d’agrès et la relation avec les médias', short: 'Responsabilités du CA', motif: 'book',
  sources: [CARESP, CAMED],
  summary: 'Le chef d’agrès assume la responsabilité de l’intervention : devoir de réserve, discrétion, secret professionnel, notions de faute et de responsabilité, et conduite face à la presse.',
  why: '<b>Pourquoi un chef d’agrès doit-il connaître le droit ?</b> Parce que « la responsabilité de l’intervention et de tout ce qui s’y rapporte incombe au chef d’agrès » : il répond des actions qu’il commande, du choix des techniques et de la mise en œuvre des matériels. <b>La confiance n’exclut pas le contrôle.</b> Une omission (ne pas surveiller, ne pas contrôler) peut suffire à engager sa responsabilité pénale.',
  sections: [
    { id: 'devoirs', t: 'Réserve, discrétion, secret', ic: 'shield', src: CARESP + ', diapos 2-9',
      html: '<div class="tw"><table><thead><tr><th>Obligation</th><th>Contenu</th></tr></thead><tbody>' +
        '<tr><td><b>Devoir de réserve</b></td><td>Porte sur la manifestation d’une opinion : mesure dans l’expression, pas de propos calomnieux ou outranciers sur le service, en service comme en dehors.</td></tr>' +
        '<tr><td><b>Discrétion professionnelle</b></td><td>Protège l’administration contre la divulgation d’informations relatives au service ; un manquement peut appeler une sanction disciplinaire.</td></tr>' +
        '<tr><td><b>Secret professionnel</b></td><td>Notion <b>strictement pénale</b> : taire toutes les informations et faits confidentiels connus à l’occasion de la mission.</td></tr>' +
        '</tbody></table></div>' +
        '<p><b>Sont couverts</b> : en SUAP, l’état de santé de la victime ; sa vie privée (mœurs, religion, habitudes, identité) ; le lieu d’intervention s’il est privé et son état (sous réserve de la procédure insalubrité) ; la nature de l’intervention. <b>Vis-à-vis de</b> : l’employeur de la victime (+++), l’entourage, la famille, la presse, la famille et les collègues du sapeur-pompier, l’autorité hiérarchique, la police et la gendarmerie.</p>' +
        '<p><b>Peut être révélé</b> : pour partager l’information avec d’autres intervenants si la mission l’exige ; pour la fiche bilan et le CRSS ; pour la défense personnelle d’un sapeur-pompier poursuivi.</p>' },
    { id: 'fautes', t: 'Fautes et responsabilités', ic: 'alert', src: CARESP + ', diapos 10-19',
      html: '<p>La <b>responsabilité</b> est l’obligation de réparer le dommage subi par autrui ; elle peut être <b>civile, pénale ou administrative</b>. La <b>plainte</b> (victime ou ministère public) déclenche le recours ; un même fait peut avoir plusieurs qualifications.</p>' +
        '<ul class="check"><li><b>Faute de service</b> : excusable, aurait pu être commise par un autre agent, traduit une défaillance du service ; jugée par le <b>tribunal administratif</b> ; réparation prise en charge par le service, sans responsabilité pécuniaire de l’agent.</li><li><b>Faute personnelle détachable du service</b> : sans lien avec le service (vie privée) ; l’agent en assume seul les conséquences ; procédure disciplinaire possible si elle nuit à l’image du service.</li><li><b>Sanction disciplinaire</b> : absence injustifiée, abandon de poste, négligence sur véhicules et matériels, désobéissance, propos irrespectueux, demande de gratification…</li><li>Un agent mis en cause pour une faute commise dans l’exercice de ses fonctions voit sa défense assurée par l’administration (action récursoire possible).</li></ul>' +
        '<div class="tw"><table><thead><tr><th>Infraction</th><th>Juridiction</th><th>Prescription</th></tr></thead><tbody><tr><td>Contravention</td><td>Tribunal de police</td><td>1 an</td></tr><tr><td>Délit</td><td>Tribunal correctionnel</td><td>3 ans</td></tr><tr><td>Crime</td><td>Cour d’assises</td><td>10 ans</td></tr></tbody></table></div>' +
        '<p><b>Infraction non intentionnelle</b> (délit) : maladresse (faute professionnelle, erreur d’appréciation), imprudence, inattention, négligence (art. 221-6 et 222-19/20 du code pénal). <b>Lien de causalité</b> : auteur <b>direct</b> (ex. conducteur qui enfreint gravement le code), <b>indirect</b> (a rendu le dommage possible, ex. formateur), <b>médiat</b> (aurait pu l’éviter : diriger, contrôler, surveiller — faute par omission).</p>' +
        '<p><b>Infractions intentionnelles</b> : omission de porter secours (art. 223-6 : <b>5 ans et 75 000 €</b>) ; abstention de combattre un sinistre dangereux (art. 223-7 : <b>2 ans et 30 000 €</b>) ; délaissement d’une personne hors d’état de se protéger (art. 223-3).</p>' },
    { id: 'medias', t: 'La relation avec la presse', ic: 'eye', src: CAMED,
      html: '<p><b>Qui communique ?</b> Les services de communication du SDIS, un officier presse, tout officier rompu à la communication. Le <b>maire</b> peut s’exprimer : le chef d’agrès ne doit pas hésiter à renvoyer les médias vers l’autorité de police. Le chef d’agrès ne parle à la presse <b>qu’en position de COS et en l’absence de l’échelon supérieur</b>, dans le respect du secret professionnel.</p>' +
        '<ul class="check"><li>Un seul interlocuteur : le COS ou l’officier presse.</li><li>Seulement des aspects techniques : caractéristiques sommaires, actions engagées, moyens (personnels, véhicules), bilan succinct des victimes, évolution (biens, environnement), difficultés.</li><li>Informations <b>factuelles, sans commentaire personnel</b> ; jamais de noms, de précisions morbides, ni d’extrapolation.</li><li>Aucune phrase ne doit pouvoir être sortie de son contexte et mal interprétée.</li><li><b>Informer le CODIS après l’interview.</b></li></ul>' }
  ],
  key: ['La responsabilité de l’intervention incombe au chef d’agrès ; la confiance n’exclut pas le contrôle.', 'Réserve (opinion), discrétion (infos du service), secret professionnel (pénal).', 'Secret aussi envers la hiérarchie, la police, la famille du SP.', 'Révélation possible : partage nécessaire à la mission, fiche bilan/CRSS, défense personnelle.', 'Faute de service → tribunal administratif, réparée par le service.', 'Contravention 1 an, délit 3 ans, crime 10 ans.', 'Omission de porter secours : 5 ans / 75 000 €.', 'Presse : CA seulement s’il est COS sans supérieur ; factuel ; informer le CODIS.'],
  traps: ['Croire que le secret ne s’applique pas à la police ou à la hiérarchie.', 'Donner le nom d’une victime à un journaliste.', 'Commenter ou extrapoler devant la caméra.', 'Penser qu’on ne peut être poursuivi que pour une action, pas pour une omission.'],
  quiz: [
    { q: 'Le secret professionnel est une notion :', c: ['Strictement pénale', 'Uniquement disciplinaire', 'Facultative en PPBE', 'Réservée aux médecins'], e: 'Diaporama responsabilités du CA, diapo 6.', s: 'devoirs' },
    { q: 'Le secret professionnel s’applique-t-il vis-à-vis de la police et de la gendarmerie ?', c: ['Oui', 'Non, jamais', 'Seulement la nuit', 'Seulement en SUAP'], e: 'Diapo 8 : employeur, entourage, famille, presse, collègues, hiérarchie, police et gendarmerie.', s: 'devoirs' },
    { q: 'Dans quel cas le chef d’agrès peut-il répondre à la presse ?', c: ['En position de COS et en l’absence de l’échelon hiérarchique supérieur', 'Toujours', 'Jamais', 'Seulement si le maire est absent'], e: 'Diaporama relation médias, diapo 3.', s: 'medias' },
    { q: 'Après une interview, il faut :', c: ['Informer le CODIS', 'Envoyer l’article au requérant', 'Prévenir la famille de la victime', 'Rien de particulier'], e: 'Diaporama relation médias, diapo 6.', s: 'medias' },
    { q: 'Délai de prescription d’un délit :', c: ['3 ans', '1 an', '10 ans', '6 mois'], e: 'Diapo 16 : contravention 1 an, délit 3 ans, crime 10 ans.', s: 'fautes' },
    { q: 'Le chef d’agrès qui n’a pas contrôlé l’action de son équipe, ce qui a permis un dommage, peut être considéré comme :', c: ['Auteur médiat (faute par omission)', 'Auteur direct', 'Non responsable', 'Victime'], e: 'Diapo 18 : auteur médiat, personnes chargées de diriger, contrôler, surveiller.', s: 'fautes' },
    { q: 'Une faute de service est jugée par :', c: ['Le tribunal administratif, avec réparation prise en charge par le service', 'La cour d’assises', 'Le tribunal de police', 'Le conseil de discipline seulement'], e: 'Diapo 13.', s: 'fautes' }
  ]
});

/* =====================================================================================
   CHAPITRE 16 — LA CONDUITE DES VÉHICULES
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-ca-conduite', part: 'ppbe', seq: PP5,
  title: 'La conduite des véhicules en intervention', short: 'Conduite des véhicules', motif: 'car',
  sources: [CACOND, N216, N258],
  summary: 'Ce qu’un véhicule prioritaire peut faire ou non, les règles du SDIS 51 pour conduire, et les conséquences d’une infraction.',
  why: '<b>Pourquoi ce chapitre dans un stage PPBE ?</b> Parce que le chef d’agrès reste <b>maître à bord</b> et doit rappeler au conducteur son devoir de maîtrise. Les dérogations au code de la route n’existent que dans <b>l’urgence de la mission</b>, avec avertisseurs, et sans mettre en danger les autres usagers. Un VID envoyé sur un nid d’hyménoptères au fond d’un hangar entre-t-il dans ce cadre ? Souvent non. « Aller vite c’est bien, arriver c’est mieux ! »',
  sections: [
    { id: 'prioritaire', t: 'Véhicule d’intérêt général prioritaire', ic: 'car', src: CACOND + ', diapos 3-5',
      html: '<p>Les usagers doivent faciliter le passage d’un véhicule d’intérêt général prioritaire faisant usage de ses avertisseurs spéciaux (art. R 414-9 ; définition art. R 311-1). La dérogation au livre IV du code de la route (vitesse, croisement, dépassement…) n’est permise (<b>art. R 432-1</b>) que si le conducteur :</p>' +
        '<ul class="check"><li>fait <b>usage des avertisseurs spéciaux</b> (gyrophares ou rampe, avertisseur deux tons) ;</li><li>dans les cas <b>justifiés par l’urgence de la mission</b> ;</li><li><b>sans mettre en danger la vie des autres usagers</b> (les tribunaux sont très stricts sur le refus de priorité).</li></ul>' +
        '<p>Pour être prioritaire, il faut être <b>vu</b> (feux visibles tous azimuts à 50 m ; usage : feux de croisement allumés), <b>entendu</b> et <b>compris</b>.</p>' },
    { id: 'derogations', t: 'Ce qui est permis… et ce qui ne l’est jamais', ic: 'alert', src: CACOND + ', diapos 8-19',
      html: '<div class="tw"><table><thead><tr><th>Possible en urgence (avec avertisseurs, sans danger)</th><th>Jamais</th></tr></thead><tbody><tr>' +
        '<td><ul class="check"><li>Franchir un feu rouge (prudence : les autres se croient protégés par leur vert).</li><li>Dépasser la vitesse limite en restant maître du véhicule.</li><li>Franchir une ligne continue en prévenant le véhicule dépassé et ceux d’en face.</li><li>Déroger aux règles de stationnement.</li><li>Prendre un sens interdit lorsque les circonstances l’imposent.</li><li>Usage de l’avertisseur sonore sans les limites habituelles.</li></ul></td>' +
        '<td><ul class="trap"><li><b>Feux rouges clignotants</b> (passages à niveau, pont-levis) : arrêt absolu (R 412-30).</li><li><b>Tonnage limité</b> d’un ouvrage (pont, mur de soutènement…).</li><li><b>Hauteur limitée</b> (tunnels, porches, parkings) — attention aux engins de remplacement de gabarit différent.</li><li>Circulation sur la <b>bande d’arrêt d’urgence</b> : interdite (R 412-8).</li></ul></td>' +
        '</tr></tbody></table></div>' +
        '<div class="callout warn"><b>Ceinture</b>Le code permet de déroger au port de la ceinture en urgence (R 432-1), mais au SDIS 51 elle est <b>obligatoire même en mission urgente</b> (RI SDIS 51, art. 255) — et toujours au retour, en mission non urgente et en déplacement administratif.</div>' +
        '<p><b>Conditions particulières</b> : nuit, soleil levant ou couchant (acuité réduite) ; « verglas d’été » ; hiver (versants, sous-bois, virages sous le vent) ; pluie, orage, crue (aquaplaning, chaussée invisible) → plus de vigilance et de distance de freinage, donc adapter sa vitesse. <b>Alcool</b> : moins de 0,5 g/L ; au-delà de 0,8 g/L, délit (rétention du permis, jusqu’à 2 ans et 4 500 €, 6 points) ; stupéfiants interdits (L 235-1).</p>' },
    { id: 'responsabilite', t: 'Responsabilité, déplacements et contraventions', ic: 'book', src: CACOND + ', diapo 6 ; ' + N258,
      html: '<p>C’est le <b>conducteur</b> qui répond de son infraction, pas le service : amende, retrait de points, prison et dommages-intérêts dans les cas graves. Le <b>chef d’agrès</b> reste maître à bord et rappelle au conducteur son devoir de maîtrise.</p>' +
        '<div class="tw"><table><thead><tr><th>Déplacement</th><th>Règle</th></tr></thead><tbody>' +
        '<tr><td><b>Opérationnel non urgent</b> : renforts en personnel, reconstitution des moyens, relèves, <b>interventions payantes</b></td><td>Code de la route strict ; avertisseurs <b>interdits</b>.</td></tr>' +
        '<tr><td><b>Opérationnel urgent</b></td><td>Règles adaptables (R 432-1) sans mettre en danger autrui ; vitesse toujours adaptée.</td></tr>' +
        '<tr><td><b>Retours d’intervention, technico-administratifs</b></td><td>Code de la route strict ; avertisseurs interdits.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Depuis 2017, le SDIS doit <b>désigner le conducteur</b> : hors urgence, l’agent paie l’amende et perd les points. Pour un déplacement urgent, le groupement opération demande une exonération ; une vitesse non justifiée ou dangereuse peut entraîner des mesures envers <b>le conducteur et le chef d’agrès</b>, et un « délit de mise en danger délibérée d’autrui » (1 an, 15 000 €) même sans victime.</p>' },
    { id: 'nds216', t: 'Qui peut conduire au SDIS 51 (NDS 216)', ic: 'check', src: N216,
      html: '<ul class="check"><li>Hors opération : tout SP titulaire du permis (B pour VL, VSAV, VTP, VID ; C pour PL).</li><li>En opération : seulement un <b>permis non probatoire</b> (sauf mode dégradé, NDS 160).</li><li>Permis B : <b>carnet de conduite</b> et <b>prise en main obligatoire</b> avant toute conduite en urgence : 1 h de théorie, 1 h 30 de pratique, puis (hors VL) <b>4 h de conduite</b> en retour d’intervention et le circuit de validation avec le référent conduite.</li><li>Permis C : 4 h de conduite et circuit de validation avant le stage conducteur engin pompe ; maintien annuel par un circuit de perfectionnement.</li></ul>' }
  ],
  key: ['Dérogation R 432-1 : avertisseurs + urgence + pas de danger pour autrui.', 'Être vu, entendu, compris.', 'Jamais : feu rouge clignotant, tonnage, hauteur limitée, BAU.', 'Sens interdit possible en urgence si les circonstances l’imposent.', 'Ceinture obligatoire même en urgence au SDIS 51 (RI art. 255).', 'Interventions payantes = déplacement non urgent : code strict, pas d’avertisseurs.', 'Le conducteur répond de ses infractions ; le CA reste maître à bord.', 'Conduite en opération : permis non probatoire.'],
  traps: ['Partir « deux tons » pour un nid d’hyménoptères payant.', 'Franchir un passage à niveau au feu rouge clignotant parce qu’on est en urgence.', 'Ne pas mettre sa ceinture en départ urgent.', 'Croire que le SDIS paie les contraventions du conducteur.'],
  quiz: [
    { q: 'Conducteur VID pour un nid d’hyménoptères : avez-vous le droit de prendre un sens interdit pour gagner du temps ?', c: ['Faux en règle générale : seule l’urgence de la mission, avec avertisseurs et sans danger, le justifierait — ce qui n’est pas le cas d’une intervention non urgente ou payante', 'Vrai, toujours en intervention', 'Vrai, si la rue est vide', 'Vrai, si le chef d’agrès le demande'], e: 'Diaporama conduite : dérogation seulement dans les cas justifiés par l’urgence (exemple du VID pour un nid au fond d’un hangar) ; NDS 258 : intervention payante = déplacement non urgent, code strict. Évaluation diagnostique EQ PPBE, question 4.', s: 'responsabilite' },
    { q: 'La règle de base obligatoire avant de partir et à chaque trajet en VID :', c: ['Port de la ceinture de sécurité', 'Allumer le deux-tons', 'Prévenir la presse', 'Faire le plein'], e: 'Livret EQ PPBE p. 6 et RI SDIS 51 art. 255 : ceinture obligatoire, même en mission urgente. Évaluation diagnostique Q3.', s: 'derogations' },
    { q: 'Face à un feu rouge clignotant de passage à niveau, en mission urgente :', c: ['Arrêt absolu, jamais de dérogation', 'On passe avec le deux-tons', 'On ralentit seulement', 'On passe si aucun train n’est visible'], e: 'Diapo 17 : R 412-30.', s: 'derogations' },
    { q: 'Les trois conditions de la dérogation R 432-1 :', c: ['Avertisseurs spéciaux, urgence de la mission, pas de mise en danger des autres usagers', 'Gyrophare seul, nuit, route vide', 'Ordre du CODIS, permis C, ceinture', 'Vitesse < 90 km/h, feux de croisement, klaxon'], e: 'Diapo 4.', s: 'prioritaire' },
    { q: 'Une intervention payante est classée :', c: ['Déplacement opérationnel non urgent : code de la route strict, avertisseurs interdits', 'Déplacement urgent', 'Déplacement administratif avec avertisseurs', 'Hors classification'], e: 'NDS 258.', s: 'responsabilite' },
    { q: 'Pour conduire un VSAV ou un VID en opération au SDIS 51, il faut :', c: ['Un permis non probatoire et la prise en main validée', 'Un simple permis B, même probatoire', 'Le permis C', 'Aucune condition particulière'], e: 'NDS 216.', s: 'nds216' }
  ]
});

/* =====================================================================================
   CHAPITRE 17 — TRANSMISSIONS ET REMONTÉE D’INFORMATION
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-ca-transmissions', part: 'ppbe', seq: PP5,
  title: 'Transmissions et remontée d’information (ANTARES, status, messages)', short: 'Transmissions', motif: 'ecg',
  sources: [CATRANS, N095],
  summary: 'Réseaux, indicatifs, status ANTARES 1 à 9, formalisme des messages (je suis, je vois, je prévois, je fais, je demande) et cas particuliers.',
  why: '<b>Pourquoi tant de formalisme radio ?</b> Un renseignement de qualité, réactif et continu vers le CTA-CODIS est le gage d’une réponse bien dimensionnée, de comptes rendus fiables aux autorités et d’une <b>traçabilité</b> en cas de contentieux. Les status évitent d’encombrer les canaux : la voix est réservée à ce qui l’exige.',
  sections: [
    { id: 'reseaux', t: 'Réseaux, indicatifs et alphabet', ic: 'list', src: CATRANS + ', diapos 3-12',
      html: '<p><b>Réseaux d’infrastructure</b> : réseaux d’alerte (des secours, de la population, des personnels) et réseaux de travail (commandement, opérationnels, <b>SSU</b>). En cas de non-réponse radio du SSU, passer impérativement par le numéro enregistré du CRRA (à défaut par le CTA). L’alphabet phonétique sert à épeler noms propres et mots importants et à décomposer les chiffres.</p>' +
        '<div class="tw"><table><thead><tr><th>Autorité / fonction</th><th>Indicatif</th></tr></thead><tbody><tr><td>Préfet</td><td>ARAMIS</td></tr><tr><td>Sous-préfet</td><td>BAZIN</td></tr><tr><td>Directeur de cabinet</td><td>PORTHOS</td></tr><tr><td>Chef du SIRACEDPC</td><td>ARIEL</td></tr><tr><td>DDSIS</td><td>LANCELOT</td></tr><tr><td>Médecin chef du SDIS</td><td>HIPPOCRATE</td></tr><tr><td>Médecin chef du SAMU</td><td>HERACLES</td></tr><tr><td>Chef de groupement</td><td>GARETH</td></tr><tr><td>Chef de centre</td><td>MERLIN</td></tr></tbody></table></div>' +
        '<p><b>Canaux de la Marne</b> (NDS 095, annexe 5) : <b>OPE</b> (moyens courants), <b>SSU</b> (bilans VSAV et médicaux), SPE (sur demande au CTA-CODIS), CDT (chef de colonne, PC), tactiques ¼ 614, 633, 664, 673 et ½ 602.</p>' },
    { id: 'status', t: 'Les status ANTARES', ic: 'ecg', src: N095 + ' (§ 3 et annexe 1)',
      html: '<div class="tw"><table><thead><tr><th>Status</th><th>Signification</th><th>Message voix ?</th></tr></thead><tbody>' +
        '<tr><td>1</td><td>Véhicule parti</td><td>Non, sauf départ incomplet, infirmier à bord, ré-engagement</td></tr>' +
        '<tr><td>2</td><td>Véhicule sur les lieux</td><td>Seulement si l’adresse est à corriger</td></tr>' +
        '<tr><td>3</td><td>Message (compte rendu, renseignement)</td><td>Oui</td></tr>' +
        '<tr><td>4</td><td>Message urgent (problème grave)</td><td>Oui, priorité, silence radio imposé par le CTA</td></tr>' +
        '<tr><td>5</td><td>Transport hôpital (VSAV)</td><td>Oui : sexe, âge, circonstanciel, destination</td></tr>' +
        '<tr><td>6</td><td>Arrivé à l’hôpital</td><td>Seulement si attente anormale</td></tr>' +
        '<tr><td>7</td><td>Véhicule disponible (« dispo radio »)</td><td>Non</td></tr>' +
        '<tr><td>8</td><td>Véhicule indisponible</td><td>Non ; le CIS téléphone au CTA (raison, délai)</td></tr>' +
        '<tr><td>9</td><td>Véhicule rentré</td><td>Non</td></tr>' +
        '</tbody></table></div><p>Le message d’<b>ambiance</b> est passé à la voix (sans status) <b>dans les 5 minutes</b> après l’arrivée du 1er COS ; le <b>compte rendu</b> (status 3) <b>dans les 20 minutes</b>, puis toutes les <b>30 minutes</b> au plus. Tout changement de COS est signalé ; avec plusieurs moyens, c’est le COS qui libère les engins. En cas d’échec d’un status, le transmettre à la voix avec le bon groupe horaire (GH).</p>' },
    { id: 'message', t: 'Composer un message', ic: 'clip', src: CATRANS + ', diapo 14 ; ' + N095 + ' (annexes 2 et 3)',
      steps: ['L’entête : demande d’autorisation de parler (status 3 ou 4), puis DESTINATAIRE de EMETTEUR (ex. « CODIS de VSAV SAINT BRICE/TINQUEUX »).', 'Je suis : dénomination du COS, nature et adresse du sinistre.', 'Je vois : description précise et circonstanciée de la situation.', 'Je prévois : l’évolution défavorable envisagée.', 'Je fais : actions engagées (objectifs et idées de manœuvre).', 'Je demande : renforts, information ou présence de services, en justifiant la demande.', 'Le final : « Parlez », « Collationnez » (répétez) ou « Terminé » (fin de message).'], stepsTitle: 'Structure d’un message radio',
      after: '<p>Le message d’<b>ambiance</b> se limite à « je suis, je vois, je demande » ; le <b>compte rendu</b> comprend « je suis, je vois, je prévois, je fais, je demande ». Victimes multiples : décédés, blessés graves, blessés légers, impliqués (UA/UR relève d’un médecin). Incendie : feu circonscrit, maître du feu, feu éteint (jamais « reprise de feu »).</p>' }
  ],
  key: ['Status 1 parti, 2 sur les lieux, 3 message, 4 urgent, 5 transport, 6 arrivée CH, 7 dispo, 8 indispo, 9 rentré.', 'Ambiance à la voix dans les 5 min ; compte rendu dans les 20 min, puis toutes les 30 min max.', 'Je suis, je vois, je prévois, je fais, je demande.', 'OPE = moyens courants ; SSU = bilans.', 'Status 4 = urgent : priorité et silence radio.', 'Préfet ARAMIS, DDSIS LANCELOT, chef de centre MERLIN.'],
  traps: ['Valider le status 7 alors que l’engin n’est pas complet ou propre.', 'Oublier de signaler un changement de COS.', 'Demander des renforts sans justifier la demande.'],
  quiz: [
    { q: 'Le status 2 signifie :', c: ['Véhicule sur les lieux', 'Véhicule parti', 'Message urgent', 'Véhicule rentré'], e: 'NDS 095 annexe 1.', s: 'status' },
    { q: 'Le status 4 correspond à :', c: ['Un message urgent (problème grave), prioritaire', 'Un transport hôpital', 'Un véhicule indisponible', 'Un compte rendu ordinaire'], e: 'NDS 095 § 3.', s: 'status' },
    { q: 'Délai maximal pour le message d’ambiance après l’arrivée du premier COS :', c: ['5 minutes', '20 minutes', '30 minutes', '1 heure'], e: 'NDS 095 § 3 ; compte rendu dans les 20 min.', s: 'status' },
    { q: 'Ordre des rubriques d’un compte rendu :', c: ['Je suis, je vois, je prévois, je fais, je demande', 'Je demande, je fais, je vois', 'Je vois, je suis, je pars', 'Je fais, je prévois, je suis'], e: 'NDS 095 annexe 3 ; diaporama transmissions.', s: 'message' },
    { q: 'L’indicatif radio du DDSIS est :', c: ['LANCELOT', 'ARAMIS', 'MERLIN', 'HIPPOCRATE'], e: 'Diaporama transmissions, diapo 12.', s: 'reseaux' },
    { q: 'Sur quel canal passe-t-on le bilan secouriste ?', c: ['SSU', 'OPE', 'CDT', 'SPE'], e: 'NDS 095 annexe 5.', s: 'reseaux' }
  ]
});

/* =====================================================================================
   CHAPITRE 18 — OUVERTURE DE PORTE
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-ca-ouverture-porte', part: 'ppbe', seq: PP5,
  title: 'Ouverture de porte urgente (NDS 161 / POP 15)', short: 'Ouverture de porte', motif: 'hand',
  sources: [POP15, N161],
  summary: 'L’état de nécessité autorise à entrer sans attendre les forces de l’ordre ; reconnaître, entrer par une fenêtre de préférence, en binôme avec un détecteur de CO, refermer, laisser l’avis de passage et noter les dégâts au CRSS.',
  why: '<b>Pourquoi les sapeurs-pompiers peuvent-ils entrer sans la police ?</b> Parce que l’alerte puis la validation de l’engagement par le CTA-CODIS, au regard de l’urgence (avérée : victime à terre, incendie, fuite d’eau ; ou supposée : personne ne répondant pas aux appels), confèrent toute autorité pour entrer : c’est <b>l’état de nécessité</b> qui légitime l’action. Mais on limite les dégâts et on sécurise les lieux ensuite.',
  sections: [
    { id: 'cat', t: 'Conduite à tenir', ic: 'list', src: POP15,
      steps: ['Prendre contact avec le requérant sur les lieux (conférence téléphonique via le CTA-CODIS si besoin).', 'Faire une reconnaissance pour définir l’accès le plus approprié.', 'Risque pour l’intégrité des sapeurs-pompiers : envisager le repli ; priorité à l’accès par une porte, en appui des forces de l’ordre qui sont alors force menante.', 'Absence de risque à l’intérieur : le LSPCC peut être utilisé conformément au GTO Sauvetage et mise en sécurité.', 'Pour limiter les dégâts, pénétrer de préférence par une fenêtre en brisant un carreau ; à défaut, par la porte.', 'Moyens insuffisants : demander les renforts nécessaires.', 'Pénétrer en binôme chaque fois que possible, avec au minimum un détecteur de CO ; procéder aux secours ou à la mission commandée.'], stepsTitle: 'POP 15 — avant et pendant l’entrée' },
    { id: 'apres', t: 'Après l’ouverture', ic: 'check', src: POP15 + ' ; ' + N161,
      html: '<ul class="check"><li><b>Toujours essayer de refermer</b> le local de façon sûre ; à défaut, en confier la garde aux forces de l’ordre ou au maire (police municipale) et, en attendant, assurer la surveillance en <b>status « disponible radio »</b> pour pouvoir être ré-engagé.</li><li>Occupant présumé qui se présente : en cas de doute sur son identité, <b>seules les forces de l’ordre</b> peuvent le laisser entrer — les sapeurs-pompiers ne contrôlent pas les identités.</li><li><b>Dans tous les cas</b>, laisser sur place l’<b>avis de passage</b> exhaustivement et proprement renseigné (que les occupants soient présents ou non).</li><li>Au CRSS : inscrire avec précision les dommages causés et le nom du (des) sinistré(s).</li></ul>' +
        '<p><b>L’avis de passage</b> précise le motif (feu, odeur suspecte, fuite d’eau ou de gaz, personne ne répondant pas aux appels, personne à terre après une chute…) et les dégâts (aucun, volet, vitre, porte…). Il rappelle que les sapeurs-pompiers, agissant dans le cadre juridique de leurs missions, ne sont pas redevables des dégâts : l’occupant saisit son assurance et peut demander une attestation d’intervention au SDIS.</p>' +
        '<p class="small muted">Hors urgence, l’ouverture de porte relève d’une prestation payante : voir <a href="#/c/ppbe-ca-payantes">Interventions payantes</a>. Technique de forcement : <a href="#/c/ppbe-forcement">Les opérations de forcement</a>.</p>' }
  ],
  key: ['État de nécessité : entrée sans attendre les forces de l’ordre.', 'Reconnaissance, puis fenêtre de préférence (carreau brisé), sinon porte.', 'Risque pour les SP : repli, forces de l’ordre en tête.', 'Binôme + détecteur de CO au minimum.', 'Refermer ; sinon garde forces de l’ordre/maire, surveillance en « dispo radio ».', 'Identité douteuse : seules les forces de l’ordre laissent entrer.', 'Avis de passage toujours laissé ; dégâts et noms au CRSS.'],
  traps: ['Attendre la police alors que l’urgence est validée.', 'Laisser entrer un « voisin qui a les clés » sans les forces de l’ordre.', 'Repartir en laissant un logement ouvert sans surveillance.', 'Oublier l’avis de passage parce que l’occupant est présent.'],
  quiz: [
    { q: 'Qu’est-ce qui légitime l’entrée des sapeurs-pompiers sans les forces de l’ordre ?', c: ['L’état de nécessité, l’urgence ayant été validée par le CTA-CODIS', 'L’accord du voisin', 'Un ordre écrit du maire', 'Rien, il faut toujours la police'], e: 'POP 15, principes.', s: 'cat' },
    { q: 'Pour limiter les dégâts, on pénètre de préférence :', c: ['Par une fenêtre, en brisant un carreau', 'En enfonçant la porte', 'Par le toit', 'En démontant la serrure'], e: 'POP 15 et NDS 161.', s: 'cat' },
    { q: 'Équipement minimal pour pénétrer dans les locaux :', c: ['Un binôme avec au minimum un détecteur de CO', 'Un ARI chacun', 'Une seule personne avec une lampe', 'Un LSPCC'], e: 'POP 15.', s: 'cat' },
    { q: 'Le local ne peut pas être refermé de façon sûre :', c: ['On en confie la garde aux forces de l’ordre ou au maire et on surveille en attendant, en status « disponible radio »', 'On repart, l’assurance s’en chargera', 'On laisse un voisin surveiller', 'On cloue la porte et on part'], e: 'POP 15.', s: 'apres' },
    { q: 'L’avis de passage est laissé :', c: ['Dans tous les cas, occupants présents ou non', 'Seulement si l’occupant est absent', 'Seulement en cas de dégâts', 'Jamais, il est envoyé par courrier'], e: 'Annexe POP 15.', s: 'apres' },
    { q: 'Un homme se présente comme l’occupant mais ne peut justifier de son identité :', c: ['Seules les forces de l’ordre peuvent le laisser entrer', 'Le chef d’agrès contrôle ses papiers', 'On le laisse entrer', 'On appelle le maire pour qu’il décide'], e: 'POP 15 : les SP ne sont pas habilités aux contrôles d’identité.', s: 'apres' }
  ]
});

/* =====================================================================================
   CHAPITRE 19 — INTERVENTIONS PAYANTES, HYMÉNOPTÈRES, ANIMAUX
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-ca-payantes', part: 'ppbe', seq: PP5,
  title: 'Interventions payantes : hyménoptères, animaux, réquisitions', short: 'Interventions payantes', motif: 'clip',
  sources: [N240, N031, N175, N105],
  summary: 'Quand le SDIS intervient gratuitement, quand la prestation est payante, et ce que le chef d’agrès fait signer avant d’agir.',
  why: '<b>Pourquoi faire signer un formulaire avant de détruire un nid ?</b> Le code général des collectivités territoriales (art. L 1424-2) limite les missions du SDIS ; pour les interventions qui ne s’y rattachent pas, il peut demander une participation aux frais (art. L 1424-42), fixée par délibération du conseil d’administration. Faire accepter le devis <b>avant</b> l’action réduit fortement les contestations de facture.',
  sections: [
    { id: 'hymeno', t: 'Hyménoptères : gratuit ou payant ?', ic: 'spray', src: N240 + ' ; ' + N031,
      html: '<p>Le SDIS n’est compétent que s’il existe un <b>risque réel ou imminent pour les personnes</b>. Engagement sans délai et <b>gratuit</b> :</p><ul class="check"><li>dans les <b>ERP</b>, si le public est directement exposé ;</li><li>sur la <b>voie publique</b>, si le public est directement exposé ;</li><li>dans les <b>lieux privés</b>, si les insectes empêchent d’accéder ou de vivre dans un espace de vie courante (cuisine, salle à manger, salle de bain, chambre…) ou pénètrent massivement dans les parties habitables (surtout en cas d’allergie présumée ou avérée) ;</li><li>toute autre situation urgente jugée par le chef de salle du CTA-CODIS (insectes particulièrement agressifs).</li></ul>' +
        '<p>Sinon, le requérant est orienté vers un <b>prestataire privé</b> (ou la mairie si un corps non intégré assure ce service). En cas d’indisponibilité, prestation <b>payante</b> : accord verbal du requérant au CTA-CODIS (enregistré), puis <b>sur place, le chef d’agrès fait signer le formulaire de demande de prestation avant d’entreprendre la destruction</b> ; l’imprimé est transmis au CTA-CODIS au retour.</p>' +
        '<p class="small muted">Montants (révisés chaque année par le CASDIS) : 9 vacations d’officier soit 94,68 € (NDS 031, 2009) ; forfait 184 € / 368 € avec échelle aérienne (NDS 175, 2016) ; 200 € / 400 € (exemple 2019, NDS 240 bis). Le formulaire précise que les SP ne sont pas responsables des dommages aux biens directement liés à la reconnaissance ou à la destruction du nid.</p>' },
    { id: 'forfaits', t: 'Réquisitions et participation aux frais (NDS 175)', ic: 'clip', src: N175,
      html: '<p>Hors urgence ou nécessité publique (autorités administratives ou judiciaires, forces de l’ordre, personnes privées : ascenseur bloqué, portique de détection radiologique…), le formulaire de participation aux frais est <b>systématiquement présenté à la signature du requérant avant toute action</b> : il accepte le devis expliqué par le <b>COS</b>. Ce document n’est pas une facture : <b>aucun paiement n’est accepté sur place</b> (titre de recette du Trésor public ultérieur).</p>' +
        '<div class="tw"><table><thead><tr><th>Prestation (tarifs 2016)</th><th>Forfait</th></tr></thead><tbody><tr><td>Destruction de nid d’hyménoptères</td><td>184 € (368 € avec échelle aérienne)</td></tr><tr><td>Ouverture de porte</td><td>276 € (414 € avec échelle aérienne)</td></tr><tr><td>Ascenseur bloqué</td><td>276 €</td></tr><tr><td>Capture d’animaux errants</td><td>138 €</td></tr><tr><td>Autres : coût horaire par sapeur-pompier</td><td>46 € / h / SP</td></tr></tbody></table></div>' +
        '<p>Au temps passé : facturation dès le <b>déclenchement</b> (transit compris), tous les personnels concourant comptés (sécurité, soutien, logistique) ; toute heure commencée est due, la 1re heure indivisible, puis par quart d’heure (35 min = 1 h ; 1 h 15 = 1 h 30).</p>' },
    { id: 'animaux', t: 'Animaux blessés et errants (NDS 105)', ic: 'bug', src: N105,
      html: '<p>Le ramassage des animaux errants relève du <b>maire</b> (art. R 211-11 du code rural) : ces missions sont <b>hors du champ de compétence</b> des sapeurs-pompiers.</p><ul class="check"><li><b>Animal sauvage</b> : le CTA-CODIS contacte la permanence de l’<b>ONCFS</b> (Office national de la chasse et de la faune sauvage) ; s’il ne peut intervenir, mêmes dispositions que pour un animal domestique.</li><li><b>Animal domestique</b> : demande transmise au maire ; s’il veut l’intervention des SP, il transmet un <b>accord préalable de prise en charge financière</b> (frais vétérinaires à la charge de la commune) avant l’engagement.</li><li><b>Exception</b> : un animal en péril nécessitant un sauvetage hors moyens conventionnels peut être pris en charge gratuitement, sur appréciation du chef de groupe CODIS.</li></ul>' }
  ],
  key: ['Hyménoptères gratuits si risque réel pour les personnes : ERP, voie publique, pièces de vie, allergie.', 'Sinon prestataire privé ; à défaut prestation payante avec accord verbal au CTA.', 'Le CA fait signer le formulaire AVANT la destruction.', 'Formulaire NDS 175 signé avant toute action ; aucun paiement sur place.', 'Facturation au temps dès le déclenchement ; 1re heure indivisible.', 'Animaux errants : compétence du maire ; animal sauvage : ONCFS d’abord.', 'Animal en péril à sauver : gratuité possible (chef de groupe CODIS).'],
  traps: ['Détruire le nid puis faire signer le formulaire.', 'Encaisser un chèque sur place.', 'Considérer un nid dans un abri de jardin non fréquenté comme une urgence.', 'Engager les moyens pour un chien errant sans accord du maire.'],
  quiz: [
    { q: 'Nid de frelons asiatiques dans la chambre d’une maison :', c: ['Intervention gratuite (espace de vie courante)', 'Intervention payante', 'Refus d’intervention', 'Renvoi systématique vers un privé'], e: 'NDS 240 bis.', s: 'hymeno' },
    { q: 'Quand le chef d’agrès fait-il signer la demande de prestation pour un nid payant ?', c: ['Avant d’entreprendre la destruction', 'Après la destruction', 'Au retour au centre', 'Jamais, c’est le CTA qui s’en charge'], e: 'NDS 031 et 240 bis.', s: 'hymeno' },
    { q: 'Le requérant d’une intervention payante veut payer en espèces sur place :', c: ['Refuser : aucun paiement n’est accepté, il recevra un titre de recette du Trésor public', 'Accepter et remettre au chef de centre', 'Accepter seulement les chèques', 'Accepter avec un reçu'], e: 'NDS 175 modifiée.', s: 'forfaits' },
    { q: 'À partir de quand la facturation au temps passé débute-t-elle ?', c: ['Au déclenchement des moyens (transit compris)', 'À l’arrivée sur les lieux', 'Au début des travaux', 'À la fin de l’intervention'], e: 'NDS 175 modifiée.', s: 'forfaits' },
    { q: 'Une intervention de 35 minutes au coût horaire est comptée :', c: ['1 heure', '35 minutes', '30 minutes', '45 minutes'], e: 'NDS 175 : la 1re heure est indivisible.', s: 'forfaits' },
    { q: 'Pour un animal sauvage blessé, le CTA-CODIS contacte d’abord :', c: ['L’ONCFS', 'Le maire', 'Un animalier privé', 'La gendarmerie'], e: 'NDS 105.', s: 'animaux' },
    { q: 'Qui est responsable des animaux errants sur la commune ?', c: ['Le maire', 'Le SDIS', 'Le préfet', 'Le vétérinaire du SDIS'], e: 'NDS 105 et code rural.', s: 'animaux' }
  ]
});

/* =====================================================================================
   CHAPITRE 20 — PROMPT SECOURS, CO, INSALUBRITÉ
   ===================================================================================== */

VSAV.chap({
  id: 'ppbe-ca-procedures', part: 'ppbe', seq: PP5,
  title: 'Prompt secours, intoxication au CO, détecteur Explo/CO et insalubrité', short: 'Prompt secours, CO, insalubrité', motif: 'alert',
  sources: [N064, NCO, N119, POP19],
  summary: 'Le VID en prompt secours, la conduite à tenir en cas d’intoxication au CO, l’emploi du détecteur multigaz et le signalement d’un logement insalubre.',
  why: '<b>Pourquoi un chef d’agrès PPBE doit-il connaître ces procédures ?</b> Parce que le VID peut être engagé en <b>prompt secours</b> quand le VSAV est indisponible, qu’une simple intervention à domicile peut révéler une intoxication au CO ou un logement dangereux, et que c’est au COS de lancer les bonnes démarches (GrDF, CRRA 15, mairie).',
  sections: [
    { id: 'prompt', t: 'Le prompt secours (NDS 064)', ic: 'ambulance', src: N064,
      html: '<p>Quand les VSAV d’un centre sont indisponibles, un VSAV d’un secteur voisin est engagé et, pour une réponse rapide, un <b>binôme formé au secours à personne</b> part en prompt secours : <b>VID systématique</b> dans les centres sans VSAV, sinon VID, VL ou VLHR armé par deux SP qualifiés.</p><ul class="check"><li>L’équipage se munit du <b>sac de l’avant</b> ou du <b>sac d’oxygénothérapie</b> (voire du bloc d’oxygénothérapie d’un FPT) si disponible.</li><li>Le chef d’agrès transmet ses messages comme pour toute intervention (arrivée sur les lieux, message flash…).</li></ul>' },
    { id: 'co', t: 'Intoxication au CO', ic: 'skull', src: NCO,
      html: '<ul class="check"><li>Secours à personne avec suspicion d’intoxication au CO : <b>transport systématique</b> pour contrôle vers un centre hospitalier, pour <b>au plus 3 victimes</b>.</li><li>Au-delà : demander au CODIS le renfort d’un membre du <b>SSSM</b> pour une évaluation individuelle, en coordination avec le centre 15.</li><li>Alerter systématiquement <b>GrDF</b> ; si la commune est desservie par le gaz, un agent est envoyé : le <b>COS ne se rend pas disponible avant un point de situation avec GrDF</b>.</li></ul>' },
    { id: 'detecteur', t: 'Le détecteur Explo/CO (fiche n° 10)', ic: 'eye', src: N119,
      html: '<p>Détecteur multigaz BW GasAlert MicroClip XT : mesure en temps réel le <b>CO</b> et l’explosimétrie (<b>% LIE</b>) ; alarmes sonore, visuelle et vibrante ; autonomie moyenne 10 h ; IP66. Un par FPT (présent à chaque départ, toujours avec sa sangle).</p>' +
        '<div class="tw"><table><thead><tr><th>Seuil</th><th>CO</th><th>Explosimétrie</th></tr></thead><tbody><tr><td>1er seuil</td><td>50 ppm</td><td>20 % de la LIE</td></tr><tr><td>2e seuil</td><td>200 ppm</td><td>60 % de la LIE</td></tr></tbody></table></div>' +
        '<ul class="check"><li>Mise en route par une pression, <b>en atmosphère saine</b> (pas de fumées ni gaz d’échappement) pour la mise à zéro ; si l’alarme sonore ou visuelle ne se déclenche pas au test, <b>ne pas utiliser l’appareil</b>.</li><li>Brève pression : acquitte l’alarme sonore (la lumineuse reste tant que le seuil est dépassé) ; arrêt : pression longue (3 s).</li><li>Charge dès que l’autonomie est &lt; 20 % (2 à 3 h). Nettoyage au chiffon humide, sans alcool, solvant, silicone ni aérosol près des cellules.</li></ul>' +
        '<p class="small muted">Approfondir : <a href="#/c/inc-explosimetrie">Notions d’explosimétrie et monoxyde de carbone</a>.</p>' },
    { id: 'insalubrite', t: 'Signaler un logement insalubre (POP 19)', ic: 'clip', src: POP19,
      html: '<p>Est insalubre un logement qui présente un <b>danger pour la santé des occupants ou des voisins</b> en raison de son état ou de ses conditions d’occupation. Désordres courants : installation électrique dangereuse (électrocution, incendie), appareils à combustion dangereux (CO), risque de chute, humidité et moisissures (maladies respiratoires), accumulation de déchets ou d’encombrants (nuisibles, incendie).</p>' +
        '<p>Le constat et les suites relèvent du <b>maire</b>. Conduite à tenir :</p>',
      steps: ['COS : remplir la fiche de signalement d’un état d’insalubrité (intervention, adresse, occupant, propriétaire, enfants, animaux, encombrement, transport, compte rendu).', 'COS : transmettre la fiche pour visa au chef de centre ou à son représentant.', 'Chef de centre : l’envoyer par mail au service concerné de la mairie et au pôle départemental de lutte contre l’habitat indigne, avec copie au groupement Mise en œuvre opérationnelle.'], stepsTitle: 'Procédure de signalement' }
  ],
  key: ['Prompt secours : VID/VL armé par 2 SP qualifiés + sac de l’avant ou O₂.', 'CO : transport systématique jusqu’à 3 victimes ; au-delà renfort SSSM.', 'CO : alerter GrDF ; COS non disponible avant le point avec GrDF.', 'Détecteur : CO 50 / 200 ppm ; LIE 20 % / 60 %.', 'Allumer le détecteur en atmosphère saine ; test d’alarme raté = ne pas l’utiliser.', 'Insalubrité : fiche par le COS → visa chef de centre → mairie + pôle habitat indigne.'],
  traps: ['Allumer le détecteur dans les fumées ou près d’un pot d’échappement.', 'Laisser 2 victimes de CO sur place parce qu’elles « vont bien ».', 'Quitter les lieux d’une intoxication au CO sans attendre GrDF.', 'Croire que le secret professionnel empêche tout signalement d’insalubrité.'],
  quiz: [
    { q: 'Suspicion d’intoxication au CO chez 2 personnes :', c: ['Transport systématique pour contrôle vers un centre hospitalier', 'Pas de transport si elles sont conscientes', 'Renfort SSSM obligatoire', 'Simple aération du logement'], e: 'Note « Intoxication au CO » : transport systématique pour au plus 3 victimes.', s: 'co' },
    { q: 'Qui faut-il alerter systématiquement en cas d’intoxication au CO ?', c: ['GrDF', 'La mairie', 'La presse', 'Le propriétaire'], e: 'Note « Intoxication au CO ».', s: 'co' },
    { q: 'Premier seuil d’alarme CO du détecteur multigaz :', c: ['50 ppm', '200 ppm', '20 ppm', '500 ppm'], e: 'Fiche descriptive n° 10 ; 2e seuil 200 ppm.', s: 'detecteur' },
    { q: 'Seuils d’explosimétrie du détecteur :', c: ['20 % puis 60 % de la LIE', '10 % puis 100 % de la LIE', '50 % puis 200 % de la LIE', '5 % puis 15 % de la LIE'], e: 'Fiche descriptive n° 10.', s: 'detecteur' },
    { q: 'Où mettre en route le détecteur ?', c: ['Dans une atmosphère saine, pour une mise à zéro correcte', 'Dans le local suspect', 'Près de l’échappement de l’engin', 'N’importe où'], e: 'Fiche descriptive n° 10.', s: 'detecteur' },
    { q: 'Qui remplit la fiche de signalement d’insalubrité ?', c: ['Le COS, puis visa du chef de centre', 'Le maire', 'L’occupant', 'Le CTA-CODIS'], e: 'POP 19.', s: 'insalubrite' },
    { q: 'En prompt secours avec un VID, l’équipage emporte si possible :', c: ['Le sac de l’avant ou le sac d’oxygénothérapie', 'Le LSPCC', 'La tronçonneuse', 'Le vide-cave'], e: 'NDS 064.', s: 'prompt' }
  ]
});
