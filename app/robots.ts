import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

// SEO/marketing crawlers and content scrapers. They send us zero visitors but
// each full pass costs ~534 pages x ~26 asset requests of Vercel edge quota.
// Search engines and AI assistants are deliberately NOT in this list — they
// drive traffic and AI citations.
const ZERO_VALUE_CRAWLERS = [
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
  "rogerbot",
  "BLEXBot",
  // DataForSeoBot stays allowed on purpose — our own seo-dataforseo on-page
  // audits crawl this site with it.
  "SeekportBot",
  "Barkrowler",
  "ImagesiftBot",
  "Bytespider",
  "PetalBot",
  "SerpstatBot",
  "ZoominfoBot",
  // Common Crawl. Crawls the whole site aggressively but drives ~0 direct
  // visitors. NOT the same as the citation-driving AI bots (GPTBot,
  // OAI-SearchBot, PerplexityBot, ClaudeBot) — those stay allowed.
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /ta/* and /ms/* are deliberately noindex and drew ~0 clicks over 90
        // days (ta: 3, ms: 7 — see lib/schoolPages.ts). Disallow them so
        // crawlers stop spending edge quota on ~130 pages each of low-value
        // translated content we never wanted indexed anyway.
        disallow: ["/ta/", "/ms/"],
      },
      {
        userAgent: ZERO_VALUE_CRAWLERS,
        disallow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base.replace(/^https?:\/\//, ""),
  };
}
