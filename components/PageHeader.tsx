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
    <header className="border-b border-intellectual/10 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <PageBreadcrumb crumbs={[{ label: crumbLabel }]} />
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-champagne-dark sm:text-xs">
          {kicker}
        </p>
        <h1
          id={headingId}
          className="mt-3 font-display font-bold leading-tight tracking-tight text-intellectual"
          style={{ fontSize: "var(--page-title-size)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-intellectual-muted sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
