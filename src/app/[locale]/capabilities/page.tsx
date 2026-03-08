import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import {
  companyOverview,
  coreCompetencies,
  differentiators,
  leadership,
  companyData,
} from "@/data/veri/capabilities";
import { setRequestLocale } from "next-intl/server";
import { CapabilitiesPdfLink } from "@/components/CapabilitiesPdfLink";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: "Capabilities Statement",
    description:
      "Cloud Telecommunications — OSP and fiber infrastructure field operations. Federal procurement capabilities statement.",
    path: `/${locale}/capabilities`,
  });
}

export default async function CapabilitiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <Section containerClassName="max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Capabilities Statement
              </h1>
              <p className="mt-2 text-slate-600">
                Outside Plant (OSP) · Fiber Infrastructure · Field Operations
              </p>
            </div>
            <CapabilitiesPdfLink />
          </div>
        </Section>
      </section>

      <Section>
        <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-[1fr,280px] gap-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Company Overview</h2>
              <p className="text-slate-700 leading-relaxed">{companyOverview}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Core Competencies</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                {coreCompetencies.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Differentiators</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                {differentiators.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Leadership</h2>
              <p className="font-medium text-slate-900">
                {leadership.name} — {leadership.title}
              </p>
              <p className="mt-2 text-slate-700 leading-relaxed">{leadership.summary}</p>
            </div>
          </div>

          <div className="lg:pt-0">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 lg:sticky lg:top-24">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Company Data</h2>
              <dl className="space-y-2 text-sm">
                <div>
                  <dt className="font-medium text-slate-600">Legal Name</dt>
                  <dd className="text-slate-900">{companyData.legalName}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-600">Operating Brand</dt>
                  <dd className="text-slate-900">{companyData.operatingBrand}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-600">State of Registration</dt>
                  <dd className="text-slate-900">{companyData.state}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-600">Leadership Experience</dt>
                  <dd className="text-slate-900">{companyData.leadershipExperience}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-600">NAICS</dt>
                  <dd className="text-slate-900 mt-0.5 space-y-1">
                    {companyData.naics.map((n) => (
                      <span key={n.code} className="block">
                        {n.code} – {n.label}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-600">UEI</dt>
                  <dd className="text-slate-700">{companyData.uei}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-600">CAGE</dt>
                  <dd className="text-slate-700">{companyData.cage}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
