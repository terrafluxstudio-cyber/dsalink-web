import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl(); // https://dsalink.sg — no trailing slash
  const now = new Date();

  // Only list canonical URLs. Redirecting aliases (/dsa, /scores) are excluded.
  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/dsa-finder`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.98,
    },
    {
      url: `${base}/dsa-guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${base}/psle-cop`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.94,
    },
    {
      url: `${base}/dsa-interview`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.93,
    },
    {
      url: `${base}/schools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${base}/open-houses`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/dsa-experience`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${base}/open-house-guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.87,
    },
    {
      url: `${base}/dsa-coaches`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${base}/apply`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/open-house-takeaways`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.83,
    },
  ];
}
