/* CHEF D’ÉQUIPE INCENDIE — fichier 5 : CE 5 (Manœuvres incendie en binôme) et CE 6 (PAO et fin d’intervention)
   Sources : dossier formateur CE INC SDIS 51, « PARTIE G manœuvres INC » :
   - « 1.5 manœuvres / document formateur manœuvre M1 à M6 » (SDIS 51, groupement formation, 13/05/2016), tableaux CHEF / ÉQUIPIER
     relus dans le .docx original (structure des cellules fusionnées vérifiée sur le rendu PDF) ;
   - « 1.5 manœuvres / Fiche séquentielle » (séquence 5, les différentes manœuvres M1 à M6) ;
   - « 1.5 manœuvres / grilles d’évaluations formatives incendie » (14 fiches : M1, M2.1, M2.2, M2.4, M3.1 BAT/BAL, M3.2 BAT/BAL,
     M3.3, M3.4, M3.5, M4, M5, M6 ; cases grisées relevées dans les .docx) ;
   - « 2 manœuvre binôme » : diaporamas « ets en binôme » (liste des déclinaisons), M2, M3 (SDIS 51), M4, M5, M6 (CSP Reims,
     service formation, 09/2000), « manœuvres lances ».
   - Livret stagiaire Chef d’équipe incendie SDIS 51 v2019.1, Partie 1 (p. 8-12) et Partie 5 (p. 28-29).
   - POP-32 SDIS 51 « Protocole de réhabilitation suite à un incendie » (indice 01, 03-02-2023).
   - GDR Tuyaux en écheveaux SDIS 51 (v 03/05/2018), § III.2.2 (renvoi). */
var CE5 = 'CE 5 — Manœuvres incendie en binôme';
var CE6 = 'CE 6 — PAO et fin d’intervention';
var C5_DF = 'Document formateur « Rôle du binôme dans différentes manœuvres incendie M1 à M6 » (SDIS 51, 2016)';
var C5_GR = 'Grilles d’évaluation formative chef d’équipe M1 à M6 (SDIS 51)';
var C5_FS = 'Fiche séquentielle « Les différentes manœuvres M1 à M6 » (CE INC, séquence 5)';
var C5_DIA = 'Diaporamas formateur « Manœuvre binôme » (SDIS 51 ; M4-M6 : CSP Reims 09/2000)';
var C6_LIV = 'Livret stagiaire Chef d’équipe incendie SDIS 51 (v2019.1)';
var C6_POP = 'POP-32 SDIS 51 — Protocole de réhabilitation suite à un incendie (indice 01, 03-02-2023)';

/* Tableau Chef | Équipier : chaque ligne = [chef, équipier] ; une ligne à un seul élément = action commune du binôme. */
function ce5Tab(rows) {
  return '<div class="tw"><table><thead><tr><th>Chef</th><th>Équipier</th></tr></thead><tbody>' +
    rows.map(function (r) {
      return r.length === 1 ? '<tr><td colspan="2"><b>Binôme :</b> ' + r[0] + '</td></tr>'
        : '<tr><td>' + (r[0] || '') + '</td><td>' + (r[1] || '') + '</td></tr>';
    }).join('') + '</tbody></table></div>';
}

/* =====================================================================================
   CE 5 — MANŒUVRES INCENDIE EN BINÔME
   ===================================================================================== */

VSAV.chap({
  id: 'ce-man-principes', part: 'ce', seq: CE5,
  title: 'Manœuvres M1 à M6 : organisation, ordres et évaluation du chef d’équipe', short: 'Manœuvres : principes', motif: 'team',
  sources: [C5_DF + ', tableau récapitulatif (p. 1)', C5_FS, C5_GR, C5_DIA + ', « ets en binôme », M2, M3, M4, M5', C6_LIV + ', Partie 1 (p. 10-11)', 'GDR Tuyaux en écheveaux SDIS 51 (v 03/05/2018), § III.2.2 (p. 17)'],
  summary: 'Les 13 manœuvres M1 à M6, les commandements du chef d’agrès, et ce que l’évaluateur observe chez le chef d’équipe.',
  why: '<b>Pourquoi des manœuvres « par cœur » ?</b> Une manœuvre type répartit d’avance qui porte quoi, qui va où, qui crie quoi. Le chef d’agrès n’a qu’un mot à dire (« M3 », « établissez ! ») pour que deux binômes agissent sans se gêner. Pour le chef d’équipe, connaître <b>aussi la colonne de son équipier</b> est indispensable : le livret lui demande de <b>s’assurer que son équipier exécute correctement la manœuvre</b> et les grilles vérifient qu’il est <b>capable de le corriger</b>.',
  sections: [
    { id: 'role', t: 'Le chef d’équipe pendant un établissement', ic: 'team', src: C6_LIV + ', Partie 1, « Établissement » (p. 10) et § 2 (p. 11)',
      html: '<ul class="check">' +
        '<li>Dans le cadre d’un incendie, le chef d’équipe <b>s’assure que son équipier exécute correctement la manœuvre</b> et se conforme aux <b>règles d’établissement des tuyaux</b>.</li>' +
        '<li>Il s’assure de la <b>bonne compréhension par son équipier</b> de l’ordre donné par le chef d’agrès : tout ordre du chef d’agrès est <b>répercuté</b> par le chef d’équipe à son équipier.</li>' +
        '<li>Un ordre n’est <b>jamais interprété ni modifié</b>, sauf urgence avérée ou modification de la situation (cheminement impraticable, plafond menaçant…).</li>' +
        '<li>Il est <b>personnellement responsable de la sécurité individuelle</b> au sein de son équipe (EPI, engagement sous ARI…).</li></ul>' +
        '<p>Dans les tableaux des chapitres suivants, une ligne centrée « Binôme » est une action commune (cellule fusionnée dans le document formateur). Rappels équipier : <a href="#/c/inc-etablissements">règles et commandements des établissements</a>, <a href="#/c/inc-manoeuvres-etb">manœuvres ETB-1 à ETB-6</a>.</p>' },
    { id: 'tableau', t: 'Tableau récapitulatif des manœuvres', ic: 'grid', src: C5_DF + ', tableau récapitulatif (p. 1)',
      html: '<div class="tw"><table><thead><tr><th>Manœuvre</th><th>Intitulé</th><th>Binôme(s)</th></tr></thead><tbody>' +
        '<tr><td><b>M1</b></td><td>Établissement de la LDT</td><td>BAT</td></tr>' +
        '<tr><td><b>M2.1</b></td><td>Alimentation d’une division au moyen du dévidoir</td><td>BAL</td></tr>' +
        '<tr><td><b>M2.2</b></td><td>Alimentation d’une division au moyen de tuyaux (roulés) en double</td><td>BAL</td></tr>' +
        '<tr><td><b>M2.3</b></td><td>Alimentation d’une colonne sèche au moyen du dévidoir</td><td>BAL</td></tr>' +
        '<tr><td><b>M2.4</b></td><td>Alimentation d’une colonne sèche au moyen de tuyaux roulés en double</td><td>BAL</td></tr>' +
        '<tr><td><b>M3.1</b></td><td>Établissement d’une DMRS par l’extérieur au moyen de la commande</td><td>BAT + BAL</td></tr>' +
        '<tr><td><b>M3.2</b></td><td>Établissement d’une DMRS au moyen de l’échelle à coulisses</td><td>BAT + BAL</td></tr>' +
        '<tr><td><b>M3.3</b></td><td>DMRS par les communications existantes avec emploi du sac d’attaque</td><td>BAT</td></tr>' +
        '<tr><td><b>M3.4</b></td><td>DMRS par les communications existantes avec des tuyaux roulés en double</td><td>BAT</td></tr>' +
        '<tr><td><b>M3.5</b></td><td>DMRS dans les étages par le jour central de l’escalier</td><td>BAT + BAL</td></tr>' +
        '<tr><td><b>M4</b></td><td>Alimentation de l’engin</td><td>BAL</td></tr>' +
        '<tr><td><b>M5</b></td><td>Établissement d’une lance à mousse</td><td>BAT</td></tr>' +
        '<tr><td><b>M6</b></td><td>Remplacement / prolongation de tuyau</td><td>BAT</td></tr>' +
        '</tbody></table></div>' +
        '<p class="small muted">DMRS : le récapitulatif écrit « DMRS » ; les fiches détaillées parlent de « LDMR(S) 500 ».</p>' +
        '<div class="callout warn"><b>Numérotations différentes selon les documents.</b> Le diaporama « ets en binôme » décline autrement : M2 « alimentation d’une prise d’eau » (2.1 à 2.4) ; M3 en <b>3.1 plain-pied</b>, <b>3.2 communications existantes</b>, <b>3.3 par l’extérieur</b>, <b>3.4 échelle à coulisses</b>, <b>3.5 sur colonne sèche</b>, chacune au sac d’attaque ou en « bis » avec tuyaux roulés en double ; M4 en 4.1 (&lt; 10 m), 4.2 (&lt; 20 m), 4.3 (&gt; 20 m), 4.4 (par l’établissement) — le diaporama « manœuvres lances » ajoute <b>4.5 par aspiration</b> ; M5 en 5.1 (proportionneur mobile) et 5.2 (fixe) ; M6 en 6.1 (remplacement) et 6.2 (prolongement). Le diaporama M3 numérote encore autrement (M3.1 sac / communications existantes, M3.2 LDMR(S) 1000, M3.3 par l’extérieur). Ce site suit la numérotation du <b>document formateur et des grilles d’évaluation</b> ; demande à ton formateur celle qui est attendue.</div>' },
    { id: 'ordres', t: 'Commandements du chef d’agrès et réponses du binôme', ic: 'bolt', src: C5_DIA + ', M2 (diapos 1-4), M3 (diapos 1-5), M4, M5',
      html: '<p>Chaque manœuvre se déclenche en deux temps, adressés au binôme nommé (« Binôme d’attaque : … » / « Binôme d’alimentation : … ») :</p>' +
        '<div class="tw"><table><thead><tr><th>Temps</th><th>Exemples tirés des diaporamas</th><th>Ce que fait le binôme</th></tr></thead><tbody>' +
        '<tr><td><b>Commandement préparatoire</b></td><td>« Pour l’établissement d’une LDMR(S) 500 au moyen du sac d’attaque, <b>en reconnaissance</b> » ; « Pour l’établissement d’une division mixte au moyen du dévidoir, en reconnaissance »</td><td>Prend le matériel de la manœuvre et <b>suit le chef d’agrès</b></td></tr>' +
        '<tr><td><b>Commandement d’exécution</b></td><td>« Pour l’établissement d’une LDMR(S) 500, point d’attaque…, prise d’eau…, accès…, mission…, <b>établissez</b> » ; pour le BAL : « …emplacement de la division ici, prise d’eau l’engin…, établissez »</td><td>Exécute la manœuvre (tableaux Chef | Équipier)</td></tr>' +
        '</tbody></table></div>' +
        '<ul class="check"><li>M4 (diaporama) : <b>« Binôme d’alimentation ! Avec le dévidoir : alimentez l’engin ! »</b></li>' +
        '<li>M5 (diaporama) : « Binôme d’attaque ! Pour l’établissement d’une lance à mousse : en reconnaissance ! » puis « Une lance à mousse ! Point d’attaque…, <b>emplacement du proportionneur</b>…, prise d’eau…, accès…, mission… : établissez ! »</li>' +
        '<li>Commandements <b>entre membres du binôme</b> : « Halte » (M1), « Attention pour envoyer », « Envoyez », « Hissez » (M3.1), « Ouvrez » (M3.1, M6).</li></ul>' },
    { id: 'grille', t: 'La grille d’évaluation formative : ce qui est observé', ic: 'check', src: C5_GR + ' (critères communs, cases grisées) ; ' + C5_FS,
      html: '<p>La séquence (3 h 45 dont 3 h 30 de mise en situation) a pour objectif : « en binôme, réaliser une manœuvre incendie <b>en respectant la grille d’évaluation</b> ». Chaque grille « Chef d’équipe » observe les mêmes critères, seule la liste des gestes de la manœuvre change :</p>' +
        '<div class="tw"><table><thead><tr><th>Critère observé</th><th>Case NON grisée ?</th></tr></thead><tbody>' +
        '<tr><td>Surveille et observe son environnement en permanence</td><td>—</td></tr>' +
        '<tr><td><b>Porte les EPI adaptés</b></td><td><b>Oui</b></td></tr>' +
        '<tr><td>Applique les consignes pour évoluer en sécurité dans sa zone (balisage, coupure des fluides, explosimètre…) — <i>absent des grilles M2.1, M2.2, M2.4, M3.1 BAL, M3.2 BAL et M4</i></td><td>—</td></tr>' +
        '<tr><td><b>Est attentif à la sécurité du binôme, ne réalise pas de gestes dangereux</b></td><td><b>Oui</b></td></tr>' +
        '<tr><td>Adopte un comportement calme (ne panique pas, maîtrise son stress, reste concentré)</td><td>—</td></tr>' +
        '<tr><td>Assure son intervention en respectant les règles (GNR établissements de lance, manœuvre en binôme) : <b>liste des gestes du chef</b> pour la manœuvre</td><td>—</td></tr>' +
        '<tr><td>Communique avec son binôme (rend compte, compréhensible, clair…)</td><td>—</td></tr>' +
        '<tr><td><b>Est capable de corriger son équipier si une erreur est commise</b></td><td>—</td></tr>' +
        '<tr><td>Respecte et applique les ordres donnés par le chef d’agrès</td><td>—</td></tr>' +
        '</tbody></table></div>' +
        '<div class="callout bad"><b>Règle de validation :</b> <b>1 NON en case grisée</b> ou <b>2 NON</b> sur l’ensemble des cases entraîne la <b>non-validation</b>. En cas de NON en case grisée, la manœuvre <b>est stoppée</b> et le stagiaire est informé des gestes dangereux.</div>' +
        '<p class="small muted">Il n’existe pas de grille M2.3 dans le dossier fourni ; M3.1 et M3.2 ont une grille BAT et une grille BAL.</p>' },
    { id: 'echeveaux', t: 'Et les tuyaux en écheveaux ?', ic: 'rope', src: 'GDR Tuyaux en écheveaux SDIS 51, § I et § III.2.2 (p. 4 et 17)',
      html: '<p>Le GDR écheveaux <b>adapte</b> M2, M3 et M4 ; il précise que <b>les manœuvres M1 à M6 sont toujours en vigueur</b> et que le chef d’agrès décide seul d’employer, en tout ou partie, les écheveaux. Ce qui change pour le chef d’équipe, c’est le <b>mot du commandement préparatoire</b> qui lui dit quel matériel prendre :</p>' +
        '<div class="tw"><table><thead><tr><th>Binôme</th><th>Commandement</th><th>Matériel</th></tr></thead><tbody>' +
        '<tr><td>BAT</td><td>« <b>M3</b> : pour l’établissement d’une lance X, en reconnaissance »</td><td>Tuyaux roulés en couronne (manœuvre classique)</td></tr>' +
        '<tr><td>BAT</td><td>« <b>E3</b> : pour l’établissement d’une lance X épaulés, en reconnaissance »</td><td>Tuyaux épaulés (écheveaux)</td></tr>' +
        '<tr><td>BAL</td><td>« <b>M2</b> : pour l’établissement d’une division avec emploi du dévidoir mobile (ou avec tuyaux en couronne), en reconnaissance »</td><td>Dévidoir ou couronnes</td></tr>' +
        '<tr><td>BAL</td><td>« <b>E2</b> : pour l’établissement d’une division d’attaque, en reconnaissance »</td><td>Tuyaux épaulés</td></tr>' +
        '</tbody></table></div>' +
        '<p>Le matériel porté par chef et équipier, le sens d’établissement et la LDV épaulée sont détaillés côté équipier : <a href="#/c/inc-echeveaux">Les tuyaux en écheveaux</a>.</p>' }
  ],
  key: ['13 manœuvres : M1, M2.1 à M2.4, M3.1 à M3.5, M4, M5, M6.', 'Le chef d’équipe s’assure que son équipier exécute correctement la manœuvre et répercute les ordres du chef d’agrès.', 'Préparatoire : « … en reconnaissance » ; exécution : « … établissez ».', 'M4 : « Binôme d’alimentation ! Avec le dévidoir : alimentez l’engin ! »', 'Cases grisées : EPI adaptés et sécurité du binôme.', '1 NON grisé ou 2 NON = non validé ; NON grisé = manœuvre stoppée.', 'Écheveaux : « E3 » (BAT) et « E2 » (BAL) ; M1 à M6 restent en vigueur.'],
  traps: ['Ne connaître que sa propre colonne : on ne peut pas corriger son équipier.', 'Partir au commandement préparatoire sans le matériel prévu par la manœuvre.', 'Croire qu’une erreur de geste suffit à échouer : c’est un NON en case grisée (EPI, sécurité du binôme) ou deux NON qui font échouer.', 'Mélanger les numérotations du document formateur et du diaporama.'],
  quiz: [
    { q: 'Pendant un établissement, le livret CE demande au chef d’équipe :', c: ['De s’assurer que son équipier exécute correctement la manœuvre et respecte les règles d’établissement', 'De laisser l’équipier gérer seul sa partie', 'D’attendre le compte rendu du conducteur', 'De réaliser lui-même tous les raccordements'], e: 'Livret CE, Partie 1, « Établissement » (p. 10).', s: 'role' },
    { q: 'Quelle manœuvre correspond à « alimentation d’une colonne sèche au moyen de tuyaux roulés en double » ?', c: ['M2.4', 'M2.2', 'M3.4', 'M4'], e: 'Document formateur, tableau récapitulatif : M2.3 au dévidoir, M2.4 en tuyaux roulés en double.', s: 'tableau' },
    { q: 'Quelle est la manœuvre M3.5 dans le document formateur ?', c: ['DMRS dans les étages par le jour central de l’escalier', 'DMRS au moyen de l’échelle à coulisses', 'DMRS sur colonne sèche', 'Lance à mousse'], e: 'Tableau récapitulatif ; attention, le diaporama « ets en binôme » numérote autrement (3.5 = colonne sèche).', s: 'tableau' },
    { q: 'Quels sont les deux critères en case grisée des grilles chef d’équipe ?', c: ['Porte les EPI adaptés ; est attentif à la sécurité du binôme', 'Communique avec son binôme ; respecte les ordres', 'Observe son environnement ; reste calme', 'Corrige son équipier ; rend compte'], e: 'Grilles M1 à M6 : seules ces deux cases NON sont grisées.', s: 'grille' },
    { q: 'Quand la manœuvre est-elle non validée ?', c: ['1 NON en case grisée ou 2 NON sur l’ensemble', '1 NON quelconque', '3 NON sur l’ensemble', 'Seulement si le feu n’est pas éteint'], e: 'En-tête de chaque grille d’évaluation formative.', s: 'grille' },
    { q: 'Comment se termine le commandement préparatoire d’une manœuvre ?', c: ['« … en reconnaissance »', '« … établissez »', '« … alimentez l’engin »', '« … ouvrez »'], e: 'Diaporamas M2 et M3 : préparatoire « en reconnaissance », exécution « établissez ».', s: 'ordres' },
    { q: 'Que signifie un commandement « E3 » pour un BAT ?', c: ['Établir une lance avec des tuyaux épaulés (écheveaux)', 'Établir 3 tuyaux en couronne', 'Établir sur une colonne sèche au 3e étage', 'Établir une division d’attaque'], e: 'GDR écheveaux § III.2.2 : M3 = couronnes, E3 = épaulés ; E2 = division d’attaque pour le BAL.', s: 'echeveaux' }
  ]
});

VSAV.chap({
  id: 'ce-man-alimentation', part: 'ce', seq: CE5,
  title: 'M1, M2 et M4 : LDT, divisions, colonnes sèches et alimentation de l’engin', short: 'M1, M2, M4 : alimentation', motif: 'drop',
  sources: [C5_DF + ', fiches M1, M2.1 à M2.4, M4 (p. 2-6 et 12)', C5_GR + ', M1, M2.1, M2.2, M2.4, M4', C5_DIA + ', M2 (diapos 1-4) et M4 (diapos 1-2)'],
  summary: 'Qui fait quoi dans la LDT, l’alimentation d’une division ou d’une colonne sèche, et l’alimentation de l’engin.',
  why: '<b>Pourquoi le chef de BAL est-il aussi important que le porte-lance ?</b> Une lance sans eau est inutile, et une colonne sèche mal branchée (vanne purge à l’envers) noie la cage d’escalier ou prive le BAT d’eau. Le chef BAL pose la division au bon endroit, contrôle les tubulures, puis <b>remonte l’établissement</b> pour s’assurer qu’il n’y a ni coude ni fuite avant de se remettre à disposition du chef d’agrès.',
  sections: [
    { id: 'm1', t: 'M1 — Établissement de la LDT (BAT)', ic: 'play', src: C5_DF + ', M1 (p. 2) ; ' + C5_GR + ', M1',
      html: ce5Tab([
        ['Décroche la LDT', ''],
        ['Fait une réserve sur l’épaule', ''],
        ['Se rend au point d’attaque', 'Facilite le déroulement du tuyau'],
        ['', 'Dépose le 1<sup>er</sup> raccord au pied du chef'],
        ['Crie « <b>Halte</b> » dès que l’équipier a déposé le 1<sup>er</sup> raccord', ''],
        ['', 'Retransmet l’ordre « <b>Halte</b> »'],
        ['Attaque le feu', 'Double le chef']
      ]) + '<p>Remarque : pour faciliter la manœuvre, le <b>BAL peut s’intercaler</b> judicieusement. Caractéristiques de la LDT : <a href="#/c/inc-manoeuvres-etb">ETB-1</a>.</p>' },
    { id: 'm21', t: 'M2.1 — Division au moyen du dévidoir (BAL)', ic: 'drop', src: C5_DF + ', M2.1 (p. 3) ; ' + C5_DIA + ', M2 diapo 1 ; ' + C5_GR + ', M2.1',
      html: ce5Tab([
        ['Décrochent le dévidoir et suivent le chef d’agrès'],
        ['Pose la division au sol', 'Bascule la flèche si besoin'],
        ['Tirent le dévidoir vers le point d’eau'],
        ['Donne le ½ raccord au conducteur qui met en eau (sauf ordre contraire) ou se raccorde sur la prise d’eau et ouvre cette dernière', 'Remet le dévidoir en état et le dépose à proximité de l’engin'],
        ['Vérifient l’établissement en remontant vers le point d’attaque et se mettent à disposition du chef d’agrès']
      ]) + '<div class="callout warn"><b>Formulations différentes :</b> la grille M2.1 attend du chef qu’il « <b>tient la division pendant que l’équipier tire le dévidoir</b> » ; le document formateur fait tirer le dévidoir par le binôme ; le diaporama écrit « rejoint l’équipier et tire le dévidoir jusqu’au point d’eau ».</div>' },
    { id: 'm22', t: 'M2.2 — Division au moyen de tuyaux roulés en double (BAL)', ic: 'drop', src: C5_DF + ', M2.2 (p. 4) ; ' + C5_DIA + ', M2 diapo 2 ; ' + C5_GR + ', M2.2',
      html: ce5Tab([
        ['Se munit de <b>1 tuyau de 70 × 20 m</b> et d’une <b>division de 65 / 2 × 40</b>', 'Se munit de <b>2 tuyaux de 70 × 20 m</b>'],
        ['Suivent le chef d’agrès'],
        ['Déroule son tuyau', 'Déroule un ou deux tuyaux selon la distance'],
        ['Le raccorde à la division', 'Raccorde les tuyaux entre eux'],
        ['<b>Vérifie la fermeture des tubulures</b> et en ouvre une partiellement', ''],
        ['Rejoint l’équipier', 'Donne le ½ raccord au conducteur qui met en eau (sauf ordre contraire) ou se raccorde sur la prise d’eau et l’ouvre'],
        ['Vérifient l’établissement en remontant vers le point d’attaque et se mettent à disposition du chef d’agrès']
      ]) },
    { id: 'm23', t: 'M2.3 et M2.4 — Alimenter une colonne sèche (BAL)', ic: 'hospital', src: C5_DF + ', M2.3 et M2.4 (p. 5-6) ; ' + C5_DIA + ', M2 diapos 3-4 ; ' + C5_GR + ', M2.4',
      html: '<p><b>M2.3 — au moyen du dévidoir</b></p>' + ce5Tab([
        ['Se munit de la <b>vanne purge de 65 mm</b>', ''],
        ['Décrochent le dévidoir et suivent le chef d’agrès'],
        ['Retire la division du dévidoir', 'Tire le dévidoir vers la prise d’eau'],
        ['Raccorde la vanne purge à la colonne sèche et au tuyau du dévidoir. <b>Attention au sens de la vanne purge.</b>', ''],
        ['Rejoint l’équipier', 'Donne le ½ raccord au conducteur qui met en eau (sauf ordre contraire) ou se raccorde sur la prise d’eau et l’ouvre'],
        ['Vérifient l’établissement en remontant vers le point d’attaque et se mettent à disposition du chef d’agrès']
      ]) + '<p><b>M2.4 — au moyen de tuyaux roulés en double</b></p>' + ce5Tab([
        ['Se munit de 1 tuyau de 70 × 20 m, d’une vanne purge de 65 mm et d’un <b>tuyau de 70 × 2 m</b>', 'Se munit de 2 tuyaux de 70 × 20 m'],
        ['Déroule le tuyau de 70 × 20 m', 'Déroule un ou deux tuyaux selon la distance'],
        ['', 'Raccorde les tuyaux entre eux'],
        ['Raccorde la vanne purge à la colonne sèche et au tuyau. <b>Attention au sens de la vanne purge.</b>', ''],
        ['Rejoint l’équipier', 'Donne le ½ raccord au conducteur qui met en eau (sauf ordre contraire) ou se raccorde sur la prise d’eau et l’ouvre'],
        ['Vérifient l’établissement en remontant vers le point d’attaque et se mettent à disposition du chef d’agrès']
      ]) + '<p class="small muted">En M2.4, le document formateur et la grille écrivent « au tuyau du dévidoir » (repris de M2.3) ; le diaporama M2 écrit « au tuyau de 70 × 20 mètres ».</p>' +
        '<p>Côté équipier, le GTO rappelle de <b>vérifier les bouchons</b> de chaque orifice de la colonne sèche : <a href="#/c/inc-manoeuvres-etb">ETB-2</a>.</p>' },
    { id: 'ari-bal', t: 'Le BAL après sa mission', ic: 'shield', src: C5_DF + ', remarques M2.1 à M2.4 et M4 ; ' + C5_DIA + ', M2 diapos 1-4',
      html: '<p>Toutes les manœuvres du BAL se terminent de la même façon : <b>vérifier l’établissement en remontant</b> (vers le point d’attaque, ou vers l’engin en M4) puis <b>se mettre à disposition du chef d’agrès</b>.</p>' +
        '<div class="callout warn"><b>ARI : formulations différentes.</b> Le document formateur indique qu’« il est <b>possible</b> que le BAL, une fois sa mission finie, décide de s’équiper d’ARI avant de rejoindre le chef d’agrès » ; le diaporama M2 écrit pour chaque manœuvre « <b>s’équipent des ARI</b>, vérifient l’établissement… ». Applique la consigne de ton chef d’agrès.</div>' },
    { id: 'm4', t: 'M4 — Alimentation de l’engin (BAL)', ic: 'ambulance', src: C5_DF + ', M4 (p. 12) ; ' + C5_DIA + ', M4 (diapos 1-2) ; ' + C5_GR + ', M4',
      html: '<p>Commandement : « <b>Binôme d’alimentation ! Avec le dévidoir : alimentez l’engin !</b> »</p>' + ce5Tab([
        ['Décrochent le dévidoir et enlèvent la division si nécessaire'],
        ['À l’engin, <b>passe le raccord au conducteur</b> puis prend le matériel nécessaire pour ouvrir l’hydrant (PI / BI)', ''],
        ['Tirent le dévidoir vers l’hydrant'],
        ['À l’hydrant, <b>ouvre l’eau pour purger</b>', ''],
        ['Réalise le branchement', ''],
        ['Vérifient l’établissement en remontant vers l’engin et rangent le dévidoir'],
        ['Se mettent à disposition du chef d’agrès']
      ]) + '<p>Rôle du conducteur et seuils de distance (20 m) : <a href="#/c/inc-etablissements">Les établissements</a> et <a href="#/c/inc-manoeuvres-etb">ETB-4</a>.</p>',
      figs: [{ img: 'img/ce/5/m4-poteau.jpg', cap: 'M4 — Alimentation de l’engin sur poteau incendie', txt: '<p>Ligne « Chef » en haut, ligne « Équipier » en bas, actions de gauche à droite : matériel (clé de poteau, dévidoir), raccord passé au conducteur, dévidoir tiré vers l’hydrant, ouverture du poteau pour purger, branchement, puis binôme qui range le dévidoir et se présente au chef d’agrès.</p>', src: C5_DIA + ', M4 diapo 1 (CSP Reims 09/2000)' }] }
  ],
  key: ['M1 : le chef décroche la LDT, fait une réserve sur l’épaule, crie « Halte » quand l’équipier a posé le 1er raccord.', 'M2.2 : chef 1 × 70/20 m + division 65 / 2 × 40 ; équipier 2 × 70/20 m.', 'Le chef BAL vérifie la fermeture des tubulures et en ouvre une partiellement.', 'Colonne sèche : vanne purge de 65 mm, attention à son sens.', 'M2.4 : le chef ajoute un tuyau de 70 × 2 m.', 'M4 : à l’hydrant, ouvrir pour purger avant de brancher.', 'Fin de mission BAL : remonter l’établissement, se mettre à disposition du chef d’agrès.'],
  traps: ['Monter la vanne purge à l’envers sur la colonne sèche.', 'Laisser toutes les tubulures de la division fermées (ou toutes ouvertes) avant la mise en eau.', 'Brancher sur l’hydrant sans l’avoir purgé.', 'Rejoindre le chef d’agrès sans avoir remonté et vérifié l’établissement.', 'En M1, crier « Halte » avant que l’équipier ait posé le 1er raccord.'],
  quiz: [
    { q: 'En M1, quand le chef crie-t-il « Halte » ?', c: ['Dès que l’équipier a déposé le 1er raccord à son pied', 'Dès qu’il voit le feu', 'Quand la LDT est entièrement déroulée', 'Quand le conducteur a mis en eau'], e: 'Document formateur M1 ; l’équipier retransmet l’ordre « Halte ».', s: 'm1' },
    { q: 'En M2.2, de quoi se munit le chef BAL ?', c: ['1 tuyau de 70 × 20 m et une division de 65 / 2 × 40', '2 tuyaux de 70 × 20 m', 'La vanne purge de 65 mm', 'Le dévidoir mobile'], e: 'Document formateur M2.2 ; l’équipier prend 2 tuyaux de 70 × 20 m.', s: 'm22' },
    { q: 'Que fait le chef BAL à la division, en M2.2, avant de rejoindre son équipier ?', c: ['Il vérifie la fermeture des tubulures et en ouvre une partiellement', 'Il ouvre toutes les tubulures en grand', 'Il démonte la division', 'Il raccorde la lance du BAT'], e: 'Document formateur et grille M2.2.', s: 'm22' },
    { q: 'Quel matériel supplémentaire est spécifique à l’alimentation d’une colonne sèche ?', c: ['La vanne purge de 65 mm', 'Le proportionneur', 'La commande', 'Le col de cygne'], e: 'M2.3 et M2.4 : « attention au sens de la vanne purge ».', s: 'm23' },
    { q: 'En M2.4, quel tuyau particulier le chef emporte-t-il en plus ?', c: ['Un tuyau de 70 × 2 m', 'Un tuyau de 110 × 10 m', 'Un tuyau de 45 × 20 m', 'Un aspiral'], e: 'Document formateur et grille M2.4.', s: 'm23' },
    { q: 'En M4, que fait le chef BAL à l’hydrant avant le branchement ?', c: ['Il ouvre l’eau pour purger', 'Il ferme la vanne de l’engin', 'Il pose une retenue', 'Il appelle le CODIS'], e: 'Document formateur et grille M4.', s: 'm4' },
    { q: 'Comment se termine une manœuvre du BAL ?', c: ['Le binôme vérifie l’établissement en remontant, puis se met à disposition du chef d’agrès', 'Le binôme rentre à l’engin sans rendre compte', 'Le binôme attaque le feu directement', 'Le binôme reste à la prise d’eau jusqu’à la fin'], e: 'Fiches M2.1 à M2.4 et M4.', s: 'ari-bal' }
  ]
});

VSAV.chap({
  id: 'ce-man-dmrs', part: 'ce', seq: CE5,
  title: 'M3.1 à M3.5 : établir une lance LDMR(S) 500', short: 'M3 : LDMR(S) 500', motif: 'flame',
  sources: [C5_DF + ', fiches M3.1 à M3.5 (p. 7-11)', C5_GR + ', M3.1 BAT/BAL, M3.2 BAT/BAL, M3.3, M3.4, M3.5', C5_DIA + ', M3 (diapos 1-5)'],
  summary: 'Par l’extérieur à la commande ou à l’échelle à coulisses, par les communications existantes, par le jour de l’escalier.',
  why: '<b>Pourquoi le chef BAT ordonne-t-il lui-même l’eau ?</b> Il est porte-lance : lui seul sait quand il est en place, sa réserve faite, prêt à recevoir la pression. Dans les manœuvres verticales, l’eau arrivant trop tôt alourdit le tuyau pendant qu’on le hisse ; trop tard, le binôme est exposé sans protection. D’où des commandements nets (« attention pour envoyer », « envoyez », « hissez », « ouvrez ») que le chef d’équipe doit donner <b>et faire répéter</b>.',
  sections: [
    { id: 'm31', t: 'M3.1 — Par l’extérieur au moyen de la commande', ic: 'rope', src: C5_DF + ', M3.1 (p. 7) ; ' + C5_GR + ', M3.1 BAT et M3.1 BAL',
      html: '<p><b>Binôme d’attaque</b></p>' + ce5Tab([
        ['Déroule son tuyau <b>parallèlement à la façade</b>', 'Déroule ses tuyaux parallèlement à la façade'],
        ['Raccorde sa lance', 'Réalise ses branchements'],
        ['', 'Donne le ½ raccord au conducteur ou raccorde à la prise d’eau désignée'],
        ['Se rendent au niveau concerné'],
        ['Crie « <b>Attention pour envoyer</b> »', 'Envoie la commande à l’ordre du BAL'],
        ['Hissent la lance'],
        ['Se rend au point d’attaque', 'Constitue la réserve'],
        ['', 'Amarre la lance à un point fixe'],
        ['', 'Ordonne l’ouverture de l’eau'],
        ['Attaque le feu', 'Vient doubler le chef']
      ]) + '<p><b>Binôme d’alimentation</b></p>' + ce5Tab([
        ['Se placent à l’endroit où sera hissée la lance'],
        ['Donne l’ordre « <b>Envoyez</b> »', 'Sécurise la zone de réception'],
        ['Amarrent la lance avec la commande et ordonnent « <b>Hissez</b> »'],
        ['Facilitent la montée du tuyau'],
        ['Ordonne l’ouverture de l’eau au conducteur ou ouvre l’eau à la prise d’eau', '']
      ]) + '<div class="callout warn"><b>Deux organisations selon la source.</b> Le document formateur fait recevoir la commande par le <b>BAL</b>. Le diaporama M3 (fiche « M3.3 par l’extérieur au moyen de la commande ») fait tout réaliser par le <b>BAT</b> : le chef BAT récupère la commande de son équipier, monte et crie « Attention pour envoyer » ; l’équipier BAT se place au pied, sécurise la zone, répond « Envoyez », amarre la lance et ordonne « Hissez » ; le chef se constitue une réserve, amarre le tuyau à un point fixe et ordonne « <b>Ouvrez</b> » ; l’équipier raccorde à la prise d’eau et ouvre l’eau (ou la fait ouvrir), puis vient doubler le chef.</div>' },
    { id: 'm32', t: 'M3.2 — Au moyen de l’échelle à coulisses', ic: 'mountain', src: C5_DF + ', M3.2 (p. 8) ; ' + C5_GR + ', M3.2 BAT et M3.2 BAL',
      html: '<p><b>Binôme d’attaque</b></p>' + ce5Tab([
        ['Déroule son tuyau parallèlement à la façade', 'Déroule ses tuyaux parallèlement à la façade'],
        ['Raccorde sa lance', 'Réalise ses branchements'],
        ['', 'Donne le ½ raccord au conducteur ou raccorde à la prise d’eau désignée'],
        ['<b>Passe le tuyau entre ses jambes</b>, puis monte à l’étage concerné', 'Fait suivre le tuyau puis monte derrière le chef'],
        ['Se rend au point d’attaque', 'Constitue la réserve d’<b>au moins 1 tuyau</b>, puis l’amarre à un point fixe'],
        ['', 'Ordonne l’ouverture de l’eau'],
        ['Attaque le feu', 'Double le chef']
      ]) + '<p><b>Binôme d’alimentation</b></p>' + ce5Tab([
        ['Emmènent l’échelle où elle sera dressée'],
        ['Dresse puis développe l’échelle', 'Maintient les montants'],
        ['Fait suivre le tuyau pour l’équipier BAT', ''],
        ['Ordonne l’ouverture de l’eau au conducteur ou ouvre l’eau à la prise d’eau', '']
      ]) + '<p>Mise en œuvre de l’échelle à coulisses : <a href="#/c/inc-echelles">Les échelles à main</a>.</p>' },
    { id: 'm33', t: 'M3.3 et M3.4 — Par les communications existantes', ic: 'walk', src: C5_DF + ', M3.3 et M3.4 (p. 9-10) ; ' + C5_DIA + ', M3 diapos 1-2 ; ' + C5_GR + ', M3.3 et M3.4',
      html: '<p><b>M3.3 — avec le sac d’attaque</b> (BAT seul)</p>' + ce5Tab([
        ['Prennent le sac d’attaque et suivent le chef d’agrès'],
        ['Sort le premier tuyau du sac d’attaque. <b>Indique le point d’eau à l’équipier.</b>', 'Tire le sac d’attaque jusqu’au point d’eau'],
        ['', 'Raccorde à la prise d’eau et ouvre la tubulure, ou donne le ½ raccord au conducteur qui ouvre l’eau sauf ordre contraire'],
        ['Arrange sa réserve de tuyau', 'Remonte l’établissement'],
        ['Attaque le feu', 'Vient doubler le chef']
      ]) + '<p><b>M3.4 — avec des tuyaux roulés en double</b> (BAT seul)</p>' + ce5Tab([
        ['Se munit d’<b>un tuyau de 45 × 20 m</b> et d’une <b>LDMR(S) 500</b>', 'Se munit de <b>deux tuyaux de 45 × 20 m</b>'],
        ['Suivent le chef d’agrès'],
        ['Déroule son tuyau et le raccorde à sa LDMR(S) 500', 'Déroule un tuyau'],
        ['', 'Le raccorde au tuyau du chef et à la prise d’eau'],
        ['Arrange sa réserve de tuyau', 'Ouvre la tubulure ou donne le ½ raccord au conducteur qui ouvre l’eau sauf ordre contraire'],
        ['', 'Remonte l’établissement'],
        ['Attaque le feu', 'Vient doubler le chef']
      ]) + '<p>Le diaporama M3 précise que <b>le troisième tuyau est déroulé sur ordre du chef d’agrès</b>, et présente la même manœuvre en <b>LDMR(S) 1000</b> : chef 1 tuyau de <b>70 × 20 m</b> + LDMR(S) 1000, équipier 2 tuyaux de 70 × 20 m.</p>' },
    { id: 'm35', t: 'M3.5 — Dans les étages par le jour central de l’escalier', ic: 'hospital', src: C5_DF + ', M3.5 (p. 11) ; ' + C5_GR + ', M3.5',
      html: '<p><b>Binôme d’attaque</b></p>' + ce5Tab([
        ['Déroule son tuyau <b>perpendiculairement à l’entrée</b> du bâtiment', 'Déroule ses tuyaux perpendiculairement à l’entrée du bâtiment'],
        ['Raccorde sa lance', 'Réalise ses branchements'],
        ['', 'Donne le ½ raccord au conducteur ou raccorde à la prise d’eau désignée'],
        ['Monte à l’étage concerné, <b>lance à la main, tuyau à l’extérieur de la rampe</b>', 'Monte avec le chef et facilite le déroulement du tuyau'],
        ['Se rend au point d’attaque', 'Constitue une réserve et amarre le tuyau'],
        ['<b>Ordonne l’ouverture de l’eau</b>', ''],
        ['Attaque le feu', 'Double le chef']
      ]) + '<p><b>Binôme d’alimentation</b></p>' + ce5Tab([
        ['Installent une prise d’eau si le chef d’agrès l’a demandé'],
        ['Fait suivre le tuyau à travers le jour de l’escalier pour le BAT', 'Fait suivre le tuyau pour son chef'],
        ['', 'Retourne ouvrir l’eau']
      ]) },
    { id: 'qui-eau', t: 'Qui ordonne l’eau ? Ce que le chef BAT doit retenir', ic: 'bolt', src: C5_DF + ', M3.1 à M3.5 ; ' + C5_GR + ', M3.1 BAT à M3.5',
      html: '<div class="tw"><table><thead><tr><th>Manœuvre</th><th>Ouverture de l’eau (document formateur)</th><th>Gestes du chef BAT notés par la grille</th></tr></thead><tbody>' +
        '<tr><td>M3.1</td><td>Équipier BAT l’ordonne ; chef BAL l’ordonne au conducteur ou ouvre à la prise d’eau</td><td>Tuyau parallèle à la façade, lance raccordée, monte, crie « Attention pour envoyer », aide à hisser, point d’attaque, attaque</td></tr>' +
        '<tr><td>M3.2</td><td>Équipier BAT l’ordonne ; chef BAL l’ordonne au conducteur ou ouvre à la prise d’eau</td><td>Tuyau parallèle à la façade, lance raccordée, tuyau entre les jambes, monte, point d’attaque, attaque</td></tr>' +
        '<tr><td>M3.3 / M3.4</td><td>Équipier BAT ouvre la tubulure ou donne le ½ raccord au conducteur, qui ouvre sauf ordre contraire</td><td>Matériel, suit le chef d’agrès, (sort le 1er tuyau et indique le point d’eau), arrange sa réserve, attaque</td></tr>' +
        '<tr><td>M3.5</td><td><b>Chef BAT</b> l’ordonne ; équipier BAL retourne ouvrir l’eau</td><td>Tuyau perpendiculaire à l’entrée, monte lance à la main tuyau à l’extérieur de la rampe, point d’attaque, ordonne l’eau, attaque</td></tr>' +
        '</tbody></table></div>' +
        '<p>Dans tous les cas, l’équipier BAT <b>constitue la réserve</b> (ou le chef « arrange sa réserve ») et <b>vient doubler le chef</b> au point d’attaque. Rôle de l’équipier pendant l’attaque : <a href="#/c/inc-binome-attaque">Le binôme d’attaque</a>.</p>' }
  ],
  key: ['Par l’extérieur (M3.1, M3.2) : tuyaux parallèles à la façade.', 'M3.1 : « Attention pour envoyer » (chef BAT) → « Envoyez » → « Hissez ».', 'M3.2 : le chef passe le tuyau entre ses jambes ; l’équipier fait une réserve d’au moins 1 tuyau et l’amarre.', 'M3.3 : le chef sort le 1er tuyau du sac et indique le point d’eau à l’équipier.', 'M3.4 : chef 1 × 45/20 m + LDMR(S) 500 ; équipier 2 × 45/20 m.', 'M3.5 : tuyaux perpendiculaires à l’entrée ; lance à la main, tuyau à l’extérieur de la rampe ; le chef BAT ordonne l’eau.', 'L’équipier BAT finit toujours par doubler le chef.'],
  traps: ['Hisser une lance déjà en eau ou envoyer la commande sans « Attention pour envoyer ».', 'Oublier d’amarrer le tuyau à un point fixe dans une manœuvre verticale.', 'En M3.5, monter avec le tuyau à l’intérieur de la rampe.', 'Laisser l’équipier partir vers la prise d’eau sans lui avoir indiqué le point d’eau (M3.3).'],
  quiz: [
    { q: 'En M3.1 (document formateur), qui crie « Attention pour envoyer » ?', c: ['Le chef BAT, arrivé au niveau concerné', 'Le chef BAL au pied de la façade', 'Le conducteur', 'Le chef d’agrès'], e: 'Fiche M3.1 BAT ; le BAL répond « Envoyez » puis ordonne « Hissez ».', s: 'm31' },
    { q: 'En M3.1, que fait l’équipier BAL pendant que son chef donne l’ordre « Envoyez » ?', c: ['Il sécurise la zone de réception', 'Il ouvre l’eau', 'Il monte à l’étage', 'Il dresse l’échelle'], e: 'Fiche M3.1 BAL.', s: 'm31' },
    { q: 'En M3.2, comment le chef BAT monte-t-il à l’échelle à coulisses ?', c: ['Il passe le tuyau entre ses jambes, puis monte', 'Il porte le tuyau en bandoulière', 'Il hisse le tuyau à la commande', 'Il laisse le tuyau au sol'], e: 'Document formateur et grille M3.2 BAT.', s: 'm32' },
    { q: 'En M3.2, quelle réserve l’équipier BAT constitue-t-il ?', c: ['Au moins 1 tuyau, amarré à un point fixe', 'Deux à trois tours sur l’épaule', 'Aucune réserve', 'Une réserve au pied de l’échelle'], e: 'Document formateur M3.2.', s: 'm32' },
    { q: 'En M3.3, quel geste du chef BAT figure dans la grille ?', c: ['Sortir le premier tuyau du sac et indiquer le point d’eau à l’équipier', 'Tirer le sac jusqu’au point d’eau', 'Raccorder à la prise d’eau', 'Amarrer la lance à la commande'], e: 'Grille M3.3 ; c’est l’équipier qui tire le sac vers le point d’eau.', s: 'm33' },
    { q: 'En M3.4, de quoi se munit le chef BAT ?', c: ['1 tuyau de 45 × 20 m et une LDMR(S) 500', '2 tuyaux de 45 × 20 m', '1 tuyau de 70 × 20 m et une division', 'Le sac d’attaque'], e: 'Document formateur M3.4.', s: 'm33' },
    { q: 'En M3.5, comment le chef BAT monte-t-il ?', c: ['Lance à la main, tuyau à l’extérieur de la rampe', 'Tuyau à l’intérieur de la rampe', 'Par l’échelle à coulisses', 'Sans la lance, que l’équipier hisse'], e: 'Document formateur et grille M3.5.', s: 'm35' },
    { q: 'Dans quelle manœuvre le document formateur fait-il ordonner l’ouverture de l’eau par le chef BAT ?', c: ['M3.5', 'M3.1', 'M3.2', 'M3.3'], e: 'M3.5 : le chef BAT ordonne l’ouverture ; l’équipier BAL retourne ouvrir l’eau.', s: 'qui-eau' }
  ]
});

VSAV.chap({
  id: 'ce-man-mousse-tuyau', part: 'ce', seq: CE5,
  title: 'M5 lance à mousse et M6 remplacement ou prolongement de tuyau', short: 'M5 mousse, M6 tuyau', motif: 'spray',
  sources: [C5_DF + ', fiches M5 et M6 (p. 13-14)', C5_GR + ', M5 et M6', C5_DIA + ', M5 (diapos 1-4) et M6 (diapos 1-4)'],
  summary: 'Où intercaler le proportionneur, et comment couper puis rétablir l’eau sans dissocier le binôme.',
  why: '<b>Pourquoi M6 est-elle une manœuvre de chef ?</b> Couper l’eau d’une lance engagée, c’est priver le binôme de sa protection. C’est donc le <b>chef BAT</b>, qui voit le feu, qui <b>ordonne la fermeture</b> puis annonce « ouvrez » ; pendant ce temps l’équipier fait tout le travail de tuyau. En M5, l’enjeu est différent : un proportionneur mal placé ou un établissement non surveillé donne une mousse de mauvaise qualité.',
  sections: [
    { id: 'm5', t: 'M5 — Établissement d’une lance à mousse (BAT)', ic: 'spray', src: C5_DF + ', M5 (p. 13) ; ' + C5_DIA + ', M5 ; ' + C5_GR + ', M5',
      html: '<p>Commandements (diaporama) : « Binôme d’attaque ! Pour l’établissement d’une lance à mousse : <b>en reconnaissance</b> ! » puis « Une lance à mousse ! Point d’attaque…, <b>emplacement du proportionneur</b>…, prise d’eau…, accès…, mission… : <b>établissez</b> ! »</p>' + ce5Tab([
        ['Se munit de la <b>lance à mousse</b>, d’<b>un tuyau</b> et du <b>proportionneur</b>, puis se rend au point d’attaque', 'Se munit de <b>deux tuyaux</b> et se rend au point d’attaque'],
        ['Déroule son tuyau, raccorde sa lance', 'Déroule 1 ou 2 tuyaux si nécessaire'],
        ['', 'Réalise 1 ou 2 branchements, <b>intercale le proportionneur</b> soit entre le 1<sup>er</sup> et le 2<sup>e</sup> tuyau, soit entre le 2<sup>e</sup> et le 3<sup>e</sup> tuyau'],
        ['', 'Ouvre ou ordonne l’ouverture de l’eau'],
        ['Attaque le feu', '<b>Surveille l’établissement</b>'],
        ['', 'Vient doubler le chef au point d’attaque']
      ]) + '<p>Le diaporama distingue la lance à mousse <b>directement sur l’engin</b> et <b>sur division alimentée</b> ; la liste « ets en binôme » décline 5.1 sur proportionneur <b>mobile</b> et 5.2 sur proportionneur <b>fixe</b>. Émulseurs, proportionneurs et lances : <a href="#/c/inc-mousse">La mousse</a>.</p>',
      figs: [{ img: 'img/ce/5/m5-mousse-engin.jpg', cap: 'M5 — Lance à mousse directement sur l’engin', txt: '<p>Ligne « Chef » et ligne « Équipier » : matériel à gauche, actions de gauche à droite, jusqu’à l’attaque où l’équipier vient doubler le chef. Le second tableau (fond bleu) montre les bidons d’émulseur et leur transport.</p>', src: C5_DIA + ', M5 diapo 2 (CSP Reims 09/2000)' }] },
    { id: 'm6', t: 'M6 — Remplacement / prolongement de tuyau (BAT)', ic: 'reset', src: C5_DF + ', M6 (p. 14) ; ' + C5_DIA + ', M6 ; ' + C5_GR + ', M6',
      html: ce5Tab([
        ['<b>Poursuit son action</b>', 'Récupère un tuyau, rejoint le chef'],
        ['', 'Déroule le tuyau'],
        ['', 'Se rend à la prise d’eau, <b>annonce « prêt »</b>'],
        ['<b>Ordonne la fermeture de l’eau</b>', 'Ferme l’eau ou répercute l’ordre au conducteur'],
        ['Débranche et rebranche sa lance, raccorde les tuyaux et <b>annonce « Ouvrez »</b>', 'Ouvre l’eau ou répercute l’ordre au conducteur'],
        ['', 'Vient doubler le chef au point d’attaque']
      ]) + '<p>Le diaporama M6 présente quatre cas : <b>changement de tuyau sur division alimentée</b>, <b>changement de tuyau sur établissement de manœuvre</b>, <b>prolongement sur division alimentée</b> (6.1 remplacement, 6.2 prolongement dans la liste « ets en binôme »).</p>' +
        '<div class="callout ok">Côté équipier, la fiche GTO ETB-6 va dans le même sens : la fermeture de l’eau est commandée par le chef d’équipe du binôme d’attaque, avec une coupure la plus courte possible, et le tuyau de rechange est si possible apporté par une autre équipe pour ne pas dissocier le binôme. Voir <a href="#/c/inc-manoeuvres-etb">ETB-6</a>.</div>',
      figs: [{ img: 'img/ce/5/m6-changement-tuyau.jpg', cap: 'M6 — Changement de tuyau sur division alimentée', txt: '<p>Le chef poursuit l’attaque pendant que l’équipier apporte et déroule le tuyau ; l’équipier ferme puis rouvre la tubulure de la division sur ordre du chef, qui change le tuyau ; l’équipier revient enfin doubler le chef.</p>', src: C5_DIA + ', M6 diapo 1 (CSP Reims 09/2000)' }] },
    { id: 'eval', t: 'Ce que la grille attend du chef', ic: 'check', src: C5_GR + ', M5 et M6',
      html: '<div class="tw"><table><thead><tr><th>Manœuvre</th><th>Gestes du chef notés</th></tr></thead><tbody>' +
        '<tr><td><b>M5</b></td><td>Se munit de la lance à mousse, d’un tuyau et du proportionneur puis se rend au point d’attaque ; déroule son tuyau, raccorde sa lance ; attaque le feu.</td></tr>' +
        '<tr><td><b>M6</b></td><td>Poursuit son action ; ordonne la fermeture de l’eau ; débranche et rebranche sa lance, raccorde les tuyaux et annonce « ouvrez ».</td></tr>' +
        '</tbody></table></div>' +
        '<p>Les deux grilles comportent le critère « applique les consignes pour évoluer en sécurité dans sa zone d’intervention » et les deux cases grisées (EPI adaptés, sécurité du binôme).</p>' }
  ],
  key: ['M5 : chef = lance à mousse + 1 tuyau + proportionneur ; équipier = 2 tuyaux.', 'Proportionneur intercalé entre le 1er et le 2e, ou le 2e et le 3e tuyau.', 'M5 : l’équipier surveille l’établissement pendant l’attaque.', 'M6 : le chef poursuit son action jusqu’à ce que l’équipier annonce « prêt ».', 'M6 : le chef ordonne la fermeture, change, annonce « Ouvrez ».'],
  traps: ['M6 : faire fermer l’eau avant que l’équipier ait déroulé le tuyau de rechange et soit prêt.', 'M6 : le chef qui interrompt son attaque pour aller chercher le tuyau.', 'M5 : oublier de préciser ou de respecter l’emplacement du proportionneur.'],
  quiz: [
    { q: 'En M5, de quoi se munit le chef BAT ?', c: ['La lance à mousse, un tuyau et le proportionneur', 'Deux tuyaux', 'La lance à mousse seule', 'Les bidons d’émulseur'], e: 'Document formateur et grille M5 ; l’équipier prend deux tuyaux.', s: 'm5' },
    { q: 'Où l’équipier intercale-t-il le proportionneur en M5 ?', c: ['Entre le 1er et le 2e tuyau, ou entre le 2e et le 3e', 'Directement sur la lance', 'Sur l’engin uniquement', 'Après le 3e tuyau'], e: 'Document formateur M5.', s: 'm5' },
    { q: 'Que fait l’équipier en M5 pendant que le chef attaque le feu ?', c: ['Il surveille l’établissement, puis vient doubler le chef', 'Il retourne à l’engin', 'Il prépare une deuxième lance', 'Il ferme l’eau'], e: 'Document formateur M5.', s: 'm5' },
    { q: 'En M6, que fait le chef pendant que l’équipier va chercher et dérouler le tuyau ?', c: ['Il poursuit son action', 'Il ferme sa lance et attend', 'Il va à la prise d’eau', 'Il rend compte au CODIS'], e: 'Document formateur et grille M6.', s: 'm6' },
    { q: 'Qui ordonne la fermeture de l’eau en M6 ?', c: ['Le chef BAT', 'L’équipier BAT', 'Le conducteur', 'Le chef BAL'], e: 'M6 ; l’équipier ferme ou répercute l’ordre au conducteur.', s: 'm6' },
    { q: 'Quel mot le chef annonce-t-il une fois les tuyaux raccordés en M6 ?', c: ['« Ouvrez »', '« Halte »', '« Hissez »', '« Établissez »'], e: 'Document formateur et grille M6.', s: 'eval' }
  ]
});

/* =====================================================================================
   CE 6 — PAO ET FIN D’INTERVENTION
   ===================================================================================== */

VSAV.chap({
  id: 'ce-pao-fin', part: 'ce', seq: CE6,
  title: 'PAO, déblai et réhabilitation : ce que le chef d’équipe fait appliquer', short: 'PAO et fin d’intervention', motif: 'clip',
  sources: [C6_LIV + ', Partie 1 « Protection », « Déblais », « Surveillance » (p. 10) et § 3 comptes rendus (p. 11-12)', C6_LIV + ', Partie 5 (p. 28-29 : renvoi au livret EQ INC, partie PAO)', C6_POP],
  summary: 'Protéger les valeurs, déblayer sans excès ni indice détruit, surveiller, puis faire respecter la POP-32 par son binôme.',
  why: '<b>Pourquoi le chef d’équipe reste-t-il « chef » quand le feu est éteint ?</b> Parce que la fin d’intervention est le moment où l’on abîme ce qui a été épargné, où l’on jette des gravats par la fenêtre, où un bijou ou un indice disparaît, où l’on remonte en cabine avec une veste pleine de suies. Le chef d’équipe est le premier maillon qui <b>contrôle</b> : il ne fait pas tout lui-même, il <b>s’assure</b> que c’est bien fait et <b>rend compte</b>.',
  sections: [
    { id: 'pao', t: 'PAO : un renvoi au livret équipier', ic: 'book', src: C6_LIV + ', Partie 5 (p. 28-29)',
      html: '<p>Pour la Prévention appliquée à l’opération, le livret CE indique : « il est nécessaire de se reporter directement au <b>livret stagiaire EQ INC, partie Prévention appliquée à l’opération</b> ». Le contenu (prévention et prévision, moyens de secours, familles d’habitations) est donc celui du chapitre équipier : <a href="#/c/inc-pao">La prévention appliquée à l’opération</a>.</p>' +
        '<p class="small muted">Le livret CE n’ajoute pas de consigne propre au chef d’équipe pour la PAO.</p>' },
    { id: 'phases', t: 'Protection, déblai, surveillance : le rôle du chef d’équipe', ic: 'shield', src: C6_LIV + ', Partie 1, « Protection », « Déblais », « Surveillance » (p. 10)',
      html: '<div class="tw"><table><thead><tr><th>Phase</th><th>Ce que le chef d’équipe doit faire ou faire faire</th></tr></thead><tbody>' +
        '<tr><td><b>Protection</b></td><td>Prendre les dispositions pour qu’<b>aucun objet de valeur</b> (bijoux, argent, toiles, argenterie…) ne reste dans les lieux ; les remettre à son <b>chef d’agrès</b> ou, éventuellement, directement à la <b>police ou gendarmerie</b>.</td></tr>' +
        '<tr><td><b>Déblais</b> (après extinction, explosion, mouvement de terrain…)</td><td>S’assurer que le déblai est <b>très soigneusement</b> fait dans son secteur ; veiller à ce qu’<b>aucun déblai inutile</b> ne soit entrepris ; qu’il soit fait <b>proprement</b> (sans abîmer ni salir les pièces et cages d’escalier non touchées) et <b>en toute sécurité</b> (<b>interdit de jeter des gravats par les fenêtres</b>).</td></tr>' +
        '<tr><td>Découvertes pendant le déblai</td><td>Signaler <b>sans délai</b> au chef d’agrès (ou directement à la police ou gendarmerie) tout <b>objet suspect</b> (engin explosif, armes…) ou <b>de valeur</b> (bijoux, liquidités, œuvres d’art…). Veiller à ne pas faire disparaître, autant que possible, tout <b>indice</b> utile à une piste criminelle.</td></tr>' +
        '<tr><td><b>Surveillance</b></td><td>Il peut commander un <b>détachement de surveillance de jusqu’à 4 sapeurs</b> ; il assure les rondes ou contrôles prescrits et <b>rend compte de leur exécution</b>.</td></tr>' +
        '</tbody></table></div>' +
        '<p>Le pourquoi (phase accidentogène, PTI, critère des 2 h sans point chaud du GDO) est développé côté équipier : <a href="#/c/inc-deblai">Protection, déblai, surveillance et PTI</a>.</p>' },
    { id: 'cr', t: 'Rendre compte en fin d’intervention', ic: 'clip', src: C6_LIV + ', Partie 1, § 3 (p. 11-12)',
      html: '<ul class="check"><li>Compte rendu <b>impératif en cours d’action</b> notamment en cas de découverte de victime, d’<b>objet suspect ou de valeur</b>, d’accident, de moyens insuffisants ou de difficulté à remplir la mission.</li>' +
        '<li>Structure : <b>je suis, je vois, je fais, je demande</b> ; clair, précis, concis (un seul objet par compte rendu).</li>' +
        '<li>Le <b>compte rendu de fin de mission</b> permet au chef d’agrès de mesurer le résultat et, le cas échéant, de donner une nouvelle mission (déblai, surveillance…).</li></ul>' },
    { id: 'pop32', t: 'Réhabilitation : faire appliquer la POP-32 à son binôme', ic: 'spray', src: C6_POP + ', p. 1-4',
      html: '<p>La POP-32 repose sur <b>3 niveaux de souillure</b> (I superficiel, brosse ; II superficiel, eau ; III important, eau) et <b>5 protocoles</b> (1, 2, 3a, 3b, 3c). Le détail des étapes est dans le chapitre équipier : <a href="#/c/inc-rehabilitation">Réhabilitation après incendie : POP-32</a>. Le chef d’équipe, responsable de la sécurité individuelle dans son équipe, veille à ce que son binôme respecte les points qui coupent le transfert des suies :</p>' +
        '<ul class="check"><li>Le <b>zonage</b> (exclusion, contrôlée, soutien) et le <b>drap unique</b> en zone contrôlée, avec la caisse « décontamination ».</li>' +
        '<li>L’<b>ordre de retrait</b> : masque ARI, casque, (gants), cagoule, <b>puis</b> masque FFP2 et lunettes (et gants vinyle aux niveaux II et III).</li>' +
        '<li>Niveau II et 3b : tenue de feu (cagoule, pantalon, veste, gants textiles) dans un <b>sac hydrosoluble</b> ; ARI et matériels contaminés <b>isolés dans le coffre arrière</b> (ou VTU prévu en 3b).</li>' +
        '<li><b>Auto-nettoyage</b> des mains, du visage et du cou avec les gants de toilette à usage unique.</li>' +
        '<li>Le <b>FFP2 n’est retiré qu’une fois la décontamination terminée</b> et tout objet contaminé isolé.</li>' +
        '<li>Tenues de rhabillage perçues puis restituées au CIS ; au retour, nettoyage des tenues en machines spécifiques EPI ; si possible douche, changement de TSI et restauration avant retour en disponibilité.</li></ul>' +
        '<p class="small muted">Références de la POP-32 : GDO « Prévention des risques liés à la toxicité des fumées » (V2, 2020) et NDS 2020-028 modifiée.</p>' }
  ],
  key: ['PAO : le livret CE renvoie au livret EQ INC (partie PAO).', 'Protection : aucun objet de valeur ne reste ; remis au chef d’agrès ou à la police / gendarmerie.', 'Déblai : soigné, sans déblai inutile, propre, sûr ; interdit de jeter des gravats par les fenêtres.', 'Objet suspect ou de valeur découvert : compte rendu sans délai.', 'Surveillance : détachement de jusqu’à 4 sapeurs ; rondes, contrôles, compte rendu.', 'POP-32 : 3 niveaux, 5 protocoles ; FFP2 retiré en dernier.'],
  traps: ['Déblayer « large » pour être sûr : déblai inutile et indices détruits.', 'Garder sur soi un objet de valeur trouvé au lieu de le remettre au chef d’agrès.', 'Laisser son équipier retirer son masque FFP2 avant que les objets contaminés soient isolés.', 'Jeter des gravats par la fenêtre pour gagner du temps.'],
  quiz: [
    { q: 'Pour la PAO, le livret chef d’équipe :', c: ['Renvoie au livret stagiaire EQ INC, partie PAO', 'Contient un chapitre spécifique au CE', 'Renvoie au GDO Incendies de structures', 'Ne traite pas du tout le sujet'], e: 'Livret CE, Partie 5 (p. 29).', s: 'pao' },
    { q: 'Un équipier trouve des bijoux pendant le déblai. Le chef d’équipe :', c: ['Le signale sans délai et les remet au chef d’agrès ou, éventuellement, à la police ou gendarmerie', 'Les laisse sur place', 'Les remet au premier voisin', 'Les garde jusqu’au retour au centre'], e: 'Livret CE, Partie 1, « Protection » et « Déblais » (p. 10).', s: 'phases' },
    { q: 'Quel geste le livret CE interdit-il explicitement pendant le déblai ?', c: ['Jeter des gravats par les fenêtres', 'Utiliser une pelle', 'Porter l’ARI', 'Ventiler le local'], e: 'Livret CE p. 10 : déblai effectué en toute sécurité.', s: 'phases' },
    { q: 'Le chef d’équipe peut commander un détachement de surveillance de :', c: ['Jusqu’à 4 sapeurs', 'Jusqu’à 2 sapeurs', 'Jusqu’à 8 sapeurs', 'Un engin complet'], e: 'Livret CE, Partie 1, « Surveillance » (p. 10).', s: 'phases' },
    { q: 'Que doit éviter le chef d’équipe en matière de déblai ?', c: ['Tout déblai inutile', 'Tout déblai avant 2 heures', 'Le déblai des pièces brûlées', 'L’usage d’outils'], e: 'Livret CE p. 10 ; un déblai excessif détruit aussi les indices.', s: 'phases' },
    { q: 'Le compte rendu de fin de mission sert à :', c: ['Permettre au chef d’agrès de mesurer le résultat et, le cas échéant, de donner une nouvelle mission', 'Remplir le rapport d’intervention à la place du chef d’agrès', 'Informer directement le CODIS', 'Clore l’intervention'], e: 'Livret CE, Partie 1, § 3 (p. 12).', s: 'cr' },
    { q: 'Selon la POP-32, quand l’équipier retire-t-il son masque FFP2 ?', c: ['Une fois la décontamination terminée et tout objet contaminé isolé', 'Dès qu’il a retiré son masque ARI', 'Avant de retirer le casque', 'En arrivant en cabine'], e: 'POP-32, protocoles 1, 2 et 3b.', s: 'pop32' }
  ]
});
