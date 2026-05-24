"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

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
        <div className="flex flex-wrap gap-1.5">
          {school.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-champagne/30 bg-champagne/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-champagne-dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* About the school */}
      <div className="mt-4">
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-intellectual/40">
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
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-champagne-dark">
          {keySignalLabel}
        </p>
        <p className="text-sm leading-relaxed text-intellectual">
          {isZh ? school.keySignalZh : school.keySignalEn}
        </p>
      </div>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-champagne-dark">
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
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-intellectual/40">
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

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Hero */}
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-champagne-dark">
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
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne-dark">
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
        </div>
      </div>
    </div>
  );
}
