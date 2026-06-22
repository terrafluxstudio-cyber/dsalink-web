import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutContent } from "@/components/AboutContent";
import { getSiteUrl } from "@/lib/seo";

const PAGE_TITLE = "About DSALink — Who We Are & How We Compile DSA Data | DSALink";
const PAGE_DESCRIPTION =
  "DSALink is a free, independent resource for Singapore Primary 6 parents navigating Direct School Admission (DSA-Sec). Built by Terraflux Studio. Not affiliated with MOE. How we compile our data and keep it accurate.";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    alternates: { canonical: "/about" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
      url: "/about",
      siteName: "DSALink",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  };
}

export default function AboutPage() {
  const base = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${base}/about#aboutpage`,
    url: `${base}/about`,
    name: "About DSALink",
    inLanguage: "en-SG",
    isPartOf: { "@id": `${base}/#website` },
    about: { "@id": `${base}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        <AboutContent />
      </main>
      <SiteFooter />
    </>
  );
}
