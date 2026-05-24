/**
 * One-off: fetch TBC school sourceUrls and extract May 23–Jun 2 2026 open house dates.
 * Run: node scripts/scrape-open-house-dates.mjs
 */
import fs from "fs";
import https from "https";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "../lib/school-open-houses.ts");
const OUT = path.join(__dirname, "open-house-scrape-results.json");

const RANGE_START = new Date("2026-05-23T00:00:00+08:00");
const RANGE_END = new Date("2026-06-02T23:59:59+08:00");

const DAY_MAP = {
  sun: 0, sunday: 0, 日: 0,
  mon: 1, monday: 1, 一: 1,
  tue: 2, tues: 2, tuesday: 2, 二: 2,
  wed: 3, wednesday: 3, 三: 3,
  thu: 4, thur: 4, thurs: 4, thursday: 4, 四: 4,
  fri: 5, friday: 5, 五: 5,
  sat: 6, saturday: 6, 六: 6,
};

function fetchUrl(url, redirects = 0) {
  return new Promise((resolve) => {
    if (redirects > 5) return resolve("");
    const mod = url.startsWith("https") ? https : http;
    const req = mod.get(
      url,
      { timeout: 20000, headers: { "User-Agent": "Mozilla/5.0 dsalink-scrape/1.0" } },
      (res) => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
          const next = new URL(res.headers.location, url).href;
          res.resume();
          return resolve(fetchUrl(next, redirects + 1));
        }
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => resolve(d));
      },
    );
    req.on("error", () => resolve(""));
    req.on("timeout", () => {
      req.destroy();
      resolve("");
    });
  });
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");
}

function parseTimeRange(text) {
  const m = text.match(
    /(\d{1,2})[:.](\d{2})\s*(am|pm)?\s*[-–—to]+\s*(\d{1,2})[:.](\d{2})\s*(am|pm)?/i,
  );
  if (!m) return null;
  let h1 = parseInt(m[1], 10);
  const min1 = m[2];
  let ap1 = (m[3] || "").toLowerCase();
  let h2 = parseInt(m[4], 10);
  const min2 = m[5];
  let ap2 = (m[6] || m[3] || "").toLowerCase();
  if (ap1 === "pm" && h1 < 12) h1 += 12;
  if (ap1 === "am" && h1 === 12) h1 = 0;
  if (ap2 === "pm" && h2 < 12) h2 += 12;
  if (ap2 === "am" && h2 === 12) h2 = 0;
  if (!ap1 && !ap2 && h1 <= 12 && h2 <= 12) {
    /* 24h style */
  }
  return {
    start: `${String(h1).padStart(2, "0")}:${min1}`,
    end: `${String(h2).padStart(2, "0")}:${min2}`,
  };
}

function isoFromParts(year, month, day) {
  const d = new Date(`${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T12:00:00+08:00`);
  if (d < RANGE_START || d > RANGE_END) return null;
  return {
    date: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    dayOfWeek: d.getDay(),
  };
}

function extractDates(text) {
  const found = [];
  const patterns = [
    // 23 May 2026, 23 May, May 23 2026, May 23
    /(\d{1,2})\s+(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s*,?\s*(\d{4})?/gi,
    /(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2})(?:st|nd|rd|th)?\s*,?\s*(\d{4})?/gi,
    // 2026-05-23
    /2026-0?5-(2[3-9]|3[01])|2026-06-0[12]/g,
    // 23/05/2026
    /(\d{1,2})\/0?5\/2026/g,
    // 5月23日
    /5\s*月\s*(\d{1,2})\s*日/g,
  ];

  const monthNum = {
    jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3,
    apr: 4, april: 4, may: 5, jun: 6, june: 6, jul: 7, july: 7,
    aug: 8, august: 8, sep: 9, september: 9, oct: 10, october: 10,
    nov: 11, november: 11, dec: 12, december: 12,
  };

  for (const iso of text.match(/2026-0?5-(2[3-9]|3[01])|2026-06-0[12]/g) || []) {
    const norm = iso.replace(/0?5/, "05").replace(/0?6/, "06");
    const parts = norm.split("-");
    const r = isoFromParts(2026, parseInt(parts[1], 10), parseInt(parts[2], 10));
    if (r) found.push({ ...r, snippet: iso });
  }

  let m;
  const re1 = /(\d{1,2})\s+(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s*,?\s*(\d{4})?/gi;
  while ((m = re1.exec(text))) {
    const day = parseInt(m[1], 10);
    const mon = monthNum[m[2].toLowerCase()];
    const year = m[3] ? parseInt(m[3], 10) : 2026;
    if (mon !== 5 && mon !== 6) continue;
    const r = isoFromParts(year, mon, day);
    if (r) found.push({ ...r, snippet: m[0] });
  }

  const re2 = /(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2})(?:st|nd|rd|th)?\s*,?\s*(\d{4})?/gi;
  while ((m = re2.exec(text))) {
    const mon = monthNum[m[1].toLowerCase()];
    const day = parseInt(m[2], 10);
    const year = m[3] ? parseInt(m[3], 10) : 2026;
    if (mon !== 5 && mon !== 6) continue;
    const r = isoFromParts(year, mon, day);
    if (r) found.push({ ...r, snippet: m[0] });
  }

  const reZh = /5\s*月\s*(\d{1,2})\s*日/g;
  while ((m = reZh.exec(text))) {
    const day = parseInt(m[1], 10);
    const r = isoFromParts(2026, 5, day);
    if (r) found.push({ ...r, snippet: m[0] });
  }

  // dedupe by date
  const byDate = new Map();
  for (const f of found) byDate.set(f.date, f);
  return [...byDate.values()];
}

function detectMode(text) {
  if (/e-?open\s*house|virtual|online|microsoft teams|zoom|livestream|webinar/i.test(text))
    return "online";
  if (/on-?site|campus|visit us|walk-?in/i.test(text)) return "on-site";
  return "on-site";
}

function parseEntries(tsContent) {
  const blocks = tsContent.split(/\n  \},\n/).map((b, i, arr) => {
    if (i < arr.length - 1) return b + "\n  },\n";
    return b;
  });
  const entries = [];
  const re = /id: "([^"]+)"[\s\S]*?nameEn: "([^"]+)"[\s\S]*?sourceUrl: "([^"]+)"[\s\S]*?dateDisplayEn: ([^,\n]+)/g;
  let m;
  const src = tsContent;
  while ((m = re.exec(src))) {
    const blockStart = src.lastIndexOf("{", m.index);
    const blockEnd = src.indexOf("},", m.index);
    const block = src.slice(blockStart, blockEnd);
    const tbc = m[4].includes("TBC");
    const date = block.match(/date: "([^"]+)"/)?.[1];
    entries.push({
      id: m[1],
      nameEn: m[2],
      sourceUrl: m[3],
      tbc,
      date,
      block,
    });
  }
  return entries;
}

async function main() {
  const ts = fs.readFileSync(SRC, "utf8");
  const entries = parseEntries(ts);
  const tbcEntries = entries.filter((e) => e.tbc);
  console.log("TBC entries:", tbcEntries.length);

  const results = [];
  for (let i = 0; i < tbcEntries.length; i++) {
    const e = tbcEntries[i];
    process.stdout.write(`[${i + 1}/${tbcEntries.length}] ${e.id}... `);
    const html = await fetchUrl(e.sourceUrl);
    const text = stripHtml(html);
    const dates = extractDates(text);
    const time = parseTimeRange(text);
    const mode = detectMode(text);
    const hit = dates.length > 0;
    console.log(hit ? dates.map((d) => d.date).join(", ") : "—");
    if (hit) {
      results.push({
        id: e.id,
        nameEn: e.nameEn,
        sourceUrl: e.sourceUrl,
        dates,
        time,
        mode,
        sample: text.slice(0, 500),
      });
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  fs.writeFileSync(OUT, JSON.stringify(results, null, 2));
  console.log("\nWrote", OUT, "confirmed:", results.length);
}

main().catch(console.error);
