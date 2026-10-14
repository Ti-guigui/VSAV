# Pulsar VSAV — révision sapeurs-pompiers

Application de révision pour sapeurs-pompiers, 100 % statique (HTML/CSS/JS, sans build), installable en PWA et
utilisable hors ligne. Responsive téléphone + PC, sans compte : la progression est enregistrée dans le navigateur.

Conçue à l'origine pour l'**Équipier VSAV** (programme v2024-05), elle couvre désormais aussi l'**Équipier incendie**,
le **Chef d'équipe incendie**, la **PPBE** (équipier et chef d'agrès), les **Guides nationaux** (GDO, GTO, GODR, PIO),
le **Secours routier** (équipier et chef d'agrès SR), les **chefs d'agrès VSAV et Incendie**, ainsi qu'une
vidéothèque de gestes SSUAP et secours routier.

Lancer en local : `python3 -m http.server 8000` dans ce dossier, puis ouvrir `http://localhost:8000/`.

> **Outil de révision uniquement.** Le contenu résume des documents de formation ; en cas de doute, **la fiche
> officielle, le référentiel de ton SDIS et tes formateurs font foi.**

## Contenu

14 parties, **214 chapitres** (204 rédigés en entier, 9 partiels, 1 non rédigé) et **1 279 questions** de quiz.
Chaque chapitre et chaque section citent leur document source (fiches FT, PR et AC, Mémento SSUAP, mémos A6,
livrets stagiaires et documents formateur du SDIS 51, guides de la DGSCGC).

| Partie | Onglet | Chapitres | Questions |
|---|---|---:|---:|
| FOAD — Formation à distance | FOAD | 9 | 47 |
| Tutorat — VSAV, RCP et appareil locomoteur | Tutorat | 5 | 34 |
| Partie 1 — Affections spécifiques et atteintes circonstancielles | Partie 1 | 19 | 64 |
| Partie 2 — Traumatismes, immobilisations, extraction, secours routier | Partie 2 | 12 | 47 |
| Partie 3 — Relevage, brancardage et aide au déplacement | Partie 3 | 11 | 25 |
| Socle transverse — gestes prérequis | Socle | 11 | 68 |
| Chef d'agrès VSAV | CA VSAV | 7 | 50 |
| Secours routier — équipier et chef d'agrès SR | Secours routier | 10 | 66 |
| Équipier incendie | Incendie | 48 | 320 |
| Chef d'équipe incendie | CE Incendie | 21 | 157 |
| Chef d'agrès tout engin incendie | CA Incendie | 9 | 48 |
| PPBE — Protection des personnes, des biens et de l'environnement | PPBE | 20 | 145 |
| Guides nationaux — GDO, GTO, GODR et PIO | Guides nationaux | 27 | 208 |
| Vidéos — gestes SSUAP et secours routier | Vidéos | 5 | 0 |
| **Total** | | **214** | **1 279** |

Chapitres partiels ou vides (signalés dans l'application, avec la raison) :
- *Le VSAV : hygiène, désinfection et kits* (Tutorat) — partiel : l'inventaire des kits AEV, accouchement,
  brûlures et du LOSIICO n'est pas fourni ;
- *L'appareil locomoteur et ses atteintes* (Tutorat) — partiel : l'AC d'anatomie n'est pas fourni ;
- *Mises en situation professionnelle (MSP) et cas concrets* (Partie 3) — **non rédigé** : la liste des MSP
  n'est pas fournie ;
- *Les engins de lutte contre l'incendie* (Incendie) — partiel : le classeur opérationnel (partie 4) est absent ;
- *Feux de véhicules GPL, GNV, H2, électriques ou hybrides* (Incendie) — partiel : POP 14 / 14bis absentes ;
- *TOOTEM : pénétrer dans un volume en feu* (CE Incendie) — partiel : dossier formateur vide ;
- *Techniques de lance du chef d'équipe* (CE Incendie) — partiel : dossier « caisson à feu » vide ;
- *Le chef d'équipe dans les sauvetages : sauvetage par l'extérieur au LSPCC* (CE Incendie) — partiel :
  le GNR LSPCC n'est pas fourni (présenté d'après le GTO) ;
- *Méthodes d'extraction* et *Le chef d'équipe en reconnaissance* (CE Incendie) — partiels : § 4.2 du livret CE
  « en cours de réalisation ».

Écarts entre documents sources, signalés dans l'application sans être tranchés :
- **Équipier VSAV** : seuil du TRC (> 3 s dans la PR Bilan secondaire, > 2 s dans le Mémo C) ; coquille « > 60 »
  dans le logigramme du nouveau-né ; titre « détresse respiratoire » dupliqué dans la PR Douleur thoracique.
- **Incendie** (livret, diaporamas formateur, Guide d'instruction, GTO, GDO, GDR) : combustion spontanée,
  propagation, procédés d'extinction, phases du feu, pression du CO2 des extincteurs, lance à boisseau
  coulissant, tuyaux d'aspiration, échelle à crochets, mousse et LM 4, longueurs d'établissement par étage,
  autonomie et pression minimale de l'ARI (280 / 270 bar), marquage des portes (ancienne et nouvelle POP-16),
  risque électrique, procédures gaz, réhabilitation après incendie (GDO / POP-32).
- **CE Incendie** : coquilles du livret CE, TOOTEM, 4 D ou 5 D, position du T-Z-O, seuils et consommation d'air
  de l'ARI, pression minimale d'engagement.

## Fonctions

- **Navigation** : onglets par partie, puis chapitres groupés par séquence, avec puces de section.
- **Recherche globale** : insensible aux accents, extrait surligné ; mène directement à la section
  (`#/c/<chapitre>/<section>?q=`) et y surligne le terme.
- **Schémas et animations** : schémas SVG (clair/sombre) et animations interactives — rythme RCP 30/2, 15/2, 3/1
  avec métronome, XABCDE, chaîne des bilans, DAE en 5 étapes, Glasgow, tri nombreuses victimes, débit d'O₂,
  sorties de véhicule, place des porteurs — plus un lecteur « pas à pas » sur toutes les étapes de FT et PR.
  `prefers-reduced-motion` est respecté.
- **Vidéos** : 94 tutoriels (38 gestes SSUAP du SDIS 51, 56 vidéos secours routier : airbags et énergies,
  FT véhicule léger, véhicules lourds et levage), chacun relié à la fiche du site correspondante. Elles se lisent
  en ligne et ne sont pas mises en cache hors ligne, pour ne pas remplir la mémoire du téléphone.
- **Quiz** : 1 279 questions expliquées. Chaque erreur est enregistrée ; « Mes erreurs » les fait retravailler une
  par une jusqu'à 2 bonnes réponses consécutives.
- **Espace Réviser** (`#/reviser`, `js/etude.js`) :
  - **Plan de révision** : date d'examen + parties → chapitres répartis jour par jour, derniers jours réservés à la
    révision finale ; le plan se réajuste selon l'avancement (chapitre acquis = lu + quiz ≥ 80 %) ;
  - **Flashcards à répétition espacée** (boîtes de Leitner : 1, 2, 4, 8, 16, 32 jours), générées à partir des
    questions de quiz et de « L'essentiel » ; raccourcis Espace / 1 / 2 / 3 ;
  - **Examen blanc** : 20 à 100 questions tirées au hasard, chrono optionnel, note sur 20, détail par partie,
    correction ; les erreurs rejoignent le carnet ;
  - **Défi du jour** : 5 questions identiques toute la journée ;
  - **Mes progrès** : série de jours, calendrier d'activité, courbe des examens blancs, maîtrise par partie, badges.
- **Fiches mémoire** par matière (imprimables) et page **L'essentiel** (chiffres et conduites à tenir, reliés au cours).
- **Gestion** : progression, état de rédaction du contenu, thème auto/clair/sombre, export/import JSON,
  réinitialisation.
- **Identité** : logo original, couleur et fond à motifs propres à chaque partie et chapitre.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Coque : barre du haut (logo, recherche, thème), onglets, barre latérale, navigation basse mobile ; charge les fichiers de données dans l'ordre |
| `css/app.css` | Styles : clair/sombre, responsive, impression, mouvements réduits |
| `js/app.js` | Moteur : routeur, vues, quiz, erreurs, recherche, fiches, gestion, `localStorage` ; définit `VSAV.part`, `VSAV.chap`, `VSAV.ess` |
| `js/svg.js` | Schémas SVG et animations |
| `js/etude.js` | Outils de révision : plan, flashcards, examen blanc, défi du jour, progrès et badges (via les points d'extension `VSAV.views`, `VSAV.acts`… de `app.js`) |
| `js/data/parts.js` | Les 14 parties : onglet, titre, couleur, motif, présentation |
| `js/data/foad.js`, `tutorat.js`, `partie1.js`, `partie2.js`, `partie3.js` | Équipier VSAV : FOAD, Tutorat, Parties 1 à 3 |
| `js/data/socle.js`, `socle-2.js` | Socle transverse (gestes prérequis du module transverse) |
| `js/data/essentiel.js` | Page « L'essentiel » (chiffres et conduites à tenir) |
| `js/data/inc-1.js` à `inc-5.js` | Équipier incendie |
| `js/data/ce-1.js` à `ce-5.js` | Chef d'équipe incendie |
| `js/data/ppbe-1.js` à `ppbe-3.js` | PPBE (équipier et chef d'agrès) |
| `js/data/gn-1.js` à `gn-5.js` | Guides nationaux (GDO, GTO, GODR, PIO) |
| `js/data/ca-1.js`, `ca-2.js` | Chef d'agrès VSAV |
| `js/data/cate-1.js`, `cate-2.js` | Chef d'agrès tout engin incendie |
| `js/data/sr-1.js` à `sr-3.js` | Secours routier (équipier et chef d'agrès SR) |
| `js/data/videos.js` | Partie Vidéos : lecteurs et liens vers les fiches |
| `videos/suap/`, `videos/sr/` | Vidéos MP4 et vignettes JPG (SSUAP et secours routier) |
| `img/fiches/`, `img/inc/`, `img/ce/`, `img/ppbe/` | Figures et schémas extraits des documents sources |
| `sw.js`, `manifest.webmanifest`, `icon*` | PWA hors ligne (liste des fichiers mis en cache, version `CACHE`) |
| `_headers` | En-têtes HTTP de l'hébergeur (`Cache-Control: no-cache`, pour que les mises à jour arrivent vite) |
| `.nojekyll` | Désactive Jekyll sur GitHub Pages (fichiers servis tels quels) |
| `docs/captures/` | Captures d'écran |
| `tools/` | Outils de maintenance en Node.js (voir ci-dessous) |

Les 35 fichiers de `js/data/` sont listés dans `index.html` ; un nouveau fichier doit y être ajouté (après
`parts.js`, avant `essentiel.js`).

## Mise à jour du contenu

Nécessite **Node.js** (aucune installation de paquets).

- `node tools/verifier.js` : vérifie les données — identifiants uniques, liens internes, fichiers images et
  vidéos présents, chaque question a une bonne réponse valide, fichiers listés dans `sw.js` existants. Lancé aussi
  automatiquement par GitHub Actions à chaque push.
- `node tools/maj-cache.js` : **à lancer après toute modification**. Le service worker sert d'abord le cache :
  l'outil régénère la liste des fichiers mis en cache dans `sw.js` et change automatiquement la version `CACHE`
  (calculée à partir du contenu), pour que les téléphones récupèrent la nouvelle version.

Note : le dossier `videos/` est lourd (environ 547 Mo). Piste future : héberger les vidéos hors du dépôt.

## Droits

Les vidéos et une partie des schémas proviennent de documents du SDIS 51 et des GTO. Vérifier les droits
d'utilisation avant toute diffusion publique.
