/**
 * Data quality audit for lib/school-cop-history-data.ts
 * Run: node scripts/audit-cop-data.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dataPath = path.join(root, "lib/school-cop-history-data.ts");
const snapshotPath = path.join(root, "scripts/indigo-cop-snapshot.txt");

function copMid(raw) {
  if (!raw?.trim()) return null;
  const t = raw.trim().toUpperCase().replace(/\bDEC\b/g, "12");
  const m = t.match(/^(\d+(?:\.\d+)?)\s*M$/);
  if (m) return Number(m[1]);
  const range = t.match(/^(\d+)\s*-\s*(\d+)$/);
  if (range) return (Number(range[1]) + Number(range[2])) / 2;
  const single = t.match(/^(\d+)$/);
  if (single) return Number(single[1]);
  const dm = t.match(/(\d+)\s*D\s*-\s*(\d+)\s*M/);
  if (dm) return (Number(dm[1]) + Number(dm[2])) / 2;
  const loose = t.match(/(\d+)/);
  return loose ? Number(loose[1]) : null;
}

function primaryDisplay2025(y) {
  if (!y) return { label: null, mode: "nonip" };
  if (y.g3NonAffiliated) return { label: y.g3NonAffiliated, mode: "g3" };
  if (y.indicativeNonIp) return { label: y.indicativeNonIp, mode: "nonip" };
  if (y.ip) return { label: y.ip, mode: "ip" };
  return { label: null, mode: "nonip" };
}

function deltaVs2024(row, mode) {
  const y4 = row.byYear["2024"];
  const y5 = row.byYear["2025"];
  let prev, cur;
  if (mode === "ip") {
    prev = y4?.ip;
    cur = y5?.ip;
  } else if (mode === "g3") {
    prev = y4?.g3NonAffiliated ?? y4?.indicativeNonIp;
    cur = y5?.g3NonAffiliated ?? y5?.indicativeNonIp;
  } else {
    prev = y4?.indicativeNonIp ?? y4?.g3NonAffiliated;
    cur = y5?.indicativeNonIp ?? y5?.g3NonAffiliated;
  }
  const a = copMid(prev);
  const b = copMid(cur);
  if (a == null || b == null) return null;
  return a - b;
}

function parseDataFile() {
  const raw = fs.readFileSync(dataPath, "utf8");
  /** @type {any[]} */
  const schools = [];
  const blockRe =
    /\{\s*id:\s*"([^"]+)",\s*nameEn:\s*"([^"]*)",[\s\S]*?byYear:\s*\{([\s\S]*?)\n\s*\},\s*\n\s*\}/g;
  let m;
  while ((m = blockRe.exec(raw)) !== null) {
    const id = m[1];
    const nameEn = m[2];
    const byBlock = m[3];
    const isSap = /isSap:\s*true/.test(m[0]);
    const offersIp = /offersIp:\s*true/.test(m[0]);
    const byYear = { 2023: {}, 2024: {}, 2025: {} };
    for (const y of ["2023", "2024", "2025"]) {
      const yre = new RegExp(
        `"${y}":\\s*\\{([^}]*(?:\\{[^}]*\\}[^}]*)*)\\}`,
        "s",
      );
      const ym = byBlock.match(yre);
      if (!ym) continue;
      const inner = ym[1];
      const pick = (k) => {
        const km = inner.match(new RegExp(`${k}:\\s*"([^"]*)"`, "s"));
        return km ? km[1] : undefined;
      };
      byYear[y] = {
        indicativeNonIp: pick("indicativeNonIp"),
        ip: pick("ip"),
        g3NonAffiliated: pick("g3NonAffiliated"),
        g3Affiliated: pick("g3Affiliated"),
        g2: pick("g2"),
        g1: pick("g1"),
      };
    }
    schools.push({ id, nameEn, isSap, offersIp, byYear });
  }
  return schools;
}

function parseIndigoNonIp() {
  const raw = fs.readFileSync(snapshotPath, "utf8");
  const lines = raw.split(/\r?\n/);
  const start = lines.findIndex((l) =>
    /^\|\s*Area\s*\|\s*School\s*\|\s*2026 COP\s*\|/.test(l),
  );
  /** @type {Map<string, { g3?: string }>} */
  const map = new Map();
  if (start === -1) return map;
  for (let i = start + 2; i < lines.length; i++) {
    const line = lines[i];
    if (!line.startsWith("|")) break;
    if (line.includes("---|")) continue;
    const p = line.split("|").map((c) => c.trim());
    if (p.length < 10) continue;
    const school = p[2];
    if (!school || school === "School") continue;
    const g3 = p[7]?.replace(/^\\$/, "").trim() || undefined;
    map.set(school, { g3: g3 && g3 !== "–" ? g3 : undefined });
  }
  return map;
}

const SAP_EXPECT = new Set(
  [
    "Anglican High School",
    "Chung Cheng High School (Main)",
    "Dunman High School (Secondary)",
    "Hwa Chong Institution (Secondary)",
    "Maris Stella High School (Secondary)",
    "Nan Chiau High School",
    "CHIJ St. Nicholas Girls' School (Secondary)",
    "Nanyang Girls' High School",
    "River Valley High School (Secondary)",
    "Catholic High School (Secondary)",
  ].map((s) => s.toLowerCase()),
);

const IP_EXPECT = new Set(
  [
    "Anglo-Chinese School (Independent) (Secondary)",
    "Catholic High School (Secondary)",
    "Cedar Girls' Secondary School",
    "CHIJ St. Nicholas Girls' School (Secondary)",
    "Dunman High School (Secondary)",
    "Hwa Chong Institution (Secondary)",
    "Methodist Girls' School (Secondary)",
    "Nanyang Girls' High School",
    "National Junior College (Secondary)",
    "Raffles Girls' School (Secondary)",
    "Raffles Institution (Secondary)",
    "River Valley High School (Secondary)",
    "Singapore Chinese Girls' School",
    "St. Joseph's Institution (Secondary)",
    "Temasek Junior College (Secondary)",
    "Victoria School",
  ].map((s) => s.toLowerCase()),
);

function main() {
  const schools = parseDataFile();
  console.log("Parsed schools:", schools.length);

  // 1a Arrow logic: when 2025 mid < 2024 mid, delta should be > 0 => ↑
  let arrowMismatches = [];
  for (const row of schools) {
    const y5 = row.byYear["2025"];
    const disp = primaryDisplay2025(y5);
    if (!disp.label) continue;
    const dlt = deltaVs2024(row, disp.mode);
    const a = copMid(
      disp.mode === "ip"
        ? row.byYear["2024"]?.ip
        : disp.mode === "g3"
          ? row.byYear["2024"]?.g3NonAffiliated ??
            row.byYear["2024"]?.indicativeNonIp
          : row.byYear["2024"]?.indicativeNonIp ??
            row.byYear["2024"]?.g3NonAffiliated,
    );
    const b = copMid(disp.label);
    if (a == null || b == null || dlt == null) continue;
    const tighter = b < a;
    const upArrow = dlt > 0;
    if (tighter !== upArrow && Math.abs(a - b) > 0.01) {
      arrowMismatches.push({
        name: row.nameEn,
        a,
        b,
        dlt,
        tighter,
        upArrow,
      });
    }
  }
  console.log("\n=== 1a Trend arrow consistency (tighter <=> dlt>0) ===");
  console.log(
    arrowMismatches.length
      ? JSON.stringify(arrowMismatches.slice(0, 20), null, 2)
      : "OK — all checked pairs: lower 2025 mid <=> positive delta (up arrow)",
  );

  // 1b SAP
  const sapMissing = [];
  const sapFalsePositive = [];
  for (const row of schools) {
    const n = row.nameEn.toLowerCase();
    const expect =
      SAP_EXPECT.has(n) ||
      (n.includes("high school") &&
        !n.includes("junior college") &&
        !n.includes("nus high") &&
        /nan hua|nan chiau|chung cheng high school \(main\)|fairfield|presbyterian high|st\. andrew|st andrew|kuo chuan|yishun town|xinmin|zhonghua|crescent girls|paya lebar methodist|st\. margaret|st margaret|haising|methodist girls|cedar girls|chij st\. nicholas|chij st nicholas|anglican high|dunman high|catholic high|maris stella|hwa chong|nanyang girls|river valley high|singapore chinese girls|temasek junior|victoria school|st\. joseph|st joseph|raffles girls|raffles institution/.test(
          n,
        ));
    // tighten: known SAP list from MOE
    const knownSap =
      SAP_EXPECT.has(n) ||
      [
        "nan hua high school",
        "chung cheng high school (main)",
        "fairfield methodist school (secondary)",
      ].some((k) => n.includes(k));
    if (knownSap && !row.isSap) sapMissing.push(row.nameEn);
    if (!knownSap && row.isSap && !n.includes("high"))
      sapFalsePositive.push(row.nameEn);
  }
  console.log("\n=== 1b SAP (known list) missing isSap:true ===");
  console.log(sapMissing.length ? sapMissing.join("\n") : "OK");

  // 1c IP
  const ipMissing = [];
  const ipExtra = [];
  for (const row of schools) {
    const n = row.nameEn.toLowerCase();
    const expect = IP_EXPECT.has(n);
    if (expect && !row.offersIp) ipMissing.push(row.nameEn);
    if (!expect && row.offersIp && !n.includes("eunoia")) ipExtra.push(row.nameEn);
  }
  console.log("\n=== 1c IP offersIp vs expected MOE IP list ===");
  console.log("Missing offersIp:", ipMissing.length ? ipMissing.join("\n") : "OK");
  console.log("Unexpected offersIp (review):", ipExtra.length ? ipExtra.join("\n") : "none");

  // 2a Empty 2025
  const empty2025 = [];
  for (const row of schools) {
    const y = row.byYear["2025"];
    const has =
      y?.indicativeNonIp ||
      y?.ip ||
      y?.g3NonAffiliated ||
      y?.g3Affiliated ||
      y?.g2 ||
      y?.g1;
    if (!has) empty2025.push(row.nameEn);
  }
  console.log("\n=== 2a 2025 completely empty ===");
  console.log(empty2025.length ? empty2025.join("\n") : "OK");

  // 2b Extreme mids from 2025 display
  const extremes = [];
  for (const row of schools) {
    const y = row.byYear["2025"];
    const disp = primaryDisplay2025(y);
    if (!disp.label) continue;
    const mid = copMid(disp.label);
    if (mid == null) continue;
    if (mid < 3 || mid > 30) extremes.push({ name: row.nameEn, label: disp.label, mid });
  }
  console.log("\n=== 2b Extreme AL mid (<3 or >30) on 2025 primary display ===");
  console.log(extremes.length ? JSON.stringify(extremes, null, 2) : "OK");

  // 3 Cross-check 10 schools
  const indigo = parseIndigoNonIp();
  const midTierIds = [
    "canberra-secondary-school",
    "dunearn-secondary-school",
    "greenridge-secondary-school",
    "junyuan-secondary-school",
    "loyang-view-secondary-school",
    "meridian-secondary-school",
    "regent-secondary-school",
    "sembawang-secondary-school",
    "westwood-secondary-school",
    "yio-chu-kang-secondary-school",
  ];
  console.log("\n=== 3 Indigo G3 non-aff vs data (10 schools) ===");
  const NAME_MAP = {
    "Dunearn Secondary School": "Dunearn Secondary School",
    "Canberra Secondary School": "Canberra Secondary School",
  };
  for (const row of schools) {
    if (!midTierIds.includes(row.id)) continue;
    const g3 = row.byYear["2025"]?.g3NonAffiliated;
    let indigoRow = indigo.get(row.nameEn);
    if (!indigoRow) {
      const alt = [...indigo.keys()].find(
        (k) => k.replace(/’/g, "'") === row.nameEn.replace(/’/g, "'"),
      );
      if (alt) indigoRow = indigo.get(alt);
    }
    const rawG3 = indigoRow?.g3;
    const match = !rawG3 || !g3 || rawG3.replace(/\s/g, "") === g3.replace(/\s/g, "");
    console.log(
      row.nameEn,
      "| data:",
      g3 ?? "(none)",
      "| indigo:",
      rawG3 ?? "(n/a)",
      match ? "✓" : "MISMATCH",
    );
  }
}

main();
