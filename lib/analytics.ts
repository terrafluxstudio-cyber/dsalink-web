export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof analyticsWindow.gtag !== "function") return;
  analyticsWindow.gtag("event", name, params ?? {});
}
