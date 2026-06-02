"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, ClipboardCheck, Compass, FileSearch, MessageSquareText, Lock, Scale, School } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PillarBackLink } from "@/components/PillarBackLink";
import { RelatedCardsRow } from "@/components/RelatedCardsRow";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };
type LocaleList = { en: string[]; zh: string[]; ms: string[]; ta: string[] };

function pick<T>(s: { en: T; zh: T; ms: T; ta: T }, locale: "en" | "zh" | "ms" | "ta"): T {
  return s[locale];
}

type Phase = {
  id: string;
  icon: typeof CalendarDays;
  dates: LocaleStr;
  label: LocaleStr;
  summary: LocaleStr;
  bullets: LocaleList;
  link?: { href: string; label: LocaleStr };
};

const PHASES: Phase[] = [
  {
    id: "research",
    icon: BookOpen,
    dates: {
      en: "Jan — early May 2026",
      zh: "2026 年 1 月 — 5 月初",
      ms: "Jan — awal Mei 2026",
      ta: "ஜனவரி — மே தொடக்கம் 2026",
    },
    label: {
      en: "Research & shortlist phase",
      zh: "研究与候选名单阶段",
      ms: "Fasa kajian & senarai pendek",
      ta: "ஆராய்ச்சி & குறுகிய பட்டியல் கட்டம்",
    },
    summary: {
      en: "Build your shortlist before the portal opens. Map talent areas to schools, check PSLE COP history, attend open houses, and assemble the evidence your child already has.",
      zh: "门户开放前先把候选名单做出来。把孩子的才艺方向对到学校，查历年 PSLE COP，去参加开放日，把已经有的证据材料整理好。",
      ms: "Bina senarai pendek anda sebelum portal dibuka. Padankan bidang bakat ke sekolah, semak sejarah PSLE COP, hadir hari terbuka, dan kumpulkan bukti yang sudah dimiliki anak anda.",
      ta: "வாயில் திறப்பதற்கு முன் உங்கள் குறுகிய பட்டியலை உருவாக்குங்கள். திறமை பகுதிகளை பள்ளிகளுடன் பொருத்தவும், PSLE COP வரலாற்றை சரிபார்க்கவும், திறந்த நாட்களில் கலந்துகொள்ளவும், உங்கள் குழந்தையிடம் ஏற்கனவே உள்ள சான்றுகளை சேகரிக்கவும்.",
    },
    bullets: {
      en: [
        "Use the school finder to filter all 147 schools by talent area.",
        "Attend at least 2 open houses for schools on your shortlist — culture matters more than brochure.",
        "Collect external evidence: graded exam certificates, competition results, NSG records, teacher reference drafts.",
        "Draft the child's 60-second self-introduction (we cover this in /dsa-interview).",
      ],
      zh: [
        "用学校搜索器按才艺方向筛选全部 147 所中学。",
        "候选名单上至少去 2 个开放日——校园氛围比 brochure 重要得多。",
        "收集外部证据：考级证书、比赛成绩、NSG 记录、老师推荐信草稿。",
        "起草孩子的 60 秒自我介绍（在 /dsa-interview 有完整教学）。",
      ],
      ms: [
        "Gunakan pencari sekolah untuk menapis kesemua 147 sekolah mengikut bidang bakat.",
        "Hadir sekurang-kurangnya 2 hari terbuka untuk sekolah dalam senarai pendek — budaya lebih penting daripada brosur.",
        "Kumpulkan bukti luaran: sijil peperiksaan bergred, keputusan pertandingan, rekod NSG, draf rujukan guru.",
        "Drafkan pengenalan diri 60 saat anak anda (kami liput ini di /dsa-interview).",
      ],
      ta: [
        "திறமை பகுதி வாரியாக அனைத்து 147 பள்ளிகளையும் வடிகட்ட பள்ளி தேடியைப் பயன்படுத்துங்கள்.",
        "உங்கள் குறுகிய பட்டியலில் உள்ள பள்ளிகளுக்கு குறைந்தது 2 திறந்த நாட்களில் கலந்துகொள்ளுங்கள் — பிரசுரத்தை விட கலாச்சாரம் முக்கியம்.",
        "வெளி சான்றுகளை சேகரிக்கவும்: தர பரீட்சை சான்றிதழ்கள், போட்டி முடிவுகள், NSG பதிவுகள், ஆசிரியர் பரிந்துரை வரைவுகள்.",
        "உங்கள் குழந்தையின் 60 வினாடி சுய அறிமுகத்தை வரைவு செய்யுங்கள் (இதை /dsa-interview-இல் விரிவாக விளக்குகிறோம்).",
      ],
    },
    link: {
      href: "/dsa-finder",
      label: { en: "Open the 2026 Talent Search Center", zh: "打开 2026 才艺学校搜索", ms: "Buka Pusat Carian Bakat 2026", ta: "2026 திறமை தேடல் மையத்தைத் திற" },
    },
  },
  {
    id: "apply",
    icon: ClipboardCheck,
    dates: {
      en: "5 May — 2 Jun 2026 · 4:30pm SGT",
      zh: "2026 年 5 月 5 日 — 6 月 2 日 · 下午 4:30",
      ms: "5 Mei — 2 Jun 2026 · 4:30 petang SGT",
      ta: "5 மே — 2 ஜூன் 2026 · மாலை 4:30 SGT",
    },
    label: {
      en: "Application window",
      zh: "申请窗口",
      ms: "Tetingkap permohonan",
      ta: "விண்ணப்ப காலம்",
    },
    summary: {
      en: "Submit applications through the official MOE DSA-Sec e-Service. You may list up to three schools, and up to two talent areas per school — six entries in total at most. The portal closes 2 June 2026 at 4:30pm SGT and does not reopen.",
      zh: "通过 MOE 官方 DSA-Sec e-Service 提交申请。最多 3 所学校，每所最多 2 个才艺方向，总共最多 6 个条目。门户在 2026 年 6 月 2 日下午 4:30（SGT）关闭，不会再开。",
      ms: "Hantar permohonan melalui e-Service DSA-Sec rasmi MOE. Anda boleh senaraikan sehingga tiga sekolah, dan sehingga dua bidang bakat setiap sekolah — maksimum enam entri. Portal ditutup pada 2 Jun 2026 jam 4:30 petang SGT dan tidak dibuka semula.",
      ta: "MOE அதிகாரப்பூர்வ DSA-Sec e-Service மூலம் விண்ணப்பங்களை சமர்ப்பிக்கவும். அதிகபட்சம் மூன்று பள்ளிகளை பட்டியலிடலாம், ஒரு பள்ளிக்கு அதிகபட்சம் இரண்டு திறமை பகுதிகள் — மொத்தம் ஆறு உள்ளீடுகள் வரை. வாயில் 2 ஜூன் 2026 மாலை 4:30 SGT இல் மூடப்படுகிறது, மீண்டும் திறக்காது.",
    },
    bullets: {
      en: [
        "Singpass login is required — both parent and child accounts can submit.",
        "Upload supporting documents in the portal: certificates, competition results, portfolio links, teacher reference.",
        "Order does matter at submission, but you can still re-rank during the October Preference Exercise.",
        "Do not wait until 2 June — the portal slows under load on the last day.",
      ],
      zh: [
        "需要 Singpass 登录——家长账号或孩子账号都能提交。",
        "把支持材料传到门户里：证书、比赛成绩、作品集链接、老师推荐。",
        "提交时学校顺序有意义，但 10 月志愿填报阶段还可以重新排序。",
        "不要拖到 6 月 2 日才交——最后一天门户经常卡顿。",
      ],
      ms: [
        "Log masuk Singpass diperlukan — akaun ibu bapa atau anak boleh hantar.",
        "Muat naik dokumen sokongan ke dalam portal: sijil, keputusan pertandingan, pautan portfolio, rujukan guru.",
        "Susunan penting semasa penghantaran, tetapi anda masih boleh susun semula semasa Latihan Keutamaan Oktober.",
        "Jangan tunggu sehingga 2 Jun — portal perlahan di bawah beban pada hari terakhir.",
      ],
      ta: [
        "Singpass உள்நுழைவு தேவை — பெற்றோர் மற்றும் குழந்தை கணக்குகள் இரண்டும் சமர்ப்பிக்க முடியும்.",
        "ஆதரவு ஆவணங்களை வாயிலில் பதிவேற்றுங்கள்: சான்றிதழ்கள், போட்டி முடிவுகள், போர்ட்ஃபோலியோ இணைப்புகள், ஆசிரியர் பரிந்துரை.",
        "சமர்ப்பிக்கும் போது வரிசை முக்கியம், ஆனால் அக்டோபர் முன்னுரிமைப் பயிற்சியின் போது மீண்டும் வரிசைப்படுத்தலாம்.",
        "2 ஜூன் வரை காத்திருக்க வேண்டாம் — கடைசி நாளில் சுமையின் கீழ் வாயில் மெதுவாகிறது.",
      ],
    },
    link: {
      href: "/apply",
      label: { en: "Open application checklist", zh: "打开申请清单", ms: "Buka senarai semak permohonan", ta: "விண்ணப்ப சரிபார்ப்புப் பட்டியலைத் திற" },
    },
  },
  {
    id: "selection",
    icon: MessageSquareText,
    dates: {
      en: "22 Jun — 28 Aug 2026",
      zh: "2026 年 6 月 22 日 — 8 月 28 日",
      ms: "22 Jun — 28 Ogos 2026",
      ta: "22 ஜூன் — 28 ஆகஸ்ட் 2026",
    },
    label: {
      en: "Selection: interviews, trials, auditions",
      zh: "选拔：面试、试训、试唱",
      ms: "Pemilihan: temu duga, percubaan, ujibakat",
      ta: "தேர்வு: நேர்காணல்கள், சோதனைகள், ஒலித்தேர்வுகள்",
    },
    summary: {
      en: "Shortlisted students are invited to school-run selection activities. Each school runs its own schedule and rubric — there is no shared assessment between schools. Expect interviews, auditions, sports trials, or written tasks depending on the talent area.",
      zh: "进入候选名单的孩子会被邀请参加学校自办的选拔活动。每所学校有自己的时间表和评分标准——学校之间不通用。根据才艺方向，可能是面试、试唱、运动试训、或书面任务。",
      ms: "Pelajar yang disenarai pendek dijemput ke aktiviti pemilihan yang dikendalikan sekolah. Setiap sekolah menjalankan jadual dan rubriknya sendiri — tiada penilaian yang dikongsi antara sekolah. Jangkakan temu duga, ujibakat, percubaan sukan, atau tugasan bertulis bergantung pada bidang bakat.",
      ta: "குறுகிய பட்டியலிடப்பட்ட மாணவர்கள் பள்ளி நடத்தும் தேர்வு நடவடிக்கைகளுக்கு அழைக்கப்படுகிறார்கள். ஒவ்வொரு பள்ளியும் தனது சொந்த அட்டவணை மற்றும் ருப்ரிக்கை இயக்குகிறது — பள்ளிகளுக்கு இடையே பகிரப்பட்ட மதிப்பீடு இல்லை. திறமைப் பகுதியைப் பொறுத்து நேர்காணல்கள், ஒலித்தேர்வுகள், விளையாட்டு சோதனைகள் அல்லது எழுத்துப் பணிகளை எதிர்பார்க்கவும்.",
    },
    bullets: {
      en: [
        "Check email and the portal at least once a day — slots can be issued at 24-48 hours' notice.",
        "Two schools shortlisting for the same talent will run completely different trials.",
        "If your child is sick on a trial date, contact the school admissions email immediately to request a rescheduled slot.",
        "Schools do not publish rubrics. /dsa-interview has 35+ practice Q&A and a 5-element self-intro framework.",
      ],
      zh: [
        "邮箱和门户每天至少查一次——名额可能 24-48 小时内通知。",
        "同一才艺的两所学校会跑完全不同的 trial 流程。",
        "如果孩子在 trial 日生病，立刻给学校招生邮箱写信请求改期。",
        "学校不公开评分标准。/dsa-interview 有 35+ 题练习题库和 5 要素自我介绍框架。",
      ],
      ms: [
        "Semak e-mel dan portal sekurang-kurangnya sekali sehari — slot boleh dikeluarkan dengan notis 24-48 jam.",
        "Dua sekolah yang menyenarai pendek untuk bakat yang sama akan menjalankan percubaan yang sepenuhnya berbeza.",
        "Jika anak anda sakit pada tarikh percubaan, hubungi e-mel kemasukan sekolah segera untuk meminta slot ditangguhkan.",
        "Sekolah tidak menerbitkan rubrik. /dsa-interview mempunyai 35+ soal jawab amalan dan rangka kerja pengenalan diri 5 elemen.",
      ],
      ta: [
        "ஒரு நாளுக்கு குறைந்தது ஒரு முறை மின்னஞ்சல் மற்றும் வாயிலைச் சரிபார்க்கவும் — 24-48 மணி நேர அறிவிப்பில் இடங்கள் வழங்கப்படலாம்.",
        "ஒரே திறமைக்காக குறுகிய பட்டியலிடும் இரண்டு பள்ளிகள் முற்றிலும் வேறுபட்ட சோதனைகளை நடத்தும்.",
        "சோதனை தேதியில் உங்கள் குழந்தை நோய்வாய்ப்பட்டால், மீள்அமைக்கப்பட்ட இடத்திற்கு உடனடியாக பள்ளி சேர்க்கை மின்னஞ்சலைத் தொடர்பு கொள்ளுங்கள்.",
        "பள்ளிகள் ருப்ரிக்குகளை வெளியிடவில்லை. /dsa-interview-இல் 35+ பயிற்சி Q&A மற்றும் 5-உறுப்பு சுய அறிமுக சட்டகம் உள்ளது.",
      ],
    },
    link: {
      href: "/dsa-interview",
      label: { en: "Browse interview prep", zh: "查看面试准备", ms: "Lihat persediaan temu duga", ta: "நேர்காணல் தயாரிப்பு" },
    },
  },
  {
    id: "preference",
    icon: Compass,
    dates: {
      en: "19 — 23 Oct 2026 · closes 4:30pm SGT",
      zh: "2026 年 10 月 19 — 23 日 · 23 日下午 4:30 关闭",
      ms: "19 — 23 Okt 2026 · ditutup 4:30 petang SGT",
      ta: "19 — 23 அக்டோபர் 2026 · மாலை 4:30 SGT மூடல்",
    },
    label: {
      en: "School preference exercise",
      zh: "学校志愿填报",
      ms: "Latihan keutamaan sekolah",
      ta: "பள்ளி முன்னுரிமைப் பயிற்சி",
    },
    summary: {
      en: "If you received Confirmed Offers (CO) or Waitlist (WL) results from any school, this is when you rank your preference order through the MOE portal. The order you submit determines which offer is locked in at result-release time.",
      zh: "如果收到任何学校的 Confirmed Offer（CO）或 Waitlist（WL）结果，这一周内在 MOE 门户里排你的志愿顺序。提交的顺序决定结果释放时锁定哪个 offer。",
      ms: "Jika anda menerima Tawaran Sah (CO) atau Senarai Menunggu (WL) daripada mana-mana sekolah, ini masanya untuk susun keutamaan anda melalui portal MOE. Susunan yang anda hantar menentukan tawaran mana dikunci masa pelepasan keputusan.",
      ta: "ஏதேனும் பள்ளியிலிருந்து உறுதிசெய்யப்பட்ட சலுகைகள் (CO) அல்லது காத்திருப்புப் பட்டியல் (WL) முடிவுகளைப் பெற்றால், MOE வாயில் வழியாக உங்கள் முன்னுரிமை வரிசையை வரிசைப்படுத்த இது நேரம். நீங்கள் சமர்ப்பிக்கும் வரிசை முடிவு வெளியீட்டு நேரத்தில் எந்த சலுகை பூட்டப்படுகிறது என்பதை தீர்மானிக்கிறது.",
    },
    bullets: {
      en: [
        "Rank schools by where your child wants to be, not by school prestige.",
        "Higher-preference Confirmed Offer takes precedence over lower-preference Confirmed Offer.",
        "Waitlist conversion depends on whether top-preference applicants decline — schools do not pre-disclose probability.",
        "If you do not submit by 4:30pm 23 Oct, MOE uses the order you submitted in the original application.",
      ],
      zh: [
        "按孩子想去的顺序排，不按学校名气排。",
        "排序高的 Confirmed Offer 优先于排序低的 Confirmed Offer。",
        "Waitlist 转正取决于高排序申请人是否拒绝——学校不会提前告诉你概率。",
        "如果 10 月 23 日下午 4:30 之前不提交，MOE 会沿用最初申请时填的顺序。",
      ],
      ms: [
        "Susun sekolah mengikut tempat anak anda mahu pergi, bukan prestij sekolah.",
        "Tawaran Sah keutamaan lebih tinggi diutamakan daripada Tawaran Sah keutamaan lebih rendah.",
        "Penukaran Senarai Menunggu bergantung pada sama ada pemohon keutamaan teratas menolak — sekolah tidak mendedahkan kebarangkalian.",
        "Jika anda tidak menghantar menjelang 4:30 petang 23 Okt, MOE akan menggunakan susunan permohonan asal.",
      ],
      ta: [
        "பள்ளி கௌரவத்தின் அடிப்படையில் அல்ல, உங்கள் குழந்தை செல்ல விரும்பும் இடத்தின் அடிப்படையில் பள்ளிகளை வரிசைப்படுத்தவும்.",
        "உயர்-முன்னுரிமை உறுதிசெய்யப்பட்ட சலுகை குறைந்த-முன்னுரிமை உறுதிசெய்யப்பட்ட சலுகையை விட முன்னுரிமை பெறுகிறது.",
        "காத்திருப்புப் பட்டியல் மாற்றம் முதன்மை-முன்னுரிமை விண்ணப்பதாரர்கள் மறுக்கிறார்களா என்பதைப் பொறுத்தது — பள்ளிகள் நிகழ்தகவை முன்கூட்டியே வெளியிடவில்லை.",
        "23 அக் மாலை 4:30 மணிக்குள் சமர்ப்பிக்கவில்லை என்றால், MOE அசல் விண்ணப்பத்தில் சமர்ப்பித்த வரிசையைப் பயன்படுத்துகிறது.",
      ],
    },
  },
  {
    id: "results",
    icon: FileSearch,
    dates: {
      en: "24 — 25 Nov 2026 · with PSLE",
      zh: "2026 年 11 月 24 — 25 日 · 与 PSLE 同步",
      ms: "24 — 25 Nov 2026 · bersama PSLE",
      ta: "24 — 25 நவம்பர் 2026 · PSLE உடன்",
    },
    label: {
      en: "Results released",
      zh: "结果公布",
      ms: "Keputusan diumumkan",
      ta: "முடிவுகள் வெளியீடு",
    },
    summary: {
      en: "DSA outcomes are released together with PSLE results. If the Confirmed Offer is locked in and the PSLE score clears the minimum Posting Group for the course, the child skips S1 Posting. Otherwise S1 Posting opens as normal.",
      zh: "DSA 结果与 PSLE 同时公布。如果 Confirmed Offer 锁定，并且 PSLE 成绩达到了所录取课程的最低 Posting Group 要求，孩子直接跳过 S1 Posting。否则 S1 Posting 正常开放。",
      ms: "Keputusan DSA dikeluarkan bersama keputusan PSLE. Jika Tawaran Sah dikunci dan skor PSLE melepasi Posting Group minimum untuk kursus, anak melangkau Penempatan S1. Jika tidak, Penempatan S1 dibuka seperti biasa.",
      ta: "DSA முடிவுகள் PSLE முடிவுகளுடன் வெளியிடப்படுகின்றன. உறுதிசெய்யப்பட்ட சலுகை பூட்டப்பட்டு, பாடத்திற்கான குறைந்தபட்ச Posting Group-ஐ PSLE மதிப்பெண் கடந்தால், குழந்தை S1 Posting-ஐ தாண்டுகிறது. இல்லையெனில் S1 Posting வழக்கம் போல் திறக்கப்படுகிறது.",
    },
    bullets: {
      en: [
        "Express / IP minimum: PSLE AL total ≤ 22 (Posting Group 3).",
        "Some dual-track schools may issue a Counter-Offer for O-Level if PSLE does not meet IP eligibility.",
        "Accepting the Confirmed Offer is binding — you cannot then participate in S1 Posting.",
        "If DSA fails or no Confirmed Offer is locked in, your child enters S1 Posting normally with PSLE.",
      ],
      zh: [
        "Express / IP 最低门槛：PSLE AL 总分 ≤ 22（Posting Group 3）。",
        "双轨制学校如果 PSLE 没达到 IP 资格但达到了 O-Level，可能发 O-Level 的 Counter-Offer。",
        "接受 Confirmed Offer 即具有约束力——之后不能再参加 S1 Posting。",
        "如果 DSA 失败或没有锁定 Confirmed Offer，孩子按 PSLE 成绩正常进入 S1 Posting。",
      ],
      ms: [
        "Minimum Express / IP: jumlah AL PSLE ≤ 22 (Posting Group 3).",
        "Sesetengah sekolah dwi-trek mungkin mengeluarkan Tawaran Balas untuk O-Level jika PSLE tidak memenuhi kelayakan IP.",
        "Menerima Tawaran Sah adalah mengikat — anda tidak boleh menyertai Penempatan S1 selepas itu.",
        "Jika DSA gagal atau tiada Tawaran Sah dikunci, anak anda memasuki Penempatan S1 secara normal dengan PSLE.",
      ],
      ta: [
        "Express / IP குறைந்தபட்சம்: PSLE AL மொத்தம் ≤ 22 (Posting Group 3).",
        "PSLE IP தகுதியை பூர்த்தி செய்யவில்லை என்றால் சில இரட்டை-பாதை பள்ளிகள் O-Level-க்கான எதிர் சலுகை வழங்கலாம்.",
        "உறுதிசெய்யப்பட்ட சலுகையை ஏற்றுக்கொள்வது கட்டுப்படுத்தும் — அதன் பிறகு நீங்கள் S1 Posting-இல் பங்கேற்க முடியாது.",
        "DSA தோல்வியடைந்தாலோ அல்லது உறுதிசெய்யப்பட்ட சலுகை பூட்டப்படவில்லை என்றாலோ, உங்கள் குழந்தை PSLE-உடன் சாதாரணமாக S1 Posting-இல் நுழைகிறது.",
      ],
    },
    link: {
      href: "/dsa-results",
      label: { en: "DSA results & PSLE outcome", zh: "DSA 结果与 PSLE 结果", ms: "Keputusan DSA & PSLE", ta: "DSA & PSLE முடிவுகள்" },
    },
  },
];

type Fact = {
  icon: typeof Lock;
  title: LocaleStr;
  body: LocaleStr;
};

const FACTS: Fact[] = [
  {
    icon: Lock,
    title: {
      en: "Commitment rule",
      zh: "承诺规则",
      ms: "Peraturan komitmen",
      ta: "உறுதிமொழி விதி",
    },
    body: {
      en: "Once you accept a Confirmed Offer, your child is committed to that pathway. They will not participate in the regular Secondary 1 Posting exercise for school choice, and transfers between secondary schools are generally not allowed except in exceptional circumstances defined by MOE. The talent-area CCA commitment lasts at least two years.",
      zh: "一旦接受 Confirmed Offer，孩子就锁定了那条路径。他们不再参加常规的 Secondary 1 Posting 择校流程；中学之间的转学一般不允许，除非 MOE 定义的特殊情况。所申请才艺方向的 CCA 承诺至少 2 年。",
      ms: "Sebaik sahaja anda menerima Tawaran Sah, anak anda komited kepada laluan itu. Mereka tidak akan menyertai latihan Penempatan Tingkatan 1 biasa untuk pilihan sekolah, dan pemindahan antara sekolah menengah pada umumnya tidak dibenarkan kecuali dalam keadaan luar biasa yang ditakrifkan oleh MOE. Komitmen CCA bidang bakat berlangsung sekurang-kurangnya dua tahun.",
      ta: "உறுதிசெய்யப்பட்ட சலுகையை நீங்கள் ஏற்றுக்கொண்டவுடன், உங்கள் குழந்தை அந்த பாதைக்கு உறுதிமொழியளிக்கப்படுகிறது. பள்ளி தேர்வுக்கான வழக்கமான இடைநிலை 1 Posting பயிற்சியில் அவர்கள் பங்கேற்க மாட்டார்கள், மற்றும் MOE-வால் வரையறுக்கப்பட்ட விதிவிலக்கான சூழ்நிலைகள் தவிர இடைநிலை பள்ளிகளுக்கு இடையே மாற்றங்கள் பொதுவாக அனுமதிக்கப்படாது. திறமைப் பகுதி CCA உறுதிமொழி குறைந்தபட்சம் இரண்டு ஆண்டுகள் நீடிக்கிறது.",
    },
  },
  {
    icon: Scale,
    title: {
      en: "PSLE requirement",
      zh: "PSLE 门槛要求",
      ms: "Keperluan PSLE",
      ta: "PSLE தேவை",
    },
    body: {
      en: "DSA is an early allocation route, not a bypass of PSLE standards. Your child's PSLE score must still meet the minimum requirement for the school's Posting Group (and any course eligibility rules) set by MOE for the offer to stand. Express / IP courses require AL total ≤ 22 (Posting Group 3). If the score does not clear the floor, the Confirmed Offer is withdrawn or converted to a Counter-Offer for a lower track.",
      zh: "DSA 是提前录取路径，不是 PSLE 门槛的豁免。孩子的 PSLE 成绩仍须达到 MOE 设定的学校 Posting Group 最低要求（以及该课程的资格规则），offer 才生效。Express / IP 课程要求 AL 总分 ≤ 22（Posting Group 3）。如果没达到门槛，Confirmed Offer 会被撤销，或转换成更低 track 的 Counter-Offer。",
      ms: "DSA ialah laluan peruntukan awal, bukan memintas standard PSLE. Skor PSLE anak anda mesti memenuhi keperluan minimum untuk Posting Group sekolah (dan apa-apa peraturan kelayakan kursus) yang ditetapkan oleh MOE supaya tawaran kekal. Kursus Express / IP memerlukan jumlah AL ≤ 22 (Posting Group 3). Jika skor tidak melepasi tahap minimum, Tawaran Sah ditarik balik atau ditukar kepada Tawaran Balas untuk trek lebih rendah.",
      ta: "DSA என்பது முற்கூட்டிய ஒதுக்கீட்டு வழி, PSLE தரங்களை தாண்டுவது அல்ல. உங்கள் குழந்தையின் PSLE மதிப்பெண் இன்னும் சலுகை நீடிக்க MOE அமைத்த பள்ளியின் Posting Group-க்கான குறைந்தபட்ச தேவையை (மற்றும் எந்த பாட தகுதி விதிகளையும்) பூர்த்தி செய்ய வேண்டும். Express / IP பாடங்களுக்கு AL மொத்தம் ≤ 22 (Posting Group 3) தேவை. மதிப்பெண் தளத்தை கடக்கவில்லை என்றால், உறுதிசெய்யப்பட்ட சலுகை திரும்பப் பெறப்படுகிறது அல்லது குறைந்த பாதைக்கான எதிர் சலுகையாக மாற்றப்படுகிறது.",
    },
  },
];

export function TimelinePageBody() {
  const { locale } = useLanguage();

  const kicker: LocaleStr = {
    en: "2026 Application Timeline · Singapore",
    zh: "2026 申请时间线 · 新加坡",
    ms: "Garis Masa Permohonan 2026 · Singapura",
    ta: "2026 விண்ணப்ப கால அட்டவணை · சிங்கப்பூர்",
  };
  const title: LocaleStr = {
    en: "The 2026 DSA-Sec timeline, in five phases.",
    zh: "2026 DSA-Sec 全程，五个阶段一次看清。",
    ms: "Garis masa DSA-Sec 2026, dalam lima fasa.",
    ta: "2026 DSA-Sec கால அட்டவணை, ஐந்து கட்டங்களில்.",
  };
  const subtitle: LocaleStr = {
    en: "Plain dates for the 2026 cycle, with the actions each phase requires and the things parents most often miss. Dates follow the MOE 2026 DSA-Sec schedule — always confirm critical deadlines on the official portal.",
    zh: "2026 周期的明确日期，加上每个阶段要做什么、家长最常漏掉什么。日期依据 MOE 2026 DSA-Sec 官方时间表——关键截止日请回到 MOE 官方门户确认。",
    ms: "Tarikh jelas untuk kitaran 2026, dengan tindakan setiap fasa diperlukan dan perkara yang ibu bapa paling kerap terlepas pandang. Tarikh mengikut jadual MOE 2026 DSA-Sec — sentiasa sahkan tarikh akhir kritikal di portal rasmi.",
    ta: "2026 சுழற்சிக்கான தெளிவான தேதிகள், ஒவ்வொரு கட்டமும் தேவைப்படும் செயல்களுடன் மற்றும் பெற்றோர் அடிக்கடி தவறவிடும் விஷயங்களுடன். தேதிகள் MOE 2026 DSA-Sec அட்டவணையைப் பின்பற்றுகின்றன — முக்கியமான இறுதி தேதிகளை எப்போதும் அதிகாரப்பூர்வ வாயிலில் உறுதிப்படுத்தவும்.",
  };
  const factsHeading: LocaleStr = {
    en: "Two rules parents most often miss",
    zh: "家长最常漏掉的两条规则",
    ms: "Dua peraturan yang ibu bapa paling kerap terlepas pandang",
    ta: "பெற்றோர் அடிக்கடி தவறவிடும் இரண்டு விதிகள்",
  };
  const factsLead: LocaleStr = {
    en: "When weighing DSA against the mainstream PSLE posting exercise, these are the two policy points families repeatedly underestimate.",
    zh: "把 DSA 跟 PSLE 主流派位放在一起权衡时，这两条政策点是家庭反复低估的。",
    ms: "Apabila menimbang DSA berbanding latihan penempatan PSLE arus perdana, ini ialah dua perkara dasar yang sering dipandang ringan oleh keluarga.",
    ta: "DSA-ஐ முக்கிய PSLE இடம் ஒதுக்கீட்டுப் பயிற்சியுடன் ஒப்பிட்டு எடைபோடும்போது, குடும்பங்கள் தொடர்ந்து குறைத்து மதிப்பிடும் இரண்டு கொள்கைப் புள்ளிகள் இவை.",
  };
  const newToDsaTitle: LocaleStr = {
    en: "New to DSA?",
    zh: "刚开始了解 DSA？",
    ms: "Baru kenal DSA?",
    ta: "DSA-ஐ இப்போதுதான் அறிந்துகொள்கிறீர்களா?",
  };
  const newToDsaBody: LocaleStr = {
    en: "Start with what DSA-Sec is, why it exists, who it is realistically for, and how a Confirmed Offer interacts with PSLE.",
    zh: "先看 DSA-Sec 是什么、为什么存在、现实意义上适合谁、Confirmed Offer 怎么跟 PSLE 互动。",
    ms: "Mula dengan memahami apa itu DSA-Sec, mengapa ia wujud, untuk siapa secara realistik, dan bagaimana Tawaran Sah berinteraksi dengan PSLE.",
    ta: "DSA-Sec என்றால் என்ன, ஏன் உள்ளது, யதார்த்தமாக யாருக்கானது, மற்றும் உறுதிசெய்யப்பட்ட சலுகை PSLE-உடன் எவ்வாறு தொடர்பு கொள்கிறது என்பதைப் புரிந்துகொள்ள தொடங்குங்கள்.",
  };
  const guideCta: LocaleStr = {
    en: "Start with What Is DSA",
    zh: "先看：什么是 DSA",
    ms: "Mula dengan Apa itu DSA",
    ta: "DSA என்றால் என்ன — தொடங்குங்கள்",
  };

  const bcGuide: LocaleStr = {
    en: "DSA Guide",
    zh: "DSA 指南",
    ms: "Panduan DSA",
    ta: "DSA வழிகாட்டி",
  };
  const bcHere: LocaleStr = {
    en: "2026 Timeline",
    zh: "2026 时间线",
    ms: "Garis Masa 2026",
    ta: "2026 கால அட்டவணை",
  };

  const relKicker: LocaleStr = {
    en: "Related reference",
    zh: "相关参考",
    ms: "Rujukan berkaitan",
    ta: "தொடர்புடைய குறிப்பு",
  };
  const relHeading: LocaleStr = {
    en: "Three references parents pair with the timeline",
    zh: "家长常与时间线一起看的三个参考",
    ms: "Tiga rujukan yang ibu bapa pasangkan dengan garis masa",
    ta: "கால அட்டவணையுடன் பார்க்கும் மூன்று குறிப்புகள்",
  };
  const r1T: LocaleStr = {
    en: "What DSA actually is",
    zh: "DSA 到底是什么",
    ms: "Apakah DSA sebenarnya",
    ta: "DSA உண்மையில் என்ன",
  };
  const r1B: LocaleStr = {
    en: "Mechanism, eligibility, what DSA isn't — before the dates make sense.",
    zh: "机制、资格、DSA 不是什么 · 看懂日期前先看清楚。",
    ms: "Mekanisme, kelayakan, apa DSA bukan — sebelum tarikh bermakna.",
    ta: "முறை, தகுதி, DSA என்ன அல்ல — தேதிகள் புரிய முன்.",
  };
  const r2T: LocaleStr = {
    en: "16 talent paths",
    zh: "16 个才艺方向",
    ms: "16 laluan bakat",
    ta: "16 திறமைப் பாதைகள்",
  };
  const r2B: LocaleStr = {
    en: "Trial formats, what coaches assess, which schools accept what.",
    zh: "Trial 格式 · 教练评分维度 · 各才艺对应的学校。",
    ms: "Format trial, apa yang jurulatih nilai, sekolah mana terima apa.",
    ta: "சோதனை வடிவம், பயிற்சியாளர் என்ன மதிப்பிடுகிறார்கள்.",
  };
  const r3T: LocaleStr = {
    en: "147 schools",
    zh: "147 所学校",
    ms: "147 sekolah",
    ta: "147 பள்ளிகள்",
  };
  const r3B: LocaleStr = {
    en: "Full directory with PSLE COP, DSA availability, and talent areas per school.",
    zh: "完整目录 · 含 PSLE COP、DSA 名额、各校才艺方向。",
    ms: "Direktori penuh dengan PSLE COP dan ketersediaan DSA.",
    ta: "PSLE COP மற்றும் DSA உள்ள முழு பட்டியல்.",
  };

  return (
    <>
      <SiteHeader />
      <Breadcrumb
        items={[
          { label: pick(bcGuide, locale), href: "/dsa-guide" },
          { label: pick(bcHere, locale) },
        ]}
      />
      <main className="bg-surface">
        <section className="bg-hero-mesh">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
              {pick(kicker, locale)}
            </p>
            <h1
              style={{ textTransform: "none" }}
              className="font-display text-3xl font-extrabold leading-tight tracking-tight text-intellectual sm:text-4xl lg:text-5xl"
            >
              {pick(title, locale)}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-intellectual-muted sm:text-lg">
              {pick(subtitle, locale)}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <ol className="space-y-5 sm:space-y-6">
              {PHASES.map((phase, i) => {
                const Icon = phase.icon;
                const bullets = pick(phase.bullets, locale);
                return (
                  <li
                    key={phase.id}
                    className="relative rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft sm:p-6"
                  >
                    <div className="flex gap-4 sm:gap-5">
                      <div className="flex shrink-0 flex-col items-center">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="mt-2 text-[11px] font-bold tracking-wider text-intellectual/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] font-semibold tracking-[0.12em] text-champagne-dark normal-case">
                          {pick(phase.dates, locale)}
                        </p>
                        <h2 className="mt-1 font-display text-lg font-semibold text-intellectual sm:text-xl" style={{ textTransform: "none" }}>
                          {pick(phase.label, locale)}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-intellectual-muted sm:text-[15px]">
                          {pick(phase.summary, locale)}
                        </p>
                        <ul className="mt-4 space-y-1.5 border-l-2 border-champagne/40 pl-4">
                          {bullets.map((b, bi) => (
                            <li key={bi} className="text-[13px] leading-relaxed text-intellectual-muted/90 sm:text-sm">
                              {b}
                            </li>
                          ))}
                        </ul>
                        {phase.link ? (
                          <Link
                            href={phase.link.href}
                            className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-intellectual transition hover:text-intellectual-light"
                          >
                            {pick(phase.link.label, locale)}
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            <section className="mt-14 sm:mt-16" aria-labelledby="facts-heading">
              <h2 id="facts-heading" className="font-display text-xl font-bold text-intellectual sm:text-2xl" style={{ textTransform: "none" }}>
                {pick(factsHeading, locale)}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-[15px]">
                {pick(factsLead, locale)}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
                {FACTS.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <article key={i} className="rounded-2xl border border-champagne/35 bg-gradient-to-br from-white to-champagne-subtle/40 p-5 shadow-sm ring-1 ring-intellectual/8 sm:p-6">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-champagne/20 text-champagne-dark">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <h3 className="font-display text-base font-semibold text-intellectual" style={{ textTransform: "none" }}>
                          {pick(f.title, locale)}
                        </h3>
                      </div>
                      <p className="mt-3 text-[13.5px] leading-relaxed text-intellectual-muted sm:text-sm">
                        {pick(f.body, locale)}
                      </p>
                    </article>
                  );
                })}
              </div>
            </section>

            <div className="mt-12 rounded-2xl border border-intellectual/15 bg-intellectual p-6 text-white sm:mt-14 sm:p-8">
              <p className="font-display text-lg font-semibold sm:text-xl">
                {pick(newToDsaTitle, locale)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {pick(newToDsaBody, locale)}
              </p>
              <Link
                href="/what-is-dsa"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
              >
                <span style={{ textTransform: "none" }}>{pick(guideCta, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <RelatedCardsRow
        kicker={pick(relKicker, locale)}
        heading={pick(relHeading, locale)}
        items={[
          { icon: BookOpen, title: pick(r1T, locale), body: pick(r1B, locale), href: "/what-is-dsa" },
          { icon: Compass, title: pick(r2T, locale), body: pick(r2B, locale), href: "/dsa-interview/talents" },
          { icon: School, title: pick(r3T, locale), body: pick(r3B, locale), href: "/dsa-finder" },
        ]}
      />
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
