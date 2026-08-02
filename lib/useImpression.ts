"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Fires a GA4 event once, when the returned ref's element first scrolls into
 * view. Used to measure real impressions (funnel top) for capture banners —
 * rendering isn't the same as being seen, especially for below-the-fold blocks.
 *
 * SSR-safe (no-op on the server) and degrades gracefully where
 * IntersectionObserver is unavailable (fires immediately on mount).
 */
export function useImpression<T extends HTMLElement = HTMLElement>(
  name: string,
  location: string,
) {
  const ref = useRef<T | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || fired.current) return;

    const fire = () => {
      if (fired.current) return;
      fired.current = true;
      trackEvent(name, { location });
    };

    if (typeof IntersectionObserver === "undefined") {
      fire();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            fire();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [name, location]);

  return ref;
}
