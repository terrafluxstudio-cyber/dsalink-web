"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function OpenHouseTracker() {
  useEffect(() => {
    trackEvent("open_house_viewed");
  }, []);

  return null;
}
