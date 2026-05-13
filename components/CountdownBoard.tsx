"use client";

import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCountdown } from "@/hooks/useCountdown";

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownBoard() {
  const { t } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const { days, hours, minutes, seconds, totalMs } = useCountdown();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const items =
    totalMs <= 0
      ? []
      : [
          { label: t.countdownDays, value: String(days) },
          { label: t.countdownHours, value: pad2(hours) },
          { label: t.countdownMinutes, value: pad2(minutes) },
          { label: t.countdownSeconds, value: pad2(seconds) },
        ];

  if (!isMounted) {
    return (
      <div
        className="w-full max-w-xl rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
        aria-busy="true"
        aria-label={t.countdownLabel}
      >
        <div className="mb-4 flex items-center gap-2 text-slate-900">
          <Clock className="h-5 w-5 shrink-0 text-indigo-600" aria-hidden />
          <p className="text-sm font-medium leading-snug text-slate-900 sm:text-base">
            {t.countdownLabel}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-8 shadow-sm sm:py-10"
            >
              <div className="mx-auto h-8 w-12 animate-pulse rounded bg-slate-200 sm:h-9 sm:w-14" />
              <div className="mx-auto mt-3 h-3 w-14 animate-pulse rounded bg-slate-200 sm:w-16" />
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-600 sm:text-xs">
          {t.countdownDeadlineLine}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center gap-2 text-slate-900">
        <Clock className="h-5 w-5 shrink-0 text-indigo-600" aria-hidden />
        <p className="text-sm font-medium leading-snug text-slate-900 sm:text-base">
          {t.countdownLabel}
        </p>
      </div>
      {totalMs <= 0 ? (
        <p className="text-sm text-slate-600">{t.countdownComplete}</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-center shadow-sm sm:py-4"
            >
              <div className="font-display text-2xl font-semibold tabular-nums text-slate-900 sm:text-3xl">
                {item.value}
              </div>
              <div className="mt-1 text-[11px] font-medium leading-tight text-slate-600 sm:text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-600 sm:text-xs">
        {t.countdownDeadlineLine}
      </p>
    </div>
  );
}
