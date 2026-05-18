# Cursor Task: Quiz Results Email Capture Redesign

## 目标
把 SchoolFinderWizard 底部的 EmailCapture 从"订阅 DSA 指南"改为"把测验结果发到邮箱"。
不发 welcome email，只发含学校推荐列表的 results email。邮箱会自动加入 drip 序列（现有 cron job 已处理）。

---

## 改动 1：`lib/resend.ts` — 新增 `sendRecommendResultsEmail` 函数

在文件末尾（`sendResultsEmail` 之后）追加：

```ts
export async function sendRecommendResultsEmail(
  to: string,
  alScore: number,
  recommendedSchools: Array<{ name: string; tier: string }>,
): Promise<boolean> {
  const tierLabels: Record<string, string> = {
    special: "Specialised Schools (DSA Only)",
    safe: "Good matches — secured options",
    reach: "Stretch schools — DSA is your main pathway",
    dream: "Aspirational — talent is the key",
  };

  const grouped: Record<string, string[]> = {};
  for (const s of recommendedSchools) {
    if (!grouped[s.tier]) grouped[s.tier] = [];
    grouped[s.tier].push(s.name);
  }

  const schoolLines = (["special", "safe", "reach", "dream"] as const)
    .filter((t) => grouped[t]?.length)
    .map((t) => `${tierLabels[t]}:\n${grouped[t].map((n) => `  • ${n}`).join("\n")}`)
    .join("\n\n");

  return sendEmail(
    to,
    `Your DSA school recommendations (AL ${alScore})`,
    `Hi there,

Here are your personalised DSA school recommendations based on an estimated AL score of ${alScore}:

${schoolLines}

A few things to do next:

1. Check open house dates
Most schools hold trials and auditions before the June 2 application deadline.
https://dsalink.sg/open-houses

2. Read the DSA Parent Playbook
Everything about the process — from choosing the right school to what happens after an offer.
https://dsalink.sg/dsa-experience

3. Prepare for DSA interviews and trials
Schools shortlist students based on talent. Here's what selectors actually look for.
https://dsalink.sg/dsa-interview

We'll send you relevant follow-ups as the DSA calendar unfolds — open house reminders, deadline alerts, and what to expect at each stage.

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply to this email with "unsubscribe".`,
  );
}
```

---

## 改动 2：`app/api/recommend/route.ts` — 替换 welcome email

**当前：**
```ts
import { sendWelcomeEmail } from "@/lib/resend";
```
```ts
if (record.email) {
  await sendWelcomeEmail(record.email);
}
```

**改为：**
```ts
import { sendRecommendResultsEmail } from "@/lib/resend";
```
```ts
if (record.email) {
  await sendRecommendResultsEmail(
    record.email,
    record.alScore,
    record.recommendedSchools,
  );
}
```

---

## 改动 3：`components/EmailCapture.tsx` — UI 全面重设计

用以下内容**完整替换**整个文件：

```tsx
"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export interface EmailCaptureProps {
  onSubmit: (email: string) => void;
  onSkip: () => void;
}

export function EmailCapture({ onSubmit, onSkip }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    trackEvent("email_captured");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" aria-hidden />
          <div>
            <p className="text-[0.9375rem] font-semibold text-slate-900">
              Sent — check your inbox
            </p>
            <p className="mt-1 text-[0.8125rem] leading-relaxed text-slate-500">
              Your school recommendations are on their way. We'll also send follow-ups
              with open house dates, deadline reminders, and interview prep tips.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
      {/* Header */}
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-intellectual/8 text-intellectual">
          <Mail className="h-4.5 w-4.5" aria-hidden />
        </span>
        <div>
          <h3 className="text-[0.9375rem] font-semibold text-slate-900" style={{ textTransform: "none" }}>
            Email me my results
          </h3>
          <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-slate-500">
            We'll send your school recommendations to your inbox. A free resource pack
            on trials, interviews, and what to do next follows automatically.
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="your@email.com"
          required
          className="w-full rounded-xl border border-[#e3ded5] bg-surface px-4 py-3 text-[0.9375rem] text-slate-900 placeholder:text-slate-400 transition focus:border-intellectual/40 focus:outline-none focus:ring-2 focus:ring-intellectual/10"
        />
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual shadow-gold transition hover:bg-champagne-light"
          >
            Send my results
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
          >
            No thanks
          </button>
        </div>
        <p className="text-[11px] text-slate-400">
          No spam. Unsubscribe anytime. Not affiliated with MOE.
        </p>
      </form>
    </section>
  );
}
```

---

## 验证步骤

1. `npm run build` — 无 TypeScript 错误
2. 在本地 `/recommend` 完成测验，到结果页，提交邮箱
3. 检查控制台日志，确认 `/api/recommend` 被调用并带有 email 参数
4. 若有 `RESEND_API_KEY`，检查邮件内容包含学校列表（按 tier）
5. 确认不再发送旧的 welcome email（subject: "You just found the DSA resource most P6 parents discover too late"）

---

## 注意事项

- `sendWelcomeEmail` 仍保留在 `lib/resend.ts`（不删除），供未来可能的其他入口使用
- 邮箱收集后，cron job (`/api/cron/drip`) 会自动根据日历阶段发送后续 drip emails（open house、deadline reminder 等）——无需额外修改
- `HomepageSubscribeBanner` 的 `/api/subscribe` 路由是独立的占位符，暂未打通 KV，属于另一个任务
