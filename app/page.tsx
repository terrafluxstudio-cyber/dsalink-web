import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { HomeBlogEntry } from "@/components/HomeBlogEntry";
import { HomeFeaturedEvergreen } from "@/components/HomeFeaturedEvergreen";
import { HomeParentStoriesGrid } from "@/components/HomeParentStoriesGrid";
import { HomePillarEntry } from "@/components/HomePillarEntry";
import { HomeMainSlotCard } from "@/components/HomeMainSlotCard";
import { HomeNavCardsRow } from "@/components/HomeNavCardsRow";
import { HomepageSubscribeBanner } from "@/components/HomepageSubscribeBanner";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StatsStrip } from "@/components/StatsStrip";
import { buildHomeStructuredData } from "@/lib/seo";

// Static EN metadata so the homepage stays ISR-cacheable (no cookies() =
// no forced dynamic render). The in-page UI still switches language via
// LanguageContext; only the OG/title metadata is fixed to EN.
const HOME_META_TITLE =
  "DSALink | DSA 2026 Strategy — Singapore Secondary School Admission Guide";
const HOME_META_DESCRIPTION =
  "Master DSA 2026 for Singapore secondary school admission. AL 20–25 middle-stream strategy, interview prep, 147-school directory with PSLE COP, and a 2026 open house calendar.";
const HOME_OG_IMAGE_ALT =
  "DSALink — DSA 2026 Singapore strategy guide, PSLE COP, and open houses";

// Re-validate the cached homepage hourly.
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const ogImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: HOME_OG_IMAGE_ALT,
  } as const;

  return {
    title: { absolute: HOME_META_TITLE },
    description: HOME_META_DESCRIPTION,
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
      title: HOME_META_TITLE,
      description: HOME_META_DESCRIPTION,
      url: "/",
      siteName: "DSALink",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: HOME_META_TITLE,
      description: HOME_META_DESCRIPTION,
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
        {/* L1 · Hero — C2 reference framing */}
        <HeroSection />

        {/* L1.5 · Stats Strip — quantified trust anchor (moved from footer) */}
        <StatsStrip />

        {/* L2 · Pillar entry — connects with Stats into a dark header block */}
        <HomePillarEntry />

        {/* L3 · Parent Stories — emotional mid-page centerpiece (6 composite cases) */}
        <HomeParentStoriesGrid />

        {/* L4 · Current-period main slot — date-driven big card */}
        <HomeMainSlotCard />

        {/* L5 · 4 quick-link side cards — the rest of the 5-item nav */}
        <HomeNavCardsRow />

        {/* L6 · Featured Evergreen — Takeaways · PSLE COP (data anchors) */}
        <HomeFeaturedEvergreen />

        {/* L7 · Blog — latest 3 time-sensitive posts (EN only) */}
        <HomeBlogEntry />

        {/* L8 · Email subscribe — dark closing band, 8–11 month return mechanism */}
        <HomepageSubscribeBanner />
      </main>
      <SiteFooter />
    </>
  );
}
