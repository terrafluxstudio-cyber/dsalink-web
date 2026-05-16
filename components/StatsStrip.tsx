"use client";

import type { RefObject } from "react";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const STATS = [
  { end: 147,  suffix: "",     label: "Secondary schools covered"       },
  { end: 1300, suffix: "+",    label: "DSA talent areas mapped"         },
  { end: 2,    suffix: " min", label: "To get your personalised match"  },
  { end: 100,  suffix: "%",    label: "Free for all P6 families"        },
] as const;

function useCounter(end: number, active: boolean, duration = 1200) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setVal(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, end, duration]);

  return val;
}

function StatItem({
  end,
  suffix,
  label,
  active,
}: { end: number; suffix: string; label: string; active: boolean }) {
  const val = useCounter(end, active);
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <span className="font-display text-[2.25rem] font-extrabold leading-none tracking-tight text-white sm:text-[2.75rem]">
        {val.toLocaleString()}
        {suffix}
      </span>
      <span className="text-[0.8125rem] text-white/55">{label}</span>
    </div>
  );
}

export function StatsStrip() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as RefObject<HTMLElement>}
      className="border-y border-intellectual/20 bg-intellectual py-8 sm:py-10"
      aria-label="DSALink by the numbers"
    >
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:gap-6 sm:px-6">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} active={inView} />
        ))}
      </div>
    </section>
  );
}
