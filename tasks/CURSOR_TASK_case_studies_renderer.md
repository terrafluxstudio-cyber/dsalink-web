# Cursor Task: DSA Experience 案例卡片渲染器（运行顺序：content 任务 build 通过后再执行）

## 涉及文件
- `components/CaseStudyCard.tsx`（新建）
- `components/DsaExperiencePageBody.tsx`

---

## ⚠️ 前置条件
`CURSOR_TASK_case_studies_content.md` 必须先执行并 build 通过，因为本任务依赖 `DsaExperienceCaseStudy` 类型定义。

---

## 改动 1：新建 `components/CaseStudyCard.tsx`

```tsx
"use client";

import {
  AlertTriangle,
  Cpu,
  Music,
  Music2,
  Sword,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type CaseStudyIcon = "fencing" | "dance" | "robotics" | "music" | "leadership" | "risk";

const ICON_MAP: Record<CaseStudyIcon, LucideIcon> = {
  fencing: Sword,
  dance: Music,
  robotics: Cpu,
  music: Music2,
  leadership: Users,
  risk: AlertTriangle,
};

const STYLE_MAP: Record<
  CaseStudyIcon,
  { avatar: string; icon: string; badge: string }
> = {
  fencing: {
    avatar: "bg-red-100 border-red-200",
    icon: "text-red-600",
    badge: "bg-intellectual/10 text-intellectual",
  },
  dance: {
    avatar: "bg-pink-100 border-pink-200",
    icon: "text-pink-600",
    badge: "bg-intellectual/10 text-intellectual",
  },
  robotics: {
    avatar: "bg-purple-100 border-purple-200",
    icon: "text-purple-600",
    badge: "bg-intellectual/10 text-intellectual",
  },
  music: {
    avatar: "bg-blue-100 border-blue-200",
    icon: "text-blue-600",
    badge: "bg-intellectual/10 text-intellectual",
  },
  leadership: {
    avatar: "bg-emerald-100 border-emerald-200",
    icon: "text-emerald-600",
    badge: "bg-intellectual/10 text-intellectual",
  },
  risk: {
    avatar: "bg-amber-100 border-amber-200",
    icon: "text-amber-600",
    badge: "bg-amber-100 text-amber-800",
  },
};

interface CaseStudyCardProps {
  talentArea: string;
  icon: CaseStudyIcon;
  scenario: string;
  outcome: string;
  lesson?: string;
}

export function CaseStudyCard({
  talentArea,
  icon,
  scenario,
  outcome,
  lesson,
}: CaseStudyCardProps) {
  const IconComponent = ICON_MAP[icon];
  const styles = STYLE_MAP[icon];

  return (
    <div className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card transition hover:shadow-card-hover">
      {/* Avatar + title */}
      <div className="mb-4 flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${styles.avatar}`}
        >
          <IconComponent className={`h-5 w-5 ${styles.icon}`} aria-hidden />
        </div>
        <div>
          <p className="text-[0.8125rem] font-bold text-slate-900" style={{ textTransform: "none" }}>
            {talentArea}
          </p>
          <p className="text-[11px] uppercase tracking-[0.1em] text-slate-400">
            Real pathway
          </p>
        </div>
      </div>

      {/* Scenario */}
      <p className="mb-4 flex-1 text-[0.8125rem] leading-relaxed text-slate-600">
        {scenario}
      </p>

      {/* Outcome badge */}
      <div
        className={`mb-3 inline-block rounded-lg px-3 py-1.5 text-xs font-semibold ${styles.badge}`}
      >
        {outcome}
      </div>

      {/* Optional lesson */}
      {lesson && (
        <p className="border-t border-slate-100 pt-3 text-[11px] leading-snug text-slate-400 italic">
          <span className="font-semibold not-italic text-champagne-dark">Lesson: </span>
          {lesson}
        </p>
      )}
    </div>
  );
}
```

---

## 改动 2：`components/DsaExperiencePageBody.tsx` — 新增 import + 渲染

**Step A**：在文件顶部 import 区追加：
```tsx
import { CaseStudyCard } from "@/components/CaseStudyCard";
import type { DsaExperienceCaseStudy } from "@/content/dsa-experience";
```

**Step B**：在 section 渲染循环内，找到 `{section.examples?.map(...)` 块**之后**，插入 caseStudies 渲染：

```tsx
{section.caseStudies && (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {section.caseStudies.map((cs: DsaExperienceCaseStudy, i: number) => (
      <CaseStudyCard
        key={`${cs.talentArea}-${i}`}
        talentArea={cs.talentArea}
        icon={cs.icon}
        scenario={cs.scenario}
        outcome={cs.outcome}
        lesson={cs.lesson}
      />
    ))}
  </div>
)}
```

---

## 验证步骤
1. `npm run build` — 无 TS 错误
2. 访问 `/dsa-experience`（英文），在 Section 3（运动艺术评估）之后看到 "Six Families. Six Different DSA Pathways." 标题
3. 其下显示 6 张卡片，2列（平板）或3列（桌面），每张有彩色图标圆 + 故事 + 结果 badge
4. 最后一张（"When PSLE Exceeded Expectations"）使用 amber 色系，与前5张有视觉区分
5. 移动端确认1列布局正常
