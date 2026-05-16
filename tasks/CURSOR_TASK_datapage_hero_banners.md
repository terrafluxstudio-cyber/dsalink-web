# CURSOR TASK: 数据页视觉升级 — Schools / Scores / Open Houses 页面顶部权威 Banner

## 任务描述
Schools、Scores、Open Houses 三个数据页面目前顶部缺乏视觉冲击力，仅有基础 PageHeader。为每个页面的顶部区域添加一条深色（`bg-intellectual`）数据 Banner，包含页面核心统计数字，体现权威感和高级感。同时收紧各数据页的 section padding。

## 涉及文件
- `components/SchoolsDirectory.tsx`（或 `app/schools/page.tsx` 中靠近顶部的位置）
- `components/ScoresPageBody.tsx`
- `components/OpenHousesDirectory.tsx`

> 注意：优先在各页面的 PageHeader/kicker 区域紧下方插入 Banner。如果 PageHeader 是独立组件，在页面组件中 PageHeader 之后插入。

---

## Banner 组件模板（三个页面各自使用，内容不同）

Banner 样式统一，内容各异。以下是复用模板：

```tsx
{/* ── Authority stat banner ── */}
<div className="border-b border-intellectual/20 bg-intellectual px-4 py-4 sm:px-6">
  <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-8 gap-y-2">
    {/* Stat 1 */}
    <div className="flex items-baseline gap-1.5">
      <span className="font-display text-2xl font-extrabold text-champagne">147</span>
      <span className="text-[0.8125rem] text-white/70">
        {/* locale-specific label */}
      </span>
    </div>
    {/* Divider */}
    <div className="hidden h-5 w-px bg-white/20 sm:block" />
    {/* Stat 2 */}
    ...
    {/* MOE badge */}
    <div className="ml-auto flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1">
      <span className="text-[0.75rem] font-semibold text-white/80">MOE Data 2026</span>
    </div>
  </div>
</div>
```

---

## Schools 页面 Banner

**插入位置：** `SchoolsDirectory.tsx` 最顶部（在 `<section>` 内的第一个子元素之前），或 `app/schools/page.tsx` 的主要内容区顶部。

**Banner 内容（EN/ZH 行内双语）：**

```tsx
<div className="border-b border-intellectual/20 bg-intellectual px-4 py-4 sm:px-6">
  <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2">
    <div className="flex items-baseline gap-1.5">
      <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">147</span>
      <span className="text-[0.8125rem] text-white/70">
        {locale === "zh" ? "所中学" : "secondary schools"}
      </span>
    </div>
    <div className="hidden h-4 w-px bg-white/20 sm:block" />
    <div className="flex items-baseline gap-1.5">
      <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">2025</span>
      <span className="text-[0.8125rem] text-white/70">
        {locale === "zh" ? "年 PSLE COP 数据" : "PSLE COP data"}
      </span>
    </div>
    <div className="hidden h-4 w-px bg-white/20 sm:block" />
    <div className="flex items-baseline gap-1.5">
      <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">1,300+</span>
      <span className="text-[0.8125rem] text-white/70">
        {locale === "zh" ? "个 DSA 才艺方向" : "DSA talent areas"}
      </span>
    </div>
    <div className="ml-auto flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1">
      <span className="text-[0.6875rem] font-semibold uppercase tracking-wide text-white/80">MOE Data · 2026</span>
    </div>
  </div>
</div>
```

---

## Scores 页面 Banner

**插入位置：** `ScoresPageBody.tsx` 中 `<PageHeader>` 或 kicker/H1 区域的正下方，在 ScoreBoard 组件之前。

```tsx
<div className="border-b border-intellectual/20 bg-intellectual px-4 py-4 sm:px-6">
  <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2">
    <div className="flex items-baseline gap-1.5">
      <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">147</span>
      <span className="text-[0.8125rem] text-white/70">
        {locale === "zh" ? "所中学" : "schools tracked"}
      </span>
    </div>
    <div className="hidden h-4 w-px bg-white/20 sm:block" />
    <div className="flex items-baseline gap-1.5">
      <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">3</span>
      <span className="text-[0.8125rem] text-white/70">
        {locale === "zh" ? "年数据（2023–2025）" : "years of data (2023–2025)"}
      </span>
    </div>
    <div className="hidden h-4 w-px bg-white/20 sm:block" />
    <div className="flex items-baseline gap-1.5">
      <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">AL</span>
      <span className="text-[0.8125rem] text-white/70">
        {locale === "zh" ? "分组截分 · 年度对比" : "posting bands · YoY delta"}
      </span>
    </div>
    <div className="ml-auto flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1">
      <span className="text-[0.6875rem] font-semibold uppercase tracking-wide text-white/80">MOE Data · 2023–2025</span>
    </div>
  </div>
</div>
```

---

## Open Houses 页面 Banner

**插入位置：** `OpenHousesDirectory.tsx` 的顶部，或 `app/open-houses/page.tsx` 主区域顶部，在 directory listing 之前。

```tsx
<div className="border-b border-intellectual/20 bg-intellectual px-4 py-4 sm:px-6">
  <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2">
    <div className="flex items-baseline gap-1.5">
      <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">147</span>
      <span className="text-[0.8125rem] text-white/70">
        {locale === "zh" ? "所中学" : "secondary schools"}
      </span>
    </div>
    <div className="hidden h-4 w-px bg-white/20 sm:block" />
    <div className="flex items-baseline gap-1.5">
      <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">
        {locale === "zh" ? "2026年5月" : "May 2026"}
      </span>
      <span className="text-[0.8125rem] text-white/70">
        {locale === "zh" ? "· 全岛开放日" : "· island-wide open houses"}
      </span>
    </div>
    <div className="hidden h-4 w-px bg-white/20 sm:block" />
    <div className="flex items-baseline gap-1.5">
      <span className="text-[0.8125rem] text-white/70">
        {locale === "zh" ? "DSA & 招生直链" : "DSA & admissions links"}
      </span>
    </div>
    <div className="ml-auto flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1">
      <span className="text-[0.6875rem] font-semibold uppercase tracking-wide text-white/80">MOE Directory · 2026</span>
    </div>
  </div>
</div>
```

---

## 语言 Hook 引入

这三个文件需要引入 `useLanguage`（如尚未引入）：

```tsx
import { useLanguage } from "@/contexts/LanguageContext";
// 组件内：
const { locale } = useLanguage();
// 如已是 server component 则改为 client component：在文件顶部加 "use client";
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] `/schools` 页面顶部出现深蓝色 banner，含 147 / 2025 / 1,300+ 数据
- [ ] `/scores` 页面顶部出现深蓝色 banner，含 147 / 3年 / AL 数据
- [ ] `/open-houses` 页面顶部出现深蓝色 banner，含 147 / May 2026 数据
- [ ] 切换至中文，banner 内文字正确切换
- [ ] 移动端（375px）banner 数据自动换行，不溢出
- [ ] 金色数字（`text-champagne`）在深蓝背景上清晰可读
