"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/PageHeader";
import { FAQ_UI } from "@/lib/faq-content";

export function FaqPageHeader() {
  const { locale } = useLanguage();
  const ui = FAQ_UI[locale];

  return (
    <PageHeader
      crumbLabel={ui.pageTitle}
      kicker={ui.kicker}
      title={ui.pageTitle}
      subtitle={ui.pageSubtitle}
    />
  );
}
