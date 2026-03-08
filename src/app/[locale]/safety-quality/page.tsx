import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

const sections = [
  {
    title: "OSHA compliance",
    content:
      "We maintain OSHA-compliant job sites with required PPE, signage, and training. Safety meetings and tailgates are standard. Incident reporting and corrective action follow established procedures.",
  },
  {
    title: "811 utility locate coordination",
    content:
      "No excavation without 811 locates. We coordinate with call-before-you-dig and private locates as required. Respect for existing utilities is built into every phase of work.",
  },
  {
    title: "Municipal ROW compliance",
    content:
      "We obtain and follow municipal right-of-way permits and restoration requirements. Restoration is completed per municipal and client specifications.",
  },
  {
    title: "Traffic Control Plans (TCP)",
    content:
      "Lane closures and work zones follow approved TCPs. We work with certified flaggers and maintain traffic control per MUTCD and local requirements.",
  },
  {
    title: "QC checkpoints",
    content:
      "OTDR and test packs, as-builts, and closeout documentation are part of our standard deliverables. We support client QC checkpoints and acceptance criteria throughout the project.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: "Safety & Quality",
    description:
      "OSHA compliance, 811 coordination, ROW, TCP, QC checkpoints. Cloud Telecommunications safety and quality standards.",
    path: `/${locale}/safety-quality`,
  });
}

export default async function SafetyQualityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <Section containerClassName="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Safety & Quality
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            OSHA, 811, ROW, TCP, and QC checkpoints. We build safety and documentation into every project.
          </p>
        </Section>
      </section>

      <Section>
        <div className="space-y-6">
          {sections.map((s) => (
            <Card key={s.title}>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h2>
              <p className="text-slate-600">{s.content}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/contact" variant="primary">
            Request safety packet
          </Button>
        </div>
      </Section>
    </>
  );
}
