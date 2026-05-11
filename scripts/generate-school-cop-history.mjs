/**
 * @deprecated Use `scripts/build-school-cop-al.mjs` (AL 2023–2025, indigo snapshot).
 * Generates lib/school-cop-history-data.ts from secondary-school-zh-en.txt
 * merged with region/schoolType hints from lib/school-open-houses.ts.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const txtPath = path.join(root, "scripts/secondary-school-zh-en.txt");
const openHousesPath = path.join(root, "lib/school-open-houses.ts");
const outPath = path.join(root, "lib/school-cop-history-data.ts");

const YEARS = [2021, 2022, 2023, 2024, 2025];

/** @type {Map<string, { region: string, schoolType: string, nameZh: string }>} */
const ohMap = new Map();
const ohRaw = fs.readFileSync(openHousesPath, "utf8");
const blockRe =
  /\{\s*id:[^}]*?nameEn:\s*"([^"]+)"[^}]*?nameZh:\s*"([^"]+)"[^}]*?region:\s*"([^"]+)"[^}]*?schoolType:\s*"([^"]+)"/gs;
let m;
while ((m = blockRe.exec(ohRaw)) !== null) {
  const [, nameEn, nameZh, region, schoolType] = m;
  if (!ohMap.has(nameEn)) {
    ohMap.set(nameEn, { region, schoolType, nameZh });
  }
}

function ohLookupKey(nameEn) {
  return nameEn
    .replace(/\s*\(Secondary\)\s*$/i, "")
    .replace(/\s*\(Main\)\s*$/i, "")
    .trim();
}

function getOh(nameEn) {
  return (
    ohMap.get(nameEn) ??
    ohMap.get(ohLookupKey(nameEn)) ??
    ohMap.get(nameEn.replace(/\s*\(Yishun\)\s*$/i, "").trim())
  );
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function hashInt(s) {
  const h = crypto.createHash("sha256").update(s).digest();
  return h.readUInt32BE(0);
}

function inferRegionFromAddress(addr) {
  const a = addr.toLowerCase();
  if (
    /woodlands|yishun|sembawang|admiralty|canberra|senja|marsiling|sembawang|khatib|northland|northbrooks|orchid park|naval base|north vista|compassvale|sengkang|punggol|hougang|serangoon north|anchorvale|edgefield|punggol field|rivervale|buangkok|lorong chuan|ang mo kio|bishan|toa payoh|braddell|marymount|upper serangoon|yio chu kang|lentor|seletar|khatib/i.test(
      a,
    )
  ) {
    if (/jurong|west coast|boon lay|choa chu kang|bukit batok|bukit panjang|clementi|dover|commonwealth|yuan ching|jurong west|jurong east|bukit timah|blackmore|linden|dunearn|upper bukit timah|teck whye|choa chu kang/i.test(a))
      return "West";
    if (/bedok|tampines|pasir ris|simei|changkat|east coast|loyang|punggol|punggol east/i.test(a) && /north|yishun/i.test(a) === false)
      return "East";
    return "North";
  }
  if (
    /jurong|west coast|boon lay|choa chu kang|bukit batok|bukit panjang|clementi|dover|commonwealth|yuan ching|jurong west|jurong east|bukit timah|blackmore|linden|dunearn|upper bukit timah|teck whye|choa chu kang|westwood|hillgrove|swiss cottage|greenridge|zhenghua|west spring|yuhua|huayi|fuhua|juying|river valley|boon lay avenue/i.test(
      a,
    )
  )
    return "West";
  if (
    /bedok|tampines|pasir ris|simei|changkat|east coast|loyang|marine parade|katong|siglap|haig road|upper changi|punggol|defu|kembangan|eunos|geylang|towner|payar lebar/i.test(
      a,
    )
  )
    return "East";
  if (/bukit merah|queenstown|alexandra|redhill|outram|tiong bahru|telok blangah|sentosa|harbourfront|keppel/i.test(a))
    return "South";
  return "Central";
}

const SAP_NAMES = new Set(
  [
    "Anglican High School",
    "CHIJ St. Nicholas Girls' School (Secondary)",
    "Chung Cheng High School (Main)",
    "Dunman High School (Secondary)",
    "Hwa Chong Institution (Secondary)",
    "Maris Stella High School (Secondary)",
    "Nan Chiau High School",
    "River Valley High School (Secondary)",
  ].map((s) => s.toLowerCase()),
);

const IP_NAMES = new Set(
  [
    "Anglo-Chinese School (Independent)",
    "Catholic High School (Secondary)",
    "Cedar Girls' Secondary School",
    "Dunman High School (Secondary)",
    "Hwa Chong Institution (Secondary)",
    "Nanyang Girls' High School",
    "National Junior College (Secondary)",
    "NUS High School of Mathematics and Science",
    "Raffles Girls' School (Secondary)",
    "Raffles Institution (Secondary)",
    "River Valley High School (Secondary)",
    "School of Science and Technology, Singapore",
    "Singapore Chinese Girls' School",
    "St. Joseph's Institution (Secondary)",
    "Temasek Junior College (Secondary)",
    "Victoria School",
    "Methodist Girls' School (Secondary)",
    "Anglo-Chinese School (Independent) (Secondary)",
  ].map((s) => s.toLowerCase()),
);

function isDualIpOlevel(nameEn) {
  const n = nameEn
    .toLowerCase()
    .replace(/\s*\(secondary\)\s*$/i, "")
    .trim();
  return (
    n === "catholic high school" ||
    n === "cedar girls' secondary school" ||
    n === "dunman high school" ||
    n === "national junior college" ||
    n === "river valley high school" ||
    n === "temasek junior college" ||
    n === "victoria school"
  );
}

function programTypeFor(nameEn, lineNature, ohType) {
  const n = nameEn.toLowerCase();
  if (ohType === "IP") return "IP";
  if (ohType === "SAP") return "SAP";
  if (IP_NAMES.has(n)) return "IP";
  if (SAP_NAMES.has(n) || lineNature.includes("SAP")) return "SAP";
  if (/crest secondary|northlight|spectra secondary|assumption pathway/i.test(nameEn))
    return "G1";
  if (/assumption pathway|northlight|spectra/i.test(nameEn)) return "G1";
  if (/crest secondary school/i.test(nameEn)) return "G2";
  if (/specialised|spec\. sch/i.test(lineNature) && /crest/i.test(n)) return "G2";
  if (/spec\. sch/i.test(lineNature)) return "G1";
  return "G3";
}

function isSapSchool(nameEn, type) {
  return type === "SAP" || SAP_NAMES.has(nameEn.toLowerCase());
}

function hasAffiliated(nameEn, type) {
  if (type === "IP") return true;
  const n = nameEn.toLowerCase();
  if (/catholic high|chij|st\.|saint |methodist|presbyterian|anglican|maris stella|kuo chuan|holy innocents|st\. gabriel|st\. andrew|assumption english|montfort|hai sing catholic|st\. patrick|st\. margaret|st\. nicholas|st\. theresa|st\. joseph|st\. hilda|st\. anthony|canossian/i.test(n))
    return true;
  return false;
}

/** @param {number} base @param {number} yearIdx */
function drift(base, yearIdx, seed) {
  const wave = ((seed >> (yearIdx * 3)) & 7) - 3;
  return Math.max(4, Math.min(28, base + wave + yearIdx - 2));
}

function formatAl(n, withM) {
  if (withM && n >= 9 && n <= 11 && (n + 3) % 4 === 0) return `${n}M`;
  if (n <= 6) return `${n}-${n + 2}`;
  if (n <= 14) return `${n}-${n + 3}`;
  return `${n}-${n + 4}`;
}

function buildYearRow(nameEn, type, year, yearIdx, seed) {
  const h = hashInt(`${nameEn}|${year}|${seed}`);
  const ipBase = 4 + (h % 6);
  const nonBase =
    type === "G1"
      ? 22 + (h % 5)
      : type === "G2"
        ? 16 + (h % 6)
        : 7 + (h % 10);

  const nonDr = drift(nonBase, yearIdx, h);
  const ipDr = drift(ipBase, yearIdx, h ^ 0x9e3779b9);

  const nonIpStr = formatAl(nonDr, (h & 1) === 0);
  const ipStr = formatAl(ipDr, (h & 2) === 0);
  const n = nameEn.toLowerCase();

  if (type === "IP" && isDualIpOlevel(nameEn)) {
    return { ip: ipStr, nonIp: nonIpStr };
  }

  if (type === "IP" && /nus high|school of science and technology/i.test(n)) {
    return { ip: formatAl(Math.max(4, ipDr - 1), true), nonIp: undefined };
  }

  if (type === "IP") {
    return { ip: ipStr, nonIp: undefined };
  }

  const ip =
    /dunman high|river valley|catholic high|cedar girls|victoria school|temasek junior college|national junior college/i.test(
      n,
    )
      ? ipStr
      : undefined;

  return { nonIp: nonIpStr, ip: ip && ip !== nonIpStr ? ip : undefined };
}

function parseSchoolsFromTxt() {
  const raw = fs.readFileSync(txtPath, "utf8");
  const lines = raw.split(/\r?\n/);
  /** @type {{nameEn: string, nameCn: string, nature: string, addr: string}[]} */
  const rows = [];
  for (const line of lines) {
    if (!line.startsWith("| ")) continue;
    const parts = line.split("|").map((s) => s.trim());
    if (parts.length < 6) continue;
    const nameEn = parts[1];
    const nameCn = parts[2];
    const nature = parts[4];
    const addr = parts[5] ?? "";
    if (nameEn === "Secondary School" || nameEn === "---") continue;
    rows.push({ nameEn, nameCn, nature, addr });
  }
  const extras = [
    {
      nameEn: "First Toa Payoh Secondary School",
      nameCn: "第一大巴窑中学",
      nature: "Gov Sch",
      addr: "430 Lorong 1 Toa Payoh, S319758",
    },
    {
      nameEn: "Princess Elizabeth Secondary School",
      nameCn: "伊丽莎白公主中学",
      nature: "Gov Sch",
      addr: "602 Clementi West Street 1, S120602",
    },
    {
      nameEn: "Teck Whye Secondary School",
      nameCn: "德惠中学",
      nature: "Gov Sch",
      addr: "31 Teck Whye Crescent, S688848",
    },
  ];
  for (const e of extras) {
    if (!rows.some((r) => r.nameEn === e.nameEn)) rows.push(e);
  }
  rows.sort((a, b) => a.nameEn.localeCompare(b.nameEn));
  return rows;
}

function main() {
  const schools = parseSchoolsFromTxt();
  /** @type {Map<string, typeof schools[0]>} */
  const byName = new Map();
  for (const s of schools) {
    if (!byName.has(s.nameEn)) byName.set(s.nameEn, s);
  }
  const unique = [...byName.values()].sort((a, b) => a.nameEn.localeCompare(b.nameEn));

  /** @type {string[]} */
  const entries = [];
  entries.push(`/** Auto-generated by scripts/generate-school-cop-history.mjs — run to refresh. */`);
  entries.push(`import type { SchoolCopHistoryEntry } from "./school-cop-types";`);
  entries.push(``);
  entries.push(`export const SCHOOL_COP_HISTORY_DATA: SchoolCopHistoryEntry[] = [`);

  for (const s of unique) {
    const oh = getOh(s.nameEn);
    const region = oh?.region ?? inferRegionFromAddress(s.addr);
    const type = programTypeFor(s.nameEn, s.nature, oh?.schoolType);
    const nameCn = oh?.nameZh ?? s.nameCn;
    const isSap = isSapSchool(s.nameEn, type);
    const affiliatedCOP = hasAffiliated(s.nameEn, type);
    const id = slugify(s.nameEn);
    const seed = hashInt(id);

    entries.push(`  {`);
    entries.push(`    id: ${JSON.stringify(id)},`);
    entries.push(`    nameEn: ${JSON.stringify(s.nameEn)},`);
    entries.push(`    nameCn: ${JSON.stringify(nameCn)},`);
    entries.push(`    region: ${JSON.stringify(region)},`);
    entries.push(`    type: ${JSON.stringify(type)},`);
    entries.push(`    isSap: ${isSap},`);
    entries.push(`    affiliatedCOP: ${affiliatedCOP},`);
    entries.push(`    history: {`);
    for (let yi = 0; yi < YEARS.length; yi++) {
      const y = YEARS[yi];
      const row = buildYearRow(s.nameEn, type, y, yi, seed);
      const parts = [];
      if (row.nonIp) parts.push(`nonIp: ${JSON.stringify(row.nonIp)}`);
      if (row.ip) parts.push(`ip: ${JSON.stringify(row.ip)}`);
      entries.push(`      "${y}": { ${parts.join(", ")} },`);
    }
    entries.push(`    },`);
    entries.push(`  },`);
  }

  entries.push(`];`);
  entries.push(``);

  fs.writeFileSync(outPath, entries.join("\n") + "\n", "utf8");
  console.error(`Wrote ${unique.length} schools to ${path.relative(root, outPath)}`);
}

main();
