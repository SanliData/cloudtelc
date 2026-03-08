import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { GlossaryClient } from "@/components/GlossaryClient";
import { allGlossaryTerms } from "@/data/glossary";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: "Fiber Infrastructure Glossary",
    description:
      "Industry terminology and technical reference for U.S. fiber infrastructure construction: backbone, underground, aerial, FTTH, splicing, testing, and compliance standards.",
    path: `/${locale}/glossary`,
  });
}

function GlossarySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Fiber Infrastructure Glossary",
    description:
      "Commonly used technical terminology in U.S. fiber infrastructure construction.",
    hasDefinedTerm: allGlossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      inDefinedTermSet: "Fiber Infrastructure Glossary",
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function GlossaryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <GlossarySchema />
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <Section containerClassName="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Fiber Infrastructure Glossary
          </h1>
          <p className="mt-2 text-lg text-slate-600 font-medium">
            Industry Terminology & Technical Reference
          </p>
          <p className="mt-4 text-slate-600">
            This glossary provides commonly used technical terminology in U.S.
            fiber infrastructure construction, including backbone, underground,
            aerial, FTTH, splicing, testing, and compliance standards.
          </p>
        </Section>
      </section>

      <Section>
        <GlossaryClient />
      </Section>
    </>
  );
}
