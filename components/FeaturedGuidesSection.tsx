"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturedGuidesSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="border-y border-champagne/20 bg-champagne-subtle">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-champagne/30 bg-white p-6 shadow-card">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/20 text-champagne-dark">
                <BookOpen className="h-5 w-5" aria-hidden />
              </div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-champagne-dark normal-case">
                {t.featuredGuideKicker}{" "}
                <span aria-hidden className="animate-sparkle text-base">
                  ★
                </span>
              </p>
            </div>
            <h2 className="font-display text-[1.25rem] font-extrabold leading-snug text-slate-900 sm:text-[1.375rem]">
              {t.featuredGuideTitle}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              {t.dsaExpCalloutItem1}
            </p>
            <Link
              href="/dsa-experience"
              className="mt-5 inline-flex items-center gap-1.5 self-start rounded-lg bg-intellectual px-4 py-2 text-sm font-semibold text-white transition hover:bg-intellectual-light"
            >
              {t.featuredGuideCta}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>

          <div className="flex flex-col rounded-2xl border border-champagne/30 bg-white p-6 shadow-card">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/20 text-champagne-dark">
                <MapPin className="h-5 w-5" aria-hidden />
              </div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-champagne-dark normal-case">
                {t.fieldGuide_kicker}{" "}
                <span aria-hidden className="animate-sparkle text-base">
                  ★
                </span>
              </p>
            </div>
            <h2 className="font-display text-[1.25rem] font-extrabold leading-snug text-slate-900 sm:text-[1.375rem]">
              {t.fieldGuide_title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              {t.fieldGuide_subtitle}
            </p>
            <Link
              href="/open-house-guide"
              className="mt-5 inline-flex items-center gap-1.5 self-start rounded-lg bg-intellectual px-4 py-2 text-sm font-semibold text-white transition hover:bg-intellectual-light"
            >
              {t.fieldGuide_read_more}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>

          <div className="flex flex-col rounded-2xl border border-champagne/30 bg-white p-6 shadow-card">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/20 text-champagne-dark">
                <Users className="h-5 w-5" aria-hidden />
              </div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-champagne-dark normal-case">
                {locale === "zh" ? "辅导机构目录" : locale === "ms" ? "DIREKTORI JURULATIH" : locale === "ta" ? "பயிற்சியாளர் அடைவு" : "COACH DIRECTORY"}
              </p>
            </div>
            <h2 className="font-display text-[1.25rem] font-extrabold leading-snug text-slate-900 sm:text-[1.375rem]">
              {locale === "zh" ? "50+ DSA辅导机构" : locale === "ms" ? "50+ Penyedia Latihan DSA" : locale === "ta" ? "50+ DSA பயிற்சி வழங்குநர்கள்" : "50+ DSA Coaching Providers"}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
              {locale === "zh"
                ? "音乐、体育、视觉艺术、表演艺术、科技与面试准备。按知名度排序，涵盖雅马哈、SNYO、ActiveSG 等知名机构。"
                : locale === "ms"
                ? "Muzik, sukan, seni visual, seni persembahan, teknologi dan persediaan temuduga. Termasuk Yamaha, SNYO, ActiveSG dan lebih 50 penyedia lain."
                : locale === "ta"
                ? "இசை, விளையாட்டு, காட்சிக்கலை, நிகழ்த்துகலை, தொழில்நுட்பம் மற்றும் நேர்காணல். Yamaha, SNYO, ActiveSG உட்பட 50+ வழங்குநர்கள்."
                : "Music, sports, visual arts, performing arts, tech, and interview coaching. Includes Yamaha, SNYO, ActiveSG, and 50+ more providers sorted by prominence."}
            </p>
            <Link
              href="/dsa-coaches"
              className="mt-5 inline-flex items-center gap-1.5 self-start rounded-lg bg-intellectual px-4 py-2 text-sm font-semibold text-white transition hover:bg-intellectual-light"
            >
              {locale === "zh" ? "浏览目录" : locale === "ms" ? "Lihat Direktori" : locale === "ta" ? "அடைவை பார்க்க" : "Browse directory"}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
