"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Breadcrumb } from "@/components/Breadcrumb";

const G = { en: "DSA Guide", zh: "DSA 指南", ms: "Panduan DSA", ta: "DSA வழிகாட்டி" };
const B = { en: "Blog", zh: "博客", ms: "Blog", ta: "வலைப்பதிவு" };

/**
 * Breadcrumb for individual blog posts. Title stays in its original (EN)
 * form because MDX posts are authored EN-only.
 */
export function BlogPostBreadcrumb({ title }: { title: string }) {
  const { locale } = useLanguage();
  return (
    <Breadcrumb
      items={[
        { label: G[locale], href: "/dsa-guide" },
        { label: B[locale], href: "/blog" },
        { label: title },
      ]}
    />
  );
}
