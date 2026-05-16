"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { SchoolFinderWizard } from "@/components/SchoolFinderWizard";

interface SchoolFinderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GRAIN_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='0.18'/></svg>\")";

export function SchoolFinderModal({ open, onOpenChange }: SchoolFinderModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Scrim */}
        <Dialog.Overlay className="fixed inset-0 z-40 bg-intellectual/75 backdrop-blur-sm transition-opacity duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100" />

        {/* Panel */}
        <Dialog.Content
          className="fixed inset-x-4 top-1/2 z-50 -translate-y-1/2 max-h-[92vh] overflow-hidden rounded-2xl shadow-[0_32px_80px_rgba(8,44,68,0.6)] transition-all duration-200 data-[state=closed]:opacity-0 data-[state=closed]:scale-[0.97] data-[state=open]:opacity-100 data-[state=open]:scale-100 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-xl focus:outline-none"
          aria-describedby="school-finder-desc"
        >
          {/* ── Outer shell: intellectual navy with texture ── */}
          <div className="relative" style={{ backgroundColor: "#0d3f5f" }}>

            {/* Grain texture */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ backgroundImage: GRAIN_BG, backgroundSize: "180px 180px" }} />

            {/* Champagne glow top-left */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ background: "radial-gradient(ellipse 60% 50% at 5% 0%, rgba(198,162,74,0.22), transparent 60%)" }} />

            {/* Champagne glow bottom-right */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{ background: "radial-gradient(ellipse 50% 45% at 95% 100%, rgba(198,162,74,0.15), transparent 60%)" }} />

            {/* ── Header ── */}
            <div className="relative z-10 flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-2.5">
                {/* Gold accent dot */}
                <div className="h-2 w-2 rounded-full bg-champagne shadow-[0_0_8px_rgba(198,162,74,0.8)]" aria-hidden />
                <Dialog.Title className="text-[0.8125rem] font-bold tracking-[0.08em] text-white/90" style={{ textTransform: "none" }}>
                  DSA School Finder
                </Dialog.Title>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close school finder"
                  className="rounded-lg p-1.5 text-white/40 transition hover:bg-white/10 hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </Dialog.Close>
            </div>

            {/* ── Inner white content card ── */}
            {/* Champagne hairline bridges dark→white */}
            <div className="relative z-10 mx-3 mb-3 overflow-hidden rounded-xl sm:mx-4 sm:mb-4">
              <div className="h-[2px] bg-gradient-to-r from-transparent via-champagne to-transparent opacity-70" />
              <div className="overflow-y-auto bg-white" style={{ maxHeight: "calc(92vh - 80px)" }}>
                <div className="p-5 sm:p-6">
                  <p id="school-finder-desc" className="sr-only">
                    Multi-step wizard to find the right DSA secondary school based on PSLE score and talent.
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
