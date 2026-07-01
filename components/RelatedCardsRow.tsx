import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type RelatedCardItem = {
  icon: LucideIcon;
  /** Locale-resolved short title */
  title: string;
  /** Locale-resolved 1-sentence description */
  body: string;
  /** Internal route (preferred) or external URL */
  href: string;
};

/**
 * Cross-cluster related-reference row.
 * Sits at the bottom of cluster pages, ABOVE PillarBackLink.
 * Caller passes locale-resolved strings.
 *
 * Visual: kicker overline + heading + 2-3 cards in responsive grid.
 */
export function RelatedCardsRow({
  kicker,
  heading,
  items,
}: {
  kicker: string;
  heading: string;
  items: RelatedCardItem[];
}) {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
            {kicker}
          </p>
          <h2
            style={{ textTransform: "none" }}
            className="font-display text-xl font-bold text-intellectual sm:text-2xl"
          >
            {heading}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-3 rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-intellectual/30 hover:shadow-card sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-intellectual/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-intellectual"
                    aria-hidden
                  />
                </div>
                <div>
                  <p
                    style={{ textTransform: "none" }}
                    className="font-display text-[15px] font-bold text-intellectual sm:text-base"
                  >
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-intellectual-muted sm:text-[13px]">
                    {item.body}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
