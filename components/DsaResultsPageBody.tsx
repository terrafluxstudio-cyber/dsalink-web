"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  Clock4,
  GitBranch,
  Info,
  ListOrdered,
  MailOpen,
  MessageSquareText,
  RotateCcw,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PillarBackLink } from "@/components/PillarBackLink";
import { RelatedCardsRow } from "@/components/RelatedCardsRow";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TALENT_COUNT } from "@/lib/talentSlugs";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

/* ============================ HERO ============================ */

const KICKER: LocaleStr = {
  en: "DSA-Sec 2026 · Results & decision phase",
  zh: "DSA-Sec 2026 · 结果与决策阶段",
  ms: "DSA-Sec 2026 · Fasa keputusan",
  ta: "DSA-Sec 2026 · முடிவு கட்டம்",
};

const TITLE: LocaleStr = {
  en: "DSA-Sec results — schools notify 17-28 Aug. Final placement: November. Four outcomes, each with binding rules.",
  zh: "DSA-Sec 结果——学校在 8 月 17-28 日通知 · 最终安置在 11 月公布 · 四种结果各有约束规则",
  ms: "Keputusan DSA-Sec — sekolah maklum 17-28 Ogos. Penempatan akhir: November. Empat keputusan, setiap satu dengan peraturan mengikat.",
  ta: "DSA-Sec முடிவுகள் — பள்ளிகள் ஆகஸ்ட் 17-28 அறிவிக்கும். இறுதி இடம்: நவம்பர். நான்கு முடிவுகள், ஒவ்வொன்றுக்கும் கட்டுப்படுத்தும் விதிகள்.",
};

const SUBTITLE: LocaleStr = {
  en: "DSA-Sec 2026 schools notify outcomes between 17 August and 28 August 2026. The October School Preference Exercise (19-23 Oct 2026) is where you lock in which of your child's offers becomes the final school. Final placement is announced alongside PSLE results in mid-to-late November. This page covers what each of the four outcomes binds you to — and the small number of decisions that have outsized consequences.",
  zh: "DSA-Sec 2026 学校在 2026 年 8 月 17 日至 28 日通知申请结果。10 月 19-23 日的 School Preference Exercise · 是锁定孩子最终中学的关键 5 天。最终安置在 11 月中下旬与 PSLE 结果同时公布。本页面讲四种结果各自的约束 · 以及少数几个有重大后果的决策点。",
  ms: "Sekolah DSA-Sec 2026 memaklumkan keputusan antara 17-28 Ogos 2026. Pemilihan Keutamaan Sekolah Oktober (19-23 Okt 2026) adalah saat mengunci sekolah akhir.",
  ta: "DSA-Sec 2026 பள்ளிகள் 2026 ஆகஸ்ட் 17 முதல் 28 வரை முடிவுகளை அறிவிக்கின்றன. அக்டோபர் பள்ளி முன்னுரிமைப் பயிற்சி (அக் 19-23) இறுதி பள்ளியைப் பூட்டுகிறது.",
};

const DISCLAIMER: LocaleStr = {
  en: "Dates: school-notification window and October Preference Exercise are confirmed by MOE for 2026. PSLE-results and S1-Posting dates use 2024-2025 historical convention (MOE has not published 2026 dates as of June 2026). Always verify with the official MOE page below before acting on any date.",
  zh: "日期说明：学校通知窗口与 10 月 Preference Exercise 是 MOE 官方 2026 数据。PSLE 出分与 S1 Posting 日期参照 2024-2025 往年惯例（截至 2026 年 6 月 MOE 尚未公布 2026 具体日期）。任何日期相关决策前 · 务必到下方 MOE 官方页核实。",
  ms: "Tarikh: tetingkap pemberitahuan sekolah dan Pemilihan Keutamaan Oktober disahkan oleh MOE untuk 2026. Tarikh keputusan PSLE dan S1 Posting menggunakan amalan 2024-2025.",
  ta: "தேதிகள்: பள்ளி அறிவிப்பு சாளரம் மற்றும் அக்டோபர் முன்னுரிமை MOE 2026 உறுதிசெய்யப்பட்டுள்ளது. PSLE மற்றும் S1 Posting தேதிகள் 2024-2025 மரபைப் பின்பற்றுகின்றன.",
};

/* ============================ SECTION 1 · TIMELINE ============================ */

const S1_KICKER: LocaleStr = {
  en: "Chapter 1",
  zh: "第一章",
  ms: "Bab 1",
  ta: "அத்தியாயம் 1",
};
const S1_TITLE: LocaleStr = {
  en: "The 4-month decision timeline — August to November",
  zh: "四个月决策时间线——8 月到 11 月",
  ms: "Garis masa keputusan 4 bulan — Ogos hingga November",
  ta: "4 மாத முடிவு கால அட்டவணை — ஆகஸ்ட் முதல் நவம்பர்",
};

const S1_STEPS: ReadonlyArray<{
  when: LocaleStr;
  what: LocaleStr;
  source: "moe-2026" | "convention";
}> = [
  {
    when: {
      en: "17-28 August 2026",
      zh: "2026 年 8 月 17-28 日",
      ms: "17-28 Ogos 2026",
      ta: "2026 ஆகஸ்ட் 17-28",
    },
    what: {
      en: "Each DSA-Sec school notifies its applicants individually (typically by school portal or email). The notification will be one of: Confirmed Offer (CO), Waitlist (WL), or Unsuccessful. This is the school's selection — it is not the final placement.",
      zh: "每所 DSA-Sec 学校通过本校通道（通常是校内门户或邮件）单独通知申请人。通知会是其中之一：Confirmed Offer (CO)、Waitlist (WL)、Unsuccessful。这是学校的选拔结果——不是最终的入学安置。",
      ms: "Setiap sekolah DSA-Sec memberitahu pemohon secara berasingan. Pemberitahuan akan menjadi: Tawaran Sah (CO), Senarai Menunggu (WL), atau Tidak Berjaya.",
      ta: "ஒவ்வொரு DSA-Sec பள்ளியும் விண்ணப்பதாரர்களுக்கு தனித்தனியாக அறிவிக்கிறது. அறிவிப்பு: உறுதிசெய்யப்பட்ட சலுகை (CO), காத்திருப்புப் பட்டியல் (WL), அல்லது தோல்வி.",
    },
    source: "moe-2026",
  },
  {
    when: {
      en: "19-23 October 2026 (Mon-Fri, 9am Mon to 4:30pm Fri)",
      zh: "2026 年 10 月 19-23 日（周一到周五 · 周一 9am 至周五 4:30pm）",
      ms: "19-23 Oktober 2026",
      ta: "2026 அக்டோபர் 19-23",
    },
    what: {
      en: "October School Preference Exercise. You log into the DSA-Sec portal and rank up to 3 of the schools that gave your child a CO or WL. The order determines which CO becomes the final placement. This 5-day window is the single highest-stakes decision in the DSA cycle.",
      zh: "10 月 School Preference Exercise · 登录 DSA-Sec 门户 · 把已给 CO 或 WL 的学校排序（最多 3 所）。排序决定哪个 CO 成为最终安置。这 5 天窗口是整个 DSA 流程中决策权重最大的一次。",
      ms: "Pemilihan Keutamaan Sekolah Oktober. Anda log masuk portal DSA-Sec dan menyusun sehingga 3 sekolah yang memberi CO atau WL. Susunan menentukan tawaran mana menjadi penempatan akhir.",
      ta: "அக்டோபர் பள்ளி முன்னுரிமைப் பயிற்சி. DSA-Sec போர்டலில் உள்நுழைந்து CO அல்லது WL வழங்கிய 3 பள்ளிகளை வரிசைப்படுத்துகிறீர்கள்.",
    },
    source: "moe-2026",
  },
  {
    when: {
      en: "Mid-to-late November 2026 (2025 release: 25 Nov 11am)",
      zh: "2026 年 11 月中下旬（2025 年为 11/25 11am）",
      ms: "Pertengahan-akhir November 2026",
      ta: "2026 நவம்பர் நடு-இறுதி",
    },
    what: {
      en: "PSLE results released. Same day, your DSA-Sec final placement is announced — the algorithm pairs your October preference ranking with your PSLE results to produce the final school. Waitlist applicants find out conversion on the same day.",
      zh: "PSLE 出分。同一天 · DSA-Sec 最终安置公布——算法把 10 月偏好排序与 PSLE 分数配对 · 输出最终中学。Waitlist 候选人同一天揭晓是否转正。",
      ms: "Keputusan PSLE diumumkan. Pada hari yang sama, penempatan akhir DSA-Sec diumumkan.",
      ta: "PSLE முடிவுகள் வெளியிடப்படுகின்றன. அதே நாளில், DSA-Sec இறுதி இடம் அறிவிக்கப்படுகிறது.",
    },
    source: "convention",
  },
  {
    when: {
      en: "7 calendar days after PSLE release (S1 Posting choice window)",
      zh: "PSLE 出分后 7 个日历日（S1 Posting 选校窗口）",
      ms: "7 hari selepas PSLE (tetingkap pilihan S1 Posting)",
      ta: "PSLE க்குப் பிறகு 7 நாட்கள் (S1 Posting தேர்வு)",
    },
    what: {
      en: "S1 Posting choice window opens for families WITHOUT a Confirmed Offer (Unsuccessful + Waitlist not converted + those who chose not to rank any DSA school in October). Pick 6 schools in order of preference. Affiliation rules apply.",
      zh: "S1 Posting 选校窗口开启——给没有 Confirmed Offer 的家庭（Unsuccessful + Waitlist 未转正 + 10 月主动不排序任何 DSA 校的家庭）。按偏好排 6 所学校。Affiliation 规则适用。",
      ms: "Tetingkap pilihan S1 Posting dibuka untuk keluarga TANPA Tawaran Sah. Pilih 6 sekolah mengikut keutamaan.",
      ta: "S1 Posting தேர்வு உறுதிசெய்யப்பட்ட சலுகை இல்லாத குடும்பங்களுக்கு திறக்கிறது.",
    },
    source: "moe-2026",
  },
  {
    when: {
      en: "About 3-4 weeks after PSLE release (2025: 19 Dec 9am)",
      zh: "PSLE 出分后约 3-4 周（2025 年为 12/19 9am）",
      ms: "Kira-kira 3-4 minggu selepas PSLE (2025: 19 Dis 9am)",
      ta: "PSLE க்குப் பிறகு 3-4 வாரங்கள் (2025: டிசம்பர் 19 9am)",
    },
    what: {
      en: "S1 Posting results released. Families learn which secondary school their child is posted to. School-transfer appeal window opens for those who want to appeal the posting result.",
      zh: "S1 Posting 结果公布 · 家庭知道孩子被派到哪所中学。想申诉派位结果的家庭 · 此时进入学校转学申诉窗口。",
      ms: "Keputusan S1 Posting diumumkan. Tetingkap rayuan pertukaran sekolah dibuka.",
      ta: "S1 Posting முடிவுகள் வெளியிடப்படுகின்றன. பள்ளி மாற்ற முறையீட்டு சாளரம் திறக்கிறது.",
    },
    source: "convention",
  },
];

/* ============================ SECTION 2 · CONFIRMED OFFER ============================ */

const S2_KICKER: LocaleStr = {
  en: "Outcome 1 of 4",
  zh: "结果 1 / 4",
  ms: "Keputusan 1 / 4",
  ta: "முடிவு 1 / 4",
};
const S2_TITLE: LocaleStr = {
  en: "Confirmed Offer (CO) — binding once locked, with PSLE caveat",
  zh: "Confirmed Offer (CO)——锁定即约束 · 含 PSLE 注意点",
  ms: "Tawaran Sah (CO) — mengikat setelah dikunci, dengan amaran PSLE",
  ta: "உறுதிசெய்யப்பட்ட சலுகை (CO) — பூட்டியதும் கட்டுப்படுத்தும்",
};

const S2_INTRO: LocaleStr = {
  en: "A Confirmed Offer means the school has chosen your child based on the talent area, subject to the PSLE Posting Group requirement. To make it final you must rank that school in your October preference (top of the list = guaranteed lock-in). Once locked, the binding is substantial.",
  zh: "Confirmed Offer 意味着学校已经按才艺项目选中孩子 · 条件是 PSLE 达到对应 Posting Group。要让 CO 真正生效 · 你必须在 10 月偏好中排上这所学校（排首位 = 必中锁定）。一旦锁定 · 约束相当强。",
  ms: "Tawaran Sah bermakna sekolah telah memilih anak anda berdasarkan bidang bakat, tertakluk kepada syarat Kumpulan Penempatan PSLE.",
  ta: "உறுதிசெய்யப்பட்ட சலுகை அர்த்தம் பள்ளி உங்கள் குழந்தையை திறமை அடிப்படையில் தேர்ந்தெடுத்துள்ளது, PSLE இடம் குழு தேவைக்கு உட்பட்டது.",
};

const S2_BINDS: ReadonlyArray<LocaleStr> = [
  {
    en: "You cannot submit S1 Posting choices. MOE's published rule is explicit — DSA students with a confirmed school are \"not allowed to submit school choices during S1 Posting.\"",
    zh: "不能提交 S1 Posting 志愿 · MOE 官方原文明确：已确认 DSA 录取的学生不允许在 S1 Posting 期间提交选校。",
    ms: "Anda tidak boleh menghantar pilihan S1 Posting.",
    ta: "S1 Posting தேர்வுகளை சமர்ப்பிக்க முடியாது.",
  },
  {
    en: "You cannot take part in the Joint Admissions Exercise (JAE) at this level.",
    zh: "不能参加 Joint Admissions Exercise (JAE)。",
    ms: "Tidak boleh menyertai JAE pada peringkat ini.",
    ta: "JAE-இல் பங்கேற்க முடியாது.",
  },
  {
    en: "You cannot transfer to a different school after PSLE results are released — the placement is final from MOE's side.",
    zh: "PSLE 出分后不能转去其他学校——MOE 视为最终安置。",
    ms: "Tidak boleh berpindah ke sekolah lain selepas keputusan PSLE.",
    ta: "PSLE முடிவுகளுக்குப் பிறகு வேறு பள்ளிக்கு மாற்ற முடியாது.",
  },
  {
    en: "Your child must still sit the PSLE and meet the AL range for the offered school's stream (IP / Express / N(A)). If PSLE falls short, the offer may be downgraded to a different stream within the same school (a Counter-Offer scenario) or rescinded — handled by the school, not MOE.",
    zh: "孩子仍要考 PSLE · 必须达到所录学校流派（IP / Express / N(A)）的 AL 范围。如果 PSLE 不达标 · offer 可能降为同校另一流派（即 Counter-Offer 情形）或被撤回——由学校处理 · 不是 MOE。",
    ms: "Anak anda masih perlu mengambil PSLE dan memenuhi julat AL untuk aliran yang ditawarkan.",
    ta: "உங்கள் குழந்தை PSLE எழுத வேண்டும் மற்றும் வழங்கப்பட்ட பள்ளியின் நீரோட்டத்திற்கான AL வரம்பை அடைய வேண்டும்.",
  },
];

const S2_DECLINE_TITLE: LocaleStr = {
  en: "How to decline a Confirmed Offer",
  zh: "如何拒绝 Confirmed Offer",
  ms: "Cara menolak Tawaran Sah",
  ta: "CO-ஐ எவ்வாறு நிராகரிப்பது",
};

const S2_DECLINE: LocaleStr = {
  en: "If you don't want the CO, simply do not rank that school in the October Preference Exercise. The CO is dropped, and your child falls back to S1 Posting after PSLE. There is no formal \"reject\" button — the decision is the absence of ranking.",
  zh: "如果不想接受 CO · 在 10 月 Preference Exercise 中不排这所学校就行。CO 自动失效 · 孩子在 PSLE 后走 S1 Posting。没有正式的『拒绝』按钮——决定 = 不排序。",
  ms: "Jika anda tidak mahu CO, jangan susun sekolah itu dalam Pemilihan Keutamaan Oktober. CO digugurkan.",
  ta: "CO-ஐ விரும்பவில்லை என்றால், அக்டோபர் முன்னுரிமையில் அந்த பள்ளியை வரிசைப்படுத்த வேண்டாம்.",
};

const S2_MULTI_TITLE: LocaleStr = {
  en: "Multiple Confirmed Offers — what to rank first",
  zh: "拿到多份 Confirmed Offer — 先排谁",
  ms: "Pelbagai Tawaran Sah — apa untuk disusun dahulu",
  ta: "பல உறுதிசெய்யப்பட்ட சலுகைகள் — முதலில் வரிசைப்படுத்த வேண்டியது",
};

const S2_MULTI: LocaleStr = {
  en: "Whichever school you rank highest among multiple COs becomes the final placement (assuming PSLE meets that school's Posting Group). This is the moment where families do their final fit assessment: academic stream alignment, CCA programme depth, distance from home, sibling priority, gut feel after open house visits. There is no \"safer\" ranking — top of the list wins.",
  zh: "拿到多份 CO 时 · 你在 10 月偏好里排最高的那所成为最终安置（前提：PSLE 达到该校的 Posting Group）。这是家庭做最后匹配判断的时刻：学术流派对应、CCA 项目深度、离家距离、兄弟姐妹优先、开放日参观后的直觉。没有『更保险』的排法——排最高的赢。",
  ms: "Sekolah yang anda susun paling tinggi antara beberapa CO menjadi penempatan akhir.",
  ta: "பல CO-களில் நீங்கள் மிக உயர்வாக வரிசைப்படுத்தும் பள்ளி இறுதி இடமாகிறது.",
};

/* ============================ SECTION 3 · WAITLIST ============================ */

const S3_KICKER: LocaleStr = {
  en: "Outcome 2 of 4",
  zh: "结果 2 / 4",
  ms: "Keputusan 2 / 4",
  ta: "முடிவு 2 / 4",
};
const S3_TITLE: LocaleStr = {
  en: "Waitlist (WL) — roughly half convert, but you must rank it first",
  zh: "Waitlist (WL)——历史上约一半转正 · 但必须排首位才有机会",
  ms: "Senarai Menunggu (WL) — kira-kira separuh menukar, tetapi mesti disusun dahulu",
  ta: "காத்திருப்புப் பட்டியல் (WL) — சுமார் பாதி மாறுகின்றன, ஆனால் முதலில் வரிசைப்படுத்த வேண்டும்",
};

const S3_BODY: ReadonlyArray<LocaleStr> = [
  {
    en: "A Waitlist outcome means the school accepted your child contingent on a spot opening — typically because a candidate above your child in the order declined their CO. WL conversion is announced on the same day as PSLE results in mid-to-late November.",
    zh: "Waitlist 意味着学校在有名额空出时录取孩子——通常是因为排在孩子前面的候选人拒绝了 CO。WL 转正与 PSLE 同日（11 月中下旬）公布。",
    ms: "Senarai Menunggu bermaksud sekolah menerima anak anda dengan syarat tempat dibuka. Penukaran WL diumumkan pada hari yang sama dengan keputusan PSLE.",
    ta: "காத்திருப்புப் பட்டியல் என்றால் பள்ளி உங்கள் குழந்தையை இடம் திறக்கும் நிபந்தனையில் ஏற்றுக்கொண்டது.",
  },
  {
    en: "MOE has publicly stated that about half of Waitlist candidates ultimately receive offers in past cycles. This is not a guarantee — it's a historical pattern. Whether your child converts depends on how many candidates above them on the same school's list decline their COs in October.",
    zh: "MOE 公开数据显示 · 往年 Waitlist 候选人中约一半最终收到 offer。这不是保证 · 是历史模式。能否转正取决于同校列表中排在孩子前面的人在 10 月有多少人拒绝 CO。",
    ms: "MOE telah menyatakan bahawa kira-kira separuh calon Senarai Menunggu akhirnya menerima tawaran dalam kitaran lalu.",
    ta: "MOE பகிரங்கமாக கடந்த சுற்றுகளில் சுமார் பாதி காத்திருப்பு வேட்பாளர்கள் இறுதியில் சலுகைகளைப் பெறுகின்றனர் என்று கூறியுள்ளது.",
  },
];

const S3_CRITICAL_TITLE: LocaleStr = {
  en: "The critical Waitlist rule: rank the WL school first to have a chance",
  zh: "Waitlist 关键规则：必须排首位才有机会",
  ms: "Peraturan kritikal Senarai Menunggu: susun sekolah WL dahulu untuk peluang",
  ta: "முக்கிய விதி: வாய்ப்புக்கு WL பள்ளியை முதலில் வரிசைப்படுத்த வேண்டும்",
};

const S3_CRITICAL: LocaleStr = {
  en: "If you also hold a CO at another school, you face a real choice: rank the WL school first (you'll convert if a spot opens; you fall back to your CO if it doesn't — your CO is protected) or rank your CO first (you lock the CO and forfeit the WL chance). MOE published this protection explicitly — you cannot lose a CO by going after a WL, but you must rank the WL above the CO to keep the WL pathway open.",
  zh: "如果同时还拿到另一所学校的 CO · 你面临真实选择：把 WL 校排首位（有名额开就转正；没开就回到 CO——CO 受保护）· 或把 CO 排首位（锁定 CO · 放弃 WL 机会）。MOE 明确写出这条保护规则——追 WL 不会失去 CO · 但要保留 WL 机会必须把 WL 排在 CO 之上。",
  ms: "Jika anda juga memegang CO di sekolah lain, anda menghadapi pilihan: susun WL dahulu (anda menukar jika tempat dibuka; CO anda dilindungi) atau susun CO dahulu.",
  ta: "மற்றொரு பள்ளியில் CO-வும் இருந்தால், உண்மையான தேர்வு: WL-ஐ முதலில் வரிசைப்படுத்துங்கள் (இடம் திறந்தால் மாற்றம்; CO பாதுகாக்கப்படுகிறது).",
};

/* ============================ SECTION 4 · COUNTER-OFFER ============================ */

const S4_KICKER: LocaleStr = {
  en: "Outcome 3 of 4",
  zh: "结果 3 / 4",
  ms: "Keputusan 3 / 4",
  ta: "முடிவு 3 / 4",
};
const S4_TITLE: LocaleStr = {
  en: "Counter-Offer — usually within dual-track schools (IP and Express)",
  zh: "Counter-Offer——通常在同校双轨内（IP 与 Express）",
  ms: "Tawaran Balas — biasanya dalam sekolah dwi-trek",
  ta: "எதிர் சலுகை — பொதுவாக இரட்டை-பாதை பள்ளிகளில்",
};

const S4_BODY: ReadonlyArray<LocaleStr> = [
  {
    en: "A Counter-Offer typically arises at schools that run both an Integrated Programme (IP) stream and a 4-year Express stream — Anglo-Chinese School (Independent), Dunman High, Catholic High, and others. If you apply for IP but the school decides the candidate is a better fit for the Express stream, they may issue a Counter-Offer for Express at the same school.",
    zh: "Counter-Offer 常发生在同时开办 IP 与 4 年制 Express 两套流派的学校——ACS(I)、Dunman High、Catholic High 等。如果你申请 IP · 但学校判断孩子更适合 Express · 可能给同校 Express 流派的 Counter-Offer。",
    ms: "Tawaran Balas biasanya berlaku di sekolah yang menjalankan kedua-dua aliran IP dan Express selama 4 tahun.",
    ta: "எதிர் சலுகை பொதுவாக ஒருங்கிணைந்த திட்டம் (IP) மற்றும் 4-ஆண்டு Express இரண்டையும் நடத்தும் பள்ளிகளில் ஏற்படுகிறது.",
  },
  {
    en: "Accepting a Counter-Offer follows the same rules as accepting a Confirmed Offer — you rank the school in the October preference. Once locked, the same binding rules apply: no S1 Posting, no JAE, no transfer after PSLE. The stream (Express instead of IP) is what changes, not the school.",
    zh: "接受 Counter-Offer 的规则与接受 CO 一致——在 10 月排这所学校。一旦锁定 · 适用同一套约束：不能 S1 Posting · 不能 JAE · PSLE 后不能转校。改变的是流派（从 IP 变 Express）· 不是学校。",
    ms: "Menerima Tawaran Balas mengikuti peraturan yang sama seperti menerima Tawaran Sah.",
    ta: "எதிர் சலுகையை ஏற்றுக்கொள்வது CO ஏற்பது போலவே செயல்படுகிறது.",
  },
  {
    en: "A separate, school-specific situation: cross-school Counter-Offers between affiliated schools (e.g. ACS(I) → ACS(BR)). This is not in MOE's published DSA rules and is handled case-by-case by the schools — confirm directly with each school's admissions office if your child is in this scenario.",
    zh: "另一种特殊情况：affiliated school 之间的跨校 Counter-Offer（例：ACS(I) → ACS(BR)）。这不在 MOE 公开 DSA 规则中 · 由学校 case-by-case 处理——若孩子遇到这种情况 · 直接联系学校招生办确认。",
    ms: "Situasi khusus sekolah: Tawaran Balas merentas sekolah antara sekolah berafiliasi.",
    ta: "தனி பள்ளி-குறிப்பிட்ட சூழ்நிலை: இணைப்பு பள்ளிகளுக்கு இடையில் குறுக்கு-பள்ளி எதிர் சலுகைகள்.",
  },
];

/* ============================ SECTION 5 · UNSUCCESSFUL ============================ */

const S5_KICKER: LocaleStr = {
  en: "Outcome 4 of 4",
  zh: "结果 4 / 4",
  ms: "Keputusan 4 / 4",
  ta: "முடிவு 4 / 4",
};
const S5_TITLE: LocaleStr = {
  en: "Unsuccessful — automatic S1 Posting, no appeal",
  zh: "Unsuccessful——自动走 S1 Posting · 无 DSA 申诉",
  ms: "Tidak Berjaya — automatik S1 Posting, tiada rayuan",
  ta: "தோல்வி — தானியங்கி S1 Posting, மேல்முறையீடு இல்லை",
};

const S5_BODY: ReadonlyArray<LocaleStr> = [
  {
    en: "An Unsuccessful outcome means the school did not select your child. There is no formal MOE appeal channel for a DSA-Sec outcome — DSA is a school-led selection and the school's decision is final. Some schools share brief feedback if asked politely, but MOE does not require it.",
    zh: "Unsuccessful 意味着学校未选中孩子。DSA-Sec 结果没有 MOE 正式申诉通道——DSA 是学校自主选拔 · 学校决定为终审。部分学校如礼貌询问会简短反馈 · 但 MOE 不要求。",
    ms: "Keputusan Tidak Berjaya bermakna sekolah tidak memilih anak anda. Tiada saluran rayuan rasmi MOE.",
    ta: "தோல்வி முடிவு என்றால் பள்ளி உங்கள் குழந்தையை தேர்ந்தெடுக்கவில்லை. முறையான MOE மேல்முறையீடு வழி இல்லை.",
  },
  {
    en: "Your child automatically proceeds to S1 Posting after PSLE results — covered in detail in the next section. The DSA experience itself still has value: many primary-school candidates who were Unsuccessful at DSA-Sec stage go on to take strong roles in their posted school's CCAs, where the prior trial and interview experience translates well.",
    zh: "孩子自动在 PSLE 出分后进入 S1 Posting · 下一节详细讲。DSA 经验本身仍有价值：很多 DSA-Sec 阶段 Unsuccessful 的小学生 · 在派位后的学校 CCA 选拔中表现出色 · 之前的 trial 与面试经验直接派上用场。",
    ms: "Anak anda secara automatik meneruskan ke S1 Posting selepas keputusan PSLE.",
    ta: "உங்கள் குழந்தை PSLE முடிவுகளுக்குப் பிறகு தானாக S1 Posting-க்கு செல்கிறது.",
  },
];

/* ============================ SECTION 6 · OCTOBER PREFERENCE EXERCISE ============================ */

const S6_KICKER: LocaleStr = {
  en: "Chapter 6 · Operational",
  zh: "第六章 · 实操",
  ms: "Bab 6 · Operasi",
  ta: "அத்தியாயம் 6 · செயல்பாடு",
};
const S6_TITLE: LocaleStr = {
  en: "October Preference Exercise — the 5-day decision",
  zh: "10 月 Preference Exercise——5 天决策窗口",
  ms: "Pemilihan Keutamaan Oktober — keputusan 5 hari",
  ta: "அக்டோபர் முன்னுரிமைப் பயிற்சி — 5 நாள் முடிவு",
};

const S6_RULES: ReadonlyArray<{
  title: LocaleStr;
  body: LocaleStr;
}> = [
  {
    title: {
      en: "Window: 9am Mon 19 Oct to 4:30pm Fri 23 Oct 2026",
      zh: "窗口：周一 10/19 9am 到周五 10/23 4:30pm 2026",
      ms: "Tetingkap: 9pagi Isnin 19 Okt hingga 4:30ptg Jumaat 23 Okt 2026",
      ta: "சாளரம்: திங்கள் அக் 19 9am முதல் வெள்ளி அக் 23 4:30pm",
    },
    body: {
      en: "Submitted via the DSA-Sec online portal (login details sent earlier by MOE / school). You can revise the submission as many times as you want within the window — the last submitted version before the deadline is the one used.",
      zh: "通过 DSA-Sec 在线门户提交（登录信息 MOE / 学校之前已发）。窗口内可以反复修改 · 截止前最后一次提交版本生效。",
      ms: "Dihantar melalui portal dalam talian DSA-Sec. Anda boleh menyemak semula penyerahan dalam tetingkap.",
      ta: "DSA-Sec ஆன்லைன் போர்டல் வழியாக சமர்ப்பிக்கப்படுகிறது.",
    },
  },
  {
    title: {
      en: "Maximum 3 schools can be ranked",
      zh: "最多排 3 所学校",
      ms: "Maksimum 3 sekolah boleh disusun",
      ta: "அதிகபட்சம் 3 பள்ளிகள் வரிசைப்படுத்தலாம்",
    },
    body: {
      en: "This is a DSA-specific number — different from the 6 schools in S1 Posting later. You can only rank schools that gave your child a Confirmed Offer or Waitlist. You do not need to rank all 3 — rank only the schools you genuinely want.",
      zh: "这是 DSA 特定数字——与后面 S1 Posting 的 6 校不同。只能排已给 CO 或 WL 的学校。不必排满 3 所——只排你真的想要的。",
      ms: "Ini nombor khusus DSA — berbeza dari 6 sekolah dalam S1 Posting kemudian.",
      ta: "இது DSA-குறிப்பிட்ட எண் — பின்னர் வரும் S1 Posting-இல் 6 பள்ளிகளிலிருந்து வேறுபட்டது.",
    },
  },
  {
    title: {
      en: "Algorithm: top-ranked CO locks; top-ranked WL gives chance with CO protected",
      zh: "算法：排首位的 CO 锁定 · 排首位的 WL 给机会同时 CO 受保护",
      ms: "Algoritma: CO teratas dikunci; WL teratas memberi peluang dengan CO dilindungi",
      ta: "வழிமுறை: முதலில் வரிசைப்படுத்தப்பட்ட CO பூட்டுகிறது",
    },
    body: {
      en: "If a Confirmed Offer school is ranked first, it locks in (subject to PSLE Posting Group). If a Waitlist school is ranked first and converts, that becomes the placement; if it doesn't convert, the next school (which should be a CO if you have one) takes over. This is why CO + WL families almost always benefit from ranking the WL first.",
      zh: "如果首位是 CO 校 · 锁定（前提 PSLE 达 Posting Group）。如果首位是 WL 校 · 转正了就是它；没转正 · 第二位（最好是 CO）接管。这就是为什么 CO + WL 家庭通常应该把 WL 排首位。",
      ms: "Jika sekolah CO disusun pertama, ia dikunci. Jika sekolah WL disusun pertama dan menukar, itu menjadi penempatan.",
      ta: "முதலில் CO பள்ளி வரிசைப்படுத்தப்பட்டால், அது பூட்டுகிறது.",
    },
  },
  {
    title: {
      en: "Not ranking a school means declining it",
      zh: "不排序某校 = 拒绝该校",
      ms: "Tidak menyusun sekolah bermaksud menolaknya",
      ta: "ஒரு பள்ளியை வரிசைப்படுத்தாதது அதை மறுப்பது",
    },
    body: {
      en: "If you don't rank a school that gave a CO or WL, you are effectively declining it — that school cannot recover your child later. The decision is permanent for the 2026 cycle.",
      zh: "如果不排序某给了 CO / WL 的学校 · 等于拒绝——该校之后不能再录用孩子。决定对 2026 周期是永久性的。",
      ms: "Jika anda tidak menyusun sekolah yang memberi CO atau WL, anda sebenarnya menolaknya.",
      ta: "CO அல்லது WL வழங்கிய பள்ளியை வரிசைப்படுத்தாவிட்டால், நீங்கள் அதை மறுக்கிறீர்கள்.",
    },
  },
];

/* ============================ SECTION 7 · S1 POSTING ============================ */

const S7_KICKER: LocaleStr = {
  en: "Chapter 7 · If DSA didn't lock in",
  zh: "第七章 · DSA 未锁定后",
  ms: "Bab 7 · Jika DSA tidak terkunci",
  ta: "அத்தியாயம் 7 · DSA பூட்டவில்லை என்றால்",
};
const S7_TITLE: LocaleStr = {
  en: "S1 Posting — the path for families without a Confirmed Offer",
  zh: "S1 Posting——没拿到 CO 的家庭走这条",
  ms: "S1 Posting — laluan untuk keluarga tanpa Tawaran Sah",
  ta: "S1 Posting — உறுதிசெய்யப்பட்ட சலுகை இல்லாத குடும்பங்களுக்கான பாதை",
};

const S7_RULES: ReadonlyArray<{
  title: LocaleStr;
  body: LocaleStr;
}> = [
  {
    title: {
      en: "Who goes through S1 Posting",
      zh: "谁走 S1 Posting",
      ms: "Siapa yang melalui S1 Posting",
      ta: "S1 Posting வழியாக யார் செல்கிறார்கள்",
    },
    body: {
      en: "Three groups: (1) families who got Unsuccessful from every DSA school they applied to; (2) Waitlist candidates who did not convert; (3) families who chose not to rank any DSA school in October even though they had a CO or WL.",
      zh: "三类：(1) 所有申请的 DSA 校都 Unsuccessful 的家庭；(2) Waitlist 未转正的；(3) 虽有 CO 或 WL 但 10 月主动不排序的。",
      ms: "Tiga kumpulan: keluarga Tidak Berjaya, calon Senarai Menunggu yang tidak menukar, dan keluarga yang memilih untuk tidak menyusun.",
      ta: "மூன்று குழுக்கள்.",
    },
  },
  {
    title: {
      en: "6 schools can be ranked in order of preference",
      zh: "按偏好排 6 所学校",
      ms: "6 sekolah boleh disusun mengikut keutamaan",
      ta: "6 பள்ளிகள் முன்னுரிமை வரிசையில் வரிசைப்படுத்தலாம்",
    },
    body: {
      en: "Choose 6 schools that are realistic given the child's expected AL score. The MOE \"PSLE COP\" tool and the historical cut-off pages help calibrate which schools your child can likely access. The Posting Group on the result slip determines which streams are available (PG1 / PG2 / PG3).",
      zh: "按孩子预期 AL 分实际可达范围选 6 所。MOE 的 PSLE COP 工具与历史录取分数页帮你校准。结果单上的 Posting Group 决定可入哪些流派（PG1 / PG2 / PG3）。",
      ms: "Pilih 6 sekolah yang realistik berdasarkan skor AL yang dijangkakan anak.",
      ta: "எதிர்பார்க்கப்பட்ட AL மதிப்பெண்ணுக்கு வாஸ்தவமான 6 பள்ளிகளைத் தேர்வுசெய்க.",
    },
  },
  {
    title: {
      en: "Affiliation priority — but no AL bonus",
      zh: "Affiliation 优先 · 但无 AL 减免",
      ms: "Keutamaan afiliasi — tetapi tiada bonus AL",
      ta: "இணைப்பு முன்னுரிமை — ஆனால் AL போனஸ் இல்லை",
    },
    body: {
      en: "If your child attended an affiliated primary school, you must list the affiliated secondary first and meet the Affiliation Minimum Requirement (AMR). The school reserves up to 20% of places for non-affiliated applicants. The old PSLE T-score \"-2 bonus\" system for affiliation is no longer in effect under the AL scoring system.",
      zh: "如果孩子上的是 affiliated 小学 · 必须把 affiliated 中学排首位 · 并达到 Affiliation Minimum Requirement (AMR)。学校最多保留 20% 名额给非 affiliated 申请人。老的 PSLE T-score 『减 2 分 affiliation 加分』制度在 AL 评分系统下已废止。",
      ms: "Jika anak anda menghadiri sekolah rendah berafiliasi, anda mesti menyenaraikan sekolah menengah berafiliasi dahulu.",
      ta: "உங்கள் குழந்தை இணைப்பு தொடக்கப் பள்ளியில் கல்வி பெற்றிருந்தால், இணைப்பு இடைநிலை பள்ளியை முதலில் பட்டியலிட வேண்டும்.",
    },
  },
  {
    title: {
      en: "School Transfer Appeal window",
      zh: "学校转学申诉窗口",
      ms: "Tetingkap Rayuan Pertukaran Sekolah",
      ta: "பள்ளி மாற்ற மேல்முறையீட்டு சாளரம்",
    },
    body: {
      en: "After S1 Posting results are released (about 3-4 weeks after PSLE), MOE opens a window for families to appeal their posting. Grounds are limited — typically medical, distance, or specific subject offerings. The window's specific 2026 dates are not yet published by MOE. Appeals are evaluated by the requested school, not granted automatically.",
      zh: "S1 Posting 结果公布后（PSLE 出分后约 3-4 周）· MOE 开放转学申诉窗口。申诉理由有限——通常是医疗、距离、特定科目可用性。2026 具体窗口日期 MOE 尚未公布。申诉由被请求学校评估 · 不会自动批准。",
      ms: "Selepas keputusan S1 Posting dikeluarkan, MOE membuka tetingkap untuk keluarga merayu.",
      ta: "S1 Posting முடிவுகள் வெளியிடப்பட்ட பிறகு, MOE ஒரு சாளரத்தைத் திறக்கிறது.",
    },
  },
];

/* ============================ SECTION 8 · PSLE INTERACTION ============================ */

const S8_KICKER: LocaleStr = {
  en: "Chapter 8 · PSLE × DSA",
  zh: "第八章 · PSLE × DSA",
  ms: "Bab 8 · PSLE × DSA",
  ta: "அத்தியாயம் 8 · PSLE × DSA",
};
const S8_TITLE: LocaleStr = {
  en: "PSLE still matters — the AL gate behind every Confirmed Offer",
  zh: "PSLE 依然重要——每个 CO 背后的 AL 门",
  ms: "PSLE masih penting — pintu AL di sebalik setiap Tawaran Sah",
  ta: "PSLE இன்னும் முக்கியம் — ஒவ்வொரு CO-வுக்கும் பின்னால் உள்ள AL வாயில்",
};

const S8_BODY: ReadonlyArray<LocaleStr> = [
  {
    en: "A common misunderstanding: \"DSA confirmed = PSLE doesn't matter.\" That is wrong. Every Confirmed Offer is conditional on the PSLE Posting Group requirement of the offered school and stream. PSLE is still taken, marked, and used to verify the offer.",
    zh: "常见误解：『DSA 确认了 PSLE 就不重要了』。错。每个 CO 都条件于所录学校与流派的 PSLE Posting Group 要求。PSLE 仍要考、要批、被用来验证 offer 有效性。",
    ms: "Salah faham biasa: \"DSA disahkan = PSLE tidak penting.\" Itu salah.",
    ta: "பொதுவான தவறான புரிதல்: \"DSA உறுதிசெய்யப்பட்டது = PSLE முக்கியமில்லை.\" அது தவறு.",
  },
  {
    en: "Posting Group requirements at a glance: PG1 covers AL 4-20 (Express stream eligible), PG2 covers AL 21-22 (Express or N(A) eligible), PG3 covers AL 23-30 (N(A) or N(T) eligible). An IP-track school will require a stricter cut-off, usually well within PG1 — confirm each school's IP Posting Group threshold via the school's own page.",
    zh: "Posting Group 大致要求：PG1 涵盖 AL 4-20（可入 Express）· PG2 涵盖 AL 21-22（可入 Express 或 N(A)）· PG3 涵盖 AL 23-30（可入 N(A) 或 N(T)）。IP 流派学校要求更严 · 通常 PG1 内偏低位——具体每校 IP Posting Group 阈值 · 查学校本身页面。",
    ms: "Keperluan Kumpulan Penempatan sepintas: PG1 meliputi AL 4-20, PG2 meliputi AL 21-22, PG3 meliputi AL 23-30.",
    ta: "இடம் குழு தேவைகள்: PG1 AL 4-20 உள்ளடக்கியது, PG2 AL 21-22 உள்ளடக்கியது, PG3 AL 23-30 உள்ளடக்கியது.",
  },
  {
    en: "If PSLE falls short of the offered stream's requirement, two scenarios occur. (1) Same-school down-stream: the school may absorb the child into a lower stream within the same school (e.g. IP offer becomes Express at the same school). (2) Offer rescinded: the school decides the candidate no longer fits even the lower stream. This is handled school-by-school — MOE has no central rule. Confirm with the offering school's admissions office in advance to understand their policy.",
    zh: "如果 PSLE 不达所录流派要求 · 两种情形：(1) 同校降流：学校可能把孩子吸纳到同校的较低流派（例 IP offer 变同校 Express）；(2) Offer 被撤回：学校判断孩子连较低流派都不合适。这由学校 case-by-case 处理——MOE 无统一规则。提前向录取学校招生办了解其政策。",
    ms: "Jika PSLE tidak mencapai keperluan aliran yang ditawarkan, dua senario berlaku.",
    ta: "PSLE வழங்கப்பட்ட நீரோட்டத்தின் தேவையை அடையவில்லை என்றால், இரண்டு சூழ்நிலைகள் ஏற்படுகின்றன.",
  },
];

/* ============================ BOTTOM CTA ============================ */

const BOTTOM_TITLE: LocaleStr = {
  en: "While you wait for results",
  zh: "等结果期间",
  ms: "Semasa anda menunggu keputusan",
  ta: "முடிவுகளுக்காக காத்திருக்கும் போது",
};

const BOTTOM_BODY: LocaleStr = {
  en: "The half-year between application close and DSA outcomes is the slog: the interview-and-trial window from June to August, then the wait through September and most of October. The pages below cover the prep side; come back here in late August when school notifications start landing.",
  zh: "申请截止到结果公布的半年是最难熬的：6 月到 8 月是面试与试训窗口 · 9 月到 10 月大部分是等待。下面的页面覆盖备战部分；8 月底学校开始通知时 · 回来这一页。",
  ms: "Setengah tahun antara penutupan permohonan dan keputusan DSA adalah masa yang sukar.",
  ta: "விண்ணப்பம் முடிந்து DSA முடிவுகள் வரும் வரை அரை ஆண்டு கடினமான காத்திருப்பு.",
};

const BOTTOM_CTA1: LocaleStr = {
  en: "Open Interview & Trial prep",
  zh: "查看面试与试训准备",
  ms: "Buka persediaan Temu Duga & Percubaan",
  ta: "நேர்காணல் & சோதனை தயாரிப்பு",
};

const BOTTOM_CTA2: LocaleStr = {
  en: "See the full 2026 timeline",
  zh: "查看完整 2026 时间线",
  ms: "Lihat garis masa 2026 penuh",
  ta: "முழு 2026 கால அட்டவணை",
};

/* ============================ BREADCRUMB + RELATED ============================ */

const BC_GUIDE: LocaleStr = { en: "DSA Guide", zh: "DSA 指南", ms: "Panduan DSA", ta: "DSA வழிகாட்டி" };
const BC_HERE: LocaleStr = { en: "4 Outcomes", zh: "4 种结果", ms: "4 Keputusan", ta: "4 முடிவுகள்" };

const REL_KICKER: LocaleStr = { en: "Related reference", zh: "相关参考", ms: "Rujukan berkaitan", ta: "தொடர்புடைய குறிப்பு" };
const REL_HEADING: LocaleStr = {
  en: "What parents read next after understanding the four outcomes",
  zh: "理解 4 种结果后家长继续看的内容",
  ms: "Apa yang ibu bapa baca selepas memahami empat keputusan",
  ta: "நான்கு முடிவுகளைப் புரிந்த பிறகு பெற்றோர் என்ன படிக்கிறார்கள்",
};
const R1_T: LocaleStr = { en: "2026 timeline", zh: "2026 时间线", ms: "Garis masa 2026", ta: "2026 கால அட்டவணை" };
const R1_B: LocaleStr = {
  en: "When results land in November, and what each phase decides leading up to it.",
  zh: "11 月放榜 · 之前各阶段在决定什么。",
  ms: "Bila keputusan tiba pada November dan apa setiap fasa menentukan.",
  ta: "நவம்பரில் முடிவுகள் வரும்போது, ஒவ்வொரு கட்டமும் என்ன தீர்மானிக்கிறது.",
};
const R2_T: LocaleStr = {
  en: "What DSA actually is",
  zh: "DSA 到底是什么",
  ms: "Apakah DSA sebenarnya",
  ta: "DSA உண்மையில் என்ன",
};
const R2_B: LocaleStr = {
  en: "How DSA × PSLE interact, AL ≤ 22 in practice, what counter-offers mean.",
  zh: "DSA × PSLE 如何互动 · AL ≤ 22 实际意义 · counter-offer 是什么。",
  ms: "Bagaimana DSA × PSLE berinteraksi, AL ≤ 22 dalam praktik.",
  ta: "DSA × PSLE எவ்வாறு தொடர்பு கொள்கிறது, AL ≤ 22.",
};
const R3_T: LocaleStr = { en: "12 parent FAQs", zh: "12 个家长常见问题", ms: "12 FAQ ibu bapa", ta: "12 பெற்றோர் கேள்விகள்" };
const R3_B: LocaleStr = {
  en: "Specific answers to the questions families ask after results — appeal, S1 Posting, deferring acceptance.",
  zh: "放榜后家长真问的问题：申诉、S1 Posting、推迟接受。",
  ms: "Jawapan kepada soalan ibu bapa selepas keputusan.",
  ta: "முடிவுகளுக்குப் பிறகு குடும்பங்கள் கேட்கும் கேள்விகளுக்கான பதில்கள்.",
};

/* ============================ COMPONENT ============================ */

export function DsaResultsPageBody() {
  const { locale } = useLanguage();

  return (
    <>
      <SiteHeader />
      <Breadcrumb
        items={[
          { label: pick(BC_GUIDE, locale), href: "/dsa-guide" },
          { label: pick(BC_HERE, locale) },
        ]}
      />
      <main className="bg-surface">
        {/* ── HERO ── */}
        <section className="bg-hero-mesh">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
              {pick(KICKER, locale)}
            </p>
            <h1
              style={{ textTransform: "none" }}
              className="font-display text-3xl font-extrabold leading-tight tracking-tight text-intellectual sm:text-4xl lg:text-5xl"
            >
              {pick(TITLE, locale)}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-intellectual-muted">
              {pick(SUBTITLE, locale)}
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-champagne/40 bg-champagne-subtle/40 p-4">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-champagne-dark" aria-hidden />
              <p className="text-[12px] leading-relaxed text-slate-700">{pick(DISCLAIMER, locale)}</p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* ── SECTION 1 · TIMELINE ── */}
          <section className="py-12 sm:py-14">
            <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
              {pick(S1_KICKER, locale)}
            </p>
            <h2
              style={{ textTransform: "none" }}
              className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
            >
              {pick(S1_TITLE, locale)}
            </h2>
            <ol className="mt-6 space-y-4">
              {S1_STEPS.map((step, i) => (
                <li key={i} className="rounded-2xl border border-intellectual/10 bg-white p-5 shadow-soft sm:p-6">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-intellectual text-[12px] font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="font-display text-[15px] font-bold text-intellectual">{pick(step.when, locale)}</span>
                    <span
                      className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold tracking-[0.06em] normal-case ${
                        step.source === "moe-2026"
                          ? "bg-intellectual text-white"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {step.source === "moe-2026"
                        ? locale === "zh"
                          ? "MOE 2026 官方"
                          : locale === "ms"
                          ? "MOE 2026"
                          : locale === "ta"
                          ? "MOE 2026"
                          : "MOE 2026 confirmed"
                        : locale === "zh"
                        ? "往年惯例"
                        : locale === "ms"
                        ? "Konvensyen lalu"
                        : locale === "ta"
                        ? "முந்தைய மரபு"
                        : "Per past years"}
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{pick(step.what, locale)}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ── SECTION 2 · CONFIRMED OFFER ── */}
          <section className="py-12 sm:py-14">
            <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
              {pick(S2_KICKER, locale)}
            </p>
            <h2
              style={{ textTransform: "none" }}
              className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
            >
              <CheckCircle2 className="mr-2 inline-block h-7 w-7 text-intellectual" aria-hidden />
              {pick(S2_TITLE, locale)}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{pick(S2_INTRO, locale)}</p>

            <div className="mt-6 rounded-2xl bg-intellectual p-6 text-white shadow-card sm:p-8">
              <h3
                style={{ textTransform: "none" }}
                className="font-display text-[17px] font-bold text-champagne-light"
              >
                {locale === "zh"
                  ? "锁定后的约束"
                  : locale === "ms"
                  ? "Apa yang mengikat setelah dikunci"
                  : locale === "ta"
                  ? "பூட்டியதும் கட்டுப்படுத்தும்"
                  : "What lock-in binds you to"}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {S2_BINDS.map((b, i) => (
                  <li key={i} className="flex gap-2 text-[14px] leading-relaxed text-white/85">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
                    <span>{pick(b, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3
                  style={{ textTransform: "none" }}
                  className="font-display text-[15px] font-bold text-intellectual"
                >
                  {pick(S2_DECLINE_TITLE, locale)}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{pick(S2_DECLINE, locale)}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3
                  style={{ textTransform: "none" }}
                  className="font-display text-[15px] font-bold text-intellectual"
                >
                  {pick(S2_MULTI_TITLE, locale)}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{pick(S2_MULTI, locale)}</p>
              </div>
            </div>
          </section>

          {/* ── SECTION 3 · WAITLIST ── */}
          <section className="py-12 sm:py-14">
            <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
              {pick(S3_KICKER, locale)}
            </p>
            <h2
              style={{ textTransform: "none" }}
              className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
            >
              <Clock4 className="mr-2 inline-block h-7 w-7 text-champagne-dark" aria-hidden />
              {pick(S3_TITLE, locale)}
            </h2>
            <div className="mt-4 space-y-4">
              {S3_BODY.map((p, i) => (
                <p key={i} className="text-[14.5px] leading-relaxed text-slate-700">
                  {pick(p, locale)}
                </p>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border-l-4 border-champagne bg-white p-5 shadow-soft sm:p-6">
              <h3
                style={{ textTransform: "none" }}
                className="flex items-center gap-2 font-display text-[16px] font-bold text-intellectual"
              >
                <ShieldCheck className="h-5 w-5 text-champagne-dark" aria-hidden />
                {pick(S3_CRITICAL_TITLE, locale)}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-700">{pick(S3_CRITICAL, locale)}</p>
            </div>
          </section>

          {/* ── SECTION 4 · COUNTER-OFFER ── */}
          <section className="py-12 sm:py-14">
            <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
              {pick(S4_KICKER, locale)}
            </p>
            <h2
              style={{ textTransform: "none" }}
              className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
            >
              <GitBranch className="mr-2 inline-block h-7 w-7 text-intellectual" aria-hidden />
              {pick(S4_TITLE, locale)}
            </h2>
            <div className="mt-4 space-y-4">
              {S4_BODY.map((p, i) => (
                <p key={i} className="text-[14.5px] leading-relaxed text-slate-700">
                  {pick(p, locale)}
                </p>
              ))}
            </div>
          </section>

          {/* ── SECTION 5 · UNSUCCESSFUL ── */}
          <section className="py-12 sm:py-14">
            <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
              {pick(S5_KICKER, locale)}
            </p>
            <h2
              style={{ textTransform: "none" }}
              className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
            >
              <XCircle className="mr-2 inline-block h-7 w-7 text-slate-500" aria-hidden />
              {pick(S5_TITLE, locale)}
            </h2>
            <div className="mt-4 space-y-4">
              {S5_BODY.map((p, i) => (
                <p key={i} className="text-[14.5px] leading-relaxed text-slate-700">
                  {pick(p, locale)}
                </p>
              ))}
            </div>
          </section>

          {/* ── SECTION 6 · OCTOBER PREFERENCE EXERCISE ── */}
          <section className="py-12 sm:py-14">
            <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
              {pick(S6_KICKER, locale)}
            </p>
            <h2
              style={{ textTransform: "none" }}
              className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
            >
              <ListOrdered className="mr-2 inline-block h-7 w-7 text-intellectual" aria-hidden />
              {pick(S6_TITLE, locale)}
            </h2>
            <div className="mt-6 space-y-3">
              {S6_RULES.map((r, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
                  <h3
                    style={{ textTransform: "none" }}
                    className="font-display text-[15px] font-bold text-intellectual"
                  >
                    {pick(r.title, locale)}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{pick(r.body, locale)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 7 · S1 POSTING ── */}
          <section className="py-12 sm:py-14">
            <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
              {pick(S7_KICKER, locale)}
            </p>
            <h2
              style={{ textTransform: "none" }}
              className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
            >
              <RotateCcw className="mr-2 inline-block h-7 w-7 text-intellectual" aria-hidden />
              {pick(S7_TITLE, locale)}
            </h2>
            <div className="mt-6 space-y-3">
              {S7_RULES.map((r, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
                  <h3
                    style={{ textTransform: "none" }}
                    className="font-display text-[15px] font-bold text-intellectual"
                  >
                    {pick(r.title, locale)}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">{pick(r.body, locale)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 8 · PSLE × DSA ── */}
          <section className="py-12 sm:py-14">
            <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
              {pick(S8_KICKER, locale)}
            </p>
            <h2
              style={{ textTransform: "none" }}
              className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
            >
              {pick(S8_TITLE, locale)}
            </h2>
            <div className="mt-4 space-y-4">
              {S8_BODY.map((p, i) => (
                <p key={i} className="text-[14.5px] leading-relaxed text-slate-700">
                  {pick(p, locale)}
                </p>
              ))}
            </div>
          </section>

          {/* ── BOTTOM CTA ── */}
          <section className="pb-12 sm:pb-16">
            <div className="rounded-2xl border border-intellectual/15 bg-intellectual p-6 text-white sm:p-8">
              <h2 className="font-display text-lg font-semibold sm:text-xl">{pick(BOTTOM_TITLE, locale)}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{pick(BOTTOM_BODY, locale)}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/dsa-interview"
                  className="inline-flex items-center gap-2 rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
                >
                  <span style={{ textTransform: "none" }}>{pick(BOTTOM_CTA1, locale)}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/dsa-interview/talents"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <span style={{ textTransform: "none" }}>
                    {locale === "zh"
                      ? `查看 ${TALENT_COUNT} 个才艺备战页`
                      : locale === "ms"
                      ? `${TALENT_COUNT} halaman persediaan bakat`
                      : locale === "ta"
                      ? `${TALENT_COUNT} திறமை தயாரிப்பு பக்கங்கள்`
                      : `Browse all ${TALENT_COUNT} talent prep pages`}
                  </span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/timeline"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <span style={{ textTransform: "none" }}>{pick(BOTTOM_CTA2, locale)}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <RelatedCardsRow
        kicker={pick(REL_KICKER, locale)}
        heading={pick(REL_HEADING, locale)}
        items={[
          { icon: CalendarClock, title: pick(R1_T, locale), body: pick(R1_B, locale), href: "/timeline" },
          { icon: BookOpen, title: pick(R2_T, locale), body: pick(R2_B, locale), href: "/what-is-dsa" },
          { icon: MessageSquareText, title: pick(R3_T, locale), body: pick(R3_B, locale), href: "/faq" },
        ]}
      />
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
