# CURSOR TASK: Blog Section — /blog listing + /blog/[slug] article pages

## Overview

Build a fully functional MDX-powered blog on DSALink. No CMS, no database — just local `.mdx` files in `content/blog/`, rendered with `next-mdx-remote/rsc`.

---

## Step 0: Install dependencies

```bash
npm install gray-matter next-mdx-remote
```

No changes to `next.config.ts` needed.

---

## File Structure to Create

```
content/blog/
  dsa-open-house-2026-what-to-look-for.mdx    ← first article (content below)

lib/
  blog.ts                                       ← getAllPosts + getPostBySlug

app/blog/
  page.tsx                                      ← listing page (REPLACE current "coming soon")
  [slug]/
    page.tsx                                    ← single article page

components/
  BlogPostCard.tsx                              ← card used in listing
```

---

## Step 1: `lib/blog.ts`

```ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;          // "YYYY-MM-DD"
  heroImage?: string;    // optional path under /public, e.g. "/blog/hero-open-house.jpg"
  content: string;       // raw MDX
};

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): Omit<BlogPost, "content">[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<BlogPost, "slug" | "content">) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost {
  const raw = fs.readFileSync(
    path.join(CONTENT_DIR, `${slug}.mdx`),
    "utf-8"
  );
  const { data, content } = matter(raw);
  return { slug, content, ...(data as Omit<BlogPost, "slug" | "content">) };
}
```

---

## Step 2: First article — `content/blog/dsa-open-house-2026-what-to-look-for.mdx`

```mdx
---
title: "DSA Open House 2026: What to Look For (And What Most Parents Miss)"
excerpt: "Most families leave open houses with brochures and a schedule. Here's the information that actually helps you decide whether to apply — and whether your child will get an offer."
date: "2026-05-23"
heroImage: "/blog/dsa-open-house-hero.jpg"
---

Open house season is here. You've blocked out the Saturdays, packed a notebook, and maybe dragged a reluctant Primary 6 child along. But most families leave without the information that actually matters for a DSA application.

Here's what separates parents who use open houses well from those who just collect brochures.

## What Most Parents Do

They sit through the principal's presentation, pick up a prospectus, check if the CCA their child does is listed, and leave. They come away knowing the school's "vision" and maybe the rough exam schedule.

This is the minimum. It doesn't help you decide whether to apply — or whether your child will actually get an offer.

## What to Actually Pay Attention To

### 1. The Q&A Session (Not the Presentation)

The presentation is polished and tells you what the school wants you to hear. The Q&A reveals how the school actually thinks.

Listen for: how vague or specific they are when asked about selection criteria. "We look at the whole child" is a non-answer. "We expect at least two years of consistent competition results in your talent area" is something you can work with.

If they won't be specific in a public Q&A, that's information too.

### 2. What Percentage of Each Cohort Comes via DSA

Some schools take 10% via DSA. Others take 30–40%. This affects how competitive the pool actually is.

Most schools don't volunteer this number. Ask directly: *"What proportion of your Sec 1 intake comes through DSA?"* The answer tells you whether DSA is a narrow exception or a significant pathway.

### 3. Whether Talent Area Slots Are Fixed or Flexible

Ask: *"Do you have a fixed number of places per talent area, or is it decided based on the applicant pool?"*

Fixed slots (e.g. "we take 5 robotics students per year") mean high competition within that specific category. Flexible allocation means a strong applicant in an undersubscribed area has a real advantage.

### 4. The CCA Commitment After Admission

DSA isn't just an admissions route — it comes with a commitment, typically 4 years in the talent area you applied under.

Find out specifically: What is the training schedule? What happens if your child's interests shift by Sec 3?

### 5. Talk to the Students, Not Just the Teachers

The student guides at open houses are usually carefully selected and briefed. But they're also more candid than teachers in ways that matter.

Ask them: *"Is the training intense? How much time does it take outside school hours?"* Their answer — and their facial expression — will tell you more than the official schedule.

## The Things Most Parents Miss

**The PSLE floor still applies.** Even a Confirmed Offer is void if your child's PSLE AL doesn't qualify for the school's Posting Group. DSA doesn't bypass PSLE. Ask what the minimum AL requirement is for each DSA category.

**"We accept beginners" doesn't always mean what it sounds like.** Some schools genuinely mean it (see: PLMGS and Harp). Others say it because it's technically true — they'll consider beginners, but in a competitive pool, beginners rarely win offers. Ask: *"Have beginners in this talent area received offers in the past two years?"*

**The offer type matters.** Confirmed Offer vs. Conditional Offer are fundamentally different. A Confirmed Offer means the school wants your child if PSLE is met. A Conditional Offer means you're still competing through the PSLE posting phase. Make sure you know which type the school typically extends.

## Before You Leave

Write down:

- The name of the DSA coordinator for your child's talent area
- One follow-up question you didn't get to ask
- Whether the school felt right for your child — not just academically, but as a place they'd want to spend six years

Open houses are a two-way evaluation. You're not just trying to impress the school — you're figuring out if this school is worth the investment of a DSA application.
```

---

## Step 3: `components/BlogPostCard.tsx`

A card showing: title, excerpt, date, hero image (if present). Design matches existing site tokens.

```tsx
import Link from "next/link";
import Image from "next/image";
import { type BlogPost } from "@/lib/blog";

type Props = Pick<BlogPost, "slug" | "title" | "excerpt" | "date" | "heroImage">;

export function BlogPostCard({ slug, title, excerpt, date, heroImage }: Props) {
  const formattedDate = new Date(date).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-champagne/20 bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md hover:ring-champagne/30"
    >
      {/* Hero image */}
      {heroImage ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-intellectual/10">
          <Image src={heroImage} alt={title} fill className="object-cover transition group-hover:scale-[1.02]" />
        </div>
      ) : (
        <div className="aspect-[16/9] w-full bg-gradient-to-br from-intellectual/10 via-champagne/10 to-intellectual/5" />
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-champagne-dark">
          {formattedDate}
        </p>
        <h2 className="font-display text-base font-semibold leading-snug text-intellectual group-hover:text-intellectual-light sm:text-[1.0625rem]">
          {title}
        </h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-intellectual-muted">
          {excerpt}
        </p>
        <p className="mt-4 text-xs font-semibold text-champagne-dark">
          Read more →
        </p>
      </div>
    </Link>
  );
}
```

---

## Step 4: `app/blog/page.tsx` — Listing page (replace current file entirely)

```tsx
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogPostCard } from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: { absolute: "Blog | DSALink" },
  description:
    "DSA guides, open house insights, and practical tips for Singapore P6 families navigating DSA 2026.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <SiteHeader />
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
      </main>
      <SiteFooter />
    </>
  );
}
```

---

## Step 5: `app/blog/[slug]/page.tsx` — Single article page

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: { absolute: `${post.title} | DSALink Blog` },
      description: post.excerpt,
      alternates: { canonical: `/blog/${slug}` },
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

  const formattedDate = new Date(post.date).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        {/* Article header */}
        <div className="border-b border-champagne/20 bg-white px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-champagne-dark hover:text-champagne"
            >
              ← Blog
            </Link>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-intellectual-muted">
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
          ">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
```

---

## Step 6: Add `@tailwindcss/typography` (required for `prose-*` classes)

```bash
npm install @tailwindcss/typography
```

In `tailwind.config.ts`, add to plugins:
```ts
plugins: [require("@tailwindcss/typography")],
```

---

## Validation

1. `npx tsc --noEmit` — zero errors
2. `npm run build` — all blog routes compile successfully (`/blog` static, `/blog/[slug]` static)
3. `/blog` shows the article card with title, excerpt, date
4. `/blog/dsa-open-house-2026-what-to-look-for` renders the full article with styled headings and body
5. "← Blog" link works from article back to listing
6. No style regressions on other pages
