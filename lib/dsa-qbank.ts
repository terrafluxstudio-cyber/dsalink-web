// DSA Interview Question Bank
// Questions are always in English (interviews are conducted in English).
// Subtext and approach guidance are provided in 4 languages for parents.
// Templates / example answers are in English (the actual interview language).

export interface QBankQuestion {
  id: string;
  q: string;
  subtext: { en: string; zh: string; ms: string; ta: string };
  approach: { en: string; zh: string; ms: string; ta: string };
  templates: { label: string; text: string }[];
}

export interface QBankCategory {
  id: string;
  label: { en: string; zh: string; ms: string; ta: string };
  questions: QBankQuestion[];
}

export const Q_BANK: QBankCategory[] = [
  // ─── CATEGORY 1: About You ────────────────────────────────────────────────
  {
    id: "cat-you",
    label: {
      en: "About You",
      zh: "关于你自己",
      ms: "Tentang Diri Anda",
      ta: "உங்களைப் பற்றி",
    },
    questions: [
      {
        id: "q-intro",
        q: "Tell me about yourself.",
        subtext: {
          en: "This isn't a warm-up filler. Teachers are assessing whether you can organise your thoughts under pressure, project confidence, and tell a coherent story about who you are. A rambling or overly rehearsed answer both score badly.",
          zh: "这不是暖场问题。考官在判断：你是否能在压力下有条理地表达，是否有自信，是否能讲清楚\"你是谁\"。答得散漫或背书感太强，分数都不高。",
          ms: "Ini bukan soalan pemanasan. Guru menilai sama ada anda boleh menyusun fikiran di bawah tekanan, menunjukkan keyakinan, dan menceritakan kisah yang koheren tentang diri anda.",
          ta: "இது ஒரு எளிய கேள்வி அல்ல. அழுத்தத்தின் கீழ் உங்கள் எண்ணங்களை ஒழுங்கமைக்கும் திறன், நம்பிக்கை மற்றும் உங்களைப் பற்றிய தெளிவான கதையை சொல்ல முடியுமா என்பதை ஆசிரியர்கள் மதிப்பிடுகிறார்கள்.",
        },
        approach: {
          en: "Use a 3-part structure: (1) who you are and your school, (2) your talent and a key achievement, (3) why you're here — what draws you to this school specifically. Keep it to 60–90 seconds. Don't read off your resume.",
          zh: "用三段结构：①你是谁、在哪所学校；②你的才能方向和一个亮点成就；③你为什么来这里——这所学校有什么特别吸引你。控制在60-90秒内，不要像背简历。",
          ms: "Gunakan struktur 3 bahagian: (1) siapa anda dan sekolah anda, (2) bakat dan pencapaian utama, (3) mengapa anda di sini — apa yang menarik anda ke sekolah ini khususnya. Jangan lebih 90 saat.",
          ta: "3-பகுதி அமைப்பைப் பயன்படுத்துங்கள்: (1) நீங்கள் யார், உங்கள் பள்ளி, (2) உங்கள் திறன் மற்றும் ஒரு முக்கிய சாதனை, (3) ஏன் இங்கே — இந்த பள்ளியில் என்ன சிறப்பு உங்களை ஈர்க்கிறது. 60-90 வினாடிகளுக்குள் வைத்திருங்கள்.",
        },
        templates: [
          {
            label: "Structure template",
            text: "My name is [Name], and I'm a Primary 6 student at [School]. I've been [playing / performing / training in] [talent area] for [X] years. My proudest achievement so far is [specific achievement]. What drives me is [genuine motivation — e.g., the discipline the sport teaches me / the way music lets me express what words can't]. I'm applying to [School] because [specific reason — mention something concrete about the programme, team, or ethos]. I'm excited about the opportunity to grow here.",
          },
          {
            label: "Shorter, punchy version",
            text: "Hi, I'm [Name] from [School]. I've been [talent] for [X] years — it's been a big part of who I am. My highlight was [one achievement]. Outside of [talent], I [one other genuine interest]. I'm here because [School]'s [programme] is [specific quality], and I believe I can both contribute to and grow from it.",
          },
        ],
      },
      {
        id: "q-three-words",
        q: "Describe yourself in three words. Why those words?",
        subtext: {
          en: "Schools are checking your self-awareness. They want qualities that match what good DSA students need: resilience, coachability, curiosity, leadership. A student who picks 'funny, nice, friendly' hasn't thought about this seriously.",
          zh: "学校在测试你的自我认知。他们希望听到的词是优秀DSA生所具备的素质：抗压力、可教性、求知欲、领导力。如果你选了\"好笑、好人、合群\"，说明你没认真想过。",
          ms: "Sekolah menilai kesedaran diri anda. Mereka ingin mendengar kualiti yang diperlukan pelajar DSA yang baik: daya tahan, kemampuan belajar, rasa ingin tahu, kepimpinan.",
          ta: "பள்ளிகள் உங்கள் சுய விழிப்புணர்வை சரிபார்க்கின்றன. நல்ல DSA மாணவர்களுக்கு தேவையான குணங்களை — மீளுமை, கற்றுக்கொள்ளும் திறன், ஆர்வம், தலைமைத்துவம் — கேட்க விரும்புகிறார்கள்.",
        },
        approach: {
          en: "Pick words that reflect character, not just talent skill. Back each word with one brief, specific example — not a definition. Avoid generic 'I'm hardworking' unless you have a story that makes it concrete.",
          zh: "选体现性格的词，不只是才艺技能。每个词要配一个简短、具体的例子——不是下定义。避免空洞的\"我很努力\"，除非你有一个能让它鲜活的真实故事。",
          ms: "Pilih kata-kata yang mencerminkan watak, bukan sekadar kemahiran. Sokong setiap kata dengan contoh ringkas dan spesifik — bukan definisi. Elakkan 'saya rajin' yang terlalu umum.",
          ta: "திறன் மட்டுமல்ல, குணத்தை பிரதிபலிக்கும் வார்த்தைகளை தேர்ந்தெடுங்கள். ஒவ்வொரு வார்த்தைக்கும் ஒரு சுருக்கமான, குறிப்பிட்ட உதாரணம் தாருங்கள்.",
        },
        templates: [
          {
            label: "Character-led answer",
            text: "I'd say: resilient, coachable, and curious. Resilient — because when I [specific setback], I didn't give up; I [what you did instead]. Coachable — my coach has said I take feedback well, and I genuinely enjoy improving, not just performing. Curious — I'm always asking why things work the way they do, whether it's [in my sport/in the music piece/in the maths problem]. I think those three things together are what make me the kind of student who grows in a rigorous programme.",
          },
        ],
      },
      {
        id: "q-strengths",
        q: "What are your strengths? What are your weaknesses?",
        subtext: {
          en: "This tests self-awareness and honesty. Schools don't want perfectionists who say 'my weakness is I work too hard.' They want a student who knows themselves — including their gaps — and is actively doing something about it.",
          zh: "这道题测的是自我认知和诚实。学校不想听到\"我的缺点是太努力了\"这种假谦虚。他们想见到真正了解自己——包括盲点——并且在积极改进的学生。",
          ms: "Ini menguji kesedaran diri dan kejujuran. Sekolah tidak mahukan jawapan klise seperti 'kelemahan saya adalah bekerja terlalu keras.' Mereka ingin pelajar yang kenal diri sendiri dan sedang berusaha mengatasi kelemahan.",
          ta: "இது சுய விழிப்புணர்வு மற்றும் நேர்மையை சோதிக்கிறது. பள்ளிகள் 'என் பலவீனம் என்னவென்றால் நான் மிகவும் கடினமாக உழைக்கிறேன்' என்ற பொய்யான பதிலை விரும்பவில்லை.",
        },
        approach: {
          en: "Strength: connect it directly to your talent area and give evidence. Weakness: choose a real one, but frame it as something you're actively working to improve — not a fatal flaw. Coaches and teachers respect students who own their gaps.",
          zh: "强项：直接和你的才能领域挂钩，给出实例。弱点：选一个真实的，但框定为你正在积极改进的方向——不是致命缺陷。能正视自己盲点的学生，老师和教练会更尊重。",
          ms: "Kekuatan: hubungkan dengan bidang bakat dan berikan bukti. Kelemahan: pilih yang nyata, tetapi bingkaikan sebagai sesuatu yang anda sedang usahakan — bukan kecacatan yang kritikal.",
          ta: "பலம்: உங்கள் திறன் பகுதியுடன் நேரடியாக இணைத்து சான்று தாருங்கள். பலவீனம்: உண்மையான ஒன்றை தேர்ந்தெடுங்கள், ஆனால் தீவிரமாக மேம்படுத்திக்கொண்டிருக்கிறீர்கள் என்று சட்டகமிடுங்கள்.",
        },
        templates: [
          {
            label: "Balanced strength + weakness",
            text: "My main strength is [e.g., mental composure under pressure — I've noticed I tend to play better in finals than in practice, because competition sharpens my focus]. For my weakness, I'd be honest: I [e.g., tend to be hard on myself after a poor performance, and it can affect the next session]. I've been working on this by [e.g., my coach and I do a short 'reset conversation' after a bad session — I name three things I did well before going home]. It's still something I'm managing, but I've already seen it improve.",
          },
        ],
      },
      {
        id: "q-role-model",
        q: "Who is someone you admire, and what have you learned from them?",
        subtext: {
          en: "Schools are testing reflection depth. A student who names a generic celebrity ('Cristiano Ronaldo because he's the best') hasn't really thought about it. A student who names someone specific — and articulates a precise quality they've learned from — shows the kind of self-awareness DSA schools value.",
          zh: "学校在测试反思深度。说\"C罗，因为他最强\"的学生没真正思考过。说出一个具体的人——并清楚说明从对方身上学到的某种具体品质——才展示了DSA学校看重的自我意识。",
          ms: "Sekolah menguji kedalaman refleksi. Pelajar yang menyebut selebriti umum belum berfikir betul-betul. Pelajar yang menyebut seseorang yang spesifik dan menjelaskan kualiti tepat yang mereka pelajari menunjukkan kesedaran diri.",
          ta: "பள்ளிகள் சிந்தனை ஆழத்தை சோதிக்கின்றன. பொதுவான பிரபலத்தை குறிப்பிடும் மாணவர் உண்மையில் சிந்திக்கவில்லை. குறிப்பிட்ட நபரை குறிப்பிட்டு, கற்றுக்கொண்ட துல்லியமான குணத்தை விளக்கும் மாணவர் சுய விழிப்புணர்வை காட்டுகிறார்.",
        },
        approach: {
          en: "Pick someone real you've actually engaged with — read about, watched closely, or know personally. The lesson should be one specific quality, not 'they're great.' Bonus if the person isn't the obvious GOAT in your field, because that signals genuine engagement rather than default fandom.",
          zh: "选一个你真正接触过的人——读过其传记、近距离观察过、或亲身认识。学到的东西要是一个具体品质，不是\"他很厉害\"。如果选的不是你领域里最显眼的那位GOAT会加分，因为这表明你是真的关注，不是默认追星。",
          ms: "Pilih seseorang yang anda benar-benar terlibat dengan — baca tentang mereka, perhatikan rapat, atau kenali secara peribadi. Pelajaran perlu menjadi satu kualiti spesifik, bukan 'mereka hebat.'",
          ta: "நீங்கள் உண்மையில் ஈடுபட்ட ஒருவரை தேர்ந்தெடுங்கள் — அவர்களைப் பற்றி படித்தீர்கள், கூர்ந்து கவனித்தீர்கள் அல்லது தனிப்பட்ட முறையில் அறிந்திருக்கிறீர்கள். பாடம் ஒரு குறிப்பிட்ட குணமாக இருக்க வேண்டும்.",
        },
        templates: [
          {
            label: "Specific person + specific lesson",
            text: "Someone I really admire is [specific person — a coach, an athlete who isn't the most famous one, a family member, an older teammate]. What's stayed with me isn't their results — it's [specific quality, e.g., the way they handle losing / how they treat younger players / their habit of doing the unglamorous work no one sees]. I remember [specific moment or detail you observed or read about]. That changed how I think about [aspect of your own journey]. I try to apply it by [specific thing you've done because of them].",
          },
        ],
      },
      {
        id: "q-reading",
        q: "What have you been reading lately, or what topics are you curious about right now?",
        subtext: {
          en: "Top DSA schools care about intellectual curiosity, not just talent skill. This question quickly exposes whether you read at all and whether you have genuine interests outside your training. 'I don't have time to read' is a poor answer; so is naming a book you obviously haven't actually engaged with.",
          zh: "顶尖DSA学校看重知识好奇心，不只是才艺技能。这个问题会迅速暴露你是否真的阅读、是否有训练之外的真正兴趣。\"我没时间读书\"是糟糕的回答；说出一本明显没真正读过的书也是。",
          ms: "Sekolah DSA teratas mengambil berat tentang rasa ingin tahu intelektual, bukan sekadar kemahiran bakat. Soalan ini mendedahkan sama ada anda membaca dan mempunyai minat tulen di luar latihan.",
          ta: "சிறந்த DSA பள்ளிகள் அறிவுசார் ஆர்வத்தை மதிக்கின்றன, வெறும் திறன் மட்டுமல்ல. இந்த கேள்வி நீங்கள் படிக்கிறீர்களா, பயிற்சிக்கு வெளியே உண்மையான ஆர்வங்கள் உள்ளனவா என்பதை வெளிப்படுத்துகிறது.",
        },
        approach: {
          en: "Be honest about your actual format — books are best, but articles, well-made YouTube channels, or podcasts count if you engage with them seriously. Name one specific thing and a real takeaway. Connect it to a question you're trying to answer or something it changed in how you think.",
          zh: "诚实说出你真正接触的形式——书最好，但你真正认真看的文章、优质YouTube频道、播客也算。说出一个具体内容和真实收获。把它和你正在思考的某个问题、或者它改变了你的某个想法连接起来。",
          ms: "Jujur tentang format sebenar — buku terbaik tetapi artikel, saluran YouTube berkualiti, atau podcast juga dikira jika anda terlibat secara serius. Sebutkan sesuatu yang spesifik dan pengajaran sebenar.",
          ta: "உங்கள் உண்மையான வடிவத்தைப் பற்றி நேர்மையாக இருங்கள் — புத்தகங்கள் சிறந்தவை ஆனால் கட்டுரைகள், நல்ல YouTube சேனல்கள் அல்லது போட்காஸ்ட்களும் தீவிரமாக ஈடுபட்டால் கணக்கில் வரும்.",
        },
        templates: [
          {
            label: "Honest engagement + takeaway",
            text: "I've recently been reading / watching / listening to [specific title and author/creator]. It's about [one-line description]. What's interested me is [specific idea or insight that hooked you]. It made me think about [how it connects to your own life, your talent, or a question you've been asking]. Outside of that, I'm generally curious about [one broader topic area — e.g., how athletes recover mentally between competitions / why some teams build culture so much better than others]. I find I learn best when I can connect what I'm reading to something I'm actually trying to do.",
          },
        ],
      },
      {
        id: "q-free-time",
        q: "What do you do in your free time outside of school and training?",
        subtext: {
          en: "Schools want a rounded human being, not a one-dimensional performer. This question also reveals whether you have genuine interests or just optimised hobbies. An authentic answer — even an unexpected one — beats a calculated answer every time.",
          zh: "学校想看到一个立体的人，不是只会一件事的机器。这道题也在看你是否有真正的兴趣，还是只会\"优化\"爱好清单。真实的回答——哪怕有点意外——比精心算计的回答更好。",
          ms: "Sekolah mahukan insan yang seimbang, bukan pemain satu dimensi. Soalan ini juga mendedahkan sama ada anda mempunyai minat yang tulen atau sekadar mengoptimumkan hobi demi kesan baik.",
          ta: "பள்ளிகள் ஒரு நிரம்பிய மனிதரை விரும்புகின்றன, ஒரே பரிமாண செயல்திறன் கொண்டவரை அல்ல. இந்த கேள்வி உங்களுக்கு உண்மையான ஆர்வங்கள் இருக்கின்றனவா என்பதையும் வெளிப்படுத்துகிறது.",
        },
        approach: {
          en: "Name 1–2 genuine interests — even something modest like reading, cooking, or gaming. Connect at least one of them to a character quality or to how it supports your main talent. The goal is to seem like a real, curious person.",
          zh: "说1-2个真实爱好——即使是读书、做饭、游戏这类普通的。至少把其中一个连接到某个性格特质，或者说明它如何支撑你的主要才能。目的是让自己像个真实的、有好奇心的人。",
          ms: "Sebutkan 1-2 minat yang tulen. Hubungkan sekurang-kurangnya satu daripadanya dengan kualiti watak atau cara ia menyokong bakat utama anda.",
          ta: "1-2 உண்மையான ஆர்வங்களை குறிப்பிடுங்கள். குறைந்தது ஒன்றை ஒரு குண பண்பு அல்லது உங்கள் முக்கிய திறனை எவ்வாறு ஆதரிக்கிறது என்பதுடன் இணையுங்கள்.",
        },
        templates: [
          {
            label: "Genuine + connected answer",
            text: "Besides training, I really enjoy [e.g., reading — especially biographies of athletes and coaches]. I find it gives me perspective: seeing how [a professional athlete / musician / scientist] dealt with failure or built their career makes me think differently about my own journey. I also [e.g., cook simple meals on weekends — it's a way to reset and do something completely different from sport]. I think having that outlet actually makes me sharper when I come back to training.",
          },
        ],
      },
    ],
  },

  // ─── CATEGORY 2: About Your Talent ───────────────────────────────────────
  {
    id: "cat-talent",
    label: {
      en: "About Your Talent",
      zh: "关于你的才能",
      ms: "Tentang Bakat Anda",
      ta: "உங்கள் திறனைப் பற்றி",
    },
    questions: [
      {
        id: "q-spark",
        q: "What sparked your interest in [your talent area]?",
        subtext: {
          en: "This is an authenticity check. Schools have heard many polished, generic answers. They want a real moment — a specific person, event, or feeling that started it all. A memorable origin story stands out and shows the talent is genuinely yours, not just parent-driven.",
          zh: "这是真实性测试。学校听过太多漂亮的套话了。他们想要一个真实的瞬间——某个具体的人、事件或感受，让你开始走上这条路。一个令人印象深刻的起源故事，能证明这个才能真的属于你，而不是被父母推着走的。",
          ms: "Ini adalah ujian keaslian. Sekolah telah mendengar banyak jawapan umum yang dipoles. Mereka mahukan momen sebenar — orang, acara, atau perasaan tertentu yang mencetuskan semuanya.",
          ta: "இது நம்பகத்தன்மை சோதனை. பள்ளிகள் பல பொது, நேர்த்தியான பதில்களை கேட்டுள்ளன. அவர்கள் ஒரு உண்மையான தருணத்தை விரும்புகிறார்கள் — ஒரு குறிப்பிட்ட நபர், நிகழ்வு அல்லது உணர்வு.",
        },
        approach: {
          en: "Be specific and personal. 'I watched the Olympics and felt inspired' is too generic. 'I watched my uncle play and he let me try his racket, and I just couldn't stop' is real. The more specific and sensory the memory, the more authentic it sounds.",
          zh: "要具体、要有个人色彩。\"我看了奥运会觉得很励志\"太笼统了。\"我看着叔叔打球，他让我试了他的球拍，我就停不下来了\"才是真实的。记忆越具体、越有画面感，听起来越真实。",
          ms: "Jadilah spesifik dan peribadi. 'Saya menonton Olimpik dan berasa terinspirasi' terlalu umum. Lebih baik: 'Saya melihat ibu saya menari dan saya hanya ingin melakukannya juga.' Semakin spesifik, semakin autentik.",
          ta: "குறிப்பிட்டதாகவும் தனிப்பட்டதாகவும் இருங்கள். 'ஒலிம்பிக்ஸ் பார்த்து ஊக்கமடைந்தேன்' மிகவும் பொதுவானது. 'என் அண்ணன் விளையாடுவதை பார்த்தேன், அவர் என்னை முயற்சிக்க விட்டார், நான் நிறுத்த முடியவில்லை' — இது உண்மையானது.",
        },
        templates: [
          {
            label: "Specific origin story",
            text: "It started when I was about [age]. [I watched / I attended / My [parent/sibling/friend] took me to] [specific event or moment]. I remember [a specific sensory detail — the sound, the feeling, the moment]. Something about it just clicked. I begged [parent] to let me try it, and from the first session, I was hooked. Looking back, that moment completely changed what I spend my time on.",
          },
          {
            label: "Slower build story",
            text: "Honestly, it wasn't one moment — it grew on me. I started [when / how], and initially I wasn't that serious about it. But around [age/year], [something changed — a teacher noticed my potential / I had a breakthrough / I started competing and realised I loved it]. That's when it shifted from something I did to something I cared about.",
          },
        ],
      },
      {
        id: "q-achievement",
        q: "What is your greatest achievement in your talent area so far?",
        subtext: {
          en: "Schools are not just listing your trophies — they want to know what the achievement cost you and what it taught you. Two students can have the same award; the one who reflects on what it took and what it meant will always score higher.",
          zh: "学校不是在盘点你的奖杯——他们想知道这个成就让你付出了什么、教会了你什么。两个学生可以有同样的奖项，能反思过程和意义的那个人得分更高。",
          ms: "Sekolah bukan sekadar menyenaraikan trofi anda — mereka ingin tahu apa yang perlu anda korbankan dan apa yang anda pelajari. Refleksi lebih penting daripada sijil.",
          ta: "பள்ளிகள் உங்கள் தொப்பிகளை பட்டியலிடுவதில்லை — உங்கள் சாதனை உங்களுக்கு என்ன கஷ்டத்தை அளித்தது, என்ன கற்றுக்கொடுத்தது என்பதை அறிய விரும்புகிறார்கள்.",
        },
        approach: {
          en: "State the achievement briefly, then spend MORE time on: what it took to get there (the obstacles, sacrifices, training), and what it taught you about yourself or your sport. This shows maturity beyond just a results-oriented mindset.",
          zh: "简短说明成就，然后把更多时间花在：达到这个成就需要什么（克服的困难、牺牲、训练过程），以及它教会了你什么。这展示了超越结果导向的成熟度。",
          ms: "Nyatakan pencapaian secara ringkas, kemudian luangkan lebih banyak masa untuk: apa yang diperlukan untuk mencapainya, dan apa yang ia ajarkan anda tentang diri sendiri.",
          ta: "சாதனையை சுருக்கமாக கூறுங்கள், பின்னர் அதை அடைய என்ன தேவைப்பட்டது, அது உங்களுக்கு என்ன கற்றுக்கொடுத்தது என்பதில் அதிக நேரம் செலவிடுங்கள்.",
        },
        templates: [
          {
            label: "Achievement + reflection",
            text: "My proudest achievement was [specific result — competition placement, grade, performance milestone]. But what I'm even prouder of is how I got there. [Describe the path — what you had to overcome, how long you worked for it, what almost stopped you]. That experience taught me [specific lesson — e.g., that my mental game matters as much as my physical preparation / that consistency over 6 months beats one intense week / that I'm capable of more than I thought when I commit fully].",
          },
        ],
      },
      {
        id: "q-challenge",
        q: "What has been your biggest challenge in your talent area, and how did you overcome it?",
        subtext: {
          en: "This is a resilience test dressed as an information question. The school isn't asking 'did you face difficulty?' — they know you did. They're asking: how did you respond when things got hard? This is one of the most important questions in a DSA interview.",
          zh: "这是一道用信息问题包装的抗压力测试。学校不是在问\"你有没有遇到困难？\"——他们知道你遇过。他们问的是：当事情变难时，你是怎么反应的？这是DSA面试中最重要的问题之一。",
          ms: "Ini adalah ujian daya tahan yang disamarkan sebagai soalan maklumat. Sekolah tidak bertanya 'adakah anda menghadapi kesukaran?' — mereka tahu anda ada. Mereka bertanya: bagaimana anda bertindak balas?",
          ta: "இது ஒரு தகவல் கேள்வியாக மாறுவேடமிட்ட மீளுமை சோதனை. 'கடினமான சூழ்நிலையை எதிர்கொண்டீர்களா?' என்று கேட்கவில்லை — அவர்களுக்கு தெரியும். நீங்கள் எவ்வாறு பதிலளித்தீர்கள் என்பதை கேட்கிறார்கள்.",
        },
        approach: {
          en: "Choose a challenge that was real and significant — not 'I once came second in training.' Then walk through your specific response step by step. Focus on what YOU did, not what your coach or parent told you to do. End with the growth or outcome.",
          zh: "选一个真实且重要的挑战——不是\"我在训练赛里得了第二\"。然后一步步说明你的具体应对。重点放在你自己做了什么，不是教练或父母叫你做什么。最后说出成长或结果。",
          ms: "Pilih cabaran yang nyata dan signifikan. Kemudian uraikan respons spesifik anda langkah demi langkah. Fokus pada apa yang ANDA lakukan, bukan apa yang jurulatih atau ibu bapa anda suruh.",
          ta: "உண்மையான மற்றும் குறிப்பிடத்தக்க சவாலை தேர்ந்தெடுங்கள். உங்கள் குறிப்பிட்ட பதிலை படி படியாக விவரியுங்கள். பயிற்சியாளர் அல்லது பெற்றோர் சொன்னதை அல்ல, நீங்கள் என்ன செய்தீர்கள் என்பதில் கவனம் செலுத்துங்கள்.",
        },
        templates: [
          {
            label: "Injury / setback story",
            text: "My biggest challenge was [injury / performance plateau / long losing streak / dropping out of a squad]. It was hard because [specific reason — e.g., it happened right before a major competition / I had trained for 6 months for that opportunity]. Instead of [negative response — e.g., quitting / giving up on the goal], I [specific action — e.g., focused on what I could do while recovering / worked with my coach to change my approach / used the time to study the game more deeply]. When I came back, I [outcome]. More importantly, I learned [specific growth].",
          },
        ],
      },
      {
        id: "q-quit",
        q: "Have you ever wanted to quit? What made you keep going?",
        subtext: {
          en: "Schools specifically want the honest 'yes.' A student who says 'No, I've never wanted to quit' either lacks self-awareness or is trying too hard to look perfect. Schools want a student who has been tested, was honest about it, and chose to push through. The 'why you kept going' matters more than the desire to quit.",
          zh: "学校专门想听到诚实的\"有\"。一个说\"从来没有想过放弃\"的学生，要么缺乏自我认知，要么在装。学校想见到一个经历过考验、坦然承认、然后选择坚持下去的学生。\"为什么没有放弃\"比\"想要放弃\"更重要。",
          ms: "Sekolah khususnya mahukan jawapan 'ya' yang jujur. Pelajar yang berkata 'Tidak, saya tidak pernah mahu berhenti' mungkin kurang kesedaran diri. Sekolah mahukan pelajar yang pernah diuji dan memilih untuk teruskan.",
          ta: "பள்ளிகள் குறிப்பாக நேர்மையான 'ஆம்' என்பதை விரும்புகின்றன. 'இல்லை, நான் எப்போதும் விட விரும்பவில்லை' என்று சொல்லும் மாணவர் சுய விழிப்புணர்வு இல்லாதவர். பரீட்சிக்கப்பட்டு, தொடர்ந்து சென்ற மாணவரை விரும்புகிறார்கள்.",
        },
        approach: {
          en: "Don't deny it. Name the specific moment you wanted to quit, describe the emotion honestly, then tell the story of what changed your mind or what pulled you back. The internal shift matters — it should come from you, not just 'my parent told me not to quit.'",
          zh: "不要否认。说出那个具体的想放弃的时刻，诚实描述当时的情绪，然后讲述是什么改变了你的想法或把你拉回来的。内心的转变很重要——应该源自你自己，而不只是\"我父母叫我不要放弃\"。",
          ms: "Jangan nafikan. Sebutkan momen spesifik anda mahu berhenti, huraikan emosi dengan jujur, kemudian ceritakan apa yang mengubah fikiran anda. Perubahan dalaman penting — ia perlu datang dari anda sendiri.",
          ta: "மறுக்காதீர்கள். நீங்கள் விட விரும்பிய குறிப்பிட்ட தருணத்தை கூறுங்கள், உணர்வை நேர்மையாக விவரியுங்கள், பின்னர் என்ன மாற்றியது என்பதை கூறுங்கள். உள் மாற்றம் முக்கியம்.",
        },
        templates: [
          {
            label: "Honest + resolved",
            text: "Yes, honestly. There was a point — [specific context, e.g., after I was dropped from the team / when I had a string of poor performances / when I was injured and watching my peers move ahead] — where I genuinely thought about stopping. I felt [specific emotion — frustrated / like I wasn't good enough / like it wasn't worth the sacrifice]. What changed was [specific moment or realisation — e.g., I went back and watched a video of one of my best performances and remembered why I fell in love with it / my coach said something that reframed it for me / I spoke to someone who had quit and heard their regret]. From that point, I didn't just continue — I came back more committed, because I'd chosen it again deliberately.",
          },
        ],
      },
      {
        id: "q-improve",
        q: "What is one area of your [talent] you're actively working to improve right now?",
        subtext: {
          en: "This tests whether you have a growth mindset and self-honesty. A student who can name a specific technical or mental weakness — and describe what they're doing about it — is far more coachable than one who can only talk about their strengths.",
          zh: "这在测试你是否有成长型思维和对自己诚实的能力。能说出具体的技术或心理弱点，并描述自己在做什么改进的学生，比只会说自己优点的学生更容易被教练培养。",
          ms: "Ini menguji sama ada anda mempunyai mentaliti pertumbuhan dan kejujuran diri. Pelajar yang boleh menyebutkan kelemahan teknikal atau mental tertentu jauh lebih mudah dibimbing.",
          ta: "இது வளர்ச்சி மனப்பான்மை மற்றும் சுய நேர்மை இருக்கிறதா என்று சோதிக்கிறது. ஒரு குறிப்பிட்ட தொழில்நுட்ப அல்லது மனரீதியான பலவீனத்தை கூறி, அதை மேம்படுத்த என்ன செய்கிறீர்கள் என்று சொல்லும் மாணவர் மிகவும் சிறப்பாக இருப்பார்.",
        },
        approach: {
          en: "Name something real and specific — not vague ('I want to get better overall'). Then describe the exact method you're using to improve it. This shows you work deliberately, not just by showing up to practice.",
          zh: "说一个真实具体的东西——不要含糊（\"我想全面提高\"）。然后描述你用什么具体方法在改进它。这表明你是有意识地练习，不只是出现在训练场。",
          ms: "Sebutkan sesuatu yang nyata dan spesifik — bukan samar-samar. Kemudian huraikan kaedah tepat yang anda gunakan untuk memperbaikinya. Ini menunjukkan anda berlatih dengan niat.",
          ta: "உண்மையான மற்றும் குறிப்பிட்டதை கூறுங்கள் — 'மொத்தமாக மேம்படுத்த விரும்புகிறேன்' என்று சொல்லாதீர்கள். நீங்கள் அதை மேம்படுத்த பயன்படுத்தும் சரியான முறையை விவரியுங்கள்.",
        },
        templates: [
          {
            label: "Specific improvement focus",
            text: "Right now I'm focused on [specific skill — e.g., my first-step reaction speed / my ability to sight-read at tempo / maintaining consistent technique when I'm tired]. The reason I identified this is [e.g., after reviewing footage from my last competition / my coach pointed it out / I noticed it costing me in pressure situations]. What I'm doing is [specific drill or practice method — e.g., working on it for 10 minutes at the start of every session / using a metronome to slow things down and rebuild / watching recordings of elite performers do it well]. I've already started to see [early improvement or understanding].",
          },
        ],
      },
      {
        id: "q-sacrifice",
        q: "What have you had to give up to pursue your [talent] seriously?",
        subtext: {
          en: "Schools are testing whether you understand the real cost of what you're doing. 'Nothing, I love it' is a red flag — it either means the commitment hasn't been deep enough, or you lack the maturity to see the trade-off. Schools want students who chose this consciously, knowing what it cost.",
          zh: "学校在测试你是否理解自己所做的事的真实代价。\"没什么牺牲，我喜欢它\"是危险信号——要么说明投入不够深，要么说明你不够成熟、看不到取舍。学校想要那些清楚代价、有意识做出选择的学生。",
          ms: "Sekolah menguji sama ada anda memahami kos sebenar apa yang anda lakukan. 'Tiada apa-apa, saya sukakannya' adalah isyarat bahaya — sama ada komitmen tidak cukup mendalam, atau anda tidak cukup matang untuk melihat tukar ganti.",
          ta: "உங்கள் செயலின் உண்மையான விலையை நீங்கள் புரிந்துகொள்கிறீர்களா என்று பள்ளிகள் சோதிக்கின்றன. 'எதையும் இல்லை, எனக்கு இது பிடிக்கும்' என்பது ஆபத்தான அறிகுறி — உறுதிமொழி போதுமான ஆழமாக இல்லை, அல்லது நீங்கள் முதிர்ச்சியடையவில்லை.",
        },
        approach: {
          en: "Name something real — time with friends, sleep, other hobbies, family weekends, a different talent path you didn't pursue. Then show you understood the trade-off and chose it with eyes open. Avoid sounding bitter — the tone should be 'I knew what I was choosing, and I'd choose it again.'",
          zh: "说一个真实的东西——朋友时间、睡眠、其他爱好、家庭周末、你没走的另一条才能路径。然后表明你理解这个取舍，并且是睁着眼睛做出选择的。避免显得苦涩——语气应该是\"我清楚自己选了什么，再来一次我还会这样选\"。",
          ms: "Sebutkan sesuatu yang nyata — masa bersama kawan, tidur, hobi lain, hujung minggu keluarga. Kemudian tunjukkan anda faham tukar ganti dan memilih dengan mata terbuka. Elakkan kedengaran pahit.",
          ta: "உண்மையான ஒன்றை குறிப்பிடுங்கள் — நண்பர்களுடன் நேரம், தூக்கம், மற்ற பொழுதுபோக்குகள், குடும்ப வார இறுதிகள். பின்னர் நீங்கள் வர்த்தகத்தை புரிந்துகொண்டு, கண்களைத் திறந்து தேர்வு செய்தீர்கள் என்று காட்டுங்கள்.",
        },
        templates: [
          {
            label: "Conscious trade-off",
            text: "Honestly, [specific thing — e.g., a lot of my weekends with friends, especially through P5 and P6 / a second interest I was good at but had to drop because I couldn't do both seriously / a lot of unstructured time that my classmates have]. I won't pretend that's always been easy — there have been moments, like [specific example — when my friends were at a birthday party and I had a competition / when I saw classmates picking up new things while I was stuck in routine], when I noticed what I was giving up. But I made the choice deliberately, and I'd make it again. [Talent] has given me [what it gave you that justifies the cost — a sense of purpose / a community / a version of myself I'm proud of].",
          },
        ],
      },
      {
        id: "q-mid-mistake",
        q: "What do you do when you make a mistake during a performance or competition?",
        subtext: {
          en: "This is different from how you handle pre-match nerves. Schools want to see in-the-moment self-regulation: how fast can you let go of a bad rep, a missed note, a wrong shot — and refocus on the next one? Athletes and performers who can't reset mid-event are a coaching liability, no matter how talented.",
          zh: "这和如何应对赛前紧张是不一样的。学校想看到的是临场自我调节：一个失误的回合、一个走音、一次错球之后，你能多快放下、重新聚焦到下一个？无法在比赛中重置自己的运动员/表演者，不管多有才能，对教练来说都是负担。",
          ms: "Ini berbeza daripada bagaimana anda mengendalikan saraf sebelum perlawanan. Sekolah ingin melihat regulasi diri pada masa itu: berapa cepat anda boleh melupakan kesilapan dan fokus semula?",
          ta: "இது போட்டிக்கு முன் நரம்புகளை எவ்வாறு கையாள்கிறீர்கள் என்பதிலிருந்து வேறுபட்டது. பள்ளிகள் தருணத்தில் சுய ஒழுங்குமுறையை பார்க்க விரும்புகின்றன: ஒரு தவறை எவ்வளவு விரைவில் விட்டு மீண்டும் கவனம் செலுத்த முடியும்?",
        },
        approach: {
          en: "Be honest about what you used to do (dwell, panic, get angry at yourself), then describe the specific reset technique you now use — a physical cue, a breath, a word you say to yourself, a routine between points or movements. The goal is to show you've actively built a process, not just hoped you'd be tougher.",
          zh: "诚实说出你以前会怎么做（钻牛角尖、慌、生自己气），然后描述你现在用的具体重置方法——一个肢体动作、一个呼吸、一个你对自己说的词、点与点或动作之间的一套流程。目的是展示你主动建立了一套机制，不是单纯希望自己变强。",
          ms: "Jujur tentang apa yang anda biasa lakukan (terlalu fikir, panik, marah pada diri), kemudian huraikan teknik reset spesifik yang anda gunakan sekarang — isyarat fizikal, pernafasan, perkataan yang anda katakan pada diri sendiri.",
          ta: "முன்பு என்ன செய்தீர்கள் (கவலைப்படுதல், திகைப்பு, தன்னிடம் கோபம்) என்பதைப் பற்றி நேர்மையாக இருங்கள், பின்னர் இப்போது நீங்கள் பயன்படுத்தும் குறிப்பிட்ட மீட்டமைப்பு நுட்பத்தை விவரியுங்கள்.",
        },
        templates: [
          {
            label: "Honest reset process",
            text: "I used to [honest past habit — e.g., replay the mistake in my head for the next few minutes and play tight after / get visibly frustrated, which would compound into more mistakes]. What I do now is [specific reset technique — e.g., I have a physical cue: I tap my leg twice, take one deliberate breath, and say one word to myself like 'next' — it sounds small, but it gives my brain something concrete to do instead of replaying / I treat every point or every bar as a fresh start, and I don't allow myself to add up errors during the performance]. The shift was learning that the next moment is the only one I can actually affect. The mistake is already done — what matters is whether I add a second one because I'm still stuck on the first.",
          },
        ],
      },
    ],
  },

  // ─── CATEGORY 3: Why This School ─────────────────────────────────────────
  {
    id: "cat-school",
    label: {
      en: "Why This School",
      zh: "为什么选择这所学校",
      ms: "Mengapa Sekolah Ini",
      ta: "ஏன் இந்த பள்ளி",
    },
    questions: [
      {
        id: "q-why-school",
        q: "Why did you choose our school?",
        subtext: {
          en: "This is the most important question in the interview. Interviewers can immediately tell the difference between a researched answer and a generic one. 'Good reputation' and 'nice facilities' are non-answers. Schools want to know what is specifically meaningful to you about THIS programme.",
          zh: "这是面试中最重要的问题。考官一眼就能区分有备而来的答案和套话。\"口碑好\"和\"设施不错\"等于没回答。学校想知道这个项目对你有什么具体的、特别的意义。",
          ms: "Ini adalah soalan terpenting dalam temuduga. Pewawancara boleh terus membezakan antara jawapan yang dikaji dan jawapan generik. 'Reputasi baik' dan 'kemudahan bagus' bukan jawapan. Mereka ingin tahu apa yang bermakna khusus untuk anda.",
          ta: "இது நேர்காணலில் மிக முக்கியமான கேள்வி. நேர்காணலாளர்கள் ஆராய்ந்த பதிலையும் பொதுவான பதிலையும் உடனே வேறுபடுத்த முடியும். 'நல்ல பெயர்' மற்றும் 'நல்ல வசதிகள்' என்பது பதிலே அல்ல.",
        },
        approach: {
          en: "Name something concrete and specific: the school's CCA achievements, a particular coaching philosophy you learned about at the open house, a teacher or coach you've heard of, a programme structure that matches your development goals, or an alumnus whose path you admire. One specific detail beats three generic reasons.",
          zh: "说一些具体的东西：这所学校的CCA成就、开放日了解到的某个训练理念、你听说过的某位老师或教练、符合你发展目标的课程结构，或者你钦佩某位校友的路。一个具体的细节胜过三个笼统的理由。",
          ms: "Sebutkan sesuatu yang konkrit dan spesifik: pencapaian CCA sekolah, falsafah latihan tertentu yang anda pelajari di hari terbuka, program yang sesuai dengan matlamat anda, atau alumni yang anda kagumi.",
          ta: "குறிப்பிட்ட, உறுதியான ஒன்றை கூறுங்கள்: பள்ளியின் CCA சாதனைகள், திறந்த நாளில் கற்ற பயிற்சி தத்துவம், உங்கள் வளர்ச்சி இலக்குகளுக்கு பொருந்தும் திட்ட அமைப்பு.",
        },
        templates: [
          {
            label: "Research-led answer",
            text: "I chose [School] because of [specific reason 1 — e.g., your [CCA]'s track record at the national level, especially [recent achievement]]. But more than the results, what drew me was [specific reason 2 — e.g., from the open house, I heard your coach talk about developing athletes who think for themselves, not just follow instructions — and that philosophy matches how I want to grow]. I also spoke with [current student / friend who attends], and they said [specific thing that resonated]. I believe this is the right environment for where I want to go.",
          },
        ],
      },
      {
        id: "q-open-house",
        q: "Did you attend our open house? What impressed you most?",
        subtext: {
          en: "Attending the open house shows initiative and genuine interest. If you didn't go, being honest and explaining how else you researched is acceptable — trying to fake details about an event you didn't attend is very easily caught and damages credibility.",
          zh: "参加开放日体现主动性和真诚兴趣。如果没去，诚实解释你如何以其他方式了解这所学校是可以接受的——假装参加过却说不出具体细节，很容易被识破，会严重损害可信度。",
          ms: "Menghadiri hari terbuka menunjukkan inisiatif dan minat yang tulen. Jika anda tidak hadir, jujur dan jelaskan bagaimana anda membuat penyelidikan dengan cara lain — jangan cuba memalsukan butiran.",
          ta: "திறந்த நாளில் கலந்துகொள்வது முன்முயற்சி மற்றும் உண்மையான ஆர்வத்தை காட்டுகிறது. சென்றிருக்காவிட்டால், நேர்மையாக கூறி வேறு விதத்தில் எவ்வாறு ஆராய்ந்தீர்கள் என்று விளக்குங்கள்.",
        },
        approach: {
          en: "If you went: name one or two specific things you saw, heard, or felt — not just 'it was great.' The more sensory or emotional the detail, the more credible. If you didn't go: acknowledge it honestly, then pivot to what you did do to learn about the school.",
          zh: "如果去了：说出你看到、听到或感受到的一两个具体细节——不只是\"感觉很好\"。越有感官细节或情感色彩，越可信。如果没去：诚实承认，然后转向你做了什么来了解这所学校。",
          ms: "Jika hadir: sebutkan satu atau dua perkara spesifik — bukan sekadar 'ia bagus.' Semakin deria atau emosi butirannya, semakin boleh dipercayai. Jika tidak hadir: akui dengan jujur, kemudian alih kepada apa yang anda lakukan.",
          ta: "சென்றிருந்தால்: நீங்கள் பார்த்த, கேட்ட அல்லது உணர்ந்த ஒன்று அல்லது இரண்டு குறிப்பிட்ட விவரங்களை கூறுங்கள். சென்றிருக்காவிட்டால்: நேர்மையாக ஒப்புக்கொண்டு, வேறு விதத்தில் என்ன செய்தீர்கள் என்று சொல்லுங்கள்.",
        },
        templates: [
          {
            label: "Attended — specific detail",
            text: "Yes, I attended on [date]. What impressed me most was [specific thing — e.g., watching your current [sport] team train during the demonstration session. What stood out was how the players communicated with each other — it wasn't just physical skill; they were thinking and calling out plays. That's the kind of team culture I want to be part of]. I also had a chance to speak with [a coach / student], who mentioned [specific thing they said that resonated].",
          },
          {
            label: "Didn't attend — honest pivot",
            text: "I wasn't able to make it to the open house due to [training commitment / another commitment], but I made sure to research [School] thoroughly. I [watched match footage from your team's 2024 season on YouTube / read through your CCA webpage in detail / reached out to a student currently in the programme]. From what I found, [specific insight]. I'm genuinely sorry I missed the open house, and attending it would have been my first choice.",
          },
        ],
      },
      {
        id: "q-contribute",
        q: "What would you contribute to our school community?",
        subtext: {
          en: "Schools are not just looking for talent receivers — they want contributors. This question tests whether you think beyond yourself. Schools want students who will lift others, lead, mentor, or bring something distinctive to the community beyond performance results.",
          zh: "学校不只是在寻找接受资源的人——他们想要有贡献的人。这个问题测试你是否能超越自我思考。他们想要能带动他人、能领导、能指导、能给这个群体带来超出成绩之外的独特价值的学生。",
          ms: "Sekolah bukan sekadar mencari penerima bakat — mereka mahukan penyumbang. Soalan ini menguji sama ada anda berfikir melampaui diri sendiri. Sekolah mahukan pelajar yang akan mengangkat orang lain.",
          ta: "பள்ளிகள் திறன் பெறுவோரை மட்டும் தேடவில்லை — பங்களிப்பவர்களை விரும்புகின்றன. நீங்கள் உங்களுக்கு அப்பால் சிந்திக்கிறீர்களா என்று சோதிக்கிறார்கள்.",
        },
        approach: {
          en: "Go beyond your physical talent. Think about: leadership qualities, bilingual or cultural strengths, unique perspectives, mentoring potential, work ethic that influences teammates. Make it specific to this school's community if you can.",
          zh: "超越你的身体才能。想想：领导力品质、双语或文化优势、独特视角、指导潜力、能影响队友的工作态度。如果可以的话，让它具体到这所学校的群体。",
          ms: "Melampaui bakat fizikal anda. Fikirkan tentang: kualiti kepimpinan, kekuatan dwibahasa atau budaya, perspektif unik, potensi bimbingan, etos kerja yang mempengaruhi rakan sepasukan.",
          ta: "உங்கள் உடல் திறனை மீறி சிந்தியுங்கள். தலைமைத்துவ குணங்கள், இரு மொழி திறன்கள், தனித்துவமான கண்ணோட்டங்கள், வழிகாட்டல் திறன் பற்றி சிந்தியுங்கள்.",
        },
        templates: [
          {
            label: "Beyond talent contribution",
            text: "Beyond [my sport / music / talent], I think I'd contribute [specific quality 1 — e.g., a strong work ethic that I hope would be contagious — I'm the kind of person who does extra reps after practice, and I've noticed teammates sometimes stay back because of it]. I'd also like to [specific contribution 2 — e.g., mentor younger students who are earlier in their [talent] journey, because I remember how important it was to have an older student take interest in me]. I'm also [bilingual / familiar with a specific culture / have a background in a complementary area] which I think brings a different perspective to the team.",
          },
        ],
      },
      {
        id: "q-plan-b",
        q: "What would you do if you don't get into our DSA programme?",
        subtext: {
          en: "Schools are testing resilience and authentic motivation — not desperation. A student who says 'I'd be devastated and give up' is a red flag. Schools want to see that your love for your talent isn't contingent on this one outcome, while still being clear that this school is genuinely your first choice.",
          zh: "学校在测试抗压力和真实的动机——不是绝望。说\"我会崩溃放弃的\"是危险信号。学校想看到你对才能的热爱不依赖于这一个结果，同时又清楚表明这所学校确实是你的首选。",
          ms: "Sekolah menguji daya tahan dan motivasi tulen — bukan keputusasaan. Pelajar yang berkata 'saya akan hancur dan menyerah' adalah isyarat bahaya. Mereka ingin melihat bahawa cinta anda terhadap bakat anda tidak bergantung pada hasil ini sahaja.",
          ta: "பள்ளிகள் மீளுமை மற்றும் உண்மையான உந்துதலை சோதிக்கின்றன — சேற்றாசையை அல்ல. 'நான் தகர்ந்துவிடுவேன்' என்று சொல்வது ஆபத்தான அறிகுறி. உங்கள் திறனின் மீதான அன்பு இந்த ஒரு முடிவில் தங்கியிருக்கவில்லை என்பதை காட்டுங்கள்.",
        },
        approach: {
          en: "Show you have a plan B — not because you don't care, but because you're someone who keeps going regardless of one result. Acknowledge that this school is your first choice, but without desperation. Emphasise that your talent journey continues either way.",
          zh: "表明你有B计划——不是因为你不在乎，而是因为你是那种不管一个结果如何都会继续前进的人。承认这所学校是你的首选，但不要带有绝望感。强调不管结果如何，你的才能之路会继续。",
          ms: "Tunjukkan anda mempunyai pelan B — bukan kerana anda tidak peduli, tetapi kerana anda adalah seseorang yang terus maju tanpa mengira satu keputusan. Akui bahawa sekolah ini adalah pilihan pertama anda, tetapi tanpa rasa putus asa.",
          ta: "திட்டம் B இருப்பதை காட்டுங்கள் — கவலைப்படாததால் அல்ல, ஒரு முடிவைப் பொறுத்திருக்காமல் தொடர்பவர் என்பதால். இந்த பள்ளி உங்கள் முதல் விருப்பம் என்று ஒப்புக்கொள்ளுங்கள், ஆனால் ஆசையின்றி.",
        },
        templates: [
          {
            label: "Resilient + grounded",
            text: "I'd be genuinely disappointed — [School] is my first choice, and I've thought about this programme a lot. But I wouldn't stop. [My talent] is something I'll pursue wherever I end up. If DSA doesn't work out here, I'd look at [alternative path — e.g., other DSA schools / joining the relevant CCA through S1 posting / continuing to train outside of school]. What I know for certain is that [my passion for / commitment to talent area] doesn't depend on where I go to school — it's part of who I am.",
          },
        ],
      },
      {
        id: "q-why-dsa",
        q: "Why are you applying through DSA rather than waiting for S1 posting?",
        subtext: {
          en: "This tests strategic awareness. Schools want to know that you (and your family) understand what DSA actually means: a confirmed offer locks you in, you can't appeal back into S1 posting. A student who can articulate why this pathway makes sense for them — beyond 'it's a safer route' — shows that the choice is deliberate, not just parent-driven.",
          zh: "这测试的是策略意识。学校想知道你（和你家人）真的明白DSA意味着什么：接受Confirmed Offer就锁死了，不能再回去走S1 posting。能说清楚为什么这条路对自己合适的学生——不是\"这条路更稳\"——表明这个选择是有意识的，不只是父母推的。",
          ms: "Ini menguji kesedaran strategik. Sekolah ingin tahu bahawa anda (dan keluarga) memahami apa DSA sebenarnya: tawaran yang disahkan mengikat anda. Pelajar yang boleh menjelaskan mengapa laluan ini sesuai untuk mereka menunjukkan pilihan yang berniat.",
          ta: "இது மூலோபாய விழிப்புணர்வை சோதிக்கிறது. பள்ளிகள் நீங்கள் (மற்றும் உங்கள் குடும்பம்) DSA என்றால் என்ன என்பதை புரிந்துகொண்டிருக்கிறீர்களா என்று அறிய விரும்புகின்றன: உறுதிப்படுத்தப்பட்ட சலுகை உங்களை பூட்டுகிறது.",
        },
        approach: {
          en: "Don't say 'because it gives me a guaranteed place.' That's the parent-PSLE-anxiety answer, and it tells the school nothing about you. Better: frame it as a fit story — this programme matches where you are in your talent journey, and you want to start building toward [X] from S1, not waste a year settling into a less aligned school.",
          zh: "不要说\"因为这能保证有学位\"。那是家长焦虑型答案，对学校来说没有信息量。更好的方式：把它框成匹配的故事——这个项目跟你才能成长的阶段对得上，你希望从中一就开始为[X]做准备，不想在一个不那么对口的学校浪费一年。",
          ms: "Jangan kata 'kerana ia memberi saya tempat yang dijamin.' Itu jawapan kebimbangan ibu bapa. Lebih baik: bingkaikan sebagai kisah kesesuaian — program ini sepadan dengan perjalanan bakat anda.",
          ta: "'எனக்கு உத்தரவாதமான இடம் தருகிறது' என்று சொல்லாதீர்கள். அது பெற்றோர் கவலையின் பதில். சிறந்தது: இதை பொருத்தக் கதையாக சட்டகமிடுங்கள் — இந்த திட்டம் உங்கள் திறன் பயணத்துடன் பொருந்துகிறது.",
        },
        templates: [
          {
            label: "Fit-led, deliberate choice",
            text: "I thought about this carefully with my family. The reason I'm going DSA — and specifically to [School] — is that I'm at a point in [talent] where the next step needs structure: [specific reason — e.g., a coaching environment that matches the level I've reached / a peer group that pushes me / a team or programme where I can start contributing from Day 1 of S1]. I know what accepting a confirmed offer means: I'm choosing this school over the S1 posting route, and I'm choosing it on purpose. I'd rather start building toward [specific goal] from secondary one than spend the year adjusting to a school whose programme doesn't fit where I'm trying to go.",
          },
        ],
      },
      {
        id: "q-first-year-goals",
        q: "What are your goals for your first year at our school?",
        subtext: {
          en: "Different from the 5/10-year question. Schools want to see realistic, near-term planning — across talent, academics, and adapting socially. A student who only talks about competition results is one-dimensional. One who shows they've thought about how to settle in academically and contribute to the team culture sounds ready.",
          zh: "和5/10年规划问题不一样。学校想看到现实的、近期的规划——涵盖才能、学业、社交适应。只谈比赛成绩的学生是单维度的。表明已经想过如何适应学业、如何贡献团队文化的学生听起来更ready。",
          ms: "Berbeza daripada soalan 5/10 tahun. Sekolah ingin melihat perancangan realistik jangka pendek — merangkumi bakat, akademik, dan penyesuaian sosial. Pelajar yang hanya bercakap tentang keputusan pertandingan adalah satu dimensi.",
          ta: "5/10 ஆண்டு கேள்வியிலிருந்து வேறுபட்டது. பள்ளிகள் யதார்த்தமான, குறுகிய கால திட்டமிடலை பார்க்க விரும்புகின்றன — திறன், கல்வி மற்றும் சமூக தழுவல் முழுவதும்.",
        },
        approach: {
          en: "Set three concrete goals: one in talent (specific, measurable), one in academics (about adaptation, not 'top of class'), one in community / contribution (how you'll show up for teammates or classmates). Make them sound like commitments, not wishes.",
          zh: "设三个具体目标：一个关于才能（具体、可衡量），一个关于学业（关于适应，不是\"全班第一\"），一个关于群体/贡献（你如何对待队友或同学）。让它们听起来像承诺，不是愿望。",
          ms: "Tetapkan tiga matlamat konkrit: satu dalam bakat (spesifik, boleh diukur), satu dalam akademik (tentang penyesuaian, bukan 'terbaik dalam kelas'), satu dalam komuniti / sumbangan.",
          ta: "மூன்று உறுதியான இலக்குகளை அமைக்கவும்: ஒன்று திறனில் (குறிப்பிட்ட, அளவிடக்கூடிய), ஒன்று கல்வியில் (தழுவல் பற்றி, 'வகுப்பின் முதலாமவர்' அல்ல), ஒன்று சமூகம் / பங்களிப்பில்.",
        },
        templates: [
          {
            label: "Balanced 3-part goals",
            text: "I have three goals for my first year. First, in [talent]: [specific, measurable goal — e.g., earn a place in the starting team for the B division by the end of S1 / be performance-ready for the school's annual concert / hit a specific technical milestone my coach and I have already mapped out]. Second, in academics: I want to make a clean transition — that means [specific adaptation goal — e.g., finding a study system that works with my training schedule from the first month rather than scrambling at the first exam / asking for help early if a subject moves faster than I'm used to]. Third, in the community: I want to be the kind of new student who makes the team better, not just one more body in the squad — that means [specific contribution — e.g., showing up early, helping newer juniors when I can, learning the team's culture before trying to change anything].",
          },
        ],
      },
    ],
  },

  // ─── CATEGORY 4: Character & Values ──────────────────────────────────────
  {
    id: "cat-character",
    label: {
      en: "Character & Values",
      zh: "性格与价值观",
      ms: "Watak & Nilai",
      ta: "குணம் & மதிப்புகள்",
    },
    questions: [
      {
        id: "q-leadership",
        q: "Tell me about a time you demonstrated leadership.",
        subtext: {
          en: "Schools want future leaders, not just performers. Leadership in this context doesn't have to mean captain or team leader — it can mean the quiet person who motivated a struggling teammate, the one who organised a team debrief, or someone who chose team success over personal glory.",
          zh: "学校想要未来的领导者，不只是表演者。这里的领导力不一定是队长或团队领导——可以是默默激励挣扎中队友的人，或者组织赛后复盘的人，或者为团队成功放弃个人荣耀的人。",
          ms: "Sekolah mahukan pemimpin masa depan, bukan sekadar pemain. Kepimpinan di sini tidak semestinya bermaksud kapten — ia boleh bermaksud orang yang memotivasikan rakan sepasukan yang bergelut, atau yang memilih kejayaan pasukan berbanding kemuliaan peribadi.",
          ta: "பள்ளிகள் எதிர்கால தலைவர்களை விரும்புகின்றன, வெறும் செயல்திறன் வீரர்களை அல்ல. இங்கு தலைமைத்துவம் கேப்டன் அல்லது குழு தலைவராக இருக்க வேண்டியதில்லை — போராடும் குழு உறுப்பினரை ஊக்குவித்தவர் ஆகவும் இருக்கலாம்.",
        },
        approach: {
          en: "Use the STAR method: Situation (briefly), Task (your role), Action (what you specifically did), Result (outcome + what you learned about leading). The Action part should dominate — concrete, specific steps, not vague summary.",
          zh: "使用STAR结构：情境（简短）、任务（你的角色）、行动（你具体做了什么）、结果（结果+你学到了什么关于领导力的东西）。行动部分应该占大头——具体步骤，不是笼统总结。",
          ms: "Gunakan kaedah STAR: Situasi (ringkas), Tugas (peranan anda), Tindakan (apa yang anda lakukan secara khusus), Keputusan (hasil + apa yang anda pelajari tentang memimpin). Bahagian Tindakan harus mendominasi.",
          ta: "STAR முறையைப் பயன்படுத்துங்கள்: சூழ்நிலை (சுருக்கமாக), பணி (உங்கள் பாத்திரம்), செயல் (நீங்கள் குறிப்பாக என்ன செய்தீர்கள்), முடிவு (விளைவு + தலைமைத்துவத்தைப் பற்றி கற்றது).",
        },
        templates: [
          {
            label: "STAR-structured leadership story",
            text: "During [competition / training period / school event], [situation that required leadership — e.g., our team was down 2-0 at halftime and morale was very low / we had a key performance in two days and two members were at odds]. My role wasn't captain, but I [specific action — e.g., pulled the team together during the break and reminded them of what we'd worked on all season / spoke to both teammates separately and found a way to resolve their conflict before the performance]. [Result — what happened and how the team responded]. What I learned was [insight about leadership — e.g., that leadership is often about timing and tone, not authority].",
          },
        ],
      },
      {
        id: "q-conflict",
        q: "Describe a time you had a conflict with a teammate. How did you resolve it?",
        subtext: {
          en: "Schools want to see that you can handle interpersonal difficulty maturely — not avoid it, not escalate it. 'We never had conflict' is the worst possible answer because it suggests either poor self-awareness or lack of genuine team engagement.",
          zh: "学校想看到你能成熟地处理人际困难——不是回避它，也不是激化它。\"我们从没有矛盾\"是最差的回答，因为它表明要么自我认知差，要么你没有真正深入参与团队。",
          ms: "Sekolah ingin melihat bahawa anda boleh menangani kesukaran interpersonal dengan matang. 'Kami tidak pernah berkonflik' adalah jawapan terburuk kerana ia menunjukkan kurangnya kesedaran diri atau penglibatan pasukan yang tulen.",
          ta: "பள்ளிகள் நீங்கள் தனிநபர் சிரமங்களை முதிர்ச்சியுடன் கையாள முடியுமா என்று பார்க்கின்றன. 'நாங்கள் எப்போதும் மோதலிலில்லை' என்பது மிக மோசமான பதில் — அது சுய விழிப்புணர்வின்மை அல்லது குழு ஈடுபாட்டின்மையை காட்டுகிறது.",
        },
        approach: {
          en: "Name a real conflict — it doesn't need to be dramatic. Then show: you didn't let it fester or go through a third party; you addressed it directly, calmly, and with curiosity about the other person's perspective. The resolution and what you learned about working with others is the key part.",
          zh: "说一个真实的矛盾——不需要很戏剧化。然后展示：你没有任由它发酵，也没有通过第三方；你直接、冷静地处理了它，并对对方的角度保持好奇心。解决方式以及你学到的关于与他人合作的东西，是最重要的部分。",
          ms: "Sebutkan konflik sebenar — ia tidak perlu dramatik. Kemudian tunjukkan: anda tidak membiarkannya berlarutan; anda menanganinya secara langsung, tenang, dan dengan rasa ingin tahu tentang perspektif orang lain.",
          ta: "உண்மையான மோதலை கூறுங்கள் — நாடகமாக இருக்க வேண்டியதில்லை. பின்னர் காட்டுங்கள்: நீங்கள் அதை மூன்றாம் நபர் மூலம் செய்யவில்லை; நேரடியாக, அமைதியாக, மற்றவரின் கண்ணோட்டத்தில் ஆர்வத்துடன் தீர்த்தீர்கள்.",
        },
        templates: [
          {
            label: "Direct, mature resolution",
            text: "There was a time when [teammate] and I had a real disagreement about [strategy / approach / fairness of playing time / how we handled a mistake]. Instead of [avoiding it or complaining to the coach first], I asked if we could talk privately after training. I made sure to [listen to their perspective first before sharing mine / use 'I' statements rather than blaming / acknowledge that they had a point even where I disagreed]. We ended up [resolution — reaching a compromise / understanding each other better / agreeing to handle it differently next time]. What I took from it was [lesson — e.g., that most team conflicts come from different assumptions, not bad intentions].",
          },
        ],
      },
      {
        id: "q-pressure",
        q: "How do you handle pressure before a big competition or performance?",
        subtext: {
          en: "Schools want athletes and performers who can manage their mental state — not just their physical skill. This is about self-knowledge and self-regulation. A student who can articulate their own mental management process is demonstrably more mature than one who says 'I just don't feel nervous.'",
          zh: "学校想要能管理自己心理状态的运动员和表演者——不只是身体技能。这考查的是自我认知和自我调节能力。能说清楚自己心理管理过程的学生，明显比说\"我不会紧张\"的学生成熟。",
          ms: "Sekolah mahukan atlet dan pemain yang boleh mengurus keadaan mental mereka — bukan sekadar kemahiran fizikal. Ini tentang pengetahuan diri dan regulasi diri. Pelajar yang boleh menjelaskan proses pengurusan mental mereka lebih matang.",
          ta: "பள்ளிகள் மன நிலையை நிர்வகிக்கக்கூடிய விளையாட்டு வீரர்கள் மற்றும் செயல்திறன் வீரர்களை விரும்புகின்றன. இது சுய அறிவு மற்றும் சுய ஒழுங்குமுறை பற்றியது.",
        },
        approach: {
          en: "Be specific about what happens to you under pressure (your personal patterns) and what specific technique you use to manage it. 'I breathe deeply' is too generic — what do you breathe, how, for how long, in what situation? Showing self-knowledge is the key.",
          zh: "具体说明你在压力下会出现什么状况（你的个人模式），以及你用什么具体技术来处理它。\"我深呼吸\"太笼统了——你怎么呼吸、多久、在什么情况下？展示自我认知是关键。",
          ms: "Bersikap spesifik tentang apa yang berlaku kepada anda di bawah tekanan dan teknik tertentu yang anda gunakan. 'Saya bernafas dalam-dalam' terlalu umum. Tunjukkan pengetahuan diri yang mendalam.",
          ta: "அழுத்தத்தில் உங்களுக்கு என்ன நடக்கிறது என்பதில் குறிப்பிட்டதாக இருங்கள், மற்றும் அதை நிர்வகிக்க நீங்கள் பயன்படுத்தும் குறிப்பிட்ட நுட்பத்தை கூறுங்கள். 'ஆழமாக சுவாசிக்கிறேன்' மிகவும் பொதுவானது.",
        },
        templates: [
          {
            label: "Honest self-aware answer",
            text: "Before big moments, I notice I tend to [your honest pattern — e.g., overanalyse what could go wrong / tighten up physically / have a lot of 'what if' thoughts]. What I've learned to do is [specific technique — e.g., focus only on the first 30 seconds of the performance — just the start, not the whole thing / run through my warm-up routine in a very deliberate way because the routine signals to my body that this is normal / remind myself that I've done this exact thing in training hundreds of times]. The shift I've made is from thinking about the result to thinking about the process. It doesn't eliminate nerves — but it channels them into focus rather than fear.",
          },
        ],
      },
      {
        id: "q-failure",
        q: "Tell me about a time you failed. What did you learn?",
        subtext: {
          en: "Failure resilience is non-negotiable for DSA students. Schools know that a high-performance journey involves many failures. They want to see how you process setbacks: Do you blame others? Deny the failure? Or do you sit with it, learn from it, and come back stronger? The learning is what they're scoring, not the failure itself.",
          zh: "对DSA学生来说，承受失败的能力不是可选项。学校知道高水平的成长之路充满失败。他们想看到你如何处理挫折：你怪别人吗？否认失败吗？还是你能正视它、从中学习、然后更强地回来？他们评分的是那个\"学到了什么\"，不是失败本身。",
          ms: "Daya tahan kegagalan adalah wajib bagi pelajar DSA. Sekolah tahu bahawa perjalanan prestasi tinggi melibatkan banyak kegagalan. Mereka ingin melihat bagaimana anda memproses kemunduran: Adakah anda menyalahkan orang lain? Atau adakah anda belajar dan kembali lebih kuat?",
          ta: "DSA மாணவர்களுக்கு தோல்வி மீளுமை விலக்கமற்றது. பள்ளிகள் உயர் செயல்திறன் பயணத்தில் பல தோல்விகள் அடங்குவதை அறிவார்கள். நீங்கள் எவ்வாறு சரிவுகளை செயலாக்குகிறீர்கள் என்பதை அவர்கள் பார்க்கிறார்கள்.",
        },
        approach: {
          en: "Choose a real failure — not a minor one. Describe the emotion honestly (don't minimise it), then walk through your processing and recovery. The ratio should be roughly: 20% failure description, 80% processing and growth. End with a specific change you made because of it.",
          zh: "选一个真实的失败——不是小事。诚实描述当时的情绪（不要轻描淡写），然后讲述你如何处理和恢复。大致比例：20%描述失败，80%处理过程和成长。最后说一个你因此做出的具体改变。",
          ms: "Pilih kegagalan yang nyata — bukan yang kecil. Huraikan emosi dengan jujur, kemudian uraikan proses dan pemulihan anda. Nisbahnya sepatutnya kira-kira: 20% kegagalan, 80% pemprosesan dan pertumbuhan.",
          ta: "உண்மையான தோல்வியை தேர்ந்தெடுங்கள் — சிறிய ஒன்றை அல்ல. உணர்வை நேர்மையாக விவரியுங்கள், பின்னர் உங்கள் செயலாக்கம் மற்றும் மீட்புவை விவரியுங்கள். விகிதம்: 20% தோல்வி விவரிப்பு, 80% வளர்ச்சி.",
        },
        templates: [
          {
            label: "Growth-centred failure story",
            text: "[Specific failure — e.g., I didn't make the final selection for the national team / I had a very poor performance at the one competition that mattered most that year / I let the team down at a crucial moment]. In the moment, I felt [honest emotion — crushed / angry at myself / embarrassed]. But after a few days, I went back and [specific action — watched the footage and took notes / sat down with my coach to debrief / spoke to a mentor]. What I realised was [specific insight — e.g., I had overtrained in the final week and my technique broke down under fatigue / I had been too results-focused and forgot about the process / I had neglected a specific aspect of my preparation that I'd assumed was fine]. Since then, I've [specific change you made]. That failure has made me a better [athlete / musician / performer] because [specific reason].",
          },
        ],
      },
      {
        id: "q-balance",
        q: "How do you balance your studies with your CCA and training commitments?",
        subtext: {
          en: "Schools are genuinely concerned about this. They have seen talented students fail academically, and they know it reflects on the school. They want to see a realistic, mature plan — not a dismissive 'I manage fine' and not an overly optimistic 'I can handle everything.' Show that you've thought about this seriously and have concrete systems.",
          zh: "学校真的很担心这个问题。他们见过有才华的学生成绩垮掉的情况，知道这对学校也有影响。他们想看到一个现实、成熟的计划——不是随口的\"我都搞得定\"，也不是过于乐观的\"我能搞定一切\"。表明你认真思考过，并有具体的系统。",
          ms: "Sekolah benar-benar bimbang tentang ini. Mereka telah melihat pelajar berbakat gagal secara akademik. Mereka mahukan rancangan yang realistik dan matang — bukan jawapan remeh atau terlalu optimistik.",
          ta: "பள்ளிகள் இதைப் பற்றி உண்மையிலேயே கவலைப்படுகின்றன. திறமையான மாணவர்கள் கல்வியில் தோல்வியுறுவதை பார்த்துள்ளார்கள். யதார்த்தமான, முதிர்ச்சியான திட்டத்தை காட்டுங்கள்.",
        },
        approach: {
          en: "Give specific, concrete time management methods — not just 'I plan my time.' Name what you do, when, how. Show that your parents are aware and supportive. Acknowledge the additional challenge of the school's programme and show that you've thought about how you'll adapt.",
          zh: "给出具体的、可操作的时间管理方法——不只是\"我会规划时间\"。说清楚你在什么时候做什么、怎么做。表明你的父母知情且支持。承认这所学校课程带来的额外挑战，并表明你已经想好了如何适应。",
          ms: "Berikan kaedah pengurusan masa yang konkrit — bukan sekadar 'saya merancang masa saya.' Tunjukkan bahawa ibu bapa anda sedar dan menyokong. Akui cabaran tambahan program sekolah.",
          ta: "குறிப்பிட்ட, உறுதியான நேர மேலாண்மை முறைகளை கொடுங்கள் — 'நேரத்தை திட்டமிடுகிறேன்' என்று மட்டும் சொல்லாதீர்கள். உங்கள் பெற்றோர் அறிந்திருக்கிறார்கள், ஆதரவு நல்கிறார்கள் என்று காட்டுங்கள்.",
        },
        templates: [
          {
            label: "Concrete systems + awareness",
            text: "I won't pretend it's effortless — it requires real discipline. What works for me is [specific method 1 — e.g., I use the commute time to and from training to review notes or do homework / I always finish homework before sleeping, even if training ends late]. I also [specific method 2 — e.g., plan my week every Sunday so I know which days are heavy and which have buffer]. My parents know exactly what the training commitment looks like and they're supportive. I'm aware that [School]'s programme is [more intensive / at a higher level than what I've been doing], so I've already thought about [one specific adjustment — e.g., moving my revision schedule earlier in the week / reducing a non-essential commitment to create more buffer time].",
          },
        ],
      },
      {
        id: "q-help-teammate",
        q: "Tell me about a time you helped a teammate or younger student.",
        subtext: {
          en: "Different from the leadership question, which is about initiative and crisis moments. This one tests altruism in ordinary moments — who you are when no one asked you to step up. Schools care because a team or cohort culture is built far more by these small moments than by dramatic leadership.",
          zh: "这和领导力问题不一样，领导力关于主动性和危机时刻。这道题测的是日常中的利他心——没人要求你出头的时候，你是什么样的人。学校在意这个，是因为团队文化或者cohort文化，更多是这些小时刻积累出来的，不是那种戏剧化领导建立的。",
          ms: "Berbeza daripada soalan kepimpinan, yang mengenai inisiatif dan momen krisis. Soalan ini menguji altruisme dalam momen biasa — siapa anda apabila tiada siapa minta anda bertindak. Budaya pasukan dibina lebih banyak oleh momen kecil seperti ini.",
          ta: "தலைமைத்துவ கேள்வியிலிருந்து வேறுபட்டது. இந்த கேள்வி சாதாரண தருணங்களில் பிறருக்கு உதவும் தன்மையை சோதிக்கிறது — யாரும் கேட்காதபோது நீங்கள் யார். குழு கலாச்சாரம் இந்த சிறிய தருணங்களால் கட்டப்படுகிறது.",
        },
        approach: {
          en: "Pick a small, specific moment — not a big production. The smaller and more ordinary it sounds, the more credible. Focus on: what you noticed that others didn't, what you did without being asked, and how the other person responded. Don't make yourself the hero of the story; make the other person the subject.",
          zh: "选一个具体的小时刻——不是大场面。听起来越小、越平常，越可信。聚焦在：你注意到了别人没注意到的什么、你不用别人请就做了什么、对方的反应是什么。不要把自己当成故事的主角；让对方成为主体。",
          ms: "Pilih momen kecil dan spesifik — bukan persembahan besar. Semakin kecil dan biasa kedengaran, semakin boleh dipercayai. Fokus: apa yang anda perasan, apa yang anda lakukan tanpa diminta, bagaimana orang lain bertindak balas.",
          ta: "ஒரு சிறிய, குறிப்பிட்ட தருணத்தை தேர்ந்தெடுங்கள் — பெரிய நிகழ்வு அல்ல. கேட்கும்போது சிறியது, சாதாரணமாக இருந்தால், அது மிகவும் நம்பகமானது. நீங்கள் கவனித்தது, கேட்காமலேயே செய்தது, அவர்களின் பதில் — இவற்றில் கவனம் செலுத்துங்கள்.",
        },
        templates: [
          {
            label: "Small, specific kindness",
            text: "There's a [younger student / newer teammate] called [name or just 'a Primary 3 kid'] who joined our [club / team] last year. I noticed early on that [specific thing — e.g., they were always the last one to leave the warm-up because they didn't know the order of the drills / they'd get visibly anxious before performances and no one was checking in with them]. I started [specific small action — e.g., walking them through the warm-up sequence quietly before training started / sitting next to them for ten minutes before a competition just so they had someone calm nearby]. I didn't make a big deal of it, and our coach didn't ask me to. Over a few months I watched them get more confident, and now they [outcome — small but real]. I learned that being helpful doesn't have to be dramatic — sometimes it's just being the person who notices.",
          },
        ],
      },
      {
        id: "q-values",
        q: "What are your most important values, and where did they come from?",
        subtext: {
          en: "Deeper than 'three words about yourself.' Personality describes how you come across; values are the principles you act on when no one is watching. Schools want to hear values that come from a real source — a parent, a coach, a moment of failure — not abstract virtues borrowed from a self-help book.",
          zh: "比\"用三个词形容自己\"更深。性格说的是你给人的感觉；价值观说的是没人看的时候你按什么原则行事。学校想听到有真实来源的价值观——某个家长、某个教练、某次失败的瞬间——不是从鸡汤书里借来的抽象美德。",
          ms: "Lebih mendalam daripada 'tiga perkataan tentang diri.' Personaliti memerihalkan bagaimana anda kelihatan; nilai adalah prinsip yang anda bertindak apabila tiada siapa melihat. Sekolah mahu nilai dari sumber yang nyata.",
          ta: "'உங்களைப் பற்றி மூன்று வார்த்தைகள்' விட ஆழமானது. ஆளுமை எப்படி தோன்றுகிறீர்கள் என்பதை விவரிக்கிறது; மதிப்புகள் என்பது யாரும் பார்க்காதபோது நீங்கள் செயல்படும் கொள்கைகள். உண்மையான மூலத்திலிருந்து வரும் மதிப்புகளை பள்ளிகள் விரும்புகின்றன.",
        },
        approach: {
          en: "Pick one or two values — not five. For each, trace the origin to a specific person or specific experience. Then give one example where acting on that value cost you something (because that's when a value is real, not when it's convenient). Generic words like 'honesty' need to be tied to a concrete story or they sound empty.",
          zh: "选一两个价值观——不是五个。每一个都追溯到具体的人或具体的经历。然后给一个例子，那次按这个价值观行事让你付出了代价（因为代价才证明价值观是真的，而不只是方便时才挂在嘴上）。\"诚实\"这种笼统的词必须连接到具体故事，否则听起来很空。",
          ms: "Pilih satu atau dua nilai — bukan lima. Untuk setiap satu, kesan asal usul kepada orang atau pengalaman spesifik. Kemudian berikan satu contoh di mana bertindak pada nilai itu menelan kos — kerana itulah saat nilai itu nyata.",
          ta: "ஒன்று அல்லது இரண்டு மதிப்புகளை தேர்ந்தெடுங்கள் — ஐந்து அல்ல. ஒவ்வொன்றுக்கும், ஆரம்பத்தை ஒரு குறிப்பிட்ட நபர் அல்லது அனுபவத்திற்கு கண்டறியுங்கள். அந்த மதிப்பின் படி நடப்பது உங்களுக்கு விலையாக மாறிய ஒரு உதாரணம் கொடுங்கள்.",
        },
        templates: [
          {
            label: "Sourced value + cost",
            text: "The value that matters most to me is [specific value — e.g., honesty about my own performance, even when no one would know the difference]. It came from [specific origin — e.g., my [parent/coach], who once caught me celebrating a win in a match where the referee had missed a call that went my way — and they made me name it out loud instead of letting it slide]. That moment stayed with me. A few months ago I [specific recent example where acting on it cost you something — e.g., I told my coach the truth about a session I'd been slacking in, even though it meant losing a spot in the next selection / I admitted to a teammate that I'd been wrong in an argument we'd had]. It cost me [specific cost], but I think values only count when they cost you something.",
          },
        ],
      },
      {
        id: "q-feedback-disagree",
        q: "How do you respond when someone gives you feedback you disagree with?",
        subtext: {
          en: "This tests coachability and maturity, but in the harder version. 'I always listen to feedback' is the safe answer that scores low. Schools want a student who can sit with disagreement: weigh it, ask questions, sometimes change their mind, sometimes respectfully maintain their position — without becoming defensive or just nodding along.",
          zh: "这测试的是可教性和成熟度，但是更难的版本。\"我总是听取反馈\"是安全但低分的回答。学校想要一个能与不同意见共处的学生：能权衡、能提问、有时候改主意、有时候有礼貌地坚持自己的立场——而不是变得防御性或者只是点头敷衍。",
          ms: "Ini menguji kebolehbimbingan dan kematangan, dalam versi yang lebih sukar. 'Saya sentiasa mendengar maklum balas' adalah jawapan selamat yang mendapat markah rendah. Sekolah mahukan pelajar yang boleh duduk dengan perselisihan.",
          ta: "இது கற்றுக்கொள்ளும் திறன் மற்றும் முதிர்ச்சியை சோதிக்கிறது, ஆனால் கடினமான பதிப்பில். 'நான் எப்போதும் கருத்துக்களை கேட்கிறேன்' என்பது குறைந்த மதிப்பெண் பெறும் பாதுகாப்பான பதில். பள்ளிகள் கருத்து வேற்றுமையுடன் வாழக்கூடிய மாணவரை விரும்புகின்றன.",
        },
        approach: {
          en: "Show a real process: you take it in, you ask a clarifying question to understand what they actually mean, you weigh it against your own evidence, and then you either change your approach or — respectfully — explain why you're keeping it. The key is showing maturity in both directions: you can be moved by good feedback, and you can also hold your position when you have a reason.",
          zh: "展示一个真实的过程：先接受，问一个澄清的问题搞清楚对方真正的意思，对照自己的依据权衡，然后要么改变做法，要么有礼貌地解释为什么坚持。关键是两个方向都展示成熟度：好的反馈能让你转变，但你也能在有理由的时候守住自己的立场。",
          ms: "Tunjukkan proses sebenar: anda menerima, anda bertanya soalan menjelaskan untuk memahami maksud sebenar mereka, anda menimbang terhadap bukti anda sendiri, kemudian sama ada anda mengubah pendekatan atau, dengan hormat, menjelaskan mengapa anda mengekalkannya.",
          ta: "உண்மையான செயல்முறையை காட்டுங்கள்: நீங்கள் அதை உள்வாங்குகிறீர்கள், அவர்கள் உண்மையில் என்ன சொல்கிறார்கள் என்பதை புரிந்துகொள்ள தெளிவுபடுத்தும் கேள்வி கேட்கிறீர்கள், உங்கள் சொந்த சான்றுகளுடன் எடைபோடுகிறீர்கள், பின்னர் அணுகுமுறையை மாற்றுகிறீர்கள் அல்லது மரியாதையுடன் ஏன் வைத்திருக்கிறீர்கள் என்று விளக்குகிறீர்கள்.",
        },
        templates: [
          {
            label: "Honest, two-direction maturity",
            text: "I try not to react in the moment, even if I disagree internally. What I've learned to do is ask a clarifying question first — something like 'can you tell me more about what you saw?' — because often the feedback I'm reacting to isn't actually what the person meant. Once I understand, I look honestly at the evidence. Sometimes I realise they were right and I'd been defending the wrong thing — like the time [specific example — e.g., my coach told me my warm-up wasn't serious enough, I initially disagreed, but watching the footage they had a clear point]. Other times, after thinking about it, I still disagree — and in those cases I'll respectfully explain why, with my reasoning, rather than just nodding along. I think being coachable means being willing to be wrong, not being willing to be a yes-person.",
          },
        ],
      },
    ],
  },

  // ─── CATEGORY 5: Critical Thinking & Future ───────────────────────────────
  {
    id: "cat-future",
    label: {
      en: "Critical Thinking & Future",
      zh: "独立思考与未来展望",
      ms: "Pemikiran Kritis & Masa Depan",
      ta: "விமர்சன சிந்தனை & எதிர்காலம்",
    },
    questions: [
      {
        id: "q-future",
        q: "Where do you see yourself in five or ten years?",
        subtext: {
          en: "Schools want to see that you've genuinely thought about your future — and that this school fits into that vision. You don't need a perfectly formed plan, but you should have direction. Vague answers like 'I want to be successful' communicate nothing; specific, authentic ones communicate maturity.",
          zh: "学校想看到你真正想过自己的未来——这所学校能融入那个愿景。你不需要一个完美的计划，但应该有方向。模糊的回答如\"我想成功\"什么都没有传达；具体、真实的回答传达的是成熟度。",
          ms: "Sekolah ingin melihat bahawa anda benar-benar telah memikirkan masa depan anda dan sekolah ini sesuai dengan visi itu. Anda tidak memerlukan rancangan yang sempurna, tetapi anda harus mempunyai arah.",
          ta: "பள்ளிகள் நீங்கள் உண்மையிலேயே உங்கள் எதிர்காலத்தைப் பற்றி சிந்தித்திருக்கிறீர்களா என்பதை பார்க்கின்றன. சரியான திட்டம் தேவையில்லை, ஆனால் திசை இருக்க வேண்டும்.",
        },
        approach: {
          en: "Don't say 'I want to be a professional [athlete/musician]' as your only answer — unless you've seriously researched what that path looks like in Singapore. A better answer shows ambition + realism + flexibility. Connect the school's programme to the path you're describing.",
          zh: "不要把\"我想成为职业[运动员/音乐家]\"作为唯一答案——除非你认真研究过在新加坡这条路是什么样的。更好的答案是：雄心+现实+灵活性。把这所学校的项目和你描述的路径连接起来。",
          ms: "Jangan cakap 'saya ingin menjadi [atlet/muzisyen] profesional' sebagai satu-satunya jawapan — melainkan anda telah menyelidikinya dengan serius. Jawapan yang lebih baik menunjukkan semangat + realisme + fleksibiliti.",
          ta: "உங்கள் ஒரே பதிலாக 'தொழில்முறை [வீரர்/இசைக்கலைஞர்] ஆக விரும்புகிறேன்' என்று சொல்லாதீர்கள். சிறந்த பதில் லட்சியம் + யதார்த்தம் + நெகிழ்வுத்தன்மையை காட்டுகிறது.",
        },
        templates: [
          {
            label: "Ambitious + grounded",
            text: "In five years, I hope to [specific realistic goal — e.g., be a key contributor to a national-level team / have developed to a Grade 8 or diploma standard in music while studying at a strong JC / be competing at the SEA Games level]. In ten years, I'd like to [longer-term aspiration — e.g., represent Singapore at the international level / combine my talent with a career in [coaching / sports science / arts management] / use the discipline and skills from [talent] in whatever career I build]. I know plans evolve — but what I'm sure of is that [talent area] will be central to who I am. [School]'s programme would give me the foundation and the environment I need to build toward that.",
          },
        ],
      },
      {
        id: "q-why-you",
        q: "Why should we choose you over other equally talented applicants?",
        subtext: {
          en: "This is the hardest question in a DSA interview, because it requires confidence without arrogance. Schools know that many applicants have similar trophy cabinets. What they're really asking is: what makes you distinctively you — in terms of character, combination of qualities, or story? And: are you self-aware enough to articulate it?",
          zh: "这是DSA面试中最难的问题，因为它要求自信但不傲慢。学校知道很多申请者有类似的奖杯清单。他们真正在问的是：你的与众不同之处是什么——性格、素质的组合，或者你的故事？以及：你够了解自己，能说清楚吗？",
          ms: "Ini adalah soalan paling sukar dalam temuduga DSA, kerana ia memerlukan keyakinan tanpa kesombongan. Sekolah tahu ramai pemohon mempunyai rekod yang serupa. Mereka bertanya: apa yang menjadikan anda unik dari segi watak atau gabungan kualiti?",
          ta: "இது DSA நேர்காணலில் மிகவும் கடினமான கேள்வி, ஏனென்றால் அகங்காரமின்றி நம்பிக்கை தேவைப்படுகிறது. பல விண்ணப்பதாரர்களிடம் ஒரே மாதிரி போட்டி பதிவுகள் இருப்பதை பள்ளிகள் அறிவார்கள். குணம், கலவை அல்லது கதையின் அடிப்படையில் தனித்துவம் என்ன என்று கேட்கிறார்கள்.",
        },
        approach: {
          en: "Don't compare yourself to others (you don't know them). Instead, focus on what is genuinely distinctive about you: a combination of two qualities that you have together, a backstory that makes your commitment more meaningful, a character trait that is consistent across multiple areas of your life. Then make a specific promise about what you'll bring.",
          zh: "不要和别人比较（你不了解他们）。聚焦在你身上真正与众不同的东西：两个素质的组合、让你的承诺更有意义的背景故事、在你生活多个领域都体现的某个性格特质。然后对你会带来什么做出具体承诺。",
          ms: "Jangan bandingkan diri anda dengan orang lain. Sebaliknya, fokus pada apa yang benar-benar tersendiri tentang anda: gabungan dua kualiti, kisah latar yang menjadikan komitmen anda lebih bermakna, atau sifat watak yang konsisten.",
          ta: "மற்றவர்களுடன் ஒப்பிடாதீர்கள். உங்களில் உண்மையிலேயே தனித்துவமான என்ன இருக்கிறது என்பதில் கவனம் செலுத்துங்கள்: இரண்டு குணங்களின் கலவை, உங்கள் ஒப்புதலை அர்த்தமுள்ளதாக்கும் கதை.",
        },
        templates: [
          {
            label: "Distinctive qualities + specific promise",
            text: "I can't speak to other candidates, but I can tell you what I know to be true about myself. I'm someone who [quality 1 — e.g., doesn't just train hard, but thinks about the game — I spend time studying match footage and asking my coach 'why,' not just 'what']. Combined with [quality 2 — e.g., my ability to stay composed in high-pressure moments, which I've had to deliberately develop over the last two years], I believe I bring [specific value to a team or programme]. Beyond results, I'd also bring [character contribution — e.g., someone who makes the team better even when I'm on the bench, not just when I'm performing]. What I can promise is this: I will give everything I have — not just in [talent], but to this school community.",
          },
        ],
      },
      {
        id: "q-biggest-challenge",
        q: "What do you think is the biggest challenge facing young [athletes / musicians / performers] in Singapore today?",
        subtext: {
          en: "This question tests whether you've thought about your field beyond your own experience. Schools want students who are curious and engaged with the larger world of their discipline — not just focused on their own training. There's no single right answer, but the quality of your thinking matters.",
          zh: "这道题在测试你是否有超越自身经验思考你的领域的能力。学校想要对更大世界有好奇心和参与感的学生——不只是盯着自己的训练。没有唯一正确答案，但你思考的质量很重要。",
          ms: "Soalan ini menguji sama ada anda telah memikirkan bidang anda di luar pengalaman anda sendiri. Sekolah mahukan pelajar yang ingin tahu dan terlibat dengan dunia disiplin mereka yang lebih luas.",
          ta: "இந்த கேள்வி உங்கள் சொந்த அனுபவத்திற்கு அப்பால் உங்கள் துறையைப் பற்றி சிந்தித்திருக்கிறீர்களா என்று சோதிக்கிறது. ஒரே சரியான பதில் இல்லை, ஆனால் உங்கள் சிந்தனையின் தரம் முக்கியம்.",
        },
        approach: {
          en: "Pick one specific challenge you've observed or felt yourself. Explain why it's a challenge. Then add what you think could address it — even if imperfectly. This shows that you engage with the bigger picture, not just your own corner of it.",
          zh: "选一个你亲身观察到或感受到的具体挑战。解释为什么它是个挑战。然后说说你认为可以如何解决——即使不完美。这表明你在关注更大的图景，不只是自己的那一角。",
          ms: "Pilih satu cabaran khusus yang anda perhatikan atau rasakan sendiri. Jelaskan mengapa ia merupakan cabaran. Kemudian tambahkan apa yang anda fikir boleh menanganinya.",
          ta: "நீங்கள் கவனித்த அல்லது உணர்ந்த ஒரு குறிப்பிட்ட சவாலை தேர்ந்தெடுங்கள். அது ஏன் சவாலாக இருக்கிறது என்று விளக்குங்கள். பின்னர் அதை எவ்வாறு தீர்க்கலாம் என்று கூறுங்கள்.",
        },
        templates: [
          {
            label: "Thoughtful structural challenge",
            text: "From what I've experienced and observed, I think one of the biggest challenges is [specific issue — e.g., the tension between developing a long-term talent and performing academically in the Singapore system / the lack of pathways to continue [talent] seriously after secondary school unless you're at the very top / the fact that quality coaching is concentrated in well-resourced schools, making it hard for students from other backgrounds to develop at the same level]. This matters because [why it's significant]. I don't have a perfect solution, but I think [your thoughtful idea — e.g., more structured mentorship between schools / greater industry partnerships that give students a realistic picture of what a career in [field] looks like in Singapore].",
          },
        ],
      },
      {
        id: "q-mentor-advice",
        q: "If a Primary 3 student told you they wanted to start [your talent] seriously, what advice would you give them?",
        subtext: {
          en: "This is a reflection question disguised as a hypothetical. What you'd tell a younger version of yourself reveals what you've learned the hard way — and whether you can translate experience into something useful for someone else. Generic 'just work hard' answers score poorly; specific, slightly counter-intuitive advice scores well.",
          zh: "这是一个伪装成假设题的反思题。你会告诉年纪小一些的自己什么，揭示的是你通过吃苦头学到了什么——以及你能不能把经验转化成对别人有用的东西。\"努力就好\"这种笼统答案得分低；具体、稍微反直觉的建议得分高。",
          ms: "Ini soalan refleksi yang disamarkan sebagai hipotesis. Apa yang anda akan beritahu versi diri yang lebih muda mendedahkan apa yang anda pelajari secara sukar. Jawapan 'bekerja keras saja' mendapat markah rendah; nasihat spesifik dan agak luar jangka mendapat markah tinggi.",
          ta: "இது ஒரு கற்பனை போல மாறுவேடமிட்ட சிந்தனை கேள்வி. உங்களின் இளமைப் பதிப்புக்கு நீங்கள் என்ன சொல்வீர்கள் என்பது நீங்கள் கடினமான வழியில் கற்றதை வெளிப்படுத்துகிறது. 'கடினமாக உழைப்பாய்' என்ற பொதுவான பதில்கள் குறைந்த மதிப்பெண் பெறுகின்றன.",
        },
        approach: {
          en: "Speak from experience, not from a coach's mouth. Pick one thing you wish you'd known earlier and one warning — but not preachy. Tone matters: you're talking to a younger kid, not lecturing them. The best answers include the part where you admit something the younger you didn't realise until much later.",
          zh: "从自身经验出发，不是教练嘴里的话。选一个你希望自己早一点知道的事和一个提醒——但不要说教。语气重要：你是在跟一个小学弟妹说话，不是给他们上课。最好的答案包含你那时候没意识到、很久以后才明白的部分。",
          ms: "Bercakap dari pengalaman, bukan dari mulut jurulatih. Pilih satu perkara yang anda harap anda tahu lebih awal dan satu amaran — tetapi tidak berkhutbah. Nada penting: anda bercakap dengan kanak-kanak yang lebih muda, bukan memberi kuliah.",
          ta: "அனுபவத்திலிருந்து பேசுங்கள், பயிற்சியாளரின் வாயிலிருந்து அல்ல. நீங்கள் முன்பே தெரிந்திருக்க விரும்பிய ஒரு விஷயத்தையும் ஒரு எச்சரிக்கையையும் தேர்ந்தெடுங்கள் — ஆனால் போதனை செய்யாமல். தொனி முக்கியம்: நீங்கள் இளம் குழந்தையிடம் பேசுகிறீர்கள்.",
        },
        templates: [
          {
            label: "Honest, slightly counter-intuitive advice",
            text: "I'd tell them two things. First — and this is the one I wish someone had told me at P3 — [specific counter-intuitive advice — e.g., the fun part has to come from the process, not the results, because the results are going to be inconsistent for a long time / the people you train with matter more than the place you train at / don't try to be impressive in front of your coach; just be honest about what's working and what isn't]. Second, I'd warn them about [specific trap — e.g., comparing yourself to the one kid who's already ahead of everyone else, because that's a fast way to lose motivation when the gap is real]. And then I'd say: you don't have to know if you'll love it forever — just give it a real shot for a year and see what happens.",
          },
        ],
      },
      {
        id: "q-success",
        q: "What does success mean to you?",
        subtext: {
          en: "This question quietly tests your value framework. Schools want to see students whose definition of success goes beyond trophies — because high-trophy students with trophy-only definitions often burn out or break down when the wins stop. A more layered definition (process, growth, contribution) signals psychological durability.",
          zh: "这道题悄悄地测试你的价值框架。学校想看到那些对成功的定义不止于奖杯的学生——因为只看奖杯的高成就学生，一旦赢不了就经常崩盘或烧光。多层次的定义（过程、成长、贡献）说明心理韧性更好。",
          ms: "Soalan ini secara senyap menguji rangka kerja nilai anda. Sekolah ingin melihat pelajar yang definisi kejayaannya melangkaui trofi — kerana pelajar berprestasi tinggi dengan definisi yang hanya berdasarkan trofi sering merasa burnout apabila kemenangan berhenti.",
          ta: "இந்த கேள்வி உங்கள் மதிப்புக் கட்டமைப்பை அமைதியாக சோதிக்கிறது. கோப்பைகளுக்கு அப்பால் வெற்றியை வரையறுக்கும் மாணவர்களை பள்ளிகள் விரும்புகின்றன — ஏனெனில் கோப்பை மட்டும் வரையறை கொண்ட உயர்-சாதனை மாணவர்கள் வெற்றி நிறுத்தும்போது சோர்ந்துவிடுகிறார்கள்.",
        },
        approach: {
          en: "Don't say 'winning' alone — that's a one-dimensional answer. Don't go fully into 'success is just the journey' either — that sounds like you're avoiding the question. The strongest answer holds two things together: yes, you want to win, AND your definition includes process, growth, contribution, becoming someone you respect. Be specific about which version of yourself you're trying to become.",
          zh: "不要光说\"赢\"——那是单维度答案。也不要完全走\"成功就是过程\"——那听起来像在回避问题。最强的答案同时持有两件事：是的，我想赢，并且我的定义还包括过程、成长、贡献、成为我自己尊重的那种人。要具体说出你想成为哪个版本的自己。",
          ms: "Jangan kata 'menang' sahaja — itu jawapan satu dimensi. Tetapi jangan juga sepenuhnya pergi ke 'kejayaan hanya perjalanan' — itu kedengaran seperti anda mengelak soalan. Jawapan paling kuat memegang dua perkara bersama: ya, anda mahu menang, dan definisi anda termasuk proses, pertumbuhan, sumbangan.",
          ta: "வெறுமனே 'வெற்றி' என்று சொல்லாதீர்கள் — அது ஒரே பரிமாண பதில். 'வெற்றி வெறும் பயணம்' என்று முற்றிலும் செல்லவும் வேண்டாம் — அது நீங்கள் கேள்வியை தவிர்ப்பதாக தோன்றுகிறது. மிகவும் வலுவான பதில் இரண்டையும் ஒன்றாக வைத்திருக்கிறது.",
        },
        templates: [
          {
            label: "Two-layered, mature definition",
            text: "I'll be honest: part of success for me is winning — I'm not going to pretend results don't matter, because they do, and I train for them. But that can't be the whole definition, because if it is, you fall apart the day you lose. So for me, success has two layers. The visible one is [specific result-based goal — e.g., reaching the national finals / earning a place on a specific team]. The deeper one is becoming the kind of [athlete / musician / person] I respect — someone who [specific quality — e.g., trains the same way whether anyone's watching or not / handles a loss in a way younger teammates can learn from / can look back in ten years and be proud of how I got where I got, not just where I got]. The trophies are real goals. But who I become getting there is the part that lasts.",
          },
        ],
      },
      {
        id: "q-questions",
        q: "Do you have any questions for us?",
        subtext: {
          en: "This is not a formality — it's an opportunity. Asking nothing signals a lack of genuine interest or preparation. The quality of your questions reveals how seriously you've thought about this school and programme. This is also your last chance to leave a strong impression.",
          zh: "这不是走过场——这是机会。什么都不问意味着缺乏真诚兴趣或准备。你提问的质量展示了你对这所学校和项目思考的认真程度。这也是你留下强烈印象的最后机会。",
          ms: "Ini bukan formaliti — ia adalah peluang. Tidak bertanya menandakan kekurangan minat atau persediaan yang tulen. Kualiti soalan anda mendedahkan betapa serius anda memikirkan sekolah dan program ini.",
          ta: "இது ஒரு சம்பிரதாயம் அல்ல — இது ஒரு வாய்ப்பு. எதுவும் கேட்காமல் இருப்பது உண்மையான ஆர்வம் அல்லது தயாரிப்பின்மையை சிக்னல் செய்கிறது. உங்கள் கேள்விகளின் தரம் நீங்கள் இந்த பள்ளியைப் பற்றி எவ்வளவு தீவிரமாக சிந்தித்திருக்கிறீர்கள் என்பதை வெளிப்படுத்துகிறது.",
        },
        approach: {
          en: "Prepare 2–3 genuine questions. Avoid questions easily found on the website. Best questions are about: the coaching philosophy or team culture, how the school supports academic-talent balance, what the biggest adjustment is for new DSA students, or what the school wishes more students knew before applying.",
          zh: "准备2-3个真诚的问题。避免问那些网站上容易找到答案的问题。最好的问题是关于：训练理念或团队文化、学校如何支持学业与才能的平衡、新DSA学生最大的适应挑战，或者学校希望更多申请者在申请前就知道的事情。",
          ms: "Sediakan 2-3 soalan yang tulen. Elakkan soalan yang mudah ditemui di laman web. Soalan terbaik adalah tentang: falsafah latihan, cara sekolah menyokong keseimbangan akademik-bakat, atau cabaran terbesar pelajar DSA baru.",
          ta: "2-3 உண்மையான கேள்விகளை தயாரியுங்கள். இணையதளத்தில் எளிதில் காணக்கூடிய கேள்விகளை தவிர்க்கவும். சிறந்த கேள்விகள்: பயிற்சி தத்துவம், பள்ளி கல்வி-திறன் சமநிலையை எவ்வாறு ஆதரிக்கிறது.",
        },
        templates: [
          {
            label: "Genuine programme questions",
            text: "Yes, I have two questions. First: [e.g., I know from my research that your [CCA] trains [X] times a week — but I'm curious about the philosophy behind how training loads are managed when the competition season overlaps with national exams. How do you approach that?]. Second: [e.g., For students who come in at a good level but not the most experienced in the cohort — what do you find is the biggest adjustment in the first year, and how does the programme support them through it?]. [Optional third]: What do you wish more students knew about your programme before they applied?",
          },
        ],
      },
    ],
  },
];
