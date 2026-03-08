import type { Metadata } from "next";
import { marka } from "@/data/veri/marka";

const siteName = marka.legalName;
const defaultDescription =
  "US-based fiber infrastructure contractor. Backbone to broadband — underground, aerial, HDD, splicing, testing. Carriers, data centers, municipalities, GCs.";

export interface BuildMetadataInput {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

/**
 * Tüm sayfalar için tek kaynak meta veri.
 * Başlık, description, openGraph buradan üretilir.
 */
const baseUrl = "https://www.cloudtelc.com";

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const url = path ? `${baseUrl}${path}` : baseUrl;

  return {
    title: fullTitle,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: path ? { canonical: url } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url,
    },
  };
}

export const defaultMetadata: Metadata = {
  title: {
    default: `${siteName} | Fiber Infrastructure & Construction`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  openGraph: {
    title: `${siteName} | Fiber Infrastructure & Construction`,
    description: "US-based fiber infrastructure contractor. Backbone to broadband.",
    type: "website",
  },
};
