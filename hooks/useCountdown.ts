"use client";

import { useEffect, useMemo, useState } from "react";
import { DSA_DEADLINE_ISO } from "@/lib/constants";

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

function getParts(target: Date, now: Date): CountdownParts {
  const totalMs = target.getTime() - now.getTime();
  if (totalMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
  }
  const seconds = Math.floor(totalMs / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return { days, hours, minutes, seconds: secs, totalMs };
}

export function useCountdown(deadlineIso: string = DSA_DEADLINE_ISO) {
  // Same as: new Date("2026-05-31T23:59:59+08:00") — SGT (UTC+8), one fixed instant worldwide.
  const target = useMemo(() => new Date(deadlineIso), [deadlineIso]);
  const [parts, setParts] = useState<CountdownParts>(() =>
    getParts(target, new Date()),
  );

  useEffect(() => {
    const tick = () => setParts(getParts(target, new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return parts;
}
