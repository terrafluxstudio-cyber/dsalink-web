import type { ReactNode } from "react";

/**
 * Chapter/section header used at the top of a long-form section.
 * Renders three layered pieces: kicker overline, H2 title, and an optional
 * intro paragraph. Caller passes locale-resolved strings — the component is
 * locale-agnostic.
 *
 * Layout:
 *   [Chapter 1]
 *   What DSA actually is — and what it isn't
 *   Direct School Admission to Secondary (DSA-Sec) is MOE's ...
 */
export function SectionHeader({
  kicker,
  title,
  intro,
  className = "",
}: {
  kicker?: string;
  title: string;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <header className={className}>
      {kicker ? (
        <p className="text-[11px] font-semibold tracking-[0.18em] text-champagne-dark normal-case">
          {kicker}
        </p>
      ) : null}
      <h2
        style={{ textTransform: "none" }}
        className={`font-display text-2xl font-bold text-intellectual sm:text-3xl ${kicker ? "mt-2" : ""}`}
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-intellectual-muted sm:text-base">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
