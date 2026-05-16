import dsaGuideEn from "@/locales/en.json";
import dsaGuideMs from "@/locales/ms.json";
import dsaGuideTa from "@/locales/ta.json";
import dsaGuideZh from "@/locales/zh.json";

export const locales = ["en", "zh", "ms", "ta"] as const;

type ProgrammeGlossaryI18nKey =
  | "glossaryDefSchoolBasedGiftedEducation"
  | "glossaryDefMusicElectiveProgramme"
  | "glossaryDefArtElectiveProgramme"
  | "glossaryDefBiculturalStudiesProgramme"
  | "glossaryDefIntegratedProgramme"
  | "glossaryDefRegionalStudiesProgramme"
  | "glossaryDefChineseLanguageSpecialProgramme"
  | "glossaryDefMalayLanguageSpecialProgramme"
  | "glossaryDefMalayLanguageSpecialProgrammeAlt"
  | "glossaryDefLanguageElectiveProgrammeChinese"
  | "glossaryDefLanguageElectiveProgrammeTamil"
  | "glossaryDefHumanitiesScholarshipProgramme"
  | "glossaryDefEngineeringTechProgramme"
  | "glossaryDefSteam"
  | "glossaryDefEnhancedArtProgramme"
  | "glossaryDefEnhancedArtProgrammeElective"
  | "glossaryDefEnhancedMusicProgramme"
  | "glossaryDefSunriseProgramme"
  | "glossaryDefIotApplications"
  | "glossaryDefMobileWebApplications"
  | "glossaryDefMechanicalDesignAutomation"
  | "glossaryDefCulinaryRestaurantOperations"
  | "glossaryDefRetailEcommerce"
  | "glossaryDefSpecialAssistancePlanSap"
  | "glossaryDefVocationalSubjects";

/** Keys imported from `locales/*.json` for /dsa-guide (flat dsaGuide* strings). */
export type DsaGuideStrings = Omit<typeof dsaGuideEn, ProgrammeGlossaryI18nKey>;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  ms: "Melayu",
  ta: "தமிழ்",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** BCP 47 language tags for <html lang>. */
export const localeHtmlLang: Record<Locale, string> = {
  en: "en-SG",
  zh: "zh-Hans-SG",
  ms: "ms-SG",
  ta: "ta-SG",
};

export type Copy = {
  metaTitle: string;
  metaDescription: string;
  navBrand: string;
  navTagline: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  countdownLabel: string;
  countdownComplete: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  countdownSeconds: string;
  countdownDeadlineLine: string;
  ctaPrimary: string;
  ctaSecondary: string;
  sectionLinksTitle: string;
  sectionLinksDesc: string;
  linkMoeTitle: string;
  linkMoeDesc: string;
  linkSchoolsTitle: string;
  linkSchoolsDesc: string;
  linkPortalTitle: string;
  linkPortalDesc: string;
  footerRights: string;
  extHint: string;
  a11yLanguageSelector: string;
  heroSearchPlaceholder: string;
  openHouseKicker: string;
  sectionOpenHouseTitle: string;
  sectionOpenHouseDesc: string;
  openHouseOfficialLink: string;
  openHouseSchoolLink: string;
  /** Primary CTA on open-house list rows (official booking / registration). */
  openHouseOfficialBooking: string;
  openHouseOnsite: string;
  openHouseOnline: string;
  openHouseTime: string;
  openHouseAddress: string;
  openHouseStatusUpcoming: string;
  openHouseStatusOngoing: string;
  openHouseStatusFinished: string;
  /** /dsa-guide — DSA-Sec application timeline */
  navFaq: string;
  navDsaGuide: string;
  navDsaFinder: string;
  navOpenHouses: string;
  /** /open-house-guide — master guide for secondary school open houses */
  navOpenHouseGuide: string;
  /** /scores — posting COP directory */
  navScores: string;
  navMenu: string;
  navClose: string;
  openHousePreviewTitle: string;
  openHousePreviewDesc: string;
  openHouseViewFullCalendar: string;
  /** Open-houses page: show entire island list vs highlighted schools only. */
  openHouseFilterAll: string;
  openHouseFilterPopular: string;
  openHouseBadgePopular: string;
  /** Full directory page */
  openHouseSearchPlaceholder: string;
  openHouseSearchAria: string;
  openHouseFiltersRegion: string;
  openHouseFiltersProgram: string;
  openHouseRegionNorth: string;
  openHouseRegionSouth: string;
  openHouseRegionEast: string;
  openHouseRegionWest: string;
  openHouseRegionCentral: string;
  openHouseProgramIP: string;
  openHouseProgramSAP: string;
  openHouseProgramOLevel: string;
  openHouseLoadMore: string;
  openHouseListComplete: string;
  openHouseNoResults: string;
  openHouseStayTuned: string;
  openHouseResultsSummary: string;
  scoreboardTitle: string;
  scoreboardSubtitle: string;
  scoreboardSearchPlaceholder: string;
  scoreboardFilterRegion: string;
  scoreboardFilterType: string;
  scoreboardAll: string;
  scoreboardCol2025: string;
  scoreboardColYear: string;
  scoreboardTrackNonIp: string;
  scoreboardTrackIp: string;
  scoreboardBadgeAffiliated: string;
  scoreboardBadgeSap: string;
  scoreboardTrendStable: string;
  scoreboardTrendUp: string;
  scoreboardTrendDown: string;
  scoreboardExpandDetails: string;
  scoreboardCollapseDetails: string;
  scoreboardNoResults: string;
  scoreboardShowing: string;
  scoreboardTypeG3: string;
  scoreboardTypeG2: string;
  scoreboardTypeG1: string;
  /** Dedicated /scores page */
  scoresPageKicker: string;
  scoresPageH1: string;
  scoresPageLead: string;
  scoresFilterToolbarAria: string;
  /** Home teaser card → /scores */
  homeScoresCardTitle: string;
  homeScoresCardCta: string;
  scoreboardFilterSapOnly: string;
  scoreboardFilterIpOnly: string;
  scoreboardFilterBoysSchool: string;
  scoreboardFilterGirlsSchool: string;
  scoreboardSortLabel: string;
  scoreboardSortScoreAsc: string;
  scoreboardSortScoreDesc: string;
  scoreboardSortName: string;
  scoreboardBadgeAuto: string;
  scoreboardBadgeIp: string;
  scoreboardColG3NonAff: string;
  scoreboardDetailMatrix: string;
  scoreboardGenderBoys: string;
  scoreboardGenderGirls: string;
  navSchools: string;
  navDsaInterview: string;
  schoolsKicker: string;
  schoolsH1: string;
  schoolsLead: string;
  schoolsSearch: string;
  schoolsFilterRegion: string;
  schoolsFilterType: string;
  schoolsFilterTrack: string;
  schoolsAll: string;
  schoolsTypeGovt: string;
  schoolsTypeAided: string;
  schoolsTypeIndependent: string;
  schoolsTypeAutonomous: string;
  schoolsTrackOLevel: string;
  schoolsTrackIP: string;
  schoolsTrackSpecialised: string;
  schoolsAlp: string;
  schoolsLlp: string;
  schoolsCop: string;
  schoolsDsaLink: string;
  schoolsWebsite: string;
  schoolsNoResults: string;
  schoolsShowing: string;
  schoolsBadgeSap: string;
  schoolsBadgeIp: string;
  schoolsAffPri: string;
  schoolsOtherProg: string;
  /** Open-houses directory: sort pill + urgency tags */
  openHouseSortedByDate: string;
  openHouseUrgencyToday: string;
  openHouseUrgencyTomorrow: string;
  openHouseUrgencyThisSat: string;
  openHouseUrgencyThisSun: string;
  openHouseUrgencyThisWeek: string;
  /** DSA Finder page */
  dsaFinderCrumb: string;
  dsaFinderKicker: string;
  dsaFinderBySchool: string;
  dsaFinderByTalent: string;
  dsaFinderShowAll: string;
  dsaFinderShowFewer: string;
  dsaFinderPsleEstimate: string;
  dsaFinderNoMatches: string;
  dsaFinderModeTip: string;
  /** DsaStrategySection */
  dsaStrategySectionKicker: string;
  dsaStrategySectionH2: string;
  dsaStrategySectionLead: string;
  dsaStrategyInsightTitle: string;
  dsaStrategyInsightBody: string;
  dsaStrategyInsightFootnote: string;
  dsaStrategyPslePath: string;
  dsaStrategyPsleBody: string;
  dsaStrategyPsleBadge: string;
  dsaStrategyDsaPath: string;
  dsaStrategyDsaBody: string;
  dsaStrategyDsaBadge: string;
  dsaStrategySmartTitle: string;
  dsaStrategySmartBody: string;
  dsaStrategySmartBadge: string;
  dsaStrategyWhichParent: string;
  dsaStrategyWhichDesc: string;
  dsaStrategyGoalLabel: string;
  dsaStrategyTipLabel: string;
  dsaStrategyPersona1Title: string;
  dsaStrategyPersona1Tag: string;
  dsaStrategyPersona1Who: string;
  dsaStrategyPersona1Goal: string;
  dsaStrategyPersona1Tip: string;
  dsaStrategyPersona1Cta: string;
  dsaStrategyPersona2Title: string;
  dsaStrategyPersona2Tag: string;
  dsaStrategyPersona2Who: string;
  dsaStrategyPersona2Goal: string;
  dsaStrategyPersona2Tip: string;
  dsaStrategyPersona2Cta: string;
  dsaStrategyPersona3Title: string;
  dsaStrategyPersona3Tag: string;
  dsaStrategyPersona3Who: string;
  dsaStrategyPersona3Goal: string;
  dsaStrategyPersona3Tip: string;
  dsaStrategyPersona3Cta: string;
  dsaStrategyPersona4Title: string;
  dsaStrategyPersona4Tag: string;
  dsaStrategyPersona4Who: string;
  dsaStrategyPersona4Goal: string;
  dsaStrategyPersona4Tip: string;
  dsaStrategyPersona4Cta: string;
  dsaStrategyCtaTitle: string;
  dsaStrategyCtaBody: string;
  dsaStrategyCtaBrowse: string;
  dsaStrategyCtaInterview: string;
  glossaryDefSchoolBasedGiftedEducation?: string;
  glossaryDefMusicElectiveProgramme?: string;
  glossaryDefArtElectiveProgramme?: string;
  glossaryDefBiculturalStudiesProgramme?: string;
  glossaryDefIntegratedProgramme?: string;
  glossaryDefRegionalStudiesProgramme?: string;
  glossaryDefChineseLanguageSpecialProgramme?: string;
  glossaryDefMalayLanguageSpecialProgramme?: string;
  glossaryDefMalayLanguageSpecialProgrammeAlt?: string;
  glossaryDefLanguageElectiveProgrammeChinese?: string;
  glossaryDefLanguageElectiveProgrammeTamil?: string;
  glossaryDefHumanitiesScholarshipProgramme?: string;
  glossaryDefEngineeringTechProgramme?: string;
  glossaryDefSteam?: string;
  glossaryDefEnhancedArtProgramme?: string;
  glossaryDefEnhancedArtProgrammeElective?: string;
  glossaryDefEnhancedMusicProgramme?: string;
  glossaryDefSunriseProgramme?: string;
  glossaryDefIotApplications?: string;
  glossaryDefMobileWebApplications?: string;
  glossaryDefMechanicalDesignAutomation?: string;
  glossaryDefCulinaryRestaurantOperations?: string;
  glossaryDefRetailEcommerce?: string;
  glossaryDefSpecialAssistancePlanSap?: string;
  glossaryDefVocationalSubjects?: string;
  subscribeKicker: string;
  subscribeTitle: string;
  subscribeDesc: string;
  subscribeMaterial1: string;
  subscribeMaterial2: string;
  subscribeMaterial3: string;
  subscribeMaterial4: string;
  subscribeFormLabel: string;
  subscribeBtn: string;
  subscribeBtnLoading: string;
  subscribeSuccessTitle: string;
  subscribeSuccessDesc: string;
  subscribeDisclaimer: string;
  dsaExpPageCrumb: string;
  dsaExpPageKicker: string;
  dsaExpPageTitle: string;
  dsaExpPageSubtitle: string;
  dsaExpLangNotice: string;
} & DsaGuideStrings;

export const copy: Record<Locale, Copy> = {
  en: {
    metaTitle: "DSA Link Singapore | Official DSA 2026 Countdown & Resources",
    metaDescription:
      "Navigate Singapore Direct School Admission (DSA) with trusted official links, a 2026 application countdown, and clear guides for parents — DSA Link (dsalink.sg).",
    navBrand: "DSA Link",
    navTagline: "Singapore · DSA 2026",
    countdownLabel: "Time until DSA 2026 application closes",
    countdownComplete:
      "Countdown complete — please verify the latest deadline on MOE.",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    countdownDeadlineLine: "Closing: 2 Jun 2026 · 16:30 SGT",
    ctaPrimary: "Find schools for your child's talent",
    ctaSecondary: "Read the DSA Guide",
    sectionLinksTitle: "Official links & guides",
    sectionLinksDesc:
      "All destinations open in a new tab. Always confirm details on the official MOE website.",
    linkMoeTitle: "MOE · DSA (Secondary)",
    linkMoeDesc: "Central overview, eligibility, and how the exercise works.",
    linkSchoolsTitle: "School finder & DSA",
    linkSchoolsDesc: "Locate schools and their published DSA information.",
    linkPortalTitle: "Application portal",
    linkPortalDesc: "When the window opens, submit via the official e‑service.",
    footerRights: "© dsalink.sg · Built for parents navigating DSA in Singapore",
    extHint: "Opens externally",
    a11yLanguageSelector: "Choose language",
    heroSearchPlaceholder: "Search schools or talents (e.g. Robotics, Dance)…",
    openHouseKicker: "May 2026 · Island-wide",
    sectionOpenHouseTitle: "Secondary Open Houses · DSA & Admissions",
    sectionOpenHouseDesc:
      "147 secondary schools (MOE directory, 2026) with bilingual names, region, school type, and official DSA / admissions links. Open-house times are May 2026 (TBC) unless the school has published a date — always confirm on each site.",
    openHouseOfficialLink: "Official open house / admissions",
    openHouseOfficialBooking: "DSA / admissions",
    openHouseSchoolLink: "School website",
    openHouseOnsite: "On-site",
    openHouseOnline: "Online",
    openHouseTime: "Time",
    openHouseAddress: "Address",
    openHouseStatusUpcoming: "Upcoming",
    openHouseStatusOngoing: "In progress",
    openHouseStatusFinished: "Ended",
    navFaq: "FAQ",
    navDsaGuide: "DSA Guide",
    navDsaFinder: "DSA Finder",
    navOpenHouses: "Open houses",
    navOpenHouseGuide: "Open House Guide",
    navScores: "PSLE COP",
    navMenu: "Menu",
    navClose: "Close menu",
    openHousePreviewTitle: "Coming up: May open houses",
    openHousePreviewDesc:
      "A quick look at the next sessions on our calendar — full list and official links inside.",
    openHouseViewFullCalendar: "View full calendar →",
    openHouseFilterAll: "All schools",
    openHouseFilterPopular: "Popular picks",
    openHouseBadgePopular: "Popular",
    openHouseSearchPlaceholder: "Search by English or Chinese school name…",
    openHouseSearchAria: "Search schools",
    openHouseFiltersRegion: "Area",
    openHouseFiltersProgram: "Programme",
    openHouseRegionNorth: "North",
    openHouseRegionSouth: "South",
    openHouseRegionEast: "East",
    openHouseRegionWest: "West",
    openHouseRegionCentral: "Central",
    openHouseProgramIP: "IP",
    openHouseProgramSAP: "SAP",
    openHouseProgramOLevel: "O-Level",
    openHouseLoadMore: "Load more",
    openHouseListComplete: "End of list",
    openHouseNoResults:
      "No schools match. Try another search or clear filters.",
    openHouseStayTuned: "Check back later for upcoming open houses",
    openHouseResultsSummary: "{{shown}} of {{total}} schools",
    scoreboardTitle: "PSLE COP matrix (AL, 2023–2025)",
    scoreboardSubtitle:
      "Default column: 2025 G3 non-affiliated band where published; IP schools show the IP track. Indicative data from public sources; check each school's website for official information.",
    scoreboardSearchPlaceholder: "School name (EN / 中文)…",
    scoreboardFilterRegion: "Zone",
    scoreboardFilterType: "Type",
    scoreboardAll: "All",
    scoreboardCol2025: "2025 COP",
    scoreboardColYear: "Year",
    scoreboardTrackNonIp: "Non-IP / O-Level",
    scoreboardTrackIp: "IP",
    scoreboardBadgeAffiliated: "Affiliated",
    scoreboardBadgeSap: "SAP",
    scoreboardTrendStable: "Flat vs 2024",
    scoreboardTrendUp: "Easier in 2025: higher AL than 2024",
    scoreboardTrendDown: "Tighter in 2025: lower AL than 2024",
    scoreboardExpandDetails: "History & streams",
    scoreboardCollapseDetails: "Hide detail",
    scoreboardNoResults: "No schools match your filters.",
    scoreboardShowing: "{{shown}} / {{total}} schools",
    scoreboardTypeG3: "G3",
    scoreboardTypeG2: "G2",
    scoreboardTypeG1: "G1",
    scoresPageKicker: "PSLE · 2023–2025 · 147 Schools",
    scoresPageH1: "PSLE COP Historical Dashboard",
    scoresPageLead:
      "Compare 2025 G3 (non-affiliated) posting bands, year-on-year deltas, and full 2023–2025 streams for MOE secondary schools in our table. Filter by SAP, IP, gender, and zone.",
    scoresFilterToolbarAria: "Filters: search, zone, SAP, IP, gender, sort",
    homeScoresCardTitle:
      "View 3-year PSLE COP trends for 146 secondary schools island-wide",
    homeScoresCardCta: "Open scoreboard",
    scoreboardFilterSapOnly: "SAP only",
    scoreboardFilterIpOnly: "IP only",
    scoreboardFilterBoysSchool: "Boys’ schools",
    scoreboardFilterGirlsSchool: "Girls’ schools",
    scoreboardSortLabel: "Sort",
    scoreboardSortScoreAsc: "AL low → high",
    scoreboardSortScoreDesc: "AL high → low",
    scoreboardSortName: "School name",
    scoreboardBadgeAuto: "Autonomous",
    scoreboardBadgeIp: "IP",
    scoreboardColG3NonAff: "2025 · G3 Non-Affiliated",
    scoreboardDetailMatrix: "2023–2025 streams",
    scoreboardGenderBoys: "Boys",
    scoreboardGenderGirls: "Girls",
    navSchools: "Schools",
    navDsaInterview: "Interview Prep",
    schoolsKicker: "2026 · 147 Secondary Schools",
    schoolsH1: "School Directory",
    schoolsLead: "All 147 MOE secondary schools with PSLE COP 2025 posting bands, Applied Learning Programme, Lifelong Learning Programme, and direct links to each school's DSA page and official website.",
    schoolsSearch: "Search by English or Chinese school name…",
    schoolsFilterRegion: "Region",
    schoolsFilterType: "School type",
    schoolsFilterTrack: "Programme",
    schoolsAll: "All",
    schoolsTypeGovt: "Government",
    schoolsTypeAided: "Government-aided",
    schoolsTypeIndependent: "Independent",
    schoolsTypeAutonomous: "Autonomous",
    schoolsTrackOLevel: "O-Level",
    schoolsTrackIP: "IP",
    schoolsTrackSpecialised: "Specialised",
    schoolsAlp: "Applied Learning",
    schoolsLlp: "Lifelong Learning",
    schoolsCop: "PSLE COP 2025",
    schoolsDsaLink: "DSA page",
    schoolsWebsite: "School website",
    schoolsNoResults: "No schools match your filters.",
    schoolsShowing: "{{shown}} of {{total}} schools",
    schoolsBadgeSap: "SAP",
    schoolsBadgeIp: "IP",
    schoolsAffPri: "Affiliated primary",
    schoolsOtherProg: "Other programmes",
    openHouseSortedByDate: "Sorted by Date",
    openHouseUrgencyToday: "Today",
    openHouseUrgencyTomorrow: "Tomorrow",
    openHouseUrgencyThisSat: "This Sat",
    openHouseUrgencyThisSun: "This Sun",
    openHouseUrgencyThisWeek: "This week",
    dsaFinderCrumb: "DSA Talent Search",
    dsaFinderKicker: "Official MOE SchoolFinder DSA data · 2026",
    dsaFinderBySchool: "By School",
    dsaFinderByTalent: "By Talent",
    dsaFinderShowAll: "Show all {{n}} schools",
    dsaFinderShowFewer: "Show fewer schools",
    dsaFinderPsleEstimate: "PSLE estimate: check school profile",
    dsaFinderNoMatches: "No matches yet. Try a school name, CCA, or broader category.",
    dsaFinderModeTip: "Tap a talent tag to compare schools by that talent.",
    dsaStrategySectionKicker: "The Middle-Stream DSA Strategy · 2026",
    dsaStrategySectionH2: "The Hidden Gem: Why DSA Is for 'Ordinary' Students Too",
    dsaStrategySectionLead: "Most families assume DSA is reserved for national athletes and child prodigies. The truth is more interesting: DSA competition intensity varies enormously by school and talent domain. A student who is academically average (AL†20–25) but genuinely skilled in dance, music, or robotics can secure a place in a school that would otherwise require a much higher PSLE score.",
    dsaStrategyInsightTitle: "The Matching-Game Insight",
    dsaStrategyInsightBody: "Think of DSA as a matching game, not a talent contest. A student applying for DSA-Dance at a well-ranked mainstream school is not competing against the student who wins nationals — that student is applying to RI or SOTA. The realistic pool at a mid-tier school is smaller and more accessible. Find the right school-domain combination where your child’s genuine talent meets the school’s genuine need.",
    dsaStrategyInsightFootnote: "This is the underdog pathway — used by savvy Singapore families every year.",
    dsaStrategyPslePath: "PSLE Posting",
    dsaStrategyPsleBody: "Your score determines your school. Higher AL score → more school choices. Limited by a single exam taken under pressure.",
    dsaStrategyPsleBadge: "One shot",
    dsaStrategyDsaPath: "DSA Pathway",
    dsaStrategyDsaBody: "Your documented talent determines your school — before PSLE. Academic score becomes irrelevant once a DSA offer is accepted.",
    dsaStrategyDsaBadge: "Second pathway",
    dsaStrategySmartTitle: "Smart Strategy",
    dsaStrategySmartBody: "Apply via DSA in domains where competition is thinner. Maintain PSLE performance as a safety net. Never leave both to chance.",
    dsaStrategySmartBadge: "Best of both",
    dsaStrategyWhichParent: "Which parent are you?",
    dsaStrategyWhichDesc: "Find your child’s profile to see the best DSA approach for their situation.",
    dsaStrategyGoalLabel: "Goal:",
    dsaStrategyTipLabel: "Tip:",
    dsaStrategyPersona1Title: "My child's been in CCA for years — I just never looked into DSA",
    dsaStrategyPersona1Tag: "First time exploring",
    dsaStrategyPersona1Who: "You've heard of DSA but assumed it was for Gifted Programme kids or top-tier schools. Your child has been in the same CCA for 2+ years. That's already more than most families start with.",
    dsaStrategyPersona1Goal: "Understand whether your child qualifies, and what 'evidence of talent' actually looks like in a real application.",
    dsaStrategyPersona1Tip: "DSA is open to every primary school in Singapore. What schools look for is consistent participation over time — not medals from elite programmes.",
    dsaStrategyPersona1Cta: "Start with the FAQ →",
    dsaStrategyPersona2Title: "Average grades, but genuinely strong in one area",
    dsaStrategyPersona2Tag: "Talent over grades",
    dsaStrategyPersona2Who: "PSLE predicted: AL 20–26. But your child has been training consistently — swimming, wushu, Chinese dance, or a niche STEM domain — with results to show. Their talent is real. DSA is specifically designed to recognise it.",
    dsaStrategyPersona2Goal: "Find secondary schools where their talent, not their exam score, is what gets them in.",
    dsaStrategyPersona2Tip: "Schools that would be out of reach via the normal PSLE pathway are genuinely accessible through DSA. The competition is measured on different terms.",
    dsaStrategyPersona2Cta: "Search talent areas →",
    dsaStrategyPersona3Title: "I want to secure the right school before PSLE results day",
    dsaStrategyPersona3Tag: "Locking in early",
    dsaStrategyPersona3Who: "Your child is academically on track and has a documented talent. You've seen how stressful November results day is. A Confirmed DSA Offer, in hand before PSLE, changes what that day means.",
    dsaStrategyPersona3Goal: "Use DSA strategically — secure a school that fits both their academic track and their talent — before the PSLE scramble begins.",
    dsaStrategyPersona3Tip: "With a Confirmed Offer, your PSLE target shifts from 'competing for rank' to 'meeting minimum entry requirements.' That's a completely different exam to prepare for.",
    dsaStrategyPersona3Cta: "Read the DSA Guide →",
    dsaStrategyPersona4Title: "Applications close 2 June — where do I start?",
    dsaStrategyPersona4Tag: "Deadline: 2 Jun 2026",
    dsaStrategyPersona4Who: "You found out about DSA this week. You have less than three weeks. Your child has been doing a CCA for at least a year. That's enough to start.",
    dsaStrategyPersona4Goal: "Identify 1–3 schools to apply to, gather the minimum evidence portfolio, and submit before 4:30pm on 2 June.",
    dsaStrategyPersona4Tip: "The application itself takes under an hour via the MOE portal. The real work is deciding which schools to apply to. Use DSA Finder now — it searches by talent area.",
    dsaStrategyPersona4Cta: "Use DSA Finder →",
    dsaStrategyCtaTitle: "Ready to find the right school-domain match?",
    dsaStrategyCtaBody: "Browse all 147 MOE secondary schools filtered by talent domain, ALP, LLP, and PSLE COP band.",
    dsaStrategyCtaBrowse: "Browse school directory →",
    dsaStrategyCtaInterview: "Interview prep guide →",
    subscribeKicker: "FREE RESOURCE PACK · P6 FAMILIES",
    subscribeTitle: "Everything you need to prepare — in one free pack",
    subscribeDesc: "Used by hundreds of Singapore families preparing for DSA. No upsells, no agent, just the materials.",
    subscribeMaterial1: "DSA school comparison worksheet (147 schools)",
    subscribeMaterial2: "Interview question bank by talent area",
    subscribeMaterial3: "Open house field guide — what to ask & observe",
    subscribeMaterial4: "2026 application timeline & deadline checklist",
    subscribeFormLabel: "Get the free pack",
    subscribeBtn: "Send me the pack →",
    subscribeBtnLoading: "Sending…",
    subscribeSuccessTitle: "Pack on its way.",
    subscribeSuccessDesc: "Check your inbox — we'll send the materials within 24 hours.",
    subscribeDisclaimer: "Free. No spam. Unsubscribe anytime.",
    dsaExpPageCrumb: "DSA Experience Guide",
    dsaExpPageKicker: "Parent playbook",
    dsaExpPageTitle: "DSA Experience Guide",
    dsaExpPageSubtitle:
      "What actually works in Singapore DSA — school selectivity, talent bars, timelines, and mistakes to avoid. Synthesised from parent forums, MOE rules, and real case patterns.",
    dsaExpLangNotice: "",
    ...dsaGuideEn,
  },
  zh: {
    metaTitle: "DSA Link 新加坡 | DSA 2026 倒计时与官方入口导航",
    metaDescription:
      "为家长整理新加坡直接收生计划（DSA）官方入口、2026 申请截止倒计时与实用指引 — DSA Link（dsalink.sg）。",
    navBrand: "DSA Link",
    navTagline: "新加坡 · DSA 2026",
    countdownLabel: "距离 DSA 2026 申请截止（参考大日期）",
    countdownComplete: "倒计时已结束 — 请以 MOE 最新公布为准。",
    countdownDays: "天",
    countdownHours: "小时",
    countdownMinutes: "分钟",
    countdownSeconds: "秒",
    countdownDeadlineLine: "Closing: 2 Jun 2026 · 16:30 SGT",
    ctaPrimary: "找找孩子才能匹配的学校",
    ctaSecondary: "了解 DSA 申请流程",
    sectionLinksTitle: "官方链接与升学指南",
    sectionLinksDesc: "以下链接均在新标签页打开，请务必以 MOE 官网信息为准。",
    linkMoeTitle: "教育部 · DSA（中学）",
    linkMoeDesc: "政策说明、适用对象与申请流程总览。",
    linkSchoolsTitle: "学校搜索与 DSA",
    linkSchoolsDesc: "查找学校及其公布的 DSA 信息。",
    linkPortalTitle: "报名系统入口",
    linkPortalDesc: "开放期间请通过官方电子服务提交申请。",
    footerRights: "© dsalink.sg · 助力家长从容应对新加坡 DSA",
    extHint: "外部链接",
    a11yLanguageSelector: "选择语言",
    heroSearchPlaceholder: "搜索学校或特长（如：机器人、舞蹈）…",
    openHouseKicker: "2026年5月 · 全岛",
    sectionOpenHouseTitle: "中学开放日 · DSA 与招生",
    sectionOpenHouseDesc:
      "收录 MOE 名录中 147 所中学：中英文校名、区域、学校类型与官网 DSA/招生链接。开放日时间除已公布者外暂标为 2026 年 5 月（待定），请以各校页面为准。",
    openHouseOfficialLink: "官方开放日 / 招生页面",
    openHouseOfficialBooking: "DSA / 招生",
    openHouseSchoolLink: "学校主页",
    openHouseOnsite: "线下",
    openHouseOnline: "线上",
    openHouseTime: "时间",
    openHouseAddress: "地址",
    openHouseStatusUpcoming: "即将开放",
    openHouseStatusOngoing: "火热进行中",
    openHouseStatusFinished: "已结束",
    navFaq: "常见问答",
    navDsaGuide: "DSA 指南",
    navDsaFinder: "DSA 搜索",
    navOpenHouses: "开放日",
    navOpenHouseGuide: "开放日指南",
    navScores: "PSLE COP",
    navMenu: "菜单",
    navClose: "关闭菜单",
    openHousePreviewTitle: "预告：5 月校园开放日",
    openHousePreviewDesc: "日历中最近的场次速览；完整名单与官网链接请见内页。",
    openHouseViewFullCalendar: "查看完整日历 →",
    openHouseFilterAll: "全部学校",
    openHouseFilterPopular: "热门推荐",
    openHouseBadgePopular: "热门",
    openHouseSearchPlaceholder: "输入英文或中文校名搜索…",
    openHouseSearchAria: "搜索学校",
    openHouseFiltersRegion: "区域",
    openHouseFiltersProgram: "课程类型",
    openHouseRegionNorth: "北部",
    openHouseRegionSouth: "南部",
    openHouseRegionEast: "东部",
    openHouseRegionWest: "西部",
    openHouseRegionCentral: "中部",
    openHouseProgramIP: "直通车 IP",
    openHouseProgramSAP: "特选 SAP",
    openHouseProgramOLevel: "O 水准主流",
    openHouseLoadMore: "加载更多",
    openHouseListComplete: "已显示全部",
    openHouseNoResults: "没有符合的学校，请调整搜索或筛选。",
    openHouseStayTuned: "稍后再来查看即将到来的开放日",
    openHouseResultsSummary: "显示 {{shown}} / 共 {{total}} 所",
    scoreboardTitle: "PSLE COP 矩阵（AL · 2023–2025）",
    scoreboardSubtitle:
      "默认列为 2025 年 G3 对外招生档；有 IP 则显示 IP 轨。数据由公开资料汇总仅供参考，请以各校官网为准。",
    scoreboardSearchPlaceholder: "校名（中 / 英）…",
    scoreboardFilterRegion: "区域",
    scoreboardFilterType: "类型",
    scoreboardAll: "全部",
    scoreboardCol2025: "2025 截分",
    scoreboardColYear: "年份",
    scoreboardTrackNonIp: "非 IP（O 水准等）",
    scoreboardTrackIp: "直通车 IP",
    scoreboardBadgeAffiliated: "直属",
    scoreboardBadgeSap: "特选 SAP",
    scoreboardTrendStable: "走势平稳",
    scoreboardTrendUp: "截分趋宽（AL 升高）",
    scoreboardTrendDown: "截分趋紧（AL 降低）",
    scoreboardExpandDetails: "展开走势与细分",
    scoreboardCollapseDetails: "收起明细",
    scoreboardNoResults: "没有符合筛选的学校。",
    scoreboardShowing: "{{shown}} / 共 {{total}} 所",
    scoreboardTypeG3: "G3",
    scoreboardTypeG2: "G2",
    scoreboardTypeG1: "G1",
    scoresPageKicker: "PSLE · 2023–2025 · 147 所中学",
    scoresPageH1: "PSLE COP 历年数据看板",
    scoresPageLead:
      "对比 2025 G3 对外分档、相对 2024 的松紧变化，以及 2023–2025 全细分。可按特选、IP、单性别与区域筛选。",
    scoresFilterToolbarAria: "筛选：搜索、区域、特选、IP、性别、排序",
    homeScoresCardTitle: "查看全岛 146 所中学 3 年 PSLE 分数趋势",
    homeScoresCardCta: "进入分数看板",
    scoreboardFilterSapOnly: "仅特选 SAP",
    scoreboardFilterIpOnly: "仅直通车 IP",
    scoreboardFilterBoysSchool: "男校",
    scoreboardFilterGirlsSchool: "女校",
    scoreboardSortLabel: "排序",
    scoreboardSortScoreAsc: "AL 从低到高",
    scoreboardSortScoreDesc: "AL 从高到低",
    scoreboardSortName: "校名",
    scoreboardBadgeAuto: "自主",
    scoreboardBadgeIp: "IP",
    scoreboardColG3NonAff: "2025 · G3 对外档",
    scoreboardDetailMatrix: "2023–2025 细分",
    scoreboardGenderBoys: "男校",
    scoreboardGenderGirls: "女校",
    navSchools: "学校目录",
    navDsaInterview: "面试准备",
    schoolsKicker: "2026 · 147所中学",
    schoolsH1: "中学目录",
    schoolsLead: "全部147所MOE中学，含2025年PSLE报读分数段、应用学习课程（ALP）、终身学习课程（LLP），以及每所学校的DSA报名页面和官方网址直链。",
    schoolsSearch: "用英文或中文名称搜索学校…",
    schoolsFilterRegion: "地区",
    schoolsFilterType: "学校类型",
    schoolsFilterTrack: "课程",
    schoolsAll: "全部",
    schoolsTypeGovt: "政府学校",
    schoolsTypeAided: "政府辅助学校",
    schoolsTypeIndependent: "自主学校",
    schoolsTypeAutonomous: "自治学校",
    schoolsTrackOLevel: "O水准",
    schoolsTrackIP: "综合课程（IP）",
    schoolsTrackSpecialised: "特殊学校",
    schoolsAlp: "应用学习课程",
    schoolsLlp: "终身学习课程",
    schoolsCop: "2025年PSLE报读分数",
    schoolsDsaLink: "DSA报名页面",
    schoolsWebsite: "学校官网",
    schoolsNoResults: "没有符合条件的学校。",
    schoolsShowing: "{{shown}} / {{total}} 所学校",
    schoolsBadgeSap: "特别辅助计划",
    schoolsBadgeIp: "综合课程",
    schoolsAffPri: "直属小学",
    schoolsOtherProg: "其他课程",
    openHouseSortedByDate: "按日期排序",
    openHouseUrgencyToday: "今天",
    openHouseUrgencyTomorrow: "明天",
    openHouseUrgencyThisSat: "本周六",
    openHouseUrgencyThisSun: "本周日",
    openHouseUrgencyThisWeek: "本周内",
    dsaFinderCrumb: "DSA 特长搜索",
    dsaFinderKicker: "MOE SchoolFinder 官方 DSA 数据 · 2026",
    dsaFinderBySchool: "按学校",
    dsaFinderByTalent: "按特长",
    dsaFinderShowAll: "显示全部 {{n}} 所学校",
    dsaFinderShowFewer: "收起学校列表",
    dsaFinderPsleEstimate: "PSLE 参考分：请查看学校详情",
    dsaFinderNoMatches: "暂无匹配，请尝试学校名称、课外活动或更宽泛的关键词。",
    dsaFinderModeTip: "点击特长标签，即可对比各校在该领域的招生情况。",
    dsaStrategySectionKicker: "中游家庭的 DSA 突围策略 · 2026",
    dsaStrategySectionH2: "被低估的出路：DSA 不只是尖子生的专利",
    dsaStrategySectionLead: "许多家长以为 DSA 只属于全国级运动员或天才儿童。实际情况更有意思：不同学校、不同特长领域的 DSA 竞争激烈程度差异悬殊。一个 PSLE 成绩中等（AL 20–25）、但在舞蹈、音乐或机器人方面真正有料的孩子，完全可以通过 DSA 进入原本需要高分才能报读的学校。",
    dsaStrategyInsightTitle: "供需匹配的逻辑",
    dsaStrategyInsightBody: "把 DSA 理解为一场供需匹配，而非才艺比拼。在一所口碑良好的主流学校报名 DSA 舞蹈的学生，对手并不是全国冠军——那类学生早已瞄准莱佛士书院或 SOTA。一所中上游学校的竞争池规模更小，也更容易进入。关键在于找到一个「孩子的真实特长恰好符合学校招生需求」的最佳组合。",
    dsaStrategyInsightFootnote: "这就是精明的新加坡家庭年复一年在用的逆袭策略。",
    dsaStrategyPslePath: "PSLE 分配录取",
    dsaStrategyPsleBody: "分数决定学校，AL 越高选择越多。一切取决于一场高压考试的发挥。",
    dsaStrategyPsleBadge: "唯一机会",
    dsaStrategyDsaPath: "DSA 直通录取",
    dsaStrategyDsaBody: "你的特长档案决定学校，在 PSLE 之前就定下来。一旦接受 DSA 录取，学术成绩不再是门槛。",
    dsaStrategyDsaBadge: "另一条路",
    dsaStrategySmartTitle: "聪明的策略",
    dsaStrategySmartBody: "选择竞争相对薄弱的 DSA 领域主动出击，同时保持 PSLE 备选。两手都要抓，两手都要稳。",
    dsaStrategySmartBadge: "两全其美",
    dsaStrategyWhichParent: "你是哪类家长？",
    dsaStrategyWhichDesc: "找到最符合孩子情况的画像，了解适合他们的 DSA 策略。",
    dsaStrategyGoalLabel: "目标：",
    dsaStrategyTipLabel: "建议：",
    dsaStrategyPersona1Title: "孩子 CCA 参加了好几年——我从没认真了解过 DSA",
    dsaStrategyPersona1Tag: "第一次了解",
    dsaStrategyPersona1Who: "你听说过 DSA，但一直以为那是给\"天才班\"孩子或顶级小学才适合的。你的孩子已经在同一个 CCA 坚持了 2 年以上——这已经比大多数家庭的起点要好。",
    dsaStrategyPersona1Goal: "搞清楚孩子是否符合条件，以及在真实申请中\"才能证明\"到底是什么样的。",
    dsaStrategyPersona1Tip: "DSA 面向新加坡所有小学。学校看的是稳定、持续的参与记录——不是精英培训机构的奖杯。",
    dsaStrategyPersona1Cta: "先读 DSA 常见问答 →",
    dsaStrategyPersona2Title: "成绩中等，但在某个领域确实有料",
    dsaStrategyPersona2Tag: "才能高于成绩",
    dsaStrategyPersona2Who: "PSLE 预测 AL 20–26。但孩子一直在认真训练——游泳、武术、华族舞蹈，或某个 STEM 细分领域——而且有成绩可以证明。孩子的才能是真实的。DSA 恰恰是为了识别这样的才能而设计的。",
    dsaStrategyPersona2Goal: "找到以才能而非考试分数录取的中学，让孩子进入原本靠 PSLE 进不了的学校。",
    dsaStrategyPersona2Tip: "通过 DSA 才能通道，那些\"分数够不着\"的学校是真实可以申请的。竞争维度不同——不是考试排名，而是才能匹配。",
    dsaStrategyPersona2Cta: "搜索才能领域 →",
    dsaStrategyPersona3Title: "想在 PSLE 放榜前先锁定一所合适的学校",
    dsaStrategyPersona3Tag: "提前锁定",
    dsaStrategyPersona3Who: "孩子学业进展稳定，同时有才能记录。你见过 11 月放榜日的压力有多大。手握一份 DSA Confirmed Offer，放榜那天的意义就完全不一样了。",
    dsaStrategyPersona3Goal: "战略性地使用 DSA——在 PSLE 放榜前，锁定一所同时符合学业方向和才能兴趣的学校。",
    dsaStrategyPersona3Tip: "有了 Confirmed Offer，PSLE 的目标就从\"竞争名次\"变成了\"达到最低入学要求\"——这是完全不同的备考心态。",
    dsaStrategyPersona3Cta: "阅读 DSA 完整指南 →",
    dsaStrategyPersona4Title: "截止日期是 6 月 2 日——我从哪里开始？",
    dsaStrategyPersona4Tag: "截止：2026年6月2日",
    dsaStrategyPersona4Who: "你这周才听说 DSA，距离截止日期不到三周。孩子至少参加了一年 CCA——这已经够了。",
    dsaStrategyPersona4Goal: "确定 1–3 所要申请的学校，准备最基本的才能证明材料，在 6 月 2 日下午 4:30 前提交。",
    dsaStrategyPersona4Tip: "申请本身通过 MOE 门户不到一小时就能完成。真正要做的事是决定申请哪几所学校——现在就用 DSA 搜索器，按才能领域查。",
    dsaStrategyPersona4Cta: "现在使用 DSA 搜索器 →",
    dsaStrategyCtaTitle: "准备好为孩子找到最合适的学校与特长搭配了吗？",
    dsaStrategyCtaBody: "浏览全部 147 所 MOE 中学，可按特长领域、ALP、LLP 和 PSLE COP 分段筛选。",
    dsaStrategyCtaBrowse: "浏览学校目录 →",
    dsaStrategyCtaInterview: "面试备考指南 →",
    subscribeKicker: "免费资料包 · 小六家庭专属",
    subscribeTitle: "备考所需的一切，全部免费打包送上",
    subscribeDesc: "已有数百个新加坡家庭用于 DSA 备考。无附加销售，无中介，只有干货。",
    subscribeMaterial1: "DSA 学校对比表（147 所中学）",
    subscribeMaterial2: "按才能领域分类的面试题库",
    subscribeMaterial3: "开放日现场指引——该问什么、该观察什么",
    subscribeMaterial4: "2026 年申请时间轴与截止日期清单",
    subscribeFormLabel: "领取免费资料包",
    subscribeBtn: "发给我 →",
    subscribeBtnLoading: "发送中…",
    subscribeSuccessTitle: "资料包已在路上。",
    subscribeSuccessDesc: "请查收邮件——我们将在 24 小时内发送材料。",
    subscribeDisclaimer: "免费。无垃圾邮件。随时退订。",
    dsaExpPageCrumb: "DSA 经验指南",
    dsaExpPageKicker: "家长实战手册",
    dsaExpPageTitle: "DSA 经验指南",
    dsaExpPageSubtitle:
      "新加坡 DSA 真正有效的方法——学校选拔性、才能门槛、时间轴与常见错误。综合家长社区、MOE 规定与真实案例整理。",
    dsaExpLangNotice:
      "本指南目前仅提供英文正文。标题与导航已翻译；完整中文版即将上线。",
    ...dsaGuideZh,
  },
  ms: {
    metaTitle: "DSA Link Singapura | Kiraan Detik DSA 2026 & Sumber Rasmi",
    metaDescription:
      "Navigasi Penempatan Langsung ke Sekolah Menengah (DSA) Singapura dengan pautan rasmi yang dipercayai, kiraan detik permohonan 2026, dan panduan jelas untuk ibu bapa — DSA Link (dsalink.sg).",
    navBrand: "DSA Link",
    navTagline: "Singapura · DSA 2026",
    countdownLabel: "Masa sehingga permohonan DSA 2026 ditutup",
    countdownComplete:
      "Kiraan detik tamat — sila sahkan tarikh akhir terkini di laman MOE.",
    countdownDays: "Hari",
    countdownHours: "Jam",
    countdownMinutes: "Minit",
    countdownSeconds: "Saat",
    countdownDeadlineLine: "Closing: 2 Jun 2026 · 16:30 SGT",
    ctaPrimary: "Cari sekolah untuk bakat anak anda",
    ctaSecondary: "Baca Panduan DSA",
    sectionLinksTitle: "Pautan rasmi & panduan",
    sectionLinksDesc:
      "Semua destinasi dibuka dalam tab baharu. Sentiasa sahkan butiran di laman rasmi MOE.",
    linkMoeTitle: "MOE · DSA (Menengah)",
    linkMoeDesc: "Gambaran keseluruhan, kelayakan, dan cara latihan ini berjalan.",
    linkSchoolsTitle: "Pencari sekolah & DSA",
    linkSchoolsDesc: "Cari sekolah dan maklumat DSA yang diterbitkan.",
    linkPortalTitle: "Portal permohonan",
    linkPortalDesc:
      "Apabila tempoh permohonan dibuka, hantar melalui e-perkhidmatan rasmi.",
    footerRights:
      "© dsalink.sg · Untuk ibu bapa yang menavigasi DSA di Singapura",
    extHint: "Pautan luar",
    a11yLanguageSelector: "Pilih bahasa",
    heroSearchPlaceholder: "Cari sekolah atau bakat (cth: Robotik, Tarian)…",
    openHouseKicker: "Mei 2026 · Seluruh Pulau",
    sectionOpenHouseTitle: "Hari Terbuka Sekolah Menengah · DSA & Kemasukan",
    sectionOpenHouseDesc:
      "147 sekolah menengah (direktori MOE, 2026) dengan nama dwibahasa, kawasan, jenis sekolah, dan pautan rasmi DSA / kemasukan. Masa hari terbuka adalah Mei 2026 (TBC) melainkan sekolah telah menerbitkan tarikh — sentiasa sahkan di laman rasmi setiap sekolah.",
    openHouseOfficialLink: "Hari terbuka / kemasukan rasmi",
    openHouseOfficialBooking: "DSA / kemasukan",
    openHouseSchoolLink: "Laman web sekolah",
    openHouseOnsite: "Di tapak",
    openHouseOnline: "Dalam talian",
    openHouseTime: "Masa",
    openHouseAddress: "Alamat",
    openHouseStatusUpcoming: "Akan datang",
    openHouseStatusOngoing: "Sedang berlangsung",
    openHouseStatusFinished: "Tamat",
    navFaq: "Soalan Lazim",
    navDsaGuide: "Panduan DSA",
    navDsaFinder: "Pencari DSA",
    navOpenHouses: "Hari terbuka",
    navOpenHouseGuide: "Panduan Hari Terbuka",
    navScores: "PSLE COP",
    navMenu: "Menu",
    navClose: "Tutup menu",
    openHousePreviewTitle: "Akan datang: hari terbuka Mei",
    openHousePreviewDesc:
      "Gambaran pantas sesi seterusnya pada kalendar kami — senarai penuh & pautan rasmi di halaman seterusnya.",
    openHouseViewFullCalendar: "Lihat kalendar penuh →",
    openHouseFilterAll: "Semua sekolah",
    openHouseFilterPopular: "Pilihan popular",
    openHouseBadgePopular: "Popular",
    openHouseSearchPlaceholder: "Cari nama sekolah (Inggeris atau Cina)…",
    openHouseSearchAria: "Cari sekolah",
    openHouseFiltersRegion: "Kawasan",
    openHouseFiltersProgram: "Program",
    openHouseRegionNorth: "Utara",
    openHouseRegionSouth: "Selatan",
    openHouseRegionEast: "Timur",
    openHouseRegionWest: "Barat",
    openHouseRegionCentral: "Pusat",
    openHouseProgramIP: "IP",
    openHouseProgramSAP: "SAP",
    openHouseProgramOLevel: "O-Level",
    openHouseLoadMore: "Muat lagi",
    openHouseListComplete: "Senarai lengkap",
    openHouseNoResults:
      "Tiada sekolah sepadan. Cuba carian atau penapis lain.",
    openHouseStayTuned: "Semak semula kemudian untuk hari terbuka akan datang",
    openHouseResultsSummary: "{{shown}} daripada {{total}} sekolah",
    scoreboardTitle: "Matriks COP PSLE (AL, 2023–2025)",
    scoreboardSubtitle:
      "Lalai: jalur G3 Non-Affiliated 2025; sekolah IP menunjukkan jalur IP. Data anggaran daripada sumber awam; rujuk laman rasmi sekolah.",
    scoreboardSearchPlaceholder: "Nama sekolah…",
    scoreboardFilterRegion: "Zon",
    scoreboardFilterType: "Jenis",
    scoreboardAll: "Semua",
    scoreboardCol2025: "COP 2025",
    scoreboardColYear: "Tahun",
    scoreboardTrackNonIp: "Bukan-IP",
    scoreboardTrackIp: "IP",
    scoreboardBadgeAffiliated: "Berkaitan",
    scoreboardBadgeSap: "SAP",
    scoreboardTrendStable: "Stabil",
    scoreboardTrendUp: "COP longgar",
    scoreboardTrendDown: "COP ketat",
    scoreboardExpandDetails: "Sejarah & aliran",
    scoreboardCollapseDetails: "Tutup",
    scoreboardNoResults: "Tiada sekolah sepadan.",
    scoreboardShowing: "{{shown}} / {{total}} sekolah",
    scoreboardTypeG3: "G3",
    scoreboardTypeG2: "G2",
    scoreboardTypeG1: "G1",
    scoresPageKicker: "PSLE · 2023–2025 · 147 Sekolah",
    scoresPageH1: "Papan Sejarah PSLE COP (2023–2025)",
    scoresPageLead:
      "Bandingkan G3 2025, perubahan berbanding 2024, dan semua aliran 2023–2025. Tapis SAP, IP, jantina, zon.",
    scoresFilterToolbarAria: "Penapis: carian, zon, SAP, IP, jantina, isihan",
    homeScoresCardTitle:
      "Lihat trend COP PSLE 3 tahun untuk 146 sekolah menengah",
    homeScoresCardCta: "Buka papan skor",
    scoreboardFilterSapOnly: "SAP sahaja",
    scoreboardFilterIpOnly: "IP sahaja",
    scoreboardFilterBoysSchool: "Sekolah lelaki",
    scoreboardFilterGirlsSchool: "Sekolah perempuan",
    scoreboardSortLabel: "Isihan",
    scoreboardSortScoreAsc: "AL rendah → tinggi",
    scoreboardSortScoreDesc: "AL tinggi → rendah",
    scoreboardSortName: "Nama sekolah",
    scoreboardBadgeAuto: "Autonomi",
    scoreboardBadgeIp: "IP",
    scoreboardColG3NonAff: "2025 · G3 Tidak Berkaitan",
    scoreboardDetailMatrix: "Aliran 2023–2025",
    scoreboardGenderBoys: "Lelaki",
    scoreboardGenderGirls: "Perempuan",
    navSchools: "Sekolah",
    navDsaInterview: "Persediaan Temuduga",
    schoolsKicker: "2026 · 147 Sekolah Menengah",
    schoolsH1: "Direktori Sekolah",
    schoolsLead: "Semua 147 sekolah menengah MOE dengan band PSLE COP 2025, Program Pembelajaran Gunaan (ALP), Program Pembelajaran Seumur Hidup (LLP), dan pautan langsung ke halaman DSA dan laman web rasmi setiap sekolah.",
    schoolsSearch: "Cari mengikut nama sekolah Inggeris atau Cina…",
    schoolsFilterRegion: "Kawasan",
    schoolsFilterType: "Jenis sekolah",
    schoolsFilterTrack: "Program",
    schoolsAll: "Semua",
    schoolsTypeGovt: "Kerajaan",
    schoolsTypeAided: "Berbantuan kerajaan",
    schoolsTypeIndependent: "Bebas",
    schoolsTypeAutonomous: "Autonomi",
    schoolsTrackOLevel: "O-Level",
    schoolsTrackIP: "IP",
    schoolsTrackSpecialised: "Khusus",
    schoolsAlp: "Pembelajaran Gunaan",
    schoolsLlp: "Pembelajaran Seumur Hidup",
    schoolsCop: "PSLE COP 2025",
    schoolsDsaLink: "Halaman DSA",
    schoolsWebsite: "Laman web sekolah",
    schoolsNoResults: "Tiada sekolah yang sepadan.",
    schoolsShowing: "{{shown}} daripada {{total}} sekolah",
    schoolsBadgeSap: "SAP",
    schoolsBadgeIp: "IP",
    schoolsAffPri: "Sekolah rendah berkaitan",
    schoolsOtherProg: "Program lain",
    openHouseSortedByDate: "Diisih mengikut Tarikh",
    openHouseUrgencyToday: "Hari ini",
    openHouseUrgencyTomorrow: "Esok",
    openHouseUrgencyThisSat: "Sabtu ini",
    openHouseUrgencyThisSun: "Ahad ini",
    openHouseUrgencyThisWeek: "Minggu ini",
    dsaFinderCrumb: "Pencarian Bakat DSA",
    dsaFinderKicker: "Data DSA rasmi MOE SchoolFinder · 2026",
    dsaFinderBySchool: "Mengikut Sekolah",
    dsaFinderByTalent: "Mengikut Bakat",
    dsaFinderShowAll: "Tunjukkan semua {{n}} sekolah",
    dsaFinderShowFewer: "Tunjukkan lebih sedikit",
    dsaFinderPsleEstimate: "Anggaran PSLE: semak profil sekolah",
    dsaFinderNoMatches: "Tiada padanan. Cuba nama sekolah, CCA, atau kategori yang lebih luas.",
    dsaFinderModeTip: "Ketik tanda bakat untuk membandingkan sekolah mengikut bakat tersebut.",
    dsaStrategySectionKicker: "Strategi DSA Arus Tengah · 2026",
    dsaStrategySectionH2: "Rahsia Tersembunyi: DSA Bukan Hanya untuk Pelajar Cemerlang",
    dsaStrategySectionLead: "Kebanyakan keluarga beranggapan DSA hanya untuk atlet negara atau pelajar prodigy. Hakikatnya lebih menarik: intensiti persaingan DSA berbeza-beza mengikut sekolah dan domain bakat. Pelajar yang sederhana dari segi akademik (AL 20–25) tetapi benar-benar mahir dalam tarian, muzik, atau robotik boleh mendapat tempat di sekolah yang biasanya memerlukan skor PSLE yang jauh lebih tinggi.",
    dsaStrategyInsightTitle: "Logik Padanan Sekolah",
    dsaStrategyInsightBody: "Anggap DSA sebagai permainan padanan, bukan pertandingan bakat. Pelajar yang memohon DSA-Tari di sekolah arus perdana yang baik tidak bersaing dengan pemenang peringkat kebangsaan — pelajar itu memohon ke RI atau SOTA. Kolam persaingan sebenar di sekolah pertengahan adalah lebih kecil dan lebih mudah dicapai. Cari kombinasi sekolah-domain yang tepat di mana bakat tulen anak anda memenuhi keperluan sebenar sekolah tersebut.",
    dsaStrategyInsightFootnote: "Inilah strategi underdog yang digunakan oleh keluarga Singapura yang bijak setiap tahun.",
    dsaStrategyPslePath: "Penempatan PSLE",
    dsaStrategyPsleBody: "Skor anda menentukan sekolah anda. AL lebih tinggi → lebih banyak pilihan. Dibatasi oleh satu peperiksaan di bawah tekanan.",
    dsaStrategyPsleBadge: "Satu peluang",
    dsaStrategyDsaPath: "Laluan DSA",
    dsaStrategyDsaBody: "Bakat yang didokumentasikan menentukan sekolah anda — sebelum PSLE. Skor akademik menjadi tidak relevan setelah tawaran DSA diterima.",
    dsaStrategyDsaBadge: "Laluan kedua",
    dsaStrategySmartTitle: "Strategi Bijak",
    dsaStrategySmartBody: "Mohon melalui DSA dalam domain yang kurang bersaing. Kekalkan prestasi PSLE sebagai jaring keselamatan. Jangan biarkan kedua-duanya bergantung kepada nasib.",
    dsaStrategySmartBadge: "Terbaik kedua-duanya",
    dsaStrategyWhichParent: "Ibu bapa jenis manakah anda?",
    dsaStrategyWhichDesc: "Cari profil anak anda untuk melihat pendekatan DSA terbaik bagi situasi mereka.",
    dsaStrategyGoalLabel: "Matlamat:",
    dsaStrategyTipLabel: "Petua:",
    dsaStrategyPersona1Title: "Anak saya sudah bertahun-tahun dalam CCA — cuma saya belum pernah benar-benar teliti DSA",
    dsaStrategyPersona1Tag: "Kali pertama meneroka",
    dsaStrategyPersona1Who: "Anda pernah dengar tentang DSA, tetapi menyangka ia hanya untuk murid Gifted Programme atau sekolah elit. Anak anda sudah berada dalam CCA yang sama selama 2+ tahun. Itu sudah lebih baik daripada titik mula kebanyakan keluarga.",
    dsaStrategyPersona1Goal: "Fahami sama ada anak anda layak, dan bagaimana rupa \"bukti bakat\" dalam permohonan sebenar.",
    dsaStrategyPersona1Tip: "DSA terbuka kepada setiap sekolah rendah di Singapura. Sekolah mencari penyertaan yang konsisten dari masa ke masa — bukan medal daripada program elit.",
    dsaStrategyPersona1Cta: "Mulakan dengan Soalan Lazim →",
    dsaStrategyPersona2Title: "Gred sederhana, tetapi benar-benar kuat dalam satu bidang",
    dsaStrategyPersona2Tag: "Bakat mengatasi gred",
    dsaStrategyPersona2Who: "Jangkaan PSLE: AL 20–26. Tetapi anak anda berlatih secara konsisten — renang, wushu, tarian Cina, atau domain STEM khusus — dengan pencapaian untuk dibuktikan. Bakat mereka nyata. DSA direka khas untuk mengiktiraf bakat seperti itu.",
    dsaStrategyPersona2Goal: "Cari sekolah menengah yang menerima mereka kerana bakat, bukan skor peperiksaan.",
    dsaStrategyPersona2Tip: "Sekolah yang sukar dicapai melalui laluan PSLE biasa memang boleh dicapai melalui DSA. Persaingan diukur dengan cara yang berbeza.",
    dsaStrategyPersona2Cta: "Cari bidang bakat →",
    dsaStrategyPersona3Title: "Saya mahu kunci sekolah yang sesuai sebelum hari keputusan PSLE",
    dsaStrategyPersona3Tag: "Kunci lebih awal",
    dsaStrategyPersona3Who: "Anak anda berprestasi baik secara akademik dan mempunyai bakat yang didokumentasikan. Anda sudah lihat betapa tertekannya hari keputusan November. Tawaran DSA yang Disahkan, di tangan sebelum PSLE, mengubah makna hari itu.",
    dsaStrategyPersona3Goal: "Gunakan DSA secara strategik — kunci sekolah yang sesuai dengan laluan akademik dan bakat mereka — sebelum perebutan PSLE bermula.",
    dsaStrategyPersona3Tip: "Dengan Tawaran Disahkan, sasaran PSLE berubah daripada \"bersaing untuk ranking\" kepada \"memenuhi syarat minimum kemasukan.\" Itu persediaan peperiksaan yang sama sekali berbeza.",
    dsaStrategyPersona3Cta: "Baca Panduan DSA →",
    dsaStrategyPersona4Title: "Permohonan tutup 2 Jun — mula dari mana?",
    dsaStrategyPersona4Tag: "Tarikh akhir: 2 Jun 2026",
    dsaStrategyPersona4Who: "Anda baru mengetahui tentang DSA minggu ini. Anda ada kurang daripada tiga minggu. Anak anda sudah menyertai CCA sekurang-kurangnya setahun. Itu cukup untuk bermula.",
    dsaStrategyPersona4Goal: "Kenal pasti 1–3 sekolah untuk dimohon, kumpulkan portfolio bukti minimum, dan hantar sebelum 4:30 petang pada 2 Jun.",
    dsaStrategyPersona4Tip: "Permohonan itu sendiri mengambil masa kurang daripada sejam melalui portal MOE. Kerja sebenar ialah memutuskan sekolah mana yang hendak dimohon. Gunakan Pencari DSA sekarang — ia mencari mengikut bidang bakat.",
    dsaStrategyPersona4Cta: "Gunakan Pencari DSA →",
    dsaStrategyCtaTitle: "Bersedia untuk mencari padanan sekolah-domain yang tepat?",
    dsaStrategyCtaBody: "Layari semua 147 sekolah menengah MOE ditapis mengikut domain bakat, ALP, LLP, dan band COP PSLE.",
    dsaStrategyCtaBrowse: "Layari direktori sekolah →",
    dsaStrategyCtaInterview: "Panduan persediaan temuduga →",
    subscribeKicker: "PAKEJ SUMBER PERCUMA · KELUARGA DARJAH 6",
    subscribeTitle: "Semua yang anda perlukan untuk bersedia — dalam satu pakej percuma",
    subscribeDesc: "Digunakan oleh ratusan keluarga Singapura yang bersedia untuk DSA. Tiada jualan tambahan, tiada ejen, hanya bahan.",
    subscribeMaterial1: "Lembaran perbandingan sekolah DSA (147 sekolah)",
    subscribeMaterial2: "Bank soalan temuduga mengikut bidang bakat",
    subscribeMaterial3: "Panduan lawatan rumah terbuka — apa yang perlu ditanya & diperhatikan",
    subscribeMaterial4: "Senarai semak garis masa permohonan & tarikh akhir 2026",
    subscribeFormLabel: "Dapatkan pakej percuma",
    subscribeBtn: "Hantar kepada saya →",
    subscribeBtnLoading: "Menghantar…",
    subscribeSuccessTitle: "Pakej sedang dalam perjalanan.",
    subscribeSuccessDesc: "Semak peti masuk anda — kami akan menghantar bahan dalam masa 24 jam.",
    subscribeDisclaimer: "Percuma. Tiada spam. Berhenti langgan bila-bila masa.",
    dsaExpPageCrumb: "Panduan Pengalaman DSA",
    dsaExpPageKicker: "Buku panduan ibu bapa",
    dsaExpPageTitle: "Panduan Pengalaman DSA",
    dsaExpPageSubtitle:
      "Apa yang benar-benar berkesan dalam DSA Singapura — selektiviti sekolah, aras bakat, garis masa dan kesilapan yang perlu dielakkan.",
    dsaExpLangNotice:
      "Panduan ini kini hanya tersedia dalam bahasa Inggeris. Versi Bahasa Malaysia akan datang tidak lama lagi.",
    ...dsaGuideMs,
  },
  ta: {
    metaTitle:
      "DSA Link சிங்கப்பூர் | DSA 2026 அதிகாரப்பூர்வ கவுண்ட்டவுன் & வளங்கள்",
    metaDescription:
      "நம்பகமான அதிகாரப்பூர்வ இணைப்புகள், 2026 விண்ணப்ப முடிவுக்கான எண்ணிக்கை, தெளிவான பெற்றோர் வழிகாட்டிகளுடன் சிங்கப்பூர் நேரடி பள்ளி சேர்க்கை (DSA) — DSA Link (dsalink.sg).",
    navBrand: "DSA Link",
    navTagline: "சிங்கப்பூர் · DSA 2026",
    countdownLabel: "DSA 2026 விண்ணப்பம் மூடப்படும் வரையிலான நேரம்",
    countdownComplete:
      "கவுண்ட்டவுன் முடிந்தது — சமீபத்திய காலக்கெடுவை MOE இல் சரிபார்க்கவும்.",
    countdownDays: "நாட்கள்",
    countdownHours: "மணிநேரம்",
    countdownMinutes: "நிமிடங்கள்",
    countdownSeconds: "வினாடிகள்",
    countdownDeadlineLine: "Closing: 2 Jun 2026 · 16:30 SGT",
    ctaPrimary: "உங்கள் குழந்தையின் திறமைக்கான பள்ளிகளை கண்டறியவும்",
    ctaSecondary: "DSA வழிகாட்டியைப் படிக்கவும்",
    sectionLinksTitle: "அதிகாரப்பூர்வ இணைப்புகள் & வழிகாட்டிகள்",
    sectionLinksDesc:
      "அனைத்தும் புதிய தாவலில் திறக்கப்படும். அதிகாரப்பூர்வ MOE வலைத்தளத்தில் விவரங்களை உறுதிப்படுத்தவும்.",
    linkMoeTitle: "MOE · DSA (இடைநிலை)",
    linkMoeDesc:
      "மையக் கோட்பாடு, தகுதி மற்றும் இந்தப் பயிற்சி எவ்வாறு இயங்குகிறது.",
    linkSchoolsTitle: "பள்ளி தேடல் & DSA",
    linkSchoolsDesc: "பள்ளிகள் மற்றும் வெளியிடப்பட்ட DSA தகவலைக் கண்டறியவும்.",
    linkPortalTitle: "விண்ணப்ப வாயில்",
    linkPortalDesc:
      "சாளரம் திறக்கும்போது, அதிகாரப்பூர்வ மின்-சேவை மூலம் சமர்ப்பிக்கவும்.",
    footerRights:
      "© dsalink.sg · சிங்கப்பூரில் DSA ஐ நடத்தும் பெற்றோருக்காக",
    extHint: "வெளியே திறக்கிறது",
    a11yLanguageSelector: "மொழியைத் தேர்ந்தெடுக்கவும்",
    heroSearchPlaceholder: "பள்ளி அல்லது திறமை தேடுக (எ.கா: ரோபோட்டிக்ஸ்)…",
    openHouseKicker: "மே 2026 · தீவு முழுவதும்",
    sectionOpenHouseTitle: "இடைநிலைப் பள்ளி திறந்த நாட்கள் · DSA & சேர்க்கை",
    sectionOpenHouseDesc:
      "147 இடைநிலைப் பள்ளிகள் (MOE அட்டவணை, 2026) இரு மொழிப் பெயர்கள், பகுதி, பள்ளி வகை மற்றும் அதிகாரப்பூர்வ DSA / சேர்க்கை இணைப்புகளுடன். திறந்த வீடு நேரங்கள் மே 2026 (TBC) — ஒவ்வொரு பள்ளியின் அதிகாரப்பூர்வ பக்கத்திலும் உறுதிப்படுத்தவும்.",
    openHouseOfficialLink: "அதிகாரப்பூர்வ திறந்த வீடு / சேர்க்கை",
    openHouseOfficialBooking: "DSA / சேர்க்கை",
    openHouseSchoolLink: "பள்ளி இணையதளம்",
    openHouseOnsite: "நேரடி",
    openHouseOnline: "ஆன்லைன்",
    openHouseTime: "நேரம்",
    openHouseAddress: "முகவரி",
    openHouseStatusUpcoming: "வரவுள்ள",
    openHouseStatusOngoing: "நடைபெறுகிறது",
    openHouseStatusFinished: "முடிந்தது",
    navFaq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    navDsaGuide: "DSA வழிகாட்டி",
    navDsaFinder: "DSA தேடல்",
    navOpenHouses: "திறந்த வீடுகள்",
    navOpenHouseGuide: "திறந்த வீடு வழிகாட்டி",
    navScores: "PSLE COP",
    navMenu: "மெனு",
    navClose: "மெனுவை மூடு",
    openHousePreviewTitle: "வரவிருக்கிறது: மே திறந்த வீடுகள்",
    openHousePreviewDesc:
      "எங்கள் நாட்காட்டியில் அடுத்த அமர்வுகளின் சுருக்கப் பார்வை — முழு பட்டியலும் அதிகாரப்பூர்வ இணைப்புகளும் அடுத்த பக்கத்தில்.",
    openHouseViewFullCalendar: "முழு நாட்காட்டியும் →",
    openHouseFilterAll: "அனைத்துப் பள்ளிகள்",
    openHouseFilterPopular: "பிரபலமான தேர்வுகள்",
    openHouseBadgePopular: "பிரபலமான",
    openHouseSearchPlaceholder:
      "ஆங்கிலம் அல்லது சீனப் பள்ளிப் பெயரால் தேடுக…",
    openHouseSearchAria: "பள்ளிகளைத் தேடு",
    openHouseFiltersRegion: "பகுதி",
    openHouseFiltersProgram: "நிரல்",
    openHouseRegionNorth: "வடக்கு",
    openHouseRegionSouth: "தெற்கு",
    openHouseRegionEast: "கிழக்கு",
    openHouseRegionWest: "மேற்கு",
    openHouseRegionCentral: "மத்திய",
    openHouseProgramIP: "IP",
    openHouseProgramSAP: "SAP",
    openHouseProgramOLevel: "O-Level",
    openHouseLoadMore: "மேலும் ஏற்று",
    openHouseListComplete: "பட்டியல் முடிந்தது",
    openHouseNoResults:
      "பொருந்தும் பள்ளிகள் இல்லை. தேடல் அல்லது வடிகட்டிகளை மாற்றவும்.",
    openHouseStayTuned: "வரவிருக்கும் திறந்த வீடுகளுக்கு பின்னர் திரும்பவும்",
    openHouseResultsSummary: "{{shown}} / {{total}} பள்ளிகள்",
    scoreboardTitle: "PSLE COP அணி (AL, 2023–2025)",
    scoreboardSubtitle:
      "இயல்புநிலை: 2025 G3 புற இணைப்பு; IP பள்ளிகள் IP பாதை. பொதுவெளி மூலங்களிலிருந்து சுருக்கம்; அதிகாரப்பூர்வ தகவலுக்கு பள்ளி இணையதளத்தைப் பார்க்கவும்.",
    scoreboardSearchPlaceholder: "பள்ளிப் பெயர்…",
    scoreboardFilterRegion: "மண்டலம்",
    scoreboardFilterType: "வகை",
    scoreboardAll: "அனைத்தும்",
    scoreboardCol2025: "2025 COP",
    scoreboardColYear: "ஆண்டு",
    scoreboardTrackNonIp: "Non-IP",
    scoreboardTrackIp: "IP",
    scoreboardBadgeAffiliated: "இணைப் பள்ளி",
    scoreboardBadgeSap: "SAP",
    scoreboardTrendStable: "நிலையானது",
    scoreboardTrendUp: "COP தளர்வு",
    scoreboardTrendDown: "COP இறுக்கம்",
    scoreboardExpandDetails: "வரலாறு & ஓட்டங்கள்",
    scoreboardCollapseDetails: "மூடு",
    scoreboardNoResults: "பொருந்தும் பள்ளிகள் இல்லை.",
    scoreboardShowing: "{{shown}} / {{total}} பள்ளிகள்",
    scoreboardTypeG3: "G3",
    scoreboardTypeG2: "G2",
    scoreboardTypeG1: "G1",
    scoresPageKicker: "PSLE · 2023–2025 · 147 பள்ளிகள்",
    scoresPageH1: "PSLE COP வரலாற்று டாஷ்போர்டு",
    scoresPageLead:
      "2025 G3, 2024 உடன் ஒப்பீடு, 2023–2025 அனைத்து ஓட்டங்கள். SAP, IP, ஒரு பாலினம், மண்டலம் வடிகட்டல்.",
    scoresFilterToolbarAria: "வடிகட்டிகள்: தேடல், மண்டலம், SAP, IP, பாலினம், வரிசை",
    homeScoresCardTitle:
      "தீவு முழுவதும் 146 பள்ளிகளின் 3 ஆண்டு PSLE COP போக்குகளைக் காண்க",
    homeScoresCardCta: "மதிப்பெண் பலகை",
    scoreboardFilterSapOnly: "SAP மட்டும்",
    scoreboardFilterIpOnly: "IP மட்டும்",
    scoreboardFilterBoysSchool: "ஆண்கள் பள்ளி",
    scoreboardFilterGirlsSchool: "பெண்கள் பள்ளி",
    scoreboardSortLabel: "வரிசை",
    scoreboardSortScoreAsc: "AL குறைந்த → அதிக",
    scoreboardSortScoreDesc: "AL அதிக → குறைந்த",
    scoreboardSortName: "பள்ளிப் பெயர்",
    scoreboardBadgeAuto: "தன்னாட்சி",
    scoreboardBadgeIp: "IP",
    scoreboardColG3NonAff: "2025 · G3 இணையில்லா",
    scoreboardDetailMatrix: "2023–2025 ஓட்டங்கள்",
    scoreboardGenderBoys: "ஆண்கள்",
    scoreboardGenderGirls: "பெண்கள்",
    navSchools: "பள்ளிகள்",
    navDsaInterview: "நேர்காணல் தயாரிப்பு",
    schoolsKicker: "2026 · 147 இடைநிலைப் பள்ளிகள்",
    schoolsH1: "பள்ளி அட்டவணை",
    schoolsLead: "PSLE COP 2025 பதிவு வரம்புகள், ALP, LLP மற்றும் DSA பக்கத்திற்கான நேரடி இணைப்புகளுடன் 147 MOE இடைநிலைப் பள்ளிகள்.",
    schoolsSearch: "ஆங்கிலம் அல்லது சீன பெயரில் தேடுக…",
    schoolsFilterRegion: "பகுதி",
    schoolsFilterType: "பள்ளி வகை",
    schoolsFilterTrack: "திட்டம்",
    schoolsAll: "அனைத்தும்",
    schoolsTypeGovt: "அரசு",
    schoolsTypeAided: "அரசு உதவி",
    schoolsTypeIndependent: "சுதந்திர",
    schoolsTypeAutonomous: "தன்னாட்சி",
    schoolsTrackOLevel: "O-Level",
    schoolsTrackIP: "IP",
    schoolsTrackSpecialised: "சிறப்பு",
    schoolsAlp: "பயன்பாட்டு கல்வி",
    schoolsLlp: "வாழ்நாள் கல்வி",
    schoolsCop: "PSLE COP 2025",
    schoolsDsaLink: "DSA பக்கம்",
    schoolsWebsite: "பள்ளி இணையதளம்",
    schoolsNoResults: "பொருந்தும் பள்ளிகள் இல்லை.",
    schoolsShowing: "{{shown}} / {{total}} பள்ளிகள்",
    schoolsBadgeSap: "SAP",
    schoolsBadgeIp: "IP",
    schoolsAffPri: "தொடர்புடைய தொடக்கப் பள்ளி",
    schoolsOtherProg: "பிற திட்டங்கள்",
    openHouseSortedByDate: "தேதி வாரியாக வரிசை",
    openHouseUrgencyToday: "இன்று",
    openHouseUrgencyTomorrow: "நாளை",
    openHouseUrgencyThisSat: "இந்த சனிக்கிழமை",
    openHouseUrgencyThisSun: "இந்த ஞாயிற்றுக்கிழமை",
    openHouseUrgencyThisWeek: "இந்த வாரம்",
    dsaFinderCrumb: "DSA திறமை தேடல்",
    dsaFinderKicker: "MOE SchoolFinder அதிகாரப்பூர்வ DSA தரவு · 2026",
    dsaFinderBySchool: "பள்ளி வாரியாக",
    dsaFinderByTalent: "திறமை வாரியாக",
    dsaFinderShowAll: "{{n}} பள்ளிகளை காட்டு",
    dsaFinderShowFewer: "குறைவான பள்ளிகளை காட்டு",
    dsaFinderPsleEstimate: "PSLE மதிப்பீடு: பள்ளி சுயவிவரம் காண்க",
    dsaFinderNoMatches: "பொருந்தவில்லை. பள்ளி பெயர், CCA அல்லது பரந்த வகையை முயற்சிக்கவும்.",
    dsaFinderModeTip: "திறமை குறியை தொட்டு, அந்த திறமை வாரியாக பள்ளிகளை ஒப்பிடுங்கள்.",
    dsaStrategySectionKicker: "நடுத்தர நீரோட்ட DSA உத்தி · 2026",
    dsaStrategySectionH2: "மறைக்கப்பட்ட வழி: DSA சாதாரண மாணவர்களுக்கும்தான்",
    dsaStrategySectionLead: "பெரும்பாலான குடும்பங்கள் DSA என்பது தேசிய விளையாட்டு வீரர்களுக்கும் அற்புத திறமையாளர்களுக்கும் மட்டுமே என்று கருதுகின்றன. உண்மை இன்னும் சுவாரஸ்யமானது: DSA போட்டித் தீவிரம் பள்ளி மற்றும் திறமை துறை வாரியாக பெரும் அளவில் வேறுபடுகிறது. கல்வி ரீதியாக சராசரியான (AL 20–25) ஆனால் நடனம், இசை அல்லது ரோபோட்டிக்ஸில் உண்மையான திறமை கொண்ட மாணவர், இல்லையெனில் மிக உயர்ந்த PSLE மதிப்பெண் தேவைப்படும் பள்ளியில் இடம் பெற முடியும்.",
    dsaStrategyInsightTitle: "பொருத்தம் கண்டுபிடிக்கும் தர்க்கம்",
    dsaStrategyInsightBody: "DSA-ஐ ஒரு பொருத்தமான விளையாட்டாக நினைத்துக்கொள்ளுங்கள், திறமை போட்டியாக அல்ல. நன்கு தரப்படுத்தப்பட்ட முக்கிய பள்ளியில் DSA-நடனத்திற்கு விண்ணப்பிக்கும் மாணவர், தேசிய வெற்றியாளருக்கு எதிராக போட்டியிடவில்லை — அந்த மாணவர் RI அல்லது SOTA-க்கு விண்ணப்பிக்கிறார். நடுத்தரப் பள்ளியில் போட்டியாளர்கள் குறைவு, வாய்ப்பு அதிகம். உங்கள் குழந்தையின் திறமை பள்ளியின் தேவையை பூர்த்தி செய்யும் சரியான பள்ளி-துறை கலவையை கண்டறியுங்கள்.",
    dsaStrategyInsightFootnote: "இதுவே தாழ்வுமின்றி உயர்வு பெறும் underdog உத்தி — சிங்கப்பூர் குடும்பங்கள் ஆண்டுதோறும் பயன்படுத்துவது இதுதான்.",
    dsaStrategyPslePath: "PSLE இட ஒதுக்கீடு",
    dsaStrategyPsleBody: "உங்கள் மதிப்பெண் பள்ளியை தீர்மானிக்கிறது. அதிக AL → அதிக தேர்வுகள். ஒரே ஒரு அழுத்தமான தேர்வால் கட்டுப்படுகிறது.",
    dsaStrategyPsleBadge: "ஒரே வாய்ப்பு",
    dsaStrategyDsaPath: "DSA பாதை",
    dsaStrategyDsaBody: "ஆவணப்படுத்தப்பட்ட திறமை PSLE-க்கு முன்பே பள்ளியை தீர்மானிக்கிறது. DSA சலுகை ஏற்றுக்கொண்டவுடன் கல்வி மதிப்பெண் பொருத்தமற்றதாகிவிடும்.",
    dsaStrategyDsaBadge: "மாற்று வழி",
    dsaStrategySmartTitle: "புத்திசாலி உத்தி",
    dsaStrategySmartBody: "போட்டி குறைவான துறைகளில் DSA மூலம் விண்ணப்பிக்கவும். PSLE செயல்திறனை பாதுகாப்பு வலையாக வைத்திருங்கள். இரண்டையும் தற்செயலுக்கு விட்டுவிடாதீர்கள்.",
    dsaStrategySmartBadge: "இரண்டும் சிறந்தது",
    dsaStrategyWhichParent: "நீங்கள் எந்த வகை பெற்றோர்?",
    dsaStrategyWhichDesc: "உங்கள் குழந்தையின் சுயவிவரத்தை கண்டறிந்து, அவர்களுக்கு ஏற்ற சிறந்த DSA அணுகுமுறையை பாருங்கள்.",
    dsaStrategyGoalLabel: "இலக்கு:",
    dsaStrategyTipLabel: "குறிப்பு:",
    dsaStrategyPersona1Title: "என் குழந்தை பல ஆண்டுகளாக CCA-வில் இருக்கிறார் — நான் தான் DSA-வை சரியாக பார்க்கவில்லை",
    dsaStrategyPersona1Tag: "முதல் முறையாக ஆராய்கிறீர்கள்",
    dsaStrategyPersona1Who: "DSA பற்றி நீங்கள் கேட்டிருக்கலாம், ஆனால் அது Gifted Programme குழந்தைகள் அல்லது உயர்நிலை பள்ளிகளுக்கே என்று நினைத்திருக்கலாம். உங்கள் குழந்தை அதே CCA-வில் 2+ ஆண்டுகளாக தொடர்ந்து இருக்கிறார். பல குடும்பங்கள் தொடங்கும் நிலையைக் காட்டிலும் இது ஏற்கனவே நல்ல தொடக்கம்.",
    dsaStrategyPersona1Goal: "உங்கள் குழந்தை தகுதியுடையவரா, உண்மையான விண்ணப்பத்தில் \"திறமைக்கான ஆதாரம்\" எப்படி இருக்க வேண்டும் என்பதைக் புரிந்துகொள்ளுங்கள்.",
    dsaStrategyPersona1Tip: "DSA சிங்கப்பூரில் உள்ள ஒவ்வொரு தொடக்கப் பள்ளி மாணவர்களுக்கும் திறந்திருக்கும். பள்ளிகள் பார்ப்பது காலப்போக்கில் தொடர்ச்சியான பங்கேற்பு — உயர்நிலை திட்டங்களின் பதக்கங்கள் அல்ல.",
    dsaStrategyPersona1Cta: "FAQ-யில் தொடங்குங்கள் →",
    dsaStrategyPersona2Title: "சராசரி மதிப்பெண்கள், ஆனால் ஒரு துறையில் உண்மையாக வலிமை",
    dsaStrategyPersona2Tag: "மதிப்பெண்களை விட திறமை",
    dsaStrategyPersona2Who: "PSLE கணிப்பு: AL 20–26. ஆனால் உங்கள் குழந்தை தொடர்ந்து பயிற்சி செய்து வருகிறார் — நீச்சல், வுஷூ, சீன நடனம், அல்லது ஒரு சிறப்பு STEM துறை — அதை நிரூபிக்கும் முடிவுகளுடன். அவர்களின் திறமை உண்மையானது. DSA இதுபோன்ற திறமையை அங்கீகரிக்கவே வடிவமைக்கப்பட்டுள்ளது.",
    dsaStrategyPersona2Goal: "தேர்வு மதிப்பெண் அல்ல, அவர்களின் திறமைதான் சேர்க்கைக்கு காரணமாக இருக்கும் இடைநிலைப் பள்ளிகளை கண்டறியுங்கள்.",
    dsaStrategyPersona2Tip: "சாதாரண PSLE பாதையில் எட்ட முடியாத பள்ளிகளும் DSA மூலம் உண்மையாக அணுகக்கூடியவை. போட்டி வேறு அளவுகோலில் மதிப்பிடப்படுகிறது.",
    dsaStrategyPersona2Cta: "திறமை துறைகளை தேடுங்கள் →",
    dsaStrategyPersona3Title: "PSLE முடிவு நாளுக்கு முன் சரியான பள்ளியை உறுதிப்படுத்த விரும்புகிறேன்",
    dsaStrategyPersona3Tag: "முன்கூட்டியே உறுதி",
    dsaStrategyPersona3Who: "உங்கள் குழந்தை கல்வியில் சரியான பாதையில் செல்கிறார் மற்றும் ஆவணப்படுத்தப்பட்ட திறமை உள்ளது. நவம்பர் முடிவு நாள் எவ்வளவு அழுத்தமானது என்பதை நீங்கள் பார்த்திருக்கிறீர்கள். PSLE-க்கு முன்பே கையில் இருக்கும் Confirmed DSA Offer அந்த நாளின் அர்த்தத்தை மாற்றிவிடும்.",
    dsaStrategyPersona3Goal: "DSA-வை உத்தியாக பயன்படுத்துங்கள் — PSLE அவசரம் தொடங்குவதற்கு முன், அவர்களின் கல்வி பாதைக்கும் திறமைக்கும் பொருந்தும் பள்ளியை உறுதிப்படுத்துங்கள்.",
    dsaStrategyPersona3Tip: "Confirmed Offer இருந்தால், PSLE இலக்கு \"தரவரிசைக்காக போட்டியிடுதல்\" என்பதிலிருந்து \"குறைந்தபட்ச சேர்க்கை தேவையை பூர்த்தி செய்தல்\" என மாறும். அது முற்றிலும் வேறுபட்ட தேர்வு தயாரிப்பு.",
    dsaStrategyPersona3Cta: "DSA வழிகாட்டியைப் படிக்கவும் →",
    dsaStrategyPersona4Title: "விண்ணப்பங்கள் ஜூன் 2 அன்று முடிகின்றன — எங்கே தொடங்குவது?",
    dsaStrategyPersona4Tag: "கடைசி நாள்: 2 Jun 2026",
    dsaStrategyPersona4Who: "இந்த வாரம் தான் நீங்கள் DSA பற்றி அறிந்தீர்கள். மூன்று வாரங்களுக்கும் குறைவான நேரம் உள்ளது. உங்கள் குழந்தை குறைந்தது ஒரு வருடமாக CCA செய்து வருகிறார். தொடங்குவதற்கு அது போதுமானது.",
    dsaStrategyPersona4Goal: "விண்ணப்பிக்க 1–3 பள்ளிகளை அடையாளம் காணுங்கள், குறைந்தபட்ச ஆதாரப் போர்ட்ஃபோலியோவை சேகரியுங்கள், ஜூன் 2 மாலை 4:30 மணிக்கு முன் சமர்ப்பியுங்கள்.",
    dsaStrategyPersona4Tip: "MOE வாயிலாக விண்ணப்பம் செய்வதற்கு ஒரு மணிநேரத்திற்கும் குறைவாகவே ஆகும். உண்மையான வேலை எந்த பள்ளிகளுக்கு விண்ணப்பிப்பது என்பதை தீர்மானிப்பதே. இப்போது DSA தேடலை பயன்படுத்துங்கள் — அது திறமை துறையின்படி தேடும்.",
    dsaStrategyPersona4Cta: "DSA தேடலை பயன்படுத்துங்கள் →",
    dsaStrategyCtaTitle: "சரியான பள்ளி-துறை பொருத்தத்தை கண்டுபிடிக்க தயாரா?",
    dsaStrategyCtaBody: "திறமை துறை, ALP, LLP மற்றும் PSLE COP வரிசை வாரியாக வடிகட்டப்பட்ட 147 MOE இடைநிலைப் பள்ளிகளை உலாவுங்கள்.",
    dsaStrategyCtaBrowse: "பள்ளி அட்டவணையை உலாவு →",
    dsaStrategyCtaInterview: "நேர்காணல் தயாரிப்பு வழிகாட்டி →",
    subscribeKicker: "இலவச வள தொகுப்பு · P6 குடும்பங்கள்",
    subscribeTitle: "தயாரிப்புக்கு தேவையான அனைத்தும் — ஒரு இலவச தொகுப்பில்",
    subscribeDesc: "நூற்றுக்கணக்கான சிங்கப்பூர் குடும்பங்கள் DSA தயாரிப்புக்கு பயன்படுத்துகின்றன.",
    subscribeMaterial1: "DSA பள்ளி ஒப்பீட்டு பட்டியல் (147 பள்ளிகள்)",
    subscribeMaterial2: "திறன் பகுதி வாரியாக நேர்காணல் கேள்வி தொகுப்பு",
    subscribeMaterial3: "திறந்த இல்ல வழிகாட்டி — என்ன கேட்கவேண்டும் & கவனிக்கவேண்டும்",
    subscribeMaterial4: "2026 விண்ணப்ப கால அட்டவணை & காலக்கெடு சரிபார்ப்பு பட்டியல்",
    subscribeFormLabel: "இலவச தொகுப்பைப் பெறுங்கள்",
    subscribeBtn: "எனக்கு அனுப்புங்கள் →",
    subscribeBtnLoading: "அனுப்புகிறோம்…",
    subscribeSuccessTitle: "தொகுப்பு வழியில் உள்ளது.",
    subscribeSuccessDesc: "உங்கள் inbox-ஐ சரிபாருங்கள் — 24 மணி நேரத்தில் அனுப்புவோம்.",
    subscribeDisclaimer: "இலவசம். spam இல்லை. எப்போதும் குழுவிலகலாம்.",
    dsaExpPageCrumb: "DSA அனுபவ வழிகாட்டி",
    dsaExpPageKicker: "பெற்றோர் செயல்நூல்",
    dsaExpPageTitle: "DSA அனுபவ வழிகாட்டி",
    dsaExpPageSubtitle:
      "சிங்கப்பூர் DSA-வில் உண்மையில் செயல்படுவது — பள்ளி தேர்வு, திறன் வரம்புகள், கால அட்டவணை மற்றும் தவிர்க்க வேண்டிய தவறுகள்.",
    dsaExpLangNotice:
      "இந்த வழிகாட்டி தற்போது ஆங்கிலத்தில் மட்டுமே கிடைக்கிறது. தமிழ் பதிப்பு விரைவில் வரும்.",
    ...dsaGuideTa,
  },
};

/** Raw `locales/*.json` bundle for a locale (home, DSA guide, field guide copy). */
export function getGuideLocaleStrings(locale: Locale): DsaGuideStrings {
  switch (locale) {
    case "en":
      return dsaGuideEn;
    case "zh":
      return dsaGuideZh;
    case "ms":
      return dsaGuideMs;
    case "ta":
      return dsaGuideTa;
  }
}
