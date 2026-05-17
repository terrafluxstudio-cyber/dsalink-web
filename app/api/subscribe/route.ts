import { NextRequest, NextResponse } from "next/server";
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

    await saveRecommendRecord({
      id: nanoid(),
      timestamp: new Date().toISOString(),
      alScore: 0,
      talents: [],
      recommendedSchools: [],
      email,
      utm_source: source,
    });

    if (source === "playbook") {
      await sendPlaybookWelcomeEmail(email);
    } else {
      await sendWelcomeEmail(email);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[subscribe]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
