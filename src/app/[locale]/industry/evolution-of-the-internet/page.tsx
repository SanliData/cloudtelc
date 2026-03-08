import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    title: "The Evolution of the Internet",
    description:
      "Explore the history of the internet from ARPANET to modern fiber infrastructure and nationwide broadband expansion.",
    path: `/${locale}/industry/evolution-of-the-internet`,
  });
}

const timeline = [
  {
    year: "1960s",
    title: "ARPANET",
    body: "The Advanced Research Projects Agency Network (ARPANET) laid the foundation for what would become the internet. Funded by the U.S. Department of Defense, it connected research institutions using packet switching and set the stage for global digital communication. These early networks relied on copper and leased telephone lines, planting the seed for the physical infrastructure industry.",
  },
  {
    year: "1980s",
    title: "TCP/IP Standardization",
    body: "The adoption of TCP/IP as the standard protocol suite unified disparate networks into a single, interoperable system. This transition enabled reliable data transmission across different network types and paved the way for the internet's commercialization. Infrastructure builders began designing routes and facilities to support higher bandwidth and longer distances.",
  },
  {
    year: "1990s",
    title: "Commercial Internet & Fiber Backbone Expansion",
    body: "The World Wide Web and the lifting of commercial restrictions accelerated internet growth. Fiber optic backbone networks replaced older copper routes, delivering vastly higher capacity and lower latency. Carriers and contractors built long-haul routes connecting major cities, establishing the core architecture still in use today.",
  },
  {
    year: "2000s",
    title: "Broadband & Metro Growth",
    body: "Broadband adoption spread to homes and businesses through DSL, cable, and early fiber deployments. Metro-area fiber networks expanded to serve enterprises, data centers, and carrier interconnection points. Underground and aerial construction crews deployed conduit and cable at scale to meet rising demand.",
  },
  {
    year: "2010s",
    title: "FTTH & Gigabit Networks",
    body: "Fiber-to-the-home and fiber-to-the-premise became the gold standard for last-mile connectivity. Municipal and carrier projects brought gigabit speeds to communities across the United States. Horizontal directional drilling, microtrenching, and aerial builds accelerated deployment while minimizing disruption.",
  },
  {
    year: "2020s",
    title: "Nationwide Fiber Acceleration",
    body: "Federal and state broadband initiatives, along with private investment, are driving nationwide fiber expansion. Backbone diversification, data center growth, and 5G backhaul are increasing demand for carrier-grade construction. Today's fiber infrastructure supports everything from remote work to real-time applications.",
  },
];

const infrastructurePoints = [
  "Backbone networks connecting cities and regions",
  "Metro fiber for enterprise and carrier interconnection",
  "Data center interconnects and meet-me rooms",
  "FTTH / FTTP for residential and business last-mile",
  "Redundant path design for reliability",
  "Carrier-grade construction meeting industry standards",
];

export default async function EvolutionOfTheInternetPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 sm:py-28">
        <Container>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            The Evolution of the Internet
          </h1>
          <p className="mt-4 text-xl text-slate-300 font-medium">
            From Research Networks to Modern Fiber Infrastructure
          </p>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            The history of the internet is the history of physical infrastructure. Each milestone—from early packet networks to today&apos;s fiber backbones—required construction crews, engineers, and contractors to install cable, conduit, and equipment. Understanding that evolution helps contextualize the role of fiber infrastructure in building the next generation of connectivity.
          </p>
        </Container>
      </section>

      <Section className="bg-slate-50" containerClassName="max-w-3xl">
          <h2 className="sr-only">Internet Evolution Timeline</h2>
          <div className="relative">
            <div
              className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-slate-300"
              aria-hidden
            />
            <ul className="space-y-0">
              {timeline.map((item, i) => (
                <li key={item.year} className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0">
                  <div
                    className="absolute left-4 sm:left-6 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-accent shrink-0"
                    aria-hidden
                  />
                  <div className="ml-8 sm:ml-12 flex-1">
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                      <h3 className="text-lg font-bold text-primary">
                        {item.year} – {item.title}
                      </h3>
                      <p className="mt-3 text-slate-600 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
      </Section>

      <Section className="bg-white">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
            Fiber Infrastructure Today
          </h2>
          <p className="text-slate-600 max-w-2xl mb-8">
            Modern fiber networks are built on a layered architecture, from long-haul backbones to last-mile drops. Each layer requires specialized construction methods and compliance with U.S. OSP standards.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {infrastructurePoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <span className="text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
            Cloud Telecommunications in the Modern Era
          </h2>
          <p className="text-slate-600 max-w-3xl mb-6">
            With 45+ years of industry leadership under Terry Dickman and 35+ years of company experience, Cloud Telecommunications has been part of the fiber infrastructure evolution since the early commercial internet era.
          </p>
          <ul className="space-y-2 text-slate-700 max-w-2xl">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Underground and aerial construction for backbone and last-mile
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Horizontal directional drilling (HDD) for trenchless crossings
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Fusion splicing, OTDR testing, and turn-up
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              OSHA-compliant operations and NESC standards for aerial work
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Closeout packages and as-built documentation
            </li>
          </ul>
        </Container>
      </Section>

      <Section className="bg-primary text-white">
        <Container>
          <h2 className="text-2xl font-bold mb-2">
            Building the Next Generation of Connectivity
          </h2>
          <p className="text-slate-300 mb-6">
            Whether backbone, metro, data center, or last-mile, we provide carrier-grade fiber construction for carriers, municipalities, and general contractors.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-accent-light"
            >
              Request a Project Quote
            </Button>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-medium text-white hover:bg-white hover:text-slate-900 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
