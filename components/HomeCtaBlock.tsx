"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SchoolFinderModal } from "@/components/SchoolFinderModal";

// Same grain tile used in SchoolFinderModal — consistent material language.
const GRAIN_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='0.15'/></svg>\")";

export function HomeCtaBlock() {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SchoolFinderModal open={modalOpen} onOpenChange={setModalOpen} />

      <div
        className="relative mt-5 overflow-hidden rounded-2xl"
        aria-labelledby="home-cta-heading"
      >
        {/* ── Layer 0: intellectual navy base ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ backgroundColor: "#0d3f5f" }}
        />

        {/* ── Layer 1: grain texture ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: GRAIN_BG,
            backgroundSize: "180px 180px",
          }}
        />

        {/* ── Layer 2: champagne radial glow — top-right ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 95% -5%, rgba(198,162,74,0.22), transparent 60%)",
          }}
        />

        {/* ── Layer 3: subtle diagonal line grid ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30' stroke='white' stroke-width='1'/></svg>\")",
            backgroundSize: "40px 40px",
          }}
        />

        {/* ── Layer 4: gold ribbon + bow — bg-image scales to card height so ribbon hits both corners ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            backgroundImage: "url('/ribbon-bow.webp')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
            backgroundSize: "auto 100%",
          }}
        />

        {/* ── Foreground content ── */}
        <div className="relative z-10 px-6 py-7 sm:px-8 sm:py-8">
          {/* Eyebrow badge */}
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-champagne/30 bg-champagne/10 px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-champagne">
            <Sparkles className="h-3 w-3 shrink-0" aria-hidden />
            {t.ctaFreePersonalisedTool}
          </p>

          {/* Headline */}
          <h2
            id="home-cta-heading"
            style={{ textTransform: "none" }}
            className="max-w-sm text-balance font-display text-[1.5rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[1.75rem]"
          >
            {t.homeCtaTitle}
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 max-w-md text-[0.9375rem] leading-relaxed text-white/65">
            {t.homeCtaSubtitle}
          </p>

          {/* CTA row */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {/* Primary — champagne gold with breathing animation */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-champagne/50 bg-champagne px-6 py-3 text-sm font-semibold text-intellectual shadow-gold transition hover:bg-champagne-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne animate-gold-breathe"
            >
              <span style={{ textTransform: "none" }}>{t.homeCtaPrimary}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </button>

            {/* Secondary — ghost white */}
            <Link
              href="/dsa-experience"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span style={{ textTransform: "none" }}>{t.homeCtaSecondary}</span>
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4">
            {(
              [
                { value: "2 min", label: t.ctaTrustTimeLabel },
                { value: "Free", label: t.ctaTrustFreeLabel },
                { value: t.ctaTrustPersonalVal, label: t.ctaTrustPersonalLabel },
              ]
            ).map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-center gap-1.5 ${i > 0 ? "border-l border-white/15 pl-4" : ""}`}
              >
                <span className="text-[0.875rem] font-bold text-champagne-light">
                  {stat.value}
                </span>
                <span className="text-[0.75rem] text-white/45">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
