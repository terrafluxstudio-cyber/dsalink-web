"use client";

import { BookOpen, CalendarDays, Globe, School } from "lucide-react";
import { EXTERNAL, MOE_PRIMARY_CTA_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = {
  moe: BookOpen,
  schools: School,
  portal: Globe,
  calendar: CalendarDays,
} as const;

export function ResourceCards() {
  const { t } = useLanguage();

  const cards = [
    {
      key: "moe",
      title: t.linkMoeTitle,
      description: t.linkMoeDesc,
      href: MOE_PRIMARY_CTA_URL,
      Icon: icons.moe,
    },
    {
      key: "schools",
      title: t.linkSchoolsTitle,
      description: t.linkSchoolsDesc,
      href: EXTERNAL.schoolFinder,
      Icon: icons.schools,
    },
    {
      key: "portal",
      title: t.linkPortalTitle,
      description: t.linkPortalDesc,
      href: MOE_PRIMARY_CTA_URL,
      Icon: icons.portal,
    },
    {
      key: "calendar",
      title: t.linkCalendarTitle,
      description: t.linkCalendarDesc,
      href: EXTERNAL.calendar,
      Icon: icons.calendar,
    },
  ] as const;

  return (
    <section
      id="resources"
      className="border-t border-intellectual/5 bg-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-intellectual sm:text-3xl">
            {t.sectionLinksTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-intellectual-muted sm:text-base">
            {t.sectionLinksDesc}
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {cards.map(({ key, title, description, href, Icon }) => (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-intellectual/8 bg-card-shine p-5 shadow-sm transition hover:border-champagne/40 hover:shadow-soft sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-intellectual/5 text-intellectual ring-1 ring-champagne/25 transition group-hover:bg-intellectual/10">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold text-intellectual">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-intellectual-muted">
                      {description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-champagne-dark">
                      {t.extHint}
                      <span aria-hidden className="translate-x-0 transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
