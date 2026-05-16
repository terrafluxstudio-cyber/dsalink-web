# CURSOR TASK: 截止日期紧迫感卡片移至右栏

## 问题
"Applications close 2 Jun 2026" 当前是左栏底部一行小字（`text-[0.75rem] text-slate-400`），
紧迫感弱，且右栏两张卡片下方有明显空白。

## 目标
- 从 HeroSection 左栏删除该小字行
- 新建 `components/DeadlineCard.tsx`，作为第三个 child 插入右栏
- 卡片样式：红/琥珀色背景，醒目倒计时文案，外链至 MOE

## 涉及文件
- `components/HeroSection.tsx` — 删除左栏小字
- `components/DeadlineCard.tsx` — 新建
- `app/page.tsx` — 插入第三个 child

---

## 改动 1 — 删除 `components/HeroSection.tsx` 左栏小字

找到以下代码块（位于 `<HeroSearchBox />` 下方）：

```tsx
            {/* Compact deadline line */}
            <p className="mt-4 text-[0.75rem] text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3 w-3 text-amber-500" aria-hidden />
                Applications close{" "}
                <strong className="text-slate-600">2 Jun 2026, 4:30pm SGT</strong>
                {" · "}
                <a
                  href="https://www.moe.gov.sg/secondary/dsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-slate-700"
                >
                  moe.gov.sg ↗
                </a>
              </span>
            </p>
```

**整块删除**。

同时检查顶部 import：如果 `Clock` 仅被此处使用，将其从 import 中删除。

---

## 改动 2 — 新建 `components/DeadlineCard.tsx`

完整内容如下：

```tsx
"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

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

  const urgency = days !== null && days <= 14;

  return (
    <a
      href="https://www.moe.gov.sg/secondary/dsa"
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-start gap-3.5 rounded-2xl border px-5 py-4 shadow-card transition hover:shadow-card-hover ${
        urgency
          ? "border-red-200 bg-red-50 hover:border-red-300"
          : "border-amber-200 bg-amber-50 hover:border-amber-300"
      }`}
    >
      <AlertCircle
        className={`mt-0.5 h-5 w-5 shrink-0 ${urgency ? "text-red-500" : "text-amber-500"}`}
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <p className={`text-[10px] font-bold tracking-[0.12em] normal-case ${urgency ? "text-red-500" : "text-amber-600"}`}>
          {urgency ? "CLOSING SOON" : "KEY DEADLINE"}
        </p>
        <p className={`mt-0.5 text-sm font-bold ${urgency ? "text-red-700" : "text-amber-800"}`}>
          DSA applications close 2 Jun 2026
        </p>
        <p className={`mt-1 text-xs leading-snug ${urgency ? "text-red-600/70" : "text-amber-700/70"}`}>
          {days === null ? "4:30pm SGT · Via MOE DSA portal" : days === 0 ? "Closes today at 4:30pm SGT" : `${days} day${days === 1 ? "" : "s"} left · 4:30pm SGT`}
        </p>
      </div>
      <span className={`mt-0.5 shrink-0 text-xs font-semibold transition group-hover:translate-x-0.5 ${urgency ? "text-red-500" : "text-amber-600"}`}>
        →
      </span>
    </a>
  );
}
```

---

## 改动 3 — `app/page.tsx` 插入第三个 child

**在 import 区追加：**
```tsx
import { DeadlineCard } from "@/components/DeadlineCard";
```

**在 HeroSection children 末尾追加 `<DeadlineCard />`：**

改前：
```tsx
        <HeroSection>
          <OpenHousePreview />
          <ScoresEntryCard />
        </HeroSection>
```
改后：
```tsx
        <HeroSection>
          <OpenHousePreview />
          <ScoresEntryCard />
          <DeadlineCard />
        </HeroSection>
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] 左栏底部不再显示小字 deadline 行
- [ ] 右栏第三张卡片出现，显示倒计时（距 2026-06-02 的天数）
- [ ] 卡片外链至 moe.gov.sg
- [ ] 若距截止 ≤14 天，卡片变红色；否则为琥珀色
