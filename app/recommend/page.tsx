"use client";

import { SchoolFinderWizard } from "@/components/SchoolFinderWizard";

export default function RecommendPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900">
      <div className="mx-auto flex max-w-2xl flex-col gap-8">
        <SchoolFinderWizard />
      </div>
    </main>
  );
}
