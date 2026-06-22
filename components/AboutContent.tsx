"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n";
import { Frag, type Seg } from "@/components/legal/segments";

type AboutCopy = {
  h1: string;
  intro: string;
  whyH2: string;
  whyP: string;
  findH2: string;
  findList: Seg[][];
  dataH2: string;
  dataP1: string;
  dataP2: string;
  indepH2: string;
  indepP: string;
  contactH2: string;
  contactP: Seg[];
};

const COPY: Record<Locale, AboutCopy> = {
  en: {
    h1: "About DSALink",
    intro:
      "DSALink is a free, independent resource that helps Singapore parents understand Direct School Admission to Secondary school (DSA-Sec) and act on it before the deadline. It is built and maintained by Terraflux Studio.",
    whyH2: "Why we built it",
    whyP:
      "Many capable Primary 6 children never try for DSA because their families assume it is only for elite athletes or prodigies. It is not. DSALink exists for the ordinary neighbourhood-school parent who has barely heard of DSA — to make the process clear, honest, and possible to act on in the weeks that matter. Everything is available in English, 中文, Bahasa Melayu, and Tamil.",
    findH2: "What you'll find here",
    findList: [
      [{ t: "What DSA is", href: "/what-is-dsa" }, " and how it works alongside the PSLE"],
      ["A ", { t: "directory of all 147 secondary schools", href: "/schools" }, " with their DSA talent areas and programmes"],
      ["The ", { t: "DSA Finder", href: "/dsa-finder" }, " tool and ", { t: "compiled DSA statistics", href: "/dsa-statistics" }],
      [{ t: "Interview and trial preparation", href: "/dsa-interview" }, " by talent area"],
      ["An ", { t: "open-house guide", href: "/open-house-guide" }, ", ", { t: "PSLE cut-off history", href: "/psle-cop" }, ", and a regularly updated ", { t: "blog", href: "/blog" }],
    ],
    dataH2: "How we compile our data",
    dataP1:
      "Our school and talent-area data is compiled from the official MOE SchoolFinder listings and each school's own published information, then organised so parents can compare options in one place. Figures reflect the current DSA exercise and are dated so you can see how recent they are. School listings can change — always confirm specifics on the school's official website before deciding.",
    dataP2:
      "Where we publish parent “experience” examples, these are composite stories drawn from common patterns, not records of specific real families — names, scores, and identifying details are changed.",
    indepH2: "Independence and accuracy",
    indepP:
      "DSALink is not affiliated with, endorsed by, or operated by the Ministry of Education (MOE) or any school. For official information, always refer to MOE and the individual schools. We take accuracy seriously — if you spot something wrong or out of date, please tell us and we'll fix it.",
    contactH2: "Contact",
    contactP: [
      "Questions, corrections, or feedback: ",
      { t: "hello@dsalink.sg", href: "mailto:hello@dsalink.sg" },
      ". See also our ",
      { t: "privacy policy", href: "/privacy" },
      ".",
    ],
  },
  zh: {
    h1: "关于 DSALink",
    intro:
      "DSALink 是一个免费、独立的资源平台，帮助新加坡家长了解中学直接收生计划（DSA-Sec），并在截止日前及时行动。本站由 Terraflux Studio 建立与维护。",
    whyH2: "我们为什么做这个网站",
    whyP:
      "许多有能力的小六孩子从未尝试 DSA，只因家长以为它只属于顶尖运动员或天才。事实并非如此。DSALink 是为几乎没听说过 DSA 的普通邻里学校家长而设——把流程讲清楚、讲实在，让你在关键的几周里能真正行动起来。所有内容都提供英文、中文、马来文和淡米尔文版本。",
    findH2: "你能在这里找到什么",
    findList: [
      [{ t: "DSA 是什么", href: "/what-is-dsa" }, "，以及它如何与 PSLE 并行"],
      ["一份", { t: "全部 147 所中学的名录", href: "/schools" }, "，含各校 DSA 才艺方向与课程"],
      [{ t: "DSA Finder", href: "/dsa-finder" }, " 工具，以及", { t: "整理好的 DSA 数据", href: "/dsa-statistics" }],
      [{ t: "面试与选拔准备", href: "/dsa-interview" }, "，按才艺方向分类"],
      ["一份", { t: "开放日指南", href: "/open-house-guide" }, "、", { t: "PSLE 截分历史", href: "/psle-cop" }, "，以及定期更新的", { t: "博客", href: "/blog" }],
    ],
    dataH2: "我们如何整理数据",
    dataP1:
      "我们的学校与才艺方向数据，整理自教育部官方 SchoolFinder 名录及各校公开发布的信息，再加以归类，方便家长在同一处比较各项选择。数据反映当前一届 DSA，并标注日期，让你看清更新时间。学校信息可能变动——做决定前请务必在学校官网核实细节。",
    dataP2:
      "凡是我们发布的家长「经历」示例，都是根据常见模式综合编写的故事，并非特定真实家庭的记录——姓名、分数及可识别细节均已更改。",
    indepH2: "独立性与准确性",
    indepP:
      "DSALink 与教育部（MOE）或任何学校均无隶属、背书或运营关系。官方信息请始终以教育部及各校为准。我们认真对待准确性——若你发现任何错误或过时之处，请告诉我们，我们会尽快更正。",
    contactH2: "联系我们",
    contactP: [
      "如有疑问、更正或反馈：",
      { t: "hello@dsalink.sg", href: "mailto:hello@dsalink.sg" },
      "。另见我们的",
      { t: "隐私政策", href: "/privacy" },
      "。",
    ],
  },
  ms: {
    h1: "Tentang DSALink",
    intro:
      "DSALink ialah sumber percuma dan bebas yang membantu ibu bapa di Singapura memahami Kemasukan Sekolah Langsung ke sekolah menengah (DSA-Sec) dan bertindak sebelum tarikh tutup. Ia dibina dan diselenggara oleh Terraflux Studio.",
    whyH2: "Mengapa kami membinanya",
    whyP:
      "Ramai kanak-kanak Darjah 6 yang berkebolehan tidak pernah mencuba DSA kerana keluarga menyangka ia hanya untuk atlet terbaik atau anak pintar luar biasa. Sebenarnya tidak. DSALink wujud untuk ibu bapa sekolah kejiranan biasa yang hampir tidak pernah mendengar tentang DSA — untuk menjadikan prosesnya jelas, jujur, dan boleh diambil tindakan dalam minggu-minggu yang penting. Semuanya tersedia dalam bahasa Inggeris, Cina, Melayu, dan Tamil.",
    findH2: "Apa yang anda akan temui di sini",
    findList: [
      [{ t: "Apa itu DSA", href: "/what-is-dsa" }, " dan cara ia berfungsi bersama PSLE"],
      ["Sebuah ", { t: "direktori kesemua 147 sekolah menengah", href: "/schools" }, " dengan bidang bakat DSA dan programnya"],
      ["Alat ", { t: "DSA Finder", href: "/dsa-finder" }, " dan ", { t: "statistik DSA yang disusun", href: "/dsa-statistics" }],
      [{ t: "Persediaan temu duga dan ujian", href: "/dsa-interview" }, " mengikut bidang bakat"],
      ["Sebuah ", { t: "panduan hari terbuka", href: "/open-house-guide" }, ", ", { t: "sejarah mata potong PSLE", href: "/psle-cop" }, ", dan ", { t: "blog", href: "/blog" }, " yang dikemas kini secara berkala"],
    ],
    dataH2: "Cara kami menyusun data",
    dataP1:
      "Data sekolah dan bidang bakat kami disusun daripada senarai rasmi MOE SchoolFinder dan maklumat yang diterbitkan oleh setiap sekolah, kemudian disusun supaya ibu bapa boleh membandingkan pilihan di satu tempat. Angka-angka mencerminkan latihan DSA semasa dan ditandakan tarikh supaya anda dapat melihat sejauh mana terkininya. Senarai sekolah boleh berubah — sentiasa sahkan butirannya di laman web rasmi sekolah sebelum membuat keputusan.",
    dataP2:
      "Apabila kami menerbitkan contoh “pengalaman” ibu bapa, ia adalah cerita gabungan yang diambil daripada corak biasa, bukan rekod keluarga sebenar tertentu — nama, markah, dan butiran pengenalan telah diubah.",
    indepH2: "Kebebasan dan ketepatan",
    indepP:
      "DSALink tidak bergabung, disokong, atau dikendalikan oleh Kementerian Pendidikan (MOE) atau mana-mana sekolah. Untuk maklumat rasmi, sentiasa rujuk MOE dan sekolah masing-masing. Kami mengambil berat tentang ketepatan — jika anda terjumpa sesuatu yang salah atau lapuk, beritahu kami dan kami akan membetulkannya.",
    contactH2: "Hubungi kami",
    contactP: [
      "Soalan, pembetulan, atau maklum balas: ",
      { t: "hello@dsalink.sg", href: "mailto:hello@dsalink.sg" },
      ". Lihat juga ",
      { t: "dasar privasi", href: "/privacy" },
      " kami.",
    ],
  },
  ta: {
    h1: "DSALink பற்றி",
    intro:
      "DSALink என்பது சிங்கப்பூர் பெற்றோர் இடைநிலைப் பள்ளிக்கான நேரடிப் பள்ளி சேர்க்கையை (DSA-Sec) புரிந்துகொண்டு, காலக்கெடுவுக்கு முன் நடவடிக்கை எடுக்க உதவும் இலவச, சுயாதீன வளமாகும். இது Terraflux Studio ஆல் உருவாக்கப்பட்டு பராமரிக்கப்படுகிறது.",
    whyH2: "நாங்கள் ஏன் இதை உருவாக்கினோம்",
    whyP:
      "திறமையான பல ஆறாம் வகுப்பு மாணவர்கள், DSA என்பது சிறந்த விளையாட்டு வீரர்களுக்கும் அசாதாரண திறமைசாலிகளுக்கும் மட்டுமே என்று குடும்பங்கள் கருதுவதால், அதை முயற்சிப்பதே இல்லை. உண்மையில் அப்படி இல்லை. DSA பற்றி அரிதாகவே கேள்விப்பட்ட சாதாரண அண்டை பள்ளி பெற்றோருக்காக DSALink உருவாக்கப்பட்டுள்ளது — செயல்முறையைத் தெளிவாகவும், நேர்மையாகவும், முக்கியமான வாரங்களில் நடவடிக்கை எடுக்கக்கூடியதாகவும் மாற்றுவதற்காக. அனைத்தும் ஆங்கிலம், சீனம், மலாய், தமிழ் ஆகிய மொழிகளில் கிடைக்கின்றன.",
    findH2: "இங்கே நீங்கள் என்ன காண்பீர்கள்",
    findList: [
      [{ t: "DSA என்றால் என்ன", href: "/what-is-dsa" }, " என்பதும், அது PSLE உடன் எவ்வாறு இணைந்து செயல்படுகிறது என்பதும்"],
      [{ t: "அனைத்து 147 இடைநிலைப் பள்ளிகளின் பட்டியல்", href: "/schools" }, " — அவற்றின் DSA திறமைத் துறைகள் மற்றும் திட்டங்களுடன்"],
      [{ t: "DSA Finder", href: "/dsa-finder" }, " கருவி மற்றும் ", { t: "தொகுக்கப்பட்ட DSA புள்ளிவிவரங்கள்", href: "/dsa-statistics" }],
      [{ t: "நேர்காணல் மற்றும் தேர்வுத் தயாரிப்பு", href: "/dsa-interview" }, ", திறமைத் துறை வாரியாக"],
      [{ t: "திறந்த நாள் வழிகாட்டி", href: "/open-house-guide" }, ", ", { t: "PSLE வெட்டுப்புள்ளி வரலாறு", href: "/psle-cop" }, ", மற்றும் தொடர்ந்து புதுப்பிக்கப்படும் ", { t: "வலைப்பதிவு", href: "/blog" }],
    ],
    dataH2: "நாங்கள் தரவை எவ்வாறு தொகுக்கிறோம்",
    dataP1:
      "எங்கள் பள்ளி மற்றும் திறமைத் துறை தரவு, அதிகாரப்பூர்வ MOE SchoolFinder பட்டியல்களிலிருந்தும் ஒவ்வொரு பள்ளியும் வெளியிட்ட தகவலிலிருந்தும் தொகுக்கப்பட்டு, பெற்றோர் ஒரே இடத்தில் விருப்பங்களை ஒப்பிட்டுப் பார்க்கும் வகையில் ஒழுங்கமைக்கப்பட்டுள்ளது. எண்கள் தற்போதைய DSA முயற்சியைப் பிரதிபலிக்கின்றன, மேலும் அவை எவ்வளவு சமீபத்தியவை என்பதை நீங்கள் பார்க்கும் வகையில் தேதியிடப்பட்டுள்ளன. பள்ளிப் பட்டியல்கள் மாறலாம் — முடிவெடுக்கும் முன் பள்ளியின் அதிகாரப்பூர்வ வலைத்தளத்தில் விவரங்களை எப்போதும் உறுதிப்படுத்திக் கொள்ளுங்கள்.",
    dataP2:
      "பெற்றோரின் “அனுபவ” எடுத்துக்காட்டுகளை நாங்கள் வெளியிடும்போது, அவை பொதுவான வடிவங்களிலிருந்து உருவாக்கப்பட்ட கூட்டுக் கதைகளே தவிர, குறிப்பிட்ட உண்மையான குடும்பங்களின் பதிவுகள் அல்ல — பெயர்கள், மதிப்பெண்கள், அடையாளம் காட்டும் விவரங்கள் மாற்றப்பட்டுள்ளன.",
    indepH2: "சுயாதீனமும் துல்லியமும்",
    indepP:
      "DSALink, கல்வி அமைச்சகத்துடன் (MOE) அல்லது எந்தப் பள்ளியுடனும் இணைக்கப்படவில்லை, அங்கீகரிக்கப்படவில்லை, அல்லது இயக்கப்படவில்லை. அதிகாரப்பூர்வ தகவலுக்கு எப்போதும் MOE மற்றும் அந்தந்தப் பள்ளிகளையே நம்புங்கள். துல்லியத்தை நாங்கள் தீவிரமாக எடுத்துக்கொள்கிறோம் — தவறான அல்லது காலாவதியான ஏதேனும் உங்கள் கண்ணில் பட்டால், எங்களிடம் தெரிவியுங்கள், நாங்கள் சரிசெய்வோம்.",
    contactH2: "தொடர்பு கொள்ள",
    contactP: [
      "கேள்விகள், திருத்தங்கள், அல்லது கருத்துகள்: ",
      { t: "hello@dsalink.sg", href: "mailto:hello@dsalink.sg" },
      ". எங்கள் ",
      { t: "தனியுரிமைக் கொள்கையையும்", href: "/privacy" },
      " பார்க்கவும்.",
    ],
  },
};

export function AboutContent() {
  const { locale } = useLanguage();
  const c = COPY[locale] ?? COPY.en;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl font-bold text-intellectual sm:text-4xl normal-case">
        {c.h1}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-700">{c.intro}</p>

      <section className="mt-10 space-y-3">
        <h2 className="font-display text-xl font-semibold text-intellectual normal-case">{c.whyH2}</h2>
        <p className="text-base leading-relaxed text-slate-700">{c.whyP}</p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-display text-xl font-semibold text-intellectual normal-case">{c.findH2}</h2>
        <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
          {c.findList.map((segs, i) => (
            <li key={i}>
              <Frag segs={segs} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-display text-xl font-semibold text-intellectual normal-case">{c.dataH2}</h2>
        <p className="text-base leading-relaxed text-slate-700">{c.dataP1}</p>
        <p className="text-base leading-relaxed text-slate-700">{c.dataP2}</p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-display text-xl font-semibold text-intellectual normal-case">{c.indepH2}</h2>
        <p className="text-base leading-relaxed text-slate-700">{c.indepP}</p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-display text-xl font-semibold text-intellectual normal-case">{c.contactH2}</h2>
        <p className="text-base leading-relaxed text-slate-700">
          <Frag segs={c.contactP} />
        </p>
      </section>
    </div>
  );
}
