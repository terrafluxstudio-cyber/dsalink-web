"use client";

import Link from "next/link";
import { ArrowRight, Clock, Compass, FileSearch, MailCheck, MessageSquareText, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type EntryStatus = "live" | "coming";

type HubEntry = {
  id: string;
  status: EntryStatus;
  href?: string;
  icon: typeof Compass;
  title: { en: string; zh: string; ms: string; ta: string };
  blurb: { en: string; zh: string; ms: string; ta: string };
  cta?: { en: string; zh: string; ms: string; ta: string };
};

const ENTRIES: HubEntry[] = [
  {
    id: "interview",
    status: "live",
    href: "/dsa-interview",
    icon: MessageSquareText,
    title: {
      en: "Interview Prep",
      zh: "面试准备",
      ms: "Persediaan Temu Duga",
      ta: "நேர்காணல் தயாரிப்பு",
    },
    blurb: {
      en: "35 real interview questions, 5-tab framework, 10 templates, parent-as-coach guide.",
      zh: "35 道真实面试题、5 大类框架、10 个模板、家长陪练指南。",
      ms: "35 soalan temu duga sebenar, rangka 5-tab, 10 templat, panduan ibu bapa.",
      ta: "35 உண்மையான கேள்விகள், 5-தாவல் கட்டமைப்பு, 10 வார்ப்புருக்கள், பெற்றோர் பயிற்சியாளர் வழிகாட்டி.",
    },
    cta: {
      en: "Open interview prep",
      zh: "打开面试准备",
      ms: "Buka persediaan temu duga",
      ta: "நேர்காணல் தயாரிப்பைத் திற",
    },
  },
  {
    id: "waiting",
    status: "live",
    href: "/blog",
    icon: Clock,
    title: {
      en: "The Waiting Period",
      zh: "等待期",
      ms: "Tempoh Menunggu",
      ta: "காத்திருப்பு காலம்",
    },
    blurb: {
      en: "Between application and trial, what schools actually do — and what's normal during the silence.",
      zh: "申请到 trial 之间，学校在做什么——以及这段沉默期什么算正常。",
      ms: "Antara permohonan dan trial, apa sekolah lakukan — dan apa yang normal semasa diam.",
      ta: "விண்ணப்பத்திற்கும் சோதனைக்கும் இடையில், பள்ளிகள் என்ன செய்கின்றன — அமைதி வேளையில் என்ன சாதாரணம்.",
    },
    cta: {
      en: "Read blind-spot blogs",
      zh: "读盲区文章",
      ms: "Baca blog titik buta",
      ta: "மறைபகுதி கட்டுரைகளைப் படிக்கவும்",
    },
  },
  {
    id: "trial",
    status: "coming",
    icon: Sparkles,
    title: {
      en: "Trial Lessons",
      zh: "Trial 试课",
      ms: "Sesi Percubaan",
      ta: "சோதனை வகுப்புகள்",
    },
    blurb: {
      en: "What trial looks like for sports, arts, robotics — what coaches watch for, what your child should do.",
      zh: "运动、艺术、机器人类 trial 是什么样——教练在看什么、孩子该怎么做。",
      ms: "Bagaimana trial untuk sukan, seni, robotik — apa jurulatih perhatikan, apa anak anda perlu buat.",
      ta: "விளையாட்டு, கலை, ரோபோடிக்ஸ் சோதனை எப்படி — பயிற்சியாளர்கள் எதைப் பார்க்கிறார்கள், உங்கள் குழந்தை என்ன செய்ய வேண்டும்.",
    },
  },
  {
    id: "results",
    status: "coming",
    icon: FileSearch,
    title: {
      en: "Results & Routing",
      zh: "结果与分流",
      ms: "Keputusan & Penghalaan",
      ta: "முடிவுகள் & வழித்தடம்",
    },
    blurb: {
      en: "Confirmed Offer, Waitlist, or rejection — what each means and the exact next move.",
      zh: "Confirmed Offer、Waitlist、被拒——每种结果意味着什么，下一步具体怎么走。",
      ms: "Tawaran Sah, Senarai Menunggu, atau ditolak — apa setiap satu bermaksud dan langkah seterusnya.",
      ta: "உறுதிசெய்யப்பட்ட வாய்ப்பு, காத்திருப்புப் பட்டியல், அல்லது நிராகரிப்பு — ஒவ்வொன்றும் என்ன பொருள், அடுத்த நகர்வு என்ன.",
    },
  },
  {
    id: "s1posting",
    status: "coming",
    icon: Compass,
    title: {
      en: "S1 Posting (Fallback)",
      zh: "S1 Posting（备选）",
      ms: "S1 Posting (Pilihan Sandaran)",
      ta: "S1 Posting (மாற்று வழி)",
    },
    blurb: {
      en: "If DSA doesn't land, how PSLE posting works and how to choose without panic.",
      zh: "如果 DSA 没成，PSLE posting 怎么走，怎么不慌地选择。",
      ms: "Jika DSA tidak berjaya, bagaimana PSLE posting berfungsi dan bagaimana untuk memilih tanpa panik.",
      ta: "DSA வெற்றியடையாவிட்டால், PSLE posting எப்படி வேலை செய்கிறது மற்றும் பீதியின்றி எப்படி தேர்வு செய்வது.",
    },
  },
];

function pick<T extends Record<"en" | "zh" | "ms" | "ta", string>>(
  obj: T,
  locale: "en" | "zh" | "ms" | "ta",
): string {
  return obj[locale];
}

export function AfterApplyHubBody() {
  const { locale } = useLanguage();

  const headerTitle = {
    en: "After You Apply",
    zh: "申请之后",
    ms: "Selepas Anda Memohon",
    ta: "விண்ணப்பித்த பிறகு",
  };
  const headerSubtitle = {
    en: "From June to January, DSA goes private. Here's the reference for the 6-month black box — interview prep, trial signals, results routing, S1 fallback. Built page by page through the season.",
    zh: "六月到次年一月，DSA 进入私密阶段。这里是 6 个月信息黑箱的 reference——面试准备、trial 信号、结果分流、S1 备选。整个季度逐页建设。",
    ms: "Dari Jun hingga Januari, DSA menjadi peribadi. Inilah rujukan untuk kotak gelap 6 bulan — persediaan temu duga, isyarat trial, penghalaan keputusan, sandaran S1.",
    ta: "ஜூன் முதல் ஜனவரி வரை, DSA தனிப்பட்டதாக மாறுகிறது. இது 6 மாத கருப்புப் பெட்டிக்கான குறிப்பு — நேர்காணல் தயாரிப்பு, சோதனை சமிக்ஞைகள், முடிவு வழிநடத்தல், S1 மாற்று.",
  };
  const phaseLabel = {
    en: "Phase 3 of 5 · DSA Reference",
    zh: "5 阶段中第 3 段 · DSA Reference",
    ms: "Fasa 3 daripada 5 · Rujukan DSA",
    ta: "5-இல் கட்டம் 3 · DSA குறிப்பு",
  };
  const liveBadge = {
    en: "Available now",
    zh: "可访问",
    ms: "Tersedia sekarang",
    ta: "இப்போது கிடைக்கிறது",
  };
  const comingBadge = {
    en: "Coming through the season",
    zh: "整季逐步上线",
    ms: "Akan datang sepanjang musim",
    ta: "பருவத்தில் வரவிருக்கிறது",
  };
  const emailCta = {
    en: "Get notified when each section opens",
    zh: "新内容上线时邮件通知我",
    ms: "Beritahu saya apabila bahagian baharu dibuka",
    ta: "ஒவ்வொரு பகுதி திறக்கும்போது அறிவிக்கவும்",
  };
  const emailCtaLink = {
    en: "Subscribe to the parent list",
    zh: "订阅家长邮件列表",
    ms: "Langgan senarai ibu bapa",
    ta: "பெற்றோர் பட்டியலில் சேரவும்",
  };

  return (
    <div className="mx-auto max-w-5xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
      {/* Header */}
      <div className="mb-10 sm:mb-14">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
          {pick(phaseLabel, locale)}
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight text-intellectual sm:text-4xl">
          {pick(headerTitle, locale)}
        </h1>
        <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-intellectual-muted sm:text-base">
          {pick(headerSubtitle, locale)}
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
        {ENTRIES.map((entry) => {
          const Icon = entry.icon;
          const isLive = entry.status === "live";
          const inner = (
            <div
              className={`group relative flex h-full flex-col rounded-2xl border p-6 transition ${
                isLive
                  ? "border-intellectual/15 bg-white shadow-soft hover:-translate-y-0.5 hover:border-intellectual/30 hover:shadow-card"
                  : "border-intellectual/10 bg-surface-warm/40"
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                    isLive
                      ? "bg-intellectual/8 text-intellectual"
                      : "bg-intellectual/5 text-intellectual/45"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide normal-case ${
                    isLive
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {isLive ? pick(liveBadge, locale) : pick(comingBadge, locale)}
                </span>
              </div>
              <h2
                className={`font-display text-lg font-semibold leading-snug ${
                  isLive ? "text-intellectual" : "text-intellectual/55"
                }`}
              >
                {pick(entry.title, locale)}
              </h2>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  isLive ? "text-intellectual-muted" : "text-intellectual/40"
                }`}
              >
                {pick(entry.blurb, locale)}
              </p>
              {isLive && entry.cta ? (
                <div className="mt-5 flex items-center gap-1.5 text-[0.8125rem] font-semibold text-intellectual transition group-hover:text-intellectual-light">
                  {pick(entry.cta, locale)}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </div>
              ) : null}
            </div>
          );

          if (isLive && entry.href) {
            return (
              <Link key={entry.id} href={entry.href} className="block">
                {inner}
              </Link>
            );
          }
          return (
            <div key={entry.id} aria-disabled="true">
              {inner}
            </div>
          );
        })}
      </div>

      {/* Email CTA */}
      <div className="mt-12 rounded-2xl border border-intellectual/15 bg-gradient-to-br from-intellectual to-intellectual-dark p-6 text-white shadow-soft sm:p-8">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-champagne/20 text-champagne-light">
            <MailCheck className="h-5 w-5" aria-hidden />
          </span>
          <div className="flex-1">
            <p className="font-display text-lg font-semibold sm:text-xl">
              {pick(emailCta, locale)}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {locale === "zh"
                ? "等待期、trial、结果、S1 备选——每个阶段的新内容上线，家长邮件会先通知。"
                : locale === "ms"
                  ? "Tempoh menunggu, trial, keputusan, sandaran S1 — kandungan baharu, langganan email diberitahu dahulu."
                  : locale === "ta"
                    ? "காத்திருப்பு, சோதனை, முடிவுகள், S1 மாற்று — ஒவ்வொரு கட்டத்திலும் புதிய உள்ளடக்கம், மின்னஞ்சல் முதலில் அறிவிக்கிறது."
                    : "Waiting period, trial, results, S1 fallback — when each opens, the parent email list hears first."}
            </p>
            <Link
              href="/apply#subscribe"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
            >
              {pick(emailCtaLink, locale)}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
