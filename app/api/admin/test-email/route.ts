import { NextRequest, NextResponse } from "next/server";
import {
  sendDeadlineReminderEmail,
  sendFinal24hEmail,
  sendInterviewPrepEmail,
  sendOpenHouseEmail,
  sendPlaybookWelcomeEmail,
  sendPostApplicationDayOneEmail,
  sendPostApplicationEmail,
  sendRecommendResultsEmail,
  sendResultsEmail,
  sendWelcomeEmail,
} from "@/lib/resend";

const ADMIN_KEY = process.env.ADMIN_KEY;

type Sender = (email: string) => Promise<boolean>;

const SENDERS: Record<string, Sender> = {
  welcome: sendWelcomeEmail,
  playbook: sendPlaybookWelcomeEmail,
  open_house: sendOpenHouseEmail,
  deadline_reminder: sendDeadlineReminderEmail,
  final_24h: sendFinal24hEmail,
  post_application_d1: sendPostApplicationDayOneEmail,
  post_application: sendPostApplicationEmail,
  interview_prep: sendInterviewPrepEmail,
  results: sendResultsEmail,
  recommend: (email: string) =>
    sendRecommendResultsEmail(email, 12, [
      { name: "Anglo-Chinese School (Independent)", tier: "dream" },
      { name: "Hwa Chong Institution", tier: "dream" },
      { name: "Raffles Institution", tier: "reach" },
      { name: "Catholic High School", tier: "safe" },
      { name: "NUS High School of Math and Science", tier: "special" },
    ]),
};

// GET /api/admin/test-email?key=ADMIN_KEY&to=user@example.com&type=welcome
// GET /api/admin/test-email?key=ADMIN_KEY&to=user@example.com&type=all
//   ↑ "all" sends every email back-to-back so you can preview the full series
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const key = url.searchParams.get("key");
  const to = url.searchParams.get("to");
  const type = url.searchParams.get("type") ?? "welcome";

  if (!ADMIN_KEY || key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return NextResponse.json({ error: "Invalid 'to' email" }, { status: 400 });
  }

  if (type === "all") {
    const results: Record<string, boolean> = {};
    for (const [name, send] of Object.entries(SENDERS)) {
      results[name] = await send(to);
      // tiny delay so emails arrive in order in the inbox
      await new Promise((r) => setTimeout(r, 800));
    }
    return NextResponse.json({ ok: true, to, results });
  }

  const send = SENDERS[type];
  if (!send) {
    return NextResponse.json(
      { error: "Unknown type", valid: Object.keys(SENDERS).concat("all") },
      { status: 400 },
    );
  }

  const sent = await send(to);
  return NextResponse.json({ ok: sent, to, type });
}
