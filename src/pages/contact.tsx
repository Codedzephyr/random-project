import React from "react";
import { SectionTitle } from "../components/section-title";
import { Card } from "../components/card";

const ContactPage: React.FC = () => (
  <main className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="CONTACT US"
        title="Get in Touch"
        subtitle="Reach out to Hyprops-LPS at our offices in Angola."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Luanda Office */}
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-bold text-neutral-800">Luanda Office</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Lourenço Larry Capita <br />
              Talatona Condominio Mirantes <br />
              Case Número C18, Luanda – Angola <br />
              Phone:{" "}
              <a href="tel:+244944228887" className="text-sky-600">
                +244 944 228 887
              </a>{" "}
              <br />
              Email:{" "}
              <a href="mailto:info@lps-hyprops.com" className="text-sky-600">
                info@lps-hyprops.com
              </a>
            </p>
          </div>
        </Card>

        {/* Cabinda Office */}
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-bold text-neutral-800">Cabinda Office</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              João Tati <br />
              Rua de Timor, Casa S/N <br />
              Bairro Marien Ngouabi, Cabinda – Angola <br />
              Phone:{" "}
              <a href="tel:+244944228887" className="text-sky-600">
                +244 944 228 887
              </a>{" "}
              <br />
              Email:{" "}
              <a href="mailto:info@lps-hyprops.com" className="text-sky-600">
                info@lps-hyprops.com
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  </main>
);

export default ContactPage;
