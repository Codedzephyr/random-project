import React from "react";
import { SectionTitle } from "../components/section-title";

const offices = [
  {
    id: "luanda",
    city: "Luanda Office",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!...YOUR_MAP_EMBED_HERE...",
    address: "Talatona Condominio Mirantes, Case Número C18, Luanda – Angola",
    email: "info@lps-hyprops.com",
    phone: "+244 944 228 887",
  },
  {
    id: "cabinda",
    city: "Cabinda Office",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!...YOUR_MAP_EMBED_HERE...",
    address: "Rua de Timor Casa S/N, Bairro Marien Ngouabi, Cabinda – Angola",
    email: "info@lps-hyprops.com",
    phone: "+244 944 228 887",
  },
];

const ContactPage: React.FC = () => (
  <main className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
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
  </main>
);

export default ContactPage;
