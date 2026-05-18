# Cursor Task: DSA Interview — Day-Of Checklist + SEO Metadata Update

## Overview

Two changes:

1. **Add a "Day-Of Checklist" section** to `components/DsaInterviewPageBody.tsx` — inserted between Common Mistakes and Offer Decision Coming Soon
2. **Update SEO metadata** in `app/dsa-interview/page.tsx` — add new keywords and expand JSON-LD FAQ with 5 additional questions

---

## Files to modify

1. `locales/en.json`
2. `locales/zh.json`
3. `components/DsaInterviewPageBody.tsx`
4. `app/dsa-interview/page.tsx`

---

## Step 1: Add to `locales/en.json`

Add after `dsaInterviewMistake10Body`:

```json
  "dsaInterviewDayOfHeading": "The Day-Of Checklist",
  "dsaInterviewDayOfLead": "Most trial and interview failures are about performance, not logistics — but avoidable logistical mistakes do happen. Use this the night before and morning of.",

  "dsaInterviewDayOfSection1": "The night before",
  "dsaInterviewDayOfNight1": "Confirm the venue address — not just the school name. Some schools use a different campus or sports hall that requires a separate entrance.",
  "dsaInterviewDayOfNight2": "Plan the travel route and time it conservatively. Arrive 15–20 minutes early — not 5.",
  "dsaInterviewDayOfNight3": "Pack equipment: instrument (music), appropriate sports attire and shoes (sports), portfolio printout (visual arts), school uniform if required (most schools ask for uniform).",
  "dsaInterviewDayOfNight4": "Check the school's email one more time — some schools send last-minute venue or timing updates.",
  "dsaInterviewDayOfNight5": "Sleep. Encourage your child to stop reviewing at a reasonable hour. Fatigue hurts performance more than one more hour of preparation helps.",

  "dsaInterviewDayOfSection2": "The morning of",
  "dsaInterviewDayOfMorn1": "Eat a proper breakfast. Nerves suppress appetite — eat anyway. Low blood sugar kills focus.",
  "dsaInterviewDayOfMorn2": "No new coaching or practice in the car. A calm, conversational ride is better than last-minute drilling.",
  "dsaInterviewDayOfMorn3": "Arrive early enough to find the room, use the bathroom, and take a few quiet minutes before being called in.",
  "dsaInterviewDayOfMorn4": "If it is a sports trial: arrive warmed up mentally, not physically exhausted. Light movement is fine; a full training session beforehand is not.",

  "dsaInterviewDayOfSection3": "In the room",
  "dsaInterviewDayOfRoom1": "Greet the panel or coach when entering. A simple 'Good morning' and eye contact sets the tone before a word of the interview is spoken.",
  "dsaInterviewDayOfRoom2": "If asked to wait: sit quietly, do not look at your phone. Panels sometimes observe behaviour before the formal start.",
  "dsaInterviewDayOfRoom3": "Speak at a normal pace. Nerves make most children speak too fast. Pausing before answering is not weakness — it signals composure.",
  "dsaInterviewDayOfRoom4": "If a question is unclear, it is fine to ask for clarification. 'Could you repeat that?' is not a wrong answer.",
  "dsaInterviewDayOfRoom5": "At the end: thank the panel. Simple, genuine, not over-rehearsed.",

  "dsaInterviewDayOfSection4": "After the trial or interview",
  "dsaInterviewDayOfAfter1": "Do not debrief intensely in the car on the way home. Ask one open question: 'How do you feel it went?' and leave space. A full debrief the same evening is too soon.",
  "dsaInterviewDayOfAfter2": "Monitor email from the school in the days following. Outcomes are not instant — the trial-to-interview and interview-to-offer timelines vary by school.",
  "dsaInterviewDayOfAfter3": "If your child does not advance: this is not the end of the road. DSA is one pathway. PSLE and S1 Posting remain open. The skills developed are not wasted."
```

---

## Step 2: Add to `locales/zh.json`

Add after `dsaInterviewMistake10Body`:

```json
  "dsaInterviewDayOfHeading": "当天行动清单",
  "dsaInterviewDayOfLead": "大多数试训和面试失败都是因为表现本身，而不是流程问题——但可以避免的流程失误确实存在。在前一天晚上和当天早上各用一次。",

  "dsaInterviewDayOfSection1": "前一天晚上",
  "dsaInterviewDayOfNight1": "确认具体地址——不只是学校名称。部分学校使用不同的校园或体育馆，需要走另一个入口。",
  "dsaInterviewDayOfNight2": "规划路线并留出充裕时间。提前15–20分钟到达——不是5分钟。",
  "dsaInterviewDayOfNight3": "整理装备：乐器（音乐）、合适的运动服和鞋（体育）、作品集打印版（视觉艺术）、校服（大多数学校要求穿校服）。",
  "dsaInterviewDayOfNight4": "再检查一次学校发来的邮件——部分学校会在最后时刻发送地点或时间调整通知。",
  "dsaInterviewDayOfNight5": "早点睡。鼓励孩子在合理时间停止复习。睡眠不足对表现的损害，远比多一个小时的准备更大。",

  "dsaInterviewDayOfSection2": "当天早上",
  "dsaInterviewDayOfMorn1": "好好吃早餐。紧张会抑制食欲——但还是要吃。低血糖会直接影响专注力。",
  "dsaInterviewDayOfMorn2": "在车里不要再做新的辅导或练习。平静的闲聊比最后一刻的强化练习更有益。",
  "dsaInterviewDayOfMorn3": "提前到达，找好房间，上完洗手间，在被叫进去之前留几分钟安静的时间。",
  "dsaInterviewDayOfMorn4": "如果是体育试训：到达时保持精神状态良好，而不是体力耗尽。适量活动热身可以，但不要在之前进行完整的训练。",

  "dsaInterviewDayOfSection3": "进入房间后",
  "dsaInterviewDayOfRoom1": "进门时主动问好。一句简单的'早上好'加上目光接触，在正式面试开始之前就已经定下了基调。",
  "dsaInterviewDayOfRoom2": "如果被要求等候：安静坐好，不要看手机。评审有时会在正式开始前观察行为。",
  "dsaInterviewDayOfRoom3": "以正常语速回答。紧张会让大多数孩子说话过快。回答前停顿一下不是软弱——而是沉稳的表现。",
  "dsaInterviewDayOfRoom4": "如果问题不清楚，可以请对方重复。'可以再说一遍吗？'不是错误答案。",
  "dsaInterviewDayOfRoom5": "结束时：感谢评审。简单、真诚，不要过于刻意。",

  "dsaInterviewDayOfSection4": "试训或面试结束后",
  "dsaInterviewDayOfAfter1": "不要在回家途中立刻进行密集复盘。问一个开放性问题：'你感觉怎么样？'然后留出空间。同一天晚上的全面复盘来得太早。",
  "dsaInterviewDayOfAfter2": "在接下来几天持续关注学校的邮件。结果不会立即出来——从试训到面试，再到录取通知，各校的时间线不同。",
  "dsaInterviewDayOfAfter3": "如果孩子没有通过：这不是终点。DSA只是其中一条路。PSLE和S1统一分配仍然有效。这段准备过程中培养的能力不会白费。"
```

---

## Step 3: Add Day-Of section to `components/DsaInterviewPageBody.tsx`

### 3a. Add data arrays after `mistakeItems` array

```tsx
  const dayOfSections = [
    {
      heading: t.dsaInterviewDayOfSection1,
      items: [
        t.dsaInterviewDayOfNight1,
        t.dsaInterviewDayOfNight2,
        t.dsaInterviewDayOfNight3,
        t.dsaInterviewDayOfNight4,
        t.dsaInterviewDayOfNight5,
      ],
    },
    {
      heading: t.dsaInterviewDayOfSection2,
      items: [
        t.dsaInterviewDayOfMorn1,
        t.dsaInterviewDayOfMorn2,
        t.dsaInterviewDayOfMorn3,
        t.dsaInterviewDayOfMorn4,
      ],
    },
    {
      heading: t.dsaInterviewDayOfSection3,
      items: [
        t.dsaInterviewDayOfRoom1,
        t.dsaInterviewDayOfRoom2,
        t.dsaInterviewDayOfRoom3,
        t.dsaInterviewDayOfRoom4,
        t.dsaInterviewDayOfRoom5,
      ],
    },
    {
      heading: t.dsaInterviewDayOfSection4,
      items: [
        t.dsaInterviewDayOfAfter1,
        t.dsaInterviewDayOfAfter2,
        t.dsaInterviewDayOfAfter3,
      ],
    },
  ];
```

### 3b. Insert section between Common Mistakes and Offer Decision Coming Soon

Find `{/* ── Offer Decision Guide — Coming Soon ── */}` and insert before it:

```tsx
            {/* ── Day-Of Checklist ── */}
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewDayOfHeading}
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewDayOfLead}</p>
              <div className="space-y-5">
                {dayOfSections.map(({ heading, items }) => (
                  <div key={heading} className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                    <h3 className="mb-3 text-[0.75rem] font-bold uppercase tracking-widest text-slate-400">
                      {heading}
                    </h3>
                    <ul className="space-y-2.5">
                      {items.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-intellectual/30 text-intellectual text-[0.6875rem] font-bold">
                            ✓
                          </span>
                          <p className="text-[0.8125rem] leading-relaxed text-slate-600">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
```

---

## Step 4: Update SEO in `app/dsa-interview/page.tsx`

### 4a. Add keywords

Find the `keywords` array and replace with:

```tsx
    keywords: [
      "DSA interview preparation Singapore 2026",
      "DSA selection exercise Singapore",
      "DSA secondary school interview tips",
      "DSA portfolio preparation Singapore",
      "DSA sports trial preparation",
      "DSA performing arts audition",
      "DSA specialised coaching Singapore",
      "how to prepare for DSA interview",
      "DSA interview questions Singapore",
      "DSA talent portfolio Primary 6",
      "DSA self introduction Singapore",
      "DSA interview common mistakes Singapore",
      "DSA trial timeline 2026",
      "DSA interview day checklist Singapore",
      "what to expect DSA trial Singapore",
      "DSA interview question bank Singapore",
    ],
```

### 4b. Add 3 new FAQ entries to `buildInterviewStructuredData()`

Find the `faqs` array and add these three entries before the closing `]`:

```tsx
    {
      q: "What are the most common mistakes in DSA interviews and trials?",
      a: "The most frequently cited failures are: scripted, memorised answers that break down when interviewers probe; applying for sports DSA without genuine competitive experience (coaches identify recreational players quickly during trials); portfolios for visual arts that don't hold up during on-the-spot drawing tests; and children who cannot explain specifically why they chose that particular school. Most mistakes are avoidable with genuine preparation rather than coached responses.",
    },
    {
      q: "How should my child prepare a self-introduction for a DSA interview?",
      a: "A strong DSA self-introduction covers four parts in 60–90 seconds: who you are (name, school, CCA), what you do (years of experience, training frequency, level), one specific moment (a real story from training or competition — not a generic achievement), and why this school (specific to the programme, not 'it's a good school'). The goal is a clear framework your child can speak from naturally, not a script to memorise. Experienced interviewers identify rehearsed introductions within two minutes.",
    },
    {
      q: "What is the DSA trial and interview timeline after the application closes?",
      a: "After the application window closes on 2 June 2026: schools notify shortlisted applicants by 10 July 2026; trials and auditions run from 6 July to 4 August 2026; interviews run from 13 July to 14 August 2026; all applicants receive final outcomes (Confirmed Offer, Waitlist, or Unsuccessful) by 28 August 2026; parents with Confirmed Offers submit school preference rankings by 23 October 2026 (4.30pm). Schools notify directly by email — watch spam folders from 1 July onwards.",
    },
```

---

## Final section order after all three tasks

1. Selection Types
2. Prep Steps
3. Interview Question Bank (25 questions, 5 categories)
4. Coaching Table
5. Portfolio Checklist
6. FAQ
7. Trial Timeline
8. Self-Introduction Guide
9. Common Mistakes (10 items)
10. Day-Of Checklist ← **this task**
11. Offer Decision Coming Soon
12. Related Links CTA

---

## Verification

1. `npm run build` — no TypeScript errors
2. `/dsa-interview` shows Day-Of Checklist with 4 sub-sections
3. Each sub-section uses checkmark list items
4. SEO keywords list has 16 items
5. JSON-LD FAQ has 11 questions total (8 original + 3 new)
6. Toggle EN↔ZH — all new content translates correctly

---

## Git commit

```
git add components/DsaInterviewPageBody.tsx locales/en.json locales/zh.json app/dsa-interview/page.tsx
git commit -m "feat: add day-of checklist and expand SEO metadata on /dsa-interview"
```

**NOTE: Run this task AFTER both previous interview tasks are complete.**
