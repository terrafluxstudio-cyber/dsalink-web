import { NextRequest, NextResponse } from "next/server";
import { saveRecommendRecord } from "@/lib/db";
import { sendRecommendResultsEmail } from "@/lib/resend";
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
    ...(body.utm_source ? { utm_source: body.utm_source } : {}),
    ...(body.utm_medium ? { utm_medium: body.utm_medium } : {}),
    ...(body.utm_campaign ? { utm_campaign: body.utm_campaign } : {}),
  };

  await saveRecommendRecord(record);

  if (record.email) {
    await sendRecommendResultsEmail(
      record.email,
      record.alScore,
      record.recommendedSchools,
    );
  }

  return NextResponse.json({ ok: true });
}
