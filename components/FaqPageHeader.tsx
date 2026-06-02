"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/PageHeader";
import { FAQ_UI } from "@/lib/faq-content";

export function FaqPageHeader() {
  const { locale, t } = useLanguage();
  const ui = FAQ_UI[locale];

  return (
    <PageHeader
      crumbs={[
        { label: t.navDsaGuide, href: "/dsa-guide" },
        { label: ui.pageTitle },
      ]}
      kicker={ui.kicker}
      title={ui.pageTitle}
      subtitle={ui.pageSubtitle}
    />
  );
}
