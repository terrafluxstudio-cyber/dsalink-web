# CURSOR TASK: DsaStrategySection 间距收紧 + 视觉强化

## 任务描述
`DsaStrategySection.tsx` 垂直间距过大，整体偏松散。收紧 section padding 和内部间距，同时强化 Insight callout 和 Persona 区域的视觉层级感。不改变组件逻辑和文案。

## 涉及文件
- `components/DsaStrategySection.tsx`

---

## 改动清单

### 1. Section 根元素：收紧 padding
**改前：**
```tsx
<section className="border-t border-surface-warm bg-white py-12 sm:py-16">
```
**改后：**
```tsx
<section className="border-t border-surface-warm bg-white py-8 sm:py-12">
```

### 2. Section header：收紧下边距
**改前：**
```tsx
<div className="mb-10 max-w-2xl">
```
**改后：**
```tsx
<div className="mb-6 max-w-2xl">
```

### 3. Insight callout：加深背景色 + 收紧间距
**改前：**
```tsx
<div className="mb-10 rounded-2xl border border-intellectual/15 bg-intellectual/5 p-6 sm:p-8">
```
**改后：**
```tsx
<div className="mb-6 rounded-2xl border border-intellectual/20 bg-intellectual/8 p-5 sm:p-6">
```

### 4. PSLE vs DSA 对比区：收紧下边距
**改前：**
```tsx
<div className="mb-10">
```
**改后：**
```tsx
<div className="mb-6">
```

### 5. PSLE / DSA 卡片：收紧 padding
**改前（PSLE card）：**
```tsx
<div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
```
**改后：**
```tsx
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
```

**改前（DSA card）：**
```tsx
<div className="rounded-xl border border-champagne/30 bg-champagne-subtle p-5">
```
**改后：**
```tsx
<div className="rounded-xl border border-champagne/30 bg-champagne-subtle p-4">
```

**改前（Smart Strategy banner）：**
```tsx
<div className="mt-4 rounded-xl border border-intellectual/20 bg-intellectual p-5 sm:flex sm:items-center sm:gap-5">
```
**改后：**
```tsx
<div className="mt-3 rounded-xl border border-intellectual/20 bg-intellectual p-4 sm:flex sm:items-center sm:gap-5">
```

### 6. Persona header：收紧下边距
**改前：**
```tsx
<div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
```
**改后：**
```tsx
<div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
```

### 7. Persona card grid：收紧下边距 + card padding
**改前：**
```tsx
className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
```
**改后：**
```tsx
className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
```

**改前（每个 persona card）：**
```tsx
className={`flex flex-col rounded-xl border p-5 shadow-card ...`}
```
**改后：**
```tsx
className={`flex flex-col rounded-xl border p-4 shadow-card ...`}
```

### 8. Persona card 内部 Goal/Tip 区块：收紧
**改前：**
```tsx
<p className="rounded-lg bg-white/70 px-3 py-2 text-[0.8125rem] text-slate-700">
```
**改后（Goal 和 Tip 两处都改）：**
```tsx
<p className="rounded-lg bg-white/70 px-2.5 py-1.5 text-[0.8125rem] text-slate-700">
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] 本地 `npm run dev`，首页 Strategy section 整体高度明显缩短
- [ ] 4个 Persona 卡片在桌面端 4 列布局正常
- [ ] Insight callout 背景色比之前稍深，更有层次感
- [ ] Smart Strategy navy banner 在移动端仍然正常显示
