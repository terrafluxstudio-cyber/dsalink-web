"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  FileSearch,
  GraduationCap,
  MessageSquareText,
  Music,
  RotateCcw,
  Shield,
  Sparkles,
  Swords,
  Trophy,
  TrendingUp,
  Users,
  Waves,
  Wrench,
  Calculator,
  Goal,
  Footprints,
  Music2,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

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
  en: "From what DSA actually is, to which 147 schools take part, to the 8 talent areas, the 2026 timeline, interview prep, and what each outcome means at result release. Every section links to the deeper page if you want to go further.",
  zh: "从 DSA 到底是什么，到哪 147 所学校参与，到 8 大才艺方向，到 2026 时间线、面试准备、结果出来每种 outcome 意味着什么。每个 section 想深挖都有内链到详情页。",
  ms: "Dari apa itu DSA, ke 147 sekolah yang menyertai, ke 8 bidang bakat, garis masa 2026, persediaan temu duga, dan apa setiap keputusan bermakna apabila keputusan dilepaskan. Setiap bahagian memautkan ke halaman terperinci.",
  ta: "DSA என்றால் என்ன என்பதிலிருந்து, பங்கேற்கும் 147 பள்ளிகள், 8 திறமைப் பகுதிகள், 2026 கால அட்டவணை, நேர்காணல் தயாரிப்பு, முடிவு வெளியிடப்படும்போது ஒவ்வொரு விளைவும் எதைக் குறிக்கிறது என்பது வரை. ஒவ்வொரு பகுதியும் ஆழமான பக்கத்திற்கு இணைக்கப்பட்டுள்ளது.",
};

const STATS = [
  { num: "147", label: { en: "secondary schools", zh: "所中学", ms: "sekolah menengah", ta: "இடைநிலை பள்ளிகள்" } },
  { num: "8", label: { en: "talent categories", zh: "大才艺方向", ms: "kategori bakat", ta: "திறமை வகைகள்" } },
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
    sub: { en: "5 May-2 Jun", zh: "5/5-6/2", ms: "5 Mei-2 Jun", ta: "5 மே-2 ஜூன்" },
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
    en: "MOE runs the central portal once a year (5 May–2 Jun 2026); each school decides who gets in.",
    zh: "MOE 每年开一次中央门户（2026 年 5/5-6/2），具体录谁由学校决定。",
    ms: "MOE mengendalikan portal pusat setahun sekali (5 Mei–2 Jun 2026); setiap sekolah memutuskan kemasukan.",
    ta: "MOE ஒவ்வொரு ஆண்டும் ஒருமுறை மத்திய வாயிலை இயக்குகிறது (5 மே–2 ஜூன் 2026); ஒவ்வொரு பள்ளியும் சேர்க்கையைத் தீர்மானிக்கிறது.",
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

type StoryHook = {
  icon: typeof Swords;
  iconBg: string;
  name: LocaleStr;
  talent: LocaleStr;
  outcome: LocaleStr;
};

const STORIES: StoryHook[] = [
  {
    icon: Swords,
    iconBg: "bg-rose-50 text-rose-600",
    name: { en: "Maya · P6 girl", zh: "Maya · P6 女生", ms: "Maya · P6", ta: "Maya · P6" },
    talent: { en: "Fencing (national grade)", zh: "击剑（国家级）", ms: "Lawan pedang (gred kebangsaan)", ta: "வாள் சண்டை (தேசிய தரம்)" },
    outcome: {
      en: "Confirmed Offer at a school ~4 AL above her likely PSLE-posting reach.",
      zh: "拿到 Confirmed Offer · 比预估 PSLE 派位高约 4 AL 等级。",
      ms: "Tawaran Sah di sekolah ~4 AL lebih tinggi daripada jangkauan PSLE.",
      ta: "உறுதிசெய்யப்பட்ட சலுகை — PSLE-ஐ விட ~4 AL உயரமான பள்ளியில்.",
    },
  },
  {
    icon: Wrench,
    iconBg: "bg-amber-50 text-amber-700",
    name: { en: "Aaryan · P6 boy", zh: "Aaryan · P6 男生", ms: "Aaryan · P6", ta: "Aaryan · P6" },
    talent: { en: "Robotics & engineering", zh: "机器人 & 工程", ms: "Robotik & kejuruteraan", ta: "ரோபாட்டிக்ஸ் & பொறியியல்" },
    outcome: {
      en: "Confirmed Offer at a full-DSA specialised school — no PSLE posting pathway alternative.",
      zh: "拿到全 DSA 专科学校 Confirmed Offer · 没有 PSLE 派位替代路径。",
      ms: "Tawaran Sah di sekolah DSA penuh khusus — tiada laluan PSLE alternatif.",
      ta: "முழு-DSA சிறப்புப் பள்ளியில் உறுதிசெய்யப்பட்ட சலுகை — PSLE மாற்று வழி இல்லை.",
    },
  },
  {
    icon: Music,
    iconBg: "bg-violet-50 text-violet-700",
    name: { en: "Kai-Lin · P6 girl", zh: "Kai-Lin · P6 女生", ms: "Kai-Lin · P6", ta: "Kai-Lin · P6" },
    talent: { en: "Choir & vocal music", zh: "合唱 & 声乐", ms: "Koir & vokal", ta: "பாடகர் குழு & குரல் இசை" },
    outcome: {
      en: "Started as Waitlist, converted to Confirmed Offer in October — no formal private training.",
      zh: "先进 Waitlist · 10 月转为 Confirmed Offer · 没正式上私人课。",
      ms: "Mula sebagai Senarai Menunggu, ditukar kepada Tawaran Sah pada Oktober — tiada latihan persendirian.",
      ta: "காத்திருப்பு பட்டியலில் தொடங்கி, அக்டோபரில் உறுதிசெய்யப்பட்ட சலுகையாக மாற்றப்பட்டது — தனியார் பயிற்சி இல்லை.",
    },
  },
  {
    icon: Users,
    iconBg: "bg-emerald-50 text-emerald-700",
    name: { en: "Daniel · P6 boy", zh: "Daniel · P6 男生", ms: "Daniel · P6", ta: "Daniel · P6" },
    talent: { en: "Leadership track", zh: "领导力方向", ms: "Trek kepimpinan", ta: "தலைமைத்துவ பாதை" },
    outcome: {
      en: "Confirmed Offer ~2 AL above PSLE reach — documented impact mattered more than committee titles.",
      zh: "拿到 Confirmed Offer · 比 PSLE 派位高约 2 AL · 看的是真实贡献而不是头衔。",
      ms: "Tawaran Sah ~2 AL atas PSLE — kesan terdokumentasi lebih penting daripada gelaran jawatankuasa.",
      ta: "PSLE-ஐ விட ~2 AL உயர் உறுதிசெய்யப்பட்ட சலுகை — பதவிப் பெயரை விட ஆவணப்படுத்தப்பட்ட தாக்கம் முக்கியம்.",
    },
  },
  {
    icon: TrendingUp,
    iconBg: "bg-slate-100 text-slate-700",
    name: { en: "Wei-Han · P6 girl", zh: "Wei-Han · P6 女生", ms: "Wei-Han · P6", ta: "Wei-Han · P6" },
    talent: { en: "Swimming · PSLE later exceeded all expectations", zh: "游泳 · PSLE 后来超水平发挥", ms: "Berenang · PSLE kemudian melebihi jangkaan", ta: "நீச்சல் · PSLE பின்னர் எதிர்பார்ப்புகளை மீறியது" },
    outcome: {
      en: "Bound to her DSA school by Commitment Rule — could not move to the higher-tier school her PSLE result would have reached.",
      zh: "受 Commitment Rule 约束 · 不能转到 PSLE 成绩本可达到的更高 tier 学校。",
      ms: "Terikat ke sekolah DSA oleh Peraturan Komitmen — tidak boleh berpindah ke sekolah tahap lebih tinggi.",
      ta: "உறுதிமொழி விதியால் தனது DSA பள்ளியில் கட்டப்பட்டிருக்கிறார் — உயர் தரப் பள்ளிக்கு மாற முடியாது.",
    },
  },
  {
    icon: RotateCcw,
    iconBg: "bg-blue-50 text-blue-700",
    name: { en: "Marcus · P6 boy", zh: "Marcus · P6 男生", ms: "Marcus · P6", ta: "Marcus · P6" },
    talent: { en: "3 applications · all unsuccessful", zh: "申请 3 所 · 全部未录取", ms: "3 permohonan · semua tidak berjaya", ta: "3 விண்ணப்பங்கள் · அனைத்தும் தோல்வி" },
    outcome: {
      en: "DSA didn't work out — PSLE delivered a strong score and S1 Posting placed him at the right-fit school anyway.",
      zh: "DSA 没成 · PSLE 考得不错 · S1 Posting 把他派到了一所很合适的学校。",
      ms: "DSA tidak berjaya — PSLE memberikan skor kuat dan Penempatan S1 menempatkannya di sekolah yang sesuai.",
      ta: "DSA வேலை செய்யவில்லை — PSLE வலுவான மதிப்பெண்ணைக் கொடுத்தது, S1 Posting அவரை சரியான பள்ளியில் வைத்தது.",
    },
  },
];

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
  en: "The 8 talent categories MOE accepts",
  zh: "MOE 接受的 8 大才艺方向",
  ms: "8 kategori bakat yang MOE terima",
  ta: "MOE ஏற்றுக்கொள்ளும் 8 திறமை வகைகள்",
};
const S3_INTRO: LocaleStr = {
  en: "Across 147 schools, talent categories cluster into eight families. We're building one deep-prep page per category — basketball is live, the rest follow weekly. Click any tile to open the prep page or see which schools accept that talent.",
  zh: "147 所学校的才艺方向归到 8 大类。我们正在每个方向出一篇深度备战指南——篮球已上线，其余每周陆续上线。点击任意卡片打开备战页或查看哪些学校接受这个方向。",
  ms: "Merentas 147 sekolah, kategori bakat berkumpul dalam lapan keluarga. Kami sedang membina satu halaman persediaan mendalam setiap kategori — bola keranjang sudah ada, yang lain mingguan.",
  ta: "147 பள்ளிகளில், திறமை வகைகள் எட்டு குடும்பங்களாகக் குழுவாக உள்ளன. ஒவ்வொரு வகைக்கும் ஒரு ஆழமான தயாரிப்பு பக்கத்தை உருவாக்குகிறோம் — கூடைப்பந்து வெளியீடு, மற்றவை வாரந்தோறும்.",
};

const TALENTS = [
  { slug: "basketball", icon: Goal, label: { en: "Basketball", zh: "篮球", ms: "Bola Keranjang", ta: "கூடைப்பந்து" }, live: true },
  { slug: "football", icon: Trophy, label: { en: "Football", zh: "足球", ms: "Bola Sepak", ta: "கால்பந்து" }, live: false },
  { slug: "swimming", icon: Waves, label: { en: "Swimming", zh: "游泳", ms: "Renang", ta: "நீச்சல்" }, live: false },
  { slug: "track-field", icon: Footprints, label: { en: "Track & Field", zh: "田径", ms: "Olahraga", ta: "ஓட்டப்பந்தயம்" }, live: false },
  { slug: "badminton", icon: Sparkles, label: { en: "Badminton", zh: "羽毛球", ms: "Badminton", ta: "இறகுப்பந்து" }, live: false },
  { slug: "martial-arts", icon: Shield, label: { en: "Martial Arts", zh: "武术", ms: "Seni Bela Diri", ta: "தற்காப்பு கலைகள்" }, live: false },
  { slug: "music", icon: Music2, label: { en: "Music", zh: "音乐", ms: "Muzik", ta: "இசை" }, live: false },
  { slug: "math", icon: Calculator, label: { en: "Math & Sci", zh: "数理", ms: "Mat & Sains", ta: "கணிதம் & அறிவியல்" }, live: false },
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

/* ============================ LOWER HALF · STUB PLACEHOLDERS ============================ */

const STUB_SECTIONS = [
  {
    chapter: 4,
    icon: Building2,
    title: { en: "Which 147 schools participate", zh: "哪 147 所学校参与", ms: "147 sekolah mana yang menyertai", ta: "147 பள்ளிகள் பங்கேற்கின்றன" },
    body: {
      en: "4 full-DSA schools highlighted + the 143 partial-DSA secondary schools by zone and talent specialty.",
      zh: "4 所全 DSA 学校 + 143 所部分 DSA 中学按区域和才艺方向分组。",
      ms: "4 sekolah DSA penuh + 143 sekolah menengah DSA separa mengikut zon dan bakat.",
      ta: "4 முழு-DSA பள்ளிகள் + 143 பகுதி-DSA இடைநிலைப் பள்ளிகள் மண்டலம் மற்றும் திறமை வாரியாக.",
    },
  },
  {
    chapter: 5,
    icon: Clock,
    title: { en: "2026 application timeline (horizontal)", zh: "2026 申请时间线（横向）", ms: "Garis masa permohonan 2026", ta: "2026 விண்ணப்பக் கால அட்டவணை" },
    body: {
      en: "5-phase horizontal cards showing dates, what parents do, what schools do at each phase.",
      zh: "5 个横向卡片显示日期、家长做什么、学校做什么。",
      ms: "5 fasa kad mendatar menunjukkan tarikh, apa ibu bapa lakukan, apa sekolah lakukan.",
      ta: "5-கட்டம் கிடைமட்ட அட்டைகள் — தேதிகள், பெற்றோர் என்ன செய்கிறார்கள், பள்ளிகள் என்ன செய்கின்றன.",
    },
  },
  {
    chapter: 6,
    icon: MessageSquareText,
    title: { en: "Interview & trial — the 5 elements", zh: "面试 & trial 的 5 要素", ms: "Temu duga & percubaan — 5 elemen", ta: "நேர்காணல் & சோதனை — 5 உறுப்புகள்" },
    body: {
      en: "The 5-element self-introduction framework + a sample question from the 35-question prep bank.",
      zh: "5 要素自我介绍框架 + 35 题题库中的样题示范。",
      ms: "Rangka kerja pengenalan diri 5-elemen + soalan contoh dari bank 35 soalan.",
      ta: "5-உறுப்பு சுய அறிமுக கட்டமைப்பு + 35 கேள்வி பயிற்சி வங்கியிலிருந்து மாதிரி கேள்வி.",
    },
  },
  {
    chapter: 7,
    icon: CheckCircle2,
    title: { en: "The 4 possible outcomes", zh: "4 种可能结果", ms: "4 keputusan mungkin", ta: "4 சாத்திய முடிவுகள்" },
    body: {
      en: "Confirmed Offer · Waitlist · Counter-Offer (IP↔O-Level) · Unsuccessful — what each means and how to respond.",
      zh: "Confirmed Offer · Waitlist · Counter-Offer（IP↔O-Level）· 未录取 — 各自意味着什么、怎么应对。",
      ms: "Tawaran Sah · Senarai Menunggu · Tawaran Balas (IP↔O-Level) · Tidak Berjaya — apa setiap satu bermakna.",
      ta: "உறுதிசெய்யப்பட்ட · காத்திருப்பு · எதிர் சலுகை (IP↔O-Level) · தோல்வி — ஒவ்வொன்றின் அர்த்தம்.",
    },
  },
  {
    chapter: 8,
    icon: FileSearch,
    title: { en: "DSA × PSLE — how they interact", zh: "DSA × PSLE 互动", ms: "DSA × PSLE — bagaimana berinteraksi", ta: "DSA × PSLE — எவ்வாறு தொடர்பு கொள்கின்றன" },
    body: {
      en: "Side-by-side comparison: when PSLE matters, what AL ≤ 22 means, Counter-Offer mechanics.",
      zh: "对比表：什么时候 PSLE 重要、AL ≤ 22 意味着什么、Counter-Offer 机制。",
      ms: "Perbandingan: bila PSLE penting, apa AL ≤ 22 bermakna, mekanisme Tawaran Balas.",
      ta: "ஒப்பீடு: PSLE எப்போது முக்கியம், AL ≤ 22 என்றால் என்ன, எதிர் சலுகை இயக்கவியல்.",
    },
  },
  {
    chapter: 9,
    icon: Sparkles,
    title: { en: "FAQ · 12 questions parents actually ask", zh: "FAQ · 12 个家长真问的问题", ms: "FAQ · 12 soalan ibu bapa", ta: "FAQ · பெற்றோர் கேட்கும் 12 கேள்விகள்" },
    body: {
      en: "Is DSA worth it? What's the chance of getting in? What if my child fails DSA? Can I reject a Confirmed Offer?",
      zh: "DSA 值不值得？录取概率多少？孩子没录取怎么办？能拒绝 Confirmed Offer 吗？",
      ms: "Adakah DSA berbaloi? Apakah peluang masuk? Bagaimana jika anak gagal? Boleh tolak Tawaran Sah?",
      ta: "DSA மதிப்புள்ளதா? சேர்வதற்கான வாய்ப்பு என்ன? குழந்தை தோல்வியடைந்தால் என்ன?",
    },
  },
];

const STUB_BADGE: LocaleStr = {
  en: "Chapter coming in next deploy",
  zh: "章节下次部署上线",
  ms: "Bab dalam deploy seterusnya",
  ta: "அத்தியாயம் அடுத்த வெளியீட்டில்",
};

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
            <p className="text-[11px] font-semibold tracking-[0.18em] text-champagne-dark normal-case">
              {pick(S1_KICKER, locale)}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-intellectual sm:text-3xl" style={{ textTransform: "none" }}>
              {pick(S1_TITLE, locale)}
            </h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-intellectual-muted sm:text-base">
              {pick(S1_INTRO, locale)}
            </p>

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
            <p className="text-[11px] font-semibold tracking-[0.18em] text-champagne-dark normal-case">
              {pick(S2_KICKER, locale)}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-intellectual sm:text-3xl" style={{ textTransform: "none" }}>
              {pick(S2_TITLE, locale)}
            </h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-intellectual-muted sm:text-base">
              {pick(S2_INTRO, locale)}
            </p>

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
            <p className="text-[11px] font-semibold tracking-[0.18em] text-champagne-dark normal-case">
              {pick(S3_KICKER, locale)}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-intellectual sm:text-3xl" style={{ textTransform: "none" }}>
              {pick(S3_TITLE, locale)}
            </h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-intellectual-muted sm:text-base">
              {pick(S3_INTRO, locale)}
            </p>

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

        {/* ===== LOWER HALF · STUB ===== */}
        <section className="border-t border-intellectual/[0.06] bg-intellectual/[0.02] py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-champagne-dark normal-case">
              {locale === "zh"
                ? "下一波内容"
                : locale === "ms"
                  ? "Kandungan seterusnya"
                  : locale === "ta"
                    ? "அடுத்த உள்ளடக்கம்"
                    : "Coming next"}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-intellectual sm:text-3xl" style={{ textTransform: "none" }}>
              {locale === "zh"
                ? "Pillar 下半 · 6 个章节即将上线"
                : locale === "ms"
                  ? "Bahagian bawah Pillar · 6 bab akan datang"
                  : locale === "ta"
                    ? "பில்லர் கீழ் பகுதி · 6 அத்தியாயங்கள்"
                    : "Pillar lower half · 6 chapters dropping next"}
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {STUB_SECTIONS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <article key={i} className="rounded-2xl border border-dashed border-intellectual/20 bg-white/60 p-5 sm:p-6">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-intellectual/8 text-intellectual/70">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-[10.5px] font-bold tracking-wider text-intellectual/45 normal-case">
                        {locale === "zh" ? `第 ${s.chapter} 章` : locale === "ms" ? `Bab ${s.chapter}` : locale === "ta" ? `அத்தியாயம் ${s.chapter}` : `Chapter ${s.chapter}`}
                      </p>
                    </div>
                    <h3 className="mt-3 font-display text-[15px] font-bold text-intellectual sm:text-base" style={{ textTransform: "none" }}>
                      {pick(s.title, locale)}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-intellectual-muted/85 sm:text-[13.5px]">
                      {pick(s.body, locale)}
                    </p>
                    <p className="mt-3 inline-flex rounded-full bg-intellectual/8 px-2 py-0.5 text-[10px] font-semibold text-intellectual/55 normal-case">
                      {pick(STUB_BADGE, locale)}
                    </p>
                  </article>
                );
              })}
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
