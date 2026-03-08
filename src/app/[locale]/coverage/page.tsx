import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CoverageMap } from "@/components/CoverageMap";
import { coverage } from "@/data/coverage";
import { setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: "Coverage",
    description:
      "Cloud Telecommunications service areas. Crews available for deployments.",
    path: `/${locale}/coverage`,
  });
}

export default async function CoveragePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <Section containerClassName="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Coverage</h1>
          <p className="mt-4 text-lg text-slate-600">
            Nationwide project support where applicable.
          </p>
        </Section>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <CoverageMap />
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              {coverage.primary.label}
            </h2>
            <p className="text-slate-600">{coverage.mobilization}</p>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <p className="text-slate-600">{coverage.mobilization}</p>
        <Button href="/contact" variant="primary" className="mt-6">
          Schedule a call
        </Button>
      </Section>
    </>
  );
}
