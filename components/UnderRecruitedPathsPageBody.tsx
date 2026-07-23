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
import { RelatedCardsRow } from "@/components/RelatedCardsRow";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

const REL_KICKER: LocaleStr = {
  en: "Related reference",
  zh: "相关参考",
  ms: "Rujukan berkaitan",
  ta: "தொடர்புடைய குறிப்பு",
};
const REL_HEADING: LocaleStr = {
  en: "Find the right under-recruited path",
  zh: "找到适合的冷门路径",
  ms: "Cari laluan kurang diiktiraf yang sesuai",
  ta: "சரியான குறைவாக தேர்வுசெய்யப்படும் பாதையைக் கண்டறியுங்கள்",
};
const REL_TAL_T: LocaleStr = { en: "All talent paths", zh: "全部才艺方向", ms: "Semua laluan bakat", ta: "அனைத்து திறமைப் பாதைகள்" };
const REL_TAL_B: LocaleStr = {
  en: "Browse every DSA talent area with its own prep page and school list.",
  zh: "浏览每一个 DSA 才艺方向，各有独立备战页与学校簇。",
  ms: "Lihat setiap bidang bakat DSA dengan halaman persediaan sendiri.",
  ta: "ஒவ்வொரு DSA திறமைத் துறையையும் அதன் தயாரிப்புப் பக்கத்துடன் பார்க்கவும்.",
};
const REL_FIND_T: LocaleStr = { en: "DSA Finder", zh: "DSA Finder", ms: "DSA Finder", ta: "DSA Finder" };
const REL_FIND_B: LocaleStr = {
  en: "See which schools actually recruit for your child's talent — including the niche ones.",
  zh: "看哪些学校真的收孩子这个才艺——包括冷门方向。",
  ms: "Lihat sekolah mana benar-benar mengambil bakat anak anda — termasuk yang khusus.",
  ta: "உங்கள் குழந்தையின் திறமையை எந்தப் பள்ளிகள் உண்மையில் சேர்க்கின்றன என்பதைப் பார்க்கவும்.",
};
const REL_COACH_T: LocaleStr = { en: "Find a coach", zh: "找教练", ms: "Cari jurulatih", ta: "பயிற்சியாளர் தேடு" };
const REL_COACH_B: LocaleStr = {
  en: "Specialist coaching can build the record a niche talent needs to be competitive.",
  zh: "专业教练能帮冷门才艺补上有竞争力所需的记录。",
  ms: "Kejurulatihan pakar boleh membina rekod yang diperlukan bakat khusus.",
  ta: "சிறப்புப் பயிற்சி ஒரு குறிப்பிட்ட திறமைக்குத் தேவையான பதிவை உருவாக்க உதவும்.",
};

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

/* ============================ LOCK-IN WARNING ============================ */

const LOCKIN_KICKER: LocaleStr = {
  en: "Read this before you commit",
  zh: "下决定前先读这条",
  ms: "Baca ini sebelum anda komited",
  ta: "உறுதிசெய்வதற்கு முன் இதைப் படியுங்கள்",
};

const LOCKIN_TITLE: LocaleStr = {
  en: "DSA students cannot change CCA — your child is locked in for 4 to 6 years",
  zh: "DSA 学生不能换 CCA · 孩子被锁定 4 到 6 年",
  ms: "Pelajar DSA tidak boleh tukar CCA — anak anda terkunci untuk 4 hingga 6 tahun",
  ta: "DSA மாணவர்கள் CCA-ஐ மாற்ற முடியாது — உங்கள் குழந்தை 4 முதல் 6 ஆண்டுகள் வரை பூட்டப்படுகிறார்",
};

const LOCKIN_BODY: LocaleStr = {
  en: "MOE and individual school DSA briefs require DSA-admitted students to honour their commitment and continue the talent CCA they were selected for — typically Years 1 to 4 in the O-Level stream, Years 1 to 6 in the IP stream. NYGH and similar schools have published this explicitly. A DSA student who abandons the talent CCA without valid reason can be required by MOE to transfer schools. The talent area chosen at P5 effectively becomes a 4-to-6-year decision for your child.",
  zh: "MOE 与各校 DSA brief 都明确要求：DSA 录取学生必须坚持原 talent CCA——O-Level 通常 Year 1-4 · IP 通常 Year 1-6。NYGH 等校已公开说明此政策。DSA 学生无正当理由放弃 talent CCA · MOE 可强制转校。P5 时选的 talent 实际上是给孩子定了 4-6 年的承诺。",
  ms: "MOE dan brief DSA sekolah individu mensyaratkan pelajar DSA menghormati komitmen mereka dan meneruskan CCA bakat yang mereka dipilih — biasanya Tahun 1 hingga 4 dalam aliran O-Level, Tahun 1 hingga 6 dalam aliran IP. NYGH dan sekolah serupa telah menyatakan ini secara jelas. Pelajar DSA yang meninggalkan CCA bakat tanpa sebab yang sah boleh diarahkan oleh MOE untuk bertukar sekolah. Bidang bakat yang dipilih pada P5 sebenarnya menjadi keputusan 4 hingga 6 tahun untuk anak anda.",
  ta: "MOE மற்றும் தனிப்பட்ட பள்ளி DSA விளக்கங்கள், DSA-சேர்க்கப்பட்ட மாணவர்கள் தங்கள் உறுதிமொழியை மதித்து, தாங்கள் தேர்ந்தெடுக்கப்பட்ட திறமை CCA-ஐத் தொடர வேண்டும் எனக் கோருகின்றன — பொதுவாக O-Level நீரோட்டத்தில் ஆண்டு 1 முதல் 4 வரை, IP நீரோட்டத்தில் ஆண்டு 1 முதல் 6 வரை. NYGH போன்ற பள்ளிகள் இதை வெளிப்படையாக வெளியிட்டுள்ளன. சரியான காரணமின்றி திறமை CCA-ஐக் கைவிடும் DSA மாணவரை பள்ளியை மாற்றுமாறு MOE கோரலாம். P5-இல் தேர்ந்தெடுக்கும் திறமைப் பகுதி உண்மையில் உங்கள் குழந்தைக்கு 4 முதல் 6 ஆண்டு முடிவாகிறது.",
};

const LOCKIN_IMPLICATION: LocaleStr = {
  en: "What this means for choosing a niche path: don't pick the talent that gets your child into a good school. Pick the talent your child genuinely wants to spend 4-6 years on — and if a good school happens to recruit for it, that's the alignment. A child forced into lion dance or sheng because the parents calculated it as the easier DSA route will spend secondary school resenting the practice they cannot quit. The strongest predictor of a successful DSA journey is not the niche-supply gap; it's whether the child still wants to practise the talent in Year 3 when the schoolwork gets harder.",
  zh: "这条规则对选冷门路径的真正含义：不要选\"能让孩子进好中学的 talent\"· 选\"孩子愿意花 4-6 年做的 talent\"——如果刚好一所好学校招这个 · 那是匹配 · 不是计算。家长把舞狮或笙算作\"DSA 较易路径\"硬推孩子上 · 孩子整个中学都会怨这门退不掉的训练。DSA 走得稳的最强预测变量不是冷门项目的供给差 · 是孩子在中三学业压力变大时是否还想训练。",
  ms: "Apa yang ini bermakna untuk memilih laluan niche: jangan pilih bakat yang membawa anak anda ke sekolah yang baik. Pilih bakat yang anak anda benar-benar mahu habiskan 4-6 tahun — dan jika sekolah yang baik kebetulan mengambilnya, itulah keselarasannya. Anak yang dipaksa ke tarian singa atau sheng kerana ibu bapa mengira ia laluan DSA yang lebih mudah akan menghabiskan sekolah menengah membenci latihan yang tidak boleh mereka hentikan. Peramal terkuat perjalanan DSA yang berjaya bukan jurang bekalan niche; ia sama ada anak masih mahu berlatih bakat itu pada Tahun 3 apabila kerja sekolah menjadi lebih sukar.",
  ta: "Niche பாதையைத் தேர்ந்தெடுப்பதற்கு இதன் அர்த்தம்: உங்கள் குழந்தையை நல்ல பள்ளியில் சேர்க்கும் திறமையைத் தேர்ந்தெடுக்காதீர்கள். உங்கள் குழந்தை 4-6 ஆண்டுகள் செலவிட உண்மையிலேயே விரும்பும் திறமையைத் தேர்ந்தெடுங்கள் — நல்ல பள்ளி ஒன்று அதற்குச் சேர்த்தால், அதுவே பொருத்தம். எளிதான DSA வழி எனப் பெற்றோர் கணக்கிட்டதால் சிங்க நடனம் அல்லது sheng-க்குள் தள்ளப்படும் குழந்தை, நிறுத்த முடியாத அந்தப் பயிற்சியை வெறுத்தபடியே இடைநிலைப் பள்ளி முழுவதையும் கழிக்கும். வெற்றிகரமான DSA பயணத்தின் வலுவான முன்னறிகுறி niche-வழங்கல் இடைவெளி அல்ல; ஆண்டு 3-இல் பள்ளிப்பணி கடினமாகும்போதும் குழந்தை அந்தத் திறமையைப் பயிற்சி செய்ய விரும்புகிறதா என்பதே.",
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
  ms: "Permohonan DSA-Sec 2026 ditutup pada 2 Jun 2026. Kitaran seterusnya (DSA-Sec 2027) dibuka sekitar awal Mei 2027 untuk pelajar P5 semasa. Itu memberi keluarga P5 kira-kira 11 bulan untuk membina profil bakat niche yang boleh dipercayai — tetingkap persediaan yang lazim disebut untuk laluan berasaskan potensi. P5 yang bermula sekarang ialah titik masuk realistik untuk laluan di halaman ini. Jika anak anda kini P6, tetingkap 2027 sudah pun tertutup bagi mereka; mereka akan memohon melalui penempatan terus PSLE atau Latihan S1 Posting.",
  ta: "DSA-Sec 2026 விண்ணப்பங்கள் 2 ஜூன் 2026-இல் முடிந்தன. அடுத்த சுற்று (DSA-Sec 2027) தற்போதைய P5 மாணவர்களுக்கு மே 2027 தொடக்கத்தில் திறக்கப்படும். அது P5 குடும்பத்திற்கு நம்பகமான niche-திறமை சுயவிவரத்தை உருவாக்க சுமார் 11 மாதங்கள் வழங்குகிறது — திறன் அடிப்படையிலான பாதைகளுக்கு வழக்கமாகக் குறிப்பிடப்படும் தயாரிப்புச் சாளரம். இப்போது தொடங்கும் P5 தான் இந்தப் பக்கத்தின் பாதைகளுக்கு நடைமுறை நுழைவுப் புள்ளி. உங்கள் குழந்தை தற்போது P6 என்றால், 2027 சாளரம் அவர்களுக்கு ஏற்கனவே மூடிவிட்டது; அவர்கள் PSLE நேரடி இடப்பெயர்வு அல்லது S1 Posting பயிற்சி வழியாக விண்ணப்பிப்பார்கள்.",
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
      ms: "Boling mempunyai DSA di beberapa sekolah. Begitu juga softball. Begitu juga acara olahraga tertentu (lompat galah, lontar peluru, lempar cakera). Kebanyakan ibu bapa tidak tahu ini bakat DSA yang diterima kerana perbualan umum dikuasai sukan yang sekolah ambil secara ketara (bola sepak, bola keranjang, renang). Jurang kesedaran = jurang bekalan.",
      ta: "பௌலிங்கிற்குப் பல பள்ளிகளில் DSA உண்டு. சாஃப்ட்பாலுக்கும் உண்டு. குறிப்பிட்ட டிராக் நிகழ்வுகளுக்கும் (கம்பு பாய்தல், குண்டெறிதல், வட்டு எறிதல்) உண்டு. இவை ஏற்கப்படும் DSA திறமைகள் என்பது பெரும்பாலான பெற்றோருக்குத் தெரியாது, ஏனெனில் பள்ளிகள் வெளிப்படையாகச் சேர்க்கும் விளையாட்டுகளே (கால்பந்து, கூடைப்பந்து, நீச்சல்) பொது உரையாடலில் ஆதிக்கம் செலுத்துகின்றன. விழிப்புணர்வு இடைவெளியே வழங்கல் இடைவெளி.",
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
      ms: "Orkestra Cina sekolah memerlukan suara seksyen ini setiap tahun. Kebanyakan pelajar belajar erhu, pipa, atau guzheng — hampir tiada yang bermain sheng atau zhongruan. Jurulatih giat mencari calon pada instrumen ini.",
      ta: "பள்ளி சீன இசைக்குழுக்களுக்கு இந்தப் பகுதிக் குரல்கள் ஒவ்வொரு ஆண்டும் தேவை. பெரும்பாலான மாணவர்கள் erhu, pipa அல்லது guzheng கற்கிறார்கள் — sheng அல்லது zhongruan வாசிப்பவர் யாருமில்லை எனலாம். இந்த இசைக்கருவிகளில் திறமையானவர்களைப் பயிற்சியாளர்கள் தீவிரமாகத் தேடுகிறார்கள்.",
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
      ms: "Sukan luar bermusim; sedikit sekolah rendah menawarkan CCA ini. Sekolah menengah berdekatan empangan dan kawasan pantai menjalankan program pasukan dengan laluan penyuap pasukan kebangsaan yang konsisten. Jenis badan (ketinggian + kekuatan badan atas) dihargai.",
      ta: "பருவகால வெளிப்புற விளையாட்டுகள்; சில தொடக்கப் பள்ளிகளே இந்த CCA-க்களைக் கொண்டுள்ளன. நீர்த்தேக்கங்கள் மற்றும் கடலோரப் பகுதிகளுக்கு அருகிலுள்ள இடைநிலைப் பள்ளிகள், தொடர்ச்சியான தேசிய அணி வழங்கல் பாதைகளுடன் அணி நிரல்களை நடத்துகின்றன. உடல் அமைப்பு (உயரம் + மேல் உடல் வலிமை) மதிக்கப்படுகிறது.",
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
      ms: "Kebergantungan peralatan dan jurulatih yang mahal mengehadkan kumpulan. Kedudukan Persatuan Lawan Pedang Singapura (SFA) penting, tetapi sekolah pertengahan menerima calon berasaskan potensi. Tiga senjata (foil, épée, sabre) masing-masing mempunyai corak pemilihan yang berasingan.",
      ta: "விலையுயர்ந்த உபகரணம் மற்றும் பயிற்சிச் சார்பு குழுவை வரம்புபடுத்துகிறது. சிங்கப்பூர் வாள்வீச்சு சங்கத்தின் (SFA) தரவரிசை முக்கியம், ஆனால் நடுத்தரப் பள்ளிகள் திறன் அடிப்படையிலான வேட்பாளர்களை ஏற்கின்றன. மூன்று வாள்கள் (foil, épée, sabre) ஒவ்வொன்றுக்கும் தனித்தனித் தேர்வு முறைகள் உள்ளன.",
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
      ms: "Berbeza daripada besbol; bahagian perempuan menguasai softball sekolah Singapura. ACS(I), RGS, dan sekolah warisan lain mengambil setiap tahun tetapi sedikit gadis P6 bermain. Calon atletik dari latar belakang bola jaring atau bola keranjang menyesuaikan diri dengan baik.",
      ta: "பேஸ்பாலில் இருந்து வேறுபட்டது; சிங்கப்பூர் பள்ளி சாஃப்ட்பாலில் பெண்கள் பிரிவு ஆதிக்கம் செலுத்துகிறது. ACS(I), RGS மற்றும் பிற பாரம்பரியப் பள்ளிகள் ஆண்டுதோறும் சேர்க்கின்றன, ஆனால் P6 பெண்கள் சிலரே விளையாடுகிறார்கள். நெட்பால் அல்லது கூடைப்பந்து பின்னணியிலிருந்து வரும் விளையாட்டு வேட்பாளர்கள் நன்கு மாறுகிறார்கள்.",
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
      ms: "Diterima DSA di beberapa sekolah; hampir tiada perbincangan awam meletakkannya sebagai laluan DSA. Acara bergred Persekutuan Boling Singapura (SBF) ialah rujukan. Sukan dalaman dengan keluk pembelajaran curam pada awalnya tetapi siling terhad pada sekitar umur 16-18 tahun.",
      ta: "பல பள்ளிகளில் DSA ஏற்கப்பட்டுள்ளது; இது ஒரு DSA பாதை எனப் பொது உரையாடல் எதுவும் கிட்டத்தட்டக் குறிப்பிடுவதில்லை. சிங்கப்பூர் பௌலிங் கூட்டமைப்பின் (SBF) தரப்படுத்தப்பட்ட நிகழ்வுகளே அளவுகோல். தொடக்கத்தில் செங்குத்தான கற்றல் வளைவு கொண்ட உட்புற விளையாட்டு, ஆனால் அதன் உச்சவரம்பு சுமார் 16-18 வயதில் நிற்கிறது.",
    },
    schools: {
      en: "Anglican High · selected mixed and boys' secondaries (check published DSA briefs)",
      zh: "Anglican High · 部分混校与男校（看公开 DSA brief）",
      ms: "Anglican High · sekolah menengah campuran dan lelaki terpilih (semak brief DSA yang diterbitkan)",
      ta: "Anglican High · தேர்ந்தெடுக்கப்பட்ட கலப்பு மற்றும் ஆண்கள் இடைநிலைப் பள்ளிகள் (வெளியிடப்பட்ட DSA விளக்கங்களைப் பார்க்கவும்)",
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
      ms: "SSP di 2 sekolah (ACS(I) dan RGS); DSA lebih luas di sekolah tambahan. Sedikit pemain skuasy sekolah rendah wujud, tetapi akses gelanggang lebih sukar daripada badminton. Persamaan teknikal dengan badminton + tenis bermakna mereka yang beralih dari sukan itu boleh maju lebih cepat.",
      ta: "2 பள்ளிகளில் SSP (ACS(I) மற்றும் RGS); கூடுதல் பள்ளிகளில் விரிவான DSA. தொடக்கப் பள்ளி ஸ்குவாஷ் வீரர்கள் சிலரே உள்ளனர், ஆனால் மைதான அணுகல் பேட்மிண்டனை விடக் கடினம். பேட்மிண்டன் + டென்னிஸுடன் உள்ள நுட்ப ஒற்றுமையால், அந்த விளையாட்டுகளிலிருந்து மாறுபவர்கள் வேகமாக முன்னேற முடியும்.",
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

/* ============================ TRANSFER PATHS ============================ */

const TRANSFER_KICKER: LocaleStr = {
  en: "Chapter 2.5 · Build on what your child already trains",
  zh: "第 2.5 章 · 在已有底子上做转项",
  ms: "Bab 2.5 · Bina daripada apa yang anak anda sudah latih",
  ta: "அத்தியாயம் 2.5 · உங்கள் குழந்தை ஏற்கனவே பயிற்சி செய்வதை அடிப்படையாகக் கொள்ளுங்கள்",
};

const TRANSFER_TITLE: LocaleStr = {
  en: "Transfer paths — when a mainstream foundation opens a niche door",
  zh: "转项路径——主流底子打开冷门的门",
  ms: "Laluan peralihan — apabila asas arus perdana membuka pintu niche",
  ta: "மாற்று பாதைகள் — முக்கிய அடிப்படை niche கதவைத் திறக்கும்போது",
};

const TRANSFER_INTRO: LocaleStr = {
  en: "If your child has already trained one or more mainstream talents for 1-3 years but the DSA competition there is brutal (wushu, piano, badminton, swimming), an underrecruited adjacent talent can be a more realistic target. For each niche talent below we list multiple mainstream backgrounds that map credibly. The structure to use this section: pick the niche talent your target school accepts, then check which of your child's existing skills carry over. The carried-over foundations move directly; the new skills usually need 6-12 months to build on top.",
  zh: "如果孩子已经训练一种或多种主流 talent 1-3 年 · 但那些项目 DSA 竞争太激烈(武术、钢琴、羽毛球、游泳)· 转向相邻冷门 talent 可能是更现实的目标。下面每个冷门 talent 都列了多条主流背景的迁移路径。用法：先找你目标学校招的冷门项目 · 再看孩子已有底子里哪条能搬。可迁移的底子能直接搬 · 新项目特有技能通常 6-12 个月在上面叠加。",
  ms: "Jika anak anda telah melatih satu atau lebih bakat arus perdana selama 1-3 tahun tetapi persaingan DSA di situ sangat ketat, bakat bersebelahan yang kurang dipohon boleh menjadi sasaran yang lebih realistik. Untuk setiap bakat niche di bawah, beberapa latar belakang arus perdana memetakan dengan boleh dipercayai.",
  ta: "உங்கள் குழந்தை ஏற்கனவே ஒன்று அல்லது அதற்கு மேற்பட்ட முக்கிய திறமைகளை 1-3 ஆண்டுகளாக பயிற்சி செய்திருந்தால் ஆனால் அவற்றில் DSA போட்டி கடினமாக இருந்தால், குறைவாக விண்ணப்பிக்கப்படும் அண்டை திறமை மிகவும் யதார்த்தமான இலக்காக இருக்கலாம். ஒவ்வொரு niche திறமைக்கும் கீழே, பல முக்கிய பின்னணிகள் நம்பகமாக மேப் ஆகின்றன.",
};

const TRANSFER_TARGETS: ReadonlyArray<{
  icon: typeof Activity;
  target: LocaleStr;
  sources: ReadonlyArray<{
    from: LocaleStr;
    why: LocaleStr;
    strength: "strong" | "good" | "partial";
  }>;
  needs: LocaleStr;
}> = [
  {
    icon: Drum,
    target: { en: "Lion dance (target)", zh: "舞狮(目标)", ms: "Tarian singa (sasaran)", ta: "சிங்க நடனம் (இலக்கு)" },
    sources: [
      {
        from: { en: "Wushu (武术)", zh: "武术", ms: "Wushu", ta: "வுஷு" },
        why: { en: "Horse stance, hip rotation, body rhythm — Singapore Southern-style lion dance traces its stance structure directly to wushu", zh: "马步、髋部转动、身体节奏——新加坡南派舞狮桩功直接源于武术", ms: "Kuda-kuda, putaran pinggul, ritma badan", ta: "குதிரை நிலை, இடுப்பு சுழற்சி, உடல் தாளம்" },
        strength: "strong",
      },
      {
        from: { en: "Taekwondo / Karate", zh: "跆拳道 / 空手道", ms: "Taekwondo / Karate", ta: "தைக்வாண்டோ / கராத்தே" },
        why: { en: "Low stances, balance under quick weight shifts, body discipline, partner-coordination instinct", zh: "低位站桩、快速重心转移时的平衡、身体纪律、双人协调本能", ms: "Kuda-kuda rendah, keseimbangan, disiplin badan", ta: "தாழ்ந்த நிலைகள், சமநிலை, உடல் ஒழுக்கம்" },
        strength: "good",
      },
      {
        from: { en: "Chinese dance / contemporary dance", zh: "中国舞 / 现代舞", ms: "Tarian Cina / kontemporari", ta: "சீன / சமகால நடனம்" },
        why: { en: "Rhythm reading from drums, body coordination across a long form, performative awareness of audience", zh: "鼓点节奏的读取、长段身体协调、面对观众的表演意识", ms: "Membaca rentak, koordinasi badan, kesedaran penonton", ta: "தாள வாசிப்பு, உடல் ஒருங்கிணைப்பு, பார்வையாளர் விழிப்புணர்வு" },
        strength: "good",
      },
      {
        from: { en: "Gymnastics", zh: "体操", ms: "Gimnastik", ta: "ஜிம்னாஸ்டிக்ஸ்" },
        why: { en: "Strong core, balance, flexibility — helpful for lion-head puppetry that involves overhead lifts and sudden pose holds", zh: "强核心、平衡、柔韧——对狮头举高与突然定格姿势有帮助", ms: "Teras kuat, keseimbangan, kelenturan", ta: "வலுவான மையம், சமநிலை, நெகிழ்வுத்தன்மை" },
        strength: "partial",
      },
      {
        from: { en: "Chinese percussion (鼓乐)", zh: "华乐打击乐", ms: "Perkusi Cina", ta: "சீன தாள வாத்தியங்கள்" },
        why: { en: "Drum rhythm fluency — important for synchronisation with the percussion ensemble that drives every routine", zh: "鼓点节奏熟练——对狮头狮尾跟随打击乐合奏同步至关重要", ms: "Kefasihan rentak drum", ta: "டிரம் தாளம் சரளம்" },
        strength: "partial",
      },
    ],
    needs: {
      en: "All sources still need: lion-head puppetry, 2-person head-tail coordination, drum-pattern reading, cultural narratives. 9-12 months minimum at a Singapore lion dance club.",
      zh: "无论从哪条转 · 都还要建立：狮头操控、狮头狮尾双人配合、鼓点谱读、文化叙事。在新加坡舞狮俱乐部至少 9-12 个月。",
      ms: "Semua sumber masih perlukan: teknik kepala singa, koordinasi dua orang, membaca rentak drum.",
      ta: "எல்லா மூலங்களும் இன்னும் தேவை: சிங்க தலை நுட்பம், இரு நபர் ஒருங்கிணைப்பு, டிரம் வாசிப்பு.",
    },
  },
  {
    icon: Waves,
    target: { en: "Water polo (target)", zh: "水球(目标)", ms: "Polo air (sasaran)", ta: "வாட்டர் போலோ (இலக்கு)" },
    sources: [
      {
        from: { en: "Competitive swimming", zh: "竞技游泳", ms: "Renang kompetitif", ta: "போட்டி நீச்சல்" },
        why: { en: "The standard recruitment pathway. Aerobic base, water feel, freestyle at game pace transfer directly", zh: "标准招生通道。有氧底子、水感、比赛级自由泳直接迁移", ms: "Asas aerobik, rasa air, gaya bebas pada kelajuan permainan", ta: "ஏரோபிக் அடிப்படை, நீர் உணர்வு, ஃப்ரீஸ்டைல்" },
        strength: "strong",
      },
      {
        from: { en: "Synchronised swimming", zh: "花样游泳", ms: "Renang segerak", ta: "ஒத்திசைவான நீச்சல்" },
        why: { en: "Egg-beater treading already trained at a high level — the single hardest water-polo demand for swimmer-converts is already in place", zh: "蛋打腿踩水已高水平训练——游泳手转水球最难那关已经过了", ms: "Egg-beater telah dilatih pada tahap tinggi", ta: "Egg-beater ஏற்கனவே உயர் மட்டத்தில்" },
        strength: "strong",
      },
      {
        from: { en: "Basketball", zh: "篮球", ms: "Bola keranjang", ta: "கூடைப்பந்து" },
        why: { en: "Court-aware 6-on-6 spatial thinking, shooting arm strength, recognising where the ball will be 2 seconds from now — all transfer to water polo's offensive structure", zh: "球场 6 对 6 空间意识、射门臂力、预读球往哪去 2 秒后位置——都迁移到水球进攻结构", ms: "Pemikiran ruang 6-lawan-6, kekuatan lengan, ramalan bola", ta: "6-மீது-6 இடம் சிந்தனை, கை வலிமை, பந்து கணிப்பு" },
        strength: "good",
      },
      {
        from: { en: "Rugby", zh: "橄榄球", ms: "Ragbi", ta: "ரக்பி" },
        why: { en: "Physical contact tolerance, comfort under bodies — water polo at the centre-forward position involves substantial physical defending that surprises swim-only converts", zh: "身体对抗承受度、被压时的从容——水球中锋位有大量物理防守 · 只游过泳的转项者常被吓到", ms: "Toleransi sentuhan fizikal, keselesaan dalam tekanan", ta: "உடல் தொடர்பு சகிப்புத்தன்மை, அழுத்தத்தில் வசதி" },
        strength: "partial",
      },
    ],
    needs: {
      en: "All sources still need: egg-beater stamina (if not synchro), one-handed ball control without two-hand lifts, passing under defensive pressure, FINA rule fluency. 6-9 months at a Singapore water polo programme.",
      zh: "无论从哪条转 · 都还要建立：蛋打腿耐力(非花样游泳出身的话)、单手控球(不能两手抬)、防守压力下传球、FINA 规则。新加坡水球项目 6-9 个月。",
      ms: "Semua sumber masih perlukan: stamina egg-beater (jika bukan dari renang berirama), kawalan bola sebelah tangan tanpa angkatan dua tangan, hantaran di bawah tekanan pertahanan, kefahaman peraturan FINA. 6-9 bulan dalam program polo air Singapura.",
      ta: "எல்லா மூலங்களுக்கும் இன்னும் தேவை: egg-beater வலிமை (synchro அல்லாவிட்டால்), இரு கை உயர்த்தல் இல்லாமல் ஒரு கை பந்துக் கட்டுப்பாடு, தற்காப்பு அழுத்தத்தில் பாஸ் செய்தல், FINA விதிகளில் தேர்ச்சி. சிங்கப்பூர் நீர்ப்பந்து நிரலில் 6-9 மாதங்கள்.",
    },
  },
  {
    icon: Zap,
    target: { en: "Squash (target)", zh: "壁球(目标)", ms: "Skuasy (sasaran)", ta: "ஸ்குவாஷ் (இலக்கு)" },
    sources: [
      {
        from: { en: "Badminton", zh: "羽毛球", ms: "Badminton", ta: "இறகுப்பந்து" },
        why: { en: "Wrist control, racket-grip transitions, lunge footwork, reaction time — Singapore squash coaches actively prefer badminton converters because the muscle memory transfers cleanly", zh: "腕力、握拍切换、弓步脚法、反应时间——新加坡壁球教练主动偏好羽毛球转项 · 因肌肉记忆迁移最干净", ms: "Kawalan pergelangan tangan, pertukaran pegangan raket, pergerakan menerjang", ta: "மணிக்கட்டு கட்டுப்பாடு, ராக்கெட் பிடிப்பு மாற்றம், கால் நகர்வு" },
        strength: "strong",
      },
      {
        from: { en: "Tennis", zh: "网球", ms: "Tenis", ta: "டென்னிஸ்" },
        why: { en: "Most direct racket-sport mapping. Forehand and backhand mechanics translate; the swing length shortens but the shape is recognisable", zh: "球拍项目最直接的映射。正反手力学直接通用；挥拍长度变短但形状一致", ms: "Pemetaan sukan raket paling langsung", ta: "மிக நேரடியான ராக்கெட் விளையாட்டு" },
        strength: "strong",
      },
      {
        from: { en: "Table tennis", zh: "乒乓球", ms: "Ping pong", ta: "மேசை டென்னிஸ்" },
        why: { en: "Reaction speed, reading spin, fast hand-eye decisions — though the grip and swing length differ substantially, the perceptual processing layer transfers", zh: "反应速度、读旋转、快速手眼决策——握拍和挥拍长度差别大 · 但感知处理层是通的", ms: "Kelajuan tindak balas, membaca spin, keputusan tangan-mata pantas", ta: "எதிர்வினை வேகம், ஸ்பின் படித்தல், வேகமான கை-கண் முடிவுகள்" },
        strength: "good",
      },
    ],
    needs: {
      en: "All sources still need: reading bounce off three walls (the defining new skill), tactical 'T' positioning, eye guard discipline (WSF rule). 9 months minimum on a real squash court.",
      zh: "无论从哪条转 · 都还要建立：读三面墙的回弹(核心新技能)、战术 T 位、护目镜纪律(WSF 规则)。真正的壁球场至少 9 个月。",
      ms: "Semua sumber masih perlukan: membaca pantulan dari tiga dinding (kemahiran baharu yang menentukan), kedudukan taktikal 'T', disiplin pelindung mata (peraturan WSF). Minimum 9 bulan di gelanggang skuasy sebenar.",
      ta: "எல்லா மூலங்களுக்கும் இன்னும் தேவை: மூன்று சுவர்களிலிருந்து பந்து எப்படித் திரும்பும் என்பதைப் படித்தல் (இதுவே தீர்மானிக்கும் புதிய திறன்), தந்திரோபாய 'T' நிலை, கண் பாதுகாப்பு ஒழுங்கு (WSF விதி). உண்மையான ஸ்குவாஷ் மைதானத்தில் குறைந்தது 9 மாதங்கள்.",
    },
  },
  {
    icon: Bird,
    target: { en: "Softball — girls (target)", zh: "垒球——女子(目标)", ms: "Softball — perempuan (sasaran)", ta: "சாஃப்ட்பால் — பெண்கள் (இலக்கு)" },
    sources: [
      {
        from: { en: "Cricket", zh: "板球", ms: "Kriket", ta: "கிரிக்கெட்" },
        why: { en: "Most direct transfer of all — bat mechanics, throwing motion, fielding instincts, game structure all parallel. Rare in Singapore but a major lever where it exists", zh: "迁移最直接的——挥棒力学、传球动作、外野直觉、比赛结构全部对应。新加坡少 · 但有就是大杠杆", ms: "Pemindahan paling langsung — mekanik bat, motion balingan", ta: "மிக நேரடியான மாற்றம் — பேட் இயக்கவியல், எறிதல்" },
        strength: "strong",
      },
      {
        from: { en: "Track sprints", zh: "田径短跑", ms: "Pecut olahraga", ta: "டிராக் ஸ்பிரிண்ட்" },
        why: { en: "Base-running speed, explosive starts, fitness baseline — track sprinters are routinely recruited by school softball teams as outfielders and base runners", zh: "跑垒速度、爆发起跑、体能底子——田径短跑手常被中学软球队招为外野手或跑垒员", ms: "Kelajuan larian asas, permulaan letupan", ta: "ஓட்டத் திறன், வெடிப்பு தொடக்கம்" },
        strength: "good",
      },
      {
        from: { en: "Field hockey", zh: "曲棍球", ms: "Hoki padang", ta: "ஃபீல்ட் ஹாக்கி" },
        why: { en: "Throwing motion, game-spatial reading, comfort with a fielding glove (transfers from hockey stick reach), team-defence patterns", zh: "传球动作、比赛空间读取、对接球手套的适应、团队防守模式", ms: "Motion balingan, membaca ruang permainan", ta: "எறிதல் இயக்கம், கள வாசிப்பு" },
        strength: "good",
      },
      {
        from: { en: "Netball", zh: "投球", ms: "Bola jaring", ta: "நெட்பால்" },
        why: { en: "Strong throwing arm, two-handed catching technique, defensive positioning instincts — though softball requires bigger throws than netball passes", zh: "强传球臂、两手接球技术、防守站位本能——但软球的传球距离比投球大", ms: "Lengan balingan kuat, teknik tangkapan dua tangan", ta: "வலுவான கை, இரு கை பிடிப்பு நுட்பம்" },
        strength: "partial",
      },
    ],
    needs: {
      en: "All sources still need: hitting technique (the highest learning curve), pitch-reading, base-running tactics, position-specific fielding patterns. 6-9 months of focused softball-specific practice.",
      zh: "无论从哪条转 · 都还要建立：击球技术(学习曲线最陡)、读球路、跑垒战术、各位置特定的接球模式。专项练习 6-9 个月。",
      ms: "Semua sumber masih perlukan: teknik memukul (keluk pembelajaran tertinggi), membaca balingan, taktik larian asas, corak menjaga padang mengikut posisi. 6-9 bulan latihan khusus softball yang fokus.",
      ta: "எல்லா மூலங்களுக்கும் இன்னும் தேவை: அடிக்கும் நுட்பம் (மிக உயர்ந்த கற்றல் வளைவு), பந்து வீச்சைப் படித்தல், பேஸ்-ஓட்டத் தந்திரங்கள், நிலைக்கேற்ற ஃபீல்டிங் முறைகள். கவனம் செலுத்திய சாஃப்ட்பால் பயிற்சி 6-9 மாதங்கள்.",
    },
  },
  {
    icon: Music2,
    target: { en: "Rare wind / rare Chinese instruments (target)", zh: "罕见管乐 / 罕见华乐(目标)", ms: "Tiup jarang / instrumen Cina jarang (sasaran)", ta: "அரிய காற்று / அரிய சீன கருவி (இலக்கு)" },
    sources: [
      {
        from: { en: "Recorder (school music programme)", zh: "竖笛(学校音乐课)", ms: "Perakam", ta: "ரெக்கார்டர்" },
        why: { en: "Closest wind-family relative. Basic embouchure exists, breath control habit is built, finger-coordination over holes transfers — the easiest transition to oboe, dizi, or hulusi", zh: "管乐家族最近亲。已具基本嘴型、气息控制习惯已建、按孔手指协调可迁移——转双簧管、笛子、葫芦丝最容易", ms: "Saudara keluarga tiup paling dekat", ta: "மிக நெருங்கிய காற்று குடும்ப உறவினர்" },
        strength: "strong",
      },
      {
        from: { en: "Existing band / orchestra instrument", zh: "已学的乐团乐器", ms: "Instrumen band / orkestra sedia ada", ta: "ஏற்கனவே இசைக்குழு கருவி" },
        why: { en: "Clarinet to oboe / bassoon, trumpet to French horn, violin to erhu, dizi to sheng — within-family transitions are 6-9 months; across-family transitions are 9-12 months", zh: "单簧管转双簧管/巴松、小号转法国号、小提琴转二胡、笛子转笙——同族转 6-9 个月 · 跨族转 9-12 个月", ms: "Klarinet ke obo, trumpet ke French horn, biola ke erhu", ta: "க்ளாரினெட் முதல் ஓபோ, ட்ரம்பெட் முதல் French horn" },
        strength: "strong",
      },
      {
        from: { en: "Piano or strings (Grade 5+)", zh: "钢琴或弦乐(Grade 5+)", ms: "Piano atau bertali (Grade 5+)", ta: "பியானோ அல்லது நரம்பு (Grade 5+)" },
        why: { en: "Sight-reading, rhythmic precision, ABRSM theory and aural foundation — the music brain transfers; the physical wind technique starts from zero", zh: "视奏、节奏精度、ABRSM 理论与听音底子——音乐脑可迁移 · 物理管乐技术从零开始", ms: "Membaca pandang, ketepatan rentak, ABRSM", ta: "பார்த்து வாசித்தல், தாள துல்லியம், ABRSM" },
        strength: "good",
      },
      {
        from: { en: "Choir / vocal training", zh: "合唱团 / 声乐", ms: "Koir / latihan vokal", ta: "பாடகர் / குரல் பயிற்சி" },
        why: { en: "Breath support already trained (singers and wind players use the same diaphragm habit), aural and sight-singing skills carry to wind sight-reading", zh: "气息支持已训练好(歌手和管乐用同一套横膈膜习惯)、听音视唱可迁移到管乐视奏", ms: "Sokongan pernafasan, kemahiran aural", ta: "சுவாச ஆதரவு, கேள்வி திறன்" },
        strength: "partial",
      },
    ],
    needs: {
      en: "All sources still need: instrument-specific embouchure (cannot be fully transferred across families, though wind-to-wind is faster), audition repertoire on the new instrument, access to a teacher (sheng / oboe / bassoon teachers are scarce in Singapore — confirm availability before committing).",
      zh: "无论从哪条转 · 都还要建立：新乐器特有的嘴型(无法完全跨家族迁移 · 同管乐家族内转较快)、新乐器的 audition 曲目、师资资源(笙 / 双簧管 / 巴松教师在新加坡稀缺——先确认师资)。",
      ms: "Semua sumber masih perlukan: embouchure khusus instrumen (tidak boleh dipindahkan sepenuhnya merentas keluarga instrumen, walaupun tiup-ke-tiup lebih cepat), repertoire audisi pada instrumen baharu, akses kepada guru (guru sheng / oboe / bassoon amat kurang di Singapura — sahkan ketersediaan sebelum komited).",
      ta: "எல்லா மூலங்களுக்கும் இன்னும் தேவை: கருவிக்கே உரிய எம்பௌச்சர் (கருவிக் குடும்பங்களுக்கு இடையே முழுமையாக மாற்ற முடியாது, காற்று-க்கு-காற்று வேகமானது என்றாலும்), புதிய கருவியில் தேர்வுக்கான பாடல்கள், ஆசிரியர் அணுகல் (sheng / oboe / bassoon ஆசிரியர்கள் சிங்கப்பூரில் அரிது — உறுதிசெய்வதற்கு முன் கிடைப்பதை உறுதிப்படுத்தவும்).",
    },
  },
  {
    icon: Sparkles,
    target: { en: "Fencing (target)", zh: "击剑(目标)", ms: "Pedang (sasaran)", ta: "வாள் வீச்சு (இலக்கு)" },
    sources: [
      {
        from: { en: "Taekwondo / Karate", zh: "跆拳道 / 空手道", ms: "Taekwondo / Karate", ta: "தைக்வாண்டோ / கராத்தே" },
        why: { en: "En garde stance maps directly to martial-arts ready stance, lunging mechanics, distance management, reading the opponent's tells — fencing coaches consider this a meaningful head start", zh: "En garde 备战式直接对应武术预备式、弓步力学、距离管理、读对手意图——击剑教练视此为明显起步优势", ms: "Kuda-kuda menerjang dipetakan terus, pengurusan jarak", ta: "என் கார்டே நிலை நேரடியாக மேப் ஆகும்" },
        strength: "strong",
      },
      {
        from: { en: "Wushu", zh: "武术", ms: "Wushu", ta: "வுஷு" },
        why: { en: "Balance, agility, lunging stances, weapon-form familiarity (sword / spear practice transfers wrist and timing instinct to the fencing blade)", zh: "平衡、敏捷、弓步桩、器械套路熟悉感(剑 / 枪练习给击剑的腕和时机直觉)", ms: "Keseimbangan, kelincahan, kebiasaan senjata", ta: "சமநிலை, சுறுசுறுப்பு, ஆயுத பழக்கம்" },
        strength: "good",
      },
      {
        from: { en: "Tennis or badminton", zh: "网球或羽毛球", ms: "Tenis atau badminton", ta: "டென்னிஸ் அல்லது இறகுப்பந்து" },
        why: { en: "Reaction speed under pressure, lateral footwork, anticipating opponent's next move — the perception layer transfers; weapon manipulation starts new", zh: "压力下反应速度、横向脚法、预判对手下一步——感知层迁移 · 武器操控从零开始", ms: "Kelajuan tindak balas, pergerakan kaki sisi", ta: "எதிர்வினை வேகம், பக்க கால் நகர்வு" },
        strength: "good",
      },
      {
        from: { en: "Ballet or rhythmic gymnastics", zh: "芭蕾或艺术体操", ms: "Balet atau gimnastik berirama", ta: "பாலே அல்லது தாள ஜிம்னாஸ்டிக்ஸ்" },
        why: { en: "Footwork precision, posture, body control under sustained tension — fencing emphasises composed posture in a way few sports do", zh: "脚法精度、姿态、持续紧张下的身体控制——击剑对姿态从容的要求 · 少数运动能匹配", ms: "Ketepatan langkah kaki, postur", ta: "கால் நகர்வு துல்லியம், தோரணை" },
        strength: "partial",
      },
    ],
    needs: {
      en: "All sources still need: blade-specific technique (foil / épée / sabre have distinct rules and target areas), Singapore Fencing Association ranking ideally, weapon and gear (expensive — budget consideration). 9-12 months minimum.",
      zh: "无论从哪条转 · 都还要建立：剑种特有技术(花剑 / 重剑 / 佩剑各有独立规则和有效部位)、最好有 SFA 排名、装备成本(贵——预算考量)。至少 9-12 个月。",
      ms: "Semua sumber masih perlukan: teknik khusus mata pedang (foil / épée / sabre mempunyai peraturan dan kawasan sasaran yang berbeza), sebaik-baiknya kedudukan Persatuan Lawan Pedang Singapura (SFA), senjata dan peralatan (mahal — pertimbangan bajet). Minimum 9-12 bulan.",
      ta: "எல்லா மூலங்களுக்கும் இன்னும் தேவை: வாள் சார்ந்த நுட்பம் (foil / épée / sabre-க்குத் தனித்தனி விதிகளும் இலக்குப் பகுதிகளும் உள்ளன), முடிந்தால் சிங்கப்பூர் வாள்வீச்சு சங்க (SFA) தரவரிசை, வாள் மற்றும் உபகரணம் (விலை உயர்ந்தது — பட்ஜெட் கருத்தில் கொள்ளத்தக்கது). குறைந்தது 9-12 மாதங்கள்.",
    },
  },
];


const TRANSFER_NOTE: LocaleStr = {
  en: "These six target talents are not exhaustive — they are the ones where multiple mainstream backgrounds map credibly. Other plausible niche targets exist for archery (focus-heavy sports like rifle shooting or cross-country), dragon boat (rowing, kayak, swimming), and rare track events (general track training plus event-specific technical work). The same logic applies: identify the niche your target school recruits for, then map your child's existing skills onto it. The coach in the target talent is the most reliable source of an honest assessment of whether a specific transfer makes sense for your specific child.",
  zh: "这 6 个目标 talent 不是穷举——只是多条主流背景能可信迁移的几个。其他合理冷门目标也存在：射箭可从射击 / 越野跑(专注力强的项目)迁移 · 龙舟可从划船 / 皮划艇 / 游泳迁移 · 罕见田径项目可从一般田径训练 + 单项技术工作转。逻辑相同：先确认目标学校招的冷门项目 · 再把孩子已有底子映射上去。目标项目的教练是评估具体转项是否适合具体孩子的最可靠来源。",
  ms: "Keenam-enam talent sasaran ini bukan menyeluruh — mereka adalah yang beberapa latar belakang arus perdana memetakan secara boleh dipercayai. Sasaran niche munasabah lain wujud untuk memanah (sukan yang menuntut fokus seperti menembak rifle atau merentas desa), perahu naga (mendayung, kayak, renang), dan acara olahraga jarang (latihan olahraga umum ditambah kerja teknikal khusus acara). Logik yang sama terpakai: kenal pasti niche yang sekolah sasaran anda ambil, kemudian petakan kemahiran sedia ada anak anda kepadanya. Jurulatih dalam bakat sasaran ialah sumber paling boleh dipercayai untuk penilaian jujur sama ada pemindahan tertentu masuk akal untuk anak anda yang tertentu.",
  ta: "இந்த ஆறு இலக்குத் திறமைகள் முழுமையானவை அல்ல — பல முக்கியப் பின்னணிகள் நம்பகமாகப் பொருந்தும் இடங்களே இவை. மற்ற ஏற்கத்தக்க niche இலக்குகளும் உள்ளன: வில்வித்தை (துப்பாக்கிச் சுடுதல் அல்லது கிராஸ்-கன்ட்ரி போன்ற கவனம் சார்ந்த விளையாட்டுகள்), டிராகன் படகு (துடுப்பு, கனோ, நீச்சல்), மற்றும் அரிய டிராக் நிகழ்வுகள் (பொது டிராக் பயிற்சி + நிகழ்வுக்கே உரிய நுட்பப் பணி). அதே தர்க்கம் பொருந்தும்: உங்கள் இலக்குப் பள்ளி சேர்க்கும் niche-ஐ அடையாளம் காண்டு, உங்கள் குழந்தையின் தற்போதைய திறன்களை அதன்மீது பொருத்துங்கள். ஒரு குறிப்பிட்ட மாற்றம் உங்கள் குறிப்பிட்ட குழந்தைக்குப் பொருத்தமா என்பதற்கு நேர்மையான மதிப்பீட்டைத் தரும் மிக நம்பகமான மூலம் இலக்குத் திறமையின் பயிற்சியாளரே.",
};

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
    ms: "Nanyang Girls' High School menjalankan apa yang dilaporkan sebagai satu-satunya CCA tarian singa perempuan sepenuhnya di sekolah menengah Singapura. Brief DSA NYGH 2026 menyenaraikan bidang ini sebagai \"Dragon & Lion Dance Troupe,\" dengan kepala singa (狮头) dan ekor singa (狮尾) dilayan sebagai profil pemilihan yang berbeza. Tarian singa dikekalkan dalam senarai DSA NYGH 2026 sementara beberapa bidang bakat lain digugurkan pada kitaran itu — satu isyarat sekolah terus giat mengambil untuk CCA ini.",
    ta: "Nanyang Girls' High School, அறிக்கையின்படி சிங்கப்பூர் இடைநிலைப் பள்ளியில் முற்றிலும் பெண்களுக்கான சிங்க நடனக் CCA-ஐ நடத்தும் ஒரே பள்ளி. NYGH-இன் 2026 DSA விளக்கம் இந்தப் பகுதியை \"Dragon & Lion Dance Troupe\" என பட்டியலிட்டது; சிங்க தலை (狮头) மற்றும் சிங்க வால் (狮尾) தனித்தனித் தேர்வுச் சுயவிவரங்களாகக் கருதப்பட்டன. அந்தச் சுற்றில் பல திறமைப் பகுதிகள் நீக்கப்பட்டபோதும் சிங்க நடனம் NYGH-இன் 2026 DSA பட்டியலில் தக்கவைக்கப்பட்டது — இந்த CCA-க்குப் பள்ளி தொடர்ந்து தீவிரமாகச் சேர்க்கிறது என்பதற்கான அறிகுறி.",
  },
  {
    en: "Public coaching and parent-forum descriptions of the audition typically describe physical readiness checks (deep horse stance, basic footwork, balance), trial coachability, and a short conversation about the candidate's interest in the talent. Parent reports suggest the trial accepts candidates without prior experience — though families should always check the school's published DSA brief in May 2027 for the authoritative 2027 requirements rather than rely on prior-year descriptions.",
    zh: "公开的教练资料和家长论坛对 trial 的描述通常包括：身体条件检查（马步深蹲、基础步法、平衡）、训练时的可塑性、以及关于为什么对舞狮有兴趣的简短交流。家长反馈显示 trial 接受无经验候选人——但 2027 年 5 月学校发布最新 DSA brief 后 · 以学校官方为准 · 不要只依赖往年描述。",
    ms: "Penerangan jurulatih awam dan forum ibu bapa tentang audisi biasanya menggambarkan pemeriksaan kesediaan fizikal (kuda-kuda rendah, kerja kaki asas, keseimbangan), kebolehan dilatih dalam percubaan, dan perbualan ringkas tentang minat calon terhadap bakat itu. Laporan ibu bapa menunjukkan percubaan menerima calon tanpa pengalaman terdahulu — namun keluarga harus sentiasa menyemak brief DSA sekolah yang diterbitkan pada Mei 2027 untuk keperluan 2027 yang sahih, bukan bergantung pada penerangan tahun lalu.",
    ta: "தேர்வு பற்றிய பொது பயிற்சியாளர் மற்றும் பெற்றோர் மன்ற விளக்கங்கள் பொதுவாக உடல் தயார்நிலை சோதனைகள் (ஆழமான குதிரை நிலை, அடிப்படை கால்வேலை, சமநிலை), சோதனையின்போது பயிற்றுவிக்கும் திறன், மற்றும் அந்தத் திறமையில் வேட்பாளரின் ஆர்வம் பற்றிய சுருக்கமான உரையாடலை விவரிக்கின்றன. முன் அனுபவம் இல்லாத வேட்பாளர்களையும் சோதனை ஏற்கிறது எனப் பெற்றோர் அறிக்கைகள் கூறுகின்றன — ஆயினும் குடும்பங்கள் முந்தைய ஆண்டு விளக்கங்களை நம்பாமல், அதிகாரப்பூர்வ 2027 தேவைகளுக்கு மே 2027-இல் வெளியிடப்படும் பள்ளியின் DSA விளக்கத்தை எப்போதும் சரிபார்க்க வேண்டும்.",
  },
  {
    en: "Realistic preparation for a P5 family aiming at DSA-Sec 2027: weekly training at a Singapore lion dance club (NamYang Lion Dance, Wenyang, or similar troupes that accept recreational members), a daily home routine of horse-stance holds and basic footwork (15-20 minutes), and one filmed training session or community performance to reference in the DSA application portfolio. The honest constraint is academic: NYGH is an IP school, and potential-based DSA candidates still need a PSLE score within the range the school routinely admits. Lion dance can open a door; PSLE keeps the candidate in the room.",
    zh: "P5 家庭目标 DSA-Sec 2027 的现实准备：每周新加坡舞狮俱乐部训练（NamYang 舞狮、Wenyang · 或其他接收业余学员的舞狮团）· 每天 15-20 分钟家庭训练（马步 + 基础步法）· 至少录一次训练视频或参加一次社区演出 · 作为 DSA 申请材料的依据。诚实约束是学业：NYGH 是 IP 校 · 即便走潜力型 DSA · PSLE 仍要在学校历年常规录取分范围内。舞狮可能打开门 · PSLE 让候选人坐稳位置。",
    ms: "Persediaan realistik untuk keluarga P5 yang menyasarkan DSA-Sec 2027: latihan mingguan di kelab tarian singa Singapura (NamYang Lion Dance, Wenyang, atau kumpulan serupa yang menerima ahli rekreasi), rutin rumah harian menahan kuda-kuda dan kerja kaki asas (15-20 minit), dan satu sesi latihan yang difilemkan atau persembahan komuniti untuk dirujuk dalam portfolio permohonan DSA. Kekangan jujurnya ialah akademik: NYGH sekolah IP, dan calon DSA berasaskan potensi masih memerlukan skor PSLE dalam julat yang biasa diambil sekolah. Tarian singa boleh membuka pintu; PSLE mengekalkan calon di dalam bilik.",
    ta: "DSA-Sec 2027-ஐ இலக்காகக் கொண்ட P5 குடும்பத்திற்கு யதார்த்தமான தயாரிப்பு: சிங்கப்பூர் சிங்க நடனக் கிளப்பில் வாராந்திரப் பயிற்சி (NamYang Lion Dance, Wenyang, அல்லது பொழுதுபோக்கு உறுப்பினர்களை ஏற்கும் அமைப்புகள்), தினசரி வீட்டு வழக்கம் — குதிரை நிலை மற்றும் அடிப்படை கால்வேலை (15-20 நிமிடங்கள்), மற்றும் DSA விண்ணப்பத் தொகுப்பில் குறிப்பிட ஒரு படமாக்கப்பட்ட பயிற்சி அமர்வு அல்லது சமூக நிகழ்ச்சி. நேர்மையான கட்டுப்பாடு கல்விசார்ந்தது: NYGH ஒரு IP பள்ளி, திறன் அடிப்படையிலான DSA வேட்பாளர்களுக்கும் பள்ளி வழக்கமாகச் சேர்க்கும் வரம்பில் PSLE மதிப்பெண் தேவை. சிங்க நடனம் ஒரு கதவைத் திறக்கலாம்; PSLE வேட்பாளரை அறையில் தக்கவைக்கிறது.",
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
    ms: "Orkestra Cina sekolah memerlukan suara seksyen tertentu: erhu dan pipa adalah biasa; sheng, suona, zhongruan, daruan, dan dizi bes sentiasa kurang. Kebanyakan calon P6 yang menyertai DSA Orkestra Cina datang dari latar erhu, pipa, atau guzheng. Calon dengan kebolehan Gred 5-6 yang boleh dipercayai pada sheng atau zhongruan sering mengatasi calon erhu Gred 8 dalam pengambilan sebenar — kerana keseimbangan seksyen, bukan kemahiran mutlak, yang memacu tawaran.",
    ta: "பள்ளி சீன இசைக்குழுக்களுக்குக் குறிப்பிட்ட பகுதிக் குரல்கள் தேவை: erhu மற்றும் pipa பொதுவானவை; sheng, suona, zhongruan, daruan, மற்றும் பாஸ் dizi எப்போதும் பற்றாக்குறை. சீன இசைக்குழு DSA-வில் நுழையும் பெரும்பாலான P6 வேட்பாளர்கள் erhu, pipa அல்லது guzheng பின்னணியிலிருந்து வருகிறார்கள். sheng அல்லது zhongruan-இல் நம்பகமான கிரேடு 5-6 திறன் கொண்ட வேட்பாளர், உண்மையான சேர்க்கையில் கிரேடு 8 erhu வேட்பாளரை அடிக்கடி மிஞ்சுகிறார் — ஏனெனில் சலுகைகளை இயக்குவது பகுதி சமநிலை, முழுமையான திறன் அல்ல.",
  },
  {
    en: "A P5 candidate with existing piano or violin training can transition to sheng or suona within 9-12 months because the rhythmic and reading foundations transfer. A child with no instrumental background starting from zero typically needs 18 months minimum for an audition-credible level. Singapore-based Chinese instrument teachers for these rare instruments cluster around Singapore Chinese Music Federation programmes, TENG Company, and a small number of private studios. Confirm teacher availability before committing — sheng teachers especially are scarce.",
    zh: "P5 候选人已有钢琴或小提琴底子 · 9-12 个月可以转到笙或唢呐（节奏和读谱底子可迁移）· 完全从零开始通常需要至少 18 个月达到 audition 可信度。新加坡这些罕见华乐老师主要集中在新加坡华乐总会项目、TENG Company、和少数私人教室 · 笙的老师特别稀缺 · 报名前先确认师资。",
    ms: "Calon P5 dengan latihan piano atau biola sedia ada boleh beralih ke sheng atau suona dalam 9-12 bulan kerana asas irama dan bacaan berpindah. Anak tanpa latar instrumen yang bermula dari kosong biasanya perlukan sekurang-kurangnya 18 bulan untuk tahap yang boleh dipercayai dalam audisi. Guru instrumen Cina di Singapura untuk instrumen jarang ini berkumpul sekitar program Persekutuan Muzik Cina Singapura, TENG Company, dan sebilangan kecil studio persendirian. Sahkan ketersediaan guru sebelum komited — guru sheng terutamanya amat kurang.",
    ta: "ஏற்கனவே பியானோ அல்லது வயலின் பயிற்சி கொண்ட P5 வேட்பாளர், தாள மற்றும் வாசிப்பு அடித்தளங்கள் மாறுவதால் 9-12 மாதங்களில் sheng அல்லது suona-வுக்கு மாறலாம். எந்தக் கருவிப் பின்னணியும் இல்லாமல் பூஜ்ஜியத்திலிருந்து தொடங்கும் குழந்தைக்கு, தேர்வுக்கு நம்பகமான நிலைக்குப் பொதுவாகக் குறைந்தது 18 மாதங்கள் தேவை. இந்த அரிய கருவிகளுக்கான சிங்கப்பூர் சீன இசை ஆசிரியர்கள் சிங்கப்பூர் சீன இசைக் கூட்டமைப்பு நிரல்கள், TENG Company, மற்றும் சில தனியார் ஸ்டுடியோக்களைச் சுற்றியே உள்ளனர். உறுதிசெய்வதற்கு முன் ஆசிரியர் கிடைப்பதை உறுதிப்படுத்தவும் — குறிப்பாக sheng ஆசிரியர்கள் அரிது.",
  },
  {
    en: "The 10 SAP and Chinese-cultural schools running competitive orchestras (Dunman High, HCI, Nan Hua, NYGH, Catholic High, River Valley, Chung Cheng Main, Maris Stella, RGS, Bukit Panjang Government High) all face the same instrument-balance pressure. A candidate playing a rare instrument should name the instrument explicitly in the application — that signal alone can fast-track the file. See the full Chinese Orchestra DSA prep page for audition format details (two contrasting pieces, total under 5 minutes, plus sight-read).",
    zh: "10 所有竞争力华乐的 SAP / 华文文化重点校（Dunman High、HCI、Nan Hua、NYGH、Catholic High、River Valley、Chung Cheng Main、Maris Stella、RGS、BPGHS）面临同样的声部平衡压力。罕见乐器候选人在申请时要明确写出乐器名——这个信号本身就可能让 file 快速进入审议。完整 audition 格式（两首对比曲、总时长 5 分钟内、视奏）见 Chinese Orchestra DSA 备战页。",
    ms: "10 sekolah SAP dan budaya Cina yang menjalankan orkestra kompetitif (Dunman High, HCI, Nan Hua, NYGH, Catholic High, River Valley, Chung Cheng Main, Maris Stella, RGS, Bukit Panjang Government High) semuanya menghadapi tekanan keseimbangan instrumen yang sama. Calon yang bermain instrumen jarang harus menamakan instrumen itu secara jelas dalam permohonan — isyarat itu sahaja boleh mempercepat fail. Lihat halaman penuh persediaan DSA Orkestra Cina untuk butiran format audisi (dua karya berbeza, jumlah bawah 5 minit, serta baca-pandang).",
    ta: "போட்டி இசைக்குழுக்களை நடத்தும் 10 SAP மற்றும் சீன கலாச்சாரப் பள்ளிகள் (Dunman High, HCI, Nan Hua, NYGH, Catholic High, River Valley, Chung Cheng Main, Maris Stella, RGS, Bukit Panjang Government High) அனைத்தும் ஒரே கருவி-சமநிலை அழுத்தத்தை எதிர்கொள்கின்றன. அரிய கருவி வாசிக்கும் வேட்பாளர் விண்ணப்பத்தில் அந்தக் கருவியை வெளிப்படையாகக் குறிப்பிட வேண்டும் — அந்த அறிகுறியே கோப்பை விரைவுபடுத்தலாம். தேர்வு வடிவ விவரங்களுக்கு (இரு மாறுபட்ட பாடல்கள், மொத்தம் 5 நிமிடங்களுக்குள், மற்றும் பார்த்து வாசித்தல்) முழு சீன இசைக்குழு DSA தயாரிப்புப் பக்கத்தைப் பார்க்கவும்.",
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
  en: "Lion dance, sheng, archery, fencing — these are talents where one good coach matters more than for football or piano, because the candidate is still building the foundation rather than refining an existing skill. A coach with prior DSA-audition experience knows what the panel listens for, what a credible 11-month trajectory looks like, and how to film one training session that reads well in the application portfolio. Picking a coach who has prepared a DSA candidate in the same talent before can change the outcome more than the candidate's natural ability.",
  zh: "舞狮、笙、射箭、击剑——这些项目里 · 一个对的教练比足球或钢琴重要得多 · 因为候选人是在打地基 · 不是在优化已有技能。有 DSA audition 经验的教练知道评审在听什么 · 知道 11 个月可信的轨迹长什么样 · 知道怎么录一段适合 DSA 申请材料的训练视频。选一个备过同项目 DSA 候选人的教练 · 比孩子的天赋影响更大。",
  ms: "Tarian singa, sheng, memanah, pedang — ini adalah bakat di mana seorang jurulatih yang baik lebih penting daripada untuk bola sepak atau piano, kerana calon masih membina asas dan bukan memperhalus kemahiran sedia ada. Jurulatih yang berpengalaman audisi DSA tahu apa yang panel dengar, rupa trajektori 11 bulan yang boleh dipercayai, dan cara memfilemkan satu sesi latihan yang menarik dalam portfolio permohonan. Memilih jurulatih yang pernah menyediakan calon DSA dalam bakat yang sama boleh mengubah hasil lebih daripada kebolehan semula jadi calon.",
  ta: "சிங்க நடனம், sheng, வில்வித்தை, வாள்வீச்சு — கால்பந்து அல்லது பியானோவை விட ஒரு நல்ல பயிற்சியாளர் மிகவும் முக்கியமான திறமைகள் இவை, ஏனெனில் வேட்பாளர் ஏற்கனவே உள்ள திறனைச் செம்மைப்படுத்துவதை விட அடித்தளத்தையே இன்னும் கட்டுகிறார். DSA-தேர்வு அனுபவமுள்ள பயிற்சியாளருக்கு, குழு எதைக் கேட்கிறது, நம்பகமான 11-மாத பாதை எப்படி இருக்கும், விண்ணப்பத் தொகுப்பில் நன்றாகத் தெரியும் ஒரு பயிற்சி அமர்வை எப்படிப் படமாக்குவது என்பது தெரியும். அதே திறமையில் முன்னர் DSA வேட்பாளரைத் தயார் செய்த பயிற்சியாளரைத் தேர்ந்தெடுப்பது, வேட்பாளரின் இயற்கைத் திறனை விட முடிவை அதிகம் மாற்றும்.",
};

const COACH_TRIAL_TITLE: LocaleStr = {
  en: "Let the child try 1-2 months — then ask the coach honestly",
  zh: "让孩子先练 1-2 个月 · 再让教练诚实评估",
  ms: "Biarkan anak mencuba 1-2 bulan — kemudian tanya jurulatih dengan jujur",
  ta: "குழந்தையை 1-2 மாதங்கள் முயற்சிக்க விடுங்கள் — பின்னர் பயிற்சியாளரிடம் நேர்மையாகக் கேளுங்கள்",
};

const COACH_TRIAL_BODY: LocaleStr = {
  en: "Don't commit to an 11-month DSA preparation plan after one trial class. The honest sequence is: enrol the child in 1-2 months of weekly training, watch whether they look forward to the sessions or drag their feet, then sit down with the coach and ask directly — \"Based on what you've seen, how realistic is the DSA-Sec path for my child in this talent?\" Singapore youth-coaching research and international talent-identification studies converge on the same point: coaches predict youth potential at roughly 52-79% accuracy depending on sport, and a single trial is far too short a window for a credible read. A coach who has watched the child for 6-8 weekly sessions can tell you something useful; a coach who has watched the child once cannot.",
  zh: "不要看一次试课就下决心走 11 个月 DSA 准备路线。诚实的顺序是：先报 1-2 个月每周训练 · 观察孩子是期待去训练还是拖着不想去 · 然后坐下来直接问教练——\"以你目前看到的情况 · 这孩子走 DSA-Sec 这条路 · 现实概率多少？\"国际青训文献的共识：教练对青少年长期潜力的预测准确度大约 52-79%（看运动）· 一次 trial 远远不够。看了孩子 6-8 周训练的教练能告诉你有用的判断 · 只看过一次的教练给不出。",
  ms: "Jangan komited kepada pelan persediaan DSA 11 bulan selepas satu kelas percubaan. Urutan jujur ialah: daftarkan anak dalam 1-2 bulan latihan mingguan, perhatikan sama ada mereka menantikan sesi atau melengah-lengah, kemudian duduk dengan jurulatih dan tanya terus — \"Berdasarkan apa yang anda lihat, sejauh mana realistik laluan DSA-Sec untuk anak saya dalam bakat ini?\" Penyelidikan pengajaran belia Singapura dan kajian pengenalpastian bakat antarabangsa bertemu pada titik yang sama: jurulatih meramal potensi belia pada ketepatan kira-kira 52-79% bergantung pada sukan, dan satu percubaan terlalu singkat untuk bacaan yang boleh dipercayai. Jurulatih yang memerhati anak selama 6-8 sesi mingguan boleh memberitahu anda sesuatu yang berguna; jurulatih yang memerhati anak sekali sahaja tidak boleh.",
  ta: "ஒரு சோதனை வகுப்பிற்குப் பிறகு 11 மாத DSA தயாரிப்புத் திட்டத்திற்கு உறுதியளிக்க வேண்டாம். நேர்மையான வரிசை: 1-2 மாதங்கள் வாராந்திரப் பயிற்சியில் குழந்தையைச் சேர்த்து, அவர்கள் அமர்வுகளை எதிர்பார்க்கிறார்களா அல்லது தயங்குகிறார்களா எனப் பாருங்கள், பின்னர் பயிற்சியாளருடன் அமர்ந்து நேரடியாகக் கேளுங்கள் — \"நீங்கள் பார்த்ததின் அடிப்படையில், இந்தத் திறமையில் என் குழந்தைக்கு DSA-Sec பாதை எவ்வளவு யதார்த்தமானது?\" சிங்கப்பூர் இளையோர் பயிற்சி ஆராய்ச்சியும் சர்வதேச திறன் அடையாள ஆய்வுகளும் ஒரே புள்ளியில் ஒன்றுபடுகின்றன: விளையாட்டைப் பொறுத்து பயிற்சியாளர்கள் இளையோர் திறனை சுமார் 52-79% துல்லியத்தில் கணிக்கிறார்கள், ஒரே சோதனை நம்பகமான மதிப்பீட்டுக்கு மிகக் குறுகியது. 6-8 வாராந்திர அமர்வுகள் குழந்தையைப் பார்த்த பயிற்சியாளர் பயனுள்ளதைச் சொல்ல முடியும்; ஒருமுறை மட்டும் பார்த்தவரால் முடியாது.",
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
      ms: "Semua laluan · termasuk yang dipacu kelayakan (skuasy, pedang, memanah, ping pong) yang memerlukan rekod pertandingan bertauliah",
      ta: "அனைத்து பாதைகளும் · அங்கீகரிக்கப்பட்ட போட்டி பதிவு தேவைப்படும் தகுதி சார்ந்தவை (ஸ்குவாஷ், வாள்வீச்சு, வில்வித்தை, டேபிள் டென்னிஸ்) உட்பட",
    },
    notes: {
      en: "Earliest credible window for any DSA path. Lets the family test fit before committing.",
      zh: "任何 DSA 路径最早的可信窗口 · 让家庭测试是否合适后再决定。",
      ms: "Tetingkap paling awal yang boleh dipercayai untuk mana-mana laluan DSA. Membolehkan keluarga menguji kesesuaian sebelum komited.",
      ta: "எந்த DSA பாதைக்கும் நம்பகமான மிக ஆரம்பக் காலக்கெடு. உறுதியளிப்பதற்கு முன் பொருத்தத்தைச் சோதிக்கக் குடும்பத்தை அனுமதிக்கிறது.",
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
      ms: "Kebanyakan laluan berdasarkan potensi · tarian singa · instrumen Cina jarang · penjaga gol floorball · acara olahraga jarang · perahu naga · softball · boling",
      ta: "பெரும்பாலான திறன் சார்ந்த பாதைகள் · சிங்க நடனம் · அரிய சீன இசைக்கருவிகள் · ஃப்ளோர்பால் கோல்கீப்பர் · அரிய டிராக் நிகழ்வுகள் · டிராகன் படகு · சாஃப்ட்பால் · பௌலிங்",
    },
    notes: {
      en: "Officially recommended starting point per multiple Singapore school admissions resources. Allows weekly training + 2-3 visible milestones (CCA performance, club grading, training video).",
      zh: "多份新加坡学校招生资源公认的官方推荐起点 · 容得下每周训练 + 2-3 个可见里程碑（CCA 演出 / 俱乐部考级 / 训练视频）。",
      ms: "Titik permulaan yang disyorkan secara rasmi menurut pelbagai sumber kemasukan sekolah Singapura. Membolehkan latihan mingguan + 2-3 pencapaian yang jelas (persembahan CCA, penggredan kelab, video latihan).",
      ta: "பல சிங்கப்பூர் பள்ளி சேர்க்கை ஆதாரங்களின்படி அதிகாரப்பூர்வமாகப் பரிந்துரைக்கப்படும் தொடக்கப் புள்ளி. வாராந்திரப் பயிற்சி + 2-3 தெரியும் மைல்கற்களை (CCA நிகழ்ச்சி, கிளப் தரப்படுத்தல், பயிற்சி வீடியோ) அனுமதிக்கிறது.",
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
      ms: "Laluan berdasarkan potensi tulen sahaja · tarian singa · penjaga gol floorball · acara olahraga jarang · peranan sokongan dalam perahu naga atau softball",
      ta: "முற்றிலும் திறன் சார்ந்த பாதைகள் மட்டும் · சிங்க நடனம் · ஃப்ளோர்பால் கோல்கீப்பர் · அரிய டிராக் நிகழ்வுகள் · டிராகன் படகு அல்லது சாஃப்ட்பாலில் துணைப் பங்கு",
    },
    notes: {
      en: "Tight but workable for paths where schools explicitly accept zero-experience candidates. Academic load competes hard with daily training — most families cannot sustain this window. Honest assessment: only attempt if the child is genuinely interested, not just for DSA leverage.",
      zh: "对学校明确接受零经验的路径来说够紧但可行 · 学业压力与每日训练正面冲突 · 多数家庭撑不下来 · 诚实评估：只有孩子真的有兴趣才上 · 不要单纯为 DSA 杠杆而强推。",
      ms: "Ketat tetapi boleh dilaksanakan untuk laluan di mana sekolah jelas menerima calon tanpa pengalaman. Beban akademik bersaing keras dengan latihan harian — kebanyakan keluarga tidak dapat mengekalkan tetingkap ini. Penilaian jujur: hanya cuba jika anak benar-benar berminat, bukan sekadar untuk kelebihan DSA.",
      ta: "அனுபவமற்ற வேட்பாளர்களை வெளிப்படையாகப் பள்ளிகள் ஏற்கும் பாதைகளுக்கு இறுக்கமானது ஆனால் செயல்படக்கூடியது. கல்விச் சுமை தினசரிப் பயிற்சியுடன் கடுமையாகப் போட்டியிடுகிறது — பெரும்பாலான குடும்பங்களால் இந்தக் காலக்கெடுவைத் தாங்க முடியாது. நேர்மையான மதிப்பீடு: DSA சாதகத்திற்காக மட்டுமல்ல, குழந்தை உண்மையிலேயே ஆர்வமாக இருந்தால் மட்டுமே முயற்சிக்கவும்.",
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
      ms: "CCA niche bersaiz kecil. Kumpulan tarian singa NYGH adalah satu pasukan — mereka tidak boleh menerima 20 Tingkatan 1 baharu dalam satu tahun. Jumlah kemasukan DSA bakat niche merentas semua sekolah Singapura dalam tahun biasa adalah dalam ribuan rendah, bukan puluhan ribu. Strategi memperbaik peluang di sekolah tertentu; ia tidak mencipta slot tanpa had.",
      ta: "Niche CCA-க்கள் சிறியதாக நடைபெறுகின்றன. NYGH-இன் சிங்க நடனக் குழு ஒரே அணி — ஓர் ஆண்டில் 20 புதிய இடைநிலை 1 மாணவர்களை அவர்களால் ஏற்க முடியாது. வழக்கமான ஆண்டில் அனைத்து சிங்கப்பூர் பள்ளிகளிலும் மொத்த niche-திறமை DSA சேர்க்கை பல்லாயிரம் அல்ல, சில ஆயிரங்களே. உத்தி ஒரு குறிப்பிட்ட பள்ளியில் வாய்ப்பை மேம்படுத்துகிறது; வரம்பற்ற இடங்களை உருவாக்காது.",
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
      ms: "DSA mengurangkan halangan akademik tetapi tidak menghilangkannya. Anak dengan tawaran DSA bakat niche yang kukuh di NYGH atau HCI masih memerlukan skor PSLE dalam julat yang biasa diambil sekolah. Laluan bakat niche berasaskan potensi bukan pelarian daripada akademik; ia pintu tambahan bersama akademik. Keluarga yang hanya bergantung pada laluan niche dan mengabaikan akademik sering mendapati tawaran itu bersyarat pada prestasi PSLE.",
      ta: "DSA கல்வித் தடையைக் குறைக்கிறது, ஆனால் அதை அகற்றவில்லை. NYGH அல்லது HCI-இல் வலுவான niche-திறமை DSA சலுகை பெற்ற குழந்தைக்கும், பள்ளி வழக்கமாகச் சேர்க்கும் வரம்பில் PSLE மதிப்பெண் தேவை. திறன் அடிப்படையிலான niche-திறமை பாதை கல்வியிலிருந்து தப்பிப்பது அல்ல; அது கல்வியுடன் சேர்ந்த கூடுதல் கதவு. niche பாதையை மட்டும் நம்பி கல்வியை புறக்கணிக்கும் குடும்பங்கள், அந்தச் சலுகை PSLE செயல்திறனுக்கு உட்பட்டது என்பதை அடிக்கடிக் கண்டுகொள்கின்றன.",
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
      ms: "Selebihnya pergi kepada calon dengan rekod pertandingan atau penggredan yang didokumentasi. Ini bukan dasar yang diterbitkan; ia corak konsisten merentas komposisi kemasukan yang dilaporkan oleh pasukan kemasukan sekolah. Calon P6 tanpa pengalaman bersaing untuk sebahagian, bukan keseluruhan kumpulan, tawaran yang ada. Jangkaan realistik: buat kerja, tampil baik dalam percubaan, dan akui sesetengah tawaran memang sentiasa pergi kepada calon yang bermula pada P4.",
      ta: "மீதமுள்ளவை ஆவணப்படுத்தப்பட்ட போட்டி அல்லது தரப் பதிவுகள் கொண்ட வேட்பாளர்களுக்குச் செல்கின்றன. இது வெளியிடப்பட்ட கொள்கை அல்ல; பள்ளி சேர்க்கைக் குழுக்கள் தெரிவித்த சேர்க்கை அமைப்புகளில் காணப்படும் நிலையான போக்கு. அனுபவமற்ற P6 வேட்பாளர் கிடைக்கும் சலுகைகளின் முழுக் குழுவிற்கல்ல, ஒரு பகுதிக்கே போட்டியிடுகிறார். யதார்த்த எதிர்பார்ப்பு: உழைப்பைச் செய்யுங்கள், சோதனையில் சிறப்பாகச் செயல்படுங்கள், சில சலுகைகள் எப்போதும் P4-இல் தொடங்கிய வேட்பாளர்களுக்கே போகும் என்பதை ஏற்றுக்கொள்ளுங்கள்.",
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
      ms: "Temu duga direka sebahagiannya untuk menguji sama ada calon benar-benar peduli tentang bakat atau hanya audisi menjadi pilihan strategik. Anak yang tidak dapat menyatakan apa yang mereka suka tentang tarian singa — selain \"ibu bapa saya fikir ia membantu saya masuk NYGH\" — gagal temu duga setiap kali. Laluan niche berkesan kerana ia kurang diminati; ia tidak berkesan sebagai penempatan sinis. Jika anak tidak menikmati latihan mingguan dalam 2-3 bulan pertama, ubah strategi.",
      ta: "வேட்பாளர் திறமையைப் பற்றி உண்மையில் அக்கறை கொள்கிறாரா அல்லது ஒரு தந்திரமான தேர்வுக்குள் தேர்வெழுதுகிறாரா என்பதைச் சோதிக்கவே நேர்காணல் ஓரளவு வடிவமைக்கப்பட்டுள்ளது. \"என்னை NYGH-இல் சேர்க்க உதவும் என என் பெற்றோர் நினைத்தார்கள்\" என்பதைத் தாண்டி, சிங்க நடனத்தில் தான் என்ன விரும்புகிறார் என்பதை வெளிப்படுத்த முடியாத குழந்தை ஒவ்வொரு முறையும் நேர்காணலில் தோல்வியடைகிறார். niche பாதைகள் குறைவாக விண்ணப்பிக்கப்படுவதால் வேலை செய்கின்றன; தந்திரமான காய்நகர்த்தலாக வேலை செய்யாது. முதல் 2-3 மாதங்களில் குழந்தை வாராந்திரப் பயிற்சியை ரசிக்கவில்லை என்றால், உத்தியை மாற்றுங்கள்.",
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
      ms: "Laluan pada halaman ini telah berfungsi untuk sebahagian keluarga. Ia tidak berfungsi untuk banyak keluarga lain yang memulakan latihan niche dan tidak pernah menerima tawaran DSA. Kami tiada data awam Singapura tentang kadar kejayaan DSA bakat niche kerana sekolah tidak menerbitkan nombor tawaran-lawan-pemohon untuk bidang bakat individu. Anggap halaman ini sebagai peta laluan yang wujud — bukan urutan langkah yang membawa kepada hasil yang terjamin. Jika keluarga anda komited kepada salah satu laluan ini, lakukannya kerana anak benar-benar menikmati bakat itu, bukan kerana halaman ini menyiratkan peluangnya baik.",
      ta: "இந்தப் பக்கத்தில் உள்ள பாதைகள் சில குடும்பங்களுக்கு வேலை செய்துள்ளன. niche பயிற்சியைத் தொடங்கி DSA சலுகை பெறாத பல குடும்பங்களுக்கு இது வேலை செய்யவில்லை. தனிப்பட்ட திறமைப் பகுதிகளுக்கான சலுகை-எதிர்-விண்ணப்பதாரர் எண்களைப் பள்ளிகள் வெளியிடாததால், niche-திறமை DSA வெற்றி விகிதங்கள் குறித்த பொது சிங்கப்பூர் தரவு எங்களிடம் இல்லை. இந்தப் பக்கத்தை இருக்கும் பாதைகளின் வரைபடமாகக் கருதுங்கள் — உறுதியான முடிவுக்கு வழிவகுக்கும் படிநிலைகளாக அல்ல. உங்கள் குடும்பம் இந்தப் பாதைகளில் ஒன்றுக்கு உறுதியளித்தால், வாய்ப்பு சாதகம் எனப் பக்கம் சுட்டுவதால் அல்ல, குழந்தை அந்தத் திறமையை உண்மையிலேயே ரசிப்பதால் செய்யுங்கள்.",
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
  ms: "Halaman ini memetakan di mana peluang wujud. Halaman persediaan khusus bakat memberitahu anda apa yang dinilai setiap percubaan, contoh soalan temu duga, dan sekolah yang menyertai. Mulakan dengan indeks bakat untuk mencari laluan anda.",
  ta: "இந்தப் பக்கம் வாய்ப்புகள் எங்கே உள்ளன என்பதை வரைபடமாக்குகிறது. திறமை சார்ந்த தயாரிப்புப் பக்கங்கள் ஒவ்வொரு சோதனையும் எதை மதிப்பிடுகிறது, மாதிரி நேர்காணல் கேள்விகள், மற்றும் பங்கேற்கும் பள்ளிகள் என்பதைச் சொல்கின்றன. உங்கள் பாதையைக் கண்டறிய திறமை அட்டவணையுடன் தொடங்குங்கள்.",
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
        <section className="mt-8 mb-8 rounded-2xl border-l-4 border-champagne bg-white p-5 shadow-soft sm:p-6">
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

        {/* ── LOCK-IN WARNING (4-6 year commitment) ── */}
        <section className="mt-4 mb-12 rounded-2xl border-l-4 border-intellectual bg-champagne-subtle/50 p-5 shadow-soft sm:p-6">
          <p className="text-[11px] font-bold tracking-[0.14em] text-intellectual normal-case">
            {pick(LOCKIN_KICKER, locale)}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="mt-1.5 font-display text-[17px] font-bold leading-snug text-intellectual sm:text-lg"
          >
            {pick(LOCKIN_TITLE, locale)}
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-slate-700">{pick(LOCKIN_BODY, locale)}</p>
          <p className="mt-3 text-[14px] leading-relaxed text-slate-700">
            <span className="font-semibold text-intellectual">
              {locale === "zh"
                ? "对选冷门路径的真正含义："
                : locale === "ms"
                ? "Apa makna ini untuk memilih laluan niche: "
                : locale === "ta"
                ? "Niche பாதையைத் தேர்வுசெய்தல்: "
                : "What this means for choosing a niche path — "}
            </span>
            {pick(LOCKIN_IMPLICATION, locale)}
          </p>
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

        {/* ── TRANSFER PATHS section ── */}
        <section className="mt-12 mb-12">
          <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
            {pick(TRANSFER_KICKER, locale)}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
          >
            {pick(TRANSFER_TITLE, locale)}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{pick(TRANSFER_INTRO, locale)}</p>
          <div className="mt-6 space-y-5">
            {TRANSFER_TARGETS.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-soft">
                  {/* Target header */}
                  <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-champagne-subtle">
                      <Icon className="h-5 w-5 text-champagne-dark" aria-hidden />
                    </div>
                    <h3
                      style={{ textTransform: "none" }}
                      className="font-display text-[16px] font-bold leading-snug text-intellectual"
                    >
                      {pick(t.target, locale)}
                    </h3>
                  </div>

                  {/* Sources list */}
                  <p className="mt-4 text-[12px] font-bold tracking-[0.10em] text-champagne-dark normal-case">
                    {locale === "zh"
                      ? "孩子从这些背景转过来"
                      : locale === "ms"
                      ? "Anak boleh datang dari latar belakang ini"
                      : locale === "ta"
                      ? "குழந்தை வரக்கூடிய பின்னணிகள்"
                      : "Mainstream backgrounds that map here"}
                  </p>
                  <div className="mt-2 space-y-3">
                    {t.sources.map((s, j) => (
                      <div key={j} className="rounded-lg bg-surface-warm p-3">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="font-display text-[13.5px] font-bold text-intellectual">
                            {pick(s.from, locale)}
                          </span>
                          <span
                            className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold tracking-[0.06em] normal-case ${
                              s.strength === "strong"
                                ? "bg-intellectual text-white"
                                : s.strength === "good"
                                ? "bg-champagne text-intellectual-dark"
                                : "bg-slate-200 text-slate-700"
                            }`}
                          >
                            {s.strength === "strong"
                              ? locale === "zh"
                                ? "强重合"
                                : locale === "ms"
                                ? "Kuat"
                                : locale === "ta"
                                ? "வலுவான"
                                : "Strong overlap"
                              : s.strength === "good"
                              ? locale === "zh"
                                ? "良好"
                                : locale === "ms"
                                ? "Baik"
                                : locale === "ta"
                                ? "நல்ல"
                                : "Good overlap"
                              : locale === "zh"
                              ? "部分"
                              : locale === "ms"
                              ? "Sebahagian"
                              : locale === "ta"
                              ? "ஓரளவு"
                              : "Partial overlap"}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">{pick(s.why, locale)}</p>
                      </div>
                    ))}
                  </div>

                  {/* Common gap */}
                  <p className="mt-4 rounded-md bg-intellectual/5 p-3 text-[12.5px] leading-relaxed text-slate-700">
                    <span className="font-semibold text-intellectual">
                      {locale === "zh"
                        ? "无论从哪条转 · 还要建立："
                        : locale === "ms"
                        ? "Tidak kira dari mana, masih perlu bina: "
                        : locale === "ta"
                        ? "எங்கிருந்து வந்தாலும் இன்னும் தேவை: "
                        : "Regardless of source, you still need: "}
                    </span>
                    {pick(t.needs, locale)}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-[12.5px] leading-relaxed text-slate-500">{pick(TRANSFER_NOTE, locale)}</p>
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

          {/* Trial-first subsection */}
          <div className="mt-6 rounded-xl border border-champagne/30 bg-white/5 p-5">
            <h3
              style={{ textTransform: "none" }}
              className="font-display text-[16px] font-bold text-champagne-light"
            >
              {pick(COACH_TRIAL_TITLE, locale)}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/85">{pick(COACH_TRIAL_BODY, locale)}</p>
          </div>

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
      <RelatedCardsRow
        kicker={pick(REL_KICKER, locale)}
        heading={pick(REL_HEADING, locale)}
        items={[
          { icon: Compass, title: pick(REL_TAL_T, locale), body: pick(REL_TAL_B, locale), href: "/dsa-interview/talents" },
          { icon: Target, title: pick(REL_FIND_T, locale), body: pick(REL_FIND_B, locale), href: "/dsa-finder" },
          { icon: Shield, title: pick(REL_COACH_T, locale), body: pick(REL_COACH_B, locale), href: "/dsa-coaches" },
        ]}
      />
      <SiteFooter />
    </div>
  );
}
