/**
 * School pages — MDX reader.
 * Content lives in content/schools/[slug].mdx (published) or
 * content/schools/_drafts/[slug].mdx (cron drafts, not served).
 *
 * Compiled: 2026-06-06.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ─── Types ──────────────────────────────────────────────────────────────────

export type SchoolPageMeta = {
  title: string;
  description: string;
  schoolFullName: string;
  schoolTypes: string[];       // e.g. ["Independent", "Girls"]
  academicTracks: string[];    // e.g. ["Integrated Programme (Raffles Programme)"]
  psleCop: string;             // e.g. "AL 4–6 (IP)"
  address: string;
  nearestMrt: string;
  officialWebsite: string;
  moeUrl: string;
  dsaAdmissionsUrl: string;
  dsaTalentSlugs: string[];    // talent page slugs for internal links
  relatedSchoolSlugs: string[];
  status: "published" | "draft";
  needsFactCheck?: boolean;
  lastUpdated: string;
  sources: string[];
};

export type SchoolPage = SchoolPageMeta & {
  slug: string;
  content: string;
};

// ─── Paths ──────────────────────────────────────────────────────────────────

const SCHOOLS_DIR = path.join(process.cwd(), "content", "schools");

// ─── Multilingual support ────────────────────────────────────────────────────

/** Languages that have translated content (EN lives at root, not here). */
export const TRANSLATED_LANGS = ["zh", "ms", "ta"] as const;
export type TranslatedLang = (typeof TRANSLATED_LANGS)[number];

function translatedDir(lang: TranslatedLang) {
  return path.join(SCHOOLS_DIR, lang);
}

/**
 * Load a translated school page for a given language.
 * Falls back to null if the file doesn't exist yet.
 */
export function getTranslatedSchool(
  slug: string,
  lang: TranslatedLang,
): SchoolPage | null {
  try {
    const filePath = path.join(translatedDir(lang), `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return { ...(data as SchoolPageMeta), slug, content };
  } catch {
    return null;
  }
}

/** All slugs that have a translation for a given language (for sitemap/SSG). */
export function getAllTranslatedSchoolSlugs(lang: TranslatedLang): string[] {
  const dir = translatedDir(lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_") && !f.startsWith("."))
    .map((f) => f.replace(".mdx", ""));
}

/**
 * Which translated languages have a file for this slug?
 * Used to build hreflang alternates and lang-switcher UI.
 */
export function getAvailableTranslations(slug: string): TranslatedLang[] {
  return TRANSLATED_LANGS.filter((lang) =>
    fs.existsSync(path.join(translatedDir(lang), `${slug}.mdx`)),
  );
}

// ─── Readers ────────────────────────────────────────────────────────────────

export function getSchoolBySlug(slug: string): SchoolPage | null {
  try {
    const filePath = path.join(SCHOOLS_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return { ...(data as SchoolPageMeta), slug, content };
  } catch {
    return null;
  }
}

export function getAllPublishedSchools(): SchoolPage[] {
  if (!fs.existsSync(SCHOOLS_DIR)) return [];
  return fs
    .readdirSync(SCHOOLS_DIR)
    .filter(
      (f) =>
        f.endsWith(".mdx") &&
        !f.startsWith("_") &&
        !f.startsWith(".")
    )
    .map((f) => getSchoolBySlug(f.replace(".mdx", "")))
    .filter(
      (p): p is SchoolPage => p !== null && p.status === "published"
    );
}

/** Returns slugs of all published school guide pages. */
export function getAllPublishedSchoolSlugs(): string[] {
  return getAllPublishedSchools().map((s) => s.slug);
}

// Re-export client-safe utils for convenience
export { schoolNameToSlug, resolveGuideSlug } from "@/lib/schoolUtils";
