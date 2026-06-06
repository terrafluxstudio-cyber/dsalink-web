import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { DSALINK_LOCALE_KEY } from "@/lib/constants";
import { isLocale, type Locale } from "@/lib/i18n";
import { InterviewTalentPageBody } from "@/components/InterviewTalentPageBody";
import { getTalentPage, TALENT_SLUGS } from "@/lib/talentPages";
import { getAllPublishedSchoolSlugs } from "@/lib/schoolPages";

type Params = Promise<{ talent: string }>;

export function generateStaticParams() {
  return TALENT_SLUGS.map((talent) => ({ talent }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { talent: slug } = await params;
  const talent = getTalentPage(slug);
  if (!talent) return {};

  const jar = await cookies();
  const raw = jar.get(DSALINK_LOCALE_KEY)?.value;
  const locale: Locale = raw && isLocale(raw) ? raw : "en";

  const label = talent.navLabel[locale];
  const title = `${label} DSA Interview Prep | DSALink Singapore`;
  const description = talent.metaDescription[locale];

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/dsa-interview/${slug}` },
    // OG image: auto-generated per slug via opengraph-image.tsx co-located here
    openGraph: {
      title,
      description,
      type: "article",
      url: `/dsa-interview/${slug}`,
      siteName: "DSALink",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function TalentInterviewPage({ params }: { params: Params }) {
  const { talent: slug } = await params;
  const talent = getTalentPage(slug);
  if (!talent) notFound();
  const publishedSlugs = getAllPublishedSchoolSlugs();
  return <InterviewTalentPageBody talent={talent} publishedSlugs={publishedSlugs} />;
}
