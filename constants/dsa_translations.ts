import type { Locale } from "@/lib/i18n";

export type DsaCategory = "Sports" | "Arts" | "STEM" | "Leadership" | "Languages";
export type DsaTranslation = Record<Locale, string>;

export const DSA_CATEGORY_TRANSLATIONS: Record<DsaCategory, DsaTranslation> = {
  Sports: {
    en: "Sports",
    zh: "体育",
    ms: "Sukan",
    ta: "விளையாட்டு",
  },
  Arts: {
    en: "Arts",
    zh: "艺术",
    ms: "Seni",
    ta: "கலை",
  },
  STEM: {
    en: "STEM",
    zh: "STEM 科创",
    ms: "STEM",
    ta: "STEM",
  },
  Leadership: {
    en: "Leadership",
    zh: "领导力",
    ms: "Kepimpinan",
    ta: "தலைமைத்துவம்",
  },
  Languages: {
    en: "Languages",
    zh: "语言",
    ms: "Bahasa",
    ta: "மொழிகள்",
  },
};

export const DSA_TALENT_TRANSLATIONS: Record<string, DsaTranslation> = {
  "Concert Band": {
    en: "Concert Band",
    zh: "管乐团",
    ms: "Pancaragam Konsert",
    ta: "கச்சேரி இசைக்குழு",
  },
  Basketball: {
    en: "Basketball",
    zh: "篮球",
    ms: "Bola keranjang",
    ta: "கூடைப்பந்து",
  },
  Badminton: {
    en: "Badminton",
    zh: "羽毛球",
    ms: "Badminton",
    ta: "பேட்மிண்டன்",
  },
  Choir: {
    en: "Choir",
    zh: "合唱团",
    ms: "Koir",
    ta: "பாடகர் குழு",
  },
  "Modern Dance": {
    en: "Modern Dance",
    zh: "现代舞",
    ms: "Tarian moden",
    ta: "நவீன நடனம்",
  },
  Netball: {
    en: "Netball",
    zh: "无板篮球",
    ms: "Bola jaring",
    ta: "நெட்பால்",
  },
  Leadership: {
    en: "Leadership",
    zh: "领导力",
    ms: "Kepimpinan",
    ta: "தலைமைத்துவம்",
  },
  Volleyball: {
    en: "Volleyball",
    zh: "排球",
    ms: "Bola tampar",
    ta: "கைப்பந்து",
  },
  "English Drama": {
    en: "English Drama",
    zh: "英文戏剧",
    ms: "Drama Inggeris",
    ta: "ஆங்கில நாடகம்",
  },
  Football: {
    en: "Football",
    zh: "足球",
    ms: "Bola sepak",
    ta: "கால்பந்து",
  },
  Floorball: {
    en: "Floorball",
    zh: "地板球",
    ms: "Floorball",
    ta: "ஃப்ளோர்பால்",
  },
  "Table Tennis": {
    en: "Table Tennis",
    zh: "乒乓球",
    ms: "Pingpong",
    ta: "மேசைப்பந்து",
  },
  "Chinese Orchestra": {
    en: "Chinese Orchestra",
    zh: "华乐团",
    ms: "Orkestra Cina",
    ta: "சீன இசைக்குழு",
  },
  "Community Youth Leadership": {
    en: "Community Youth Leadership",
    zh: "社区青年领导力",
    ms: "Kepimpinan belia komuniti",
    ta: "சமூக இளைஞர் தலைமைத்துவம்",
  },
  "Track and Field": {
    en: "Track and Field",
    zh: "田径",
    ms: "Olahraga",
    ta: "தடகளம்",
  },
  Softball: {
    en: "Softball",
    zh: "垒球",
    ms: "Sofbol",
    ta: "மென்பந்து",
  },
  Wushu: {
    en: "Wushu",
    zh: "武术",
    ms: "Wushu",
    ta: "வூஷூ",
  },
  "Chinese Dance": {
    en: "Chinese Dance",
    zh: "中国舞",
    ms: "Tarian Cina",
    ta: "சீன நடனம்",
  },
  Stem: {
    en: "STEM",
    zh: "STEM 科创",
    ms: "STEM",
    ta: "STEM",
  },
  Robotics: {
    en: "Robotics",
    zh: "机器人",
    ms: "Robotik",
    ta: "ரோபோட்டிக்ஸ்",
  },
  "Guzheng Ensemble": {
    en: "Guzheng Ensemble",
    zh: "古筝团",
    ms: "Ensembel Guzheng",
    ta: "குசெங் குழு",
  },
  "Malay Dance": {
    en: "Malay Dance",
    zh: "马来舞",
    ms: "Tarian Melayu",
    ta: "மலாய் நடனம்",
  },
  "Visual Arts": {
    en: "Visual Arts",
    zh: "视觉艺术",
    ms: "Seni visual",
    ta: "காட்சி கலை",
  },
  Hockey: {
    en: "Hockey",
    zh: "曲棍球",
    ms: "Hoki",
    ta: "ஹாக்கி",
  },
  Shooting: {
    en: "Shooting",
    zh: "射击",
    ms: "Menembak",
    ta: "துப்பாக்கிச் சுடுதல்",
  },
  Bowling: {
    en: "Bowling",
    zh: "保龄球",
    ms: "Boling",
    ta: "பந்துவீச்சு",
  },
  "Cross Country": {
    en: "Cross Country",
    zh: "越野跑",
    ms: "Larian merentas desa",
    ta: "குறுக்கு நாடு ஓட்டம்",
  },
  Rugby: {
    en: "Rugby",
    zh: "橄榄球",
    ms: "Ragbi",
    ta: "ரக்பி",
  },
  Tennis: {
    en: "Tennis",
    zh: "网球",
    ms: "Tenis",
    ta: "டென்னிஸ்",
  },
  "Chinese Language": {
    en: "Chinese Language",
    zh: "华文",
    ms: "Bahasa Cina",
    ta: "சீன மொழி",
  },
  "Music Elective Programme": {
    en: "Music Elective Programme",
    zh: "音乐特选课程",
    ms: "Program Elektif Muzik",
    ta: "இசைத் தேர்வு திட்டம்",
  },
  "National Police Cadet Corps (NPCC)": {
    en: "National Police Cadet Corps (NPCC)",
    zh: "全国警察少年团（NPCC）",
    ms: "Kor Kadet Polis Kebangsaan (NPCC)",
    ta: "தேசிய காவல் கேடட் படை (NPCC)",
  },
  "String Ensemble": {
    en: "String Ensemble",
    zh: "弦乐团",
    ms: "Ensembel tali",
    ta: "ஸ்டிரிங் இசைக்குழு",
  },
  Bilingualism: {
    en: "Bilingualism",
    zh: "双语能力",
    ms: "Dwibahasa",
    ta: "இருமொழித்திறன்",
  },
  "Indian Dance": {
    en: "Indian Dance",
    zh: "印度舞",
    ms: "Tarian India",
    ta: "இந்திய நடனம்",
  },
  "Malay Language": {
    en: "Malay Language",
    zh: "马来文",
    ms: "Bahasa Melayu",
    ta: "மலாய் மொழி",
  },
  Mathematics: {
    en: "Mathematics",
    zh: "数学",
    ms: "Matematik",
    ta: "கணிதம்",
  },
  Science: {
    en: "Science",
    zh: "科学",
    ms: "Sains",
    ta: "அறிவியல்",
  },
  Swimming: {
    en: "Swimming",
    zh: "游泳",
    ms: "Renang",
    ta: "நீச்சல்",
  },
  Taekwondo: {
    en: "Taekwondo",
    zh: "跆拳道",
    ms: "Taekwondo",
    ta: "டைக்குவாண்டோ",
  },
  Canoeing: {
    en: "Canoeing",
    zh: "皮划艇",
    ms: "Berkanu",
    ta: "கனோயிங்",
  },
  "Environmental Science": {
    en: "Environmental Science",
    zh: "环境科学",
    ms: "Sains alam sekitar",
    ta: "சுற்றுச்சூழல் அறிவியல்",
  },
  "Guitar Ensemble": {
    en: "Guitar Ensemble",
    zh: "吉他团",
    ms: "Ensembel gitar",
    ta: "கித்தார் குழு",
  },
  Scouts: {
    en: "Scouts",
    zh: "童军",
    ms: "Pengakap",
    ta: "சாரணர்",
  },
  Tchoukball: {
    en: "Tchoukball",
    zh: "巧固球",
    ms: "Tchoukball",
    ta: "சூக்க்பால்",
  },
  "Chinese and Modern Dance": {
    en: "Chinese and Modern Dance",
    zh: "中国舞与现代舞",
    ms: "Tarian Cina dan moden",
    ta: "சீன மற்றும் நவீன நடனம்",
  },
  Debating: {
    en: "Debating",
    zh: "辩论",
    ms: "Perbahasan",
    ta: "விவாதம்",
  },
  Squash: {
    en: "Squash",
    zh: "壁球",
    ms: "Skuasy",
    ta: "ஸ்குவாஷ்",
  },
  "Water Polo": {
    en: "Water Polo",
    zh: "水球",
    ms: "Polo air",
    ta: "நீர்ப்பந்து",
  },
  "Boys' Brigade": {
    en: "Boys' Brigade",
    zh: "少年旅",
    ms: "Briged Putera",
    ta: "பாய்ஸ் பிரிகேட்",
  },
};

export function getDsaCategoryLabel(category: DsaCategory, locale: Locale): string {
  return DSA_CATEGORY_TRANSLATIONS[category]?.[locale] ?? category;
}

export function getDsaTalentLabel(area: string, locale: Locale): string {
  return DSA_TALENT_TRANSLATIONS[area]?.[locale] ?? area;
}

export function getDsaCategorySearchTerms(category: DsaCategory): string[] {
  const translation = DSA_CATEGORY_TRANSLATIONS[category];
  return [category, ...Object.values(translation)];
}

export function getDsaTalentSearchTerms(area: string): string[] {
  const translation = DSA_TALENT_TRANSLATIONS[area];
  return translation ? [area, ...Object.values(translation)] : [area];
}
