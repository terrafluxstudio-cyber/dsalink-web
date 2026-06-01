import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { DSALINK_LOCALE_KEY } from "@/lib/constants";
import { isLocale, type Locale } from "@/lib/i18n";
import { InterviewTalentPageBody } from "@/components/InterviewTalentPageBody";
import { getTalentPage, TALENT_SLUGS } from "@/lib/talentPages";

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

  const ogImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${label} DSA-Sec interview prep — DSALink`,
  } as const;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/dsa-interview/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/dsa-interview/${slug}`,
      siteName: "DSALink",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export default async function TalentInterviewPage({ params }: { params: Params }) {
  const { talent: slug } = await params;
  const talent = getTalentPage(slug);
  if (!talent) notFound();
  return <InterviewTalentPageBody talent={talent} />;
}
