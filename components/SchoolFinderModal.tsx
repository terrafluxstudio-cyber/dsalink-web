"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { SchoolFinderWizard } from "@/components/SchoolFinderWizard";

interface SchoolFinderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// SVG fractal noise tile — produces a subtle paper-grain texture over the navy base.
// The # in url(#n) must be percent-encoded as %23 for inline data URIs.
const GRAIN_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='0.18'/></svg>\")";

export function SchoolFinderModal({ open, onOpenChange }: SchoolFinderModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Scrim */}
        <Dialog.Overlay
          className="fixed inset-0 z-40 bg-intellectual/70 backdrop-blur-sm transition-opacity duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100"
        />

        {/* Panel */}
        <Dialog.Content
          className="fixed inset-x-4 top-1/2 z-50 -translate-y-1/2 max-h-[90vh] overflow-hidden rounded-2xl shadow-[0_24px_64px_rgba(13,63,95,0.55)] transition-all duration-200 data-[state=closed]:opacity-0 data-[state=closed]:scale-95 data-[state=open]:opacity-100 data-[state=open]:scale-100 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-2xl focus:outline-none"
          aria-describedby="school-finder-desc"
        >
          {/* ── Layer 0: intellectual navy base ── */}
          <div className="relative flex flex-col" style={{ backgroundColor: "#0d3f5f" }}>

            {/* ── Layer 1: grain noise texture ── */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
              style={{
                backgroundImage: GRAIN_BG,
                backgroundSize: "180px 180px",
              }}
            />

            {/* ── Layer 2: champagne glow — top-left ── */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse 55% 45% at 0% 0%, rgba(198,162,74,0.18), transparent 65%)",
              }}
            />

            {/* ── Layer 3: champagne glow — bottom-right ── */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse 55% 45% at 100% 100%, rgba(198,162,74,0.13), transparent 65%)",
              }}
            />

            {/* ── Modal header bar ── */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <Dialog.Title className="text-[11px] font-bold uppercase tracking-[0.12em] text-champagne">
                DSA School Finder
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close school finder"
                  className="rounded-lg p-1.5 text-white/50 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </Dialog.Close>
            </div>

            {/* ── Wizard content scroll area ── */}
            <div
              className="relative z-10 overflow-y-auto"
              style={{ maxHeight: "calc(90vh - 52px)" }}
            >
              {/* Frosted-glass inner panel */}
              <div className="m-3 rounded-xl bg-white/[0.06] p-1 ring-1 ring-white/10 backdrop-blur-md sm:m-4">
                <div className="rounded-lg bg-slate-50 p-4 sm:p-6">
                  <p id="school-finder-desc" className="sr-only">
                    Multi-step wizard to find the right DSA secondary school for your child based
                    on PSLE score and talent.
                  </p>
                  <SchoolFinderWizard inModal onClose={() => onOpenChange(false)} />
                </div>
              </div>
            </div>

          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
