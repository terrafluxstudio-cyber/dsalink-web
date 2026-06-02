/**
 * Six composite parent-story hooks — shared between:
 *   · /dsa-guide Pillar Ch2 (DsaGuidePageBody)
 *   · Homepage mid-page centerpiece (HomeParentStoriesGrid)
 *
 * Stories are composite scenarios drawn from documented DSA mechanics and
 * patterns parents share publicly. Names, scores, and identifying details
 * are illustrative — see /dsa-experience for the full 12-case treatment.
 *
 * To stay in sync with MOE_FACTS.md, any rule-bound outcome (Confirmed
 * Offer, Waitlist conversion, Commitment Rule, S1 Posting) must remain
 * accurate. Cosmetic copy (names, talent area phrasing) may be edited.
 */
import {
  Music,
  RotateCcw,
  Swords,
  TrendingUp,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type LocaleStr = { en: string; zh: string; ms: string; ta: string };

export type StoryHook = {
  icon: LucideIcon;
  /** Tailwind classes for the icon chip — colour-coded per story */
  iconBg: string;
  name: LocaleStr;
  talent: LocaleStr;
  outcome: LocaleStr;
};

export const STORIES: StoryHook[] = [
  {
    icon: Swords,
    iconBg: "bg-rose-50 text-rose-600",
    name: { en: "Maya · P6 girl", zh: "Maya · P6 女生", ms: "Maya · P6", ta: "Maya · P6" },
    talent: { en: "Fencing (national grade)", zh: "击剑（国家级）", ms: "Lawan pedang (gred kebangsaan)", ta: "வாள் சண்டை (தேசிய தரம்)" },
    outcome: {
      en: "Confirmed Offer at a school ~4 AL above her likely PSLE-posting reach.",
      zh: "拿到 Confirmed Offer · 比预估 PSLE 派位高约 4 AL 等级。",
      ms: "Tawaran Sah di sekolah ~4 AL lebih tinggi daripada jangkauan PSLE.",
      ta: "உறுதிசெய்யப்பட்ட சலுகை — PSLE-ஐ விட ~4 AL உயரமான பள்ளியில்.",
    },
  },
  {
    icon: Wrench,
    iconBg: "bg-amber-50 text-amber-700",
    name: { en: "Aaryan · P6 boy", zh: "Aaryan · P6 男生", ms: "Aaryan · P6", ta: "Aaryan · P6" },
    talent: { en: "Robotics & engineering", zh: "机器人 & 工程", ms: "Robotik & kejuruteraan", ta: "ரோபாட்டிக்ஸ் & பொறியியல்" },
    outcome: {
      en: "Confirmed Offer at a full-DSA specialised school — no PSLE posting pathway alternative.",
      zh: "拿到全 DSA 专科学校 Confirmed Offer · 没有 PSLE 派位替代路径。",
      ms: "Tawaran Sah di sekolah DSA penuh khusus — tiada laluan PSLE alternatif.",
      ta: "முழு-DSA சிறப்புப் பள்ளியில் உறுதிசெய்யப்பட்ட சலுகை — PSLE மாற்று வழி இல்லை.",
    },
  },
  {
    icon: Music,
    iconBg: "bg-violet-50 text-violet-700",
    name: { en: "Kai-Lin · P6 girl", zh: "Kai-Lin · P6 女生", ms: "Kai-Lin · P6", ta: "Kai-Lin · P6" },
    talent: { en: "Choir & vocal music", zh: "合唱 & 声乐", ms: "Koir & vokal", ta: "பாடகர் குழு & குரல் இசை" },
    outcome: {
      en: "Started as Waitlist, converted to Confirmed Offer in October — no formal private training.",
      zh: "先进 Waitlist · 10 月转为 Confirmed Offer · 没正式上私人课。",
      ms: "Mula sebagai Senarai Menunggu, ditukar kepada Tawaran Sah pada Oktober — tiada latihan persendirian.",
      ta: "காத்திருப்பு பட்டியலில் தொடங்கி, அக்டோபரில் உறுதிசெய்யப்பட்ட சலுகையாக மாற்றப்பட்டது — தனியார் பயிற்சி இல்லை.",
    },
  },
  {
    icon: Users,
    iconBg: "bg-emerald-50 text-emerald-700",
    name: { en: "Daniel · P6 boy", zh: "Daniel · P6 男生", ms: "Daniel · P6", ta: "Daniel · P6" },
    talent: { en: "Leadership track", zh: "领导力方向", ms: "Trek kepimpinan", ta: "தலைமைத்துவ பாதை" },
    outcome: {
      en: "Confirmed Offer ~2 AL above PSLE reach — documented impact mattered more than committee titles.",
      zh: "拿到 Confirmed Offer · 比 PSLE 派位高约 2 AL · 看的是真实贡献而不是头衔。",
      ms: "Tawaran Sah ~2 AL atas PSLE — kesan terdokumentasi lebih penting daripada gelaran jawatankuasa.",
      ta: "PSLE-ஐ விட ~2 AL உயர் உறுதிசெய்யப்பட்ட சலுகை — பதவிப் பெயரை விட ஆவணப்படுத்தப்பட்ட தாக்கம் முக்கியம்.",
    },
  },
  {
    icon: TrendingUp,
    iconBg: "bg-slate-100 text-slate-700",
    name: { en: "Wei-Han · P6 girl", zh: "Wei-Han · P6 女生", ms: "Wei-Han · P6", ta: "Wei-Han · P6" },
    talent: {
      en: "Swimming · PSLE later exceeded all expectations",
      zh: "游泳 · PSLE 后来超水平发挥",
      ms: "Berenang · PSLE kemudian melebihi jangkaan",
      ta: "நீச்சல் · PSLE பின்னர் எதிர்பார்ப்புகளை மீறியது",
    },
    outcome: {
      en: "Bound to her DSA school by Commitment Rule — could not move to the higher-tier school her PSLE result would have reached.",
      zh: "受 Commitment Rule 约束 · 不能转到 PSLE 成绩本可达到的更高 tier 学校。",
      ms: "Terikat ke sekolah DSA oleh Peraturan Komitmen — tidak boleh berpindah ke sekolah tahap lebih tinggi.",
      ta: "உறுதிமொழி விதியால் தனது DSA பள்ளியில் கட்டப்பட்டிருக்கிறார் — உயர் தரப் பள்ளிக்கு மாற முடியாது.",
    },
  },
  {
    icon: RotateCcw,
    iconBg: "bg-blue-50 text-blue-700",
    name: { en: "Marcus · P6 boy", zh: "Marcus · P6 男生", ms: "Marcus · P6", ta: "Marcus · P6" },
    talent: { en: "3 applications · all unsuccessful", zh: "申请 3 所 · 全部未录取", ms: "3 permohonan · semua tidak berjaya", ta: "3 விண்ணப்பங்கள் · அனைத்தும் தோல்வி" },
    outcome: {
      en: "DSA didn't work out — PSLE delivered a strong score and S1 Posting placed him at the right-fit school anyway.",
      zh: "DSA 没成 · PSLE 考得不错 · S1 Posting 把他派到了一所很合适的学校。",
      ms: "DSA tidak berjaya — PSLE memberikan skor kuat dan Penempatan S1 menempatkannya di sekolah yang sesuai.",
      ta: "DSA வேலை செய்யவில்லை — PSLE வலுவான மதிப்பெண்ணைக் கொடுத்தது, S1 Posting அவரை சரியான பள்ளியில் வைத்தது.",
    },
  },
];
