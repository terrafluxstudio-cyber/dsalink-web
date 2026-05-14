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

  const skeletonCell = (
    <div className="rounded-xl border border-surface-warm bg-white px-3 py-4 text-center shadow-card">
      <div className="mx-auto h-7 w-10 animate-pulse rounded bg-surface-subtle sm:h-8 sm:w-12" />
      <div className="mx-auto mt-2 h-2.5 w-10 animate-pulse rounded bg-surface-subtle" />
    </div>
  );

  return (
    <div className="w-full max-w-xl rounded-xl border border-surface-warm bg-white p-4 shadow-card sm:p-5">
      <div className="mb-3 flex items-center gap-2">
        <Clock className="h-3.5 w-3.5 shrink-0 text-intellectual" aria-hidden />
        <p className="text-[0.8125rem] font-medium text-slate-700">
          {t.countdownLabel}
        </p>
      </div>

      {!isMounted ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5" aria-busy="true" aria-label={t.countdownLabel}>
          {Array.from({ length: 4 }).map((_, i) => <div key={i}>{skeletonCell}</div>)}
        </div>
      ) : totalMs <= 0 ? (
        <p className="text-sm text-slate-500">{t.countdownComplete}</p>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-surface-warm bg-surface px-3 py-3 text-center"
            >
              <div className="font-display text-2xl font-bold tabular-nums text-slate-900 sm:text-[1.75rem]">
                {item.value}
              </div>
              <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-[11px]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-400">
        {t.countdownDeadlineLine}
      </p>
    </div>
  );
}
