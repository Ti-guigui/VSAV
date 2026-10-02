/* L'ESSENTIEL — chiffres, seuils et conduites à tenir les plus importants (avec renvoi au cours) */
VSAV.ess([
  { t: 'Constantes normales', ic: 'ecg', html: '<div class="tw"><table><tr><th></th><th>Adulte</th><th>Enfant</th><th>Nourrisson</th><th>Nouveau-né</th></tr><tr><td>Âge</td><td>dès la puberté</td><td>1 an → puberté</td><td>1 sem. → 1 an</td><td>&lt; 1 semaine</td></tr><tr><td>FR /min</td><td>12–20</td><td>20–30</td><td>30–40</td><td>40–60</td></tr><tr><td>FC /min</td><td>60–100</td><td>70–140</td><td>100–160</td><td>120–160</td></tr></table></div><p class="small muted">Mémento SSUAP</p>',
    items: [
      { k: 'Glycémie', v: 'Norme <b>80–120 mg/dl</b> ; hypoglycémie <b>&lt; 60 mg/dl</b> adulte, <b>&lt; 50 mg/dl</b> enfant 2–15 ans.', go: 'hypoglycemie/seuils' },
      { k: 'Glasgow', v: 'Y 4 + V 5 + M 6 = <b>3 à 15</b> ; <b>&lt; 8</b> → présence médicale recommandée.', go: 'bilan-primaire/d' },
      { k: 'Durées d’évaluation', v: 'Bilan primaire : <b>10 s</b> ; bilan secondaire : <b>1 min</b>.', go: 'bilan-primaire/b' },
      { k: 'TRC (détresse circulatoire)', v: 'PR Bilan secondaire : <b>&gt; 3 s</b> ; Memo C : <b>&gt; 2 s</b> (écart entre documents).', go: 'bilan-secondaire/bcd' },
      { k: 'Hypothermie', v: '&lt; 35 °C ; légère 35–32, modérée 32–28, sévère 28–24, profonde &lt; 24 °C.', go: 'froid/hypo' },
      { k: 'Surveillance', v: 'Détresse : toutes les <b>5 min max</b> ; sinon toutes les <b>10–15 min</b>.', go: 'bilan-surveillance/principe' }
    ] },
  { t: 'RCP / arrêt cardiaque', ic: 'heart', items: [
      { k: 'Reconnaître', v: 'Ne répond pas + pas de respiration ou respiration agonique (<b>≤ 6/min</b>). Pouls : <b>10 s max</b>, fémoral chez le nourrisson.', go: 'rcp-acr/signes' },
      { k: 'Rapports', v: 'Adulte <b>30/2</b> ; enfant et nourrisson <b>5 insufflations</b> puis <b>15/2</b> ; nouveau-né <b>3/1</b> à 120/min (après 40 insufflations à l’air en 1 min).', go: 'rcp-acr/enfant' },
      { k: 'Compressions', v: '<b>100–120/min</b> ; adulte ~5 cm sans dépasser 6 ; enfant 1/3 ≈ 5 cm ; nourrisson 1/3 ≈ 4 cm ; compression = relâchement.', go: 'rcp-gestes/compressions' },
      { k: 'DAE', v: 'Le plus tôt possible, électrodes posées sans arrêter la RCP ; reprise <b>immédiate</b> après le choc ; arrêt sur demande médicale seulement.', go: 'dae/etapes' },
      { k: 'Relais / O₂', v: 'Relais toutes les <b>2 min</b> (pendant l’analyse) ; O₂ en insufflation <b>15 L/min</b>.', go: 'rcp-acr/adulte' },
      { k: 'Pouls sans ventilation', v: 'Insufflations seules : <b>10/min</b> adulte, <b>15–20</b> enfant, <b>25–30</b> nourrisson.', go: 'rcp-acr/apres' },
      { k: 'Hypotherme', v: 'Signes de vie recherchés <b>≥ 1 min</b> ; <b>3 chocs max</b> si T° &lt; 30 °C.', go: 'froid/hypo-cat' }
    ] },
  { t: 'Oxygène', ic: 'bottle', items: [
      { k: 'Détresse X-A-B-C', v: 'MHC <b>15 L/min</b> quelle que soit la SpO₂. Détresse D : selon la SpO₂.', go: 'oxygene/indications' },
      { k: 'SpO₂ &lt; 94 %', v: '15 L/min puis <b>9–15 L/min</b>, objectif <b>94–98 %</b>.', go: 'bilan-primaire/b' },
      { k: 'IRC &lt; 89 %', v: '15 L/min puis 9–15 L/min, objectif <b>89–92 %</b>.', go: 'oxygene/dispositifs' },
      { k: 'CO, fumées, plongée', v: 'MHC <b>15 L/min</b> quelle que soit la SpO₂.', go: 'plongee/cat' },
      { k: 'Dispositifs', v: 'MHC 9–15 (jamais &lt; 6) ; masque simple 6–9 ; lunettes 1–6 L/min. Jamais de BAVU en inhalation.', go: 'oxygene/dispositifs' }
    ] },
  { t: 'Hémorragies et traumatismes', ic: 'drop', items: [
      { k: 'Garrot', v: '<b>5–7 cm</b> au-dessus de la plaie, entre plaie et racine, jamais sur une articulation ; <b>heure notée</b> ; desserré sur ordre médical.', go: 'hemorragies/garrot' },
      { k: 'Corps étranger', v: 'Jamais retiré (abdomen, thorax sauf s’il empêche la RCP, plaie qui saigne, œil).', go: 'trauma-thorax/cat' },
      { k: 'Rachis : haut risque', v: 'Chute tête &gt; 1 m, pieds/fesses &gt; 3 m, &gt; 40 km/h, éjection, retournement, 2 roues, piéton, cheval… (+ &gt; 65 ans ou antécédents).', go: 'trauma-rachis/criteres' },
      { k: 'Immobilisation', v: '<b>MID</b> prioritaire ; brancard cuillère pour relever ; collier non systématique, desserré dans le MID ; matériel d’extraction retiré avant.', go: 'trauma-rachis/materiel' },
      { k: 'Bassin', v: 'Ceinture sur les <b>grands trochanters</b>, fermée sur la symphyse, si détresse circulatoire (avis médical).', go: 'trauma-bassin/ceinture' },
      { k: 'Membre comprimé', v: 'Sans avis possible : garrot si compression &gt; <b>4 h</b>.', go: 'compression-membre/exception' },
      { k: 'Brûlure', v: 'Eau <b>15–25 °C</b> ; refroidir si &lt; 30 min, consciente, sans détresse circulatoire, &lt; 20 % adulte / &lt; 10 % enfant ; chimique : ≥ 20 min.', go: 'brulures/thermique' }
    ] },
  { t: 'Conduites à tenir clés', ic: 'list', items: [
      { k: 'AVC', v: '<b>FAST</b> ; strictement à plat (PLS si vomit) ; glycémie ; heure de début ; unité neuro-vasculaire.', go: 'avc/cat' },
      { k: 'Convulsions', v: 'Ne jamais contraindre, rien dans la bouche ; après : LVA, PLS ou RCP ; glycémie après la crise.', go: 'convulsions/cat' },
      { k: 'Hypoglycémie', v: 'Sucre si capable d’avaler : <b>4</b> morceaux adulte, <b>2–3</b> enfant ; amélioration en 10–15 min.', go: 'hypoglycemie/cat' },
      { k: 'Allergie grave', v: 'Auto-injecteur à la demande de la victime / du régulateur ; 2e injection après <b>10–15 min</b> si besoin.', go: 'allergie/cat' },
      { k: 'Coup de chaleur', v: 'Refroidir (déshabiller, ventiler, pulvériser, linges froids, glace) ; objectif <b>&lt; 39,4 °C</b>.', go: 'chaleur/formes' },
      { k: 'Opiacés', v: 'FR &lt; 12 → O₂ ; FR &lt; 6 → ventiler ; naloxone nasale dès <b>14 ans</b>, renouvelable à 2–3 min.', go: 'intoxications/opiaces' },
      { k: 'Nouveau-né', v: 'Clamper ≥ <b>1 min</b> si bonne santé ; 1er clamp à <b>10–15 cm</b> ; sécher, bonnet ; tête neutre.', go: 'nouveau-ne/cordon' },
      { k: 'Nombreuses victimes', v: 'Noir / Rouge (FR &gt; 30, FC &gt; 120, PLS) / Jaune / Vert (PRV).', go: 'snv/methode' }
    ] },
  { t: 'Sécurité et manutention', ic: 'shield', items: [
      { k: 'Accident de la route', v: 'Gilet avant de sortir ; balisage <b>150–200 m</b> ; contact coupé, carte à &gt; 5 m ; frein à main.', go: 'securite/route' },
      { k: 'Électricité', v: 'Pas de contact avant coupure certaine ; véhicule sous ligne : occupants dedans.', go: 'electrique/securite' },
      { k: 'Foudre', v: 'Distance &gt; <b>3 m</b> entre intervenants ; petits pas ; assis en boule sur un sac.', go: 'foudre/regles' },
      { k: 'Manutention', v: 'Dos plat, cuisses ; ordres en deux temps ; brancard horizontal ; tête en avant, chef à l’arrière ; descente pieds en avant.', go: 'brancardage-principes/regles' },
      { k: 'Hygiène', v: 'Protocole simplifié entre chaque victime : pulvériser, étaler, laisser sécher sans rincer ; traçabilité.', go: 'vsav-hygiene/simplifie' }
    ] }
]);
