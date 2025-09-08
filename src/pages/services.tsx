import React from "react";
import { SectionTitle } from "../components/section-title";

const services = [
  {
    id: "manpower",
    title: "Manpower Outsourcing Services",
    desc: `Hyprops Nigeria Limited specializes in Manpower Placement and Support 
    which cuts across the oil and gas industry value chain, through exploration, 
    asset development-drilling and reservoir management, production, including 
    the development of production facilities, refining, primary distribution and 
    terminalling. We are able to supply multi-discipline project teams cutting 
    across all these areas depending on the phase of client projects...`,
    img: "/images/services/manpower.jpg",
  },
  {
    id: "facilities",
    title: "Facilities Operations & Maintenance Services",
    desc: `Hyprops’ Operations and Maintenance specialist services cover every 
    aspect of operations and maintenance, from construction and commissioning to 
    eventual decommissioning. We offer turn-key services across the life-cycle 
    of a facility within the oil, gas and power industries...`,
    img: "/images/services/facilities.jpg",
  },
  {
    id: "engineering",
    title: "Engineering, Procurement & Fabrication",
    desc: `Detailed engineering, procurement, and fabrication services tailored to 
    client requirements.`,
    img: "/images/services/engineering.jpg",
  },
  {
    id: "construction",
    title: "Construction & Installation",
    desc: `Comprehensive onshore and offshore construction and installation solutions.`,
    img: "/images/services/construction.jpg",
  },
  {
    id: "subsea",
    title: "Subsea Life of Field Services",
    desc: `End-to-end subsea intervention, inspection, and maintenance services.`,
    img: "/images/services/subsea.jpg",
  },
  {
    id: "scm",
    title: "Supply Chain Management",
    desc: `Procurement, logistics, vendor management, and local sourcing expertise.`,
    img: "/images/services/scm.jpg",
  },
];

const ServicesPage: React.FC = () => (
  <main className="bg-white py-16 lg:py-24">
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
            {/* Text */}
            <div>
              <h3 className="text-xl font-bold text-neutral-800">{s.title}</h3>
              <p className="mt-4 text-neutral-600 leading-relaxed">{s.desc}</p>
              <button className="mt-5 inline-flex items-center rounded-lg bg-[#163A5B] px-5 py-2 text-sm font-semibold text-white hover:opacity-90">
                Read More
              </button>
            </div>

            {/* Image */}
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
  </main>
);

export default ServicesPage;
