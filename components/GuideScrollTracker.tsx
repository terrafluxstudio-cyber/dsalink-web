"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function GuideScrollTracker() {
  const fired = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (fired.current) return;

      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (scrolled / total >= 0.5) {
        trackEvent("guide_scrolled_50");
        fired.current = true;
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
