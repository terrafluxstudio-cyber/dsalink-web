import type { Metadata } from "next";
import homeEn from "@/locales/en.json";
import { OpenHousePreview, ScoresEntryCard, ResourceCards } from "@/components/HomeDynamic";
import { DsaStrategySection } from "@/components/DsaStrategySection";
import { HeroSection } from "@/components/HeroSection";
import { OpenHouseFieldGuide } from "@/components/OpenHouseFieldGuide";
import { SeoTextBlock } from "@/components/SeoTextBlock";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildHomeStructuredData } from "@/lib/seo";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA 2026 Singapore strategy guide, PSLE COP, and open houses",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: homeEn.homeMetaTitle },
    description: homeEn.homeMetaDescription,
    keywords: [
      "DSA Singapore 2026",
      "DSA interview tips Singapore",
      "AL 20 25 school selection Singapore",
      "middle-stream DSA strategy",
      "DSA secondary school Singapore",
      "PSLE COP 2025 Singapore",
      "secondary school open house May 2026",
      "DSA talent areas Singapore",
      "P6 secondary school admission Singapore",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: homeEn.homeMetaTitle,
      description: homeEn.homeMetaDescription,
      url: "/",
      siteName: "DSALink",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: homeEn.homeMetaTitle,
      description: homeEn.homeMetaDescription,
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
        <DsaStrategySection />
        <OpenHouseFieldGuide />
        <SeoTextBlock />
        <ResourceCards />
      </main>
      <SiteFooter />
    </>
  );
}
