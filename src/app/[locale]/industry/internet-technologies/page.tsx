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
    title: "Internet Technologies",
    description:
      "Explore the core internet technologies powering backbone networks, FTTH deployments, data center interconnects, and modern fiber infrastructure.",
    path: `/${locale}/industry/internet-technologies`,
  });
}

const technologySections = [
  {
    title: "Optical Fiber Technology",
    items: [
      "Single-Mode Fiber",
      "Multi-Mode Fiber",
      "Ribbon Fiber",
      "High-Count Fiber",
    ],
    body: "Optical fiber forms the physical medium for light-based data transmission. Single-mode fiber supports long-haul and high-capacity applications; multi-mode fiber serves shorter distances in premises and data centers. Ribbon and high-count configurations enable dense cabling for backbone and distribution segments.",
  },
  {
    title: "Passive Optical Networks (PON)",
    items: ["GPON", "XGS-PON", "OLT", "ONT"],
    body: "PON architectures use passive splitters to distribute a single OLT port to multiple ONTs. GPON provides gigabit-class symmetric and asymmetric access; XGS-PON extends that to 10 Gbps symmetric. OLT equipment resides in the central office or hub; ONTs terminate at the customer premise.",
  },
  {
    title: "Wavelength Technologies",
    items: ["DWDM", "CWDM", "100G / 400G / 800G Transmission"],
    body: "Wavelength division multiplexing increases fiber capacity by carrying multiple signals on distinct wavelengths. DWDM uses closely spaced channels for long-haul and data center links; CWDM suits shorter metro distances. Line-side interfaces support 100G, 400G, and 800G coherent transmission for backbone routes.",
  },
  {
    title: "Network Architecture",
    items: [
      "Backbone Networks",
      "Metro Networks",
      "FTTH / FTTP",
      "Ring Topology",
      "Star Topology",
      "Mesh Networks",
    ],
    body: "Backbone networks connect cities and regions; metro networks serve metropolitan areas and interconnection points. FTTH and FTTP bring fiber to homes and businesses. Ring, star, and mesh topologies provide different redundancy and scalability characteristics for carrier and enterprise designs.",
  },
  {
    title: "Data Center & Interconnection",
    items: [
      "Data Center Interconnect (DCI)",
      "Diverse Path",
      "Entrance Facility",
      "Meet-Me Room",
    ],
    body: "DCI links data centers over dedicated or shared fiber. Diverse path routing avoids single points of failure. The entrance facility is the building entry point for external fiber; the meet-me room is the interconnection space where carriers and tenants cross-connect within a facility.",
  },
  {
    title: "Construction & Deployment Technologies",
    items: [
      "HDD (Horizontal Directional Drilling)",
      "Microtrenching",
      "Conduit Systems",
      "Cable Blowing & Pulling",
    ],
    body: "HDD enables trenchless installation under roads, water bodies, and utilities. Microtrenching uses narrow shallow slots for urban deployment. Conduit systems protect cable from moisture and mechanical damage. Cable blowing and pulling are the primary methods for placing fiber inside conduit.",
  },
  {
    title: "Testing & Validation",
    items: [
      "OTDR Testing",
      "Power Meter Testing",
      "Fiber Characterization",
      "Closeout Documentation",
    ],
    body: "OTDR testing measures loss and locates faults along fiber spans. Power meter and light source pairs verify end-to-end insertion loss. Fiber characterization assesses dispersion and advanced parameters for high-speed systems. Closeout documentation captures as-builts and test results for project handoff.",
  },
];

export default async function InternetTechnologiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 sm:py-28">
        <Container>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Internet Technologies
          </h1>
          <p className="mt-4 text-xl text-slate-300 font-medium">
            Core Systems Powering Modern Fiber Infrastructure
          </p>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Modern connectivity depends on the integration of optical transmission, access technologies, and construction methodologies. From backbone wavelength systems to last-mile PON, each layer relies on properly designed and installed fiber infrastructure to deliver the performance users expect.
          </p>
        </Container>
      </section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologySections.map((section, i) => (
              <article
                key={section.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h2 className="text-lg font-bold text-primary mb-3">
                  {section.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {section.body}
                </p>
                <ul className="space-y-1.5">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
            Physical Infrastructure Enables Digital Performance
          </h2>
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            All advanced transmission systems—from coherent 400G to GPON—depend on properly installed underground and aerial fiber infrastructure. OSP construction quality, splicing precision, restoration standards, and documentation practices directly affect signal integrity and long-term reliability. Cloud Telecommunications provides the construction layer that makes these technologies operational in the field.
          </p>
        </Container>
      </Section>

      <Section className="bg-primary text-white">
        <Container>
          <h2 className="text-2xl font-bold mb-2">
            Engineering the Infrastructure Behind Connectivity
          </h2>
          <p className="text-slate-300 mb-6">
            Underground and aerial construction, HDD, splicing, testing, and closeout—for carriers, data centers, municipalities, and general contractors.
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
