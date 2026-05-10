import type { MetadataRoute } from "next";

const SITEMAP_URL = "https://dsalink.sg/sitemap.xml";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: SITEMAP_URL,
    host: "dsalink.sg",
  };
}
