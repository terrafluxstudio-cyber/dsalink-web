"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Compass,
  GraduationCap,
  School,
  UserCog,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

type NavCard = {
  id: string;
  href: string;
  icon: typeof Compass;
  title: LocaleStr;
  blurb: LocaleStr;
  subLinks: { href: string; label: LocaleStr }[];
  cta: LocaleStr;
};

const CARDS: NavCard[] = [
  {
    id: "basics",
    href: "/dsa-guide",
    icon: BookOpen,
    title: {
      en: "DSA Basics",
      zh: "DSA 基础",
      ms: "Asas DSA",
      ta: "DSA அடிப்படை",
    },
    blurb: {
      en: "What DSA is, who it's for, and how parents who've been through it describe the journey.",
      zh: "DSA 是什么、适合谁、走过的家长怎么描述这段路。",
      ms: "Apa itu DSA, untuk siapa, dan bagaimana ibu bapa menggambarkan perjalanan ini.",
      ta: "DSA என்றால் என்ன, யாருக்காக, அனுபவித்த பெற்றோர் எப்படி விவரிக்கிறார்கள்.",
    },
    subLinks: [
      {
        href: "/dsa-guide",
        label: { en: "What is DSA?", zh: "什么是 DSA", ms: "Apa itu DSA?", ta: "DSA என்றால் என்ன" },
      },
      {
        href: "/faq",
        label: { en: "FAQ", zh: "常见问题", ms: "Soalan Lazim", ta: "FAQ" },
      },
      {
        href: "/dsa-experience",
        label: { en: "Parent stories", zh: "家长故事", ms: "Kisah ibu bapa", ta: "பெற்றோர் கதைகள்" },
      },
    ],
    cta: {
      en: "Start with the basics",
      zh: "从基础开始",
      ms: "Mulakan dengan asas",
      ta: "அடிப்படையிலிருந்து தொடங்கவும்",
    },
  },
  {
    id: "schools",
    href: "/dsa-finder",
    icon: School,
    title: {
      en: "Schools",
      zh: "学校",
      ms: "Sekolah",
      ta: "பள்ளிகள்",
    },
    blurb: {
      en: "147 schools, 1,300+ talent paths, PSLE cut-offs, open house dates and takeaways — one reference.",
      zh: "147 所学校 · 1300+ 才艺方向 · PSLE 分数线 · 开放日日期与精华——一站 reference。",
      ms: "147 sekolah, 1,300+ laluan bakat, PSLE cut-offs, tarikh & ringkasan hari terbuka — satu rujukan.",
      ta: "147 பள்ளிகள், 1,300+ திறன் பாதைகள், PSLE வெட்டுப்புள்ளிகள், திறந்த நாள் தேதிகள் — ஒரே குறிப்பு.",
    },
    subLinks: [
      {
        href: "/dsa-finder",
        label: { en: "School finder", zh: "学校搜索", ms: "Pencari sekolah", ta: "பள்ளி தேடல்" },
      },
      {
        href: "/psle-cop",
        label: { en: "PSLE cut-offs", zh: "PSLE 分数线", ms: "PSLE cut-offs", ta: "PSLE வெட்டுப்புள்ளிகள்" },
      },
      {
        href: "/open-house-takeaways",
        label: {
          en: "Open house takeaways",
          zh: "开放日精华",
          ms: "Ringkasan hari terbuka",
          ta: "திறந்த நாள் சாராம்சம்",
        },
      },
    ],
    cta: {
      en: "Explore schools",
      zh: "查看学校",
      ms: "Terokai sekolah",
      ta: "பள்ளிகளை ஆராயவும்",
    },
  },
  {
    id: "application",
    href: "/apply",
    icon: ClipboardCheck,
    title: {
      en: "Application",
      zh: "申请",
      ms: "Permohonan",
      ta: "விண்ணப்பம்",
    },
    blurb: {
      en: "The full apply-window checklist, deadlines, and what each step actually means in plain words.",
      zh: "完整申请窗口清单、截止时间、每一步用大白话讲清楚。",
      ms: "Senarai semak tetingkap permohonan penuh, tarikh akhir, dan maksud setiap langkah.",
      ta: "முழு விண்ணப்ப சாளர சரிபார்ப்பு பட்டியல், காலக்கெடு, ஒவ்வொரு படியின் பொருள்.",
    },
    subLinks: [
      {
        href: "/apply",
        label: { en: "Application checklist", zh: "申请清单", ms: "Senarai semak permohonan", ta: "சரிபார்ப்பு பட்டியல்" },
      },
    ],
    cta: {
      en: "Open the checklist",
      zh: "打开清单",
      ms: "Buka senarai semak",
      ta: "சரிபார்ப்பு பட்டியலைத் திற",
    },
  },
  {
    id: "after-apply",
    href: "/after-apply",
    icon: Compass,
    title: {
      en: "After You Apply",
      zh: "申请之后",
      ms: "Selepas Memohon",
      ta: "விண்ணப்பித்த பிறகு",
    },
    blurb: {
      en: "Interview prep, trial signals, results routing, and S1 posting fallback — the 6-month black box reference.",
      zh: "面试准备、trial 信号、结果分流、S1 备选——6 个月信息黑箱 reference。",
      ms: "Persediaan temu duga, isyarat trial, penghalaan keputusan, sandaran S1 — rujukan 6 bulan.",
      ta: "நேர்காணல் தயாரிப்பு, சோதனை சமிக்ஞைகள், முடிவு வழித்தடம், S1 மாற்று — 6 மாத குறிப்பு.",
    },
    subLinks: [
      {
        href: "/dsa-interview",
        label: {
          en: "Interview prep (35 Q)",
          zh: "面试准备（35 题）",
          ms: "Persediaan temu duga (35 S)",
          ta: "நேர்காணல் தயாரிப்பு (35 கே)",
        },
      },
      {
        href: "/after-apply",
        label: {
          en: "All sections",
          zh: "所有阶段",
          ms: "Semua bahagian",
          ta: "அனைத்து பகுதிகள்",
        },
      },
    ],
    cta: {
      en: "What comes next",
      zh: "接下来怎么走",
      ms: "Apa seterusnya",
      ta: "அடுத்து என்ன",
    },
  },
  {
    id: "coach",
    href: "/dsa-coaches",
    icon: UserCog,
    title: {
      en: "Coach",
      zh: "教练",
      ms: "Jurulatih",
      ta: "பயிற்சியாளர்",
    },
    blurb: {
      en: "Sport, arts, robotics, debate — independently surfaced coaches across Singapore.",
      zh: "运动、艺术、机器人、辩论——独立整理的新加坡教练目录。",
      ms: "Sukan, seni, robotik, debat — direktori jurulatih bebas di seluruh Singapura.",
      ta: "விளையாட்டு, கலை, ரோபோடிக்ஸ், விவாதம் — சிங்கப்பூர் முழுவதும் பயிற்சியாளர்கள்.",
    },
    subLinks: [
      {
        href: "/dsa-coaches",
        label: { en: "Browse coaches", zh: "浏览教练", ms: "Layari jurulatih", ta: "பயிற்சியாளர்களைப் பார்க்கவும்" },
      },
    ],
    cta: {
      en: "Find a coach",
      zh: "找教练",
      ms: "Cari jurulatih",
      ta: "பயிற்சியாளரைக் கண்டறியவும்",
    },
  },
];

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

export function HomeNavCardsRow() {
  const { locale } = useLanguage();

  const kicker = {
    en: "Five reference sections",
    zh: "五大 reference 入口",
    ms: "Lima bahagian rujukan",
    ta: "ஐந்து குறிப்பு பகுதிகள்",
  };
  const title = {
    en: "Every part of the DSA journey, one shelf.",
    zh: "DSA 流程的每一段，都在这一页。",
    ms: "Setiap bahagian perjalanan DSA, satu rak.",
    ta: "DSA பயணத்தின் ஒவ்வொரு பகுதியும், ஒரே அடுக்கில்.",
  };

  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
            {pick(kicker, locale)}
          </p>
          <h2 className="font-display text-2xl font-semibold text-intellectual sm:text-3xl">
            {pick(title, locale)}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                className="group flex h-full flex-col rounded-2xl border border-intellectual/12 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-intellectual/30 hover:shadow-card"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug text-intellectual">
                  {pick(card.title, locale)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-intellectual-muted">
                  {pick(card.blurb, locale)}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 text-[0.8125rem] text-intellectual/70">
                  {card.subLinks.map((sl) => (
                    <li key={sl.href} className="inline-flex items-center">
                      <span className="text-intellectual/40">·</span>
                      <span className="ml-1.5">{pick(sl.label, locale)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-intellectual transition group-hover:text-intellectual-light">
                  {pick(card.cta, locale)}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
                </div>
              </Link>
            );
          })}
          {/* 6th slot: a soft "you are here" educator card to balance 5 + 1 = 3-col grid */}
          <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-intellectual/15 bg-surface-warm/50 p-6">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-champagne/15 text-champagne-dark">
              <GraduationCap className="h-5 w-5" aria-hidden />
            </span>
            <p className="font-display text-sm font-semibold text-intellectual">
              {locale === "zh"
                ? "免费 · 不卖学校 · 不卖教练"
                : locale === "ms"
                  ? "Percuma · Bukan menjual sekolah · Bukan menjual jurulatih"
                  : locale === "ta"
                    ? "இலவசம் · பள்ளிகளை விற்கவில்லை · பயிற்சியாளர்களை விற்கவில்லை"
                    : "Free · We don't sell schools · We don't sell coaches"}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-intellectual-muted">
              {locale === "zh"
                ? "由家长建给家长的 reference 平台。EN · ZH · MS · TA 四语言。"
                : locale === "ms"
                  ? "Platform rujukan oleh ibu bapa untuk ibu bapa. EN · ZH · MS · TA."
                  : locale === "ta"
                    ? "பெற்றோரால் பெற்றோருக்காக கட்டப்பட்ட குறிப்பு தளம். EN · ZH · MS · TA."
                    : "A reference platform built by parents, for parents. In EN · ZH · MS · TA."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
