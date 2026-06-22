/**
 * DSALink annual cycle phases (Singapore time).
 *
 * Cycle anchored on the 2026 DSA-Sec window. Year boundaries are tied to
 * the calendar (Dec 1 / May 6 / Nov 30) — only the apply-close cutoff is
 * a specific moment in time (16:30 SGT on the official MOE deadline).
 *
 * Phase rules (all times in Singapore time, UTC+8):
 *   May 6  – Jun 2, 16:30   → "application"       (apply window open)
 *   Jun 2, 16:30 – Nov 30   → "interview-trial"   (post-submission → S1 posting)
 *   Dec 1 – May 5           → "schools-research"  (next-cycle research phase)
 */

export type CyclePhase = "schools-research" | "application" | "interview-trial";

/**
 * 2026 DSA-Sec apply window closes at 16:30 SGT on 2 June 2026.
 * 16:30 SGT (UTC+8) = 08:30 UTC.
 *
 * Change this constant once per cycle (after each June deadline).
 */
export const APPLY_CLOSE_UTC_MS = Date.UTC(2026, 5, 2, 8, 30);

/**
 * Compute the current cycle phase from a JS Date.
 *
 * Call from a useEffect with `new Date()` after mount — avoids SSR/CSR
 * hydration mismatch. Do not call on the server.
 */
export function getCyclePhase(now: Date): CyclePhase {
  const ms = now.getTime();
  const sg = new Date(ms + 8 * 60 * 60 * 1000);
  const month = sg.getUTCMonth() + 1;
  const day = sg.getUTCDate();

  // ── Pre-cutoff (i.e. before 2026-06-02 16:30 SGT) ───────────────────
  if (ms < APPLY_CLOSE_UTC_MS) {
    // Apply window: May 6 – Jun 2 (16:30 cutoff handled by the outer guard)
    if ((month === 5 && day >= 6) || (month === 6 && day <= 2)) {
      return "application";
    }
    // Everything else pre-cutoff is research phase
    return "schools-research";
  }

  // ── Post-cutoff (Jun 2 16:30 onwards) ───────────────────────────────
  // After 30 Nov rolls into next cycle's research phase
  if (month === 12 || (month >= 1 && month <= 4) || (month === 5 && day < 6)) {
    return "schools-research";
  }
  // May 6 onwards of the next cycle (theoretical — needs APPLY_CLOSE_UTC_MS
  // bumped before the new window opens). Fall through to application.
  if (month === 5 && day >= 6) {
    return "application";
  }
  // Jun – Nov: interview / trial / results / S1 fallback
  return "interview-trial";
}
