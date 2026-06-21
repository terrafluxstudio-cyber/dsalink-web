import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getSiteUrl } from "@/lib/seo";

const PAGE_TITLE = "About DSALink — Who We Are & How We Compile DSA Data | DSALink";
const PAGE_DESCRIPTION =
  "DSALink is a free, independent resource for Singapore Primary 6 parents navigating Direct School Admission (DSA-Sec). Built by Terraflux Studio. Not affiliated with MOE. How we compile our data and keep it accurate.";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    alternates: { canonical: "/about" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
      url: "/about",
      siteName: "DSALink",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  };
}

export default function AboutPage() {
  const base = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${base}/about#aboutpage`,
    url: `${base}/about`,
    name: "About DSALink",
    inLanguage: "en-SG",
    isPartOf: { "@id": `${base}/#website` },
    about: { "@id": `${base}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="font-display text-3xl font-bold text-intellectual sm:text-4xl normal-case">
            About DSALink
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            DSALink is a free, independent resource that helps Singapore parents understand
            Direct School Admission to Secondary school (DSA-Sec) and act on it before the
            deadline. It is built and maintained by Terraflux Studio.
          </p>

          <section className="mt-10 space-y-3">
            <h2 className="font-display text-xl font-semibold text-intellectual normal-case">Why we built it</h2>
            <p className="text-base leading-relaxed text-slate-700">
              Many capable Primary 6 children never try for DSA because their families assume it
              is only for elite athletes or prodigies. It is not. DSALink exists for the ordinary
              neighbourhood-school parent who has barely heard of DSA — to make the process clear,
              honest, and possible to act on in the weeks that matter. Everything is available in
              English, 中文, Bahasa Melayu, and Tamil.
            </p>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="font-display text-xl font-semibold text-intellectual normal-case">What you&apos;ll find here</h2>
            <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
              <li><Link href="/what-is-dsa" className="text-intellectual underline">What DSA is</Link> and how it works alongside the PSLE</li>
              <li>A <Link href="/schools" className="text-intellectual underline">directory of all 147 secondary schools</Link> with their DSA talent areas and programmes</li>
              <li>The <Link href="/dsa-finder" className="text-intellectual underline">DSA Finder</Link> tool and <Link href="/dsa-statistics" className="text-intellectual underline">compiled DSA statistics</Link></li>
              <li><Link href="/dsa-interview" className="text-intellectual underline">Interview and trial preparation</Link> by talent area</li>
              <li>An <Link href="/open-house-guide" className="text-intellectual underline">open-house guide</Link>, <Link href="/psle-cop" className="text-intellectual underline">PSLE cut-off history</Link>, and a regularly updated <Link href="/blog" className="text-intellectual underline">blog</Link></li>
            </ul>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="font-display text-xl font-semibold text-intellectual normal-case">How we compile our data</h2>
            <p className="text-base leading-relaxed text-slate-700">
              Our school and talent-area data is compiled from the official MOE SchoolFinder
              listings and each school&apos;s own published information, then organised so parents
              can compare options in one place. Figures reflect the current DSA exercise and are
              dated so you can see how recent they are. School listings can change — always confirm
              specifics on the school&apos;s official website before deciding.
            </p>
            <p className="text-base leading-relaxed text-slate-700">
              Where we publish parent &ldquo;experience&rdquo; examples, these are composite stories
              drawn from common patterns, not records of specific real families — names, scores, and
              identifying details are changed.
            </p>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="font-display text-xl font-semibold text-intellectual normal-case">Independence and accuracy</h2>
            <p className="text-base leading-relaxed text-slate-700">
              DSALink is not affiliated with, endorsed by, or operated by the Ministry of Education
              (MOE) or any school. For official information, always refer to MOE and the individual
              schools. We take accuracy seriously — if you spot something wrong or out of date,
              please tell us and we&apos;ll fix it.
            </p>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="font-display text-xl font-semibold text-intellectual normal-case">Contact</h2>
            <p className="text-base leading-relaxed text-slate-700">
              Questions, corrections, or feedback: <a href="mailto:hello@dsalink.sg" className="text-intellectual underline">hello@dsalink.sg</a>.
              See also our <Link href="/privacy" className="text-intellectual underline">privacy policy</Link>.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
