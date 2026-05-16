# CURSOR TASK: i18n 第一批新增 Key（必须最先执行）

## 重要
本任务是后续所有 i18n 任务的前提。请单独执行，完成后再并行执行其余任务。

## 涉及文件
- `lib/i18n.ts` — 仅此一个文件，分三步改动

---

## 改动 1 — Copy 类型新增字段

在 `} & DsaGuideStrings;` 这一行**之前**插入以下字段：

```ts
  // StatsStrip
  statsLabel1: string;
  statsLabel2: string;
  statsLabel3: string;
  statsLabel4: string;
  // ParentJourneyStrip
  journeyTitle: string;
  journeyStep1Title: string;
  journeyStep1Desc: string;
  journeyStep2Title: string;
  journeyStep2Desc: string;
  journeyStep3Title: string;
  journeyStep3Desc: string;
  journeyStep4Title: string;
  journeyStep4Desc: string;
  // DsaExperienceCallout
  dsaExpCalloutKicker: string;
  dsaExpCalloutTitle: string;
  dsaExpCalloutCta: string;
  dsaExpCalloutItem1: string;
  dsaExpCalloutItem2: string;
  dsaExpCalloutItem3: string;
  dsaExpCalloutItem4: string;
  dsaExpCalloutItem5: string;
  // DeadlineCard
  deadlineLabel: string;
  deadlineUrgentLabel: string;
  deadlineDate: string;
  deadlineClosesToday: string;
  deadlineDaysLeftSuffix: string;
  // HomeCtaBlock
  ctaFreePersonalisedTool: string;
  ctaTrustTimeLabel: string;
  ctaTrustFreeLabel: string;
  ctaTrustPersonalVal: string;
  ctaTrustPersonalLabel: string;
  // DsaStrategySection
  dsaStrategyNotSureCta: string;
  // SiteFooter
  footerScopeNote: string;
  // HomepageSubscribeBanner
  subscribeError: string;
  // DsaExplainerSection
  dsaExplainerKicker: string;
  dsaExplainerH2: string;
  dsaExplainerIntro: string;
  dsaExplainerPathwaysTitle: string;
  dsaExplainerSvgP6Label: string;
  dsaExplainerSvgAnyPrimary: string;
  dsaExplainerSvgPslePosting: string;
  dsaExplainerSvgPsleScore: string;
  dsaExplainerSvgDsaPathway: string;
  dsaExplainerSvgDsaTalent: string;
  dsaExplainerSvgPsleCompete: string;
  dsaExplainerSvgPsleResult: string;
  dsaExplainerSvgDsaSecured: string;
  dsaExplainerSvgDsaHow: string;
  dsaExplainerMisconceptionsLabel: string;
  dsaExplainerMythLabel: string;
  dsaExplainerFactLabel: string;
  dsaExplainerSearchCta: string;
  dsaExplainerPoweredBy: string;
  dsaExplainerFootnote: string;
  // DsaExperiencePageBody
  dsaExpTocLabel: string;
  dsaExpBodyCtaTitle: string;
  dsaExpBodyCtaDesc: string;
  dsaExpBodyCtaBtn: string;
```

---

## 改动 2 — `en:` 对象末尾追加翻译

找到 `en:` 对象的最后一个键值对之后、`},` 之前，追加：

```ts
    statsLabel1: "Secondary schools covered",
    statsLabel2: "DSA talent areas mapped",
    statsLabel3: "To get your personalised match",
    statsLabel4: "Free for all P6 families",
    journeyTitle: "Your DSA Journey",
    journeyStep1Title: "Understand DSA",
    journeyStep1Desc: "What it is and if it fits your child",
    journeyStep2Title: "Find schools",
    journeyStep2Desc: "1,300+ talent areas · 147 schools",
    journeyStep3Title: "Visit open houses",
    journeyStep3Desc: "Know what to ask before you go",
    journeyStep4Title: "Apply by 2 Jun",
    journeyStep4Desc: "Free · via MOE portal",
    dsaExpCalloutKicker: "FEATURED GUIDE · FREE",
    dsaExpCalloutTitle: "The DSA Experience: What Parents Wish They Knew",
    dsaExpCalloutCta: "Read the guide",
    dsaExpCalloutItem1: "How DSA offers interact with your PSLE AL score",
    dsaExpCalloutItem2: "School selectivity tiers — which schools are truly competitive",
    dsaExpCalloutItem3: "Sports, arts, STEM & leadership — what each pathway really evaluates",
    dsaExpCalloutItem4: "The 2026 DSA timeline, week by week",
    dsaExpCalloutItem5: "Common mistakes parents make — and how to avoid them",
    deadlineLabel: "KEY DEADLINE",
    deadlineUrgentLabel: "CLOSING SOON",
    deadlineDate: "DSA closes 2 Jun 2026, 4:30pm SGT",
    deadlineClosesToday: "Closes today",
    deadlineDaysLeftSuffix: "days left",
    ctaFreePersonalisedTool: "Free personalised tool",
    ctaTrustTimeLabel: "to complete",
    ctaTrustFreeLabel: "always",
    ctaTrustPersonalVal: "Personalised",
    ctaTrustPersonalLabel: "to your child",
    dsaStrategyNotSureCta: "Not sure? Try the School Finder →",
    footerScopeNote: "DSALink covers DSA-Sec (P6 → Secondary 1) only. DSA-JC is a separate process not covered here.",
    subscribeError: "Something went wrong. Please try again.",
    dsaExplainerKicker: "Direct School Admission · DSA 2026",
    dsaExplainerH2: "Before PSLE results day, the right school can already say yes.",
    dsaExplainerIntro: "DSA is a free MOE programme that lets P6 students apply to secondary schools based on their interests, aptitude, and potential — not just PSLE results.",
    dsaExplainerPathwaysTitle: "Two pathways to secondary school",
    dsaExplainerSvgP6Label: "P6 Student",
    dsaExplainerSvgAnyPrimary: "Any primary school",
    dsaExplainerSvgPslePosting: "PSLE Posting",
    dsaExplainerSvgPsleScore: "Score → school · November",
    dsaExplainerSvgDsaPathway: "DSA Pathway",
    dsaExplainerSvgDsaTalent: "Talent → school · Before PSLE",
    dsaExplainerSvgPsleCompete: "Compete with all P6 students",
    dsaExplainerSvgPsleResult: "Results day: November 2026",
    dsaExplainerSvgDsaSecured: "School secured before PSLE",
    dsaExplainerSvgDsaHow: "Talent · Portfolio · Interview",
    dsaExplainerMisconceptionsLabel: "Common misconceptions",
    dsaExplainerMythLabel: "Myth",
    dsaExplainerFactLabel: "Fact",
    dsaExplainerSearchCta: "Search talent areas",
    dsaExplainerPoweredBy: "Powered by DSALink, free, independent, not affiliated with MOE",
    dsaExplainerFootnote: "*DSA does not replace PSLE. Your child still sits the exam and must meet the school's minimum posting group score. Source: MOE (",
    dsaExpTocLabel: "On this page",
    dsaExpBodyCtaTitle: "Ready to find the right school?",
    dsaExpBodyCtaDesc: "Use our School Recommender to shortlist Safe, Reach, and Dream options based on your child's talent tier and PSLE projection.",
    dsaExpBodyCtaBtn: "Try our School Recommender",
```

---

## 改动 3 — `zh:` 对象末尾追加翻译

```ts
    statsLabel1: "覆盖中学数量",
    statsLabel2: "DSA 才能领域已收录",
    statsLabel3: "获取个性化推荐",
    statsLabel4: "小六家庭全部免费",
    journeyTitle: "你的 DSA 之旅",
    journeyStep1Title: "了解 DSA",
    journeyStep1Desc: "它是什么，是否适合你的孩子",
    journeyStep2Title: "寻找学校",
    journeyStep2Desc: "1,300+ 才能领域 · 147 所中学",
    journeyStep3Title: "参加开放日",
    journeyStep3Desc: "提前了解该问什么",
    journeyStep4Title: "6 月 2 日前申请",
    journeyStep4Desc: "免费 · 通过 MOE 门户",
    dsaExpCalloutKicker: "精选指南 · 免费",
    dsaExpCalloutTitle: "DSA 经验：家长希望早知道的事",
    dsaExpCalloutCta: "阅读指南",
    dsaExpCalloutItem1: "DSA 录取如何与 PSLE AL 分数相互影响",
    dsaExpCalloutItem2: "学校选拔层级——哪些学校真正具有竞争性",
    dsaExpCalloutItem3: "体育、艺术、STEM 与领导力——每条路径真正评估什么",
    dsaExpCalloutItem4: "2026 年 DSA 时间轴，逐周说明",
    dsaExpCalloutItem5: "家长常犯的错误——以及如何避免",
    deadlineLabel: "重要截止日期",
    deadlineUrgentLabel: "即将截止",
    deadlineDate: "DSA 申请于 2026 年 6 月 2 日下午 4:30（新加坡时间）截止",
    deadlineClosesToday: "今日截止",
    deadlineDaysLeftSuffix: "天后截止",
    ctaFreePersonalisedTool: "免费个性化工具",
    ctaTrustTimeLabel: "即可完成",
    ctaTrustFreeLabel: "永久免费",
    ctaTrustPersonalVal: "个性化推荐",
    ctaTrustPersonalLabel: "专属孩子",
    dsaStrategyNotSureCta: "不确定？试试学校搜索器 →",
    footerScopeNote: "DSALink 仅涵盖小六升中一的 DSA-Sec。升初院的 DSA-JC 为独立流程，不在本站范围内。",
    subscribeError: "出现错误，请重试。",
    dsaExplainerKicker: "直接收生 · DSA 2026",
    dsaExplainerH2: "PSLE 放榜前，孩子的才能就能锁定学校",
    dsaExplainerIntro: "DSA 是教育部的免费计划，让小六学生能凭兴趣、能力和潜能申请中学，不只看 PSLE 成绩。",
    dsaExplainerPathwaysTitle: "中学升学：两条路径",
    dsaExplainerSvgP6Label: "P6 学生",
    dsaExplainerSvgAnyPrimary: "任何小学均可",
    dsaExplainerSvgPslePosting: "PSLE 统一分配",
    dsaExplainerSvgPsleScore: "分数决定学校 · 11月放榜",
    dsaExplainerSvgDsaPathway: "DSA 直通通道",
    dsaExplainerSvgDsaTalent: "才能决定学校 · PSLE前锁定",
    dsaExplainerSvgPsleCompete: "与全体考生竞争分数",
    dsaExplainerSvgPsleResult: "结果：2026年11月",
    dsaExplainerSvgDsaSecured: "PSLE前已锁定学校",
    dsaExplainerSvgDsaHow: "才能 · 作品集 · 面试",
    dsaExplainerMisconceptionsLabel: "常见误解",
    dsaExplainerMythLabel: "误解",
    dsaExplainerFactLabel: "事实",
    dsaExplainerSearchCta: "搜索才能领域",
    dsaExplainerPoweredBy: "由 DSALink 提供，免费、独立，与教育部无隶属关系",
    dsaExplainerFootnote: "*DSA 不会取代 PSLE。孩子仍需参加考试，并达到学校的最低分配组别要求。资料来源：MOE (",
    dsaExpTocLabel: "本页内容",
    dsaExpBodyCtaTitle: "准备好找到合适的学校了吗？",
    dsaExpBodyCtaDesc: "使用我们的学校推荐工具，根据孩子的才能领域和预估 PSLE 分数，筛选保底、冲刺和梦想学校。",
    dsaExpBodyCtaBtn: "使用学校推荐工具",
```

---

## 改动 4 — `ms:` 对象末尾追加翻译

```ts
    statsLabel1: "Sekolah menengah diliputi",
    statsLabel2: "Bidang bakat DSA dipetakan",
    statsLabel3: "Untuk mendapat padanan peribadi anda",
    statsLabel4: "Percuma untuk semua keluarga Darjah 6",
    journeyTitle: "Perjalanan DSA Anda",
    journeyStep1Title: "Fahami DSA",
    journeyStep1Desc: "Apa itu dan sama ada ia sesuai untuk anak anda",
    journeyStep2Title: "Cari sekolah",
    journeyStep2Desc: "1,300+ bidang bakat · 147 sekolah",
    journeyStep3Title: "Lawati rumah terbuka",
    journeyStep3Desc: "Tahu apa yang perlu ditanya sebelum pergi",
    journeyStep4Title: "Mohon sebelum 2 Jun",
    journeyStep4Desc: "Percuma · melalui portal MOE",
    dsaExpCalloutKicker: "PANDUAN PILIHAN · PERCUMA",
    dsaExpCalloutTitle: "Pengalaman DSA: Apa yang Ibu Bapa Ingin Tahu",
    dsaExpCalloutCta: "Baca panduan",
    dsaExpCalloutItem1: "Bagaimana tawaran DSA berinteraksi dengan skor AL PSLE anda",
    dsaExpCalloutItem2: "Peringkat selektiviti sekolah — sekolah mana yang benar-benar kompetitif",
    dsaExpCalloutItem3: "Sukan, seni, STEM & kepimpinan — apa yang setiap laluan benar-benar nilai",
    dsaExpCalloutItem4: "Garis masa DSA 2026, minggu demi minggu",
    dsaExpCalloutItem5: "Kesilapan biasa yang dilakukan ibu bapa — dan cara mengelakkannya",
    deadlineLabel: "TARIKH AKHIR UTAMA",
    deadlineUrgentLabel: "AKAN DITUTUP SEGERA",
    deadlineDate: "DSA ditutup 2 Jun 2026, 4:30ptg SGT",
    deadlineClosesToday: "Ditutup hari ini",
    deadlineDaysLeftSuffix: "hari lagi",
    ctaFreePersonalisedTool: "Alat percuma diperibadikan",
    ctaTrustTimeLabel: "untuk selesai",
    ctaTrustFreeLabel: "sentiasa",
    ctaTrustPersonalVal: "Diperibadikan",
    ctaTrustPersonalLabel: "untuk anak anda",
    dsaStrategyNotSureCta: "Tidak pasti? Cuba Pencari Sekolah →",
    footerScopeNote: "DSALink hanya meliputi DSA-Sec (Darjah 6 → Menengah 1). DSA-JC ialah proses berasingan yang tidak diliputi di sini.",
    subscribeError: "Sesuatu telah berlaku. Sila cuba lagi.",
    dsaExplainerKicker: "Kemasukan Terus Sekolah · DSA 2026",
    dsaExplainerH2: "Sebelum hari keputusan PSLE, sekolah yang tepat sudah boleh berkata ya.",
    dsaExplainerIntro: "DSA adalah program percuma MOE yang membolehkan pelajar Darjah 6 memohon ke sekolah menengah berdasarkan minat, bakat, dan potensi mereka — bukan sahaja keputusan PSLE.",
    dsaExplainerPathwaysTitle: "Dua laluan ke sekolah menengah",
    dsaExplainerSvgP6Label: "Pelajar Darjah 6",
    dsaExplainerSvgAnyPrimary: "Mana-mana sekolah rendah",
    dsaExplainerSvgPslePosting: "Penempatan PSLE",
    dsaExplainerSvgPsleScore: "Skor → sekolah · November",
    dsaExplainerSvgDsaPathway: "Laluan DSA",
    dsaExplainerSvgDsaTalent: "Bakat → sekolah · Sebelum PSLE",
    dsaExplainerSvgPsleCompete: "Bersaing dengan semua pelajar Darjah 6",
    dsaExplainerSvgPsleResult: "Hari keputusan: November 2026",
    dsaExplainerSvgDsaSecured: "Sekolah dijamin sebelum PSLE",
    dsaExplainerSvgDsaHow: "Bakat · Portfolio · Temuduga",
    dsaExplainerMisconceptionsLabel: "Salah faham biasa",
    dsaExplainerMythLabel: "Mitos",
    dsaExplainerFactLabel: "Fakta",
    dsaExplainerSearchCta: "Cari bidang bakat",
    dsaExplainerPoweredBy: "Dikuasakan oleh DSALink, percuma, bebas, tidak berkaitan dengan MOE",
    dsaExplainerFootnote: "*DSA tidak menggantikan PSLE. Anak anda masih perlu menduduki peperiksaan dan memenuhi skor kumpulan penempatan minimum sekolah. Sumber: MOE (",
    dsaExpTocLabel: "Di halaman ini",
    dsaExpBodyCtaTitle: "Bersedia untuk mencari sekolah yang tepat?",
    dsaExpBodyCtaDesc: "Gunakan Pencadang Sekolah kami untuk menyenarai pendekkan pilihan Selamat, Capaian dan Impian berdasarkan bidang bakat dan unjuran PSLE anak anda.",
    dsaExpBodyCtaBtn: "Cuba Pencadang Sekolah kami",
```

---

## 改动 5 — `ta:` 对象末尾追加翻译

```ts
    statsLabel1: "இடைநிலைப் பள்ளிகள் உள்ளடக்கப்பட்டன",
    statsLabel2: "DSA திறன் பகுதிகள் வரைபடமாக்கப்பட்டன",
    statsLabel3: "உங்கள் தனிப்பயன் பொருத்தம் பெற",
    statsLabel4: "அனைத்து P6 குடும்பங்களுக்கும் இலவசம்",
    journeyTitle: "உங்கள் DSA பயணம்",
    journeyStep1Title: "DSA-ஐப் புரிந்துகொள்ளுங்கள்",
    journeyStep1Desc: "அது என்னவென்றும் உங்கள் குழந்தைக்கு ஏற்றதா என்றும்",
    journeyStep2Title: "பள்ளிகளைக் கண்டறியுங்கள்",
    journeyStep2Desc: "1,300+ திறன் பகுதிகள் · 147 பள்ளிகள்",
    journeyStep3Title: "திறந்த நாள்களுக்குச் செல்லுங்கள்",
    journeyStep3Desc: "செல்வதற்கு முன் என்ன கேட்க வேண்டும் என்று தெரிந்துகொள்ளுங்கள்",
    journeyStep4Title: "2 ஜூன் வரை விண்ணப்பிக்கவும்",
    journeyStep4Desc: "இலவசம் · MOE போர்டல் வழியாக",
    dsaExpCalloutKicker: "சிறப்பு வழிகாட்டி · இலவசம்",
    dsaExpCalloutTitle: "DSA அனுபவம்: பெற்றோர் அறிய விரும்புவது",
    dsaExpCalloutCta: "வழிகாட்டியைப் படியுங்கள்",
    dsaExpCalloutItem1: "DSA சலுகைகள் உங்கள் PSLE AL மதிப்பெண்ணுடன் எவ்வாறு தொடர்புடையது",
    dsaExpCalloutItem2: "பள்ளி தேர்வு அடுக்குகள் — எந்த பள்ளிகள் உண்மையில் போட்டித்தன்மை வாய்ந்தவை",
    dsaExpCalloutItem3: "விளையாட்டு, கலை, STEM & தலைமைத்துவம் — ஒவ்வொரு பாதையும் உண்மையில் மதிப்பிடுவது",
    dsaExpCalloutItem4: "2026 DSA கால அட்டவணை, வாரந்தோறும்",
    dsaExpCalloutItem5: "பெற்றோர் செய்யும் பொதுவான தவறுகள் — அவற்றை எவ்வாறு தவிர்ப்பது",
    deadlineLabel: "முக்கிய காலக்கெடு",
    deadlineUrgentLabel: "விரைவில் மூடுகிறது",
    deadlineDate: "DSA 2026 ஜூன் 2, மாலை 4:30 SGT அன்று மூடுகிறது",
    deadlineClosesToday: "இன்று மூடுகிறது",
    deadlineDaysLeftSuffix: "நாட்கள் மீதம்",
    ctaFreePersonalisedTool: "இலவச தனிப்பயன் கருவி",
    ctaTrustTimeLabel: "முடிக்க",
    ctaTrustFreeLabel: "எப்போதும்",
    ctaTrustPersonalVal: "தனிப்பயனாக்கப்பட்டது",
    ctaTrustPersonalLabel: "உங்கள் குழந்தைக்கு",
    dsaStrategyNotSureCta: "உறுதியில்லையா? பள்ளி தேடியைப் பயன்படுத்துங்கள் →",
    footerScopeNote: "DSALink DSA-Sec (P6 → இடைநிலை 1) மட்டுமே உள்ளடக்குகிறது. DSA-JC ஒரு தனி செயல்முறை — இங்கு உள்ளடக்கப்படவில்லை.",
    subscribeError: "ஏதோ தவறு நடந்தது. மீண்டும் முயற்சிக்கவும்.",
    dsaExplainerKicker: "நேரடி பள்ளி சேர்க்கை · DSA 2026",
    dsaExplainerH2: "PSLE முடிவு நாளுக்கு முன்பே, சரியான பள்ளி ஆமோதிக்கலாம்.",
    dsaExplainerIntro: "DSA என்பது MOE-இன் இலவச திட்டமாகும் — P6 மாணவர்கள் PSLE முடிவுகள் மட்டுமல்லாமல் அவர்களின் ஆர்வம், திறன் மற்றும் திறமை அடிப்படையில் இடைநிலைப் பள்ளிகளுக்கு விண்ணப்பிக்கலாம்.",
    dsaExplainerPathwaysTitle: "இடைநிலைப் பள்ளிக்கு இரண்டு பாதைகள்",
    dsaExplainerSvgP6Label: "P6 மாணவர்",
    dsaExplainerSvgAnyPrimary: "எந்த தொடக்கப் பள்ளியும்",
    dsaExplainerSvgPslePosting: "PSLE நியமனம்",
    dsaExplainerSvgPsleScore: "மதிப்பெண் → பள்ளி · நவம்பர்",
    dsaExplainerSvgDsaPathway: "DSA பாதை",
    dsaExplainerSvgDsaTalent: "திறன் → பள்ளி · PSLE-க்கு முன்",
    dsaExplainerSvgPsleCompete: "அனைத்து P6 மாணவர்களுடன் போட்டியிடுங்கள்",
    dsaExplainerSvgPsleResult: "முடிவு நாள்: நவம்பர் 2026",
    dsaExplainerSvgDsaSecured: "PSLE-க்கு முன் பள்ளி உறுதிப்படுத்தப்பட்டது",
    dsaExplainerSvgDsaHow: "திறன் · போர்ட்ஃபோலியோ · நேர்காணல்",
    dsaExplainerMisconceptionsLabel: "பொதுவான தவறான கருத்துக்கள்",
    dsaExplainerMythLabel: "தவறான கருத்து",
    dsaExplainerFactLabel: "உண்மை",
    dsaExplainerSearchCta: "திறன் பகுதிகளைத் தேடுங்கள்",
    dsaExplainerPoweredBy: "DSALink-ஆல் இயக்கப்படுகிறது — இலவசம், சுயாதீனம், MOE-உடன் தொடர்பில்லை",
    dsaExplainerFootnote: "*DSA, PSLE-ஐ மாற்றாது. உங்கள் குழந்தை இன்னும் தேர்வில் கலந்துகொண்டு பள்ளியின் குறைந்தபட்ச நியமன மதிப்பெண்ணை பூர்த்தி செய்ய வேண்டும். ஆதாரம்: MOE (",
    dsaExpTocLabel: "இந்தப் பக்கத்தில்",
    dsaExpBodyCtaTitle: "சரியான பள்ளியைக் கண்டறிய தயாரா?",
    dsaExpBodyCtaDesc: "உங்கள் குழந்தையின் திறன் பகுதி மற்றும் PSLE மதிப்பெண் அடிப்படையில் Safe, Reach, Dream பள்ளிகளை தேர்ந்தெடுக்க எங்கள் கருவியைப் பயன்படுத்துங்கள்.",
    dsaExpBodyCtaBtn: "பள்ளி பரிந்துரையாளரை முயற்சிக்கவும்",
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] `lib/i18n.ts` 中 Copy 类型、en/zh/ms/ta 四个对象各有以上新增键值
