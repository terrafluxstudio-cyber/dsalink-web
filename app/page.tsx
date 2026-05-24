import type { Metadata } from "next";
import { cookies } from "next/headers";
import { DSALINK_LOCALE_KEY } from "@/lib/constants";
import { getGuideLocaleStrings, isLocale, type Locale } from "@/lib/i18n";
import { OpenHousePreview, ScoresEntryCard, ResourceCards } from "@/components/HomeDynamic";
import { TakeawaysEntryCard } from "@/components/TakeawaysEntryCard";
import { DeadlineCard } from "@/components/DeadlineCard";
import { DsaExplainerSection } from "@/components/DsaExplainerSection";
import { DsaStrategySection } from "@/components/DsaStrategySection";
import { FeaturedGuidesSection } from "@/components/FeaturedGuidesSection";
import { HeroSection } from "@/components/HeroSection";
import { HomepageSubscribeBanner } from "@/components/HomepageSubscribeBanner";
import { DsaExperienceCallout } from "@/components/DsaExperienceCallout";
import { ParentJourneyStrip } from "@/components/ParentJourneyStrip";
import { SeoTextBlock } from "@/components/SeoTextBlock";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StatsStrip } from "@/components/StatsStrip";
import { buildHomeStructuredData } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const jar = await cookies();
  const raw = jar.get(DSALINK_LOCALE_KEY)?.value;
  const locale: Locale = raw && isLocale(raw) ? raw : "en";
  const home = getGuideLocaleStrings(locale);

  const ogImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: home.homeOgImageAlt,
  } as const;

  return {
    title: { absolute: home.homeMetaTitle },
    description: home.homeMetaDescription,
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
      title: home.homeMetaTitle,
      description: home.homeMetaDescription,
      url: "/",
      siteName: "DSALink",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: home.homeMetaTitle,
      description: home.homeMetaDescription,
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
          <DeadlineCard />
          <OpenHousePreview />
          <TakeawaysEntryCard />
          <ScoresEntryCard />
        </HeroSection>
        <ParentJourneyStrip />
        <FeaturedGuidesSection />
        <StatsStrip />
        <DsaExplainerSection />
        <DsaStrategySection />
        <DsaExperienceCallout />
        <SeoTextBlock />
        <HomepageSubscribeBanner />
        <ResourceCards />
      </main>
      <SiteFooter />
    </>
  );
}
