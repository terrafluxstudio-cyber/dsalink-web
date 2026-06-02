"use client";

import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

const KICKER: LocaleStr = {
  en: "New · The Complete Guide",
  zh: "新上线 · 完整指南",
  ms: "Baru · Panduan Lengkap",
  ta: "புதியது · முழுமையான வழிகாட்டி",
};

const TITLE: LocaleStr = {
  en: "Everything about DSA-Sec 2026, in one page.",
  zh: "DSA-Sec 2026 全部内容，一页搞定",
  ms: "Semua tentang DSA-Sec 2026, dalam satu halaman.",
  ta: "DSA-Sec 2026 அனைத்தும், ஒரே பக்கத்தில்.",
};

const BODY: LocaleStr = {
  en: "9 chapters · 6 parent stories · 8 talent areas · the 2026 timeline · interview prep · 12-question FAQ · all four languages.",
  zh: "9 章节 · 6 家长故事 · 8 才艺方向 · 2026 时间线 · 面试备战 · 12 题 FAQ · 4 语言全覆盖。",
  ms: "9 bab · 6 kisah ibu bapa · 8 bidang bakat · garis masa 2026 · persediaan temu duga · FAQ 12 soalan · empat bahasa.",
  ta: "9 அத்தியாயங்கள் · 6 பெற்றோர் கதைகள் · 8 திறமைப் பகுதிகள் · 2026 கால அட்டவணை · நேர்காணல் தயாரிப்பு · 12-கேள்வி FAQ · நான்கு மொழிகள்.",
};

const READ: LocaleStr = {
  en: "13-min read",
  zh: "13 分钟阅读",
  ms: "13-min baca",
  ta: "13 நிமிட வாசிப்பு",
};

const CTA: LocaleStr = {
  en: "Open the DSA Guide",
  zh: "打开 DSA 指南",
  ms: "Buka Panduan DSA",
  ta: "DSA வழிகாட்டியைத் திற",
};

export function HomePillarEntry() {
  const { locale } = useLanguage();
  const pick = (s: LocaleStr) => s[locale];

  return (
    <section className="bg-intellectual pb-12 pt-2 sm:pb-14 sm:pt-3">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/dsa-guide"
          className="group relative block overflow-hidden rounded-2xl border border-champagne/30 bg-intellectual-dark p-6 shadow-card transition hover:shadow-lg sm:p-8"
        >
          {/* Subtle decorative blob */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-champagne/15 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-16 right-1/3 h-32 w-32 rounded-full bg-champagne/10 blur-3xl" aria-hidden />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-champagne/25 text-champagne-light">
                  <Sparkles className="h-4 w-4" aria-hidden />
                </span>
                <p className="text-[10.5px] font-bold tracking-[0.18em] text-champagne-light normal-case">
                  {pick(KICKER)}
                </p>
              </div>
              <h2
                style={{ textTransform: "none" }}
                className="mt-3 font-display text-xl font-bold leading-tight text-white sm:text-2xl"
              >
                {pick(TITLE)}
              </h2>
              <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-white/70 sm:text-sm">
                {pick(BODY)}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-champagne-light/85 normal-case">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {pick(READ)}
              </p>
            </div>

            <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition group-hover:bg-champagne-light sm:self-center">
              <span style={{ textTransform: "none" }}>{pick(CTA)}</span>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
