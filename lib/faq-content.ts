import type { Locale } from "./i18n";

export type FaqItem = {
  id: string;
  q: Record<Locale, string>;
  a: Record<Locale, string>;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-dsa",
    q: {
      en: "What is DSA-Sec (Direct School Admission) in Singapore?",
      zh: "什么是直接中学收生计划（DSA-Sec）？",
      ms: "Apakah DSA-Sec (Penempatan Langsung ke Sekolah Menengah) di Singapura?",
      ta: "சிங்கப்பூரில் DSA-Sec (நேரடி பள்ளி சேர்க்கை) என்றால் என்ன?",
    },
    a: {
      en: "DSA-Sec is the Direct School Admission exercise for Secondary One entry in Singapore. It allows Primary 6 students to gain admission to a secondary school based on their talents and achievements — before PSLE results are released. Talent areas include sports, performing arts, science, technology, language, humanities, and leadership. MOE runs the annual exercise, with applications opening in May and closing in early June.",
      zh: "直接中学收生计划（DSA-Sec）是教育部每年举办的中学一年级提前收生活动，让小六学生在 PSLE 成绩公布前，凭借才能和成就申请中学名额。涵盖领域包括体育、表演艺术、科学技术、语文双语、人文学科与领袖才能。申请通常于 5 月开放，6 月初截止。",
      ms: "DSA-Sec adalah latihan kemasukan tahunan yang dikendalikan oleh MOE Singapura, membolehkan pelajar Darjah 6 mendapat tempat di sekolah menengah berdasarkan bakat dan pencapaian mereka — sebelum keputusan PSLE diumumkan. Bidang bakat merangkumi sukan, seni persembahan, sains dan teknologi, bahasa, kemanusiaan, dan kepimpinan. Permohonan dibuka pada Mei dan ditutup pada awal Jun.",
      ta: "DSA-Sec என்பது MOE சிங்கப்பூர் நடத்தும் ஆண்டுதோறும் நடைபெறும் சேர்க்கை நடவடிக்கை. PSLE முடிவுகளுக்கு முன்பே, Darjah 6 மாணவர்கள் தங்கள் திறமை மற்றும் சாதனைகளின் அடிப்படையில் இடைநிலைப் பள்ளியில் சேர இது உதவுகிறது. விளையாட்டு, கலை, அறிவியல் தொழில்நுட்பம், மொழி, மனிதவியல், தலைமைத்துவம் உள்ளிட்ட பல துறைகள் உள்ளன. விண்ணப்பம் மே மாதம் தொடங்கி ஜூன் தொடக்கத்தில் முடிவடைகிறது.",
    },
  },
  {
    id: "who-is-eligible",
    q: {
      en: "Who is eligible to apply for DSA-Sec 2026?",
      zh: "谁有资格申请 DSA-Sec 2026？",
      ms: "Siapa yang layak memohon DSA-Sec 2026?",
      ta: "DSA-Sec 2026-க்கு யார் விண்ணப்பிக்கலாம்?",
    },
    a: {
      en: "All Primary 6 students in Singapore mainstream schools are eligible, including those in Integrated Programme (IP) schools and Special Assistance Plan (SAP) schools. International students enrolled in Singapore schools may also apply, subject to each school's admission criteria. Students must be applying for Secondary One intake (starting January 2027).",
      zh: "所有在新加坡主流小学就读的小六学生均可申请，包括直通车（IP）学校及特别辅助计划（SAP）学校的学生。在新加坡学校就读的国际学生也可申请，但须符合各校的收生条件。申请者须以 2027 年 1 月入读中学一年级为目标。",
      ms: "Semua pelajar Darjah 6 di sekolah rendah arus perdana Singapura layak memohon, termasuk pelajar di sekolah Program Bersepadu (IP) dan Pelan Bantuan Khas (SAP). Pelajar antarabangsa yang berdaftar di sekolah Singapura juga boleh memohon, tertakluk kepada kriteria kemasukan setiap sekolah. Pelajar mestilah memohon untuk kemasukan Menengah Satu bermula Januari 2027.",
      ta: "சிங்கப்பூரின் பொதுப் பள்ளிகளில் படிக்கும் அனைத்து Darjah 6 மாணவர்களும் தகுதியுடையவர்கள் — IP மற்றும் SAP பள்ளி மாணவர்களும் சேர்த்து. சிங்கப்பூர் பள்ளிகளில் படிக்கும் வெளிநாட்டு மாணவர்களும் விண்ணப்பிக்கலாம், ஆனால் ஒவ்வொரு பள்ளியின் நிபந்தனைகளுக்கு உட்பட்டு. விண்ணப்பதாரர்கள் 2027 ஜனவரி முதல் இடைநிலை ஒன்றில் சேர விரும்புவோராக இருக்க வேண்டும்.",
    },
  },
  {
    id: "application-period",
    q: {
      en: "When is the DSA-Sec 2026 application period?",
      zh: "DSA-Sec 2026 的申请时间是什么时候？",
      ms: "Bilakah tempoh permohonan DSA-Sec 2026?",
      ta: "DSA-Sec 2026 விண்ணப்ப காலம் எப்போது?",
    },
    a: {
      en: "Applications open on 6 May 2026 and close at 16:30 SGT on 2 June 2026. All applications must be submitted through the official MOE DSA-Sec Portal at go.gov.sg/dsa-sec-portal. Selection exercises — including interviews, sports trials, auditions, and tests — are conducted by individual schools from June through September 2026. Results are released by 12 September 2026.",
      zh: "申请于 2026 年 5 月 6 日开放，2026 年 6 月 2 日下午 4:30（新加坡时间）截止，须通过 MOE 官方 DSA-Sec 申请系统（go.gov.sg/dsa-sec-portal）提交。各校的选拔活动（包括面试、体能试训、试演及笔试）将于 2026 年 6 至 9 月间进行。录取结果最迟于 2026 年 9 月 12 日公布。",
      ms: "Permohonan dibuka pada 6 Mei 2026 dan ditutup pada 16:30 SGT, 2 Jun 2026. Semua permohonan mesti dikemukakan melalui Portal DSA-Sec MOE rasmi di go.gov.sg/dsa-sec-portal. Latihan pemilihan — termasuk temuduga, ujian sukan, pengaudisian, dan ujian — dikendalikan oleh sekolah individu dari Jun hingga September 2026. Keputusan dikeluarkan menjelang 12 September 2026.",
      ta: "விண்ணப்பம் 2026 மே 6 அன்று தொடங்கி 2026 ஜூன் 2 அன்று மாலை 4:30 SGT-க்கு முடிவடைகிறது. அனைத்து விண்ணப்பங்களும் go.gov.sg/dsa-sec-portal மூலம் சமர்ப்பிக்கப்பட வேண்டும். தேர்வு நடவடிக்கைகள் — நேர்காணல், விளையாட்டு சோதனை, ஆடிஷன் உள்ளிட்டவை — ஜூன் முதல் செப்டம்பர் 2026 வரை நடைபெறும். முடிவுகள் செப்டம்பர் 12, 2026-க்குள் வெளியிடப்படும்.",
    },
  },
  {
    id: "how-many-schools",
    q: {
      en: "How many schools can my child apply to under DSA-Sec?",
      zh: "孩子可以申请多少所学校？",
      ms: "Berapa banyak sekolah yang boleh dipohon oleh anak saya?",
      ta: "என் குழந்தை எத்தனை பள்ளிகளுக்கு விண்ணப்பிக்கலாம்?",
    },
    a: {
      en: "There is no fixed cap on the number of schools a student may apply to. However, a student may hold only one confirmed DSA offer at any time — if your child receives multiple offers, they must choose one. Students can apply across different talent domains at different schools. Plan strategically: apply to schools that genuinely fit your child's talent area and values, not just prestigious names.",
      zh: "申请学校数量没有固定上限，但学生在任何时候只能持有一份 Confirmed Offer（确认录取通知）。若孩子同时收到多所学校的录取，须从中选择一所。同一个孩子可以在不同学校以不同才能领域申请。建议从实际出发，选择真正符合孩子才能和兴趣的学校，而非单纯追求名气。",
      ms: "Tiada had tetap untuk bilangan sekolah yang boleh dipohon. Walau bagaimanapun, seorang pelajar hanya boleh memegang satu tawaran DSA yang disahkan pada satu-satu masa — jika anak anda menerima beberapa tawaran, mereka mesti memilih satu. Pelajar boleh memohon merentasi domain bakat yang berbeza di sekolah yang berbeza. Rancang secara strategik: pohon ke sekolah yang benar-benar sesuai dengan bakat dan nilai anak anda.",
      ta: "விண்ணப்பிக்கக்கூடிய பள்ளிகளின் எண்ணிக்கைக்கு நிலையான வரம்பு இல்லை. ஆனால், ஒரு மாணவர் எந்த நேரத்திலும் ஒரே ஒரு Confirmed Offer மட்டுமே வைத்திருக்க முடியும் — பல சலுகைகள் கிடைத்தால் ஒன்றை மட்டும் தேர்ந்தெடுக்க வேண்டும். வெவ்வேறு பள்ளிகளில் வெவ்வேறு திறமை துறைகளில் விண்ணப்பிக்கலாம். பெயர் மட்டும் பார்க்காமல், உங்கள் குழந்தையின் திறமைக்கு உண்மையில் பொருந்தும் பள்ளிகளை தேர்ந்தெடுங்கள்.",
    },
  },
  {
    id: "commitment-rule",
    q: {
      en: "What is the Commitment Rule in DSA-Sec?",
      zh: "DSA-Sec 的承诺规则是什么？",
      ms: "Apakah Peraturan Komitmen dalam DSA-Sec?",
      ta: "DSA-Sec-இல் உறுதிமொழி விதி என்ன?",
    },
    a: {
      en: "If your child accepts a DSA-Sec offer, they are committed to attending that school. They will be posted there regardless of PSLE results and cannot participate in the S1 Posting Exercise. They also cannot transfer to another school using their PSLE results. This is a binding commitment — research each school's programmes, culture, and location thoroughly before your child accepts any offer.",
      zh: "孩子一旦接受 DSA-Sec 录取通知，即承诺入读该校。无论 PSLE 成绩如何，孩子都将被分配到该校，不能参加 S1 统一派位，也不能以 PSLE 成绩转往其他学校。这是具有约束力的承诺——在孩子接受任何录取通知之前，请务必深入了解该校的课程、校园文化与交通位置。",
      ms: "Jika anak anda menerima tawaran DSA-Sec, mereka komited untuk menghadiri sekolah tersebut. Mereka akan ditempatkan di sana tanpa mengira keputusan PSLE dan tidak boleh mengambil bahagian dalam Latihan Penempatan S1. Mereka juga tidak boleh memindahkan ke sekolah lain menggunakan keputusan PSLE mereka. Ini adalah komitmen yang mengikat — kaji program, budaya, dan lokasi setiap sekolah dengan teliti sebelum anak anda menerima sebarang tawaran.",
      ta: "உங்கள் குழந்தை DSA-Sec சலுகையை ஏற்றுக்கொண்டால், அந்த பள்ளியில் சேர உறுதிபூண்டவராகிறார். PSLE முடிவுகள் எப்படி இருந்தாலும், அந்த பள்ளியில்தான் சேர்க்கப்படுவார் — S1 Posting Exercise-ல் பங்கேற்க முடியாது. PSLE மதிப்பெண்ணை வைத்து வேறு பள்ளிக்கு மாற முடியாது. இது கட்டுப்படும் உறுதிமொழி — எந்த சலுகையையும் ஏற்கும் முன் பள்ளியின் பாடத்திட்டம், கலாச்சாரம், இடம் ஆகியவற்றை நன்கு ஆராயுங்கள்.",
    },
  },
  {
    id: "talent-areas",
    q: {
      en: "What talent areas are accepted for DSA-Sec 2026?",
      zh: "DSA-Sec 2026 接受哪些才能领域？",
      ms: "Apakah bidang bakat yang diterima untuk DSA-Sec 2026?",
      ta: "DSA-Sec 2026-க்கு என்ன திறமை துறைகள் ஏற்றுக்கொள்ளப்படும்?",
    },
    a: {
      en: "Schools accept talent submissions across a wide range: Sports (badminton, basketball, football, swimming, athletics, hockey, volleyball, gymnastics, martial arts, shooting, sailing, and 20+ more), Performing Arts (orchestra, band, choir, dance, drama), Visual Arts, Science & Technology (robotics, coding, biomedical science, environmental science), Humanities (debate, journalism, social studies), Language & Bilingualism, and Leadership. Each school publishes its own talent domains — check DSALink's school directory or the school's official DSA page.",
      zh: "各校接受的才能领域范围广泛：体育（羽毛球、篮球、足球、游泳、田径、曲棍球、排球、体操、武术、射击、帆船等 20 余项）、表演艺术（管弦乐、乐队、合唱、舞蹈、戏剧）、视觉艺术、科学与技术（机器人、编程、生物医学、环境科学）、人文学科（辩论、新闻、社会学）、语言与双语能力，以及领袖才能。各校才能领域以学校官方公布为准，可在 DSALink 学校目录或各校 DSA 页面查阅。",
      ms: "Sekolah menerima penyertaan bakat dalam pelbagai bidang: Sukan (badminton, bola keranjang, bola sepak, renang, olahraga, hoki, bola jaring, gimnastik, seni bela diri, tembak, belayar, dan 20+ lagi), Seni Persembahan (orkestra, pancaragam, koir, tarian, drama), Seni Visual, Sains & Teknologi (robotik, pengekodan, sains bioperubatan, sains alam sekitar), Kemanusiaan (debat, kewartawanan, pengajian sosial), Bahasa & Dwibahasa, dan Kepimpinan. Setiap sekolah menerbitkan domain bakat mereka sendiri — semak direktori sekolah DSALink atau halaman DSA rasmi sekolah.",
      ta: "பள்ளிகள் பரந்த திறமை துறைகளில் விண்ணப்பங்களை ஏற்கின்றன: விளையாட்டு (பேட்மிண்டன், கூடைப்பந்து, கால்பந்து, நீச்சல், ஹாக்கி, ஜிம்னாஸ்டிக்ஸ், போர்க்கலை, 20+ மேலும்), கலை (ஆர்கெஸ்ட்ரா, இசைக்குழு, நடனம், நாடகம்), காட்சி கலை, அறிவியல் & தொழில்நுட்பம் (ரோபோட்டிக்ஸ், குறியீட்டு, உயிர்மருத்துவ அறிவியல்), மனிதவியல் (விவாதம், பத்திரிகை), மொழி & இரு மொழிப் பயன்பாடு, மற்றும் தலைமைத்துவம். ஒவ்வொரு பள்ளியும் தனது திறமை துறைகளை வெளியிடுகிறது — DSALink பள்ளி அட்டவணை அல்லது பள்ளியின் DSA பக்கத்தில் பார்க்கவும்.",
    },
  },
  {
    id: "psle-cop-and-dsa",
    q: {
      en: "What is PSLE COP and how does it relate to DSA?",
      zh: "什么是 PSLE COP？与 DSA 有什么关系？",
      ms: "Apakah PSLE COP dan bagaimana ia berkaitan dengan DSA?",
      ta: "PSLE COP என்றால் என்ன, அது DSA-உடன் எப்படி தொடர்புடையது?",
    },
    a: {
      en: "PSLE COP (Cut-Off Point) is the indicative posting score of the last student admitted to a secondary school through the S1 Posting Exercise. For DSA students, PSLE COP is not directly relevant — they are posted to their confirmed school regardless of PSLE results. However, COP data helps parents understand a school's academic competitiveness. DSALink publishes 2023–2025 PSLE COP data in AL notation for all 147 MOE secondary schools at dsalink.sg/psle-cop.",
      zh: "PSLE COP（报读截分）是通过 S1 统一派位录取该校最后一名学生的参考分数，反映一所学校的学术竞争程度。对于 DSA 学生而言，COP 不直接适用——无论 PSLE 成绩如何，孩子都将被录取至已确认的 DSA 学校。但 COP 数据有助于家长了解学校的整体学术水平。DSALink 在 dsalink.sg/psle-cop 公布全部 147 所教育部中学 2023–2025 年的 AL 截分历史。",
      ms: "PSLE COP (Mata Potong) adalah skor penempatan indikatif pelajar terakhir yang diterima masuk ke sekolah menengah melalui Latihan Penempatan S1. Untuk pelajar DSA, PSLE COP tidak relevan secara langsung — mereka ditempatkan ke sekolah yang disahkan tanpa mengira keputusan PSLE. Walau bagaimanapun, data COP membantu ibu bapa memahami daya saing akademik sebuah sekolah. DSALink menerbitkan data PSLE COP 2023–2025 dalam notasi AL untuk semua 147 sekolah menengah MOE di dsalink.sg/psle-cop.",
      ta: "PSLE COP (Cut-Off Point) என்பது S1 Posting Exercise மூலம் சேர்க்கப்பட்ட கடைசி மாணவரின் மதிப்பெண். DSA மாணவர்களுக்கு COP நேரடியாக பொருந்தாது — அவர்கள் PSLE முடிவுகள் எப்படி இருந்தாலும் DSA பள்ளியிலேயே சேர்க்கப்படுவார்கள். ஆனால் COP தரவு, பள்ளியின் கல்வி போட்டித்தன்மையை புரிந்துகொள்ள உதவுகிறது. DSALink dsalink.sg/psle-cop-ல் 147 MOE இடைநிலைப் பள்ளிகளுக்கும் 2023–2025 PSLE COP தரவை AL குறியீட்டில் வெளியிட்டுள்ளது.",
    },
  },
  {
    id: "psle-after-dsa",
    q: {
      en: "Does my child still have to sit PSLE after accepting a DSA offer?",
      zh: "接受 DSA 录取后，孩子还需要参加 PSLE 吗？",
      ms: "Adakah anak saya masih perlu menduduki PSLE selepas menerima tawaran DSA?",
      ta: "DSA சலுகை ஏற்ற பிறகும் என் குழந்தை PSLE எழுத வேண்டுமா?",
    },
    a: {
      en: "Yes. Accepting a DSA offer does not exempt your child from sitting the PSLE. However, their PSLE score will not affect their school posting — they will be posted to their confirmed DSA school regardless of PSLE results. They should still aim to perform well in PSLE, as it reflects their academic readiness for secondary school.",
      zh: "需要。接受 DSA 录取通知并不免除孩子参加 PSLE 的义务。但 PSLE 成绩不会影响其学校分配——孩子仍将按确认录取通知就读 DSA 学校。尽管如此，仍建议孩子认真备考，PSLE 成绩反映其进入中学的学术准备程度。",
      ms: "Ya. Menerima tawaran DSA tidak mengecualikan anak anda daripada menduduki PSLE. Walau bagaimanapun, skor PSLE mereka tidak akan mempengaruhi penempatan sekolah — mereka akan ditempatkan ke sekolah DSA yang disahkan tanpa mengira keputusan PSLE. Mereka masih harus berusaha untuk berprestasi baik dalam PSLE, kerana ia mencerminkan kesediaan akademik mereka untuk sekolah menengah.",
      ta: "ஆம். DSA சலுகையை ஏற்றுக்கொண்டாலும் PSLE எழுதுவதிலிருந்து விலக்கு இல்லை. ஆனால் PSLE மதிப்பெண் பள்ளி சேர்க்கையை பாதிக்காது — DSA பள்ளியிலேயே சேர்க்கப்படுவார்கள். இருப்பினும், இடைநிலைப் பள்ளிக்கான கல்வி தயார்நிலையை காட்டுவதால் PSLE-ல் நல்ல மதிப்பெண் பெற முயற்சிக்க வேண்டும்.",
    },
  },
  {
    id: "what-is-ip",
    q: {
      en: "What is the Integrated Programme (IP) and which Singapore schools offer it?",
      zh: "什么是直通车课程（IP）？新加坡哪些学校提供？",
      ms: "Apakah Program Bersepadu (IP) dan sekolah mana di Singapura yang menawarkannya?",
      ta: "ஒருங்கிணைந்த திட்டம் (IP) என்றால் என்ன, எந்த பள்ளிகள் வழங்குகின்றன?",
    },
    a: {
      en: "The Integrated Programme (IP) allows students to bypass the O-Level examination and proceed directly to a pre-university qualification after six years of secondary school — either the Singapore A-Levels, the International Baccalaureate (IB), or the NUS High Diploma. IP schools include Raffles Institution, Raffles Girls' School, Hwa Chong Institution, Nanyang Girls' High School, NUS High School, Cedar Girls' Secondary School, Anglo-Chinese School (Independent), Singapore Chinese Girls' School, St Joseph's Institution, Methodist Girls' School, River Valley High School, and Dunman High School. Most IP schools accept DSA applications.",
      zh: "直通车课程（IP）让学生跳过 O 水准考试，在六年中学课程后直接升读大学预科资格课程——包括新加坡 A 水准、国际文凭（IB），或南大高中文凭。提供 IP 的学校包括：莱佛士书院、莱佛士女中、华中初级学院、南洋女子中学、南大高中、义安女子中学、英华自主中学、新加坡华侨女子中学、圣若瑟书院、卫理女子中学、立化中学和德明政府中学。大多数 IP 学校接受 DSA 申请。",
      ms: "Program Bersepadu (IP) membolehkan pelajar mengelakkan peperiksaan O-Level dan terus ke kelayakan pra-universiti selepas enam tahun di sekolah menengah — sama ada A-Level Singapura, Baccalaureate Antarabangsa (IB), atau Diploma NUS High. Sekolah IP termasuk Raffles Institution, Raffles Girls' School, Hwa Chong Institution, Nanyang Girls' High School, NUS High School, Cedar Girls' Secondary School, Anglo-Chinese School (Independent), Singapore Chinese Girls' School, St Joseph's Institution, Methodist Girls' School, River Valley High School, dan Dunman High School.",
      ta: "ஒருங்கிணைந்த திட்டம் (IP) மாணவர்களை O-Level தேர்வை தவிர்த்து நேரடியாக பல்கலைக்கழக முன் தகுதி பெற அனுமதிக்கிறது — Singapore A-Levels, IB, அல்லது NUS High Diploma. IP பள்ளிகளில் Raffles Institution, Raffles Girls' School, Hwa Chong Institution, Nanyang Girls' High School, NUS High School, Cedar Girls', ACS (Independent), SCGS, St Joseph's Institution, Methodist Girls', River Valley High, Dunman High ஆகியவை அடங்கும். பெரும்பாலான IP பள்ளிகள் DSA விண்ணப்பங்களை ஏற்கின்றன.",
    },
  },
  {
    id: "what-is-sap",
    q: {
      en: "What is a SAP (Special Assistance Plan) school in Singapore?",
      zh: "什么是特别辅助计划（SAP）学校？",
      ms: "Apakah sekolah SAP (Pelan Bantuan Khas) di Singapura?",
      ta: "சிங்கப்பூரில் SAP (சிறப்பு உதவி திட்டம்) பள்ளி என்றால் என்ன?",
    },
    a: {
      en: "SAP (Special Assistance Plan) schools offer a bilingual education environment where both English and Mandarin Chinese are primary media, with a focus on Chinese language, literature, and culture. There are 13 SAP schools in Singapore, including Hwa Chong Institution, Nanyang Girls' High School, Catholic High School, Maris Stella High School, Nan Hua High School, Nan Chiau High School, Anglican High School, and Chung Cheng High School (Main). SAP schools use Higher Chinese Language (HCL) grades in their PSLE COP notation.",
      zh: "特别辅助计划（SAP）学校提供英语与华语并重的双语教育环境，着重中文语言、文学与文化培养。新加坡共有 13 所 SAP 学校，包括华中初级学院、南洋女子中学、公教中学、马里士太拉中学、南华中学、南侨中学、圣公会中学及中正中学（义安校舍）等。SAP 学校在 PSLE COP 记录中使用高级华文（HCL）成绩等级（优异/优良）而非纯 AL 数值。",
      ms: "Sekolah SAP (Pelan Bantuan Khas) menawarkan persekitaran pendidikan dwibahasa di mana kedua-dua bahasa Inggeris dan Mandarin adalah media utama, dengan penumpuan pada bahasa Cina, kesusasteraan, dan budaya. Terdapat 13 sekolah SAP di Singapura, termasuk Hwa Chong Institution, Nanyang Girls' High School, Catholic High School, Maris Stella High School, Nan Hua High School, Nan Chiau High School, Anglican High School, dan Chung Cheng High School (Main).",
      ta: "SAP (Special Assistance Plan) பள்ளிகள் ஆங்கிலம் மற்றும் மாண்டரின் இரண்டும் முக்கிய கல்வி மொழியாக உள்ள இருமொழி சூழலை வழங்குகின்றன, சீன மொழி, இலக்கியம், கலாச்சாரம் ஆகியவற்றில் கவனம் செலுத்துகின்றன. சிங்கப்பூரில் 13 SAP பள்ளிகள் உள்ளன — Hwa Chong, Nanyang Girls', Catholic High, Nan Hua, Anglican High உள்ளிட்டவை. இந்த பள்ளிகள் PSLE COP-ல் Higher Chinese Language (HCL) தரங்களை பயன்படுத்துகின்றன.",
    },
  },
  {
    id: "what-is-alp",
    q: {
      en: "What is an Applied Learning Programme (ALP)?",
      zh: "什么是应用学习课程（ALP）？",
      ms: "Apakah Program Pembelajaran Gunaan (ALP)?",
      ta: "பயன்பாட்டு கல்வி திட்டம் (ALP) என்றால் என்ன?",
    },
    a: {
      en: "Every MOE secondary school has one Applied Learning Programme (ALP) — a school-distinctive programme that connects academic subjects to authentic, real-world applications. Examples include STEM innovation (robotics, environmental science), journalism and media literacy, biomedical science, and entrepreneurship. ALPs are listed on MOE SchoolFinder and in the DSALink school directory. The ALP is an important indicator of the school's distinctive pedagogical identity.",
      zh: "每所教育部中学均设有一个应用学习课程（ALP）——这是各校的特色课程，将学科知识与真实情境中的应用相结合。典型例子包括 STEM 创新（机器人、环境科学）、新闻与媒体素养、生物医学科学和创业教育。各校 ALP 信息可在 MOE SchoolFinder 及 DSALink 学校目录查阅，是了解学校教学特色的重要参考指标。",
      ms: "Setiap sekolah menengah MOE mempunyai satu Program Pembelajaran Gunaan (ALP) — program khusus sekolah yang menghubungkan mata pelajaran akademik dengan aplikasi dunia nyata. Contoh termasuk inovasi STEM (robotik, sains alam sekitar), kewartawanan dan celik media, sains bioperubatan, dan keusahawanan. ALP disenaraikan di MOE SchoolFinder dan dalam direktori sekolah DSALink. ALP adalah penunjuk penting identiti pedagogi sekolah.",
      ta: "ஒவ்வொரு MOE இடைநிலைப் பள்ளியும் ஒரு ALP (பயன்பாட்டு கல்வி திட்டம்) கொண்டுள்ளது — இது கல்வி பாடங்களை உண்மையான உலக பயன்பாடுகளுடன் இணைக்கும் பள்ளியின் தனித்துவமான திட்டம். STEM கண்டுபிடிப்பு, பத்திரிகை, உயிர்மருத்துவ அறிவியல், தொழில்முனைவு போன்றவை எடுத்துக்காட்டுகள். ALP தகவல் MOE SchoolFinder மற்றும் DSALink பள்ளி அட்டவணையில் உள்ளது. இது பள்ளியின் கற்பித்தல் அடையாளத்தை புரிந்துகொள்ள முக்கியமான குறியீடு.",
    },
  },
  {
    id: "what-is-llp",
    q: {
      en: "What is a Lifelong Learning Programme (LLP)?",
      zh: "什么是终身学习课程（LLP）？",
      ms: "Apakah Program Pembelajaran Seumur Hidup (LLP)?",
      ta: "வாழ்நாள் கல்வி திட்டம் (LLP) என்றால் என்ன?",
    },
    a: {
      en: "Every MOE secondary school also has one Lifelong Learning Programme (LLP) — focused on sports, performing arts, outdoor education, or community youth leadership. LLPs develop character, resilience, and values alongside skills. Examples include programmes anchored on specific sports (hockey, basketball, water sports), musical instruments, or community service. LLP details are listed on MOE SchoolFinder and in the DSALink school directory at dsalink.sg/schools.",
      zh: "每所教育部中学同样设有一个终身学习课程（LLP）——聚焦于体育、表演艺术、户外教育或青少年社区领袖培养。LLP 在培养技能的同时，也注重品格、韧性与价值观的塑造。典型例子包括以特定运动（曲棍球、篮球、水上运动）、乐器或社区服务为核心的课程。各校 LLP 详情可在 MOE SchoolFinder 及 dsalink.sg/schools 查阅。",
      ms: "Setiap sekolah menengah MOE juga mempunyai satu Program Pembelajaran Seumur Hidup (LLP) — tertumpu pada sukan, seni persembahan, pendidikan luar, atau kepimpinan belia komuniti. LLP membangunkan karakter, ketahanan, dan nilai bersama kemahiran. Contoh termasuk program berasaskan sukan tertentu (hoki, bola keranjang, sukan air), alat muzik, atau khidmat masyarakat. Butiran LLP disenaraikan di MOE SchoolFinder dan direktori sekolah DSALink di dsalink.sg/schools.",
      ta: "ஒவ்வொரு MOE இடைநிலைப் பள்ளியும் ஒரு LLP (வாழ்நாள் கல்வி திட்டம்) கொண்டுள்ளது — விளையாட்டு, கலை, வெளிப்புற கல்வி, அல்லது இளைஞர் தலைமைத்துவம் ஆகியவற்றில் கவனம் செலுத்துகிறது. LLP திறன்களுடன் பண்பு, மனவுறுதி, மதிப்புகளையும் வளர்க்கிறது. ஹாக்கி, கூடைப்பந்து, இசை, சமூக சேவை சார்ந்த திட்டங்கள் எடுத்துக்காட்டுகள். LLP விவரங்கள் MOE SchoolFinder மற்றும் dsalink.sg/schools-ல் உள்ளன.",
    },
  },
  {
    id: "dsa-preparation",
    q: {
      en: "How should I prepare my child for DSA-Sec selection exercises?",
      zh: "如何为孩子的 DSA-Sec 选拔活动做准备？",
      ms: "Bagaimana saya harus menyediakan anak saya untuk latihan pemilihan DSA-Sec?",
      ta: "DSA-Sec தேர்வு நடவடிக்கைகளுக்கு என் குழந்தையை எப்படி தயார்படுத்துவது?",
    },
    a: {
      en: "Start early — ideally in Primary 4 or 5 — to build a genuine, documented record of talent. For sports: consistent training attendance, competition results at zonal or national level, and coaches' endorsements. For performing arts: graded examination results (ABRSM, Trinity, NAFA), competition trophies, and recital or performance records. For science and technology: participation in competitions (SSEF, NUS Physics Olympiad, coding competitions) and project portfolios. For all areas: attend open houses in May 2026 to hear directly from teachers about what schools look for — genuine interest is something selection panels can identify.",
      zh: "越早开始越好，理想情况下从小四或小五就着手建立真实的、有记录的才能档案。体育类：持续的训练出席记录、区级或全国级竞赛成绩及教练推荐。表演艺术类：分级考试成绩（ABRSM、Trinity、NAFA）、比赛奖项及演出记录。科学与技术类：参加竞赛（SSEF、新大物理奥林匹克、编程比赛）及项目作品集。所有领域：参加 2026 年 5 月的开放日，直接向老师了解学校的具体要求。选拔评审有能力分辨孩子的兴趣是否真实。",
      ms: "Mulakan lebih awal — idealnya pada Darjah 4 atau 5 — untuk membina rekod bakat yang tulen dan berdokumentasi. Untuk sukan: kehadiran latihan yang konsisten, keputusan pertandingan di peringkat zon atau kebangsaan, dan sokongan jurulatih. Untuk seni persembahan: keputusan peperiksaan berperingkat (ABRSM, Trinity, NAFA), trofi pertandingan, dan rekod persembahan. Untuk sains dan teknologi: penyertaan dalam pertandingan (SSEF, Olimpiad Fizik NUS, pertandingan pengekodan) dan portfolio projek. Untuk semua bidang: hadiri hari terbuka pada Mei 2026 untuk mendengar terus daripada guru tentang apa yang sekolah cari.",
      ta: "முடிந்தவரை일찍 தொடங்குங்கள் — Darjah 4 அல்லது 5-ல் இருந்தே உண்மையான, ஆவணப்படுத்தப்பட்ட திறமை பதிவை உருவாக்குங்கள். விளையாட்டு: தொடர்ச்சியான பயிற்சி, மண்டல அல்லது தேசிய போட்டி முடிவுகள், பயிற்சியாளர் பரிந்துரை. கலை: ABRSM/Trinity/NAFA தர தேர்வு முடிவுகள், போட்டி பரிசுகள், நிகழ்ச்சி பதிவுகள். அறிவியல்: SSEF, NUS Olympiad போன்ற போட்டிகள், திட்ட portfolio. அனைத்திற்கும்: மே 2026 திறந்த நாட்களில் கலந்துகொண்டு நேரில் ஆசிரியர்களிடம் கேளுங்கள் — உண்மையான ஆர்வத்தை தேர்வு குழுக்களால் அடையாளம் காண முடியும்.",
    },
  },
  {
    id: "open-house-dates",
    q: {
      en: "Where can I find the full list of secondary school open house dates for May 2026?",
      zh: "在哪里可以找到 2026 年 5 月中学开放日的完整日程？",
      ms: "Di manakah saya boleh mencari senarai penuh tarikh hari terbuka sekolah menengah untuk Mei 2026?",
      ta: "மே 2026 இடைநிலைப் பள்ளி திறந்த நாட்களின் முழு பட்டியலை எங்கே கண்டுபிடிப்பது?",
    },
    a: {
      en: "DSALink's open house calendar at dsalink.sg/open-houses lists all 147 MOE secondary schools with confirmed May 2026 open house dates, on-site vs. online mode, and direct links to each school's official DSA or admissions page. The calendar is updated as schools release their dates — check regularly and always verify with the school's official website.",
      zh: "DSALink 开放日日历（dsalink.sg/open-houses）收录全部 147 所教育部中学，包含已确认的 2026 年 5 月开放日日期、线下或线上模式，以及各校官方 DSA / 招生页面的直链。日历会随学校陆续公布日期进行更新——建议定期查阅，并以各校官网为最终确认依据。",
      ms: "Kalendar hari terbuka DSALink di dsalink.sg/open-houses menyenaraikan semua 147 sekolah menengah MOE dengan tarikh hari terbuka Mei 2026 yang disahkan, mod di tapak berbanding dalam talian, dan pautan langsung ke halaman DSA atau kemasukan rasmi setiap sekolah. Kalendar dikemas kini apabila sekolah mengeluarkan tarikh mereka — semak secara berkala dan sentiasa sahkan dengan laman web rasmi sekolah.",
      ta: "DSALink-இன் திறந்த நாட்கள் நாட்காட்டி dsalink.sg/open-houses-ல் 147 MOE இடைநிலைப் பள்ளிகள் அனைத்தும் உள்ளன — உறுதிப்படுத்தப்பட்ட மே 2026 தேதிகள், நேரடி/ஆன்லைன் முறை, மற்றும் ஒவ்வொரு பள்ளியின் அதிகாரப்பூர்வ DSA / சேர்க்கை பக்கத்திற்கு நேரடி இணைப்புகள். பள்ளிகள் தேதிகளை வெளியிட்டவுடன் நாட்காட்டி புதுப்பிக்கப்படும் — தவறாமல் பார்க்கவும், எப்போதும் பள்ளியின் அதிகாரப்பூர்வ தளத்தில் உறுதிப்படுத்தவும்.",
    },
  },
  {
    id: "dsa-application-free",
    q: {
      en: "Is there a fee to apply for DSA-Sec?",
      zh: "DSA申请需要付费吗？",
      ms: "Adakah terdapat yuran untuk memohon DSA-Sec?",
      ta: "DSA-Sec விண்ணப்பிக்க கட்டணம் உண்டா?",
    },
    a: {
      en: "No — DSA-Sec applications are completely free. There are no application fees for any school through the MOE DSA-Sec Portal. If any organisation asks you to pay to submit a DSA application on your child's behalf, that is not an official MOE process.",
      zh: "完全免费。通过MOE DSA-Sec Portal申请任何学校都不需要支付任何费用。如果有机构要求你付费代为提交DSA申请，那不是MOE官方流程。",
      ms: "Tidak — permohonan DSA-Sec adalah percuma sepenuhnya. Tiada yuran permohonan untuk mana-mana sekolah melalui Portal DSA-Sec MOE. Jika mana-mana organisasi meminta bayaran untuk menghantar permohonan DSA bagi pihak anak anda, itu bukan proses rasmi MOE.",
      ta: "இல்லை — DSA-Sec விண்ணப்பங்கள் முற்றிலும் இலவசம். MOE DSA-Sec Portal மூலம் எந்த பள்ளிக்கும் விண்ணப்பக் கட்டணம் இல்லை. ஏதேனும் நிறுவனம் உங்கள் குழந்தையின் சார்பாக DSA விண்ணப்பம் சமர்ப்பிக்க பணம் கேட்டால், அது MOE அதிகாரப்பூர்வ நடைமுறை அல்ல.",
    },
  },
  {
    id: "dsa-offer-conditional",
    q: {
      en: "If my child gets a DSA offer, do PSLE results still matter?",
      zh: "拿到DSA录取通知后，PSLE成绩还重要吗？",
      ms: "Jika anak saya mendapat tawaran DSA, adakah keputusan PSLE masih penting?",
      ta: "என் குழந்தைக்கு DSA சலுகை கிடைத்தால், PSLE மதிப்பெண்கள் இன்னும் முக்கியமா?",
    },
    a: {
      en: "Yes — a DSA offer is conditional on your child meeting the school's minimum PSLE Posting Group requirement. Your child must still sit PSLE. If their results do not qualify them for the school's Posting Group (for example, AL ≤ 22 for most IP and Express schools), the school may withdraw the offer. Check each school's specific requirements before accepting any offer.",
      zh: "是的——DSA录取通知是有条件的，孩子仍须参加PSLE，且成绩必须达到该校的最低分组要求。例如，大多数IP和快捷课程学校要求AL ≤ 22。如果成绩不达标，学校可能撤回录取通知。接受任何录取通知前，请确认该校的具体要求。",
      ms: "Ya — tawaran DSA adalah bersyarat bergantung pada anak anda memenuhi keperluan minimum Kumpulan Penempatan PSLE sekolah tersebut. Anak anda masih perlu menduduki PSLE. Jika keputusan mereka tidak memenuhi syarat Kumpulan Penempatan sekolah (contohnya, AL ≤ 22 untuk kebanyakan sekolah IP dan Express), sekolah boleh menarik balik tawaran tersebut.",
      ta: "ஆம் — DSA சலுகை உங்கள் குழந்தை பள்ளியின் குறைந்தபட்ச PSLE Posting Group தேவையை பூர்த்தி செய்வதை நிபந்தனையாக கொண்டது. உங்கள் குழந்தை இன்னும் PSLE எழுத வேண்டும். பெரும்பாலான IP மற்றும் Express பள்ளிகளுக்கு AL ≤ 22 தேவை. மதிப்பெண்கள் போதுமானதாக இல்லாவிட்டால், பள்ளி சலுகையை திரும்பப் பெறலாம்.",
    },
  },
  {
    id: "dsa-rejection-waitlist",
    q: {
      en: "My child was rejected or put on a waitlist. What happens next?",
      zh: "孩子被拒绝或列入候补名单，接下来怎么办？",
      ms: "Anak saya ditolak atau disenaraikan dalam senarai menunggu. Apa yang berlaku seterusnya?",
      ta: "என் குழந்தை நிராகரிக்கப்பட்டார் அல்லது காத்திருப்பு பட்டியலில் உள்ளார். அடுத்து என்ன நடக்கும்?",
    },
    a: {
      en: "A rejection does not prevent your child from applying to the same school through the normal S1 Posting Exercise after PSLE results — if their score qualifies. DSA appeals are generally not accepted by schools. For waitlisted students: if higher-ranked applicants decline offers or do not meet the PSLE minimum, a place may open up. All DSA outcomes are notified by 28 August 2026. If your child is rejected from all DSA schools, they participate in the S1 Posting Exercise as normal.",
      zh: "被拒绝不影响孩子在PSLE成绩出来后，通过普通S1分配程序申请同一所学校——前提是成绩达标。学校一般不接受DSA申请结果的申诉。候补名单方面：如果排名较前的申请者放弃录取通知或不达PSLE最低要求，名额可能空出。所有DSA结果将于2026年8月28日前通知。若所有DSA申请均未成功，孩子将正常参加S1分配程序。",
      ms: "Penolakan tidak menghalang anak anda daripada memohon ke sekolah yang sama melalui Latihan Penempatan S1 biasa selepas keputusan PSLE — jika skor mereka layak. Rayuan DSA pada amnya tidak diterima oleh sekolah. Untuk pelajar dalam senarai menunggu: jika pemohon berkedudukan lebih tinggi menolak tawaran atau tidak memenuhi minimum PSLE, tempat mungkin tersedia. Semua keputusan DSA akan diberitahu menjelang 28 Ogos 2026.",
      ta: "நிராகரிப்பு என்பது PSLE முடிவுகளுக்குப் பிறகு இயல்பான S1 Posting Exercise மூலம் அதே பள்ளிக்கு விண்ணப்பிக்க தடையில்லை — மதிப்பெண்கள் தகுதியாக இருந்தால். DSA முறையீடுகள் பொதுவாக பள்ளிகளால் ஏற்கப்படுவதில்லை. காத்திருப்பு பட்டியலில் உள்ளவர்களுக்கு: உயர் தரவரிசை விண்ணப்பதாரர்கள் சலுகையை மறுத்தால் அல்லது PSLE குறைந்தபட்சத்தை பூர்த்தி செய்யாவிட்டால், இடம் கிடைக்கலாம். அனைத்து DSA முடிவுகளும் 2026 ஆகஸ்ட் 28 க்குள் அறிவிக்கப்படும்.",
    },
  },
  {
    id: "dsa-competitiveness",
    q: {
      en: "How competitive is DSA, and which schools are hardest to get into?",
      zh: "DSA竞争有多激烈？哪些学校最难申请？",
      ms: "Seberapa kompetitif DSA, dan sekolah mana yang paling sukar untuk masuk?",
      ta: "DSA எவ்வளவு போட்டித்தன்மையானது, எந்த பள்ளிகளுக்கு நுழைவது மிகவும் கடினம்?",
    },
    a: {
      en: "Competitiveness varies widely by school and talent area. The most selective are SOTA (roughly 1 in 5 applicants admitted), Raffles Institution, Hwa Chong, and NUS High. Neighbourhood schools are generally more accessible. IP schools may admit up to 30–35% of their intake via DSA; non-IP schools are capped at 20%. MOE does not publish acceptance rates, so the best approach is to match your child's genuine, verified talent level to schools where they are a realistic candidate — not just the most famous names.",
      zh: "竞争激烈程度因学校和才艺领域而异。最难申请的包括SOTA（大约每5人录取1人）、莱佛士书院、华侨中学和新加坡国立大学附属高中。一般邻里学校相对容易。IP学校通过DSA最多可录取30-35%的新生；非IP学校上限为20%。MOE不公布录取率，因此最好的方法是根据孩子真实、可证明的才艺水平，选择真正有机会的学校，而不只追名校。",
      ms: "Tahap persaingan berbeza-beza mengikut sekolah dan bidang bakat. Yang paling selektif ialah SOTA (lebih kurang 1 daripada 5 pemohon diterima), Raffles Institution, Hwa Chong, dan NUS High. Sekolah kejiranan umumnya lebih mudah dimasuki. Sekolah IP boleh menerima sehingga 30–35% pengambilan mereka melalui DSA; sekolah bukan-IP dihadkan kepada 20%. MOE tidak menerbitkan kadar penerimaan, jadi pendekatan terbaik adalah memadankan tahap bakat tulen anak anda dengan sekolah yang realistik.",
      ta: "போட்டித்தன்மை பள்ளி மற்றும் திறமை துறையைப் பொறுத்து பரவலாக வேறுபடுகிறது. மிகவும் தேர்ந்தெடுக்கும் பள்ளிகள்: SOTA (தோராயமாக 5 விண்ணப்பதாரர்களில் 1 பேர் சேர்க்கப்படுகிறார்கள்), Raffles Institution, Hwa Chong, மற்றும் NUS High. அண்டை பள்ளிகள் பொதுவாக அணுகக்கூடியவை. IP பள்ளிகள் DSA மூலம் 30–35% வரை சேர்க்கலாம்; IP அல்லாத பள்ளிகள் 20% வரை மட்டுமே. MOE ஏற்புவீதங்களை வெளியிடுவதில்லை — உங்கள் குழந்தையின் உண்மையான திறமை நிலைக்கு பொருந்தும் பள்ளிகளை தேர்வு செய்வதே சிறந்த அணுகுமுறை.",
    },
  },
];

export const FAQ_UI: Record<
  Locale,
  {
    jumpTo: string;
    nextSteps: string;
    step1Label: string;
    step1Title: string;
    step1Desc: string;
    step2Label: string;
    step2Title: string;
    step2Desc: string;
    step3Label: string;
    step3Title: string;
    step3Desc: string;
    link1: string;
    link2: string;
    link3: string;
    kicker: string;
    pageTitle: string;
    pageSubtitle: string;
  }
> = {
  en: {
    jumpTo: "Jump to question",
    nextSteps: "What do you want to do next?",
    step1Label: "Step 1",
    step1Title: "Find matching schools",
    step1Desc: "Search 1,300+ talent areas across 147 schools",
    step2Label: "Step 2",
    step2Title: "Visit open houses",
    step2Desc: "What to ask before you go — open houses this weekend",
    step3Label: "Step 3",
    step3Title: "Prepare for selection",
    step3Desc: "Trials, auditions, and interviews — what schools look for",
    link1: "Full DSA timeline →",
    link2: "PSLE cutoff scores →",
    link3: "Open house calendar →",
    kicker: "DSA-Sec 2026 · Singapore",
    pageTitle: "Frequently Asked Questions",
    pageSubtitle:
      "Accurate, up-to-date answers to the most common questions Singapore parents have about DSA-Sec 2026 — eligibility, dates, commitment rules, talent areas, PSLE COP, IP, SAP, ALP and LLP.",
  },
  zh: {
    jumpTo: "跳转至问题",
    nextSteps: "接下来你想做什么？",
    step1Label: "第一步",
    step1Title: "找到匹配的学校",
    step1Desc: "在 147 所学校的 1,300+ 个才能领域中搜索",
    step2Label: "第二步",
    step2Title: "参加开放日",
    step2Desc: "去之前该问什么——本周末的开放日",
    step3Label: "第三步",
    step3Title: "为选拔做准备",
    step3Desc: "试训、试演与面试——学校在看什么",
    link1: "DSA 完整时间轴 →",
    link2: "PSLE 截分历史 →",
    link3: "开放日日历 →",
    kicker: "DSA-Sec 2026 · 新加坡",
    pageTitle: "常见问题解答",
    pageSubtitle:
      "14 个新加坡家长最常问的 DSA-Sec 2026 问题——资格条件、申请时间、承诺规则、才能领域、PSLE COP、IP、SAP、ALP 与 LLP 全覆盖。",
  },
  ms: {
    jumpTo: "Lompat ke soalan",
    nextSteps: "Apa yang anda ingin lakukan seterusnya?",
    step1Label: "Langkah 1",
    step1Title: "Cari sekolah yang sesuai",
    step1Desc: "Cari 1,300+ bidang bakat merentasi 147 sekolah",
    step2Label: "Langkah 2",
    step2Title: "Lawati hari terbuka",
    step2Desc: "Apa yang perlu ditanya sebelum pergi",
    step3Label: "Langkah 3",
    step3Title: "Bersedia untuk pemilihan",
    step3Desc: "Ujian, pengaudisian, dan temuduga — apa yang dicari sekolah",
    link1: "Garis masa DSA penuh →",
    link2: "Skor PSLE COP →",
    link3: "Kalendar hari terbuka →",
    kicker: "DSA-Sec 2026 · Singapura",
    pageTitle: "Soalan Lazim",
    pageSubtitle:
      "Jawapan tepat dan terkini kepada soalan paling umum ibu bapa Singapura tentang DSA-Sec 2026 — kelayakan, tarikh, peraturan komitmen, bidang bakat, PSLE COP, IP, SAP, ALP dan LLP.",
  },
  ta: {
    jumpTo: "கேள்விக்கு தாவு",
    nextSteps: "அடுத்து என்ன செய்ய விரும்புகிறீர்கள்?",
    step1Label: "படி 1",
    step1Title: "பொருந்தும் பள்ளிகளை கண்டறியுங்கள்",
    step1Desc: "147 பள்ளிகளில் 1,300+ திறமை துறைகளை தேடுங்கள்",
    step2Label: "படி 2",
    step2Title: "திறந்த நாட்களுக்கு செல்லுங்கள்",
    step2Desc: "செல்வதற்கு முன் என்ன கேட்க வேண்டும்",
    step3Label: "படி 3",
    step3Title: "தேர்வுக்கு தயாராகுங்கள்",
    step3Desc: "சோதனை, ஆடிஷன், நேர்காணல் — பள்ளிகள் என்ன தேடுகின்றன",
    link1: "முழு DSA காலவரிசை →",
    link2: "PSLE COP மதிப்பெண்கள் →",
    link3: "திறந்த நாட்கள் நாட்காட்டி →",
    kicker: "DSA-Sec 2026 · சிங்கப்பூர்",
    pageTitle: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    pageSubtitle:
      "DSA-Sec 2026 பற்றி சிங்கப்பூர் பெற்றோர் மிகவும் பொதுவாக கேட்கும் கேள்விகளுக்கு துல்லியமான பதில்கள் — தகுதி, தேதிகள், உறுதிமொழி விதிகள், திறமை துறைகள், PSLE COP, IP, SAP, ALP மற்றும் LLP.",
  },
};
