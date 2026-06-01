"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, ClipboardCheck, Compass, FileSearch, MessageSquareText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

type Phase = {
  id: string;
  icon: typeof CalendarDays;
  dates: LocaleStr;
  label: LocaleStr;
  detail: LocaleStr;
  link?: { href: string; label: LocaleStr };
};

const PHASES: Phase[] = [
  {
    id: "research",
    icon: BookOpen,
    dates: {
      en: "Dec — early May",
      zh: "12 月 — 5 月初",
      ms: "Dis — awal Mei",
      ta: "டிசம்பர் — மே தொடக்கம்",
    },
    label: {
      en: "Research phase",
      zh: "研究阶段",
      ms: "Fasa kajian",
      ta: "ஆராய்ச்சி கட்டம்",
    },
    detail: {
      en: "Build your shortlist. Use the school finder, compare PSLE COP history, attend open houses.",
      zh: "搭建候选名单。用 finder、对比历年 PSLE COP、参加开放日。",
      ms: "Bina senarai pendek. Gunakan pencari sekolah, banding PSLE COP, lawat hari terbuka.",
      ta: "உங்கள் குறுகிய பட்டியலை உருவாக்குங்கள். பள்ளி தேடல், PSLE COP ஒப்பீடு, திறந்த நாள் பயன்படுத்துங்கள்.",
    },
    link: {
      href: "/dsa-finder",
      label: { en: "Open school finder", zh: "打开学校搜索", ms: "Buka pencari sekolah", ta: "பள்ளி தேடலைத் திற" },
    },
  },
  {
    id: "apply",
    icon: ClipboardCheck,
    dates: {
      en: "5 May — 2 Jun 2026 · 4:30pm SGT",
      zh: "2026 年 5 月 5 日 — 6 月 2 日 · 下午 4:30",
      ms: "5 Mei — 2 Jun 2026 · 4:30 petang SGT",
      ta: "5 மே — 2 ஜூன் 2026 · 4:30 SGT",
    },
    label: {
      en: "Application window",
      zh: "申请窗口",
      ms: "Tetingkap permohonan",
      ta: "விண்ணப்ப காலம்",
    },
    detail: {
      en: "Submit via the official MOE portal. Up to 3 schools across talent areas. Portfolio + supporting documents.",
      zh: "通过 MOE 官方门户提交。最多 3 所学校，跨才艺方向。作品集 + 推荐材料。",
      ms: "Hantar melalui portal rasmi MOE. Sehingga 3 sekolah merentasi bakat. Portfolio + dokumen sokongan.",
      ta: "MOE அதிகாரப்பூர்வ வாயில் மூலம் சமர்ப்பிக்கவும். 3 பள்ளிகள் வரை, திறமை பகுதிகளில். போர்ட்ஃபோலியோ + ஆதரவு ஆவணங்கள்.",
    },
    link: {
      href: "/apply",
      label: { en: "Open application checklist", zh: "打开申请清单", ms: "Buka senarai semak", ta: "சரிபார்ப்பு பட்டியலைத் திற" },
    },
  },
  {
    id: "interview",
    icon: MessageSquareText,
    dates: {
      en: "Jun — Sep 2026",
      zh: "2026 年 6 月 — 9 月",
      ms: "Jun — Sep 2026",
      ta: "ஜூன் — செப்டம்பர் 2026",
    },
    label: {
      en: "Interview & trial season",
      zh: "面试与试课季",
      ms: "Musim temu duga & percubaan",
      ta: "நேர்காணல் & சோதனை பருவம்",
    },
    detail: {
      en: "Most schools shortlist within 2–4 weeks. Interviews, talent trials, and assessments run through the holidays.",
      zh: "大部分学校 2–4 周内筛选。面试、才艺试课、评估贯穿假期。",
      ms: "Kebanyakan sekolah memilih dalam 2–4 minggu. Temu duga, trial bakat, penilaian sepanjang cuti.",
      ta: "பெரும்பாலான பள்ளிகள் 2–4 வாரங்களில் தேர்வு செய்யும். நேர்காணல், சோதனை, மதிப்பீடு விடுமுறையில்.",
    },
    link: {
      href: "/dsa-interview",
      label: { en: "Browse interview prep", zh: "查看面试准备", ms: "Lihat persediaan temu duga", ta: "நேர்காணல் தயாரிப்பு" },
    },
  },
  {
    id: "preference",
    icon: Compass,
    dates: {
      en: "19 — 23 Oct 2026",
      zh: "2026 年 10 月 19 — 23 日",
      ms: "19 — 23 Okt 2026",
      ta: "19 — 23 அக் 2026",
    },
    label: {
      en: "School preference exercise",
      zh: "学校志愿填报",
      ms: "Pemilihan keutamaan sekolah",
      ta: "பள்ளி விருப்பத் தேர்வு",
    },
    detail: {
      en: "If you received Confirmed Offers from multiple schools, this is when you rank your preference order.",
      zh: "若收到多所 Confirmed Offer，这一周内排序你的志愿。",
      ms: "Jika anda menerima Tawaran Sah dari pelbagai sekolah, ini masa untuk susun keutamaan.",
      ta: "பல உறுதிசெய்யப்பட்ட வாய்ப்புகள் பெற்றால், இந்த வாரத்தில் முன்னுரிமை வரிசையை வரிசைப்படுத்தவும்.",
    },
  },
  {
    id: "results",
    icon: FileSearch,
    dates: {
      en: "Nov — Dec 2026 · with PSLE",
      zh: "2026 年 11 月 — 12 月 · 与 PSLE 同步",
      ms: "Nov — Dis 2026 · bersama PSLE",
      ta: "நவ — டிச 2026 · PSLE உடன்",
    },
    label: {
      en: "Results released",
      zh: "结果公布",
      ms: "Keputusan diumumkan",
      ta: "முடிவுகள் வெளியீடு",
    },
    detail: {
      en: "DSA outcomes released alongside PSLE results. If DSA confirms, you accept and skip S1 Posting. Otherwise S1 Posting opens.",
      zh: "DSA 结果与 PSLE 同步公布。DSA 确认即接受，跳过 S1 Posting；否则进入 S1 Posting。",
      ms: "Keputusan DSA dikeluarkan bersama PSLE. DSA disahkan, terima dan langkau S1 Posting. Jika tidak, S1 Posting bermula.",
      ta: "DSA முடிவுகள் PSLE-உடன் வெளியிடப்படும். DSA உறுதியானால், ஏற்றுக்கொண்டு S1 Posting-ஐ தவிர்க்கவும். இல்லையெனில் S1 Posting திறக்கும்.",
    },
    link: {
      href: "/offer",
      label: { en: "Offer & PSLE outcome", zh: "录取与 PSLE 结果", ms: "Tawaran & keputusan PSLE", ta: "சலுகை & PSLE முடிவு" },
    },
  },
];

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

export function TimelinePageBody() {
  const { locale } = useLanguage();

  const kicker = {
    en: "2026 Application Timeline · Singapore",
    zh: "2026 申请时间线 · 新加坡",
    ms: "Garis Masa Permohonan 2026 · Singapura",
    ta: "2026 விண்ணப்ப கால அட்டவணை · சிங்கப்பூர்",
  };
  const title = {
    en: "The 2026 DSA-Sec timeline at a glance.",
    zh: "2026 DSA-Sec 全程关键时间，一眼看完。",
    ms: "Garis masa DSA-Sec 2026 sekilas pandang.",
    ta: "2026 DSA-Sec கால அட்டவணை — ஒரே பார்வை.",
  };
  const subtitle = {
    en: "Five phases, plain dates for the 2026 application cycle. Each phase links out to the page that goes deeper — what is DSA, what to apply with, what trial coaches assess, what an Offer locks in.",
    zh: "五大阶段、2026 申请周期的明确日期。每阶段都链接到更深入的内容——什么是 DSA、申请要带什么、trial 教练看什么、Offer 锁定什么。",
    ms: "Lima fasa, tarikh jelas untuk kitaran permohonan 2026. Setiap fasa menghubung ke halaman yang lebih mendalam.",
    ta: "ஐந்து கட்டங்கள், 2026 விண்ணப்ப சுழற்சிக்கான தெளிவான தேதிகள். ஒவ்வொரு கட்டமும் ஆழமான பக்கத்துடன் இணைக்கப்பட்டுள்ளது.",
  };
  const guideCta = {
    en: "Start with What Is DSA",
    zh: "先看：什么是 DSA",
    ms: "Mula dengan Apa itu DSA",
    ta: "DSA என்றால் என்ன — தொடங்குங்கள்",
  };

  return (
    <>
      <SiteHeader />
      <main className="bg-surface">
        <section className="bg-hero-mesh">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
              {pick(kicker, locale)}
            </p>
            <h1
              style={{ textTransform: "none" }}
              className="font-display text-3xl font-extrabold leading-tight tracking-tight text-intellectual sm:text-4xl lg:text-5xl"
            >
              {pick(title, locale)}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-intellectual-muted">
              {pick(subtitle, locale)}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <ol className="space-y-4 sm:space-y-5">
              {PHASES.map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <li
                    key={phase.id}
                    className="relative flex gap-4 rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft sm:gap-5 sm:p-6"
                  >
                    <div className="flex shrink-0 flex-col items-center">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="mt-2 text-[11px] font-bold tracking-wider text-intellectual/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-semibold tracking-[0.12em] text-champagne-dark normal-case">
                        {pick(phase.dates, locale)}
                      </p>
                      <h2 className="mt-1 font-display text-lg font-semibold text-intellectual sm:text-xl">
                        {pick(phase.label, locale)}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-intellectual-muted">
                        {pick(phase.detail, locale)}
                      </p>
                      {phase.link ? (
                        <Link
                          href={phase.link.href}
                          className="mt-3 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-intellectual transition hover:text-intellectual-light"
                        >
                          {pick(phase.link.label, locale)}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-10 rounded-2xl border border-intellectual/15 bg-intellectual p-6 text-white sm:p-8">
              <p className="font-display text-lg font-semibold sm:text-xl">
                {locale === "zh"
                  ? "刚开始了解 DSA？"
                  : locale === "ms"
                    ? "Baru kenal DSA?"
                    : locale === "ta"
                      ? "DSA-ஐ இப்போதுதான் அறிந்துகொள்கிறீர்களா?"
                      : "New to DSA?"}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {locale === "zh"
                  ? "先把 DSA-Sec 是什么、为什么存在、和 PSLE 怎么互动看清楚。"
                  : locale === "ms"
                    ? "Mulakan dengan memahami apa itu DSA-Sec, mengapa ia wujud, dan bagaimana ia berinteraksi dengan PSLE."
                    : locale === "ta"
                      ? "DSA-Sec என்றால் என்ன, ஏன் உள்ளது, PSLE-உடன் எவ்வாறு தொடர்பு கொள்கிறது என்பதை முதலில் புரிந்துகொள்ளுங்கள்."
                      : "Start with what DSA-Sec is, why it exists, and how it interacts with PSLE."}
              </p>
              <Link
                href="/what-is-dsa"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
              >
                <span style={{ textTransform: "none" }}>{pick(guideCta, locale)}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
