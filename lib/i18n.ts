export const locales = ["en", "zh", "ms", "ta"] as const;

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
  footerDisclaimer: string;
  footerRights: string;
  extHint: string;
  a11yLanguageSelector: string;
};

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
    footerDisclaimer:
      "Independent community resource; not an official government site. Information may change; always verify with the Ministry of Education (MOE).",
    footerRights: "© dsalink.sg · Built for parents navigating DSA in Singapore",
    extHint: "Opens externally",
    a11yLanguageSelector: "Choose language",
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
    footerDisclaimer:
      "本站为独立社区资源，非政府官方网站。政策与日期可能调整，请以新加坡教育部（MOE）公布为准。",
    footerRights: "© dsalink.sg · 助力家长从容应对新加坡 DSA",
    extHint: "外部链接",
    a11yLanguageSelector: "选择语言",
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
    footerDisclaimer:
      "Sumber komuniti bebas; bukan laman rasmi kerajaan. Maklumat mungkin berubah; sentiasa sahkan dengan Kementerian Pendidikan (MOE).",
    footerRights:
      "© dsalink.sg · Untuk ibu bapa yang menavigasi DSA di Singapura",
    extHint: "Pautan luar",
    a11yLanguageSelector: "Pilih bahasa",
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
    footerDisclaimer:
      "சுயாதீன சமூக வளம்; அரசு அதிகாரப்பூர்வ தளம் அல்ல. தகவல் மாறலாம்; கல்வி அமைச்சகம் (MOE) மூலம் எப்போதும் உறுதிப்படுத்தவும்.",
    footerRights:
      "© dsalink.sg · சிங்கப்பூரில் DSA ஐ நடத்தும் பெற்றோருக்காக",
    extHint: "வெளியே திறக்கிறது",
    a11yLanguageSelector: "மொழியைத் தேர்ந்தெடுக்கவும்",
  },
};
