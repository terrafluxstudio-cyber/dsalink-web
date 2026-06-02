/**
 * FAQ Q&A for /dsa-guide Pillar — extracted from the page body so both
 * the client component (rendering accordion) and the server page
 * (rendering FAQPage JSON-LD) can share it without crossing a
 * "use client" boundary (which would lose plain-data exports).
 */

export type LocaleStr = { en: string; zh: string; ms: string; ta: string };

export type FaqQa = { q: LocaleStr; a: LocaleStr };

export const FAQ_QA: FaqQa[] = [
  {
    q: {
      en: "Is DSA worth applying for my child?",
      zh: "我的孩子值得申请 DSA 吗？",
      ms: "Adakah DSA berbaloi untuk anak saya?",
      ta: "என் குழந்தைக்கு DSA விண்ணப்பிக்க மதிப்புள்ளதா?",
    },
    a: {
      en: "DSA is worth it if your child has a sustained talent record — graded exams, zonal or national competition results, or 2+ years of CCA leadership — AND wants to commit to that talent for 2 years in secondary school. Without sustained external signal, DSA is a long shot and P6 time is better spent on PSLE prep.",
      zh: "如果孩子有持续的才能记录——考级证书、区域或全国比赛成绩、或 2 年以上 CCA 领导经验——并且愿意在中学持续投入这个方向 2 年，那 DSA 值得申请。如果没有持续的外部信号，DSA 是赌博，P6 时间更应该用来准备 PSLE。",
      ms: "DSA berbaloi jika anak anda mempunyai rekod bakat berterusan dan sanggup komit 2 tahun. Tanpa isyarat luaran yang konsisten, DSA adalah peluang tipis.",
      ta: "உங்கள் குழந்தை நிலையான திறமைப் பதிவு வைத்திருந்து 2 ஆண்டு உறுதிமொழியளிக்க தயாராக இருந்தால் DSA மதிப்புள்ளது. வெளி அறிகுறி இல்லாமல், DSA ஒரு நீண்ட சட்டம்.",
    },
  },
  {
    q: {
      en: "What are the chances of getting a DSA offer?",
      zh: "拿到 DSA offer 的概率多大？",
      ms: "Apakah peluang mendapat tawaran DSA?",
      ta: "DSA சலுகை பெற வாய்ப்புகள் என்ன?",
    },
    a: {
      en: "MOE doesn't publish school-level acceptance rates. Anecdotally, popular schools receive 5–15× more applications than DSA places. Tier-A evidence (national meets, ABRSM Grade 6+, NSG top 3) gives a real shot; Tier-C (CCA leadership only) is highly school-dependent.",
      zh: "MOE 不公布校级录取率。家长论坛数据：热门学校的申请数通常是 DSA 名额的 5-15 倍。A 类证据（全国比赛、ABRSM 六级以上、NSG 前三）有实际机会；C 类（仅 CCA 领导）取决于具体学校。",
      ms: "MOE tidak menerbitkan kadar penerimaan. Anekdot: sekolah popular menerima 5-15× lebih permohonan daripada tempat DSA.",
      ta: "MOE பள்ளி வாரியான சேர்க்கை விகிதங்களை வெளியிடவில்லை. பிரபல பள்ளிகள் DSA இடங்களை விட 5-15 மடங்கு விண்ணப்பங்களைப் பெறுகின்றன.",
    },
  },
  {
    q: {
      en: "What if my child fails DSA — does it hurt their PSLE chances?",
      zh: "如果 DSA 失败，会影响 PSLE 派位吗？",
      ms: "Jika anak gagal DSA, adakah ia menjejaskan PSLE?",
      ta: "என் குழந்தை DSA-வில் தோல்வியடைந்தால், PSLE-க்கு பாதிப்பு உண்டா?",
    },
    a: {
      en: "Not at all. DSA failure has zero impact on PSLE Posting. Your child enters Option Form posting normally with their PSLE Achievement Level total, and can still apply for S1 Appeal at schools with sibling or affiliation links. DSA is a separate track entirely.",
      zh: "完全不影响。DSA 失败对 PSLE 派位零影响。孩子按 PSLE AL 总分正常填 Option Form 派位，在有兄弟姐妹或校友关系的学校还可申请 S1 Appeal。DSA 是完全独立的通道。",
      ms: "Tidak sama sekali. Kegagalan DSA tiada kesan pada Penempatan PSLE. DSA adalah trek yang berasingan.",
      ta: "எவ்வளவும் இல்லை. DSA தோல்வி PSLE இடம் ஒதுக்கீட்டில் எந்த விளைவையும் ஏற்படுத்தாது.",
    },
  },
  {
    q: {
      en: "Can I reject a Confirmed Offer if I change my mind?",
      zh: "如果改变主意，能拒绝 Confirmed Offer 吗？",
      ms: "Boleh saya tolak Tawaran Sah jika berubah fikiran?",
      ta: "மனதை மாற்றினால் உறுதிசெய்யப்பட்ட சலுகையை நிராகரிக்க முடியுமா?",
    },
    a: {
      en: "Yes — until the October preference exercise locks your final acceptance. After acceptance is locked, the decision is binding: you cannot then participate in S1 Posting or accept a different school's Confirmed Offer. Transfers between secondary schools are generally not allowed except in exceptional circumstances defined by MOE.",
      zh: "可以——直到 10 月志愿排序锁定最终接受为止。一旦锁定，决定就有约束力：之后不能再参加 S1 派位，也不能接受其他学校的 Confirmed Offer。中学之间转学一般不允许，除非 MOE 定义的特殊情况。",
      ms: "Ya — sehingga latihan keutamaan Oktober mengunci penerimaan. Selepas terkunci, keputusan mengikat.",
      ta: "ஆம் — அக்டோபர் முன்னுரிமைப் பயிற்சி வரை. பூட்டிய பிறகு, முடிவு கட்டுப்படுத்தும்.",
    },
  },
  {
    q: {
      en: "Do I need private coaching to get DSA?",
      zh: "拿 DSA 一定要请私人教练吗？",
      ms: "Adakah saya perlu jurulatih persendirian untuk DSA?",
      ta: "DSA பெற தனியார் பயிற்சி அவசியமா?",
    },
    a: {
      en: "No. Schools evaluate evidence of sustained talent — not which coach trained the child. Many Confirmed Offers come from children trained entirely through school CCAs, family practice, or zonal-level programmes. External coaching is one path among several; what matters is the result, not the route.",
      zh: "不需要。学校看的是持续才能的证据，不是孩子跟过谁。很多 Confirmed Offer 来自只靠学校 CCA、家庭练习或区域级项目训练的孩子。外部教练是其中一条路径，关键是结果而不是路径。",
      ms: "Tidak. Sekolah menilai bukti bakat berterusan, bukan jurulatih.",
      ta: "இல்லை. பள்ளிகள் நிலையான திறமைச் சான்றை மதிப்பிடுகின்றன, பயிற்சியாளரை அல்ல.",
    },
  },
  {
    q: {
      en: "What's the difference between DSA-Sec and DSA-JC?",
      zh: "DSA-Sec 和 DSA-JC 有什么区别？",
      ms: "Apa beza DSA-Sec dan DSA-JC?",
      ta: "DSA-Sec மற்றும் DSA-JC வேறுபாடு என்ன?",
    },
    a: {
      en: "DSA-Sec is for P6 students entering Secondary 1. DSA-JC is for Sec 4 / Sec 5 students entering Junior College. Different application windows, different criteria, different schools. This guide covers only DSA-Sec — if your child is in Lower Secondary already, the DSA-JC route may be a second chance.",
      zh: "DSA-Sec 是 P6 学生进中一的通道。DSA-JC 是中四/中五学生进 JC 的通道。两者申请窗口、标准、参与学校都不同。本指南只涵盖 DSA-Sec——孩子已经在 Lower Sec 的话，DSA-JC 是第二次机会。",
      ms: "DSA-Sec untuk pelajar P6 ke Tingkatan 1. DSA-JC untuk Tingkatan 4/5 ke Junior College.",
      ta: "DSA-Sec என்பது P6 மாணவர்களுக்கு இடைநிலை 1-க்கு. DSA-JC என்பது இடைநிலை 4/5-லிருந்து JC-க்கு.",
    },
  },
  {
    q: {
      en: "Can my child switch CCAs after being admitted through DSA?",
      zh: "DSA 录取后，孩子能换 CCA 吗？",
      ms: "Boleh anak tukar CCA selepas masuk melalui DSA?",
      ta: "DSA மூலம் சேர்ந்த பிறகு குழந்தை CCA மாற்ற முடியுமா?",
    },
    a: {
      en: "Generally no, not within the first 2 years. The DSA commitment requires your child to continue the talent area through a CCA-linked programme. Switching CCAs in Lower Secondary is treated as a breach of the DSA commitment and may have consequences with the school, though MOE doesn't publish a formal sanctions schedule.",
      zh: "一般不行，至少 2 年内。DSA 承诺要求孩子在新学校通过 CCA 衔接项目持续这个才艺方向。在 Lower Sec 换 CCA 等于违反 DSA 承诺，可能在学校层面有后果，但 MOE 没有公开正式的处罚条款。",
      ms: "Umumnya tidak, sekurang-kurangnya 2 tahun.",
      ta: "பொதுவாக இல்லை, குறைந்தபட்சம் 2 ஆண்டுகள் இல்லை.",
    },
  },
  {
    q: {
      en: "How early should we start preparing for DSA?",
      zh: "DSA 备战要多早开始？",
      ms: "Bila kami patut mula bersedia untuk DSA?",
      ta: "DSA-க்கு எவ்வளவு முன்னதாக தயாரிக்க வேண்டும்?",
    },
    a: {
      en: "The talent record itself needs 2–4 years of consistent build-up — grading exams, competitions, sustained CCA leadership. The application paperwork and interview prep is realistically 3–6 months. Start the talent build in P3/P4 if you're being strategic; the paperwork in P5 second half is fine.",
      zh: "才艺记录本身需要 2-4 年持续积累——考级、比赛、CCA 长期领导。申请材料和面试准备实际上 3-6 个月就够。要有战略性的话，P3/P4 就开始铺才艺；P5 下学期开始准备申请材料没问题。",
      ms: "Rekod bakat memerlukan 2-4 tahun. Kertas kerja 3-6 bulan.",
      ta: "திறமைப் பதிவுக்கு 2-4 ஆண்டுகள் தேவை. ஆவணப்படுத்தலுக்கு 3-6 மாதங்கள்.",
    },
  },
  {
    q: {
      en: "What happens if I miss the 2 June 4:30pm deadline?",
      zh: "如果错过 6/2 下午 4:30 截止时间怎么办？",
      ms: "Bagaimana jika saya terlepas tarikh akhir 2 Jun 4:30 petang?",
      ta: "2 ஜூன் 4:30 மணி இறுதி தேதியைத் தவறவிட்டால் என்ன?",
    },
    a: {
      en: "The portal closes hard at 4:30pm Singapore time and doesn't reopen. There's no extension and no late submission. Your child enters S1 Posting normally with PSLE results. The next DSA-Sec window opens in May 2027 — but by then your child will be in Secondary school, so DSA-Sec is no longer an option. DSA-JC at end of Sec 4 / Sec 5 becomes the second chance.",
      zh: "门户在新加坡时间下午 4:30 准时关闭，不会重开。没有延期，没有补交。孩子按 PSLE 成绩正常走 S1 派位。下次 DSA-Sec 窗口在 2027 年 5 月——但那时孩子已经在中学，DSA-Sec 不再是选项。中四/中五结束的 DSA-JC 是第二次机会。",
      ms: "Portal ditutup pada 4:30 petang dan tidak dibuka semula. Tiada lanjutan.",
      ta: "வாயில் 4:30 மணிக்கு கடினமாக மூடப்படுகிறது, மீண்டும் திறக்காது.",
    },
  },
  {
    q: {
      en: "Do all 147 secondary schools participate in DSA?",
      zh: "全部 147 所中学都参与 DSA 吗？",
      ms: "Adakah kesemua 147 sekolah menengah menyertai DSA?",
      ta: "அனைத்து 147 இடைநிலை பள்ளிகளும் DSA-வில் பங்கேற்கின்றனவா?",
    },
    a: {
      en: "Yes — every government and government-aided secondary school participates in DSA-Sec, including IP, Express, and Normal-Academic schools. The 4 full-DSA schools (NUS High, SOTA, SST, Singapore Sports School) admit ~100% through DSA. The other 143 cap DSA at 20% of S1 places and admit the rest through PSLE Posting.",
      zh: "是的——所有政府及政府辅助中学都参与 DSA-Sec，包括 IP、Express、Normal-Academic 校。4 所全 DSA 校（NUS High、SOTA、SST、新加坡体育学校）几乎 100% 通过 DSA 招生。其余 143 所把 DSA 名额上限定在 20%，其余通过 PSLE 派位招生。",
      ms: "Ya — semua sekolah menengah kerajaan dan bantuan kerajaan menyertai DSA-Sec.",
      ta: "ஆம் — அனைத்து அரசு மற்றும் அரசு உதவி இடைநிலை பள்ளிகளும் DSA-Sec-இல் பங்கேற்கின்றன.",
    },
  },
  {
    q: {
      en: "How is DSA different at IP (Integrated Programme) schools?",
      zh: "DSA 在 IP（直通车）学校有什么不同？",
      ms: "Bagaimana DSA berbeza di sekolah IP?",
      ta: "IP பள்ளிகளில் DSA எவ்வாறு வேறுபடுகிறது?",
    },
    a: {
      en: "Mechanics are the same, but two differences matter. First, IP schools' PSLE minimum is the IP cut-off (AL ≤ 22 / Posting Group 3) rather than the Express minimum. Second, dual-track IP schools (e.g. HCI, NJC, RI) may issue a Counter-Offer for O-Level if PSLE doesn't meet IP eligibility — your family then chooses which path to accept.",
      zh: "机制相同，但有两个差异。第一，IP 校的 PSLE 门槛是 IP cut-off（AL ≤ 22 / Posting Group 3），而不是 Express 门槛。第二，双轨制 IP 校（如 HCI、NJC、RI）如果 PSLE 没达到 IP 资格但达到 O-Level，可能发 O-Level Counter-Offer——由家庭决定走哪条路。",
      ms: "Mekanisme sama, tetapi sekolah IP boleh keluarkan Tawaran Balas untuk O-Level.",
      ta: "இயக்கம் ஒரே மாதிரியானது, ஆனால் IP பள்ளிகள் O-Level எதிர் சலுகை வழங்கலாம்.",
    },
  },
  {
    q: {
      en: "Can I appeal a DSA rejection?",
      zh: "DSA 被拒后能上诉吗？",
      ms: "Boleh saya rayu penolakan DSA?",
      ta: "DSA நிராகரிப்பை மேல்முறையீடு செய்ய முடியுமா?",
    },
    a: {
      en: "There's no formal MOE appeal process for DSA rejection. Each school's panel decision is final for that cycle. Your child can re-apply through PSLE Posting and S1 Appeal (which is a separate, post-PSLE mechanism for affiliated or sibling-link schools). The next DSA opportunity is DSA-JC at the end of Sec 4 / Sec 5.",
      zh: "MOE 没有正式的 DSA 拒绝上诉机制。每所学校的评审决定在当年是最终的。孩子可以通过 PSLE 派位 + S1 Appeal（PSLE 后独立机制 · 适用于校友/兄弟姐妹关系校）重新申请。下次 DSA 机会是中四/中五结束的 DSA-JC。",
      ms: "Tiada proses rayuan rasmi untuk penolakan DSA.",
      ta: "DSA நிராகரிப்புக்கு முறையான MOE மேல்முறையீடு செயல்முறை இல்லை.",
    },
  },
];
