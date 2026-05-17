import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { getRecentRecords, type RecommendRecord } from "@/lib/db";
import {
  sendDeadlineReminderEmail,
  sendInterviewPrepEmail,
  sendOpenHouseEmail,
  sendPostApplicationEmail,
  sendResultsEmail,
} from "@/lib/resend";

const CRON_SECRET = process.env.CRON_SECRET;

type Phase =
  | "open_house"
  | "deadline_reminder"
  | "post_application"
  | "interview_prep"
  | "results";

type PhaseConfig = {
  flag: keyof RecommendRecord;
  send: (email: string) => Promise<boolean>;
};

function getSingaporeDateKey(now: Date): number {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const values = Object.fromEntries(
    parts.map((part) => [part.type, part.value]),
  );

  return Number(`${values.year}${values.month}${values.day}`);
}

function getCurrentPhase(now: Date): Phase | null {
  const today = getSingaporeDateKey(now);

  if (today <= 20260523) return "open_house";
  if (today <= 20260601) return "deadline_reminder";
  if (today <= 20260630) return "post_application";
  if (today <= 20260919) return "interview_prep";
  if (today <= 20261031) return "results";
  return null;
}

const PHASE_CONFIG: Record<Phase, PhaseConfig> = {
  open_house: {
    flag: "phase_open_house_sent",
    send: sendOpenHouseEmail,
  },
  deadline_reminder: {
    flag: "phase_deadline_reminder_sent",
    send: sendDeadlineReminderEmail,
  },
  post_application: {
    flag: "phase_post_application_sent",
    send: sendPostApplicationEmail,
  },
  interview_prep: {
    flag: "phase_interview_prep_sent",
    send: sendInterviewPrepEmail,
  },
  results: {
    flag: "phase_results_sent",
    send: sendResultsEmail,
  },
};

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const phase = getCurrentPhase(new Date());
  if (!phase) {
    return NextResponse.json({ ok: true, phase: "none", sent: 0 });
  }

  const { flag, send } = PHASE_CONFIG[phase];
  const records = await getRecentRecords(500);
  let sent = 0;

  for (const record of records) {
    if (!record.email) continue;
    if (record[flag]) continue;

    const wasSent = await send(record.email);
    if (wasSent) {
      await kv.hset(`recommend:${record.id}`, { [flag]: true });
      sent++;
    }
  }

  return NextResponse.json({ ok: true, phase, sent });
}
