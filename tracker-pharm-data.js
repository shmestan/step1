var TRACKER_KEY='sk_pharm_state';
var SUBJECTS=[
  {id:'antimicro',title:'Antimicrobials',
   sections:[
    {title:'Cell wall and membrane active antibiotics',items:[
      {n:'Penicillin',dur:'13m',lec:false,anki:false},
      {n:'Nafcillin, Ocacillin, Methicillin, Dicloxacillin',dur:'6m',lec:false,anki:false},
      {n:'Ampicillin, Amoxacillin, Piperacillin, Ticarcillin',dur:'13m',lec:false,anki:false},
      {n:'Cephalosporins',dur:'15m',lec:false,anki:false},
      {n:'Monobactams and Carbapenems',dur:'9m',lec:false,anki:false},
      {n:'Vancomycin',dur:'11m',lec:false,anki:false},
      {n:'Daptomycin',dur:'6m',lec:false,anki:false}
    ]},
    {title:'Inhibitors of bacerial protein synthesis',items:[
      {n:'Tetracyclines',dur:'13m',lec:false,anki:false},
      {n:'Macrolides',dur:'7m',lec:false,anki:false},
      {n:'Clindamycin',dur:'11m',lec:false,anki:false},
      {n:'Chloramphenicol',dur:'5m',lec:false,anki:false},
      {n:'Linezolid',dur:'7m',lec:false,anki:false},
      {n:'Aminiglycosides',dur:'13m',lec:false,anki:false}
    ]},
    {title:'Antimycobacterials',items:[
      {n:'Tuberculosis Drugs',dur:'17m',lec:false,anki:false},
      {n:'Leprosy Drugs',dur:'7m',lec:false,anki:false}
    ]},
    {title:'Other antibiotics',items:[
      {n:'Trimethoprim/Sulfamethoxazole',dur:'17m',lec:false,anki:false},
      {n:'Fluoroquinolones',dur:'12m',lec:false,anki:false},
      {n:'Metronidazole',dur:'9m',lec:false,anki:false}
    ]},
    {title:'Antifungals',items:[
      {n:'Amphotericin, Flucytosine',dur:'12m',lec:false,anki:false},
      {n:'Azoles',dur:'12m',lec:false,anki:false},
      {n:'Grideofulvin, Terbafine, Echinocandins',dur:'9m',lec:false,anki:false}
    ]},
    {title:'Antivirals: HIV',items:[
      {n:'NRTIs',dur:'11m',lec:false,anki:false},
      {n:'NNRTIs',dur:'5m',lec:false,anki:false},
      {n:'Protease Inhibitors',dur:'7m',lec:false,anki:false},
      {n:'Maraviroc, Fusion Inhibitors, Integrase Inhibitors',dur:'10m',lec:false,anki:false}
    ]},
    {title:'Antivirals: Hepatitis',items:[
      {n:'IFN-a, IFN-B, and IFN-y',dur:'10m',lec:false,anki:false},
      {n:'Ribavirin, Sofosbuvir, Simeprevir',dur:'11m',lec:false,anki:false}
    ]},
    {title:'Antivirals: other',items:[
      {n:'Acyclovir, Valacyclovir, Famciclovir, Cidofovir, Foscarnet',dur:'14m',lec:false,anki:false},
      {n:'Ganciclovir, Valganciclovir, Foscarnet, Cidofovir',dur:'12m',lec:false,anki:false}
    ]}
  ]},
  {id:'autonomic',title:'Autonomic',
   sections:[
    {title:'Parasympathetics',items:[
      {n:'Cholinomimetics',dur:'16m',lec:false,anki:false},
      {n:'Cholinesterase Inhibitors',dur:'21m',lec:false,anki:false},
      {n:'Muscarinic Antagonists',dur:'20m',lec:false,anki:false}
    ]},
    {title:'Sympathetic',items:[
      {n:'Sympathomimetics',dur:'30m',lec:false,anki:false},
      {n:'Indirect Sympathomimetics',dur:'17m',lec:false,anki:false},
      {n:'Alpha Drugs',dur:'22m',lec:false,anki:false},
      {n:'Beta Blockers',dur:'24m',lec:false,anki:false}
    ]}
  ]},
  {id:'cardio_renal',title:'Cardiovascular and Renal',
   sections:[
    {title:'Heart Failure',items:[
      {n:'Digoxin, milrinone, nesiritide',dur:'20m',lec:false,anki:false},
      {n:'ACE Inhibitors, ARBs, Aliskiren',dur:'26m',lec:false,anki:false}
    ]},
    {title:'Diuretics',items:[
      {n:'Acetazolamide, mannitol',dur:'24m',lec:false,anki:false},
      {n:'Loop Diuretics',dur:'21m',lec:false,anki:false},
      {n:'Thiazides',dur:'20m',lec:false,anki:false},
      {n:'K+ Sparing Diuretics',dur:'25m',lec:false,anki:false}
    ]},
    {title:'Anti-Hypertensives',items:[
      {n:'Calcium Channel Blockers',dur:'21m',lec:false,anki:false},
      {n:'Primary HTN and HTN-Emergency',dur:'25m',lec:false,anki:false}
    ]},
    {title:'Antiarrhythmics',items:[
      {n:'Class I: A-C',dur:'24m',lec:false,anki:false},
      {n:'Class II',dur:'10m',lec:false,anki:false},
      {n:'Class III',dur:'12m',lec:false,anki:false},
      {n:'Class IV',dur:'9m',lec:false,anki:false},
      {n:'Class V',dur:'13m',lec:false,anki:false}
    ]}
  ]},
  {id:'blood_inflam',title:'Blood and Inflammation',
   sections:[
    {title:'Anticoagulants and Thrombolytics',items:[
      {n:'Heparin, LWMH, Fondaparinux, Direct Thrombin Inhibitors, Direct Xa Inhibitors',dur:'30m',lec:false,anki:false},
      {n:'Warfarin',dur:'21m',lec:false,anki:false},
      {n:'Anti-Platelet Agents',dur:'29m',lec:false,anki:false},
      {n:'Thrombolytics',dur:'15m',lec:false,anki:false}
    ]},
    {title:'Dyslipidemia',items:[
      {n:'Statins (HMG-CoA Reductase Inhibitors)',dur:'26m',lec:false,anki:false},
      {n:'Cholestyramine, Ezetimibe',dur:'17m',lec:false,anki:false},
      {n:'Fibrates, Niacin',dur:'16m',lec:false,anki:false}
    ]},
    {title:'Anti-inflammatory',items:[
      {n:'NSAIDs',dur:'34m',lec:false,anki:false},
      {n:'Gout Drugs',dur:'24m',lec:false,anki:false},
      {n:'Immunosuppressants',dur:'24m',lec:false,anki:false},
      {n:'TNF-a inhibitors',dur:'24m',lec:false,anki:false}
    ]}
  ]},
  {id:'smooth_muscle',title:'Smooth Muscle',
   sections:[
    {title:'Vasoactive',items:[
      {n:'Nitrates',dur:'19m',lec:false,anki:false},
      {n:'Triptans & Migraine',dur:'9m',lec:false,anki:false},
      {n:'Prostaglandins, Prostacyclin, Bosentan, PDE5 Inhibitors',dur:'16m',lec:false,anki:false}
    ]}
  ]},
  {id:'gi_endo',title:'GI and Endocrine',
   sections:[
    {title:'Gastrointestinal',items:[
      {n:'Anti-Emetic Agents',dur:'19m',lec:false,anki:false},
      {n:'H2 Receptor Blockers, PPIs',dur:'23m',lec:false,anki:false},
      {n:'Laxative Agents',dur:'17m',lec:false,anki:false}
    ]},
    {title:'Diabetes',items:[
      {n:'Insulin, Sulfonylureas, Meglitinides, GLP-1 agonists, DPP-4 Inhibitors',dur:'30m',lec:false,anki:false},
      {n:'Metformin, Thiazolidinediones, Pramlintide, SGLT2 inhibitors',dur:'24m',lec:false,anki:false}
    ]},
    {title:'Thyroid, parathyroid, adrenal',items:[
      {n:'Propylthiouracil, Methimazole, Levothyroxine',dur:'22m',lec:false,anki:false},
      {n:'Bisphosphonates, Raloxifene, Denosumab, Calcitonin',dur:'18m',lec:false,anki:false},
      {n:'Teriparatide, Vitamin D, Cinacalcet, Sevelamer',dur:'19m',lec:false,anki:false},
      {n:'Glucocorticoids',dur:'21m',lec:false,anki:false}
    ]},
    {title:'Hypothalamic, pituitary',items:[
      {n:'ADH, DDAVP, ADH Receptor Antagonists',dur:'19m',lec:false,anki:false},
      {n:'Growth Hormone, Mecasermin, Octreotide, Pegvisomant',dur:'18m',lec:false,anki:false}
    ]},
    {title:'Sex hormones',items:[
      {n:'SERMS, aromatase inhibitors',dur:'10m',lec:false,anki:false},
      {n:'LHRH agonists, GnRH analogs',dur:'8m',lec:false,anki:false},
      {n:'Non-steroidal antiandrogens (NSAAs)',dur:'6m',lec:false,anki:false}
    ]}
  ]},
  {id:'neuro_psych',title:'Neuro and Psych',
   sections:[
    {title:'Sedative, hypnotics',items:[
      {n:'Benzodiazepines, Flumezenil',dur:'20m',lec:false,anki:false},
      {n:'Nonbenzodiazepine Hypnotics, Melatonin, Ramelteon',dur:'13m',lec:false,anki:false},
      {n:'Barbituates',dur:'14m',lec:false,anki:false}
    ]},
    {title:'Anesthetics, analgesics',items:[
      {n:'Propofol, Etomidate, Ketamine',dur:'10m',lec:false,anki:false},
      {n:'Inhaled Anesthetics, Dantrolene',dur:'15m',lec:false,anki:false},
      {n:'Opiates, Naloxona, Naltrexone',dur:'21m',lec:false,anki:false}
    ]},
    {title:'Antidepressants, anxiolytics',items:[
      {n:'SSRIs, SNRIs, Cyroheptadine',dur:'21m',lec:false,anki:false},
      {n:'Tricyclic Antidepressants',dur:'16m',lec:false,anki:false},
      {n:'MAO Inhibitors',dur:'13m',lec:false,anki:false},
      {n:'Bupropion, Mirtazapine, Trazodone',dur:'15m',lec:false,anki:false}
    ]},
    {title:'Mood stabilizers, antiepileptic drugs',items:[
      {n:'Lithium',dur:'12m',lec:false,anki:false},
      {n:'Valproate, Topiramate, Lamotrigine, Levetiracetam',dur:'14m',lec:false,anki:false},
      {n:'Carbamazepine, Phenytoin, Gabapentin, Tiagabine, Vigabatrin',dur:'19m',lec:false,anki:false},
      {n:'Ethosuximide',dur:'6m',lec:false,anki:false}
    ]},
    {title:'Antipsychotics, Parkinson',items:[
      {n:'First Generation Antipsychotics',dur:'20m',lec:false,anki:false},
      {n:'Second Generation Antipsychotics',dur:'17m',lec:false,anki:false},
      {n:'Levodopa/Carbidopa, Entacapone, Tolcapone, Selegiline, Ropinirole, Pramipexole, Amantadine',dur:'20m',lec:false,anki:false}
    ]}
  ]},
  {id:'antineoplas',title:'Antineoplastics',
   sections:[
    {title:'Antimetabolites',items:[
      {n:'Methotrexate, Leucovorin, 5-Fluorouracil, Hydroxyurea',dur:'29m',lec:false,anki:false},
      {n:'Azathioprine, 6-Mercaptopurine, Mycophenolate mofetil',dur:'16m',lec:false,anki:false},
      {n:'Cladribine, Cytarabine, Gemcitabine',dur:'7m',lec:false,anki:false}
    ]},
    {title:'DNA & cellular division',items:[
      {n:'Cyclophosphamide, Ifosfamide, Bisulfan, Nitrosureas, Carmustine, Lomustine, Streptozocin',dur:'12m',lec:false,anki:false},
      {n:'Cisplatin, Carboplatin, Amifostine',dur:'6m',lec:false,anki:false},
      {n:'Bleomycin, Doxorubicin, Daunorubicin',dur:'8m',lec:false,anki:false},
      {n:'Etoposide, Teniposide, Topotecan, Irinotecan',dur:'6m',lec:false,anki:false},
      {n:'Vincristine, Vinblastine, Paclitaxe',dur:'7m',lec:false,anki:false}
    ]},
    {title:'Kinase inhibitors, monoclonal antibodies',items:[
      {n:'Imatinib, Erlotinib, Sorafenib, Sunitinib, Vemurafenib',dur:'15m',lec:false,anki:false},
      {n:'Rituximab, Cetuximab, Bevacizumab, Alemtuzumab, Trastuzumab',dur:'23m',lec:false,anki:false}
    ]}
  ]}
];
