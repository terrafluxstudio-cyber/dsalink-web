#!/usr/bin/env python3
"""
Fetch official MOE SchoolFinder PSLE 2025 Posting Group COP data and update:

    data/dsa_master_list.json

The script reads MOE SchoolFinder's public Next.js/RSC payload, extracts each
secondary school's psle entries, and upgrades psleCop to:

    {
      "pg1": "25-29",
      "pg2": "21-25",
      "pg3": "16-22",
      "affiliated": {
        "pg1": null,
        "pg2": null,
        "pg3": null
      }
    }
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
MASTER_JSON = ROOT / "data" / "dsa_master_list.json"
SCHOOLFINDER_SECONDARY_URL = "https://www.moe.gov.sg/schoolfinder/secondary%20school"

DEFAULT_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (compatible; DSALinkDataBot/0.1; "
        "+https://dsalink.sg; PSLE COP verification)"
    ),
    "Accept": "text/html,application/xhtml+xml,application/xml,application/json;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-SG,en;q=0.9",
}

PG_KEYS = {
    "POSTING GROUP 1": "pg1",
    "POSTING GROUP 2": "pg2",
    "POSTING GROUP 3": "pg3",
}


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


def fetch_schoolfinder_schools(timeout: float) -> list[dict[str, Any]]:
    req = Request(SCHOOLFINDER_SECONDARY_URL, headers=DEFAULT_HEADERS)
    with urlopen(req, timeout=timeout) as response:
        html = response.read().decode("utf-8")

    rsc = decode_next_rsc_chunks(html)
    schools = extract_balanced_json_value(rsc, '"schools":')
    if not isinstance(schools, list):
        raise ValueError("MOE SchoolFinder schools payload is not a list")
    return schools


def canonical_slug(name: str) -> str:
    text = name.lower()
    text = text.replace("&", "and").replace("'", "").replace(".", "").replace(",", "")
    text = text.replace("(", " ").replace(")", " ").replace("/", " ")
    text = text.replace("secondary", "")
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", text)).strip("-")


def normalize_name(name: str) -> str:
    return re.sub(
        r"\s+",
        " ",
        re.sub(r"[^A-Z0-9 ]+", " ", re.sub(r"\([^)]*\)", "", name.upper())),
    ).strip()


def score_range(lower: Any, upper: Any) -> str | None:
    low = str(lower or "").strip()
    high = str(upper or "").strip()
    if not low and not high:
        return None
    if low and high and low != high:
        return f"{low}-{high}"
    return low or high


def append_score(existing: str | None, value: str | None) -> str | None:
    if not value:
        return existing
    if not existing:
        return value
    parts = [part.strip() for part in existing.split(" / ")]
    if value in parts:
        return existing
    return f"{existing} / {value}"


def empty_psle_cop() -> dict[str, Any]:
    return {
        "pg1": None,
        "pg2": None,
        "pg3": None,
        "affiliated": {
            "pg1": None,
            "pg2": None,
            "pg3": None,
        },
    }


def parse_psle_cop(school: dict[str, Any]) -> dict[str, Any]:
    cop = empty_psle_cop()
    for wrapper in school.get("psle") or []:
        entry = wrapper.get("moe_school_info_psle_id") if isinstance(wrapper, dict) else None
        if not isinstance(entry, dict):
            continue

        key = PG_KEYS.get(str(entry.get("course") or "").strip().upper())
        if not key:
            continue

        value = score_range(entry.get("lower"), entry.get("upper"))
        if entry.get("ip_ind") == "Y" and value:
            value = f"{value} (IP)"

        is_affiliated = str(entry.get("indicator") or "").strip().upper() == "A"
        if is_affiliated:
            cop["affiliated"][key] = append_score(cop["affiliated"].get(key), value)
        else:
            cop[key] = append_score(cop.get(key), value)

    return cop


def build_schoolfinder_index(schools: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    index: dict[str, dict[str, Any]] = {}
    for school in schools:
        name = str(school.get("school_name") or "").strip()
        slug = str(school.get("slug") or "").strip() or canonical_slug(name)
        if slug:
            index[slug] = school
        if name:
            index[canonical_slug(name)] = school
            index[normalize_name(name)] = school
    return index


def schoolfinder_match(row: dict[str, Any], index: dict[str, dict[str, Any]]) -> dict[str, Any] | None:
    candidates = [
        str(row.get("slug") or "").strip(),
        canonical_slug(str(row.get("schoolName") or "")),
        normalize_name(str(row.get("schoolName") or "")),
    ]
    for key in candidates:
        if key and key in index:
            return index[key]
    return None


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--timeout", type=float, default=30.0)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    master = json.loads(MASTER_JSON.read_text(encoding="utf-8"))
    schools = fetch_schoolfinder_schools(args.timeout)
    index = build_schoolfinder_index(schools)

    updated = 0
    unmatched: list[str] = []
    empty: list[str] = []

    for row in master:
        match = schoolfinder_match(row, index)
        name = str(row.get("schoolName") or "")
        if not match:
            unmatched.append(name)
            row["psleCop"] = empty_psle_cop()
            continue

        cop = parse_psle_cop(match)
        row["psleCop"] = cop
        updated += 1
        if not any([cop["pg1"], cop["pg2"], cop["pg3"], *cop["affiliated"].values()]):
            empty.append(name)

    if not args.dry_run:
        MASTER_JSON.write_text(
            json.dumps(master, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )

    print(f"MOE SchoolFinder schools: {len(schools)}")
    print(f"Master rows updated: {updated}/{len(master)}")
    print(f"Rows without PSLE COP: {len(empty)}")
    if empty:
        for name in empty[:20]:
            print(f"[EMPTY] {name}")
        if len(empty) > 20:
            print(f"[EMPTY] ... {len(empty) - 20} more")
    if unmatched:
        print(f"[MISMATCH] Unmatched rows: {len(unmatched)}", file=sys.stderr)
        for name in unmatched:
            print(f"[MISMATCH] {name}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
