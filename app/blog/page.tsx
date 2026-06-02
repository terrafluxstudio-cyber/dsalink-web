import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogPostCard } from "@/components/BlogPostCard";
import { BlogSubscribeBlock } from "@/components/BlogSubscribeBlock";
import { StaticPageBreadcrumb, StaticPageRelatedCards } from "@/components/StaticPageRelatedCards";
import { getAllPosts } from "@/lib/blog";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink Blog — DSA guides and open house insights for Singapore parents",
} as const;

export const metadata: Metadata = {
  title: { absolute: "Blog | DSALink" },
  description:
    "DSA guides, open house insights, and practical tips for Singapore P6 families navigating DSA 2026.",
  keywords: [
    "DSA blog Singapore 2026",
    "DSA Secondary school tips Singapore",
    "Singapore P6 DSA guide",
    "open house recap Singapore 2026",
    "DSA application advice Singapore",
    "DSA experience Singapore parents",
    "secondary school selection Singapore",
    "DSA news Singapore",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | DSALink",
    description:
      "DSA guides, open house insights, and practical tips for Singapore P6 families navigating DSA 2026.",
    type: "website",
    url: "/blog",
    siteName: "DSALink",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | DSALink",
    description:
      "DSA guides, open house insights, and practical tips for Singapore P6 families navigating DSA 2026.",
    images: [ogImage.url],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <SiteHeader />
      <StaticPageBreadcrumb page="blog" />
      <main className="min-h-screen bg-surface">
        {/* Page header */}
        <div className="border-b border-champagne/20 bg-white px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-4xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-champagne-dark">
              DSALink
            </p>
            <h1 className="font-display text-3xl font-semibold text-intellectual sm:text-4xl">
              Blog
            </h1>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-intellectual-muted">
              DSA guides, school insights, and open house recaps — written for Singapore P6 families.
            </p>
          </div>
        </div>

        {/* Post grid */}
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
          {posts.length === 0 ? (
            <p className="text-sm text-intellectual-muted">No posts yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} {...post} />
              ))}
            </div>
          )}
        </div>

        {/* Subscribe + social */}
        <BlogSubscribeBlock />
      </main>
      <StaticPageRelatedCards page="blog" />
      <SiteFooter />
    </>
  );
}
