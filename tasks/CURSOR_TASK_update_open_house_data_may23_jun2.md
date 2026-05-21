# CURSOR TASK: Update Open House Data (May 23–June 2, 2026)

## Goal

Research ALL Singapore secondary school open houses happening **May 23–June 2, 2026** using official school websites only. Update `lib/school-open-houses.ts` with confirmed dates, times, and mode. Do not use SGSchoolKaki or any third-party aggregator — official school websites only.

---

## Context

`lib/school-open-houses.ts` contains a `SCHOOL_OPEN_HOUSES` array with entries for every Singapore secondary school. Most TBC entries have a placeholder `date: "2026-05-31"` and generic `timeEn: "May 2026 (TBC...)"`. This task replaces TBC entries with confirmed data where available.

Logos are handled automatically via `lib/school-logo-urls.ts` keyed by school `id`. No logo changes needed.

---

## Step 1: Research All TBC Entries

Find every entry in `lib/school-open-houses.ts` where `dateDisplayEn` is `"May 2026 (TBC)"` or similar — **including all schools regardless of assumed date**.

For EVERY such entry, visit the `sourceUrl` from the file and look for:
- Any open house / school experience day / DSA event page
- Confirmed date between May 23–June 2, 2026
- Start time, end time
- Mode: online or on-site

Also check schools with confirmed dates (non-TBC) in this range — verify the details are still accurate on the official website.

**If confirmed date found in May 23–June 2 range:** update the entry using the format below.  
**If no confirmed info found:** leave entry unchanged (do not guess).

---

## Step 2: Search for Missing Schools

Search for any Singapore secondary schools that have confirmed open houses May 23–June 2, 2026 that are **NOT currently in** `lib/school-open-houses.ts`.

Search approach:
- Use WebSearch: `"open house" "2026" site:[schoolname].moe.edu.sg`
- Check MOE SchoolFinder and cross-reference with current file entries
- Focus on IP schools, SAP schools, autonomous schools, DSA-only schools

If a confirmed school is missing, add a new entry (see format below).

---

## Data Format

Every entry must follow this exact TypeScript structure:

```typescript
{
  id: "kebab-case-school-name",           // matches lib/school-logo-urls.ts key
  date: "2026-05-23",                     // ISO date of event
  startsAt: "2026-05-23T09:00:00+08:00",  // ISO 8601 with SGT offset
  endsAt: "2026-05-23T12:00:00+08:00",    // ISO 8601 with SGT offset
  nameEn: "School Name",
  nameZh: "学校中文名",
  timeEn: "Sat, 23 May, 9:00am–12:00pm (On-site)",  // human-readable
  timeZh: "5月23日（六）上午9:00–中午12:00（实地）",
  address: "Full address, Singapore XXXXXX",
  mode: "on-site",                        // "on-site" | "online"
  sourceUrl: "https://official-school-url/dsa-page",
  region: "East",                         // "North"|"South"|"East"|"West"|"Central"
  schoolType: "Government",              // "Government"|"Government-aided"|"Independent"|"SAP"|"IP"
  isPopular: false,
  dateDisplayEn: "Sat, 23 May",
  dateDisplayZh: "5月23日（六）",
}
```

### Day-of-week reference (May–June 2026):
- May 23 = Saturday (六)
- May 24 = Sunday (日)
- May 25 = Monday (一)
- May 26 = Tuesday (二)
- May 27 = Wednesday (三)
- May 28 = Thursday (四)
- May 29 = Friday (五)
- May 30 = Saturday (六)
- May 31 = Sunday (日)
- June 1 = Monday (一)
- June 2 = Tuesday (二)

### timeZh mode words:
- On-site → 实地
- Online → 线上

### timeZh time format:
- am → 上午
- pm → 下午
- 12:00pm → 中午12:00
- 1:00pm → 下午1:00

---

## Source Rules

1. **Official school websites only** (`.moe.edu.sg` domains or known independent school domains like `hci.edu.sg`, `rgs.edu.sg`, `sji.edu.sg`, `sst.edu.sg`, `sota.edu.sg`, `nushigh.edu.sg`, `sportsschool.edu.sg`)
2. **Never use** SGSchoolKaki, SchoolBag.sg, or any aggregator
3. If school website has an image/poster with the schedule, read it carefully
4. If the website says "check back later" or has no confirmed date, skip it

---

## Files to Edit

- `lib/school-open-houses.ts` — only file to edit

Do NOT edit:
- `lib/school-logo-urls.ts`
- `lib/open-house-types.ts`
- Any component files

---

## After Editing

Run:
```bash
cd ~/Desktop/dsalink-web
npx tsc --noEmit
```

If no TypeScript errors, the task is complete. Report back:
1. Which TBC entries were updated (school name + new date/time)
2. Which new schools were added (if any)
3. Which entries remain TBC (couldn't find confirmed info)
