"use client";

import dynamic from "next/dynamic";

export const OpenHousePreview = dynamic(
  () => import("@/components/OpenHousePreview").then((m) => ({ default: m.OpenHousePreview })),
  { ssr: false },
);

export const ScoresEntryCard = dynamic(
  () => import("@/components/ScoresEntryCard").then((m) => ({ default: m.ScoresEntryCard })),
  { ssr: false },
);

export const ResourceCards = dynamic(
  () => import("@/components/ResourceCards").then((m) => ({ default: m.ResourceCards })),
  { ssr: false },
);
