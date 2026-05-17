# Cursor Task: Featured Guides Section (Two Cards Side by Side)

## Goal

Replace the separate `FeaturedGuideStrip` and `OpenHouseFieldGuide` components on the homepage with a single new `FeaturedGuidesSection` component that shows both guides as two equal cards side by side.

---

## Step 1: Create `components/FeaturedGuidesSection.tsx`

```tsx
"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturedGuidesSection() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-champagne/20 bg-champagne-subtle">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          {/* Card 1: DSA Parent Playbook */}
          <div className="flex flex-col rounded-2xl border border-champagne/30 bg-white p-6 shadow-card">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-champagne/20 text-champagne-dark">
              <BookOpen className="h-5 w-5" aria-hidden />
            </div>
            <p className="mb-1 text-[10px] font-bold tracking-[0.16em] text-champagne-dark normal-case">
              {t.featuredGuideKicker}{" "}
              <span aria-hidden className="animate-sparkle">★</span>
            </p>
            <h2 className="font-display text-[1.1rem] font-extrabold leading-snug text-slate-900 sm:text-[1.2rem]">
              {t.featuredGuideTitle}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              {t.dsaExpCalloutItem1}
            </p>
            <Link
              href="/dsa-experience"
              className="mt-5 inline-flex items-center gap-1.5 self-start rounded-lg bg-intellectual px-4 py-2 text-sm font-semibold text-white transition hover:bg-intellectual-light"
            >
              {t.featuredGuideCta}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>

          {/* Card 2: Open House Master Guide */}
          <div className="flex flex-col rounded-2xl border border-champagne/30 bg-white p-6 shadow-card">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-champagne/20 text-champagne-dark">
              <MapPin className="h-5 w-5" aria-hidden />
            </div>
            <p className="mb-1 text-[10px] font-bold tracking-[0.16em] text-champagne-dark normal-case">
              {t.fieldGuide_kicker}{" "}
              <span aria-hidden className="animate-sparkle">★</span>
            </p>
            <h2 className="font-display text-[1.1rem] font-extrabold leading-snug text-slate-900 sm:text-[1.2rem]">
              {t.fieldGuide_title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              {t.fieldGuide_subtitle}
            </p>
            <Link
              href="/open-house-guide"
              className="mt-5 inline-flex items-center gap-1.5 self-start rounded-lg bg-intellectual px-4 py-2 text-sm font-semibold text-white transition hover:bg-intellectual-light"
            >
              {t.fieldGuide_read_more}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
```

---

## Step 2: Update `app/page.tsx`

**a) Replace this import:**
```tsx
import { FeaturedGuideStrip } from "@/components/FeaturedGuideStrip";
```
**With:**
```tsx
import { FeaturedGuidesSection } from "@/components/FeaturedGuidesSection";
```

**b) Remove this import entirely:**
```tsx
import { OpenHouseFieldGuide } from "@/components/OpenHouseFieldGuide";
```

**c) In the JSX, replace:**
```tsx
<FeaturedGuideStrip />
<StatsStrip />
<OpenHouseFieldGuide />
```
**With:**
```tsx
<FeaturedGuidesSection />
<StatsStrip />
```

Do NOT change any other part of `app/page.tsx`.

---

## Step 3: Verify `components/FeaturedGuideStrip.tsx` and `components/OpenHouseFieldGuide.tsx`

Leave these files on disk — do NOT delete them. Only remove their usage from `app/page.tsx`.

---

## Verification

1. `npm run build` — no TypeScript errors
2. Homepage shows a two-card side-by-side section (champagne-subtle background, white cards)
3. Left card: DSA Parent Playbook with navy CTA "Read now"
4. Right card: 2026 Open House Master Guide with navy CTA "Read the full guide"
5. `FeaturedGuideStrip` and `OpenHouseFieldGuide` no longer appear anywhere on the homepage
6. On mobile (< 640px): cards stack vertically

---

## Git commit

```
git add components/FeaturedGuidesSection.tsx app/page.tsx
git commit -m "feat: merge Playbook and Open House Guide into two-card featured section"
```
