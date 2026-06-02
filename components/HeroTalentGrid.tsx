"use client";

import Link from "next/link";
import {
  Activity,
  Calculator,
  Footprints,
  Goal,
  Music2,
  Shield,
  Sparkles,
  Trophy,
  Waves,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

const TALENTS: ReadonlyArray<{
  slug: string;
  icon: typeof Goal;
  label: LocaleStr;
  /** Optional href override — defaults to /dsa-interview/[slug]. */
  href?: string;
}> = [
  { slug: "basketball", icon: Goal, label: { en: "Basketball", zh: "篮球", ms: "Bola Keranjang", ta: "கூடைப்பந்து" } },
  { slug: "football", icon: Trophy, label: { en: "Football", zh: "足球", ms: "Bola Sepak", ta: "கால்பந்து" } },
  { slug: "swimming", icon: Waves, label: { en: "Swimming", zh: "游泳", ms: "Renang", ta: "நீச்சல்" } },
  { slug: "track-field", icon: Footprints, label: { en: "Track & Field", zh: "田径", ms: "Olahraga", ta: "ஓட்டப்பந்தயம்" } },
  { slug: "badminton", icon: Sparkles, label: { en: "Badminton", zh: "羽毛球", ms: "Badminton", ta: "இறகுப்பந்து" } },
  { slug: "martial-arts", icon: Shield, label: { en: "Martial Arts", zh: "武术", ms: "Seni Bela Diri", ta: "தற்காப்பு கலைகள்" } },
  { slug: "music", icon: Music2, label: { en: "Music", zh: "音乐", ms: "Muzik", ta: "இசை" } },
  // Dance — high-volume DSA talent across many MOE schools (Performing Arts cluster).
  // No dedicated /dsa-interview/dance page yet → routes to DSA Finder pre-filtered.
  { slug: "dance", icon: Activity, label: { en: "Dance", zh: "舞蹈", ms: "Tarian", ta: "நடனம்" }, href: "/dsa-finder?q=dance" },
  { slug: "math", icon: Calculator, label: { en: "Math & Sci", zh: "数理", ms: "Mat & Sains", ta: "கணிதம் & அறிவியல்" } },
];

const HEADING: LocaleStr = {
  en: "9 talent paths",
  zh: "9 个才艺方向",
  ms: "9 laluan bakat",
  ta: "9 திறமைப் பாதைகள்",
};

const SUB: LocaleStr = {
  en: "Tap a talent to open its DSA prep guide.",
  zh: "点击任一才艺打开 DSA 备考指南",
  ms: "Tekan bakat untuk buka panduan DSA.",
  ta: "DSA தயாரிப்பு வழிகாட்டியைத் திறக்க தட்டவும்.",
};

export function HeroTalentGrid() {
  const { locale } = useLanguage();

  return (
    <div className="hidden lg:flex lg:flex-col lg:gap-3">
      <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-slate-500 normal-case">
        <span className="h-px w-6 bg-slate-300" aria-hidden />
        {HEADING[locale]}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {TALENTS.map((t) => {
          const Icon = t.icon;
          return (
            <Link
              key={t.slug}
              href={t.href ?? `/dsa-interview/${t.slug}`}
              className="group flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2.5 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-champagne hover:shadow-card"
            >
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-champagne-subtle text-champagne-dark transition group-hover:bg-champagne group-hover:text-intellectual-dark">
                <Icon className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span
                style={{ textTransform: "none" }}
                className="truncate text-[12.5px] font-semibold text-intellectual"
              >
                {t.label[locale]}
              </span>
            </Link>
          );
        })}
      </div>
      <p className="text-[11px] leading-relaxed text-slate-400">{SUB[locale]}</p>
    </div>
  );
}
