"use client";

import Link from "next/link";

// A run of inline content: plain text, an internal/mailto link, or bold text.
// Lets the legal pages keep one JSX skeleton while swapping copy per locale.
export type Seg = string | { t: string; href: string } | { b: string };

export function Frag({ segs }: { segs: Seg[] | string }) {
  const list = typeof segs === "string" ? [segs] : segs;
  return (
    <>
      {list.map((s, i) => {
        if (typeof s === "string") return <span key={i}>{s}</span>;
        if ("b" in s) return <strong key={i}>{s.b}</strong>;
        if (s.href.startsWith("mailto:")) {
          return (
            <a key={i} href={s.href} className="text-intellectual underline">
              {s.t}
            </a>
          );
        }
        return (
          <Link key={i} href={s.href} className="text-intellectual underline">
            {s.t}
          </Link>
        );
      })}
    </>
  );
}
