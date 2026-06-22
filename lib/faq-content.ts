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
      en: "DSA-Sec — Direct School Admission to Secondary — is MOE's scheme that lets a Primary 6 student earn a secondary school place on the strength of a specific talent, before PSLE results are out. Talent areas span sports, performing and visual arts, science and technology, humanities, language, and leadership. Most secondary schools open up to 20% of their Secondary 1 places to DSA; four specialist schools — NUS High, SOTA, the School of Science and Technology, and the Singapore Sports School — admit nearly all their students this way. The 2026 application window runs from 6 May to 2 June. Since the 2019 reforms, DSA is no longer a way to bypass the PSLE on general academic ability: every offer must point to a genuine, sustained talent the child will keep developing in secondary school. Think of it as a talent-based door that opens before, and runs alongside, the PSLE posting route.",
      zh: "DSA-Sec（中学直接收生计划）是教育部的政策，让小六学生在 PSLE 成绩公布之前，凭一项具体才能拿到中学学位。涵盖方向包括体育、表演与视觉艺术、科学与技术、人文、语言双语，以及领导才能。大部分中学最多用 20% 的中一名额开放给 DSA；四所专门学校——国大附中、艺术学院（SOTA）、科技中学、新加坡体育学校——则几乎全部学生都经 DSA 录取。2026 年申请窗口为 5 月 6 日至 6 月 2 日。2019 年改革之后，DSA 不再是凭通用学术能力绕过 PSLE 的途径：每一个录取都必须对应一项真实、持续、并会在中学继续发展的才能。可以把它理解成一道在 PSLE 之前打开、并与 PSLE 派位并行的才能通道。",
      ms: "DSA-Sec — Direct School Admission to Secondary — ialah skim MOE yang membenarkan pelajar Darjah 6 memperoleh tempat sekolah menengah atas kekuatan satu bakat khusus, sebelum keputusan PSLE keluar. Bidang bakat merangkumi sukan, seni persembahan dan visual, sains dan teknologi, kemanusiaan, bahasa, dan kepimpinan. Kebanyakan sekolah menengah membuka sehingga 20% tempat Tingkatan 1 kepada DSA; empat sekolah pakar — NUS High, SOTA, School of Science and Technology, dan Singapore Sports School — menerima hampir semua pelajar melalui cara ini. Tetingkap permohonan 2026 berlangsung dari 6 Mei hingga 2 Jun. Sejak pembaharuan 2019, DSA bukan lagi cara memintas PSLE atas keupayaan akademik umum: setiap tawaran mesti merujuk kepada bakat tulen dan berterusan yang akan terus dikembangkan oleh anak di sekolah menengah. Anggap ia sebagai pintu berasaskan bakat yang terbuka sebelum, dan berjalan seiring dengan, laluan penempatan PSLE.",
      ta: "DSA-Sec — Direct School Admission to Secondary — என்பது MOE-இன் திட்டமாகும், இது ஆரம்ப பள்ளி 6 மாணவரை PSLE முடிவுகள் வருவதற்கு முன்பே, ஒரு குறிப்பிட்ட திறமையின் அடிப்படையில் இடைநிலைப் பள்ளி இடத்தைப் பெற அனுமதிக்கிறது. திறமைத் துறைகள் விளையாட்டு, அரங்கேற்ற மற்றும் காட்சிக் கலை, அறிவியல் மற்றும் தொழில்நுட்பம், மனிதவியல், மொழி, தலைமைத்துவம் ஆகியவற்றை உள்ளடக்கும். பெரும்பாலான இடைநிலைப் பள்ளிகள் தங்கள் இடைநிலை 1 இடங்களில் 20% வரை DSA-க்குத் திறக்கின்றன; நான்கு சிறப்புப் பள்ளிகள் — NUS High, SOTA, School of Science and Technology, Singapore Sports School — கிட்டத்தட்ட அனைத்து மாணவர்களையும் இந்த வழியில் சேர்க்கின்றன. 2026 விண்ணப்ப காலம் மே 6 முதல் ஜூன் 2 வரை. 2019 சீர்திருத்தங்களுக்குப் பிறகு, DSA என்பது பொது கல்வித் திறனின் அடிப்படையில் PSLE-ஐத் தாண்டிச் செல்லும் வழி அல்ல: ஒவ்வொரு சலுகையும் குழந்தை இடைநிலைப் பள்ளியில் தொடர்ந்து வளர்க்கும் உண்மையான, நிலையான திறமையைச் சுட்டிக்காட்ட வேண்டும். இதை PSLE-க்கு முன் திறந்து, PSLE இடம் ஒதுக்கீட்டுடன் இணையாக இயங்கும் திறமை அடிப்படையிலான கதவாகக் கருதுங்கள்.",
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
      en: "Every Primary 6 student in a Singapore mainstream school is eligible — there is no academic cut-off just to apply, and that includes children in Integrated Programme (IP) and Special Assistance Plan (SAP) primary schools. International students enrolled in Singapore schools may also apply, subject to each school's own criteria and available places. You are applying for the Secondary 1 intake that begins in January 2027. Being eligible to apply is not the same as having a realistic chance: schools select on demonstrated talent, so a strong, documented record in the talent area matters far more than simply meeting the basic eligibility. There is no minimum PSLE expectation to apply, but keep in mind that any DSA offer your child later accepts is still conditional on clearing the course's minimum PSLE Posting Group.",
      zh: "新加坡主流小学的每一个小六学生都有资格申请——申请本身没有学术门槛，包括就读直通车（IP）和特别辅助计划（SAP）小学的孩子。在新加坡学校就读的国际学生也可申请，但须符合各校自定的条件和名额。申请的是 2027 年 1 月入学的中一名额。「有资格申请」不等于「有现实机会」：学校按已展现的才能录取，所以在才艺方向上有扎实、有记录的成绩，远比仅仅满足基本资格重要。申请没有 PSLE 最低分要求，但要记得：孩子之后接受的任何 DSA 录取，仍以达到该课程最低 PSLE Posting Group 为条件。",
      ms: "Setiap pelajar Darjah 6 di sekolah rendah arus perdana Singapura layak — tiada had akademik semata-mata untuk memohon, termasuk anak di sekolah rendah Program Bersepadu (IP) dan Pelan Bantuan Khas (SAP). Pelajar antarabangsa yang berdaftar di sekolah Singapura juga boleh memohon, tertakluk kepada kriteria dan tempat setiap sekolah. Anda memohon untuk kemasukan Tingkatan 1 yang bermula pada Januari 2027. Layak untuk memohon tidak sama dengan mempunyai peluang yang realistik: sekolah memilih berdasarkan bakat yang dibuktikan, jadi rekod yang kukuh dan berdokumentasi dalam bidang bakat jauh lebih penting daripada sekadar memenuhi kelayakan asas. Tiada jangkaan PSLE minimum untuk memohon, tetapi ingat bahawa sebarang tawaran DSA yang diterima anak anda kemudiannya masih bersyarat untuk melepasi Posting Group PSLE minimum kursus tersebut.",
      ta: "சிங்கப்பூரின் பொதுப் பள்ளிகளில் படிக்கும் ஒவ்வொரு ஆரம்ப பள்ளி 6 மாணவரும் தகுதியுடையவர் — விண்ணப்பிப்பதற்கு மட்டும் கல்வி வரம்பு இல்லை, IP மற்றும் SAP ஆரம்பப் பள்ளி மாணவர்களும் சேர்த்து. சிங்கப்பூர் பள்ளிகளில் படிக்கும் வெளிநாட்டு மாணவர்களும் விண்ணப்பிக்கலாம், ஒவ்வொரு பள்ளியின் நிபந்தனைகள் மற்றும் இடங்களுக்கு உட்பட்டு. நீங்கள் 2027 ஜனவரியில் தொடங்கும் இடைநிலை 1 சேர்க்கைக்கு விண்ணப்பிக்கிறீர்கள். விண்ணப்பிக்கும் தகுதி என்பது யதார்த்தமான வாய்ப்புக்குச் சமம் அல்ல: பள்ளிகள் நிரூபிக்கப்பட்ட திறமையின் அடிப்படையில் தேர்வு செய்கின்றன, எனவே திறமைத் துறையில் உறுதியான, ஆவணப்படுத்தப்பட்ட பதிவு அடிப்படைத் தகுதியை மட்டும் பூர்த்தி செய்வதை விட மிக முக்கியம். விண்ணப்பிக்க குறைந்தபட்ச PSLE எதிர்பார்ப்பு இல்லை, ஆனால் உங்கள் குழந்தை பின்னர் ஏற்கும் எந்த DSA சலுகையும் அந்தப் பாடத்தின் குறைந்தபட்ச PSLE Posting Group-ஐக் கடப்பதை நிபந்தனையாகக் கொண்டது என்பதை நினைவில் கொள்ளுங்கள்.",
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
      en: "If your child accepts a DSA-Sec offer, the acceptance is binding. They will be posted to that school no matter what their PSLE score is, they cannot take part in the S1 Posting Exercise, and they cannot use their PSLE result to transfer to a different school. They also cannot accept another school's DSA offer afterwards. Beyond the place itself, there is a talent commitment: the child is expected to continue in the talent area through a CCA-linked programme at the school, usually for at least two years, because the offer was made on that basis. This is why acceptance should never be rushed. Before your child accepts, research the school's programmes, CCA culture, posting-group profile, and travel distance, and make sure the child genuinely wants to commit to both the school and the talent — not just the brand name.",
      zh: "孩子一旦接受 DSA-Sec 录取，接受即具约束力。无论 PSLE 成绩如何，孩子都将被分配到该校，不能参加 S1 统一派位，也不能凭 PSLE 成绩转往其他学校，之后更不能再接受另一所学校的 DSA 录取。除了学位本身，还有一项才艺承诺：孩子需要在该校通过 CCA 衔接项目继续发展所申请的才艺方向，通常至少两年——因为录取本就是基于这个前提发出的。这就是为什么接受不能急。在孩子接受之前，了解清楚学校的课程、CCA 文化、分组学术水平和通勤距离，并确认孩子是真心愿意对学校和才艺都做出承诺，而不只是冲着名气。",
      ms: "Jika anak anda menerima tawaran DSA-Sec, penerimaan itu mengikat. Mereka akan ditempatkan di sekolah tersebut tanpa mengira skor PSLE, tidak boleh menyertai Latihan Penempatan S1, dan tidak boleh menggunakan keputusan PSLE untuk berpindah ke sekolah lain. Mereka juga tidak boleh menerima tawaran DSA sekolah lain selepas itu. Selain tempat itu sendiri, ada komitmen bakat: anak dijangka meneruskan bidang bakat melalui program berkaitan CCA di sekolah, biasanya sekurang-kurangnya dua tahun, kerana tawaran dibuat atas dasar itu. Inilah sebabnya penerimaan tidak boleh tergesa-gesa. Sebelum anak anda menerima, kaji program sekolah, budaya CCA, profil kumpulan penempatan, dan jarak perjalanan, dan pastikan anak benar-benar mahu komited kepada kedua-dua sekolah dan bakat — bukan sekadar nama jenama.",
      ta: "உங்கள் குழந்தை DSA-Sec சலுகையை ஏற்றுக்கொண்டால், அந்த ஏற்பு கட்டுப்படுத்தும். PSLE மதிப்பெண் எதுவாக இருந்தாலும் அந்த பள்ளியில் சேர்க்கப்படுவார், S1 Posting Exercise-இல் பங்கேற்க முடியாது, PSLE முடிவைப் பயன்படுத்தி வேறு பள்ளிக்கு மாற முடியாது. அதன் பிறகு வேறு பள்ளியின் DSA சலுகையையும் ஏற்க முடியாது. இடத்தைத் தவிர, ஒரு திறமை உறுதிமொழி உள்ளது: குழந்தை அந்தப் பள்ளியில் CCA-உடன் இணைந்த திட்டத்தின் மூலம் திறமைத் துறையைத் தொடர எதிர்பார்க்கப்படுகிறது, பொதுவாக குறைந்தபட்சம் இரண்டு ஆண்டுகள், ஏனெனில் அந்த அடிப்படையில்தான் சலுகை வழங்கப்பட்டது. இதனால்தான் ஏற்பதை அவசரப்படுத்தக் கூடாது. உங்கள் குழந்தை ஏற்கும் முன், பள்ளியின் திட்டங்கள், CCA கலாச்சாரம், இடம் ஒதுக்கீட்டுக் குழுவின் தன்மை, பயண தூரம் ஆகியவற்றை ஆராய்ந்து, குழந்தை பெயருக்காக மட்டுமல்ல, பள்ளி மற்றும் திறமை இரண்டிற்கும் உண்மையாக உறுதிபூண விரும்புகிறாரா என்பதை உறுதிசெய்யுங்கள்.",
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
      en: "DSA covers a wide span of talent areas, and each school chooses which ones it recruits for. The main groups are: Sports (badminton, basketball, football, swimming, athletics, hockey, volleyball, gymnastics, martial arts, shooting, sailing, and 20-plus more); Performing Arts (orchestra, concert band, choir, dance, drama); Visual Arts; Science & Technology (robotics, coding, biomedical and environmental science); Humanities (debate, journalism, social studies); Language & Bilingualism; and Leadership. Since the 2019 reforms, the academic categories are narrowed to genuine specialisms — such as Math Olympiad or science research — rather than general academic ability. No school recruits across every area, so the talent your child is strong in only matters if a school you can realistically reach actually offers DSA for it. Check each school's own published list, or use DSALink's directory to see which schools take a given talent.",
      zh: "DSA 涵盖的才艺方向很广，具体招哪些由各校自己决定。主要分组包括：体育（羽毛球、篮球、足球、游泳、田径、曲棍球、排球、体操、武术、射击、帆船等 20 余项）、表演艺术（管弦乐、管乐团、合唱、舞蹈、戏剧）、视觉艺术、科学与技术（机器人、编程、生物医学与环境科学）、人文（辩论、新闻、社会学）、语言与双语，以及领导才能。2019 年改革之后，学术类收窄到真正的专科方向——例如数学奥林匹克或科学研究——而非通用学术能力。没有一所学校所有方向都招，所以孩子擅长的才艺，只有在你够得着的学校确实开放该方向 DSA 时才有意义。请查各校官方公布的清单，或用 DSALink 目录查哪些学校收某一项才艺。",
      ms: "DSA merangkumi pelbagai bidang bakat, dan setiap sekolah memilih bidang yang diambilnya. Kumpulan utama ialah: Sukan (badminton, bola keranjang, bola sepak, renang, olahraga, hoki, bola tampar, gimnastik, seni bela diri, menembak, belayar, dan 20 lebih); Seni Persembahan (orkestra, pancaragam konsert, koir, tarian, drama); Seni Visual; Sains & Teknologi (robotik, pengekodan, sains bioperubatan dan alam sekitar); Kemanusiaan (debat, kewartawanan, pengajian sosial); Bahasa & Dwibahasa; dan Kepimpinan. Sejak pembaharuan 2019, kategori akademik dipersempitkan kepada kepakaran tulen — seperti Olimpiad Matematik atau penyelidikan sains — bukan keupayaan akademik umum. Tiada sekolah mengambil dalam setiap bidang, jadi bakat kuat anak anda hanya penting jika sekolah yang boleh anda capai benar-benar menawarkan DSA untuknya. Semak senarai rasmi setiap sekolah, atau gunakan direktori DSALink untuk melihat sekolah mana yang menerima sesuatu bakat.",
      ta: "DSA பரந்த திறமைத் துறைகளை உள்ளடக்குகிறது, ஒவ்வொரு பள்ளியும் எதற்காகச் சேர்க்க வேண்டும் என்பதைத் தேர்வு செய்கிறது. முக்கிய குழுக்கள்: விளையாட்டு (பேட்மிண்டன், கூடைப்பந்து, கால்பந்து, நீச்சல், தடகளம், ஹாக்கி, வாலிபால், ஜிம்னாஸ்டிக்ஸ், போர்க்கலை, துப்பாக்கி சுடுதல், படகோட்டம், மேலும் 20+); அரங்கேற்றக் கலை (ஆர்கெஸ்ட்ரா, கச்சேரி இசைக்குழு, பாடகர் குழு, நடனம், நாடகம்); காட்சிக் கலை; அறிவியல் & தொழில்நுட்பம் (ரோபோட்டிக்ஸ், குறியீட்டு, உயிர்மருத்துவ மற்றும் சுற்றுச்சூழல் அறிவியல்); மனிதவியல் (விவாதம், பத்திரிகை, சமூகவியல்); மொழி & இருமொழித்திறன்; தலைமைத்துவம். 2019 சீர்திருத்தங்களுக்குப் பிறகு, கல்வி வகைகள் பொது கல்வித் திறன் அல்ல, கணித ஒலிம்பியாட் அல்லது அறிவியல் ஆராய்ச்சி போன்ற உண்மையான சிறப்புத் துறைகளுக்குச் சுருக்கப்பட்டுள்ளன. எந்தப் பள்ளியும் எல்லாத் துறைகளிலும் சேர்ப்பதில்லை, எனவே உங்கள் குழந்தையின் வலுவான திறமை, நீங்கள் எட்டக்கூடிய பள்ளி அதற்கு DSA வழங்கினால் மட்டுமே முக்கியம். ஒவ்வொரு பள்ளியின் அதிகாரப்பூர்வப் பட்டியலைப் பார்க்கவும், அல்லது ஒரு திறமையை எந்தப் பள்ளிகள் ஏற்கின்றன என்பதைப் பார்க்க DSALink அட்டவணையைப் பயன்படுத்தவும்.",
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
      en: "PSLE COP — Cut-Off Point — is the indicative score of the last student admitted to a secondary school through the S1 Posting Exercise, expressed in Achievement Level (AL) terms. It tells you roughly how academically competitive a school is in the mainstream posting route. For a DSA student, the COP is not a barrier: once a Confirmed Offer is accepted, the child is posted to that school regardless of where their PSLE lands, as long as they clear the course's minimum Posting Group. So COP matters to DSA families less as a cut-off and more as a profile signal — it hints at the academic environment, peer level, and pace the child will join. DSALink publishes 2023–2025 PSLE COP data in AL notation for all 147 MOE secondary schools at dsalink.sg/psle-cop, so you can compare a DSA target against its mainstream intake.",
      zh: "PSLE COP（报读截分）是通过 S1 统一派位录取该校最后一名学生的参考分数，以成就分（AL）表示，大致反映一所学校在主流派位通道里的学术竞争程度。对 DSA 学生来说，COP 不是门槛：一旦接受 Confirmed Offer，只要达到课程最低 Posting Group，无论 PSLE 落在哪，孩子都会被分配到该校。所以 COP 对 DSA 家庭的意义，与其说是「分数线」，不如说是「画像信号」——它暗示孩子将进入的学术环境、同侪水平和学习节奏。DSALink 在 dsalink.sg/psle-cop 公布全部 147 所教育部中学 2023–2025 年的 AL 截分历史，方便你把一个 DSA 目标校和它的主流录取水平做对比。",
      ms: "PSLE COP (Mata Potong) ialah skor indikatif pelajar terakhir yang diterima masuk ke sekolah menengah melalui Latihan Penempatan S1, dinyatakan dalam Tahap Pencapaian (AL). Ia memberitahu anda secara kasar betapa kompetitifnya sebuah sekolah dari segi akademik dalam laluan penempatan arus perdana. Bagi pelajar DSA, COP bukan halangan: sebaik sahaja Tawaran Sah diterima, anak ditempatkan di sekolah itu tanpa mengira di mana PSLE mereka berada, asalkan mereka melepasi Posting Group minimum kursus. Jadi COP penting kepada keluarga DSA bukan sebagai potongan tetapi sebagai isyarat profil — ia menggambarkan persekitaran akademik, tahap rakan sebaya, dan rentak yang akan disertai anak. DSALink menerbitkan data PSLE COP 2023–2025 dalam notasi AL untuk semua 147 sekolah menengah MOE di dsalink.sg/psle-cop, supaya anda boleh membandingkan sasaran DSA dengan pengambilan arus perdananya.",
      ta: "PSLE COP (Cut-Off Point) என்பது S1 Posting Exercise மூலம் ஒரு இடைநிலைப் பள்ளியில் சேர்க்கப்பட்ட கடைசி மாணவரின் குறியீட்டு மதிப்பெண், வெற்றி நிலை (AL) அடிப்படையில் வெளிப்படுத்தப்படுகிறது. முக்கிய இடம் ஒதுக்கீட்டுப் பாதையில் ஒரு பள்ளி எவ்வளவு கல்விப் போட்டித்தன்மை கொண்டது என்பதை இது தோராயமாகக் காட்டுகிறது. ஒரு DSA மாணவருக்கு, COP ஒரு தடை அல்ல: Confirmed Offer ஏற்கப்பட்டவுடன், பாடத்தின் குறைந்தபட்ச Posting Group-ஐக் கடந்தால் போதும், PSLE எங்கு விழுந்தாலும் குழந்தை அந்தப் பள்ளியில் சேர்க்கப்படுகிறார். எனவே DSA குடும்பங்களுக்கு COP ஒரு வெட்டுப்புள்ளியாக அல்ல, ஒரு சுயவிவர அறிகுறியாகவே முக்கியம் — குழந்தை சேரும் கல்விச் சூழல், சக மாணவர் நிலை, வேகம் ஆகியவற்றை இது சுட்டுகிறது. DSALink dsalink.sg/psle-cop-ல் 147 MOE இடைநிலைப் பள்ளிகளுக்கும் 2023–2025 PSLE COP தரவை AL குறியீட்டில் வெளியிடுகிறது, இதனால் ஒரு DSA இலக்குப் பள்ளியை அதன் முக்கிய சேர்க்கையுடன் ஒப்பிடலாம்.",
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
      en: "Yes — accepting a DSA offer does not exempt your child from sitting the PSLE; every DSA student still takes the national exam. What changes is that the PSLE score no longer decides their secondary school: they will be posted to their confirmed DSA school whatever the result, and they do not join the S1 Posting Exercise. There is one important condition, though. The offer is conditional on meeting the minimum Posting Group for the course they were admitted into — AL 22 or better for Express and Integrated Programme places. So your child should still prepare properly and aim to clear that floor comfortably; a score that falls below the minimum can put the offer at risk or convert an IP place into an O-Level one. The PSLE also remains a useful gauge of readiness for the academic demands of secondary school.",
      zh: "需要——接受 DSA 录取并不免除孩子参加 PSLE，每个 DSA 学生仍要考全国会考。变化的是：PSLE 成绩不再决定就读哪所中学——无论成绩如何，孩子都会被分配到确认的 DSA 学校，也不参加 S1 统一派位。但有一个重要条件：录取以达到所录取课程的最低 Posting Group 为前提——Express 和直通车（IP）学位是 AL 22 或更好。所以孩子仍应认真备考，争取稳稳越过这条线；成绩跌破最低门槛，可能让录取生变，或把 IP 学位转成 O-Level。PSLE 同时也仍是衡量孩子是否为中学学业要求做好准备的有用参考。",
      ms: "Ya — menerima tawaran DSA tidak mengecualikan anak anda daripada menduduki PSLE; setiap pelajar DSA masih menduduki peperiksaan kebangsaan. Apa yang berubah ialah skor PSLE tidak lagi menentukan sekolah menengah mereka: mereka akan ditempatkan ke sekolah DSA yang disahkan apa pun keputusannya, dan mereka tidak menyertai Latihan Penempatan S1. Namun ada satu syarat penting. Tawaran itu bersyarat untuk memenuhi Posting Group minimum bagi kursus yang mereka diterima — AL 22 atau lebih baik untuk tempat Express dan Program Bersepadu. Jadi anak anda masih harus bersedia dengan baik dan menyasarkan untuk melepasi lantai itu dengan selesa; skor yang jatuh di bawah minimum boleh menjejaskan tawaran atau menukar tempat IP kepada O-Level. PSLE juga kekal sebagai ukuran kesediaan yang berguna untuk tuntutan akademik sekolah menengah.",
      ta: "ஆம் — DSA சலுகையை ஏற்றுக்கொள்வது உங்கள் குழந்தையை PSLE எழுதுவதிலிருந்து விலக்கு அளிக்காது; ஒவ்வொரு DSA மாணவரும் தேசியத் தேர்வை எழுதுகிறார். மாறுவது என்னவென்றால், PSLE மதிப்பெண் இனி அவர்களின் இடைநிலைப் பள்ளியை தீர்மானிக்காது: முடிவு எதுவாக இருந்தாலும் உறுதிசெய்யப்பட்ட DSA பள்ளியில் சேர்க்கப்படுவார், S1 Posting Exercise-இல் சேர மாட்டார். ஆனால் ஒரு முக்கியமான நிபந்தனை உள்ளது. அவர்கள் சேர்க்கப்பட்ட பாடத்திற்கான குறைந்தபட்ச Posting Group-ஐ பூர்த்தி செய்வதை சலுகை நிபந்தனையாகக் கொண்டது — Express மற்றும் Integrated Programme இடங்களுக்கு AL 22 அல்லது சிறந்தது. எனவே உங்கள் குழந்தை நன்கு தயாராகி அந்தத் தளத்தை வசதியாகக் கடக்க இலக்கு வைக்க வேண்டும்; குறைந்தபட்சத்திற்குக் கீழே விழும் மதிப்பெண் சலுகையை ஆபத்தில் ஆழ்த்தலாம் அல்லது IP இடத்தை O-Level ஆக மாற்றலாம். இடைநிலைப் பள்ளியின் கல்வித் தேவைகளுக்கான தயார்நிலையை அளவிட PSLE இன்னும் பயனுள்ளதாக இருக்கிறது.",
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
      en: "The Integrated Programme (IP) lets students skip the O-Level examination and move straight to a pre-university qualification after six years of secondary school — the Singapore A-Levels, the International Baccalaureate (IB), or the NUS High Diploma. The appeal is a broader, less exam-focused lower-secondary curriculum, since there is no national exam at the end of Secondary 4. IP schools include Raffles Institution, Raffles Girls' School, Hwa Chong Institution, Nanyang Girls' High School, NUS High School, Cedar Girls' Secondary School, Anglo-Chinese School (Independent), Singapore Chinese Girls' School, St Joseph's Institution, Methodist Girls' School, River Valley High School, and Dunman High School. Most of them admit a share of students through DSA, so a strong talent can be a realistic way in. Remember that an IP DSA offer is still conditional on the child meeting the IP minimum Posting Group (AL ≤ 22); some dual-track schools may convert it to an O-Level Counter-Offer if the PSLE result falls short.",
      zh: "直通车课程（IP）让学生跳过 O 水准考试，在六年中学之后直接升读大学预科资格——新加坡 A 水准、国际文凭（IB），或南大高中文凭。它的吸引力在于：因为中四末没有全国会考，初中阶段课程更宽、不那么应试。提供 IP 的学校包括莱佛士书院、莱佛士女中、华中初级学院、南洋女子中学、南大高中、义安女子中学、英华自主中学、新加坡华侨女子中学、圣若瑟书院、卫理女子中学、立化中学和德明政府中学。多数学校会拨一部分名额经 DSA 招生，所以一项扎实的才艺是一条现实的入口。要记得：IP 的 DSA 录取仍以孩子达到 IP 最低 Posting Group（AL ≤ 22）为条件；若 PSLE 不达标，部分双轨学校可能转为 O-Level 的 Counter-Offer。",
      ms: "Program Bersepadu (IP) membenarkan pelajar melangkau peperiksaan O-Level dan terus ke kelayakan pra-universiti selepas enam tahun sekolah menengah — A-Level Singapura, Baccalaureate Antarabangsa (IB), atau Diploma NUS High. Daya tarikannya ialah kurikulum menengah bawah yang lebih luas dan kurang berfokus peperiksaan, kerana tiada peperiksaan kebangsaan pada akhir Tingkatan 4. Sekolah IP termasuk Raffles Institution, Raffles Girls' School, Hwa Chong Institution, Nanyang Girls' High School, NUS High School, Cedar Girls' Secondary School, Anglo-Chinese School (Independent), Singapore Chinese Girls' School, St Joseph's Institution, Methodist Girls' School, River Valley High School, dan Dunman High School. Kebanyakannya menerima sebahagian pelajar melalui DSA, jadi bakat yang kuat boleh menjadi laluan masuk yang realistik. Ingat bahawa tawaran DSA IP masih bersyarat untuk anak memenuhi Posting Group minimum IP (AL ≤ 22); sesetengah sekolah dwitrek mungkin menukarnya kepada Tawaran Balas O-Level jika keputusan PSLE tidak mencukupi.",
      ta: "ஒருங்கிணைந்த திட்டம் (IP) மாணவர்களை O-Level தேர்வைத் தவிர்த்து, ஆறு ஆண்டு இடைநிலைப் பள்ளிக்குப் பிறகு நேரடியாக பல்கலைக்கழக முன் தகுதிக்குச் செல்ல அனுமதிக்கிறது — Singapore A-Levels, International Baccalaureate (IB), அல்லது NUS High Diploma. Secondary 4 இறுதியில் தேசியத் தேர்வு இல்லாததால், கீழ் இடைநிலைப் பாடத்திட்டம் பரந்ததாகவும் தேர்வு சார்ந்ததாக இல்லாமலும் இருப்பதே அதன் கவர்ச்சி. IP பள்ளிகளில் Raffles Institution, Raffles Girls' School, Hwa Chong Institution, Nanyang Girls' High School, NUS High School, Cedar Girls' Secondary School, Anglo-Chinese School (Independent), Singapore Chinese Girls' School, St Joseph's Institution, Methodist Girls' School, River Valley High School, Dunman High School ஆகியவை அடங்கும். அவற்றில் பெரும்பாலானவை ஒரு பகுதி மாணவர்களை DSA மூலம் சேர்க்கின்றன, எனவே வலுவான திறமை ஒரு யதார்த்தமான நுழைவு வழியாக இருக்கலாம். IP DSA சலுகை இன்னும் குழந்தை IP குறைந்தபட்ச Posting Group (AL ≤ 22)-ஐ பூர்த்தி செய்வதை நிபந்தனையாகக் கொண்டது; PSLE முடிவு குறைந்தால் சில இரட்டை-பாதைப் பள்ளிகள் அதை O-Level Counter-Offer ஆக மாற்றலாம் என்பதை நினைவில் கொள்ளுங்கள்.",
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
      en: "SAP — Special Assistance Plan — schools offer an effectively bilingual environment in which both English and Mandarin Chinese are main languages of instruction, with a strong emphasis on Chinese language, literature, and culture. There are 13 SAP secondary schools in Singapore, including Hwa Chong Institution, Nanyang Girls' High School, Catholic High School, Maris Stella High School, Nan Hua High School, Nan Chiau High School, Anglican High School, Chung Cheng High School (Main), Dunman High School, and River Valley High School. Several are also Integrated Programme schools, so they sit among the most academically selective in the country. In PSLE COP listings, SAP schools usually carry a Higher Chinese Language (HCL) requirement, which is why their cut-offs are shown with an HCL grade alongside the AL score. If your child has genuine strength in Chinese language or culture, a SAP school may be a natural DSA fit — but DSA there still rests on a specific talent, not the language alone.",
      zh: "特别辅助计划（SAP）学校提供实质上的双语环境，英语与华语都是主要教学语言，并着重中文语言、文学与文化的培养。新加坡共有 13 所 SAP 中学，包括华中初级学院、南洋女子中学、公教中学、马里士太拉中学、南华中学、南侨中学、圣公会中学、中正中学（义安校舍）、德明政府中学和立化中学。其中数所同时是直通车（IP）学校，因而属于全国学术最具选拔性的一批。在 PSLE COP 列表中，SAP 学校通常带有高级华文（HCL）要求，所以它们的截分会以 HCL 等级与 AL 分数并列呈现。如果孩子在华文语言或文化上有真实强项，SAP 学校可能是顺理成章的 DSA 选择——但那里的 DSA 仍然要凭一项具体才能，而不只是语言。",
      ms: "Sekolah SAP — Pelan Bantuan Khas — menawarkan persekitaran dwibahasa sebenar di mana kedua-dua bahasa Inggeris dan Mandarin adalah bahasa pengantar utama, dengan penekanan kuat pada bahasa Cina, kesusasteraan, dan budaya. Terdapat 13 sekolah menengah SAP di Singapura, termasuk Hwa Chong Institution, Nanyang Girls' High School, Catholic High School, Maris Stella High School, Nan Hua High School, Nan Chiau High School, Anglican High School, Chung Cheng High School (Main), Dunman High School, dan River Valley High School. Beberapa daripadanya juga sekolah Program Bersepadu, jadi mereka antara yang paling selektif dari segi akademik di negara ini. Dalam senarai PSLE COP, sekolah SAP biasanya membawa keperluan Higher Chinese Language (HCL), sebab itu potongan mereka ditunjukkan dengan gred HCL di samping skor AL. Jika anak anda mempunyai kekuatan tulen dalam bahasa atau budaya Cina, sekolah SAP mungkin padanan DSA yang semula jadi — tetapi DSA di situ masih bergantung pada bakat khusus, bukan bahasa semata-mata.",
      ta: "SAP — Special Assistance Plan — பள்ளிகள் ஆங்கிலம் மற்றும் மாண்டரின் இரண்டும் முக்கிய கற்பித்தல் மொழிகளாக உள்ள உண்மையான இருமொழிச் சூழலை வழங்குகின்றன, சீன மொழி, இலக்கியம், கலாச்சாரம் ஆகியவற்றில் வலுவான கவனம் செலுத்துகின்றன. சிங்கப்பூரில் 13 SAP இடைநிலைப் பள்ளிகள் உள்ளன — Hwa Chong Institution, Nanyang Girls' High School, Catholic High School, Maris Stella High School, Nan Hua High School, Nan Chiau High School, Anglican High School, Chung Cheng High School (Main), Dunman High School, River Valley High School உள்ளிட்டவை. அவற்றில் சில ஒருங்கிணைந்த திட்டப் பள்ளிகளும் கூட, எனவே நாட்டிலேயே கல்வி ரீதியாக மிகவும் தேர்ந்தெடுக்கும் பள்ளிகளில் இடம்பெறுகின்றன. PSLE COP பட்டியல்களில், SAP பள்ளிகள் பொதுவாக Higher Chinese Language (HCL) தேவையைக் கொண்டுள்ளன, எனவே அவற்றின் வெட்டுப்புள்ளிகள் AL மதிப்பெண்ணுடன் HCL தரத்துடன் காட்டப்படுகின்றன. உங்கள் குழந்தைக்கு சீன மொழி அல்லது கலாச்சாரத்தில் உண்மையான வலிமை இருந்தால், SAP பள்ளி இயல்பான DSA பொருத்தமாக இருக்கலாம் — ஆனால் அங்கு DSA இன்னும் ஒரு குறிப்பிட்ட திறமையை அடிப்படையாகக் கொண்டது, மொழியை மட்டும் அல்ல.",
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
      en: "Every MOE secondary school runs one Applied Learning Programme (ALP) — a school-distinctive programme that links academic subjects to authentic, real-world applications, so students see why what they learn matters. Common themes include STEM and innovation (robotics, environmental science, electronics), journalism and media literacy, biomedical and health science, design and entrepreneurship, and the applied arts. Unlike a CCA, the ALP runs within the curriculum and reaches every student in the school, not just a talent squad. For DSA families it is a useful signal: the ALP hints at where a school invests its energy and how it teaches, which may or may not align with your child's interests. You can find each school's ALP on MOE SchoolFinder and in the DSALink school directory — worth checking alongside the school's DSA talent areas before you shortlist.",
      zh: "每所教育部中学都设有一个应用学习课程（ALP）——这是各校的特色课程，把学科知识和真实情境中的应用连起来，让学生看到所学的意义。常见主题包括 STEM 与创新（机器人、环境科学、电子）、新闻与媒体素养、生物医学与健康科学、设计与创业，以及应用艺术。与 CCA 不同，ALP 在课程之内进行，覆盖全校每一个学生，而不只是才艺队。对 DSA 家庭来说，它是个有用的信号：ALP 暗示了一所学校把精力投在哪里、怎么教，这未必和孩子的兴趣一致。各校 ALP 可在 MOE SchoolFinder 及 DSALink 学校目录查到——在筛选之前，值得和该校的 DSA 才艺方向一起看。",
      ms: "Setiap sekolah menengah MOE menjalankan satu Program Pembelajaran Gunaan (ALP) — program khusus sekolah yang menghubungkan mata pelajaran akademik dengan aplikasi dunia nyata, supaya pelajar nampak kenapa apa yang mereka belajar itu penting. Tema biasa termasuk STEM dan inovasi (robotik, sains alam sekitar, elektronik), kewartawanan dan celik media, sains bioperubatan dan kesihatan, reka bentuk dan keusahawanan, serta seni gunaan. Tidak seperti CCA, ALP berjalan dalam kurikulum dan menjangkau setiap pelajar di sekolah, bukan hanya skuad bakat. Bagi keluarga DSA ia isyarat berguna: ALP menggambarkan di mana sekolah melaburkan tenaganya dan cara ia mengajar, yang mungkin atau mungkin tidak sejajar dengan minat anak anda. Anda boleh mencari ALP setiap sekolah di MOE SchoolFinder dan dalam direktori sekolah DSALink — wajar disemak bersama bidang bakat DSA sekolah sebelum anda menyenarai pendek.",
      ta: "ஒவ்வொரு MOE இடைநிலைப் பள்ளியும் ஒரு பயன்பாட்டு கல்வி திட்டத்தை (ALP) நடத்துகிறது — இது கல்விப் பாடங்களை உண்மையான உலகப் பயன்பாடுகளுடன் இணைக்கும் பள்ளியின் தனித்துவத் திட்டம், இதனால் மாணவர்கள் தாங்கள் கற்பது ஏன் முக்கியம் என்பதைப் பார்க்கிறார்கள். பொதுவான கருப்பொருள்கள்: STEM மற்றும் கண்டுபிடிப்பு (ரோபோட்டிக்ஸ், சுற்றுச்சூழல் அறிவியல், மின்னணுவியல்), பத்திரிகை மற்றும் ஊடக அறிவு, உயிர்மருத்துவ மற்றும் சுகாதார அறிவியல், வடிவமைப்பு மற்றும் தொழில்முனைவு, பயன்பாட்டுக் கலை. CCA போலல்லாமல், ALP பாடத்திட்டத்திற்குள் இயங்கி, ஒரு திறமைக் குழுவை மட்டுமல்ல, பள்ளியின் ஒவ்வொரு மாணவரையும் அடைகிறது. DSA குடும்பங்களுக்கு இது ஒரு பயனுள்ள அறிகுறி: ஒரு பள்ளி தனது ஆற்றலை எங்கே முதலீடு செய்கிறது, எப்படிக் கற்பிக்கிறது என்பதை ALP சுட்டுகிறது, இது உங்கள் குழந்தையின் ஆர்வத்துடன் ஒத்துப்போகலாம் அல்லது போகாமல் இருக்கலாம். ஒவ்வொரு பள்ளியின் ALP-ஐ MOE SchoolFinder மற்றும் DSALink பள்ளி அட்டவணையில் காணலாம் — குறுகிய பட்டியலிடும் முன் பள்ளியின் DSA திறமைத் துறைகளுடன் சேர்த்துப் பார்ப்பது நல்லது.",
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
      en: "Every MOE secondary school also runs one Lifelong Learning Programme (LLP), the values-and-character counterpart to the ALP. Where the ALP is about applied academic learning, the LLP develops resilience, leadership, and personal growth, usually anchored on a particular sport, performing art, outdoor education, or community-youth-leadership theme. Examples include programmes built around hockey, basketball or water sports, a musical ensemble, the arts, or sustained community service. Like the ALP, the LLP is school-wide rather than a CCA squad, so it shapes the everyday culture your child would join. For a DSA family, the LLP can reveal whether a school's broader identity matches your child's talent and temperament — a sports-anchored LLP at a school that also offers your child's DSA sport, for instance, is a strong sign of fit. LLP details are listed on MOE SchoolFinder and in the DSALink school directory at dsalink.sg/schools.",
      zh: "每所教育部中学也设有一个终身学习课程（LLP），可以看作 ALP 在品格与价值观一侧的对应。ALP 重在应用型学术，LLP 则培养韧性、领导力与个人成长，通常以某项运动、表演艺术、户外教育或青少年社区领袖主题为核心。典型例子包括以曲棍球、篮球或水上运动、某个合奏团、艺术，或长期社区服务为核心的课程。和 ALP 一样，LLP 是全校性的，而非一支才艺队，所以它塑造孩子日常会融入的校园文化。对 DSA 家庭来说，LLP 能看出一所学校的整体气质是否和孩子的才艺与性情相合——比如一所学校既有以运动为核心的 LLP，又开放孩子那项 DSA 运动，就是很强的契合信号。各校 LLP 详情可在 MOE SchoolFinder 及 dsalink.sg/schools 查阅。",
      ms: "Setiap sekolah menengah MOE juga menjalankan satu Program Pembelajaran Seumur Hidup (LLP), pasangan nilai-dan-karakter kepada ALP. Jika ALP mengenai pembelajaran akademik gunaan, LLP membangunkan ketahanan, kepimpinan, dan pertumbuhan peribadi, biasanya berteraskan sesuatu sukan, seni persembahan, pendidikan luar, atau tema kepimpinan belia komuniti. Contoh termasuk program berasaskan hoki, bola keranjang atau sukan air, ensembel muzik, seni, atau khidmat masyarakat yang berterusan. Seperti ALP, LLP adalah seluruh sekolah dan bukan skuad CCA, jadi ia membentuk budaya harian yang akan disertai anak anda. Bagi keluarga DSA, LLP boleh mendedahkan sama ada identiti sekolah yang lebih luas sepadan dengan bakat dan perangai anak anda — contohnya, LLP berteraskan sukan di sekolah yang turut menawarkan sukan DSA anak anda ialah tanda padanan yang kuat. Butiran LLP disenaraikan di MOE SchoolFinder dan dalam direktori sekolah DSALink di dsalink.sg/schools.",
      ta: "ஒவ்வொரு MOE இடைநிலைப் பள்ளியும் ஒரு வாழ்நாள் கல்வி திட்டத்தையும் (LLP) நடத்துகிறது, இது ALP-க்கு மதிப்பு-மற்றும்-பண்பு சார்ந்த இணை. ALP பயன்பாட்டுக் கல்வியைப் பற்றியது என்றால், LLP மனவுறுதி, தலைமைத்துவம், தனிப்பட்ட வளர்ச்சியை வளர்க்கிறது, பொதுவாக ஒரு குறிப்பிட்ட விளையாட்டு, அரங்கேற்றக் கலை, வெளிப்புறக் கல்வி, அல்லது இளைஞர் சமூகத் தலைமைக் கருப்பொருளை அடிப்படையாகக் கொண்டது. ஹாக்கி, கூடைப்பந்து அல்லது நீர் விளையாட்டு, ஒரு இசைக்குழு, கலை, அல்லது தொடர்ச்சியான சமூக சேவை சார்ந்த திட்டங்கள் எடுத்துக்காட்டுகள். ALP போலவே, LLP ஒரு CCA குழு அல்ல, பள்ளி முழுவதும் பரவியது, எனவே உங்கள் குழந்தை சேரும் அன்றாட கலாச்சாரத்தை வடிவமைக்கிறது. DSA குடும்பத்திற்கு, ஒரு பள்ளியின் பரந்த அடையாளம் உங்கள் குழந்தையின் திறமை மற்றும் குணத்துடன் பொருந்துகிறதா என்பதை LLP வெளிப்படுத்தும் — எடுத்துக்காட்டாக, உங்கள் குழந்தையின் DSA விளையாட்டையும் வழங்கும் பள்ளியில் விளையாட்டு சார்ந்த LLP ஒரு வலுவான பொருத்த அறிகுறி. LLP விவரங்கள் MOE SchoolFinder மற்றும் dsalink.sg/schools-ல் உள்ளன.",
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
      en: "Start early — ideally in Primary 4 or 5 — so the child builds a genuine, documented record rather than a last-minute file. The right preparation depends on the talent area. For sports: consistent training attendance plus results at zonal or national level, and a coach who can speak to the child's progress. For performing arts: graded examination results (ABRSM, Trinity, NAFA), competition placings, and recital or performance records. For science and technology: participation and results in competitions such as the Singapore Science and Engineering Fair, Olympiads, or coding contests, backed by a project portfolio. For every area, attend open houses in May 2026 to hear directly from teachers what each school actually looks for, and keep evidence organised — certificates, photos, programme booklets, videos. Most importantly, make sure the interest is real: selection panels are practised at telling a child's own passion from a parent-built portfolio.",
      zh: "越早开始越好，理想情况下从小四或小五就着手，让孩子积累出真实、有记录的档案，而不是临时拼凑一份材料。准备方式取决于才艺方向。体育类：稳定的训练出席，加上区级或全国级的成绩，以及一位能说清孩子进步的教练。表演艺术类：分级考试成绩（ABRSM、Trinity、NAFA）、比赛名次，以及演出或汇报记录。科学与技术类：参加新加坡科学与工程展、奥林匹克或编程比赛并取得成绩，配上项目作品集。所有方向：参加 2026 年 5 月开放日，直接听老师讲各校真正看重什么，并把证据整理好——证书、照片、节目册、视频。最重要的是确保兴趣是真的：选拔评审很擅长分辨孩子自己的热情和家长堆出来的作品集。",
      ms: "Mulakan awal — idealnya pada Darjah 4 atau 5 — supaya anak membina rekod tulen dan berdokumentasi, bukan fail saat akhir. Persediaan yang betul bergantung pada bidang bakat. Untuk sukan: kehadiran latihan yang konsisten serta keputusan di peringkat zon atau kebangsaan, dan jurulatih yang boleh menceritakan kemajuan anak. Untuk seni persembahan: keputusan peperiksaan bergred (ABRSM, Trinity, NAFA), kedudukan pertandingan, dan rekod persembahan. Untuk sains dan teknologi: penyertaan dan keputusan dalam pertandingan seperti Singapore Science and Engineering Fair, Olimpiad, atau pertandingan pengekodan, disokong portfolio projek. Untuk setiap bidang, hadiri hari terbuka pada Mei 2026 untuk mendengar terus daripada guru apa yang sebenarnya dicari setiap sekolah, dan simpan bukti secara teratur — sijil, foto, buku program, video. Paling penting, pastikan minat itu tulen: panel pemilihan mahir membezakan keghairahan anak sendiri daripada portfolio yang dibina ibu bapa.",
      ta: "முடிந்தவரை சீக்கிரம் தொடங்குங்கள் — சிறந்தது ஆரம்ப பள்ளி 4 அல்லது 5-ல் — இதனால் குழந்தை கடைசி நேரக் கோப்பு அல்ல, உண்மையான, ஆவணப்படுத்தப்பட்ட பதிவை உருவாக்குகிறார். சரியான தயாரிப்பு திறமைத் துறையைப் பொறுத்தது. விளையாட்டுக்கு: தொடர்ச்சியான பயிற்சி வருகை, மண்டல அல்லது தேசிய அளவிலான முடிவுகள், குழந்தையின் முன்னேற்றத்தைப் பற்றிப் பேசக்கூடிய பயிற்சியாளர். அரங்கேற்றக் கலைக்கு: தர பரீட்சை முடிவுகள் (ABRSM, Trinity, NAFA), போட்டி இடங்கள், நிகழ்ச்சிப் பதிவுகள். அறிவியல் மற்றும் தொழில்நுட்பத்திற்கு: Singapore Science and Engineering Fair, ஒலிம்பியாட், அல்லது குறியீட்டுப் போட்டிகளில் பங்கேற்பு மற்றும் முடிவுகள், ஒரு திட்ட portfolio-உடன். ஒவ்வொரு துறைக்கும், மே 2026 திறந்த நாட்களில் கலந்துகொண்டு ஒவ்வொரு பள்ளியும் உண்மையில் எதைத் தேடுகிறது என்பதை ஆசிரியர்களிடம் நேரடியாகக் கேளுங்கள், சான்றுகளை — சான்றிதழ்கள், புகைப்படங்கள், நிகழ்ச்சி புத்தகங்கள், வீடியோக்கள் — ஒழுங்காக வைத்திருங்கள். மிக முக்கியமாக, ஆர்வம் உண்மையானது என்பதை உறுதிசெய்யுங்கள்: குழந்தையின் சொந்த ஆர்வத்தையும் பெற்றோர் உருவாக்கிய portfolio-வையும் வேறுபடுத்துவதில் தேர்வுக் குழுக்கள் தேர்ச்சி பெற்றவை.",
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
      en: "DSALink's open-house calendar at dsalink.sg/open-houses lists all 147 MOE secondary schools with their May 2026 open-house dates, whether each session is on-site or online, and a direct link to the school's own DSA or admissions page. Open houses are the single best way to judge fit before you apply: you can hear teachers describe each DSA talent programme, see the facilities, get a feel for the culture, and ask the questions that decide a shortlist. Aim to attend the schools you are seriously considering rather than collecting visits. The calendar is updated as schools release and revise their dates, so check back closer to May, and always confirm the final time and venue on the school's official website before you go — dates can shift at short notice.",
      zh: "DSALink 开放日日历（dsalink.sg/open-houses）收录全部 147 所教育部中学，包含各校 2026 年 5 月的开放日日期、每场是线下还是线上，以及通往该校自家 DSA / 招生页面的直链。开放日是申请前判断契合度最好的方式：你能听老师讲解每个 DSA 才艺项目、看场地、感受校园气质，并问出那些真正决定候选名单的问题。建议把精力放在你认真考虑的学校上，而不是到处刷场次。日历会随学校陆续公布和调整日期而更新，临近 5 月时记得回来查，并在出发前以学校官网为准确认最终时间和地点——日期可能临时变动。",
      ms: "Kalendar hari terbuka DSALink di dsalink.sg/open-houses menyenaraikan semua 147 sekolah menengah MOE dengan tarikh hari terbuka Mei 2026 mereka, sama ada setiap sesi di tapak atau dalam talian, dan pautan terus ke halaman DSA atau kemasukan sekolah itu sendiri. Hari terbuka ialah cara terbaik menilai kesesuaian sebelum anda memohon: anda boleh mendengar guru menerangkan setiap program bakat DSA, melihat kemudahan, merasai budaya, dan bertanya soalan yang menentukan senarai pendek. Sasarkan untuk menghadiri sekolah yang anda pertimbangkan dengan serius, bukan mengumpul lawatan. Kalendar dikemas kini apabila sekolah mengeluarkan dan menyemak semula tarikh mereka, jadi semak semula menghampiri Mei, dan sentiasa sahkan masa dan tempat akhir di laman web rasmi sekolah sebelum anda pergi — tarikh boleh berubah pada saat akhir.",
      ta: "DSALink-இன் திறந்த நாள் நாட்காட்டி dsalink.sg/open-houses-ல் 147 MOE இடைநிலைப் பள்ளிகள் அனைத்தும், அவற்றின் மே 2026 திறந்த நாள் தேதிகள், ஒவ்வொரு அமர்வும் நேரடியா அல்லது ஆன்லைனா, மற்றும் அந்தப் பள்ளியின் சொந்த DSA / சேர்க்கைப் பக்கத்திற்கான நேரடி இணைப்புடன் பட்டியலிடப்பட்டுள்ளன. விண்ணப்பிப்பதற்கு முன் பொருத்தத்தை மதிப்பிட திறந்த நாட்கள்தான் சிறந்த வழி: ஒவ்வொரு DSA திறமைத் திட்டத்தையும் ஆசிரியர்கள் விளக்குவதைக் கேட்கலாம், வசதிகளைப் பார்க்கலாம், கலாச்சாரத்தை உணரலாம், குறுகிய பட்டியலைத் தீர்மானிக்கும் கேள்விகளைக் கேட்கலாம். வருகைகளைச் சேகரிப்பதை விட, நீங்கள் தீவிரமாகக் கருதும் பள்ளிகளுக்குச் செல்ல இலக்கு வையுங்கள். பள்ளிகள் தேதிகளை வெளியிட்டு திருத்தும்போது நாட்காட்டி புதுப்பிக்கப்படும், எனவே மே நெருங்கும்போது மீண்டும் பார்க்கவும், செல்வதற்கு முன் இறுதி நேரம் மற்றும் இடத்தை எப்போதும் பள்ளியின் அதிகாரப்பூர்வ வலைத்தளத்தில் உறுதிசெய்யவும் — தேதிகள் குறுகிய அறிவிப்பில் மாறலாம்.",
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
      en: "No — applying for DSA-Sec is completely free. There are no application fees for any school, because every application goes through the official MOE DSA-Sec Portal at no charge. The only real costs are indirect: time spent at open houses and preparing the portfolio, and whatever you already invest in your child's training, lessons, or coaching for the talent itself. Be cautious of anyone who asks you to pay a fee to lodge a DSA application, guarantees a place, or offers to handle the submission for money — that is not part of the official process and is a common sign of a scam. If a tuition or talent centre offers DSA preparation, treat it as optional coaching, not a requirement, and never share your child's PSLE candidate or MOE login details with a third party.",
      zh: "不需要——申请 DSA-Sec 完全免费。任何学校都没有申请费，因为所有申请都通过 MOE 官方 DSA-Sec 申请系统提交，不收一分钱。真正的成本是间接的：跑开放日和准备作品集花的时间，以及你本来就在孩子训练、上课或才艺培训上的投入。要警惕任何要你付费代递 DSA 申请、保证录取、或收钱帮你提交的人——那不属于官方流程，是常见的诈骗信号。如果有补习或才艺中心提供 DSA 备考，把它当成可选的辅导，而非必需，并且绝不要把孩子的 PSLE 考生信息或 MOE 登录凭据交给第三方。",
      ms: "Tidak — memohon DSA-Sec adalah percuma sepenuhnya. Tiada yuran permohonan untuk mana-mana sekolah, kerana setiap permohonan melalui Portal DSA-Sec MOE rasmi tanpa caj. Satu-satunya kos sebenar adalah tidak langsung: masa di hari terbuka dan menyediakan portfolio, serta apa sahaja yang anda sudah laburkan dalam latihan, kelas, atau kejurulatihan anak untuk bakat itu sendiri. Berhati-hati dengan sesiapa yang meminta anda membayar yuran untuk mengemukakan permohonan DSA, menjamin tempat, atau menawarkan untuk menguruskan penyerahan dengan bayaran — itu bukan sebahagian daripada proses rasmi dan tanda biasa penipuan. Jika pusat tuisyen atau bakat menawarkan persediaan DSA, anggap ia kejurulatihan pilihan, bukan keperluan, dan jangan sekali-kali berkongsi butiran calon PSLE atau log masuk MOE anak anda dengan pihak ketiga.",
      ta: "இல்லை — DSA-Sec-க்கு விண்ணப்பிப்பது முற்றிலும் இலவசம். எந்தப் பள்ளிக்கும் விண்ணப்பக் கட்டணம் இல்லை, ஏனெனில் ஒவ்வொரு விண்ணப்பமும் அதிகாரப்பூர்வ MOE DSA-Sec Portal மூலம் கட்டணமின்றிச் செல்கிறது. உண்மையான செலவுகள் மறைமுகமானவை: திறந்த நாட்களில் செலவழிக்கும் நேரம், portfolio தயாரிப்பு, மற்றும் திறமைக்காக நீங்கள் ஏற்கனவே குழந்தையின் பயிற்சி, வகுப்புகள், அல்லது பயிற்சியில் முதலீடு செய்வது. DSA விண்ணப்பத்தை சமர்ப்பிக்க கட்டணம் கேட்கும், இடத்தை உறுதியளிக்கும், அல்லது பணத்திற்கு சமர்ப்பிப்பைக் கையாள முன்வரும் எவரிடமும் எச்சரிக்கையாக இருங்கள் — அது அதிகாரப்பூர்வ நடைமுறையின் பகுதி அல்ல, ஒரு மோசடியின் பொதுவான அறிகுறி. ஒரு டியூஷன் அல்லது திறமை மையம் DSA தயாரிப்பை வழங்கினால், அதை அவசியம் அல்ல, விருப்பப் பயிற்சியாகக் கருதுங்கள், உங்கள் குழந்தையின் PSLE வேட்பாளர் அல்லது MOE உள்நுழைவு விவரங்களை மூன்றாம் தரப்புடன் ஒருபோதும் பகிர வேண்டாம்.",
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
      en: "Yes — a DSA offer is conditional, so PSLE results still matter even after your child has accepted one. Your child must sit the PSLE, and they must clear the minimum Posting Group for the course they were admitted into. For most Express and Integrated Programme (IP) places that means an AL total of 22 or better. If the result clears that floor, the place is confirmed and the child is posted there regardless of the school's usual cut-off. If it falls short, the offer can be withdrawn, or — at some dual-track schools — converted into an O-Level Counter-Offer instead of the IP place. So the offer protects your child from cut-off pressure, not from the minimum standard. Check each school's specific Posting Group requirement before accepting, and keep PSLE preparation on track right through to the exam.",
      zh: "是的——DSA 录取是有条件的，所以即使孩子已经接受，PSLE 成绩仍然重要。孩子必须参加 PSLE，并且要达到所录取课程的最低 Posting Group。对大多数 Express 和直通车（IP）学位来说，意味着 AL 总分 22 或更好。成绩越过这条线，学位即确认，无论该校平时的切线如何，孩子都会被分配到那里。如果不达标，录取可能被撤回，或者在部分双轨学校转成 O-Level 的 Counter-Offer，而不是原来的 IP 学位。所以这份录取保护的是孩子不受切线压力影响，而不是豁免最低门槛。接受之前先确认各校具体的 Posting Group 要求，并把 PSLE 备考一路保持到考试结束。",
      ms: "Ya — tawaran DSA adalah bersyarat, jadi keputusan PSLE masih penting walaupun selepas anak anda menerimanya. Anak anda mesti menduduki PSLE, dan mesti melepasi Posting Group minimum bagi kursus yang mereka diterima. Untuk kebanyakan tempat Express dan Program Bersepadu (IP) itu bermakna jumlah AL 22 atau lebih baik. Jika keputusan melepasi lantai itu, tempat disahkan dan anak ditempatkan di situ tanpa mengira potongan biasa sekolah. Jika ia tidak mencukupi, tawaran boleh ditarik balik, atau — di sesetengah sekolah dwitrek — ditukar kepada Tawaran Balas O-Level dan bukan tempat IP. Jadi tawaran itu melindungi anak anda daripada tekanan potongan, bukan daripada standard minimum. Semak keperluan Posting Group khusus setiap sekolah sebelum menerima, dan kekalkan persediaan PSLE betul-betul sehingga peperiksaan.",
      ta: "ஆம் — DSA சலுகை நிபந்தனைக்குட்பட்டது, எனவே உங்கள் குழந்தை அதை ஏற்ற பிறகும் PSLE முடிவுகள் முக்கியம். உங்கள் குழந்தை PSLE எழுத வேண்டும், அவர்கள் சேர்க்கப்பட்ட பாடத்திற்கான குறைந்தபட்ச Posting Group-ஐக் கடக்க வேண்டும். பெரும்பாலான Express மற்றும் Integrated Programme (IP) இடங்களுக்கு அது AL மொத்தம் 22 அல்லது சிறந்தது. முடிவு அந்தத் தளத்தைக் கடந்தால், இடம் உறுதிசெய்யப்பட்டு, பள்ளியின் வழக்கமான வெட்டுப்புள்ளியைப் பொருட்படுத்தாமல் குழந்தை அங்கு சேர்க்கப்படுகிறார். குறைந்தால், சலுகை திரும்பப் பெறப்படலாம், அல்லது சில இரட்டை-பாதைப் பள்ளிகளில் IP இடத்திற்குப் பதிலாக O-Level Counter-Offer ஆக மாற்றப்படலாம். எனவே இந்த சலுகை வெட்டுப்புள்ளி அழுத்தத்திலிருந்து உங்கள் குழந்தையைப் பாதுகாக்கிறது, குறைந்தபட்சத் தரத்திலிருந்து அல்ல. ஏற்கும் முன் ஒவ்வொரு பள்ளியின் குறிப்பிட்ட Posting Group தேவையைச் சரிபார்த்து, தேர்வு வரை PSLE தயாரிப்பைச் சரியாக வைத்திருங்கள்.",
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
