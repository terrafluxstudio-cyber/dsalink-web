"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Calculator,
  Cpu,
  Crown,
  Drama,
  Footprints,
  Goal,
  Languages,
  Music2,
  Palette,
  Shield,
  Sparkles,
  Trophy,
  Waves,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

/**
 * Curated top-14 talent paths shown in the Hero grid.
 * Order = popularity (sports 5 → performing arts 3 → visual arts 1 →
 *         STEM 2 → language → drama → leadership → martial arts).
 *
 * NOTE: this list is intentionally curated and HARD-CODED, not auto-derived
 * from TALENT_SLUGS. Hockey + squash + future niche talents still have
 * full prep pages but live behind the "See all" card → /dsa-interview/talents.
 */
const TALENTS: ReadonlyArray<{
  slug: string;
  icon: typeof Goal;
  label: LocaleStr;
}> = [
  // ── Sports · top 5 (gender-balanced, large NSG) ─────────────────────
  { slug: "football", icon: Trophy, label: { en: "Football", zh: "足球", ms: "Bola Sepak", ta: "கால்பந்து" } },
  { slug: "basketball", icon: Goal, label: { en: "Basketball", zh: "篮球", ms: "Bola Keranjang", ta: "கூடைப்பந்து" } },
  { slug: "swimming", icon: Waves, label: { en: "Swimming", zh: "游泳", ms: "Renang", ta: "நீச்சல்" } },
  { slug: "badminton", icon: Sparkles, label: { en: "Badminton", zh: "羽毛球", ms: "Badminton", ta: "இறகுப்பந்து" } },
  { slug: "track-field", icon: Footprints, label: { en: "Track & Field", zh: "田径", ms: "Olahraga", ta: "ஓட்டப்பந்தயம்" } },
  // ── Performing Arts · 3 ─────────────────────────────────────────────
  { slug: "music", icon: Music2, label: { en: "Music", zh: "音乐", ms: "Muzik", ta: "இசை" } },
  { slug: "dance", icon: Activity, label: { en: "Dance", zh: "舞蹈", ms: "Tarian", ta: "நடனம்" } },
  // ── Visual Arts · 1 ─────────────────────────────────────────────────
  { slug: "art", icon: Palette, label: { en: "Visual Arts", zh: "美术", ms: "Seni Visual", ta: "காட்சிக் கலை" } },
  // ── STEM · 2 ────────────────────────────────────────────────────────
  { slug: "math", icon: Calculator, label: { en: "Math & Sci", zh: "数理", ms: "Mat & Sains", ta: "கணிதம் & அறிவியல்" } },
  { slug: "robotics", icon: Cpu, label: { en: "Robotics", zh: "机器人", ms: "Robotik", ta: "ரோபோடிக்ஸ்" } },
  // ── Language ────────────────────────────────────────────────────────
  { slug: "chinese", icon: Languages, label: { en: "Chinese (CLE)", zh: "高级华文", ms: "Bahasa Cina", ta: "சீன மொழி" } },
  // ── Drama ───────────────────────────────────────────────────────────
  { slug: "drama", icon: Drama, label: { en: "Drama", zh: "戏剧", ms: "Drama", ta: "நாடகம்" } },
  // ── Leadership ──────────────────────────────────────────────────────
  { slug: "leadership", icon: Crown, label: { en: "Leadership", zh: "领导力", ms: "Kepimpinan", ta: "தலைமைத்துவம்" } },
  // ── Martial Arts ────────────────────────────────────────────────────
  { slug: "martial-arts", icon: Shield, label: { en: "Martial Arts", zh: "武术", ms: "Seni Bela Diri", ta: "தற்காப்பு கலைகள்" } },
];

const HEADING: LocaleStr = {
  en: "Popular DSA talent paths",
  zh: "热门 DSA 才艺方向",
  ms: "Laluan bakat DSA popular",
  ta: "பிரபலமான DSA திறமைப் பாதைகள்",
};

const SUB: LocaleStr = {
  en: "Tap a talent to open its DSA prep guide.",
  zh: "点击任一才艺打开 DSA 备考指南",
  ms: "Tekan bakat untuk buka panduan DSA.",
  ta: "DSA தயாரிப்பு வழிகாட்டியைத் திறக்க தட்டவும்.",
};

const SEE_ALL_LABEL: LocaleStr = {
  en: "Browse all talents",
  zh: "查看全部才艺",
  ms: "Lihat semua bakat",
  ta: "அனைத்து திறமைகள்",
};

export function HeroTalentGrid() {
  const { locale } = useLanguage();

  return (
    <div className="hidden lg:flex lg:flex-col lg:gap-3.5 lg:self-end">
      <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-slate-500 normal-case">
        <span className="h-px w-6 bg-slate-300" aria-hidden />
        {HEADING[locale]}
      </p>
      <div className="grid grid-cols-2 gap-2.5">
        {TALENTS.map((t) => {
          const Icon = t.icon;
          return (
            <Link
              key={t.slug}
              href={`/dsa-interview/${t.slug}`}
              className="group flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/95 px-3 py-3 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-champagne hover:shadow-card"
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-champagne-subtle text-champagne-dark transition group-hover:bg-champagne group-hover:text-intellectual-dark">
                <Icon className="h-4 w-4" aria-hidden />
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

        {/* ── See-all card · spans 2 cols · champagne accent ─────────── */}
        <Link
          href="/dsa-interview/talents"
          className="group col-span-2 flex items-center justify-between gap-2.5 rounded-xl border border-champagne/60 bg-champagne-subtle/40 px-3 py-3 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-champagne hover:bg-champagne-subtle hover:shadow-card"
        >
          <span
            style={{ textTransform: "none" }}
            className="truncate text-[12.5px] font-semibold text-intellectual"
          >
            {SEE_ALL_LABEL[locale]}
          </span>
          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-champagne text-intellectual-dark transition group-hover:bg-intellectual group-hover:text-white">
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </Link>
      </div>
      <p className="text-[11px] leading-relaxed text-slate-400">{SUB[locale]}</p>
    </div>
  );
}
