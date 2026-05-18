# CURSOR TASK — DSA Experience Batch C
# (STEM tier chart · Portfolio comparison · After Selection section · Open House section)

**Files to edit:**
1. `content/dsa-experience.tsx`
2. `components/DsaExperiencePageBody.tsx`

**Verification:** `npx tsc --noEmit` must pass with zero errors.

Execute all parts in order. Do not skip any part.

---

## PART 1 — Add new types to content/dsa-experience.tsx

Find the existing type block at the top of the file:

```typescript
export type DsaExperienceCallout = {
  type: "warning" | "insight";
  heading: string;
  body: string;
};

export type DsaExperienceSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  orderedList?: string[];
  callouts?: DsaExperienceCallout[];
};
```

Replace with:

```typescript
export type DsaExperienceCallout = {
  type: "warning" | "insight";
  heading: string;
  body: string;
};

export type DsaExperienceTierItem = {
  label: string;
  examples: string;
};

export type DsaExperienceComparisonRow = {
  weak: string;
  strong: string;
};

export type DsaExperienceComparison = {
  weakLabel: string;
  strongLabel: string;
  rows: DsaExperienceComparisonRow[];
};

export type DsaExperienceQuestionSet = {
  label: string;
  icon: "teacher" | "student";
  questions: string[];
};

export type DsaExperienceSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  orderedList?: string[];
  callouts?: DsaExperienceCallout[];
  tierChart?: DsaExperienceTierItem[];
  comparison?: DsaExperienceComparison;
  questionSets?: DsaExperienceQuestionSet[];
};
```

---

## PART 2 — Add tierChart to section-5 in SECTIONS_EN

Find the section-5 object in SECTIONS_EN. It currently has `paragraphs`, `orderedList`, and `bullets`. Add `tierChart` as a new property (after `paragraphs`, before `orderedList`):

```typescript
    tierChart: [
      {
        label: "International Olympiad / equivalent",
        examples: "IMO, IPhO, IChO, IOI representation or recognised international final",
      },
      {
        label: "NMOS Special Round · APMOPS Invitational Round",
        examples: "Note: NMOS restructured in 2025–2026, Special Round eliminated — re-verify current format",
      },
      {
        label: "NMOS Gold · SMOPS Top 10 · AMO top performer bands",
        examples: "Strong baseline for most IP school STEM DSA tracks",
      },
      {
        label: "SASMO Gold",
        examples: "Competitive, but common among top-school applicants — needs supporting evidence",
      },
      {
        label: "SASMO Silver / Bronze + multiple competitions",
        examples: "Solid foundation; rarely sufficient alone for the most selective STEM DSA tracks",
      },
    ],
```

---

## PART 3 — Add tierChart to section-5 in SECTIONS_ZH

Find section-5 in SECTIONS_ZH. Add `tierChart` after `paragraphs`, before `orderedList`:

```typescript
    tierChart: [
      {
        label: "国际奥林匹克竞赛 / 同等级别",
        examples: "IMO、IPhO、IChO、IOI 代表赛或认可的国际决赛级别",
      },
      {
        label: "NMOS 特别轮 · APMOPS 特邀赛",
        examples: "注意：NMOS 已于 2025–2026 年重组，特别轮已取消，请核实当前赛制",
      },
      {
        label: "NMOS 金奖 · SMOPS 前 10 · AMO 顶尖梯队",
        examples: "大多数 IP 学校 STEM DSA 路径的有力基础",
      },
      {
        label: "SASMO 金奖",
        examples: "有竞争力，但在顶校申请者中普遍——需要其他支撑证据",
      },
      {
        label: "SASMO 银/铜奖 + 多个竞赛参与",
        examples: "扎实基础；单独凭此很少足够申请选拔性最高的 STEM DSA 路径",
      },
    ],
```

---

## PART 4 — Add tierChart to section-5 in SECTIONS_MS

Find section-5 in SECTIONS_MS. Add `tierChart` after `paragraphs`, before `orderedList`:

```typescript
    tierChart: [
      {
        label: "Olimpiad Antarabangsa / setara",
        examples: "Perwakilan IMO, IPhO, IChO, IOI atau final antarabangsa yang diiktiraf",
      },
      {
        label: "NMOS Special Round · APMOPS Invitational Round",
        examples: "Nota: NMOS disusun semula pada 2025–2026, Special Round dihapuskan — sahkan format semasa",
      },
      {
        label: "NMOS Gold · SMOPS Top 10 · AMO band teratas",
        examples: "Asas yang kukuh untuk kebanyakan trek DSA STEM sekolah IP",
      },
      {
        label: "SASMO Gold",
        examples: "Kompetitif, tetapi biasa di kalangan pemohon sekolah teratas — memerlukan bukti sokongan",
      },
      {
        label: "SASMO Silver / Bronze + pelbagai pertandingan",
        examples: "Asas yang kukuh; jarang mencukupi sahaja untuk trek DSA STEM yang paling selektif",
      },
    ],
```

---

## PART 5 — Add tierChart to section-5 in SECTIONS_TA

Find section-5 in SECTIONS_TA. Add `tierChart` after `paragraphs`, before `orderedList`:

```typescript
    tierChart: [
      {
        label: "சர்வதேச ஒலிம்பியாட் / சமகாரம்",
        examples: "IMO, IPhO, IChO, IOI பிரதிநிதித்துவம் அல்லது அங்கீகரிக்கப்பட்ட சர்வதேச இறுதிப் போட்டி",
      },
      {
        label: "NMOS Special Round · APMOPS Invitational Round",
        examples: "குறிப்பு: NMOS 2025–2026-ல் மறுகட்டமைக்கப்பட்டது, Special Round நீக்கப்பட்டது — தற்போதைய வடிவத்தை சரிபார்க்கவும்",
      },
      {
        label: "NMOS Gold · SMOPS Top 10 · AMO உயர் பட்டைகள்",
        examples: "பெரும்பாலான IP பள்ளி STEM DSA பாதைகளுக்கான வலுவான அடிப்படை",
      },
      {
        label: "SASMO Gold",
        examples: "போட்டித்தன்மை வாய்ந்தது, ஆனால் சிறந்த பள்ளி விண்ணப்பதாரர்களிடையே பொதுவானது — ஆதரவு சான்றுகள் தேவை",
      },
      {
        label: "SASMO Silver / Bronze + பல போட்டிகள்",
        examples: "உறுதியான அடிப்படை; மிகவும் தேர்ந்தெடுக்கப்பட்ட STEM DSA பாதைகளுக்கு தனியாக அரிதாகவே போதுமானது",
      },
    ],
```

---

## PART 6 — Add comparison to section-3 in SECTIONS_EN

Find section-3 in SECTIONS_EN. Add `comparison` as a new property after `paragraphs` and after `callouts` (if callouts already exists, add comparison before callouts):

```typescript
    comparison: {
      weakLabel: "Weak portfolio",
      strongLabel: "Strong portfolio",
      rows: [
        {
          weak: "Six participation certificates with no placings or rankings",
          strong: "Two achievements with documented progression and independently verified results",
        },
        {
          weak: "School CCA participation only — no external training record",
          strong: "3+ years of structured external coaching, minimum 3 sessions per week",
        },
        {
          weak: "Team medal listed with no context on individual contribution",
          strong: "Individual results, or specific role documented — position played, parts performed, competition minutes",
        },
        {
          weak: "Identical personal statement submitted to every school",
          strong: "Specific, articulated reason for this school's programme — names the coach, CCA culture, or competitions the school enters",
        },
        {
          weak: "Portfolio assembled over one week in March of Primary 6",
          strong: "Portfolio reflects sustained, documented engagement over 2–3 years",
        },
      ],
    },
```

---

## PART 7 — Add comparison to section-3 in SECTIONS_ZH

Find section-3 in SECTIONS_ZH. Add `comparison` as a new property in the same position as PART 6:

```typescript
    comparison: {
      weakLabel: "弱的作品集",
      strongLabel: "强的作品集",
      rows: [
        {
          weak: "六张参与奖状，没有名次或排名",
          strong: "两项有成长轨迹、有第三方认证结果的成就记录",
        },
        {
          weak: "只有学校 CCA 参与记录，无校外培训",
          strong: "3 年以上系统校外培训，每周至少 3 次",
        },
        {
          weak: "列出团体奖牌，未说明个人贡献",
          strong: "个人成绩有记录，或明确说明上场位置、演出角色、比赛时间",
        },
        {
          weak: "对每所学校提交完全相同的自我介绍",
          strong: "能说出为什么是这所学校的这个项目——具体到教练名字、CCA 文化或参加的赛事",
        },
        {
          weak: "小六三月花一周临时整理的作品集",
          strong: "作品集反映了 2–3 年间持续记录的参与历程",
        },
      ],
    },
```

---

## PART 8 — Add comparison to section-3 in SECTIONS_MS

Find section-3 in SECTIONS_MS. Add `comparison` in the same position:

```typescript
    comparison: {
      weakLabel: "Portfolio yang lemah",
      strongLabel: "Portfolio yang kukuh",
      rows: [
        {
          weak: "Enam sijil penyertaan tanpa tempat atau kedudukan",
          strong: "Dua pencapaian dengan perkembangan yang didokumentasikan dan keputusan yang disahkan secara bebas",
        },
        {
          weak: "Hanya penyertaan CCA sekolah — tiada rekod latihan luar",
          strong: "3+ tahun latihan luar berstruktur, minimum 3 sesi seminggu",
        },
        {
          weak: "Pingat pasukan disenaraikan tanpa konteks sumbangan individu",
          strong: "Keputusan individu, atau peranan khusus didokumentasikan — kedudukan dimainkan, bahagian yang dilakukan, minit pertandingan",
        },
        {
          weak: "Pernyataan peribadi yang sama diserahkan kepada setiap sekolah",
          strong: "Sebab khusus yang dinyatakan untuk program sekolah ini — menyebut jurulatih, budaya CCA, atau pertandingan yang dimasuki sekolah",
        },
        {
          weak: "Portfolio disusun dalam masa satu minggu pada Mac Darjah 6",
          strong: "Portfolio mencerminkan penglibatan yang berterusan dan didokumentasikan selama 2–3 tahun",
        },
      ],
    },
```

---

## PART 9 — Add comparison to section-3 in SECTIONS_TA

Find section-3 in SECTIONS_TA. Add `comparison` in the same position:

```typescript
    comparison: {
      weakLabel: "பலவீனமான போர்ட்ஃபோலியோ",
      strongLabel: "வலுவான போர்ட்ஃபோலியோ",
      rows: [
        {
          weak: "இடம் அல்லது தரவரிசை இல்லாத ஆறு பங்கேற்பு சான்றிதழ்கள்",
          strong: "ஆவணப்படுத்தப்பட்ட முன்னேற்றம் மற்றும் சுயாதீனமாக சரிபார்க்கப்பட்ட முடிவுகளுடன் இரண்டு சாதனைகள்",
        },
        {
          weak: "பள்ளி CCA பங்கேற்பு மட்டும் — வெளி பயிற்சி பதிவு இல்லை",
          strong: "3+ ஆண்டுகள் கட்டமைக்கப்பட்ட வெளி பயிற்சி, வாரம் குறைந்தது 3 அமர்வுகள்",
        },
        {
          weak: "தனிப்பட்ட பங்களிப்பு பற்றிய சூழல் இல்லாமல் குழு பதக்கம் பட்டியலிடப்பட்டது",
          strong: "தனிப்பட்ட முடிவுகள், அல்லது குறிப்பிட்ட பாத்திரம் ஆவணப்படுத்தப்பட்டது — விளையாடிய நிலை, செய்யப்பட்ட பகுதிகள், போட்டி நிமிடங்கள்",
        },
        {
          weak: "ஒவ்வொரு பள்ளிக்கும் ஒரே மாதிரியான தனிப்பட்ட அறிக்கை சமர்ப்பிக்கப்பட்டது",
          strong: "இந்த பள்ளியின் திட்டத்திற்கான குறிப்பிட்ட காரணம் — பயிற்சியாளரின் பெயர், CCA கலாச்சாரம் அல்லது போட்டிகளை குறிப்பிடுகிறது",
        },
        {
          weak: "6ஆம் வகுப்பு மார்ச் மாதத்தில் ஒரு வாரத்தில் திரட்டப்பட்ட போர்ட்ஃபோலியோ",
          strong: "போர்ட்ஃபோலியோ 2–3 ஆண்டுகளில் தொடர்ச்சியான, ஆவணப்படுத்தப்பட்ட ஈடுபாட்டை பிரதிபலிக்கிறது",
        },
      ],
    },
```

---

## PART 10 — Rename old section-8 to section-10 in all 4 locale arrays

In SECTIONS_EN, SECTIONS_ZH, SECTIONS_MS, and SECTIONS_TA:

Find (in each array):
```typescript
    id: "section-8",
```
Replace with:
```typescript
    id: "section-10",
```

There is exactly one `section-8` per locale array. Make the replacement in all four arrays.

---

## PART 11 — Insert new section-8 (After Selection) into SECTIONS_EN

In SECTIONS_EN, find the section object that now has `id: "section-10"` (the checklist section). Insert the following TWO new section objects immediately before it (between section-7 and section-10):

```typescript
  {
    id: "section-8",
    title: "After Selection: What Your Result Actually Means",
    paragraphs: [
      "DSA results arrive between late August and September. Schools communicate directly by email or phone. Most schools avoid releasing results during PSLE oral week and school preliminary examination periods — if results are delayed, this is usually why.",
      "Three outcomes are possible. A Confirmed Offer (CO) means you have a guaranteed place, conditional on meeting the school's minimum posting group at PSLE. For IP and Express schools this generally means AL 22 or better. A Waiting List (WL) means you are in consideration if a CO holder declines. Unsuccessful means you were not selected — PSLE posting and S1 Appeal remain available.",
      "If you hold a CO, you submit ranked school preferences in October — before PSLE results are released. If you receive COs from more than one school, the October ranking is the most consequential decision you will make. Ranking the wrong school first is very difficult to undo.",
      "Once a school is allocated to you through your October submission, that allocation is final regardless of PSLE results. If your child's November PSLE score would have qualified them for a school ranked lower on your October list, the October allocation still holds.",
    ],
    callouts: [
      {
        type: "insight",
        heading: "WL from NUS High: a different calculation",
        body: "NUS High CO holders frequently choose other schools in October, releasing a high proportion of WL spots. A NUS High waitlist offer has historically converted at rates that surprise first-time DSA families. Do not treat it as equivalent to an unsuccessful result.",
      },
      {
        type: "insight",
        heading: "Historical WL conversion: roughly half",
        body: "Across schools, approximately 50% of waitlisted students who keep their offer ultimately receive a confirmed place. This varies significantly by school and talent area — but a WL is not a rejection.",
      },
      {
        type: "warning",
        heading: "The October ranking is the real decision",
        body: "With multiple COs in hand, the school you rank first in October is the school you will attend — regardless of what PSLE results show in November. Treat the October ranking with the same seriousness as the application itself.",
      },
    ],
  },
  {
    id: "section-9",
    title: "Open House: The Questions That Actually Matter",
    paragraphs: [
      "The April and May open houses — held before the DSA application window opens — are your intelligence-gathering window. Schools sometimes reveal shortlisting criteria at open houses that they do not publish anywhere. What you learn here cannot be found on any website.",
      "The most useful people at an open house are not the teachers explaining policy — they are the current DSA students running activity booths. Talk to both groups, but ask different things.",
    ],
    callouts: [
      {
        type: "warning",
        heading: "Only the April–May open houses are relevant for DSA",
        body: "November open houses (for S1 Posting) are after the DSA cycle is complete. If you miss the April–May window, you lose the only structured opportunity to gather school-specific intelligence before applications close on 2 June.",
      },
    ],
    questionSets: [
      {
        label: "Ask the CCA teacher or coach",
        icon: "teacher",
        questions: [
          "How many places are you offering in this talent area this year? How many did you take last year?",
          "What does a typical successful applicant's profile look like for this specific talent area?",
          "Will you consider students who have not represented their primary school in inter-school competitions?",
          "If my child is offered DSA admission, will it be for the IP or O Level track?",
          "What is the actual weekly training commitment — days, hours, and what happens during examination periods?",
          "What happens if a DSA student wants to leave the CCA mid-way through secondary school?",
        ],
      },
      {
        label: "Ask a current DSA student",
        icon: "student",
        questions: [
          "Are you glad you came in through DSA rather than normal PSLE posting?",
          "Do DSA students and non-DSA students mix well, or is there a noticeable divide?",
          "What does your actual week look like — how many hours of CCA versus academics?",
          "Is the training here at the level you expected? Better or harder than you thought?",
          "If you could go back and choose again, would you still pick this school and this pathway?",
        ],
      },
    ],
  },
```

---

## PART 12 — Insert new sections 8 and 9 into SECTIONS_ZH

In SECTIONS_ZH, find the section that now has `id: "section-10"`. Insert the following two sections immediately before it:

```typescript
  {
    id: "section-8",
    title: "选拔结束后：你的结果真正意味着什么",
    paragraphs: [
      "DSA 结果在 8 月下旬至 9 月间陆续发出，各校通过电邮或电话直接通知申请者。大多数学校刻意避开 PSLE 口试周和学校预考期间发放结果——如果结果迟迟未到，通常就是这个原因。",
      "结果有三种。Confirmed Offer（CO，确认录取）：获得该校名额，前提是 PSLE 达到该校最低分配组别——对 IP 和快捷源流学校，通常为 AL 22 或以上。Waiting List（WL，候补名单）：若 CO 持有者放弃，你可能获得名额。Unsuccessful（未获录取）：PSLE 正常分配和 S1 Appeal 仍然可用。",
      "如果你持有 CO，需在 10 月——PSLE 成绩公布之前——提交学校优先顺序排名。如果同时持有多所学校的 CO，10 月的排名就是整个 DSA 过程中最关键的一步。排名排错了，很难纠正。",
      "一旦你在 10 月提交志愿排序并被分配到某所学校，这个分配就是最终结果。11 月 PSLE 成绩公布后，哪怕你的分数足以进入你 10 月排名更靠后的学校，10 月的分配依然有效。",
    ],
    callouts: [
      {
        type: "insight",
        heading: "NUS High 的 WL：另一套算法",
        body: "NUS High 的 CO 持有者经常在 10 月最终选择了其他学校，导致大量候补名额释放。历史上，NUS High WL 的最终转化率出乎很多第一次经历 DSA 的家长意料。不要把它等同于被淘汰。",
      },
      {
        type: "insight",
        heading: "历史 WL 转化率：约五成",
        body: "各校综合来看，约 50% 的候补名单持有者最终获得确认录取。这个比例因学校和才能领域差异较大——但 WL 不是拒绝通知。",
      },
      {
        type: "warning",
        heading: "10 月排名才是真正的决策",
        body: "如果同时持有多个 CO，10 月排在第一位的学校，就是你最终就读的学校——无论 11 月 PSLE 放榜结果如何。把这个排名决策当成和当初申请本身同等重要的事来认真对待。",
      },
    ],
  },
  {
    id: "section-9",
    title: "开放日：真正值得问的问题",
    paragraphs: [
      "4–5 月的开放日——在 DSA 申请窗口打开前举行——是你收集情报的唯一窗口。学校有时在开放日透露选拔标准，而这些信息在任何网站上都找不到。",
      "开放日上最有价值的对话对象，不是讲解政策的教师，而是在活动摊位前的在读 DSA 学生。两组人都要问，但要问不同的问题。",
    ],
    callouts: [
      {
        type: "warning",
        heading: "只有 4–5 月的开放日与 DSA 相关",
        body: "11 月的开放日（针对 S1 分配）是在 DSA 周期结束之后。错过 4–5 月的窗口，就失去了申请截止日期（6 月 2 日）前唯一的学校专属情报机会。",
      },
    ],
    questionSets: [
      {
        label: "问 CCA 教师或教练",
        icon: "teacher",
        questions: [
          "今年这个才能领域你们会录取多少人？去年录取了多少？",
          "成功申请者的典型档案是什么样的——有没有一个大致的基准？",
          "没有代表过小学参加校际比赛的孩子，你们会考虑吗？",
          "如果孩子通过 DSA 获得录取，是进 IP 轨道还是 O Level 轨道？",
          "每周实际训练安排是什么——几天、几小时，考试期间怎么办？",
          "如果 DSA 录取的学生中途想退出该 CCA，会怎么处理？",
        ],
      },
      {
        label: "问在读的 DSA 学长/学姐",
        icon: "student",
        questions: [
          "你现在还庆幸自己选了 DSA 这条路，而不是走 PSLE 正常分配吗？",
          "DSA 进来的同学和 PSLE 进来的同学相处得怎么样，还是能明显感觉到区别？",
          "你平时的一周是怎么安排的——CCA 和学业各占多少时间？",
          "这里的训练水平达到你当初的预期了吗？比想象中更好还是更难？",
          "如果重来一次，你还会选择这所学校的这条 DSA 路径吗？",
        ],
      },
    ],
  },
```

---

## PART 13 — Insert new sections 8 and 9 into SECTIONS_MS

In SECTIONS_MS, find the section with `id: "section-10"`. Insert these two sections before it:

```typescript
  {
    id: "section-8",
    title: "Selepas Pemilihan: Apa Keputusan Anda Sebenarnya Bermaksud",
    paragraphs: [
      "Keputusan DSA tiba antara akhir Ogos dan September. Sekolah berkomunikasi terus melalui e-mel atau panggilan telefon. Kebanyakan sekolah mengelak daripada mengeluarkan keputusan semasa minggu lisan PSLE dan tempoh peperiksaan pra; jika keputusan ditangguhkan, ini biasanya sebabnya.",
      "Tiga keputusan yang mungkin. Tawaran Disahkan (CO): anda mendapat tempat, tertakluk kepada memenuhi kumpulan penempatan minimum sekolah di PSLE — untuk sekolah IP dan Express biasanya AL 22 atau lebih baik. Senarai Menunggu (WL): anda dalam pertimbangan jika pemegang CO menolak. Tidak Berjaya: penempatan PSLE dan S1 Appeal masih tersedia.",
      "Jika anda memegang CO, anda mengemukakan keutamaan sekolah berperingkat pada Oktober — sebelum keputusan PSLE diumumkan. Jika anda menerima CO daripada lebih daripada satu sekolah, kedudukan Oktober adalah keputusan yang paling penting. Membuat kedudukan sekolah yang salah adalah sukar untuk dibetulkan.",
      "Sebaik sahaja sekolah diperuntukkan kepada anda melalui penyerahan Oktober anda, peruntukan itu adalah muktamad tanpa mengira keputusan PSLE. Jika keputusan PSLE November anak anda akan melayakkan mereka ke sekolah yang berkedudukan lebih rendah dalam senarai Oktober anda, peruntukan Oktober masih berkuat kuasa.",
    ],
    callouts: [
      {
        type: "insight",
        heading: "WL daripada NUS High: pengiraan yang berbeza",
        body: "Pemegang CO NUS High sering memilih sekolah lain pada Oktober, membuka banyak tempat WL. Tawaran senarai menunggu NUS High secara sejarah menukar pada kadar yang mengejutkan keluarga DSA pertama kali. Jangan anggapnya sama dengan keputusan tidak berjaya.",
      },
      {
        type: "insight",
        heading: "Kadar penukaran WL sejarah: kira-kira separuh",
        body: "Merentas sekolah, kira-kira 50% pelajar dalam senarai menunggu yang mengekalkan tawaran akhirnya menerima tempat yang disahkan. Ini berbeza-beza mengikut sekolah dan bidang bakat — tetapi WL bukan penolakan.",
      },
      {
        type: "warning",
        heading: "Kedudukan Oktober adalah keputusan sebenar",
        body: "Dengan pelbagai CO, sekolah yang anda kedudukan pertama pada Oktober adalah sekolah yang akan anda hadiri — tanpa mengira apa yang ditunjukkan keputusan PSLE pada November. Ambil keputusan kedudukan Oktober seserius permohonan itu sendiri.",
      },
    ],
  },
  {
    id: "section-9",
    title: "Rumah Terbuka: Soalan yang Sebenarnya Penting",
    paragraphs: [
      "Rumah terbuka April dan Mei — diadakan sebelum tetingkap permohonan DSA dibuka — adalah tingkap pengumpulan maklumat anda. Sekolah kadangkala mendedahkan kriteria penyenaraian pendek di rumah terbuka yang tidak mereka terbitkan di mana-mana. Apa yang anda pelajari di sini tidak dapat ditemui di mana-mana laman web.",
      "Orang yang paling berguna di rumah terbuka bukan guru yang menerangkan polisi — mereka adalah pelajar DSA semasa di gerai aktiviti. Bercakap dengan kedua-dua kumpulan, tetapi tanya perkara yang berbeza.",
    ],
    callouts: [
      {
        type: "warning",
        heading: "Hanya rumah terbuka April–Mei yang relevan untuk DSA",
        body: "Rumah terbuka November (untuk Penempatan S1) adalah selepas kitaran DSA selesai. Jika anda terlepas tetingkap April–Mei, anda kehilangan satu-satunya peluang berstruktur untuk mengumpul maklumat khusus sekolah sebelum permohonan ditutup pada 2 Jun.",
      },
    ],
    questionSets: [
      {
        label: "Tanya guru atau jurulatih CCA",
        icon: "teacher",
        questions: [
          "Berapa banyak tempat yang anda tawarkan dalam bidang bakat ini tahun ini? Berapa yang anda ambil tahun lepas?",
          "Bagaimana profil tipikal pemohon yang berjaya untuk bidang bakat khusus ini?",
          "Adakah anda akan mempertimbangkan pelajar yang belum mewakili sekolah rendah mereka dalam pertandingan antara sekolah?",
          "Jika anak saya ditawarkan kemasukan DSA, adakah ia untuk trek IP atau O Level?",
          "Apakah komitmen latihan mingguan sebenar — hari, jam, dan apa yang berlaku semasa tempoh peperiksaan?",
          "Apa yang berlaku jika pelajar DSA ingin meninggalkan CCA di pertengahan sekolah menengah?",
        ],
      },
      {
        label: "Tanya pelajar DSA semasa",
        icon: "student",
        questions: [
          "Adakah anda gembira anda masuk melalui DSA dan bukannya penempatan PSLE biasa?",
          "Adakah pelajar DSA dan bukan DSA bergaul baik, atau adakah jurang yang ketara?",
          "Bagaimana minggu anda sebenarnya — berapa jam CCA berbanding akademik?",
          "Adakah tahap latihan di sini memenuhi jangkaan anda? Lebih baik atau lebih sukar daripada yang anda sangka?",
          "Jika anda boleh kembali dan memilih semula, adakah anda masih akan memilih sekolah dan laluan ini?",
        ],
      },
    ],
  },
```

---

## PART 14 — Insert new sections 8 and 9 into SECTIONS_TA

In SECTIONS_TA, find the section with `id: "section-10"`. Insert these two sections before it:

```typescript
  {
    id: "section-8",
    title: "தேர்வுக்குப் பிறகு: உங்கள் முடிவு உண்மையில் என்னை அர்த்தப்படுத்துகிறது",
    paragraphs: [
      "DSA முடிவுகள் ஆகஸ்ட் இறுதி முதல் செப்டம்பர் வரை வருகின்றன. பள்ளிகள் நேரடியாக மின்னஞ்சல் அல்லது தொலைபேசி மூலம் தொடர்பு கொள்கின்றன. PSLE வாய்வழி வாரம் மற்றும் பள்ளி முன் தேர்வு காலங்களில் முடிவுகளை வெளியிடுவதை பெரும்பாலான பள்ளிகள் தவிர்க்கின்றன — முடிவுகள் தாமதமாகினால், இதுவே காரணம்.",
      "மூன்று முடிவுகள் சாத்தியம். உறுதிப்படுத்தப்பட்ட சலுகை (CO): PSLE-ல் பள்ளியின் குறைந்தபட்ச நியமன குழுவை பூர்த்தி செய்தால் இடம் உறுதி. IP மற்றும் Express பள்ளிகளுக்கு இது பொதுவாக AL 22 அல்லது அதிகம். காத்திருப்பு பட்டியல் (WL): CO வைத்திருப்பவர் மறுத்தால் நீங்கள் பரிசீலிக்கப்படுவீர்கள். வெற்றி பெறவில்லை: PSLE நியமனம் மற்றும் S1 Appeal இன்னும் கிடைக்கும்.",
      "CO வைத்திருந்தால், PSLE முடிவுகள் வெளியிடப்படுவதற்கு முன்பு அக்டோபரில் பள்ளி முன்னுரிமை வரிசையை சமர்ப்பிக்க வேண்டும். ஒன்றுக்கு மேற்பட்ட பள்ளிகளிலிருந்து CO பெற்றால், அக்டோபர் வரிசை மிக முக்கியமான முடிவாகும்.",
      "அக்டோபர் சமர்ப்பணத்தின் மூலம் ஒரு பள்ளி உங்களுக்கு ஒதுக்கப்பட்டவுடன், PSLE முடிவுகளைப் பொருட்படுத்தாமல் அந்த ஒதுக்கீடு இறுதியானது.",
    ],
    callouts: [
      {
        type: "insight",
        heading: "NUS High-ஓட WL: வேறு கணக்கீடு",
        body: "NUS High CO வைத்திருப்பவர்கள் பெரும்பாலும் அக்டோபரில் மற்ற பள்ளிகளை தேர்வு செய்கிறார்கள், WL இடங்களை வெளியிடுகிறார்கள். NUS High காத்திருப்பு பட்டியல் சலுகை வரலாற்று ரீதியாக DSA குடும்பங்களை ஆச்சரியப்படுத்தும் விகிதத்தில் மாறுகிறது. வெற்றி பெறவில்லை என்பதற்கு சமானமாக கருதாதீர்கள்.",
      },
      {
        type: "insight",
        heading: "வரலாற்று WL மாற்று விகிதம்: தோராயமாக பாதி",
        body: "பள்ளிகள் முழுவதும், காத்திருப்பு பட்டியலில் உள்ள சுமார் 50% மாணவர்கள் உறுதிப்படுத்தப்பட்ட இடத்தை இறுதியில் பெறுகிறார்கள். இது பள்ளி மற்றும் திறன் பகுதியைப் பொறுத்து கணிசமாக மாறுபடுகிறது — ஆனால் WL என்பது நிராகரிப்பு அல்ல.",
      },
      {
        type: "warning",
        heading: "அக்டோபர் வரிசை உண்மையான முடிவு",
        body: "பல CO-களுடன், அக்டோபரில் முதலில் வரிசைப்படுத்தும் பள்ளியே நீங்கள் சேரும் பள்ளி — நவம்பரில் PSLE முடிவுகள் என்ன காட்டினாலும். அக்டோபர் வரிசை முடிவை விண்ணப்பத்திற்கு நிகரான தீவிரத்துடன் கருதுங்கள்.",
      },
    ],
  },
  {
    id: "section-9",
    title: "திறந்த நாள்: உண்மையில் முக்கியமான கேள்விகள்",
    paragraphs: [
      "ஏப்ரல் மற்றும் மே திறந்த நாள்கள் — DSA விண்ணப்ப சாளரம் திறப்பதற்கு முன்பு நடத்தப்படுகின்றன — தகவல் சேகரிப்பு சாளரம். பள்ளிகள் சில நேரங்களில் திறந்த நாள்களில் தேர்வு அளவுகோல்களை வெளிப்படுத்துகின்றன, அவை எந்த இணையதளத்திலும் வெளியிடப்படவில்லை.",
      "திறந்த நாளில் மிகவும் பயனுள்ளவர்கள் கொள்கையை விளக்கும் ஆசிரியர்கள் அல்ல — செயல்பாட்டு மேடைகளில் உள்ள தற்போதைய DSA மாணவர்கள். இரு குழுக்களிடமும் பேசுங்கள், ஆனால் வெவ்வேறு கேள்விகளை கேளுங்கள்.",
    ],
    callouts: [
      {
        type: "warning",
        heading: "ஏப்ரல்–மே திறந்த நாள்கள் மட்டுமே DSA-க்கு பொருத்தமானவை",
        body: "நவம்பர் திறந்த நாள்கள் (S1 நியமனத்திற்கு) DSA சுழற்சி முடிந்த பிறகு. ஏப்ரல்–மே சாளரத்தை தவறவிட்டால், விண்ணப்பங்கள் ஜூன் 2 அன்று மூடுவதற்கு முன்பு பள்ளி-குறிப்பிட்ட தகவலை சேகரிக்க ஒரே ஒரு கட்டமைக்கப்பட்ட வாய்ப்பை இழக்கிறீர்கள்.",
      },
    ],
    questionSets: [
      {
        label: "CCA ஆசிரியர் அல்லது பயிற்சியாளரிடம் கேளுங்கள்",
        icon: "teacher",
        questions: [
          "இந்த ஆண்டு இந்த திறன் பகுதியில் எத்தனை இடங்கள் வழங்குகிறீர்கள்? கடந்த ஆண்டு எத்தனை எடுத்தீர்கள்?",
          "இந்த குறிப்பிட்ட திறன் பகுதிக்கு வழக்கமான வெற்றிகரமான விண்ணப்பதாரரின் சுயவிவரம் எப்படி இருக்கும்?",
          "இடைப்பள்ளி போட்டிகளில் தங்கள் தொடக்கப் பள்ளியை பிரதிநிதித்துவப்படுத்தாத மாணவர்களை நீங்கள் கருத்தில் கொள்வீர்களா?",
          "என் குழந்தைக்கு DSA சேர்க்கை வழங்கப்பட்டால், அது IP அல்லது O Level பாதையாக இருக்குமா?",
          "உண்மையான வாராந்திர பயிற்சி அர்ப்பணிப்பு என்ன — நாட்கள், மணி நேரம், தேர்வு காலங்களில் என்ன நடக்கும்?",
          "ஒரு DSA மாணவர் இடைநிலை பள்ளியின் நடுவில் CCA-ஐ விட்டு வெளியேற விரும்பினால் என்ன நடக்கும்?",
        ],
      },
      {
        label: "தற்போதைய DSA மாணவரிடம் கேளுங்கள்",
        icon: "student",
        questions: [
          "சாதாரண PSLE நியமனத்தை விட DSA மூலம் வந்ததற்கு நீங்கள் மகிழ்ச்சியாக இருக்கிறீர்களா?",
          "DSA மற்றும் DSA அல்லாத மாணவர்கள் நன்றாக கலந்து பழகுகிறார்களா, அல்லது கவனிக்கத்தக்க வேறுபாடு இருக்கிறதா?",
          "உங்கள் உண்மையான வாரம் எப்படி இருக்கிறது — CCA மற்றும் கல்வி எவ்வளவு மணி நேரம்?",
          "இங்கே பயிற்சியின் நிலை உங்கள் எதிர்பார்ப்பை பூர்த்தி செய்கிறதா? நீங்கள் நினைத்ததை விட நல்லது அல்லது கடினமாக இருக்கிறதா?",
          "மீண்டும் சென்று தேர்வு செய்யலாம் என்றால், இந்த பள்ளி மற்றும் இந்த பாதையை மீண்டும் தேர்வு செய்வீர்களா?",
        ],
      },
    ],
  },
```

---

## PART 15 — Update DsaExperiencePageBody.tsx

**File:** `components/DsaExperiencePageBody.tsx`

### 15a. Update imports

Find:
```typescript
import { AlertCircle, Lightbulb } from "lucide-react";
```

Replace with:
```typescript
import { AlertCircle, GraduationCap, Lightbulb, Users } from "lucide-react";
```

Also add the new exported types to the content import:

Find:
```typescript
import {
  getDsaExperienceChecklist,
  getDsaExperienceSections,
  getDsaExperienceTimeline,
  getDsaExperienceToc,
  type DsaExperienceCallout,
} from "@/content/dsa-experience";
```

Replace with:
```typescript
import {
  getDsaExperienceChecklist,
  getDsaExperienceSections,
  getDsaExperienceTimeline,
  getDsaExperienceToc,
  type DsaExperienceCallout,
  type DsaExperienceQuestionSet,
} from "@/content/dsa-experience";
```

### 15b. Update checklist condition

Find:
```tsx
                      {section.id === "section-8" ? (
```

Replace with:
```tsx
                      {section.id === "section-10" ? (
```

### 15c. Update orderedList rendering to skip when tierChart exists

Find:
```tsx
                      {section.orderedList ? (
                        <ol className="list-decimal space-y-3 pl-5 marker:font-semibold marker:text-intellectual">
                          {section.orderedList.map((item) => (
                            <li key={item.slice(0, 48)}>{item}</li>
                          ))}
                        </ol>
                      ) : null}
```

Replace with:
```tsx
                      {section.orderedList && !section.tierChart ? (
                        <ol className="list-decimal space-y-3 pl-5 marker:font-semibold marker:text-intellectual">
                          {section.orderedList.map((item) => (
                            <li key={item.slice(0, 48)}>{item}</li>
                          ))}
                        </ol>
                      ) : null}
```

### 15d. Add comparison, tierChart, and questionSets rendering

Find the closing of the bullets block:
```tsx
                      {section.bullets ? (
                        <ul className="list-disc space-y-2 pl-5 marker:text-champagne-dark">
                          {section.bullets.map((item) => (
                            <li key={item.slice(0, 48)}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
```

Replace with:
```tsx
                      {section.bullets ? (
                        <ul className="list-disc space-y-2 pl-5 marker:text-champagne-dark">
                          {section.bullets.map((item) => (
                            <li key={item.slice(0, 48)}>{item}</li>
                          ))}
                        </ul>
                      ) : null}

                      {section.comparison ? (
                        <div className="overflow-x-auto rounded-xl border border-[#e3ded5] bg-white shadow-card">
                          <div className="grid grid-cols-2 divide-x divide-[#e3ded5]">
                            <div className="bg-red-50/60 p-3 text-center text-sm font-semibold text-red-700">
                              ❌ {section.comparison.weakLabel}
                            </div>
                            <div className="bg-green-50/60 p-3 text-center text-sm font-semibold text-green-700">
                              ✅ {section.comparison.strongLabel}
                            </div>
                          </div>
                          {section.comparison.rows.map((row, i) => (
                            <div
                              key={i}
                              className="grid grid-cols-2 divide-x divide-[#e3ded5] border-t border-[#e3ded5]"
                            >
                              <div className="bg-red-50/20 p-3 text-sm leading-snug text-slate-600">
                                {row.weak}
                              </div>
                              <div className="bg-green-50/20 p-3 text-sm leading-snug text-slate-700">
                                {row.strong}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {section.tierChart ? (
                        <div className="space-y-1.5">
                          {section.tierChart.map((item, i) => {
                            const widths = [
                              "max-w-[44%]",
                              "max-w-[58%]",
                              "max-w-[72%]",
                              "max-w-[86%]",
                              "max-w-full",
                            ];
                            const styles = [
                              "bg-intellectual text-white",
                              "bg-intellectual/80 text-white",
                              "bg-intellectual/60 text-white",
                              "bg-slate-200 text-slate-700",
                              "bg-slate-100 text-slate-500",
                            ];
                            const labelStyles = [
                              "text-white",
                              "text-white",
                              "text-white",
                              "text-slate-700",
                              "text-slate-500",
                            ];
                            const exampleStyles = [
                              "text-white/65",
                              "text-white/65",
                              "text-white/65",
                              "text-slate-500",
                              "text-slate-400",
                            ];
                            return (
                              <div
                                key={i}
                                className={`mx-auto rounded-lg px-4 py-2.5 text-center transition-all ${widths[i]} ${styles[i]}`}
                              >
                                <p className={`text-sm font-semibold ${labelStyles[i]}`}>
                                  {item.label}
                                </p>
                                <p className={`mt-0.5 text-xs leading-snug ${exampleStyles[i]}`}>
                                  {item.examples}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      ) : null}

                      {section.questionSets ? (
                        <div className="grid gap-4 sm:grid-cols-2">
                          {section.questionSets.map((set: DsaExperienceQuestionSet, i: number) => (
                            <div
                              key={i}
                              className="rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card"
                            >
                              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                {set.icon === "teacher" ? (
                                  <GraduationCap
                                    className="h-4 w-4 shrink-0 text-intellectual"
                                    aria-hidden
                                  />
                                ) : (
                                  <Users
                                    className="h-4 w-4 shrink-0 text-champagne-dark"
                                    aria-hidden
                                  />
                                )}
                                {set.label}
                              </p>
                              <ol className="list-decimal space-y-2 pl-4">
                                {set.questions.map((q, j) => (
                                  <li
                                    key={j}
                                    className="text-sm leading-snug text-slate-600"
                                  >
                                    {q}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          ))}
                        </div>
                      ) : null}
```

---

## Verification

1. `npx tsc --noEmit` — zero errors.
2. Confirm `DsaExperienceTierItem`, `DsaExperienceComparison`, `DsaExperienceComparisonRow`, `DsaExperienceQuestionSet` are all exported from `content/dsa-experience.tsx`.
3. Confirm section-5 in all 4 locale arrays has `tierChart` with 5 items.
4. Confirm section-3 in all 4 locale arrays has `comparison` with 5 rows.
5. Confirm old section-8 is now section-10 in all 4 locale arrays.
6. Confirm new section-8 and section-9 are present in all 4 locale arrays.
7. Confirm new section-9 in all 4 locale arrays has `questionSets` with 2 sets (teacher + student).
8. In renderer: `section.id === "section-10"` triggers checklist (not section-8).
9. In renderer: orderedList skipped when `tierChart` exists.
10. `GraduationCap`, `Users` imported from lucide-react.
