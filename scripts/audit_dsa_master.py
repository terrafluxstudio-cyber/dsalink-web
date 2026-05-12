#!/usr/bin/env python3
"""
Audit data/dsa_master_list.json for completeness and consistency.

Outputs:
  audit_report.txt

Run:
  python3 scripts/audit_dsa_master.py

This script intentionally uses only the Python standard library.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import ssl
import sys
import time
from collections import Counter
from dataclasses import dataclass
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
MASTER_JSON = ROOT / "data" / "dsa_master_list.json"
REPORT_TXT = ROOT / "audit_report.txt"
VERIFY_CSV = ROOT / "verify_needed.csv"
LOCAL_OPEN_HOUSES_TS = ROOT / "lib" / "school-open-houses.ts"

DATA_GOV_RESOURCE_ID = "d_688b934f82c1059ed0a6993d2a829089"
DATA_GOV_API = "https://data.gov.sg/api/action/datastore_search"
SCHOOLFINDER_DSA_URL = (
    "https://www.moe.gov.sg/schoolfinder/secondary%20school"
    "?admissions=%7B%22value%22%3A%22DSA%22%7D"
)
MOE_DSA_SCHOOL_CHOOSER = (
    "https://www.moe.gov.sg/secondary/dsa/eligibility/choose-a-dsa-sec-school"
)

EXPECTED_COUNTS = {146, 147}
ALLOWED_CATEGORIES = {"Sports", "Arts", "STEM", "Leadership", "Languages"}
LOW_TALENT_EXEMPTIONS = {
    "ASSUMPTION PATHWAY SCHOOL",
    "CREST SECONDARY SCHOOL",
    "NORTHLIGHT SCHOOL",
    "SINGAPORE SPORTS SCHOOL",
    "SPECTRA SECONDARY SCHOOL",
}
GENERIC_TALENT_NAMES = {
    "ARTS",
    "CCA",
    "LANGUAGES",
    "SCHOOL BASED DSA VERIFY",
    "SPORTS",
    "STEM",
}
RED = "\033[31m"
BOLD_RED = "\033[1;31m"
RESET = "\033[0m"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; DSALinkAudit/0.1; +https://dsalink.sg)",
    "Accept": "application/json,text/html,*/*;q=0.8",
    "Accept-Language": "en-SG,en;q=0.9",
}


@dataclass(frozen=True)
class OfficialSchool:
    name: str
    slug: str
    source: str


def title_case_school_name(name: str) -> str:
    text = name.lower()
    text = re.sub(r"\b\w", lambda m: m.group(0).upper(), text)
    replacements = {
        "Chij": "CHIJ",
        "Nus": "NUS",
        "Sota": "SOTA",
        "Sst": "SST",
        " St ": " St. ",
        " Of ": " of ",
        " And ": " and ",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    text = re.sub(r"'S\b", "'s", text)
    return re.sub(r"\s+", " ", text).strip()


def slugify(name: str) -> str:
    value = (
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
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", value)).strip("-")


def normalize_name(name: str) -> str:
    return re.sub(
        r"\s+",
        " ",
        re.sub(r"[^A-Z0-9 ]+", " ", re.sub(r"\([^)]*\)", "", name.upper())),
    ).strip()


def is_secondary_row(row: dict[str, Any]) -> bool:
    level = str(row.get("mainlevel_code", ""))
    return "SECONDARY" in level or level.startswith("MIXED LEVEL")


def http_json(url: str, params: dict[str, Any], timeout: float) -> Any:
    full = f"{url}?{urlencode(params)}"
    req = Request(full, headers=HEADERS, method="GET")
    with urlopen(req, timeout=timeout) as res:
        return json.loads(res.read().decode("utf-8"))


def fetch_official_schools(timeout: float) -> list[OfficialSchool]:
    first = http_json(
        DATA_GOV_API,
        {"resource_id": DATA_GOV_RESOURCE_ID, "limit": 1},
        timeout,
    )
    total = int(first["result"]["total"])
    rows: list[dict[str, Any]] = []
    for offset in range(0, total, 100):
        payload = http_json(
            DATA_GOV_API,
            {
                "resource_id": DATA_GOV_RESOURCE_ID,
                "limit": 100,
                "offset": offset,
            },
            timeout,
        )
        rows.extend(payload["result"]["records"])
    return sorted(
        [
            OfficialSchool(
                name=title_case_school_name(str(row["school_name"])),
                slug=slugify(str(row["school_name"])),
                source="data.gov.sg",
            )
            for row in rows
            if is_secondary_row(row)
        ],
        key=lambda s: s.name,
    )


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


def fetch_schoolfinder_official_schools(timeout: float) -> list[OfficialSchool]:
    req = Request(SCHOOLFINDER_DSA_URL, headers=HEADERS, method="GET")
    with urlopen(req, timeout=timeout) as res:
        html = res.read().decode("utf-8")
    schools = extract_balanced_json_value(decode_next_rsc_chunks(html), '"schools":')
    return sorted(
        [
            OfficialSchool(
                name=title_case_school_name(str(row["school_name"])),
                slug=str(row["slug"]),
                source="MOE SchoolFinder",
            )
            for row in schools
            if isinstance(row, dict) and row.get("school_name") and row.get("slug")
        ],
        key=lambda s: s.name,
    )


def load_local_official_fallback() -> list[OfficialSchool]:
    if not LOCAL_OPEN_HOUSES_TS.exists():
        return []
    text = LOCAL_OPEN_HOUSES_TS.read_text("utf-8")
    blocks = re.finditer(
        r"id:\s*\"([^\"]+)\"[\s\S]*?nameEn:\s*\"([^\"]+)\"",
        text,
    )
    schools = [
        OfficialSchool(
            name=m.group(2).replace("St..", "St."),
            slug=m.group(1),
            source="local fallback",
        )
        for m in blocks
    ]
    return sorted(schools, key=lambda s: s.name)


def load_master(path: Path) -> list[dict[str, Any]]:
    data = json.loads(path.read_text("utf-8"))
    if not isinstance(data, list):
        raise ValueError("data/dsa_master_list.json must be a JSON array")
    return data


def check_url(url: str, timeout: float) -> tuple[bool, str]:
    if not url:
        return False, "missing URL"
    normalized = url if url.startswith(("http://", "https://")) else f"https://{url}"
    ctx = ssl.create_default_context()
    for method in ("HEAD", "GET"):
        try:
            req = Request(normalized, headers=HEADERS, method=method)
            with urlopen(req, timeout=timeout, context=ctx) as res:
                code = getattr(res, "status", 200)
                if code < 400:
                    return True, f"HTTP {code}"
                return False, f"HTTP {code}"
        except HTTPError as exc:
            if method == "HEAD" and exc.code in {403, 405}:
                continue
            return False, f"HTTP {exc.code}"
        except (URLError, TimeoutError, ssl.SSLError) as exc:
            if method == "HEAD":
                continue
            return False, exc.__class__.__name__
    return False, "unknown request failure"


def append_section(lines: list[str], title: str, items: list[str]) -> None:
    lines.append("")
    lines.append(title)
    lines.append("-" * len(title))
    if items:
        lines.extend(items)
    else:
        lines.append("OK")


def normalize_area(area: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[^A-Z0-9 ]+", " ", area.upper())).strip()


def is_low_talent_exempt(name: str) -> bool:
    return normalize_name(name) in LOW_TALENT_EXEMPTIONS


def is_vague_area(area: str) -> bool:
    normalized = normalize_area(area)
    if "CCA" in normalized.split():
        return True
    return normalized in GENERIC_TALENT_NAMES


def verify_link(row: dict[str, Any]) -> str:
    description_link = ""
    for talent in row.get("dsaTalents", []):
        if isinstance(talent, dict):
            match = re.search(r"https?://\S+", str(talent.get("description", "")))
            if match:
                description_link = match.group(0).rstrip(").,")
                break

    open_house = row.get("openHouse")
    if isinstance(open_house, dict) and open_house.get("link"):
        link = str(open_house["link"])
        if link != MOE_DSA_SCHOOL_CHOOSER:
            return link
    return description_link or MOE_DSA_SCHOOL_CHOOSER


def write_verify_csv(path: Path, rows: list[dict[str, Any]]) -> None:
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=["schoolName", "talentCount", "officialLink", "flags"],
        )
        writer.writeheader()
        writer.writerows(rows)


def print_distribution(counter: Counter[str]) -> None:
    print("")
    print("DSA talent category distribution")
    print("--------------------------------")
    total = sum(counter.values())
    for category in sorted(ALLOWED_CATEGORIES):
        count = counter.get(category, 0)
        bar = "#" * min(50, count)
        print(f"{category:<10} {count:>4} {bar}")
    print(f"{'Total':<10} {total:>4}")


def audit(args: argparse.Namespace) -> tuple[list[str], list[str]]:
    warnings: list[str] = []
    report: list[str] = [
        "DSA Master List Audit Report",
        "============================",
        f"Input: {MASTER_JSON.relative_to(ROOT)}",
    ]

    try:
        official = fetch_official_schools(args.timeout)
        official_source = "data.gov.sg"
    except Exception as exc:
        try:
            official = fetch_schoolfinder_official_schools(args.timeout)
            official_source = "MOE SchoolFinder"
        except Exception:
            official = load_local_official_fallback()
            official_source = "local fallback"
            warnings.append(
                f"[MISMATCH] Failed to fetch official school lists; "
                f"using local fallback. Last data.gov.sg error: {exc.__class__.__name__}: {exc}"
            )

    master = load_master(MASTER_JSON)
    official_by_norm = {normalize_name(s.name): s for s in official}
    official_by_slug = {s.slug: s for s in official}
    master_by_norm = {normalize_name(str(row.get("schoolName", ""))): row for row in master}
    master_by_slug = {str(row.get("slug", "")): row for row in master if row.get("slug")}

    report.extend(
        [
            f"Official source: {official_source}",
            f"Official school count: {len(official)}",
            f"Master row count: {len(master)}",
            f"Expected master count: 146 or 147",
        ]
    )

    missing: list[str] = []
    for school in official:
        if school.slug not in master_by_slug and normalize_name(school.name) not in master_by_norm:
            missing.append(f"[MISSING] {school.name}")
    if len(master) not in EXPECTED_COUNTS or missing:
        warnings.append(
            f"[MISSING] Master list contains {len(master)} schools; "
            f"expected 146 or 147. Missing count: {len(missing)}"
        )
        warnings.extend(missing)

    mismatches: list[str] = []
    for row in master:
        name = str(row.get("schoolName", "")).strip()
        slug = str(row.get("slug", "")).strip()
        norm = normalize_name(name)
        official_match = official_by_slug.get(slug) or official_by_norm.get(norm)
        if not official_match:
            msg = f"[MISMATCH] {name or '<missing schoolName>'} ({slug or '<missing slug>'}) not found in official list"
            mismatches.append(msg)
            warnings.append(msg)
        elif norm != normalize_name(official_match.name):
            msg = f"[MISMATCH] {name} differs from official name: {official_match.name}"
            mismatches.append(msg)
            warnings.append(msg)

    empty_talents: list[str] = []
    category_issues: list[str] = []
    duplicate_talents: list[str] = []
    recheck_items: list[str] = []
    vague_items: list[str] = []
    psle_issues: list[str] = []
    deprecated_links: list[str] = []
    verify_rows: list[dict[str, Any]] = []
    category_counts: Counter[str] = Counter()

    for row in master:
        name = str(row.get("schoolName", "<unknown>"))
        talents = row.get("dsaTalents")
        flags: list[str] = []
        if not isinstance(talents, list) or len(talents) == 0:
            if not is_low_talent_exempt(name):
                msg = f"[MISSING] {name}: dsaTalents is empty"
                empty_talents.append(msg)
                warnings.append(msg)
                flags.append("MISSING")
        else:
            if len(talents) < 3 and not is_low_talent_exempt(name):
                msg = f"[RE-CHECK] {name}: only {len(talents)} dsaTalents found"
                recheck_items.append(msg)
                warnings.append(msg)
                flags.append("RE-CHECK")

            seen_areas: dict[str, int] = {}
            for talent in talents:
                if not isinstance(talent, dict):
                    msg = f"[MISMATCH] {name}: malformed dsaTalents item: {talent!r}"
                    category_issues.append(msg)
                    warnings.append(msg)
                    flags.append("MISMATCH")
                    continue
                category = str(talent.get("category", "")).strip()
                area = str(talent.get("area", "")).strip()
                area_key = normalize_area(area)
                if area_key:
                    seen_areas[area_key] = seen_areas.get(area_key, 0) + 1
                if category in {"Others", "Unknown"} or category not in ALLOWED_CATEGORIES:
                    msg = f"[MISMATCH] {name}: category '{category}' for talent '{area}' is not allowed"
                    category_issues.append(msg)
                    warnings.append(msg)
                    flags.append("MISMATCH")
                else:
                    category_counts[category] += 1
                if is_vague_area(area):
                    msg = f"[VAGUE] {name}: talent area '{area}' is too generic"
                    vague_items.append(msg)
                    warnings.append(msg)
                    flags.append("VAGUE")

            for area_key, count in sorted(seen_areas.items()):
                if count > 1:
                    msg = f"[DUPLICATE] {name}: talent area '{area_key}' appears {count} times"
                    duplicate_talents.append(msg)
                    warnings.append(msg)
                    flags.append("DUPLICATE")

        if flags:
            verify_rows.append(
                {
                    "schoolName": name,
                    "talentCount": len(talents) if isinstance(talents, list) else 0,
                    "officialLink": verify_link(row),
                    "flags": ";".join(sorted(set(flags))),
                }
            )

        psle = row.get("psleCop")
        if not isinstance(psle, dict):
            msg = f"[MISMATCH] {name}: psleCop must be an object"
            psle_issues.append(msg)
            warnings.append(msg)
        else:
            affiliated = psle.get("affiliated")
            if not isinstance(affiliated, dict):
                msg = f"[MISMATCH] {name}: psleCop.affiliated must be an object"
                psle_issues.append(msg)
                warnings.append(msg)
                affiliated = {}
            for key in ("pg1", "pg2", "pg3"):
                for container_name, container in (("psleCop", psle), ("psleCop.affiliated", affiliated)):
                    value = container.get(key)
                    if value is None:
                        continue
                    if not isinstance(value, str) or not re.search(r"\d", value):
                        msg = f"[MISMATCH] {name}: {container_name}.{key}={value!r} is not a COP range"
                        psle_issues.append(msg)
                        warnings.append(msg)

        link = None
        open_house = row.get("openHouse")
        if isinstance(open_house, dict):
            link = open_house.get("link")
        ok, status = check_url(str(link or ""), args.timeout)
        time.sleep(args.delay)
        if not ok:
            msg = f"[DEPRECATED] {name}: openHouse.link {link!r} failed health check ({status})"
            deprecated_links.append(msg)
            warnings.append(msg)

    append_section(report, "[MISSING] Missing schools vs official list", missing)
    append_section(report, "[MISSING] Empty dsaTalents", empty_talents)
    append_section(report, "[MISMATCH] Name mismatches", mismatches)
    append_section(report, "[MISMATCH] Category issues", category_issues)
    append_section(report, "[DUPLICATE] Duplicate talent areas", duplicate_talents)
    append_section(report, "[RE-CHECK] Schools with fewer than 3 talents", recheck_items)
    append_section(report, "[VAGUE] Generic talent areas", vague_items)
    append_section(report, "[MISMATCH] PSLE COP issues", psle_issues)
    append_section(report, "[DEPRECATED] Open House link health", deprecated_links)

    report.append("")
    report.append("Category Distribution")
    report.append("---------------------")
    for category in sorted(ALLOWED_CATEGORIES):
        report.append(f"{category}: {category_counts.get(category, 0)}")
    report.append(f"Total: {sum(category_counts.values())}")

    write_verify_csv(args.verify_csv, verify_rows)

    if warnings:
        report.append("")
        report.append("Summary")
        report.append("-------")
        report.append(f"Warnings: {len(warnings)}")
        report.append(f"Verify CSV: {args.verify_csv.relative_to(ROOT)}")
    else:
        report.append("")
        report.append("Summary")
        report.append("-------")
        report.append("OK — no warnings.")
        report.append(f"Verify CSV: {args.verify_csv.relative_to(ROOT)}")

    return report, warnings, category_counts, verify_rows


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Audit data/dsa_master_list.json")
    parser.add_argument("--timeout", type=float, default=12.0, help="HTTP timeout in seconds")
    parser.add_argument("--delay", type=float, default=0.3, help="Delay between link health checks")
    parser.add_argument("--report", type=Path, default=REPORT_TXT, help="Report output path")
    parser.add_argument("--verify-csv", type=Path, default=VERIFY_CSV, help="Human review CSV output path")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    report, warnings, category_counts, verify_rows = audit(args)
    args.report.write_text("\n".join(report) + "\n", "utf-8")
    print_distribution(category_counts)
    print("")
    print(f"Verify-needed rows: {len(verify_rows)}")

    if warnings:
        print(f"{BOLD_RED}DSA audit completed with {len(warnings)} warnings.{RESET}")
        for warning in warnings:
            print(f"{RED}{warning}{RESET}")
        print(f"{BOLD_RED}Report written to {args.report}{RESET}")
        return 1

    print(f"DSA audit OK. Report written to {args.report}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
