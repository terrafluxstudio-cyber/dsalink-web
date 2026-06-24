"use client";

import Link from "next/link";
import { Compass, ExternalLink, School, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { PageHeader } from "@/components/PageHeader";
import { PillarBackLink } from "@/components/PillarBackLink";
import { RelatedCardsRow } from "@/components/RelatedCardsRow";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";

type LocaleStr4 = { en: string; zh: string; ms: string; ta: string };
const REL_COACH = {
  kicker: { en: "Related reference", zh: "相关参考", ms: "Rujukan berkaitan", ta: "தொடர்புடைய குறிப்பு" },
  heading: {
    en: "Three references parents pair with the coach directory",
    zh: "家长常与教练目录一起看的三个参考",
    ms: "Tiga rujukan dengan direktori jurulatih",
    ta: "பயிற்சியாளர் அட்டவணையுடன் மூன்று குறிப்புகள்",
  },
  c1Title: { en: "Talent-specific prep", zh: "分项目深度备战", ms: "Persediaan mengikut bakat", ta: "திறமை வாரியான தயாரிப்பு" },
  c1Body: {
    en: "Each talent — what coaches assess, where private coaching helps and where it doesn't.",
    zh: "每项目教练评分维度 · 私教什么时候有用、什么时候不用花钱。",
    ms: "Setiap bakat — apa jurulatih menilai.",
    ta: "ஒவ்வொரு திறமைக்கும் — பயிற்சியாளர் என்ன மதிப்பிடுகிறார்.",
  },
  c2Title: { en: "Six family pathways", zh: "六条家庭路径", ms: "Enam laluan keluarga", ta: "ஆறு குடும்ப பாதைகள்" },
  c2Body: {
    en: "Real-world outcomes — when coaching tipped the balance, when it didn't.",
    zh: "真实结果 · 教练何时改变了结局，何时没用。",
    ms: "Hasil sebenar — bila bimbingan membuat perbezaan.",
    ta: "உண்மையான முடிவுகள் — பயிற்சி எப்போது வேலை செய்தது.",
  },
  c3Title: { en: "147 schools", zh: "147 所学校", ms: "147 sekolah", ta: "147 பள்ளிகள்" },
  c3Body: {
    en: "Each school's CCA tradition — which talents have strong in-school coaching already.",
    zh: "每校 CCA 传统 · 哪些才艺校内已有强教练。",
    ms: "Tradisi CCA setiap sekolah.",
    ta: "ஒவ்வொரு பள்ளியின் CCA பாரம்பரியம்.",
  },
} satisfies Record<string, LocaleStr4>;

type TalentArea =
  | "music"
  | "sports"
  | "visual-arts"
  | "performing-arts"
  | "academic"
  | "tech";

type AreaFilter = "all" | TalentArea;
type TypeFilter = "all" | "institution" | "individual";

interface Coach {
  id: string;
  type: "institution" | "individual";
  name: string;
  talentAreas: TalentArea[];
  tagline: string;
  website: string;
  prominence: 1 | 2 | 3;
}

export const coaches: Coach[] = [
  {
    id: "yamaha-sg",
    type: "institution",
    name: "Yamaha Music School Singapore",
    talentAreas: ["music"],
    tagline:
      "Singapore's most recognised music school brand. Individual piano, keyboard, and instrument lessons following the ABRSM grade pathway. 10 branches island-wide. Teachers hold minimum ABRSM Grade 8.",
    website: "https://sg.yamaha.com/en/education/",
    prominence: 3,
  },
  {
    id: "cristofori",
    type: "institution",
    name: "Cristofori Music School",
    talentAreas: ["music"],
    tagline:
      "Singapore's largest music school - 35 centres, 16,000 students, 500 teachers. Piano, violin, guitar, and drums with annual ABRSM graded exam progression. 45 years of operation.",
    website: "https://cristofori.asia/",
    prominence: 3,
  },
  {
    id: "snyo",
    type: "institution",
    name: "SNYO - Singapore National Youth Orchestra",
    talentAreas: ["music"],
    tagline:
      "The most prestigious youth music credential in Singapore. MOE-recognised National Project of Excellence for orchestral instruments (strings, woodwind, brass, percussion). Open auditions year-round.",
    website: "https://www.snyo.org.sg/",
    prominence: 3,
  },
  {
    id: "activesg",
    type: "institution",
    name: "ActiveSG Academies",
    talentAreas: ["sports"],
    tagline:
      "Government-backed youth sports academies covering football, swimming, athletics, badminton, basketball, gymnastics, and more. Development Centre level provides competition experience for DSA-eligible credentials.",
    website: "https://www.activesgcircle.gov.sg/academies-clubs",
    prominence: 3,
  },
  {
    id: "act3",
    type: "institution",
    name: "ACT 3 International",
    talentAreas: ["performing-arts"],
    tagline:
      "Singapore's first and oldest children's drama academy (est. 1994). Drama classes for ages 18 months to 15 years at Cairnhill Arts Centre and Oasis Terraces, Punggol. Stage production opportunities build performing arts DSA portfolios.",
    website: "https://act3international.com.sg/",
    prominence: 3,
  },
  {
    id: "crestar",
    type: "institution",
    name: "Crestar Learning Centre",
    talentAreas: ["visual-arts"],
    tagline:
      "Established enrichment brand since 1977 - 50,000+ students. Dedicated Art DSA-Sec programme for ages 10-12 covering multiple mediums, portfolio building, and DSA interview skills. 4+ centres island-wide.",
    website: "https://crestar.com.sg/",
    prominence: 3,
  },
  {
    id: "superminds",
    type: "institution",
    name: "SuperMinds",
    talentAreas: ["academic"],
    tagline:
      "1-on-1 DSA interview coaching by Iwan Yang: 2,000+ students coached, 500+ verified reviews. In-person at Tanjong Pagar and online via Zoom.",
    website: "https://superminds.com.sg/dsa-interview-preparation-singapore/",
    prominence: 3,
  },
  {
    id: "speech-academy-asia",
    type: "institution",
    name: "Speech Academy Asia",
    talentAreas: ["academic"],
    tagline:
      "DSA coaching workshops covering interview questions, body language, voice modulation, and portfolio curation. MOE-registered instructors. Located at JEM.",
    website: "https://speechacademyasia.com/dsa/",
    prominence: 3,
  },
  {
    id: "mindchamps-dsa",
    type: "institution",
    name: "MindChamps Academie of Stars",
    talentAreas: ["performing-arts", "music"],
    tagline:
      "Singapore DSA centre for drama, singing, and dance. LAMDA and ABRSM certification pathways, with published placement claims on its own site.",
    website: "https://www.dsa.mindchamps.org/",
    prominence: 3,
  },
  {
    id: "elixir-academy",
    type: "institution",
    name: "Elixir Academy",
    talentAreas: ["academic", "visual-arts"],
    tagline:
      "DSA coaching by Teacher Albert: portfolio building, interview preparation, and art portfolio guidance. Based around Hougang and Kovan.",
    website: "https://www.elixirtuition.com/dsa-preparation-course-singapore",
    prominence: 3,
  },
  {
    id: "ryse-education",
    type: "institution",
    name: "Ryse Education",
    talentAreas: ["academic"],
    tagline:
      "Longer-term DSA mentorship from P5, including narrative building, portfolio documentation, and structured 1-on-1 interview coaching.",
    website: "https://www.ryse-edu.com/services/dsa-and-eae-prep",
    prominence: 3,
  },
  {
    id: "dancepointe",
    type: "institution",
    name: "Dancepointe Academy",
    talentAreas: ["performing-arts"],
    tagline:
      "Large dance school with DSA placement examples listed for schools such as SCGS, SOTA, Swiss Cottage Secondary, and Commonwealth Secondary.",
    website: "https://www.dancepointe.com.sg/students-1/dsa",
    prominence: 3,
  },
  {
    id: "ancourage",
    type: "institution",
    name: "Art by Ancourage",
    talentAreas: ["visual-arts"],
    tagline:
      "Small-group art portfolio classes for ages 10-18 at Bishan and Woodlands. Covers drawing, painting, mixed media, and school-specific portfolio guidance.",
    website: "https://ancourage.academy/courses/art/dsa",
    prominence: 3,
  },
  {
    id: "goalkick",
    type: "institution",
    name: "GoalKick Football Academy",
    talentAreas: ["sports"],
    tagline:
      "FAS-accredited football DSA programme with skill training, trial preparation, and interview coaching for aspiring school footballers.",
    website: "https://footballtraining.sg/dsa-programme/",
    prominence: 3,
  },
  {
    id: "netball-academy",
    type: "institution",
    name: "The Netball Academy",
    talentAreas: ["sports"],
    tagline:
      "Dedicated DSA clinic led by former national players, timed for July school trials. Includes mock tryout scenarios, conditioning, and interview prep.",
    website: "https://thenetballacademy.sg/dsa-clinic/",
    prominence: 3,
  },
  {
    id: "swimfast",
    type: "institution",
    name: "Swimfast Aquatic Club",
    talentAreas: ["sports"],
    tagline:
      "Competitive swimming pathway for students targeting swimming DSA eligibility, with national championship credentials listed by the club.",
    website: "https://swimfast.com.sg/",
    prominence: 3,
  },
  {
    id: "soma",
    type: "institution",
    name: "SOMA - School of Music and the Arts",
    talentAreas: ["music", "performing-arts"],
    tagline:
      "Private music and arts school (est. 2005) offering ABRSM, Trinity, and Rockschool graded pathways. Explicitly lists DSA portfolio guidance. Live recitals build the performance record needed for music DSA.",
    website: "https://soma.edu.sg/",
    prominence: 2,
  },
  {
    id: "tree-art",
    type: "institution",
    name: "Tree Art",
    talentAreas: ["visual-arts"],
    tagline:
      "Specialist DSA visual arts school with instructors including ex-MOE teachers with 20+ years' experience. Multi-stage coaching: technique, portfolio curation, interview prep, and application support.",
    website: "https://treeart.co/",
    prominence: 2,
  },
  {
    id: "art-wonderland",
    type: "institution",
    name: "Art Wonderland",
    talentAreas: ["visual-arts"],
    tagline:
      "Advanced art enrichment programme specifically designed for DSA Art portfolios targeting SOTA and secondary school admissions. Traditional and contemporary mediums. Backed by 10+ years experience.",
    website: "https://www.artwonderland.sg/",
    prominence: 2,
  },
  {
    id: "artgrain",
    type: "institution",
    name: "Artgrain",
    talentAreas: ["visual-arts"],
    tagline:
      "Portfolio Preparatory Course (ages 10-12) for Visual Art DSA, AEP, and local/overseas art schools. Covers observational drawing, painting, clay, 3D, and photography. Portfolio produced is usable as a DSA supporting document.",
    website: "https://artgrain.com.sg/",
    prominence: 2,
  },
  {
    id: "saga-athletics",
    type: "institution",
    name: "SAGA Athletics",
    talentAreas: ["sports"],
    tagline:
      "Specialist track and field coaching club (est. 2009). Events: sprinting, hurdles, middle/long distance, jumps, and throws. Trains athletes to National School Games qualifying standards for DSA eligibility.",
    website: "https://www.sagaathletics.com/",
    prominence: 2,
  },
  {
    id: "club-zoom",
    type: "institution",
    name: "Club ZOOM Track and Field",
    talentAreas: ["sports"],
    tagline:
      "SAA-affiliated non-profit athletics club with documented DSA placements via track and field. Athletes train 2-5 times per week and race in local and regional meets to build their competitive record.",
    website: "https://clubzoom.org.sg/",
    prominence: 2,
  },
  {
    id: "sg-badminton-school",
    type: "institution",
    name: "Singapore Badminton School",
    talentAreas: ["sports"],
    tagline:
      "Dedicated youth badminton coaching school with structured pathways from beginner through competitive levels. Training develops the footwork, match play, and technical skills assessed in school DSA badminton trials.",
    website: "https://www.singaporebadmintonschool.com.sg/",
    prominence: 2,
  },
  {
    id: "singacademy",
    type: "institution",
    name: "SingAcademy - DSA Specialists",
    talentAreas: ["academic", "performing-arts"],
    tagline:
      "DSA specialists since 2010. Interview, audition, and portfolio coaching across talent areas. Founded by Artistic Director Kuo Po.",
    website: "https://www.singacademy.sg/the-dsa-specialist",
    prominence: 2,
  },
  {
    id: "small-giant-music",
    type: "institution",
    name: "Small Giant Music",
    talentAreas: ["music"],
    tagline:
      "Holistic music DSA preparation: audition performance, interview techniques, and portfolio presentation for different instruments.",
    website: "https://www.smallgiantmusic.sg/dsa-preparation-course-music/",
    prominence: 2,
  },
  {
    id: "vac",
    type: "institution",
    name: "Visual Arts Centre",
    talentAreas: ["visual-arts"],
    tagline:
      "Portfolio preparation for DSA-Sec, DSA-JC, and SOTA. Covers idea conceptualisation and published portfolio requirements.",
    website:
      "https://visualartscentre.sg/courses/portfolio-preparation-course-dsa-diploma/",
    prominence: 2,
  },
  {
    id: "centre-stage",
    type: "institution",
    name: "Centre Stage",
    talentAreas: ["performing-arts"],
    tagline:
      "Drama and theatre DSA coaching with portfolio preparation, performance skills, acting, voice, and improvisation support.",
    website: "https://centre-stage.com/home/direct-school-admissions-2/",
    prominence: 2,
  },
  {
    id: "hiart",
    type: "institution",
    name: "HiArt",
    talentAreas: ["visual-arts"],
    tagline:
      "DSA art portfolio courses, intensive crash courses, and online options. Guides students to build a submission-ready body of artwork.",
    website: "https://hiart.com.sg/dsa/",
    prominence: 2,
  },
  {
    id: "empire-code",
    type: "institution",
    name: "Empire Code",
    talentAreas: ["tech"],
    tagline:
      "Tech-talent DSA programme with mock interviews, presentation practice, hands-on coding projects, and public speaking coaching options.",
    website: "https://empirecode.co/direct-school-admission-dsa-program/",
    prominence: 2,
  },
  {
    id: "dsa-academy-sg",
    type: "institution",
    name: "DSA Academy Singapore",
    talentAreas: ["music", "performing-arts"],
    tagline:
      "Specialist DSA academy for music and dance: audition video production, portfolio development, and interview skills coaching.",
    website: "https://www.dsasingapore.com",
    prominence: 2,
  },
  {
    id: "medley-music",
    type: "institution",
    name: "Medley Music School",
    talentAreas: ["music"],
    tagline:
      "Music DSA framework with ABRSM and Trinity certification pathways tailored to target secondary school requirements.",
    website: "https://www.medleymusic.com.sg/dsa",
    prominence: 2,
  },
  {
    id: "play-acting",
    type: "institution",
    name: "Play Acting Drama Centre",
    talentAreas: ["performing-arts"],
    tagline:
      "Drama DSA coaching with long-term portfolio building through stage roles. Recommends starting early before the DSA application year.",
    website: "https://www.playacting.net/dsa",
    prominence: 2,
  },
  {
    id: "sgna",
    type: "institution",
    name: "Singapore Netball Academy",
    talentAreas: ["sports"],
    tagline:
      "National-level netball development academy with DSA guidance workshops for parents and competitive training for players.",
    website: "https://www.netballacademy.sg/",
    prominence: 2,
  },
  {
    id: "chalk-n-pencils",
    type: "institution",
    name: "Chalk n Pencils",
    talentAreas: ["visual-arts"],
    tagline:
      "Portfolio preparation for DSA, AEP, SOTA, and IGCSE Art. Structured to develop individual artistic identity across media.",
    website: "https://www.chalknpencils.com/children-art/portfolio-preparation",
    prominence: 2,
  },
  {
    id: "tutify",
    type: "institution",
    name: "Tutify Education",
    talentAreas: ["academic"],
    tagline:
      "Academic DSA coaching by Coach Leo, including talent discovery, interview training, and PSLE academic support.",
    website: "https://tutify.com.sg/dsa-preparation/",
    prominence: 2,
  },
  {
    id: "titan-tech",
    type: "institution",
    name: "Titan Tech Academy",
    talentAreas: ["tech"],
    tagline:
      "Tech DSA preparation for ages 11-12. Hands-on projects, interview coaching, and Digital for Life partner credentials listed by the academy.",
    website: "https://tta.sg/course-dsa/",
    prominence: 2,
  },
  {
    id: "music-with-pat",
    type: "individual",
    name: "Music with Pat",
    talentAreas: ["music"],
    tagline:
      "Piano DSA coaching by Patricia: audition coaching, repertoire selection, portfolio building, and mock auditions. Based in Tengah.",
    website: "https://www.musicwithpat.com/dsa-piano-lessons/",
    prominence: 2,
  },
  {
    id: "duck-learning",
    type: "institution",
    name: "Duck Learning",
    talentAreas: ["tech"],
    tagline:
      "STEM enrichment and DSA coaching covering computational thinking, robotics, and digital literacy pathways. Publishes a maintained list of STEM DSA schools and offers structured tech DSA preparation.",
    website: "https://ducklearning.com/",
    prominence: 2,
  },
  {
    id: "artfully-yours",
    type: "institution",
    name: "Artfully Yours",
    talentAreas: ["visual-arts"],
    tagline:
      "Boutique art studio offering structured DSA Portfolio preparation with tailored coaching and portfolio development for secondary school visual arts DSA applications.",
    website: "https://www.artfullyyours.com.sg/",
    prominence: 1,
  },
  {
    id: "haus-of-wonders",
    type: "institution",
    name: "Haus of Wonders",
    talentAreas: ["visual-arts"],
    tagline:
      "DSA Portfolio Prep Masterclass for ages 8-17. Documented placements into SOTA, Raffles Girls' School, NAFA, and Naval Base Secondary via DSA visual arts. Portfolio curation and interview coaching included.",
    website: "https://hausofwonders.com/",
    prominence: 1,
  },
  {
    id: "aq-dance",
    type: "institution",
    name: "AQ Dance",
    talentAreas: ["performing-arts"],
    tagline:
      "Ballet DSA support covering audition preparation, interview coaching, portfolio development, and testimonial writing for school applications.",
    website: "https://aqdance.com.sg/direct-school-admissions-dsa/",
    prominence: 1,
  },
  {
    id: "the-art-people",
    type: "institution",
    name: "The Art People",
    talentAreas: ["visual-arts"],
    tagline:
      "DSA Powerup course for visual arts portfolio preparation at secondary school level, with guidance on the DSA art portfolio.",
    website: "https://www.theartpeople.com.sg/dsapowerup.html",
    prominence: 1,
  },
  {
    id: "fishlike",
    type: "institution",
    name: "Fishlike Swim School",
    talentAreas: ["sports"],
    tagline:
      "Competitive swimming development using the Total Immersion method, relevant for students targeting swimming DSA pathways.",
    website: "https://fishlike.net/competitive-swimming/",
    prominence: 1,
  },
  {
    id: "discovering-potential",
    type: "institution",
    name: "Discovering Potential",
    talentAreas: ["academic"],
    tagline:
      "Interview skills coaching designed for DSA-Sec applicants, including a dedicated DSA-Sec interview skills workshop.",
    website: "https://www.discoveringpotential.com.sg/",
    prominence: 1,
  },
  {
    id: "polarise-learning",
    type: "institution",
    name: "Polarise Learning",
    talentAreas: ["visual-arts"],
    tagline:
      "Art instruction combined with portfolio presentation coaching and interview skills for DSA visual arts applications.",
    website: "https://www.polarise-learning.com/visual-arts-dsa",
    prominence: 1,
  },
  {
    id: "virtuoso-music",
    type: "individual",
    name: "Virtuoso Music Connection",
    talentAreas: ["music"],
    tagline:
      "Private violin and piano coaching targeting DSA and SOTA admissions, with ABRSM, Trinity, and LCM examination pathways.",
    website: "https://www.virtuosomusicconnection.sg/",
    prominence: 1,
  },
  {
    id: "belcanto-violins",
    type: "individual",
    name: "Belcanto Violins",
    talentAreas: ["music"],
    tagline:
      "Violin DSA preparation by Vivienne, using regular performance opportunities to build competition and performance records.",
    website: "https://belcantoviolins.com/violin-lessons-singapore",
    prominence: 1,
  },
  {
    id: "isaiah-learning",
    type: "individual",
    name: "Isaiah Learning Solutions",
    talentAreas: ["tech"],
    tagline:
      "Ex-MOE teacher with specialist DSA preparation for School of Science and Technology (SST). Locations include Bukit Timah, Serangoon, and Clementi.",
    website: "https://isaiahlearningsolutions.com/dsa-sst-tuition-singapore",
    prominence: 1,
  },
  {
    id: "language-studio",
    type: "individual",
    name: "The Language Studio",
    talentAreas: ["academic"],
    tagline:
      "Tailor-made DSA interview confidence coaching by Teacher Jane, focused on communication, leadership, and cultural awareness.",
    website: "https://thelanguagestudio.sg/dsa-confidence/",
    prominence: 1,
  },
  {
    id: "city-ballet",
    type: "institution",
    name: "City Ballet Academy",
    talentAreas: ["performing-arts"],
    tagline:
      "Ballet DSA coaching with placement examples listed for NYGH, SCGS, Dunman High, SOTA, and Crescent Girls' School.",
    website:
      "https://www.cityballetacademy.com/achievements/direct-school-admissions/",
    prominence: 1,
  },
  {
    id: "yan-ballet",
    type: "institution",
    name: "Yan Ballet Academy",
    talentAreas: ["performing-arts"],
    tagline:
      "RAD exam classes, competition coaching, and dance DSA pathways led by faculty from professional ballet backgrounds.",
    website: "https://www.yanballetacademy.com/",
    prominence: 1,
  },
];

const areaTagStyles: Record<TalentArea, string> = {
  music: "border-intellectual/20 bg-intellectual/5 text-intellectual",
  sports: "border-champagne/60 bg-champagne/20 text-intellectual",
  "visual-arts": "border-slate-200 bg-surface text-slate-700",
  "performing-arts": "border-intellectual/15 bg-surface-warm text-intellectual",
  academic: "border-slate-300 bg-white text-slate-700",
  tech: "border-intellectual/25 bg-white text-intellectual",
};

// "要不要教练 + 怎么挑" 引导段（四语言）。诚实不煽动：很多家庭自己准备就够，
// 把"我需要帮助"那部分家长导向下方名录。直接抬 coach_click 转化。
const GUIDE = {
  needHeading: {
    en: "Do you actually need a coach?",
    zh: "到底要不要请教练",
    ms: "Perlukah anda mengupah jurulatih?",
    ta: "உங்களுக்கு பயிற்சியாளர் உண்மையில் தேவையா?",
  },
  needBody: {
    en: "Many families prepare well on their own — especially when a child's talent is already strong and there is time before the trials. A coach helps most when the talent needs technical assessment (auditions, portfolios, sports trials), when you are short on time, or when you are aiming at highly competitive schools. If that is not you, the free guides on this site may be enough.",
    zh: "很多家庭自己准备得很好——尤其当孩子的才艺本来就强、离试训还有时间。教练最能帮上忙的情况是：才艺需要专业评估（试唱、作品集、运动试训）、你时间紧、或目标是竞争很激烈的学校。如果不是这几种，本站的免费指南可能就够了。",
    ms: "Ramai keluarga membuat persediaan dengan baik sendiri — terutamanya apabila bakat anak sudah kukuh dan ada masa sebelum percubaan. Jurulatih paling membantu apabila bakat memerlukan penilaian teknikal (ujibakat, portfolio, percubaan sukan), apabila anda kesuntukan masa, atau apabila anda menyasarkan sekolah yang sangat kompetitif. Jika tidak, panduan percuma di laman ini mungkin sudah memadai.",
    ta: "பல குடும்பங்கள் தாங்களாகவே நன்றாகத் தயாராகின்றன — குறிப்பாக குழந்தையின் திறமை ஏற்கனவே வலுவாக இருந்து, சோதனைகளுக்கு முன் நேரம் இருக்கும்போது. திறமைக்கு தொழில்நுட்ப மதிப்பீடு (ஒலித்தேர்வுகள், போர்ட்ஃபோலியோ, விளையாட்டு சோதனைகள்) தேவைப்படும்போது, நேரம் குறைவாக இருக்கும்போது, அல்லது மிகவும் போட்டி நிறைந்த பள்ளிகளை இலக்காகக் கொள்ளும்போது பயிற்சியாளர் அதிகம் உதவுவார். இல்லையெனில், இந்தத் தளத்தின் இலவச வழிகாட்டிகள் போதுமானதாக இருக்கலாம்.",
  },
  chooseHeading: {
    en: "How to choose one",
    zh: "怎么挑教练",
    ms: "Cara memilih jurulatih",
    ta: "எப்படித் தேர்ந்தெடுப்பது",
  },
  check1: {
    en: "Talent-area fit — pick someone who has actually placed students through your child's specific talent, not a general tutor.",
    zh: "对口才艺——选真正帮学生进过你孩子那项才艺的人，不是泛泛的补习老师。",
    ms: "Padanan bidang bakat — pilih sesiapa yang benar-benar pernah membantu pelajar masuk melalui bakat khusus anak anda, bukan tutor umum.",
    ta: "திறமைப் பொருத்தம் — உங்கள் குழந்தையின் குறிப்பிட்ட திறமை வழியாக மாணவர்களை உண்மையில் சேர்க்க உதவியவரைத் தேர்ந்தெடுங்கள், பொது ஆசிரியர் அல்ல.",
  },
  check2: {
    en: "DSA track record — ask for school placement examples and whether they cover the interview and portfolio, not just the skill itself.",
    zh: "DSA 经验——问清楚有没有具体的录取案例、是否覆盖面试和作品集，不只是教技能本身。",
    ms: "Rekod DSA — minta contoh penempatan sekolah dan sama ada mereka merangkumi temu duga dan portfolio, bukan kemahiran itu sahaja.",
    ta: "DSA அனுபவம் — பள்ளி சேர்க்கை எடுத்துக்காட்டுகளையும், அவர்கள் நேர்காணல் மற்றும் போர்ட்ஃபோலியோவை உள்ளடக்குகிறார்களா என்பதையும் கேளுங்கள், திறமை மட்டுமல்ல.",
  },
  check3: {
    en: "Honest claims — no one can guarantee a place; the school decides. Be wary of anyone who promises one.",
    zh: "说法要诚实——没人能保证录取，决定权在学校。任何打包票的，要当心。",
    ms: "Dakwaan yang jujur — tiada siapa boleh menjamin tempat; sekolah yang menentukan. Berhati-hati dengan sesiapa yang menjanjikannya.",
    ta: "நேர்மையான கூற்றுகள் — யாரும் இடத்தை உறுதியளிக்க முடியாது; பள்ளியே தீர்மானிக்கிறது. உறுதியளிப்பவர்களிடம் எச்சரிக்கையாக இருங்கள்.",
  },
} satisfies Record<string, LocaleStr4>;

export function DsaCoachesPageBody() {
  const { locale, t } = useLanguage();
  const [activeArea, setActiveArea] = useState<AreaFilter>("all");
  const [activeType, setActiveType] = useState<TypeFilter>("all");

  const areaFilters: { key: AreaFilter; label: string }[] = [
    { key: "all", label: t.dsaCoachesFilterAll },
    { key: "music", label: t.dsaCoachesFilterMusic },
    { key: "sports", label: t.dsaCoachesFilterSports },
    { key: "visual-arts", label: t.dsaCoachesFilterVisualArts },
    { key: "performing-arts", label: t.dsaCoachesFilterPerformingArts },
    { key: "academic", label: t.dsaCoachesFilterAcademic },
    { key: "tech", label: t.dsaCoachesFilterTech },
  ];

  const typeFilters: { key: TypeFilter; label: string }[] = [
    { key: "all", label: t.dsaCoachesTypeAll },
    { key: "institution", label: t.dsaCoachesTypeInstitution },
    { key: "individual", label: t.dsaCoachesTypeIndividual },
  ];

  const areaLabels: Record<TalentArea, string> = {
    music: t.dsaCoachesFilterMusic,
    sports: t.dsaCoachesFilterSports,
    "visual-arts": t.dsaCoachesFilterVisualArts,
    "performing-arts": t.dsaCoachesFilterPerformingArts,
    academic: t.dsaCoachesFilterAcademic,
    tech: t.dsaCoachesFilterTech,
  };

  const filtered = useMemo(
    () =>
      coaches
        .filter((coach) => activeArea === "all" || coach.talentAreas.includes(activeArea))
        .filter((coach) => activeType === "all" || coach.type === activeType)
        .sort((a, b) => b.prominence - a.prominence || a.name.localeCompare(b.name)),
    [activeArea, activeType],
  );

  const resultLabel =
    locale === "zh"
      ? `显示 ${filtered.length} 个服务商`
      : `${filtered.length} ${filtered.length === 1 ? "provider" : "providers"}`;

  return (
    <>
      <SiteHeader />
      <main className="border-t border-intellectual/5 bg-surface pb-16">
        <PageHeader
          crumbs={[
            { label: t.navDsaGuide, href: "/dsa-guide" },
            { label: t.navDsaCoaches },
          ]}
          kicker={t.navExplore}
          title={t.dsaCoachesHeading}
          subtitle={t.dsaCoachesLead}
        />

        <section className="mx-auto mt-6 max-w-5xl px-4 sm:px-6">
          <div className="rounded-2xl border border-champagne/40 bg-champagne/5 p-5 sm:p-6">
            <h2
              className="font-display text-[1.0625rem] font-semibold text-intellectual sm:text-lg"
              style={{ textTransform: "none" }}
            >
              {GUIDE.needHeading[locale]}
            </h2>
            <p className="mt-2 max-w-3xl text-[0.875rem] leading-relaxed text-slate-600">
              {GUIDE.needBody[locale]}
            </p>
            <h3
              className="mt-5 font-display text-[0.9375rem] font-semibold text-intellectual"
              style={{ textTransform: "none" }}
            >
              {GUIDE.chooseHeading[locale]}
            </h3>
            <ul className="mt-2 space-y-1.5 border-l-2 border-champagne/50 pl-4 text-[0.875rem] leading-relaxed text-slate-600">
              <li>{GUIDE.check1[locale]}</li>
              <li>{GUIDE.check2[locale]}</li>
              <li>{GUIDE.check3[locale]}</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
          <p className="mb-7 max-w-3xl text-[11px] leading-relaxed text-slate-400">
            {t.dsaCoachesDisclaimer}
          </p>

          <div className="mb-8 space-y-4" aria-label="DSA coaches filters">
            <div className="flex flex-wrap gap-2">
              {areaFilters.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={activeArea === key}
                  onClick={() => setActiveArea(key)}
                  className={`rounded-full px-4 py-1.5 text-[0.8125rem] font-medium normal-case transition ${
                    activeArea === key
                      ? "bg-intellectual text-white shadow-soft"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-intellectual/40 hover:text-intellectual"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {typeFilters.map(({ key, label }) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={activeType === key}
                  onClick={() => setActiveType(key)}
                  className={`rounded-lg px-3 py-1.5 text-[0.75rem] font-medium normal-case transition ${
                    activeType === key
                      ? "bg-champagne text-intellectual shadow-soft"
                      : "border border-slate-200 bg-white text-slate-500 hover:border-intellectual/30 hover:text-intellectual"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <p className="mb-5 text-[0.8125rem] text-slate-500">{resultLabel}</p>

          {filtered.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 bg-white py-16 text-center text-[0.9375rem] text-slate-400">
              {t.dsaCoachesEmptyState}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.map((coach) => (
                <article
                  key={coach.id}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-card"
                >
                  <p className="mb-2 text-[0.6875rem] font-semibold normal-case tracking-wide text-slate-400">
                    {coach.type === "institution"
                      ? t.dsaCoachesBadgeInstitution
                      : t.dsaCoachesBadgeIndividual}
                  </p>

                  <h2 className="mb-2 font-display text-[1rem] font-semibold leading-snug text-slate-900">
                    {coach.name}
                  </h2>

                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {coach.talentAreas.map((area) => (
                      <span
                        key={area}
                        className={`rounded-full border px-2 py-0.5 text-[0.6875rem] font-semibold normal-case ${areaTagStyles[area]}`}
                      >
                        {areaLabels[area]}
                      </span>
                    ))}
                  </div>

                  <p className="mb-4 flex-1 text-[0.8125rem] leading-relaxed text-slate-600">
                    {coach.tagline}
                  </p>

                  <a
                    href={coach.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("coach_click", {
                        coach_id: coach.id,
                        coach_name: coach.name,
                        coach_type: coach.type,
                        talent: coach.talentAreas.join(","),
                        prominence: coach.prominence,
                      })
                    }
                    className="inline-flex items-center gap-1.5 self-start rounded-lg border border-intellectual/20 bg-intellectual/5 px-3 py-1.5 text-[0.8125rem] font-medium normal-case text-intellectual transition hover:bg-intellectual/10"
                  >
                    {t.dsaCoachesVisitWebsite}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </article>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#e3ded5] bg-white px-5 py-4 shadow-card">
            <p className="text-[0.9375rem] font-medium text-slate-700">
              {locale === "zh"
                ? "找到合适的辅导后，继续查看面试准备指南"
                : "Once you've found a coach, prepare for the trial and interview"}
            </p>
            <Link
              href="/dsa-interview"
              className="shrink-0 rounded-lg bg-intellectual px-4 py-2 text-[0.8125rem] font-semibold normal-case text-white transition hover:bg-intellectual/90"
            >
              {locale === "zh" ? "面试准备指南 →" : "Interview Prep Guide →"}
            </Link>
          </div>

          <div className="mt-12 rounded-xl border border-champagne/40 bg-champagne/10 p-6 text-center">
            <h2 className="mb-2 font-display text-[1.125rem] font-semibold text-slate-900">
              {t.dsaCoachesCtaHeading}
            </h2>
            <p className="mx-auto mb-4 max-w-2xl text-[0.9375rem] leading-relaxed text-slate-600">
              {t.dsaCoachesCtaBody}
            </p>
            <a
              href="mailto:hello@dsalink.sg"
              className="inline-block rounded-lg bg-intellectual px-5 py-2 text-[0.875rem] font-semibold normal-case text-white transition hover:bg-intellectual/90"
            >
              {t.dsaCoachesCtaButton}
            </a>
          </div>
        </section>
      </main>
      <RelatedCardsRow
        kicker={REL_COACH.kicker[locale]}
        heading={REL_COACH.heading[locale]}
        items={[
          { icon: Compass, title: REL_COACH.c1Title[locale], body: REL_COACH.c1Body[locale], href: "/dsa-interview/talents" },
          { icon: Users, title: REL_COACH.c2Title[locale], body: REL_COACH.c2Body[locale], href: "/dsa-experience" },
          { icon: School, title: REL_COACH.c3Title[locale], body: REL_COACH.c3Body[locale], href: "/dsa-finder" },
        ]}
      />
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
