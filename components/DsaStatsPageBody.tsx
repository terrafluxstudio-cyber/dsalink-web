"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Layers, School, Sparkles, Database } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PillarBackLink } from "@/components/PillarBackLink";
import { RelatedCardsRow } from "@/components/RelatedCardsRow";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type Locale = "en" | "zh" | "ms" | "ta";
type LocaleStr = { en: string; zh: string; ms: string; ta: string };

const REL_KICKER: LocaleStr = {
  en: "Related reference",
  zh: "相关参考",
  ms: "Rujukan berkaitan",
  ta: "தொடர்புடைய குறிப்பு",
};
const REL_HEADING: LocaleStr = {
  en: "Turn these numbers into a shortlist",
  zh: "把这些数据变成候选名单",
  ms: "Jadikan angka ini senarai pendek",
  ta: "இந்த எண்களை ஒரு பட்டியலாக மாற்றுங்கள்",
};
const REL_COP_T: LocaleStr = { en: "PSLE cut-off history", zh: "PSLE 截分历史", ms: "Sejarah cut-off PSLE", ta: "PSLE cut-off வரலாறு" };
const REL_COP_B: LocaleStr = {
  en: "2023–2025 COP by school, to read these talent counts against academic profile.",
  zh: "2023–2025 各校截分，把才艺数据对照学术水平来看。",
  ms: "COP 2023–2025 ikut sekolah, untuk membaca kiraan bakat ini dengan profil akademik.",
  ta: "2023–2025 பள்ளி வாரியான COP, இந்த திறமை எண்ணிக்கையை கல்விச் சுயவிவரத்துடன் ஒப்பிட.",
};
const REL_SCHOOLS_T: LocaleStr = { en: "All 147 schools", zh: "全部 147 所学校", ms: "Semua 147 sekolah", ta: "147 பள்ளிகள்" };
const REL_SCHOOLS_B: LocaleStr = {
  en: "The full directory — open any school to see its DSA talent areas and programmes.",
  zh: "完整名录——点开任一所学校看它的 DSA 才艺方向与课程。",
  ms: "Direktori penuh — buka mana-mana sekolah untuk lihat bidang bakat DSA.",
  ta: "முழுப் பட்டியல் — எந்தப் பள்ளியின் DSA திறமைத் துறைகளையும் பார்க்க.",
};
const REL_WID_T: LocaleStr = { en: "What DSA is", zh: "DSA 是什么", ms: "Apa itu DSA", ta: "DSA என்றால் என்ன" };
const REL_WID_B: LocaleStr = {
  en: "The plain-English explainer of how DSA-Sec actually works before you dive into data.",
  zh: "在钻数据之前，先用通俗讲解搞懂 DSA-Sec 怎么运作。",
  ms: "Penjelasan ringkas cara DSA-Sec berfungsi sebelum anda meneliti data.",
  ta: "தரவில் ஆழ்வதற்கு முன் DSA-Sec எவ்வாறு செயல்படுகிறது என்ற எளிய விளக்கம்.",
};

export type StatsProps = {
  schools: number;
  offerings: number;
  distinctTalents: number;
  categoriesCount: number;
  categories: { label: LocaleStr; schools: number; offerings: number }[];
  topTalents: { label: LocaleStr; schools: number }[];
  /** ISO date the master list was last compiled (data file mtime). */
  compiledOn: string;
};

function pick(s: LocaleStr, l: Locale) {
  return s[l];
}

function fmt(n: number, l: Locale) {
  return n.toLocaleString(l === "zh" ? "zh-CN" : l === "ta" ? "ta-IN" : "en-SG");
}

export function DsaStatsPageBody({ stats }: { stats: StatsProps }) {
  const { locale } = useLanguage();

  const KICKER: LocaleStr = {
    en: "DSA-Sec 2026 · By the numbers",
    zh: "DSA-Sec 2026 · 数据一览",
    ms: "DSA-Sec 2026 · Dalam angka",
    ta: "DSA-Sec 2026 · எண்களில்",
  };
  const TITLE: LocaleStr = {
    en: "DSA in Singapore secondary schools — the 2026 numbers",
    zh: "新加坡中学 DSA——2026 数据全景",
    ms: "DSA di sekolah menengah Singapura — angka 2026",
    ta: "சிங்கப்பூர் இடைநிலைப் பள்ளிகளில் DSA — 2026 எண்கள்",
  };
  const SUBTITLE: LocaleStr = {
    en: "How many schools offer Direct School Admission, across which talent areas, compiled from the official MOE SchoolFinder DSA listings. Free to cite with a link back.",
    zh: "有多少学校开放直接招生（DSA）、覆盖哪些才艺方向——数据整理自 MOE SchoolFinder 官方 DSA 列表。欢迎引用，注明并链接来源即可。",
    ms: "Berapa banyak sekolah menawarkan DSA dan dalam bidang bakat mana — disusun daripada senarai DSA rasmi MOE SchoolFinder. Bebas dipetik dengan pautan kembali.",
    ta: "எத்தனை பள்ளிகள் DSA வழங்குகின்றன, எந்தத் திறமைப் பகுதிகளில் — MOE SchoolFinder அதிகாரப்பூர்வ DSA பட்டியலிலிருந்து தொகுக்கப்பட்டது. மூலத்தை இணைத்து சுட்டலாம்.",
  };

  const STAT_SCHOOLS: LocaleStr = { en: "schools offering DSA", zh: "所学校开放 DSA", ms: "sekolah menawarkan DSA", ta: "பள்ளிகள் DSA வழங்குகின்றன" };
  const STAT_OFFERINGS: LocaleStr = { en: "talent-area offerings", zh: "个才艺方向名额", ms: "tawaran bidang bakat", ta: "திறமைப் பகுதி வழங்கல்கள்" };
  const STAT_DISTINCT: LocaleStr = { en: "distinct talent areas", zh: "种不同才艺方向", ms: "bidang bakat berbeza", ta: "தனித்துவ திறமைப் பகுதிகள்" };
  const STAT_CATS: LocaleStr = { en: "talent categories", zh: "大类别", ms: "kategori bakat", ta: "திறமை வகைகள்" };

  const CAT_HEADING: LocaleStr = {
    en: "Offerings by category",
    zh: "按大类看招生",
    ms: "Tawaran mengikut kategori",
    ta: "வகை வாரியான வழங்கல்கள்",
  };
  const COL_CAT: LocaleStr = { en: "Category", zh: "类别", ms: "Kategori", ta: "வகை" };
  const COL_SCHOOLS: LocaleStr = { en: "Schools", zh: "学校数", ms: "Sekolah", ta: "பள்ளிகள்" };
  const COL_OFFERINGS: LocaleStr = { en: "Offerings", zh: "名额数", ms: "Tawaran", ta: "வழங்கல்கள்" };

  const TOP_HEADING: LocaleStr = {
    en: "Most-offered talent areas",
    zh: "开设最多的才艺方向",
    ms: "Bidang bakat paling banyak ditawarkan",
    ta: "அதிகம் வழங்கப்படும் திறமைப் பகுதிகள்",
  };
  const TOP_SUB: LocaleStr = {
    en: "Ranked by how many of the 147 schools list each talent area for DSA.",
    zh: "按 147 所学校中有多少所将该才艺列为 DSA 招生项目排序。",
    ms: "Disusun mengikut berapa daripada 147 sekolah menyenaraikan setiap bidang untuk DSA.",
    ta: "147 பள்ளிகளில் எத்தனை ஒவ்வொரு பகுதியையும் DSA-வுக்குப் பட்டியலிடுகின்றன என்பதன் அடிப்படையில்.",
  };
  const COL_TALENT: LocaleStr = { en: "Talent area", zh: "才艺方向", ms: "Bidang bakat", ta: "திறமைப் பகுதி" };

  const METHOD_HEADING: LocaleStr = {
    en: "Methodology & source",
    zh: "数据来源与口径",
    ms: "Metodologi & sumber",
    ta: "முறையியல் & ஆதாரம்",
  };
  const METHOD_BODY: LocaleStr = {
    en: `Compiled from the official MOE SchoolFinder DSA talent-area listings for all ${fmt(stats.schools, "en")} secondary schools that offer Direct School Admission. "Offerings" counts each school × talent-area pair; "schools" counts distinct schools. Figures reflect the 2026 DSA exercise and can shift as schools update listings. Last compiled ${stats.compiledOn}.`,
    zh: `整理自 MOE SchoolFinder 官方 DSA 才艺方向列表，覆盖全部 ${fmt(stats.schools, "zh")} 所开放直接招生的中学。「名额」按「学校 × 才艺方向」逐对计数；「学校数」按不重复学校计数。数据对应 2026 年 DSA 招生，学校更新列表后可能变动。最近整理：${stats.compiledOn}。`,
    ms: `Disusun daripada senarai bidang bakat DSA rasmi MOE SchoolFinder bagi kesemua ${fmt(stats.schools, "ms")} sekolah menengah yang menawarkan DSA. "Tawaran" mengira setiap pasangan sekolah × bidang; "sekolah" mengira sekolah berbeza. Angka mencerminkan latihan DSA 2026 dan boleh berubah. Dikemas kini ${stats.compiledOn}.`,
    ta: `DSA வழங்கும் ${fmt(stats.schools, "ta")} இடைநிலைப் பள்ளிகளுக்கான MOE SchoolFinder அதிகாரப்பூர்வ DSA திறமைப் பகுதி பட்டியலிலிருந்து தொகுக்கப்பட்டது. "வழங்கல்கள்" என்பது பள்ளி × பகுதி இணைகளை எண்ணுகிறது; "பள்ளிகள்" தனித்துவ பள்ளிகளை எண்ணுகிறது. எண்கள் 2026 DSA-ஐ பிரதிபலிக்கின்றன. கடைசியாக ${stats.compiledOn} அன்று தொகுக்கப்பட்டது.`,
  };
  const CITE: LocaleStr = {
    en: "Citing this? Please credit DSALink (dsalink.sg) with a link.",
    zh: "引用这些数据？请注明来源 DSALink（dsalink.sg）并加链接。",
    ms: "Memetik ini? Sila kreditkan DSALink (dsalink.sg) dengan pautan.",
    ta: "இதை சுட்டுகிறீர்களா? DSALink (dsalink.sg) என இணைப்புடன் குறிப்பிடவும்.",
  };

  const CTA_FINDER: LocaleStr = { en: "Open the school finder", zh: "打开学校 finder", ms: "Buka pencari sekolah", ta: "பள்ளி தேடலைத் திற" };
  const CTA_TALENTS: LocaleStr = { en: "Browse prep by talent", zh: "按才艺浏览备战", ms: "Persediaan mengikut bakat", ta: "திறமை வாரியாக தயாரிப்பு" };

  const BC_GUIDE: LocaleStr = { en: "DSA Guide", zh: "DSA 指南", ms: "Panduan DSA", ta: "DSA வழிகாட்டி" };
  const BC_HERE: LocaleStr = { en: "DSA statistics", zh: "DSA 数据", ms: "Statistik DSA", ta: "DSA புள்ளிவிவரம்" };

  const maxCatSchools = Math.max(...stats.categories.map((c) => c.schools), 1);
  const maxTalentSchools = Math.max(...stats.topTalents.map((t) => t.schools), 1);

  const STATS = [
    { icon: School, value: stats.schools, label: STAT_SCHOOLS },
    { icon: Database, value: stats.offerings, label: STAT_OFFERINGS },
    { icon: Sparkles, value: stats.distinctTalents, label: STAT_DISTINCT },
    { icon: Layers, value: stats.categoriesCount, label: STAT_CATS },
  ];

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
        {/* Hero */}
        <section className="bg-hero-mesh">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
              <BarChart3 className="h-3.5 w-3.5" aria-hidden />
              {pick(KICKER, locale)}
            </p>
            <h1
              style={{ textTransform: "none" }}
              className="font-display text-3xl font-extrabold leading-tight tracking-tight text-intellectual sm:text-4xl lg:text-5xl"
            >
              {pick(TITLE, locale)}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-intellectual-muted">
              {pick(SUBTITLE, locale)}
            </p>
          </div>
        </section>

        {/* Stat strip */}
        <section className="border-y border-intellectual/10 bg-intellectual">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px px-4 py-8 sm:grid-cols-4 sm:px-6">
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="px-3 py-2 text-center">
                <Icon className="mx-auto mb-2 h-5 w-5 text-champagne-light" aria-hidden />
                <p className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  {fmt(value, locale)}
                </p>
                <p className="mt-1 text-[11px] font-medium leading-snug text-white/70">
                  {pick(label, locale)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* By category */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="mb-6 font-display text-xl font-bold text-intellectual sm:text-2xl" style={{ textTransform: "none" }}>
              {pick(CAT_HEADING, locale)}
            </h2>
            <div className="overflow-hidden rounded-2xl border border-intellectual/12 bg-white shadow-soft">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">{pick(CAT_HEADING, locale)}</caption>
                <thead>
                  <tr className="border-b border-intellectual/10 text-[11px] font-bold tracking-wide text-intellectual/50 normal-case">
                    <th scope="col" className="px-5 py-3 text-left font-bold">{pick(COL_CAT, locale)}</th>
                    <th scope="col" className="px-3 py-3 text-right font-bold">{pick(COL_SCHOOLS, locale)}</th>
                    <th scope="col" className="px-5 py-3 text-right font-bold">{pick(COL_OFFERINGS, locale)}</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.categories.map((c, i) => (
                    <tr key={i} className="align-middle odd:bg-surface/40">
                      <th scope="row" className="px-5 py-3.5 text-left font-normal">
                        <span className="block font-display text-sm font-semibold text-intellectual sm:text-[0.9375rem]">
                          {pick(c.label, locale)}
                        </span>
                        <span className="mt-1.5 block h-1.5 w-full overflow-hidden rounded-full bg-intellectual/8" aria-hidden>
                          <span className="block h-full rounded-full bg-champagne" style={{ width: `${(c.schools / maxCatSchools) * 100}%` }} />
                        </span>
                      </th>
                      <td className="whitespace-nowrap px-3 py-3.5 text-right font-display text-sm font-bold text-intellectual">{fmt(c.schools, locale)}</td>
                      <td className="whitespace-nowrap px-5 py-3.5 text-right text-sm text-intellectual-muted">{fmt(c.offerings, locale)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top talents */}
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="mb-1 font-display text-xl font-bold text-intellectual sm:text-2xl" style={{ textTransform: "none" }}>
              {pick(TOP_HEADING, locale)}
            </h2>
            <p className="mb-6 text-sm text-intellectual-muted">{pick(TOP_SUB, locale)}</p>
            <div className="overflow-hidden rounded-2xl border border-intellectual/12 bg-white shadow-soft">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">{pick(TOP_HEADING, locale)}</caption>
                <thead>
                  <tr className="border-b border-intellectual/10 text-[11px] font-bold tracking-wide text-intellectual/50 normal-case">
                    <th scope="col" className="w-8 px-5 py-3 text-left font-bold">#</th>
                    <th scope="col" className="px-3 py-3 text-left font-bold">{pick(COL_TALENT, locale)}</th>
                    <th scope="col" className="px-5 py-3 text-right font-bold">{pick(COL_SCHOOLS, locale)}</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.topTalents.map((t, i) => (
                    <tr key={i} className="align-middle odd:bg-surface/40">
                      <td className="px-5 py-3 font-display text-sm font-bold text-champagne-dark">{i + 1}</td>
                      <th scope="row" className="px-3 py-3 text-left font-normal">
                        <span className="block text-sm font-medium text-intellectual sm:text-[0.9375rem]">{pick(t.label, locale)}</span>
                        <span className="mt-1.5 block h-1.5 w-full overflow-hidden rounded-full bg-intellectual/8" aria-hidden>
                          <span className="block h-full rounded-full bg-intellectual/40" style={{ width: `${(t.schools / maxTalentSchools) * 100}%` }} />
                        </span>
                      </th>
                      <td className="whitespace-nowrap px-5 py-3 text-right font-display text-sm font-bold text-intellectual">{fmt(t.schools, locale)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-2xl border border-intellectual/15 bg-surface-warm/60 p-6 sm:p-8">
              <h2 className="mb-2 font-display text-base font-semibold text-intellectual sm:text-lg" style={{ textTransform: "none" }}>
                {pick(METHOD_HEADING, locale)}
              </h2>
              <p className="text-sm leading-relaxed text-intellectual-muted">{pick(METHOD_BODY, locale)}</p>
              <p className="mt-3 text-[0.8125rem] font-medium text-champagne-dark">{pick(CITE, locale)}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <div className="mx-auto flex max-w-4xl flex-wrap gap-3 px-4 sm:px-6">
            <Link
              href="/dsa-finder"
              className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-intellectual/90"
            >
              <span style={{ textTransform: "none" }}>{pick(CTA_FINDER, locale)}</span>
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/dsa-interview/talents"
              className="inline-flex items-center gap-2 rounded-xl border border-intellectual/15 bg-white px-5 py-3 text-sm font-semibold text-intellectual transition hover:border-intellectual/30"
            >
              <span style={{ textTransform: "none" }}>{pick(CTA_TALENTS, locale)}</span>
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>
      </main>
      <RelatedCardsRow
        kicker={pick(REL_KICKER, locale)}
        heading={pick(REL_HEADING, locale)}
        items={[
          { icon: Layers, title: pick(REL_COP_T, locale), body: pick(REL_COP_B, locale), href: "/psle-cop" },
          { icon: School, title: pick(REL_SCHOOLS_T, locale), body: pick(REL_SCHOOLS_B, locale), href: "/schools" },
          { icon: Sparkles, title: pick(REL_WID_T, locale), body: pick(REL_WID_B, locale), href: "/what-is-dsa" },
        ]}
      />
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
