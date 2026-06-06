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
