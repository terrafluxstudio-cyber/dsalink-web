import type { Locale } from "@/lib/i18n";
import { SCHOOL_COP_HISTORY_DATA } from "@/lib/school-cop-history-data";
import { SCHOOL_OPEN_HOUSES } from "@/lib/school-open-houses";

export const UI_TRANSLATIONS: Record<
  Locale,
  {
    schools: string;
    talentEntries: string;
    categories: string;
    dsaDataNotePrefix: string;
    dsaDataNotePortal: string;
    dsaDataNoteSuffix: string;
    scoresFaqTitle: string;
    scoresFaqOfficialQuestion: string;
    scoresFaqOfficialAnswerPrefix: string;
    scoresFaqOfficialLink: string;
    scoresFaqOfficialAnswerSuffix: string;
    scoresFaqTrendQuestion: string;
    scoresFaqTrendAnswer: string;
    faqShow: string;
    faqHide: string;
  }
> = {
  en: {
    schools: "Schools",
    talentEntries: "Talent entries",
    categories: "Categories",
    dsaDataNotePrefix:
      "Note: Data synced with official MOE sources as of May 2026. While we strive for 100% accuracy, please always cross-reference with the",
    dsaDataNotePortal: "MOE DSA Portal",
    dsaDataNoteSuffix: "for final application details.",
    scoresFaqTitle: "Frequently asked questions",
    scoresFaqOfficialQuestion: "Where can I find the official MOE PSLE COP?",
    scoresFaqOfficialAnswerPrefix: "You can verify all data at the",
    scoresFaqOfficialLink: "official MOE SchoolFinder website",
    scoresFaqOfficialAnswerSuffix: ".",
    scoresFaqTrendQuestion: "What are the trends for 2026 PSLE scores?",
    scoresFaqTrendAnswer:
      "Our data provides 3-year historical trends to help parents estimate 2026 posting ranges.",
    faqShow: "Show",
    faqHide: "Hide",
  },
  zh: {
    schools: "学校",
    talentEntries: "DSA 项目",
    categories: "大类",
    dsaDataNotePrefix:
      "注：数据已于 2026 年 5 月同步自 MOE 官方来源。我们会尽力确保准确，但最终申请详情请务必以",
    dsaDataNotePortal: "MOE DSA 官方入口",
    dsaDataNoteSuffix: "为准。",
    scoresFaqTitle: "常见问题",
    scoresFaqOfficialQuestion: "哪里可以查看 MOE 官方 PSLE COP？",
    scoresFaqOfficialAnswerPrefix: "你可以到",
    scoresFaqOfficialLink: "MOE 官方 SchoolFinder 网站",
    scoresFaqOfficialAnswerSuffix: "核对所有数据。",
    scoresFaqTrendQuestion: "2026 年 PSLE 分数趋势怎么看？",
    scoresFaqTrendAnswer:
      "本站提供 3 年历史趋势，帮助家长预估 2026 年中学录取分数区间。",
    faqShow: "展开",
    faqHide: "收起",
  },
  ms: {
    schools: "Sekolah",
    talentEntries: "Entri bakat",
    categories: "Kategori",
    dsaDataNotePrefix:
      "Nota: Data diselaraskan dengan sumber rasmi MOE setakat Mei 2026. Walaupun kami berusaha memastikan ketepatan 100%, sila sentiasa semak silang dengan",
    dsaDataNotePortal: "Portal DSA MOE",
    dsaDataNoteSuffix: "untuk butiran permohonan muktamad.",
    scoresFaqTitle: "Soalan lazim",
    scoresFaqOfficialQuestion: "Di mana saya boleh mencari COP PSLE rasmi MOE?",
    scoresFaqOfficialAnswerPrefix: "Anda boleh mengesahkan semua data di",
    scoresFaqOfficialLink: "laman web rasmi MOE SchoolFinder",
    scoresFaqOfficialAnswerSuffix: ".",
    scoresFaqTrendQuestion: "Apakah trend skor PSLE 2026?",
    scoresFaqTrendAnswer:
      "Data kami menyediakan trend sejarah 3 tahun untuk membantu ibu bapa menganggarkan julat kemasukan 2026.",
    faqShow: "Tunjuk",
    faqHide: "Sembunyi",
  },
  ta: {
    schools: "பள்ளிகள்",
    talentEntries: "திறன் பதிவுகள்",
    categories: "வகைகள்",
    dsaDataNotePrefix:
      "குறிப்பு: தரவு மே 2026 நிலவரப்படி அதிகாரப்பூர்வ MOE ஆதாரங்களுடன் ஒத்திசைக்கப்பட்டது. 100% துல்லியத்திற்காக முயற்சித்தாலும், இறுதி விண்ணப்ப விவரங்களுக்கு எப்போதும்",
    dsaDataNotePortal: "MOE DSA தளம்",
    dsaDataNoteSuffix: "உடன் சரிபார்க்கவும்.",
    scoresFaqTitle: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    scoresFaqOfficialQuestion: "அதிகாரப்பூர்வ MOE PSLE COP எங்கே கிடைக்கும்?",
    scoresFaqOfficialAnswerPrefix: "எல்லா தரவையும் நீங்கள்",
    scoresFaqOfficialLink: "அதிகாரப்பூர்வ MOE SchoolFinder இணையதளத்தில்",
    scoresFaqOfficialAnswerSuffix: "சரிபார்க்கலாம்.",
    scoresFaqTrendQuestion: "2026 PSLE மதிப்பெண் போக்குகள் என்ன?",
    scoresFaqTrendAnswer:
      "2026 சேர்க்கை வரம்புகளை பெற்றோர் மதிப்பிட உதவும் 3 ஆண்டு வரலாற்றுப் போக்குகளை எங்கள் தரவு வழங்குகிறது.",
    faqShow: "காட்டு",
    faqHide: "மறை",
  },
};

function normalizeSchoolName(name: string): string {
  return name
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\bst\.\./g, "st.")
    .replace(/\(secondary\)/g, "")
    .replace(/secondary school/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

const SCHOOL_ZH_BY_NAME = new Map<string, string>();

for (const row of SCHOOL_COP_HISTORY_DATA) {
  SCHOOL_ZH_BY_NAME.set(normalizeSchoolName(row.nameEn), row.nameCn);
}

for (const row of SCHOOL_OPEN_HOUSES) {
  SCHOOL_ZH_BY_NAME.set(normalizeSchoolName(row.nameEn), row.nameZh);
}

export function formatSchoolDisplayName({
  locale,
  nameEn,
  nameZh,
}: {
  locale: Locale;
  nameEn: string;
  nameZh?: string | null;
}): string {
  if (locale !== "zh") return nameEn;
  const zh = nameZh ?? SCHOOL_ZH_BY_NAME.get(normalizeSchoolName(nameEn));
  return zh ? `${zh} (${nameEn})` : nameEn;
}

export function getSchoolDisplayNameParts({
  locale,
  nameEn,
  nameZh,
}: {
  locale: Locale;
  nameEn: string;
  nameZh?: string | null;
}): { primary: string; secondary: string | null } {
  if (locale !== "zh") return { primary: nameEn, secondary: null };
  const zh = nameZh ?? SCHOOL_ZH_BY_NAME.get(normalizeSchoolName(nameEn));
  return zh ? { primary: zh, secondary: nameEn } : { primary: nameEn, secondary: null };
}
