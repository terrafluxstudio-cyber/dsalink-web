"use client";

import * as Popover from "@radix-ui/react-popover";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Copy } from "@/lib/i18n";
import {
  GLOSSARY_I18N_KEY,
  getGlossaryDefinition,
  type GlossaryTerm,
} from "@/src/data/glossary";

function resolveGlossaryDefinition(t: Copy, term: GlossaryTerm): string {
  const k = GLOSSARY_I18N_KEY[term] as keyof Copy;
  const localized = t[k];
  return typeof localized === "string" && localized.trim().length > 0
    ? localized
    : getGlossaryDefinition(term);
}

function useCoarsePointer(): boolean {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setCoarse(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return coarse;
}

const triggerClassName =
  "inline cursor-help border-0 border-b border-dotted border-slate-400 bg-transparent p-0 font-inherit text-inherit underline-offset-[3px] decoration-transparent outline-none transition-colors hover:border-slate-500 focus-visible:ring-2 focus-visible:ring-intellectual/30 focus-visible:ring-offset-1";

const contentClassName =
  "z-[100] max-w-[250px] origin-top rounded-lg bg-slate-900 px-3 py-2.5 text-left text-[0.8125rem] leading-snug text-white shadow-lg animate-glossary-pop";

export type GlossaryTooltipProps = {
  term: GlossaryTerm;
  children?: React.ReactNode;
};

export function GlossaryTooltip({ term, children }: GlossaryTooltipProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const coarse = useCoarsePointer();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  const definition = resolveGlossaryDefinition(t, term);
  const label = children ?? term;

  const onPointerEnterTrigger = (_e: PointerEvent) => {
    if (!coarse) {
      cancelClose();
      setOpen(true);
    }
  };

  const onPointerLeaveTrigger = (_e: PointerEvent) => {
    if (!coarse) scheduleClose();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((o) => !o);
    }
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal={false}>
      <Popover.Trigger asChild>
        <span
          role="button"
          tabIndex={0}
          aria-expanded={open}
          aria-haspopup="dialog"
          className={triggerClassName}
          onPointerEnter={onPointerEnterTrigger}
          onPointerLeave={onPointerLeaveTrigger}
          onClick={(e) => {
            if (!coarse) e.preventDefault();
          }}
          onKeyDown={onKeyDown}
        >
          {label}
        </span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          align="center"
          sideOffset={8}
          collisionPadding={12}
          className={contentClassName}
          onPointerEnter={() => {
            if (!coarse) cancelClose();
          }}
          onPointerLeave={() => {
            if (!coarse) scheduleClose();
          }}
          onOpenAutoFocus={(e) => {
            if (!coarse) e.preventDefault();
          }}
        >
          <p className="m-0 text-white/95">{definition}</p>
          <Popover.Arrow className="fill-slate-900" width={12} height={6} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
