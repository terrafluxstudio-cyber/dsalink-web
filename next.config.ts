import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/** Keeps file tracing on this app when another lockfile exists higher in the tree (see Next.js warning). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
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
    ];
  },
};

export default nextConfig;
