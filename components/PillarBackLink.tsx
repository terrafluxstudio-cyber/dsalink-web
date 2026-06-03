"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PREFIX = {
  en: "Part of",
  zh: "属于",
  ms: "Sebahagian daripada",
  ta: "ஒரு பகுதி:",
} as const;

const PILLAR = {
  en: "the DSA Guide",
  zh: "DSA 完整指南",
  ms: "Panduan DSA",
  ta: "DSA வழிகாட்டி",
} as const;

const SUBTITLE = {
  en: "Singapore DSA-Sec 2026 — 9 chapters · 6 parent stories · every talent · timeline · FAQ.",
  zh: "DSA-Sec 2026 完整参考 · 9 章节 · 6 家长故事 · 每个才艺方向 · 时间线 · FAQ。",
  ms: "DSA-Sec 2026 — 9 bab · 6 kisah ibu bapa · setiap bakat · garis masa · FAQ.",
  ta: "DSA-Sec 2026 — 9 அத்தியாயங்கள் · 6 பெற்றோர் கதைகள் · ஒவ்வொரு திறமை · கால அட்டவணை · FAQ.",
} as const;

const CTA = {
  en: "Open the DSA Guide",
  zh: "打开完整指南",
  ms: "Buka Panduan DSA",
  ta: "வழிகாட்டியைத் திற",
} as const;

/**
 * Pillar back-link strip — placed near the bottom of every cluster page
 * (talent / school / cornerstone). Sends authority back to /dsa-guide
 * for SEO Pillar+Cluster signal.
 */
export function PillarBackLink() {
  const { locale } = useLanguage();
  return (
    <section className="bg-surface py-8 sm:py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Link
          href="/dsa-guide"
          className="group flex flex-col gap-3 rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-intellectual/30 hover:shadow-card sm:flex-row sm:items-center sm:gap-5 sm:p-6"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
            <BookOpen className="h-5 w-5" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] text-champagne-dark normal-case">
              <ArrowLeft className="h-3 w-3" aria-hidden />
              {PREFIX[locale]}{" "}
              <span className="text-intellectual">{PILLAR[locale]}</span>
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-intellectual-muted">
              {SUBTITLE[locale]}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg bg-intellectual px-4 py-2 text-[12.5px] font-semibold text-white transition group-hover:bg-intellectual-light sm:self-center">
            {CTA[locale]}
            <ArrowLeft className="h-3.5 w-3.5 rotate-180" aria-hidden />
          </span>
        </Link>
      </div>
    </section>
  );
}
