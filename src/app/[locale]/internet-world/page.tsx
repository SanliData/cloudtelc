import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GlobalInternetMap } from "@/components/GlobalInternetMap";
import { UsInternetMap } from "@/components/UsInternetMap";
import { buildMetadata } from "@/lib/seo";

const INTERNET_STATS = [
  { label: "Global Internet Users", value: "5+ billion", description: "Approximate global users" },
  { label: "U.S. Broadband Penetration", value: "85–90%+", description: "Household broadband adoption" },
  { label: "Avg. U.S. Fixed Broadband Speed", value: "200+ Mbps", description: "Typical downstream" },
  { label: "Data Center Traffic Growth", value: "20–30% annually", description: "Approximate growth range" },
] as const;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: "Internet World",
    description:
      "Global and U.S. internet infrastructure maps, broadband data, and connectivity statistics. Submarine cables, FCC map, IXPs, and fiber backbone context.",
    path: `/${locale}/internet-world`,
  });
}

export default async function InternetWorldPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <section
        className="bg-slate-50 border-b border-slate-200 py-16"
        aria-labelledby="internet-world-heading"
      >
        <Section containerClassName="max-w-3xl">
          <h1
            id="internet-world-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Internet World
          </h1>
          <p className="mt-2 text-lg text-slate-600 font-medium">
            Global & U.S. Infrastructure Maps & Data
          </p>
          <p className="mt-4 text-slate-600">
            Explore how the internet is built: submarine cables, terrestrial fiber, data centers, and broadband coverage. All maps and statistics below are from third-party sources; we do not control their content or availability.
          </p>
        </Section>
      </section>

      <Section>
        <GlobalInternetMap />
      </Section>

      <Section className="bg-slate-50">
        <UsInternetMap />
      </Section>

      <Section>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Internet Performance & Connectivity Data
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {INTERNET_STATS.map((stat, i) => (
            <Card key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-700">{stat.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{stat.description}</p>
            </Card>
          ))}
        </div>
        <p className="text-xs text-slate-500 max-w-3xl">
          Data based on publicly available industry reports (ITU, FCC, Cloudflare Radar, etc.). Figures are informational approximations and may vary by source and date.
        </p>
      </Section>

      <Section className="bg-slate-50">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            From Global Backbone to Local Deployment
          </h2>
          <p className="text-slate-600 mb-4">
            The international backbone depends on submarine cable systems that land at coastal points and connect to terrestrial networks. In the U.S., the backbone distributes traffic through metro fiber and long-haul corridors. Last-mile FTTH and premises connectivity depend on local OSP construction—conduit, fiber placement, splicing, and testing.
          </p>
          <p className="text-slate-600 mb-2">Reliable infrastructure requires:</p>
          <ul className="space-y-2 text-slate-600" role="list">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">•</span>
              <span>HDD crossings for road and obstacle avoidance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">•</span>
              <span>Conduit planning and route diversity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">•</span>
              <span>Splicing precision and test-pack documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">•</span>
              <span>Diverse routing for redundancy and resilience</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="max-w-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Fiber construction for this infrastructure</h2>
            <p className="text-slate-200">
              Cloud Telecommunications delivers OSP construction for backbone, metro, and last-mile. Request an RFQ or explore our services.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
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
            <Link
              href="/international-cooperation"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-5 py-2.5 font-medium text-white hover:bg-white hover:text-slate-900 transition-colors"
            >
              International Cooperation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
