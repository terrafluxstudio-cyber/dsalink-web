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
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <label className="relative block">
        <span className="sr-only">{placeholder}</span>
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full rounded-2xl border-2 border-blue-500/20 bg-white py-4 pl-12 pr-4 text-base font-semibold text-intellectual shadow-xl outline-none transition placeholder:text-intellectual-muted/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-lg"
        />
      </label>
    </form>
  );
}
