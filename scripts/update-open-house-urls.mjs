/**
 * One-shot script: applies researched open-house / DSA URL corrections to
 * lib/school-open-houses.ts. Run once, then delete.
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "../lib/school-open-houses.ts");

// Map of school id → { sourceUrl, isHomepageOnly? }
// TYPE key is informational only (not written to file)
const UPDATES = {
  "anderson-secondary-school": {
    sourceUrl: "https://andersonsec.moe.edu.sg/anderson-experience/direct-school-admission",
  },
  "ang-mo-kio-secondary-school": {
    sourceUrl: "https://www.angmokiosec.moe.edu.sg/open-house/",
  },
  "anglo-chinese-school": {
    // ACS Barker Road
    sourceUrl: "https://sites.google.com/moe.edu.sg/acsbr-cca/direct-school-admission-dsa-2026",
  },
  "assumption-english-school": {
    sourceUrl: "https://www.assumptionenglish.moe.edu.sg/others/direct-school-admission-dsa/",
  },
  "assumption-pathway-school": {
    sourceUrl: "https://assumptionpathway.edu.sg/admission/",
  },
  "bartley-secondary-school": {
    sourceUrl: "https://www.bartleysec.moe.edu.sg/our-school-programmes/direct-school-admission/direct-school-admission/",
  },
  "beatty-secondary-school": {
    sourceUrl: "https://www.beattysec.moe.edu.sg/prospective-students/open-house/",
  },
  "bedok-south-secondary-school": {
    sourceUrl: "https://bedoksouthsec.moe.edu.sg/about-us/admissions/",
  },
  "bedok-view-secondary-school": {
    sourceUrl: "https://www.bedokviewsec.moe.edu.sg/join-us/direct-school-admission-dsa/",
  },
  "bendemeer-secondary-school": {
    sourceUrl: "https://www.bendemeersec.moe.edu.sg/direct-school-admission-exercise-2026/",
  },
  "boon-lay-secondary-school": {
    sourceUrl: "https://www.boonlaysec.moe.edu.sg/other-links/dsa/",
  },
  "bowen-secondary-school": {
    sourceUrl: "https://www.bowensec.moe.edu.sg/signature-programmes/direct-school-admission-1/",
  },
  "broadrick-secondary-school": {
    sourceUrl: "https://www.broadricksec.moe.edu.sg/distinctive-programmes/direct-school-admission/",
  },
  "bukit-merah-secondary-school": {
    sourceUrl: "https://go.gov.sg/bmssdsa",
  },
  "bukit-panjang-govt-high-school": {
    sourceUrl: "https://www.bpghs.moe.edu.sg/dsa-2026/",
  },
  "bukit-view-secondary-school": {
    sourceUrl: "https://www.bukitviewsec.moe.edu.sg/admissions/dsa/",
  },
  "changkat-changi-secondary-school": {
    sourceUrl: "https://www.changkatchangisec.moe.edu.sg/experience-at-changkat/Open-House/",
  },
  "chij-katong-convent": {
    sourceUrl: "https://for.edu.sg/chijkc-eopenhouse2026",
  },
  "chij-secondary-toa-payoh": {
    sourceUrl: "https://www.chijsec.edu.sg/resources/parents/dsa-application/",
  },
  "chij-st-josephs-convent": {
    sourceUrl: "https://chijsjc.moe.edu.sg/chij-sjc-dsa-2026/",
  },
  "chij-st-theresas-convent": {
    sourceUrl: "https://www.chijstc.sg/open-house",
  },
  "christ-church-secondary-school": {
    sourceUrl: "https://christchurchsec.moe.edu.sg/open-house/",
  },
  "chua-chu-kang-secondary-school": {
    sourceUrl: "https://chuachukangsec.moe.edu.sg/learning-in-cckss/direct-school-admission-application-2026/",
  },
  "chung-cheng-high-school-main": {
    sourceUrl: "https://chungchenghighschool.moe.edu.sg/direct-school-admission-dsa/",
  },
  "chung-cheng-high-school-yishun": {
    sourceUrl: "https://chungchenghighschool.moe.edu.sg/admission/direct-school-admission-dsa/dsa-sec/overview/",
  },
  "compassvale-secondary-school": {
    sourceUrl: "https://www.compassvalesec.moe.edu.sg/useful-info-and-links/2026-direct-school-admission-dsa-1/",
  },
  "crest-secondary-school": {
    sourceUrl: "https://sites.google.com/crestsec.edu.sg/crest-open-house/",
  },
  "damai-secondary-school": {
    sourceUrl: "https://damai.moe.edu.sg/e-open-house/",
  },
  "deyi-secondary-school": {
    sourceUrl: "https://www.deyisec.moe.edu.sg/useful-links/direct-school-admission-dsa/",
  },
  "dunearn-secondary-school": {
    sourceUrl: "https://dunearn.moe.edu.sg/school/direct-school-admission",
  },
  "dunman-secondary-school": {
    sourceUrl: "https://dunmansec.moe.edu.sg/direct-school-admissions-for-admission-in-2027/",
  },
  "east-spring-secondary-school": {
    sourceUrl: "https://eastspringsec.moe.edu.sg/information/dsa/",
  },
  "edgefield-secondary-school": {
    sourceUrl: "https://edgefieldsecondary.edu.sg/together/direct-school-admission-dsa/",
  },
  "evergreen-secondary-school": {
    sourceUrl: "https://www.evergreensec.moe.edu.sg/admission/dsa/",
  },
  "fuhua-secondary-school": {
    sourceUrl: "https://www.fuhuasec.moe.edu.sg/dsa-for-2027-secondary-1-cohort/",
  },
  "gan-eng-seng-school": {
    sourceUrl: "https://www.ganengsengsch.moe.edu.sg/school-information/school-admission/",
  },
  "geylang-methodist-school-secondary": {
    sourceUrl: "https://www.geylangmethodistsec.moe.edu.sg/2026-direct-school-admission/",
  },
  "greenridge-secondary-school": {
    sourceUrl: "https://www.greenridgesec.moe.edu.sg/admission/dsa/",
  },
  "guangyang-secondary-school": {
    sourceUrl: "https://www.guangyangsec.moe.edu.sg/admission/dsa/",
  },
  "hai-sing-catholic-school": {
    sourceUrl: "https://haisingcatholic.moe.edu.sg/join-hsc/permalink/",
  },
  "hillgrove-secondary-school": {
    sourceUrl: "https://sites.google.com/moe.edu.sg/hgv-openhouse",
  },
  "holy-innocents-high-school": {
    sourceUrl: "https://sites.google.com/hihs.edu.sg/hihs-dsa/",
  },
  "hua-yi-secondary-school": {
    sourceUrl: "https://www.huayisec.moe.edu.sg/happenings-at-hua-yi/Direct-School-Admission/intro/",
  },
  "hwa-chong-institution": {
    sourceUrl: "https://hci.edu.sg/experience-the-hwa-chong-spirit/",
  },
  "junyuan-secondary-school": {
    sourceUrl: "https://www.junyuansec.moe.edu.sg/school-programmes/direct-school-admission-dsa-sec/",
  },
  "jurong-secondary-school": {
    sourceUrl: "https://www.jurongsec.moe.edu.sg/our-experiences/dsa-admission-and-application/jss-dsa-info/",
  },
  "jurong-west-secondary-school": {
    sourceUrl: "https://www.jurongwestsec.moe.edu.sg/about-us/direct-school-admission-dsa/",
  },
  "jurongville-secondary-school": {
    sourceUrl: "https://www.jurongvillesec.moe.edu.sg/our-experience/open-house/open-house/",
  },
  "juying-secondary-school": {
    sourceUrl: "https://www.juyingsec.moe.edu.sg/key-information/direct-school-admission/",
  },
  "kent-ridge-secondary-school": {
    sourceUrl: "https://www.kentridgesec.moe.edu.sg/school-information/direct-school-admission-2026/",
  },
  "kranji-secondary-school": {
    sourceUrl: "https://www.kranjisec.moe.edu.sg/admissions/direct-school-admissions/",
  },
  "kuo-chuan-presbyterian-secondary-school": {
    sourceUrl: "https://www.kuochuanpresbyteriansec.moe.edu.sg/virtual-open-house",
  },
  "loyang-view-secondary-school": {
    sourceUrl: "https://loyangviewss.edu.sg/for-parents/dsasecexercise/",
  },
  "manjusri-secondary-school": {
    sourceUrl: "https://manjusrisecondaryschool.moe.edu.sg/discover-manjusri/direct-school-admission/introduction-to-dsa-sec-at-manjusri/",
  },
  "maris-stella-high-school": {
    sourceUrl: "https://maris-stella-high-school.edu.sg/admission/secondary/direct-school-admission-dsa/welcome/",
  },
  "meridian-secondary-school": {
    sourceUrl: "https://www.meridiansec.moe.edu.sg/student-information/dsa/",
  },
  "methodist-girls-school-secondary": {
    sourceUrl: "https://www.mgs.moe.edu.sg/news-and-events/mgsoh/",
  },
  "montfort-secondary-school": {
    sourceUrl: "https://montfortsecondaryschool.edu.sg/admission/dsa/",
  },
  "nan-chiau-high-school": {
    sourceUrl: "https://www.nanchiauhigh.moe.edu.sg/our-resources/Admission-to-NCHS/Direct-School-Admission-Exercise/",
  },
  "nan-hua-high-school": {
    sourceUrl: "https://nanhuahighschool.edu.sg/our-experience/programmes/direct-school-admission-dsa/",
  },
  "naval-base-secondary-school": {
    sourceUrl: "https://www.navalbasesec.moe.edu.sg/nbss-curriculum/dsa-at-nbss/",
  },
  "new-town-secondary-school": {
    sourceUrl: "https://www.newtownsec.moe.edu.sg/direct-school-admission-secondary-dsa-sec-exercise/",
  },
  "ngee-ann-secondary-school": {
    sourceUrl: "https://www.ngeeannsec.edu.sg/ngee-ann-experience/e-openhouse/",
  },
  "north-vista-secondary-school": {
    sourceUrl: "https://www.northvistasec.moe.edu.sg/howtoapply/",
  },
  "northbrooks-secondary-school": {
    sourceUrl: "https://northbrooksss.moe.edu.sg/admissions/dsa-at-northbrooks/",
  },
  "northland-secondary-school": {
    sourceUrl: "https://northland.moe.edu.sg/student-development-curriculum/direct-school-admission-dsa/welcome/",
  },
  "northlight-school": {
    sourceUrl: "https://www.nls.edu.sg/",
    isHomepageOnly: true,
  },
  "nus-high-school": {
    sourceUrl: "https://www.nushigh.edu.sg/",
    isHomepageOnly: true,
  },
  "orchid-park-secondary-school": {
    sourceUrl: "https://www.orchidparksec.moe.edu.sg/links/prospective/application-process/",
  },
  "outram-secondary-school": {
    sourceUrl: "https://sites.google.com/moe.edu.sg/ossopenhouse/home",
  },
  "pasir-ris-crest-secondary-school": {
    sourceUrl: "https://www.pasirriscrestsecsch.edu.sg/2026-direct-school-admission-dsa-exercise/",
  },
  "paya-lebar-methodist-girls-school-secondary": {
    sourceUrl: "https://www.plmgss.moe.edu.sg/dsa-information-session-online/",
  },
  "pei-hwa-secondary-school": {
    sourceUrl: "https://www.peihwasec.moe.edu.sg/uniquely-pei-hwa/direct-school-admission-dsa/direct-school-admission/",
  },
  "peicai-secondary-school": {
    sourceUrl: "https://peicaisecondary.edu.sg/direct-school-admissions-dsa/",
  },
  "peirce-secondary-school": {
    sourceUrl: "https://www.peircesec.moe.edu.sg/admissions/direct-school-admission-dsa/",
  },
  "punggol-secondary-school": {
    sourceUrl: "https://www.punggolsec.moe.edu.sg/direct-school-admission-2026/",
  },
  "queenstown-secondary-school": {
    sourceUrl: "https://www.queenstownsec.moe.edu.sg/directschooladmission/",
  },
  "riverside-secondary-school": {
    sourceUrl: "https://riversidesecondaryschool.edu.sg/resources/direct-school-admission/",
  },
  "sembawang-secondary-school": {
    sourceUrl: "https://sembawang.moe.edu.sg/dsa-secondary-admission-exercise-2026/",
  },
  "seng-kang-secondary-school": {
    sourceUrl: "https://www.sengkangsec.moe.edu.sg/co-curriculum/co-curricular-activities-cca/direct-school-admission-dsa/",
  },
  "serangoon-garden-secondary-school": {
    sourceUrl: "https://www.sgs.moe.edu.sg/eopenhouse/",
  },
  "serangoon-secondary-school": {
    sourceUrl: "https://www.serangoonsec.moe.edu.sg/distinctive-programmes/dsa/",
  },
  "spectra-secondary-school": {
    sourceUrl: "https://go.gov.sg/spectraexperienceparent",
  },
  "st-andrews-school-secondary": {
    sourceUrl: "https://www.standrewssec.moe.edu.sg/dsa2026/",
  },
  "st-anthonys-canossian-secondary-school": {
    sourceUrl: "https://stanthonyscanossiansec.moe.edu.sg/sacss-dsa-information-2026/",
  },
  "st-gabriels-secondary-school": {
    sourceUrl: "https://www.stgabrielssec.moe.edu.sg/",
    isHomepageOnly: true,
  },
  "st-hildas-secondary-school": {
    sourceUrl: "https://www.sthildas.edu.sg/admissions/direct-school-admission-dsa/",
  },
  "st-margarets-school-secondary": {
    sourceUrl: "https://stmargaretssec.moe.edu.sg/for-admission-to-st-margaret-s-school-secondary-in-2027/",
  },
  "st-patricks-school": {
    sourceUrl: "https://stpatricks.moe.edu.sg/direct-admissions-for-sec-1-2027/",
  },
  "swiss-cottage-secondary-school": {
    sourceUrl: "https://swiss-cottage-secondary-school.edu.sg/swiss-direct-school-admission/",
  },
  "tampines-secondary-school": {
    sourceUrl: "https://www.tampinessec.moe.edu.sg/our-co-curriculum/direct-school-admission-dsa/",
  },
  "tanjong-katong-girls-school": {
    sourceUrl: "https://www.tkgs.edu.sg/resources/admission/direct-school-admission/",
  },
  "tanjong-katong-secondary-school": {
    sourceUrl: "https://www.tanjongkatongsec.moe.edu.sg/dsa-open-house-2026/",
  },
  "temasek-secondary-school": {
    sourceUrl: "https://www.temaseksec.moe.edu.sg/open-house-programme/",
  },
  "unity-secondary-school": {
    sourceUrl: "https://www.unitysec.moe.edu.sg/the-unity-experience/direct-school-admission-dsa/dsa-open-house-2026/",
  },
  "victoria-school": {
    sourceUrl: "https://www.victoria.moe.edu.sg/prospective-students/openhouse-2026/",
  },
  "west-spring-secondary-school": {
    sourceUrl: "https://www.westspringsec.moe.edu.sg/links/dsa/",
  },
  "whitley-secondary-school": {
    sourceUrl: "https://www.whitleysec.moe.edu.sg/direct-school-admission-2026/",
  },
  "woodgrove-secondary-school": {
    sourceUrl: "https://ask.gov.sg/wgs/prospective-students-dsa/permalink/",
  },
  "xinmin-secondary-school": {
    sourceUrl: "https://www.xinminsec.moe.edu.sg/resources/students/admissions/direct-school-admission/",
  },
  "yio-chu-kang-secondary-school": {
    sourceUrl: "https://www.yiochukangsec.moe.edu.sg/our-family/Students/Direct-School-Admission/",
  },
  "yishun-secondary-school": {
    sourceUrl: "https://www.yishun.edu.sg/students/dsa/",
  },
  "yishun-town-secondary-school": {
    sourceUrl: "https://www.yishuntownsec.moe.edu.sg/oh2026/",
  },
  "yuan-ching-secondary-school": {
    sourceUrl: "https://www.yuanchingsec.moe.edu.sg/admissions/direct-school-admission-dsa/",
  },
  "yuhua-secondary-school": {
    sourceUrl: "https://www.yuhuasec.moe.edu.sg/useful-information-and-links/direct-school-admissions-dsa/",
  },
  "yusof-ishak-secondary-school": {
    sourceUrl: "https://www.yusofishaksec.moe.edu.sg/open-house-2026/",
  },
  "yuying-secondary-school": {
    sourceUrl: "https://www.yuyingsecondaryschool.edu.sg/direct-school-admission-exercise-for-2026/",
  },
  "zhonghua-secondary-school": {
    sourceUrl: "https://www.zhonghuasec.moe.edu.sg/about-us/soh/",
  },
};

let content = readFileSync(filePath, "utf-8");
let updatedCount = 0;
let notFoundCount = 0;

for (const [id, update] of Object.entries(UPDATES)) {
  // Match the school block by id and replace sourceUrl within it
  const idPattern = new RegExp(
    `(  \\{[^}]*?id: "${id}"[^}]*?sourceUrl: )"([^"]*)"`,
    "s"
  );

  if (!idPattern.test(content)) {
    console.warn(`⚠️  ID not found: ${id}`);
    notFoundCount++;
    continue;
  }

  // Replace sourceUrl
  content = content.replace(idPattern, `$1"${update.sourceUrl}"`);

  // Add isHomepageOnly if needed (only if not already present)
  if (update.isHomepageOnly) {
    const afterSourceUrl = new RegExp(
      `(id: "${id}"[^}]*?sourceUrl: "[^"]*")([^}]*?)(\n    region:)`,
      "s"
    );
    if (!content.includes(`id: "${id}"`) || content.includes(`id: "${id}"`) && !content.match(new RegExp(`id: "${id}"[^}]*isHomepageOnly`))) {
      content = content.replace(
        afterSourceUrl,
        `$1$2\n    isHomepageOnly: true,$3`
      );
    }
  }

  updatedCount++;
}

writeFileSync(filePath, content, "utf-8");
console.log(`✅ Updated ${updatedCount} schools. ${notFoundCount} IDs not found.`);
