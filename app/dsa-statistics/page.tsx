import type { Metadata } from "next";
import { computeDsaStats } from "@/lib/dsaStats";
import { getDsaCategoryLabel, getDsaTalentLabel } from "@/constants/dsa_translations";
import { buildDsaStatsStructuredData } from "@/lib/seo";
import { DsaStatsPageBody } from "@/components/DsaStatsPageBody";

const LOCALES = ["en", "zh", "ms", "ta"] as const;
type LocaleStr = { en: string; zh: string; ms: string; ta: string };

/** Display date the master list was last compiled (data/dsa_master_list.json). */
const COMPILED_DISPLAY = "2026-05";
const COMPILED_ISO = "2026-05-12";

export function generateMetadata(): Metadata {
  const s = computeDsaStats();
  const title = `DSA 2026 Statistics: ${s.schools} Singapore Schools, ${s.offerings.toLocaleString("en-SG")} Talent-Area Offerings | DSALink`;
  const description = `How DSA-Sec works across Singapore in numbers: ${s.schools} secondary schools offer Direct School Admission across ${s.distinctTalents} talent areas and ${s.offerings.toLocaleString("en-SG")} total offerings. Breakdown by category and the most-offered talents — compiled from official MOE SchoolFinder listings.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/dsa-statistics" },
    openGraph: {
      title,
      description,
      type: "website",
      url: "/dsa-statistics",
      siteName: "DSALink",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "DSALink — DSA statistics" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  };
}

export default function DsaStatisticsPage() {
  const raw = computeDsaStats(20);

  const label4 = (fn: (k: string, l: (typeof LOCALES)[number]) => string, key: string): LocaleStr =>
    ({
      en: fn(key, "en"),
      zh: fn(key, "zh"),
      ms: fn(key, "ms"),
      ta: fn(key, "ta"),
    });

  const stats = {
    schools: raw.schools,
    offerings: raw.offerings,
    distinctTalents: raw.distinctTalents,
    categoriesCount: raw.categories.length,
    categories: raw.categories.map((c) => ({
      label: label4((k, l) => getDsaCategoryLabel(k as typeof c.key, l), c.key),
      schools: c.schools,
      offerings: c.offerings,
    })),
    topTalents: raw.topTalents.map((t) => ({
      label: label4(getDsaTalentLabel, t.area),
      schools: t.schools,
    })),
    compiledOn: COMPILED_DISPLAY,
  };

  const jsonLd = buildDsaStatsStructuredData({
    schools: raw.schools,
    offerings: raw.offerings,
    distinctTalents: raw.distinctTalents,
    compiledOn: COMPILED_ISO,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DsaStatsPageBody stats={stats} />
    </>
  );
}
