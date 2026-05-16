"use client";

import { useState, type FormEvent } from "react";

export interface EmailCaptureProps {
  onSubmit: (email: string) => void;
  onSkip: () => void;
}

export function EmailCapture({ onSubmit, onSkip }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="rounded-lg bg-slate-800 p-4 text-center">
        <p className="text-base font-medium text-slate-100">We&apos;ll be in touch soon.</p>
      </section>
    );
  }

  return (
    <section className="space-y-4 rounded-lg bg-slate-800 p-4">
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-slate-100">
          Want your free DSA Preparation Guide?
        </h3>
        <p className="text-sm text-slate-400">
          We&apos;ll send you a guide covering: DSA school trials &amp; auditions, interview
          tips, portfolio preparation, what happens after acceptance, and how to optimise S1
          if DSA doesn&apos;t work out.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="your@email.com"
          required
          className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Send me the guide
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-600"
          >
            Skip for now
          </button>
        </div>
      </form>
    </section>
  );
}
