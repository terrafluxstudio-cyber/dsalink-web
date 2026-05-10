/**
 * Curated secondary open-house rows for the DSA season (calendar + official deep links).
 * Prefer school DSA or open-house paths over bare homepages; confirm dates on each site.
 */

export type OpenHouseMode = "on-site" | "online";

/** Lifecycle label from {@link resolveOpenHouseStatus} (compute at render; do not store on rows). */
export type OpenHouseStatus = "Upcoming" | "Ongoing" | "Finished";

export type SchoolOpenHouse = {
  id: string;
  /** Calendar bucket for grouping (Singapore local date), e.g. 2026-05-23 */
  date: string;
  /** Inclusive start instant, SGT (ISO 8601 with +08:00). */
  startsAt: string;
  /** Inclusive end instant, SGT (ISO 8601 with +08:00). */
  endsAt: string;
  nameEn: string;
  nameZh: string;
  timeEn: string;
  timeZh: string;
  address: string;
  mode: OpenHouseMode;
  /**
   * Official deep link — DSA or open-house/admissions path where available.
   */
  sourceUrl: string;
};

export const SCHOOL_OPEN_HOUSES: SchoolOpenHouse[] = [
  {
    id: "nanyang-girls",
    date: "2026-04-11",
    startsAt: "2026-04-11T08:00:00+08:00",
    endsAt: "2026-04-11T14:00:00+08:00",
    nameEn: "Nanyang Girls' High School",
    nameZh: "南洋女子中学",
    timeEn: "08:00–14:00",
    timeZh: "08:00–14:00",
    address: "2 Linden Drive, Singapore 288794",
    mode: "on-site",
    sourceUrl: "https://en.nygh.moe.edu.sg/direct-school-admission-dsa-2026/",
  },
  {
    id: "acs-independent",
    date: "2026-04-12",
    startsAt: "2026-04-12T08:30:00+08:00",
    endsAt: "2026-04-12T12:30:00+08:00",
    nameEn: "Anglo-Chinese School (Independent)",
    nameZh: "英华自主中学",
    timeEn: "08:30–12:30",
    timeZh: "08:30–12:30",
    address: "121 Dover Road, Singapore 139650",
    mode: "on-site",
    sourceUrl: "https://www.acsindep.moe.edu.sg/admissions/dsa-year-1/",
  },
  {
    id: "raffles-institution",
    date: "2026-05-09",
    startsAt: "2026-05-09T08:00:00+08:00",
    endsAt: "2026-05-09T13:00:00+08:00",
    nameEn: "Raffles Institution (Secondary)",
    nameZh: "莱佛士书院（中学部）",
    timeEn: "08:00–13:00",
    timeZh: "08:00–13:00",
    address: "1 Raffles Institution Lane, Singapore 575954",
    mode: "on-site",
    sourceUrl:
      "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
  },
  {
    id: "chij-st-nicholas",
    date: "2026-05-09",
    startsAt: "2026-05-09T08:30:00+08:00",
    endsAt: "2026-05-09T13:00:00+08:00",
    nameEn: "CHIJ St. Nicholas Girls' School (Secondary)",
    nameZh: "圣尼各拉女校（中学部）",
    timeEn: "08:30–13:00",
    timeZh: "08:30–13:00",
    address: "501 Ang Mo Kio Street 13, Singapore 569405",
    mode: "on-site",
    sourceUrl:
      "https://www.chijstnicholasgirls.moe.edu.sg/want-to-join-sngs-via-dsa-click-here-to-find-out-more/",
  },
  {
    id: "national-junior-college",
    date: "2026-05-09",
    startsAt: "2026-05-09T16:00:00+08:00",
    endsAt: "2026-05-09T20:00:00+08:00",
    nameEn: "National Junior College (Secondary / IP)",
    nameZh: "国家初级学院（中学部 / IP）",
    timeEn: "16:00–20:00",
    timeZh: "16:00–20:00",
    address: "37 Hillcrest Road, Singapore 288913",
    mode: "on-site",
    sourceUrl: "https://www.nationaljc.moe.edu.sg/admissions/ip-dsa/",
  },
  {
    id: "catholic-high",
    date: "2026-05-16",
    startsAt: "2026-05-16T09:00:00+08:00",
    endsAt: "2026-05-16T12:00:00+08:00",
    nameEn: "Catholic High School",
    nameZh: "公教中学",
    timeEn: "09:00–12:00",
    timeZh: "09:00–12:00",
    address: "9 Bishan Street 22, Singapore 579767",
    mode: "on-site",
    sourceUrl:
      "https://www.catholichigh.moe.edu.sg/prospective-students/Sec-Admission/direct-school-admission/",
  },
  {
    id: "raffles-girls",
    date: "2026-05-23",
    startsAt: "2026-05-23T08:30:00+08:00",
    endsAt: "2026-05-23T13:30:00+08:00",
    nameEn: "Raffles Girls' School",
    nameZh: "莱佛士女子中学",
    timeEn: "08:30–13:30",
    timeZh: "08:30–13:30",
    address: "20 Anderson Road, Singapore 259984",
    mode: "on-site",
    sourceUrl: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
  },
  {
    id: "hwa-chong",
    date: "2026-05-23",
    startsAt: "2026-05-23T08:00:00+08:00",
    endsAt: "2026-05-23T13:00:00+08:00",
    nameEn: "Hwa Chong Institution",
    nameZh: "华侨中学",
    timeEn: "08:00–13:00",
    timeZh: "08:00–13:00",
    address: "661 Bukit Timah Road, Singapore 269734",
    mode: "on-site",
    sourceUrl: "https://www.openhouse.hci.edu.sg/direct-school-admission",
  },
  {
    id: "dunman-high",
    date: "2026-05-23",
    startsAt: "2026-05-23T08:00:00+08:00",
    endsAt: "2026-05-23T23:59:00+08:00",
    nameEn: "Dunman High School",
    nameZh: "德明政府中学",
    timeEn: "e-Open House (online)",
    timeZh: "线上校园开放日",
    address: "10 Tanjong Rhu Road, Singapore 436895",
    mode: "online",
    sourceUrl: "https://dhsopenhouse.com/",
  },
  {
    id: "sji",
    date: "2026-05-23",
    startsAt: "2026-05-23T09:00:00+08:00",
    endsAt: "2026-05-23T16:00:00+08:00",
    nameEn: "St. Joseph's Institution",
    nameZh: "圣若瑟书院",
    timeEn: "09:00–16:00",
    timeZh: "09:00–16:00",
    address: "38 Malcolm Road, Singapore 308274",
    mode: "on-site",
    sourceUrl: "https://www.sji.edu.sg/admission/dsa-at-sji",
  },
  {
    id: "victoria-school",
    date: "2026-05-23",
    startsAt: "2026-05-23T08:00:00+08:00",
    endsAt: "2026-05-23T13:00:00+08:00",
    nameEn: "Victoria School",
    nameZh: "维多利亚中学",
    timeEn: "08:00–13:00",
    timeZh: "08:00–13:00",
    address: "2 Siglap Link, Singapore 448880",
    mode: "on-site",
    sourceUrl:
      "https://www.victoria.moe.edu.sg/prospective-students/admission-to-VS/direct-school-admissions-to-sec-1-year-1/",
  },
  {
    id: "cedar-girls",
    date: "2026-05-30",
    startsAt: "2026-05-30T09:00:00+08:00",
    endsAt: "2026-05-30T12:30:00+08:00",
    nameEn: "Cedar Girls' Secondary School",
    nameZh: "四德女子中学",
    timeEn: "09:00–12:30",
    timeZh: "09:00–12:30",
    address: "1 Cedar Avenue, Singapore 349692",
    mode: "on-site",
    sourceUrl: "https://www.cedargirlssec.moe.edu.sg/admissions/dsa-year-1-2027/",
  },
];

export function resolveOpenHouseStatus(
  ev: Pick<SchoolOpenHouse, "startsAt" | "endsAt">,
  reference: Date = new Date(),
): OpenHouseStatus {
  const start = Date.parse(ev.startsAt);
  const end = Date.parse(ev.endsAt);
  const t = reference.getTime();
  if (t < start) return "Upcoming";
  if (t <= end) return "Ongoing";
  return "Finished";
}

/** Row with computed `status` for components that prefer a flat field. */
export type SchoolOpenHouseHydrated = SchoolOpenHouse & {
  status: OpenHouseStatus;
};

export function withOpenHouseStatus(
  ev: SchoolOpenHouse,
  reference: Date = new Date(),
): SchoolOpenHouseHydrated {
  return { ...ev, status: resolveOpenHouseStatus(ev, reference) };
}

/** Calendar date in Asia/Singapore as `YYYY-MM-DD` (for comparisons with `SchoolOpenHouse.date`). */
export function toSingaporeDateKey(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/**
 * Next sessions that are not finished yet, up to `limit`.
 * If every session has ended, returns the last `limit` rows (most recent).
 */
export function getPreviewOpenHouseEvents(
  limit = 3,
  reference: Date = new Date(),
): SchoolOpenHouse[] {
  const sorted = [...SCHOOL_OPEN_HOUSES].sort((a, b) =>
    a.startsAt.localeCompare(b.startsAt),
  );
  const active = sorted.filter(
    (ev) => resolveOpenHouseStatus(ev, reference) !== "Finished",
  );
  if (active.length >= limit) return active.slice(0, limit);
  if (active.length > 0) return active;
  return sorted.slice(-Math.min(limit, sorted.length));
}

export function openHouseEventsByDate(): Map<string, SchoolOpenHouse[]> {
  const sorted = [...SCHOOL_OPEN_HOUSES].sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return a.startsAt.localeCompare(b.startsAt);
  });
  const map = new Map<string, SchoolOpenHouse[]>();
  for (const ev of sorted) {
    const list = map.get(ev.date) ?? [];
    list.push(ev);
    map.set(ev.date, list);
  }
  return map;
}
