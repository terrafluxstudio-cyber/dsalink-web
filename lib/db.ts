import { kv } from "@vercel/kv";

export interface RecommendRecord {
  id: string;
  timestamp: string;
  alScore: number;
  talents: Array<{
    category: string;
    specificArea: string;
    tier: string;
  }>;
  recommendedSchools: Array<{
    name: string;
    tier: "safe" | "reach" | "dream" | "special";
  }>;
  region?: string;
  town?: string;
  email?: string;
}

export async function saveRecommendRecord(record: RecommendRecord): Promise<void> {
  const { email, ...rest } = record;
  const payload = email ? { ...rest, email } : rest;

  await kv.hset(`recommend:${record.id}`, payload);
  await kv.zadd("recommend:index", { score: Date.now(), member: record.id });
}

export async function getRecentRecords(limit = 100): Promise<RecommendRecord[]> {
  const ids = await kv.zrange("recommend:index", 0, limit - 1, { rev: true });
  if (!ids.length) return [];

  const records = await Promise.all(
    ids.map((id) => kv.hgetall(`recommend:${id}`)),
  );
  return records.filter(Boolean) as unknown as RecommendRecord[];
}
