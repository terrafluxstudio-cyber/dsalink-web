# Cursor Task B：DsaExperiencePageBody 渲染器升级

## 涉及文件（仅此一个文件，与 Task A / Task C 完全不重叠，可并行执行）
- `components/DsaExperiencePageBody.tsx`

---

## 改动 1：Import 增加图标

在文件顶部 import 的 lucide-react 行，加入 `BookMarked`：

```ts
import { AlertCircle, BookMarked, GraduationCap, Lightbulb, Users } from "lucide-react";
```

---

## 改动 2：新增 `stats` 渲染块

在渲染 `{section.paragraphs.map(...)` 之后、`{section.callouts?.map(...)` 之前，插入：

```tsx
{section.stats && (
  <div
    className={`grid gap-4 rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card ${
      section.stats.length === 1
        ? "max-w-[14rem] grid-cols-1"
        : section.stats.length === 2
        ? "grid-cols-2"
        : "grid-cols-3"
    }`}
  >
    {section.stats.map((stat) => (
      <div key={stat.value} className="flex flex-col items-center py-2 text-center">
        <span className="font-display text-3xl font-extrabold tabular-nums text-intellectual">
          {stat.value}
        </span>
        <span className="mt-1 text-xs leading-snug text-slate-500">{stat.label}</span>
      </div>
    ))}
  </div>
)}
```

---

## 改动 3：新增 `examples` 渲染块

在 `{section.bullets ? (...)` 块之后，插入：

```tsx
{section.examples?.map((ex, i) => (
  <div
    key={i}
    className="rounded-xl border border-champagne/30 bg-surface-warm px-5 py-4"
  >
    <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-champagne-dark">
      <BookMarked className="h-3.5 w-3.5 shrink-0" aria-hidden />
      {ex.label ?? "Real-world example"}
    </p>
    <p className="text-[0.9375rem] leading-relaxed text-slate-700 italic">
      {ex.body}
    </p>
  </div>
))}
```

---

## 改动 4：替换 section-6 静态表格为响应式时间轴

找到：
```tsx
{section.id === "section-6" ? (
  <div className="overflow-x-auto rounded-xl border border-[#e3ded5] bg-white shadow-card">
    <table ...>
      ...
    </table>
  </div>
) : null}
```

**替换为：**

```tsx
{section.id === "section-6" ? (
  <>
    {/* Desktop: horizontal timeline (md and above) */}
    <div className="hidden md:block overflow-x-auto">
      <div className="relative flex min-w-max gap-0">
        {timeline.map((row, i) => (
          <div
            key={row.date}
            className="relative flex flex-1 flex-col items-center min-w-[9rem] px-2"
          >
            {/* Connector line */}
            {i < timeline.length - 1 && (
              <div className="absolute top-[1.375rem] left-1/2 h-0.5 w-full bg-slate-200 z-0" />
            )}
            {/* Step dot */}
            <div
              className={`relative z-10 mb-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                i === 0
                  ? "border-champagne bg-champagne text-intellectual"
                  : "border-intellectual bg-intellectual text-white"
              }`}
            >
              {i + 1}
            </div>
            {/* Date */}
            <p className="mb-1 text-center text-[0.6875rem] font-semibold tabular-nums text-intellectual">
              {row.date}
            </p>
            {/* Milestone */}
            <p className="text-center text-xs leading-snug text-slate-600">
              {row.milestone}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Mobile: vertical timeline */}
    <div className="md:hidden space-y-0">
      {timeline.map((row, i) => (
        <div key={row.date} className="flex gap-4">
          {/* Left axis: dot + line */}
          <div className="flex flex-col items-center">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                i === 0
                  ? "border-champagne bg-champagne text-intellectual"
                  : "border-intellectual bg-intellectual text-white"
              }`}
            >
              {i + 1}
            </div>
            {i < timeline.length - 1 && (
              <div className="w-0.5 flex-1 bg-slate-200 my-1" />
            )}
          </div>
          {/* Right: content */}
          <div className="pb-6 pt-0.5 min-w-0">
            <p className="text-xs font-semibold tabular-nums text-intellectual">
              {row.date}
            </p>
            <p className="mt-0.5 text-[0.9375rem] leading-relaxed text-slate-600">
              {row.milestone}
            </p>
          </div>
        </div>
      ))}
    </div>
  </>
) : null}
```

---

## 验证步骤
1. `npm run build` — 无 TS 错误（注意：`stats` 和 `examples` 字段在 Task C 完成前 TS 会报错，可先用 `section.stats as any` 临时跳过，或等 Task C 完成后再合并验证）
2. 访问 `/dsa-experience` → section-6 时间轴在桌面端显示为横向步骤图，移动端显示为纵向
3. 控制台无报错
