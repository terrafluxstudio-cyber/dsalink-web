import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";
import { TALENT_SLUGS } from "@/lib/talentPages";
import { getAllPublishedSchools, getAllTranslatedSchoolSlugs, TRANSLATED_LANGS } from "@/lib/schoolPages";
import { getAllPosts } from "@/lib/blog";

// Note: changeFrequency and priority are intentionally omitted — Google has
// ignored both since 2023. lastModified is the only crawl hint that still matters,
// so it must reflect real content dates (not the build timestamp) wherever possible.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl(); // https://dsalink.sg — no trailing slash
  const now = new Date();

  const talentEntries: MetadataRoute.Sitemap = TALENT_SLUGS.map((slug) => ({
    url: `${base}/dsa-interview/${slug}`,
    lastModified: now,
  }));

  const schools = getAllPublishedSchools();
  const schoolEntries: MetadataRoute.Sitemap = schools.map((school) => ({
    url: `${base}/schools/${school.slug}`,
    lastModified: new Date(school.lastUpdated),
  }));

  // Reuse the EN school's real content date for its translated variants instead
  // of stamping the build time (which makes lastmod untrustworthy to Google).
  const schoolUpdatedBySlug = new Map(schools.map((s) => [s.slug, s.lastUpdated]));
  const translatedSchoolEntries: MetadataRoute.Sitemap = TRANSLATED_LANGS.flatMap((lang) =>
    getAllTranslatedSchoolSlugs(lang).map((slug) => ({
      url: `${base}/${lang}/schools/${slug}`,
      lastModified: new Date(schoolUpdatedBySlug.get(slug) ?? "2026-06-06"),
    })),
  );

  // Individual blog posts — previously missing entirely, so Google could only
  // discover them by crawling /blog. Use each post's real publish date.
  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  // Canonical core pages only. Redirecting aliases (/dsa, /scores) are excluded.
  const corePaths = [
    "",
    "/dsa-guide",
    "/dsa-finder",
    "/what-is-dsa",
    "/psle-cop",
    "/faq",
    "/dsa-statistics",
    "/dsa-interview",
    "/dsa-interview/talents",
    "/dsa-interview/under-recruited-paths",
    "/schools",
    "/open-houses",
    "/dsa-experience",
    "/open-house-guide",
    "/dsa-coaches",
    "/apply",
    "/timeline",
    "/blog",
    "/open-house-takeaways",
    "/dsa-results",
  ];
  const coreEntries: MetadataRoute.Sitemap = corePaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
  }));

  return [
    ...coreEntries,
    ...talentEntries,
    ...schoolEntries,
    ...translatedSchoolEntries,
    ...blogEntries,
  ];
}
