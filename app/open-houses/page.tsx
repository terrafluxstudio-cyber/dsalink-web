import type { Metadata } from "next";
import { OpenHousesDirectory } from "@/components/OpenHousesDirectory";
import { OpenHouseTracker } from "@/components/OpenHouseTracker";
import { PillarBackLink } from "@/components/PillarBackLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildOpenHousesStructuredData } from "@/lib/seo";

const OPEN_HOUSES_TITLE =
  "May 2026 Open House Calendar | 147 Singapore Secondary Schools | DSALink";
const OPEN_HOUSES_DESCRIPTION =
  "Filter MOE secondary schools by zone and programme (IP, SAP, O-Level). Compare on-site vs online sessions, read address and timing notes, and jump straight to each school’s official DSA or admissions page.";

const openHousesOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — Singapore secondary school open houses and DSA directory",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: OPEN_HOUSES_TITLE },
    description: OPEN_HOUSES_DESCRIPTION,
    keywords: [
      "Singapore secondary school open house May 2026",
      "MOE open house calendar",
      "DSA school directory IP SAP",
      "secondary school Singapore by region",
      "新加坡 中学 开放日 2026",
    ],
    alternates: {
      canonical: "/open-houses",
    },
    openGraph: {
      title: OPEN_HOUSES_TITLE,
      description: OPEN_HOUSES_DESCRIPTION,
      type: "website",
      url: "/open-houses",
      siteName: "DSALink",
      images: [openHousesOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: OPEN_HOUSES_TITLE,
      description: OPEN_HOUSES_DESCRIPTION,
      images: [openHousesOgImage.url],
    },
  };
}

export default function OpenHousesPage() {
  const openHousesJsonLd = buildOpenHousesStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(openHousesJsonLd),
        }}
      />
      <OpenHouseTracker />
      <SiteHeader />
      <main className="bg-surface">
        <OpenHousesDirectory />
      </main>
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
