"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function HomepageSubscribeBanner() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const materials = [
    t.subscribeMaterial1,
    t.subscribeMaterial2,
    t.subscribeMaterial3,
    t.subscribeMaterial4,
  ];

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
              {t.subscribeKicker}
            </p>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {t.subscribeTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {t.subscribeDesc}
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {materials.map((item) => (
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
                <p className="text-base font-bold text-white">{t.subscribeSuccessTitle}</p>
                <p className="mt-1.5 text-sm text-white/60">{t.subscribeSuccessDesc}</p>
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/8 px-6 py-7">
                <p className="mb-4 text-sm font-semibold text-white">{t.subscribeFormLabel}</p>
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
                    {status === "loading" ? t.subscribeBtnLoading : t.subscribeBtn}
                  </button>
                </form>
                {status === "error" && (
                  <p className="mt-2 text-xs text-red-400">{t.subscribeError}</p>
                )}
                <p className="mt-3 text-center text-[11px] text-white/30">{t.subscribeDisclaimer}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
