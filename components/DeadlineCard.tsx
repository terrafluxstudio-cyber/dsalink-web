"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const DEADLINE = new Date("2026-06-02T08:30:00Z"); // 4:30pm SGT = 08:30 UTC

function getDaysLeft(): number {
  const now = new Date();
  const diff = DEADLINE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function DeadlineCard() {
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
      className="group flex items-center gap-3 rounded-2xl border border-[#e3ded5] bg-white px-4 py-3.5 shadow-card transition hover:border-[#d4cec4] hover:shadow-card-hover"
    >
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${urgent ? "bg-red-50 text-red-500" : "bg-amber-50 text-amber-500"}`}>
        <Clock className="h-4 w-4" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`text-[10px] font-bold tracking-wide normal-case ${urgent ? "text-red-500" : "text-amber-600"}`}>
          {urgent ? "CLOSING SOON" : "KEY DEADLINE"}
        </p>
        <p className="truncate text-sm font-semibold text-slate-800">
          DSA closes 2 Jun 2026, 4:30pm SGT
        </p>
        {days !== null && (
          <p className="text-xs text-slate-400">
            {days === 0 ? "Closes today" : `${days} day${days === 1 ? "" : "s"} left`}
          </p>
        )}
      </div>
      <span className="shrink-0 text-xs text-slate-400 transition group-hover:translate-x-0.5">→</span>
    </a>
  );
}
