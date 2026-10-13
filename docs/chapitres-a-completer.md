# Chapitres à compléter — état des lieux et brouillons de plans

> **Brouillons de travail — à faire valider par un formateur avant intégration ; la fiche officielle fait foi.**
>
> Ce document ne contient **aucun** chiffre, dosage, seuil ou protocole nouveau. Les plans ci-dessous :
> - réutilisent ce qui existe **déjà** dans l'appli (le chapitre d'origine est toujours cité) ;
> - marquent tout le reste « **à compléter d'après [document source]** ».
>
> Rien de ce qui est écrit ici ne doit être appris comme une règle tant que la source officielle n'a pas été lue et validée.

État constaté le 13/10/2026 sur le dépôt (fichiers `js/data/*.js`).

---

## Sommaire

1. [Comment l'appli repère un chapitre incomplet](#1-comment-lappli-repère-un-chapitre-incomplet)
2. [Liste des chapitres vides ou partiels](#2-liste-des-chapitres-vides-ou-partiels)
3. [Écarts entre sources signalés dans l'appli](#3-écarts-entre-sources-signalés-dans-lappli)
4. [Brouillons de plans, chapitre par chapitre](#4-brouillons-de-plans-chapitre-par-chapitre)
5. [Questions à poser à votre formateur](#5-questions-à-poser-à-votre-formateur)
6. [Documents à récupérer (par priorité)](#6-documents-à-récupérer-par-priorité)

---

## 1. Comment l'appli repère un chapitre incomplet

Chaque chapitre est déclaré par `VSAV.chap({ ... })`. Deux champs servent à signaler un chapitre incomplet :

| Champ | Valeurs | Rôle |
|---|---|---|
| `status` | `'complet'` (par défaut), `'partiel'`, `'vide'` | Si absent, `js/app.js:125` le met à `'complet'`. |
| `todo` | texte HTML | Explique ce qui manque. Affiché tel quel dans l'appli. |

Ce que fait l'appli (`js/app.js`) :

- **Menu latéral** (`js/app.js:242-244`) : pastille rouge « à venir » pour `vide`, pastille orange « partiel » pour `partiel`.
- **Liste des cours** (`js/app.js:416`) : pastille « non rédigé » ou « partiel ».
- **Page du chapitre** (`js/app.js:445-446`) : encadré « Chapitre non rédigé » ou « Chapitre partiellement rédigé » suivi du texte `todo`.
- **Bouton « Marquer comme lu »** masqué pour un chapitre `vide` (`js/app.js:465`).
- **Révisions / quiz mélangés** : les chapitres `vide` sont exclus (`js/app.js:363`, `369`, `556`).
- **Page « À propos »** (`js/app.js:599-601`) : bilan « X rédigés · Y partiels · Z non rédigés » avec la liste et le texte `todo`.

À noter : à l'intérieur des chapitres, les manques et les écarts sont aussi signalés par des encadrés `<div class="callout warn">` (« Écart entre sources », « Divergence », « Coquille », « en cours de réalisation »…). Ils ne changent pas le statut.

---

## 2. Liste des chapitres vides ou partiels

**Total : 10 chapitres — 1 vide, 9 partiels.**

| # | Identifiant | Titre | Partie | Déclaration → statut | Statut | Quiz existants |
|---|---|---|---|---|---|---|
| 1 | `msp` | Mises en situation professionnelle (MSP) et cas concrets | Partie 3 (`p3`) | `js/data/partie3.js:205` → `:206` | **vide** | 0 |
| 2 | `vsav-hygiene` | Le VSAV : hygiène, désinfection et kits | Tutorat (`tut`) | `js/data/tutorat.js:4` → `:6` | partiel | 6 |
| 3 | `locomoteur` | L'appareil locomoteur et ses atteintes | Tutorat (`tut`) | `js/data/tutorat.js:144` → `:146` | partiel | 3 |
| 4 | `inc-engins` | Les engins de lutte contre l'incendie | Équipier incendie (`inc`) | `js/data/inc-2.js:278` → `:283` | partiel | 6 |
| 5 | `inc-feu-vehicule-energie` | Feux de véhicules GPL, GNV, H2, électriques ou hybrides | Équipier incendie (`inc`) | `js/data/inc-3.js:582` → `:584` | partiel | 4 |
| 6 | `ce-tootem` | TOOTEM : pénétrer dans un volume en feu | CE incendie (`ce`) | `js/data/ce-2.js:89` → `:91` | partiel | 8 |
| 7 | `ce-techniques-lance` | Techniques de lance du chef d'équipe | CE incendie (`ce`) | `js/data/ce-2.js:238` → `:240` | partiel | 8 |
| 8 | `ce-sauvetage-ext` | Le chef d'équipe dans les sauvetages : sauvetage par l'extérieur au LSPCC | CE incendie (`ce`) | `js/data/ce-3.js:17` → `:19` | partiel | 8 |
| 9 | `ce-extraction` | Méthodes d'extraction : sortir un sauveteur ou une victime en binôme | CE incendie (`ce`) | `js/data/ce-3.js:103` → `:105` | partiel | 8 |
| 10 | `ce-reco` | Le chef d'équipe en reconnaissance | CE incendie (`ce`) | `js/data/ce-4.js:21` → `:63` | partiel | 7 |

### Détail : ce qui existe, ce qui manque, la source absente

#### 1. `msp` — MSP et cas concrets (vide)
- **Existe** : seulement le titre, une source (« Programme Équipier VSAV v2024-05, ligne MSP / CAS CONCRET ») et le résumé « Liste des MSP non fournie ». Aucune section, aucun quiz.
- **Manque** (texte `todo`) : « Le programme indique "Se référer à la liste des MSP" : cette liste ne figure pas dans les documents fournis. »
- **Source absente** : **la liste officielle des MSP / cas concrets du programme Équipier VSAV** (et leurs grilles d'évaluation).

#### 2. `vsav-hygiene` — VSAV, hygiène et kits (partiel)
- **Existe** : 6 sections — les trois protocoles de nettoyage-désinfection, protocole simplifié, protocoles périodique/approfondi (deux seaux), détergents et désinfectants, lot membre arraché ou sectionné, AEV.
- **Manque** (texte `todo`) : les présentations des kits **AEV, accouchement, brûlures** et du **LOSIICO** ; « aucun inventaire détaillé de ces kits ne figure dans les documents fournis ». L'**inventaire du VSAV** lui-même (titre de séquence « TUT 1.1 — Inventaire du VSAV ») n'est pas traité.
- **Sources absentes** : **inventaire des kits AEV, accouchement, brûlures et LOSIICO** ; **inventaire / plan de chargement du VSAV** du SDIS.

#### 3. `locomoteur` — Appareil locomoteur (partiel)
- **Existe** : 2 sections tirées de la PR Traumatisme de membre — complications des lésions des os et articulations, principes de l'action de secours.
- **Manque** (texte `todo`) : l'apport de connaissances « **AC - Anatomie physiologie de l'appareil locomoteur** » ; « l'anatomie (os, articulations, muscles) n'est donc pas rédigée ici pour ne rien inventer ».
- **Source absente** : **AC Anatomie-physiologie de l'appareil locomoteur** (module transverse).

#### 4. `inc-engins` — Les engins (partiel)
- **Existe** : section « Ce que contient (et ne contient pas) le corpus », l'engin-pompe FPT (cuves, dosage intégré), matériels annexes embarqués, moyens élévateurs aériens (MEA).
- **Manque** (texte `todo`) : « pas de fiches descriptives des FPT, CCF, CCR, FPTGP… » ; les sigles FPT, FPTHR, FPTGP, FPTL, CCR, CCF ne sont pas définis dans les sources.
- **Source absente** : **classeur opérationnel du SDIS 51, partie 4 « Les engins »**.

#### 5. `inc-feu-vehicule-energie` — Feux de véhicules à énergie alternative (partiel)
- **Existe** : « Où trouver la procédure », « Ce que les sources disponibles apprennent sur ces gaz » (tableau d'explosivité), « Rappels généraux pour le binôme ». Encadré explicite : « aucune distance de sécurité, aucun débit ni aucun geste spécifique n'est donné ici, faute de source ».
- **Manque** (texte `todo`) : la procédure des **POP 14 et 14 bis** ; le § 5.1.3 « véhicule électrique ou hybride » (au sommaire du livret mais absent des pages de la version 2019.2).
- **Sources absentes** : **POP 14 et POP 14 bis** (classeur opérationnel SDIS 51, partie 6) ; **§ 5.1.3 du livret équipier incendie** (version plus récente que 2019.2) ; vidéo d'essai réel du SDIS 86 citée par le livret.

#### 6. `ce-tootem` — TOOTEM (partiel)
- **Existe** : objectif de la séquence, les lettres T-O-O-T-EM (reconstituées à partir de la grille d'observation), pas à pas, qui fait quoi, lien avec le passage de porte, grille d'évaluation.
- **Manque** (texte `todo`) : le dossier « 5 TOOTEM » du Drive formateur est **vide** ; le § 2.3 du livret CE ne contient qu'un renvoi et une vidéo ; **l'acronyme n'est développé lettre par lettre dans aucune source**.
- **Sources absentes** : **contenu du dossier « 5 TOOTEM »** (Drive formateur, PARTIE C) ; un document officiel qui **développe l'acronyme TOOTEM**.

#### 7. `ce-techniques-lance` — Techniques de lance du CE (partiel)
- **Existe** : la LDV, gestes de la séquence, T-Z-O (et 8), durée d'application, techniques d'extinction du GTO, position de survie, grille d'évaluation.
- **Manque** (texte `todo`) : le dossier « **PARTIE D caisson à feu** » est **vide** : « rien n'est disponible sur la mise en pratique en caisson » ; la fiche GTO **ETEX-STR-TDE-9** (moyens portatifs de projection d'agent extincteur) est « en cours de réalisation ».
- **Sources absentes** : **dossier PARTIE D « caisson à feu »** (Drive formateur CE) ; **fiche GTO ETEX-STR-TDE-9** (quand elle sera publiée).

#### 8. `ce-sauvetage-ext` — Sauvetage par l'extérieur au LSPCC (partiel)
- **Existe** : rôle du CE face à un sauvetage, ce que demande le livret § 3.1, qui fait quoi, choix et réalisation du point fixe, équipier en point fixe, contrôles de sécurité, autres sauvetages par l'extérieur, compte rendu — d'après le GTO Sauvetages et mises en sécurité (2020).
- **Manque** (texte `todo`) : le déroulé et les **ordres** des manœuvres « Sauvetage d'une victime par l'extérieur – points fixes naturels » et « – point fixe humain » tels que décrits dans le GNR.
- **Source absente** : **GNR « Lot de sauvetage et de protection contre les chutes »** (DGSCGC, 1999).

#### 9. `ce-extraction` — Méthodes d'extraction (partiel)
- **Existe** : cadre (sauvetage du sauveteur), choix de la technique, traction au sol par un équipier, par un binôme, « Denver drill », extraction avec les tuyaux, après le sauvetage — d'après le GTO national.
- **Manque** (texte `todo`) : le **§ 4.2 « Méthodes d'extraction »** du livret CE (p. 27) est « en cours de réalisation » ; le contenu propre au SDIS 51 n'existe pas encore.
- **Source absente** : **§ 4.2 du livret stagiaire Chef d'équipe incendie SDIS 51** (version finalisée).

#### 10. `ce-reco` — Le CE en reconnaissance (partiel)
- **Existe** : premier maillon de l'information, rôle du CE pendant la reconnaissance, déroulement type, grands volumes et longues distances, méthodes, marquage des portes (POP-16 indice 02).
- **Manque** (texte `todo`) : la section « Les méthodes d'extraction (§ 4.2) » (`js/data/ce-4.js:60`) n'a qu'un renvoi : même manque que le chapitre `ce-extraction`.
- **Source absente** : **§ 4.2 du livret CE** (même document que ci-dessus).

### Autres manques non marqués par un statut

- `js/data/partie1.js:3-4` (commentaire) : les AC « **Les affections spécifiques** » et « **Les atteintes circonstancielles** » citées par le programme ne figurent pas dans les documents fournis ; les chapitres de la Partie 1 s'appuient seulement sur les PR et FT. Les chapitres sont marqués `complet`, mais ces apports de connaissances manquent.
- `js/data/inc-2.js` (`inc-lspcc`) et `js/data/ce-3.js:36` : le GNR LSPCC est aussi absent pour la partie équipier ; le livret CE écrit « LSPP » dans un titre (coquille signalée).

---

## 3. Écarts entre sources signalés dans l'appli

L'appli ne tranche pas : elle signale l'écart et renvoie au formateur. Voici la liste, avec l'emplacement exact.

### 3.1 Secours à personnes (VSAV)

| Sujet | Écart | Emplacement |
|---|---|---|
| **Seuil du TRC** (détresse circulatoire) | PR Bilan secondaire : **> 3 s** ; Mémo C (A6) : **> 2 s** | `js/data/foad.js:81` (chapitre `bilan-secondaire`), rappel en piège `js/data/foad.js:92`, fiche L'essentiel `js/data/essentiel.js:8`. Les chapitres CA (`js/data/ca-1.js:67`, `:134`, `:142`) n'indiquent que > 3 s, sans signaler l'écart. |
| **Coquille « > 60 » du nouveau-né** | Sur le logigramme, la case « surveillance étroite » porte « Mvts > à 60 / min » ; la logique du logigramme indique qu'elle concerne la **FC** au-dessus de la plage 60-100 | `js/data/partie1.js:232` (chapitre `nouveau-ne`) |
| **Titre dupliqué, PR Douleur thoracique** | La fiche source porte deux fois le titre « détresse respiratoire » ; la 2e ligne correspond à la détresse **circulatoire** | `js/data/partie1.js:78` (chapitre `douleur-thoracique`) |

### 3.2 Équipier incendie

| Chapitre | Écart | Emplacement |
|---|---|---|
| `inc-combustion` | Combustion spontanée : avec flammes (livret) / lente sans flamme visible (diaporama) | `js/data/inc-1.js:231` |
| `inc-fumees` | 5 dangers des fumées (COMIX) / 7 dangers (GDO) | `js/data/inc-1.js:275` |
| `inc-propagation` | Pourcentages convection/rayonnement différents | `js/data/inc-1.js:323` |
| `inc-extinction` | Soufflage absent du livret ; action de la dispersion décrite différemment | `js/data/inc-1.js:361` |
| `inc-extinction` | Butane cité en classe D (probable coquille, c'est un gaz → classe C) | `js/data/inc-1.js:381` |
| `inc-developpement` | 3 phases (livret) / 4 phases (GDO) | `js/data/inc-1.js:412` |
| `inc-extincteurs` | Pression CO2 et mode d'action de la poudre | `js/data/inc-2.js:24` |
| `inc-ldv` | Lance à boisseau coulissant : pression et débits | `js/data/inc-2.js:148` |
| `inc-tuyaux` | Longueur des tuyaux d'aspiration, diamètre des semi-rigides | `js/data/inc-2.js:195` |
| `inc-devidoirs` | Longueur du dévidoir tournant | `js/data/inc-2.js:258` |
| `inc-echelles` | Dimensions de l'échelle à crochets | `js/data/inc-2.js:343` |
| `inc-mousse` | Principe d'extinction ; foisonnements ; diamètre LM 4 et portée | `js/data/inc-2.js:446`, `:458`, `:469` |
| `inc-etablissements` | Repères de longueur de tuyaux par étage (GDR / diaporama) | `js/data/inc-3.js:242` |
| `inc-ari-principe` | Calcul d'autonomie avec ou sans facteur de compressibilité | `js/data/inc-4.js:42` |
| `inc-ari-avant` | Pression minimale avant engagement (diaporama / GTO et guide) | `js/data/inc-4.js:125`, `:161` |
| `inc-reco` | Ancienne POP-16 (2014) dans le livret / POP-16 indice 02 (2023) | `js/data/inc-4.js:390` |
| `inc-sauvetage` | Débit du dispositif de secours de l'ARI (livret / guide) | `js/data/inc-4.js:441` |
| `inc-risque-electrique` | Tensions limites des extincteurs (POP/02 / § 2.2 du livret) | `js/data/inc-5.js:76` |
| `inc-fuites-gaz` | Engagements PGC/PGR du guide (SDIS de l'Oise) / composition SDIS 51 | `js/data/inc-5.js:165` |
| `inc-rehabilitation` | GDO 2018 / POP-32 (options de nettoyage, protections) | `js/data/inc-5.js:406` |

### 3.3 Chef d'équipe incendie

| Chapitre | Écart | Emplacement |
|---|---|---|
| `ce-ordres-cr` | Coquilles probables du livret (p. 11 « chef d'équipe » au lieu de « chef d'agrès » ; p. 12 définition de « concis ») | `js/data/ce-1.js:191-192` |
| `ce-lecture-feu` | Définition de « Envahissante » qui reprend celle de la toxicité | `js/data/ce-2.js:65` |
| `ce-tootem` | Progression, inertage, test de la porte : trois versions | `js/data/ce-2.js:123` |
| `ce-techniques-lance` | Où réaliser le T-Z-O ; sens de « crayonnage » / « penciling » ; durée d'impulsion | `js/data/ce-2.js:263` (et section « Durée d'application ») |
| `ce-reco` | Seuil de 20 m (exposé formateur) / pas de distance dans le GTO 2019 | `js/data/ce-4.js:48` |
| `ce-reco` | Ancienne / nouvelle POP-16 | `js/data/ce-4.js:59` |
| `ce-ligne-vie` | Détails de la ligne de vie selon les documents | `js/data/ce-4.js:361` |
| `ce-man-principes`, `ce-man-mousse-tuyau` | Numérotation des manœuvres M3 / M6 différente selon les documents | `js/data/ce-5.js:66`, `:313` |

---

## 4. Brouillons de plans, chapitre par chapitre

Rappel : **brouillons**. Tout point marqué « à compléter d'après … » attend le document officiel. Les idées de quiz sont des **idées de questions** ; les bonnes réponses doivent venir de la source.

### 4.1 `msp` — Mises en situation professionnelle et cas concrets (vide)

**Objectif du chapitre** : s'entraîner à enchaîner bilan + gestes + transmission, comme à l'évaluation.

**Plan proposé**
1. **À quoi sert une MSP** — à compléter d'après le programme Équipier VSAV v2024-05 et la liste des MSP (déroulement, durée, rôle de l'évaluateur).
2. **La trame commune d'un cas concret** (voir ci-dessous) — construite uniquement avec les chapitres existants.
3. **Fiches de cas concrets** — une par MSP de la liste officielle (à compléter d'après la liste des MSP).
4. **Grille d'évaluation** — à compléter d'après la grille officielle des MSP (à demander au formateur). En attendant, s'inspirer de la forme des grilles déjà décrites dans `ce-tootem` (section « Comment tu seras évalué »), sans en reprendre les critères, qui sont propres à l'incendie.
5. **S'entraîner seul** — animations XABCDE, RCP, repérage SNV, carnet d'erreurs (déjà proposés par le `todo`).

**Trame de cas concret type** (contenu tiré de l'appli uniquement)

| Étape | Ce qu'on attend | Chapitre à réviser |
|---|---|---|
| Contexte | Énoncé : lieu, heure, motif de départ, ce que voit l'équipage à l'arrivée | — (fourni par le formateur) |
| Sécurité et bilan circonstanciel | Sécuriser, se protéger (EPI, risque infectieux), évaluer le nombre de victimes, demander des renforts si besoin | `bilans`, `securite`, `mt-infectieux`, `snv` |
| Bilan primaire | Dérouler XABCDE, repérer une détresse vitale, gestes d'urgence immédiats | `bilan-primaire`, `hemorragies`, `lva-pls`, `ova`, `rcp-acr`, `dae` |
| Bilan secondaire | Plainte, examen, mesures, antécédents | `bilan-secondaire`, `mt-mesures` |
| Gestes spécifiques | Conduite à tenir de la pathologie ou du traumatisme du cas | Chapitre de la Partie 1 ou 2 concerné |
| Transmission | Bilan transmis pour avis médical, respect des consignes | `bilans`, `ca-transmissions` (pour aller plus loin) |
| Relevage / brancardage / installation | Technique adaptée à l'état de la victime | Partie 3 (`relevage-pont`, `cuillere`, `brancardage`, `vecteur`…) |
| Surveillance | Rythme de surveillance selon l'état | `bilan-surveillance` |
| Après l'intervention | Nettoyage-désinfection, déchets | `vsav-hygiene`, `mt-infectieux` |

**Critères d'évaluation (proposition de forme, à valider)** : sécurité respectée ; détresse vitale reconnue et traitée en priorité ; gestes conformes à la fiche technique ; transmission complète ; travail en équipe et communication. Les critères **officiels** et le seuil de réussite sont à compléter d'après la grille MSP du programme.

**Exemples de cas concrets** (scénarios à construire en réutilisant les chapitres existants, à faire valider) :
- douleur thoracique chez un adulte au repos → `douleur-thoracique`, `bilan-secondaire` ;
- chute avec déformation de jambe → `trauma-membres`, `locomoteur`, `immobilisation` ;
- malaise chez une personne diabétique → `hypoglycemie`, `mt-malaise` ;
- accouchement inopiné à domicile → `accouchement`, `nouveau-ne`.

**Idées de quiz**
1. « Dans un cas concret, quelle étape vient juste après la sécurisation des lieux ? » (réponse d'après `bilans`).
2. « Une victime présente une détresse vitale au bilan primaire : que fais-tu avant le bilan secondaire ? » (réponse d'après `bilan-primaire`).
3. « Que dois-tu faire du matériel après avoir déposé la victime ? » (réponse d'après `vsav-hygiene`, protocole simplifié).

---

### 4.2 `vsav-hygiene` — compléter les kits et l'inventaire

**Plan proposé (sections à ajouter)**
1. **L'inventaire du VSAV** — à compléter d'après la liste d'inventaire / plan de chargement du VSAV du SDIS 51 (rangement par cellule, vérifications à la prise de garde).
2. **Le kit AEV** — contenu à compléter d'après l'inventaire officiel du kit AEV. La conduite à tenir existe déjà : section « AEV » de ce chapitre et `mt-infectieux` (section AEV).
3. **Le kit accouchement** — contenu à compléter d'après l'inventaire officiel. Conduite à tenir : `accouchement`, `nouveau-ne`.
4. **Le kit brûlures** — contenu à compléter d'après l'inventaire officiel. Conduite à tenir : `brulures`.
5. **Le LOSIICO** — à compléter d'après la fiche de présentation du LOSIICO (le sigle n'est développé dans aucune source fournie : ne pas l'inventer).
6. (existe) Lot membre arraché ou sectionné.

**Idées de quiz**
1. « Dans quel chapitre trouves-tu la conduite à tenir après une piqûre avec une aiguille souillée ? » → AEV (existe).
2. « Quel kit utilises-tu pour un accouchement inopiné ? » (contenu du kit d'après l'inventaire officiel).
3. « À quel moment vérifie-t-on l'inventaire du VSAV ? » (réponse d'après la procédure du SDIS).

---

### 4.3 `locomoteur` — anatomie-physiologie de l'appareil locomoteur

**Plan proposé**
1. **Le squelette : rôle des os** — à compléter d'après l'AC Anatomie-physiologie de l'appareil locomoteur.
2. **Les articulations** — à compléter d'après la même AC.
3. **Les muscles et tendons** — à compléter d'après la même AC.
4. **Les lésions : fracture, entorse, luxation** — définitions à compléter d'après l'AC ; signes et conduite déjà dans `trauma-membres`.
5. (existe) Complications des lésions des os et des articulations.
6. (existe) Principes de l'action de secours — compléter par les renvois : `trauma-membres` (écharpe, attelle à dépression, réalignement), `trauma-bassin`, `trauma-rachis`, `immobilisation`.
7. Lien avec le bilan : fracture de la cuisse ou fractures multiples → risque de détresse circulatoire (existe dans ce chapitre) ; voir `ca-physiologie` (état de choc) pour comprendre pourquoi.

**Idées de quiz**
1. « Pourquoi immobilise-t-on l'articulation au-dessus et en dessous d'une fracture ? » (réponse d'après la section « Principes » existante).
2. « Quels signes à l'extrémité d'un membre font penser à une atteinte des vaisseaux ? » (existe).
3. « Quelle est la différence entre une entorse et une luxation ? » (à compléter d'après l'AC).

---

### 4.4 `inc-engins` — Les engins de lutte contre l'incendie

**Plan proposé**
1. (existe) Ce que contient le corpus.
2. **Les sigles des engins (FPT, FPTHR, FPTGP, FPTL, CCR, CCF…)** — définitions et missions à compléter d'après le classeur opérationnel SDIS 51, partie 4.
3. **Fiche par engin** : équipage, capacité, matériel embarqué, rôle de chaque place — à compléter d'après le classeur opérationnel, partie 4.
4. (existe) L'engin-pompe FPT : eau, émulseur, matériel.
5. (existe) Matériels annexes embarqués.
6. (existe) MEA. Feux de forêts : réutiliser `gn-fdf-techniques` pour les engins feux de forêts (à confirmer pour le SDIS 51).

**Idées de quiz**
1. « Que signifie le sigle FPT ? » (d'après le classeur opérationnel).
2. « Quels MEA le SDIS 51 utilise-t-il ? » (existe, section MEA).
3. « Quel est l'équipage d'un CCF ? » (à compléter d'après le classeur opérationnel).

---

### 4.5 `inc-feu-vehicule-energie` — Feux de véhicules à énergie alternative

**Plan proposé**
1. (existe) Où trouver la procédure.
2. **Identifier l'énergie du véhicule** — réutiliser `sr-energies` (section « Identifier l'énergie embarquée » : logos, trappes, câbles orange, carte grise).
3. **Les risques de chaque énergie** — réutiliser `sr-energies` (électrique/hybride ; tableau GPL, GNV, H2 : soupape, thermofusible, torchère) et l'existant « Ce que les sources disponibles apprennent sur ces gaz ».
4. **La procédure d'attaque (POP 14)** — distances, débits, positionnement, gestes : **à compléter d'après la POP 14**.
5. **Le véhicule électrique ou hybride en feu (POP 14 bis et § 5.1.3 du livret)** — **à compléter d'après la POP 14 bis**.
6. (existe) Rappels généraux pour le binôme. Voir aussi `gn-gaz`, `gn-bouteilles`.

**Idées de quiz**
1. « Comment repérer qu'un véhicule roule au GNV ? » (d'après `sr-energies`).
2. « Que signale une torchère GPL qui devient permanente ? » (d'après `sr-energies`).
3. « Quelle distance de sécurité appliquer pour un feu de véhicule GPL ? » (à compléter d'après la POP 14 — ne pas publier sans la source).

---

### 4.6 `ce-tootem` — TOOTEM

**Plan proposé**
1. (existe) Objectif, lettres, pas à pas, rôles, passage de porte, grille.
2. **L'acronyme développé officiellement** — à compléter d'après le contenu du dossier « 5 TOOTEM » ou un document SDIS qui développe chaque lettre. Tant qu'il manque, garder l'avertissement actuel (« les documents ne développent pas l'acronyme mot à mot »).
3. **Version retenue par le SDIS en cas d'écart** (progression, inertage, test de porte) — à faire trancher par le formateur (voir l'écart `js/data/ce-2.js:123`).
4. Renvois : `inc-passage-porte`, `inc-phenomenes`, `ce-lecture-feu`.

**Idées de quiz**
1. « Avec quoi teste-t-on la porte selon la fiche TOOTEM ? » (existe).
2. « Que doit faire le binôme si un critère de la grille est “non fait” ? » (existe : manœuvre à refaire).
3. « Que veut dire chaque lettre de TOOTEM ? » (à compléter d'après le dossier officiel).

---

### 4.7 `ce-techniques-lance` — Techniques de lance du CE

**Plan proposé**
1. (existe) LDV, gestes, T-Z-O, durée d'application, techniques GTO, position de survie, grille.
2. **La mise en pratique en caisson à feu** — déroulement, consignes de sécurité, rôle du chef d'équipe : **à compléter d'après le dossier PARTIE D « caisson à feu »**.
3. **Moyens portatifs de projection d'agent extincteur** — à compléter d'après la fiche GTO ETEX-STR-TDE-9 quand elle sera publiée. En attendant, renvoyer à `inc-extincteurs` et `inc-lances-jets`.

**Idées de quiz**
1. « Dans quels cas le GTO réserve-t-il l'extinction combinée à l'extérieur du local ? » (existe).
2. « Que désigne le “penciling” dans le GTO ? » (existe).
3. « Quelles consignes de sécurité s'appliquent en caisson ? » (à compléter d'après la PARTIE D).

---

### 4.8 `ce-sauvetage-ext` — Sauvetage par l'extérieur au LSPCC

**Plan proposé**
1. (existe) Rôle, qui fait quoi, point fixe, équipier en point fixe, contrôles, compte rendu.
2. **Manœuvre « points fixes naturels » : ordres et déroulé** — à compléter d'après le GNR LSPCC.
3. **Manœuvre « point fixe humain » : ordres et déroulé** — à compléter d'après le GNR LSPCC.
4. Renvois : `inc-lspcc` (composition, facteur de chute, ancrage), `gn-sauvetage`.

**Idées de quiz**
1. « Qui ordonne un sauvetage ? » (existe : le chef d'agrès ; initiative du CE si urgence).
2. « Le GTO classe les ancrages en trois familles : lesquelles ? » (existe).
3. « Quel ordre le chef d'équipe donne-t-il pour lancer la manœuvre point fixe humain ? » (à compléter d'après le GNR).

---

### 4.9 `ce-extraction` et section « extraction » de `ce-reco`

**Plan proposé**
1. (existe) Contenu GTO : cadre, choix, traction au sol, binôme, Denver drill, tuyaux, après le sauvetage.
2. **Méthodes retenues par le SDIS 51 (§ 4.2 du livret CE)** — à compléter dès la publication du § 4.2.
3. Dans `ce-reco`, remplacer l'encadré « en cours de réalisation » par un résumé et un lien vers `ce-extraction`, une fois le § 4.2 disponible.
4. Renvois : `inc-ari-sauvegarde` (NELAR, AAALEERTER, porter secours à un équipier), `gn-milieu-vicie`.

**Idées de quiz**
1. « Quel message radio lance un binôme qui ne peut pas s'extraire seul ? » (existe dans `inc-ari-sauvegarde`).
2. « Dans quel type de lieu utilise-t-on le “Denver drill” ? » (existe).
3. « Quelle méthode d'extraction le SDIS 51 enseigne-t-il en priorité ? » (à compléter d'après le § 4.2).

---

## 5. Questions à poser à votre formateur

1. **Liste des MSP** : pouvez-vous fournir la liste des MSP / cas concrets du programme Équipier VSAV et leur grille d'évaluation ?
2. **TRC** : quel seuil retenir au SDIS 51, > 3 s (PR Bilan secondaire) ou > 2 s (Mémo C) ?
3. **Nouveau-né** : confirmez-vous que la case « Mvts > à 60 / min » du logigramme concerne la fréquence cardiaque ?
4. **Kits** : pouvez-vous fournir l'inventaire des kits AEV, accouchement, brûlures, et la fiche LOSIICO (avec le sens du sigle) ?
5. **Inventaire du VSAV** : existe-t-il une liste de chargement officielle du VSAV au SDIS 51 ?
6. **Appareil locomoteur** : pouvez-vous fournir l'AC « Anatomie physiologie de l'appareil locomoteur » ?
7. **TOOTEM** : que signifie chaque lettre, et quelle version (progression, inertage, test de porte) est attendue à l'évaluation ?
8. **Reconnaissance longue distance** : le seuil de 20 m de l'exposé formateur s'applique-t-il ?
9. **Pression minimale avant engagement ARI** : 270 ou 280 bar ?
10. **§ 4.2 du livret CE** : une version finalisée des méthodes d'extraction est-elle disponible ?

## 6. Documents à récupérer (par priorité)

| Priorité | Document | Chapitres débloqués |
|---|---|---|
| 1 | **Liste des MSP / cas concrets** du programme Équipier VSAV v2024-05 + grilles d'évaluation | `msp` (seul chapitre vide) |
| 2 | **Inventaire des kits AEV, accouchement, brûlures, LOSIICO** et **inventaire / plan de chargement du VSAV** | `vsav-hygiene` |
| 3 | **AC Anatomie-physiologie de l'appareil locomoteur** (module transverse) | `locomoteur` |
| 4 | **POP 14 et POP 14 bis** (classeur opérationnel SDIS 51, partie 6) + **§ 5.1.3 du livret équipier incendie** (version récente) | `inc-feu-vehicule-energie` |
| 5 | **GNR Lot de sauvetage et de protection contre les chutes** (DGSCGC, 1999) | `ce-sauvetage-ext`, `inc-lspcc` |
| 6 | **§ 4.2 « Méthodes d'extraction » du livret CE** (version finalisée) | `ce-extraction`, `ce-reco` |
| 7 | **Classeur opérationnel SDIS 51, partie 4 « Les engins »** | `inc-engins` |
| 8 | **Dossier formateur « 5 TOOTEM »** et **dossier PARTIE D « caisson à feu »** | `ce-tootem`, `ce-techniques-lance` |
| 9 | **Fiche GTO ETEX-STR-TDE-9** (dès sa publication) | `ce-techniques-lance` |
| 10 | **AC « Les affections spécifiques » et « Les atteintes circonstancielles »** | Partie 1 (chapitres marqués complets, mais sans ces AC) |

Pour la priorité 1, la Partie 3 est la seule où un chapitre entier manque : c'est le document qui apporte le plus. Les priorités 2 et 3 concernent la formation Équipier VSAV, qui est le cœur de l'appli.
