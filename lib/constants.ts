/**
 * DSA reference deadline (project spec). Must include an explicit offset so the
 * instant is unambiguous everywhere (build servers, edge, browsers).
 * `+08:00` = Singapore Standard Time (SGT), UTC+8 — not local server timezone.
 */
export const DSA_DEADLINE_ISO = "2026-06-02T16:30:00+08:00";

/** Cookie + localStorage key for UI language (see `LanguageProvider`). */
export const DSALINK_LOCALE_KEY = "dsalink-locale";

/**
 * Primary hero / MOE CTA URL — official MOE site.
 * Override at build/runtime with `NEXT_PUBLIC_MOE_PRIMARY_CTA_URL`.
 */
export const MOE_PRIMARY_CTA_URL =
  process.env.NEXT_PUBLIC_MOE_PRIMARY_CTA_URL ??
  "https://www.moe.gov.sg/secondary/dsa";

export const EXTERNAL = {
  moeDsa: MOE_PRIMARY_CTA_URL,
  schoolFinder: "https://www.moe.gov.sg/schoolfinder",
  dsaPortal: "https://go.gov.sg/dsa-sec-portal",
} as const;
