import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

/**
 * Home blog entry — surfaces the latest 3 posts.
 * Server component (uses fs via lib/blog). Blog content is EN-only.
 */
export function HomeBlogEntry() {
  const latest = getAllPosts().slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="mb-2 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.18em] text-intellectual/70 normal-case">
              <Newspaper className="h-3.5 w-3.5" aria-hidden />
              Expert voices · from the blog
            </p>
            <h2 className="font-display text-2xl font-semibold text-intellectual sm:text-3xl">
              Coaches and the field, in their own words.
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-intellectual transition hover:text-intellectual-light sm:inline-flex"
          >
            All posts
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-intellectual/12 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-intellectual/30 hover:shadow-card"
            >
              <p className="text-[11px] font-semibold tracking-[0.12em] text-champagne-dark normal-case">
                {new Date(post.date).toLocaleDateString("en-SG", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug text-intellectual">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-intellectual-muted">
                {post.excerpt}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-intellectual transition group-hover:text-intellectual-light">
                Read post
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-intellectual transition hover:text-intellectual-light"
          >
            All posts
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
