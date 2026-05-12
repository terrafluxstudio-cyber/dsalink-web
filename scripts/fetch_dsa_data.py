#!/usr/bin/env python3
"""
Fetch DSA talent areas for Singapore secondary schools and update:

    data/dsa_master_list.json

The script uses the public data.gov.sg MOE school directory to enumerate
secondary schools, then tries to scrape DSA / Talent Areas from:

1. MOE SchoolFinder detail pages
2. Known school DSA / admissions deep links from scripts/dsa-source-cache.json
3. Existing open-house source links when available

Install dependencies:

    python3 -m pip install beautifulsoup4 requests

Recommended run:

    python3 scripts/fetch_dsa_data.py --delay 1.5

Use --dry-run and --limit while iterating to avoid unnecessary requests:

    python3 scripts/fetch_dsa_data.py --limit 5 --dry-run
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterable
from urllib.parse import quote, urlparse

requests: Any = None
BeautifulSoup: Any = None
Tag: Any = object


ROOT = Path(__file__).resolve().parents[1]
MASTER_JSON = ROOT / "data" / "dsa_master_list.json"
DSA_CACHE_JSON = ROOT / "scripts" / "dsa-source-cache.json"
LOCAL_OPEN_HOUSES_TS = ROOT / "lib" / "school-open-houses.ts"

DATA_GOV_RESOURCE_ID = "d_688b934f82c1059ed0a6993d2a829089"
DATA_GOV_API = "https://data.gov.sg/api/action/datastore_search"
MOE_SCHOOLFINDER_DETAIL = "https://www.moe.gov.sg/schoolfinder/schooldetail"
MOE_DSA_SCHOOL_CHOOSER = (
    "https://www.moe.gov.sg/secondary/dsa/eligibility/choose-a-dsa-sec-school"
)
SCHOOLFINDER_DSA_URL = (
    "https://www.moe.gov.sg/schoolfinder/secondary%20school"
    "?admissions=%7B%22value%22%3A%22DSA%22%7D"
)

OFFICIAL_DSA_CATEGORY_MAP = {
    166: "Leadership",
    167: "Arts",
    168: "STEM",
    169: "Sports",
    170: "Languages",
    171: "STEM",
    172: "Arts",
}

DEFAULT_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (compatible; DSALinkDataBot/0.1; "
        "+https://dsalink.sg; data collection for parent reference)"
    ),
    "Accept": "text/html,application/xhtml+xml,application/xml,application/json;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-SG,en;q=0.9",
}


def ensure_dependencies() -> None:
    global requests, BeautifulSoup, Tag
    try:
        import requests as requests_mod
        from bs4 import BeautifulSoup as beautiful_soup_cls
        from bs4 import Tag as tag_cls
    except ImportError as exc:  # pragma: no cover - helpful CLI failure
        raise SystemExit(
            "Missing dependency. Install with:\n"
            "  python3 -m pip install beautifulsoup4 requests"
        ) from exc

    requests = requests_mod
    BeautifulSoup = beautiful_soup_cls
    Tag = tag_cls


@dataclass(frozen=True)
class SchoolRow:
    school_name: str
    slug: str
    website: str | None


def slugify(name: str) -> str:
    return (
        name.lower()
        .replace("&", "and")
        .replace("'", "")
        .replace(".", "")
        .replace(",", "")
        .replace("(", " ")
        .replace(")", " ")
        .replace("/", " ")
        .replace("secondary", "")
        .strip()
    )


def canonical_slug(name: str) -> str:
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", slugify(name))).strip("-")


def title_case_school_name(name: str) -> str:
    # data.gov.sg rows are usually uppercase. Keep important acronyms readable.
    text = name.lower()
    text = re.sub(r"\b\w", lambda m: m.group(0).upper(), text)
    replacements = {
        "Chij": "CHIJ",
        "Nus": "NUS",
        "Sota": "SOTA",
        "Sst": "SST",
        " St ": " St. ",
        "Govt.": "Govt.",
        " Of ": " of ",
        " And ": " and ",
        " The ": " the ",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    text = re.sub(r"'S\b", "'s", text)
    return re.sub(r"\s+", " ", text).strip()


def normalize_name(name: str) -> str:
    return re.sub(
        r"\s+",
        " ",
        re.sub(r"[^A-Z0-9 ]+", " ", re.sub(r"\([^)]*\)", "", name.upper())),
    ).strip()


def is_secondary_row(row: dict[str, Any]) -> bool:
    level = str(row.get("mainlevel_code", ""))
    return "SECONDARY" in level or level.startswith("MIXED LEVEL")


def request_json(session: Any, url: str, params: dict[str, Any], timeout: float) -> Any:
    res = session.get(url, params=params, headers=DEFAULT_HEADERS, timeout=timeout)
    res.raise_for_status()
    return res.json()


def fetch_school_rows(session: Any, delay: float, timeout: float) -> list[SchoolRow]:
    first = request_json(
        session,
        DATA_GOV_API,
        {"resource_id": DATA_GOV_RESOURCE_ID, "limit": 1},
        timeout,
    )
    total = int(first["result"]["total"])
    rows: list[dict[str, Any]] = []
    for offset in range(0, total, 100):
        payload = request_json(
            session,
            DATA_GOV_API,
            {
                "resource_id": DATA_GOV_RESOURCE_ID,
                "limit": 100,
                "offset": offset,
            },
            timeout,
        )
        rows.extend(payload["result"]["records"])
        time.sleep(delay)

    schools: list[SchoolRow] = []
    for row in rows:
        if not is_secondary_row(row):
            continue
        school_name = title_case_school_name(str(row["school_name"]))
        schools.append(
            SchoolRow(
                school_name=school_name,
                slug=canonical_slug(school_name),
                website=normalise_url(str(row.get("url_address") or "")) or None,
            )
        )

    # Keep IDs stable and predictable.
    return sorted(schools, key=lambda s: s.school_name)


def decode_next_rsc_chunks(html: str) -> str:
    chunks: list[str] = []
    for match in re.finditer(r"self\.__next_f\.push\((.*?)\)</script>", html):
        payload = json.loads(match.group(1))
        if len(payload) > 1 and isinstance(payload[1], str):
            chunks.append(payload[1])
    return "".join(chunks)


def extract_balanced_json_value(text: str, key: str) -> Any:
    start = text.find(key)
    if start < 0:
        raise ValueError(f"Could not find {key} in MOE SchoolFinder payload")
    start += len(key)

    depth = 0
    in_string = False
    escaped = False
    for index in range(start, len(text)):
        char = text[index]
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
            continue

        if char == '"':
            in_string = True
        elif char in "[{":
            depth += 1
        elif char in "]}":
            depth -= 1
            if depth == 0:
                return json.loads(text[start : index + 1])

    raise ValueError(f"Could not parse complete JSON value for {key}")


def fetch_schoolfinder_dsa_schools(session: Any, timeout: float) -> list[dict[str, Any]]:
    res = session.get(SCHOOLFINDER_DSA_URL, headers=DEFAULT_HEADERS, timeout=timeout)
    res.raise_for_status()
    rsc = decode_next_rsc_chunks(res.text)
    schools = extract_balanced_json_value(rsc, '"schools":')
    if not isinstance(schools, list):
        raise ValueError("MOE SchoolFinder schools payload is not a list")
    return schools


def school_rows_from_schoolfinder(schools: list[dict[str, Any]]) -> list[SchoolRow]:
    rows: list[SchoolRow] = []
    for school in schools:
        name = str(school.get("school_name") or "").strip()
        slug = str(school.get("slug") or canonical_slug(name)).strip()
        if not name or not slug:
            continue
        rows.append(
            SchoolRow(
                school_name=title_case_school_name(name),
                slug=slug,
                website=normalise_url(str(school.get("school_website_url") or "")) or None,
            )
        )
    return sorted(rows, key=lambda s: s.school_name)


def format_official_talent_description(item: dict[str, Any]) -> str:
    audience: list[str] = []
    if item.get("girls") == "Y":
        audience.append("girls")
    if item.get("boys") == "Y":
        audience.append("boys")
    tracks: list[str] = []
    if item.get("olevel") == "Y":
        tracks.append("SEC")
    if item.get("ip") == "Y":
        tracks.append("IP")

    qualifiers = []
    if audience:
        qualifiers.append(f"for {' and '.join(audience)}")
    if tracks:
        qualifiers.append(f"track: {'/'.join(tracks)}")
    suffix = f" ({'; '.join(qualifiers)})" if qualifiers else ""
    return f"Official MOE SchoolFinder DSA talent area{suffix}."


def talents_from_schoolfinder_school(school: dict[str, Any]) -> list[dict[str, str]]:
    talents: list[dict[str, str]] = []
    for offered in school.get("dsa_offered") or []:
        if not isinstance(offered, dict):
            continue
        item = offered.get("item")
        if not isinstance(item, dict):
            continue
        area = clean_area(
            str(item.get("dsa_talent_area") or item.get("talent_area_title") or "")
        )
        if not area:
            continue
        category = OFFICIAL_DSA_CATEGORY_MAP.get(item.get("dsa_main_category")) or map_category(area)
        if category not in {"Sports", "Arts", "STEM", "Leadership", "Languages"}:
            continue
        talents.append(
            {
                "category": category,
                "area": area,
                "description": format_official_talent_description(item),
            }
        )
    return dedupe_talents(talents)


def dedupe_talents(talents: Iterable[dict[str, str]]) -> list[dict[str, str]]:
    seen: set[tuple[str, str]] = set()
    out: list[dict[str, str]] = []
    for talent in talents:
        key = (talent["category"].lower(), talent["area"].lower())
        if key in seen:
            continue
        seen.add(key)
        out.append(talent)
    return out


def scrape_schoolfinder_dataset(
    session: Any,
    *,
    timeout: float,
) -> tuple[list[SchoolRow], dict[str, tuple[list[dict[str, str]], str | None]]]:
    schools_payload = fetch_schoolfinder_dsa_schools(session, timeout)
    rows = school_rows_from_schoolfinder(schools_payload)
    scraped: dict[str, tuple[list[dict[str, str]], str | None]] = {}
    for school in schools_payload:
        slug = str(school.get("slug") or canonical_slug(str(school.get("school_name") or "")))
        scraped[slug] = (talents_from_schoolfinder_school(school), SCHOOLFINDER_DSA_URL)
    return rows, scraped


def load_local_school_rows(path: Path) -> list[SchoolRow]:
    if not path.exists():
        return []
    text = path.read_text("utf-8")
    blocks = re.finditer(
        r"id:\s*\"([^\"]+)\"[\s\S]*?nameEn:\s*\"([^\"]+)\"[\s\S]*?sourceUrl:\s*\"([^\"]*)\"",
        text,
    )
    schools = [
        SchoolRow(
            school_name=title_case_school_name(m.group(2).replace("St..", "St.")),
            slug=m.group(1),
            website=normalise_url(m.group(3)) or None,
        )
        for m in blocks
    ]
    return sorted(schools, key=lambda s: s.school_name)


def normalise_url(raw: str) -> str:
    value = raw.strip()
    if not value:
        return ""
    if not value.startswith(("http://", "https://")):
        value = f"https://{value}"
    return value


def load_json(path: Path, default: Any) -> Any:
    try:
        return json.loads(path.read_text("utf-8"))
    except FileNotFoundError:
        return default


def load_existing_master(path: Path) -> dict[str, dict[str, Any]]:
    rows = load_json(path, [])
    if not isinstance(rows, list):
        raise ValueError(f"{path} must contain a JSON array")
    by_slug: dict[str, dict[str, Any]] = {}
    for row in rows:
        if isinstance(row, dict) and row.get("slug"):
            by_slug[str(row["slug"])] = row
    return by_slug


def load_dsa_source_cache(path: Path) -> dict[str, str]:
    raw = load_json(path, {})
    if not isinstance(raw, dict):
        return {}
    return {str(k): str(v) for k, v in raw.items()}


def host_for_url(url: str | None) -> str | None:
    if not url:
        return None
    parsed = urlparse(normalise_url(url))
    host = parsed.netloc.lower()
    if host and not host.startswith("www."):
        host = f"www.{host}"
    return host or None


def fetch_html(
    session: Any,
    url: str,
    *,
    delay: float,
    retries: int,
    timeout: float,
) -> str | None:
    for attempt in range(retries + 1):
        try:
            res = session.get(url, headers=DEFAULT_HEADERS, timeout=timeout)
            if res.status_code in {403, 404, 429}:
                return None
            res.raise_for_status()
            time.sleep(delay)
            return res.text
        except requests.RequestException:
            if attempt >= retries:
                return None
            time.sleep(delay * (attempt + 1))
    return None


def candidate_urls(school: SchoolRow, dsa_cache: dict[str, str]) -> list[str]:
    urls: list[str] = []
    schoolfinder_slug = quote(school.slug)
    schoolfinder_name = quote(school.school_name.lower().replace(" ", "-"))
    urls.extend(
        [
            f"{MOE_SCHOOLFINDER_DETAIL}?schoolname={schoolfinder_name}",
            f"{MOE_SCHOOLFINDER_DETAIL}/{schoolfinder_slug}",
            MOE_DSA_SCHOOL_CHOOSER,
        ]
    )

    host = host_for_url(school.website)
    if host and host in dsa_cache:
        urls.append(dsa_cache[host])
    if school.website:
        urls.append(school.website)

    seen: set[str] = set()
    unique: list[str] = []
    for url in urls:
        if url and url not in seen:
            unique.append(url)
            seen.add(url)
    return unique


def visible_text(node: Any) -> str:
    return re.sub(r"\s+", " ", node.get_text(" ", strip=True)).strip()


def nearby_dsa_context(tag: Any) -> bool:
    text_parts: list[str] = []
    current: Any | None = tag
    for _ in range(4):
        if current is None:
            break
        text_parts.append(visible_text(current)[:1200])
        parent = current.parent
        current = parent if isinstance(parent, Tag) else None
    text = " ".join(text_parts)
    return bool(re.search(r"Direct School Admission|DSA|Talent Areas?", text, re.I))


def clean_area(area: str) -> str:
    value = re.sub(r"\s+", " ", area).strip(" :-–—\t\n\r")
    value = re.sub(r"^(Talent Area|Area|Category|Domain)\s*[:\-–—]\s*", "", value, flags=re.I)
    return value[:120].strip()


def split_candidate_areas(text: str) -> list[str]:
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r"(?i)\b(DSA|Direct School Admission|Talent Areas?|Category|Domain)\b", " ", text)
    parts = re.split(r"\s*(?:,|;|\||/|\band\b|•|·)\s*", text)
    return [clean_area(p) for p in parts if 2 <= len(clean_area(p)) <= 80]


def extract_from_tables(soup: BeautifulSoup) -> list[str]:
    areas: list[str] = []
    for table in soup.find_all("table"):
        if not isinstance(table, Tag) or not nearby_dsa_context(table):
            continue
        for row in table.find_all("tr"):
            cells = [visible_text(c) for c in row.find_all(["th", "td"])]
            if not cells:
                continue
            joined = " | ".join(cells)
            if re.search(r"Selection|Criteria|Process|Date|Schedule|Application|Deadline", joined, re.I):
                continue
            # Prefer the first meaningful cell; many school tables list category in column 1.
            for cell in cells[:2]:
                for area in split_candidate_areas(cell):
                    if looks_like_talent_area(area):
                        areas.append(area)
    return areas


def extract_from_lists_and_headings(soup: BeautifulSoup) -> list[str]:
    areas: list[str] = []
    for tag in soup.find_all(["li", "p", "h2", "h3", "h4", "h5"]):
        if not isinstance(tag, Tag) or not nearby_dsa_context(tag):
            continue
        text = visible_text(tag)
        if not looks_like_talent_area(text):
            continue
        for area in split_candidate_areas(text):
            if looks_like_talent_area(area):
                areas.append(area)
    return areas


def looks_like_talent_area(text: str) -> bool:
    if not text or len(text) > 100:
        return False
    noise = re.search(
        r"Application|Applicants?|Parents?|Students?|Selection|Interview|Audition|"
        r"Trial|Shortlisted|Portal|Deadline|Submit|Click here|MOE website|"
        r"Eligibility|Criteria|Schedule|Outcome|FAQ|Contact",
        text,
        re.I,
    )
    if noise:
        return False
    return bool(map_category(text) != "Others" or re.search(r"Leadership|Bilingualism|Humanities", text, re.I))


def dedupe_preserve_order(items: Iterable[str]) -> list[str]:
    seen: set[str] = set()
    out: list[str] = []
    for item in items:
        key = item.lower()
        if key not in seen:
            seen.add(key)
            out.append(item)
    return out


SPORTS_KEYWORDS = {
    "athletics",
    "badminton",
    "basketball",
    "bowling",
    "canoeing",
    "cricket",
    "cross country",
    "fencing",
    "floorball",
    "football",
    "golf",
    "gymnastics",
    "hockey",
    "judo",
    "netball",
    "rugby",
    "sailing",
    "shooting",
    "softball",
    "squash",
    "swimming",
    "table tennis",
    "tennis",
    "track",
    "volleyball",
    "water polo",
    "wushu",
}

ARTS_KEYWORDS = {
    "art",
    "aep",
    "band",
    "choir",
    "chinese dance",
    "chinese orchestra",
    "concert band",
    "dance",
    "drama",
    "guitar",
    "indian dance",
    "malay dance",
    "mep",
    "music",
    "orchestra",
    "performing arts",
    "string ensemble",
    "visual arts",
}

STEM_KEYWORDS = {
    "coding",
    "computing",
    "engineering",
    "infocomm",
    "innovation",
    "mathematics",
    "robotics",
    "science",
    "steam",
    "stem",
    "technology",
}

LANGUAGE_KEYWORDS = {
    "bilingual",
    "bilingualism",
    "chinese language",
    "communication",
    "debate",
    "english",
    "humanities",
    "language",
    "malay language",
    "tamil language",
}


def map_category(area: str) -> str:
    value = area.lower()
    if any(k in value for k in SPORTS_KEYWORDS):
        return "Sports"
    if any(k in value for k in ARTS_KEYWORDS):
        return "Arts"
    if any(k in value for k in STEM_KEYWORDS):
        return "STEM"
    if "leadership" in value or "uniformed" in value:
        return "Leadership"
    if any(k in value for k in LANGUAGE_KEYWORDS):
        return "Languages"
    return "Others"


def fallback_talent(source_url: str | None) -> dict[str, str]:
    source = source_url or "official DSA / admissions page"
    return {
        "category": "Leadership",
        "area": "School-based DSA (verify)",
        "description": (
            "No specific talent area was parsed automatically from asynchronous "
            f"MOE/school pages; verify details at {source}"
        ),
    }


def extract_from_embedded_data(html: str) -> list[str]:
    """Pull talent strings out of JSON blobs used by async MOE/school pages."""
    decoded = html.replace("\\u0026", "&").replace("\\/", "/")
    candidates: list[str] = []
    for match in re.finditer(r'"([^"]{2,120})"', decoded):
        value = clean_area(match.group(1))
        if looks_like_talent_area(value):
            candidates.extend(split_candidate_areas(value))
    return [area for area in candidates if looks_like_talent_area(area)]


def scrape_talents_from_html(html: str, source_url: str) -> list[dict[str, str]]:
    soup = BeautifulSoup(html, "html.parser")
    raw_areas = extract_from_embedded_data(html)
    for tag in soup(["script", "style", "noscript", "svg"]):
        tag.decompose()

    raw_areas = dedupe_preserve_order(
        [*raw_areas, *extract_from_tables(soup), *extract_from_lists_and_headings(soup)]
    )
    talents: list[dict[str, str]] = []
    for area in raw_areas:
        category = map_category(area)
        if category == "Others":
            continue
        talents.append(
            {
                "category": category,
                "area": area,
                "description": f"Scraped from official source; verify details at {source_url}",
            }
        )
    return talents


def scrape_talents_for_school(
    session: Any,
    school: SchoolRow,
    dsa_cache: dict[str, str],
    *,
    delay: float,
    retries: int,
    timeout: float,
) -> tuple[list[dict[str, str]], str | None]:
    for url in candidate_urls(school, dsa_cache):
        html = fetch_html(session, url, delay=delay, retries=retries, timeout=timeout)
        if not html:
            continue
        talents = scrape_talents_from_html(html, url)
        if talents:
            return talents, url
    return [], None


def default_open_house(existing: dict[str, Any] | None, source_url: str | None, website: str | None) -> dict[str, Any]:
    current = (existing or {}).get("openHouse")
    link = source_url or MOE_DSA_SCHOOL_CHOOSER
    if isinstance(current, dict):
        current_link = current.get("link")
        return {
            "date": current.get("date"),
            "link": current_link if current_link and current_link != MOE_DSA_SCHOOL_CHOOSER else link,
        }
    return {"date": None, "link": link}


def build_master_rows(
    schools: list[SchoolRow],
    existing_by_slug: dict[str, dict[str, Any]],
    scraped: dict[str, tuple[list[dict[str, str]], str | None]],
) -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    for index, school in enumerate(schools, start=1):
        existing = existing_by_slug.get(school.slug, {})
        talents, source_url = scraped.get(school.slug, ([], None))
        official_empty = source_url == SCHOOLFINDER_DSA_URL and not talents
        if not talents and not official_empty:
            talents = existing.get("dsaTalents") if isinstance(existing.get("dsaTalents"), list) else []
        if not talents and not official_empty:
            talents = [fallback_talent(source_url or school.website or MOE_DSA_SCHOOL_CHOOSER)]

        rows.append(
            {
                "id": existing.get("id") or f"S{index:03d}",
                "schoolName": school.school_name,
                "slug": school.slug,
                "psleCop": existing.get("psleCop")
                or {
                    "pg1": None,
                    "pg2": None,
                    "pg3": None,
                    "affiliated": {"pg1": None, "pg2": None, "pg3": None},
                },
                "openHouse": default_open_house(existing, source_url, school.website),
                "dsaTalents": talents,
            }
        )
    return rows


def validate_critical_targets(rows: list[dict[str, Any]]) -> None:
    by_name = {normalize_name(str(row.get("schoolName", ""))): row for row in rows}
    ri = by_name.get("RAFFLES INSTITUTION")
    crest = by_name.get("CREST SECONDARY SCHOOL")

    if not ri or len(ri.get("dsaTalents") or []) <= 10:
        count = len(ri.get("dsaTalents") or []) if ri else 0
        raise ValueError(f"Critical check failed: Raffles Institution has {count} DSA talents")

    crest_areas = [
        str(talent.get("area", ""))
        for talent in (crest or {}).get("dsaTalents", [])
        if isinstance(talent, dict)
    ]
    if not crest or not any(area.lower() == "football" for area in crest_areas):
        raise ValueError("Critical check failed: Crest Secondary School is missing Football")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Fetch DSA talent areas into data/dsa_master_list.json")
    parser.add_argument("--output", type=Path, default=MASTER_JSON, help="Output JSON path")
    parser.add_argument("--delay", type=float, default=1.5, help="Delay between HTTP requests (seconds)")
    parser.add_argument("--retries", type=int, default=1, help="Retries per page")
    parser.add_argument("--timeout", type=float, default=8.0, help="Per-request timeout in seconds")
    parser.add_argument("--limit", type=int, default=0, help="Limit number of schools for testing")
    parser.add_argument("--school", default="", help="Only process schools whose name contains this text")
    parser.add_argument("--expected-count", type=int, default=147, help="Warn if final row count differs")
    parser.add_argument(
        "--engine",
        choices=("schoolfinder", "legacy", "auto"),
        default="schoolfinder",
        help="Use MOE SchoolFinder hydrated DSA data, legacy per-school scraping, or auto fallback",
    )
    parser.add_argument("--dry-run", action="store_true", help="Print summary without writing JSON")
    parser.add_argument(
        "--skip-scrape",
        action="store_true",
        help="Build a coverage-safe 147-school master list without per-school HTTP scraping",
    )
    parser.add_argument(
        "--keep-existing-talents",
        action="store_true",
        help="Do not overwrite existing dsaTalents when a row already has values",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    ensure_dependencies()
    session = requests.Session()
    existing_by_slug = load_existing_master(args.output)
    dsa_cache = load_dsa_source_cache(DSA_CACHE_JSON)

    scraped: dict[str, tuple[list[dict[str, str]], str | None]] = {}

    if args.engine in {"schoolfinder", "auto"}:
        print("Fetching MOE SchoolFinder DSA data...")
        try:
            schools, scraped = scrape_schoolfinder_dataset(session, timeout=args.timeout)
            print(f"Loaded {len(schools)} schools from MOE SchoolFinder hydrated data.")
        except Exception as exc:
            if args.engine == "schoolfinder":
                raise
            schools = []
            print(
                f"Warning: failed to parse MOE SchoolFinder data ({exc.__class__.__name__}: {exc}); "
                "falling back to legacy scraping.",
                file=sys.stderr,
            )
    else:
        schools = []

    if not schools:
        print("Fetching official secondary school list...")
        try:
            schools = fetch_school_rows(session, args.delay, args.timeout)
        except requests.RequestException as exc:
            schools = []
            print(
                f"Warning: failed to fetch data.gov.sg list ({exc.__class__.__name__}: {exc}); "
                "using local 2026 school fallback.",
                file=sys.stderr,
            )
        local_schools = load_local_school_rows(LOCAL_OPEN_HOUSES_TS)
        if (
            not args.school
            and not args.limit
            and len(schools) != args.expected_count
            and len(local_schools) == args.expected_count
        ):
            print(
                f"Warning: official directory returned {len(schools)} rows; "
                f"using local {args.expected_count}-school fallback for full coverage.",
                file=sys.stderr,
            )
            schools = local_schools
    if args.school:
        needle = args.school.lower()
        schools = [s for s in schools if needle in s.school_name.lower()]
    if args.limit:
        schools = schools[: args.limit]
    if not args.limit and len(schools) != args.expected_count:
        print(
            f"Warning: expected {args.expected_count} schools, "
            f"but official directory returned {len(schools)} after filters.",
            file=sys.stderr,
        )

    print(f"Processing {len(schools)} secondary schools...")
    for i, school in enumerate(schools, start=1):
        if school.slug in scraped:
            talents, _ = scraped[school.slug]
            print(
                f"[{i:03d}/{len(schools):03d}] official SchoolFinder: {school.school_name}: "
                f"{len(talents)} talent areas"
            )
            continue

        if args.skip_scrape:
            scraped[school.slug] = ([], None)
            print(f"[{i:03d}/{len(schools):03d}] coverage fallback: {school.school_name}")
            continue

        existing = existing_by_slug.get(school.slug)
        if args.keep_existing_talents and existing and existing.get("dsaTalents"):
            scraped[school.slug] = (existing["dsaTalents"], None)
            print(f"[{i:03d}/{len(schools):03d}] keep existing: {school.school_name}")
            continue

        talents, source_url = scrape_talents_for_school(
            session,
            school,
            dsa_cache,
            delay=args.delay,
            retries=args.retries,
            timeout=args.timeout,
        )
        scraped[school.slug] = (talents, source_url)
        print(
            f"[{i:03d}/{len(schools):03d}] {school.school_name}: "
            f"{len(talents)} talent areas"
        )

    rows = build_master_rows(schools, existing_by_slug, scraped)
    if not args.school and not args.limit:
        validate_critical_targets(rows)
    with_talents = sum(1 for row in rows if row["dsaTalents"])
    print(f"Built {len(rows)} rows; {with_talents} rows contain dsaTalents.")

    if args.dry_run:
        print("Dry run: no file written.")
        return 0

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n", "utf-8")
    print(f"Wrote {args.output}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
