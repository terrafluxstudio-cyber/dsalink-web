#!/usr/bin/env node
// IndexNow submitter — pings Bing/Yandex/etc. so they re-crawl on deploy.
//
// It reads the live sitemap, extracts every <loc>, and POSTs the full URL
// list to the IndexNow API in one request. The key file must be reachable at
// https://<host>/<KEY>.txt (committed under public/) or the API rejects it.
//
// Runs two ways:
//   1. As a Vercel `postbuild` step — auto-pings after a *production* deploy.
//      Preview builds and local `npm run build` are skipped (guard below).
//   2. Manually with --force — submit regardless of environment.
//
// Usage:
//   node scripts/indexnow-submit.mjs --force            # submit every sitemap URL
//   node scripts/indexnow-submit.mjs --force <url> ...  # submit only given URLs
//
// Env:
//   NEXT_PUBLIC_SITE_URL  origin to submit for (default https://dsalink.sg)
//   VERCEL_ENV            set by Vercel; only "production" auto-submits

const KEY = "8913a204d53f5a27e06b9b1751029c11";
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://dsalink.sg").replace(
  /\/+$/,
  "",
);
const host = new URL(SITE).host;
const keyLocation = `${SITE}/${KEY}.txt`;

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const argv = process.argv.slice(2);
  const force = argv.includes("--force");
  const cliUrls = argv.filter((a) => a !== "--force");

  // Guard: when run as postbuild (no --force), only the production deploy
  // submits. Skip local builds and Vercel preview deploys.
  if (!force && process.env.VERCEL_ENV !== "production") {
    console.log(
      `IndexNow: skipped (VERCEL_ENV=${process.env.VERCEL_ENV ?? "unset"}, pass --force to override)`,
    );
    return;
  }

  const urlList = cliUrls.length ? cliUrls : await sitemapUrls();
  if (!urlList.length) throw new Error("no URLs to submit");

  // IndexNow caps a single request at 10,000 URLs — we are far under that.
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key: KEY, keyLocation, urlList }),
  });

  // 200 = accepted, 202 = accepted/validation pending. Anything else is a fail.
  if (res.status === 200 || res.status === 202) {
    console.log(`IndexNow: submitted ${urlList.length} URL(s) — ${res.status}`);
  } else {
    const body = await res.text().catch(() => "");
    throw new Error(`IndexNow rejected: ${res.status} ${body}`);
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
