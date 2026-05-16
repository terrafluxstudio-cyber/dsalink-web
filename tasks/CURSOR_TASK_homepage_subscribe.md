# CURSOR TASK: 主页订阅 Banner

## 涉及文件
- `components/HomepageSubscribeBanner.tsx` — 新建
- `app/api/subscribe/route.ts` — 新建
- `app/page.tsx` — 插入组件

---

## 改动 1 — 新建 `components/HomepageSubscribeBanner.tsx`

完整内容如下：

```tsx
"use client";

import { useState, type FormEvent } from "react";

export function HomepageSubscribeBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="border-y border-intellectual/15 bg-intellectual/5 py-10 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Left: copy */}
          <div className="max-w-md">
            <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] text-intellectual normal-case">
              FREE FOR ALL P6 FAMILIES
            </p>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Stay ahead of the 2026 DSA timeline
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Get our DSA checklist, school open house reminders, and insider tips — delivered before the rush.
            </p>
          </div>

          {/* Right: form */}
          <div className="w-full sm:max-w-xs">
            {status === "success" ? (
              <div className="rounded-xl border border-champagne/40 bg-champagne/10 px-5 py-4 text-center">
                <p className="text-sm font-semibold text-intellectual">You&apos;re on the list.</p>
                <p className="mt-1 text-xs text-slate-500">We&apos;ll reach out before the next key milestone.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === "loading"}
                  className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-intellectual focus:outline-none focus:ring-1 focus:ring-intellectual disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual shadow-gold transition hover:bg-champagne-light disabled:opacity-60"
                >
                  {status === "loading" ? "..." : "Notify me"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-2 text-xs text-red-500">Something went wrong. Please try again.</p>
            )}
            <p className="mt-2 text-[11px] text-slate-400">No spam. Unsubscribe anytime.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
```

---

## 改动 2 — 新建 `app/api/subscribe/route.ts`

完整内容如下：

```ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: wire up Vercel KV or Resend to persist/send
    console.log("[subscribe]", email);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
```

---

## 改动 3 — 在 `app/page.tsx` 插入组件

**在文件顶部 import 区追加：**
```tsx
import { HomepageSubscribeBanner } from "@/components/HomepageSubscribeBanner";
```

**在 `<DsaStrategySection />` 和 `<OpenHouseFieldGuide />` 之间插入：**

改前：
```tsx
        <DsaStrategySection />
        <OpenHouseFieldGuide />
```
改后：
```tsx
        <DsaStrategySection />
        <HomepageSubscribeBanner />
        <OpenHouseFieldGuide />
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] 主页显示订阅 Banner（浅米色/intellectual 浅色背景，金色按钮）
- [ ] 输入邮箱点击 Notify me → 显示成功状态（champagne 淡金框）
- [ ] 无效邮箱 → 浏览器原生 validation 阻止提交
