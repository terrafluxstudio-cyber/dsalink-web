# Cursor Task: Wizard UX 修复（取代旧版 CURSOR_TASK_wizard_fixes.md）

## ⚠️ 重要说明
此任务**取代**旧版 `CURSOR_TASK_wizard_fixes.md`。旧版中的"Fix 3: 补位到6所学校"**不执行**，其余修复已更新如下。

## 涉及文件
- `app/page.tsx`
- `components/SchoolFinderWizard.tsx`

两文件独立，可并行修改。

---

## 修复 1：`app/page.tsx` — OpenHouseFieldGuide 提前

当前顺序找到：
```tsx
<HomepageSubscribeBanner />
<OpenHouseFieldGuide />
<DsaExperienceCallout />
```

改为（把 OpenHouseFieldGuide 提到 StatsStrip 之后）：
```tsx
<StatsStrip />
<OpenHouseFieldGuide />
<DsaExplainerSection />
<DsaStrategySection />
<HomepageSubscribeBanner />
<DsaExperienceCallout />
```

---

## 修复 2：`components/SchoolFinderWizard.tsx` — 选中才能区域后可清除（×）

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

替换为（badge 变为可点击清除，阻止事件冒泡）：
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

## 修复 3：`components/SchoolFinderWizard.tsx` — "No thanks" 按钮有效

**问题**：`onEmailSkip={() => {}}` 是空函数，点击后 EmailCapture 不消失。

**Step A**：在组件顶部 state 声明区，找到 `const [result, setResult]...` 附近，追加：
```tsx
const [emailSkipped, setEmailSkipped] = useState(false);
```

**Step B**：在 results phase 的 JSX 渲染中，找到 `<ResultsView` 的调用（大约第353行）：
```tsx
<ResultsView result={result} alScore={alScore} onEmailSubmit={handleEmailSubmit} onEmailSkip={() => {}} />
```
改为：
```tsx
{!emailSkipped && (
  <ResultsView
    result={result}
    alScore={alScore}
    onEmailSubmit={handleEmailSubmit}
    onEmailSkip={() => setEmailSkipped(true)}
  />
)}
```

**Step C**：在 "Start over" 按钮的 onClick 中，找到现有 reset 代码，追加 `setEmailSkipped(false)`：
```tsx
onClick={() => {
  postedRef.current = false;
  setPhase("wizard");
  setStep(1);
  setResult(null);
  setCurrentTalentIndex(0);
  setEmailSkipped(false);  // ← 新增
}}
```

---

## 修复 4：`components/SchoolFinderWizard.tsx` — 才能区域搜索过滤

**Step A**：在组件顶部 state 区追加：
```tsx
const [areaFilter, setAreaFilter] = useState<Partial<Record<TalentCategory, string>>>({});
```

**Step B**：找到 Step 2 中 category 列表的 button onClick（控制 `setExpandedCategory`），把现有：
```tsx
onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
```
改为：
```tsx
onClick={() => {
  const next = isExpanded ? null : cat.id;
  setExpandedCategory(next);
  if (isExpanded) {
    setAreaFilter((prev) => {
      const n = { ...prev };
      delete n[cat.id];
      return n;
    });
  }
}}
```

**Step C**：在 `{isExpanded && (` 的展开内容块里，找到 `areas.map(...)` 之前，插入 filter input：

在 `<div className="max-h-56 space-y-1.5 overflow-y-auto border-t ...">`  **之前**插入：
```tsx
<div className="border-b border-[#e3ded5] bg-white px-4 pt-3 pb-2">
  <input
    type="text"
    placeholder="Type to filter..."
    value={areaFilter[cat.id] ?? ""}
    onChange={(e) =>
      setAreaFilter((prev) => ({ ...prev, [cat.id]: e.target.value }))
    }
    className="w-full rounded-lg border border-[#e3ded5] bg-surface px-3 py-1.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-intellectual/40 focus:outline-none focus:ring-1 focus:ring-intellectual/10"
  />
</div>
```

**Step D**：在 `areas.map((area) =>` 处，把 `areas` 改为 filtered 版本。在 map 之前加：
```tsx
const filteredAreas = areas.filter((a) =>
  a.toLowerCase().includes((areaFilter[cat.id] ?? "").toLowerCase())
);
```
然后把 `areas.map(...)` 改为 `filteredAreas.map(...)`，内容不变。

---

## 验证步骤
1. `npm run build` — 无 TS 错误
2. 主页 Open House Field Guide section 出现在 StatsStrip 之后（前半段）
3. Step 2 展开任意 category：顶部出现 filter input，输入 "dance" 过滤出舞蹈项目
4. 选中一个 area 后，badge 显示 "✓ [名称] ×"，点击 × 清除选择
5. 完成 wizard 到结果页，点击 "No thanks"：EmailCapture 区域消失；点 "Start over" 重新走流程，EmailCapture 重新显示
