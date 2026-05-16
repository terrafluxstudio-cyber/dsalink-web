import { getRecentRecords, type RecommendRecord } from "@/lib/db";

const SCHOOL_TIER_TAG: Record<string, string> = {
  safe: "S",
  reach: "R",
  dream: "D",
  special: "Sp",
};

function formatRecordTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString("en-SG", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function formatTalents(talents: RecommendRecord["talents"]): string {
  if (!talents?.length) return "—";
  return talents.map((t) => `${t.specificArea} (${t.tier})`).join(", ");
}

function formatSchools(schools: RecommendRecord["recommendedSchools"]): string {
  if (!schools?.length) return "—";
  return schools
    .map((s) => {
      const tag = SCHOOL_TIER_TAG[s.tier];
      return tag ? `${s.name} [${tag}]` : s.name;
    })
    .join(", ");
}

function formatRegion(record: RecommendRecord): string {
  const parts = [record.region, record.town].filter(Boolean);
  return parts.length ? parts.join(", ") : "—";
}

function computeStats(records: RecommendRecord[]) {
  const emails = new Set(
    records.map((r) => r.email?.trim()).filter((e): e is string => Boolean(e)),
  );

  const talentCounts = new Map<string, number>();
  for (const record of records) {
    for (const talent of record.talents ?? []) {
      const key = talent.specificArea || talent.category;
      talentCounts.set(key, (talentCounts.get(key) ?? 0) + 1);
    }
  }

  let mostRequestedTalent = "—";
  let maxCount = 0;
  for (const [area, count] of talentCounts) {
    if (count > maxCount) {
      maxCount = count;
      mostRequestedTalent = area;
    }
  }

  const alScores = records
    .map((r) => r.alScore)
    .filter((n) => typeof n === "number");
  const averageAl =
    alScores.length > 0
      ? (alScores.reduce((sum, n) => sum + n, 0) / alScores.length).toFixed(1)
      : "—";

  const lastUpdated =
    records.length > 0
      ? formatRecordTime(
          records.reduce((latest, r) =>
            new Date(r.timestamp) > new Date(latest.timestamp) ? r : latest,
          ).timestamp,
        )
      : "—";

  return {
    totalSessions: records.length,
    uniqueEmails: emails.size,
    mostRequestedTalent,
    averageAl,
    lastUpdated,
  };
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string | string[] }>;
}) {
  const params = await searchParams;
  const rawKey = params.key;
  const key = Array.isArray(rawKey) ? rawKey[0] : rawKey;

  if (!key || key !== process.env.ADMIN_KEY) {
    return (
      <div className="min-h-screen bg-slate-900 p-8 text-red-400">
        Access denied.
      </div>
    );
  }

  const records = await getRecentRecords(200);
  const stats = computeStats(records);

  return (
    <main className="min-h-screen bg-slate-900 px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold text-indigo-200">
            DSA Recommender — Admin Dashboard
          </h1>
          <p className="text-sm text-slate-400">
            {stats.totalSessions} record{stats.totalSessions === 1 ? "" : "s"}{" "}
            · Last updated {stats.lastUpdated}
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total sessions", value: String(stats.totalSessions) },
            {
              label: "Unique emails collected",
              value: String(stats.uniqueEmails),
            },
            { label: "Most requested talent", value: stats.mostRequestedTalent },
            { label: "Average AL score", value: stats.averageAl },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-lg border border-slate-700 bg-slate-800/80 p-4"
            >
              <div className="text-xs font-medium tracking-wide text-slate-400">
                {card.label}
              </div>
              <p className="mt-1 text-xl font-semibold text-indigo-100">
                {card.value}
              </p>
            </div>
          ))}
        </section>

        {records.length === 0 ? (
          <p className="text-sm text-slate-400">No records yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full min-w-[960px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-800 text-xs font-medium tracking-wide text-slate-400">
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">AL Score</th>
                  <th className="px-4 py-3">Talent(s)</th>
                  <th className="px-4 py-3">Recommended Schools</th>
                  <th className="px-4 py-3">Region</th>
                  <th className="px-4 py-3">Email</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr
                    key={record.id}
                    className="odd:bg-slate-800 even:bg-slate-900"
                  >
                    <td className="whitespace-nowrap px-4 py-3 text-slate-300">
                      {formatRecordTime(record.timestamp)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-200">
                      {record.alScore}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {formatTalents(record.talents)}
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      {formatSchools(record.recommendedSchools)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-300">
                      {formatRegion(record)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-300">
                      {record.email?.trim() || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
