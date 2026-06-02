"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock4, MailOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

const COPY = {
  kicker: {
    en: "DSA-Sec 2026 · Results & Offer Selection",
    zh: "DSA-Sec 2026 · 结果与录取选择",
    ms: "DSA-Sec 2026 · Keputusan & Pemilihan Tawaran",
    ta: "DSA-Sec 2026 · முடிவுகள் & சலுகை தேர்வு",
  } satisfies LocaleStr,
  title: {
    en: "DSA results land 24–25 Nov 2026. Here's what each outcome means.",
    zh: "DSA 结果在 2026 年 11 月 24–25 日公布。每种结果意味着什么？",
    ms: "Keputusan DSA tiba 24–25 Nov 2026. Inilah maksud setiap keputusan.",
    ta: "DSA முடிவுகள் 24–25 நவம்பர் 2026 இல் வெளியிடப்படுகின்றன. ஒவ்வொரு முடிவின் அர்த்தம் இதோ.",
  } satisfies LocaleStr,
  subtitle: {
    en: "Four outcomes are possible: Confirmed Offer, Waitlist, Counter-Offer, or Unsuccessful. Each has a clock and a binding moment. The October preference exercise (19–23 Oct) is where you lock in your child's secondary school. Full decision guide drops November 2026 with the real offer letters in hand.",
    zh: "四种可能结果：Confirmed Offer、Waitlist、Counter-Offer、未录取。每种都有时间表和约束节点。10 月 19–23 日的志愿排序，是锁定中学的关键一周。完整决策指南将在 2026 年 11 月、收到正式 offer 后上线。",
    ms: "Empat keputusan mungkin: Tawaran Sah, Senarai Menunggu, Tawaran Balas, atau Tidak Berjaya. Setiap satu ada jadual dan saat mengikat. Pemilihan keutamaan Oktober (19–23 Okt) ialah saat anda mengunci sekolah menengah anak anda. Panduan keputusan penuh dikeluarkan November 2026.",
    ta: "நான்கு முடிவுகள் சாத்தியம்: உறுதிசெய்யப்பட்ட சலுகை, காத்திருப்புப் பட்டியல், எதிர் சலுகை, அல்லது தோல்வி. ஒவ்வொன்றுக்கும் ஒரு கடிகாரம் மற்றும் கட்டுப்படுத்தும் தருணம் உள்ளது. அக்டோபர் 19–23 முன்னுரிமைப் பயிற்சி உங்கள் குழந்தையின் இடைநிலை பள்ளியைப் பூட்டுகிறது.",
  } satisfies LocaleStr,
  placeholderBadge: {
    en: "Page placeholder · Full decision guide lands November 2026",
    zh: "页面占位 · 完整决策指南 2026 年 11 月上线",
    ms: "Halaman pemegang tempat · Panduan keputusan penuh November 2026",
    ta: "பக்கம் இடம் வைப்பான் · முழு வழிகாட்டி நவம்பர் 2026",
  } satisfies LocaleStr,
  whatComesTitle: {
    en: "What this page will cover",
    zh: "这个页面会写什么",
    ms: "Apa halaman ini akan rangkumi",
    ta: "இந்த பக்கம் எதை உள்ளடக்கும்",
  } satisfies LocaleStr,
  bullets: [
    {
      icon: CheckCircle2,
      title: {
        en: "Decoding Confirmed Offer · Waitlist · Counter-Offer · Unsuccessful",
        zh: "解读 Confirmed Offer / Waitlist / Counter-Offer / 未录取 四种结果",
        ms: "Memahami Tawaran Sah · Senarai Menunggu · Tawaran Balas · Tidak Berjaya",
        ta: "உறுதி · காத்திருப்பு · எதிர் சலுகை · தோல்வி — நான்கு முடிவுகளை விளக்குதல்",
      } satisfies LocaleStr,
      body: {
        en: "What each outcome means, when each becomes binding, and what a Waitlist actually predicts about your child's chances. Counter-Offer for dual-track schools (IP↔O-Level) explained.",
        zh: "四种结果分别意味着什么、何时具备约束力、Waitlist 到底意味着多少概率。双轨制学校（IP↔O-Level）的 Counter-Offer 怎么看。",
        ms: "Apa makna setiap keputusan, bila ia mengikat, dan apa Senarai Menunggu sebenarnya beritahu tentang peluang anak anda. Tawaran Balas untuk sekolah dwi-trek (IP↔O-Level) dijelaskan.",
        ta: "ஒவ்வொரு முடிவின் அர்த்தம், எப்போது கட்டுப்படுத்தும், காத்திருப்புப் பட்டியல் என்ன காட்டுகிறது. இரட்டை-பாதை பள்ளிகளுக்கான எதிர் சலுகை (IP↔O-Level) விளக்கப்பட்டது.",
      } satisfies LocaleStr,
    },
    {
      icon: Clock4,
      title: {
        en: "October preference exercise · 19–23 Oct 2026",
        zh: "10 月志愿排序 · 2026 年 10 月 19–23 日",
        ms: "Pemilihan keutamaan Oktober · 19–23 Okt 2026",
        ta: "அக்டோபர் முன்னுரிமை தேர்வு · 19–23 அக் 2026",
      } satisfies LocaleStr,
      body: {
        en: "If your child holds Confirmed Offers from multiple schools, how to rank them — academic fit, CCA programme, distance, sibling priority, gut feel. Why the order you submit determines which offer locks in.",
        zh: "若孩子拿到多份 Confirmed Offer，如何排序：学术匹配、CCA 项目、距离、兄弟姐妹优先、直觉判断。提交的顺序决定哪个 offer 被锁定。",
        ms: "Jika anak anda memegang berbilang Tawaran Sah, bagaimana menyusunnya — kesesuaian akademik, CCA, jarak, keutamaan adik-beradik, naluri. Susunan menentukan tawaran mana dikunci.",
        ta: "உங்கள் குழந்தை பல உறுதிசெய்யப்பட்ட சலுகைகள் வைத்திருந்தால், அவற்றை எவ்வாறு வரிசைப்படுத்துவது. சமர்ப்பித்த வரிசை எந்த சலுகை பூட்டப்படுகிறது என்பதை தீர்மானிக்கிறது.",
      } satisfies LocaleStr,
    },
    {
      icon: MailOpen,
      title: {
        en: "If DSA didn't work out — the S1 Posting path",
        zh: "如果 DSA 不成功 — S1 Posting 怎么走",
        ms: "Jika DSA tidak berjaya — laluan S1 Posting",
        ta: "DSA வேலை செய்யாவிட்டால் — S1 Posting பாதை",
      } satisfies LocaleStr,
      body: {
        en: "PSLE-based posting opens after results. Choosing 6 schools, COP realism, affiliated bonuses, S1 Appeal eligibility, and how DSA experience still helps in CCA selection at the posted school.",
        zh: "PSLE 出分后进入常规派位。6 所学校怎么选、COP 现实、亲属学校加分、S1 Appeal 资格、DSA 经验如何在派位后的学校 CCA 选拔中继续起作用。",
        ms: "Penempatan berdasarkan PSLE bermula selepas keputusan. Memilih 6 sekolah, realiti COP, bonus berafiliasi, kelayakan Rayuan S1.",
        ta: "PSLE அடிப்படையிலான இடம் மாற்றம் முடிவுகளுக்குப் பிறகு திறக்கும். 6 பள்ளிகள் தேர்வு, COP யதார்த்தம், S1 Appeal தகுதி.",
      } satisfies LocaleStr,
    },
  ],
  meanwhileTitle: {
    en: "While you wait",
    zh: "在等待期间",
    ms: "Sambil anda menunggu",
    ta: "நீங்கள் காத்திருக்கும் போது",
  } satisfies LocaleStr,
  meanwhileBody: {
    en: "Most DSA outcomes land 24–25 November 2026 alongside PSLE results. Until then, the interview & trial pages cover the slog from June to August, and the timeline page shows every key date.",
    zh: "大部分 DSA 结果在 2026 年 11 月 24–25 日与 PSLE 结果同时公布。在此之前，面试与试训页面覆盖 6 月到 8 月的所有备战，时间线页面列出每个关键日期。",
    ms: "Kebanyakan keputusan DSA tiba 24–25 November 2026 bersama PSLE. Sementara itu, halaman temuduga & percubaan merangkumi semuanya dari Jun hingga Ogos, dan halaman garis masa menunjukkan setiap tarikh penting.",
    ta: "பெரும்பாலான DSA முடிவுகள் 24–25 நவம்பர் 2026 இல் PSLE உடன் வெளியிடப்படுகின்றன. அதுவரை, நேர்காணல் பக்கங்கள் ஜூன் முதல் ஆகஸ்ட் வரை அனைத்தையும் உள்ளடக்கும், கால அட்டவணை பக்கம் ஒவ்வொரு முக்கிய தேதியையும் காட்டுகிறது.",
  } satisfies LocaleStr,
  ctaInterview: {
    en: "Open Interview & Trial prep",
    zh: "查看面试与试训准备",
    ms: "Buka persediaan Temu Duga & Percubaan",
    ta: "நேர்காணல் & சோதனை தயாரிப்பு",
  } satisfies LocaleStr,
  ctaTimeline: {
    en: "See the full 2026 timeline",
    zh: "查看完整 2026 时间线",
    ms: "Lihat garis masa 2026 penuh",
    ta: "முழு 2026 கால அட்டவணை",
  } satisfies LocaleStr,
};

export function DsaResultsPageBody() {
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
              {pick(COPY.subtitle, locale)}
            </p>
            <p className="mt-5 inline-flex rounded-full border border-champagne/40 bg-champagne/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-champagne-dark normal-case">
              {pick(COPY.placeholderBadge, locale)}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-intellectual sm:text-3xl">
              {pick(COPY.whatComesTitle, locale)}
            </h2>
            <ul className="mt-6 grid gap-4 sm:gap-5">
              {COPY.bullets.map((b, i) => {
                const Icon = b.icon;
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
                        {pick(b.title, locale)}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-intellectual-muted">
                        {pick(b.body, locale)}
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
                  href="/dsa-interview"
                  className="inline-flex items-center gap-2 rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
                >
                  <span style={{ textTransform: "none" }}>{pick(COPY.ctaInterview, locale)}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/timeline"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <span style={{ textTransform: "none" }}>{pick(COPY.ctaTimeline, locale)}</span>
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
