import React from "react";
import { SectionTitle } from "../components/section-title";
import PageHero from "../components/PageHero";

const offices = [
  {
    id: "luanda",
    city: "Luanda Office",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.6628813890693!2d13.193603975017512!3d-8.91089909114582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f5c26751e6f1%3A0xc2b151891ca73259!2sCondom%C3%ADnio%20Mirantes%20do%20Talatona!5e0!3m2!1sen!2sng!4v1757425383094!5m2!1sen!2sng",
    address: "Talatona Condominio Mirantes, Case Número C18, Luanda – Angola",
    email: "info@lps-hyprops.com",
    phone: "+244 944 228 887",
  },
  {
    id: "cabinda",
    city: "Cabinda Office",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0402093567495!2d12.188633674307026!3d-5.561058994419398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a5dd3a087964861%3A0x9b7469f33c288a28!2sR.%20de%20Timor%2C%20Cabinda%2C%20Angola!5e0!3m2!1sen!2sng!4v1757425860875!5m2!1sen!2sng",
    address: "Rua de Timor Casa S/N, Bairro Marien Ngouabi, Cabinda – Angola",
    email: "info@lps-hyprops.com",
    phone: "+244 944 228 887",
  },
];

const ContactPage: React.FC = () => (
  <main>
    {/* Hero Section */}
    <PageHero title="Contact" image="/images/contact-hero.jpg" />

    {/* Page Content */}
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="CONTACT US"
          title="Where to Find Us"
          subtitle="Get in touch with Hyprops-LPS at our offices in Angola."
        />

        <div className="mt-12 space-y-16">
          {offices.map((office, i) => (
            <div
              key={office.id}
              className={`grid gap-8 lg:grid-cols-2 items-start ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Google Map */}
              <div className="w-full h-80">
                <iframe
                  src={office.map}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg border"
                ></iframe>
              </div>

              {/* Contact Details */}
              <div className="bg-[#163A5B] text-white rounded-lg p-8 shadow-md">
                <h3 className="text-lg font-bold">{office.city}</h3>
                <p className="mt-4 text-sm leading-relaxed">{office.address}</p>
                <p className="mt-3 text-sm">
                  <a href={`mailto:${office.email}`} className="hover:underline">
                    {office.email}
                  </a>
                </p>
                <p className="mt-1 text-sm">
                  <a href={`tel:${office.phone}`} className="hover:underline">
                    {office.phone}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default ContactPage;
