import { NextRequest, NextResponse } from "next/server";
import { saveRecommendRecord } from "@/lib/db";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const record = {
    id: nanoid(),
    timestamp: new Date().toISOString(),
    alScore: body.alScore,
    talents: body.talents,
    recommendedSchools: body.recommendedSchools,
    region: body.region,
    town: body.town,
    ...(body.email ? { email: body.email } : {}),
  };

  await saveRecommendRecord(record);
  return NextResponse.json({ ok: true });
}
