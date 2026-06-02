"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Compass, School } from "lucide-react";
import { DeadlineCard } from "@/components/DeadlineCard";
import { useLanguage } from "@/contexts/LanguageContext";

type Slot = "application" | "after-apply" | "schools" | null;

function computeSlot(now: Date): Exclude<Slot, null> {
  const sgMs = now.getTime() + 8 * 60 * 60 * 1000;
  const sg = new Date(sgMs);
  const month = sg.getUTCMonth() + 1;
  const day = sg.getUTCDate();

  if ((month === 5 && day >= 5) || (month === 6 && day <= 2)) return "application";
  if ((month === 6 && day >= 3) || (month > 6 && month <= 11)) return "after-apply";
  return "schools";
}

/**
 * "Current-moment" insert between Hero and the 5 nav cards.
 * Switches automatically by Singapore date — single time-sensitive module
 * that does NOT override the platform framing above.
 */
export function HomeTimeSlot() {
  const { locale } = useLanguage();
  const [slot, setSlot] = useState<Slot>(null);

  useEffect(() => {
    setSlot(computeSlot(new Date()));
  }, []);

  if (slot === null) return null;

  if (slot === "application") {
    return (
      <section className="bg-surface-warm/40 py-6 sm:py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-amber-700 normal-case">
            {locale === "zh"
              ? "现在 · 申请窗口"
              : locale === "ms"
                ? "Sekarang · Tetingkap Permohonan"
                : locale === "ta"
                  ? "இப்போது · விண்ணப்ப சாளரம்"
                  : "Right Now · Application Window"}
          </p>
          <DeadlineCard />
        </div>
      </section>
    );
  }

  if (slot === "after-apply") {
    const title = {
      en: "Now in: the 6-month black box",
      zh: "正在进行：6 个月信息黑箱",
      ms: "Sekarang: kotak gelap 6 bulan",
      ta: "இப்போது: 6 மாத கருப்புப் பெட்டி",
    };
    const blurb = {
      en: "Application is closed. The next phase is private — interview waits, trials, results, S1 routing. The reference for it.",
      zh: "申请已结束。接下来全是私下进行——面试等待、trial、结果、S1 分流。这里是这段的 reference。",
      ms: "Permohonan ditutup. Fasa seterusnya peribadi — temu duga, trial, keputusan, penghalaan S1. Rujukan untuknya.",
      ta: "விண்ணப்பம் முடிந்தது. அடுத்த கட்டம் தனிப்பட்டது — நேர்காணல், சோதனை, முடிவுகள், S1. அதற்கான குறிப்பு.",
    };
    const cta = {
      en: "Open the reference",
      zh: "打开 reference",
      ms: "Buka rujukan",
      ta: "குறிப்பைத் திற",
    };
    return (
      <section className="bg-surface-warm/40 py-6 sm:py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/after-apply"
            className="group block rounded-2xl border border-intellectual/15 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-intellectual/30 hover:shadow-card sm:p-6"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
                <Compass className="h-5 w-5" aria-hidden />
              </span>
              <div className="flex-1">
                <p className="mb-1 text-[11px] font-semibold tracking-[0.16em] text-intellectual/60 normal-case">
                  {locale === "zh"
                    ? "现在 · 申请之后"
                    : locale === "ms"
                      ? "Sekarang · Selepas Memohon"
                      : locale === "ta"
                        ? "இப்போது · விண்ணப்பித்த பிறகு"
                        : "Right Now · After You Apply"}
                </p>
                <h3 className="font-display text-base font-semibold text-intellectual sm:text-lg">
                  {title[locale]}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-intellectual-muted">
                  {blurb[locale]}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-intellectual transition group-hover:text-intellectual-light">
                  {cta[locale]}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    );
  }

  // schools (Dec – early May): next-year research phase
  const title = {
    en: "Now in: research season",
    zh: "正在进行：择校研究季",
    ms: "Sekarang: musim penyelidikan",
    ta: "இப்போது: ஆராய்ச்சி பருவம்",
  };
  const blurb = {
    en: "Application opens in May. Use the off-season to map schools, talent areas, PSLE cut-offs, and open house signals.",
    zh: "申请 5 月开放。利用淡季把学校、才艺方向、PSLE 分数线、开放日信号一次看清。",
    ms: "Permohonan dibuka pada Mei. Guna musim luar untuk memetakan sekolah, bakat, PSLE, isyarat hari terbuka.",
    ta: "மே மாதம் விண்ணப்பம் தொடங்கும். பள்ளிகள், திறன்கள், PSLE, திறந்த நாள் சமிக்ஞைகளைப் பார்க்கவும்.",
  };
  const cta = {
    en: "Browse the schools section",
    zh: "查看学校页",
    ms: "Layari bahagian sekolah",
    ta: "பள்ளிகள் பகுதியைப் பார்க்கவும்",
  };
  return (
    <section className="bg-surface-warm/40 py-6 sm:py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/dsa-finder"
          className="group block rounded-2xl border border-intellectual/15 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-intellectual/30 hover:shadow-card sm:p-6"
        >
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
              <School className="h-5 w-5" aria-hidden />
            </span>
            <div className="flex-1">
              <p className="mb-1 text-[11px] font-semibold tracking-[0.16em] text-intellectual/60 normal-case">
                {locale === "zh"
                  ? "现在 · 学校研究"
                  : locale === "ms"
                    ? "Sekarang · Penyelidikan Sekolah"
                    : locale === "ta"
                      ? "இப்போது · பள்ளி ஆராய்ச்சி"
                      : "Right Now · Schools Research"}
              </p>
              <h3 className="font-display text-base font-semibold text-intellectual sm:text-lg">
                {title[locale]}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-intellectual-muted">
                {blurb[locale]}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-intellectual transition group-hover:text-intellectual-light">
                {cta[locale]}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
