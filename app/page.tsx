import type { Metadata } from "next";
import { cookies } from "next/headers";
import { DSALINK_LOCALE_KEY } from "@/lib/constants";
import { getGuideLocaleStrings, isLocale, type Locale } from "@/lib/i18n";
import { ScoresEntryCard } from "@/components/HomeDynamic";
import { TakeawaysEntryCard } from "@/components/TakeawaysEntryCard";
import { FeaturedGuidesSection } from "@/components/FeaturedGuidesSection";
import { HeroSection } from "@/components/HeroSection";
import { HomeMainSlotCard } from "@/components/HomeMainSlotCard";
import { HomeNavCardsRow } from "@/components/HomeNavCardsRow";
import { HomepageSubscribeBanner } from "@/components/HomepageSubscribeBanner";
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
        {/* L1 · Hero — C2 reference framing */}
        <HeroSection />

        {/* L2 · Current-period main slot — date-driven big card */}
        <HomeMainSlotCard />

        {/* L3 · 4 quick-link side cards — the rest of the 5-item nav */}
        <HomeNavCardsRow />

        {/* L4 · Featured Evergreen — Takeaways · PSLE COP · curated guides */}
        <section className="bg-surface py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-6 sm:mb-8">
              <p className="mb-2 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
                Featured · Evergreen
              </p>
              <h2 className="font-display text-2xl font-semibold text-intellectual sm:text-3xl">
                The reference assets parents come back to.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <TakeawaysEntryCard />
              <ScoresEntryCard />
            </div>
          </div>
        </section>
        <FeaturedGuidesSection />

        {/* L5 · Email subscribe — the 8–11 month return mechanism */}
        <HomepageSubscribeBanner />

        {/* L6 · Stats Strip — quantified depth, placed at footer */}
        <StatsStrip />
      </main>
      <SiteFooter />
    </>
  );
}
