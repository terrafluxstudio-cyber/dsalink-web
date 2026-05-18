import type { Metadata } from "next";
import { DsaCoachesPageBody } from "@/components/DsaCoachesPageBody";
import en from "@/locales/en.json";
import { getSiteUrl } from "@/lib/seo";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA Coaching Directory Singapore 2026",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: en.dsaCoachesMetaTitle },
    description: en.dsaCoachesMetaDesc,
    keywords: [
      "DSA coaching Singapore 2026",
      "DSA music tutor Singapore",
      "DSA sports coaching Singapore",
      "DSA visual arts portfolio class Singapore",
      "DSA interview coaching Singapore",
      "DSA drama coaching Singapore",
      "DSA preparation centre Singapore",
      "DSA individual coach Singapore",
      "SOTA preparation Singapore",
      "DSA netball football swimming coaching",
      "DSA piano violin coaching Singapore",
      "DSA ballet dance coaching Singapore",
      "DSA tech STEM coaching Singapore",
      "DSA interview preparation specialist Singapore",
    ],
    alternates: { canonical: "/dsa-coaches" },
    openGraph: {
      title: en.dsaCoachesOgTitle,
      description: en.dsaCoachesOgDesc,
      type: "website",
      url: "/dsa-coaches",
      siteName: "DSALink",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: en.dsaCoachesOgTitle,
      description: en.dsaCoachesOgDesc,
      images: [ogImage.url],
    },
  };
}

function buildCoachesStructuredData() {
  const base = getSiteUrl();
  const pageUrl = `${base}/dsa-coaches`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        name: "DSA Coaching Providers Singapore 2026",
        description:
          "A curated directory of DSA coaching providers in Singapore for music, sports, visual arts, performing arts, tech, and interview preparation.",
        url: pageUrl,
        inLanguage: "en-SG",
        publisher: { "@id": `${base}/#organization` },
        isPartOf: { "@id": `${base}/#website` },
        mainEntity: { "@id": `${pageUrl}#coach-list` },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#coach-list`,
        name: "DSA coaching providers Singapore 2026",
        numberOfItems: 35,
      },
    ],
  };
}

export default function DsaCoachesPage() {
  const structuredData = buildCoachesStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DsaCoachesPageBody />
    </>
  );
}
