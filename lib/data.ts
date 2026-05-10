/**
 * May 2026 MOE secondary school open house dates (DSA season).
 * Event details are transcribed from the site editor’s reference calendar; confirm on each school’s official page.
 */

export type OpenHouseMode = "on-site" | "online";

export type OpenHouseEvent = {
  id: string;
  /** ISO calendar date (Singapore), e.g. 2026-05-09 */
  date: string;
  nameEn: string;
  nameZh: string;
  /** Display time (English) */
  timeEn: string;
  /** Display time (Chinese) */
  timeZh: string;
  address: string;
  mode: OpenHouseMode;
  /** Official school open house / admissions landing page (verified where possible). */
  sourceUrl: string;
};

export const OPEN_HOUSE_EVENTS: OpenHouseEvent[] = [
  {
    id: "raffles-institution",
    date: "2026-05-09",
    nameEn: "Raffles Institution (Secondary)",
    nameZh: "莱佛士书院（中学部）",
    timeEn: "08:00–13:00",
    timeZh: "08:00–13:00",
    address: "1 Raffles Institution Lane, Singapore 575954",
    mode: "on-site",
    sourceUrl: "https://www.ri.edu.sg/admissions/year-1-admissions/",
  },
  {
    id: "chij-st-nicholas",
    date: "2026-05-09",
    nameEn: "CHIJ St. Nicholas Girls' School (Secondary)",
    nameZh: "圣尼各拉女校（中学部）",
    timeEn: "To be announced",
    timeZh: "待公布",
    address: "501 Ang Mo Kio Street 13, Singapore 569405",
    mode: "on-site",
    sourceUrl: "https://www.chijsngsec.moe.edu.sg/",
  },
  {
    id: "national-junior-college",
    date: "2026-05-09",
    nameEn: "National Junior College (Secondary Section)",
    nameZh: "国家初级学院（中学部）",
    timeEn: "16:00–20:00",
    timeZh: "16:00–20:00",
    address: "37 Hillcrest Road, Singapore 288913",
    mode: "on-site",
    sourceUrl: "https://www.nationaljc.moe.edu.sg/resources/events/",
  },
  {
    id: "plmgss",
    date: "2026-05-09",
    nameEn: "Paya Lebar Methodist Girls' School (Secondary)",
    nameZh: "卫理公会女子中学",
    timeEn: "09:00–11:00",
    timeZh: "09:00–11:00",
    address: "11 Lorong Ah Soo, Singapore 536741",
    mode: "on-site",
    sourceUrl: "https://www.plmgss.moe.edu.sg/plmgs-sec-open-house/",
  },
  {
    id: "catholic-high",
    date: "2026-05-16",
    nameEn: "Catholic High School",
    nameZh: "公教中学",
    timeEn: "09:00–12:00",
    timeZh: "09:00–12:00",
    address: "9 Bishan Street 22, Singapore 579767",
    mode: "on-site",
    sourceUrl:
      "https://www.catholichigh.moe.edu.sg/prospective-students/openhouse/",
  },
  {
    id: "raffles-girls",
    date: "2026-05-23",
    nameEn: "Raffles Girls' School",
    nameZh: "莱佛士女子中学",
    timeEn: "08:30–13:30",
    timeZh: "08:30–13:30",
    address: "20 Anderson Road, Singapore 259984",
    mode: "on-site",
    sourceUrl: "https://openhouse.rgs.edu.sg/",
  },
  {
    id: "hwa-chong",
    date: "2026-05-23",
    nameEn: "Hwa Chong Institution",
    nameZh: "华侨中学",
    timeEn: "08:00–13:00",
    timeZh: "08:00–13:00",
    address: "61 Bukit Timah Road, Singapore 269734",
    mode: "on-site",
    sourceUrl: "https://www.openhouse.hci.edu.sg/",
  },
  {
    id: "dunman-high",
    date: "2026-05-23",
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
    nameEn: "St. Joseph's Institution",
    nameZh: "圣若瑟书院",
    timeEn: "09:00–16:00",
    timeZh: "09:00–16:00",
    address: "38 Malcolm Road, Singapore 308274",
    mode: "on-site",
    sourceUrl: "https://openhouse.sji.edu.sg/",
  },
  {
    id: "victoria-school",
    date: "2026-05-23",
    nameEn: "Victoria School",
    nameZh: "维多利亚中学",
    timeEn: "08:00–13:00",
    timeZh: "08:00–13:00",
    address: "2 Siglap Link, Singapore 448880",
    mode: "on-site",
    sourceUrl:
      "https://www.victoria.moe.edu.sg/prospective-students/openhouse-2026/",
  },
  {
    id: "cedar-girls",
    date: "2026-05-30",
    nameEn: "Cedar Girls' Secondary School",
    nameZh: "四德女子中学",
    timeEn: "09:00–12:30",
    timeZh: "09:00–12:30",
    address: "1 Cedar Avenue, Singapore 349692",
    mode: "on-site",
    sourceUrl: "https://go.gov.sg/cgssopenhouse2026",
  },
];

/** Calendar date in Asia/Singapore as `YYYY-MM-DD` (for comparisons with `OpenHouseEvent.date`). */
export function toSingaporeDateKey(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/**
 * Next upcoming open houses (Singapore calendar), up to `limit`.
 * If every event is in the past, returns the last `limit` entries (most recent dates).
 */
export function getPreviewOpenHouseEvents(
  limit = 3,
  reference: Date = new Date(),
): OpenHouseEvent[] {
  const sorted = [...OPEN_HOUSE_EVENTS].sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return a.nameEn.localeCompare(b.nameEn);
  });
  const refKey = toSingaporeDateKey(reference);
  const upcoming = sorted.filter((ev) => ev.date >= refKey);
  if (upcoming.length >= limit) return upcoming.slice(0, limit);
  if (upcoming.length > 0) return upcoming;
  return sorted.slice(-Math.min(limit, sorted.length));
}

export function openHouseEventsByDate(): Map<string, OpenHouseEvent[]> {
  const sorted = [...OPEN_HOUSE_EVENTS].sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return a.nameEn.localeCompare(b.nameEn);
  });
  const map = new Map<string, OpenHouseEvent[]>();
  for (const ev of sorted) {
    const list = map.get(ev.date) ?? [];
    list.push(ev);
    map.set(ev.date, list);
  }
  return map;
}
