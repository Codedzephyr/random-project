import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => (
  <footer className="bg-[#163A5B] text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-10 md:grid-cols-4 items-start">
        {/* Company */}
        <div>
          <div className="font-extrabold text-lg">LPS-HYPROPS</div>
          <div className="text-[11px] opacity-80">
            LOCAL CONTENT | GLOBAL STANDARDS
          </div>
        </div>

        {/* Services Links */}
        <div>
          <div className="text-sm font-bold tracking-wide">OUR SERVICES</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>
              <Link to="/services#engineering">
                Engineering, Procurement & Fabrication
              </Link>
            </li>
            <li>
              <Link to="/services#construction">
                Construction & Installation
              </Link>
            </li>
            <li>
              <Link to="/services#subsea">Subsea Life of Field Services</Link>
            </li>
            <li>
              <Link to="/services#facilities">Facilities O&M</Link>
            </li>
            <li>
              <Link to="/services#manpower">Manpower Outsourcing</Link>
            </li>
            <li>
              <Link to="/services#scm">Supply Chain Management</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-sm font-bold tracking-wide">QUICK LINKS</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/about">About US</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-sm font-bold tracking-wide">CONTACT</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>
              <a
                href="tel:+244944228887"
                className="hover:opacity-100 opacity-80"
              >
                +244 944 228 887
              </a>
            </li>
            <li>
              <a
                href="mailto:info@lps-hyprops.com"
                className="hover:opacity-100 opacity-80"
              >
                info@lps-hyprops.com
              </a>
            </li>
            <li>
              Talatona Condominio Mirantes, Case Número C18, Luanda – Angola
            </li>
            <li>
              Rua de Timor Casa S/N, Bairro Marien Ngouabi, Cabinda – Angola
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-8 flex gap-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center"
        >
          F
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center"
        >
          X
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center"
        >
          in
        </a>
        <a
          href="mailto:info@lps-hyprops.com"
          className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center"
        >
          @
        </a>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-xs opacity-80">
        ©
      </div>
    </div>
  </footer>
);
