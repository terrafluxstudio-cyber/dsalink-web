"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Building2,
  Calculator,
  CheckCircle2,
  CircleDot,
  Clock,
  Compass,
  Cpu,
  Crown,
  Drama,
  FileSearch,
  Footprints,
  Goal,
  GraduationCap,
  Languages,
  MessageSquareText,
  Music2,
  Palette,
  RotateCcw,
  Shield,
  Sparkles,
  Trophy,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { STORIES } from "@/lib/parent-stories";
import { TALENT_COUNT } from "@/lib/talentSlugs";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

/* ============================ HERO ============================ */

const HERO_KICKER: LocaleStr = {
  en: "Direct School Admission · Singapore · The complete 2026 guide",
  zh: "中学直接收生计划 · 新加坡 · 2026 完整指南",
  ms: "Direct School Admission · Singapura · Panduan lengkap 2026",
  ta: "Direct School Admission · சிங்கப்பூர் · முழுமையான 2026 வழிகாட்டி",
};

const HERO_TITLE: LocaleStr = {
  en: "The Singapore DSA-Sec Guide — everything P5/P6 parents need, in one place.",
  zh: "新加坡 DSA-Sec 完整指南——P5/P6 家长要知道的，全都在这里",
  ms: "Panduan DSA-Sec Singapura — semua yang ibu bapa P5/P6 perlu tahu, di satu tempat.",
  ta: "சிங்கப்பூர் DSA-Sec வழிகாட்டி — P5/P6 பெற்றோர்களுக்குத் தேவையான அனைத்தும், ஒரே இடத்தில்.",
};

const HERO_SUB: LocaleStr = {
  en: "From what DSA actually is, to which 147 schools take part, to every talent area with a dedicated prep page, the 2026 timeline, interview prep, and what each outcome means at result release. Every section links to the deeper page if you want to go further.",
  zh: "从 DSA 到底是什么，到哪 147 所学校参与，到每个才艺方向各自的备战页，到 2026 时间线、面试准备、结果出来每种 outcome 意味着什么。每个 section 想深挖都有内链到详情页。",
  ms: "Dari apa itu DSA, ke 147 sekolah yang menyertai, ke setiap bidang bakat dengan halaman persediaan khusus, garis masa 2026, persediaan temu duga, dan apa setiap keputusan bermakna apabila keputusan dilepaskan. Setiap bahagian memautkan ke halaman terperinci.",
  ta: "DSA என்றால் என்ன என்பதிலிருந்து, பங்கேற்கும் 147 பள்ளிகள், ஒவ்வொரு திறமைப் பகுதிக்கும் தனிப்பட்ட தயாரிப்பு பக்கம், 2026 கால அட்டவணை, நேர்காணல் தயாரிப்பு, முடிவு வெளியிடப்படும்போது ஒவ்வொரு விளைவும் எதைக் குறிக்கிறது என்பது வரை. ஒவ்வொரு பகுதியும் ஆழமான பக்கத்திற்கு இணைக்கப்பட்டுள்ளது.",
};

const STATS = [
  { num: "147", label: { en: "secondary schools", zh: "所中学", ms: "sekolah menengah", ta: "இடைநிலை பள்ளிகள்" } },
  { num: String(TALENT_COUNT), label: { en: "talent prep pages", zh: "才艺备战页", ms: "halaman bakat", ta: "திறமை பக்கங்கள்" } },
  { num: "4", label: { en: "full-DSA schools", zh: "所纯 DSA 学校", ms: "sekolah DSA penuh", ta: "முழு DSA பள்ளிகள்" } },
  { num: "20%", label: { en: "S1 cap per school", zh: "学校 S1 名额上限", ms: "had S1 setiap sekolah", ta: "ஒரு பள்ளிக்கு S1 வரம்பு" } },
] as const;

const READ_TIME: LocaleStr = {
  en: "13-min read · scroll-friendly",
  zh: "13 分钟阅读 · 适合慢慢看",
  ms: "13-min baca · mesra-skrol",
  ta: "13 நிமிட வாசிப்பு",
};

/* Journey diagram: 5 steps */
const JOURNEY = [
  {
    icon: BookOpen,
    label: { en: "Research", zh: "研究", ms: "Kaji", ta: "ஆராய்ச்சி" },
    sub: { en: "Jan-Apr", zh: "1-4 月", ms: "Jan-Apr", ta: "ஜன-ஏப்" },
  },
  {
    icon: FileSearch,
    label: { en: "Apply", zh: "申请", ms: "Mohon", ta: "விண்ணப்பி" },
    sub: { en: "6 May-2 Jun", zh: "5/6-6/2", ms: "6 Mei-2 Jun", ta: "6 மே-2 ஜூன்" },
  },
  {
    icon: MessageSquareText,
    label: { en: "Interview & trial", zh: "面试 & trial", ms: "Temu duga", ta: "நேர்காணல்" },
    sub: { en: "Jun-Aug", zh: "6-8 月", ms: "Jun-Ogos", ta: "ஜூன்-ஆக" },
  },
  {
    icon: Compass,
    label: { en: "Rank choices", zh: "排序志愿", ms: "Susun pilihan", ta: "வரிசை" },
    sub: { en: "19-23 Oct", zh: "10/19-23", ms: "19-23 Okt", ta: "19-23 அக்" },
  },
  {
    icon: Sparkles,
    label: { en: "Results", zh: "结果", ms: "Keputusan", ta: "முடிவுகள்" },
    sub: { en: "24-25 Nov", zh: "11/24-25", ms: "24-25 Nov", ta: "24-25 நவ" },
  },
];

function JourneyFlow({ locale }: { locale: "en" | "zh" | "ms" | "ta" }) {
  return (
    <div className="relative mt-8 sm:mt-10">
      {/* Horizontal connector line — desktop only (mobile shows vertical) */}
      <div className="absolute left-[8%] right-[8%] top-5 hidden h-px bg-gradient-to-r from-champagne/20 via-champagne/60 to-champagne/20 sm:block" aria-hidden />
      <ol className="grid grid-cols-2 gap-y-6 sm:grid-cols-5 sm:gap-y-0">
        {JOURNEY.map((step, i) => {
          const Icon = step.icon;
          return (
            <li key={i} className="flex flex-col items-center text-center">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-champagne bg-white text-intellectual shadow-[0_0_0_3px_rgba(198,162,74,0.15)]">
                <Icon className="h-5 w-5" aria-hidden />
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-intellectual text-[10px] font-bold text-white">
                  {i + 1}
                </span>
              </span>
              <p className="mt-2.5 text-[12.5px] font-semibold text-intellectual sm:text-[13px]" style={{ textTransform: "none" }}>
                {pick(step.label, locale)}
              </p>
              <p className="mt-0.5 text-[11px] text-intellectual-muted/80">
                {pick(step.sub, locale)}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ============================ TL;DR ============================ */

const TLDR_TITLE: LocaleStr = {
  en: "DSA in 60 seconds — the only six things that matter",
  zh: "60 秒读懂 DSA——只有这 6 件事最重要",
  ms: "DSA dalam 60 saat — enam perkara paling penting",
  ta: "60 வினாடிகளில் DSA — முக்கியமான ஆறு விஷயங்கள்",
};

const TLDR_BULLETS: LocaleStr[] = [
  {
    en: "DSA-Sec is an alternate route into secondary school based on talent — not academics — and runs in parallel with PSLE.",
    zh: "DSA-Sec 是凭借才艺（不是学术）进入中学的另一条路径，与 PSLE 并行。",
    ms: "DSA-Sec ialah laluan alternatif ke sekolah menengah berdasarkan bakat — bukan akademik — dan berjalan selari dengan PSLE.",
    ta: "DSA-Sec என்பது கல்வி அல்ல, திறமையின் அடிப்படையில் இடைநிலை பள்ளிக்கான மாற்று வழி, PSLE உடன் இணையாக இயங்குகிறது.",
  },
  {
    en: "MOE runs the central portal once a year (6 May–2 Jun 2026); each school decides who gets in.",
    zh: "MOE 每年开一次中央门户（2026 年 5/6-6/2），具体录谁由学校决定。",
    ms: "MOE mengendalikan portal pusat setahun sekali (6 Mei–2 Jun 2026); setiap sekolah memutuskan kemasukan.",
    ta: "MOE ஒவ்வொரு ஆண்டும் ஒருமுறை மத்திய வாயிலை இயக்குகிறது (6 மே–2 ஜூன் 2026); ஒவ்வொரு பள்ளியும் சேர்க்கையைத் தீர்மானிக்கிறது.",
  },
  {
    en: "Max 3 schools per applicant, max 2 talent areas per school — 6 entries total at most.",
    zh: "每人最多 3 所学校，每所最多 2 个才艺方向，总共最多 6 个条目。",
    ms: "Maksimum 3 sekolah setiap pemohon, maksimum 2 bakat setiap sekolah — maksimum 6 entri.",
    ta: "ஒரு விண்ணப்பதாரருக்கு அதிகபட்சம் 3 பள்ளிகள், ஒரு பள்ளிக்கு அதிகபட்சம் 2 திறமைகள் — மொத்தம் 6 உள்ளீடுகள்.",
  },
  {
    en: "Most schools cap DSA at 20% of S1 places. Four schools (NUS High, SOTA, SST, Sports School) admit ~100% through DSA.",
    zh: "大部分学校 DSA 名额上限是 S1 总名额的 20%。四所学校（NUS High、SOTA、SST、新加坡体育学校）几乎 100% 用 DSA 招生。",
    ms: "Kebanyakan sekolah hadkan DSA pada 20% tempat S1. Empat sekolah (NUS High, SOTA, SST, Sports School) mengambil ~100% melalui DSA.",
    ta: "பெரும்பாலான பள்ளிகள் S1 இடங்களில் 20% DSA ஆக வரம்பிடுகின்றன. நான்கு பள்ளிகள் (NUS High, SOTA, SST, Sports School) ~100% DSA மூலம் சேர்க்கின்றன.",
  },
  {
    en: "A Confirmed Offer skips S1 Posting but locks the talent commitment for at least 2 years. Still needs PSLE Achievement Level total ≤ 22 for IP / Express.",
    zh: "Confirmed Offer 跳过 S1 Posting 但锁定 2 年才艺承诺。IP / Express 仍需 PSLE AL 总分 ≤ 22。",
    ms: "Tawaran Sah melangkau Penempatan S1 tetapi mengunci komitmen bakat selama 2 tahun. Masih perlu AL PSLE ≤ 22 untuk IP / Express.",
    ta: "உறுதிசெய்யப்பட்ட சலுகை S1 Posting-ஐ தாண்டுகிறது ஆனால் 2 ஆண்டு திறமை உறுதிமொழியைப் பூட்டுகிறது. IP / Express-க்கு PSLE AL மொத்தம் ≤ 22 தேவை.",
  },
  {
    en: "DSA outcomes release 24–25 Nov 2026 alongside PSLE results. If DSA fails, S1 Posting opens normally.",
    zh: "DSA 结果在 2026 年 11 月 24–25 日与 PSLE 同步公布。DSA 失败的话，S1 Posting 正常开放。",
    ms: "Keputusan DSA dilepaskan 24–25 Nov 2026 bersama PSLE. Jika DSA gagal, Penempatan S1 dibuka seperti biasa.",
    ta: "DSA முடிவுகள் 24–25 நவம்பர் 2026 இல் PSLE உடன் வெளியிடப்படுகின்றன. DSA தோல்வியடைந்தால், S1 Posting வழக்கம் போல் திறக்கப்படுகிறது.",
  },
];

/* ============================ SECTION 1 · WHAT DSA IS ============================ */

const S1_KICKER: LocaleStr = {
  en: "Chapter 1",
  zh: "第一章",
  ms: "Bab 1",
  ta: "அத்தியாயம் 1",
};
const S1_TITLE: LocaleStr = {
  en: "What DSA actually is — and what it isn't",
  zh: "DSA 到底是什么——以及不是什么",
  ms: "Apakah DSA sebenarnya — dan bukan apa",
  ta: "DSA உண்மையில் என்ன — மற்றும் எது அல்ல",
};
const S1_INTRO: LocaleStr = {
  en: "Direct School Admission to Secondary (DSA-Sec) is MOE's talent-based admission route. After the 2019 reforms, it stopped being a way for academically strong children to bypass the PSLE and became what it always claimed to be: an alternate path for students with sustained, demonstrable talent in a specific domain.",
  zh: "DSA-Sec（中学直接收生计划）是 MOE 的才艺录取通道。2019 改革之后，它不再是学术尖子绕过 PSLE 的捷径，而真正变成它一直被定义的样子：给在某个具体领域有持续、可证明才能的学生的另一条入学通道。",
  ms: "Direct School Admission to Secondary (DSA-Sec) adalah laluan kemasukan berasaskan bakat MOE. Selepas pembaharuan 2019, ia tidak lagi menjadi cara bagi pelajar kuat akademik memintas PSLE dan menjadi seperti yang sentiasa diberitakan: laluan alternatif untuk pelajar dengan bakat berterusan dalam bidang tertentu.",
  ta: "Direct School Admission to Secondary (DSA-Sec) என்பது MOE-வின் திறமை அடிப்படையிலான சேர்க்கை வழியாகும். 2019 சீர்திருத்தத்திற்குப் பிறகு, கல்வியில் வலுவான குழந்தைகள் PSLE-ஐ தாண்டிச் செல்வதை நிறுத்தி, அது எப்போதும் கூறியதாக மாறியது: ஒரு குறிப்பிட்ட பகுதியில் நிலையான திறமை கொண்ட மாணவர்களுக்கான மாற்று வழி.",
};

const WHAT_IS_CARD: { title: LocaleStr; bullets: LocaleStr[] } = {
  title: { en: "What DSA IS", zh: "DSA 是什么", ms: "Apa DSA IALAH", ta: "DSA என்பது" },
  bullets: [
    {
      en: "A talent-based route into a specific secondary school, ahead of PSLE results.",
      zh: "凭借才艺进入某所特定中学的通道，先于 PSLE 出分。",
      ms: "Laluan berasaskan bakat ke sekolah menengah tertentu, sebelum keputusan PSLE.",
      ta: "PSLE முடிவுகளுக்கு முன், ஒரு குறிப்பிட்ட இடைநிலை பள்ளிக்கான திறமை அடிப்படையிலான வழி.",
    },
    {
      en: "A 2-year talent commitment via a CCA-linked programme at the new school.",
      zh: "在新学校通过 CCA 衔接项目，对所申请才艺方向做 2 年承诺。",
      ms: "Komitmen bakat 2 tahun melalui program berkaitan CCA di sekolah baru.",
      ta: "புதிய பள்ளியில் CCA-உடன் இணைக்கப்பட்ட திட்டத்தின் மூலம் 2 ஆண்டு திறமை உறுதிமொழி.",
    },
    {
      en: "Up to 20% of S1 places per non-IP school (4 full-DSA schools are the exception).",
      zh: "非 IP 学校最多 20% 的 S1 名额（4 所全 DSA 学校除外）。",
      ms: "Sehingga 20% tempat S1 setiap sekolah bukan IP (4 sekolah DSA penuh pengecualian).",
      ta: "ஒரு IP-அல்லாத பள்ளிக்கு S1 இடங்களில் 20% வரை (4 முழு-DSA பள்ளிகள் விதிவிலக்கு).",
    },
  ],
};

const WHAT_ISNT_CARD: { title: LocaleStr; bullets: LocaleStr[] } = {
  title: { en: "What DSA IS NOT", zh: "DSA 不是什么", ms: "Apa DSA BUKAN", ta: "DSA என்பது அல்ல" },
  bullets: [
    {
      en: "A backdoor for academically strong kids to skip PSLE — that loophole closed in 2019.",
      zh: "学术尖子绕过 PSLE 的后门——2019 改革已堵死。",
      ms: "Pintu belakang untuk pelajar kuat akademik memintas PSLE — celah itu ditutup pada 2019.",
      ta: "கல்வியில் வலுவான குழந்தைகள் PSLE-ஐ தாண்டிச் செல்லும் பின்வாசல் — 2019 இல் அது மூடப்பட்டது.",
    },
    {
      en: "A waiver from PSLE. Confirmed Offer still requires PSLE AL ≤ 22 for IP / Express.",
      zh: "PSLE 的豁免。Confirmed Offer 仍要求 PSLE AL ≤ 22（IP / Express）。",
      ms: "Pengecualian dari PSLE. Tawaran Sah masih memerlukan PSLE AL ≤ 22 untuk IP / Express.",
      ta: "PSLE-விலிருந்து விலக்கு. உறுதிசெய்யப்பட்ட சலுகைக்கு இன்னும் PSLE AL ≤ 22 தேவை (IP / Express).",
    },
    {
      en: "An open-ended programme. Switching CCAs in Lower Sec breaches the DSA commitment.",
      zh: "无限制项目。在 Lower Sec 换 CCA 等于违反 DSA 承诺。",
      ms: "Program tanpa had. Menukar CCA di Menengah Bawah melanggar komitmen DSA.",
      ta: "வரம்பற்ற திட்டம் அல்ல. கீழ் இடைநிலையில் CCA-ஐ மாற்றுவது DSA உறுதிமொழியை மீறுகிறது.",
    },
  ],
};

const S1_CTA: LocaleStr = {
  en: "Read the full DSA explainer",
  zh: "查看完整 DSA 解释",
  ms: "Baca penjelasan DSA penuh",
  ta: "முழு DSA விளக்கத்தைப் படிக்கவும்",
};

/* ============================ SECTION 2 · ⭐ PARENT STORIES ============================ */

const S2_KICKER: LocaleStr = {
  en: "Chapter 2",
  zh: "第二章",
  ms: "Bab 2",
  ta: "அத்தியாயம் 2",
};
const S2_TITLE: LocaleStr = {
  en: "Six families, six different DSA pathways",
  zh: "六个家庭，六条不同的 DSA 路径",
  ms: "Enam keluarga, enam laluan DSA berbeza",
  ta: "ஆறு குடும்பங்கள், ஆறு வெவ்வேறு DSA பாதைகள்",
};
const S2_INTRO: LocaleStr = {
  en: "Composite scenarios drawn from documented DSA mechanics and patterns parents have shared publicly. Names, scores, and identifying details are illustrative. These six show the range — niche sport, arts, specialised school, leadership, commitment regret, and what happens when DSA simply doesn't work out.",
  zh: "基于公开记载的 DSA 机制和家长论坛规律推演的综合情境。姓名、分数、识别细节均为示意。这六个家庭展示了 DSA 的全范围——冷门运动、艺术、专科学校、领导力、承诺反悔，以及 DSA 没成时发生什么。",
  ms: "Senario komposit yang diambil dari mekanisme DSA dan corak yang dikongsi ibu bapa secara terbuka. Nama, skor, dan butiran adalah ilustrasi. Enam ini menunjukkan julat — sukan khusus, seni, sekolah khusus, kepimpinan, penyesalan komitmen, dan apa berlaku apabila DSA tidak berjaya.",
  ta: "DSA இயக்கவியல் மற்றும் பெற்றோர்கள் வெளிப்படையாக பகிர்ந்த வடிவங்களிலிருந்து உருவாக்கப்பட்ட கூட்டுச் சூழ்நிலைகள். பெயர்கள், மதிப்பெண்கள், விவரங்கள் விளக்கமாக. இந்த ஆறு வரம்பைக் காட்டுகின்றன — குறுகிய விளையாட்டு, கலை, சிறப்புப் பள்ளி, தலைமை, உறுதிமொழி வருந்துதல், மற்றும் DSA வேலை செய்யாதபோது.",
};

// STORIES + StoryHook type live in lib/parent-stories.ts (shared with the
// homepage HomeParentStoriesGrid). Imported above.

const S2_CTA: LocaleStr = {
  en: "Read all 12 case studies in full",
  zh: "查看全部 12 个完整案例",
  ms: "Baca kesemua 12 kajian kes penuh",
  ta: "மொத்தம் 12 முழு வழக்குகளைப் படிக்கவும்",
};

/* ============================ SECTION 3 · 8 TALENTS ============================ */

const S3_KICKER: LocaleStr = {
  en: "Chapter 3",
  zh: "第三章",
  ms: "Bab 3",
  ta: "அத்தியாயம் 3",
};
const S3_TITLE: LocaleStr = {
  en: "Talent areas with dedicated prep pages",
  zh: "每个才艺方向 · 都有专属备战页",
  ms: "Bidang bakat dengan halaman persediaan khusus",
  ta: "தனிப்பட்ட தயாரிப்பு பக்கங்களுடன் திறமைப் பகுதிகள்",
};
const S3_INTRO: LocaleStr = {
  en: "Across 147 schools, DSA talent areas span sports, performing arts, visual arts, language, STEM, and leadership. We've built one deep-prep page per talent — every page is live, each with trial format breakdown, sample interview questions, and the schools that accept that talent. Click any tile to open the prep page.",
  zh: "147 所学校的 DSA 才艺涵盖体育、表演艺术、视觉艺术、语言、数理、领导力。每个 talent 一篇深度备战指南——全部已上线，含 trial 格式拆解、面试样题、招生学校。点击任意卡片打开备战页。",
  ms: "Merentas 147 sekolah, bidang bakat DSA merangkumi sukan, seni persembahan, seni visual, bahasa, STEM, dan kepimpinan. Kami telah membina satu halaman persediaan mendalam setiap bakat — semuanya telah disiarkan.",
  ta: "147 பள்ளிகளில், DSA திறமைப் பகுதிகள் விளையாட்டு, நிகழ்த்துக் கலைகள், காட்சிக் கலை, மொழி, STEM மற்றும் தலைமைத்துவம் ஆகியவற்றை உள்ளடக்கியது. ஒவ்வொரு திறமைக்கும் ஒரு ஆழமான தயாரிப்புப் பக்கம் — அனைத்தும் வெளியீடு.",
};

const TALENTS = [
  { slug: "basketball", icon: Goal, label: { en: "Basketball", zh: "篮球", ms: "Bola Keranjang", ta: "கூடைப்பந்து" }, live: true },
  { slug: "football", icon: Trophy, label: { en: "Football", zh: "足球", ms: "Bola Sepak", ta: "கால்பந்து" }, live: true },
  { slug: "swimming", icon: Waves, label: { en: "Swimming", zh: "游泳", ms: "Renang", ta: "நீச்சல்" }, live: true },
  { slug: "track-field", icon: Footprints, label: { en: "Track & Field", zh: "田径", ms: "Olahraga", ta: "ஓட்டப்பந்தயம்" }, live: true },
  { slug: "badminton", icon: Sparkles, label: { en: "Badminton", zh: "羽毛球", ms: "Badminton", ta: "இறகுப்பந்து" }, live: true },
  { slug: "martial-arts", icon: Shield, label: { en: "Martial Arts", zh: "武术", ms: "Seni Bela Diri", ta: "தற்காப்பு கலைகள்" }, live: true },
  { slug: "hockey", icon: CircleDot, label: { en: "Hockey", zh: "曲棍球", ms: "Hoki", ta: "ஹாக்கி" }, live: true },
  { slug: "squash", icon: Zap, label: { en: "Squash", zh: "壁球", ms: "Skuasy", ta: "ஸ்குவாஷ்" }, live: true },
  { slug: "music", icon: Music2, label: { en: "Music", zh: "音乐", ms: "Muzik", ta: "இசை" }, live: true },
  { slug: "dance", icon: Activity, label: { en: "Dance", zh: "舞蹈", ms: "Tarian", ta: "நடனம்" }, live: true },
  { slug: "drama", icon: Drama, label: { en: "Drama", zh: "戏剧", ms: "Drama", ta: "நாடகம்" }, live: true },
  { slug: "art", icon: Palette, label: { en: "Visual Arts", zh: "美术", ms: "Seni Visual", ta: "காட்சிக் கலை" }, live: true },
  { slug: "robotics", icon: Cpu, label: { en: "Robotics", zh: "机器人", ms: "Robotik", ta: "ரோபோடிக்ஸ்" }, live: true },
  { slug: "math", icon: Calculator, label: { en: "Math & Sci", zh: "数理", ms: "Mat & Sains", ta: "கணிதம் & அறிவியல்" }, live: true },
  { slug: "chinese", icon: Languages, label: { en: "Chinese (CLE)", zh: "高级华文", ms: "Bahasa Cina", ta: "சீன மொழி" }, live: true },
  { slug: "leadership", icon: Crown, label: { en: "Leadership", zh: "领导力", ms: "Kepimpinan", ta: "தலைமைத்துவம்" }, live: true },
  { slug: "volleyball", icon: CircleDot, label: { en: "Volleyball", zh: "排球", ms: "Bola Tampar", ta: "கைப்பந்து" }, live: true },
] as const;

const LIVE_BADGE: LocaleStr = {
  en: "Live",
  zh: "已上线",
  ms: "Disiarkan",
  ta: "வெளியீடு",
};
const COMING_BADGE: LocaleStr = {
  en: "Coming",
  zh: "准备中",
  ms: "Akan datang",
  ta: "வரும்",
};

const S3_CTA: LocaleStr = {
  en: "Open the full talent index",
  zh: "打开完整才艺索引",
  ms: "Buka indeks bakat penuh",
  ta: "முழு திறமை அட்டவணையைத் திற",
};

/* ============================ CH 4 · 147 SCHOOLS ============================ */

const S4_KICKER: LocaleStr = { en: "Chapter 4", zh: "第四章", ms: "Bab 4", ta: "அத்தியாயம் 4" };
const S4_TITLE: LocaleStr = {
  en: "Which 147 secondary schools take part",
  zh: "哪 147 所中学参与 DSA",
  ms: "147 sekolah menengah mana yang menyertai",
  ta: "எந்த 147 இடைநிலை பள்ளிகள் பங்கேற்கின்றன",
};
const S4_INTRO: LocaleStr = {
  en: "Four schools admit nearly 100% of their Secondary 1 students through DSA — there's no PSLE-posting alternative. The other 143 secondary schools cap DSA at 20% of S1 places and admit the rest through PSLE posting.",
  zh: "四所学校几乎 100% 通过 DSA 招中一新生——没有 PSLE 派位的替代路径。其余 143 所中学把 DSA 名额上限定在 S1 总数 20%，其余通过 PSLE 派位招生。",
  ms: "Empat sekolah mengambil hampir 100% pelajar Tingkatan 1 melalui DSA — tiada alternatif PSLE. 143 sekolah lain mengehadkan DSA pada 20% tempat S1 dan mengambil selebihnya melalui PSLE.",
  ta: "நான்கு பள்ளிகள் தங்கள் இடைநிலை 1 மாணவர்களில் கிட்டத்தட்ட 100% DSA மூலம் சேர்க்கின்றன — PSLE மாற்று இல்லை. மற்ற 143 பள்ளிகள் S1 இடங்களில் 20% DSA ஆக வரம்பிட்டு மற்றவற்றை PSLE மூலம் சேர்க்கின்றன.",
};

const FULL_DSA_SCHOOLS: { name: string; icon: typeof Calculator; focus: LocaleStr }[] = [
  {
    name: "NUS High School",
    icon: Calculator,
    focus: { en: "Mathematics & Science research", zh: "数学与科学研究", ms: "Penyelidikan Matematik & Sains", ta: "கணிதம் & அறிவியல் ஆராய்ச்சி" },
  },
  {
    name: "School of the Arts (SOTA)",
    icon: Music2,
    focus: { en: "Performing & visual arts", zh: "表演与视觉艺术", ms: "Seni persembahan & visual", ta: "நிகழ்த்து & காட்சி கலைகள்" },
  },
  {
    name: "School of Science and Technology (SST)",
    icon: Wrench,
    focus: { en: "Applied learning · engineering", zh: "应用学习 · 工程", ms: "Pembelajaran terapan · kejuruteraan", ta: "பயன்பாட்டுக் கற்றல் · பொறியியல்" },
  },
  {
    name: "Singapore Sports School",
    icon: Trophy,
    focus: { en: "Competitive sports", zh: "竞技体育", ms: "Sukan berdaya saing", ta: "போட்டி விளையாட்டு" },
  },
];

const S4_FULL_BADGE: LocaleStr = { en: "100% DSA", zh: "100% DSA", ms: "100% DSA", ta: "100% DSA" };
const S4_PARTIAL_NOTE: LocaleStr = {
  en: "+ 143 other secondary schools admit up to 20% of Secondary 1 places through DSA.",
  zh: "+ 另外 143 所中学最多用 20% 的中一名额来招 DSA。",
  ms: "+ 143 sekolah menengah lain mengambil sehingga 20% tempat S1 melalui DSA.",
  ta: "+ மற்ற 143 இடைநிலை பள்ளிகள் S1 இடங்களில் 20% வரை DSA மூலம் சேர்க்கின்றன.",
};
const S4_CTA_FINDER: LocaleStr = { en: "Search by talent area", zh: "按才艺搜索", ms: "Cari mengikut bakat", ta: "திறமை வாரியாக தேடு" };
const S4_CTA_DIR: LocaleStr = { en: "Browse all 147 schools", zh: "浏览全部 147 所", ms: "Lihat semua 147 sekolah", ta: "மொத்தம் 147 பள்ளிகள்" };

/* ============================ CH 5 · TIMELINE HORIZONTAL ============================ */

const S5_KICKER: LocaleStr = { en: "Chapter 5", zh: "第五章", ms: "Bab 5", ta: "அத்தியாயம் 5" };
const S5_TITLE: LocaleStr = {
  en: "The 2026 timeline — what you do, what schools do",
  zh: "2026 时间线——家长做什么，学校做什么",
  ms: "Garis masa 2026 — apa anda buat, apa sekolah buat",
  ta: "2026 கால அட்டவணை — நீங்கள் என்ன செய்கிறீர்கள், பள்ளிகள் என்ன செய்கின்றன",
};
const S5_INTRO: LocaleStr = {
  en: "Five phases across one cycle. Two parallel tracks: what you and your child do at home, and what schools and MOE do behind the portal. Knowing both keeps you ahead of slots and emails.",
  zh: "一个完整周期 5 个阶段。两条平行轨道：你和孩子在家做什么、学校和 MOE 在门户后面做什么。两条都懂就不会错过名额和邮件。",
  ms: "Lima fasa dalam satu kitaran. Dua trek selari: apa anda dan anak buat di rumah, dan apa sekolah serta MOE buat di belakang portal.",
  ta: "ஒரு சுழற்சியில் ஐந்து கட்டங்கள். இரண்டு இணை பாதைகள்: நீங்களும் உங்கள் குழந்தையும் வீட்டில் என்ன செய்கிறீர்கள், பள்ளிகளும் MOE-உம் என்ன செய்கின்றன.",
};

type TimelineCol = { phase: LocaleStr; dates: LocaleStr; you: LocaleStr; schools: LocaleStr };

const TIMELINE_HORIZ_5: TimelineCol[] = [
  {
    phase: { en: "Research", zh: "研究", ms: "Kaji", ta: "ஆராய்ச்சி" },
    dates: { en: "Jan – early May", zh: "1 月 – 5 月初", ms: "Jan – awal Mei", ta: "ஜன – மே தொடக்கம்" },
    you: { en: "Shortlist schools · attend open houses · gather evidence", zh: "做候选名单 · 去开放日 · 整理证据", ms: "Senarai pendek · hadir hari terbuka · kumpul bukti", ta: "குறுகிய பட்டியல் · திறந்த நாட்கள் · சான்று சேகரிப்பு" },
    schools: { en: "Publish open house dates · DSA criteria", zh: "公布开放日 · DSA 标准", ms: "Siar tarikh hari terbuka · kriteria DSA", ta: "திறந்த நாள் தேதிகள் · DSA விதிமுறைகள்" },
  },
  {
    phase: { en: "Apply", zh: "申请", ms: "Mohon", ta: "விண்ணப்பி" },
    dates: { en: "6 May – 2 Jun 4:30pm", zh: "5/6 – 6/2 下午 4:30", ms: "6 Mei – 2 Jun 4:30 ptg", ta: "6 மே – 2 ஜூன் 4:30" },
    you: { en: "Singpass login · 3 schools × 2 talents · upload documents", zh: "Singpass 登录 · 3 校 × 2 才艺 · 上传材料", ms: "Singpass · 3 sekolah × 2 bakat · muat naik dokumen", ta: "Singpass · 3 பள்ளி × 2 திறமை · ஆவணம்" },
    schools: { en: "Receive applications · prepare own shortlisting", zh: "接收申请 · 准备校内筛选", ms: "Terima permohonan · sediakan penapisan", ta: "விண்ணப்பங்களைப் பெறுதல் · குறுகிய பட்டியல்" },
  },
  {
    phase: { en: "Trial", zh: "试训", ms: "Percubaan", ta: "சோதனை" },
    dates: { en: "22 Jun – 28 Aug", zh: "6/22 – 8/28", ms: "22 Jun – 28 Ogos", ta: "22 ஜூன் – 28 ஆக" },
    you: { en: "Attend interviews / auditions / trials · check email daily", zh: "参加面试 / 试唱 / 试训 · 每日查邮箱", ms: "Hadir temu duga / ujibakat / percubaan · semak e-mel", ta: "நேர்காணல் / ஒலித்தேர்வு / சோதனை · மின்னஞ்சல்" },
    schools: { en: "Run own panels · score · decide CO / WL / unsuccessful", zh: "校内 panel · 评分 · 决定 CO / WL / 未录取", ms: "Panel sekolah · markah · keputusan CO / WL / tidak berjaya", ta: "பள்ளி குழுக்கள் · மதிப்பெண் · CO / WL / தோல்வி முடிவு" },
  },
  {
    phase: { en: "Rank", zh: "排序", ms: "Susun", ta: "வரிசை" },
    dates: { en: "19 – 23 Oct 4:30pm", zh: "10/19 – 23 下午 4:30", ms: "19 – 23 Okt 4:30 ptg", ta: "19 – 23 அக் 4:30" },
    you: { en: "Submit preference order in MOE portal", zh: "在 MOE 门户里提交志愿排序", ms: "Hantar susunan keutamaan di portal MOE", ta: "MOE வாயிலில் முன்னுரிமை வரிசை" },
    schools: { en: "Match preferences to confirmed offers", zh: "把志愿和 CO 匹配", ms: "Padankan keutamaan dengan CO", ta: "முன்னுரிமைகளை CO உடன் பொருத்துதல்" },
  },
  {
    phase: { en: "Results", zh: "结果", ms: "Keputusan", ta: "முடிவுகள்" },
    dates: { en: "24 – 25 Nov", zh: "11/24 – 25", ms: "24 – 25 Nov", ta: "24 – 25 நவ" },
    you: { en: "Receive outcome with PSLE · accept / decline / Counter-Offer", zh: "与 PSLE 同步收到结果 · 接受 / 拒绝 / Counter-Offer", ms: "Terima keputusan dengan PSLE · terima / tolak / Tawaran Balas", ta: "PSLE உடன் முடிவு · ஏற்க / நிராகரிக்க / எதிர் சலுகை" },
    schools: { en: "Release outcomes · prepare Sec 1 onboarding", zh: "公布结果 · 准备中一新生入学", ms: "Lepaskan keputusan · sediakan onboarding Sec 1", ta: "முடிவுகள் · இடைநிலை 1 சேர்க்கை தயாரிப்பு" },
  },
];

const S5_LBL_YOU: LocaleStr = { en: "You", zh: "你", ms: "Anda", ta: "நீங்கள்" };
const S5_LBL_SCHOOLS: LocaleStr = { en: "Schools / MOE", zh: "学校 / MOE", ms: "Sekolah / MOE", ta: "பள்ளிகள் / MOE" };
const S5_CTA: LocaleStr = { en: "Open the full timeline page", zh: "打开完整时间线", ms: "Buka halaman garis masa penuh", ta: "முழு கால அட்டவணை பக்கம்" };

/* ============================ CH 6 · 5 ELEMENTS ============================ */

const S6_KICKER: LocaleStr = { en: "Chapter 6", zh: "第六章", ms: "Bab 6", ta: "அத்தியாயம் 6" };
const S6_TITLE: LocaleStr = {
  en: "Interview prep — the 5-element self-introduction",
  zh: "面试准备——自我介绍的 5 个要素",
  ms: "Persediaan temu duga — pengenalan diri 5-elemen",
  ta: "நேர்காணல் தயாரிப்பு — சுய அறிமுகம் 5 உறுப்புகள்",
};
const S6_INTRO: LocaleStr = {
  en: "Every DSA interview opens with some version of 'tell me about yourself.' Memorising a paragraph fails. The 5-element framework anchors your child to one specific moment instead of a list of titles — that's what panels actually remember.",
  zh: "每个 DSA 面试都会以「介绍一下你自己」开场。背稿子会失败。5 要素框架让孩子聚焦在一个具体瞬间上，而不是头衔清单——评审记得住的就是这个。",
  ms: "Setiap temu duga DSA bermula dengan 'ceritakan tentang diri kamu.' Menghafal perenggan tidak berjaya. Rangka 5-elemen mengikat anak pada satu detik khusus, bukan senarai gelaran.",
  ta: "ஒவ்வொரு DSA நேர்காணலும் 'உன்னைப் பற்றி சொல்' என்று தொடங்குகிறது. பத்தியை மனப்பாடம் செய்வது தோல்வியடைகிறது. 5-உறுப்பு கட்டமைப்பு குழந்தையை ஒரு குறிப்பிட்ட தருணத்துடன் இணைக்கிறது.",
};

type Element5 = { label: LocaleStr; body: LocaleStr };

const FIVE_ELEMENTS: Element5[] = [
  {
    label: { en: "Who you are", zh: "你是谁", ms: "Siapa anda", ta: "நீங்கள் யார்" },
    body: {
      en: "Name + primary school + CCA / talent area. Two sentences. Orientation only, not the main event.",
      zh: "姓名 + 小学 + CCA 或才艺方向。两句话。只是开场，不是重点。",
      ms: "Nama + sekolah rendah + CCA / bakat. Dua ayat. Orientasi sahaja.",
      ta: "பெயர் + ஆரம்பப் பள்ளி + CCA / திறமை. இரண்டு வாக்கியங்கள். அறிமுகம் மட்டும்.",
    },
  },
  {
    label: { en: "Your commitment", zh: "你的投入", ms: "Komitmen", ta: "உங்கள் உறுதி" },
    body: {
      en: "Years of practice, training hours per week, level reached. Specific numbers beat vague claims: '4× a week for 6 years' beats 'I train hard.'",
      zh: "练了几年、每周几小时、达到什么水平。具体数字比模糊说法强：「每周 4 次练了 6 年」比「我很努力」强。",
      ms: "Tahun latihan, jam seminggu, tahap dicapai. Nombor khusus mengalahkan dakwaan kabur.",
      ta: "பயிற்சி ஆண்டுகள், வாரத்திற்கு மணிநேரங்கள், அடைந்த நிலை. குறிப்பிட்ட எண்கள் தெளிவற்ற கூற்றுகளை மிஞ்சுகின்றன.",
    },
  },
  {
    label: { en: "One real moment", zh: "一个真实瞬间", ms: "Satu detik sebenar", ta: "ஒரு உண்மையான தருணம்" },
    body: {
      en: "The single most important element. One specific story — a competition, a setback, a turning point. Detailed enough to feel lived-in, not summarised.",
      zh: "整个介绍最关键的部分。一个具体故事——比赛、挫折、转折点。细节够多让人感觉真实，不是干瘪总结。",
      ms: "Elemen paling penting. Satu cerita khusus — pertandingan, kemunduran, titik perubahan. Cukup terperinci untuk terasa sebenar.",
      ta: "மிக முக்கியமான உறுப்பு. ஒரு குறிப்பிட்ட கதை — போட்டி, தோல்வி, திருப்புமுனை. வாழ்ந்தது போல உணர விரிவாக.",
    },
  },
  {
    label: { en: "What drives you", zh: "什么驱动你", ms: "Apa mendorong anda", ta: "உங்களை இயக்கும் சக்தி" },
    body: {
      en: "The motivation behind why you keep showing up. Skip clichés ('I love it') — what specifically keeps you in this when training gets boring or hard?",
      zh: "为什么坚持的内在动力。跳过陈词滥调（如「我喜欢」）——具体是什么让你在训练枯燥或痛苦时还坚持？",
      ms: "Motivasi mengapa anda terus muncul. Elakkan klise — apa khusus yang membuat anda kekal ketika latihan menjadi membosankan?",
      ta: "ஏன் தொடர்ந்து வருகிறீர்கள் என்ற உள்ளார்ந்த உந்துதல். மொட்டையான வார்த்தைகளை தவிர்க்கவும்.",
    },
  },
  {
    label: { en: "Why this school", zh: "为什么选这所学校", ms: "Mengapa sekolah ini", ta: "ஏன் இந்தப் பள்ளி" },
    body: {
      en: "Specifics about THIS school's programme, coaches, or culture. Generic answers ('good reputation') fail every time. Research goes beyond the prospectus.",
      zh: "针对这所学校项目、教练或文化的具体点。泛泛回答（如「学校好」）每次都失败。研究要超越招生 brochure。",
      ms: "Spesifik tentang program, jurulatih, atau budaya sekolah INI. Jawapan umum gagal setiap kali.",
      ta: "இந்தப் பள்ளியின் திட்டம், பயிற்சியாளர்கள், கலாச்சாரம் பற்றிய குறிப்பிட்ட விவரங்கள். பொதுவான பதில்கள் தோல்வியடைகின்றன.",
    },
  },
];

const SAMPLE_Q_LABEL: LocaleStr = { en: "Sample question (one of 35 in the prep bank)", zh: "样题（题库中 35 题之一）", ms: "Soalan contoh (1 dari 35 dalam bank)", ta: "மாதிரி கேள்வி (35-இல் ஒன்று)" };
const SAMPLE_Q: LocaleStr = {
  en: "Why this school, and not the one closer to home?",
  zh: "为什么选这所学校，而不是离家近的那一所？",
  ms: "Mengapa sekolah ini, dan bukan yang lebih dekat dengan rumah?",
  ta: "ஏன் இந்தப் பள்ளி, வீட்டிற்கு அருகில் உள்ளதை தேர்வு செய்யவில்லை?",
};
const SAMPLE_A: LocaleStr = {
  en: "Anchor on programme specifics — their training schedule, the CCA's competition history, a coach's reputation, or a published team philosophy. Show research that goes beyond the prospectus. Closing line: how those specifics match how your child currently trains or competes.",
  zh: "答题落脚在项目细节——训练时间表、该 CCA 的比赛历史、某位教练的声誉、或公开发布的团队理念。展示出超越招生 brochure 的研究。收尾：这些具体点和孩子目前的训练/比赛模式怎么对得上。",
  ms: "Tumpukan pada spesifik program — jadual latihan, sejarah pertandingan CCA, reputasi jurulatih, atau falsafah pasukan. Tunjukkan penyelidikan yang melebihi brosur.",
  ta: "திட்ட விவரங்களில் கவனம் — பயிற்சி அட்டவணை, CCA-வின் போட்டி வரலாறு, பயிற்சியாளர் புகழ், அல்லது அணி தத்துவம். பிரசுரத்தை மீறிய ஆராய்ச்சியைக் காட்டுங்கள்.",
};
const S6_CTA: LocaleStr = { en: "Open the full interview prep page (35-question bank)", zh: "打开完整面试备战页（35 题题库）", ms: "Buka halaman persediaan temu duga penuh", ta: "முழு நேர்காணல் தயாரிப்பு பக்கம்" };

/* ============================ CH 7 · 4 OUTCOMES ============================ */

const S7_KICKER: LocaleStr = { en: "Chapter 7", zh: "第七章", ms: "Bab 7", ta: "அத்தியாயம் 7" };
const S7_TITLE: LocaleStr = {
  en: "The 4 possible outcomes",
  zh: "4 种可能的结果",
  ms: "4 keputusan mungkin",
  ta: "4 சாத்திய முடிவுகள்",
};
const S7_INTRO: LocaleStr = {
  en: "When results land 24–25 November alongside PSLE, every DSA applicant gets one of four outcomes. Knowing what each one means — and when it becomes binding — lets your family decide without panic.",
  zh: "11 月 24–25 日与 PSLE 同步公布结果时，每位 DSA 申请人都会收到 4 种结果之一。理解每种结果意味着什么、什么时候开始具备约束力，能让你不慌不忙地决定。",
  ms: "Apabila keputusan tiba 24–25 November bersama PSLE, setiap pemohon DSA mendapat satu daripada empat keputusan. Mengetahui apa setiap satu bermakna membolehkan keluarga membuat keputusan tanpa panik.",
  ta: "முடிவுகள் 24–25 நவம்பரில் PSLE-உடன் வரும்போது, ஒவ்வொரு DSA விண்ணப்பதாரரும் நான்கு முடிவுகளில் ஒன்றைப் பெறுகிறார்கள். ஒவ்வொன்றின் அர்த்தத்தைப் புரிந்துகொள்வது குடும்பத்தை அமைதியாக முடிவெடுக்க அனுமதிக்கிறது.",
};

type Outcome4 = {
  icon: typeof CheckCircle2;
  iconBg: string;
  name: LocaleStr;
  meaning: LocaleStr;
  binding: LocaleStr;
};

const OUTCOMES_4: Outcome4[] = [
  {
    icon: CheckCircle2,
    iconBg: "bg-emerald-50 text-emerald-700",
    name: { en: "Confirmed Offer", zh: "Confirmed Offer · 确认录取", ms: "Tawaran Sah", ta: "உறுதிசெய்யப்பட்ட சலுகை" },
    meaning: {
      en: "Admitted, conditional on PSLE clearing the course's minimum Posting Group (AL total ≤ 22 for IP / Express).",
      zh: "录取，条件是 PSLE 达到所录取课程的最低 Posting Group（IP / Express 要 AL 总分 ≤ 22）。",
      ms: "Diterima, bersyarat PSLE memenuhi Posting Group minimum (AL ≤ 22 untuk IP / Express).",
      ta: "சேர்க்கப்பட்டது, PSLE குறைந்தபட்ச Posting Group-ஐ கடக்க வேண்டும் (IP / Express-க்கு AL ≤ 22).",
    },
    binding: {
      en: "Binding at acceptance + October preference exercise. Skips S1 Posting entirely.",
      zh: "在接受 + 10 月排序 = 具备约束力。完全跳过 S1 Posting。",
      ms: "Mengikat pada penerimaan + latihan keutamaan Oktober. Melangkau S1 Posting.",
      ta: "ஏற்றுக்கொள்ளுதல் + அக்டோபர் முன்னுரிமைப் பயிற்சியில் கட்டுப்படுத்தும். S1 Posting-ஐ தாண்டுகிறது.",
    },
  },
  {
    icon: Clock,
    iconBg: "bg-amber-50 text-amber-700",
    name: { en: "Waitlist", zh: "Waitlist · 候补", ms: "Senarai Menunggu", ta: "காத்திருப்புப் பட்டியல்" },
    meaning: {
      en: "Held in reserve. Converts to a Confirmed Offer if higher-preference applicants decline or fall short on PSLE.",
      zh: "进候补名单。如果排序更高的申请人放弃或 PSLE 没达标，候补可以转正。",
      ms: "Disimpan dalam simpanan. Ditukar kepada Tawaran Sah jika pemohon keutamaan lebih tinggi menolak.",
      ta: "காப்பில் வைக்கப்பட்டது. உயர் முன்னுரிமை விண்ணப்பதாரர்கள் மறுத்தால் உறுதி சலுகையாக மாறும்.",
    },
    binding: {
      en: "Only binding if the offer converts and your family accepts. Otherwise no commitment.",
      zh: "只有转正且你接受后才具备约束力。否则没有承诺。",
      ms: "Hanya mengikat jika ditukar dan diterima. Jika tidak, tiada komitmen.",
      ta: "மாற்றப்பட்டு ஏற்றுக்கொண்டால் மட்டுமே கட்டுப்படுத்தும்.",
    },
  },
  {
    icon: Compass,
    iconBg: "bg-blue-50 text-blue-700",
    name: { en: "Counter-Offer", zh: "Counter-Offer · 反向 offer", ms: "Tawaran Balas", ta: "எதிர் சலுகை" },
    meaning: {
      en: "Dual-track schools may offer an O-Level place if PSLE doesn't meet IP eligibility but does meet O-Level minimum.",
      zh: "双轨制学校如果 PSLE 没达到 IP 资格但达到 O-Level 资格，可能反向发 O-Level offer。",
      ms: "Sekolah dwi-trek mungkin tawarkan O-Level jika PSLE gagal IP tetapi memenuhi O-Level.",
      ta: "PSLE IP தகுதியை பூர்த்தி செய்யாமல் O-Level-ஐ பூர்த்தி செய்தால் இரட்டை-பாதை பள்ளிகள் O-Level வழங்கலாம்.",
    },
    binding: {
      en: "Family chooses to accept or decline. Acceptance becomes binding.",
      zh: "家庭决定接受或拒绝。接受后即具备约束力。",
      ms: "Keluarga pilih terima atau tolak. Penerimaan mengikat.",
      ta: "குடும்பம் ஏற்க அல்லது நிராகரிக்க தேர்வு செய்கிறது.",
    },
  },
  {
    icon: RotateCcw,
    iconBg: "bg-slate-100 text-slate-700",
    name: { en: "Unsuccessful", zh: "Unsuccessful · 未录取", ms: "Tidak Berjaya", ta: "தோல்வி" },
    meaning: {
      en: "Not selected. S1 Posting opens normally with the PSLE score. S1 Appeal is still possible at schools with sibling or affiliation links.",
      zh: "未被录取。按 PSLE 成绩正常进入 S1 Posting。在有兄弟姐妹或校友关系的学校仍可申请 S1 Appeal。",
      ms: "Tidak dipilih. Penempatan S1 dibuka seperti biasa dengan skor PSLE.",
      ta: "தேர்வு செய்யப்படவில்லை. PSLE மதிப்பெண்ணுடன் S1 Posting வழக்கம் போல் திறக்கப்படுகிறது.",
    },
    binding: {
      en: "No binding — mainstream pathway is unchanged. DSA failure doesn't close any S1 doors.",
      zh: "无约束——主轨道不变。DSA 失败不堵任何 S1 选择。",
      ms: "Tiada ikatan — laluan arus perdana tidak berubah.",
      ta: "கட்டுப்பாடு இல்லை — முக்கிய பாதை மாறாது.",
    },
  },
];

const S7_LBL_BINDING: LocaleStr = { en: "When binding", zh: "约束节点", ms: "Bila mengikat", ta: "எப்போது கட்டுப்படுத்தும்" };
const S7_CTA: LocaleStr = { en: "Open the full results page", zh: "打开完整结果页", ms: "Buka halaman keputusan penuh", ta: "முழு முடிவுகள் பக்கம்" };

/* ============================ CH 8 · DSA × PSLE COMPARISON ============================ */

const S8_KICKER: LocaleStr = { en: "Chapter 8", zh: "第八章", ms: "Bab 8", ta: "அத்தியாயம் 8" };
const S8_TITLE: LocaleStr = {
  en: "DSA × PSLE — how the two routes interact",
  zh: "DSA × PSLE——两条路径如何互动",
  ms: "DSA × PSLE — bagaimana dua laluan berinteraksi",
  ta: "DSA × PSLE — இரண்டு வழிகள் எவ்வாறு தொடர்பு கொள்கின்றன",
};
const S8_INTRO: LocaleStr = {
  en: "DSA isn't a replacement for PSLE — it runs in parallel. Side-by-side comparison of the two routes makes clear when PSLE still matters, what AL ≤ 22 means in practice, and what happens if either route doesn't deliver.",
  zh: "DSA 不取代 PSLE——两条路径并行。把两条路径并排看，就能清楚 PSLE 何时仍然重要、AL ≤ 22 在实际操作中意味着什么、任一条路径不成时会发生什么。",
  ms: "DSA bukan ganti PSLE — ia berjalan selari. Perbandingan jelas bila PSLE masih penting, apa AL ≤ 22 bermakna, dan apa berlaku jika sebarang laluan tidak berjaya.",
  ta: "DSA என்பது PSLE-க்கு மாற்று அல்ல — அது இணையாக இயங்குகிறது. ஒப்பீடு PSLE எப்போது முக்கியம், AL ≤ 22 என்றால் என்ன, எந்த வழியும் வேலை செய்யாவிட்டால் என்ன நடக்கும் என்பதை தெளிவாக்குகிறது.",
};

type ComparisonRow = { aspect: LocaleStr; dsa: LocaleStr; psle: LocaleStr };

const COMPARE_HEAD: { dsa: LocaleStr; psle: LocaleStr } = {
  dsa: { en: "DSA-Sec route", zh: "DSA-Sec 路径", ms: "Laluan DSA-Sec", ta: "DSA-Sec வழி" },
  psle: { en: "PSLE S1 Posting", zh: "PSLE S1 派位", ms: "Penempatan PSLE S1", ta: "PSLE S1 Posting" },
};

const COMPARE_ROWS: ComparisonRow[] = [
  {
    aspect: { en: "Selection basis", zh: "录取依据", ms: "Asas pemilihan", ta: "தேர்வு அடிப்படை" },
    dsa: { en: "Talent + interview/trial; each school decides", zh: "才艺 + 面试/试训；学校自决定", ms: "Bakat + temu duga; sekolah memutuskan", ta: "திறமை + நேர்காணல்; பள்ளி முடிவு" },
    psle: { en: "PSLE Achievement Level (AL) total + Posting Group", zh: "PSLE AL 总分 + Posting Group", ms: "Jumlah AL PSLE + Posting Group", ta: "PSLE AL மொத்தம் + Posting Group" },
  },
  {
    aspect: { en: "Window", zh: "时间窗口", ms: "Tetingkap", ta: "காலம்" },
    dsa: { en: "6 May – 2 Jun 2026 portal", zh: "2026 年 5/6 – 6/2 门户", ms: "Portal 6 Mei – 2 Jun 2026", ta: "6 மே – 2 ஜூன் 2026 வாயில்" },
    psle: { en: "Sep–Oct exam · Nov–Dec posting", zh: "9-10 月考试 · 11-12 月派位", ms: "Peperiksaan Sep-Okt · Penempatan Nov-Dis", ta: "செப்-அக் தேர்வு · நவ-டிச இடம் ஒதுக்கீடு" },
  },
  {
    aspect: { en: "Who decides", zh: "由谁决定", ms: "Siapa putuskan", ta: "யார் முடிவு செய்கிறார்கள்" },
    dsa: { en: "Each school's panel (rubrics not published)", zh: "学校自己的评审团（评分标准不公开）", ms: "Panel sekolah (rubrik tidak diterbit)", ta: "பள்ளி குழு (ருப்ரிக்குகள் வெளியிடப்படவில்லை)" },
    psle: { en: "MOE central algorithm by score + Posting Group", zh: "MOE 中央算法 · 按分数 + Posting Group", ms: "Algoritma pusat MOE", ta: "MOE மத்திய அல்காரிதம்" },
  },
  {
    aspect: { en: "Max choices", zh: "最多选择", ms: "Pilihan maksimum", ta: "அதிகபட்ச தேர்வுகள்" },
    dsa: { en: "3 schools × 2 talents = 6 entries max", zh: "3 校 × 2 才艺 = 最多 6 个条目", ms: "3 sekolah × 2 bakat = 6 entri", ta: "3 பள்ளி × 2 திறமை = 6 உள்ளீடு" },
    psle: { en: "Up to 6 school choices on Option Form", zh: "Option Form 上最多 6 个学校", ms: "Sehingga 6 pilihan sekolah", ta: "6 பள்ளிகள் வரை" },
  },
  {
    aspect: { en: "PSLE minimum", zh: "PSLE 门槛", ms: "Minimum PSLE", ta: "PSLE குறைந்தபட்சம்" },
    dsa: { en: "AL ≤ 22 (Posting Group 3) for IP / Express", zh: "IP / Express 要 AL 总分 ≤ 22（Posting Group 3）", ms: "AL ≤ 22 untuk IP / Express", ta: "IP / Express-க்கு AL ≤ 22" },
    psle: { en: "School-specific cut-off (e.g. AL 6–10 for top IP schools)", zh: "学校切线（顶尖 IP 校通常 AL 6–10）", ms: "Cut-off sekolah (cth AL 6–10 untuk IP atas)", ta: "பள்ளி-குறிப்பிட்ட cut-off (உயர் IP-க்கு AL 6–10)" },
  },
  {
    aspect: { en: "Commitment", zh: "承诺", ms: "Komitmen", ta: "உறுதிமொழி" },
    dsa: { en: "2-year CCA / talent commitment binding", zh: "2 年 CCA / 才艺承诺有约束", ms: "Komitmen CCA 2 tahun mengikat", ta: "2-ஆண்டு CCA உறுதிமொழி" },
    psle: { en: "No CCA commitment at posting", zh: "派位时无 CCA 承诺", ms: "Tiada komitmen CCA", ta: "CCA உறுதிமொழி இல்லை" },
  },
  {
    aspect: { en: "If unsuccessful", zh: "如果不成", ms: "Jika tidak berjaya", ta: "வெற்றியடையாவிட்டால்" },
    dsa: { en: "Enter S1 Posting normally — no penalty", zh: "正常进入 S1 派位——无惩罚", ms: "Masuk S1 Posting biasa — tiada penalti", ta: "S1 Posting வழக்கம் போல் — அபராதம் இல்லை" },
    psle: { en: "Last-resort S1 Appeal at affiliated / sibling schools", zh: "最后手段：在有关联学校申请 S1 Appeal", ms: "Pilihan terakhir Rayuan S1 di sekolah berafiliasi", ta: "S1 Appeal இறுதி தேர்வு" },
  },
];

/* ============================ CH 9 · FAQ (12 Q&A) ============================ */

const S9_KICKER: LocaleStr = { en: "Chapter 9", zh: "第九章", ms: "Bab 9", ta: "அத்தியாயம் 9" };
const S9_TITLE: LocaleStr = {
  en: "12 questions parents actually ask",
  zh: "家长真正会问的 12 个问题",
  ms: "12 soalan yang ibu bapa benar-benar tanya",
  ta: "பெற்றோர்கள் உண்மையில் கேட்கும் 12 கேள்விகள்",
};
const S9_INTRO: LocaleStr = {
  en: "These are the questions we hear most often in parent groups and reader emails. Each answer points to the deeper page if you want to follow up.",
  zh: "这些是家长群和读者邮件里问得最多的问题。每个回答都链回更深入的页面方便深挖。",
  ms: "Inilah soalan yang paling kerap kami dengar dari kumpulan ibu bapa dan e-mel pembaca.",
  ta: "பெற்றோர் குழுக்கள் மற்றும் வாசகர் மின்னஞ்சல்களில் நாங்கள் அடிக்கடி கேட்கும் கேள்விகள் இவை.",
};

// Canonical FAQ data lives in lib/dsa-guide-faq.ts so server components
// can import it (re-export from a 'use client' file breaks at the boundary).
export type { FaqQa } from "@/lib/dsa-guide-faq";
import { FAQ_QA } from "@/lib/dsa-guide-faq";
export { FAQ_QA };

/* ============================ MAIN COMPONENT ============================ */

export function DsaGuidePageBody() {
  const { locale } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">

        {/* ===== HERO ===== */}
        <section className="bg-hero-mesh">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
              {pick(HERO_KICKER, locale)}
            </p>
            <h1
              style={{ textTransform: "none" }}
              className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-intellectual sm:text-4xl lg:text-5xl"
            >
              {pick(HERO_TITLE, locale)}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-intellectual-muted sm:text-lg">
              {pick(HERO_SUB, locale)}
            </p>

            {/* Stats strip */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="rounded-xl border border-intellectual/12 bg-white px-4 py-3 shadow-soft sm:px-5 sm:py-4">
                  <p className="font-display text-2xl font-bold text-intellectual sm:text-3xl" style={{ textTransform: "none" }}>
                    {s.num}
                  </p>
                  <p className="mt-0.5 text-[11.5px] font-medium text-intellectual-muted normal-case sm:text-[12.5px]">
                    {pick(s.label, locale)}
                  </p>
                </div>
              ))}
            </div>

            {/* Journey diagram */}
            <JourneyFlow locale={locale} />

            <p className="mt-7 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-champagne-dark normal-case sm:mt-8">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {pick(READ_TIME, locale)}
            </p>
          </div>
        </section>

        {/* ===== TL;DR ===== */}
        <section className="py-12 sm:py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="rounded-2xl border border-champagne/35 bg-gradient-to-br from-white to-champagne-subtle/40 p-6 shadow-soft ring-1 ring-intellectual/8 sm:p-8">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-champagne/25 text-champagne-dark">
                  <Sparkles className="h-4 w-4" aria-hidden />
                </span>
                <h2 className="font-display text-lg font-bold text-intellectual sm:text-xl" style={{ textTransform: "none" }}>
                  {pick(TLDR_TITLE, locale)}
                </h2>
              </div>
              <ul className="mt-5 space-y-2.5">
                {TLDR_BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-intellectual-muted sm:text-[15px]">
                    <span className="mt-[5px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-intellectual/8 text-[10px] font-bold text-intellectual">
                      {i + 1}
                    </span>
                    <span>{pick(b, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== SECTION 1 · WHAT DSA IS ===== */}
        <section className="border-t border-intellectual/[0.06] py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeader
              kicker={pick(S1_KICKER, locale)}
              title={pick(S1_TITLE, locale)}
              intro={pick(S1_INTRO, locale)}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
              <article className="rounded-2xl border border-intellectual/12 bg-white p-6 shadow-soft sm:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-bold text-intellectual sm:text-lg" style={{ textTransform: "none" }}>
                    {pick(WHAT_IS_CARD.title, locale)}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {WHAT_IS_CARD.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-intellectual-muted sm:text-sm">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-intellectual/40" aria-hidden />
                      <span>{pick(b, locale)}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-intellectual/12 bg-white p-6 shadow-soft sm:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                    <RotateCcw className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-bold text-intellectual sm:text-lg" style={{ textTransform: "none" }}>
                    {pick(WHAT_ISNT_CARD.title, locale)}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {WHAT_ISNT_CARD.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-intellectual-muted sm:text-sm">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-intellectual/40" aria-hidden />
                      <span>{pick(b, locale)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-6">
              <Link
                href="/what-is-dsa"
                className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-intellectual-light"
              >
                <span style={{ textTransform: "none" }}>{pick(S1_CTA, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2 · ⭐ PARENT STORIES (HIGH POSITION) ===== */}
        <section className="border-t border-intellectual/[0.06] bg-surface-warm py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeader
              kicker={pick(S2_KICKER, locale)}
              title={pick(S2_TITLE, locale)}
              intro={pick(S2_INTRO, locale)}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {STORIES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <article
                    key={i}
                    className="rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft transition hover:shadow-card sm:p-6"
                  >
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${s.iconBg}`}>
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <p className="mt-4 font-display text-[15px] font-bold text-intellectual" style={{ textTransform: "none" }}>
                      {pick(s.name, locale)}
                    </p>
                    <p className="mt-1 text-[12.5px] font-semibold tracking-wide text-champagne-dark normal-case">
                      {pick(s.talent, locale)}
                    </p>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-intellectual-muted sm:text-sm">
                      {pick(s.outcome, locale)}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-7">
              <Link
                href="/dsa-experience"
                className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-intellectual-light"
              >
                <span style={{ textTransform: "none" }}>{pick(S2_CTA, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3 · 8 TALENTS ===== */}
        <section className="border-t border-intellectual/[0.06] py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeader
              kicker={pick(S3_KICKER, locale)}
              title={pick(S3_TITLE, locale)}
              intro={pick(S3_INTRO, locale)}
            />

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {TALENTS.map((t) => {
                const Icon = t.icon;
                return (
                  <Link
                    key={t.slug}
                    href={`/dsa-interview/${t.slug}`}
                    className="group relative flex flex-col items-center gap-2.5 rounded-2xl border border-intellectual/12 bg-white px-3 py-5 text-center shadow-soft transition hover:border-intellectual/30 hover:shadow-card sm:py-6"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual transition group-hover:bg-intellectual group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <p className="font-display text-[13.5px] font-semibold text-intellectual sm:text-sm" style={{ textTransform: "none" }}>
                      {pick(t.label, locale)}
                    </p>
                    <span className={`absolute top-2.5 right-2.5 rounded-full px-2 py-0.5 text-[9.5px] font-bold tracking-wide normal-case ${
                      t.live ? "bg-emerald-100 text-emerald-700" : "bg-intellectual/8 text-intellectual/60"
                    }`}>
                      {t.live ? pick(LIVE_BADGE, locale) : pick(COMING_BADGE, locale)}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-7">
              <Link
                href="/dsa-interview/talents"
                className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-intellectual-light"
              >
                <span style={{ textTransform: "none" }}>{pick(S3_CTA, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CH 4 · 147 SCHOOLS ===== */}
        <section className="border-t border-intellectual/[0.06] bg-surface-warm py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeader
              kicker={pick(S4_KICKER, locale)}
              title={pick(S4_TITLE, locale)}
              intro={pick(S4_INTRO, locale)}
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {FULL_DSA_SCHOOLS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <article key={i} className="relative rounded-2xl border border-champagne/40 bg-white p-5 shadow-soft ring-1 ring-champagne/10 sm:p-6">
                    <span className="absolute top-2.5 right-2.5 rounded-full bg-champagne/25 px-2 py-0.5 text-[9.5px] font-bold tracking-wide text-champagne-dark normal-case">
                      {pick(S4_FULL_BADGE, locale)}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="mt-3 font-display text-[14px] font-bold leading-tight text-intellectual sm:text-[15px]" style={{ textTransform: "none" }}>
                      {s.name}
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-intellectual-muted sm:text-[13px]">
                      {pick(s.focus, locale)}
                    </p>
                  </article>
                );
              })}
            </div>

            <p className="mt-6 rounded-xl border border-intellectual/10 bg-white/70 px-4 py-3 text-[13.5px] leading-relaxed text-intellectual-muted sm:text-sm">
              {pick(S4_PARTIAL_NOTE, locale)}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/dsa-finder"
                className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-intellectual-light"
              >
                <span style={{ textTransform: "none" }}>{pick(S4_CTA_FINDER, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/schools"
                className="inline-flex items-center gap-2 rounded-xl border border-intellectual/20 bg-white px-5 py-2.5 text-sm font-semibold text-intellectual transition hover:border-intellectual/40"
              >
                <span style={{ textTransform: "none" }}>{pick(S4_CTA_DIR, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CH 5 · TIMELINE HORIZONTAL ===== */}
        <section className="border-t border-intellectual/[0.06] py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeader
              kicker={pick(S5_KICKER, locale)}
              title={pick(S5_TITLE, locale)}
              intro={pick(S5_INTRO, locale)}
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-5 sm:gap-3">
              {TIMELINE_HORIZ_5.map((p, i) => (
                <article
                  key={i}
                  className="rounded-2xl border border-intellectual/12 bg-white p-4 shadow-soft sm:p-4"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-intellectual text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="mt-3 font-display text-[13.5px] font-bold text-intellectual sm:text-[14px]" style={{ textTransform: "none" }}>
                    {pick(p.phase, locale)}
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold tracking-wide text-champagne-dark normal-case">
                    {pick(p.dates, locale)}
                  </p>
                  <div className="mt-3 border-t border-intellectual/10 pt-3">
                    <p className="text-[9.5px] font-bold tracking-wider text-intellectual/45 normal-case">
                      {pick(S5_LBL_YOU, locale)}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-snug text-intellectual-muted">
                      {pick(p.you, locale)}
                    </p>
                  </div>
                  <div className="mt-3 border-t border-intellectual/10 pt-3">
                    <p className="text-[9.5px] font-bold tracking-wider text-intellectual/45 normal-case">
                      {pick(S5_LBL_SCHOOLS, locale)}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-snug text-intellectual-muted">
                      {pick(p.schools, locale)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7">
              <Link
                href="/timeline"
                className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-intellectual-light"
              >
                <span style={{ textTransform: "none" }}>{pick(S5_CTA, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CH 6 · 5 ELEMENTS ===== */}
        <section className="border-t border-intellectual/[0.06] bg-surface-warm py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeader
              kicker={pick(S6_KICKER, locale)}
              title={pick(S6_TITLE, locale)}
              intro={pick(S6_INTRO, locale)}
            />

            <ol className="mt-8 grid gap-3 sm:grid-cols-1 sm:gap-3">
              {FIVE_ELEMENTS.map((el, i) => (
                <li key={i} className="flex gap-4 rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft sm:p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-intellectual text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-bold text-intellectual" style={{ textTransform: "none" }}>
                      {pick(el.label, locale)}
                    </p>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-intellectual-muted sm:text-sm">
                      {pick(el.body, locale)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Sample Q&A card */}
            <div className="mt-6 rounded-2xl border border-champagne/35 bg-gradient-to-br from-white to-champagne-subtle/40 p-5 shadow-soft ring-1 ring-intellectual/8 sm:p-6">
              <p className="text-[10.5px] font-bold tracking-wider text-champagne-dark normal-case">
                {pick(SAMPLE_Q_LABEL, locale)}
              </p>
              <p className="mt-2 font-display text-[15px] font-bold text-intellectual sm:text-base" style={{ textTransform: "none" }}>
                "{pick(SAMPLE_Q, locale)}"
              </p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-intellectual-muted sm:text-sm">
                {pick(SAMPLE_A, locale)}
              </p>
            </div>

            <div className="mt-7">
              <Link
                href="/dsa-interview"
                className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-intellectual-light"
              >
                <span style={{ textTransform: "none" }}>{pick(S6_CTA, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CH 7 · 4 OUTCOMES QUADRANT ===== */}
        <section className="border-t border-intellectual/[0.06] py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeader
              kicker={pick(S7_KICKER, locale)}
              title={pick(S7_TITLE, locale)}
              intro={pick(S7_INTRO, locale)}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {OUTCOMES_4.map((o, i) => {
                const Icon = o.icon;
                return (
                  <article key={i} className="rounded-2xl border border-intellectual/12 bg-white p-6 shadow-soft sm:p-7">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${o.iconBg}`}>
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="font-display text-base font-bold text-intellectual sm:text-lg" style={{ textTransform: "none" }}>
                        {pick(o.name, locale)}
                      </h3>
                    </div>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-intellectual-muted sm:text-sm">
                      {pick(o.meaning, locale)}
                    </p>
                    <p className="mt-3 border-t border-intellectual/10 pt-3 text-[12.5px] leading-relaxed text-intellectual-muted/85">
                      <span className="font-semibold text-intellectual normal-case">{pick(S7_LBL_BINDING, locale)} · </span>
                      {pick(o.binding, locale)}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-7">
              <Link
                href="/dsa-results"
                className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-intellectual-light"
              >
                <span style={{ textTransform: "none" }}>{pick(S7_CTA, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CH 8 · DSA × PSLE COMPARISON ===== */}
        <section className="border-t border-intellectual/[0.06] bg-surface-warm py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHeader
              kicker={pick(S8_KICKER, locale)}
              title={pick(S8_TITLE, locale)}
              intro={pick(S8_INTRO, locale)}
            />

            <div className="mt-8 overflow-hidden rounded-2xl border border-intellectual/12 bg-white shadow-soft">
              <table className="w-full text-left text-[13px] sm:text-[13.5px]">
                <thead>
                  <tr className="bg-intellectual text-white">
                    <th className="px-4 py-3 font-semibold normal-case sm:px-5 sm:py-3.5" style={{ textTransform: "none" }}>
                      &nbsp;
                    </th>
                    <th className="px-4 py-3 font-semibold normal-case sm:px-5 sm:py-3.5" style={{ textTransform: "none" }}>
                      {pick(COMPARE_HEAD.dsa, locale)}
                    </th>
                    <th className="px-4 py-3 font-semibold normal-case sm:px-5 sm:py-3.5" style={{ textTransform: "none" }}>
                      {pick(COMPARE_HEAD.psle, locale)}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-intellectual/8">
                  {COMPARE_ROWS.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-intellectual/[0.025]"}>
                      <td className="px-4 py-3 align-top font-semibold text-intellectual sm:px-5 sm:py-3.5 normal-case">
                        {pick(row.aspect, locale)}
                      </td>
                      <td className="px-4 py-3 align-top leading-relaxed text-intellectual-muted sm:px-5 sm:py-3.5">
                        {pick(row.dsa, locale)}
                      </td>
                      <td className="px-4 py-3 align-top leading-relaxed text-intellectual-muted sm:px-5 sm:py-3.5">
                        {pick(row.psle, locale)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== CH 9 · FAQ ACCORDION ===== */}
        <section className="border-t border-intellectual/[0.06] py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeader
              kicker={pick(S9_KICKER, locale)}
              title={pick(S9_TITLE, locale)}
              intro={pick(S9_INTRO, locale)}
            />

            <div className="mt-8 space-y-2.5">
              {FAQ_QA.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-intellectual/12 bg-white px-5 py-4 shadow-soft transition hover:border-intellectual/25 sm:px-6 sm:py-5"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span className="font-display text-[14.5px] font-semibold text-intellectual sm:text-[15px]" style={{ textTransform: "none" }}>
                      {pick(item.q, locale)}
                    </span>
                    <span
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-intellectual/8 text-intellectual transition group-open:rotate-45 group-open:bg-intellectual group-open:text-white"
                      aria-hidden
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-intellectual-muted sm:text-sm">
                    {pick(item.a, locale)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BOTTOM CTA ===== */}
        <section className="border-t border-intellectual/[0.06] py-12 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-2xl border border-intellectual/15 bg-intellectual p-6 text-white sm:p-8">
              <h2 className="font-display text-lg font-bold sm:text-xl" style={{ textTransform: "none" }}>
                {locale === "zh"
                  ? "想直接看时间线，还是开始备战？"
                  : locale === "ms"
                    ? "Mahu lihat garis masa atau mula bersedia?"
                    : locale === "ta"
                      ? "கால அட்டவணையைப் பாருங்கள் அல்லது தயாரிக்கத் தொடங்குங்கள்"
                      : "Want the timeline, or start prep?"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {locale === "zh"
                  ? "Pillar 是入口枢纽。Timeline 写每个日期、Interview & Trial 写面试备战、Results 写 outcome 怎么处理。"
                  : locale === "ms"
                    ? "Pillar adalah pusat. Timeline untuk tarikh, Interview & Trial untuk persediaan, Results untuk keputusan."
                    : locale === "ta"
                      ? "பில்லர் ஒரு மையம். Timeline தேதிகளுக்கு, Interview & Trial தயாரிப்புக்கு, Results முடிவுகளுக்கு."
                      : "Pillar is the hub. Timeline for dates, Interview & Trial for prep, Results for outcomes."}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/timeline"
                  className="inline-flex items-center gap-2 rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
                >
                  <span style={{ textTransform: "none" }}>
                    {locale === "zh" ? "2026 时间线" : locale === "ms" ? "Garis masa 2026" : locale === "ta" ? "2026 கால அட்டவணை" : "2026 Timeline"}
                  </span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/dsa-interview"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <span style={{ textTransform: "none" }}>
                    {locale === "zh" ? "面试备战" : locale === "ms" ? "Persediaan temu duga" : locale === "ta" ? "நேர்காணல் தயாரிப்பு" : "Interview prep"}
                  </span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}

/* Defensive: silence unused-icon lint warnings if any stub icons aren't yet rendered */
void GraduationCap;
