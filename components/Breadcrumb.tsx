import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  /** Locale-resolved label */
  label: string;
  /** Omit href for the current page (last item) */
  href?: string;
};

/**
 * Top-of-page path navigation.
 * Sits below SiteHeader, above the page H1.
 * Caller passes locale-resolved labels — component is locale-agnostic.
 *
 * Example:
 *   <Breadcrumb items={[
 *     { label: "DSA Guide", href: "/dsa-guide" },
 *     { label: "Timeline" },  // current page, no href
 *   ]} />
 */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-intellectual/[0.06] bg-surface-warm"
    >
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-4 py-3 text-[12.5px] text-intellectual-muted sm:px-6">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 transition hover:text-intellectual"
          >
            <Home className="h-3.5 w-3.5" aria-hidden />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            <ChevronRight
              className="h-3 w-3 shrink-0 text-intellectual/40"
              aria-hidden
            />
            {item.href ? (
              <Link
                href={item.href}
                className="transition hover:text-intellectual"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="font-semibold text-intellectual"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
