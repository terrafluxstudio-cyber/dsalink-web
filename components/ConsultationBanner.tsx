"use client";

import { CalendarCheck, ChevronRight, Star } from "lucide-react";

export function ConsultationBanner() {
  return (
    <section className="border-t border-intellectual/5 bg-champagne-subtle/60 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-champagne/30 bg-gradient-to-br from-intellectual to-intellectual-dark px-6 py-10 shadow-soft sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-champagne/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/4 rounded-full bg-champagne/8 blur-2xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-champagne/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-champagne">
                <Star className="h-3 w-3 fill-champagne text-champagne" aria-hidden />
                DSA 专家咨询 · 限量名额
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                一对一 DSA 申请策略咨询
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/75">
                由资深 DSA 顾问为您量身制定申请方案 ——
                学校筛选、时间规划、才能包装与面试备战，全程指导。
              </p>
              <ul className="mt-5 flex flex-col gap-2.5 text-sm text-white/80">
                {[
                  "深度解析各校 DSA 录取标准与真实竞争力",
                  "个性化申请路线图，规避常见误区",
                  "面试模拟与专业反馈，提升录取成功率",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-champagne">
                      <svg width="8" height="7" viewBox="0 0 8 7" fill="none" aria-hidden>
                        <path d="M1 3.5L3 5.5L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-3 lg:items-center">
              <a
                href="mailto:terrafluxstudio@gmail.com?subject=DSA%20%E4%B8%93%E5%AE%B6%E5%92%A8%E8%AF%A2%E9%A2%84%E7%BA%A6&body=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E9%A2%84%E7%BA%A6%20DSA%20%E5%92%A8%E8%AF%A2%E3%80%82%0A%0A%E5%AD%A9%E5%AD%90%E7%8F%BE%E5%9C%A8%E7%9A%84%E5%B9%B4%E7%BA%A7%EF%BC%9A%0A%E6%84%9F%E5%85%B4%E8%B6%A3%E7%9A%84%E6%89%8D%E8%83%BD%E9%A2%86%E5%9F%9F%EF%BC%9A%0A%E7%9B%AE%E6%A0%87%E5%AD%A6%E6%A0%A1%EF%BC%88%E5%A6%82%E6%9C%89%EF%BC%89%EF%BC%9A"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-champagne px-6 py-3.5 text-sm font-bold text-intellectual shadow-md transition hover:bg-champagne-light active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-light"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden />
                立即预约咨询
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
              </a>
              <p className="text-xs text-white/45">工作日内 48 小时回复 · 首次免费沟通 15 分钟</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
