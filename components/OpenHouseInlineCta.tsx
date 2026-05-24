"use client";

import { useState, type FormEvent } from "react";
import { Bell, CheckCircle2 } from "lucide-react";

export function OpenHouseInlineCta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source: "open-houses-inline" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="my-4 flex items-center gap-3 rounded-2xl border border-champagne/30 bg-intellectual px-5 py-4">
        <CheckCircle2 className="h-5 w-5 shrink-0 text-champagne" aria-hidden />
        <div>
          <p className="text-sm font-semibold text-white">You&apos;re in — check your inbox</p>
          <p className="text-xs text-white/55">We&apos;ll alert you when schools open DSA registration.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="my-4 rounded-2xl border border-white/10 px-5 py-5 sm:flex sm:items-center sm:gap-6"
      style={{ backgroundColor: "#0d3f5f" }}
    >
      {/* Left: copy */}
      <div className="mb-4 flex items-start gap-3 sm:mb-0 sm:flex-1">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-champagne/15 text-champagne">
          <Bell className="h-4 w-4" aria-hidden />
        </span>
        <div>
          <p className="text-sm font-bold text-white">Know the moment DSA registration opens</p>
          <p className="mt-0.5 text-xs leading-relaxed text-white/55">
            Each school sets its own registration window. We&apos;ll track them and send you a heads-up — free.
          </p>
        </div>
      </div>

      {/* Right: form */}
      <form onSubmit={handleSubmit} className="flex gap-2 sm:w-auto sm:flex-none">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-champagne/60 focus:outline-none disabled:opacity-60 sm:w-48"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-xl bg-champagne px-4 py-2.5 text-sm font-bold text-intellectual shadow-gold transition hover:bg-champagne-light disabled:opacity-60"
        >
          {status === "loading" ? "..." : "Notify me"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-2 text-xs text-red-400 sm:hidden">Something went wrong, try again.</p>
      )}
    </div>
  );
}
