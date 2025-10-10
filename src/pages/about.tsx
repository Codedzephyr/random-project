import React from "react";
import PageHero from "../components/PageHero";
import { SectionTitle } from "../components/section-title";

const AboutPage: React.FC = () => (
  <main>
    <PageHero title="About Us" image="/images/about-hero.jpg" />
    <section className="bg-white py-16 lg:py-24 space-y-8">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle eyebrow="ABOUT US" title="Who We Are" />
        <p className="text-neutral-600 leading-relaxed">
          LPS-Hyprops Oil & Gas Service  LDA is an angolan owned company formed 
          as a joint venture between LPS Lda and Hyprops Nigeria Limted represeting
          HYGROUP.The synergy between both companies leverages on the strength of LPS LDA (Angola)
          – specialists in industrial services and engineering and Hyprops Nigeria Limited – leaders
          in oilfield services and pipeline solutions and EPCM Services on turnkey basis.
          This synergy allows the JV to provide the following services Engineering ,Procurement ,Fabrication,
          Construction and InstallationSubsea Life of Fields ServicesFacilities Operations and Maintenance Services
          Manpower Outsourcing ServicesSupply Chain Management ServicesOur main purpose is to provide best in class 
          products and services while focused on a strong safety culture, protecting the environment while promoting 
          local content in all our operations.
        </p>

        <h3 className="text-xl font-bold">Introduction</h3>
        <p className="text-neutral-600 leading-relaxed">
          As a local company, we  are strategically located close to the operating centers 
          of companies and regulators within the oil and gas sector. We have offices in
          Luanda and Cabinda. Our fabrication bases are also in both locations.
        </p>

        <h3 className="text-xl font-bold">Our Mission</h3>
        <p className="text-neutral-600 leading-relaxed">
          To cultivate a dynamic, enduring business model fostering innovation,
          propelling growth, and delivering lasting value to stakeholders. We
          leverage local expertise and global partnerships while upholding
          high standards of health, safety, and environmental responsibility.
        </p>

        <h3 className="text-xl font-bold">Our Values</h3>
        <ul className="list-disc list-inside text-neutral-600">
          <li>Customer Orientation</li>
          <li>Leadership</li>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Teamwork</li>
        </ul>

        <h3 className="text-xl font-bold">Why Work With Us?</h3>
        <p className="text-neutral-600 leading-relaxed">
          We offer growth and advancement in a culture that prizes customer
          satisfaction, transparency, and innovation—driving performance
          improvements and high-quality outcomes for clients.
        </p>
      </div>
    </section>
  </main>
);

export default AboutPage;
