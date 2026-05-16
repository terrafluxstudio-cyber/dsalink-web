"use client";

import { BookOpen, Globe, School } from "lucide-react";
import { EXTERNAL, MOE_PRIMARY_CTA_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = {
  moe: BookOpen,
  schools: School,
  portal: Globe,
} as const;

export function ResourceCards() {
  const { t } = useLanguage();

  const cards = [
    { key: "moe",     title: t.linkMoeTitle,     description: t.linkMoeDesc,     href: MOE_PRIMARY_CTA_URL,   Icon: icons.moe },
    { key: "schools", title: t.linkSchoolsTitle, description: t.linkSchoolsDesc, href: EXTERNAL.schoolFinder, Icon: icons.schools },
    { key: "portal",  title: t.linkPortalTitle,  description: t.linkPortalDesc,  href: EXTERNAL.dsaPortal,    Icon: icons.portal },
  ] as const;

  return (
    <section id="resources" className="border-t border-surface-warm bg-surface py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-7 max-w-2xl">
          <h2 className="font-display text-xl font-semibold text-slate-900 sm:text-[1.375rem]">
            {t.sectionLinksTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {t.sectionLinksDesc}
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-3">
          {cards.map(({ key, title, description, href, Icon }) => (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card transition hover:border-[#d4cec4] hover:shadow-card-hover sm:p-5"
              >
                <div className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-surface-warm bg-surface text-intellectual transition group-hover:border-surface-subtle">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[0.9375rem] font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-[0.8125rem] leading-relaxed text-slate-500">{description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-intellectual">
                      {t.extHint}
                      <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
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
