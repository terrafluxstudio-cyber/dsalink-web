# Cursor Task: Wizard 三处修复

## 涉及文件
- `app/page.tsx`
- `components/SchoolFinderWizard.tsx`
- `lib/recommend.ts`

三个文件互相独立，可并行修改。

---

## 修复 1：`app/page.tsx` — OpenHouseFieldGuide 提前

当前顺序（找到以下几行）：
```tsx
<HomepageSubscribeBanner />
<OpenHouseFieldGuide />
<DsaExperienceCallout />
```

**改为**（把 OpenHouseFieldGuide 提到 StatsStrip 之后）：
```tsx
<OpenHouseFieldGuide />
<DsaExplainerSection />
<DsaStrategySection />
<HomepageSubscribeBanner />
<DsaExperienceCallout />
```

即最终主页 section 顺序为：
```
HeroSection
ParentJourneyStrip
FeaturedGuideStrip
StatsStrip
OpenHouseFieldGuide   ← 提前到这里
DsaExplainerSection
DsaStrategySection
HomepageSubscribeBanner
DsaExperienceCallout
SeoTextBlock
ResourceCards
```

---

## 修复 2：`components/SchoolFinderWizard.tsx` — 选中后可清除

**问题**：Step 2 才能展区，选了某个 area 后 badge 只能 toggle，没有清除方式。

找到 Step 2 中渲染已选 badge 的部分：
```tsx
{selectedArea ? (
  <span className="rounded-full bg-champagne/15 px-2.5 py-0.5 text-[11px] font-semibold text-champagne-dark">
    ✓ {selectedArea}
  </span>
) : (
  <span className="text-slate-400 text-lg leading-none">{isExpanded ? "−" : "+"}</span>
)}
```

**替换为**（badge 变成可点击的 × 清除按钮，阻止事件冒泡避免同时 toggle 折叠）：
```tsx
{selectedArea ? (
  <span
    role="button"
    tabIndex={0}
    aria-label={`Clear ${selectedArea}`}
    onClick={(e) => {
      e.stopPropagation();
      setAreaByCategory((prev) => {
        const next = { ...prev };
        delete next[cat.id];
        return next;
      });
      setExpandedCategory(null);
    }}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.stopPropagation();
        setAreaByCategory((prev) => {
          const next = { ...prev };
          delete next[cat.id];
          return next;
        });
        setExpandedCategory(null);
      }
    }}
    className="flex cursor-pointer items-center gap-1 rounded-full bg-champagne/15 pl-2.5 pr-1.5 py-0.5 text-[11px] font-semibold text-champagne-dark transition hover:bg-red-100 hover:text-red-600"
  >
    ✓ {selectedArea}
    <span className="ml-0.5 text-[13px] leading-none">×</span>
  </span>
) : (
  <span className="text-slate-400 text-lg leading-none">{isExpanded ? "−" : "+"}</span>
)}
```

---

## 修复 3：`lib/recommend.ts` — 保证至少 6 所学校

**问题**：safe/reach/dream 各取 top 2，但若某 tier 候选不足，总数会低于 6。

找到 non-eliteMode 的选校结束位置（`dream = sortDream(...).slice(0, 2)...` 之后），在 `// Step 6c: Special schools` 注释**之前**插入以下补位逻辑：

```ts
  // Step 6d: Top-up to minimum 6 schools if needed
  const totalMainSchools = safe.length + reach.length + dream.length;
  if (!eliteMode && totalMainSchools < 6) {
    const shownSlugs = new Set([...safe, ...reach, ...dream].map((s) => s.slug));
    const remaining = candidates
      .filter((c) => !shownSlugs.has(c.school.slug))
      .sort((a, b) => {
        if (b.weight !== a.weight) return b.weight - a.weight;
        return a.medianCop - b.medianCop;
      });
    const needed = 6 - totalMainSchools;
    const extras = remaining.slice(0, needed);
    for (const c of extras) {
      const t = c.school.tier as "safe" | "reach" | "dream";
      if (t === "safe") safe = [...safe, c.school];
      else if (t === "reach") reach = [...reach, c.school];
      else dream = [...dream, c.school];
    }
  }
```

**注意**：`eliteMode` 已有独立的 `top6 = sorted.slice(0, 6)` 逻辑，不需要修改。

---

## 验证步骤
1. `npm run build` — 无 TS 错误
2. **修复 1**：主页滚动，Open House Field Guide 出现在 StatsStrip 之后（较早位置）
3. **修复 2**：在 wizard Step 2 选中一个才能区域，badge 上出现 × 符号；点击 × 后选择被清除，其他已选项不受影响
4. **修复 3**：在 wizard 完成全流程（选 Debate + STEM 等小众才能），推荐结果页面总显示至少 6 所学校（safe + reach + dream 合计）
