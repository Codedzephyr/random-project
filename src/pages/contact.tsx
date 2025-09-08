import React from "react";
import { SectionTitle } from "../components/section-title";

const ContactPage: React.FC = () => (
  <main className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="CONTACT US"
        title="Where to Find Us"
        subtitle="Reach out to Hyprops-LPS at our offices."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2 items-start">
        {/* Google Map */}
        <div className="w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.598061623882!2d3.524618574929306!3d6.433676993556895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5bbf4a8b2f3%3A0x6f3db4971a3cf5b8!2s6%20Ojulari%20Rd%2C%20Lekki%20Penninsula%20II%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1694175468236!5m2!1sen!2sng"
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-lg border"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>

        {/* Contact Details */}
        <div className="bg-[#163A5B] text-white rounded-lg p-8 shadow-md">
          <h3 className="text-lg font-bold">Lagos Office</h3>
          <p className="mt-4 text-sm leading-relaxed">
            HyGroup Place – 6, Ojulari Street, Off Kusenla Road, Ikate Elegushi,
            Lekki Phase 1, Lagos, Nigeria
          </p>
          <p className="mt-3 text-sm">
            <a href="mailto:info@hyprops.com" className="hover:underline">
              info@hyprops.com
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a href="tel:+23412717297" className="hover:underline">
              +234 (1) 271 7297
            </a>
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default ContactPage;
