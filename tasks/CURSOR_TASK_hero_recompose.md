# CURSOR TASK: Hero 右栏视觉重构 + DeadlineCard 轻量化

## 问题
右栏三张卡片（OpenHousePreview / ScoresEntryCard / DeadlineCard）视觉重量不均：
- DeadlineCard 琥珀背景色在三张白底卡片中显得突兀
- 三张卡片堆叠后右栏比左栏更高，布局头重脚轻
- DeadlineCard 应与其他两张卡片保持视觉一致，仅通过图标色和标签传递紧迫感

## 涉及文件
- `components/DeadlineCard.tsx` — 完整替换为轻量白卡样式

---

## 完整替换 `components/DeadlineCard.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const DEADLINE = new Date("2026-06-02T08:30:00Z"); // 4:30pm SGT = 08:30 UTC

function getDaysLeft(): number {
  const now = new Date();
  const diff = DEADLINE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function DeadlineCard() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(getDaysLeft());
  }, []);

  const urgent = days !== null && days <= 14;

  return (
    <a
      href="https://www.moe.gov.sg/secondary/dsa"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-[#e3ded5] bg-white px-4 py-3.5 shadow-card transition hover:border-[#d4cec4] hover:shadow-card-hover"
    >
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${urgent ? "bg-red-50 text-red-500" : "bg-amber-50 text-amber-500"}`}>
        <Clock className="h-4 w-4" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`text-[10px] font-bold tracking-wide normal-case ${urgent ? "text-red-500" : "text-amber-600"}`}>
          {urgent ? "CLOSING SOON" : "KEY DEADLINE"}
        </p>
        <p className="truncate text-sm font-semibold text-slate-800">
          DSA closes 2 Jun 2026, 4:30pm SGT
        </p>
        {days !== null && (
          <p className="text-xs text-slate-400">
            {days === 0 ? "Closes today" : `${days} day${days === 1 ? "" : "s"} left`}
          </p>
        )}
      </div>
      <span className="shrink-0 text-xs text-slate-400 transition group-hover:translate-x-0.5">→</span>
    </a>
  );
}
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] DeadlineCard 显示为白底卡片（与 OpenHousePreview / ScoresEntryCard 视觉一致）
- [ ] 距截止 ≤14 天时，图标变红色；否则琥珀色
- [ ] 点击卡片外链至 moe.gov.sg
- [ ] 三张右栏卡片整体视觉统一，无突兀色块
