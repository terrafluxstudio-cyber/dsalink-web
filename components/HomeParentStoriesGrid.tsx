"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { STORIES, type LocaleStr } from "@/lib/parent-stories";

const KICKER: LocaleStr = {
  en: "Real outcomes, not brochure copy",
  zh: "真实结果 · 不是宣传册",
  ms: "Hasil sebenar, bukan salinan brosur",
  ta: "உண்மை முடிவுகள், விளம்பர நகல் அல்ல",
};

const TITLE: LocaleStr = {
  en: "Six families. Six different DSA pathways.",
  zh: "六个家庭 · 六条 DSA 路径",
  ms: "Enam keluarga. Enam laluan DSA berbeza.",
  ta: "ஆறு குடும்பங்கள். ஆறு வேறுபட்ட DSA பாதைகள்.",
};

const SUBTITLE: LocaleStr = {
  en: "Composite scenarios — including the one where DSA didn't work out. Names changed; mechanics real.",
  zh: "综合情境——包括 DSA 没成的那一家。姓名已改 · 机制是真实的。",
  ms: "Senario komposit — termasuk yang DSA tidak berjaya. Nama diubah; mekanisme sebenar.",
  ta: "கூட்டுச் சூழ்நிலைகள் — DSA வேலை செய்யாத ஒன்றும் உட்பட. பெயர்கள் மாற்றப்பட்டுள்ளன; இயக்கவியல் உண்மை.",
};

const DISCLAIMER: LocaleStr = {
  en: "Names, scores, and identifying details are illustrative — outcomes follow documented MOE rules.",
  zh: "姓名、分数、识别细节均为示意——结果遵循 MOE 公开规则。",
  ms: "Nama, skor, dan butiran adalah ilustrasi — keputusan mengikut peraturan MOE.",
  ta: "பெயர்கள், மதிப்பெண்கள், விவரங்கள் விளக்கமாக — முடிவுகள் MOE விதிகளை பின்பற்றுகின்றன.",
};

const CTA: LocaleStr = {
  en: "Read all 12 case studies",
  zh: "查看全部 12 个完整案例",
  ms: "Baca kesemua 12 kajian kes",
  ta: "மொத்தம் 12 வழக்குகளைப் படிக்கவும்",
};

const TALENT_LABEL: LocaleStr = {
  en: "Talent",
  zh: "才艺方向",
  ms: "Bakat",
  ta: "திறமை",
};

const OUTCOME_LABEL: LocaleStr = {
  en: "Outcome",
  zh: "结果",
  ms: "Hasil",
  ta: "முடிவு",
};

export function HomeParentStoriesGrid() {
  const { locale } = useLanguage();
  const pick = (s: LocaleStr) => s[locale];

  return (
    <section className="bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ── Header ── */}
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {pick(KICKER)}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="font-display text-[1.875rem] font-extrabold leading-[1.1] tracking-tight text-intellectual sm:text-[2.25rem]"
          >
            {pick(TITLE)}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-intellectual-muted">
            {pick(SUBTITLE)}
          </p>
        </div>

        {/* ── 6 cards · 2×3 grid ── */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {STORIES.map((story, i) => {
            const Icon = story.icon;
            return (
              <article
                key={i}
                className="flex flex-col rounded-2xl border border-intellectual/10 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-champagne/40 hover:shadow-card sm:p-6"
              >
                {/* Icon + name */}
                <div className="mb-3 flex items-start gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${story.iconBg}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p
                      className="text-[10px] font-bold tracking-[0.14em] text-intellectual/55 normal-case"
                    >
                      #{i + 1}
                    </p>
                    <p
                      style={{ textTransform: "none" }}
                      className="font-display text-[15px] font-bold leading-tight text-intellectual"
                    >
                      {pick(story.name)}
                    </p>
                  </div>
                </div>

                {/* Talent line */}
                <div className="border-t border-intellectual/8 pt-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-intellectual/45">
                    {pick(TALENT_LABEL)}
                  </p>
                  <p className="mt-0.5 text-[13.5px] font-medium leading-snug text-intellectual">
                    {pick(story.talent)}
                  </p>
                </div>

                {/* Outcome — the punchline */}
                <div className="mt-3 flex-1 rounded-xl bg-champagne/8 p-3.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-champagne-dark">
                    {pick(OUTCOME_LABEL)}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-intellectual">
                    {pick(story.outcome)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Disclaimer + CTA ── */}
        <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="max-w-2xl text-[11px] leading-relaxed text-slate-400">
            {pick(DISCLAIMER)}
          </p>
          <Link
            href="/dsa-experience"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-intellectual px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intellectual sm:self-center"
          >
            <span style={{ textTransform: "none" }}>{pick(CTA)}</span>
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
