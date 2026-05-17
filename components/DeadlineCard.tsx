"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DEADLINE = new Date("2026-06-02T08:30:00Z");

function getDaysLeft(): number {
  const now = new Date();
  const diff = DEADLINE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function DeadlineCard() {
  const { t } = useLanguage();
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(getDaysLeft());
  }, []);

  const urgent = days !== null && days <= 14;

  return (
    <a
      href="https://www.moe.gov.sg/secondary/dsa"
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl border bg-white px-4 py-4 shadow-card transition hover:shadow-card-hover ${
        urgent
          ? "border-red-200 hover:border-red-300"
          : "border-[#e3ded5] hover:border-[#d4cec4]"
      }`}
    >
      <div className="flex items-center gap-4">
        {/* 大号倒计时数字 */}
        <div
          className={`flex shrink-0 flex-col items-center justify-center rounded-xl px-4 py-3 text-center ${
            urgent ? "bg-red-50" : "bg-amber-50"
          }`}
        >
          <span
            className={`tabular-nums font-display text-[2rem] font-extrabold leading-none ${
              urgent ? "text-red-500" : "text-amber-500"
            }`}
          >
            {days !== null ? days : "—"}
          </span>
          <span
            className={`mt-0.5 text-[10px] font-bold tracking-wide normal-case ${
              urgent ? "text-red-400" : "text-amber-400"
            }`}
          >
            {t.deadlineDaysLeftSuffix}
          </span>
        </div>

        {/* 标签 + 日期 */}
        <div className="min-w-0 flex-1">
          <p
            className={`text-[10px] font-bold tracking-[0.14em] normal-case ${
              urgent ? "text-red-500" : "text-amber-600"
            }`}
          >
            {urgent ? t.deadlineUrgentLabel : t.deadlineLabel}
          </p>
          <p className="mt-0.5 text-sm font-semibold text-slate-800">
            {t.deadlineDate}
          </p>
          {days === 0 && (
            <p className="mt-0.5 text-xs font-semibold text-red-500">
              {t.deadlineClosesToday}
            </p>
          )}
        </div>

        <span className="shrink-0 text-sm text-slate-400 transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </a>
  );
}
