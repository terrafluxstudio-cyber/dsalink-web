import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StaticPageRelatedCards } from "@/components/StaticPageRelatedCards";
import { getSchoolBySlug, getAllPublishedSchools } from "@/lib/schoolPages";
import { getSiteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// ISR 6 h — consistent with blog cadence.
export const revalidate = 21600;
export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllPublishedSchools().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const school = getSchoolBySlug(slug);
  if (!school || school.status !== "published") return {};

  const canonical = `/schools/${slug}`;
  const fullTitle = school.title;
  return {
    title: { absolute: fullTitle },
    description: school.description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description: school.description,
      type: "article",
      url: canonical,
      siteName: "DSALink",
      modifiedTime: school.lastUpdated,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: school.description,
    },
  };
}

export default async function SchoolPage({ params }: Props) {
  const { slug } = await params;
  const school = getSchoolBySlug(slug);

  if (!school || school.status !== "published") {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/schools/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: school.title,
        description: school.description,
        url: canonical,
        dateModified: school.lastUpdated,
        publisher: {
          "@type": "Organization",
          name: "DSALink",
          url: siteUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Schools",
            item: `${siteUrl}/schools`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: school.schoolFullName,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        {/* Page header */}
        <div className="border-b border-champagne/20 bg-white px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/schools"
              className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] text-champagne-dark hover:text-champagne"
            >
              ← All Schools
            </Link>
            <div className="mb-3 flex flex-wrap gap-3">
              {school.schoolTypes.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-champagne/10 px-3 py-0.5 text-[11px] font-semibold tracking-[0.10em] text-champagne-dark"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="font-display text-2xl font-semibold leading-snug text-intellectual sm:text-3xl sm:leading-tight">
              {school.schoolFullName}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-intellectual-muted">
              {school.description}
            </p>
            {/* Quick-info strip */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-intellectual-muted border-t border-champagne/15 pt-5">
              <span className="flex items-center gap-1.5">
                <span className="opacity-60">📍</span>
                {school.nearestMrt}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="opacity-60">📊</span>
                PSLE 2025: {school.psleCop}
              </span>
              <a
                href={school.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne-dark hover:underline flex items-center gap-1"
              >
                Official website ↗
              </a>
              <a
                href={school.moeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne-dark hover:underline flex items-center gap-1"
              >
                MOE SchoolFinder ↗
              </a>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
          <div
            className="prose prose-sm sm:prose-base prose-intellectual max-w-none
              prose-headings:font-display prose-headings:font-semibold prose-headings:text-intellectual
              prose-h2:mt-10 prose-h2:text-xl prose-h2:border-b prose-h2:border-champagne/20 prose-h2:pb-2
              prose-h3:mt-6 prose-h3:text-base prose-h3:text-intellectual
              prose-p:text-intellectual-muted prose-p:leading-relaxed
              prose-strong:text-intellectual prose-strong:font-semibold
              prose-em:text-intellectual
              prose-li:text-intellectual-muted
              prose-a:text-champagne-dark prose-a:no-underline hover:prose-a:underline
              prose-table:w-full prose-table:text-sm
              prose-th:bg-champagne/10 prose-th:text-intellectual prose-th:font-semibold prose-th:px-3 prose-th:py-2 prose-th:text-left prose-th:border prose-th:border-champagne/20
              prose-td:px-3 prose-td:py-2 prose-td:border prose-td:border-champagne/20 prose-td:text-intellectual-muted
            "
          >
            <MDXRemote
              source={school.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
          {/* Last updated */}
          <p className="mt-12 text-xs text-intellectual-muted/60">
            Last updated: {new Date(school.lastUpdated).toLocaleDateString("en-SG", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {" · "}Sources: MOE SchoolFinder and official school website.
          </p>
        </div>
      </main>
      <StaticPageRelatedCards page="schools" />
      <SiteFooter />
    </>
  );
}
