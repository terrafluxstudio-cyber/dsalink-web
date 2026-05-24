/**
 * v2: extract open house dates only when near open-house keywords (not DSA deadline).
 */
import fs from "fs";
import https from "https";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, "../lib/school-open-houses.ts");
const OUT = path.join(__dirname, "open-house-scrape-results-v2.json");

const OH_KEYWORDS =
  /open\s*house|e-?open\s*house|school\s+experience|experience\s+day|virtual\s+tour|campus\s+tour|visit\s+(our\s+)?school|oh\s*20\d\d/i;

const DEADLINE_CTX =
  /application\s+(opens|closes|period|window)|dsa-?sec\s+portal|submit\s+(your\s+)?application|6\s+may.*2\s+june|closes?\s+on|closing\s+date|4:30\s*pm/i;

function fetchUrl(url, redirects = 0) {
  return new Promise((resolve) => {
    if (redirects > 5) return resolve("");
    const mod = url.startsWith("https") ? https : http;
    const req = mod.get(
      url,
      { timeout: 20000, headers: { "User-Agent": "Mozilla/5.0 dsalink-scrape/2.0" } },
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
    .replace(/\s+/g, " ");
}

const monthNum = {
  jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3,
  apr: 4, april: 4, may: 5, jun: 6, june: 6,
};

function inRange(iso) {
  const d = new Date(`${iso}T12:00:00+08:00`);
  return d >= new Date("2026-05-23T00:00:00+08:00") && d <= new Date("2026-06-02T23:59:59+08:00");
}

function extractDateSnippets(text) {
  const snippets = [];
  const patterns = [
    { re: /(\d{1,2})\s+(May|June)\s+(\d{4})/gi, fn: (m) => `${m[3]}-${monthNum[m[2].toLowerCase()]}-${m[1].padStart(2, "0")}` },
    { re: /(May|June)\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{4})/gi, fn: (m) => `${m[3]}-${monthNum[m[1].toLowerCase()]}-${m[2].padStart(2, "0")}` },
    { re: /2026-0?5-(2[3-9]|3[01])|2026-06-0[12]/g, fn: (m) => m[0].replace(/-0(\d)/g, "-$1") },
    { re: /5\s*月\s*(\d{1,2})\s*日/gi, fn: (m) => `2026-05-${m[1].padStart(2, "0")}` },
    { re: /(\d{1,2})\/0?5\/2026/g, fn: (m) => {
      const d = m[1].padStart(2, "0");
      return `2026-05-${d}`;
    }},
  ];
  for (const { re, fn } of patterns) {
    let m;
    while ((m = re.exec(text))) {
      const iso = fn(m);
      if (inRange(iso)) snippets.push({ iso, raw: m[0], index: m.index });
    }
  }
  return snippets;
}

function scoreContext(text, index) {
  const win = text.slice(Math.max(0, index - 200), index + 200);
  let score = 0;
  if (OH_KEYWORDS.test(win)) score += 3;
  if (DEADLINE_CTX.test(win)) score -= 4;
  if (/sat|sun|mon|tue|wed|thu|fri|am|pm|:\d{2}|venue|register|registration/i.test(win)) score += 1;
  return { score, window: win.trim() };
}

function parseTimeNear(text, index) {
  const win = text.slice(index, index + 120);
  const m = win.match(/(\d{1,2})[:.](\d{2})\s*(am|pm)?\s*[-–—to]+\s*(\d{1,2})[:.](\d{2})\s*(am|pm)?/i);
  if (!m) return null;
  let h1 = parseInt(m[1], 10);
  let h2 = parseInt(m[4], 10);
  if ((m[3] || "").toLowerCase() === "pm" && h1 < 12) h1 += 12;
  if ((m[6] || m[3] || "").toLowerCase() === "pm" && h2 < 12) h2 += 12;
  return { start: `${String(h1).padStart(2, "0")}:${m[2]}`, end: `${String(h2).padStart(2, "0")}:${m[5]}` };
}

function detectMode(text) {
  if (/e-?open\s*house|virtual|online|microsoft teams|zoom|webinar/i.test(text)) return "online";
  return "on-site";
}

function parseEntries(tsContent) {
  const entries = [];
  const re = /id: "([^"]+)"[\s\S]*?nameEn: "([^"]+)"[\s\S]*?sourceUrl: "([^"]+)"[\s\S]*?dateDisplayEn: ([^,\n]+)/g;
  let m;
  while ((m = re.exec(tsContent))) {
    if (!m[4].includes("TBC")) continue;
    entries.push({ id: m[1], nameEn: m[2], sourceUrl: m[3] });
  }
  return entries;
}

async function main() {
  const ts = fs.readFileSync(SRC, "utf8");
  const entries = parseEntries(ts);
  const results = [];

  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    process.stdout.write(`[${i + 1}/${entries.length}] ${e.id}... `);
    const html = await fetchUrl(e.sourceUrl);
    const text = stripHtml(html);
    const snippets = extractDateSnippets(text);
    const scored = snippets
      .map((s) => ({ ...s, ...scoreContext(text, s.index), time: parseTimeNear(text, s.index) }))
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score);

    const best = scored[0];
    if (best) {
      console.log(`${best.iso} (score ${best.score})`);
      results.push({
        id: e.id,
        nameEn: e.nameEn,
        sourceUrl: e.sourceUrl,
        date: best.iso,
        time: best.time,
        mode: detectMode(best.window + text.slice(best.index, best.index + 300)),
        context: best.window,
        score: best.score,
      });
    } else {
      console.log("—");
    }
    await new Promise((r) => setTimeout(r, 250));
  }

  fs.writeFileSync(OUT, JSON.stringify(results, null, 2));
  console.log("\nConfirmed open houses:", results.length);
}

main().catch(console.error);
