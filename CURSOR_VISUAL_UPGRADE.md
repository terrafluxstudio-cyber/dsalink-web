# DSALink 视觉升级任务包

**项目路径：** `/Users/nanewmac/Desktop/dsalink-web`  
**原则：只改视觉呈现，不改任何内容、路由、功能逻辑。**  
**执行顺序：按编号顺序，不可跳过。**

---

## Task 1 — `app/globals.css`

在文件**末尾**追加以下内容（不修改现有内容）：

```css
/* ── Language-aware typography ── */
:lang(zh) h1, :lang(zh) h2, :lang(zh) h3 {
  letter-spacing: 0 !important;
  line-height: 1.4 !important;
}
:lang(zh) p, :lang(zh) li {
  line-height: 1.75;
  word-break: keep-all;
}
:lang(ta) h1, :lang(ta) h2, :lang(ta) h3 {
  letter-spacing: 0 !important;
  line-height: 1.55 !important;
}
:lang(ta) p, :lang(ta) li {
  line-height: 1.9;
  overflow-wrap: break-word;
}
:lang(ms) p, :lang(ms) h2, :lang(ms) h3 {
  hyphens: auto;
  hyphenate-limit-chars: 6 3 3;
}

/* ── Scroll fade-up animation ── */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  animation: fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.animate-fade-up-delay-1 { animation-delay: 80ms; }
.animate-fade-up-delay-2 { animation-delay: 160ms; }
.animate-fade-up-delay-3 { animation-delay: 240ms; }
```

---

## Task 2 — `contexts/LanguageContext.tsx`

找到以下两处代码，每处后面各加一行（加粗为新增行）：

**第一处**——`setLocale` 函数内，找到：
```typescript
document.documentElement.lang = localeHtmlLang[next];
```
紧接其后加：
```typescript
document.body.setAttribute('data-locale', next);
```

**第二处**——`useEffect` 内，找到：
```typescript
document.documentElement.lang = localeHtmlLang[locale];
```
紧接其后加：
```typescript
document.body.setAttribute('data-locale', locale);
```

---

## Task 3 — `components/HeroSection.tsx`

**Step 3-1：** 找到顶部 `const { t } = useLanguage();`，改为：
```typescript
const { t, locale } = useLanguage();
```

**Step 3-2：** 找到 h1 的 className，其中有 `text-balance` 这个 class，将它替换为：
```
${locale === 'zh' ? 'break-keep' : locale === 'ta' ? 'break-words' : 'text-balance'}
```

注意：这是插入到模板字符串中的，h1 的 className 要从普通字符串改为模板字符串（反引号），同时保留原有所有其他 class。

---

## Task 4 — 卡片 hover 位移（三个文件）

在以下三个文件中，找到所有含 `hover:shadow-card-hover` 的元素，在其 className 末尾追加：
```
transition-transform duration-200 hover:-translate-y-0.5
```

需要修改的文件：
- `components/ParentJourneyStrip.tsx`
- `components/DsaExplainerSection.tsx`
- `components/DsaStrategySection.tsx`

---

## Task 5 — 新建 `hooks/useInView.ts`

新建文件 `hooks/useInView.ts`，内容如下：

```typescript
import { useEffect, useRef, useState } from 'react';

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}
```

---

## Task 6 — 新建 `components/StatsStrip.tsx`

新建文件 `components/StatsStrip.tsx`，内容如下：

```tsx
"use client";

import type { RefObject } from "react";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const STATS = [
  { end: 147,  suffix: "",     label: "Secondary schools covered"       },
  { end: 1300, suffix: "+",    label: "DSA talent areas mapped"         },
  { end: 2,    suffix: " min", label: "To get your personalised match"  },
  { end: 100,  suffix: "%",    label: "Free for all P6 families"        },
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

function StatItem({
  end,
  suffix,
  label,
  active,
}: { end: number; suffix: string; label: string; active: boolean }) {
  const val = useCounter(end, active);
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <span className="font-display text-[2.25rem] font-extrabold leading-none tracking-tight text-intellectual sm:text-[2.75rem]">
        {val.toLocaleString()}
        {suffix}
      </span>
      <span className="text-[0.8125rem] text-slate-500">{label}</span>
    </div>
  );
}

export function StatsStrip() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as RefObject<HTMLElement>}
      className="border-y border-surface-warm bg-white py-8 sm:py-10"
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

## Task 7 — `app/page.tsx` 引入 StatsStrip

在文件顶部 import 区域加：
```typescript
import { StatsStrip } from "@/components/StatsStrip";
```

在 JSX 中，将 `<StatsStrip />` 插入到 `<ParentJourneyStrip />` 和 `<DsaExplainerSection />` 之间：
```tsx
<ParentJourneyStrip />
<StatsStrip />          {/* ← 新增这行 */}
<DsaExplainerSection />
```

---

## Task 8 — `components/DsaExplainerSection.tsx` 滚动入场动画

**Step 8-1：** 在文件顶部 import 区域加：
```typescript
import type { RefObject } from "react";
import { useInView } from "@/hooks/useInView";
```

**Step 8-2：** 在 `DsaExplainerSection` 函数体内，`useLanguage()` 之后加：
```typescript
const { ref: cardsRef, inView: cardsInView } = useInView();
```

**Step 8-3：** 找到渲染三个步骤卡片的 `<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">`，加上 ref：
```tsx
<div
  ref={cardsRef as RefObject<HTMLDivElement>}
  className="grid grid-cols-1 gap-4 sm:grid-cols-3"
>
```

**Step 8-4：** 三个卡片（`DSA_STEPS.map` 内的 `<div key={step.number} className="rounded-xl ...">`）按顺序加入动画 class。用 index 判断：
```tsx
{DSA_STEPS.map((step, index) => (
  <div
    key={step.number}
    className={`rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card transition hover:shadow-card-hover transition-transform duration-200 hover:-translate-y-0.5 ${
      cardsInView
        ? `animate-fade-up ${index === 1 ? 'animate-fade-up-delay-1' : index === 2 ? 'animate-fade-up-delay-2' : ''}`
        : 'opacity-0'
    }`}
  >
```

---

## Task 9 — `components/DsaStrategySection.tsx` 滚动入场动画

与 Task 8 相同的模式，对 persona 卡片组做同样处理：

**Step 9-1：** import 区域加：
```typescript
import type { RefObject } from "react";
import { useInView } from "@/hooks/useInView";
```

**Step 9-2：** 函数体内加：
```typescript
const { ref: personaRef, inView: personaInView } = useInView();
```

**Step 9-3：** 找到渲染 persona 卡片的最外层 grid `<div>`，加 `ref={personaRef as RefObject<HTMLDivElement>}`。

**Step 9-4：** 每个 persona 卡片按 index（0-3）加入动画 class：
```tsx
className={`... ${
  personaInView
    ? `animate-fade-up ${
        index === 1 ? 'animate-fade-up-delay-1' :
        index === 2 ? 'animate-fade-up-delay-2' :
        index === 3 ? 'animate-fade-up-delay-3' : ''
      }`
    : 'opacity-0'
}`}
```

---

## 完成后执行

```bash
npx tsc --noEmit
npm run build
```

两条命令均无报错后，通知我来做视觉检查。
