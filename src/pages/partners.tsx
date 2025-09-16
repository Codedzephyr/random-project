import React from "react";
import { SectionTitle } from "../components/section-title";
import PageHero from "../components/PageHero";

const partners = [
  {
    id: "spongejet",
    title: "Sponge-Jet",
    desc: `Leader in clean, dry, low-dust abrasive blasting. Benefits include reduced rework, minimized equipment risk, and cost savings through reusable blasting media.`,
    img: "/images/spongejet.jpg",
  },
  {
    id: "tesla",
    title: "Tesla Nanocoatings",
    desc: `Cutting-edge nano-based two-coat paint systems offering superior corrosion protection, UV and weather resilience, and long surface lifetime.`,
    img: "/images/tesla.jpg",
  },
  {
    id: "durapol",
    title: "DuraPol",
    desc: `Advanced anti-corrosion coatings designed for highly acidic environments across industries like oil & gas, petrochemical, wastewater, and marine.`,
    img: "/images/durapol.png",
  },
  {
    id: "hcs",
    title: "HCS Control Systems",
    desc: `Design, manufacture, and maintenance of subsea distribution units, hydraulic production systems, and topside control equipment.`,
    img: "/images/hcs.jpg",
  },
  {
    id: "pico",
    title: "Pico Flow Controls (AYMO)",
    desc: `Cloud-based Pipeline Integrity Management System providing real-time monitoring, anomaly detection, corrosion prediction, and maintenance planning.`,
    img: "/images/pico.jpg",
  },
];

const PartnersPage: React.FC = () => (
  <main>
    {/* Hero Section */}
    <PageHero title="Partners" image="/images/partners-hero.jpg" />

    {/* Page Content */}
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="OUR PARTNERS"
          title="Technology Partnerships"
          subtitle="We collaborate with leading OEMs to deliver innovative, reliable, and sustainable solutions."
        />

        <div className="mt-12 space-y-16">
          {partners.map((p, i) => (
            <div
              key={p.id}
              id={p.id}
              className={`grid gap-8 lg:grid-cols-2 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text */}
              <div>
                <h3 className="text-xl font-bold text-neutral-800">{p.title}</h3>
                <p className="mt-4 text-neutral-600 leading-relaxed">{p.desc}</p>
                <button className="mt-5 inline-flex items-center rounded-lg bg-[#163A5B] px-5 py-2 text-sm font-semibold text-white hover:opacity-90">
                  Read More
                </button>
              </div>

              {/* Image */}
              <div>
                <img
                  src={p.img}
                  alt={p.title}
                  className="rounded-lg shadow-md object-cover w-full h-64"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default PartnersPage;
