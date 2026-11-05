const assets={};
const QUESTIONS=[
  {
    "id": 1,
    "type": "QCS",
    "text": "Quel signe est le plus évocateur d'un syndrome occlusif chez l'enfant ?",
    "options": [
      {
        "key": "A",
        "text": "Régurgitations sans effort"
      },
      {
        "key": "B",
        "text": "Présence de selles dures type « crottes de lapin »"
      },
      {
        "key": "C",
        "text": "Vomissements verts bilieux"
      },
      {
        "key": "D",
        "text": "Bruits hydro-aériques présents"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Vomissements verts bilieux"
  },
  {
    "id": 2,
    "type": "QCS",
    "text": "Un enfant de 3 ans, hospitalisé pour douleur abdominale, présente des vomissements verts, Que faites-vous ?",
    "options": [
      {
        "key": "A",
        "text": "SRO"
      },
      {
        "key": "B",
        "text": "Doliprane sirop"
      },
      {
        "key": "C",
        "text": "Mise en place d’une sonde de Salem"
      },
      {
        "key": "D",
        "text": "Appel du médecin"
      }
    ],
    "correct": [
      "D"
    ],
    "feedback": "Selon le corrigé fourni : D. Appel du médecin"
  },
  {
    "id": 3,
    "type": "QCS",
    "text": "Devant une douleur thoracique aiguë, quelles pathologies doivent être évoquées dans le diagnostic différentiel d'un infarctus du myocarde (mnémonique PIED) ?",
    "options": [
      {
        "key": "A",
        "text": "Péricardite et Embolie pulmonaire uniquement"
      },
      {
        "key": "B",
        "text": "Péricardite, Infarctus du myocarde, Embolie pulmonaire et Dissection aortique"
      },
      {
        "key": "C",
        "text": "Pneumonie, Ischémie mésentérique, Endocardite et Dissection aortique"
      },
      {
        "key": "D",
        "text": "Péricardite, Insuffisance cardiaque, Endocardite et Dissection aortique"
      },
      {
        "key": "E",
        "text": "Pleurésie, Ischémie cérébrale, Embolie pulmonaire et Dissection aortique"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Péricardite, Infarctus du myocarde, Embolie pulmonaire et Dissection aortique"
  },
  {
    "id": 4,
    "type": "QCS",
    "text": "Quelle échelle d'évaluation de la douleur est recommandée chez un enfant de 5 ans capable de communiquer ?",
    "options": [
      {
        "key": "A",
        "text": "Échelle numérique"
      },
      {
        "key": "B",
        "text": "Échelle des visages"
      },
      {
        "key": "C",
        "text": "EVENDOL uniquement"
      },
      {
        "key": "D",
        "text": "Échelle verbale simple uniquement"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Échelle des visages"
  },
  {
    "id": 5,
    "type": "QCS",
    "text": "Jusqu'à quel âge un enfant est-il considéré comme un nourrisson ?",
    "options": [
      {
        "key": "A",
        "text": "6 mois"
      },
      {
        "key": "B",
        "text": "1 an"
      },
      {
        "key": "C",
        "text": "3 ans"
      },
      {
        "key": "D",
        "text": "6 ans"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. 3 ans"
  },
  {
    "id": 6,
    "type": "QCS",
    "text": "Parmi les propositions suivantes concernant les facteurs de risque cardiovasculaires, laquelle est FAUSSE ?",
    "options": [
      {
        "key": "A",
        "text": "Le tabagisme est un facteur de risque cardiovasculaire absolu."
      },
      {
        "key": "B",
        "text": "Le diabète est un facteur de risque cardiovasculaire absolu."
      },
      {
        "key": "C",
        "text": "La sédentarité est un facteur de risque cardiovasculaire relatif."
      },
      {
        "key": "D",
        "text": "L'hérédité est un facteur de risque cardiovasculaire relatif."
      },
      {
        "key": "E",
        "text": "Le sexe féminin est un facteur de risque cardiovasculaire absolu."
      }
    ],
    "correct": [
      "E"
    ],
    "feedback": "Le sexe masculin est considéré comme un facteur de risque cardiovasculaire absolu, contrairement au sexe féminin. Les autres propositions sont correctes."
  },
  {
    "id": 7,
    "type": "QCS",
    "text": "Concernant l'artériopathie oblitérante des membres inférieurs , laquelle est vrai ?",
    "options": [
      {
        "key": "A",
        "text": "Les symptômes sont causés par une réduction du calibre des vaisseaux veineux entraînant une déficit tissulaire en oxygène."
      },
      {
        "key": "B",
        "text": "La cause la plus fréquente est l'athérosclérose."
      },
      {
        "key": "C",
        "text": "Les premiers symptômes apparaissent au repos."
      },
      {
        "key": "D",
        "text": "L'ischémie aiguë de membre est liée à une interruption progressive du flux artériel."
      },
      {
        "key": "E",
        "text": "En cas d'ischémie aiguë de membre : le membre sera chaud, rouge avec une absence de pouls périphérique"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "L'athérosclérose est responsable d'environ 98 % des cas d'AOMI"
  },
  {
    "id": 8,
    "type": "QCS",
    "text": "Concernant l'occlusion artérielle aiguë, quelle proposition est correcte ?",
    "options": [
      {
        "key": "A",
        "text": "Elle est uniquement due à une thrombose in situ."
      },
      {
        "key": "B",
        "text": "L'embolie survient préférentiellement sur une artère saine."
      },
      {
        "key": "C",
        "text": "La thrombose in situ survient sur une artère saine."
      },
      {
        "key": "D",
        "text": "L'occlusion aiguë n'entraîne pas de conséquence tissulaire."
      },
      {
        "key": "E",
        "text": "L'embolie et la thrombose in situ ont le même mécanisme."
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. L'embolie survient préférentiellement sur une artère saine."
  },
  {
    "id": 9,
    "type": "QCS",
    "text": "Concernant le diagnostic de l'infarctus aigu du myocarde avec sus-décalage du segment ST (STEMI), quelle proposition est exacte ?",
    "options": [
      {
        "key": "A",
        "text": "Le diagnostic repose uniquement sur la biologie."
      },
      {
        "key": "B",
        "text": "Une douleur thoracique durant moins de 5 minutes suffit à poser le diagnostic."
      },
      {
        "key": "C",
        "text": "Le diagnostic doit être évoqué devant une douleur angineuse thoracique prolongée (> 30 minutes), résistante aux dérivés nitrés, associée à un sus-décalage du segment ST dans au moins 2 dérivations contiguës."
      },
      {
        "key": "D",
        "text": "L'ECG est inutile si la troponine est élevée."
      },
      {
        "key": "E",
        "text": "Le sus-décalage du segment ST est observé dans une seule dérivation ECG."
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Le diagnostic doit être évoqué devant une douleur angineuse thoracique prolongée (> 30 minutes), résistante aux dérivés nitrés, associée à un sus-décalage du segment ST dans au moins 2 dérivations contiguës."
  },
  {
    "id": 10,
    "type": "QCS",
    "text": "Parmi les propositions suivantes concernant les signes d'hypercapnie, laquelle est exacte ?",
    "options": [
      {
        "key": "A",
        "text": "L'hypercapnie correspond à une diminution du CO₂ dans le sang."
      },
      {
        "key": "B",
        "text": "Les céphalées et les sueurs peuvent être des signes d'hypercapnie."
      },
      {
        "key": "C",
        "text": "L'hypercapnie entraîne systématiquement une hypotension artérielle."
      },
      {
        "key": "D",
        "text": "Les troubles neurologiques sont absents en cas d'hypercapnie."
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Les céphalées et les sueurs peuvent être des signes d'hypercapnie."
  },
  {
    "id": 11,
    "type": "QCS",
    "text": "Chez les patients atteints de BPCO, quelles sont les principales causes de mortalité ?",
    "options": [
      {
        "key": "A",
        "text": "L'insuffisance respiratoire, le cancer et les maladies cardiovasculaires"
      },
      {
        "key": "B",
        "text": "Les infections urinaires, l'arthrose et le diabète"
      },
      {
        "key": "C",
        "text": "Les maladies digestives et hépatiques"
      },
      {
        "key": "D",
        "text": "Les traumatismes"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. L'insuffisance respiratoire, le cancer et les maladies cardiovasculaires"
  },
  {
    "id": 12,
    "type": "QCS",
    "text": "Parmi les propositions suivantes concernant la BPCO, laquelle est exacte ?",
    "options": [
      {
        "key": "A",
        "text": "L'insuffisance respiratoire, le cancer et les maladies cardiovasculaires sont les principales causes de mortalité des patients atteints de BPCO."
      },
      {
        "key": "B",
        "text": "La principale cause de mortalité est l'insuffisance rénale."
      },
      {
        "key": "C",
        "text": "Les patients décèdent principalement de complications digestives."
      },
      {
        "key": "D",
        "text": "Les causes de mortalité sont exclusivement respiratoires."
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. L'insuffisance respiratoire, le cancer et les maladies cardiovasculaires sont les principales causes de mortalité des patients atteints de BPCO."
  },
  {
    "id": 13,
    "type": "QCS",
    "text": "Chez un patient atteint de BPCO, quelle affirmation est vraie ?",
    "options": [
      {
        "key": "A",
        "text": "Le surpoids est associé à un meilleur pronostic que la dénutrition."
      },
      {
        "key": "B",
        "text": "La dénutrition est associée à un meilleur pronostic que le surpoids."
      },
      {
        "key": "C",
        "text": "Le poids n'a aucun impact sur le pronostic."
      },
      {
        "key": "D",
        "text": "La perte de poids améliore systématiquement la survie."
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Le surpoids est associé à un meilleur pronostic que la dénutrition."
  },
  {
    "id": 14,
    "type": "QCS",
    "text": "Concernant les hernies, quelle proposition est exacte ?",
    "options": [
      {
        "key": "A",
        "text": "Une hernie correspond au déplacement de tout ou d'une partie d'un organe hors de la cavité qui le contient normalement."
      },
      {
        "key": "B",
        "text": "Une hernie est toujours sans conséquence sur la vascularisation des organes."
      },
      {
        "key": "C",
        "text": "Une hernie inguinale n'entraîne jamais d'ischémie."
      },
      {
        "key": "D",
        "text": "Une hernie est une malformation osseuse."
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Une hernie correspond au déplacement de tout ou d'une partie d'un organe hors de la cavité qui le contient normalement."
  },
  {
    "id": 15,
    "type": "QCS",
    "text": "Concernant la pyélonéphrite, quelle proposition est exacte ?",
    "options": [
      {
        "key": "A",
        "text": "La pyélonéphrite est une infection des voies urinaires hautes."
      },
      {
        "key": "B",
        "text": "La pyélonéphrite est une infection limitée à l'urètre."
      },
      {
        "key": "C",
        "text": "La pyélonéphrite est une infection des voies respiratoires."
      },
      {
        "key": "D",
        "text": "La pyélonéphrite n'est jamais associée à de la fièvre."
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "La pyélonéphrite est une infection des voies urinaires hautes, touchant le rein et le bassinet"
  },
  {
    "id": 16,
    "type": "QCS",
    "text": "Concernant les voies biliaires et la pancréatite, quelle proposition est exacte ?",
    "options": [
      {
        "key": "A",
        "text": "Le cholédoque est le canal qui relie la vésicule biliaire au duodénum."
      },
      {
        "key": "B",
        "text": "Un calcul enclavé au niveau de l'ampoule de Vater peut être responsable d'une pancréatite aiguë."
      },
      {
        "key": "C",
        "text": "Le cholédoque transporte uniquement les sucs pancréatiques."
      },
      {
        "key": "D",
        "text": "Un calcul du cholédoque n'a jamais de conséquence sur le pancréas."
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Un calcul enclavé au niveau de l'ampoule de Vater peut être responsable d'une pancréatite aiguë."
  },
  {
    "id": 17,
    "type": "QCS",
    "text": "Concernant les accidents vasculaires cérébraux (AVC), quelle proposition est exacte ?",
    "options": [
      {
        "key": "A",
        "text": "Il existe deux grands types d'AVC : ischémique et hémorragique."
      },
      {
        "key": "B",
        "text": "Tous les AVC sont d'origine hémorragique."
      },
      {
        "key": "C",
        "text": "Tous les AVC sont d'origine ischémique."
      },
      {
        "key": "D",
        "text": "Un AVC est toujours causé par un traumatisme crânien"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Il existe deux grands types d'AVC : ischémique et hémorragique."
  },
  {
    "id": 18,
    "type": "QCS",
    "text": "Concernant le traitement de la thrombose veineuse cérébrale, quelle proposition est exacte ?",
    "options": [
      {
        "key": "A",
        "text": "Le traitement repose uniquement sur des antalgiques."
      },
      {
        "key": "B",
        "text": "Le traitement antithrombotique repose sur une héparine puis un AVK pendant environ 6 mois."
      },
      {
        "key": "C",
        "text": "L'arrêt de la contraception orale est contre-indiqué."
      },
      {
        "key": "D",
        "text": "L'épilepsie et les céphalées ne nécessitent aucun traitement spécifique."
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Le traitement antithrombotique repose sur une héparine puis un AVK pendant environ 6 mois."
  },
  {
    "id": 19,
    "type": "QCS",
    "text": "Concernant la thrombose veineuse cérébrale (TVC), quelle proposition est exacte ?",
    "options": [
      {
        "key": "A",
        "text": "L'hypertension intracrânienne se manifeste notamment par des céphalées, des nausées et des vomissements."
      },
      {
        "key": "B",
        "text": "Les céphalées sont toujours absentes lors d'une TVC."
      },
      {
        "key": "C",
        "text": "La TVC ne provoque jamais d'altération de la vigilance."
      },
      {
        "key": "D",
        "text": "Les nausées et vomissements excluent le diagnostic de TVC."
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. L'hypertension intracrânienne se manifeste notamment par des céphalées, des nausées et des vomissements."
  },
  {
    "id": 20,
    "type": "QCS",
    "text": "Concernant l'hémorragie méningée (ou hémorragie sous-arachnoïdienne), quelle proposition est exacte ?",
    "options": [
      {
        "key": "A",
        "text": "Elle correspond à une irruption de sang dans les espaces sous-arachnoïdiens."
      },
      {
        "key": "B",
        "text": "Elle touche exclusivement les personnes de plus de 80 ans."
      },
      {
        "key": "C",
        "text": "Son pronostic est généralement bénin, sans séquelles neurologiques."
      },
      {
        "key": "D",
        "text": "Elle est plus fréquente chez l'homme que chez la femme."
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Elle correspond à une irruption de sang dans les espaces sous-arachnoïdiens."
  },
  {
    "id": 21,
    "type": "QCM",
    "text": "Concernant les signes de gravité d'une détresse respiratoire aiguë, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Les signes d'hypoxémie font partie des signes de gravité."
      },
      {
        "key": "B",
        "text": "Les signes digestifs constituent une catégorie majeure de signes de gravité respiratoire."
      },
      {
        "key": "C",
        "text": "Les signes d'hypercapnie font partie des signes de gravité."
      },
      {
        "key": "D",
        "text": "Les signes dermatologiques sont recherchés en priorité."
      },
      {
        "key": "E",
        "text": "Les signes de lutte ou d'épuisement ne sont pas des signes de gravité."
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Les signes d'hypoxémie font partie des signes de gravité. / C. Les signes d'hypercapnie font partie des signes de gravité."
  },
  {
    "id": 22,
    "type": "QCM",
    "text": "Concernant l'échelle EVENDOL, quelles sont les propositions vraies ?",
    "options": [
      {
        "key": "A",
        "text": "Elle est utilisée de la naissance à 7 ans"
      },
      {
        "key": "B",
        "text": "Son score varie de 0 à 15"
      },
      {
        "key": "C",
        "text": "Le seuil de prescription antalgique est de 4"
      },
      {
        "key": "D",
        "text": "Elle est utilisée uniquement chez l'adulte"
      },
      {
        "key": "E",
        "text": "Son score maximal est de 10"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Elle est utilisée de la naissance à 7 ans / B. Son score varie de 0 à 15 / C. Le seuil de prescription antalgique est de 4"
  },
  {
    "id": 23,
    "type": "QCM",
    "text": "Un nouveau-né de 3 semaines, est hospitalisé pour sténose du pylore. Sur quel(s) argument(s) le diagnostic a-t’il pu être fait ?",
    "options": [
      {
        "key": "A",
        "text": "Vomissements verts"
      },
      {
        "key": "B",
        "text": "Distension abdominale à droite"
      },
      {
        "key": "C",
        "text": "Echographie abdominale retrouvant une hypertrophie du muscle pylorique"
      },
      {
        "key": "D",
        "text": "Transit conservé"
      }
    ],
    "correct": [
      "C",
      "D"
    ],
    "feedback": "L'échographie est l'examen de référence pour confirmer le diagnostic. Le transit est généralement conservé au début de l'évolution, contrairement à une occlusion intestinale complète"
  },
  {
    "id": 24,
    "type": "QCM",
    "text": "Concernant le syndrome occlusif chez l'enfant, quelles sont les propositions vraies ?",
    "options": [
      {
        "key": "A",
        "text": "Les vomissements verts correspondent à des vomissements de bile."
      },
      {
        "key": "B",
        "text": "Des vomissements verts évoquent un obstacle situé après le duodénum."
      },
      {
        "key": "C",
        "text": "Plus l'obstacle intestinal est haut, plus le ballonnement est important."
      },
      {
        "key": "D",
        "text": "Dans la sténose du pylore, les vomissements sont alimentaires."
      },
      {
        "key": "E",
        "text": "Un ballonnement abdominal est un signe possible de syndrome occlusif."
      }
    ],
    "correct": [
      "A",
      "B",
      "D",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. Les vomissements verts correspondent à des vomissements de bile. / B. Des vomissements verts évoquent un obstacle situé après le duodénum. / D. Dans la sténose du pylore, les vomissements sont alimentaires. / E. Un ballonnement abdominal est un signe possible de syndrome occlusif."
  },
  {
    "id": 25,
    "type": "QCM",
    "text": "Concernant les causes d'occlusion intestinale selon l'âge, quelles sont les propositions vraies ?",
    "options": [
      {
        "key": "A",
        "text": "L'atrésie de l'œsophage est une cause néonatale."
      },
      {
        "key": "B",
        "text": "La sténose du pylore survient principalement chez le nourrisson."
      },
      {
        "key": "C",
        "text": "La maladie de Hirschsprung peut être retrouvée chez le nouveau-né et le nourrisson."
      },
      {
        "key": "D",
        "text": "Les MICI sont une cause fréquente d'occlusion chez le nouveau-né."
      },
      {
        "key": "E",
        "text": "L'iléus méconial est une cause d'occlusion du grêle chez le nouveau-né."
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. L'atrésie de l'œsophage est une cause néonatale. / B. La sténose du pylore survient principalement chez le nourrisson. / C. La maladie de Hirschsprung peut être retrouvée chez le nouveau-né et le nourrisson. / E. L'iléus méconial est une cause d'occlusion du grêle chez le nouveau-né."
  },
  {
    "id": 26,
    "type": "QCM",
    "text": "Concernant la maladie de Hirschsprung, quelles sont les propositions vraies ?",
    "options": [
      {
        "key": "A",
        "text": "Elle est également appelée « mégacolon »."
      },
      {
        "key": "B",
        "text": "Elle est due à un défaut d'innervation d'une partie du côlon."
      },
      {
        "key": "C",
        "text": "Le retard à l'émission du méconium est un signe évocateur."
      },
      {
        "key": "D",
        "text": "Le transit intestinal est généralement spontané et normal."
      },
      {
        "key": "E",
        "text": "La chirurgie peut faire partie du traitement."
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. Elle est également appelée « mégacolon ». / B. Elle est due à un défaut d'innervation d'une partie du côlon. / C. Le retard à l'émission du méconium est un signe évocateur. / E. La chirurgie peut faire partie du traitement."
  },
  {
    "id": 27,
    "type": "QCM",
    "text": "Concernant l’occlusion artérielle chronique, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "L’athérome est responsable d’environ 98 % des cas."
      },
      {
        "key": "B",
        "text": "La principale conséquence est une anoxie brutale sans adaptation de l’organisme."
      },
      {
        "key": "C",
        "text": "L’hypoxie tissulaire est une conséquence de l’occlusion chronique."
      },
      {
        "key": "D",
        "text": "Une néo-angiogenèse peut se développer."
      },
      {
        "key": "E",
        "text": "La néo-vascularisation permet la formation d’un réseau collatéral."
      }
    ],
    "correct": [
      "A",
      "C",
      "D",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. L’athérome est responsable d’environ 98 % des cas. / C. L’hypoxie tissulaire est une conséquence de l’occlusion chronique. / D. Une néo-angiogenèse peut se développer. / E. La néo-vascularisation permet la formation d’un réseau collatéral."
  },
  {
    "id": 28,
    "type": "QCM",
    "text": "Concernant l’artériopathie oblitérante des membres inférieurs (AOMI), quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "L’AOMI correspond à une oblitération progressive des artères des membres inférieurs."
      },
      {
        "key": "B",
        "text": "L’athérosclérose est la principale cause de l’AOMI."
      },
      {
        "key": "C",
        "text": "L’AOMI est une maladie aiguë."
      },
      {
        "key": "D",
        "text": "L’AOMI peut témoigner d’une athérosclérose évoluée sur d’autres territoires artériels."
      },
      {
        "key": "E",
        "text": "Le pronostic de l’AOMI est généralement favorable et sans risque cardiovasculaire associé."
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : A. L’AOMI correspond à une oblitération progressive des artères des membres inférieurs. / B. L’athérosclérose est la principale cause de l’AOMI. / D. L’AOMI peut témoigner d’une athérosclérose évoluée sur d’autres territoires artériels."
  },
  {
    "id": 29,
    "type": "QCM",
    "text": "Concernant la physiopathologie de l’AOMI, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "L’artère fémorale superficielle (AFS) est la première artère touchée par l’AOMI."
      },
      {
        "key": "B",
        "text": "L’AFS est fréquemment le siège de calcifications."
      },
      {
        "key": "C",
        "text": "L’artère fémorale profonde joue un rôle d’artère de suppléance."
      },
      {
        "key": "D",
        "text": "L’AOMI est toujours unilatérale."
      },
      {
        "key": "E",
        "text": "Une circulation collatérale peut se développer via l’artère fémorale profonde pour revasculariser le territoire poplité situé en aval de la lésion."
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. L’artère fémorale superficielle (AFS) est la première artère touchée par l’AOMI. / B. L’AFS est fréquemment le siège de calcifications. / C. L’artère fémorale profonde joue un rôle d’artère de suppléance. / E. Une circulation collatérale peut se développer via l’artère fémorale profonde pour revasculariser le territoire poplité situé en aval de la lésion."
  },
  {
    "id": 30,
    "type": "QCM",
    "text": "Concernant la physiopathologie et la prise en charge de l'AOMI, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "L'artère fémorale profonde est une artère essentielle chez l'artériopathe."
      },
      {
        "key": "B",
        "text": "La marche favorise le développement de la circulation collatérale."
      },
      {
        "key": "C",
        "text": "La marche est contre-indiquée dans les formes modérées d'AOMI."
      },
      {
        "key": "D",
        "text": "La marche constitue le premier traitement de l'AOMI dans les formes modérées."
      },
      {
        "key": "E",
        "text": "Le développement de la collatéralité améliore la perfusion des tissus."
      }
    ],
    "correct": [
      "A",
      "B",
      "D",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. L'artère fémorale profonde est une artère essentielle chez l'artériopathe. / B. La marche favorise le développement de la circulation collatérale. / D. La marche constitue le premier traitement de l'AOMI dans les formes modérées. / E. Le développement de la collatéralité améliore la perfusion des tissus."
  },
  {
    "id": 31,
    "type": "QCM",
    "text": "Concernant les signes fonctionnels de l’AOMI, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "La douleur de l’AOMI apparaît préférentiellement au repos."
      },
      {
        "key": "B",
        "text": "La douleur à la marche impose souvent l’arrêt de la marche."
      },
      {
        "key": "C",
        "text": "La douleur survient toujours à un périmètre de marche différent."
      },
      {
        "key": "D",
        "text": "La localisation de la douleur (fessière, crurale ou surale) peut orienter vers le niveau de la lésion artérielle."
      },
      {
        "key": "E",
        "text": "La gonarthrose est une complication de l’AOMI."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : B. La douleur à la marche impose souvent l’arrêt de la marche. / D. La localisation de la douleur (fessière, crurale ou surale) peut orienter vers le niveau de la lésion artérielle."
  },
  {
    "id": 32,
    "type": "QCM",
    "text": "Concernant l'examen clinique des pouls dans l'AOMI, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Le pouls poplité est palpé en arrière du genou."
      },
      {
        "key": "B",
        "text": "Le pouls pédieux est palpé au niveau du poignet."
      },
      {
        "key": "C",
        "text": "Le pouls tibial postérieur est un pouls du membre inférieur."
      },
      {
        "key": "D",
        "text": "Le pouls fémoral est palpé au niveau du cou."
      },
      {
        "key": "E",
        "text": "L'examen des pouls n'a aucun intérêt dans l'AOMI."
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Le pouls poplité est palpé en arrière du genou. / C. Le pouls tibial postérieur est un pouls du membre inférieur."
  },
  {
    "id": 34,
    "type": "QCM",
    "text": "Lors de l'examen clinique d'une AOMI, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "La palpation des pouls artériels est un élément essentiel de l'examen clinique."
      },
      {
        "key": "B",
        "text": "Le temps de recoloration cutanée n'est évalué qu'en position debout."
      },
      {
        "key": "C",
        "text": "La dépilation des membres inférieurs peut être un signe d'insuffisance artérielle chronique."
      },
      {
        "key": "D",
        "text": "Un temps de recoloration rapide est en faveur d'une ischémie sévère."
      },
      {
        "key": "E",
        "text": "Le pouls pédieux se palpe en arrière du genou."
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. La palpation des pouls artériels est un élément essentiel de l'examen clinique. / C. La dépilation des membres inférieurs peut être un signe d'insuffisance artérielle chronique."
  },
  {
    "id": 35,
    "type": "QCM",
    "text": "Concernant les troubles trophiques observés dans l'AOMI, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Les troubles trophiques comprennent les ulcères et les nécroses."
      },
      {
        "key": "B",
        "text": "L'ulcère artériel est généralement volumineux, suintant et peu douloureux."
      },
      {
        "key": "C",
        "text": "L'ulcère artériel est souvent douloureux avec des bords nécrotiques."
      },
      {
        "key": "D",
        "text": "La nécrose humide est moins grave que la nécrose sèche."
      },
      {
        "key": "E",
        "text": "Les ulcères artériels s'accompagnent toujours de signes d'insuffisance veineuse."
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Les troubles trophiques comprennent les ulcères et les nécroses. / C. L'ulcère artériel est souvent douloureux avec des bords nécrotiques."
  },
  {
    "id": 36,
    "type": "QCM",
    "text": "Concernant les complications vasculaires hémorragiques de la pancréatite aiguë grave, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Elles sont d'origine artérielle."
      },
      {
        "key": "B",
        "text": "Elles intéressent principalement la veine porte."
      },
      {
        "key": "C",
        "text": "Elles peuvent être liées à la formation de faux anévrismes."
      },
      {
        "key": "D",
        "text": "Elles sont le plus souvent asymptomatiques."
      },
      {
        "key": "E",
        "text": "L'anticoagulation est le traitement de référence."
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Elles sont d'origine artérielle. / C. Elles peuvent être liées à la formation de faux anévrismes."
  },
  {
    "id": 37,
    "type": "QCM",
    "text": "Concernant les complications vasculaires thrombotiques de la pancréatite aiguë grave, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Elles sont d'origine artérielle."
      },
      {
        "key": "B",
        "text": "Elles peuvent toucher la veine porte."
      },
      {
        "key": "C",
        "text": "Elles concernent uniquement la veine cave inférieure."
      },
      {
        "key": "D",
        "text": "Elles peuvent entraîner une ischémie mésentérique."
      },
      {
        "key": "E",
        "text": "Elles provoquent systématiquement une hémorragie digestive."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : B. Elles peuvent toucher la veine porte. / D. Elles peuvent entraîner une ischémie mésentérique."
  },
  {
    "id": 38,
    "type": "QCM",
    "text": "Concernant la prise en charge du patient coronarien, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "La correction des facteurs de risque repose notamment sur les règles hygiéno-diététiques."
      },
      {
        "key": "B",
        "text": "Le traitement médicamenteux du patient coronarien peut être résumé par l'acronyme BASIC."
      },
      {
        "key": "C",
        "text": "La revascularisation est réalisée de manière systématique chez tous les patients."
      },
      {
        "key": "D",
        "text": "Le choix de la revascularisation dépend des lésions anatomiques coronaires."
      },
      {
        "key": "E",
        "text": "L'arrêt du tabac n'a pas d'impact sur le risque cardiovasculaire."
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : A. La correction des facteurs de risque repose notamment sur les règles hygiéno-diététiques. / B. Le traitement médicamenteux du patient coronarien peut être résumé par l'acronyme BASIC. / D. Le choix de la revascularisation dépend des lésions anatomiques coronaires."
  },
  {
    "id": 39,
    "type": "QCM",
    "text": "Concernant les circonstances de survenue de l'angor, quelles sont les propositions exactes ?",
    "options": [
      {
        "key": "A",
        "text": "L'angor survient préférentiellement lors d'efforts physiques."
      },
      {
        "key": "B",
        "text": "Le froid peut favoriser la survenue d'une crise d'angor."
      },
      {
        "key": "C",
        "text": "L'angor apparaît uniquement au repos."
      },
      {
        "key": "D",
        "text": "Les repas n'ont aucune influence sur la survenue d'un angor."
      },
      {
        "key": "E",
        "text": "Le tabac ne joue aucun rôle dans le déclenchement d'une crise d'angor."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. L'angor survient préférentiellement lors d'efforts physiques. / B. Le froid peut favoriser la survenue d'une crise d'angor."
  },
  {
    "id": 40,
    "type": "QCM",
    "text": "Parmi les situations suivantes, lesquelles correspondent à des facteurs de risque majeurs de maladie thromboembolique veineuse ?",
    "options": [
      {
        "key": "A",
        "text": "Chirurgie sous anesthésie générale de plus de 30 minutes dans les 3 derniers mois."
      },
      {
        "key": "B",
        "text": "Immobilisation > 3 jours pour motif médical aigu."
      },
      {
        "key": "C",
        "text": "Voyage en avion de 2 heures."
      },
      {
        "key": "D",
        "text": "Traumatisme d'un membre inférieur non plâtré avec mobilité réduite."
      },
      {
        "key": "E",
        "text": "Maladie inflammatoire chronique intestinale."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Chirurgie sous anesthésie générale de plus de 30 minutes dans les 3 derniers mois. / B. Immobilisation > 3 jours pour motif médical aigu."
  }
];
const json=(d,status=200,headers={})=>Response.json(d,{status,headers:{'Cache-Control':'no-store',...headers}});
async function sign(value,secret){let k=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return Array.from(new Uint8Array(await crypto.subtle.sign('HMAC',k,new TextEncoder().encode(value)))).map(x=>x.toString(16).padStart(2,'0')).join('')}
async function isAdmin(req,env){let c=req.headers.get('Cookie')?.match(/quizue28admin=([^;]+)/)?.[1];if(!c||!env.ADMIN_PASSWORD)return false;let [expiry,sig]=c.split('.');return Number(expiry)>Date.now()&&sig===await sign(expiry,env.ADMIN_PASSWORD)}
async function objects(env,prefix){let all=[],cursor;do{const l=await env.BUCKET.list({prefix,cursor});all.push(...await Promise.all(l.objects.map(o=>readObject(env,o.key))));cursor=l.truncated?l.cursor:undefined}while(cursor);return all.filter(Boolean)}
async function rows(env){const saved=await objects(env,'submissions/'),byId=new Map(saved.map(r=>[r.id,{...r,status:'completed',answered:QUESTIONS.filter(q=>(r.answers[q.id]||[]).length).length}]));for(const a of await objects(env,'attempts/')){if(!byId.has(a.id))byId.set(a.id,makeRow(a,false))}return [...byId.values()].sort((a,b)=>b.created_at.localeCompare(a.created_at))}
const equal=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
export default {async fetch(req,env){try{const path=new URL(req.url).pathname;const handled=await attemptRoutes(req,env,path);if(handled)return handled;if(assets[path])return new Response(assets[path][0],{headers:{'Content-Type':assets[path][1]}});
if(path==='/api/questions')return json(QUESTIONS.map(({id,type,text,options})=>({id,type,text,options})));
if(path==='/api/admin/login'&&req.method==='POST'){let d=await req.json();if(!env.ADMIN_PASSWORD||d.password!==env.ADMIN_PASSWORD)return json({error:'Mot de passe incorrect.'},401);let exp=String(Date.now()+8*3600000);return json({ok:true},200,{'Set-Cookie':`quizue28admin=${exp}.${await sign(exp,env.ADMIN_PASSWORD)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`})}
if(path==='/api/admin/logout')return json({ok:true},200,{'Set-Cookie':'quizue28admin=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0'});
if(path==='/api/admin/me')return json({admin:await isAdmin(req,env)});
if(path.startsWith('/api/admin/')){if(!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(path.endsWith('/questions'))return json(QUESTIONS);let data=await rows(env);if(path.endsWith('/results'))return json({results:data});if(path.endsWith('/export.csv')||path.endsWith('/export.xlsx'))return exportData(data,path.endsWith('.xlsx'));}
if(path==='/api/submit'&&req.method==='POST'){const d=await req.json(),a=await readObject(env,'attempts/'+d.attempt_token+'.json');if(!a)return json({error:'Tentative invalide'},409);if(a.submitted){const row=await readObject(env,'submissions/'+a.id+'.json');return json(withReview(row))}if(!a.deadline||Date.now()<=a.deadline+5000)a.answers=cleanAnswers(d.answers);return json(await finishAttempt(env,a));}
return json({error:'Page introuvable'},404)}catch(e){return json({error:'Erreur du serveur. Réessayez.'},500)}}};
const xml=s=>String(s??'').replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
function zip(files){let chunks=[],central=[],offset=0;const enc=new TextEncoder();const header=(n)=>new DataView(new ArrayBuffer(n));function crc(bytes){let c=0xffffffff;for(let b of bytes){c^=b;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(c^0xffffffff)>>>0}for(let [name,content]of Object.entries(files)){let n=enc.encode(name),b=enc.encode(content),c=crc(b),h=header(30);h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint32(14,c,true);h.setUint32(18,b.length,true);h.setUint32(22,b.length,true);h.setUint16(26,n.length,true);chunks.push(new Uint8Array(h.buffer),n,b);let z=header(46);z.setUint32(0,0x02014b50,true);z.setUint16(4,20,true);z.setUint16(6,20,true);z.setUint32(16,c,true);z.setUint32(20,b.length,true);z.setUint32(24,b.length,true);z.setUint16(28,n.length,true);z.setUint32(42,offset,true);central.push(new Uint8Array(z.buffer),n);offset+=30+n.length+b.length}let size=central.reduce((s,b)=>s+b.length,0),e=header(22);e.setUint32(0,0x06054b50,true);e.setUint16(8,Object.keys(files).length,true);e.setUint16(10,Object.keys(files).length,true);e.setUint32(12,size,true);e.setUint32(16,offset,true);return new Blob([...chunks,...central,e.buffer])}
function exportData(data,xlsx){let matrix=[['ID','Date UTC','Nom','Prénom','Groupe','Score','Total','Note /20','Durée (s)','État','Questions renseignées',...QUESTIONS.map(q=>'Q'+q.id+' réponse'),...QUESTIONS.map(q=>'Q'+q.id+' résultat')],...data.map(r=>[r.id,r.created_at,r.nom,r.prenom,r.groupe,r.score,r.total,r.score20,r.duration_seconds,r.status==='in_progress'?'En cours — note provisoire':'Terminée',r.answered??QUESTIONS.length,...QUESTIONS.map(q=>(r.answers[q.id]||[]).join(', ')),...QUESTIONS.map(q=>Number(equal(r.answers[q.id]||[],q.correct)))])];if(!xlsx)return new Response('\ufeff'+matrix.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(';')).join('\r\n'),{headers:{'Content-Type':'text/csv; charset=utf-8','Content-Disposition':'attachment; filename=resultats_quiz.csv'}});let sheet='<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>'+matrix.map(r=>'<row>'+r.map(x=>typeof x==='number'?`<c><v>${x}</v></c>`:`<c t="inlineStr"><is><t>${xml(x)}</t></is></c>`).join('')+'</row>').join('')+'</sheetData></worksheet>';let files={'[Content_Types].xml':'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>','_rels/.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>','xl/workbook.xml':'<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Résultats" sheetId="1" r:id="rId1"/></sheets></workbook>','xl/_rels/workbook.xml.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>','xl/worksheets/sheet1.xml':sheet};return new Response(zip(files),{headers:{'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','Content-Disposition':'attachment; filename=resultats_quiz.xlsx'}})}
const defaultSettings={timed:false,minutes:30,max_attempts:0,allow_resume:true};
async function readObject(env,key){let o=await env.BUCKET.get(key);return o?JSON.parse(await o.text()):null}
async function attemptRoutes(req,env,path){
if(path==='/api/settings'||path==='/api/admin/settings'){if(path.includes('/admin/')&&!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(req.method==='POST'){let s=await req.json();if(typeof s.timed!=='boolean'||typeof s.allow_resume!=='boolean'||!Number.isInteger(s.minutes)||s.minutes<1||s.minutes>240||!Number.isInteger(s.max_attempts)||s.max_attempts<0||s.max_attempts>100)return json({error:'Durée : 1 à 240 minutes. Tentatives : 0 à 100.'},400);await env.BUCKET.put('config/settings.json',JSON.stringify({timed:s.timed,minutes:s.minutes,max_attempts:s.max_attempts,allow_resume:s.allow_resume}));return json({ok:true})}return json(await readObject(env,'config/settings.json')||defaultSettings)}
if(path==='/api/start'&&req.method==='POST'){let d=await req.json(),nom=String(d.nom||'').trim(),prenom=String(d.prenom||'').trim();if(nom.length<2||nom.length>80||prenom.length<2||prenom.length>80)return json({error:'Nom et prénom obligatoires.'},400);const identity=(nom+'|'+prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ');let settings=await readObject(env,'config/settings.json')||defaultSettings;let previous=d.token?await readObject(env,'attempts/'+d.token+'.json'):null;if(previous&&!previous.submitted&&previous.identity===identity&&previous.allow_resume){return json(previous)}let count=0,cursor;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);if(a.identity===identity)count++}cursor=l.truncated?l.cursor:undefined}while(cursor);let old=(await rows(env)).filter(r=>(r.nom+'|'+r.prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ')===identity);let attemptSubmissionIds=new Set();cursor=undefined;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);attemptSubmissionIds.add(a.id)}cursor=l.truncated?l.cursor:undefined}while(cursor);count+=old.filter(r=>!attemptSubmissionIds.has(r.id)).length;if(settings.max_attempts&&count>=settings.max_attempts)return json({error:'Nombre maximal de tentatives atteint. Contactez votre formateur.'},403);let now=Date.now(),a={token:crypto.randomUUID(),id:now*1000+crypto.getRandomValues(new Uint16Array(1))[0]%1000,identity,nom,prenom,started_at:now,deadline:settings.timed?now+settings.minutes*60000:null,allow_resume:settings.allow_resume,answers:{},submitted:false};await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return json(a)}
if(path==='/api/progress'&&req.method==='POST'){const d=await req.json(),a=await readObject(env,'attempts/'+d.token+'.json');if(!a)return json({error:'Tentative invalide'},409);if(a.submitted)return json({ok:true,completed:true,result:withReview(await readObject(env,'submissions/'+a.id+'.json'))});if(a.deadline&&Date.now()>a.deadline)return json({ok:true,completed:true,result:await finishAttempt(env,a)});a.answers=cleanAnswers(d.answers);a.confirmed=QUESTIONS.filter(q=>(d.confirmed||[]).includes(q.id)&&(a.answers[q.id]||[]).length>0).map(q=>q.id);a.current=Number.isInteger(d.current)?Math.max(0,Math.min(QUESTIONS.length-1,d.current)):0;a.updated_at=new Date().toISOString();if(a.confirmed.length===QUESTIONS.length)return json({ok:true,completed:true,result:await finishAttempt(env,a)});await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return json({ok:true,completed:false,updated_at:a.updated_at})}

return null}

function cleanAnswers(input){if(!input||typeof input!=='object'||Array.isArray(input)||JSON.stringify(input).length>30000)throw Error('Réponses invalides');const answers={};for(const q of QUESTIONS){const a=input[q.id]||[];if(!Array.isArray(a)||a.some(v=>!q.options.some(o=>o.key===v))||new Set(a).size!==a.length||(q.type==='QCS'&&a.length>1))throw Error('Réponse invalide');answers[q.id]=a}return answers}
function makeRow(a,completed){const answers=a.answers||{},score=QUESTIONS.filter(q=>equal(answers[q.id]||[],q.correct)).length;return {id:a.id,nom:a.nom,prenom:a.prenom,groupe:'',created_at:completed?new Date().toISOString():new Date(a.started_at).toISOString(),updated_at:a.updated_at||new Date(a.started_at).toISOString(),score,total:QUESTIONS.length,score20:Math.round(score*2000/QUESTIONS.length)/100,duration_seconds:Math.max(0,Math.round((Math.min(Date.now(),a.deadline||Date.now())-a.started_at)/1000)),answers,status:completed?'completed':'in_progress',answered:QUESTIONS.filter(q=>(answers[q.id]||[]).length).length}}
function withReview(row){return {...row,review:QUESTIONS.map(q=>({...q,selected:row.answers[q.id]||[],success:equal(row.answers[q.id]||[],q.correct)}))}}
async function finishAttempt(env,a){const existing=await readObject(env,'submissions/'+a.id+'.json');if(existing)return withReview(existing);const row=makeRow(a,true);await env.BUCKET.put('submissions/'+a.id+'.json',JSON.stringify(row));a.submitted=true;await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return withReview(row)}
