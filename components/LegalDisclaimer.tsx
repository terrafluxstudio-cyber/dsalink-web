"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { REPORT_ERROR_MAILTO } from "@/lib/report-error-mailto";

/**
 * Bilingual legal disclaimer for informational use only (MOE non-affiliation).
 * Shown site-wide above the branded footer band.
 */

export function LegalDisclaimer() {
  const { t } = useLanguage();

  return (
    <div
      className="border-t border-intellectual/10 bg-slate-50/90"
      aria-label="Disclaimer"
    >
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-7">
        <div className="space-y-3 text-xs leading-relaxed text-intellectual-muted sm:text-sm">
          <p lang="zh-Hans">
            免责声明：本站提供的信息（包括但不限于 PSLE
            分数和学校开放日日期）仅供参考。本站非新加坡教育部 (MOE)
            官方网站。由于数据可能存在滞后或误差，所有录取标准及活动安排请务必以 MOE 官方
            SchoolFinder
            及各校官网为准。本站不对因使用本信息而产生的任何后果承担法律责任。
          </p>
          <p lang="en">
            Disclaimer: The information provided on this site, including PSLE COP
            and Open House dates, is for informational purposes only. This
            website is not affiliated with the Ministry of Education (MOE)
            Singapore. Users should verify all details with the official MOE
            SchoolFinder or respective school websites. We assume no
            responsibility for any decisions made based on the data provided.
          </p>
          <p className="text-xs sm:text-sm">
            <a
              href={REPORT_ERROR_MAILTO}
              className="font-medium text-intellectual underline decoration-intellectual/25 decoration-1 underline-offset-2 transition hover:text-intellectual-dark hover:decoration-champagne/60"
            >
              {t.legalDisclaimerReportError}
            </a>
          </p>
          <p className="border-t border-intellectual/10 pt-3 text-[11px] leading-snug text-intellectual-muted/85 sm:text-xs">
            <span className="block tabular-nums">Last Updated: May 2026</span>
            <span className="mt-0.5 block tabular-nums">最后更新：2026年5月</span>
          </p>
        </div>
      </div>
    </div>
  );
}
