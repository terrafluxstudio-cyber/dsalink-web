# Cursor Task: DSA Interview — Common Mistakes + Expanded Interview Questions

## Overview

Add two new content sections to `components/DsaInterviewPageBody.tsx`:

1. **Common Mistakes** — 10 real mistakes that sink DSA applications at the trial/interview phase (insert after Self-Introduction section, before Offer Decision Coming Soon)
2. **Expanded Interview Questions** — replace the existing 6-question list with a richer, categorised question bank (25+ questions with "why they ask" context)

---

## Files to modify

1. `locales/en.json`
2. `locales/zh.json`
3. `components/DsaInterviewPageBody.tsx`

---

## Step 1: Add to `locales/en.json`

Add after `dsaInterviewOfferComingSoonBody`:

```json
  "dsaInterviewMistakesHeading": "10 Mistakes That Sink DSA Applications",
  "dsaInterviewMistakesLead": "These are the failure modes that come up repeatedly across forum accounts, school feedback, and experienced coaches. Most are avoidable.",
  "dsaInterviewMistake01Title": "Scripted, memorised answers",
  "dsaInterviewMistake01Body": "The single most cited reason candidates fail interviews. Interviewers deliberately ask unexpected questions to break rehearsed responses. A child who speaks fluently but freezes when the question deviates gives themselves away instantly.",
  "dsaInterviewMistake02Title": "Applying for a sport without competitive experience",
  "dsaInterviewMistake02Body": "Schools want athletes who can represent them at National School Games. Coaches use trials to weed out recreational players. Switching sports in P6 specifically for DSA purposes is a red flag. Without zonal-level competition history, sports DSA is very difficult.",
  "dsaInterviewMistake03Title": "Portfolio that doesn't hold up under live assessment",
  "dsaInterviewMistake03Body": "For visual arts and music: if the on-the-spot drawing test or sight-reading reveals skills far below what the portfolio shows, it signals the portfolio was guided or produced by a teacher. Schools are trained to detect this. From 2025, SOTA formally requires that submitted works must not be guided or edited by teachers or mentors.",
  "dsaInterviewMistake04Title": "Can't explain why this specific school",
  "dsaInterviewMistake04Body": "'Why our school?' is universal. 'It's a good school' fails every time. Interviewers probe with follow-ups. Children who cannot name a specific programme, competition, teacher's approach, or thing they saw at open house signal that they're applying for the name, not the fit.",
  "dsaInterviewMistake05Title": "Can't talk about failure or setbacks",
  "dsaInterviewMistake05Body": "DSA interviews specifically probe for growth mindset. A child who can only list achievements and cannot articulate a real setback — and what they learned — reads as shallow. Interviewers ask this question on purpose.",
  "dsaInterviewMistake06Title": "Over-coached by an anxious parent",
  "dsaInterviewMistake06Body": "Some schools observe parent behaviour at the venue. A child who looks to the door or mouths answers after the parent signals raises flags. Visible parental anxiety also transfers directly to children — coaches see this immediately during trials.",
  "dsaInterviewMistake07Title": "Ignoring the academic minimum benchmark",
  "dsaInterviewMistake07Body": "DSA is not a bypass of academics. Most schools set a minimum PSLE threshold — offers can be and are withdrawn if results fall below it. Families who focus entirely on the talent area and ignore academic preparation are taking an unnecessary risk.",
  "dsaInterviewMistake08Title": "Treating DSA as a backdoor to a prestigious school",
  "dsaInterviewMistake08Body": "Schools can detect when a child's interest is genuine versus when a parent has retrofitted the child's profile around a target school name. Interviews are specifically designed to surface this. Misalignment between talent and school fit consistently fails.",
  "dsaInterviewMistake09Title": "Missing the shortlist notification email",
  "dsaInterviewMistake09Body": "Schools notify by email. Emails land in spam, go to old addresses, or get missed during busy periods. Check the email address submitted in the application. Monitor actively from 1 July onwards. A missed notification effectively ends the application.",
  "dsaInterviewMistake10Title": "Not managing clashing trial/interview dates",
  "dsaInterviewMistake10Body": "Students applying to multiple schools may receive trials or interviews on the same date. Schools do not coordinate. Act quickly when notifications arrive — contact schools immediately to request rescheduling. Not all schools will accommodate, and waiting too long removes the option.",

  "dsaInterviewQBankHeading": "DSA Interview Question Bank",
  "dsaInterviewQBankLead": "These questions appear repeatedly across school types and talent domains. Knowing the category behind each question helps your child answer authentically — not just practise the question itself.",
  "dsaInterviewQBankCat1": "About yourself",
  "dsaInterviewQBankCat2": "Why this school",
  "dsaInterviewQBankCat3": "Your talent and training",
  "dsaInterviewQBankCat4": "Character and growth",
  "dsaInterviewQBankCat5": "Thinking on your feet",
  "dsaInterviewQBankNote": "Interviewers follow up on answers with unexpected probes. The goal is not to memorise these — it is to have thought through the real answers so your child can speak naturally from experience.",
  "dsaInterviewQBankSelf1Q": "Tell me about yourself.",
  "dsaInterviewQBankSelf1Why": "Opening question, every interview. Tests whether the child can give a structured, confident, concise introduction. Should not exceed 90 seconds.",
  "dsaInterviewQBankSelf2Q": "Describe yourself in three words. Now tell me why.",
  "dsaInterviewQBankSelf2Why": "Tests self-awareness. The 'why' is where the real answer is — children who chose impressive-sounding words without genuine examples fall apart here.",
  "dsaInterviewQBankSelf3Q": "How would your friends describe you — and do you agree?",
  "dsaInterviewQBankSelf3Why": "Social perception and self-awareness. Look for consistency and genuine reflection.",
  "dsaInterviewQBankWhy1Q": "Why do you want to join this school, specifically?",
  "dsaInterviewQBankWhy1Why": "Most important question. Generic answers ('good reputation', 'good results') fail. Must name something specific.",
  "dsaInterviewQBankWhy2Q": "What do you know about our [CCA / programme]?",
  "dsaInterviewQBankWhy2Why": "Tests whether the child did real research. Knowing competition history, teacher names, or recent achievements stands out.",
  "dsaInterviewQBankWhy3Q": "Is this your first choice? What other schools have you applied to?",
  "dsaInterviewQBankWhy3Why": "Asked at competitive schools. Honest answers are expected — saying 'yes' when it isn't true is often detectable.",
  "dsaInterviewQBankWhy4Q": "If we and [School B] both offered you — which would you choose and why?",
  "dsaInterviewQBankWhy4Why": "Probes commitment and genuine preference. Specific, school-based reasoning is expected.",
  "dsaInterviewQBankWhy5Q": "What would you bring to our school that we don't already have?",
  "dsaInterviewQBankWhy5Why": "Contribution-focused. Panels want future contributors, not only high achievers.",
  "dsaInterviewQBankTalent1Q": "What is your proudest achievement in [talent area] — and what made it hard?",
  "dsaInterviewQBankTalent1Why": "Tests genuine pride. Follow-ups probe specifics. 'I won a competition' without what made it hard reads as shallow.",
  "dsaInterviewQBankTalent2Q": "Walk me through a typical week of training.",
  "dsaInterviewQBankTalent2Why": "Reality check. Children who cannot describe specifics reveal the gap between their profile and their actual commitment.",
  "dsaInterviewQBankTalent3Q": "What aspect of [talent] do you find most difficult? What are you doing about it?",
  "dsaInterviewQBankTalent3Why": "Growth mindset and self-awareness. Specific answers about real weaknesses and genuine effort are compelling.",
  "dsaInterviewQBankTalent4Q": "Tell me about a competition or performance that didn't go as planned.",
  "dsaInterviewQBankTalent4Why": "Resilience under pressure. The answer should include what happened, how the child felt, and what they did differently afterward.",
  "dsaInterviewQBankTalent5Q": "Who has been the most important person in developing your talent? Why?",
  "dsaInterviewQBankTalent5Why": "Gratitude and relationships. Also reveals how self-aware the child is about their own development.",
  "dsaInterviewQBankChar1Q": "Describe a time you failed to reach a goal. What did you do after?",
  "dsaInterviewQBankChar1Why": "Standard growth mindset probe. Panels expect a real failure — not a 'humble brag' failure disguised as an achievement.",
  "dsaInterviewQBankChar2Q": "Tell me about a time you disagreed with a coach or teammate. How did you handle it?",
  "dsaInterviewQBankChar2Why": "Conflict resolution and emotional maturity. There is no right answer — what matters is the child's reasoning.",
  "dsaInterviewQBankChar3Q": "Do you get stressed before competitions or performances? How do you handle it?",
  "dsaInterviewQBankChar3Why": "Self-regulation. Real, practical answers (breathing, routine, refocusing on the process) are more credible than 'I don't get stressed.'",
  "dsaInterviewQBankChar4Q": "What would you change about how you have trained so far?",
  "dsaInterviewQBankChar4Why": "Self-reflection. No right answer — but specific, honest answers show maturity.",
  "dsaInterviewQBankChar5Q": "If a teammate is underperforming and pulling the team down, what would you do?",
  "dsaInterviewQBankChar5Why": "Leadership and empathy. Tests whether the child defaults to 'tell the teacher' or can describe a more thoughtful peer response.",
  "dsaInterviewQBankThink1Q": "If you could have dinner with any person — living or historical — who would it be?",
  "dsaInterviewQBankThink1Why": "Reveals interests and curiosity. The real answer is in the reasoning, not the name chosen.",
  "dsaInterviewQBankThink2Q": "What current news story has caught your attention recently? Why?",
  "dsaInterviewQBankThink2Why": "Current affairs awareness. Used at schools with a strong academic or debate culture. Probed with follow-up questions — surface-level answers fail.",
  "dsaInterviewQBankThink3Q": "If you could solve one problem in Singapore, what would it be?",
  "dsaInterviewQBankThink3Why": "Big-picture thinking and civic awareness. Shows whether the child can engage with issues beyond their own experience.",
  "dsaInterviewQBankThink4Q": "What is the most important thing school has taught you — that has nothing to do with academics?",
  "dsaInterviewQBankThink4Why": "Values and self-awareness. Tests whether the child can reflect beyond grades and achievement.",
  "dsaInterviewQBankThink5Q": "What do you want to be doing ten years from now?",
  "dsaInterviewQBankThink5Why": "Aspiration and direction. Not about having the 'right' career in mind — about showing curiosity and forward thinking."
```

---

## Step 2: Add to `locales/zh.json`

Add after `dsaInterviewOfferComingSoonBody`:

```json
  "dsaInterviewMistakesHeading": "10个毁掉DSA申请的失误",
  "dsaInterviewMistakesLead": "以下是论坛讨论、学校反馈和经验丰富的辅导老师反复提到的失败模式。大多数都是可以避免的。",
  "dsaInterviewMistake01Title": "答案像是背出来的",
  "dsaInterviewMistake01Body": "这是面试失败最常被提及的原因。面试官会故意提问让孩子措手不及，以打破背稿式回答。平时说得很流利，但稍微换一个问法就卡住——这种情况立刻会被识破。",
  "dsaInterviewMistake02Title": "没有比赛经验却申请体育DSA",
  "dsaInterviewMistake02Body": "学校希望录取能代表学校参加全国中学生运动会的学生。试训的目的就是筛掉只是业余爱好的学生。在小六才为了DSA换运动项目是一个明显的警报信号。没有区级及以上比赛经历，体育DSA成功率极低。",
  "dsaInterviewMistake03Title": "Portfolio经不起现场考核",
  "dsaInterviewMistake03Body": "对于视觉艺术和音乐：如果现场即兴绘画或视奏测试暴露出与Portfolio差距悬殊的水平，说明Portfolio是由老师辅导完成的。学校对此有专门的判断方法。从2025年起，SOTA明确规定提交的作品不得由教师或导师指导或修改。",
  "dsaInterviewMistake04Title": "说不出为什么选这所学校",
  "dsaInterviewMistake04Body": "'为什么选我们学校？'是必问题。'因为是好学校'每次都会失败。面试官会追问。说不出该校具体项目、比赛、教学理念或开放日所见的孩子，只会让人觉得他们冲着名气来，而非因为适合。",
  "dsaInterviewMistake05Title": "无法谈论失败或挫折",
  "dsaInterviewMistake05Body": "DSA面试专门考察成长型思维。一个只会列举成就、无法说清楚一次真实挫折——以及从中学到什么——的孩子，会显得肤浅。面试官故意问这个问题。",
  "dsaInterviewMistake06Title": "家长过度辅导，痕迹明显",
  "dsaInterviewMistake06Body": "部分学校会观察家长在试训场馆的行为。孩子在回答时扭头看门口或接收家长暗示——这些都是警报信号。家长明显的焦虑情绪也会直接传递给孩子——教练会立刻察觉。",
  "dsaInterviewMistake07Title": "忽视学业最低要求",
  "dsaInterviewMistake07Body": "DSA不是绕开学业的捷径。大多数学校设有PSLE最低分数线——未达标则录取通知可能被撤销。把所有精力放在才能上、完全忽视学业准备，是不必要的风险。",
  "dsaInterviewMistake08Title": "把DSA当成进名校的后门",
  "dsaInterviewMistake08Body": "学校能感知孩子的兴趣是否真实，以及家长是否为了目标学校而临时包装孩子的经历。面试正是为了揭露这一点而设计的。才能与学校定位不匹配的申请，几乎无一例外地失败。",
  "dsaInterviewMistake09Title": "错过入围通知邮件",
  "dsaInterviewMistake09Body": "学校通过电子邮件通知。邮件可能进垃圾箱、发到旧地址，或在忙碌时被忽略。请确认申请时填写的邮箱是正确且常用的。7月1日起要主动关注。错过通知等于实际上放弃了这次申请机会。",
  "dsaInterviewMistake10Title": "没有处理好时间冲突",
  "dsaInterviewMistake10Body": "申请多所学校的学生可能会在同一天收到不同学校的试训或面试安排。各校之间不协调日期。收到通知后要立即行动——马上联系学校申请改期。并非所有学校都会同意，拖延则可能彻底失去机会。",

  "dsaInterviewQBankHeading": "DSA面试题库",
  "dsaInterviewQBankLead": "以下问题在不同学校类型和才能领域中反复出现。了解每个问题背后的考察逻辑，能帮助孩子真实作答——而不只是背答案。",
  "dsaInterviewQBankCat1": "关于你自己",
  "dsaInterviewQBankCat2": "为什么选这所学校",
  "dsaInterviewQBankCat3": "你的才能与训练",
  "dsaInterviewQBankCat4": "性格与成长",
  "dsaInterviewQBankCat5": "现场思考",
  "dsaInterviewQBankNote": "面试官会对回答追问。目标不是背熟这些问题——而是真正想清楚答案，让孩子能从亲身经历出发自然表达。",
  "dsaInterviewQBankSelf1Q": "请做一个自我介绍。",
  "dsaInterviewQBankSelf1Why": "开场必问，每次面试都有。考察孩子能否给出有结构、自信、简洁的介绍。不应超过90秒。",
  "dsaInterviewQBankSelf2Q": "用三个词形容自己，然后解释为什么。",
  "dsaInterviewQBankSelf2Why": "考察自我认知。真正的答案在'为什么'里——选了好听的词但举不出真实例子的孩子会在这里露馅。",
  "dsaInterviewQBankSelf3Q": "你的朋友会怎么形容你？你同意吗？",
  "dsaInterviewQBankSelf3Why": "社会认知与自我认知是否一致。寻找真实的思考过程，而非表演式的谦虚。",
  "dsaInterviewQBankWhy1Q": "你为什么想加入我们学校，具体说说？",
  "dsaInterviewQBankWhy1Why": "最重要的问题。'好学校''成绩好'这类笼统回答每次都会失败。必须说出具体的事。",
  "dsaInterviewQBankWhy2Q": "你对我们的[CCA/项目]了解多少？",
  "dsaInterviewQBankWhy2Why": "考察是否做了真正的功课。知道比赛历史、老师姓名或近期成就的孩子会脱颖而出。",
  "dsaInterviewQBankWhy3Q": "我们是你的第一志愿吗？你还申请了哪些学校？",
  "dsaInterviewQBankWhy3Why": "竞争性学校会问这个。面试官期待诚实的回答——说'是'但并不是，通常是可以被察觉的。",
  "dsaInterviewQBankWhy4Q": "如果我们和[另一所学校]都录取你，你会选哪个？为什么？",
  "dsaInterviewQBankWhy4Why": "考察真正的偏好和承诺。需要具体的、以学校为依据的理由。",
  "dsaInterviewQBankWhy5Q": "你能为我们学校带来什么我们目前没有的东西？",
  "dsaInterviewQBankWhy5Why": "以贡献为导向。评审想要的是未来的贡献者，不只是成就者。",
  "dsaInterviewQBankTalent1Q": "你在[才能领域]最自豪的成就是什么——是什么让它很难做到？",
  "dsaInterviewQBankTalent1Why": "考察真实的自豪感。追问会深入细节。只说'我赢了比赛'而没有说明难点，显得肤浅。",
  "dsaInterviewQBankTalent2Q": "描述一下你平时一周的训练安排。",
  "dsaInterviewQBankTalent2Why": "现实核查。无法描述具体细节的孩子，会暴露出个人档案与实际投入之间的落差。",
  "dsaInterviewQBankTalent3Q": "你觉得[才能]哪方面对你来说最难？你在怎么做？",
  "dsaInterviewQBankTalent3Why": "成长型思维与自我认知。对真实弱点和真实努力给出具体答案，才有说服力。",
  "dsaInterviewQBankTalent4Q": "跟我说说一次没有按计划进行的比赛或演出。",
  "dsaInterviewQBankTalent4Why": "压力下的韧性。答案应包括发生了什么、孩子当时的感受，以及之后做了什么不同的事。",
  "dsaInterviewQBankTalent5Q": "在你的成长过程中，谁对你的才能发展影响最大？为什么？",
  "dsaInterviewQBankTalent5Why": "感恩与人际关系，同时也反映孩子对自身成长的认知程度。",
  "dsaInterviewQBankChar1Q": "说说一次你没能实现目标的经历。之后你怎么做的？",
  "dsaInterviewQBankChar1Why": "标准成长型思维考察。评审期待真正的失败——不是包装成失败的成功。",
  "dsaInterviewQBankChar2Q": "说说一次你和教练或队友意见不合的经历。你是怎么处理的？",
  "dsaInterviewQBankChar2Why": "冲突处理与情绪成熟度。没有标准答案——重要的是孩子的思考过程。",
  "dsaInterviewQBankChar3Q": "比赛或演出前你会紧张吗？你怎么应对？",
  "dsaInterviewQBankChar3Why": "自我调节能力。真实、具体的方法（呼吸、训练前的固定流程、专注于过程）比'我不会紧张'更可信。",
  "dsaInterviewQBankChar4Q": "你会改变自己训练方式中的哪一点？",
  "dsaInterviewQBankChar4Why": "自我反思，没有标准答案——但具体、诚实的回答体现出成熟度。",
  "dsaInterviewQBankChar5Q": "如果队友发挥不好，拖累了整个团队，你会怎么做？",
  "dsaInterviewQBankChar5Why": "领导力与同理心。考察孩子是否只会'告诉老师'，还是能描述更有思考性的同伴应对方式。",
  "dsaInterviewQBankThink1Q": "如果可以和任何一个人共进晚餐——无论是在世的还是历史上的——你会选谁？",
  "dsaInterviewQBankThink1Why": "揭示兴趣与好奇心。真正的答案在理由里，而不是名字。",
  "dsaInterviewQBankThink2Q": "最近有什么新闻让你印象深刻？为什么？",
  "dsaInterviewQBankThink2Why": "时事意识。常见于学术或辩论文化较强的学校。会有追问——只了解标题的孩子很快会露馅。",
  "dsaInterviewQBankThink3Q": "如果你能解决新加坡的一个问题，你会选哪个？",
  "dsaInterviewQBankThink3Why": "宏观思维与公民意识。考察孩子能否超越个人经验，思考更广泛的议题。",
  "dsaInterviewQBankThink4Q": "学校教给你最重要的事是什么——和学业无关的那种？",
  "dsaInterviewQBankThink4Why": "价值观与自我认知。考察孩子能否跳出成绩与成就，进行更深层的反思。",
  "dsaInterviewQBankThink5Q": "十年后你希望自己在做什么？",
  "dsaInterviewQBankThink5Why": "志向与方向感。不在于有没有'正确'的职业目标——而在于展示好奇心和前瞻性思维。"
```

---

## Step 3: Update `components/DsaInterviewPageBody.tsx`

### 3a. Add data arrays after existing arrays

Add after `introMistakes` array:

```tsx
  const mistakeItems = [
    { title: t.dsaInterviewMistake01Title, body: t.dsaInterviewMistake01Body },
    { title: t.dsaInterviewMistake02Title, body: t.dsaInterviewMistake02Body },
    { title: t.dsaInterviewMistake03Title, body: t.dsaInterviewMistake03Body },
    { title: t.dsaInterviewMistake04Title, body: t.dsaInterviewMistake04Body },
    { title: t.dsaInterviewMistake05Title, body: t.dsaInterviewMistake05Body },
    { title: t.dsaInterviewMistake06Title, body: t.dsaInterviewMistake06Body },
    { title: t.dsaInterviewMistake07Title, body: t.dsaInterviewMistake07Body },
    { title: t.dsaInterviewMistake08Title, body: t.dsaInterviewMistake08Body },
    { title: t.dsaInterviewMistake09Title, body: t.dsaInterviewMistake09Body },
    { title: t.dsaInterviewMistake10Title, body: t.dsaInterviewMistake10Body },
  ];

  const qBankCategories = [
    {
      cat: t.dsaInterviewQBankCat1,
      questions: [
        { q: t.dsaInterviewQBankSelf1Q, why: t.dsaInterviewQBankSelf1Why },
        { q: t.dsaInterviewQBankSelf2Q, why: t.dsaInterviewQBankSelf2Why },
        { q: t.dsaInterviewQBankSelf3Q, why: t.dsaInterviewQBankSelf3Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat2,
      questions: [
        { q: t.dsaInterviewQBankWhy1Q, why: t.dsaInterviewQBankWhy1Why },
        { q: t.dsaInterviewQBankWhy2Q, why: t.dsaInterviewQBankWhy2Why },
        { q: t.dsaInterviewQBankWhy3Q, why: t.dsaInterviewQBankWhy3Why },
        { q: t.dsaInterviewQBankWhy4Q, why: t.dsaInterviewQBankWhy4Why },
        { q: t.dsaInterviewQBankWhy5Q, why: t.dsaInterviewQBankWhy5Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat3,
      questions: [
        { q: t.dsaInterviewQBankTalent1Q, why: t.dsaInterviewQBankTalent1Why },
        { q: t.dsaInterviewQBankTalent2Q, why: t.dsaInterviewQBankTalent2Why },
        { q: t.dsaInterviewQBankTalent3Q, why: t.dsaInterviewQBankTalent3Why },
        { q: t.dsaInterviewQBankTalent4Q, why: t.dsaInterviewQBankTalent4Why },
        { q: t.dsaInterviewQBankTalent5Q, why: t.dsaInterviewQBankTalent5Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat4,
      questions: [
        { q: t.dsaInterviewQBankChar1Q, why: t.dsaInterviewQBankChar1Why },
        { q: t.dsaInterviewQBankChar2Q, why: t.dsaInterviewQBankChar2Why },
        { q: t.dsaInterviewQBankChar3Q, why: t.dsaInterviewQBankChar3Why },
        { q: t.dsaInterviewQBankChar4Q, why: t.dsaInterviewQBankChar4Why },
        { q: t.dsaInterviewQBankChar5Q, why: t.dsaInterviewQBankChar5Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat5,
      questions: [
        { q: t.dsaInterviewQBankThink1Q, why: t.dsaInterviewQBankThink1Why },
        { q: t.dsaInterviewQBankThink2Q, why: t.dsaInterviewQBankThink2Why },
        { q: t.dsaInterviewQBankThink3Q, why: t.dsaInterviewQBankThink3Why },
        { q: t.dsaInterviewQBankThink4Q, why: t.dsaInterviewQBankThink4Why },
        { q: t.dsaInterviewQBankThink5Q, why: t.dsaInterviewQBankThink5Why },
      ],
    },
  ];
```

### 3b. Replace the existing interview questions section

Find the existing section that renders `interviewQs`:

```tsx
            <section className="mb-10">
              <h2 className="mb-5 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewFaqHeading}
              </h2>
```

Wait — the interview questions section comes BEFORE the FAQ section. Find the section that maps `interviewQs`:

```tsx
                {interviewQs.map(({ q, why }) => (
```

Replace the **entire section** containing `interviewQs.map` with:

```tsx
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewQBankHeading}
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewQBankLead}</p>
              <div className="space-y-6">
                {qBankCategories.map(({ cat, questions }) => (
                  <div key={cat}>
                    <h3 className="mb-3 text-[0.75rem] font-bold uppercase tracking-widest text-slate-400">
                      {cat}
                    </h3>
                    <div className="space-y-2.5">
                      {questions.map(({ q, why }) => (
                        <div key={q} className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                          <p className="mb-1.5 font-display text-[0.9375rem] font-semibold text-slate-900">{q}</p>
                          <p className="text-[0.8125rem] leading-relaxed text-slate-500">{why}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-lg border border-[#e3ded5] bg-surface-warm px-4 py-3 text-[0.8125rem] leading-relaxed text-slate-500">
                {t.dsaInterviewQBankNote}
              </p>
            </section>
```

### 3c. Insert Common Mistakes section

Insert the following **immediately after the Offer Decision Coming Soon section** and **before the Related Links `<div>`**:

Wait — insert BEFORE the Offer Decision section, AFTER Self-Intro. Insert this between `{/* ── Offer Decision Guide — Coming Soon ── */}` section and the Related Links div:

Actually insert **between the Self-Intro section and the Offer Decision section**:

```tsx
            {/* ── Common Mistakes ── */}
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewMistakesHeading}
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewMistakesLead}</p>
              <div className="space-y-3">
                {mistakeItems.map(({ title, body }, i) => (
                  <div key={title} className="flex gap-4 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-red-200 text-red-400 text-[0.75rem] font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <p className="mb-1 font-display text-[0.875rem] font-semibold text-slate-900">{title}</p>
                      <p className="text-[0.8125rem] leading-relaxed text-slate-500">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
```

---

## Final section order in DsaInterviewPageBody.tsx

After all changes, the sections should appear in this order:
1. Selection Types (existing)
2. Prep Steps (existing)
3. Interview Question Bank ← **replaced from interviewQs**
4. Coaching Table (existing)
5. Portfolio Checklist (existing)
6. FAQ (existing)
7. Trial Timeline ← **new**
8. Self-Introduction Guide ← **new**
9. Common Mistakes ← **new**
10. Offer Decision Coming Soon ← **new**
11. Related Links CTA (existing)

---

## Verification

1. `npm run build` — no TypeScript errors
2. `/dsa-interview` shows all 11 sections in order
3. Interview questions now shows 5 categories with 25 questions total
4. Common Mistakes shows 10 numbered items
5. Toggle EN↔ZH — all new sections translate correctly
6. Mobile layout looks clean on 375px width

---

## Git commit

```
git add components/DsaInterviewPageBody.tsx locales/en.json locales/zh.json
git commit -m "feat: expand /dsa-interview with question bank, common mistakes, timeline, self-intro guide"
```

**NOTE: Run this task AFTER `CURSOR_TASK_interview_self_intro_and_offer.md` is complete, since both tasks modify the same files.**
