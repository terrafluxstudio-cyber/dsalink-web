export type FeaturedSchool = {
  nameEn: string;
  nameZh: string;
  badge: string;
  dateEn: string;
  dateZh: string;
  confirmed: boolean;
  dateISO: string;
  url: string;
  thisWeekend?: boolean;
};

const FALLBACK_SCHOOLS: FeaturedSchool[] = [
  {
    nameEn: "Hwa Chong Institution",
    nameZh: "华侨中学",
    badge: "IP · Independent",
    dateEn: "Sat 23 May 2026 · 08:00–13:00",
    dateZh: "2026年5月23日（周六）· 08:00–13:00",
    confirmed: true,
    dateISO: "2026-05-23",
    url: "https://www.hci.edu.sg/",
  },
  {
    nameEn: "Raffles Girls' School",
    nameZh: "莱佛士女子中学",
    badge: "IP · Independent",
    dateEn: "Sat 23 May 2026 · 08:30–13:30",
    dateZh: "2026年5月23日（周六）· 08:30–13:30",
    confirmed: true,
    dateISO: "2026-05-23",
    url: "https://openhouse.rgs.edu.sg/",
  },
  {
    nameEn: "Victoria School",
    nameZh: "维多利亚学校",
    badge: "IP · Autonomous",
    dateEn: "Sat 23 May 2026 · 08:00–12:00",
    dateZh: "2026年5月23日（周六）· 08:00–12:00",
    confirmed: true,
    dateISO: "2026-05-23",
    url: "https://www.victoria.moe.edu.sg/",
  },
];

function buildSheetUrl(): string | null {
  const id = process.env.FEATURED_SCHOOLS_SHEET_ID;
  const tab = process.env.FEATURED_SCHOOLS_SHEET_TAB ?? "FeaturedSchools";

  if (!id) {
    return null;
  }

  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tab)}`;
}

function parseCSVRows(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < csv.length; i += 1) {
    const char = csv[i];
    const next = csv[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(current.trim());
      current = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      row.push(current.trim());
      current = "";
      if (row.some((value) => value.length > 0)) {
        rows.push(row);
      }
      row = [];
      continue;
    }

    current += char;
  }

  row.push(current.trim());
  if (row.some((value) => value.length > 0)) {
    rows.push(row);
  }

  return rows;
}

function parseBoolean(value: string | undefined): boolean {
  return value?.trim().toUpperCase() === "TRUE";
}

function parseCSV(csv: string): FeaturedSchool[] {
  const rows = parseCSVRows(csv);

  if (rows.length < 2) {
    return [];
  }

  return rows.slice(1).flatMap((cols) => {
    const [
      nameEn,
      nameZh,
      badge,
      dateEn,
      dateZh,
      confirmedRaw,
      dateISO,
      url,
      thisWeekendRaw,
    ] = cols;

    if (!nameEn) {
      return [];
    }

    return [
      {
        nameEn,
        nameZh: nameZh ?? "",
        badge: badge ?? "",
        dateEn: dateEn ?? "",
        dateZh: dateZh ?? "",
        confirmed: parseBoolean(confirmedRaw),
        dateISO: dateISO ?? "",
        url: url ?? "",
        thisWeekend: parseBoolean(thisWeekendRaw) || undefined,
      },
    ];
  });
}

export async function fetchFeaturedSchools(): Promise<FeaturedSchool[]> {
  const sheetUrl = buildSheetUrl();

  if (!sheetUrl) {
    return FALLBACK_SCHOOLS;
  }

  try {
    const res = await fetch(sheetUrl, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`[featured-schools] Sheet fetch failed: ${res.status}`);
      return FALLBACK_SCHOOLS;
    }

    const csv = await res.text();
    const parsed = parseCSV(csv);
    return parsed.length > 0 ? parsed : FALLBACK_SCHOOLS;
  } catch (err) {
    console.warn("[featured-schools] Sheet unreachable, using fallback", err);
    return FALLBACK_SCHOOLS;
  }
}
