"use client";

import { School } from "lucide-react";
import { useState } from "react";
import { SCHOOL_LOGO_URLS } from "@/lib/school-logo-urls";
import { SCHOOL_PROFILES } from "@/lib/school-profiles";
import { resolveSchoolId } from "@/lib/school-id-resolver";

const WEBSITE_BY_NAME = new Map<string, string>(
  SCHOOL_PROFILES.map((s) => [s.nameEn.toLowerCase(), s.officialWebsite]),
);

type Props = {
  /** The school's profile id (slug), e.g. "raffles-institution" */
  schoolId?: string;
  /** English name — used for fallback favicon lookup when id is absent */
  nameEn: string;
  /** Official website URL — used as a last-resort favicon source */
  officialWebsite?: string;
  size?: number;
};

export function SchoolLogo({ schoolId, nameEn, officialWebsite, size = 36 }: Props) {
  const [src, setSrc] = useState<string | null>(() => {
    // 1. Static MOE crest map (highest quality, always accurate)
    if (schoolId && SCHOOL_LOGO_URLS[schoolId]) return SCHOOL_LOGO_URLS[schoolId];
    // 1b. Try to resolve schoolId from nameEn (handles variant spellings)
    const resolvedId = resolveSchoolId(nameEn);
    if (resolvedId && SCHOOL_LOGO_URLS[resolvedId]) return SCHOOL_LOGO_URLS[resolvedId];
    // 2. Google favicon from officialWebsite or name-matched site
    const site =
      officialWebsite ?? WEBSITE_BY_NAME.get(nameEn.toLowerCase()) ?? "";
    if (site) {
      return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(site)}&size=64`;
    }
    return null;
  });

  const dim = size;

  if (!src) {
    return (
      <div
        style={{ width: dim, height: dim }}
        className="shrink-0 flex items-center justify-center rounded-lg border border-intellectual/10 bg-slate-50 text-slate-400"
      >
        <School className="h-4 w-4" aria-hidden />
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt=""
      width={dim}
      height={dim}
      style={{ width: dim, height: dim }}
      className="shrink-0 rounded-lg border border-intellectual/10 object-contain p-0.5 bg-white"
      onError={() => {
        // MOE URL failed → try Google favicon
        const resolvedId = resolveSchoolId(nameEn);
        const fallbackProfile = resolvedId
          ? SCHOOL_PROFILES.find((p) => p.id === resolvedId)
          : undefined;
        const site =
          officialWebsite ??
          WEBSITE_BY_NAME.get(nameEn.toLowerCase()) ??
          fallbackProfile?.officialWebsite ??
          "";
        if (site && !src.includes("gstatic")) {
          setSrc(
            `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(site)}&size=64`,
          );
        } else {
          setSrc(null);
        }
      }}
    />
  );
}
