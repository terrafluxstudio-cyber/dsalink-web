import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/** Keeps file tracing on this app when another lockfile exists higher in the tree (see Next.js warning). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      // /dsa is the content source but /dsa-finder is the canonical URL.
      // 301 so Google consolidates signals onto /dsa-finder.
      {
        source: "/dsa",
        destination: "/dsa-finder",
        permanent: true,
      },
      // /scores is the legacy slug; /psle-cop is the canonical nav URL.
      {
        source: "/scores",
        destination: "/psle-cop",
        permanent: true,
      },
      // /recommend is a legacy duplicate of /dsa-finder (same SchoolFinderWizard).
      // 301 to consolidate SEO weight onto the canonical /dsa-finder URL.
      {
        source: "/recommend",
        destination: "/dsa-finder",
        permanent: true,
      },
      // IA v3 (2026-06-02): /dsa-guide reclaimed as the Pillar page.
      // /after-apply retired → flow into Interview & Trial at /dsa-interview.
      {
        source: "/after-apply",
        destination: "/dsa-interview",
        permanent: true,
      },
      // IA v3 (2026-06-02): /offer renamed to /dsa-results for SEO —
      // "DSA results" is the actual search term parents use. The page now
      // covers all 4 outcomes (Confirmed Offer, Waitlist, Counter-Offer, Unsuccessful).
      {
        source: "/offer",
        destination: "/dsa-results",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
