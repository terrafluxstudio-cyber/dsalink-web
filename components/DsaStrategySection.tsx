"use client";

import type { RefObject } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  FlaskConical,
  GitFork,
  GraduationCap,
  Layers,
  Lightbulb,
  TrendingDown,
  Trophy,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";
import type { Copy } from "@/lib/i18n";

/* ── Persona card shape ──────────────────────────────────────────── */

type PersonaKeys = {
  titleKey: keyof Copy;
  tagKey: keyof Copy;
  whoKey: keyof Copy;
  goalKey: keyof Copy;
  tipKey: keyof Copy;
  ctaKey: keyof Copy;
  href: string;
};

type PersonaStyle = {
  Icon: LucideIcon;
  iconBg: string;
  accent: string;
  tagAccent: string;
};

const PERSONA_STYLES: PersonaStyle[] = [
  {
    Icon: GraduationCap,
    iconBg: "bg-blue-100 text-blue-700",
    accent: "border-blue-200 bg-blue-50",
    tagAccent: "bg-blue-100 text-blue-700",
  },
  {
    Icon: Trophy,
    iconBg: "bg-amber-100 text-amber-700",
    accent: "border-amber-200 bg-amber-50",
    tagAccent: "bg-amber-100 text-amber-700",
  },
  {
    Icon: FlaskConical,
    iconBg: "bg-teal-100 text-teal-700",
    accent: "border-teal-200 bg-teal-50",
    tagAccent: "bg-teal-100 text-teal-700",
  },
  {
    Icon: BookOpen,
    iconBg: "bg-green-100 text-green-700",
    accent: "border-green-200 bg-green-50",
    tagAccent: "bg-green-100 text-green-700",
  },
];

const PERSONA_KEYS: PersonaKeys[] = [
  {
    titleKey: "dsaStrategyPersona1Title",
    tagKey: "dsaStrategyPersona1Tag",
    whoKey: "dsaStrategyPersona1Who",
    goalKey: "dsaStrategyPersona1Goal",
    tipKey: "dsaStrategyPersona1Tip",
    ctaKey: "dsaStrategyPersona1Cta",
    href: "/schools?track=ip",
  },
  {
    titleKey: "dsaStrategyPersona2Title",
    tagKey: "dsaStrategyPersona2Tag",
    whoKey: "dsaStrategyPersona2Who",
    goalKey: "dsaStrategyPersona2Goal",
    tipKey: "dsaStrategyPersona2Tip",
    ctaKey: "dsaStrategyPersona2Cta",
    href: "/dsa-finder",
  },
  {
    titleKey: "dsaStrategyPersona3Title",
    tagKey: "dsaStrategyPersona3Tag",
    whoKey: "dsaStrategyPersona3Who",
    goalKey: "dsaStrategyPersona3Goal",
    tipKey: "dsaStrategyPersona3Tip",
    ctaKey: "dsaStrategyPersona3Cta",
    href: "/dsa-guide",
  },
  {
    titleKey: "dsaStrategyPersona4Title",
    tagKey: "dsaStrategyPersona4Tag",
    whoKey: "dsaStrategyPersona4Who",
    goalKey: "dsaStrategyPersona4Goal",
    tipKey: "dsaStrategyPersona4Tip",
    ctaKey: "dsaStrategyPersona4Cta",
    href: "/dsa-finder",
  },
];

/* ── component ───────────────────────────────────────────────────── */

export function DsaStrategySection() {
  const { t } = useLanguage();
  const { ref: personaRef, inView: personaInView } = useInView();

  return (
    <section className="border-t border-surface-warm bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* ── Section header ──────────────────────────────────────── */}
        <div className="mb-6 max-w-2xl">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-intellectual">
            {t.dsaStrategySectionKicker}
          </p>
          <h2 className="font-display text-[1.625rem] font-extrabold leading-tight text-slate-900 sm:text-[2rem]">
            {t.dsaStrategySectionH2}
          </h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate-600">
            {t.dsaStrategySectionLead}
          </p>
        </div>

        {/* ── The core insight callout ─────────────────────────── */}
        <div className="mb-6 rounded-2xl border border-intellectual/20 bg-intellectual/8 p-5 sm:p-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-intellectual text-white">
              <Lightbulb className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="mb-1 font-display text-[1rem] font-semibold text-slate-900">
                {t.dsaStrategyInsightTitle}
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-slate-600">
                {t.dsaStrategyInsightBody}
              </p>
              <p className="mt-3 text-[0.875rem] text-slate-500">
                {t.dsaStrategyInsightFootnote}
              </p>
            </div>
          </div>
        </div>

        {/* ── How DSA compares to PSLE posting (2+1 asymmetric) ─── */}
        <div className="mb-6">
          {/* Top row: two equal cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* PSLE Posting — muted slate */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200 text-slate-600">
                  <TrendingDown className="h-4 w-4" aria-hidden />
                </span>
                <p className="font-display text-[0.9375rem] font-semibold text-slate-700">{t.dsaStrategyPslePath}</p>
              </div>
              <p className="mb-3 text-[0.8125rem] leading-snug text-slate-600">
                {t.dsaStrategyPsleBody}
              </p>
              <span className="inline-block rounded-full border border-red-200 bg-red-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-red-600">
                {t.dsaStrategyPsleBadge}
              </span>
            </div>

            {/* DSA Pathway — champagne gold */}
            <div className="rounded-xl border border-champagne/30 bg-champagne-subtle p-4">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-champagne/20 text-champagne-dark">
                  <GitFork className="h-4 w-4" aria-hidden />
                </span>
                <p className="font-display text-[0.9375rem] font-semibold text-slate-900">{t.dsaStrategyDsaPath}</p>
              </div>
              <p className="mb-3 text-[0.8125rem] leading-snug text-slate-600">
                {t.dsaStrategyDsaBody}
              </p>
              <span className="inline-block rounded-full border border-green-200 bg-green-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-green-700">
                {t.dsaStrategyDsaBadge}
              </span>
            </div>
          </div>

          {/* Bottom row: full-width navy banner */}
          <div className="mt-3 rounded-xl border border-intellectual/20 bg-intellectual p-4 sm:flex sm:items-center sm:gap-5">
            <span className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white sm:mb-0">
              <Layers className="h-5 w-5" aria-hidden />
            </span>
            <div className="flex-1">
              <p className="font-display text-[0.9375rem] font-semibold text-white">{t.dsaStrategySmartTitle}</p>
              <p className="mt-1 text-[0.8125rem] leading-relaxed text-white/70">
                {t.dsaStrategySmartBody}
              </p>
            </div>
            <span className="mt-3 inline-block rounded-full border border-champagne/40 bg-champagne/20 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-champagne-light sm:mt-0 sm:shrink-0">
              {t.dsaStrategySmartBadge}
            </span>
          </div>
        </div>

        {/* ── Persona cards ─────────────────────────────────────── */}
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="mb-1 font-display text-[1.0625rem] font-semibold text-slate-900">
              {t.dsaStrategyWhichParent}
            </h3>
            <p className="text-[0.875rem] text-slate-500">
              {t.dsaStrategyWhichDesc}
            </p>
          </div>
          <Link
            href="/dsa-finder"
            className="mt-2 shrink-0 text-[0.8125rem] font-semibold text-intellectual transition hover:text-intellectual-light sm:mt-0"
          >
            {t.dsaStrategyNotSureCta}
          </Link>
        </div>

        <div
          ref={personaRef as RefObject<HTMLDivElement>}
          className="mb-6 grid gap-4 sm:grid-cols-2"
        >
          {PERSONA_KEYS.map((keys, index) => {
            const { Icon, iconBg, accent, tagAccent } = PERSONA_STYLES[index];
            return (
              <ScrollReveal
                key={keys.titleKey}
                delay={index * 100}
                className="h-full"
              >
                <div
                  className={`flex h-full flex-col rounded-xl border p-4 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 ${accent} ${
                    personaInView
                      ? `animate-fade-up ${
                          index === 1 ? 'animate-fade-up-delay-1' :
                          index === 2 ? 'animate-fade-up-delay-2' :
                          index === 3 ? 'animate-fade-up-delay-3' : ''
                        }`
                      : 'opacity-0'
                  }`}
                >
                  <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}>
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </div>
                  <span className={`mb-2 self-start rounded-full px-2.5 py-1 text-[11px] font-semibold ${tagAccent}`}>
                    {t[keys.tagKey]}
                  </span>
                  <h4 className="mb-3 font-display text-base font-semibold text-slate-900">
                    {t[keys.titleKey]}
                  </h4>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">{t[keys.whoKey]}</p>
                  <div className="mt-auto space-y-2">
                    <p className="rounded-lg bg-white/70 px-3 py-2 text-sm leading-relaxed text-slate-700">
                      <span className="font-semibold text-slate-900">{t.dsaStrategyGoalLabel}</span>{" "}
                      {t[keys.goalKey]}
                    </p>
                    <p className="rounded-lg bg-white/70 px-3 py-2 text-sm leading-relaxed text-slate-600">
                      <span className="font-semibold text-slate-900">{t.dsaStrategyTipLabel}</span>{" "}
                      {t[keys.tipKey]}
                    </p>
                    <Link
                      href={keys.href}
                      className="mt-2 block rounded-lg border border-intellectual/20 bg-white px-4 py-2.5 text-center text-sm font-semibold text-intellectual transition hover:bg-intellectual hover:text-white"
                    >
                      {t[keys.ctaKey]}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── CTA strip ─────────────────────────────────────────── */}
        <div className="rounded-2xl border border-champagne/30 bg-champagne-subtle p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="font-display text-[1rem] font-semibold text-slate-900">
              {t.dsaStrategyCtaTitle}
            </p>
            <p className="mt-1 text-[0.875rem] text-slate-600">
              {t.dsaStrategyCtaBody}
            </p>
          </div>
          <div className="mt-4 flex shrink-0 flex-wrap gap-2 sm:mt-0">
            <Link
              href="/schools"
              className="rounded-xl bg-intellectual px-5 py-2.5 text-[0.875rem] font-semibold text-white transition hover:bg-intellectual-light"
            >
              {t.dsaStrategyCtaBrowse}
            </Link>
            <Link
              href="/dsa-interview"
              className="rounded-xl border border-intellectual/25 bg-white px-5 py-2.5 text-[0.875rem] font-semibold text-intellectual transition hover:border-intellectual/50"
            >
              {t.dsaStrategyCtaInterview}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
