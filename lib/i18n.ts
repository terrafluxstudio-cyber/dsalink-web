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
  adLabel: string;
  adPlaceholder: string;
  footerRights: string;
  extHint: string;
  a11yLanguageSelector: string;
  openHouseKicker: string;
  sectionOpenHouseTitle: string;
  sectionOpenHouseDesc: string;
  openHouseOfficialLink: string;
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
  navOpenHouses: string;
  /** /scores — posting COP directory */
  navScores: string;
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
} & DsaGuideStrings;

export const copy: Record<Locale, Copy> = {
  en: {
    metaTitle: "DSA Link Singapore | Official DSA 2026 Countdown & Resources",
    metaDescription:
      "Navigate Singapore Direct School Admission (DSA) with trusted official links, a 2026 application countdown, and clear guides for parents — DSA Link (dsalink.sg).",
    navBrand: "DSA Link",
    navTagline: "Singapore · DSA 2026",
    heroBadge: "Independent resource for families",
    heroTitle: "Direct School Admission, simplified.",
    heroSubtitle:
      "One calm starting point for official MOE information, key dates, and secondary DSA pages — built for clarity and speed on mobile.",
    countdownLabel: "Time until DSA 2026 application closes",
    countdownComplete:
      "Countdown complete — please verify the latest deadline on MOE.",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    countdownDeadlineLine: "31 May 2026 · 23:59 SGT",
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
    adLabel: "Sponsored space",
    adPlaceholder:
      "Reserved for a single, clearly labelled placement — aligned with a community resource.",
    footerRights: "© dsalink.sg · Built for parents navigating DSA in Singapore",
    extHint: "Opens externally",
    a11yLanguageSelector: "Choose language",
    openHouseKicker: "May 2026 · Island-wide",
    sectionOpenHouseTitle: "Secondary open houses · DSA & admissions",
    sectionOpenHouseDesc:
      "147 secondary schools (MOE directory, 2026) with bilingual names, region, school type, and official DSA / admissions links. Open-house times are May 2026 (TBC) unless the school has published a date — always confirm on each site.",
    openHouseOfficialLink: "Official open house / admissions",
    openHouseOfficialBooking: "DSA / admissions",
    openHouseOnsite: "On-site",
    openHouseOnline: "Online",
    openHouseTime: "Time",
    openHouseAddress: "Address",
    openHouseStatusUpcoming: "Upcoming",
    openHouseStatusOngoing: "In progress",
    openHouseStatusFinished: "Ended",
    navDsaGuide: "DSA Guide",
    navOpenHouses: "Open houses",
    navScores: "PSLE COP",
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
    scoresPageH1: "PSLE COP historical dashboard",
    scoresPageLead:
      "Compare 2025 G3 (non-affiliated) posting bands, year-on-year deltas, and full 2023–2025 streams for MOE secondary schools in our table. Filter by SAP, IP, gender, and zone.",
    scoresFilterToolbarAria: "Filters: search, zone, SAP, IP, gender, sort",
    homeScoresCardTitle:
      "View 5-year PSLE COP trends for 150+ secondary schools island-wide",
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
    scoreboardColG3NonAff: "2025 · G3 non-aff.",
    scoreboardDetailMatrix: "2023–2025 streams",
    scoreboardGenderBoys: "Boys",
    scoreboardGenderGirls: "Girls",
    ...dsaGuideEn,
  },
  zh: {
    metaTitle: "DSA Link 新加坡 | DSA 2026 倒计时与官方入口导航",
    metaDescription:
      "为家长整理新加坡直接收生计划（DSA）官方入口、2026 申请截止倒计时与实用指引 — DSA Link（dsalink.sg）。",
    navBrand: "DSA Link",
    navTagline: "新加坡 · DSA 2026",
    heroBadge: "面向家庭的独立导航站",
    heroTitle: "让 DSA 信息更好找、更好懂。",
    heroSubtitle:
      "从 MOE 权威页面、关键日期到各中学 DSA 入口，移动端优先，界面简洁，帮助您快速定位官方来源。",
    countdownLabel: "距离 DSA 2026 申请截止（参考大日期）",
    countdownComplete: "倒计时已结束 — 请以 MOE 最新公布为准。",
    countdownDays: "天",
    countdownHours: "小时",
    countdownMinutes: "分钟",
    countdownSeconds: "秒",
    countdownDeadlineLine: "2026年5月31日 · 23:59（新加坡时间 SGT）",
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
    adLabel: "广告位预留",
    adPlaceholder:
      "非干扰区域预留；上线时将做清晰标注，符合社区站点定位。",
    footerRights: "© dsalink.sg · 助力家长从容应对新加坡 DSA",
    extHint: "外部链接",
    a11yLanguageSelector: "选择语言",
    openHouseKicker: "2026年5月 · 全岛",
    sectionOpenHouseTitle: "中学开放日 · DSA 与招生",
    sectionOpenHouseDesc:
      "收录 MOE 名录中 147 所中学：中英文校名、区域、学校类型与官网 DSA/招生链接。开放日时间除已公布者外暂标为 2026 年 5 月（待定），请以各校页面为准。",
    openHouseOfficialLink: "官方开放日 / 招生页面",
    openHouseOfficialBooking: "DSA / 招生",
    openHouseOnsite: "线下",
    openHouseOnline: "线上",
    openHouseTime: "时间",
    openHouseAddress: "地址",
    openHouseStatusUpcoming: "即将开放",
    openHouseStatusOngoing: "火热进行中",
    openHouseStatusFinished: "已结束",
    navDsaGuide: "DSA 指南",
    navOpenHouses: "开放日",
    navScores: "PSLE COP",
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
    scoreboardBadgeAffiliated: "附属加分",
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
    scoresPageH1: "PSLE COP 历年数据看板",
    scoresPageLead:
      "对比 2025 G3 对外分档、相对 2024 的松紧变化，以及 2023–2025 全细分。可按特选、IP、单性别与区域筛选。",
    scoresFilterToolbarAria: "筛选：搜索、区域、特选、IP、性别、排序",
    homeScoresCardTitle: "查看全岛 150+ 中学 5 年 PSLE 分数趋势",
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
    scoreboardColG3NonAff: "2025 · G3 对外",
    scoreboardDetailMatrix: "2023–2025 细分",
    scoreboardGenderBoys: "男校",
    scoreboardGenderGirls: "女校",
    ...dsaGuideZh,
  },
  ms: {
    metaTitle: "DSA Link Singapura | Kiraan Detik DSA 2026 & Sumber Rasmi",
    metaDescription:
      "Navigasi Penempatan Langsung ke Sekolah Menengah (DSA) Singapura dengan pautan rasmi yang dipercayai, kiraan detik permohonan 2026, dan panduan jelas untuk ibu bapa — DSA Link (dsalink.sg).",
    navBrand: "DSA Link",
    navTagline: "Singapura · DSA 2026",
    heroBadge: "Sumber bebas untuk keluarga",
    heroTitle: "Penempatan Langsung ke Sekolah Menengah, dipermudahkan.",
    heroSubtitle:
      "Satu titik permulaan yang tenang untuk maklumat rasmi MOE, tarikh penting, dan halaman DSA sekolah menengah — direka untuk kejelasan dan kelajuan pada telefon pintar.",
    countdownLabel: "Masa sehingga permohonan DSA 2026 ditutup",
    countdownComplete:
      "Kiraan detik tamat — sila sahkan tarikh akhir terkini di laman MOE.",
    countdownDays: "Hari",
    countdownHours: "Jam",
    countdownMinutes: "Minit",
    countdownSeconds: "Saat",
    countdownDeadlineLine: "31 Mei 2026 · 23:59 Waktu Singapura (SGT)",
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
    adLabel: "Ruang iklan",
    adPlaceholder:
      "Dikhaskan untuk satu penempatan yang dilabel dengan jelas — selaras dengan sumber komuniti.",
    footerRights:
      "© dsalink.sg · Untuk ibu bapa yang menavigasi DSA di Singapura",
    extHint: "Pautan luar",
    a11yLanguageSelector: "Pilih bahasa",
    openHouseKicker: "Mei 2026",
    sectionOpenHouseTitle: "Hari terbuka sekolah · sorotan musim DSA",
    sectionOpenHouseDesc:
      "Disusun daripada kalendar Mei 2026. Masa dan mod di tapak / dalam talian adalah anggaran — sentiasa sahkan di laman rasmi setiap sekolah.",
    openHouseOfficialLink: "Hari terbuka / kemasukan rasmi",
    openHouseOfficialBooking: "Tempahan rasmi",
    openHouseOnsite: "Di tapak",
    openHouseOnline: "Dalam talian",
    openHouseTime: "Masa",
    openHouseAddress: "Alamat",
    openHouseStatusUpcoming: "Akan datang",
    openHouseStatusOngoing: "Sedang berlangsung",
    openHouseStatusFinished: "Tamat",
    navDsaGuide: "Panduan DSA",
    navOpenHouses: "Hari terbuka",
    navScores: "PSLE COP",
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
    openHouseResultsSummary: "{{shown}} daripada {{total}} sekolah",
    scoreboardTitle: "Matriks COP PSLE (AL, 2023–2025)",
    scoreboardSubtitle:
      "Lalai: jalur G3 bukan berafiliasi 2025; sekolah IP menunjukkan jalur IP. Data anggaran daripada sumber awam; rujuk laman rasmi sekolah.",
    scoreboardSearchPlaceholder: "Nama sekolah…",
    scoreboardFilterRegion: "Zon",
    scoreboardFilterType: "Jenis",
    scoreboardAll: "Semua",
    scoreboardCol2025: "COP 2025",
    scoreboardColYear: "Tahun",
    scoreboardTrackNonIp: "Bukan-IP",
    scoreboardTrackIp: "IP",
    scoreboardBadgeAffiliated: "Berafiliasi",
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
    scoresPageH1: "Papan data PSLE COP (2021–2025)",
    scoresPageLead:
      "Bandingkan G3 2025, perubahan berbanding 2024, dan semua aliran 2023–2025. Tapis SAP, IP, jantina, zon.",
    scoresFilterToolbarAria: "Penapis: carian, zon, SAP, IP, jantina, isihan",
    homeScoresCardTitle:
      "Lihat trend COP PSLE 5 tahun untuk 150+ sekolah menengah",
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
    scoreboardColG3NonAff: "2025 · G3 bukan afiliasi",
    scoreboardDetailMatrix: "Aliran 2023–2025",
    scoreboardGenderBoys: "Lelaki",
    scoreboardGenderGirls: "Perempuan",
    ...dsaGuideMs,
  },
  ta: {
    metaTitle:
      "DSA Link சிங்கப்பூர் | DSA 2026 அதிகாரப்பூர்வ கவுண்ட்டவுன் & வளங்கள்",
    metaDescription:
      "நம்பகமான அதிகாரப்பூர்வ இணைப்புகள், 2026 விண்ணப்ப முடிவுக்கான எண்ணிக்கை, தெளிவான பெற்றோர் வழிகாட்டிகளுடன் சிங்கப்பூர் நேரடி பள்ளி சேர்க்கை (DSA) — DSA Link (dsalink.sg).",
    navBrand: "DSA Link",
    navTagline: "சிங்கப்பூர் · DSA 2026",
    heroBadge: "குடும்பங்களுக்கான சுயாதீன வளம்",
    heroTitle: "நேரடி பள்ளி சேர்க்கை, எளிதாக்கப்பட்டது.",
    heroSubtitle:
      "அதிகாரப்பூர்வ MOE தகவல், முக்கிய தேதிகள் மற்றும் இடைநிலைப் பள்ளி DSA பக்கங்களுக்கு ஒரு அமைதியான தொடக்கப் புள்ளி — மொபைலில் தெளிவு மற்றும் வேகத்திற்காக உருவாக்கப்பட்டது.",
    countdownLabel: "DSA 2026 விண்ணப்பம் மூடப்படும் வரையிலான நேரம்",
    countdownComplete:
      "கவுண்ட்டவுன் முடிந்தது — சமீபத்திய காலக்கெடுவை MOE இல் சரிபார்க்கவும்.",
    countdownDays: "நாட்கள்",
    countdownHours: "மணிநேரம்",
    countdownMinutes: "நிமிடங்கள்",
    countdownSeconds: "வினாடிகள்",
    countdownDeadlineLine: "31 மே 2026 · 23:59 SGT",
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
    adLabel: "விளம்பர இடம்",
    adPlaceholder:
      "ஒற்றை, தெளிவாக லேபிளிடப்பட்ட இடத்திற்கு ஒதுக்கப்பட்டது — சமூக வளத்துடன் இணைந்தது.",
    footerRights:
      "© dsalink.sg · சிங்கப்பூரில் DSA ஐ நடத்தும் பெற்றோருக்காக",
    extHint: "வெளியே திறக்கிறது",
    a11yLanguageSelector: "மொழியைத் தேர்ந்தெடுக்கவும்",
    openHouseKicker: "மே 2026",
    sectionOpenHouseTitle: "பள்ளி திறந்த வீடுகள் · DSA சீசன் சிறப்புகள்",
    sectionOpenHouseDesc:
      "எங்கள் மே 2026 நாட்காட்டியிலிருந்து தேர்ந்தெடுக்கப்பட்டது. நேரங்கள் மற்றும் நேரடி / ஆன்லைன் முறைமைகள் குறிப்பிட்டவை — ஒவ்வொரு பள்ளியின் அதிகாரப்பூர்வ பக்கத்திலும் உறுதிப்படுத்தவும்.",
    openHouseOfficialLink: "அதிகாரப்பூர்வ திறந்த வீடு / சேர்க்கை",
    openHouseOfficialBooking: "அதிகாரப்பூர்வ முன்பதிவு",
    openHouseOnsite: "நேரடி",
    openHouseOnline: "ஆன்லைன்",
    openHouseTime: "நேரம்",
    openHouseAddress: "முகவரி",
    openHouseStatusUpcoming: "வரவுள்ள",
    openHouseStatusOngoing: "நடைபெறுகிறது",
    openHouseStatusFinished: "முடிந்தது",
    navDsaGuide: "DSA வழிகாட்டி",
    navOpenHouses: "திறந்த வீடுகள்",
    navScores: "PSLE COP",
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
    scoreboardBadgeAffiliated: "இணைப்பு",
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
    scoresPageH1: "PSLE COP வரலாற்று டாஷ்போர்டு",
    scoresPageLead:
      "2025 G3, 2024 உடன் ஒப்பீடு, 2023–2025 அனைத்து ஓட்டங்கள். SAP, IP, ஒரு பாலினம், மண்டலம் வடிகட்டல்.",
    scoresFilterToolbarAria: "வடிகட்டிகள்: தேடல், மண்டலம், SAP, IP, பாலினம், வரிசை",
    homeScoresCardTitle:
      "தீவு முழுவதும் 150+ பள்ளிகளின் 5 ஆண்டு PSLE COP போக்குகளைக் காண்க",
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
    scoreboardColG3NonAff: "2025 · G3 புற",
    scoreboardDetailMatrix: "2023–2025 ஓட்டங்கள்",
    scoreboardGenderBoys: "ஆண்கள்",
    scoreboardGenderGirls: "பெண்கள்",
    ...dsaGuideTa,
  },
};
