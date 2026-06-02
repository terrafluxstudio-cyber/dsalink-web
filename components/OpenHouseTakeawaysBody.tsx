"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SchoolLogo } from "@/components/SchoolLogo";

// Map short takeaway IDs → full MOE school slugs (for SchoolLogo lookup).
const SCHOOL_SLUG_BY_ID: Record<string, string> = {
  scgs: "singapore-chinese-girls-school",
  nushigh: "nus-high-school-of-mathematics-and-science",
  chs: "catholic-high-school",
  sas: "st-andrews-secondary-school",
  plmgs: "paya-lebar-methodist-girls-school",
  njc: "national-junior-college",
  sngs: "chij-st-nicholas-girls-school",
  ahs: "anglican-high-school",
  hci: "hwa-chong-institution",
  rgs: "raffles-girls-school",
  vs: "victoria-school",
  sji: "st-josephs-institution",
  dhs: "dunman-high-school",
  sacss: "st-anthonys-canossian-secondary-school",
  crest: "crest-secondary-school",
  tkss: "tanjong-katong-secondary-school",
  cedar: "cedar-girls-secondary-school",
  sst: "school-of-science-and-technology-singapore",
  yiss: "yusof-ishak-secondary-school",
};

type SchoolTakeaway = {
  id: string;
  nameEn: string;
  nameZh: string;
  nameShort: string;
  date: string;
  dateZh: string;
  eventType: string;
  eventTypeZh: string;
  tags: string[];
  aboutEn: string[];
  aboutZh: string[];
  goodFitEn: string[];
  goodFitZh: string[];
  keySignalEn: string;
  keySignalZh: string;
  talentAreas: string[];
  sourceUrl: string;
};

const SCHOOLS: SchoolTakeaway[] = [
  {
    id: "scgs",
    nameEn: "Singapore Chinese Girls' School",
    nameZh: "新加坡女子学校",
    nameShort: "SCGS",
    date: "16 May 2026",
    dateZh: "2026年5月16日",
    eventType: "Online Open House",
    eventTypeZh: "线上开放日",
    tags: ["IP", "Girls"],
    aboutEn: [
      "Founded 1899 — one of Singapore's oldest girls' schools",
      "Location: Dunearn Road / Bukit Timah area",
      "IP track (→ Eunoia JC) or SEC track — choose at point of application",
      "All DSA applicants must submit a video: single take, unedited, not professionally produced",
      "Known for performing arts, competitive sports, and rigorous academics",
    ],
    aboutZh: [
      "1899年创立，新加坡历史最悠久的女校之一",
      "校址：Dunearn Road / 武吉知马区域",
      "IP轨道直通Eunoia JC，或选择SEC课程——报名时自行决定",
      "所有DSA申请者须提交视频：单次拍摄，不剪辑，非专业制作",
      "以表演艺术、竞技体育和严谨学风著称",
    ],
    goodFitEn: [
      "Girls with a clearly defined talent — a video is mandatory for every DSA applicant, no exceptions",
      "Students who want to choose between IP and SEC track at time of application (rare flexibility among IP schools)",
      "Students seeking a wide CCA range in a competitive, high-achieving all-girls environment",
    ],
    goodFitZh: [
      "有明确才能方向的女生——所有DSA申请者必须提交视频，无例外",
      "希望在报名时自行选择IP或SEC课程的学生（IP学校中属于罕见的灵活性）",
      "寻找CCA多元、竞争激烈但氛围积极的全女生环境的学生",
    ],
    keySignalEn:
      "All applicants must submit a video recording — preparation starts before you even apply. Offers both IP (→ Eunoia JC) and SEC tracks. English Language is an uncommon DSA talent area in Singapore secondary schools.",
    keySignalZh:
      '所有才能方向的申请者均须提交视频录像，备考需比其他学校更早开始。IP轨道直通Eunoia JC，SEC轨道独立结课——报名前需选定路径。将"英文语言"作为DSA才能方向，在新加坡中学中较为罕见。',
    talentAreas: [
      "Artistic Gymnastics",
      "Badminton",
      "Basketball",
      "Choir",
      "Concert Band",
      "English Drama",
      "English Language",
      "Handbell Ensemble",
      "Humanities",
      "Leadership",
      "Modern Dance",
      "Netball",
      "Squash",
      "String Ensemble",
      "Tennis",
    ],
    sourceUrl:
      "https://www.scgs.moe.edu.sg/prospective-students/secondary-admission/direct-school-admission/",
  },
  {
    id: "nushigh",
    nameEn: "NUS High School of Maths and Science",
    nameZh: "国大数理中学",
    nameShort: "NUS High",
    date: "16 May 2026",
    dateZh: "2026年5月16日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["IP", "DSA-only", "Co-ed"],
    aboutEn: [
      "Founded 2005 — Singapore's only specialised school for Maths and Science",
      "Awards the NUS High School Diploma — not O- or A-Levels",
      "DSA-only intake — PSLE results do not give you a place here",
      "~200 students per cohort; modular and research-focused curriculum",
      "Diploma recognised by NUS, NTU, SMU, SUTD, SIT and international universities",
    ],
    aboutZh: [
      "2005年创立，全新加坡唯一专注数理的独立学校",
      "颁发NUS高中文凭——不参加O水准也不参加A水准考试",
      "DSA是唯一入学途径——PSLE成绩不用于录取",
      "每届约200名学生；模块化、科研导向课程",
      "文凭获NUS、NTU、SMU、SUTD、SIT及国际院校认可",
    ],
    goodFitEn: [
      "Students who genuinely love Maths or Science — the assessment tests how they think, not whether they get the right answer",
      "Self-directed learners who don't need O-Level exam milestones to stay motivated",
      "Families making a full 6-year commitment — there is no exit to mainstream secondary mid-programme",
    ],
    goodFitZh: [
      "真正热爱数学或科学的学生——选拔考查的是思维方式，而非是否答对",
      "自驱力强、无需O水准考试节点也能保持专注的学生",
      "确定走这条路的家庭——就读后无法中途转回普通中学路线",
    ],
    keySignalEn:
      "NUS High has NO PSLE posting — DSA is the only way in. Only 2 talent areas (Maths or Science). Every applicant must sit the mandatory Selection Test on 4 July 2026. They assess problem-solving ability and passion, not exam results.",
    keySignalZh:
      "NUS High没有PSLE直接派位，DSA是唯一入学途径。只有数学和科学两个才能方向，所有申请者必须参加7月4日（周六）的选拔测试，不参加则无缘录取。选拔看重解题思维与热情，而非成绩单。",
    talentAreas: ["Mathematics", "Science"],
    sourceUrl:
      "https://www.nushigh.edu.sg/admissions/year-1-and-3-admissions/year-1-admissions/",
  },
  {
    id: "chs",
    nameEn: "Catholic High School",
    nameZh: "公教中学",
    nameShort: "Catholic High",
    date: "16 May 2026",
    dateZh: "2026年5月16日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["SAP", "IP", "Boys"],
    aboutEn: [
      "Founded 1935 — all-boys SAP school in Bishan",
      "IP track leads to Eunoia Junior College (4+2 Joint Integrated Programme with SCGS and CHIJ SNGS)",
      "All IP students must take Higher Chinese; SP students must offer at least Chinese Language",
      "IP applicants need 'consistent and excellent' P5–P6 results; SP applicants need 'very good' results",
      "Home of Singapore's prestigious Music Elective Programme (MEP), including O-Level Music and SYF",
    ],
    aboutZh: [
      "1935年创立，位于碧山的全男生SAP学校",
      "IP轨道直通Eunoia初级学院（与SCGS和SNGS组成4+2年联合IP课程）",
      "IP学生须修高级华文；SP学生须修华文或高级华文",
      "IP申请须P5–P6成绩'稳定且优秀'；SP申请须'稳定且非常好'",
      "设有新加坡声望极高的音乐精英课程（MEP），含O水准音乐考试和SYF参赛",
    ],
    goodFitEn: [
      "Musically trained boys: MEP via DSA is among Singapore's rarest tracks — includes O-Level Music and SYF (Arts Festival)",
      "Boys who can meet the SAP + IP double bar: Higher Chinese is required, plus strong P5–P6 academics",
      "Students who thrive in a high-achieving all-boys Chinese cultural environment",
    ],
    goodFitZh: [
      "有音乐训练基础的男生：DSA进MEP是全岛最难得的机会之一——含O水准音乐和SYF艺术节",
      "能满足SAP+IP双重门槛的男生：高级华文必须，P5–P6成绩要求高",
      "在高要求全男生华文文化环境中能茁壮成长的学生",
    ],
    keySignalEn:
      "Music Elective Programme (MEP) via DSA is rare and prestigious — includes O-level Music and SYF participation. SAP + IP means both Higher Chinese and strong academics are expected.",
    keySignalZh:
      "通过DSA进入音乐精英课程（MEP）极为难得，包括O水准音乐考试和新加坡艺术节（SYF）参与机会。SAP+IP双重要求：需要华文或高级华文，且学术能力须适应综合课程。",
    talentAreas: [
      "Leadership",
      "Music Elective Programme",
      "Chinese Drama",
      "Chinese Orchestra",
      "Choir",
      "Concert Band",
      "English Drama",
      "Modern Dance",
      "Basketball",
      "Floorball",
      "Softball",
      "Table Tennis",
      "Track & Field",
      "Volleyball",
      "Wushu",
      "Bilingualism (IP only)",
      "Humanities (IP only)",
      "Mathematics (IP only)",
      "Science (IP only)",
    ],
    sourceUrl:
      "https://www.catholichigh.moe.edu.sg/prospective-students/sec-admission/direct-school-admission/",
  },
  {
    id: "sas",
    nameEn: "St. Andrew's School (Secondary)",
    nameZh: "圣安德烈中学",
    nameShort: "St. Andrew's",
    date: "15 May 2026",
    dateZh: "2026年5月15日",
    eventType: "Online Open House",
    eventTypeZh: "线上开放日",
    tags: ["Govt-aided", "Boys"],
    aboutEn: [
      "Founded 1862 — one of Singapore's oldest boys' schools",
      "Anglican school in Potong Pasir; O-Level track only",
      "2026 DSA talent areas: Concert Band, Football ★, Hockey, Leadership, Rugby, Squash ★, Visual Arts, Water Polo",
      "Football and Squash are new in 2026",
      "DSA admits up to 20% of each Sec 1 cohort via trials and interview",
    ],
    aboutZh: [
      "1862年创立，新加坡历史最悠久的男校之一",
      "位于波东巴西的圣公会学校；仅提供O水准轨道",
      "2026年DSA才能方向：管乐队、足球★、曲棍球、领导力、橄榄球、壁球★、视觉艺术、水球",
      "足球和壁球为2026年全新加入",
      "每届约20%中一生通过DSA录取，经才能试训和面试评估",
    ],
    goodFitEn: [
      "Boys passionate about team and contact sports — Rugby, Football, Hockey, Squash, Water Polo are all serious CCA tracks",
      "Students who prefer O-Level over IP — no academic pressure beyond typical secondary",
      "Boys who resonate with Anglican values or a culture-first school community",
    ],
    goodFitZh: [
      "热爱团队和对抗性运动的男生——橄榄球、足球、曲棍球、壁球、水球均为认真竞技的CCA",
      "倾向O水准而非IP的学生——无IP课程附带的高强度学业压力",
      "认同圣公会价值观或文化优先型校园社群的男生",
    ],
    keySignalEn:
      "2026 adds Football and Squash — brand new this year. Five contact/team sports make this a top choice for sporty boys. No prior experience required.",
    keySignalZh:
      "2026年新增足球（Football）和壁球（Squash）两个项目，是今年真正的新变化。目前提供5个对抗性/团队运动，是体育型男生的理想选择。官方表示欢迎没有相关经验的申请者。",
    talentAreas: [
      "Concert Band",
      "Football ★ New 2026",
      "Hockey",
      "Rugby",
      "Squash ★ New 2026",
      "Water Polo",
      "Student Leadership",
      "Visual Arts",
    ],
    sourceUrl: "https://www.standrewssec.moe.edu.sg/dsa2026/",
  },
  {
    id: "plmgs",
    nameEn: "Paya Lebar Methodist Girls' School (Secondary)",
    nameZh: "巴耶利峇美以美女中",
    nameShort: "PLMGS",
    date: "9 May 2026",
    dateZh: "2026年5月9日",
    eventType: "Online Open House",
    eventTypeZh: "线上开放日",
    tags: ["Govt-aided", "Girls"],
    aboutEn: [
      "Founded 1949 — government-aided girls' school in Paya Lebar",
      "Methodist school guided by H.E.A.R.T. values (Honouring God, Excellence, Adaptability, Respect, Thankfulness)",
      "O-Level track; less academically intense than IP schools",
      "Offers Harp as a DSA talent area — one of the rarest in Singapore secondary schools",
      "Official policy: no prior experience required for any talent area, including Harp",
    ],
    aboutZh: [
      "1949年创立，位于巴耶利峇的政府辅助女校",
      "卫理公会学校；以H.E.A.R.T.价值观立校（荣神、卓越、适应、尊重、感恩）",
      "O水准轨道；学术强度低于IP学校",
      "开设竖琴（Harp）DSA才能方向——全新加坡中学中极为罕见",
      "官方政策：所有才能方向接受零基础申请，包括竖琴，学校评估潜力",
    ],
    goodFitEn: [
      "Girls interested in Harp — zero experience explicitly welcome; school assesses potential, not track record",
      "Students who want a nurturing O-Level environment without the competitive pace of IP schools",
      "Families in the East or North-East looking for a values-centred girls' school",
    ],
    goodFitZh: [
      "对竖琴感兴趣的女生——官方明确欢迎零基础申请，学校评估潜力而非过往成绩",
      "希望在关爱型O水准环境成长、不需要IP节奏的学生",
      "居住在东部/东北部、寻找价值观导向女校的家庭",
    ],
    keySignalEn:
      "Harp is one of Singapore's rarest DSA talent areas. The school explicitly welcomes applicants with no prior experience — potential matters more than track record.",
    keySignalZh:
      "竖琴（Harp）是全新加坡最罕见的DSA才能项目之一，竞争少机会独特。学校官方明确欢迎没有相关经验的申请者——潜力比过往成绩更重要。",
    talentAreas: [
      "Student Leadership",
      "Concert Band",
      "Guzheng",
      "Harp",
      "Badminton",
      "Netball",
      "Rhythmic Gymnastics",
      "Swimming",
      "Table Tennis",
      "Volleyball",
    ],
    sourceUrl:
      "https://www.plmgss.moe.edu.sg/about-us/school-admission/direct-school-admission-dsa-sec/",
  },
  {
    id: "njc",
    nameEn: "National Junior College (IP)",
    nameZh: "国家初级学院（综合课程）",
    nameShort: "NJC",
    date: "9 May 2026",
    dateZh: "2026年5月9日",
    eventType: "IP Information Session",
    eventTypeZh: "IP招募信息会",
    tags: ["IP", "Co-ed"],
    aboutEn: [
      "Founded 1969 — located in Clementi, West Singapore",
      "6-year through-train from Sec 1 to JC2 with no standalone secondary stage",
      "Co-educational; you complete both secondary and JC in the same institution",
      "Science for Sustainable Development (academic DSA): requires 4-year STEM engagement during Junior High",
      "Art Elective Programme DSA: requires Art as an academic subject for all 4 Junior High years",
    ],
    aboutZh: [
      "1969年创立，位于金文泰（西部）",
      "从中一直通JC2的6年贯通课程，无独立中学阶段",
      "男女混合；中学和初院阶段在同一所学校完成",
      "可持续发展科学（学术DSA）：需在初中阶段持续4年参与STEM活动",
      "视觉艺术精英课程DSA：须在整个初中阶段将艺术作为正式学科",
    ],
    goodFitEn: [
      "Self-driven students who don't need O-Level milestones as motivation checkpoints",
      "Families making a full 6-year commitment in one decision — no switching schools after PSLE",
      "Students with deep STEM or arts passion: both Science and Art DSA tracks require a 4-year programme commitment",
    ],
    goodFitZh: [
      "自驱力强、无需O水准考试节点驱动也能坚持的学生",
      "在PSLE后一次性确定整个6年学习环境、不打算中途换校的家庭",
      "对STEM或艺术有深度热情的学生：两个学术DSA方向均需4年持续投入",
    ],
    keySignalEn:
      "NJC's IP runs 6 years from Sec 1 to JC2 — applying here is choosing an entire educational pathway, not just a secondary school. 'Science for Sustainable Development' is a rare academic DSA track.",
    keySignalZh:
      'NJC的直通IP从中一读到JC2（6年一条龙），申请NJC意味着选择整个学习路径，而非单纯选中学。"可持续发展科学"作为学术类DSA项目，在新加坡各校中极为罕见。',
    talentAreas: [
      "Basketball",
      "Canoeing",
      "Cross Country / Track & Field",
      "Shooting",
      "Softball",
      "Squash",
      "Choir",
      "Chinese Dance",
      "Chinese Orchestra",
      "Concert Band",
      "Guitar Ensemble",
      "Indian Dance",
      "Malay Dance",
      "Modern Dance",
      "String Ensemble",
      "Science for Sustainable Development",
      "Art Elective Programme",
    ],
    sourceUrl: "https://www.nationaljc.moe.edu.sg/admissions/ip-dsa/",
  },
  {
    id: "sngs",
    nameEn: "CHIJ St. Nicholas Girls' School",
    nameZh: "圣尼各拉女校",
    nameShort: "CHIJ SNGS",
    date: "9 May 2026",
    dateZh: "2026年5月9日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["SAP", "IP", "Girls"],
    aboutEn: [
      "Founded 1948 — Canossian SAP school in Bishan",
      "Part of the Joint Integrated Programme (JIP): IP students join Eunoia JC after Year 4",
      "Same JIP cluster as Catholic High and SCGS",
      "7 distinct sports disciplines for DSA — most granular sports list among SAP girls' schools",
      "Bilingualism talent area: assessed on critical thinking and oratorical competency in both English and Chinese",
    ],
    aboutZh: [
      "1948年创立，位于碧山的仁爱女修会SAP女校",
      "联合IP网络（JIP）成员：IP学生完成四年后升读Eunoia初级学院",
      "与公教中学（CHS）和新加坡女子学校（SCGS）同属同一JIP联合课程",
      "提供7个具体体育DSA项目——各SAP女校中最细化的体育名单",
      "双语才能方向：同时考查英文和华文的批判思维与演讲表达能力",
    ],
    goodFitEn: [
      "Girls competing in a specific sport (not 'generally sporty') — the school assesses all 7 disciplines separately",
      "Bilingual students who can argue and persuade fluently in both English and Chinese",
      "Girls wanting an all-girls SAP environment with IP leading to Eunoia JC via the Joint IP",
    ],
    goodFitZh: [
      "有具体运动专项的女生——学校对7个体育项目分别评估，不是泛泛'喜欢运动'就够",
      "能用英文和华文都流利表达、有批判性思维的双语学生",
      "希望在全女生SAP环境就读、通过联合IP升读Eunoia JC的女生",
    ],
    keySignalEn:
      "IP track leads to Eunoia JC (6-year programme). Sports talent area offers 7 specific disciplines — the most granular sports list among the schools. Bilingualism talent is SAP-specific and rare.",
    keySignalZh:
      "IP轨道直通Eunoia JC（6年直通课程）。体育才能类细分7个具体项目，是各校中最细化的体育DSA名单。双语才能（Bilingualism）是SAP特有项目，全岛仅少数学校提供。",
    talentAreas: [
      "Artistic Gymnastics",
      "Badminton",
      "Hockey",
      "Netball",
      "Rhythmic Gymnastics",
      "Table Tennis",
      "Track & Field",
      "Leadership",
      "Bilingualism",
    ],
    sourceUrl:
      "https://www.chijstnicholasgirls.moe.edu.sg/want-to-join-sngs-via-dsa-click-here-to-find-out-more/",
  },
  {
    id: "ahs",
    nameEn: "Anglican High School",
    nameZh: "圣公会中学",
    nameShort: "Anglican High",
    date: "18 Apr 2026",
    dateZh: "2026年4月18日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["SAP", "IP", "Co-ed"],
    aboutEn: [
      "Founded 1952 — SAP school in Hougang, North-East Singapore",
      "Chinese Language compulsory for ALL students — no exceptions regardless of DSA talent area",
      "Posting Group 3 only — students must qualify for this posting group to be eligible",
      "Offers both Express (SP) and IP tracks",
      "Rare for a SAP school: Robotics listed as a DSA talent area",
    ],
    aboutZh: [
      "1952年创立，位于后港（东北部）的SAP学校",
      "华文/高级华文为所有学生必修——无论申请哪个才能方向，均无例外",
      "仅接受第3报名组别（Posting Group 3）学生",
      "提供快捷课程（SP）和综合课程（IP）双轨道",
      "SAP学校中罕见：Robotics（机器人）列为DSA才能方向",
    ],
    goodFitEn: [
      "Genuinely bilingual students — Higher Chinese or Chinese is mandatory for ALL enrolled students, not just Chinese DSA applicants",
      "Students who qualify for Posting Group 3 — this is a hard requirement, not a preference",
      "Tech-oriented students who want a Chinese cultural school: Robotics in a SAP environment is uniquely available here",
    ],
    goodFitZh: [
      "真正掌握双语的学生——华文/高级华文是所有学生的必修科，不只是申请中文DSA的学生",
      "符合第3报名组别要求的学生——这是硬性条件，不是偏好",
      "对科技感兴趣又希望在华文文化环境就读的学生：SAP学校里有Robotics DSA，这是独一无二的",
    ],
    keySignalEn:
      "SAP school — Higher Chinese is compulsory for all students. Robotics is an exceptionally rare DSA talent area for a SAP school. Boys' Brigade and Girls' Brigade as DSA talent areas are uncommon across Singapore.",
    keySignalZh:
      "特别助理计划（SAP）学校，所有学生必须修读华文或高级华文，无法豁免。机器人（Robotics）作为SAP学校的DSA项目极为罕见。公益少年团（BB/GB）作为DSA才能方向在本地中学中也不多见。",
    talentAreas: [
      "Basketball",
      "Badminton",
      "Table Tennis",
      "Wushu",
      "Chinese Language",
      "Boys' Brigade",
      "Girls' Brigade",
      "Modern Dance",
      "Chinese Drama",
      "English Drama",
      "Chinese Orchestra",
      "Choir",
      "Concert Band",
      "Robotics",
    ],
    sourceUrl: "https://www.anglicanhigh.moe.edu.sg/about-us/dsa/",
  },
  {
    id: "hci",
    nameEn: "Hwa Chong Institution",
    nameZh: "华侨中学",
    nameShort: "HCI",
    date: "23 May 2026",
    dateZh: "2026年5月23日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["SAP", "IP", "Boys"],
    aboutEn: [
      "Founded 1919 — all-boys SAP school in Bukit Timah; one of Singapore's most prestigious IP schools",
      "6-year Integrated Programme — students bypass O-Levels; curriculum emphasises bilingualism and Chinese culture",
      "SAP school: Higher Chinese embedded in curriculum for all students",
      "DSA applicants assessed on potential, not just past results — prior experience is not required",
      "Financial assistance available: no student denied a place due to financial circumstances",
    ],
    aboutZh: [
      "1919年创立，位于武吉知马的全男生SAP学校，新加坡最具声望的IP学校之一",
      "六年制综合课程——学生无需参加O水准考试；课程强调双语能力与中华文化",
      "SAP学校：所有学生须修高级华文",
      "DSA选拔看重潜力，非成绩——无相关经验亦可申请",
      "提供助学金：不会因经济原因拒绝任何合资格学生",
    ],
    goodFitEn: [
      "Boys strong in Chinese who thrive in a bilingual environment — SAP means Higher Chinese is non-negotiable",
      "Students with genuine interest in STEM, arts, humanities, or sport who want 6 years to develop it without O-Level pressure",
      "Self-driven learners: HCI's broad, research-oriented IP rewards curiosity over exam technique",
    ],
    goodFitZh: [
      "华文能力强、能在双语环境中如鱼得水的男生——SAP意味着高级华文不可缺席",
      "在STEM、艺术、人文或体育上有真实兴趣、希望用六年深耕而无需O水准压力的学生",
      "自驱型学习者：华侨中学IP课程宽广且科研导向，奖励好奇心，而非应试技巧",
    ],
    keySignalEn:
      "HCI assesses potential over results — no prior experience needed. 22 DSA talent areas spanning STEM, Chinese culture, performing arts, and 13 sports — one of Singapore's widest DSA menus. The 6-year IP commitment is binding.",
    keySignalZh:
      "华侨中学以潜力为重，无需相关经验。22个DSA才能方向涵盖STEM、中华文化、表演艺术与13项体育——是全新加坡DSA选项最广的学校之一。六年IP承诺具约束力。",
    talentAreas: [
      "Art Elective Programme",
      "Bilingualism",
      "Chinese Language",
      "Entrepreneurship",
      "Humanities",
      "Infocomm",
      "Leadership",
      "Mathematics",
      "Science",
      "Badminton",
      "Basketball",
      "Canoeing",
      "Chinese Weiqi",
      "Cross Country",
      "Fencing",
      "Judo",
      "Shooting",
      "Table Tennis",
      "Track and Field",
      "Volleyball",
      "Water Polo",
      "Wushu",
    ],
    sourceUrl: "https://hci.edu.sg/high-school/admission-route/",
  },
  {
    id: "rgs",
    nameEn: "Raffles Girls' School (Secondary)",
    nameZh: "莱佛士女子中学",
    nameShort: "RGS",
    date: "23 May 2026",
    dateZh: "2026年5月23日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["IP", "Girls"],
    aboutEn: [
      "Founded 1879 — Singapore's most prestigious all-girls school, at Braddell Rise",
      "6-year IP track leading to Raffles Institution (JC) — students bypass O-Levels entirely",
      "18 DSA talent areas — one of the widest menus among girls' schools in Singapore",
      "Language DSA applicants must submit 3 writing samples; MEP applicants submit a video of 2 performed pieces",
      "Science DSA admits join the Cogitare Club and a 4-year Integrated Science Research Programme",
    ],
    aboutZh: [
      "1879年创立，位于Braddell Rise，全新加坡最具声望的女校",
      "六年制IP直通莱佛士初级学院——学生完全绕过O水准",
      "18个DSA才能方向——全新加坡女校中选项最广之一",
      "语言类申请须提交3篇写作样本；音乐精英课程申请须提交演奏2首曲目的视频",
      "科学类DSA录取生须加入Cogitare Club及完成四年综合科学研究课程",
    ],
    goodFitEn: [
      "High-achieving girls who want the top all-girls IP path in Singapore — 6-year commitment leads to Raffles Institution",
      "Girls with strong language ability: English, Chinese, Malay, and Tamil each count as a separate DSA area — writing portfolio required",
      "Students interested in MEP or research-track Science — both require significant pre-application preparation",
    ],
    goodFitZh: [
      "希望进入全新加坡最顶尖女子IP路线的优秀女生——六年制课程直通莱佛士初级学院",
      "语言能力突出的女生：英文、华文、马来文、泰米尔文各自独立成才能方向，需提交写作样本",
      "对音乐精英课程（MEP）或科研导向科学感兴趣的学生——两者均需提前认真准备",
    ],
    keySignalEn:
      "RGS offers 4 language DSA areas (English + 3 Mother Tongues) — writing samples required. Science DSA leads to a 4-year structured research programme. MEP requires a performance video. Rhythmic Gymnastics is one of the rarest sports DSA areas in Singapore.",
    keySignalZh:
      "莱佛士女子中学开放4个语言DSA方向（英文+三种母语）——均须提交写作样本。科学DSA通向四年制科研课程。MEP须提交演奏视频。韵律体操是全新加坡最少见的体育DSA项目之一。",
    talentAreas: [
      "Chinese Language",
      "Community Youth Leadership",
      "English Language",
      "Malay Language",
      "Mathematics",
      "Music Elective Programme",
      "Science",
      "Tamil Language",
      "Visual Arts",
      "Badminton",
      "Basketball",
      "Netball",
      "Rhythmic Gymnastics",
      "Softball",
      "Squash",
      "Swimming",
      "Table Tennis",
      "Tennis",
    ],
    sourceUrl: "https://www.rgs.edu.sg/admissions/Admission-to-RGS/via-DSA/",
  },
  {
    id: "vs",
    nameEn: "Victoria School",
    nameZh: "维多利亚学校",
    nameShort: "VS",
    date: "23 May 2026",
    dateZh: "2026年5月23日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["IP", "Boys"],
    aboutEn: [
      "Founded 1876 — one of Singapore's oldest boys' schools, located in Siglap (East)",
      "Victoria-Cedar Alliance (VCA) IP: 6-year programme leading to GCE A-Levels at Victoria JC",
      "Also offers the 4-year SEC (O-Level) track — choose at point of DSA application",
      "Looks for high intellectual potential, strong P5 results, and passion to contribute to the VS community",
      "DSA spans 4 domains: STEM, Community Youth Leadership, Aesthetics, and Sports",
    ],
    aboutZh: [
      "1876年创立，位于东部实乐（Siglap），全新加坡历史最悠久的男校之一",
      "维多利亚–锡达联合IP（VCA IP）：六年制课程，直通维多利亚初级学院参加A水准",
      "同时提供四年制SEC（O水准）轨道——在DSA申请时自行选择",
      "看重高智识潜力、强劲的P5成绩，及对VS校园社群的贡献热忱",
      "DSA涵盖四大领域：STEM、社区青年领导力、艺术与体育",
    ],
    goodFitEn: [
      "Boys who want the IP pathway in a heritage school — VCA IP leads directly to Victoria JC",
      "Students with talent in sport, aesthetics, or STEM — 16 talent areas cover most types",
      "Boys who prefer a large, active boys' school in the East with a strong inter-school sports culture",
    ],
    goodFitZh: [
      "希望走IP路线、钟爱历史底蕴学校的男生——VCA IP直通维多利亚初级学院",
      "在体育、艺术或STEM上有才能的学生——16个才能方向涵盖大多数类型",
      "偏好东区大型活跃男校、校际体育文化浓厚的男生",
    ],
    keySignalEn:
      "VS offers both VCA IP (→ VJC) and SEC tracks — rare flexibility among boys' schools. Art Elective Programme (AEP) is offered here, making VS one of few government boys' schools with AEP as a DSA area. STEM and Leadership are character/academic pathways, not sports.",
    keySignalZh:
      "VS同时提供VCA IP（直通VJC）和SEC轨道，在男校中灵活度少见。VS开放美术精英课程（AEP）作为DSA方向，是极少数提供AEP的政府男校之一。STEM和领导力是品格/学术路径，非体育项目。",
    talentAreas: [
      "Art Elective Programme",
      "Chinese Orchestra",
      "Choir",
      "Community Youth Leadership",
      "Concert Band",
      "Mathematics",
      "Science",
      "Badminton",
      "Floorball",
      "Football",
      "Hockey",
      "Table Tennis",
      "Tennis",
      "Track and Field",
      "Volleyball",
      "Wushu",
    ],
    sourceUrl:
      "https://www.victoria.moe.edu.sg/prospective-students/admission-to-VS/direct-school-admissions-to-sec-1-year-1/",
  },
  {
    id: "sji",
    nameEn: "St. Joseph's Institution",
    nameZh: "圣约瑟书院",
    nameShort: "SJI",
    date: "23 May 2026",
    dateZh: "2026年5月23日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["IP", "Boys", "Mission"],
    aboutEn: [
      "Founded 1852 — Singapore's oldest Catholic boys' school, run by the De La Salle Brothers, at Malcolm Road",
      "Two tracks: 4-year SEC (O-Levels) or 6-year IP (International Baccalaureate Diploma) — choose at application",
      "Three DSA domains: STEM (Coding, Robotics, 3D Modelling), Visual Arts, and Sports (15 areas)",
      "STEM and Visual Arts applicants must submit a portfolio; sports trials on 11 or 18 July 2026 — International Chess and Sailing applicants are exempt from trials",
      "All shortlisted candidates attend in-person interviews between 15 July and 5 August 2026",
      "Prior experience not required — assessment focuses on potential",
    ],
    aboutZh: [
      "1852年创立，由德拉萨兄弟会主办，位于Malcolm Road，全新加坡最古老的天主教男校",
      "两条轨道：四年制SEC（O水准）或六年制IP（国际文凭大学预科项目，IB Diploma）——申请时自行选择",
      "三大DSA领域：STEM（编程、机器人、3D建模）、视觉艺术、体育（15个项目）",
      "STEM和视觉艺术申请须提交作品集；体育试训定于2026年7月11日或18日——国际象棋与帆船申请者免于试训",
      "入围候选人须于7月15日至8月5日期间参加现场面试",
      "无需相关经验——以潜力为评估重点",
    ],
    goodFitEn: [
      "Boys who want a Catholic mission school with a choice between IB Diploma (IP) or O-Levels (SEC) at point of application",
      "Students with STEM talent — Coding, Robotics, and 3D Modelling are three distinct DSA areas, each requiring a portfolio",
      "Sports-focused boys: 15 sports including rare options like International Chess, Rugby, and Sailing",
    ],
    goodFitZh: [
      "寻求天主教使命学校、同时可在申请时选择IB文凭（IP）或O水准（SEC）的男生",
      "有STEM才能的学生——编程、机器人与3D建模是三个独立DSA方向，各须提交作品集",
      "体育型男生：15项体育含国际象棋、橄榄球、帆船等稀有项目",
    ],
    keySignalEn:
      "SJI's STEM DSA splits into Coding, Robotics, and Programming & 3D Modelling — three portfolio-based tracks. International Chess and Sailing applicants skip sports trials (all others trial on 11 or 18 July). Shortlisted candidates face in-person interviews 15 July – 5 August. Choose IP (IB Diploma) or SEC (O-Level) upfront — no changing later.",
    keySignalZh:
      "圣约瑟书院STEM DSA细分为编程、机器人、3D建模三条作品集路径。国际象棋与帆船申请者免于体育试训（其他项目试训在7月11日或18日）。入围者须于7月15日至8月5日参加现场面试。IP（IB文凭）与SEC（O水准）在报名时即须选定——之后不可更改。",
    talentAreas: [
      "Coding",
      "Leadership",
      "Programming and 3D Modelling",
      "Robotics",
      "Visual Arts",
      "Badminton",
      "Basketball",
      "Canoeing",
      "Cross Country",
      "Floorball",
      "Football",
      "Hockey",
      "International Chess",
      "Judo",
      "Rugby",
      "Sailing",
      "Table Tennis",
      "Taekwondo",
      "Tennis",
      "Track and Field",
    ],
    sourceUrl: "https://www.sji.edu.sg/admission/dsa-at-sji/",
  },
  {
    id: "dhs",
    nameEn: "Dunman High School",
    nameZh: "德明政府中学",
    nameShort: "Dunman High",
    date: "23 May 2026",
    dateZh: "2026年5月23日",
    eventType: "Online Open House",
    eventTypeZh: "线上开放日",
    tags: ["SAP", "IP", "Co-ed"],
    aboutEn: [
      "Founded 1956 — co-educational SAP school in Tanjong Rhu; one of Singapore's 11 SAP secondary schools",
      "6-year Integrated Programme — students bypass O-Levels; curriculum emphasises bilingualism and Chinese culture",
      "SAP school: Chinese Language is embedded for all; IP students offer Higher Chinese",
      "2026 Open House was fully online — presentations, Q&As, and CCA showcases held digitally",
      "18 DSA talent areas spanning arts, STEAM, sports, and leadership",
    ],
    aboutZh: [
      "1956年创立，位于丹戎如的男女合校SAP学校，是全新加坡11所SAP中学之一",
      "六年制综合课程——学生无需参加O水准；课程强调双语能力与中华文化",
      "SAP学校：华文贯穿所有学生课程；IP学生修高级华文",
      "2026年开放日以全线上方式举行——简介、问答及CCA展示均为数字形式",
      "18个DSA才能方向，涵盖艺术、STEAM、体育与领导力",
    ],
    goodFitEn: [
      "Students — boys or girls — wanting a co-ed SAP IP school: Dunman High is one of very few co-ed SAP schools in Singapore",
      "Bilingual families: SAP environment embeds Chinese Language and culture across all 6 years",
      "Students interested in STEAM or the arts (including Music Elective Programme and String Ensemble) in a bilingual setting",
    ],
    goodFitZh: [
      "希望就读男女合校SAP IP学校的学生——德明是全新加坡极少数男女合校SAP学校之一",
      "双语家庭：SAP环境将华文与中华文化融入六年课程",
      "希望在双语环境中发展STEAM或艺术才能（含音乐精英课程和弦乐合奏）的学生",
    ],
    keySignalEn:
      "Dunman High is Singapore's only top-tier co-educational SAP IP school — a rare combination. Unique DSA areas include STEAM, Music Elective Programme, String Ensemble, and Sailing. Chinese Dance and Modern Dance are offered for girls; most other areas open to both.",
    keySignalZh:
      "德明政府中学是全新加坡唯一顶尖男女合校SAP IP学校——极为罕见的组合。独特DSA方向包括STEAM、音乐精英课程、弦乐合奏与帆船。华族舞和现代舞仅对女生开放；其他大多数方向男女均可申请。",
    talentAreas: [
      "Bilingualism",
      "Leadership",
      "Music Elective Programme",
      "Steam (Science, Technology, Engineering, Aesthetics and Mathematics)",
      "Chinese Dance",
      "Chinese Orchestra",
      "Choir",
      "Concert Band",
      "Modern Dance",
      "String Ensemble",
      "Badminton",
      "Basketball",
      "Sailing",
      "Softball",
      "Table Tennis",
      "Track and Field",
      "Volleyball",
      "Wushu",
    ],
    sourceUrl: "https://file.go.gov.sg/dhs-dsa-sec-website.pdf",
  },
  {
    id: "sacss",
    nameEn: "St. Anthony's Canossian Secondary School",
    nameZh: "圣安东尼女校（中学）",
    nameShort: "St. Anthony's Canossian",
    date: "23 May 2026",
    dateZh: "2026年5月23日",
    eventType: "Online Open House",
    eventTypeZh: "线上开放日",
    tags: ["Govt-aided", "Girls", "Mission"],
    aboutEn: [
      "All-girls Catholic school in Bedok North (East), founded by the Canossian Sisters",
      "Government-aided school offering the O-Level (Express) track — no Integrated Programme",
      "2026 Open House was online and compact (10–11am only) — focused digital presentation",
      "Canossian values of charity, humility, and service are woven into student development",
      "13 DSA talent areas — unusually strong in performing arts including Angklung, Guitar Ensemble, and Percussion",
    ],
    aboutZh: [
      "位于东部勿洛北的全女生天主教学校，由嘉诺撒仁爱女修会创办",
      "政府辅助学校，提供O水准（快捷）课程——无综合课程（IP）",
      "2026年开放日以线上方式举行，内容精炼（仅上午10–11时）——聚焦式数字简介",
      "嘉诺撒的慈善、谦逊与服务价值观贯穿学生发展课程",
      "13个DSA才能方向——表演艺术类尤为丰富，包括昂克隆/锣琴合奏、结他合奏、打击乐合奏",
    ],
    goodFitEn: [
      "Girls seeking a nurturing, faith-based O-Level school in the East — not looking for IP intensity",
      "Students with talent in performing arts: Angklung/Kulintang, Guitar Ensemble, Indian Dance, Percussion Ensemble are rare DSA offerings in Singapore",
      "Families who value Canossian Catholic mission culture as a distinct part of school life",
    ],
    goodFitZh: [
      "寻求东部培育型、信仰型O水准女校——不需要IP课程高强度的女生",
      "有表演艺术才能的学生：昂克隆/锣琴合奏、结他合奏、印度舞、打击乐合奏是全新加坡罕见的DSA方向",
      "重视嘉诺撒天主教使命文化作为校园生活独特组成部分的家庭",
    ],
    keySignalEn:
      "SACSS has some of Singapore's most distinctive performing arts DSA areas: Angklung/Kulintang Ensemble, Guitar Ensemble, Percussion Ensemble, and Indian Dance. These are rare across all secondary schools — students with these specific talents have very few schools to apply to.",
    keySignalZh:
      "圣安东尼女校提供全新加坡最具特色的表演艺术DSA方向之一：昂克隆/锣琴合奏、结他合奏、打击乐合奏、印度舞。这些项目在所有中学中极为少见——有这类才能的学生可选学校极少，这里是优先选项。",
    talentAreas: [
      "Angklung/Kulintang Ensemble",
      "Choir",
      "Concert Band",
      "English Drama",
      "Guitar Ensemble",
      "Indian Dance",
      "Modern Dance",
      "Percussion Ensemble",
      "Badminton",
      "Floorball",
      "Netball",
      "Taekwondo",
      "Track and Field",
    ],
    sourceUrl: "https://stanthonyscanossiansec.moe.edu.sg/admissions/direct-school-admission/",
  },
  {
    id: "crest",
    nameEn: "Crest Secondary School",
    nameZh: "裕峰中学",
    nameShort: "Crest",
    date: "23 May 2026",
    dateZh: "2026年5月23日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["Govt", "Co-ed"],
    aboutEn: [
      "Government school in Jurong East (West) with a distinctive Applied Learning Programme (ALP) approach",
      "Only ONE DSA talent area: Football — via the School Football Academy in partnership with Unleash The Roar! (UTR)",
      "UTR partnership provides professional coaching, nutrition guidance, and mental resilience training",
      "Dedicated teacher-mentors support student-athletes throughout the programme",
      "Industry partnerships and 4-week hands-on programmes prepare students for post-secondary pathways",
    ],
    aboutZh: [
      "位于裕廊东（西部）的政府学校，设有独特的应用学习课程（ALP）",
      "仅开放一个DSA才能方向：足球——通过「释放咆哮」（Unleash The Roar! / UTR）足球学院计划",
      "UTR合作提供专业教练、营养指导及心理韧性训练",
      "专属教师导师全程支持学生运动员",
      "行业合作及四周实践课程协助学生规划升学方向",
    ],
    goodFitEn: [
      "Boys with serious football ambitions who want professional-level structured coaching within a school setting",
      "Student-athletes who need a supportive academic environment that accommodates a demanding training schedule",
      "Families open to an Applied Learning model — Crest integrates vocational and practical skills with academics",
    ],
    goodFitZh: [
      "有认真足球追求、希望在校园环境中获得专业体系训练的男生",
      "需要学校能配合高强度训练日程、提供学业支持的学生运动员",
      "接受应用学习模式的家庭——裕峰将职业技能与实践学习融入学术课程",
    ],
    keySignalEn:
      "Crest offers just one DSA area — Football — one of Singapore's most specialised programmes. The Unleash The Roar! partnership delivers coaching well beyond typical CCA level. If football is the student's primary passion, this is one of the best structured pathways in Singapore.",
    keySignalZh:
      "裕峰只有足球一个DSA方向，是全新加坡最专门化的DSA课程之一。「释放咆哮」合作项目提供远超普通CCA水准的专业训练。若足球是学生的第一志向，这是全新加坡最具体系的培训路径之一。",
    talentAreas: ["Football"],
    sourceUrl: "https://sites.google.com/crestsec.edu.sg/crest-dsa/home",
  },
  {
    id: "tkss",
    nameEn: "Tanjong Katong Secondary School",
    nameZh: "丹绒加东中学",
    nameShort: "TKSS",
    date: "26 May 2026",
    dateZh: "2026年5月26日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["O-Level", "Co-ed", "Government"],
    aboutEn: [
      "Government co-ed school on Haig Road — O-Level track",
      "5 DSA talent areas across 2 domains: Malay Language + 4 sports",
      "Sports DSA is gender-specific: Basketball and Football for boys; Floorball and Netball for girls",
      "Malay Language DSA is open to both boys and girls",
      "Known for its Malay cultural heritage — one of the original East Coast community schools",
    ],
    aboutZh: [
      "海格路政府男女中学，修读O水准课程",
      "5个DSA才能方向，分属两个领域：马来语 + 4项运动",
      "运动DSA按性别限定：篮球和足球限男生；地板曲棍球和篮网球限女生",
      "马来语DSA男女生均可申请",
      "以马来文化传承著称，是东海岸历史最悠久的社区学校之一",
    ],
    goodFitEn: [
      "Students with strong Malay Language results AND competition experience — grades alone are not enough",
      "Boys who play Basketball or Football at National School Games level",
      "Girls who play Floorball or Netball at NSG level",
      "Families looking for a community-feel co-ed O-Level school in the East",
    ],
    goodFitZh: [
      "马来语成绩优秀且有竞赛经历的学生——仅有好成绩还不够",
      "在全国学校运动会打篮球或足球的男生",
      "在NSG打地板曲棍球或篮网球的女生",
      "寻找东区有社区氛围的男女混合O水准学校的家庭",
    ],
    keySignalEn:
      "TKSS offers one of the few Malay Language DSA pathways in Singapore — but requires both strong academic results in Malay and proven competition achievements. For sports, NSG-level performance is expected, not just school CCA participation. If your child's sport isn't one of the four listed, there is no DSA pathway here.",
    keySignalZh:
      "TKSS是新加坡少数提供马来语DSA途径的学校之一，要求同时具备优异的马来语学业成绩和竞赛成就。运动DSA要求全国学校运动会级别的成绩，校内CCA参与并不足够。若孩子的运动项目不在这四项之列，此校没有DSA途径。",
    talentAreas: [
      "Malay Language",
      "Basketball (Boys)",
      "Floorball (Girls)",
      "Football (Boys)",
      "Netball (Girls)",
    ],
    sourceUrl: "https://www.tanjongkatongsec.moe.edu.sg/useful-links/dsa/",
  },
  {
    id: "cedar",
    nameEn: "Cedar Girls' Secondary School",
    nameZh: "四德女子中学",
    nameShort: "Cedar",
    date: "30 May 2026",
    dateZh: "2026年5月30日",
    eventType: "Online Open House (Teams Webinar)",
    eventTypeZh: "线上开放日（Teams 网研会）",
    tags: ["IP", "Girls"],
    aboutEn: [
      "Founded 1957 — all-girls government school at 1 Cedar Avenue (Central)",
      "Victoria–Cedar Alliance (VCA) IP: 4 years at Cedar + 2 years at Victoria Junior College — JIP partner with Victoria School",
      "SEC (O-Level) track also available — choose at point of DSA application",
      "Talent Development Programme structured as Three Es: Exposure → Experience (Tier 1) → Extension (Tier 2), spanning STEM, Social Innovation, and Regional/Humanities Studies",
      "Social Innovation is Cedar's signature — every Year 1/2 student takes the SIR course applying design thinking to real-world themes (sustainability, super-aged society)",
    ],
    aboutZh: [
      "1957年创立，位于Cedar Avenue（中部）的全女生政府学校",
      "维多利亚–锡达联合IP（VCA IP）：Cedar 读4年 + 维多利亚初级学院读2年——与维多利亚学校组成联合IP",
      "也开放SEC（O水准）轨道——在DSA申请时自行选择",
      "Talent Development Programme采用三层「Three Es」结构：Exposure → Experience（Tier 1）→ Extension（Tier 2），覆盖STEM、Social Innovation、区域研究/人文",
      "Social Innovation是Cedar招牌——Year 1/2全员上SIR课程，用design thinking解决真实议题（可持续发展、超老龄社会等）",
    ],
    goodFitEn: [
      "Girls passionate about Social Innovation as a structured curriculum — not just a CCA. SI applicants do a single-session performance task + interview, no prior experience needed",
      "Bandsmen on woodwind, brass, or percussion (piano alone won't qualify) — audition has two contrasting prepared pieces, instrumental scales, plus sight-reading",
      "Sporty girls competing in Badminton, Basketball, Netball, Table Tennis, Track and Field, or Volleyball — sports trial + interview",
    ],
    goodFitZh: [
      "对Social Innovation这门结构化课程（不只是CCA）有热情的女生——SI申请仅需一次性的performance task + 面试，无需相关经验",
      "管乐队学生（木管/铜管/打击；只会钢琴不算）——试音含两首对比风格的曲目 + 音阶 + 即兴视奏",
      "在羽毛球、篮球、篮网球、乒乓、田径、排球中有专项的女生——体育试训 + 面试",
    ],
    keySignalEn:
      "Cedar's DSA is narrow but focused: 3 categories only (Sports, Symphonic Band, Social Innovation). Social Innovation is the school's signature track — applicants need a single performance task + interview with no prior experience required. VCA IP feeds to VJC. PSLE must qualify for Posting Group 3 to enroll. Sports/Band trials run 1 Jul – 21 Aug 2026; SI tasks 20 Jul – 3 Aug; outcome by 28 Aug.",
    keySignalZh:
      "Cedar的DSA路径窄而专：仅3个类别（体育、管乐队、社会创新）。Social Innovation是Cedar招牌路径——申请人只需完成一次性performance task + 面试，无需相关经验。VCA IP直通VJC。PSLE须达Posting Group 3方可入读。体育/管乐队试训于2026年7月1日—8月21日；SI任务于7月20日—8月3日；录取通知8月28日前发出。",
    talentAreas: [
      "Social Innovation",
      "Symphonic Band",
      "Badminton",
      "Basketball",
      "Netball",
      "Table Tennis",
      "Track and Field",
      "Volleyball",
    ],
    sourceUrl: "https://www.cedargirlssec.moe.edu.sg/admissions/dsa-year-1-2027/",
  },
  {
    id: "sst",
    nameEn: "School of Science and Technology, Singapore",
    nameZh: "新科技中学",
    nameShort: "SST",
    date: "30 May 2026",
    dateZh: "2026年5月30日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["O-Level", "Specialised", "DSA-only", "Co-ed"],
    aboutEn: [
      "Founded 2010 — Singapore's only specialised independent school for Applied Learning in STEAM, located on the Ngee Ann Polytechnic campus at 1 Technology Drive (One-North / West)",
      "100% DSA admission — SST does NOT participate in the S1 Posting Exercise. Every S1 student enters through DSA, the same model as NUS High but at 4-year O-Level intensity rather than 6-year IP",
      "Tagline 'Shaping Passionate Innovators, The SST Way' — signature curriculum runs three pillars: ChangeMakers Programme (interdisciplinary innovation), Applied Subjects (theory→real-world projects), and Integrated Learning across STEAM",
      "1-to-1 Learning Device for every student from Sec 1 — SST was one of Singapore's earliest 1-to-1 device schools and the device is integrated into daily teaching, not a side tool",
      "SST-NP Integrated Diploma Programme creates a structured route from SST directly to Ngee Ann Polytechnic — students can move into a Poly diploma without the typical O-Level → JC → University path",
    ],
    aboutZh: [
      "2010年创立，全新加坡唯一专注STEAM应用学习的专门化独立学校，校址设在义安理工学院（NP）校园内，位于1 Technology Drive（启汇城 / 西部）",
      "100% DSA录取——SST完全不参加S1 Posting Exercise。所有中一新生通过DSA入学，与NUS High同模式，但课程是四年制O水准强度（非六年制IP）",
      "校训「Shaping Passionate Innovators, The SST Way」——招牌课程三大支柱：ChangeMakers Programme（跨学科创新）、Applied Subjects（理论→真实世界项目）、Integrated Learning（STEAM贯通学习）",
      "中一起1人1台学习设备——SST是新加坡最早实施1-to-1设备教学的学校之一，设备完全融入日常教学，不是附属工具",
      "SST-NP Integrated Diploma Programme为SST学生提供直通义安理工学院文凭课程的结构化路径，绕开传统的O水准→JC→大学路线",
    ],
    goodFitEn: [
      "Students who learn best by doing — SST's entire 4 years is project-based, interdisciplinary, real-world problem solving. There is no opt-out from this pedagogy if it doesn't suit your child",
      "STEAM-curious students without portfolios — SST explicitly admits applicants with no prior experience. The 2-phase selection tests how you think under pressure and how you collaborate, not what you've already built or won",
      "Families open to a Polytechnic pathway from the start — SST-NP Integrated Diploma is a direct route to Ngee Ann Poly. If your family is set on the JC → University track, SST may be a poor fit",
    ],
    goodFitZh: [
      "动手学习型学生——SST完整四年都是项目制、跨学科、真实世界问题解决。如果不适合你孩子，没有退出机制",
      "对STEAM有好奇心但无作品集的学生——SST明确接受无相关经验申请者。两阶段选拔考查的是高压下的思维方式与协作能力，不是过往作品或奖项",
      "从一开始就接受理工路径的家庭——SST-NP直通文凭课程是义安理工的固定通道。若家庭执意走JC→大学路线，SST并不合适",
    ],
    keySignalEn:
      "SST is the only school in Singapore that combines Applied Learning specialisation with 100% DSA intake at the O-Level level. The 2-phase selection is rigorous and distinctive: Phase 1 Written Test (23–24 Jun 2026, ~2 hrs face-to-face at SST) assesses real-world STEM problem-solving; Phase 2 STEAM Challenge (1 or 15 Aug 2026) is a group-based activity assessment. Results by 28 Aug 2026. The school formally states it will NOT consider external recommendations from individuals or organisations — selection is purely on internal criteria. DSA admits commit to their STEAM talent area from Year 1 to Year 4.",
    keySignalZh:
      "SST是全新加坡唯一在O水准层级结合应用学习专门化与100% DSA招生的学校。两阶段选拔严格且独特：Phase 1笔试（2026年6月23-24日，在SST校内2小时）考查真实世界STEM解题能力；Phase 2 STEAM Challenge（2026年8月1日或15日）是小组活动评估。录取结果8月28日前发出。学校官方明确声明不会考虑任何外部推荐——选拔完全基于内部标准。录取者须从Year 1到Year 4持续投入所选STEAM才能方向。",
    talentAreas: ["STEAM"],
    sourceUrl: "https://www.sst.edu.sg/student-admission/s1-dsa/",
  },
  {
    id: "yiss",
    nameEn: "Yusof Ishak Secondary School",
    nameZh: "尤索夫依萨中学",
    nameShort: "YISS",
    date: "30 May 2026",
    dateZh: "2026年5月30日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["O-Level", "Co-ed", "Government"],
    aboutEn: [
      "Government co-ed school at 8 Sumang Walk, Punggol (North-East)",
      "4-year O-Level track — no IP",
      "10 DSA talent areas across 4 domains: Leadership, Performing Arts, STEM, and Sports",
      "STEM and Robotics are both offered as DSA areas — uncommon at this scale in a mainstream O-Level school",
      "Most areas open to both boys and girls; only Basketball (Boys) and Softball (Girls) are gender-specific",
    ],
    aboutZh: [
      "位于榜鹅Sumang Walk的政府男女合校，地处东北部",
      "仅提供四年制O水准课程，无IP",
      "10个DSA才能方向，分布在4个领域：领导力、表演艺术、STEM、体育",
      "STEM和Robotics双双开放为DSA方向——这种规模的O水准主流学校中并不多见",
      "大多数项目男女通申；仅篮球（男生）和垒球（女生）按性别限定",
    ],
    goodFitEn: [
      "STEM/Robotics-leaning students who don't want a specialised school but still want a structured DSA pathway in tech",
      "Modern Dance applicants: selection accepts video submissions — useful for students who already have performance reels",
      "Punggol/Sengkang/Hougang families wanting a North-East O-Level school with broad DSA options across arts, leadership, STEM, and 5 sports",
    ],
    goodFitZh: [
      "对STEM/Robotics有倾向、不想读专门化学校但希望走结构化科技DSA路径的学生",
      "Modern Dance申请者：选拔接受视频投递——已有演出录像的学生有优势",
      "榜鹅/盛港/后港家庭希望就读东北部O水准学校、寻找艺术+领导力+STEM+5项体育广覆盖DSA选项的家庭",
    ],
    keySignalEn:
      "YISS gives a mainstream O-Level school the kind of STEM + Robotics DSA tracks usually only found in specialised or IP schools. Selection mixes panel interviews, individual assessment tasks, performance trials, video submissions (for Modern Dance), and e-portfolio reviews — so the format varies by talent area. Shortlist mid-July, selections through August, outcomes 17–28 Aug 2026. Admitted DSA students must commit to the chosen talent CCA/programme from Year 1 to Year 4.",
    keySignalZh:
      "YISS让一所主流O水准学校提供了通常只在专门化或IP学校才有的STEM + Robotics DSA路径。选拔混合小组面试、个人评估任务、表演试训、视频投递（Modern Dance）和电子作品集审核——形式按才能方向不同。Mid-Jul入围，整个8月做选拔，2026年8月17–28日发录取。录取者须从Year 1到Year 4持续参与所选才能CCA/项目。",
    talentAreas: [
      "Community Youth Leadership",
      "Modern Dance",
      "Robotics",
      "STEM",
      "Basketball (Boys)",
      "Table Tennis",
      "Wushu",
      "Badminton",
      "Fencing",
      "Softball (Girls)",
    ],
    sourceUrl: "https://www.yusofishaksec.moe.edu.sg/yi-experience/dsa/",
  },
];

function buildTalentFinderRows(schools: SchoolTakeaway[]): [string, string[]][] {
  const map = new Map<string, string[]>();
  for (const school of schools) {
    for (const area of school.talentAreas) {
      const base = area.replace(" ★ New 2026", "").trim();
      const list = map.get(base) ?? [];
      list.push(school.nameShort);
      map.set(base, list);
    }
  }
  return Array.from(map.entries()).sort(
    (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]),
  );
}

function TalentAreaPill({ label }: { label: string }) {
  const isNew = label.includes("★ New 2026");
  const displayLabel = label.replace(" ★ New 2026", "");

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-intellectual/10 bg-intellectual/5 px-2 py-0.5 text-xs text-intellectual">
      {displayLabel}
      {isNew && (
        <span className="rounded bg-champagne/25 px-1 py-px text-[10px] font-semibold text-champagne-dark">
          ★ 2026
        </span>
      )}
    </span>
  );
}

function SchoolCard({
  school,
  locale,
  aboutLabel,
  goodFitLabel,
  keySignalLabel,
  talentAreasLabel,
  officialLinkLabel,
}: {
  school: SchoolTakeaway;
  locale: string;
  aboutLabel: string;
  goodFitLabel: string;
  keySignalLabel: string;
  talentAreasLabel: string;
  officialLinkLabel: string;
}) {
  const isZh = locale === "zh";
  return (
    <article
      id={`school-${school.id}`}
      className="rounded-2xl border border-intellectual/10 bg-card-shine p-5 shadow-sm ring-1 ring-champagne/15 sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <SchoolLogo
            schoolId={SCHOOL_SLUG_BY_ID[school.id]}
            nameEn={school.nameEn}
            size={44}
          />
          <div>
            <h2 className="font-display text-lg font-semibold text-intellectual sm:text-xl">
              {isZh ? school.nameZh : school.nameEn}
            </h2>
            <p className="mt-1 text-xs text-intellectual-muted">
              {isZh ? school.dateZh : school.date}
              <span className="mx-1.5">·</span>
              {isZh ? school.eventTypeZh : school.eventType}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {school.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-champagne/30 bg-champagne/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-champagne-dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* About the school */}
      <div className="mt-4">
        <p className="mb-1.5 text-[10px] font-semibold tracking-[0.12em] text-intellectual/40">
          {aboutLabel}
        </p>
        <ul className="space-y-1">
          {(isZh ? school.aboutZh : school.aboutEn).map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-intellectual-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne-dark" aria-hidden />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 rounded-xl border border-champagne/20 bg-champagne/6 p-3.5">
        <p className="mb-1 text-[10px] font-semibold tracking-[0.12em] text-champagne-dark">
          {keySignalLabel}
        </p>
        <p className="text-sm leading-relaxed text-intellectual">
          {isZh ? school.keySignalZh : school.keySignalEn}
        </p>
      </div>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold tracking-[0.12em] text-champagne-dark">
          {talentAreasLabel}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {school.talentAreas.map((area) => (
            <TalentAreaPill key={area} label={area} />
          ))}
        </div>
      </div>

      {/* Good Fit For */}
      <div className="mt-4">
        <p className="mb-2 text-[10px] font-semibold tracking-[0.12em] text-intellectual/40">
          {goodFitLabel}
        </p>
        <ul className="space-y-1.5">
          {(isZh ? school.goodFitZh : school.goodFitEn).map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-intellectual-muted">
              <span className="mt-0.5 shrink-0 text-champagne-dark font-semibold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={school.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-intellectual px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light"
      >
        {officialLinkLabel}
        <ExternalLink className="h-4 w-4" aria-hidden />
      </a>
    </article>
  );
}

export function OpenHouseTakeawaysBody() {
  const { locale, t } = useLanguage();
  const talentRows = useMemo(() => buildTalentFinderRows(SCHOOLS), []);

  const bcHere =
    locale === "zh" ? "开放日笔记" :
    locale === "ms" ? "Catatan Open House" :
    locale === "ta" ? "திறந்த நாள் குறிப்புகள்" :
    "Open House Takeaways";

  return (
    <>
      <Breadcrumb
        items={[
          { label: t.navDsaGuide, href: "/dsa-guide" },
          { label: bcHere },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Hero */}
      <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-champagne-dark">
        {t.ohTakeawaysKicker}
      </p>
      <h1 className="mb-3 font-display text-2xl font-semibold text-intellectual sm:text-3xl">
        {t.ohTakeawaysTitle}
      </h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
        {t.ohTakeawaysSubtitle}
      </p>

      {/* School cards */}
      <div className="space-y-6">
        {SCHOOLS.map((school) => (
          <SchoolCard
            key={school.id}
            school={school}
            locale={locale}
            aboutLabel={t.ohTakeawaysAbout}
            goodFitLabel={t.ohTakeawaysGoodFit}
            keySignalLabel={t.ohTakeawaysKeySignal}
            talentAreasLabel={t.ohTakeawaysTalentAreas}
            officialLinkLabel={t.ohTakeawaysOfficialLink}
          />
        ))}
      </div>

      {/* Talent Area Finder */}
      <section className="mt-16" aria-labelledby="talent-finder-heading">
        <div className="mb-6 border-b border-intellectual/10 pb-4">
          <p className="text-xs font-semibold tracking-[0.14em] text-champagne-dark">
            {t.ohTakeawaysTalentFinderTitle}
          </p>
          <p className="mt-1 text-sm text-intellectual-muted">
            {t.ohTakeawaysTalentFinderSubtitle}
          </p>
        </div>
        <div className="divide-y divide-intellectual/8 rounded-2xl border border-intellectual/10 bg-card-shine shadow-sm ring-1 ring-champagne/10">
          {talentRows.map(([area, schools]) => (
            <div
              key={area}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-1 px-5 py-3 sm:gap-x-6"
            >
              <span className="w-full text-sm font-semibold text-intellectual sm:w-48 sm:shrink-0">
                {area}
              </span>
              <span className="text-xs text-intellectual-muted">
                <span className="mr-2 font-medium text-champagne-dark">
                  {schools.length}×
                </span>
                {schools.join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* What's Next */}
      <div className="mt-14 rounded-2xl border border-champagne/25 bg-champagne/8 p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-intellectual sm:text-2xl">
          {t.ohTakeawaysWhatsNextTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-intellectual-muted sm:text-base">
          {t.ohTakeawaysWhatsNextBody}
        </p>
        <p className="mt-3 text-xs font-semibold text-champagne-dark">
          {t.ohTakeawaysDeadlineLabel}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://www.moe.gov.sg/secondary/dsa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light"
          >
            {t.ohTakeawaysApplyBtn}
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-5 border-t border-intellectual/10 pt-5">
          <Link
            href="/open-house-guide"
            className="text-sm font-medium text-champagne-dark transition hover:underline"
          >
            → {locale === "zh" ? "开放日参观指南" : locale === "ms" ? "Panduan Hari Terbuka" : locale === "ta" ? "திறந்த நாள் வழிகாட்டி" : "Open House Visit Guide"}
          </Link>
          <Link
            href="/dsa-interview"
            className="text-sm font-medium text-champagne-dark transition hover:underline"
          >
            → {locale === "zh" ? "选拔面试/测试准备" : locale === "ms" ? "Persediaan Ujian Pemilihan" : locale === "ta" ? "தேர்வு தயாரிப்பு" : "Selection Trial Prep"}
          </Link>
          <Link
            href="/apply"
            className="text-sm font-medium text-champagne-dark transition hover:underline"
          >
            → {locale === "zh" ? "查看申请清单" : locale === "ms" ? "Senarai semak permohonan" : locale === "ta" ? "விண்ணப்ப சரிபார்ப்பு பட்டியல்" : "Application Checklist"}
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
