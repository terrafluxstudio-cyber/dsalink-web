import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

/** Shared breadcrumb bar. Last crumb (no href) is the current page. */
export function PageBreadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-5 flex items-center gap-1.5 text-xs text-intellectual-muted/65"
    >
      <Link
        href="/"
        className="flex items-center gap-1 rounded-sm transition hover:text-intellectual"
      >
        <Home className="h-3.5 w-3.5" aria-hidden />
        <span>Home</span>
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3 opacity-40" aria-hidden />
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="rounded-sm transition hover:text-intellectual"
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="font-semibold text-intellectual">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
