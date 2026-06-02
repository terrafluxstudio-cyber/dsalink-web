"use client";

import { GlossaryTooltip } from "@/components/GlossaryTooltip";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export function SchoolsPageHeader() {
  const { t } = useLanguage();

  return (
    <PageHeader
      crumbs={[
        { label: t.navDsaGuide, href: "/dsa-guide" },
        { label: t.schoolsH1 },
      ]}
      kicker={t.schoolsKicker}
      title={t.schoolsH1}
      subtitle={
        <>
          {t.schoolsSubtitleS01}
          <GlossaryTooltip term="MOE">MOE</GlossaryTooltip>
          {t.schoolsSubtitleS02}
          <GlossaryTooltip term="PSLE">PSLE</GlossaryTooltip>
          {t.schoolsSubtitleS03}
          <GlossaryTooltip term="COP">COP</GlossaryTooltip>
          {t.schoolsSubtitleS04}
          <GlossaryTooltip term="ALP">{t.schoolsProgAlpLong}</GlossaryTooltip>
          {t.schoolsSubtitleS05}
          <GlossaryTooltip term="LLP">{t.schoolsProgLlpLong}</GlossaryTooltip>
          {t.schoolsSubtitleS06}
          <GlossaryTooltip term="DSA">DSA</GlossaryTooltip>
          {t.schoolsSubtitleS07}
          <GlossaryTooltip term="IP">IP</GlossaryTooltip>
          {t.schoolsSubtitleS08}
          <GlossaryTooltip term="O-Level">O-Level</GlossaryTooltip>
          {t.schoolsSubtitleS09}
          <GlossaryTooltip term="SP">SP</GlossaryTooltip>
          {t.schoolsSubtitleS10}
          <GlossaryTooltip term="Critical Social Inquiry and Media Literacy">
            {t.schoolsProgCsiLong}
          </GlossaryTooltip>
          {t.schoolsSubtitleS11}
        </>
      }
    />
  );
}
