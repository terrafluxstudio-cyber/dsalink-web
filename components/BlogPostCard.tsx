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
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            className="object-cover transition group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] w-full bg-gradient-to-br from-intellectual/10 via-champagne/10 to-intellectual/5" />
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-[10px] font-semibold tracking-[0.14em] text-champagne-dark">
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
