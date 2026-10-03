/* Parties du programme Équipier VSAV (v2024-05) + socle transverse.
   Couleurs / motifs : fond thématique propre à chaque partie. */
VSAV.part({ id: 'foad', tab: 'FOAD', title: 'FOAD — Formation à distance', color: '#0e7490', motif: 'eye',
  desc: 'Les bilans, les nombreuses victimes, le cadre juridique, les souffrances psychiques, les généralités du brancardage et la sécurité.',
  intro: '<b>Pourquoi commencer par là ?</b> Le bilan est le fil conducteur de toute intervention : chaque geste des parties suivantes s’insère dans un bilan (circonstanciel → primaire → secondaire → surveillance). Maîtrise-le d’abord, tout le reste s’y accroche.' });
VSAV.part({ id: 'tut', tab: 'Tutorat', title: 'Tutorat — VSAV, RCP et appareil locomoteur', color: '#be123c', motif: 'ecg',
  desc: 'Le véhicule de secours à victimes (hygiène, kits), la réanimation cardio-pulmonaire en équipe au VSAV et l’appareil locomoteur.',
  intro: '<b>À voir avec ton tuteur avant le stage.</b> La fiche individuelle de tutorat demande de maîtriser la RCP en équipe, de connaître le nettoyage-désinfection du véhicule et les kits (AEV, accouchement, brûlures, membre sectionné, LOSIICO).' });
VSAV.part({ id: 'p1', tab: 'Partie 1', title: 'Partie 1 — Affections spécifiques et atteintes circonstancielles', color: '#7c3aed', motif: 'molecule',
  desc: 'Séquence 1.1 : AVC, convulsions, asthme, douleur thoracique, hypoglycémie, allergie. Séquence 1.2 : électricité, chaleur, plongée, accouchement, froid, intoxications…',
  intro: '<b>Logique commune à toute la partie :</b> on soustrait d’abord la victime à la cause, on traite la détresse vitale s’il y en a une (bilan primaire), puis on applique la conduite spécifique et on transmet le bilan pour avis médical.' });
VSAV.part({ id: 'p2', tab: 'Partie 2', title: 'Partie 2 — Traumatismes, immobilisations, extraction, secours routier', color: '#c2410c', motif: 'road',
  desc: 'Séquence 2.1 : traumatismes et immobilisations. Séquence 2.2 : extraction d’une victime assise (ACT, BOA). Séquence 2.3 : sorties de véhicule en secours routier.',
  intro: '<b>Idée directrice :</b> l’immobilisation ne passe jamais avant la détresse vitale, et tout matériel d’extraction (ACT, BOA, plan dur concave) est retiré avant l’immobilisation corps entier, de préférence dans le matelas immobilisateur à dépression.' });
VSAV.part({ id: 'p3', tab: 'Partie 3', title: 'Partie 3 — Relevage, brancardage et aide au déplacement', color: '#15803d', motif: 'stretcher',
  desc: 'Séquence 3.1 : relevage (pont à 3 et 4, brancard cuillère, positions particulières, alèse portoir). Séquence 3.2 : brancardage, chaise, arrimage, aide au déplacement, installation dans le vecteur.',
  intro: '<b>Deux priorités :</b> ne pas aggraver la victime (axe tête-cou-tronc, position d’attente conservée) et ne pas se blesser (dos plat, travail avec les cuisses, ordres en deux temps donnés par un chef).' });
VSAV.part({ id: 'socle', tab: 'Socle', title: 'Socle transverse — gestes prérequis', color: '#334155', motif: 'cross',
  desc: 'Les gestes du module transverse utilisés en permanence au VSAV : hémorragies, voies aériennes et PLS, obstruction des voies aériennes, oxygène, brûlures.',
  intro: '<b>Prérequis du module transverse</b> réutilisés dans tous les bilans de l’équipier VSAV. Ces chapitres résument les fiches du module transverse (MAJ 05/2024).' });
VSAV.part({ id: 'inc', tab: 'INC Équipier', title: 'Équipier incendie — lutte contre l’incendie', color: '#b91c1c', motif: 'flame',
  desc: 'Formation Équipier incendie (livret stagiaire SDIS 51) : déroulement d’une intervention, le feu, le matériel, l’hydraulique, l’ARI, la stratégie d’extinction, les sauvetages et les risques technologiques et naturels.',
  intro: '<b>Le rôle de l’équipier incendie :</b> il agit en binôme, sous les ordres directs du chef d’équipe, et ne prend aucune initiative qui pourrait nuire à la sécurité du binôme. Chaque chapitre cite le document source du SDIS ou du ministère (GDO, GTO, GDR).' });
VSAV.part({ id: 'cav', tab: 'SUAP Chef d’agrès', title: 'SUAP — Chef d’agrès VSAV', color: '#9f1239', motif: 'ambulance',
  desc: 'Formation Chef d’agrès VSAV : apports de connaissances (bilans, physiologie, rachis, SINUS, attentats…), procédures v2, notes de service et mémos du SDIS 51.',
  intro: '<b>Le chef d’agrès VSAV</b> commande l’équipage, conduit le bilan et le transmet, et décide de la conduite à tenir selon les procédures du SDIS. Chaque chapitre cite sa source.' });
VSAV.part({ id: 'ince', tab: 'INC Chef d’équipe', title: 'Incendie — Chef d’équipe INC', color: '#c2410c', motif: 'team',
  desc: 'Formation Chef d’équipe incendie : livret stagiaire, techniques de lances, lecture du feu, forcement, manœuvres ARI, manœuvres incendie.',
  intro: '<b>Le chef d’équipe</b> conduit le binôme : il reçoit les ordres du chef d’agrès, engage et ramène son équipe en sécurité. Chaque chapitre cite sa source.' });
VSAV.part({ id: 'inca', tab: 'INC Chef d’agrès', title: 'Incendie — Chef d’agrès tout engin', color: '#7f1d1d', motif: 'shield',
  desc: 'Formation Chef d’agrès tout engin incendie : livret stagiaire CA incendie du SDIS 51.',
  intro: '<b>Le chef d’agrès</b> commande l’agrès et son équipage : reconnaissance, idée de manœuvre, ordres, compte rendu. Chaque chapitre cite sa source.' });
VSAV.part({ id: 'ppbe', tab: 'PPBE', title: 'PPBE — Protection des personnes, des biens et de l’environnement (ex-DIV)', color: '#0f766e', motif: 'bug',
  desc: 'Formations Équipier PPBE et Chef d’agrès PPBE : opérations diverses, LSPCC, hyménoptères, animaux, ouvertures de porte, notes de service du SDIS 51.',
  intro: '<b>Les opérations diverses</b> regroupent les interventions de protection des personnes, des biens et de l’environnement. Chaque chapitre cite sa source.' });
VSAV.part({ id: 'godr', tab: 'Doctrine', title: 'Doctrine nationale — GDO, GTO, GODR et PIO', color: '#1e3a8a', motif: 'book',
  desc: 'Synthèse des guides nationaux de doctrine opérationnelle (GDO), de techniques opérationnelles (GTO), des GODR et des partages d’informations opérationnelles (PIO).',
  intro: '<b>Les guides nationaux</b> fixent le cadre commun à tous les SDIS. Chaque chapitre résume un guide : à quoi il sert, ses idées clés et ses chiffres importants. Les consignes locales du SDIS 51 peuvent les préciser.' });
