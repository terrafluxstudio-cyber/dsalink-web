"use client";

import type { RefObject } from "react";
import Link from "next/link";
import { Check, ExternalLink, X } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";

const DSA_STEPS = [
  {
    number: "1",
    title: "Apply",
    titleZh: "申请",
    titleMs: "Mohon",
    titleTa: "விண்ணப்பிக்கவும்",
    description:
      "Submit up to 3 school choices via the MOE DSA portal. Applications are free and open from 6 May 2026.",
    descriptionZh:
      "通过教育部 DSA 平台提交最多 3 个学校选择。申请免费，并从 2026 年 5 月 6 日开放。",
    descriptionMs:
      "Hantar sehingga 3 pilihan sekolah melalui portal MOE DSA. Permohonan percuma dan dibuka mulai 6 Mei 2026.",
    descriptionTa:
      "MOE DSA போர்டல் மூலம் 3 வரை பள்ளி தேர்வுகளை சமர்ப்பிக்கவும். விண்ணப்பங்கள் இலவசம், 6 மே 2026 முதல் திறக்கப்படும்.",
    href: "/dsa-guide",
    linkLabel: "How to apply →",
    linkLabelZh: "了解申请流程 →",
    linkLabelMs: "Cara memohon →",
    linkLabelTa: "விண்ணப்பிப்பது எப்படி →",
  },
  {
    number: "2",
    title: "Selected",
    titleZh: "入选",
    titleMs: "Dipilih",
    titleTa: "தேர்ந்தெடுக்கப்பட்டது",
    description:
      "Schools invite your child for a trial, audition, or interview based on their talent area.",
    descriptionZh:
      "学校会根据孩子的才艺领域，邀请他们参加选拔、试演或面试。",
    descriptionMs:
      "Sekolah akan menjemput anak anda untuk ujian, audisi, atau temuduga berdasarkan bidang bakat mereka.",
    descriptionTa:
      "பள்ளிகள் உங்கள் குழந்தையின் திறன் பகுதியின் அடிப்படையில் சோதனை, ஆடிஷன் அல்லது நேர்காணலுக்கு அழைக்கும்.",
    href: "/dsa-interview",
    linkLabel: "Interview tips →",
    linkLabelZh: "面试技巧 →",
    linkLabelMs: "Tips temuduga →",
    linkLabelTa: "நேர்காணல் குறிப்புகள் →",
  },
  {
    number: "3",
    title: "Confirmed",
    titleZh: "确认",
    titleMs: "Disahkan",
    titleTa: "உறுதிப்படுத்தப்பட்டது",
    description:
      "If offered a place, your child's school is secured before PSLE results are released.",
    descriptionZh:
      "如果获得录取名额，孩子会在 PSLE 成绩公布前确定中学去向。",
    descriptionMs:
      "Jika ditawarkan tempat, sekolah anak anda dijamin sebelum keputusan PSLE diumumkan.",
    descriptionTa:
      "இடம் வழங்கப்பட்டால், PSLE முடிவுகள் வெளியிடப்படுவதற்கு முன்பே உங்கள் குழந்தையின் பள்ளி உறுதிப்படுத்தப்படும்.",
    href: "/faq",
    linkLabel: "Common questions →",
    linkLabelZh: "常见问题 →",
    linkLabelMs: "Soalan lazim →",
    linkLabelTa: "பொதுவான கேள்விகள் →",
  },
];

const MISCONCEPTIONS = [
  {
    myth: "Only elite students from top primary schools apply.",
    mythZh: "只有名校小学生和顶尖学生才会申请。",
    mythMs: "Hanya pelajar elit dari sekolah rendah ternama yang memohon.",
    mythTa:
      "சிறந்த தொடக்கப் பள்ளிகளிலிருந்து வரும் மிகச் சிறந்த மாணவர்கள் மட்டுமே விண்ணப்பிக்கிறார்கள்.",
    fact: "Any P6 student from any primary school can apply. School name doesn't matter. Talent does.",
    factZh: "任何小学的 P6 学生都可以申请。学校名气不重要，孩子的才能才重要。",
    factMs:
      "Mana-mana pelajar Darjah 6 dari mana-mana sekolah rendah boleh memohon. Nama sekolah tidak penting. Bakat anak yang diambil kira.",
    factTa:
      "எந்த தொடக்கப் பள்ளியிலிருந்தும் எந்த P6 மாணவரும் விண்ணப்பிக்கலாம். பள்ளியின் பெயர் முக்கியமல்ல. திறன்தான் முக்கியம்.",
  },
  {
    myth: "My child needs national champion results.",
    mythZh: "孩子必须是全国冠军才有机会。",
    mythMs: "Anak saya mesti menjadi juara kebangsaan untuk berpeluang.",
    mythTa: "வாய்ப்பு பெற என் குழந்தை தேசிய சாம்பியனாக இருக்க வேண்டும்.",
    fact: "Schools value consistent CCA participation and genuine interest. Trophies help but are not the only path.",
    factZh: "学校也重视长期参与 CCA 和真实兴趣。奖项有帮助，但不是唯一途径。",
    factMs:
      "Sekolah menghargai penyertaan CCA yang konsisten dan minat yang sebenar. Piala membantu, tetapi bukan satu-satunya laluan.",
    factTa:
      "பள்ளிகள் தொடர்ந்து CCA-வில் பங்கேற்பதையும் உண்மையான ஆர்வத்தையும் மதிக்கின்றன. கோப்பைகள் உதவும், ஆனால் அது ஒரே வழி அல்ல.",
  },
  {
    myth: "It's complicated and costs money.",
    mythZh: "申请很复杂，而且需要花钱。",
    mythMs: "Prosesnya rumit dan memerlukan bayaran.",
    mythTa: "இது சிக்கலானது, பணமும் செலவாகும்.",
    fact: "The MOE application is completely free. No agent needed. DSALink is also free.",
    factZh: "教育部申请完全免费，不需要中介。DSALink 也免费使用。",
    factMs:
      "Permohonan MOE adalah percuma sepenuhnya. Tiada ejen diperlukan. DSALink juga percuma.",
    factTa:
      "MOE விண்ணப்பம் முற்றிலும் இலவசம். முகவர் தேவையில்லை. DSALink-உம் இலவசம்.",
  },
];

export function DsaExplainerSection() {
  const { locale, t } = useLanguage();
  const { ref: cardsRef, inView: cardsInView } = useInView();

  return (
    <section className="border-t border-surface-warm bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mb-6 max-w-3xl">
            <p className="mb-2 text-[10px] font-bold tracking-[0.15em] text-champagne-dark">
              {t.dsaExplainerKicker}
            </p>
            <h2 className="font-display text-[1.625rem] font-extrabold leading-tight text-slate-900 sm:text-[2rem]">
              {t.dsaExplainerH2}
            </h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate-500">
              {t.dsaExplainerIntro}
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-6">
          {/* ── Pathway diagram ──────────────────────────── */}
          <div className="mb-5 overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4 sm:p-5">
            <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-slate-400">
              {t.dsaExplainerPathwaysTitle}
            </p>
            <div className="overflow-x-auto">
              <svg
                viewBox="0 0 560 124"
                className="mx-auto min-w-[300px] w-full max-w-2xl"
                aria-hidden
                role="img"
              >
                {/* ── P6 start node ── */}
                <rect x="2" y="44" width="104" height="36" rx="8" fill="#1e3a5f" />
                <text x="54" y="58" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">
                  {t.dsaExplainerSvgP6Label}
                </text>
                <text x="54" y="72" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="7.5" fontFamily="system-ui, sans-serif">
                  {t.dsaExplainerSvgAnyPrimary}
                </text>

                {/* ── Stem ── */}
                <line x1="106" y1="62" x2="138" y2="62" stroke="#cbd5e1" strokeWidth="2" />
                <circle cx="138" cy="62" r="4" fill="#94a3b8" />

                {/* ── Upper branch: PSLE (dashed / grey) ── */}
                <line x1="138" y1="62" x2="138" y2="30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />
                <line x1="138" y1="30" x2="198" y2="30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />

                {/* ── Lower branch: DSA (solid / gold) ── */}
                <line x1="138" y1="62" x2="138" y2="94" stroke="#c6a24a" strokeWidth="2" />
                <line x1="138" y1="94" x2="198" y2="94" stroke="#c6a24a" strokeWidth="2" />

                {/* ── PSLE card ── */}
                <rect x="198" y="12" width="138" height="36" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                <text x="267" y="27" textAnchor="middle" fill="#64748b" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">
                  {t.dsaExplainerSvgPslePosting}
                </text>
                <text x="267" y="41" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">
                  {t.dsaExplainerSvgPsleScore}
                </text>

                {/* ── DSA card ── */}
                <rect x="198" y="76" width="138" height="36" rx="8" fill="#fef9ec" stroke="#c6a24a" strokeWidth="1.5" />
                <text x="267" y="91" textAnchor="middle" fill="#92701a" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">
                  {t.dsaExplainerSvgDsaPathway}
                </text>
                <text x="267" y="105" textAnchor="middle" fill="#a07820" fontSize="8" fontFamily="system-ui, sans-serif">
                  {t.dsaExplainerSvgDsaTalent}
                </text>

                {/* ── Arrows to outcomes ── */}
                <line x1="336" y1="30" x2="360" y2="30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />
                <polygon points="358,27 366,30 358,33" fill="#94a3b8" />
                <line x1="336" y1="94" x2="360" y2="94" stroke="#c6a24a" strokeWidth="2" />
                <polygon points="358,91 366,94 358,97" fill="#c6a24a" />

                {/* ── Outcome: PSLE ── */}
                <rect x="366" y="12" width="188" height="36" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                <text x="460" y="27" textAnchor="middle" fill="#475569" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">
                  {t.dsaExplainerSvgPsleCompete}
                </text>
                <text x="460" y="41" textAnchor="middle" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">
                  {t.dsaExplainerSvgPsleResult}
                </text>

                {/* ── Outcome: DSA ── */}
                <rect x="366" y="76" width="188" height="36" rx="8" fill="#fef9ec" stroke="#c6a24a" strokeWidth="1.5" />
                <text x="460" y="91" textAnchor="middle" fill="#92701a" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">
                  {t.dsaExplainerSvgDsaSecured}
                </text>
                <text x="460" y="105" textAnchor="middle" fill="#a07820" fontSize="7.5" fontFamily="system-ui, sans-serif">
                  {t.dsaExplainerSvgDsaHow}
                </text>
              </svg>
            </div>
          </div>
          <div
            ref={cardsRef as RefObject<HTMLDivElement>}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {DSA_STEPS.map((step, index) => (
              <div
                key={step.number}
                className={`rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5 ${
                  cardsInView
                    ? `animate-fade-up ${index === 1 ? 'animate-fade-up-delay-1' : index === 2 ? 'animate-fade-up-delay-2' : ''}`
                    : 'opacity-0'
                }`}
              >
                <p className="mb-3 font-display text-2xl font-bold text-intellectual">
                  {step.number}
                </p>
                <h3 className="mb-2 font-display text-[1rem] font-semibold text-slate-900">
                  {locale === "zh" ? step.titleZh : locale === "ms" ? step.titleMs : locale === "ta" ? step.titleTa : step.title}
                </h3>
                <p className="text-[0.875rem] leading-relaxed text-slate-600">
                  {locale === "zh" ? step.descriptionZh : locale === "ms" ? step.descriptionMs : locale === "ta" ? step.descriptionTa : step.description}
                </p>
                <Link
                  href={step.href}
                  className="mt-3 inline-block text-[0.8125rem] font-semibold text-intellectual transition hover:text-intellectual-light"
                >
                  {locale === "zh" ? step.linkLabelZh : locale === "ms" ? step.linkLabelMs : locale === "ta" ? step.linkLabelTa : step.linkLabel}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[0.8125rem] leading-relaxed text-slate-500">
            {t.dsaExplainerFootnote}
            <Link
              href="https://www.moe.gov.sg/secondary/dsa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                locale === "zh"
                  ? "MOE DSA 页面，外部网站"
                  : "MOE Direct School Admission page, external website"
              }
              className="inline-flex items-center gap-1 font-medium text-intellectual underline underline-offset-2 hover:text-intellectual-light"
            >
              moe.gov.sg/secondary/dsa
              <ExternalLink className="h-3 w-3" aria-hidden />
            </Link>
            )
          </p>
        </div>

        <div className="mb-6">
          <p className="mb-4 text-[10px] font-bold tracking-[0.15em] text-slate-400">
            {t.dsaExplainerMisconceptionsLabel}
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {MISCONCEPTIONS.map((item) => (
              <div
                key={item.myth}
                className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3">
                  <p className="mb-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-red-600">
                    <X className="h-3.5 w-3.5" aria-hidden />
                    {t.dsaExplainerMythLabel}
                  </p>
                  <p className="text-[0.8125rem] leading-snug text-slate-700">
                    {locale === "zh" ? item.mythZh : locale === "ms" ? item.mythMs : locale === "ta" ? item.mythTa : item.myth}
                  </p>
                </div>
                <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                  <p className="mb-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-emerald-700">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                    {t.dsaExplainerFactLabel}
                  </p>
                  <p className="text-[0.8125rem] leading-snug text-slate-700">
                    {locale === "zh" ? item.factZh : locale === "ms" ? item.factMs : locale === "ta" ? item.factTa : item.fact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-champagne/30 bg-champagne-subtle p-6 text-center">
          <Link
            href="/dsa-finder"
            className="inline-flex items-center justify-center rounded-xl bg-champagne px-6 py-3 text-[0.9375rem] font-semibold text-intellectual shadow-soft transition hover:bg-champagne-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-dark"
          >
            {t.dsaExplainerSearchCta}
          </Link>
          <p className="mt-3 text-[0.8125rem] text-slate-500">
            {t.dsaExplainerPoweredBy}
          </p>
        </div>
      </div>
    </section>
  );
}
