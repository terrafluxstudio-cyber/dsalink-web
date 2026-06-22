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
      en: "The DSA-Sec 2026 application window opens at 11am on 6 May 2026 (a Wednesday) and closes at 4:30pm SGT on 2 June 2026. There is no extension, so treat the 4:30pm deadline as firm. All applications must be submitted through the official MOE DSA-Sec Portal — DSALink links to it but does not collect applications. After the window closes, each school runs its own selection exercises (interviews, sports trials, auditions, and tests), typically from June onwards; schools set their own session dates and notify shortlisted students directly. Outcomes are then released by the schools, and any DSA offer must be accepted before the national PSLE results are released later in the year. Use the weeks before 6 May to shortlist schools and attend May open houses, so you are ready to apply on day one rather than scrambling near the deadline.",
      zh: "DSA-Sec 2026 申请窗口于 2026 年 5 月 6 日（周三）上午 11 点开放，6 月 2 日下午 4:30（新加坡时间）截止。不设延期，请把 4:30 这个截止时间当成硬线。所有申请必须通过 MOE 官方 DSA-Sec 申请系统提交——DSALink 只提供链接，不代收申请。窗口关闭后，各校自行安排选拔活动（面试、体能试训、试演、笔试），通常从 6 月起陆续进行；各校自定时间，并直接通知入围学生。结果由学校公布，任何 DSA 录取都须在当年稍后 PSLE 成绩公布之前接受。建议利用 5 月 6 日之前的几周锁定目标学校、参加 5 月开放日，这样开放第一天就能递交，而不是临近截止才手忙脚乱。",
      ms: "Tetingkap permohonan DSA-Sec 2026 dibuka pada jam 11 pagi, 6 Mei 2026 (hari Rabu) dan ditutup pada 4:30 petang SGT, 2 Jun 2026. Tiada lanjutan, jadi anggap tarikh tutup 4:30 petang sebagai muktamad. Semua permohonan mesti dikemukakan melalui Portal DSA-Sec MOE rasmi — DSALink memautkannya tetapi tidak mengumpul permohonan. Selepas tetingkap ditutup, setiap sekolah menjalankan latihan pemilihan sendiri (temu duga, ujian sukan, audisi, dan ujian), biasanya dari Jun; sekolah menetapkan tarikh sesi sendiri dan memberitahu pelajar yang disenarai pendek secara terus. Keputusan kemudian dikeluarkan oleh sekolah, dan sebarang tawaran DSA mesti diterima sebelum keputusan PSLE kebangsaan dikeluarkan kemudian pada tahun itu. Gunakan minggu sebelum 6 Mei untuk menyenarai pendek sekolah dan menghadiri hari terbuka Mei, supaya anda bersedia memohon pada hari pertama.",
      ta: "DSA-Sec 2026 விண்ணப்ப காலம் 2026 மே 6 (புதன்கிழமை) காலை 11 மணிக்குத் தொடங்கி, 2026 ஜூன் 2 அன்று மாலை 4:30 SGT-க்கு முடிவடைகிறது. நீட்டிப்பு இல்லை, எனவே மாலை 4:30 காலக்கெடுவை உறுதியானதாகக் கருதுங்கள். அனைத்து விண்ணப்பங்களும் அதிகாரப்பூர்வ MOE DSA-Sec Portal மூலம் சமர்ப்பிக்கப்பட வேண்டும் — DSALink அதற்கு இணைப்பு வழங்குகிறது, ஆனால் விண்ணப்பங்களை சேகரிப்பதில்லை. காலம் முடிந்த பிறகு, ஒவ்வொரு பள்ளியும் தனது தேர்வு நடவடிக்கைகளை (நேர்காணல், விளையாட்டு சோதனை, ஆடிஷன், தேர்வு) பொதுவாக ஜூன் முதல் நடத்துகிறது; பள்ளிகள் தங்கள் தேதிகளை நிர்ணயித்து, குறுகிய பட்டியலிடப்பட்ட மாணவர்களை நேரடியாக அறிவிக்கின்றன. முடிவுகள் பள்ளிகளால் வெளியிடப்படுகின்றன, எந்த DSA சலுகையும் அந்த ஆண்டின் பிற்பகுதியில் தேசிய PSLE முடிவுகள் வெளியாவதற்கு முன் ஏற்கப்பட வேண்டும். மே 6-க்கு முந்தைய வாரங்களைப் பயன்படுத்தி பள்ளிகளைக் குறுகிய பட்டியலிட்டு, மே திறந்த நாட்களில் கலந்துகொள்ளுங்கள்.",
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
      en: "Under DSA-Sec, a student may apply to a maximum of three schools, listed in order of preference on the application form. Up to two of those three choices may be used for the same school — for example, to indicate two different talent areas, or an IP and an Express programme at a dual-track school. A student can hold only one confirmed DSA offer at any time, so if your child receives offers from more than one school, they must choose just one. Spread your three choices strategically: include at least one school where your child's record makes them a realistic candidate, rather than spending all three on the most competitive names. Apply to schools that genuinely fit your child's talent area, programme, and values — not prestige alone.",
      zh: "在 DSA-Sec 下，每个学生最多申请三所学校，在申请表上按志愿顺序填写。这三个选择中，最多两个可以用在同一所学校——例如填同一所学校的两个不同才艺方向，或双轨学校的 IP 与 Express 两个课程。任何时候学生只能持有一份 Confirmed Offer，所以如果孩子收到不止一所学校的录取，必须从中只选一所。把三个名额排布得有策略一些：至少留一所孩子凭现有记录有现实机会的学校，而不是三个全押最热门的名字。申请真正契合孩子才艺方向、课程与价值观的学校，而不是只看名气。",
      ms: "Di bawah DSA-Sec, seorang pelajar boleh memohon ke maksimum tiga sekolah, disenaraikan mengikut keutamaan pada borang permohonan. Sehingga dua daripada tiga pilihan itu boleh digunakan untuk sekolah yang sama — contohnya untuk menyatakan dua bidang bakat berbeza, atau program IP dan Express di sekolah dwitrek. Seorang pelajar hanya boleh memegang satu tawaran DSA yang disahkan pada satu-satu masa, jadi jika anak anda menerima tawaran daripada lebih daripada satu sekolah, mereka mesti memilih satu sahaja. Susun tiga pilihan anda secara strategik: sertakan sekurang-kurangnya satu sekolah di mana rekod anak anda menjadikan mereka calon yang realistik, bukan menggunakan ketiga-tiganya untuk nama paling kompetitif. Pohon ke sekolah yang benar-benar sesuai dengan bidang bakat, program, dan nilai anak anda — bukan prestij semata-mata.",
      ta: "DSA-Sec-இன் கீழ், ஒரு மாணவர் அதிகபட்சம் மூன்று பள்ளிகளுக்கு விண்ணப்பிக்கலாம், விண்ணப்பப் படிவத்தில் முன்னுரிமை வரிசையில் பட்டியலிடப்படுகிறது. அந்த மூன்று தேர்வுகளில் இரண்டு வரை ஒரே பள்ளிக்குப் பயன்படுத்தலாம் — உதாரணமாக, ஒரே பள்ளியில் இரண்டு வெவ்வேறு திறமைத் துறைகள், அல்லது இரட்டை-பாதைப் பள்ளியில் IP மற்றும் Express திட்டங்கள். ஒரு மாணவர் எந்த நேரத்திலும் ஒரே ஒரு உறுதிசெய்யப்பட்ட DSA சலுகையை மட்டுமே வைத்திருக்க முடியும், எனவே உங்கள் குழந்தைக்கு ஒன்றுக்கு மேற்பட்ட பள்ளிகளிலிருந்து சலுகைகள் கிடைத்தால், ஒன்றை மட்டும் தேர்வு செய்ய வேண்டும். உங்கள் மூன்று தேர்வுகளையும் உத்தியுடன் பரப்புங்கள்: மிகவும் போட்டித்தன்மையான பெயர்களுக்கு மூன்றையும் செலவழிக்காமல், உங்கள் குழந்தையின் பதிவு அவர்களை யதார்த்தமான வேட்பாளராக்கும் குறைந்தது ஒரு பள்ளியையாவது சேர்க்கவும். பெயருக்காக மட்டுமல்லாமல், உங்கள் குழந்தையின் திறமைத் துறை, திட்டம், மதிப்புகளுக்கு உண்மையில் பொருந்தும் பள்ளிகளுக்கு விண்ணப்பிக்கவும்.",
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
      en: "A rejection or waitlist is not the end of the road. If your child is not given a confirmed place through DSA, they simply enter the S1 Posting Exercise after PSLE like every other student, and can still be posted to a strong school — including, if their PSLE score qualifies, one that earlier rejected them through DSA. Schools generally do not accept appeals against a DSA decision, so there is no point lodging one. A waitlist means the school ranked your child as a reserve: a place can open up if higher-ranked applicants decline their offers or fail to meet the PSLE minimum, but you should plan as though it will not, and keep preparing for PSLE. Schools notify DSA outcomes directly to applicants, and any confirmed offer must be accepted before the national PSLE results are released. Treat DSA as a bonus attempt, not the only route in.",
      zh: "被拒或进候补，不是路到头。如果孩子没有通过 DSA 拿到确认学位，他只是和其他学生一样，在 PSLE 之后进入 S1 统一派位，仍然可能被分配到一所好学校——包括那所早先在 DSA 拒了他的学校，只要 PSLE 成绩达标。学校一般不接受针对 DSA 结果的申诉，所以没必要去递。进候补，意味着学校把孩子排成了后备：如果排名更前的申请者放弃录取、或没达到 PSLE 最低门槛，名额可能空出，但你应当按「不会空出」来规划，继续备战 PSLE。DSA 结果由学校直接通知申请人，任何确认录取都须在全国 PSLE 成绩公布之前接受。把 DSA 当成一次额外机会，而不是唯一入口。",
      ms: "Penolakan atau senarai menunggu bukan penamat. Jika anak anda tidak diberi tempat yang disahkan melalui DSA, mereka hanya memasuki Latihan Penempatan S1 selepas PSLE seperti pelajar lain, dan masih boleh ditempatkan ke sekolah yang baik — termasuk, jika skor PSLE mereka layak, sekolah yang sebelum ini menolak mereka melalui DSA. Sekolah umumnya tidak menerima rayuan terhadap keputusan DSA, jadi tiada gunanya memfailkannya. Senarai menunggu bermaksud sekolah meletakkan anak anda sebagai simpanan: tempat boleh terbuka jika pemohon berkedudukan lebih tinggi menolak tawaran atau gagal memenuhi minimum PSLE, tetapi anda harus merancang seolah-olah ia tidak akan berlaku, dan terus bersedia untuk PSLE. Sekolah memberitahu keputusan DSA terus kepada pemohon, dan sebarang tawaran yang disahkan mesti diterima sebelum keputusan PSLE kebangsaan dikeluarkan. Anggap DSA sebagai percubaan tambahan, bukan satu-satunya laluan masuk.",
      ta: "நிராகரிப்போ காத்திருப்புப் பட்டியலோ பாதையின் முடிவு அல்ல. உங்கள் குழந்தைக்கு DSA மூலம் உறுதிசெய்யப்பட்ட இடம் கிடைக்காவிட்டால், மற்ற மாணவர்களைப் போலவே PSLE-க்குப் பிறகு S1 Posting Exercise-இல் நுழைகிறார், ஒரு நல்ல பள்ளியில் இடம் பெறலாம் — PSLE மதிப்பெண் தகுதியாக இருந்தால், DSA மூலம் முன்பு நிராகரித்த பள்ளியும் சேர்த்து. பள்ளிகள் பொதுவாக DSA முடிவுக்கு எதிரான முறையீட்டை ஏற்பதில்லை, எனவே அதைத் தாக்கல் செய்வதில் பயனில்லை. காத்திருப்புப் பட்டியல் என்பது பள்ளி உங்கள் குழந்தையை இருப்பு வேட்பாளராக வரிசைப்படுத்தியது: உயர் தரவரிசை விண்ணப்பதாரர்கள் சலுகையை மறுத்தால் அல்லது PSLE குறைந்தபட்சத்தைப் பூர்த்தி செய்யாவிட்டால் இடம் கிடைக்கலாம், ஆனால் கிடைக்காது என்றே திட்டமிட்டு PSLE-க்குத் தொடர்ந்து தயாராகுங்கள். பள்ளிகள் DSA முடிவுகளை விண்ணப்பதாரர்களுக்கு நேரடியாக அறிவிக்கின்றன, எந்த உறுதிசெய்யப்பட்ட சலுகையும் தேசிய PSLE முடிவுகள் வெளியாவதற்கு முன் ஏற்கப்பட வேண்டும். DSA-ஐ ஒரே நுழைவு வழியாக அல்ல, ஒரு கூடுதல் முயற்சியாகக் கருதுங்கள்.",
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
      en: "Competitiveness varies enormously by school and by talent area, and MOE does not publish DSA acceptance rates — so treat any specific ratio you see online as an estimate, not a fact. As a rule of thumb, the most over-subscribed places are at the well-known Integrated Programme schools (such as Raffles Institution, Hwa Chong Institution, and NUS High) and in popular talent areas like football, badminton, and piano, where many strong applicants chase few places. The School of the Arts (SOTA) and the Singapore Sports School are specialist schools that admit nearly all students through DSA. Non-IP schools may fill up to 20% of their Secondary 1 intake through DSA; IP schools and the full-DSA schools are not bound by that 20% cap. The practical takeaway is to match your child's genuine, evidenced talent to schools where they are a realistic candidate, rather than spending all three choices on the most famous names.",
      zh: "竞争激烈程度因学校、因才艺方向而差异极大，而 MOE 不公布 DSA 录取率——所以网上看到的任何具体比例，都当估算看，别当事实。一个大致规律：最被抢的名额，集中在知名的直通车（IP）学校（如莱佛士书院、华侨中学、新加坡国大附中），以及足球、羽毛球、钢琴这类热门才艺方向——强手多、名额少。艺术学院（SOTA）和新加坡体育学校属于专门学校，几乎全部学生通过 DSA 录取。非 IP 学校最多用 20% 的中一名额招 DSA；IP 学校和全 DSA 学校不受这 20% 上限约束。实用结论是：把孩子真实、有据可查的才艺水平，对到他有现实机会的学校，而不是三个名额全押最响亮的名字。",
      ms: "Tahap persaingan berbeza-beza secara meluas mengikut sekolah dan bidang bakat, dan MOE tidak menerbitkan kadar penerimaan DSA — jadi anggap sebarang nisbah khusus yang anda lihat dalam talian sebagai anggaran, bukan fakta. Sebagai panduan kasar, tempat yang paling tinggi permintaan adalah di sekolah Program Bersepadu (IP) terkenal (seperti Raffles Institution, Hwa Chong Institution, dan NUS High) dan dalam bidang bakat popular seperti bola sepak, badminton, dan piano, di mana ramai pemohon kuat berebut sedikit tempat. School of the Arts (SOTA) dan Singapore Sports School adalah sekolah pakar yang menerima hampir semua pelajar melalui DSA. Sekolah bukan-IP boleh mengisi sehingga 20% pengambilan Tingkatan 1 mereka melalui DSA; sekolah IP dan sekolah DSA penuh tidak terikat dengan had 20% itu. Kesimpulan praktikalnya: padankan tahap bakat tulen anak anda dengan sekolah di mana mereka calon yang realistik, bukan menghabiskan ketiga-tiga pilihan untuk nama paling terkenal.",
      ta: "போட்டித்தன்மை பள்ளி மற்றும் திறமைத் துறையைப் பொறுத்து மிகப் பெரிய அளவில் வேறுபடுகிறது, மேலும் MOE DSA ஏற்புவீதங்களை வெளியிடுவதில்லை — எனவே ஆன்லைனில் நீங்கள் காணும் எந்தக் குறிப்பிட்ட விகிதத்தையும் உண்மை அல்ல, மதிப்பீடாகக் கருதுங்கள். ஒரு பொது விதியாக, மிக அதிக கோரிக்கையுள்ள இடங்கள் நன்கு அறியப்பட்ட ஒருங்கிணைந்த திட்ட (IP) பள்ளிகளில் (Raffles Institution, Hwa Chong Institution, NUS High போன்றவை) மற்றும் கால்பந்து, பேட்மிண்டன், பியானோ போன்ற பிரபலமான திறமைத் துறைகளில் உள்ளன, அங்கு பல வலுவான விண்ணப்பதாரர்கள் சில இடங்களுக்காகப் போட்டியிடுகின்றனர். School of the Arts (SOTA) மற்றும் Singapore Sports School ஆகியவை கிட்டத்தட்ட அனைத்து மாணவர்களையும் DSA மூலம் சேர்க்கும் சிறப்புப் பள்ளிகள். IP அல்லாத பள்ளிகள் தங்கள் இடைநிலை 1 சேர்க்கையில் 20% வரை DSA மூலம் நிரப்பலாம்; IP பள்ளிகளும் முழு-DSA பள்ளிகளும் அந்த 20% வரம்பிற்கு உட்பட்டவை அல்ல. நடைமுறை முடிவு: உங்கள் குழந்தையின் உண்மையான, சான்றுள்ள திறமை நிலையை அவர்கள் யதார்த்தமான வேட்பாளராக இருக்கும் பள்ளிகளுடன் பொருத்துங்கள், மூன்று தேர்வுகளையும் மிகப் பிரபலமான பெயர்களுக்குச் செலவழிக்காதீர்கள்.",
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
