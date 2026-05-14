import dsaGuideEn from "@/locales/en.json";
import dsaGuideMs from "@/locales/ms.json";
import dsaGuideTa from "@/locales/ta.json";
import dsaGuideZh from "@/locales/zh.json";

export const locales = ["en", "zh", "ms", "ta"] as const;

/** Keys imported from `locales/*.json` for /dsa-guide (flat dsaGuide* strings). */
export type DsaGuideStrings = typeof dsaGuideEn;

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
  linkCalendarTitle: string;
  linkCalendarDesc: string;
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
  dsaStrategyCtaTitle: string;
  dsaStrategyCtaBody: string;
  dsaStrategyCtaBrowse: string;
  dsaStrategyCtaInterview: string;
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
    ctaPrimary: "MOE DSA overview",
    ctaSecondary: "Browse school portals",
    sectionLinksTitle: "Official links & guides",
    sectionLinksDesc:
      "All destinations open in a new tab. Always confirm details on the official MOE website.",
    linkMoeTitle: "MOE · DSA (Secondary)",
    linkMoeDesc: "Central overview, eligibility, and how the exercise works.",
    linkSchoolsTitle: "School finder & DSA",
    linkSchoolsDesc: "Locate schools and their published DSA information.",
    linkPortalTitle: "Application portal",
    linkPortalDesc: "When the window opens, submit via the official e‑service.",
    linkCalendarTitle: "Key dates",
    linkCalendarDesc: "Cross‑check timelines alongside MOE announcements.",
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
    dsaStrategyInsightFootnote: "This is the 逆袭策略 — the underdog pathway — that savvy Singapore families use every year.",
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
    dsaStrategyPersona1Title: "The Academic Specialist",
    dsaStrategyPersona1Tag: "AL 8–16 · IP-track families",
    dsaStrategyPersona1Who: "Your child has strong academic results AND a verifiable talent — music grades, robotics medals, debate trophies. DSA lets you lock in the right IP school before PSLE pressure peaks.",
    dsaStrategyPersona1Goal: "Secure an IP school that matches both their grades and their passion domain.",
    dsaStrategyPersona1Tip: "Apply early to 2–3 IP schools through DSA. Use PSLE as confirmation, not as the deciding exam.",
    dsaStrategyPersona1Cta: "View IP schools →",
    dsaStrategyPersona2Title: "The Arts & Sports Leader",
    dsaStrategyPersona2Tag: "AL 18–28 · Mid-stream families",
    dsaStrategyPersona2Who: "Your child is academically average but genuinely skilled — a consistent dancer, competitive swimmer, or trained musician. Their PSLE score alone may not reach their dream school. DSA bypasses that ceiling.",
    dsaStrategyPersona2Goal: "Get into a better-matched school via talent, not just exam score.",
    dsaStrategyPersona2Tip: "The key insight: competition for DSA-Dance at a well-ranked mainstream school is often less intense than academic competition. Genuine, documented talent in a niche domain opens doors that PSLE scores alone cannot.",
    dsaStrategyPersona2Cta: "Find mid-tier schools →",
    dsaStrategyPersona3Title: "The Creative Geek",
    dsaStrategyPersona3Tag: "AL 12–22 · STEM & niche domains",
    dsaStrategyPersona3Who: "Your child built an app, won a robotics competition, or placed in the Singapore Science & Engineering Fair. They don’t fit the ‘sports star’ mould but they have deep, provable talent in technology or science.",
    dsaStrategyPersona3Goal: "Find schools with strong ALP programmes in STEM, coding, or biomedical science that actively recruit through DSA.",
    dsaStrategyPersona3Tip: "SSEF, NOI, and SMO participation are highly recognised by competitive schools. Build the portfolio in P4–5, not in P6.",
    dsaStrategyPersona3Cta: "Browse schools by ALP →",
    dsaStrategyCtaTitle: "Ready to find the right school-domain match?",
    dsaStrategyCtaBody: "Browse all 147 MOE secondary schools filtered by talent domain, ALP, LLP, and PSLE COP band.",
    dsaStrategyCtaBrowse: "Browse school directory →",
    dsaStrategyCtaInterview: "Interview prep guide →",
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
    ctaPrimary: "前往 MOE DSA 专页",
    ctaSecondary: "查看中学入口列表",
    sectionLinksTitle: "官方链接与升学指南",
    sectionLinksDesc: "以下链接均在新标签页打开，请务必以 MOE 官网信息为准。",
    linkMoeTitle: "教育部 · DSA（中学）",
    linkMoeDesc: "政策说明、适用对象与申请流程总览。",
    linkSchoolsTitle: "学校搜索与 DSA",
    linkSchoolsDesc: "查找学校及其公布的 DSA 信息。",
    linkPortalTitle: "报名系统入口",
    linkPortalDesc: "开放期间请通过官方电子服务提交申请。",
    linkCalendarTitle: "关键时间节点",
    linkCalendarDesc: "结合 MOE 公告核对时间表。",
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
    dsaStrategyPersona1Title: "学术型特长生家长",
    dsaStrategyPersona1Tag: "AL 8–16 · IP 直通车家庭",
    dsaStrategyPersona1Who: "孩子学业成绩优异，同时有可证明的特长——音乐考级、机器人奖项、辩论奖杯。通过 DSA，可在 PSLE 压力攀升之前锁定心仪的 IP 直通车学校。",
    dsaStrategyPersona1Goal: "找到一所同时符合学业成绩与特长方向的 IP 学校，提前锁定。",
    dsaStrategyPersona1Tip: "提前通过 DSA 申请 2–3 所 IP 学校。把 PSLE 当作最终印证，而非决定命运的考试。",
    dsaStrategyPersona1Cta: "查看 IP 学校 →",
    dsaStrategyPersona2Title: "艺体特长生家长",
    dsaStrategyPersona2Tag: "AL 18–28 · 中流水平家庭",
    dsaStrategyPersona2Who: "孩子学业成绩中等，但在某一领域真正有料——稳定出赛的舞者、竞技游泳选手，或经过系统训练的乐手。单凭 PSLE 分数，可能与梦校无缘；而 DSA 恰恰能突破这道分数天花板。",
    dsaStrategyPersona2Goal: "靠特长而非单纯的考试成绩，进入更适合自己的学校。",
    dsaStrategyPersona2Tip: "关键洞察：在一所口碑不错的主流学校，DSA 舞蹈竞争往往比学术竞争温和得多。在细分领域拥有真实、可记录的特长，能打开单靠 PSLE 成绩永远无法叩开的门。",
    dsaStrategyPersona2Cta: "探索中游学校 →",
    dsaStrategyPersona3Title: "科创极客家长",
    dsaStrategyPersona3Tag: "AL 12–22 · STEM 与细分领域",
    dsaStrategyPersona3Who: "孩子独立开发过应用程序，赢得机器人比赛，或在新加坡科学与工程展（SSEF）中获奖。他们不是运动明星类型，但在科技或理工领域拥有深厚、可验证的实力。",
    dsaStrategyPersona3Goal: "找到 STEM、编程或生物医学领域 ALP 课程扎实、且通过 DSA 主动招生的学校。",
    dsaStrategyPersona3Tip: "SSEF、NOI 和 SMO 的参赛经历在竞争激烈的学校中极受认可。作品集要在小四、小五就开始积累，而不是等到小六才临阵磨枪。",
    dsaStrategyPersona3Cta: "按 ALP 方向浏览学校 →",
    dsaStrategyCtaTitle: "准备好为孩子找到最合适的学校与特长搭配了吗？",
    dsaStrategyCtaBody: "浏览全部 147 所 MOE 中学，可按特长领域、ALP、LLP 和 PSLE COP 分段筛选。",
    dsaStrategyCtaBrowse: "浏览学校目录 →",
    dsaStrategyCtaInterview: "面试备考指南 →",
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
    ctaPrimary: "Ringkasan DSA MOE",
    ctaSecondary: "Layari portal sekolah",
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
    linkCalendarTitle: "Tarikh penting",
    linkCalendarDesc: "Sahkan garis masa dengan pengumuman MOE.",
    footerRights:
      "© dsalink.sg · Untuk ibu bapa yang menavigasi DSA di Singapura",
    extHint: "Pautan luar",
    a11yLanguageSelector: "Pilih bahasa",
    heroSearchPlaceholder: "Cari sekolah atau bakat (cth: Robotik, Tarian)…",
    openHouseKicker: "Mei 2026",
    sectionOpenHouseTitle: "Hari terbuka sekolah · sorotan musim DSA",
    sectionOpenHouseDesc:
      "Disusun daripada kalendar Mei 2026. Masa dan mod di tapak / dalam talian adalah anggaran — sentiasa sahkan di laman rasmi setiap sekolah.",
    openHouseOfficialLink: "Hari terbuka / kemasukan rasmi",
    openHouseOfficialBooking: "Tempahan rasmi",
    openHouseSchoolLink: "Laman web sekolah",
    openHouseOnsite: "Di tapak",
    openHouseOnline: "Dalam talian",
    openHouseTime: "Masa",
    openHouseAddress: "Alamat",
    openHouseStatusUpcoming: "Akan datang",
    openHouseStatusOngoing: "Sedang berlangsung",
    openHouseStatusFinished: "Tamat",
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
    scoresPageH1: "Papan data PSLE COP (2021–2025)",
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
    dsaStrategyInsightTitle: "Pandangan Permainan Padanan",
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
    dsaStrategyPersona1Title: "Pakar Akademik",
    dsaStrategyPersona1Tag: "AL 8–16 · Keluarga laluan IP",
    dsaStrategyPersona1Who: "Anak anda mempunyai keputusan akademik yang kukuh DAN bakat yang boleh dibuktikan — gred muzik, medal robotik, trofi debat. DSA membolehkan anda memastikan sekolah IP yang tepat sebelum tekanan PSLE mencapai puncak.",
    dsaStrategyPersona1Goal: "Pastikan sekolah IP yang sesuai dengan gred dan domain minat mereka.",
    dsaStrategyPersona1Tip: "Mohon awal ke 2–3 sekolah IP melalui DSA. Gunakan PSLE sebagai pengesahan, bukan peperiksaan penentu.",
    dsaStrategyPersona1Cta: "Lihat sekolah IP →",
    dsaStrategyPersona2Title: "Pemimpin Seni & Sukan",
    dsaStrategyPersona2Tag: "AL 18–28 · Keluarga arus tengah",
    dsaStrategyPersona2Who: "Anak anda sederhana dari segi akademik tetapi benar-benar berbakat — penari yang konsisten, perenang berdaya saing, atau ahli muzik terlatih. Skor PSLE mereka sahaja mungkin tidak mencapai sekolah impian. DSA melepasi batasan tersebut.",
    dsaStrategyPersona2Goal: "Masuk ke sekolah yang lebih sesuai melalui bakat, bukan sekadar skor peperiksaan.",
    dsaStrategyPersona2Tip: "Pandangan utama: persaingan DSA-Tari di sekolah arus perdana yang baik sering kurang sengit berbanding persaingan akademik. Bakat tulen yang berdokumen dalam domain niche membuka pintu yang skor PSLE sahaja tidak mampu.",
    dsaStrategyPersona2Cta: "Cari sekolah pertengahan →",
    dsaStrategyPersona3Title: "Si Geek Kreatif",
    dsaStrategyPersona3Tag: "AL 12–22 · Domain STEM & niche",
    dsaStrategyPersona3Who: "Anak anda membina aplikasi, memenangi pertandingan robotik, atau mendapat tempat dalam Singapore Science & Engineering Fair. Mereka tidak sesuai dengan acuan 'bintang sukan' tetapi mempunyai bakat mendalam yang boleh dibuktikan dalam teknologi atau sains.",
    dsaStrategyPersona3Goal: "Cari sekolah dengan program ALP yang kukuh dalam STEM, pengkodan, atau sains bioperubatan yang aktif merekrut melalui DSA.",
    dsaStrategyPersona3Tip: "Penyertaan SSEF, NOI, dan SMO sangat diiktiraf oleh sekolah kompetitif. Bina portfolio pada P4–5, bukan P6.",
    dsaStrategyPersona3Cta: "Layari sekolah mengikut ALP →",
    dsaStrategyCtaTitle: "Bersedia untuk mencari padanan sekolah-domain yang tepat?",
    dsaStrategyCtaBody: "Layari semua 147 sekolah menengah MOE ditapis mengikut domain bakat, ALP, LLP, dan band COP PSLE.",
    dsaStrategyCtaBrowse: "Layari direktori sekolah →",
    dsaStrategyCtaInterview: "Panduan persediaan temuduga →",
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
    ctaPrimary: "MOE DSA கண்ணோட்டம்",
    ctaSecondary: "பள்ளி வழிகளை உலாவு",
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
    linkCalendarTitle: "முக்கிய தேதிகள்",
    linkCalendarDesc: "MOE அறிவிப்புகளுடன் காலவரிசையை ஒப்பிடுக.",
    footerRights:
      "© dsalink.sg · சிங்கப்பூரில் DSA ஐ நடத்தும் பெற்றோருக்காக",
    extHint: "வெளியே திறக்கிறது",
    a11yLanguageSelector: "மொழியைத் தேர்ந்தெடுக்கவும்",
    heroSearchPlaceholder: "பள்ளி அல்லது திறமை தேடுக (எ.கா: ரோபோட்டிக்ஸ்)…",
    openHouseKicker: "மே 2026",
    sectionOpenHouseTitle: "பள்ளி திறந்த வீடுகள் · DSA சீசன் சிறப்புகள்",
    sectionOpenHouseDesc:
      "எங்கள் மே 2026 நாட்காட்டியிலிருந்து தேர்ந்தெடுக்கப்பட்டது. நேரங்கள் மற்றும் நேரடி / ஆன்லைன் முறைமைகள் குறிப்பிட்டவை — ஒவ்வொரு பள்ளியின் அதிகாரப்பூர்வ பக்கத்திலும் உறுதிப்படுத்தவும்.",
    openHouseOfficialLink: "அதிகாரப்பூர்வ திறந்த வீடு / சேர்க்கை",
    openHouseOfficialBooking: "அதிகாரப்பூர்வ முன்பதிவு",
    openHouseSchoolLink: "பள்ளி இணையதளம்",
    openHouseOnsite: "நேரடி",
    openHouseOnline: "ஆன்லைன்",
    openHouseTime: "நேரம்",
    openHouseAddress: "முகவரி",
    openHouseStatusUpcoming: "வரவுள்ள",
    openHouseStatusOngoing: "நடைபெறுகிறது",
    openHouseStatusFinished: "முடிந்தது",
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
    openHouseUrgencyThisSat: "இந்த சனி",
    openHouseUrgencyThisSun: "இந்த ஞாயி",
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
    dsaStrategySmartTitle: "சாணக்கிய உத்தி",
    dsaStrategySmartBody: "போட்டி குறைவான துறைகளில் DSA மூலம் விண்ணப்பிக்கவும். PSLE செயல்திறனை பாதுகாப்பு வலையாக வைத்திருங்கள். இரண்டையும் தற்செயலுக்கு விட்டுவிடாதீர்கள்.",
    dsaStrategySmartBadge: "இரண்டும் சிறந்தது",
    dsaStrategyWhichParent: "நீங்கள் எந்த வகை பெற்றோர்?",
    dsaStrategyWhichDesc: "உங்கள் குழந்தையின் சுயவிவரத்தை கண்டறிந்து, அவர்களுக்கு ஏற்ற சிறந்த DSA அணுகுமுறையை பாருங்கள்.",
    dsaStrategyGoalLabel: "இலக்கு:",
    dsaStrategyTipLabel: "குறிப்பு:",
    dsaStrategyPersona1Title: "கல்வியியல் நிபுணர்",
    dsaStrategyPersona1Tag: "AL 8–16 · IP பாதை குடும்பங்கள்",
    dsaStrategyPersona1Who: "உங்கள் குழந்தைக்கு வலுவான கல்வி முடிவுகளும் நிரூபிக்கக்கூடிய திறமையும் உள்ளன — இசை தரங்கள், ரோபோட்டிக்ஸ் பதக்கங்கள், விவாத கோப்பைகள். PSLE அழுத்தம் உச்சத்தை எட்டுவதற்கு முன்பே DSA மூலம் சரியான IP பள்ளியை உறுதிப்படுத்தலாம்.",
    dsaStrategyPersona1Goal: "தங்கள் தரங்களுக்கும் ஆர்வமுள்ள துறைக்கும் பொருத்தமான IP பள்ளியை உறுதிப்படுத்துங்கள்.",
    dsaStrategyPersona1Tip: "DSA மூலம் 2–3 IP பள்ளிகளில் முன்கூட்டியே விண்ணப்பிக்கவும். PSLE-ஐ உறுதிப்படுத்தலாக பயன்படுத்துங்கள், தீர்க்கும் தேர்வாக அல்ல.",
    dsaStrategyPersona1Cta: "IP பள்ளிகளை காண்க →",
    dsaStrategyPersona2Title: "கலை & விளையாட்டு தலைவர்",
    dsaStrategyPersona2Tag: "AL 18–28 · நடுத்தர நீரோட்ட குடும்பங்கள்",
    dsaStrategyPersona2Who: "உங்கள் குழந்தை கல்வியில் சராசரியானவர் ஆனால் உண்மையான திறமையுடையவர் — தொடர்ந்து நடனமாடுபவர், போட்டி நீச்சல் வீரர், அல்லது பயிற்சி பெற்ற இசைக்கலைஞர். PSLE மட்டும் கொண்டு கனவு பள்ளியை அடைய முடியாமல் போகலாம். DSA அந்த வரம்பை தாண்டுகிறது.",
    dsaStrategyPersona2Goal: "திறமை மூலம் சிறந்த பொருத்தமான பள்ளியில் சேருங்கள், தேர்வு மதிப்பெண்ணால் மட்டுமல்ல.",
    dsaStrategyPersona2Tip: "முக்கிய நுண்ணறிவு: நன்கு தரப்படுத்தப்பட்ட முக்கிய பள்ளியில் DSA-நடனத்திற்கான போட்டி பெரும்பாலும் கல்வி போட்டியை விட குறைவானது. சிறப்பு துறையில் உண்மையான, ஆவணப்படுத்தப்பட்ட திறமை PSLE மட்டுமே திறக்க முடியாத கதவுகளை திறக்கிறது.",
    dsaStrategyPersona2Cta: "நடுத்தரப் பள்ளிகளை கண்டறி →",
    dsaStrategyPersona3Title: "படைப்பாற்றல் நிபுணர்",
    dsaStrategyPersona3Tag: "AL 12–22 · STEM & சிறப்பு துறைகள்",
    dsaStrategyPersona3Who: "உங்கள் குழந்தை ஒரு செயலியை உருவாக்கினார், ரோபோட்டிக்ஸ் போட்டியில் வெற்றி பெற்றார், அல்லது Singapore Science & Engineering Fair-ல் இடம் பெற்றார். அவர்கள் 'விளையாட்டு நட்சத்திரம்' வார்ப்பில் பொருந்தவில்லை ஆனால் தொழில்நுட்பம் அல்லது அறிவியலில் ஆழமான, நிரூபிக்கக்கூடிய திறமை உள்ளது.",
    dsaStrategyPersona3Goal: "STEM, கோடிங் அல்லது உயிரி மருத்துவ அறிவியலில் வலுவான ALP திட்டங்களுடன் DSA மூலம் சேர்க்கை நடத்தும் பள்ளிகளை கண்டறியுங்கள்.",
    dsaStrategyPersona3Tip: "SSEF, NOI மற்றும் SMO பங்கேற்பு போட்டி பள்ளிகளால் மிகவும் அங்கீகரிக்கப்படுகிறது. P4–5-ல் போர்ட்ஃபோலியோ உருவாக்குங்கள், P6-ல் அல்ல.",
    dsaStrategyPersona3Cta: "ALP வாரியாக பள்ளிகளை உலாவு →",
    dsaStrategyCtaTitle: "சரியான பள்ளி-துறை பொருத்தத்தை கண்டுபிடிக்க தயாரா?",
    dsaStrategyCtaBody: "திறமை துறை, ALP, LLP மற்றும் PSLE COP வரிசை வாரியாக வடிகட்டப்பட்ட 147 MOE இடைநிலைப் பள்ளிகளை உலாவுங்கள்.",
    dsaStrategyCtaBrowse: "பள்ளி அட்டவணையை உலாவு →",
    dsaStrategyCtaInterview: "நேர்காணல் தயாரிப்பு வழிகாட்டி →",
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
