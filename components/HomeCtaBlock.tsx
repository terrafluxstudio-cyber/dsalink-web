"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SchoolFinderModal } from "@/components/SchoolFinderModal";
import { getCyclePhase } from "@/lib/dsa-cycle";

// Same grain tile used in SchoolFinderModal — consistent material language.
const GRAIN_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='0.15'/></svg>\")";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };
type Mode = "apply" | "after-apply";

/**
 * Apply mode covers BOTH the open window AND the off-season research phase
 * (Finder is still the primary action when DSA isn't currently being filled).
 * Only the live interview-trial window switches to after-apply.
 */
function computeMode(now: Date): Mode {
  return getCyclePhase(now) === "interview-trial" ? "after-apply" : "apply";
}

const AFTER_KICKER: LocaleStr = {
  en: "Right Now · Trial & Interview Season",
  zh: "当下 · 面试与 trial 季",
  ms: "Sekarang · Musim Trial & Temu Duga",
  ta: "இப்போது · சோதனை & நேர்காணல் பருவம்",
};

const AFTER_TITLE: LocaleStr = {
  en: "The hardest stretch is between Submit and Results.",
  zh: "提交之后到出结果，这段路最难走。",
  ms: "Selang antara hantar dan keputusan adalah yang paling sukar.",
  ta: "சமர்ப்பித்த பிறகு முடிவு வரை — இதுவே மிகவும் கடினமான பருவம்.",
};

const AFTER_SUBTITLE: LocaleStr = {
  en: "8 talent-specific interview pages, real sample questions, and what trial coaches actually look for — so the wait isn't wasted.",
  zh: "8 个项目的面试备战页、真实样题、trial 教练真正看什么——把等待时间用对地方。",
  ms: "8 halaman temu duga khusus bakat, soalan contoh sebenar, dan apa yang jurulatih trial nilai — jangan biarkan masa menunggu terbuang.",
  ta: "8 திறமை சார்ந்த நேர்காணல் பக்கங்கள், உண்மையான மாதிரிக் கேள்விகள், சோதனை பயிற்சியாளர்கள் கவனிக்கும் விஷயங்கள் — காத்திருப்பு வீணாகாமல்.",
};

const AFTER_PRIMARY: LocaleStr = {
  en: "Open interview prep",
  zh: "打开面试备战",
  ms: "Buka persediaan temu duga",
  ta: "நேர்காணல் தயாரிப்பைத் திற",
};

const AFTER_SECONDARY: LocaleStr = {
  en: "Browse 8 talent pages",
  zh: "浏览 8 个项目页",
  ms: "Lihat 8 halaman bakat",
  ta: "8 திறமை பக்கங்களைப் பார்க்கவும்",
};

const AFTER_KICKER_BADGE: LocaleStr = {
  en: "Free reference · 8 talent pages",
  zh: "免费参考 · 8 个项目页",
  ms: "Rujukan percuma · 8 halaman bakat",
  ta: "இலவச குறிப்பு · 8 திறமை பக்கங்கள்",
};

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

export function HomeCtaBlock() {
  const { t, locale } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    setMode(computeMode(new Date()));
  }, []);

  // Default to "apply" content during SSR — matches the markup we historically rendered.
  const m: Mode = mode ?? "apply";

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

        {/* ── Layer 4: gold ribbon + bow (apply mode only) ── */}
        {m === "apply" ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              backgroundImage: "url('/ribbon-bow.webp')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "calc(100% + 80px) calc(0% - 80px)",
              backgroundSize: "auto 100%",
            }}
          />
        ) : null}

        {/* ── Foreground content ── */}
        <div className="relative z-10 px-6 py-7 sm:px-8 sm:py-8">
          {/* Eyebrow badge */}
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-champagne/30 bg-champagne/10 px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-champagne">
            <Sparkles className="h-3 w-3 shrink-0" aria-hidden />
            {m === "apply" ? t.ctaFreePersonalisedTool : pick(AFTER_KICKER_BADGE, locale)}
          </p>

          {/* Headline */}
          <h2
            id="home-cta-heading"
            style={{ textTransform: "none" }}
            className="max-w-sm text-balance font-display text-[1.5rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[1.75rem]"
          >
            {m === "apply" ? t.homeCtaTitle : pick(AFTER_TITLE, locale)}
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 max-w-md text-[0.9375rem] leading-relaxed text-white/65">
            {m === "apply" ? t.homeCtaSubtitle : pick(AFTER_SUBTITLE, locale)}
          </p>

          {/* CTA row */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {m === "apply" ? (
              <>
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
              </>
            ) : (
              <>
                <Link
                  href="/dsa-interview"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-champagne/50 bg-champagne px-6 py-3 text-sm font-semibold text-intellectual shadow-gold transition hover:bg-champagne-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne animate-gold-breathe"
                >
                  <span style={{ textTransform: "none" }}>{pick(AFTER_PRIMARY, locale)}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
                <Link
                  href="/dsa-interview/talents"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                >
                  <span style={{ textTransform: "none" }}>{pick(AFTER_SECONDARY, locale)}</span>
                </Link>
              </>
            )}
          </div>

          {/* Trust strip */}
          <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4">
            {(
              m === "apply"
                ? [
                    { value: "2 min", label: t.ctaTrustTimeLabel },
                    { value: "Free", label: t.ctaTrustFreeLabel },
                    { value: t.ctaTrustPersonalVal, label: t.ctaTrustPersonalLabel },
                  ]
                : [
                    { value: "8", label: locale === "zh" ? "项目页" : locale === "ms" ? "halaman bakat" : locale === "ta" ? "திறமை பக்கங்கள்" : "talent pages" },
                    { value: "35+", label: locale === "zh" ? "面试样题" : locale === "ms" ? "soalan contoh" : locale === "ta" ? "மாதிரிக் கேள்விகள்" : "sample questions" },
                    { value: locale === "zh" ? "免费" : locale === "ms" ? "Percuma" : locale === "ta" ? "இலவசம்" : "Free", label: locale === "zh" ? "4 种语言" : locale === "ms" ? "empat bahasa" : locale === "ta" ? "நான்கு மொழிகள்" : "four languages" },
                  ]
            ).map((stat, i) => (
              <div
                key={`${m}-${i}`}
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
