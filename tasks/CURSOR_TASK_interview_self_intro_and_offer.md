# Cursor Task: DSA Interview — Self-Introduction Guide + Offer Decision Coming Soon

## Overview

Add two new sections to `/dsa-interview` page, inserted **between the FAQ section and the Related Links CTA** in `components/DsaInterviewPageBody.tsx`:

1. **Self-Introduction Guide** — substantive content section (parents + kids framework)
2. **Offer Decision Guide** — Coming Soon placeholder card

Also add a **Trial Timeline** section inserted **before the Self-Introduction Guide** (between FAQ and Self-Intro).

---

## Files to modify

1. `locales/en.json` — add new i18n keys
2. `locales/zh.json` — add Chinese translations
3. `components/DsaInterviewPageBody.tsx` — add three new sections

---

## Step 1: Add keys to `locales/en.json`

Add after the last `dsaInterview*` key (before `"dsaInterviewRelatedHeading"`):

```json
  "dsaInterviewTimelineHeading": "What Happens After 2 June",
  "dsaInterviewTimelineLead": "The application window closes 2 June 2026. Here is the official MOE schedule for everything that follows.",
  "dsaInterviewTimelineNote": "Schools notify shortlisted applicants by email. Check your spam folder — missed emails are one of the most common avoidable mistakes.",
  "dsaInterviewTimelineRow1Date": "By 10 Jul 2026",
  "dsaInterviewTimelineRow1Event": "Schools notify shortlisted applicants",
  "dsaInterviewTimelineRow1Detail": "Invitation sent directly by each school via email. If shortlisted at multiple schools, each will contact you separately.",
  "dsaInterviewTimelineRow2Date": "6 Jul – 4 Aug 2026",
  "dsaInterviewTimelineRow2Event": "Trials and auditions window",
  "dsaInterviewTimelineRow2Detail": "Sports trials, performing arts auditions, and STEM assessments. Schools do not coordinate dates — clashes can happen.",
  "dsaInterviewTimelineRow3Date": "13 Jul – 14 Aug 2026",
  "dsaInterviewTimelineRow3Event": "Interviews window",
  "dsaInterviewTimelineRow3Detail": "Panel interviews, typically following a successful trial. Some schools run trial and interview on the same day.",
  "dsaInterviewTimelineRow4Date": "17 – 28 Aug 2026",
  "dsaInterviewTimelineRow4Event": "Final outcomes released",
  "dsaInterviewTimelineRow4Detail": "All applicants receive one of three outcomes: Confirmed Offer, Waitlist, or Unsuccessful. Schools notify directly.",
  "dsaInterviewTimelineRow5Date": "By 23 Oct 2026 (4.30pm)",
  "dsaInterviewTimelineRow5Event": "Submit school preference ranking",
  "dsaInterviewTimelineRow5Detail": "Parents with Confirmed Offers submit a ranking of up to 2 schools via the DSA-Sec portal. This is binding.",

  "dsaInterviewIntroHeading": "The Self-Introduction: Framework, Not Script",
  "dsaInterviewIntroLead": "The self-introduction is almost always the first thing an interviewer asks for. Most children either freeze or deliver something so rehearsed it sounds hollow. The goal is a clear structure your child can speak from naturally — not lines to memorise.",
  "dsaInterviewIntroParentHeading": "For Parents: How to Help",
  "dsaInterviewIntroParent1Title": "Build from real memories, not ideal answers",
  "dsaInterviewIntroParent1Body": "Ask your child: what moment in your training or performance do you remember most vividly? What was the hardest thing you pushed through? These become the raw material for an authentic introduction — and they're answers only your child can give.",
  "dsaInterviewIntroParent2Title": "Practise as conversation, not presentation",
  "dsaInterviewIntroParent2Body": "Run mock introductions at dinner or in the car — low stakes, no audience. Ask follow-up questions: 'Why that moment?' 'What did you do differently after that?' Children who can handle unexpected follow-ups sound genuinely confident.",
  "dsaInterviewIntroParent3Title": "Don't drill the exact words",
  "dsaInterviewIntroParent3Body": "Experienced DSA interviewers identify scripted answers within two minutes. The surest sign: a child who speaks fluently but then freezes when the interviewer asks something slightly different. Teach structure, not sentences.",
  "dsaInterviewIntroParent4Title": "60–90 seconds is the right length",
  "dsaInterviewIntroParent4Body": "Under 45 seconds reads as unprepared. Over 2 minutes reads as over-coached and eats into the real interview. Time a few practice runs — most children initially run too long.",
  "dsaInterviewIntroKidHeading": "For Students: A Simple Framework",
  "dsaInterviewIntroKidLead": "A strong self-introduction covers four things in order. Practise speaking each part naturally — not word for word.",
  "dsaInterviewIntroStep1Label": "1 — Who you are",
  "dsaInterviewIntroStep1Body": "Your name, your primary school, and your CCA or talent area. Keep it to two sentences. This is orientation, not the main event.",
  "dsaInterviewIntroStep2Label": "2 — What you do",
  "dsaInterviewIntroStep2Body": "How long you have been doing this, what level you are at, and what you do outside school (club, external training, competitions). Be specific — 'I've been playing badminton for five years and I train with the club four times a week' is more convincing than 'I love badminton.'",
  "dsaInterviewIntroStep3Label": "3 — One specific moment",
  "dsaInterviewIntroStep3Body": "The most important part. Choose a real story: a competition, a performance, a failure you learned from, a turning point in your training. Give enough detail that it sounds lived-in, not summarised. This is what makes your introduction memorable.",
  "dsaInterviewIntroStep4Label": "4 — Why this school",
  "dsaInterviewIntroStep4Body": "Specific, not generic. 'Because it's a good school' fails every time. Name something real — a programme, a competition the school competes in, something you saw at their open house, a teacher whose approach you read about. If you cannot name something specific, spend 20 minutes on the school's website before the interview.",
  "dsaInterviewIntroTemplateHeading": "A Starting Template",
  "dsaInterviewIntroTemplateBody": "\"My name is [Name] and I'm from [Primary School]. I've been doing [talent] for [X] years — I train [frequency] and I'm currently in [level/team/group]. [One or two competition or grading results]. The moment I remember most is [specific story in 2–3 sentences]. I'm applying to [School] because [specific reason — programme / competition / something from open house].\"",
  "dsaInterviewIntroTemplateNote": "This is a starting point, not a script. Every word should come from your own experience.",
  "dsaInterviewIntroMistakesHeading": "Common Mistakes",
  "dsaInterviewIntroMistake1": "Too generic: "I love my CCA and I work very hard." This describes every applicant. Replace with a specific story.",
  "dsaInterviewIntroMistake2": "Too long: anything over 90 seconds reads as over-prepared and takes time away from the actual interview.",
  "dsaInterviewIntroMistake3": "Can't explain why this school: if your child cannot name something specific about the school's programme, the interviewer will notice.",
  "dsaInterviewIntroMistake4": "Sounds memorised: if it sounds like a speech, ask one unexpected follow-up question during practice. If your child freezes, the structure needs more work.",

  "dsaInterviewOfferHeading": "Offer Decision Guide",
  "dsaInterviewOfferLead": "Got a Confirmed Offer? Deciding whether to accept — and which school to choose if you have more than one — is a separate decision that many families underestimate.",
  "dsaInterviewOfferComingSoon": "Coming soon",
  "dsaInterviewOfferComingSoonBody": "This guide covers: what a Confirmed Offer actually commits you to, how to evaluate school fit beyond rankings, and a framework for choosing between multiple offers. Publishing after 28 August 2026 when outcomes are released."
```

---

## Step 2: Add keys to `locales/zh.json`

Add the same keys with Chinese translations after the last `dsaInterview*` key:

```json
  "dsaInterviewTimelineHeading": "6月2日之后会发生什么",
  "dsaInterviewTimelineLead": "报名窗口于2026年6月2日关闭。以下是教育部公布的后续官方时间表。",
  "dsaInterviewTimelineNote": "学校通过电子邮件通知入围名单。请检查垃圾邮件文件夹——错过邮件是最常见的可避免失误之一。",
  "dsaInterviewTimelineRow1Date": "7月10日前",
  "dsaInterviewTimelineRow1Event": "学校通知入围申请人",
  "dsaInterviewTimelineRow1Detail": "每所学校单独发送电子邮件邀请。若在多所学校入围，各校会分别联系。",
  "dsaInterviewTimelineRow2Date": "7月6日 – 8月4日",
  "dsaInterviewTimelineRow2Event": "试训与甄选活动",
  "dsaInterviewTimelineRow2Detail": "体育试训、表演艺术甄选及STEM评估。各校不协调日期安排——可能出现时间冲突。",
  "dsaInterviewTimelineRow3Date": "7月13日 – 8月14日",
  "dsaInterviewTimelineRow3Event": "面试阶段",
  "dsaInterviewTimelineRow3Detail": "小组面试，通常在通过试训后进行。部分学校在同一天安排试训与面试。",
  "dsaInterviewTimelineRow4Date": "8月17日 – 28日",
  "dsaInterviewTimelineRow4Event": "最终录取结果公布",
  "dsaInterviewTimelineRow4Detail": "所有申请人将收到三种结果之一：确认录取、候补名单或未录取。学校直接通知。",
  "dsaInterviewTimelineRow5Date": "10月23日前（下午4:30）",
  "dsaInterviewTimelineRow5Event": "提交志愿学校排名",
  "dsaInterviewTimelineRow5Detail": "持有确认录取通知的家长通过DSA-Sec门户提交最多2所学校的志愿排名，此操作不可更改。",

  "dsaInterviewIntroHeading": "自我介绍：框架，而非台词",
  "dsaInterviewIntroLead": "自我介绍几乎是面试官问的第一个问题。大多数孩子要么僵住，要么说出听起来生硬背诵的内容。目标是帮孩子掌握清晰的结构，让他们自然表达——而不是死记硬背台词。",
  "dsaInterviewIntroParentHeading": "给家长：如何帮助孩子",
  "dsaInterviewIntroParent1Title": "从真实记忆出发，而非"理想答案"",
  "dsaInterviewIntroParent1Body": "问孩子：你训练或表演中记忆最深刻的是哪个时刻？你克服过最难的事是什么？这些才是真正属于孩子自己的内容——也是面试官最想听到的。",
  "dsaInterviewIntroParent2Title": "以对话方式练习，而非背诵式排练",
  "dsaInterviewIntroParent2Body": "在吃饭或坐车时随口练习，低压力、无观众。适时追问：'为什么是那个时刻？''之后你做了什么不同的事？'能应对意外追问的孩子，才真正显得自信。",
  "dsaInterviewIntroParent3Title": "不要逐字逐句地反复练",
  "dsaInterviewIntroParent3Body": "有经验的DSA面试官两分钟内就能识别背稿。最明显的信号：孩子平时说得很流畅，但面试官稍微换一个问法，立刻卡住。教结构，不教句子。",
  "dsaInterviewIntroParent4Title": "60–90秒是合适的长度",
  "dsaInterviewIntroParent4Body": "不足45秒显得准备不足，超过2分钟显得过度排练，还会占用正式面试的时间。多计时练习几次——大多数孩子初稿都偏长。",
  "dsaInterviewIntroKidHeading": "给学生：简单的四步框架",
  "dsaInterviewIntroKidLead": "一个好的自我介绍涵盖四个部分，按顺序自然表达——不是逐字背诵。",
  "dsaInterviewIntroStep1Label": "第1步 — 你是谁",
  "dsaInterviewIntroStep1Body": "你的名字、你的小学、你的CCA或才能领域。两句话即可。这是开场，不是重点。",
  "dsaInterviewIntroStep2Label": "第2步 — 你做什么",
  "dsaInterviewIntroStep2Body": "你已经从事这个领域多少年、目前的水平、校外的训练或比赛情况。要具体——'我打了五年羽毛球，每周在俱乐部训练四次'比'我很喜欢羽毛球'有说服力得多。",
  "dsaInterviewIntroStep3Label": "第3步 — 一个具体的时刻",
  "dsaInterviewIntroStep3Body": "这是最重要的部分。选一个真实的故事：一场比赛、一次演出、一次失败后的成长、训练中的转折点。给出足够的细节，让它听起来是亲身经历的——而不是总结出来的。这会让你的自我介绍令人印象深刻。",
  "dsaInterviewIntroStep4Label": "第4步 — 为什么是这所学校",
  "dsaInterviewIntroStep4Body": "要具体，不能笼统。'因为是好学校'每次都会失败。说出真实的理由——某个项目、学校参与的比赛、开放日看到的某件事、某位老师的教学方式。如果说不出具体理由，在面试前花20分钟认真浏览学校官网。",
  "dsaInterviewIntroTemplateHeading": "参考模板",
  "dsaInterviewIntroTemplateBody": "「我叫[姓名]，就读于[小学]。我从事[才能领域]已经[X]年——每周训练[频次]，目前在[水平/队伍/组别]。[一两项比赛成绩或考级结果]。我印象最深的是[2–3句具体故事]。我申请[学校]是因为[具体原因——项目/比赛/开放日所见]。」",
  "dsaInterviewIntroTemplateNote": "这只是起点，不是台词。每一个字都应该来自你自己的经历。",
  "dsaInterviewIntroMistakesHeading": "常见失误",
  "dsaInterviewIntroMistake1": "过于笼统："我很喜欢我的CCA，我非常努力。"这句话适用于每一个申请者。用具体故事替代。",
  "dsaInterviewIntroMistake2": "太长：超过90秒显得过度准备，还会占用正式面试时间。",
  "dsaInterviewIntroMistake3": "无法解释为什么选这所学校：如果孩子说不出该校项目的具体特点，面试官会注意到。",
  "dsaInterviewIntroMistake4": "听起来像背稿：如果说起来像演讲，在练习时临时加一个意外问题。如果孩子卡住了，说明还需要更多练习。",

  "dsaInterviewOfferHeading": "录取通知决策指南",
  "dsaInterviewOfferLead": "收到确认录取通知后，是否接受——以及有多个通知时如何选择——是很多家庭低估的决定。",
  "dsaInterviewOfferComingSoon": "即将推出",
  "dsaInterviewOfferComingSoonBody": "本指南将涵盖：确认录取通知意味着什么承诺、如何评估学校适配度而非只看排名、以及多个录取通知的选择框架。将于2026年8月28日录取结果公布后发布。"
```

---

## Step 3: Add three new sections to `components/DsaInterviewPageBody.tsx`

### 3a. Add i18n key references to the destructured `t` usage (no change needed — `t` already covers all keys via `useLanguage`)

### 3b. Define timeline rows array after the existing arrays (after `pageFaqs` array)

Add this after the `pageFaqs` array definition:

```tsx
  const timelineRows = [
    { date: t.dsaInterviewTimelineRow1Date, event: t.dsaInterviewTimelineRow1Event, detail: t.dsaInterviewTimelineRow1Detail },
    { date: t.dsaInterviewTimelineRow2Date, event: t.dsaInterviewTimelineRow2Event, detail: t.dsaInterviewTimelineRow2Detail },
    { date: t.dsaInterviewTimelineRow3Date, event: t.dsaInterviewTimelineRow3Event, detail: t.dsaInterviewTimelineRow3Detail },
    { date: t.dsaInterviewTimelineRow4Date, event: t.dsaInterviewTimelineRow4Event, detail: t.dsaInterviewTimelineRow4Detail },
    { date: t.dsaInterviewTimelineRow5Date, event: t.dsaInterviewTimelineRow5Event, detail: t.dsaInterviewTimelineRow5Detail },
  ];

  const introSteps = [
    { label: t.dsaInterviewIntroStep1Label, body: t.dsaInterviewIntroStep1Body },
    { label: t.dsaInterviewIntroStep2Label, body: t.dsaInterviewIntroStep2Body },
    { label: t.dsaInterviewIntroStep3Label, body: t.dsaInterviewIntroStep3Body },
    { label: t.dsaInterviewIntroStep4Label, body: t.dsaInterviewIntroStep4Body },
  ];

  const introParentTips = [
    { title: t.dsaInterviewIntroParent1Title, body: t.dsaInterviewIntroParent1Body },
    { title: t.dsaInterviewIntroParent2Title, body: t.dsaInterviewIntroParent2Body },
    { title: t.dsaInterviewIntroParent3Title, body: t.dsaInterviewIntroParent3Body },
    { title: t.dsaInterviewIntroParent4Title, body: t.dsaInterviewIntroParent4Body },
  ];

  const introMistakes = [
    t.dsaInterviewIntroMistake1,
    t.dsaInterviewIntroMistake2,
    t.dsaInterviewIntroMistake3,
    t.dsaInterviewIntroMistake4,
  ];
```

### 3c. Insert three new sections

Insert the following JSX **immediately before** this existing closing `</section>` tag of the FAQ section — specifically between the FAQ section and the Related Links `<div>`:

Find this exact block:
```tsx
            <div className="rounded-xl border border-champagne/30 bg-champagne-subtle p-6">
              <h2 className="mb-1 font-display text-base font-semibold text-slate-900">
                {t.dsaInterviewRelatedHeading}
              </h2>
```

Insert before it:

```tsx
            {/* ── Timeline Section ── */}
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewTimelineHeading}
              </h2>
              <p className="mb-4 text-[0.9375rem] text-slate-600">{t.dsaInterviewTimelineLead}</p>
              <div className="mb-3 rounded-xl border border-[#e3ded5] bg-white shadow-card overflow-hidden">
                <div className="hidden sm:grid sm:grid-cols-[160px_1fr] text-[0.75rem] font-bold uppercase tracking-widest text-slate-400 border-b border-[#e3ded5] px-5 py-2.5">
                  <span>Date</span>
                  <span>What happens</span>
                </div>
                {timelineRows.map(({ date, event, detail }, i) => (
                  <div
                    key={date}
                    className={`grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-0.5 sm:gap-3 px-5 py-4 ${i < timelineRows.length - 1 ? "border-b border-[#e3ded5]" : ""}`}
                  >
                    <p className="text-[0.8125rem] font-bold text-intellectual">{date}</p>
                    <div>
                      <p className="text-[0.875rem] font-semibold text-slate-900">{event}</p>
                      <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-slate-500">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-[0.8125rem] leading-relaxed text-amber-800">
                ⚠ {t.dsaInterviewTimelineNote}
              </p>
            </section>

            {/* ── Self-Introduction Guide ── */}
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewIntroHeading}
              </h2>
              <p className="mb-6 text-[0.9375rem] text-slate-600">{t.dsaInterviewIntroLead}</p>

              {/* For Parents */}
              <div className="mb-8">
                <h3 className="mb-3 font-display text-[0.9375rem] font-semibold text-slate-700 uppercase tracking-wider text-[0.75rem]">
                  {t.dsaInterviewIntroParentHeading}
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {introParentTips.map(({ title, body }) => (
                    <div key={title} className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                      <p className="mb-1.5 font-display text-[0.875rem] font-semibold text-slate-900">{title}</p>
                      <p className="text-[0.8125rem] leading-relaxed text-slate-500">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* For Students */}
              <div className="mb-6">
                <h3 className="mb-3 font-display text-[0.9375rem] font-semibold text-slate-700 uppercase tracking-wider text-[0.75rem]">
                  {t.dsaInterviewIntroKidHeading}
                </h3>
                <p className="mb-4 text-[0.875rem] text-slate-600">{t.dsaInterviewIntroKidLead}</p>
                <div className="space-y-3">
                  {introSteps.map(({ label, body }, i) => (
                    <div key={label} className="flex gap-4 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-intellectual text-white text-[0.8125rem] font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <p className="mb-1 font-display text-[0.875rem] font-semibold text-slate-900">{label}</p>
                        <p className="text-[0.8125rem] leading-relaxed text-slate-500">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Template */}
              <div className="mb-6 rounded-xl border border-intellectual/20 bg-intellectual/5 p-5">
                <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-widest text-intellectual">
                  {t.dsaInterviewIntroTemplateHeading}
                </p>
                <p className="mb-2 text-[0.9375rem] leading-relaxed text-slate-700 italic">
                  {t.dsaInterviewIntroTemplateBody}
                </p>
                <p className="text-[0.75rem] text-slate-400">{t.dsaInterviewIntroTemplateNote}</p>
              </div>

              {/* Common Mistakes */}
              <div>
                <h3 className="mb-3 font-display text-[0.875rem] font-semibold text-slate-700 uppercase tracking-wider text-[0.75rem]">
                  {t.dsaInterviewIntroMistakesHeading}
                </h3>
                <div className="space-y-2">
                  {introMistakes.map((m, i) => (
                    <div key={i} className="flex gap-3 rounded-lg border border-red-100 bg-red-50 px-4 py-3">
                      <span className="mt-0.5 text-red-400 text-[0.875rem] font-bold shrink-0">✕</span>
                      <p className="text-[0.8125rem] leading-relaxed text-red-800">{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Offer Decision Guide — Coming Soon ── */}
            <section className="mb-10">
              <div className="rounded-xl border border-champagne/40 bg-champagne-subtle p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-champagne/30 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-champagne-dark">
                    {t.dsaInterviewOfferComingSoon}
                  </span>
                  <h2 className="font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewOfferHeading}
                  </h2>
                </div>
                <p className="text-[0.9375rem] leading-relaxed text-slate-600">
                  {t.dsaInterviewOfferLead}
                </p>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-slate-500">
                  {t.dsaInterviewOfferComingSoonBody}
                </p>
              </div>
            </section>

```

---

## Verification

1. `npm run build` — no TypeScript errors
2. `/dsa-interview` shows three new sections in order: Timeline → Self-Intro → Offer Decision
3. Timeline table is responsive (stacks on mobile, two-column on sm+)
4. Self-intro section shows parent tips grid (2-col on sm+), 4 numbered steps, template block, mistakes list
5. Offer Decision shows Coming Soon badge + champagne card
6. Toggle language EN↔ZH — all text switches correctly

---

## Git commit

```
git add components/DsaInterviewPageBody.tsx locales/en.json locales/zh.json
git commit -m "feat: add trial timeline, self-intro guide, and offer decision coming soon to /dsa-interview"
```
