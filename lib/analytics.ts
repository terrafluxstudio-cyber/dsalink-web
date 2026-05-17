type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  _dsalinkQueue?: Array<[string, Record<string, string | number | boolean>]>;
};

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  if (typeof w.gtag === "function") {
    w.gtag("event", name, params ?? {});
  } else {
    // gtag not loaded yet — queue and flush once it's ready
    w._dsalinkQueue = w._dsalinkQueue || [];
    w._dsalinkQueue.push([name, params ?? {}]);
  }
}

export function flushEventQueue() {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  if (!w._dsalinkQueue?.length || typeof w.gtag !== "function") return;
  for (const [name, params] of w._dsalinkQueue) {
    w.gtag("event", name, params);
  }
  w._dsalinkQueue = [];
}
