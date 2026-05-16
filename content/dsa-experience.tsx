/**
 * DSA experience guide content (English).
 * MDX is not configured in next.config — content lives here and is rendered by DsaExperiencePageBody.
 */

export type DsaExperienceSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  orderedList?: string[];
};

export const DSA_EXPERIENCE_SECTIONS: DsaExperienceSection[] = [
  {
    id: "section-1",
    title: "What Is DSA and How It Actually Works",
    paragraphs: [
      "Direct School Admission (DSA) lets Primary 6 students apply to secondary schools based on talent—sports, arts, leadership, languages, or STEM—before PSLE results are released. It is a separate pathway from the national Secondary 1 posting exercise.",
      "Each student may submit up to three school choices on the MOE DSA-Sec portal. Schools run their own selection exercises (trials, auditions, interviews, portfolio reviews) and may issue conditional offers.",
      "A confirmed DSA offer guarantees placement at that school only if the student meets the school’s minimum posting group. For Integrated Programme (IP) and Express schools, that generally means a PSLE Achievement Level (AL) score of 22 or better (AL ≤ 22).",
      "If your child’s PSLE AL is 23 or higher, they cannot enter IP or Express streams—even with a DSA offer. Stream placement is determined by PSLE score, not by the offer letter alone.",
      "Once a student accepts a DSA offer, they are committed to that school and CCA pathway and cannot participate in the S1 posting exercise for other schools.",
      "For the 2026 cycle, the DSA application window runs from 6 May to 2 June 2026. Plan research and open-house visits before the portal opens.",
    ],
  },
  {
    id: "section-2",
    title: "The Most Important Rule — School Selectivity vs. Talent Required",
    paragraphs: [
      "There is an inverse relationship between how academically selective a school is (reflected in its Cut-Off Point, or COP) and how accessible its DSA talent bar may feel for a given applicant—but the top academic schools are never “easy” on talent.",
      "The most academically selective schools (for example Raffles Institution, Hwa Chong Institution, and Nanyang Girls’ High School) are also the most selective in DSA. They recruit nationally ranked talent and fill limited vacancies quickly.",
      "Schools with less aggressive academic COPs often still run serious DSA programmes, but they may have unfilled DSA places in certain CCAs. By the time national-level athletes and artists have committed to top schools, mid-tier schools may accept strong—but not nationally dominant—profiles in the same sport or art form.",
      "Think of it as a talent marketplace moving down the ladder: elite performers cluster at the most selective schools first; schools lower on the academic ladder may still want quality talent, but the absolute bar for “standout” achievement can be lower when vacancies remain.",
      "Real example (anonymised): A national-level softball pitcher with PSLE AL 18 received offers from Raffles Institution and Nanyang Girls’ High School but was not taken by Methodist Girls’ School that year—MGS had different squad needs and intake priorities, not a lower talent standard by default.",
      "Another real example (anonymised): A student who competed at World Cup level in softball with AL 12 was accepted by Nanyang Girls’ and Nan Hua High School but not by Raffles Institution—reminding families that even world-class résumés do not guarantee every top school when annual slots are full.",
    ],
  },
  {
    id: "section-3",
    title: "Sports and Arts — How Schools Actually Assess Talent",
    paragraphs: [
      "External coaching matters far more than school CCA alone. Students who train three or more times per week at a club or academy are evaluated in a different cohort from those who only practise during school CCA sessions.",
      "Individual and team achievements are not equivalent. Winning as an individual directly reflects personal skill. Team medals may reflect your child’s contribution—or a supporting role. Interviewers and coaches usually probe specific positions, minutes played, or solo parts.",
      "Niche sports have smaller talent pools. Softball is offered at roughly 20–30 primary schools in Singapore; basketball at well over 150. Being “top 10 nationally” in softball means competing against a much smaller pool than the same label in basketball. Both matter, but context matters too.",
      "Students with years of structured external training usually have a realistic sense of island-wide standing—especially in niche sports and competitive arts programmes with graded examinations or festival circuits.",
      "If your child has only played casually, without documented training through school CCA or external coaching, DSA is unlikely to be the right path for that activity. Schools assess sustained, structured experience—not enthusiasm alone.",
    ],
  },
  {
    id: "section-4",
    title: "Leadership DSA — What Schools Actually Want",
    paragraphs: [
      "Forum discussions among parents consistently highlight the same pattern: schools want multi-year, school-wide leadership—not a single-semester class monitor appointment.",
      "The progression that carries weight typically runs Class Monitor → CCA committee → school prefect or student councillor → Head Prefect, Deputy Head Prefect, or Student Council executive roles.",
      "Class monitor alone rarely satisfies Tier A (most competitive) schools. External leadership programmes (MOE, university-affiliated, or international) can strengthen an application but cannot replace authentic school-based leadership verified by teachers.",
      "There have been reports of consultants charging large fees to “guarantee” leadership DSA outcomes. Schools validate leadership through interviews and teacher references; fabricated or rushed portfolios are often obvious.",
      "Multi-year commitment signals character and reliability. Interviewers look for consistency across P4–P6, not a burst of titles in Primary 6 alone.",
    ],
  },
  {
    id: "section-5",
    title: "STEM and Academic DSA",
    paragraphs: [
      "Competition quality matters far more than quantity. One NMOS Special Round qualification typically outweighs three SASMO Gold medals in the eyes of selective schools.",
      "Use this rough hierarchy when judging where your child’s profile sits:",
    ],
    orderedList: [
      "International Olympiad representation or equivalent (top tier)",
      "NMOS Special Round / APMOPS high distinction (very high)",
      "NMOS Gold / SMOPS Top 10 / AMO top performer bands",
      "SASMO Gold (competitive but common among top-school applicants)",
      "SASMO Silver or Bronze plus multiple competitions (solid foundation)",
      "Participation certificates without placings (generally insufficient for top-tier schools)",
    ],
    bullets: [
      "Consistency across two or three credible competitions is valued more than a single lucky performance.",
      "Research projects and science-fair awards complement competition results but rarely replace them for the most selective STEM DSA tracks.",
      "Serious applicants often begin structured preparation from Primary 4. Depth of engagement over time—not a last-minute cram—defines competitive STEM portfolios.",
    ],
  },
  {
    id: "section-6",
    title: "The DSA Application Timeline (2026)",
    paragraphs: [
      "Use this calendar to plan school visits, portfolio updates, and family decisions. Dates follow the MOE 2026 DSA-Sec cycle and common school practices.",
    ],
  },
  {
    id: "section-7",
    title: "Common Mistakes to Avoid",
    paragraphs: ["Parents who have been through DSA often cite the same pitfalls:"],
    orderedList: [
      "Applying only to reach schools. With only three DSA choices, include at least one school where your child’s talent level is genuinely competitive—not all aspirational names.",
      "Assuming national-level talent guarantees admission to Raffles Institution or similar schools. Annual vacancies are limited and not publicly disclosed; even top athletes are rejected when slots are full.",
      "Ignoring the CCA commitment. Students admitted via DSA are expected to remain in that CCA throughout secondary school. If your child plans to switch CCAs later, do not apply through DSA for that activity.",
      "Underestimating the AL requirement. Even with a strong DSA offer, students with PSLE AL 23 or higher cannot attend IP or Express schools. The offer does not override stream placement.",
      "Skipping open houses. Open houses are where you learn whether a school is actively recruiting for your specific talent area that year—attend before you finalise your three choices.",
    ],
  },
  {
    id: "section-8",
    title: "Practical Checklist Before Applying",
    paragraphs: [
      "Work through this list with your child before you submit on the MOE portal. Every item should be a confident “yes” or a deliberate plan to complete it before 2 June 2026.",
    ],
  },
];

export const DSA_EXPERIENCE_TIMELINE: { date: string; milestone: string }[] = [
  {
    date: "April–May 2026",
    milestone:
      "School open houses — attend and ask whether the school is recruiting for your child’s talent area this cycle.",
  },
  {
    date: "6 May 2026",
    milestone: "DSA application portal opens.",
  },
  {
    date: "2 June 2026",
    milestone: "DSA application closes — last day to submit all materials.",
  },
  {
    date: "July–August 2026",
    milestone: "School trials, auditions, and interviews.",
  },
  {
    date: "Late August 2026",
    milestone: "DSA offers released.",
  },
  {
    date: "September 2026",
    milestone: "Deadline to accept a DSA offer.",
  },
  {
    date: "November 2026",
    milestone:
      "PSLE results released — offer confirmed if AL ≤ 22 for IP/Express schools.",
  },
];

export const DSA_EXPERIENCE_CHECKLIST: string[] = [
  "Attended the school’s open house and spoken with the relevant CCA teacher or coach.",
  "Confirmed the school is actively recruiting for your child’s specific talent area in 2026.",
  "Your child has documented experience (CCA records, competition certificates, training logs).",
  "You have a realistic PSLE projection and it is ≤ 22 if you are targeting IP or Express schools.",
  "You have selected three schools thoughtfully: at least one realistic match, not all aspirational.",
  "Your child understands the CCA commitment — DSA admits generally cannot switch away from that CCA pathway.",
  "You have noted the 2 June 2026 application deadline on your family calendar.",
];

export const DSA_EXPERIENCE_TOC = DSA_EXPERIENCE_SECTIONS.map((s, i) => ({
  href: `#${s.id}`,
  label: `Section ${i + 1}`,
  shortTitle: s.title,
}));
