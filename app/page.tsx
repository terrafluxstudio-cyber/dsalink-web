import type { Metadata } from "next";
import { cookies } from "next/headers";
import { DSALINK_LOCALE_KEY } from "@/lib/constants";
import { getGuideLocaleStrings, isLocale, type Locale } from "@/lib/i18n";
import { ScoresEntryCard } from "@/components/HomeDynamic";
import { TakeawaysEntryCard } from "@/components/TakeawaysEntryCard";
import { HeroSection } from "@/components/HeroSection";
import { HomeBlogEntry } from "@/components/HomeBlogEntry";
import { HomeParentStoriesGrid } from "@/components/HomeParentStoriesGrid";
import { HomePillarEntry } from "@/components/HomePillarEntry";
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
        <section className="border-y border-champagne/20 bg-champagne-subtle py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-8 max-w-2xl sm:mb-10">
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
                <span className="h-px w-6 bg-champagne-dark" aria-hidden />
                Reference · Evergreen
              </p>
              <h2
                style={{ textTransform: "none" }}
                className="font-display text-[1.875rem] font-extrabold leading-[1.1] tracking-tight text-intellectual sm:text-[2.25rem]"
              >
                Two data sets parents bookmark.
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-intellectual-muted">
                Open-house takeaways (what each campus actually felt like) and 3-year PSLE COP history — the two anchors families return to from May through November.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <TakeawaysEntryCard />
              <ScoresEntryCard />
            </div>
          </div>
        </section>

        {/* L7 · Blog — latest 3 time-sensitive posts (EN only) */}
        <HomeBlogEntry />

        {/* L8 · Email subscribe — dark closing band, 8–11 month return mechanism */}
        <HomepageSubscribeBanner />
      </main>
      <SiteFooter />
    </>
  );
}
