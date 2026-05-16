# CURSOR TASK: 订阅 Banner 重设计（材料包版）

## 问题
当前 Banner 背景浅、文案弱、不吸引订阅。需重做为深蓝底，明确列出可获取的材料包，提升转化。

## 涉及文件
- `components/HomepageSubscribeBanner.tsx` — 完整替换

---

## 完整替换内容

用以下代码完整替换 `components/HomepageSubscribeBanner.tsx`：

```tsx
"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const MATERIALS = [
  "DSA school comparison worksheet (147 schools)",
  "Interview question bank by talent area",
  "Open house field guide — what to ask & observe",
  "2026 application timeline & deadline checklist",
] as const;

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
    <section className="bg-intellectual py-12 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Left: value proposition */}
          <div className="flex-1">
            <p className="mb-2 text-[10px] font-semibold tracking-[0.18em] text-champagne normal-case">
              FREE RESOURCE PACK · P6 FAMILIES
            </p>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Everything you need to prepare — in one free pack
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Used by hundreds of Singapore families preparing for DSA. No upsells, no agent, just the materials.
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {MATERIALS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="w-full lg:max-w-[320px]">
            {status === "success" ? (
              <div className="rounded-2xl border border-champagne/30 bg-white/10 px-6 py-8 text-center">
                <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-champagne" aria-hidden />
                <p className="text-base font-bold text-white">Pack on its way.</p>
                <p className="mt-1.5 text-sm text-white/60">Check your inbox — we&apos;ll send the materials within 24 hours.</p>
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/8 px-6 py-7">
                <p className="mb-4 text-sm font-semibold text-white">Get the free pack</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={status === "loading"}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-champagne/60 focus:outline-none focus:ring-1 focus:ring-champagne/40 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-xl bg-champagne py-3 text-sm font-bold text-intellectual shadow-gold transition hover:bg-champagne-light disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending…" : "Send me the pack →"}
                  </button>
                </form>
                {status === "error" && (
                  <p className="mt-2 text-xs text-red-400">Something went wrong. Please try again.</p>
                )}
                <p className="mt-3 text-center text-[11px] text-white/30">Free. No spam. Unsubscribe anytime.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] Banner 显示为深蓝底（`bg-intellectual`）
- [ ] 左侧列出 4 个材料包，每项带 champagne 色 CheckCircle 图标
- [ ] 右侧表单背景为半透明白色卡片，按钮为金色
- [ ] 提交后显示成功状态（champagne CheckCircle + "Pack on its way."）
