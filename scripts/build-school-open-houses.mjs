/**
 * Builds `lib/school-open-houses.ts` from data.gov.sg + bilingual names table.
 * Run: node scripts/build-school-open-houses.mjs
 */
import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "lib", "school-open-houses.ts");
const CACHE = path.join(__dirname, "dsa-source-cache.json");
const ZH_TABLE = path.join(__dirname, "secondary-school-zh-en.txt");

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: { "User-Agent": "Mozilla/5.0 dsalink-web-build/1.0" },
          timeout: 30000,
        },
        (res) => {
          let d = "";
          res.on("data", (c) => (d += c));
          res.on("end", () => {
            try {
              resolve(JSON.parse(d));
            } catch (e) {
              reject(e);
            }
          });
        },
      )
      .on("error", reject);
  });
}

function getBody(url) {
  return new Promise((resolve) => {
    const req = https.get(
      url,
      { timeout: 15000, headers: { "User-Agent": "Mozilla/5.0" } },
      (res) => {
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

function isSecondaryRow(r) {
  const l = String(r.mainlevel_code || "");
  return l.includes("SECONDARY") || l.startsWith("MIXED LEVEL");
}

function titleCaseSchoolName(upper) {
  let s = upper
    .toLowerCase()
    .split(/(\s+|\(|\)|\/|-)/)
    .map((part) => {
      if (/^\s+$/.test(part) || part === "(" || part === ")" || part === "/")
        return part;
      if (part === "-") return part;
      if (part.length <= 3 && part === part.toUpperCase()) return part.toUpperCase();
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");
  s = s
    .replace(/\bChij\b/g, "CHIJ")
    .replace(/\bSt\b/g, "St.")
    .replace(/\bGovt\.\b/g, "Govt.")
    .replace(/\bNgee Ann\b/g, "Ngee Ann")
    .replace(/\bNus High School\b/i, "NUS High School")
    .replace(/\bOf Mathematics And Science\b/i, "of Mathematics and Science");
  return s;
}

function normName(s) {
  return s
    .toUpperCase()
    .replace(/'/g, "")
    .replace(/\./g, "")
    .replace(/,/g, "")
    .replace(/\s+/g, " ")
    .replace(/\([^)]*\)/g, "")
    .trim();
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/\./g, "")
    .replace(/,/g, "")
    .replace(/\(/g, " ")
    .replace(/\)/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function getHost(urlRaw) {
  const url = urlRaw.startsWith("http") ? urlRaw : `https://${urlRaw}`;
  const u = new URL(url);
  let h = u.hostname.toLowerCase();
  if (!h.startsWith("www.")) h = "www." + h;
  return h;
}

function looksLikeDsa(html) {
  if (!html || html.length < 200) return false;
  if (/404 Error|Page not found/i.test(html)) return false;
  return /Direct School Admission|DSA-?Sec|DSA\s*20\d\d/i.test(html);
}

const DSA_CANDIDATES = [
  "/2026dsa/permalink/",
  "/2025dsa/permalink/",
  "/about-us/dsa/",
  "/about-us/direct-school-admission/",
  "/admissions/direct-school-admission/",
  "/admissions/dsa-year-1-2027/",
  "/admissions/ip-year-1-dsa-sec/",
  "/prospective-students/admission/direct-school-admission/",
  "/prospective-students/secondary-admission/direct-school-admission/",
  "/jh-sec-admissions/admissions/",
  "/information/dsa-integrated-programme/",
  "/key-programmes/direct-school-admission-dsa/",
  "/dsa/",
  "/direct-school-admission/",
  "/admissions/dsa-sec/",
];

const CURATED_DSA = {
  "www.acsindep.moe.edu.sg": "https://www.acsindep.moe.edu.sg/admissions/dsa-year-1/",
  "www.ri.edu.sg": "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
  "www.hci.edu.sg": "https://www.openhouse.hci.edu.sg/direct-school-admission",
  "www.sji.edu.sg": "https://www.sji.edu.sg/admission/dsa-at-sji",
  "www.nushigh.edu.sg": "https://www.nushigh.edu.sg/admissions/year-1-admissions/dsa",
  "www.sota.edu.sg": "https://www.sota.edu.sg/admissions/dsa",
  "www.sst.edu.sg": "https://www.sst.edu.sg/admissions/dsa",
  "www.sportsschool.edu.sg": "https://www.sportsschool.edu.sg/admissions/dsa",
  "www.nygh.edu.sg": "https://www.nygh.edu.sg/direct-school-admission-dsa-2026/",
  "www.rgs.edu.sg": "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
  "www.catholichigh.moe.edu.sg":
    "https://www.catholichigh.moe.edu.sg/prospective-students/Sec-Admission/direct-school-admission/",
  "www.chijstnicholasgirls.moe.edu.sg":
    "https://www.chijstnicholasgirls.moe.edu.sg/want-to-join-sngs-via-dsa-click-here-to-find-out-more/",
  "www.cedargirlssec.moe.edu.sg":
    "https://www.cedargirlssec.moe.edu.sg/admissions/dsa-year-1-2027/",
  "www.dunmanhigh.moe.edu.sg":
    "https://www.dunmanhigh.moe.edu.sg/jh-sec-admissions/admissions/",
  "www.nationaljc.moe.edu.sg": "https://www.nationaljc.moe.edu.sg/admissions/ip-dsa/",
  "www.temasekjc.moe.edu.sg":
    "https://www.temasekjc.moe.edu.sg/admissions/ip-year-1-dsa-sec/",
  "www.scgs.moe.edu.sg":
    "https://www.scgs.moe.edu.sg/prospective-students/secondary-admission/direct-school-admission/",
  "www.rivervalleyhigh.moe.edu.sg":
    "https://www.rivervalleyhigh.moe.edu.sg/information/dsa-integrated-programme/",
};

function parseZhTable(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const map = new Map();
  const rowRe = /^\| ([^|]+) \| ([^|]+) \|/gm;
  let m;
  while ((m = rowRe.exec(text))) {
    const en = m[1].trim();
    const zh = m[2].trim();
    if (en === "Secondary School" || !zh || zh === "Chinese Name") continue;
    map.set(normName(en), { zh, en });
  }
  return map;
}

const ZH_MANUAL = {
  /** normName strips parentheticals — keys are the normalised MOE directory names. */
  [normName("ST ANDREW'S SCHOOL (SECONDARY)")]: "圣安德烈中学",
  [normName("ST. MARGARET'S SCHOOL (SECONDARY)")]: "圣玛格烈中学",
  [normName("MARIS STELLA HIGH SCHOOL")]: "海星中学",
  [normName("FAIRFIELD METHODIST SCHOOL (SECONDARY)")]: "花菲卫理中学",
  [normName("METHODIST GIRLS' SCHOOL (SECONDARY)")]: "美以美中学",
  [normName("PAYA LEBAR METHODIST GIRLS' SCHOOL (SECONDARY)")]: "巴耶利峇美以美女中",
  [normName("RAFFLES GIRLS' SCHOOL (SECONDARY)")]: "莱佛士女子中学",
  [normName("NATIONAL JUNIOR COLLEGE")]: "国家初级学院",
  [normName("TEMASEK JUNIOR COLLEGE")]: "淡马锡初级学院",
  [normName("DUNMAN HIGH SCHOOL")]: "德明政府中学",
  [normName("RIVER VALLEY HIGH SCHOOL")]: "立化中学",
  [normName("EDGEFIELD SECONDARY SCHOOL")]: "育德中学",
  [normName("FUHUA SECONDARY SCHOOL")]: "辅华中学",
};

function mapSchoolType(r) {
  const u = r.school_name.toUpperCase();
  if (
    u.includes("CREST SECONDARY") ||
    u.includes("SPECTRA SECONDARY") ||
    u.includes("NORTHLIGHT") ||
    u.includes("ASSUMPTION PATHWAY")
  ) {
    return "Government";
  }
  if (r.ip_ind === "Yes") return "IP";
  if (r.sap_ind === "Yes") return "SAP";
  const t = r.type_code || "";
  if (t.includes("AIDED")) return "Government-aided";
  if (t.includes("INDEPENDENT")) return "Independent";
  return "Government";
}

function mapRegion(dgp) {
  const a = String(dgp || "").toUpperCase();
  const north = new Set(["WOODLANDS", "YISHUN", "SEMBAWANG"]);
  const east = new Set([
    "BEDOK",
    "TAMPINES",
    "PASIR RIS",
    "MARINE PARADE",
    "SIMEI",
    "HOUGANG",
    "PUNGGOL",
    "SENG KANG",
    "GEYLANG",
  ]);
  const west = new Set([
    "JURONG EAST",
    "JURONG WEST",
    "BOON LAY",
    "CLEMENTI",
    "BUKIT BATOK",
    "BUKIT PANJANG",
    "CHOA CHU KANG",
    "QUEENSTOWN",
  ]);
  const south = new Set(["BUKIT MERAH"]);
  if (north.has(a)) return "North";
  if (east.has(a)) return "East";
  if (west.has(a)) return "West";
  if (south.has(a)) return "South";
  return "Central";
}

const POPULAR_NORMS = new Set(
  [
    "RAFFLES INSTITUTION",
    "RAFFLES GIRLS SCHOOL SECONDARY",
    "HWA CHONG INSTITUTION",
    "NANYANG GIRLS HIGH SCHOOL",
    "ANGLO-CHINESE SCHOOL INDEPENDENT",
    "DUNMAN HIGH SCHOOL",
    "VICTORIA SCHOOL",
    "NATIONAL JUNIOR COLLEGE",
    "CHIJ ST NICHOLAS GIRLS SCHOOL",
    "CATHOLIC HIGH SCHOOL",
    "ST JOSEPHS INSTITUTION",
    "METHODIST GIRLS SCHOOL SECONDARY",
    "CEDAR GIRLS SECONDARY SCHOOL",
    "SINGAPORE CHINESE GIRLS SCHOOL",
    "RIVER VALLEY HIGH SCHOOL",
    "NAN HUA HIGH SCHOOL",
    "ANGLICAN HIGH SCHOOL",
    "NAN CHIAU HIGH SCHOOL",
    "MARIS STELLA HIGH SCHOOL",
    "CHUNG CHENG HIGH SCHOOL MAIN",
    "ANDERSON SECONDARY SCHOOL",
    "NUS HIGH SCHOOL OF MATHEMATICS AND SCIENCE",
    "TEMASEK JUNIOR COLLEGE",
    "CRESCENT GIRLS SCHOOL",
    "ANGLO-CHINESE SCHOOL BARKER ROAD",
    "TEMASEK SECONDARY SCHOOL",
  ].map(normName),
);

function idFromName(upperName) {
  return slugify(upperName.replace(/\([^)]*\)/g, "").trim());
}

async function resolveSourceUrl(host, schoolName, cache) {
  const key = host;
  if (cache[key]) return cache[key];
  if (CURATED_DSA[key]) {
    cache[key] = CURATED_DSA[key];
    return cache[key];
  }
  for (const p of DSA_CANDIDATES) {
    const url = `https://${host}${p}`;
    const body = await getBody(url);
    if (looksLikeDsa(body)) {
      cache[key] = url;
      return url;
    }
  }
  const officialHome = `https://${host}/`;
  cache[key] = officialHome;
  return officialHome;
}

function fmtAddress(row) {
  const raw = String(row.address || "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
  const a = raw.replace(/\b\w/g, (m) => m.toUpperCase());
  const pc = String(row.postal_code || "").trim();
  if (!a && !pc) return "Singapore";
  if (!pc) return a;
  return `${a}, Singapore ${pc}`;
}

const KNOWN_DATES = new Map(
  Object.entries({
    "nanyang-girls": {
      date: "2026-04-11",
      startsAt: "2026-04-11T08:00:00+08:00",
      endsAt: "2026-04-11T14:00:00+08:00",
      timeEn: "08:00–14:00",
      timeZh: "08:00–14:00",
      mode: "on-site",
    },
    "acs-independent": {
      date: "2026-04-12",
      startsAt: "2026-04-12T08:30:00+08:00",
      endsAt: "2026-04-12T12:30:00+08:00",
      timeEn: "08:30–12:30",
      timeZh: "08:30–12:30",
      mode: "on-site",
    },
    "raffles-institution": {
      date: "2026-05-09",
      startsAt: "2026-05-09T08:00:00+08:00",
      endsAt: "2026-05-09T13:00:00+08:00",
      timeEn: "08:00–13:00",
      timeZh: "08:00–13:00",
      mode: "on-site",
    },
    "chij-st-nicholas-girls-school": {
      date: "2026-05-09",
      startsAt: "2026-05-09T08:30:00+08:00",
      endsAt: "2026-05-09T13:00:00+08:00",
      timeEn: "08:30–13:00",
      timeZh: "08:30–13:00",
      mode: "on-site",
    },
    "national-junior-college": {
      date: "2026-05-09",
      startsAt: "2026-05-09T16:00:00+08:00",
      endsAt: "2026-05-09T20:00:00+08:00",
      timeEn: "16:00–20:00",
      timeZh: "16:00–20:00",
      mode: "on-site",
    },
    "catholic-high-school": {
      date: "2026-05-16",
      startsAt: "2026-05-16T09:00:00+08:00",
      endsAt: "2026-05-16T12:00:00+08:00",
      timeEn: "09:00–12:00",
      timeZh: "09:00–12:00",
      mode: "on-site",
    },
    "raffles-girls-school-secondary": {
      date: "2026-05-23",
      startsAt: "2026-05-23T08:30:00+08:00",
      endsAt: "2026-05-23T13:30:00+08:00",
      timeEn: "08:30–13:30",
      timeZh: "08:30–13:30",
      mode: "on-site",
    },
    "hwa-chong-institution": {
      date: "2026-05-23",
      startsAt: "2026-05-23T08:00:00+08:00",
      endsAt: "2026-05-23T13:00:00+08:00",
      timeEn: "08:00–13:00",
      timeZh: "08:00–13:00",
      mode: "on-site",
    },
    "dunman-high-school": {
      date: "2026-05-23",
      startsAt: "2026-05-23T08:00:00+08:00",
      endsAt: "2026-05-23T23:59:00+08:00",
      timeEn: "e-Open House (online) — see school site",
      timeZh: "线上校园开放日 — 详见学校官网",
      mode: "online",
    },
    "st-josephs-institution": {
      date: "2026-05-23",
      startsAt: "2026-05-23T09:00:00+08:00",
      endsAt: "2026-05-23T16:00:00+08:00",
      timeEn: "09:00–16:00",
      timeZh: "09:00–16:00",
      mode: "on-site",
    },
    "victoria-school": {
      date: "2026-05-23",
      startsAt: "2026-05-23T08:00:00+08:00",
      endsAt: "2026-05-23T13:00:00+08:00",
      timeEn: "08:00–13:00",
      timeZh: "08:00–13:00",
      mode: "on-site",
    },
    "cedar-girls-secondary-school": {
      date: "2026-05-30",
      startsAt: "2026-05-30T09:00:00+08:00",
      endsAt: "2026-05-30T12:30:00+08:00",
      timeEn: "09:00–12:30",
      timeZh: "09:00–12:30",
      mode: "on-site",
    },
  }),
);

function tbcRow(mode = "on-site") {
  return {
    date: "2026-05-31",
    startsAt: "2026-05-31T09:00:00+08:00",
    endsAt: "2026-05-31T17:00:00+08:00",
    timeEn: "May 2026 (TBC — check school DSA page)",
    timeZh: "2026年5月（待定 — 以学校 DSA 页面为准）",
    mode,
    dateDisplayEn: "May 2026 (TBC)",
    dateDisplayZh: "2026年5月（待定）",
  };
}

async function main() {
  let zhMap;
  try {
    zhMap = parseZhTable(ZH_TABLE);
  } catch {
    console.error("Missing ZH table at", ZH_TABLE);
    process.exit(1);
  }

  let cache = {};
  try {
    cache = JSON.parse(fs.readFileSync(CACHE, "utf8"));
  } catch {
    /* empty */
  }

  const base =
    "https://data.gov.sg/api/action/datastore_search?resource_id=d_688b934f82c1059ed0a6993d2a829089";
  const total = (await fetchJson(`${base}&limit=1`)).result.total;
  const all = [];
  for (let offset = 0; offset < total; offset += 100) {
    const j = await fetchJson(`${base}&limit=100&offset=${offset}`);
    all.push(...j.result.records);
  }
  const sec = all.filter(isSecondaryRow);
  sec.sort((a, b) => a.school_name.localeCompare(b.school_name));

  const lines = [];
  lines.push(`/** Auto-generated by scripts/build-school-open-houses.mjs — do not edit by hand. */`);
  lines.push(`import type { SchoolOpenHouse } from "./open-house-types";`);
  lines.push(``);
  lines.push(`export const SCHOOL_OPEN_HOUSES: SchoolOpenHouse[] = [`);

  for (const r of sec) {
    const upper = r.school_name;
    const nameEn = titleCaseSchoolName(upper);
    const nNorm = normName(upper);
    let nameZh =
      ZH_MANUAL[nNorm] ||
      zhMap.get(nNorm)?.zh ||
      zhMap.get(normName(upper.replace(/\([^)]*\)/g, "")))?.zh;
    if (!nameZh) {
      const stripped = normName(upper.replace(/\([^)]*\)/g, ""));
      nameZh = zhMap.get(stripped)?.zh || nameEn;
    }
    const id = idFromName(upper);
    const host = getHost(r.url_address);
    const sourceUrl = await resolveSourceUrl(host, upper, cache);
    const sched = KNOWN_DATES.get(id) || tbcRow();
    const region = mapRegion(r.dgp_code);
    const schoolType = mapSchoolType(r);
    const isPopular = POPULAR_NORMS.has(nNorm);

    const dateDisplayEn = sched.dateDisplayEn
      ? `"${sched.dateDisplayEn}"`
      : "undefined";
    const dateDisplayZh = sched.dateDisplayZh
      ? `"${sched.dateDisplayZh}"`
      : "undefined";

    lines.push(`  {`);
    lines.push(`    id: ${JSON.stringify(id)},`);
    lines.push(`    date: ${JSON.stringify(sched.date)},`);
    lines.push(`    startsAt: ${JSON.stringify(sched.startsAt)},`);
    lines.push(`    endsAt: ${JSON.stringify(sched.endsAt)},`);
    lines.push(`    nameEn: ${JSON.stringify(nameEn)},`);
    lines.push(`    nameZh: ${JSON.stringify(nameZh)},`);
    lines.push(`    timeEn: ${JSON.stringify(sched.timeEn)},`);
    lines.push(`    timeZh: ${JSON.stringify(sched.timeZh)},`);
    lines.push(`    address: ${JSON.stringify(fmtAddress(r))},`);
    lines.push(`    mode: ${JSON.stringify(sched.mode)},`);
    lines.push(`    sourceUrl: ${JSON.stringify(sourceUrl)},`);
    lines.push(`    region: ${JSON.stringify(region)},`);
    lines.push(`    schoolType: ${JSON.stringify(schoolType)},`);
    lines.push(`    isPopular: ${isPopular ? "true" : "false"},`);
    lines.push(`    dateDisplayEn: ${dateDisplayEn},`);
    lines.push(`    dateDisplayZh: ${dateDisplayZh},`);
    lines.push(`  },`);
  }

  lines.push(`];`);
  lines.push(``);

  fs.writeFileSync(OUT, lines.join("\n") + "\n", "utf8");
  fs.writeFileSync(CACHE, JSON.stringify(cache, null, 2), "utf8");
  console.log("Wrote", OUT, "rows:", sec.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
