/**
 * @author Jongil Yoon
 * @email jiysait@gmail.com
 * @create date 2021-07-25 14:52:52
 * @modify date 2021-07-25 14:52:52
 * @desc [description]
 */

/**
 * name: The original name of a data field
 * value: A value must reflect hierarchical structure
 * alias: A name will be displayed in the frontend app
 * display: A value indicates a type of display [visible, hidden, none].
 * primary: A value indicates whether a column is primary or not.
 */
export const CUSTOM_HEADER_ASSEMBLY = {
  id: {
    name: "id",
    value: "id",
    alias: "Isolate ID",
    display: "visible",
    primary: true,
  },
  owner: {
    name: "owner",
    value: "owner",
    alias: "Owner",
    display: "none",
    primary: false,
  },
 
  biosample__project__id: {
    name: "pid",
    value: "biosample__project__id",
    alias: "Project ID",
    display: "visible",
    primary: false,
  },
  biosample: {
    name: "biosample",
    value: "biosample",
    alias: "BioSample",
    display: "visible",
    primary: false,
  },
  sampleType: {
    name: "sampleType",
    value: "biosample__sampleType",
    alias: "Sample Type",
    display: "visible",
    primary: false,
  },
  count: {
    name: "count",
    value: "count",
    alias: "# Contigs",
    display: "visible",
    primary: false,
  },
  bp: {
    name: "bp",
    value: "bp",
    alias: "Total Length",
    display: "visible",
    primary: false,
  },
  Ns: {
    name: "Ns",
    value: "Ns",
    alias: "Ns",
    display: "visible",
    primary: false,
  },
  gaps: {
    name: "gaps",
    value: "gaps",
    alias: "Gaps",
    display: "visible",
    primary: false,
  },
  min: {
    name: "min",
    value: "min",
    alias: "Min Contig Length",
    display: "visible",
    primary: false,
  },
  max: {
    name: "Max",
    value: "max",
    alias: "Max Contig Length",
    display: "visible",
    primary: false,
  },
  avg: {
    name: "avg",
    value: "avg",
    alias: "Avg Contig Length",
    display: "visible",
    primary: false,
  },
  N50: {
    name: "N50",
    value: "N50",
    alias: "N50",
    display: "visible",
    primary: false,
  },
  DateCreated: {
    name: "DateCreated",
    value: "DateCreated",
    alias: "Date Created",
    display: "visible",
    primary: false,
  },
  LastUpdate: {
    name: "LastUpdate",
    value: "LastUpdate",
    alias: "Last Update",
    display: "visible",
    primary: false,
  },
  Description: {
    name: "Description",
    value: "Description",
    alias: "Description",
    display: "hidden",
    primary: false,
  },
};

export const CUSTOM_HEADER_STATS = {
  id: {
    name: "id",
    value: "id",
    alias: "Isolate ID",
    display: "visible",
    primary: true,
  },
  owner: {
    name: "owner",
    value: "owner",
    alias: "Owner",
    display: "none",
    primary: false,
  },
  assembly: {
    name: "assembly",
    value: "assembly",
    alias: "assembly",
    display: "none",
    primary: false,
  },
  assembly__biosample__project__id: {
    name: "pid",
    value: "assembly__biosample__project__id",
    alias: "Project ID",
    display: "visible",
    primary: false,
  },
  assembly__biosample__project__title: {
    name: "title",
    value: "assembly__biosample__project__title",
    alias: "Project Title",
    display: "none",
    primary: false,
  },

  sampleType: {
    name: "sampleType",
    value: "assembly__biosample__sampleType",
    alias: "Sample Type",
    display: "visible",
    primary: false,
  },
  CDS: {
    name: "CDS",
    value: "CDS",
    alias: "CDS",
    display: "visible",
    primary: false,
  },
  CRISPR: {
    name: "CRISPR",
    value: "CRISPR",
    alias: "CRISPR",
    display: "visible",
    primary: false,
  },
  ncRNA: {
    name: "ncRNA",
    value: "ncRNA",
    alias: "ncRNA",
    display: "visible",
    primary: false,
  },
  oriC: {
    name: "oriC",
    value: "oriC",
    alias: "oriC",
    display: "visible",
    primary: false,
  },
  rRNA: {
    name: "rRNA",
    value: "rRNA",
    alias: "rRNA",
    display: "visible",
    primary: false,
  },
  region: {
    name: "region",
    value: "region",
    alias: "region",
    display: "visible",
    primary: false,
  },
  regulatory_region: {
    name: "regulatory_region",
    value: "regulatory_region",
    alias: "regulatory_region",
    display: "visible",
    primary: false,
  },
  tRNA: {
    name: "tRNA",
    value: "tRNA",
    alias: "tRNA",
    display: "visible",
    primary: false,
  },
  tmRNA: {
    name: "tmRNA",
    value: "tmRNA",
    alias: "tmRNA",
    display: "visible",
    primary: false,
  },
  DateCreated: {
    name: "DateCreated",
    value: "DateCreated",
    alias: "Date Created",
    display: "visible",
    primary: false,
  },
  LastUpdate: {
    name: "LastUpdate",
    value: "LastUpdate",
    alias: "Last Update",
    display: "visible",
    primary: false,
  },
  Description: {
    name: "Description",
    value: "Description",
    alias: "Description",
    display: "hidden",
    primary: false,
  },
};


export const CUSTOM_HEADER_MLST = {
  id: {
    name: "id",
    value: "id",
    alias: "Isolate ID",
    display: "visible",
    primary: true,
  },
  owner: {
    name: "owner",
    value: "owner",
    alias: "Owner",
    display: "none",
    primary: false,
  },
  assembly: {
    name: "assembly",
    value: "assembly",
    alias: "Assembly",
    display: "none",
    primary: false,
  },
  assembly__biosample__project__id: {
    name: "id",
    value: "assembly__biosample__project__id",
    alias: "Project ID",
    display: "visible",
    primary: false,
  },
  assembly__biosample__project__title: {
    name: "title",
    value: "assembly__biosample__project__title",
    alias: "Project Title",
    display: "none",
    primary: false,
  },
 
  sampleType: {
    name: "sampleType",
    value: "assembly__biosample__sampleType",
    alias: "Sample Type",
    display: "visible",
    primary: false,
  },
  scheme: {
    name: "scheme",
    value: "scheme",
    alias: "Scheme",
    display: "visible",
    primary: false,
  },
  st: {
    name: "st",
    value: "st",
    alias: "ST",
    display: "visible",
    primary: false,
  },
  DateCreated: {
    name: "DateCreated",
    value: "DateCreated",
    alias: "Date Created",
    display: "visible",
    primary: false,
  },
  LastUpdate: {
    name: "LastUpdate",
    value: "LastUpdate",
    alias: "Last Update",
    display: "visible",
    primary: false,
  },
  Description: {
    name: "Description",
    value: "Description",
    alias: "Description",
    display: "hidden",
    primary: false,
  },
  profile: {
    name: "profile",
    value: "profile",
    alias: "Alleles",
    display: "none",
    primary: false,
  },
};

export const CUSTOM_HEADER_RESISTOME = {
  id: {
    name: "id",
    value: "id",
    alias: "Isolate ID",
    display: "visible",
    primary: true,
  },
  owner: {
    name: "owner",
    value: "owner",
    alias: "Owner",
    display: "none",
    primary: false,
  },
  assembly: {
    name: "assembly",
    value: "assembly",
    alias: "Assembly",
    display: "none",
    primary: false,
  },
  assembly__biosample__project__id: {
    name: "id",
    value: "assembly__biosample__project__id",
    alias: "project ID",
    display: "visible",
    primary: false,
  },
  
  sampleType: {
    name: "sampleType",
    value: "assembly__biosample__sampleType",
    alias: "Sample Type",
    display: "visible",
    primary: false,
  },
  num_found: {
    name: "num_found",
    value: "num_found",
    alias: "# Found",
    display: "visible",
    primary: false,
  },
  DateCreated: {
    name: "DateCreated",
    value: "DateCreated",
    alias: "Date Created",
    display: "visible",
    primary: false,
  },
  LastUpdate: {
    name: "LastUpdate",
    value: "LastUpdate",
    alias: "Last Update",
    display: "visible",
    primary: false,
  },
  Description: {
    name: "Description",
    value: "Description",
    alias: "Description",
    display: "hidden",
    primary: false,
  },
  profile: {
    name: "profile",
    value: "profile",
    alias: "Genes(Coverage%)",
    display: "none",
    primary: false,
  },
};

export const CUSTOM_HEADER_VIRULOME = {
  id: {
    name: "id",
    value: "id",
    alias: "Isolate ID",
    display: "visible",
    primary: true,
  },
  owner: {
    name: "owner",
    value: "owner",
    alias: "Owner",
    display: "none",
    primary: false,
  },
  assembly: {
    name: "assembly",
    value: "assembly",
    alias: "Assembly",
    display: "none",
    primary: false,
  },
  assembly__biosample__project__id: {
    name: "id",
    value: "assembly__biosample__project__id",
    alias: "Project ID",
    display: "visible",
    primary: false,
  },
 
  sampleType: {
    name: "sampleType",
    value: "assembly__biosample__sampleType",
    alias: "Sample Type",
    display: "visible",
    primary: false,
  },
  num_found: {
    name: "num_found",
    value: "num_found",
    alias: "# Found",
    display: "visible",
    primary: false,
  },
  DateCreated: {
    name: "DateCreated",
    value: "DateCreated",
    alias: "Date Created",
    display: "hidden",
    primary: false,
  },
  LastUpdate: {
    name: "LastUpdate",
    value: "LastUpdate",
    alias: "Last Update",
    display: "hidden",
    primary: false,
  },
  Description: {
    name: "Description",
    value: "Description",
    alias: "Description",
    display: "hidden",
    primary: false,
  },
  profile: {
    name: "profile",
    value: "profile",
    alias: "Genes(Coverage %)",
    display: "none",
    primary: false,
  },
};

export const CUSTOM_HEADER_PSUMMARY = {
  id: {
    name: "id",
    value: "id",
    alias: "Isolate ID",
    display: "visible",
    primary: true,
  },
  sequence: {
    name: "sequence",
    value: "sequence",
    alias: "Sequence",
    display: "none",
    primary: false,
  },
  owner: {
    name: "owner",
    value: "owner",
    alias: "Owner",
    display: "none",
    primary: false,
  },
  sequence__biosample__id: {
    name: "BioSample",
    value: "sequence__biosample__id",
    alias: "BioSample",
    display: "visible",
    primary: false,
  },
  sequence__project__id: {
    name: "pid",
    value: "sequence__project__id",
    alias: "Project ID",
    display: "visible",
    primary: false,
  },
  
  pct_reads_mapped: {
    name: "pct_reads_mapped",
    value: "pct_reads_mapped",
    alias: "Percent of reads mapped",
    display: "hidden",
    primary: false,
  },
  num_reads_mapped: {
    name: "num_reads_mapped",
    value: "num_reads_mapped",
    alias: "Number of reads mapped",
    display: "none",
    primary: false,
  },
  main_lin: {
    name: "main_lin",
    value: "main_lin",
    alias: "Main Lineage",
    display: "visible",
    primary: false,
  },
  sublin: {
    name: "sublin",
    value: "sublin",
    alias: "Sub-Lineage",
    display: "visible",
    primary: false,
  },
  num_dr_variants: {
    name: "num_dr_variants",
    value: "num_dr_variants",
    alias: "# Drug variants",
    display: "visible",
    primary: false,
  },
  num_other_variants: {
    name: "num_other_variants",
    value: "num_other_variants",
    alias: "# Other variants",
    display: "visible",
    primary: false,
  },
  drtype: {
    name: "drtype",
    value: "drtype",
    alias: "Type of drug",
    display: "visible",
    primary: false,
  },
  rifampicin: {
    name: "rifampicin",
    value: "rifampicin",
    alias: "Rifampicin",
    display: "visible",
    primary: false,
  },
  isoniazid: {
    name: "isoniazid",
    value: "isoniazid",
    alias: "Isoniazid",
    display: "visible",
    primary: false,
  },
  pyrazinamide: {
    name: "pyrazinamide",
    value: "pyrazinamide",
    alias: "Pyrazinamide",
    display: "visible",
    primary: false,
  },
  ethambutol: {
    name: "ethambutol",
    value: "ethambutol",
    alias: "Ethambutol",
    display: "visible",
    primary: false,
  },
  streptomycin: {
    name: "streptomycin",
    value: "streptomycin",
    alias: "Streptomycin",
    display: "visible",
    primary: false,
  },
  fluoroquinolones: {
    name: "fluoroquinolones",
    value: "fluoroquinolones",
    alias: "Fluoroquinolones",
    display: "visible",
    primary: false,
  },
  moxifloxacin: {
    name: "moxifloxacin",
    value: "moxifloxacin",
    alias: "Moxifloxacin",
    display: "visible",
    primary: false,
  },
  ofloxacin: {
    name: "ofloxacin",
    value: "ofloxacin",
    alias: "Ofloxacin",
    display: "visible",
    primary: false,
  },
  levofloxacin: {
    name: "levofloxacin",
    value: "levofloxacin",
    alias: "Levofloxacin",
    display: "visible",
    primary: false,
  },
  ciprofloxacin: {
    name: "ciprofloxacin",
    value: "ciprofloxacin",
    alias: "Ciprofloxacin",
    display: "visible",
    primary: false,
  },
  aminoglycosides: {
    name: "aminoglycosides",
    value: "aminoglycosides",
    alias: "Aminoglycosides",
    display: "visible",
    primary: false,
  },
  amikacin: {
    name: "amikacin",
    value: "amikacin",
    alias: "Amikacin",
    display: "visible",
    primary: false,
  },
  kanamycin: {
    name: "kanamycin",
    value: "kanamycin",
    alias: "Kanamycin",
    display: "visible",
    primary: false,
  },
  capreomycin: {
    name: "capreomycin",
    value: "capreomycin",
    alias: "Capreomycin",
    display: "visible",
    primary: false,
  },
  ethionamide: {
    name: "ethionamide",
    value: "ethionamide",
    alias: "Ethionamide",
    display: "visible",
    primary: false,
  },
  para_aminosalicylic_acid: {
    name: "para_aminosalicylic_acid",
    value: "para_aminosalicylic_acid",
    alias: "para_aminosalicylic_acid",
    display: "visible",
    primary: false,
  },
  cycloserine: {
    name: "cycloserine",
    value: "cycloserine",
    alias: "Cycloserine",
    display: "visible",
    primary: false,
  },
  linezolid: {
    name: "linezolid",
    value: "linezolid",
    alias: "Linezolid",
    display: "visible",
    primary: false,
  },
  bedaquiline: {
    name: "bedaquiline",
    value: "bedaquiline",
    alias: "Bedaquiline",
    display: "visible",
    primary: false,
  },
  clofazimine: {
    name: "clofazimine",
    value: "clofazimine",
    alias: "Clofazimine",
    display: "visible",
    primary: false,
  },
  delamanid: {
    name: "delamanid",
    value: "delamanid",
    alias: "Delamanid",
    display: "visible",
    primary: false,
  },

  DateCreated: {
    name: "DateCreated",
    value: "DateCreated",
    alias: "DateCreated",
    display: "visible",
    primary: false,
  },
  LastUpdate: {
    name: "LastUpdate",
    value: "LastUpdate",
    alias: "LastUpdate",
    display: "visible",
    primary: false,
  },
  Description: {
    name: "Description",
    value: "Description",
    alias: "Description",
    display: "hidden",
    primary: false,
  },
};

export const CUSTOM_HEADER_SEQUENCE = {
  id: {
    name: "id",
    value: "id",
    alias: "Sequence ID",
    display: "visible",
    primary: true,
  },
  Projectid: {
    name: "Projectid",
    //value: "project__id", //need to check backend
    value: "project", //need to check backend
    alias: "Project ID",
    display: "visible",
    primary: false,
  },
 
  BioSample: {
    name: "BioSample",
    value: "biosample",
    alias: "BioSample",
    display: "visible",
    primary: false,
  },
  TaxID: {
    name: "TaxID",
    value: "TaxID",
    alias: "Tax ID",
    display: "hidden",
    primary: false,
  },
  sampleType: {
    name: "sampleType",
    value: "sampleType",
    alias: "Sample Type",
    display: "visible",
    primary: false,
  },
  ScientificName: {
    name: "ScientificName",
    value: "ScientificName",
    alias: "Scientific Name",
    display: "visible",
    primary: false,
  },
  
  Experiment: {
    name: "Experiment",
    value: "Experiment",
    alias: "Experiment",
    display: "hidden",
    primary: false,
  },
  LibraryName: {
    name: "LibraryName",
    value: "LibraryName",
    alias: "Library Name",
    display: "hidden",
    primary: false,
  },
  LibraryStrategy: {
    name: "LibraryStrategy",
    value: "LibraryStrategy",
    alias: "Library Strategy",
    display: "visible",
    primary: false,
  },
  LibrarySelection: {
    name: "LibrarySelection",
    value: "LibrarySelection",
    alias: "Library Selection",
    display: "hidden",
    primary: false,
  },
  LibrarySource: {
    name: "LibrarySource",
    value: "LibrarySource",
    alias: "Library Source",
    display: "hidden",
    primary: false,
  },
  LibraryLayout: {
    name: "LibraryLayout",
    value: "LibraryLayout",
    alias: "Library Layout",
    display: "visible",
    primary: false,
  },
  Platform: {
    name: "Platform",
    value: "Platform",
    alias: "Platform",
    display: "visible",
    primary: false,
  },
  SequencerModel: {
    name: "SequencerModel",
    value: "SequencerModel",
    alias: "Sequencer Model",
    display: "hidden",
    primary: false,
  },
  
  CenterName: {
    name: "CenterName",
    value: "CenterName",
    alias: "Center Name",
    display: "hidden",
    primary: false,
  },
  taxName_1: {
    name: "taxName_1",
    value: "taxName_1",
    alias: "Tax Name 1",
    display: "hidden",
    primary: false,
  },
  taxFrac_1: {
    name: "taxFrac_1",
    value: "taxFrac_1",
    alias: "Tax Frac 1",
    display: "hidden",
    primary: false,
  },
  taxName_2: {
    name: "taxName_2",
    value: "taxName_2",
    alias: "Tax Name 2",
    display: "hidden",
    primary: false,
  },
  taxFrac_2: {
    name: "taxFrac_2",
    value: "taxFrac_2",
    alias: "Tax Frac 2",
    display: "hidden",
    primary: false,
  },
  taxName_3: {
    name: "taxName_3",
    value: "taxName_3",
    alias: "Tax Name 3",
    display: "hidden",
    primary: false,
  },
  taxFrac_3: {
    name: "taxFrac_3",
    value: "taxFrac_3",
    alias: "Tax Frac 3",
    display: "hidden",
    primary: false,
  },
  taxName_4: {
    name: "taxName_4",
    value: "taxName_4",
    alias: "Tax Name 4",
    display: "hidden",
    primary: false,
  },
  taxFrac_4: {
    name: "taxFrac_4",
    value: "taxFrac_4",
    alias: "Tax Frac 4",
    display: "hidden",
    primary: false,
  },
  owner: {
    name: "owner",
    value: "owner",
    alias: "Owner",
    display: "visible",
    primary: false,
  },
  DateCreated: {
    name: "DateCreated",
    value: "DateCreated",
    alias: "Date Created",
    display: "visible",
    primary: false,
  },
  LastUpdate: {
    name: "LastUpdate",
    value: "LastUpdate",
    alias: "Last Update",
    display: "hidden",
    primary: false,
  },
  Description: {
    name: "Description",
    value: "Description",
    alias: "Description",
    display: "hidden",
    primary: false,
  },
 

  seqstat__r_Reads: {
    name: "Reads",
    value: "seqstat__r_Reads",
    alias: "Raw_Reads",
    display: "hidden",
    primary: false,
  },
 seqstat__r_Yield: {
    name: "Yield",
    value: "seqstat__r_Yield",
    alias: "Raw_Yield",
    display: "hidden",
    primary: false,
  },
 seqstat__r_GeeCee: {
    name: "GeeCee",
    value: "seqstat__r_GeeCee",
    alias: "Raw_GC",
    display: "hidden",
    primary: false,
  },
 seqstat__r_MinLen: {
    name: "MinLen",
    value: "seqstat__r_MinLen",
    alias: "Raw_MinLen",
    display: "hidden",
    primary: false,
  },
 seqstat__r_AvgLen: {
    name: "AvgLen",
    value: "seqstat__r_AvgLen",
    alias: "Raw_AvgLen",
    display: "hidden",
    primary: false,
  },
 seqstat__r_MaxLen: {
    name: "MaxLen",
    value: "seqstat__r_MaxLen",
    alias: "Raw_MaxLen",
    display: "hidden",
    primary: false,
  },
 seqstat__r_AvgQual: {
    name: "AvgQual",
    value: "seqstat__r_AvgQual",
    alias: "Raw_AvgQual",
    display: "hidden",
    primary: false,
  },
 seqstat__r_ErrQual: {
    name: "ErrQual",
    value: "seqstat__r_ErrQual",
    alias: "Raw_ErrQual",
    display: "hidden",
    primary: false,
  },
 seqstat__r_Ambiguous: {
    name: "Ambiguous",
    value: "seqstat__r_Ambiguous",
    alias: "Raw_Ambiguous",
    display: "hidden",
    primary: false,
  },
 seqstat__q_Reads: {
    name: "Reads",
    value: "seqstat__q_Reads",
    alias: "QC_Reads",
    display: "visible",
    primary: false,
  },
 seqstat__q_Yield: {
    name: "Yield",
    value: "seqstat__q_Yield",
    alias: "QC_Yield",
    display: "visible",
    primary: false,
  },
 seqstat__q_GeeCee: {
    name: "GeeCee",
    value: "seqstat__q_GeeCee",
    alias: "QC_GC",
    display: "visible",
    primary: false,
  },
 seqstat__q_MinLen: {
    name: "MinLen",
    value: "seqstat__q_MinLen",
    alias: "QC_MinLen",
    display: "visible",
    primary: false,
  },
 seqstat__q_AvgLen: {
    name: "AvgLen",
    value: "seqstat__q_AvgLen",
    alias: "QC_AvgLen",
    display: "visible",
    primary: false,
  },
 seqstat__q_MaxLen: {
    name: "MaxLen",
    value: "seqstat__q_MaxLen",
    alias: "QC_MaxLen",
    display: "visible",
    primary: false,
  },
 seqstat__q_AvgQual: {
    name: "AvgQual",
    value: "seqstat__q_AvgQual",
    alias: "QC_AvgQual",
    display: "visible",
    primary: false,
  },
 seqstat__q_ErrQual: {
    name: "ErrQual",
    value: "seqstat__q_ErrQual",
    alias: "QC_ErrQual",
    display: "visible",
    primary: false,
  },
 seqstat__q_Ambiguous: {
    name: "Ambiguous",
    value: "seqstat__q_Ambiguous",
    alias: "QC_Ambiguous",
    display: "visible",
    primary: false,
  },
};


export const CUSTOM_HEADER_PLASMID = {
  id: {
    name: "id",
    value: "id",
    alias: "Isolate ID",
    display: "visible",
    primary: true,
  },
  owner: {
    name: "owner",
    value: "owner",
    alias: "Owner",
    display: "none",
    primary: false,
  },
  assembly: {
    name: "assembly",
    value: "assembly",
    alias: "Assembly",
    display: "none",
    primary: false,
  },
  assembly__biosample__project__id: {
    name: "id",
    value: "assembly__biosample__project__id",
    alias: "Project ID",
    display: "visible",
    primary: false,
  },
  assembly__biosample__project__title: {
    name: "title",
    value: "assembly__biosample__project__title",
    alias: "Project Title",
    display: "none",
    primary: false,
  },
  assembly__count: {
    name: "count",
    value: "assembly__count",
    alias: "# contigs",
    display: "visible",
    primary: false,
  },
  sampleType: {
    name: "sampleType",
    value: "assembly__biosample__sampleType",
    alias: "Sample Type",
    display: "visible",
    primary: false,
  },
  num_found: {
    name: "num_found",
    value: "num_found",
    alias: "# Found",
    display: "visible",
    primary: false,
  },
  DateCreated: {
    name: "DateCreated",
    value: "DateCreated",
    alias: "Date Created",
    display: "visible",
    primary: false,
  },
  LastUpdate: {
    name: "LastUpdate",
    value: "LastUpdate",
    alias: "Last Update",
    display: "visible",
    primary: false,
  },
  Description: {
    name: "Description",
    value: "Description",
    alias: "Description",
    display: "hidden",
    primary: false,
  },
  profile: {
    name: "profile",
    value: "profile",
    alias: "Plasmid",
    display: "none",
    primary: false,
  },
};
