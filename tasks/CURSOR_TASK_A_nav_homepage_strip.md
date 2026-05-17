# Cursor Task A：导航入口 + 主页 FeaturedGuideStrip

## 涉及文件（与 Task B / Task C 完全不重叠，可并行执行）
- `lib/i18n.ts`
- `components/SiteHeader.tsx`
- `components/FeaturedGuideStrip.tsx` （新建）
- `app/page.tsx`

---

## 改动 1：`lib/i18n.ts` — 新增 i18n keys

在 `DsaGuideStrings` type 定义中（有 `navDsaGuide: string;` 那行），**在其后追加**：

```ts
navDsaExperience: string;
featuredGuideKicker: string;
featuredGuideTitle: string;
featuredGuideCta: string;
```

然后在四个 locale 对象中各添加（和 `navDsaGuide` 同一位置附近）：

**EN locale：**
```ts
navDsaExperience: "Parent Playbook",
featuredGuideKicker: "Featured guide",
featuredGuideTitle: "The DSA Parent Playbook — everything in one place",
featuredGuideCta: "Read now",
```

**ZH locale：**
```ts
navDsaExperience: "家长实战指南",
featuredGuideKicker: "精选指南",
featuredGuideTitle: "DSA 家长实战手册——全程攻略一册收录",
featuredGuideCta: "立即阅读",
```

**MS locale：**
```ts
navDsaExperience: "Panduan Ibu Bapa",
featuredGuideKicker: "Panduan pilihan",
featuredGuideTitle: "Buku Panduan DSA untuk Ibu Bapa — semua dalam satu tempat",
featuredGuideCta: "Baca sekarang",
```

**TA locale：**
```ts
navDsaExperience: "பெற்றோர் வழிகாட்டி",
featuredGuideKicker: "சிறப்பு வழிகாட்டி",
featuredGuideTitle: "DSA பெற்றோர் கையேடு — அனைத்தும் ஒரே இடத்தில்",
featuredGuideCta: "இப்போது படிக்கவும்",
```

---

## 改动 2：`components/SiteHeader.tsx` — 在 navLinks 中插入入口

找到 `navLinks` 数组，在 `{ href: "/dsa-guide", label: t.navDsaGuide }` **后面**插入：

```ts
{ href: "/dsa-experience", label: t.navDsaExperience },
```

---

## 改动 3：新建 `components/FeaturedGuideStrip.tsx`

```tsx
"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturedGuideStrip() {
  const { t } = useLanguage();

  return (
    <div className="border-y border-champagne/20 bg-champagne/8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:flex-nowrap sm:px-6">
        {/* Left: icon + text */}
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-champagne/20 text-champagne-dark">
            <BookOpen className="h-4 w-4" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-champagne-dark">
              {t.featuredGuideKicker}
            </p>
            <p className="truncate text-sm font-semibold text-slate-800">
              {t.featuredGuideTitle}
            </p>
          </div>
        </div>

        {/* Right: CTA */}
        <Link
          href="/dsa-experience"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-champagne/40 bg-white px-4 py-1.5 text-xs font-semibold text-intellectual transition hover:border-champagne hover:bg-champagne/10"
        >
          {t.featuredGuideCta}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
```

---

## 改动 4：`app/page.tsx` — 插入 FeaturedGuideStrip

**Import 区域**加入：
```tsx
import { FeaturedGuideStrip } from "@/components/FeaturedGuideStrip";
```

在 `<ParentJourneyStrip />` 和 `<StatsStrip />` **之间**插入：
```tsx
<FeaturedGuideStrip />
```

---

## 验证步骤
1. `npm run build` — 无 TS 错误
2. 导航栏出现 "Parent Playbook" / "家长实战指南"（按语言切换正确）
3. 主页 ParentJourneyStrip 下方出现金色细条横幅，点击跳转到 `/dsa-experience`
4. 确认导航链接 `/dsa-experience` 可访问
