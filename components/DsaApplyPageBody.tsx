"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, CalendarClock, CheckCircle2, Circle, MessageSquareText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/PageHeader";
import { SiteHeader } from "@/components/SiteHeader";
import { PillarBackLink } from "@/components/PillarBackLink";
import { RelatedCardsRow } from "@/components/RelatedCardsRow";
import { SiteFooter } from "@/components/SiteFooter";

type LocaleStr4 = { en: string; zh: string; ms: string; ta: string };
const REL_APPLY = {
  kicker: { en: "Related reference", zh: "相关参考", ms: "Rujukan berkaitan", ta: "தொடர்புடைய குறிப்பு" },
  heading: {
    en: "Three more references parents open during the application window",
    zh: "申请窗口期间家长常打开的三个参考",
    ms: "Tiga rujukan tambahan semasa tetingkap permohonan",
    ta: "விண்ணப்ப காலத்தில் மூன்று குறிப்புகள்",
  },
  c1Title: { en: "What DSA actually is", zh: "DSA 到底是什么", ms: "Apakah DSA sebenarnya", ta: "DSA உண்மையில் என்ன" },
  c1Body: {
    en: "Mechanism, eligibility, what DSA isn't — re-check before submitting.",
    zh: "机制、资格、DSA 不是什么 · 提交前再核一遍。",
    ms: "Mekanisme, kelayakan — semak sebelum hantar.",
    ta: "முறை, தகுதி — சமர்ப்பிக்கும் முன் சரிபார்க்கவும்.",
  },
  c2Title: { en: "2026 timeline", zh: "2026 时间线", ms: "Garis masa 2026", ta: "2026 கால அட்டவணை" },
  c2Body: {
    en: "Application closes 6/2 4:30pm SGT — and what each later phase decides.",
    zh: "申请截止 6/2 SGT 16:30 · 之后各阶段在决定什么。",
    ms: "Permohonan tutup 6/2 4:30pm SGT.",
    ta: "விண்ணப்பம் 6/2 4:30pm SGT-இல் முடிகிறது.",
  },
  c3Title: { en: "12 parent FAQs", zh: "12 个家长常见问题", ms: "12 FAQ ibu bapa", ta: "12 பெற்றோர் கேள்விகள்" },
  c3Body: {
    en: "Common application what-ifs — supporting docs, video uploads, 3-school strategy.",
    zh: "申请中 what-if · 证明材料 · 视频上传 · 三校策略。",
    ms: "Soalan what-if biasa semasa memohon.",
    ta: "விண்ணப்ப காலத்தில் what-if கேள்விகள்.",
  },
} satisfies Record<string, LocaleStr4>;

const STORAGE_KEY = "dsalink-apply-checks";

interface CheckItem {
  id: string;
  labelEn: string;
  labelZh: string;
  labelMs: string;
  labelTa: string;
  href?: string;
  note?: boolean; // info note, not a checkbox
}

interface Phase {
  id: string;
  dateHint: string;
  items: CheckItem[];
}

const PHASES: Phase[] = [
  {
    id: "phase1",
    dateHint: "Now",
    items: [
      {
        id: "p1-talent",
        labelEn: "Identify your child's talent domain",
        labelZh: "确定孩子的才能方向",
        labelMs: "Kenal pasti domain bakat anak anda",
        labelTa: "உங்கள் குழந்தையின் திறன் துறையை அடையாளம் காணுங்கள்",
        href: "/dsa-finder",
      },
      {
        id: "p1-openhouse",
        labelEn: "Review what target schools shared at open houses",
        labelZh: "了解目标学校在开放日分享的内容",
        labelMs: "Semak apa yang dikongsi sekolah sasaran di hari terbuka",
        labelTa: "இலக்கு பள்ளிகள் திறந்த நாளில் பகிர்ந்ததை மதிப்பாய்வு செய்யுங்கள்",
        href: "/open-house-takeaways",
      },
      {
        id: "p1-portfolio",
        labelEn: "Check if each school requires a portfolio, video, or audition",
        labelZh: "确认各校是否需要portfolio / 视频 / 试训",
        labelMs: "Semak sama ada setiap sekolah memerlukan portfolio, video, atau audisi",
        labelTa: "ஒவ்வொரு பள்ளியும் போர்ட்ஃபோலியோ, வீடியோ அல்லது ஆடிஷன் தேவைப்படுகிறதா என சரிபார்க்கவும்",
      },
      {
        id: "p1-psle",
        labelEn: "Check that your expected PSLE Posting Group meets the school's minimum",
        labelZh: "检查自己的PSLE预期成绩是否符合学校最低录取条件",
        labelMs: "Semak bahawa Kumpulan Penempatan PSLE yang dijangka memenuhi minimum sekolah",
        labelTa: "உங்கள் எதிர்பார்க்கப்படும் PSLE பதவியிடல் குழு பள்ளியின் குறைந்தபட்சத்தை பூர்த்தி செய்கிறதா என சரிபார்க்கவும்",
        href: "/what-is-dsa",
      },
    ],
  },
  {
    id: "phase2",
    dateHint: "Closes 2 Jun 2026, 4:30pm SGT",
    items: [
      {
        id: "p2-portal",
        labelEn: "Log in to the MOE DSA-Sec Application System",
        labelZh: "登录MOE DSA-Sec申请系统",
        labelMs: "Log masuk ke Sistem Permohonan MOE DSA-Sec",
        labelTa: "MOE DSA-Sec விண்ணப்ப அமைப்பில் உள்நுழைக",
      },
      {
        id: "p2-submit",
        labelEn: "Submit applications to target schools (no cap on number of applications)",
        labelZh: "向目标学校提交申请（申请数量无上限）",
        labelMs: "Hantar permohonan ke sekolah sasaran (tiada had bilangan permohonan)",
        labelTa: "இலக்கு பள்ளிகளுக்கு விண்ணப்பங்களை சமர்ப்பிக்கவும் (விண்ணப்பங்களின் எண்ணிக்கைக்கு வரம்பு இல்லை)",
      },
      {
        id: "p2-confirm",
        labelEn: "Receive submission confirmation before the deadline",
        labelZh: "截止前完成提交并收到确认",
        labelMs: "Terima pengesahan penyerahan sebelum tarikh akhir",
        labelTa: "காலக்கெடுவுக்கு முன் சமர்ப்பிப்பு உறுதிப்படுத்தலை பெறுங்கள்",
      },
    ],
  },
  {
    id: "phase3",
    dateHint: "Jul – Aug 2026",
    items: [
      {
        id: "p3-shortlist",
        labelEn: "Watch for shortlist notifications from schools (by 10 Jul 2026 — check spam)",
        labelZh: "等待入围通知（学校于7月10日前发出，注意查垃圾邮件箱）",
        labelMs: "Pantau pemberitahuan senarai pendek daripada sekolah (menjelang 10 Jul 2026 — semak spam)",
        labelTa: "பள்ளிகளிடமிருந்து குறுகிய பட்டியல் அறிவிப்புகளை கவனியுங்கள் (10 ஜூலை 2026 வரையில் — ஸ்பாம் சரிபார்க்கவும்)",
      },
      {
        id: "p3-trials",
        labelEn: "Attend talent trials (6 Jul – 4 Aug 2026)",
        labelZh: "参加才能试训（7月6日–8月4日）",
        labelMs: "Hadiri ujian bakat (6 Jul – 4 Ogos 2026)",
        labelTa: "திறன் சோதனைகளில் கலந்துகொள்ளுங்கள் (6 ஜூலை – 4 ஆகஸ்ட் 2026)",
        href: "/dsa-interview",
      },
      {
        id: "p3-interview",
        labelEn: "Prepare for and attend interviews (13 Jul – 14 Aug 2026)",
        labelZh: "备考并参加面试（7月13日–8月14日）",
        labelMs: "Bersedia dan hadiri temu duga (13 Jul – 14 Ogos 2026)",
        labelTa: "நேர்காணல்களுக்கு தயாராகி கலந்துகொள்ளுங்கள் (13 ஜூலை – 14 ஆகஸ்ட் 2026)",
        href: "/dsa-interview",
      },
      {
        id: "p3-result-note",
        labelEn: "Schools notify final outcomes (CO / Waitlist / Unsuccessful) directly by 28 Aug 2026",
        labelZh: "最终结果（CO / Waitlist / Unsuccessful）由学校直接于8月28日前通知",
        labelMs: "Sekolah memberitahu keputusan akhir (CO / Senarai Tunggu / Tidak Berjaya) terus menjelang 28 Ogos 2026",
        labelTa: "பள்ளிகள் இறுதி முடிவுகளை (CO / காத்திருப்பு பட்டியல் / தோல்வி) நேரடியாக 28 ஆகஸ்ட் 2026 க்குள் தெரிவிக்கும்",
        note: true,
      },
    ],
  },
  {
    id: "phase4",
    dateHint: "Oct – Nov 2026",
    items: [
      {
        id: "p4-preference",
        labelEn: "Submit school preference ranking via the MOE system (19–23 Oct 2026, by 4:30pm)",
        labelZh: "在系统提交学校偏好排序（10月19–23日，截止下午4:30）",
        labelMs: "Hantar pangkat keutamaan sekolah melalui sistem MOE (19–23 Okt 2026, sebelum 4:30pm)",
        labelTa: "MOE அமைப்பு வழியாக பள்ளி விருப்ப தரவரிசையை சமர்ப்பிக்கவும் (19–23 அக்டோ 2026, 4:30pm முன்)",
      },
      {
        id: "p4-co-note",
        labelEn: "If you hold a Confirmed Offer (CO): you cannot join S1 Posting — your child must still meet the school's minimum PSLE Posting Group",
        labelZh: "若持有 Confirmed Offer (CO)：不得参加S1统一分配，孩子仍需达到学校最低PSLE分组要求",
        labelMs: "Jika anda memegang Tawaran Disahkan (CO): anda tidak boleh menyertai S1 Posting — anak anda masih perlu memenuhi minimum PSLE sekolah",
        labelTa: "உறுதிப்படுத்தப்பட்ட சலுகை (CO) வைத்திருந்தால்: S1 பதவியிடலில் சேர முடியாது — உங்கள் குழந்தை பள்ளியின் குறைந்தபட்ச PSLE தேவைகளை பூர்த்தி செய்ய வேண்டும்",
        note: true,
        href: "/what-is-dsa",
      },
      {
        id: "p4-allocation",
        labelEn: "Receive final school allocation (tentatively 24–25 Nov 2026)",
        labelZh: "收到最终学校分配结果（暂定11月24–25日）",
        labelMs: "Terima peruntukan sekolah akhir (sementara 24–25 Nov 2026)",
        labelTa: "இறுதி பள்ளி ஒதுக்கீட்டை பெறுங்கள் (தற்காலிகமாக 24–25 நவ 2026)",
        note: true,
      },
    ],
  },
];

type Locale = "en" | "zh" | "ms" | "ta";

function getLabel(item: CheckItem, locale: Locale): string {
  if (locale === "zh") return item.labelZh;
  if (locale === "ms") return item.labelMs;
  if (locale === "ta") return item.labelTa;
  return item.labelEn;
}

function getPhaseTitle(phaseId: string, t: Record<string, string>): string {
  const map: Record<string, string> = {
    phase1: t.applyPhase1Title,
    phase2: t.applyPhase2Title,
    phase3: t.applyPhase3Title,
    phase4: t.applyPhase4Title,
  };
  return map[phaseId] ?? phaseId;
}

function formatProgress(template: string, done: number, total: number): string {
  return template
    .replace("{{done}}", String(done))
    .replace("{{total}}", String(total));
}

export function DsaApplyPageBody() {
  const { t, locale } = useLanguage();

  // Build list of all checkbox IDs (notes excluded)
  const allCheckIds = PHASES.flatMap((p) =>
    p.items.filter((i) => !i.note).map((i) => i.id)
  );

  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);
  const [subEmail, setSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Hydrate from localStorage after mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: string[] = JSON.parse(raw);
        setChecked(new Set(parsed));
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  // Persist on every change
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
    } catch {
      // ignore
    }
  }, [checked, mounted]);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const totalCheckboxes = allCheckIds.length;
  const doneCount = allCheckIds.filter((id) => checked.has(id)).length;
  const progressPct = totalCheckboxes > 0 ? Math.round((doneCount / totalCheckboxes) * 100) : 0;

  const phaseCheckIds = (phase: Phase) =>
    phase.items.filter((i) => !i.note).map((i) => i.id);

  const phaseIsDone = (phase: Phase) => {
    const ids = phaseCheckIds(phase);
    return ids.length > 0 && ids.every((id) => checked.has(id));
  };

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        <PageHeader
          crumbs={[
            { label: t.navDsaGuide, href: "/dsa-guide" },
            { label: t.applyCrumbHome },
          ]}
          kicker={t.applyPageKicker}
          title={t.applyPageH1}
          subtitle={t.applyPageLead}
        />

        <div className="mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6">
          {/* Progress bar */}
          <div className="mb-8 rounded-2xl border border-champagne/20 bg-card-shine p-5 shadow-sm ring-1 ring-champagne/10">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-intellectual">
                {formatProgress(t.applyProgressLabel, doneCount, totalCheckboxes)}
              </p>
              <p className="text-sm font-bold text-champagne-dark">{progressPct}%</p>
            </div>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-intellectual/10">
              <div
                className="h-full rounded-full bg-champagne transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Phases */}
          <div className="space-y-5">
            {PHASES.map((phase, phaseIdx) => {
              const done = phaseIsDone(phase);
              return (
                <div
                  key={phase.id}
                  className={`rounded-2xl border shadow-sm transition-all ${
                    done
                      ? "border-champagne/20 bg-champagne/5 opacity-75"
                      : "border-intellectual/10 bg-card-shine"
                  }`}
                >
                  {/* Phase header */}
                  <div className="flex items-start justify-between gap-3 px-5 pb-3 pt-5">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.13em] text-champagne-dark">
                        Phase {phaseIdx + 1} · {phase.dateHint}
                      </p>
                      <h2 className="mt-1 font-display text-xl font-semibold text-intellectual">
                        {getPhaseTitle(phase.id, t as unknown as Record<string, string>)}
                      </h2>
                    </div>
                    {done && (
                      <span className="mt-1 shrink-0 rounded-full bg-champagne/15 px-3 py-1 text-xs font-semibold text-champagne-dark">
                        ✓ Done
                      </span>
                    )}
                  </div>

                  {/* Items */}
                  <ul className="divide-y divide-intellectual/6 border-t border-intellectual/8 px-5">
                    {phase.items.map((item) => {
                      const label = getLabel(item, locale as Locale);
                      if (item.note) {
                        return (
                          <li key={item.id} className="py-3.5">
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 shrink-0 rounded-full bg-intellectual/8 px-2 py-0.5 text-[10px] font-bold tracking-wide text-intellectual-muted">
                                ℹ
                              </span>
                              <span className="text-sm leading-relaxed text-intellectual-muted">
                                {item.href ? (
                                  <>
                                    {label.split("—")[0]}
                                    {label.includes("—") && (
                                      <>
                                        —{" "}
                                        <Link
                                          href={item.href}
                                          className="font-medium text-champagne-dark underline underline-offset-2 transition hover:text-intellectual"
                                        >
                                          {label.split("—").slice(1).join("—").trim()}
                                        </Link>
                                      </>
                                    )}
                                  </>
                                ) : (
                                  label
                                )}
                              </span>
                            </div>
                          </li>
                        );
                      }

                      const isChecked = mounted && checked.has(item.id);
                      return (
                        <li key={item.id} className="py-3.5">
                          <button
                            type="button"
                            onClick={() => toggle(item.id)}
                            className="flex w-full items-start gap-3 text-left"
                          >
                            {isChecked ? (
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-champagne" aria-hidden />
                            ) : (
                              <Circle className="mt-0.5 h-5 w-5 shrink-0 text-intellectual/30" aria-hidden />
                            )}
                            <span
                              className={`text-sm leading-relaxed transition ${
                                isChecked
                                  ? "text-intellectual/40 line-through decoration-champagne/50"
                                  : "text-intellectual"
                              }`}
                            >
                              {item.href ? (
                                <>
                                  {label}{" "}
                                  <Link
                                    href={item.href}
                                    onClick={(e) => e.stopPropagation()}
                                    className="ml-0.5 font-medium text-champagne-dark underline underline-offset-2 transition hover:text-intellectual"
                                  >
                                    →
                                  </Link>
                                </>
                              ) : (
                                label
                              )}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Phase 2 portal CTA */}
                  {phase.id === "phase2" && (
                    <div className="px-5 pb-5 pt-1">
                      <a
                        href="https://www.dsa-is.moe.gov.sg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light"
                      >
                        {t.applyPortalBtn}
                      </a>
                      <p className="mt-2 text-xs text-intellectual-muted">{t.applyPortalNote}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CO note */}
          <div className="mt-8 rounded-2xl border border-champagne/25 bg-champagne/8 p-5">
            <p className="text-sm font-semibold text-intellectual">{t.applyCoTitle}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-intellectual-muted">
              {t.applyCoNote}{" "}
              <Link href="/what-is-dsa" className="font-medium text-champagne-dark underline underline-offset-2 transition hover:text-intellectual">
                {locale === "zh" ? "DSA 指南" : locale === "ms" ? "Panduan DSA" : locale === "ta" ? "DSA வழிகாட்டி" : "DSA Guide"}
              </Link>
            </p>
          </div>

          {/* Subscribe block */}
          <div className="mt-8 rounded-2xl bg-intellectual p-6 sm:p-8">
            {subStatus === "success" ? (
              <div className="flex items-center gap-3 text-champagne-light">
                <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
                <p className="text-sm font-medium">{t.applySubscribeSuccess}</p>
              </div>
            ) : (
              <>
                <p className="text-base font-semibold text-white normal-case">{t.applySubscribeTitle}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60 normal-case">{t.applySubscribeBody}</p>
                <form
                  className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-3"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!subEmail) return;
                    setSubStatus("loading");
                    try {
                      const res = await fetch("/api/subscribe", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: subEmail, source: "apply-page" }),
                      });
                      if (res.ok) {
                        setSubStatus("success");
                      } else {
                        setSubStatus("error");
                      }
                    } catch {
                      setSubStatus("error");
                    }
                  }}
                >
                  <input
                    type="email"
                    required
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-champagne/50 focus:outline-none focus:ring-1 focus:ring-champagne/30"
                  />
                  <button
                    type="submit"
                    disabled={subStatus === "loading"}
                    className="rounded-lg bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual transition hover:bg-champagne-light disabled:opacity-60"
                  >
                    {subStatus === "loading" ? "…" : t.applySubscribeBtn}
                  </button>
                </form>
                {subStatus === "error" && (
                  <p className="mt-2 text-xs text-red-400">Something went wrong — please try again.</p>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <RelatedCardsRow
        kicker={REL_APPLY.kicker[locale]}
        heading={REL_APPLY.heading[locale]}
        items={[
          { icon: BookOpen, title: REL_APPLY.c1Title[locale], body: REL_APPLY.c1Body[locale], href: "/what-is-dsa" },
          { icon: CalendarClock, title: REL_APPLY.c2Title[locale], body: REL_APPLY.c2Body[locale], href: "/timeline" },
          { icon: MessageSquareText, title: REL_APPLY.c3Title[locale], body: REL_APPLY.c3Body[locale], href: "/faq" },
        ]}
      />
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
