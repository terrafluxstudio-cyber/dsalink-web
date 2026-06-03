"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CalendarClock,
  Compass,
  ExternalLink,
  GraduationCap,
  MessageSquareText,
  Music,
  School,
  Sparkles,
  Target,
  Timer,
  Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PillarBackLink } from "@/components/PillarBackLink";
import { RelatedCardsRow } from "@/components/RelatedCardsRow";
import { SchoolLogo } from "@/components/SchoolLogo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SubsectionAnchor } from "@/components/SubsectionAnchor";
import {
  ADJACENT_TALENTS,
  getTalentPage,
  type ChecklistGroup,
  type DimensionEntry,
  type InterviewQuestion,
  type LocaleStrFlex,
  type PositionEntry,
  type PreparedPieceEntry,
  type RichContent,
  type RichSchoolEntry,
  type TalentPage,
} from "@/lib/talentPages";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };
type Locale = "en" | "zh" | "ms" | "ta";

function pick(s: LocaleStr, locale: Locale): string {
  return s[locale];
}

/** Flex picker — falls back to EN when locale missing. */
function pickFlex(s: LocaleStrFlex, locale: Locale): string {
  return s[locale] ?? s.en;
}

function formatDate(iso: string, locale: Locale): string {
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

/* ===== Rich-content section components ===== */

function TrialDimensionsSection({
  rich,
  locale,
}: {
  rich: RichContent;
  locale: Locale;
}) {
  const heading: LocaleStr = {
    en: "What trial coaches actually assess",
    zh: "教练在 trial 上到底评什么",
    ms: "Apa yang jurulatih trial sebenarnya nilai",
    ta: "சோதனை பயிற்சியாளர்கள் உண்மையில் என்ன மதிப்பிடுகிறார்கள்",
  };
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SubsectionAnchor
          icon={Target}
          title={pick(heading, locale)}
          className="mb-6"
        />
        {rich.trialDimensionsIntro ? (
          <p className="mb-6 text-[0.9375rem] leading-relaxed text-intellectual-muted">
            {pickFlex(rich.trialDimensionsIntro, locale)}
          </p>
        ) : null}
        <ul className="space-y-4">
          {rich.trialDimensions.map((d: DimensionEntry, i: number) => (
            <li
              key={i}
              className="rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft sm:p-6"
            >
              <p className="font-display text-base font-semibold text-intellectual sm:text-lg">
                {pickFlex(d.label, locale)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-intellectual-muted sm:text-[0.9375rem]">
                {pickFlex(d.body, locale)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PreparedPieceSection({
  rich,
  locale,
}: {
  rich: RichContent;
  locale: Locale;
}) {
  if (!rich.preparedPiece) return null;
  const pp = rich.preparedPiece;

  const heading: LocaleStr = {
    en: "Audition piece you need to prepare",
    zh: "你需要提前准备的 audition piece",
    ms: "Persembahan yang anda perlu sediakan untuk audisi",
    ta: "ஆடிஷனுக்கு நீங்கள் தயார் செய்ய வேண்டியவை",
  };
  const tagLabel: LocaleStr = {
    en: "Prep required",
    zh: "需要提前准备",
    ms: "Perlu disediakan",
    ta: "தயாரிப்பு தேவை",
  };
  const sourceLabel: LocaleStr = {
    en: "Source",
    zh: "来源",
    ms: "Sumber",
    ta: "ஆதாரம்",
  };
  const coachCtaButton: LocaleStr = {
    en: "Find a coach",
    zh: "找一位 coach",
    ms: "Cari jurulatih",
    ta: "பயிற்சியாளர் தேடுங்கள்",
  };

  return (
    <section className="bg-surface-warm py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header with attention-grabbing badge */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-champagne px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] text-intellectual normal-case">
            <Sparkles className="h-3 w-3 shrink-0" aria-hidden />
            {pick(tagLabel, locale)}
          </span>
          <SubsectionAnchor icon={Music} title={pick(heading, locale)} />
        </div>

        {/* Intro */}
        <p className="mb-6 text-[0.9375rem] leading-relaxed text-intellectual-muted">
          {pickFlex(pp.intro, locale)}
        </p>

        {/* Variant entries — emphasized card grid */}
        <ul className="space-y-3">
          {pp.entries.map((e: PreparedPieceEntry, i: number) => (
            <li
              key={i}
              className="rounded-2xl border border-champagne/40 bg-white p-5 shadow-soft sm:p-6"
            >
              <p className="font-display text-[0.9375rem] font-semibold text-intellectual sm:text-base">
                {pickFlex(e.variant, locale)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-intellectual sm:text-[0.9375rem]">
                {pickFlex(e.requirement, locale)}
              </p>
              <p className="mt-2.5 inline-flex flex-wrap items-baseline gap-1.5 text-[11.5px] leading-relaxed text-intellectual/55">
                <span className="font-semibold tracking-[0.06em] text-champagne-dark">
                  {pick(sourceLabel, locale)}:
                </span>
                <span>{pickFlex(e.source, locale)}</span>
              </p>
            </li>
          ))}
        </ul>

        {/* Coach CTA — gold accent banner */}
        <div className="mt-7 overflow-hidden rounded-2xl border border-champagne/40 bg-intellectual text-white shadow-card">
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/20 text-champagne-light">
              <GraduationCap className="h-5 w-5" aria-hidden />
            </div>
            <p className="min-w-0 flex-1 text-[0.875rem] leading-relaxed text-white/85 sm:text-[0.9375rem]">
              {pickFlex(pp.coachCtaBlurb, locale)}
            </p>
            <Link
              href="/dsa-coaches"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-xl bg-champagne px-5 py-2.5 text-[13px] font-semibold text-intellectual shadow-gold transition hover:bg-champagne-light sm:self-center"
            >
              <span style={{ textTransform: "none" }}>{pick(coachCtaButton, locale)}</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PositionFocusSection({
  rich,
  locale,
}: {
  rich: RichContent;
  locale: Locale;
}) {
  const heading: LocaleStr = {
    en: "Position-specific focus",
    zh: "按位置看：教练重点关注",
    ms: "Fokus mengikut posisi",
    ta: "நிலை வாரியான கவனம்",
  };
  return (
    <section className="pb-12 sm:pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SubsectionAnchor
          icon={Users}
          title={pick(heading, locale)}
          className="mb-6"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {rich.positionFocus.map((p: PositionEntry, i: number) => (
            <div
              key={i}
              className="rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft sm:p-6"
            >
              <p className="font-display text-base font-semibold text-intellectual sm:text-lg">
                {pickFlex(p.position, locale)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-intellectual-muted sm:text-[0.9375rem]">
                {pickFlex(p.body, locale)}
              </p>
            </div>
          ))}
        </div>
        {rich.positionFocusNote ? (
          <p className="mt-4 text-[0.8125rem] leading-relaxed text-intellectual/60 sm:text-sm">
            {pickFlex(rich.positionFocusNote, locale)}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function InterviewQuestionsSection({
  rich,
  locale,
}: {
  rich: RichContent;
  locale: Locale;
}) {
  const heading: LocaleStr = {
    en: "Sample interview questions",
    zh: "面试题样：高频问法 + 怎么答",
    ms: "Soalan temu duga contoh",
    ta: "மாதிரி நேர்காணல் கேள்விகள்",
  };
  const subtextLabel: LocaleStr = {
    en: "Subtext",
    zh: "潜台词",
    ms: "Maksud sebenar",
    ta: "உள்ளார்ந்த பொருள்",
  };
  const approachLabel: LocaleStr = {
    en: "Approach",
    zh: "怎么答",
    ms: "Pendekatan",
    ta: "அணுகுமுறை",
  };
  const templateLabel: LocaleStr = {
    en: "Template",
    zh: "模板答法",
    ms: "Templat",
    ta: "வார்ப்புரு",
  };
  return (
    <section className="pb-12 sm:pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SubsectionAnchor
          icon={MessageSquareText}
          title={pick(heading, locale)}
          className="mb-6"
        />
        <ol className="space-y-5">
          {rich.interviewQuestions.map((q: InterviewQuestion, i: number) => (
            <li
              key={i}
              className="rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft sm:p-6"
            >
              <p className="text-[11px] font-bold tracking-wider text-champagne-dark">
                Q{i + 1}
              </p>
              <p className="mt-1 font-display text-base font-semibold leading-snug text-intellectual sm:text-lg">
                "{pickFlex(q.question, locale)}"
              </p>
              <dl className="mt-4 space-y-2.5 text-sm leading-relaxed sm:text-[0.9375rem]">
                <div>
                  <dt className="inline font-semibold text-intellectual">
                    {pick(subtextLabel, locale)}:
                  </dt>{" "}
                  <dd className="inline text-intellectual-muted">
                    {pickFlex(q.subtext, locale)}
                  </dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-intellectual">
                    {pick(approachLabel, locale)}:
                  </dt>{" "}
                  <dd className="inline text-intellectual-muted">
                    {pickFlex(q.approach, locale)}
                  </dd>
                </div>
                <div className="rounded-lg bg-surface px-3 py-2">
                  <dt className="inline text-[11px] font-bold tracking-wider text-champagne-dark">
                    {pick(templateLabel, locale)}
                  </dt>
                  <dd className="mt-1 italic text-intellectual">
                    "{pickFlex(q.template, locale)}"
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RichSchoolsSection({
  rich,
  locale,
}: {
  rich: RichContent;
  locale: Locale;
}) {
  const heading: LocaleStr = {
    en: "Schools that offer this talent via DSA",
    zh: "通过 DSA 招收此项目的学校",
    ms: "Sekolah yang menawarkan bakat ini melalui DSA",
    ta: "DSA மூலம் இந்த திறமையை வழங்கும் பள்ளிகள்",
  };
  const finderCta: LocaleStr = {
    en: "Open school finder",
    zh: "打开学校 finder",
    ms: "Buka pencari sekolah",
    ta: "பள்ளி தேடலைத் திற",
  };
  return (
    <section className="pb-12 sm:pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SubsectionAnchor
          icon={School}
          title={pick(heading, locale)}
          className="mb-6"
        />
        <ul className="space-y-3">
          {rich.schools.map((s: RichSchoolEntry, i: number) => (
            <li
              key={i}
              className="rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft sm:p-6"
            >
              <div className="flex items-start gap-4">
                <SchoolLogo nameEn={s.name} size={44} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-display text-base font-semibold text-intellectual sm:text-lg">
                      {s.name}
                    </p>
                    <p className="text-[0.75rem] font-medium text-champagne-dark">
                      {pickFlex(s.talentArea, locale)}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-intellectual-muted sm:text-[0.9375rem]">
                    {pickFlex(s.context, locale)}
                  </p>
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-[0.8125rem] font-semibold text-intellectual transition hover:text-intellectual-light"
                    >
                      Official page
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/dsa-finder"
          className="mt-6 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-intellectual transition hover:text-intellectual-light"
        >
          {pick(finderCta, locale)}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

function ParentChecklistSection({
  rich,
  locale,
}: {
  rich: RichContent;
  locale: Locale;
}) {
  const heading: LocaleStr = {
    en: "Parent-as-coach checklist",
    zh: "家长陪练清单",
    ms: "Senarai semak ibu bapa sebagai jurulatih",
    ta: "பெற்றோர் பயிற்சியாளர் சரிபார்ப்பு பட்டியல்",
  };
  return (
    <section className="pb-12 sm:pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SubsectionAnchor
          icon={Timer}
          title={pick(heading, locale)}
          className="mb-6"
        />
        <div className="space-y-5">
          {rich.parentChecklist.map((g: ChecklistGroup, i: number) => (
            <div
              key={i}
              className="rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft sm:p-6"
            >
              <p className="font-display text-base font-semibold text-intellectual sm:text-lg">
                {pickFlex(g.label, locale)}
              </p>
              <ul className="mt-3 space-y-3">
                {g.items.map((it: LocaleStrFlex, j: number) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-intellectual-muted sm:text-[0.9375rem]">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne"
                      aria-hidden
                    />
                    <span>{pickFlex(it, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SprintAdviceSection({
  rich,
  locale,
}: {
  rich: RichContent;
  locale: Locale;
}) {
  const heading: LocaleStr = {
    en: "If the runway is short",
    zh: "如果时间已经不多",
    ms: "Jika masa sudah singkat",
    ta: "நேரம் குறைவாக இருந்தால்",
  };
  return (
    <section className="pb-12 sm:pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-intellectual/15 bg-surface-warm/60 p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-champagne/15 text-champagne-dark">
              <Sparkles className="h-4.5 w-4.5" aria-hidden />
            </span>
            <h2 className="font-display text-xl font-semibold text-intellectual sm:text-2xl">
              {pick(heading, locale)}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-intellectual sm:text-[0.9375rem]">
            {pickFlex(rich.sprintAdvice, locale)}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== Placeholder body (used when talent.rich is undefined) ===== */

function PlaceholderBody({ talent }: { talent: TalentPage }) {
  const { locale } = useLanguage();
  const placeholderTitle: LocaleStr = {
    en: "Why this page exists",
    zh: "为什么有这页",
    ms: "Mengapa halaman ini wujud",
    ta: "இந்த பக்கம் ஏன் உள்ளது",
  };
  const placeholderBody: LocaleStr = {
    en: "DSALink is the Singapore parent's reference platform for DSA-Sec. We're filling in each talent area with deep, parent-tested content — questions schools actually ask, what trials measure, and which schools to target. This page goes live first as a placeholder so parents can subscribe and we can ship updates as research lands.",
    zh: "DSALink 是新加坡家长的 DSA-Sec reference 平台。我们在为每个项目填入深度、家长验证过的内容——学校真正会问的问题、trial 评分维度、哪些学校值得申请。本页先以占位形式上线，方便家长订阅，等调研完成立即更新。",
    ms: "DSALink ialah platform rujukan ibu bapa Singapura untuk DSA-Sec. Kami sedang mengisi setiap bidang bakat dengan kandungan mendalam — soalan yang sekolah tanya, apa yang trial nilai, sekolah mana untuk disasarkan.",
    ta: "DSALink என்பது சிங்கப்பூர் பெற்றோர்களுக்கான DSA-Sec குறிப்பு தளம். ஒவ்வொரு திறமை பகுதியிலும் ஆழமான உள்ளடக்கத்தை நிரப்புகிறோம் — பள்ளிகள் கேட்கும் கேள்விகள், சோதனை அளவீடுகள், எந்த பள்ளிகளை இலக்காகக் கொள்ளவேண்டும்.",
  };
  const schoolsTitle: LocaleStr = {
    en: "Schools that participate in this talent",
    zh: "招生此项目的学校（节选）",
    ms: "Sekolah yang menerima bakat ini",
    ta: "இந்த திறமைக்கு பங்கேற்கும் பள்ளிகள்",
  };
  const schoolsHint: LocaleStr = {
    en: "A short sample. The full list is in the school finder, filterable by talent area and region.",
    zh: "节选展示。完整名单在学校 finder，可按才艺与区域筛选。",
    ms: "Sampel pendek. Senarai penuh dalam pencari sekolah, boleh ditapis mengikut bakat dan kawasan.",
    ta: "சிறு மாதிரி. முழு பட்டியல் பள்ளி தேடலில் உள்ளது.",
  };
  const finderCta: LocaleStr = {
    en: "Open school finder",
    zh: "打开学校 finder",
    ms: "Buka pencari sekolah",
    ta: "பள்ளி தேடலைத் திற",
  };
  return (
    <>
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
    </>
  );
}

/* ===== Main body ===== */

export function InterviewTalentPageBody({ talent }: { talent: TalentPage }) {
  const { locale } = useLanguage();
  const isRich = Boolean(talent.rich);

  const kicker: LocaleStr = {
    en: "Interview Prep · by talent",
    zh: "面试准备 · 分项目",
    ms: "Persediaan Temu Duga · mengikut bakat",
    ta: "நேர்காணல் தயாரிப்பு · திறமை வாரியாக",
  };
  const comingLabel: LocaleStr = {
    en: "Full content coming by",
    zh: "完整内容预计上线于",
    ms: "Kandungan penuh akan datang menjelang",
    ta: "முழு உள்ளடக்கம் வரும் தேதி",
  };
  const subscribeTitle: LocaleStr = {
    en: "Get notified when this page goes deeper",
    zh: "本页新内容上线时邮件通知我",
    ms: "Diberitahu apabila halaman ini lebih mendalam",
    ta: "இந்த பக்கம் மேலும் ஆழமாகும்போது அறிவிக்கவும்",
  };
  const subscribeBody: LocaleStr = {
    en: "We send one short email when this talent page gets a meaningful update — new questions, school changes, parent reports.",
    zh: "本项目页面有实质更新时（新题目、学校变动、家长反馈），我们发一封简短邮件。",
    ms: "Kami hantar satu e-mel pendek apabila halaman bakat ini dikemas kini secara bermakna.",
    ta: "இந்த பக்கம் முக்கிய புதுப்பித்தலைப் பெறும்போது ஒரு சிறு மின்னஞ்சல் அனுப்புவோம்.",
  };
  const subscribeCta: LocaleStr = {
    en: "Subscribe to parent list",
    zh: "订阅家长邮件列表",
    ms: "Langgan senarai ibu bapa",
    ta: "பெற்றோர் பட்டியலில் சேரவும்",
  };
  const backCta: LocaleStr = {
    en: "All interview prep",
    zh: "全部面试准备",
    ms: "Semua persediaan temu duga",
    ta: "அனைத்து நேர்காணல் தயாரிப்பு",
  };

  // Breadcrumb labels — locale-resolved
  const bcGuide: LocaleStr = {
    en: "DSA Guide",
    zh: "DSA 指南",
    ms: "Panduan DSA",
    ta: "DSA வழிகாட்டி",
  };
  const bcTalents: LocaleStr = {
    en: "Talents",
    zh: "才艺方向",
    ms: "Bakat",
    ta: "திறமைகள்",
  };

  // Related-cards copy
  const relatedKicker: LocaleStr = {
    en: "Related reference",
    zh: "相关参考",
    ms: "Rujukan berkaitan",
    ta: "தொடர்புடைய குறிப்பு",
  };
  const relatedHeading: LocaleStr = {
    en: "Three more references parents open from this page",
    zh: "家长从本页常跳的三个参考",
    ms: "Tiga rujukan tambahan dari halaman ini",
    ta: "இந்த பக்கத்திலிருந்து பெற்றோர் திறக்கும் மூன்று குறிப்புகள்",
  };
  const r1Title: LocaleStr = {
    en: "2026 timeline",
    zh: "2026 时间线",
    ms: "Garis masa 2026",
    ta: "2026 கால அட்டவணை",
  };
  const r1Body: LocaleStr = {
    en: "Month-by-month: application window, trial dates, results day, when offers become binding.",
    zh: "逐月：申请窗口、trial 日期、放榜日、offer 何时具约束力。",
    ms: "Bulan demi bulan: tetingkap permohonan, tarikh trial, hari keputusan.",
    ta: "மாதம் வாரியாக: விண்ணப்ப காலம், சோதனை தேதிகள், முடிவு நாள்.",
  };

  // Adjacency-driven "talent → talent" cards (highest cross-cluster SEO value)
  const adjacentSlugs = ADJACENT_TALENTS[talent.slug];
  const adjacentPages = adjacentSlugs
    .map((s) => getTalentPage(s))
    .filter((p): p is TalentPage => p !== null);

  // "Also consider" prefix for the adjacent talent cards
  const alsoPrefix: LocaleStr = {
    en: "Also consider",
    zh: "也可以看看",
    ms: "Pertimbang juga",
    ta: "இவற்றையும் கருதுங்கள்",
  };

  return (
    <>
      <SiteHeader />
      <Breadcrumb
        items={[
          { label: pick(bcGuide, locale), href: "/dsa-guide" },
          { label: pick(bcTalents, locale), href: "/dsa-interview/talents" },
          { label: pick(talent.navLabel, locale) },
        ]}
      />
      <main className="bg-surface">
        {/* Hero */}
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

            {/* Coming-soon pill: only show on placeholder pages. */}
            {!isRich ? (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-champagne/10 px-4 py-1.5 text-[12px] font-semibold text-champagne-dark">
                <CalendarClock className="h-3.5 w-3.5" aria-hidden />
                <span className="normal-case">
                  {pick(comingLabel, locale)} {formatDate(talent.contentReadyBy, locale)}
                </span>
              </div>
            ) : null}
          </div>
        </section>

        {/* Body: rich or placeholder */}
        {isRich && talent.rich ? (
          <>
            <TrialDimensionsSection rich={talent.rich} locale={locale} />
            <PreparedPieceSection rich={talent.rich} locale={locale} />
            <PositionFocusSection rich={talent.rich} locale={locale} />
            <InterviewQuestionsSection rich={talent.rich} locale={locale} />
            <RichSchoolsSection rich={talent.rich} locale={locale} />
            <ParentChecklistSection rich={talent.rich} locale={locale} />
            <SprintAdviceSection rich={talent.rich} locale={locale} />
          </>
        ) : (
          <PlaceholderBody talent={talent} />
        )}

        {/* Subscribe CTA */}
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

        {/* Back link */}
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
      <RelatedCardsRow
        kicker={pick(relatedKicker, locale)}
        heading={pick(relatedHeading, locale)}
        items={[
          {
            icon: CalendarClock,
            title: pick(r1Title, locale),
            body: pick(r1Body, locale),
            href: "/timeline",
          },
          ...adjacentPages.map((p) => ({
            icon: Compass,
            title: `${pick(alsoPrefix, locale)}: ${p.navLabel[locale]}`,
            body: p.hook[locale],
            href: `/dsa-interview/${p.slug}`,
          })),
        ]}
      />
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
