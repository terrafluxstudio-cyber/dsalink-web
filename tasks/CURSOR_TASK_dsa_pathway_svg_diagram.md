# CURSOR TASK: DSA vs PSLE 分叉路径 SVG 逻辑图

## 任务描述
在 `DsaExplainerSection.tsx` 的 section header 与三步流程卡片之间，插入一个 inline SVG 逻辑图，可视化展示"PSLE分配"与"DSA通道"两条路径的对比。同时收紧该组件的垂直间距。

## 涉及文件
- `components/DsaExplainerSection.tsx`

---

## 改动 1：插入 SVG 路径图

**位置：** 在 `<div className="mb-8">` 的 `.grid.sm:grid-cols-3`（三步卡片）之前插入。

**完整 JSX（直接插入到该 div 内，三步卡片 grid 的正上方）：**

```tsx
{/* ── Pathway diagram ──────────────────────────── */}
<div className="mb-5 overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4 sm:p-5">
  <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
    {locale === "zh" ? "中学升学：两条路径" : "Two pathways to secondary school"}
  </p>
  <div className="overflow-x-auto">
    <svg
      viewBox="0 0 560 124"
      className="mx-auto min-w-[300px] w-full max-w-2xl"
      aria-hidden
      role="img"
    >
      {/* ── P6 start node ── */}
      <rect x="2" y="44" width="104" height="36" rx="8" fill="#1e3a5f" />
      <text x="54" y="58" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">
        {locale === "zh" ? "P6 学生" : "P6 Student"}
      </text>
      <text x="54" y="72" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="7.5" fontFamily="system-ui, sans-serif">
        {locale === "zh" ? "任何小学均可" : "Any primary school"}
      </text>

      {/* ── Stem ── */}
      <line x1="106" y1="62" x2="138" y2="62" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="138" cy="62" r="4" fill="#94a3b8" />

      {/* ── Upper branch: PSLE (dashed / grey) ── */}
      <line x1="138" y1="62" x2="138" y2="30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />
      <line x1="138" y1="30" x2="198" y2="30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />

      {/* ── Lower branch: DSA (solid / gold) ── */}
      <line x1="138" y1="62" x2="138" y2="94" stroke="#c6a24a" strokeWidth="2" />
      <line x1="138" y1="94" x2="198" y2="94" stroke="#c6a24a" strokeWidth="2" />

      {/* ── PSLE card ── */}
      <rect x="198" y="12" width="138" height="36" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
      <text x="267" y="27" textAnchor="middle" fill="#64748b" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">
        {locale === "zh" ? "PSLE 统一分配" : "PSLE Posting"}
      </text>
      <text x="267" y="41" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">
        {locale === "zh" ? "分数决定学校 · 11月放榜" : "Score → school · November"}
      </text>

      {/* ── DSA card ── */}
      <rect x="198" y="76" width="138" height="36" rx="8" fill="#fef9ec" stroke="#c6a24a" strokeWidth="1.5" />
      <text x="267" y="91" textAnchor="middle" fill="#92701a" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">
        {locale === "zh" ? "DSA 直通通道" : "DSA Pathway"}
      </text>
      <text x="267" y="105" textAnchor="middle" fill="#a07820" fontSize="8" fontFamily="system-ui, sans-serif">
        {locale === "zh" ? "才能决定学校 · PSLE前锁定" : "Talent → school · Before PSLE"}
      </text>

      {/* ── Arrows to outcomes ── */}
      <line x1="336" y1="30" x2="360" y2="30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />
      <polygon points="358,27 366,30 358,33" fill="#94a3b8" />
      <line x1="336" y1="94" x2="360" y2="94" stroke="#c6a24a" strokeWidth="2" />
      <polygon points="358,91 366,94 358,97" fill="#c6a24a" />

      {/* ── Outcome: PSLE ── */}
      <rect x="366" y="12" width="188" height="36" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
      <text x="460" y="27" textAnchor="middle" fill="#475569" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">
        {locale === "zh" ? "与全体考生竞争分数" : "Compete with all P6 students"}
      </text>
      <text x="460" y="41" textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">
        {locale === "zh" ? "结果：2026年11月" : "Results day: November 2026"}
      </text>

      {/* ── Outcome: DSA ── */}
      <rect x="366" y="76" width="188" height="36" rx="8" fill="#fef9ec" stroke="#c6a24a" strokeWidth="1.5" />
      <text x="460" y="91" textAnchor="middle" fill="#92701a" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">
        {locale === "zh" ? "PSLE前已锁定学校" : "School secured before PSLE"}
      </text>
      <text x="460" y="105" textAnchor="middle" fill="#a07820" fontSize="7.5" fontFamily="system-ui, sans-serif">
        {locale === "zh" ? "才能 · 作品集 · 面试" : "Talent · Portfolio · Interview"}
      </text>
    </svg>
  </div>
</div>
```

---

## 改动 2：收紧该 section 垂直间距

**位置：** `DsaExplainerSection` 的 section 根元素。

**改前：**
```tsx
<section className="border-t border-surface-warm bg-white py-12 sm:py-16">
```
**改后：**
```tsx
<section className="border-t border-surface-warm bg-white py-8 sm:py-12">
```

**位置：** section header div
**改前：**
```tsx
<div className="mb-10 max-w-3xl">
```
**改后：**
```tsx
<div className="mb-6 max-w-3xl">
```

**位置：** 包裹三步卡片的外层 div
**改前：**
```tsx
<div className="mb-8">
```
**改后：**
```tsx
<div className="mb-6">
```

**位置：** Misconceptions 外层 div
**改前：**
```tsx
<div className="mb-10">
```
**改后：**
```tsx
<div className="mb-6">
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] 本地 `npm run dev`，首页 DsaExplainerSection 中可以看到 SVG 分叉路径图
- [ ] 切换语言至中文，SVG 内文字切换为中文
- [ ] 移动端（375px）：SVG 横向滚动或自适应缩小，不遮挡其他内容
- [ ] 整体 section 高度比之前缩短，间距更紧凑
