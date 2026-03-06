var TRACKER_KEY='pix_immuno_state';
var SUBJECTS=[
  {id:'immunoglobulins',title:'Immunoglobulins',dur:'34:34',sections:[{items:[
    {n:'Immunoglobulin A (IgA)',dur:'6:45',lec:false,anki:false},
    {n:'Immunoglobulin G (IgG)',dur:'8:55',lec:false,anki:false},
    {n:'Immunoglobulin M (IgM)',dur:'7:05',lec:false,anki:false},
    {n:'Immunoglobulin E (IgE)',dur:'9:22',lec:false,anki:false},
    {n:'Immunoglobulin D (IgD)',dur:'2:25',lec:false,anki:false}
  ]}]},
  {id:'complement',title:'Complement',dur:'32:26',sections:[{items:[
    {n:'Common Complement Pathway',dur:'13:41',lec:false,anki:false},
    {n:'Classical Complement Pathway',dur:'7:03',lec:false,anki:false},
    {n:'Alternative Complement Pathway',dur:'5:57',lec:false,anki:false},
    {n:'Lectin Complement Pathway',dur:'5:44',lec:false,anki:false}
  ]}]},
  {id:'other_cell_types',title:'Other Cell Types',dur:'1h 41m',sections:[{items:[
    {n:'Neutrophils – Overview',dur:'11:31',lec:false,anki:false},
    {n:'Neutrophils – Granules',dur:'9:34',lec:false,anki:false},
    {n:'Neutrophils – Oxidative Burst',dur:'11:03',lec:false,anki:false},
    {n:'Basophils',dur:'8:20',lec:false,anki:false},
    {n:'Eosinophils',dur:'11:37',lec:false,anki:false},
    {n:'Mast Cells',dur:'14:20',lec:false,anki:false},
    {n:'Monocytes / Macrophages',dur:'16:26',lec:false,anki:false},
    {n:'Natural Killer (NK) Cells',dur:'13:07',lec:false,anki:false},
    {n:'Dendritic Cells',dur:'5:11',lec:false,anki:false}
  ]}]},
  {id:'b_cells_and_t_cells',title:'B Cells and T Cells',dur:'2h 06m',sections:[{items:[
    {n:'MHC I',dur:'7:55',lec:false,anki:false},
    {n:'MHC II',dur:'10:13',lec:false,anki:false},
    {n:'B Cells – Overview',dur:'6:47',lec:false,anki:false},
    {n:'B Cells – Activation',dur:'9:24',lec:false,anki:false},
    {n:'Plasma B Cells',dur:'5:47',lec:false,anki:false},
    {n:'Memory B Cells',dur:'5:27',lec:false,anki:false},
    {n:'T Cells – Overview',dur:'3:30',lec:false,anki:false},
    {n:'T Cells – Activation',dur:'9:33',lec:false,anki:false},
    {n:'T Cells – Differentiation',dur:'14:56',lec:false,anki:false},
    {n:'Cytotoxic (Killer) T Cells',dur:'6:30',lec:false,anki:false},
    {n:'Helper T Cells – Overview',dur:'6:42',lec:false,anki:false},
    {n:'Th1 Cells',dur:'10:15',lec:false,anki:false},
    {n:'Th2 Cells',dur:'11:14',lec:false,anki:false},
    {n:'Th17 Cells',dur:'6:27',lec:false,anki:false},
    {n:'Regulatory T Cells (Tregs)',dur:'11:15',lec:false,anki:false}
  ]}]},
  {id:'cytokines',title:'Cytokines',dur:'1h 04m',sections:[{items:[
    {n:'TNF-alpha',dur:'6:03',lec:false,anki:false},
    {n:'IL-1',dur:'7:07',lec:false,anki:false},
    {n:'IL-2',dur:'6:34',lec:false,anki:false},
    {n:'IL-3',dur:'2:40',lec:false,anki:false},
    {n:'IL-4',dur:'5:53',lec:false,anki:false},
    {n:'IL-5',dur:'5:08',lec:false,anki:false},
    {n:'IL-6',dur:'5:29',lec:false,anki:false},
    {n:'IL-8',dur:'2:29',lec:false,anki:false},
    {n:'IL-10',dur:'3:26',lec:false,anki:false},
    {n:'IL-12',dur:'4:30',lec:false,anki:false},
    {n:'TGF-beta',dur:'3:31',lec:false,anki:false},
    {n:'IFN-alpha and IFN-beta',dur:'2:54',lec:false,anki:false},
    {n:'IFN-gamma',dur:'8:09',lec:false,anki:false}
  ]}]},
  {id:'immunodeficiencies',title:'Immunodeficiencies',dur:'1h 24m',sections:[{items:[
    {n:'Selective IgA Deficiency',dur:'5:27',lec:false,anki:false},
    {n:'Chediak-Higashi Syndrome',dur:'10:09',lec:false,anki:false},
    {n:'DiGeorge Syndrome',dur:'10:06',lec:false,anki:false},
    {n:'Bruton (X-linked) Agammaglobulinemia',dur:'9:05',lec:false,anki:false},
    {n:'Hyper-IgM Syndrome',dur:'8:35',lec:false,anki:false},
    {n:'IPEX',dur:'7:09',lec:false,anki:false},
    {n:'Leukocyte Adhesion Deficiency (LAD)',dur:'9:40',lec:false,anki:false},
    {n:'Chronic Granulomatous Disease (CGD)',dur:'7:50',lec:false,anki:false},
    {n:'IL-12 Receptor Deficiency',dur:'8:58',lec:false,anki:false},
    {n:'Wiskott-Aldrich Syndrome',dur:'7:39',lec:false,anki:false}
  ]}]},
  {id:'leukemias_and_lymphomas',title:'Leukemias and Lymphomas',dur:'1h 54m',sections:[{items:[
    {n:'Acute Myelogenous Leukemia (AML)',dur:'7:15',lec:false,anki:false},
    {n:'Acute Promyelocytic Leukemia (APL)',dur:'10:54',lec:false,anki:false},
    {n:'Acute Lymphocytic Leukemia (ALL)',dur:'14:39',lec:false,anki:false},
    {n:'Chronic Myelogenous Leukemia (CML)',dur:'10:43',lec:false,anki:false},
    {n:'Chronic Lymphocytic Leukemia (CLL)',dur:'6:52',lec:false,anki:false},
    {n:'Hairy Cell Leukemia (HCL)',dur:'8:24',lec:false,anki:false},
    {n:'Hodgkin Lymphoma',dur:'6:52',lec:false,anki:false},
    {n:'Burkitt Lymphoma',dur:'6:34',lec:false,anki:false},
    {n:'Diffuse Large B Cell Lymphoma (DLBCL)',dur:'4:50',lec:false,anki:false},
    {n:'Follicular Lymphoma',dur:'8:11',lec:false,anki:false},
    {n:'Mantle Cell Lymphoma',dur:'8:16',lec:false,anki:false},
    {n:'Marginal Zone Lymphoma',dur:'5:27',lec:false,anki:false},
    {n:'Primary CNS Lymphoma (PCNSL)',dur:'4:26',lec:false,anki:false},
    {n:'Adult T-Cell Leukemia/Lymphoma (ATLL)',dur:'4:58',lec:false,anki:false},
    {n:'Mycosis Fungoides / Sezary Syndrome',dur:'5:54',lec:false,anki:false}
  ]}]},
  {id:'hypersensitivity_reactions',title:'Hypersensitivity Reactions',dur:'28:37',sections:[{items:[
    {n:'Type 1 Hypersensitivity Reactions',dur:'9:41',lec:false,anki:false},
    {n:'Type 2 Hypersensitivity Reactions',dur:'7:32',lec:false,anki:false},
    {n:'Type 3 Hypersensitivity Reactions',dur:'6:06',lec:false,anki:false},
    {n:'Type 4 Hypersensitivity Reactions',dur:'5:15',lec:false,anki:false}
  ]}]},
  {id:'immunosuppressants',title:'Immunosuppressants',dur:'30:14',sections:[{items:[
    {n:'Cyclosporine',dur:'8:50',lec:false,anki:false},
    {n:'Tacrolimus',dur:'6:39',lec:false,anki:false},
    {n:'Sirolimus (Rapamycin)',dur:'6:43',lec:false,anki:false},
    {n:'Basiliximab',dur:'3:47',lec:false,anki:false},
    {n:'Mycophenolate',dur:'4:13',lec:false,anki:false}
  ]}]},
  {id:'transfusion_reactions',title:'Transfusion Reactions',dur:'27:00',sections:[{items:[
    {n:'Anaphylactic Transfusion Reactions',dur:'4:35',lec:false,anki:false},
    {n:'Acute Hemolytic Transfusion Reaction',dur:'10:56',lec:false,anki:false},
    {n:'Febrile Nonhemolytic Transfusion Reaction',dur:'5:54',lec:false,anki:false},
    {n:'TRALI',dur:'5:33',lec:false,anki:false}
  ]}]},
  {id:'transplant_rejection',title:'Transplant Rejection',dur:'26:48',sections:[{items:[
    {n:'Hyperacute Transplant Rejection',dur:'5:00',lec:false,anki:false},
    {n:'Acute Transplant Rejection',dur:'5:29',lec:false,anki:false},
    {n:'Chronic Transplant Rejection',dur:'7:15',lec:false,anki:false},
    {n:'Graft vs Host Disease (GVHD)',dur:'9:03',lec:false,anki:false}
  ]}]}
];
