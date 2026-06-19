import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { DSALINK_LOCALE_KEY } from "@/lib/constants";
import { isLocale, type Locale } from "@/lib/i18n";
import { InterviewTalentPageBody } from "@/components/InterviewTalentPageBody";
import { ADJACENT_TALENTS, getTalentPage, TALENT_SLUGS } from "@/lib/talentPages";
import { getAllPublishedSchoolSlugs } from "@/lib/schoolPages";
import { buildTalentPageStructuredData } from "@/lib/seo";

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

  // Adjacency computed server-side → keeps full TALENT_DATA out of the client bundle.
  const adjacentPages = ADJACENT_TALENTS[talent.slug]
    .map((s) => getTalentPage(s))
    .filter((p): p is NonNullable<typeof p> => p !== null)
    .map((p) => ({ slug: p.slug, navLabel: p.navLabel, hook: p.hook }));

  // FAQ schema from the talent-specific questions (unique per page; not the shared deck).
  const faqs = (talent.rich?.interviewQuestions ?? []).map((q) => ({
    q: q.question.en,
    a: q.template?.en ? `${q.approach.en} Example answer: "${q.template.en}"` : q.approach.en,
  }));
  const jsonLd = buildTalentPageStructuredData({
    slug,
    label: talent.navLabel.en,
    description: talent.metaDescription.en,
    faqs,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InterviewTalentPageBody
        talent={talent}
        publishedSlugs={publishedSlugs}
        adjacentPages={adjacentPages}
      />
    </>
  );
}
