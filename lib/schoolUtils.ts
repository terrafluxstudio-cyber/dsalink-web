/**
 * Client-safe school utility functions (no fs/server imports).
 * Used by both server components (via schoolPages.ts) and client components.
 */

/**
 * Slugify a school name for guide-slug lookup.
 * "Raffles Girls' School (Secondary)" → "raffles-girls-school-secondary"
 */
export function schoolNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[''`]/g, "")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Given a school name/id and a Set of published slugs, returns the
 * matching guide slug. Tries base slug then base + "-secondary".
 */
export function resolveGuideSlug(
  nameOrId: string,
  publishedSet: Set<string>
): string | null {
  const base = schoolNameToSlug(nameOrId);
  if (publishedSet.has(base)) return base;
  if (publishedSet.has(base + "-secondary")) return base + "-secondary";
  return null;
}
