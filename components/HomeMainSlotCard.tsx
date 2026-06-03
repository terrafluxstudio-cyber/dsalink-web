"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Compass, School } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCyclePhase } from "@/lib/dsa-cycle";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };
type SlotKey = "application" | "after-apply" | "schools";

/** Map the shared cycle phase → this component's local slot enum. */
function computeSlot(now: Date): SlotKey {
  switch (getCyclePhase(now)) {
    case "application":
      return "application";
    case "interview-trial":
      return "after-apply";
    case "schools-research":
    default:
      return "schools";
  }
}

const SLOTS: Record<
  SlotKey,
  {
    icon: typeof Compass;
    kicker: LocaleStr;
    title: LocaleStr;
    blurb: LocaleStr;
    primary: { href: string; label: LocaleStr };
    secondary: { href: string; label: LocaleStr };
    bullets: LocaleStr[];
  }
> = {
  application: {
    icon: CalendarDays,
    kicker: {
      en: "Right Now · Application Window",
      zh: "当下 · 申请窗口",
      ms: "Sekarang · Tetingkap Permohonan",
      ta: "இப்போது · விண்ணப்ப காலம்",
    },
    title: {
      en: "Apply by 2 Jun 2026 · 4:30pm SGT",
      zh: "2026 年 6 月 2 日 · 下午 4:30 截止",
      ms: "Mohon sebelum 2 Jun 2026 · 4:30 petang SGT",
      ta: "2 ஜூன் 2026 · 4:30 மணி SGT வரை விண்ணப்பிக்கவும்",
    },
    blurb: {
      en: "DSA-Sec is open. Submit via the official MOE portal — use our checklist and FAQ as your reference while you fill it in.",
      zh: "DSA-Sec 申请正在进行。请通过 MOE 官方门户提交——填表时把我们的清单和常见问题当作 reference。",
      ms: "DSA-Sec dibuka. Hantar melalui portal rasmi MOE — gunakan senarai semak dan FAQ kami sebagai rujukan.",
      ta: "DSA-Sec திறந்துள்ளது. MOE அதிகாரப்பூர்வ வாயில் வழியாக சமர்ப்பிக்கவும் — எங்கள் சரிபார்ப்பு பட்டியல் மற்றும் FAQ-ஐ குறிப்பாக பயன்படுத்தவும்.",
    },
    primary: {
      href: "/apply",
      label: {
        en: "Open application checklist",
        zh: "打开申请清单",
        ms: "Buka senarai semak permohonan",
        ta: "விண்ணப்ப சரிபார்ப்பு பட்டியலைத் திற",
      },
    },
    secondary: {
      href: "/faq",
      label: {
        en: "Read application FAQ",
        zh: "阅读申请常见问题",
        ms: "Baca FAQ permohonan",
        ta: "விண்ணப்ப கேள்விகளை படிக்கவும்",
      },
    },
    bullets: [
      {
        en: "Pick up to 3 schools across talent areas you can defend.",
        zh: "选最多 3 所学校 · 选你能撑得起的才艺方向。",
        ms: "Pilih sehingga 3 sekolah merentasi bidang bakat yang anda boleh pertahankan.",
        ta: "உங்களால் ஆதரிக்க முடிந்த திறமை பகுதிகளில் 3 பள்ளிகள் வரை தேர்வு செய்யவும்.",
      },
      {
        en: "Upload portfolio, certificates, and supporting letters before 4:30pm.",
        zh: "下午 4:30 前上传作品集、证书与推荐信。",
        ms: "Muat naik portfolio, sijil dan surat sokongan sebelum 4:30 petang.",
        ta: "மாலை 4:30 மணிக்கு முன் போர்ட்ஃபோலியோ, சான்றிதழ்கள் மற்றும் ஆதரவு கடிதங்களை பதிவேற்றவும்.",
      },
      {
        en: "After submission, watch your inbox — most schools reply within 2–4 weeks.",
        zh: "提交后留意邮箱——大部分学校 2–4 周内回复。",
        ms: "Selepas hantar, perhatikan e-mel — kebanyakan sekolah balas dalam 2–4 minggu.",
        ta: "சமர்ப்பித்த பிறகு, மின்னஞ்சலைக் கவனிக்கவும் — பெரும்பாலான பள்ளிகள் 2–4 வாரங்களில் பதிலளிக்கின்றன.",
      },
    ],
  },
  "after-apply": {
    icon: Compass,
    kicker: {
      en: "Right Now · After You Apply",
      zh: "当下 · 申请之后",
      ms: "Sekarang · Selepas Memohon",
      ta: "இப்போது · விண்ணப்பித்த பிறகு",
    },
    title: {
      en: "Interview season has begun",
      zh: "面试季已经开始",
      ms: "Musim temu duga telah bermula",
      ta: "நேர்காணல் பருவம் தொடங்கிவிட்டது",
    },
    blurb: {
      en: "Most schools shortlist within 2–4 weeks. Use Interview Prep while you wait, then come back here for trial, results, and S1 fallback.",
      zh: "大部分学校 2–4 周内筛选。等待时先做面试准备；后续 trial、结果、S1 备选都在这里。",
      ms: "Kebanyakan sekolah memilih dalam 2–4 minggu. Gunakan persediaan temu duga sambil menunggu — trial, keputusan dan sandaran S1 ada di sini.",
      ta: "பெரும்பாலான பள்ளிகள் 2–4 வாரங்களில் தேர்வு செய்யும். காத்திருக்கும் போது நேர்காணல் தயாரிப்பைப் பயன்படுத்தவும் — பின்னர் சோதனை, முடிவு, S1 மாற்று அனைத்தும் இங்கே.",
    },
    primary: {
      href: "/dsa-interview",
      label: {
        en: "Browse interview prep",
        zh: "查看面试准备",
        ms: "Lihat persediaan temu duga",
        ta: "நேர்காணல் தயாரிப்பைப் பார்க்கவும்",
      },
    },
    secondary: {
      href: "/dsa-interview/talents",
      label: {
        en: "Browse prep by talent",
        zh: "按才艺浏览备战",
        ms: "Lihat persediaan mengikut bakat",
        ta: "திறமை வாரியாக தயாரிப்பு",
      },
    },
    bullets: [
      {
        en: "Read talent-specific interview pages — what panels actually ask.",
        zh: "阅读每个项目的面试题库——评审到底问什么。",
        ms: "Baca halaman temu duga khusus bakat — apa panel sebenarnya tanya.",
        ta: "திறமை சார்ந்த நேர்காணல் பக்கங்களைப் படிக்கவும் — குழுக்கள் உண்மையில் என்ன கேட்கின்றன.",
      },
      {
        en: "Trial sessions ≠ rejection. Treat them as observation, not elimination.",
        zh: "Trial 不等于淘汰，它是观察，不是筛选。",
        ms: "Sesi trial bukan penolakan. Ia pemerhatian, bukan penyingkiran.",
        ta: "சோதனை அமர்வுகள் நிராகரிப்பு அல்ல — இது கண்காணிப்பு, நீக்கம் அல்ல.",
      },
      {
        en: "If results come back negative — S1 Posting is still on the table.",
        zh: "结果不理想——S1 统一分配仍是后路。",
        ms: "Jika keputusan negatif — Penempatan S1 masih sebagai pilihan.",
        ta: "முடிவுகள் எதிர்மறையாக இருந்தால் — S1 இடம் இன்னும் உள்ளது.",
      },
    ],
  },
  schools: {
    icon: School,
    kicker: {
      en: "Research Phase · Schools",
      zh: "研究阶段 · 学校",
      ms: "Fasa Kajian · Sekolah",
      ta: "ஆராய்ச்சி கட்டம் · பள்ளிகள்",
    },
    title: {
      en: "Research schools and talent paths",
      zh: "研究学校与才艺方向",
      ms: "Kaji sekolah dan laluan bakat",
      ta: "பள்ளிகள் மற்றும் திறமை பாதைகளை ஆராயவும்",
    },
    blurb: {
      en: "The window opens 5 May. Use this stretch to build your shortlist — finder, PSLE COP history, and open-house takeaways.",
      zh: "申请 5 月 5 日开放。利用这段时间用 finder、PSLE 历年分数线、开放日精华做候选名单。",
      ms: "Tetingkap dibuka 5 Mei. Gunakan masa ini untuk senarai pendek — finder, sejarah PSLE COP, ringkasan hari terbuka.",
      ta: "மே 5-ம் தேதி திறக்கப்படும். இந்த நேரத்தைப் பயன்படுத்தி குறுகிய பட்டியலை உருவாக்குங்கள் — தேடல், PSLE COP வரலாறு, திறந்த நாள் சாராம்சம்.",
    },
    primary: {
      href: "/dsa-finder",
      label: {
        en: "Open school finder",
        zh: "打开学校搜索",
        ms: "Buka pencari sekolah",
        ta: "பள்ளி தேடல் திற",
      },
    },
    secondary: {
      href: "/open-house-takeaways",
      label: {
        en: "Open-house takeaways",
        zh: "开放日精华",
        ms: "Ringkasan hari terbuka",
        ta: "திறந்த நாள் சாராம்சம்",
      },
    },
    bullets: [
      {
        en: "Filter 147 schools by talent area, region, and school type.",
        zh: "147 所学校按才艺、区域、学校类型筛选。",
        ms: "Tapis 147 sekolah mengikut bakat, kawasan dan jenis sekolah.",
        ta: "147 பள்ளிகளை திறமை, பகுதி, பள்ளி வகை மூலம் வடிகட்டவும்.",
      },
      {
        en: "Compare PSLE COP across the last 3 years to set realistic targets.",
        zh: "对比近 3 年 PSLE COP，设定切实目标。",
        ms: "Banding PSLE COP 3 tahun terakhir untuk sasaran realistik.",
        ta: "கடந்த 3 ஆண்டுகளின் PSLE COP-ஐ ஒப்பிட்டு யதார்த்தமான இலக்குகளை அமைக்கவும்.",
      },
      {
        en: "Open-house takeaways tell you what each campus actually feels like.",
        zh: "开放日精华告诉你每所学校的真实氛围。",
        ms: "Ringkasan hari terbuka memberitahu suasana sebenar setiap kampus.",
        ta: "திறந்த நாள் சாராம்சம் ஒவ்வொரு வளாகத்தின் உண்மையான உணர்வை சொல்கிறது.",
      },
    ],
  },
};

function pick(s: LocaleStr, locale: "en" | "zh" | "ms" | "ta"): string {
  return s[locale];
}

export function HomeMainSlotCard() {
  const { locale } = useLanguage();
  const [slot, setSlot] = useState<SlotKey | null>(null);

  useEffect(() => {
    setSlot(computeSlot(new Date()));
  }, []);

  // Avoid hydration mismatch: render placeholder during SSR / first paint.
  if (!slot) {
    return (
      <section
        id="current"
        className="bg-surface py-12 sm:py-16"
        aria-hidden
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="h-[380px] rounded-3xl border border-intellectual/10 bg-white shadow-soft" />
        </div>
      </section>
    );
  }

  const data = SLOTS[slot];
  const Icon = data.icon;

  return (
    <section id="current" className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-intellectual/12 bg-white p-7 shadow-card sm:p-10">
          {/* Champagne accent corner */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(198,162,74,0.16), transparent 70%)",
            }}
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-champagne/10 px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-champagne-dark">
                <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                <span className="normal-case">{pick(data.kicker, locale)}</span>
              </div>

              <h2
                style={{ textTransform: "none" }}
                className="font-display text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-intellectual sm:text-[2.25rem]"
              >
                {pick(data.title, locale)}
              </h2>

              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-intellectual-muted sm:text-base">
                {pick(data.blurb, locale)}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={data.primary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-intellectual px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intellectual"
                >
                  <span style={{ textTransform: "none" }}>{pick(data.primary.label, locale)}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
                <Link
                  href={data.secondary.href}
                  className="inline-flex items-center justify-center rounded-xl border border-intellectual/25 px-6 py-3 text-sm font-medium text-intellectual transition hover:border-intellectual/50 hover:bg-intellectual/5"
                >
                  <span style={{ textTransform: "none" }}>{pick(data.secondary.label, locale)}</span>
                </Link>
              </div>
            </div>

            <ul className="space-y-3 border-t border-intellectual/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {data.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-intellectual"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden />
                  <span>{pick(b, locale)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
