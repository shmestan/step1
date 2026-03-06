var TRACKER_KEY='sk_micro_state';
var SUBJECTS=[
  {id:'bacteria',title:'Bacteria',dur:'44:43',
   sections:[
    {title:'Gram Positive Cocci',dur:'51:13',items:[
      {n:'Staphlyococcus Aureus',lec:false,anki:false},
      {n:'Staphlyococcus Epidermidis & Saprophyticus',lec:false,anki:false},
      {n:'Streptococcus Pyogenes',lec:false,anki:false},
      {n:'Streptococcus Agalactiae',lec:false,anki:false},
      {n:'Streptococcus Pneumoniae & Viridans',lec:false,anki:false},
      {n:'Enterococcus Fecium & Fecalis',lec:false,anki:false},
      {n:'Streptococcus Gallolyticus',lec:false,anki:false}
    ]},
    {title:'Gram Positive Bacilli',dur:'48:48',items:[
      {n:'Bacillus anthracis & cereus',lec:false,anki:false},
      {n:'Clostridium tetani',lec:false,anki:false},
      {n:'Clostridium botulinum',lec:false,anki:false},
      {n:'Clostridium perfringens',lec:false,anki:false},
      {n:'Clostridium difficile',lec:false,anki:false},
      {n:'Corynebacterium diptheriae',lec:false,anki:false},
      {n:'Listeria monocytogenes',lec:false,anki:false}
    ]},
    {title:'Gram Positive Branching Filamentous Rods',dur:'9:51',items:[
      {n:'Actinomyces israelii',lec:false,anki:false},
      {n:'Nocardia asteroides',lec:false,anki:false}
    ]},
    {title:'Gram Negative Cocci',dur:'21:39',items:[
      {n:'Neisseria: Overview',lec:false,anki:false},
      {n:'Neisseria meningitidis',lec:false,anki:false},
      {n:'Neisseria gonorrhea',lec:false,anki:false},
      {n:'Moraxella catarrhalis',lec:false,anki:false}
    ]},
    {title:'Gram Negative Bacilli - Enteric tract',dur:'1h 05m',items:[
      {n:'Klebsiella, Enterobacter, Serratia',lec:false,anki:false},
      {n:'Salmonella: Introduction & NTS',lec:false,anki:false},
      {n:'Salmonella: Typhoidal Salmonella',lec:false,anki:false},
      {n:'Shigella spp.',lec:false,anki:false},
      {n:'Escherichia coli',lec:false,anki:false},
      {n:'Yersinia Enterocolitica & Pestis',lec:false,anki:false},
      {n:'Campylobacter jejuni',lec:false,anki:false},
      {n:'Vibrio spp.',lec:false,anki:false},
      {n:'Helicobacter pylori',lec:false,anki:false},
      {n:'Proteus mirabilis',lec:false,anki:false}
    ]},
    {title:'Gram Negative Bacilli - Respiratory tract',dur:'23:51',items:[
      {n:'Bortadella pertussis',lec:false,anki:false},
      {n:'Haemophilus influenzae',lec:false,anki:false},
      {n:'Legionella pneumophila',lec:false,anki:false},
      {n:'Pseudomonas Aeruginosa',lec:false,anki:false},
      {n:'Burkholderia Pseudomallei & Capacia Complex',lec:false,anki:false}
    ]},
    {title:'Gram Negative Bacilli - Zoonotics',dur:'16:41',items:[
      {n:'Bartonella henselae',lec:false,anki:false},
      {n:'Brucella spp.',lec:false,anki:false},
      {n:'Francisella tularensis',lec:false,anki:false},
      {n:'Pasteurella multocida',lec:false,anki:false},
      {n:'Anaplasma phagocytophilum & Ehrlichia chaffeensis',lec:false,anki:false}
    ]},
    {title:'Mycobacteria',dur:'25:52',items:[
      {n:'Mycobacterium tuberculosis',lec:false,anki:false},
      {n:'Mycobacterium leprae',lec:false,anki:false},
      {n:'Mycobacterium Avium Intracellulare, Scrofulaceum, & Marinum',lec:false,anki:false}
    ]},
    {title:'Spirochetes',dur:'25:26',items:[
      {n:'Borrelia burgdorferi',lec:false,anki:false},
      {n:'Borrelia recurrentis',lec:false,anki:false},
      {n:'Leptospira interrogans',lec:false,anki:false},
      {n:'Treponema pallidum',lec:false,anki:false}
    ]},
    {title:'Gram-Indeterminate Bacteria',dur:'43:19',items:[
      {n:'Chlamydia trachomatis, pneumonia, & psittaci',lec:false,anki:false},
      {n:'Coxiella burnetii',lec:false,anki:false},
      {n:'Gardnerella vaginalis',lec:false,anki:false},
      {n:'Mycoplasma pneumoniae',lec:false,anki:false},
      {n:'Rickettsia species overview',lec:false,anki:false},
      {n:'Rickettsia prowazekii',lec:false,anki:false},
      {n:'Rickettsia rickettsii',lec:false,anki:false}
    ]}
  ]},
  {id:'viruses',title:'Viruses',dur:'14h 36m',
   sections:[
    {title:'RNA Positive',dur:'1h 30m',items:[
      {n:'Picornaviridae overview',lec:false,anki:false},
      {n:'Poliovirus (Picornaviridae)',lec:false,anki:false},
      {n:'Coxsackievirus A & B (Picornaviridae)',lec:false,anki:false},
      {n:'Rhinovirus (Picornaviridae)',lec:false,anki:false},
      {n:'Hepatitis A virus (Picornaviridae)',lec:false,anki:false},
      {n:'Norovirus/Norwalk virus (Caliciviridae)',lec:false,anki:false},
      {n:'Flaviviridae overview',lec:false,anki:false},
      {n:'Hepatitis C Virus (Flaviviridae)',lec:false,anki:false},
      {n:'Eastern/Western/Venezuelan equine encephalitis virus, Chikungunya virus (Togaviridae)',lec:false,anki:false},
      {n:'Coronavirus (Coronaviridae)',lec:false,anki:false},
      {n:'HIV Overview (Retroviridae): HIV Part 1',lec:false,anki:false},
      {n:'HIV Life Cycle (Retroviridae): HIV Part 2',lec:false,anki:false},
      {n:'Rubella virus (Matonaviridae)',lec:false,anki:false},
      {n:'Equine Encephalitis Viruses & Chikungunya Virus (Togaviridae)',lec:false,anki:false}
    ]},
    {title:'RNA Negative',dur:'1h 06m',items:[
      {n:'Influenzavirus (Orthomyxoviridae)',lec:false,anki:false},
      {n:'Measles virus, mumps virus, parainfluenza virus (Paramyxoviridae)',lec:false,anki:false},
      {n:'Rabies virus (Rhabdoviridae)',lec:false,anki:false},
      {n:'Ebolavirus, Marburgvirus (Filoviridae)',lec:false,anki:false},
      {n:'Hantavirus, California encephalitis virus, Rift Valley fever virus (Bunyaviridae)',lec:false,anki:false},
      {n:'Lymphocytic choriomeningitis virus (Arenaviridae)',lec:false,anki:false},
      {n:'Rotavirus, Colorado tick fever virus (Reoviridae)',lec:false,anki:false},
      {n:'Respiratory Syncytial Virus and Human Metapneumovirus (Pnuemoviridae)',lec:false,anki:false}
    ]},
    {title:'DNA Viruses',dur:'1h 59m',items:[
      {n:'HSV-1 and HSV-2',lec:false,anki:false},
      {n:'Epstein-Barr Virus',lec:false,anki:false},
      {n:'Cytomegalovirus',lec:false,anki:false},
      {n:'Varicella-Zoster Virus',lec:false,anki:false},
      {n:'HHV-6 & Roseola',lec:false,anki:false},
      {n:'HHV-8 & Kaposi\'s Sarcoma',lec:false,anki:false},
      {n:'JC Polyomavirus & BK Polymoavirus',lec:false,anki:false},
      {n:'Human Papillomavirus',lec:false,anki:false},
      {n:'Parvovirus B19',lec:false,anki:false},
      {n:'Adenovirus',lec:false,anki:false},
      {n:'Poxviridae (Smallpox, Cowpox, Molluscum contagiosum)',lec:false,anki:false},
      {n:'Hepatitis B Viral Basics & Infections Diseases',lec:false,anki:false},
      {n:'Hepatitis B Viral Life Cycle',lec:false,anki:false}
    ]}
  ]},
  {id:'parasites',title:'Parasites',dur:'4h 59m',
   sections:[
    {title:'Protozoa - Intestinal tract',dur:'17:45',items:[
      {n:'Giardia lamblia',lec:false,anki:false},
      {n:'Entamoeba histolytica',lec:false,anki:false},
      {n:'Cryptosporidium spp.',lec:false,anki:false}
    ]},
    {title:'Protozoa - CNS',dur:'21:06',items:[
      {n:'Toxoplasmoa gondii',lec:false,anki:false},
      {n:'Trypanosoma brucei',lec:false,anki:false},
      {n:'Naegleria fowleri',lec:false,anki:false}
    ]},
    {title:'Protozoa - Blood',dur:'32:25',items:[
      {n:'Trypanosoma cruzi (Chagas)',lec:false,anki:false},
      {n:'Babesia spp.',lec:false,anki:false},
      {n:'Plasmodium Part 1:',lec:false,anki:false},
      {n:'Plasmodium Part 2:',lec:false,anki:false},
      {n:'Leishmania braziliensis & donovani',lec:false,anki:false}
    ]},
    {title:'Protozoa - Other',dur:'5:37',items:[
      {n:'Trichomonas vaginalis',lec:false,anki:false}
    ]},
    {title:'Helminths - Nematodes',dur:'24:38',items:[
      {n:'Intestinal nematodes',lec:false,anki:false},
      {n:'Tissue nematodes',lec:false,anki:false}
    ]},
    {title:'Helminths - Trematodes & Cestodes',dur:'21:16',items:[
      {n:'Cestodes',lec:false,anki:false},
      {n:'Trematodes',lec:false,anki:false}
    ]}
  ]},
  {id:'fungi',title:'Fungi',dur:'1h 28m',
   sections:[
    {title:'Systemic Mysoses',dur:'28:08',items:[
      {n:'Histoplasmosis capsulatum',lec:false,anki:false},
      {n:'Blastocycosis dermatitidis',lec:false,anki:false},
      {n:'Coccidioides immitis',lec:false,anki:false},
      {n:'Paracoccidioides brasiliensis',lec:false,anki:false}
    ]},
    {title:'Cutaneous Mycoses',dur:'15:35',items:[
      {n:'Malassezia Furfur',lec:false,anki:false},
      {n:'Dermatophytes (Epidermophyton, Trichophyton, Microsporum)',lec:false,anki:false},
      {n:'Sporothrix schenckii',lec:false,anki:false}
    ]},
    {title:'Opportunistic Fungal Infections',dur:'44:46',items:[
      {n:'Candida albicans',lec:false,anki:false},
      {n:'Aspergillus fumigatis',lec:false,anki:false},
      {n:'Cryptococcus neoformans',lec:false,anki:false},
      {n:'Mucor spp., Rhizopus spp.',lec:false,anki:false},
      {n:'Pneumocystis jiroveci',lec:false,anki:false}
    ]}
  ]}
];
