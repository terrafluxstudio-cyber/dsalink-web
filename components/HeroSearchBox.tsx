"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSearchBox() {
  const { t } = useLanguage();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const placeholder = t.heroSearchPlaceholder;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/dsa?q=${encodeURIComponent(q)}` : "/dsa");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label className="relative block">
        <span className="sr-only">{placeholder}</span>
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full rounded-xl border border-[#e3ded5] bg-white py-3.5 pl-11 pr-4 text-[0.9375rem] font-medium text-slate-900 shadow-card outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-intellectual/40 focus:ring-2 focus:ring-intellectual/10"
        />
      </label>
    </form>
  );
}
