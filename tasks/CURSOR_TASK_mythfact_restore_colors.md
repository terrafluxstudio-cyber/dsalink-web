# CURSOR TASK: Myth/Fact 卡片恢复语义色（红/绿）

## 问题
上一版将 Myth/Fact 卡片改为品牌色（intellectual 蓝 / champagne 金），
视觉区分度下降，用户反馈"不如原来醒目好看"。
Myth = 错误观念，语义应为红色；Fact = 正确事实，语义应为绿色。
恢复语义配色，使用更柔和的色调（非刺眼的饱和红/绿）。

## 涉及文件
- `components/DsaExplainerSection.tsx`（第 230 行附近）

---

## 改动

### Myth 卡 — 恢复柔和红色

**改前：**
```tsx
<div className="mb-4 rounded-lg border border-intellectual/15 bg-intellectual/8 p-3">
  <p className="mb-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-intellectual">
    <X className="h-3.5 w-3.5" aria-hidden />
    {locale === "zh" ? "误解" : "Myth"}
  </p>
```
**改后：**
```tsx
<div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3">
  <p className="mb-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-red-600">
    <X className="h-3.5 w-3.5" aria-hidden />
    {locale === "zh" ? "误解" : "Myth"}
  </p>
```

Myth 正文颜色保持不变（`text-slate-700`）。

### Fact 卡 — 恢复柔和绿色

**改前：**
```tsx
<div className="rounded-lg border border-champagne/30 bg-champagne/10 p-3">
  <p className="mb-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-champagne-dark">
    <Check className="h-3.5 w-3.5" aria-hidden />
    {locale === "zh" ? "事实" : "Fact"}
  </p>
```
**改后：**
```tsx
<div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
  <p className="mb-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-emerald-700">
    <Check className="h-3.5 w-3.5" aria-hidden />
    {locale === "zh" ? "事实" : "Fact"}
  </p>
```

Fact 正文颜色保持不变（`text-slate-700`）。

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] Myth 区域背景浅红（`bg-red-50`），标签文字深红（`text-red-600`）
- [ ] Fact 区域背景浅绿（`bg-emerald-50`），标签文字深绿（`text-emerald-700`）
- [ ] 视觉区分度明显，正文文字仍为 `text-slate-700`
