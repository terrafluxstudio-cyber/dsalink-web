"use client";

import {
  BookOpen,
  CalendarClock,
  ClipboardList,
  Compass,
  MessageSquareText,
  School,
  Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { RelatedCardsRow } from "@/components/RelatedCardsRow";
import type { LucideIcon } from "lucide-react";

type LocaleStr4 = { en: string; zh: string; ms: string; ta: string };
type Card = { icon: LucideIcon; title: LocaleStr4; body: LocaleStr4; href: string };
type PageConfig = {
  kicker: LocaleStr4;
  heading: LocaleStr4;
  items: [Card, Card, Card];
};

const KICKER: LocaleStr4 = {
  en: "Related reference",
  zh: "相关参考",
  ms: "Rujukan berkaitan",
  ta: "தொடர்புடைய குறிப்பு",
};

const TIMELINE_CARD: Card = {
  icon: CalendarClock,
  title: { en: "2026 timeline", zh: "2026 时间线", ms: "Garis masa 2026", ta: "2026 கால அட்டவணை" },
  body: {
    en: "Month-by-month: application window, trial dates, results day.",
    zh: "逐月：申请窗口、trial 日期、放榜日。",
    ms: "Bulan demi bulan: tetingkap, trial, hari keputusan.",
    ta: "மாதம் வாரியாக: விண்ணப்பம், சோதனை, முடிவு.",
  },
  href: "/timeline",
};

const TALENTS_CARD: Card = {
  icon: Compass,
  title: { en: "8 talent paths", zh: "8 个才艺方向", ms: "8 laluan bakat", ta: "8 திறமைப் பாதைகள்" },
  body: {
    en: "Each trial's format, what coaches assess, school clusters per talent.",
    zh: "每个 trial 格式 · 教练评分维度 · 各才艺对应学校簇。",
    ms: "Format setiap trial, apa jurulatih nilai.",
    ta: "ஒவ்வொரு சோதனை, பயிற்சியாளர் என்ன மதிப்பிடுகிறார்.",
  },
  href: "/dsa-interview/talents",
};

const WHATISDSA_CARD: Card = {
  icon: BookOpen,
  title: { en: "What DSA actually is", zh: "DSA 到底是什么", ms: "Apakah DSA sebenarnya", ta: "DSA உண்மையில் என்ன" },
  body: {
    en: "Mechanism, eligibility, what DSA isn't — and how DSA × PSLE interact.",
    zh: "机制、资格、DSA 不是什么 · DSA × PSLE 如何互动。",
    ms: "Mekanisme, kelayakan, DSA × PSLE.",
    ta: "முறை, தகுதி, DSA × PSLE.",
  },
  href: "/what-is-dsa",
};

const STORIES_CARD: Card = {
  icon: Users,
  title: { en: "Six family pathways", zh: "六条家庭路径", ms: "Enam laluan keluarga", ta: "ஆறு குடும்ப பாதைகள்" },
  body: {
    en: "Composite scenarios — what each decision looked like at the time.",
    zh: "综合场景 · 各家决策当下的样子。",
    ms: "Senario komposit — bagaimana setiap keputusan kelihatan.",
    ta: "ஒவ்வொரு முடிவு எப்படி இருந்தது.",
  },
  href: "/dsa-experience",
};

const SCHOOLS_CARD: Card = {
  icon: School,
  title: { en: "147 schools", zh: "147 所学校", ms: "147 sekolah", ta: "147 பள்ளிகள்" },
  body: {
    en: "Full directory: PSLE COP, DSA availability, talent areas per school.",
    zh: "完整目录：PSLE COP · DSA 名额 · 各校才艺方向。",
    ms: "Direktori penuh: PSLE COP, ketersediaan DSA.",
    ta: "PSLE COP, DSA உள்ள முழு பட்டியல்.",
  },
  href: "/dsa-finder",
};

const OHG_CARD: Card = {
  icon: ClipboardList,
  title: { en: "Open House Guide", zh: "开放日策略指南", ms: "Panduan Hari Terbuka", ta: "திறந்த நாள் வழிகாட்டி" },
  body: {
    en: "What to ask, what to ignore, how to budget your open-house weekends.",
    zh: "看什么、忽略什么、怎么安排周末。",
    ms: "Apa nak tanya, apa nak abaikan.",
    ta: "என்ன கேட்க வேண்டும், என்ன புறக்கணிக்க வேண்டும்.",
  },
  href: "/open-house-guide",
};

const FAQ_CARD: Card = {
  icon: MessageSquareText,
  title: { en: "12 parent FAQs", zh: "12 个家长常见问题", ms: "12 FAQ ibu bapa", ta: "12 பெற்றோர் கேள்விகள்" },
  body: {
    en: "Specific answers to the questions families ask after the open house.",
    zh: "看完开放日后家长真问的问题。",
    ms: "Jawapan kepada soalan ibu bapa selepas open house.",
    ta: "திறந்த நாளுக்குப் பின் பெற்றோர் கேட்கும் கேள்விகள்.",
  },
  href: "/faq",
};

const CONFIGS: Record<
  "schools" | "faq" | "scores" | "open-house-takeaways",
  PageConfig
> = {
  schools: {
    kicker: KICKER,
    heading: {
      en: "Three references parents pair with the school directory",
      zh: "家长常与学校目录一起看的三个参考",
      ms: "Tiga rujukan dengan direktori sekolah",
      ta: "பள்ளி அட்டவணையுடன் மூன்று குறிப்புகள்",
    },
    items: [WHATISDSA_CARD, TALENTS_CARD, TIMELINE_CARD],
  },
  faq: {
    kicker: KICKER,
    heading: {
      en: "After the FAQs — three deeper references parents open next",
      zh: "看完 FAQ 后家长常继续看的三个参考",
      ms: "Selepas FAQ — tiga rujukan lanjut",
      ta: "FAQ-க்குப் பின் மூன்று குறிப்புகள்",
    },
    items: [WHATISDSA_CARD, TIMELINE_CARD, STORIES_CARD],
  },
  scores: {
    kicker: KICKER,
    heading: {
      en: "Three references parents pair with PSLE COP data",
      zh: "家长常与 PSLE COP 一起看的三个参考",
      ms: "Tiga rujukan dengan data PSLE COP",
      ta: "PSLE COP-உடன் மூன்று குறிப்புகள்",
    },
    items: [SCHOOLS_CARD, WHATISDSA_CARD, TIMELINE_CARD],
  },
  "open-house-takeaways": {
    kicker: KICKER,
    heading: {
      en: "After the open-house notes — three references parents bookmark",
      zh: "看完开放日笔记后家长常打开的三个参考",
      ms: "Selepas catatan open-house — tiga rujukan",
      ta: "திறந்த நாள் குறிப்புகளுக்குப் பின் மூன்று குறிப்புகள்",
    },
    items: [OHG_CARD, SCHOOLS_CARD, FAQ_CARD],
  },
};

/**
 * Drop-in related-cards row for static pages (schools / faq / scores /
 * open-house-takeaways) whose page.tsx is server but whose body is client.
 * Renders one of the pre-defined per-page configurations.
 */
export function StaticPageRelatedCards({
  page,
}: {
  page: keyof typeof CONFIGS;
}) {
  const { locale } = useLanguage();
  const c = CONFIGS[page];
  return (
    <RelatedCardsRow
      kicker={c.kicker[locale]}
      heading={c.heading[locale]}
      items={c.items.map((item) => ({
        icon: item.icon,
        title: item.title[locale],
        body: item.body[locale],
        href: item.href,
      }))}
    />
  );
}
