import { NextResponse } from "next/server";
import { fetchFeaturedSchools } from "@/lib/featured-schools";

export const revalidate = 3600;

export async function GET() {
  const schools = await fetchFeaturedSchools();

  return NextResponse.json(schools, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
