"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ScoresEntryCard } from "@/components/HomeDynamic";
import { TakeawaysEntryCard } from "@/components/TakeawaysEntryCard";

const L6_COPY = {
  en: {
    kicker: "Reference · Evergreen",
    title: "Two data sets parents bookmark.",
    subtitle:
      "Open-house takeaways (what each campus actually felt like) and 3-year PSLE COP history — the two anchors families return to from May through November.",
  },
  zh: {
    kicker: "参考资料 · 长青内容",
    title: "两组家长收藏率最高的数据",
    subtitle:
      "开放日实地笔记（每所学校真实的感受）+ 近三年 PSLE 入学分数线 —— 从五月到十一月，家长不断回看的两个锚点。",
  },
  ms: {
    kicker: "Rujukan · Sentiasa Berguna",
    title: "Dua set data yang ibu bapa simpan",
    subtitle:
      "Catatan open-house (rasa sebenar setiap sekolah) dan sejarah PSLE COP 3 tahun — dua titik rujukan yang keluarga kembali baca dari Mei hingga November.",
  },
  ta: {
    kicker: "குறிப்பு · நிலையான தகவல்",
    title: "பெற்றோர் தொடர்ந்து பார்க்கும் இரண்டு தரவுத் தொகுப்புகள்",
    subtitle:
      "திறந்த நாள் குறிப்புகள் (ஒவ்வொரு பள்ளியின் உண்மையான உணர்வு) மற்றும் 3 ஆண்டு PSLE COP வரலாறு — மே முதல் நவம்பர் வரை குடும்பங்கள் திரும்பத் திரும்பப் பார்க்கும் இரண்டு நங்கூரங்கள்.",
  },
} as const;

export function HomeFeaturedEvergreen() {
  const { locale } = useLanguage();
  const t = L6_COPY[locale];

  return (
    <section className="border-y border-champagne/20 bg-champagne-subtle py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
            <span className="h-px w-6 bg-champagne-dark" aria-hidden />
            {t.kicker}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="font-display text-[1.875rem] font-extrabold leading-[1.1] tracking-tight text-intellectual sm:text-[2.25rem]"
          >
            {t.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-intellectual-muted">
            {t.subtitle}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <TakeawaysEntryCard />
          <ScoresEntryCard />
        </div>
      </div>
    </section>
  );
}
