"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function BlogSubscribeBlock() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  return (
    <div className="mx-auto max-w-4xl px-4 pb-14 sm:px-6">
      <div className="rounded-2xl bg-intellectual px-6 py-8 sm:px-10 sm:py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">

          {/* Subscribe */}
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-champagne">
              Stay updated
            </p>
            <p className="mt-2 font-display text-xl font-semibold text-white normal-case">
              Get open house recaps the same day
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/55 normal-case">
              We publish takeaways from every DSA open house within 24 hours. No fluff, no spam.
            </p>
            {status === "success" ? (
              <div className="mt-4 flex items-center gap-2 text-champagne-light">
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
                <p className="text-sm font-medium">You&apos;re in — we&apos;ll keep you posted.</p>
              </div>
            ) : (
              <form
                className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!email) return;
                  setStatus("loading");
                  try {
                    const res = await fetch("/api/subscribe", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email, source: "blog-page" }),
                    });
                    setStatus(res.ok ? "success" : "error");
                  } catch {
                    setStatus("error");
                  }
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-champagne/50 focus:outline-none focus:ring-1 focus:ring-champagne/30"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-lg bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual transition hover:bg-champagne-light disabled:opacity-60 whitespace-nowrap"
                >
                  {status === "loading" ? "…" : "Notify me"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-2 text-xs text-red-400">Something went wrong — try again.</p>
            )}
          </div>

          {/* Divider */}
          <div className="hidden h-px w-full bg-white/10 sm:block sm:h-auto sm:w-px" />

          {/* Social */}
          <div className="sm:min-w-[180px]">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-champagne">
              Follow us
            </p>
            <p className="mt-2 text-sm text-white/55 normal-case">
              We also post daily DSA tips and open house alerts on:
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61590026554613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </span>
                  <span className="normal-case">Facebook · DSALink</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dsalink.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </span>
                  <span className="normal-case">Instagram · @dsalink.sg</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/dsa_link_sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                    </svg>
                  </span>
                  <span className="normal-case">Telegram · t.me/dsa_link_sg</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
