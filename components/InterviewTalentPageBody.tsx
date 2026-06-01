"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft, CalendarClock, School } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { TalentPage } from "@/lib/talentPages";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

function formatDate(iso: string, locale: "en" | "zh" | "ms" | "ta"): string {
  const d = new Date(iso + "T00:00:00Z");
  const monthIdx = d.getUTCMonth();
  const day = d.getUTCDate();
  const year = d.getUTCFullYear();
  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthsZh = ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"];
  const monthsMs = ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"];
  if (locale === "zh") return `${year} 年 ${monthsZh[monthIdx]} ${day} 日`;
  if (locale === "ms") return `${day} ${monthsMs[monthIdx]} ${year}`;
  if (locale === "ta") return `${day} ${monthsEn[monthIdx]} ${year}`;
  return `${monthsEn[monthIdx]} ${day}, ${year}`;
}

export function InterviewTalentPageBody({ talent }: { talent: TalentPage }) {
  const { locale } = useLanguage();

  const kicker = {
    en: "Interview Prep · by talent",
    zh: "面试准备 · 分项目",
    ms: "Persediaan Temu Duga · mengikut bakat",
    ta: "நேர்காணல் தயாரிப்பு · திறமை வாரியாக",
  };
  const comingLabel = {
    en: "Full content coming by",
    zh: "完整内容预计上线于",
    ms: "Kandungan penuh akan datang menjelang",
    ta: "முழு உள்ளடக்கம் வரும் தேதி",
  };
  const placeholderTitle = {
    en: "Why this page exists",
    zh: "为什么有这页",
    ms: "Mengapa halaman ini wujud",
    ta: "இந்த பக்கம் ஏன் உள்ளது",
  };
  const placeholderBody = {
    en: "DSALink is the Singapore parent's reference platform for DSA-Sec. We're filling in each talent area with deep, parent-tested content — questions schools actually ask, what trials measure, and which schools to target. This page goes live first as a placeholder so parents can subscribe and we can ship updates as research lands.",
    zh: "DSALink 是新加坡家长的 DSA-Sec reference 平台。我们在为每个项目填入深度、家长验证过的内容——学校真正会问的问题、trial 评分维度、哪些学校值得申请。本页先以占位形式上线，方便家长订阅，等调研完成立即更新。",
    ms: "DSALink ialah platform rujukan ibu bapa Singapura untuk DSA-Sec. Kami sedang mengisi setiap bidang bakat dengan kandungan mendalam — soalan yang sekolah tanya, apa yang trial nilai, sekolah mana untuk disasarkan.",
    ta: "DSALink என்பது சிங்கப்பூர் பெற்றோர்களுக்கான DSA-Sec குறிப்பு தளம். ஒவ்வொரு திறமை பகுதியிலும் ஆழமான உள்ளடக்கத்தை நிரப்புகிறோம் — பள்ளிகள் கேட்கும் கேள்விகள், சோதனை அளவீடுகள், எந்த பள்ளிகளை இலக்காகக் கொள்ளவேண்டும்.",
  };
  const schoolsTitle = {
    en: "Schools that participate in this talent",
    zh: "招生此项目的学校（节选）",
    ms: "Sekolah yang menerima bakat ini",
    ta: "இந்த திறமைக்கு பங்கேற்கும் பள்ளிகள்",
  };
  const schoolsHint = {
    en: "A short sample. The full list is in the school finder, filterable by talent area and region.",
    zh: "节选展示。完整名单在学校 finder，可按才艺与区域筛选。",
    ms: "Sampel pendek. Senarai penuh dalam pencari sekolah, boleh ditapis mengikut bakat dan kawasan.",
    ta: "சிறு மாதிரி. முழு பட்டியல் பள்ளி தேடலில் உள்ளது.",
  };
  const finderCta = {
    en: "Open school finder",
    zh: "打开学校 finder",
    ms: "Buka pencari sekolah",
    ta: "பள்ளி தேடலைத் திற",
  };
  const subscribeTitle = {
    en: "Get notified when this page goes deep",
    zh: "本页深度内容上线时邮件通知我",
    ms: "Diberitahu apabila halaman ini lengkap",
    ta: "இந்த பக்கம் முழுமை அடையும்போது அறிவிக்கவும்",
  };
  const subscribeBody = {
    en: "We send one short email when the full content for this talent lands — sample questions, trial breakdowns, and school-specific notes.",
    zh: "本项目深度内容（题样、trial 拆解、学校备注）上线时，我们发一封简短邮件给你。",
    ms: "Kami hantar satu e-mel pendek apabila kandungan penuh sedia — soalan, trial, nota sekolah.",
    ta: "முழு உள்ளடக்கம் தயாராகும்போது ஒரு சிறு மின்னஞ்சல் அனுப்புவோம் — கேள்விகள், சோதனை, பள்ளி குறிப்புகள்.",
  };
  const subscribeCta = {
    en: "Subscribe to parent list",
    zh: "订阅家长邮件列表",
    ms: "Langgan senarai ibu bapa",
    ta: "பெற்றோர் பட்டியலில் சேரவும்",
  };
  const backCta = {
    en: "All interview prep",
    zh: "全部面试准备",
    ms: "Semua persediaan temu duga",
    ta: "அனைத்து நேர்காணல் தயாரிப்பு",
  };

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        {/* Block 1: Hero */}
        <section className="bg-hero-mesh">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
              {pick(kicker, locale)} · {pick(talent.navLabel, locale)}
            </p>
            <h1
              style={{ textTransform: "none" }}
              className="font-display text-3xl font-extrabold leading-tight tracking-tight text-intellectual sm:text-4xl lg:text-5xl"
            >
              {pick(talent.hook, locale)}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-intellectual-muted">
              {pick(talent.intro, locale)}
            </p>

            {/* Coming soon strip */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-champagne/10 px-4 py-1.5 text-[12px] font-semibold text-champagne-dark">
              <CalendarClock className="h-3.5 w-3.5" aria-hidden />
              <span className="normal-case">
                {pick(comingLabel, locale)} {formatDate(talent.contentReadyBy, locale)}
              </span>
            </div>
          </div>
        </section>

        {/* Block 2: Placeholder body */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-2xl border border-intellectual/12 bg-white p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-xl font-semibold text-intellectual sm:text-2xl">
                {pick(placeholderTitle, locale)}
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-intellectual-muted">
                {pick(placeholderBody, locale)}
              </p>
            </div>
          </div>
        </section>

        {/* Block 3: Sample participating schools */}
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-2xl border border-intellectual/12 bg-white p-6 shadow-soft sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
                  <School className="h-4.5 w-4.5" aria-hidden />
                </span>
                <h2 className="font-display text-xl font-semibold text-intellectual sm:text-2xl">
                  {pick(schoolsTitle, locale)}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-intellectual-muted">
                {pick(schoolsHint, locale)}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {talent.sampleSchools.map((school) => (
                  <li
                    key={school}
                    className="rounded-lg border border-intellectual/10 bg-surface px-3 py-2 text-sm text-intellectual"
                  >
                    {school}
                  </li>
                ))}
              </ul>
              <Link
                href="/dsa-finder"
                className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-intellectual transition hover:text-intellectual-light"
              >
                {pick(finderCta, locale)}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Block 4: Subscribe CTA */}
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-2xl border border-intellectual/15 bg-gradient-to-br from-intellectual to-intellectual-dark p-6 text-white shadow-soft sm:p-8">
              <p className="font-display text-lg font-semibold sm:text-xl">
                {pick(subscribeTitle, locale)}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
                {pick(subscribeBody, locale)}
              </p>
              <Link
                href="/apply#subscribe"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
              >
                <span style={{ textTransform: "none" }}>{pick(subscribeCta, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Block 5: Back to overview */}
        <section className="pb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Link
              href="/dsa-interview"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-intellectual transition hover:text-intellectual-light"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {pick(backCta, locale)}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
