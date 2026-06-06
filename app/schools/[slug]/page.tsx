import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { MapPin, BookOpen, GraduationCap, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StaticPageRelatedCards } from "@/components/StaticPageRelatedCards";
import { getSchoolBySlug, getAllPublishedSchools } from "@/lib/schoolPages";
import { getSiteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

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
  return {
    title: { absolute: school.title },
    description: school.description,
    alternates: { canonical },
    openGraph: {
      title: school.title,
      description: school.description,
      type: "article",
      url: canonical,
      siteName: "DSALink",
    },
    twitter: {
      card: "summary_large_image",
      title: school.title,
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
        publisher: { "@type": "Organization", name: "DSALink", url: siteUrl },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Schools", item: `${siteUrl}/schools` },
          { "@type": "ListItem", position: 3, name: school.schoolFullName, item: canonical },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="min-h-screen bg-surface">

        {/* ── Page header ───────────────────────────────────────── */}
        <div className="border-b border-champagne/20 bg-white px-4 py-10 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/schools"
              className="mb-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] text-champagne-dark hover:text-champagne"
            >
              ← All Schools
            </Link>
            <div className="mb-3 flex flex-wrap gap-2">
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
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-intellectual-muted">
              {school.description}
            </p>
          </div>
        </div>

        {/* ── Two-column body ────────────────────────────────────── */}
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_288px]">

            {/* ── Left: prose content ─────────────────────────── */}
            <div
              className="prose prose-sm sm:prose-base prose-intellectual min-w-0 max-w-none
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
                prose-hr:border-champagne/20
              "
            >
              <MDXRemote
                source={school.content}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </div>

            {/* ── Right: sidebar ──────────────────────────────── */}
            <aside className="flex flex-col gap-4 lg:sticky lg:top-6 lg:self-start">

              {/* At a Glance card */}
              <div className="rounded-2xl border border-champagne/20 bg-white p-5">
                <p className="mb-4 text-[10px] font-semibold tracking-[0.14em] text-intellectual-muted">
                  AT A GLANCE
                </p>

                {/* Academic Track */}
                <div className="mb-4">
                  <p className="mb-1.5 text-[11px] font-semibold text-intellectual-muted/70">Academic Track</p>
                  <div className="flex flex-wrap gap-1.5">
                    {school.academicTracks.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-surface px-2 py-0.5 text-[11px] font-medium text-intellectual"
                      >
                        {t.split("(")[0].trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <p className="mb-1 text-[11px] font-semibold text-intellectual-muted/70">Nearest MRT</p>
                  <div className="flex items-start gap-1.5 text-sm text-intellectual-muted">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-champagne-dark" aria-hidden />
                    <span>{school.nearestMrt}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-5 border-b border-champagne/15 pb-5">
                  <p className="mb-1 text-[11px] font-semibold text-intellectual-muted/70">Address</p>
                  <p className="text-[0.8125rem] leading-snug text-intellectual-muted">{school.address}</p>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2">
                  <a
                    href={school.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-lg border border-intellectual/15 px-3 py-2 text-[0.8125rem] font-semibold text-intellectual transition hover:border-intellectual/30 hover:bg-surface"
                  >
                    <BookOpen className="h-3.5 w-3.5 shrink-0 text-intellectual-muted" aria-hidden />
                    Official Website
                    <ExternalLink className="ml-auto h-3 w-3 text-intellectual-muted/50 transition group-hover:text-intellectual-muted" aria-hidden />
                  </a>
                  <a
                    href={school.moeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-lg border border-intellectual/15 px-3 py-2 text-[0.8125rem] font-semibold text-intellectual transition hover:border-intellectual/30 hover:bg-surface"
                  >
                    <GraduationCap className="h-3.5 w-3.5 shrink-0 text-intellectual-muted" aria-hidden />
                    MOE SchoolFinder
                    <ExternalLink className="ml-auto h-3 w-3 text-intellectual-muted/50 transition group-hover:text-intellectual-muted" aria-hidden />
                  </a>
                  {school.dsaAdmissionsUrl && (
                    <a
                      href={school.dsaAdmissionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-lg bg-champagne px-3 py-2 text-[0.8125rem] font-semibold text-white transition hover:opacity-90"
                    >
                      <GraduationCap className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      DSA Admissions ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Data links card */}
              <div className="rounded-2xl border border-champagne/20 bg-white p-5">
                <p className="mb-3 text-[10px] font-semibold tracking-[0.14em] text-intellectual-muted">
                  CURRENT DATA
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/psle-cop"
                    className="group flex items-center justify-between rounded-lg border border-intellectual/10 bg-surface px-3 py-2.5 text-[0.8125rem] font-semibold text-intellectual transition hover:border-intellectual/25 hover:bg-white"
                  >
                    PSLE COP data
                    <span className="text-champagne-dark transition group-hover:translate-x-0.5">→</span>
                  </Link>
                  <Link
                    href="/dsa-finder"
                    className="group flex items-center justify-between rounded-lg border border-intellectual/10 bg-surface px-3 py-2.5 text-[0.8125rem] font-semibold text-intellectual transition hover:border-intellectual/25 hover:bg-white"
                  >
                    DSA talent areas
                    <span className="text-champagne-dark transition group-hover:translate-x-0.5">→</span>
                  </Link>
                  <Link
                    href="/dsa-results"
                    className="group flex items-center justify-between rounded-lg border border-intellectual/10 bg-surface px-3 py-2.5 text-[0.8125rem] font-semibold text-intellectual transition hover:border-intellectual/25 hover:bg-white"
                  >
                    DSA results guide
                    <span className="text-champagne-dark transition group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>
              </div>

            </aside>
          </div>
        </div>

      </main>
      <StaticPageRelatedCards page="schools" />
      <SiteFooter />
    </>
  );
}
