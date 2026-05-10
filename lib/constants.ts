/** DSA application reference deadline per project spec (Singapore time). */
export const DSA_DEADLINE_ISO = "2026-05-31T23:59:59+08:00";

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
  dsaPortal: MOE_PRIMARY_CTA_URL,
  calendar: "https://www.moe.gov.sg/news?category=Press%20Releases",
} as const;
