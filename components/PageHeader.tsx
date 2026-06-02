import type { ReactNode } from "react";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

type Crumb = { label: string; href?: string };

interface PageHeaderProps {
  /** Legacy single-crumb shorthand (auto-shown as the current page). */
  crumbLabel?: string;
  /** Full breadcrumb hierarchy (preferred). Overrides crumbLabel when set. */
  crumbs?: Crumb[];
  kicker: string;
  title: string;
  subtitle?: ReactNode;
  headingId?: string;
}

export function PageHeader({
  crumbLabel,
  crumbs,
  kicker,
  title,
  subtitle,
  headingId,
}: PageHeaderProps) {
  const effectiveCrumbs: Crumb[] =
    crumbs ?? (crumbLabel ? [{ label: crumbLabel }] : []);
  return (
    <header className="border-b border-white/[0.08] bg-intellectual">
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-7 sm:px-6 sm:pb-12 sm:pt-9">
        <PageBreadcrumb crumbs={effectiveCrumbs} />
        <div className="mb-3 h-px w-10 rounded-full bg-champagne opacity-70" />
        <div className="mb-3 text-[10px] font-bold tracking-[0.18em] text-champagne sm:text-[11px]">
          {kicker}
        </div>
        <h1
          id={headingId}
          className="mt-2 max-w-[min(100%,44rem)] text-balance font-display text-[1.875rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.5rem] sm:leading-[1.06]"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-3xl text-[0.9375rem] leading-relaxed text-white/60 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
