import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { saveRecommendRecord } from "@/lib/db";
import { sendWelcomeEmail, sendPlaybookWelcomeEmail } from "@/lib/resend";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const source = typeof body?.source === "string" ? body.source : "unknown";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const id = nanoid();
    await saveRecommendRecord({
      id,
      timestamp: new Date().toISOString(),
      alScore: 0,
      talents: [],
      recommendedSchools: [],
      email,
      utm_source: source,
    });

    const sent =
      source === "playbook"
        ? await sendPlaybookWelcomeEmail(email)
        : await sendWelcomeEmail(email);

    // Record the timestamp so drip cron's cooldown rule knows when the last
    // email landed (prevents back-to-back sends on the same day).
    if (sent) {
      await kv.hset(`recommend:${id}`, {
        last_email_sent_at: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[subscribe]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
