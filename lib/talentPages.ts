/**
 * DSA Interview Prep · talent-specific pages.
 *
 * Each talent gets its own page under /dsa-interview/[talent].
 * Phase B (2026-06-01): scaffold + placeholder copy.
 * Phase B+ (6/2-7/6): deep content backfilled per 5-week schedule.
 *
 * Slugs are STABLE — never rename once a page is indexed.
 */

export type TalentSlug =
  | "basketball"
  | "football"
  | "swimming"
  | "track-field"
  | "badminton"
  | "martial-arts"
  | "music"
  | "math"
  | "robotics"
  | "chinese"
  | "dance"
  | "drama"
  | "art"
  | "hockey"
  | "squash"
  | "leadership"
  | "volleyball"
  | "table-tennis"
  | "netball"
  | "floorball"
  | "choir"
  | "chinese-orchestra"
  | "tennis"
  | "wushu"
  | "water-polo"
  | "sailing"
  | "rugby"
  | "symphonic-band"
  | "mep";

type LocaleStr = { en: string; zh: string; ms: string; ta: string };

/**
 * Rich content fields use LocaleStrFlex — EN required, ZH/MS/TA optional.
 * Render layer falls back to EN when a non-EN locale is missing.
 * This lets a talent page ship EN-first and backfill ZH/MS/TA later.
 */
export type LocaleStrFlex = {
  en: string;
  zh?: string;
  ms?: string;
  ta?: string;
};

export type DimensionEntry = {
  /** Short bold label for the dimension. */
  label: LocaleStrFlex;
  /** Paragraph body. */
  body: LocaleStrFlex;
};

export type PositionEntry = {
  position: LocaleStrFlex;
  body: LocaleStrFlex;
};

export type InterviewQuestion = {
  question: LocaleStrFlex;
  subtext: LocaleStrFlex;
  approach: LocaleStrFlex;
  template: LocaleStrFlex;
};

export type RichSchoolEntry = {
  name: string;
  url?: string;
  /** Talent area + tier (e.g. "Basketball (Boys), IP"). */
  talentArea: LocaleStrFlex;
  /** One short sentence of public context. */
  context: LocaleStrFlex;
};

export type ChecklistGroup = {
  label: LocaleStrFlex;
  items: LocaleStrFlex[];
};

/**
 * Audition piece requirement entry — one per variant (instrument, dance style, etc.).
 * Used to render the "Prepared piece" visual section. Talents that don't require
 * a prepared piece (sports, math, leadership narrative) leave `preparedPiece` undefined.
 */
export type PreparedPieceEntry = {
  /** Variant label — e.g. "Chinese Orchestra", "Contemporary Dance", "Concert Band". */
  variant: LocaleStrFlex;
  /** Concrete requirement — duration, count, format. */
  requirement: LocaleStrFlex;
  /** Which school(s) or source this applies to. */
  source: LocaleStrFlex;
};

export type PreparedPieceSection = {
  /** One-line intro shown above the variant table. */
  intro: LocaleStrFlex;
  /** Per-variant rows. */
  entries: PreparedPieceEntry[];
  /** Bottom CTA line — sits above the "Find a coach" button. */
  coachCtaBlurb: LocaleStrFlex;
};

export type RichContent = {
  trialDimensions: DimensionEntry[];
  /** Optional lead-in paragraph for trial dimensions section. */
  trialDimensionsIntro?: LocaleStrFlex;
  /**
   * Optional prepared-piece section. Omitted for talents whose audition is
   * trial-only (most sports) or has no concept of a pre-rehearsed piece
   * (math olympiad, leadership group activity).
   */
  preparedPiece?: PreparedPieceSection;
  positionFocus: PositionEntry[];
  /** Optional note after position list (e.g. for SG/C transferability). */
  positionFocusNote?: LocaleStrFlex;
  interviewQuestions: InterviewQuestion[];
  schools: RichSchoolEntry[];
  parentChecklist: ChecklistGroup[];
  /** Final paragraph for late-starters. Render in its own visual block. */
  sprintAdvice: LocaleStrFlex;
};

export type TalentPage = {
  slug: TalentSlug;
  /** ISO date when full content is expected to land. */
  contentReadyBy: string;
  /** One-line hook for hero. */
  hook: LocaleStr;
  /** ~2-sentence intro for hero subtitle. */
  intro: LocaleStr;
  /** Short label shown in nav and card lists. */
  navLabel: LocaleStr;
  /** Single-sentence summary used in hub card subtitles. */
  summary: LocaleStr;
  /** Sample participating schools — link to /dsa-finder for full list. */
  sampleSchools: string[];
  /** Meta description for SEO. */
  metaDescription: LocaleStr;
  /** Deep content — present once the page is past placeholder stage. */
  rich?: RichContent;
};

const TALENT_DATA: Record<TalentSlug, TalentPage> = {
  basketball: {
    slug: "basketball",
    contentReadyBy: "2026-06-08",
    navLabel: { en: "Basketball", zh: "篮球", ms: "Bola Keranjang", ta: "கூடைப்பந்து" },
    hook: {
      en: "Basketball DSA — what the trial actually tests.",
      zh: "篮球 DSA——trial 到底在看什么。",
      ms: "DSA Bola Keranjang — apa yang trial sebenarnya nilai.",
      ta: "கூடைப்பந்து DSA — சோதனை உண்மையில் என்ன சோதிக்கிறது.",
    },
    intro: {
      en: "Trial coaches look at more than height and shooting form. We break down decision-making, defensive footwork, and the off-ball reads that get P6 players noticed.",
      zh: "trial 教练看的不止身高和投篮。我们拆解决策、防守脚步，以及让小六球员被注意到的无球阅读。",
      ms: "Jurulatih trial menilai lebih daripada ketinggian dan bentuk tembakan. Kami pecahkan keputusan, pergerakan kaki defensif, dan bacaan tanpa bola.",
      ta: "சோதனை பயிற்சியாளர்கள் உயரம் மற்றும் ஷூட்டிங் வடிவத்திற்கு அப்பால் பார்க்கிறார்கள். முடிவெடுத்தல், தற்காப்பு கால் நகர்வு, பந்து இல்லாத பகுதி வாசிப்பு ஆகியவற்றை விளக்குகிறோம்.",
    },
    summary: {
      en: "Trial criteria, position-specific drills, sample interview questions, participating schools.",
      zh: "Trial 评分维度、位置专项练习、面试题样、招生学校。",
      ms: "Kriteria trial, latihan khusus posisi, soalan temu duga contoh, sekolah peserta.",
      ta: "சோதனை அளவுகோல்கள், நிலை சார்ந்த பயிற்சிகள், மாதிரி நேர்காணல் கேள்விகள், பங்கேற்கும் பள்ளிகள்.",
    },
    sampleSchools: [
      "Anglo-Chinese School (Independent)",
      "Hwa Chong Institution",
      "Raffles Institution",
      "Dunman High School",
      "Catholic High School",
      "Nan Hua High School",
    ],
    metaDescription: {
      en: "How basketball DSA-Sec interviews and trials work in Singapore — what coaches assess, sample questions, and a list of participating secondary schools.",
      zh: "新加坡篮球 DSA-Sec 面试与 trial 全解析——教练考察什么、面试样题、招生中学清单。",
      ms: "Bagaimana temu duga dan trial DSA-Sec bola keranjang di Singapura — apa yang jurulatih nilai, soalan contoh, sekolah peserta.",
      ta: "சிங்கப்பூரில் கூடைப்பந்து DSA-Sec நேர்காணல் மற்றும் சோதனை எவ்வாறு செயல்படுகிறது — பயிற்சியாளர்கள் என்ன மதிப்பிடுகிறார்கள், மாதிரி கேள்விகள், பங்கேற்கும் பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore basketball trials are usually run by the head coach plus one teacher-in-charge, with a written rubric. A handful of schools — most transparently Kent Ridge Sec — publish the structure: physical assessment, individual technical skills, and game situation skills, with the same rubric applied to every applicant. Most schools do not publish the rubric, but Singapore parent forum reports converge on the same six dimensions.",
      },
      trialDimensions: [
        {
          label: { en: "Decision-making under pressure" },
          body: {
            en: "Coaches watch whether the trialist forces passes into traffic or makes the simple, correct play. Dunman Sec scores \"positioning, vision/anticipation, tactical awareness\" as one of three components.",
          },
        },
        {
          label: { en: "Defensive footwork and stance" },
          body: {
            en: "Assessed in 1-on-1 closeouts and during scrimmage. Active hands, low stance, and on-court communication are widely cited as coachability signals on Singapore parent forums.",
          },
        },
        {
          label: { en: "Off-ball reads" },
          body: {
            en: "What the trialist does in the five seconds after passing the ball is the single most under-trained habit at P6 level. Cuts, screens, and floor spacing get noticed even by coaches who don't talk about it.",
          },
        },
        {
          label: { en: "Shooting form over shooting %" },
          body: {
            en: "For a 12-year-old still growing, consistent repeatable form scores higher than a high make-rate with chaotic mechanics. Coaches who've seen growth spurts know the make-rate will follow.",
          },
        },
        {
          label: { en: "Conditioning" },
          body: {
            en: "Trials run deliberately past 90 minutes. A recurring observation on Singapore parent forums is that tired kids start passing only to teammates they already know — which is itself a scored signal.",
          },
        },
        {
          label: { en: "Attitude and coachability" },
          body: {
            en: "How the trialist behaves between drills, whether they pick up loose balls without being asked, whether they thank the coach at the end. International coaching research finds these unanimously rated 10/10 by elite coaches — higher than raw athleticism.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Point Guard" },
          body: {
            en: "Left-hand competence at speed and the ability to keep eyes up while dribbling — not flashy crossovers. Coaches typically run 3-on-2 fast-break drills to see whether the PG passes ahead or over-dribbles. Decision speed beats foot speed at twelve.",
          },
        },
        {
          position: { en: "Small Forward" },
          body: {
            en: "The position where raw athleticism gets the most credit. Coaches want rebounding instinct, transition speed, and willingness to defend across positions. At twelve, small forwards are often the tallest kids who haven't specialised — coaches watch hand activity in the paint and whether the kid finishes layups with either hand.",
          },
        },
        {
          position: { en: "Power Forward" },
          body: {
            en: "Box-out technique on every shot — even in warm-ups — is the highest-signal behaviour. P6 power forwards who can catch on the move in the post and finish through contact are rare; schools with strong B-Division programs will fast-track them. Dunman Sec explicitly scores \"passing, footwork, and verticality.\"",
          },
        },
      ],
      positionFocusNote: {
        en: "If your child plays shooting guard or centre, the point guard and small forward entries above transfer well. Specifics for those positions vary too much across schools to generalise responsibly.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love basketball?" },
          subtext: {
            en: "The panel wants a specific moment, not a feeling. \"It's fun\" reads as weak motivation.",
          },
          approach: {
            en: "Open with one concrete memory, then connect it to character.",
          },
          template: {
            en: "When my P5 team lost the zonals semi by two points, I realised I wanted to be the player who takes that shot — not avoids it.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the program, or are they applying everywhere?",
          },
          approach: {
            en: "Cite one specific thing about the school's basketball — a coach's name, an NSG result, a training pattern.",
          },
          template: {
            en: "ACS(I) was National B-Div third in 2023/24 and trains DSA candidates with the competition team — I want that pace from Sec 1.",
          },
        },
        {
          question: { en: "What position do you play?" },
          subtext: {
            en: "Can the kid articulate the role, not just label it?",
          },
          approach: {
            en: "Name the position plus the job.",
          },
          template: {
            en: "Point guard — my job is getting our shooters open looks and slowing the game down when we're rattled.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a challenge." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I missed my P5 school team after the first trial. I joined ActiveSG twice a week, made the team the next round, started by NSG.",
          },
        },
        {
          question: { en: "Is there a teammate or coach you remember most?" },
          subtext: {
            en: "Whether the kid sees teammates as people or as background.",
          },
          approach: {
            en: "Name someone specific by role + what you learned from them.",
          },
          template: {
            en: "My captain made me run lines with him after every practice — I didn't want to but I jumped three inches by year-end.",
          },
        },
        {
          question: { en: "How do you manage time with frequent trainings?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I do English and Math homework on the bus to training and finish Science before dinner — I keep Sundays for revision.",
          },
        },
        {
          question: { en: "If School A and School B both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school — your coach's emphasis on defence matches how I play. If the other school called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/basketball/",
          talentArea: { en: "Basketball (Boys), IP" },
          context: {
            en: "2023/24 B-Division National third, 2023 C-Division National second. NSG zone/national experience and BAS/FIBA age-group competition are strong considerations.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Basketball (Boys), IP" },
          context: {
            en: "2024 Boys A-Div National second; girls A-Div national champions in recent cycles. Official position is that applicants without prior experience may apply.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
          talentArea: { en: "Basketball (Boys), IP" },
          context: {
            en: "Listed in RI's 2026 DSA talent areas. Part of RI's broader IP sports portfolio.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Basketball (Boys), DSA-Sec" },
          context: {
            en: "Listed in Dunman High's 2026 DSA FAQ. East Zone B-Division champions in 2024.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/",
          talentArea: { en: "Basketball (Boys), DSA-Sec" },
          context: {
            en: "SAP school — applicants must offer Chinese Language or Higher Chinese in primary school. Historically competitive — 2014 C-Division national finalists.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Basketball (Boys), DSA-Sec" },
          context: {
            en: "2024 NSG B-Div Boys second runner-up; Girls B-Div third runner-up. Higher Chinese or Chinese Language as Mother Tongue required.",
          },
        },
        {
          name: "Bukit Panjang Government High",
          url: "https://www.bpghs.moe.edu.sg/dsa-2026/",
          talentArea: { en: "Basketball (Boys)" },
          context: {
            en: "Trial scored on general motor ability plus sports-specific skills. Two-year CCA membership preferred but not mandatory.",
          },
        },
        {
          name: "Bedok View Secondary",
          url: "https://www.bedokviewsec.moe.edu.sg/cca/sports/basketball-boys-n-girls/",
          talentArea: { en: "Basketball (Boys and Girls)" },
          context: {
            en: "Co-ed program. Trains Mon and Thu 3:30–6pm. Welcomes both newcomers and experienced players per the school's own description.",
          },
        },
        {
          name: "Kent Ridge Secondary",
          url: "https://www.kentridgesec.moe.edu.sg/school-information/dsa/sports-and-games-basketball/",
          talentArea: { en: "Basketball (Boys and Girls)" },
          context: {
            en: "The most transparent published trial structure of any Singapore school — physical assessment, individual technical skills, game situation skills, same rubric for every applicant.",
          },
        },
        {
          name: "Yishun Town Secondary",
          url: "https://www.yishunsec.moe.edu.sg/students/dsa/",
          talentArea: { en: "Basketball (Boys and Girls)" },
          context: {
            en: "Trial assesses ball handling, game awareness, teamwork.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Video-record one full 5-on-5 game. Watch with your child, scoring just two behaviours: (1) what they do in the five seconds after passing the ball — relocate, screen, or stand still? (2) how many possessions did they box out on? These are the two most under-trained P6 habits and the two highest-signal items in the rubrics that Singapore schools have published.",
            },
            {
              en: "Confirm your child's CCA records at primary school are accurate. MOE pulls CCA participation, school awards, NSG and competition results, NAPFA, and JSA data from the primary school directly into the DSA portal. Incomplete records hurt the application. Ask the CCA teacher or year-head to check what's been logged.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 80%: form shooting only, half-court drills, no new academy session. Final-week added load rarely pays off and frequently produces a tweak.",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire. Email the teacher-in-charge if anything is ambiguous — the email itself is a data point on parent attentiveness.",
            },
            {
              en: "One scrimmage with strangers. On Singapore parent forums, a recurring observation is that kids underperform at trials because they start passing only to teammates they know. Force the awkwardness early.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — not 30. Coaches deliberately push trial past the fatigue threshold.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to footwork and form shooting. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because that's the only part where a few hours of work can still meaningfully change the outcome. Some families bring in a private coach at this stage to compress the learning curve. A good private coach can speed up specific habit changes — but no coach produces, in three sessions, the muscle memory of a year of practice. Treat it as triage, not a fix.",
      },
    },
  },
  football: {
    slug: "football",
    contentReadyBy: "2026-06-15",
    navLabel: { en: "Football", zh: "足球", ms: "Bola Sepak", ta: "கால்பந்து" },
    hook: {
      en: "Football DSA — beyond the highlight reel.",
      zh: "足球 DSA——光看精彩集锦不够。",
      ms: "DSA Bola Sepak — lebih daripada cebisan terbaik.",
      ta: "கால்பந்து DSA — சிறந்த தருணங்களுக்கு அப்பால்.",
    },
    intro: {
      en: "Coaches at top SSP and SAP schools watch positioning, first touch, and how you react when the play breaks down. Here's what trials actually measure.",
      zh: "顶尖 SSP / SAP 学校的教练看跑位、第一脚处理、以及局势崩溃时你怎么应对。trial 实际在测什么。",
      ms: "Jurulatih di sekolah SSP dan SAP teratas menilai kedudukan, sentuhan pertama, dan reaksi anda apabila permainan terganggu.",
      ta: "சிறந்த SSP மற்றும் SAP பள்ளி பயிற்சியாளர்கள் நிலைப்படுத்தல், முதல் தொடுதல், விளையாட்டு உடைந்தபோது உங்கள் எதிர்வினையை பார்க்கிறார்கள்.",
    },
    summary: {
      en: "Trial drills, position breakdowns, interview questions, SSP/SAP schools to target.",
      zh: "Trial 项目、位置拆解、面试题样、SSP/SAP 学校清单。",
      ms: "Latihan trial, pecahan posisi, soalan temu duga, sekolah SSP/SAP.",
      ta: "சோதனை பயிற்சிகள், நிலை பகுப்பு, நேர்காணல் கேள்விகள், SSP/SAP பள்ளிகள்.",
    },
    sampleSchools: [
      "Victoria School",
      "Anglo-Chinese School (Barker Road)",
      "Hwa Chong Institution",
      "Saint Joseph's Institution",
      "Catholic High School",
    ],
    metaDescription: {
      en: "Football DSA-Sec interview & trial guide for Singapore P6 players — what trials measure, sample questions, SSP / SAP participating schools.",
      zh: "新加坡足球 DSA-Sec 面试与 trial 指南——trial 评分维度、面试题、SSP/SAP 招生学校。",
      ms: "Panduan temu duga & trial DSA-Sec bola sepak Singapura — apa trial nilai, soalan, sekolah SSP/SAP.",
      ta: "சிங்கப்பூர் P6 கால்பந்து வீரர்களுக்கான DSA-Sec வழிகாட்டி — சோதனை அளவுகோல்கள், கேள்விகள், SSP/SAP பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore football trials are usually run by the school football coach — frequently FAS-licensed — alongside the teacher-in-charge of Sports. Expect 90 to 120 minutes split between a warm-up, technical stations (passing, receiving, 1v1), and small-sided games (5v5 or 7v7) on a half pitch. Almost no school publishes its rubric, but reports from Singapore parent forums and the FAS-aligned youth coaching framework converge on the same six dimensions below — and most schools weight the small-sided games more heavily than the isolated drills, because that's where decision-making and off-the-ball habits become visible.",
      },
      trialDimensions: [
        {
          label: { en: "First touch under pressure" },
          body: {
            en: "Not whether the trialist can control a still ball — whether the first touch on a bouncing pass with a defender closing buys the next decision. Coaches deliberately add pressure (a chasing player, a tight grid) because most P6 players have only practised on cones.",
          },
        },
        {
          label: { en: "Decision-making and vision" },
          body: {
            en: "In small-sided games, coaches watch the head — does it lift before the ball arrives? A P6 player who scans twice in the 2 seconds before receiving is rare, and that habit signals years of structured play. The cheapest tell of an untrained player is the head staying down on the ball.",
          },
        },
        {
          label: { en: "Off-the-ball movement" },
          body: {
            en: "What the trialist does in the 5 seconds after passing — make the supporting run, rotate to cover, or stop and watch — is the single biggest separator at P6 level. Schools running NSG B-Division programmes need players who keep moving when they're not on the ball, because that's the habit B-Division opponents will punish.",
          },
        },
        {
          label: { en: "1v1 defending and recovery" },
          body: {
            en: "Stance, distance, and recovery sprint after being beaten. Coaches care more about whether the trialist sprints back into the play than whether they win the first duel. Forwards who don't track back read as a coaching problem in waiting.",
          },
        },
        {
          label: { en: "Conditioning across the full session" },
          body: {
            en: "Trials run past 90 minutes for a reason. The final small-sided game shows who fades — and fatigued players reveal honest habits. Coaches are looking for the player whose touch and decisions hold up in the last 10 minutes, not the one who burned out impressing in minute 20.",
          },
        },
        {
          label: { en: "Coachability and attitude between drills" },
          body: {
            en: "Whether the trialist jogs back to position, picks up cones, listens when corrected, encourages a teammate after a mistake. International coaching research consistently ranks these signals as highly as technical ability for youth selection — and Singapore school coaches, who'll work with this child for four years, weight them heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Goalkeeper" },
          body: {
            en: "Goalkeeper trials run as a separate stream — shot-stopping from set distances, distribution (throws and kicks), and command of the area on crosses. Coaches care less about reflex saves than about decision-making on crosses and how cleanly the keeper distributes after a save. At 12, a keeper who plays out from the back with one hand on the line is rarer than one with a fast dive, and it signals more upside.",
          },
        },
        {
          position: { en: "Centre-back / Full-back" },
          body: {
            en: "Heading is checked but rarely decisive at P6 — bodies are still growing. Coaches focus on positioning, the timing of the step-up to intercept, and recovery pace after being turned. Full-backs are also assessed on overlapping runs — does the trialist push forward at the right moment and recover, or do they stay locked to the back line?",
          },
        },
        {
          position: { en: "Central midfielder" },
          body: {
            en: "The position where vision shows fastest. Coaches watch whether the midfielder receives on the half-turn (already facing forward) or with their back to play. Pass selection — short and progressive versus safe sideways — is logged across the small-sided game. A midfielder who plays one forward pass per minute outscores one with a 95% pass completion to the centre-backs.",
          },
        },
        {
          position: { en: "Winger / Forward" },
          body: {
            en: "Trial coaches look for two specific moves: the run in behind the defensive line, and the willingness to receive on the touchline and take a defender on. Goals scored in trial scrimmages are noted but not weighted heavily — schools have seen too many P6 strikers who score against weak defenders and don't translate to NSG-level opposition. The defensive press from the front and recovery runs matter more.",
          },
        },
      ],
      positionFocusNote: {
        en: "If your child plays defensive midfielder, the central midfielder notes above mostly transfer — add an emphasis on positional discipline and shielding the back four. For striker, the winger / forward notes are the closest match.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love football?" },
          subtext: {
            en: "The panel wants a specific moment, not a feeling. \"It's fun\" reads as weak motivation.",
          },
          approach: {
            en: "Open with one concrete memory — a match, a player, a turning point — then connect it to character.",
          },
          template: {
            en: "We lost the P5 inter-class final on penalties and I took the last one and missed. That night I decided I wanted to be the player who takes the next one, not the one who avoids it.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the football programme, or are they applying everywhere?",
          },
          approach: {
            en: "Cite one specific thing about the football set-up — a coach's name, an NSG result you watched, the training pattern.",
          },
          template: {
            en: "I watched your B-Division side play in the West Zone last year and the way the team kept passing under pressure was different from the other zone games I'd seen. I want to learn that style from Sec 1.",
          },
        },
        {
          question: { en: "What position do you play?" },
          subtext: {
            en: "Can the kid articulate the role and its job — not just a label?",
          },
          approach: {
            en: "Name the position plus the job, and add a position you can cover.",
          },
          template: {
            en: "Central midfielder — my job is link the defenders and the forwards and protect the back four when we lose the ball. I've also played right-back when my school team needed cover, so I'm comfortable defending wide.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a challenge." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two or three sentences. A real low point reads more honestly than a polished story.",
          },
          template: {
            en: "I was cut from the P5 school team after the first round of trials. I joined an ActiveSG academy twice a week and ran 5km on Saturdays for three months. I made the team in the second-round trial and started in the inter-school cup.",
          },
        },
        {
          question: { en: "Is there a teammate or coach you remember most?" },
          subtext: {
            en: "Whether the kid sees the people around them, or just themselves.",
          },
          approach: {
            en: "Name someone specific by role, plus what you actually learned from them.",
          },
          template: {
            en: "My P5 coach made us watch the previous match together every Monday before training. I'd never watched my own play before — once I started, I noticed I was ball-watching when we lost possession. That habit was the first thing I fixed.",
          },
        },
        {
          question: { en: "How will you manage time with frequent training?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system you already use, not promises about discipline.",
          },
          template: {
            en: "On training days I finish English and Math homework on the bus home and do Science before dinner. I keep Sundays for revision and review one of my matches. Friday is my day off from football and I use that evening for harder homework.",
          },
        },
        {
          question: { en: "If two schools both offer you, how will you decide?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick this school, justify with one specific reason — programme, coach, or fit.",
          },
          template: {
            en: "Honestly, your school. The way your B-Division side keeps building out from the goalkeeper is how I want to play, and your coach's emphasis on tracking back is what my current coach has been pushing me on. If the other school called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Victoria School",
          url: "https://www.victoriaschool.moe.edu.sg/admissions/direct-school-admission",
          talentArea: { en: "Football (Boys)" },
          context: {
            en: "Long-standing football programme — Victoria School is one of the schools most consistently identified with NSG football across both B and C Division. The school's DSA listing places football among its core sports talent areas.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://acsbr.moe.edu.sg/admissions/dsa-sec/",
          talentArea: { en: "Football (Boys)" },
          context: {
            en: "Football is a flagship CCA at ACS(BR) and listed under the school's DSA-Sec talent areas. Strong B-Division track record and a coaching set-up that runs DSA trialists alongside the competition squad.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Football (Boys), IP" },
          context: {
            en: "Football is part of HCI's 2026 DSA talent areas. Official position is that applicants without prior representative experience may still apply — the trial and interview carry more weight than CCA history alone.",
          },
        },
        {
          name: "Saint Joseph's Institution",
          url: "https://www.sji.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Football (Boys)" },
          context: {
            en: "Football is one of SJI's longest-running sports programmes and is listed under DSA-Sec talent areas. Trials emphasise small-sided game decisions over isolated technique.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/admissions/direct-school-admission",
          talentArea: { en: "Football (Boys), DSA-Sec" },
          context: {
            en: "SAP school — applicants must offer Chinese Language or Higher Chinese in primary school. Football is among Catholic High's listed DSA talent areas with a competitive B-Division programme.",
          },
        },
        {
          name: "Singapore Sports School",
          url: "https://www.sportsschool.edu.sg/admissions/the-direct-school-admission-process",
          talentArea: { en: "Football (Boys), full DSA" },
          context: {
            en: "Football is one of Singapore Sports School's core academies — a full-DSA pure sports school. Trial is structured around the FAS-aligned development framework. The application and trial happen earlier in the year than the mainstream DSA-Sec timeline; check the school's website for the current cycle.",
          },
        },
        {
          name: "Meridian Secondary",
          url: "https://meridiansec.moe.edu.sg/dsa-sec/",
          talentArea: { en: "Football (Boys)" },
          context: {
            en: "MOE-designated football SSP (Sports School Programme). Coaches run trials that emphasise game-situation decisions and positional discipline; the school is one of the more accessible football SSP routes for families outside the elite IP cluster.",
          },
        },
        {
          name: "Bukit Panjang Government High",
          url: "https://www.bpghs.moe.edu.sg/dsa-2026/",
          talentArea: { en: "Football (Boys)" },
          context: {
            en: "Listed in BPGHS's published 2026 DSA pages. Trial scored on general motor ability plus sport-specific skills. Two-year primary CCA membership preferred but not mandatory.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Football (Boys), IP" },
          context: {
            en: "Football is among ACS(I)'s DSA talent areas. The school runs DSA candidates with the existing competition squad during the trial window — a useful signal of programme depth.",
          },
        },
        {
          name: "Saint Patrick's School",
          url: "https://www.stpatricks.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Football (Boys)" },
          context: {
            en: "Football is one of the school's most active CCAs and consistently appears in the East Zone NSG B-Division frame. Listed in St Patrick's DSA-Sec talent areas.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Video-record one full match your child plays. Watch back together and score just two behaviours: (1) does your child's head lift to scan in the 2 seconds before receiving the ball? (2) what do they do in the 5 seconds after passing — run, rotate, or stand? These are the two highest-signal habits at P6 trial level, and almost every untrained player fails the first.",
            },
            {
              en: "Confirm your child's CCA records at primary school are accurate. MOE pulls CCA participation, school awards, NSG and competition results, and other achievements directly from the primary school into the DSA portal. Incomplete records hurt the application. Ask the CCA teacher or year-head to check what's been logged before the window closes.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone, watch back together. Flag any answer that ran over thirty seconds, or used the word \"passionate.\" Both kill the read.",
            },
            {
              en: "Watch one of the target school's NSG matches if you can — zone or national, B or C Division. Even one match gives your child something specific to cite in the interview (\"the way your team built out from the back\"). Generic praise reads as homework not done.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 80% — passing patterns, finishing drills, short sharp running. No new academy session, no extra match. Final-week added load rarely pays off and frequently produces a tweak or pulled muscle that ends the trial before it starts.",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire, what to bring (boots, indoor shoes, water). Email the teacher-in-charge if anything is ambiguous — the email itself is a data point on parent attentiveness.",
            },
            {
              en: "One scrimmage with players your child doesn't know. A recurring observation on Singapore parent forums is that kids underperform at trials because they default to passing only to teammates they recognise. Force that awkwardness early so it's already gone by trial day.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat a real meal 90 minutes before — not 30. Coaches deliberately push trials past the fatigue threshold so they can see honest habits. Low blood sugar at minute 60 is a self-inflicted handicap.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the trialist absorbs the cost.",
            },
            {
              en: "Boots and indoor shoes both in the bag. Trials sometimes move to the indoor sports hall if it rains, and a child in studs on a sports hall floor reads as unprepared.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to two things only: receiving on the half-turn (a parent or sibling can play the passer), and 1v1 defending into a recovery sprint. Both are low-injury, high-signal, and the right kind of repetition before a trial. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because that is the only part of the trial day where a few hours of focused work can still meaningfully change the outcome. Some families bring in a private football coach at this stage to compress the learning curve — a good one can speed up specific habit changes like scanning before receiving, but no coach produces, in three sessions, the muscle memory of a year of structured play. Treat it as triage, not a fix.",
      },
    },
  },
  swimming: {
    slug: "swimming",
    contentReadyBy: "2026-06-15",
    navLabel: { en: "Swimming", zh: "游泳", ms: "Renang", ta: "நீச்சல்" },
    hook: {
      en: "Swimming DSA — times, technique, and the interview most parents miss.",
      zh: "游泳 DSA——成绩、技术，以及家长最容易忽略的那场面试。",
      ms: "DSA Renang — masa, teknik, dan temu duga yang ibu bapa terlepas.",
      ta: "நீச்சல் DSA — நேரம், நுட்பம், பெற்றோர்கள் தவறவிடும் நேர்காணல்.",
    },
    intro: {
      en: "Top times open the door — but the interview decides who walks through. Here's how schools assess discipline, recovery, and your reason for choosing swim.",
      zh: "好成绩开门，面试决定谁能走进去。学校如何评估纪律、恢复能力、和你为什么选游泳。",
      ms: "Masa terbaik buka pintu — temu duga tentukan siapa masuk. Bagaimana sekolah nilai disiplin, pemulihan, alasan pilih renang.",
      ta: "சிறந்த நேரங்கள் வாசலைத் திறக்கின்றன — நேர்காணல் யார் உள்ளே செல்வது என்று தீர்மானிக்கிறது. பள்ளிகள் ஒழுக்கம், மீட்பு, நீச்சல் தேர்வு காரணத்தை எவ்வாறு மதிப்பிடுகின்றன.",
    },
    summary: {
      en: "Cut-off times, trial expectations, sample interview questions, top-tier schools.",
      zh: "录取时间标准、trial 要求、面试题样、顶级学校。",
      ms: "Masa potongan, jangkaan trial, soalan temu duga, sekolah teratas.",
      ta: "வெட்டுப்புள்ளி நேரம், சோதனை எதிர்பார்ப்புகள், நேர்காணல் கேள்விகள், சிறந்த பள்ளிகள்.",
    },
    sampleSchools: [
      "Raffles Institution",
      "Hwa Chong Institution",
      "Anglo-Chinese School (Independent)",
      "Singapore Sports School",
      "Methodist Girls' School",
    ],
    metaDescription: {
      en: "Swimming DSA-Sec guide for Singapore parents — qualifying times, trial expectations, interview questions, top participating schools.",
      zh: "新加坡游泳 DSA-Sec 指南——录取时间、trial 要求、面试题样、招生学校。",
      ms: "Panduan DSA-Sec renang Singapura — masa kelayakan, jangkaan trial, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் பெற்றோருக்கான நீச்சல் DSA-Sec வழிகாட்டி — தகுதி நேரங்கள், சோதனை, கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Swimming DSA is unusual: the trial often matters less than the times the candidate has already swum at sanctioned meets. Most secondary schools draw from Singapore Swimming Association meet results (Age Group meets, NSG Primary Swimming Championships, and SNAG-sanctioned competitions) and use those times as the primary screening filter. Schools rarely publish cut-off times — what counts as competitive moves cycle to cycle and varies by event and stroke. A useful rule of thumb from public meet results: candidates with top-eight finishes at 13-and-under SSA-ranked meets, or top finishes at NSG Primary Championships, are within range for the strongest swim programmes. The trial then assesses race execution, stroke quality under fatigue, and what the candidate looks like when the clock isn't running. The interview, which most parents under-prepare for, often decides which of multiple qualified candidates gets the offer.",
      },
      trialDimensions: [
        {
          label: { en: "Sanctioned-meet times in your strongest events" },
          body: {
            en: "Schools want long-course (50m pool) times where possible — short-course (25m pool) times are accepted but discounted. Submit your child's best three events with full meet name, date, and time on the application; do not submit time-trial or training times, which are not weighted. If a stronger time is set after the application window closes, email the swim department secretary with the official meet result.",
          },
        },
        {
          label: { en: "Race execution under panel observation" },
          body: {
            en: "Trial usually includes a timed swim in the candidate's strongest event with the school coach watching. Panels score what they can see live but not from a results sheet: dive entry depth and streamline, underwater dolphin kicks off each wall, turn execution (specifically the touch-and-push for breaststroke/fly, and the flip for free/back), and the finish lunge. A swimmer with a slightly slower time but cleaner execution often outscores a faster swimmer with sloppy turns.",
          },
        },
        {
          label: { en: "Stroke quality under fatigue" },
          body: {
            en: "Schools want swimmers who hold technique when tired, because those are the swimmers who will improve through Sec 1-2 training volume increases. Trial coaches often add a second swim after a short rest specifically to see whether stroke length collapses, whether the catch shortens, and whether the kick rhythm breaks. The first swim shows what you have; the second shows what you are.",
          },
        },
        {
          label: { en: "Coachability and pool-deck behaviour" },
          body: {
            en: "How the candidate listens at the pool deck briefing, whether they thank the lane judge, whether they help with timing pads or kick boards without being asked. Singapore school swim coaches work with these children for four years — temperament weighs heavily. Parent forum reports consistently note that swimmers who help younger lanes during the trial pool warm-up read very well.",
          },
        },
        {
          label: { en: "Recovery between events" },
          body: {
            en: "If the trial includes multiple swims (often a 50m + 100m + 200m or a stroke + IM combination), coaches watch what the candidate does in the 5-10 minutes between — active swim down, water intake, stretching, or sitting and chatting. Recovery habits predict training resilience over a four-year programme and are easy to fake-it-til-you-make-it, so panels watch closely.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Sprint freestyle (50m / 100m)" },
          body: {
            en: "Schools running NSG-competitive sprint programmes value explosive starts and the first 15 metres above almost everything. Trial-day priorities: a powerful dive with a long streamline (held until natural deceleration, not cut short), 4-5 strong dolphin kicks before the first stroke, and a confident finish lunge into the wall. Sprinters who lift their head before the touch lose more time at this age than at any later level.",
          },
        },
        {
          position: { en: "Mid-distance / distance freestyle (200m–800m)" },
          body: {
            en: "Pacing and bilateral breathing read as professional. Coaches watch whether stroke rate stays even through the middle of the race or spikes in the last 50m (panic pace), and whether the swimmer breathes both sides cleanly. Schools with strong distance programmes also assess the open-turn or flip-turn cleanliness — distance swimmers do many turns, and even small inefficiencies compound.",
          },
        },
        {
          position: { en: "Backstroke" },
          body: {
            en: "Backstroke trials weight underwater dolphin kicks and the backstroke flag turn heavily — the visible technical work happens at the walls. Coaches watch body position (whether the hips stay up and the head stays still), and whether the swimmer can hold a straight line without veering into the lane rope. A clean backstroke flag turn (counting strokes from the flag to the wall) is a strong P6-level signal.",
          },
        },
        {
          position: { en: "Breaststroke" },
          body: {
            en: "The most technique-heavy stroke at P6 level. Coaches watch the timing of the kick, the streamline glide between strokes, and the pullout off each wall (one dolphin kick is now legal at all levels — many P6 swimmers still don't use it). Breaststrokers with strong glides outscore breaststrokers with high stroke rates, because the glide-rich stroke pattern is what survives the move to longer distances and faster fields.",
          },
        },
        {
          position: { en: "Butterfly and IM" },
          body: {
            en: "Butterfly: coaches watch whether the kick rhythm holds in the last 15 metres, when most P6 swimmers either slow or lose the two-kicks-per-stroke pattern. A clean fly finish reads as elite, even at slower times. IM (Individual Medley) is the event coaches use to assess versatility — the transitions between strokes, the legal turns (butterfly-to-back, back-to-breast, breast-to-free) are what panels score. Strong IM swimmers are valued as relay options and tend to be recruited even with slightly slower individual times.",
          },
        },
      ],
      positionFocusNote: {
        en: "If your child specialises in only one stroke, name it explicitly in the application and lead with that event in the trial. Schools assemble relay teams from DSA cohorts — a specialist breaststroker is often as recruited as a faster all-rounder, because relay points at NSG are won at the margins.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love swimming?" },
          subtext: {
            en: "Panels want a specific moment, not a generic feeling. \"It clears my head\" reads as weak motivation.",
          },
          approach: {
            en: "Open with one concrete race or training memory, then connect it to character.",
          },
          template: {
            en: "At my first 13-and-under meet, I finished second in the 200 free by 0.4 seconds. The kid who beat me had a faster last 50. That night I decided I wanted to be the swimmer who closes races, not the one who fades. I've been working on negative splits ever since.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the swim programme, or is the application a scatter-shot?",
          },
          approach: {
            en: "Cite one specific thing about the swim set-up — the coach, recent NSG results, training pattern, or facility.",
          },
          template: {
            en: "I watched your B-Division 4x100m free relay at last year's NSG finals. The way your second leg held the lead under pressure is the kind of race I want to learn from. Your coach's emphasis on closing speed is also what I've been working on this year.",
          },
        },
        {
          question: { en: "What's your strongest event, and what are you working to improve?" },
          subtext: {
            en: "Tests self-awareness — can the swimmer name a real weakness and a real fix?",
          },
          approach: {
            en: "Name the event, name the specific technical issue, and describe the drill or workout you use.",
          },
          template: {
            en: "Strongest is 100m breaststroke — my underwater pullouts are clean and my timing holds in the last 25. I'm working on my backstroke flag-turn count; I currently take five strokes from the flag and I want to consistently take six so I time the flip without slowing.",
          },
        },
        {
          question: { en: "Tell us about a time you didn't reach a goal and how you responded." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → specific change you made → result. Schools want resilience, not perfection.",
          },
          template: {
            en: "I missed my target 200 IM time at the second qualifier last year. My butterfly turn was the problem — I was breaking my streamline too early. I spent six weeks doing only butterfly-into-backstroke transition sets and dropped two seconds at the next meet.",
          },
        },
        {
          question: { en: "How do you handle a bad race?" },
          subtext: {
            en: "Race psychology at 12 predicts race psychology at 16. Schools fear swimmers who collapse after one bad swim.",
          },
          approach: {
            en: "Describe a real protocol — what you do in the 30 minutes after a disappointing swim.",
          },
          template: {
            en: "I do my swim down and then write down two specific things I'll change at the next meet — not feelings, just technique. I don't talk about the race with my parents until after the meet. The next event needs my head where the next race is.",
          },
        },
        {
          question: { en: "How will you manage academics with morning training?" },
          subtext: {
            en: "Schools fear DSA swimmers whose grades collapse by Sec 2 — morning training plus afternoon school is the typical pattern.",
          },
          approach: {
            en: "Describe a real schedule, not promises about discipline.",
          },
          template: {
            en: "I currently train 4:30-6:30am four mornings a week. I finish English and Math homework before training so my brain isn't tired afterwards. Bus ride to school is for review notes. I keep Friday evening light because Saturday morning practice is the hardest of the week.",
          },
        },
        {
          question: { en: "If two schools both offer you, how will you decide?" },
          subtext: {
            en: "Tests honesty under pressure — and whether the family has actually thought about fit.",
          },
          approach: {
            en: "Don't dodge. Pick this school, justify with one specific reason — programme, coach, or fit.",
          },
          template: {
            en: "Honestly, your school. Your morning training session pattern and the way your coach builds aerobic base before sprint work matches how I improve best. If the other school called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Singapore Sports School",
          url: "https://www.sportsschool.edu.sg/admissions/the-direct-school-admission-process",
          talentArea: { en: "Swimming, full DSA" },
          context: {
            en: "Pure sports school — swimming is one of the core academies. Trial process and application timing differ from the mainstream DSA-Sec timeline; check the school's website each cycle. Strongest pathway for swimmers targeting national-team selection alongside academic study.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
          talentArea: { en: "Swimming (Boys), IP" },
          context: {
            en: "Swimming is listed in RI's 2026 DSA talent areas. Consistent A-Division finalist programme; strong feed into Singapore national age-group squads. Expects times competitive at national-meet level alongside academic profile.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Swimming (Boys), IP" },
          context: {
            en: "Swimming is among HCI's DSA talent areas. Official position is that applicants without prior national-meet experience may still apply — the trial and interview carry more weight than meet history alone.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Swimming (Boys), IP" },
          context: {
            en: "Long-standing swim programme with NSG B-Division and A-Division success. ACS(I) runs DSA candidates with the existing competition squad during trial windows — programme depth is a useful signal.",
          },
        },
        {
          name: "Methodist Girls' School",
          url: "https://www.mgs.sch.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Swimming (Girls), IP" },
          context: {
            en: "MGS swim is one of Singapore's strongest girls programmes with consistent NSG results across both B and A Division. Swim is a listed DSA-Sec talent area with structured trial and interview.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nyghs.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Swimming (Girls), IP" },
          context: {
            en: "Swimming is a listed DSA-Sec talent at NYGH. SAP designation — Higher Chinese or Chinese Language as Mother Tongue required. Strong pathway for girls who want a SAP school plus competitive swim training.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://acsbr.moe.edu.sg/admissions/dsa-sec/",
          talentArea: { en: "Swimming (Boys)" },
          context: {
            en: "Swimming is listed under ACS(BR)'s DSA-Sec talent areas. Consistent NSG B-Division participant; strong route for boys who prefer ACS culture without the IP track at ACS(I).",
          },
        },
        {
          name: "St Andrew's Secondary School",
          url: "https://standrewssec.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Swimming (Boys)" },
          context: {
            en: "Long-standing swim programme — St Andrew's is consistently identified with NSG swim across both B and C Division. Listed in the school's DSA-Sec talent areas.",
          },
        },
        {
          name: "Cedar Girls' Secondary",
          url: "https://www.cedargirlssec.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Swimming (Girls)" },
          context: {
            en: "Swimming is among Cedar Girls' listed DSA-Sec talent areas. Strong non-IP route for girls who want a competitive swim programme outside the MGS/NYGH/RGS cluster.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Swimming, DSA-Sec, IP" },
          context: {
            en: "Listed in Dunman High's 2026 DSA FAQ. Strong all-round sports programme with consistent NSG presence in swim. Higher Chinese or Chinese Language as Mother Tongue required.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Compile your child's three best sanctioned times with full meet name, date, and pool length (long-course vs short-course). Submit on the application with the official meet result PDF where possible. Do not submit training-set or time-trial times — those are not weighted and may be flagged as inflating the application.",
            },
            {
              en: "Confirm your child's CCA records, NSG and SSA meet results, and any age-group accolades are accurate. MOE pulls CCA participation, school awards, and externally-validated competition results from the primary school directly into the DSA portal where the school has logged them. Email the primary school CCA teacher or year-head to confirm what's been entered.",
            },
            {
              en: "Run a mock interview with a stranger as audience. Record on phone, watch the first 30 seconds back together. Flag any answer that ran over 30 seconds or used the word \"passionate.\" Swim families especially over-rely on race results in interview — verbal articulation about training process matters more.",
            },
            {
              en: "Watch a recording of your child's best race together and pick one technical thing to work on. Not the time — the technique. Coming to the interview with a specific working-on item reads as professional. Coming with only race times reads as parent-driven.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop volume. Maintain stroke feel through short, sharp sets — 25s and 50s with full rest, not endurance work. Final-week volume rarely pays off and frequently leaves the swimmer flat for trial day. Most academies already taper for big meets; coordinate with your private coach if there is one.",
            },
            {
              en: "Confirm logistics in writing. Trial time, venue (pool name and address), what to bring (swimwear, goggles, cap, water, snack, towel, hair tie), and whether parents can spectate. Email the swim coach's secretary if anything is ambiguous.",
            },
            {
              en: "One race-pace set with strangers. Trial pools and competitors are unfamiliar; force that awkwardness early so it's gone by trial day. Local academy meets in the two weeks before are useful, but only if your child swims fresh — pulling out a tired race a week before the trial is a setback.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — a normal carb-led meal, nothing experimental. Low blood sugar at minute 60 of a multi-event trial is a self-inflicted handicap, and so is a stomach unsettled by an unfamiliar breakfast.",
            },
            {
              en: "Bring two pairs of goggles. Goggles fail — leaks, snapped straps, wrong tint for the pool lighting. A backup pair sitting in the kit bag is a 30-cent fix for a trial-ending problem.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the swim coach if you meet them, leave. Over-involved parents are visible on a pool deck and the swimmer absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours. Race replays in a 12-year-old's head between trial and offer are corrosive.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — application in, trial coming up, no clear plan — there are still real moves. Cut new training intensity entirely; trust the fitness already in the body. Shorten the work to two things only: dive starts with held streamlines, and turn execution at race pace. Both are low-injury, high-signal, and reveal more about race readiness than any aerobic set could in the time available. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because the interview is the only part of the DSA-Sec swim selection where a few hours of focused work can still meaningfully change the outcome. Some families bring in a private coach for last-mile stroke refinement — a good one can fix a turn or stabilise a finish, but no coach produces, in three sessions, the conditioning of a year of training. Treat it as triage, not a fix.",
      },
    },
  },
  "track-field": {
    slug: "track-field",
    contentReadyBy: "2026-06-22",
    navLabel: { en: "Track & Field", zh: "田径", ms: "Olahraga", ta: "தடகளம்" },
    hook: {
      en: "Track & Field DSA — sprint, distance, throws, and jumps each have different doors.",
      zh: "田径 DSA——短跑、长跑、投掷、跳跃，每个项目门槛不同。",
      ms: "DSA Olahraga — pecut, jarak jauh, lempar, lompat — pintu berbeza.",
      ta: "தடகள DSA — விரைவு, தூரம், எறிதல், தாவல் — ஒவ்வொன்றுக்கும் வேறு வாயில்.",
    },
    intro: {
      en: "Each event has its own benchmark. We break down what 100m, 800m, throws, and jumps need at the trial level — and what schools ask at interview.",
      zh: "每个项目有自己的标准。我们拆解 100m、800m、投掷、跳跃在 trial 阶段要什么，以及学校面试会问什么。",
      ms: "Setiap acara ada penanda arasnya. Kami pecahkan apa yang 100m, 800m, lempar, lompat perlukan di trial dan soalan temu duga.",
      ta: "ஒவ்வொரு நிகழ்விற்கும் அதன் மதிப்பெண் உள்ளது. 100m, 800m, எறிதல், தாவல் — சோதனையில் என்ன தேவை, நேர்காணலில் என்ன கேட்கப்படும் என்பதை விளக்குகிறோம்.",
    },
    summary: {
      en: "Per-event benchmarks, trial drills, interview questions, top schools per event.",
      zh: "各项目标准、trial 训练、面试题样、各项目顶尖学校。",
      ms: "Penanda aras setiap acara, latihan trial, soalan, sekolah teratas.",
      ta: "நிகழ்வு வாரியான மதிப்பெண், சோதனை பயிற்சிகள், கேள்விகள், பள்ளிகள்.",
    },
    sampleSchools: [
      "Raffles Institution",
      "Hwa Chong Institution",
      "Victoria School",
      "Saint Joseph's Institution",
      "Dunman High School",
    ],
    metaDescription: {
      en: "Track & Field DSA-Sec guide — sprint, distance, throws, jumps. Trial benchmarks, interview questions, participating Singapore secondary schools.",
      zh: "新加坡田径 DSA-Sec 指南——短跑、长跑、投掷、跳跃。trial 标准、面试题、招生学校。",
      ms: "Panduan DSA-Sec olahraga — pecut, jarak, lempar, lompat. Penanda aras, soalan, sekolah Singapura.",
      ta: "தடகள DSA-Sec வழிகாட்டி — விரைவு, தூரம், எறிதல், தாவல். மதிப்பெண், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Track & Field DSA splits hard along event lines — a 100m sprinter and a 1500m runner share almost nothing in trial format, training pattern, or recruitment cycle. Schools draw primarily from NSG Primary Athletics Championships and Singapore Athletics Association (SAA)-sanctioned meets, with verified performance times and distances as the screening filter. Few schools publish formal cut-offs and the bar moves each cycle, but candidates with top-eight finishes at NSG nationals or top-three at zonals in their primary event are reliably within range of the strongest programmes. The trial itself usually combines a timed performance in the candidate's primary event with a short observation of running form, drills, and recovery — followed by an interview that weights training history, race psychology, and event versatility. Below, the assessment dimensions are common across events; the per-event focus section breaks down what coaches watch for sprinters, mid-distance, distance, jumpers, and throwers separately.",
      },
      trialDimensions: [
        {
          label: { en: "Sanctioned-meet performance in your primary event" },
          body: {
            en: "Schools want SAA-sanctioned or NSG-recorded times and distances on the application, not training-set or time-trial marks. Submit the candidate's best result with full meet name, date, and conditions (wind-aided sprints, hand-timed versus electronic, etc.). If a stronger mark is set after the application window closes, email the school's athletics teacher or admissions office with the official result PDF — late-window improvements are read favourably when properly documented.",
          },
        },
        {
          label: { en: "Technique under panel observation" },
          body: {
            en: "Trial coaches watch what cannot be seen on a results sheet: in sprints, the drive phase out of the blocks and the transition to top-end mechanics; in distance, stride economy and head/shoulder relaxation at race pace; in jumps, the runup consistency and the takeoff position; in throws, the footwork into the release and the follow-through balance. A candidate with a slightly slower mark but cleaner technique often outscores a faster candidate with form that won't hold up to Sec 1-2 training volume increases.",
          },
        },
        {
          label: { en: "Recovery and second-effort quality" },
          body: {
            en: "Most trials include either a second timed attempt after rest or a multi-event observation (e.g. 100m plus 200m, or long jump plus 60m sprint). What coaches log is not the second mark but the pattern — does the candidate maintain technique under fatigue, recover deliberately between efforts, or rush back to the line without water? Recovery habits predict training resilience over a four-year programme and read clearly on the day.",
          },
        },
        {
          label: { en: "Event versatility — the under-rated multiplier" },
          body: {
            en: "School athletics teams need depth across multiple events for NSG team scoring. A sprinter who can also long jump, or a mid-distance runner who can throw the javelin, is a more valuable team asset than a specialist with one elite mark. Coaches log secondary events even when the candidate didn't apply on them — be ready to mention any reasonable second event the candidate has tried, even informally at school sports days.",
          },
        },
        {
          label: { en: "Coachability and on-track behaviour" },
          body: {
            en: "How the candidate listens at the briefing, whether they pack their own kit and warm up without being told, whether they thank the starter or the official. Track-and-field training is more solitary than team-sport training, and coaches are looking for athletes whose self-discipline carries them through morning runs and Saturday long sessions without supervision. The trial day is a small window into that habit.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Sprints — 100m, 200m, 400m, hurdles" },
          body: {
            en: "At P6 trial level, coaches care most about the first 30 metres: the drive position out of the blocks (or standing start, depending on venue), arm carriage, and the angle of the shin at first contact. Top-end speed at 12 is genetically variable and trainable later; technique is the signal. For 400m and 400m hurdles candidates, pacing across the back straight and the willingness to attack the third 100m show in the trial mark. Hurdle candidates are watched on lead-leg snap and trail-leg clearance — most P6 hurdlers are still rotating the trail leg too late.",
          },
        },
        {
          position: { en: "Mid-distance — 800m, 1500m" },
          body: {
            en: "Pacing discipline reads as professional at P6. Coaches watch whether the candidate goes out at sustainable pace and accelerates through the bell, or burns the first lap and survives the second. Mid-distance trial marks should ideally come from sanctioned meets where pacing was honest — a paced 800m mark beats a faster but ragged time-trial. Aerobic base, finishing kick, and tactical awareness (when to move on a competitor) are the three things schools weight.",
          },
        },
        {
          position: { en: "Distance — 3000m and cross-country" },
          body: {
            en: "Distance running rewards stride economy over raw speed at the P6 transition to Sec 1. Coaches watch shoulder relaxation, foot strike pattern, and breathing rhythm at race pace. NSG cross-country results and SAA road-race performance are weighted alongside track times. Distance candidates are often recruited even with modestly slower marks if the training history shows consistency across an annual cycle, because the four-year improvement curve at distance is reliably steeper than at sprints.",
          },
        },
        {
          position: { en: "Jumps — long jump, high jump, triple jump" },
          body: {
            en: "Runup precision is the single most weighted technical element. Long and triple jumpers are watched for consistent hit on the board (or for high jump, the runup curve and the planted foot's angle to the bar). Coaches care less about distance or height at the trial than about whether the runup is repeatable — distance follows technique once the candidate enters a school's structured programme. Triple jumpers in particular need clean rhythm across the three phases; a faster sprinter who can't hold rhythm scores lower than a slower athlete who can.",
          },
        },
        {
          position: { en: "Throws — shot put, discus, javelin" },
          body: {
            en: "Power matters but is read as a function of technique at P6. Shot put trials weight the glide or rotational footwork and the release angle; discus weights the wind-up balance and the release plane; javelin weights the cross-step approach and the release angle relative to the ground. Throwing events are recruited more thinly than running events, so a specialist thrower with a solid technical base and one strong sanctioned mark is often actively pursued by schools building team-scoring depth.",
          },
        },
      ],
      positionFocusNote: {
        en: "Combined-event candidates (multi-event athletes — heptathlon-style training, even informally) are highly recruited. If the candidate has competed in two or more events at zonal level, name both on the application with marks; schools read this as a strong signal of training history and physical literacy.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love track and field?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"It clears my head\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete race or event memory, then connect it to character.",
          },
          template: {
            en: "At the East Zone 200m, I was in lane two and got out badly. I came back in the last 50 to take third. That race taught me that what matters is who you are with 50m left, not who you are at the gun. It's why I keep coming back to the track.",
          },
        },
        {
          question: { en: "What's your primary event, and what's your training week look like?" },
          subtext: {
            en: "Tests whether the candidate understands their own training, or is following a programme by rote.",
          },
          approach: {
            en: "Name the event and outline the actual training pattern across the week — different sessions, recovery, and what each session targets.",
          },
          template: {
            en: "100m and 200m. Monday is acceleration work — short sprints out of blocks with full recovery. Wednesday is top-speed work — flying 30s and 60s. Friday is tempo — longer reps at sub-maximal pace for conditioning. Saturday is a long run for general aerobic base. I don't train Sunday — recovery is the work I do that day.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the athletics programme, or is the application a scatter-shot?",
          },
          approach: {
            en: "Cite something specific — a coach's reputation, the squad's NSG results, the training facility, the way the school programmes multi-event athletes.",
          },
          template: {
            en: "Your B-Division 4x400m relay placed second at last year's NSG nationals. The way your coach builds the long-to-short sprint progression across Term 1 to Term 3 matches my own training philosophy. I want to be the third leg in that relay by Sec 3.",
          },
        },
        {
          question: { en: "Tell us about a race that didn't go to plan." },
          subtext: {
            en: "Tests resilience and self-awareness. Schools fear candidates who only present polished wins.",
          },
          approach: {
            en: "Situation → specific cause → specific change you made → result. A real low point reads more honestly than a polished story.",
          },
          template: {
            en: "At the P5 zonals 800m, I went out at PB pace for the first 200 and blew up by the 600 mark. I finished sixth in a race I could have won. I rebuilt my pacing plan with my coach — first 200m only 95% of target pace — and finished second at the next inter-school meet. Lesson: race plans aren't optional.",
          },
        },
        {
          question: { en: "Do you have a secondary event you'd train if asked?" },
          subtext: {
            en: "Schools value versatility for team scoring. Tests whether the candidate sees themselves as a single-event athlete or a team asset.",
          },
          approach: {
            en: "Name a real second event the candidate has tried — even informally — and one specific thing about it that suits the candidate.",
          },
          template: {
            en: "Long jump. I jumped 4.85m at our school sports day last year on a runup I'd barely practised — the technique is rough but my approach speed is there. If your jumps coach can fit me in, I'd add it as a second event.",
          },
        },
        {
          question: { en: "How will you manage academics with morning training?" },
          subtext: {
            en: "Schools fear DSA-T&F kids whose grades collapse by Sec 2 — morning training is a typical pattern.",
          },
          approach: {
            en: "Describe a real schedule.",
          },
          template: {
            en: "I run at 5:30am four mornings a week before school. I finish English and Math homework before training so my brain isn't tired afterwards. Bus ride to school is for review notes. Saturday long run starts at 7am; the rest of Saturday is school work. Sunday I read and rest — recovery time matters.",
          },
        },
        {
          question: { en: "If two schools both offer you, how will you decide?" },
          subtext: {
            en: "Tests honesty under pressure — and whether the family has actually thought about fit.",
          },
          approach: {
            en: "Don't dodge. Pick this school, justify with one specific reason about programme or coach fit.",
          },
          template: {
            en: "Honestly, your school. Your sprint coach's emphasis on technique before volume is how I think the next two years should go for me — I'm still adding muscle and I don't want to burn out chasing volume too early. If the other school called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Singapore Sports School",
          url: "https://www.sportsschool.edu.sg/admissions/the-direct-school-admission-process",
          talentArea: { en: "Track & Field, full DSA" },
          context: {
            en: "Pure sports school — track and field is a core academy with sprint, distance, jumps, and throws sub-groups. Application and trial timing differ from mainstream DSA-Sec. Strongest pathway for athletes targeting Singapore national age-group squads alongside academic study.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
          talentArea: { en: "Track & Field (Boys), IP" },
          context: {
            en: "Track & Field is listed in RI's 2026 DSA talent areas. Long-standing A-Division programme across sprints and distance. Recruits across multiple events and weights training history and race psychology heavily at interview.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Track & Field (Boys), IP" },
          context: {
            en: "Track & Field is among HCI's DSA talent areas. Consistent NSG B-Division and A-Division presence. The school's stated position is that applicants without national-meet experience may still apply if the trial and interview support the case.",
          },
        },
        {
          name: "Victoria School",
          url: "https://www.victoriaschool.moe.edu.sg/admissions/direct-school-admission",
          talentArea: { en: "Track & Field (Boys)" },
          context: {
            en: "Track & Field has been a flagship CCA at Victoria School for decades. Strong NSG B-Division depth across sprint and distance events. Listed under the school's DSA-Sec talent areas with structured trial and interview.",
          },
        },
        {
          name: "Saint Joseph's Institution",
          url: "https://www.sji.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Track & Field (Boys)" },
          context: {
            en: "Track & Field is among SJI's long-standing sports programmes and is listed under DSA-Sec talent areas. Strong sprint and middle-distance heritage; the school is one of the more accessible non-IP routes for elite athletes.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Track & Field (Boys), IP" },
          context: {
            en: "Track & Field is among ACS(I)'s DSA-Sec talent areas with strong sprint and jumps history. ACS(I) runs DSA candidates alongside the competition squad during trial windows.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://acsbr.moe.edu.sg/admissions/dsa-sec/",
          talentArea: { en: "Track & Field (Boys)" },
          context: {
            en: "Track & Field is listed under ACS(BR)'s DSA-Sec talent areas. Consistent NSG B-Division participant across sprints and jumps; a useful non-IP alternative for ACS-leaning families.",
          },
        },
        {
          name: "Methodist Girls' School",
          url: "https://www.mgs.sch.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Track & Field (Girls), IP" },
          context: {
            en: "Track & Field is a listed DSA-Sec talent area at MGS with one of Singapore's strongest girls programmes. Consistent NSG B-Division and A-Division results across sprints, jumps, and middle distance.",
          },
        },
        {
          name: "Singapore Chinese Girls' School",
          url: "https://www.scgs.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Track & Field (Girls)" },
          context: {
            en: "Track & Field is among SCGS's listed DSA-Sec talent areas. Strong non-IP route for girls with sprint or jumps background; team depth has produced consistent zonal medal returns.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Track & Field, DSA-Sec, IP" },
          context: {
            en: "Listed in Dunman High's 2026 DSA FAQ. SAP heritage — Higher Chinese or Chinese Language requirement applies. East Zone B-Division presence across track events with structured recruitment.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Compile the candidate's three best sanctioned marks (NSG, SAA-ranked, inter-school finals) with full meet name, date, conditions, and timing method (electronic vs hand-timed for sprints; rule whether the meet was wind-legal). Submit on the application with official PDFs where possible. Do not submit time-trial or training marks; they are not weighted and may be flagged.",
            },
            {
              en: "Confirm CCA records, competition results, and NAPFA data are accurate on the primary school's DSA portal entry. MOE pulls these directly; missing entries undercut otherwise strong applications. Email the primary school CCA teacher or year-head to confirm what's been logged.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone, watch first 30 seconds back. Flag any answer over 30 seconds or that used the word \"passionate.\" Track families especially over-rely on times and distances in interview — verbal articulation about training process and race tactics matters more than reciting PBs.",
            },
            {
              en: "Video-record one full race or event session and watch back together with one technical thing to fix. Sprint candidates: first three steps out of blocks. Distance: head and shoulder relaxation at race pace. Jumps: runup consistency. Throws: balance after release. Coming to interview with a current working-on item reads as professional.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop volume. Keep speed and technique work crisp at 70-80% intensity. No new training stimulus, no extra time trial, no race-pace volume. Final-week added load rarely pays off and frequently produces a strain or tweak that ends the trial before it starts.",
            },
            {
              en: "Confirm logistics in writing. Trial date, time, venue (track name and address), attire (school PE kit or all-white per school policy), what to bring (spikes if permitted, water, snack, towel, race number if issued). Email the athletics teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "Pack two pairs of spikes (if used) and check the pin length against the venue's track type. A loose pin or wrong-length spike is a self-inflicted trial-day handicap. For throwers, pack the appropriate event implement only if the school requires you to bring one — many tracks provide them.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — a real meal with complex carbs. Track performance at the second-effort mark of trial is sensitive to blood sugar; an empty stomach by minute 60 is a self-inflicted handicap.",
            },
            {
              en: "Warm up properly. Most trial schedules include a coach-led warm-up, but arrive prepared to start your own routine if needed — dynamic stretching, strides, event-specific drills. Cold-starting an explosive event is the fastest way to a hamstring injury.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the athletics teacher-in-charge if you meet them, leave. Over-involved parents trackside are visible and the candidate absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours. Replays of marks between trial and offer are corrosive at any age.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — application in, trial coming up, no clear plan — there are still real moves. Cut all new training intensity. Trust the fitness already in the body. Shorten the work to two things only: event-specific technique drills at 70-80% (sprint A-skips, jumps runup walk-throughs, throws release-position rehearsals — whichever fits the event) and a clean warm-up routine you can repeat under nerves. Both are low-injury, high-signal, and the right kind of practice before an explosive trial. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because the interview is the only part of the trial day where a few hours of focused work can still meaningfully change the outcome. Some families bring in a private coach at this stage — a good one can stabilise nerves and refine specific technique cues, but no coach produces, in three sessions, the conditioning of a year of training. Treat it as triage, not a fix.",
      },
    },
  },
  badminton: {
    slug: "badminton",
    contentReadyBy: "2026-06-22",
    navLabel: { en: "Badminton", zh: "羽毛球", ms: "Badminton", ta: "பேட்மிண்டன்" },
    hook: {
      en: "Badminton DSA — footwork beats power at the P6 level.",
      zh: "羽毛球 DSA——小六阶段，步伐比力量更重要。",
      ms: "DSA Badminton — pergerakan kaki mengalahkan kuasa di P6.",
      ta: "பேட்மிண்டன் DSA — P6 அளவில் கால் நகர்வு பலத்தை வெல்லும்.",
    },
    intro: {
      en: "Coaches at top badminton SSPs watch your court coverage and shot selection long before they measure your smash speed. Here's what trials check.",
      zh: "顶尖羽毛球 SSP 教练先看你的覆盖范围和选球，再测扣杀速度。trial 在测什么。",
      ms: "Jurulatih SSP badminton teratas perhatikan liputan gelanggang dan pemilihan pukulan sebelum mengukur kelajuan smash.",
      ta: "சிறந்த பேட்மிண்டன் SSP பயிற்சியாளர்கள் ஸ்மாஷ் வேகத்தை அளப்பதற்கு முன் கோர்ட் கவரேஜ் மற்றும் ஷாட் தேர்வை பார்க்கிறார்கள்.",
    },
    summary: {
      en: "Footwork drills, trial format, interview questions, SSP badminton schools.",
      zh: "步伐训练、trial 形式、面试题样、SSP 羽毛球学校。",
      ms: "Latihan pergerakan kaki, format trial, soalan, sekolah SSP badminton.",
      ta: "கால் நகர்வு பயிற்சிகள், சோதனை வடிவம், கேள்விகள், SSP பள்ளிகள்.",
    },
    sampleSchools: [
      "Hwa Chong Institution",
      "Raffles Institution",
      "Anglo-Chinese School (Independent)",
      "Catholic High School",
      "Dunman High School",
    ],
    metaDescription: {
      en: "Badminton DSA-Sec interview & trial guide for Singapore P6 — footwork, shot selection, sample questions, SSP / participating schools.",
      zh: "新加坡羽毛球 DSA-Sec 面试与 trial 指南——步伐、选球、面试题、SSP 招生学校。",
      ms: "Panduan DSA-Sec badminton — pergerakan kaki, pemilihan pukulan, soalan, sekolah SSP.",
      ta: "சிங்கப்பூர் பேட்மிண்டன் DSA-Sec வழிகாட்டி — கால் நகர்வு, ஷாட் தேர்வு, கேள்விகள், SSP பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore badminton trials usually run 90 to 120 minutes and are conducted by the school coach (often BWF or SBA-licensed) plus the teacher-in-charge of Sports. Format is consistent across schools: a warm-up, multi-shuttle footwork drills (6-corner court coverage at high tempo), technical stations (clears, drops, drives, smashes), and one or two short scrimmage sets, typically singles. NSG B-Division and zone competition results are read carefully on the application, but they are not a hard gate — coaches care more about what they see live in the school hall than what's on the certificate. The recurring lesson from Singapore parent forums and coaching publications is the same: at P6 level, footwork and shot selection separate the offers from the polite rejections far more than smash speed does.",
      },
      trialDimensions: [
        {
          label: { en: "Footwork — split step and six-corner coverage" },
          body: {
            en: "The single most weighted dimension at P6 level. Coaches watch whether the candidate splits before each opponent contact, recovers to base after every shot, and reaches the four corners plus front net positions without crossing feet awkwardly. A candidate who is half a step late to the back-court corners loses more rallies at trial than they lose to inferior strokes. Multi-shuttle drills are deliberately set faster than match pace to expose footwork gaps.",
          },
        },
        {
          label: { en: "Shot selection and tactical reading" },
          body: {
            en: "Whether the candidate hits the right shot, not just a clean one. Repeatedly smashing from the back court when a drop would win the rally reads as untrained tactical thinking. Coaches want a P6 player who can already mix clears, drops, and smashes based on opponent position — not someone playing one shot type until exhausted.",
          },
        },
        {
          label: { en: "Net play and front-court touch" },
          body: {
            en: "Net shots, tight kills, and net lifts are the most under-trained part of P6 badminton because they don't impress on highlight reels. Coaches assessing for Sec 1 weight net play heavily because it predicts doubles potential — and almost every school's badminton programme runs both singles and doubles training from Sec 1. A candidate with confident net play is a more flexible team asset than a one-dimensional smasher.",
          },
        },
        {
          label: { en: "Defence under pressure" },
          body: {
            en: "How the candidate handles the smashes that come at them in scrimmage. Strong P6 defenders absorb the smash into a controlled block or a deep clear, not just a panicked reflex return. Coaches care less about whether the candidate retrieves every smash than about the quality of the return — a high lift back to the back court is a usable defence; a flat return that leaves the candidate stranded is not.",
          },
        },
        {
          label: { en: "Stamina and stroke quality late in the session" },
          body: {
            en: "Trials run deliberately long because schools want to see what the candidate looks like in the last 30 minutes. Stroke quality, footwork crispness, and decision-making all degrade differently — coaches log which goes first. A candidate whose smash power fades but whose shot selection sharpens reads as a future tactical player; one whose footwork collapses reads as someone whose training base is fragile.",
          },
        },
        {
          label: { en: "Coachability and on-court behaviour" },
          body: {
            en: "How the candidate behaves between drills, whether they pick up shuttles without being asked, whether they thank the coach. International coaching research finds these signals weighted as heavily as raw skill in youth selection. Singapore school coaches, who will work with this child for four years, weight them especially heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Singles — attacker style" },
          body: {
            en: "P6 attackers tend to over-rely on the smash. Coaches at the strongest programmes deliberately set drills where smashes are returned cleanly — to see whether the attacker has a second tool. Strong attacking singles candidates already mix in attacking clears to the corners, body smashes from the half-court, and net kills after the smash is returned short. If smash is the only weapon, the trial scrimmage will expose it within five rallies.",
          },
        },
        {
          position: { en: "Singles — counter-attack / all-court style" },
          body: {
            en: "Coaches read counter-attack players as longer-term assets — the style ages well into Sec 3 and 4 as opponents get stronger. Trial priorities: defensive depth (high clears that land within 30cm of the back line), retrieve quality, and the half-smash transition from defence to attack. Footwork is exposed more here than in attacking play, because the all-court player must cover all six positions instead of camping at the back-court.",
          },
        },
        {
          position: { en: "Doubles — front court (net player)" },
          body: {
            en: "Most P6 candidates have done little dedicated doubles training, so a candidate who can clearly play the front-court role — tight net kills, blocking returns of smashes, reading opponent net intentions — stands out immediately. Front-court players also need quick reflexes at the half-court; expect the coach to test reflex blocks with multi-shuttle drives. Confidence at the net is the highest-value front-court signal.",
          },
        },
        {
          position: { en: "Doubles — back court (attacker)" },
          body: {
            en: "Back-court doubles players need a heavier and more accurate smash than singles attackers, plus the discipline to keep the smash low and angled rather than flat. Coaches watch whether the candidate can hold the back-court while the partner plays net — including the patience to set up the smash with clears and drops rather than smashing every shuttle that comes up. Mental discipline more than physical power separates back-court doubles candidates.",
          },
        },
      ],
      positionFocusNote: {
        en: "Most Singapore school programmes do not stream Sec 1 players into singles or doubles specialisations immediately; the strongest programmes train both for at least two years. Lead the application with the candidate's stronger discipline but note doubles or singles cross-training experience as supporting context.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love badminton?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"It's fun\" reads as weak motivation.",
          },
          approach: {
            en: "Open with one concrete match or training memory, then connect it to character.",
          },
          template: {
            en: "In the P5 zonals, I was down 14-19 and pulled it back to 21-19 — but only because I stopped smashing and started using drops. That match taught me that badminton isn't about the strongest shot; it's about the right shot at the right moment. That's why I love it.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the badminton programme, or is the application a scatter-shot?",
          },
          approach: {
            en: "Cite one specific thing — a coach, a recent NSG result, a training pattern, an opportunity for both singles and doubles.",
          },
          template: {
            en: "I watched your B-Division team play in the last zonals and noticed how your back-court doubles players varied their smash angles instead of always going flat. That shot selection is exactly what I want to learn from Sec 1.",
          },
        },
        {
          question: { en: "What's your strongest shot and what are you working to improve?" },
          subtext: {
            en: "Tests self-awareness — can the candidate name a real weakness and a real fix?",
          },
          approach: {
            en: "Name the strength concretely, then name a specific shot or footwork pattern you're working on with the drill you use.",
          },
          template: {
            en: "Strongest is my backhand clear — I can land it within 30cm of the back line under pressure. I'm working on my forehand net kill; I'm too tense at the wrist on the kill so I'm doing slow-tempo net drills with a coach twice a week.",
          },
        },
        {
          question: { en: "Tell us about a match you lost and what you took from it." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → specific change you made afterwards → result. Schools want resilience, not perfection.",
          },
          template: {
            en: "I lost the P5 zone semis to a player who returned every smash with a clean block. After the match I realised my game had been one-dimensional. I spent six weeks doing only drop-shot and net-play drills, and at the inter-school cup the next term I beat him in three sets.",
          },
        },
        {
          question: { en: "Singles or doubles — which suits you better, and why?" },
          subtext: {
            en: "Most schools want both. Tests whether the candidate has thought about their own game.",
          },
          approach: {
            en: "Pick one but acknowledge willingness to play the other — and explain what you bring to the chosen format.",
          },
          template: {
            en: "Singles right now — my footwork holds up well across full court and I like making my own tactical choices. But I'd like to play doubles too; I think my net play is good enough to learn the front-court role in Sec 1.",
          },
        },
        {
          question: { en: "How will you manage academics with frequent training?" },
          subtext: {
            en: "Schools fear DSA-Badminton kids whose grades collapse by Sec 2.",
          },
          approach: {
            en: "Describe a real schedule, not promises about discipline.",
          },
          template: {
            en: "On training days I finish English and Math homework on the bus and do Science before dinner. Friday is my off-day from badminton and I use that evening for harder homework. Sundays I do longer revision sessions. Training is non-negotiable, but it's not unlimited.",
          },
        },
        {
          question: { en: "If two schools both offer you, how will you decide?" },
          subtext: {
            en: "Tests honesty under pressure — and whether the family has actually thought about fit.",
          },
          approach: {
            en: "Don't dodge. Pick this school, justify with one specific reason — programme, coach, or fit.",
          },
          template: {
            en: "Honestly, your school. The way your coach develops doubles play from Sec 1 is what I want — the other school focuses more on singles and I want to be a two-discipline player. If the other school called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Singapore Sports School",
          url: "https://www.sportsschool.edu.sg/admissions/the-direct-school-admission-process",
          talentArea: { en: "Badminton, full DSA" },
          context: {
            en: "Pure sports school — badminton is a core academy. Application and trial timing differ from mainstream DSA-Sec; check the school's website each cycle. Strongest pathway for candidates targeting Singapore national age-group squads alongside academic study.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Badminton (Boys), IP" },
          context: {
            en: "Badminton is among HCI's DSA-Sec talent areas. Long-standing programme with consistent A-Division presence; the school's official position is that applicants without prior representative experience may still apply, with the trial and interview carrying more weight than CCA history alone.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
          talentArea: { en: "Badminton (Boys), IP" },
          context: {
            en: "Badminton is listed in RI's 2026 DSA talent areas. Trains both singles and doubles from Sec 1; the trial reads weight footwork and tactical reading heavily, in line with the school's broader emphasis on intellectual approach to sport.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Badminton (Boys), IP" },
          context: {
            en: "Badminton is among ACS(I)'s DSA-Sec talent areas. ACS(I) runs DSA candidates with the existing competition squad during trial windows — useful signal of programme depth.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/admissions/direct-school-admission",
          talentArea: { en: "Badminton (Boys), DSA-Sec" },
          context: {
            en: "SAP school with a competitive B-Division programme. Higher Chinese or Chinese Language as Mother Tongue required. Badminton is one of the most actively recruited talent areas at Catholic High.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Badminton, DSA-Sec, IP" },
          context: {
            en: "Listed in Dunman High's 2026 DSA FAQ. SAP heritage — Higher Chinese or Chinese Language requirement applies. East Zone competition presence in B and C Division across recent cycles.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Badminton, DSA-Sec" },
          context: {
            en: "SAP school. Badminton is among Nan Hua's listed DSA talent areas; the trial and interview run alongside Higher-Chinese language requirements that apply to all applicants.",
          },
        },
        {
          name: "Cedar Girls' Secondary",
          url: "https://www.cedargirlssec.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Badminton (Girls)" },
          context: {
            en: "Strong girls badminton programme with consistent NSG B-Division presence. Listed in Cedar's DSA-Sec talent areas. A common destination for top P6 girls who want a competitive non-IP school environment.",
          },
        },
        {
          name: "Hua Yi Secondary",
          url: "https://huayisec.moe.edu.sg/admissions/dsa-sec/",
          talentArea: { en: "Badminton (Boys and Girls)" },
          context: {
            en: "Hua Yi has been a consistent NSG badminton presence at zone and national level across both boys and girls. Listed in the school's DSA-Sec talent areas; co-ed entry.",
          },
        },
        {
          name: "Junyuan Secondary",
          url: "https://www.junyuansec.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Badminton (Boys and Girls)" },
          context: {
            en: "Listed in Junyuan's DSA-Sec pages. Strong East Zone programme with regular NSG B-Division progression. Co-ed entry; trial assesses footwork, shot selection, and short scrimmage performance.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Video-record one full match or training session. Watch back together and score just two things: (1) does the candidate split before each opponent contact? (2) do they recover to base after every shot, or do they get stranded? These two habits separate Sec 1 candidates from current under-13 players more reliably than any other single signal.",
            },
            {
              en: "Confirm your child's CCA records, NSG and zone results, and any age-group accolades are accurate. MOE pulls CCA participation, school awards, and competition results from primary schools' DSA portal entries where they have been logged. Ask the primary school CCA teacher or year-head to confirm what's been entered.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone, watch back together. Flag any answer that ran over 30 seconds or used the word \"passionate.\" Badminton families often over-rely on competition results in interview — verbal articulation about tactics and self-awareness about weaknesses matters more.",
            },
            {
              en: "Schedule one session with players the candidate doesn't know — local academy open court, ActiveSG drop-in, or a friend's club. Trial opponents will be unfamiliar; the awkwardness of playing strangers should be gone by trial day, not faced for the first time on it.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop volume. Switch to maintenance — multi-shuttle footwork at 70% pace, light technical drills, no new tactical work. Final-week added load risks tweaks or shoulder strain that ends the trial before it starts.",
            },
            {
              en: "Confirm logistics in writing. Trial time, venue, attire (most schools require school PE attire or all-white sports gear), and shuttles — bring your own match-grade shuttles if the trial format requires them. Check whether parents can spectate.",
            },
            {
              en: "Pack two grips and a backup string-tension racket. Grip slips happen in humid Singapore halls, and a racket string can go without warning. A backup racket sitting in the bag is a 30-second fix to a trial-ending problem.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — a real meal, not just a snack. Trial duration past the 90-minute mark is deliberate; low blood sugar at minute 75 is a self-inflicted handicap.",
            },
            {
              en: "Warm up at home before leaving. Shoulder rotations, light court-coverage steps. Trial halls in Singapore tend to be cool; arriving warm means the first set of footwork drills are not the first physical effort of the day.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the badminton teacher-in-charge if you meet them, leave. Over-involved parents at the side of the court are visible and the candidate absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours. Replays of lost scrimmage points between trial and offer are corrosive.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — application in, trial coming up, no clear plan — there are still real moves. Cut new tactical work entirely. Focus on two things only: the split step before every opponent contact, and recovery to base after every shot. Both can be drilled with a single multi-shuttle feeder, both are visible in the first ten minutes of trial, and both are the two most under-trained P6 habits — a candidate who does these well looks two years more mature than their actual age. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because the interview is the only part of the selection where a few hours of focused work can still meaningfully change the outcome. Some families bring in a private coach for last-mile prep — a good one can stabilise nerves and refine specific footwork patterns, but no coach produces, in three sessions, the cardiovascular base and stroke memory of a year of structured training. Treat it as triage, not a fix.",
      },
    },
  },
  "martial-arts": {
    slug: "martial-arts",
    contentReadyBy: "2026-06-29",
    navLabel: { en: "Martial Arts", zh: "武术", ms: "Seni Mempertahankan Diri", ta: "தற்காப்பு கலை" },
    hook: {
      en: "Martial Arts DSA — wushu, taekwondo, judo, fencing — each path has different schools.",
      zh: "武术 DSA——武术、跆拳道、柔道、击剑，每条路线对应的学校不同。",
      ms: "DSA Seni Mempertahankan Diri — wushu, taekwondo, judo, lawan pedang.",
      ta: "தற்காப்பு கலை DSA — வுஷு, தைக்வாண்டோ, ஜூடோ, வாள்வீச்சு.",
    },
    intro: {
      en: "Wushu sits in IP schools. Taekwondo and judo cluster in SAP schools. Fencing is its own ecosystem. Here's the map.",
      zh: "武术多在 IP 学校。跆拳道、柔道集中在 SAP 学校。击剑是独立生态。这是地图。",
      ms: "Wushu di sekolah IP. Taekwondo, judo di sekolah SAP. Lawan pedang ekosistem sendiri.",
      ta: "வுஷு IP பள்ளிகளில். தைக்வாண்டோ, ஜூடோ SAP பள்ளிகளில். வாள்வீச்சு தனி சூழல்.",
    },
    summary: {
      en: "Discipline-specific paths, trial expectations, interview questions, school clusters.",
      zh: "各项专门路径、trial 要求、面试题样、学校集群。",
      ms: "Laluan khusus disiplin, jangkaan trial, soalan, kelompok sekolah.",
      ta: "ஒழுக்கம் வாரியான பாதைகள், சோதனை, கேள்விகள், பள்ளி குழுக்கள்.",
    },
    sampleSchools: [
      "Hwa Chong Institution",
      "Nan Hua High School",
      "Dunman High School",
      "Anglo-Chinese School (Independent)",
      "Saint Joseph's Institution",
    ],
    metaDescription: {
      en: "Martial Arts DSA-Sec — wushu, taekwondo, judo, fencing. Discipline-specific paths, trial format, interview questions, Singapore schools.",
      zh: "武术 DSA-Sec——武术、跆拳道、柔道、击剑。各项专门路径、trial、面试、新加坡学校。",
      ms: "Panduan DSA-Sec seni mempertahankan diri — wushu, taekwondo, judo, lawan pedang. Laluan, trial, soalan.",
      ta: "தற்காப்பு கலை DSA-Sec — வுஷு, தைக்வாண்டோ, ஜூடோ, வாள்வீச்சு. பாதைகள், சோதனை, கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Martial Arts DSA is the most fragmented talent category in Singapore. Each discipline has its own competition body, its own grading framework, its own clusters of participating schools, and its own trial format. Wushu (modern competition Chinese martial arts) is offered most strongly at SAP and IP schools with strong Chinese-language programmes. Taekwondo (Kukkiwon-style) and Judo (Kodokan-style) cluster around schools with established CCAs and Singapore Taekwondo Federation / Singapore Judo Federation registered coaches. Fencing — foil, épée, and sabre — is its own ecosystem, recruited by a smaller set of schools but often with very specific weapon preferences each cycle. Silat is recruited in clusters of schools with Pesilat Singapura affiliations. Trial format varies by discipline: wushu candidates demonstrate forms (taolu) and sometimes sparring (sanda) basics; taekwondo and judo candidates demonstrate technique and free-spar at controlled intensity; fencing candidates bout in pools. Across all disciplines, the candidate's competition record from federation-sanctioned events plus the live trial performance plus the interview combine to produce the offer.",
      },
      trialDimensions: [
        {
          label: { en: "Federation-sanctioned competition record" },
          body: {
            en: "Submit results from the relevant national federation's events — Singapore Wushu Dragon & Lion Dance Federation (SWDLDF), Singapore Taekwondo Federation (STF), Singapore Judo Federation (SJF), Fencing Singapore, or Pesilat Singapura. Include full event name, date, weight/age category, and placing. Schools weight federation-sanctioned competition results far more heavily than dojang/club-internal grading because external competition is calibrated and verifiable.",
          },
        },
        {
          label: { en: "Technical form and discipline-specific fundamentals" },
          body: {
            en: "Wushu trials weight taolu (form) execution — stance accuracy, transitions, balance, and the visual quality of the form. Taekwondo trials weight kicking technique (round, side, axe, spinning kicks), basic forms (poomsae), and breaking if applicable. Judo trials weight ukemi (breakfalls), basic throws, and ground control transitions. Fencing trials weight footwork (en garde, advance/retreat, lunge), point control, and parry quality. Coaches do not expect competition-level polish at P6 — they expect the technique to be fundamentally sound and recognisably trained.",
          },
        },
        {
          label: { en: "Sparring composure" },
          body: {
            en: "Controlled sparring or bouting is included in most martial arts trials and is where psychological signals show. Coaches watch whether the candidate maintains technique under pressure, controls aggression, and shows respect (bow, salute, weapon control) at the start and end of every bout. A candidate who lands fewer points but maintains technique reads better than a candidate who scrambles to score and abandons form. Aggression that crosses into uncontrolled behaviour is a strong negative signal — schools value athletes who can be trusted at competitions where they represent the school.",
          },
        },
        {
          label: { en: "Coachability and dojang/dojo behaviour" },
          body: {
            en: "How the candidate enters the training space, bows or salutes the coach, addresses senior students, and behaves between drills. Martial arts traditions weight etiquette heavily and Singapore school coaches expect candidates to have already internalised the conventions of their discipline. A candidate who needs to be reminded to bow or who interrupts the coach reads as undertrained in basics — even if technique is strong.",
          },
        },
        {
          label: { en: "Discipline-specific conditioning" },
          body: {
            en: "Coaches watch whether the candidate has the conditioning their discipline demands — flexibility for wushu and taekwondo, grip and core for judo, lower-body endurance for fencing. Trials sometimes include light fitness components (flexibility tests, plank holds, short shuttle runs) calibrated to the discipline. The point is not raw fitness — it is whether the candidate's body shows the conditioning of a year or more of training in the chosen art.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Wushu — taolu and sanda" },
          body: {
            en: "Singapore wushu DSA mostly recruits taolu specialists — changquan (long fist), nanquan (southern fist), taijiquan, and weapon forms (sword, broadsword, staff, spear). Coaches watch stance heights, jump quality, and the rhythm transitions that separate competition-level wushu from beginner-level. A candidate with a complete competition taolu — even a slightly imperfect one — outscores a candidate with several half-learned forms. Sanda candidates are recruited more thinly; schools with sanda programmes tend to be SAP institutions with established Chinese-martial-arts CCAs.",
          },
        },
        {
          position: { en: "Taekwondo — Kukkiwon-style competition" },
          body: {
            en: "Schools recruit both poomsae and kyorugi (sparring) specialists. Poomsae candidates are watched for sharpness of basic kicks (front, side, round), the precision of stances, and the kihap (focal shout) timing within the form. Kyorugi candidates demonstrate scoring kicks (axe, round, spinning back, spinning hook) at pads, then light bouts under hogu. Belt grade is read but not decisive — a 1st kup with weak technique scores lower than a clean blue belt with strong fundamentals.",
          },
        },
        {
          position: { en: "Judo — throws and ground" },
          body: {
            en: "Judo trials test both tachi-waza (standing throws) and ne-waza (groundwork). Coaches watch ukemi quality first — clean breakfalls are non-negotiable, both for the candidate's own safety and for what they signal about training base. Standing techniques typically demonstrated: o-soto-gari, seoi-nage, uchi-mata, tai-otoshi. Ne-waza demonstrations focus on basic pins (kesa-gatame, yoko-shiho-gatame) and one or two transition combinations. Kyu grade and competition record both matter.",
          },
        },
        {
          position: { en: "Fencing — foil, épée, sabre" },
          body: {
            en: "Different weapons have different recruitment cycles each year — confirm with the target school which weapons are being recruited before the trial. Foil and épée trials weight point control, footwork precision, and parry quality. Sabre trials weight tempo, the bind-and-attack pattern, and the lunge speed. Pool-bouting at trial is standard; candidates are watched for tactical adaptation across opponents, not just raw points. Singapore National Schools fencing rankings and ASEAN-level results are weighted on the application.",
          },
        },
        {
          position: { en: "Silat — silat olahraga / silat seni" },
          body: {
            en: "Silat olahraga (sparring) and silat seni (artistic forms) are both recruited, with the balance varying by school. Pesilat Singapura competition records (Singapore Schools' Silat Championships, ASEAN-level events) are read carefully. Trials typically include jurus (form) demonstration plus controlled tanding (sparring) at the school's calibration. Belt grade in the relevant style is logged on the application.",
          },
        },
      ],
      positionFocusNote: {
        en: "Other martial arts — karate, kendo, brazilian jiu-jitsu, muay thai — have small or non-existent school DSA pipelines in Singapore. Candidates from these disciplines should contact target schools directly to ask whether the discipline is recruited in the current cycle; in some cases a strong record in a related discipline (e.g. karate kumite informing taekwondo kyorugi) can be parlayed into a trial slot.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love your martial art?" },
          subtext: {
            en: "Panels want a specific moment or principle, not a feeling. \"It teaches discipline\" reads as a parent's answer, not the candidate's.",
          },
          approach: {
            en: "Open with one concrete training memory or competition moment, then connect it to the candidate's character or philosophy.",
          },
          template: {
            en: "Last year my coach made me lose a sparring match on purpose by giving away my best technique. He wanted me to learn that depending on one strength is a trap. That session changed how I train — I started working on my weak side until it stopped being weak. That's what I love about my art: the lessons stack.",
          },
        },
        {
          question: { en: "What grade or belt are you, and how did you earn it?" },
          subtext: {
            en: "Tests whether the candidate can articulate the work behind the credential, not just name it.",
          },
          approach: {
            en: "Name the grade, the date awarded, the examining body, and one specific technique or test that was hardest.",
          },
          template: {
            en: "Black belt 1st dan, awarded last September by Kukkiwon. The hardest part was breaking — three boards on a spinning back kick. I'd never broken three boards on a spinning technique before; I trained the pivot for three months before the test. Belt's a date on a certificate; what mattered was the three months.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the martial arts CCA, or is this a scatter-shot application?",
          },
          approach: {
            en: "Cite the discipline-specific reason — the school's coach, recent National Schools championship results, the training facility, training frequency.",
          },
          template: {
            en: "Your school's wushu team placed top three at the National School Games taolu finals last year, and your coach has trained two of the current Singapore national junior squad members. The way your team integrates SAP Chinese-language enrichment with wushu training is the exact pathway I want.",
          },
        },
        {
          question: { en: "Tell us about a competition you didn't win and what you took from it." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → specific cause → specific change you made afterwards → result.",
          },
          template: {
            en: "At the national taolu championships last year, I rushed the difficulty element in my changquan and stepped out of the carpet. I lost points I couldn't recover. After that, my coach added a final-set rehearsal where I had to land the difficulty element five times in a row under fatigue before I went home. At the next competition the element was clean.",
          },
        },
        {
          question: { en: "How do you balance training, competition, and academics?" },
          subtext: {
            en: "Schools fear DSA-Martial-Arts candidates whose grades collapse, especially before major competitions.",
          },
          approach: {
            en: "Describe a real schedule and how you protect academic time during competition season.",
          },
          template: {
            en: "Three weekday sessions plus one Saturday — two hours each. On training days I finish English and Math homework on the bus and do Science before dinner. Two weeks before a competition, I drop volume to one weekday session plus the Saturday so I'm rested and academics don't slip. Sundays are always for revision.",
          },
        },
        {
          question: { en: "What does martial arts etiquette mean to you?" },
          subtext: {
            en: "Schools weight this heavily because they trust DSA-Martial-Arts candidates to represent the school at external competitions.",
          },
          approach: {
            en: "Don't list rules. Give one specific incident where etiquette mattered to you personally.",
          },
          template: {
            en: "At my first competition, I won a close match and didn't bow properly to my opponent because I was excited. My coach didn't congratulate me — he just walked away. That silence taught me more than any lecture about etiquette. I bow first to opponents now, before they bow to me.",
          },
        },
        {
          question: { en: "If two schools both offer you, how will you decide?" },
          subtext: {
            en: "Tests honesty under pressure — and whether the family has actually thought about fit.",
          },
          approach: {
            en: "Don't dodge. Pick this school, justify with one specific reason about programme or coach fit.",
          },
          template: {
            en: "Honestly, your school. Your coach's record with competition taolu and the way your CCA structures weekly training around peaking for nationals matches what I want. If the other school called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Wushu (Boys), IP" },
          context: {
            en: "Wushu is among HCI's DSA-Sec talent areas. Long-standing competition wushu CCA with consistent National School Games taolu presence. The school's stated position is that applicants without national-meet experience may still apply if the trial supports it.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Wushu, DSA-Sec" },
          context: {
            en: "SAP school with strong wushu CCA. Wushu is among Nan Hua's listed DSA talent areas; trials integrate with the school's broader Chinese cultural programme. Higher Chinese or Chinese Language as Mother Tongue required.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Wushu, DSA-Sec, IP" },
          context: {
            en: "Listed in Dunman High's 2026 DSA FAQ. SAP heritage with wushu as a featured CCA. Higher Chinese or Chinese Language requirement applies. East Zone presence at National School Games wushu events across recent cycles.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Taekwondo, Fencing, IP" },
          context: {
            en: "ACS(I)'s DSA-Sec talent areas include both taekwondo and fencing, with structured CCA programmes for each. Fencing in particular has a long competitive history. ACS(I) runs DSA candidates alongside the existing competition squad during trial windows.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
          talentArea: { en: "Fencing, Judo, Taekwondo (Boys), IP" },
          context: {
            en: "Multiple martial arts among RI's 2026 DSA talent areas. Fencing in particular has a deep recruitment pipeline. Each discipline runs a separate trial — confirm which is active in the current cycle before applying.",
          },
        },
        {
          name: "Hwa Chong Institution — Judo / Taekwondo",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Judo, Taekwondo (Boys), IP" },
          context: {
            en: "Beyond wushu, HCI also recruits via judo and taekwondo DSA. Each runs as a distinct CCA with its own trial format. Confirm which disciplines are actively recruited each cycle on the school's admissions page.",
          },
        },
        {
          name: "Saint Joseph's Institution",
          url: "https://www.sji.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Fencing, Judo (Boys)" },
          context: {
            en: "SJI runs both fencing and judo as listed DSA-Sec talent areas. Fencing in particular has produced consistent National Schools-level results. Trials are weapon-specific (fencing) or discipline-specific (judo) — confirm scope before applying.",
          },
        },
        {
          name: "Methodist Girls' School",
          url: "https://www.mgs.sch.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Fencing, Taekwondo (Girls), IP" },
          context: {
            en: "MGS has well-established fencing and taekwondo CCAs with National Schools competition history. Both are listed as DSA-Sec talent areas. IP track leads to the IB Diploma in senior years.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/admissions/direct-school-admission",
          talentArea: { en: "Wushu, DSA-Sec (Boys)" },
          context: {
            en: "SAP school with wushu among its DSA-Sec talent areas. Strong taolu CCA. Higher Chinese or Chinese Language as Mother Tongue required.",
          },
        },
        {
          name: "Raffles Girls' School",
          url: "https://www.rgs.edu.sg/admissions/direct-school-admission",
          talentArea: { en: "Fencing, Taekwondo (Girls), IP" },
          context: {
            en: "RGS lists fencing and taekwondo among its DSA-Sec talent areas. Both have consistent National Schools competition presence. Selection weights both competition record and the interview's articulation of training philosophy.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Compile federation-sanctioned competition results with full event name, date, weight or age category, and placing. Scan all certificates (belt grades, dan certificates, competition placings) and have them ready to upload to the DSA portal. Schools give zero weight to claimed-but-unverified credentials.",
            },
            {
              en: "Confirm CCA records and any martial-arts-related primary school achievements are accurate on the DSA portal entry. MOE pulls these directly from the primary school; missing entries undercut the application. Email the primary school CCA teacher or year-head to verify.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer over 30 seconds or that used the word \"passionate.\" Martial-arts candidates especially need to be able to talk about their discipline — etiquette, training philosophy, specific techniques — in concrete language rather than generic enthusiasm.",
            },
            {
              en: "If the candidate's competition record is thin, attend one federation-sanctioned event in the final 8 weeks before the application closes. Even a non-medal result reads better than no recent external competition, because it shows the candidate is actively competing.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to technique maintenance at 70%. No new techniques, no extra session, no testing for grade. Final-week added load risks the kind of strain (hamstring, shoulder, fingers in judo, wrist in fencing) that ends the trial before it starts.",
            },
            {
              en: "Confirm logistics in writing. Trial date, time, venue, required attire (gi, dobok, fencing kit, wushu uniform — discipline-specific), required equipment (weapon for fencing, breaking boards if specified, mouthguard for taekwondo kyorugi). Email the relevant CCA teacher if anything is ambiguous.",
            },
            {
              en: "Pack a backup of anything that can fail — belt, hogu straps, fencing glove, weapon if your discipline uses one. A snapped strap or broken weapon at trial is a 5-second disaster that a 2-minute pack-check would have prevented.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — a real meal, not a snack. Trial intensity past minute 60 is deliberate; low blood sugar mid-sparring is a self-inflicted handicap.",
            },
            {
              en: "Warm up at home before leaving. Joint mobility, dynamic stretches, light technique. Trial halls in Singapore are cool — arriving warm means the first kicks or throws are not the first physical effort of the day.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the CCA teacher-in-charge if you meet them, leave. Over-involved parents are visible in a small dojang/dojo/salle and the candidate absorbs the cost. Martial arts coaches especially value parent restraint as a signal of disciplined family culture.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours. Replays of lost spars or dropped points between trial and offer are corrosive at any age.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — application in, trial coming up, no clear plan — there are still real moves. Cut all new technique acquisition; trust the techniques already trained. Shorten the work to two things only: the candidate's strongest one or two techniques drilled to fluency, and a clean etiquette routine (entering the space, bowing/saluting, addressing the coach) rehearsed until it's automatic. Both are low-injury, high-signal, and visible in the first ten minutes of trial. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because martial-arts interviews especially reward candidates who can articulate the discipline beyond technique — etiquette, philosophy, training history. Some families bring in a private coach at this stage — a good one can stabilise nerves and sharpen specific technique cues, but no coach produces, in three sessions, the years of training that the trial is actually testing. Treat it as triage, not a fix.",
      },
    },
  },
  music: {
    slug: "music",
    contentReadyBy: "2026-06-08",
    navLabel: { en: "Music", zh: "音乐", ms: "Muzik", ta: "இசை" },
    hook: {
      en: "Music DSA — Grade 8 is the floor, not the ceiling.",
      zh: "音乐 DSA——Grade 8 是地板，不是天花板。",
      ms: "DSA Muzik — Gred 8 ialah lantai, bukan siling.",
      ta: "இசை DSA — கிரேடு 8 தரை, கூரை அல்ல.",
    },
    intro: {
      en: "ABRSM Grade 8 gets the door open at MEP schools. What you do at the audition and interview decides the offer. Here's the breakdown.",
      zh: "ABRSM Grade 8 让 MEP 学校的门打开。audition + 面试决定 offer。完整拆解。",
      ms: "Gred 8 ABRSM membuka pintu sekolah MEP. Audition dan temu duga tentukan tawaran.",
      ta: "ABRSM கிரேடு 8 MEP பள்ளி கதவைத் திறக்கிறது. ஆடிஷன் மற்றும் நேர்காணல் வாய்ப்பை தீர்மானிக்கின்றன.",
    },
    summary: {
      en: "MEP-school requirements, audition format, interview questions, what schools want to hear.",
      zh: "MEP 学校要求、audition 形式、面试题样、学校到底想听什么。",
      ms: "Keperluan sekolah MEP, format audition, soalan, apa sekolah mahu dengar.",
      ta: "MEP பள்ளி தேவைகள், ஆடிஷன் வடிவம், கேள்விகள், பள்ளிகள் என்ன கேட்க விரும்புகின்றன.",
    },
    sampleSchools: [
      "Raffles Institution",
      "Hwa Chong Institution",
      "Anglo-Chinese School (Independent)",
      "Nanyang Girls' High School",
      "Methodist Girls' School",
    ],
    metaDescription: {
      en: "Music DSA-Sec guide for Singapore P6 — MEP school requirements, audition format, interview questions, ABRSM Grade 8 reality.",
      zh: "新加坡音乐 DSA-Sec 指南——MEP 学校要求、audition 形式、面试题、ABRSM Grade 8 实情。",
      ms: "Panduan DSA-Sec muzik — keperluan sekolah MEP, audition, soalan, realiti Gred 8 ABRSM.",
      ta: "இசை DSA-Sec வழிகாட்டி — MEP தேவைகள், ஆடிஷன், கேள்விகள், ABRSM கிரேடு 8.",
    },
    rich: {
      preparedPiece: {
        intro: {
          en: "Music audition requirements vary sharply by ensemble — every instrument family has its own format. The audition slot itself can run up to 45 minutes for Concert Band candidates. Check each target school's 2026 brief before locking in repertoire.",
        },
        entries: [
          {
            variant: { en: "Chinese Orchestra (erhu, pipa, guzheng, etc.)" },
            requirement: { en: "Two contrasting pieces on your instrument · total time capped at 5 minutes · plus sight-read from the conductor" },
            source: { en: "BPGHS DSA 2026 brief; Victoria School DSA 2026 (with 16 bars fast + 16 bars slow tempo requirement)" },
          },
          {
            variant: { en: "Concert Band (wind, brass, percussion)" },
            requirement: { en: "Two contrasting pieces of your choice · plus all 12 major scales (Victoria) or 4 named keys Bb/Eb/Ab/Db Concert (BPGHS) · plus sight-read · audition slot up to 45 min" },
            source: { en: "Victoria School + BPGHS DSA 2026 briefs" },
          },
          {
            variant: { en: "String Ensemble (violin, viola, cello)" },
            requirement: { en: "Two contrasting solo pieces · no accompaniment · plus interview" },
            source: { en: "Victoria School DSA 2026 brief" },
          },
          {
            variant: { en: "Guitar Ensemble" },
            requirement: { en: "One solo piece on classical guitar · not more than 5 minutes · plus sight-read · plus interview" },
            source: { en: "Victoria School DSA 2026 brief" },
          },
          {
            variant: { en: "Choir" },
            requirement: { en: "No prepared song required — vocal-testing exercise conducted by the choir master, plus interview" },
            source: { en: "Victoria School DSA 2026 brief — explicit \"no song preparation needed\"" },
          },
          {
            variant: { en: "MEP track (ACS(I), DHS, MGS, NYGH, RGS) · solo instrument" },
            requirement: { en: "Two contrasting pieces from different periods or styles · plus sight-reading (~Grade 5 difficulty) · plus aural test · plus interview" },
            source: { en: "MEP standardised audition framework across the 5 MOE-designated schools" },
          },
        ],
        coachCtaBlurb: {
          en: "A private music coach can stabilise audition-day nerves, polish the opening 30 seconds of each prepared piece, and run sight-reading drills at the correct difficulty. Browse our coach directory for instrument specialists.",
        },
      },
      trialDimensionsIntro: {
        en: "Music DSA splits into two distinct tracks. The MEP (Music Elective Programme) route runs at five MOE-designated schools — ACS(I), Dunman High, Methodist Girls', Nanyang Girls', and Raffles Girls' — and uses a standardised audition built around two contrasting pieces, sight-reading, aural, and an interview. The non-MEP route runs at many more schools (RI, HCI, Catholic High, Nan Hua, SCGS and others) as a CCA-based DSA talent area — often with the school's symphonic band, Chinese orchestra, or choir. ABRSM Grade 8 practical is widely treated as the MEP benchmark by families, but MOE does not publish a formal grade requirement; non-MEP schools regularly accept Grade 5 to 6. What separates an offer from a polite rejection is rarely the certificate — it's how the candidate plays in the room, sight-reads cleanly, and articulates why music in five sentences of interview.",
      },
      trialDimensions: [
        {
          label: { en: "Technical command on the two contrasting pieces" },
          body: {
            en: "Both pieces should be from different periods or styles — Baroque + Romantic, or one fast and one lyrical. Panels listen for accuracy at tempo, articulation, dynamic control, and whether the candidate can shape a long phrase rather than just play through the notes. A confidently-played Grade 7 piece reads better than a struggling Grade 8 piece; choose a piece you can own, not one you're surviving.",
          },
        },
        {
          label: { en: "Musicality and interpretation" },
          body: {
            en: "What distinguishes a Grade 8 pass-with-distinction student from a future MEP candidate is interpretation — phrase shaping, rubato, the choice of when to take time and when to drive forward. Panels are looking for a player who has an idea about the piece, not just a player who has practised it. P6 candidates who can articulate one specific interpretive choice (\"I take more time at this cadence because the harmony resolves there\") stand out immediately.",
          },
        },
        {
          label: { en: "Sight-reading" },
          body: {
            en: "MEP auditions typically set sight-reading at around Grade 5 difficulty — a passage the candidate has 30 seconds to look over, then plays through. What panels watch is not whether every note is right, but whether the candidate keeps tempo, gets the rhythm, and recovers from a mistake without stopping. Stopping at the first wrong note is the most common P6 failure mode and is almost entirely a confidence issue, not a reading one.",
          },
        },
        {
          label: { en: "Aural skills" },
          body: {
            en: "Standard aural tests: clap back a rhythm, sing back a short melodic line, identify intervals, sometimes identify chord quality (major/minor/diminished). Aural is the most under-trained component because ABRSM practical exams test it too lightly — MEP schools weight it more heavily because aural ability predicts ensemble musicianship.",
          },
        },
        {
          label: { en: "Stage presence and composure" },
          body: {
            en: "How the candidate walks in, bows, settles at the instrument, and recovers from a slip. Panels remember the candidate who restarted a piece calmly more vividly than the one who played a flawless first half and crumbled. Confidence is taught — film a mock audition and watch the entrance and the first 15 seconds twice; that's where most marks are won or lost before a note is played.",
          },
        },
        {
          label: { en: "Verbal articulation about music" },
          body: {
            en: "The interview portion separates strong players from MEP-bound students. \"Who is your favourite composer?\" is not testing knowledge — it's testing whether the candidate can talk about music with specific vocabulary (phrase, voicing, articulation, harmonic colour) rather than generic emotion. A P6 who can describe what they hear, not just what they feel, is the candidate panels are hunting for.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Piano" },
          body: {
            en: "The most competitive instrument by a wide margin — panels hear dozens of strong pianists in every cycle. Repertoire choice matters: play a piece that shows polyphonic clarity (a Bach prelude and fugue, or a Mozart sonata movement) alongside a Romantic or 20th-century piece that shows colour and pedal control. Avoid pieces every other candidate plays this cycle (overplayed Chopin nocturnes, Für Elise variants). Sight-reading on piano is harder than on a single-line instrument — practice it daily for six months before the audition.",
          },
        },
        {
          position: { en: "Strings — violin, viola, cello" },
          body: {
            en: "Panels listen for intonation first (especially on the open-string-adjacent notes), then bow control, then vibrato consistency. A confident bow change and clean shifts read as professional. Choose contrasting pieces that show both lyrical line and technical agility — a slow movement from a sonata plus a faster Romantic miniature is a safe pairing. Tune carefully in front of the panel; an untuned A is a self-inflicted handicap.",
          },
        },
        {
          position: { en: "Woodwind and brass" },
          body: {
            en: "Tone production carries the most weight — panels can tell within the first phrase whether the embouchure and air column are developed. For wind players, the school's existing band balance also matters: a strong oboe or bassoon candidate is often more recruited than a fifth flute. If your child plays a less common wind instrument (oboe, bassoon, French horn, double bass), name it explicitly in the application — that information shapes which schools fast-track the file.",
          },
        },
        {
          position: { en: "Voice" },
          body: {
            en: "Voice auditions accept a wider age range of repertoire than instrumentalists — an Italian art song or a folk song in the candidate's heritage language both work. Panels listen for breath support, intonation across the range, and diction. Choosing a piece that suits the candidate's current range is critical — a piece that exposes a break in the voice undoes a strong P6 audition. Choral CCA experience helps but is not required.",
          },
        },
        {
          position: { en: "Chinese instruments" },
          body: {
            en: "Erhu, pipa, guzheng, dizi, yangqin, and sheng have a different audition culture — typically held at SAP schools with strong Chinese Orchestra programmes (Dunman High, Catholic High, Nan Hua, Singapore Chinese Girls'). Grading frameworks differ from ABRSM — most candidates use the Singapore Chinese Music Federation (新加坡华乐总会) or local conservatory grades. Audition emphasis tilts toward traditional repertoire, ornamentation, and ensemble readiness; the school's orchestra balance often drives which instruments are most actively recruited each cycle.",
          },
        },
      ],
      positionFocusNote: {
        en: "Percussion and harp auditions exist but are much rarer — contact target schools directly to confirm whether your instrument is auditioned in the current cycle. Composition portfolios are accepted at some MEP schools as a parallel route; if your child composes, ask whether a portfolio + interview substitutes for the standard performance audition.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love music?" },
          subtext: {
            en: "Panels want a specific moment or musical idea, not a feeling. \"It makes me happy\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete piece or performance memory, then connect it to a musical observation — not just emotion.",
          },
          template: {
            en: "The first time I played a Bach prelude all the way through, I noticed three voices moving at once — and I realised piano isn't one line, it's a conversation. That's when I stopped practising to finish pieces and started practising to listen.",
          },
        },
        {
          question: { en: "Who is your favourite composer, and why?" },
          subtext: {
            en: "Tests whether the candidate can talk about music with specific vocabulary or only generic praise.",
          },
          approach: {
            en: "Name one composer plus one specific musical reason — harmonic language, form, a particular work — not biography.",
          },
          template: {
            en: "Debussy — because his harmony moves by colour rather than function. In Clair de Lune the chord changes don't feel like they're going anywhere, and that's the point. It taught me that not every phrase needs to resolve.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the music programme, or is the application a scatter-shot?",
          },
          approach: {
            en: "Cite something specific — the MEP teacher's reputation, the orchestra's repertoire, a recent concert, the rehearsal pattern.",
          },
          template: {
            en: "I went to your symphonic band's annual concert last September and the programme included a contemporary commission — that mix of standard repertoire and new music is what I want to study under. Most schools play safe; yours doesn't.",
          },
        },
        {
          question: { en: "Tell us about a piece you found difficult and how you worked through it." },
          subtext: {
            en: "Tests practice discipline and self-awareness, not just talent.",
          },
          approach: {
            en: "Situation → specific technique you used → result. Name the exact bar or technique that was the obstacle.",
          },
          template: {
            en: "The cross-hand passage in the third movement of my Mozart sonata kept tripping me up at tempo. I broke it down by practising hands separately at half tempo with a metronome, then layered the hands together one bar at a time. Two weeks of slow practice fixed what fast practice couldn't.",
          },
        },
        {
          question: { en: "What ensemble experience do you have?" },
          subtext: {
            en: "Music programmes need players who can listen and adjust, not just soloists.",
          },
          approach: {
            en: "Name the ensemble, your role, and one specific thing you learned from playing with others.",
          },
          template: {
            en: "I've played second violin in my primary school string ensemble for two years. The biggest lesson was that my intonation has to bend toward the first violin, not be technically correct — and that I have to listen to the cello to know when to lean into a phrase.",
          },
        },
        {
          question: { en: "How will you manage practice with secondary school workload?" },
          subtext: {
            en: "Schools fear DSA-Music kids whose grades collapse by Sec 2.",
          },
          approach: {
            en: "Describe a real practice schedule and how you'll protect academic time.",
          },
          template: {
            en: "I practise 90 minutes on weekdays — 30 minutes scales and sight-reading before school, 60 minutes repertoire after dinner. Weekends I do two hours. I finish homework on the bus and in the period right after school, so practice doesn't compete with assignments.",
          },
        },
        {
          question: { en: "If two MEP schools both offer you, how will you decide?" },
          subtext: {
            en: "Tests honesty under pressure — and whether the candidate has actually thought about fit.",
          },
          approach: {
            en: "Don't dodge. Pick this school, justify with one specific reason about programme or teacher fit.",
          },
          template: {
            en: "Honestly, your school. Your MEP teacher's emphasis on chamber music is what I want — I've spent most of my P6 year playing solo, and the next four years I want to play with others. If the other school called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Music — MEP (Boys), IP" },
          context: {
            en: "One of five MOE-designated MEP-Sec schools and the only all-boys MEP school. ACS(I) runs symphonic band, string ensemble, and choir at competition level. MEP application is in addition to the school's standard DSA-Sec process — check the school's website for instrument-specific audition slots each cycle.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Music — MEP, IP" },
          context: {
            en: "Listed as one of MOE's MEP-Sec schools. SAP heritage makes Dunman High particularly strong for Chinese instruments (erhu, pipa, dizi, yangqin) alongside Western repertoire. Higher Chinese or Chinese Language as Mother Tongue required.",
          },
        },
        {
          name: "Methodist Girls' School",
          url: "https://www.mgs.sch.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Music — MEP (Girls), IP" },
          context: {
            en: "MEP-Sec school with one of Singapore's longest-running school choir traditions plus strong instrumental programmes. Strong fit for voice and string candidates; piano competition is intense given the school's pianist depth.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nyghs.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Music — MEP (Girls), IP" },
          context: {
            en: "MEP-Sec school with SAP designation — exceptionally strong Chinese Orchestra (regularly named at SYF Arts Presentation with Distinction) alongside Western symphonic band. Higher Chinese or Chinese Language as Mother Tongue required.",
          },
        },
        {
          name: "Raffles Girls' School",
          url: "https://www.rgs.edu.sg/admissions/direct-school-admission",
          talentArea: { en: "Music — MEP (Girls), IP" },
          context: {
            en: "MEP-Sec school with the strongest academic profile of the MEP cluster. RGS expects MEP candidates to combine technical depth with verbal articulacy at the interview — the academic and musical filters are tightly coupled.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
          talentArea: { en: "Music — DSA (non-MEP at Sec), IP" },
          context: {
            en: "Does not run MEP at Sec but offers DSA-Sec Music for symphonic band, Chinese orchestra, choir, and string ensemble. RI's MEP track opens at JC (Higher Music available). For boys without an MEP option at Sec, RI plus the JC Higher MEP route is the established pathway.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Music — DSA (non-MEP at Sec), IP" },
          context: {
            en: "HCI's Chinese Orchestra is among Singapore's most decorated school ensembles; the symphonic band and string ensemble are also at competition level. DSA-Music applicants are auditioned through the relevant ensemble. Like RI, HCI's MEP pathway opens at JC.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/admissions/direct-school-admission",
          talentArea: { en: "Music — DSA-Sec (Boys)" },
          context: {
            en: "SAP school with a long-standing Chinese Orchestra tradition and active symphonic band. Strong route for Chinese-instrument candidates outside the MEP cluster. Higher Chinese or Chinese Language as Mother Tongue required.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Music — DSA-Sec" },
          context: {
            en: "SAP school with a Chinese Orchestra that has reached SYF Distinction repeatedly. DSA-Music is listed as a talent area, with stronger weighting on Chinese-instrument candidates. Higher Chinese or Chinese Language requirement applies.",
          },
        },
        {
          name: "Singapore Chinese Girls' School",
          url: "https://www.scgs.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Music — DSA-Sec (Girls)" },
          context: {
            en: "Strong music CCA culture with both Western and Chinese ensembles. DSA-Sec accepts a range of instruments; SCGS is a quieter alternative to the MEP cluster for girls who prefer a smaller cohort.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the audition is still weeks out" },
          items: [
            {
              en: "Pick the two contrasting pieces with your teacher and lock them in eight weeks before the audition. Do not change pieces in the final month — even a stronger piece you haven't lived with is riskier than a slightly easier piece you've internalised.",
            },
            {
              en: "Confirm your child's CCA records, ABRSM grades, and any performance certificates are accurate. MOE pulls CCA participation, school awards, and externally-validated certificates (where the primary school has logged them) directly into the DSA portal. Email a clean PDF of each ABRSM certificate to the primary school CCA teacher or year-head so the records are complete.",
            },
            {
              en: "Run a mock audition with a stranger as audience. Record from the same angle the panel would see. Watch the first 15 seconds back together — the bow, the walk to the instrument, and the breath before the first note are where composure marks are awarded and lost.",
            },
            {
              en: "Practise sight-reading daily for 10 minutes minimum. Sight-reading is the most under-trained component for piano candidates especially. Use ABRSM Grade 5 sight-reading books; aim for clean tempo and rhythm, not perfect pitches.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to maintenance practice: scales, the two pieces at performance tempo once a day, sight-reading. No new repertoire, no extra lessons. Final-week practice is about preserving freshness, not gaining ground.",
            },
            {
              en: "Confirm logistics in writing. Audition time, venue, whether the school provides a piano (and if so, ask what make — adjusting to an unfamiliar action is real), whether you can warm up before. Email the music department secretary if anything is ambiguous.",
            },
            {
              en: "Listen to a recording of each piece by a professional musician once. Not as a model to imitate, but to remind your child of the larger shape of the piece. Then put the recording away — the audition is your child's interpretation, not a copy.",
            },
          ],
        },
        {
          label: { en: "Day of audition" },
          items: [
            {
              en: "Eat 90 minutes before — a real meal, not a snack. Low blood sugar destroys fine motor control more than nerves do.",
            },
            {
              en: "Warm up at home before leaving. The school may offer a warm-up room but the wait can be long; arriving warmed-up means the first phrases at the audition are not the first phrases of the day.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the music staff if you meet them, leave. Over-involved parents are visible in a small department and the candidate absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the panel said?\" Anything else waits 24 hours. Audition replays in a 12-year-old's head are corrosive.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, audition coming up, no clear plan — there are still moves. Cut new repertoire entirely; play what's most secure even if it's a grade lower than the brochure suggests. A confident Grade 6 piece outscores a survival-mode Grade 8 piece every time. Spend the freed practice time on sight-reading and aural — the two components where focused daily work over three weeks can meaningfully move the needle, and the two components that most P6 candidates neglect. Spend an hour on interview prep using the questions above; verbal articulation about music is the most coachable part of the audition, and the part where strong panels make their final decision. Some families bring in a coach or private teacher for last-mile audition prep — a good one can stabilise nerves and refine the opening 15 seconds of each piece, but no coach produces, in three sessions, a musical voice that takes years to form. Treat it as triage, not a fix.",
      },
    },
  },
  math: {
    slug: "math",
    contentReadyBy: "2026-06-29",
    navLabel: { en: "Math", zh: "数学", ms: "Matematik", ta: "கணிதம்" },
    hook: {
      en: "Math DSA — competitions matter, but reasoning matters more.",
      zh: "数学 DSA——竞赛有用，但推理更重要。",
      ms: "DSA Matematik — pertandingan penting, penaakulan lebih penting.",
      ta: "கணித DSA — போட்டிகள் முக்கியம், ஆனால் பகுத்தறிவு மிக முக்கியம்.",
    },
    intro: {
      en: "SMOPS, NMOS, AMC — competition awards open the application. The selection test and interview reveal whether you can think under pressure.",
      zh: "SMOPS、NMOS、AMC——比赛获奖让申请被看到。选拔测试和面试看的是压力下的思考。",
      ms: "SMOPS, NMOS, AMC — anugerah membuka permohonan. Ujian pemilihan dan temu duga uji fikiran dalam tekanan.",
      ta: "SMOPS, NMOS, AMC — விருதுகள் விண்ணப்பத்தைத் திறக்கின்றன. தேர்வுத் தேர்வு மற்றும் நேர்காணல் அழுத்தத்தில் சிந்தனையை வெளிப்படுத்துகின்றன.",
    },
    summary: {
      en: "Competition benchmarks, selection-test format, interview questions, GEP / IP schools.",
      zh: "竞赛标准、选拔测试形式、面试题样、GEP / IP 学校。",
      ms: "Penanda aras pertandingan, format ujian pemilihan, soalan, sekolah GEP/IP.",
      ta: "போட்டி மதிப்பெண், தேர்வு வடிவம், கேள்விகள், GEP/IP பள்ளிகள்.",
    },
    sampleSchools: [
      "Raffles Institution",
      "Hwa Chong Institution",
      "NUS High School of Math and Science",
      "Dunman High School",
      "Catholic High School",
    ],
    metaDescription: {
      en: "Math DSA-Sec guide — SMOPS, NMOS, AMC competition benchmarks, selection test format, interview questions, GEP/IP participating schools.",
      zh: "数学 DSA-Sec 指南——SMOPS、NMOS、AMC 标准、选拔测试、面试题、GEP/IP 招生学校。",
      ms: "Panduan DSA-Sec matematik — SMOPS, NMOS, AMC, ujian pemilihan, soalan, sekolah GEP/IP.",
      ta: "கணித DSA-Sec வழிகாட்டி — SMOPS, NMOS, AMC, தேர்வு, கேள்விகள், GEP/IP பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Math DSA at Singapore secondary schools runs differently from sports — there is no physical trial, but almost every participating school runs a selection test. The selection test is a 1.5 to 2 hour problem-solving paper, usually 10 to 15 non-routine questions calibrated above the PSLE Math level — closer in style to SMOPS Round 2 or NMOS than to the school's regular math syllabus. Competition awards (SMOPS, NMOS, AMC 8, RIPMWC) open the door — a Silver or Gold from any of the major contests is the most reliable signal that an application will be read carefully — but the offer is decided by the selection test plus a short interview in which the candidate is asked to think out loud about a problem. The strongest STEM schools (NUS High, RI, HCI) read the selection test paper closely; competition pedigree alone does not produce an offer if the test paper shows brittle reasoning.",
      },
      trialDimensions: [
        {
          label: { en: "Selection-test mathematical reasoning" },
          body: {
            en: "The selection paper is where most offers are made or lost. Problems are deliberately non-routine: number theory, combinatorics, invariants, and geometry that does not yield to standard PSLE methods. Schools want to see candidates who recognise problem patterns (\"this is a pigeonhole argument\", \"this is invariant under a colouring\"), not candidates who attempt every problem with brute computation. Working shown matters — most papers credit partial reasoning even on unfinished problems.",
          },
        },
        {
          label: { en: "Time discipline under pressure" },
          body: {
            en: "10-15 questions in 90-120 minutes means roughly 7-9 minutes per question. Strong candidates do not solve problems in order — they scan the paper, lock in the problems they can solve cleanly, and ration time. The most common failure mode at P6 level is spending 45 minutes on Question 4 (which the candidate cannot solve) while Questions 9 and 12 (which they could solve) go untouched. Time triage is itself a tested skill.",
          },
        },
        {
          label: { en: "Communication of solutions" },
          body: {
            en: "Several schools — NUS High most clearly — set at least one problem requiring a written explanation rather than a numerical answer alone. Schools want candidates who can articulate why a step works, not just produce the right number. \"Because the sum of digits is divisible by 9, so is the original number\" is a complete sentence with mathematical content; a circled answer with no working is not. Practice writing solutions in full sentences, not just steps.",
          },
        },
        {
          label: { en: "Verbal reasoning at interview" },
          body: {
            en: "The interview often centres on a problem the panel hands the candidate cold — sometimes a problem the candidate has already solved on the selection paper, sometimes a new one. Panels watch how the candidate begins: do they restate the problem in their own words? Do they ask clarifying questions? Do they try a small case before generalising? Schools care more about the thinking process than about reaching the answer in five minutes.",
          },
        },
        {
          label: { en: "Composure when stuck" },
          body: {
            en: "Panels deliberately set problems the candidate may not finish in the interview slot. What they watch is the response to being stuck — does the candidate freeze, blame the problem, or shift strategy? Strong candidates verbalise their dead end (\"this approach is stalling because X\") and propose an alternative. Saying \"I don't know\" with curiosity rather than panic is a strong signal at P6 level.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Number theory" },
          body: {
            en: "The most heavily tested area at P6 selection-test level. Divisibility rules, modular arithmetic at the level of remainders and Chinese remainder ideas (without the formal theorem), gcd and lcm, prime factorisation, and parity arguments. Past SMOPS and NMOS papers are the best preparation source. A candidate who can comfortably manipulate \"divisible by 9\", \"remainder when divided by 7\", and \"how many factors does N have\" arguments is at the right baseline for the strongest schools.",
          },
        },
        {
          position: { en: "Combinatorics and counting" },
          body: {
            en: "Counting without listing, casework, complementary counting, simple bijections, and pigeonhole arguments. The pigeonhole principle is the single highest-frequency technique on Singapore P6 olympiad-style papers — practise problems explicitly framed as pigeonhole until the candidate spots them in the first 30 seconds. Many schools set at least one combinatorics problem requiring a clear case split with no missed cases.",
          },
        },
        {
          position: { en: "Geometry — synthetic and visual" },
          body: {
            en: "Selection-test geometry rewards candidates who draw diagrams cleanly and label them aggressively. Standard topics: areas of triangles and trapezoids, similar triangles, angle chasing, and a few problems that turn on coordinates or a clever auxiliary line. Singapore-style P6 olympiad geometry rarely uses formal trigonometry or coordinate geometry beyond Cartesian basics — strong synthetic reasoning beats memorised formulae.",
          },
        },
        {
          position: { en: "Algebra — manipulation and substitution" },
          body: {
            en: "At P6 level, schools expect facility with linear equations, simple Diophantine substitutions, and algebraic identities (squares, cubes, factorisations of x² - y², x³ + y³). Word problems modelled with one or two variables are common. NUS High and the IP schools set occasional problems involving inequalities or simple recursions — exposure to these in NMOS and AMC 8 papers is the cheapest preparation.",
          },
        },
        {
          position: { en: "Logic and invariants" },
          body: {
            en: "A small but high-discrimination category. Invariant arguments (\"colour the squares like a chequerboard\", \"the parity of the sum doesn't change\"), monovariants, and extremal-principle problems separate strong candidates from very strong candidates. Schools running selection-test analytics report that a clean invariant solution is one of the most reliable signals of a future Math Olympiad team member.",
          },
        },
      ],
      positionFocusNote: {
        en: "Specialist tracks like cryptography, applied computing, or research projects exist at NUS High and at the IP schools' research mentorship programmes but are typically accessed after Sec 1 rather than at DSA-Sec admission. Lead the application with classical olympiad mathematics; specialist interest is supporting context, not the main credential.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love math?" },
          subtext: {
            en: "Panels want a specific mathematical experience, not a feeling. \"It's logical\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete problem or idea you found beautiful, then connect it to how you think.",
          },
          template: {
            en: "The first time I proved that there are infinitely many primes, I realised math isn't about getting answers — it's about being certain something is true forever. That contrast with school math, where you check answers against a key, changed how I work on problems.",
          },
        },
        {
          question: { en: "Show me a problem you've worked on recently — walk me through your solution." },
          subtext: {
            en: "The interview's most common opening question at the strongest schools. Tests whether the candidate can explain reasoning to another person.",
          },
          approach: {
            en: "Pick a problem you've genuinely solved (from SMOPS, NMOS, a past paper) — not a problem you've memorised. Walk through the key insight, the case split or technique, and what made it click.",
          },
          template: {
            en: "A problem from last year's SMOPS Round 2 — six dots on a circle, count the triangles whose interior contains the centre. I tried small cases first (4 dots, then 5) and noticed the answer was related to how many ways to pick three dots that don't all lie on the same semicircle. The insight was the complementary count.",
          },
        },
        {
          question: { en: "Here's a problem I'd like you to try — think out loud as you go." },
          subtext: {
            en: "The thinking-out-loud question. Panels score the process, not the answer.",
          },
          approach: {
            en: "Restate the problem in your own words. Try a small case. Name your strategy out loud (\"let me try parity\"). If stuck, say so and propose an alternative. Do not stay silent.",
          },
          template: {
            en: "Let me make sure I have it right — you want the smallest N such that... Okay. Let me try N = 5 first — that gives... So 5 doesn't work because... Let me try parity — the sum of an odd count of odd numbers is odd...",
          },
        },
        {
          question: { en: "Tell me about a problem you couldn't solve." },
          subtext: {
            en: "Tests honesty and resilience. Schools fear candidates who present a polished image of always being right.",
          },
          approach: {
            en: "Name a real problem, the approaches you tried, why they failed, and what you learned from being stuck.",
          },
          template: {
            en: "A problem from RIPMWC 2024 — I had a counting argument that gave the wrong answer because I was double-counting one configuration. I couldn't see the double-count for a week. When my teacher pointed it out, I realised I'd skipped the small-case sanity check. Now I always check N = 1 and N = 2 against my formula before I trust it.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the math programme, or is this a scatter-shot application?",
          },
          approach: {
            en: "Cite something specific about the school's math culture — a teacher, an olympiad team result, a research mentorship, a specific course in the senior years.",
          },
          template: {
            en: "Your school sends students to the SMO Senior Round annually and has the strongest IMO Singapore selection record over the past decade. The way your math department runs the olympiad training as a regular CCA, not an extracurricular, is what I want from Sec 1 onwards.",
          },
        },
        {
          question: { en: "How will you balance math training with the rest of the curriculum?" },
          subtext: {
            en: "Schools fear DSA-Math kids whose grades elsewhere collapse — and especially fear narrow specialists.",
          },
          approach: {
            en: "Describe a real schedule and name interests outside math.",
          },
          template: {
            en: "I do olympiad problems for an hour on weekday evenings after homework and longer sessions on weekends. I also read history — outside math, that's my favourite subject — and play badminton on Saturdays. Math is my main thing but it's not my only thing.",
          },
        },
        {
          question: { en: "If two schools both offer you, how will you decide?" },
          subtext: {
            en: "Tests honesty under pressure — and whether the family has actually thought about fit.",
          },
          approach: {
            en: "Don't dodge. Pick this school, justify with one specific reason about programme or teacher fit.",
          },
          template: {
            en: "Honestly, your school. The way your school structures the IP curriculum's research track from Year 3 means I can move toward research mathematics earlier than at the other school. If the other school called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "NUS High School of Math and Science",
          url: "https://www.nushigh.edu.sg/admissions/",
          talentArea: { en: "Math, full DSA — independent admissions" },
          context: {
            en: "Singapore's flagship STEM secondary school. NUS High runs its own admission process distinct from mainstream DSA-Sec (different timeline, different application portal). The selection test is widely regarded as the most demanding of any Singapore secondary school's math screening — problem-solving and proof-style questions calibrated above SMOPS Round 2 level. Strongest pathway for candidates targeting research mathematics or IMO selection.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
          talentArea: { en: "Math (Boys), IP" },
          context: {
            en: "Math is listed in RI's 2026 DSA talent areas. RI runs the deepest olympiad-training pipeline among IP schools, with Math Olympiad as a structured CCA from Sec 1. Selection test rewards classical olympiad fluency; the interview is a thinking-out-loud session built around a single problem.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Math (Boys), IP" },
          context: {
            en: "Math is among HCI's 2026 DSA talent areas. Bicultural Studies Programme and Science & Math Talent Programme both anchor the school's STEM identity. Selection test and interview format closely parallel RI's; expect a heavy combinatorics and number theory weighting.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Math, DSA-Sec, IP" },
          context: {
            en: "Listed in Dunman High's 2026 DSA FAQ. The Science Mathematics Talent Programme provides accelerated math instruction from Sec 1. SAP school — Higher Chinese or Chinese Language as Mother Tongue required. A common alternative to RI/HCI for bicultural-leaning families.",
          },
        },
        {
          name: "Raffles Girls' School",
          url: "https://www.rgs.edu.sg/admissions/direct-school-admission",
          talentArea: { en: "Math (Girls), IP" },
          context: {
            en: "Math is a listed DSA-Sec talent area at RGS. Selection test parallels RI's in difficulty; the interview emphasises clear verbal articulation of mathematical reasoning. Strong fit for girls already on the Math Olympiad track at primary level.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nyghs.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Math (Girls), IP" },
          context: {
            en: "Math is a listed DSA-Sec talent at NYGH. SAP designation — Higher Chinese or Chinese Language as Mother Tongue required. The Science & Math Talent Programme integrates with Chinese-language enrichment, making NYGH the natural fit for bicultural STEM-oriented girls.",
          },
        },
        {
          name: "River Valley High School",
          url: "https://rivervalleyhigh.moe.edu.sg/admissions/dsa-sec/",
          talentArea: { en: "Math, DSA-Sec, IP" },
          context: {
            en: "Math is a listed DSA talent at RVHS. Bicultural and SAP heritage — Higher Chinese or Chinese Language requirement applies. Selection test difficulty calibrated below NUS High and RI but well above PSLE level; strong route for candidates with SMOPS Silver / NMOS Silver but not yet at Gold.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/admissions/direct-school-admission",
          talentArea: { en: "Math, DSA-Sec (Boys)" },
          context: {
            en: "SAP school with a strong record at SMOPS and NMOS team events. Math is among Catholic High's DSA-Sec talent areas. Higher Chinese or Chinese Language as Mother Tongue required.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Math (Boys), IP" },
          context: {
            en: "Math is among ACS(I)'s DSA-Sec talent areas. Selection test difficulty is competitive with RI / HCI; the IP track integrates with the IB Diploma in senior years, making the math pathway distinct from A-Level-track schools.",
          },
        },
        {
          name: "Methodist Girls' School",
          url: "https://www.mgs.sch.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Math (Girls), IP" },
          context: {
            en: "Math is a listed DSA-Sec talent area at MGS. IP track also leads to the IB Diploma. A quieter alternative to the RGS / NYGH cluster for girls who want competitive math without the SAP-school cohort.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the selection test is still weeks out" },
          items: [
            {
              en: "Work through past SMOPS Round 2 and NMOS papers as the primary preparation. Singapore selection tests draw their difficulty calibration from these contests more than from AMC 8 (which is closer to PSLE level for top P6 students). Aim for 20-30 past problems worked through completely with solutions read after each, not 200 skimmed.",
            },
            {
              en: "Confirm all competition certificates (SMOPS, NMOS, AMC, RIPMWC) are logged accurately. MOE pulls competition results from primary schools' DSA portal entries — if the certificate is not logged, scan and submit directly with the application. Schools that score competition history give zero credit to claimed-but-unverified awards.",
            },
            {
              en: "Run a mock interview where the panellist hands the candidate a problem cold and the candidate has 5 minutes to think out loud. Record it. The most common P6 failure is silence — strong candidates verbalise even when stuck (\"let me try a small case\"). Practice this until thinking-out-loud is automatic.",
            },
            {
              en: "Read one solution write-up per week from a Singapore math olympiad source. The point is not to learn the problem — it is to absorb how mathematical writing is structured (claim, justification, computation, conclusion). Selection tests increasingly require written explanations, and the convention is learnable in 6-8 weeks of reading.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Stop attempting new hard problems three days before the test. Switch to reviewing techniques already learned — pigeonhole, parity, invariants, casework. Final-week new material rarely consolidates and frequently shakes confidence the night before. Trust what's already in the toolbox.",
            },
            {
              en: "Confirm logistics in writing. Test date and time, venue, what to bring (pencils, eraser, ruler, water, watch — most venues prohibit calculators or phones), interview slot. Email the school admissions office if anything is ambiguous.",
            },
            {
              en: "Sleep schedule shift: if the test is at 9am, the candidate should be waking at 7am for at least four days before. Cognitive performance on novel problems is heavily sleep-dependent; an extra hour of last-minute practice the night before is a net negative.",
            },
          ],
        },
        {
          label: { en: "Day of test / interview" },
          items: [
            {
              en: "Eat a real meal 90 minutes before — complex carbs, modest portion. Avoid sugar surges; novel problem-solving runs better on stable blood sugar than on a caffeine-and-sugar peak.",
            },
            {
              en: "Bring two pencils and a backup eraser. Pencil breaks are the trivial avoidable disaster on selection tests. A working watch (not a smart watch) is essential if the venue clock is small or behind the candidate.",
            },
            {
              en: "Drop off, don't hover. Walk in, sign the candidate in, leave. Over-involved parents in the waiting area are visible and the candidate absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What was the most interesting problem today?\" Anything else waits 24 hours. Replays of unsolved problems between test and offer are corrosive.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — application in, selection test coming up, no clear preparation plan — there are still real moves. Cut new topic learning entirely. Drill exactly three techniques to fluency: the pigeonhole principle, parity / mod 2 arguments, and the practice of trying small cases (N = 1, 2, 3) before generalising. These three appear on almost every Singapore P6 olympiad-style paper and are the cheapest high-return preparation. For the interview, the single highest-leverage practice is thinking out loud — pick three problems the candidate has already solved and rehearse explaining them to a non-mathematical audience. The selection test rewards reasoning the candidate already has; what late preparation buys is composure, not new ability. Some families bring in a private math coach at this stage — a good one can stabilise nerves and sharpen the verbal articulation, but no coach produces, in three sessions, the pattern-recognition that years of contest training build. Treat it as triage, not a fix.",
      },
    },
  },
  robotics: {
    slug: "robotics",
    contentReadyBy: "2026-06-03",
    navLabel: { en: "Robotics", zh: "机器人", ms: "Robotik", ta: "ரோபோடிக்ஸ்" },
    hook: {
      en: "Robotics DSA — what assessors actually watch during the build challenge.",
      zh: "机器人 DSA——build challenge 评委真正在看什么。",
      ms: "DSA Robotik — apa yang penilai sebenarnya nilai semasa cabaran bina.",
      ta: "ரோபோடிக்ஸ் DSA — பில்ட் சவாலின் போது மதிப்பீட்டாளர்கள் என்ன பார்க்கிறார்கள்.",
    },
    intro: {
      en: "Top STEM schools don't just look for kids who win VEX or FLL. They look for engineering judgment — how you debug when the robot doesn't move, how you document, how you collaborate. Here's what the trial actually measures.",
      zh: "顶尖 STEM 学校不只看你赢过 VEX 或 FLL。他们看工程判断——机器人不动时怎么 debug、怎么记录、怎么协作。trial 实际在测什么。",
      ms: "Sekolah STEM teratas bukan sekadar mencari kanak-kanak yang menang VEX atau FLL. Mereka mencari pertimbangan kejuruteraan — bagaimana anda atasi pepijat, dokumentasikan, dan bekerjasama.",
      ta: "சிறந்த STEM பள்ளிகள் VEX அல்லது FLL வென்றவர்களை மட்டும் தேடவில்லை. பொறியியல் தீர்ப்பு — ரோபோ வேலை செய்யாதபோது நீங்கள் எவ்வாறு பிழைதிருத்துகிறீர்கள், ஆவணப்படுத்துகிறீர்கள், ஒத்துழைக்கிறீர்கள்.",
    },
    summary: {
      en: "Trial dimensions, programming and build focus, sample interview questions, participating STEM schools.",
      zh: "Trial 评分维度、编程与组装重点、面试题样、STEM 学校清单。",
      ms: "Dimensi trial, fokus pengaturcaraan dan bina, soalan temu duga, sekolah STEM peserta.",
      ta: "சோதனை பரிமாணங்கள், நிரலாக்கம் மற்றும் கட்டுமான கவனம், மாதிரி நேர்காணல் கேள்விகள், STEM பள்ளிகள்.",
    },
    sampleSchools: [
      "NUS High School of Math and Science",
      "School of Science and Technology",
      "Hwa Chong Institution",
      "Raffles Institution",
      "Dunman High School",
      "Anglo-Chinese School (Independent)",
    ],
    metaDescription: {
      en: "How robotics DSA-Sec interviews and trials work in Singapore — what assessors look for in build challenges and code reviews, sample questions, list of participating STEM schools.",
      zh: "新加坡机器人 DSA-Sec 面试与 trial 全解析——build challenge 与 code review 评委看什么、面试样题、STEM 学校清单。",
      ms: "Cara temu duga dan trial DSA-Sec robotik di Singapura — apa yang penilai cari, soalan contoh, sekolah STEM peserta.",
      ta: "சிங்கப்பூரில் ரோபோடிக்ஸ் DSA-Sec நேர்காணல் மற்றும் சோதனை எவ்வாறு செயல்படுகிறது — மதிப்பீட்டாளர்கள் என்ன தேடுகிறார்கள், மாதிரி கேள்விகள், STEM பள்ளிகள்.",
    },
    rich: {
      preparedPiece: {
        intro: {
          en: "Robotics auditions split into a hands-on build/debug component (school's call) and a portfolio walk-through (the candidate's prepared piece). Bring a tangible past project plus a tight verbal explanation. Specialised schools (NUS High, SST) also include a written component on programming logic.",
        },
        entries: [
          {
            variant: { en: "Project portfolio (all schools)" },
            requirement: { en: "Documentation of 1–3 past robotics or coding projects: dated photos of each iteration, screenshots of code with comments, one-page write-up per project (problem · approach · what failed · how you fixed it)" },
            source: { en: "Composite from NUS High / SST / IP school audition guidance + Singapore parent forum reports" },
          },
          {
            variant: { en: "Project walk-through (verbal)" },
            requirement: { en: "5-minute spoken walk-through of the most complex project · 3 slides: problem · approach · failure-and-fix · rehearsed to land in 90 seconds, smooth, with specific technical detail" },
            source: { en: "Audition pattern across STEM-DSA schools" },
          },
          {
            variant: { en: "NUS High School / SST (specialised)" },
            requirement: { en: "Portfolio · plus timed build-and-code challenge (VEX IQ, LEGO Mindstorms, or school-specific kit) · plus written component on programming logic · plus hands-on debugging task" },
            source: { en: "NUS High + SST audition format (most rigorous in Singapore)" },
          },
          {
            variant: { en: "IP schools (RI, HCI, ACS(I), DHS, etc.)" },
            requirement: { en: "Portfolio interview weights most heavily · plus a shorter build or debug task · less written-component emphasis than specialised schools" },
            source: { en: "Non-specialised STEM-DSA audition pattern" },
          },
        ],
        coachCtaBlurb: {
          en: "A STEM coach can sharpen the project narrative, run mock debugging sessions, and rehearse the 90-second walk-through under pressure. Browse our coach directory for robotics and coding specialists.",
        },
      },
      trialDimensionsIntro: {
        en: "Singapore robotics trials usually run 2 to 3 hours and combine three formats: a timed build-and-code challenge (often with VEX IQ, LEGO Mindstorms, or a school-specific kit), a portfolio interview where the candidate walks the panel through a past project, and a short engineering reasoning conversation. Specialised schools (NUS High, SST) run the most rigorous version — expect a written component on programming logic plus a hands-on debugging task. Most non-specialised schools weight the portfolio interview most heavily because they don't have the lab time for a full build trial. The six dimensions below show up across all formats.",
      },
      trialDimensions: [
        {
          label: { en: "Engineering reasoning under failure" },
          body: {
            en: "Assessors deliberately design build tasks that won't work on the first try — a sensor is calibrated wrong, motor power is too low, a code block is missing. What they watch is not whether the candidate fixes it, but the order of operations: do they look at the code first, the mechanics first, or run a diagnostic test? At twelve, this systematic-debugging instinct is the single highest-signal habit. Candidates who randomly try changes lose points even if they happen to fix the bug.",
          },
        },
        {
          label: { en: "Programming proficiency for age" },
          body: {
            en: "Most P6 robotics candidates know Scratch or block-based VEX programming. A meaningful minority can write Python or basic C++. Assessors don't expect production code — they expect clean logic, named variables, and the ability to talk through what each block does. Reading another team's code and finding the bug is a common trial task. Coaches at specialised schools watch how candidates name variables: \"motorL\" beats \"x\" every time.",
          },
        },
        {
          label: { en: "Mechanical / structural intuition" },
          body: {
            en: "Can the candidate eyeball a build and predict which joint will fail under torque? Will they reinforce stress points without being told? VEX and LEGO kit familiarity matters less than the underlying spatial reasoning. Candidates who reach for triangular bracing without instruction stand out — it's a stable engineering instinct, not memorised.",
          },
        },
        {
          label: { en: "Documentation and engineering notebook" },
          body: {
            en: "Bring a physical or digital engineering journal — hand-drawn sketches, iteration logs, dated entries showing what worked and what didn't. This is the single most-overlooked preparation by parents and the single most-cited by assessors at SST and NUS High. A clean document with photos and dated reflections outperforms a polished GitHub repo with no narrative.",
          },
        },
        {
          label: { en: "Collaboration and team role articulation" },
          body: {
            en: "Most robotics work is team-based. Assessors ask candidates to describe their role on past teams — and they listen for whether the candidate can name what teammates did that they couldn't. \"I was the programmer\" is weak. \"I was the programmer; Mei-Lin handled mechanical; we always paired on the sensor calibration because that was the bottleneck\" is what they want.",
          },
        },
        {
          label: { en: "Curiosity beyond the kit" },
          body: {
            en: "What has the candidate built outside school robotics CCA? An Arduino weather station, a hacked-together line follower, a Raspberry Pi project that doesn't quite work yet — anything that shows they tinker on their own. Specialised schools weight this heavily because passion drives the long-term grit needed for competition robotics.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Programmer" },
          body: {
            en: "Strongest pathway for candidates who enjoy logic puzzles and can explain code line by line. Schools want clean indentation, comments where needed, and the discipline to test in small increments rather than write fifty lines and pray. Be ready to show one piece of code you wrote — print it out, walk through it. Bonus if you can show a bug you fixed and explain how you found it.",
          },
        },
        {
          position: { en: "Mechanical builder" },
          body: {
            en: "For candidates who love the kit itself — VEX gears, LEGO Technic joints, 3D-printed brackets. Schools want fluency in load distribution, gear ratios, and modular design. Bring photos of complex builds and be ready to explain why you chose specific structural decisions. \"Because it looked cool\" is the wrong answer; \"because the previous version sagged under the lift arm\" is the right one.",
          },
        },
        {
          position: { en: "Strategist / driver" },
          body: {
            en: "In VEX-style competitions, the driver makes split-second decisions in a 2-minute match. Schools recruiting for competition teams watch for game-state awareness — can the candidate read the field, predict the opposing alliance's next move, call audibles. Less common as a DSA entry point than the other three but valuable when the school has an active VEX or VRC program.",
          },
        },
        {
          position: { en: "Documenter / presenter" },
          body: {
            en: "The role most parents underestimate. FIRST LEGO League awards multiple of its trophies based on the engineering notebook and the project presentation — not robot performance. Schools that compete in FLL look hard for candidates who can communicate clearly, both written and verbal. If your child is more articulate than mechanical, this is the lane.",
          },
        },
      ],
      positionFocusNote: {
        en: "Strong candidates can swing between two of these roles — most P6 winners on Singapore VEX and FLL teams describe themselves as \"programmer + documenter\" or \"builder + strategist.\" Schools don't expect a Sec 1 candidate to commit to one role.",
      },
      interviewQuestions: [
        {
          question: { en: "Walk us through a robotics project you built." },
          subtext: {
            en: "The panel wants concrete engineering reasoning, not a list of competitions.",
          },
          approach: {
            en: "Pick one project. Describe the problem, your first design, what failed, what you changed. Spend 70% on the failure-and-iteration part.",
          },
          template: {
            en: "Our P5 FLL robot kept missing the loading station because our line sensor read black on the printed mat seam. I tested three sensor heights, then switched from threshold detection to gradient detection — that fixed it. We placed third in the regional.",
          },
        },
        {
          question: { en: "What programming languages or platforms do you use?" },
          subtext: {
            en: "Honesty matters more than range. The panel can spot a kid who's read about Python but never actually written it.",
          },
          approach: {
            en: "Name the platform plus one specific thing you can do in it.",
          },
          template: {
            en: "VEXcode Blocks for our school team — I write the autonomous routines. I started learning Python last year and can do basic loops and conditionals, but I haven't built a full project in it yet.",
          },
        },
        {
          question: { en: "Tell us about a time your robot didn't work. What did you do?" },
          subtext: {
            en: "Tests systematic debugging instinct vs random poking.",
          },
          approach: {
            en: "Describe the symptom, the hypothesis, the test, the fix. Show ordered thinking.",
          },
          template: {
            en: "Our gripper kept dropping the cube halfway through the lift. I first thought the motor was underpowered, but I measured the current and it was fine. Then I checked the grip surface — the rubber band had stretched. Replaced it and tightened the calibration. Took twenty minutes.",
          },
        },
        {
          question: { en: "Why our school's robotics program?" },
          subtext: {
            en: "Did the family research the actual lab and competition record, or are they applying everywhere with STEM?",
          },
          approach: {
            en: "Name one specific thing about the school's robotics — a coach, a competition track, a piece of equipment, an alumnus project.",
          },
          template: {
            en: "NUS High's research-based robotics tracks — the Year 3 project showcase your school published online featured underwater ROV builds, which is what I want to work on. Most schools stop at competition robotics; yours goes further.",
          },
        },
        {
          question: { en: "Describe a time you disagreed with a teammate on a design decision." },
          subtext: {
            en: "Tests collaboration maturity, not whether they always win arguments.",
          },
          approach: {
            en: "Situation → both sides → how it was resolved → what you learned.",
          },
          template: {
            en: "My teammate wanted a larger gear for more torque on our arm. I thought it would slow us down too much in the match. We built both and tested — the smaller gear was 0.6 seconds faster per cycle. He was right that we'd lose grip strength, so we added a second motor instead. I learned to test first, argue second.",
          },
        },
        {
          question: { en: "How do you balance robotics with academic work?" },
          subtext: {
            en: "Schools fear DSA STEM kids who flame out in Sec 2 because robotics swallows their evenings.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I do most of my homework during the school day in short breaks. CCA training nights, I revise on the bus home and only do Math problem sets after dinner — those are the ones that benefit from focus time. Sundays are robotics build day, no homework.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether the candidate would actually enrol.",
          },
          approach: {
            en: "Don't dodge. Pick one, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school — the cross-discipline focus between robotics and biology in your Year 3 modules matches what I want to learn. If the other school called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "NUS High School of Math and Science",
          url: "https://www.nushigh.edu.sg/",
          talentArea: { en: "Robotics & Engineering, Specialised IP" },
          context: {
            en: "100% DSA admission — no PSLE-posting alternative. Research-based robotics program with annual Year 3 project showcase. Application weights portfolio, engineering reasoning, and a written component on programming logic.",
          },
        },
        {
          name: "School of Science and Technology",
          url: "https://www.sst.edu.sg/",
          talentArea: { en: "Robotics & ICT, Specialised" },
          context: {
            en: "Specialised school with applied-learning focus. Robotics is central to the curriculum; expect rigorous trial involving hands-on build and code debugging.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Robotics, IP" },
          context: {
            en: "Listed in HCI's DSA talent areas. Active VEX and FIRST competition track; assessors weight engineering notebook and team role articulation heavily.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
          talentArea: { en: "Robotics, IP" },
          context: {
            en: "Listed in RI's DSA talent areas. Robotics CCA has consistent showings in National Robotics Competition and World Robot Olympiad.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/",
          talentArea: { en: "Robotics & STEM, IP" },
          context: {
            en: "Robotics under broader STEM DSA category. Trial typically includes portfolio review plus a timed build challenge.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://www.acsbr.moe.edu.sg/",
          talentArea: { en: "Robotics, Express" },
          context: {
            en: "Active VEX track at lower secondary level. Welcomes candidates with VEX IQ or FLL competition experience but considers self-taught applicants.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Robotics, IP" },
          context: {
            en: "Listed in Dunman High's 2026 DSA FAQ under STEM. Higher Chinese or Chinese Language as Mother Tongue required.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Robotics, DSA-Sec" },
          context: {
            en: "Active in National Robotics Competition. SAP school — Higher Chinese or Chinese Language as Mother Tongue required.",
          },
        },
        {
          name: "River Valley High School",
          url: "https://www.rivervalleyhigh.moe.edu.sg/",
          talentArea: { en: "Robotics, IP" },
          context: {
            en: "Listed in RV High's DSA talent areas. SAP school. Strong programming-side training; mechanical builders welcome but need to demonstrate logic instinct.",
          },
        },
        {
          name: "Methodist Girls' School",
          url: "https://www.mgs.sch.edu.sg/",
          talentArea: { en: "Robotics, IP" },
          context: {
            en: "Robotics among MGS's growing STEM tracks; active in FLL. Welcomes applicants from co-ed primary feeders.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Build a portfolio. Pick one robotics project — even a small one — and document it properly: dated photos of each iteration, screenshots of code with comments, a one-page write-up describing the problem, your approach, what failed, what you changed. This single artefact carries more weight than a list of competitions on the application form.",
            },
            {
              en: "Practice talking through code without filler words. Sit your child in front of a printout of their code and have them explain it line by line in 90 seconds. Record on phone. Watch back together. Flag every \"and then\" and \"basically\" — those signal weak articulation under pressure.",
            },
            {
              en: "Confirm your child's CCA records at primary school are accurate. MOE pulls CCA participation, school awards, NRC / WRO / FLL results, and any computing-related JSA data from the primary school directly into the DSA portal. Ask the CCA teacher to verify what's been logged. Incomplete records hurt the application.",
            },
            {
              en: "Run a mock interview using the questions above. Time each answer — aim for 45 to 60 seconds. Watch back. Flag any answer over 90 seconds or any answer that doesn't include a specific failure or iteration. Robotics panels are unforgiving on vague answers.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Cancel any new robotics academy session or workshop. Final-week added load rarely pays off and frequently produces nerves on trial day. Stick to what your child already knows.",
            },
            {
              en: "Print one piece of code your child wrote. Hand-mark it with a pencil — circle variable names, underline functions, note edge cases. Walk through it together. The trial will likely involve explaining code, so the physical artefact helps.",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire, whether to bring own laptop or kit. Email the teacher-in-charge if anything is ambiguous — the email itself is a data point on parent attentiveness.",
            },
            {
              en: "One scrimmage with strangers. Most kids underperform at the trial because they freeze when a panel of unfamiliar adults watches them debug. Run a mock with a parent friend who knows nothing about robotics — force the awkwardness early.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — protein-heavy, not sugar. Robotics trials with hands-on debugging tasks reward patience and clear thinking; a sugar crash mid-trial is visible.",
            },
            {
              en: "Bring the portfolio. Physical printout if possible, plus a USB stick with code samples backed up. Even if the panel doesn't ask, the kit on the table signals preparation.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing you wished you had done differently?\" Anything else waits 24 hours. Replays of failed debugs during the wait are corrosive.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — application in, trial coming up, no clear preparation plan — there are still real moves. Don't try to learn a new programming language. Instead, take the most complex robotics or coding project your child has ever done and turn it into a five-minute walk-through with three slides: problem, approach, what failed and how you fixed it. The single highest-leverage prep is rehearsing this walk-through five or six times until it lands in 90 seconds, smooth, with specific technical detail. The trial itself rewards engineering reasoning the candidate already has; what late preparation buys is composure and articulation, not new skill. Some families bring in a private STEM coach at this stage — a good one can stabilise nerves and tighten the verbal explanation, but no coach produces, in three sessions, the engineering judgment that years of tinkering build. Treat it as triage, not a fix.",
      },
    },
  },
  chinese: {
    slug: "chinese",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Chinese (CLE)", zh: "高级华文", ms: "Bahasa Cina", ta: "சீன மொழி" },
    hook: {
      en: "Chinese Language DSA — what SAP schools actually look for.",
      zh: "华文 DSA——SAP 学校到底在挑什么",
      ms: "DSA Bahasa Cina — apa sekolah SAP sebenarnya cari.",
      ta: "சீன மொழி DSA — SAP பள்ளிகள் உண்மையில் எதைத் தேடுகின்றன.",
    },
    intro: {
      en: "Chinese DSA at SAP schools is not a vocabulary test. Panels read for cultural depth, written voice, and whether the candidate can hold a real conversation about a Chinese text — the foundation Higher Chinese and Bicultural Studies will build on.",
      zh: "SAP 学校的华文 DSA 不是词汇测验。考官看的是文化底蕴、写作个性、以及能否针对一篇中文文本进行真正的对话——这是高级华文与双文化课程未来的底子。",
      ms: "DSA Bahasa Cina di sekolah SAP bukan ujian perbendaharaan kata. Panel menilai kedalaman budaya, suara penulisan, dan keupayaan untuk berbual tentang teks Cina secara mendalam.",
      ta: "SAP பள்ளிகளில் சீன மொழி DSA என்பது சொற்களஞ்சிய சோதனை அல்ல. குழு கலாச்சார ஆழம், எழுத்து குரல், சீன உரையைப் பற்றி உரையாட முடியுமா என்பதை மதிப்பிடுகிறது.",
    },
    summary: {
      en: "Trial structure, written essay rubric, oral interview formats, SAP schools, Bicultural Studies pathway.",
      zh: "Trial 流程、写作评分维度、口试形式、SAP 学校、双文化课程衔接。",
      ms: "Struktur trial, rubrik karangan, format temu duga lisan, sekolah SAP, laluan Bicultural Studies.",
      ta: "சோதனை அமைப்பு, கட்டுரை மதிப்பீடு, வாய்மொழி நேர்காணல், SAP பள்ளிகள், Bicultural Studies பாதை.",
    },
    sampleSchools: [
      "Hwa Chong Institution",
      "Nanyang Girls' High School",
      "Dunman High School",
      "Nan Hua High School",
      "Catholic High School",
      "River Valley High School",
    ],
    metaDescription: {
      en: "Chinese Language DSA-Sec guide for Singapore P6 — how SAP schools assess Higher Chinese candidates, trial formats, interview questions, participating schools.",
      zh: "新加坡 P6 华文 DSA-Sec 指南——SAP 学校如何评核高级华文申请者、trial 形式、面试题、招生学校。",
      ms: "Panduan DSA-Sec Bahasa Cina Singapura — bagaimana sekolah SAP menilai calon Higher Chinese, format trial, soalan temu duga, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 சீன மொழி DSA-Sec வழிகாட்டி — SAP பள்ளிகள் Higher Chinese விண்ணப்பதாரர்களை எவ்வாறு மதிப்பிடுகின்றன, சோதனை வடிவங்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore's eleven Special Assistance Plan (SAP) secondary schools — and a handful of IP schools with Bicultural Studies Programmes — accept DSA-Sec applications for Chinese Language talent. Trials are usually run by the Chinese department head with one HOD-level teacher, and most assess across three live components: a written task (essay or comprehension response), an oral interview in Mandarin, and a sight-reading or recitation segment. No school publishes its rubric, but FAQs from Dunman High, Nan Hua High, and parent-forum reports across the past five admission cycles converge on the six dimensions below.",
      },
      trialDimensions: [
        {
          label: { en: "Written voice over written accuracy" },
          body: {
            en: "Panels assume Higher Chinese candidates will make few character errors — that's the floor, not the ceiling. What separates a DSA-Sec offer from an average HCL student is voice: whether the essay sounds like a twelve-year-old who reads widely, or like a tuition centre template. Schools openly tell parents at open houses that templated essays are the most common reason a strong-on-paper candidate doesn't progress.",
          },
        },
        {
          label: { en: "Oral fluency in topic conversation" },
          body: {
            en: "The oral round is not the PSLE oral. Panels ask follow-up questions and probe whether the candidate has opinions about what they've read. A child who recites a memorised answer about 朱自清《背影》 scores lower than one who says \"I didn't like it the first time, but on second read the father's hands stayed with me.\" Personal reaction signals reading depth.",
          },
        },
        {
          label: { en: "Reading breadth beyond textbook canon" },
          body: {
            en: "Most candidates can talk about 《西游记》 and 《三国演义》. The signal comes from candidates who name a contemporary writer — 余华, 莫言, 龙应台, 杨绛 — and have something specific to say about a passage they remember. Reading breadth is the single highest-leverage long-game investment a Chinese-DSA family can make.",
          },
        },
        {
          label: { en: "Cultural reference fluency" },
          body: {
            en: "SAP schools want students who can hold a conversation linking Chinese history, festivals, or proverbs to modern life. The panel may ask why 端午节 traditions matter or what 《论语》 has to say about friendship. Vague \"我觉得很有意义\" answers underperform a candidate who picks one specific custom or one specific 论语 line and explains why.",
          },
        },
        {
          label: { en: "Calligraphy or recitation (school-dependent)" },
          body: {
            en: "Some schools — particularly Maris Stella and Chung Cheng — include a short calligraphy or classical-poem recitation segment. This is not weighted as heavily as essay and oral, but visible neglect of stroke order or rhythm signals a candidate who only practises for exams.",
          },
        },
        {
          label: { en: "Bicultural curiosity" },
          body: {
            en: "Schools with Bicultural Studies Programmes — Hwa Chong, Dunman High, Nanyang Girls', Nan Hua, River Valley — explicitly look for candidates curious about contemporary China alongside Chinese classical heritage. A candidate who mentions reading a Chinese news app, watching a 央视 documentary, or following a Beijing-based bilingual blogger scores meaningfully higher than one who only cites Tang poems.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Essay / 写作 focus" },
          body: {
            en: "Most schools allocate the largest single block to a 350–500 character essay on a prompt revealed on the day. Coaches who prep DSA-Sec candidates say the highest-scoring essays open with a specific scene rather than a thesis statement. Panels read for whether the candidate can sustain a single narrative line for the full length, or whether the writing wanders into separate paragraphs that don't connect.",
          },
        },
        {
          position: { en: "Oral interview / 口试 focus" },
          body: {
            en: "Expect 10–15 minutes of live Mandarin conversation. The opener is often \"介绍一本你最近读的中文书\" or a current-affairs prompt. Where candidates lose ground is the second question — when the panel pushes back. Practising not the first answer but how to extend it under follow-up is what separates DSA candidates from PSLE-oral prep.",
          },
        },
        {
          position: { en: "Comprehension / 阅读理解 focus" },
          body: {
            en: "Some schools include a sight-read of an unseen passage — modern essay, news commentary, or excerpt from a contemporary novel — followed by short written or oral response. The signal is whether the candidate can summarise the passage's argument in one sentence and react to it, not whether they can list every supporting detail. Skim-and-react beats slow-and-thorough on the clock.",
          },
        },
        {
          position: { en: "Recitation / 朗诵 focus" },
          body: {
            en: "A minority of schools — Chung Cheng High and Maris Stella have historically included this — ask for a prepared poem or short prose recitation. Choose a Tang or Song poem with clear emotion (李白 《静夜思》 is too obvious; consider 杜甫 《春望》 or a 苏轼 ci). Memorisation alone is not enough — panels listen for whether the candidate understands what they're reciting.",
          },
        },
      ],
      positionFocusNote: {
        en: "Schools vary which components they emphasise. Hwa Chong and Nanyang Girls' weight essay and oral most heavily. Maris Stella and Chung Cheng include recitation. Dunman High and Nan Hua publish FAQs that list essay, oral, and comprehension as the three core stations.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love Chinese?" },
          subtext: {
            en: "The panel wants a specific book, author, or scene — not \"because my parents speak Chinese at home.\"",
          },
          approach: {
            en: "Open with one concrete reading memory, then connect to your character.",
          },
          template: {
            en: "Last year I read 龙应台 《目送》, and the line about watching her son walk away made me cry — that was the first time I realised Chinese could capture something English I had read couldn't.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the Chinese department, or is the application generic?",
          },
          approach: {
            en: "Cite one specific feature of the school's Chinese programme — Bicultural Studies, a known competition record, a teacher mentioned at open house.",
          },
          template: {
            en: "Dunman's Bicultural Studies Programme — I read your alumni article on the Beijing immersion trip and I want to be in the cohort that goes through that.",
          },
        },
        {
          question: { en: "What's the last Chinese book you read?" },
          subtext: {
            en: "Can the candidate go beyond textbook titles and speak honestly about a personal response?",
          },
          approach: {
            en: "Pick a real book, name one specific scene or line, and say what you actually thought — including what you disliked.",
          },
          template: {
            en: "余华 《活着》. I didn't like it the first time because everyone keeps dying. On the re-read I understood 福贵 is not the victim — the book is asking what 活 means when everything is taken away.",
          },
        },
        {
          question: { en: "Tell us about a time Chinese was difficult for you." },
          subtext: {
            en: "Schools want growth narratives, not natural-talent claims.",
          },
          approach: {
            en: "Pick a real struggle, describe what you did, share the result.",
          },
          template: {
            en: "My P5 composition was returned with red ink on every paragraph. I started keeping a notebook of phrases I copied from books I liked, and by P6 SA2 my essay scored 38 / 40.",
          },
        },
        {
          question: { en: "How is Chinese different from English for you?" },
          subtext: {
            en: "Tests whether the candidate has thought about language at a level beyond translation.",
          },
          approach: {
            en: "Name one specific feature — tone, character images, classical roots — and give one example.",
          },
          template: {
            en: "Chinese characters carry pictures inside them. 休 is a person resting against a tree. English never does that — once I noticed it, I started reading Chinese slower because every character is a small image.",
          },
        },
        {
          question: { en: "How do you keep up Chinese alongside English-medium subjects?" },
          subtext: {
            en: "Schools fear DSA candidates who flame out in Higher Chinese by Sec 2.",
          },
          approach: {
            en: "Describe a real routine, not platitudes about discipline.",
          },
          template: {
            en: "I read a Chinese book for 20 minutes before bed every night — usually a chapter. On weekends my mother and I watch one episode of a Chinese documentary together. It's not extra work, it's how I unwind.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason — Bicultural Studies fit, teacher rapport, programme depth.",
          },
          template: {
            en: "Honestly, your school. Hwa Chong's Bicultural Studies takes Chinese further than any other programme I researched, and that's the future I want.",
          },
        },
      ],
      schools: [
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Chinese Language, IP" },
          context: {
            en: "SAP and Bicultural Studies Programme host school. Higher Chinese is a core subject for all students. DSA-Sec Chinese is among the most competitive talent areas at HCI.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Chinese Language, IP" },
          context: {
            en: "SAP and Bicultural Studies Programme. Strong literature and cultural-exchange tradition. Higher Chinese is taken by all students.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Chinese Language, IP / DSA-Sec" },
          context: {
            en: "SAP and Bicultural Studies Programme. 2026 DSA FAQ lists Chinese Language as a talent area. Trial published as essay, oral, and comprehension components.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Chinese Language, DSA-Sec" },
          context: {
            en: "SAP and Bicultural Studies Programme. Higher Chinese or Chinese Language as Mother Tongue is a requirement for all DSA applicants.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/",
          talentArea: { en: "Chinese Language, DSA-Sec" },
          context: {
            en: "SAP school — applicants must offer Chinese Language or Higher Chinese at primary. Strong Chinese literature and debate tradition.",
          },
        },
        {
          name: "River Valley High School",
          url: "https://www.rivervalleyhigh.moe.edu.sg/admissions/dsa-sec/",
          talentArea: { en: "Chinese Language, IP" },
          context: {
            en: "SAP and Bicultural Studies Programme. Higher Chinese is core. Recognised for sustained Speech and Drama Festival results in Mandarin.",
          },
        },
        {
          name: "Chung Cheng High School (Main)",
          url: "https://www.chunghighmain.moe.edu.sg/",
          talentArea: { en: "Chinese Language, DSA-Sec" },
          context: {
            en: "SAP school with strong calligraphy and literature tradition. Trial historically includes a recitation or calligraphy component alongside essay and oral.",
          },
        },
        {
          name: "Maris Stella High School",
          url: "https://www.marisstellahigh.moe.edu.sg/",
          talentArea: { en: "Chinese Language (Boys), DSA-Sec" },
          context: {
            en: "SAP school, all-boys. Recognised for sustained Chinese literature and speech-and-drama record. Higher Chinese is a core offering.",
          },
        },
        {
          name: "Singapore Chinese Girls' School",
          url: "https://www.scgs.moe.edu.sg/admissions/dsa/",
          talentArea: { en: "Chinese Language (Girls), DSA-Sec" },
          context: {
            en: "SAP school (since 2019). Strong Chinese language and culture programme. Higher Chinese is widely taken across the cohort.",
          },
        },
        {
          name: "Anglican High School",
          url: "https://www.anglicanhigh.moe.edu.sg/",
          talentArea: { en: "Chinese Language, DSA-Sec" },
          context: {
            en: "SAP school. Listed as a Chinese Language DSA-Sec participating school across recent admission cycles.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Have the child read one contemporary Chinese book in full — not a textbook excerpt. Recommended starting authors at P6 level: 龙应台, 杨绛, 林海音 《城南旧事》, 老舍 《骆驼祥子》. The goal is one whole-book reaction the candidate genuinely owns. Panels detect ghost-written summaries within two follow-up questions.",
            },
            {
              en: "Confirm CCA records for any Chinese-related activities at primary school are accurate. MOE pulls CCA participation, school awards, competition results (全国学生华文创作比赛, 学生华文戏剧节, 全国华文常识比赛, MOE Story Telling Competition) into the DSA portal. If your child placed in any of these, check that the CCA teacher has logged it.",
            },
            {
              en: "Run a mock oral interview with a fluent adult — not a tutor reading from a script. The interviewer's job is to ask follow-ups, not to feed lines. Record on phone. Watch back together. Flag any answer that ran over 60 seconds or relied on phrases the child clearly memorised but doesn't understand.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Stop drilling new vocabulary. Vocabulary gains in the final week rarely transfer to live trial use, and the cognitive load shows as hesitation. Switch to re-reading the one book the candidate will discuss in oral, and one current-affairs article in Chinese per day.",
            },
            {
              en: "Confirm trial logistics in writing. Date, time, venue, attire, what to bring (some schools ask for a writing sample portfolio — Catholic High and Chung Cheng have done so in past cycles). Email the school office to confirm if anything in the trial notice is ambiguous.",
            },
            {
              en: "One unfamiliar audience. Have the child explain their favourite Chinese book in Mandarin to a relative or family friend they don't usually speak Chinese with. The discomfort surfaces the gaps tuition has been hiding.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Light breakfast 90 minutes before — the essay component runs long and a heavy meal makes the writing hand sluggish. Bring water in a clear bottle.",
            },
            {
              en: "Drop off, don't hover. Greet the teacher-in-charge by name in Mandarin if you can — the staff notice. Over-involved parents are visible and the candidate absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What did you write about?\" — give the child space to share without interrogation. Detailed reconstruction can wait 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — application in, trial coming up, no clear preparation plan — there are still real moves. Don't try to teach new characters or build vocabulary. Instead, pick one contemporary Chinese book the child has actually read, and rehearse a 90-second spoken response to three questions: what is the book about, what did you think, what stayed with you. The single highest-leverage prep is being able to talk about one book deeply, not five books superficially. For the essay component, practise one prompt opening per day — train the muscle of starting with a specific scene rather than a thesis. Some families bring in a private Chinese tutor at this stage to compress the curve. A good tutor can sharpen the oral response and tighten essay openings, but no tutor produces, in three sessions, the cultural depth that years of reading at home build. Treat it as triage, not a fix.",
      },
    },
  },
  dance: {
    slug: "dance",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Dance", zh: "舞蹈", ms: "Tarian", ta: "நடனம்" },
    hook: {
      en: "Dance DSA — auditions reward presence, not just technique.",
      zh: "舞蹈 DSA——audition 看的是台缘，不只是技术",
      ms: "DSA Tarian — audisi menilai persembahan, bukan teknik semata-mata.",
      ta: "நடன DSA — ஆடிஷன் தொழில்நுட்பத்தை மட்டுமல்ல, மேடை இருப்பையும் மதிப்பிடுகிறது.",
    },
    intro: {
      en: "Dance DSA auditions test more than flexibility and turns. Panels read for musicality, stage presence, and how quickly a dancer can pick up unfamiliar choreography. Here's what trials at SOTA, SAP, and IP dance programmes really weigh.",
      zh: "舞蹈 DSA audition 看的不只是软度和旋转。考官读的是音乐性、台缘、以及多快能接住没见过的编舞。SOTA、SAP、IP 舞蹈项目 trial 真正的权重在哪。",
      ms: "Audisi DSA Tarian menilai lebih daripada kelenturan dan pusingan. Panel menilai musikaliti, kehadiran pentas, dan kepantasan mempelajari koreografi baharu.",
      ta: "நடன DSA ஆடிஷன் நெகிழ்வுத்தன்மை மற்றும் சுழற்சிகளை மட்டுமல்ல, இசைத்திறன், மேடை இருப்பு, புதிய நடன அமைப்பை எவ்வளவு விரைவாக பின்பற்ற முடியும் என்பதை மதிப்பிடுகிறது.",
    },
    summary: {
      en: "Audition structure, genre-specific notes (Chinese / Indian / Malay / Ballet / Modern), interview questions, sample schools.",
      zh: "Audition 流程、各舞种重点（华族/印度/马来/芭蕾/现代）、面试题、招生学校。",
      ms: "Struktur audisi, nota khusus genre, soalan temu duga, sekolah peserta.",
      ta: "ஆடிஷன் கட்டமைப்பு, வகை சார்ந்த குறிப்புகள், நேர்காணல் கேள்விகள், பள்ளிகள்.",
    },
    sampleSchools: [
      "School of the Arts (SOTA)",
      "Nanyang Girls' High School",
      "Singapore Chinese Girls' School",
      "Raffles Girls' School (Secondary)",
      "Methodist Girls' School (Secondary)",
      "River Valley High School",
    ],
    metaDescription: {
      en: "Dance DSA-Sec audition guide for Singapore P6 — what panels assess across Chinese, Indian, Malay, Ballet, and Modern Dance, sample interview questions, participating schools.",
      zh: "新加坡 P6 舞蹈 DSA-Sec audition 指南——华族/印度/马来/芭蕾/现代舞各舞种考察重点、面试题、招生学校。",
      ms: "Panduan audisi DSA-Sec Tarian Singapura — apa panel nilai, soalan temu duga, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 நடன DSA-Sec வழிகாட்டி — பல்வேறு வகைகளில் குழு என்ன மதிப்பிடுகிறது, கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      preparedPiece: {
        intro: {
          en: "The solo is the only fully-controlled segment of the audition. Every other component — pick-up sequence, improvisation, paired work — is the panel's call. Confirm the duration cap for each target school before locking in your child's choreography.",
        },
        entries: [
          {
            variant: { en: "Chinese Dance · most schools" },
            requirement: { en: "1–2 minute self-choreographed solo of your choice" },
            source: { en: "Tang Dance Academy DSA guide (Chinese Dance working range across SAP schools)" },
          },
          {
            variant: { en: "Contemporary Dance · Victoria School 2026" },
            requirement: { en: "Solo of your choice — not more than 1 minute (Round 1 of 3)" },
            source: { en: "Victoria School DSA 2026 application brief" },
          },
          {
            variant: { en: "All genres · SOTA Dance" },
            requirement: { en: "Two contrasting prepared pieces across multiple rounds (classical technique + improvisation tested separately)" },
            source: { en: "SOTA Talent Academy DSA-Sec audition notes" },
          },
          {
            variant: { en: "Indian / Malay / Ballet · other secondary schools" },
            requirement: { en: "Typically 1–2 minute solo; some schools also accept a short excerpt from a graded exam (RAD / ISTD)" },
            source: { en: "Pattern across MGS, RGS, SCGS published briefs and parent reports" },
          },
        ],
        coachCtaBlurb: {
          en: "A private dance coach can sharpen the solo's opening 10 seconds, calibrate timing to each school's cap, and rehearse the pick-up muscle. Browse our coach directory for dance specialists by region and style.",
        },
      },
      trialDimensionsIntro: {
        en: "Most school dance auditions in Singapore run 90–120 minutes and follow a similar structure: warm-up and floor work led by the school's dance teacher, a short follow-the-leader sequence to test pick-up speed, an applicant's prepared solo (typically 1–2 minutes — Victoria School caps it at one minute, Tang Dance Academy reports 1–2 minutes as the working range for Chinese Dance, SOTA expects two contrasting pieces across multiple rounds), and a short interview. The solo is your only fully-controlled segment — every other component is the school's call. SOTA and the SSP (Singapore Schools' Special Programme — for dance) audition is more rigorous: multi-round, with classical technique and improvisation tested separately. No school publishes a full rubric, but observations from past Singapore Youth Festival (SYF) Arts Presentation judges and parent reports converge on the six dimensions below.",
      },
      trialDimensions: [
        {
          label: { en: "Musicality and timing" },
          body: {
            en: "Whether the dancer hits accents in the music, or moves on their own internal count. Panels deliberately use unfamiliar music in the pick-up sequence to test real musicality versus rehearsed counting. A dancer who lands a turn on the downbeat scores higher than one who lands it cleanly off-beat.",
          },
        },
        {
          label: { en: "Pick-up speed" },
          body: {
            en: "The follow-the-leader sequence is the single highest-signal segment. Panels show 8 to 16 counts of choreography twice, then expect the dancer to perform it. Speed of acquisition predicts how quickly the child will progress in school CCA. A dancer who picks up cleanly on the second viewing scores better than one with stronger technique who needs four passes.",
          },
        },
        {
          label: { en: "Stage presence and projection" },
          body: {
            en: "Eyes up, face engaged, energy reaching the back of the studio. At P6 level, panels see many technically competent dancers who perform like they're rehearsing alone. The one who commits visibly — chin up, gaze out, smile or seriousness owned — stands out before technique is even scored.",
          },
        },
        {
          label: { en: "Technique appropriate to genre" },
          body: {
            en: "For Chinese Dance: turnout, fan or sleeve handling, body shifts. For Indian Dance: hasta mudras, postural stamina, rhythm in jathis. For Malay Dance: lemak gemalai (graceful flow), gestural precision. For Ballet: turnout, alignment, port de bras. For Modern: floor work, release, weight transfer. Panels score technique against age-appropriate expectations, not professional standard.",
          },
        },
        {
          label: { en: "Improvisation and choice-making" },
          body: {
            en: "SOTA and some IP schools include a short improvisation segment — \"dance for 30 seconds to this music we just played.\" Panels look at whether the dancer makes interesting movement choices or defaults to the steps they know. The child who lies on the floor and stays still for 5 seconds before moving often scores higher than one who fills every count with motion.",
          },
        },
        {
          label: { en: "Coachability and studio etiquette" },
          body: {
            en: "How the dancer behaves in the studio — whether they thank the panel, accept corrections without sulking, support fellow auditionees. Panels who will work with this child for four years weight this heavily. Studio etiquette built over years of CCA or external academy training shows immediately.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Chinese Dance" },
          body: {
            en: "The strongest CCA tradition in Singapore secondary schools — Nanyang Girls', Dunman High, Nan Hua, Chung Cheng, River Valley, and Catholic High all run nationally competitive Chinese Dance programmes. Audition repertoire that signals depth: a folk dance excerpt with a clear regional style (Mongolian, Dai, Uyghur, Tibetan) outperforms generic \"classical\" choreography. Fan or sleeve handling that holds its line under turns is the key technical separator at P6.",
          },
        },
        {
          position: { en: "Indian Dance (Bharatanatyam / others)" },
          body: {
            en: "Strongest school programmes include the Indian Dance offerings at schools with active Indian cultural CCAs. Audition signals: clean hasta mudras held without trembling, a jathi (rhythmic syllable sequence) the dancer can both speak and dance, and aramandi (half-sitting stance) endurance. A child who has performed at temple or community festivals brings audience experience panels look for.",
          },
        },
        {
          position: { en: "Malay Dance" },
          body: {
            en: "Programmes are strongest in schools with active Malay cultural traditions. Audition signals: lemak gemalai (graceful, flowing quality) that doesn't collapse into softness, precise hand gestures held to the music's phrasing, and an awareness of the difference between Joget, Inang, and Zapin rhythmic feel. A short prepared excerpt from any standard piece is acceptable; specific song mastery is not required at P6.",
          },
        },
        {
          position: { en: "Ballet / Modern / Contemporary" },
          body: {
            en: "SOTA Dance has the strongest classical and contemporary tracks in Singapore secondary. Audition signals for ballet: turnout from the hip not the foot, port de bras that doesn't disconnect at the shoulder, and the ability to hold a tendu without trembling. For contemporary or modern: floor work confidence, weight transfer through the spine, willingness to take up space. Pre-existing RAD or other graded exam levels (Grade 4+) often appear in audition rubrics as a supporting signal.",
          },
        },
      ],
      positionFocusNote: {
        en: "Most secondary schools have one or two genres they're strongest in. Research the school's CCA history — SYF Arts Presentation results, recent showcase repertoire, and the artistic director's training background tell you whether the school will develop your child's genre or ask them to switch.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love dance?" },
          subtext: {
            en: "Panels want a specific moment — first performance, breakthrough class, a piece you couldn't stop watching — not \"because it makes me happy.\"",
          },
          approach: {
            en: "Open with one concrete memory, then connect to your character.",
          },
          template: {
            en: "The first time I did a Mongolian shoulder shake on stage and saw my mother in the front row tearing up — that's when I knew dance wasn't just an after-school activity for me.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the dance programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific item — SYF Distinction, a piece you watched on YouTube, the artistic director's training.",
          },
          template: {
            en: "Your Chinese Dance group's SYF Arts Presentation Distinction in 2025 — I watched the showcase clip three times. The Tibetan piece's transitions are exactly the kind of technical work I want to grow into.",
          },
        },
        {
          question: { en: "What's the hardest dance piece you've worked on?" },
          subtext: {
            en: "Can the dancer articulate technical or emotional difficulty beyond \"the steps were hard\"?",
          },
          approach: {
            en: "Name the piece, the specific moment, what you had to change in your body or mind.",
          },
          template: {
            en: "Last year's Dai folk dance — the slow leg extensions on one foot. I kept losing balance. My teacher made me hold the tendu for 60 seconds every morning. By performance day I held the line.",
          },
        },
        {
          question: { en: "Tell us about an injury or setback in dance." },
          subtext: {
            en: "Schools want growth narratives, not natural-talent claims.",
          },
          approach: {
            en: "Describe a real setback, what you did, what changed.",
          },
          template: {
            en: "I sprained my ankle six weeks before SYF in P5. I sat out floor work but kept doing upper-body and core daily. I performed but my teacher said it taught me what every dancer needs to learn — how to stay in the room when you can't be on the floor.",
          },
        },
        {
          question: { en: "Who is a dancer or choreographer you admire?" },
          subtext: {
            en: "Tests whether the candidate watches dance outside their own class.",
          },
          approach: {
            en: "Name someone specific — and be ready to discuss one specific piece.",
          },
          template: {
            en: "Yang Liping. Her peacock dance solo — the way she holds the arms is the technical aspiration I think about every time I run through my own arm work.",
          },
        },
        {
          question: { en: "How do you balance dance training with school?" },
          subtext: {
            en: "Schools fear DSA dancers who fall behind academically by Sec 2.",
          },
          approach: {
            en: "Describe a real routine, not platitudes.",
          },
          template: {
            en: "I do English homework on the way to studio, finish Math before dinner, and revise on weekends. I don't dance on Sundays — that's my study and rest day, and my teacher agreed it was the right call.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. SOTA's programme structure dedicates more studio hours per week and gives me the genre depth I want — and that matters more to me than a shorter commute.",
          },
        },
      ],
      schools: [
        {
          name: "School of the Arts (SOTA)",
          url: "https://www.sota.edu.sg/admissions/sota-direct-school-admission-dsa-exercise/",
          talentArea: { en: "Dance (Ballet / Contemporary / Chinese / Indian / Malay), IB" },
          context: {
            en: "Specialised arts school. Multi-round audition with classical technique and improvisation tested separately. The most competitive dance DSA pathway in Singapore.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Chinese Dance (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies. SYF Arts Presentation Chinese Dance Distinction repeatedly across recent years. Strong feeder pipeline from Chinese-cultural primaries.",
          },
        },
        {
          name: "Singapore Chinese Girls' School",
          url: "https://www.scgs.moe.edu.sg/admissions/dsa/",
          talentArea: { en: "Chinese Dance (Girls), DSA-Sec" },
          context: {
            en: "SAP school. Recognised CCA tradition in Chinese Dance with sustained SYF performance.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/year-1-direct-school-admission/",
          talentArea: { en: "Dance (Modern / Indian / Chinese / Malay), IP" },
          context: {
            en: "IP school with strong multi-genre dance programme. Audition assesses across modern and cultural dance forms depending on candidate's training background.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.sch.edu.sg/admission/dsa/",
          talentArea: { en: "Dance (Modern / Chinese / Indian), DSA-Sec" },
          context: {
            en: "Strong Modern Dance CCA tradition with multiple SYF Distinctions. Indian and Chinese Dance offerings also active.",
          },
        },
        {
          name: "River Valley High School",
          url: "https://www.rivervalleyhigh.moe.edu.sg/admissions/dsa-sec/",
          talentArea: { en: "Chinese Dance, IP / DSA-Sec" },
          context: {
            en: "SAP and Bicultural Studies. Chinese Dance offered as DSA-Sec talent area. Studio hours and showcase repertoire scale up at Sec 2 onward.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Chinese Dance, IP / DSA-Sec" },
          context: {
            en: "SAP and Bicultural Studies. 2026 DSA FAQ lists Chinese Dance among talent areas. SYF Chinese Dance tradition.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Chinese Dance (Girls), DSA-Sec" },
          context: {
            en: "SAP school. Chinese Dance is among Nan Hua's published talent areas. Higher Chinese / Chinese Language as Mother Tongue requirement applies.",
          },
        },
        {
          name: "Crescent Girls' School",
          url: "https://www.crescent.moe.edu.sg/admissions/dsa-sec/",
          talentArea: { en: "Dance (Modern), DSA-Sec" },
          context: {
            en: "Recognised Modern Dance CCA with sustained SYF showings. Audition pattern includes technique, performance, and short interview.",
          },
        },
        {
          name: "CHIJ Saint Nicholas Girls' School",
          url: "https://www.chijstnicholas.moe.edu.sg/admissions/",
          talentArea: { en: "Dance (Chinese / Modern), DSA-Sec" },
          context: {
            en: "Strong dance tradition with both Chinese and Modern Dance CCAs active at SYF level.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the audition is still weeks out" },
          items: [
            {
              en: "Choose the audition solo carefully. A 1–2 minute excerpt your child has performed publicly is safer than a piece they're still rehearsing — and confirm the cap (Victoria School: one minute; most others: up to two). Panels see many auditionees attempt material above their level. Clean execution of age-appropriate choreography always outscores stumbling through harder material.",
            },
            {
              en: "Confirm CCA records at primary school. MOE pulls CCA participation, school awards, SYF Arts Presentation results, and external achievements (graded examinations such as RAD or ISTD, NAFA / SOTA junior programme alumni status, recognised festival or showcase performances) into the DSA portal. Incomplete records hurt the application — ask the CCA teacher to verify what's been logged.",
            },
            {
              en: "Run two mock auditions in unfamiliar studios. Most dancers underperform first audition because the studio, the floor, and the mirrors are unfamiliar. Book trial sessions at two different dance schools to surface this in advance, not at the real audition.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Cut intensity. Switch to barre work and floor only — no new choreography, no extra rehearsals. Final-week added load rarely pays off and frequently produces a tweak. Two ankles you don't fully trust on audition day is the most common reason of a strong dancer underperforming.",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire (some schools specify hair colour and grip style, leotard colour, no jewellery), audition number pickup. Email the school office to confirm anything ambiguous — written response is your record.",
            },
            {
              en: "One unfamiliar mirror, one unfamiliar floor. Practise the solo at least once in a space the child has never danced in. Spatial recalibration matters more than the dancer realises until they're in the room.",
            },
          ],
        },
        {
          label: { en: "Day of audition" },
          items: [
            {
              en: "Light breakfast 90 minutes before — no heavy starch, no fizzy drinks. Bring water, a long-sleeve layer for warm-up, hair pins, plasters. Audition halls run cold; muscle warmth is the difference between a controlled extension and a strained one.",
            },
            {
              en: "Drop off, don't hover. Greet the teacher-in-charge by name, leave the waiting area. Parents on the audition floor — even visible through the door — affect performance. Use the time to grab a quiet coffee.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What was your favourite part?\" — give the child space. Notes for next time wait 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — application in, audition coming up, no clear preparation plan — there are still real moves. Don't try to learn a new piece. Instead, take the solo your child can dance cleanly with eyes closed and rehearse it three times in three different rooms. The single highest-leverage prep is presence — eyes up, face engaged, owning the space — and presence is built by repeating familiar choreography in unfamiliar environments. For the pick-up sequence, practise watching an 8-count combination once and performing it on the second viewing. That muscle is trainable in a week even if technique isn't. Some families bring in a private dance coach at this stage. A good coach can sharpen presence and tighten the solo's opening eight bars — but no coach produces, in three sessions, the floor stamina years of class build. Treat it as triage, not a fix.",
      },
    },
  },
  drama: {
    slug: "drama",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Drama", zh: "戏剧", ms: "Drama", ta: "நாடகம்" },
    hook: {
      en: "Drama DSA — auditions reward truthful, not performative, choices.",
      zh: "戏剧 DSA——audition 奖励真诚，不奖励表演",
      ms: "DSA Drama — audisi memilih pilihan jujur, bukan dramatik.",
      ta: "நாடக DSA — ஆடிஷன் உண்மையான தேர்வுகளை மதிக்கிறது, செயற்கையானவற்றை அல்ல.",
    },
    intro: {
      en: "Drama DSA panels at SOTA and major IP / SAP schools look past loud delivery to whether the actor listens, reacts, and makes specific choices on the spot. Here's what auditions really measure — and what late prep can still fix.",
      zh: "SOTA 和主要 IP / SAP 学校的戏剧 DSA 考官看的不是大声朗读，而是听、反应、当场做选择的能力。Audition 真正在测什么——以及临阵磨枪还来得及补哪些。",
      ms: "Panel DSA Drama di SOTA dan sekolah IP / SAP utama menilai pendengaran, tindak balas, dan pilihan spesifik — bukan persembahan kuat.",
      ta: "SOTA மற்றும் முக்கிய IP / SAP பள்ளிகளின் நாடக DSA குழுக்கள் சத்தமான விளக்கக்காட்சியை மீறி, நடிகர் கேட்கிறாரா, எதிர்வினையாற்றுகிறாரா, குறிப்பிட்ட தேர்வுகளை செய்கிறாரா என்பதைப் பார்க்கிறார்கள்.",
    },
    summary: {
      en: "Audition structure, monologue selection, ensemble work, improvisation, sample interview questions, participating schools.",
      zh: "Audition 流程、独白选材、群戏配合、即兴、面试题、招生学校。",
      ms: "Struktur audisi, pilihan monolog, kerja ensemble, improvisasi, soalan temu duga, sekolah peserta.",
      ta: "ஆடிஷன் கட்டமைப்பு, மோனோலாக் தேர்வு, குழுப் பணி, இம்ப்ரோவ், கேள்விகள், பள்ளிகள்.",
    },
    sampleSchools: [
      "School of the Arts (SOTA)",
      "Anglo-Chinese School (Independent)",
      "Victoria School",
      "Methodist Girls' School (Secondary)",
      "Raffles Girls' School (Secondary)",
      "Nanyang Girls' High School",
    ],
    metaDescription: {
      en: "Drama DSA-Sec audition guide for Singapore P6 — what panels assess in monologue, ensemble, and improvisation work, interview questions, participating schools.",
      zh: "新加坡 P6 戏剧 DSA-Sec audition 指南——独白、群戏、即兴各环节考察重点、面试题、招生学校。",
      ms: "Panduan audisi DSA-Sec Drama Singapura — penilaian monolog, ensemble, improvisasi, soalan temu duga, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 நாடக DSA-Sec வழிகாட்டி — மோனோலாக், ensemble, இம்ப்ரோவ் மதிப்பீடு, கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      preparedPiece: {
        intro: {
          en: "Drama is the talent area where audition format varies the most by school. Two patterns dominate: the self-prepared monologue route (most schools) and the school-provided scene route (Victoria School's published 2026 brief). Assuming \"prepared monologue\" applies everywhere is the most common P6 misread.",
        },
        entries: [
          {
            variant: { en: "SOTA Theatre (IB pathway)" },
            requirement: { en: "Two contrasting prepared monologues · ensemble work · improvisation · sight-reading — across multiple audition rounds" },
            source: { en: "SOTA Talent Academy DSA-Sec audition notes" },
          },
          {
            variant: { en: "ACS(I), MGS, RGS, SCGS · most IP / SAP schools" },
            requirement: { en: "One or two contrasting monologues (60–90 seconds each, age-appropriate) · plus short ensemble or paired improvisation · plus interview" },
            source: { en: "Pattern across published briefs + SYF Arts Presentation Drama observations" },
          },
          {
            variant: { en: "Victoria School (Drama Elective Programme · 2026)" },
            requirement: { en: "500-word personal statement submitted in advance · NO self-chosen monologue · school provides a 6–7 minute scene to perform live · plus questions + interview" },
            source: { en: "Victoria Junior College / Victoria School DSA 2026 brief — published" },
          },
          {
            variant: { en: "Nanyang Girls' High + SAP schools with Chinese Drama" },
            requirement: { en: "Standard monologue format may be done in Mandarin instead of English · check each school's brief for language option" },
            source: { en: "SAP school Chinese-language drama tradition" },
          },
        ],
        coachCtaBlurb: {
          en: "A drama coach can help select age-appropriate monologues, train two contrasting tones, and rehearse \"yes-and\" improv habits — or coach Victoria-style cold-read on a school-provided scene. Browse our coach directory for drama specialists.",
        },
      },
      trialDimensionsIntro: {
        en: "Drama auditions in Singapore secondary schools typically run 60–90 minutes for the audition itself, plus a short interview. Format varies more by school than any other talent area. Two patterns: (1) the **self-prepared route** (SOTA, ACS(I), MGS, RGS, most schools) — applicant brings one or two contrasting monologues, 60–90 seconds each, plus short ensemble or paired improvisation and a sight-read on the day; (2) the **school-provided route** (Victoria School publishes this for 2026 — 500-word personal statement submitted in advance, then a 6–7 minute scene the school provides for the shortlisted applicant to perform live, plus interview). Check each target school's brief carefully — assuming \"prepared monologue\" applies everywhere is the most common P6 misread. SYF Arts Presentation Drama judges and parent reports across cycles converge on the six dimensions below.",
      },
      trialDimensions: [
        {
          label: { en: "Listening and reaction" },
          body: {
            en: "The single highest-signal dimension at P6 — and the most under-trained. Panels in ensemble or paired improv watch whether the candidate listens to their scene partner or waits to deliver their next line. A candidate who pauses, breathes, and responds to what just happened scores higher than one who powers through a memorised intention. Truth in the listen beats power in the line.",
          },
        },
        {
          label: { en: "Specific physical and vocal choices" },
          body: {
            en: "Are the actor's body and voice neutral, or do they make a choice — a posture, an inflection — that says something about the character? Panels see many auditionees who deliver lines without committing to a body. A candidate who plays the same monologue with their weight on one hip, hands behind their back, voice pitched slightly higher, instantly signals craft awareness.",
          },
        },
        {
          label: { en: "Material appropriate to age" },
          body: {
            en: "A common P6 mistake: choosing adult monologues (Shakespeare's soliloquies, Tennessee Williams, Sarah Kane). Panels see this as a coaching tell — the child has been pushed into material they cannot inhabit. Age-appropriate material played with truth scores higher than ambitious material played generically. Singapore writers like Ovidia Yu, Haresh Sharma, or Alfian Sa'at often have monologues written for young performers.",
          },
        },
        {
          label: { en: "Improvisation choice-making" },
          body: {
            en: "When given a prompt — \"you've just found a letter you weren't supposed to read\" — does the actor commit to a specific situation and stay in it, or do they hedge with generic emotion? The improv segment exposes whether the candidate makes choices or waits to be told what to do. The most common reason a strong-on-paper auditionee underperforms is freezing here.",
          },
        },
        {
          label: { en: "Ensemble awareness" },
          body: {
            en: "In paired work, panels watch whether the candidate makes their partner look good. Drama selection is for a four-year ensemble; a candidate who steamrolls a partner is a coachability red flag. The actor who passes focus generously and supports their partner's choices, while still being present themselves, scores meaningfully higher.",
          },
        },
        {
          label: { en: "Coachability and self-direction" },
          body: {
            en: "After the first monologue pass, panels often give a redirect — \"now play it as if the person you're talking to just laughed at you.\" Does the actor incorporate the note immediately, or do they default to their rehearsed delivery? The note-taking moment is where panels read coachability most clearly. Schools who will work with this child for four years weight this heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Monologue work" },
          body: {
            en: "Most schools ask for one or two contrasting monologues. \"Contrasting\" means different tone — one comic, one serious; one classical, one contemporary; one high-status, one low-status. Selection is half the battle: a strong piece played at 80% beats a generic piece played at 100%. Avoid the most-auditioned pieces (the Audition Speeches for Young Actors anthology over-circulates). Singapore playwrights like Haresh Sharma, Alfian Sa'at, and Ovidia Yu have published collections with strong young-performer monologues.",
          },
        },
        {
          position: { en: "Improvisation / on-the-spot scenes" },
          body: {
            en: "The single most under-prepared component. Panels give a prompt (situation + relationship), expect the candidate to make a choice in 5 seconds, and commit. The skill is choice-making, not invention. Practise saying \"yes, and\" rather than blocking — agree with what your partner establishes and add to it. Most P6 candidates default to comedy when nervous; resisting that and finding the honest moment scores higher.",
          },
        },
        {
          position: { en: "Sight-reading / cold-read" },
          body: {
            en: "Some schools — particularly SOTA and ACS(I) — hand the candidate a short text (a poem, a scene fragment) and give 5 minutes to prepare. Panels look at whether the actor finds the meaning of the text before performing it, and whether they commit to one choice rather than reading neutrally. Practising cold-reading three times a week for a month is the highest-leverage prep here.",
          },
        },
        {
          position: { en: "Ensemble / paired scene" },
          body: {
            en: "When paired with another candidate, the audition becomes about listening, not performing. Panels rate how the candidate raises their partner's work. Avoid stealing focus with bigger gestures or louder lines — the panel sees that as a coachability warning. Commit to the scene's relationship and let your partner finish their thought before you respond.",
          },
        },
      ],
      positionFocusNote: {
        en: "Schools vary which components they emphasise — and some don't use monologues at all. SOTA's audition is the most structured and includes all four (two prepared monologues, ensemble, improv, sight-read across multiple rounds). ACS(I), MGS, RGS typically use one or two prepared monologues plus a short ensemble or interview-format scene. Victoria School's 2026 brief takes a different route entirely: a 500-word personal statement submitted in advance, followed by a 6–7 minute scene the school provides live. Nanyang Girls' and other SAP schools with Chinese-language drama programmes may include a Mandarin-language piece option. Read every target school's 2026 audition brief before committing rehearsal time to a self-chosen monologue.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love drama?" },
          subtext: {
            en: "Panels want a specific moment — first performance, a play you watched, a moment on stage — not \"because it lets me be someone else.\"",
          },
          approach: {
            en: "Open with one concrete memory, then connect to your character.",
          },
          template: {
            en: "The first time I made an audience laugh on a line I didn't think was funny — I realised then that what's on the page is only half of it. The other half is what happens between you and the room.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the drama programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific item — a recent production, a director's name, the school's drama showcase you attended.",
          },
          template: {
            en: "I watched your school's 2025 SYF Distinction piece on YouTube — the staging was unusually still for a school production, and that's the kind of theatre I want to learn from.",
          },
        },
        {
          question: { en: "What's a play or film that changed how you think about acting?" },
          subtext: {
            en: "Tests whether the candidate watches theatre seriously, not just performs.",
          },
          approach: {
            en: "Name something specific — and be ready to discuss one specific moment.",
          },
          template: {
            en: "Watching Wild Rice's production of Emily of Emerald Hill — the way the actress played all the family members herself, just by changing posture. I realised acting was about specificity, not impression.",
          },
        },
        {
          question: { en: "Tell us about a time something went wrong on stage." },
          subtext: {
            en: "Schools want recovery stories, not perfection claims.",
          },
          approach: {
            en: "Describe a real moment, what you did, what you learned.",
          },
          template: {
            en: "My scene partner forgot a cue in our P5 showcase. I improvised a line in character to give her a way back in. She found it. After that, I stopped fearing the gaps — they're where the listening happens.",
          },
        },
        {
          question: { en: "What's the difference between performing and acting?" },
          subtext: {
            en: "Tests whether the candidate has thought about craft at a level beyond \"being on stage.\"",
          },
          approach: {
            en: "Give a specific distinction with a concrete example.",
          },
          template: {
            en: "Performing is showing the audience what you feel. Acting is being in the situation, and trusting the audience to see what's there. When I played Ali Baba last year, the night I stopped performing him and just let him be scared was the night the audience finally laughed at the right moments.",
          },
        },
        {
          question: { en: "How do you balance drama training with school?" },
          subtext: {
            en: "Schools fear DSA actors who flame out academically.",
          },
          approach: {
            en: "Describe a real routine, not platitudes.",
          },
          template: {
            en: "I do homework on the way to rehearsal and revise on weekends. Friday nights I read plays instead of phone — it's the same thing for me, but it counts as study because it builds my craft.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. SOTA's Theatre programme runs five days a week of studio time — that's more than any other school can offer, and that's what I want.",
          },
        },
      ],
      schools: [
        {
          name: "School of the Arts (SOTA)",
          url: "https://www.sota.edu.sg/admissions/sota-direct-school-admission-dsa-exercise/",
          talentArea: { en: "Theatre, IB" },
          context: {
            en: "Specialised arts school. The most rigorous Drama audition in Singapore — two contrasting monologues, ensemble work, improvisation, and sight-reading across multiple rounds. Six-year IB Theatre pathway.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Drama (Boys), IP" },
          context: {
            en: "IP school with strong Drama CCA tradition and sustained SYF Arts Presentation showings. Audition typically includes a prepared monologue plus a short improvisation.",
          },
        },
        {
          name: "Victoria School",
          url: "https://www.victoriaschool.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Drama (Boys), DSA-Sec" },
          context: {
            en: "Historic Drama programme. Drama listed as a published DSA-Sec talent area. Pipeline to Victoria Junior College Theatre Studies.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.sch.edu.sg/admission/dsa/",
          talentArea: { en: "Drama (Girls), DSA-Sec" },
          context: {
            en: "Strong Drama CCA with sustained SYF presentation record. Audition pattern: prepared monologue, improvisation, short interview.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/year-1-direct-school-admission/",
          talentArea: { en: "Drama / Theatre Studies, IP" },
          context: {
            en: "IP school with Drama and Theatre Studies pipeline through to Raffles Institution. Audition assesses across monologue, ensemble, and short cold-read.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Chinese Drama (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies. Chinese-language drama tradition with sustained SYF showings in Mandarin theatre. Audition may include Mandarin monologue option.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Chinese Drama, IP" },
          context: {
            en: "SAP and Bicultural Studies. Mandarin theatre programme with SYF participation. DSA-Sec talent areas include Chinese-language performing arts.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/",
          talentArea: { en: "Chinese Drama (Boys), DSA-Sec" },
          context: {
            en: "SAP school. Mandarin drama and speech tradition. Higher Chinese requirement applies.",
          },
        },
        {
          name: "St Joseph's Institution",
          url: "https://www.sji.edu.sg/admissions/",
          talentArea: { en: "Drama (Boys), DSA-Sec" },
          context: {
            en: "Drama listed in recent DSA cycles. CCA tradition includes regular school production and SYF participation.",
          },
        },
        {
          name: "Singapore Chinese Girls' School",
          url: "https://www.scgs.moe.edu.sg/admissions/dsa/",
          talentArea: { en: "Drama (Girls), DSA-Sec" },
          context: {
            en: "SAP school. English and Mandarin drama tracks. Sustained SYF Arts Presentation Drama showings.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the audition is still weeks out" },
          items: [
            {
              en: "Choose monologues carefully. Pick two contrasting pieces age-appropriate for a 12-year-old. Read the full play each monologue comes from — panels often ask. Avoid the most over-circulated pieces; ask a drama teacher or check Singapore playwright collections (Haresh Sharma, Alfian Sa'at, Ovidia Yu) for fresher options.",
            },
            {
              en: "Confirm CCA records at primary school. MOE pulls CCA participation, school awards, SYF Arts Presentation results, and external programme alumni status (Wild Rice Young & Wild, The Theatre Practice Mandarin programmes, Singapore Repertory Theatre youth) into the DSA portal. Ask the CCA teacher to verify all drama-related entries.",
            },
            {
              en: "Run two mock auditions for unfamiliar audiences. Most actors underperform first audition because the room and the panel are unfamiliar. Perform the monologues for a teacher, a relative, and a school friend's parent — three different audiences in three different rooms.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Stop adjusting the monologue. Final-week direction notes rarely stick and frequently introduce hesitation. Run the pieces through cleanly without trying to make them better. Vocal warmth and breath support matter more than further interpretation work.",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire, what to bring. Some auditions ask for a prepared headshot or printed copy of the monologue text — check the audition brief twice and confirm anything ambiguous by email.",
            },
            {
              en: "One unfamiliar listener. Have the child run their monologue once for someone they've never performed for. If a smile or a laugh comes back at an unexpected line, that's the line to trust on audition day — not the one rehearsed for effect.",
            },
          ],
        },
        {
          label: { en: "Day of audition" },
          items: [
            {
              en: "Light breakfast 90 minutes before. Bring water at room temperature — cold water tightens the voice. A lozenge or hot honey lemon 30 minutes pre-audition helps if the throat is dry.",
            },
            {
              en: "Drop off, don't hover. Greet the audition coordinator, leave. Parents waiting in the lobby in costume-coordinated outfits read as over-involved. Use the time to grab a coffee.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What surprised you?\" — let the child share. Reconstruction of every line waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — application in, audition coming up, no clear preparation plan — there are still real moves. Don't pick a new monologue. Instead, take the one piece your child can deliver with eyes closed and practise three different versions: one where they're trying to convince, one where they're confessing, one where they're remembering. The single highest-leverage prep is choice-making — being able to play the same text three ways under pressure — and that muscle is trainable in a week. For improvisation, run \"yes-and\" exercises at home twice a day. For the cold-read, hand the child an unfamiliar poem each evening and give 90 seconds to find one moment, then perform. Some families bring in a private acting coach at this stage. A good coach can sharpen specificity and tighten the opening 10 seconds — but no coach produces, in three sessions, the listening discipline that years of ensemble work build. Treat it as triage, not a fix.",
      },
    },
  },
  art: {
    slug: "art",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Visual Arts", zh: "美术", ms: "Seni Visual", ta: "காட்சிக் கலை" },
    hook: {
      en: "Visual Arts DSA — portfolios reward thinking, not finish.",
      zh: "美术 DSA——作品集看的是思考，不是完成度",
      ms: "DSA Seni Visual — portfolio menghargai pemikiran, bukan kemasan.",
      ta: "காட்சிக் கலை DSA — பணித்தொகுப்பு சிந்தனையை மதிக்கிறது, முடிப்பை அல்ல.",
    },
    intro: {
      en: "Visual Arts DSA at SOTA, ACS(I), and SAP/IP schools is more about how you see than what you finish. Panels read sketchbooks for curiosity, on-spot tasks for observation, and interviews for whether you can talk about your work. Here's what the portfolio review really weighs.",
      zh: "SOTA、ACS(I) 和 SAP/IP 学校的美术 DSA 看的是你如何观察，不是你完成了什么。考官读速写本看好奇心、现场题看观察力、面试看你能否谈论自己的作品。Portfolio review 真正的权重在哪。",
      ms: "DSA Seni Visual di SOTA, ACS(I), dan sekolah SAP/IP menilai cara melihat lebih daripada hasil akhir. Panel membaca buku lakaran untuk rasa ingin tahu, tugas spontan untuk pemerhatian.",
      ta: "SOTA, ACS(I) மற்றும் SAP/IP பள்ளிகளில் காட்சிக் கலை DSA என்பது நீங்கள் என்ன முடிக்கிறீர்கள் என்பதைவிட எப்படிப் பார்க்கிறீர்கள் என்பதைப் பற்றியது. குழுக்கள் ஸ்கெட்ச்புக்கை ஆர்வத்திற்காகவும், மதிப்பீட்டுப் பணியை அவதானிப்புக்காகவும் படிக்கிறார்கள்.",
    },
    summary: {
      en: "Portfolio expectations, on-spot drawing tasks, interview questions, sample schools across SOTA / SAP / IP.",
      zh: "作品集要求、现场写生题、面试题、SOTA / SAP / IP 招生学校。",
      ms: "Jangkaan portfolio, tugas lukisan spontan, soalan temu duga, sekolah peserta.",
      ta: "பணித்தொகுப்பு எதிர்பார்ப்பு, இட சோதனைப் பணி, கேள்விகள், பள்ளிகள்.",
    },
    sampleSchools: [
      "School of the Arts (SOTA)",
      "Anglo-Chinese School (Independent)",
      "Nanyang Girls' High School",
      "CHIJ Saint Nicholas Girls' School",
      "Methodist Girls' School (Secondary)",
      "Nan Hua High School",
    ],
    metaDescription: {
      en: "Visual Arts DSA-Sec audition guide for Singapore P6 — what panels look for in portfolios, on-spot drawing tasks, interview questions, participating schools.",
      zh: "新加坡 P6 美术 DSA-Sec audition 指南——作品集要求、现场写生、面试题、招生学校。",
      ms: "Panduan audisi DSA-Sec Seni Visual Singapura — penilaian portfolio, tugas lukisan, soalan temu duga, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 காட்சிக் கலை DSA-Sec வழிகாட்டி — பணித்தொகுப்பு, வரைதல் பணி, கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      preparedPiece: {
        intro: {
          en: "The portfolio is the only fully-controlled segment of the audition — the on-spot task and interview prompts are the school's call. Curate the strongest 10–12 pieces (more is not better), include the actual messy sketchbook (not a curated print-out), and confirm each school's submission format.",
        },
        entries: [
          {
            variant: { en: "SOTA Visual Arts (IB pathway)" },
            requirement: { en: "Portfolio of 8–15 works submitted in advance · plus on-spot practical task · plus written reflection · plus interview — across multiple rounds" },
            source: { en: "SOTA Talent Academy DSA-Sec audition notes" },
          },
          {
            variant: { en: "ACS(I), NYGH, CHIJ St Nicholas, MGS, Nan Hua" },
            requirement: { en: "Portfolio of 8–15 works (some schools require advance digital submission + works brought on day) · plus on-spot drawing or observation task (45–90 min) · plus short interview about the portfolio — single half-day format" },
            source: { en: "Pattern across IP / SAP school published guidelines and parent reports" },
          },
          {
            variant: { en: "Portfolio composition (all schools)" },
            requirement: { en: "10–12 strongest pieces · 2–3 sketchbook spreads · 4–6 finished works across at least three media (pencil + watercolour/gouache + ink/charcoal/digital) · 2–3 process pieces showing iteration" },
            source: { en: "Composite from SOTA + IP / SAP school audition guidance" },
          },
          {
            variant: { en: "SAP schools (Nan Hua, Dunman High, Catholic High)" },
            requirement: { en: "Chinese ink painting (中国水墨) or calligraphy work optional as part of portfolio" },
            source: { en: "SAP school Chinese-culture art tradition" },
          },
        ],
        coachCtaBlurb: {
          en: "A private art tutor can sharpen sketchbook habits, tighten the portfolio narrative (one-sentence intent per piece), and rehearse on-spot composition planning. Browse our coach directory for art specialists.",
        },
      },
      trialDimensionsIntro: {
        en: "Visual Arts DSA-Sec auditions in Singapore typically combine three components: a portfolio review (8–15 works — most schools accept either advance digital submission or works brought on the day; check each target school's brief, as some require both), an on-spot drawing or observation task (45–90 minutes), and a short interview about the portfolio. SOTA's Visual Arts audition is the most structured — multi-round, with a written reflection plus practical work in addition to the portfolio review. Other schools (ACS(I), NYGH, MGS, CHIJ St Nicholas, Nan Hua) typically run the three components in a single half-day. The portfolio is the only fully-controlled segment — the on-spot task and interview prompts are the school's call, so curate the 10–12 strongest pieces (more is not better) and bring the actual sketchbook with messy process pages, not a curated print-out. No school publishes a full rubric, but published guidelines from SOTA and parent reports across cycles converge on the six dimensions below.",
      },
      trialDimensions: [
        {
          label: { en: "Observation over rendering" },
          body: {
            en: "Panels look at whether the candidate sees accurately, not whether they render finely. A messy but correctly observed sketch — proportions right, weight of objects felt, light direction consistent — outscores a polished drawing that misreads the subject. The most common P6 mistake is over-rendering one corner while the rest of the composition fails. Observation is the foundation panels will build technique on for four years.",
          },
        },
        {
          label: { en: "Sketchbook depth" },
          body: {
            en: "The sketchbook is the single highest-signal document. Panels flip through looking for breadth, repetition (drawing the same subject five different ways), and evidence the child draws when not asked to. A sketchbook with twenty studies of the same hand, building up confidence, signals more than a sketchbook with twenty finished pieces in different styles. Schools want curiosity, not productivity.",
          },
        },
        {
          label: { en: "Material range" },
          body: {
            en: "Portfolios that show only pencil work, or only watercolour, read as narrow. Panels want to see the candidate has tried at least three media — pencil, watercolour or gouache, ink, charcoal, or digital — and has thought about why each medium serves different subjects. A piece that argues for its medium (a quick gestural ink because the subject moved) scores higher than a perfectly executed watercolour with no clear reason for the choice.",
          },
        },
        {
          label: { en: "Concept and personal voice" },
          body: {
            en: "Especially at SOTA and IP schools, panels read for whether the candidate has anything to say. A portfolio of technically competent still lifes scores lower than one that includes two or three pieces with a clear personal subject — a grandmother's kitchen, a particular tree in the neighbourhood, recurring drawings of the candidate's hand. Voice at P6 is not refined opinion; it's repeated specific interest.",
          },
        },
        {
          label: { en: "On-spot task adaptability" },
          body: {
            en: "The on-spot drawing task is where panels see how the candidate handles unfamiliar material under time pressure. Common prompts: still life, perspective from a specific angle, a thematic word ('weight', 'shelter', 'noise'). The signal is whether the candidate uses the first 5 minutes to look and plan, or starts marking immediately. Five minutes of pre-planning saves the panel from watching a 30-minute correction process.",
          },
        },
        {
          label: { en: "Articulation of one's own work" },
          body: {
            en: "In the interview, panels ask the candidate to walk them through three pieces. A child who says \"this is a still life of fruit\" scores lower than one who says \"this is the third version of this still life — the first two had the bowl too high. I dropped the horizon line and the apples started to sit.\" Process narration signals self-awareness panels will train into the next four years.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Drawing / observational work" },
          body: {
            en: "Most portfolios are anchored by drawing. Panels look for proportion, weight, light direction, and consistency of mark-making across pieces. The single most useful exercise at P6 level is timed drawing — 5 minutes, 10 minutes, 20 minutes of the same subject — because it builds the habit of seeing the whole first before refining parts. Schools assume technique can be taught; observation is what they're selecting for.",
          },
        },
        {
          position: { en: "Painting / colour work" },
          body: {
            en: "Watercolour, gouache, and acrylic appear in most strong portfolios. Panels look at whether the candidate has thought about colour — value relationships, complementary colours, restraint in palette — or whether colour is decorative. A monochromatic study can score higher than a bright multi-colour piece if the value structure is clearer. Photographs of larger paintings should be square-on and accurately colour-balanced.",
          },
        },
        {
          position: { en: "3D / mixed media / digital" },
          body: {
            en: "Portfolios that include sculpture, paper construction, photography, or digital work read as broader and signal a candidate already thinking in multiple modes. Photographs of 3D work should show two or three angles, not one. Digital work should be displayed at meaningful size, not as thumbnails. The medium itself is less important than evidence the candidate has actively chosen it.",
          },
        },
        {
          position: { en: "Sketchbook practice" },
          body: {
            en: "Many strong portfolios open or close with sketchbook pages. Panels prefer to see a sketchbook with cross-outs, half-finished ideas, and quick notes — evidence of process — over a presentation sketchbook with only the best pages curated. Bring the actual sketchbook (with the messy pages) rather than a printed selection. The mess is the point.",
          },
        },
      ],
      positionFocusNote: {
        en: "Schools weight components differently. SOTA's audition is the most demanding and includes a written reflection. ACS(I), NYGH, and CHIJ St Nicholas focus on portfolio and on-spot work. SAP schools (Nan Hua, Dunman High, Catholic High) typically include a shorter portfolio review alongside other DSA components. Some schools also accept Chinese ink painting (中国水墨) or calligraphy work as part of the portfolio.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love drawing or making art?" },
          subtext: {
            en: "Panels want a specific moment — a piece you couldn't stop working on, an artist you discovered — not \"because I'm good at it.\"",
          },
          approach: {
            en: "Open with one concrete memory, then connect to your character.",
          },
          template: {
            en: "The first time I drew my grandmother's hands while she peeled garlic — I started over six times because each time I looked back at her hands, they had moved. That was when I realised drawing was about seeing, not copying.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the art programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific item — a school showcase, an exhibition, an alumni artist, the studio facilities.",
          },
          template: {
            en: "I visited your school's Year-End Showcase last December. The way your Sec 4 student handled charcoal — those marks were doing work I want to learn to make. That's why your school.",
          },
        },
        {
          question: { en: "Walk us through this piece — why did you make it?" },
          subtext: {
            en: "Can the candidate narrate process, choices, and what they'd change next time?",
          },
          approach: {
            en: "Talk about what you were trying to see, what you tried, what didn't work, what surprised you.",
          },
          template: {
            en: "This is my grandfather's chair after he passed. I started with photographs but the chair looked staged. I went back and drew it three times from where I usually sit in the living room — the third version finally felt like the chair, not a portrait of the chair.",
          },
        },
        {
          question: { en: "Which artist or artwork has changed how you see?" },
          subtext: {
            en: "Tests whether the candidate looks at art seriously, not just makes it.",
          },
          approach: {
            en: "Name someone specific. Singapore artists, Asian masters, or Western canon are all fine — be ready to discuss one specific work.",
          },
          template: {
            en: "Georgette Chen's still lifes at the National Gallery. The first time I noticed how she painted lychee skin — the bumpy texture coming through with just three or four marks — I rethought how much detail I was putting into my own still lifes.",
          },
        },
        {
          question: { en: "Tell us about a piece that didn't work." },
          subtext: {
            en: "Schools want process honesty, not perfection claims.",
          },
          approach: {
            en: "Describe a real piece, what failed, what you understood.",
          },
          template: {
            en: "I spent three weeks on a self-portrait that never resolved. The face kept looking like someone else. I gave up and started drawing my hands instead. The hand drawings became my strongest pieces — because I let go of the face, not in spite of it.",
          },
        },
        {
          question: { en: "How do you balance art-making with school?" },
          subtext: {
            en: "Schools fear DSA artists who fall behind academically.",
          },
          approach: {
            en: "Describe a real routine, not platitudes.",
          },
          template: {
            en: "I sketch on the bus and during recess — small studies, 5 minutes each. Weekends I do longer pieces. I don't draw on Sunday nights — that's revision and rest. Drawing every day, just briefly, is more sustainable than long sessions on weekends only.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. SOTA's six-year IB Visual Arts pathway gives me studio time no other school can. That structure is the future I want.",
          },
        },
      ],
      schools: [
        {
          name: "School of the Arts (SOTA)",
          url: "https://www.sota.edu.sg/admissions/sota-direct-school-admission-dsa-exercise/",
          talentArea: { en: "Visual Arts, IB" },
          context: {
            en: "Specialised arts school. Multi-round Visual Arts audition with portfolio review, on-spot practical task, written reflection, and interview. Six-year IB Visual Arts pathway.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Visual Arts (Boys), IP" },
          context: {
            en: "IP school with strong Visual Arts programme. Audition typically combines portfolio review with on-spot task. Pipeline to IB Visual Arts at the Sec 4 / 5 / 6 stage.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Visual Arts (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies. Strong art tradition with sustained Singapore Youth Festival Art Exhibition showings. Chinese ink painting offered alongside Western media.",
          },
        },
        {
          name: "CHIJ Saint Nicholas Girls' School",
          url: "https://www.chijstnicholas.moe.edu.sg/admissions/",
          talentArea: { en: "Visual Arts (Girls), DSA-Sec" },
          context: {
            en: "Recognised CCA Art Club with consistent SYF Art Exhibition participation. Audition typically: portfolio + on-spot drawing + interview.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.sch.edu.sg/admission/dsa/",
          talentArea: { en: "Visual Arts (Girls), DSA-Sec" },
          context: {
            en: "Strong art CCA with sustained SYF Art Exhibition showings. Audition assesses portfolio breadth, on-spot work, and personal voice.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Visual Arts, DSA-Sec" },
          context: {
            en: "SAP school. Visual Arts among published talent areas. Higher Chinese / Chinese Language as Mother Tongue requirement applies.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Visual Arts, IP / DSA-Sec" },
          context: {
            en: "SAP and Bicultural Studies. 2026 DSA FAQ lists Visual Arts as a talent area. Chinese ink painting is part of the school's art curriculum.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/year-1-direct-school-admission/",
          talentArea: { en: "Visual Arts (Girls), IP" },
          context: {
            en: "IP school with Visual Arts pipeline through to Raffles Institution and Raffles Junior College Art Elective. Audition assesses portfolio and personal voice.",
          },
        },
        {
          name: "Cedar Girls' Secondary School",
          url: "https://www.cedargirlssec.moe.edu.sg/admissions/",
          talentArea: { en: "Visual Arts (Girls), DSA-Sec" },
          context: {
            en: "Recognised CCA Art Club with sustained SYF Art Exhibition showings. Audition: portfolio review + on-spot drawing.",
          },
        },
        {
          name: "Crescent Girls' School",
          url: "https://www.crescent.moe.edu.sg/admissions/dsa-sec/",
          talentArea: { en: "Visual Arts (Girls), DSA-Sec" },
          context: {
            en: "Visual Arts among DSA talent areas. CCA art programme with sustained SYF participation.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the audition is still weeks out" },
          items: [
            {
              en: "Curate the portfolio with restraint. 10–12 strong pieces beats 20 mixed pieces. Include 2–3 sketchbook spreads, 4–6 finished works across at least three media, and 2–3 process pieces (a piece shown in three stages, or two versions of the same subject). Cut anything the candidate isn't proud of — panels remember the weakest piece, not the strongest.",
            },
            {
              en: "Confirm CCA records at primary school. MOE pulls CCA participation, school art awards, SYF Art Exhibition selections, and external programme alumni status (NAFA Junior, SOTA Junior, LASALLE programmes, recognised national art competitions) into the DSA portal. Ask the CCA teacher to verify all art-related entries.",
            },
            {
              en: "Run two mock on-spot tasks. Give the candidate a random subject and 45 minutes — once at home, once somewhere unfamiliar. The unfamiliar setting matters; many candidates underperform first audition because the studio, the lighting, and the materials are not theirs.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Stop adding new work to the portfolio. Anything made in the final week reads as panic. Spend the time photographing existing pieces well (square-on, even lighting, accurate colour) and writing a one-sentence note about each piece's intent — these notes feed the interview.",
            },
            {
              en: "Confirm logistics in writing. Time, venue, materials policy (some schools provide materials, others ask the candidate to bring their own basic kit — pencils, eraser, sharpener, water container, brushes). Email the school if the brief is ambiguous.",
            },
            {
              en: "Pack the sketchbook the day before. Bring the messy sketchbook, not a clean one. Bring a sturdy folder for the portfolio. Bring a power bank if any digital work is on a phone or tablet. Make the packing list once, check it twice.",
            },
          ],
        },
        {
          label: { en: "Day of audition" },
          items: [
            {
              en: "Light breakfast 90 minutes before. Audition rooms run cold; bring a long-sleeve layer. A graphite-stained hand is the wrong start — wash hands before the on-spot task and bring wet wipes.",
            },
            {
              en: "Drop off, don't hover. Greet the audition coordinator, leave. The candidate brings the portfolio in themselves — that small act of ownership matters for tone-setting.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What did you draw?\" — let the child share. Reviewing the panel's comments waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — application in, audition coming up, no clear preparation plan — there are still real moves. Don't try to make new finished pieces. Instead, fill three sketchbook pages a day for one week with quick observational studies — your hand, a chair, a coffee cup, your sibling sleeping. These pages join the sketchbook and signal the daily-drawing habit panels look for. For the on-spot task, practise the first five minutes: looking, finding the composition, and planning before marking. That habit is trainable in a week. For the interview, write one sentence per piece about what you were trying to see and what didn't work. Rehearse saying these out loud. Some families bring in a private art tutor at this stage. A good tutor can sharpen sketchbook habits and tighten the interview narrative — but no tutor produces, in three sessions, the seeing that years of looking build. Treat it as triage, not a fix.",
      },
    },
  },
  hockey: {
    slug: "hockey",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Hockey", zh: "曲棍球", ms: "Hoki", ta: "ஹாக்கி" },
    hook: {
      en: "Hockey DSA — trials reward stick-skill habits, not just speed.",
      zh: "曲棍球 DSA——trial 奖励球杆习惯，不只是速度",
      ms: "DSA Hoki — trial menghargai tabiat kayu hoki, bukan kelajuan semata-mata.",
      ta: "ஹாக்கி DSA — சோதனை ஸ்டிக் திறன் பழக்கங்களை மதிக்கிறது, வேகத்தை மட்டுமல்ல.",
    },
    intro: {
      en: "Singapore secondary hockey is dominated by a handful of SSP schools with deep youth pipelines. Trial coaches look beyond pace to first touch, off-ball positioning, and how a player reads the press. Here's what auditions actually weigh.",
      zh: "新加坡中学曲棍球由几所有深厚青训管道的 SSP 学校主导。Trial 教练看的不只是速度——第一脚处理、无球跑位、看压迫的能力同样重要。Trial 真正在测什么。",
      ms: "Hoki sekolah menengah Singapura didominasi oleh beberapa sekolah SSP. Jurulatih trial menilai sentuhan pertama, kedudukan tanpa bola, dan bacaan tekanan.",
      ta: "சிங்கப்பூர் இடைநிலை ஹாக்கி ஒரு சில SSP பள்ளிகளால் ஆதிக்கம் செலுத்தப்படுகிறது. சோதனை பயிற்சியாளர்கள் வேகத்துக்கு அப்பால் முதல் தொடுதல், பந்து இல்லாத நிலைப்பாடு, அழுத்தத்தைப் படிப்பதைப் பார்க்கிறார்கள்.",
    },
    summary: {
      en: "Trial structure, position-specific stick work, interview questions, SSP / SAP / IP hockey schools.",
      zh: "Trial 流程、位置专项杆法、面试题、SSP / SAP / IP 招生学校。",
      ms: "Struktur trial, kayu hoki khusus posisi, soalan temu duga, sekolah SSP/SAP/IP.",
      ta: "சோதனை அமைப்பு, நிலை சார்ந்த ஸ்டிக் வேலை, கேள்விகள், SSP / SAP / IP பள்ளிகள்.",
    },
    sampleSchools: [
      "Victoria School",
      "Anglo-Chinese School (Independent)",
      "Anglo-Chinese School (Barker Road)",
      "Raffles Institution",
      "Raffles Girls' School (Secondary)",
      "Saint Joseph's Institution",
    ],
    metaDescription: {
      en: "Hockey DSA-Sec trial guide for Singapore P6 — what trials measure, position-specific stick work, sample interview questions, SSP and IP participating schools.",
      zh: "新加坡 P6 曲棍球 DSA-Sec trial 指南——评分维度、位置专项、面试题、SSP / IP 招生学校。",
      ms: "Panduan trial DSA-Sec Hoki Singapura — apa trial nilai, kerja kayu hoki khusus posisi, soalan, sekolah SSP/IP.",
      ta: "சிங்கப்பூர் P6 ஹாக்கி DSA-Sec வழிகாட்டி — சோதனை அளவுகோல்கள், நிலை சார்ந்த பணி, கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore hockey trials run 90–120 minutes and are typically led by the school's head hockey coach (often SHF-registered) alongside the teacher-in-charge. Expect a warm-up, technical stations (push pass, hit, reception, 1v1), and small-sided games (5v5 or 7v7) on a half pitch. The strongest school programmes — particularly under the Schools' Special Programme (SSP) for Hockey at Anglo-Chinese School (Independent), Anglo-Chinese School (Barker Road), Saint Joseph's Institution, and Victoria School — recruit aggressively at P6. No school publishes a rubric, but the FIH-aligned youth coaching framework and parent reports converge on the six dimensions below.",
      },
      trialDimensions: [
        {
          label: { en: "Stick skill habits" },
          body: {
            en: "Not whether the trialist can dribble in a straight line — whether the stick stays low, the bottom hand stays loose, and the eyes stay up. P6 players who learned hockey young typically have looser hands; players who came from floorball or other sports carry forearm tension that shows in trial. Coaches assume technique can be built; habits are harder to unlearn.",
          },
        },
        {
          label: { en: "First touch on a moving ball" },
          body: {
            en: "Trial coaches deliberately feed bouncing or angled passes. A reception that kills the ball flat — or worse, where the ball bounces off the stick — costs the next two seconds of play. A P6 player whose first touch sets up their second touch scores meaningfully higher than one with stronger physical tools but poor reception.",
          },
        },
        {
          label: { en: "Off-ball positioning and reading the press" },
          body: {
            en: "What the trialist does in the five seconds after passing — make the supporting run, rotate, or stop and watch — is the single biggest separator at P6 level. Hockey rewards triangles: a player who is always available for the next pass shows positional intelligence that's hard to teach. Coaches at SSP schools especially watch this in the small-sided games.",
          },
        },
        {
          label: { en: "1v1 defending and recovery" },
          body: {
            en: "Stance, distance, and the recovery sprint after being beaten. Defending in hockey is patience — the trialist who jabs and lunges gets stepped past. The one who shows feet, channels the attacker to a side, and waits scores higher. Recovery sprint after being beaten matters as much as the first duel.",
          },
        },
        {
          label: { en: "Conditioning across the full session" },
          body: {
            en: "Trials run past 90 minutes for a reason. The final small-sided game shows who fades — and fatigued players reveal honest habits. Coaches are looking for the player whose touch and decisions hold up in the last 10 minutes, not the one who burned out impressing in minute 20.",
          },
        },
        {
          label: { en: "Coachability and attitude between drills" },
          body: {
            en: "Whether the trialist jogs back to position, picks up cones, listens when corrected, encourages a teammate after a turnover. International coaching research consistently ranks these signals as highly as technical ability for youth selection — and Singapore school coaches, who'll work with this child for four years, weight them heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Goalkeeper" },
          body: {
            en: "Goalkeeper trials run as a separate stream. Stations include shot-stopping from close range (slap shots, drag flicks), kicking and clearing, and one-on-one situations against a forward. Coaches care less about reflex saves than about whether the keeper sets their feet, presents a wide stance, and clears in a sensible direction under pressure. A keeper who controls the rebound rather than just stopping the shot signals real game intelligence.",
          },
        },
        {
          position: { en: "Defender (full-back / sweeper)" },
          body: {
            en: "Tackling timing and recovery pace are the headline traits. Coaches focus on whether the defender stays patient and channels the attacker rather than lunging. Aerial reception — taking a high ball cleanly with one hand on the stick — is a separator at P6 level since most players still flinch at the ball. Passing range and the willingness to switch play across the pitch are scored heavily in small-sided games.",
          },
        },
        {
          position: { en: "Midfielder" },
          body: {
            en: "The position where vision shows fastest. Coaches watch whether the midfielder receives on the half-turn (already facing forward) or with their back to play. Pass selection — short and progressive versus safe sideways — is logged across the small-sided game. Defensive workrate matters as much as attacking play; midfielders who don't track back read as a habit problem.",
          },
        },
        {
          position: { en: "Forward (striker / winger)" },
          body: {
            en: "Coaches look for two specific moves: the run in behind the defensive line and the willingness to receive in the D and turn under pressure. Goals scored in trial scrimmages are noted but not weighted heavily — schools have seen too many P6 strikers who score against weak defenders. The defensive press from the front and recovery runs matter more. Drag flick or penalty corner ability is a bonus at P6, not an expectation.",
          },
        },
      ],
      positionFocusNote: {
        en: "If your child plays attacking midfielder, the midfielder and forward notes both apply — strong attacking-midfielder candidates typically demonstrate both. For defensive midfielder, lean on the defender notes plus shielding the back line.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love hockey?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like running with the stick\" reads as weak motivation.",
          },
          approach: {
            en: "Open with one concrete memory, then connect it to character.",
          },
          template: {
            en: "We lost the inter-school zonal in P5 on a short corner in the last minute. That night I asked my mother for a goalkeeper kit. I'm a midfielder, but I wanted to know what the keeper saw.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the hockey programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing — SSP status, a coach's name, an NSG result, a training pattern.",
          },
          template: {
            en: "Anglo-Chinese School (Independent) — your hockey programme is under SSP and the senior team trains four times a week. That's the volume I want from Sec 1.",
          },
        },
        {
          question: { en: "What position do you play and why?" },
          subtext: {
            en: "Can the kid articulate the role, not just label it?",
          },
          approach: {
            en: "Name the position plus the job.",
          },
          template: {
            en: "Centre midfielder — my job is connecting defence to attack and being available for the press break. I like the position because the field is in front of you.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I missed my P5 school team after first trial. I joined Saturday morning club sessions and worked on my reverse-stick reception. I made the team next round and played zonal by NSG.",
          },
        },
        {
          question: { en: "Who is a teammate or coach you remember most?" },
          subtext: {
            en: "Whether the kid sees teammates as people or background.",
          },
          approach: {
            en: "Name someone specific by role + what you learned.",
          },
          template: {
            en: "My P6 captain made me do extra push passes after every training. I didn't enjoy it but my pass weight became reliable. He's now in a Sec 1 SSP school and I want to be in that pipeline too.",
          },
        },
        {
          question: { en: "How do you manage time with frequent trainings?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes.",
          },
          template: {
            en: "I do English and Math on the bus to training and finish Science before dinner. Sundays are for revision and rest. My coach checks in with my mother on academic balance — that's a system, not just discipline.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your SSP status gives me four sessions a week from Sec 1 — no other school can match that volume, and that's the volume I need to keep growing.",
          },
        },
      ],
      schools: [
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Hockey (Boys), IP" },
          context: {
            en: "Schools' Special Programme (SSP) for Hockey host school. Sustained NSG A and B Division presence. Pipeline to national age-group teams.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://www.acsbr.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Hockey (Boys), DSA-Sec" },
          context: {
            en: "Schools' Special Programme (SSP) for Hockey host school. Strong NSG B-Division and C-Division record.",
          },
        },
        {
          name: "Saint Joseph's Institution",
          url: "https://www.sji.edu.sg/admissions/",
          talentArea: { en: "Hockey (Boys), DSA-Sec" },
          context: {
            en: "Schools' Special Programme (SSP) for Hockey host school. Strong B Division NSG record.",
          },
        },
        {
          name: "Victoria School",
          url: "https://www.victoriaschool.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Hockey (Boys), DSA-Sec" },
          context: {
            en: "Schools' Special Programme (SSP) for Hockey host school. Long-running tradition in field hockey with sustained national-team feeder record.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
          talentArea: { en: "Hockey (Boys), IP" },
          context: {
            en: "IP school with sustained NSG A-Division presence. Hockey is among RI's published DSA talent areas.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/year-1-direct-school-admission/",
          talentArea: { en: "Hockey (Girls), IP" },
          context: {
            en: "IP school with strong Girls' hockey tradition and sustained NSG showings across A, B, and C divisions.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.sch.edu.sg/admission/dsa/",
          talentArea: { en: "Hockey (Girls), DSA-Sec" },
          context: {
            en: "Recognised girls' hockey programme with sustained NSG B-Division and C-Division presence.",
          },
        },
        {
          name: "Singapore Chinese Girls' School",
          url: "https://www.scgs.moe.edu.sg/admissions/dsa/",
          talentArea: { en: "Hockey (Girls), DSA-Sec" },
          context: {
            en: "SAP school. Girls' hockey is a published DSA talent area with consistent NSG participation.",
          },
        },
        {
          name: "St Andrew's Secondary School",
          url: "https://www.standrewssec.moe.edu.sg/admissions/dsa/",
          talentArea: { en: "Hockey (Boys), DSA-Sec" },
          context: {
            en: "Sustained Boys' hockey programme with regular NSG participation.",
          },
        },
        {
          name: "Catholic Junior College (Sec via DSA-Sec partner)",
          url: "https://www.cjc.edu.sg/",
          talentArea: { en: "Hockey (reference for post-Sec pathway)" },
          context: {
            en: "Reference only — CJC is a strong post-Sec hockey programme that often absorbs SSP hockey alumni at A-Division level.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Video-record one full 7-on-7 game. Watch with your child, scoring just two behaviours: (1) what they do in the five seconds after passing the ball — make a supporting run, rotate, or stand still? (2) how many possessions did they receive on the half-turn versus with their back to play? These are the two most under-trained P6 habits and the two highest-signal items in hockey trials.",
            },
            {
              en: "Confirm CCA records at primary school are accurate. MOE pulls CCA participation, school awards, NSG results, NAPFA, and JSA data directly into the DSA portal. Hockey-specific external programme alumni (Singapore Hockey Federation development squads) also feed in. Ask the CCA teacher or year-head to verify what's been logged.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 80%: passing accuracy, reception drills, half-court small-sided games, no new academy session. Final-week added load rarely pays off and frequently produces a tweak (most commonly hamstring or ankle).",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire (most trials require turf-appropriate footwear, mouthguard, shin pads). Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "One small-sided game with strangers. Kids underperform at trial because they start passing only to teammates they know. Force the awkwardness early — a Saturday morning club session with unfamiliar players is the cheapest fix.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — not 30. Trials run deliberately past the fatigue threshold and the last 20 minutes is where habits show.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to push-pass accuracy and reception. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private hockey coach at this stage to compress the learning curve. A good private coach can speed up specific habit changes — particularly the half-turn reception — but no coach produces, in three sessions, the muscle memory of a year of practice. Treat it as triage, not a fix.",
      },
    },
  },
  squash: {
    slug: "squash",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Squash", zh: "壁球", ms: "Skuasy", ta: "ஸ்குவாஷ்" },
    hook: {
      en: "Squash DSA — trials reward court craft over raw shot power.",
      zh: "壁球 DSA——trial 看的是球场调度，不是杀球力量",
      ms: "DSA Skuasy — trial menilai kemahiran gelanggang, bukan kuasa pukulan semata-mata.",
      ta: "ஸ்குவாஷ் DSA — சோதனை மைதான திறமையை மதிக்கிறது, பந்து வேகத்தை மட்டுமல்ல.",
    },
    intro: {
      en: "Singapore secondary squash is concentrated at a handful of SSP and IP schools. Trial coaches look at length to the back wall, the T habit, and how quickly a player solves problems mid-rally — not just power. Here's what selectors actually weigh.",
      zh: "新加坡中学壁球集中在几所 SSP 和 IP 学校。Trial 教练看的是底线长球、回 T 的习惯、以及对回合中临场解题的能力——不只是力量。选拔真正的权重在哪。",
      ms: "Skuasy sekolah menengah Singapura tertumpu di beberapa sekolah SSP dan IP. Jurulatih menilai panjang ke dinding belakang, tabiat ke T, dan penyelesaian masalah dalam ralli.",
      ta: "சிங்கப்பூர் இடைநிலை ஸ்குவாஷ் சில SSP மற்றும் IP பள்ளிகளில் குவிந்துள்ளது. பயிற்சியாளர்கள் பின் சுவருக்கு நீளம், T பழக்கம், ரல்லியில் சிக்கல்களைத் தீர்ப்பதைப் பார்க்கிறார்கள்.",
    },
    summary: {
      en: "Trial structure, technical priorities, movement habits, interview questions, SSP / IP / DSA-Sec squash schools.",
      zh: "Trial 流程、技术重点、移动习惯、面试题、SSP / IP / DSA-Sec 招生学校。",
      ms: "Struktur trial, keutamaan teknikal, tabiat pergerakan, soalan temu duga, sekolah SSP/IP.",
      ta: "சோதனை அமைப்பு, தொழில்நுட்ப முன்னுரிமைகள், கேள்விகள், SSP / IP பள்ளிகள்.",
    },
    sampleSchools: [
      "Anglo-Chinese School (Independent)",
      "Raffles Girls' School (Secondary)",
      "Raffles Institution",
      "Saint Joseph's Institution",
      "Hwa Chong Institution",
      "Methodist Girls' School (Secondary)",
    ],
    metaDescription: {
      en: "Squash DSA-Sec trial guide for Singapore P6 — what trials measure, technical priorities, sample interview questions, SSP and IP participating schools.",
      zh: "新加坡 P6 壁球 DSA-Sec trial 指南——评分维度、技术重点、面试题、SSP / IP 招生学校。",
      ms: "Panduan trial DSA-Sec Skuasy Singapura — apa trial nilai, keutamaan teknikal, soalan, sekolah SSP/IP.",
      ta: "சிங்கப்பூர் P6 ஸ்குவாஷ் DSA-Sec வழிகாட்டி — சோதனை அளவுகோல்கள், நிலை சார்ந்த பணி, கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore squash trials typically run 60–90 minutes on the school's home court and are led by the head squash coach (often Squash Australia or PSA-aligned credentialed) plus the teacher-in-charge of Sports. Expect a warm-up, a solo technical session against the front wall (drives, drops, boasts), a feeding drill where the coach hits to the trialist, and either match play against another trialist or with a school senior. The strongest school programmes — particularly under the Schools' Special Programme (SSP) for Squash at Anglo-Chinese School (Independent) and Raffles Girls' School (Secondary) — recruit early and aggressively. No school publishes a rubric, but the SquashSG / SRA-aligned coaching framework and parent reports converge on the six dimensions below.",
      },
      trialDimensions: [
        {
          label: { en: "Length to the back wall" },
          body: {
            en: "The single highest-signal P6 habit. Coaches feed the trialist on a forehand or backhand and watch whether the ball reliably travels past the short line and lands deep. Players who can drive length consistently are scored higher than those who hit harder but short. Length controls the rally; power without length gives the opponent the front of the court.",
          },
        },
        {
          label: { en: "T habit" },
          body: {
            en: "After every shot, where does the trialist go? Returning to the T (centre of the court) is the foundational movement habit and the cheapest tell of years of structured play. Coaches deliberately feed varied shots to test whether the player resets or floats around the back. A child who returns to the T after every shot — even in warm-up — instantly signals trained instincts.",
          },
        },
        {
          label: { en: "Racket preparation and stance" },
          body: {
            en: "Early racket-up signals the player has been coached to read the ball, not react to it. Stance — bent knees, racket head above the wrist, weight on the toes — is the second-most-visible coachability signal. Players whose racket comes up only when the ball is incoming are still learning the foundation. Coaches assume strokes can be refined; reading-and-preparing is a deeper habit.",
          },
        },
        {
          label: { en: "Shot variation under pressure" },
          body: {
            en: "Under match-play conditions, does the trialist use drops, boasts, and lobs — or do they default to drives only? P6 players who can place a soft drop from the back of the court signal real court craft. The signal is choice-making, not perfection — even a missed drop attempt shows the player thinks beyond the next drive.",
          },
        },
        {
          label: { en: "Fitness and movement endurance" },
          body: {
            en: "Trials run past 60 minutes deliberately. The final match shows who fades — and fatigued players reveal honest habits. A trialist whose movement still gets them to the front court at minute 50 scores higher than one whose first ten minutes look sharper. The conditioning required for squash at NSG level is unforgiving; selectors are looking for the engine, not the spike.",
          },
        },
        {
          label: { en: "Coachability and attitude between rallies" },
          body: {
            en: "How the trialist behaves between drills, whether they pick up balls without being asked, whether they thank the coach at the end. International coaching research finds these signals unanimously rated 10/10 by elite coaches — higher than raw athleticism. Singapore school coaches, who'll work with this child for four years, weight them heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Solo technical work" },
          body: {
            en: "Most trials open with the trialist alone on court, hitting drives to the front wall for five to ten minutes. Coaches watch the rhythm — can the player sustain a consistent length, switch from forehand to backhand on the same drive line, and add target work (aiming for specific points on the front wall)? Inconsistent solo work is the cheapest tell of a player still drilling, not yet automated.",
          },
        },
        {
          position: { en: "Feeding drills" },
          body: {
            en: "The coach feeds the ball — varying length, side, and pace — while the trialist hits back. Selectors watch: does the player move into position, set their feet, and strike with a stable swing? Or do they reach, drag the racket through, and recover late? The feeding drill is where preparation habits show clearest, because the player can't predict the next ball.",
          },
        },
        {
          position: { en: "Match play (often against a school senior)" },
          body: {
            en: "Some schools pit the trialist against a current Sec 1 or Sec 2 player. The result is less important than how the trialist conducts themselves — whether they stay calm under pressure, vary their shots, return to the T, and respect the senior on court. Losing 0-9 to a Sec 2 player who already trains under SSP is normal; how the trialist played those nine points is what's measured.",
          },
        },
        {
          position: { en: "Sportsmanship and court etiquette" },
          body: {
            en: "Squash is a contact sport played in a small box. Calling lets honestly, walking around the opponent, acknowledging good shots, and not slamming the racket are basic court etiquette signals coaches read in 30 seconds. P6 players who haven't yet learned to call \"let, please\" properly or who play through obvious obstruction read as not-yet-coached.",
          },
        },
      ],
      positionFocusNote: {
        en: "Squash is not position-divided like field sports. The four areas above describe what gets assessed across the trial; the same player must show all four. Schools weight technical work and match play roughly equally, with sportsmanship as a near-veto for borderline candidates.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love squash?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like hitting hard\" reads as weak motivation.",
          },
          approach: {
            en: "Open with one concrete memory, then connect it to character.",
          },
          template: {
            en: "I lost my P5 zonal semi-final 2-3 to a player who hit nothing but length and drops. He never tried to hit through me — he made me run myself out. That night I asked my coach to teach me drops.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the squash programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing — SSP status, a senior player you watched, the training pattern.",
          },
          template: {
            en: "Anglo-Chinese School (Independent) — your squash programme is under SSP and trains four times a week with court time built into the curriculum. That volume is what I want from Sec 1.",
          },
        },
        {
          question: { en: "What's the strongest part of your game?" },
          subtext: {
            en: "Can the kid articulate their game honestly?",
          },
          approach: {
            en: "Name one strength specifically; do not list everything.",
          },
          template: {
            en: "Length — I can drive length on my backhand for ten balls in a row in practice. My weakness is volley work, which I'm building this year.",
          },
        },
        {
          question: { en: "Tell us about a match you lost and what you learned." },
          subtext: {
            en: "Schools want growth narratives, not natural-talent claims.",
          },
          approach: {
            en: "Describe a real loss, what you changed afterward, what improved.",
          },
          template: {
            en: "I lost a tournament match 0-3 because I kept hitting hard and short. My coach made me play three matches the next week where I wasn't allowed to hit anything past the service box. After that, my length under pressure became consistent.",
          },
        },
        {
          question: { en: "Who is a coach or training partner you remember most?" },
          subtext: {
            en: "Whether the kid sees teammates as people or background.",
          },
          approach: {
            en: "Name someone specific by role + what you learned.",
          },
          template: {
            en: "My P6 coach made me solo-hit for fifteen minutes before every session. I didn't want to, but my rallies extended from five shots to twenty-five shots in six months. That habit changed my whole game.",
          },
        },
        {
          question: { en: "How do you manage time with frequent court sessions?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes.",
          },
          template: {
            en: "I do English and Math homework on the bus to court and finish Science before dinner. Sundays are for revision and rest. My academic teacher reviews my marks with my mother every report book — that's a system, not just discipline.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your SSP gives me four sessions a week from Sec 1 and a coach pipeline to NSG A-Division — no other school can match that volume, and that's what I need.",
          },
        },
      ],
      schools: [
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Squash (Boys), IP" },
          context: {
            en: "Schools' Special Programme (SSP) for Squash host school. Sustained NSG A and B Division presence. Pipeline to national age-group teams.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/year-1-direct-school-admission/",
          talentArea: { en: "Squash (Girls), IP" },
          context: {
            en: "Schools' Special Programme (SSP) for Squash host school. Long-running girls' squash tradition with sustained NSG showings.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
          talentArea: { en: "Squash (Boys), IP" },
          context: {
            en: "IP school with squash listed among published DSA talent areas. Strong NSG A-Division presence.",
          },
        },
        {
          name: "Saint Joseph's Institution",
          url: "https://www.sji.edu.sg/admissions/",
          talentArea: { en: "Squash (Boys), DSA-Sec" },
          context: {
            en: "Squash among published DSA-Sec talent areas. Sustained NSG B-Division and C-Division participation.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Squash (Boys), IP" },
          context: {
            en: "IP school with squash among published DSA talent areas. Strong NSG showings across boys' divisions.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.sch.edu.sg/admission/dsa/",
          talentArea: { en: "Squash (Girls), DSA-Sec" },
          context: {
            en: "Recognised girls' squash CCA with sustained NSG B-Division presence.",
          },
        },
        {
          name: "Singapore Chinese Girls' School",
          url: "https://www.scgs.moe.edu.sg/admissions/dsa/",
          talentArea: { en: "Squash (Girls), DSA-Sec" },
          context: {
            en: "SAP school. Girls' squash is a published DSA talent area with consistent NSG participation.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://www.acsbr.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Squash (Boys), DSA-Sec" },
          context: {
            en: "Squash among published DSA-Sec talent areas. Sustained NSG B-Division participation.",
          },
        },
        {
          name: "Catholic Junior College",
          url: "https://www.cjc.edu.sg/",
          talentArea: { en: "Squash (reference for post-Sec pathway)" },
          context: {
            en: "Reference only — CJC is a strong post-Sec squash programme that often absorbs SSP squash alumni at A-Division level.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Squash (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies. Squash among published DSA talent areas. Sustained NSG showings.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Video-record one full match against a player of similar level. Watch with your child, scoring just two behaviours: (1) how reliably did they return to the T after each shot? (2) how many drives travelled past the short line and landed deep? These are the two most under-trained P6 habits and the two highest-signal items in squash trials.",
            },
            {
              en: "Confirm CCA records at primary school are accurate. MOE pulls CCA participation, school awards, NSG results, and external programme alumni status (Squash Singapore / SRA development squads, club rankings) into the DSA portal. Tournament results from open tournaments also count. Ask the CCA teacher or year-head to verify what's been logged.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: solo length practice, gentle feeds, no new technical input. Final-week added load rarely pays off and frequently produces a tweak (most commonly Achilles or lower back).",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire, equipment (most trials require non-marking court shoes, eye protection per WSF rules at junior level). Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "One court session with a stranger. Kids underperform at trial because they're used to their regular partner's rhythm. Force the awkwardness early — a Saturday morning session at an unfamiliar club is the cheapest fix.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — not 30. Trials run past the fatigue threshold deliberately and the last 20 minutes is where habits show.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to solo length and T-returns. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private squash coach at this stage to compress the learning curve. A good private coach can speed up specific habit changes — particularly racket preparation and the T habit — but no coach produces, in three sessions, the rally consistency of a year of solo practice. Treat it as triage, not a fix.",
      },
    },
  },
  leadership: {
    slug: "leadership",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Leadership", zh: "领导力", ms: "Kepimpinan", ta: "தலைமைத்துவம்" },
    hook: {
      en: "Leadership DSA — panels read for specifics, not titles.",
      zh: "领导力 DSA——考官读的是具体事，不是头衔",
      ms: "DSA Kepimpinan — panel menilai khusus, bukan gelaran.",
      ta: "தலைமைத்துவ DSA — குழுக்கள் தலைப்புகளை அல்ல, விவரங்களை மதிக்கின்றன.",
    },
    intro: {
      en: "Leadership DSA-Sec is the least understood talent area — and the one where applications fail most often by being generic. Panels at top IP / SAP schools want one specific story of changing an outcome, not a list of CCAs and titles. Here's what selectors actually read.",
      zh: "领导力 DSA-Sec 是最容易被误解的才艺类别——也是最常因泛泛而败的一类。顶尖 IP / SAP 学校的考官要的是一个改变结果的具体故事，不是 CCA 和头衔的清单。选拔真正读的是什么。",
      ms: "DSA-Sec Kepimpinan adalah kategori bakat yang paling kurang difahami — dan paling kerap gagal kerana terlalu umum. Panel mahukan satu cerita khusus mengubah keputusan, bukan senarai CCA dan gelaran.",
      ta: "DSA-Sec தலைமைத்துவம் என்பது மிகவும் தவறாக புரிந்து கொள்ளப்படும் திறமைப் பகுதி — மற்றும் மிகவும் பொதுவாக இருப்பதால் தோல்வியடையும் பகுதி. குழுக்கள் CCA மற்றும் தலைப்புகளின் பட்டியலை அல்ல, ஒரு முடிவை மாற்றிய ஒரு குறிப்பிட்ட கதையை விரும்புகின்றன.",
    },
    summary: {
      en: "What counts as Leadership talent, portfolio structure, group activity formats, interview questions, participating schools.",
      zh: "什么算 Leadership 才艺、portfolio 结构、小组活动形式、面试题、招生学校。",
      ms: "Apa yang dikira bakat kepimpinan, struktur portfolio, format aktiviti kumpulan, soalan temu duga, sekolah peserta.",
      ta: "தலைமைத்துவ திறமை என்ன, பணித்தொகுப்பு கட்டமைப்பு, குழு செயல்பாடுகள், கேள்விகள், பள்ளிகள்.",
    },
    sampleSchools: [
      "Raffles Institution",
      "Hwa Chong Institution",
      "Raffles Girls' School (Secondary)",
      "Nanyang Girls' High School",
      "Anglo-Chinese School (Independent)",
      "Methodist Girls' School (Secondary)",
    ],
    metaDescription: {
      en: "Leadership DSA-Sec guide for Singapore P6 — what panels look for in portfolios and group activity, sample interview questions, IP and SAP participating schools.",
      zh: "新加坡 P6 领导力 DSA-Sec 指南——考官在 portfolio / 小组活动看什么、面试题、IP / SAP 招生学校。",
      ms: "Panduan DSA-Sec Kepimpinan Singapura — apa panel nilai dalam portfolio dan aktiviti kumpulan, soalan temu duga, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 தலைமைத்துவ DSA-Sec வழிகாட்டி — பணித்தொகுப்பு மற்றும் குழு செயல்பாட்டில் குழு என்ன பார்க்கிறது, கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Leadership DSA-Sec is offered as a talent category at most IP schools and many SAP schools. \"Leadership\" covers a wide set of evidence: Uniformed Group rank (NCC, NPCC, NCDCC, SJAB, Boys' Brigade, Girls' Brigade, Scouts), Student Council or Prefect roles, captaincy of a school CCA, founder or organiser of a community project, or sustained service initiatives. Selection usually combines three components: a written portfolio (submitted with the application or on the day), a group activity (5–8 candidates given a problem to solve together for 30–60 minutes), and a panel interview. Across schools the four observed selection dimensions converge — and the failure mode is consistent: candidates who lead with titles instead of specifics get filtered out fast.",
      },
      trialDimensions: [
        {
          label: { en: "Specific outcome over generic title" },
          body: {
            en: "The single highest-signal habit. A candidate who says \"I was Class Chairperson\" scores low. The one who says \"I noticed our class wasn't returning library books on time, so I made a Friday return-check chart and the teacher said we went from 12 overdues a month to two\" scores high. Panels read for whether the candidate changed something measurable — not what they were called.",
          },
        },
        {
          label: { en: "Listening before deciding" },
          body: {
            en: "In the group activity, panels watch who listens versus who talks first. The candidate who restates what another teammate said before offering their own view consistently scores higher than the one with the strongest opening pitch. Schools selecting future Sec 1 prefects want children who collect information before committing — that's the foundation prefect work depends on.",
          },
        },
        {
          label: { en: "Bringing others along, not over them" },
          body: {
            en: "Panels watch how a candidate handles a quieter teammate. A child who actively asks the silent member's view, makes space for them to speak, and credits their contribution scores higher than one who solves the problem alone. Leadership panels read steamrolling as a coachability red flag — Singapore secondary leadership is collaborative, not assertive.",
          },
        },
        {
          label: { en: "Accepting redirection without sulking" },
          body: {
            en: "When the panel offers a redirect mid-activity — \"now consider this constraint we hadn't mentioned\" — does the candidate fold it in, or visibly resist? Coachability in real time is the most P6-honest test panels can run. Schools fear the future prefect who needs to be right; they reward the one who incorporates feedback fast.",
          },
        },
        {
          label: { en: "Service over self-promotion" },
          body: {
            en: "In the interview, when asked about an achievement, does the candidate centre what was accomplished or who they helped? Panels at religious-affiliated and mission-led schools especially read for this — but it's near-universal. A candidate who frames every story as \"I did X, then we got Y\" outscores one who frames it as \"I won X.\"",
          },
        },
        {
          label: { en: "Sustained over episodic involvement" },
          body: {
            en: "A portfolio with three deep commitments — same Uniformed Group all four years of primary, same community project across two years — scores higher than one with eight superficial entries. Panels read jumping between activities as evidence the candidate hasn't yet committed deeply to anything. Depth over breadth is the consistent signal.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Uniformed Group rank or leadership role" },
          body: {
            en: "Active NCC / NPCC / NCDCC / SJAB / Boys' Brigade / Girls' Brigade / Scouts membership in primary, with a leadership position (squad leader, junior commander), is one of the most legible Leadership evidence types for panels. Bring the rank certificate, photos in uniform at events, and one specific story of leading a squad through a difficult exercise. The signal is sustained service and accountability to a team — not just attendance.",
          },
        },
        {
          position: { en: "Student Council / Prefect / Class Committee" },
          body: {
            en: "Council and prefect work is the most common Leadership entry. To stand out: describe one initiative you started or significantly changed (not the title). \"I organised the P5 cohort's first Inter-Class Service Week\" outranks \"I was Vice-Chairperson.\" Bring a one-paragraph description of the initiative plus a teacher's confirmation if possible.",
          },
        },
        {
          position: { en: "CCA Captaincy or Founding Member" },
          body: {
            en: "Captaincy of an established CCA (sports, performing arts, debate, robotics) is read as leadership when paired with evidence of decisions you made — not just longest-serving member. Founding members of a new CCA or a student-initiated club rank highly when supported by teacher endorsement and a brief on what the CCA accomplished. Panels prefer founders who can articulate why the club was needed.",
          },
        },
        {
          position: { en: "Community Service / Independent Project" },
          body: {
            en: "Sustained service initiatives — a fortnightly visit to an elderly home, a recycling drive run for a full year, fundraising for a specific cause with a documented outcome — are powerful when accompanied by evidence: photos, organiser letters, a teacher who can speak to the candidate's role. Single-occasion volunteering is acknowledged but not weighted heavily; consistency is the signal.",
          },
        },
      ],
      positionFocusNote: {
        en: "Most strong portfolios combine two or three of the above — for example, Patrol Leader in Scouts plus Class Committee Chairperson plus a sustained recycling drive. Avoid listing six superficial entries; panels read that as resume-padding. Two or three deep entries with specific outcomes outperform a long shallow list every cycle.",
      },
      interviewQuestions: [
        {
          question: { en: "Tell us about a time you led a team." },
          subtext: {
            en: "Panels want a specific situation, action, and result — not a job description.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "Our P6 Scout patrol failed our first night-hike checkpoint because we didn't agree on a navigator. I asked everyone to take 30 seconds to vote, then took accountability for the route myself. We cleared every checkpoint after.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the leadership programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific item — the Prefectorial Board structure, a specific service or community programme, an alumni leader.",
          },
          template: {
            en: "Raffles Institution's Student Council elections involve manifesto presentations and Sec 1 students can submit candidacy with senior endorsement. That structure forces real leadership thinking from day one — and that's what I want.",
          },
        },
        {
          question: { en: "Tell us about a time you disagreed with a teacher or coach." },
          subtext: {
            en: "Tests whether the candidate can hold their ground respectfully — and whether they can be wrong gracefully.",
          },
          approach: {
            en: "Describe a real moment, what you did, what you learned — including if you were wrong.",
          },
          template: {
            en: "My CCA teacher wanted to cancel a planned community drive after only six sign-ups. I asked if we could try once more with a different message. We got nineteen sign-ups on the second poster. But I also learned later that her concern about exhausting the team was right — we did three drives that term and the last one was thin.",
          },
        },
        {
          question: { en: "Describe a teammate or peer you've learned the most from." },
          subtext: {
            en: "Whether the candidate sees teammates as people they study, or just background.",
          },
          approach: {
            en: "Name someone specific by role plus what you took away.",
          },
          template: {
            en: "Our Scouts deputy patrol leader didn't speak much but always volunteered first for the tasks no one wanted. I started doing the same in Class Committee work — sign-off, cleanup, the after-event report nobody else wanted to write. The teachers noticed who actually closed loops.",
          },
        },
        {
          question: { en: "What's a project that didn't work, and why?" },
          subtext: {
            en: "Schools want growth narratives, not perfection claims.",
          },
          approach: {
            en: "Describe a real project, what failed, what you understood.",
          },
          template: {
            en: "I tried to start a P5 reading buddy programme for P1 students. It collapsed after three weeks because I planned the sessions but didn't plan how to recruit P1 teachers' help. The lesson: leadership isn't designing the activity, it's getting the people who matter to commit before you announce.",
          },
        },
        {
          question: { en: "How do you decide what to commit to?" },
          subtext: {
            en: "Schools fear DSA-Leadership candidates who over-commit and fail academically.",
          },
          approach: {
            en: "Describe a real filter, not platitudes about prioritising.",
          },
          template: {
            en: "I do three things long-term — Scouts, Class Committee, and a Saturday morning reading session at the community library. I say no to one-off events that compete with those three because depth is what I want, not a wider list.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. The Student Leadership Council structure here lets Sec 1 students propose initiatives directly to the Principal — that's the leadership pipeline I'm committing to.",
          },
        },
      ],
      schools: [
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/year-1-admission-exercises/year-1-direct-school-admission/",
          talentArea: { en: "Leadership (Boys), IP" },
          context: {
            en: "Leadership is among RI's published DSA-Sec talent areas. Strong Student Council and House system tradition. Pipeline to Raffles Junior College leadership programmes.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Leadership (Boys), IP" },
          context: {
            en: "SAP and Bicultural Studies. Leadership among published DSA-Sec talent areas. Student Council elections and Boarding School leadership programmes.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/year-1-direct-school-admission/",
          talentArea: { en: "Leadership (Girls), IP" },
          context: {
            en: "IP school with Leadership as a published DSA talent area. Strong Student Council and Peer Support Leader programmes.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Leadership (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies. Leadership listed in published DSA talent areas. Long-standing Prefectorial Board and student initiative tradition.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Leadership (Boys), IP" },
          context: {
            en: "Methodist mission-affiliated. Strong Boys' Brigade tradition (the school is the original BB host school in Singapore). Leadership among published DSA talent areas.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.sch.edu.sg/admission/dsa/",
          talentArea: { en: "Leadership (Girls), DSA-Sec" },
          context: {
            en: "Methodist mission-affiliated. Leadership among published DSA-Sec talent areas. Strong Girls' Brigade and service-leadership tradition.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://www.acsbr.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Leadership (Boys), DSA-Sec" },
          context: {
            en: "Methodist mission-affiliated. Leadership listed in DSA-Sec talent areas. Strong CCA leadership and service programmes.",
          },
        },
        {
          name: "Cedar Girls' Secondary School",
          url: "https://www.cedargirlssec.moe.edu.sg/admissions/",
          talentArea: { en: "Leadership (Girls), DSA-Sec" },
          context: {
            en: "Recognised Leadership DSA pathway with strong Student Council programme and service-learning tradition.",
          },
        },
        {
          name: "Saint Joseph's Institution",
          url: "https://www.sji.edu.sg/admissions/",
          talentArea: { en: "Leadership (Boys), DSA-Sec" },
          context: {
            en: "Lasallian Catholic mission school. Leadership among DSA-Sec talent areas with strong service-leadership tradition.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/",
          talentArea: { en: "Leadership (Boys), DSA-Sec" },
          context: {
            en: "SAP school with Catholic mission affiliation. Leadership among DSA-Sec talent areas. Higher Chinese / Chinese Language requirement applies.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the application is still weeks out" },
          items: [
            {
              en: "Build a one-page Leadership portfolio. Three entries maximum: each with what you did, what changed, what you learned. Get teacher endorsement letters for each entry. The single highest-leverage prep is converting titles into outcomes — \"Class Chairperson\" becomes \"changed the way our class handled library returns and got overdue rates from 12 to 2 per month.\"",
            },
            {
              en: "Confirm CCA records at primary school are accurate. MOE pulls CCA participation, leadership positions, Uniformed Group ranks, school awards, community-service hours, and competition or campaign results into the DSA portal. Ask the CCA teacher or year-head to verify what's been logged — for Leadership candidates, incomplete records are especially costly.",
            },
            {
              en: "Run two mock group activities. Recruit four or five children of similar age, give them a problem (\"plan a year-end celebration with a $200 budget\"), set a 30-minute timer, and watch. The first run surfaces what your child does under pressure; the second lets them try a different role. Most candidates default to either over-talking or under-talking; the goal is the middle band — listen, propose, credit.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Stop adding new portfolio entries. Anything you add in the final week reads as panic. Spend the time refining the three core entries — sharpen each from a paragraph to four sentences. Brevity with specificity outperforms a longer narrative every time.",
            },
            {
              en: "Confirm logistics in writing. Time, venue, whether the group activity is in-person or virtual, what to bring (a printed portfolio, an ID, sometimes a CCA passbook for Uniformed Group candidates). Email the school office to confirm anything ambiguous.",
            },
            {
              en: "One mock interview with an unfamiliar adult. The interview is where many Leadership candidates fail by sounding rehearsed. Have your child be interviewed by a relative or a teacher's friend who hasn't heard the answers before — the unfamiliar listener forces real conversation instead of recitation.",
            },
          ],
        },
        {
          label: { en: "Day of selection" },
          items: [
            {
              en: "Light breakfast 90 minutes before. The group activity plus interview can run 90–120 minutes; sugar crashes are visible. Bring water and the printed portfolio in a clean folder.",
            },
            {
              en: "Drop off, don't hover. Greet the coordinator, leave. For Leadership candidates particularly, parents seen organising in the lobby read as the wrong signal. Trust the child to walk in alone.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What did your group decide?\" — give the child space to share without interrogation. Reviewing what went wrong waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — application in, selection coming up, no clear preparation plan — there are still real moves. Don't try to manufacture new leadership experiences. Instead, take the three commitments your child has actually held and rewrite each into a four-sentence story: situation, what they did, what changed, what they learned. The single highest-leverage prep is converting titles into specific outcomes — and that's editing work, not new experience. For the group activity, run two mock sessions at home with siblings or cousins as participants; the goal is practising the listen-then-propose habit, not solving the problem. For the interview, rehearse three of the questions above out loud. Some families consider a private interview coach at this stage. A good coach can sharpen story specificity and remove generic phrasing — but no coach produces, in three sessions, the years of actual service that build a portfolio. Treat it as triage, not a fix.",
      },
    },
  },
  volleyball: {
    slug: "volleyball",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Volleyball", zh: "排球", ms: "Bola Tampar", ta: "கைப்பந்து" },
    hook: {
      en: "Volleyball DSA — trials reward platform habits, not raw spike power.",
      zh: "排球 DSA——trial 奖励垫球习惯，不是单纯扣球力量",
      ms: "DSA Bola Tampar — trial menghargai tabiat pasing, bukan kuasa mentah.",
      ta: "கைப்பந்து DSA — சோதனை வழக்கமான பாஸ் திறமைகளை மதிக்கிறது, மூல சக்தியை அல்ல.",
    },
    intro: {
      en: "Singapore school volleyball trials assess far more than how hard a P6 player can spike. Coaches watch the platform on the first contact, footwork to the ball, and whether the trialist can read where the set is going. Height helps but is not destiny at twelve. Here's what trials actually weigh.",
      zh: "新加坡中学排球 trial 看的不只是 P6 球员能扣多重。教练看第一手垫球的板面、跑位脚步、以及能否读出二传的方向。身高有用，但 12 岁不是决定性因素。Trial 真正的权重在哪。",
      ms: "Jurulatih trial bola tampar menilai lebih daripada kuasa mentah pukulan keras. Mereka melihat platform pasing, pergerakan kaki ke bola, dan keupayaan membaca arah pasing kedua.",
      ta: "சிங்கப்பூர் கைப்பந்து சோதனைகள் வீச்சு சக்திக்கு அப்பால் — முதல் தொடுதலின் platform, பந்துக்கு கால் நகர்வு, செட் எங்கு செல்கிறது என்பதைப் படிக்கும் திறன் ஆகியவற்றை மதிப்பிடுகின்றன.",
    },
    summary: {
      en: "Trial structure, position-specific habits, interview questions, NSG-active schools across boys' and girls' divisions.",
      zh: "Trial 流程、位置专项习惯、面试题、男女队 NSG 活跃学校。",
      ms: "Struktur trial, tabiat khusus posisi, soalan temu duga, sekolah aktif NSG.",
      ta: "சோதனை அமைப்பு, நிலை சார்ந்த பழக்கங்கள், கேள்விகள், NSG பள்ளிகள்.",
    },
    sampleSchools: [
      "Dunman High School",
      "Hwa Chong Institution",
      "Anglo-Chinese School (Independent)",
      "Raffles Girls' School (Secondary)",
      "Nanyang Girls' High School",
      "Cedar Girls' Secondary School",
    ],
    metaDescription: {
      en: "Volleyball DSA-Sec trial guide for Singapore P6 — what coaches assess, position-specific drills, sample interview questions, NSG-active participating schools.",
      zh: "新加坡 P6 排球 DSA-Sec trial 指南——教练评分维度、位置专项、面试题、NSG 活跃招生学校。",
      ms: "Panduan trial DSA-Sec Bola Tampar Singapura — apa jurulatih nilai, latihan posisi, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 கைப்பந்து DSA-Sec வழிகாட்டி — சோதனை அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore volleyball trials typically run 90–120 minutes and are led by the school's head volleyball coach (often VAS-licensed) plus the teacher-in-charge of Sports. The standard structure: warm-up and footwork, technical stations (passing platforms, setting, hitting approach, serving), and a small-sided game on a half court. Height is checked but rarely decisive at P6 — bodies are still growing — so coaches lean on the six habit-based dimensions below, drawn from the FIVB youth coaching framework and parent reports across NSG-active schools.",
      },
      trialDimensions: [
        {
          label: { en: "Platform consistency on the first contact" },
          body: {
            en: "Coaches feed passes deliberately — short, deep, off-angle — and watch whether the trialist forms a stable platform with locked elbows and angled to the target. P6 players who can pass ten balls to a 1-metre target zone score meaningfully higher than one with a stronger spike but poor reception. The first contact is the rally; everything after depends on it.",
          },
        },
        {
          label: { en: "Footwork to the ball" },
          body: {
            en: "Whether the player moves their feet to get behind the ball or reaches with the arms is the cheapest tell of a coached versus untrained player. Coaches deliberately feed balls just outside reach to test recovery and shuffle steps. Active footwork — small shuffles, ready position between every ball — is scored heavily because it predicts how quickly the player will pick up rotational play in CCA.",
          },
        },
        {
          label: { en: "Setting touch and decision-making" },
          body: {
            en: "Even non-setter candidates get tested on hand-setting form. Coaches look for soft hands (no slap-finger contact), shoulders square to target, and whether the set's height matches the situation. The decision-making layer — does the trialist set high to a struggling teammate or quick to the strongest hitter — separates court-aware players from technically clean but rigid ones.",
          },
        },
        {
          label: { en: "Approach footwork and spike timing" },
          body: {
            en: "Spike approach is typically a three-step or four-step pattern. Coaches watch whether the trialist times the jump to a high point on the set, swings with full extension, and lands balanced (not falling into the net or away from the play). A clean approach with mediocre power scores higher than wild swings that occasionally produce a kill — the approach is what coaches will build height onto over four years.",
          },
        },
        {
          label: { en: "Serving under pressure" },
          body: {
            en: "Most schools require both an underhand and an overhand (float) serve in the trial; some test jump serves. Coaches focus on whether the serve goes in 8 out of 10 attempts at a target zone — not on raw pace. A reliable underhand serve at P6 is more valuable to a school's NSG team than an inconsistent overhand bomb. Late-trial fatigue tests serving discipline specifically.",
          },
        },
        {
          label: { en: "Coachability and bench behaviour" },
          body: {
            en: "How the trialist behaves between drills, whether they rotate balls back to the coach, encourage a partner who shanked a pass, and accept immediate corrections without sulking. International coaching research consistently rates these signals 10/10 by elite youth coaches — and Singapore school coaches, who'll work with this child for four years, weight them heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Setter" },
          body: {
            en: "The position most undersold at P6 because spikes are visible and sets are not. Coaches look for soft hands, consistent set location (about 30 cm inside the antenna, half a metre above the net), and whether the trialist looks at the blockers before deciding where to set. A setter who hides behind the trialist taking a free ball and offers a quick option to the middle outscores one who only sets the outside.",
          },
        },
        {
          position: { en: "Outside hitter / Opposite" },
          body: {
            en: "The most-recruited position because every team needs reliable left-side and right-side hitters. Approach footwork is the headline — coaches will trade some height for clean three-step or four-step timing. Coaches also watch the hitter's recovery to the back row for defensive rotations; outside hitters who don't dig in the back row are read as a coaching problem in waiting.",
          },
        },
        {
          position: { en: "Middle blocker" },
          body: {
            en: "Height matters most here but is not the only signal. Coaches look at jump timing on quick sets, lateral footwork along the net, and reading the opposing setter's eyes. A 1.65 m middle who reads the setter beats a 1.75 m middle who guesses. Blocking technique — sealed hands, penetrating fingers — is checked but coachable; reading is the harder skill.",
          },
        },
        {
          position: { en: "Libero / Defensive specialist" },
          body: {
            en: "The position where the platform-on-first-contact dimension matters most. Coaches focus on serve-receive consistency in a service-target drill, low ready-position stance, and willingness to dig dives. Liberos are often shorter players with exceptional reads; coaches who run a libero-led system will fast-track an undersized P6 with reliable platform skills over a taller but inconsistent receiver.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school volleyball at P6 trial level usually does not lock a player to one position — coaches assess versatility across two or three roles. If your child plays multiple positions reasonably, mention all of them in the trial; the school's existing roster balance often drives which position recruits a specific candidate.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love volleyball?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like spiking\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete memory — a match, a teammate, a turning point — then connect it to character.",
          },
          template: {
            en: "We lost the inter-class final in P5 because I shanked the last serve receive. That night I asked my coach what I should have done differently — that was the first time I cared more about the platform than the kill.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the volleyball programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's volleyball — a coach's name, an NSG result, a training pattern.",
          },
          template: {
            en: "Dunman High's volleyball programme trains four times a week and has produced national-team players. That's the volume I want from Sec 1.",
          },
        },
        {
          question: { en: "What position do you play and why?" },
          subtext: {
            en: "Can the kid articulate the role, not just label it?",
          },
          approach: {
            en: "Name the position plus the job.",
          },
          template: {
            en: "Outside hitter — my job is converting the high ball when the setter is in trouble and digging in the back row when we're not on offence. I like the position because you're always in the play.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I missed my P5 school team after the first trial. I went to a Saturday morning club, drilled platforms for ten weeks straight, and made the team next round. I played setter at zonals.",
          },
        },
        {
          question: { en: "Is there a teammate or coach you remember most?" },
          subtext: {
            en: "Whether the kid sees teammates as people or background.",
          },
          approach: {
            en: "Name someone specific by role + what you learned from them.",
          },
          template: {
            en: "Our P6 captain made me serve 50 times after every practice — overhand, into a 1-square-metre zone. I missed most of them at first. By NSG my serve was the most reliable in the team. He taught me that a habit beats a highlight.",
          },
        },
        {
          question: { en: "How do you manage time with frequent trainings?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I do English and Math homework on the bus to training and finish Science before dinner. I keep Sundays for revision. My coach asks for my report book every term — that's a real system, not just willpower.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your coach's emphasis on serve-receive matches how I think about the game. If the other school called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Volleyball (Boys and Girls), IP / DSA-Sec" },
          context: {
            en: "SAP and Bicultural Studies school. Volleyball is listed in Dunman High's 2026 DSA FAQ for both boys' and girls' divisions. Consistent NSG B-Division presence.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Volleyball (Boys), IP" },
          context: {
            en: "IP school with established boys' volleyball CCA. Volleyball listed among HCI's published DSA talent areas. Sustained NSG A-Division participation.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Volleyball (Boys), IP" },
          context: {
            en: "IP school with active boys' volleyball CCA. Regular NSG B-Division and C-Division participation.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/year-1-direct-school-admission/",
          talentArea: { en: "Volleyball (Girls), IP" },
          context: {
            en: "IP school with strong girls' volleyball tradition. Consistent NSG showings across divisions.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Volleyball (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies school. Volleyball among published DSA talent areas. Active girls' volleyball CCA with NSG participation.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/",
          talentArea: { en: "Volleyball (Boys), DSA-Sec" },
          context: {
            en: "SAP school — applicants must offer Chinese Language or Higher Chinese in primary. Active boys' volleyball CCA.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Volleyball, DSA-Sec" },
          context: {
            en: "SAP school. Volleyball among Nan Hua's published talent areas. Higher Chinese / Chinese Language as Mother Tongue requirement applies.",
          },
        },
        {
          name: "Cedar Girls' Secondary School",
          url: "https://www.cedargirlssec.moe.edu.sg/admissions/",
          talentArea: { en: "Volleyball (Girls), DSA-Sec" },
          context: {
            en: "Recognised girls' volleyball CCA with sustained NSG B-Division participation.",
          },
        },
        {
          name: "Xinmin Secondary School",
          url: "https://www.xinminsec.moe.edu.sg/ccas/sports-n-games/volleyball/",
          talentArea: { en: "Volleyball (Boys and Girls), DSA-Sec" },
          context: {
            en: "School with sustained volleyball CCA tradition. Boys' and girls' teams both compete in NSG.",
          },
        },
        {
          name: "Hua Yi Secondary School",
          url: "https://www.huayisec.moe.edu.sg/",
          talentArea: { en: "Volleyball (Boys), DSA-Sec" },
          context: {
            en: "Recognised boys' volleyball CCA. Active NSG B-Division and C-Division participation.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Video-record one full 6-on-6 game. Watch with your child, scoring just two behaviours: (1) what their platform did on the first contact of each rally — clean or jittery? (2) how many times did they get behind the ball with their feet versus reach with their arms? These two are the highest-signal items in volleyball trials.",
            },
            {
              en: "Confirm CCA records at primary school are accurate. MOE pulls CCA participation, school awards, NSG and external competition results, NAPFA, and JSA data into the DSA portal directly. Volleyball-specific external programmes (Volleyball Association of Singapore — VAS — development squads) also feed in. Ask the CCA teacher or year-head to verify what's been logged.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: passing target work, setting form drills, no new approach load. Final-week added jumping rarely pays off and frequently produces a tweak (most commonly Achilles or knee).",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire (most trials require court-appropriate shoes, knee pads, and no jewellery). Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "One scrimmage with strangers. On Singapore parent forums, a recurring observation is that kids underperform at trials because they only pass to teammates they know. Force the awkwardness early — a Saturday club session with unfamiliar players is the cheapest fix.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — not 30. Coaches deliberately push trial past the fatigue threshold and the last 20 minutes is where habits show.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to platform passing and approach footwork. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private volleyball coach at this stage. A good private coach can speed up specific habit changes — particularly the first-contact platform and three-step approach — but no coach produces, in three sessions, the rally consistency of a year of practice. Treat it as triage, not a fix.",
      },
    },
  },
  "table-tennis": {
    slug: "table-tennis",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Table Tennis", zh: "乒乓球", ms: "Ping Pong", ta: "மேசை டென்னிஸ்" },
    hook: {
      en: "Table Tennis DSA — trials reward stroke consistency under pressure, not the loudest forehand loop.",
      zh: "乒乓球 DSA——trial 奖励压力下的稳定击球，不是最响的正手弧圈",
      ms: "DSA Ping Pong — trial menghargai konsistensi pukulan di bawah tekanan, bukan loop hadapan paling kuat.",
      ta: "மேசை டென்னிஸ் DSA — சோதனை அழுத்தத்தின் கீழ் நிலையான அடிகளை மதிக்கிறது, சத்தமான forehand loop-ஐ அல்ல.",
    },
    intro: {
      en: "Singapore school table tennis trials weigh stroke consistency, footwork, and how the trialist reads spin far more heavily than how hard the forehand can hit. Coaches at SAP schools — where table tennis runs deepest — also screen for STTA-sanctioned ranking points and National Age Group results. Height is irrelevant; what matters is whether the player resets after every miss and whether their feet move before their arm does.",
      zh: "新加坡中学乒乓球 trial 看的是击球稳定性、脚步、读旋转能力，远远超过正手力量。SAP 学校（乒乓底蕴最深的一批）的教练还会查 STTA 排名分和 National Age Group 成绩。身高无关紧要——关键是每个失误后能否重置心态，以及脚步是否先于手臂动起来。",
      ms: "Jurulatih trial Ping Pong menilai konsistensi pukulan, pergerakan kaki, dan keupayaan membaca spin jauh lebih tinggi daripada kuasa forehand. Sekolah SAP — yang mempunyai tradisi terdalam — turut menyemak kedudukan STTA dan keputusan National Age Group.",
      ta: "சிங்கப்பூர் மேசை டென்னிஸ் சோதனைகள் அடிப்படை நிலைத்தன்மை, கால் நகர்வு, spin படிக்கும் திறன் ஆகியவற்றை forehand சக்தியை விட அதிகமாக மதிக்கின்றன. SAP பள்ளிகளில் STTA தரவரிசையும் National Age Group முடிவுகளும் பார்க்கப்படுகின்றன.",
    },
    summary: {
      en: "Trial structure, playing-style profiles, interview questions, SAP and IP schools with sustained NSG table tennis programmes.",
      zh: "Trial 流程、打法风格分析、面试题、NSG 持续活跃的 SAP 与 IP 校。",
      ms: "Struktur trial, profil gaya permainan, soalan temu duga, sekolah SAP dan IP yang aktif NSG.",
      ta: "சோதனை அமைப்பு, விளையாட்டு பாணி, கேள்விகள், NSG-இல் தொடர்ச்சியான பள்ளிகள்.",
    },
    sampleSchools: [
      "Dunman High School",
      "Hwa Chong Institution",
      "Nanyang Girls' High School",
      "Nan Hua High School",
      "Catholic High School",
      "River Valley High School",
    ],
    metaDescription: {
      en: "Table Tennis DSA-Sec trial guide for Singapore P6 — what coaches assess, playing-style profiles, sample interview questions, STTA ranking context, participating SAP and IP schools.",
      zh: "新加坡 P6 乒乓球 DSA-Sec trial 指南——教练评分维度、打法分析、面试题、STTA 排名说明、SAP 与 IP 招生学校。",
      ms: "Panduan trial DSA-Sec Ping Pong Singapura — apa jurulatih nilai, profil gaya, soalan, sekolah SAP dan IP peserta.",
      ta: "சிங்கப்பூர் P6 மேசை டென்னிஸ் DSA-Sec வழிகாட்டி — அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore table tennis trials typically run 60–90 minutes and are led by the school's head table-tennis coach (often STTA-licensed) plus the teacher-in-charge of Sports. The standard structure: warm-up rally, multi-ball feeding stations (forehand drive, backhand drive, push, loop against backspin, block against loop), service-and-receive sequence, then short games or scrimmage to the school's top junior players. Coaches lean on the six dimensions below, drawn from the ITTF and STTA youth coaching frameworks and parent reports across SAP and IP schools.",
      },
      trialDimensions: [
        {
          label: { en: "Stroke consistency under multi-ball" },
          body: {
            en: "Coaches feed 30–50 balls in a row to one corner and watch how long the trialist can keep the stroke shape — same swing length, same contact point, same recovery position. Players who can hold form past ball 20 score meaningfully higher than ones who hit harder for the first ten and break down. Multi-ball is where untrained power exposes itself.",
          },
        },
        {
          label: { en: "Footwork pattern and recovery to ready position" },
          body: {
            en: "Whether the trialist moves with side-shuffles or crosses over, whether they return to neutral between every ball, and whether the upper body stays compact — these are the cheapest tells of a coached versus self-taught player. Coaches feed wide-angle balls deliberately to test recovery. Active feet — small steps, ready stance reset every ball — predict how fast the player will pick up two-step and cross-step patterns in CCA training.",
          },
        },
        {
          label: { en: "Reading spin on service receive" },
          body: {
            en: "The single highest-signal moment of a P6 trial. Coaches serve heavy backspin, sidespin, and no-spin in rotation. A player who reads the spin from the contact (racket angle, swing direction) and adjusts the push or flick scores far higher than one who consistently chops every serve into the net or off the table. Reading service spin is the skill that scales — it's coachable, but P6 candidates who already have it signal sustained quality coaching.",
          },
        },
        {
          label: { en: "Rally tempo control and ball placement" },
          body: {
            en: "Can the trialist mix speed and spin, or do they only have one gear? Coaches stage drills where the candidate must alternate slow loop, fast drive, and short push within the same rally. Placement also matters — wide angle to the opponent's elbow scores higher than dead-centre balls of any pace. A P6 with three usable tempos and an awareness of wide-elbow targeting is a four-year project, not a finished player.",
          },
        },
        {
          label: { en: "Service quality and variation" },
          body: {
            en: "Most schools require both forehand and backhand serves, with at least two spin variations each. Coaches focus on contact deception (low toss is required by ITTF rules — minimum 16 cm — and Singapore schools enforce it strictly) and whether the serve lands short with backspin or long with sidespin on demand. A reliable short backspin serve at P6 is more useful to a school's NSG team than an inconsistent flicked sidespin. Late-trial fatigue tests serve discipline specifically.",
          },
        },
        {
          label: { en: "Coachability and table behaviour" },
          body: {
            en: "How the trialist behaves between drills, whether they pick up balls without being asked, encourage a partner who missed a return, and accept immediate corrections without sulking. International youth coaching research consistently rates these signals among the top predictors of long-term improvement — and Singapore school coaches, who'll work with this child for four years across NSG B and A divisions, weight them heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Shakehand attacker (two-winged looper)" },
          body: {
            en: "The dominant modern style globally and the one most Singapore school coaches default to. Coaches look for a forehand loop with the body — legs and core driving the swing, not just the arm — plus a backhand loop or counter that can hold rallies. P6 candidates with clean two-winged shape outscore one-sided forehand hitters in trial scoring, because backhand-weak players have no answer when middle-block coaches feed wide to the backhand.",
          },
        },
        {
          position: { en: "Penhold attacker (traditional or reverse penhold backhand)" },
          body: {
            en: "Once dominant in the region, still seen at SAP schools where Chinese coaching lineage runs strong. Coaches assess the forehand drive's body mechanics and — crucially — whether the player can produce a backhand. Reverse penhold backhand (RPB) candidates are flagged as advanced. Pure traditional-penhold players without a working backhand are scored down because modern school table tennis demands a two-winged answer.",
          },
        },
        {
          position: { en: "Defensive chopper" },
          body: {
            en: "The rarest profile and one a school coach will fast-track if they don't already have one on the team. Coaches assess long-pip or anti-spin racket use, the chop stroke's consistency at distance, and whether the player can pivot to a counter-attack when the opponent loops short. A P6 defensive chopper with reliable forehand-corner attack is a unique asset because most opposing players at NSG B-Division have never trained against the style.",
          },
        },
        {
          position: { en: "Doubles specialist (rotation discipline)" },
          body: {
            en: "Singapore school table tennis NSG includes both singles and doubles events, and doubles points carry equal weight in team scoring. Coaches assess whether the trialist moves out of the way after their stroke (rotation discipline), communicates with the partner (call shots, signal serves), and adjusts shot selection for the partner's strengths. A P6 who plays singles well but freezes their partner's space in doubles is a coaching project, not an immediate asset.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school table tennis at P6 trial level usually does not lock a player to one style — coaches assess whether the existing shape is clean enough to refine rather than rebuild. If your child has trained primarily under one style, mention it explicitly; the school's existing roster (and head coach's stylistic preference) often drives which candidates fit.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love table tennis?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like winning\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete memory — a match, a coach moment, a specific stroke — then connect it to character.",
          },
          template: {
            en: "I lost the inter-school P5 quarter-final 11-9 in the deciding game because I missed a short push receive. That night I asked my coach to feed me short backspin for an hour. The next month I won the same opponent 3-1. That was when I learned the small skills win the big points.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the table-tennis programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's table tennis — a coach's name, a recent NSG result, a training pattern.",
          },
          template: {
            en: "Dunman High's table tennis trains four times a week and the SAP environment means I can keep my Higher Chinese alongside competitive training. That combination is rare.",
          },
        },
        {
          question: { en: "What is your playing style and why?" },
          subtext: {
            en: "Can the kid articulate the style, not just label it?",
          },
          approach: {
            en: "Name the style plus what it requires from you.",
          },
          template: {
            en: "Shakehand two-winged attacker. My job is to open with a forehand loop off any push and stay in the rally with backhand counters. I picked it because my coach said my legs are stronger than my wrist, and the style rewards leg drive more than wrist flick.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I was knocked out in the first round of STTA Age Group last year because I couldn't read sidespin serves. I spent eight Saturdays at the club only practising serve receive against three different sidespin players. At the next tournament I made the round of 16.",
          },
        },
        {
          question: { en: "Is there a coach or training partner you remember most?" },
          subtext: {
            en: "Whether the kid sees coaching as a relationship or a transaction.",
          },
          approach: {
            en: "Name someone specific by role + what you learned from them.",
          },
          template: {
            en: "My P5 club coach made me serve 100 short backspins every session before any rally drill. I hated it at first because I wanted to play games. Now my short-backspin serve is the most consistent part of my game. He taught me that the boring repetition is where the matches are actually won.",
          },
        },
        {
          question: { en: "How do you manage time with frequent trainings?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I finish English and Math homework before training because I'm too tired after. Science I do on weekends. My mother holds the report book and shows my coach every term — if my grades slip, I miss training that week. That's the rule we set together.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your head coach's emphasis on backhand opening matches how I want to develop. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Table Tennis (Boys and Girls), IP / DSA-Sec" },
          context: {
            en: "SAP and Bicultural Studies school. Table tennis is listed in Dunman High's 2026 DSA FAQ for both boys' and girls' divisions. Strong CCA tradition with regular NSG A-Division participation.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Table Tennis (Boys), IP" },
          context: {
            en: "IP school with established boys' table tennis CCA. Among HCI's published DSA talent areas. Consistent NSG A-Division presence.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Table Tennis (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies school. Table tennis among NYGH's published DSA talent areas. Active girls' CCA with sustained NSG presence.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Table Tennis, DSA-Sec" },
          context: {
            en: "SAP school. Table tennis among Nan Hua's published talent areas. Higher Chinese / Chinese Language as Mother Tongue requirement applies.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/",
          talentArea: { en: "Table Tennis (Boys), DSA-Sec" },
          context: {
            en: "SAP school — applicants must offer Chinese Language or Higher Chinese in primary. Active boys' table tennis CCA with sustained NSG participation.",
          },
        },
        {
          name: "River Valley High School",
          url: "https://www.rivervalleyhigh.moe.edu.sg/",
          talentArea: { en: "Table Tennis (Boys and Girls), IP / DSA-Sec" },
          context: {
            en: "SAP school with Bicultural Studies. Table tennis among RVHS's recognised talent areas. Strong NSG presence in both boys' and girls' divisions.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/dsa-sec",
          talentArea: { en: "Table Tennis (Boys), IP" },
          context: {
            en: "IP school with boys' table tennis CCA. Sustained NSG A-Division participation. RI publishes annual DSA talent areas; table tennis has appeared consistently.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Table Tennis (Boys), IP" },
          context: {
            en: "IP school with established boys' table tennis CCA. Regular NSG B-Division and A-Division participation.",
          },
        },
        {
          name: "Chung Cheng High School (Main)",
          url: "https://www.cchms.moe.edu.sg/",
          talentArea: { en: "Table Tennis (Boys and Girls), DSA-Sec" },
          context: {
            en: "SAP school with Bicultural Studies. Strong table tennis tradition; sustained NSG B- and C-Division participation across boys' and girls' teams.",
          },
        },
        {
          name: "Maris Stella High School",
          url: "https://www.marisstellahigh.moe.edu.sg/",
          talentArea: { en: "Table Tennis (Boys), DSA-Sec" },
          context: {
            en: "SAP school. Boys' table tennis CCA with consistent NSG appearances. Higher Chinese / Chinese Language as Mother Tongue requirement applies.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Video-record one full multi-ball training session. Watch with your child, scoring just two behaviours: (1) at ball 25, does the stroke still look like ball 5? (2) does the player return to neutral ready position between each ball, or drift sideways? These two are the highest-signal items in table tennis trials.",
            },
            {
              en: "Confirm STTA ranking and CCA records are accurate. MOE pulls CCA participation, school awards, STTA-sanctioned tournament results, and NAPFA into the DSA portal directly. Ask the CCA teacher or year-head to verify what's been logged.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: serve-and-receive drills, light multi-ball, no new technical work. Final-week stroke changes rarely pay off and frequently break form on trial day.",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire (most trials require non-marking indoor shoes and school PE attire or club kit). Bring the player's own racket — schools do not supply equipment. Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "One scrimmage with strangers. On Singapore parent forums, a recurring observation is that kids underperform at trials because they only play partners they know. Force the awkwardness early — a Saturday club open session with unfamiliar opponents is the cheapest fix.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — not 30. Coaches deliberately push trial past the fatigue threshold and the last 15 minutes is where strokes break down.",
            },
            {
              en: "Bring two rackets. A loose rubber or a broken sponge mid-trial is one of the few logistical failures that ends a P6 trial early — the 30-cent fix is having a backup.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to two things only: short backspin serve and forehand-corner footwork recovery. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private table-tennis coach at this stage. A good private coach can speed up specific habit changes — particularly serve disguise and footwork patterns — but no coach produces, in three sessions, the stroke consistency of a year of multi-ball drills. Treat it as triage, not a fix.",
      },
    },
  },
  netball: {
    slug: "netball",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Netball", zh: "投球", ms: "Bola Jaring", ta: "நெட்பால்" },
    hook: {
      en: "Netball DSA — trials reward footwork discipline and court vision, not just the shooter who can score from the goal circle.",
      zh: "投球 DSA——trial 奖励脚步纪律和场上视野，不只看进球能力",
      ms: "DSA Bola Jaring — trial menghargai disiplin pergerakan kaki dan penglihatan padang, bukan hanya kebolehan menjaringkan.",
      ta: "நெட்பால் DSA — சோதனை கால் நகர்வு ஒழுக்கத்தையும் கள பார்வையையும் மதிக்கிறது, பந்து போடும் திறமையை மட்டுமே அல்ல.",
    },
    intro: {
      en: "Netball is one of the most competitive girls' sports in Singapore secondary schools, with about 50 schools offering DSA in the talent and 81 with active netball CCAs. Singapore school trials weigh footwork (no running with the ball — every step counts), passing under pressure, court awareness across the seven positions, and how the trialist reads space. Height matters for shooter and defender roles but is not destiny at twelve. Here's what trials actually weigh.",
      zh: "投球是新加坡中学最竞争激烈的女子运动之一——约 50 所学校 DSA 招收，81 所有活跃投球 CCA。中学 trial 看的是脚步（持球不能跑——每一步都被裁判数）、压力下的传球、七个位置的场上意识、读空间能力。身高对射手和后卫位置有用，但 12 岁不是决定性因素。",
      ms: "Bola jaring antara sukan perempuan paling kompetitif di sekolah menengah Singapura. Trial menilai disiplin pergerakan kaki, hantaran di bawah tekanan, kesedaran padang tujuh posisi, dan pembacaan ruang.",
      ta: "சிங்கப்பூர் இடைநிலைப் பள்ளிகளில் நெட்பால் மிகவும் போட்டித் தன்மை கொண்ட பெண்கள் விளையாட்டு. சோதனை கால் நகர்வு ஒழுக்கம், அழுத்தத்தில் பாஸ், ஏழு நிலைகளில் கள விழிப்புணர்வை மதிப்பிடுகிறது.",
    },
    summary: {
      en: "Trial structure, seven-position profiles, interview questions, NSG-active girls' schools with strong netball programmes.",
      zh: "Trial 流程、七位置分析、面试题、NSG 活跃女校。",
      ms: "Struktur trial, profil tujuh posisi, soalan temu duga, sekolah perempuan aktif NSG.",
      ta: "சோதனை அமைப்பு, ஏழு நிலைகள், கேள்விகள், NSG பெண்கள் பள்ளிகள்.",
    },
    sampleSchools: [
      "Methodist Girls' School (Secondary)",
      "Raffles Girls' School (Secondary)",
      "Singapore Chinese Girls' School",
      "Nanyang Girls' High School",
      "Cedar Girls' Secondary School",
      "CHIJ St. Nicholas Girls' School",
    ],
    metaDescription: {
      en: "Netball DSA-Sec trial guide for Singapore P6 — what coaches assess across seven positions, footwork rules, sample interview questions, NSG-active participating girls' schools.",
      zh: "新加坡 P6 投球 DSA-Sec trial 指南——七位置评分、脚步规则、面试题、NSG 活跃女校。",
      ms: "Panduan trial DSA-Sec Bola Jaring Singapura — apa jurulatih nilai, posisi, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 நெட்பால் DSA-Sec வழிகாட்டி — அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore netball trials typically run 90–120 minutes and are led by the school's head netball coach (often Netball Singapore-accredited) plus the teacher-in-charge of Sports. The standard structure: dynamic warm-up, footwork stations (landing one-foot vs two-foot, pivoting without lifting the planted foot), passing-pair drills (chest, shoulder, bounce, overhead), shooting from the goal circle, then small-sided games — often four-a-side on a quarter court — across rotated positions. Coaches lean on the six dimensions below, drawn from the INF / Netball Singapore youth coaching framework and parent reports across NSG-active girls' schools.",
      },
      trialDimensions: [
        {
          label: { en: "Landing and pivoting discipline" },
          body: {
            en: "Netball's defining rule is that the player cannot move the landed foot — so coaches deliberately feed passes that force a one-foot landing in awkward angles and watch whether the planted foot stays anchored during the pivot. A P6 trialist who lifts the foot mid-pivot (a footwork infringement) on more than 2 of 10 feeds will struggle in any game scenario. Coaches score this far higher than raw athleticism because the rule cannot be hidden — every coach and every umpire will see it.",
          },
        },
        {
          label: { en: "Passing speed and accuracy under defensive pressure" },
          body: {
            en: "Coaches stage passing pairs at 3–5 metre intervals with a defender's arm-length pressure, then progress to triangle drills with two passers and one mover. They look for a flat, fast chest pass to the receiver's outside hand, accurate bounce passes around defenders, and shoulder passes for longer distance. The signal here is consistency under the three-second held-ball rule — coaches count one-thousand-two and watch whether the trialist panics or finds the next option.",
          },
        },
        {
          label: { en: "Movement off the ball and dodging to receive" },
          body: {
            en: "Whether the player shows for the ball (a clear cut, hand presented to the passer) or stands still is the cheapest tell of court awareness. Coaches especially watch the lead-and-change move — a quick step toward the ball, then a sharp change of direction to the open space. A P6 who can dodge to lose her defender and present a strong target three out of five times scores high; one who waits in place even when the team has stalled is read as a coaching project.",
          },
        },
        {
          label: { en: "Shooting under fatigue (goal shooter / goal attack only)" },
          body: {
            en: "If the trialist plays the two shooting positions, coaches run shooting sets — usually 10–20 attempts from inside the goal circle — and then repeat the sequence after a sprint drill. Reliable form under the second set, not the first, is what separates a school-team shooter from a primary-school star. Coaches accept slightly lower accuracy on the second set; they're looking for the same shooting form, not the same percentage.",
          },
        },
        {
          label: { en: "Defensive timing and intercept reading" },
          body: {
            en: "For goal keeper, goal defence, wing defence, and centre, coaches assess defensive arms (the 0.9-metre obstruction distance is enforced strictly) and whether the trialist can read the passer's eyes to anticipate the pass before it leaves the hand. An intercept in trial is heavily weighted — but coaches also score the near-misses where the timing was right but the lane was off, because timing is harder to coach than positioning.",
          },
        },
        {
          label: { en: "Coachability and bench behaviour" },
          body: {
            en: "How the trialist behaves between drills, whether she rotates back to the line without prompting, encourages a partner who shanked a pass, and accepts immediate corrections without sulking. International youth coaching research consistently rates these signals 10/10 by elite youth coaches — and Singapore school coaches, who'll work with this girl for four years across NSG B and A divisions, weight them heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Goal Shooter / Goal Attack" },
          body: {
            en: "The two positions that can score, and the only positions allowed inside the goal circle from the attacking end. Coaches look for a balanced shooting stance (feet shoulder-width, ball above forehead, follow-through to the rim), the ability to back-into a defender, and — for goal attack — the work rate to move between the centre third and goal circle without losing the shooting touch. A P6 shooter who scores 7 of 10 from close range with one cue beats one who scores 9 of 10 from one set spot.",
          },
        },
        {
          position: { en: "Wing Attack / Centre" },
          body: {
            en: "The court's engine room. Centre is the only player allowed in all three thirds (except goal circles); wing attack feeds the shooters and starts most attacking moves. Coaches assess speed across the court (transition pace from defensive third to attacking third), passing-vision (looking before receiving), and the cooperation pattern with the goal attack. Centre players also take the centre pass after every goal — the timing of that initial cut is a recurring trial test.",
          },
        },
        {
          position: { en: "Wing Defence / Goal Defence" },
          body: {
            en: "The mid-court and defending shooters' main support. Wing defence shadows the opposing wing attack — assessment focuses on staying close without obstructing (the 0.9-metre rule), arms up on every pass, and quick recovery to the centre line. Goal defence must defend both the centre court (helping wing defence) and the goal circle (pressuring the goal attack's shot). Coaches look for stamina — these positions cover the most ground per minute on the court.",
          },
        },
        {
          position: { en: "Goal Keeper" },
          body: {
            en: "Specialist position; height helps but reach and timing matter more. Coaches assess shot-rebounding (catching the ball off the goal post or ring after a missed shot), defensive arms inside the goal circle, and the reset pass to the goal defence to start the counter-attack. A goal keeper who panics with the ball — taking the held-ball penalty — costs the team possession; coaches especially watch the goal keeper's first decision with the ball.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school netball at P6 trial level usually does not lock a player to one position — coaches assess versatility across the seven positions. If your daughter has played two or three positions reasonably well in primary school, mention all of them in the trial; the school's existing roster balance (and graduating cohort gaps) often drives which position recruits a specific candidate.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love netball?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like sports\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete memory — a match, a teammate, a turning point — then connect it to character.",
          },
          template: {
            en: "We lost the zonals semi-final by one goal because I missed a centre pass cut. That night I asked my coach what I should have done differently — that was the first time I cared more about the timing of my cut than whether I scored.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the netball programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's netball — a coach's name, an NSG result, a training pattern.",
          },
          template: {
            en: "MGS has been an A-Division top school for years and trains four times a week from Sec 1. That's the volume I want from the start. The Methodist heritage also matches what we look for in a school community.",
          },
        },
        {
          question: { en: "What position do you play and why?" },
          subtext: {
            en: "Can the kid articulate the role, not just label it?",
          },
          approach: {
            en: "Name the position plus the job.",
          },
          template: {
            en: "Wing attack. My job is to feed the shooter from the edge of the goal circle and read where the goal attack will be before she cuts. I like the position because every attacking move runs through me, so I always have to be thinking one pass ahead.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I got a footwork infringement three times in one quarter at zonals. The next Saturday I spent the whole club session on one-foot landings — just landing and pivoting, no passing. By the next tournament I had zero footwork calls in three games.",
          },
        },
        {
          question: { en: "Is there a teammate or coach you remember most?" },
          subtext: {
            en: "Whether the kid sees teammates as people or background.",
          },
          approach: {
            en: "Name someone specific by role + what you learned from them.",
          },
          template: {
            en: "Our P6 centre always called my name before she passed, even when I wasn't expecting the ball. It made me realise good court vision means making your teammates' decisions easier, not just your own. I try to do the same for my goal shooter now.",
          },
        },
        {
          question: { en: "How do you manage time with frequent trainings?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I finish English and Math homework on the bus to training and complete Science before dinner. Sunday is for revision and family. My mother and I review my report book every term — if any subject drops a band, we cut one extra training. That's the rule we set together.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your head coach's emphasis on dodging to receive matches how I want to develop as a wing attack. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.moe.edu.sg/secondary/admissions/dsa-sec1/",
          talentArea: { en: "Netball (Girls), DSA-Sec" },
          context: {
            en: "Among Singapore's most decorated school netball programmes. Multi-year NSG A-Division top finisher. Netball is among MGS's published DSA talent areas with a dedicated CCA page describing training pattern and coaching staff.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
          talentArea: { en: "Netball (Girls), IP" },
          context: {
            en: "IP school with sustained NSG A-Division presence. Netball among RGS's recognised DSA talent areas. Strong technical coaching across all seven positions.",
          },
        },
        {
          name: "Singapore Chinese Girls' School",
          url: "https://www.scgs.moe.edu.sg/prospective-students/secondary-admission/direct-school-admission/",
          talentArea: { en: "Netball (Girls), DSA-Sec" },
          context: {
            en: "SAP school. Netball among SCGS's published DSA talent areas in the 2026 DSA Infosheet. Active NSG B- and A-Division participation.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Netball (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies school. Netball among NYGH's recognised talent areas. NSG-active across divisions.",
          },
        },
        {
          name: "Cedar Girls' Secondary School",
          url: "https://www.cedargirlssec.moe.edu.sg/admissions/",
          talentArea: { en: "Netball (Girls), IP / DSA-Sec" },
          context: {
            en: "Established girls' school with strong netball CCA. Cedar IP and O Level both list netball as a DSA talent area. Regular NSG B-Division and A-Division presence.",
          },
        },
        {
          name: "CHIJ St. Nicholas Girls' School",
          url: "https://stnicholasgirls.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Netball (Girls), IP / DSA-Sec" },
          context: {
            en: "SAP school. CHIJ St. Nick's IP and O Level both list netball as a DSA talent area. Sustained NSG presence across divisions.",
          },
        },
        {
          name: "Paya Lebar Methodist Girls' School (Secondary)",
          url: "https://www.plmgss.moe.edu.sg/",
          talentArea: { en: "Netball (Girls), DSA-Sec" },
          context: {
            en: "Methodist heritage girls' school with active netball CCA. NSG B- and C-Division participation across recent years.",
          },
        },
        {
          name: "Crescent Girls' School",
          url: "https://www.crescent.moe.edu.sg/",
          talentArea: { en: "Netball (Girls), DSA-Sec" },
          context: {
            en: "Girls' school with sustained netball CCA tradition. Regular NSG B-Division participation.",
          },
        },
        {
          name: "St. Margaret's Secondary School",
          url: "https://www.stmargaretssec.moe.edu.sg/",
          talentArea: { en: "Netball (Girls), DSA-Sec" },
          context: {
            en: "Anglican heritage girls' school. Netball among recognised CCAs with regular NSG B- and C-Division appearances.",
          },
        },
        {
          name: "CHIJ Secondary (Toa Payoh)",
          url: "https://chijsectoapayoh.moe.edu.sg/",
          talentArea: { en: "Netball (Girls), DSA-Sec" },
          context: {
            en: "CHIJ girls' school with active netball CCA. Sustained NSG B- and C-Division presence.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Video-record one full 7-a-side game. Watch with your daughter, scoring just two behaviours: (1) how many times did she lift her planted foot during a pivot? (2) on every received pass, did she present a target hand before the ball left the passer? These two are the highest-signal items in netball trials.",
            },
            {
              en: "Confirm CCA records at primary school are accurate. MOE pulls CCA participation, school awards, NSG and external competition results, NAPFA, and JSA data into the DSA portal directly. Netball Singapore club programmes also feed in. Ask the CCA teacher or year-head to verify what's been logged.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: footwork drills, passing-pair work, light shooting, no new conditioning load. Final-week added jumping rarely pays off and frequently produces a tweak (most commonly ankle).",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire (most trials require court-appropriate non-marking shoes, school PE attire or club kit, no jewellery — earrings must come out, not be taped). Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "One scrimmage with strangers. On Singapore parent forums, a recurring observation is that girls underperform at trials because they only pass to teammates they know. Force the awkwardness early — a Saturday club open session with unfamiliar players is the cheapest fix.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — not 30. Coaches deliberately push trial past the fatigue threshold and the last 20 minutes is where footwork breaks down (lifted pivots, slow lead-and-change).",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to two things only: landing-and-pivot discipline (no foot lift) and lead-and-change to present a target hand. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private netball coach at this stage. A good private coach can speed up specific habit changes — particularly footwork rules and passing form — but no coach produces, in three sessions, the court awareness of a year of game play. Treat it as triage, not a fix.",
      },
    },
  },
  floorball: {
    slug: "floorball",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Floorball", zh: "旱地冰球", ms: "Floorball", ta: "புளோர்பால்" },
    hook: {
      en: "Floorball DSA — trials reward stick-skill consistency and defensive transition, not just how hard the shot rips.",
      zh: "旱地冰球 DSA——trial 奖励持杆稳定性和防守转换，不只看射门力量",
      ms: "DSA Floorball — trial menghargai konsistensi kemahiran kayu dan peralihan pertahanan, bukan hanya kekuatan tembakan.",
      ta: "புளோர்பால் DSA — சோதனை குச்சி திறமை நிலைத்தன்மையும் பாதுகாப்பு மாற்றத்தையும் மதிக்கிறது, ஷாட் சக்தியை மட்டுமே அல்ல.",
    },
    intro: {
      en: "Floorball is one of Singapore's most evenly distributed school sports — 35 schools offer DSA in the talent and 53 carry it as a CCA, with strong programmes across boys' and girls' divisions in both IP and O Level streams. Singapore school floorball trials weigh stick handling at speed, passing under defensive pressure, shooting from realistic game positions, and — most heavily — the trialist's behaviour during the defensive transition (the half-second after losing the ball). Speed helps, but court intelligence is what coaches recruit for.",
      zh: "旱地冰球是新加坡最均衡分布的学校运动之一——35 所学校 DSA 招收，53 所有 CCA，男女队 IP 和 O Level 都有强队。中学 trial 看的是高速持杆、防守压力下传球、真实比赛位置射门，以及——权重最高的——失球后半秒钟的防守转换行为。速度有用，但教练招的是球场智商。",
      ms: "Floorball antara sukan sekolah paling merata di Singapura. Trial menilai pengendalian kayu pada kelajuan tinggi, hantaran di bawah tekanan pertahanan, tembakan dari kedudukan permainan sebenar, dan peralihan pertahanan.",
      ta: "சிங்கப்பூர் பள்ளி விளையாட்டுகளில் புளோர்பால் மிகவும் பரவலான ஒன்று. சோதனை வேகத்தில் குச்சி கையாளுதல், அழுத்தத்தில் பாஸ், கேம் நிலைகளில் இருந்து ஷாட், பாதுகாப்பு மாற்றத்தை மதிப்பிடுகிறது.",
    },
    summary: {
      en: "Trial structure, position-specific habits, interview questions, NSG-active schools across boys' and girls' divisions.",
      zh: "Trial 流程、位置专项习惯、面试题、NSG 男女队活跃学校。",
      ms: "Struktur trial, tabiat khusus posisi, soalan temu duga, sekolah aktif NSG.",
      ta: "சோதனை அமைப்பு, நிலை சார்ந்த பழக்கங்கள், கேள்விகள், NSG பள்ளிகள்.",
    },
    sampleSchools: [
      "Anglo-Chinese School (Independent)",
      "St. Joseph's Institution",
      "Raffles Institution",
      "Nanyang Girls' High School",
      "Methodist Girls' School (Secondary)",
      "Hwa Chong Institution",
    ],
    metaDescription: {
      en: "Floorball DSA-Sec trial guide for Singapore P6 — what coaches assess across forward/defender/goalkeeper, sample interview questions, NSG-active participating schools.",
      zh: "新加坡 P6 旱地冰球 DSA-Sec trial 指南——前锋/后卫/守门员评分维度、面试题、NSG 活跃招生学校。",
      ms: "Panduan trial DSA-Sec Floorball Singapura — apa jurulatih nilai, posisi, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 புளோர்பால் DSA-Sec வழிகாட்டி — அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore floorball trials typically run 90–120 minutes and are led by the school's head floorball coach (often IFF / Floorball Singapore-licensed) plus the teacher-in-charge of Sports. The standard structure: dynamic warm-up and stick warm-up, technique stations (dribbling slalom, passing pairs, wrist shot, slap shot), then 4-v-4 or 5-v-5 small-sided games on a half court. Field-player and goalkeeper trials are usually separate. Coaches lean on the six dimensions below, drawn from the IFF youth coaching framework and parent reports across NSG-active schools.",
      },
      trialDimensions: [
        {
          label: { en: "Stick handling at speed" },
          body: {
            en: "Coaches set up a slalom of cones at varying spacing and watch whether the trialist can keep the ball on the blade through tight turns at near-game pace. A P6 player who can dribble at 80% sprint speed without losing the ball scores far higher than one who can hit harder but loses the ball under any traffic. Stick handling at speed is the cheapest tell of accumulated touches.",
          },
        },
        {
          label: { en: "Passing accuracy under defensive pressure" },
          body: {
            en: "Coaches stage passing pairs at 5–10 metre intervals with a defender's stick pressure, then progress to triangle drills with two passers and one mover. They look for crisp wrist-passes flat to the receiver's blade, accurate backhand passes around defenders, and the recognition of when to pass versus carry. The signal here is consistency under the realistic 2-second decision window — coaches watch whether the trialist panics into a hopeful pass or finds the next option.",
          },
        },
        {
          label: { en: "Shooting from game positions, not stationary drills" },
          body: {
            en: "Trials test wrist shot, slap shot, and snap shot off the rebound. Coaches deliberately set up shots that require a one-touch finish or a quick release off a deflection, because that's what actually happens in matches. A clean wrist shot under one-touch pressure scores higher than a powerful slap shot from a stationary set — the slap is teachable; quick release is harder.",
          },
        },
        {
          label: { en: "Defensive transition — the half-second after losing the ball" },
          body: {
            en: "The most underweighted dimension at primary school but the one Singapore school coaches watch most closely. When the trialist loses possession, do they immediately tip-and-track to recover, or do they stand and complain? Coaches deliberately create turnovers in scrimmage to test this. A P6 who instinctively backchecks within one second of losing the ball signals four-year coachability; one who looks at the referee or the floor is read as a coaching problem in waiting.",
          },
        },
        {
          label: { en: "Spatial awareness and off-the-ball positioning" },
          body: {
            en: "Whether the player creates angles by moving without the ball, supports the carrier from behind and to the side rather than crowding, and keeps the goalkeeper's line of sight clean during defensive sets. Coaches watch off-the-ball more than on-the-ball in scrimmage — because half the trial is what the player does when not directly involved. Active feet and head-on-a-swivel scoring predicts game IQ better than highlight plays.",
          },
        },
        {
          label: { en: "Coachability and bench behaviour" },
          body: {
            en: "How the trialist behaves between shifts, whether she rotates back to the bench without prompting, encourages a teammate who shanked a pass, and accepts immediate corrections without sulking. International youth coaching research consistently rates these signals among the top predictors of long-term improvement — and Singapore school coaches, who'll work with this child for four years across NSG B and A divisions, weight them heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Forward (Centre / Wing)" },
          body: {
            en: "The most-recruited cluster because every team needs reliable scoring and forechecking. Coaches assess shot variety (wrist shot at minimum, snap or slap as bonus), the ability to find the slot in front of the goal, and forechecking discipline — chasing the opposing defender into corners without giving up positioning. Wing players are scored partly on speed; centre players are scored partly on faceoff and centre-ice awareness.",
          },
        },
        {
          position: { en: "Defender" },
          body: {
            en: "Floorball defenders are not goal-side stoppers — they're rebound starters and breakout passers. Coaches assess defensive-zone positioning (stick on stick, body between attacker and goal), the first-pass to the wings to start the breakout, and willingness to step up into the attacking zone for shots from the point. A P6 defender with a clean breakout pass beats a stronger skater who panics into a clear-and-chase.",
          },
        },
        {
          position: { en: "Goalkeeper (specialist trial)" },
          body: {
            en: "Floorball goalies play without a stick, on knees, blocking shots with body, hands, and feet inside a smaller crease. Trial is usually a separate session of shooter-vs-keeper drills plus reflex tests. Coaches assess the ready position (knees wide, hands inside the body line, head up), the recovery from the first save to the second shot, and decision-making on rebounds (smother vs deflect to corner). Goalkeeping is the position where a P6 with a year of dedicated keeper training has the biggest premium over an outfielder switched to goal.",
          },
        },
        {
          position: { en: "Utility — Forward / Defender swing" },
          body: {
            en: "A small but valuable cluster: players who can credibly slot into both forward and defender roles. Coaches assess game-reading over pure technical skill; the value is roster flexibility across a four-year programme. If your child has genuinely played both positions in primary school games, mention this in the trial — the school's existing roster gaps often decide which utility candidates get an offer.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school floorball at P6 trial level usually does not lock a player to one position — coaches assess versatility across forward and defender. Goalkeeper is usually a separate decision because keeper trials are scheduled distinctly. If your child plays multiple positions reasonably well, mention all of them; the school's existing roster balance often drives which position recruits a specific candidate.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love floorball?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like scoring goals\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete memory — a match, a teammate, a turning point — then connect it to character.",
          },
          template: {
            en: "We lost the zonals semi-final by one goal because I didn't backcheck after a turnover. That night I asked my coach what I should have done differently — that was the first time I cared more about defending the transition than scoring the next goal.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the floorball programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's floorball — a coach's name, an NSG result, a training pattern.",
          },
          template: {
            en: "ACS(I)'s floorball trains four times a week from Sec 1 and the boys' team has been consistently top-four at NSG A-Division. That's the volume and the standard I want from the start.",
          },
        },
        {
          question: { en: "What position do you play and why?" },
          subtext: {
            en: "Can the kid articulate the role, not just label it?",
          },
          approach: {
            en: "Name the position plus the job.",
          },
          template: {
            en: "Centre forward. My job is to win faceoffs, find the slot in front of the goal on offence, and be the first forward back on defence. I like the position because every shift starts and ends with me — there's nowhere to hide.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I broke my stick in a tournament quarter-final and our team lost. I asked my coach what skills I should drill so I didn't depend so much on equipment. We spent eight weeks on weak-hand passing — by the next tournament I could play through a stick swap without losing time.",
          },
        },
        {
          question: { en: "Is there a teammate or coach you remember most?" },
          subtext: {
            en: "Whether the kid sees teammates as people or background.",
          },
          approach: {
            en: "Name someone specific by role + what you learned from them.",
          },
          template: {
            en: "Our P6 captain made the whole team do five-second backcheck drills after every shooting session. None of us liked it but he insisted. By NSG we had the most goals against the run of play in the cluster — and that's why. He taught me that the unglamorous habit is the one that wins.",
          },
        },
        {
          question: { en: "How do you manage time with frequent trainings?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I do English and Math homework on the bus to training and finish Science before dinner. I keep Sundays for revision. My coach asks for my report book every term — that's a real system, not just willpower.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your coach's emphasis on forechecking matches how I think about the game. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Floorball (Boys), IP" },
          context: {
            en: "IP school with one of Singapore's most established boys' floorball programmes. Consistent NSG A-Division presence. Floorball among ACS(I)'s recognised DSA talent areas.",
          },
        },
        {
          name: "St. Joseph's Institution",
          url: "https://www.sji.edu.sg/admission/dsa-at-sji/",
          talentArea: { en: "Floorball (Boys), IP / DSA-Sec" },
          context: {
            en: "Lasallian boys' school. Floorball among SJI's published DSA talent areas (IP and O Level). Sustained NSG B- and A-Division presence.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/dsa-sec",
          talentArea: { en: "Floorball (Boys), IP" },
          context: {
            en: "IP school with active boys' floorball CCA. Regular NSG B- and A-Division participation. RI publishes annual DSA talent areas; floorball appears consistently.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Floorball (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies school. Floorball among NYGH's published DSA talent areas. NSG-active girls' programme.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.moe.edu.sg/secondary/admissions/dsa-sec1/",
          talentArea: { en: "Floorball (Girls), DSA-Sec" },
          context: {
            en: "Methodist heritage girls' school. Floorball among MGS's recognised DSA talent areas. Active NSG B- and A-Division presence.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Floorball (Boys), IP" },
          context: {
            en: "IP school with established boys' floorball CCA. Floorball among HCI's published DSA talent areas. Sustained NSG A-Division participation.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://www.acsbr.moe.edu.sg/",
          talentArea: { en: "Floorball (Boys), DSA-Sec" },
          context: {
            en: "Boys' school with strong floorball CCA tradition. Regular NSG B- and A-Division presence in the boys' divisions.",
          },
        },
        {
          name: "Victoria School",
          url: "https://www.victoriaschool.moe.edu.sg/",
          talentArea: { en: "Floorball (Boys), IP / DSA-Sec" },
          context: {
            en: "Heritage boys' school. Floorball CCA with sustained NSG participation across both IP and O Level streams.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
          talentArea: { en: "Floorball (Girls), IP" },
          context: {
            en: "IP school with active girls' floorball CCA. Sustained NSG presence across divisions. Floorball among RGS's recognised DSA talent areas.",
          },
        },
        {
          name: "Cedar Girls' Secondary School",
          url: "https://www.cedargirlssec.moe.edu.sg/admissions/",
          talentArea: { en: "Floorball (Girls), DSA-Sec" },
          context: {
            en: "Girls' school with active floorball CCA. NSG B-Division participation across recent years.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Video-record one full 4-v-4 scrimmage. Watch with your child, scoring just two behaviours: (1) when they lost the ball, how many seconds before they tipped-and-tracked to recover? (2) on every received pass, did they get their stick on the ball with the head up or head down? These two are the highest-signal items in floorball trials.",
            },
            {
              en: "Confirm CCA records at primary school are accurate. MOE pulls CCA participation, school awards, NSG and external competition results, NAPFA, and JSA data into the DSA portal directly. Floorball Singapore club programmes also feed in. Ask the CCA teacher or year-head to verify what's been logged.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: stick-handling figure-eights, passing-pair work, light shooting, no new conditioning load. Final-week added sprinting rarely pays off and frequently produces a tweak (most commonly groin or hamstring).",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire (most trials require court-appropriate non-marking indoor shoes, school PE attire, knee pads optional but recommended). Bring two sticks if possible — broken or cracked stick mid-trial is one of the few logistical failures that ends a P6 trial early. Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "One scrimmage with strangers. On Singapore parent forums, a recurring observation is that kids underperform at trials because they only pass to teammates they know. Force the awkwardness early — a Saturday club open session with unfamiliar players is the cheapest fix.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — not 30. Coaches deliberately push trial past the fatigue threshold and the last 20 minutes is where stick discipline (high stick infringements, stick lifts) breaks down.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to two things only: stick handling through a tight slalom and tip-and-track recovery within one second of losing the ball. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private floorball coach at this stage. A good private coach can speed up specific habit changes — particularly transition reads and shot release — but no coach produces, in three sessions, the game intelligence of a year of scrimmage minutes. Treat it as triage, not a fix.",
      },
    },
  },
  choir: {
    slug: "choir",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Choir", zh: "合唱团", ms: "Koir", ta: "பாடகர் குழு" },
    hook: {
      en: "Choir DSA — auditions reward vocal placement and aural agility, with school-specific song requirements that vary widely.",
      zh: "合唱团 DSA——招生看声音位置与听力反应，曲目要求各校差异极大",
      ms: "DSA Koir — uji bakat menghargai penempatan vokal dan ketangkasan aural, dengan keperluan lagu khusus sekolah.",
      ta: "பாடகர் குழு DSA — குரல் இடவமைப்பு மற்றும் கேட்கும் திறனை மதிக்கிறது, பள்ளி வாரியான பாடல் தேவைகள் வேறுபடுகின்றன.",
    },
    intro: {
      en: "Choir is one of the most broadly offered DSA talents in Singapore — about 60 secondary schools accept it. Audition requirements split sharply into two camps: most schools ask for one or two prepared songs (often a school song plus a candidate's choice), while a small number (Victoria School is explicit on this) run vocal-test-only auditions with no prepared piece at all. In every case, the audition weighs vocal placement, aural agility (sight-singing, melody echo, rhythm clap-back), and whether the candidate can take and apply a correction in real time. This page covers what coaches actually listen for, position-style voice profiles, and how to confirm each target school's specific format.",
      zh: "合唱团是新加坡最广泛接受的 DSA 才艺之一——约 60 所中学招收。但招生要求分两派：大多数学校要求 1-2 首准备曲（常见组合是校歌 + 自选曲），少数（Victoria 明确）只做声乐测试不要求准备曲。无论哪种，audition 看声音位置、听力反应（视唱 / 旋律 echo / 节奏 clap-back）、以及能否当场接受并应用纠正。本页讲教练真正在听什么、声部分析、如何确认每所学校的具体格式。",
      ms: "Koir antara DSA paling luas — kira-kira 60 sekolah menerima. Keperluan uji bakat terbahagi: kebanyakan minta 1-2 lagu disediakan, sebilangan kecil (seperti Victoria) hanya ujian vokal tanpa lagu. Setiap kes menilai penempatan vokal, kelincahan aural, dan keupayaan memohon pembetulan secara langsung.",
      ta: "சிங்கப்பூரில் கிடைக்கும் DSA திறமைகளில் பாடகர் குழு பரந்த ஒன்று — சுமார் 60 பள்ளிகள் ஏற்கின்றன. தேவைகள் இரு வகையாகப் பிரிக்கப்படுகின்றன: பெரும்பாலான பள்ளிகள் 1-2 பாடல்கள் கேட்கும்; சில (Victoria) பாடல் இல்லாமல் வாய்மொழி சோதனை மட்டுமே. எல்லாவற்றிலும் குரல் இடவமைப்பு, கேட்கும் திறன், திருத்தத்தை நேரடியாகப் பயன்படுத்தும் திறன் மதிப்பிடப்படுகிறது.",
    },
    summary: {
      en: "Audition requirements (prepared-song vs vocal-test-only), voice-part profiles, interview questions, SYF-active schools with strong choirs.",
      zh: "招生格式（备曲 vs 声乐测试）、声部分析、面试题、SYF 活跃合唱学校。",
      ms: "Keperluan uji bakat, profil suara, soalan temu duga, sekolah SYF aktif.",
      ta: "தேர்வுத் தேவைகள், குரல் வகைகள், கேள்விகள், SYF பள்ளிகள்.",
    },
    sampleSchools: [
      "Nanyang Girls' High School",
      "Raffles Girls' School (Secondary)",
      "Methodist Girls' School (Secondary)",
      "Hwa Chong Institution",
      "Victoria School",
      "Anglican High School",
    ],
    metaDescription: {
      en: "Choir DSA-Sec audition guide for Singapore P6 — prepared-song vs vocal-test-only formats, what coaches assess, sample interview questions, SYF-active participating schools.",
      zh: "新加坡 P6 合唱团 DSA-Sec audition 指南——备曲 vs 声乐测试格式、评分维度、面试题、SYF 活跃学校。",
      ms: "Panduan uji bakat DSA-Sec Koir Singapura — format, kriteria, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 பாடகர் குழு DSA-Sec வழிகாட்டி — வடிவம், அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      preparedPiece: {
        intro: {
          en: "Choir auditions in Singapore split into two distinct formats. Most schools require one or two prepared songs (commonly a school song + a candidate's choice that showcases range and musicality). A small number — Victoria School being the publicly-stated example — run no-song vocal tests where the choir master assesses voice through guided exercises only. Always confirm the format with each target school's 2026 DSA brief before locking repertoire.",
        },
        entries: [
          {
            variant: { en: "Two-song format (most schools)" },
            requirement: { en: "School song (or a hymn for mission schools) + one candidate's choice that shows range and dynamic control · 2-3 min total · plus aural test (range / pitch / rhythm) and sight-sing" },
            source: { en: "Common pattern across DSA Academy and Sing the Right Way coaching briefs; aligns with NYGH and RGS audition expectations parents have reported." },
          },
          {
            variant: { en: "One-song format" },
            requirement: { en: "One candidate's choice song · ideally one that demonstrates head voice and chest voice transition · 90 sec slot · plus aural test and sight-sing" },
            source: { en: "DSA Academy choir prep brief; aligns with several CHIJ and Methodist school audition expectations." },
          },
          {
            variant: { en: "Vocal-test-only (no song)" },
            requirement: { en: "No prepared song required — choir master conducts vocal-testing exercises (vocalises, range probes, melody echo, rhythm clap-back) plus interview" },
            source: { en: "Victoria School DSA 2026 brief — explicit \"no song preparation needed\"" },
          },
          {
            variant: { en: "ACJC IP choir (rare reference for upper-Pri)" },
            requirement: { en: "ACJC's choir DSA at JC level requires a prepared song from a published list — Sec-level audition formats generally do NOT use a fixed song list" },
            source: { en: "ACJC Choir DSA 2025 eligibility brief — referenced for terminology, not requirement." },
          },
        ],
        coachCtaBlurb: {
          en: "A private vocal coach can stabilise audition-day nerves, polish the opening 8 bars of each prepared song, run sight-singing drills at audition difficulty, and coach the recovery from a cracked note (the highest-impact composure work). Browse our coach directory for vocal specialists.",
        },
      },
      trialDimensionsIntro: {
        en: "Singapore choir auditions typically run 10–20 minutes per candidate and are led by the school's choir director. The standard structure: warm-up vocalise led by the director, prepared songs (if the school requires them), aural tests (clap back a rhythm, sing back a melodic line, sight-sing a short passage), and a short interview. Some schools — Victoria School being publicly explicit — run vocal-test-only formats with no prepared song. In every format, the director listens for placement, agility, and trainability far more than for raw volume. Six dimensions emerge from public DSA briefs and aural-musicianship frameworks used in Singapore school choir coaching.",
      },
      trialDimensions: [
        {
          label: { en: "Vocal placement and tone quality" },
          body: {
            en: "Directors listen for whether the voice sits forward (mask resonance, clear vowels) or sinks back into the throat. A P6 candidate who can place the voice forward on \"ee\" and \"oo\" vowels signals trainability — that's the foundation directors will build choral blend on. Pushing the voice for volume is a red flag because it predicts a singer who will damage themselves by Sec 2.",
          },
        },
        {
          label: { en: "Pitch accuracy and intonation" },
          body: {
            en: "On the prepared song and during aural drills, directors check whether the candidate stays in tune across phrases, especially on tricky intervals (perfect fourths, augmented seconds, modulations). Singing slightly sharp under nerves is far more forgivable than singing slightly flat — flat singing in a choir destroys blend across the whole section. Directors hear this in the first 8 bars.",
          },
        },
        {
          label: { en: "Aural agility — clap-back, melody echo, sight-sing" },
          body: {
            en: "The most under-trained component of P6 choir preparation. Directors play a 4-beat rhythm and ask the candidate to clap it back; play a 4-bar melodic line and ask them to sing it back; show a short notated passage and ask them to sing it on solfège or neutral syllables. Strong aural ability predicts ensemble musicianship, and weak aural ability is the most common reason a technically clean solo voice is passed over.",
          },
        },
        {
          label: { en: "Range and register transition" },
          body: {
            en: "Directors probe the range with vocalises that climb above the candidate's comfort zone and descend below it, listening for whether the chest-voice-to-head-voice transition is managed smoothly or breaks audibly. A P6 with a flexible 1.5-octave range and a smooth transition is far more recruitable than one with a wider range that breaks loudly at the passaggio.",
          },
        },
        {
          label: { en: "Coachability — applying a correction in real time" },
          body: {
            en: "The single highest-signal moment in many auditions. The director gives one correction — \"try that phrase a touch softer at the end\" or \"shape this vowel more open\" — and listens whether the candidate applies it on the next attempt. Directors hire singers they can teach, not just singers who arrive polished. Visible openness to correction is scored heavily.",
          },
        },
        {
          label: { en: "Stage presence and composure" },
          body: {
            en: "How the candidate walks in, breathes before the first phrase, recovers from a cracked note, and bows at the end. Choirs perform — composure under audience attention matters. Directors remember the candidate who restarted a phrase calmly more vividly than one who delivered a flawless first half and crumbled. Film a mock audition and watch the entrance and first 15 seconds twice.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Soprano (high voice — girls' or upper-treble boys')" },
          body: {
            en: "Directors assess the head voice's clarity and the candidate's confidence at the top of the range without strain. Soprano is the most-recruited section in every school choir but also the most competitive — repertoire choice matters more here than in any other voice. Choose a song that sits comfortably in your child's range with a brief climactic top note, not one that pushes them out the top throughout.",
          },
        },
        {
          position: { en: "Alto (low female voice / changed-voice boys' mezzo)" },
          body: {
            en: "Often under-recruited because P6 candidates self-identify as soprano regardless of vocal anatomy. Directors actively look for genuine altos — voices with chest-voice depth, comfort in the lower octave, and the willingness to hold the inner-harmony line. A clear-toned alto signals long-term value because every choir needs three or four reliable inner voices.",
          },
        },
        {
          position: { en: "Tenor / Bass (changing or changed-voice boys)" },
          body: {
            en: "Boys' voices may not have changed yet at P6 — directors are listening for current voice quality and projecting the post-change voice. A boy with a clear unchanged treble who sings musically will be assessed on transferable musicianship (aural, pitch, sight-sing), with the understanding that voice part will be assigned in Sec 1 or 2 after the change. Honesty about voice change progress is welcomed; pretending the voice has already changed is counterproductive.",
          },
        },
        {
          position: { en: "Section flexibility and reading singer" },
          body: {
            en: "Directors highly value the candidate who can credibly read music and might be moved between sections (S2/A1 swing, A2/T1 swing for boys) as the choir's needs change. If your child has experience reading choral parts beyond their primary voice — even at a basic level — mention it. Section flexibility is rare at P6 and is treated as a multiplier on top of vocal quality.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school choir at P6 audition level usually does not lock a singer to one voice part — directors assign sections after voice classification interviews in Sec 1. What matters at audition is the current voice quality plus aural / musicianship signals. If your child sings two parts comfortably (e.g. soprano in primary school choir but is now comfortable in alto for solo songs), mention both; section need often drives final placement.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love choir?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like singing\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete memory — a piece, a performance, a teacher moment — then connect it to character.",
          },
          template: {
            en: "We sang Lauridsen's O Magnum Mysterium at SYF and the alto entrance in the middle was the first time I felt how a chord could change a room. After that I started listening to recordings of choral pieces on the bus — that's when I realised choir is the thing I love most.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the choir programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's choir — a recent SYF performance, a director's repertoire approach, a training pattern.",
          },
          template: {
            en: "NYGH choir's SYF gold-with-honours record and the breadth of the repertoire — from a cappella sacred to contemporary Mandarin — is exactly the kind of musical exposure I want.",
          },
        },
        {
          question: { en: "What is your voice part and why?" },
          subtext: {
            en: "Can the candidate articulate the voice, not just label it?",
          },
          approach: {
            en: "Name the part plus what it asks of you.",
          },
          template: {
            en: "I sing soprano in my primary school choir, but I'm most comfortable in the middle of the soprano range — the high C is still a bit of a stretch. I think I'll settle as a soprano two or alto one when my voice matures, and I'm happy to be moved.",
          },
        },
        {
          question: { en: "Who is your favourite composer or piece, and why?" },
          subtext: {
            en: "Tests musical vocabulary, not just emotion.",
          },
          approach: {
            en: "Name the piece plus one specific musical element (harmonic, textural, rhythmic) that you can describe.",
          },
          template: {
            en: "Eric Whitacre's Sleep — because of the cluster chord at the end. It's seven voices that should clash but instead dissolve. I asked my choir teacher how that works harmonically and that started me reading about extended tertian harmony.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I got a vocal nodule in P5 from over-singing during a school production and was told to rest for six weeks. I worked on breath control and ear training during the rest period — by SYF I was singing better than before because I'd stopped pushing.",
          },
        },
        {
          question: { en: "How do you manage time with frequent rehearsals?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I do English and Math homework before dinner and Science after. Saturdays I sing for two hours and rest the voice the rest of the day. My mother shows my report book to the choir director every term — that's the rule we set together.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your choir's emphasis on sacred a cappella matches what I love most. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Choir (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies school. Choir among NYGH's published DSA talent areas. Multi-decade SYF distinction record; demanding repertoire spanning English and Mandarin.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
          talentArea: { en: "Choir (Girls), IP" },
          context: {
            en: "IP school. Choir among RGS's recognised DSA talent areas; published in the 2026 Information on Application brief.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.moe.edu.sg/secondary/admissions/dsa-sec1/",
          talentArea: { en: "Choir (Girls), DSA-Sec" },
          context: {
            en: "Methodist heritage girls' school with strong choir tradition. Repertoire balances sacred hymns and secular pieces.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Choir (Boys), IP" },
          context: {
            en: "IP school with established boys' choir. Among HCI's published DSA talent areas.",
          },
        },
        {
          name: "Victoria School",
          url: "https://www.victoriaschool.moe.edu.sg/",
          talentArea: { en: "Choir (Boys), IP / DSA-Sec" },
          context: {
            en: "Boys' school. Victoria's 2026 DSA brief is explicit that choir audition requires NO prepared song — choir master conducts vocal-testing exercises plus interview.",
          },
        },
        {
          name: "Anglican High School",
          url: "https://www.anglicanhigh.moe.edu.sg/",
          talentArea: { en: "Choir (Boys and Girls), DSA-Sec" },
          context: {
            en: "Anglican heritage school. Choir among recognised DSA talent areas; sustained SYF participation.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/",
          talentArea: { en: "Choir (Boys), DSA-Sec" },
          context: {
            en: "SAP school — Higher Chinese / Chinese Language as Mother Tongue requirement. Boys' choir with strong Mandarin repertoire alongside sacred Latin-text pieces.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Choir (Boys and Girls), IP / DSA-Sec" },
          context: {
            en: "SAP school. Choir among Dunman's 2026 DSA FAQ talent areas, both boys' and girls' divisions.",
          },
        },
        {
          name: "Temasek Secondary School",
          url: "https://www.temaseksec.moe.edu.sg/prospective-students/direct-school-admission/choir-dsa/",
          talentArea: { en: "Choir (Boys and Girls), DSA-Sec" },
          context: {
            en: "Temasek has a dedicated Choir DSA page describing audition format, repertoire suggestions, and aural test components.",
          },
        },
        {
          name: "CHIJ Secondary (Toa Payoh)",
          url: "https://chijsectoapayoh.moe.edu.sg/",
          talentArea: { en: "Choir (Girls), DSA-Sec" },
          context: {
            en: "CHIJ girls' school. Choir among published CCA and DSA talent areas with sustained SYF participation.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the audition is still weeks out" },
          items: [
            {
              en: "Confirm each target school's audition format. The split between prepared-song and vocal-test-only is the single most important logistical fact, and it varies — call the school's DSA office or download the school's 2026 DSA brief to verify. Don't assume; ask.",
            },
            {
              en: "Record your child singing the chosen song once a week and listen for two specific behaviours: (1) does the voice sit forward on \"ee\" and \"oo\" vowels, or pull back into the throat? (2) does the head-voice transition happen smoothly, or does the voice break audibly at the passaggio? These are the highest-signal items in choir auditions.",
            },
            {
              en: "Practise sight-singing daily for ten minutes at audition difficulty. Use solfège or numbers. The most common P6 failure mode is freezing on a sight-sing passage — daily exposure cures it faster than any technique work.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: light vocalises, prepared song once per day at the start of the practice session (when the voice is fresh, not at the end), aural drills, no new repertoire. Final-week new songs almost never end well.",
            },
            {
              en: "Sleep, hydration, no dairy or chocolate in the 12 hours before audition. Voice rest the day before. These are not superstitions — they are the standard pre-audition checklist of every reputable vocal teacher.",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire (most auditions expect school uniform or smart casual; no perfumes or strong scents that affect the director or the room). Email the teacher-in-charge if anything is ambiguous.",
            },
          ],
        },
        {
          label: { en: "Day of audition" },
          items: [
            {
              en: "Warm up the voice 60–90 minutes before, not 5. Lip trills, sirens, scales on \"ng,\" then a few lines of the prepared song at half voice. Do not over-sing in the warm-up — the voice should arrive at the audition fresh.",
            },
            {
              en: "Eat 90 minutes before — not 30 — and avoid acidic foods. A glass of room-temperature water 20 minutes before. No cold drinks; no caffeine for a P6 candidate.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the candidate absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the director said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, audition coming up, no real prep — there are still real moves. Confirm each target school's audition format (prepared-song vs vocal-test-only) tonight. If song-based, lock in the first 8 bars of your strongest song — those are the bars the director judges on. Cancel anything that competes with sleep and voice rest. Spend the freed time on aural drills (clap-back, melody echo, sight-sing) and the interview prep above, because both are where a few hours can still meaningfully change the outcome. Some families bring in a private vocal coach at this stage. A good private coach can stabilise the opening 30 seconds and reduce nerves — but no coach produces, in three sessions, the pitch security of a year of choral singing. Treat it as triage, not a fix.",
      },
    },
  },
  "chinese-orchestra": {
    slug: "chinese-orchestra",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Chinese Orchestra", zh: "华乐", ms: "Orkestra Cina", ta: "சீன இசைக்குழு" },
    hook: {
      en: "Chinese Orchestra DSA — auditions reward tone production and sight-reading on traditional instruments, with a clear two-piece + five-minute format across most schools.",
      zh: "华乐 DSA——招生看传统乐器音色与视奏能力，多数学校沿用 2 首对比曲 + 5 分钟标准格式",
      ms: "DSA Orkestra Cina — uji bakat menilai penghasilan ton dan pembacaan pandang pada instrumen tradisional, dengan format 2-keping + 5-minit di kebanyakan sekolah.",
      ta: "சீன இசைக்குழு DSA — பாரம்பரிய இசைக்கருவிகளில் ஒலி உருவாக்கம் மற்றும் பார்த்து வாசிக்கும் திறனை மதிக்கிறது, பெரும்பாலான பள்ளிகளில் 2-துண்டு + 5-நிமிட வடிவம்.",
    },
    intro: {
      en: "Chinese Orchestra is the DSA route most closely tied to Singapore's SAP school ecosystem — the deepest programmes sit at SAP schools and a handful of strong non-SAP schools. The audition format is unusually standardised across schools: two contrasting pieces on the candidate's instrument (excerpts allowed), total time capped at five minutes, plus a sight-read passage given during the interview. Instruments accepted span the full Chinese orchestra — Erhu, Pipa, Guzheng, Dizi, Yangqin, the Ruan family, Liuqin, Sheng (high and middle), Suona (high and middle), Cello, Double Bass, Hulusi, Guanzi, Percussion, and Guqin. This page covers what panels actually listen for, instrument-specific notes, and how to choose contrasting pieces.",
      zh: "华乐是与新加坡 SAP 学校生态最紧密结合的 DSA 路线——最深的项目集中在 SAP 校 + 少数非 SAP 强校。招生格式各校罕见地统一：本乐器 2 首对比曲（可选段）· 总时长 5 分钟内 · 加面试时给一段视奏。乐器涵盖完整华乐编制——二胡、琵琶、古筝、笛子、扬琴、阮族、柳琴、笙（高/中音）、唢呐（高/中音）、大提琴、低音提琴、葫芦丝、管子、打击乐、古琴。本页讲教练真正在听什么、各乐器细节、如何选对比曲。",
      ms: "Orkestra Cina paling rapat dengan ekosistem sekolah SAP. Format uji bakat luar biasa diseragamkan: dua keping berbeza pada instrumen calon (petikan dibenarkan), jumlah masa tidak melebihi lima minit, ditambah bahagian baca-pandang semasa temu duga.",
      ta: "சீன இசைக்குழு SAP பள்ளி சூழலுடன் நெருக்கமாக இணைக்கப்பட்டுள்ளது. தேர்வு வடிவம் பள்ளிகளில் ஒரே மாதிரியாக உள்ளது: இரண்டு வேறுபட்ட துண்டுகள் · மொத்த நேரம் 5 நிமிடம் · மற்றும் நேர்காணலின் போது பார்த்து வாசிக்கும் பகுதி.",
    },
    summary: {
      en: "Audition format (2 contrasting + 5 min + sight-read), instrument-specific profiles, interview questions, SAP and IP schools with strong Chinese Orchestra programmes.",
      zh: "招生格式（2 对比曲 + 5 分钟 + 视奏）、乐器分析、面试题、SAP/IP 强校。",
      ms: "Format uji bakat, profil instrumen, soalan temu duga, sekolah SAP/IP terkemuka.",
      ta: "தேர்வு வடிவம், கருவி வகைகள், கேள்விகள், SAP/IP பள்ளிகள்.",
    },
    sampleSchools: [
      "Dunman High School",
      "Hwa Chong Institution",
      "Nan Hua High School",
      "River Valley High School",
      "Nanyang Girls' High School",
      "Catholic High School",
    ],
    metaDescription: {
      en: "Chinese Orchestra DSA-Sec audition guide for Singapore P6 — 2-piece + 5-minute format, sight-reading, instrument-specific advice, SAP and IP participating schools.",
      zh: "新加坡 P6 华乐 DSA-Sec audition 指南——2 对比曲 + 5 分钟 + 视奏格式、各乐器细节、SAP/IP 招生学校。",
      ms: "Panduan uji bakat DSA-Sec Orkestra Cina Singapura — format, kriteria, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 சீன இசைக்குழு DSA-Sec வழிகாட்டி — வடிவம், அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      preparedPiece: {
        intro: {
          en: "Chinese Orchestra auditions in Singapore are unusually standardised: most schools follow the same two-piece + five-minute + sight-read format. The contrasting pair is the strategic decision — one fast-and-virtuosic piece showing technical command, plus one lyrical-and-tonal piece showing musicality, is the safest pairing. Sight-reading is typically at an intermediate level appropriate to the instrument's standard repertoire.",
        },
        entries: [
          {
            variant: { en: "Standard format — most schools (BPGHS, Victoria, RGS, NYGH, Dunman High, Nan Hua, RVHS, Catholic High)" },
            requirement: { en: "Two contrasting pieces on your instrument · excerpts allowed · total time capped at 5 minutes · plus sight-read given by the conductor during the audition" },
            source: { en: "BPGHS DSA 2026 brief; Victoria School DSA 2026 brief; aligns with public DSA briefs across SAP schools and TENG Company examination format." },
          },
          {
            variant: { en: "With tempo specification — Victoria School" },
            requirement: { en: "Two contrasting pieces with explicit tempo requirement: 16 bars fast tempo + 16 bars slow tempo · plus sight-read" },
            source: { en: "Victoria School DSA 2026 brief — explicit \"16 bars fast + 16 bars slow tempo\" requirement." },
          },
          {
            variant: { en: "Percussion specialists" },
            requirement: { en: "Two contrasting pieces showing different percussion techniques (e.g. one melodic xylophone / yangqin-adjacent piece, one rhythmic drum or gong piece) · plus sight-read on the percussion family the candidate specialises in" },
            source: { en: "TENG Company DSA examination format for percussion; aligns with Singapore school CO percussion roster needs." },
          },
        ],
        coachCtaBlurb: {
          en: "A private Chinese-instrument coach can verify the contrasting pair choice, polish the opening 30 seconds of each piece (where the conductor judges most heavily), and run sight-read drills at audition difficulty. Coaches who play the same instrument and have prepared students for SAP-school auditions are especially valuable. Browse our coach directory for Chinese-instrument specialists.",
        },
      },
      trialDimensionsIntro: {
        en: "Singapore Chinese Orchestra auditions typically run 15–20 minutes per candidate and are led by the school's CO conductor (often a Singapore Chinese Orchestra-affiliated musician) plus the teacher-in-charge of CCAs. The format is unusually standardised across schools: two contrasting prepared pieces (excerpts allowed, total time capped at 5 minutes), a sight-reading passage on the candidate's instrument, and a short interview about the candidate's musical journey. Conductors lean on the six dimensions below, drawn from public DSA briefs (BPGHS, Victoria School, Catholic High) and aural-musicianship frameworks used in SAP-school CO coaching.",
      },
      trialDimensions: [
        {
          label: { en: "Tone production on the instrument" },
          body: {
            en: "The single most-listened-for element. On bowed strings (erhu, gaohu, zhonghu, cello, bass) conductors listen for bow weight and contact-point consistency; on plucked strings (pipa, guzheng, liuqin, ruan) they listen for fingertip-versus-fingernail clarity and rest-stroke control; on winds (dizi, sheng, suona, hulusi, guanzi) they listen for embouchure stability and steady airflow. A clean, consistent tone on a Grade 7 piece reads better than a struggling tone on a Grade 9 piece — choose repertoire your child can produce a beautiful sound on.",
          },
        },
        {
          label: { en: "Technical command on the two contrasting pieces" },
          body: {
            en: "Conductors listen for accuracy at tempo, articulation differences between the two pieces (legato lyrical vs detached fast), and dynamic range. Both pieces should be from different musical territories — a traditional folk piece + a virtuosic conservatory piece is a safe pairing, as is a slow Cantonese-style piece + a Northern technique piece. Avoid two pieces that sound similar — the contrast is the brief, and panels notice when it isn't there.",
          },
        },
        {
          label: { en: "Musicality and interpretation" },
          body: {
            en: "What distinguishes a clean player from a future Chinese Orchestra principal is interpretation — phrase shaping, the use of vibrato, the choice of when to push and when to hold back, the cultural idiom appropriate to the piece. A candidate who can articulate one specific interpretive choice (\"I take more time at this phrase because it imitates a singer's breath\") stands out immediately. Knowing the cultural context of the piece — Cantonese, Chaozhou, Jiangnan, or Northern — is a strong signal.",
          },
        },
        {
          label: { en: "Sight-reading on the instrument" },
          body: {
            en: "Conductors typically set sight-reading at an intermediate level relative to the candidate's instrument standard — a passage of 8–16 bars with 30 seconds to review, then play through. What conductors watch is not whether every note is right, but whether the candidate keeps tempo, gets the rhythmic structure, and recovers from a mistake without stopping. Sight-reading on Chinese instruments uses both jianpu (numbered notation) and Western staff — confirm with each target school which notation the audition uses.",
          },
        },
        {
          label: { en: "Cultural idiom and Mandarin / dialect comfort" },
          body: {
            en: "SAP-school CO conductors actively listen for whether the candidate plays with the right cultural inflection — bending notes appropriate to the style, ornaments idiomatic to the piece's region. This is hard to learn from a Western-trained teacher and is a strong differentiator. Candidates comfortable with Mandarin (and in some cases dialect-specific repertoire) communicate better with the conductor and signal long-term fit with the SAP environment.",
          },
        },
        {
          label: { en: "Stage presence, composure, and bowing etiquette" },
          body: {
            en: "How the candidate walks in, bows to the conductor, settles at the instrument (tuning calmly, adjusting the chair or stand), and recovers from a slip. Chinese Orchestra culture is particularly attentive to bowing and conductor-respect etiquette — a candidate who bows correctly and addresses the conductor as \"老师\" or \"Mr / Ms\" appropriately signals cultural literacy that matches the SAP environment.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Bowed strings — erhu, gaohu, zhonghu, banhu" },
          body: {
            en: "The most-recruited section in nearly every school CO. Conductors listen for bow weight (not pressed) and the consistency of the contact point between the bow and the inner strings on the erhu. Vibrato use, slide ornaments (huayin), and the cultural inflection on traditional folk pieces are heavily weighted. Choose contrasting pieces that show both lyrical line (folk tune) and technical agility (fast variations) — Northern technique pieces are often a strong second choice.",
          },
        },
        {
          position: { en: "Plucked strings — pipa, guzheng, liuqin, ruan family" },
          body: {
            en: "Highly competitive on pipa and guzheng because these are the instruments many primary-school students begin with. Conductors listen for fingertip-versus-fingernail consistency, rest-stroke control on pipa, and right-hand strength on guzheng. For ruan players (zhongruan, daruan), conductors are often actively looking — these are under-recruited inner-voice instruments and a competent ruan candidate is treated as a section-flexibility multiplier.",
          },
        },
        {
          position: { en: "Wind instruments — dizi, sheng, suona, hulusi, guanzi" },
          body: {
            en: "Conductors listen for embouchure stability first (steady airflow producing a clean tone across the range), then articulation (tonguing on dizi, finger coordination on sheng, lip control on suona). Sheng players in particular are often under-recruited — both gaoyin sheng (high) and zhongyin sheng (middle) are essential to the CO sound but are taught by fewer teachers. If your child plays a less common wind instrument (suona, guanzi, hulusi), name it explicitly in the application — that information shapes which schools fast-track the file.",
          },
        },
        {
          position: { en: "Yangqin, percussion, and orchestral support (cello, double bass)" },
          body: {
            en: "Yangqin is a high-skill specialist instrument; conductors recruit yangqin candidates carefully because the instrument anchors much of the orchestral texture. Percussion candidates audition on a primary percussion family (drums, gongs, cymbals) plus a melodic-percussion piece if available. Cello and double bass in Chinese Orchestra are usually played by candidates who have classical training — conductors assess whether the candidate can adapt classical technique to the CO repertoire's rhythmic and ornamental conventions.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school Chinese Orchestra at P6 audition level usually does not require the candidate to commit to one instrument permanently — but the instrument the candidate auditions on will be the section they join in Sec 1. If your child has primary-school experience on two instruments (e.g. plays erhu and yangqin), audition on the stronger one but mention the second in the interview. Section flexibility is a significant tiebreaker between equally-strong primary instrument candidates.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love Chinese Orchestra?" },
          subtext: {
            en: "Panels want a specific moment, not a generic appreciation of Chinese culture.",
          },
          approach: {
            en: "Open with one concrete memory — a piece, a performance, a teacher moment — then connect it to your relationship with the instrument.",
          },
          template: {
            en: "I started erhu at six because my grandfather played, but the moment I knew I loved it was watching the Singapore Chinese Orchestra play Jasmine Flower at a community concert. The way the section breathed together — that's when I realised CO isn't a solo art, even when you're playing solo.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the CO programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's CO — a conductor's name, an SYF result, the SAP/Bicultural Studies environment.",
          },
          template: {
            en: "Dunman High's CO trains four times a week, plays at SYF Distinction level, and the SAP environment means I can keep Higher Chinese alongside competitive training. That combination is rare.",
          },
        },
        {
          question: { en: "What is your instrument and why?" },
          subtext: {
            en: "Can the candidate articulate what the instrument asks of them?",
          },
          approach: {
            en: "Name the instrument plus what playing it requires.",
          },
          template: {
            en: "Pipa. My job is the section that often carries the melody but always has to dance between melody and percussive accompaniment. I love it because the right hand has to think two beats ahead of the left — that's the only instrument where I feel both halves of my brain working at once.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I broke my erhu bridge two weeks before a school CO concert and couldn't get a replacement in time. My teacher lent me her instrument but the setup felt completely different. I spent every evening adjusting until the bow weight felt right — the concert went without anyone noticing.",
          },
        },
        {
          question: { en: "Who is your favourite composer or piece, and why?" },
          subtext: {
            en: "Tests musical vocabulary in the Chinese-music tradition specifically.",
          },
          approach: {
            en: "Name the piece plus one specific musical element you can describe (regional style, ornament, rhythmic structure).",
          },
          template: {
            en: "Liu Tianhua's San Bao Fo for erhu — because of the way the slide ornaments (huayin) carry the emotional weight more than the melody itself. I asked my teacher how to bow those slides; the answer changed how I think about every piece I play.",
          },
        },
        {
          question: { en: "How do you manage time with frequent rehearsals?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I finish English and Math homework before dinner because I'm too tired after practice. My mother shows my report book to my CO teacher every term — if my grades slip, we cut practice from 90 minutes to 60. That's the rule we set together.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your conductor's emphasis on Cantonese-style repertoire matches what I want to learn. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Chinese Orchestra (Boys and Girls), IP / DSA-Sec" },
          context: {
            en: "SAP and Bicultural Studies school. Chinese Orchestra among Dunman's 2026 DSA FAQ talent areas. Multi-year SYF Distinction record.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Chinese Orchestra (Boys), IP" },
          context: {
            en: "SAP and Bicultural Studies school. Boys' CO among HCI's published DSA talent areas. Sustained SYF Distinction record.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Chinese Orchestra, DSA-Sec" },
          context: {
            en: "SAP school. CO among Nan Hua's published DSA talent areas. Higher Chinese / Chinese Language as Mother Tongue requirement applies.",
          },
        },
        {
          name: "River Valley High School",
          url: "https://www.rivervalleyhigh.moe.edu.sg/",
          talentArea: { en: "Chinese Orchestra (Boys and Girls), IP / DSA-Sec" },
          context: {
            en: "SAP school with Bicultural Studies. CO among RVHS's recognised DSA talent areas. Active SYF participation.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Chinese Orchestra (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies school. CO among NYGH's recognised DSA talent areas. SYF Distinction record.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/",
          talentArea: { en: "Chinese Orchestra (Boys), DSA-Sec" },
          context: {
            en: "SAP school — Higher Chinese / Chinese Language as Mother Tongue requirement applies. Boys' CO with strong SYF record.",
          },
        },
        {
          name: "Chung Cheng High School (Main)",
          url: "https://www.chungchenghighmain.moe.edu.sg/direct-school-admission-dsa/",
          talentArea: { en: "Chinese Orchestra (Boys and Girls), DSA-Sec" },
          context: {
            en: "SAP school. CO among Chung Cheng's published DSA talent areas. Strong cultural tradition with sustained SYF participation.",
          },
        },
        {
          name: "Maris Stella High School",
          url: "https://www.marisstellahigh.moe.edu.sg/",
          talentArea: { en: "Chinese Orchestra (Boys), DSA-Sec" },
          context: {
            en: "SAP school. Boys' CO with consistent SYF appearances. Higher Chinese / Chinese Language as Mother Tongue requirement applies.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
          talentArea: { en: "Chinese Orchestra (Girls), IP" },
          context: {
            en: "IP school. CO among RGS's recognised DSA talent areas. Active SYF participation; published in the 2026 Information on Application brief.",
          },
        },
        {
          name: "Bukit Panjang Government High School",
          url: "https://www.bpghs.moe.edu.sg/dsa-2026/",
          talentArea: { en: "Chinese Orchestra (Boys and Girls), DSA-Sec" },
          context: {
            en: "BPGHS publishes a detailed DSA 2026 brief explicitly listing CO audition requirements (2 contrasting pieces + sight-read).",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the audition is still weeks out" },
          items: [
            {
              en: "Confirm the audition format with each target school. Most use the 2-piece + 5-minute + sight-read format, but specifics (Victoria School's 16-bars-fast + 16-bars-slow tempo requirement, the notation system used for sight-read) vary. Download each school's 2026 DSA brief.",
            },
            {
              en: "Choose the contrasting pair early. The strongest pairing is one lyrical / tonal piece (folk-style, demonstrating tone and musicality) + one fast / technical piece (conservatory-style, demonstrating command). Confirm the choice with your child's teacher — repertoire that feels comfortable but exposes weaknesses is the most common audition mistake.",
            },
            {
              en: "Practise sight-reading daily for ten minutes at audition difficulty. Use both jianpu and staff notation. Sight-reading on Chinese instruments is under-practised by many candidates because primary-school CO programmes focus on repertoire memorisation.",
            },
            {
              en: "Confirm CCA records at primary school are accurate. MOE pulls CCA participation, school awards, SYF results, and external competition results (Singapore Chinese Music Competition, NUS Chinese Music Festival) into the DSA portal directly. Ask the CCA teacher to verify what's been logged.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: warm-up scales, opening 30 seconds of each piece, sight-read practice, no new technical work. Final-week note-changes almost never end well.",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire (most auditions expect school uniform or smart casual; bring the instrument and any required accessories — rosin, spare strings, a tuner). Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "For bowed strings, change the strings 5–7 days before audition so they have time to settle. New strings on audition day go out of tune mid-piece.",
            },
          ],
        },
        {
          label: { en: "Day of audition" },
          items: [
            {
              en: "Arrive 60 minutes early. Warm up in a quiet corner of the school — scales, the opening 16 bars of each piece, two minutes of sight-reading any printed material. Do not over-rehearse the full pieces — the audition is the performance.",
            },
            {
              en: "Eat 90 minutes before — not 30. Avoid cold drinks if playing wind instruments. Bring a bottle of room-temperature water.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the candidate absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the conductor said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, audition coming up, no real prep — there are still real moves. Lock in the contrasting pair (don't change pieces this week). Focus practice on the opening 30 seconds of each piece and the sight-read drill — those are the highest-leverage minutes. Confirm each target school's specific format (notation system, tempo requirement if any) tonight. Cancel anything that competes with sleep and instrument care. Spend the freed time on aural drills and the interview prep above. Some families bring in a private Chinese-instrument coach at this stage. A good private coach can stabilise audition-day nerves, polish the opening phrase of each piece, and run sight-read drills at the correct difficulty — but no coach produces, in three sessions, the tone of a year of daily practice. Treat it as triage, not a fix.",
      },
    },
  },
  tennis: {
    slug: "tennis",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Tennis", zh: "网球", ms: "Tenis", ta: "டென்னிஸ்" },
    hook: {
      en: "Tennis DSA — trials reward groundstroke consistency and STA-sanctioned tournament results far more than how hard you serve.",
      zh: "网球 DSA——trial 看底线球稳定性和 STA 排名赛战绩，远远超过发球速度",
      ms: "DSA Tenis — trial menghargai konsistensi pukulan ground dan keputusan kejohanan STA jauh lebih tinggi daripada kuasa servis.",
      ta: "டென்னிஸ் DSA — சோதனை groundstroke நிலைத்தன்மையையும் STA தரவரிசை முடிவுகளையும் சர்வ் வேகத்தை விட அதிகமாக மதிக்கிறது.",
    },
    intro: {
      en: "Tennis is one of Singapore's higher-SES sports in school terms — concentrated at IP and SAP schools with established tennis facilities (ACS(I), RGS, RI, SJI, HCI, Catholic High). Singapore school tennis trials lean heavily on documented Singapore Tennis Association (STA) ranking — SPEX Junior Age Group results in the U10, U12, and U14 brackets count more than trial-day form for many coaches. The trial itself assesses groundstroke consistency, footwork patterns, serve placement, and how the player handles a losing rally. Speed and power help, but rally tolerance is what coaches recruit for. Here's what trials actually weigh.",
      zh: "网球在新加坡学校生态中是中高 SES 项目——主要集中在有设施的 IP 和 SAP 校（ACS(I)、RGS、RI、SJI、HCI、Catholic High）。中学 trial 高度依赖新加坡网球协会（STA）排名——SPEX Junior Age Group U10/U12/U14 战绩对许多教练比 trial 当天表现更重要。Trial 本身看底线球稳定、跑位模式、发球落点、以及失分球时的反应。速度有用，但教练招的是 rally tolerance。",
      ms: "Tenis adalah sukan sekolah SES tinggi di Singapura — tertumpu di sekolah IP dan SAP dengan kemudahan tenis. Trial menilai konsistensi groundstroke, corak pergerakan kaki, penempatan servis, dan tindak balas selepas mata rugi.",
      ta: "சிங்கப்பூரில் டென்னிஸ் உயர் SES விளையாட்டு — வசதிகள் உள்ள IP மற்றும் SAP பள்ளிகளில் தொகுக்கப்பட்டுள்ளது. சோதனை groundstroke நிலைத்தன்மை, கால் நகர்வு, சர்வ் இடம், தோல்வி ரேலி-க்குப் பின் எதிர்வினையை மதிப்பிடுகிறது.",
    },
    summary: {
      en: "Trial structure, playing-style profiles, interview questions, IP and SAP schools with established tennis programmes.",
      zh: "Trial 流程、打法风格、面试题、有网球设施的 IP/SAP 校。",
      ms: "Struktur trial, profil gaya, soalan temu duga, sekolah IP/SAP terkemuka.",
      ta: "சோதனை அமைப்பு, விளையாட்டு பாணி, கேள்விகள், IP/SAP பள்ளிகள்.",
    },
    sampleSchools: [
      "Anglo-Chinese School (Independent)",
      "Raffles Girls' School (Secondary)",
      "Raffles Institution",
      "St. Joseph's Institution",
      "Hwa Chong Institution",
      "Catholic High School",
    ],
    metaDescription: {
      en: "Tennis DSA-Sec trial guide for Singapore P6 — STA ranking context, what coaches assess, playing-style profiles, sample interview questions, IP and SAP participating schools.",
      zh: "新加坡 P6 网球 DSA-Sec trial 指南——STA 排名说明、教练评分维度、打法分析、面试题、IP/SAP 招生学校。",
      ms: "Panduan trial DSA-Sec Tenis Singapura — apa jurulatih nilai, profil gaya, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 டென்னிஸ் DSA-Sec வழிகாட்டி — அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore tennis trials typically run 60–90 minutes and are led by the school's head tennis coach (often STA / PTR / RPT-certified) plus the teacher-in-charge of Sports. The standard structure: dynamic warm-up and mini-tennis, baseline groundstroke rally drills (forehand cross-court, backhand cross-court, down-the-line), volley pair drills, serve and serve-receive sets, then short sets or pressure-points to the school's top players. STA SPEX Age Group ranking is checked beforehand — many coaches do not call trial candidates without a documented U10/U12/U14 result. Coaches lean on the six dimensions below.",
      },
      trialDimensions: [
        {
          label: { en: "Groundstroke consistency under cross-court rally" },
          body: {
            en: "Coaches run baseline cross-court rallies and count how many balls the candidate can keep in play with controlled depth and direction. A P6 player who can hit 15 forehand cross-court rallies into the back third of the court scores meaningfully higher than one with a heavier ball that lands consistently in the middle or breaks down at ball 8. Consistency at junior level predicts the Sec 3-4 baseline player who can sustain points; raw power without consistency predicts a flame-out.",
          },
        },
        {
          label: { en: "Footwork — split step, recovery, and weight transfer" },
          body: {
            en: "Coaches watch whether the player split-steps before every opponent contact, recovers to the middle (slightly behind the baseline) between every shot, and transfers weight forward through groundstrokes (instead of falling back on heavier balls). Active feet are the cheapest tell of a coached player. Coaches deliberately hit deeper balls late in the rally to test recovery and weight transfer — that's when self-taught players default to backing up and slap-hitting from behind the baseline.",
          },
        },
        {
          label: { en: "Serve placement, not just speed" },
          body: {
            en: "Most school trials require both first and second serves, with at least two placement variations on the first serve (T-line / body / wide) and a consistent kick or slice on the second. Coaches focus on whether the first serve goes in at 60% under match-day conditions and whether the second serve stays high to the backhand corner — not on raw pace. A reliable spinning second serve at P6 is more valuable to a school's NSG team than an inconsistent flat bomb.",
          },
        },
        {
          label: { en: "Net play and volley confidence" },
          body: {
            en: "Singapore school tennis at NSG includes both singles and doubles, with doubles points carrying equal team weight. Coaches assess whether the candidate has a clean volley grip (Continental, not Eastern), can move to the net behind an approach shot, and reads the partner's positioning in doubles. A P6 who plays only singles and freezes at net is a coaching project; one who has played doubles in primary school competitions has a meaningful edge.",
          },
        },
        {
          label: { en: "Mental game — composure after a lost rally" },
          body: {
            en: "The single highest-signal moment of a P6 trial. Coaches deliberately create losing situations (feeding the candidate's weakness, calling close balls in or out unpredictably) to watch whether the candidate resets calmly or visibly tilts. A P6 who walks back to the baseline, takes a breath, and resets is signalling four-year coachability; one who slumps shoulders, mutters, or smashes the racket head is scored down heavily even if the technical play was strong.",
          },
        },
        {
          label: { en: "Coachability and court behaviour between drills" },
          body: {
            en: "How the trialist behaves between drills, whether they pick up balls without being asked, encourage a hitting partner, and accept immediate corrections without sulking. International youth coaching research consistently rates these signals among the top predictors of long-term improvement — and Singapore school coaches, who'll work with this child for four years across NSG B and A divisions, weight them heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Baseline grinder (consistency-first)" },
          body: {
            en: "The default modern junior style and what most school coaches recruit. Coaches look for cross-court depth, the ability to extend rallies, and patience — building points with two or three groundstrokes before going for a winner. P6 candidates who can rally 20 cross-court groundstrokes and have a topspin lob in reserve outscore harder hitters who go for a winner on ball three.",
          },
        },
        {
          position: { en: "Aggressive baseliner (first-strike)" },
          body: {
            en: "A first-strike player who hunts forehand winners off the second serve return. Coaches assess whether the aggression has structure (set-up shots before the winner attempt) or is just hopeful flat hitting. A P6 with a strong forehand and a developing one-two punch pattern (serve plus forehand to the open court) is recruitable because that style scales to senior level — but only if the second strike is set up by the first, not random.",
          },
        },
        {
          position: { en: "All-court / serve-and-volley" },
          body: {
            en: "The rarest style and one a school coach will fast-track if they don't already have one. Coaches assess approach-shot quality, first-volley placement, and willingness to move to the net behind any serve, not just flat first serves. A P6 with credible serve-and-volley patterns is a unique asset because most opposing players at NSG B-Division have never trained against the style.",
          },
        },
        {
          position: { en: "Doubles specialist" },
          body: {
            en: "Coaches assess net movement, partner communication, and shot selection that protects the partner (cross-court returns at net player's middle). A P6 who plays singles well but freezes their partner's space in doubles is a coaching project; one who reads positioning and calls shots is a doubles-team asset from Sec 1. Singapore school NSG team scoring counts doubles points equally with singles, so doubles specialists are real recruits.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school tennis at P6 trial level usually does not lock a player to one style — coaches assess whether the existing shape is clean enough to refine. If your child plays mostly singles in primary-school competitions, mention any doubles experience explicitly in the trial; school NSG team need (doubles partner gaps in the existing roster) often drives which candidates receive offers between equally-strong technical players.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love tennis?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like winning\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete memory — a match, a coach moment, a turning point — then connect it to character.",
          },
          template: {
            en: "I lost a U10 STA Age Group final 4-6, 5-7 because I tried to hit through everything in the third set tiebreak. That night my coach asked me when I'd last hit a slice approach. I hadn't. That was the moment I learned tennis is a thinking game, not just a hitting game.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the tennis programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's tennis — a coach's name, an NSG result, a training pattern.",
          },
          template: {
            en: "ACS(I)'s tennis programme trains four times a week with STA-licensed coaches and the boys' team has been consistently top-four at NSG A-Division. That's the volume and the standard I want from Sec 1.",
          },
        },
        {
          question: { en: "What is your playing style and why?" },
          subtext: {
            en: "Can the kid articulate the style, not just label it?",
          },
          approach: {
            en: "Name the style plus what it requires from you.",
          },
          template: {
            en: "Baseline counter-puncher who can attack the second serve. My job is to extend the rally on neutral balls and step in on the second serve return. I picked the style because my forehand is more reliable than my opponent's patience — that's a 4-year game plan, not just one match.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I lost first round in three consecutive U12 STA tournaments because my second serve kept getting attacked. I spent eight weeks only on second serve — kick serve to the backhand. At the next tournament I made the round of 16 and my second serve didn't get attacked once.",
          },
        },
        {
          question: { en: "Is there a coach or hitting partner you remember most?" },
          subtext: {
            en: "Whether the kid sees coaching as a relationship or a transaction.",
          },
          approach: {
            en: "Name someone specific by role + what you learned from them.",
          },
          template: {
            en: "My P5 club coach made me play sets without serving — just rallying from one feed. I hated it because I wanted to compete with my serve. Now my rally tolerance is the most reliable part of my game. He taught me that the part of tennis you don't enjoy training is usually the part that's holding you back.",
          },
        },
        {
          question: { en: "How do you manage time with frequent trainings?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I finish English and Math homework on the bus to training and complete Science before dinner. Sunday is for revision. My mother shows my report book to my coach every term — if any subject drops a band, we cut one training. That's the rule we set together.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your head coach's emphasis on net play matches how I want to develop. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Tennis (Boys), IP" },
          context: {
            en: "IP school with one of Singapore's most established boys' tennis programmes. Multi-court on-campus facilities. Consistent NSG A-Division presence.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
          talentArea: { en: "Tennis (Girls), IP" },
          context: {
            en: "IP school with strong girls' tennis tradition. Tennis among RGS's published DSA talent areas. Sustained NSG presence across divisions.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/dsa-sec",
          talentArea: { en: "Tennis (Boys), IP" },
          context: {
            en: "IP school. Tennis among RI's published Sports DSA domain criteria. Sustained NSG A-Division participation.",
          },
        },
        {
          name: "St. Joseph's Institution",
          url: "https://www.sji.edu.sg/admission/dsa-at-sji/",
          talentArea: { en: "Tennis (Boys), IP / DSA-Sec" },
          context: {
            en: "Lasallian boys' school. Tennis among SJI's published DSA talent areas (IP and O Level). Active NSG B- and A-Division presence.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Tennis (Boys), IP" },
          context: {
            en: "IP school with active boys' tennis CCA. Among HCI's published DSA talent areas. Sustained NSG participation.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/",
          talentArea: { en: "Tennis (Boys), DSA-Sec" },
          context: {
            en: "SAP school — Higher Chinese / Chinese Language as Mother Tongue requirement applies. Active boys' tennis CCA.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.moe.edu.sg/secondary/admissions/dsa-sec1/",
          talentArea: { en: "Tennis (Girls), DSA-Sec" },
          context: {
            en: "Methodist heritage girls' school. Tennis among MGS's recognised DSA talent areas. NSG-active across divisions.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Tennis (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies school. Tennis among NYGH's recognised DSA talent areas.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://www.acsbr.moe.edu.sg/",
          talentArea: { en: "Tennis (Boys), DSA-Sec" },
          context: {
            en: "Boys' school with active tennis CCA. Regular NSG B-Division presence.",
          },
        },
        {
          name: "Singapore Sports School",
          url: "https://www.sportsschool.edu.sg/",
          talentArea: { en: "Tennis (Boys and Girls), Sports School admissions" },
          context: {
            en: "Specialist sports school with full-time tennis academy track for elite junior players. Separate admissions process distinct from standard DSA-Sec — but high-level STA-ranked candidates often apply to both.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Verify the STA SPEX Age Group ranking and competition record. MOE pulls CCA participation, school awards, NSG results, NAPFA, and STA-sanctioned competition results into the DSA portal directly. A documented U12 or U14 result is the single most-cited piece of evidence in tennis DSA — confirm it has been logged with your child's coach.",
            },
            {
              en: "Video-record one full practice set. Watch with your child, scoring just two behaviours: (1) did they split-step before every opponent contact? (2) after a lost rally, did they reset within five seconds or visibly tilt? These two are the highest-signal items in tennis trials.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: groundstroke pair work, serve placement (not power), light volleys, no new conditioning load. Final-week added matches rarely pay off and frequently produce a tweak (most commonly shoulder, wrist, or knee).",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire (most trials require tennis whites or school PE attire, tennis-specific non-marking shoes — running shoes are not acceptable). Bring own racket and at least two backup grips. Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "Hit with a stranger. On Singapore parent forums, a recurring observation is that kids underperform at trials because they only practise with familiar hitting partners. Force the awkwardness early — a Saturday club open session with unfamiliar players is the cheapest fix.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — not 30. Coaches deliberately push trial past the fatigue threshold and the last 15 minutes is where strokes and footwork break down.",
            },
            {
              en: "Bring two rackets, three grips, and a separate hat. A broken string or sweat-soaked grip is one of the few logistical failures that ends a P6 trial early — the cheap fix is having backups.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents on the court fence are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to two things only: cross-court groundstroke depth and second-serve placement (kick to the backhand). Cancel anything that competes with sleep. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private tennis coach at this stage. A good private coach can speed up specific habit changes — particularly serve consistency and footwork patterns — but no coach produces, in three sessions, the rally tolerance of a year of match play. Treat it as triage, not a fix.",
      },
    },
  },
  wushu: {
    slug: "wushu",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Wushu", zh: "武术", ms: "Wushu", ta: "வுஷு" },
    hook: {
      en: "Wushu DSA — trials reward stance depth and form-set precision, with SAP schools running the deepest programmes.",
      zh: "武术 DSA——trial 看桩功扎实度和套路精度，SAP 校项目最深",
      ms: "DSA Wushu — trial menghargai kedalaman kuda-kuda dan ketepatan rutin, dengan sekolah SAP mempunyai program terdalam.",
      ta: "வுஷு DSA — சோதனை நிலையின் ஆழமும் வடிவ துல்லியமும் மதிக்கிறது, SAP பள்ளிகளில் ஆழமான திட்டங்கள்.",
    },
    intro: {
      en: "Wushu in Singapore schools is a Taolu (forms-based) sport, distinct from sparring-based martial arts. The deepest programmes sit at SAP schools — Hwa Chong, Dunman High, River Valley, NYGH — and a small number of strong non-SAP schools. Singapore Wushu Federation (SWF) graded examinations and SWF Wushu Championships results feed directly into the DSA portal. Trials assess stance depth (馬步 / 弓步 / 虛步), the precision of basic technique sets (基本功 — kicks, punches, sweeps), one or two memorised form-sets (Changquan, Nanquan, Taijiquan, or a chosen weapon), and the candidate's posture, focus, and recovery from a slip. Power matters, but form correctness matters more.",
      zh: "新加坡中学武术是套路（Taolu）类项目，与对抗类格斗术不同。最深的项目集中在 SAP 校——华侨中学、Dunman High、河谷、南华——以及少数非 SAP 强校。新加坡武术联合会（SWF）段位考试与 SWF 武术锦标赛战绩直接反映在 DSA 系统中。Trial 看桩功扎实度（马步/弓步/虚步）、基本功精度（踢/打/扫）、1-2 套记忆套路（长拳、南拳、太极拳，或一种器械）、以及姿态、专注、失误后调整。力量有用，但形准更重要。",
      ms: "Wushu di sekolah Singapura adalah sukan berdasarkan Taolu (rutin), berbeza dengan seni mempertahankan diri berbentuk perlawanan. Program terdalam berada di sekolah SAP. Trial menilai kedalaman kuda-kuda, ketepatan teknik asas, dan rutin yang dihafal.",
      ta: "சிங்கப்பூர் பள்ளிகளில் வுஷு வடிவம் சார்ந்த விளையாட்டு (Taolu). மிக ஆழமான திட்டங்கள் SAP பள்ளிகளில். சோதனை நிலையின் ஆழம், அடிப்படை நுட்பத்தின் துல்லியம், மனப்பாட வடிவங்களை மதிப்பிடுகிறது.",
    },
    summary: {
      en: "Trial structure, form / weapon specialisation profiles, interview questions, SAP schools with strong Taolu wushu programmes.",
      zh: "Trial 流程、拳种/器械分析、面试题、Taolu 武术 SAP 强校。",
      ms: "Struktur trial, profil rutin / senjata, soalan temu duga, sekolah SAP terkemuka.",
      ta: "சோதனை அமைப்பு, வடிவம்/ஆயுதம் வகைகள், கேள்விகள், SAP பள்ளிகள்.",
    },
    sampleSchools: [
      "Hwa Chong Institution",
      "Dunman High School",
      "River Valley High School",
      "Nanyang Girls' High School",
      "Catholic High School",
      "Nan Hua High School",
    ],
    metaDescription: {
      en: "Wushu DSA-Sec trial guide for Singapore P6 — what coaches assess across stance / basics / forms / weapon, SWF ranking context, sample interview questions, SAP participating schools.",
      zh: "新加坡 P6 武术 DSA-Sec trial 指南——桩功/基本功/套路/器械评分、SWF 段位说明、面试题、SAP 招生学校。",
      ms: "Panduan trial DSA-Sec Wushu Singapura — apa jurulatih nilai, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 வுஷு DSA-Sec வழிகாட்டி — அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore wushu trials typically run 60–90 minutes and are led by the school's head wushu coach (often Singapore Wushu Federation-affiliated, frequently a former national team athlete) plus the teacher-in-charge of CCAs. The standard structure: dynamic warm-up and stretching, stance training (馬步 mabu, 弓步 gongbu, 虛步 xubu), basic technique stations (kicks 腿法, punches 拳法, sweeps 掃腿), one or two memorised forms (Changquan / Nanquan / Taijiquan / weapon form), and a short interview. Coaches lean on the six dimensions below, drawn from SWF grading frameworks and public CCA descriptions across SAP schools.",
      },
      trialDimensions: [
        {
          label: { en: "Stance depth and stability" },
          body: {
            en: "The single most-listened-for element in wushu. Coaches ask candidates to hold mabu (horse stance) at thigh-parallel depth for 30–60 seconds while observing knee tracking, hip alignment, and breathing. A P6 candidate who can hold a proper mabu for 30 seconds without visible knee wobble outscores a stronger jumper with a shallow stance. Stance is the foundation everything else is built on — coaches who recruit shallow-stance candidates know they're committing to 4 years of stance corrections.",
          },
        },
        {
          label: { en: "Basic technique precision (基本功 jibengong)" },
          body: {
            en: "Coaches run candidates through standard basic-technique sets — front kick (zhengtitui), side kick (cetitui), inside crescent kick (lihetui), straight punch (chongquan), palm strike (tuizhang), sweeps (saotui). The signal here is whether each technique terminates at the correct extension with the correct alignment, not how high or how fast. A P6 candidate with clean technique at 70% extension reads better than one with sloppy technique at 100% extension. Wushu coaches treat basics as the gateway dimension — strong basics signal trainability across the next four years.",
          },
        },
        {
          label: { en: "Form-set memorisation and precision" },
          body: {
            en: "Most schools ask candidates to perform one or two memorised forms — typically the SWF Grade-1/2/3 standardised forms or a competition form from a Singapore Wushu Federation-affiliated school. Coaches watch the sequencing (whether the candidate forgets a section), the transitions (whether stances are reached or floated), and the rhythm (the form has internal tempo, not just speed). Performing one form precisely is better than performing two forms with hesitation.",
          },
        },
        {
          label: { en: "Focus, gaze, and shen (神 — spirit / projection)" },
          body: {
            en: "The dimension that separates a future competition wushu athlete from a clean but mechanical performer. Coaches watch the eye direction during the form — whether the gaze follows the technique (eyes leading the hand in the chuanzhang) and whether there's intent behind the movement, not just memorisation. Wushu Taolu in Singapore school competition is judged partly on this performative quality (yi 意 — intent), and primary-school candidates who already project shen are recruited for competition-team potential.",
          },
        },
        {
          label: { en: "Recovery from a slip — mental composure" },
          body: {
            en: "Coaches deliberately watch what happens when a candidate forgets a section, loses balance on a stance, or stumbles on a sweep. The signal is whether the candidate stops in confusion, asks to restart, or continues with the next remembered section calmly. A P6 who can recover mid-form and finish with composure is signalling competition-readiness; one who stops and apologises is read as a coaching project. In SWF-graded competition there is no restart — the same applies in trial.",
          },
        },
        {
          label: { en: "Coachability and respect for the discipline" },
          body: {
            en: "How the candidate bows to the coach (gongshou greeting), accepts immediate corrections, and treats training equipment (the spear, sword, or staff is bowed to in many Singapore school traditions). International youth coaching research consistently rates these signals among the top predictors of long-term improvement — and Singapore school wushu coaches, who'll work with this child for four years through SWF grading and possibly competition team selection, weight them heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Changquan (long fist) specialist" },
          body: {
            en: "The most-recruited specialisation because Changquan is the primary northern-style form most schools teach. Coaches assess the wide low stances (mabu, gongbu transitions), the snap on jumping techniques (jumping front kick, butterfly kick if attempted), and the extension of arm-line techniques. A P6 candidate with a clean SWF Grade-2 or Grade-3 Changquan form is the bread-and-butter recruit for SAP school teams.",
          },
        },
        {
          position: { en: "Nanquan (southern fist) specialist" },
          body: {
            en: "Distinct style with deeper rooted stances and explosive short-range power. Coaches look for the characteristic Nanquan low broad stance (the rooted-bridge feel), the sharp bridge-hand techniques, and the percussive shouting (fasheng 發聲) that punctuates the form's accents. Nanquan candidates are valued at schools with a southern-style tradition — confirm the school's repertoire before committing to specialising here.",
          },
        },
        {
          position: { en: "Taijiquan (internal style) specialist" },
          body: {
            en: "Slower, internal-style forms emphasising structural alignment and breath coordination over external power. Coaches assess the continuity of movement (no visible breaks between postures), the spiral energy through the limbs (chansijin), and the sinking quality of the lower body. Singapore school wushu programmes that train Taijiquan are rarer — usually paired with Changquan as a second specialisation. Pure Taijiquan-only candidates may need to pair with another style for competition-team viability.",
          },
        },
        {
          position: { en: "Weapon-form specialist (sword 劍, sabre 刀, staff 棍, spear 槍)" },
          body: {
            en: "Most school wushu teams expect competition athletes to perform both a hand-form (taolu) and a weapon-form. Sword (jian) and sabre (dao) candidates are highly valued — these instruments demand wrist agility and fluid technique. Staff (gun) and spear (qiang) candidates are valued for the explosive whole-body power they signal. A P6 candidate with a clean sword form alongside a Changquan form is the most-recruited dual specialisation in SAP schools.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school wushu at P6 trial level usually does not require the candidate to commit to one style or weapon permanently — coaches assess current proficiency and trainability. If your child has primary-school exposure to multiple specialisations (e.g. Changquan + sword), audition with the strongest one but mention the second in the interview. Schools often build their competition rosters around a Changquan / weapon-form pairing — that combination is highly sought.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love wushu?" },
          subtext: {
            en: "Panels want a specific moment, not a generic appreciation of Chinese culture.",
          },
          approach: {
            en: "Open with one concrete memory — a form, a coach moment, a competition — then connect it to character.",
          },
          template: {
            en: "I lost my first SWF grading because I couldn't hold a proper mabu at the right depth. My coach made me hold mabu for 90 seconds at the start of every practice for four months. I passed the next grading. That was when I learned wushu is the only sport where the boring foundation is also the entire art.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the wushu programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's wushu — a coach's name, an SWF grading result, the SAP environment.",
          },
          template: {
            en: "Hwa Chong's wushu programme trains four times a week with a former national team coach, and the SAP environment means I can keep Higher Chinese alongside competitive training. That combination is rare.",
          },
        },
        {
          question: { en: "What is your style and weapon, and why?" },
          subtext: {
            en: "Can the kid articulate the specialisation, not just label it?",
          },
          approach: {
            en: "Name the style plus what playing it requires.",
          },
          template: {
            en: "Changquan with sword. My coach said my arm extension is better than my power, so the sword's wrist agility matches my body. I want to learn Nanquan in secondary because I think the explosive power will balance my style.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I forgot the second half of my form during an SWF Championship in P5 and froze on stage. I started practising forms with deliberate \"forgetting\" — my coach would call out a random section and I had to continue from there. At the next competition I forgot a transition but continued without anyone noticing.",
          },
        },
        {
          question: { en: "Is there a coach or training partner you remember most?" },
          subtext: {
            en: "Whether the kid sees coaching as a relationship or a transaction.",
          },
          approach: {
            en: "Name someone specific by role + what you learned from them.",
          },
          template: {
            en: "My P5 senior in the school wushu team made me bow before every form, even in practice. I thought it was unnecessary. Now I realise the bow forces the breath to settle — it's not ceremony, it's the start of the form's rhythm. She taught me that the tradition is the technique.",
          },
        },
        {
          question: { en: "How do you manage time with frequent trainings?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I do English and Math homework before dinner because the body is too tired after practice. My mother shows my report book to my coach every term — if any subject drops a band, we cut one practice. That's the rule we set together.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your coach's emphasis on stance discipline matches how I want to train. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Wushu (Boys), IP" },
          context: {
            en: "SAP and Bicultural Studies school. Wushu among HCI's published DSA talent areas. Multi-year SWF Wushu Championship participation; former national team coaches on staff in past decades.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Wushu (Boys and Girls), IP / DSA-Sec" },
          context: {
            en: "SAP school. Wushu among Dunman's 2026 DSA FAQ talent areas, both boys' and girls' divisions. Sustained SWF Championship participation.",
          },
        },
        {
          name: "River Valley High School",
          url: "https://www.rivervalleyhigh.moe.edu.sg/",
          talentArea: { en: "Wushu (Boys and Girls), IP / DSA-Sec" },
          context: {
            en: "SAP school with Bicultural Studies. Wushu among RVHS's recognised DSA talent areas. Strong CCA presence across both divisions.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Wushu (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies school. Wushu among NYGH's recognised DSA talent areas. SWF-affiliated coaching.",
          },
        },
        {
          name: "Catholic High School",
          url: "https://www.catholichigh.moe.edu.sg/",
          talentArea: { en: "Wushu (Boys), DSA-Sec" },
          context: {
            en: "SAP school — Higher Chinese / Chinese Language as Mother Tongue requirement applies. Boys' wushu CCA with sustained SWF Championship presence.",
          },
        },
        {
          name: "Nan Hua High School",
          url: "https://www.nanhuahigh.moe.edu.sg/announcements/talent-areas-for-dsa/",
          talentArea: { en: "Wushu, DSA-Sec" },
          context: {
            en: "SAP school. Wushu among Nan Hua's published DSA talent areas. Higher Chinese / Chinese Language as Mother Tongue requirement applies.",
          },
        },
        {
          name: "Maris Stella High School",
          url: "https://www.marisstellahigh.moe.edu.sg/",
          talentArea: { en: "Wushu (Boys), DSA-Sec" },
          context: {
            en: "SAP school. Boys' wushu CCA. Higher Chinese / Chinese Language as Mother Tongue requirement applies.",
          },
        },
        {
          name: "Chung Cheng High School (Main)",
          url: "https://www.chungchenghighmain.moe.edu.sg/direct-school-admission-dsa/",
          talentArea: { en: "Wushu (Boys and Girls), DSA-Sec" },
          context: {
            en: "SAP school. Wushu among Chung Cheng's published DSA talent areas; sustained CCA tradition.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Wushu (Boys), IP" },
          context: {
            en: "IP school. Wushu among ACS(I)'s recognised CCAs with sustained SWF participation, despite non-SAP status.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
          talentArea: { en: "Wushu (Girls), IP" },
          context: {
            en: "IP school. Wushu among RGS's recognised DSA talent areas; published in the 2026 Information on Application brief.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Confirm SWF grading and competition records. MOE pulls CCA participation, school awards, SWF Wushu Championship results, NAPFA, and external SWF grading certifications into the DSA portal directly. Ask your wushu coach to verify what's been logged — a documented SWF Grade 3 or above is the single most-cited evidence in wushu DSA.",
            },
            {
              en: "Video-record one full form performance. Watch with your child, scoring just two behaviours: (1) at the bottom of every mabu, does the knee track over the toe with the thigh parallel to the ground? (2) during transitions, do the eyes follow the technique (gaze leads hand), or stay locked forward? These two are the highest-signal items in wushu trials.",
            },
            {
              en: "Practise the chosen form daily, plus 5 minutes of stance hold. The stance hold builds the foundation that coaches assess first. New forms in the final weeks rarely pay off; refine the existing form's lowest stance and sharpest technique instead.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: stance work, technique repetition at 80% speed, the chosen form twice per session (start and middle of practice). No new techniques. No new jumps. Final-week added jumping rarely pays off and frequently produces a knee or ankle tweak.",
            },
            {
              en: "Confirm logistics in writing. Time, venue, attire (most trials require wushu uniform / changshan or school PE attire — wushu shoes (light flexible soles) recommended, NOT running shoes). Bring the weapon if performing a weapon-form. Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "Sleep, hydration, no late practice the day before. Stretch lightly the day before but do not condition heavily — the body should arrive at the trial fresh, not sore.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Arrive 60 minutes early. Warm up properly — joints, dynamic stretching, light stance hold. Wushu warm-up is more involved than other sports because the trial demands full ranges of motion immediately.",
            },
            {
              en: "Eat 90 minutes before — not 30. Avoid heavy or oily food. Bring a bottle of room-temperature water.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name (gongshou greeting is appropriate in wushu context), leave. Over-involved parents are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to two things only: mabu depth (hold for 30 seconds at thigh-parallel without knee wobble) and the chosen form's transitions (eyes leading the hand). Cancel anything that competes with sleep. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private wushu coach at this stage. A good private coach can speed up specific habit changes — particularly stance depth and form transitions — but no coach produces, in three sessions, the body foundation of a year of stance training. Treat it as triage, not a fix.",
      },
    },
  },
  "water-polo": {
    slug: "water-polo",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Water Polo", zh: "水球", ms: "Polo Air", ta: "வாட்டர் போலோ" },
    hook: {
      en: "Water polo DSA — trials reward egg-beater stamina and one-handed ball control, with strong swimming background as the unstated prerequisite.",
      zh: "水球 DSA——trial 看蛋打腿耐力和单手控球，强游泳基础是默认前提",
      ms: "DSA Polo Air — trial menghargai stamina kayuhan egg-beater dan kawalan bola sebelah tangan, dengan latar belakang renang kuat sebagai prasyarat.",
      ta: "வாட்டர் போலோ DSA — egg-beater கால் வலிமை மற்றும் ஒரு கையில் பந்து கட்டுப்பாட்டை மதிக்கிறது, வலுவான நீச்சல் பின்னணி அமைப்புத் தேவை.",
    },
    intro: {
      en: "Water polo in Singapore is concentrated at a small number of schools with established programmes — ACS(I), ACS(BR), SJI, RI, HCI for boys, and a smaller cluster (MGS, RGS, SCGS) for girls. The unstated entry requirement is strong swimming: most water polo DSA recruits already swim at NSG-competitive levels (often 1:15 or faster for 100m freestyle long-course). Trials assess egg-beater treading stamina, one-handed ball control while treading, passing accuracy, shooting variety, and how the candidate reads a crowded six-on-six situation. NSG Zone and National Schools water polo competition results at primary level are explicitly cited by ACS(I) as DSA criteria.",
      zh: "新加坡水球集中在少数有传统的学校——男队 ACS(I)/ACS(BR)/SJI/RI/HCI，女队 MGS/RGS/SCGS。默认入门门槛是强游泳：多数水球 DSA 招生本身已是 NSG 级游泳手（100m 长池自由泳常在 1:15 以内）。Trial 看蛋打腿（egg-beater）耐力、单手控球（边踩水边接传）、传球精度、射门变化、读 6 对 6 拥挤场面的能力。ACS(I) 明确说 NSG Zone 与 National Schools 小学水球战绩是 DSA 评估依据。",
      ms: "Polo air di Singapura tertumpu pada bilangan kecil sekolah dengan program mantap. Keperluan tersirat adalah renang kuat. Trial menilai stamina egg-beater, kawalan bola sebelah tangan, ketepatan hantaran, dan pembacaan situasi enam-lawan-enam.",
      ta: "சிங்கப்பூரில் வாட்டர் போலோ சில பள்ளிகளில் தொகுக்கப்பட்டுள்ளது. மறைமுக தேவை வலுவான நீச்சல் பின்னணி. சோதனை egg-beater வலிமை, பந்து கட்டுப்பாடு, ஹண்டிங் துல்லியம், ஆறு-மீது-ஆறு வாசிப்பை மதிப்பிடுகிறது.",
    },
    summary: {
      en: "Trial structure, position-specific habits, interview questions, water-polo-active schools across boys' and girls' divisions.",
      zh: "Trial 流程、位置专项习惯、面试题、水球活跃男女校。",
      ms: "Struktur trial, tabiat khusus posisi, soalan temu duga, sekolah aktif polo air.",
      ta: "சோதனை அமைப்பு, நிலை சார்ந்த பழக்கங்கள், கேள்விகள், பள்ளிகள்.",
    },
    sampleSchools: [
      "Anglo-Chinese School (Independent)",
      "Anglo-Chinese School (Barker Road)",
      "St. Joseph's Institution",
      "Raffles Institution",
      "Hwa Chong Institution",
      "Methodist Girls' School (Secondary)",
    ],
    metaDescription: {
      en: "Water polo DSA-Sec trial guide for Singapore P6 — what coaches assess across treading / passing / shooting / positions, NSG context, sample interview questions, water-polo-active participating schools.",
      zh: "新加坡 P6 水球 DSA-Sec trial 指南——踩水/传球/射门/位置评分、NSG 说明、面试题、水球活跃学校。",
      ms: "Panduan trial DSA-Sec Polo Air Singapura — apa jurulatih nilai, posisi, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 வாட்டர் போலோ DSA-Sec வழிகாட்டி — அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore water polo trials typically run 90–120 minutes in the pool, often split between a fitness segment and a small-sided game segment. The standard structure: warm-up swim (commonly 400-800m at moderate intensity), egg-beater and treading drills, one-handed ball handling stations (catch, pass, dribble while swimming), shooting from set positions (5m line, perimeter, drive-shot), then 4-on-4 or 5-on-5 scrimmage to the school's top players. Coaches commonly cite NSG and age-group competition results explicitly as DSA criteria. Six dimensions emerge from public DSA briefs (ACS(I), SJI) and FINA / Singapore Aquatics youth water polo frameworks.",
      },
      trialDimensions: [
        {
          label: { en: "Egg-beater treading stamina and elevation" },
          body: {
            en: "The single most-tested element. Coaches run treading sets — often 30 seconds elevated arms-out-of-the-water, repeated 4-6 times with brief rest — and watch shoulder height, head position, and breathing control. A P6 candidate who can keep shoulders above water for full 30-second sets is signalling readiness for game-pace play. Treading is the unique water-polo demand that gym-fit swimmers usually underestimate.",
          },
        },
        {
          label: { en: "One-handed ball handling while moving" },
          body: {
            en: "Coaches feed wet passes at varying angles and watch whether the candidate can catch one-handed, dribble with the ball just ahead of the body (not lifted out of water), and pass cleanly without two-handed lifts (which incur turnovers under FINA rules). A P6 candidate who can catch-and-release in one motion outscores a stronger swimmer who needs both hands for ball control.",
          },
        },
        {
          label: { en: "Passing accuracy under defensive pressure" },
          body: {
            en: "Coaches stage 5–7m pair drills with a defender's arm pressure, then progress to triangle drills with two passers and one mover. They look for accurate dry passes (over-the-water, no splash) to the receiver's catching hand, leading passes (ahead of the swimmer), and the recognition of when to pass long versus reset short. The signal is consistency under match-pace tempo — coaches watch whether the trialist panics into a hopeful pass or finds the next option.",
          },
        },
        {
          label: { en: "Shooting variety and accuracy" },
          body: {
            en: "Most schools test at least three shot types: a perimeter power shot (from 5–7m), a backhand or skip shot, and a quick release after receiving (no winding-up). Coaches focus on placement (high corners and skip-off-the-water are hardest to save) and the speed of the catch-and-release. A P6 who can deliberately skip a shot off the water at the goalkeeper's chest scores higher than one with a faster but predictably-aimed straight shot.",
          },
        },
        {
          label: { en: "Reading the 6-on-6 game" },
          body: {
            en: "In small-sided games, coaches assess whether the candidate understands movement patterns — sprinting back on defence, the centre forward setting position, the perimeter rotation. Water polo at P6 trial level is messy by definition; coaches watch whether the candidate creates space, supports the carrier, and recovers defensively. A P6 who plays without the ball intelligently is recruited over one who only stands out when receiving.",
          },
        },
        {
          label: { en: "Coachability and pool-deck behaviour" },
          body: {
            en: "How the trialist behaves between sets, whether they exit and re-enter the pool calmly, encourage a teammate after a missed shot, and accept immediate corrections without sulking. International youth coaching research consistently rates these signals among the top predictors of long-term improvement — and Singapore school coaches, who'll work with this child for four years across NSG B and A divisions, weight them heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Driver / Perimeter" },
          body: {
            en: "The most-recruited cluster — every team needs reliable shooters and passers around the perimeter. Coaches assess shooting variety (perimeter shot + skip + quick release), the ability to drive into the centre on a counter-attack, and defensive recovery to mark the opposing driver. A P6 driver with two reliable shot types and clean defensive transition is the bread-and-butter water polo recruit.",
          },
        },
        {
          position: { en: "Centre Forward (Hole)" },
          body: {
            en: "Specialist position requiring strong upper body, low centre of gravity, and ability to receive passes with defenders draped on the back. Coaches assess holding position in the 2m area (without offence-foul drawing), one-handed receive-and-shoot under pressure, and drawing exclusions. Centre forwards are highly recruited but candidates need both size and bait-and-pull instinct — coaches can train technique but not the willingness to take physical contact.",
          },
        },
        {
          position: { en: "Centre Back / Defender" },
          body: {
            en: "The position that anchors team defence in front of the goalkeeper. Coaches assess defensive treading depth (sinking when needed), one-handed pressing on the opposing centre forward (without foul accumulation), and the long pass to start the counter-attack. A P6 centre back with a strong long pass beats a stronger swimmer who can only clear short.",
          },
        },
        {
          position: { en: "Goalkeeper (specialist trial)" },
          body: {
            en: "Specialist position with a separate trial. Coaches assess vertical jump from a tread (the explosive lift on a save), wingspan reach, reflex on close shots, and the first-pass to start the counter-attack. Goalkeepers play in different gear (a different-coloured cap, weighted shorts in some leagues) and the trial is run with a smaller pool of candidates. A P6 with a strong vertical and clean catching hands is a multi-year asset because keeper development takes longer than field-player development.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school water polo at P6 trial level usually does not lock a player to one position — coaches assess versatility across perimeter, centre, and defence roles. Goalkeeper is usually a separate decision because keeper trials are scheduled distinctly. If your child plays multiple positions in primary-school games, mention all of them; the school's existing roster (graduating cohort gaps) often drives which position recruits a specific candidate.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love water polo?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like the sport\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete memory — a match, a teammate, a turning point — then connect it to character.",
          },
          template: {
            en: "We lost the inter-school P5 quarter-final because I lost track of the centre forward on a 6-on-5 defence. That night I asked my coach what I should have done — I'd been watching the ball, not the player. That was when I realised water polo is the only swimming-based sport where your eyes matter more than your stroke.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the water polo programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's water polo — a coach's name, an NSG result, a training pattern.",
          },
          template: {
            en: "ACS(I)'s water polo programme has produced national-team players consistently. The 4-times-a-week training and the on-campus pool are exactly the setup I want from Sec 1.",
          },
        },
        {
          question: { en: "What position do you play and why?" },
          subtext: {
            en: "Can the kid articulate the role, not just label it?",
          },
          approach: {
            en: "Name the position plus the job.",
          },
          template: {
            en: "Driver. My job is to swim at counter-attack pace, shoot from the perimeter, and recover to mark the opposing driver before the next attack. I picked the position because my freestyle is strong and I like the responsibility for both ends of the pool.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I got my egg-beater scoring rejected in a P5 trial because my shoulders dropped under the surface after 20 seconds. I spent eight weeks adding egg-beater intervals to every swim training — 4 x 30s with 10s rest. By NSG I could tread arms-out for full game length.",
          },
        },
        {
          question: { en: "Is there a teammate or coach you remember most?" },
          subtext: {
            en: "Whether the kid sees teammates as people or background.",
          },
          approach: {
            en: "Name someone specific by role + what you learned from them.",
          },
          template: {
            en: "Our P6 captain played centre forward and refused to be moved off the 2m line by any defender. Watching him take the contact and still receive cleanly taught me that water polo position is held by intent, not by size. I'm not big enough for hole yet, but his composure is what I copy.",
          },
        },
        {
          question: { en: "How do you manage time with frequent trainings?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I do English and Math homework on the bus to training and finish Science before dinner. Sunday is for revision. My mother shows my report book to my coach every term — if any subject drops a band, we cut one training. That's the rule we set together.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your coach's emphasis on egg-beater conditioning matches what I most want to develop. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/waterpolo/",
          talentArea: { en: "Water Polo (Boys), IP" },
          context: {
            en: "IP school with Singapore's most decorated school water polo programme. Multi-decade NSG A-Division dominance. ACS(I)'s 2025 DSA brief explicitly lists trial dates, NSG result requirements, and selection criteria for water polo.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://www.acsbr.moe.edu.sg/",
          talentArea: { en: "Water Polo (Boys), DSA-Sec" },
          context: {
            en: "Sister school to ACS(I) with strong boys' water polo CCA tradition. Regular NSG B- and A-Division presence.",
          },
        },
        {
          name: "St. Joseph's Institution",
          url: "https://www.sji.edu.sg/admission/dsa-at-sji/",
          talentArea: { en: "Water Polo (Boys), IP / DSA-Sec" },
          context: {
            en: "Lasallian boys' school. Water polo among SJI's published DSA talent areas (IP and O Level). Sustained NSG B- and A-Division presence.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/dsa-sec",
          talentArea: { en: "Water Polo (Boys), IP" },
          context: {
            en: "IP school. Water polo among RI's published Sports DSA domain criteria. Sustained NSG A-Division participation.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Water Polo (Boys), IP" },
          context: {
            en: "IP school. Water polo among HCI's published DSA talent areas. Sustained NSG participation.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.moe.edu.sg/secondary/admissions/dsa-sec1/",
          talentArea: { en: "Water Polo (Girls), DSA-Sec" },
          context: {
            en: "Methodist heritage girls' school. Water polo among MGS's recognised DSA talent areas. Strong NSG girls' division participation.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
          talentArea: { en: "Water Polo (Girls), IP" },
          context: {
            en: "IP school. Water polo among RGS's recognised DSA talent areas; published in the 2026 Information on Application brief.",
          },
        },
        {
          name: "Singapore Chinese Girls' School",
          url: "https://www.scgs.moe.edu.sg/prospective-students/secondary-admission/direct-school-admission/",
          talentArea: { en: "Water Polo (Girls), DSA-Sec" },
          context: {
            en: "SAP girls' school. Water polo among recognised DSA talent areas in the 2026 DSA Infosheet.",
          },
        },
        {
          name: "St. Andrew's Secondary School",
          url: "https://www.standrewssec.moe.edu.sg/",
          talentArea: { en: "Water Polo (Boys), DSA-Sec" },
          context: {
            en: "Anglican boys' school. Water polo with sustained NSG presence; St. Andrew's CCA pages and DSA briefs cite competitive water polo.",
          },
        },
        {
          name: "Outram Secondary School",
          url: "https://www.outramsec.moe.edu.sg/",
          talentArea: { en: "Water Polo (Boys), DSA-Sec" },
          context: {
            en: "Recognised water polo CCA. Regular NSG B-Division participation.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Verify swimming and water polo records. MOE pulls CCA participation, school awards, NSG Zone and National Schools water polo results, swimming PB times (where the school logs them), and Singapore Aquatics-sanctioned competition results into the DSA portal directly. ACS(I)'s 2025 DSA brief is explicit that primary-level NSG water polo participation is a criterion — confirm the result has been logged.",
            },
            {
              en: "Video-record one full small-sided game. Watch with your child, scoring just two behaviours: (1) at the 30-second mark of any treading sequence, are the shoulders still above water or sinking? (2) when receiving a pass, is the second hand under the water on a treading stroke or up reaching for the ball? These two are the highest-signal items in water polo trials.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: technical sets (egg-beater, dry pass pairs), light shooting, no new heavy conditioning load. Final-week heavy swim sets rarely pay off and frequently produce a shoulder or hip tweak.",
            },
            {
              en: "Confirm logistics in writing. Time, venue (most school pools — confirm which one), attire (most trials require school swim trunks or competition jammers for boys, training one-piece for girls, plus a competition-style cap if owned). Bring two pairs of goggles. Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "Hydrate, eat enough, sleep. Pool training is dehydrating in ways young athletes underestimate.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — not 30 — and choose a meal that won't sit heavy (avoid heavy carbs and dairy immediately before). The last 20 minutes of trial is where treading endurance breaks down on a heavy stomach.",
            },
            {
              en: "Bring two pairs of goggles. A snapped strap mid-trial is one of the few logistical failures that disrupts a P6 trial — the cheap fix is having backups.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents on the pool deck are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to two things only: 30-second egg-beater holds (shoulders above water) and one-handed catch-and-release pairs (no two-hand lifts). Cancel anything that competes with sleep and the shoulder. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private water polo coach at this stage. A good private coach can speed up specific habit changes — particularly egg-beater technique and quick-release passing — but no coach produces, in three sessions, the swimming foundation of a year of NSG-level training. Treat it as triage, not a fix.",
      },
    },
  },
  sailing: {
    slug: "sailing",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Sailing", zh: "帆船", ms: "Pelayaran", ta: "படகோட்டம்" },
    hook: {
      en: "Sailing DSA — trials reward race-result ranking and on-water decision-making, with documented Optimist-class racing as the threshold signal.",
      zh: "帆船 DSA——招生看赛事排名和水上决策能力，Optimist 级赛事战绩是入门门槛信号",
      ms: "DSA Pelayaran — uji bakat menghargai kedudukan keputusan perlumbaan dan pembuatan keputusan di atas air, dengan perlumbaan kelas Optimist sebagai isyarat ambang.",
      ta: "படகோட்டம் DSA — பந்தயம் தரவரிசை மற்றும் நீரில் முடிவெடுக்கும் திறனை மதிக்கிறது, Optimist கிளாஸ் முடிவுகள் தேவையான அளவீடாகும்.",
    },
    intro: {
      en: "Sailing is among Singapore's most resource-intensive school sports — concentrated at IP and elite-sports schools with access to coaching at the National Sailing Centre (Changi Sailing Club) or affiliated clubs. The default racing class for the P6 cohort is the Optimist (8-15 years old) — Singapore Sailing Federation-sanctioned regatta results and Singapore Schools National Sailing Championships placings are explicitly the primary DSA signals. Trials assess wind-reading, boat-handling under varying conditions, racing tactics (start-line, mark roundings, downwind), and capsize-recovery composure. This is one of the few sports where documented competition results often matter more than trial-day performance.",
      zh: "帆船是新加坡资源密集度最高的学校运动之一——集中在 IP 校和体校 · 教练资源主要在国家帆船中心（樟宜帆船俱乐部）或附属俱乐部。P6 阶段默认赛艇等级是 Optimist（8-15 岁）——新加坡帆船联合会（SSF）官方认证赛事战绩和 Singapore Schools National Sailing Championships 名次明确是 DSA 主要信号。Trial 看读风、不同水况下的操船、比赛战术（起航线/绕标/下风航段）、翻船恢复时的冷静。这是少数赛事战绩比 trial 当天表现更重要的项目。",
      ms: "Pelayaran adalah antara sukan sekolah paling intensif sumber di Singapura. Kelas perlumbaan lazim untuk P6 adalah Optimist. Keputusan perlumbaan SSF dan Singapore Schools National Sailing Championships adalah isyarat DSA utama.",
      ta: "சிங்கப்பூரில் படகோட்டம் வளம் சார்ந்த விளையாட்டு. P6 க்கான இயல்பான பந்தய வகுப்பு Optimist. SSF பந்தய முடிவுகள் முதன்மை DSA சமிக்ஞையாகும்.",
    },
    summary: {
      en: "Trial structure, racing-class focus, interview questions, IP and elite-sports schools with established sailing programmes.",
      zh: "Trial 流程、赛艇等级分析、面试题、有帆船设施的 IP 与体校。",
      ms: "Struktur trial, kelas perlumbaan, soalan temu duga, sekolah IP terkemuka.",
      ta: "சோதனை அமைப்பு, பந்தய வகுப்புகள், கேள்விகள், IP பள்ளிகள்.",
    },
    sampleSchools: [
      "Raffles Girls' School (Secondary)",
      "Raffles Institution",
      "Dunman High School",
      "Anglo-Chinese School (Independent)",
      "Hwa Chong Institution",
      "Singapore Sports School",
    ],
    metaDescription: {
      en: "Sailing DSA-Sec trial guide for Singapore P6 — Optimist racing context, SSF regatta ranking, what coaches assess, sample interview questions, IP and elite-sports participating schools.",
      zh: "新加坡 P6 帆船 DSA-Sec trial 指南——Optimist 赛事说明、SSF 排名、教练评分维度、面试题、IP/体校招生学校。",
      ms: "Panduan trial DSA-Sec Pelayaran Singapura — apa jurulatih nilai, kelas, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 படகோட்டம் DSA-Sec வழிகாட்டி — அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore sailing trials usually run as two-day on-water assessments at affiliated clubs (often National Sailing Centre, Changi Sailing Club, or Republic of Singapore Yacht Club). The structure varies by school: some run a short fleet race observation (one or two short courses), others run a skill-based assessment (rigging, boat-handling drills, capsize recovery). Most coaches lean heavily on documented Optimist regatta results and SSF national-squad participation before the on-water assessment. Six dimensions emerge from public Singapore Sailing Federation youth coaching frameworks and ACS / RI / RGS sailing programme descriptions.",
      },
      trialDimensions: [
        {
          label: { en: "Wind-reading and tactical decision-making" },
          body: {
            en: "The single highest-signal element. Coaches deliberately watch whether the candidate reads wind shifts (looking up the course, observing flag and ripple direction) and adjusts course accordingly — heading up in a lift, easing off in a header. A P6 sailor who actively scans the water for new pressure and shifts before reaching it scores far higher than one with cleaner boat-handling but reactive (not predictive) tactical play. Wind-reading is the hardest skill to coach because it requires sustained on-water hours.",
          },
        },
        {
          label: { en: "Boat-handling — tacks, gybes, mark roundings" },
          body: {
            en: "Coaches assess whether the candidate's tack is smooth (boat heel managed, balance maintained, sail trim adjusted within 2 seconds of the tack completing), whether downwind gybes are controlled (no flying jibe, sheets handled properly), and whether mark roundings are tight (tactical priority — wide entry, tight exit). Boat-handling at P6 level is the most heavily-coached technical layer, and trials test whether the candidate is reproducing handling from instinct or from memorised drill.",
          },
        },
        {
          label: { en: "Start-line execution" },
          body: {
            en: "Coaches watch how the candidate approaches the start line under the 5-4-1-0 countdown sequence: holding position with a controlled luffing technique, judging the line bias, accelerating cleanly at zero with full sail trim. A clean start is worth 20-30 places at junior regatta level, and coaches assess this from the start-sequence drills run in trial. A P6 with documented start-line discipline at regatta level is a multi-year asset.",
          },
        },
        {
          label: { en: "Capsize recovery and composure" },
          body: {
            en: "Most trials include a deliberate capsize-and-righting drill — usually one full capsize, one quick-recovery. Coaches assess the candidate's calmness in the water, the technique of climbing onto the centreboard to right the boat (not pulling from the gunwale), and the speed of resuming sailing. A P6 who recovers a capsize in under 30 seconds and immediately resumes racing posture signals competition-readiness; one who panics or asks for assistance is flagged as a safety project.",
          },
        },
        {
          label: { en: "Rigging knowledge and equipment care" },
          body: {
            en: "Coaches assess whether the candidate can rig the boat without assistance — stepping the mast, attaching the sail with correct ties, adjusting outhaul and vang for the day's wind. This is the cheapest tell of accumulated club hours. Schools recruit candidates who treat the equipment as their own — those candidates don't break gear and don't cost the programme replacement equipment.",
          },
        },
        {
          label: { en: "Coachability and shore-side behaviour" },
          body: {
            en: "How the candidate behaves on the boat ramp, whether they help launch and retrieve other boats, accept immediate corrections without sulking, and pack equipment correctly at the end. The Singapore Sailing Federation youth programme emphasises shore-side conduct heavily — and school sailing coaches, who'll work with this child for four years through to NSG and possibly national squad, weight these signals heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Optimist single-handed (primary P6 class)" },
          body: {
            en: "The dominant class for the P6 cohort. Coaches assess weight class management (Optimists range from ~30-55 kg sailor weight — heavier sailors are favoured downwind, lighter sailors upwind), single-handed boat-handling, and tactical confidence at junior regattas. Most candidates audition in Optimist; transitioning to dinghy classes (420, ILCA 6) happens in Sec 1-2 as the sailor grows.",
          },
        },
        {
          position: { en: "ILCA 6 / Laser Radial (upper-end Sec range)" },
          body: {
            en: "Some P6 sailors who have outgrown Optimists already train in ILCA 6. Coaches assess whether the candidate handles the bigger boat with appropriate fitness (hiking strength, athleticism at sail trim), and whether the transition has been managed carefully (sail control changes substantially from Optimist). A P6 in ILCA 6 with clean technique is rare and recruited aggressively.",
          },
        },
        {
          position: { en: "420 / double-handed (rare at P6)" },
          body: {
            en: "Two-person dinghy class typically begun in Sec range. Some P6 candidates have early experience as crew (jib + spinnaker handling) in a 420. Coaches assess crew-helm communication, the technical layer of spinnaker work, and willingness to specialise. 420 candidates often signal a serious long-term sailing pathway because the class supports SEA Games-level pathways in Singapore.",
          },
        },
        {
          position: { en: "Catamaran / windsurfing / kiteboarding (specialist)" },
          body: {
            en: "Rare at P6 level but increasingly recruited by elite-sports schools (especially Singapore Sports School) as Singapore's national sailing programme expands across classes. Coaches assess prior experience explicitly and evaluate whether the school's existing programme can support the discipline. Mention this in the application — these specialisations are tracked separately at recruitment.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school sailing at P6 trial level usually centres on the Optimist class. If your child has trained in multiple classes (Optimist + 420 as crew, for example), mention both; the school's existing roster and the SSF national pathway shape which class assignment recruits a specific candidate. Sailing-friendly weight changes through teenage years also drive class transition decisions, so coaches assess long-term class fit alongside current performance.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love sailing?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like being on the water\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete memory — a regatta, a wind shift, a teammate moment — then connect it to character.",
          },
          template: {
            en: "I won my first Optimist regatta race because I noticed a wind shift on the right side of the course while everyone tacked left. I'd watched the flag at the start for ten minutes. That was when I realised sailing rewards the person who pays attention more than the person who's strongest.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the sailing programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's sailing — a coach's name, a regatta result, a training pattern.",
          },
          template: {
            en: "RGS's sailing programme uses the same coach group as the SSF Optimist national squad and trains four times a week at NSC. That's the volume and the standard I want from Sec 1.",
          },
        },
        {
          question: { en: "What class do you sail and why?" },
          subtext: {
            en: "Can the kid articulate the class, not just label it?",
          },
          approach: {
            en: "Name the class plus what it asks of you.",
          },
          template: {
            en: "Optimist. My weight (38 kg) puts me at the upper end of competitive — heavier sailors are favoured downwind so my game plan in light winds is to position upwind, then capitalise downwind. I'll transition to ILCA 6 in Sec 1 or Sec 2 depending on growth.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I capsized at the start of the last race of a national regatta and finished last. My coach made me drill capsize-recovery every Saturday for two months. At the next regatta I capsized again — and was back racing in 22 seconds. The difference was practice, not luck.",
          },
        },
        {
          question: { en: "Is there a teammate or coach you remember most?" },
          subtext: {
            en: "Whether the kid sees coaching as a relationship or a transaction.",
          },
          approach: {
            en: "Name someone specific by role + what you learned from them.",
          },
          template: {
            en: "My P5 Optimist coach made the whole training group watch the start sequence from the coach boat for 15 minutes before any racing. We were bored — but I now read start-line bias automatically. He taught me that the boring part of sailing is the part that wins.",
          },
        },
        {
          question: { en: "How do you manage time with frequent trainings?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I finish English and Math homework on the bus to NSC and complete Science before dinner on training days. Weekend regattas eat my Saturday, so I do revision on Sunday. My mother shows my report book to my coach every term — that's the rule we set together.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your coach group is the SSF Optimist national-squad coach — that's the pathway I want. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
          talentArea: { en: "Sailing (Girls), IP" },
          context: {
            en: "IP school with one of Singapore's most established girls' sailing programmes. Multi-year top-tier NSG presence. Sailing among RGS's published DSA talent areas.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/dsa-sec",
          talentArea: { en: "Sailing (Boys), IP" },
          context: {
            en: "IP school. Sailing among RI's published Sports DSA domain criteria. Sustained NSG and national-squad pathway.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Sailing (Boys and Girls), IP / DSA-Sec" },
          context: {
            en: "SAP school. Sailing among Dunman's 2026 DSA FAQ talent areas. Coastal location supports a strong sailing CCA.",
          },
        },
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Sailing (Boys), IP" },
          context: {
            en: "IP school. Sailing among ACS(I)'s published DSA talent areas. Sustained NSG-active programme.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Sailing (Boys), IP" },
          context: {
            en: "IP school. Sailing among HCI's published DSA talent areas. Sustained NSG participation.",
          },
        },
        {
          name: "Singapore Sports School",
          url: "https://www.sportsschool.edu.sg/",
          talentArea: { en: "Sailing (Boys and Girls), Sports School admissions" },
          context: {
            en: "Specialist sports school with full-time sailing academy track for elite junior sailors. Separate admissions process distinct from standard DSA-Sec — but high-level SSF-ranked Optimist sailors often apply to both.",
          },
        },
        {
          name: "St. Joseph's Institution",
          url: "https://www.sji.edu.sg/admission/dsa-at-sji/",
          talentArea: { en: "Sailing (Boys), IP / DSA-Sec" },
          context: {
            en: "Lasallian boys' school. Sailing among SJI's published DSA talent areas (IP and O Level).",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "Sailing (Girls), IP" },
          context: {
            en: "SAP and Bicultural Studies school. Sailing among NYGH's recognised DSA talent areas.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://www.acsbr.moe.edu.sg/",
          talentArea: { en: "Sailing (Boys), DSA-Sec" },
          context: {
            en: "Sister school to ACS(I) with active sailing CCA. NSG-active.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.moe.edu.sg/secondary/admissions/dsa-sec1/",
          talentArea: { en: "Sailing (Girls), DSA-Sec" },
          context: {
            en: "Methodist heritage girls' school. Sailing among MGS's recognised DSA talent areas. Sustained NSG presence.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Verify SSF regatta results and CCA records. MOE pulls CCA participation, school awards, NSG Singapore Schools National Sailing Championships results, and SSF-sanctioned regatta finishes into the DSA portal directly. A documented top-30 (or better) finish in Optimist national regatta events is the single most-cited signal in sailing DSA — confirm it has been logged.",
            },
            {
              en: "Video-record one full practice race. Watch with your child, scoring just two behaviours: (1) before each tack, did they look up the course for shifts or just tack on a planned schedule? (2) at each mark, was the entry wide and exit tight, or the opposite? These two are the highest-signal items in sailing trials.",
            },
            {
              en: "Confirm equipment is in race-day condition. Hull cleaning, sail check (UV degradation creeps on Optimist sails), spar inspection. A snapped fitting on trial day cannot be improvised.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: light boat-handling drills, mark-rounding practice, no new heavy hiking conditioning load. Final-week heavy hiking sets rarely pay off and frequently produce a hip-flexor or back tweak.",
            },
            {
              en: "Confirm logistics in writing. Time, venue (typically National Sailing Centre or the school's affiliated club), attire (rash guard, hiking shorts, dinghy boots or wet shoes — NOT regular sports shoes, NOT shorts that slide off the toe straps). Sunscreen, water, sailing gloves. Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "Hydrate aggressively in the days before. Sun-and-saltwater dehydration is the single most underestimated risk for a P6 sailor at trial.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — not 30 — and pack a sandwich or banana for between races. On-water trials can run 4-6 hours and energy drops mid-day.",
            },
            {
              en: "Bring spare hiking strap pads, a spare line for the outhaul, and electrical tape. The cheapest fixes that prevent a trial-ending equipment failure.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Parents in spectator boats are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. If you have on-water access, prioritise two things only: 15 minutes of start-line drill (luffing, accelerating off the line on zero) and capsize-recovery time-trials (target under 30 seconds). Cancel anything that competes with sleep and hydration. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private sailing coach at this stage. A good private coach can sharpen one or two tactical habits — particularly start-line approach and mark-rounding execution — but no coach produces, in three sessions, the wind-reading instinct of a year of regatta starts. Treat it as triage, not a fix.",
      },
    },
  },
  rugby: {
    slug: "rugby",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Rugby", zh: "橄榄球", ms: "Ragbi", ta: "ரக்பி" },
    hook: {
      en: "Rugby DSA — trials reward tackle technique and contact composure, with all-boys heritage schools running the strongest programmes.",
      zh: "橄榄球 DSA——trial 看擒抱技术和对抗冷静度，男校传统项目最强",
      ms: "DSA Ragbi — trial menghargai teknik tekel dan ketenangan dalam pertembungan, dengan sekolah lelaki warisan menjalankan program terkuat.",
      ta: "ரக்பி DSA — டாக்கிள் தொழில்நுட்பத்தையும் தாக்குதலின் போது நிதானத்தையும் மதிக்கிறது, ஆண்கள் பள்ளிகளில் வலுவான திட்டங்கள்.",
    },
    intro: {
      en: "Rugby in Singapore secondary schools is concentrated in heritage boys' schools — ACS(I), SJI, Victoria School, ACS(BR), Raffles Institution, St. Andrew's. The girls' school cluster is smaller and growing (RGS, MGS). Most Singapore primary schools play tag rugby (no contact); secondary moves to full contact under World Rugby and Singapore Rugby Union (SRU) frameworks. Trials assess tackle technique, passing under pressure, kicking accuracy, rucking, lineout work, and the candidate's behaviour in contact. Documented tag-rugby or club contact experience and NSG B/C-Division participation are explicit DSA signals. Strength matters less at P6 than technique and willingness to commit to contact.",
      zh: "新加坡中学橄榄球集中在男校传统名校——ACS(I)、SJI、Victoria School、ACS(BR)、Raffles Institution、St. Andrew's。女校集群较小但在增长（RGS、MGS）。多数新加坡小学打 tag rugby（无身体接触）；中学转入全接触，遵循 World Rugby 与新加坡橄榄球联合会（SRU）规则。Trial 看擒抱技术、压力下传球、踢球精度、rucking、lineout、对抗时的行为。已记录的 tag rugby/俱乐部接触经验和 NSG B/C 级参赛是明确 DSA 信号。在 P6 阶段，力量比技术和接受身体接触的意愿次要。",
      ms: "Ragbi di sekolah menengah Singapura tertumpu di sekolah lelaki warisan. Kebanyakan sekolah rendah Singapura bermain tag rugby; sekolah menengah beralih kepada perlanggaran penuh.",
      ta: "சிங்கப்பூர் இடைநிலைப் பள்ளி ரக்பி பாரம்பரிய ஆண்கள் பள்ளிகளில் தொகுக்கப்பட்டுள்ளது. பெரும்பாலான தொடக்கப் பள்ளிகள் tag rugby விளையாடுகின்றன; இடைநிலையில் முழுத் தொடர்பு.",
    },
    summary: {
      en: "Trial structure, position-specific habits, interview questions, NSG-active boys' (and emerging girls') rugby schools.",
      zh: "Trial 流程、位置专项习惯、面试题、NSG 活跃男校（以及在崛起的女校）。",
      ms: "Struktur trial, tabiat khusus posisi, soalan temu duga, sekolah lelaki aktif NSG.",
      ta: "சோதனை அமைப்பு, நிலை சார்ந்த பழக்கங்கள், கேள்விகள், NSG பள்ளிகள்.",
    },
    sampleSchools: [
      "Anglo-Chinese School (Independent)",
      "St. Joseph's Institution",
      "Victoria School",
      "Anglo-Chinese School (Barker Road)",
      "Raffles Institution",
      "St. Andrew's Secondary School",
    ],
    metaDescription: {
      en: "Rugby DSA-Sec trial guide for Singapore P6 — what coaches assess across tackle / pass / kick / contact, NSG context, sample interview questions, NSG-active boys' (and emerging girls') participating schools.",
      zh: "新加坡 P6 橄榄球 DSA-Sec trial 指南——擒抱/传球/踢/对抗评分、NSG 说明、面试题、NSG 活跃男校（与女校）。",
      ms: "Panduan trial DSA-Sec Ragbi Singapura — apa jurulatih nilai, posisi, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 ரக்பி DSA-Sec வழிகாட்டி — அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      trialDimensionsIntro: {
        en: "Singapore rugby trials typically run 90–120 minutes on grass and are led by the school's head rugby coach (often SRU / World Rugby-certified) plus the teacher-in-charge of Sports. The standard structure: dynamic warm-up and ball familiarisation, technical stations (passing in pairs, kicking, tackle technique with pads then bodies), contact-decision drills (1-on-1 tackle bag, 2-on-1 attack), then 7-a-side or 10-a-side small-sided games. Tag-rugby candidates and contact-rugby candidates may be assessed in parallel groups. Six dimensions emerge from public SRU youth coaching frameworks and ACS / SJI / Victoria School rugby programme descriptions.",
      },
      trialDimensions: [
        {
          label: { en: "Tackle technique — body shape, head position, follow-through" },
          body: {
            en: "The most heavily weighted dimension. Coaches assess shoulder contact (above the waist, head positioned to the side not in front of the ball-carrier — World Rugby head contact framework is strictly enforced from primary level), drive through the tackle, and the recovery to feet. A P6 candidate who can execute a 1-on-1 textbook tackle on a moving ball-carrier scores far higher than a stronger candidate who throws their head into contact. Bad head position at P6 is a four-year safety project — coaches recruit candidates who already have a coachable tackle shape.",
          },
        },
        {
          label: { en: "Passing under pressure — both sides, off both shoulders" },
          body: {
            en: "Coaches stage 4-on-3 attack drills and watch whether the candidate can pass left and right at game-pace, with both feet planted and pre-pass eyes scanning the defender. A P6 who can pop pass cleanly off either shoulder is signalling four-year backline potential. A candidate who can only pass off the strong shoulder (typically right) is read as a coaching project — the second-shoulder pass is the harder skill to teach.",
          },
        },
        {
          label: { en: "Kicking accuracy and decision-making" },
          body: {
            en: "Trials test punt kick, drop kick, and place kick from at least two distances. Coaches focus on accuracy at the receiver's chest height for the punt, not on raw distance, and on the catching technique on the receiving end. Decision-making on when to kick versus carry is assessed in small-sided games — a P6 who can chip-over-the-defence in a 2-on-3 outside-numbers situation is the rare attacking signal that elite schools recruit.",
          },
        },
        {
          label: { en: "Rucking, ball presentation, and breakdown work" },
          body: {
            en: "Coaches assess what the ball-carrier does after going to ground (presents the ball back, drives one more metre, calls support) and what the first-arriving support player does at the breakdown (binds, drives, stays on feet). Breakdown work is more heavily weighted at secondary level than at primary, but coaches scout P6 candidates who already understand body position over the ball — that's the cleanest tell of accumulated club hours.",
          },
        },
        {
          label: { en: "Contact composure and decision-making" },
          body: {
            en: "The single highest-signal mental dimension. Coaches deliberately create contact situations (tackle bag drills, 1-on-1 attack into a defender) and watch whether the candidate hits the line confidently, attempts to step a defender at the right distance, and recovers calmly from being tackled. A P6 who runs hard into contact without shying away signals four-year rugby commitment; one who slows down or steps wide unnecessarily is read as a candidate who hasn't yet committed to contact. This is the moment that separates a tag-rugby player from a future contact player.",
          },
        },
        {
          label: { en: "Coachability and pitch-side behaviour" },
          body: {
            en: "How the trialist behaves between drills, whether they retrieve loose balls without being asked, encourage a teammate, listen to corrections without sulking, and shake hands with opponents after small-sided games. International youth rugby coaching research and the SRU framework consistently emphasise these signals — and Singapore school coaches, who'll work with this child for four years across NSG B and A divisions, weight them heavily.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Forwards (props, hookers, locks, flankers, no. 8)" },
          body: {
            en: "Specialist positions for the tight-five and back-row players. Coaches assess body shape and willingness to contest at scrum-time and lineout-time. At P6 level, scrums and lineouts are usually demonstrated, not contested fully — coaches assess body engagement (low body height in scrum drill, jumping ability for lineout candidates), and rucking commitment. Size and frame matter more for forwards than for backs, but technique is still primary at P6.",
          },
        },
        {
          position: { en: "Halves — Scrum-half and Fly-half" },
          body: {
            en: "The team's playmaker positions. Coaches assess pass speed and accuracy from the base of a ruck (scrum-half), and decision-making with the ball in hand under defensive pressure (fly-half). Scrum-half candidates need a clean spin-pass off both hands; fly-half candidates need a kick option (punt or chip) and a running threat. A P6 with a left-foot and right-foot kicking option is rare and recruited aggressively.",
          },
        },
        {
          position: { en: "Centres and Wings" },
          body: {
            en: "The attacking backline. Coaches assess pace, change-of-direction (sidestep technique), tackle technique (centres often defend the opposition's biggest ball-carriers), and finishing ability for wings. A P6 with a clean fend-off in contact and a developing sidestep is the bread-and-butter backline recruit.",
          },
        },
        {
          position: { en: "Fullback (and emerging Sevens specialist)" },
          body: {
            en: "Defensive last line and attacking counter-strike position. Coaches assess high-ball catching under pressure (the up-and-under is the position-defining test), punt kicking from hand, and decision-making on counter-attack runs. Sevens rugby is increasingly recruited as a specialist Sevens pathway at some schools — a candidate with documented Sevens-specific results is treated as a multi-format asset.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school rugby at P6 trial level usually does not lock a player to one position permanently — coaches assess athletic profile and prior position experience. If your child has played multiple positions in primary-school tag rugby (typically pulled between halves and centres), mention all of them. Position assignment in Sec 1-2 depends on growth and physical development, especially for forwards.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love rugby?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like tackling\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete memory — a match, a teammate, a turning point — then connect it to character.",
          },
          template: {
            en: "I missed a tackle on the last play of a P5 zonals final and we lost. The opposing winger had stepped me, and I went the wrong way. My captain put his hand on my shoulder afterwards. That was the moment I realised rugby is the only sport where a mistake becomes the team's moment to support you — not blame you.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the rugby programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's rugby — a coach's name, an NSG result, a training pattern.",
          },
          template: {
            en: "ACS(I)'s rugby programme has the longest schoolboy heritage in Singapore and trains four times a week from Sec 1. The contact-introduction pathway you run for ex-tag-rugby players is exactly what I need.",
          },
        },
        {
          question: { en: "What position do you play and why?" },
          subtext: {
            en: "Can the kid articulate the role, not just label it?",
          },
          approach: {
            en: "Name the position plus the job.",
          },
          template: {
            en: "Scrum-half. My job is the link between forwards and backs — delivering the pass quickly from the base of the ruck and reading whether the backline should run or kick. I picked the position because my pass is my strongest skill and I like the responsibility for the tempo of the team.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I shied away from contact in my first contact-rugby session in P5 and the coach told me to either commit or play tag. I spent six weeks doing 1-on-1 tackle bag drills every Saturday. By the next contact session I was the first to commit to every breakdown.",
          },
        },
        {
          question: { en: "Is there a teammate or coach you remember most?" },
          subtext: {
            en: "Whether the kid sees teammates as people or background.",
          },
          approach: {
            en: "Name someone specific by role + what you learned from them.",
          },
          template: {
            en: "Our P6 captain was the smallest forward in the team but always the first to a ruck. Watching him commit to every breakdown taught me that rugby doesn't reward the biggest player — it rewards the player who decides fastest. I copy his commitment, not his size.",
          },
        },
        {
          question: { en: "How do you manage time with frequent trainings?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I do English and Math homework on the bus to training and finish Science before dinner. Sunday is for revision. My mother shows my report book to my coach every term — if any subject drops a band, we cut one training. That's the rule we set together.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your coach's emphasis on breakdown work matches how I think about the game. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Rugby (Boys), IP" },
          context: {
            en: "IP school with Singapore's longest schoolboy rugby heritage. Multi-decade NSG A-Division dominance. Rugby among ACS(I)'s published DSA talent areas with structured contact-introduction pathway for ex-tag-rugby players.",
          },
        },
        {
          name: "St. Joseph's Institution",
          url: "https://www.sji.edu.sg/admission/dsa-at-sji/",
          talentArea: { en: "Rugby (Boys), IP / DSA-Sec" },
          context: {
            en: "Lasallian boys' school. Rugby among SJI's published DSA talent areas (IP and O Level). Sustained NSG A-Division presence and traditional rivalry with ACS(I) and St. Andrew's.",
          },
        },
        {
          name: "Victoria School",
          url: "https://www.victoriaschool.moe.edu.sg/",
          talentArea: { en: "Rugby (Boys), IP / DSA-Sec" },
          context: {
            en: "Heritage boys' school. Rugby CCA with sustained NSG participation across both IP and O Level streams.",
          },
        },
        {
          name: "Anglo-Chinese School (Barker Road)",
          url: "https://www.acsbr.moe.edu.sg/",
          talentArea: { en: "Rugby (Boys), DSA-Sec" },
          context: {
            en: "Sister school to ACS(I). Strong rugby CCA tradition with multi-year NSG presence.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/dsa-sec",
          talentArea: { en: "Rugby (Boys), IP" },
          context: {
            en: "IP school. Rugby among RI's published Sports DSA domain criteria. Sustained NSG A-Division participation.",
          },
        },
        {
          name: "St. Andrew's Secondary School",
          url: "https://www.standrewssec.moe.edu.sg/",
          talentArea: { en: "Rugby (Boys), DSA-Sec" },
          context: {
            en: "Anglican boys' school. Heritage rugby programme with sustained NSG B- and A-Division presence; one of the traditional Singapore schoolboy rugby names.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Rugby (Boys), IP" },
          context: {
            en: "IP school. Rugby among HCI's recognised DSA talent areas. Sustained NSG presence.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Rugby (Boys), IP / DSA-Sec" },
          context: {
            en: "SAP school. Rugby among Dunman's 2026 DSA FAQ talent areas. NSG-active.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
          talentArea: { en: "Rugby (Girls), IP" },
          context: {
            en: "IP school. Rugby among RGS's recognised DSA talent areas in the emerging girls' division; one of Singapore's earliest schoolgirl rugby programmes.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.moe.edu.sg/secondary/admissions/dsa-sec1/",
          talentArea: { en: "Rugby (Girls), DSA-Sec" },
          context: {
            en: "Methodist heritage girls' school. Rugby among MGS's emerging DSA talent areas as schoolgirl rugby expands.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the trial is still weeks out" },
          items: [
            {
              en: "Verify NSG B- or C-Division results and CCA records. MOE pulls CCA participation, school awards, NSG tag-rugby or contact-rugby results, and SRU-affiliated club competition results into the DSA portal directly. A documented NSG Zone or National participation at primary level is the single most-cited signal in rugby DSA — confirm it has been logged.",
            },
            {
              en: "Video-record one full small-sided contact (or full tag) practice. Watch with your child, scoring just two behaviours: (1) on every tackle, was the head positioned to the side of the ball-carrier, not in front? (2) when running with the ball into contact, did the body lower and the shoulder lead, or did the head go down? These two are the highest-signal items in rugby trials.",
            },
            {
              en: "Confirm tetanus and basic medical clearance. Rugby trials involve contact; schools may ask for confirmation of last tetanus shot date and any current medical conditions. Email the teacher-in-charge if there are mouth-guard or scrum-cap requirements.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: pass-pair drills at game pace, light tackle-bag work, no heavy live contact, no new conditioning load. Final-week heavy contact rarely pays off and frequently produces a stinger or a concussion.",
            },
            {
              en: "Confirm logistics in writing. Time, venue (grass pitch or 3G turf), attire (school PE attire or club kit, rugby boots with appropriate studs — not football boots with high blades, mouth guard required by SRU rules from the contact age, scrum cap recommended). Bring a tackle bag towel and a spare set of attire. Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "One scrimmage with strangers. On Singapore parent forums, a recurring observation is that boys underperform at trials because they only commit to contact against teammates they know. Force the awkwardness early — a Saturday SRU club open session is the cheapest fix.",
            },
          ],
        },
        {
          label: { en: "Day of trial" },
          items: [
            {
              en: "Eat 90 minutes before — not 30. Coaches deliberately push trial past the fatigue threshold and the last 20 minutes is where tackle technique breaks down (head positioning, body height into contact).",
            },
            {
              en: "Bring a mouth-guard you've already worn for at least three training sessions. A new mouth-guard on trial day is uncomfortable and breaks concentration on tackle drills.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents on the pitch-side are visible and the trialist absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the coach said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, trial coming up, no real prep — there are still real moves. Shorten the drill cycle to two things only: tackle technique on a tackle bag (head to the side, drive through, recover to feet) and pass-pair drills off both shoulders at game pace. Cancel anything that competes with sleep. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private rugby coach at this stage. A good private coach can speed up specific habit changes — particularly tackle shape and breakdown body position — but no coach produces, in three sessions, the contact composure of a year of club training. Treat it as triage, not a fix.",
      },
    },
  },
  "symphonic-band": {
    slug: "symphonic-band",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "Symphonic Band", zh: "管乐团", ms: "Pancaragam Simfoni", ta: "சிம்போனிக் இசைக்குழு" },
    hook: {
      en: "Symphonic Band DSA — auditions reward tone production and scale fluency, with most schools running a 2-piece + scales + sight-read format in a 30-45 minute slot.",
      zh: "管乐团 DSA——招生看音色与音阶熟练度，多数学校采用 2 曲 + 音阶 + 视奏的 30-45 分钟格式",
      ms: "DSA Pancaragam Simfoni — uji bakat menghargai penghasilan ton dan kefasihan skala, dengan kebanyakan sekolah menjalankan format 2-keping + skala + baca-pandang dalam slot 30-45 minit.",
      ta: "சிம்போனிக் இசைக்குழு DSA — ஒலி உருவாக்கம் மற்றும் ஸ்கேல் சரளத்தை மதிக்கிறது, பெரும்பாலான பள்ளிகள் 30-45 நிமிட இடைவெளியில் 2-துண்டு + ஸ்கேல் + பார்த்து வாசிக்கும் வடிவத்தைப் பயன்படுத்துகின்றன.",
    },
    intro: {
      en: "Symphonic Band is one of Singapore's most universally offered school music DSA talents — nearly every major IP school plus a long list of strong non-IP schools run competitive bands. The audition format is unusually structured (compared to other DSA musical talents): two contrasting prepared pieces on the candidate's instrument, all 12 major scales (Victoria School format) or 4 named Concert keys — Bb / Eb / Ab / Db (BPGHS format), plus a sight-read passage, in a 30-45 minute audition slot. Tone production, scale accuracy, and the under-recruited instruments (oboe, bassoon, French horn, tuba) are the levers that most reliably convert into offers.",
      zh: "管乐团是新加坡最普及的中学音乐 DSA 才艺之一——几乎所有主要 IP 校加上一长串强非 IP 校都有竞争力强的乐团。招生格式比其他音乐类 DSA 更结构化：本乐器 2 首对比曲 · 全部 12 个大调音阶（Victoria 格式）或 4 个指定 Concert 调 Bb/Eb/Ab/Db（BPGHS 格式）· 加视奏 · 30-45 分钟时段。音色、音阶准确、以及稀缺乐器（双簧管、巴松、圆号、大号）是最容易拿到 offer 的杠杆点。",
      ms: "Pancaragam Simfoni adalah antara DSA muzik sekolah paling meluas. Format luar biasa berstruktur: dua keping berbeza pada instrumen calon, 12 skala besar atau 4 kekunci Concert yang dinamakan, ditambah baca-pandang, dalam slot 30-45 minit.",
      ta: "சிம்போனிக் இசைக்குழு பரந்த DSA இசை திறமை. வடிவம் கட்டமைக்கப்பட்டுள்ளது: இரண்டு வேறுபட்ட துண்டுகள், 12 முக்கிய ஸ்கேல்கள் அல்லது 4 பெயரிடப்பட்ட Concert கீகள், மற்றும் பார்த்து வாசிக்கும் பகுதி, 30-45 நிமிட இடைவெளியில்.",
    },
    summary: {
      en: "Audition requirements (2 pieces + scales + sight-read), instrument-specific profiles, interview questions, schools with strong Symphonic Band programmes.",
      zh: "招生格式（2 曲 + 音阶 + 视奏）、乐器分析、面试题、管乐团强校。",
      ms: "Keperluan uji bakat, profil instrumen, soalan temu duga, sekolah pancaragam terkemuka.",
      ta: "தேர்வுத் தேவைகள், கருவி வகைகள், கேள்விகள், பள்ளிகள்.",
    },
    sampleSchools: [
      "Anglo-Chinese School (Independent)",
      "Victoria School",
      "Raffles Institution",
      "Hwa Chong Institution",
      "Methodist Girls' School (Secondary)",
      "Bukit Panjang Government High School",
    ],
    metaDescription: {
      en: "Symphonic Band DSA-Sec audition guide for Singapore P6 — 2-piece + scales + sight-read format, instrument-specific advice, SYF-active participating schools.",
      zh: "新加坡 P6 管乐团 DSA-Sec audition 指南——2 曲 + 音阶 + 视奏格式、各乐器细节、SYF 活跃学校。",
      ms: "Panduan uji bakat DSA-Sec Pancaragam Simfoni Singapura — format, kriteria, soalan, sekolah peserta.",
      ta: "சிங்கப்பூர் P6 சிம்போனிக் இசைக்குழு DSA-Sec வழிகாட்டி — வடிவம், அளவுகோல்கள், கேள்விகள், பள்ளிகள்.",
    },
    rich: {
      preparedPiece: {
        intro: {
          en: "Symphonic Band auditions in Singapore are unusually structured compared to other music DSAs. Victoria School's published 2026 brief asks for all 12 major scales (one octave minimum, two octaves preferred for wind players); BPGHS asks for 4 named Concert keys (Bb, Eb, Ab, Db). Both schools require two contrasting prepared pieces and a sight-read. The audition slot itself can run 30 minutes (typical) up to 45 minutes (Victoria, ACS(I)). Confirm each target school's specific scale requirement and slot length before locking repertoire.",
        },
        entries: [
          {
            variant: { en: "Full 12-scale format — Victoria School" },
            requirement: { en: "Two contrasting pieces on your instrument · ALL 12 major scales (minimum one octave; two octaves preferred for wind players) · plus sight-read · audition slot up to 45 minutes" },
            source: { en: "Victoria School DSA 2026 brief — explicit 12-scale and 45-minute slot requirements." },
          },
          {
            variant: { en: "4-key format — BPGHS" },
            requirement: { en: "Two contrasting pieces on your instrument · 4 named Concert keys (Bb, Eb, Ab, Db) · plus sight-read · 30-minute audition slot typical" },
            source: { en: "BPGHS DSA 2026 brief — explicit 4-key Concert pitch requirement." },
          },
          {
            variant: { en: "ABRSM-graded format — most IP schools (ACS(I), RI, HCI, MGS)" },
            requirement: { en: "Two contrasting pieces (often Baroque + Romantic or fast + lyrical) · scales as per the candidate's ABRSM grade · plus sight-read at one grade below the candidate's level · plus interview" },
            source: { en: "Convention across IP schools that recruit MEP-pathway and band-track candidates; not a single published source." },
          },
          {
            variant: { en: "Percussion specialists" },
            requirement: { en: "Mallet piece on marimba or xylophone (showing two-mallet technique minimum, four-mallet preferred for advanced candidates) · plus snare drum piece (rudimental) · plus timpani if available · plus sight-read on a chosen percussion family" },
            source: { en: "Convention across Singapore school symphonic bands; aligns with PAS (Percussive Arts Society) youth examination format." },
          },
        ],
        coachCtaBlurb: {
          en: "A private instrumental coach can verify the contrasting pair choice, drill the requested scale set to fluency, polish the opening 30 seconds of each piece (where the panel listens most carefully), and run sight-reading drills at audition difficulty. Coaches who play the same instrument and have prepared students for IP-school band auditions are especially valuable. Browse our coach directory for band-instrument specialists.",
        },
      },
      trialDimensionsIntro: {
        en: "Singapore Symphonic Band auditions are conducted by the school's head band director (often a Singapore Armed Forces Music & Drama Company alumnus, conservatory-trained musician, or external SYF adjudicator) plus the teacher-in-charge of CCAs. The structure across schools is more uniform than other music DSAs: prepared pieces, scales (or named-key arpeggios), sight-read, and a short interview. The audition slot can run 30-45 minutes per candidate — longer than most music auditions. Six dimensions emerge from public DSA briefs (Victoria School, BPGHS, ACS(I)) and Singapore conservatory youth examination frameworks.",
      },
      trialDimensions: [
        {
          label: { en: "Tone production on the instrument" },
          body: {
            en: "The single most-listened-for element. On wind instruments, directors listen for embouchure stability, steady airflow, and a centered tone across registers. On brass, directors check whether the lip vibration is supported by the abdomen rather than forced. On percussion, directors listen for stick height consistency on mallets and clean rebounds on snare. A clean tone on a Grade 5-6 piece reads better than a struggling tone on a Grade 7-8 piece — choose repertoire your child can produce a beautiful sound on.",
          },
        },
        {
          label: { en: "Scale and arpeggio fluency in the requested set" },
          body: {
            en: "What separates a Symphonic Band audition from other music DSAs is the scale battery — 12 major scales (Victoria) or 4 named keys (BPGHS) are not optional. Directors listen for tempo consistency (no slow-down at the top of the scale), evenness of articulation, and intonation across the range. The most common P6 failure mode is freezing in the middle of a scale because of one missed accidental; daily practice at audition tempo is the cure. Scale fluency at audition signals years of disciplined practice in a way no piece can.",
          },
        },
        {
          label: { en: "Technical command on the two contrasting pieces" },
          body: {
            en: "Both pieces should be from different musical territories — Baroque + Romantic, or fast + lyrical. Directors listen for accuracy at tempo, articulation differences, and dynamic range. A confidently-played Grade 5 piece reads better than a struggling Grade 7 piece. Choose pieces that show two distinct technical layers — slurred legato in one and tongued staccato runs in the other — so the panel hears the candidate's range.",
          },
        },
        {
          label: { en: "Sight-reading on the instrument" },
          body: {
            en: "Directors typically set sight-reading at one grade below the candidate's playing level — a passage of 16-24 bars with 30-60 seconds to review, then play through. What directors watch is not whether every note is right, but whether the candidate keeps tempo, gets the rhythmic structure, and recovers from a mistake without stopping. Daily sight-read practice for six months before the audition is the single highest-leverage prep that converts uncertain candidates into confirmed offers.",
          },
        },
        {
          label: { en: "Section-fit signal — instrument balance reading" },
          body: {
            en: "Band directors recruit for section balance, not just for individual talent. The cleanest tell of a P6 candidate's section-fit is the willingness to mention if you play a less common instrument (oboe, bassoon, French horn, double bass, contrabass clarinet, baritone sax, tuba, euphonium, percussion). Schools actively seek candidates on these instruments because most every band has too many clarinets and flutes already. A P6 who has explored an under-recruited instrument is a high-leverage offer signal.",
          },
        },
        {
          label: { en: "Stage presence and composure" },
          body: {
            en: "How the candidate walks in, bows or nods at the panel, sets up the instrument calmly (cleaning the mouthpiece, drying the pad on wet conditions, warming up the embouchure briefly), and recovers from a slip. Panels remember the candidate who restarted a piece calmly more vividly than the one who played a flawless first half and crumbled. Film a mock audition and watch the entrance and the first 15 seconds twice; that's where most marks are won or lost before a note is played.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Woodwinds — flute, clarinet, saxophone (over-recruited)" },
          body: {
            en: "The most over-recruited section by a wide margin. Directors hear dozens of strong flutists and clarinetists in every audition cycle. Repertoire choice and scale fluency matter more on these instruments than on any other — choose pieces that show polyphonic clarity or technical agility, not pieces every other candidate plays this cycle. A flutist with clean Grade 7 repertoire and 12-scale fluency outscores another with stronger Grade 8 repertoire but inconsistent scales.",
          },
        },
        {
          position: { en: "Woodwinds — oboe, bassoon (under-recruited, premium recruit)" },
          body: {
            en: "Schools actively seek oboe and bassoon candidates because these instruments are essential for symphonic band repertoire but few primary-school students study them. A clean Grade 5-6 oboe candidate is recruited ahead of a strong Grade 8 flute candidate in many years. If your child plays oboe or bassoon, name the instrument explicitly in the application — that information shapes which schools fast-track the file.",
          },
        },
        {
          position: { en: "Brass — trumpet (over-recruited), French horn / euphonium / tuba (under-recruited)" },
          body: {
            en: "Trumpet is the over-recruited brass instrument; French horn, euphonium, and tuba are under-recruited and treated as premium recruits. Directors assess embouchure consistency across the range, accuracy on the upper register (the high notes), and breath control on long phrases. A P6 candidate on French horn with a clean Grade 5-6 piece is one of the most-sought audition profiles in Singapore school bands.",
          },
        },
        {
          position: { en: "Percussion — multi-instrument specialists" },
          body: {
            en: "Most school symphonic bands have 3-6 percussion positions per generation, requiring candidates who can credibly play multiple percussion families — mallet (marimba / xylophone), snare drum, timpani, and auxiliary (cymbals, bass drum, tambourine, triangle). Coaches assess versatility explicitly. A P6 candidate who has practiced four-mallet marimba technique alongside rudimental snare is recruited aggressively because percussion versatility is rare at primary level.",
          },
        },
      ],
      positionFocusNote: {
        en: "Singapore school Symphonic Band at P6 audition level does not lock a candidate to one instrument — but the instrument the candidate auditions on will be the section they join in Sec 1. If your child plays a less common instrument (oboe, bassoon, French horn, tuba, contrabass clarinet, baritone sax), name it explicitly in the application; school recruitment frequently fast-tracks files based on instrument scarcity alone, often ahead of more polished candidates on common instruments.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love Symphonic Band?" },
          subtext: {
            en: "Panels want a specific moment, not a feeling. \"I like music\" reads as untrained motivation.",
          },
          approach: {
            en: "Open with one concrete memory — a piece, a performance, a section moment — then connect it to character.",
          },
          template: {
            en: "We played Holst's First Suite in E-flat at our primary-school SYF and the brass entry in the second movement was the first time I felt how 30 instruments could speak as one voice. After that I started listening to band recordings on the bus — that's when I realised the section's blend is more interesting to me than my own solo line.",
          },
        },
        {
          question: { en: "Why did you choose our school?" },
          subtext: {
            en: "Did the family research the band programme, or is the application generic?",
          },
          approach: {
            en: "Cite one specific thing about the school's band — a director's name, an SYF result, the repertoire pattern.",
          },
          template: {
            en: "ACS(I)'s Symphonic Band trains four times a week, plays at SYF Distinction level, and the director's commitment to commissioned new works (not just standard repertoire) is exactly the musical environment I want.",
          },
        },
        {
          question: { en: "What is your instrument and why?" },
          subtext: {
            en: "Can the candidate articulate the instrument, not just label it?",
          },
          approach: {
            en: "Name the instrument plus what playing it asks of you.",
          },
          template: {
            en: "French horn. My job is the section that has to play both the low brass bass line and the high lyrical line, and I love that switching range demands different embouchure within the same piece. I picked it because my primary-school music teacher said my ear was steady and the French horn is the instrument where intonation is the hardest skill to develop.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I failed Grade 5 ABRSM on aural last year because I'd never practised echoing a melodic line systematically. I worked on aural every morning for ten minutes for four months. I passed Grade 5 the second time and started Grade 6 immediately — and my band-section listening improved noticeably.",
          },
        },
        {
          question: { en: "Who is your favourite composer or piece, and why?" },
          subtext: {
            en: "Tests musical vocabulary specifically for band repertoire.",
          },
          approach: {
            en: "Name the piece plus one specific musical element you can describe (orchestration, rhythmic structure, key colour).",
          },
          template: {
            en: "Eric Whitacre's October — because the way he opens with the woodwinds layered in fifths creates a sense of stillness that's then disrupted by the brass entry. I asked my band teacher how that orchestration choice works; the answer was about how the harmonic series of the brass cuts through the woodwind blend.",
          },
        },
        {
          question: { en: "How do you manage time with frequent rehearsals?" },
          subtext: {
            en: "Schools fear DSA kids who flame out academically by Sec 2.",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I finish English and Math homework before practice because the embouchure is too tired after. Science I do on weekends. My mother shows my report book to my band director every term — if any subject drops a band, we cut one practice. That's the rule we set together.",
          },
        },
        {
          question: { en: "If School A and our school both offer you, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your band's emphasis on commissioned new works matches what I love most. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Symphonic Band (Boys), IP" },
          context: {
            en: "IP school with one of Singapore's most decorated school band programmes. Multi-year SYF Distinction record. Among ACS(I)'s published DSA talent areas with structured audition process.",
          },
        },
        {
          name: "Victoria School",
          url: "https://www.victoriaschool.moe.edu.sg/",
          talentArea: { en: "Symphonic Band (Boys), IP / DSA-Sec" },
          context: {
            en: "Heritage boys' school. Victoria's 2026 DSA brief explicitly lists the audition requirements: 2 contrasting pieces + 12 major scales + sight-read + 45-minute audition slot.",
          },
        },
        {
          name: "Raffles Institution",
          url: "https://www.ri.edu.sg/admissions/dsa-sec",
          talentArea: { en: "Symphonic Band (Boys), IP" },
          context: {
            en: "IP school. Symphonic Band among RI's published DSA performing-arts domain criteria. Multi-year SYF Distinction record.",
          },
        },
        {
          name: "Hwa Chong Institution",
          url: "https://www.admissions.hci.edu.sg/direct-school-admission",
          talentArea: { en: "Symphonic Band (Boys), IP" },
          context: {
            en: "IP school. Among HCI's published DSA talent areas. Sustained SYF Distinction record.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.moe.edu.sg/secondary/admissions/dsa-sec1/",
          talentArea: { en: "Symphonic Band (Girls), DSA-Sec" },
          context: {
            en: "Methodist heritage girls' school. Symphonic Band among MGS's recognised DSA talent areas. Sustained SYF presence.",
          },
        },
        {
          name: "Bukit Panjang Government High School",
          url: "https://www.bpghs.moe.edu.sg/dsa-2026/",
          talentArea: { en: "Symphonic Band (Boys and Girls), DSA-Sec" },
          context: {
            en: "BPGHS publishes a detailed DSA 2026 brief explicitly listing Symphonic Band audition requirements: 2 contrasting pieces + 4 named Concert keys (Bb / Eb / Ab / Db) + sight-read.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "Symphonic Band (Boys and Girls), IP / DSA-Sec" },
          context: {
            en: "SAP school. Symphonic Band among Dunman's 2026 DSA FAQ talent areas, both boys' and girls' divisions.",
          },
        },
        {
          name: "Anglican High School",
          url: "https://www.anglicanhigh.moe.edu.sg/",
          talentArea: { en: "Symphonic Band (Boys and Girls), DSA-Sec" },
          context: {
            en: "Anglican heritage school. Symphonic Band among recognised DSA talent areas; sustained SYF participation.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
          talentArea: { en: "Symphonic Band (Girls), IP" },
          context: {
            en: "IP school. Symphonic Band among RGS's recognised DSA talent areas; published in the 2026 Information on Application brief.",
          },
        },
        {
          name: "CHIJ St. Nicholas Girls' School",
          url: "https://stnicholasgirls.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "Symphonic Band (Girls), IP / DSA-Sec" },
          context: {
            en: "SAP girls' school. Symphonic Band among CHIJ St. Nick's IP and O Level DSA talent areas. Multi-year SYF presence.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the audition is still weeks out" },
          items: [
            {
              en: "Confirm each target school's specific scale requirement. Victoria asks for all 12 major scales; BPGHS asks for 4 named Concert keys. Download each target school's 2026 DSA brief and lock the scale set tonight — daily practice for at least 8 weeks is the standard requirement.",
            },
            {
              en: "Choose the contrasting pair early. The strongest pairing is one lyrical Romantic piece (showing tone and musicality) + one technical fast piece (showing articulation and finger / valve agility). Confirm with your child's instrument teacher — a piece that exposes your child's intonation weakness across a 4-octave range is the most common audition mistake.",
            },
            {
              en: "Practise sight-reading daily for ten minutes at audition difficulty. Use the conservatory standard for your instrument; ABRSM sight-reading at one grade below the candidate's level is a useful proxy. Daily exposure builds the confidence that converts strong players into offers.",
            },
            {
              en: "If your child plays an under-recruited instrument (oboe, bassoon, French horn, tuba, contrabass clarinet, baritone sax), confirm the application explicitly names this instrument. Schools fast-track files based on instrument scarcity.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: opening 30 seconds of each piece, the scale set at audition tempo, light sight-read practice. No new technical work. Final-week note-changes almost never end well.",
            },
            {
              en: "Confirm logistics in writing. Time, venue (often the school's band room or hall), attire (school uniform or smart casual; bring the instrument and any required accessories — reeds for wind players, mallets for percussion, valve oil for brass). Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "For wind players: confirm the reed (clarinet, saxophone, oboe, bassoon) has been played in for at least 5-7 sessions before audition day. A new reed on audition day is the single most common P6 woodwind disaster.",
            },
          ],
        },
        {
          label: { en: "Day of audition" },
          items: [
            {
              en: "Arrive 60 minutes early. Warm up properly — long tones, scale set at half tempo, opening 16 bars of each piece. Do not over-rehearse the full pieces — the audition is the performance.",
            },
            {
              en: "Eat 90 minutes before — not 30. Avoid acidic foods or anything that affects mouth pH for woodwind / brass players. Hydrate but not immediately before.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the candidate absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the director said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, audition coming up, no real prep — there are still real moves. Lock in the contrasting pair tonight (don't change pieces this week) and prioritise the scale set. Run 10-minute scale drills twice per day plus 10-minute sight-read drills. Cancel anything that competes with sleep and embouchure recovery. Spend the freed time on interview prep above, because that's the only part where a few hours can still meaningfully change the outcome. Some families bring in a private instrumental coach at this stage. A good private coach can drill scales to fluency, polish the opening 30 seconds of each piece, and run sight-read drills at the correct difficulty — but no coach produces, in three sessions, the tone of a year of daily long-tone practice. Treat it as triage, not a fix.",
      },
    },
  },
  mep: {
    slug: "mep",
    contentReadyBy: "2026-06-04",
    navLabel: { en: "MEP (Music Elective)", zh: "音乐特选课程", ms: "Program Muzik Pilihan", ta: "MEP இசை சிறப்புத் திட்டம்" },
    hook: {
      en: "MEP DSA — entry into a 4-year music academic track at five MOE-designated schools, judged on the standardised audition: 2 contrasting pieces + sight-read + aural + interview.",
      zh: "MEP DSA——进入 5 所 MOE 指定校的 4 年音乐学术轨道，标准化 audition：2 对比曲 + 视奏 + 听音 + 面试",
      ms: "DSA MEP — kemasukan ke trek akademik muzik 4 tahun di lima sekolah yang ditetapkan MOE, dinilai berdasarkan uji bakat standard: 2 keping berbeza + baca-pandang + aural + temu duga.",
      ta: "MEP DSA — MOE-நிர்ணயித்த ஐந்து பள்ளிகளில் 4 ஆண்டு இசை கல்வித் தடத்தில் சேர்க்கை, தரப்படுத்தப்பட்ட தேர்வு: 2 துண்டுகள் + பார்த்து வாசிக்கும் + aural + நேர்காணல்.",
    },
    intro: {
      en: "The Music Elective Programme (MEP) is MOE's flagship secondary-school music academic track. It is offered at exactly five MOE-designated schools — Anglo-Chinese School (Independent), Dunman High School, Methodist Girls' School (Secondary), Nanyang Girls' High School, and Raffles Girls' School (Secondary). MEP students take Music as an examinable academic subject (alongside English, Math, Science) covering performance, composition, listening, and music history. The DSA audition is standardised across the five schools: two contrasting pieces from different periods or styles, sight-reading at approximately Grade 5 difficulty, an aural test, and an interview. ABRSM Grade 8 practical is widely treated as the working benchmark, but MOE does not publish a formal grade requirement — what matters is how the candidate plays in the room, sight-reads cleanly, and articulates why music in five sentences of interview.",
      zh: "音乐特选课程（MEP）是 MOE 在中学阶段的旗舰音乐学术轨道。仅在 5 所 MOE 指定校开设——Anglo-Chinese School (Independent)、Dunman High、Methodist Girls'、Nanyang Girls' High、Raffles Girls'。MEP 学生把音乐作为可考的学术科目（与英文、数学、科学并列），涵盖演奏、作曲、聆听、音乐史。DSA audition 5 校统一格式：2 首对比曲（不同时期或风格）、约 Grade 5 难度视奏、听音测试、面试。家长圈把 ABRSM Grade 8 实奏视为参考线，但 MOE 并未公布正式段位要求——真正重要的是当场演奏、视奏干净、5 句话面试讲清楚为什么音乐。",
      ms: "MEP adalah trek akademik muzik utama MOE di sekolah menengah. Ditawarkan di lima sekolah yang ditetapkan MOE. Uji bakat distandard: dua keping berbeza, baca-pandang Grade 5, ujian aural, temu duga.",
      ta: "MEP MOE-இன் முதன்மை இடைநிலை பள்ளி இசை கல்வித் தடம். ஐந்து MOE-நிர்ணயித்த பள்ளிகளில் வழங்கப்படுகிறது. தேர்வு தரப்படுத்தப்பட்டுள்ளது: இரண்டு வேறுபட்ட துண்டுகள், பார்த்து வாசிக்கும், aural சோதனை, நேர்காணல்.",
    },
    summary: {
      en: "The 5 MEP schools, standardised audition format, instrument profiles, interview questions, and how MEP differs from non-MEP music DSA.",
      zh: "5 所 MEP 校、标准化 audition 格式、乐器分析、面试题、MEP 与非 MEP 音乐 DSA 区别。",
      ms: "Lima sekolah MEP, format uji bakat standard, profil instrumen, soalan temu duga.",
      ta: "ஐந்து MEP பள்ளிகள், தரப்படுத்தப்பட்ட தேர்வு வடிவம், கருவி வகைகள், கேள்விகள்.",
    },
    sampleSchools: [
      "Anglo-Chinese School (Independent)",
      "Dunman High School",
      "Methodist Girls' School (Secondary)",
      "Nanyang Girls' High School",
      "Raffles Girls' School (Secondary)",
    ],
    metaDescription: {
      en: "MEP (Music Elective Programme) DSA-Sec audition guide for Singapore P6 — the 5 designated schools, standardised 2-piece + sight-read + aural format, ABRSM context, sample interview questions.",
      zh: "新加坡 P6 MEP 音乐特选课程 DSA-Sec audition 指南——5 所指定校、标准化 2 曲 + 视奏 + 听音格式、ABRSM 说明、面试题。",
      ms: "Panduan uji bakat DSA-Sec MEP Singapura — 5 sekolah, format, soalan.",
      ta: "சிங்கப்பூர் P6 MEP DSA-Sec வழிகாட்டி — 5 பள்ளிகள், வடிவம், கேள்விகள்.",
    },
    rich: {
      preparedPiece: {
        intro: {
          en: "MEP DSA audition is the most standardised music DSA format in Singapore. The five designated schools share the same four-component structure: two contrasting prepared pieces from different periods or styles, sight-reading at approximately Grade 5 difficulty, an aural test (rhythm clap-back, melody echo, interval and chord identification), and an interview. Audition slots typically run 20-30 minutes per candidate. ABRSM Grade 8 practical is the working benchmark, but a confidently-played Grade 7 piece beats a struggling Grade 8.",
        },
        entries: [
          {
            variant: { en: "Solo instrument MEP audition (standard format across the 5 schools)" },
            requirement: { en: "Two contrasting pieces from different musical periods or styles (e.g. Baroque + Romantic, or fast + lyrical) · plus sight-reading at approximately Grade 5 difficulty · plus aural test (clap-back, melody echo, interval/chord identification) · plus interview" },
            source: { en: "MEP standardised audition framework across ACS(I), Dunman High, MGS, NYGH, RGS. Aligns with MOE's Music Elective Programme description and individual school MEP open house briefs." },
          },
          {
            variant: { en: "Piano specialists (most competitive instrument)" },
            requirement: { en: "Two contrasting pieces showing polyphonic clarity (Bach prelude-and-fugue or Mozart sonata) + Romantic / 20th-century piece showing colour and pedal · sight-reading on piano is harder than on a single-line instrument — practise daily for 6 months · aural · interview" },
            source: { en: "MEP audition conventions; piano repertoire patterns across MEP school briefs." },
          },
          {
            variant: { en: "Strings (violin, viola, cello)" },
            requirement: { en: "Two contrasting pieces — slow sonata movement + faster Romantic miniature is a safe pairing · sight-read · aural · interview · tune carefully in front of the panel (an untuned A is a self-inflicted handicap)" },
            source: { en: "MEP audition conventions for solo strings; aligns with ABRSM string syllabus expectations." },
          },
          {
            variant: { en: "Voice (MEP vocal track at some schools)" },
            requirement: { en: "Two contrasting songs (typically one art song + one contrasting genre — folk, musical theatre, or sacred) · sight-singing on solfège or numbers · aural · interview · confirm with each MEP school whether vocal is accepted as the primary instrument" },
            source: { en: "MEP audition conventions for voice candidates; varies by school." },
          },
        ],
        coachCtaBlurb: {
          en: "A private music coach with MEP audition experience can verify the contrasting pair choice, polish the opening 30 seconds of each piece, run sight-read drills at Grade 5 difficulty, and rehearse the standard aural battery (interval identification, chord quality, melody echo). MEP-experienced coaches are the most valuable specialists for this audition because the format is so standardised. Browse our coach directory for MEP-experienced music coaches.",
        },
      },
      trialDimensionsIntro: {
        en: "MEP auditions are conducted by the school's MEP coordinator plus an external adjudicator (often a conservatory or Yong Siew Toh Conservatory of Music affiliate). The audition is standardised in format but evaluated on six dimensions that distinguish MEP candidates from strong non-MEP music candidates — academic music engagement on top of performance ability. Six dimensions emerge from MOE's MEP description and individual school MEP open house briefs.",
      },
      trialDimensions: [
        {
          label: { en: "Technical command on the two contrasting pieces" },
          body: {
            en: "Both pieces should be from genuinely different musical territories — Baroque + Romantic, or one fast and one lyrical. Adjudicators listen for accuracy at tempo, articulation, dynamic control, and whether the candidate shapes a long phrase rather than just plays through the notes. A confidently-played Grade 7 piece reads better than a struggling Grade 8 piece; choose pieces you can own.",
          },
        },
        {
          label: { en: "Musicality and interpretation" },
          body: {
            en: "What distinguishes a clean Grade 8 student from a future MEP candidate is interpretation — phrase shaping, rubato, the choice of when to take time and when to drive forward. Adjudicators are looking for a player who has an idea about the piece, not just one who has practised it. A P6 candidate who can articulate one specific interpretive choice (\"I take more time at this cadence because the harmony resolves there\") stands out immediately.",
          },
        },
        {
          label: { en: "Sight-reading at Grade 5 difficulty" },
          body: {
            en: "MEP sight-reading is consistently set at around Grade 5 difficulty — a passage the candidate has 30 seconds to look over, then plays through. Adjudicators watch not whether every note is right, but whether the candidate keeps tempo, gets the rhythmic structure, and recovers from a mistake without stopping. Stopping at the first wrong note is the most common P6 failure mode and is almost entirely a confidence issue, not a reading one.",
          },
        },
        {
          label: { en: "Aural skills — clap-back, melody echo, interval / chord identification" },
          body: {
            en: "MEP aural is more demanding than the ABRSM practical exam's aural component. Standard tests: clap back a rhythm, sing back a short melodic line, identify intervals (perfect / major / minor / augmented / diminished), sometimes identify chord quality (major / minor / diminished / augmented). Aural is the most under-trained component because ABRSM practical tests it too lightly — MEP schools weight it more heavily because aural ability predicts academic musicianship across the next four years.",
          },
        },
        {
          label: { en: "Academic music engagement at interview" },
          body: {
            en: "MEP interview separates strong performers from MEP-bound students. \"Who is your favourite composer?\" is not testing knowledge — it's testing whether the candidate can talk about music with specific vocabulary (phrase, voicing, articulation, harmonic colour, modulation, texture, form) rather than generic emotion. MEP candidates are signing up for music as an academic subject — adjudicators are listening for whether the P6 candidate already thinks about music academically.",
          },
        },
        {
          label: { en: "Stage presence and composure" },
          body: {
            en: "How the candidate walks in, bows, settles at the instrument, and recovers from a slip. Adjudicators remember the candidate who restarted a piece calmly more vividly than the one who played a flawless first half and crumbled. Confidence is taught — film a mock audition and watch the entrance and the first 15 seconds twice; that's where most marks are won or lost before a note is played.",
          },
        },
      ],
      positionFocus: [
        {
          position: { en: "Piano" },
          body: {
            en: "The most competitive instrument by a wide margin in MEP — adjudicators hear dozens of strong pianists in every cycle. Repertoire choice matters: play a piece that shows polyphonic clarity (a Bach prelude and fugue, or a Mozart sonata movement) alongside a Romantic or 20th-century piece that shows colour and pedal control. Avoid pieces every other candidate plays this cycle (overplayed Chopin nocturnes, Für Elise variants). Sight-reading on piano is harder than on a single-line instrument — practice it daily for six months before the audition.",
          },
        },
        {
          position: { en: "Strings — violin, viola, cello" },
          body: {
            en: "Adjudicators listen for intonation first (especially on the open-string-adjacent notes), then bow control, then vibrato consistency. A confident bow change and clean shifts read as professional. Choose contrasting pieces that show both lyrical line and technical agility — a slow movement from a sonata plus a faster Romantic miniature is a safe pairing. Tune carefully in front of the panel; an untuned A is a self-inflicted handicap.",
          },
        },
        {
          position: { en: "Woodwind and brass" },
          body: {
            en: "Tone production carries the most weight — adjudicators can tell within the first phrase whether the embouchure and air column are developed. For wind players, the school's existing MEP cohort balance also matters: a strong oboe or bassoon candidate is often more recruited than a fifth flute. If your child plays a less common wind instrument (oboe, bassoon, French horn, double bass), name it explicitly in the application — that information shapes which schools fast-track the file.",
          },
        },
        {
          position: { en: "Voice / Chinese instruments (MEP variants)" },
          body: {
            en: "Some MEP schools accept voice as the primary instrument; some accept Chinese instruments (erhu, pipa, guzheng) within the MEP framework. NYGH and Dunman High specifically have a Chinese-instrument MEP track given their SAP and Bicultural Studies environment. Confirm with each target MEP school's open house brief whether your child's primary instrument is supported — this is the single most important pre-application check.",
          },
        },
      ],
      positionFocusNote: {
        en: "MEP candidates audition on one primary instrument. The chosen instrument remains the candidate's MEP-track instrument for the four years of secondary, so the choice should be the strongest instrument available — not the one the family thinks is most prestigious. Adjudicators see through repertoire choices that don't match the candidate's actual level.",
      },
      interviewQuestions: [
        {
          question: { en: "Why do you love music?" },
          subtext: {
            en: "Panels want a specific moment plus an academic-engagement signal, not generic appreciation.",
          },
          approach: {
            en: "Open with one concrete musical memory, then connect it to how you think about music academically.",
          },
          template: {
            en: "We performed Brahms's Hungarian Dance No. 5 in primary school orchestra and I noticed how the strings moved from G minor to G major in the middle section. After that I started reading about how composers use mode changes to surprise the listener — that's when I realised I want music as a subject, not just as a hobby.",
          },
        },
        {
          question: { en: "Why MEP at our school specifically?" },
          subtext: {
            en: "Did the family research the MEP programme's distinct character at this school?",
          },
          approach: {
            en: "Cite one specific thing about the school's MEP — the cohort size, the repertoire breadth, the academic music history exposure.",
          },
          template: {
            en: "NYGH's MEP has a strong Chinese-instrument track within the programme, which aligns with my erhu background. Combining Chinese music academic study with Western music history is the breadth I want for the next four years.",
          },
        },
        {
          question: { en: "What is your primary instrument and why?" },
          subtext: {
            en: "Can the candidate articulate the instrument relationship?",
          },
          approach: {
            en: "Name the instrument plus what playing it asks of you academically.",
          },
          template: {
            en: "Piano. My primary instrument because I can play multiple voices simultaneously — which is what I find most academically interesting about music. Studying counterpoint and harmonic analysis on the piano lets me read scores in a way a single-line instrument doesn't allow.",
          },
        },
        {
          question: { en: "Tell us about a time you had to overcome a musical setback." },
          subtext: {
            en: "Specific actions, not just outcome or feelings.",
          },
          approach: {
            en: "Situation → action → result, in two sentences.",
          },
          template: {
            en: "I failed Grade 5 ABRSM aural because I'd never practised interval identification systematically. I worked on aural every morning for ten minutes for four months. I passed Grade 5 the second time and started Grade 6 immediately — and my sight-reading improved too, because aural and sight-reading reinforce each other.",
          },
        },
        {
          question: { en: "Who is your favourite composer and why?" },
          subtext: {
            en: "Tests musical vocabulary and academic engagement, not just emotion.",
          },
          approach: {
            en: "Name the composer plus one specific musical element (harmonic, structural, textural) you can describe.",
          },
          template: {
            en: "Shostakovich, because of how his harmonic language sits between major and minor in a way that feels like neither. I asked my piano teacher why his preludes feel unstable; the answer was about modal mixture and that started me reading about 20th-century harmonic vocabulary.",
          },
        },
        {
          question: { en: "How do you manage time across academic subjects and music practice?" },
          subtext: {
            en: "MEP schools fear DSA kids who flame out academically — and MEP students carry an extra academic subject (music itself).",
          },
          approach: {
            en: "Describe a real system, not platitudes about discipline.",
          },
          template: {
            en: "I finish English and Math homework before practice because the focus needed for piano is too tired after. Science I do on weekends. My mother shows my report book to my piano teacher every term — if any subject drops a band, we cut one practice session. That's the rule we set together.",
          },
        },
        {
          question: { en: "If School A and our school both offer you MEP, which would you choose?" },
          subtext: {
            en: "Tests honesty under pressure — and whether you'd actually come.",
          },
          approach: {
            en: "Don't dodge. Pick one school, justify with one specific reason.",
          },
          template: {
            en: "Honestly, your school. Your MEP teacher's emphasis on Bach repertoire matches what I want to develop. If School A called first I'd still wait for your reply.",
          },
        },
      ],
      schools: [
        {
          name: "Anglo-Chinese School (Independent)",
          url: "https://www.acsindep.moe.edu.sg/admissions/direct-school-admission/",
          talentArea: { en: "MEP (Boys), IP" },
          context: {
            en: "One of the 5 MOE-designated MEP schools. IP school. ACS(I) MEP has a long heritage and offers MEP through the IB Diploma pathway in upper years.",
          },
        },
        {
          name: "Dunman High School",
          url: "https://dhsopenhouse.com/wp-content/uploads/2026/05/2026-FAQ-for-DSA-Sec.pdf",
          talentArea: { en: "MEP (Boys and Girls), IP / DSA-Sec" },
          context: {
            en: "One of the 5 MOE-designated MEP schools. SAP and Bicultural Studies school. MEP among Dunman's 2026 DSA FAQ talent areas, with strong Chinese instrument support given the SAP environment.",
          },
        },
        {
          name: "Methodist Girls' School (Secondary)",
          url: "https://www.mgs.moe.edu.sg/secondary/admissions/dsa-sec1/",
          talentArea: { en: "MEP (Girls), DSA-Sec" },
          context: {
            en: "One of the 5 MOE-designated MEP schools. Methodist heritage girls' school. MEP among MGS's published DSA talent areas.",
          },
        },
        {
          name: "Nanyang Girls' High School",
          url: "https://www.nygh.moe.edu.sg/admissions/",
          talentArea: { en: "MEP (Girls), IP" },
          context: {
            en: "One of the 5 MOE-designated MEP schools. SAP and Bicultural Studies school. NYGH's MEP has a Chinese-instrument track integrated within the programme.",
          },
        },
        {
          name: "Raffles Girls' School (Secondary)",
          url: "https://form.gov.sg/69d49b0ec6b8769cabadd868",
          talentArea: { en: "MEP (Girls), IP" },
          context: {
            en: "One of the 5 MOE-designated MEP schools. RGS publishes a dedicated 2026 RGS DSA Music Elective Programme additional-documents submission form, indicating distinct MEP audition logistics.",
          },
        },
      ],
      parentChecklist: [
        {
          label: { en: "Lead time — when the audition is still weeks out" },
          items: [
            {
              en: "Confirm each of the 5 MEP schools you are targeting is set up to accept your child's primary instrument. NYGH and Dunman accept Chinese instruments within MEP; others vary. This is the single most important pre-application check — find each school's MEP open house material online.",
            },
            {
              en: "Choose the contrasting pair early. The pair should be from genuinely different musical territories (period, style, mood). Confirm the choice with your child's instrument teacher; pieces that expose intonation, articulation, or sight-reading weakness are the most common audition mistake.",
            },
            {
              en: "Practise aural daily for ten minutes. Run interval-identification drills (perfect 4th vs 5th, major vs minor 3rd, etc.) and rhythm clap-back. MEP aural is more demanding than ABRSM practical aural; this is the easiest dimension to upgrade with daily practice.",
            },
            {
              en: "Practise sight-reading at Grade 5 difficulty daily for ten minutes. Use ABRSM sight-reading books at one grade below your child's playing level as the working set.",
            },
            {
              en: "Run a mock interview using the questions above. Record on phone. Watch back together. Flag any answer that ran over thirty seconds — or used the word \"passionate.\" Both kill the read.",
            },
          ],
        },
        {
          label: { en: "Tapering — final week" },
          items: [
            {
              en: "Drop intensity. Switch to 70%: opening 30 seconds of each piece, sight-read at audition difficulty, aural drills, no new repertoire. Final-week piece-changes almost never end well.",
            },
            {
              en: "Confirm logistics in writing. Time, venue (typically the school's music room or hall), attire (school uniform or smart casual; bring the instrument and required accessories). Email the teacher-in-charge if anything is ambiguous.",
            },
            {
              en: "For wind players: confirm the reed has been played in for at least 5-7 sessions before audition day. A new reed on audition day is the single most common P6 woodwind disaster.",
            },
          ],
        },
        {
          label: { en: "Day of audition" },
          items: [
            {
              en: "Arrive 60 minutes early. Warm up properly — long tones / scales / opening 16 bars of each piece. Do not over-rehearse the full pieces — the audition is the performance.",
            },
            {
              en: "Eat 90 minutes before — not 30. Avoid foods that affect the embouchure for wind / brass players.",
            },
            {
              en: "Drop off, don't hover. Walk in, greet the teacher-in-charge by name, leave. Over-involved parents are visible and the candidate absorbs the cost.",
            },
            {
              en: "No post-mortem in the car. One question only: \"What's one thing the panel said today?\" Anything else waits 24 hours.",
            },
          ],
        },
      ],
      sprintAdvice: {
        en: "If you came to this page late — applications in, MEP audition coming up, no real prep — there are still real moves. Lock the contrasting pair tonight; don't change pieces this week. Prioritise daily aural drills and sight-reading at Grade 5 difficulty — these are the components where a few weeks of focused practice can still meaningfully change the audition outcome. Cancel anything that competes with sleep and embouchure recovery. Spend the freed time on interview prep, focusing on academic music vocabulary (phrase / voicing / articulation / harmonic colour / modulation / form). Some families bring in a private music coach with MEP experience at this stage. A MEP-experienced coach can polish the opening 30 seconds of each piece and rehearse the aural battery — but no coach produces, in three sessions, the academic music engagement of years of musical curiosity. Treat it as triage, not a fix.",
      },
    },
  },
};

export const TALENT_SLUGS: TalentSlug[] = [
  "basketball",
  "football",
  "swimming",
  "track-field",
  "badminton",
  "martial-arts",
  "music",
  "math",
  "robotics",
  "chinese",
  "dance",
  "drama",
  "art",
  "hockey",
  "squash",
  "leadership",
  "volleyball",
  "table-tennis",
  "netball",
  "floorball",
  "choir",
  "chinese-orchestra",
  "tennis",
  "wushu",
  "water-polo",
  "sailing",
  "rugby",
  "symphonic-band",
  "mep",
];

/**
 * Adjacency map for related-talent cards in InterviewTalentPageBody.
 * Each talent recommends 2 nearest-neighbour talents. Hand-picked by
 * trial type / training pattern overlap, not by alphabetical order.
 *
 *   Team ball sports cluster:    basketball ↔ football
 *   Endurance / speed cluster:   swimming ↔ track-field
 *   Technique-individual cluster: badminton ↔ martial-arts
 *   Discipline-aesthetic cluster: music ↔ math
 *
 * Plus one cross-cluster bridge per talent for broader exploration.
 */
export const ADJACENT_TALENTS: Record<TalentSlug, [TalentSlug, TalentSlug]> = {
  basketball: ["football", "track-field"],
  football: ["basketball", "track-field"],
  swimming: ["track-field", "badminton"],
  "track-field": ["swimming", "football"],
  badminton: ["martial-arts", "swimming"],
  "martial-arts": ["badminton", "basketball"],
  music: ["math", "martial-arts"],
  math: ["chinese", "robotics"],
  robotics: ["math", "music"],
  chinese: ["math", "music"],
  dance: ["music", "drama"],
  drama: ["dance", "music"],
  art: ["drama", "dance"],
  hockey: ["football", "track-field"],
  squash: ["badminton", "martial-arts"],
  leadership: ["chinese", "drama"],
  volleyball: ["basketball", "badminton"],
  "table-tennis": ["badminton", "chinese"],
  netball: ["basketball", "volleyball"],
  floorball: ["hockey", "basketball"],
  choir: ["music", "drama"],
  "chinese-orchestra": ["music", "chinese"],
  tennis: ["badminton", "table-tennis"],
  wushu: ["martial-arts", "chinese"],
  "water-polo": ["swimming", "basketball"],
  sailing: ["swimming", "track-field"],
  rugby: ["football", "track-field"],
  "symphonic-band": ["music", "chinese-orchestra"],
  mep: ["music", "symphonic-band"],
};

/**
 * Total number of talent rich-content prep pages.
 * Used across UI copy ("17 talent prep pages", trust strips, meta descriptions, etc.)
 * Auto-updates whenever a new talent is added to TALENT_SLUGS.
 *
 * Note: this counts ALL talent pages live in the site, NOT the Hero grid's
 * curated 14. Hero grid uses a hardcoded constant inside HeroTalentGrid.tsx.
 */
export const TALENT_COUNT: number = TALENT_SLUGS.length;

export function getTalentPage(slug: string): TalentPage | null {
  if (!(slug in TALENT_DATA)) return null;
  return TALENT_DATA[slug as TalentSlug];
}

export function getAllTalentPages(): TalentPage[] {
  return TALENT_SLUGS.map((s) => TALENT_DATA[s]);
}
