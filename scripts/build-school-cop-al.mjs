/**
 * Builds lib/school-cop-history-data.ts from scripts/indigo-cop-snapshot.txt
 * (AL-era COPs, 2023–2025) + scripts/secondary-school-zh-en.txt for zh/gender/auto.
 * Run: node scripts/build-school-cop-al.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const snapshotPath = path.join(root, "scripts/indigo-cop-snapshot.txt");
const secondaryPath = path.join(root, "scripts/secondary-school-zh-en.txt");
const outPath = path.join(root, "lib/school-cop-history-data.ts");

const NAME_ALIASES = {
  "Anglo-Chinese (Barker Road) Secondary School": "Anglo-Chinese School (Barker Road)",
  "Anglo-Chinese School (Independent)": "Anglo-Chinese School (Independent) (Secondary)",
  "Catholic High School": "Catholic High School (Secondary)",
  "Cedar Girls’ Secondary School": "Cedar Girls' Secondary School",
  "CHIJ (Toa Payoh) Secondary School": "CHIJ Secondary (Toa Payoh)",
  "CHIJ St. Joseph’s Convent": "CHIJ St. Joseph's Convent",
  "CHIJ St. Nicholas Girls’ School": "CHIJ St. Nicholas Girls' School (Secondary)",
  "CHIJ St. Theresa’s Convent": "CHIJ St. Theresa's Convent",
  "Dunman High School": "Dunman High School (Secondary)",
  "Maris Stella High School (Secondary)": "Maris Stella High School (Secondary)",
  "Methodist Girls’ School": "Methodist Girls' School (Secondary)",
  "Nanyang Girls’ High School": "Nanyang Girls' High School",
  "National Junior College (Secondary)": "National Junior College (Secondary)",
  "River Valley High School": "River Valley High School (Secondary)",
  "Raffles Girls’ School": "Raffles Girls' School (Secondary)",
  "Raffles Institution": "Raffles Institution (Secondary)",
  "St Anthony’s Canossian Secondary School": "St. Anthony's Canossian Secondary School",
  "St Gabriel’s Secondary School": "St. Gabriel's Secondary School",
  "St Hilda’s Secondary School": "St. Hilda's Secondary School",
  "St Joseph’s Institution": "St. Joseph's Institution (Secondary)",
  "St Patrick’s School": "St. Patrick's School",
  "Tanjong Katong Girls’ School": "Tanjong Katong Girls' School",
  "Victoria School": "Victoria School",
  "Temasek Junior College": "Temasek Junior College (Secondary)",
  "Bukit Panjang Government High School": "Bukit Panjang Govt. High School",
  "Hwa Chong Institution": "Hwa Chong Institution (Secondary)",
  "Singapore Chinese Girls’ School": "Singapore Chinese Girls' School",
  /** IP 表与 Non-IP 表校名不一致时合并到 MOE 标准名 */
  "Cedar Girls Secondary School": "Cedar Girls' Secondary School",
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[''']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function cleanCell(s) {
  if (s == null) return undefined;
  const t = String(s).trim();
  if (!t || t === "–" || t === "-" || t === "\\" || t === "—") return undefined;
  return t;
}

function splitDual(cell) {
  const c = cleanCell(cell);
  if (!c) return { non: undefined, aff: undefined };
  const m = c.match(
    /^(.+?)\s*\/\s*(.+?)\s*(?:\(Affiliated\)|\(Affliated\)|\(affiliated\))\s*$/i,
  );
  if (m) return { non: m[1].trim(), aff: m[2].trim() };
  const m2 = c.match(/^(.+?)\s*\/\s*(.+)$/);
  if (m2 && /affiliat/i.test(c))
    return { non: m2[1].trim(), aff: m2[2].replace(/\([^)]*Affiliat[^)]*\)/gi, "").trim() };
  return { non: c, aff: undefined };
}

function parseSecondaryMeta() {
  const raw = fs.readFileSync(secondaryPath, "utf8");
  const lines = raw.split(/\r?\n/);
  /** @type {Map<string, { nameEn: string, nameCn: string, gender: string, auto: boolean }>} */
  const byNorm = new Map();
  for (const line of lines) {
    if (!line.startsWith("| ")) continue;
    const p = line.split("|").map((x) => x.trim());
    if (p.length < 6) continue;
    const nameEn = p[1];
    const nameCn = p[2];
    const coed = p[3];
    const nature = p[4];
    if (nameEn === "Secondary School" || nameEn === "---") continue;
    const gender =
      coed === "Boys" ? "boys" : coed === "Girls" ? "girls" : "coed";
    const auto = /Auto/i.test(nature);
    const key = normName(nameEn);
    if (!byNorm.has(key))
      byNorm.set(key, { nameEn, nameCn, gender, auto });
  }
  return byNorm;
}

function normName(s) {
  return s
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u2018\u2019\u0060\u00B4']/g, "'")
    .replace(/\s*\(secondary\)\s*/gi, "")
    .replace(/\s*\(main\)\s*/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseOhRegions() {
  const ohPath = path.join(root, "lib/school-open-houses.ts");
  const raw = fs.readFileSync(ohPath, "utf8");
  /** @type {Map<string, string>} */
  const m = new Map();
  const re =
    /nameEn:\s*"([^"]+)"[\s\S]*?region:\s*"([^"]+)"/g;
  let x;
  while ((x = re.exec(raw))) {
    if (!m.has(x[1])) m.set(x[1], x[2]);
  }
  return m;
}

function ohLookup(nameEn, ohMap) {
  return (
    ohMap.get(nameEn) ??
    ohMap.get(nameEn.replace(/\s*\(Secondary\)\s*$/i, "").trim()) ??
    ohMap.get(nameEn.replace(/\s*\(Main\)\s*$/i, "").trim())
  );
}

function parseIndigoIp(rawLines) {
  const start = rawLines.findIndex((l) =>
    /^\|\s*Area\s*\|\s*School\s*\|\s*COP\s*\|/.test(l),
  );
  /** @type {Map<string, { ip2026?: string, ip2025?: string, ip2024?: string, ip2023?: string, area?: string }>} */
  const map = new Map();
  if (start === -1) return map;
  for (let i = start + 2; i < rawLines.length; i++) {
    const line = rawLines[i];
    if (!line.startsWith("|")) break;
    if (line.includes("---|")) continue;
    const p = line.split("|").map((c) => c.trim());
    if (p.length < 9) continue;
    const area = cleanCell(p[1]);
    const school = cleanCell(p[2]);
    if (!school || school === "School") continue;
    map.set(school, {
      area,
      ip2026: cleanCell(p[4]),
      ip2025: cleanCell(p[5]),
      ip2024: cleanCell(p[6]),
      ip2023: cleanCell(p[7]),
    });
  }
  return map;
}

function parseIndigoNonIp(rawLines) {
  const start = rawLines.findIndex((l) =>
    /^\|\s*Area\s*\|\s*School\s*\|\s*2026 COP\s*\|/.test(l),
  );
  /** @type {Map<string, { area?: string, c2026?: string, c2025?: string, c2024?: string, c2023?: string, g3?: string, g2?: string, g1?: string }>} */
  const map = new Map();
  if (start === -1) return map;
  for (let i = start + 2; i < rawLines.length; i++) {
    const line = rawLines[i];
    if (!line.startsWith("|")) break;
    if (line.includes("---|")) continue;
    const p = line.split("|").map((c) => c.trim());
    if (p.length < 10) continue;
    const area = cleanCell(p[1]);
    const school = cleanCell(p[2]);
    if (!school || school === "School") continue;
    map.set(school, {
      area,
      c2026: cleanCell(p[3]),
      c2025: cleanCell(p[4]),
      c2024: cleanCell(p[5]),
      c2023: cleanCell(p[6]),
      g3: cleanCell(p[7]),
      g2: cleanCell(p[8]),
      g1: cleanCell(p[9]),
    });
  }
  return map;
}

function areaToRegion(area, ohRegion) {
  if (ohRegion) return ohRegion;
  const a = (area || "").toLowerCase();
  if (a === "north") return "North";
  if (a === "south") return "South";
  if (a === "east") return "East";
  if (a === "west") return "West";
  return "Central";
}

const SAP_NORMS = new Set(
  [
    "Anglican High School",
    "Catholic High School (Secondary)",
    "Chung Cheng High School (Main)",
    "Dunman High School (Secondary)",
    "Fairfield Methodist School (Secondary)",
    "Hwa Chong Institution (Secondary)",
    "Maris Stella High School (Secondary)",
    "Nan Chiau High School",
    "Nan Hua High School",
    "Nanyang Girls' High School",
    "CHIJ St. Nicholas Girls' School (Secondary)",
    "River Valley High School (Secondary)",
  ].map((s) => normName(s)),
);

function isSapCanonical(nameEn) {
  const n = normName(nameEn);
  if (SAP_NORMS.has(n)) return true;
  return (
    n.includes("anglican high") ||
    n.includes("catholic high school") ||
    n.includes("chung cheng high school (main)") ||
    (n.includes("dunman high") && !n.includes("dunman secondary")) ||
    n.includes("fairfield methodist") ||
    n.includes("maris stella") ||
    n.includes("nan chiau") ||
    n.includes("nan hua high") ||
    n.includes("nanyang girls") ||
    n.includes("chij st. nicholas") ||
    n.includes("river valley high") ||
    n.includes("hwa chong institution")
  );
}

function resolveCanonicalName(indigoName) {
  return NAME_ALIASES[indigoName] ?? indigoName;
}

/** IP 表行可能与 Non-IP 表撇号/拼写不一致，用 slug 对齐 */
function getIpEntry(ipMap, indigoNonName, canonicalName) {
  const direct =
    ipMap.get(indigoNonName) ??
    ipMap.get(canonicalName) ??
    ipMap.get(resolveCanonicalName(indigoNonName));
  if (direct) return direct;
  const slug = slugify(canonicalName);
  for (const [k, v] of ipMap) {
    if (slugify(k) === slug) return v;
  }
  return undefined;
}

function buildYearMatrix(non, ip, ykey) {
  const y = {
    indicativeNonIp: undefined,
    ip: undefined,
    g3NonAffiliated: undefined,
    g3Affiliated: undefined,
    g2: undefined,
    g1: undefined,
  };
  if (non) {
    const cKey = ykey === "2023" ? "c2023" : ykey === "2024" ? "c2024" : "c2025";
    const ind = non[cKey];
    const indSplit = splitDual(ind);
    y.indicativeNonIp =
      indSplit.non && indSplit.aff
        ? `${indSplit.non} / ${indSplit.aff} (Affiliated)`
        : indSplit.non ?? ind;

    if (ykey === "2025") {
      const g3s = splitDual(non.g3);
      y.g3NonAffiliated = g3s.non;
      y.g3Affiliated = g3s.aff;
      const g2s = splitDual(non.g2);
      y.g2 = g2s.aff ? `${g2s.non} / ${g2s.aff} (Affiliated)` : g2s.non;
      const g1s = splitDual(non.g1);
      y.g1 = g1s.aff ? `${g1s.non} / ${g1s.aff} (Affiliated)` : g1s.non;
    }
  }

  if (ip) {
    const ik = ykey === "2023" ? "ip2023" : ykey === "2024" ? "ip2024" : "ip2025";
    let v = ip[ik];
    if (!v && ykey === "2025" && ip.ip2026) v = ip.ip2026;
    y.ip = v;
  }

  return y;
}

/** Merge rows that normalize to the same school (e.g. SJI IP vs Non-IP naming). */
function dedupeMerged(merged) {
  /** @type {Map<string, object>} */
  const byNorm = new Map();

  function yearScore(y) {
    if (!y) return 0;
    return [
      y.indicativeNonIp,
      y.ip,
      y.g3NonAffiliated,
      y.g3Affiliated,
      y.g2,
      y.g1,
    ].filter(Boolean).length;
  }

  function rowScore(r) {
    return yearScore(r.byYear["2023"]) + yearScore(r.byYear["2024"]) + yearScore(r.byYear["2025"]);
  }

  function mergeYear(a, b) {
    const out = { ...a };
    for (const k of [
      "indicativeNonIp",
      "ip",
      "g3NonAffiliated",
      "g3Affiliated",
      "g2",
      "g1",
    ]) {
      if (!out[k] && b[k]) out[k] = b[k];
    }
    return out;
  }

  for (const row of merged.values()) {
    const key = normName(row.nameEn);
    const existing = byNorm.get(key);
    if (!existing) {
      byNorm.set(key, row);
      continue;
    }
    let primary = existing;
    let secondary = row;
    if (rowScore(row) > rowScore(existing)) {
      primary = row;
      secondary = existing;
    }
    if (
      secondary.nameEn.includes("(Secondary)") &&
      !primary.nameEn.includes("(Secondary)")
    ) {
      [primary, secondary] = [secondary, primary];
    }
    primary.offersIp = primary.offersIp || secondary.offersIp;
    primary.isSap = primary.isSap || secondary.isSap;
    primary.isAutonomous = primary.isAutonomous || secondary.isAutonomous;
    if (
      (secondary.nameCn?.length ?? 0) > (primary.nameCn?.length ?? 0) &&
      secondary.nameCn !== secondary.nameEn
    ) {
      primary.nameCn = secondary.nameCn;
    }
    if (
      secondary.nameEn.includes("(Secondary)") &&
      !primary.nameEn.includes("(Secondary)")
    ) {
      primary.nameEn = secondary.nameEn;
    }
    primary.id = slugify(primary.nameEn);
    for (const yk of ["2023", "2024", "2025"]) {
      primary.byYear[yk] = mergeYear(
        primary.byYear[yk] ?? {},
        secondary.byYear[yk] ?? {},
      );
    }
    byNorm.set(key, primary);
  }
  return byNorm;
}

function main() {
  const raw = fs.readFileSync(snapshotPath, "utf8");
  const rawLines = raw.split(/\r?\n/);
  const ipMap = parseIndigoIp(rawLines);
  const nonMap = parseIndigoNonIp(rawLines);
  const secondaryByNorm = parseSecondaryMeta();
  const ohMap = parseOhRegions();

  /** @type {Map<string, object>} */
  const merged = new Map();

  for (const [indigoName, non] of nonMap) {
    const canonical = resolveCanonicalName(indigoName);
    const ip = getIpEntry(ipMap, indigoName, canonical);
    const meta = secondaryByNorm.get(normName(canonical)) ?? secondaryByNorm.get(normName(indigoName));
    const nameEn = meta?.nameEn ?? canonical;
    const nameCn = meta?.nameCn ?? nameEn;
    const gender = /** @type {"boys"|"girls"|"coed"} */ (meta?.gender ?? "coed");
    const isAutonomous = meta?.auto ?? false;
    const offersIp = Boolean(
      ip &&
        (ip.ip2025 || ip.ip2024 || ip.ip2023 || ip.ip2026),
    );
    const isSap = isSapCanonical(nameEn);
    const region = areaToRegion(non.area, ohLookup(nameEn, ohMap));

    const byYear = {
      2023: buildYearMatrix(non, ip, "2023"),
      2024: buildYearMatrix(non, ip, "2024"),
      2025: buildYearMatrix(non, ip, "2025"),
    };

    merged.set(nameEn, {
      id: slugify(nameEn),
      nameEn,
      nameCn,
      region,
      gender,
      offersIp,
      isSap,
      isAutonomous,
      byYear,
    });
  }

  for (const [indigoName, ip] of ipMap) {
    const canonical = resolveCanonicalName(indigoName);
    if (
      merged.has(canonical) ||
      merged.has(resolveCanonicalName(indigoName)) ||
      [...merged.values()].some(
        (v) => v.nameEn === canonical || slugify(v.nameEn) === slugify(canonical),
      )
    )
      continue;
    const meta = secondaryByNorm.get(normName(canonical)) ?? secondaryByNorm.get(normName(indigoName));
    const nameEn = meta?.nameEn ?? canonical;
    if ([...merged.values()].some((v) => v.nameEn === nameEn)) continue;
    const nameCn = meta?.nameCn ?? nameEn;
    const gender = /** @type {"boys"|"girls"|"coed"} */ (meta?.gender ?? "coed");
    const isAutonomous = meta?.auto ?? false;
    const non = nonMap.get(indigoName);
    const byYear = {
      2023: buildYearMatrix(non, ip, "2023"),
      2024: buildYearMatrix(non, ip, "2024"),
      2025: buildYearMatrix(non, ip, "2025"),
    };
    merged.set(nameEn, {
      id: slugify(nameEn),
      nameEn,
      nameCn,
      region: areaToRegion(ip.area, ohLookup(nameEn, ohMap)),
      gender,
      offersIp: Boolean(
        ip.ip2025 || ip.ip2024 || ip.ip2023 || ip.ip2026,
      ),
      isSap: isSapCanonical(nameEn),
      isAutonomous,
      byYear,
    });
  }

  const list = [...dedupeMerged(merged).values()].sort((a, b) =>
    a.nameEn.localeCompare(b.nameEn),
  );

  const lines = [];
  lines.push(`/** Auto-generated by scripts/build-school-cop-al.mjs — AL era 2023–2025, sourced from indigo snapshot. */`);
  lines.push(`import type { SchoolCopHistoryEntry } from "./school-cop-types";`);
  lines.push(``);
  lines.push(`export const SCHOOL_COP_HISTORY_DATA: SchoolCopHistoryEntry[] = [`);
  for (const row of list) {
    lines.push(`  {`);
    lines.push(`    id: ${JSON.stringify(row.id)},`);
    lines.push(`    nameEn: ${JSON.stringify(row.nameEn)},`);
    lines.push(`    nameCn: ${JSON.stringify(row.nameCn)},`);
    lines.push(`    region: ${JSON.stringify(row.region)},`);
    lines.push(`    gender: ${JSON.stringify(row.gender)},`);
    lines.push(`    offersIp: ${row.offersIp},`);
    lines.push(`    isSap: ${row.isSap},`);
    lines.push(`    isAutonomous: ${row.isAutonomous},`);
    lines.push(`    byYear: {`);
    for (const yk of ["2023", "2024", "2025"]) {
      const y = row.byYear[yk];
      const parts = [];
      for (const k of [
        "indicativeNonIp",
        "ip",
        "g3NonAffiliated",
        "g3Affiliated",
        "g2",
        "g1",
      ]) {
        if (y[k]) parts.push(`${k}: ${JSON.stringify(y[k])}`);
      }
      lines.push(`      "${yk}": { ${parts.join(", ")} },`);
    }
    lines.push(`    },`);
    lines.push(`  },`);
  }
  lines.push(`];`);
  lines.push(``);

  fs.writeFileSync(outPath, lines.join("\n") + "\n", "utf8");
  console.error(`Wrote ${list.length} schools to ${path.relative(root, outPath)}`);
}

main();
