import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { getRecentRecords } from "@/lib/db";
import { sendDeadlineEmail, sendOpenHouseEmail } from "@/lib/resend";

const CRON_SECRET = process.env.CRON_SECRET;
const DAY_MS = 1000 * 60 * 60 * 24;

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const records = await getRecentRecords(500);
  const now = Date.now();
  let sent2 = 0;
  let sent3 = 0;

  for (const record of records) {
    if (!record.email) continue;

    const signupTime = new Date(record.timestamp).getTime();
    if (Number.isNaN(signupTime)) continue;

    const daysSince = (now - signupTime) / DAY_MS;

    if (daysSince >= 3 && !record.email2_sent) {
      const sent = await sendOpenHouseEmail(record.email);
      if (sent) {
        await kv.hset(`recommend:${record.id}`, { email2_sent: true });
        sent2++;
      }
      continue;
    }

    if (daysSince >= 7 && record.email2_sent && !record.email3_sent) {
      const sent = await sendDeadlineEmail(record.email);
      if (sent) {
        await kv.hset(`recommend:${record.id}`, { email3_sent: true });
        sent3++;
      }
    }
  }

  return NextResponse.json({ ok: true, sent2, sent3 });
}
