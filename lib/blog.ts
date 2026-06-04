import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // "YYYY-MM-DD"
  heroImage?: string; // optional path under /public, e.g. "/blog/hero-open-house.jpg"
  content: string; // raw MDX
};

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): Omit<BlogPost, "content">[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const todayMs = Date.now();
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<BlogPost, "slug" | "content">) };
    })
    // Scheduled-publish filter: hide posts dated in the future.
    // Pairs with ISR revalidate on /blog and /blog/[slug] (6 hours) — when a future
    // date passes, the next ISR rebuild surfaces the post automatically.
    .filter((p) => new Date(p.date).getTime() <= todayMs)
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
