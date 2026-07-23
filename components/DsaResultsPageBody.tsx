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
  en: "DSA-Sec results — schools notify by 28 Aug. Final placement: November. Four outcomes, each with binding rules.",
  zh: "DSA-Sec 结果——学校最迟 8 月 28 日通知 · 最终安置在 11 月公布 · 四种结果各有约束规则",
  ms: "Keputusan DSA-Sec — sekolah maklum menjelang 28 Ogos. Penempatan akhir: November. Empat keputusan, setiap satu dengan peraturan mengikat.",
  ta: "DSA-Sec முடிவுகள் — பள்ளிகள் ஆகஸ்ட் 28-க்குள் அறிவிக்கும். இறுதி இடம்: நவம்பர். நான்கு முடிவுகள், ஒவ்வொன்றுக்கும் கட்டுப்படுத்தும் விதிகள்.",
};

const SUBTITLE: LocaleStr = {
  en: "MOE requires DSA-Sec 2026 schools to notify outcomes by Friday, 28 August 2026 — each school sends its own, and it can arrive earlier. The October School Preference Exercise (19-23 Oct 2026) is where you lock in which of your child's offers becomes the final school. Final placement is announced alongside PSLE results in mid-to-late November. This page covers what each of the four outcomes binds you to — and the small number of decisions that have outsized consequences.",
  zh: "MOE 规定 DSA-Sec 2026 学校最迟在 2026 年 8 月 28 日（周五）前通知申请结果——各校自行通知，可能更早到。10 月 19-23 日的 School Preference Exercise · 是锁定孩子最终中学的关键 5 天。最终安置在 11 月中下旬与 PSLE 结果同时公布。本页面讲四种结果各自的约束 · 以及少数几个有重大后果的决策点。",
  ms: "MOE mewajibkan sekolah DSA-Sec 2026 memaklumkan keputusan menjelang Jumaat, 28 Ogos 2026 — setiap sekolah memaklumkan sendiri, dan ia boleh tiba lebih awal. Pemilihan Keutamaan Sekolah Oktober (19-23 Okt 2026) adalah saat mengunci sekolah akhir.",
  ta: "DSA-Sec 2026 பள்ளிகள் 2026 ஆகஸ்ட் 28 (வெள்ளி) அன்றுக்குள் முடிவுகளை அறிவிக்க வேண்டும் என MOE வகுத்துள்ளது — ஒவ்வொரு பள்ளியும் தனித்தனியே அறிவிக்கும், அது இதற்கு முன்பே வரலாம். அக்டோபர் பள்ளி முன்னுரிமைப் பயிற்சி (அக் 19-23) இறுதி பள்ளியைப் பூட்டுகிறது.",
};

const DISCLAIMER: LocaleStr = {
  en: "Dates: the 28 August notification deadline and the October Preference Exercise are published by MOE for 2026. The DSA allocation and PSLE results are released together, which MOE gives as tentatively 24 or 25 November 2026 — tentative is MOE's own word, so treat it as subject to change. MOE publishes no schedule at all for school interviews, trials and auditions; those dates come from each school. Always verify with the official MOE page below before acting on any date.",
  zh: "日期说明：8 月 28 日的通知截止日与 10 月 Preference Exercise 是 MOE 已公布的 2026 官方数据。DSA 派位结果与 PSLE 成绩同日公布 · MOE 给出的是「暂定」2026 年 11 月 24 或 25 日——「暂定」是 MOE 自己的用词 · 请当作可能变动。学校的面试 / 试镜 / 试训日期 MOE 完全不公布 · 一律以各校通知为准。任何日期相关决策前 · 务必到下方 MOE 官方页核实。",
  ms: "Tarikh: tarikh akhir pemberitahuan 28 Ogos dan Pemilihan Keutamaan Oktober diterbitkan oleh MOE untuk 2026. Keputusan peruntukan DSA dan PSLE dikeluarkan bersama, yang MOE nyatakan secara tentatif pada 24 atau 25 November 2026. MOE tidak menerbitkan sebarang jadual untuk temu duga, ujian dan uji bakat sekolah — tarikh itu datang daripada setiap sekolah.",
  ta: "தேதிகள்: ஆகஸ்ட் 28 அறிவிப்பு இறுதி நாளும் அக்டோபர் முன்னுரிமைப் பயிற்சியும் MOE 2026-க்கு வெளியிட்டவை. DSA ஒதுக்கீடும் PSLE முடிவுகளும் ஒன்றாக வெளியிடப்படும் — MOE தற்காலிகமாக 2026 நவம்பர் 24 அல்லது 25 எனக் கூறுகிறது. பள்ளி நேர்காணல், தேர்வு, திறனாய்வு தேதிகளுக்கு MOE எந்த அட்டவணையையும் வெளியிடுவதில்லை — அவை ஒவ்வொரு பள்ளியிலிருந்தும் வரும்.",
};

/* ============================ SECTION 0 · THE WAIT ============================ */

const S0_KICKER: LocaleStr = {
  en: "Chapter 0",
  zh: "第 0 章",
  ms: "Bab 0",
  ta: "அத்தியாயம் 0",
};
const S0_TITLE: LocaleStr = {
  en: "While you wait — how to read the silence between the interview and 28 August",
  zh: "等待期——面试结束到 8 月 28 日之间，怎么读那段沉默",
  ms: "Sementara menunggu — cara memahami senyap antara temu duga dan 28 Ogos",
  ta: "காத்திருக்கும்போது — நேர்காணலுக்கும் ஆகஸ்ட் 28-க்கும் இடையிலான அமைதியைப் புரிதல்",
};
const S0_INTRO: LocaleStr = {
  en: "The interviews, auditions and trials are done, and now comes the hardest stretch — an open-ended wait with no date you control or even know. Three things to hold on to before the outcomes land.",
  zh: "面试、试镜、试训都结束了，接下来是最难熬的一段——一场你控制不了、甚至也不知道日期的空等。结果落下来之前，记住三件事。",
  ms: "Temu duga, uji bakat dan ujian sudah selesai, dan kini datang bahagian paling sukar — penantian tanpa tarikh yang anda kawal atau tahu. Tiga perkara untuk dipegang sebelum keputusan tiba.",
  ta: "நேர்காணல்கள், திறனாய்வுகள், சோதனைகள் முடிந்துவிட்டன, இப்போது கடினமான கட்டம் — நீங்கள் கட்டுப்படுத்தவோ அறியவோ முடியாத ஒரு காத்திருப்பு. முடிவுகள் வருவதற்கு முன் மூன்று விஷயங்கள்.",
};
const S0_POINTS: ReadonlyArray<{ label: LocaleStr; body: LocaleStr }> = [
  {
    label: {
      en: "By 28 August is a deadline, not a release date",
      zh: "8 月 28 日是截止日，不是放榜日",
      ms: "28 Ogos ialah tarikh akhir, bukan tarikh pelepasan",
      ta: "ஆகஸ்ட் 28 என்பது கடைசி தேதி, வெளியீட்டு தேதி அல்ல",
    },
    body: {
      en: "Results arrive by Friday, 28 August 2026 — but that is the latest date, not a single moment when everyone hears together. Each school notifies on its own timing and many send earlier. So a friend hearing before you says nothing about your child's result; you are simply on different schools' clocks.",
      zh: "结果最迟在 2026 年 8 月 28 日（周五）到——但那是最晚的截止日，不是大家一起收到的那一刻。各校按自己的节奏通知，很多会更早发。所以朋友比你先收到，跟你孩子的结果毫无关系；你们只是在不同学校的时钟上。",
      ms: "Keputusan tiba menjelang Jumaat, 28 Ogos 2026 — tetapi itu tarikh paling lewat, bukan satu saat semua orang mendengar bersama. Setiap sekolah memberitahu mengikut masa sendiri dan ramai menghantar lebih awal. Jadi rakan yang mendengar lebih dahulu tidak bermakna apa-apa tentang keputusan anak anda; anda hanya berada pada jam sekolah yang berbeza.",
      ta: "முடிவுகள் 2026 ஆகஸ்ட் 28 (வெள்ளி) க்குள் வரும் — ஆனால் அது கடைசி தேதி, எல்லோரும் ஒன்றாகக் கேட்கும் தருணம் அல்ல. ஒவ்வொரு பள்ளியும் தன் நேரத்தில் அறிவிக்கும், பலர் முன்பே அனுப்புகிறார்கள். எனவே நண்பர் உங்களுக்கு முன் கேள்விப்படுவது உங்கள் குழந்தையின் முடிவைப் பற்றி எதையும் சொல்லாது; நீங்கள் வெவ்வேறு பள்ளிகளின் நேரத்தில் இருக்கிறீர்கள்.",
    },
  },
  {
    label: {
      en: "Silence in August is not a signal",
      zh: "8 月中途没消息，不是坏消息",
      ms: "Senyap pada bulan Ogos bukan isyarat",
      ta: "ஆகஸ்ட்டில் அமைதி ஒரு சமிக்ஞை அல்ல",
    },
    body: {
      en: "No news partway through the month is exactly that — no news. A school still working through its list has not decided against your child. The only date that carries information is the 28th. Until then, an empty inbox is a school that hasn't finished, not an answer.",
      zh: "月中还没消息，那就只是还没消息。学校还在过名单，不等于已经否掉了你的孩子。唯一带信息的日期是 28 号。在那之前，空邮箱代表学校还没弄完，不是一个答复。",
      ms: "Tiada berita di pertengahan bulan bermakna tiada berita sahaja. Sekolah yang masih meneliti senarainya belum memutuskan menolak anak anda. Satu-satunya tarikh yang membawa maklumat ialah 28hb. Sebelum itu, peti masuk kosong ialah sekolah yang belum selesai, bukan jawapan.",
      ta: "மாதத்தின் நடுவில் செய்தி இல்லாதது என்பது செய்தி இல்லை என்பதே. தன் பட்டியலை இன்னும் பரிசீலிக்கும் பள்ளி உங்கள் குழந்தைக்கு எதிராக முடிவு செய்யவில்லை. தகவல் தரும் ஒரே தேதி 28. அதுவரை, காலியான இன்பாக்ஸ் என்பது முடிக்காத பள்ளி, ஒரு பதில் அல்ல.",
    },
  },
  {
    label: {
      en: "Nothing you do now changes the outcome — so use the wait to get ready",
      zh: "现在做什么都改变不了结果——用这段时间备好决策",
      ms: "Apa yang anda buat sekarang tidak mengubah keputusan — jadi gunakan penantian untuk bersedia",
      ta: "இப்போது நீங்கள் செய்வது முடிவை மாற்றாது — எனவே காத்திருப்பை தயாராக பயன்படுத்துங்கள்",
    },
    body: {
      en: "The panel already has everything it needs; no email or extra material moves the decision now, and sending one rarely helps. What the wait is for is getting ready to decide fast — because once a result lands, the clock speeds up. Read what each of the four outcomes below commits you to, so the day it arrives is a decision you are prepared for, not a scramble.",
      zh: "评委手里该有的都有了；现在没有哪封邮件、哪份补充材料能撼动决定，发了也基本没用。这段等待是用来备好「快速决策」的——因为结果一到，节奏会陡然加快。先把下面四种结果各自的约束读懂，等它来的那天，就是一个你准备好了的决定，而不是一场手忙脚乱。",
      ms: "Panel sudah ada semua yang diperlukan; tiada e-mel atau bahan tambahan yang mengubah keputusan sekarang, dan menghantarnya jarang membantu. Penantian ini untuk bersedia membuat keputusan dengan cepat — kerana sebaik keputusan tiba, masa menjadi pantas. Baca apa yang setiap satu daripada empat keputusan di bawah mengikat anda, supaya hari ia tiba menjadi keputusan yang anda sudah bersedia, bukan kelam-kabut.",
      ta: "குழுவிடம் தேவையான அனைத்தும் உள்ளது; இப்போது முடிவை மாற்றும் மின்னஞ்சலோ கூடுதல் ஆவணமோ இல்லை, அனுப்புவது அரிதாகவே உதவும். இந்தக் காத்திருப்பு விரைவாக முடிவெடுக்க தயாராவதற்கே — ஏனெனில் முடிவு வந்தவுடன் நேரம் வேகமெடுக்கும். கீழே உள்ள நான்கு முடிவுகள் ஒவ்வொன்றும் உங்களை எதற்குக் கட்டுப்படுத்துகிறது என்பதைப் படியுங்கள், அது வரும் நாள் நீங்கள் தயாராக இருக்கும் முடிவாக இருக்கும், அவசரம் அல்ல.",
    },
  },
];

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
      en: "By 28 August 2026",
      zh: "2026 年 8 月 28 日前",
      ms: "Menjelang 28 Ogos 2026",
      ta: "2026 ஆகஸ்ட் 28-க்குள்",
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
      ms: "Pertengahan-akhir November 2026 (2025: 25 Nov 11am)",
      ta: "2026 நவம்பர் நடு-இறுதி (2025: நவ 25 11am)",
    },
    what: {
      en: "PSLE results released. Same day, your DSA-Sec final placement is announced — the algorithm pairs your October preference ranking with your PSLE results to produce the final school. Waitlist applicants find out conversion on the same day.",
      zh: "PSLE 出分。同一天 · DSA-Sec 最终安置公布——算法把 10 月偏好排序与 PSLE 分数配对 · 输出最终中学。Waitlist 候选人同一天揭晓是否转正。",
      ms: "Keputusan PSLE diumumkan. Pada hari yang sama, penempatan akhir DSA-Sec anda diumumkan — algoritma memadankan susunan keutamaan Oktober anda dengan keputusan PSLE untuk menghasilkan sekolah akhir. Calon Senarai Menunggu mengetahui penukaran pada hari yang sama.",
      ta: "PSLE முடிவுகள் வெளியிடப்படுகின்றன. அதே நாளில், உங்கள் DSA-Sec இறுதி இடம் அறிவிக்கப்படுகிறது — உங்கள் அக்டோபர் முன்னுரிமை வரிசையை PSLE முடிவுகளுடன் இணைத்து வழிமுறை இறுதிப் பள்ளியை உருவாக்குகிறது. காத்திருப்புப் பட்டியல் விண்ணப்பதாரர்கள் அதே நாளில் மாற்றத்தை அறிகிறார்கள்.",
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
      ms: "Tetingkap pilihan S1 Posting dibuka untuk keluarga TANPA Tawaran Sah (Tidak Berjaya + Senarai Menunggu yang tidak menukar + mereka yang memilih untuk tidak menyusun mana-mana sekolah DSA pada bulan Oktober). Pilih 6 sekolah mengikut susunan keutamaan. Peraturan afiliasi terpakai.",
      ta: "உறுதிசெய்யப்பட்ட சலுகை இல்லாத குடும்பங்களுக்கு (தோல்வி + மாறாத காத்திருப்புப் பட்டியல் + அக்டோபரில் எந்த DSA பள்ளியையும் வரிசைப்படுத்தாதவர்கள்) S1 Posting தேர்வுச் சாளரம் திறக்கிறது. விருப்ப வரிசையில் 6 பள்ளிகளைத் தேர்ந்தெடுக்கவும். இணைப்பு விதிகள் பொருந்தும்.",
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
      ms: "Keputusan S1 Posting diumumkan. Keluarga mengetahui sekolah menengah yang anak mereka ditempatkan. Tetingkap rayuan pertukaran sekolah dibuka untuk mereka yang ingin merayu keputusan penempatan.",
      ta: "S1 Posting முடிவுகள் வெளியிடப்படுகின்றன. தங்கள் குழந்தை எந்த இடைநிலைப் பள்ளியில் இடம்பெற்றது என்பதைக் குடும்பங்கள் அறிகின்றன. இடப்பெயர்வு முடிவை மேல்முறையீடு செய்ய விரும்புவோருக்குப் பள்ளி மாற்ற முறையீட்டுச் சாளரம் திறக்கிறது.",
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
    ms: "Anda tidak boleh menghantar pilihan S1 Posting. Peraturan rasmi MOE jelas — pelajar DSA dengan sekolah yang disahkan \"tidak dibenarkan menghantar pilihan sekolah semasa S1 Posting.\"",
    ta: "S1 Posting தேர்வுகளைச் சமர்ப்பிக்க முடியாது. MOE-இன் அதிகாரப்பூர்வ விதி தெளிவானது — உறுதிசெய்யப்பட்ட பள்ளி உள்ள DSA மாணவர்கள் \"S1 Posting-இன்போது பள்ளித் தேர்வுகளைச் சமர்ப்பிக்க அனுமதிக்கப்படுவதில்லை.\"",
  },
  {
    en: "You cannot transfer to a different school after PSLE results are released — the placement is final from MOE's side.",
    zh: "PSLE 出分后不能转去其他学校——MOE 视为最终安置。",
    ms: "Anda tidak boleh berpindah ke sekolah lain selepas keputusan PSLE dikeluarkan — penempatan itu muktamad dari pihak MOE.",
    ta: "PSLE முடிவுகள் வெளியான பிறகு வேறு பள்ளிக்கு மாற்ற முடியாது — MOE தரப்பில் அந்த இடம் இறுதியானது.",
  },
  {
    en: "Your child must still sit the PSLE and meet the AL range for the offered school's stream (IP / Express / N(A)). If PSLE falls short, the offer may be downgraded to a different stream within the same school (a Counter-Offer scenario) or rescinded — handled by the school, not MOE.",
    zh: "孩子仍要考 PSLE · 必须达到所录学校流派（IP / Express / N(A)）的 AL 范围。如果 PSLE 不达标 · offer 可能降为同校另一流派（即 Counter-Offer 情形）或被撤回——由学校处理 · 不是 MOE。",
    ms: "Anak anda masih perlu mengambil PSLE dan memenuhi julat AL untuk aliran yang ditawarkan (IP / Express / N(A)). Jika PSLE tidak mencapai, tawaran itu mungkin diturunkan ke aliran lain di sekolah yang sama (situasi Tawaran Balas) atau ditarik balik — diuruskan oleh sekolah, bukan MOE.",
    ta: "உங்கள் குழந்தை PSLE எழுத வேண்டும், வழங்கப்பட்ட பள்ளியின் நீரோட்டத்திற்கான (IP / Express / N(A)) AL வரம்பை அடைய வேண்டும். PSLE குறைந்தால், அந்தச் சலுகை அதே பள்ளியில் வேறு நீரோட்டத்திற்குத் தாழ்த்தப்படலாம் (எதிர் சலுகை சூழல்) அல்லது திரும்பப் பெறப்படலாம் — இதைப் பள்ளி கையாளுகிறது, MOE அல்ல.",
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
  ms: "Jika anda tidak mahu CO, jangan susun sekolah itu dalam Pemilihan Keutamaan Oktober. CO digugurkan, dan anak anda kembali ke S1 Posting selepas PSLE. Tiada butang \"tolak\" rasmi — keputusannya ialah ketiadaan susunan.",
  ta: "CO-ஐ விரும்பவில்லை என்றால், அக்டோபர் முன்னுரிமைப் பயிற்சியில் அந்தப் பள்ளியை வரிசைப்படுத்த வேண்டாம். CO கைவிடப்படுகிறது, PSLE-க்குப் பிறகு உங்கள் குழந்தை S1 Posting-க்குத் திரும்புகிறது. முறையான \"நிராகரி\" பொத்தான் இல்லை — வரிசைப்படுத்தாமல் இருப்பதே அந்த முடிவு.",
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
  ms: "Sekolah yang anda susun paling tinggi antara beberapa CO menjadi penempatan akhir (dengan andaian PSLE memenuhi Kumpulan Penempatan sekolah itu). Inilah saat keluarga membuat penilaian kesesuaian akhir: keselarasan aliran akademik, kedalaman program CCA, jarak dari rumah, keutamaan adik-beradik, gerak hati selepas lawatan rumah terbuka. Tiada susunan yang \"lebih selamat\" — yang teratas menang.",
  ta: "பல CO-களில் நீங்கள் மிக உயர்வாக வரிசைப்படுத்தும் பள்ளியே இறுதி இடமாகிறது (அந்தப் பள்ளியின் Posting Group-ஐ PSLE அடைந்தால்). குடும்பங்கள் இறுதி பொருத்த மதிப்பீட்டைச் செய்யும் தருணம் இதுதான்: கல்வி நீரோட்டப் பொருத்தம், CCA திட்டத்தின் ஆழம், வீட்டிலிருந்து தூரம், உடன்பிறப்பு முன்னுரிமை, திறந்தவீட்டு வருகைக்குப் பிறகான உள்ளுணர்வு. \"பாதுகாப்பான\" வரிசை என்று எதுவும் இல்லை — உச்சியில் இருப்பது வெல்கிறது.",
};

/* ============================ SECTION 3 · WAITLIST ============================ */

const S3_KICKER: LocaleStr = {
  en: "Outcome 2 of 4",
  zh: "结果 2 / 4",
  ms: "Keputusan 2 / 4",
  ta: "முடிவு 2 / 4",
};
const S3_TITLE: LocaleStr = {
  en: "Waitlist (WL) — roughly half convert, and ranking it above your CO costs you nothing",
  zh: "Waitlist (WL)——历史上约一半转正 · 把它排在 CO 之前没有任何损失",
  ms: "Senarai Menunggu (WL) — kira-kira separuh menukar, dan menyusunnya di atas CO anda tidak merugikan apa-apa",
  ta: "காத்திருப்புப் பட்டியல் (WL) — சுமார் பாதி மாறுகின்றன; அதை உங்கள் CO-க்கு மேலே வரிசைப்படுத்துவதால் இழப்பு எதுவும் இல்லை",
};

const S3_BODY: ReadonlyArray<LocaleStr> = [
  {
    en: "A Waitlist outcome means the school accepted your child contingent on a spot opening — typically because a candidate above your child in the order declined their CO. WL conversion is announced on the same day as PSLE results in mid-to-late November.",
    zh: "Waitlist 意味着学校在有名额空出时录取孩子——通常是因为排在孩子前面的候选人拒绝了 CO。WL 转正与 PSLE 同日（11 月中下旬）公布。",
    ms: "Senarai Menunggu bermaksud sekolah menerima anak anda dengan syarat sesuatu tempat dibuka — biasanya kerana calon di atas anak anda dalam susunan itu menolak CO mereka. Penukaran WL diumumkan pada hari yang sama dengan keputusan PSLE pada pertengahan-akhir November.",
    ta: "காத்திருப்புப் பட்டியல் என்றால், ஓர் இடம் காலியாகும் நிபந்தனையில் பள்ளி உங்கள் குழந்தையை ஏற்றுக்கொண்டது — பொதுவாக வரிசையில் உங்கள் குழந்தைக்கு மேலே உள்ள ஒரு வேட்பாளர் தனது CO-ஐ நிராகரித்ததால். WL மாற்றம் நவம்பர் நடு-இறுதியில் PSLE முடிவுகளுடன் அதே நாளில் அறிவிக்கப்படுகிறது.",
  },
  {
    en: "MOE's published wording is that \"in previous years, about half of the students on the schools' wait lists were eventually given a place\". That's a historical pattern, not a guarantee. Whether your child converts depends on how many candidates above them on that school's list decline their COs in October.",
    zh: "MOE 的原话是「往年学校 Waitlist 上约有一半的学生最终获得学位」。这是历史规律 · 不是保证。能否转正取决于同校列表中排在孩子前面的人在 10 月有多少人拒绝 CO。",
    ms: "Perkataan rasmi MOE ialah \"pada tahun-tahun sebelumnya, kira-kira separuh daripada pelajar dalam senarai menunggu sekolah akhirnya diberi tempat\". Itu corak sejarah, bukan jaminan. Sama ada anak anda menukar bergantung pada berapa ramai calon di atas mereka dalam senarai sekolah itu menolak CO mereka pada bulan Oktober.",
    ta: "MOE-இன் அதிகாரப்பூர்வ வார்த்தை: \"முந்தைய ஆண்டுகளில், பள்ளிகளின் காத்திருப்புப் பட்டியலில் இருந்த மாணவர்களில் சுமார் பாதி பேருக்கு இறுதியில் இடம் வழங்கப்பட்டது.\" அது வரலாற்றுப் போக்கு, உத்தரவாதம் அல்ல. உங்கள் குழந்தை மாறுமா என்பது, அந்தப் பள்ளியின் பட்டியலில் அவர்களுக்கு மேலே உள்ள எத்தனை வேட்பாளர்கள் அக்டோபரில் தங்கள் CO-ஐ நிராகரிக்கிறார்கள் என்பதைப் பொறுத்தது.",
  },
];

const S3_CRITICAL_TITLE: LocaleStr = {
  en: "The Waitlist rule: rank it above your CO — the CO still holds if it doesn't convert",
  zh: "Waitlist 规则：排在 CO 之前 · 没转正 CO 依然有效",
  ms: "Peraturan Senarai Menunggu: susun di atas CO anda — CO tetap sah jika WL tidak menukar",
  ta: "காத்திருப்புப் பட்டியல் விதி: அதை உங்கள் CO-க்கு மேலே வரிசைப்படுத்துங்கள் — மாறவில்லை என்றாலும் CO செல்லுபடியாகும்",
};

const S3_CRITICAL: LocaleStr = {
  en: "If you also hold a CO at another school, this is less of a dilemma than it looks. MOE's own guidance says you can put either option. Rank the WL school above your CO and one of two things happens: the WL converts and your child goes there, or it doesn't and your child is admitted to the CO school anyway — the CO is not at risk. Rank the CO first and it simply locks in, and the WL never gets tested. So if you'd genuinely prefer the WL school, ranking it above the CO has no downside. What doesn't work is ranking the WL below a CO: the CO is allocated first and the WL is never reached.",
  zh: "如果同时还拿到另一所学校的 CO · 这没有看起来那么两难。MOE 的指引明说两种排法都可以。把 WL 校排在 CO 之前 · 只有两种结果：WL 转正 · 孩子去那所；或者没转正 · 孩子照样被 CO 校录取——CO 不会因此失去。把 CO 排前面 · 它直接锁定 · WL 根本没机会被触发。所以只要你确实更想要那所 WL 校 · 把它排在 CO 之前没有任何下行风险。真正无效的排法是把 WL 排在 CO 后面：CO 先分配掉 · WL 永远轮不到。",
  ms: "Jika anda juga memegang CO di sekolah lain, ini kurang dilema daripada yang kelihatan. Panduan MOE sendiri menyatakan anda boleh memilih mana-mana susunan. Susun sekolah WL di atas CO anda: sama ada WL menukar dan anak anda ke sana, atau tidak menukar dan anak anda tetap diterima di sekolah CO — CO tidak berisiko. Susun CO dahulu dan ia terus dikunci, WL tidak pernah diuji. Yang tidak berkesan ialah menyusun WL di bawah CO: CO diperuntukkan dahulu dan WL tidak pernah dicapai.",
  ta: "மற்றொரு பள்ளியில் CO-வும் இருந்தால், இது தோற்றத்தை விடக் குறைவான சிக்கல். இரண்டு வரிசைகளையும் வைக்கலாம் என MOE-இன் வழிகாட்டுதலே கூறுகிறது. WL பள்ளியை CO-க்கு மேலே வரிசைப்படுத்தினால் இரண்டில் ஒன்று நடக்கும்: WL மாறும், அல்லது மாறாவிட்டாலும் குழந்தை CO பள்ளியில் சேர்க்கப்படும் — CO ஆபத்தில் இல்லை. CO-வை முதலில் வைத்தால் அது பூட்டிவிடும், WL சோதிக்கப்படாது. வேலை செய்யாதது: WL-ஐ CO-க்குக் கீழே வைப்பது — CO முதலில் ஒதுக்கப்பட்டு WL எட்டப்படாது.",
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
    en: "A Counter-Offer typically arises at what MOE calls dual-track secondary schools — schools that run both an Integrated Programme (IP) and a 4-year O-level (Posting Group 3) track. If you apply for the IP but the school judges the candidate a better fit for the O-level track, it may issue a Counter-Offer for that track at the same school. Check each school's own admissions page for whether it runs both tracks.",
    zh: "Counter-Offer 常发生在 MOE 所说的双轨制中学——同时开办 IP 与 4 年制 O-level（Posting Group 3）两条轨道的学校。如果你申请 IP · 但学校判断孩子更适合 O-level 那条 · 可能给同校该轨道的 Counter-Offer。某校是否双轨 · 查该校招生页确认。",
    ms: "Tawaran Balas biasanya berlaku di sekolah yang MOE panggil sekolah dwi-trek — sekolah yang menjalankan kedua-dua trek IP dan O-level (Kumpulan Penempatan 3) selama 4 tahun. Semak halaman kemasukan setiap sekolah sama ada ia menjalankan kedua-dua trek.",
    ta: "எதிர் சலுகை பொதுவாக MOE இரட்டை-பாதை பள்ளிகள் என அழைப்பவற்றில் ஏற்படுகிறது — IP மற்றும் 4-ஆண்டு O-level (இடம் குழு 3) இரண்டையும் நடத்தும் பள்ளிகள். ஒவ்வொரு பள்ளியும் இரண்டு பாதைகளையும் நடத்துகிறதா என்பதை அதன் சேர்க்கை பக்கத்தில் சரிபார்க்கவும்.",
  },
  {
    en: "Accepting a Counter-Offer follows the same rules as accepting a Confirmed Offer — you rank the school in the October preference. Once locked, the same binding applies: no S1 Posting choices, and no transfer after PSLE. What changes is the track (the O-level / Posting Group 3 side instead of the IP), not the school.",
    zh: "接受 Counter-Offer 的规则与接受 CO 一致——在 10 月排这所学校。一旦锁定 · 适用同一套约束：不能提交 S1 Posting 志愿 · PSLE 后不能转校。改变的是轨道（从 IP 变成 O-level / Posting Group 3 那一侧）· 不是学校。",
    ms: "Menerima Tawaran Balas mengikuti peraturan yang sama seperti menerima Tawaran Sah — anda susun sekolah itu dalam keutamaan Oktober. Setelah dikunci, ikatan yang sama terpakai: tiada pilihan S1 Posting, dan tiada pertukaran selepas PSLE. Yang berubah ialah trek (sisi O-level / Kumpulan Penempatan 3, bukan IP), bukan sekolah.",
    ta: "எதிர் சலுகையை ஏற்றுக்கொள்வது CO ஏற்பது போலவே — அக்டோபர் முன்னுரிமையில் அந்தப் பள்ளியை வரிசைப்படுத்துகிறீர்கள். பூட்டியதும் அதே கட்டுப்பாடு பொருந்தும்: S1 Posting தேர்வுகள் இல்லை, PSLE-க்குப் பிறகு மாற்றம் இல்லை. மாறுவது பாதை (IP-க்குப் பதிலாக O-level / இடம் குழு 3 பக்கம்), பள்ளி அல்ல.",
  },
  {
    en: "A separate, school-specific situation: cross-school Counter-Offers between affiliated schools (e.g. ACS(I) → ACS(BR)). This is not in MOE's published DSA rules and is handled case-by-case by the schools — confirm directly with each school's admissions office if your child is in this scenario.",
    zh: "另一种特殊情况：affiliated school 之间的跨校 Counter-Offer（例：ACS(I) → ACS(BR)）。这不在 MOE 公开 DSA 规则中 · 由学校 case-by-case 处理——若孩子遇到这种情况 · 直接联系学校招生办确认。",
    ms: "Situasi berasingan yang khusus sekolah: Tawaran Balas merentas sekolah antara sekolah berafiliasi (cth. ACS(I) → ACS(BR)). Ini tidak terdapat dalam peraturan DSA rasmi MOE dan diuruskan kes demi kes oleh sekolah — sahkan terus dengan pejabat kemasukan setiap sekolah jika anak anda dalam senario ini.",
    ta: "தனி, பள்ளி-குறிப்பிட்ட சூழ்நிலை: இணைப்புப் பள்ளிகளுக்கு இடையிலான குறுக்கு-பள்ளி எதிர் சலுகைகள் (எ.கா. ACS(I) → ACS(BR)). இது MOE-இன் அதிகாரப்பூர்வ DSA விதிகளில் இல்லை, பள்ளிகளால் ஒவ்வொரு வழக்காகக் கையாளப்படுகிறது — உங்கள் குழந்தை இந்தச் சூழலில் இருந்தால் ஒவ்வொரு பள்ளியின் சேர்க்கை அலுவலகத்துடன் நேரடியாக உறுதிப்படுத்தவும்.",
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
    ms: "Keputusan Tidak Berjaya bermakna sekolah tidak memilih anak anda. Tiada saluran rayuan rasmi MOE untuk keputusan DSA-Sec — DSA ialah pemilihan yang dipimpin sekolah dan keputusan sekolah adalah muktamad. Sesetengah sekolah berkongsi maklum balas ringkas jika ditanya dengan sopan, tetapi MOE tidak mewajibkannya.",
    ta: "தோல்வி முடிவு என்றால் பள்ளி உங்கள் குழந்தையைத் தேர்ந்தெடுக்கவில்லை. DSA-Sec முடிவுக்கு முறையான MOE மேல்முறையீட்டு வழி இல்லை — DSA என்பது பள்ளி நடத்தும் தேர்வு, பள்ளியின் முடிவே இறுதியானது. பணிவாகக் கேட்டால் சில பள்ளிகள் சுருக்கமான கருத்தைப் பகிர்கின்றன, ஆனால் MOE அதைக் கட்டாயப்படுத்தவில்லை.",
  },
  {
    en: "Your child automatically proceeds to S1 Posting after PSLE results — covered in detail in the next section. The DSA experience itself still has value: many primary-school candidates who were Unsuccessful at DSA-Sec stage go on to take strong roles in their posted school's CCAs, where the prior trial and interview experience translates well.",
    zh: "孩子自动在 PSLE 出分后进入 S1 Posting · 下一节详细讲。DSA 经验本身仍有价值：很多 DSA-Sec 阶段 Unsuccessful 的小学生 · 在派位后的学校 CCA 选拔中表现出色 · 之前的 trial 与面试经验直接派上用场。",
    ms: "Anak anda secara automatik meneruskan ke S1 Posting selepas keputusan PSLE — diterangkan dengan lebih terperinci dalam bahagian seterusnya. Pengalaman DSA itu sendiri masih bernilai: ramai calon sekolah rendah yang Tidak Berjaya pada peringkat DSA-Sec akhirnya memegang peranan penting dalam CCA sekolah yang ditempatkan, di mana pengalaman percubaan dan temu duga terdahulu terpakai dengan baik.",
    ta: "PSLE முடிவுகளுக்குப் பிறகு உங்கள் குழந்தை தானாக S1 Posting-க்குச் செல்கிறது — அடுத்த பகுதியில் விரிவாக விளக்கப்பட்டுள்ளது. DSA அனுபவத்துக்கே இன்னும் மதிப்பு உண்டு: DSA-Sec கட்டத்தில் தோல்வியடைந்த பல தொடக்கப் பள்ளி வேட்பாளர்கள், இடம்பெற்ற பள்ளியின் CCA-களில் வலுவான பங்குகளை வகிக்கின்றனர்; அங்கு முந்தைய சோதனை மற்றும் நேர்காணல் அனுபவம் நன்கு பயன்படுகிறது.",
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
      en: "Submitted via the DSA-Sec online portal with your Singpass. Around mid-October, parents of a child with a CO or WL are notified by SMS and email (through the government's Postman service) to log in and submit — watch for it so the 5-day window isn't missed. You can revise as many times as you want within the window; the last version saved before the deadline is the one used.",
      zh: "凭 Singpass 通过 DSA-Sec 在线门户提交。约 10 月中 · 拿到 CO 或 WL 的孩子家长会收到短信和邮件（经政府 Postman 服务发出）· 提示登录填报——留意别错过这 5 天窗口。窗口内可以反复修改 · 截止前最后保存的版本生效。",
      ms: "Dihantar melalui portal dalam talian DSA-Sec dengan Singpass anda. Sekitar pertengahan Oktober, ibu bapa anak yang menerima CO atau WL akan dimaklumkan melalui SMS dan e-mel (menerusi perkhidmatan Postman kerajaan) untuk log masuk dan menghantar — perhatikannya supaya tetingkap 5 hari itu tidak terlepas. Anda boleh menyemak semula seberapa kerap yang dimahukan dalam tetingkap; versi terakhir yang disimpan sebelum tarikh tutup yang digunakan.",
      ta: "உங்கள் Singpass மூலம் DSA-Sec ஆன்லைன் போர்டல் வழியாக சமர்ப்பிக்கப்படுகிறது. அக்டோபர் நடுப்பகுதியில், CO அல்லது WL பெற்ற குழந்தையின் பெற்றோருக்கு உள்நுழைந்து சமர்ப்பிக்க SMS மற்றும் மின்னஞ்சல் (அரசாங்கத்தின் Postman சேவை வழியாக) அனுப்பப்படும் — 5 நாள் சாளரத்தை தவறவிடாமல் கவனியுங்கள். சாளரத்திற்குள் விரும்பிய அளவு திருத்தலாம்; காலக்கெடுவுக்கு முன் சேமிக்கப்பட்ட கடைசி பதிப்பே பயன்படுத்தப்படும்.",
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
      ms: "Ini nombor khusus DSA — berbeza daripada 6 sekolah dalam S1 Posting kemudian. Anda hanya boleh menyusun sekolah yang memberi anak anda Tawaran Sah atau Senarai Menunggu. Anda tidak perlu menyusun kesemua 3 — susun hanya sekolah yang anda benar-benar mahu.",
      ta: "இது DSA-க்கே உரிய எண் — பின்னர் வரும் S1 Posting-இல் உள்ள 6 பள்ளிகளிலிருந்து வேறுபட்டது. உங்கள் குழந்தைக்கு உறுதிசெய்யப்பட்ட சலுகை அல்லது காத்திருப்புப் பட்டியல் வழங்கிய பள்ளிகளை மட்டுமே வரிசைப்படுத்த முடியும். மூன்றையும் வரிசைப்படுத்த வேண்டியதில்லை — நீங்கள் உண்மையிலேயே விரும்பும் பள்ளிகளை மட்டும் வரிசைப்படுத்துங்கள்.",
    },
  },
  {
    title: {
      en: "Algorithm: a CO locks wherever it sits; a WL above it gets a chance with the CO still protected",
      zh: "算法：CO 排在哪都会锁定 · 把 WL 排在它之上就多一次机会 · CO 仍受保护",
      ms: "Algoritma: CO dikunci di mana-mana kedudukan; WL di atasnya mendapat peluang dengan CO masih dilindungi",
      ta: "வழிமுறை: CO எங்கிருந்தாலும் பூட்டும்; அதற்கு மேலே உள்ள WL-க்கு வாய்ப்பு கிடைக்கும், CO பாதுகாக்கப்படும்",
    },
    body: {
      en: "A Confirmed Offer is allocated as soon as the list reaches it (subject to PSLE Posting Group), which is why anything ranked below a CO is never tested. A Waitlist school only admits if vacancies remain after every CO holder is placed — MOE gives CO holders priority over WL candidates at the same school. So if a WL school sits above your CO and converts, that's the placement; if it doesn't, the CO below it takes over. Where two WL candidates both rank the same school first, the school's own Waitlist order decides who is allocated.",
      zh: "CO 只要轮到就会被分配（前提 PSLE 达 Posting Group）· 所以排在 CO 下面的任何学校都不会被触发。WL 校只有在所有 CO 持有者都安置完、仍有空位时才录取——MOE 明确规定同校 CO 优先于 WL。所以 WL 校若排在 CO 之上并转正 · 就是它；没转正 · 下面的 CO 接管。若两名 WL 候选人都把同一所学校排第一 · 由学校自己的 Waitlist 排序决定谁先被分配。",
      ms: "CO diperuntukkan sebaik sahaja senarai sampai kepadanya, jadi apa-apa di bawah CO tidak pernah diuji. Sekolah WL hanya menerima jika tempat kosong kekal selepas semua pemegang CO ditempatkan — MOE memberi keutamaan CO berbanding WL di sekolah yang sama. Jika dua calon WL menyusun sekolah yang sama dahulu, susunan Senarai Menunggu sekolah itu menentukan.",
      ta: "CO-வை பட்டியல் எட்டியவுடன் ஒதுக்கப்படும், எனவே CO-க்குக் கீழே உள்ளவை சோதிக்கப்படுவதில்லை. அனைத்து CO வைத்திருப்பவர்களும் இடம்பெற்ற பிறகு காலியிடம் இருந்தால் மட்டுமே WL பள்ளி சேர்க்கும் — ஒரே பள்ளியில் CO-க்கு MOE முன்னுரிமை அளிக்கிறது. இரு WL வேட்பாளர்களும் ஒரே பள்ளியை முதலில் வைத்தால், பள்ளியின் சொந்த காத்திருப்பு வரிசை முடிவு செய்யும்.",
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
      ms: "Jika anda tidak menyusun sekolah yang memberi CO atau WL, anda sebenarnya menolaknya — sekolah itu tidak boleh mengambil semula anak anda kemudian. Keputusan ini kekal untuk kitaran 2026.",
      ta: "CO அல்லது WL வழங்கிய பள்ளியை வரிசைப்படுத்தாவிட்டால், நீங்கள் அதை உண்மையில் மறுக்கிறீர்கள் — அந்தப் பள்ளி பின்னர் உங்கள் குழந்தையை மீண்டும் சேர்க்க முடியாது. இந்த முடிவு 2026 சுற்றுக்கு நிரந்தரமானது.",
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
      ms: "Tiga kumpulan: (1) keluarga yang Tidak Berjaya di setiap sekolah DSA yang mereka pohon; (2) calon Senarai Menunggu yang tidak menukar; (3) keluarga yang memilih untuk tidak menyusun mana-mana sekolah DSA pada bulan Oktober walaupun mereka mempunyai CO atau WL.",
      ta: "மூன்று குழுக்கள்: (1) தாங்கள் விண்ணப்பித்த ஒவ்வொரு DSA பள்ளியிலும் தோல்வியடைந்த குடும்பங்கள்; (2) மாறாத காத்திருப்புப் பட்டியல் வேட்பாளர்கள்; (3) CO அல்லது WL இருந்தும் அக்டோபரில் எந்த DSA பள்ளியையும் வரிசைப்படுத்தாத குடும்பங்கள்.",
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
      ms: "Pilih 6 sekolah yang realistik berdasarkan skor AL yang dijangkakan anak. Alat \"PSLE COP\" MOE dan halaman cut-off sejarah membantu menentukur sekolah yang mungkin dapat diakses anak anda. Kumpulan Penempatan pada slip keputusan menentukan aliran yang tersedia (PG1 / PG2 / PG3).",
      ta: "உங்கள் குழந்தையின் எதிர்பார்க்கப்படும் AL மதிப்பெண்ணுக்கு வாஸ்தவமான 6 பள்ளிகளைத் தேர்வுசெய்யுங்கள். MOE-இன் \"PSLE COP\" கருவியும் வரலாற்று cut-off பக்கங்களும் உங்கள் குழந்தை எந்தப் பள்ளிகளை அணுக முடியும் என்பதைச் சரிசெய்ய உதவும். முடிவுச் சீட்டில் உள்ள Posting Group எந்த நீரோட்டங்கள் கிடைக்கும் என்பதைத் தீர்மானிக்கிறது (PG1 / PG2 / PG3).",
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
      en: "If your child attended an affiliated primary school, you must list the affiliated secondary as the first choice to get affiliation priority, and meet the Affiliation Minimum Requirement (AMR). The school sets aside at least 20% of its places for students with no affiliation. The old PSLE T-score \"-2 bonus\" system for affiliation is no longer in effect under the AL scoring system — affiliation now gives priority in admission, not a score advantage.",
      zh: "如果孩子上的是 affiliated 小学 · 必须把 affiliated 中学排首位才享 affiliation 优先 · 并达到 Affiliation Minimum Requirement (AMR)。学校至少保留 20% 名额给无 affiliation 的学生。老的 PSLE T-score 『减 2 分 affiliation 加分』制度在 AL 评分系统下已废止——如今 affiliation 是录取优先 · 不是分数优惠。",
      ms: "Jika anak anda menghadiri sekolah rendah berafiliasi, anda mesti menyenaraikan sekolah menengah berafiliasi sebagai pilihan pertama untuk mendapat keutamaan afiliasi, dan memenuhi Keperluan Minimum Afiliasi (AMR). Sekolah mengetepikan sekurang-kurangnya 20% tempatnya untuk pelajar tanpa afiliasi. Sistem \"bonus -2\" T-score PSLE lama untuk afiliasi tidak lagi berkuat kuasa di bawah sistem pemarkahan AL — afiliasi kini memberi keutamaan kemasukan, bukan kelebihan skor.",
      ta: "உங்கள் குழந்தை இணைப்புத் தொடக்கப் பள்ளியில் படித்திருந்தால், இணைப்பு முன்னுரிமை பெற இணைப்பு இடைநிலைப் பள்ளியை முதல் விருப்பமாகப் பட்டியலிட வேண்டும், மேலும் இணைப்புக் குறைந்தபட்சத் தேவையை (AMR) அடைய வேண்டும். இணைப்பு இல்லாத மாணவர்களுக்குப் பள்ளி தனது இடங்களில் குறைந்தது 20% ஒதுக்குகிறது. இணைப்புக்கான பழைய PSLE T-score \"-2 போனஸ்\" முறை AL மதிப்பெண் முறையின் கீழ் இனி அமலில் இல்லை — இணைப்பு இப்போது சேர்க்கையில் முன்னுரிமை தருகிறது, மதிப்பெண் சலுகை அல்ல.",
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
      ms: "Selepas keputusan S1 Posting dikeluarkan (kira-kira 3-4 minggu selepas PSLE), MOE membuka tetingkap untuk keluarga merayu penempatan mereka. Alasan adalah terhad — biasanya perubatan, jarak, atau tawaran subjek tertentu. Tarikh khusus 2026 untuk tetingkap ini belum diterbitkan oleh MOE. Rayuan dinilai oleh sekolah yang dipohon, bukan diluluskan secara automatik.",
      ta: "S1 Posting முடிவுகள் வெளியான பிறகு (PSLE-க்குப் பிறகு சுமார் 3-4 வாரங்கள்), தங்கள் இடப்பெயர்வை மேல்முறையீடு செய்யக் குடும்பங்களுக்கு MOE ஒரு சாளரத்தைத் திறக்கிறது. காரணங்கள் வரம்பிடப்பட்டவை — பொதுவாக மருத்துவம், தூரம், அல்லது குறிப்பிட்ட பாட வழங்கல்கள். இந்தச் சாளரத்தின் 2026 குறிப்பிட்ட தேதிகளை MOE இன்னும் வெளியிடவில்லை. மேல்முறையீடுகள் கோரப்பட்ட பள்ளியால் மதிப்பிடப்படுகின்றன, தானாக வழங்கப்படுவதில்லை.",
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
    ms: "Salah faham biasa: \"DSA disahkan = PSLE tidak penting.\" Itu salah. Setiap Tawaran Sah bersyarat kepada keperluan Kumpulan Penempatan PSLE bagi sekolah dan aliran yang ditawarkan. PSLE tetap diambil, ditanda, dan digunakan untuk mengesahkan tawaran.",
    ta: "பொதுவான தவறான புரிதல்: \"DSA உறுதிசெய்யப்பட்டது = PSLE முக்கியமில்லை.\" அது தவறு. ஒவ்வொரு உறுதிசெய்யப்பட்ட சலுகையும் வழங்கப்பட்ட பள்ளி மற்றும் நீரோட்டத்தின் PSLE Posting Group தேவைக்கு உட்பட்டது. PSLE இன்னும் எழுதப்படுகிறது, மதிப்பிடப்படுகிறது, சலுகையைச் சரிபார்க்கப் பயன்படுத்தப்படுகிறது.",
  },
  {
    en: "Posting Groups map from the old streams — Posting Group 3 = Express, 2 = N(A), 1 = N(T) — so the higher the group number, the more academically demanding. By PSLE score (MOE's own table): PG3 takes 4-20 (G3, former Express); PG2 takes 23-24 (G2, former N(A)); PG1 takes 26-30 with AL7 or better in English and Maths (G1, former N(T)). Two overlap bands let families opt up: a score of 21-22 is eligible for PG2 or PG3, and 25 for PG1 or PG2. Since the 2024 S1 cohort the Express / N(A) / N(T) labels are gone — schools admit by Posting Group. An IP-track school sets its own stricter cut-off, usually well inside the PG3 band — confirm each school's threshold on its own page.",
    zh: "Posting Group 从旧分流对应而来——Posting Group 3 = Express、2 = N(A)、1 = N(T)——所以组号越大 · 学术要求越高。按 PSLE 总分（MOE 官方表）：PG3 收 4-20 分（G3 · 旧 Express）· PG2 收 23-24 分（G2 · 旧 N(A)）· PG1 收 26-30 分且英文与数学 AL7 或更好（G1 · 旧 N(T)）。两个重叠档可往上选：21-22 分可入 PG2 或 PG3 · 25 分可入 PG1 或 PG2。2024 年 S1 起 Express / N(A) / N(T) 标签已取消——学校按 Posting Group 录取。IP 流派学校自设更严门槛 · 通常在 PG3 档内偏高位——具体阈值查学校本身页面。",
    ms: "Kumpulan Penempatan dipetakan daripada aliran lama — Kumpulan 3 = Express, 2 = N(A), 1 = N(T) — jadi semakin tinggi nombor kumpulan, semakin mencabar dari segi akademik. Mengikut skor PSLE (jadual rasmi MOE): PG3 mengambil 4-20 (G3, bekas Express); PG2 mengambil 23-24 (G2, bekas N(A)); PG1 mengambil 26-30 dengan AL7 atau lebih baik dalam Bahasa Inggeris dan Matematik (G1, bekas N(T)). Dua jalur bertindih membenarkan pilihan ke atas: skor 21-22 layak untuk PG2 atau PG3, dan 25 untuk PG1 atau PG2. Sejak kohort S1 2024, label Express / N(A) / N(T) telah dimansuhkan — sekolah menerima mengikut Kumpulan Penempatan.",
    ta: "இடம் குழுக்கள் பழைய நீரோட்டங்களிலிருந்து வரையறுக்கப்படுகின்றன — குழு 3 = Express, 2 = N(A), 1 = N(T) — எனவே குழு எண் அதிகமானால் கல்வித் தேவை அதிகம். PSLE மதிப்பெண்படி (MOE அதிகாரப்பூர்வ அட்டவணை): PG3 என்பது 4-20 (G3, முன்னாள் Express); PG2 என்பது 23-24 (G2, முன்னாள் N(A)); PG1 என்பது 26-30, ஆங்கிலம் மற்றும் கணிதத்தில் AL7 அல்லது சிறந்தது (G1, முன்னாள் N(T)). இரண்டு மேற்பொருந்தும் அணிகள்: 21-22 மதிப்பெண் PG2 அல்லது PG3-க்கு, 25 மதிப்பெண் PG1 அல்லது PG2-க்கு தகுதி. 2024 S1 குழுவிலிருந்து Express / N(A) / N(T) பெயர்கள் நீக்கப்பட்டன — பள்ளிகள் இடம் குழுவின்படி சேர்க்கின்றன.",
  },
  {
    en: "If PSLE falls short of the offered stream's requirement, two scenarios occur. (1) Same-school down-stream: the school may absorb the child into a lower stream within the same school (e.g. IP offer becomes Express at the same school). (2) Offer rescinded: the school decides the candidate no longer fits even the lower stream. This is handled school-by-school — MOE has no central rule. Confirm with the offering school's admissions office in advance to understand their policy.",
    zh: "如果 PSLE 不达所录流派要求 · 两种情形：(1) 同校降流：学校可能把孩子吸纳到同校的较低流派（例 IP offer 变同校 Express）；(2) Offer 被撤回：学校判断孩子连较低流派都不合适。这由学校 case-by-case 处理——MOE 无统一规则。提前向录取学校招生办了解其政策。",
    ms: "Jika PSLE tidak mencapai keperluan aliran yang ditawarkan, dua senario berlaku. (1) Turun aliran di sekolah sama: sekolah mungkin menyerap anak ke aliran lebih rendah dalam sekolah yang sama (cth. tawaran IP menjadi Express di sekolah yang sama). (2) Tawaran ditarik balik: sekolah memutuskan calon tidak lagi sesuai walaupun untuk aliran lebih rendah. Ini diuruskan sekolah demi sekolah — MOE tiada peraturan pusat. Sahkan dengan pejabat kemasukan sekolah yang menawarkan lebih awal untuk memahami dasar mereka.",
    ta: "PSLE வழங்கப்பட்ட நீரோட்டத்தின் தேவையை அடையவில்லை என்றால், இரண்டு சூழ்நிலைகள் ஏற்படுகின்றன. (1) அதே பள்ளியில் கீழ்நீரோட்டம்: அதே பள்ளியில் குழந்தையைக் குறைந்த நீரோட்டத்தில் பள்ளி உள்வாங்கலாம் (எ.கா. IP சலுகை அதே பள்ளியில் Express ஆகிறது). (2) சலுகை திரும்பப் பெறப்படுதல்: குறைந்த நீரோட்டத்திற்குக்கூட வேட்பாளர் பொருந்தவில்லை எனப் பள்ளி முடிவு செய்கிறது. இது பள்ளிக்குப் பள்ளி கையாளப்படுகிறது — MOE-க்கு மைய விதி இல்லை. அவர்களின் கொள்கையைப் புரிந்துகொள்ள வழங்கும் பள்ளியின் சேர்க்கை அலுவலகத்துடன் முன்கூட்டியே உறுதிப்படுத்தவும்.",
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
  en: "The months between application close and the October preference submission are the slog: the interview-and-trial window from June to August, school notifications arriving by 28 August (often earlier), then the wait through September into October. The pages below cover the prep side; come back here once your child's notification lands.",
  zh: "申请截止到 10 月志愿填报之间的这几个月最难熬：6 月到 8 月是面试与试训窗口 · 学校最迟 8 月 28 日通知（常常更早）· 之后 9 月一路等到 10 月。下面的页面覆盖备战部分；孩子的通知一到 · 回来这一页。",
  ms: "Bulan-bulan antara penutupan permohonan dan penyerahan keutamaan Oktober adalah masa yang sukar: temu duga dari Jun hingga Ogos, pemberitahuan sekolah menjelang 28 Ogos (selalunya lebih awal), kemudian menunggu hingga Oktober.",
  ta: "விண்ணப்பம் முடிந்து அக்டோபர் முன்னுரிமை சமர்ப்பிப்பு வரையிலான மாதங்கள் கடினமானவை: ஜூன்-ஆகஸ்ட் நேர்காணல்கள், ஆகஸ்ட் 28-க்குள் பள்ளி அறிவிப்பு (பெரும்பாலும் முன்பே), பிறகு அக்டோபர் வரை காத்திருப்பு.",
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
          {/* ── SECTION 0 · THE WAIT ── */}
          <section className="py-12 sm:py-14">
            <p className="text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
              {pick(S0_KICKER, locale)}
            </p>
            <h2
              style={{ textTransform: "none" }}
              className="mt-2 font-display text-2xl font-extrabold leading-snug tracking-tight text-intellectual sm:text-3xl"
            >
              <Clock4 className="mr-2 inline-block h-7 w-7 text-intellectual" aria-hidden />
              {pick(S0_TITLE, locale)}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{pick(S0_INTRO, locale)}</p>
            <ul className="mt-6 space-y-4">
              {S0_POINTS.map((pt, i) => (
                <li key={i} className="rounded-2xl border border-intellectual/10 bg-white p-5 shadow-soft sm:p-6">
                  <p className="font-display text-[15px] font-bold text-intellectual" style={{ textTransform: "none" }}>
                    {pick(pt.label, locale)}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{pick(pt.body, locale)}</p>
                </li>
              ))}
            </ul>
          </section>

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
