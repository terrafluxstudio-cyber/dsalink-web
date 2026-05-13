"use client";

import { AlertCircle, Eye, ListChecks } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { LucideIcon } from "lucide-react";

type Card = {
  icon: LucideIcon;
  titleKey: keyof ReturnType<typeof useLanguage>["t"];
  bodyKey: keyof ReturnType<typeof useLanguage>["t"];
  tipKey: keyof ReturnType<typeof useLanguage>["t"];
};

const CARDS: Card[] = [
  {
    icon: Eye,
    titleKey: "fieldGuide_card1_title",
    bodyKey: "fieldGuide_card1_body",
    tipKey: "fieldGuide_card1_tip",
  },
  {
    icon: ListChecks,
    titleKey: "fieldGuide_card2_title",
    bodyKey: "fieldGuide_card2_body",
    tipKey: "fieldGuide_card2_tip",
  },
  {
    icon: AlertCircle,
    titleKey: "fieldGuide_card3_title",
    bodyKey: "fieldGuide_card3_body",
    tipKey: "fieldGuide_card3_tip",
  },
];

export function OpenHouseFieldGuide() {
  const { t } = useLanguage();

  return (
    <section
      className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16"
      aria-labelledby="field-guide-heading"
    >
      {/* Section header */}
      <div className="mb-10 border-b border-slate-200 pb-8">
        <p className="text-[10px] font-semibold tracking-[0.15em] text-indigo-600 normal-case">
          {t.fieldGuide_kicker}
        </p>
        <h2
          id="field-guide-heading"
          className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
        >
          {t.fieldGuide_title}
        </h2>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          {t.fieldGuide_subtitle}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CARDS.map(({ icon: Icon, titleKey, bodyKey, tipKey }) => (
          <div
            key={titleKey}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            {/* Icon badge */}
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
              <Icon className="h-5 w-5 text-indigo-600" aria-hidden />
            </div>

            {/* Headline */}
            <h3 className="text-[15px] font-semibold leading-snug text-slate-900">
              {t[titleKey]}
            </h3>

            {/* Body */}
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              {t[bodyKey]}
            </p>

            {/* Insider tip */}
            <div className="mt-5 rounded-lg bg-indigo-50 px-4 py-3">
              <span className="mb-1.5 inline-block text-[10px] font-bold tracking-wider text-indigo-600 normal-case">
                {t.fieldGuide_insider_label}
              </span>
              <p className="text-xs leading-relaxed text-indigo-800">
                {t[tipKey]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
