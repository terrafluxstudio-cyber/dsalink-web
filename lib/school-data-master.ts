/**
 * Official-reference snapshot for selected flagship secondary schools.
 * Compiled 2026-05-13 using MOE SchoolFinder `schooldetail` pages in-browser plus
 * linked official school websites (`.gov.sg` / `.edu.sg` / `.moe.edu.sg` only).
 *
 * COP values mirror MOE’s 2025 S1 posting table as shown on each school’s profile.
 * NUS High does not participate in S1 posting; PSLE COP columns are therefore not applicable.
 */

export type OfficialSource = "moe-schoolfinder" | "official-school-website";

export type DistinctiveProgramme = {
  title: string;
  shortDescription: string;
  sourceUrl: string;
  source: OfficialSource;
  /** Extra context when the title is taken verbatim from MOE but not expanded on-page. */
  note?: string;
};

export type PsleCop2025Sg = {
  /** Integrated Programme / IP posting band (AL/HCL notation per MOE table). */
  ip: string | null;
  /** SAP affiliated primary feeder column, if shown. */
  sapAffiliatedPri: string | null;
  /** G3 non-affiliated O-Level / SP posting band, if shown. */
  g3NonAffiliated: string | null;
  /** Free text when the school skips S1 posting (e.g. NUS High). */
  s1PostingNote?: string;
};

export type SchoolMasterRecord = {
  slug: string;
  fullName: string;
  schoolTypes: string[];
  academicTracks: string[];
  psleCutOff2025: PsleCop2025Sg;
  appliedLearningProgramme: DistinctiveProgramme;
  lifelongLearningProgramme: DistinctiveProgramme;
  openHouse2026Url: string;
  addressLine: string;
  nearestMrts: string;
  /** Nearest MRT inferred from published postal address and LTA station names; confirm on school or MyTransport.SG. */
  nearestMrtsAttribution: string;
  moeSchoolFinderUrl: string;
  officialWebsiteUrl: string;
};

export const SCHOOL_DATA: SchoolMasterRecord[] = [
  {
    slug: "hwa-chong-institution-secondary",
    fullName: "Hwa Chong Institution (Secondary)",
    schoolTypes: ["Independent", "Special Assistance Plan (SAP)", "Boys (secondary section)"],
    academicTracks: ["Integrated Programme (6-year IP leading to A-Levels)"],
    psleCutOff2025: {
      ip: "4(D)–6(M)",
      sapAffiliatedPri: null,
      g3NonAffiliated: null,
    },
    appliedLearningProgramme: {
      title: "Project Work (high school curriculum)",
      shortDescription:
        "HCI’s published high-school curriculum describes Project Work as a multi-year inquiry journey with teacher or expert mentors, building research skills from Secondary 1 and culminating in imaginative, innovative projects that can connect to competitions and further study.",
      sourceUrl: "https://www.hci.edu.sg/high-school/academic-prog/",
      source: "official-school-website",
      note: "MOE SchoolFinder lists many electives (e.g. BSP, CLEP) but does not surface a single branded “ALP” line on the accessibility snapshot; Project Work is foregrounded on the school’s official academic page.",
    },
    lifelongLearningProgramme: {
      title: "Community involvement & service learning (school curriculum text)",
      shortDescription:
        "The same HCI academic page documents large-scale student service initiatives and consortium-led community involvement projects as part of holistic education beyond the classroom.",
      sourceUrl: "https://www.hci.edu.sg/high-school/academic-prog/",
      source: "official-school-website",
    },
    openHouse2026Url: "https://www.hci.edu.sg/",
    addressLine: "661 Bukit Timah Road, Singapore 269734",
    nearestMrts: "Tan Kah Kee (Downtown Line); Botanic Gardens (Downtown / Circle Line interchange)",
    nearestMrtsAttribution:
      "Inferred from MOE-listed street address; verify walking distance on MyTransport.SG or the school’s directions page.",
    moeSchoolFinderUrl:
      "https://www.moe.gov.sg/schoolfinder/schooldetail/hwa-chong-institution-secondary",
    officialWebsiteUrl: "https://www.hci.edu.sg/",
  },
  {
    slug: "raffles-girls-school-secondary",
    fullName: "Raffles Girls' School (Secondary)",
    schoolTypes: ["Independent", "Girls"],
    academicTracks: ["Integrated Programme (Raffles Programme)"],
    psleCutOff2025: {
      ip: "4–6",
      sapAffiliatedPri: null,
      g3NonAffiliated: null,
    },
    appliedLearningProgramme: {
      title: "Regional Studies Programme",
      shortDescription:
        "Listed under Electives & programmes on MOE SchoolFinder for RGS (Secondary) alongside other MOE special programmes such as MEP and SBGE.",
      sourceUrl: "https://www.moe.gov.sg/schoolfinder/schooldetail/raffles-girls-school-secondary",
      source: "moe-schoolfinder",
    },
    lifelongLearningProgramme: {
      title: "Raffles Programme — character, leadership & service mission",
      shortDescription:
        "The school’s official Raffles Programme page states the mission to nurture leaders who realise talents in service of nation and community, and outlines Person / Leader / Thinker / Pioneer goals together with service-oriented framing.",
      sourceUrl: "https://www.rgs.edu.sg/programmes/raffles-programme/",
      source: "official-school-website",
      note: "MOE SchoolFinder snapshot did not expose a separate LLP label; this LLP-style summary is taken from the school’s published programme statement.",
    },
    openHouse2026Url: "https://openhouse.rgs.edu.sg/",
    addressLine: "2 Braddell Rise, Singapore 318871",
    nearestMrts: "Braddell (North South Line); Caldecott (Circle / Thomson–East Coast Line interchange)",
    nearestMrtsAttribution:
      "Inferred from MOE-listed street address; verify on MyTransport.SG or school directions.",
    moeSchoolFinderUrl:
      "https://www.moe.gov.sg/schoolfinder/schooldetail/raffles-girls-school-secondary",
    officialWebsiteUrl: "https://www.rgs.edu.sg/",
  },
  {
    slug: "raffles-institution-secondary",
    fullName: "Raffles Institution (Secondary)",
    schoolTypes: ["Independent", "Boys (secondary section)"],
    academicTracks: ["Integrated Programme (Raffles Programme)"],
    psleCutOff2025: {
      ip: "4–6",
      sapAffiliatedPri: null,
      g3NonAffiliated: null,
    },
    appliedLearningProgramme: {
      title: "FutureLearning Programme",
      shortDescription:
        "RI’s official Curriculum Innovation page describes FutureLearning as redefining learning as embodied, iterative, and joyful, forming part of the school’s published innovation framework.",
      sourceUrl:
        "https://www.ri.edu.sg/the-raffles-programme/year-1-4/curriculum-innovation/futurelearning-programme/",
      source: "official-school-website",
    },
    lifelongLearningProgramme: {
      title: "Outdoor Adventure Learning",
      shortDescription:
        "RI’s Curriculum Innovation portal states that Outdoor Adventure Learning helps students build confidence, adaptability, and skills to thrive through immersive experiences.",
      sourceUrl:
        "https://www.ri.edu.sg/the-raffles-programme/year-1-4/curriculum-innovation/outdoor-adventure-learning/",
      source: "official-school-website",
      note: "MOE SchoolFinder lists electives such as Regional Studies Programme and Emas; RI’s site uses the Curriculum Innovation headings above for applied / experiential learning narratives.",
    },
    openHouse2026Url: "https://www.ri.edu.sg/highlights/year-1-4-ri-open-house-2026-gryphon-galaxy/",
    addressLine: "1 Raffles Institution Lane, Singapore 575954",
    nearestMrts: "Marymount (Circle Line); Caldecott (Circle / Thomson–East Coast Line interchange)",
    nearestMrtsAttribution:
      "Inferred from MOE-listed street address; verify on MyTransport.SG or school directions.",
    moeSchoolFinderUrl:
      "https://www.moe.gov.sg/schoolfinder/schooldetail/raffles-institution-secondary",
    officialWebsiteUrl: "https://www.ri.edu.sg/",
  },
  {
    slug: "catholic-high-school-secondary",
    fullName: "Catholic High School (Secondary)",
    schoolTypes: ["Government-aided", "Autonomous", "Special Assistance Plan (SAP)", "Boys"],
    academicTracks: [
      "Integrated Programme (with Joint Integrated Programme partners)",
      "Singapore-Cambridge Secondary Education Certificate Programme (SP) for non-IP students — described on the school’s distinctive programmes overview.",
    ],
    psleCutOff2025: {
      ip: "4(D)–7(M)",
      sapAffiliatedPri: "7–12",
      g3NonAffiliated: "6(D)–8(M)",
    },
    appliedLearningProgramme: {
      title: "Coding in Environmental Solutions (CODES)",
      shortDescription:
        "Listed verbatim under Electives & programmes on MOE SchoolFinder for Catholic High School (Secondary) as at 2026-05-13.",
      sourceUrl: "https://www.moe.gov.sg/schoolfinder/schooldetail/catholic-high-school-secondary",
      source: "moe-schoolfinder",
    },
    lifelongLearningProgramme: {
      title: "Values Infused Through Active Learning in Sports (VITALS)",
      shortDescription:
        "Listed verbatim under Electives & programmes on MOE SchoolFinder for Catholic High School (Secondary) as at 2026-05-13.",
      sourceUrl: "https://www.moe.gov.sg/schoolfinder/schooldetail/catholic-high-school-secondary",
      source: "moe-schoolfinder",
    },
    openHouse2026Url: "https://catholichigh.moe.edu.sg/prospective-students/openhouse/",
    addressLine: "9 Bishan Street 22, Singapore 579767",
    nearestMrts: "Bishan (North South / Circle Line interchange)",
    nearestMrtsAttribution:
      "Inferred from MOE-listed street address; verify on MyTransport.SG or school contact page.",
    moeSchoolFinderUrl:
      "https://www.moe.gov.sg/schoolfinder/schooldetail/catholic-high-school-secondary",
    officialWebsiteUrl: "https://catholichigh.moe.edu.sg/",
  },
  {
    slug: "nus-high-school-of-mathematics-and-science",
    fullName: "NUS High School of Mathematics and Science",
    schoolTypes: ["Independent (Specialised School)"],
    academicTracks: [
      "NUS High Diploma / Integrated STEM pathway (no standalone O-Level track; admissions primarily via DSA-Sec)",
    ],
    psleCutOff2025: {
      ip: null,
      sapAffiliatedPri: null,
      g3NonAffiliated: null,
      s1PostingNote:
        "MOE SchoolFinder states the school does not participate in the S1 posting process; refer to DSA-Sec and the school website for admission information.",
    },
    appliedLearningProgramme: {
      title: "Mathematics & Science talent development (DSA-Sec focus)",
      shortDescription:
        "MOE SchoolFinder explains that applicants choose either Mathematics or Science DSA talent areas (single application) because the selection test covers both subjects.",
      sourceUrl: "https://www.moe.gov.sg/schoolfinder/schooldetail/nus-high-school-of-mathematics-and-science",
      source: "moe-schoolfinder",
    },
    lifelongLearningProgramme: {
      title: "Integrated Programme & School-based Gifted Education listings",
      shortDescription:
        "MOE SchoolFinder lists Integrated Programme and School-based Gifted Education under Electives & programmes for NUS High, alongside the DSA guidance note above.",
      sourceUrl: "https://www.moe.gov.sg/schoolfinder/schooldetail/nus-high-school-of-mathematics-and-science",
      source: "moe-schoolfinder",
      note: "Dedicated LLP microsite was not retrievable via automated fetch (403/timeout); rely on MOE profile plus school admissions pages for updates.",
    },
    openHouse2026Url: "https://www.nushigh.edu.sg/",
    addressLine: "20 Clementi Avenue 1, Singapore 129957",
    nearestMrts: "Clementi (East West Line); Dover (East West Line)",
    nearestMrtsAttribution:
      "Commonly associated with the published Clementi Avenue address; confirm on the school’s contact or transport page.",
    moeSchoolFinderUrl:
      "https://www.moe.gov.sg/schoolfinder/schooldetail/nus-high-school-of-mathematics-and-science",
    officialWebsiteUrl: "https://www.nushigh.edu.sg/",
  },
];
