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
  zh: "9 章节 · 6 家长故事 · 8 才艺方向 · 2026 时间线 · 面试备战 · 12 个常见问题 · 4 语言全覆盖。",
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

const CHAPTERS_HEADING: LocaleStr = {
  en: "Inside · 9 chapters",
  zh: "目录 · 9 个章节",
  ms: "Kandungan · 9 bab",
  ta: "உள்ளடக்கம் · 9 அத்தியாயங்கள்",
};

const CHAPTERS: ReadonlyArray<LocaleStr> = [
  { en: "What DSA actually is", zh: "DSA 是什么", ms: "Apakah DSA", ta: "DSA என்றால் என்ன" },
  { en: "Six family pathways", zh: "六条家庭路径", ms: "Enam laluan keluarga", ta: "ஆறு குடும்ப பாதைகள்" },
  { en: "8 talent categories", zh: "8 大才艺方向", ms: "8 kategori bakat", ta: "8 திறமை வகைகள்" },
  { en: "The 147 schools", zh: "147 所学校", ms: "147 sekolah", ta: "147 பள்ளிகள்" },
  { en: "2026 timeline", zh: "2026 时间线", ms: "Garis masa 2026", ta: "2026 கால அட்டவணை" },
  { en: "Interview prep", zh: "面试备战", ms: "Persediaan temu duga", ta: "நேர்காணல் தயாரிப்பு" },
  { en: "The 4 outcomes", zh: "4 种结果", ms: "4 keputusan", ta: "4 முடிவுகள்" },
  { en: "DSA × PSLE", zh: "DSA × PSLE", ms: "DSA × PSLE", ta: "DSA × PSLE" },
  { en: "12 parent FAQs", zh: "12 个常见问题", ms: "12 FAQ ibu bapa", ta: "12 பெற்றோர் கேள்விகள்" },
];

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

          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px] lg:gap-10">

            {/* Left column: kicker + title + body + CTA */}
            <div className="min-w-0">
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
              <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-white/75 sm:text-sm">
                {pick(BODY)}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-champagne-light/85 normal-case">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {pick(READ)}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 self-start rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition group-hover:bg-champagne-light">
                <span style={{ textTransform: "none" }}>{pick(CTA)}</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </div>

            {/* Right column: 9 chapter preview list (lg+ only) */}
            <div className="hidden rounded-xl border border-white/10 bg-white/5 p-5 lg:block">
              <p className="mb-3 inline-flex items-center gap-2 text-[10.5px] font-bold tracking-[0.18em] text-champagne-light normal-case">
                <span className="h-px w-5 bg-champagne-light/60" aria-hidden />
                {pick(CHAPTERS_HEADING)}
              </p>
              <ol className="space-y-1.5">
                {CHAPTERS.map((ch, i) => (
                  <li key={i} className="flex items-baseline gap-2.5 text-[12.5px]">
                    <span className="w-4 shrink-0 text-right font-display font-bold tabular-nums text-champagne">
                      {i + 1}
                    </span>
                    <span
                      style={{ textTransform: "none" }}
                      className="text-white/80 transition group-hover:text-white"
                    >
                      {pick(ch)}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </Link>
      </div>
    </section>
  );
}
