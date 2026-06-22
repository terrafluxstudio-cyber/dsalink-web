"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n";
import { Frag, type Seg } from "@/components/legal/segments";

type PrivacyCopy = {
  h1: string;
  lastUpdated: string;
  intro: string;
  collectH2: string;
  collectList: Seg[][];
  useH2: string;
  useP: Seg[];
  analyticsH2: string;
  analyticsP: string;
  providersH2: string;
  providersP: string;
  retentionH2: string;
  retentionList: Seg[][];
  contactH2: string;
  contactP: Seg[];
  disclaimer: string;
};

const COPY: Record<Locale, PrivacyCopy> = {
  en: {
    h1: "Privacy Policy",
    lastUpdated: "Last updated: 21 June 2026",
    intro:
      "DSALink (operated by Terraflux Studio) respects your privacy. This page explains what we collect, why, and the choices you have. It is written to align with Singapore's Personal Data Protection Act (PDPA).",
    collectH2: "What we collect",
    collectList: [
      [{ b: "Email address" }, " — only if you choose to give it (for example, to receive your DSA Finder results or DSA updates)."],
      [{ b: "Information you submit" }, " — such as the preferences you enter into the DSA Finder, used to generate your results."],
      [{ b: "Usage data" }, " — standard, aggregated analytics about how pages are used (see Analytics below). We do not collect names, NRIC, addresses, or payment details."],
    ],
    useH2: "How we use it",
    useP: [
      "We use the email you provide to send the resources or updates you asked for, and we use submitted preferences to produce your DSA Finder results. We use aggregated usage data to understand what is helpful and improve the site. ",
      { b: "We do not sell or rent your personal data, and we do not share it for third-party advertising." },
    ],
    analyticsH2: "Analytics and cookies",
    analyticsP:
      "We use Google Analytics (GA4) to measure aggregate site usage. It sets cookies and collects standard technical information such as approximate location, device, and pages viewed. You can block cookies in your browser settings without losing access to the site's content.",
    providersH2: "Service providers",
    providersP:
      "We rely on a small number of trusted providers to run the site: Vercel (hosting and data storage), Google Analytics (usage measurement), and Resend (sending the emails you request). These providers process data only to deliver their service to us.",
    retentionH2: "Retention and your choices",
    retentionList: [
      ["We keep your email only as long as needed for the purpose you gave it, or until you ask us to remove it."],
      [{ b: "Unsubscribe" }, " any time by replying “unsubscribe” to any email from us."],
      [{ b: "Access or delete your data" }, " — email us and we will action it."],
    ],
    contactH2: "Contact",
    contactP: [
      "For any privacy request or question: ",
      { t: "hello@dsalink.sg", href: "mailto:hello@dsalink.sg" },
      ". Learn more ",
      { t: "about DSALink", href: "/about" },
      ".",
    ],
    disclaimer:
      "DSALink is an independent resource and is not affiliated with or endorsed by MOE Singapore or any school.",
  },
  zh: {
    h1: "隐私政策",
    lastUpdated: "最后更新：2026 年 6 月 21 日",
    intro:
      "DSALink（由 Terraflux Studio 运营）尊重你的隐私。本页说明我们收集哪些信息、为何收集，以及你拥有的选择。本政策依据新加坡《个人资料保护法》（PDPA）撰写。",
    collectH2: "我们收集什么",
    collectList: [
      [{ b: "电邮地址" }, "——仅在你主动提供时收集（例如，用于接收你的 DSA Finder 结果或 DSA 更新）。"],
      [{ b: "你提交的信息" }, "——例如你在 DSA Finder 中输入的偏好，用于生成你的结果。"],
      [{ b: "使用数据" }, "——关于页面如何被使用的标准、汇总分析（见下方「分析与 Cookie」）。我们不收集姓名、身份证号、住址或付款信息。"],
    ],
    useH2: "我们如何使用",
    useP: [
      "我们用你提供的电邮，发送你所要求的资源或更新；用你提交的偏好生成你的 DSA Finder 结果。我们用汇总的使用数据来了解哪些内容有帮助，并改进网站。",
      { b: "我们不出售或出租你的个人资料，也不会为第三方广告而分享。" },
    ],
    analyticsH2: "分析与 Cookie",
    analyticsP:
      "我们使用 Google Analytics（GA4）来衡量网站的整体使用情况。它会设置 Cookie，并收集大致位置、设备、浏览页面等标准技术信息。你可以在浏览器设置中阻止 Cookie，这不会影响你浏览本站内容。",
    providersH2: "服务提供商",
    providersP:
      "我们依靠少数几家可信的服务商来运营网站：Vercel（托管与数据存储）、Google Analytics（使用情况衡量）和 Resend（发送你所要求的电邮）。这些服务商仅为向我们提供服务而处理数据。",
    retentionH2: "数据保留与你的选择",
    retentionList: [
      ["我们仅在你提供电邮的用途所需期间保留它，或直到你要求我们删除为止。"],
      [{ b: "退订" }, "：随时回复我们的任一封电邮，注明「unsubscribe」即可。"],
      [{ b: "查阅或删除你的数据" }, "——发电邮给我们，我们会处理。"],
    ],
    contactH2: "联系我们",
    contactP: [
      "如有任何隐私请求或疑问：",
      { t: "hello@dsalink.sg", href: "mailto:hello@dsalink.sg" },
      "。进一步",
      { t: "了解 DSALink", href: "/about" },
      "。",
    ],
    disclaimer:
      "DSALink 是独立资源，与新加坡教育部或任何学校均无隶属或背书关系。",
  },
  ms: {
    h1: "Dasar Privasi",
    lastUpdated: "Kemas kini terakhir: 21 Jun 2026",
    intro:
      "DSALink (dikendalikan oleh Terraflux Studio) menghormati privasi anda. Halaman ini menerangkan apa yang kami kumpulkan, mengapa, dan pilihan yang anda ada. Ia ditulis selaras dengan Akta Perlindungan Data Peribadi (PDPA) Singapura.",
    collectH2: "Apa yang kami kumpulkan",
    collectList: [
      [{ b: "Alamat e-mel" }, " — hanya jika anda memilih untuk memberikannya (contohnya, untuk menerima keputusan DSA Finder atau kemas kini DSA anda)."],
      [{ b: "Maklumat yang anda hantar" }, " — seperti pilihan yang anda masukkan ke dalam DSA Finder, digunakan untuk menjana keputusan anda."],
      [{ b: "Data penggunaan" }, " — analitik standard dan teragregat tentang cara halaman digunakan (lihat Analitik di bawah). Kami tidak mengumpul nama, NRIC, alamat, atau butiran pembayaran."],
    ],
    useH2: "Cara kami menggunakannya",
    useP: [
      "Kami menggunakan e-mel yang anda berikan untuk menghantar sumber atau kemas kini yang anda minta, dan kami menggunakan pilihan yang dihantar untuk menghasilkan keputusan DSA Finder anda. Kami menggunakan data penggunaan teragregat untuk memahami apa yang berguna dan menambah baik laman ini. ",
      { b: "Kami tidak menjual atau menyewakan data peribadi anda, dan kami tidak berkongsinya untuk pengiklanan pihak ketiga." },
    ],
    analyticsH2: "Analitik dan kuki",
    analyticsP:
      "Kami menggunakan Google Analytics (GA4) untuk mengukur penggunaan laman secara agregat. Ia menetapkan kuki dan mengumpul maklumat teknikal standard seperti lokasi anggaran, peranti, dan halaman yang dilihat. Anda boleh menyekat kuki dalam tetapan pelayar tanpa kehilangan akses kepada kandungan laman ini.",
    providersH2: "Penyedia perkhidmatan",
    providersP:
      "Kami bergantung pada beberapa penyedia yang dipercayai untuk mengendalikan laman ini: Vercel (pengehosan dan penyimpanan data), Google Analytics (pengukuran penggunaan), dan Resend (menghantar e-mel yang anda minta). Penyedia ini memproses data hanya untuk menyampaikan perkhidmatan mereka kepada kami.",
    retentionH2: "Pengekalan dan pilihan anda",
    retentionList: [
      ["Kami menyimpan e-mel anda hanya selama yang diperlukan untuk tujuan yang anda berikan, atau sehingga anda meminta kami mengeluarkannya."],
      [{ b: "Berhenti melanggan" }, " pada bila-bila masa dengan membalas “unsubscribe” kepada mana-mana e-mel daripada kami."],
      [{ b: "Akses atau padam data anda" }, " — e-mel kami dan kami akan menguruskannya."],
    ],
    contactH2: "Hubungi kami",
    contactP: [
      "Untuk sebarang permintaan atau soalan privasi: ",
      { t: "hello@dsalink.sg", href: "mailto:hello@dsalink.sg" },
      ". Ketahui lebih lanjut ",
      { t: "tentang DSALink", href: "/about" },
      ".",
    ],
    disclaimer:
      "DSALink ialah sumber bebas dan tidak bergabung dengan atau disokong oleh MOE Singapura atau mana-mana sekolah.",
  },
  ta: {
    h1: "தனியுரிமைக் கொள்கை",
    lastUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது: 21 ஜூன் 2026",
    intro:
      "DSALink (Terraflux Studio ஆல் இயக்கப்படுகிறது) உங்கள் தனியுரிமையை மதிக்கிறது. நாங்கள் எதைச் சேகரிக்கிறோம், ஏன், உங்களுக்கு என்ன தேர்வுகள் உள்ளன என்பதை இந்தப் பக்கம் விளக்குகிறது. இது சிங்கப்பூரின் தனிப்பட்ட தரவு பாதுகாப்புச் சட்டத்திற்கு (PDPA) இணங்க எழுதப்பட்டுள்ளது.",
    collectH2: "நாங்கள் எதைச் சேகரிக்கிறோம்",
    collectList: [
      [{ b: "மின்னஞ்சல் முகவரி" }, " — நீங்கள் வழங்கத் தேர்வுசெய்தால் மட்டுமே (எடுத்துக்காட்டாக, உங்கள் DSA Finder முடிவுகள் அல்லது DSA புதுப்பிப்புகளைப் பெற)."],
      [{ b: "நீங்கள் சமர்ப்பிக்கும் தகவல்" }, " — DSA Finder-இல் நீங்கள் உள்ளிடும் விருப்பங்கள் போன்றவை, உங்கள் முடிவுகளை உருவாக்கப் பயன்படுகின்றன."],
      [{ b: "பயன்பாட்டுத் தரவு" }, " — பக்கங்கள் எவ்வாறு பயன்படுத்தப்படுகின்றன என்பதைப் பற்றிய நிலையான, தொகுக்கப்பட்ட பகுப்பாய்வு (கீழே பகுப்பாய்வைப் பார்க்கவும்). பெயர்கள், NRIC, முகவரிகள், அல்லது கட்டண விவரங்களை நாங்கள் சேகரிப்பதில்லை."],
    ],
    useH2: "நாங்கள் அதை எவ்வாறு பயன்படுத்துகிறோம்",
    useP: [
      "நீங்கள் கேட்ட வளங்கள் அல்லது புதுப்பிப்புகளை அனுப்ப நீங்கள் வழங்கிய மின்னஞ்சலைப் பயன்படுத்துகிறோம்; உங்கள் DSA Finder முடிவுகளை உருவாக்க நீங்கள் சமர்ப்பித்த விருப்பங்களைப் பயன்படுத்துகிறோம். எது உதவிகரமானது என்பதைப் புரிந்துகொண்டு தளத்தை மேம்படுத்த தொகுக்கப்பட்ட பயன்பாட்டுத் தரவைப் பயன்படுத்துகிறோம். ",
      { b: "உங்கள் தனிப்பட்ட தரவை நாங்கள் விற்பதோ வாடகைக்கு விடுவதோ இல்லை; மூன்றாம் தரப்பு விளம்பரத்திற்காக அதைப் பகிர்வதும் இல்லை." },
    ],
    analyticsH2: "பகுப்பாய்வும் குக்கீகளும்",
    analyticsP:
      "தளப் பயன்பாட்டை மொத்தமாக அளவிட Google Analytics (GA4) ஐப் பயன்படுத்துகிறோம். இது குக்கீகளை அமைத்து, தோராயமான இருப்பிடம், சாதனம், பார்க்கப்பட்ட பக்கங்கள் போன்ற நிலையான தொழில்நுட்பத் தகவல்களைச் சேகரிக்கிறது. தளத்தின் உள்ளடக்கத்திற்கான அணுகலை இழக்காமல், உங்கள் உலாவி அமைப்புகளில் குக்கீகளைத் தடுக்கலாம்.",
    providersH2: "சேவை வழங்குநர்கள்",
    providersP:
      "தளத்தை இயக்க சில நம்பகமான வழங்குநர்களை நம்பியுள்ளோம்: Vercel (ஹோஸ்டிங் மற்றும் தரவுச் சேமிப்பு), Google Analytics (பயன்பாட்டு அளவீடு), மற்றும் Resend (நீங்கள் கோரும் மின்னஞ்சல்களை அனுப்புதல்). இந்த வழங்குநர்கள் தங்கள் சேவையை எங்களுக்கு வழங்குவதற்காக மட்டுமே தரவைச் செயலாக்குகின்றனர்.",
    retentionH2: "தக்கவைப்பும் உங்கள் தேர்வுகளும்",
    retentionList: [
      ["நீங்கள் வழங்கிய நோக்கத்திற்குத் தேவையான காலம் வரை, அல்லது அதை அகற்றும்படி நீங்கள் கேட்கும் வரை மட்டுமே உங்கள் மின்னஞ்சலை வைத்திருக்கிறோம்."],
      [{ b: "குழுவிலகுதல்" }, " — எங்களிடமிருந்து வரும் எந்த மின்னஞ்சலுக்கும் “unsubscribe” என்று பதிலளித்து எந்த நேரத்திலும் செய்யலாம்."],
      [{ b: "உங்கள் தரவை அணுகவும் அல்லது நீக்கவும்" }, " — எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள், நாங்கள் அதைச் செயல்படுத்துவோம்."],
    ],
    contactH2: "தொடர்பு கொள்ள",
    contactP: [
      "எந்தவொரு தனியுரிமைக் கோரிக்கை அல்லது கேள்விக்கும்: ",
      { t: "hello@dsalink.sg", href: "mailto:hello@dsalink.sg" },
      ". DSALink ",
      { t: "பற்றி மேலும் அறிக", href: "/about" },
      ".",
    ],
    disclaimer:
      "DSALink ஒரு சுயாதீன வளமாகும்; சிங்கப்பூர் MOE அல்லது எந்தப் பள்ளியுடனும் இணைக்கப்படவில்லை அல்லது அங்கீகரிக்கப்படவில்லை.",
  },
};

export function PrivacyContent() {
  const { locale } = useLanguage();
  const c = COPY[locale] ?? COPY.en;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl font-bold text-intellectual sm:text-4xl normal-case">
        {c.h1}
      </h1>
      <p className="mt-2 text-sm text-slate-500">{c.lastUpdated}</p>
      <p className="mt-4 text-base leading-relaxed text-slate-700">{c.intro}</p>

      <section className="mt-10 space-y-3">
        <h2 className="font-display text-xl font-semibold text-intellectual normal-case">{c.collectH2}</h2>
        <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
          {c.collectList.map((segs, i) => (
            <li key={i}>
              <Frag segs={segs} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-display text-xl font-semibold text-intellectual normal-case">{c.useH2}</h2>
        <p className="text-base leading-relaxed text-slate-700">
          <Frag segs={c.useP} />
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-display text-xl font-semibold text-intellectual normal-case">{c.analyticsH2}</h2>
        <p className="text-base leading-relaxed text-slate-700">{c.analyticsP}</p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-display text-xl font-semibold text-intellectual normal-case">{c.providersH2}</h2>
        <p className="text-base leading-relaxed text-slate-700">{c.providersP}</p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-display text-xl font-semibold text-intellectual normal-case">{c.retentionH2}</h2>
        <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
          {c.retentionList.map((segs, i) => (
            <li key={i}>
              <Frag segs={segs} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-display text-xl font-semibold text-intellectual normal-case">{c.contactH2}</h2>
        <p className="text-base leading-relaxed text-slate-700">
          <Frag segs={c.contactP} />
        </p>
        <p className="text-[11px] text-slate-400">{c.disclaimer}</p>
      </section>
    </div>
  );
}
