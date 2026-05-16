# CURSOR TASK: i18n — 无 hook 组件接入（依赖 batch1_keys 先完成）

## 涉及文件
- `components/StatsStrip.tsx`
- `components/ParentJourneyStrip.tsx`
- `components/DsaExperienceCallout.tsx`
- `components/DeadlineCard.tsx`

---

## 改动 1 — `components/StatsStrip.tsx`

完整替换文件内容：

```tsx
"use client";

import type { RefObject } from "react";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/contexts/LanguageContext";

const STAT_NUMBERS = [
  { end: 147,  suffix: ""     },
  { end: 1300, suffix: "+"   },
  { end: 2,    suffix: " min" },
  { end: 100,  suffix: "%"   },
] as const;

function useCounter(end: number, active: boolean, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setVal(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, end, duration]);
  return val;
}

function StatItem({ end, suffix, label, active }: { end: number; suffix: string; label: string; active: boolean }) {
  const val = useCounter(end, active);
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <span className="font-display text-[2.25rem] font-extrabold leading-none tracking-tight text-white sm:text-[2.75rem]">
        {val.toLocaleString()}{suffix}
      </span>
      <span className="text-[0.8125rem] text-white/55">{label}</span>
    </div>
  );
}

export function StatsStrip() {
  const { ref, inView } = useInView();
  const { t } = useLanguage();

  const STATS = [
    { end: 147,  suffix: "",     label: t.statsLabel1 },
    { end: 1300, suffix: "+",    label: t.statsLabel2 },
    { end: 2,    suffix: " min", label: t.statsLabel3 },
    { end: 100,  suffix: "%",    label: t.statsLabel4 },
  ] as const;

  return (
    <section
      ref={ref as RefObject<HTMLElement>}
      className="border-y border-intellectual/20 bg-intellectual py-8 sm:py-10"
      aria-label="DSALink by the numbers"
    >
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:gap-6 sm:px-6">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} active={inView} />
        ))}
      </div>
    </section>
  );
}
```

---

## 改动 2 — `components/ParentJourneyStrip.tsx`

在文件顶部 import 区追加：
```tsx
import { useLanguage } from "@/contexts/LanguageContext";
```

将 `export function ParentJourneyStrip()` 改为：
```tsx
export function ParentJourneyStrip() {
  const { t } = useLanguage();

  const JOURNEY_STEPS = [
    { number: "1", title: t.journeyStep1Title, description: t.journeyStep1Desc, href: "/faq", external: false },
    { number: "2", title: t.journeyStep2Title, description: t.journeyStep2Desc, href: "/dsa-finder", external: false },
    { number: "3", title: t.journeyStep3Title, description: t.journeyStep3Desc, href: "/open-house-guide", external: false },
    { number: "4", title: t.journeyStep4Title, description: t.journeyStep4Desc, href: "https://www.moe.gov.sg/secondary/dsa", external: true },
  ];
```

删除文件顶部原来的 `const JOURNEY_STEPS = [...]` 数组（整块删除）。

将 section 内的标题行：
```tsx
        <p className="mb-5 text-[10px] font-bold tracking-[0.16em] text-slate-400">
          Your DSA Journey
        </p>
```
改为：
```tsx
        <p className="mb-5 text-[10px] font-bold tracking-[0.16em] text-slate-400">
          {t.journeyTitle}
        </p>
```

---

## 改动 3 — `components/DsaExperienceCallout.tsx`

完整替换文件内容：

```tsx
import Link from "next/link";
import { ArrowRight, BookMarked } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function DsaExperienceCallout() {
  const { t } = useLanguage();

  const PREVIEW_ITEMS = [
    t.dsaExpCalloutItem1,
    t.dsaExpCalloutItem2,
    t.dsaExpCalloutItem3,
    t.dsaExpCalloutItem4,
    t.dsaExpCalloutItem5,
  ];

  return (
    <section className="bg-surface-warm py-10 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Link
          href="/dsa-experience"
          className="group block rounded-2xl border border-champagne/30 bg-white px-6 py-7 shadow-card transition hover:border-champagne/60 hover:shadow-card-hover sm:px-8 sm:py-8"
        >
          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-champagne/30 bg-champagne/10 text-intellectual transition group-hover:border-champagne/50">
                <BookMarked className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="mb-0.5 text-[10px] font-semibold tracking-[0.15em] text-champagne-dark normal-case">
                  {t.dsaExpCalloutKicker}
                </p>
                <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                  {t.dsaExpCalloutTitle}
                </h2>
              </div>
            </div>
            <span className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-intellectual transition group-hover:gap-2 sm:inline-flex">
              {t.dsaExpCalloutCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </div>

          {/* Preview list */}
          <ul className="mt-5 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2.5 pl-[3.5rem]">
            {PREVIEW_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="mt-5 flex items-center gap-1 pl-[3.5rem] text-sm font-semibold text-intellectual sm:hidden">
            {t.dsaExpCalloutCta} <ArrowRight className="h-4 w-4" aria-hidden />
          </div>
        </Link>
      </div>
    </section>
  );
}
```

注意：因为 DsaExperienceCallout 使用了 `useLanguage()`，需要在文件顶部添加 `"use client";`。

---

## 改动 4 — `components/DeadlineCard.tsx`

完整替换文件内容：

```tsx
"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DEADLINE = new Date("2026-06-02T08:30:00Z");

function getDaysLeft(): number {
  const now = new Date();
  const diff = DEADLINE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function DeadlineCard() {
  const { t } = useLanguage();
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(getDaysLeft());
  }, []);

  const urgent = days !== null && days <= 14;

  return (
    <a
      href="https://www.moe.gov.sg/secondary/dsa"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-[#e3ded5] bg-white px-4 py-3.5 shadow-card transition hover:border-[#d4cec4] hover:shadow-card-hover"
    >
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${urgent ? "bg-red-50 text-red-500" : "bg-amber-50 text-amber-500"}`}>
        <Clock className="h-4 w-4" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`text-[10px] font-bold tracking-wide normal-case ${urgent ? "text-red-500" : "text-amber-600"}`}>
          {urgent ? t.deadlineUrgentLabel : t.deadlineLabel}
        </p>
        <p className="truncate text-sm font-semibold text-slate-800">
          {t.deadlineDate}
        </p>
        {days !== null && (
          <p className="text-xs text-slate-400">
            {days === 0 ? t.deadlineClosesToday : `${days} ${t.deadlineDaysLeftSuffix}`}
          </p>
        )}
      </div>
      <span className="shrink-0 text-xs text-slate-400 transition group-hover:translate-x-0.5">→</span>
    </a>
  );
}
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] 切换中文：Stats 标签、Journey 步骤、Callout 卡片、DeadlineCard 全部显示中文
- [ ] 切换马来文/泰米尔文：同样更新
