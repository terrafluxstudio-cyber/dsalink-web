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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
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
      // Renamed school slugs — Google still holds the old URLs and reports them
      // as 404 (confirmed via GSC export 2026-07-04). 301 to consolidate the SEO
      // equity of these named schools onto their current slugs.
      { source: "/schools/saint-andrews-secondary-school", destination: "/schools/st-andrews-school-secondary", permanent: true },
      { source: "/schools/national-junior-college", destination: "/schools/national-junior-college-secondary", permanent: true },
      { source: "/schools/saint-josephs-institution-secondary", destination: "/schools/st-josephs-institution-secondary", permanent: true },
      { source: "/schools/singapore-chinese-girls-school-secondary", destination: "/schools/singapore-chinese-girls-school", permanent: true },
      { source: "/schools/anglo-chinese-school-barker-road-secondary", destination: "/schools/anglo-chinese-school-barker-road", permanent: true },
      { source: "/schools/nan-hua-high-school-secondary", destination: "/schools/nan-hua-high-school", permanent: true },
      { source: "/schools/chung-cheng-high-school-main-secondary", destination: "/schools/chung-cheng-high-school-main", permanent: true },
      // Language-prefix roots have no landing page (only /[lang]/schools/... exists),
      // so /zh /ta /ms 404. Not currently in GSC's 404 list (nothing links to them),
      // but 301 to the homepage is cleaner than a dead end if anyone hits them.
      // Exact-match sources — /zh/schools/... etc. are unaffected.
      { source: "/zh", destination: "/", permanent: true },
      { source: "/ms", destination: "/", permanent: true },
      { source: "/ta", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
