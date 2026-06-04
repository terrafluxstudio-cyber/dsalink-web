import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { BlogPostBreadcrumb } from "@/components/BlogPostBreadcrumb";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StaticPageRelatedCards } from "@/components/StaticPageRelatedCards";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { buildBlogPostStructuredData } from "@/lib/seo";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

// ISR revalidate every 6 hours so future-dated MDX posts auto-publish when date passes.
export const revalidate = 21600;
// Allow rendering of slugs not in initial generateStaticParams (i.e. future-dated posts
// once their date arrives and ISR picks them up).
export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    // Don't leak metadata for unpublished (future-dated) posts.
    if (new Date(post.date).getTime() > Date.now()) return {};
    const canonical = `/blog/${slug}`;
    const ogImage = post.heroImage ?? "/opengraph-image";
    const fullTitle = `${post.title} | DSALink Blog`;
    return {
      title: { absolute: fullTitle },
      description: post.excerpt,
      alternates: { canonical },
      openGraph: {
        title: fullTitle,
        description: post.excerpt,
        type: "article",
        url: canonical,
        siteName: "DSALink",
        publishedTime: post.date,
        modifiedTime: post.date,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: fullTitle,
        description: post.excerpt,
        images: [ogImage],
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  // Scheduled-publish guard: 404 if the post's date is in the future.
  // Once the date arrives, ISR (revalidate=21600) rebuilds and the post becomes accessible.
  if (new Date(post.date).getTime() > Date.now()) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const jsonLd = buildBlogPostStructuredData({
    slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    heroImage: post.heroImage,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <BlogPostBreadcrumb title={post.title} />
      <main className="min-h-screen bg-surface">
        {/* Article header */}
        <div className="border-b border-champagne/20 bg-white px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] text-champagne-dark hover:text-champagne"
            >
              ← Blog
            </Link>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.14em] text-intellectual-muted">
              {formattedDate}
            </p>
            <h1 className="font-display text-2xl font-semibold leading-snug text-intellectual sm:text-3xl sm:leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-intellectual-muted">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Article body */}
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="prose prose-sm sm:prose-base prose-intellectual max-w-none
            prose-headings:font-display prose-headings:font-semibold prose-headings:text-intellectual
            prose-h2:mt-10 prose-h2:text-xl prose-h2:border-b prose-h2:border-champagne/20 prose-h2:pb-2
            prose-h3:mt-8 prose-h3:text-base prose-h3:text-intellectual
            prose-p:text-intellectual-muted prose-p:leading-relaxed
            prose-strong:text-intellectual prose-strong:font-semibold
            prose-em:text-intellectual
            prose-li:text-intellectual-muted
            prose-a:text-champagne-dark prose-a:no-underline hover:prose-a:underline
            prose-table:w-full prose-table:text-sm
            prose-th:bg-champagne/10 prose-th:text-intellectual prose-th:font-semibold prose-th:px-3 prose-th:py-2 prose-th:text-left prose-th:border prose-th:border-champagne/20
            prose-td:px-3 prose-td:py-2 prose-td:border prose-td:border-champagne/20 prose-td:text-intellectual-muted
          ">
            <MDXRemote
              source={post.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </div>
      </main>
      <StaticPageRelatedCards page="blog" />
      <SiteFooter />
    </>
  );
}
