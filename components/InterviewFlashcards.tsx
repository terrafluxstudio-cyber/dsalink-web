"use client";

/**
 * Card-based mock-interview practice. Works for a parent coaching a child OR a
 * child practising solo. No recording, no AI, no scoring — the model answer is
 * the reference. Question can be read aloud via the browser's built-in Web
 * Speech API (free, client-side).
 *
 * Deck = [self-intro] + shared COMMON_QUESTIONS + this talent's specific questions
 * (see lib/interviewCommon.ts). Built once here; the static page renders the same set.
 */
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Volume2,
  Lightbulb,
  AlertTriangle,
  Check,
  ChevronLeft,
  ChevronRight,
  Play,
  RotateCcw,
  Users,
  User,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n";
import type { InterviewQuestion, LocaleStr, LocaleStrFlex } from "@/lib/talentPages";
import { buildDeck, type DeckCard, type DeckCardKind } from "@/lib/interviewCommon";

function pickFlex(s: LocaleStrFlex, locale: Locale): string {
  return s[locale] ?? s.en;
}
function pick(s: LocaleStr, locale: Locale): string {
  return s[locale];
}

const KIND_LABEL: Record<DeckCardKind, LocaleStr> = {
  "self-intro": { en: "Self-introduction", zh: "自我介绍", ms: "Perkenalan diri", ta: "சுய அறிமுகம்" },
  common: { en: "Common question", zh: "通用题", ms: "Soalan umum", ta: "பொதுக் கேள்வி" },
  talent: { en: "Talent-specific", zh: "项目专属题", ms: "Khusus bakat", ta: "திறமை சார்ந்தது" },
};

const ttsSupported = typeof window !== "undefined" && "speechSynthesis" in window;

let voiceCache: SpeechSynthesisVoice[] = [];
function refreshVoices() {
  if (!ttsSupported) return;
  const v = window.speechSynthesis.getVoices();
  if (v.length) voiceCache = v;
}

/**
 * Pick the most natural available voice for the language. Browsers ship a few
 * network/neural voices (Google, Microsoft "Natural/Online", Mac "Premium")
 * that sound far more human than the default — we just have to choose them.
 */
function pickVoice(zh: boolean): SpeechSynthesisVoice | undefined {
  if (!voiceCache.length) refreshVoices();
  const voices = voiceCache;
  if (!voices.length) return undefined;
  const cand = voices.filter((v) => {
    const l = v.lang.toLowerCase();
    return zh ? l.startsWith("zh") || l.startsWith("cmn") : l.startsWith("en");
  });
  if (!cand.length) return undefined;
  const prefer = zh
    ? ["natural", "neural", "google 普通话", "google", "tingting", "ting-ting", "meijia", "mei-jia", "sinji", "premium"]
    : ["natural", "neural", "google uk english female", "google us english", "google", "premium", "samantha", "serena", "karen", "daniel"];
  for (const key of prefer) {
    const hit = cand.find((v) => v.name.toLowerCase().includes(key));
    if (hit) return hit;
  }
  // Network voices (localService === false) are the neural ones — prefer them.
  return cand.find((v) => !v.localService) ?? cand[0];
}

let keepAlive: ReturnType<typeof setInterval> | undefined;
function stopKeepAlive() {
  if (keepAlive) {
    clearInterval(keepAlive);
    keepAlive = undefined;
  }
}

function speak(text: string) {
  if (!ttsSupported) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  stopKeepAlive();

  const zh = /[一-鿿]/.test(text);
  const voice = pickVoice(zh);

  // Split into short clauses so each utterance stays well under Chrome's
  // ~15s single-utterance cutoff (the cause of the stutter/drop on long text).
  const chunks = text.match(/[^.!?。！？；;]+[.!?。！？；;]?/g) ?? [text];
  for (const raw of chunks) {
    const c = raw.trim();
    if (!c) continue;
    const u = new SpeechSynthesisUtterance(c);
    if (voice) u.voice = voice;
    u.lang = voice?.lang ?? (zh ? "zh-CN" : "en-GB");
    u.rate = 0.98;
    u.pitch = 1;
    synth.speak(u);
  }

  // Chrome keepalive: nudge resume periodically so the queue doesn't pause.
  keepAlive = setInterval(() => {
    if (synth.speaking) synth.resume();
    else stopKeepAlive();
  }, 9000);
}

export function InterviewFlashcards({
  talentLabel,
  questions,
}: {
  talentLabel: LocaleStr;
  questions: InterviewQuestion[];
}) {
  const { locale } = useLanguage();
  const t = (s: LocaleStr) => s[locale];

  const [started, setStarted] = useState(false);
  const [includeIntro, setIncludeIntro] = useState(true);
  const [solo, setSolo] = useState(false); // false = parent coaches child; true = child practises alone
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  // Voices load asynchronously in Chrome — warm the cache so the first
  // read-aloud already uses the natural voice, not the robotic default.
  useEffect(() => {
    if (!ttsSupported) return;
    refreshVoices();
    window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", refreshVoices);
      window.speechSynthesis.cancel();
      stopKeepAlive();
    };
  }, []);

  const deck: DeckCard[] = useMemo(
    () => buildDeck(questions, { includeSelfIntro: includeIntro }),
    [questions, includeIntro],
  );

  const card = deck[index];
  const atEnd = index >= deck.length - 1;

  function go(delta: number) {
    setIndex((i) => Math.min(Math.max(i + delta, 0), deck.length - 1));
    setRevealed(false);
  }
  function restart() {
    setIndex(0);
    setRevealed(false);
    setStarted(false);
  }

  // ---- Setup screen ----
  if (!started) {
    return (
      <div className="rounded-2xl border border-intellectual/10 bg-surface-warm p-5 shadow-soft sm:p-7">
        <p className="max-w-xl text-sm leading-relaxed text-intellectual/70">
          {locale === "zh"
            ? "一次一题。先让孩子开口答，再翻开看作答建议、雷区和更好的答法。可读题、可自己练。"
            : locale === "ms"
              ? "Satu soalan setiap kali. Biar anak menjawab dahulu, kemudian dedahkan cadangan, perangkap, dan jawapan yang lebih baik. Boleh dibaca kuat, boleh berlatih sendiri."
              : locale === "ta"
                ? "ஒரு நேரத்தில் ஒரு கேள்வி. முதலில் குழந்தை பதிலளிக்கட்டும், பிறகு ஆலோசனை, தவிர்க்க வேண்டியவை, சிறந்த பதிலைக் காட்டுங்கள். வாசித்துக் காட்டலாம், தனியாகப் பயிற்சி செய்யலாம்."
                : "One question at a time. Let your child answer first, then reveal the guidance, pitfalls, and a stronger answer. Read aloud, or practise solo."}
        </p>

        {/* Audience toggle */}
        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold text-intellectual/55 normal-case">
            {locale === "zh" ? "谁来练" : locale === "ms" ? "Siapa berlatih" : locale === "ta" ? "யார் பயிற்சி" : "Who's practising"}
          </p>
          <div className="flex flex-wrap gap-2">
            <Toggle active={!solo} onClick={() => setSolo(false)} icon={Users}>
              {locale === "zh" ? "家长陪练" : locale === "ms" ? "Ibu bapa membimbing" : locale === "ta" ? "பெற்றோர் வழிகாட்டல்" : "Parent coaches"}
            </Toggle>
            <Toggle active={solo} onClick={() => setSolo(true)} icon={User}>
              {locale === "zh" ? "自己练" : locale === "ms" ? "Berlatih sendiri" : locale === "ta" ? "தானே பயிற்சி" : "Practise solo"}
            </Toggle>
          </div>
        </div>

        {/* Scope toggle */}
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold text-intellectual/55 normal-case">
            {locale === "zh" ? "练习范围" : locale === "ms" ? "Skop latihan" : locale === "ta" ? "பயிற்சி வரம்பு" : "What to practise"}
          </p>
          <div className="flex flex-wrap gap-2">
            <Toggle active={includeIntro} onClick={() => setIncludeIntro(true)}>
              {locale === "zh" ? "完整（自我介绍 + 问答）" : locale === "ms" ? "Penuh (perkenalan + soal jawab)" : locale === "ta" ? "முழுமை (அறிமுகம் + கேள்வி)" : "Full (intro + Q&A)"}
            </Toggle>
            <Toggle active={!includeIntro} onClick={() => setIncludeIntro(false)}>
              {locale === "zh" ? "只练问答" : locale === "ms" ? "Soal jawab sahaja" : locale === "ta" ? "கேள்வி-பதில் மட்டும்" : "Q&A only"}
            </Toggle>
          </div>
        </div>

        <button
          onClick={() => {
            setIndex(0);
            setRevealed(false);
            setStarted(true);
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-intellectual px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-intellectual/90"
        >
          <Play className="h-4 w-4" />
          <span style={{ textTransform: "none" }}>
            {locale === "zh"
              ? `开始（${deck.length} 题）`
              : locale === "ms"
                ? `Mula (${deck.length} soalan)`
                : locale === "ta"
                  ? `தொடங்கு (${deck.length})`
                  : `Start (${deck.length} cards)`}
          </span>
        </button>
      </div>
    );
  }

  // ---- Card screen ----
  const questionText = pickFlex(card.question, locale);
  const answerPrompt = solo
    ? locale === "zh"
      ? "自己大声说一遍答案，再看建议"
      : locale === "ms"
        ? "Jawab kuat-kuat sendiri, kemudian lihat cadangan"
        : locale === "ta"
          ? "சத்தமாக பதிலளியுங்கள், பிறகு ஆலோசனையைப் பாருங்கள்"
          : "Say your answer out loud, then check the guidance"
    : locale === "zh"
      ? "让孩子答给你听，再一起看建议"
      : locale === "ms"
        ? "Minta anak menjawab kepada anda, kemudian lihat cadangan bersama"
        : locale === "ta"
          ? "குழந்தை உங்களிடம் பதிலளிக்கட்டும், பிறகு சேர்ந்து பாருங்கள்"
          : "Let your child answer you, then review the guidance together";

  return (
    <div className="rounded-2xl border border-intellectual/10 bg-surface-warm p-5 shadow-soft sm:p-7">
      {/* Progress + kind */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-champagne/25 px-3 py-1 text-[11px] font-bold tracking-[0.1em] text-intellectual normal-case">
          {t(KIND_LABEL[card.kind])}
        </span>
        <span className="text-xs font-semibold text-intellectual/50">
          {index + 1} / {deck.length}
        </span>
      </div>
      <div className="mb-5 h-1 w-full overflow-hidden rounded-full bg-intellectual/10">
        <div
          className="h-full rounded-full bg-champagne transition-all"
          style={{ width: `${((index + 1) / deck.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="flex items-start gap-3">
        <p className="flex-1 text-lg font-bold leading-snug text-intellectual sm:text-xl">
          “{questionText}”
        </p>
        {ttsSupported && (
          <button
            onClick={() => speak(questionText)}
            aria-label={locale === "zh" ? "读题" : "Read question aloud"}
            className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-intellectual/8 text-intellectual transition hover:bg-intellectual/15"
          >
            <Volume2 className="h-4.5 w-4.5" />
          </button>
        )}
      </div>

      {/* Answer prompt (before reveal) */}
      {!revealed && (
        <div className="mt-6">
          <p className="text-sm italic text-intellectual/55">{answerPrompt}</p>
          <button
            onClick={() => setRevealed(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-intellectual/15 bg-white px-5 py-2.5 text-sm font-semibold text-intellectual transition hover:border-intellectual/30 hover:bg-surface"
          >
            <Lightbulb className="h-4 w-4 text-champagne-dark" />
            <span style={{ textTransform: "none" }}>
              {locale === "zh" ? "看建议" : locale === "ms" ? "Lihat cadangan" : locale === "ta" ? "ஆலோசனையைப் பார்" : "See the guidance"}
            </span>
          </button>
        </div>
      )}

      {/* Guidance (after reveal) */}
      {revealed && (
        <div className="mt-6 space-y-4">
          <GuidanceBlock
            icon={Lightbulb}
            tone="neutral"
            label={locale === "zh" ? "作答建议" : locale === "ms" ? "Cadangan menjawab" : locale === "ta" ? "பதிலளிக்கும் ஆலோசனை" : "How to answer"}
            body={pickFlex(card.approach, locale)}
          />
          {card.pitfall && (
            <GuidanceBlock
              icon={AlertTriangle}
              tone="warn"
              label={locale === "zh" ? "雷区" : locale === "ms" ? "Perangkap" : locale === "ta" ? "தவிர்க்க வேண்டியவை" : "Pitfalls to avoid"}
              body={pickFlex(card.pitfall, locale)}
            />
          )}
          <GuidanceBlock
            icon={Check}
            tone="good"
            label={locale === "zh" ? "答什么更好" : locale === "ms" ? "Jawapan yang lebih baik" : locale === "ta" ? "சிறந்த பதில்" : "A stronger answer"}
            body={pickFlex(card.template, locale)}
            quoted
          />
        </div>
      )}

      {/* Nav */}
      <div className="mt-7 flex items-center justify-between gap-3">
        <button
          onClick={() => go(-1)}
          disabled={index === 0}
          className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-intellectual/70 transition hover:bg-intellectual/5 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
          <span style={{ textTransform: "none" }}>{locale === "zh" ? "上一题" : locale === "ms" ? "Sebelum" : locale === "ta" ? "முந்தைய" : "Previous"}</span>
        </button>

        {atEnd ? (
          <button
            onClick={restart}
            className="inline-flex items-center gap-1.5 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-intellectual/90"
          >
            <RotateCcw className="h-4 w-4" />
            <span style={{ textTransform: "none" }}>{locale === "zh" ? "再练一次" : locale === "ms" ? "Ulang" : locale === "ta" ? "மீண்டும்" : "Practise again"}</span>
          </button>
        ) : (
          <button
            onClick={() => go(1)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-intellectual/90"
          >
            <span style={{ textTransform: "none" }}>{locale === "zh" ? "下一题" : locale === "ms" ? "Seterusnya" : locale === "ta" ? "அடுத்தது" : "Next"}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Coach CTA — shown once the deck is complete */}
      {atEnd && (
        <div className="mt-6 overflow-hidden rounded-xl border border-champagne/40 bg-intellectual text-white">
          <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-champagne/20 text-champagne-light">
              <GraduationCap className="h-5 w-5" aria-hidden />
            </div>
            <p className="min-w-0 flex-1 text-[13px] leading-relaxed text-white/85 sm:text-sm">
              {locale === "zh"
                ? "想让孩子在真人面前练一遍？目录里有按项目分类的教练。"
                : locale === "ms"
                  ? "Mahu anak berlatih di hadapan orang sebenar? Direktori kami menyenaraikan jurulatih mengikut bakat."
                  : locale === "ta"
                    ? "உண்மையான நபர் முன் பயிற்சி செய்ய விரும்புகிறீர்களா? எங்கள் பட்டியலில் திறமை வாரியாக பயிற்சியாளர்கள் உள்ளனர்."
                    : "Want your child to rehearse in front of a real person? Our directory lists coaches by talent."}
            </p>
            <Link
              href="/dsa-coaches"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-lg bg-champagne px-4 py-2.5 text-[13px] font-semibold text-intellectual transition hover:bg-champagne-light sm:self-center"
            >
              <span style={{ textTransform: "none" }}>
                {locale === "zh" ? "找一位教练" : locale === "ms" ? "Cari jurulatih" : locale === "ta" ? "பயிற்சியாளர் தேடு" : "Find a coach"}
              </span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Toggle({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
        active
          ? "border-intellectual bg-intellectual text-white"
          : "border-intellectual/15 bg-white text-intellectual/70 hover:border-intellectual/30"
      }`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span style={{ textTransform: "none" }}>{children}</span>
    </button>
  );
}

function GuidanceBlock({
  icon: Icon,
  tone,
  label,
  body,
  quoted,
}: {
  icon: React.ComponentType<{ className?: string }>;
  tone: "neutral" | "warn" | "good";
  label: string;
  body: string;
  quoted?: boolean;
}) {
  const toneCls =
    tone === "warn"
      ? "border-champagne-dark/30 bg-champagne/10"
      : tone === "good"
        ? "border-intellectual/15 bg-intellectual/5"
        : "border-intellectual/10 bg-white";
  const iconCls = tone === "warn" ? "text-champagne-dark" : tone === "good" ? "text-intellectual" : "text-champagne-dark";
  return (
    <div className={`rounded-xl border p-4 ${toneCls}`}>
      <p className="mb-1.5 inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.08em] text-intellectual/70 normal-case">
        <Icon className={`h-3.5 w-3.5 ${iconCls}`} />
        {label}
      </p>
      <p className="text-sm leading-relaxed text-intellectual/80">
        {quoted ? `“${body}”` : body}
      </p>
    </div>
  );
}
