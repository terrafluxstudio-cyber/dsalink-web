// UTM referral helpers for outbound coach links.
//
// Why: when a parent clicks through to a coach from DSALink, we want the coach
// to see "dsalink.sg / referral" in their own analytics. That visible referral
// is the evidence base for any future lead-gen / partnership conversation — the
// coach can confirm we sent them traffic, we don't have to self-report it.

// Append (or overwrite) the UTM params on an absolute URL. Preserves any query
// the target already carries. Returns the input unchanged if it isn't a valid
// absolute URL.
export function addReferral(rawUrl: string, campaign: string): string {
  try {
    const url = new URL(rawUrl);
    url.searchParams.set("utm_source", "dsalink.sg");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", campaign);
    return url.toString();
  } catch {
    return rawUrl;
  }
}

// Coach domains we feature editorially inside blog posts. Stored www-normalized
// so both `clubzoom.org.sg` and `www.clubzoom.org.sg` match. Kept as an explicit
// allowlist so UTM is only ever added to coach links — never to MOE, news, or
// school-official links that also appear in the same articles.
const COACH_HOSTS = new Set<string>([
  "publicspeakingacademy.com.sg",
  "discoveringpotential.com.sg",
  "ryse-edu.com",
  "dialogic.academy",
  "seetharamarts.com",
  "dsts.sg",
  "learningjourney.edu.sg",
  "biankapanova.com",
  "clubzoom.org.sg",
  "junboytennis.com",
  "prestostudios.sg",
  "ysayemusicstudio.com",
  "centre-stage.com",
  "evdance.com.sg",
  "mindspeaklogic.org",
]);

function normHost(hostname: string): string {
  return hostname.replace(/^www\./, "").toLowerCase();
}

// Rewrite an href with blog-campaign UTM ONLY if it points at a known coach
// domain; every other href (relative links, MOE, news, school sites) is returned
// untouched.
export function withBlogCoachReferral(href: string): string {
  try {
    const url = new URL(href);
    if (COACH_HOSTS.has(normHost(url.hostname))) {
      return addReferral(href, "blog");
    }
  } catch {
    // relative or malformed href — leave as-is
  }
  return href;
}
