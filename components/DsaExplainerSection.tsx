import Link from "next/link";
import { Check, ExternalLink, X } from "lucide-react";

const DSA_STEPS = [
  {
    number: "1",
    title: "Apply",
    titleZh: "申请",
    description:
      "Submit up to 3 school choices via the MOE DSA portal. Applications are free and open from 6 May 2026.",
    descriptionZh:
      "通过教育部 DSA 平台提交最多 3 个学校选择。申请免费，并从 2026 年 5 月 6 日开放。",
  },
  {
    number: "2",
    title: "Selected",
    titleZh: "入选",
    description:
      "Schools invite your child for a trial, audition, or interview based on their talent area.",
    descriptionZh:
      "学校会根据孩子的才艺领域，邀请他们参加选拔、试演或面试。",
  },
  {
    number: "3",
    title: "Confirmed",
    titleZh: "确认",
    description:
      "If offered a place, your child's school is secured before PSLE results are released.",
    descriptionZh:
      "如果获得录取名额，孩子会在 PSLE 成绩公布前确定中学去向。",
  },
];

const MISCONCEPTIONS = [
  {
    myth: "Only elite students from top primary schools apply.",
    mythZh: "只有名校小学生和顶尖学生才会申请。",
    fact: "Any P6 student from any primary school can apply. School name doesn't matter. Talent does.",
    factZh: "任何小学的 P6 学生都可以申请。学校名气不重要，孩子的才能才重要。",
  },
  {
    myth: "My child needs national champion results.",
    mythZh: "孩子必须是全国冠军才有机会。",
    fact: "Schools value consistent CCA participation and genuine interest. Trophies help but are not the only path.",
    factZh: "学校也重视长期参与 CCA 和真实兴趣。奖项有帮助，但不是唯一途径。",
  },
  {
    myth: "It's complicated and costs money.",
    mythZh: "申请很复杂，而且需要花钱。",
    fact: "The MOE application is completely free. No agent needed. DSALink is also free.",
    factZh: "教育部申请完全免费，不需要中介。DSALink 也免费使用。",
  },
];

export function DsaExplainerSection() {
  return (
    <section className="border-t border-surface-warm bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-2 text-[10px] font-bold tracking-[0.15em] text-champagne-dark">
            Direct School Admission · DSA 2026
          </p>
          <h2 className="font-display text-[1.625rem] font-extrabold leading-tight text-slate-900 sm:text-[2rem]">
            Your child has a talent. There are schools that want exactly that.
            <span className="mt-2 block text-[1.125rem] leading-snug text-slate-700 sm:text-[1.375rem]">
              每个孩子都有自己的天赋，也有学校正在寻找这样的潜能。
            </span>
          </h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate-500">
            DSA is a free MOE programme that lets P6 students apply to secondary
            schools based on their interests, aptitude, and potential, not just
            PSLE results.
            <span className="mt-2 block">
              DSA 是教育部的免费计划，让小六学生能凭兴趣、能力和潜能申请中学，不只看
              PSLE 成绩。
            </span>
          </p>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {DSA_STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card transition hover:shadow-card-hover"
              >
                <p className="mb-3 font-display text-2xl font-bold text-intellectual">
                  {step.number}
                </p>
                <h3 className="mb-2 font-display text-[1rem] font-semibold text-slate-900">
                  {step.title}
                  <span className="ml-1 text-slate-500">{step.titleZh}</span>
                </h3>
                <p className="text-[0.875rem] leading-relaxed text-slate-600">
                  {step.description}
                  <span className="mt-2 block text-slate-500">
                    {step.descriptionZh}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[0.8125rem] leading-relaxed text-slate-500">
            *DSA does not replace PSLE. Your child still sits the exam and must
            meet the school&apos;s minimum posting group score. Source: MOE (
            <Link
              href="https://www.moe.gov.sg/secondary/dsa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MOE Direct School Admission page, external website"
              className="inline-flex items-center gap-1 font-medium text-intellectual underline underline-offset-2 hover:text-intellectual-light"
            >
              moe.gov.sg/secondary/dsa
              <ExternalLink className="h-3 w-3" aria-hidden />
            </Link>
            )
            <span className="mt-1 block">
              DSA 不会取代 PSLE。孩子仍需参加考试，并达到学校的最低分配组别要求。
            </span>
          </p>
        </div>

        <div className="mb-10">
          <p className="mb-4 text-[10px] font-bold tracking-[0.15em] text-slate-400">
            Common misconceptions
            <span className="ml-2 text-slate-500">常见误解</span>
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {MISCONCEPTIONS.map((item) => (
              <div
                key={item.myth}
                className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card transition hover:shadow-card-hover"
              >
                <div className="mb-4 rounded-lg border border-red-100 bg-red-50 p-3">
                  <p className="mb-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-red-600">
                    <X className="h-3.5 w-3.5" aria-hidden />
                    Myth
                  </p>
                  <p className="text-[0.8125rem] leading-snug text-slate-700">
                    {item.myth}
                    <span className="mt-1 block text-slate-500">
                      {item.mythZh}
                    </span>
                  </p>
                </div>
                <div className="rounded-lg border border-green-100 bg-green-50 p-3">
                  <p className="mb-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-green-700">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                    Fact
                  </p>
                  <p className="text-[0.8125rem] leading-snug text-slate-700">
                    {item.fact}
                    <span className="mt-1 block text-slate-500">
                      {item.factZh}
                    </span>
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
            Search talent areas
          </Link>
          <p className="mt-3 text-[0.8125rem] text-slate-500">
            Powered by DSALink, free, independent, not affiliated with MOE
            <span className="mt-1 block">
              由 DSALink 提供，免费、独立，与教育部无隶属关系
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
