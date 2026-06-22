import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PrivacyContent } from "@/components/PrivacyContent";
import { getSiteUrl } from "@/lib/seo";

const PAGE_TITLE = "Privacy Policy | DSALink";
const PAGE_DESCRIPTION =
  "How DSALink handles your data: what we collect, how we use it, analytics and cookies, email, retention, and your choices under Singapore's PDPA.";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    alternates: { canonical: "/privacy" },
    robots: { index: true, follow: true },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
      url: "/privacy",
      siteName: "DSALink",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

export default function PrivacyPage() {
  const base = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${base}/privacy#webpage`,
    url: `${base}/privacy`,
    name: "Privacy Policy",
    inLanguage: "en-SG",
    isPartOf: { "@id": `${base}/#website` },
    publisher: { "@id": `${base}/#organization` },
    dateModified: "2026-06-21",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        <PrivacyContent />
      </main>
      <SiteFooter />
    </>
  );
}
