import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getSiteUrl } from "@/lib/seo";

const PAGE_TITLE = "Privacy Policy | DSALink";
const PAGE_DESCRIPTION =
  "How DSALink handles your data: what we collect, how we use it, analytics and cookies, email, retention, and your choices under Singapore's PDPA.";
const LAST_UPDATED = "21 June 2026";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    alternates: { canonical: "/privacy" },
    robots: { index: true, follow: true },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
      url: "/privacy",
      siteName: "DSALink",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

export default function PrivacyPage() {
  const base = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${base}/privacy#webpage`,
    url: `${base}/privacy`,
    name: "Privacy Policy",
    inLanguage: "en-SG",
    isPartOf: { "@id": `${base}/#website` },
    publisher: { "@id": `${base}/#organization` },
    dateModified: "2026-06-21",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="font-display text-3xl font-bold text-intellectual sm:text-4xl normal-case">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            DSALink (operated by Terraflux Studio) respects your privacy. This page explains what
            we collect, why, and the choices you have. It is written to align with Singapore&apos;s
            Personal Data Protection Act (PDPA).
          </p>

          <section className="mt-10 space-y-3">
            <h2 className="font-display text-xl font-semibold text-intellectual normal-case">What we collect</h2>
            <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
              <li><strong>Email address</strong> — only if you choose to give it (for example, to receive your DSA Finder results or DSA updates).</li>
              <li><strong>Information you submit</strong> — such as the preferences you enter into the DSA Finder, used to generate your results.</li>
              <li><strong>Usage data</strong> — standard, aggregated analytics about how pages are used (see Analytics below). We do not collect names, NRIC, addresses, or payment details.</li>
            </ul>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="font-display text-xl font-semibold text-intellectual normal-case">How we use it</h2>
            <p className="text-base leading-relaxed text-slate-700">
              We use the email you provide to send the resources or updates you asked for, and we
              use submitted preferences to produce your DSA Finder results. We use aggregated usage
              data to understand what is helpful and improve the site. <strong>We do not sell or rent
              your personal data, and we do not share it for third-party advertising.</strong>
            </p>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="font-display text-xl font-semibold text-intellectual normal-case">Analytics and cookies</h2>
            <p className="text-base leading-relaxed text-slate-700">
              We use Google Analytics (GA4) to measure aggregate site usage. It sets cookies and
              collects standard technical information such as approximate location, device, and
              pages viewed. You can block cookies in your browser settings without losing access to
              the site&apos;s content.
            </p>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="font-display text-xl font-semibold text-intellectual normal-case">Service providers</h2>
            <p className="text-base leading-relaxed text-slate-700">
              We rely on a small number of trusted providers to run the site: Vercel (hosting and
              data storage), Google Analytics (usage measurement), and Resend (sending the emails
              you request). These providers process data only to deliver their service to us.
            </p>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="font-display text-xl font-semibold text-intellectual normal-case">Retention and your choices</h2>
            <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
              <li>We keep your email only as long as needed for the purpose you gave it, or until you ask us to remove it.</li>
              <li><strong>Unsubscribe</strong> any time by replying &ldquo;unsubscribe&rdquo; to any email from us.</li>
              <li><strong>Access or delete your data</strong> — email us and we will action it.</li>
            </ul>
          </section>

          <section className="mt-10 space-y-3">
            <h2 className="font-display text-xl font-semibold text-intellectual normal-case">Contact</h2>
            <p className="text-base leading-relaxed text-slate-700">
              For any privacy request or question: <a href="mailto:hello@dsalink.sg" className="text-intellectual underline">hello@dsalink.sg</a>.
              Learn more <Link href="/about" className="text-intellectual underline">about DSALink</Link>.
            </p>
            <p className="text-[11px] text-slate-400">
              DSALink is an independent resource and is not affiliated with or endorsed by MOE Singapore or any school.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
