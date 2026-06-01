"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Building2, ClipboardList, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

const COPY = {
  kicker: {
    en: "DSA-Sec · Singapore · Plain-English explainer",
    zh: "DSA-Sec · 新加坡 · 通俗易懂讲解",
    ms: "DSA-Sec · Singapura · Penjelasan ringkas",
    ta: "DSA-Sec · சிங்கப்பூர் · எளிய விளக்கம்",
  } satisfies LocaleStr,
  title: {
    en: "What is DSA-Sec, and how does it actually work?",
    zh: "什么是 DSA-Sec？它到底怎么运作？",
    ms: "Apakah DSA-Sec, dan bagaimanakah ia berfungsi?",
    ta: "DSA-Sec என்றால் என்ன, அது எவ்வாறு செயல்படுகிறது?",
  } satisfies LocaleStr,
  lead: {
    en: "Direct School Admission to Secondary (DSA-Sec) lets your child enter a secondary school based on talent in sports, arts, academics, or leadership — separate from PSLE posting. The MOE central portal opens once a year in May. This page walks through who it's for, what changed in the 2019 reforms, and how a Confirmed Offer interacts with PSLE results.",
    zh: "DSA-Sec（中学直接收生计划）让孩子凭借体育、艺术、学术或领导才能进入中学，与 PSLE 派位独立运作。MOE 中央门户每年 5 月开放。本页讲清楚：DSA 适合谁、2019 年改革变了什么、Confirmed Offer 如何与 PSLE 成绩互动。",
    ms: "Direct School Admission to Secondary (DSA-Sec) membenarkan anak anda memasuki sekolah menengah berdasarkan bakat dalam sukan, seni, akademik, atau kepimpinan — berasingan daripada penempatan PSLE. Portal pusat MOE dibuka setahun sekali pada Mei. Halaman ini menerangkan siapa ia untuk, apa yang berubah dalam pembaharuan 2019, dan bagaimana Tawaran Sah berinteraksi dengan keputusan PSLE.",
    ta: "DSA-Sec (Direct School Admission to Secondary) உங்கள் குழந்தையை விளையாட்டு, கலை, கல்வி, அல்லது தலைமைத்துவத்தில் உள்ள திறமையின் அடிப்படையில் இடைநிலை பள்ளியில் சேர அனுமதிக்கிறது — PSLE இடம் மாற்றத்திலிருந்து தனியாக. MOE மத்திய வாயில் ஒவ்வொரு ஆண்டும் மே மாதம் திறக்கிறது.",
  } satisfies LocaleStr,
  placeholderBadge: {
    en: "Page placeholder · Full evergreen explainer with MOE sources lands within 2 weeks",
    zh: "页面占位 · 完整 evergreen 解析（含 MOE 官方来源）2 周内上线",
    ms: "Pemegang tempat · Penjelasan penuh dengan sumber MOE dalam 2 minggu",
    ta: "இடம் வைப்பான் · MOE மூலங்களுடன் முழு விளக்கம் 2 வாரங்களில்",
  } satisfies LocaleStr,
  sectionsTitle: {
    en: "What the full page will cover",
    zh: "完整页面将涵盖",
    ms: "Apa halaman penuh akan rangkumi",
    ta: "முழு பக்கம் எதை உள்ளடக்கும்",
  } satisfies LocaleStr,
  sections: [
    {
      icon: BookOpen,
      title: {
        en: "What DSA-Sec actually is (and what it isn't)",
        zh: "DSA-Sec 到底是什么（不是什么）",
        ms: "Apa DSA-Sec sebenarnya",
        ta: "DSA-Sec உண்மையில் என்ன",
      } satisfies LocaleStr,
      body: {
        en: "Definition, MOE policy intent, 2019 reform changes (no more academic-only DSA, no more general academic ability tests), and the difference between DSA and S1 Posting.",
        zh: "定义、MOE 政策初衷、2019 年改革要点（取消纯学术 DSA、取消通用学术能力测试）、DSA 与 S1 Posting 的区别。",
        ms: "Definisi, hasrat dasar MOE, perubahan pembaharuan 2019, perbezaan DSA dan Penempatan S1.",
        ta: "வரையறை, MOE கொள்கை நோக்கம், 2019 சீர்திருத்தம், DSA மற்றும் S1 Posting இடையே வேறுபாடு.",
      } satisfies LocaleStr,
    },
    {
      icon: Building2,
      title: {
        en: "Who runs DSA — MOE portal vs the schools",
        zh: "DSA 谁来负责 — MOE 门户 vs 各学校",
        ms: "Siapa kendalikan DSA — Portal MOE vs sekolah",
        ta: "DSA-ஐ யார் நடத்துகிறார்கள் — MOE வாயில் vs பள்ளிகள்",
      } satisfies LocaleStr,
      body: {
        en: "MOE owns the central application portal and the calendar. Each school owns its own talent criteria, trial design, and shortlisting. Why your child's outcome depends on the school panel — not on MOE.",
        zh: "MOE 负责中央申请门户和时间表。每所学校自己决定才艺标准、trial 设计、入围名单。为什么孩子的结果取决于学校 panel——而不是 MOE。",
        ms: "MOE memiliki portal pusat dan kalendar. Setiap sekolah memiliki kriteria bakatnya sendiri.",
        ta: "MOE மத்திய வாயிலை வைத்திருக்கிறது. ஒவ்வொரு பள்ளியும் தனது சொந்த அளவுகோல்களை வைத்திருக்கிறது.",
      } satisfies LocaleStr,
    },
    {
      icon: ClipboardList,
      title: {
        en: "Who DSA is realistically for",
        zh: "DSA 现实意义上适合谁",
        ms: "Untuk siapa DSA secara realistik",
        ta: "யதார்த்தமாக DSA யாருக்கு",
      } satisfies LocaleStr,
      body: {
        en: "Honest about the tiers: zonal/national competitors, graded examination holders, sustained CCA records. The myth of \"DSA as a PSLE backdoor\" and why it doesn't hold up post-2019.",
        zh: "诚实分层：zonal/national 选手、考级证书持有者、CCA 长期记录。'DSA 是 PSLE 后门'的迷思——为什么 2019 年后不成立。",
        ms: "Jujur tentang tahap: pesaing zon/kebangsaan, pemegang peperiksaan bergred, rekod CCA yang konsisten.",
        ta: "தர நிலைகள் பற்றி நேர்மை: மண்டல/தேசிய போட்டியாளர்கள், தர பரீட்சை சான்றிதழ்கள், நிலையான CCA பதிவுகள்.",
      } satisfies LocaleStr,
    },
    {
      icon: Scale,
      title: {
        en: "What a Confirmed Offer locks in",
        zh: "Confirmed Offer 锁定什么",
        ms: "Apa Tawaran Sah mengunci",
        ta: "உறுதிசெய்யப்பட்ட சலுகை எதை பூட்டுகிறது",
      } satisfies LocaleStr,
      body: {
        en: "A Confirmed Offer means your child is admitted regardless of PSLE score — but with a binding two-year commitment to the talent area and CCA. What that commitment actually looks like once school starts.",
        zh: "Confirmed Offer 意味着无论 PSLE 分数都被录取——但需对所选才艺方向和 CCA 做出 2 年承诺。这份承诺入学后到底意味着什么。",
        ms: "Tawaran Sah bermakna anak anda diterima tanpa mengira skor PSLE — tetapi dengan komitmen mengikat dua tahun.",
        ta: "உறுதிசெய்யப்பட்ட சலுகை என்றால் PSLE மதிப்பெண் எதுவாக இருந்தாலும் சேர்க்கப்படுவார் — ஆனால் 2 ஆண்டு கட்டுப்பாட்டுடன்.",
      } satisfies LocaleStr,
    },
  ],
  meanwhileTitle: {
    en: "Need something to read right now?",
    zh: "现在就想看点什么？",
    ms: "Perlu sesuatu untuk dibaca sekarang?",
    ta: "இப்போதே படிக்க ஏதாவது தேவையா?",
  } satisfies LocaleStr,
  meanwhileBody: {
    en: "While we finish the evergreen explainer, the 2026 timeline and parent stories page already have the practical answers most P5/P6 families need.",
    zh: "我们在完成完整 evergreen 解析的同时，2026 时间线和家长实战页已经回答了大部分 P5/P6 家庭的实际问题。",
    ms: "Sementara kami menyiapkan penjelasan penuh, halaman garis masa 2026 dan kisah ibu bapa sudah ada jawapan praktikal.",
    ta: "முழு விளக்கம் வரும் வரை, 2026 கால அட்டவணை மற்றும் பெற்றோர் கதைகள் ஏற்கனவே நடைமுறை பதில்களை வழங்குகின்றன.",
  } satisfies LocaleStr,
  ctaTimeline: {
    en: "2026 Application Timeline",
    zh: "2026 申请时间线",
    ms: "Garis Masa Permohonan 2026",
    ta: "2026 விண்ணப்ப கால அட்டவணை",
  } satisfies LocaleStr,
  ctaStories: {
    en: "DSA parent stories",
    zh: "DSA 家长实战经历",
    ms: "Kisah Ibu Bapa DSA",
    ta: "DSA பெற்றோர் கதைகள்",
  } satisfies LocaleStr,
};

export function WhatIsDsaPageBody() {
  const { locale } = useLanguage();

  return (
    <>
      <SiteHeader />
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
              {pick(COPY.lead, locale)}
            </p>
            <p className="mt-5 inline-flex rounded-full border border-champagne/40 bg-champagne/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-champagne-dark normal-case">
              {pick(COPY.placeholderBadge, locale)}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-intellectual sm:text-3xl">
              {pick(COPY.sectionsTitle, locale)}
            </h2>
            <ul className="mt-6 grid gap-4 sm:gap-5">
              {COPY.sections.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li
                    key={i}
                    className="flex gap-4 rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft sm:p-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-intellectual">
                        {pick(s.title, locale)}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-intellectual-muted">
                        {pick(s.body, locale)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 rounded-2xl border border-intellectual/15 bg-intellectual p-6 text-white sm:p-8">
              <h2 className="font-display text-lg font-semibold sm:text-xl">
                {pick(COPY.meanwhileTitle, locale)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {pick(COPY.meanwhileBody, locale)}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/timeline"
                  className="inline-flex items-center gap-2 rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
                >
                  <span style={{ textTransform: "none" }}>{pick(COPY.ctaTimeline, locale)}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/dsa-experience"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <span style={{ textTransform: "none" }}>{pick(COPY.ctaStories, locale)}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
