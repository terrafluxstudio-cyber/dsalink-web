"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarClock,
  ClipboardList,
  Compass,
  MessageSquareText,
  Scale,
  GitMerge,
  AlertCircle,
  Route,
  ListChecks,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PillarBackLink } from "@/components/PillarBackLink";
import { RelatedCardsRow } from "@/components/RelatedCardsRow";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };
type LocaleParas = { en: string[]; zh: string[]; ms: string[]; ta: string[] };

function pick<T>(s: { en: T; zh: T; ms: T; ta: T }, locale: "en" | "zh" | "ms" | "ta"): T {
  return s[locale];
}

const KICKER: LocaleStr = {
  en: "DSA-Sec · Singapore · Plain-English explainer",
  zh: "DSA-Sec · 新加坡 · 通俗讲解",
  ms: "DSA-Sec · Singapura · Penjelasan ringkas",
  ta: "DSA-Sec · சிங்கப்பூர் · எளிய விளக்கம்",
};

const TITLE: LocaleStr = {
  en: "What is DSA-Sec, and how does it actually work?",
  zh: "什么是 DSA-Sec？它到底怎么运作？",
  ms: "Apakah DSA-Sec, dan bagaimanakah ia berfungsi?",
  ta: "DSA-Sec என்றால் என்ன, அது எவ்வாறு செயல்படுகிறது?",
};

const LEAD: LocaleStr = {
  en: "Direct School Admission to Secondary (DSA-Sec) lets your child enter a secondary school based on talent in sports, arts, academics, or leadership — separate from PSLE posting. MOE runs the central portal once a year, but each school decides who gets in. This page is the full mental model: how the scheme works, what 2019 changed, who DSA is realistically for, and how a Confirmed Offer interacts with PSLE.",
  zh: "DSA-Sec（中学直接收生计划）让孩子凭借体育、艺术、学术或领导才能进入中学，与 PSLE 派位独立运作。MOE 每年开放一次中央门户，但具体录谁由学校决定。本页给你完整的思考框架：机制怎么运作、2019 改革改了什么、DSA 现实意义上适合谁、Confirmed Offer 如何与 PSLE 互动。",
  ms: "Direct School Admission to Secondary (DSA-Sec) membenarkan anak anda memasuki sekolah menengah berdasarkan bakat dalam sukan, seni, akademik, atau kepimpinan — berasingan daripada penempatan PSLE. MOE mengendalikan portal pusat setahun sekali, tetapi setiap sekolah memutuskan siapa yang diterima. Halaman ini ialah model fikiran lengkap: bagaimana skim berfungsi, apa yang berubah pada 2019, untuk siapa DSA sebenarnya, dan bagaimana Tawaran Sah berinteraksi dengan PSLE.",
  ta: "DSA-Sec (Direct School Admission to Secondary) உங்கள் குழந்தையை விளையாட்டு, கலை, கல்வி அல்லது தலைமைத்துவத்தில் உள்ள திறமையின் அடிப்படையில் இடைநிலை பள்ளியில் சேர அனுமதிக்கிறது — PSLE இடம் ஒதுக்கீட்டிலிருந்து தனியாக. MOE ஒவ்வொரு ஆண்டும் ஒருமுறை மத்திய வாயிலை இயக்குகிறது, ஆனால் யாரை ஏற்க வேண்டும் என்பதை ஒவ்வொரு பள்ளியும் தீர்மானிக்கிறது. இந்த பக்கம் முழுமையான சிந்தனை வடிவம் தருகிறது: திட்டம் எவ்வாறு செயல்படுகிறது, 2019 இல் என்ன மாறியது, DSA யதார்த்தமாக யாருக்கானது, மற்றும் உறுதிசெய்யப்பட்ட சலுகை PSLE-உடன் எவ்வாறு தொடர்பு கொள்கிறது.",
};

type Section = {
  icon: typeof BookOpen;
  title: LocaleStr;
  paragraphs: LocaleParas;
};

const SECTIONS: Section[] = [
  {
    icon: BookOpen,
    title: {
      en: "1. What DSA-Sec actually is (and what it isn't)",
      zh: "1. DSA-Sec 到底是什么（不是什么）",
      ms: "1. Apakah DSA-Sec sebenarnya (dan bukan apa)",
      ta: "1. DSA-Sec உண்மையில் என்ன (மற்றும் எது அல்ல)",
    },
    paragraphs: {
      en: [
        "DSA-Sec — Direct School Admission to Secondary — is a Ministry of Education (MOE) scheme that lets a Primary 6 student enter a secondary school on the basis of demonstrated talent, ahead of PSLE results. Most secondary schools open up to 20% of their Secondary 1 places to DSA each year. Four schools — NUS High School of Mathematics and Science, School of the Arts (SOTA), School of Science and Technology (SST), and Singapore Sports School — admit close to 100% of their students through DSA. Those are the exceptions, not the rule.",
        "What DSA is not is a backdoor for academically strong children to bypass the PSLE. The 2019 reforms tightened that explicitly. General academic ability tests — the IQ-style entrance papers some schools used — were removed from DSA. \"Academic\" DSA categories were narrowed to genuinely specialist subjects such as Math Olympiad, Science research, or Humanities, not just \"above-average in Maths\". Every DSA admission must now point to a specific talent area the child will continue to develop in Secondary school through a CCA or sub-CCA programme.",
        "After 2019, DSA stopped being a way to game the PSLE and became what MOE always said it was: an alternate route for students with sustained, demonstrable talent in a specific domain.",
      ],
      zh: [
        "DSA-Sec（中学直接收生计划）是新加坡教育部（MOE）的一项政策，让小六学生在 PSLE 成绩公布之前，凭借才能进入中学。大部分中学每年最多用 20% 的中一名额开放给 DSA。四所学校属于例外——NUS High（数理中学）、SOTA（艺术学院）、SST（科技中学）和新加坡体育学校——这四所几乎 100% 通过 DSA 招生。",
        "DSA 不是给学术强的孩子绕过 PSLE 的后门。2019 年改革把这一点说死了：通用学术能力测试（部分学校原本会出的 IQ 类入学试卷）从 DSA 中取消；学术类 DSA 收窄到真正的专科方向，例如数学奥林匹克、科学研究、人文，而不是泛泛的「数学比平均好」。每一个 DSA 录取都必须对应一个孩子进入中学后会持续发展的才艺方向，通过 CCA 或子 CCA 项目延续。",
        "2019 年之后，DSA 不再是 PSLE 的捷径，而真正变成 MOE 一直以来定义的东西：给在某个具体领域有持续、可证明才能的学生的另一条入学通道。",
      ],
      ms: [
        "DSA-Sec — Direct School Admission to Secondary — adalah skim Kementerian Pendidikan (MOE) yang membenarkan pelajar Tahun 6 memasuki sekolah menengah atas dasar bakat yang dibuktikan, sebelum keputusan PSLE. Kebanyakan sekolah menengah membuka sehingga 20% tempat Tingkatan 1 mereka kepada DSA setiap tahun. Empat sekolah — NUS High School of Mathematics and Science, School of the Arts (SOTA), School of Science and Technology (SST), dan Singapore Sports School — mengambil hampir 100% pelajar melalui DSA. Itu pengecualian, bukan peraturan.",
        "DSA bukan pintu belakang untuk pelajar akademik kuat memintas PSLE. Pembaharuan 2019 mengetatkan perkara ini dengan jelas. Ujian keupayaan akademik umum — kertas masuk gaya IQ yang digunakan oleh sesetengah sekolah — telah dikeluarkan dari DSA. Kategori DSA \"akademik\" dipersempitkan kepada subjek pakar sebenar seperti Olimpiad Matematik, penyelidikan Sains, atau Kemanusiaan, bukan sekadar \"lebih baik daripada purata dalam Matematik\". Setiap kemasukan DSA kini mesti merujuk kepada bidang bakat khusus yang akan diteruskan oleh anak di sekolah menengah melalui program CCA atau sub-CCA.",
        "Selepas 2019, DSA tidak lagi menjadi cara memintas PSLE dan menjadi seperti yang sentiasa dinyatakan oleh MOE: laluan alternatif untuk pelajar dengan bakat yang berterusan dan boleh dibuktikan dalam bidang tertentu.",
      ],
      ta: [
        "DSA-Sec — Direct School Admission to Secondary — என்பது கல்வி அமைச்சகத்தின் (MOE) திட்டமாகும், இது ஆரம்ப பள்ளி 6 மாணவரை PSLE முடிவுகளுக்கு முன்பே, நிரூபிக்கப்பட்ட திறமையின் அடிப்படையில் இடைநிலை பள்ளியில் சேர அனுமதிக்கிறது. பெரும்பாலான இடைநிலை பள்ளிகள் ஒவ்வொரு ஆண்டும் தங்கள் இடைநிலை 1 இடங்களில் 20% வரை DSA-க்காக திறக்கின்றன. நான்கு பள்ளிகள் — NUS High School of Mathematics and Science, School of the Arts (SOTA), School of Science and Technology (SST), மற்றும் Singapore Sports School — கிட்டத்தட்ட 100% மாணவர்களை DSA மூலம் சேர்க்கின்றன. அவை விதிவிலக்குகள், விதி அல்ல.",
        "DSA என்பது கல்வியில் வலுவான குழந்தைகள் PSLE-ஐ தாண்டிச் செல்ல ஒரு பின்வாசல் அல்ல. 2019 சீர்திருத்தங்கள் இதை வெளிப்படையாக இறுக்கின. பொது கல்வித் திறன் தேர்வுகள் — சில பள்ளிகள் பயன்படுத்திய IQ பாணி நுழைவுத் தாள்கள் — DSA-விலிருந்து அகற்றப்பட்டன. \"கல்வி\" DSA வகைகள் கணித ஒலிம்பியாட், அறிவியல் ஆராய்ச்சி, அல்லது மனிதவியல் போன்ற உண்மையான சிறப்புப் பாடங்களுக்கு மட்டுமே சுருக்கப்பட்டன, \"கணிதத்தில் சராசரியை விட சிறந்தவர்\" என்பது மட்டும் அல்ல. ஒவ்வொரு DSA சேர்க்கையும் இப்போது குழந்தை இடைநிலை பள்ளியில் CCA அல்லது துணை-CCA திட்டத்தின் மூலம் தொடர்ந்து வளர்க்கும் ஒரு குறிப்பிட்ட திறமைப் பகுதியைச் சுட்டிக்காட்ட வேண்டும்.",
        "2019 க்குப் பிறகு, DSA PSLE-ஐ ஏமாற்றும் வழியாக இருப்பதை நிறுத்தி, MOE எப்போதும் சொன்னது போலவே மாறியது: ஒரு குறிப்பிட்ட பகுதியில் நிலையான, நிரூபிக்கக்கூடிய திறமை கொண்ட மாணவர்களுக்கான மாற்று வழி.",
      ],
    },
  },
  {
    icon: Building2,
    title: {
      en: "2. Who runs DSA — MOE portal vs the schools",
      zh: "2. DSA 谁负责 — MOE 门户 vs 学校",
      ms: "2. Siapa kendalikan DSA — Portal MOE vs sekolah",
      ta: "2. DSA-ஐ யார் நடத்துகிறார்கள் — MOE வாயில் vs பள்ளிகள்",
    },
    paragraphs: {
      en: [
        "The cleanest mental model for parents is to separate two layers.",
        "MOE owns the gate. It operates the central DSA-Sec portal at dsa-sec.moe.gov.sg — applications open once a year, in May. MOE sets the application calendar (for 2026: 5 May to 2 June, 4:30pm Singapore time). It caps DSA intake at 20% of S1 places per school, with the four full-DSA schools as the only exception. It enforces the rules — maximum three schools per applicant, maximum two talent areas per school, one Confirmed Offer at a time, no withdrawal after acceptance. And it releases DSA outcomes alongside PSLE results in late November.",
        "Schools own the decision. Once a portal application lands at a school, MOE steps back. The school's panel decides what counts as evidence of talent, whom to invite for an interview or trial, how interviews are scored (schools do not publish their rubrics), whom to give a Confirmed Offer to, and whom to put on the Waitlist. Two schools shortlisting for the same talent — say, hockey — will run completely different trials and reach completely different conclusions about the same child. There is no \"DSA score\" that travels between schools. Each application is a fresh judgment by a fresh panel.",
        "For parents, the practical consequence of this two-layer split is that there is no single DSA application to perfect — there are as many applications as schools you apply to, each judged on its own terms. The portfolio that impresses one school's panel may leave another's unmoved, because they weight evidence differently and run different trials. Treat each school as a separate audience: study what its talent programme actually values, tailor what you submit, and never assume a strong showing at one school carries any weight at the next.",
      ],
      zh: [
        "家长最清晰的思考方式，是把 DSA 分成两层。",
        "MOE 负责门。它运营中央门户 dsa-sec.moe.gov.sg——每年 5 月开放一次。MOE 设定时间表（2026 年：5 月 5 日到 6 月 2 日下午 4:30，新加坡时间）。它把每所学校的 DSA 名额上限定在 S1 总名额的 20%，唯一例外是 4 所全 DSA 学校。它执行规则——每位申请人最多 3 所学校、每所学校最多 2 个才艺方向、同一时间只能持有 1 个 Confirmed Offer、接受后不可撤回。MOE 在 11 月底连同 PSLE 成绩一起公布 DSA 结果。",
        "学校负责筛选。申请通过门户递到学校后，MOE 就退到一边。学校自己的评审团决定：什么算才能证明、邀请谁来面试或 trial、面试怎么评分（学校不公开评分标准）、给谁 Confirmed Offer、谁进 Waitlist。同一个孩子申请同一个才艺（比如曲棍球）的两所学校，会有完全不同的 trial 流程和完全不同的结论。学校之间没有所谓「DSA 分数」可以互通。每一份申请都是新学校、新评审团、重新判断。",
        "对家长来说，这种两层结构的现实后果是：没有一份「完美的 DSA 申请」可以打磨——你申请几所学校，就有几份申请，每一份都按各校自己的标准被评判。打动一所学校评审团的材料，可能让另一所无动于衷，因为它们对证据的权重不同、trial 也不同。把每所学校当成独立的受众：研究它的才艺项目究竟看重什么，针对性地准备提交的材料，永远不要以为在一所学校的好表现能在下一所学校算数。",
      ],
      ms: [
        "Model fikiran paling jelas untuk ibu bapa adalah memisahkan dua lapisan.",
        "MOE memiliki pintu. Ia mengendalikan portal pusat DSA-Sec di dsa-sec.moe.gov.sg — permohonan dibuka setahun sekali, pada bulan Mei. MOE menetapkan kalendar permohonan (untuk 2026: 5 Mei hingga 2 Jun, 4:30 petang waktu Singapura). Ia menghadkan pengambilan DSA pada 20% tempat S1 setiap sekolah, dengan empat sekolah DSA penuh sebagai satu-satunya pengecualian. Ia menguatkuasakan peraturan — maksimum tiga sekolah setiap pemohon, maksimum dua bidang bakat setiap sekolah, satu Tawaran Sah pada satu masa, tiada penarikan selepas penerimaan. Dan ia mengeluarkan keputusan DSA bersama keputusan PSLE pada akhir November.",
        "Sekolah memiliki keputusan. Sebaik sahaja permohonan portal sampai ke sekolah, MOE berundur. Panel sekolah memutuskan apa yang dikira sebagai bukti bakat, siapa yang dijemput untuk temu duga atau percubaan, bagaimana temu duga dinilai (sekolah tidak menerbitkan rubrik mereka), kepada siapa Tawaran Sah diberikan, dan siapa yang diletakkan di Senarai Menunggu. Dua sekolah yang menyenarai pendek untuk bakat yang sama — katakan, hoki — akan menjalankan percubaan yang sepenuhnya berbeza dan mencapai kesimpulan yang sepenuhnya berbeza tentang anak yang sama. Tiada \"skor DSA\" yang berjalan antara sekolah. Setiap permohonan ialah pertimbangan baru oleh panel baru.",
        "Bagi ibu bapa, akibat praktikal pembahagian dua lapisan ini ialah tiada satu permohonan DSA tunggal untuk disempurnakan — terdapat seberapa banyak permohonan seperti bilangan sekolah yang anda pohon, setiap satu dinilai mengikut terma sendiri. Portfolio yang mengkagumkan panel satu sekolah mungkin tidak menggerakkan panel sekolah lain, kerana mereka menimbang bukti secara berbeza dan menjalankan percubaan yang berbeza. Anggap setiap sekolah sebagai audiens berasingan: kaji apa yang program bakatnya benar-benar hargai, sesuaikan apa yang anda hantar, dan jangan sekali-kali menganggap persembahan kuat di satu sekolah membawa apa-apa nilai di sekolah seterusnya.",
      ],
      ta: [
        "பெற்றோர்களுக்கான மிகத் தெளிவான சிந்தனை வடிவம் இரண்டு அடுக்குகளைப் பிரிப்பதாகும்.",
        "MOE வாயிலை வைத்திருக்கிறது. அது மத்திய DSA-Sec வாயிலான dsa-sec.moe.gov.sg-ஐ இயக்குகிறது — விண்ணப்பங்கள் ஒவ்வொரு ஆண்டும் மே மாதம் ஒருமுறை திறக்கப்படுகின்றன. MOE விண்ணப்ப காலண்டரை அமைக்கிறது (2026க்கு: 5 மே முதல் 2 ஜூன் வரை, மாலை 4:30 சிங்கப்பூர் நேரம்). ஒவ்வொரு பள்ளியின் S1 இடங்களில் 20%-க்கு DSA சேர்க்கையை இது மட்டுப்படுத்துகிறது, நான்கு முழு-DSA பள்ளிகள் மட்டுமே விதிவிலக்கு. இது விதிகளை நடைமுறைப்படுத்துகிறது — ஒரு விண்ணப்பதாரருக்கு அதிகபட்சம் மூன்று பள்ளிகள், ஒரு பள்ளிக்கு அதிகபட்சம் இரண்டு திறமை பகுதிகள், ஒரே நேரத்தில் ஒரு உறுதிசெய்யப்பட்ட சலுகை, ஏற்றுக்கொண்ட பிறகு திரும்பப் பெற முடியாது. நவம்பர் இறுதியில் PSLE முடிவுகளுடன் DSA முடிவுகளை இது வெளியிடுகிறது.",
        "பள்ளிகள் முடிவை வைத்திருக்கின்றன. வாயில் விண்ணப்பம் ஒரு பள்ளியில் வந்தவுடன், MOE பின்வாங்குகிறது. பள்ளியின் குழு முடிவு செய்கிறது: திறமைக்கான சான்று என்ன, யாரை நேர்காணல் அல்லது சோதனைக்கு அழைப்பது, நேர்காணல் எவ்வாறு மதிப்பிடப்படுகிறது (பள்ளிகள் தங்கள் ருப்ரிக்குகளை வெளியிடவில்லை), யாருக்கு உறுதிசெய்யப்பட்ட சலுகை, யாரை காத்திருப்புப் பட்டியலில் வைப்பது. ஒரே திறமைக்காக (உதாரணம், ஹாக்கி) குறுகிய பட்டியலிடும் இரண்டு பள்ளிகள் முற்றிலும் வேறுபட்ட சோதனைகளை நடத்தி, அதே குழந்தையைப் பற்றி முற்றிலும் வேறுபட்ட முடிவுகளை அடையும். பள்ளிகளுக்கு இடையே பயணிக்கும் \"DSA மதிப்பெண்\" இல்லை. ஒவ்வொரு விண்ணப்பமும் புதிய குழுவின் புதிய தீர்ப்பு.",
        "பெற்றோருக்கு, இந்த இரு-அடுக்குப் பிரிவின் நடைமுறை விளைவு என்னவென்றால், சரிசெய்ய ஒரே ஒரு DSA விண்ணப்பம் இல்லை — நீங்கள் விண்ணப்பிக்கும் பள்ளிகளின் எண்ணிக்கைக்கு ஏற்ப விண்ணப்பங்கள் உள்ளன, ஒவ்வொன்றும் அதன் சொந்த விதிமுறைகளில் மதிப்பிடப்படுகிறது. ஒரு பள்ளியின் குழுவைக் கவரும் தொகுப்பு மற்றொரு பள்ளியை அசைக்காமல் இருக்கலாம், ஏனெனில் அவை சான்றை வெவ்வேறாக எடைபோடுகின்றன, வெவ்வேறு சோதனைகளை நடத்துகின்றன. ஒவ்வொரு பள்ளியையும் தனி பார்வையாளராகக் கருதுங்கள்: அதன் திறமைத் திட்டம் உண்மையில் எதை மதிக்கிறது என்பதை ஆராயுங்கள், நீங்கள் சமர்ப்பிப்பதை அதற்கேற்ப வடிவமைக்கவும், ஒரு பள்ளியில் வலுவான செயல்பாடு அடுத்த பள்ளியில் எந்த மதிப்பையும் கொண்டுவரும் என்று ஒருபோதும் கருத வேண்டாம்.",
      ],
    },
  },
  {
    icon: ClipboardList,
    title: {
      en: "3. Who DSA is realistically for",
      zh: "3. DSA 现实意义上适合谁",
      ms: "3. Untuk siapa DSA secara realistik",
      ta: "3. யதார்த்தமாக DSA யாருக்கானது",
    },
    paragraphs: {
      en: [
        "If you are checking whether DSA is a fit for your child, the honest answer depends on what tier of evidence they have. Across talent areas, panels are looking for one of three things.",
        "Tier A — National or zonal-level competitive record. Top-3 finishes in National School Games, Singapore Schools Concert, or equivalent national meets. Selected for a Singapore national age-group team. School representative at zonal-level competitions for two or more years.",
        "Tier B — Graded examinations or formal certification. ABRSM Grade 6 or higher for music. Singapore Athletics Grade A or B times for track. ICAS Distinction in a specialist academic area. Verified Olympiad medals (SMO, SBO, SJO Gold or Silver).",
        "Tier C — Sustained CCA record with measurable progression. Two or more years in a school CCA at a leadership position. Visible contribution: captaincy, choreography, ensemble seat, organising committee. A strong teacher reference that describes growth over time rather than \"he is a good boy\".",
        "Below these tiers, DSA becomes a long shot — not because schools are gatekeeping, but because they typically receive far more applications than they have places, and need a clean way to prioritise. A child who has played piano for two years at home, without external grading or performance record, is not what panels are equipped to evaluate.",
        "This is why we wrote DSALink. Most P6 families discover DSA in the last six weeks of the application window, then ask whether their child has a real chance. The honest answer is often \"the talent doesn't have enough external signal yet — focus on PSLE this year, build the record in Lower Secondary, look at DSA-JC if your child still wants to pursue this seriously.\" That answer is more useful than \"go ahead and try, you never know\".",
      ],
      zh: [
        "如果你想判断 DSA 是否适合自家孩子，诚实的答案取决于孩子手上有什么级别的证据。跨所有才艺方向，评审团基本上在找以下三类之一。",
        "A 类 — 全国或区域级比赛成绩。在 National School Games（全国校际运动会）、Singapore Schools Concert（学校音乐汇演）或同等全国赛事中前三名。入选新加坡国家年龄组代表队。代表学校参加区域级比赛两年或以上。",
        "B 类 — 考级或正式认证。ABRSM 音乐六级或以上。Singapore Athletics 田径 A 或 B 级达标时间。ICAS 在某个专科领域拿到 Distinction。已验证的奥林匹克奖牌（SMO、SBO、SJO 金牌或银牌）。",
        "C 类 — 持续的 CCA 记录，有可衡量的进步。在校内 CCA 担任领导职务两年或以上。能说出来的具体贡献：队长、编舞、合奏席位、组委成员。一份描述孩子成长过程的老师推荐信，而不是「这个孩子很乖」的泛泛之词。",
        "低于这三类，DSA 就是赌一把——不是因为学校在卡门槛，而是学校通常收到的申请远超过名额，必须有一个清晰的排序方式。一个孩子在家弹了两年钢琴、没有任何外部考级和演出记录，评审团根本没有工具去判断。",
        "这就是我们做 DSALink 的原因。大部分 P6 家庭是在申请窗口的最后六周才发现 DSA，然后问：我家孩子真的有机会吗？诚实的答案常常是：「才能还没有积累出对外信号——今年专心搞 PSLE，中一中二补上记录，如果孩子还想认真追，再看 DSA-JC。」这个答案比「试试看反正不会少块肉」有用得多。",
      ],
      ms: [
        "Jika anda sedang menyemak sama ada DSA sesuai untuk anak anda, jawapan jujurnya bergantung pada peringkat bukti yang dipegang. Merentas bidang bakat, panel mencari salah satu daripada tiga perkara.",
        "Peringkat A — Rekod persaingan peringkat kebangsaan atau zon. Tiga tempat teratas dalam National School Games, Singapore Schools Concert, atau pertandingan kebangsaan setara. Terpilih untuk pasukan kumpulan umur kebangsaan Singapura. Wakil sekolah dalam pertandingan peringkat zon selama dua tahun atau lebih.",
        "Peringkat B — Peperiksaan bergred atau pensijilan formal. Gred ABRSM 6 atau lebih tinggi untuk muzik. Masa Gred A atau B Singapore Athletics untuk olahraga. Distinction ICAS dalam bidang akademik pakar. Pingat Olimpiad disahkan (SMO, SBO, SJO Emas atau Perak).",
        "Peringkat C — Rekod CCA yang berterusan dengan kemajuan yang boleh diukur. Dua tahun atau lebih dalam CCA sekolah pada jawatan kepimpinan. Sumbangan ketara: kapten, koreografi, kerusi ensembel, jawatankuasa anjuran. Rujukan guru yang kuat yang menerangkan pertumbuhan sepanjang masa, bukan sekadar \"dia anak yang baik\".",
        "Di bawah peringkat ini, DSA menjadi peluang yang tipis — bukan kerana sekolah menapis, tetapi kerana mereka biasanya menerima jauh lebih banyak permohonan daripada tempat yang ada, dan memerlukan cara yang jelas untuk menyusun keutamaan. Seorang anak yang bermain piano selama dua tahun di rumah, tanpa gred luar atau rekod persembahan, bukanlah apa yang panel bersedia untuk menilai.",
        "Inilah sebabnya kami membina DSALink. Kebanyakan keluarga P6 menemui DSA dalam enam minggu terakhir tetingkap permohonan, kemudian bertanya sama ada anak mereka mempunyai peluang sebenar. Jawapan jujurnya selalunya \"bakat belum cukup isyarat luar — fokus pada PSLE tahun ini, bina rekod di Menengah Bawah, lihat DSA-JC jika anak masih ingin meneruskannya dengan serius\". Itu lebih berguna daripada \"cuba sahaja, anda tidak akan tahu\".",
      ],
      ta: [
        "உங்கள் குழந்தைக்கு DSA பொருந்துமா என்று நீங்கள் சரிபார்க்கிறீர்கள் என்றால், நேர்மையான பதில் அவர்கள் வைத்திருக்கும் சான்றின் அடுக்கைப் பொறுத்தது. திறமை பகுதிகள் முழுவதும், குழுக்கள் மூன்று விஷயங்களில் ஒன்றைத் தேடுகின்றன.",
        "அடுக்கு A — தேசிய அல்லது மண்டல போட்டிப் பதிவு. National School Games, Singapore Schools Concert, அல்லது சமமான தேசிய போட்டிகளில் முதல் மூன்று இடங்கள். சிங்கப்பூர் தேசிய வயது குழு அணிக்கு தேர்வு. இரண்டு ஆண்டுகள் அல்லது அதற்கு மேல் மண்டல போட்டிகளில் பள்ளி பிரதிநிதி.",
        "அடுக்கு B — தர பரீட்சைகள் அல்லது முறையான சான்றிதழ். இசைக்கு ABRSM தரம் 6 அல்லது அதற்கு மேல். ஓட்டப்பந்தயத்திற்கு Singapore Athletics தரம் A அல்லது B நேரங்கள். சிறப்புக் கல்விப் பகுதியில் ICAS Distinction. சரிபார்க்கப்பட்ட ஒலிம்பியாட் பதக்கங்கள் (SMO, SBO, SJO தங்கம் அல்லது வெள்ளி).",
        "அடுக்கு C — அளவிடக்கூடிய முன்னேற்றத்துடன் தொடர்ச்சியான CCA பதிவு. பள்ளி CCA-வில் தலைமைப் பதவியில் இரண்டு ஆண்டுகள் அல்லது அதற்கு மேல். தெளிவான பங்களிப்பு: கேப்டன், நாட்டியம், இசைக்குழு இடம், ஏற்பாட்டுக் குழு. \"அவர் ஒரு நல்ல பையன்\" என்பதை விட காலப்போக்கில் வளர்ச்சியை விவரிக்கும் ஆசிரியர் பரிந்துரை.",
        "இந்த அடுக்குகளுக்குக் கீழே, DSA ஒரு நீண்ட சட்டமாகிறது — பள்ளிகள் தடுக்கின்றன என்பதால் அல்ல, மாறாக அவர்கள் வழக்கமாக இடங்களை விட பல மடங்கு விண்ணப்பங்களைப் பெறுகிறார்கள், முன்னுரிமை வரிசையை அமைக்க தெளிவான வழி தேவை. வீட்டில் இரண்டு ஆண்டுகள் பியானோ வாசித்த, வெளி தர அல்லது நிகழ்ச்சிப் பதிவு இல்லாத ஒரு குழந்தை, குழுக்கள் மதிப்பீடு செய்யத் தயாராக இல்லை.",
        "இதனால்தான் நாங்கள் DSALink-ஐ உருவாக்கினோம். பெரும்பாலான P6 குடும்பங்கள் விண்ணப்பக் காலத்தின் கடைசி ஆறு வாரங்களில் DSA-ஐக் கண்டுபிடிக்கின்றன, பின்னர் தங்கள் குழந்தைக்கு உண்மையான வாய்ப்பு இருக்கிறதா எனக் கேட்கின்றன. நேர்மையான பதில் பெரும்பாலும்: \"திறமைக்கு போதுமான வெளி அறிகுறி இல்லை — இந்த ஆண்டு PSLE-யில் கவனம் செலுத்துங்கள், கீழ் இடைநிலையில் பதிவை உருவாக்குங்கள், குழந்தை இன்னும் தீவிரமாகத் தொடர விரும்பினால் DSA-JC-ஐப் பாருங்கள்.\" \"முயற்சி செய்யுங்கள், உங்களுக்குத் தெரியாது\" என்பதை விட இது மிகவும் பயனுள்ளது.",
      ],
    },
  },
  {
    icon: Scale,
    title: {
      en: "4. What a Confirmed Offer locks in",
      zh: "4. Confirmed Offer 锁定什么",
      ms: "4. Apa Tawaran Sah mengunci",
      ta: "4. உறுதிசெய்யப்பட்ட சலுகை எதைப் பூட்டுகிறது",
    },
    paragraphs: {
      en: [
        "A Confirmed Offer is the strongest outcome from a DSA application. When accepted, two things happen.",
        "Your child skips the S1 Posting exercise entirely. They do not need their PSLE score to be within the school's Posting Group cut-off range, only to meet the minimum standard for the course. For Express or Integrated Programme schools, that minimum is a PSLE Achievement Level total of 22 or less (Posting Group 3). PSLE still happens, but it stops being a school-selection event.",
        "The talent commitment becomes binding. Your child is expected to continue with the talent area through a CCA-linked programme at the new school for at least two years. Schools take this seriously: the offer was made on the assumption that this child will contribute to the team, the ensemble, or the publication — not just attend classes. Switching CCAs in Lower Secondary, or dropping out of the talent programme, is treated as a breach of the DSA commitment.",
        "For most families this is a fair trade. The point of DSA is to enter a school that has already invested in your child's talent area. The commitment matches the investment.",
        "Two failure modes worth planning around. First, the child loses interest. Adolescent priorities shift. A 12-year-old passionate about competitive swimming at offer stage may not feel the same at 14. DSA does not have a clean exit path for that. Second, the school's panel is not aligned with the child's growth direction. A music DSA into a school whose Music sub-CCA focuses on classical piano will not suit a child who later wants to specialise in jazz composition. The way to manage both is to apply to schools whose talent programme matches not just the child's current strength, but the direction the child is pulling toward — and to make sure the child understands the two-year floor before you accept on their behalf.",
      ],
      zh: [
        "Confirmed Offer 是 DSA 申请最强的结果。一旦接受，两件事同时发生。",
        "孩子完全跳过 S1 Posting。他们的 PSLE 成绩不必落在学校的 Posting Group 切线范围内，只需要达到课程的最低门槛。对 Express 或 IP 学校来说，最低门槛是 PSLE 总成就分（AL）22 分以内（Posting Group 3）。PSLE 还是要考，但它不再是择校事件。",
        "才艺承诺变成约束。孩子需要在新学校通过 CCA 衔接项目持续发展所申请的才艺方向，最少两年。学校把这件事看得很重——offer 是基于这个孩子会贡献给队伍、合奏团或出版物的前提下发出的，不是「只来上课就行」。在 Lower Secondary 换 CCA、或退出才艺项目，会被视为违反 DSA 承诺。",
        "对大部分家庭来说这是公平交易。DSA 的核心意义就是让孩子进入一所已经在他的才艺方向上做了投入的学校，承诺与投入相匹配。",
        "两个失败情境值得提前规划。第一，孩子失去兴趣。青少年优先级会变。一个 12 岁热爱竞技游泳的孩子，到 14 岁可能就不再有同样的感觉。DSA 没有干净的退出路径。第二，学校评审团跟孩子未来成长方向对不上。一个音乐 DSA 进了主打古典钢琴的 Music sub-CCA 学校，但孩子后来想专攻爵士作曲，这就难办。两种情境的应对方式一致——申请时不要只看孩子目前最强项，要看他被什么方向拉着走；同时在替他签字接受之前，确保他知道这是两年起步的承诺。",
      ],
      ms: [
        "Tawaran Sah ialah hasil paling kuat daripada permohonan DSA. Apabila diterima, dua perkara berlaku.",
        "Anak anda melangkau latihan Penempatan S1 sepenuhnya. Mereka tidak perlu skor PSLE mereka berada dalam julat cut-off Posting Group sekolah, hanya untuk memenuhi standard minimum untuk kursus. Untuk sekolah Express atau Program Bersepadu, minimum itu ialah jumlah Tahap Pencapaian PSLE sebanyak 22 atau kurang (Posting Group 3). PSLE masih berlaku, tetapi ia tidak lagi menjadi acara pemilihan sekolah.",
        "Komitmen bakat menjadi mengikat. Anak anda dijangka meneruskan bidang bakat melalui program berkaitan CCA di sekolah baru selama sekurang-kurangnya dua tahun. Sekolah mengambil ini dengan serius: tawaran dibuat atas andaian anak ini akan menyumbang kepada pasukan, ensembel, atau penerbitan — bukan sekadar hadir kelas. Menukar CCA di Menengah Bawah, atau berhenti dari program bakat, dianggap sebagai pelanggaran komitmen DSA.",
        "Untuk kebanyakan keluarga ini adalah pertukaran adil. Tujuan DSA ialah memasuki sekolah yang sudah melabur dalam bidang bakat anak anda. Komitmen sepadan dengan pelaburan.",
        "Dua mod kegagalan yang patut dirancang. Pertama, anak hilang minat. Keutamaan remaja berubah. Seorang anak berusia 12 tahun yang ghairah dengan renang berdaya saing pada peringkat tawaran mungkin tidak merasakan perkara yang sama pada usia 14. DSA tidak mempunyai laluan keluar yang bersih untuk itu. Kedua, panel sekolah tidak selari dengan arah pertumbuhan anak. DSA muzik ke sekolah yang sub-CCA Muziknya fokus pada piano klasik tidak sesuai untuk anak yang kemudian mahu mengkhusus dalam komposisi jazz. Cara menguruskan kedua-duanya: memohon ke sekolah yang program bakatnya sepadan bukan sahaja dengan kekuatan semasa anak, tetapi arah yang menarik anak — dan pastikan anak memahami komitmen dua tahun sebelum anda menerima bagi pihak mereka.",
      ],
      ta: [
        "உறுதிசெய்யப்பட்ட சலுகை என்பது DSA விண்ணப்பத்தின் வலுவான விளைவு. ஏற்றுக்கொள்ளப்படும்போது, இரண்டு விஷயங்கள் நிகழ்கின்றன.",
        "உங்கள் குழந்தை S1 Posting பயிற்சியை முற்றிலும் தாண்டுகிறது. அவர்களின் PSLE மதிப்பெண் பள்ளியின் Posting Group cut-off வரம்பில் இருக்க வேண்டியதில்லை, பாடத்திற்கான குறைந்தபட்ச தரத்தை மட்டும் பூர்த்தி செய்ய வேண்டும். Express அல்லது Integrated Programme பள்ளிகளுக்கு, அந்த குறைந்தபட்சம் PSLE வெற்றி நிலை மொத்தம் 22 அல்லது குறைவு (Posting Group 3). PSLE இன்னும் நடைபெறுகிறது, ஆனால் அது பள்ளி தேர்வு நிகழ்வாக இல்லாமல் போகிறது.",
        "திறமை உறுதிமொழி கட்டுப்படுத்தும். உங்கள் குழந்தை குறைந்தபட்சம் இரண்டு ஆண்டுகளுக்கு புதிய பள்ளியில் CCA-உடன் இணைக்கப்பட்ட திட்டத்தின் மூலம் திறமைப் பகுதியைத் தொடர எதிர்பார்க்கப்படுகிறது. பள்ளிகள் இதை தீவிரமாக எடுத்துக்கொள்கின்றன: இந்தக் குழந்தை அணி, இசைக்குழு, அல்லது வெளியீட்டில் பங்களிப்பார் என்ற அனுமானத்தின் அடிப்படையில் சலுகை வழங்கப்பட்டது — வெறும் வகுப்புகளில் கலந்து கொள்ள மட்டுமல்ல. கீழ் இடைநிலையில் CCA-ஐ மாற்றுவது, அல்லது திறமை திட்டத்தை விட்டு வெளியேறுவது, DSA உறுதிமொழியின் மீறலாகக் கருதப்படுகிறது.",
        "பெரும்பாலான குடும்பங்களுக்கு இது ஒரு நியாயமான பரிமாற்றம். DSA-வின் நோக்கம் உங்கள் குழந்தையின் திறமைப் பகுதியில் ஏற்கனவே முதலீடு செய்த பள்ளியில் சேருவதாகும். உறுதிமொழி முதலீட்டுடன் பொருந்துகிறது.",
        "திட்டமிட வேண்டிய இரண்டு தோல்வி முறைகள். முதலாவது, குழந்தை ஆர்வத்தை இழக்கிறது. இளம் பருவ முன்னுரிமைகள் மாறுகின்றன. சலுகை நிலையில் போட்டி நீச்சலில் ஆர்வமாக இருந்த 12 வயது குழந்தை 14 வயதில் அதே உணர்வை அனுபவிக்காமல் இருக்கலாம். DSA-வில் அதற்கான தெளிவான வெளியேற்றப் பாதை இல்லை. இரண்டாவது, பள்ளியின் குழு குழந்தையின் வளர்ச்சித் திசையுடன் ஒத்துப்போகவில்லை. Music sub-CCA செவ்வியல் பியானோவில் கவனம் செலுத்தும் பள்ளியில் இசை DSA, பின்னர் ஜாஸ் இசையமைப்பில் சிறப்பாக விரும்பும் குழந்தைக்கு ஏற்றதாக இருக்காது. இரண்டையும் நிர்வகிக்கும் வழி: குழந்தையின் தற்போதைய பலத்துடன் மட்டுமல்லாமல், குழந்தை இழுக்கப்படும் திசையுடனும் பொருந்தும் திறமை திட்டம் உள்ள பள்ளிகளுக்கு விண்ணப்பிக்கவும் — மற்றும் அவர்கள் சார்பாக நீங்கள் ஏற்றுக்கொள்வதற்கு முன், குழந்தை இரண்டு ஆண்டு தளத்தைப் புரிந்துகொள்வதை உறுதிசெய்யவும்.",
      ],
    },
  },
  {
    icon: GitMerge,
    title: {
      en: "5. How DSA and PSLE interact",
      zh: "5. DSA 与 PSLE 如何互动",
      ms: "5. Bagaimana DSA dan PSLE berinteraksi",
      ta: "5. DSA மற்றும் PSLE எவ்வாறு தொடர்பு கொள்கின்றன",
    },
    paragraphs: {
      en: [
        "A common misunderstanding: parents assume Confirmed Offer means PSLE doesn't matter. The accurate picture is more layered.",
        "The Confirmed Offer is conditional on meeting course eligibility. MOE requires the child to score within the minimum Posting Group for the course they have been admitted into. For Express or Integrated Programme schools that means AL total ≤ 22 (Posting Group 3). For schools that run Express and Normal-Academic tracks, eligibility is checked against the relevant Posting Group for the course offered.",
        "The Confirmed Offer protects against cut-off pressure, not against minimum standards. A child given a Confirmed Offer at a top IP school does not need to hit that school's PSLE cut-off (which usually sits in the AL 6–8 range). They do need AL ≤ 22.",
        "A Counter-Offer can appear at result release. Some schools that run both IP and O-Level tracks may give a child a DSA Confirmed Offer for IP, then issue a Counter-Offer at result-release time for O-Level instead — if the PSLE result does not meet IP eligibility but does meet O-Level. Acceptance is the family's choice.",
        "A rejected DSA application is not a closed door. The child enters S1 Posting normally with their PSLE score, and they can still apply for S1 Appeal at schools where they have a connection (e.g. sibling-priority, affiliation). DSA failure does not change anything about the mainstream pathway.",
        "The sequence is what trips families up, so it is worth stating plainly. The DSA result and the PSLE result arrive together in late November, but they were decided at different times: the school made its DSA judgment back in the middle of the year, while the PSLE score is fresh. A Confirmed Offer you accepted earlier only becomes a real S1 place once the PSLE result confirms the child has cleared the course minimum. Until results day, an accepted offer is a conditional promise, not a settled posting — which is exactly why the minimum Posting Group still matters even after you accept.",
      ],
      zh: [
        "一个常见误解：家长以为 Confirmed Offer = PSLE 不重要。准确情况要分层看。",
        "Confirmed Offer 以达到课程资格为条件。MOE 要求孩子的 PSLE 成绩落在所录取课程的最低 Posting Group 范围内。Express 或 IP 学校的最低门槛是 AL 总分 ≤ 22（Posting Group 3）。同时运营 Express 和 Normal-Academic 双轨的学校，会按所录取课程对应的 Posting Group 来核查。",
        "Confirmed Offer 保护你不受切线压力影响，但不豁免最低门槛。一个被顶尖 IP 学校发了 Confirmed Offer 的孩子，不需要打到那所学校 PSLE 切线（通常在 AL 6–8 范围），但仍然需要 AL ≤ 22。",
        "结果释放时可能出现 Counter-Offer。同时有 IP 和 O-Level 双轨的学校，可能先给孩子一个 IP 的 DSA Confirmed Offer，然后在结果释放时改为 O-Level Counter-Offer——如果 PSLE 没达到 IP 资格但达到了 O-Level 资格。是否接受由家庭决定。",
        "DSA 被拒不等于路被堵死。孩子按 PSLE 成绩正常进入 S1 Posting，还可以在有关联（兄弟姐妹优先、校友关系等）的学校申请 S1 Appeal。DSA 失败不改变主轨道的任何机会。",
        "真正让家长绕晕的是顺序，所以值得说白。DSA 结果和 PSLE 结果在 11 月底一起到，但它们是在不同时间决定的：学校的 DSA 判断早在年中就做了，而 PSLE 成绩是刚出炉的。你早先接受的 Confirmed Offer，只有在 PSLE 成绩确认孩子达到课程最低门槛之后，才真正变成一个 S1 学位。在放榜日之前，已接受的 offer 是一个有条件的承诺，不是已定的派位——这正是为什么即使接受之后，最低 Posting Group 仍然重要。",
      ],
      ms: [
        "Salah faham biasa: ibu bapa menganggap Tawaran Sah bermakna PSLE tidak penting. Gambaran tepat lebih berlapis.",
        "Tawaran Sah bersyarat untuk memenuhi kelayakan kursus. MOE memerlukan anak untuk skor dalam Posting Group minimum untuk kursus yang dia diterima. Untuk sekolah Express atau Program Bersepadu itu bermakna jumlah AL ≤ 22 (Posting Group 3). Untuk sekolah yang mengendalikan trek Express dan Normal-Academic, kelayakan disemak terhadap Posting Group berkaitan untuk kursus yang ditawarkan.",
        "Tawaran Sah melindungi daripada tekanan cut-off, bukan daripada standard minimum. Seorang anak yang diberi Tawaran Sah di sekolah IP teratas tidak perlu mencapai cut-off PSLE sekolah itu (yang biasanya berada dalam julat AL 6–8). Mereka memerlukan AL ≤ 22.",
        "Tawaran Balas boleh muncul pada pelepasan keputusan. Sesetengah sekolah yang menjalankan kedua-dua trek IP dan O-Level mungkin memberi anak Tawaran Sah DSA untuk IP, kemudian mengeluarkan Tawaran Balas pada masa pelepasan keputusan untuk O-Level — jika keputusan PSLE tidak memenuhi kelayakan IP tetapi memenuhi O-Level. Penerimaan ialah pilihan keluarga.",
        "Permohonan DSA yang ditolak bukan pintu tertutup. Anak memasuki Penempatan S1 secara normal dengan skor PSLE, dan masih boleh memohon Rayuan S1 di sekolah yang mempunyai hubungan (contohnya keutamaan adik-beradik, gabungan). Kegagalan DSA tidak mengubah apa-apa tentang laluan arus perdana.",
        "Urutan inilah yang mengelirukan keluarga, jadi berbaloi dinyatakan dengan jelas. Keputusan DSA dan keputusan PSLE tiba bersama pada akhir November, tetapi ia diputuskan pada masa berbeza: sekolah membuat pertimbangan DSA pada pertengahan tahun, manakala skor PSLE baru sahaja keluar. Tawaran Sah yang anda terima lebih awal hanya menjadi tempat S1 sebenar setelah keputusan PSLE mengesahkan anak telah melepasi minimum kursus. Sehingga hari keputusan, tawaran yang diterima ialah janji bersyarat, bukan penempatan yang muktamad — sebab itulah Posting Group minimum masih penting walaupun selepas anda menerima.",
      ],
      ta: [
        "ஒரு பொதுவான தவறான புரிதல்: உறுதிசெய்யப்பட்ட சலுகை என்றால் PSLE முக்கியமில்லை என்று பெற்றோர்கள் கருதுகிறார்கள். துல்லியமான படம் மேலும் அடுக்காக உள்ளது.",
        "உறுதிசெய்யப்பட்ட சலுகை பாட தகுதியை பூர்த்தி செய்வதைப் பொறுத்தது. அவர்கள் சேர்க்கப்பட்ட பாடத்திற்கான குறைந்தபட்ச Posting Group-க்குள் குழந்தை மதிப்பெண் பெற MOE கோருகிறது. Express அல்லது Integrated Programme பள்ளிகளுக்கு அதன் பொருள் AL மொத்தம் ≤ 22 (Posting Group 3). Express மற்றும் Normal-Academic பாதைகளை இயக்கும் பள்ளிகளுக்கு, வழங்கப்பட்ட பாடத்திற்கான தொடர்புடைய Posting Group-க்கு எதிராக தகுதி சரிபார்க்கப்படுகிறது.",
        "உறுதிசெய்யப்பட்ட சலுகை cut-off அழுத்தத்திலிருந்து பாதுகாக்கிறது, குறைந்தபட்ச தரத்திலிருந்து அல்ல. மேல்நிலை IP பள்ளியில் உறுதிசெய்யப்பட்ட சலுகை வழங்கப்பட்ட குழந்தை அந்த பள்ளியின் PSLE cut-off-ஐ (வழக்கமாக AL 6–8 வரம்பில் உள்ளது) அடைய வேண்டியதில்லை. AL ≤ 22 தேவை.",
        "முடிவு வெளியீட்டில் எதிர் சலுகை தோன்றலாம். IP மற்றும் O-Level பாதைகளை இயக்கும் சில பள்ளிகள் ஒரு குழந்தைக்கு IP-க்கு DSA உறுதிசெய்யப்பட்ட சலுகையை வழங்கி, பின்னர் முடிவு வெளியீட்டு நேரத்தில் O-Level-க்கான எதிர் சலுகையை வழங்கலாம் — PSLE முடிவு IP தகுதியை பூர்த்தி செய்யவில்லை ஆனால் O-Level-ஐ பூர்த்தி செய்தால். ஏற்றுக்கொள்வது குடும்பத்தின் தேர்வு.",
        "நிராகரிக்கப்பட்ட DSA விண்ணப்பம் ஒரு மூடிய கதவு அல்ல. குழந்தை தனது PSLE மதிப்பெண்ணுடன் சாதாரணமாக S1 Posting-இல் நுழைகிறது, மற்றும் தொடர்பு உள்ள பள்ளிகளில் (உதாரணம், சகோதர முன்னுரிமை, இணைப்பு) S1 Appeal-க்கு விண்ணப்பிக்கலாம். DSA தோல்வி முக்கிய பாதையின் எதையும் மாற்றாது.",
        "குடும்பங்களைக் குழப்புவது இந்த வரிசைதான், எனவே அதைத் தெளிவாகச் சொல்வது மதிப்புடையது. DSA முடிவும் PSLE முடிவும் நவம்பர் இறுதியில் ஒன்றாக வருகின்றன, ஆனால் அவை வெவ்வேறு நேரங்களில் தீர்மானிக்கப்பட்டன: பள்ளி அதன் DSA தீர்ப்பை ஆண்டின் நடுவில் செய்தது, PSLE மதிப்பெண் புதிதாக வந்தது. நீங்கள் முன்பே ஏற்ற Confirmed Offer, PSLE முடிவு குழந்தை பாடத்தின் குறைந்தபட்சத்தைக் கடந்துவிட்டது என்பதை உறுதிசெய்த பிறகே ஒரு உண்மையான S1 இடமாக மாறுகிறது. முடிவு நாள் வரை, ஏற்கப்பட்ட சலுகை ஒரு நிபந்தனை வாக்குறுதியே தவிர, தீர்மானிக்கப்பட்ட இடம் ஒதுக்கீடு அல்ல — ஏற்றுக்கொண்ட பிறகும் குறைந்தபட்ச Posting Group ஏன் முக்கியம் என்பதற்கு இதுவே சரியான காரணம்.",
      ],
    },
  },
  {
    icon: AlertCircle,
    title: {
      en: "6. Six misconceptions worth clearing",
      zh: "6. 六个需要澄清的误解",
      ms: "6. Enam salah faham yang patut dijelaskan",
      ta: "6. தெளிவுபடுத்த வேண்டிய ஆறு தவறான புரிதல்கள்",
    },
    paragraphs: {
      en: [
        "Myth — DSA is for academically gifted children. Reality — after 2019, \"general academic ability\" is no longer a DSA category. Every admission must point to a specific talent area.",
        "Myth — You can apply to many schools. Reality — up to three schools, with up to two talent areas at each school. Six entries in total at most.",
        "Myth — DSA guarantees admission regardless of PSLE. Reality — a Confirmed Offer still requires PSLE to clear the minimum Posting Group for the course offered.",
        "Myth — Private coach training is required to get DSA. Reality — schools evaluate evidence of sustained talent, not which coach the child trained with. External coaching is one path among several.",
        "Myth — Accepting DSA is reversible if you change your mind. Reality — accepting a Confirmed Offer is binding. You cannot then participate in S1 Posting or accept a different school's Confirmed Offer.",
        "Myth — DSA replaces PSLE. Reality — DSA runs in parallel. Your child still sits the PSLE and results are released in late November regardless.",
      ],
      zh: [
        "误解 — DSA 是给学术尖子的。事实——2019 年之后「通用学术能力」不再是 DSA 类别。每个录取都必须指向具体才艺方向。",
        "误解 — 想申请几所就几所。事实——最多 3 所学校，每所最多 2 个才艺方向，总共最多 6 个条目。",
        "误解 — DSA 保证录取，跟 PSLE 无关。事实——Confirmed Offer 仍然要求 PSLE 达到所录取课程的最低 Posting Group。",
        "误解 — 必须找私人教练训练才有 DSA。事实——学校看的是「持续才能的证据」，不是孩子跟过谁。外部训练是其中一条路径，不是唯一。",
        "误解 — 接受 DSA 后可以反悔。事实——接受 Confirmed Offer 即具有约束力。之后不能再参加 S1 Posting、也不能接受其他学校的 Confirmed Offer。",
        "误解 — DSA 取代 PSLE。事实——DSA 与 PSLE 并行运作。孩子还是要考 PSLE，11 月底照常公布成绩。",
      ],
      ms: [
        "Mitos — DSA untuk anak berbakat akademik. Realiti — selepas 2019, \"keupayaan akademik umum\" bukan lagi kategori DSA. Setiap kemasukan mesti merujuk kepada bidang bakat khusus.",
        "Mitos — Anda boleh memohon ke banyak sekolah. Realiti — sehingga tiga sekolah, dengan sehingga dua bidang bakat di setiap sekolah. Enam entri sekali ganda paling banyak.",
        "Mitos — DSA menjamin kemasukan tanpa mengira PSLE. Realiti — Tawaran Sah masih memerlukan PSLE untuk lulus Posting Group minimum untuk kursus yang ditawarkan.",
        "Mitos — Latihan jurulatih persendirian diperlukan untuk dapat DSA. Realiti — sekolah menilai bukti bakat yang berterusan, bukan jurulatih mana yang anak berlatih. Latihan luar adalah satu jalan antara beberapa.",
        "Mitos — Menerima DSA boleh dipatah balik jika anda berubah fikiran. Realiti — menerima Tawaran Sah ialah mengikat. Anda tidak boleh menyertai Penempatan S1 atau menerima Tawaran Sah sekolah lain selepas itu.",
        "Mitos — DSA menggantikan PSLE. Realiti — DSA berjalan selari. Anak anda masih menduduki PSLE dan keputusan dikeluarkan pada akhir November tanpa mengira keadaan.",
      ],
      ta: [
        "தவறான புரிதல் — DSA கல்வியில் திறமையான குழந்தைகளுக்கானது. உண்மை — 2019க்குப் பிறகு \"பொது கல்வித் திறன்\" இனி DSA வகை அல்ல. ஒவ்வொரு சேர்க்கையும் ஒரு குறிப்பிட்ட திறமைப் பகுதியைச் சுட்டிக்காட்ட வேண்டும்.",
        "தவறான புரிதல் — பல பள்ளிகளுக்கு விண்ணப்பிக்கலாம். உண்மை — மூன்று பள்ளிகள் வரை, ஒவ்வொரு பள்ளியிலும் இரண்டு திறமை பகுதிகள் வரை. அதிகபட்சம் மொத்தம் ஆறு உள்ளீடுகள்.",
        "தவறான புரிதல் — DSA PSLE-ஐ பொருட்படுத்தாமல் சேர்க்கையை உறுதிசெய்கிறது. உண்மை — உறுதிசெய்யப்பட்ட சலுகை இன்னும் வழங்கப்பட்ட பாடத்திற்கான குறைந்தபட்ச Posting Group-ஐ PSLE கடக்க வேண்டும்.",
        "தவறான புரிதல் — DSA பெற தனியார் பயிற்சியாளர் பயிற்சி அவசியம். உண்மை — பள்ளிகள் நிலையான திறமைக்கான சான்றை மதிப்பிடுகின்றன, குழந்தை எந்த பயிற்சியாளருடன் பயிற்சி செய்தார் என்பதை அல்ல. வெளி பயிற்சி பல வழிகளில் ஒன்று.",
        "தவறான புரிதல் — DSA-ஐ ஏற்றுக்கொள்வது நீங்கள் மனதை மாற்றினால் மீளக்கூடியது. உண்மை — உறுதிசெய்யப்பட்ட சலுகையை ஏற்றுக்கொள்வது கட்டுப்படுத்தும். அதன் பிறகு நீங்கள் S1 Posting-இல் பங்கேற்க முடியாது அல்லது வேறு பள்ளியின் உறுதிசெய்யப்பட்ட சலுகையை ஏற்றுக்கொள்ள முடியாது.",
        "தவறான புரிதல் — DSA PSLE-ஐ மாற்றுகிறது. உண்மை — DSA இணையாக இயங்குகிறது. உங்கள் குழந்தை இன்னும் PSLE எழுதுகிறது, முடிவுகள் எவ்வாறும் நவம்பர் இறுதியில் வெளியிடப்படுகின்றன.",
      ],
    },
  },
  {
    icon: Route,
    title: {
      en: "7. DSA vs S1 Posting — two doors, one child",
      zh: "7. DSA 与 S1 Posting — 两道门，同一个孩子",
      ms: "7. DSA vs S1 Posting — dua pintu, satu anak",
      ta: "7. DSA vs S1 Posting — இரண்டு கதவுகள், ஒரே குழந்தை",
    },
    paragraphs: {
      en: [
        "It helps to picture DSA as one of two doors into Secondary 1, running on different clocks. DSA-Sec runs first, in the middle of P6, and turns on demonstrated talent. S1 Posting runs after PSLE results in November, and turns on the PSLE Achievement Level score. Every child is automatically in the S1 Posting route; DSA is the optional, earlier door a minority of families also try.",
        "The two doors never compete head-to-head. A child either secures a place through DSA and accepts it — in which case they leave the S1 Posting exercise entirely — or they go through S1 Posting like everyone else. There is no penalty for trying DSA and missing: a rejected or declined DSA application has zero effect on the PSLE-based posting that follows. The only way DSA closes a door is by your accepting a Confirmed Offer, which is binding and removes the child from S1 Posting.",
        "Affiliation priority is a third thing parents often fold into DSA — it is not part of it. Affiliation is a separate advantage that lives inside the S1 Posting route, for children moving from a primary school to its affiliated secondary school, and it is decided by PSLE score and affiliation status, not by a talent panel. Keep three mental boxes apart: DSA is talent before PSLE; S1 Posting is score after PSLE; affiliation is a posting-route priority, not a DSA category.",
        "A quick worked example. Two children apply to the same school for the same sport. One is given a Confirmed Offer, accepts in November, and never enters S1 Posting; their secondary school is settled the moment they accept. The other is waitlisted, the waitlist does not convert, and they are posted in December purely on their PSLE score — exactly as if they had never applied. Same school, same talent, two completely different routes in.",
        "Practically, this makes DSA a low-risk add-on for a child with a genuine talent record, and a distraction for a child without one. You are not trading away the PSLE route by trying; you are buying one extra, earlier chance, at the cost of the preparation time the application and trials consume.",
      ],
      zh: [
        "把 DSA 想成进入中一的两道门之一，会清楚很多——两道门走的是不同的时钟。DSA-Sec 先开，在小六年中，看的是已展现的才能。S1 Posting 在 11 月 PSLE 成绩出来之后才开，看的是 PSLE 成就分（AL）。每个孩子都自动在 S1 Posting 这条路上；DSA 是少数家庭额外尝试的、更早的那道门。",
        "两道门从不正面相争。孩子要么通过 DSA 拿到位置并接受——那就完全退出 S1 Posting；要么和所有人一样走 S1 Posting。尝试 DSA 没拿到，没有任何代价：被拒或放弃的 DSA 申请，对之后基于 PSLE 的派位毫无影响。DSA 唯一会关上一道门的情形，是你接受了 Confirmed Offer——它具有约束力，会把孩子从 S1 Posting 中移除。",
        "Affiliation（直属/校友）优先权是家长常和 DSA 混为一谈的第三样东西——它不属于 DSA。Affiliation 是 S1 Posting 这条路里的另一种优势，针对从一所小学升入其直属中学的孩子，由 PSLE 成绩和直属身份决定，不由才艺评审团决定。把三个概念分开记：DSA 是才能、在 PSLE 之前；S1 Posting 是分数、在 PSLE 之后；affiliation 是派位路里的优先权，不是一个 DSA 类别。",
        "举个具体例子。两个孩子用同一项运动申请同一所学校。一个拿到 Confirmed Offer，11 月接受，从此不进 S1 Posting——接受的那一刻中学就定了。另一个进了 Waitlist，候补没转正，12 月完全凭 PSLE 成绩被派位——和从没申请过一模一样。同一所学校、同一项才能，两条完全不同的进门路径。",
        "现实地说，对一个有真实才能记录的孩子，DSA 是低风险的加分项；对一个没有记录的孩子，它是干扰项。尝试 DSA 并不会让你失去 PSLE 这条路——你只是多买了一次更早的机会，代价是申请和 trial 占掉的备考时间。",
      ],
      ms: [
        "Bayangkan DSA sebagai salah satu daripada dua pintu ke Tingkatan 1, berjalan pada jam yang berbeza. DSA-Sec berjalan dahulu, pada pertengahan Tahun 6, dan bergantung pada bakat yang dibuktikan. S1 Posting berjalan selepas keputusan PSLE pada November, dan bergantung pada skor Tahap Pencapaian PSLE (AL). Setiap anak secara automatik berada dalam laluan S1 Posting; DSA ialah pintu pilihan yang lebih awal yang turut dicuba oleh segelintir keluarga.",
        "Kedua-dua pintu tidak pernah bersaing secara langsung. Seorang anak sama ada memperoleh tempat melalui DSA dan menerimanya — lalu meninggalkan latihan S1 Posting sepenuhnya — atau melalui S1 Posting seperti orang lain. Tiada penalti kerana mencuba DSA dan gagal: permohonan DSA yang ditolak atau ditolak sendiri tidak memberi kesan langsung kepada penempatan berasaskan PSLE yang menyusul. Satu-satunya cara DSA menutup pintu ialah apabila anda menerima Tawaran Sah, yang mengikat dan mengeluarkan anak daripada S1 Posting.",
        "Keutamaan affiliation ialah perkara ketiga yang sering dicampuradukkan oleh ibu bapa dengan DSA — ia bukan sebahagian daripadanya. Affiliation ialah kelebihan berasingan dalam laluan S1 Posting, untuk anak yang berpindah dari sekolah rendah ke sekolah menengah gabungannya, dan ia ditentukan oleh skor PSLE serta status gabungan, bukan oleh panel bakat. Asingkan tiga kotak fikiran: DSA ialah bakat sebelum PSLE; S1 Posting ialah skor selepas PSLE; affiliation ialah keutamaan dalam laluan penempatan, bukan kategori DSA.",
        "Satu contoh ringkas. Dua anak memohon ke sekolah yang sama untuk sukan yang sama. Seorang diberi Tawaran Sah, menerima pada November, dan tidak pernah memasuki S1 Posting; sekolah menengahnya selesai pada saat dia menerima. Seorang lagi disenaraikan menunggu, senarai menunggu tidak bertukar, dan dia ditempatkan pada Disember semata-mata berdasarkan skor PSLE — seolah-olah dia tidak pernah memohon. Sekolah sama, bakat sama, dua laluan masuk yang sepenuhnya berbeza.",
        "Secara praktikal, ini menjadikan DSA tambahan berisiko rendah untuk anak yang mempunyai rekod bakat sebenar, dan gangguan untuk anak yang tiada. Anda tidak menyerahkan laluan PSLE dengan mencuba; anda membeli satu peluang tambahan yang lebih awal, dengan kos masa persediaan yang digunakan oleh permohonan dan percubaan.",
      ],
      ta: [
        "DSA-ஐ இடைநிலை 1-க்கான இரண்டு கதவுகளில் ஒன்றாகக் கற்பனை செய்வது உதவும் — இரண்டும் வெவ்வேறு கடிகாரங்களில் இயங்குகின்றன. DSA-Sec முதலில், ஆரம்ப பள்ளி 6-இன் நடுவில் இயங்குகிறது, நிரூபிக்கப்பட்ட திறமையை அடிப்படையாகக் கொண்டது. S1 Posting நவம்பரில் PSLE முடிவுகளுக்குப் பிறகு இயங்குகிறது, PSLE வெற்றி நிலை (AL) மதிப்பெண்ணை அடிப்படையாகக் கொண்டது. ஒவ்வொரு குழந்தையும் தானாகவே S1 Posting பாதையில் இருக்கிறது; DSA என்பது ஒரு சில குடும்பங்கள் கூடுதலாக முயற்சிக்கும் விருப்பத் தேர்வான, முந்தைய கதவு.",
        "இரண்டு கதவுகளும் ஒருபோதும் நேருக்கு நேர் போட்டியிடுவதில்லை. ஒரு குழந்தை DSA மூலம் ஒரு இடத்தைப் பெற்று அதை ஏற்கிறது — அப்போது S1 Posting பயிற்சியை முற்றிலும் விட்டுவிடுகிறது — அல்லது மற்ற அனைவரையும் போல S1 Posting வழியாகச் செல்கிறது. DSA-ஐ முயற்சித்துத் தவறினால் எந்த அபராதமும் இல்லை: நிராகரிக்கப்பட்ட அல்லது மறுக்கப்பட்ட DSA விண்ணப்பம், அதைத் தொடரும் PSLE-அடிப்படையிலான இடம் ஒதுக்கீட்டில் எந்த தாக்கமும் ஏற்படுத்தாது. DSA ஒரு கதவை மூடும் ஒரே வழி, நீங்கள் ஒரு Confirmed Offer-ஐ ஏற்பதுதான் — அது கட்டுப்படுத்தும், குழந்தையை S1 Posting-இலிருந்து நீக்குகிறது.",
        "Affiliation முன்னுரிமை என்பது பெற்றோர் அடிக்கடி DSA-உடன் கலக்கும் மூன்றாவது விஷயம் — அது அதன் பகுதி அல்ல. Affiliation என்பது S1 Posting பாதைக்குள் உள்ள ஒரு தனி நன்மை, ஒரு ஆரம்ப பள்ளியிலிருந்து அதன் இணைந்த இடைநிலை பள்ளிக்கு செல்லும் குழந்தைகளுக்கானது, அது PSLE மதிப்பெண் மற்றும் இணைப்பு நிலையால் தீர்மானிக்கப்படுகிறது, திறமைக் குழுவால் அல்ல. மூன்று கருத்துகளைத் தனியாக வைத்திருங்கள்: DSA என்பது PSLE-க்கு முந்தைய திறமை; S1 Posting என்பது PSLE-க்குப் பிந்தைய மதிப்பெண்; affiliation என்பது இடம் ஒதுக்கீட்டுப் பாதையில் ஒரு முன்னுரிமை, DSA வகை அல்ல.",
        "ஒரு விரைவான உதாரணம். இரண்டு குழந்தைகள் ஒரே விளையாட்டுக்காக ஒரே பள்ளிக்கு விண்ணப்பிக்கின்றன. ஒருவருக்கு Confirmed Offer வழங்கப்படுகிறது, நவம்பரில் ஏற்கிறார், S1 Posting-இல் ஒருபோதும் நுழைவதில்லை; ஏற்றுக்கொண்ட தருணத்தில் அவரது இடைநிலை பள்ளி தீர்மானமாகிறது. மற்றவர் காத்திருப்புப் பட்டியலில் வைக்கப்படுகிறார், பட்டியல் மாறவில்லை, டிசம்பரில் முற்றிலும் PSLE மதிப்பெண்ணின் அடிப்படையில் இடம் ஒதுக்கப்படுகிறார் — அவர் ஒருபோதும் விண்ணப்பிக்காதது போலவே. ஒரே பள்ளி, ஒரே திறமை, முற்றிலும் வேறுபட்ட இரண்டு நுழைவுப் பாதைகள்.",
        "நடைமுறையில், இது ஒரு உண்மையான திறமைப் பதிவு உள்ள குழந்தைக்கு DSA-ஐ குறைந்த ஆபத்துள்ள கூடுதலாகவும், பதிவு இல்லாத குழந்தைக்கு ஒரு கவனச்சிதறலாகவும் ஆக்குகிறது. முயற்சிப்பதன் மூலம் நீங்கள் PSLE பாதையை இழக்கவில்லை; விண்ணப்பமும் சோதனைகளும் எடுத்துக்கொள்ளும் தயாரிப்பு நேரத்தை விலையாகக் கொடுத்து, ஒரு கூடுதல், முந்தைய வாய்ப்பை வாங்குகிறீர்கள்.",
      ],
    },
  },
  {
    icon: ListChecks,
    title: {
      en: "8. Before you apply: a realistic self-check",
      zh: "8. 申请之前：一次诚实的自我核查",
      ms: "8. Sebelum anda memohon: semakan diri yang realistik",
      ta: "8. விண்ணப்பிப்பதற்கு முன்: ஒரு யதார்த்தமான சுய சரிபார்ப்பு",
    },
    paragraphs: {
      en: [
        "Before committing six weeks of P6 to a DSA campaign, it is worth running four honest checks. None of them need insider knowledge — only a clear look at what your child actually has on paper.",
        "Check the evidence, not the enthusiasm. Re-read the three tiers in section 3. If the record sits in Tier A or B, DSA is worth a serious attempt. If it sits below Tier C — real interest, but no external grading, competition result, or sustained CCA leadership — the realistic move this year is to protect PSLE preparation and build the record toward a later DSA-JC attempt instead.",
        "Check the school-talent fit, not just the school name. A school is only worth a DSA slot if its programme matches your child's specific talent and the direction they are growing in. Use the DSA Finder to see which schools actually take your child's talent area, then read each shortlisted school's open-house material before deciding. A strong school with no real home for the talent is a weak DSA choice.",
        "Check the PSLE floor is reachable. A Confirmed Offer still needs the child to clear the minimum Posting Group for the course — AL 22 or better for Express and IP. If that floor is a stretch, an IP Confirmed Offer can convert to an O-Level Counter-Offer, or not hold at all. Look at the PSLE cut-off history to calibrate what is realistic for the schools on your shortlist.",
        "Check the family is ready for the commitment. Acceptance is binding, the talent commitment runs at least two years, and a 12-year-old's interests can move. Have that conversation with your child before you apply, not after the offer arrives. If all four checks pass, DSA is a strong route with little downside. If two or more fail, the honest answer is usually \"not this year\" — and choosing not to apply is a legitimate, often smarter, decision.",
      ],
      zh: [
        "在把小六的六周投进 DSA 之前，值得先做四项诚实核查。每一项都不需要内部消息——只需要清楚看一眼孩子手上真正有什么。",
        "核查证据，不是核查热情。重读第 3 节的三个层级。如果记录落在 A 类或 B 类，DSA 值得认真一试。如果在 C 类以下——有真实兴趣，但没有外部考级、比赛成绩或持续的 CCA 领导经历——今年现实的做法，是保住 PSLE 备考，把记录积累到将来冲 DSA-JC。",
        "核查学校与才艺的匹配，不只是学校名气。一所学校值不值得占用一个 DSA 名额，取决于它的项目是否匹配孩子的具体才能、以及孩子正在成长的方向。用 DSA Finder 看哪些学校真的收孩子这个才艺方向，再在做决定前读每所入围学校的开放日资料。一所好学校如果没有这个才能的落脚处，对 DSA 来说是差选择。",
        "核查 PSLE 门槛够得着。Confirmed Offer 仍然要求孩子达到所录取课程的最低 Posting Group——Express 和 IP 是 AL 22 或更好。如果这个门槛很勉强，IP 的 Confirmed Offer 可能转成 O-Level 的 Counter-Offer，或者根本保不住。看 PSLE 截分历史，校准入围名单上那几所学校对你家是否现实。",
        "核查家庭准备好承担承诺。接受具有约束力，才艺承诺至少两年，而一个 12 岁孩子的兴趣会变。在申请之前就和孩子谈清楚，别等结果来了才谈。四项都过，DSA 是一条几乎没有下行风险的好路。两项或更多没过，诚实的答案通常是「今年先不申请」——而选择不申请，是一个正当、往往更明智的决定。",
      ],
      ms: [
        "Sebelum melaburkan enam minggu Tahun 6 untuk kempen DSA, berbaloi menjalankan empat semakan jujur. Tiada satu pun memerlukan pengetahuan orang dalam — hanya pandangan jelas tentang apa yang anak anda benar-benar ada di atas kertas.",
        "Semak bukti, bukan keghairahan. Baca semula tiga peringkat dalam bahagian 3. Jika rekod berada di Peringkat A atau B, DSA berbaloi dicuba dengan serius. Jika ia di bawah Peringkat C — minat sebenar, tetapi tiada gred luar, keputusan pertandingan, atau kepimpinan CCA berterusan — langkah realistik tahun ini ialah melindungi persediaan PSLE dan membina rekod ke arah percubaan DSA-JC kemudian.",
        "Semak kesesuaian sekolah dengan bakat, bukan sekadar nama sekolah. Sebuah sekolah hanya berbaloi untuk slot DSA jika programnya sepadan dengan bakat khusus anak anda dan arah pertumbuhannya. Gunakan DSA Finder untuk melihat sekolah mana yang benar-benar menerima bidang bakat anak anda, kemudian baca bahan hari terbuka setiap sekolah yang disenarai pendek sebelum membuat keputusan. Sekolah yang kuat tetapi tiada tempat sebenar untuk bakat itu ialah pilihan DSA yang lemah.",
        "Semak lantai PSLE boleh dicapai. Tawaran Sah masih memerlukan anak melepasi Posting Group minimum untuk kursus — AL 22 atau lebih baik untuk Express dan IP. Jika lantai itu sukar dicapai, Tawaran Sah IP boleh bertukar kepada Tawaran Balas O-Level, atau tidak kekal langsung. Lihat sejarah cut-off PSLE untuk menentukur apa yang realistik bagi sekolah dalam senarai pendek anda.",
        "Semak keluarga bersedia untuk komitmen. Penerimaan ialah mengikat, komitmen bakat berjalan sekurang-kurangnya dua tahun, dan minat anak berusia 12 tahun boleh berubah. Adakan perbualan itu dengan anak anda sebelum memohon, bukan selepas tawaran tiba. Jika keempat-empat semakan lulus, DSA ialah laluan yang kuat dengan sedikit risiko. Jika dua atau lebih gagal, jawapan jujur biasanya \"bukan tahun ini\" — dan memilih untuk tidak memohon ialah keputusan yang sah, selalunya lebih bijak.",
      ],
      ta: [
        "ஒரு DSA முயற்சிக்காக ஆரம்ப பள்ளி 6-இன் ஆறு வாரங்களை அர்ப்பணிப்பதற்கு முன், நான்கு நேர்மையான சரிபார்ப்புகளை நடத்துவது மதிப்புடையது. அவற்றில் எதுவும் உள் தகவல் தேவையில்லை — உங்கள் குழந்தை உண்மையில் ஆவணத்தில் என்ன வைத்திருக்கிறது என்பதைத் தெளிவாகப் பார்த்தால் போதும்.",
        "ஆர்வத்தை அல்ல, சான்றைச் சரிபார்க்கவும். பிரிவு 3-இல் உள்ள மூன்று அடுக்குகளை மீண்டும் படியுங்கள். பதிவு அடுக்கு A அல்லது B-இல் இருந்தால், DSA தீவிரமாக முயற்சிக்கத் தகுந்தது. அது அடுக்கு C-க்குக் கீழே இருந்தால் — உண்மையான ஆர்வம், ஆனால் வெளி தரம், போட்டி முடிவு, அல்லது தொடர்ச்சியான CCA தலைமை இல்லை — இந்த ஆண்டின் யதார்த்தமான நடவடிக்கை PSLE தயாரிப்பைப் பாதுகாத்து, பிற்கால DSA-JC முயற்சிக்காக பதிவை உருவாக்குவதே.",
        "பள்ளியின் பெயரை மட்டுமல்ல, பள்ளி-திறமை பொருத்தத்தைச் சரிபார்க்கவும். ஒரு பள்ளி அதன் திட்டம் உங்கள் குழந்தையின் குறிப்பிட்ட திறமைக்கும் அவர்கள் வளரும் திசைக்கும் பொருந்தினால் மட்டுமே DSA இடத்திற்குத் தகுதியானது. உங்கள் குழந்தையின் திறமைப் பகுதியை எந்தப் பள்ளிகள் உண்மையில் ஏற்கின்றன என்பதைப் பார்க்க DSA Finder-ஐப் பயன்படுத்துங்கள், பின்னர் முடிவெடுப்பதற்கு முன் குறுகிய பட்டியலிலுள்ள ஒவ்வொரு பள்ளியின் திறந்த நாள் தகவலையும் படியுங்கள். அந்தத் திறமைக்கு உண்மையான இடம் இல்லாத ஒரு வலுவான பள்ளி, DSA-க்கு பலவீனமான தேர்வு.",
        "PSLE தளத்தை எட்ட முடியுமா எனச் சரிபார்க்கவும். Confirmed Offer இன்னும் பாடத்திற்கான குறைந்தபட்ச Posting Group-ஐ குழந்தை கடக்க வேண்டும் — Express மற்றும் IP-க்கு AL 22 அல்லது சிறந்தது. அந்தத் தளம் எட்டுவதற்குக் கடினமாக இருந்தால், IP Confirmed Offer ஒரு O-Level Counter-Offer ஆக மாறலாம், அல்லது நிலைக்காமல் போகலாம். உங்கள் குறுகிய பட்டியலில் உள்ள பள்ளிகளுக்கு என்ன யதார்த்தம் என்பதைச் சரிசெய்ய PSLE cut-off வரலாற்றைப் பாருங்கள்.",
        "குடும்பம் உறுதிமொழிக்குத் தயாரா எனச் சரிபார்க்கவும். ஏற்றுக்கொள்வது கட்டுப்படுத்தும், திறமை உறுதிமொழி குறைந்தபட்சம் இரண்டு ஆண்டுகள் நீடிக்கும், மேலும் 12 வயது குழந்தையின் ஆர்வம் மாறலாம். சலுகை வந்த பிறகு அல்ல, விண்ணப்பிப்பதற்கு முன்பே அந்த உரையாடலை உங்கள் குழந்தையுடன் நடத்துங்கள். நான்கு சரிபார்ப்புகளும் தேறினால், DSA என்பது குறைந்த எதிர்மறையுடன் கூடிய வலுவான பாதை. இரண்டு அல்லது அதற்கு மேற்பட்டவை தோல்வியடைந்தால், நேர்மையான பதில் பொதுவாக \"இந்த ஆண்டு இல்லை\" — விண்ணப்பிக்காமல் இருப்பதைத் தேர்வது ஒரு முறையான, பெரும்பாலும் புத்திசாலித்தனமான முடிவு.",
      ],
    },
  },
];

const NEXT_TITLE: LocaleStr = {
  en: "What to read next",
  zh: "接下来看什么",
  ms: "Apa yang perlu dibaca seterusnya",
  ta: "அடுத்து என்ன படிக்க வேண்டும்",
};

const NEXT_BODY: LocaleStr = {
  en: "Four pages take this further: the 2026 timeline (what happens when, with exact dates), the DSA Finder (which schools take your child's talent), the PSLE cut-off history (to calibrate the score floor), and parent stories (six DSA pathways in practice).",
  zh: "四个页面把这套思路继续往前推：2026 时间线（什么时候发生什么、具体日期）、DSA Finder（哪些学校收孩子的才艺）、PSLE 截分历史（校准分数门槛），以及家长实战经历（六个 DSA 路径在现实中怎么走）。",
  ms: "Empat halaman meneruskan ini: garis masa 2026 (apa berlaku bila, dengan tarikh tepat), DSA Finder (sekolah mana yang menerima bakat anak), sejarah cut-off PSLE (untuk menentukur lantai skor), dan kisah ibu bapa (enam laluan DSA dalam amalan).",
  ta: "நான்கு பக்கங்கள் இதை மேலும் முன்னெடுத்துச் செல்கின்றன: 2026 கால அட்டவணை (என்ன எப்போது நடக்கிறது, துல்லியமான தேதிகளுடன்), DSA Finder (உங்கள் குழந்தையின் திறமையை எந்தப் பள்ளிகள் ஏற்கின்றன), PSLE cut-off வரலாறு (மதிப்பெண் தளத்தைச் சரிசெய்ய), மற்றும் பெற்றோர் கதைகள் (நடைமுறையில் ஆறு DSA பாதைகள்).",
};

const CTA_TIMELINE: LocaleStr = {
  en: "2026 Application Timeline",
  zh: "2026 申请时间线",
  ms: "Garis Masa Permohonan 2026",
  ta: "2026 விண்ணப்ப கால அட்டவணை",
};

const CTA_STORIES: LocaleStr = {
  en: "DSA parent stories",
  zh: "DSA 家长实战经历",
  ms: "Kisah Ibu Bapa DSA",
  ta: "DSA பெற்றோர் கதைகள்",
};

const CTA_FINDER: LocaleStr = {
  en: "DSA Finder",
  zh: "DSA Finder",
  ms: "DSA Finder",
  ta: "DSA Finder",
};

const CTA_COP: LocaleStr = {
  en: "PSLE cut-off history",
  zh: "PSLE 截分历史",
  ms: "Sejarah cut-off PSLE",
  ta: "PSLE cut-off வரலாறு",
};

const BC_GUIDE: LocaleStr = {
  en: "DSA Guide",
  zh: "DSA 指南",
  ms: "Panduan DSA",
  ta: "DSA வழிகாட்டி",
};
const BC_HERE: LocaleStr = {
  en: "What DSA is",
  zh: "DSA 是什么",
  ms: "Apa itu DSA",
  ta: "DSA என்றால் என்ன",
};

const REL_KICKER: LocaleStr = {
  en: "Related reference",
  zh: "相关参考",
  ms: "Rujukan berkaitan",
  ta: "தொடர்புடைய குறிப்பு",
};
const REL_HEADING: LocaleStr = {
  en: "Three next steps after understanding the mechanism",
  zh: "理解机制后的三个下一步",
  ms: "Tiga langkah selepas memahami mekanisme",
  ta: "முறையை புரிந்த பிறகு மூன்று அடுத்த படிகள்",
};
const R1_T: LocaleStr = {
  en: "2026 timeline",
  zh: "2026 时间线",
  ms: "Garis masa 2026",
  ta: "2026 கால அட்டவணை",
};
const R1_B: LocaleStr = {
  en: "What happens month-by-month from May application to November results.",
  zh: "5 月申请到 11 月放榜，逐月在发生什么。",
  ms: "Apa yang berlaku bulan demi bulan dari Mei hingga November.",
  ta: "மே விண்ணப்பம் முதல் நவம்பர் முடிவுகள் வரை.",
};
const R2_T: LocaleStr = {
  en: "All talent paths",
  zh: "全部才艺方向",
  ms: "Semua laluan bakat",
  ta: "அனைத்து திறமைப் பாதைகள்",
};
const R2_B: LocaleStr = {
  en: "DSA accepts eight MOE categories — each with its own trial format and school list.",
  zh: "DSA 接收 8 大 MOE 类别 · 每个有独立的 trial 格式与学校簇。",
  ms: "DSA terima lapan kategori MOE — setiap satu dengan format trial sendiri.",
  ta: "DSA எட்டு MOE வகைகளை ஏற்கிறது — ஒவ்வொன்றும் தனி சோதனை வடிவம்.",
};
const R3_T: LocaleStr = {
  en: "12 parent FAQs",
  zh: "12 个家长常见问题",
  ms: "12 FAQ ibu bapa",
  ta: "12 பெற்றோர் கேள்விகள்",
};
const R3_B: LocaleStr = {
  en: "Specific answers to the questions families actually ask in our inbox.",
  zh: "家长邮件中真实问的问题，对应具体答案。",
  ms: "Jawapan tepat untuk soalan yang ibu bapa benar-benar tanya.",
  ta: "குடும்பங்கள் கேட்கும் கேள்விகளுக்கான பதில்கள்.",
};

export function WhatIsDsaPageBody() {
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
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-intellectual-muted sm:text-lg">
              {pick(LEAD, locale)}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="space-y-12 sm:space-y-14">
              {SECTIONS.map((s, i) => {
                const Icon = s.icon;
                const paras = pick(s.paragraphs, locale);
                return (
                  <article key={i} className="scroll-mt-24">
                    <header className="flex items-start gap-3">
                      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2
                        style={{ textTransform: "none" }}
                        className="font-display text-xl font-bold leading-snug text-intellectual sm:text-2xl"
                      >
                        {pick(s.title, locale)}
                      </h2>
                    </header>
                    <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-intellectual-muted sm:text-base">
                      {paras.map((p, pi) => (
                        <p key={pi}>{p}</p>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-14 rounded-2xl border border-intellectual/15 bg-intellectual p-6 text-white sm:p-8">
              <h2 className="font-display text-lg font-semibold sm:text-xl" style={{ textTransform: "none" }}>
                {pick(NEXT_TITLE, locale)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {pick(NEXT_BODY, locale)}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/timeline"
                  className="inline-flex items-center gap-2 rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
                >
                  <span style={{ textTransform: "none" }}>{pick(CTA_TIMELINE, locale)}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/dsa-finder"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <span style={{ textTransform: "none" }}>{pick(CTA_FINDER, locale)}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/psle-cop"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <span style={{ textTransform: "none" }}>{pick(CTA_COP, locale)}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/dsa-experience"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <span style={{ textTransform: "none" }}>{pick(CTA_STORIES, locale)}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <RelatedCardsRow
        kicker={pick(REL_KICKER, locale)}
        heading={pick(REL_HEADING, locale)}
        items={[
          { icon: CalendarClock, title: pick(R1_T, locale), body: pick(R1_B, locale), href: "/timeline" },
          { icon: Compass, title: pick(R2_T, locale), body: pick(R2_B, locale), href: "/dsa-interview/talents" },
          { icon: MessageSquareText, title: pick(R3_T, locale), body: pick(R3_B, locale), href: "/faq" },
        ]}
      />
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
