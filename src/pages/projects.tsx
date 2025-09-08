import React from "react";
import { SectionTitle } from "../components/section-title";
import { Card } from "../components/card";

const ProjectsPage: React.FC = () => (
  <main className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="OUR PROJECTS"
        title="Delivering Excellence Across Oil & Gas"
        subtitle="A snapshot of the projects and work scopes carried out by Hyprops-LPS."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Pipeline Integrity & Maintenance",
            desc: "Flowline rehabilitation, tank cleaning, metering station upgrades, and SCADA/PLC systems integration.",
          },
          {
            title: "Subsea Systems",
            desc: "Design, refurbishment, and testing of subsea distribution units, IWOCS, HPUs, and umbilical reelers.",
          },
          {
            title: "Facilities O&M",
            desc: "Surface preparation, coating, scaffolding, rope access, and corrosion control for critical assets.",
          },
          {
            title: "Fabrication",
            desc: "Cargo baskets, HVAC stands, cutting boxes, ducts, and offshore structures fabricated to standard.",
          },
          {
            title: "Manpower Deployment",
            desc: "Recruitment, training, and placement of skilled professionals across Angola’s oil & gas industry.",
          },
          {
            title: "OEM Technology Integration",
            desc: "Use of SpongeJet blasting, Tesla Nanocoatings, DuraPol protection systems, and AYMO pipeline software.",
          },
        ].map((proj) => (
          <Card
