"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CalendarClock, School } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PillarBackLink } from "@/components/PillarBackLink";
import { RelatedCardsRow } from "@/components/RelatedCardsRow";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

const COPY = {
  kicker: {
    en: "DSA-Sec 2026 · Interview & Trial",
    zh: "DSA-Sec 2026 · 面试与试训",
    ms: "DSA-Sec 2026 · Temu Duga & Percubaan",
    ta: "DSA-Sec 2026 · நேர்காணல் & சோதனை",
  } satisfies LocaleStr,
  title: {
    en: "DSA prep — by your child's talent.",
    zh: "DSA 备战——按你孩子的才艺来。",
    ms: "Persediaan DSA — mengikut bakat anak anda.",
    ta: "DSA தயாரிப்பு — உங்கள் குழந்தையின் திறமை வாரியாக.",
  } satisfies LocaleStr,
  subtitle: {
    en: "Talent areas across sports, performing arts, visual arts, language, STEM, and leadership — each with what trial coaches actually assess, sample interview questions parents have reported, and the Singapore secondary schools that offer DSA in that domain.",
    zh: "才艺方向涵盖体育、表演艺术、视觉艺术、语言、数理、领导力——每个都写了 trial 教练真正看什么、家长论坛反馈的面试题样、以及哪些新加坡中学开这个项目。",
    ms: "Bidang bakat merentas sukan, seni persembahan, seni visual, bahasa, STEM, dan kepimpinan — setiap satu dengan apa yang dinilai oleh jurulatih percubaan, contoh soalan, dan sekolah menengah yang menawarkan DSA dalam domain itu.",
    ta: "விளையாட்டு, நிகழ்த்துக் கலைகள், காட்சிக் கலை, மொழி, STEM, தலைமைத்துவம் ஆகியவற்றில் திறமைப் பகுதிகள் — ஒவ்வொன்றும் சோதனை பயிற்சியாளர்கள் மதிப்பிடுவது, மாதிரி நேர்காணல் கேள்விகள், அந்தத் துறையில் DSA வழங்கும் சிங்கப்பூர் இடைநிலைப் பள்ளிகளை விளக்குகிறது.",
  } satisfies LocaleStr,
  contentBadge: {
    en: "EN content live · ZH · MS · TA rolling out July 2026",
    zh: "英文内容已上线 · 中文 · 马来文 · 泰米尔文 2026 年 7 月陆续上线",
    ms: "Kandungan EN telah disiarkan · ZH · MS · TA Julai 2026",
    ta: "EN உள்ளடக்கம் வெளியீடு · ZH · MS · TA ஜூலை 2026",
  } satisfies LocaleStr,
  comingSoon: {
    en: "Content coming",
    zh: "内容准备中",
    ms: "Kandungan akan datang",
    ta: "உள்ளடக்கம் வரும்",
  } satisfies LocaleStr,
  live: {
    en: "Live",
    zh: "已上线",
    ms: "Disiarkan",
    ta: "வெளியீடு",
  } satisfies LocaleStr,
  cardCta: {
    en: "Open prep page",
    zh: "打开备战页",
    ms: "Buka halaman persediaan",
    ta: "தயாரிப்பு பக்கம்",
  } satisfies LocaleStr,
  bottomTitle: {
    en: "Don't see your child's talent?",
    zh: "没看到你孩子的才艺？",
    ms: "Tidak nampak bakat anak anda?",
    ta: "உங்கள் குழந்தையின் திறமை இல்லையா?",
  } satisfies LocaleStr,
  bottomBody: {
    en: "MOE accepts DSA across sports, performing arts, visual arts, language and humanities, mathematics and science, leadership, and uniformed groups. We're building out one talent area per week — start with the general Interview Prep guide while you wait.",
    zh: "MOE 接受 DSA 涵盖体育、表演艺术、视觉艺术、语言人文、数理科学、领导力、制服团队等多个方向。我们每周更新一个才艺方向——其它项目可以先看通用面试准备指南。",
    ms: "MOE menerima DSA dalam sukan, seni persembahan, seni visual, bahasa & kemanusiaan, matematik & sains, kepimpinan, dan kumpulan beruniform. Kami membina satu bidang setiap minggu.",
    ta: "MOE விளையாட்டு, நிகழ்த்துக் கலைகள், காட்சி கலைகள், மொழி & மனிதநேயம், கணிதம் & அறிவியல், தலைமைத்துவம், சீருடை குழுக்கள் ஆகியவற்றில் DSA ஏற்றுக்கொள்கிறது.",
  } satisfies LocaleStr,
  bottomCta: {
    en: "General Interview Prep",
    zh: "通用面试准备",
    ms: "Persediaan Temu Duga Umum",
    ta: "பொது நேர்காணல் தயாரிப்பு",
  } satisfies LocaleStr,
};

const BC_GUIDE: LocaleStr = { en: "DSA Guide", zh: "DSA 指南", ms: "Panduan DSA", ta: "DSA வழிகாட்டி" };
const BC_HERE: LocaleStr = { en: "Talents", zh: "才艺方向", ms: "Bakat", ta: "திறமைகள்" };

const REL_KICKER: LocaleStr = { en: "Related reference", zh: "相关参考", ms: "Rujukan berkaitan", ta: "தொடர்புடைய குறிப்பு" };
const REL_HEADING: LocaleStr = {
  en: "Three references parents pair with the talents index",
  zh: "家长常与才艺索引一起看的三个参考",
  ms: "Tiga rujukan yang ibu bapa pasangkan dengan indeks bakat",
  ta: "திறமை அட்டவணையுடன் பார்க்கும் மூன்று குறிப்புகள்",
};
const R1_T: LocaleStr = { en: "2026 timeline", zh: "2026 时间线", ms: "Garis masa 2026", ta: "2026 கால அட்டவணை" };
const R1_B: LocaleStr = {
  en: "When the window opens, trial dates land, and offers become binding.",
  zh: "申请窗口何时开 · trial 何时进行 · offer 何时具约束力。",
  ms: "Bila tetingkap dibuka, tarikh trial, dan bila tawaran mengikat.",
  ta: "காலம் திறக்கும்போது, சோதனை தேதிகள், சலுகை எப்போது கட்டுப்படுத்துகிறது.",
};
const R2_T: LocaleStr = {
  en: "Interview prep overview",
  zh: "面试准备总览",
  ms: "Gambaran persediaan temu duga",
  ta: "நேர்காணல் தயாரிப்பு கண்ணோட்டம்",
};
const R2_B: LocaleStr = {
  en: "The 5-element self-intro, what panels score, common questions across all talents.",
  zh: "5 要素自我介绍 · 评委评分维度 · 跨才艺通用题。",
  ms: "Pengenalan diri 5-elemen, apa panel menilai, soalan biasa.",
  ta: "5-உறுப்பு சுய அறிமுகம், குழு என்ன மதிப்பிடுகிறது.",
};
const R3_T: LocaleStr = { en: "147 schools", zh: "147 所学校", ms: "147 sekolah", ta: "147 பள்ளிகள்" };
const R3_B: LocaleStr = {
  en: "Filter by talent area, region, IP / non-IP — with PSLE COP signals.",
  zh: "按才艺方向、区域、IP / 非 IP 筛选 · 含 PSLE COP 信号。",
  ms: "Tapis mengikut bakat, kawasan, IP / bukan IP.",
  ta: "திறமை, பகுதி, IP / non-IP மூலம் வடிகட்டவும்.",
};

/** Minimal per-talent data the index needs — projected server-side so the full
 * TALENT_DATA stays out of this client bundle. */
export type TalentCard = {
  slug: string;
  navLabel: LocaleStr;
  summary: LocaleStr;
  isLive: boolean;
};

export function TalentsIndexPageBody({ talents }: { talents: TalentCard[] }) {
  const { locale } = useLanguage();

  return (
    <>
      <SiteHeader />
      <Breadcrumb
        items={[
          { label: pick(BC_GUIDE, locale), href: "/dsa-guide" },
          { label: pick(BC_HERE, locale) },
        ]}
      />
      <main className="bg-surface">
        <section className="bg-hero-mesh">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
              {pick(COPY.kicker, locale)}
            </p>
            <h1
              style={{ textTransform: "none" }}
              className="font-display text-3xl font-extrabold leading-tight tracking-tight text-intellectual sm:text-4xl lg:text-5xl"
            >
              {pick(COPY.title, locale)}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-intellectual-muted">
              {pick(COPY.subtitle, locale)}
            </p>
            <p className="mt-5 inline-flex rounded-full border border-champagne/40 bg-champagne/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-champagne-dark normal-case">
              {pick(COPY.contentBadge, locale)}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {talents.map((t) => {
                const isLive = t.isLive;
                return (
                  <li
                    key={t.slug}
                    className="group relative flex flex-col rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft transition hover:border-intellectual/25 hover:shadow-md sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="font-display text-xl font-bold text-intellectual sm:text-2xl">
                        {t.navLabel[locale]}
                      </h2>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide normal-case ${
                          isLive
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-intellectual/8 text-intellectual/60"
                        }`}
                      >
                        {isLive ? pick(COPY.live, locale) : pick(COPY.comingSoon, locale)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-intellectual-muted">
                      {t.summary[locale]}
                    </p>
                    <Link
                      href={`/dsa-interview/${t.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-intellectual transition hover:text-intellectual-light"
                    >
                      {pick(COPY.cardCta, locale)}
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 rounded-2xl border border-intellectual/15 bg-intellectual p-6 text-white sm:p-8">
              <h2 className="font-display text-lg font-semibold sm:text-xl">
                {pick(COPY.bottomTitle, locale)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {pick(COPY.bottomBody, locale)}
              </p>
              <Link
                href="/dsa-interview"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
              >
                <span style={{ textTransform: "none" }}>{pick(COPY.bottomCta, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            {/* Less-crowded paths callout (2027 planning entry point) */}
            <div className="mt-6 rounded-2xl border border-champagne/40 bg-white p-6 shadow-card sm:p-8">
              <p className="text-[11px] font-bold tracking-[0.10em] text-champagne-dark normal-case">
                {locale === "zh"
                  ? "DSA-Sec 2027 提前规划"
                  : locale === "ms"
                  ? "Perancangan DSA-Sec 2027"
                  : locale === "ta"
                  ? "DSA-Sec 2027 திட்டமிடல்"
                  : "DSA-Sec 2027 planning"}
              </p>
              <h2
                style={{ textTransform: "none" }}
                className="mt-2 font-display text-lg font-semibold leading-snug text-intellectual sm:text-xl"
              >
                {locale === "zh"
                  ? "孩子是 P5？看看冷门路径"
                  : locale === "ms"
                  ? "Anak P5? Lihat laluan kurang sesak"
                  : locale === "ta"
                  ? "உங்கள் குழந்தை P5? குறைந்த நெரிசல் கொண்ட பாதைகளைப் பாருங்கள்"
                  : "Child in P5? Look at less-crowded paths"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {locale === "zh"
                  ? "10 个学校招但报名少的 talent · 6 个转项路径（武术 → 舞狮等）· P5 11 个月窗口的现实方案。"
                  : locale === "ms"
                  ? "10 bakat yang sekolah merekrut tetapi sedikit memohon · 6 laluan peralihan · tetingkap 11 bulan P5."
                  : locale === "ta"
                  ? "பள்ளிகள் சேர்க்கும் 10 திறமைகள் · 6 மாற்று பாதைகள் · P5-க்கு 11 மாத காலக்கெடு."
                  : "10 talents where schools recruit but few apply · 6 transfer paths (e.g. wushu → lion dance) · realistic 11-month window for current P5."}
              </p>
              <Link
                href="/dsa-interview/under-recruited-paths"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-intellectual-dark"
              >
                <span style={{ textTransform: "none" }}>
                  {locale === "zh"
                    ? "打开冷门路径页"
                    : locale === "ms"
                    ? "Buka halaman laluan niche"
                    : locale === "ta"
                    ? "குறைந்த நெரிசல் பக்கம்"
                    : "Open less-crowded paths"}
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <RelatedCardsRow
        kicker={pick(REL_KICKER, locale)}
        heading={pick(REL_HEADING, locale)}
        items={[
          { icon: CalendarClock, title: pick(R1_T, locale), body: pick(R1_B, locale), href: "/timeline" },
          { icon: BookOpen, title: pick(R2_T, locale), body: pick(R2_B, locale), href: "/dsa-interview" },
          { icon: School, title: pick(R3_T, locale), body: pick(R3_B, locale), href: "/dsa-finder" },
        ]}
      />
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
