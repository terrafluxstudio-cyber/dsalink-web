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
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  // Per-phase flags (drip cron sets these to prevent re-sending)
  phase_open_house_sent?: boolean;
  phase_deadline_reminder_sent?: boolean;
  phase_final_24h_sent?: boolean;
  phase_post_application_d1_sent?: boolean;
  phase_post_application_sent?: boolean;
  phase_interview_prep_sent?: boolean;
  phase_results_sent?: boolean;
  // ISO timestamp of the last email sent to this record (drip cooldown)
  last_email_sent_at?: string;
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
