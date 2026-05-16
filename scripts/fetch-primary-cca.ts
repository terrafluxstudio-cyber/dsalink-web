import fetch from "node-fetch";
import * as fs from "fs";
import * as path from "path";

const RESOURCE_ID = "d_9aba12b5527843afb0b2e8e4ed6ac6bd";
const BASE_URL = "https://data.gov.sg/api/action/datastore_search";
const LIMIT = 5000;

/** Raw record from data.gov.sg (field names differ from dataset docs). */
interface ApiRecord {
  School_name: string;
  school_section: string;
  /** Sport/activity name, e.g. "BASKETBALL" — maps to output genericName. */
  cca_grouping_desc: string;
  /** Broad category, e.g. "PHYSICAL SPORTS" — maps to output category. */
  cca_generic_name: string;
  cca_customized_name: string | null;
}

interface DatastoreSearchResponse {
  success: boolean;
  result: {
    records: ApiRecord[];
    total: number;
  };
}

type CompetitionLevel = "niche" | "moderate" | "popular";

function toTitleCase(value: string): string {
  return value
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function competitionLevel(schoolCount: number): CompetitionLevel {
  if (schoolCount < 50) return "niche";
  if (schoolCount <= 100) return "moderate";
  return "popular";
}

async function fetchAllRecords(): Promise<ApiRecord[]> {
  const records: ApiRecord[] = [];
  let offset = 0;
  let total = Number.POSITIVE_INFINITY;

  while (offset < total) {
    const url = new URL(BASE_URL);
    url.searchParams.set("resource_id", RESOURCE_ID);
    url.searchParams.set("limit", String(LIMIT));
    url.searchParams.set("offset", String(offset));

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`data.gov.sg request failed: ${response.status}`);
    }

    const body = (await response.json()) as DatastoreSearchResponse;
    if (!body.success) {
      throw new Error("data.gov.sg returned success=false");
    }

    total = body.result.total;
    records.push(...body.result.records);
    offset += LIMIT;
  }

  return records;
}

async function main(): Promise<void> {
  const allRecords = await fetchAllRecords();
  const primaryRecords = allRecords.filter(
    (r) => r.school_section?.toUpperCase() === "PRIMARY"
  );

  const primarySchools = new Set<string>();
  const schoolsByActivity = new Map<string, Set<string>>();
  const categoryByActivity = new Map<string, string>();

  for (const record of primaryRecords) {
    const school = record.School_name?.trim();
    const activityKey = record.cca_grouping_desc?.trim();
    const categoryRaw = record.cca_generic_name?.trim();

    if (!school || !activityKey) continue;

    primarySchools.add(school);

    if (!schoolsByActivity.has(activityKey)) {
      schoolsByActivity.set(activityKey, new Set());
    }
    schoolsByActivity.get(activityKey)!.add(school);

    if (categoryRaw && !categoryByActivity.has(activityKey)) {
      categoryByActivity.set(activityKey, categoryRaw);
    }
  }

  const ccaPool = [...schoolsByActivity.entries()]
    .map(([activityKey, schools]) => ({
      genericName: toTitleCase(activityKey),
      category: toTitleCase(categoryByActivity.get(activityKey) ?? "Unknown"),
      schoolCount: schools.size,
      competitionLevel: competitionLevel(schools.size),
    }))
    .sort((a, b) => b.schoolCount - a.schoolCount);

  const today = new Date().toISOString().slice(0, 10);
  const output = {
    metadata: {
      source: "data.gov.sg",
      fetched_at: today,
      total_primary_schools_counted: primarySchools.size,
    },
    cca_pool: ccaPool,
  };

  const outPath = path.join(process.cwd(), "data", "primary-cca-pool.json");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(output, null, 2)}\n`, "utf-8");

  console.log(
    `Wrote ${ccaPool.length} CCAs (${primarySchools.size} primary schools) to ${outPath}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
