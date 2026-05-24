import type { Metadata } from "next";
import { DsaApplyPageBody } from "@/components/DsaApplyPageBody";

export const metadata: Metadata = {
  title: { absolute: "DSA 2026 Application Checklist | DSALink" },
  description:
    "Step-by-step DSA-Sec 2026 application checklist for Singapore parents — from shortlisting schools to submitting preference rankings. Track your progress with persistent checkboxes.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return <DsaApplyPageBody />;
}
