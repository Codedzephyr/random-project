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
          Hyprops Nigeria Limited, a fully Nigerian-owned company, has
          been a trusted provider of oilfield support services in the Nigerian
          oil & gas industry since 1997. Our long-term strategy of vertical
          integration positions us to support clients across the lifecycle of
          assets—from design and engineering to operations & maintenance and
          facility decommissioning. Our team is empowered to deliver exceptional
          client satisfaction with a focus on synergy, integrity, innovation, and
          teamwork. Over 25 years, our growth has reflected our commitment to
          operational excellence and delivering exceptional value.
        </p>

        <h3 className="text-xl font-bold">Our Vision</h3>
        <p className="text-neutral-600 leading-relaxed">
          To be the leading oil & gas services company providing innovative and
          technologically driven products and services.
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
