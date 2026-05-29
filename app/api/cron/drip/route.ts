import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { getRecentRecords, type RecommendRecord } from "@/lib/db";
import {
  sendDeadlineReminderEmail,
  sendFinal24hEmail,
  sendInterviewPrepEmail,
  sendOpenHouseEmail,
  sendPostApplicationDayOneEmail,
  sendPostApplicationEmail,
  sendResultsEmail,
} from "@/lib/resend";

const CRON_SECRET = process.env.CRON_SECRET;
// Skip sending if the last email to this recipient was less than this many
// hours ago. Prevents back-to-back emails when a new subscriber lands in the
// middle of a tight schedule (e.g. subscribed on 6/1, would otherwise receive
// Welcome + Final 24h on the same day).
const COOLDOWN_HOURS = 48;

type Phase =
  | "open_house"
  | "deadline_reminder"
  | "final_24h"
  | "post_application_d1"
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

// Cadence (Singapore-local dates):
//   ≤ 05-23                → open_house
//   05-24 to 05-31         → deadline_reminder
//   06-01 (only)           → final_24h          ← NEW (urgency push)
//   06-02 to 06-05         → (silent, breathing room after deadline)
//   06-06 (only)           → post_application_d1 ← NEW (3-week map)
//   06-07 to 06-19         → (silent)
//   06-20 to 06-30         → post_application   (mid-wait check-in)
//   07-01 to 09-19         → interview_prep
//   09-20 to 10-31         → results
function getCurrentPhase(now: Date): Phase | null {
  const today = getSingaporeDateKey(now);

  if (today <= 20260523) return "open_house";
  if (today === 20260601) return "final_24h";
  if (today <= 20260601) return "deadline_reminder";
  if (today === 20260606) return "post_application_d1";
  if (today >= 20260620 && today <= 20260630) return "post_application";
  if (today >= 20260701 && today <= 20260919) return "interview_prep";
  if (today >= 20260920 && today <= 20261031) return "results";
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
  final_24h: {
    flag: "phase_final_24h_sent",
    send: sendFinal24hEmail,
  },
  post_application_d1: {
    flag: "phase_post_application_d1_sent",
    send: sendPostApplicationDayOneEmail,
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

function isWithinCooldown(record: RecommendRecord, nowMs: number): boolean {
  if (!record.last_email_sent_at) return false;
  const last = Date.parse(record.last_email_sent_at);
  if (Number.isNaN(last)) return false;
  return nowMs - last < COOLDOWN_HOURS * 60 * 60 * 1000;
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const phase = getCurrentPhase(now);
  if (!phase) {
    return NextResponse.json({ ok: true, phase: "none", sent: 0 });
  }

  const { flag, send } = PHASE_CONFIG[phase];
  const records = await getRecentRecords(500);
  const nowMs = now.getTime();
  let sent = 0;
  let skippedCooldown = 0;

  for (const record of records) {
    if (!record.email) continue;
    if (record[flag]) continue;
    if (isWithinCooldown(record, nowMs)) {
      skippedCooldown++;
      continue;
    }

    const wasSent = await send(record.email);
    if (wasSent) {
      await kv.hset(`recommend:${record.id}`, {
        [flag]: true,
        last_email_sent_at: new Date().toISOString(),
      });
      sent++;
    }
  }

  return NextResponse.json({ ok: true, phase, sent, skippedCooldown });
}
