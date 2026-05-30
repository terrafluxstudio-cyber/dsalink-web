"use client";

import { useState } from "react";
import {
  ChevronDown,
  ClipboardList,
  Mic,
  Users,
  Target,
  Lightbulb,
  X,
} from "lucide-react";
import Link from "next/link";
import { Q_BANK } from "@/lib/dsa-qbank";
import {
  Q_PREP_HOOK,
  Q_PREP_MINDSET,
  Q_PREP_SECTIONS,
  type QPrepSection,
  type QPrepCard,
} from "@/lib/dsa-qprep";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const ICON_MAP = {
  ClipboardList,
  Mic,
  Users,
  Target,
} as const;

function pickLocaleText(
  obj: { en: string; zh: string; ms: string; ta: string },
  locale: string,
): string {
  if (locale === "zh") return obj.zh;
  if (locale === "ms") return obj.ms;
  if (locale === "ta") return obj.ta;
  return obj.en;
}

function splitPipe(s: string) {
  return s.split("|");
}

export function DsaInterviewPageBody() {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedQ, setExpandedQ] = useState<string | null>(null);
  const [expandedQPrep, setExpandedQPrep] = useState<Set<string>>(new Set());

  function toggleQPrepCard(num: string) {
    setExpandedQPrep((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  }

  // ── Data arrays ────────────────────────────────────────────────────────────

  const selectionTypes = [
    {
      icon: "🎤",
      title: t.dsaInterviewSel1Title,
      who: t.dsaInterviewSel1Who,
      what: t.dsaInterviewSel1What,
      tip: t.dsaInterviewSel1Tip,
    },
    {
      icon: "⚽",
      title: t.dsaInterviewSel2Title,
      who: t.dsaInterviewSel2Who,
      what: t.dsaInterviewSel2What,
      tip: t.dsaInterviewSel2Tip,
    },
    {
      icon: "🎵",
      title: t.dsaInterviewSel3Title,
      who: t.dsaInterviewSel3Who,
      what: t.dsaInterviewSel3What,
      tip: t.dsaInterviewSel3Tip,
    },
    {
      icon: "🔬",
      title: t.dsaInterviewSel4Title,
      who: t.dsaInterviewSel4Who,
      what: t.dsaInterviewSel4What,
      tip: t.dsaInterviewSel4Tip,
    },
    {
      icon: "🏅",
      title: t.dsaInterviewSel5Title,
      who: t.dsaInterviewSel5Who,
      what: t.dsaInterviewSel5What,
      tip: t.dsaInterviewSel5Tip,
    },
  ];

  const prepSteps = [
    { n: 1, title: t.dsaInterviewPrep1Title, body: t.dsaInterviewPrep1Body },
    { n: 2, title: t.dsaInterviewPrep2Title, body: t.dsaInterviewPrep2Body },
    { n: 3, title: t.dsaInterviewPrep3Title, body: t.dsaInterviewPrep3Body },
    { n: 4, title: t.dsaInterviewPrep4Title, body: t.dsaInterviewPrep4Body },
    { n: 5, title: t.dsaInterviewPrep5Title, body: t.dsaInterviewPrep5Body },
    { n: 6, title: t.dsaInterviewPrep6Title, body: t.dsaInterviewPrep6Body },
  ];

  const interviewQs = [
    { q: t.dsaInterviewIv1Q, why: t.dsaInterviewIv1Why },
    { q: t.dsaInterviewIv2Q, why: t.dsaInterviewIv2Why },
    { q: t.dsaInterviewIv3Q, why: t.dsaInterviewIv3Why },
    { q: t.dsaInterviewIv4Q, why: t.dsaInterviewIv4Why },
    { q: t.dsaInterviewIv5Q, why: t.dsaInterviewIv5Why },
    { q: t.dsaInterviewIv6Q, why: t.dsaInterviewIv6Why },
  ];
  void interviewQs; // reserved for future use

  const coachingRows = [
    {
      domain: t.dsaInterviewCoachSportsDomain,
      recognised: splitPipe(t.dsaInterviewCoachSportsRecognised),
      benchmark: t.dsaInterviewCoachSportsBenchmark,
    },
    {
      domain: t.dsaInterviewCoachMusicDomain,
      recognised: splitPipe(t.dsaInterviewCoachMusicRecognised),
      benchmark: t.dsaInterviewCoachMusicBenchmark,
    },
    {
      domain: t.dsaInterviewCoachDanceDomain,
      recognised: splitPipe(t.dsaInterviewCoachDanceRecognised),
      benchmark: t.dsaInterviewCoachDanceBenchmark,
    },
    {
      domain: t.dsaInterviewCoachSciDomain,
      recognised: splitPipe(t.dsaInterviewCoachSciRecognised),
      benchmark: t.dsaInterviewCoachSciBenchmark,
    },
    {
      domain: t.dsaInterviewCoachHumDomain,
      recognised: splitPipe(t.dsaInterviewCoachHumRecognised),
      benchmark: t.dsaInterviewCoachHumBenchmark,
    },
    {
      domain: t.dsaInterviewCoachLangDomain,
      recognised: splitPipe(t.dsaInterviewCoachLangRecognised),
      benchmark: t.dsaInterviewCoachLangBenchmark,
    },
  ];

  const portfolioItems = [
    { item: t.dsaInterviewPf1Title, desc: t.dsaInterviewPf1Desc },
    { item: t.dsaInterviewPf2Title, desc: t.dsaInterviewPf2Desc },
    { item: t.dsaInterviewPf3Title, desc: t.dsaInterviewPf3Desc },
    { item: t.dsaInterviewPf4Title, desc: t.dsaInterviewPf4Desc },
    { item: t.dsaInterviewPf5Title, desc: t.dsaInterviewPf5Desc },
    { item: t.dsaInterviewPf6Title, desc: t.dsaInterviewPf6Desc },
    { item: t.dsaInterviewPf7Title, desc: t.dsaInterviewPf7Desc },
  ];

  const pageFaqs = [
    { q: t.dsaInterviewUiFaq1Q, a: t.dsaInterviewUiFaq1A },
    { q: t.dsaInterviewUiFaq2Q, a: t.dsaInterviewUiFaq2A },
    { q: t.dsaInterviewUiFaq3Q, a: t.dsaInterviewUiFaq3A },
    { q: t.dsaInterviewUiFaq4Q, a: t.dsaInterviewUiFaq4A },
    { q: t.dsaInterviewUiFaq5Q, a: t.dsaInterviewUiFaq5A },
  ];

  const timelineRows = [
    { date: t.dsaInterviewTimelineRow1Date, event: t.dsaInterviewTimelineRow1Event, detail: t.dsaInterviewTimelineRow1Detail },
    { date: t.dsaInterviewTimelineRow2Date, event: t.dsaInterviewTimelineRow2Event, detail: t.dsaInterviewTimelineRow2Detail },
    { date: t.dsaInterviewTimelineRow3Date, event: t.dsaInterviewTimelineRow3Event, detail: t.dsaInterviewTimelineRow3Detail },
    { date: t.dsaInterviewTimelineRow4Date, event: t.dsaInterviewTimelineRow4Event, detail: t.dsaInterviewTimelineRow4Detail },
    { date: t.dsaInterviewTimelineRow5Date, event: t.dsaInterviewTimelineRow5Event, detail: t.dsaInterviewTimelineRow5Detail },
  ];

  const introElements = [
    { label: t.dsaInterviewIntroEl1Label, body: t.dsaInterviewIntroEl1Body },
    { label: t.dsaInterviewIntroEl2Label, body: t.dsaInterviewIntroEl2Body },
    { label: t.dsaInterviewIntroEl3Label, body: t.dsaInterviewIntroEl3Body },
    { label: t.dsaInterviewIntroEl4Label, body: t.dsaInterviewIntroEl4Body },
    { label: t.dsaInterviewIntroEl5Label, body: t.dsaInterviewIntroEl5Body },
  ];

  const introTemplateGroups = [
    {
      group: t.dsaInterviewTplGroupSports,
      templates: [
        { label: t.dsaInterviewTplCompLabel, body: t.dsaInterviewTplSportsCBody },
        { label: t.dsaInterviewTplDevLabel, body: t.dsaInterviewTplSportsDBody },
      ],
    },
    {
      group: t.dsaInterviewTplGroupDance,
      templates: [
        { label: t.dsaInterviewTplCompLabel, body: t.dsaInterviewTplDanceCBody },
        { label: t.dsaInterviewTplDevLabel, body: t.dsaInterviewTplDanceDBody },
      ],
    },
    {
      group: t.dsaInterviewTplGroupMusic,
      templates: [
        { label: t.dsaInterviewTplCompLabel, body: t.dsaInterviewTplMusicCBody },
        { label: t.dsaInterviewTplDevLabel, body: t.dsaInterviewTplMusicDBody },
      ],
    },
    {
      group: t.dsaInterviewTplGroupStem,
      templates: [
        { label: t.dsaInterviewTplCompLabel, body: t.dsaInterviewTplStemCBody },
        { label: t.dsaInterviewTplDevLabel, body: t.dsaInterviewTplStemDBody },
      ],
    },
    {
      group: t.dsaInterviewTplGroupLang,
      templates: [
        { label: t.dsaInterviewTplCompLabel, body: t.dsaInterviewTplLangCBody },
        { label: t.dsaInterviewTplDevLabel, body: t.dsaInterviewTplLangDBody },
      ],
    },
  ];

  const bodyLangBefore = [t.dsaInterviewBodyPre1, t.dsaInterviewBodyPre2, t.dsaInterviewBodyPre3];
  const bodyLangSpeaking = [t.dsaInterviewBodySpk1, t.dsaInterviewBodySpk2, t.dsaInterviewBodySpk3, t.dsaInterviewBodySpk4, t.dsaInterviewBodySpk5];
  const bodyLangAvoid = [t.dsaInterviewBodyAvd1, t.dsaInterviewBodyAvd2, t.dsaInterviewBodyAvd3, t.dsaInterviewBodyAvd4];

  const practiceWeeks = [
    { title: t.dsaInterviewPracticeWk1Title, body: t.dsaInterviewPracticeWk1Body },
    { title: t.dsaInterviewPracticeWk2Title, body: t.dsaInterviewPracticeWk2Body },
    { title: t.dsaInterviewPracticeWk3Title, body: t.dsaInterviewPracticeWk3Body },
    { title: t.dsaInterviewPracticeWk4Title, body: t.dsaInterviewPracticeWk4Body },
  ];

  const introMistakes = [
    t.dsaInterviewIntroMistake1,
    t.dsaInterviewIntroMistake2,
    t.dsaInterviewIntroMistake3,
    t.dsaInterviewIntroMistake4,
  ];

  const mistakeItems = [
    { title: t.dsaInterviewMistake01Title, body: t.dsaInterviewMistake01Body },
    { title: t.dsaInterviewMistake02Title, body: t.dsaInterviewMistake02Body },
    { title: t.dsaInterviewMistake03Title, body: t.dsaInterviewMistake03Body },
    { title: t.dsaInterviewMistake04Title, body: t.dsaInterviewMistake04Body },
    { title: t.dsaInterviewMistake05Title, body: t.dsaInterviewMistake05Body },
    { title: t.dsaInterviewMistake06Title, body: t.dsaInterviewMistake06Body },
    { title: t.dsaInterviewMistake07Title, body: t.dsaInterviewMistake07Body },
    { title: t.dsaInterviewMistake08Title, body: t.dsaInterviewMistake08Body },
    { title: t.dsaInterviewMistake09Title, body: t.dsaInterviewMistake09Body },
    { title: t.dsaInterviewMistake10Title, body: t.dsaInterviewMistake10Body },
  ];

  const dayOfSections = [
    {
      heading: t.dsaInterviewDayOfSection1,
      items: [
        t.dsaInterviewDayOfNight1,
        t.dsaInterviewDayOfNight2,
        t.dsaInterviewDayOfNight3,
        t.dsaInterviewDayOfNight4,
        t.dsaInterviewDayOfNight5,
      ],
    },
    {
      heading: t.dsaInterviewDayOfSection2,
      items: [
        t.dsaInterviewDayOfMorn1,
        t.dsaInterviewDayOfMorn2,
        t.dsaInterviewDayOfMorn3,
        t.dsaInterviewDayOfMorn4,
      ],
    },
    {
      heading: t.dsaInterviewDayOfSection3,
      items: [
        t.dsaInterviewDayOfRoom1,
        t.dsaInterviewDayOfRoom2,
        t.dsaInterviewDayOfRoom3,
        t.dsaInterviewDayOfRoom4,
        t.dsaInterviewDayOfRoom5,
      ],
    },
    {
      heading: t.dsaInterviewDayOfSection4,
      items: [
        t.dsaInterviewDayOfAfter1,
        t.dsaInterviewDayOfAfter2,
        t.dsaInterviewDayOfAfter3,
      ],
    },
  ];

  const qBankCategories = [
    {
      cat: t.dsaInterviewQBankCat1,
      questions: [
        { q: t.dsaInterviewQBankSelf1Q, why: t.dsaInterviewQBankSelf1Why },
        { q: t.dsaInterviewQBankSelf2Q, why: t.dsaInterviewQBankSelf2Why },
        { q: t.dsaInterviewQBankSelf3Q, why: t.dsaInterviewQBankSelf3Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat2,
      questions: [
        { q: t.dsaInterviewQBankWhy1Q, why: t.dsaInterviewQBankWhy1Why },
        { q: t.dsaInterviewQBankWhy2Q, why: t.dsaInterviewQBankWhy2Why },
        { q: t.dsaInterviewQBankWhy3Q, why: t.dsaInterviewQBankWhy3Why },
        { q: t.dsaInterviewQBankWhy4Q, why: t.dsaInterviewQBankWhy4Why },
        { q: t.dsaInterviewQBankWhy5Q, why: t.dsaInterviewQBankWhy5Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat3,
      questions: [
        { q: t.dsaInterviewQBankTalent1Q, why: t.dsaInterviewQBankTalent1Why },
        { q: t.dsaInterviewQBankTalent2Q, why: t.dsaInterviewQBankTalent2Why },
        { q: t.dsaInterviewQBankTalent3Q, why: t.dsaInterviewQBankTalent3Why },
        { q: t.dsaInterviewQBankTalent4Q, why: t.dsaInterviewQBankTalent4Why },
        { q: t.dsaInterviewQBankTalent5Q, why: t.dsaInterviewQBankTalent5Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat4,
      questions: [
        { q: t.dsaInterviewQBankChar1Q, why: t.dsaInterviewQBankChar1Why },
        { q: t.dsaInterviewQBankChar2Q, why: t.dsaInterviewQBankChar2Why },
        { q: t.dsaInterviewQBankChar3Q, why: t.dsaInterviewQBankChar3Why },
        { q: t.dsaInterviewQBankChar4Q, why: t.dsaInterviewQBankChar4Why },
        { q: t.dsaInterviewQBankChar5Q, why: t.dsaInterviewQBankChar5Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat5,
      questions: [
        { q: t.dsaInterviewQBankThink1Q, why: t.dsaInterviewQBankThink1Why },
        { q: t.dsaInterviewQBankThink2Q, why: t.dsaInterviewQBankThink2Why },
        { q: t.dsaInterviewQBankThink3Q, why: t.dsaInterviewQBankThink3Why },
        { q: t.dsaInterviewQBankThink4Q, why: t.dsaInterviewQBankThink4Why },
        { q: t.dsaInterviewQBankThink5Q, why: t.dsaInterviewQBankThink5Why },
      ],
    },
  ];

  const relatedLinks = [
    { href: "/dsa-coaches", label: t.dsaInterviewLinkCoaches },
    { href: "/open-houses", label: t.dsaInterviewLinkOpenHouses },
    { href: "/schools", label: t.dsaInterviewLinkSchools },
    { href: "/dsa-guide", label: t.dsaInterviewLinkDsaGuide },
    { href: "/faq", label: t.dsaInterviewLinkFaq },
    { href: "/psle-cop", label: t.dsaInterviewLinkPsleCop },
  ];

  // ── Tab definitions ─────────────────────────────────────────────────────────

  const tabs = [
    {
      id: "overview",
      label:
        locale === "zh"
          ? "准备概览"
          : locale === "ms"
          ? "Gambaran Keseluruhan"
          : locale === "ta"
          ? "கண்ணோட்டம்"
          : "Overview",
    },
    {
      id: "self-intro",
      label:
        locale === "zh"
          ? "自我介绍"
          : locale === "ms"
          ? "Pengenalan Diri"
          : locale === "ta"
          ? "சுய அறிமுகம்"
          : "Self-Introduction",
    },
    {
      id: "q-bank",
      label:
        locale === "zh"
          ? "面试题库"
          : locale === "ms"
          ? "Bank Soalan"
          : locale === "ta"
          ? "கேள்வி வங்கி"
          : "Question Bank",
    },
    {
      id: "q-prep",
      label:
        locale === "zh"
          ? "问答策略"
          : locale === "ms"
          ? "Strategi Soal Jawab"
          : locale === "ta"
          ? "கேள்வி தயாரிப்பு"
          : "Q&A Prep",
    },
    {
      id: "area-guides",
      label:
        locale === "zh"
          ? "领域指南"
          : locale === "ms"
          ? "Panduan Bidang"
          : locale === "ta"
          ? "பகுதி வழிகாட்டி"
          : "Area Guides",
    },
    {
      id: "day-of",
      label:
        locale === "zh"
          ? "面试当天"
          : locale === "ms"
          ? "Hari Temuduga"
          : locale === "ta"
          ? "நேர்காணல் நாள்"
          : "Day-Of",
    },
  ];

  // ── Area Guides placeholder data ────────────────────────────────────────────

  const areaGuides = [
    {
      icon: "⚽",
      id: "sports",
      title:
        locale === "zh"
          ? "体育 DSA"
          : locale === "ms"
          ? "Sukan DSA"
          : locale === "ta"
          ? "விளையாட்டு DSA"
          : "Sports DSA",
      preview:
        locale === "zh"
          ? [
              "学校评估的核心素质（团队精神、抗压力、可教性）",
              "体育面试常见问题与参考答案",
              "成就记录整理：比赛战绩 + 证书 + 推荐信",
              "体能/技术试训注意事项与应对技巧",
            ]
          : locale === "ms"
          ? [
              "Kualiti utama yang dinilai sekolah (semangat berpasukan, ketahanan, kebolehan belajar)",
              "Soalan temuduga biasa untuk sukan & jawapan rujukan",
              "Menyusun rekod pencapaian: rekod pertandingan + sijil + surat syor",
              "Tips dan strategi untuk ujian fizikal/kemahiran",
            ]
          : locale === "ta"
          ? [
              "பள்ளிகள் மதிப்பிடும் முக்கிய குணங்கள் (குழு உணர்வு, மன உறுதி, கற்கும் திறன்)",
              "விளையாட்டு நேர்காணல் பொதுவான கேள்விகள் & குறிப்பு பதில்கள்",
              "சாதனை பதிவுகள் ஒழுங்குபடுத்துதல்: போட்டி பதிவுகள் + சான்றிதழ்கள் + பரிந்துரை கடிதங்கள்",
              "உடல்/திறன் சோதனை குறிப்புகள் & உத்திகள்",
            ]
          : [
              "Key attributes schools assess (teamwork, resilience, coachability)",
              "Common sports interview questions & reference answers",
              "Organising achievement records: competition results + certifications + recommendation letters",
              "Physical/skills trial tips and strategies",
            ],
    },
    {
      icon: "💃",
      id: "dance",
      title:
        locale === "zh"
          ? "舞蹈 DSA"
          : locale === "ms"
          ? "Tarian DSA"
          : locale === "ta"
          ? "நடனம் DSA"
          : "Dance DSA",
      preview:
        locale === "zh"
          ? [
              "评审重点：技术功底 vs 舞台表现力",
              "舞蹈面试常见问题与回答策略",
              "视频/演出集锦的拍摄与剪辑建议",
              "试镜/演示日现场发挥技巧",
            ]
          : locale === "ms"
          ? [
              "Fokus penilai: teknik asas vs ekspresi pentas",
              "Soalan temuduga biasa untuk tarian & strategi menjawab",
              "Cadangan rakaman & penyuntingan video/highlight persembahan",
              "Tips persembahan semasa hari audisi/demonstrasi",
            ]
          : locale === "ta"
          ? [
              "மதிப்பீட்டாளர் கவனம்: தொழில்நுட்ப அடிப்படை vs மேடை வெளிப்பாடு",
              "நடன நேர்காணல் பொதுவான கேள்விகள் & பதில் உத்திகள்",
              "வீடியோ/செயல்திறன் சிறப்பம்சங்கள் படம்பிடிப்பு & திருத்தம் பரிந்துரைகள்",
              "ஆடிஷன்/நிரூபண நாள் உள்ளூர் செயல்திறன் குறிப்புகள்",
            ]
          : [
              "What assessors focus on: technical foundation vs stage expression",
              "Common dance interview questions & answering strategies",
              "Tips for filming and editing video/performance highlights",
              "On-the-day performance tips for audition/demonstration",
            ],
    },
    {
      icon: "🎵",
      id: "music",
      title:
        locale === "zh"
          ? "音乐 DSA"
          : locale === "ms"
          ? "Muzik DSA"
          : locale === "ta"
          ? "இசை DSA"
          : "Music DSA",
      preview:
        locale === "zh"
          ? [
              "面试中如何有说服力地展示音乐才能",
              "音乐理论与乐理问题备考",
              "考级证书与乐团经历的权重分析",
              "演奏曲目选择与现场演奏注意事项",
            ]
          : locale === "ms"
          ? [
              "Cara mempersembahkan bakat muzik secara meyakinkan dalam temuduga",
              "Persediaan soalan teori muzik",
              "Analisis kepentingan sijil gred & pengalaman ensembel",
              "Pemilihan repertoir & perkara yang perlu diambil perhatian semasa persembahan langsung",
            ]
          : locale === "ta"
          ? [
              "நேர்காணலில் இசை திறனை நம்பிக்கையுடன் வெளிப்படுத்துவது எப்படி",
              "இசை கோட்பாடு கேள்விகளுக்கு தயாரிப்பு",
              "தேர்வு சான்றிதழ்கள் & இசைக்குழு அனுபவத்தின் முக்கியத்துவ பகுப்பாய்வு",
              "இசை தேர்வு தேர்வு & நேரடி செயல்திறன் குறிப்புகள்",
            ]
          : [
              "How to present musical talent convincingly in the interview",
              "Music theory and aural test preparation",
              "Weight of grade certificates vs ensemble/orchestra experience",
              "Repertoire selection and live performance tips",
            ],
    },
    {
      icon: "🔬",
      id: "stem",
      title:
        locale === "zh"
          ? "科技/科学 DSA"
          : locale === "ms"
          ? "STEM DSA"
          : locale === "ta"
          ? "STEM DSA"
          : "STEM DSA",
      preview:
        locale === "zh"
          ? [
              "项目展示技巧：如何让评审理解你的研究",
              "问题解决能力 + 数学思维类面试题应对",
              "竞赛奖项组合的最优呈现方式",
              "科学实验与工程设计项目的记录方法",
            ]
          : locale === "ms"
          ? [
              "Tips pembentangan projek: cara membantu penilai memahami penyelidikan anda",
              "Menghadapi soalan kemahiran menyelesaikan masalah + pemikiran matematik",
              "Cara terbaik mempersembahkan gabungan anugerah pertandingan",
              "Cara mendokumentasikan projek eksperimen sains & reka bentuk kejuruteraan",
            ]
          : locale === "ta"
          ? [
              "திட்ட விளக்கக்காட்சி குறிப்புகள்: மதிப்பீட்டாளர்கள் உங்கள் ஆராய்ச்சியை புரிந்துகொள்ள உதவுவது எப்படி",
              "சிக்கல் தீர்க்கும் திறன் + கணித சிந்தனை நேர்காணல் கேள்விகளை எதிர்கொள்வது",
              "போட்டி விருது கலவையை சிறப்பாக வழங்குவது எப்படி",
              "அறிவியல் சோதனை & பொறியியல் வடிவமைப்பு திட்டங்களை ஆவணப்படுத்துவது",
            ]
          : [
              "Project presentation tips: helping assessors understand your research",
              "Handling problem-solving + mathematical thinking interview questions",
              "Best way to present your competition awards portfolio",
              "How to document science experiment and engineering design projects",
            ],
    },
    {
      icon: "🗣️",
      id: "language",
      title:
        locale === "zh"
          ? "语言/戏剧/辩论 DSA"
          : locale === "ms"
          ? "Bahasa / Drama / Debat DSA"
          : locale === "ta"
          ? "மொழி / நாடகம் / விவாதம் DSA"
          : "Language / Drama / Debate DSA",
      preview:
        locale === "zh"
          ? [
              "口头表达能力如何在面试中脱颖而出",
              "语言艺术类面试特有问题与回答框架",
              "辩论/戏剧经历与比赛记录的呈现技巧",
              "即兴表达训练方法与常见考题类型",
            ]
          : locale === "ms"
          ? [
              "Cara menonjolkan kemahiran bertutur dalam temuduga",
              "Soalan khusus temuduga seni bahasa & rangka kerja menjawab",
              "Cara mempersembahkan pengalaman debat/drama & rekod pertandingan",
              "Kaedah latihan ekspresi impromptu & jenis soalan biasa",
            ]
          : locale === "ta"
          ? [
              "நேர்காணலில் வாய்மொழி திறன்களை தனித்துவமாக காட்டுவது எப்படி",
              "மொழி கலை நேர்காணல் சிறப்பு கேள்விகள் & பதில் கட்டமைப்பு",
              "விவாதம்/நாடகம் அனுபவம் & போட்டி பதிவுகளை வழங்குவது எப்படி",
              "திடீர் வெளிப்பாடு பயிற்சி முறைகள் & பொதுவான கேள்வி வகைகள்",
            ]
          : [
              "How to stand out with verbal skills in the interview",
              "Language arts-specific interview questions & answering frameworks",
              "How to present debate/drama experience and competition records",
              "Impromptu expression training methods and common question types",
            ],
    },
  ];

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          crumbLabel={t.dsaInterviewCrumb}
          kicker={t.dsaInterviewKicker}
          title={t.dsaInterviewHeroTitle}
          subtitle={t.dsaInterviewHeroSubtitle}
        />

        <div className="bg-surface">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">

            {/* Alert banner */}
            <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
              <p className="text-[0.875rem] font-semibold text-amber-800">
                📅 {t.dsaInterviewAlertIntro}{" "}
                <strong>{t.dsaInterviewAlertOpen}</strong> {t.dsaInterviewAlertMid}{" "}
                <strong>{t.dsaInterviewAlertClose}</strong> {t.dsaInterviewAlertTime}{" "}
                {t.dsaInterviewAlertOhLead} <strong>{t.dsaInterviewAlertOhSpan}</strong>{" "}
                {t.dsaInterviewAlertEnd}
              </p>
            </div>

            {/* Coach directory crosslink */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#e3ded5] bg-white px-5 py-3.5 shadow-card">
              <p className="text-[0.875rem] text-slate-600">
                {locale === "zh"
                  ? "正在寻找DSA辅导机构或个人老师？"
                  : locale === "ms"
                  ? "Mencari jurulatih atau pusat latihan DSA?"
                  : locale === "ta"
                  ? "DSA பயிற்சியாளரை தேடுகிறீர்களா?"
                  : "Looking for a DSA coaching provider?"}
              </p>
              <Link
                href="/dsa-coaches"
                className="shrink-0 rounded-lg border border-intellectual/20 bg-intellectual/5 px-3 py-1.5 text-[0.8125rem] font-semibold text-intellectual transition hover:bg-intellectual hover:text-white"
              >
                {t.dsaInterviewLinkCoaches}
              </Link>
            </div>

            {/* ── Tab bar ── */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex min-w-max gap-0 border-b border-[#e3ded5]">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`shrink-0 px-4 py-2.5 text-[0.875rem] font-semibold transition-colors ${
                      activeTab === tab.id
                        ? "border-b-2 border-intellectual pb-[9px] text-intellectual"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ══ TAB: OVERVIEW ══════════════════════════════════════════════ */}
            {activeTab === "overview" && (
              <div className="space-y-10">

                <section>
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewTypesHeading}
                  </h2>
                  <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewTypesLead}</p>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {selectionTypes.map((s) => (
                      <div
                        key={s.title}
                        className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card"
                      >
                        <div className="mb-2 text-2xl">{s.icon}</div>
                        <h3 className="mb-0.5 font-display text-[0.9375rem] font-semibold text-slate-900">
                          {s.title}
                        </h3>
                        <p className="mb-1 text-[0.75rem] font-semibold tracking-wide text-intellectual">
                          {s.who}
                        </p>
                        <p className="mb-2 text-[0.8125rem] leading-snug text-slate-600">{s.what}</p>
                        <p className="rounded-lg bg-champagne-subtle px-3 py-2 text-[0.8125rem] leading-snug text-slate-700">
                          <span className="font-semibold text-champagne-dark">{t.dsaStrategyTipLabel}</span>{" "}
                          {s.tip}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewPrepHeading}
                  </h2>
                  <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewPrepLead}</p>
                  <ol className="space-y-4">
                    {prepSteps.map(({ n, title, body }) => (
                      <li
                        key={n}
                        className="flex gap-4 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-intellectual text-sm font-bold text-white">
                          {n}
                        </span>
                        <div>
                          <h3 className="mb-1 font-display text-[0.9375rem] font-semibold text-slate-900">
                            {title}
                          </h3>
                          <p className="text-[0.875rem] leading-relaxed text-slate-600">{body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                <section>
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewTimelineHeading}
                  </h2>
                  <p className="mb-4 text-[0.9375rem] text-slate-600">{t.dsaInterviewTimelineLead}</p>
                  <div className="mb-3 overflow-hidden rounded-xl border border-[#e3ded5] bg-white shadow-card">
                    {timelineRows.map(({ date, event, detail }, i) => (
                      <div
                        key={date}
                        className={`grid grid-cols-1 gap-0.5 px-5 py-4 sm:grid-cols-[160px_1fr] sm:gap-3 ${i < timelineRows.length - 1 ? "border-b border-[#e3ded5]" : ""}`}
                      >
                        <p className="text-[0.8125rem] font-bold text-intellectual">{date}</p>
                        <div>
                          <p className="text-[0.875rem] font-semibold text-slate-900">{event}</p>
                          <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-slate-500">{detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="rounded-lg border border-intellectual/15 bg-intellectual/5 px-4 py-3 text-[0.8125rem] leading-relaxed text-slate-700">
                    {t.dsaInterviewTimelineNote}
                  </p>
                </section>

                <section>
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewCoachingHeading}
                  </h2>
                  <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewCoachingLead}</p>
                  <div className="overflow-x-auto rounded-xl border border-[#e3ded5] shadow-card">
                    <table className="w-full text-left text-[0.8125rem]">
                      <thead>
                        <tr className="border-b border-[#e3ded5] bg-[#f7f4ef]">
                          <th className="px-4 py-3 font-semibold text-slate-700">
                            {t.dsaInterviewTableTalentDomain}
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700">
                            {t.dsaInterviewTableRecognised}
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 whitespace-nowrap">
                            {t.dsaInterviewTableBenchmark}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {coachingRows.map((row, i) => (
                          <tr key={row.domain} className={i % 2 === 0 ? "bg-white" : "bg-[#faf9f7]"}>
                            <td className="px-4 py-3 font-semibold text-intellectual align-top whitespace-nowrap">
                              {row.domain}
                            </td>
                            <td className="px-4 py-3 text-slate-600 align-top">
                              <ul className="list-disc list-inside space-y-0.5">
                                {row.recognised.map((r) => (
                                  <li key={r}>{r}</li>
                                ))}
                              </ul>
                            </td>
                            <td className="px-4 py-3 text-slate-600 align-top whitespace-nowrap">
                              {row.benchmark}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-[0.8125rem] text-slate-500">{t.dsaInterviewCoachingFootnote}</p>
                </section>

                <section>
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewPortfolioHeading}
                  </h2>
                  <p className="mb-4 text-[0.9375rem] text-slate-600">{t.dsaInterviewPortfolioLead}</p>
                  <div className="rounded-xl border border-[#e3ded5] bg-white p-6 shadow-card">
                    <ul className="space-y-2.5">
                      {portfolioItems.map(({ item, desc }) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-intellectual/30 text-intellectual text-[0.6875rem] font-bold">
                            ✓
                          </span>
                          <div>
                            <p className="font-semibold text-slate-900 text-[0.875rem]">{item}</p>
                            <p className="text-[0.8125rem] text-slate-500">{desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="mb-5 font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewFaqHeading}
                  </h2>
                  <div className="space-y-4">
                    {pageFaqs.map(({ q, a }) => (
                      <div key={q} className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                        <h3 className="mb-2 font-display text-[0.9375rem] font-semibold text-slate-900">{q}</h3>
                        <p className="text-[0.875rem] leading-relaxed text-slate-600">{a}</p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            )}

            {/* ══ TAB: SELF-INTRODUCTION ═════════════════════════════════════ */}
            {activeTab === "self-intro" && (
              <div className="space-y-10">

                {/* Self-Introduction */}
                <section>
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewIntroHeading}
                  </h2>
                  <p className="mb-6 text-[0.9375rem] text-slate-600">{t.dsaInterviewIntroLead}</p>

                  {/* 5-Element Framework */}
                  <div className="mb-8">
                    <h3 className="mb-1 font-display text-[0.875rem] font-semibold tracking-wide text-slate-700">
                      {t.dsaInterviewIntroElHeading}
                    </h3>
                    <p className="mb-4 text-[0.875rem] text-slate-500">{t.dsaInterviewIntroElLead}</p>
                    <div className="space-y-3">
                      {introElements.map(({ label, body }, i) => (
                        <div key={label} className="flex gap-4 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-intellectual text-[0.8125rem] font-bold text-white">
                            {i + 1}
                          </div>
                          <div>
                            <p className="mb-1 font-display text-[0.875rem] font-semibold text-slate-900">{label}</p>
                            <p className="text-[0.8125rem] leading-relaxed text-slate-500">{body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Templates */}
                  <div className="mb-8">
                    <h3 className="mb-1 font-display text-[0.875rem] font-semibold tracking-wide text-slate-700">
                      {t.dsaInterviewTplHeading}
                    </h3>
                    <p className="mb-2 text-[0.875rem] text-slate-500">{t.dsaInterviewTplLead}</p>
                    <p className="mb-5 rounded-lg border border-intellectual/15 bg-intellectual/5 px-4 py-2.5 text-[0.8125rem] text-slate-600">
                      {t.dsaInterviewTplNote}
                    </p>
                    <div className="space-y-6">
                      {introTemplateGroups.map(({ group, templates }) => (
                        <div key={group}>
                          <p className="mb-2 font-display text-[0.875rem] font-semibold text-slate-800">{group}</p>
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {templates.map(({ label, body }) => (
                              <div key={label} className="rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card">
                                <p className="mb-2 text-[0.75rem] font-bold tracking-wide text-intellectual">{label}</p>
                                <p className="text-[0.8125rem] italic leading-relaxed text-slate-600">{body}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Intro Mistakes */}
                  <div>
                    <h3 className="mb-3 font-display text-[0.875rem] font-semibold tracking-wide text-slate-700">
                      {t.dsaInterviewIntroMistakesHeading}
                    </h3>
                    <div className="space-y-2">
                      {introMistakes.map((mistake, i) => (
                        <div key={mistake} className="flex gap-3 rounded-lg border border-champagne/30 bg-champagne-subtle px-4 py-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-intellectual/10 text-[0.75rem] font-bold text-intellectual">
                            {i + 1}
                          </span>
                          <p className="text-[0.8125rem] leading-relaxed text-slate-700">{mistake}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Body Language */}
                <section>
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewBodyHeading}
                  </h2>
                  <p className="mb-6 text-[0.9375rem] text-slate-600">{t.dsaInterviewBodyLead}</p>
                  <div className="space-y-7">
                    <div>
                      <h3 className="mb-3 font-display text-[0.875rem] font-semibold tracking-wide text-slate-700">
                        {t.dsaInterviewBodySec1}
                      </h3>
                      <div className="space-y-2">
                        {bodyLangBefore.map((item, i) => (
                          <div key={i} className="flex gap-3 rounded-lg border border-[#e3ded5] bg-white px-4 py-3 shadow-card">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-intellectual/10 text-[0.75rem] font-bold text-intellectual">
                              {i + 1}
                            </span>
                            <p className="text-[0.8125rem] leading-relaxed text-slate-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 font-display text-[0.875rem] font-semibold tracking-wide text-slate-700">
                        {t.dsaInterviewBodySec2}
                      </h3>
                      <div className="space-y-2">
                        {bodyLangSpeaking.map((item, i) => (
                          <div key={i} className="flex gap-3 rounded-lg border border-[#e3ded5] bg-white px-4 py-3 shadow-card">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-intellectual/10 text-[0.75rem] font-bold text-intellectual">
                              {i + 1}
                            </span>
                            <p className="text-[0.8125rem] leading-relaxed text-slate-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 font-display text-[0.875rem] font-semibold tracking-wide text-slate-700">
                        {t.dsaInterviewBodySec3}
                      </h3>
                      <div className="rounded-xl border border-intellectual/20 bg-intellectual/5 p-5">
                        <p className="text-[0.9375rem] leading-relaxed text-slate-700">{t.dsaInterviewBodyHabit}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 font-display text-[0.875rem] font-semibold tracking-wide text-slate-700">
                        {t.dsaInterviewBodySec4}
                      </h3>
                      <div className="space-y-2">
                        {bodyLangAvoid.map((item, i) => (
                          <div key={i} className="flex gap-3 rounded-lg border border-champagne/30 bg-champagne-subtle px-4 py-3">
                            <span className="mt-0.5 text-[0.875rem] font-bold text-champagne-dark shrink-0">✕</span>
                            <p className="text-[0.8125rem] leading-relaxed text-slate-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Parent Practice Guide */}
                <section>
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewPracticeHeading}
                  </h2>
                  <p className="mb-6 text-[0.9375rem] text-slate-600">{t.dsaInterviewPracticeLead}</p>
                  <div className="space-y-4">
                    {practiceWeeks.map(({ title, body }) => (
                      <div key={title} className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                        <p className="mb-2 font-display text-[0.875rem] font-semibold text-slate-900">{title}</p>
                        <p className="text-[0.8125rem] leading-relaxed text-slate-500">{body}</p>
                      </div>
                    ))}
                    <div className="rounded-xl border border-intellectual/20 bg-intellectual/5 p-5">
                      <p className="mb-2 font-display text-[0.875rem] font-semibold text-intellectual">{t.dsaInterviewPracticePreTitle}</p>
                      <p className="text-[0.8125rem] leading-relaxed text-slate-600">{t.dsaInterviewPracticePreBody}</p>
                    </div>
                  </div>
                </section>

              </div>
            )}

            {/* ══ TAB: QUESTION BANK ════════════════════════════════════════ */}
            {activeTab === "q-bank" && (
              <div className="space-y-8">
                <div>
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {locale === "zh"
                      ? "DSA 面试题库"
                      : locale === "ms"
                      ? "Bank Soalan Temuduga DSA"
                      : locale === "ta"
                      ? "DSA நேர்காணல் கேள்வி வங்கி"
                      : "DSA Interview Question Bank"}
                  </h2>
                  <p className="mb-6 text-[0.9375rem] text-slate-600">
                    {locale === "zh"
                      ? "这些是DSA面试中真实出现的问题——来自家长论坛、校友反馈和面试辅导经验。点击每道题，查看考官真正想听什么、最佳回答角度和模版示例。"
                      : locale === "ms"
                      ? "Soalan-soalan ini benar-benar muncul dalam temuduga DSA — daripada forum ibu bapa, maklum balas alumni dan pengalaman bimbingan. Klik setiap soalan untuk melihat apa yang penilai benar-benar ingin dengar, sudut jawapan terbaik, dan contoh templat."
                      : locale === "ta"
                      ? "இந்த கேள்விகள் DSA நேர்காணல்களில் உண்மையாக வருகின்றன — பெற்றோர் மன்றங்கள், முன்னோடி மாணவர் கருத்துகள் மற்றும் பயிற்சி அனுபவங்களிலிருந்து. ஒவ்வொரு கேள்வியையும் கிளிக் செய்து மதிப்பீட்டாளர் உண்மையில் என்ன கேட்க விரும்புகிறார், சிறந்த பதில் கோணம் மற்றும் மாதிரி வார்ப்புருக்களை காணுங்கள்."
                      : "These questions genuinely appear in DSA interviews — drawn from parent forums, alumni feedback, and coaching experience. Click each question to see what the interviewer is really looking for, the best answering angle, and template responses."}
                  </p>
                </div>

                {Q_BANK.map((category) => (
                  <div key={category.id}>
                    <h3 className="mb-4 text-[0.7rem] font-bold tracking-widest text-slate-400">
                      {locale === "zh"
                        ? category.label.zh
                        : locale === "ms"
                        ? category.label.ms
                        : locale === "ta"
                        ? category.label.ta
                        : category.label.en}
                    </h3>
                    <div className="space-y-2">
                      {category.questions.map((question) => {
                        const isOpen = expandedQ === question.id;
                        return (
                          <div
                            key={question.id}
                            className="overflow-hidden rounded-xl border border-[#e3ded5] bg-white shadow-card"
                          >
                            <button
                              className="flex w-full items-start justify-between gap-3 px-5 py-4 text-left"
                              onClick={() =>
                                setExpandedQ(isOpen ? null : question.id)
                              }
                              aria-expanded={isOpen}
                            >
                              <p className="font-display text-[0.9375rem] font-semibold leading-snug text-slate-900">
                                {question.q}
                              </p>
                              <ChevronDown
                                className={`mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <div className="space-y-5 border-t border-[#e3ded5] px-5 pb-5 pt-4">
                                {/* What the interviewer is assessing */}
                                <div>
                                  <p className="mb-2 text-[0.7rem] font-bold tracking-widest text-intellectual">
                                    {locale === "zh"
                                      ? "考官真正在考察什么"
                                      : locale === "ms"
                                      ? "Apa yang penilai benar-benar nilai"
                                      : locale === "ta"
                                      ? "மதிப்பீட்டாளர் உண்மையில் என்ன பார்க்கிறார்"
                                      : "What the interviewer is really assessing"}
                                  </p>
                                  <p className="text-[0.875rem] leading-relaxed text-slate-600">
                                    {locale === "zh"
                                      ? question.subtext.zh
                                      : locale === "ms"
                                      ? question.subtext.ms
                                      : locale === "ta"
                                      ? question.subtext.ta
                                      : question.subtext.en}
                                  </p>
                                </div>
                                {/* How to answer well */}
                                <div className="rounded-lg border border-intellectual/15 bg-intellectual/5 px-4 py-4">
                                  <p className="mb-2 text-[0.7rem] font-bold tracking-widest text-intellectual">
                                    {locale === "zh"
                                      ? "最佳回答角度"
                                      : locale === "ms"
                                      ? "Cara terbaik untuk menjawab"
                                      : locale === "ta"
                                      ? "சிறந்த பதில் கோணம்"
                                      : "How to answer this well"}
                                  </p>
                                  <p className="text-[0.875rem] leading-relaxed text-slate-700">
                                    {locale === "zh"
                                      ? question.approach.zh
                                      : locale === "ms"
                                      ? question.approach.ms
                                      : locale === "ta"
                                      ? question.approach.ta
                                      : question.approach.en}
                                  </p>
                                </div>
                                {/* Sample templates */}
                                {question.templates.length > 0 && (
                                  <div>
                                    <p className="mb-3 text-[0.7rem] font-bold tracking-widest text-champagne-dark">
                                      {locale === "zh"
                                        ? "参考答案模版"
                                        : locale === "ms"
                                        ? "Templat jawapan rujukan"
                                        : locale === "ta"
                                        ? "குறிப்பு பதில் வார்ப்புருக்கள்"
                                        : "Sample response templates"}
                                    </p>
                                    <div className="space-y-3">
                                      {question.templates.map((tpl) => (
                                        <div
                                          key={tpl.label}
                                          className="rounded-lg border border-champagne/30 bg-champagne-subtle px-4 py-4"
                                        >
                                          <p className="mb-2 text-[0.7rem] font-bold tracking-widest text-champagne-dark">
                                            {tpl.label}
                                          </p>
                                          <p className="text-[0.8125rem] italic leading-relaxed text-slate-600">
                                            &ldquo;{tpl.text}&rdquo;
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ══ TAB: Q&A PREP ══════════════════════════════════════════════ */}
            {activeTab === "q-prep" && (
              <div className="space-y-12">

                {/* ── HOOK ─────────────────────────────────────────── */}
                <section className="rounded-2xl bg-intellectual px-6 py-8 sm:px-8 sm:py-10">
                  <p className="mb-6 whitespace-pre-line font-display text-[1.0625rem] font-medium leading-relaxed text-white sm:text-[1.1875rem]">
                    {pickLocaleText(Q_PREP_HOOK, locale)}
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2.5 border-t border-white/15 pt-5">
                    {Q_PREP_MINDSET.map((line, i) => (
                      <span
                        key={i}
                        className="text-[0.8125rem] font-semibold text-champagne"
                      >
                        {pickLocaleText(line, locale)}
                        {i < Q_PREP_MINDSET.length - 1 && (
                          <span className="ml-5 text-white/30" aria-hidden>·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </section>

                {/* ── STICKY SUB-NAV ───────────────────────────────── */}
                <nav
                  aria-label={
                    locale === "zh"
                      ? "Q&A Prep 章节导航"
                      : locale === "ms"
                      ? "Navigasi seksyen Q&A Prep"
                      : locale === "ta"
                      ? "Q&A Prep பிரிவு வழிசெலுத்தல்"
                      : "Q&A Prep section navigation"
                  }
                  className="sticky top-2 z-20 -mx-1 overflow-x-auto rounded-xl border border-intellectual/15 bg-white/95 px-2 py-2 shadow-soft backdrop-blur"
                >
                  <ul className="flex gap-1.5 whitespace-nowrap">
                    {Q_PREP_SECTIONS.map((s) => {
                      const Icon = ICON_MAP[s.iconName];
                      return (
                        <li key={s.id} className="flex-shrink-0">
                          <a
                            href={`#qprep-${s.id}`}
                            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[0.8125rem] font-semibold text-intellectual transition hover:bg-intellectual/8"
                          >
                            <Icon size={14} strokeWidth={2} />
                            {pickLocaleText(s.navLabel, locale)}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* ── 4 SECTIONS ───────────────────────────────────── */}
                {Q_PREP_SECTIONS.map((section: QPrepSection) => {
                  const Icon = ICON_MAP[section.iconName];
                  return (
                    <section
                      key={section.id}
                      id={`qprep-${section.id}`}
                      className="scroll-mt-20"
                    >
                      {/* Section header */}
                      <div className="mb-6 flex items-start gap-3 border-b border-intellectual/10 pb-4">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-intellectual/8">
                          <Icon size={20} strokeWidth={1.75} className="text-intellectual" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline gap-2.5">
                            <h2 className="font-display text-[1.25rem] font-semibold text-intellectual sm:text-[1.375rem]">
                              {pickLocaleText(section.heading, locale)}
                            </h2>
                            <span className="rounded-full bg-champagne/25 px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide text-champagne-dark">
                              {pickLocaleText(section.timing, locale)}
                            </span>
                          </div>
                          <p className="mt-1 text-[0.875rem] leading-relaxed text-slate-600">
                            {pickLocaleText(section.intro, locale)}
                          </p>
                        </div>
                      </div>

                      {/* Cards (accordion — all collapsed by default) */}
                      <div className="space-y-3">
                        {section.cards.map((card: QPrepCard) => {
                          const isOpen = expandedQPrep.has(card.num);
                          return (
                            <article
                              key={card.num}
                              className="overflow-hidden rounded-xl border border-[#e3ded5] bg-white shadow-card"
                            >
                              <button
                                type="button"
                                onClick={() => toggleQPrepCard(card.num)}
                                aria-expanded={isOpen}
                                className="flex w-full items-center gap-3 px-5 py-4 text-left transition hover:bg-surface-warm sm:px-6"
                              >
                                <span className="font-display text-[0.875rem] font-bold tracking-wider text-champagne-dark">
                                  {card.num}
                                </span>
                                <h3 className="flex-1 font-display text-[1rem] font-semibold leading-snug text-slate-900 sm:text-[1.0625rem]">
                                  {pickLocaleText(card.title, locale)}
                                </h3>
                                <ChevronDown
                                  size={18}
                                  strokeWidth={2}
                                  className={`shrink-0 text-intellectual/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                />
                              </button>

                              {isOpen && (
                                <div className="border-t border-[#e3ded5] px-5 py-5 sm:px-6 sm:py-6">
                                  <p className="mb-4 text-[0.9375rem] leading-relaxed text-slate-700">
                                    {pickLocaleText(card.body, locale)}
                                  </p>

                                  {card.tryThis && (
                                    <div className="mb-3 rounded-lg border border-champagne/30 bg-champagne-subtle px-4 py-3.5">
                                      <div className="mb-1.5 flex items-center gap-1.5 text-[0.75rem] font-bold tracking-wide text-champagne-dark">
                                        <Lightbulb size={14} strokeWidth={2.25} />
                                        {locale === "zh"
                                          ? "这样做"
                                          : locale === "ms"
                                          ? "Cuba ini"
                                          : locale === "ta"
                                          ? "இதை முயற்சிக்கவும்"
                                          : "Try this"}
                                      </div>
                                      <p className="whitespace-pre-line text-[0.9375rem] leading-relaxed text-slate-700">
                                        {pickLocaleText(card.tryThis, locale)}
                                      </p>
                                    </div>
                                  )}

                                  {card.avoid && (
                                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5">
                                      <div className="mb-1.5 flex items-center gap-1.5 text-[0.75rem] font-bold tracking-wide text-slate-500">
                                        <X size={14} strokeWidth={2.25} />
                                        {locale === "zh"
                                          ? "不要这样"
                                          : locale === "ms"
                                          ? "Jangan begini"
                                          : locale === "ta"
                                          ? "இப்படி வேண்டாம்"
                                          : "Avoid"}
                                      </div>
                                      <p className="whitespace-pre-line text-[0.9375rem] leading-relaxed text-slate-600">
                                        {pickLocaleText(card.avoid, locale)}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              )}
                            </article>
                          );
                        })}
                      </div>

                      {/* Section closer */}
                      <p className="mt-5 rounded-lg border-l-4 border-intellectual bg-intellectual/5 px-4 py-3 font-display text-[0.9375rem] font-semibold leading-relaxed text-intellectual">
                        {pickLocaleText(section.closer, locale)}
                      </p>
                    </section>
                  );
                })}

                {/* Pointer to Question Bank tab */}
                <div className="rounded-xl border border-intellectual/15 bg-intellectual/5 px-5 py-4">
                  <p className="text-[0.875rem] leading-relaxed text-slate-600">
                    {locale === "zh" ? (
                      <>
                        想看具体的题目和参考答案模版？切换到
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab("q-bank");
                            if (typeof window !== "undefined") {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }}
                          className="mx-1 font-semibold text-intellectual underline decoration-champagne decoration-2 underline-offset-2 hover:text-champagne-dark"
                        >
                          「面试题库」
                        </button>
                        标签页，33 题深度解析。
                      </>
                    ) : locale === "ms" ? (
                      <>
                        Untuk soalan khusus dan templat jawapan rujukan — lihat
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab("q-bank");
                            if (typeof window !== "undefined") {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }}
                          className="mx-1 font-semibold text-intellectual underline decoration-champagne decoration-2 underline-offset-2 hover:text-champagne-dark"
                        >
                          tab Bank Soalan
                        </button>
                        , 33 soalan dengan analisis mendalam.
                      </>
                    ) : locale === "ta" ? (
                      <>
                        குறிப்பிட்ட கேள்விகள் மற்றும் மாதிரி பதில்களுக்கு —
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab("q-bank");
                            if (typeof window !== "undefined") {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }}
                          className="mx-1 font-semibold text-intellectual underline decoration-champagne decoration-2 underline-offset-2 hover:text-champagne-dark"
                        >
                          கேள்வி வங்கி tab
                        </button>
                        -க்கு செல்லுங்கள், 33 கேள்விகள் ஆழமான பகுப்பாய்வுடன்.
                      </>
                    ) : (
                      <>
                        For specific questions and template answers — see the
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab("q-bank");
                            if (typeof window !== "undefined") {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }}
                          className="mx-1 font-semibold text-intellectual underline decoration-champagne decoration-2 underline-offset-2 hover:text-champagne-dark"
                        >
                          Question Bank tab
                        </button>
                        , with deep-dive analysis for 33 questions.
                      </>
                    )}
                  </p>
                </div>

              </div>
            )}

            {/* ══ TAB: AREA GUIDES ═══════════════════════════════════════════ */}
            {activeTab === "area-guides" && (
              <div>
                <div className="mb-6">
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {locale === "zh"
                      ? "各领域 DSA 面试指南"
                      : locale === "ms"
                      ? "Panduan Temuduga DSA Mengikut Bidang"
                      : locale === "ta"
                      ? "பகுதிவாரி DSA நேர்காணல் வழிகாட்டி"
                      : "DSA Interview Guide by Area"}
                  </h2>
                  <p className="text-[0.9375rem] text-slate-600">
                    {locale === "zh"
                      ? "每个DSA领域的评审重点、常见问题与备考策略各有不同。选择你孩子的申请领域，获取针对性的准备建议。"
                      : locale === "ms"
                      ? "Setiap bidang DSA mempunyai fokus penilaian, soalan biasa, dan strategi persediaan yang berbeza. Pilih bidang permohonan anak anda untuk mendapatkan panduan yang lebih khusus."
                      : locale === "ta"
                      ? "ஒவ்வொரு DSA பகுதியிலும் மதிப்பீட்டு கவனம், பொதுவான கேள்விகள் மற்றும் தயாரிப்பு உத்திகள் வேறுபடுகின்றன. உங்கள் குழந்தையின் விண்ணப்ப பகுதியை தேர்ந்தெடுத்து குறிப்பிட்ட வழிகாட்டலைப் பெறுங்கள்."
                      : "Each DSA area has different assessment focuses, common questions, and preparation strategies. Select your child's application area for targeted guidance."}
                  </p>
                </div>

                <div className="space-y-5">
                  {areaGuides.map((area) => (
                    <div
                      key={area.id}
                      className="rounded-xl border border-[#e3ded5] bg-white p-6 shadow-card"
                    >
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{area.icon}</span>
                          <h3 className="font-display text-[1rem] font-semibold text-slate-900">
                            {area.title}
                          </h3>
                        </div>
                        <span className="shrink-0 rounded-full bg-champagne/30 px-2.5 py-0.5 text-[0.7rem] font-bold tracking-wide text-champagne-dark">
                          {t.dsaInterviewOfferComingSoon}
                        </span>
                      </div>
                      <p className="mb-3 text-[0.75rem] font-bold tracking-wide text-slate-400">
                        {locale === "zh"
                          ? "即将涵盖"
                          : locale === "ms"
                          ? "AKan datang"
                          : locale === "ta"
                          ? "விரைவில் வரவிருக்கும்"
                          : "What will be covered"}
                      </p>
                      <ul className="space-y-2">
                        {area.preview.map((point, i) => (
                          <li key={i} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-slate-600">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-intellectual/40" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="mt-6 rounded-lg border border-intellectual/15 bg-intellectual/5 px-4 py-3 text-[0.8125rem] leading-relaxed text-slate-600">
                  {locale === "zh"
                    ? "各领域详细指南将于2026年6月DSA申请窗口期间陆续上线。欢迎订阅更新通知。"
                    : locale === "ms"
                    ? "Panduan terperinci mengikut bidang akan diterbitkan secara berperingkat semasa tempoh permohonan DSA Jun 2026. Langgan untuk mendapat pemberitahuan."
                    : locale === "ta"
                    ? "பகுதிவாரி விரிவான வழிகாட்டிகள் 2026 ஜூன் DSA விண்ணப்ப காலகட்டத்தில் படிப்படியாக வெளியிடப்படும். புதுப்பிப்புகளுக்கு சந்தா செய்யுங்கள்."
                    : "Detailed area guides will be published progressively during the June 2026 DSA application window. Subscribe for updates."}
                </p>
              </div>
            )}

            {/* ══ TAB: DAY-OF ════════════════════════════════════════════════ */}
            {activeTab === "day-of" && (
              <div className="space-y-10">

                {/* Common Mistakes */}
                <section>
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewMistakesHeading}
                  </h2>
                  <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewMistakesLead}</p>
                  <div className="space-y-3">
                    {mistakeItems.map(({ title, body }, i) => (
                      <div key={title} className="flex gap-4 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-champagne/50 bg-champagne-subtle text-[0.75rem] font-bold text-intellectual">
                          {i + 1}
                        </div>
                        <div>
                          <p className="mb-1 font-display text-[0.875rem] font-semibold text-slate-900">{title}</p>
                          <p className="text-[0.8125rem] leading-relaxed text-slate-500">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Day-Of Checklist */}
                <section>
                  <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewDayOfHeading}
                  </h2>
                  <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewDayOfLead}</p>
                  <div className="space-y-5">
                    {dayOfSections.map(({ heading, items }) => (
                      <div key={heading} className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                        <h3 className="mb-3 font-display text-[0.9375rem] font-semibold text-slate-900">
                          {heading}
                        </h3>
                        <ol className="space-y-2.5">
                          {items.map((item, i) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-intellectual/25 bg-intellectual/5 text-[0.6875rem] font-bold text-intellectual">
                                {i + 1}
                              </span>
                              <p className="text-[0.8125rem] leading-relaxed text-slate-600">{item}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Offer Guide */}
                <section>
                  <div className="rounded-xl border border-champagne/40 bg-champagne-subtle p-6">
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                      <span className="w-fit rounded-full bg-champagne/30 px-3 py-1 text-[0.7rem] font-bold tracking-wide text-champagne-dark">
                        {t.dsaInterviewOfferComingSoon}
                      </span>
                      <h2 className="font-display text-[1.125rem] font-semibold text-slate-900">
                        {t.dsaInterviewOfferHeading}
                      </h2>
                    </div>
                    <p className="text-[0.9375rem] leading-relaxed text-slate-600">
                      {t.dsaInterviewOfferLead}
                    </p>
                    <p className="mt-3 text-[0.8125rem] leading-relaxed text-slate-500">
                      {t.dsaInterviewOfferComingSoonBody}
                    </p>
                  </div>
                </section>

              </div>
            )}

            {/* ── Related links (always visible) ── */}
            <div className="mt-10 rounded-xl border border-champagne/30 bg-champagne-subtle p-6">
              <h2 className="mb-1 font-display text-base font-semibold text-slate-900">
                {t.dsaInterviewRelatedHeading}
              </h2>
              <p className="mb-4 text-[0.875rem] text-slate-600">{t.dsaInterviewRelatedLead}</p>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-lg border border-intellectual/20 bg-white px-4 py-2 text-[0.8125rem] font-semibold text-intellectual transition hover:border-intellectual/40 hover:bg-intellectual hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
