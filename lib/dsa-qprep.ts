// DSA Interview Q&A Prep — full content data
// Used by: components/DsaInterviewPageBody.tsx (Q&A Prep tab)
// Voice rules: short sentences (≤15 words), action verbs, P6-friendly vocabulary,
// every card has a concrete Singapore/DSA-context example.

export type LocalizedText = {
  en: string;
  zh: string;
  ms: string;
  ta: string;
};

export type QPrepCard = {
  num: string;
  title: LocalizedText;
  body: LocalizedText;
  tryThis?: LocalizedText;
  avoid?: LocalizedText;
};

export type QPrepSectionId = "prepare" | "practice" | "parents" | "in-the-moment";

export type QPrepSection = {
  id: QPrepSectionId;
  iconName: "ClipboardList" | "Mic" | "Users" | "Target";
  navLabel: LocalizedText;
  heading: LocalizedText;
  intro: LocalizedText;
  timing: LocalizedText;
  closer: LocalizedText;
  cards: QPrepCard[];
};

// ── HOOK ─────────────────────────────────────────────────────────────────────

export const Q_PREP_HOOK: LocalizedText = {
  en: "The DSA prep most parents overlook: the interview itself.\n— Because no one thinks 'talking' is something you train.",
  zh: "最容易被忽略的 DSA 准备项：面试问答。\n——因为没人觉得「说话」还要练。",
  ms: "Persediaan DSA yang paling sering diabaikan oleh ibu bapa: temuduga itu sendiri.\n— Kerana tiada siapa fikir 'bercakap' adalah sesuatu yang perlu dilatih.",
  ta: "பெற்றோர் பெரும்பாலும் தவறவிடும் DSA தயாரிப்பு: நேர்காணல்.\n— ஏனெனில் 'பேசுவது' பயிற்சி தேவை என யாரும் நினைப்பதில்லை.",
};

// ── 5 MINDSET LINES (top of tab, big-display row) ────────────────────────────

export const Q_PREP_MINDSET: LocalizedText[] = [
  {
    en: "Authenticity beats perfection",
    zh: "真诚 > 完美",
    ms: "Ketulusan mengatasi kesempurnaan",
    ta: "உண்மை > முழுமை",
  },
  {
    en: "Thinking beats right answers",
    zh: "思考过程 > 标准答案",
    ms: "Pemikiran mengatasi jawapan betul",
    ta: "சிந்தனை > சரியான பதில்",
  },
  {
    en: "Listen fully before you speak",
    zh: "听完题再说",
    ms: "Dengar habis sebelum bercakap",
    ta: "முழுமையாக கேட்ட பின் பேசுங்கள்",
  },
  {
    en: "Match your words with your actions",
    zh: "言行一致",
    ms: "Padankan kata-kata dengan tindakan",
    ta: "சொல்லும் செயலும் ஒன்றாக",
  },
  {
    en: "It's a conversation, not a test",
    zh: "这是对话，不是考试",
    ms: "Ini perbualan, bukan ujian",
    ta: "இது உரையாடல், தேர்வு அல்ல",
  },
];

// ── SECTIONS ─────────────────────────────────────────────────────────────────

export const Q_PREP_SECTIONS: QPrepSection[] = [
  // ════════════════════════════════════════════════════════════════════════
  // SECTION 1 — PREPARE
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "prepare",
    iconName: "ClipboardList",
    navLabel: {
      en: "Prepare",
      zh: "准备",
      ms: "Sediakan",
      ta: "தயாரிப்பு",
    },
    heading: {
      en: "What to Prepare",
      zh: "需要准备的内容",
      ms: "Apa Perlu Disediakan",
      ta: "என்ன தயாரிக்க வேண்டும்",
    },
    intro: {
      en: "Eight things to lock in before practice begins. Stories, frameworks, and what NOT to do.",
      zh: "练习开始前需要先搞定的 8 件事——故事储备、回答框架，以及不要做什么。",
      ms: "Lapan perkara yang perlu disediakan sebelum latihan bermula — cerita, rangka jawapan, dan apa yang TIDAK perlu dilakukan.",
      ta: "பயிற்சி தொடங்கும் முன் தயாராக வேண்டிய 8 விஷயங்கள் — கதைகள், கட்டமைப்பு, மற்றும் என்ன செய்யக்கூடாது.",
    },
    timing: {
      en: "Start right after application closes",
      zh: "报名结束后立刻开始",
      ms: "Mula sebaik sahaja pendaftaran ditutup",
      ta: "விண்ணப்பம் முடிந்த உடனேயே தொடங்குங்கள்",
    },
    closer: {
      en: "Prepare to the point where you can put your script away — then talk like it's the first time you've thought of it.",
      zh: "准备到能脱稿，但讲起来像第一次想到。",
      ms: "Bersedia sehingga anda boleh ketepikan skrip — kemudian bercakap seolah-olah ini kali pertama anda memikirkannya.",
      ta: "உங்கள் ஸ்கிரிப்டை விலக்கி வைக்கக்கூடிய அளவுக்கு தயாராகுங்கள் — பின் முதல் முறை யோசிப்பது போல் பேசுங்கள்.",
    },
    cards: [
      {
        num: "01",
        title: {
          en: "Build 5 core stories",
          zh: "准备 5 个核心故事",
          ms: "Bina 5 cerita teras",
          ta: "5 முக்கிய கதைகளை உருவாக்குங்கள்",
        },
        body: {
          en: "Build five stories from real experience — one achievement, one failure, one turning point, one time you helped someone, one thing you learned. Each story should run 1–2 minutes spoken aloud. These five become building blocks that adapt to any question: the same basketball story can answer 'tell me about teamwork', 'describe a setback', or 'what did you learn last year' — just by starting from a different beat. Five prepared stories cover roughly 80% of the questions a DSA interviewer will throw at a P6 student.",
          zh: "准备 5 个真实经历的故事——一次成就、一次失败、一次转折、一次帮助别人、一件学到的事。每个故事讲出来要在 1-2 分钟之内。这 5 个故事是回答任何问题的素材库：同一个篮球故事，从不同节点开始讲，就可以回答「讲一次团队合作」、「讲一次失败」、「去年学到了什么」三种完全不同的问题。准备好 5 个故事，能覆盖 P6 面试官 80% 的提问。",
          ms: "Bina lima cerita dari pengalaman sebenar — satu kejayaan, satu kegagalan, satu titik perubahan, satu kali bantu orang, satu pengajaran. Setiap cerita patut ambil masa 1-2 minit untuk diceritakan. Lima cerita ini jadi blok bangunan yang boleh disesuaikan untuk sebarang soalan: cerita bola keranjang yang sama boleh jawab 'ceritakan tentang kerja berpasukan', 'gambarkan kegagalan', atau 'apa yang anda belajar tahun lepas' — cuma mula dari momen yang berbeza. Lima cerita yang disediakan meliputi kira-kira 80% soalan yang penemuduga DSA akan tanya pelajar P6.",
          ta: "உண்மையான அனுபவத்திலிருந்து ஐந்து கதைகளை உருவாக்குங்கள் — ஒரு வெற்றி, ஒரு தோல்வி, ஒரு திருப்பம், ஒருவருக்கு உதவிய தருணம், ஒரு கற்றுக்கொண்ட பாடம். ஒவ்வொரு கதையும் சத்தமாக சொல்லும்போது 1-2 நிமிடம் இருக்க வேண்டும். இந்த ஐந்து கதைகள் எந்த கேள்விக்கும் ஏற்ற கட்டுமான தொகுதிகளாக மாறுகின்றன: ஒரே கூடைப்பந்து கதையை வெவ்வேறு தருணங்களிலிருந்து தொடங்கி 'குழுப்பணி பற்றி சொல்லுங்கள்', 'தோல்வியை விவரிக்கவும்', 'கடந்த ஆண்டு கற்றுக்கொண்டது' போன்ற மூன்று வெவ்வேறு கேள்விகளுக்கு பதிலளிக்க முடியும். தயாரிக்கப்பட்ட 5 கதைகள் DSA நேர்காணலர் P6 மாணவரிடம் கேட்கும் சுமார் 80% கேள்விகளை உள்ளடக்கும்.",
        },
        tryThis: {
          en: "Example for an SI applicant: 'I noticed my grandma struggling with iPad video calls. I made her a picture-card cheat sheet with 4 steps. She used it daily for 3 months.' That's a 30-second story with situation (the problem), action (what you did), and result (the impact).\n\nTo draft your own: think of a moment from the last 12 months where you did something — anything — that mattered to one specific person. Write it in three lines, one per beat. If it doesn't fit in three lines, the story is still too vague. Cut until it does. Then test it on a parent: if they ask 'what happened next?' your story is too short; if they look bored, it's too long.",
          zh: "Social Innovation 申请者举例：「我发现奶奶不会用 iPad 视频通话。我画了 4 步图卡贴在 iPad 背面。她每天用了 3 个月。」——30 秒讲完，有场景（问题）、动作（你做了什么）、结果（带来的影响）。\n\n自己写法：回想过去 12 个月里，你为某个具体的人做过的某件具体的事（不论大小）。用三行写下来，一行一个节点。如果三行写不完，故事还太模糊，继续删到三行能装下。然后讲给父母听：如果他们问「然后呢？」说明太短；如果他们走神了，说明太长。",
          ms: "Contoh untuk pemohon Social Innovation: 'Saya perasan nenek susah guna panggilan video iPad. Saya buat helaian gambar 4 langkah untuknya. Dia gunakannya setiap hari selama 3 bulan.' Cerita 30 saat dengan situasi (masalah), tindakan (apa anda buat), dan hasil (kesannya).\n\nUntuk draf cerita anda: fikirkan momen dalam 12 bulan lepas di mana anda buat sesuatu — apa-apa — yang bermakna kepada seseorang khusus. Tulis dalam 3 baris, satu baris satu momen. Kalau tak muat 3 baris, cerita masih kabur. Potong sampai muat. Kemudian uji kepada ibu bapa: kalau mereka tanya 'lepas tu apa jadi?', cerita terlalu pendek; kalau mereka nampak bosan, terlalu panjang.",
          ta: "SI விண்ணப்பதாரருக்கு உதாரணம்: 'என் பாட்டிக்கு iPad வீடியோ அழைப்பு கடினம் என்று கவனித்தேன். 4 படிகளுடன் படக் கார்டு செய்து கொடுத்தேன். 3 மாதங்கள் தினமும் பயன்படுத்தினார்.' 30 விநாடி கதை — சூழல் (பிரச்சினை), செயல் (என்ன செய்தீர்கள்), முடிவு (தாக்கம்).\n\nஉங்கள் கதையை வரைய: கடந்த 12 மாதங்களில் ஒரு குறிப்பிட்ட நபருக்கு முக்கியமான ஏதேனும் ஒன்றை — எதையும் — செய்த தருணத்தை நினையுங்கள். மூன்று வரிகளில் எழுதவும், ஒரு வரிக்கு ஒரு தருணம். மூன்று வரிகளில் பொருந்தவில்லை என்றால், கதை இன்னும் தெளிவில்லை. பொருந்தும் வரை வெட்டுங்கள். பின் பெற்றோரிடம் சோதிக்கவும்: 'அதன் பிறகு என்ன?' என்று கேட்டால் கதை மிகச் சிறியது; சலித்துப் போனால் மிக நீளம்.",
        },
        avoid: {
          en: "Don't memorise the story word-for-word. Word-for-word memorisation collapses the moment you forget one phrase — your eyes drift up to the ceiling searching for it, which every interviewer recognises immediately as recitation. Memorise the beats: the situation, what you did, what changed. Recall is flexible and survives interruption; recitation is fragile and dies on the first unexpected follow-up question.",
          zh: "不要把故事一个字一个字背下来。背完整句子的方式，一旦忘了一个词就会整段崩溃——你的眼神会不自觉飘向天花板找词，评委一眼就能认出这是「在背」。要记住节点：场景、你做了什么、改变了什么。回忆是有弹性的，被打断也能续上；背诵是脆的，遇到一个意料外追问就垮。",
          ms: "Jangan hafal cerita ayat demi ayat. Hafalan ayat demi ayat runtuh sebaik anda lupa satu frasa — mata anda akan naik ke siling mencari, dan setiap penemuduga akan kenal itu sebagai hafalan. Hafal momen utama: situasi, apa anda buat, apa berubah. Imbas semula fleksibel dan bertahan walaupun terganggu; bacaan hafalan rapuh dan mati pada soalan susulan pertama yang tak dijangka.",
          ta: "கதையை வார்த்தைக்கு வார்த்தை மனப்பாடம் செய்யாதீர்கள். வார்த்தைக்கு வார்த்தை மனப்பாடம் ஒரு சொற்றொடரை மறந்த உடனேயே சரிந்துவிடும் — உங்கள் கண்கள் கூரையை நோக்கி தேடிச் செல்லும், அதை எந்த நேர்காணலாளரும் உடனடியாக ஒப்பித்தலாக அடையாளம் காண்பார். முக்கிய தருணங்களை மனப்பாடம் செய்யுங்கள்: சூழல், என்ன செய்தீர்கள், என்ன மாறியது. நினைவுகூரல் நெகிழ்வானது, இடையூறை தாங்கும்; ஒப்புவித்தல் உடையக்கூடியது, முதல் எதிர்பாராத கேள்வியில் இறக்கும்.",
        },
      },
      {
        num: "02",
        title: {
          en: "Define one sentence the interviewer will remember",
          zh: "用一句话定义「你是谁」",
          ms: "Tentukan satu ayat yang penemuduga akan ingat",
          ta: "நேர்காணலாளர் நினைவில் வைத்திருக்கும் ஒரு வாக்கியத்தை வரையறுக்கவும்",
        },
        body: {
          en: "After the interview ends, what one thing do you want the interviewer to remember about you? That's your core message — a single label they could use to describe you 30 minutes later when they're discussing candidates with their colleagues. Weave it through your answers in 3 different ways: stated directly, shown through a story, and confirmed by a small detail. Interviewers see 30–50 applicants in a round. The ones they remember have one clear hook, not five vague impressions.",
          zh: "面试结束后，你希望评委记得你的哪一件事？那就是你的「核心信息」——一个标签，让评委 30 分钟后跟同事讨论候选人时，能用这个标签描述你。让这个核心信息以 3 种方式贯穿你的回答：直接说出来一次，用故事展示一次，用一个小细节再次印证一次。评委一轮要看 30-50 个候选人。被记住的那个，都是有一个清晰的钩子，而不是 5 个模糊印象。",
          ms: "Selepas temuduga berakhir, apa satu perkara yang anda mahu penemuduga ingat tentang anda? Itulah mesej teras anda — satu label yang mereka boleh guna untuk gambarkan anda 30 minit kemudian semasa berbincang dengan rakan sekerja. Selitkan ia dalam jawapan anda dalam 3 cara: nyatakan terus, tunjukkan melalui cerita, dan sahkan dengan butiran kecil. Penemuduga lihat 30–50 pemohon dalam satu pusingan. Yang mereka ingat adalah yang ada satu pengait jelas, bukan lima kesan kabur.",
          ta: "நேர்காணல் முடிந்த பிறகு, உங்களைப் பற்றி நேர்காணலாளர் என்ன ஒரு விஷயத்தை நினைவில் கொள்ள வேண்டும்? அதுவே உங்கள் முக்கிய செய்தி — 30 நிமிடங்களுக்குப் பிறகு சக ஊழியர்களுடன் பேசும்போது உங்களை விவரிக்க பயன்படுத்தும் ஒரு லேபிள். உங்கள் பதில்களில் 3 வழிகளில் இதை இணைக்கவும்: நேரடியாக கூறுங்கள், ஒரு கதையின் மூலம் காட்டுங்கள், ஒரு சிறிய விவரத்தால் உறுதிப்படுத்துங்கள். ஒரு சுற்றில் நேர்காணலாளர்கள் 30-50 விண்ணப்பதாரர்களைப் பார்க்கின்றனர். அவர்கள் நினைவில் வைப்பவர்கள் ஒரு தெளிவான கொக்கி உள்ளவர்கள், ஐந்து தெளிவற்ற முத்திரைகள் அல்ல.",
        },
        tryThis: {
          en: "Example: 'I'm the kind of student who fixes things instead of complaining.' Now every story you tell should support this — your basketball story shows you redesigning a play after losing, your school story shows you patching up a project that wasn't working.\n\nTo find your own core message: ask three people who know you well to describe you in one sentence. Look for the word that appears in at least two of their descriptions. That word is the seed. Build your core message around it.",
          zh: "举例：「我是那种遇到问题先动手修、而不是先抱怨的学生。」——之后所有故事都要支撑这句话：你的篮球故事显示你在输球后重新设计战术，你的学校故事显示你把一个失败的项目修补好。\n\n找自己的核心信息：让 3 个了解你的人用一句话描述你。找出至少两个人描述里都出现的词。那个词就是种子，围绕它建你的核心信息。",
          ms: "Contoh: 'Saya pelajar yang membaiki masalah daripada merungut.' Setiap cerita anda perlu menyokong ini — cerita bola keranjang anda menunjukkan anda merangka semula taktik selepas kalah, cerita sekolah anda menunjukkan anda membaiki projek yang gagal.\n\nUntuk cari mesej teras anda: minta 3 orang yang kenal anda gambarkan anda dalam satu ayat. Cari perkataan yang muncul dalam sekurang-kurangnya dua daripada huraian mereka. Perkataan itu adalah benih. Bina mesej teras anda di sekelilingnya.",
          ta: "உதாரணம்: 'புகார் செய்வதற்குப் பதிலாக சரிசெய்யும் மாணவன் நான்.' உங்கள் ஒவ்வொரு கதையும் இதை ஆதரிக்க வேண்டும் — உங்கள் கூடைப்பந்து கதை தோல்விக்குப் பிறகு உத்தியை மாற்றி அமைத்ததைக் காட்டுகிறது, உங்கள் பள்ளி கதை தோல்வியடைந்த ஒரு திட்டத்தை சரிசெய்ததைக் காட்டுகிறது.\n\nஉங்கள் முக்கிய செய்தியை கண்டுபிடிக்க: உங்களை நன்கு அறிந்த 3 பேரிடம் ஒரு வாக்கியத்தில் உங்களை விவரிக்க கேளுங்கள். குறைந்தது இரண்டு விவரிப்புகளிலும் தோன்றும் வார்த்தையை கண்டுபிடிக்கவும். அந்த வார்த்தைதான் விதை. அதைச் சுற்றி உங்கள் முக்கிய செய்தியை உருவாக்குங்கள்.",
        },
        avoid: {
          en: "Don't say 'I'm hardworking, smart, and a team player.' Three core messages = no core message. The interviewer's memory will retain at most one. If you list three, they'll remember none of them clearly. Pick ONE — even if you feel you're 'leaving out' your other strengths. The other strengths will come through naturally in your stories without you naming them.",
          zh: "不要说「我勤奋、聪明、有团队精神」。三个核心 = 没有核心。评委的记忆最多保留一个。你列三个，他们一个都记不清。只挑一个——哪怕你觉得「漏掉」了其他优点。其他优点会在你的故事里自然显现，不需要你点名。",
          ms: "Jangan kata 'Saya rajin, bijak, dan pemain pasukan.' Tiga mesej teras = tiada mesej teras. Memori penemuduga hanya simpan paling banyak satu. Kalau anda senaraikan tiga, mereka takkan ingat satu pun dengan jelas. Pilih SATU — walaupun anda rasa anda 'tinggalkan' kekuatan lain. Kekuatan lain akan muncul semula jadi melalui cerita anda tanpa anda menamakan ia.",
          ta: "'நான் கடினமாக உழைப்பவன், புத்திசாலி, குழு உறுப்பினன்' என்று சொல்லாதீர்கள். மூன்று முக்கிய செய்திகள் = முக்கிய செய்தி இல்லை. நேர்காணலாளரின் நினைவு ஒரே ஒன்றை மட்டுமே வைத்திருக்கும். மூன்றை பட்டியலிட்டால், அவர்கள் எதையும் தெளிவாக நினைவில் கொள்ள மாட்டார்கள். ஒன்றை மட்டும் தேர்ந்தெடுக்கவும் — மற்ற பலங்களை 'விட்டுவிடுகிறேன்' என்று உணர்ந்தாலும். மற்ற பலங்கள் நீங்கள் பெயரிடாமலேயே உங்கள் கதைகளில் இயற்கையாக வெளிப்படும்.",
        },
      },
      {
        num: "03",
        title: {
          en: "Use STAR for 'tell me about a time...' questions",
          zh: "用 STAR 框架回答「请讲一次……」类问题",
          ms: "Guna STAR untuk soalan 'ceritakan satu kali...'",
          ta: "'ஒரு முறையை சொல்லுங்கள்' கேள்விகளுக்கு STAR பயன்படுத்தவும்",
        },
        body: {
          en: "Situation (what was happening) → Task (your specific job) → Action (what you did) → Result (what changed). Four beats, 1–2 sentences each. STAR is used by interviewers worldwide because it forces the speaker to be concrete instead of philosophical. Whenever a question starts with 'tell me about a time...' or 'describe a situation when...', this framework gives you the exact structure to follow without thinking about structure.",
          zh: "Situation 情境 → Task 任务 → Action 行动 → Result 结果。4 个节点，每个 1-2 句话。STAR 是全球面试官都在用的框架，因为它强迫说话的人讲具体的事，而不是讲哲学。任何题目以「请讲一次……」或「描述一个……的场景」开头，这个框架就是现成的回答结构，让你不用思考结构本身。",
          ms: "Situation (apa berlaku) → Task (tugas khusus anda) → Action (apa anda buat) → Result (apa berubah). Empat bahagian, 1-2 ayat setiap satu. STAR digunakan penemuduga di seluruh dunia kerana ia paksa penutur untuk konkrit, bukan falsafah. Bila soalan mula dengan 'ceritakan satu kali...' atau 'gambarkan situasi bila...', rangka ini beri anda struktur sedia ada tanpa perlu fikirkan struktur.",
          ta: "Situation (என்ன நடந்தது) → Task (உங்கள் குறிப்பிட்ட வேலை) → Action (என்ன செய்தீர்கள்) → Result (என்ன மாறியது). நான்கு படிகள், ஒவ்வொன்றும் 1-2 வாக்கியங்கள். STAR உலகெங்கும் பயன்படுகிறது ஏனெனில் இது பேசுபவரை தத்துவத்திற்கு பதிலாக உறுதியானதாக இருக்க கட்டாயப்படுத்துகிறது. 'ஒரு முறையை சொல்லுங்கள்...' அல்லது 'ஒரு சூழ்நிலையை விவரிக்கவும்...' என்று கேள்வி தொடங்கும்போது, கட்டமைப்பை பற்றி யோசிக்க வேண்டாமல், இந்த கட்டமைப்பு உங்களுக்கு கட்டமைப்பை வழங்குகிறது.",
        },
        tryThis: {
          en: "Q: 'Tell me about a time you led a team.'\nA: 'Last year, P5 inter-class basketball (Situation). I was captain (Task). I noticed two teammates never passed to each other, so I paired them in drills for two weeks (Action). We won 3 of 4 matches and those two ended up as our top assist pair (Result).'\n\nPractice tip: write all 5 of your stories in this exact 4-line format. Stick them on the back of your wardrobe. Read once a week. After 4 weeks the structure becomes automatic — you stop thinking 'Situation, Task, Action, Result' and just start telling the story in that shape.",
          zh: "问：「讲一次你带队的经历。」\n答：「去年 P5 班际篮球赛（情境）。我是队长（任务）。我发现两个队友从不互相传球，就在两周的训练里把他们配对（行动）。我们 4 场赢了 3 场，而且这两人最后变成全队助攻王组合（结果）。」\n\n练习建议：把你 5 个故事都按这个 4 行格式写下来，贴在衣柜背面。每周读一次。4 周后结构会变成本能——你不再想着「情境、任务、行动、结果」，故事自动按这个形状讲出来。",
          ms: "S: 'Ceritakan satu kali anda pimpin pasukan.'\nJ: 'Tahun lepas, bola keranjang antara kelas P5 (Situation). Saya kapten (Task). Saya perasan dua rakan tidak pernah hantar bola sesama mereka, jadi saya pasangkan mereka dalam latihan selama 2 minggu (Action). Kami menang 3 dari 4 perlawanan dan dua orang itu jadi pasangan assist terbaik (Result).'\n\nTip latihan: tulis kelima-lima cerita anda dalam format 4 baris ini. Lekat di belakang almari. Baca seminggu sekali. Selepas 4 minggu, struktur jadi automatik — anda berhenti fikir 'Situation, Task, Action, Result' dan terus mula cerita dalam bentuk itu.",
          ta: "கே: 'குழுவை வழிநடத்திய ஒரு தருணத்தைப் பற்றி சொல்லுங்கள்.'\nப: 'கடந்த ஆண்டு P5 வகுப்பினரிடையே கூடைப்பந்து (Situation). நான் கேப்டன் (Task). இரண்டு வீரர்கள் ஒருவருக்கொருவர் பந்தை அனுப்பவில்லை என்று கவனித்து, 2 வாரங்கள் பயிற்சியில் இணைத்தேன் (Action). 4 போட்டிகளில் 3 வென்றோம், அவர்கள் இருவரும் அதிக assist ஜோடியாக மாறினர் (Result).'\n\nபயிற்சி குறிப்பு: உங்கள் 5 கதைகளையும் இந்த 4-வரி வடிவத்தில் எழுதவும். அலமாரியின் பின்புறத்தில் ஒட்டவும். வாரத்திற்கு ஒருமுறை படியுங்கள். 4 வாரங்களில் கட்டமைப்பு தானாகவே வரும் — 'Situation, Task, Action, Result' பற்றி யோசிப்பதை நிறுத்தி, கதையை அந்த வடிவத்தில் சொல்லத் தொடங்குவீர்கள்.",
        },
        avoid: {
          en: "Don't skip the Result. 'And then we just kept playing' = no impact = forgettable. Without a Result, your story is just an anecdote — and anecdotes don't move interviewers. The Result doesn't need to be dramatic ('we won the championship'); even a small concrete change works ('two teammates who never spoke before now sat together at lunch'). The point is to show that what you did changed something.",
          zh: "不要漏掉「结果」。「然后我们就继续打」= 没有影响力 = 不被记住。没有结果的故事只是「闲聊」——而闲聊打动不了评委。结果不一定要轰轰烈烈（「我们拿了冠军」）；一个具体的小改变也行（「那两个原本不说话的队友，后来午餐都坐一起了」）。重点是让评委看到：你做的事，带来了改变。",
          ms: "Jangan abaikan Result. 'Kemudian kami terus main' = tiada kesan = tidak diingati. Tanpa Result, cerita anda hanya anekdot — dan anekdot tak menggerakkan penemuduga. Result tak perlu dramatik ('kami menang kejohanan'); perubahan kecil yang konkrit pun jadi ('dua rakan yang tak pernah cakap dulu, sekarang duduk bersama waktu makan tengah hari'). Maksudnya tunjuk bahawa apa anda buat mengubah sesuatu.",
          ta: "Result-ஐ விட்டுவிடாதீர்கள். 'பின் தொடர்ந்து விளையாடினோம்' = தாக்கம் இல்லை = நினைவில் இருக்காது. Result இல்லாமல், உங்கள் கதை வெறும் கதை மட்டுமே — கதைகள் நேர்காணலாளர்களை நகர்த்த மாட்டாது. Result நாடகீயமாக இருக்க வேண்டியதில்லை ('நாங்கள் சாம்பியன் ஆனோம்'); ஒரு சிறிய உறுதியான மாற்றமும் போதும் ('முன்பு பேசாத இரு வீரர்கள் இப்போது மதிய உணவில் ஒன்றாக அமர்கிறார்கள்'). கருத்து என்னவென்றால், நீங்கள் செய்தது ஒன்றை மாற்றியது என்பதைக் காட்டுவதே.",
        },
      },
      {
        num: "04",
        title: {
          en: "Use PREP for 'what do you think...' questions",
          zh: "用 PREP 框架回答「你怎么看……」类问题",
          ms: "Guna PREP untuk soalan 'apa pendapat anda...'",
          ta: "'நீங்கள் என்ன நினைக்கிறீர்கள்' கேள்விகளுக்கு PREP பயன்படுத்தவும்",
        },
        body: {
          en: "Point (your answer in 1 sentence) → Reason (why this is true) → Example (concrete moment) → Point (restate, slightly different words). Use this for opinion questions ('what do you think...') and motivation questions ('why this school?'). PREP keeps you from rambling: 4 beats, ~45 seconds total. Most kids fail opinion questions by starting with 'it depends' and never landing on a stand. PREP forces you to land first, then explain.",
          zh: "Point 观点（一句话回答）→ Reason 理由（为什么这样想）→ Example 例子（具体时刻）→ Point 重申（换个说法再说一次）。用于「你认为……」和「为什么你……」类问题。PREP 让你不啰嗦：4 个节点，总共约 45 秒。多数孩子答观点题失败，是因为开头说「要看情况」然后从来没落地。PREP 强迫你先落地，再解释。",
          ms: "Point (jawapan anda dalam 1 ayat) → Reason (kenapa ini benar) → Example (momen konkrit) → Point (ulang, dengan kata-kata sedikit berbeza). Untuk soalan pendapat ('apa pendapat anda...') dan soalan motivasi ('kenapa sekolah ini?'). PREP halang anda dari berleter: 4 bahagian, ~45 saat keseluruhan. Kebanyakan anak gagal soalan pendapat sebab mula dengan 'bergantung' dan tak pernah mendarat pada pendirian. PREP paksa anda mendarat dahulu, kemudian terangkan.",
          ta: "Point (உங்கள் பதில் 1 வாக்கியத்தில்) → Reason (ஏன் இது உண்மை) → Example (உறுதியான தருணம்) → Point (சற்று வேறு வார்த்தைகளில் மீண்டும்). கருத்துக் கேள்விகளுக்கும் ('நீங்கள் என்ன நினைக்கிறீர்கள்...') உந்துதல் கேள்விகளுக்கும் ('ஏன் இந்த பள்ளி?') பயன்படுத்தவும். PREP உங்களை அலசலிலிருந்து தடுக்கிறது: 4 படிகள், மொத்தம் ~45 விநாடிகள். பெரும்பாலான குழந்தைகள் கருத்துக் கேள்விகளில் தோல்வியடைகின்றனர், ஏனெனில் 'பொறுத்திருக்கும்' என்று தொடங்கி ஒரு நிலைப்பாட்டில் இறங்காமல் விடுகிறார்கள். PREP முதலில் இறங்கச் செய்கிறது, பிறகு விளக்குகிறது.",
        },
        tryThis: {
          en: "Q: 'What makes a good team?'\nA: 'A good team trusts each other (Point). Trust lets people take risks without fear of being blamed (Reason). When my teammate missed a shot in our last match, no one criticised him, and he scored on the next play (Example). That's what trust actually does on a team (Point).'\n\nSwap-in template for any opinion question: 'I think [X]. The reason is [Y]. For example, when [situation], I saw [outcome]. That's why [X, restated].' Memorise that skeleton; fill in the blanks live.",
          zh: "问：「什么是好团队？」\n答：「好团队互相信任（观点）。信任让人敢冒险，不怕被怪罪（理由）。上次比赛队友射门没进，没人责备他，下一回合他就进球了（例子）。这就是信任在团队里真正起的作用（重申）。」\n\n万能模版（任何观点题都能套）：「我认为[X]。理由是[Y]。比如有一次[场景]，我看到[结果]。所以[X，换个说法]。」把这个骨架背下来，现场填空。",
          ms: "S: 'Apa buatkan pasukan yang baik?'\nJ: 'Pasukan baik saling percaya (Point). Kepercayaan benarkan orang ambil risiko tanpa takut disalahkan (Reason). Bila rakan saya tersilap dalam perlawanan lepas, tiada siapa kritik, dan dia jaringkan pada pusingan berikut (Example). Itulah kuasa kepercayaan sebenar dalam pasukan (Point).'\n\nTemplat boleh diganti untuk sebarang soalan pendapat: 'Saya rasa [X]. Sebabnya [Y]. Contohnya, semasa [situasi], saya nampak [hasil]. Itulah sebab [X, ulang].' Hafal kerangka itu; isi tempat kosong secara langsung.",
          ta: "கே: 'நல்ல குழு என்றால் என்ன?'\nப: 'நல்ல குழு ஒருவரை ஒருவர் நம்புகிறது (Point). நம்பிக்கை, குற்றம் சாட்டப்படும் அச்சமின்றி ஆபத்துகளை எடுக்க உதவுகிறது (Reason). கடைசி போட்டியில் என் தோழன் தவறிய போது யாரும் விமர்சிக்கவில்லை, அடுத்த சுற்றில் கோல் அடித்தார் (Example). அதுவே ஒரு குழுவில் நம்பிக்கை உண்மையில் செய்வது (Point).'\n\nஎந்த கருத்துக் கேள்விக்கும் பயன்படுத்தும் வார்ப்புரு: 'நான் [X] என்று நினைக்கிறேன். காரணம் [Y]. உதாரணமாக, [சூழ்நிலை] போது, நான் [விளைவு] பார்த்தேன். அதனால்தான் [X, மீண்டும் சொல்லப்பட்டது].' அந்த எலும்புக்கூட்டை மனப்பாடம் செய்யுங்கள்; நேரடியாக இடைவெளிகளை நிரப்புங்கள்.",
        },
        avoid: {
          en: "Don't start with 'I think it depends...' — sounds like you have no opinion and are buying time. Take a side, even if you're not 100% sure. A clear opinion you can defend with one example beats a 'balanced' non-answer every time. If you genuinely don't know, say 'I haven't thought about this before, but my first reaction is [X]' — that's still a stand, just an honest one.",
          zh: "不要开头说「我觉得要看情况……」——听起来像没立场、像在拖时间。要表明立场，哪怕你不是 100% 确定。一个能用一个例子撑住的清晰观点，永远胜过一个「平衡」的不回答。如果真的不知道，可以说「这件事我之前没想过，但我的第一反应是[X]」——这仍然是立场，只是一个诚实的立场。",
          ms: "Jangan mula dengan 'Saya rasa bergantung...' — bunyi macam tiada pendirian dan tunggu masa. Ambil sikap, walaupun anda tak 100% pasti. Pendapat jelas yang anda boleh pertahankan dengan satu contoh mengatasi jawapan 'seimbang' yang bukan jawapan. Kalau anda benar-benar tak tahu, sebut 'Saya belum fikir tentang ini, tapi reaksi pertama saya adalah [X]' — itu masih pendirian, cuma yang jujur.",
          ta: "'என்ன என்று பொறுத்திருக்கிறது...' என்று தொடங்காதீர்கள் — கருத்து இல்லாதது போலவும் நேரம் வாங்குவது போலவும் ஒலிக்கும். 100% உறுதியாக இல்லாவிட்டாலும் ஒரு நிலைப்பாட்டை எடுங்கள். ஒரு உதாரணத்துடன் பாதுகாக்கக்கூடிய தெளிவான கருத்து எப்போதும் 'சமநிலை' அல்லாத பதிலை வெல்லும். உண்மையிலேயே தெரியவில்லை என்றால், 'இதைப் பற்றி நான் முன்பு யோசிக்கவில்லை, ஆனால் என் முதல் எதிர்வினை [X]' என்று சொல்லுங்கள் — அதுவும் ஒரு நிலைப்பாடுதான், ஒரு நேர்மையானது.",
        },
      },
      {
        num: "05",
        title: {
          en: "Anticipate three question types",
          zh: "预想三种问题类型",
          ms: "Jangkakan tiga jenis soalan",
          ta: "மூன்று வகை கேள்விகளை எதிர்பாருங்கள்",
        },
        body: {
          en: "Most DSA interviews mix three question types: (1) about you — self-intro, personality, strengths and weaknesses; (2) about motivation — why this school, why this talent area, why now; (3) about behaviour — how you've handled real situations in the past. Prep at least 2 stories per type so you have a backup if your first one feels off in the moment. When you know the type a question belongs to, you already know which corner of your story bank to reach into — and that's where speed and calm come from.",
          zh: "DSA 面试通常混合 3 类问题：（1）关于你——自我介绍、性格、优势与不足；（2）关于动机——为什么这所学校、为什么这个领域、为什么现在；（3）关于行为——你过去如何应对真实场景。每类至少准备 2 个故事，万一第一个临场感觉不对，还有备用。当你认出题目属于哪一类，你就已经知道要从素材库哪个角落取故事——这就是「快」和「稳」的来源。",
          ms: "Kebanyakan temuduga DSA gabungkan tiga jenis soalan: (1) tentang anda — pengenalan diri, peribadi, kekuatan dan kelemahan; (2) tentang motivasi — kenapa sekolah ini, kenapa bidang ini, kenapa sekarang; (3) tentang tingkah laku — bagaimana anda kendalikan situasi sebenar dahulu. Sediakan sekurang-kurangnya 2 cerita setiap jenis supaya ada sandaran kalau yang pertama rasa tak kena. Bila anda kenal jenis soalan, anda sudah tahu sudut bank cerita mana nak capai — itulah punca laju dan tenang.",
          ta: "பெரும்பாலான DSA நேர்காணல்கள் மூன்று வகைகளைக் கலக்கின்றன: (1) உங்களைப் பற்றி — சுய அறிமுகம், ஆளுமை, பலம் மற்றும் பலவீனம்; (2) உந்துதல் — ஏன் இந்த பள்ளி, ஏன் இந்த துறை, ஏன் இப்போது; (3) நடத்தை — கடந்த காலத்தில் உண்மையான சூழ்நிலைகளை எப்படி கையாண்டீர்கள். ஒவ்வொரு வகைக்கும் குறைந்தது 2 கதைகள் தயார் செய்யுங்கள், முதலாவது சரியில்லை என்று உணர்ந்தால் காப்புப்பிரதி இருக்க. கேள்வியின் வகையை அறிந்தால், கதைச் சேமிப்பின் எந்த மூலையை அடைய வேண்டும் என்று உங்களுக்கு ஏற்கனவே தெரியும் — அதுவே வேகம் மற்றும் அமைதியின் ஆதாரம்.",
        },
        tryThis: {
          en: "Make a 3-column table. Column 1: every question you've heard or imagined. Column 2: which of the 3 types (About You / Motivation / Behaviour). Column 3: which of your 5 stories you'd use. After 3 weeks of adding to it, every type of question has multiple stories ready, and you can swap stories mid-answer if the first one feels weak.\n\nA simple weekly drill: Monday — your parent asks 3 'About You' questions. Wednesday — 3 'Motivation' questions. Friday — 3 'Behaviour' questions. After 4 weeks, no question type feels unfamiliar.",
          zh: "做一张 3 栏表。栏 1：你听过或想到的每一个问题。栏 2：属于 3 类中哪一类（关于你 / 动机 / 行为）。栏 3：用你 5 个故事里的哪一个。3 周积累下来，每类问题都有多个故事备选，你甚至可以在答到一半时换故事。\n\n一个简单的每周练习：周一——父母问你 3 个「关于你」的题；周三——3 个「动机」题；周五——3 个「行为」题。4 周之后，没有一类题让你感觉陌生。",
          ms: "Buat jadual 3 lajur. Lajur 1: setiap soalan yang anda dengar atau bayangkan. Lajur 2: jenis yang mana antara 3 (Tentang Anda / Motivasi / Tingkah Laku). Lajur 3: cerita mana antara 5 cerita anda. Selepas 3 minggu tambah, setiap jenis soalan ada beberapa cerita, dan anda boleh tukar cerita pertengahan jawapan kalau yang pertama terasa lemah.\n\nLatihan mingguan ringkas: Isnin — ibu bapa tanya 3 soalan 'Tentang Anda'. Rabu — 3 soalan 'Motivasi'. Jumaat — 3 soalan 'Tingkah Laku'. Selepas 4 minggu, tiada jenis soalan terasa asing.",
          ta: "3 நெடுவரிசை அட்டவணையை உருவாக்குங்கள். நெடு 1: நீங்கள் கேள்விப்பட்ட அல்லது கற்பனை செய்த ஒவ்வொரு கேள்வி. நெடு 2: 3 வகைகளில் எது (உங்களைப் பற்றி / உந்துதல் / நடத்தை). நெடு 3: உங்கள் 5 கதைகளில் எது பயன்படுத்துவீர்கள். 3 வாரங்களில் சேர்த்த பிறகு, ஒவ்வொரு வகை கேள்விக்கும் பல கதைகள் தயாராக உள்ளன, முதலாவது பலவீனமாக இருந்தால் பதிலின் நடுவில் கதைகளை மாற்றலாம்.\n\nஎளிய வாராந்திர பயிற்சி: திங்கள் — பெற்றோர் 3 'உங்களைப் பற்றி' கேள்விகள் கேட்கின்றனர். புதன் — 3 'உந்துதல்' கேள்விகள். வெள்ளி — 3 'நடத்தை' கேள்விகள். 4 வாரங்களுக்குப் பிறகு, எந்த கேள்வி வகையும் அந்நியமாக உணரப்படாது.",
        },
        avoid: {
          en: "Don't prep one perfect answer to one perfect question. The real question will be slightly different — phrased oddly, framed at an angle you didn't anticipate, or asked by a panel of two instead of one. You need flexible building blocks (stories) that you can angle differently depending on what's asked, not a rigid script that only fits one exact wording. Kids who prep one perfect answer freeze when the real question is even 10% different from their rehearsal.",
          zh: "不要针对一个完美问题准备一个完美答案。实际题目会略有不同——措辞古怪、角度出乎意料，或者由 2 个考官联合问而不是 1 个。你需要的是灵活的素材块（故事），根据题目角度变换讲法，而不是只能对应一种问法的死稿。准备完美答案的孩子，遇到比预想稍微偏离 10% 的题就会冻住。",
          ms: "Jangan sediakan satu jawapan sempurna untuk satu soalan sempurna. Soalan sebenar akan sedikit berbeza — diayatkan pelik, dirangka dari sudut tak dijangka, atau ditanya panel dua orang dan bukan satu. Anda perlu blok bangunan fleksibel (cerita) yang boleh dipusing ikut sudut soalan, bukan skrip ketat yang sesuai hanya satu kata-kata tepat. Anak yang sediakan satu jawapan sempurna akan beku bila soalan sebenar berbeza 10% dari rehearsal mereka.",
          ta: "ஒரு சரியான கேள்விக்கு ஒரு சரியான பதிலைத் தயாரிக்காதீர்கள். உண்மையான கேள்வி சற்று வேறுபடும் — விசித்திரமாக சொல்லப்படும், எதிர்பாராத கோணத்தில் கட்டமைக்கப்படும், அல்லது ஒருவருக்கு பதிலாக இருவர் கொண்ட குழுவால் கேட்கப்படும். கேட்கப்படுவதைப் பொறுத்து வெவ்வேறு கோணங்களில் பயன்படுத்தக்கூடிய நெகிழ்வான கட்டுமான தொகுதிகள் (கதைகள்) தேவை, ஒரே துல்லியமான வார்த்தைகளுக்கு மட்டுமே பொருந்தும் கடினமான ஸ்கிரிப்ட் அல்ல. ஒரு சரியான பதிலைத் தயாரிக்கும் குழந்தைகள் உண்மையான கேள்வி அவர்கள் ஒத்திகையிலிருந்து 10% மாறுபடும்போது உறைந்து போகின்றனர்.",
        },
      },
      {
        num: "06",
        title: {
          en: "Don't memorise scripts",
          zh: "不要背稿",
          ms: "Jangan hafal skrip",
          ta: "ஸ்கிரிப்ட்களை மனப்பாடம் செய்யாதீர்கள்",
        },
        body: {
          en: "Interviewers can hear memorised text within the first 10 seconds. The signals are obvious: eyes drift up to the ceiling looking for the next phrase, cadence becomes unnaturally even, any small interruption causes a freeze and a restart from the top. Memorise stories, not sentences. The story is what happened; the sentences are how you happen to phrase it on that particular day. Two different days = two slightly different phrasings — and that variation is what makes you sound real.",
          zh: "评委能在前 10 秒听出来你在背稿。信号很明显：眼神往天花板飘找下一句、语调变得不自然地平稳、被任何小打断都会卡住然后从头开始。要记住故事，不是记住句子。故事是发生了什么；句子只是你今天碰巧选的说法。不同的日子 = 略不同的措辞——这个变化就是让你听起来真实的原因。",
          ms: "Penemuduga dapat dengar teks dihafal dalam 10 saat pertama. Tandanya jelas: mata naik ke siling mencari frasa seterusnya, nada jadi terlalu rata, gangguan kecil sahaja buat beku dan mula semula dari atas. Hafal cerita, bukan ayat. Cerita adalah apa yang berlaku; ayat adalah bagaimana anda kebetulan ungkap pada hari itu. Dua hari berbeza = dua ungkapan sedikit berbeza — variasi itulah yang buatkan anda bunyi tulen.",
          ta: "மனப்பாடம் செய்த உரையை நேர்காணலாளர்கள் முதல் 10 விநாடிகளில் கேட்க முடியும். சமிக்ஞைகள் தெளிவாக உள்ளன: கண்கள் அடுத்த சொற்றொடரைத் தேடி கூரையை நோக்கி செல்கின்றன, தொனி இயற்கைக்கு மாறான சீரானதாக மாறுகிறது, எந்த சிறிய இடையூறும் உறைதலையும் மீண்டும் தொடக்கத்திலிருந்து தொடங்குதலையும் ஏற்படுத்துகிறது. கதைகளை மனப்பாடம் செய்யுங்கள், வாக்கியங்களை அல்ல. கதை என்பது நடந்தது; வாக்கியங்கள் என்பது அந்த குறிப்பிட்ட நாளில் நீங்கள் எப்படி வடிவமைத்தீர்கள் என்பது. வெவ்வேறு நாட்கள் = சற்று வேறுபட்ட சொற்றொடர்கள் — அந்த மாறுபாடுதான் உங்களை உண்மையானதாக ஒலிக்க வைக்கிறது.",
        },
        tryThis: {
          en: "Practise telling the same story 5 times in 5 different orders — start with the result ('We won 3 of 4 — let me tell you how...'), start with the failure ('I was about to quit until...'), start with the lesson ('I learned that...'), start with a description ('Two of my teammates never passed to each other...'), and start with a question ('Have you ever been a captain of two people who didn't get along?'). If you can't move the parts around freely, you've memorised — not learned.\n\nA 7-day drill: each day, pick one story and tell it from a different starting point. Day 8, ask a parent to interrupt you halfway. If you can pick up smoothly, you've internalised the story.",
          zh: "同一个故事用 5 种不同顺序练 5 次——从结果开始（「我们 4 场赢了 3 场，让我讲讲是怎么做到的……」）、从失败开始（「我当时差点想放弃，直到……」）、从教训开始（「我学到的一件事是……」）、从描述开始（「我有两个队友从来不互相传球……」）、从反问开始（「你有没有当过两个互不对付的人的队长？」）。如果不能自由调换顺序，说明是「背」不是「学」。\n\n7 天练习：每天挑一个故事，从一个不同的起点讲。第 8 天让父母在你讲到一半时打断你。如果能流畅接上，说明这个故事真的内化了。",
          ms: "Latih cerita yang sama 5 kali dalam 5 susunan berbeza — mula dengan hasil ('Kami menang 3 dari 4 — biar saya cerita bagaimana...'), mula dengan kegagalan ('Saya hampir nak berhenti sehingga...'), mula dengan pengajaran ('Saya belajar bahawa...'), mula dengan gambaran ('Dua rakan saya tak pernah hantar bola sesama mereka...'), dan mula dengan soalan ('Pernah jadi kapten kepada dua orang yang tak serasi?'). Kalau tak boleh tukar susunan bebas, anda menghafal — bukan belajar.\n\nLatihan 7 hari: setiap hari, pilih satu cerita dan ceritakan dari permulaan berbeza. Hari ke-8, minta ibu bapa ganggu separuh jalan. Kalau boleh sambung licin, cerita itu telah diinternalisasi.",
          ta: "ஒரே கதையை 5 வேறு வரிசைகளில் 5 முறை பயிற்சி செய்யுங்கள் — முடிவுடன் தொடங்குங்கள் ('4 இல் 3 வென்றோம் — எப்படி என்று சொல்கிறேன்...'), தோல்வியுடன் ('நிறுத்த இருந்தேன், ஆனால்...'), பாடத்துடன் ('நான் கற்றுக்கொண்டது...'), விவரிப்புடன் ('இரு தோழர்கள் ஒருவருக்கொருவர் பந்தை அனுப்பவில்லை...'), கேள்வியுடன் ('இணக்கமாக இல்லாத இரண்டு பேருக்கு கேப்டனாக இருந்துள்ளீர்களா?'). வரிசையை சுதந்திரமாக மாற்ற முடியவில்லை என்றால், மனப்பாடம் செய்துள்ளீர்கள் — கற்றுக்கொள்ளவில்லை.\n\n7 நாள் பயிற்சி: ஒவ்வொரு நாளும், ஒரு கதையைத் தேர்ந்தெடுத்து வேறு தொடக்கப் புள்ளியிலிருந்து சொல்லுங்கள். 8வது நாள், பெற்றோர் பாதியில் இடையூறு செய்யக் கேளுங்கள். மென்மையாக தொடர முடிந்தால், கதை உள்வாங்கப்பட்டுள்ளது.",
        },
        avoid: {
          en: "Don't write out your full self-introduction and read it 50 times. You'll sound like a voicemail message — flat, lifeless, and recognisably scripted. The best self-intros in interview rooms sound like the person is figuring out what to say as they go, even though they've practised it many times. The way to get that effect is to memorise the 4 or 5 things you want to mention, not the exact sentences they go in.",
          zh: "不要把整段自我介绍写下来然后读 50 遍。你会听起来像语音留言——平淡、无生气、一眼看出是背的。面试间里最好的自我介绍听起来像是说话的人「边想边说」，尽管他练了很多次。要达到这个效果，方法是记住你想提的 4-5 个点，不是记住装它们的具体句子。",
          ms: "Jangan tulis pengenalan diri penuh dan baca 50 kali. Anda akan bunyi macam mesej suara — rata, tak hidup, mudah dikenali sebagai skrip. Pengenalan diri terbaik dalam bilik temuduga bunyi macam orang itu sedang fikir apa nak cakap sambil bercakap, walaupun mereka dah latih banyak kali. Cara dapatkan kesan itu adalah hafal 4 atau 5 perkara yang anda nak sebut, bukan ayat tepat yang menampung mereka.",
          ta: "உங்கள் முழு சுய அறிமுகத்தையும் எழுதி 50 முறை படிக்காதீர்கள். நீங்கள் குரல் அஞ்சல் போல் ஒலிப்பீர்கள் — தட்டையாக, உயிரற்றதாக, தெளிவாக ஸ்கிரிப்ட் செய்யப்பட்டதாக. நேர்காணல் அறைகளில் சிறந்த சுய அறிமுகங்கள், பல முறை பயிற்சி செய்திருந்தாலும், நபர் சொல்வதை யோசித்தபடியே செல்வது போல் ஒலிக்கின்றன. அந்த விளைவைப் பெற, அவற்றை தாங்கும் சரியான வாக்கியங்களை அல்ல, நீங்கள் குறிப்பிட விரும்பும் 4 அல்லது 5 விஷயங்களை மனப்பாடம் செய்வதே வழி.",
        },
      },
      {
        num: "07",
        title: {
          en: "Don't list achievements",
          zh: "不要堆砌成就",
          ms: "Jangan senaraikan pencapaian",
          ta: "சாதனைகளை பட்டியலிடாதீர்கள்",
        },
        body: {
          en: "A list of competitions, certificates, and trophies is forgettable — interviewers see hundreds of those lists each cycle, and they blur together within hours. One vivid story about why one specific moment mattered is unforgettable. The shift to make is from 'what I've achieved' to 'what changed in me because of that achievement'. The first is a record; the second is a person. Interviewers are selecting people, not records.",
          zh: "比赛、证书、奖杯的清单会被忘掉——每轮评委要看几百份这样的清单，几小时内它们就糊成一团。一个生动的故事，讲清楚某个具体时刻为什么对你重要，会被记住。要做的转变是：从「我取得了什么成就」变成「因为那次成就，我身上有什么改变」。前者是一份记录；后者是一个人。评委要挑的是人，不是记录。",
          ms: "Senarai pertandingan, sijil, dan trofi mudah dilupakan — penemuduga lihat ratusan senarai seperti itu setiap pusingan, dan ia bercampur dalam beberapa jam. Satu cerita jelas tentang kenapa satu detik tertentu itu penting — tak terlupakan. Peralihan yang perlu adalah dari 'apa saya capai' kepada 'apa yang berubah dalam diri saya kerana pencapaian itu'. Pertama adalah rekod; kedua adalah orang. Penemuduga memilih orang, bukan rekod.",
          ta: "போட்டிகள், சான்றிதழ்கள், கோப்பைகளின் பட்டியல் மறக்கப்படும் — ஒவ்வொரு சுற்றிலும் நேர்காணலாளர்கள் நூற்றுக்கணக்கான பட்டியல்களைப் பார்க்கிறார்கள், மணிநேரத்தில் அவை கலந்துவிடுகின்றன. ஒரு குறிப்பிட்ட தருணம் ஏன் முக்கியம் என்பது பற்றிய ஒரு உயிரோட்டமான கதை மறக்க முடியாதது. செய்ய வேண்டிய மாற்றம்: 'நான் அடைந்தது' என்பதிலிருந்து 'அந்த சாதனையால் என்னில் என்ன மாறியது' என்பதற்கு. முதலாவது ஒரு பதிவு; இரண்டாவது ஒரு நபர். நேர்காணலாளர்கள் நபர்களைத் தேர்ந்தெடுக்கின்றனர், பதிவுகளை அல்ல.",
        },
        tryThis: {
          en: "Instead of: 'I won gold at zonal, silver at nationals, represented school 3 years.'\nTry: 'The match that changed how I see myself was the zonal final last year — we were down 0–2 in the second half, I called for a formation change, and we came back to draw. After that game I stopped seeing myself as a player and started seeing myself as someone who reads the field.'\n\nHow to find your story: look through your trophy list and ask, for each one, 'what shifted in me because of this?' If you can answer with a concrete sentence, you have a story. If you can only answer with 'I felt proud', you have a trophy. Stories beat trophies in interviews.",
          zh: "不要说：「我拿过区赛金牌、全国银牌、代表学校 3 年。」\n试着说：「让我改变对自己看法的，是去年区赛决赛——下半场 0:2 落后，我建议换阵型，最后扳成平局。那场之后，我不再把自己看成一个球员，而开始看成一个能读场上局势的人。」\n\n怎么找你的故事：把奖杯列表过一遍，每个都问自己「这个奖让我哪里变了？」如果能用一个具体句子回答，你有一个故事。如果只能答出「我当时挺自豪的」，那只是个奖杯。在面试里，故事胜过奖杯。",
          ms: "Bukannya: 'Saya menang emas di zon, perak di kebangsaan, wakili sekolah 3 tahun.'\nCuba: 'Perlawanan yang ubah cara saya pandang diri sendiri ialah akhir zon tahun lepas — kami kalah 0-2 di separuh kedua, saya cadangkan tukar formasi, dan kami berjaya seri. Selepas perlawanan itu, saya berhenti melihat diri sebagai pemain dan mula melihat diri sebagai seseorang yang membaca padang.'\n\nCara cari cerita anda: lihat senarai trofi, tanya untuk setiap satu, 'apa yang beralih dalam diri saya?' Kalau boleh jawab dengan ayat konkrit, anda ada cerita. Kalau hanya boleh jawab 'saya rasa bangga', anda ada trofi. Cerita mengatasi trofi dalam temuduga.",
          ta: "'மண்டல போட்டியில் தங்கம், தேசிய அளவில் வெள்ளி, பள்ளியை 3 ஆண்டுகள் பிரதிநிதித்துவப்படுத்தினேன்' என்பதற்குப் பதிலாக,\n'என்னைப் பற்றிய பார்வையை மாற்றிய போட்டி கடந்த ஆண்டு மண்டல இறுதிப் போட்டி — இரண்டாம் பாதியில் 0-2 பின்னடைவில் இருந்தோம், அமைப்பை மாற்ற கேட்டேன், சம நிலையை அடைந்தோம். அந்த ஆட்டத்திற்குப் பிறகு, என்னை ஒரு வீரராக பார்ப்பதை நிறுத்தி, மைதானத்தைப் படிக்கும் ஒரு நபராக பார்க்கத் தொடங்கினேன்.'\n\nஉங்கள் கதையைக் கண்டுபிடிக்க: உங்கள் கோப்பை பட்டியலைப் பாருங்கள், ஒவ்வொன்றுக்கும் 'இதனால் என்னில் என்ன மாறியது?' என்று கேளுங்கள். உறுதியான வாக்கியத்துடன் பதிலளிக்க முடிந்தால், உங்களிடம் கதை உள்ளது. 'நான் பெருமைப்பட்டேன்' என்று மட்டுமே பதிலளிக்க முடிந்தால், உங்களிடம் கோப்பை மட்டுமே உள்ளது. நேர்காணல்களில் கதைகள் கோப்பைகளை வெல்லும்.",
        },
        avoid: {
          en: "Don't use the interview to recite your CV. The interviewer has it open in front of them. Spending interview minutes reading them what they can already read silently in 10 seconds wastes the most valuable resource you have: face time. The interview exists to show them what's NOT on the CV — your voice, your reasoning, your reflection on what those CV items mean.",
          zh: "不要把面试当成读简历。评委的简历就摊在面前。用面试时间把他们 10 秒钟自己就能默读完的东西念一遍，等于浪费你最值钱的资源：面对面的时间。面试存在的意义，是让评委看到简历上没有的东西——你的声音、你的思路、你对简历上那些条目的反思。",
          ms: "Jangan gunakan temuduga untuk baca resume. Penemuduga ada salinan terbuka di hadapan mereka. Habiskan minit temuduga membaca apa yang mereka boleh baca senyap dalam 10 saat membazirkan sumber paling berharga: masa bersemuka. Temuduga wujud untuk tunjukkan apa yang TIDAK ada dalam resume — suara anda, penaakulan anda, refleksi anda tentang apa makna butiran resume itu.",
          ta: "உங்கள் CV-ஐ படிக்க நேர்காணலை பயன்படுத்தாதீர்கள். நேர்காணலாளர் அதை அவர்களின் முன்னால் திறந்திருக்கிறார். 10 விநாடிகளில் அமைதியாக படிக்கக்கூடியதை வாசிக்க நேர்காணல் நிமிடங்களை செலவிடுவது உங்களின் மிக மதிப்புமிக்க வளமான முகாமுகி நேரத்தை வீணடிக்கிறது. நேர்காணல் CV-இல் இல்லாததை அவர்களுக்குக் காட்ட இருக்கிறது — உங்கள் குரல், உங்கள் தர்க்கம், CV உருப்படிகளின் பொருளைப் பற்றிய உங்கள் சிந்தனை.",
        },
      },
      {
        num: "08",
        title: {
          en: "Don't undersell yourself",
          zh: "不要中式谦虚",
          ms: "Jangan terlalu merendah diri",
          ta: "உங்களைத் தாழ்த்திக் கொள்ளாதீர்கள்",
        },
        body: {
          en: "Singapore-style modesty ('I'm just average...', 'I was lucky...') reads as either fake or lacking self-awareness. The interviewer's job is to gauge what you can do — they need accurate information from you, not a humble performance. State your strengths clearly, then back them with one specific moment. Confidence without arrogance comes from evidence: 'I'm good at this. Here's a time when that mattered.' That's not bragging — that's giving the interviewer what they actually need.",
          zh: "新加坡式谦虚（「我也就一般般」、「我就是运气好」）会被听成虚伪或缺乏自我认知。评委的工作是评估你能做什么——他们需要的是你给的准确信息，不是一场谦虚的表演。直接说强项，然后用一个具体时刻佐证。自信不傲慢，来自证据：「我擅长这个。这是一次它发挥作用的时候。」这不是吹牛——这是给评委他们真正需要的东西。",
          ms: "Sikap merendah diri ala Singapura ('Saya biasa-biasa saja...', 'Saya cuma bertuah...') boleh kedengaran palsu atau kurang sedar diri. Tugas penemuduga adalah menilai apa yang anda boleh buat — mereka perlukan maklumat tepat dari anda, bukan persembahan rendah hati. Nyatakan kekuatan dengan jelas, sokong dengan satu detik khusus. Keyakinan tanpa angkuh datang dari bukti: 'Saya pandai dalam ini. Inilah ketika ia penting.' Itu bukan berbangga — itu beri penemuduga apa yang mereka perlukan.",
          ta: "சிங்கப்பூர் பாணி தாழ்மை ('நான் சாதாரணம்தான்...', 'நான் அதிர்ஷ்டசாலி...') போலியாகவோ சுய விழிப்புணர்வு இல்லாததாகவோ ஒலிக்கும். நேர்காணலாளரின் வேலை நீங்கள் என்ன செய்ய முடியும் என்பதை மதிப்பிடுவது — அவர்களுக்கு உங்களிடமிருந்து துல்லியமான தகவல் தேவை, தாழ்மையான நிகழ்ச்சி அல்ல. உங்கள் பலங்களைத் தெளிவாகச் சொல்லுங்கள், ஒரு குறிப்பிட்ட தருணத்துடன் ஆதரிக்கவும். ஆதாரத்திலிருந்து வரும் நம்பிக்கை திமிராக இல்லை: 'நான் இதில் சிறந்தவன். இது முக்கியமாக இருந்த ஒரு தருணம்.' அது பெருமை அல்ல — நேர்காணலாளருக்கு உண்மையில் தேவையானதை வழங்குவது.",
        },
        tryThis: {
          en: "Instead of: 'I'm not really that good at maths, just OK.'\nTry: 'I enjoy maths — last year I started staying back to help my classmate Daniel with division, and that's when I realised I like teaching as much as solving.'\n\nFormula: 'I'm [strength], shown by [specific moment].' Avoid the words 'just', 'only', 'kind of', and 'a little bit'. They drain everything you say. Compare 'I'm kind of into robotics' to 'I'm into robotics — I spent three months last year building a maze-solving rover from scratch.' Same kid; very different impression.",
          zh: "不要说：「我数学也就那样。」\n试着说：「我喜欢数学——去年开始留下来帮同学 Daniel 学除法，那时我发现自己喜欢教别人，跟做题一样喜欢。」\n\n公式：「我[强项]，体现在[具体时刻]。」避免「也就」、「就是」、「有点」、「一点点」这些词，它们会把你说的话掏空。对比「我有点喜欢机器人」和「我喜欢机器人——去年我花了 3 个月自己造了一台能走迷宫的小车」。同一个孩子；完全不同的印象。",
          ms: "Bukannya: 'Matematik saya biasa-biasa saja.'\nCuba: 'Saya suka matematik — tahun lepas saya mula tinggal lewat untuk bantu rakan Daniel dengan pembahagian, dan ketika itu saya sedar saya suka mengajar sebanyak menyelesaikan masalah.'\n\nFormula: 'Saya [kekuatan], ditunjukkan oleh [detik khusus].' Elak perkataan 'biasa-biasa', 'cuma', 'sikit-sikit'. Mereka kosongkan apa yang anda kata. Banding 'Saya minat sikit dengan robotik' dengan 'Saya minat robotik — saya habiskan 3 bulan tahun lepas bina rover yang boleh selesaikan maze dari awal.' Anak yang sama; gambaran sangat berbeza.",
          ta: "'எனக்கு கணிதம் அவ்வளவு நன்றாக வராது' என்பதற்கு பதிலாக,\n'எனக்கு கணிதம் பிடிக்கும் — கடந்த ஆண்டு என் வகுப்புத் தோழன் Daniel-க்கு வகுத்தலில் உதவ தங்கினேன், அப்போதுதான் சிக்கல்களை தீர்ப்பதைப் போலவே கற்பிப்பதையும் விரும்புகிறேன் என்று உணர்ந்தேன்.'\n\nசூத்திரம்: 'நான் [பலம்], [குறிப்பிட்ட தருணத்தால்] காட்டப்படுகிறது.' 'வெறும்', 'மட்டும்', 'கொஞ்சம்' போன்ற வார்த்தைகளைத் தவிர்க்கவும். அவை நீங்கள் சொல்வதை வடிகட்டுகின்றன. 'நான் கொஞ்சம் ரோபாட்டிக்ஸ்' என்பதையும் 'எனக்கு ரோபாட்டிக்ஸ் பிடிக்கும் — கடந்த ஆண்டு புதிராளியை தீர்க்கும் ரோவரை 3 மாதங்களாக உருவாக்கினேன்' என்பதையும் ஒப்பிடுங்கள். ஒரே குழந்தை; மிகவும் வேறுபட்ட பதிவு.",
        },
        avoid: {
          en: "Don't say 'I'm just lucky' when asked about achievements. Luck isn't a story, and it gives the interviewer nothing to evaluate. Even when something genuinely involved luck (good teammates, good coach), describe what you did with that luck. 'I was lucky to have a great captain — and what I learned from him was [X].' Now you've turned luck into a story about what you absorbed.",
          zh: "被问到成就时不要说「我就是运气好」。运气不是故事，也给不了评委可以评估的东西。哪怕真有运气成分（好队友、好教练），也要讲你拿那份运气做了什么。「我运气好遇到了一个好队长——我从他身上学到的是[X]。」这样就把「运气」变成了一个关于「你吸收了什么」的故事。",
          ms: "Jangan kata 'Saya cuma bertuah' bila ditanya tentang pencapaian. Nasib bukan cerita, dan ia tak beri penemuduga apa-apa untuk nilai. Walaupun sesuatu memang melibatkan nasib (rakan baik, jurulatih baik), terangkan apa anda buat dengan nasib itu. 'Saya bertuah ada kapten yang hebat — dan apa saya belajar daripadanya ialah [X].' Sekarang anda ubah nasib jadi cerita tentang apa yang anda serap.",
          ta: "சாதனைகளைப் பற்றி கேட்கப்படும்போது 'நான் அதிர்ஷ்டசாலி தான்' என்று சொல்லாதீர்கள். அதிர்ஷ்டம் ஒரு கதை அல்ல, நேர்காணலாளருக்கு மதிப்பிட எதையும் தராது. உண்மையிலேயே அதிர்ஷ்டம் ஈடுபட்டாலும் (நல்ல தோழர்கள், நல்ல பயிற்சியாளர்), அந்த அதிர்ஷ்டத்துடன் நீங்கள் என்ன செய்தீர்கள் என்பதை விவரிக்கவும். 'எனக்கு ஒரு சிறந்த கேப்டன் கிடைத்த அதிர்ஷ்டம் இருந்தது — அவரிடமிருந்து நான் கற்றுக்கொண்டது [X].' இப்போது நீங்கள் அதிர்ஷ்டத்தை நீங்கள் உள்வாங்கியதைப் பற்றிய கதையாக மாற்றியுள்ளீர்கள்.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // SECTION 2 — PRACTICE
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "practice",
    iconName: "Mic",
    navLabel: {
      en: "Practice",
      zh: "练习",
      ms: "Berlatih",
      ta: "பயிற்சி",
    },
    heading: {
      en: "Daily Practice",
      zh: "平时如何练习",
      ms: "Latihan Harian",
      ta: "தினசரி பயிற்சி",
    },
    intro: {
      en: "Six daily habits. Most take 5–10 minutes. The compound effect over 3 months is what gets a child sounding ready in the room.",
      zh: "6 个每日习惯。大多数只需 5-10 分钟。3 个月的累积效应，是孩子在面试间里听起来「准备好了」的真正原因。",
      ms: "Enam tabiat harian. Kebanyakannya 5-10 minit. Kesan kompaun 3 bulan inilah yang buatkan anak bunyi 'bersedia' dalam bilik temuduga.",
      ta: "ஆறு தினசரி பழக்கங்கள். பெரும்பாலானவை 5-10 நிமிடங்கள். 3 மாதங்களின் கூட்டு விளைவு குழந்தையை தயாராக ஒலிக்க வைக்கிறது.",
    },
    timing: {
      en: "Daily, 5–10 min",
      zh: "每天 5-10 分钟",
      ms: "Harian, 5–10 minit",
      ta: "தினமும் 5–10 நிமிடம்",
    },
    closer: {
      en: "Practice isn't repeating — it's recording, listening back, and noticing what you didn't know you were doing.",
      zh: "练习不是重复，是录下来听自己——发现你不知道你在做的事。",
      ms: "Latihan bukan pengulangan — ia merakam, dengar semula, perasan apa yang anda tak sedar anda buat.",
      ta: "பயிற்சி என்பது மீண்டும் செய்வதல்ல — பதிவு செய்து, மீண்டும் கேட்டு, நீங்கள் அறியாமல் செய்வதைக் கவனிப்பது.",
    },
    cards: [
      {
        num: "09",
        title: {
          en: "Practise in front of a mirror — 10 min/day",
          zh: "镜子练习——每天 10 分钟",
          ms: "Berlatih depan cermin — 10 minit/hari",
          ta: "கண்ணாடியின் முன் பயிற்சி செய்யுங்கள் — தினமும் 10 நிமிடம்",
        },
        body: {
          en: "Watching your own face while speaking shows you exactly what an interviewer sees: tense jaw, flat eyes, hands stuck behind your back, lips that thin out when you're nervous. You'll catch all of it within 3 days. This is one of those exercises where 80% of the value happens in the first week — but only if you actually look at yourself, not at the wall behind you. Researchers call this 'video self-modelling'; for our purposes, it's just the cheapest acting class on Earth.",
          zh: "看着镜子说话，能让你看到评委眼里的你：紧绷的下巴、僵硬的眼神、不知道放哪的手、紧张时变薄的嘴唇。3 天内你会全部察觉。这种练习 80% 的价值在第一周——前提是你真的在看自己，不是在看镜子背后的墙。研究人员管这个叫「视频自我建模」；对我们来说，这就是地球上最便宜的表演课。",
          ms: "Tengok muka sendiri ketika bercakap tunjukkan apa yang dilihat penemuduga: rahang tegang, mata kosong, tangan tersembunyi, bibir menipis bila cemas. Anda akan perasan semua dalam 3 hari. Latihan ini, 80% nilainya dalam minggu pertama — tapi hanya kalau anda betul-betul tengok diri, bukan dinding belakang. Penyelidik panggil ini 'pemodelan video kendiri'; bagi kita, ia kelas lakonan paling murah di Bumi.",
          ta: "பேசும்போது உங்கள் முகத்தைப் பார்ப்பது நேர்காணலாளர் காண்பதை சரியாக காட்டுகிறது: இறுக்கமான தாடை, தட்டையான கண்கள், மறைந்த கைகள், பதற்றத்தில் மெல்லியதாகும் உதடுகள். 3 நாட்களில் அனைத்தையும் கவனிப்பீர்கள். இந்த பயிற்சியில் 80% மதிப்பு முதல் வாரத்தில் நடக்கிறது — ஆனால் நீங்கள் உண்மையில் உங்களைப் பார்த்தால் மட்டுமே, பின்னால் உள்ள சுவரை அல்ல. ஆராய்ச்சியாளர்கள் இதை 'வீடியோ சுய-மாதிரியாக்கம்' என்கின்றனர்; நமக்கு, இது பூமியில் மிகவும் மலிவான நடிப்பு வகுப்பு.",
        },
        tryThis: {
          en: "Stand in front of a full-length mirror. Tell one of your 5 stories. While speaking, scan three things: (1) Are you smiling at the end? (2) Are your eyes connecting with 'yourself' or wandering? (3) Where do your hands go when you don't know what to do?\n\nAfter the story, write one sentence about each. By day 3, you'll start noticing the same habits repeating — that's data. By day 7, you'll catch yourself fixing one of them in real time. That's progress.",
          zh: "站在全身镜前讲一个你的故事。讲的同时扫三件事：（1）结尾有没有笑？（2）眼神有没有「接触」镜中的自己，还是飘？（3）不知道手放哪的时候手去了哪里？\n\n讲完每个故事写一句话记录这三点。3 天后你会发现同样的习惯反复出现——这就是数据。7 天后你会在讲的过程中实时改掉一个习惯。那就是进步。",
          ms: "Berdiri depan cermin penuh. Ceritakan satu dari 5 cerita anda. Sambil bercakap, perhati tiga perkara: (1) Anda senyum di akhir? (2) Mata anda berhubung dengan 'diri' atau merayau? (3) Tangan ke mana bila tak tahu nak buat apa?\n\nSelepas cerita, tulis satu ayat tentang setiap satu. Pada hari ke-3, anda mula perasan tabiat yang sama berulang — itu data. Pada hari ke-7, anda tangkap diri sendiri membetulkannya secara langsung. Itulah kemajuan.",
          ta: "முழு நீள கண்ணாடியின் முன் நிற்கவும். உங்கள் 5 கதைகளில் ஒன்றை சொல்லுங்கள். பேசும்போது மூன்று விஷயங்களை ஸ்கேன் செய்யுங்கள்: (1) இறுதியில் சிரிக்கிறீர்களா? (2) உங்கள் கண்கள் 'உங்களுடன்' இணைகின்றனவா அல்லது அலைகின்றனவா? (3) கைகள் என்ன செய்வதென்று தெரியாதபோது எங்கே செல்கின்றன?\n\nகதைக்குப் பிறகு, ஒவ்வொன்றைப் பற்றியும் ஒரு வாக்கியம் எழுதவும். 3வது நாள், ஒரே பழக்கங்கள் மீண்டும் மீண்டும் தோன்றுவதைக் கவனிப்பீர்கள் — அது தரவு. 7வது நாள், நீங்கள் ஒன்றை நிகழ்நேரத்தில் சரிசெய்து கொள்வீர்கள். அதுவே முன்னேற்றம்.",
        },
        avoid: {
          en: "Don't just rehearse words. The mirror is for body and face. If you only check whether you got the words right, you're missing roughly 60% of what an interviewer reads — they're watching your posture, your micro-expressions, your eye contact, your hand stillness, your shoulder drop. Words alone won't carry an interview. Body language carries the parts your words can't.",
          zh: "不要光练词。镜子是用来看身体和脸的。如果只检查词对不对，你会错过评委读到的大约 60%——他们在看你的姿势、微表情、眼神接触、手是否乱动、肩膀有没有放松。光靠词撑不起一场面试。身体语言负责的，是词撑不起来的那一半。",
          ms: "Jangan hanya ulang perkataan. Cermin untuk badan dan muka. Kalau hanya periksa perkataan, anda terlepas kira-kira 60% yang dibaca penemuduga — mereka tengok postur, ekspresi mikro, hubungan mata, kestabilan tangan, bahu yang turun. Perkataan sahaja tak akan bawa temuduga. Bahasa badan bawa bahagian yang perkataan tak boleh.",
          ta: "வார்த்தைகளை மட்டும் ஒத்திகை செய்யாதீர்கள். கண்ணாடி உடல் மற்றும் முகத்திற்கானது. வார்த்தைகள் சரியா என்று மட்டும் சரிபார்த்தால், நேர்காணலாளர் படிக்கும் சுமார் 60% தவறவிடுவீர்கள் — அவர்கள் உங்கள் தோற்றம், நுண் வெளிப்பாடுகள், கண் தொடர்பு, கை அமைதி, தோள் இறக்கம் ஆகியவற்றைப் பார்க்கிறார்கள். வார்த்தைகள் மட்டுமே நேர்காணலை சுமக்க முடியாது. வார்த்தைகள் சுமக்க முடியாத பகுதியை உடல் மொழி சுமக்கிறது.",
        },
      },
      {
        num: "10",
        title: {
          en: "Record yourself — the most underrated practice",
          zh: "录音复盘——最被低估的方法",
          ms: "Rakam diri sendiri — latihan paling diabaikan",
          ta: "உங்களைப் பதிவு செய்யுங்கள் — மிகவும் குறைத்து மதிப்பிடப்பட்ட பயிற்சி",
        },
        body: {
          en: "Most kids hate hearing themselves played back. That's exactly why most kids skip this — and exactly why doing it gives you an edge over them. You'll hear every 'um', 'like', 'and then', 'so basically' that you had no idea you were saying. Your voice probably also sits at a higher pitch on recording than you imagine, and you'll speak much faster than feels natural. None of this is bad news — it's just the data you need before you can fix anything. You can't change a habit you don't know you have.",
          zh: "大部分孩子讨厌听自己的录音。这正是大部分孩子跳过这一步的原因——也是你做了就赢过他们的原因。你会听到自己不知道在说的每个「呃」、「然后」、「就是说」、「基本上就是」。你的声音在录音里大概比你想象中尖，语速也比感觉中快得多。这些都不是坏消息——这是你修任何习惯之前必须先拿到的数据。你修不了一个自己不知道的习惯。",
          ms: "Kebanyakan anak benci dengar suara sendiri. Sebab itu kebanyakan mereka langkau — dan sebab itu jika anda buat, anda ada kelebihan ke atas mereka. Anda akan dengar setiap 'um', 'macam', 'kemudian', 'basically' yang anda tak sedar anda sebut. Suara anda mungkin lebih tinggi pic pada rakaman daripada anda bayangkan, dan anda akan bercakap lebih laju daripada rasa semula jadi. Tiada apa-apa berita buruk di sini — ia data yang anda perlukan sebelum boleh betulkan apa-apa. Anda tak boleh ubah tabiat yang anda tak tahu anda ada.",
          ta: "பெரும்பாலான குழந்தைகள் தங்கள் ரெக்கார்டிங் கேட்க வெறுக்கின்றனர். அதனால்தான் பெரும்பாலானோர் இதைத் தவிர்க்கின்றனர் — அதனால்தான் நீங்கள் செய்தால் அவர்களை விட முன்னுரிமை. நீங்கள் அறியாமல் சொல்லும் ஒவ்வொரு 'um', 'like', 'பின்', 'basically' எல்லாம் கேட்பீர்கள். உங்கள் குரல் ரெக்கார்டிங்கில் நீங்கள் கற்பனை செய்வதை விட உயரமாக இருக்கும், மேலும் இயற்கையாக உணர்வதை விட வேகமாக பேசுவீர்கள். இது எதுவும் கெட்ட செய்தி அல்ல — எதையாவது சரிசெய்வதற்கு முன் தேவையான தரவு. தெரியாத பழக்கத்தை மாற்ற முடியாது.",
        },
        tryThis: {
          en: "Record a 90-second answer on your phone. Wait 12 hours so your ears come in fresh. Listen once with the count goal: how many 'um's, 'like's, 'and then's? Write the number down (e.g., 'Day 1: 11 fillers'). Beat it tomorrow.\n\nWeek 2 progression: stop counting fillers, start counting pauses. Pauses are good — they signal thought. Aim for 3 deliberate 2-second pauses per 90 seconds. Week 3 onwards: listen for energy. Does your voice rise at the end of statements (uncertain) or fall (decided)?",
          zh: "用手机录一段 90 秒回答。等 12 小时（耳朵会更客观）。第一遍听就一个目标：数有多少个「呃」、「然后」、「就是说」。写下数字（比如「第 1 天：11 个」）。明天打破今天。\n\n第 2 周升级：不数口头禅了，开始数停顿。停顿是好事——是思考的信号。目标：每 90 秒里有 3 个刻意的 2 秒停顿。第 3 周以后：听能量。你陈述句的句末是上扬（不确定）还是下降（决定）？",
          ms: "Rakam jawapan 90 saat di telefon. Tunggu 12 jam supaya telinga segar. Dengar sekali dengan matlamat kira: berapa 'um', 'macam', 'kemudian'? Tulis jumlah (cth., 'Hari 1: 11 pengisi'). Pecahkan rekod esok.\n\nProgresi minggu 2: berhenti kira pengisi, mula kira hentian. Hentian baik — tanda berfikir. Sasaran 3 hentian 2 saat sengaja setiap 90 saat. Minggu 3 dan seterusnya: dengar tenaga. Suara anda naik di akhir pernyataan (tak pasti) atau turun (pasti)?",
          ta: "உங்கள் தொலைபேசியில் 90 விநாடி பதிலை பதிவு செய்யுங்கள். 12 மணி நேரம் காத்திருங்கள், காதுகள் புதியதாக இருக்கும். ஒரு குறிக்கோளுடன் கேளுங்கள்: எத்தனை 'um', 'like', 'பின்'? எண்ணை எழுதவும் (உதா., 'நாள் 1: 11 நிரப்பிகள்'). நாளை முறியடியுங்கள்.\n\n2வது வார முன்னேற்றம்: நிரப்பிகளை எண்ணுவதை நிறுத்தி, இடைவெளிகளை எண்ணத் தொடங்குங்கள். இடைவெளிகள் நல்லது — சிந்தனையைக் குறிக்கின்றன. 90 விநாடிகளுக்கு 3 வேண்டுமென்றே 2 விநாடி இடைவெளிகளை இலக்கு வைக்கவும். 3வது வாரம் முதல்: ஆற்றலைக் கேளுங்கள். உங்கள் குரல் கூற்றுகளின் இறுதியில் உயருகிறதா (உறுதியற்றது) அல்லது இறங்குகிறதா (உறுதியானது)?",
        },
        avoid: {
          en: "Don't watch the video first — visuals distract you from voice. Audio only on the first listen. (Same logic as why blind taste tests exist for food critics: remove one sense to sharpen the others.) After a full audio pass, go to video on the second pass for body language. Mixing both into one pass means you'll miss both.",
          zh: "不要先看视频——画面会让你分心听不到声音问题。第一遍只听音频。（同样的逻辑：美食评论家做盲测——遮蔽一种感官来强化另一种。）做完一遍完整音频复盘后，再看第二遍视频研究身体语言。同时看听，两边都会漏。",
          ms: "Jangan tengok video dahulu — visual mengalihkan perhatian dari suara. Audio sahaja untuk dengar pertama kali. (Logik sama macam ujian rasa buta untuk pengkritik makanan: tutup satu deria untuk tajamkan yang lain.) Selepas satu pusingan audio penuh, baru tengok video pusingan kedua untuk bahasa badan. Campurkan kedua-duanya dalam satu pusingan bermakna anda akan terlepas kedua-duanya.",
          ta: "முதலில் வீடியோவைப் பார்க்காதீர்கள் — காட்சிகள் குரலிலிருந்து உங்கள் கவனத்தைத் திருப்பும். முதல் கேட்டலுக்கு ஆடியோ மட்டும். (உணவு விமர்சகர்களுக்கான பார்வையற்ற சுவை சோதனைகள் ஏன் இருக்கின்றன என்பது போன்ற அதே தர்க்கம்: மற்றவற்றை கூர்மைப்படுத்த ஒரு உணர்வை நீக்குவது.) ஒரு முழு ஆடியோ பாஸ் முடித்த பிறகு, உடல் மொழிக்கு இரண்டாவது பாஸில் வீடியோவுக்குச் செல்லுங்கள். இரண்டையும் ஒரு பாஸில் கலப்பது இரண்டையும் இழப்பதைக் குறிக்கிறது.",
        },
      },
      {
        num: "11",
        title: {
          en: "The 30-second challenge",
          zh: "30 秒挑战",
          ms: "Cabaran 30 saat",
          ta: "30 விநாடி சவால்",
        },
        body: {
          en: "Pick a random thing — your breakfast, a book, last weekend — and explain it in exactly 30 seconds. Time yourself with a phone timer. This drill trains the one skill DSA interviews demand most: structuring a clear thought while under time pressure. The 30-second constraint forces you to cut what doesn't matter. After 3 weeks of doing this daily, your everyday answers also tighten up — even when there's no timer.",
          zh: "随便挑一个东西——早餐、一本书、上周末——精确 30 秒内讲清楚。用手机计时。这个练习训练的正是 DSA 面试最看重的能力：在时间压力下把一个想法讲清楚。30 秒的限制会逼你删掉不重要的内容。每天练 3 周后，你的日常回答也会自动变紧凑——哪怕没有计时器在跑。",
          ms: "Pilih perkara rawak — sarapan, buku, hujung minggu lepas — dan jelaskan dalam 30 saat tepat. Masa diri sendiri dengan jam telefon. Latihan ini latih kemahiran utama yang temuduga DSA paling perlukan: struktur fikiran jelas bawah tekanan masa. Had 30 saat paksa anda potong yang tak penting. Selepas 3 minggu setiap hari, jawapan harian anda juga jadi padat — walaupun tiada jam.",
          ta: "ஏதேனும் ஒன்றைத் தேர்ந்தெடுங்கள் — உங்கள் காலை உணவு, ஒரு புத்தகம், கடந்த வார இறுதி — சரியாக 30 விநாடிகளில் விளக்குங்கள். தொலைபேசி டைமரில் நேரம் கணக்கிடுங்கள். DSA நேர்காணல் மிகவும் தேடும் ஒரே திறனை இந்த பயிற்சி பயிற்றுவிக்கிறது: நேர அழுத்தத்தின் கீழ் தெளிவான சிந்தனையை கட்டமைப்பது. 30 விநாடி வரம்பு முக்கியமில்லாததை வெட்ட நிர்பந்திக்கிறது. தினமும் 3 வாரங்கள் பிறகு, டைமர் இல்லாமலும் தினசரி பதில்களும் இறுக்கமாக மாறும்.",
        },
        tryThis: {
          en: "30-day prompt rotation:\n- Day 1: why you like your favourite sport\n- Day 2: what you did at the open house\n- Day 3: how the MRT works to a tourist\n- Day 4: how to make instant noodles\n- Day 5: what makes a good friend\n\nThe topics should vary wildly — sport, technology, social, food, abstract. The skill being trained isn't 'talking about familiar topics'; it's 'finding a structure for ANY topic in seconds'.",
          zh: "30 天题目轮换：\n- 第 1 天：为什么喜欢你的运动\n- 第 2 天：开放日做了什么\n- 第 3 天：跟游客解释怎么坐 MRT\n- 第 4 天：怎么煮泡面\n- 第 5 天：什么是好朋友\n\n话题要尽量跨度大——运动、科技、社交、食物、抽象。练的不是「聊熟悉的话题」，是「任何话题几秒内找到结构」。",
          ms: "Putaran topik 30 hari:\n- Hari 1: kenapa anda suka sukan kegemaran\n- Hari 2: apa anda buat di hari terbuka\n- Hari 3: bagaimana MRT berfungsi kepada pelancong\n- Hari 4: cara masak mi segera\n- Hari 5: apa buatkan kawan baik\n\nTopik patut sangat berbeza — sukan, teknologi, sosial, makanan, abstrak. Kemahiran bukan 'cakap tentang topik biasa'; ia 'cari struktur untuk MANA-MANA topik dalam beberapa saat'.",
          ta: "30 நாள் தலைப்பு சுழற்சி:\n- நாள் 1: உங்களுக்கு பிடித்த விளையாட்டை ஏன் விரும்புகிறீர்கள்\n- நாள் 2: திறந்த நாள் என்ன செய்தீர்கள்\n- நாள் 3: சுற்றுலா பயணிக்கு MRT எப்படி வேலை செய்கிறது\n- நாள் 4: உடனடி நூடுல்ஸ் எப்படி சமைப்பது\n- நாள் 5: நல்ல நண்பர் என்றால் என்ன\n\nதலைப்புகள் பரந்த அளவில் வேறுபட வேண்டும் — விளையாட்டு, தொழில்நுட்பம், சமூகம், உணவு, சுருக்கம். பயிற்றுவிக்கப்படும் திறன் 'பழக்கமான தலைப்புகளைப் பற்றி பேசுவது' அல்ல; 'எந்த தலைப்புக்கும் சில விநாடிகளில் கட்டமைப்பைக் கண்டுபிடிப்பது'.",
        },
        avoid: {
          en: "Don't aim for the most clever 30 seconds. Aim for the clearest. Clarity over cleverness — always. A clever answer that confuses people is worse than a plain answer that lands. P6 interview panels reward 'I understood you immediately' far more than 'wow, that was a fancy phrase'.",
          zh: "不要追求最聪明的 30 秒。追求最清楚的 30 秒。清晰永远大于聪明。一个让人困惑的聪明回答，远不如一个简单清楚的回答。P6 面试评委更看重「我马上听懂了」，而不是「哇这个说法真高级」。",
          ms: "Jangan sasarkan 30 saat paling pintar. Sasarkan paling jelas. Kejelasan mengatasi kepintaran — selalu. Jawapan pintar yang mengelirukan lebih teruk dari jawapan biasa yang mendarat. Panel temuduga P6 hargai 'saya faham anda serta-merta' jauh lebih daripada 'wah, frasa yang hebat'.",
          ta: "மிகவும் புத்திசாலித்தனமான 30 விநாடிகளை இலக்காகக் கொள்ள வேண்டாம். மிகவும் தெளிவானதை இலக்காகக் கொள்ளுங்கள். புத்திசாலித்தனத்தை விட தெளிவு — எப்போதும். மக்களை குழப்பும் புத்திசாலித்தனமான பதில், இறங்கும் எளிய பதிலை விட மோசம். P6 நேர்காணல் குழுக்கள் 'வாவ், அது ஒரு ஆடம்பரமான சொற்றொடர்' என்பதை விட 'நான் உங்களை உடனடியாக புரிந்துகொண்டேன்' என்பதைப் பெரிதும் வெகுமதி அளிக்கின்றன.",
        },
      },
      {
        num: "12",
        title: {
          en: "Read aloud for 5 minutes a day",
          zh: "大声朗读——每天 5 分钟",
          ms: "Baca kuat 5 minit sehari",
          ta: "தினமும் 5 நிமிடம் சத்தமாக படியுங்கள்",
        },
        body: {
          en: "Read newspaper articles, story books, or even your textbook aloud — slowly, with feeling — for 5 to 10 minutes a day. This trains three things at once: articulation (your tongue and lips learn to shape each consonant clearly), breath control (you learn where to inhale without breaking sentences), and the willingness to hear your own voice fill a room. This is the cheapest and oldest speech-training trick in the world; it has worked for every politician, broadcaster, and stage actor who's been any good.",
          zh: "每天 5-10 分钟，大声朗读报纸文章、故事书、甚至课本——慢慢读，有感情。这同时练三样：发音（舌头和嘴唇学会清晰塑造每个辅音）、气息控制（学会在不打断句子的位置换气）、以及「敢让自己的声音填满一个房间」。这是全世界最便宜、最老的训练法；每个有点本事的政治家、主播、舞台演员都用过。",
          ms: "Baca artikel akhbar, buku cerita, atau buku teks dengan kuat — perlahan, dengan perasaan — selama 5 hingga 10 minit sehari. Ini latih tiga perkara sekaligus: sebutan (lidah dan bibir belajar bentuk setiap konsonan dengan jelas), kawalan nafas (belajar di mana tarik nafas tanpa pecahkan ayat), dan kesediaan dengar suara sendiri penuhi bilik. Ini latihan ucapan termurah dan tertua di dunia; ia telah berkesan untuk setiap ahli politik, penyiar, dan pelakon pentas yang baik.",
          ta: "ஒரு நாளைக்கு 5 முதல் 10 நிமிடங்கள் வரை செய்தித்தாள் கட்டுரைகள், கதைப் புத்தகங்கள், அல்லது பாடப்புத்தகத்தை சத்தமாக படியுங்கள் — மெதுவாக, உணர்ச்சியுடன். இது ஒரே நேரத்தில் மூன்று விஷயங்களைப் பயிற்றுவிக்கிறது: உச்சரிப்பு (ஒவ்வொரு மெய்யெழுத்தையும் தெளிவாக வடிவமைக்க நாக்கும் உதடுகளும் கற்கின்றன), மூச்சு கட்டுப்பாடு (வாக்கியங்களை உடைக்காமல் எங்கே சுவாசிக்க வேண்டும் என்பதை கற்கிறீர்கள்), உங்கள் சொந்த குரல் ஒரு அறையை நிரப்ப விரும்பும் தயார்நிலை. இது உலகின் மிக மலிவான மற்றும் பழமையான பேச்சு பயிற்சி தந்திரம்; சிறப்பான ஒவ்வொரு அரசியல்வாதி, ஒளிபரப்பாளர், மேடை நடிகருக்கும் இது வேலை செய்துள்ளது.",
        },
        tryThis: {
          en: "Pick a Straits Times opinion article. Read it aloud the way a news anchor would on TV. Mark with a pencil: '/' for short pauses, '//' for longer pauses, underline words to emphasise. After 2 weeks of this, your everyday speaking also gets clearer — your sentences naturally land with more shape.\n\nMix it up: read different genres. A news article one day, a children's picture book the next (yes, even at P6 — the simple sentences expose any sloppiness), a chapter of a novel the day after. Each genre stretches a different muscle.",
          zh: "挑一篇 Straits Times 评论文章。像新闻主播在电视上播报一样读出来。用铅笔标注：「/」表示短停顿，「//」表示长停顿，下划线标记要重读的词。2 周以后，你的日常说话也会变清楚——句子自动有形状了。\n\n混搭着读：不同体裁。今天读新闻，明天读儿童绘本（对，P6 也读——简单句子能暴露你含糊的发音），后天读小说一章。每种体裁拉伸不同的肌肉。",
          ms: "Pilih artikel pendapat Straits Times. Baca kuat macam pembaca berita di TV. Tanda dengan pensel: '/' untuk hentian pendek, '//' untuk hentian panjang, garis bawah perkataan untuk tegaskan. Selepas 2 minggu, percakapan harian juga jadi lebih jelas — ayat anda secara semula jadi ada bentuk.\n\nCampurkan genre: artikel berita satu hari, buku gambar kanak-kanak esok (ya, walaupun P6 — ayat ringkas dedahkan kecuaian apa-apa), satu bab novel lusa. Setiap genre regangkan otot berbeza.",
          ta: "Straits Times கருத்துக் கட்டுரையைத் தேர்ந்தெடுக்கவும். தொலைக்காட்சியில் செய்தி வாசிப்பவர் போல் சத்தமாக படியுங்கள். பென்சிலால் குறிக்கவும்: '/' குறுகிய இடைவெளிக்கு, '//' நீளமான இடைவெளிக்கு, வலியுறுத்த வார்த்தைகளுக்கு கீழ்க்கோடு. 2 வாரங்களில், உங்கள் தினசரி பேச்சும் தெளிவாகும் — உங்கள் வாக்கியங்கள் இயற்கையாக வடிவம் பெறும்.\n\nகலந்து கட்டுங்கள்: வெவ்வேறு வகைகள். ஒரு நாள் செய்தி கட்டுரை, அடுத்த நாள் குழந்தைகள் படப் புத்தகம் (ஆம், P6 ஆனாலும் — எளிய வாக்கியங்கள் எந்த அலட்சியத்தையும் வெளிப்படுத்தும்), மறுநாள் ஒரு நாவலின் அத்தியாயம். ஒவ்வொரு வகையும் வேறுபட்ட தசையை நீட்டுகிறது.",
        },
        avoid: {
          en: "Don't read fast to 'get it over with'. The goal is enunciation, not speed. Reading fast trains the wrong habit — interview voices need to be slower and clearer than everyday voices, and if you train yourself to rush, that's exactly what comes out under pressure. Aim for a pace that lets you hear every consonant land cleanly.",
          zh: "不要急着读完。目标是吐字清晰，不是速度。读快会练出错的习惯——面试里需要的声音是比日常更慢、更清楚的，如果你练成抢着读完，压力一来就是这种快节奏冒出来。要追求一个能让你听到每个辅音清楚落地的速度。",
          ms: "Jangan baca laju untuk 'habiskan'. Matlamatnya sebutan, bukan kelajuan. Baca laju latih tabiat salah — suara temuduga perlu lebih perlahan dan jelas daripada suara harian, dan kalau anda latih diri tergesa-gesa, itulah yang keluar bawah tekanan. Sasarkan kelajuan yang benarkan anda dengar setiap konsonan mendarat bersih.",
          ta: "'முடித்துவிட' வேகமாக படிக்காதீர்கள். குறிக்கோள் உச்சரிப்பு, வேகம் அல்ல. வேகமாக படிப்பது தவறான பழக்கத்தைப் பயிற்றுவிக்கிறது — நேர்காணல் குரல்கள் தினசரி குரல்களை விட மெதுவாகவும் தெளிவாகவும் இருக்க வேண்டும், அவசரப்பட நீங்களே பயிற்சி செய்தால், அழுத்தத்தின் கீழ் அதுவே வெளிவரும். ஒவ்வொரு மெய்யெழுத்தும் தூய்மையாக இறங்குவதைக் கேட்க அனுமதிக்கும் வேகத்தை இலக்காகக் கொள்ளுங்கள்.",
        },
      },
      {
        num: "13",
        title: {
          en: "Rotate your 5 stories — one a day",
          zh: "5 个故事轮换练——每天换一个",
          ms: "Pusing 5 cerita anda — satu sehari",
          ta: "உங்கள் 5 கதைகளை சுழற்றுங்கள் — தினமும் ஒன்று",
        },
        body: {
          en: "Don't drill the same self-introduction 50 times. Instead, tell one of your 5 stories each day, in different ways: to a parent, to a sibling, in front of the mirror, into a voice memo. After 3 weeks, every story has been told in 3+ settings to 3+ audiences. This builds flexibility — the same story shapes itself slightly differently for a parent (warmer, more detail) versus a stranger (tighter, more setup). Interview rooms are closer to 'stranger' than 'parent'.",
          zh: "不要把同一段自我介绍练 50 次。每天讲 5 个故事中的一个，用不同方式：跟父母讲、跟兄弟姐妹讲、对镜子讲、录音备忘。3 周后每个故事都在 3 种以上场景、对 3 种以上听众讲过。这能练出灵活度——同一个故事对父母讲会更温暖、细节更多，对陌生人讲会更紧凑、铺垫更清楚。面试间里的氛围接近「陌生人」，不是「父母」。",
          ms: "Jangan ulang pengenalan yang sama 50 kali. Sebaliknya, ceritakan satu dari 5 cerita anda setiap hari, dengan cara berbeza: kepada ibu bapa, adik-beradik, depan cermin, nota suara. Selepas 3 minggu, setiap cerita telah diceritakan dalam 3+ keadaan kepada 3+ pendengar. Ini bina fleksibiliti — cerita yang sama bentuk diri sedikit berbeza untuk ibu bapa (lebih hangat, lebih detail) berbanding orang asing (lebih padat, lebih banyak persediaan). Bilik temuduga lebih dekat kepada 'orang asing' daripada 'ibu bapa'.",
          ta: "ஒரே சுய அறிமுகத்தை 50 முறை பயிற்சி செய்யாதீர்கள். மாறாக, உங்கள் 5 கதைகளில் ஒன்றை தினமும் வெவ்வேறு வழிகளில் சொல்லுங்கள்: பெற்றோருக்கு, சகோதரருக்கு, கண்ணாடியின் முன், குரல் குறிப்பாக. 3 வாரங்களுக்குப் பிறகு, ஒவ்வொரு கதையும் 3+ அமைப்புகளில் 3+ பார்வையாளர்களுக்கு சொல்லப்பட்டுள்ளது. இது நெகிழ்வுத்தன்மையை உருவாக்குகிறது — அதே கதை பெற்றோருக்கு (அதிக வெப்பம், அதிக விவரம்) எதிராக ஒரு அந்நியருக்கு (இறுக்கம், அதிக அமைப்பு) சற்று வேறுபடுகிறது. நேர்காணல் அறைகள் 'பெற்றோர்' அல்ல, 'அந்நியர்' அருகில் உள்ளன.",
        },
        tryThis: {
          en: "Keep a 'story rotation' sticky note on your desk: 5 stories × Mon-to-Fri rotation. By month-end, each story has been told 8 times in different settings. Add a 6th column labelled 'audience' — each day, rotate WHO you tell it to (parent, sibling, mirror, recording, family friend). You're not training one story; you're training the ability to read your audience and re-shape the same story for them.",
          zh: "桌上贴一张「故事轮换」便签：5 个故事 × 周一到周五。月底每个故事已经在不同场合讲过 8 次。再加一栏「听众」——每天换不同的人听（父母、兄弟姐妹、镜子、录音、家里的朋友）。你不是在练一个故事；你是在练「读懂听众，并为他们重塑同一个故事」的能力。",
          ms: "Letak nota pelekat 'putaran cerita' di meja: 5 cerita × Isnin hingga Jumaat. Hujung bulan, setiap cerita telah diceritakan 8 kali dalam tempat berbeza. Tambah lajur ke-6 'pendengar' — setiap hari, putar SIAPA anda ceritakan (ibu bapa, adik-beradik, cermin, rakaman, kawan keluarga). Anda bukan latih satu cerita; anda latih keupayaan baca pendengar dan bentuk semula cerita yang sama untuk mereka.",
          ta: "உங்கள் மேசையில் 'கதை சுழற்சி' ஒட்டுக் குறிப்பு வைக்கவும்: 5 கதைகள் × திங்கள் முதல் வெள்ளி வரை. மாத இறுதியில், ஒவ்வொரு கதையும் 8 முறை வெவ்வேறு இடங்களில் சொல்லப்பட்டுள்ளது. 'பார்வையாளர்' என்ற 6வது நெடுவரிசையை சேர்க்கவும் — ஒவ்வொரு நாளும், யாரிடம் சொல்கிறீர்கள் என்பதை சுழற்றுங்கள் (பெற்றோர், சகோதரர், கண்ணாடி, பதிவு, குடும்ப நண்பர்). நீங்கள் ஒரு கதையை பயிற்சி செய்யவில்லை; உங்கள் பார்வையாளரை வாசித்து, அதே கதையை அவர்களுக்காக மறுவடிவமைக்கும் திறனை பயிற்சி செய்கிறீர்கள்.",
        },
        avoid: {
          en: "Don't always tell the same favourite story. The interviewer might ask for the second-best one. Kids who only have one polished story freeze the moment the interviewer says 'OK, tell me about a different time.' Rotate so that even your 5th story is fluent — because that 5th story might be the one they ask about.",
          zh: "不要总讲那个最得意的故事。评委可能让你讲第二个。只有一个练得很熟的故事的孩子，听到评委说「好，再讲一个不一样的」就会冻住。要轮换，让你的第 5 个故事也讲得流畅——因为评委可能就让你讲那第 5 个。",
          ms: "Jangan selalu ceritakan cerita kegemaran yang sama. Penemuduga mungkin minta yang kedua. Anak yang ada satu cerita digilap akan beku saat penemuduga kata 'OK, ceritakan satu lagi yang berbeza.' Putar supaya cerita ke-5 juga lancar — sebab cerita ke-5 itulah mungkin yang mereka tanya.",
          ta: "எப்போதும் அதே பிடித்த கதையை சொல்லாதீர்கள். நேர்காணலாளர் இரண்டாவது சிறந்ததைக் கேட்கலாம். ஒரே ஒரு மெருகூட்டப்பட்ட கதை மட்டுமே உள்ள குழந்தைகள், 'சரி, வேறு ஒரு தருணத்தைப் பற்றி சொல்லுங்கள்' என்று நேர்காணலாளர் சொல்லும்போது உறைகிறார்கள். உங்கள் 5வது கதையும் சரளமாக இருக்கச் சுழற்றுங்கள் — அவர்கள் கேட்கப்போவது அந்த 5வது கதையாக இருக்கலாம்.",
        },
      },
      {
        num: "14",
        title: {
          en: "Read 2–3 Singapore news items a week",
          zh: "每周读 2-3 条新加坡新闻",
          ms: "Baca 2-3 berita Singapura seminggu",
          ta: "ஒரு வாரத்திற்கு 2-3 சிங்கப்பூர் செய்திகள் படியுங்கள்",
        },
        body: {
          en: "Schools sometimes ask about current events to test whether you can hold a real conversation about something outside your bubble. You don't need to be a news junkie — but knowing what's happening in Singapore that week lets you find a connection if asked. The kids who can casually mention 'I read about that this week' instantly stand out from kids who say 'I don't really follow the news.' Five minutes a week buys this advantage.",
          zh: "学校有时会问时事，看你能不能就你日常之外的话题聊得起来。不需要天天追新闻——但知道这周新加坡发生了什么，被问到时能搭上话。能随口说出「我这周读到了」的孩子，瞬间就和「我不太看新闻」的孩子拉开差距。每周 5 分钟就买到这个优势。",
          ms: "Sekolah kadang-kadang tanya tentang hal semasa untuk uji sama ada anda boleh berbual sebenar tentang sesuatu di luar bubble anda. Tak perlu jadi pakar berita — tapi tahu apa berlaku di Singapura minggu itu bolehkan anda cari kaitan. Anak yang boleh sebut santai 'Saya baca tentang itu minggu ini' serta-merta menonjol berbanding anak yang kata 'Saya tak ikut berita.' Lima minit seminggu beli kelebihan ini.",
          ta: "உங்கள் குமிழிக்கு வெளியே ஏதாவது பற்றி உண்மையான உரையாடல் நடத்த முடியுமா என்பதை சோதிக்க பள்ளிகள் சில நேரங்களில் நடப்பு நிகழ்வுகளைப் பற்றி கேட்கின்றன. செய்தி ஆர்வலராக இருக்க வேண்டியதில்லை — ஆனால் அந்த வாரம் சிங்கப்பூரில் என்ன நடக்கிறது என்பதை அறிந்தால், கேட்டால் ஒரு இணைப்பைக் கண்டுபிடிக்க முடியும். 'இந்த வாரம் அதைப் பற்றி படித்தேன்' என்று சாதாரணமாக சொல்லக்கூடிய குழந்தைகள், 'நான் செய்திகளைப் பின்தொடரவில்லை' என்று சொல்லும் குழந்தைகளிடமிருந்து உடனடியாக தனித்து நிற்கிறார்கள். ஒரு வாரத்திற்கு ஐந்து நிமிடங்கள் இந்த நன்மையை வாங்குகின்றன.",
        },
        tryThis: {
          en: "Each weekend, pick 2 articles from CNA, Straits Times, or Mothership. Tell a parent in 90 seconds total: what's it about, why it matters, what do you think. Don't aim for a polished take — aim for a real one. If you only half-understand the article, say so: 'I'm not sure I fully understand, but it seems like…'\n\nKeep a one-line note for each article (topic + your view). After 6 weeks you have 12 micro-positions ready to mention if a question wanders into news territory.",
          zh: "每周末挑 2 篇 CNA、Straits Times、或 Mothership 文章。跟父母讲：讲什么、为什么重要、你怎么想——总共 90 秒。不要追求成熟的观点，要追求真实的观点。如果只读懂一半，直接说：「我没完全看懂，但好像是……」\n\n每篇文章写一行笔记（话题 + 你的看法）。6 周下来你有 12 个微观点备用，万一面试问到时事话题，能直接用。",
          ms: "Setiap hujung minggu, pilih 2 artikel dari CNA, Straits Times, atau Mothership. Beritahu ibu bapa dalam 90 saat: tentang apa, kenapa penting, apa pendapat anda. Jangan sasarkan pandangan canggih — sasarkan yang tulen. Kalau hanya separuh faham, sebut: 'Saya tak pasti faham sepenuhnya, tapi nampaknya…'\n\nSimpan satu baris nota setiap artikel (topik + pandangan anda). Selepas 6 minggu anda ada 12 mikro-pendirian siap disebut kalau soalan jelajah ke kawasan berita.",
          ta: "ஒவ்வொரு வார இறுதியிலும், CNA, Straits Times, அல்லது Mothership-இலிருந்து 2 கட்டுரைகளைத் தேர்ந்தெடுக்கவும். பெற்றோரிடம் 90 விநாடிகளில் சொல்லுங்கள்: எது பற்றி, ஏன் முக்கியம், என்ன நினைக்கிறீர்கள். மெருகூட்டிய பார்வையை இலக்காகக் கொள்ள வேண்டாம் — உண்மையானதை இலக்காகக் கொள்ளுங்கள். பாதி மட்டுமே புரிந்தால், சொல்லுங்கள்: 'எனக்கு முழுமையாக புரியவில்லை, ஆனால் தெரிவது…'\n\nஒவ்வொரு கட்டுரைக்கும் ஒரு வரி குறிப்பு (தலைப்பு + உங்கள் பார்வை) வைக்கவும். 6 வாரங்களுக்குப் பிறகு, செய்திப் பகுதிக்கு கேள்வி அலையும்போது குறிப்பிட 12 நுண்-நிலைப்பாடுகள் உள்ளன.",
        },
        avoid: {
          en: "Don't memorise opinions to recite. The interviewer wants your thinking, not a Wikipedia summary. If your view sounds like something a 50-year-old columnist would write, it's the wrong fit anyway — be a 12-year-old with a 12-year-old's perspective. That's what interviewers actually want to hear.",
          zh: "不要背别人的观点。评委要的是你的思考，不是 Wikipedia 摘要。如果你的看法听起来像一个 50 岁专栏作家写出来的，那本来就不对——要做一个 12 岁、有 12 岁视角的孩子。这才是评委真正想听的。",
          ms: "Jangan hafal pendapat untuk diulang. Penemuduga mahu pemikiran anda, bukan ringkasan Wikipedia. Kalau pandangan anda bunyi macam ditulis pengulas 50 tahun, ia memang tak sesuai — jadilah budak 12 tahun dengan perspektif 12 tahun. Itulah yang penemuduga betul-betul mahu dengar.",
          ta: "ஒப்பிக்க கருத்துக்களை மனப்பாடம் செய்யாதீர்கள். நேர்காணலாளர் உங்கள் சிந்தனையை விரும்புகிறார், Wikipedia சுருக்கம் அல்ல. உங்கள் பார்வை 50 வயது பத்தி எழுத்தாளர் எழுதியது போல் ஒலித்தால், அது சரியில்லை — 12 வயது குழந்தையாக 12 வயது பார்வையுடன் இருங்கள். நேர்காணலாளர்கள் உண்மையில் கேட்க விரும்புவது இதுவே.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // SECTION 3 — PARENTS
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "parents",
    iconName: "Users",
    navLabel: {
      en: "Parents",
      zh: "家长",
      ms: "Ibu Bapa",
      ta: "பெற்றோர்",
    },
    heading: {
      en: "How Parents Help",
      zh: "家长如何帮忙练习",
      ms: "Bagaimana Ibu Bapa Bantu",
      ta: "பெற்றோர் எவ்வாறு உதவுவது",
    },
    intro: {
      en: "Five things parents can do that work, three traps to avoid, and how to give feedback that actually changes behaviour.",
      zh: "5 件家长真正帮得上忙的事，3 个常见陷阱要避开，以及如何给反馈才能真正改变孩子的表现。",
      ms: "Lima perkara ibu bapa boleh buat yang berkesan, tiga perangkap untuk dielakkan, dan cara beri maklum balas yang ubah tingkah laku.",
      ta: "பெற்றோர் செய்யக்கூடிய 5 பயனுள்ள விஷயங்கள், தவிர்க்க வேண்டிய 3 பொறிகள், நடத்தையை உண்மையில் மாற்றும் கருத்துக்களை கொடுப்பது எப்படி.",
    },
    timing: {
      en: "Weekly mock sessions",
      zh: "每周陪练 1-2 次",
      ms: "Sesi mingguan",
      ta: "வாராந்திர ஒத்திகை",
    },
    closer: {
      en: "The most useful mock interviewer a parent can be — is a stranger.",
      zh: "父母最有用的 mock 角色，是「陌生人」。",
      ms: "Penemuduga olok-olok paling berguna yang ibu bapa boleh jadi — adalah orang asing.",
      ta: "பெற்றோர் இருக்கக்கூடிய மிகவும் பயனுள்ள மாதிரி நேர்காணலாளர் — ஒரு அந்நியர்.",
    },
    cards: [
      {
        num: "15",
        title: {
          en: "Use three mock interview modes — warm, cold, stress",
          zh: "用三种 mock 节奏：warm / cold / stress",
          ms: "Guna tiga mod temuduga olok-olok — mesra, dingin, tekanan",
          ta: "மூன்று மாதிரி நேர்காணல் முறைகள் — அன்பான, குளிர், அழுத்தம்",
        },
        body: {
          en: "Real interviewers aren't all smiling. Your child needs to answer well under three very different vibes — warm and encouraging, cold and clinical, or actively pressuring. Rotate one mode per session and never the same mode twice in a row. The goal is to make 'cold' and 'stress' feel familiar rather than threatening by the time the real day arrives. Most kids freeze in real interviews not because they don't know the answer, but because they've only practised against warm faces — and the panel didn't smile back.",
          zh: "真实评委不会都笑眯眯。孩子要在三种很不一样的氛围下都能答好——温暖鼓励、冷静审视、积极施压。每次 mock 用一种，连续两次不要重复。目标是让「冷脸」和「压力」在面试当天感觉是「熟悉的」而不是「威胁」。多数孩子在真实面试里冻住，不是不会答，是只对着笑脸练过——评委没笑回来，孩子就崩了。",
          ms: "Penemuduga sebenar tak semua tersenyum. Anak anda perlu jawab dengan baik dalam tiga suasana sangat berbeza — hangat dan menggalakkan, dingin dan klinikal, atau menekan. Pusing satu mod setiap sesi dan jangan sama dua kali berturut. Matlamatnya buatkan 'dingin' dan 'tekanan' rasa biasa, bukan mengancam, menjelang hari sebenar. Kebanyakan anak beku dalam temuduga sebenar bukan kerana tak tahu jawapan, tapi sebab hanya berlatih dengan muka mesra — dan panel tak senyum balik.",
          ta: "உண்மையான நேர்காணலாளர்கள் அனைவரும் சிரிப்பதில்லை. உங்கள் குழந்தை மூன்று மிகவும் வேறுபட்ட சூழ்நிலைகளில் நன்றாக பதிலளிக்க வேண்டும் — அன்பாகவும் ஊக்கமாகவும், குளிராகவும் மருத்துவமாகவும், அல்லது தீவிரமாக அழுத்தம் கொடுக்கவும். ஒவ்வொரு அமர்வுக்கும் ஒரு முறையை சுழற்றுங்கள், தொடர்ந்து இரண்டு முறை ஒரே மாதிரி இல்லை. உண்மையான நாளுக்கு வரும்போது 'குளிர்' மற்றும் 'அழுத்தம்' மிரட்டுவதாக அல்ல, பழக்கமாக உணர வைப்பதே நோக்கம். உண்மையான நேர்காணல்களில் பெரும்பாலான குழந்தைகள் உறைகிறார்கள், பதில் தெரியாததால் அல்ல, ஆனால் அன்பான முகங்களுக்கு எதிராக மட்டுமே பயிற்சி செய்துள்ளனர் — குழு திரும்ப சிரிக்கவில்லை.",
        },
        tryThis: {
          en: "Warm: smile, eye contact, encouraging tone. Ask 'Tell me what you love about football.' Builds confidence in week 1. \nCold: blank face, look at notepad, give 5 seconds silence after they finish, then 'Anything else?' For week 2+. \nStress: interrupt mid-sentence — 'That's not specific enough — try again.' Add 1 unexpected question per round. For week 3.",
          zh: "Warm 模式：微笑、眼神接触、鼓励语气。问「你喜欢 football 的什么？」第 1 周建立信心。\nCold 模式：板着脸看本子，孩子讲完后静默 5 秒，再问「还有吗？」第 2 周开始。\nStress 模式：讲一半打断——「不够具体，换一个。」每轮多加 1 个意料外问题。第 3 周加入。",
          ms: "Mesra: senyum, hubungan mata, nada galakan. Tanya 'Beritahu saya apa anda suka tentang football.' Bina keyakinan minggu 1.\nDingin: muka kosong, tengok nota, beri 5 saat senyap selepas habis, kemudian 'Ada apa-apa lagi?' Minggu 2+.\nTekanan: ganggu di tengah — 'Tak cukup khusus — cuba lagi.' Tambah 1 soalan tak dijangka setiap pusingan. Minggu 3.",
          ta: "அன்பான: சிரிப்பு, கண் தொடர்பு, ஊக்கமளிக்கும் தொனி. 'Football-ஐ நீங்கள் ஏன் விரும்புகிறீர்கள் என்று சொல்லுங்கள்' என்று கேளுங்கள். வாரம் 1 நம்பிக்கையை உருவாக்குகிறது.\nகுளிர்: வெற்று முகம், குறிப்பேடைப் பாருங்கள், முடித்தபின் 5 விநாடிகள் மௌனம், பின் 'வேறு ஏதாவது?' வாரம் 2+.\nஅழுத்தம்: நடுவே குறுக்கிடுங்கள் — 'போதிய விவரம் இல்லை — மீண்டும் முயற்சி.' ஒவ்வொரு சுற்றுக்கும் 1 எதிர்பாராத கேள்வி சேர்க்கவும். வாரம் 3.",
        },
        avoid: {
          en: "Don't pretend to be warm when you're tired, or stress your child when they're already nervous. The mode should be deliberate, not your real mood.",
          zh: "不要在你累的时候装 warm，或在孩子已经很紧张时切 stress。模式是设计好的，不是你当下的心情。",
          ms: "Jangan pura-pura mesra bila penat, atau tekan anak bila mereka sudah cemas. Mod kena disengajakan, bukan mood sebenar anda.",
          ta: "நீங்கள் சோர்வாக இருக்கும்போது அன்பாக நடிக்காதீர்கள், அல்லது குழந்தை ஏற்கனவே பதற்றமாக இருக்கும்போது அழுத்தாதீர்கள். முறை வேண்டுமென்றே இருக்க வேண்டும், உங்கள் உண்மையான மனநிலை அல்ல.",
        },
      },
      {
        num: "16",
        title: {
          en: "What parents should do",
          zh: "父母该做的",
          ms: "Apa ibu bapa patut buat",
          ta: "பெற்றோர் செய்ய வேண்டியவை",
        },
        body: {
          en: "Three things that actually help: (1) ask open-ended questions (not yes/no); (2) sit quietly through long answers — even when you can see the child fumbling, the recovery happens only if you don't rescue; (3) give specific feedback after — not 'that was great' but 'the example about your teammate Daniel was the most memorable part of what you said.' Specific = name the moment, not the general feeling. Specific feedback is the only kind that changes behaviour.",
          zh: "三件真正有用的事：（1）问开放式问题（不是 yes/no）；（2）长答案中间不要插话，安静听完——哪怕看到孩子在卡，也只有你不救场，他才能学会自己恢复；（3）讲完后给具体反馈——不是「答得好」，是「你举 Daniel 那个例子的部分，是整段最让人记得住的」。具体 = 点出那个时刻，不是泛泛的感受。只有具体反馈才能改变行为。",
          ms: "Tiga perkara yang betul-betul membantu: (1) tanya soalan terbuka (bukan ya/tidak); (2) duduk diam ketika jawapan panjang — walaupun anda nampak anak tergagap, pemulihan berlaku hanya kalau anda tak menyelamatkan; (3) beri maklum balas khusus selepas — bukan 'bagus tu' tapi 'contoh tentang rakan Daniel anda adalah bahagian paling berkesan'. Khusus = namakan momen, bukan perasaan umum. Hanya maklum balas khusus mengubah tingkah laku.",
          ta: "உண்மையில் உதவும் மூன்று விஷயங்கள்: (1) திறந்த கேள்விகளைக் கேளுங்கள் (ஆம்/இல்லை அல்ல); (2) நீண்ட பதில்களின் போது அமைதியாக உட்காரவும் — குழந்தை தடுமாறுவதைப் பார்த்தாலும், நீங்கள் காப்பாற்றாதபோது மட்டுமே மீட்சி நிகழ்கிறது; (3) பின்னர் குறிப்பிட்ட கருத்துகளைக் கொடுங்கள் — 'அது நன்றாக இருந்தது' என்று அல்ல, ஆனால் 'உங்கள் தோழன் Daniel பற்றிய உதாரணம் நீங்கள் சொன்னவற்றில் மிகவும் மறக்க முடியாத பகுதி.' குறிப்பிட்டது = தருணத்தைப் பெயரிடவும், பொதுவான உணர்வை அல்ல. குறிப்பிட்ட கருத்துகள் மட்டுமே நடத்தையை மாற்றும்.",
        },
        tryThis: {
          en: "Instead of 'Did the open house go well?', ask 'What's one thing you'd tell your friend who didn't go?' Open questions pull stories out; closed questions get 'fine' as the answer.\n\nFour go-to open questions for any practice session: (1) 'Tell me about something you noticed today'; (2) 'What would you do differently if you went back?'; (3) 'Which part are you most uncertain about, and why?'; (4) 'If you had to pick the one sentence the interviewer remembered, what would it be?' These four work for almost any topic.",
          zh: "不要问「开放日还顺利吗？」，问「你会怎么跟没去的朋友讲？」开放式问题能引出故事；封闭式问题只能换来「还行」。\n\n4 个万能开放式问题（任何练习场合都能用）：（1）「跟我讲一件你今天注意到的事」；（2）「如果重来，你会怎么不一样？」；（3）「哪部分你最不确定，为什么？」；（4）「如果只能让评委记住一句话，那句话是什么？」这 4 个几乎适用于任何话题。",
          ms: "Bukannya tanya 'Hari terbuka okay tak?', tanya 'Apa satu perkara anda akan beritahu kawan yang tak pergi?' Soalan terbuka tarik cerita; soalan tertutup hanya dapat 'okay' sebagai jawapan.\n\nEmpat soalan terbuka untuk mana-mana sesi: (1) 'Cerita satu perkara yang anda perasan hari ini'; (2) 'Apa anda akan buat berbeza kalau anda pergi balik?'; (3) 'Bahagian mana anda paling tak pasti, dan kenapa?'; (4) 'Kalau anda kena pilih satu ayat penemuduga ingat, apa itu?' Keempat-empat ini berfungsi untuk hampir apa-apa topik.",
          ta: "'திறந்த நாள் நன்றாக இருந்ததா?' என்பதற்கு பதிலாக, 'வராத நண்பனிடம் என்ன ஒரு விஷயம் சொல்வீர்கள்?' என்று கேளுங்கள். திறந்த கேள்விகள் கதைகளை வெளியே இழுக்கின்றன; மூடிய கேள்விகள் 'பரவாயில்லை' என்ற பதிலை மட்டுமே பெறுகின்றன.\n\nஎந்த பயிற்சி அமர்வுக்கும் 4 திறந்த கேள்விகள்: (1) 'இன்று கவனித்த ஒன்றைப் பற்றி சொல்லுங்கள்'; (2) 'மீண்டும் சென்றால் வேறு என்ன செய்வீர்கள்?'; (3) 'எந்த பகுதியில் மிகவும் உறுதியற்றதாக உள்ளீர்கள், ஏன்?'; (4) 'நேர்காணலாளர் நினைவில் வைக்க ஒரு வாக்கியத்தைத் தேர்ந்தெடுக்க வேண்டும் என்றால், அது என்ன?' இந்த நான்கும் கிட்டத்தட்ட எந்த தலைப்புக்கும் வேலை செய்கின்றன.",
        },
        avoid: {
          en: "Don't ask leading questions like 'Don't you think NUS High is the best?' or 'You're going to thank your dad for sending you to maths tuition, right?' These teach a child to perform agreement, not think for themselves. Interview panels can smell rehearsed compliance from across the room. The child you're training to please you is the same child the panel will see — and they don't want to be pleased.",
          zh: "不要问诱导式问题，比如「NUS High 是不是最好？」或「你以后会感谢爸爸送你去补数学的吧？」这类问题教孩子的是「表演同意」，不是思考。面试评委能从屋子另一头闻出排练好的迎合。你训练出来一个迎合你的孩子，到了面试间评委看到的就是同一个——他们不需要被迎合。",
          ms: "Jangan tanya soalan mengarah seperti 'Bukankah NUS High terbaik?' atau 'Anda akan berterima kasih kepada ayah sebab hantar tuisyen matematik, kan?' Ini ajar anak buat persetujuan, bukan berfikir sendiri. Panel temuduga boleh hidu kepatuhan terlatih dari seberang bilik. Anak yang anda latih untuk gembirakan anda — itulah anak yang panel akan lihat, dan mereka tak nak digembirakan.",
          ta: "'NUS High சிறந்தது இல்லையா?' அல்லது 'கணித டியூஷனுக்கு அனுப்பியதற்காக அப்பாவுக்கு நன்றி சொல்வீர்கள், சரியா?' போன்ற வழிநடத்தும் கேள்விகளைக் கேட்காதீர்கள். இது குழந்தைக்கு ஒப்புதலை நிகழ்த்த கற்பிக்கிறது, தாமாக சிந்திக்க அல்ல. நேர்காணல் குழுக்கள் அறையின் மறுபக்கத்திலிருந்தே ஒத்திகை செய்யப்பட்ட இணக்கத்தை மணக்க முடியும். உங்களை மகிழ்விக்க நீங்கள் பயிற்றுவிக்கும் குழந்தைதான் குழு பார்க்கப் போகும் அதே குழந்தை — அவர்கள் மகிழ்விக்க விரும்பவில்லை.",
        },
      },
      {
        num: "17",
        title: {
          en: "What parents should NOT do",
          zh: "父母不该做的",
          ms: "Apa ibu bapa TIDAK patut buat",
          ta: "பெற்றோர் செய்யக்கூடாதவை",
        },
        body: {
          en: "Four traps parents fall into without meaning to: (1) feeding scripts ('You should say...'); (2) answering for the child when they pause for too long; (3) comparing them to other kids ('Your cousin did this when she...'); (4) pressuring them the night before the interview. All four feel like care; all four actually erode the skill you're trying to build. The child learns: 'when I freeze, my parent will rescue me' — and that's the worst possible lesson for an interview, because the panel won't rescue.",
          zh: "父母无意中容易掉进的 4 个陷阱：（1）喂稿子（「你应该说……」）；（2）孩子停顿太久时帮他接话；（3）和别人家孩子比较（「你表姐当年……」）；（4）考前一晚施压。这 4 件事都感觉像「关心」，其实都在破坏你想培养的能力。孩子学到的是：「我一卡住，父母就会救我」——而这是面试里最致命的本能，因为评委不会救。",
          ms: "Empat perangkap yang ibu bapa jatuh tanpa sengaja: (1) suap skrip ('Anda patut kata...'); (2) jawab untuk anak bila dia berhenti terlalu lama; (3) banding dengan anak lain ('Sepupu anda buat begini bila...'); (4) tekan malam sebelum temuduga. Keempat-empatnya rasa macam peduli; semua hakisan kemahiran yang anda cuba bina. Anak belajar: 'bila saya beku, ibu bapa akan selamatkan' — itulah pelajaran terburuk untuk temuduga, sebab panel takkan selamatkan.",
          ta: "பெற்றோர் வேண்டுமென்றே அல்லாமல் விழும் 4 பொறிகள்: (1) ஸ்கிரிப்ட்களை ஊட்டுவது ('நீ சொல்ல வேண்டும்...'); (2) குழந்தை அதிக நேரம் நிறுத்தும்போது அவருக்காக பதிலளிப்பது; (3) மற்ற குழந்தைகளுடன் ஒப்பிடுவது ('உங்கள் உறவினர் இதை செய்தார்...'); (4) நேர்காணலுக்கு முதல் நாள் இரவு அழுத்துவது. நான்கும் பாதுகாப்பு போல் உணரப்படும்; நான்கும் நீங்கள் கட்ட முயலும் திறனை அரிக்கின்றன. குழந்தை கற்றுக்கொள்கிறது: 'நான் உறையும்போது, பெற்றோர் என்னைக் காப்பாற்றுவார்' — அதுவே நேர்காணலுக்கு மோசமான பாடம், ஏனெனில் குழு காப்பாற்றாது.",
        },
        tryThis: {
          en: "If your child freezes mid-answer in practice, count to 7 silently before saying anything. 90% of the time they'll continue on their own. The pause IS the lesson — that's where they learn that silence is survivable.\n\nWhen you do need to intervene (because they truly can't continue), don't supply the answer. Instead ask one of these: 'What part are you stuck on?' or 'What would you say if you didn't have to be perfect?' These open the door without walking them through it.",
          zh: "孩子练习时答到一半卡住，心里默数 7 秒再开口。90% 的情况他自己会接上。那个停顿就是教学时刻——他在学的是「沉默是能撑过去的」。\n\n如果你真的得介入（他真接不上去了），不要直接给答案。问其中一句：「你卡在哪里？」或「如果不用完美，你会怎么说？」这是开门，不是替他走完。",
          ms: "Kalau anak terhenti di tengah jawapan, kira 7 saat senyap sebelum bercakap. 90% masa mereka sambung sendiri. Hentian itulah pelajaran — di situlah mereka belajar bahawa senyap boleh diharungi.\n\nBila anda perlu campur tangan (sebab mereka betul-betul tak boleh sambung), jangan beri jawapan. Sebaliknya tanya: 'Bahagian mana anda tersangkut?' atau 'Apa anda akan kata kalau anda tak perlu sempurna?' Ini buka pintu tanpa berjalan untuk mereka.",
          ta: "உங்கள் குழந்தை பயிற்சியில் பதில் நடுவில் உறைந்தால், எதையும் சொல்வதற்கு முன் 7 வரை அமைதியாக எண்ணுங்கள். 90% நேரம் அவர்கள் தாமாகவே தொடர்வார்கள். அந்த இடைவெளியே பாடம் — மௌனத்தை தாங்க முடியும் என்று அவர்கள் கற்றுக்கொள்ளும் இடம்.\n\nஉண்மையில் தலையிட வேண்டியிருக்கும் போது (அவர்களால் தொடர முடியவில்லை என்றால்), பதிலைக் கொடுக்காதீர்கள். மாறாக கேளுங்கள்: 'எந்த பகுதியில் சிக்கினீர்கள்?' அல்லது 'நீங்கள் முழுமையாக இருக்க வேண்டியதில்லை என்றால் என்ன சொல்வீர்கள்?' இவை கதவைத் திறக்கின்றன, அவர்களுக்காக நடந்து செல்வதில்லை.",
        },
        avoid: {
          en: "Don't say 'When I was your age...' or 'Your cousin did this before...' Interview prep is about them, not your reference frame. The child can't use your story or your cousin's story — they can only use their own. Pulling in other people's stories during practice teaches the child to evaluate themselves against external standards, not to develop their own voice.",
          zh: "不要说「我当年……」或「你表哥当年……」面试准备是关于孩子的，不是关于你的参照系。你的故事和你侄子的故事，孩子在面试间里都用不上——他只能用自己的。练习时把别人的故事拉进来，教的是「拿自己跟外部标准比」，而不是「发展自己的声音」。",
          ms: "Jangan kata 'Bila zaman saya...' atau 'Sepupu anda dulu...' Persediaan temuduga tentang mereka, bukan rangka rujukan anda. Anak tak boleh guna cerita anda atau cerita sepupu mereka — mereka hanya boleh guna cerita sendiri. Tarik cerita orang lain semasa latihan ajar anak nilai diri menentang piawai luar, bukan kembangkan suara sendiri.",
          ta: "'என் வயதில் நான்...' அல்லது 'உங்கள் உறவினர் முன்பு...' என்று சொல்லாதீர்கள். நேர்காணல் தயாரிப்பு அவர்களைப் பற்றியது, உங்கள் குறிப்பு சட்டகம் அல்ல. குழந்தை உங்கள் கதையையோ உங்கள் உறவினரின் கதையையோ பயன்படுத்த முடியாது — அவர்கள் தங்கள் சொந்த கதையை மட்டுமே பயன்படுத்த முடியும். பயிற்சியின் போது மற்றவர்களின் கதைகளை இழுப்பது, தங்கள் சொந்த குரலை வளர்ப்பதற்குப் பதிலாக வெளிப்புற தரங்களுக்கு எதிராக தங்களை மதிப்பிட கற்பிக்கிறது.",
        },
      },
      {
        num: "18",
        title: {
          en: "Give Sandwich Feedback",
          zh: "用 Sandwich Feedback 公式",
          ms: "Beri Maklum Balas Sandwic",
          ta: "சாண்ட்விச் கருத்துக்களை கொடுங்கள்",
        },
        body: {
          en: "The Sandwich Feedback structure: Layer 1 — one specific thing they did well. Layer 2 — one specific thing to improve next time. Layer 3 — a closing affirmation that's grounded, not generic. Specific = name the exact moment, not the general feeling. Kids absorb specific praise ('the way you slowed down when you talked about Daniel') and act on specific improvement ('you said um 6 times — try a 1-second pause'); they ignore vague praise ('that was great') and resist vague criticism ('you need to do better').",
          zh: "Sandwich 反馈结构：第 1 层——1 个具体做得好的地方；第 2 层——1 个下次可以改进的具体点；第 3 层——一个有依据的（不是套话的）收尾肯定。具体 = 点出那个具体时刻，不是泛泛的感受。孩子能吸收具体的表扬（「你讲到 Daniel 那段慢下来了」）并对具体的改进做出反应（「前 30 秒说了 6 个『嗯』——试试用 1 秒停顿代替」）；模糊的表扬（「答得好」）他们听不进，模糊的批评（「你要做得更好」）他们会抵触。",
          ms: "Struktur Maklum Balas Sandwic: Lapisan 1 — satu perkara khusus yang dibuat dengan baik. Lapisan 2 — satu perkara khusus untuk diperbaiki. Lapisan 3 — pengesahan akhir yang berasas, bukan generik. Khusus = namakan momen tepat, bukan perasaan umum. Anak menyerap pujian khusus ('cara anda perlahankan bila ceritakan Daniel') dan bertindak pada penambahbaikan khusus ('anda kata um 6 kali — cuba hentian 1 saat'); mereka abaikan pujian kabur ('bagus tu') dan tolak kritikan kabur ('anda kena buat lebih baik').",
          ta: "சாண்ட்விச் கருத்து கட்டமைப்பு: அடுக்கு 1 — அவர்கள் நன்றாக செய்த ஒரு குறிப்பிட்ட விஷயம்; அடுக்கு 2 — அடுத்த முறை மேம்படுத்த ஒரு குறிப்பிட்ட விஷயம்; அடுக்கு 3 — பொதுவானதாக அல்லாமல், அடிப்படையான இறுதி உறுதிப்படுத்தல். குறிப்பிட்டது = துல்லியமான தருணத்தை பெயரிடவும், பொதுவான உணர்வை அல்ல. குழந்தைகள் குறிப்பிட்ட பாராட்டை ('Daniel-ஐப் பற்றி பேசும்போது நீங்கள் மெதுவாக்கியது') உள்வாங்கி, குறிப்பிட்ட மேம்பாட்டில் ('6 முறை um சொன்னீர்கள் — 1 விநாடி இடைவெளியை முயற்சிக்கவும்') செயல்படுகிறார்கள்; தெளிவற்ற பாராட்டை ('அது நன்றாக இருந்தது') அவர்கள் புறக்கணித்து, தெளிவற்ற விமர்சனத்தை ('நீங்கள் சிறப்பாக செய்ய வேண்டும்') எதிர்க்கின்றனர்.",
        },
        tryThis: {
          en: "Bread 1: 'The way you slowed down when talking about Daniel was great — it felt real.'\nFilling: 'I noticed 6 ums in the first 30 seconds. Try a 1-second pause instead.'\nBread 2: 'You handled the awkward silence in the middle better than I would have at your age.'\n\nThe order matters: praise first puts the child in receiving mode. The fix in the middle is the only thing they're really working on, so it lands hardest there. The closing praise sends them off to practise without lingering self-doubt. Don't reverse the order.",
          zh: "面包 1：「你讲到 Daniel 那段慢下来了，特别真实。」\n夹心：「前 30 秒里有 6 个『嗯』。试试用 1 秒停顿代替。」\n面包 2：「中间那段尴尬的沉默你处理得比我同龄时好。」\n\n顺序很关键：先表扬，让孩子进入「接收」状态。中间的改进点，是他唯一真正要练的事，放在最中间所以记得最深。结尾再补一句表扬，让他带着「我能做到」的感觉去练。不要颠倒顺序。",
          ms: "Roti 1: 'Cara anda perlahankan bila ceritakan Daniel sangat bagus — rasa tulen.'\nInti: 'Saya perasan 6 um dalam 30 saat pertama. Cuba hentian 1 saat sebagai ganti.'\nRoti 2: 'Anda kendali senyap canggung di tengah lebih baik dari saya pada usia itu.'\n\nSusunan penting: puji dahulu letak anak dalam mod menerima. Pembetulan di tengah adalah satu-satunya perkara mereka benar-benar usahakan, jadi ia mendarat paling kuat di situ. Pujian penutup hantar mereka pergi berlatih tanpa keraguan diri yang berlarutan. Jangan terbalikkan susunan.",
          ta: "ரொட்டி 1: 'Daniel-ஐப் பற்றி பேசும்போது நீங்கள் மெதுவாக்கியது நன்றாக இருந்தது — உண்மையாக உணர்ந்தது.'\nநிரப்பு: 'முதல் 30 விநாடிகளில் 6 um கவனித்தேன். அதற்கு பதிலாக 1 விநாடி இடைவெளியை முயற்சிக்கவும்.'\nரொட்டி 2: 'நடுவில் உள்ள மௌனத்தை என் வயதில் நான் கையாண்டதை விட சிறப்பாக கையாண்டீர்கள்.'\n\nவரிசை முக்கியம்: முதலில் பாராட்டு குழந்தையை பெறும் முறையில் வைக்கிறது. நடுவில் உள்ள திருத்தம், அவர்கள் உண்மையில் வேலை செய்யும் ஒரே விஷயம், அதனால் அங்கேயே வலுவாக இறங்குகிறது. இறுதி பாராட்டு, நீடித்த சுய-சந்தேகம் இல்லாமல் பயிற்சி செய்ய அனுப்புகிறது. வரிசையை மாற்றாதீர்கள்.",
        },
        avoid: {
          en: "Don't give 5 corrections in one sitting. Pick the top 1 — the rest don't stick anyway. Human working memory only holds a couple of new actionable items at a time; pile on 5 and the child ends the session knowing they did badly without knowing what to fix. Also avoid 'sandwich-washing': layering on insincere praise just to make the criticism softer. Kids hear that immediately, and after a couple of sessions they tune out everything you say.",
          zh: "不要一次给 5 个建议。挑最关键的 1 个——其他几个本来就记不住。人脑的「工作记忆」一次只能装下两三件新的可执行任务；堆 5 个进去，孩子结束时只剩「我刚才好像答得不好」的感觉，但不知道该改什么。也要避免「假 sandwich」：为了让批评柔和一点，硬塞两句不真心的表扬。孩子一听就出来，几次以后你说什么他都不听了。",
          ms: "Jangan beri 5 pembetulan dalam satu sesi. Pilih yang utama — yang lain memang tak akan diingat. Memori kerja manusia hanya pegang beberapa item baru pada satu masa; timbun 5 dan anak habis sesi tahu mereka buat tak bagus tanpa tahu apa nak betulkan. Juga elak 'sandwich palsu': lapis pujian tak ikhlas semata-mata untuk lembutkan kritikan. Anak dengar serta-merta, dan selepas beberapa sesi mereka tutup telinga kepada semua yang anda kata.",
          ta: "ஒரே அமர்வில் 5 திருத்தங்களைக் கொடுக்காதீர்கள். மிக முக்கியமான 1-ஐ தேர்வு செய்யுங்கள் — மற்றவை எப்படியும் நினைவில் இருக்காது. மனித வேலை நினைவு ஒரு நேரத்தில் சில புதிய செயல்படக்கூடிய பொருட்களை மட்டுமே வைத்திருக்கிறது; 5-ஐ குவித்தால், எதை சரிசெய்வது என்று தெரியாமலேயே மோசமாக செய்தோம் என்ற உணர்வுடன் குழந்தை அமர்வை முடிக்கிறது. 'போலி சாண்ட்விச்'-ஐயும் தவிர்க்கவும்: விமர்சனத்தை மென்மையாக்க உண்மையற்ற பாராட்டுக்களை அடுக்குவது. குழந்தைகள் உடனடியாக கேட்கின்றனர், சில அமர்வுகளுக்குப் பிறகு நீங்கள் சொல்லும் எதையும் காதில் வாங்க மாட்டார்கள்.",
        },
      },
      {
        num: "19",
        title: {
          en: "Review recordings the right way",
          zh: "录像复盘的正确打开方式",
          ms: "Semak rakaman dengan cara yang betul",
          ta: "பதிவுகளை சரியான வழியில் மதிப்பாய்வு செய்யுங்கள்",
        },
        body: {
          en: "Don't watch right after. Wait at least half a day for fresh eyes; same-day playback is too emotionally raw for either of you to be useful. Watch together, but let your child speak first: 'What do you notice?' Your child's self-observations are far more valuable than your observations, because they're the ones who have to internalise the change. You add one or two observations max — anything more drowns out the self-observation that just happened.",
          zh: "不要刚录完就看。至少等半天，眼睛才会客观——刚录完看的话，你俩情绪都太满，看不出什么。一起看，但让孩子先说：「你看到什么？」孩子自己观察到的，比你观察到的有用得多——因为最终要内化改变的是他。你最多补 1-2 条——再多就把他刚说出的自我观察盖过去了。",
          ms: "Jangan tonton terus selepas. Tunggu sekurang-kurangnya separuh hari untuk mata segar; main semula hari sama terlalu emosi untuk kedua-dua anda. Tonton bersama, tapi biar anak cakap dulu: 'Apa anda perasan?' Pemerhatian diri anak jauh lebih berharga daripada pemerhatian anda, sebab merekalah yang perlu internalisasi perubahan. Anda tambah satu atau dua pemerhatian saja — lebih dari itu menenggelam pemerhatian diri yang baru berlaku.",
          ta: "உடனே பார்க்காதீர்கள். புதிய கண்களுக்காக குறைந்தது அரை நாள் காத்திருங்கள்; அதே நாள் மீண்டும் பார்ப்பது இருவருக்கும் மிக உணர்ச்சிகரமானது. ஒன்றாக பாருங்கள், ஆனால் குழந்தை முதலில் பேசட்டும்: 'நீங்கள் என்ன கவனிக்கிறீர்கள்?' குழந்தையின் சுய அவதானிப்புகள் உங்கள் அவதானிப்புகளை விட மிகவும் மதிப்புமிக்கவை, ஏனெனில் மாற்றத்தை உள்வாங்க வேண்டியவர்கள் அவர்கள்தான். நீங்கள் அதிகபட்சம் ஒன்று அல்லது இரண்டு கருத்துக்களை சேர்க்கவும் — அதற்கு மேல் சேர்த்தால் இப்போதுதான் நடந்த சுய-அவதானிப்பை மூழ்கடிக்கும்.",
        },
        tryThis: {
          en: "After a mock interview, save the video. Next morning, watch over breakfast in a relaxed setting (not at the desk where the mock happened). Ask 'What's one thing you'd do differently?' Listen fully to their answer — don't interrupt. Then add: 'I noticed [one specific thing].' Stop there.\n\nTwo-week pattern: every week, do one mock and one review. Save the videos in a dated folder. After 4 weeks, watch the oldest video next to the newest — the progress is usually visible to the child themselves, and that visible progress is the single most motivating thing for the final push.",
          zh: "mock 结束保存视频。第二天早餐时一起看，放松场景（不要在 mock 当时的那张桌子上看）。问「你会怎么调整？」完整听他答——不要打断。然后加：「我注意到[一个具体的事]。」就停。\n\n两周节奏：每周做一次 mock + 一次复盘。视频按日期存。4 周后把最早的视频和最新的放一起看——进步孩子自己都能看出来，而「看得见的进步」是临考冲刺阶段最强的动力。",
          ms: "Selepas temuduga olok-olok, simpan video. Pagi esok, tonton sambil sarapan dalam suasana santai (bukan di meja tempat mock berlaku). Tanya 'Apa satu perkara anda akan buat berbeza?' Dengar penuh jawapan — jangan ganggu. Kemudian tambah: 'Saya perasan [satu perkara khusus].' Berhenti di situ.\n\nCorak dua minggu: setiap minggu, buat satu mock dan satu semakan. Simpan video dalam folder bertarikh. Selepas 4 minggu, tonton video tertua di sebelah yang terbaru — kemajuan biasanya kelihatan kepada anak sendiri, dan kemajuan yang kelihatan itu adalah perkara paling memotivasi untuk peringkat akhir.",
          ta: "மாதிரி நேர்காணலுக்குப் பிறகு, வீடியோவை சேமிக்கவும். அடுத்த நாள் காலை, ஒரு இளைப்பாறும் சூழலில் காலை உணவின் போது பாருங்கள் (மாதிரி நடந்த மேசையில் அல்ல). 'நீங்கள் என்ன ஒரு விஷயத்தை வேறுபட்டு செய்வீர்கள்?' என்று கேளுங்கள். அவர்களின் பதிலை முழுமையாக கேளுங்கள் — இடையூறு செய்யாதீர்கள். பிறகு சேர்க்கவும்: 'நான் [ஒரு குறிப்பிட்ட விஷயம்] கவனித்தேன்.' அங்கேயே நிறுத்துங்கள்.\n\nஇரு வார வடிவம்: ஒவ்வொரு வாரமும், ஒரு மாதிரி மற்றும் ஒரு மதிப்பாய்வு செய்யுங்கள். வீடியோக்களை தேதியிட்ட கோப்பில் சேமிக்கவும். 4 வாரங்களுக்குப் பிறகு, பழமையான வீடியோவை புதியதன் அருகே பாருங்கள் — முன்னேற்றம் வழக்கமாக குழந்தைக்கே தெரியும், அந்த தெரியும் முன்னேற்றம் இறுதி உந்துதலுக்கான மிக ஊக்கமளிக்கும் ஒரே விஷயம்.",
        },
        avoid: {
          en: "Don't watch playback while shouting 'See? See? Right there!' Your child will start dreading the review and rehearsal stalls completely. Also don't review when either of you is tired or hungry — the same observations land very differently depending on emotional state. If you find yourself getting frustrated mid-review, pause and pick it up later. Frustrated reviews damage practice momentum for a week.",
          zh: "不要一边看一边喊「看到没？看到没？就这里！」孩子会开始害怕复盘，整个练习就停摆。也不要在你或他累、饿的时候复盘——同样一句观察，情绪状态不同，听进去的效果完全不一样。如果中途发现自己开始烦躁，停下来晚点再看。情绪化的复盘会让练习节奏停一周。",
          ms: "Jangan tonton sambil jerit 'Tengok? Tengok? Di sana!' Anak akan mula takut sesi semakan dan latihan berhenti sepenuhnya. Juga jangan semak bila salah seorang penat atau lapar — pemerhatian sama mendarat sangat berbeza bergantung pada keadaan emosi. Kalau anda mula kecewa di pertengahan semakan, henti dan sambung kemudian. Semakan beremosi merosakkan momentum latihan selama seminggu.",
          ta: "'பார்த்தாயா? பார்த்தாயா? அங்கேதான்!' என்று கத்திக்கொண்டே பார்க்காதீர்கள். குழந்தை மதிப்பாய்வை அஞ்சத் தொடங்கி, ஒத்திகை முற்றிலும் நிற்கும். நீங்கள் அல்லது அவர்கள் சோர்வாக அல்லது பசியுடன் இருக்கும்போது மதிப்பாய்வு செய்யாதீர்கள் — அதே அவதானிப்புகள் உணர்ச்சி நிலையைப் பொறுத்து மிகவும் வேறுபட்டு இறங்கும். மதிப்பாய்வின் நடுவில் எரிச்சல் அடையத் தொடங்கினால், நிறுத்தி பின்னர் தொடரவும். எரிச்சலான மதிப்பாய்வுகள் ஒரு வாரத்திற்கு பயிற்சி வேகத்தை சேதப்படுத்தும்.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // SECTION 4 — IN THE ROOM
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "in-the-moment",
    iconName: "Target",
    navLabel: {
      en: "In the Moment",
      zh: "临场",
      ms: "Saat Itu",
      ta: "அந்தத் தருணத்தில்",
    },
    heading: {
      en: "In the Moment — On-the-Spot Techniques",
      zh: "临场应变技巧",
      ms: "Saat Itu — Teknik Tindakan Segera",
      ta: "அந்தத் தருணத்தில் — உடனடி நுட்பங்கள்",
    },
    intro: {
      en: "Eight techniques for the moment between question and answer. Most matter more than any prepared response.",
      zh: "8 个「问题问完到答案开口」之间的技巧。这一刻的处理，比任何准备好的回答都重要。",
      ms: "Lapan teknik untuk momen antara soalan dan jawapan. Kebanyakannya lebih penting dari jawapan yang disediakan.",
      ta: "கேள்விக்கும் பதிலுக்கும் இடையே உள்ள தருணத்திற்கான 8 நுட்பங்கள். தயாரிக்கப்பட்ட எந்த பதிலையும் விட பெரும்பாலானவை முக்கியம்.",
    },
    timing: {
      en: "Interview day",
      zh: "面试当天",
      ms: "Hari temuduga",
      ta: "நேர்காணல் நாள்",
    },
    closer: {
      en: "Three seconds of silence beats three seconds of 'um' every time.",
      zh: "3 秒沉默胜过 3 秒「嗯……」每一次。",
      ms: "Tiga saat senyap mengatasi tiga saat 'um' setiap kali.",
      ta: "மூன்று விநாடி மௌனம் மூன்று விநாடி 'um' ஐ எப்போதும் வெல்லும்.",
    },
    cards: [
      {
        num: "20",
        title: {
          en: "Pause 3 seconds before you answer",
          zh: "答之前先停 3 秒",
          ms: "Berhenti 3 saat sebelum jawab",
          ta: "பதிலளிக்கும் முன் 3 விநாடிகள் நிறுத்துங்கள்",
        },
        body: {
          en: "Silence after a question is not failure — it's the strongest possible signal that you're actually thinking. Interviewers vastly prefer a thoughtful 3-second pause over a rushed answer; the pause shows respect for the question and confidence that you don't need to fill every second. Count in your head: one, two, three. This single technique separates kids who 'sound prepared' from kids who 'sound thoughtful' — and panels remember the second far longer than the first.",
          zh: "问题问完后的沉默不是失败——是「我在思考」最有力的信号。评委更喜欢有思考的 3 秒停顿，远胜过抢答；停顿本身就是对问题的尊重，也是「我不需要把每一秒都填满」的自信。心里数：一、二、三。这一个技巧能把「听起来准备过」的孩子和「听起来在思考」的孩子区分开——评委对后者的印象，会留得久得多。",
          ms: "Senyap selepas soalan bukan kegagalan — ia isyarat paling kuat bahawa anda sedang berfikir. Penemuduga jauh lebih suka hentian 3 saat penuh fikir daripada jawapan tergesa; hentian itu sendiri menunjukkan hormat kepada soalan dan keyakinan bahawa anda tak perlu isi setiap saat. Kira dalam hati: satu, dua, tiga. Satu teknik ini mengasingkan anak yang 'bunyi bersedia' dari anak yang 'bunyi penuh fikir' — dan panel ingat yang kedua jauh lebih lama.",
          ta: "கேள்விக்குப் பிறகு மௌனம் தோல்வி அல்ல — நீங்கள் உண்மையில் சிந்திக்கிறீர்கள் என்பதற்கான மிக வலுவான சமிக்ஞை. நேர்காணலாளர்கள் சிந்தனைமிக்க 3 விநாடி இடைவெளியை அவசர பதிலை விட பெரிதும் விரும்புகின்றனர்; இடைவெளியே கேள்விக்கான மரியாதையையும், ஒவ்வொரு விநாடியையும் நிரப்ப வேண்டிய தேவையில்லை என்ற நம்பிக்கையையும் காட்டுகிறது. மனதில் எண்ணுங்கள்: ஒன்று, இரண்டு, மூன்று. இந்த ஒரு நுட்பம், 'தயாராக ஒலிக்கும்' குழந்தைகளை 'சிந்தனையுடன் ஒலிக்கும்' குழந்தைகளிலிருந்து பிரிக்கிறது — குழுக்கள் இரண்டாவதை மிகவும் நீண்ட காலம் நினைவில் வைக்கின்றனர்.",
        },
        tryThis: {
          en: "When asked 'Why this school?', count silently 1-2-3. Look up-and-to-the-side as if recalling something specific. Say 'Let me think for a moment.' THEN answer.\n\nPractise this at home until it feels natural. Ask a parent to fire 10 random questions at you back-to-back. Force a 3-second pause before each one — even if you already know the answer. The point isn't to actually need the pause; the point is for the pause to feel comfortable, so on interview day your body doesn't fight you when you want to slow down.",
          zh: "被问「为什么选这所学校？」时，心里默数 1-2-3。眼神看向斜上方（像在回忆某个具体的事）。说「Let me think for a moment.」然后再答。\n\n在家练到自然为止。让父母连续 10 个随机问题轰炸你。每个问题之前都强制停 3 秒——哪怕你已经知道答案。重点不是真的需要停顿，而是让停顿变成「舒服的」习惯，这样面试当天你想慢下来时身体不会跟你打架。",
          ms: "Bila ditanya 'Kenapa sekolah ini?', kira senyap 1-2-3. Pandang atas sebelah seperti mengingat sesuatu khusus. Sebut 'Let me think for a moment.' BARULAH jawab.\n\nLatih ini di rumah sampai rasa semula jadi. Minta ibu bapa lontar 10 soalan rawak berturut-turut. Paksa hentian 3 saat sebelum setiap satu — walaupun anda sudah tahu jawapan. Maksudnya bukan benar-benar perlu hentian; maksudnya buatkan hentian rasa selesa, supaya pada hari temuduga badan anda tak lawan bila anda nak perlahan.",
          ta: "'ஏன் இந்த பள்ளி?' என்று கேட்கப்படும்போது, அமைதியாக 1-2-3 எண்ணுங்கள். ஒரு குறிப்பிட்ட விஷயத்தை நினைவில் கொள்வது போல் மேலே மற்றும் பக்கவாட்டில் பாருங்கள். 'Let me think for a moment.' என்று சொல்லுங்கள். பிறகு பதிலளிக்கவும்.\n\nஇயற்கையாக உணரும் வரை வீட்டில் பயிற்சி செய்யுங்கள். பெற்றோர் தொடர்ந்து 10 சீரற்ற கேள்விகளை எறிய கேளுங்கள். ஒவ்வொன்றுக்கும் முன் 3 விநாடி இடைவெளியை நிர்பந்திக்கவும் — பதில் ஏற்கனவே தெரிந்தாலும். உண்மையில் இடைவெளி தேவை என்பது அல்ல; இடைவெளி வசதியாக உணர வைப்பதே நோக்கம், அதனால் நேர்காணல் நாளில் மெதுவாக செல்ல விரும்பும்போது உங்கள் உடல் சண்டையிடாது.",
        },
        avoid: {
          en: "Don't start with 'So...' or 'Um, OK so...' — that's stalling, not thinking, and the panel hears the difference. Pure silence is much cleaner than padded silence. Also don't fill the pause with audible breathing or 'hmm hmm' — those signal anxiety. The clean version: stop, look thoughtful, breathe quietly, then speak. The whole technique falls apart if you pollute the silence.",
          zh: "不要开头说「So……」或「呃，OK，so……」——那是拖延，不是思考，评委听得出区别。纯粹的沉默比「填了垫词的沉默」干净得多。也不要用大声呼吸或「嗯嗯嗯」填那个停顿——这些是焦虑信号。干净版本：停下、面露思考、悄悄呼吸、然后开口。一旦把沉默搞脏了，整个技巧就崩了。",
          ms: "Jangan mula dengan 'So...' atau 'Um, OK so...' — itu menangguh, bukan berfikir, dan panel dengar perbezaan. Senyap tulen jauh lebih bersih daripada senyap berbantal. Juga jangan isi hentian dengan nafas terdengar atau 'hmm hmm' — itu tanda cemas. Versi bersih: henti, nampak berfikir, nafas senyap, kemudian cakap. Seluruh teknik runtuh kalau senyap dicemarkan.",
          ta: "'So...' அல்லது 'Um, OK so...' என்று தொடங்காதீர்கள் — அது சிந்திப்பது அல்ல, தாமதம், குழு வித்தியாசத்தைக் கேட்கிறது. தூய்மையான மௌனம், திணிக்கப்பட்ட மௌனத்தை விட மிகவும் தூய்மையானது. மூச்சு கேட்கும்படியாகவோ 'hmm hmm' என்றோ இடைவெளியை நிரப்ப வேண்டாம் — அவை பதற்றத்தைக் குறிக்கின்றன. தூய்மையான பதிப்பு: நில்லுங்கள், சிந்தனையுடன் இருங்கள், அமைதியாக மூச்சு விடுங்கள், பின் பேசுங்கள். மௌனத்தைக் கறைப்படுத்தினால் முழு நுட்பமும் சரிந்துவிடும்.",
        },
      },
      {
        num: "21",
        title: {
          en: "If you don't understand — ask",
          zh: "听不懂题——礼貌请求澄清",
          ms: "Kalau tak faham — tanya",
          ta: "புரியவில்லை என்றால் — கேளுங்கள்",
        },
        body: {
          en: "Asking 'Could you rephrase that?' or 'Do you mean...?' shows maturity, not weakness. Most kids panic that asking for clarification will count against them — the opposite is true. Better to clarify once than to launch a 90-second answer to the wrong question. Interviewers consistently report that students who ask one clarifying question come across as more confident and engaged, not less, than students who guess and ramble. Once is fine. Three times in a row, less so — so use it deliberately.",
          zh: "问「Could you rephrase that?」或「您是说……？」展示的是成熟，不是示弱。多数孩子怕「请澄清」会扣分——事实正相反。澄清一次，胜过对着错题讲 90 秒。评委一致反映：会问一个澄清问题的学生，听起来比硬猜然后跑题的学生更有自信、更投入。问一次没事，连问三次就有点了——所以要用得有节制。",
          ms: "Tanya 'Boleh ulang dalam cara lain?' atau 'Maksud anda...?' tunjuk kematangan, bukan kelemahan. Kebanyakan anak panik bahawa minta penjelasan akan menjejaskan markah — sebaliknya benar. Lebih baik jelaskan sekali daripada lancarkan jawapan 90 saat untuk soalan yang salah. Penemuduga laporkan pelajar yang tanya satu soalan penjelas kelihatan lebih yakin dan terlibat, bukan kurang. Sekali okey. Tiga kali berturut-turut, kurang okey — jadi guna dengan sengaja.",
          ta: "'Could you rephrase that?' அல்லது 'Do you mean...?' என்று கேட்பது முதிர்ச்சியைக் காட்டுகிறது, பலவீனத்தை அல்ல. பெரும்பாலான குழந்தைகள் தெளிவு கேட்பது மதிப்பெண்களைக் குறைக்கும் என்று பயப்படுகிறார்கள் — எதிர்மறையே உண்மை. தவறான கேள்விக்கு 90 விநாடி பதிலைத் தொடங்குவதை விட ஒரு முறை தெளிவுபடுத்துவது சிறந்தது. தெளிவுபடுத்தும் ஒரு கேள்வியைக் கேட்கும் மாணவர்கள், ஊகித்து அலையும் மாணவர்களை விட அதிக நம்பிக்கையும் ஈடுபாடும் கொண்டவர்களாக தோன்றுவதாக நேர்காணலாளர்கள் தொடர்ந்து தெரிவிக்கின்றனர். ஒரு முறை சரி. தொடர்ந்து மூன்று முறை, அவ்வளவு சரியல்ல — எனவே வேண்டுமென்றே பயன்படுத்துங்கள்.",
        },
        tryThis: {
          en: "Interviewer: 'How would you handle moral ambiguity in your team?' (You're 12, you don't know 'moral ambiguity'.) Say: 'Could you give me an example to start with?' This earns you a clearer, more concrete question and shows you don't fake understanding.\n\nThree clarification phrases worth memorising:\n- 'Could you rephrase that?' — for unfamiliar vocabulary\n- 'Do you mean [X] or [Y]?' — when the question feels ambiguous\n- 'Could you give me an example to start with?' — for abstract concepts\n\nAll three are interview-appropriate and signal mature self-awareness.",
          zh: "评委：「你怎么处理团队里的 moral ambiguity？」（你 12 岁，不懂 moral ambiguity。）说：「Could you give me an example to start with?」就能换来一个更清楚、更具体的问题，同时显示你不假装听懂。\n\n3 句值得背下来的澄清短句：\n- 「Could you rephrase that?」——遇到陌生词汇用\n- 「Do you mean [X] or [Y]?」——题目有歧义时用\n- 「Could you give me an example to start with?」——抽象概念时用\n\n这 3 句都适合面试用，传达的是成熟的自我意识。",
          ms: "Penemuduga: 'Bagaimana anda kendali moral ambiguity dalam pasukan?' (Anda 12 tahun, tak tahu 'moral ambiguity'.) Sebut: 'Boleh beri contoh untuk mula?' Anda dapat soalan lebih jelas dan konkrit, dan tunjuk anda tak pura-pura faham.\n\nTiga frasa penjelas berbaloi dihafal:\n- 'Boleh ulang dalam cara lain?' — untuk perbendaharaan kata asing\n- 'Maksud anda [X] atau [Y]?' — bila soalan kabur\n- 'Boleh beri contoh untuk mula?' — untuk konsep abstrak\n\nKetiga-tiganya sesuai untuk temuduga dan isyaratkan kesedaran diri matang.",
          ta: "நேர்காணலாளர்: 'உங்கள் குழுவில் moral ambiguity-ஐ எப்படி கையாள்வீர்கள்?' (நீங்கள் 12 வயது, moral ambiguity தெரியாது.) சொல்லுங்கள்: 'Could you give me an example to start with?' தெளிவான, உறுதியான கேள்வி கிடைக்கும், மேலும் நீங்கள் புரிதலை போலியாக காட்டவில்லை என்பதைக் காட்டும்.\n\nமனப்பாடம் செய்ய மதிப்புள்ள 3 தெளிவுபடுத்தும் சொற்றொடர்கள்:\n- 'Could you rephrase that?' — அறிமுகமற்ற சொற்களுக்கு\n- 'Do you mean [X] or [Y]?' — கேள்வி தெளிவற்றதாக உணர்ந்தால்\n- 'Could you give me an example to start with?' — சுருக்கமான கருத்துக்களுக்கு\n\nமூன்றும் நேர்காணலுக்கு ஏற்றவை மற்றும் முதிர்ந்த சுய விழிப்புணர்வைக் குறிக்கின்றன.",
        },
        avoid: {
          en: "Don't guess and hope. Half-understood answers sound like both wrong question and wrong answer at the same time — and the panel can tell within 10 seconds that you didn't really understand. Also don't apologise for asking ('Sorry, I'm dumb, but…'). Self-deprecation here weakens the very confidence the clarification was meant to convey. Ask once, plainly, no apology.",
          zh: "不要瞎猜然后赌一把。半懂的答案听起来既答错了题，又答错了内容——评委 10 秒内就能听出你其实没听懂。也不要为问澄清而道歉（「不好意思我有点笨，但是……」）。在这里自我贬低，反而把澄清本应传达的「自信」削弱掉了。问就直接问，一次，不道歉。",
          ms: "Jangan teka dan harap. Jawapan separuh faham bunyi macam jawab soalan salah dan kandungan salah serentak — dan panel boleh kenal dalam 10 saat anda tak faham betul. Juga jangan minta maaf sebab bertanya ('Maaf, saya bodoh, tapi…'). Merendah diri di sini melemahkan keyakinan yang penjelasan sepatutnya sampaikan. Tanya sekali, terus, tanpa minta maaf.",
          ta: "யூகித்து நம்பாதீர்கள். பாதி புரிந்த பதில்கள் தவறான கேள்வியும் தவறான பதிலும் ஒரே நேரத்தில் போல் ஒலிக்கின்றன — மேலும் குழு 10 விநாடிகளுக்குள் நீங்கள் உண்மையில் புரிந்துகொள்ளவில்லை என்பதைக் கூற முடியும். கேட்பதற்காக மன்னிப்புக் கேட்காதீர்கள் ('மன்னிக்கவும், நான் முட்டாள், ஆனால்...'). இங்கு சுய-தாழ்த்தல் தெளிவுபடுத்தல் தெரிவிக்க வேண்டிய நம்பிக்கையையே பலவீனப்படுத்துகிறது. ஒரு முறை, நேராக, மன்னிப்பு இல்லாமல் கேளுங்கள்.",
        },
      },
      {
        num: "22",
        title: {
          en: "Don't know? Say so — then bridge",
          zh: "不知道？诚实承认，然后桥接",
          ms: "Tak tahu? Cakap — kemudian sambung",
          ta: "தெரியவில்லையா? சொல்லுங்கள் — பின் இணைக்கவும்",
        },
        body: {
          en: "Admitting 'I don't know' isn't the end of the answer — it's the beginning of a better one. Combine it with what you DO know: 'I haven't done that myself, but a related thing I've done is...' That's confident not-knowing, and it shows the interviewer two valuable things at once — honesty (a rare quality at age 12) and the ability to find connections under pressure. Interviewers learn far more from how you handle not-knowing than from how you handle knowing.",
          zh: "承认「I don't know」不是回答的终点——是更好答案的起点。结合你知道的：「这件事我没做过，但相关的事我做过……」这叫「自信地不知道」，它同时向评委展示两个珍贵的东西——诚实（12 岁孩子里很稀缺的品质）和压力下找联系的能力。评委从「你怎么处理不知道」里学到的，远比从「你怎么处理知道」里学到的多。",
          ms: "Mengaku 'Saya tak tahu' bukan penghujung jawapan — ia permulaan yang lebih baik. Gabungkan dengan apa yang anda tahu: 'Saya tak pernah buat itu, tapi perkara berkait yang saya buat ialah...' Itu tidak-tahu yang yakin, dan ia menunjukkan penemuduga dua perkara berharga serentak — kejujuran (kualiti jarang ditemui pada usia 12) dan keupayaan cari kaitan bawah tekanan. Penemuduga belajar jauh lebih banyak dari cara anda kendalikan tak-tahu, berbanding cara anda kendalikan tahu.",
          ta: "'எனக்குத் தெரியாது' என்று ஒப்புக்கொள்வது பதிலின் முடிவு அல்ல — சிறந்த ஒன்றின் தொடக்கம். உங்களுக்குத் தெரிந்ததுடன் இணைக்கவும்: 'நான் அதை செய்யவில்லை, ஆனால் தொடர்புடைய ஒரு விஷயத்தை செய்துள்ளேன்...' அதுவே நம்பிக்கையான தெரியாமை, மேலும் இது நேர்காணலாளருக்கு ஒரே நேரத்தில் இரண்டு மதிப்புமிக்க விஷயங்களை வெளிப்படுத்துகிறது — நேர்மை (12 வயதில் அரிய பண்பு) மற்றும் அழுத்தத்தின் கீழ் தொடர்புகளை கண்டுபிடிக்கும் திறன். நீங்கள் தெரிந்ததை எப்படி கையாள்கிறீர்கள் என்பதை விட, தெரியாததை எப்படி கையாள்கிறீர்கள் என்பதிலிருந்து நேர்காணலாளர்கள் அதிகம் கற்றுக்கொள்கிறார்கள்.",
        },
        tryThis: {
          en: "Q: 'How would you handle leading a 20-person team?'\nA: 'I haven't led 20 people, but last year I led a 5-person classroom committee, and one thing I learned was [your example].' Honest, and bridges the gap.\n\nThe bridge formula: 'I haven't [exactly what they asked], but [closest real thing], and [what you took from it].' Memorise this skeleton. It works for almost any 'how would you handle…' question that lands in unfamiliar territory. The interviewer values the honest mapping from what you've done to what they're asking — that mapping IS the answer, even if you didn't have the direct experience.",
          zh: "问：「你怎么领导一个 20 人的团队？」\n答：「我没带过 20 个人，但去年带过 5 人的班级委员会，那次我学到的一件事是[你的例子]。」诚实，又搭起了桥。\n\n桥接公式：「我没做过[他们问的那件事]，但[最接近的真实经验]，那次我[学到/做到了什么]。」背下这个骨架。几乎任何「你会怎么应对……」型问题落在你陌生领域时，都能套。评委看重的是你诚实地从「做过的」连接到「被问的」——这个连接本身就是答案，哪怕你没有直接经验。",
          ms: "S: 'Bagaimana anda pimpin pasukan 20 orang?'\nJ: 'Saya tak pernah pimpin 20 orang, tapi tahun lepas saya pimpin jawatankuasa kelas 5 orang, dan satu perkara saya belajar ialah [contoh anda].' Jujur, dan sambung jurang.\n\nFormula sambungan: 'Saya tak pernah [tepat yang mereka tanya], tapi [perkara sebenar paling hampir], dan [apa anda ambil daripadanya].' Hafal kerangka ini. Ia berfungsi untuk hampir mana-mana soalan 'bagaimana anda kendali…' yang mendarat di kawasan asing. Penemuduga hargai pemetaan jujur dari apa anda buat ke apa mereka tanya — pemetaan itu adalah jawapan, walaupun anda tak ada pengalaman langsung.",
          ta: "கே: '20 பேர் கொண்ட குழுவை நீங்கள் எப்படி வழிநடத்துவீர்கள்?'\nப: 'நான் 20 பேரை வழிநடத்தவில்லை, ஆனால் கடந்த ஆண்டு 5 பேர் கொண்ட வகுப்பு குழுவை வழிநடத்தினேன், அதில் நான் கற்றுக்கொண்டது [உங்கள் உதாரணம்].' நேர்மையானது, இடைவெளியை இணைக்கிறது.\n\nபாலம் சூத்திரம்: 'நான் [அவர்கள் சரியாக கேட்டது] செய்யவில்லை, ஆனால் [மிக நெருங்கிய உண்மையான விஷயம்], அதில் நான் [எடுத்துக்கொண்டது].' இந்த எலும்புக்கூட்டை மனப்பாடம் செய்யுங்கள். அறிமுகமற்ற பகுதியில் இறங்கும் கிட்டத்தட்ட எந்த 'நீங்கள் எப்படி கையாள்வீர்கள்...' கேள்விக்கும் இது வேலை செய்கிறது. நீங்கள் செய்ததிலிருந்து அவர்கள் கேட்பதற்கு நேர்மையான வரைபடத்தை நேர்காணலாளர் மதிக்கிறார் — நேரடி அனுபவம் இல்லாவிட்டாலும், அந்த வரைபடமே பதில்.",
        },
        avoid: {
          en: "Don't make things up. Interviewers can smell fabrication within seconds — and panels talk to each other, so an invented story might unravel in a follow-up question from a second interviewer. 'I don't know' with a bridge is much stronger than a confident lie. Also don't over-bridge — if the question is genuinely about something you have zero relevant experience with, it's fine to simply say 'That's not something I've thought about — could you tell me more about what made you ask?' That turns a hard moment into a real conversation.",
          zh: "不要编。评委几秒钟就能闻出来假的——而且评委之间会互通信息，一个编造的故事，可能在第二个评委的追问里露馅。「不知道」+ 桥接，比一个自信的谎言强得多。也不要过度桥接——如果问题真的是你完全没有相关经验的领域，可以直接说「这件事我还没想过——可以请您告诉我这个问题是怎么想到的吗？」这把一个尴尬的瞬间变成了一段真实的对话。",
          ms: "Jangan reka. Penemuduga boleh hidu rekaan dalam beberapa saat — dan panel berbincang antara satu sama lain, jadi cerita ciptaan mungkin terbongkar dalam soalan susulan dari penemuduga kedua. 'Tak tahu' dengan sambungan jauh lebih kuat dari pembohongan yakin. Juga jangan over-bridge — kalau soalan benar-benar tentang sesuatu anda tiada pengalaman, sebut sahaja 'Itu bukan sesuatu yang saya pernah fikirkan — boleh ceritakan apa yang buatkan anda tanya?' Ini tukar saat sukar jadi perbualan sebenar.",
          ta: "உருவாக்காதீர்கள். நேர்காணலாளர்கள் சில விநாடிகளில் கட்டுக்கதையை மணக்க முடியும் — மேலும் குழுக்கள் தங்களுக்குள் பேசிக்கொள்வதால், கண்டுபிடிக்கப்பட்ட கதை இரண்டாவது நேர்காணலாளரின் தொடர் கேள்வியில் வெளிப்படலாம். இணைப்புடன் 'எனக்குத் தெரியாது' நம்பிக்கையான பொய்யை விட மிகவும் வலிமையானது. அதிகமாக பாலம் கட்டாதீர்கள் — கேள்வி உண்மையில் தொடர்புடைய அனுபவம் இல்லாத ஒன்றைப் பற்றியதாக இருந்தால், 'அது நான் யோசித்த விஷயம் அல்ல — நீங்கள் ஏன் கேட்கிறீர்கள் என்பதை சொல்ல முடியுமா?' என்று சொல்லலாம். இது கடினமான தருணத்தை உண்மையான உரையாடலாக மாற்றுகிறது.",
        },
      },
      {
        num: "23",
        title: {
          en: "Made a mistake? Correct briefly, move on",
          zh: "说错了？简短修正，继续往下",
          ms: "Buat silap? Betulkan ringkas, teruskan",
          ta: "தவறு செய்தீர்களா? சுருக்கமாக சரிசெய்து, தொடரவும்",
        },
        body: {
          en: "One short correction is fine. Two corrections = visibly nervous. Three = the interviewer watches you spiral, and your composure becomes the story instead of your answer. Fix it once and move on as if it didn't happen. Interviewers care far more about how you recover from a slip than that you slipped — every panel has seen hundreds of small mistakes; very few have seen graceful, brief recoveries from them. Be one of the few.",
          zh: "1 个简短修正没问题。2 个修正 = 看得出紧张。3 个 = 评委看着你越陷越深，你的「失态」反而成了主角，而不是你的答案。修一次，然后当无事发生继续。评委更在意你怎么从口误里恢复，而不是你出过口误——每个评委组都见过几百个小错误；但很少见到优雅、简短的恢复。做那「很少」之一。",
          ms: "Satu pembetulan ringkas okey. Dua pembetulan = nampak cemas. Tiga = penemuduga lihat anda terbelenggu, dan ketenangan anda jadi cerita ganti jawapan anda. Betulkan sekali dan teruskan seolah-olah tak terjadi. Penemuduga ambil berat tentang cara anda pulih daripada silap, bukan bahawa anda silap — setiap panel telah melihat ratusan kesilapan kecil; sangat sedikit yang lihat pemulihan ringkas yang anggun. Jadi satu daripada yang sedikit itu.",
          ta: "ஒரு சுருக்கமான திருத்தம் சரி. இரண்டு திருத்தங்கள் = வெளிப்படையாக பதற்றம். மூன்று = நேர்காணலாளர் நீங்கள் சுழல்வதைப் பார்க்கிறார், உங்கள் அமைதியின்மை உங்கள் பதிலுக்கு பதிலாக கதையாகிறது. ஒருமுறை சரிசெய்து, நடக்காதது போல் தொடரவும். நீங்கள் வழுக்கியதை விட, ஒரு வழுக்கலிலிருந்து எப்படி மீள்கிறீர்கள் என்பதைப் பற்றி நேர்காணலாளர்கள் மிகவும் கவலைப்படுகிறார்கள் — ஒவ்வொரு குழுவும் நூற்றுக்கணக்கான சிறிய தவறுகளைப் பார்த்துள்ளது; மிகச் சிலரே அழகான, சுருக்கமான மீட்சிகளைப் பார்த்துள்ளனர். அந்த சிலரில் ஒருவராக இருங்கள்.",
        },
        tryThis: {
          en: "Three common slip types and their recovery script:\n- Wrong fact ('2024' but meant '2023'): 'Sorry — 2023.' Then continue exactly where you were.\n- Wrong word (you say 'frustrated' but meant 'focused'): 'Sorry, I meant focused.' Continue.\n- Sentence collapses mid-way: 'Let me try that again,' then restart that ONE sentence — not the whole answer.\n\nCommon rule across all three: one short correction, no apology beyond 'Sorry', no explanation of why you slipped. The interviewer will respect the recovery far more than they'd judge the slip.",
          zh: "三种常见的「说错了」及对应的恢复脚本：\n- 数字/事实说错（说成 2024，本意 2023）：「Sorry — 2023.」然后从原地继续。\n- 用错词（你说「frustrated」其实想说「focused」）：「Sorry, I meant focused.」继续。\n- 句子讲到一半垮了：「Let me try that again,」然后只重启那「一句」——不是整个答案。\n\n三种情况都一样的原则：一次简短修正，除了「Sorry」之外不再道歉，也不解释为什么会错。评委对你的「恢复」的尊重，远多于他们对你「出错」的评判。",
          ms: "Tiga jenis silap biasa dan skrip pemulihan:\n- Fakta salah ('2024' maksudkan '2023'): 'Sorry — 2023.' Kemudian sambung tepat di mana anda berada.\n- Perkataan salah (anda kata 'frustrated' maksudkan 'focused'): 'Sorry, I meant focused.' Sambung.\n- Ayat runtuh pertengahan: 'Let me try that again,' kemudian mulakan SATU ayat itu — bukan seluruh jawapan.\n\nPeraturan sama untuk ketiga-tiga: satu pembetulan ringkas, tiada maaf melebihi 'Sorry', tiada penjelasan kenapa anda silap. Penemuduga akan hormati pemulihan jauh lebih daripada mereka akan nilai silap.",
          ta: "மூன்று பொதுவான வழுக்கல் வகைகள் மற்றும் அவற்றின் மீட்பு ஸ்கிரிப்ட்:\n- தவறான உண்மை ('2024' சொல்லி '2023' கருதினால்): 'Sorry — 2023.' பின் நீங்கள் இருந்த இடத்திலிருந்து சரியாக தொடரவும்.\n- தவறான வார்த்தை ('frustrated' சொல்லி 'focused' கருதினால்): 'Sorry, I meant focused.' தொடரவும்.\n- நடுவில் வாக்கியம் சரிந்தால்: 'Let me try that again,' பின் அந்த ஒரே வாக்கியத்தை மட்டும் மீண்டும் தொடங்குங்கள் — முழு பதிலையும் அல்ல.\n\nமூன்றிலும் பொதுவான விதி: ஒரு சுருக்கமான திருத்தம், 'Sorry' தாண்டி மன்னிப்பு இல்லை, ஏன் வழுக்கினீர்கள் என்ற விளக்கம் இல்லை. வழுக்கலை மதிப்பிடுவதை விட மீட்சியை நேர்காணலாளர் மிகவும் மதிப்பார்.",
        },
        avoid: {
          en: "Don't dwell on the mistake. Interviewers care far more about how you recover than that you slipped. Don't say 'sorry, I'm just so nervous' — this turns a 3-second slip into a 30-second confession about your nerves, and now the interviewer is thinking about your anxiety instead of your answer. Recover in 5 words or fewer and let it go. The fastest way to make a small mistake invisible is to act as if it never happened.",
          zh: "不要纠缠错误。评委更在意你怎么恢复，不是你出过错。不要说「Sorry，我太紧张了」——这会把一个 3 秒的小口误变成一段 30 秒的「关于我有多紧张」的自白，评委现在脑子里想的是你的焦虑，不是你的回答了。5 个字以内修正，然后过去。让一个小错误「消失」的最快方法，是表现得它从没发生过。",
          ms: "Jangan terus dok pada silap. Penemuduga ambil berat cara anda pulih jauh lebih daripada anda tersilap. Jangan kata 'sorry, saya gugup sangat' — ini ubah silap 3 saat jadi pengakuan 30 saat tentang ketegangan anda, dan kini penemuduga fikir tentang kegelisahan anda dan bukan jawapan anda. Pulih dalam 5 perkataan atau kurang dan biar berlalu. Cara paling cepat buatkan silap kecil tak nampak adalah berlakon seolah-olah ia tak terjadi.",
          ta: "தவறில் தங்காதீர்கள். நீங்கள் வழுக்கியதை விட எப்படி மீள்கிறீர்கள் என்பதைப் பற்றி நேர்காணலாளர் மிகவும் கவலைப்படுகிறார். 'மன்னிக்கவும், நான் மிகவும் பதற்றமாக இருக்கிறேன்' என்று சொல்லாதீர்கள் — இது 3 விநாடி வழுக்கலை உங்கள் நரம்புகள் பற்றி 30 விநாடி வாக்குமூலமாக மாற்றுகிறது, இப்போது நேர்காணலாளர் உங்கள் பதிலைப் பற்றி அல்ல, உங்கள் பதற்றத்தைப் பற்றி யோசிக்கிறார். 5 அல்லது அதற்கு குறைவான வார்த்தைகளில் மீளுங்கள், போகவிடுங்கள். ஒரு சிறிய தவறை கண்ணுக்குத் தெரியாமல் செய்வதற்கான வேகமான வழி, அது நடக்கவே இல்லை போல் நடிப்பதே.",
        },
      },
      {
        num: "24",
        title: {
          en: "Pivot back to what you've prepared",
          zh: "Bridging：拐回你熟悉的话题",
          ms: "Pusing balik ke apa anda telah sediakan",
          ta: "நீங்கள் தயாரித்ததிற்கு திரும்பவும்",
        },
        body: {
          en: "If a question lands far from anything you've prepared, find the bridge: 'That's not something I've done myself, but it reminds me of...' Now you're back on your home turf — answering thoughtfully instead of stalling helplessly. The bridge isn't dodging the question; it's honestly stating the limit of your direct experience, then offering the closest real thing you have. This is exactly what working professionals do in real meetings every day, and interviewers recognise the move immediately.",
          zh: "如果问题远离你准备的内容，找桥：「这件事我自己没做过，但让我想起……」一句话就回到你熟悉的地盘——答得有思考，而不是无助地干耗。桥接不是逃避问题；它是诚实地说出你直接经验的边界，然后给出你手里最接近的真实例子。这正是职场上的人每天在真实会议里做的事，评委一听就认得。",
          ms: "Kalau soalan jauh dari yang anda sediakan, cari sambungan: 'Itu bukan perkara saya pernah buat sendiri, tapi mengingatkan saya pada...' Anda kembali ke kawasan biasa — jawab dengan teliti, bukan terhenti tanpa daya. Sambungan bukan mengelak soalan; ia nyatakan dengan jujur had pengalaman langsung anda, kemudian tawarkan perkara sebenar paling hampir. Ini tepat yang profesional kerja buat setiap hari dalam mesyuarat sebenar, dan penemuduga kenal pergerakan ini serta-merta.",
          ta: "உங்கள் தயாரிப்புக்கு வெளியே ஒரு கேள்வி வந்தால், பாலத்தைக் கண்டுபிடிக்கவும்: 'அது நான் சொந்தமாக செய்த விஷயம் அல்ல, ஆனால் என்னை நினைவூட்டுகிறது...' இப்போது நீங்கள் உங்கள் சொந்த தளத்திற்கு திரும்பினீர்கள் — உதவியற்ற நிலையில் தாமதிக்காமல், சிந்தனையுடன் பதிலளிக்கிறீர்கள். பாலம் கேள்வியைத் தவிர்ப்பது அல்ல; உங்கள் நேரடி அனுபவத்தின் வரம்பை நேர்மையாக கூறுவது, பின் நீங்கள் வைத்திருக்கும் மிக நெருங்கிய உண்மையான விஷயத்தை வழங்குவது. இது வேலை செய்யும் தொழில் வல்லுநர்கள் ஒவ்வொரு நாளும் உண்மையான கூட்டங்களில் செய்வது, நேர்காணலாளர்கள் இந்த நடவடிக்கையை உடனடியாக அடையாளம் கண்டுகொள்கிறார்கள்.",
        },
        tryThis: {
          en: "Q (for SI applicant): 'What's your view on Singapore's foreign worker policy?'\nA: 'I haven't read much about that specifically. But it reminds me of a community project I did with my grandma's neighbour — [your prepared story].'\n\nPivot phrases to memorise (pick one that feels natural):\n- 'That's not something I've thought about directly, but a related experience…'\n- 'I haven't done that myself, but watching my [brother / coach / teacher] do it taught me…'\n- 'I'm not sure about that specifically, but the closest thing I've worked on is…'\n\nAll three return you to your prepared material without dodging the question.",
          zh: "问（SI 申请者）：「你怎么看新加坡外籍劳工政策？」\n答：「我没特别读过这个话题。但让我想起我和外婆邻居一起做的社区项目——[准备好的故事]。」\n\n桥接短句备选（挑一个用起来自然的）：\n- 「That's not something I've thought about directly, but a related experience…」\n- 「I haven't done that myself, but watching my [brother/coach/teacher] do it taught me…」\n- 「I'm not sure about that specifically, but the closest thing I've worked on is…」\n\n这 3 句都能把你带回你准备好的素材，又不显得在逃避问题。",
          ms: "S (untuk pemohon SI): 'Apa pandangan anda tentang dasar pekerja asing Singapura?'\nJ: 'Saya tak banyak baca tentang itu. Tapi mengingatkan saya pada projek komuniti dengan jiran nenek saya — [cerita anda].'\n\nFrasa pusingan untuk dihafal (pilih yang rasa semula jadi):\n- 'That's not something I've thought about directly, but a related experience…'\n- 'I haven't done that myself, but watching my [abang/jurulatih/guru] do it taught me…'\n- 'I'm not sure about that specifically, but the closest thing I've worked on is…'\n\nKetiga-tiganya kembalikan anda ke bahan tersedia tanpa mengelak soalan.",
          ta: "கே (SI விண்ணப்பதாரருக்கு): 'சிங்கப்பூரின் வெளிநாட்டுத் தொழிலாளர் கொள்கை பற்றி உங்கள் கருத்து என்ன?'\nப: 'அதைப் பற்றி நான் அதிகம் படிக்கவில்லை. ஆனால் என் பாட்டியின் அண்டை வீட்டாருடன் செய்த சமூக திட்டத்தை நினைவுபடுத்துகிறது — [உங்கள் கதை].'\n\nமனப்பாடம் செய்ய பாலம் சொற்றொடர்கள் (இயற்கையாக உணரும் ஒன்றைத் தேர்வு செய்யுங்கள்):\n- 'That's not something I've thought about directly, but a related experience…'\n- 'I haven't done that myself, but watching my [சகோதரர்/பயிற்சியாளர்/ஆசிரியர்] do it taught me…'\n- 'I'm not sure about that specifically, but the closest thing I've worked on is…'\n\nமூன்றும் கேள்வியைத் தவிர்க்காமல் உங்கள் தயாரிக்கப்பட்ட பொருளுக்கு உங்களை திருப்புகின்றன.",
        },
        avoid: {
          en: "Don't fake an opinion. The pivot is honest redirection, not invention — and panels distinguish between the two instantly. Also don't over-pivot every question. If 4 out of 5 of your answers start with 'I haven't done that, but…', it signals you don't have enough direct experience. Use the bridge for the 1–2 questions that genuinely catch you off-guard; for the rest, answer the question they asked.",
          zh: "不要假装有观点。桥接是「诚实地重新引导」，不是「编」——评委一秒就能区分。也不要每题都用桥接。如果你 5 个答案里有 4 个开头是「我没做过这个，但是……」，传达的信号是「你直接经验不够」。桥接只用在 1-2 个真正让你措手不及的题上；其他题，请直接答评委问的那道题。",
          ms: "Jangan pura-pura ada pendapat. Pusingan adalah pengalihan jujur, bukan ciptaan — dan panel bezakan kedua-duanya serta-merta. Juga jangan over-pivot setiap soalan. Kalau 4 dari 5 jawapan anda mula dengan 'I haven't done that, but…', ia isyaratkan anda tak ada pengalaman langsung yang cukup. Guna sambungan untuk 1–2 soalan yang benar-benar mengejutkan anda; untuk yang lain, jawab soalan yang mereka tanya.",
          ta: "ஒரு கருத்தை போலியாக காட்டாதீர்கள். பாலம் என்பது நேர்மையான திருப்பல், கண்டுபிடிப்பு அல்ல — மேலும் குழு உடனடியாக இரண்டையும் வேறுபடுத்துகிறது. ஒவ்வொரு கேள்விக்கும் அதிகமாக பாலம் கட்டாதீர்கள். உங்கள் 5 பதில்களில் 4 'I haven't done that, but…' என்று தொடங்கினால், போதிய நேரடி அனுபவம் இல்லை என்று சமிக்ஞை செய்கிறது. உங்களை உண்மையில் ஆச்சரியப்படுத்தும் 1–2 கேள்விகளுக்கு பாலத்தைப் பயன்படுத்துங்கள்; மற்றவற்றுக்கு, அவர்கள் கேட்ட கேள்விக்கு பதிலளிக்கவும்.",
        },
      },
      {
        num: "25",
        title: {
          en: "Manage your body before it manages your voice",
          zh: "先管理身体，再管理声音",
          ms: "Urus badan sebelum ia urus suara",
          ta: "உடல் உங்கள் குரலை நிர்வகிப்பதற்கு முன், அதை நிர்வகிக்கவும்",
        },
        body: {
          en: "Nervous body produces a shaky voice — your voice is literally the air pushed out by your diaphragm, so when your body is tense, your voice betrays it. Sit on the front third of the chair (no slouch), hands resting on the table or your thighs (not hidden behind your back), feet flat on the floor. Breathe in for 4 seconds, out for 6 — do this twice before the first question. Longer exhale than inhale switches your nervous system from 'alert' mode to 'steady' mode within 15 seconds. Your voice will steady automatically.",
          zh: "紧张的身体会产生颤抖的声音——你的声音本质上就是横膈膜推出去的气，所以身体一紧张，声音立刻出卖你。坐椅子前 1/3（不要瘫着），手放桌上或膝上（别藏在背后），脚踩实地面。吸气 4 秒、呼气 6 秒——第一个问题之前做 2 次。「呼气比吸气长」会让神经系统在 15 秒内从「警戒」切换到「平稳」。声音会自动跟着稳下来。",
          ms: "Badan cemas menghasilkan suara menggigil — suara anda secara harfiah adalah udara yang ditolak oleh diafragma, jadi bila badan tegang, suara akan dedahkan. Duduk pertiga depan kerusi (tak senget), tangan rehat di meja atau peha (jangan sembunyi belakang), kaki rata di lantai. Tarik nafas 4 saat, keluar 6 saat — buat dua kali sebelum soalan pertama. Buang nafas lebih panjang dari tarik nafas tukar sistem saraf anda dari mod 'siaga' ke mod 'stabil' dalam 15 saat. Suara stabil secara automatik.",
          ta: "பதற்றமான உடல் நடுங்கும் குரலை உருவாக்குகிறது — உங்கள் குரல் உண்மையில் உதரவிதானத்தால் தள்ளப்படும் காற்று, எனவே உடல் இறுக்கமாக இருக்கும்போது, குரல் அதைக் காட்டிக்கொடுக்கிறது. நாற்காலியின் முன் மூன்றில் ஒரு பகுதியில் உட்காரவும் (சாய்வு இல்லை), கைகளை மேசையில் அல்லது தொடைகளில் வைக்கவும் (பின்னால் மறைக்க வேண்டாம்), பாதங்கள் தரையில். 4 விநாடிகள் உள்ளிழுக்கவும், 6 விநாடிகள் வெளியேற்றவும் — முதல் கேள்விக்கு முன் இரண்டு முறை செய்யவும். உள்ளிழுப்பதை விட நீளமான வெளியேற்றம், 15 விநாடிகளில் உங்கள் நரம்பு மண்டலத்தை 'விழிப்பு' முறையிலிருந்து 'நிலையான' முறைக்கு மாற்றுகிறது. குரல் தானாகவே நிலையாகும்.",
        },
        tryThis: {
          en: "Pre-interview reset (30 seconds before walking in):\n1. Place one hand on your stomach.\n2. Breathe in for 4 seconds — stomach should rise (not chest).\n3. Breathe out for 6 seconds — stomach should fall.\n4. Repeat once. Shoulders will drop.\n\nIn-room reset (when you feel nerves spike mid-interview): plant both feet flat. Press them gently into the floor for 2 seconds while taking one slow breath. This small grounding action breaks the spiral without anyone seeing it. The two techniques together cover both before-the-room and in-the-room nerves.",
          zh: "进面试间前的 reset（30 秒）：\n1. 一只手放肚子上。\n2. 吸气 4 秒——肚子升起（不是胸膛）。\n3. 呼气 6 秒——肚子下降。\n4. 再做一次。肩膀会放松。\n\n面试中的 reset（中途感觉紧张升级时）：双脚平放地面。轻轻把脚按进地板 2 秒，同时缓慢吸一口气。这个小动作能打断紧张螺旋，外人完全看不出来。两个技巧加起来，覆盖「进门前」和「进门后」两个紧张时机。",
          ms: "Set semula sebelum temuduga (30 saat sebelum masuk):\n1. Letak satu tangan di perut.\n2. Tarik nafas 4 saat — perut naik (bukan dada).\n3. Buang nafas 6 saat — perut turun.\n4. Ulang sekali. Bahu turun.\n\nSet semula dalam bilik (bila rasa cemas memuncak di tengah temuduga): tekap kedua-dua kaki rata. Tekan dengan lembut ke lantai 2 saat sambil tarik nafas perlahan. Tindakan grounding kecil ini patahkan spiral tanpa sesiapa nampak. Dua teknik bersama meliputi sebelum-bilik dan dalam-bilik cemas.",
          ta: "நேர்காணலுக்கு முன் மீட்டமைப்பு (உள்ளே செல்வதற்கு 30 விநாடிகள் முன்):\n1. ஒரு கையை வயிற்றில் வைக்கவும்.\n2. 4 விநாடிகள் உள்ளிழுக்கவும் — வயிறு உயர வேண்டும் (மார்பு அல்ல).\n3. 6 விநாடிகள் வெளியேற்றவும் — வயிறு தாழ வேண்டும்.\n4. மீண்டும் ஒரு முறை செய்யுங்கள். தோள்கள் தாழ்கின்றன.\n\nஅறையில் மீட்டமைப்பு (நேர்காணல் நடுவில் பதற்றம் உயரும்போது): இரு பாதங்களையும் தரையில் வைக்கவும். ஒரு மெதுவான மூச்சு எடுத்துக்கொள்ளும்போது 2 விநாடிகள் தரையில் மெதுவாக அழுத்தவும். இந்த சிறிய அடித்தள செயல் யாரும் பார்க்காமலேயே சுழற்சியை உடைக்கிறது. இரு நுட்பங்களும் சேர்ந்து அறைக்கு முன் மற்றும் அறையில் பதற்றத்தை உள்ளடக்குகின்றன.",
        },
        avoid: {
          en: "Don't sit deep in the chair with your back fully touching the backrest. You'll look tired, your voice will drop in volume, and your breathing becomes shallow. Also don't lean too far forward — that signals over-eagerness or anxiety. The sweet spot is the front third of the chair seat, back straight but not stiff, weight balanced. Practise this seated posture at home until it feels natural; many kids only realise on interview day that they've never actually sat 'interview-ready' before.",
          zh: "不要陷在椅子里、整个背贴在椅背上。你看起来会很累，声音也会变小，呼吸也会变浅。也不要前倾太多——那是「太急切」或焦虑的信号。最佳位置：坐在椅子前 1/3，背挺直但不僵硬，重量平衡。在家把这个坐姿练到自然为止；很多孩子是面试当天才意识到「我从来没真的『面试坐姿』地坐过」。",
          ms: "Jangan duduk dalam dengan belakang sepenuhnya sentuh sandaran. Anda akan kelihatan letih, suara turun, dan pernafasan jadi cetek. Juga jangan condong ke hadapan terlalu jauh — itu tanda terlalu bersemangat atau cemas. Tempat sesuai adalah pertiga depan tempat duduk, belakang lurus tapi tak kaku, berat seimbang. Latih postur duduk ini di rumah sampai rasa semula jadi; ramai anak sedar hanya pada hari temuduga bahawa mereka tak pernah duduk 'siap-temuduga' sebelum ini.",
          ta: "உங்கள் முதுகு பின்புறத்தை முழுமையாக தொடும்படி நாற்காலியில் ஆழமாக உட்காராதீர்கள். நீங்கள் சோர்வாகத் தோன்றுவீர்கள், குரலின் ஒலி குறையும், மூச்சு ஆழமற்றதாக மாறும். அதிகமாக முன்னோக்கி சாயவும் வேண்டாம் — அது அதிக ஆர்வம் அல்லது பதற்றத்தைக் குறிக்கிறது. சரியான இடம் நாற்காலி இருக்கையின் முன் மூன்றில் ஒரு பகுதி, முதுகு நேராக ஆனால் இறுக்கம் இல்லாமல், எடை சமநிலையில். இயற்கையாக உணரும் வரை இந்த உட்காரும் தோற்றத்தை வீட்டில் பயிற்சி செய்யுங்கள்; பல குழந்தைகள் நேர்காணல் நாளில்தான் முன்பு 'நேர்காணல்-தயார்' நிலையில் உட்கார்ந்ததே இல்லை என்று உணர்கிறார்கள்.",
        },
      },
      {
        num: "26",
        title: {
          en: "Speak 10% louder, end sentences with a downward pitch",
          zh: "音量比平时大 10%，句末降调",
          ms: "Cakap 10% lebih kuat, akhiri ayat dengan nada menurun",
          ta: "10% சத்தமாக பேசுங்கள், வாக்கியங்களை இறங்கும் தொனியில் முடிக்கவும்",
        },
        body: {
          en: "Most nervous kids speak too softly and let every sentence drift upward in tone, so every statement accidentally sounds like a question. The fix is two-part: project 10% louder than your normal conversation volume (think 'talking to someone across a small living room' rather than 'talking to your friend on the bus'), and end every statement with a downward pitch. Downward = 'I'm done; that's my answer.' Upward = 'is that OK?' Even kids with great content lose marks because their voice sounds uncertain. The opposite is also true: a moderate answer delivered with steady downward intonation sounds smart.",
          zh: "紧张的孩子说话普遍偏小声，每句话的语调都往上飘——结果每个陈述句意外地都像在问问题。解决方法两件：比日常说话音量大 10%（想象你在「跟一个隔着小客厅的人讲话」，而不是「跟旁边公交车上的朋友讲话」），每句话的句末用降调。降调 = 「这是我的答案，讲完了」。升调 = 「这样对吗？」内容好的孩子，常因为声音听起来「不确定」而失分。反过来也成立：一个普通的答案，用稳定的降调讲出来，会听起来很聪明。",
          ms: "Anak cemas selalu cakap terlalu perlahan dan biarkan setiap ayat naik nada, jadi setiap pernyataan terbunyi macam soalan tanpa sengaja. Penyelesaian dua bahagian: pancarkan 10% lebih kuat dari volum perbualan biasa (fikirkan 'cakap kepada seseorang di seberang ruang tamu kecil' bukan 'cakap kepada kawan dalam bas'), dan akhiri setiap pernyataan dengan nada menurun. Menurun = 'Saya habis; itu jawapan saya.' Menaik = 'Itu okey?' Anak yang ada kandungan bagus pun hilang markah sebab suara bunyi tak pasti. Sebaliknya juga benar: jawapan sederhana dengan intonasi menurun yang stabil bunyi pintar.",
          ta: "பதற்றமான குழந்தைகள் மிக மென்மையாக பேசி, ஒவ்வொரு வாக்கியத்தையும் தொனியில் மேலே எழ விடுகிறார்கள், அதனால் ஒவ்வொரு கூற்றும் தற்செயலாக ஒரு கேள்வி போல் ஒலிக்கிறது. தீர்வு இரு பகுதி: உங்கள் சாதாரண உரையாடல் ஒலியை விட 10% சத்தமாக பேசுங்கள் ('சிறிய வாழ்க்கை அறையின் மறுபக்கம் உள்ள ஒருவரிடம் பேசுவதை' நினையுங்கள், 'பேருந்தில் நண்பரிடம் பேசுவதை' அல்ல), மேலும் ஒவ்வொரு கூற்றையும் இறங்கும் தொனியில் முடிக்கவும். இறக்கம் = 'நான் முடித்துவிட்டேன்; அதுவே என் பதில்.' ஏற்றம் = 'அது சரியா?' சிறந்த உள்ளடக்கம் கொண்ட குழந்தைகள் கூட, குரல் உறுதியற்றதாக ஒலிப்பதால் மதிப்பெண்களை இழக்கிறார்கள். மாறாகவும் உண்மை: மிதமான பதில் நிலையான இறங்கும் ஒலி அடைவுடன் வழங்கப்படுகிறது, புத்திசாலித்தனமாக ஒலிக்கிறது.",
        },
        tryThis: {
          en: "Read both aloud and feel the difference:\n- 'I want to join Cedar Girls because of the Social Innovation programme↓.' (decided)\n- 'I want to join Cedar Girls because of the Social Innovation programme↗?' (uncertain)\n\nOne sounds decided, one sounds like you're asking permission. The interviewer hears both within the first sentence and starts forming an impression. To train this: read your self-introduction aloud with a parent listening. Have them flag every sentence that ends with an upward pitch. After 3 sessions, your default ending becomes the downward one.",
          zh: "把这两句都念出来，感受区别：\n- 「I want to join Cedar Girls because of the Social Innovation programme↓.」（决定）\n- 「I want to join Cedar Girls because of the Social Innovation programme↗?」（不确定，像在请求）\n\n一个是「决定」，一个像「请求许可」。评委在第一句话就听到这个区别，并开始形成印象。怎么练：把自我介绍念给父母听。让他们每听到一句句末上扬就标记。3 次以后，你的默认句末就是下降。",
          ms: "Baca kedua-dua kuat dan rasa perbezaan:\n- 'Saya ingin sertai Cedar Girls kerana program Social Innovation↓.' (pasti)\n- 'Saya ingin sertai Cedar Girls kerana program Social Innovation↗?' (tak pasti)\n\nSatu bunyi pasti, satu lagi macam anda minta kebenaran. Penemuduga dengar kedua-dua dalam ayat pertama dan mula bentuk tanggapan. Untuk latih: baca pengenalan diri dengan kuat sambil ibu bapa dengar. Suruh mereka tanda setiap ayat yang berakhir dengan nada menaik. Selepas 3 sesi, hujung lalai anda jadi menurun.",
          ta: "இரண்டையும் சத்தமாக படியுங்கள், வித்தியாசத்தை உணருங்கள்:\n- 'Social Innovation திட்டத்திற்காக Cedar Girls-இல் சேர விரும்புகிறேன்↓.' (உறுதி)\n- 'Social Innovation திட்டத்திற்காக Cedar Girls-இல் சேர விரும்புகிறேன்↗?' (உறுதியற்றது)\n\nஒன்று உறுதியாக ஒலிக்கிறது, மற்றொன்று அனுமதி கேட்பது போல. நேர்காணலாளர் முதல் வாக்கியத்திலேயே இரண்டையும் கேட்டு பதிவை உருவாக்கத் தொடங்குகிறார். பயிற்சி செய்ய: பெற்றோர் கேட்க உங்கள் சுய அறிமுகத்தை சத்தமாக படியுங்கள். மேலெழும் தொனியில் முடியும் ஒவ்வொரு வாக்கியத்தையும் அவர்கள் குறிக்க கேளுங்கள். 3 அமர்வுகளுக்குப் பிறகு, உங்கள் இயல்பான முடிவு இறங்கும் தொனியாக மாறும்.",
        },
        avoid: {
          en: "Don't shout. 10% louder ≠ shouting. The goal is clear projection — your voice should fill the room without effort, the way a teacher's does. Also don't artificially lower your pitch to sound 'serious' — kids who do this end up sounding awkward and self-conscious. Use your natural voice, just slightly louder and ending firmly. Authenticity beats theatre, always.",
          zh: "不要喊。大声 10% 不等于喊。目标是清晰的「投射」——你的声音应该不费力地填满房间，像老师说话那样。也不要刻意压低嗓音让自己听起来「严肃」——这样做的孩子最后听起来都很别扭、很拘谨。用你自然的声音，只要稍微大声一点、结尾稳一点就够了。真实永远胜过表演。",
          ms: "Jangan menjerit. 10% lebih kuat ≠ menjerit. Matlamatnya pancaran jelas — suara anda patut penuhi bilik tanpa usaha, macam guru bercakap. Juga jangan rendahkan nada secara buatan untuk bunyi 'serius' — anak yang buat ini akhirnya bunyi canggung dan sedar diri. Guna suara semula jadi, cuma sedikit lebih kuat dan berakhir tegas. Ketulenan mengatasi teater, selalu.",
          ta: "கத்தாதீர்கள். 10% சத்தமாக ≠ கத்துவது. குறிக்கோள் தெளிவான வெளியீடு — உங்கள் குரல் ஒரு ஆசிரியரின் குரல் போல் முயற்சியின்றி அறையை நிரப்ப வேண்டும். 'தீவிரமாக' ஒலிக்க உங்கள் தொனியை செயற்கையாக குறைக்காதீர்கள் — இதைச் செய்யும் குழந்தைகள் மோசமாகவும் சுய-உணர்வுடனும் ஒலிக்கின்றனர். உங்கள் இயற்கையான குரலைப் பயன்படுத்துங்கள், சற்று சத்தமாக மற்றும் உறுதியாக முடிப்பதோடு. நாடகத்தை விட நம்பகத்தன்மை எப்போதும் வெல்லும்.",
        },
      },
      {
        num: "27",
        title: {
          en: "Replace 'um' with full short phrases",
          zh: "用完整短句代替「呃……」",
          ms: "Ganti 'um' dengan frasa pendek penuh",
          ta: "'um' ஐ முழுமையான குறுகிய சொற்றொடர்களுடன் மாற்றவும்",
        },
        body: {
          en: "Filler words ('um', 'like', 'so basically', 'you know') signal stalling, and after about three of them in a row, interviewers stop hearing the content and start counting the fillers. Replace them with short full phrases that buy real thinking time and sound deliberate: 'That's a good question.' / 'Let me put it this way.' / 'I'd say…' / 'The way I see it…' These are graceful stalling phrases — the difference is that 'um' tells the panel 'I have nothing yet' while 'Let me put it this way' tells them 'I'm choosing my words.'",
          zh: "口头禅（「呃」、「就是」、「基本上就是」、「就是说」）暴露你在拖延，连续 3 个之后评委就不再听内容，开始数你的口头禅了。换成几个能争取真正思考时间、又听起来像故意的短句：「That's a good question.」/「Let me put it this way.」/「I'd say…」/「我的看法是……」。它们也是「拖延」短句，但「呃」告诉评委「我现在什么都没想出来」，而「Let me put it this way」告诉他们「我在选词」。",
          ms: "Perkataan pengisi ('um', 'macam', 'so basically', 'you know') tanda menangguh, dan selepas tiga berturut, penemuduga berhenti dengar kandungan dan mula kira pengisi. Ganti dengan frasa pendek penuh yang beli masa berfikir sebenar dan bunyi sengaja: 'That's a good question.' / 'Let me put it this way.' / 'I'd say...' / 'Pada pandangan saya...' Ini frasa menangguh yang anggun — bezanya 'um' beritahu panel 'Saya tak ada apa-apa lagi' sementara 'Let me put it this way' beritahu mereka 'Saya sedang pilih perkataan.'",
          ta: "நிரப்பு வார்த்தைகள் ('um', 'like', 'so basically', 'you know') தாமதத்தைக் குறிக்கின்றன, தொடர்ந்து மூன்றுக்குப் பிறகு, நேர்காணலாளர்கள் உள்ளடக்கத்தைக் கேட்பதை நிறுத்தி, நிரப்பிகளை எண்ணத் தொடங்குகின்றனர். உண்மையான சிந்தனை நேரத்தை வாங்கும் மற்றும் வேண்டுமென்றே ஒலிக்கும் முழுமையான குறுகிய சொற்றொடர்களுடன் அவற்றை மாற்றவும்: 'That's a good question.' / 'Let me put it this way.' / 'I'd say…' / 'என் பார்வையில்...' இவை அழகான தாமத சொற்றொடர்கள் — வித்தியாசம் என்னவென்றால், 'um' குழுவிடம் 'எனக்கு இன்னும் எதுவும் இல்லை' என்று சொல்கிறது, அதே நேரத்தில் 'Let me put it this way' அவர்களுக்கு 'நான் வார்த்தைகளைத் தேர்ந்தெடுக்கிறேன்' என்று சொல்கிறது.",
        },
        tryThis: {
          en: "Practise out loud the difference:\n- Filler version: 'So, um, I think, like, the team was, you know, kind of struggling…'\n- Clean version: 'Let me think about that for a moment. The team — at first — was struggling.'\n\nA 2-week filler swap plan:\n- Week 1: every time you feel an 'um' coming, replace it with a closed-mouth pause (just stop speaking; lips together, no sound).\n- Week 2: replace 'um' with one of: 'That's a good question.' / 'Let me put it this way.' / 'I'd say...'\n\nBy week 3, the filler is mostly gone and the bridge phrases come automatically.",
          zh: "大声把两个版本练出来感受区别：\n- 口头禅版：「So, um, I think, like, the team was, you know, kind of struggling…」\n- 干净版：「Let me think about that for a moment. The team — at first — was struggling.」\n\n2 周口头禅替换计划：\n- 第 1 周：每次感觉「呃」要出来时，用「闭嘴停顿」代替（停一下，嘴唇合上，不出声）。\n- 第 2 周：用一句完整短句替换「呃」——「That's a good question.」/「Let me put it this way.」/「I'd say…」\n\n到第 3 周，口头禅基本消失，桥接短句自动来。",
          ms: "Latih kuat perbezaannya:\n- Versi pengisi: 'So, um, I think, like, the team was, you know, kind of struggling…'\n- Versi bersih: 'Let me think about that for a moment. The team — at first — was struggling.'\n\nPelan tukar pengisi 2 minggu:\n- Minggu 1: setiap kali rasa 'um' nak keluar, ganti dengan hentian mulut tertutup (henti cakap; bibir bersama, tiada bunyi).\n- Minggu 2: ganti 'um' dengan salah satu: 'That's a good question.' / 'Let me put it this way.' / 'I'd say...'\n\nMenjelang minggu 3, pengisi hampir hilang dan frasa sambungan datang automatik.",
          ta: "சத்தமாக வித்தியாசத்தை பயிற்சி செய்யுங்கள்:\n- நிரப்பு பதிப்பு: 'So, um, I think, like, the team was, you know, kind of struggling…'\n- தூய்மையான பதிப்பு: 'Let me think about that for a moment. The team — at first — was struggling.'\n\n2 வார நிரப்பி மாற்றத் திட்டம்:\n- வாரம் 1: 'um' வரும் என்று உணரும் ஒவ்வொரு முறையும், மூடிய வாய் இடைவெளியால் மாற்றவும் (பேசுவதை நிறுத்துங்கள்; உதடுகள் சேர்த்து, ஒலி இல்லை).\n- வாரம் 2: 'um'-ஐ ஒன்றுடன் மாற்றவும்: 'That's a good question.' / 'Let me put it this way.' / 'I'd say...'\n\n3வது வாரத்தில், நிரப்பி பெரும்பாலும் மறைந்துவிடும், பாலம் சொற்றொடர்கள் தானாக வரும்.",
        },
        avoid: {
          en: "Don't chase all fillers at once — it paralyses you. Pick your single worst one ('um' or 'like' is usually it) and only catch that one. Others fade naturally as your overall speaking gets cleaner. Trying to eliminate every filler simultaneously makes you so self-conscious that you stop speaking fluidly altogether — the cure becomes worse than the disease.",
          zh: "不要一次消灭所有口头禅——会让你说不出话。挑你最严重的一个（通常是「呃」或「就是」），只管那个。其他的随着整体说话变干净会自然减少。如果你想同时消灭所有口头禅，会变得过度自我审视，反而完全说不出流畅的话——「治疗」比「病」还糟。",
          ms: "Jangan kejar semua pengisi serentak — anda akan terkaku. Pilih yang paling teruk ('um' atau 'macam' biasanya) dan tangkap satu itu sahaja. Yang lain pudar sendiri bila percakapan keseluruhan jadi bersih. Cuba hapuskan setiap pengisi serentak buatkan anda sangat sedar diri sehingga anda berhenti bercakap dengan lancar langsung — rawatan jadi lebih teruk dari penyakit.",
          ta: "ஒரே நேரத்தில் எல்லா நிரப்பிகளையும் துரத்தாதீர்கள் — அது உங்களை முடக்கும். உங்கள் மிக மோசமான ஒன்றை ('um' அல்லது 'like' பொதுவாக அது) தேர்ந்தெடுத்து, அதை மட்டும் பிடிக்கவும். உங்கள் ஒட்டுமொத்த பேச்சு தூய்மையாக மாறும்போது மற்றவை இயற்கையாக மறையும். ஒவ்வொரு நிரப்பியையும் ஒரே நேரத்தில் அகற்ற முயற்சிப்பது உங்களை மிகவும் சுய-உணர்வுள்ளவராக்கி சரளமாக பேசுவதை முற்றிலும் நிறுத்தும் — சிகிச்சை நோயை விட மோசமாகிறது.",
        },
      },
    ],
  },
];
