/**
 * Concise MOE-aligned glosses for school / DSA / posting terminology (English fallback).
 * Keys are lookup identifiers for {@link GlossaryTooltip}; definitions in other locales
 * resolve from `locales/*.json` keys listed in {@link GLOSSARY_I18N_KEY}.
 */
export const GLOSSARY = {
  ALP: "Applied Learning Programme — a school-based programme that connects academic knowledge and skills to real-world professional and industry contexts.",
  LLP: "Lifelong Learning Programme — a school-based programme that develops students’ strengths and interests in areas such as the arts, community youth leadership, or outdoor education.",
  SAP: "Special Assistance Plan — schools that offer both English Language and Chinese Language at a higher level to develop bilingual and bicultural students.",
  LEP: "Language Elective Programme — an MOE programme to deepen ability in Chinese, Malay, or Tamil Language for students with strong aptitude.",
  DSA: "Direct School Admission — admission to Secondary 1 before the national examination based on demonstrated talents, aptitudes, and achievements in domains such as sports, CCAs, or the arts.",
  "DSA-Sec":
    "Direct School Admission–Secondary — the DSA exercise for admission to Secondary 1 in a participating secondary school.",
  IP: "Integrated Programme — a six-year through-train programme in selected schools leading to the GCE A-Level or other diploma qualifications without sitting the GCE O-Level at the end of Secondary 4 for most students.",
  "O-Level":
    "Singapore-Cambridge GCE Ordinary Level — national examinations taken at the end of secondary education for most students not on the Integrated Programme.",
  SP: "Singapore-Cambridge Secondary Education Certificate Programme — a secondary pathway leading to the SEC examinations for students not on the Integrated Programme.",
  COP: "Cut-off Point — an indicative PSLE score range published for reference for school posting; actual admission depends on demand and eligibility each year.",
  MOE: "Ministry of Education — the Singapore government ministry responsible for national education policy, curriculum, and schools.",
  CCA: "Co-Curricular Activity — structured activities beyond the academic curriculum (e.g. sports, uniformed groups, performing arts) that develop character and competencies.",
  HCL: "Higher Chinese Language — an MOE-offered higher Mother Tongue option for students with the aptitude to study Chinese Language at a more demanding level.",
  "G1/G2/G3":
    "Posting groups (G1, G2, G3) — PSLE score bands used under Full Subject-Based Banding for Secondary 1 posting and subject levels at entry.",
  SBGE: "School-based provision for higher-ability learners — school-level approaches (including enrichment) to stretch students with strong aptitude in specific domains, aligned to MOE guidance.",
  MEP: "Music Elective Programme — an MOE programme for students with strong musical aptitude to study music at a higher depth.",
  AEP: "Art Elective Programme — an MOE programme for students with strong visual arts aptitude to study art at a higher depth.",
  BSP: "Bi-cultural Studies Programme (where offered) — typically in SAP schools, a humanities-oriented programme linking Chinese language and culture with contemporary contexts.",
  JIP: "Joint Integrated Programme — an Integrated Programme delivered in partnership across two or more schools, with students progressing to a common junior college or through-route.",
  "S1 posting":
    "Secondary 1 posting — the national process that places students into secondary schools after the PSLE, based on choices, merit, and eligibility.",
  "posting group":
    "Posting group — the G1, G2, or G3 PSLE band used for Secondary 1 posting under Full Subject-Based Banding.",
  "affiliated school":
    "Affiliated school — a secondary school that has an official affiliation with one or more primary schools; posting score ranges may show separate affiliated and non-affiliated bands where published.",
  "non-affiliated":
    "Non-affiliated — refers to students without feeder-school affiliation when considering published posting score ranges.",
  "talent area":
    "Talent area — a DSA domain (e.g. sport, performing arts, leadership, STEM) in which a student is assessed for admission.",
  "selection exercise":
    "Selection exercise — the school’s DSA process (e.g. trials, auditions, interviews, portfolio review) used to shortlist and select applicants.",
  "Confirmed Offer":
    "Confirmed Offer — a DSA outcome where the school has confirmed a place, subject to students completing registration steps and meeting eligibility requirements.",
  "Waiting List":
    "Waiting List — a DSA outcome where the applicant may be considered if places become available after Confirmed Offers.",
  "Critical Social Inquiry and Media Literacy":
    "A subject-based component within the English Language and Literature curriculum that develops critical inquiry into societal issues and responsible engagement with information and media.",
  "Critical Social Inquiry":
    "Shorthand for Critical Social Inquiry and Media Literacy — develops critical perspectives on society and media within the English Language curriculum.",
  AL: "Achievement Level (AL) — the PSLE score band (AL 1–8 per subject) used to derive an overall PSLE score for posting purposes.",
  PSLE: "Primary School Leaving Examination — the national examination at the end of primary education used for Secondary 1 posting.",
  "Elective Programme in Malay Language for Secondary School (EMAS)":
    "Elective Programme in Malay Language for Secondary School (EMAS) — an MOE programme for secondary students with strong aptitude in Malay Language to study the language at a higher level.",
  "Language Elective Programme (Malay)":
    "Language Elective Programme (Malay) — the MOE Language Elective Programme track in Malay for students with strong aptitude, taken alongside the regular Malay Language course.",
  "Elective Programme in Malay Language (EMAS)":
    "Elective Programme in Malay Language (EMAS) — the EMAS elective track (secondary) for students with strong aptitude in Malay Language; naming may appear with or without “for Secondary School”.",
} as const;

export type GlossaryTerm = keyof typeof GLOSSARY;

/** i18n key in `locales/*.json` for the localized tooltip definition (all locales). */
export const GLOSSARY_I18N_KEY: Record<GlossaryTerm, string> = {
  ALP: "glossaryDefAlp",
  LLP: "glossaryDefLlp",
  SAP: "glossaryDefSap",
  LEP: "glossaryDefLep",
  DSA: "glossaryDefDsa",
  "DSA-Sec": "glossaryDefDsaSec",
  IP: "glossaryDefIp",
  "O-Level": "glossaryDefOLevel",
  SP: "glossaryDefSp",
  COP: "glossaryDefCop",
  MOE: "glossaryDefMoe",
  CCA: "glossaryDefCca",
  HCL: "glossaryDefHcl",
  "G1/G2/G3": "glossaryDefG1g2g3",
  SBGE: "glossaryDefSbge",
  MEP: "glossaryDefMep",
  AEP: "glossaryDefAep",
  BSP: "glossaryDefBsp",
  JIP: "glossaryDefJip",
  "S1 posting": "glossaryDefS1Posting",
  "posting group": "glossaryDefPostingGroup",
  "affiliated school": "glossaryDefAffiliatedSchool",
  "non-affiliated": "glossaryDefNonAffiliated",
  "talent area": "glossaryDefTalentArea",
  "selection exercise": "glossaryDefSelectionExercise",
  "Confirmed Offer": "glossaryDefConfirmedOffer",
  "Waiting List": "glossaryDefWaitingList",
  "Critical Social Inquiry and Media Literacy": "glossaryDefCriticalSocialInquiryAndMediaLiteracy",
  "Critical Social Inquiry": "glossaryDefCriticalSocialInquiry",
  AL: "glossaryDefAl",
  PSLE: "glossaryDefPsle",
  "Elective Programme in Malay Language for Secondary School (EMAS)":
    "glossaryDefElectiveProgrammeInMalayLanguageForSecondarySchoolEmas",
  "Language Elective Programme (Malay)": "glossaryDefLanguageElectiveProgrammeMalay",
  "Elective Programme in Malay Language (EMAS)": "glossaryDefElectiveProgrammeInMalayLanguageEmas",
};

export function getGlossaryDefinition(term: GlossaryTerm): string {
  return GLOSSARY[term];
}
