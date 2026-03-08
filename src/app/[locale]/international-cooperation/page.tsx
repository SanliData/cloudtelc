import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { internationalCooperation } from "@/data/internationalCooperation";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: "International Cooperation",
    description:
      "Strategic technical collaboration and industry alignment. Cloud Telecommunications collaborates with experienced international telecom infrastructure organizations for knowledge exchange and best-practice development.",
    path: `/${locale}/international-cooperation`,
  });
}

export default async function InternationalCooperationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <section
        className="bg-slate-50 border-b border-slate-200 py-16"
        aria-labelledby="international-cooperation-heading"
      >
        <Section containerClassName="max-w-3xl">
          <h1
            id="international-cooperation-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            International Cooperation
          </h1>
          <p className="mt-2 text-lg text-slate-600 font-medium">
            Strategic Technical Collaboration & Industry Alignment
          </p>
          <p className="mt-4 text-slate-600">
            Cloud Telecommunications collaborates with experienced international telecom infrastructure organizations to support knowledge exchange, best-practice alignment, and technical capability development for U.S.-based OSP construction.
          </p>
        </Section>
      </section>

      <Section>
        <h2 className="sr-only">Partner organizations</h2>
        {/* Only Netpas and Şanlı Netzbau shown. LR Group (id: lr-group) hidden until approval — then remove filter below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internationalCooperation.partners
            .filter((p) => p.id !== "lr-group")
            .map((partner) => (
              <Card key={partner.id}>
                <h3 className="text-xl font-bold text-slate-900">{partner.name}</h3>
                <p className="mt-1 text-accent font-medium">{partner.country}</p>
                <p className="mt-3 text-sm font-medium text-slate-700">Focus areas</p>
                <ul className="mt-1 space-y-1 text-slate-600 text-sm list-disc list-inside">
                  {partner.focusAreas.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium text-slate-700">How we collaborate</p>
                <ul className="mt-1 space-y-1 text-slate-600 text-sm list-disc list-inside">
                  {partner.howWeCollaborate.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-accent px-4 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  aria-label={`Visit ${partner.name} website (opens in new tab)`}
                >
                  Website
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </Card>
            ))}
        </div>
        <p className="mt-6 text-sm text-slate-600 border-l-4 border-accent pl-4">
          {internationalCooperation.usOperationsNote}
        </p>
      </Section>

      <Section className="bg-slate-50">
        <div className="max-w-3xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Internet World</h2>
          <p className="text-slate-600 mb-6">
            Global and U.S. internet infrastructure maps, broadband data, and connectivity statistics—submarine cables, FCC map, IXPs, and performance data—are available in our dedicated section.
          </p>
          <Button href="/internet-world" variant="primary" size="lg">
            Explore Internet World – Maps & Data
          </Button>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {internationalCooperation.whyItMatters.title}
          </h2>
          <ul className="space-y-2 text-slate-600" role="list">
            {internationalCooperation.whyItMatters.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Work With Our Team</h2>
          <p className="text-slate-200 mb-6">
            Request a quote or explore our fiber infrastructure services.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              href="/contact"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              Request an RFQ
            </Button>
            <Button
              href="/services"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              View Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
