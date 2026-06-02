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
  | "math";

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

export type RichContent = {
  trialDimensions: DimensionEntry[];
  /** Optional lead-in paragraph for trial dimensions section. */
  trialDimensionsIntro?: LocaleStrFlex;
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
];

export function getTalentPage(slug: string): TalentPage | null {
  if (!(slug in TALENT_DATA)) return null;
  return TALENT_DATA[slug as TalentSlug];
}

export function getAllTalentPages(): TalentPage[] {
  return TALENT_SLUGS.map((s) => TALENT_DATA[s]);
}
