"use client";

import Link from "next/link";
import {
  ArrowRight,
  Activity,
  Bird,
  Compass,
  Crosshair,
  Drum,
  Footprints,
  Music2,
  Shield,
  Sparkles,
  Target,
  Waves,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PillarBackLink } from "@/components/PillarBackLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

/* ============================ HERO ============================ */

const HERO_KICKER: LocaleStr = {
  en: "DSA-Sec 2027 planning · Less-crowded talent paths",
  zh: "DSA-Sec 2027 提前规划 · 冷门才艺路径",
  ms: "Perancangan DSA-Sec 2027 · Laluan bakat kurang sesak",
  ta: "DSA-Sec 2027 திட்டமிடல் · குறைந்த நெரிசல் கொண்ட பாதைகள்",
};

const HERO_TITLE: LocaleStr = {
  en: "Under-recruited DSA paths — possible routes when supply is thin at the school side.",
  zh: "招收 > 报名的 DSA 路径——学校供给薄的可能路线",
  ms: "Laluan DSA kurang dipohon — laluan yang mungkin apabila penawaran sekolah tipis.",
  ta: "குறைவாக விண்ணப்பிக்கப்படும் DSA பாதைகள் — பள்ளி வழங்கல் குறைவாக இருக்கும்போது சாத்தியமான வழிகள்.",
};

const HERO_SUB: LocaleStr = {
  en: "Most DSA conversation happens around the same five sports and three instruments. But MOE accepts DSA in many more talent areas where schools quietly recruit because few primary-school families try them. This page maps those paths — what they are, who runs them, and which families realistically have time to prepare. These are routes that have worked for some families. They are not invitations, and they do not bypass the academic gate.",
  zh: "DSA 讨论 90% 集中在那 5 项体育和 3 种乐器。但 MOE 接受的 DSA 才艺远不止——很多冷门方向学校年年招，因为小学家庭很少报。本页把这些路径列出来：是什么、谁在招、哪些家庭现实上来得及准备。这些是部分家庭走通过的路线 · 不是请柬 · 也绕不开学业门槛。",
  ms: "Kebanyakan perbincangan DSA tertumpu pada lima sukan dan tiga instrumen yang sama. Tetapi MOE menerima DSA dalam banyak bidang bakat lain di mana sekolah merekrut secara senyap. Ini adalah laluan yang berfungsi untuk sebahagian keluarga — bukan jemputan, dan tidak memintas akademik.",
  ta: "DSA விவாதம் பெரும்பாலும் ஐந்து விளையாட்டுகள் மற்றும் மூன்று இசைக்கருவிகளைச் சுற்றி நடைபெறுகிறது. ஆனால் MOE இன்னும் பல திறமைப் பகுதிகளில் DSA-ஐ ஏற்றுக்கொள்கிறது. இவை சில குடும்பங்களுக்கு வேலை செய்த பாதைகள் — அழைப்புகள் அல்ல.",
};

const HERO_BADGE: LocaleStr = {
  en: "Possible routes · Not guarantees · 2026 applications have closed; this page is for 2027 planning",
  zh: "可能的路线 · 不是保证 · 2026 申请已截止 · 本页面向 2027 规划",
  ms: "Laluan yang mungkin · Bukan jaminan · Permohonan 2026 telah ditutup; halaman ini untuk perancangan 2027",
  ta: "சாத்தியமான வழிகள் · உத்தரவாதங்கள் அல்ல · 2026 விண்ணப்பங்கள் முடிந்துவிட்டன; இந்த பக்கம் 2027 திட்டமிடலுக்கானது",
};

/* ============================ TIMING CALLOUT (P5 opportunity) ============================ */

const TIMING_TITLE: LocaleStr = {
  en: "If your child is currently P5 — this is your window",
  zh: "如果你的孩子现在 P5——这就是你的窗口",
  ms: "Jika anak anda kini P5 — ini tetingkap anda",
  ta: "உங்கள் குழந்தை தற்போது P5 என்றால் — இதுவே உங்கள் வாய்ப்பு",
};

const TIMING_BODY: LocaleStr = {
  en: "DSA-Sec 2026 applications closed on 2 June 2026. The next cycle (DSA-Sec 2027) opens around early May 2027 for current P5 students. That gives a P5 family roughly 11 months to build a credible niche-talent profile — the officially-cited preparation window for potential-based paths. P5 starting now is the realistic point of entry for the paths on this page. If your child is currently P6, the 2027 window has already closed for them; they will apply through PSLE direct posting or the S1 Posting Exercise.",
  zh: "DSA-Sec 2026 申请已于 2026 年 6 月 2 日截止。下一轮（DSA-Sec 2027）2027 年 5 月初开放 · 面向现在 P5 的学生。P5 家庭从现在开始大概有 11 个月构建可信的冷门才艺履历——这是潜力型路径官方公认的准备窗口。P5 起步是本页这些路径的现实切入点。如果孩子现在 P6 · 2027 窗口已对他们关闭 · 他们走 PSLE 直派或 S1 派位。",
  ms: "Permohonan DSA-Sec 2026 ditutup pada 2 Jun 2026. Kitaran seterusnya (DSA-Sec 2027) dibuka sekitar awal Mei 2027 untuk pelajar P5 semasa. Itu memberi keluarga P5 kira-kira 11 bulan untuk membina profil bakat niche yang boleh dipercayai.",
  ta: "DSA-Sec 2026 விண்ணப்பங்கள் 2 ஜூன் 2026-இல் முடிந்தன. அடுத்த சுற்று (DSA-Sec 2027) தற்போதைய P5 மாணவர்களுக்கு மே 2027 தொடக்கத்தில் திறக்கப்படும். P5 குடும்பத்திற்கு சுமார் 11 மாதங்கள் வழங்குகிறது.",
};

/* ============================ WHY THESE PATHS EXIST ============================ */

const S1_KICKER: LocaleStr = {
  en: "Chapter 1",
  zh: "第一章",
  ms: "Bab 1",
  ta: "அத்தியாயம் 1",
};

const S1_TITLE: LocaleStr = {
  en: "Why some DSA paths get fewer applicants",
  zh: "为什么有些 DSA 路径几乎没人报",
  ms: "Mengapa sesetengah laluan DSA mendapat sedikit pemohon",
  ta: "ஏன் சில DSA பாதைகளுக்கு குறைவான விண்ணப்பதாரர்கள் வருகிறார்கள்",
};

const S1_INTRO: LocaleStr = {
  en: "Under-recruited DSA talents share three structural patterns. Understanding the patterns helps families decide which paths are real opportunities versus which are mirages.",
  zh: "冷门 DSA 才艺有 3 个共同结构特征。看懂这 3 点能帮家庭判断哪些路径是真机会、哪些只是表面冷门。",
  ms: "Bakat DSA kurang dipohon berkongsi tiga corak struktur. Memahami corak ini membantu keluarga menentukan laluan mana adalah peluang sebenar.",
  ta: "குறைவாக விண்ணப்பிக்கப்படும் DSA திறமைகள் மூன்று கட்டமைப்பு வடிவங்களை பகிர்ந்து கொள்கின்றன.",
};

const S1_REASONS: ReadonlyArray<{
  title: LocaleStr;
  body: LocaleStr;
}> = [
  {
    title: {
      en: "1. Few primary schools teach it",
      zh: "1. 很少小学开这门 CCA",
      ms: "1. Sedikit sekolah rendah mengajarnya",
      ta: "1. சில தொடக்கப் பள்ளிகள் கற்பிக்கின்றன",
    },
    body: {
      en: "Lion dance, fencing, archery, sailing, oboe, bassoon — most primary schools don't carry these as standard CCAs. Demand at secondary level outstrips supply at primary level. Schools that run these CCAs need new recruits every year and will train from scratch if the candidate shows potential.",
      zh: "舞狮、击剑、射箭、帆船、双簧管、巴松——多数小学不开这些常规 CCA。中学有需要但小学供给不上。开这些 CCA 的中学每年都要招新，候选人有潜力就从零开始教。",
      ms: "Tarian singa, pedang, memanah, belayar, obo, bassoon — kebanyakan sekolah rendah tidak menawarkan ini sebagai CCA standard. Permintaan di sekolah menengah melebihi penawaran di sekolah rendah.",
      ta: "சிங்க நடனம், வாள் வீச்சு, வில்வித்தை, கப்பல் ஓட்டுதல், ஓபோ, பாசூன் — பெரும்பாலான தொடக்கப் பள்ளிகள் இவற்றை வழங்குவதில்லை. இடைநிலை பள்ளி தேவை தொடக்கப் பள்ளி வழங்கலை விட அதிகமாக உள்ளது.",
    },
  },
  {
    title: {
      en: "2. Cultural or class barriers limit who tries",
      zh: "2. 文化或社会阶层让某些项目报的人少",
      ms: "2. Halangan budaya atau kelas mengehadkan siapa yang cuba",
      ta: "2. கலாச்சார அல்லது வர்க்க தடைகள் முயற்சிப்பவர்களைக் கட்டுப்படுத்துகின்றன",
    },
    body: {
      en: "Female lion dance breaks an old gender pattern; only three Singapore schools recruit girls for it. Sailing requires expensive club-based training that filters out most families. Wushu, Chinese drama, and rare Chinese instruments cluster in SAP schools where families default to Higher Chinese rather than these niche extensions. Whatever the barrier — gender, cost, language — the result is the same: fewer applicants per offer.",
      zh: "女子舞狮打破老的性别框架——全岛只 3 所中学招女生。帆船需要昂贵的俱乐部训练，多数家庭门外止步。武术、华语戏剧、罕见华乐集中在 SAP 校，但这些校的家庭通常优先高华，少有人主动选这些 niche 衍生项。无论门槛是性别、成本还是语言，结果都一样：报名人数 < 招生名额。",
      ms: "Tarian singa wanita melanggar corak jantina lama; hanya tiga sekolah Singapura merekrut perempuan untuknya. Belayar memerlukan latihan kelab mahal yang menapis kebanyakan keluarga.",
      ta: "பெண்களின் சிங்க நடனம் பழைய பாலின வடிவத்தை உடைக்கிறது; சிங்கப்பூரில் மூன்று பள்ளிகள் மட்டுமே பெண்களை அதற்காக சேர்க்கிறார்கள். கப்பல் ஓட்டுதல் விலையுயர்ந்த கிளப் சார்ந்த பயிற்சி தேவைப்படுகிறது.",
    },
  },
  {
    title: {
      en: "3. Parents don't think of it as a DSA path",
      zh: "3. 家长根本没把它当成 DSA 选项",
      ms: "3. Ibu bapa tidak menganggapnya sebagai laluan DSA",
      ta: "3. பெற்றோர்கள் அதை DSA பாதையாக நினைக்கவில்லை",
    },
    body: {
      en: "Bowling has DSA at multiple schools. So does softball. So do specific track-and-field events (pole vault, shot put, discus). Most parents don't know these are accepted DSA talents because the public conversation is dominated by sports schools recruit visibly for (football, basketball, swimming). Awareness gap = supply gap.",
      zh: "保龄球在多所学校都有 DSA · 垒球也是 · Track 罕见项目（撑杆跳 / 铅球 / 铁饼）也是。多数家长不知道这些是被接受的 DSA 才艺，因为公共讨论被那些学校公开招的项目（足球 / 篮球 / 游泳）主导。认知缺口 = 供给缺口。",
      ms: "Boling mempunyai DSA di beberapa sekolah. Begitu juga softball. Begitu juga acara olahraga tertentu (lompat galah, lontar peluru, lempar cakera).",
      ta: "பௌலிங் பல பள்ளிகளில் DSA உள்ளது. சாஃப்ட்பால் இல்லும். குறிப்பிட்ட டிராக் நிகழ்வுகளும் (கம்பு பாய்தல், குண்டெறிதல், வட்டு எறிதல்) உள்ளன.",
    },
  },
];

/* ============================ THE 10 TALENTS ============================ */

const S2_KICKER: LocaleStr = {
  en: "Chapter 2",
  zh: "第二章",
  ms: "Bab 2",
  ta: "அத்தியாயம் 2",
};

const S2_TITLE: LocaleStr = {
  en: "Ten under-recruited DSA paths",
  zh: "十个供需失衡的 DSA 路径",
  ms: "Sepuluh laluan DSA kurang dipohon",
  ta: "பத்து குறைவாக விண்ணப்பிக்கப்படும் DSA பாதைகள்",
};

const S2_INTRO: LocaleStr = {
  en: "Ranked roughly by supply-vs-demand imbalance. The minimum window estimates assume a candidate is fit, coachable, and committed to weekly practice — not a guarantee.",
  zh: "按供需失衡度大致排序。最短窗口的估算前提：候选人身体素质 OK、可塑性强、能稳定每周训练——不是保证。",
  ms: "Disusun lebih kurang mengikut ketidakseimbangan penawaran-permintaan. Anggaran tetingkap minimum mengandaikan calon yang cergas, boleh dilatih, dan komited kepada latihan mingguan.",
  ta: "விநியோகம்-தேவை ஏற்றத்தாழ்வின் அடிப்படையில் தோராயமாக வரிசைப்படுத்தப்பட்டுள்ளது. குறைந்தபட்ச காலக்கெடு மதிப்பீடுகள் வேட்பாளர் தகுதியான, பயிற்சி பெற முடிந்த, மற்றும் வாராந்திர பயிற்சிக்கு உறுதிப்பாடு கொண்டிருக்கிறார் என்று கருதுகிறது.",
};

const S2_TALENTS: ReadonlyArray<{
  rank: number;
  icon: typeof Activity;
  name: LocaleStr;
  why: LocaleStr;
  schools: LocaleStr;
  window: LocaleStr;
}> = [
  {
    rank: 1,
    icon: Drum,
    name: {
      en: "Female lion dance",
      zh: "女子舞狮",
      ms: "Tarian singa wanita",
      ta: "பெண்களின் சிங்க நடனம்",
    },
    why: {
      en: "Only 3 Singapore secondary schools recruit girls. NYGH runs the only all-girls troupe. Total female lion dancers nationwide estimated in the low hundreds.",
      zh: "全岛仅 3 所中学招女生 · NYGH 全岛唯一全女队 · 全国女狮估约数百人。",
      ms: "Hanya 3 sekolah Singapura merekrut perempuan. NYGH menjalankan satu-satunya kumpulan perempuan sepenuhnya.",
      ta: "சிங்கப்பூரில் 3 பள்ளிகள் மட்டுமே பெண்களை சேர்க்கின்றன. NYGH மட்டுமே முழுவதும் பெண்கள் குழுவை நடத்துகிறது.",
    },
    schools: {
      en: "NYGH · Chung Cheng High Main · Yuan Ching Sec",
      zh: "NYGH · Chung Cheng High Main · Yuan Ching Sec",
      ms: "NYGH · Chung Cheng High Main · Yuan Ching Sec",
      ta: "NYGH · Chung Cheng High Main · Yuan Ching Sec",
    },
    window: {
      en: "6-12 months minimum · NYGH explicitly accepts no prior experience",
      zh: "最短 6-12 个月 · NYGH 明确接受零经验",
      ms: "Minimum 6-12 bulan · NYGH terima tanpa pengalaman",
      ta: "குறைந்தபட்சம் 6-12 மாதங்கள் · NYGH முன் அனுபவம் இல்லாமல் ஏற்கிறது",
    },
  },
  {
    rank: 2,
    icon: Music2,
    name: {
      en: "Rare Chinese instruments (sheng, suona, zhongruan, daruan, large dizi, large hulusi)",
      zh: "罕见华乐（笙 / 唢呐 / 中阮 / 大阮 / 低音笛 / 大葫芦丝）",
      ms: "Instrumen Cina jarang (sheng, suona, zhongruan, daruan, dizi besar)",
      ta: "அரிய சீன இசைக்கருவிகள் (sheng, suona, zhongruan, daruan, பெரிய dizi)",
    },
    why: {
      en: "School Chinese orchestras need these section voices every year. Most students study erhu, pipa, or guzheng — almost no one plays sheng or zhongruan. Coaches actively seek candidates on these instruments.",
      zh: "学校华乐每年都缺这些声部 · 多数孩子学二胡 / 琵琶 / 古筝 · 笙 / 中阮几乎没人学 · 教练主动找。",
      ms: "Orkestra Cina sekolah memerlukan suara seksyen ini setiap tahun. Kebanyakan pelajar belajar erhu, pipa, atau guzheng.",
      ta: "பள்ளி சீன இசைக்குழுக்கள் இந்த பகுதி குரல்களை ஒவ்வொரு ஆண்டும் தேவைப்படுகின்றன.",
    },
    schools: {
      en: "Dunman High · HCI · Nan Hua · NYGH · Catholic High · RVHS · Chung Cheng Main · Maris Stella · RGS · BPGHS",
      zh: "Dunman High · HCI · Nan Hua · NYGH · Catholic High · RVHS · Chung Cheng Main · Maris Stella · RGS · BPGHS",
      ms: "Dunman High · HCI · Nan Hua · NYGH · Catholic High · RVHS · Chung Cheng Main · Maris Stella · RGS · BPGHS",
      ta: "Dunman High · HCI · Nan Hua · NYGH · Catholic High · RVHS · Chung Cheng Main · Maris Stella · RGS · BPGHS",
    },
    window: {
      en: "9-12 months (if the child already plays another instrument) · 18+ months from zero",
      zh: "9-12 个月（已学其他乐器底子）· 从零开始 18 个月+",
      ms: "9-12 bulan jika sudah bermain instrumen lain · 18+ bulan dari sifar",
      ta: "9-12 மாதங்கள் (வேறு கருவி வாசிக்கிறார் என்றால்) · புதிதாக 18+ மாதங்கள்",
    },
  },
  {
    rank: 3,
    icon: Shield,
    name: {
      en: "Floorball goalkeeper",
      zh: "Floorball 守门员",
      ms: "Penjaga gol Floorball",
      ta: "Floorball கோல்கீப்பர்",
    },
    why: {
      en: "Goalkeepers are a separate trial track at most floorball schools. The position is physically and mentally demanding; few primary players choose it voluntarily. Outfielders converting to goalkeeping mid-Sec 1 are common.",
      zh: "守门员是独立 trial 通道 · 心理和体能门槛特殊 · 小学很少有孩子主动选守门 · 中学进队后转守门常见。",
      ms: "Penjaga gol adalah trek percubaan berasingan di kebanyakan sekolah floorball. Jawatan ini menuntut secara fizikal dan mental.",
      ta: "கோல்கீப்பர்கள் பெரும்பாலான floorball பள்ளிகளில் தனி சோதனை பாதையாகும். இந்த நிலை உடல் மற்றும் மனரீதியாக கடினமானது.",
    },
    schools: {
      en: "ACS(I) · SJI · RI · NYGH · MGS · HCI · ACS(BR) · Victoria · RGS · Cedar Girls",
      zh: "ACS(I) · SJI · RI · NYGH · MGS · HCI · ACS(BR) · Victoria · RGS · Cedar Girls",
      ms: "ACS(I) · SJI · RI · NYGH · MGS · HCI · ACS(BR) · Victoria · RGS · Cedar Girls",
      ta: "ACS(I) · SJI · RI · NYGH · MGS · HCI · ACS(BR) · Victoria · RGS · Cedar Girls",
    },
    window: {
      en: "6 months focused goalkeeping prep · existing field-player background helps",
      zh: "专项守门员训练 6 个月 · 已有 Floorball 场上经验加分",
      ms: "6 bulan persediaan penjaga gol terfokus · latar belakang pemain padang membantu",
      ta: "6 மாதங்கள் கவனம் செலுத்தப்பட்ட கோல்கீப்பிங் தயாரிப்பு",
    },
  },
  {
    rank: 4,
    icon: Crosshair,
    name: {
      en: "Archery",
      zh: "射箭",
      ms: "Memanah",
      ta: "வில்வித்தை",
    },
    why: {
      en: "Few primary-school archery programmes exist; secondary schools that offer archery recruit largely from external clubs or from scratch. Sports Council ranking documented competitive experience is the strongest signal but not required.",
      zh: "小学几乎不开射箭 CCA · 中学招生主要靠校外俱乐部或零起步训练 · 体总赛事排名有用但不是必要。",
      ms: "Beberapa program memanah sekolah rendah wujud; sekolah menengah yang menawarkan memanah merekrut sebahagian besarnya dari kelab luar atau dari awal.",
      ta: "சில தொடக்கப் பள்ளி வில்வித்தை திட்டங்கள் உள்ளன; வில்வித்தை வழங்கும் இடைநிலை பள்ளிகள் வெளி கிளப்களில் இருந்து சேர்க்கின்றனர்.",
    },
    schools: {
      en: "Singapore Sports School · RI · HCI · selected mid-tier schools per year (check published DSA briefs)",
      zh: "Singapore Sports School · RI · HCI · 部分中游学校（看各年公开 DSA brief）",
      ms: "Singapore Sports School · RI · HCI · sekolah tertentu setiap tahun",
      ta: "Singapore Sports School · RI · HCI · ஆண்டுக்கு தேர்ந்தெடுக்கப்பட்ட பள்ளிகள்",
    },
    window: {
      en: "9 months · technique-driven, body-strength matters less than focus",
      zh: "9 个月 · 技术导向 · 体力比注意力次要",
      ms: "9 bulan · teknik didorong, kekuatan badan kurang penting daripada fokus",
      ta: "9 மாதங்கள் · நுட்பம் சார்ந்தது, கவனம் முக்கியம்",
    },
  },
  {
    rank: 5,
    icon: Footprints,
    name: {
      en: "Rare track & field events (pole vault, shot put, discus, hammer, hurdles)",
      zh: "Track 罕见项目（撑杆跳 / 铅球 / 铁饼 / 链球 / 跨栏）",
      ms: "Acara olahraga jarang (lompat galah, lontar peluru, lempar cakera)",
      ta: "அரிய டிராக் நிகழ்வுகள் (கம்பு பாய்தல், குண்டெறிதல்)",
    },
    why: {
      en: "Track & field DSA accepts the whole event spectrum, but most P6 candidates audition in sprints or distance. Schools that field a full athletics team need throwers, jumpers, and hurdlers. NSG team scoring rewards multi-event athletes.",
      zh: "Track & Field DSA 接受全部项目，但多数 P6 候选人都报短跑 / 中长跑 · 学校要凑齐全项 · 投掷 / 跳跃 / 跨栏候选少 · NSG 团体计分多项一起算。",
      ms: "DSA olahraga menerima keseluruhan spektrum acara, tetapi kebanyakan calon P6 mengikuti pecut atau jarak.",
      ta: "டிராக் மற்றும் களம் DSA முழு நிகழ்வு வரம்பை ஏற்றுக்கொள்கிறது, ஆனால் பெரும்பாலான P6 வேட்பாளர்கள் ஸ்பிரிண்ட் அல்லது தூரத்தில் ஆடிஷன் செய்கிறார்கள்.",
    },
    schools: {
      en: "Singapore Sports School · RI · HCI · Victoria · SJI · ACS(I) · ACS(BR) · MGS · SCGS · Dunman High",
      zh: "Singapore Sports School · RI · HCI · Victoria · SJI · ACS(I) · ACS(BR) · MGS · SCGS · Dunman High",
      ms: "Singapore Sports School · RI · HCI · Victoria · SJI · ACS(I) · ACS(BR) · MGS · SCGS · Dunman High",
      ta: "Singapore Sports School · RI · HCI · Victoria · SJI · ACS(I) · ACS(BR) · MGS · SCGS · Dunman High",
    },
    window: {
      en: "6-9 months · pole vault and discus require coaching access; hurdles and shot put can build from school PE",
      zh: "6-9 个月 · 撑杆跳 / 铁饼需要教练资源 · 跨栏 / 铅球可从校 PE 起步",
      ms: "6-9 bulan · lompat galah dan lempar cakera memerlukan jurulatih",
      ta: "6-9 மாதங்கள் · சில நிகழ்வுகளுக்கு பயிற்சியாளர் தேவை",
    },
  },
  {
    rank: 6,
    icon: Waves,
    name: {
      en: "Dragon boat / canoeing",
      zh: "龙舟 / 皮划艇",
      ms: "Perahu naga / kayak",
      ta: "டிராகன் படகு / கனோ",
    },
    why: {
      en: "Seasonal outdoor sports; few primary schools carry the CCAs. Secondary schools near reservoirs and coastal areas run team programmes with consistent national-team feeder pathways. Body type (height + upper-body strength) is valued.",
      zh: "季节性户外运动 · 小学少有 · 中学水库或海边校开 · 国家队 feeder · 身高 + 上肢力量加分。",
      ms: "Sukan luar bermusim; sedikit sekolah rendah menawarkan CCA. Sekolah menengah berdekatan empangan dan pantai menjalankan program pasukan.",
      ta: "பருவகால வெளிப்புற விளையாட்டுகள்; சில தொடக்கப் பள்ளிகள் CCA-க்களைக் கொண்டுள்ளன.",
    },
    schools: {
      en: "Damai Sec · Sports School · select coastal & reservoir-area secondaries",
      zh: "Damai Sec · Sports School · 部分海边和水库附近中学",
      ms: "Damai Sec · Sports School · sekolah berdekatan pantai",
      ta: "Damai Sec · Sports School · கடற்கரை அருகே பள்ளிகள்",
    },
    window: {
      en: "6 months · physical fitness foundation transfers from swimming or rowing background",
      zh: "6 个月 · 已有游泳 / 划船底子最容易转",
      ms: "6 bulan · asas kecergasan dari renang membantu",
      ta: "6 மாதங்கள் · நீச்சல் பின்னணி உதவுகிறது",
    },
  },
  {
    rank: 7,
    icon: Sparkles,
    name: {
      en: "Fencing",
      zh: "击剑",
      ms: "Pedang",
      ta: "வாள் வீச்சு",
    },
    why: {
      en: "Expensive equipment-and-coaching dependency limits the pool. Singapore Fencing Association ranking matters, but mid-tier schools accept potential-based candidates. Three weapons (foil, épée, sabre) each have separate selection patterns.",
      zh: "装备 + 教练成本门槛高 · 群体小 · SFA 排名重要但中游学校接受潜力型 · 花剑 / 重剑 / 佩剑 3 项独立选拔。",
      ms: "Kebergantungan peralatan dan jurulatih mahal mengehadkan kumpulan. Kedudukan SFA penting tetapi sekolah pertengahan menerima calon berpotensi.",
      ta: "விலையுயர்ந்த உபகரண-மற்றும்-பயிற்சி சார்பு குழுவை வரம்புபடுத்துகிறது.",
    },
    schools: {
      en: "ACS(I) · RI · HCI · RGS · Methodist Girls' · selected schools per year",
      zh: "ACS(I) · RI · HCI · RGS · Methodist Girls' · 部分学校每年",
      ms: "ACS(I) · RI · HCI · RGS · Methodist Girls' · sekolah tertentu",
      ta: "ACS(I) · RI · HCI · RGS · Methodist Girls' · ஆண்டுக்கு பள்ளிகள்",
    },
    window: {
      en: "9-12 months · footwork and bladework take time; speed and reaction are coachable",
      zh: "9-12 个月 · 脚步 / 持剑要时间 · 速度 / 反应可练",
      ms: "9-12 bulan · pergerakan kaki dan pemegang pedang mengambil masa",
      ta: "9-12 மாதங்கள் · கால் நகர்வு நேரம் எடுக்கும்",
    },
  },
  {
    rank: 8,
    icon: Bird,
    name: {
      en: "Softball (girls primarily)",
      zh: "垒球（主要女子）",
      ms: "Softball (terutamanya perempuan)",
      ta: "சாஃப்ட்பால் (முக்கியமாக பெண்கள்)",
    },
    why: {
      en: "Distinct from baseball; girls' division dominates Singapore school softball. ACS(I), RGS, and other heritage schools recruit yearly but few P6 girls play. Athletic candidates from netball or basketball backgrounds convert well.",
      zh: "区别棒球 · 新加坡中学软球女队主导 · ACS(I) / RGS 等年年招但 P6 女生很少打 · 投球 / 篮球底子转项容易。",
      ms: "Berbeza dari besbol; bahagian perempuan menguasai softball sekolah Singapura.",
      ta: "பேஸ்பாலில் இருந்து வேறுபட்டது; சிங்கப்பூர் பள்ளி சாஃப்ட்பாலில் பெண்கள் பிரிவு ஆதிக்கம் செலுத்துகிறது.",
    },
    schools: {
      en: "ACS(I) · RGS · NYGH · MGS · selected heritage schools",
      zh: "ACS(I) · RGS · NYGH · MGS · 部分传统学校",
      ms: "ACS(I) · RGS · NYGH · MGS · sekolah warisan",
      ta: "ACS(I) · RGS · NYGH · MGS · பள்ளிகள்",
    },
    window: {
      en: "6-9 months · throw + catch + base running technique build fast",
      zh: "6-9 个月 · 传 + 接 + 跑垒技术起步快",
      ms: "6-9 bulan · teknik balingan, tangkapan, larian asas dibina cepat",
      ta: "6-9 மாதங்கள் · எறிதல், பிடித்தல் வேகமாக கட்டமைக்கப்படுகிறது",
    },
  },
  {
    rank: 9,
    icon: Target,
    name: {
      en: "Bowling (tenpin)",
      zh: "保龄球",
      ms: "Boling",
      ta: "பௌலிங்",
    },
    why: {
      en: "DSA-accepted at multiple schools; almost no public conversation positions it as a DSA path. Singapore Bowling Federation graded events are the reference. Indoor sport with steep learning curve early but ceiling caps at around 16-18 years old.",
      zh: "多所学校接 DSA · 公共讨论几乎没人提 · SBF 分级赛是参考 · 室内项目早期上手快但 16-18 岁触顶。",
      ms: "Diterima DSA di beberapa sekolah; hampir tiada perbincangan awam meletakkannya sebagai laluan DSA.",
      ta: "பல பள்ளிகளில் DSA ஏற்றுக்கொள்ளப்பட்டுள்ளது; கிட்டத்தட்ட எந்த பொது விவாதமும் இல்லை.",
    },
    schools: {
      en: "Anglican High · selected mixed and boys' secondaries (check published DSA briefs)",
      zh: "Anglican High · 部分混校与男校（看公开 DSA brief）",
      ms: "Anglican High · sekolah terpilih",
      ta: "Anglican High · தேர்ந்தெடுக்கப்பட்ட பள்ளிகள்",
    },
    window: {
      en: "6 months · technique-driven, less physical demand than most sports",
      zh: "6 个月 · 技术导向 · 体能门槛相对低",
      ms: "6 bulan · teknik didorong, tuntutan fizikal kurang",
      ta: "6 மாதங்கள் · நுட்பம் சார்ந்தது",
    },
  },
  {
    rank: 10,
    icon: Zap,
    name: {
      en: "Squash",
      zh: "壁球",
      ms: "Skuasy",
      ta: "ஸ்குவாஷ்",
    },
    why: {
      en: "SSP at 2 schools (ACS(I) and RGS); broader DSA at additional schools. Few primary-school squash players exist, but court access is harder than badminton. Technical similarity to badminton + tennis means converters from those sports can ramp up faster.",
      zh: "SSP 2 校（ACS(I) 与 RGS）· DSA 招生面更广 · 小学壁球少 · 场地比羽毛球难订 · 羽毛球 / 网球底子转项快。",
      ms: "SSP di 2 sekolah (ACS(I) dan RGS); DSA lebih luas di sekolah tambahan.",
      ta: "2 பள்ளிகளில் SSP (ACS(I) மற்றும் RGS); கூடுதல் பள்ளிகளில் DSA.",
    },
    schools: {
      en: "ACS(I) · RGS · selected schools per year",
      zh: "ACS(I) · RGS · 部分学校每年",
      ms: "ACS(I) · RGS · sekolah tertentu",
      ta: "ACS(I) · RGS · ஆண்டுக்கு பள்ளிகள்",
    },
    window: {
      en: "9 months · longer if no racket sport background",
      zh: "9 个月 · 无球拍底子要再加",
      ms: "9 bulan · lebih lama tanpa latar belakang sukan raket",
      ta: "9 மாதங்கள் · ராக்கெட் விளையாட்டு பின்னணி இல்லை என்றால் நீளமாகும்",
    },
  },
];

/* ============================ DEEP-DIVE 1 — LION DANCE ============================ */

const S3_KICKER: LocaleStr = {
  en: "Chapter 3 · Featured case",
  zh: "第三章 · 重点案例",
  ms: "Bab 3 · Kes pilihan",
  ta: "அத்தியாயம் 3 · சிறப்பு வழக்கு",
};

const S3_TITLE: LocaleStr = {
  en: "NYGH female lion dance — the most asked-about niche path",
  zh: "南洋女中舞狮——家长问得最多的冷门路径",
  ms: "Tarian singa wanita NYGH — laluan niche paling banyak ditanya",
  ta: "NYGH பெண்களின் சிங்க நடனம் — அதிகம் கேட்கப்பட்ட பாதை",
};

const S3_PARAS: ReadonlyArray<LocaleStr> = [
  {
    en: "Nanyang Girls' High School runs what is reportedly the only all-girls lion dance CCA at a Singapore secondary school. NYGH's 2026 DSA brief listed the talent area as \"Dragon & Lion Dance Troupe,\" with lion head (狮头) and lion tail (狮尾) treated as distinct selection profiles. Lion dance was retained in NYGH's 2026 DSA list while several other talent areas were dropped that cycle — a signal the school continues to actively recruit for this CCA.",
    zh: "南洋女子高中的舞狮队据公开资料是新加坡中学唯一的全女子舞狮 CCA。NYGH 2026 DSA brief 将该才艺列为「Dragon & Lion Dance Troupe」 · 狮头与狮尾按不同选拔模式处理。NYGH 2026 砍了部分其他才艺方向 · 舞狮仍在列 · 说明学校还在持续招生。",
    ms: "Nanyang Girls' High School menjalankan apa yang dilaporkan sebagai satu-satunya CCA tarian singa perempuan sepenuhnya di sekolah menengah Singapura. Brief DSA NYGH 2026 menyenaraikan bidang ini sebagai \"Dragon & Lion Dance Troupe.\"",
    ta: "Nanyang Girls' High School அறிக்கையின்படி சிங்கப்பூர் இடைநிலை பள்ளியில் முற்றிலும்-பெண்கள் சிங்க நடனக் CCA-ஐ நடத்தும் ஒரே பள்ளி.",
  },
  {
    en: "Public coaching and parent-forum descriptions of the audition typically describe physical readiness checks (deep horse stance, basic footwork, balance), trial coachability, and a short conversation about the candidate's interest in the talent. Parent reports suggest the trial accepts candidates without prior experience — though families should always check the school's published DSA brief in May 2027 for the authoritative 2027 requirements rather than rely on prior-year descriptions.",
    zh: "公开的教练资料和家长论坛对 trial 的描述通常包括：身体条件检查（马步深蹲、基础步法、平衡）、训练时的可塑性、以及关于为什么对舞狮有兴趣的简短交流。家长反馈显示 trial 接受无经验候选人——但 2027 年 5 月学校发布最新 DSA brief 后 · 以学校官方为准 · 不要只依赖往年描述。",
    ms: "Penerangan jurulatih awam dan forum ibu bapa biasanya menggambarkan pemeriksaan kesediaan fizikal, kebolehan dilatih dalam percubaan, dan perbualan ringkas tentang minat calon.",
    ta: "பொது பயிற்சியாளர் மற்றும் பெற்றோர் மன்ற விளக்கங்கள் பொதுவாக உடல் தயார்நிலை சோதனைகள், சோதனை பயிற்சி திறன், மற்றும் வேட்பாளரின் ஆர்வம் பற்றிய சுருக்கமான உரையாடலை விவரிக்கின்றன.",
  },
  {
    en: "Realistic preparation for a P5 family aiming at DSA-Sec 2027: weekly training at a Singapore lion dance club (NamYang Lion Dance, Wenyang, or similar troupes that accept recreational members), a daily home routine of horse-stance holds and basic footwork (15-20 minutes), and one filmed training session or community performance to reference in the DSA application portfolio. The honest constraint is academic: NYGH is an IP school, and potential-based DSA candidates still need a PSLE score within the range the school routinely admits. Lion dance can open a door; PSLE keeps the candidate in the room.",
    zh: "P5 家庭目标 DSA-Sec 2027 的现实准备：每周新加坡舞狮俱乐部训练（NamYang 舞狮、Wenyang · 或其他接收业余学员的舞狮团）· 每天 15-20 分钟家庭训练（马步 + 基础步法）· 至少录一次训练视频或参加一次社区演出 · 作为 DSA 申请材料的依据。诚实约束是学业：NYGH 是 IP 校 · 即便走潜力型 DSA · PSLE 仍要在学校历年常规录取分范围内。舞狮可能打开门 · PSLE 让候选人坐稳位置。",
    ms: "Persediaan realistik untuk keluarga P5 menyasarkan DSA-Sec 2027: latihan mingguan di kelab tarian singa Singapura, rutin rumah harian, dan satu sesi latihan yang difilemkan.",
    ta: "DSA-Sec 2027 இலக்காக கொண்ட P5 குடும்பத்திற்கு யதார்த்த தயாரிப்பு: சிங்கப்பூர் சிங்க நடனக் கிளப்பில் வாராந்திர பயிற்சி, தினசரி வீட்டு வழக்கம், ஒரு படமாக்கப்பட்ட பயிற்சி அமர்வு.",
  },
];

/* ============================ DEEP-DIVE 2 — RARE INSTRUMENTS ============================ */

const S4_KICKER: LocaleStr = {
  en: "Chapter 4 · Featured case",
  zh: "第四章 · 重点案例",
  ms: "Bab 4 · Kes pilihan",
  ta: "அத்தியாயம் 4 · சிறப்பு வழக்கு",
};

const S4_TITLE: LocaleStr = {
  en: "Rare Chinese instruments — the strategy SAP schools quietly reward",
  zh: "罕见华乐——SAP 校默默看重的策略",
  ms: "Instrumen Cina jarang — strategi yang sekolah SAP menghargai secara senyap",
  ta: "அரிய சீன இசைக்கருவிகள் — SAP பள்ளிகள் அமைதியாக மதிக்கும் உத்தி",
};

const S4_PARAS: ReadonlyArray<LocaleStr> = [
  {
    en: "School Chinese orchestras require specific section voices: erhu and pipa are common; sheng, suona, zhongruan, daruan, and bass dizi are perpetually short. Most P6 candidates entering Chinese Orchestra DSA come from erhu, pipa, or guzheng backgrounds. A candidate with credible Grade 5-6 ability on sheng or zhongruan often outranks a Grade 8 erhu candidate in actual recruitment — because section balance, not absolute skill, drives offers.",
    zh: "学校华乐每个声部都要：二胡、琵琶常见 · 笙、唢呐、中阮、大阮、低音笛常年缺。多数报华乐 DSA 的 P6 来自二胡 / 琵琶 / 古筝。罕见乐器 Grade 5-6 的候选人在实际招生中常常高于 Grade 8 二胡候选——因为决定 offer 的是声部平衡，不是绝对水平。",
    ms: "Orkestra Cina sekolah memerlukan suara seksyen tertentu: erhu dan pipa adalah biasa; sheng, suona, zhongruan, daruan adalah selalu kurang.",
    ta: "பள்ளி சீன இசைக்குழுக்கள் குறிப்பிட்ட பகுதி குரல்கள் தேவைப்படுகின்றன: erhu மற்றும் pipa பொதுவானவை; sheng, suona, zhongruan, daruan எப்போதும் குறைவாக உள்ளன.",
  },
  {
    en: "A P5 candidate with existing piano or violin training can transition to sheng or suona within 9-12 months because the rhythmic and reading foundations transfer. A child with no instrumental background starting from zero typically needs 18 months minimum for an audition-credible level. Singapore-based Chinese instrument teachers for these rare instruments cluster around Singapore Chinese Music Federation programmes, TENG Company, and a small number of private studios. Confirm teacher availability before committing — sheng teachers especially are scarce.",
    zh: "P5 候选人已有钢琴或小提琴底子 · 9-12 个月可以转到笙或唢呐（节奏和读谱底子可迁移）· 完全从零开始通常需要至少 18 个月达到 audition 可信度。新加坡这些罕见华乐老师主要集中在新加坡华乐总会项目、TENG Company、和少数私人教室 · 笙的老师特别稀缺 · 报名前先确认师资。",
    ms: "Calon P5 dengan latihan piano atau biola sedia ada boleh beralih ke sheng atau suona dalam 9-12 bulan kerana asas irama dan bacaan berpindah.",
    ta: "ஏற்கனவே பியானோ அல்லது வயலின் பயிற்சி கொண்ட P5 வேட்பாளர் 9-12 மாதங்களில் sheng அல்லது suona-வுக்கு மாறலாம்.",
  },
  {
    en: "The 10 SAP and Chinese-cultural schools running competitive orchestras (Dunman High, HCI, Nan Hua, NYGH, Catholic High, River Valley, Chung Cheng Main, Maris Stella, RGS, Bukit Panjang Government High) all face the same instrument-balance pressure. A candidate playing a rare instrument should name the instrument explicitly in the application — that signal alone can fast-track the file. See the full Chinese Orchestra DSA prep page for audition format details (two contrasting pieces, total under 5 minutes, plus sight-read).",
    zh: "10 所有竞争力华乐的 SAP / 华文文化重点校（Dunman High、HCI、Nan Hua、NYGH、Catholic High、River Valley、Chung Cheng Main、Maris Stella、RGS、BPGHS）面临同样的声部平衡压力。罕见乐器候选人在申请时要明确写出乐器名——这个信号本身就可能让 file 快速进入审议。完整 audition 格式（两首对比曲、总时长 5 分钟内、视奏）见 Chinese Orchestra DSA 备战页。",
    ms: "10 sekolah SAP dan budaya Cina yang menjalankan orkestra kompetitif menghadapi tekanan keseimbangan instrumen yang sama.",
    ta: "போட்டியான இசைக்குழுக்களை நடத்தும் 10 SAP மற்றும் சீன கலாச்சார பள்ளிகள் ஒரே கருவி-சமநிலை அழுத்தத்தை எதிர்கொள்கின்றன.",
  },
];

const S4_CTA_TEXT: LocaleStr = {
  en: "Open Chinese Orchestra DSA prep page",
  zh: "打开 Chinese Orchestra DSA 备战页",
  ms: "Buka halaman persediaan DSA Orkestra Cina",
  ta: "Chinese Orchestra DSA தயாரிப்பு பக்கம்",
};

/* ============================ COACH SECTION ============================ */

const COACH_KICKER: LocaleStr = {
  en: "Coaching matters most for niche paths",
  zh: "冷门路径最依赖好教练",
  ms: "Pengajaran paling penting untuk laluan niche",
  ta: "Niche பாதைகளுக்கு பயிற்சி மிகவும் முக்கியம்",
};

const COACH_TITLE: LocaleStr = {
  en: "Find a coach who has prepared niche-talent DSA candidates before",
  zh: "找一个有备过冷门才艺 DSA 候选人的教练",
  ms: "Cari jurulatih yang pernah menyediakan calon DSA niche",
  ta: "முன்னர் niche திறமை DSA வேட்பாளர்களை தயார் செய்த பயிற்சியாளரைத் தேடுங்கள்",
};

const COACH_BODY: LocaleStr = {
  en: "Lion dance, sheng, archery, fencing — these are talents where one good coach matters more than for football or piano, because the candidate is still building the foundation rather than refining an existing skill. A coach with prior DSA-audition experience knows what the panel listens for, what a credible 11-month trajectory looks like, and how to film one training video that reads well in the application portfolio. The smallest signal here — picking a coach who has prepared a DSA candidate in the same talent before — can change the outcome more than the candidate's natural ability.",
  zh: "舞狮、笙、射箭、击剑——这些项目里 · 一个对的教练比足球或钢琴重要得多 · 因为候选人是在打地基 · 不是在优化已有技能。有 DSA audition 经验的教练知道评审在听什么 · 知道 11 个月可信的轨迹长什么样 · 知道怎么录一段适合 DSA 申请材料的训练视频。这里最小但最关键的信号——选一个备过同项目 DSA 候选人的教练——比孩子的天赋影响更大。",
  ms: "Tarian singa, sheng, memanah, pedang — ini adalah bakat di mana seorang jurulatih yang baik lebih penting daripada untuk bola sepak atau piano. Jurulatih dengan pengalaman audisi DSA terdahulu tahu apa yang panel mendengar.",
  ta: "சிங்க நடனம், sheng, வில்வித்தை, வாள் வீச்சு — இவை ஒரு நல்ல பயிற்சியாளர் கால்பந்து அல்லது பியானோவை விட முக்கியமான திறமைகள்.",
};

const COACH_CTA_TEXT: LocaleStr = {
  en: "Browse the coach directory",
  zh: "浏览教练目录",
  ms: "Layari direktori jurulatih",
  ta: "பயிற்சியாளர் அடைவைப் பார்க்கவும்",
};

/* ============================ TIMELINE FRAMEWORK ============================ */

const S5_KICKER: LocaleStr = {
  en: "Chapter 5",
  zh: "第五章",
  ms: "Bab 5",
  ta: "அத்தியாயம் 5",
};

const S5_TITLE: LocaleStr = {
  en: "Realistic timelines — when to start by talent type",
  zh: "现实时间表——按才艺类型决定何时起步",
  ms: "Garis masa realistik — bila bermula mengikut jenis bakat",
  ta: "யதார்த்த காலக்கெடுக்கள் — திறமை வகை அடிப்படையில் எப்போது தொடங்குவது",
};

const S5_ROWS: ReadonlyArray<{
  start: LocaleStr;
  fits: LocaleStr;
  notes: LocaleStr;
}> = [
  {
    start: {
      en: "P4 (24+ months before DSA-Sec)",
      zh: "P4（DSA-Sec 前 24+ 个月）",
      ms: "P4 (24+ bulan sebelum DSA-Sec)",
      ta: "P4 (DSA-Sec முன் 24+ மாதங்கள்)",
    },
    fits: {
      en: "All paths · including credential-driven ones (squash, fencing, archery, table tennis) requiring sanctioned competition record",
      zh: "全部路径 · 包括需要积累赛事记录的（壁球 / 击剑 / 射箭 / 乒乓球）",
      ms: "Semua laluan termasuk yang dipacu kelayakan",
      ta: "அனைத்து பாதைகளும் தகுதி சார்ந்தவை உட்பட",
    },
    notes: {
      en: "Earliest credible window for any DSA path. Lets the family test fit before committing.",
      zh: "任何 DSA 路径最早的可信窗口 · 让家庭测试是否合适后再决定。",
      ms: "Tetingkap paling awal yang boleh dipercayai untuk mana-mana laluan DSA.",
      ta: "எந்த DSA பாதைக்கும் முதலில் நம்பகமான காலக்கெடு.",
    },
  },
  {
    start: {
      en: "P5 (12+ months before DSA-Sec)",
      zh: "P5（DSA-Sec 前 12+ 个月）",
      ms: "P5 (12+ bulan sebelum DSA-Sec)",
      ta: "P5 (DSA-Sec முன் 12+ மாதங்கள்)",
    },
    fits: {
      en: "Most potential-based paths · lion dance · rare Chinese instruments · floorball goalkeeper · rare track events · dragon boat · softball · bowling",
      zh: "多数潜力型路径 · 舞狮 · 罕见华乐 · Floorball 守门员 · 罕见 Track 项 · 龙舟 · 垒球 · 保龄球",
      ms: "Kebanyakan laluan berdasarkan potensi",
      ta: "பெரும்பாலான திறன் சார்ந்த பாதைகள்",
    },
    notes: {
      en: "Officially recommended starting point per multiple Singapore school admissions resources. Allows weekly training + 2-3 visible milestones (CCA performance, club grading, training video).",
      zh: "多份新加坡学校招生资源公认的官方推荐起点 · 容得下每周训练 + 2-3 个可见里程碑（CCA 演出 / 俱乐部考级 / 训练视频）。",
      ms: "Titik permulaan yang disyorkan secara rasmi.",
      ta: "அதிகாரப்பூர்வமாக பரிந்துரைக்கப்படும் தொடக்க புள்ளி.",
    },
  },
  {
    start: {
      en: "P6 (6 months before DSA-Sec)",
      zh: "P6（DSA-Sec 前 6 个月）",
      ms: "P6 (6 bulan sebelum DSA-Sec)",
      ta: "P6 (DSA-Sec முன் 6 மாதங்கள்)",
    },
    fits: {
      en: "Pure potential-based paths only · lion dance · floorball goalkeeper · rare track events · supporting role in dragon boat or softball",
      zh: "仅纯潜力型路径 · 舞狮 · Floorball 守门员 · 罕见 Track 项 · 龙舟或垒球的辅助位",
      ms: "Laluan berdasarkan potensi tulen sahaja",
      ta: "முற்றிலும் திறன் சார்ந்த பாதைகள் மட்டும்",
    },
    notes: {
      en: "Tight but workable for paths where schools explicitly accept zero-experience candidates. Academic load competes hard with daily training — most families cannot sustain this window. Honest assessment: only attempt if the child is genuinely interested, not just for DSA leverage.",
      zh: "对学校明确接受零经验的路径来说够紧但可行 · 学业压力与每日训练正面冲突 · 多数家庭撑不下来 · 诚实评估：只有孩子真的有兴趣才上 · 不要单纯为 DSA 杠杆而强推。",
      ms: "Ketat tetapi boleh dilaksanakan untuk laluan di mana sekolah jelas menerima calon tanpa pengalaman.",
      ta: "பள்ளிகள் வெளிப்படையாக ஒப்புக்கொள்ளும் பாதைகளுக்கு இறுக்கமானது.",
    },
  },
];

/* ============================ HONEST CAPS ============================ */

const S6_KICKER: LocaleStr = {
  en: "Chapter 6",
  zh: "第六章",
  ms: "Bab 6",
  ta: "அத்தியாயம் 6",
};

const S6_TITLE: LocaleStr = {
  en: "The caps that strategy can't beat",
  zh: "策略也突破不了的天花板",
  ms: "Had yang strategi tidak boleh kalahkan",
  ta: "உத்தி கடக்க முடியாத வரம்புகள்",
};

const S6_CAPS: ReadonlyArray<{
  title: LocaleStr;
  body: LocaleStr;
}> = [
  {
    title: {
      en: "Cap 1 · Each school admits only 2-5 candidates per niche CCA per year",
      zh: "约束 1 · 每校每个冷门 CCA 每年只招 2-5 人",
      ms: "Had 1 · Setiap sekolah menerima hanya 2-5 calon setiap CCA niche setahun",
      ta: "வரம்பு 1 · ஒவ்வொரு பள்ளியும் ஒரு ஆண்டிற்கு 2-5 வேட்பாளர்கள் மட்டுமே ஏற்கிறது",
    },
    body: {
      en: "Niche CCAs run small. NYGH's lion dance troupe is one team — they cannot accept 20 new Sec 1s in one year. The total niche-talent DSA admission across all Singapore schools in a typical year is in the low thousands, not tens of thousands. Strategy improves the odds at a specific school; it doesn't create unlimited slots.",
      zh: "冷门 CCA 体量本就小 · NYGH 舞狮就一支队 · 不可能一届招 20 个新中一 · 全岛冷门才艺 DSA 招生量典型年估约几千人级 · 不是几万 · 策略只能提高在某一所学校的中签率 · 不能凭空创造名额。",
      ms: "CCA niche bersaiz kecil. Kumpulan tarian singa NYGH adalah satu pasukan — mereka tidak boleh menerima 20 Tingkatan 1 baru dalam satu tahun.",
      ta: "Niche CCA-க்கள் சிறியதாக நடைபெறுகின்றன. NYGH-இன் சிங்க நடனக் குழு ஒரு அணி.",
    },
  },
  {
    title: {
      en: "Cap 2 · IP and top schools still require PSLE near their cut-off",
      zh: "约束 2 · IP 校与顶尖校仍要 PSLE 接近 cut-off",
      ms: "Had 2 · Sekolah IP dan teratas masih memerlukan PSLE hampir dengan had kelayakan",
      ta: "வரம்பு 2 · IP மற்றும் சிறந்த பள்ளிகள் PSLE அவற்றின் கட்-ஆஃப்-ஐ அண்டியதாக இருக்க வேண்டும்",
    },
    body: {
      en: "DSA reduces the academic bar but doesn't remove it. A child with a strong niche-talent DSA offer at NYGH or HCI still needs a PSLE score within the range the school routinely admits. A potential-based niche-talent path is not an escape from academics; it's an additional door alongside academics. Families betting only on the niche path and neglecting academics often discover the offer is conditional on PSLE performance.",
      zh: "DSA 降低学业门槛但不取消 · 拿到 NYGH 或 HCI 的冷门才艺 DSA offer 仍要 PSLE 在学校历年常规录取分范围内 · 潜力型冷门路径不是绕过学业 · 而是和学业并行的一道门 · 只押冷门路径忽略学业的家庭经常发现 offer 是有条件的（PSLE 达标）。",
      ms: "DSA mengurangkan halangan akademik tetapi tidak menghilangkannya.",
      ta: "DSA கல்வி தடையை குறைக்கிறது ஆனால் அதை அகற்றவில்லை.",
    },
  },
  {
    title: {
      en: "Cap 3 · Roughly 30-50% of niche-CCA offers go to potential-based candidates",
      zh: "约束 3 · 冷门 CCA 名额中潜力型候选人占约 30-50%",
      ms: "Had 3 · Lebih kurang 30-50% tawaran CCA niche pergi kepada calon berdasarkan potensi",
      ta: "வரம்பு 3 · Niche CCA ஆஃபர்களில் சுமார் 30-50% திறன் சார்ந்த வேட்பாளர்களுக்கு செல்கிறது",
    },
    body: {
      en: "The rest go to candidates with documented competition or grading records. This is not published policy; it's the consistent pattern across school admissions teams' reported intake compositions. A zero-experience P6 candidate competes for a subset, not the full pool, of available offers. Realistic expectation: do the work, trial well, and acknowledge that some offers were always going to candidates who started at P4.",
      zh: "剩下 50-70% 给有比赛或考级记录的候选人 · 这不是公开政策 · 是各校招生组反馈的常态结构 · P6 零经验候选人争的是部分名额 · 不是全池 · 现实预期：训练到位、trial 表现好、同时承认一部分 offer 永远会给 P4 就开始练的孩子。",
      ms: "Selebihnya pergi kepada calon dengan rekod pertandingan atau penggredan didokumentasi.",
      ta: "மீதமுள்ளவை ஆவணப்படுத்தப்பட்ட போட்டி அல்லது தர பதிவுகள் கொண்ட வேட்பாளர்களுக்கு செல்கின்றன.",
    },
  },
  {
    title: {
      en: "Cap 4 · Interest must be real — coaches see through strategic positioning",
      zh: "约束 4 · 兴趣必须是真的 · 教练看得出策略性包装",
      ms: "Had 4 · Minat mestilah benar — jurulatih nampak penempatan strategik",
      ta: "வரம்பு 4 · ஆர்வம் உண்மையாக இருக்க வேண்டும்",
    },
    body: {
      en: "The interview is designed partly to test whether the candidate genuinely cares about the talent or is auditioning into a strategic choice. A child who can't articulate what they like about lion dance — beyond \"my parents thought it would help me get into NYGH\" — fails the interview every time. Niche paths work because they're undersubscribed; they don't work as cynical positioning. If the child doesn't enjoy weekly practice within the first 2-3 months, change the strategy.",
      zh: "面试部分就是为了测候选人是否真心喜欢这门才艺 · 还是只为了战略 · 一个孩子说不出对舞狮真正喜欢什么 · 只说\"我爸妈说这样能进 NYGH\" · 面试每次都挂 · 冷门路径之所以有效是因为没人报 · 不是因为可以包装 · 如果孩子前 2-3 个月就不享受训练 · 换策略。",
      ms: "Temu duga direka sebahagiannya untuk menguji sama ada calon benar-benar peduli tentang bakat atau audisi menjadi pilihan strategik.",
      ta: "ஒரு குழந்தை சிங்க நடனத்தைப் பற்றி உண்மையில் என்ன விரும்புகிறார் என்பதை வெளிப்படுத்த முடியாவிட்டால், நேர்காணலில் தோல்வியடைகிறார்.",
    },
  },
  {
    title: {
      en: "Cap 5 · These are routes, not invitations",
      zh: "约束 5 · 这些是路线 · 不是请柬",
      ms: "Had 5 · Ini adalah laluan, bukan jemputan",
      ta: "வரம்பு 5 · இவை வழிகள், அழைப்புகள் அல்ல",
    },
    body: {
      en: "The paths on this page have worked for some families. They have not worked for many other families who started niche training and never received a DSA offer. We don't have public Singapore data on niche-talent DSA success rates because schools don't publish offer-vs-applicant numbers for individual talent areas. Treat this page as a map of routes that exist — not as a sequence of steps that leads to a guaranteed outcome. If your family commits to one of these paths, do it because the child genuinely enjoys the talent, not because the page implies the odds are favourable.",
      zh: "本页这些路径对部分家庭走通过 · 也有很多家庭练了冷门项目最终没收到 DSA offer · 这部分公共数据新加坡没有 · 学校不公开各才艺的报录比 · 把本页当作存在的路线地图 · 不要把它当成保证出结果的步骤清单。如果你的家庭走上其中一条 · 是因为孩子真的喜欢 · 不是因为页面看起来概率不错。",
      ms: "Laluan pada halaman ini telah berfungsi untuk sebahagian keluarga. Ia tidak berfungsi untuk banyak keluarga lain yang memulakan latihan niche dan tidak pernah menerima tawaran DSA.",
      ta: "இந்த பக்கத்தில் உள்ள பாதைகள் சில குடும்பங்களுக்கு வேலை செய்துள்ளன. ஆனால் niche பயிற்சியைத் தொடங்கி DSA ஆஃபர் பெறாத பல குடும்பங்களுக்கு இது வேலை செய்யவில்லை.",
    },
  },
];

/* ============================ BOTTOM CTA ============================ */

const BOTTOM_TITLE: LocaleStr = {
  en: "Use this with the talent-specific prep pages",
  zh: "搭配各才艺备战页一起用",
  ms: "Gunakan ini dengan halaman persediaan khusus bakat",
  ta: "திறமை சார்ந்த தயாரிப்பு பக்கங்களுடன் இதைப் பயன்படுத்துங்கள்",
};

const BOTTOM_BODY: LocaleStr = {
  en: "This page maps where opportunities exist. The talent-specific prep pages tell you what each trial assesses, sample interview questions, and the participating schools. Start with the talent index to find your path.",
  zh: "本页告诉你机会在哪。各才艺备战页讲每个 trial 评什么、面试样题、招生学校。从才艺索引页开始找你的路径。",
  ms: "Halaman ini memetakan di mana peluang wujud. Halaman persediaan khusus bakat memberitahu anda apa yang dinilai setiap percubaan.",
  ta: "இந்த பக்கம் வாய்ப்புகள் எங்கே உள்ளன என்பதை வரைபடமாக்குகிறது.",
};

const BOTTOM_CTA: LocaleStr = {
  en: "Open the talent index",
  zh: "打开才艺索引",
  ms: "Buka indeks bakat",
  ta: "திறமை அட்டவணையைத் திற",
};

/* ============================ COMPONENT ============================ */

export function UnderRecruitedPathsPageBody() {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen bg-surface-warm">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 pt-6 pb-16 sm:px-6 sm:pt-8 sm:pb-20">
        <Breadcrumb
          items={[
            {
              label: pick(
                { en: "Home", zh: "首页", ms: "Laman utama", ta: "முகப்பு" },
                locale,
              ),
              href: "/",
            },
            {
              label: pick(
                { en: "Interview & Trial", zh: "面试与试训", ms: "Temu Duga & Percubaan", ta: "நேர்காணல்" },
                locale,
              ),
              href: "/dsa-interview",
            },
            {
              label: pick(
                { en: "Less-crowded paths", zh: "冷门路径", ms: "Laluan kurang sesak", ta: "குறைந்த நெரிசல்" },
                locale,
              ),
            },
          ]}
        />

        {/* ── HERO ── */}
        <section className="mt-6 mb-12">
          <span className="inline-block rounded-full border border-champagne/40 bg-champagne-subtle px-3 py-1 text-[11px] font-bold tracking-[0.10em] text-champagne-dark">
            {pick(HERO_KICKER, locale)}
          </span>
          <h1
            style={{ textTransform: "none" }}
            className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-intellectual sm:text-4xl"
          >
            {pick(HERO_TITLE, locale)}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
            {pick(HERO_SUB, locale)}
          </p>
          <p className="mt-4 text-[11px] text-slate-400">{pick(HERO_BADGE, locale)}</p>
        </section>

        {/* ── TIMING CALLOUT (P5 opportunity) ── */}
        <section className="mt-8 mb-12 rounded-2xl border-l-4 border-champagne bg-white p-5 shadow-soft sm:p-6">
          <h2
            style={{ textTransform: "none" }}
            className="font-display text-[17px] font-bold leading-snug text-intellectual sm:text-lg"
          >
            {pick(TIMING_TITLE, locale)}
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-700">{pick(TIMING_BODY, locale)}</p>
          <Link
            href="/timeline"
            className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-intellectual underline decoration-champagne underline-offset-4 hover:text-intellectual-dark"
          >
            {locale === "zh"
              ? "查看完整 DSA-Sec 2026 时间线"
              : locale === "ms"
              ? "Lihat garis masa penuh DSA-Sec 2026"
              : locale === "ta"
              ? "முழுமையான DSA-Sec 2026 கால அட்டவணையைப் பார்க்கவும்"
              : "See the full DSA-Sec 2026 timeline"}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </section>

        {/* ── SECTION 1: Why ── */}
        <section className="mt-10 mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
            {pick(S1_KICKER, locale)}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
          >
            {pick(S1_TITLE, locale)}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{pick(S1_INTRO, locale)}</p>
          <div className="mt-6 space-y-4">
            {S1_REASONS.map((r, i) => (
              <div key={i} className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-soft">
                <h3
                  style={{ textTransform: "none" }}
                  className="font-display text-[17px] font-bold text-intellectual"
                >
                  {pick(r.title, locale)}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{pick(r.body, locale)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: 10 talents ── */}
        <section className="mt-12 mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
            {pick(S2_KICKER, locale)}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
          >
            {pick(S2_TITLE, locale)}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{pick(S2_INTRO, locale)}</p>
          <div className="mt-6 space-y-3">
            {S2_TALENTS.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.rank}
                  className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-champagne-subtle">
                      <Icon className="h-5 w-5 text-champagne-dark" aria-hidden />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold tracking-[0.10em] text-champagne-dark normal-case">
                        #{t.rank}
                      </p>
                      <h3
                        style={{ textTransform: "none" }}
                        className="mt-1 font-display text-[16px] font-bold leading-snug text-intellectual"
                      >
                        {pick(t.name, locale)}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{pick(t.why, locale)}</p>
                      <p className="mt-2 text-[12px] leading-relaxed text-slate-500">
                        <span className="font-semibold text-intellectual">
                          {locale === "zh"
                            ? "代表学校"
                            : locale === "ms"
                            ? "Sekolah contoh"
                            : locale === "ta"
                            ? "எடுத்துக்காட்டு பள்ளிகள்"
                            : "Sample schools"}
                          :
                        </span>{" "}
                        {pick(t.schools, locale)}
                      </p>
                      <p className="mt-1 text-[12px] leading-relaxed text-slate-500">
                        <span className="font-semibold text-intellectual">
                          {locale === "zh"
                            ? "起步窗口"
                            : locale === "ms"
                            ? "Tetingkap permulaan"
                            : locale === "ta"
                            ? "தொடக்க காலக்கெடு"
                            : "Start window"}
                          :
                        </span>{" "}
                        {pick(t.window, locale)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION 3: Lion Dance deep-dive ── */}
        <section className="mt-12 mb-12 rounded-2xl border border-champagne/40 bg-white p-6 shadow-card sm:p-8">
          <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
            {pick(S3_KICKER, locale)}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
          >
            {pick(S3_TITLE, locale)}
          </h2>
          <div className="mt-5 space-y-4">
            {S3_PARAS.map((p, i) => (
              <p key={i} className="text-[14.5px] leading-relaxed text-slate-700">
                {pick(p, locale)}
              </p>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: Rare Chinese Instruments deep-dive ── */}
        <section className="mt-12 mb-12 rounded-2xl border border-champagne/40 bg-white p-6 shadow-card sm:p-8">
          <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
            {pick(S4_KICKER, locale)}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
          >
            {pick(S4_TITLE, locale)}
          </h2>
          <div className="mt-5 space-y-4">
            {S4_PARAS.map((p, i) => (
              <p key={i} className="text-[14.5px] leading-relaxed text-slate-700">
                {pick(p, locale)}
              </p>
            ))}
          </div>
          <Link
            href="/dsa-interview/chinese-orchestra"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-intellectual px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-intellectual-dark"
          >
            {pick(S4_CTA_TEXT, locale)}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </section>

        {/* ── COACH SECTION ── */}
        <section className="mt-12 mb-12 rounded-2xl bg-intellectual p-6 text-white shadow-card sm:p-8">
          <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-light normal-case">
            {pick(COACH_KICKER, locale)}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl"
          >
            {pick(COACH_TITLE, locale)}
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-white/85">{pick(COACH_BODY, locale)}</p>
          <Link
            href="/dsa-coaches"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-champagne px-4 py-2.5 text-[13px] font-semibold text-intellectual-dark transition hover:bg-champagne-light"
          >
            {pick(COACH_CTA_TEXT, locale)}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </section>

        {/* ── SECTION 5: Timeline framework ── */}
        <section className="mt-12 mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
            {pick(S5_KICKER, locale)}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
          >
            {pick(S5_TITLE, locale)}
          </h2>
          <div className="mt-6 space-y-3">
            {S5_ROWS.map((row, i) => (
              <div key={i} className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-soft">
                <h3
                  style={{ textTransform: "none" }}
                  className="font-display text-[15px] font-bold text-intellectual"
                >
                  {pick(row.start, locale)}
                </h3>
                <p className="mt-2 text-[13.5px] text-slate-600">
                  <span className="font-semibold text-intellectual">
                    {locale === "zh"
                      ? "适用路径"
                      : locale === "ms"
                      ? "Laluan sesuai"
                      : locale === "ta"
                      ? "பொருந்தும் பாதைகள்"
                      : "Fits"}
                    :
                  </span>{" "}
                  {pick(row.fits, locale)}
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{pick(row.notes, locale)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: Honest caps ── */}
        <section className="mt-12 mb-12 rounded-2xl bg-intellectual p-6 text-white shadow-card sm:p-8">
          <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-light normal-case">
            {pick(S6_KICKER, locale)}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl"
          >
            {pick(S6_TITLE, locale)}
          </h2>
          <div className="mt-6 space-y-5">
            {S6_CAPS.map((c, i) => (
              <div key={i}>
                <h3
                  style={{ textTransform: "none" }}
                  className="font-display text-[16px] font-bold text-champagne-light"
                >
                  {pick(c.title, locale)}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/85">{pick(c.body, locale)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="mt-12 mb-12 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card sm:p-8">
          <h2
            style={{ textTransform: "none" }}
            className="font-display text-xl font-extrabold tracking-tight text-intellectual sm:text-2xl"
          >
            {pick(BOTTOM_TITLE, locale)}
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{pick(BOTTOM_BODY, locale)}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/dsa-interview/talents"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-intellectual px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-intellectual-dark"
            >
              <Compass className="h-4 w-4" aria-hidden />
              {pick(BOTTOM_CTA, locale)}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/dsa-coaches"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-champagne/60 bg-champagne-subtle/40 px-4 py-2.5 text-[13px] font-semibold text-intellectual transition hover:bg-champagne-subtle hover:border-champagne"
            >
              {pick(COACH_CTA_TEXT, locale)}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>

        <PillarBackLink />
      </main>
      <SiteFooter />
    </div>
  );
}
