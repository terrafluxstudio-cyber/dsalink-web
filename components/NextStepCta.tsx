import Link from "next/link";

interface CtaLink {
  href: string;
  label: string;
  primary?: boolean;
}

interface NextStepCtaProps {
  title: string;
  body: string;
  links: CtaLink[];
}

export function NextStepCta({ title, body, links }: NextStepCtaProps) {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-intellectual px-6 py-7 sm:px-8">
      <p className="font-display text-lg font-semibold text-white sm:text-xl">{title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-white/60">{body}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {links.map(({ href, label, primary }) =>
          primary ? (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-2 rounded-xl bg-champagne px-5 py-2.5 text-sm font-bold text-intellectual shadow-gold transition hover:bg-champagne-light"
            >
              {label}
            </Link>
          ) : (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              {label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
