import { PageBreadcrumb } from "@/components/PageBreadcrumb";

interface PageHeaderProps {
  crumbLabel: string;
  kicker: string;
  title: string;
  subtitle?: string;
  headingId?: string;
}

export function PageHeader({
  crumbLabel,
  kicker,
  title,
  subtitle,
  headingId,
}: PageHeaderProps) {
  return (
    <header className="border-b border-intellectual/[0.06] bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
        <PageBreadcrumb crumbs={[{ label: crumbLabel }]} />
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-champagne-dark sm:text-xs">
          {kicker}
        </p>
        <h1
          id={headingId}
          className="mt-3 max-w-[min(100%,44rem)] text-balance font-display text-[1.7rem] font-black leading-[1.12] tracking-tight sm:text-4xl sm:leading-[1.1] lg:text-[2.75rem] lg:leading-tight"
        >
          <span className="bg-gradient-to-b from-slate-900 via-slate-800 to-blue-800 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-intellectual-muted sm:mt-6 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
