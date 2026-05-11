import dsaMasterRaw from "@/data/dsa_master_list.json";
import { getSiteUrl } from "@/lib/seo";

type Category = "Sports" | "Arts" | "STEM" | "Leadership" | "Languages";

type DsaTalent = {
  category: Category;
  area: string;
  description: string;
};

type DsaSchool = {
  id: string;
  schoolName: string;
  slug: string;
  openHouse: {
    link: string;
  };
  dsaTalents: DsaTalent[];
};

type TalentStructuredGroup = {
  area: string;
  category: Category;
  schools: DsaSchool[];
};

const CATEGORIES: Category[] = ["Sports", "Arts", "STEM", "Leadership", "Languages"];
const HOT_TALENT_AREAS = [
  "Concert Band",
  "Robotics",
  "Wushu",
  "Football",
  "Basketball",
  "Chinese Orchestra",
];
const SCHOOLS = dsaMasterRaw as DsaSchool[];

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function slugify(value: string): string {
  return normalize(value).replace(/\s+/g, "-");
}

function buildTalentGroups(): TalentStructuredGroup[] {
  const groups = new Map<string, TalentStructuredGroup>();

  for (const school of SCHOOLS) {
    for (const talent of school.dsaTalents) {
      const key = `${talent.category}::${normalize(talent.area)}`;
      const group =
        groups.get(key) ??
        ({
          area: talent.area,
          category: talent.category,
          schools: [],
        } satisfies TalentStructuredGroup);
      group.schools.push(school);
      groups.set(key, group);
    }
  }

  return [...groups.values()].sort((a, b) => {
    if (b.schools.length !== a.schools.length) return b.schools.length - a.schools.length;
    return a.area.localeCompare(b.area, "en");
  });
}

export function buildDsaFinderStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const finderUrl = `${base}/dsa-finder`;
  const pageId = `${finderUrl}#webpage`;
  const datasetId = `${finderUrl}#dsa-2026-dataset`;
  const talentGroups = buildTalentGroups();
  const groupsByArea = new Map(talentGroups.map((group) => [normalize(group.area), group]));

  const categoryLists = CATEGORIES.map((category) => {
    const groups = talentGroups.filter((group) => group.category === category);
    return {
      "@type": "ItemList",
      "@id": `${finderUrl}#category-${slugify(category)}`,
      name: `${category} DSA 2026 talent areas`,
      description: `Official MOE SchoolFinder DSA 2026 ${category} talent areas across Singapore secondary schools.`,
      numberOfItems: groups.length,
      isPartOf: { "@id": datasetId },
      itemListElement: groups.map((group, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "DefinedTerm",
          "@id": `${finderUrl}#talent-${slugify(group.area)}`,
          name: group.area,
          description: `${group.schools.length} schools list ${group.area} under ${category} for DSA 2026.`,
          inDefinedTermSet: {
            "@type": "DefinedTermSet",
            name: `${category} DSA talent areas`,
          },
          url: `${finderUrl}?category=${encodeURIComponent(category)}&talent=${encodeURIComponent(group.area)}`,
        },
      })),
    };
  });

  const seededHotGroups = HOT_TALENT_AREAS.flatMap((area) => {
    const group = groupsByArea.get(normalize(area));
    return group ? [group] : [];
  });
  const popularGroups = [...seededHotGroups, ...talentGroups.slice(0, 8)].filter(
    (group, index, all) => all.findIndex((item) => normalize(item.area) === normalize(group.area)) === index,
  );

  const popularTalentLists = popularGroups.map((group) => ({
    "@type": "ItemList",
    "@id": `${finderUrl}#schools-for-${slugify(group.area)}`,
    name: `Schools offering ${group.area} DSA 2026`,
    description: `Singapore secondary schools offering ${group.area} under DSA 2026, with DSALink school comparison context.`,
    numberOfItems: group.schools.length,
    isPartOf: { "@id": pageId },
    itemListElement: group.schools.map((school, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationalOrganization",
        "@id": `${finderUrl}#school-${school.slug}`,
        name: school.schoolName,
        url: school.openHouse.link || finderUrl,
        description: `${school.schoolName} lists ${group.area} as a DSA 2026 talent area.`,
      },
    })),
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        name: "DSA 2026 Talent Areas: 1315 Categories Across 147 Schools",
        url: finderUrl,
        description:
          "Find schools for Concert Band, Robotics, and 1300+ DSA talents. Integrated with 2025 PSLE COP data.",
        mainEntity: { "@id": datasetId },
      },
      {
        "@type": "Dataset",
        "@id": datasetId,
        name: "DSALink DSA 2026 talent areas and school list",
        description:
          "Structured directory of official MOE SchoolFinder DSA 2026 talent areas across 147 Singapore secondary schools.",
        url: finderUrl,
        keywords: ["DSA 2026", "Concert Band", "Robotics", "Wushu", "PSLE COP"],
        variableMeasured: {
          "@type": "PropertyValue",
          name: "DSA talent area",
          value: "1,315 talent entries across 147 schools",
        },
      },
      ...categoryLists,
      ...popularTalentLists,
    ],
  };
}
