/**
 * DSA Interview Prep · talent-specific pages.
 *
 * Each talent gets its own page under /dsa-interview/[talent].
 * Phase B (2026-06-01): scaffold + placeholder copy.
 * Phase B+ (6/2-7/6): deep content backfilled per 5-week schedule.
 *
 * Slugs are STABLE — never rename once a page is indexed.
 */

export type TalentSlug =
  | "basketball"
  | "football"
  | "swimming"
  | "track-field"
  | "badminton"
  | "martial-arts"
  | "music"
  | "math";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

export type TalentPage = {
  slug: TalentSlug;
  /** ISO date when full content is expected to land. */
  contentReadyBy: string;
  /** One-line hook for hero. */
  hook: LocaleStr;
  /** ~2-sentence intro for hero subtitle. */
  intro: LocaleStr;
  /** Short label shown in nav and card lists. */
  navLabel: LocaleStr;
  /** Single-sentence summary used in hub card subtitles. */
  summary: LocaleStr;
  /** Sample participating schools — link to /dsa-finder for full list. */
  sampleSchools: string[];
  /** Meta description for SEO. */
  metaDescription: LocaleStr;
};

const TALENT_DATA: Record<TalentSlug, TalentPage> = {
  basketball: {
    slug: "basketball",
    contentReadyBy: "2026-06-08",
    navLabel: { en: "Basketball", zh: "篮球", ms: "Bola Keranjang", ta: "கூடைப்பந்து" },
    hook: {
      en: "Basketball DSA — what the trial actually tests.",
      zh: "篮球 DSA——trial 到底在看什么。",
      ms: "DSA Bola Keranjang — apa yang trial sebenarnya nilai.",
      ta: "கூடைப்பந்து DSA — சோதனை உண்மையில் என்ன சோதிக்கிறது.",
    },
    intro: {
      en: "Trial coaches look at more than height and shooting form. We break down decision-making, defensive footwork, and the off-ball reads that get P6 players noticed.",
      zh: "trial 教练看的不止身高和投篮。我们拆解决策、防守脚步，以及让小六球员被注意到的无球阅读。",
      ms: "Jurulatih trial menilai lebih daripada ketinggian dan bentuk tembakan. Kami pecahkan keputusan, pergerakan kaki defensif, dan bacaan tanpa bola.",
      ta: "சோதனை பயிற்சியாளர்கள் உயரம் மற்றும் ஷூட்டிங் வடிவத்திற்கு அப்பால் பார்க்கிறார்கள். முடிவெடுத்தல், தற்காப்பு கால் நகர்வு, பந்து இல்லாத பகுதி வாசிப்பு ஆகியவற்றை விளக்குகிறோம்.",
    },
    summary: {
      en: "Trial criteria, position-specific drills, sample interview questions, participating schools.",
      zh: "Trial 评分维度、位置专项练习、面试题样、招生学校。",
      ms: "Kriteria trial, latihan khusus posisi, soalan temu duga contoh, sekolah peserta.",
      ta: "சோதனை அளவுகோல்கள், நிலை சார்ந்த பயிற்சிகள், மாதிரி நேர்காணல் கேள்விகள், பங்கேற்கும் பள்ளிகள்.",
    },
    sampleSchools: [
      "Anglo-Chinese School (Independent)",
      "Hwa Chong Institution",
      "Raffles Institution",
      "Dunman High School",
      "Catholic High School",
      "Nan Hua High School",
    ],
    metaDescription: {
      en: "How basketball DSA-Sec interviews and trials work in Singapore — what coaches assess, sample questions, and a list of participating secondary schools.",
      zh: "新加坡篮球 DSA-Sec 面试与 trial 全解析——教练考察什么、面试样题、招生中学清单。",
      ms: "Bagaimana temu duga dan trial DSA-Sec bola keranjang di Singapura — apa yang jurulatih nilai, soalan contoh, sekolah peserta.",
      ta: "சிங்கப்பூரில் கூடைப்பந்து DSA-Sec நேர்காணல் மற்றும் சோதனை எவ்வாறு செயல்படுகிறது — பயிற்சியாளர்கள் என்ன மதிப்பிடுகிறார்கள், மாதிரி கேள்விகள், பங்கேற்கும் பள்ளிகள்.",
    },
  },
  football: {
    slug: "football",
    contentReadyBy: "2026-06-15",
    navLabel: { en: "Football", zh: "足球", ms: "Bola Sepak", ta: "கால்பந்து" },
    hook: {
      en: "Football DSA — beyond the highlight reel.",
      zh: "足球 DSA——光看精彩集锦不够。",
      ms: "DSA Bola Sepak — lebih daripada cebisan terbaik.",
      ta: "கால்பந்து DSA — சிறந்த தருணங்களுக்கு அப்பால்.",
    },
    intro: {
      en: "Coaches at top SSP and SAP schools watch positioning, first touch, and how you react when the play breaks down. Here's what trials actually measure.",
      zh: "顶尖 SSP / SAP 学校的教练看跑位、第一脚处理、以及局势崩溃时你怎么应对。trial 实际在测什么。",
      ms: "Jurulatih di sekolah SSP dan SAP teratas menilai kedudukan, sentuhan pertama, dan reaksi anda apabila permainan terganggu.",
      ta: "சிறந்த SSP மற்றும் SAP பள்ளி பயிற்சியாளர்கள் நிலைப்படுத்தல், முதல் தொடுதல், விளையாட்டு உடைந்தபோது உங்கள் எதிர்வினையை பார்க்கிறார்கள்.",
    },
    summary: {
      en: "Trial drills, position breakdowns, interview questions, SSP/SAP schools to target.",
      zh: "Trial 项目、位置拆解、面试题样、SSP/SAP 学校清单。",
      ms: "Latihan trial, pecahan posisi, soalan temu duga, sekolah SSP/SAP.",
      ta: "சோதனை பயிற்சிகள், நிலை பகுப்பு, நேர்காணல் கேள்விகள், SSP/SAP பள்ளிகள்.",
    },
    sampleSchools: [
      "Victoria School",
      "Anglo-Chinese School (Barker Road)",
      "Hwa Chong Institution",
      "Saint Joseph's Institution",
      "Catholic High School",
    ],
    metaDescription: {
      en: "Football DSA-Sec interview & trial guide for Singapore P6 players — what trials measure, sample questions, SSP / SAP participating schools.",
      zh: "新加坡足球 DSA-Sec 面试与 trial 指南——trial 评分维度、面试题、SSP/SAP 招生学校。",
      ms: "Panduan temu duga & trial DSA-Sec bola sepak Singapura — apa trial nilai, soalan, sekolah SSP/SAP.",
      ta: "சிங்கப்பூர் P6 கால்பந்து வீரர்களுக்கான DSA-Sec வழிகாட்டி — சோதனை அளவுகோல்கள், கேள்விகள், SSP/SAP பள்ளிகள்.",
    },
  },
  swimming: {
    slug: "swimming",
    contentReadyBy: "2026-06-15",
    navLabel: { en: "Swimming", zh: "游泳", ms: "Renang", ta: "நீச்சல்" },
    hook: {
      en: "Swimming DSA — times, technique, and the interview most parents miss.",
      zh: "游泳 DSA——成绩、技术，以及家长最容易忽略的那场面试。",
      ms: "DSA Renang — masa, teknik, dan temu duga yang ibu bapa terlepas.",
      ta: "நீச்சல் DSA — நேரம், நுட்பம், பெற்றோர்கள் தவறவிடும் நேர்காணல்.",
    },
    intro: {
      en: "Top times open the door — but the interview decides who walks through. Here's how schools assess discipline, recovery, and your reason for choosing swim.",
      zh: "好成绩开门，面试决定谁能走进去。学校如何评估纪律、恢复能力、和你为什么选游泳。",
      ms: "Masa terbaik buka pintu — temu duga tentukan siapa masuk. Bagaimana sekolah nilai disiplin, pemulihan, alasan pilih renang.",
      ta: "சிறந்த நேரங்கள் வாசலைத் திறக்கின்றன — நேர்காணல் யார் உள்ளே செல்வது என்று தீர்மானிக்கிறது. பள்ளிகள் ஒழுக்கம், மீட்பு, நீச்சல் தேர்வு காரணத்தை எவ்வாறு மதிப்பிடுகின்றன.",
    },
    summary: {
      en: "Cut-off times, trial expectations, sample interview questions, top-tier schools.",
      zh: "录取时间标准、trial 要求、面试题样、顶级学校。",
      ms: "Masa potongan, jangkaan trial, soalan temu duga, sekolah teratas.",
      ta: "வெட்டுப்புள்ளி நேரம், சோதனை எதிர்பார்ப்புகள், நேர்காணல் கேள்விகள், சிறந்த பள்ளிகள்.",
    },
    sampleSchools: [
      "Raffles Institution",
      "Hwa Chong Institution",
      "Anglo-Chinese School (Independent)",
      "Singapore Sports School",
      "Methodist Girls' School",
    ],
    metaDescription: {
      en: "Swimming DSA-Sec guide for Singapore parents — qualifying times, trial expectations, interview questions, top participating schools.",
      zh: "新加坡游泳 DSA-Sec 指南——录取时间、trial 要求、面试题样、招生学校。",
      ms: "Panduan DSA-Sec renang Singapura — masa kelayakan, jangkaan trial, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் பெற்றோருக்கான நீச்சல் DSA-Sec வழிகாட்டி — தகுதி நேரங்கள், சோதனை, கேள்விகள், பள்ளிகள்.",
    },
  },
  "track-field": {
    slug: "track-field",
    contentReadyBy: "2026-06-22",
    navLabel: { en: "Track & Field", zh: "田径", ms: "Olahraga", ta: "தடகளம்" },
    hook: {
      en: "Track & Field DSA — sprint, distance, throws, and jumps each have different doors.",
      zh: "田径 DSA——短跑、长跑、投掷、跳跃，每个项目门槛不同。",
      ms: "DSA Olahraga — pecut, jarak jauh, lempar, lompat — pintu berbeza.",
      ta: "தடகள DSA — விரைவு, தூரம், எறிதல், தாவல் — ஒவ்வொன்றுக்கும் வேறு வாயில்.",
    },
    intro: {
      en: "Each event has its own benchmark. We break down what 100m, 800m, throws, and jumps need at the trial level — and what schools ask at interview.",
      zh: "每个项目有自己的标准。我们拆解 100m、800m、投掷、跳跃在 trial 阶段要什么，以及学校面试会问什么。",
      ms: "Setiap acara ada penanda arasnya. Kami pecahkan apa yang 100m, 800m, lempar, lompat perlukan di trial dan soalan temu duga.",
      ta: "ஒவ்வொரு நிகழ்விற்கும் அதன் மதிப்பெண் உள்ளது. 100m, 800m, எறிதல், தாவல் — சோதனையில் என்ன தேவை, நேர்காணலில் என்ன கேட்கப்படும் என்பதை விளக்குகிறோம்.",
    },
    summary: {
      en: "Per-event benchmarks, trial drills, interview questions, top schools per event.",
      zh: "各项目标准、trial 训练、面试题样、各项目顶尖学校。",
      ms: "Penanda aras setiap acara, latihan trial, soalan, sekolah teratas.",
      ta: "நிகழ்வு வாரியான மதிப்பெண், சோதனை பயிற்சிகள், கேள்விகள், பள்ளிகள்.",
    },
    sampleSchools: [
      "Raffles Institution",
      "Hwa Chong Institution",
      "Victoria School",
      "Saint Joseph's Institution",
      "Dunman High School",
    ],
    metaDescription: {
      en: "Track & Field DSA-Sec guide — sprint, distance, throws, jumps. Trial benchmarks, interview questions, participating Singapore secondary schools.",
      zh: "新加坡田径 DSA-Sec 指南——短跑、长跑、投掷、跳跃。trial 标准、面试题、招生学校。",
      ms: "Panduan DSA-Sec olahraga — pecut, jarak, lempar, lompat. Penanda aras, soalan, sekolah Singapura.",
      ta: "தடகள DSA-Sec வழிகாட்டி — விரைவு, தூரம், எறிதல், தாவல். மதிப்பெண், கேள்விகள், பள்ளிகள்.",
    },
  },
  badminton: {
    slug: "badminton",
    contentReadyBy: "2026-06-22",
    navLabel: { en: "Badminton", zh: "羽毛球", ms: "Badminton", ta: "பேட்மிண்டன்" },
    hook: {
      en: "Badminton DSA — footwork beats power at the P6 level.",
      zh: "羽毛球 DSA——小六阶段，步伐比力量更重要。",
      ms: "DSA Badminton — pergerakan kaki mengalahkan kuasa di P6.",
      ta: "பேட்மிண்டன் DSA — P6 அளவில் கால் நகர்வு பலத்தை வெல்லும்.",
    },
    intro: {
      en: "Coaches at top badminton SSPs watch your court coverage and shot selection long before they measure your smash speed. Here's what trials check.",
      zh: "顶尖羽毛球 SSP 教练先看你的覆盖范围和选球，再测扣杀速度。trial 在测什么。",
      ms: "Jurulatih SSP badminton teratas perhatikan liputan gelanggang dan pemilihan pukulan sebelum mengukur kelajuan smash.",
      ta: "சிறந்த பேட்மிண்டன் SSP பயிற்சியாளர்கள் ஸ்மாஷ் வேகத்தை அளப்பதற்கு முன் கோர்ட் கவரேஜ் மற்றும் ஷாட் தேர்வை பார்க்கிறார்கள்.",
    },
    summary: {
      en: "Footwork drills, trial format, interview questions, SSP badminton schools.",
      zh: "步伐训练、trial 形式、面试题样、SSP 羽毛球学校。",
      ms: "Latihan pergerakan kaki, format trial, soalan, sekolah SSP badminton.",
      ta: "கால் நகர்வு பயிற்சிகள், சோதனை வடிவம், கேள்விகள், SSP பள்ளிகள்.",
    },
    sampleSchools: [
      "Hwa Chong Institution",
      "Raffles Institution",
      "Anglo-Chinese School (Independent)",
      "Catholic High School",
      "Dunman High School",
    ],
    metaDescription: {
      en: "Badminton DSA-Sec interview & trial guide for Singapore P6 — footwork, shot selection, sample questions, SSP / participating schools.",
      zh: "新加坡羽毛球 DSA-Sec 面试与 trial 指南——步伐、选球、面试题、SSP 招生学校。",
      ms: "Panduan DSA-Sec badminton — pergerakan kaki, pemilihan pukulan, soalan, sekolah SSP.",
      ta: "சிங்கப்பூர் பேட்மிண்டன் DSA-Sec வழிகாட்டி — கால் நகர்வு, ஷாட் தேர்வு, கேள்விகள், SSP பள்ளிகள்.",
    },
  },
  "martial-arts": {
    slug: "martial-arts",
    contentReadyBy: "2026-06-29",
    navLabel: { en: "Martial Arts", zh: "武术", ms: "Seni Mempertahankan Diri", ta: "தற்காப்பு கலை" },
    hook: {
      en: "Martial Arts DSA — wushu, taekwondo, judo, fencing — each path has different schools.",
      zh: "武术 DSA——武术、跆拳道、柔道、击剑，每条路线对应的学校不同。",
      ms: "DSA Seni Mempertahankan Diri — wushu, taekwondo, judo, lawan pedang.",
      ta: "தற்காப்பு கலை DSA — வுஷு, தைக்வாண்டோ, ஜூடோ, வாள்வீச்சு.",
    },
    intro: {
      en: "Wushu sits in IP schools. Taekwondo and judo cluster in SAP schools. Fencing is its own ecosystem. Here's the map.",
      zh: "武术多在 IP 学校。跆拳道、柔道集中在 SAP 学校。击剑是独立生态。这是地图。",
      ms: "Wushu di sekolah IP. Taekwondo, judo di sekolah SAP. Lawan pedang ekosistem sendiri.",
      ta: "வுஷு IP பள்ளிகளில். தைக்வாண்டோ, ஜூடோ SAP பள்ளிகளில். வாள்வீச்சு தனி சூழல்.",
    },
    summary: {
      en: "Discipline-specific paths, trial expectations, interview questions, school clusters.",
      zh: "各项专门路径、trial 要求、面试题样、学校集群。",
      ms: "Laluan khusus disiplin, jangkaan trial, soalan, kelompok sekolah.",
      ta: "ஒழுக்கம் வாரியான பாதைகள், சோதனை, கேள்விகள், பள்ளி குழுக்கள்.",
    },
    sampleSchools: [
      "Hwa Chong Institution",
      "Nan Hua High School",
      "Dunman High School",
      "Anglo-Chinese School (Independent)",
      "Saint Joseph's Institution",
    ],
    metaDescription: {
      en: "Martial Arts DSA-Sec — wushu, taekwondo, judo, fencing. Discipline-specific paths, trial format, interview questions, Singapore schools.",
      zh: "武术 DSA-Sec——武术、跆拳道、柔道、击剑。各项专门路径、trial、面试、新加坡学校。",
      ms: "Panduan DSA-Sec seni mempertahankan diri — wushu, taekwondo, judo, lawan pedang. Laluan, trial, soalan.",
      ta: "தற்காப்பு கலை DSA-Sec — வுஷு, தைக்வாண்டோ, ஜூடோ, வாள்வீச்சு. பாதைகள், சோதனை, கேள்விகள், பள்ளிகள்.",
    },
  },
  music: {
    slug: "music",
    contentReadyBy: "2026-06-08",
    navLabel: { en: "Music", zh: "音乐", ms: "Muzik", ta: "இசை" },
    hook: {
      en: "Music DSA — Grade 8 is the floor, not the ceiling.",
      zh: "音乐 DSA——Grade 8 是地板，不是天花板。",
      ms: "DSA Muzik — Gred 8 ialah lantai, bukan siling.",
      ta: "இசை DSA — கிரேடு 8 தரை, கூரை அல்ல.",
    },
    intro: {
      en: "ABRSM Grade 8 gets the door open at MEP schools. What you do at the audition and interview decides the offer. Here's the breakdown.",
      zh: "ABRSM Grade 8 让 MEP 学校的门打开。audition + 面试决定 offer。完整拆解。",
      ms: "Gred 8 ABRSM membuka pintu sekolah MEP. Audition dan temu duga tentukan tawaran.",
      ta: "ABRSM கிரேடு 8 MEP பள்ளி கதவைத் திறக்கிறது. ஆடிஷன் மற்றும் நேர்காணல் வாய்ப்பை தீர்மானிக்கின்றன.",
    },
    summary: {
      en: "MEP-school requirements, audition format, interview questions, what schools want to hear.",
      zh: "MEP 学校要求、audition 形式、面试题样、学校到底想听什么。",
      ms: "Keperluan sekolah MEP, format audition, soalan, apa sekolah mahu dengar.",
      ta: "MEP பள்ளி தேவைகள், ஆடிஷன் வடிவம், கேள்விகள், பள்ளிகள் என்ன கேட்க விரும்புகின்றன.",
    },
    sampleSchools: [
      "Raffles Institution",
      "Hwa Chong Institution",
      "Anglo-Chinese School (Independent)",
      "Nanyang Girls' High School",
      "Methodist Girls' School",
    ],
    metaDescription: {
      en: "Music DSA-Sec guide for Singapore P6 — MEP school requirements, audition format, interview questions, ABRSM Grade 8 reality.",
      zh: "新加坡音乐 DSA-Sec 指南——MEP 学校要求、audition 形式、面试题、ABRSM Grade 8 实情。",
      ms: "Panduan DSA-Sec muzik — keperluan sekolah MEP, audition, soalan, realiti Gred 8 ABRSM.",
      ta: "இசை DSA-Sec வழிகாட்டி — MEP தேவைகள், ஆடிஷன், கேள்விகள், ABRSM கிரேடு 8.",
    },
  },
  math: {
    slug: "math",
    contentReadyBy: "2026-06-29",
    navLabel: { en: "Math", zh: "数学", ms: "Matematik", ta: "கணிதம்" },
    hook: {
      en: "Math DSA — competitions matter, but reasoning matters more.",
      zh: "数学 DSA——竞赛有用，但推理更重要。",
      ms: "DSA Matematik — pertandingan penting, penaakulan lebih penting.",
      ta: "கணித DSA — போட்டிகள் முக்கியம், ஆனால் பகுத்தறிவு மிக முக்கியம்.",
    },
    intro: {
      en: "SMOPS, NMOS, AMC — competition awards open the application. The selection test and interview reveal whether you can think under pressure.",
      zh: "SMOPS、NMOS、AMC——比赛获奖让申请被看到。选拔测试和面试看的是压力下的思考。",
      ms: "SMOPS, NMOS, AMC — anugerah membuka permohonan. Ujian pemilihan dan temu duga uji fikiran dalam tekanan.",
      ta: "SMOPS, NMOS, AMC — விருதுகள் விண்ணப்பத்தைத் திறக்கின்றன. தேர்வுத் தேர்வு மற்றும் நேர்காணல் அழுத்தத்தில் சிந்தனையை வெளிப்படுத்துகின்றன.",
    },
    summary: {
      en: "Competition benchmarks, selection-test format, interview questions, GEP / IP schools.",
      zh: "竞赛标准、选拔测试形式、面试题样、GEP / IP 学校。",
      ms: "Penanda aras pertandingan, format ujian pemilihan, soalan, sekolah GEP/IP.",
      ta: "போட்டி மதிப்பெண், தேர்வு வடிவம், கேள்விகள், GEP/IP பள்ளிகள்.",
    },
    sampleSchools: [
      "Raffles Institution",
      "Hwa Chong Institution",
      "NUS High School of Math and Science",
      "Dunman High School",
      "Catholic High School",
    ],
    metaDescription: {
      en: "Math DSA-Sec guide — SMOPS, NMOS, AMC competition benchmarks, selection test format, interview questions, GEP/IP participating schools.",
      zh: "数学 DSA-Sec 指南——SMOPS、NMOS、AMC 标准、选拔测试、面试题、GEP/IP 招生学校。",
      ms: "Panduan DSA-Sec matematik — SMOPS, NMOS, AMC, ujian pemilihan, soalan, sekolah GEP/IP.",
      ta: "கணித DSA-Sec வழிகாட்டி — SMOPS, NMOS, AMC, தேர்வு, கேள்விகள், GEP/IP பள்ளிகள்.",
    },
  },
};

export const TALENT_SLUGS: TalentSlug[] = [
  "basketball",
  "football",
  "swimming",
  "track-field",
  "badminton",
  "martial-arts",
  "music",
  "math",
];

export function getTalentPage(slug: string): TalentPage | null {
  if (!(slug in TALENT_DATA)) return null;
  return TALENT_DATA[slug as TalentSlug];
}

export function getAllTalentPages(): TalentPage[] {
  return TALENT_SLUGS.map((s) => TALENT_DATA[s]);
}
