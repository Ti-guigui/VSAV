# Pulsar VSAV — révision Équipier VSAV

Application de révision **Équipier VSAV** (programme v2024-05), 100 % statique (HTML/CSS/JS, sans build),
installable en PWA et utilisable hors ligne. Responsive téléphone + PC, sans compte : la progression est
enregistrée dans le navigateur.

Lancer en local : `python3 -m http.server 8000` dans ce dossier, puis ouvrir `http://localhost:8000/`.

## Contenu

Le cours suit le programme officiel : FOAD → Tutorat → Parties 1 à 3, plus un « Socle transverse » pour les
prérequis (hémorragies, LVA/PLS, OVA, oxygène, brûlures). 61 chapitres, dont 58 rédigés en entier, rédigés
uniquement à partir des fiches FT, PR et AC, du Mémento SSUAP et des mémos A6 du SDIS. Chaque chapitre et
chaque section citent leur fiche source. **La fiche officielle fait toujours foi.**

Chapitres partiels ou vides (signalés dans l'application) :
- *Le VSAV : hygiène et kits* — l'inventaire des kits AEV, accouchement, brûlures et du LOSIICO n'est pas fourni ;
- *Appareil locomoteur* — partiel ;
- *MSP / cas concrets* — la liste des MSP n'est pas fournie.

Écarts entre documents sources, signalés dans l'application sans être tranchés :
- seuil du TRC : > 3 s dans la PR Bilan secondaire, > 2 s dans le Mémo C ;
- coquille « > 60 » dans le logigramme du nouveau-né ;
- titre « détresse respiratoire » dupliqué dans la PR Douleur thoracique.

## Fonctions

- **Navigation** : onglets par partie, puis chapitres groupés par séquence, avec puces de section.
- **Recherche globale** : insensible aux accents, extrait surligné ; mène directement à la section
  (`#/c/<chapitre>/<section>?q=`) et y surligne le terme.
- **Schémas et animations** : schémas SVG (clair/sombre) et animations interactives — rythme RCP 30/2, 15/2, 3/1
  avec métronome, XABCDE, chaîne des bilans, DAE en 5 étapes, Glasgow, tri nombreuses victimes, débit d'O₂,
  sorties de véhicule, place des porteurs — plus un lecteur « pas à pas » sur toutes les étapes de FT et PR.
  `prefers-reduced-motion` est respecté.
- **Quiz** : 238 questions expliquées. Chaque erreur est enregistrée ; « Mes erreurs » les fait retravailler une
  par une jusqu'à 2 bonnes réponses consécutives.
- **Fiches mémoire** par matière (imprimables) et page **L'essentiel** (chiffres et conduites à tenir, reliés au cours).
- **Gestion** : progression, thème auto/clair/sombre, export/import JSON, réinitialisation.
- **Identité** : logo original, couleur et fond à motifs propres à chaque partie et chapitre.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Coque : barre du haut (logo, recherche, thème), onglets, barre latérale, navigation basse mobile |
| `css/app.css` | Styles : clair/sombre, responsive, impression, mouvements réduits |
| `js/app.js` | Moteur : routeur, vues, quiz, erreurs, recherche, fiches, gestion, `localStorage` |
| `js/svg.js` | Schémas SVG et animations |
| `js/data/*.js` | Contenu : `parts.js` (parties, couleurs, motifs), `foad.js`, `tutorat.js`, `partie1.js`, `partie2.js`, `partie3.js`, `socle.js`, `essentiel.js` |
| `img/fiches/` | Figures extraites des fiches |
| `sw.js`, `manifest.webmanifest`, `icon*` | PWA hors ligne |
| `docs/captures/` | Captures d'écran |

## Mise à jour du contenu

Le service worker sert d'abord le cache : après toute modification, changer la valeur `CACHE` dans `sw.js`
pour que les appareils récupèrent la nouvelle version.
