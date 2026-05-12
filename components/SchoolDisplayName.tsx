import type { Locale } from "@/lib/i18n";
import { getSchoolDisplayNameParts } from "@/constants/ui_translations";

export function SchoolDisplayName({
  locale,
  nameEn,
  nameZh,
}: {
  locale: Locale;
  nameEn: string;
  nameZh?: string | null;
}) {
  const { primary, secondary } = getSchoolDisplayNameParts({
    locale,
    nameEn,
    nameZh,
  });

  if (!secondary) return <>{primary}</>;

  return (
    <>
      <span>{primary}</span>{" "}
      <span className="text-xs font-normal text-slate-500">({secondary})</span>
    </>
  );
}
