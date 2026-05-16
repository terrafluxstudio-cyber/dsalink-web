# CURSOR TASK: 首页视觉一致性修复（5处）

## 涉及文件
- `components/StatsStrip.tsx`
- `components/HeroSection.tsx`
- `components/DsaExplainerSection.tsx`

---

## 改动 1 — StatsStrip 改为深蓝底

**文件：** `components/StatsStrip.tsx`

**改前：**
```tsx
className="border-y border-surface-warm bg-white py-8 sm:py-10"
```
**改后：**
```tsx
className="border-y border-intellectual/20 bg-intellectual py-8 sm:py-10"
```

`StatItem` 内两处文字颜色：

**改前：**
```tsx
className="font-display text-[2.25rem] font-extrabold leading-none tracking-tight text-intellectual sm:text-[2.75rem]"
```
**改后：**
```tsx
className="font-display text-[2.25rem] font-extrabold leading-none tracking-tight text-white sm:text-[2.75rem]"
```

**改前：**
```tsx
<span className="text-[0.8125rem] text-slate-500">{label}</span>
```
**改后：**
```tsx
<span className="text-[0.8125rem] text-white/55">{label}</span>
```

---

## 改动 2 — Hero Badge 改为深色胶囊

**文件：** `components/HeroSection.tsx`

**改前：**
```tsx
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-champagne/30 bg-champagne-subtle px-3 py-1 text-xs font-semibold text-champagne-dark">
```
**改后：**
```tsx
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-intellectual px-3 py-1 text-xs font-semibold text-white">
```

---

## 改动 3 — 删除 Hero 重复 CTA

**文件：** `components/HeroSection.tsx`

删除以下整块（Secondary CTAs，位于 `<HomeCtaBlock />` 之后）：

```tsx
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
```

---

## 改动 4 — Explainer H2 去重复

**文件：** `components/DsaExplainerSection.tsx`

**改前（第 83 行附近）：**
```tsx
: "Your child has a talent. There are schools that want exactly that."}
```
**改后：**
```tsx
: "Before PSLE results day, the right school can already say yes."}
```

中文版（同一行的三元表达式前半部分）：

**改前：**
```tsx
locale === "zh"
  ? "孩子有才艺，就有学校等着他"
```
**改后：**
```tsx
locale === "zh"
  ? "PSLE 放榜前，孩子的才能就能锁定学校"
```

---

## 改动 5 — Myth/Fact 卡片改为品牌色

**文件：** `components/DsaExplainerSection.tsx`（第 230 行附近）

**Myth 卡改前：**
```tsx
<div className="mb-4 rounded-lg border border-red-100 bg-red-50 p-3">
```
**改后：**
```tsx
<div className="mb-4 rounded-lg border border-intellectual/15 bg-intellectual/8 p-3">
```

Myth 标签改前（`text-red-500`）：
```tsx
className="mr-1.5 text-red-500"
```
**改后：**
```tsx
className="mr-1.5 text-intellectual"
```

Myth 文字颜色改前（`text-slate-700`）— 保持不变。

**Fact 卡改前：**
```tsx
<div className="rounded-lg border border-green-100 bg-green-50 p-3">
```
**改后：**
```tsx
<div className="rounded-lg border border-champagne/30 bg-champagne/10 p-3">
```

Fact 标签改前（`text-green-600`）：
```tsx
className="mr-1.5 text-green-600"
```
**改后：**
```tsx
className="mr-1.5 text-champagne-dark"
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] Stats Strip 显示为深蓝底白字
- [ ] Hero Badge 显示为深蓝底白字胶囊
- [ ] Hero 暗卡下方重复按钮已消失
- [ ] Explainer H2 不再与 Hero H1 重复
- [ ] Myth/Fact 卡片颜色与品牌深蓝/金色一致，无粉红/绿色
