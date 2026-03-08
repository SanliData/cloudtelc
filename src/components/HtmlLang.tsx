"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

const localeToLang: Record<string, string> = {
  en: "en",
  de: "de",
  tr: "tr",
};

/**
 * Sets document.documentElement.lang to the active locale for SEO and a11y.
 * Root layout cannot read [locale], so we do it client-side from the [locale] layout.
 */
export function HtmlLang() {
  const locale = useLocale();
  const lang = localeToLang[locale] ?? "en";

  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = "en";
    };
  }, [lang]);

  return null;
}
