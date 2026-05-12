import type { Locale } from "@/lib/i18n";

export type DsaCategory = "Sports" | "Arts" | "STEM" | "Leadership" | "Languages";
export type DsaTranslation = Partial<Record<Locale, string>> & { en: string };

export const DSA_CATEGORY_TRANSLATIONS: Record<DsaCategory, DsaTranslation> = {
  Sports: {
    en: "Sports",
    zh: "体育",
  },
  Arts: {
    en: "Arts",
    zh: "艺术",
  },
  STEM: {
    en: "STEM",
    zh: "STEM科创",
  },
  Leadership: {
    en: "Leadership",
    zh: "领导力",
  },
  Languages: {
    en: "Languages",
    zh: "语言",
  },
};

export const DSA_TALENT_TRANSLATIONS: Record<string, DsaTranslation> = {
  Badminton: {
    en: "Badminton",
    zh: "羽毛球",
  },
  Basketball: {
    en: "Basketball",
    zh: "篮球",
  },
  "Table Tennis": {
    en: "Table Tennis",
    zh: "乒乓球",
  },
  Football: {
    en: "Football",
    zh: "足球",
  },
  Tennis: {
    en: "Tennis",
    zh: "网球",
  },
  Volleyball: {
    en: "Volleyball",
    zh: "排球",
  },
  Netball: {
    en: "Netball",
    zh: "无板篮球",
  },
  "Concert Band": {
    en: "Concert Band",
    zh: "管乐团",
  },
  "String Ensemble": {
    en: "String Ensemble",
    zh: "弦乐团",
  },
  Choir: {
    en: "Choir",
    zh: "合唱团",
  },
  "Chinese Orchestra": {
    en: "Chinese Orchestra",
    zh: "华乐团",
  },
  "Modern Dance": {
    en: "Modern Dance",
    zh: "现代舞",
  },
  "Chinese Dance": {
    en: "Chinese Dance",
    zh: "中国舞",
  },
  "Chinese Drama": {
    en: "Chinese Drama",
    zh: "华文戏剧",
  },
  Wushu: {
    en: "Wushu",
    zh: "武术",
  },
  Fencing: {
    en: "Fencing",
    zh: "击剑",
  },
  Shooting: {
    en: "Shooting",
    zh: "射击",
  },
  "Track and Field": {
    en: "Track and Field",
    zh: "田径",
  },
  Robotics: {
    en: "Robotics",
    zh: "机器人",
  },
};

export function getDsaCategoryLabel(category: DsaCategory, locale: Locale): string {
  return DSA_CATEGORY_TRANSLATIONS[category]?.[locale] ?? category;
}

export function getDsaTalentLabel(area: string, locale: Locale): string {
  return locale === "zh" ? DSA_TALENT_TRANSLATIONS[area]?.zh ?? area : area;
}

export function getDsaCategorySearchTerms(category: DsaCategory): string[] {
  const translation = DSA_CATEGORY_TRANSLATIONS[category];
  return [category, ...Object.values(translation)];
}

export function getDsaTalentSearchTerms(area: string): string[] {
  const translation = DSA_TALENT_TRANSLATIONS[area];
  return translation ? [area, ...Object.values(translation)] : [area];
}
