"use client";

import { useLocale } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";

const locales = [
  { code: "en" as const, flag: "🇺🇸", title: "English (USA)" },
  { code: "de" as const, flag: "🇩🇪", title: "Deutsch" },
  { code: "tr" as const, flag: "🇹🇷", title: "Türkçe" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Language selection">
      {locales.map((loc) => {
        const isActive = locale === loc.code;
        return (
          <Link
            key={loc.code}
            href={pathname || "/"}
            locale={loc.code}
            className={`flex items-center justify-center w-10 h-10 rounded-lg border-2 text-xl transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
              isActive
                ? "border-accent bg-accent/10 shadow-sm"
                : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
            }`}
            title={loc.title}
            aria-label={loc.title}
            aria-current={isActive ? "true" : undefined}
          >
            <span className="leading-none" aria-hidden>{loc.flag}</span>
          </Link>
        );
      })}
    </div>
  );
}
