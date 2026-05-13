import type { Metadata } from "next";
import { ConsultationBanner } from "@/components/ConsultationBanner";
import { OpenHousePreview, ScoresEntryCard, ResourceCards } from "@/components/HomeDynamic";
import { HeroSection } from "@/components/HeroSection";
import { SeoTextBlock } from "@/components/SeoTextBlock";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildHomeStructuredData } from "@/lib/seo";

const HOME_PAGE_TITLE =
  "DSALink | DSA 2026 Hub — PSLE COP Tools & Secondary Open House Finder";
const HOME_PAGE_DESCRIPTION =
  "Plan Secondary 1 and DSA from one Singapore hub: live application countdown, curated MOE entry points, a five-year PSLE COP explorer, and a May 2026 open-house directory with bilingual school names.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — Singapore PSLE COP, open houses, and DSA resources",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: HOME_PAGE_TITLE },
    description: HOME_PAGE_DESCRIPTION,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: HOME_PAGE_TITLE,
      description: HOME_PAGE_DESCRIPTION,
      url: "/",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: HOME_PAGE_TITLE,
      description: HOME_PAGE_DESCRIPTION,
      images: [ogImage.url],
    },
  };
}

export default function HomePage() {
  const homeJsonLd = buildHomeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd),
        }}
      />
      <SiteHeader />
      <main>
        <HeroSection>
          <OpenHousePreview />
          <ScoresEntryCard />
        </HeroSection>
        <ResourceCards />
        <ConsultationBanner />
        <SeoTextBlock />
      </main>
      <SiteFooter />
    </>
  );
}
