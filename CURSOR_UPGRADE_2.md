# DSALink Visual Upgrade — Batch 2

Run these tasks **in order**. Each task is self-contained. Do not skip to the next task until the current one is complete.

---

## Task 1 — Redesign `RecommendResultCard.tsx`

**File:** `components/RecommendResultCard.tsx`

Replace the entire file content with the following:

```tsx
"use client";

import Link from "next/link";

const MOE_DSA_URL = "https://www.moe.gov.sg/secondary/dsa";

type SchoolTier = "safe" | "reach" | "dream" | "special";

const TIER_LABELS: Record<SchoolTier, string> = {
  safe: "Safe Pick",
  reach: "Reach",
  dream: "Dream",
  special: "Specialised",
};

const TIER_STYLES: Record<SchoolTier, { badge: string; prefix: string }> = {
  safe:    { badge: "border-emerald-200 bg-emerald-50 text-emerald-700",    prefix: "✓" },
  reach:   { badge: "border-amber-200 bg-amber-50 text-amber-700",          prefix: "↗" },
  dream:   { badge: "border-intellectual/20 bg-intellectual/8 text-intellectual", prefix: "★" },
  special: { badge: "border-champagne/30 bg-champagne/10 text-champagne-dark", prefix: "◆" },
};

const POOL_NOTES: Record<"niche" | "moderate" | "popular", string> = {
  niche:
    "This talent area is offered by relatively few primary schools, which can mean a smaller but dedicated competition pool.",
  moderate:
    "This talent area has moderate uptake among primary schools — competition varies by school.",
  popular:
    "This talent area is widely popular, so DSA competition for slots may be higher.",
};

export interface RecommendResultCardProps {
  school: {
    name: string;
    slug: string;
    type: string;
    isIp: boolean;
    recentCop: string;
    matchedArea: string;
    reasons: string[];
    competitionPoolNote?: "niche" | "moderate" | "popular";
    isSpecialSchool?: boolean;
  };
  tier: SchoolTier;
}

export function RecommendResultCard({ school, tier }: RecommendResultCardProps) {
  const poolNote = school.competitionPoolNote ? POOL_NOTES[school.competitionPoolNote] : null;
  const { badge, prefix } = TIER_STYLES[tier];

  return (
    <article className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5">

      {/* School name + tier badge */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <Link
          href={`/schools/${school.slug}`}
          className="font-display text-[1.0625rem] font-bold text-slate-900 transition hover:text-intellectual"
        >
          {school.name}
        </Link>
        <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${badge}`}>
          {prefix} {TIER_LABELS[tier]}
        </span>
      </div>

      {/* Meta chips */}
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
          {school.type}
        </span>
        {school.isIp && (
          <span className="rounded-md bg-intellectual/8 px-2.5 py-0.5 text-[11px] font-medium text-intellectual">
            IP School
          </span>
        )}
        {school.isSpecialSchool && (
          <span className="rounded-md bg-champagne/10 px-2.5 py-0.5 text-[11px] font-medium text-champagne-dark">
            Specialised
          </span>
        )}
        <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
          Recent AL {school.recentCop}
        </span>
      </div>

      {/* Matched talent area */}
      <div className="mt-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden />
        <p className="text-[0.8125rem] font-semibold text-slate-800">
          {school.matchedArea} DSA
        </p>
      </div>

      {/* Reasons list */}
      <ul className="mt-2.5 space-y-1.5">
        {school.reasons.map((reason) => (
          <li key={reason} className="flex gap-2 text-[0.8125rem] text-slate-600">
            <span className="mt-[3px] h-1 w-1 shrink-0 rounded-full bg-slate-300" aria-hidden />
            <span>{reason}</span>
          </li>
        ))}
      </ul>

      {/* Competition pool note */}
      {poolNote && (
        <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-[0.75rem] leading-relaxed text-slate-500">
          {poolNote}
        </p>
      )}

      {/* Action buttons */}
      <div className="mt-4 flex flex-wrap gap-2.5 border-t border-slate-100 pt-4">
        <Link
          href={`/schools/${school.slug}`}
          className="rounded-xl bg-intellectual px-4 py-2 text-[0.8125rem] font-semibold text-white transition hover:bg-intellectual-light"
        >
          View School →
        </Link>
        <a
          href={MOE_DSA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-intellectual/20 px-4 py-2 text-[0.8125rem] font-medium text-intellectual transition hover:border-intellectual/40 hover:bg-intellectual/5"
        >
          Apply via MOE DSA ↗
        </a>
      </div>

      <p className="mt-3 text-[0.6875rem] leading-relaxed text-slate-400">
        DSA vacancies vary each year — contact the school to confirm current intake.
      </p>
    </article>
  );
}
```

---

## Task 2 — Upgrade results header in `SchoolFinderWizard.tsx`

**File:** `components/SchoolFinderWizard.tsx`

Find this exact block (around line 272–281):

```tsx
      <div className="space-y-1">
          <h1 className="font-display text-[1.25rem] font-bold text-slate-900" style={{ textTransform: "none" }}>
            Your DSA recommendations
          </h1>
          <p className="text-[0.8125rem] text-slate-500">
            Based on AL {alScore} and your child&apos;s assessed talent profile.
          </p>
        </div>
```

Replace it with:

```tsx
      <div className="mb-2 rounded-xl bg-gradient-to-br from-intellectual to-intellectual-light p-5 text-white">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="text-champagne" aria-hidden>✦</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">Your Results</span>
          </div>
          <h1 className="font-display text-[1.25rem] font-bold leading-snug text-white" style={{ textTransform: "none" }}>
            Your DSA recommendations
          </h1>
          <p className="mt-1.5 text-[0.8125rem] text-white/65">
            Based on AL {alScore} · {completedTalents.length} talent area{completedTalents.length !== 1 ? "s" : ""} assessed
          </p>
        </div>
```

---

## Task 3 — Restructure `HeroSection.tsx`

**File:** `components/HeroSection.tsx`

Replace the entire file with:

```tsx
"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { HeroSearchBox } from "@/components/HeroSearchBox";
import { HomeCtaBlock } from "@/components/HomeCtaBlock";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

export function HeroSection({ children }: { children?: ReactNode }) {
  const { t, locale } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-14">

          {/* ── Left column ── */}
          <div className="flex flex-col">
            {/* Kicker badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-champagne/30 bg-champagne-subtle px-3 py-1 text-xs font-semibold text-champagne-dark">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="normal-case">{t.heroBadge}</span>
            </div>

            {/* H1 */}
            <h1
              style={{ textTransform: "none" }}
              className={`max-w-[min(100%,46rem)] ${locale === "zh" ? "break-keep" : locale === "ta" ? "break-words" : "text-balance"} font-display text-[2rem] font-extrabold leading-[1.13] tracking-tight text-slate-900 sm:text-[2.75rem] sm:leading-[1.08] lg:text-[3.25rem] lg:leading-[1.05]`}
            >
              {t.heroTitle}
            </h1>

            <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-slate-500 sm:mt-4 sm:text-base">
              {t.heroSubtitle}
            </p>

            {/* Primary CTA block — the main action */}
            <div className="mt-5">
              <HomeCtaBlock />
            </div>

            {/* Secondary CTAs */}
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Link
                href="/dsa-finder"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intellectual"
              >
                {t.ctaPrimary}
                <ArrowRight className="h-3.5 w-3.5 opacity-80" aria-hidden />
              </Link>
              <Link
                href="/dsa-guide"
                className="inline-flex items-center gap-1.5 self-center text-sm font-medium text-slate-500 transition hover:text-slate-800"
              >
                {t.ctaSecondary} →
              </Link>
            </div>

            {/* Search box */}
            <div className="mt-5">
              <HeroSearchBox />
            </div>

            {/* Compact deadline line */}
            <p className="mt-4 text-[0.75rem] text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3 w-3 text-amber-500" aria-hidden />
                Applications close{" "}
                <strong className="text-slate-600">2 Jun 2026, 4:30pm SGT</strong>
                {" · "}
                <a
                  href="https://www.moe.gov.sg/secondary/dsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-slate-700"
                >
                  moe.gov.sg ↗
                </a>
              </span>
            </p>
          </div>

          {/* ── Right column: dynamic cards only ── */}
          <div className="flex flex-col gap-4 lg:pt-2">
            {children}
          </div>

        </div>
      </div>
    </section>
  );
}
```

After saving, check if `HeroIllustration` is imported anywhere else in the codebase (`grep -r "HeroIllustration" .`). If it is only used in `HeroSection.tsx` (which we've now replaced), you can leave the file in place — it will just be unused. Do NOT delete it; the import has already been removed.

---

## Task 4 — Add internal links in `DsaExplainerSection.tsx`

**File:** `components/DsaExplainerSection.tsx`

### 4a — Add links to the three step cards

Find the step cards grid. Each `<div>` card ends with:
```tsx
                <p className="text-[0.875rem] leading-relaxed text-slate-600">
                  {locale === "zh" ? step.descriptionZh : step.description}
                </p>
              </div>
```

Replace that closing `</div>` pattern (the one that closes each map item) by adding a link after the description. Since the three steps map dynamically, change the `DSA_STEPS` array at the top of the file to include a `href` and `linkLabel` / `linkLabelZh` for each step:

Find:
```tsx
const DSA_STEPS = [
  {
    number: "1",
    title: "Apply",
    titleZh: "申请",
    description:
      "Submit up to 3 school choices via the MOE DSA portal. Applications are free and open from 6 May 2026.",
    descriptionZh:
      "通过教育部 DSA 平台提交最多 3 个学校选择。申请免费，并从 2026 年 5 月 6 日开放。",
  },
  {
    number: "2",
    title: "Selected",
    titleZh: "入选",
    description:
      "Schools invite your child for a trial, audition, or interview based on their talent area.",
    descriptionZh:
      "学校会根据孩子的才艺领域，邀请他们参加选拔、试演或面试。",
  },
  {
    number: "3",
    title: "Confirmed",
    titleZh: "确认",
    description:
      "If offered a place, your child's school is secured before PSLE results are released.",
    descriptionZh:
      "如果获得录取名额，孩子会在 PSLE 成绩公布前确定中学去向。",
  },
];
```

Replace with:
```tsx
const DSA_STEPS = [
  {
    number: "1",
    title: "Apply",
    titleZh: "申请",
    description:
      "Submit up to 3 school choices via the MOE DSA portal. Applications are free and open from 6 May 2026.",
    descriptionZh:
      "通过教育部 DSA 平台提交最多 3 个学校选择。申请免费，并从 2026 年 5 月 6 日开放。",
    href: "/dsa-guide",
    linkLabel: "How to apply →",
    linkLabelZh: "了解申请流程 →",
  },
  {
    number: "2",
    title: "Selected",
    titleZh: "入选",
    description:
      "Schools invite your child for a trial, audition, or interview based on their talent area.",
    descriptionZh:
      "学校会根据孩子的才艺领域，邀请他们参加选拔、试演或面试。",
    href: "/dsa-interview",
    linkLabel: "Interview tips →",
    linkLabelZh: "面试技巧 →",
  },
  {
    number: "3",
    title: "Confirmed",
    titleZh: "确认",
    description:
      "If offered a place, your child's school is secured before PSLE results are released.",
    descriptionZh:
      "如果获得录取名额，孩子会在 PSLE 成绩公布前确定中学去向。",
    href: "/faq",
    linkLabel: "Common questions →",
    linkLabelZh: "常见问题 →",
  },
];
```

### 4b — Update the step card render to show the link

Find inside the step card map:
```tsx
                <p className="text-[0.875rem] leading-relaxed text-slate-600">
                  {locale === "zh" ? step.descriptionZh : step.description}
                </p>
              </div>
```

Replace with:
```tsx
                <p className="text-[0.875rem] leading-relaxed text-slate-600">
                  {locale === "zh" ? step.descriptionZh : step.description}
                </p>
                <Link
                  href={step.href}
                  className="mt-3 inline-block text-[0.8125rem] font-semibold text-intellectual transition hover:text-intellectual-light"
                >
                  {locale === "zh" ? step.linkLabelZh : step.linkLabel}
                </Link>
              </div>
```

---

## Task 5 — Add a "Not sure?" prompt above persona cards in `DsaStrategySection.tsx`

**File:** `components/DsaStrategySection.tsx`

Find:
```tsx
        <div className="mb-6">
          <h3 className="mb-1 font-display text-[1.0625rem] font-semibold text-slate-900">
            {t.dsaStrategyWhichParent}
          </h3>
          <p className="text-[0.875rem] text-slate-500">
            {t.dsaStrategyWhichDesc}
          </p>
        </div>
```

Replace with:
```tsx
        <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="mb-1 font-display text-[1.0625rem] font-semibold text-slate-900">
              {t.dsaStrategyWhichParent}
            </h3>
            <p className="text-[0.875rem] text-slate-500">
              {t.dsaStrategyWhichDesc}
            </p>
          </div>
          <Link
            href="/dsa-finder"
            className="mt-2 shrink-0 text-[0.8125rem] font-semibold text-intellectual transition hover:text-intellectual-light sm:mt-0"
          >
            Not sure? Try the School Finder →
          </Link>
        </div>
```

Make sure `Link` from `"next/link"` is already imported at the top of `DsaStrategySection.tsx`. It should already be there; if not, add the import.

---

## Verification

After all tasks:

1. Run `npx tsc --noEmit` — must be zero errors.
2. Run `npm run build` — must complete successfully.
3. Visually check:
   - Result cards: white background, colored tier badges (green/amber/navy/gold), intellectual navy "View School" button
   - Results header: dark navy gradient with ✦ icon and white text
   - Hero: gold HomeCtaBlock first, then dark navy "Browse schools" button, then plain text "DSA Guide →" link, compact deadline text, no SVG illustration
   - DsaExplainerSection: each step card has a text link at the bottom
   - DsaStrategySection: "Not sure? Try the School Finder →" link beside the h3
