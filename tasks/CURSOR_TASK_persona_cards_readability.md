# CURSOR TASK: Persona 卡片 — 双列布局 + 字号可读性优化

## 问题
- 四列布局下每张卡片约 220px 宽，中文长文本跑出边界或被截断
- 字号 13px（text-[0.8125rem]）对老花眼家长过小，目标最小 14px
- leading-snug 在中文段落中行距过紧

## 涉及文件
- `components/DsaStrategySection.tsx`

---

## 改动 1 — 网格从 4 列改为最多 2 列

**找到：**
```tsx
className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
```
**改为：**
```tsx
className="mb-6 grid gap-4 sm:grid-cols-2"
```

---

## 改动 2 — 卡片内容字号 + 行距整体提升

在 `PERSONA_KEYS.map(...)` 渲染的卡片内部，进行以下三处替换：

### 2a — tag 标签字号（10px → 11px）
**改前：**
```tsx
<span className={`mb-2 self-start rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${tagAccent}`}>
```
**改后：**
```tsx
<span className={`mb-2 self-start rounded-full px-2.5 py-1 text-[11px] font-semibold ${tagAccent}`}>
```

### 2b — 标题字号（0.9375rem → 1rem）
**改前：**
```tsx
<h4 className="mb-2 font-display text-[0.9375rem] font-semibold text-slate-900">
```
**改后：**
```tsx
<h4 className="mb-3 font-display text-base font-semibold text-slate-900">
```

### 2c — who 描述文字（13px leading-snug → 14px leading-relaxed）
**改前：**
```tsx
<p className="mb-2 text-[0.8125rem] leading-snug text-slate-600">{t[keys.whoKey]}</p>
```
**改后：**
```tsx
<p className="mb-3 text-sm leading-relaxed text-slate-600">{t[keys.whoKey]}</p>
```

### 2d — 目标/建议 box 文字（13px → 14px，行距放宽）
**改前：**
```tsx
<p className="rounded-lg bg-white/70 px-2.5 py-1.5 text-[0.8125rem] text-slate-700">
  <span className="font-semibold text-slate-900">{t.dsaStrategyGoalLabel}</span>{" "}
  {t[keys.goalKey]}
</p>
<p className="rounded-lg bg-white/70 px-2.5 py-1.5 text-[0.8125rem] text-slate-600">
  <span className="font-semibold text-slate-900">{t.dsaStrategyTipLabel}</span>{" "}
  {t[keys.tipKey]}
</p>
```
**改后：**
```tsx
<p className="rounded-lg bg-white/70 px-3 py-2 text-sm leading-relaxed text-slate-700">
  <span className="font-semibold text-slate-900">{t.dsaStrategyGoalLabel}</span>{" "}
  {t[keys.goalKey]}
</p>
<p className="rounded-lg bg-white/70 px-3 py-2 text-sm leading-relaxed text-slate-600">
  <span className="font-semibold text-slate-900">{t.dsaStrategyTipLabel}</span>{" "}
  {t[keys.tipKey]}
</p>
```

### 2e — CTA 按钮字号
**改前：**
```tsx
className="mt-1 block rounded-lg border border-intellectual/20 bg-white px-4 py-2 text-center text-[0.8125rem] font-semibold text-intellectual transition hover:bg-intellectual hover:text-white"
```
**改后：**
```tsx
className="mt-2 block rounded-lg border border-intellectual/20 bg-white px-4 py-2.5 text-center text-sm font-semibold text-intellectual transition hover:bg-intellectual hover:text-white"
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] 切换至中文，Persona 卡片以 2 列显示，无文字溢出
- [ ] 正文最小字号 14px，行距舒适
- [ ] 移动端仍为单列
