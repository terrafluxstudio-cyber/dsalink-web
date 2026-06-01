"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ClipboardCheck,
  Compass,
  School,
  UserCog,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };
type CardKey = "basics" | "schools" | "application" | "after-apply" | "coach";

type QuickCard = {
  key: CardKey;
  href: string;
  icon: typeof Compass;
  title: LocaleStr;
  blurb: LocaleStr;
};

const CARDS: Record<CardKey, QuickCard> = {
  basics: {
    key: "basics",
    href: "/dsa-guide",
    icon: BookOpen,
    title: { en: "DSA Basics", zh: "DSA 基础", ms: "Asas DSA", ta: "DSA அடிப்படை" },
    blurb: {
      en: "What DSA is, who it's for, and how parents who've been through it describe the journey.",
      zh: "DSA 是什么、适合谁、走过的家长怎么描述这段路。",
      ms: "Apa itu DSA, untuk siapa, dan pengalaman ibu bapa yang telah lalui.",
      ta: "DSA என்றால் என்ன, யாருக்காக, அனுபவித்த பெற்றோர் எப்படி விவரிக்கிறார்கள்.",
    },
  },
  schools: {
    key: "schools",
    href: "/dsa-finder",
    icon: School,
    title: { en: "Schools", zh: "学校", ms: "Sekolah", ta: "பள்ளிகள்" },
    blurb: {
      en: "147 schools, 1,300+ talent paths, PSLE cut-offs, open house dates — one reference.",
      zh: "147 所学校 · 1300+ 才艺方向 · PSLE 分数线 · 开放日——一站 reference。",
      ms: "147 sekolah, 1,300+ laluan bakat, PSLE cut-offs, hari terbuka — satu rujukan.",
      ta: "147 பள்ளிகள், 1,300+ திறன் பாதைகள், PSLE வெட்டுப்புள்ளிகள் — ஒரே குறிப்பு.",
    },
  },
  application: {
    key: "application",
    href: "/apply",
    icon: ClipboardCheck,
    title: { en: "Application", zh: "申请", ms: "Permohonan", ta: "விண்ணப்பம்" },
    blurb: {
      en: "Checklist, FAQ, deadlines — every step of the apply window in plain words.",
      zh: "清单、常见问题、截止时间——申请窗口每一步用大白话讲清楚。",
      ms: "Senarai semak, FAQ, tarikh akhir — setiap langkah tetingkap permohonan.",
      ta: "சரிபார்ப்பு பட்டியல், FAQ, காலக்கெடு — விண்ணப்ப காலத்தின் ஒவ்வொரு படியும்.",
    },
  },
  "after-apply": {
    key: "after-apply",
    href: "/after-apply",
    icon: Compass,
    title: {
      en: "After You Apply",
      zh: "申请之后",
      ms: "Selepas Memohon",
      ta: "விண்ணப்பித்த பிறகு",
    },
    blurb: {
      en: "Interview prep, trial signals, results routing, S1 fallback — the 6-month black box.",
      zh: "面试准备、trial 信号、结果分流、S1 备选——6 个月信息黑箱。",
      ms: "Persediaan temu duga, isyarat trial, keputusan, sandaran S1 — 6 bulan rujukan.",
      ta: "நேர்காணல், சோதனை, முடிவு, S1 மாற்று — 6 மாத குறிப்பு.",
    },
  },
  coach: {
    key: "coach",
    href: "/dsa-coaches",
    icon: UserCog,
    title: { en: "Coach", zh: "教练", ms: "Jurulatih", ta: "பயிற்சியாளர்" },
    blurb: {
      en: "Sport, arts, robotics, debate — independently surfaced coaches across Singapore.",
      zh: "运动、艺术、机器人、辩论——独立整理的新加坡教练目录。",
      ms: "Sukan, seni, robotik, debat — direktori jurulatih bebas di seluruh Singapura.",
      ta: "விளையாட்டு, கலை, ரோபோடிக்ஸ், விவாதம் — பயிற்சியாளர் அடைவு.",
    },
  },
};

/**
 * Same time-period logic as HomeMainSlotCard.
 * 副卡 = the 4 nav items NOT currently in the main slot.
 */
type MainSlot = "application" | "after-apply" | "schools";
function computeMain(now: Date): MainSlot {
  const sg = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  const month = sg.getUTCMonth() + 1;
  const day = sg.getUTCDate();
  if ((month === 5 && day >= 5) || (month === 6 && day <= 2)) return "application";
  if ((month === 6 && day >= 3) || (month > 6 && month <= 11)) return "after-apply";
  return "schools";
}

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

export function HomeNavCardsRow() {
  const { locale } = useLanguage();
  const [main, setMain] = useState<MainSlot | null>(null);

  useEffect(() => {
    setMain(computeMain(new Date()));
  }, []);

  // Default order (used before mount or as base): Basics, Schools, Application, After-Apply, Coach.
  const allKeys: CardKey[] = ["basics", "schools", "application", "after-apply", "coach"];
  // Filter out the current main slot — leaves 4.
  const visibleKeys: CardKey[] = main
    ? allKeys.filter((k) => k !== main)
    : ["basics", "schools", "application", "coach"];
  const cards = visibleKeys.map((k) => CARDS[k]);

  const kicker = {
    en: "More reference sections",
    zh: "更多 reference 入口",
    ms: "Lebih banyak rujukan",
    ta: "மேலும் குறிப்பு பகுதிகள்",
  };
  const title = {
    en: "Explore the rest of DSALink.",
    zh: "继续探索 DSALink 的其余部分。",
    ms: "Terokai bahagian lain DSALink.",
    ta: "DSALink-இன் மற்ற பகுதிகளை ஆராயவும்.",
  };

  return (
    <section className="bg-surface pb-12 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
            {pick(kicker, locale)}
          </p>
          <h2 className="font-display text-xl font-semibold text-intellectual sm:text-2xl">
            {pick(title, locale)}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.key}
                href={card.href}
                className="group flex h-full flex-col rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-intellectual/30 hover:shadow-card"
              >
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
                  <Icon className="h-4.5 w-4.5" aria-hidden />
                </span>
                <h3 className="font-display text-base font-semibold leading-snug text-intellectual">
                  {pick(card.title, locale)}
                </h3>
                <p className="mt-1.5 flex-1 text-[0.8125rem] leading-relaxed text-intellectual-muted">
                  {pick(card.blurb, locale)}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-[0.75rem] font-semibold text-intellectual transition group-hover:text-intellectual-light">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
