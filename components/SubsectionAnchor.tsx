import type { LucideIcon } from "lucide-react";

/**
 * Subsection anchor used inside long-form pages (talent guides, FAQ, etc.).
 * Lighter than SectionHeader — one row: icon chip + H2.
 * Caller passes locale-resolved string.
 *
 * Layout:
 *   [icon] What trial coaches actually assess
 */
export function SubsectionAnchor({
  icon: Icon,
  title,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-intellectual/8 text-intellectual">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <h2
        style={{ textTransform: "none" }}
        className="font-display text-2xl font-semibold text-intellectual sm:text-3xl"
      >
        {title}
      </h2>
    </div>
  );
}
