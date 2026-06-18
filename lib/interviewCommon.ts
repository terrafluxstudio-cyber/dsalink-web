/**
 * Shared DSA-interview cards used across ALL talents.
 *
 * Two layers (see InterviewFlashcards + InterviewTalentPageBody):
 *   1. SELF_INTRO_CARD + COMMON_QUESTIONS — generic, written/maintained once here.
 *   2. Each talent's own `rich.interviewQuestions` — talent-specific only.
 *
 * A talent's full deck = [self-intro] + COMMON_QUESTIONS + talent-specific.
 * Cards carry `pitfall` (雷区). LocaleStrFlex = EN required, ZH/MS/TA optional
 * (cards fall back to EN per pickFlex).
 */
import type { InterviewQuestion } from "@/lib/talentPages";

export type DeckCardKind = "self-intro" | "common" | "talent";

export type DeckCard = InterviewQuestion & { kind: DeckCardKind };

/** The opening every DSA interview shares: introduce yourself. */
export const SELF_INTRO_CARD: InterviewQuestion = {
  question: {
    en: "Tell us a little about yourself.",
    zh: "先做个自我介绍吧",
  },
  subtext: {
    en: "Almost every DSA interview opens here. The panel is forming a first impression and listening for confidence, structure, and a genuine reason you're applying — not a memorised speech.",
    zh: "几乎每场 DSA 面试都从这里开始。考官在形成第一印象，听的是自信、条理，和一个真实的申请理由——不是背稿子。",
  },
  approach: {
    en: "Keep it to about 30-45 seconds. Use a simple shape: name and school → the talent you're applying for and how long you've done it → one concrete thing you're proud of → why you want this. End on the talent, not on grades.",
    zh: "控制在约 30-45 秒。用简单结构：名字和学校 → 申请的才艺方向、练了多久 → 一件具体的、你引以为傲的事 → 为什么想来。落点放在才艺上，不要落在成绩上。",
  },
  pitfall: {
    en: "Don't recite a CV of every CCA and award — it reads as rehearsed and loses the panel. Don't lead with academic results (this is a talent interview). Don't go over a minute, and don't mumble the opening — the first ten seconds set the tone.",
    zh: "别把所有 CCA 和奖项像简历一样背一遍——显得是背的、考官会走神。别一开口就讲学习成绩（这是才艺面试）。别超过一分钟，开头别含糊——前十秒定基调。",
  },
  template: {
    en: "Hi, I'm [name] from [primary school]. I'm applying for the [talent] talent area — I've trained for about [N] years. The moment I'm most proud of was [one concrete example]. I'd love to keep pushing myself here because [one specific reason about this school].",
    zh: "您好，我是 [名字]，来自 [小学]。我申请的是 [才艺] 方向，已经练了大约 [N] 年。我最自豪的一刻是 [一个具体例子]。我很想在贵校继续突破自己，因为 [一个关于这所学校的具体理由]。",
  },
};

/** Generic questions that recur across talents — model answers work without talent specifics. */
export const COMMON_QUESTIONS: InterviewQuestion[] = [
  {
    question: {
      en: "Why did you choose our school?",
      zh: "为什么选择我们学校",
    },
    subtext: {
      en: "The panel is checking whether the family researched this school specifically, or is applying everywhere. Generic praise fails here.",
      zh: "考官在判断你们是真的研究过这所学校，还是到处海投。空泛的称赞过不了关。",
    },
    approach: {
      en: "Name ONE specific, verifiable thing about this school's program for your talent — a coach, a recent result, a facility, a training pattern — and connect it to what you want. Specific beats flattering.",
      zh: "说出关于这所学校该才艺项目的一件具体、可查证的事——某位教练、近期成绩、某项设施、训练安排——再连到你想要什么。具体胜过恭维。",
    },
    pitfall: {
      en: "Avoid lines any school could fit: \"good reputation,\" \"strong teachers,\" \"close to home.\" Don't invent facts you can't back up. Don't say it's your parents' choice.",
      zh: "避免放到哪所学校都成立的话：「名声好」「师资强」「离家近」。别编你说不清出处的事。别说是父母替你选的。",
    },
    template: {
      en: "Your [talent] program trains DSA candidates with the competition team and finished [specific recent result] — that's the level I want to push toward from Secondary 1.",
      zh: "贵校的 [才艺] 项目让 DSA 学生跟校队一起训练，最近还拿了 [具体成绩]——这正是我从中一就想冲的水平。",
    },
  },
  {
    question: {
      en: "Tell us about a time you faced a setback. What did you do?",
      zh: "讲一次你遇到挫折的经历，你是怎么做的",
    },
    subtext: {
      en: "Panels recruit for resilience and coachability, not a flawless record. They want to see how you respond when things go wrong.",
      zh: "考官看重的是抗挫力和受教能力，不是完美记录。他们想看你在出问题时怎么反应。",
    },
    approach: {
      en: "Pick one real setback. Name what went wrong, what you actually did about it, and what you learned. Spend most of your answer on the response and the lesson, not the failure itself.",
      zh: "选一个真实的挫折。说清楚哪里出了问题、你具体做了什么、学到了什么。大部分篇幅放在「怎么应对」和「学到什么」，不是停在失败本身。",
    },
    pitfall: {
      en: "Don't pick a fake weakness (\"I work too hard\"). Don't blame teammates, coaches, or bad luck. Don't tell a story with no real low point — the panel can tell.",
      zh: "别讲假缺点（「我太拼了」）。别怪队友、教练或运气。别讲一个没有真正低谷的故事——考官听得出来。",
    },
    template: {
      en: "When I lost [specific event/test], I was discouraged. Instead of quitting, I [specific action — extra practice, asked for feedback, changed approach]. I didn't win the next time either, but I [concrete improvement]. It taught me that how I respond matters more than the result.",
      zh: "当我在 [具体比赛/测试] 失利时，我很受打击。但我没有放弃，而是 [具体行动——加练、主动找反馈、换方法]。下一次我也没赢，但我 [具体进步]。这让我明白，怎么应对比结果更重要。",
    },
  },
  {
    question: {
      en: "How do you balance your talent with your schoolwork?",
      zh: "你怎么平衡才艺和学业",
    },
    subtext: {
      en: "DSA students carry a heavy training load on top of academics. The panel wants evidence you can actually manage both.",
      zh: "DSA 学生要在学业之外扛很重的训练量。考官想看到你确实能两边都管得住。",
    },
    approach: {
      en: "Describe your actual routine honestly — when you train, when you study, how you handle tired days or competition weeks. Concrete beats reassuring.",
      zh: "如实描述你真实的作息——什么时候训练、什么时候学习、累的时候或比赛周怎么办。具体胜过嘴上保证。",
    },
    pitfall: {
      en: "Don't just say \"I manage my time well\" with nothing behind it. Don't claim both are always easy — that reads as unaware. Don't imply you'd drop academics for the talent.",
      zh: "别只说「我时间管理得好」却没有支撑。别说两边都一直很轻松——显得没自知之明。别暗示你会为了才艺放掉学业。",
    },
    template: {
      en: "I train [days/times], so I do homework right after school before training and finish off after dinner. On competition weeks I plan ahead and get schoolwork done early. It's tight, but managing my time is part of being [a player/musician/etc.].",
      zh: "我 [哪几天/什么时间] 训练，所以放学后先做作业再去训练，晚饭后收尾。比赛周我会提前规划、把功课早点做完。是挺紧的，但管理时间本身就是当 [运动员／演奏者……] 的一部分。",
    },
  },
  {
    question: {
      en: "If another school also offers you a place, how would you choose?",
      zh: "如果另一所学校也录取你，你会怎么选",
    },
    subtext: {
      en: "This tests honesty under pressure — and whether you'd actually come. Panels have heard every rehearsed answer.",
      zh: "这考的是压力下的诚实——以及你到底会不会来。背好的答案考官都听过。",
    },
    approach: {
      en: "Don't dodge. Pick this school and give one specific, honest reason. Confidence and a real reason beat a diplomatic non-answer.",
      zh: "别回避。选这所学校，给一个具体、真实的理由。有底气、有理由，胜过外交辞令式的不表态。",
    },
    pitfall: {
      en: "Don't say \"I'd choose whichever is better\" — it sounds like you haven't committed. Don't badmouth the other school. Don't over-promise (\"I'd definitely 100% come\") without a reason behind it.",
      zh: "别说「哪所更好我选哪所」——听起来你没拿定主意。别贬低另一所学校。别空许诺（「我百分百一定来」）却给不出理由。",
    },
    template: {
      en: "Honestly, your school — [one specific reason about its program]. If the other school called first, I'd still wait for your reply.",
      zh: "说实话，我会选贵校——[关于贵校项目的一个具体理由]。就算另一所先联系我，我还是会等贵校的消息。",
    },
  },
  {
    question: {
      en: "What do you most want to improve, and how are you working on it?",
      zh: "你最想提升的是什么，你正在怎么努力",
    },
    subtext: {
      en: "Panels recruit students who know their own gaps and are already working on them — that's coachability, the trait they value most.",
      zh: "考官想招那种清楚自己短板、并且已经在补的学生——这就是受教能力，他们最看重的特质。",
    },
    approach: {
      en: "Name one genuine, specific weakness in your talent and the concrete thing you're doing about it right now. Self-awareness plus action is the whole point.",
      zh: "说出你才艺上一个真实、具体的短板，以及你现在正在做的具体努力。有自知 + 有行动，就是这道题的全部。",
    },
    pitfall: {
      en: "Don't give a humblebrag disguised as a weakness. Don't name something so vague it means nothing (\"get better overall\"). Don't name a gap with no plan attached.",
      zh: "别用「凡尔赛式」的假缺点。别说空到没意义的话（「整体变更好」）。别只点出短板却没有计划。",
    },
    template: {
      en: "My [specific skill] is my weakest area — under pressure it slips. So twice a week I [specific drill/practice] to make it automatic. It's not fixed yet, but it's noticeably better than [a few months ago].",
      zh: "我的 [具体技能] 是最弱的一环——一紧张就掉链子。所以我每周 [具体训练] 两次，把它练成本能。还没完全解决，但比 [几个月前] 明显好了。",
    },
  },
];

/** Assemble a talent's full interview deck. */
export function buildDeck(
  talentQuestions: InterviewQuestion[],
  opts: { includeSelfIntro?: boolean } = {},
): DeckCard[] {
  const { includeSelfIntro = true } = opts;
  const deck: DeckCard[] = [];
  if (includeSelfIntro) deck.push({ ...SELF_INTRO_CARD, kind: "self-intro" });
  for (const q of COMMON_QUESTIONS) deck.push({ ...q, kind: "common" });
  for (const q of talentQuestions) deck.push({ ...q, kind: "talent" });
  return deck;
}
