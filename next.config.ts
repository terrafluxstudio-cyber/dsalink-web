import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
