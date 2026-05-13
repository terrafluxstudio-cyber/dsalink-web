import type { Metadata } from "next";
import homeEn from "@/locales/en.json";
import { OpenHousePreview, ScoresEntryCard, ResourceCards } from "@/components/HomeDynamic";
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
  alt: "DSALink — Singapore PSLE COP, open houses, and DSA resources",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: homeEn.homeMetaTitle },
    description: homeEn.homeMetaDescription,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: homeEn.homeMetaTitle,
      description: homeEn.homeMetaDescription,
      url: "/",
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
        <ResourceCards />
        <OpenHouseFieldGuide />
        <SeoTextBlock />
      </main>
      <SiteFooter />
    </>
  );
}
