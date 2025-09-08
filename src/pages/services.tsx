import React from "react";
import { SectionTitle } from "../components/section-title";
import PageHero from "../components/PageHero";
// import SectionTitle from "../components/section-title";
// import PageHero from "../components/page-hero";

type Service = {
  id: string;
  title: string;
  desc: string;
  img: string;
};

const services: Service[] = [
  {
    id: "engineering",
    title: "Engineering Solutions",
    desc: "We provide high-quality engineering support for oil & gas operations...",
    img: "/images/engineering.jpg",
  },
  {
    id: "maintenance",
    title: "Maintenance Services",
    desc: "Comprehensive maintenance and inspection solutions...",
    img: "/images/maintenance.jpg",
  },
  // ...other services
];

const ServicesPage: React.FC = () => (
  <main>
    <PageHero title="Services" image="/images/services-hero.jpg" />

    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="OUR SERVICES"
          title="What We Offer"
          subtitle="At Hyprops-LPS, we deliver a wide range of solutions tailored to the oil & gas industry."
        />

        <div className="mt-12 space-y-16">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid gap-8 lg:grid-cols-2 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div>
                <h3 className="text-xl font-bold text-neutral-800">
                  {s.title}
                </h3>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {s.desc}
                </p>
                <button className="mt-5 inline-flex items-center rounded-lg bg-[#163A5B] px-5 py-2 text-sm font-semibold text-white hover:opacity-90">
                  Read More
                </button>
              </div>
              <div>
                <img
                  src={s.img}
                  alt={s.title}
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

export default ServicesPage;
