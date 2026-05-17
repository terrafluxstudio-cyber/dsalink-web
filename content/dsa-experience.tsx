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

// ─────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────
const SECTIONS_EN: DsaExperienceSection[] = [
  {
    id: "section-1",
    title: "What Is DSA and How It Actually Works",
    paragraphs: [
      "Direct School Admission (DSA) lets Primary 6 students apply to secondary schools based on talent—sports, arts, leadership, languages, or STEM—before PSLE results are released. It is a separate pathway from the national Secondary 1 posting exercise.",
      "Each student may submit up to three school choices on the MOE DSA-Sec portal. Schools run their own selection exercises (trials, auditions, interviews, portfolio reviews) and may issue conditional offers.",
      "A confirmed DSA offer guarantees placement at that school only if the student meets the school's minimum posting group. For Integrated Programme (IP) and Express schools, that generally means a PSLE Achievement Level (AL) score of 22 or better (AL ≤ 22).",
      "If your child's PSLE AL is 23 or higher, they cannot enter IP or Express streams—even with a DSA offer. Stream placement is determined by PSLE score, not by the offer letter alone.",
      "Once a student accepts a DSA offer, they are committed to that school and CCA pathway and cannot participate in the S1 posting exercise for other schools.",
      "Before confirming any DSA offer, consider risk in both directions. If your child's PSLE score falls short of the school's minimum posting group, a conditional offer may be withdrawn — and the S1 Posting Exercise is no longer available, because they exited it upon confirmation. Equally, if your child outperforms their PSLE projections significantly — scoring well enough to qualify for a higher-tier school under normal posting — the DSA commitment remains binding. There is no provision for transferring to a school your child's actual results would have qualified them for. Assessing your child's realistic PSLE range in both directions — not just the middle estimate — before confirming is one of the most consequential decisions in the DSA process.",
      "For the 2026 cycle, the DSA application window runs from 6 May to 2 June 2026. Plan research and open-house visits before the portal opens.",
    ],
    callouts: [
      {
        type: "warning",
        heading: "Before you confirm: think through both directions",
        body: "If PSLE falls short of the school's minimum posting group, a conditional offer may be withdrawn — and the S1 Posting Exercise is closed, because you exited it on confirmation. If PSLE significantly exceeds projections, the DSA commitment still holds — there is no mechanism to transfer to a higher-tier school your child's results would otherwise have reached.",
      },
    ],
  },
  {
    id: "section-2",
    title: "The Most Important Rule — School Selectivity vs. Talent Required",
    paragraphs: [
      "There is an inverse relationship between how academically selective a school is (reflected in its Cut-Off Point, or COP) and how accessible its DSA talent bar may feel for a given applicant—but the top academic schools are never \"easy\" on talent.",
      "The most academically selective schools (for example Raffles Institution, Hwa Chong Institution, and Nanyang Girls' High School) are also the most selective in DSA. They recruit nationally ranked talent and fill limited vacancies quickly.",
      "Schools with less aggressive academic COPs often still run serious DSA programmes, but they may have unfilled DSA places in certain CCAs. By the time national-level athletes and artists have committed to top schools, mid-tier schools may accept strong—but not nationally dominant—profiles in the same sport or art form.",
      "Think of it as a talent marketplace moving down the ladder: elite performers cluster at the most selective schools first; schools lower on the academic ladder may still want quality talent, but the absolute bar for \"standout\" achievement can be lower when vacancies remain.",
      "Consider a swimmer who has trained with a club since Primary 2, represented their school at NSG competitions, and achieved national age-group rankings. At the most academically selective schools, this profile earned confirmed offers — but the same swimmer was unsuccessful at one equally well-known school that had already filled its swimming quota with national record holders that year. The school had not lowered its standards; it had simply run out of available places for that talent area.",
      "A documented pattern across multiple years: students who have represented Singapore at regional or international level in their sport received confirmed offers from some top-tier schools in the same application cycle while being rejected by others at the same tier — not because of a talent gap, but because annual vacancies at each school are finite and fill on a first-qualified basis. A world-class résumé is a powerful credential. It is not a key that opens every door in the same year.",
    ],
    callouts: [
      {
        type: "insight",
        heading: "Use NSG results as a free public signal",
        body: "Before applying, check the school's National School Games results in your child's specific sport. Schools that reach NSG nationals recruit nationally competitive talent. Schools competitive at zonal level may still accept strong-but-not-national profiles — especially after top-tier slots are filled. Match talent level to school tier, not just school name.",
      },
    ],
  },
  {
    id: "section-3",
    title: "Sports and Arts — How Schools Actually Assess Talent",
    paragraphs: [
      "External coaching matters far more than school CCA alone. Students who train three or more times per week at a club or academy are evaluated in a different cohort from those who only practise during school CCA sessions.",
      "Individual and team achievements are not equivalent. Winning as an individual directly reflects personal skill. Team medals may reflect your child's contribution—or a supporting role. Interviewers and coaches usually probe specific positions, minutes played, or solo parts.",
      "Niche sports have smaller talent pools. Softball is offered at around 14 primary schools in Singapore; basketball at well over 150. Being \"top 10 nationally\" in softball means competing against a much smaller pool than the same label in basketball. Both matter, but context matters too.",
      "Students with years of structured external training usually have a realistic sense of island-wide standing—especially in niche sports and competitive arts programmes with graded examinations or festival circuits.",
      "If your child has only played casually, without documented training through school CCA or external coaching, DSA is unlikely to be the right path for that activity. Schools assess sustained, structured experience—not enthusiasm alone.",
    ],
    callouts: [
      {
        type: "insight",
        heading: "Silence is usually the rejection notice",
        body: "Most schools do not send notifications to unsuccessful applicants. If two weeks pass without contact after results season begins, treat that as your answer — not a delay.",
      },
      {
        type: "warning",
        heading: "Dual-stream schools: confirm which track before signing",
        body: "Schools offering both IP and O Level programmes can counter-offer the O Level track to DSA applicants, even if you expressed a preference for IP. Ask at open house. Confirm in writing before accepting any offer — you cannot change the track afterwards.",
      },
    ],
  },
  {
    id: "section-4",
    title: "Leadership DSA — What Schools Actually Want",
    paragraphs: [
      "Forum discussions among parents consistently highlight the same pattern: schools want multi-year, school-wide leadership—not a single-semester class monitor appointment.",
      "The progression that carries weight typically runs Class Monitor → CCA committee → school prefect or student councillor → Head Prefect, Deputy Head Prefect, or Student Council executive roles.",
      "Class monitor alone rarely satisfies Tier A (most competitive) schools. External leadership programmes (MOE, university-affiliated, or international) can strengthen an application but cannot replace authentic school-based leadership verified by teachers.",
      "There have been reports of consultants charging large fees to \"guarantee\" leadership DSA outcomes. Schools validate leadership through interviews and teacher references; fabricated or rushed portfolios are often obvious.",
      "Multi-year commitment signals character and reliability. Interviewers look for consistency across P4–P6, not a burst of titles in Primary 6 alone.",
    ],
  },
  {
    id: "section-5",
    title: "STEM and Academic DSA",
    paragraphs: [
      "Competition quality matters far more than quantity. One NMOS Special Round qualification typically outweighs three SASMO Gold medals in the eyes of selective schools.",
      "Use this rough hierarchy when judging where your child's profile sits:",
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
      "Applying only to reach schools. With only three DSA choices, include at least one school where your child's talent level is genuinely competitive—not all aspirational names.",
      "Assuming national-level talent guarantees admission to Raffles Institution or similar schools. Annual vacancies are limited and not publicly disclosed; even top athletes are rejected when slots are full.",
      "Ignoring the CCA commitment. Students admitted via DSA are expected to remain in that CCA throughout secondary school. If your child plans to switch CCAs later, do not apply through DSA for that activity.",
      "Underestimating the AL requirement. Even with a strong DSA offer, students with PSLE AL 23 or higher cannot attend IP or Express schools. The offer does not override stream placement.",
      "Skipping open houses. Open houses are where you learn whether a school is actively recruiting for your specific talent area that year—attend before you finalise your three choices.",
      "Assuming the commitment risk only affects children who underperform at PSLE. A child who dramatically outperforms their projection is equally bound — even if their actual PSLE score would have qualified them for a higher-tier school through normal posting. Before confirming, think through both ends of your child's realistic PSLE range, not just the most likely outcome.",
      "Applying to NYGH for Mathematics, Science, or Artistic Gymnastics DSA in the 2026 intake. NYGH discontinued all three programmes for 2026 without extended advance notice. Families who had invested years building portfolios for these specific pathways need to redirect their planning immediately.",
      "Not confirming whether the DSA offer covers the IP or O Level track at dual-stream schools. Schools can counter-offer the O Level track to applicants who expressed a preference for IP, based on their academic results. Confirm the exact track before accepting — you cannot change it afterwards.",
    ],
  },
  {
    id: "section-8",
    title: "Practical Checklist Before Applying",
    paragraphs: [
      "Work through this list with your child before you submit on the MOE portal. Every item should be a confident \"yes\" or a deliberate plan to complete it before 2 June 2026.",
    ],
  },
];

const TIMELINE_EN = [
  { date: "April–May 2026", milestone: "School open houses — attend and ask whether the school is recruiting for your child's talent area this cycle." },
  { date: "6 May 2026", milestone: "DSA application portal opens." },
  { date: "2 June 2026", milestone: "DSA application closes — last day to submit all materials." },
  { date: "July–August 2026", milestone: "School trials, auditions, and interviews." },
  { date: "Late August 2026", milestone: "DSA offers released." },
  { date: "September 2026", milestone: "Deadline to accept a DSA offer." },
  { date: "November 2026", milestone: "PSLE results released — offer confirmed if AL ≤ 22 for IP/Express schools." },
];

const CHECKLIST_EN = [
  "Attended the school's open house and spoken with the relevant CCA teacher or coach.",
  "Confirmed the school is actively recruiting for your child's specific talent area in 2026.",
  "Your child has documented experience (CCA records, competition certificates, training logs).",
  "You have a realistic PSLE projection and it is ≤ 22 if you are targeting IP or Express schools.",
  "You have selected three schools thoughtfully: at least one realistic match, not all aspirational.",
  "Your child understands the CCA commitment — DSA admits generally cannot switch away from that CCA pathway.",
  "You have noted the 2 June 2026 application deadline on your family calendar.",
  "I have checked this school's NSG competition results in my child's specific sport or talent area to understand what calibre of student they typically recruit.",
  "If this is a dual-stream school, I have confirmed in writing which academic track (IP or O Level) the DSA offer covers.",
  "I have thought through both upside and downside PSLE scenarios — if my child scores significantly better than expected, I accept that this DSA commitment remains binding regardless.",
];

// ─────────────────────────────────────────────
// CHINESE (中文)
// ─────────────────────────────────────────────
const SECTIONS_ZH: DsaExperienceSection[] = [
  {
    id: "section-1",
    title: "直接招生计划（DSA）是什么，如何运作",
    paragraphs: [
      "直接招生计划（DSA）让小六学生能在 PSLE 成绩公布前，凭才能——体育、艺术、领导力、语言或 STEM——申请心仪中学。这是独立于全国中一分配的另一条升学路径。",
      "每位学生可通过 MOE DSA-Sec 网站提交最多三个学校选择。学校会自行举办选拔活动（试训、试演、面试、作品集审查），并可发出条件录取通知。",
      "DSA 确认录取通知书保证入读该校的前提是：学生的 PSLE 成绩达到该校要求的最低分配组别。对于综合课程（IP）和快捷源流学校，这通常意味着 PSLE 成就等级（AL）须为 22 或以下（AL ≤ 22）。",
      "若孩子的 PSLE AL 为 23 或以上，即使持有 DSA 录取通知书，也无法进入 IP 或快捷源流——源流分配由 PSLE 成绩决定，不由录取通知书单独决定。",
      "一旦学生接受 DSA 录取通知书，即承诺就读该校并参与该 CCA 路径，不得再参加 S1 中央分配，申请其他学校。",
      "在 confirm 任何 DSA 录取通知书之前，请考虑两个方向的风险。如果孩子 PSLE 分数未达到该校最低录取分配组别，条件性录取通知可能被撤销——而 S1 分配通道，他们在 confirm 的那一刻就已退出，无法再回头。同样，如果孩子 PSLE 发挥显著超出预期——考出了按正常分配可以进入更好学校的成绩——DSA 承诺依然具有约束力。没有任何机制允许他们转入凭 PSLE 实际成绩本可进入的更高层级学校。在 confirm 之前，对孩子 PSLE 成绩的上下两个方向都做出清醒判断——而不只是中位预测——是整个 DSA 过程中最关键的决定之一。",
      "2026 年度 DSA 申请窗口为 2026 年 5 月 6 日至 6 月 2 日。请在网站开放前完成学校研究和开放日参观。",
    ],
    callouts: [
      {
        type: "warning",
        heading: "Confirm 之前：两个方向都要想清楚",
        body: "如果 PSLE 未达学校最低分配组别，条件性录取可能被撤销——而 S1 分配通道已在你 confirm 的那一刻关闭。如果 PSLE 大幅超出预期，DSA 承诺依然有效——没有机制让孩子转入凭实际成绩本可进入的更好学校。",
      },
    ],
  },
  {
    id: "section-2",
    title: "最重要的规则——学校选拔性与才能门槛",
    paragraphs: [
      "学校的学术选拔性（以 COP 为参考）与某申请者在 DSA 才能门槛上的竞争难度之间，存在一种反向关系——但顶尖学术学校从不在才能上\"放水\"。",
      "学术选拔性最高的学校（如莱佛士书院、华侨中学、南洋女子中学）在 DSA 上同样是最严苛的。它们招募全国排名的顶尖人才，名额很快就会填满。",
      "学术 COP 竞争没那么激烈的学校通常也有认真的 DSA 项目，但在某些 CCA 上可能存在未填满的 DSA 名额。当全国顶尖运动员和艺术家已向头部学校确认入读后，中游学校可能会接受在该运动或艺术领域表现强劲但未必全国顶尖的申请者。",
      "可以把这想象成一个人才市场从上往下流动：顶尖人才先向选拔性最高的学校聚拢；学术层级较低的学校仍想招募优质人才，但当仍有名额时，\"出众\"的绝对门槛可以低一些。",
      "以游泳为例：一名从小二开始在俱乐部系统训练、代表学校参加 NSG 赛事并取得全国年龄组前列排名的学生，在选拔性最高的几所学校中收到了确认录取通知——但在另一所同等知名的学校却未能成功，因为该校当年游泳项目的名额，已全部被持有全国纪录的选手填满。不是门槛降低了，而是名额用完了。",
      "多年的规律显示：曾代表新加坡参加区域或国际赛事的运动员，在同一申请周期内，可能同时收到某些顶校的确认录取，又被其他同等级别的学校拒绝——原因不是才能差异，而是每所学校每年的名额有限，先到先得。世界级履历是强有力的凭证，但不是同一年能打开所有顶校大门的通用钥匙。",
    ],
    callouts: [
      {
        type: "insight",
        heading: "用 NSG 赛果做选校功课（免费公开情报）",
        body: "申请前，查一查目标学校在孩子那个运动项目的 National School Games 赛区成绩。能进全国赛的学校，招募的是全国级选手；区域赛成绩稳定但未进全国的学校，可能在顶校名额用完后接受强但非全国顶尖的申请者。按才能层级选校，而不只看学校名气。",
      },
    ],
  },
  {
    id: "section-3",
    title: "体育与艺术——学校如何真正评估才能",
    paragraphs: [
      "校外培训的分量远超学校 CCA 本身。每周训练三次或以上（在俱乐部或学院）的学生，在评估时被归为不同梯队，与仅在学校 CCA 中练习的学生区别对待。",
      "个人成绩与团体成绩并不等同。个人赛名次直接反映个人实力。团体奖牌可能体现了孩子的贡献——也可能只是配角。面试官和教练通常会追问具体位置、上场时间或独奏部分。",
      "小众运动的人才池更小。垒球在新加坡约有 14 所小学开展，篮球则超过 150 所。垒球\"全国前 10\"意味着在小得多的人才池中竞争；篮球同样的标签，竞争者要多得多。两者都重要，但背景同样重要。",
      "经过多年系统校外训练的学生，通常对自己在全岛的水平有清醒认知——尤其在小众运动和有分级考试或赛事体系的艺术项目中。",
      "若孩子只是非正式练习，没有通过学校 CCA 或校外培训留下记录，DSA 可能并不适合该活动路径。学校评估的是持续、系统的经验——而非单纯的热情。",
    ],
    callouts: [
      {
        type: "insight",
        heading: "没有邮件，通常就是答复",
        body: "大部分学校不会向未入选的申请者发送淘汰通知。结果发放季开始后两周没有任何消息，这很可能就是你的答案——不是延迟，是沉默式淘汰。",
      },
      {
        type: "warning",
        heading: "双轨制学校：签收前确认是哪条轨道",
        body: "同时提供 IP 和 O Level 的学校，可以把你的 IP 志愿改成 O Level 录取通知，即使申请时已注明偏好 IP。开放日时直接问，收到通知书前书面确认。签了就改不了。",
      },
    ],
  },
  {
    id: "section-4",
    title: "领导力 DSA——学校真正看重什么",
    paragraphs: [
      "家长论坛上的讨论一再呈现同一规律：学校希望看到跨越多年、全校范围的领导角色——而非一个学期的班长职位。",
      "受认可的晋升路径通常是：班长 → CCA 委员 → 学校纪律官或学生议员 → 总纪律官、副总纪律官或学生会执行职位。",
      "单一的班长经历很少能满足 A 层（竞争最激烈的）学校的要求。校外领导力项目（MOE、大学附属或国际项目）可以为申请加分，但无法取代经教师认证的真实校内领导经历。",
      "有报道称部分顾问收取高额费用\"保证\"领导力 DSA 录取。学校通过面试和教师推荐信来核实领导经历；伪造或仓促准备的作品集往往一眼便知。",
      "多年持续投入体现品格与责任心。面试官看重的是 P4–P6 的一贯表现，而非仅在小六突击积累的头衔。",
    ],
  },
  {
    id: "section-5",
    title: "STEM 与学术型 DSA",
    paragraphs: [
      "竞赛质量远比数量重要。一个 NMOS 特别轮资格，通常比三个 SASMO 金奖在选拔性学校眼中更有分量。",
      "参考以下大致层级，判断孩子的竞赛履历处于哪个位置：",
    ],
    orderedList: [
      "国际奥林匹克竞赛代表参赛或同等水平（顶级）",
      "NMOS 特别轮 / APMOPS 高分殊荣（非常高）",
      "NMOS 金奖 / SMOPS 前 10 / AMO 顶尖梯队",
      "SASMO 金奖（有竞争力，但在顶校申请者中很常见）",
      "SASMO 银/铜奖加多个竞赛参与（扎实的基础）",
      "仅有参与奖、无名次（对顶尖学校通常不够充分）",
    ],
    bullets: [
      "在两到三个有分量的竞赛中持续表现，比单次偶然超常发挥更受重视。",
      "研究项目和科学展奖项是竞赛成绩的补充，但在选拔性最高的 STEM DSA 路径中很少能取代竞赛成绩。",
      "认真的申请者通常从小四就开始系统备考。多年深度投入——而非临时突击——才是有竞争力的 STEM 作品集的核心。",
    ],
  },
  {
    id: "section-6",
    title: "DSA 申请时间轴（2026 年）",
    paragraphs: [
      "参考此日历规划学校参观、作品集更新和家庭决策。日期依据 MOE 2026 DSA-Sec 周期及各校惯例。",
    ],
  },
  {
    id: "section-7",
    title: "常见误区，务必避免",
    paragraphs: ["经历过 DSA 的家长经常提到同样的坑："],
    orderedList: [
      "只申请冲刺学校。三个 DSA 名额有限，请至少选一所孩子才能水平真正具竞争力的学校——不要全部押注于仰望目标。",
      "认为全国级才能必然能进莱佛士书院或同类学校。每年名额有限且不公开；即便是顶尖运动员，名额满后也会被拒。",
      "忽视 CCA 承诺。DSA 录取的学生须在整个中学阶段留在该 CCA。若孩子日后打算换 CCA，请勿以该活动申请 DSA。",
      "低估 AL 要求。即使持有强劲的 DSA 录取通知书，PSLE AL 为 23 或以上的学生也无法进入 IP 或快捷源流。录取通知书不能覆盖源流分配。",
      "跳过开放日。开放日是了解该校是否在当年积极招募你孩子特定才能领域的唯一机会——在确认三个选择前请务必参加。",
      "认为承诺风险只会影响 PSLE 成绩不达标的孩子。成绩显著超出预期的孩子同样受 confirm 承诺约束——即使他们的实际 PSLE 成绩原本可以通过正常分配进入更高层级的学校。confirm 之前，请对孩子 PSLE 成绩的上下两个方向都做出判断，而不只看最可能的中位结果。",
      "2026 年向南洋女中报名数学、理科或竞技体操 DSA。NYGH 已取消这三个 2026 年度的 DSA 项目，且未提前足够预警。为此专门投入多年准备的家庭，需要立即重新规划志愿学校。",
      "没有确认 DSA 录取通知书覆盖的是 IP 还是 O Level 轨道——尤其是在双轨制学校。学校可以根据申请者的学业成绩，把 IP 志愿改为 O Level 录取通知，即使申请时已注明偏好 IP。签收前请务必确认对应轨道，事后无法更改。",
    ],
  },
  {
    id: "section-8",
    title: "申请前实用清单",
    paragraphs: [
      "在 MOE 网站提交前，与孩子逐项确认以下事项。每一条都应是自信的\"是\"，或在 2026 年 6 月 2 日前完成的明确计划。",
    ],
  },
];

const TIMELINE_ZH = [
  { date: "2026 年 4–5 月", milestone: "学校开放日——参加并询问该校本届是否招募孩子的才能领域。" },
  { date: "2026 年 5 月 6 日", milestone: "DSA 申请网站开放。" },
  { date: "2026 年 6 月 2 日", milestone: "DSA 申请截止——最后一天提交所有材料。" },
  { date: "2026 年 7–8 月", milestone: "学校试训、试演和面试。" },
  { date: "2026 年 8 月下旬", milestone: "DSA 录取通知书发出。" },
  { date: "2026 年 9 月", milestone: "接受 DSA 录取通知书的截止日期。" },
  { date: "2026 年 11 月", milestone: "PSLE 成绩公布——IP/快捷源流学校 AL ≤ 22 的录取通知书正式确认。" },
];

const CHECKLIST_ZH = [
  "已参加该校开放日，并与相关 CCA 教师或教练交流。",
  "已确认该校在 2026 年积极招募孩子的具体才能领域。",
  "孩子有书面记录的经历（CCA 记录、竞赛证书、训练日志）。",
  "你有切实的 PSLE 预估分，若目标是 IP 或快捷源流学校，该分须 ≤ 22。",
  "你已审慎选定三所学校：至少一所是真正符合实际水平的，而非全部押注于仰望目标。",
  "孩子了解 CCA 承诺——DSA 录取学生通常不能转换该 CCA 路径。",
  "你已将 2026 年 6 月 2 日申请截止日期记入家庭日历。",
  "我已查阅目标学校在孩子才能项目上的 NSG 赛区历史成绩，了解该校通常招募什么层级的学生。",
  "如果是双轨制学校，我已书面确认 DSA 录取通知书对应的是 IP 还是 O Level 轨道。",
  "我已对孩子 PSLE 成绩的上下两个方向都做过判断——即使孩子发挥远超预期，我也接受这份 DSA 承诺依然具有约束力。",
];

// ─────────────────────────────────────────────
// MALAY (机器翻译占位)
// ─────────────────────────────────────────────
const SECTIONS_MS: DsaExperienceSection[] = [
  {
    id: "section-1",
    title: "Apakah DSA dan Bagaimana Ia Sebenarnya Berfungsi",
    paragraphs: [
      "Kemasukan Terus Sekolah (DSA) membolehkan pelajar Darjah 6 memohon ke sekolah menengah berdasarkan bakat—sukan, seni, kepimpinan, bahasa, atau STEM—sebelum keputusan PSLE diumumkan. Ia adalah laluan berasingan daripada latihan penempatan Menengah 1 nasional.",
      "Setiap pelajar boleh menghantar sehingga tiga pilihan sekolah melalui portal MOE DSA-Sec. Sekolah menjalankan latihan pemilihan mereka sendiri (ujian, audisi, temuduga, semakan portfolio) dan boleh mengeluarkan tawaran bersyarat.",
      "Tawaran DSA yang disahkan menjamin penempatan di sekolah itu hanya jika pelajar memenuhi kumpulan penempatan minimum sekolah. Untuk sekolah IP dan Express, ini biasanya bermakna skor AL PSLE 22 atau lebih baik (AL ≤ 22).",
      "Jika AL PSLE anak anda adalah 23 atau lebih tinggi, mereka tidak boleh memasuki aliran IP atau Express—walaupun dengan tawaran DSA. Penempatan aliran ditentukan oleh skor PSLE, bukan oleh surat tawaran sahaja.",
      "Setelah pelajar menerima tawaran DSA, mereka komited kepada sekolah dan laluan CCA itu dan tidak boleh mengambil bahagian dalam latihan penempatan S1 untuk sekolah lain.",
      "Sebelum mengesahkan sebarang tawaran DSA, pertimbangkan risiko dalam kedua-dua arah. Jika skor PSLE anak anda lebih rendah daripada kumpulan penempatan minimum sekolah, tawaran bersyarat boleh ditarik balik — dan Latihan Penempatan S1 tidak lagi tersedia kerana mereka telah keluar daripadanya semasa pengesahan. Sama juga, jika anak anda jauh mengatasi unjuran PSLE mereka — mendapat skor yang cukup untuk memenuhi syarat sekolah tahap lebih tinggi melalui penempatan biasa — komitmen DSA kekal mengikat. Tiada peruntukan untuk berpindah ke sekolah yang keputusan PSLE sebenar anak anda akan melayakkan mereka. Menilai julat PSLE realistik anak anda dalam kedua-dua arah — bukan hanya anggaran tengah — sebelum mengesahkan adalah salah satu keputusan paling penting dalam proses DSA.",
      "Untuk kitaran 2026, tetingkap permohonan DSA berjalan dari 6 Mei hingga 2 Jun 2026. Rancang penyelidikan dan lawatan rumah terbuka sebelum portal dibuka.",
    ],
    callouts: [
      {
        type: "warning",
        heading: "Sebelum mengesahkan: fikirkan kedua-dua arah",
        body: "Jika PSLE tidak mencapai kumpulan penempatan minimum sekolah, tawaran bersyarat boleh ditarik balik — dan Latihan Penempatan S1 ditutup, kerana anda keluar daripadanya semasa pengesahan. Jika PSLE jauh melebihi unjuran, komitmen DSA masih berkuat kuasa — tiada mekanisme untuk berpindah ke sekolah tahap lebih tinggi yang keputusan sebenar anak anda akan melayakkan mereka.",
      },
    ],
  },
  {
    id: "section-2",
    title: "Peraturan Paling Penting — Selektiviti Sekolah vs. Bakat Diperlukan",
    paragraphs: [
      "Terdapat hubungan songsang antara betapa selektifnya sekolah dari segi akademik (dicerminkan oleh COP) dan sejauh mana bar bakat DSA-nya boleh diakses untuk pemohon tertentu—tetapi sekolah akademik teratas tidak pernah 'mudah' dalam bakat.",
      "Sekolah yang paling selektif dari segi akademik (seperti Raffles Institution, Hwa Chong Institution, dan Nanyang Girls' High School) juga paling selektif dalam DSA. Mereka merekrut bakat bertaraf nasional dan mengisi kekosongan terhad dengan cepat.",
      "Sekolah dengan COP akademik yang kurang agresif sering masih menjalankan program DSA yang serius, tetapi mungkin mempunyai tempat DSA yang tidak diisi dalam CCA tertentu. Apabila atlet dan artis peringkat nasional telah komited ke sekolah teratas, sekolah pertengahan mungkin menerima profil yang kukuh—tetapi tidak mendominasi di peringkat nasional—dalam sukan atau bentuk seni yang sama.",
      "Fikirkan ia sebagai pasaran bakat yang bergerak ke bawah tangga: pemain elit berkumpul di sekolah yang paling selektif dahulu; sekolah yang lebih rendah dalam tangga akademik mungkin masih mahukan bakat berkualiti, tetapi bar mutlak untuk pencapaian 'menonjol' boleh lebih rendah apabila kekosongan masih ada.",
      "Ambil contoh seorang perenang yang berlatih di kelab sejak Darjah 2, mewakili sekolah dalam pertandingan NSG, dan mencapai kedudukan kumpulan umur peringkat nasional. Di sekolah yang paling selektif dari segi akademik, profil ini membuahkan tawaran yang disahkan — tetapi perenang yang sama tidak berjaya di sekolah terkenal lain yang telah mengisi kuota perenangannya dengan pemegang rekod nasional pada tahun yang sama. Piawaian sekolah tidak diturunkan; tempat dalam bidang bakat tersebut hanya telah habis.",
      "Corak yang didokumentasikan merentas pelbagai tahun: pelajar yang mewakili Singapura di peringkat serantau atau antarabangsa dalam sukan mereka menerima tawaran yang disahkan daripada beberapa sekolah terkemuka dalam kitaran permohonan yang sama sambil ditolak oleh sekolah lain pada tahap yang sama — bukan kerana jurang bakat, tetapi kerana kekosongan tahunan di setiap sekolah adalah terhad. Resume bertaraf dunia adalah kelayakan yang kukuh — ia bukan kunci yang membuka setiap pintu pada tahun yang sama.",
    ],
    callouts: [
      {
        type: "insight",
        heading: "Gunakan keputusan NSG sebagai isyarat awam percuma",
        body: "Sebelum memohon, semak keputusan National School Games sekolah dalam sukan khusus anak anda. Sekolah yang mencapai NSG nasional merekrut bakat bertaraf nasional. Sekolah yang kompetitif di peringkat zon masih boleh menerima profil yang kukuh tetapi bukan bertaraf nasional — terutamanya selepas slot terkemuka dipenuhi. Padankan tahap bakat dengan tahap sekolah, bukan sekadar nama sekolah.",
      },
    ],
  },
  {
    id: "section-3",
    title: "Sukan dan Seni — Bagaimana Sekolah Benar-benar Menilai Bakat",
    paragraphs: [
      "Latihan luar jauh lebih penting daripada CCA sekolah sahaja. Pelajar yang berlatih tiga kali atau lebih seminggu di kelab atau akademi dinilai dalam kumpulan yang berbeza daripada mereka yang hanya berlatih semasa sesi CCA sekolah.",
      "Pencapaian individu dan pasukan adalah tidak setara. Menang sebagai individu secara langsung mencerminkan kemahiran peribadi. Pingat pasukan mungkin mencerminkan sumbangan anak anda—atau peranan sokongan. Pewawancara dan jurulatih biasanya menyiasat kedudukan tertentu, minit bermain, atau bahagian solo.",
      "Sukan niche mempunyai kumpulan bakat yang lebih kecil. Sofbol ditawarkan di sekitar 14 sekolah rendah di Singapura; bola keranjang di lebih 150. Menjadi '10 teratas nasional' dalam sofbol bermakna bersaing dalam kumpulan yang jauh lebih kecil daripada label yang sama dalam bola keranjang.",
      "Pelajar dengan tahun-tahun latihan luar yang berstruktur biasanya mempunyai gambaran realistik tentang kedudukan pulau-lebar—terutamanya dalam sukan niche dan program seni kompetitif dengan peperiksaan berperingkat atau litar festival.",
      "Jika anak anda hanya bermain secara kasual, tanpa latihan yang didokumentasikan melalui CCA sekolah atau latihan luar, DSA mungkin bukan laluan yang betul untuk aktiviti itu. Sekolah menilai pengalaman yang berterusan dan berstruktur—bukan semangat sahaja.",
    ],
    callouts: [
      {
        type: "insight",
        heading: "Kesunyian biasanya adalah notis penolakan",
        body: "Kebanyakan sekolah tidak menghantar pemberitahuan kepada pemohon yang tidak berjaya. Jika dua minggu berlalu tanpa sebarang hubungan selepas musim keputusan bermula, anggap itu sebagai jawapan anda — bukan kelewatan.",
      },
      {
        type: "warning",
        heading: "Sekolah dwi-aliran: sahkan trek mana sebelum menandatangani",
        body: "Sekolah yang menawarkan program IP dan O Level boleh mengemukakan tawaran trek O Level kepada pemohon DSA, walaupun anda menyatakan pilihan untuk IP. Tanya semasa rumah terbuka. Sahkan secara bertulis sebelum menerima sebarang tawaran — anda tidak boleh menukar trek selepas itu.",
      },
    ],
  },
  {
    id: "section-4",
    title: "DSA Kepimpinan — Apa yang Sekolah Benar-benar Mahu",
    paragraphs: [
      "Perbincangan forum di kalangan ibu bapa secara konsisten menyerlahkan corak yang sama: sekolah mahukan kepimpinan berbilang tahun, skala seluruh sekolah—bukan pelantikan ketua kelas satu semester.",
      "Perkembangan yang membawa berat biasanya berjalan: Ketua Kelas → jawatankuasa CCA → prefek sekolah atau ahli majlis pelajar → Ketua Prefek, Timbalan Ketua Prefek, atau peranan eksekutif Majlis Pelajar.",
      "Ketua kelas sahaja jarang memuaskan sekolah Tahap A (paling kompetitif). Program kepimpinan luar (MOE, berafiliasi universiti, atau antarabangsa) boleh mengukuhkan permohonan tetapi tidak boleh menggantikan kepimpinan berasaskan sekolah yang sahih yang disahkan oleh guru.",
      "Terdapat laporan tentang perunding yang mengenakan bayaran besar untuk 'menjamin' hasil DSA kepimpinan. Sekolah mengesahkan kepimpinan melalui temuduga dan rujukan guru; portfolio yang dipalsukan atau dibuat dalam tergesa-gesa sering kelihatan jelas.",
      "Komitmen berbilang tahun menandakan watak dan kebolehpercayaan. Pewawancara mencari konsistensi merentasi P4–P6, bukan lonjakan tajuk dalam Darjah 6 sahaja.",
    ],
  },
  {
    id: "section-5",
    title: "STEM dan DSA Akademik",
    paragraphs: [
      "Kualiti pertandingan jauh lebih penting daripada kuantiti. Satu kelayakan NMOS Special Round biasanya mengatasi tiga pingat emas SASMO di mata sekolah selektif.",
      "Gunakan hierarki kasar ini untuk menilai di mana profil anak anda berada:",
    ],
    orderedList: [
      "Perwakilan Olimpiad Antarabangsa atau setaraf (tahap teratas)",
      "NMOS Special Round / APMOPS high distinction (sangat tinggi)",
      "NMOS Gold / SMOPS Top 10 / AMO band pemain teratas",
      "SASMO Gold (kompetitif tetapi biasa di kalangan pemohon sekolah teratas)",
      "SASMO Silver atau Bronze ditambah pelbagai pertandingan (asas yang kukuh)",
      "Sijil penyertaan tanpa tempat (umumnya tidak mencukupi untuk sekolah tahap teratas)",
    ],
    bullets: [
      "Konsistensi merentasi dua atau tiga pertandingan yang boleh dipercayai lebih dihargai daripada satu prestasi bertuah.",
      "Projek penyelidikan dan anugerah pameran sains melengkapkan keputusan pertandingan tetapi jarang menggantikannya untuk trek DSA STEM yang paling selektif.",
      "Pemohon serius sering memulakan persediaan berstruktur dari Darjah 4. Kedalaman penglibatan dari masa ke masa—bukan hafalan saat akhir—mentakrifkan portfolio STEM yang kompetitif.",
    ],
  },
  {
    id: "section-6",
    title: "Garis Masa Permohonan DSA (2026)",
    paragraphs: ["Gunakan kalendar ini untuk merancang lawatan sekolah, kemas kini portfolio, dan keputusan keluarga. Tarikh mengikut kitaran MOE 2026 DSA-Sec dan amalan sekolah biasa."],
  },
  {
    id: "section-7",
    title: "Kesilapan Biasa yang Perlu Dielakkan",
    paragraphs: ["Ibu bapa yang pernah melalui DSA sering menyebut perangkap yang sama:"],
    orderedList: [
      "Memohon hanya ke sekolah capaian. Dengan hanya tiga pilihan DSA, sertakan sekurang-kurangnya satu sekolah di mana tahap bakat anak anda benar-benar kompetitif—bukan semua nama aspirasi.",
      "Menganggap bakat peringkat nasional menjamin kemasukan ke Raffles Institution atau sekolah serupa. Kekosongan tahunan adalah terhad dan tidak didedahkan secara umum; malah atlet terbaik ditolak apabila slot penuh.",
      "Mengabaikan komitmen CCA. Pelajar yang diterima melalui DSA dijangka kekal dalam CCA itu sepanjang sekolah menengah. Jika anak anda merancang untuk menukar CCA kemudian, jangan memohon melalui DSA untuk aktiviti itu.",
      "Meremehkan keperluan AL. Walaupun dengan tawaran DSA yang kukuh, pelajar dengan PSLE AL 23 atau lebih tinggi tidak boleh menghadiri sekolah IP atau Express. Tawaran itu tidak mengatasi penempatan aliran.",
      "Melangkau rumah terbuka. Rumah terbuka adalah tempat anda mengetahui sama ada sekolah sedang merekrut secara aktif untuk bidang bakat khusus anda pada tahun itu—hadiri sebelum anda muktamadkan tiga pilihan anda.",
      "Menganggap risiko komitmen hanya mempengaruhi kanak-kanak yang tidak mencapai prestasi yang dijangkakan di PSLE. Kanak-kanak yang jauh mengatasi unjuran mereka sama-sama terikat — walaupun skor PSLE sebenar mereka akan layak mereka untuk sekolah tahap lebih tinggi melalui penempatan biasa. Sebelum mengesahkan, pertimbangkan kedua-dua hujung julat PSLE realistik anak anda.",
      "Memohon ke NYGH untuk DSA Matematik, Sains, atau Gimnastik Artistik untuk kemasukan 2026. NYGH telah menghentikan ketiga-tiga program untuk 2026 tanpa notis awal yang mencukupi. Keluarga yang telah melabur bertahun-tahun membina portfolio untuk laluan khusus ini perlu merancang semula dengan segera.",
      "Tidak mengesahkan sama ada tawaran DSA merangkumi trek IP atau O Level di sekolah dwi-aliran. Sekolah boleh mengemukakan tawaran trek O Level kepada pemohon yang menyatakan pilihan untuk IP, berdasarkan keputusan akademik mereka. Sahkan trek yang tepat sebelum menerima — anda tidak boleh mengubahnya selepas itu.",
    ],
  },
  {
    id: "section-8",
    title: "Senarai Semak Praktikal Sebelum Memohon",
    paragraphs: ["Kerjakan senarai ini dengan anak anda sebelum anda menghantar di portal MOE. Setiap item hendaklah 'ya' yang yakin atau rancangan yang disengajakan untuk melengkapkannya sebelum 2 Jun 2026."],
  },
];

const TIMELINE_MS = [
  { date: "April–Mei 2026", milestone: "Rumah terbuka sekolah — hadiri dan tanya sama ada sekolah sedang merekrut untuk bidang bakat anak anda dalam kitaran ini." },
  { date: "6 Mei 2026", milestone: "Portal permohonan DSA dibuka." },
  { date: "2 Jun 2026", milestone: "Permohonan DSA ditutup — hari terakhir untuk menghantar semua bahan." },
  { date: "Julai–Ogos 2026", milestone: "Ujian, audisi, dan temuduga sekolah." },
  { date: "Akhir Ogos 2026", milestone: "Tawaran DSA dikeluarkan." },
  { date: "September 2026", milestone: "Tarikh akhir untuk menerima tawaran DSA." },
  { date: "November 2026", milestone: "Keputusan PSLE diumumkan — tawaran disahkan jika AL ≤ 22 untuk sekolah IP/Express." },
];

const CHECKLIST_MS = [
  "Menghadiri rumah terbuka sekolah dan bercakap dengan guru atau jurulatih CCA yang berkaitan.",
  "Mengesahkan sekolah sedang merekrut secara aktif untuk bidang bakat khusus anak anda pada tahun 2026.",
  "Anak anda mempunyai pengalaman yang didokumentasikan (rekod CCA, sijil pertandingan, log latihan).",
  "Anda mempunyai unjuran PSLE yang realistik dan ia adalah ≤ 22 jika anda menyasarkan sekolah IP atau Express.",
  "Anda telah memilih tiga sekolah dengan teliti: sekurang-kurangnya satu padanan realistik, bukan semua aspirasi.",
  "Anak anda memahami komitmen CCA — pelajar DSA umumnya tidak boleh beralih daripada laluan CCA itu.",
  "Anda telah mencatat tarikh akhir permohonan 2 Jun 2026 pada kalendar keluarga anda.",
  "Saya telah menyemak keputusan pertandingan NSG sekolah ini dalam sukan atau bidang bakat khusus anak saya untuk memahami tahap pelajar yang biasanya mereka rekrut.",
  "Jika ini adalah sekolah dwi-aliran, saya telah mengesahkan secara bertulis trek akademik (IP atau O Level) yang tawaran DSA merangkumi.",
  "Saya telah memikirkan senario PSLE positif dan negatif — jika anak saya mendapat skor yang jauh lebih baik daripada yang dijangka, saya menerima bahawa komitmen DSA ini kekal mengikat walau apa pun.",
];

// ─────────────────────────────────────────────
// TAMIL (机器翻译占位)
// ─────────────────────────────────────────────
const SECTIONS_TA: DsaExperienceSection[] = [
  {
    id: "section-1",
    title: "DSA என்றால் என்ன, அது உண்மையில் எவ்வாறு செயல்படுகிறது",
    paragraphs: [
      "நேரடி பள்ளி சேர்க்கை (DSA) பிரைமரி 6 மாணவர்களை PSLE முடிவுகள் வெளியிடப்படுவதற்கு முன்பே திறன்—விளையாட்டு, கலை, தலைமைத்துவம், மொழிகள் அல்லது STEM—அடிப்படையில் இடைநிலைப் பள்ளிகளுக்கு விண்ணப்பிக்க அனுமதிக்கிறது. இது தேசிய இடைநிலை 1 நியமன பயிற்சியிலிருந்து தனி பாதையாகும்.",
      "ஒவ்வொரு மாணவரும் MOE DSA-Sec போர்டல் மூலம் மூன்று பள்ளி தேர்வுகள் வரை சமர்ப்பிக்கலாம். பள்ளிகள் தங்கள் சொந்த தேர்வு பயிற்சிகளை நடத்துகின்றன (சோதனைகள், ஆடிஷன்கள், நேர்காணல்கள், போர்ட்ஃபோலியோ மதிப்பாய்வுகள்) மற்றும் நிபந்தனை சலுகைகளை வழங்கலாம்.",
      "DSA உறுதிப்படுத்தப்பட்ட சலுகை, மாணவர் பள்ளியின் குறைந்தபட்ச நியமன குழுவை பூர்த்தி செய்தால் மட்டுமே அந்த பள்ளியில் இடத்தை உத்தரவாதம் செய்கிறது. IP மற்றும் Express பள்ளிகளுக்கு, இது பொதுவாக PSLE AL 22 அல்லது அதிகம் (AL ≤ 22) என்பதை அர்த்தப்படுத்துகிறது.",
      "உங்கள் குழந்தையின் PSLE AL 23 அல்லது அதிகமாக இருந்தால், DSA சலுகையுடன் கூட IP அல்லது Express ஸ்ட்ரீம்களில் சேர முடியாது. ஸ்ட்ரீம் நியமனம் PSLE மதிப்பெண்ணால் தீர்மானிக்கப்படுகிறது.",
      "ஒரு மாணவர் DSA சலுகையை ஏற்றுக்கொண்டதும், அவர்கள் அந்த பள்ளி மற்றும் CCA பாதையில் ஈடுபட்டுள்ளனர், மற்ற பள்ளிகளுக்கான S1 நியமன பயிற்சியில் பங்கேற்க முடியாது.",
      "எந்த DSA சலுகையையும் உறுதிப்படுத்துவதற்கு முன், இரண்டு திசைகளிலும் இடர்களை கவனியுங்கள். உங்கள் குழந்தையின் PSLE மதிப்பெண் பள்ளியின் குறைந்தபட்ச நியமன குழுவை பூர்த்தி செய்யவில்லை என்றால், நிபந்தனை சலுகை திரும்பப் பெறப்படலாம் — உறுதிப்படுத்தும் நேரத்தில் அவர்கள் S1 நியமன பயிற்சியிலிருந்து விலகிவிட்டதால். அதேபோல், உங்கள் குழந்தை PSLE ஊகிப்புகளை கணிசமாக மீறினால் — சாதாரண நியமனம் மூலம் உயர் தர பள்ளிக்கு தகுதி பெறும் மதிப்பெண் பெற்றால் — DSA அர்ப்பணிப்பு கட்டுப்படுத்தும் தன்மை கொண்டிருக்கும். PSLE முடிவுகள் தகுதி பெற்ற பள்ளிக்கு மாறுவதற்கு எந்த ஏற்பாடும் இல்லை. உறுதிப்படுத்துவதற்கு முன் இரண்டு திசைகளிலும் உங்கள் குழந்தையின் யதார்த்தமான PSLE வரம்பை மதிப்பீடு செய்வது DSA செயல்பாட்டின் மிக முக்கியமான முடிவுகளில் ஒன்றாகும்.",
      "2026 சுழற்சிக்கு, DSA விண்ணப்ப சாளரம் 2026 மே 6 முதல் ஜூன் 2 வரை இயங்குகிறது. போர்டல் திறப்பதற்கு முன்பே ஆராய்ச்சி மற்றும் திறந்த நாள் வருகைகளை திட்டமிடுங்கள்.",
    ],
    callouts: [
      {
        type: "warning",
        heading: "உறுதிப்படுத்துவதற்கு முன்: இரண்டு திசைகளிலும் சிந்தியுங்கள்",
        body: "PSLE பள்ளியின் குறைந்தபட்ச நியமன குழுவை பூர்த்தி செய்யவில்லை என்றால், நிபந்தனை சலுகை திரும்பப் பெறப்படலாம் — உறுதிப்படுத்தும்போது S1 நியமன பயிற்சியிலிருந்து விலகிவிட்டதால் அது மூடப்பட்டுவிட்டது. PSLE ஊகிப்புகளை கணிசமாக மீறினால், DSA அர்ப்பணிப்பு கட்டுப்படுத்தும் — குழந்தையின் உண்மையான முடிவுகள் எட்டியிருக்கக்கூடிய உயர் தர பள்ளிக்கு மாற எந்த வழிமுறையும் இல்லை.",
      },
    ],
  },
  {
    id: "section-2",
    title: "மிக முக்கியமான விதி — பள்ளி தேர்வு vs. தேவையான திறன்",
    paragraphs: [
      "ஒரு பள்ளி கல்வியில் எவ்வளவு தேர்ந்தெடுக்கப்படுகிறது (COP-ல் பிரதிபலிக்கிறது) மற்றும் ஒரு விண்ணப்பதாரருக்கு DSA திறன் தடை எவ்வளவு அணுகக்கூடியதாக தோன்றலாம் என்பதற்கும் இடையே ஒரு தலைகீழ் உறவு உள்ளது—ஆனால் சிறந்த கல்வி பள்ளிகள் திறனில் ஒருபோதும் 'எளிதாக' இல்லை.",
      "கல்வியில் மிகவும் தேர்ந்தெடுக்கப்பட்ட பள்ளிகள் (எடுத்துக்காட்டாக Raffles Institution, Hwa Chong Institution, மற்றும் Nanyang Girls' High School) DSA-விலும் மிகவும் தேர்ந்தெடுக்கப்பட்டவை. அவை தேசிய அளவிலான திறன்களை ஆட்சேர்ப்பு செய்கின்றன மற்றும் வரையறுக்கப்பட்ட காலியிடங்களை விரைவாக நிரப்புகின்றன.",
      "குறைவான கல்வி COP கொண்ட பள்ளிகள் பெரும்பாலும் தீவிர DSA திட்டங்களை நடத்துகின்றன, ஆனால் சில CCA-களில் நிரப்பப்படாத DSA இடங்கள் இருக்கலாம். தேசிய அளவிலான விளையாட்டு வீரர்கள் மற்றும் கலைஞர்கள் சிறந்த பள்ளிகளில் சேர்ந்த பிறகு, நடு அளவு பள்ளிகள் அதே விளையாட்டு அல்லது கலையில் வலுவான ஆனால் தேசிய அளவில் ஆதிக்கம் செலுத்தாத சுயவிவரங்களை ஏற்கலாம்.",
      "இதை படிகளில் கீழே நகரும் திறன் சந்தையாக நினைத்துக்கொள்ளுங்கள்: உயரடுக்கு செயல்திறன் வீரர்கள் முதலில் மிகவும் தேர்ந்தெடுக்கப்பட்ட பள்ளிகளில் கூட்டமாக இருக்கிறார்கள்; கல்வி நிலையில் குறைவான பள்ளிகள் இன்னும் தரமான திறனை விரும்பலாம், ஆனால் காலியிடங்கள் இருக்கும்போது 'தனித்து நிற்கும்' சாதனைக்கான முழுமையான தடை குறைவாக இருக்கலாம்.",
      "ஒரு நீச்சல் வீரரை உதாரணமாக எடுத்துக்கொள்ளுங்கள், அவர் 2ஆம் வகுப்பிலிருந்து ஒரு கிளப்பில் பயிற்சி பெற்று, NSG போட்டிகளில் பள்ளியை பிரதிநிதித்துவப்படுத்தி, தேசிய வயது குழு தரவரிசை பெற்றார். மிகவும் தேர்ந்தெடுக்கப்பட்ட பள்ளிகளில், இந்த சுயவிவரம் உறுதிப்படுத்தப்பட்ட சலுகைகளை பெற்றது — ஆனால் அதே நீச்சல் வீரர் அந்த ஆண்டு தேசிய பதிவுகள் வைத்திருப்பவர்களால் நீச்சல் இடங்களை நிரப்பிய மற்றொரு புகழ்பெற்ற பள்ளியில் வெற்றி பெறவில்லை. பள்ளியின் தரங்கள் குறையவில்லை; அந்த திறன் பகுதியில் கிடைக்கக்கூடிய இடங்கள் முடிந்துவிட்டன.",
      "பல ஆண்டுகளாக ஆவணப்படுத்தப்பட்ட ஒரு வடிவம்: தங்கள் விளையாட்டில் சிங்கப்பூரை பிராந்திய அல்லது சர்வதேச அளவில் பிரதிநிதித்துவப்படுத்தியவர்கள் ஒரே விண்ணப்ப சுழற்சியில் சில சிறந்த பள்ளிகளில் உறுதிப்படுத்தப்பட்ட சலுகைகளைப் பெற்றும், அதே தரத்திலுள்ள மற்ற பள்ளிகளால் நிராகரிக்கப்பட்டும் உள்ளனர் — திறன் வேறுபாடு காரணமாக அல்ல, ஒவ்வொரு பள்ளியிலும் ஆண்டு வாரியான காலியிடங்கள் குறைவாக இருப்பதால். உலக தரம் வாய்ந்த சுயவிவரம் ஒரு வலுவான தகுதி — ஒரே ஆண்டில் ஒவ்வொரு கதவையும் திறக்கும் சாவியல்ல.",
    ],
    callouts: [
      {
        type: "insight",
        heading: "NSG முடிவுகளை இலவச பொது தகவலாக பயன்படுத்துங்கள்",
        body: "விண்ணப்பிப்பதற்கு முன், உங்கள் குழந்தையின் குறிப்பிட்ட விளையாட்டில் பள்ளியின் National School Games முடிவுகளை சரிபார்க்கவும். NSG தேசிய போட்டிகளை அடையும் பள்ளிகள் தேசிய அளவிலான திறன்களை ஆட்சேர்ப்பு செய்கின்றன. மண்டல அளவில் போட்டித்தன்மை வாய்ந்த பள்ளிகள் இன்னும் வலுவான-ஆனால்-தேசிய அளவிலல்லாத சுயவிவரங்களை ஏற்கலாம். பள்ளி பெயரை மட்டும் பார்க்காமல், திறன் நிலையை பள்ளி தரத்துடன் பொருத்துங்கள்.",
      },
    ],
  },
  {
    id: "section-3",
    title: "விளையாட்டு மற்றும் கலை — பள்ளிகள் உண்மையில் திறனை எவ்வாறு மதிப்பிடுகின்றன",
    paragraphs: [
      "வெளி பயிற்சி பள்ளி CCA-வை விட மிகவும் முக்கியமானது. வாரத்தில் மூன்று அல்லது அதிக முறை கிளப் அல்லது அகாடமியில் பயிற்சி செய்யும் மாணவர்கள் வெவ்வேறு குழுவில் மதிப்பிடப்படுகிறார்கள்.",
      "தனிப்பட்ட மற்றும் குழு சாதனைகள் சமச்சீரானவை அல்ல. ஒரு தனிநபராக வெற்றி பெறுவது நேரடியாக தனிப்பட்ட திறனை பிரதிபலிக்கிறது. குழு பதக்கங்கள் உங்கள் குழந்தையின் பங்களிப்பை பிரதிபலிக்கலாம்—அல்லது ஆதரவு பாத்திரத்தை.",
      "நிச்சி விளையாட்டுகளில் சிறிய திறன் குளங்கள் உள்ளன. சாஃப்ட்பால் சிங்கப்பூரில் சுமார் 14 தொடக்கப் பள்ளிகளில் வழங்கப்படுகிறது; கூடைப்பந்து 150-க்கும் அதிகமான பள்ளிகளில். இரண்டும் முக்கியம், ஆனால் சூழல் முக்கியம்.",
      "ஆண்டுகள் கட்டமைக்கப்பட்ட வெளி பயிற்சியுடன் மாணவர்கள் பொதுவாக தீவு அளவிலான நிலை பற்றிய யதார்த்தமான புரிதல் கொண்டுள்ளனர்.",
      "உங்கள் குழந்தை சாதாரணமாக மட்டுமே விளையாடியிருந்தால், பள்ளி CCA அல்லது வெளி பயிற்சி மூலம் பதிவுசெய்யப்பட்ட பயிற்சி இல்லாமல், DSA அந்த செயல்பாட்டிற்கான சரியான பாதை இல்லை. பள்ளிகள் நீடித்த, கட்டமைக்கப்பட்ட அனுபவத்தை மதிப்பிடுகின்றன—ஆர்வம் மட்டுமல்ல.",
    ],
    callouts: [
      {
        type: "insight",
        heading: "மௌனம் பொதுவாக நிராகரிப்பு அறிவிப்பு",
        body: "பெரும்பாலான பள்ளிகள் வெற்றி பெறாத விண்ணப்பதாரர்களுக்கு அறிவிப்புகள் அனுப்புவதில்லை. முடிவுகள் சீசன் தொடங்கிய பிறகு இரண்டு வாரங்கள் கடந்தும் தொடர்பு இல்லை என்றால், அதை உங்கள் பதிலாக கருதுங்கள் — தாமதமாக அல்ல.",
      },
      {
        type: "warning",
        heading: "இரட்டை நீரோட்ட பள்ளிகள்: கையொப்பமிடுவதற்கு முன் எந்த பாதை என்று உறுதிப்படுத்துங்கள்",
        body: "IP மற்றும் O Level திட்டங்கள் இரண்டையும் வழங்கும் பள்ளிகள் DSA விண்ணப்பதாரர்களுக்கு O Level பாதை சலுகையை வழங்கலாம், நீங்கள் IP-க்கு விருப்பம் தெரிவித்தாலும். திறந்த நாளில் கேளுங்கள். எந்த சலுகையையும் ஏற்றுக்கொள்வதற்கு முன் எழுத்துப்பூர்வமாக உறுதிப்படுத்துங்கள்.",
      },
    ],
  },
  {
    id: "section-4",
    title: "தலைமைத்துவ DSA — பள்ளிகள் உண்மையில் என்ன விரும்புகின்றன",
    paragraphs: [
      "பெற்றோர்களிடையே மன்ற விவாதங்கள் ஒரே வடிவத்தை தொடர்ந்து முன்னிலைப்படுத்துகின்றன: பள்ளிகள் பல வருட, பள்ளி அளவிலான தலைமையை விரும்புகின்றன—ஒரு செமஸ்டர் வகுப்பு மானிட்டர் நியமனம் அல்ல.",
      "எடை தரும் முன்னேற்றம் பொதுவாக இவ்வாறு இயங்குகிறது: வகுப்பு மானிட்டர் → CCA குழு → பள்ளி ப்ரீஃபெக்ட் அல்லது மாணவர் மன்ற உறுப்பினர் → தலைமை ப்ரீஃபெக்ட், துணை தலைமை ப்ரீஃபெக்ட், அல்லது மாணவர் மன்ற நிர்வாக பாத்திரங்கள்.",
      "வகுப்பு மானிட்டர் மட்டும் A அடுக்கு (மிகவும் போட்டி) பள்ளிகளை அரிதாகவே திருப்திப்படுத்துகிறது. வெளி தலைமைத்துவ திட்டங்கள் (MOE, பல்கலைக்கழகம் சார்ந்த, அல்லது சர்வதேச) விண்ணப்பத்தை வலுப்படுத்தலாம் ஆனால் ஆசிரியர்களால் சரிபார்க்கப்பட்ட உண்மையான பள்ளி அடிப்படையிலான தலைமையை மாற்ற முடியாது.",
      "ஆலோசகர்கள் தலைமைத்துவ DSA முடிவுகளை 'உத்தரவாதம்' செய்ய பெரிய கட்டணம் வசூலிப்பதாக அறிக்கைகள் உள்ளன. பள்ளிகள் நேர்காணல்கள் மற்றும் ஆசிரியர் பரிந்துரைகள் மூலம் தலைமையை சரிபார்க்கின்றன.",
      "பல ஆண்டு அர்ப்பணிப்பு குணாதிசயம் மற்றும் நம்பகத்தன்மையை சமிக்ஞை செய்கிறது. நேர்காணலாளர்கள் P4–P6 முழுவதும் நிலைத்தன்மையை தேடுகிறார்கள்.",
    ],
  },
  {
    id: "section-5",
    title: "STEM மற்றும் கல்வி DSA",
    paragraphs: [
      "போட்டியின் தரம் அளவை விட மிகவும் முக்கியமானது. ஒரு NMOS Special Round தகுதி பொதுவாக தேர்ந்தெடுக்கும் பள்ளிகளின் கண்களில் மூன்று SASMO தங்கப்பதக்கங்களை விட அதிகமாக இருக்கும்.",
      "உங்கள் குழந்தையின் சுயவிவரம் எங்கே உள்ளது என்று தீர்மானிக்க இந்த தோராயமான படிநிலையைப் பயன்படுத்துங்கள்:",
    ],
    orderedList: [
      "சர்வதேச ஒலிம்பியாட் பிரதிநிதித்துவம் அல்லது சமகாரம் (உயர்நிலை)",
      "NMOS Special Round / APMOPS high distinction (மிகவும் உயர்ந்தது)",
      "NMOS Gold / SMOPS Top 10 / AMO உயர் செயல்திறன் பட்டைகள்",
      "SASMO Gold (போட்டித்தன்மை வாய்ந்தது ஆனால் சிறந்த பள்ளி விண்ணப்பதாரர்களிடையே பொதுவானது)",
      "SASMO Silver அல்லது Bronze மற்றும் பல போட்டிகள் (உறுதியான அடிப்படை)",
      "இடமின்றி பங்கேற்பு சான்றிதழ்கள் (பொதுவாக சிறந்த பள்ளிகளுக்கு போதுமானதில்லை)",
    ],
    bullets: [
      "இரண்டு அல்லது மூன்று நம்பகமான போட்டிகளில் நிலைத்தன்மை, ஒரு அதிர்ஷ்டமான செயல்திறனை விட அதிகமாக மதிப்பிடப்படுகிறது.",
      "ஆராய்ச்சி திட்டங்கள் மற்றும் அறிவியல் கண்காட்சி விருதுகள் போட்டி முடிவுகளை நிரப்புகின்றன ஆனால் மிகவும் தேர்ந்தெடுக்கப்பட்ட STEM DSA பாதைகளுக்கு அவற்றை அரிதாகவே மாற்றுகின்றன.",
      "தீவிர விண்ணப்பதாரர்கள் பெரும்பாலும் பிரைமரி 4 முதல் கட்டமைக்கப்பட்ட தயாரிப்பை தொடங்குகிறார்கள். காலப்போக்கில் ஆழமான ஈடுபாடு—கடைசி நிமிட திணிப்பு அல்ல—போட்டித்தன்மை வாய்ந்த STEM போர்ட்ஃபோலியோக்களை வரையறுக்கிறது.",
    ],
  },
  {
    id: "section-6",
    title: "DSA விண்ணப்ப கால அட்டவணை (2026)",
    paragraphs: ["பள்ளி வருகைகள், போர்ட்ஃபோலியோ புதுப்பிப்புகள் மற்றும் குடும்ப முடிவுகளை திட்டமிட இந்த நாட்காட்டியைப் பயன்படுத்துங்கள்."],
  },
  {
    id: "section-7",
    title: "தவிர்க்க வேண்டிய பொதுவான தவறுகள்",
    paragraphs: ["DSA-வை கடந்த பெற்றோர்கள் அடிக்கடி அதே குறைகளை மேற்கோள் காட்டுகிறார்கள்:"],
    orderedList: [
      "மூன்று DSA தேர்வுகள் மட்டுமே உள்ளன, உங்கள் குழந்தையின் திறன் அளவு உண்மையிலேயே போட்டித்தன்மை வாய்ந்த குறைந்தது ஒரு பள்ளியை சேர்க்கவும்.",
      "தேசிய அளவிலான திறன் Raffles Institution அல்லது இதே போன்ற பள்ளிகளில் சேர்க்கையை உத்தரவாதம் செய்கிறது என்று கருதுவது. வருடாந்திர காலியிடங்கள் குறைவானவை மற்றும் வெளிப்படையாக வெளிப்படுத்தப்படுவதில்லை.",
      "CCA அர்ப்பணிப்பை புறக்கணித்தல். DSA மூலம் சேர்க்கப்பட்ட மாணவர்கள் இடைநிலைப் பள்ளி முழுவதும் அந்த CCA-வில் இருக்க எதிர்பார்க்கப்படுகிறார்கள்.",
      "AL தேவையை குறைத்து மதிப்பிடுதல். வலுவான DSA சலுகையுடன் கூட, PSLE AL 23 அல்லது அதிகமான மாணவர்கள் IP அல்லது Express பள்ளிகளில் கலந்துகொள்ள முடியாது.",
      "திறந்த நாள்களை தவிர்த்தல். திறந்த நாள்கள் பள்ளி அந்த ஆண்டு உங்கள் குறிப்பிட்ட திறன் பகுதிக்கு செயலில் ஆட்சேர்ப்பு செய்கிறதா என்று நீங்கள் அறியும் இடம்.",
      "PSLE-ல் குறைந்த செயல்திறன் கொண்ட குழந்தைகளை மட்டுமே அர்ப்பணிப்பு இடர் பாதிக்கும் என்று கருதுவது. ஊகிப்பை கடந்து சாதிக்கும் குழந்தை சம அளவில் கட்டுப்படுகிறார் — அவர்களின் உண்மையான PSLE மதிப்பெண் சாதாரண நியமனம் மூலம் உயர் தர பள்ளிக்கு தகுதி பெற்றிருந்தாலும். உறுதிப்படுத்துவதற்கு முன், உங்கள் குழந்தையின் PSLE வரம்பின் இரண்டு முனைகளையும் கருத்தில் கொள்ளுங்கள்.",
      "2026 சேர்க்கைக்கான NYGH கணிதம், அறிவியல் அல்லது கலை ஜிம்னாஸ்டிக்ஸ் DSA-வில் விண்ணப்பிப்பது. NYGH போதுமான முன் அறிவிப்பு இல்லாமல் 2026-க்கான மூன்று திட்டங்களையும் நிறுத்தியது. இந்த குறிப்பிட்ட பாதைகளுக்காக ஆண்டுகளாக முதலீடு செய்த குடும்பங்கள் உடனடியாக திட்டமிட வேண்டும்.",
      "இரட்டை நீரோட்ட பள்ளிகளில் DSA சலுகை IP அல்லது O Level பாதையை உள்ளடக்குகிறதா என்று உறுதிப்படுத்தாமல் இருப்பது. கல்வி முடிவுகளின் அடிப்படையில் IP-ஐ விரும்பினாலும் பள்ளிகள் O Level பாதை சலுகையை வழங்கலாம். ஏற்றுக்கொள்வதற்கு முன் சரியான பாதையை உறுதிப்படுத்துங்கள் — பின்னர் மாற்ற முடியாது.",
    ],
  },
  {
    id: "section-8",
    title: "விண்ணப்பிப்பதற்கு முன் நடைமுறை சரிபார்ப்பு பட்டியல்",
    paragraphs: ["MOE போர்டலில் சமர்ப்பிப்பதற்கு முன் உங்கள் குழந்தையுடன் இந்த பட்டியலை செய்யுங்கள். ஒவ்வொரு உருப்படியும் நம்பிக்கையான 'ஆம்' அல்லது 2026 ஜூன் 2-க்கு முன் அதை முடிக்க வேண்டும்."],
  },
];

const TIMELINE_TA = [
  { date: "ஏப்ரல்–மே 2026", milestone: "பள்ளி திறந்த நாள்கள் — இந்த சுழற்சியில் பள்ளி உங்கள் குழந்தையின் திறன் பகுதிக்கு ஆட்சேர்ப்பு செய்கிறதா என்று கேளுங்கள்." },
  { date: "6 மே 2026", milestone: "DSA விண்ணப்ப போர்டல் திறக்கிறது." },
  { date: "2 ஜூன் 2026", milestone: "DSA விண்ணப்பம் மூடுகிறது — அனைத்து பொருட்களையும் சமர்ப்பிக்க கடைசி நாள்." },
  { date: "ஜூலை–ஆகஸ்ட் 2026", milestone: "பள்ளி சோதனைகள், ஆடிஷன்கள் மற்றும் நேர்காணல்கள்." },
  { date: "ஆகஸ்ட் 2026 இறுதி", milestone: "DSA சலுகைகள் வெளியிடப்படுகின்றன." },
  { date: "செப்டம்பர் 2026", milestone: "DSA சலுகையை ஏற்க காலக்கெடு." },
  { date: "நவம்பர் 2026", milestone: "PSLE முடிவுகள் வெளியிடப்படுகின்றன — IP/Express பள்ளிகளுக்கு AL ≤ 22 என்றால் சலுகை உறுதிப்படுத்தப்படுகிறது." },
];

const CHECKLIST_TA = [
  "பள்ளியின் திறந்த நாளில் கலந்துகொண்டு சம்பந்தப்பட்ட CCA ஆசிரியர் அல்லது பயிற்சியாளருடன் பேசியுள்ளீர்கள்.",
  "பள்ளி 2026-ல் உங்கள் குழந்தையின் குறிப்பிட்ட திறன் பகுதிக்கு செயலில் ஆட்சேர்ப்பு செய்கிறது என்பதை உறுதிப்படுத்தியுள்ளீர்கள்.",
  "உங்கள் குழந்தைக்கு ஆவணப்படுத்தப்பட்ட அனுபவம் உள்ளது (CCA பதிவுகள், போட்டி சான்றிதழ்கள், பயிற்சி பதிவுகள்).",
  "IP அல்லது Express பள்ளிகளை இலக்காகக் கொண்டால் ≤ 22 என யதார்த்தமான PSLE ஊகிப்பு உள்ளது.",
  "மூன்று பள்ளிகளை சிந்தனையுடன் தேர்ந்தெடுத்துள்ளீர்கள்: குறைந்தது ஒரு யதார்த்தமான பொருத்தம்.",
  "உங்கள் குழந்தை CCA அர்ப்பணிப்பை புரிந்துகொள்கிறார் — DSA சேர்க்கைகள் பொதுவாக அந்த CCA பாதையிலிருந்து மாற முடியாது.",
  "2026 ஜூன் 2 விண்ணப்ப காலக்கெடுவை குடும்ப நாட்காட்டியில் குறித்துள்ளீர்கள்.",
  "இந்த பள்ளி பொதுவாக எந்த திறன் நிலை கொண்ட மாணவர்களை ஆட்சேர்ப்பு செய்கிறது என்பதை புரிந்துகொள்ள என் குழந்தையின் குறிப்பிட்ட விளையாட்டு அல்லது திறன் பகுதியில் இந்த பள்ளியின் NSG போட்டி முடிவுகளை சரிபார்த்தேன்.",
  "இது இரட்டை நீரோட்ட பள்ளியாக இருந்தால், DSA சலுகை எந்த கல்வி பாதையை (IP அல்லது O Level) உள்ளடக்குகிறது என்பதை எழுத்துப்பூர்வமாக உறுதிப்படுத்தியுள்ளேன்.",
  "நான் PSLE-ன் சாதகமான மற்றும் எதிர்மறையான சூழ்நிலைகளை சிந்தித்திருக்கிறேன் — என் குழந்தை எதிர்பார்த்ததை விட கணிசமாக அதிக மதிப்பெண் பெற்றால், இந்த DSA அர்ப்பணிப்பு கட்டுப்படுத்தும் தன்மை கொண்டிருக்கும் என்பதை ஏற்கிறேன்.",
];

// ─────────────────────────────────────────────
// EXPORTS — locale-aware helpers
// ─────────────────────────────────────────────
export function getDsaExperienceSections(locale: string): DsaExperienceSection[] {
  if (locale === "zh") return SECTIONS_ZH;
  if (locale === "ms") return SECTIONS_MS;
  if (locale === "ta") return SECTIONS_TA;
  return SECTIONS_EN;
}

export function getDsaExperienceTimeline(locale: string): { date: string; milestone: string }[] {
  if (locale === "zh") return TIMELINE_ZH;
  if (locale === "ms") return TIMELINE_MS;
  if (locale === "ta") return TIMELINE_TA;
  return TIMELINE_EN;
}

export function getDsaExperienceChecklist(locale: string): string[] {
  if (locale === "zh") return CHECKLIST_ZH;
  if (locale === "ms") return CHECKLIST_MS;
  if (locale === "ta") return CHECKLIST_TA;
  return CHECKLIST_EN;
}

export function getDsaExperienceToc(locale: string) {
  const sections = getDsaExperienceSections(locale);
  const labels: Record<string, (i: number) => string> = {
    zh: (i) => `第 ${i + 1} 节`,
    ms: (i) => `Bahagian ${i + 1}`,
    ta: (i) => `பிரிவு ${i + 1}`,
  };
  const getLabel = labels[locale] ?? ((i: number) => `Section ${i + 1}`);
  return sections.map((s, i) => ({
    href: `#${s.id}`,
    label: getLabel(i),
    shortTitle: s.title,
  }));
}

// Legacy exports for backward compat (English only)
export const DSA_EXPERIENCE_SECTIONS = SECTIONS_EN;
export const DSA_EXPERIENCE_TIMELINE = TIMELINE_EN;
export const DSA_EXPERIENCE_CHECKLIST = CHECKLIST_EN;
export const DSA_EXPERIENCE_TOC = getDsaExperienceToc("en");
