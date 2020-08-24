const courseOptions = [
  { value: '', courseString: 'Course Department' }, 
  { value: 'AC ENG', courseString: 'AC ENG' }, 
  { value: 'AFAM', courseString: 'AFAM' }, 
  { value: 'ANATOMY', courseString: 'ANATOMY' }, 
  { value: 'ANESTH', courseString: 'ANESTH' }, 
  { value: 'ANTHRO', courseString: 'ANTHRO' }, 
  { value: 'ARABIC', courseString: 'ARABIC' }, 
  { value: 'ARMN', courseString: 'ARMN' }, 
  { value: 'ART', courseString: 'ART' }, 
  { value: 'ART HIS', courseString: 'ART HIS' }, 
  { value: 'ARTS', courseString: 'ARTS' }, 
  { value: 'ARTSHUM', courseString: 'ARTSHUM' }, 
  { value: 'ASIANAM', courseString: 'ASIANAM' }, 
  { value: 'BANA', courseString: 'BANA' }, 
  { value: 'BATS', courseString: 'BATS' }, 
  { value: 'BIO SCI', courseString: 'BIO SCI' }, 
  { value: 'BIOCHEM', courseString: 'BIOCHEM' }, 
  { value: 'BME', courseString: 'BME' }, 
  { value: 'BSEMD', courseString: 'BSEMD' }, 
  { value: 'CAMPREC', courseString: 'CAMPREC' }, 
  { value: 'CBE', courseString: 'CBE' }, 
  { value: 'CBEMS', courseString: 'CBEMS' }, 
  { value: 'CEM', courseString: 'CEM' }, 
  { value: 'CHC/LAT', courseString: 'CHC/LAT' }, 
  { value: 'CHEM', courseString: 'CHEM' }, 
  { value: 'CHINESE', courseString: 'CHINESE' }, 
  { value: 'CLASSIC', courseString: 'CLASSIC' }, 
  { value: 'CLT&THY', courseString: 'CLT&THY' }, 
  { value: 'COGS', courseString: 'COGS' }, 
  { value: 'COM LIT', courseString: 'COM LIT' }, 
  { value: 'COMPSCI', courseString: 'COMPSCI' }, 
  { value: 'CRITISM', courseString: 'CRITISM' }, 
  { value: 'CRM/LAW', courseString: 'CRM/LAW' }, 
  { value: 'CSE', courseString: 'CSE' }, 
  { value: 'DANCE', courseString: 'DANCE' }, 
  { value: 'DERM', courseString: 'DERM' }, 
  { value: 'DEV BIO', courseString: 'DEV BIO' }, 
  { value: 'DRAMA', courseString: 'DRAMA' }, 
  { value: 'E ASIAN', courseString: 'E ASIAN' }, 
  { value: 'EARTHSS', courseString: 'EARTHSS' }, 
  { value: 'EAS', courseString: 'EAS' }, 
  { value: 'ECO EVO', courseString: 'ECO EVO' }, 
  { value: 'ECON', courseString: 'ECON' }, 
  { value: 'ECPS', courseString: 'ECPS' }, 
  { value: 'ED AFF', courseString: 'ED AFF' }, 
  { value: 'EDUC', courseString: 'EDUC' }, 
  { value: 'EECS', courseString: 'EECS' }, 
  { value: 'EHS', courseString: 'EHS' }, 
  { value: 'ENGLISH', courseString: 'ENGLISH' }, 
  { value: 'ENGR', courseString: 'ENGR' }, 
  { value: 'ENGRCEE', courseString: 'ENGRCEE' }, 
  { value: 'ENGRMAE', courseString: 'ENGRMAE' }, 
  { value: 'ENGRMSE', courseString: 'ENGRMSE' }, 
  { value: 'EPIDEM', courseString: 'EPIDEM' }, 
  { value: 'ER MED', courseString: 'ER MED' }, 
  { value: 'EURO ST', courseString: 'EURO ST' }, 
  { value: 'FAM MED', courseString: 'FAM MED' }, 
  { value: 'FIN', courseString: 'FIN' }, 
  { value: 'FLM&MDA', courseString: 'FLM&MDA' }, 
  { value: 'FRENCH', courseString: 'FRENCH' }, 
  { value: 'GEN&SEX', courseString: 'GEN&SEX' }, 
  { value: 'GERMAN', courseString: 'GERMAN' }, 
  { value: 'GLBL ME', courseString: 'GLBL ME' }, 
  { value: 'GLBLCLT', courseString: 'GLBLCLT' }, 
  { value: 'GREEK', courseString: 'GREEK' }, 
  { value: 'HEBREW', courseString: 'HEBREW' }, 
  { value: 'HINDI', courseString: 'HINDI' }, 
  { value: 'HISTORY', courseString: 'HISTORY' }, 
  { value: 'HUMAN', courseString: 'HUMAN' }, 
  { value: 'HUMARTS', courseString: 'HUMARTS' }, 
  { value: 'I&C SCI', courseString: 'I&C SCI' }, 
  { value: 'IN4MATX', courseString: 'IN4MATX' }, 
  { value: 'INNO', courseString: 'INNO' }, 
  { value: 'INT MED', courseString: 'INT MED' }, 
  { value: 'INTL ST', courseString: 'INTL ST' }, 
  { value: 'IRAN', courseString: 'IRAN' }, 
  { value: 'ITALIAN', courseString: 'ITALIAN' }, 
  { value: 'JAPANSE', courseString: 'JAPANSE' }, 
  { value: 'KOREAN', courseString: 'KOREAN' }, 
  { value: 'LATIN', courseString: 'LATIN' }, 
  { value: 'LAW', courseString: 'LAW' }, 
  { value: 'LINGUIS', courseString: 'LINGUIS' }, 
  { value: 'LIT JRN', courseString: 'LIT JRN' }, 
  { value: 'LPS', courseString: 'LPS' }, 
  { value: 'LSCI', courseString: 'LSCI' }, 
  { value: 'M&MG', courseString: 'M&MG' }, 
  { value: 'MATH', courseString: 'MATH' }, 
  { value: 'MED', courseString: 'MED' }, 
  { value: 'MED ED', courseString: 'MED ED' }, 
  { value: 'MED HUM', courseString: 'MED HUM' }, 
  { value: 'MGMT', courseString: 'MGMT' }, 
  { value: 'MGMT EP', courseString: 'MGMT EP' }, 
  { value: 'MGMT FE', courseString: 'MGMT FE' }, 
  { value: 'MGMT HC', courseString: 'MGMT HC' }, 
  { value: 'MGMTMBA', courseString: 'MGMTMBA' }, 
  { value: 'MGMTPHD', courseString: 'MGMTPHD' }, 
  { value: 'MIC BIO', courseString: 'MIC BIO' }, 
  { value: 'MOL BIO', courseString: 'MOL BIO' }, 
  { value: 'MPAC', courseString: 'MPAC' }, 
  { value: 'MSE', courseString: 'MSE' }, 
  { value: 'MUSIC', courseString: 'MUSIC' }, 
  { value: 'NET SYS', courseString: 'NET SYS' }, 
  { value: 'NEURBIO', courseString: 'NEURBIO' }, 
  { value: 'NEUROL', courseString: 'NEUROL' }, 
  { value: 'NUR SCI', courseString: 'NUR SCI' }, 
  { value: 'OB/GYN', courseString: 'OB/GYN' }, 
  { value: 'OPHTHAL', courseString: 'OPHTHAL' }, 
  { value: 'PATH', courseString: 'PATH' }, 
  { value: 'PED GEN', courseString: 'PED GEN' }, 
  { value: 'PEDS', courseString: 'PEDS' }, 
  { value: 'PERSIAN', courseString: 'PERSIAN' }, 
  { value: 'PHARM', courseString: 'PHARM' }, 
  { value: 'PHILOS', courseString: 'PHILOS' }, 
  { value: 'PHRMSCI', courseString: 'PHRMSCI' }, 
  { value: 'PHY SCI', courseString: 'PHY SCI' }, 
  { value: 'PHYSICS', courseString: 'PHYSICS' }, 
  { value: 'PHYSIO', courseString: 'PHYSIO' }, 
  { value: 'PLASTIC', courseString: 'PLASTIC' }, 
  { value: 'PM&R', courseString: 'PM&R' }, 
  { value: 'POL SCI', courseString: 'POL SCI' }, 
  { value: 'PORTUG', courseString: 'PORTUG' }, 
  { value: 'PP&D', courseString: 'PP&D' }, 
  { value: 'PSCI', courseString: 'PSCI' }, 
  { value: 'PSY BEH', courseString: 'PSY BEH' }, 
  { value: 'PSYCH', courseString: 'PSYCH' }, 
  { value: 'PUB POL', courseString: 'PUB POL' }, 
  { value: 'PUBHLTH', courseString: 'PUBHLTH' }, 
  { value: 'RADIO', courseString: 'RADIO' }, 
  { value: 'REL STD', courseString: 'REL STD' }, 
  { value: 'ROTC', courseString: 'ROTC' }, 
  { value: 'RUSSIAN', courseString: 'RUSSIAN' }, 
  { value: 'SOC SCI', courseString: 'SOC SCI' }, 
  { value: 'SOCECOL', courseString: 'SOCECOL' }, 
  { value: 'SOCIOL', courseString: 'SOCIOL' }, 
  { value: 'SPANISH', courseString: 'SPANISH' }, 
  { value: 'SPPS', courseString: 'SPPS' }, 
  { value: 'STATS', courseString: 'STATS' }, 
  { value: 'SURGERY', courseString: 'SURGERY' }, 
  { value: 'SWE', courseString: 'SWE' }, 
  { value: 'TAGALOG', courseString: 'TAGALOG' }, 
  { value: 'TOX', courseString: 'TOX' }, 
  { value: 'UCDC', courseString: 'UCDC' }, 
  { value: 'UNI AFF', courseString: 'UNI AFF' }, 
  { value: 'UNI STU', courseString: 'UNI STU' }, 
  { value: 'UPPP', courseString: 'UPPP' }, 
  { value: 'VIETMSE', courseString: 'VIETMSE' }, 
  { value: 'VIS STD', courseString: 'VIS STD' }, 
  { value: 'WRITING', courseString: 'WRITING' }, 
];

export default courseOptions;