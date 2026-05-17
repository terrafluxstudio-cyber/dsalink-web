"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export interface EmailCaptureProps {
  onSubmit: (email: string) => void;
  onSkip: () => void;
  heading?: string;
  description?: string;
  submitLabel?: string;
  successTitle?: string;
  successDescription?: string;
}

export function EmailCapture({
  onSubmit,
  onSkip,
  heading = "Email me my results",
  description = "We'll send your school recommendations to your inbox. A free resource pack on trials, interviews, and what to do next follows automatically.",
  submitLabel = "Send my results",
  successTitle = "Sent - check your inbox",
  successDescription = "Your school recommendations are on their way. We'll also send follow-ups with open house dates, deadline reminders, and interview prep tips.",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    trackEvent("email_captured");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-intellectual" aria-hidden />
          <div>
            <p className="text-[0.9375rem] font-semibold text-slate-900">
              {successTitle}
            </p>
            <p className="mt-1 text-[0.8125rem] leading-relaxed text-slate-500">
              {successDescription}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-intellectual/8 text-intellectual">
          <Mail className="h-4 w-4" aria-hidden />
        </span>
        <div>
          <h3 className="text-[0.9375rem] font-semibold text-slate-900">
            {heading}
          </h3>
          <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="your@email.com"
          required
          className="w-full rounded-xl border border-[#e3ded5] bg-surface px-4 py-3 text-[0.9375rem] text-slate-900 placeholder:text-slate-400 transition focus:border-intellectual/40 focus:outline-none focus:ring-2 focus:ring-intellectual/10"
        />
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual shadow-gold transition hover:bg-champagne-light"
          >
            {submitLabel}
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
          >
            No thanks
          </button>
        </div>
        <p className="text-[11px] text-slate-400">
          No spam. Unsubscribe anytime. Not affiliated with MOE.
        </p>
      </form>
    </section>
  );
}
