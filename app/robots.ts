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
];

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
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
