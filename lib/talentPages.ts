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
  | "volleyball";

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
