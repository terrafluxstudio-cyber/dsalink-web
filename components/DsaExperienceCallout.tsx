import Link from "next/link";
import { ArrowRight, BookMarked } from "lucide-react";

const PREVIEW_ITEMS = [
  "How DSA offers interact with your PSLE AL score",
  "School selectivity tiers — which schools are truly competitive",
  "Sports, arts, STEM & leadership — what each pathway really evaluates",
  "The 2026 DSA timeline, week by week",
  "Common mistakes parents make — and how to avoid them",
] as const;

export function DsaExperienceCallout() {
  return (
    <section className="bg-surface-warm py-10 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Link
          href="/dsa-experience"
          className="group block rounded-2xl border border-champagne/30 bg-white px-6 py-7 shadow-card transition hover:border-champagne/60 hover:shadow-card-hover sm:px-8 sm:py-8"
        >
          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-champagne/30 bg-champagne/10 text-intellectual transition group-hover:border-champagne/50">
                <BookMarked className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="mb-0.5 text-[10px] font-semibold tracking-[0.15em] text-champagne-dark normal-case">
                  FEATURED GUIDE · FREE
                </p>
                <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                  The DSA Experience: What Parents Wish They Knew
                </h2>
              </div>
            </div>
            <span className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-intellectual transition group-hover:gap-2 sm:inline-flex">
              Read the guide
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </div>

          {/* Preview list */}
          <ul className="mt-5 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2.5 pl-[3.5rem]">
            {PREVIEW_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="mt-5 flex items-center gap-1 pl-[3.5rem] text-sm font-semibold text-intellectual sm:hidden">
            Read the guide <ArrowRight className="h-4 w-4" aria-hidden />
          </div>
        </Link>
      </div>
    </section>
  );
}
