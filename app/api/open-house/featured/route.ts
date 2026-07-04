import { NextResponse } from "next/server";
import { fetchFeaturedSchools } from "@/lib/featured-schools";

// Serve on-demand instead of prerendering at build time. The upstream Google
// Sheets fetch can hang in the Vercel build sandbox (>60s) and fail the whole
// build; keeping this dynamic isolates that to a runtime request, while the
// Cache-Control header below still lets the CDN cache responses for an hour.
export const dynamic = "force-dynamic";

export async function GET() {
  const schools = await fetchFeaturedSchools();

  return NextResponse.json(schools, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
