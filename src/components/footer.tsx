import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => (
  <footer className="bg-[#163A5B] text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-10 md:grid-cols-4 items-start">
        
        {/* Company */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-white/90" />
            <div className="leading-tight">
              <div className="font-extrabold tracking-wide">
                HYPROPS-LPS
              </div>
              <div className="text-[11px] opacity-80">
                LOCAL CONTENT | GLOBAL STANDARDS
              </div>
            </div>
          </div>
          <div className="mt-4 h-20 w-40 rounded-lg bg-white/10 flex items-center justify-center text-xs">
            ISO Badge
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="text-sm font-bold tracking-wide">OUR SERVICES</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><Link to="/services#engineering" className="hover:opacity-100 opacity-80">Engineering, Procurement & Fabrication</Link></li>
            <li><Link to="/services#construction" className="hover:opacity-100 opacity-80">Construction & Installation</Link></li>
            <li><Link to="/services#subsea" className="hover:opacity-100 opacity-80">Subsea Life of Field Services</Link></li>
            <li><Link to="/services#facilities" className="hover:opacity-100 opacity-80">Facilities Operations & Maintenance</Link></li>
            <li><Link to="/services#manpower" className="hover:opacity-100 opacity-80">Manpower Outsourcing</Link></li>
            <li><Link to="/services#scm" className="hover:opacity-100 opacity-80">Supply Chain Management</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <div className="text-sm font-bold tracking-wide">QUICK LINKS</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><Link to="/projects" className="hover:opacity-100 opacity-80">Projects</Link></li>
            <li><Link to="/oems" className="hover:opacity-100 opacity-80">OEMs</Link></li>
            <li><Link to="/management" className="hover:opacity-100 opacity-80">Management Team</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 opacity-80">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-sm font-bold tracking-wide">CONTACT</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>+244 944 228 887</li>
            <li>info@lps-hyprops.com</li>
            <li>Talatona Condominio Mirantes, Case Número C18, Luanda – Angola</li>
            <li>Rua de Timor Casa S/N, Bairro Marien Ngouabi, Cabinda – Angola</li>
          </ul>
        </div>
      </div>

      {/* Socials */}
      <div className="mt-8 flex gap-3">
        {[
          { name: "Facebook", icon: "F", link: "#" },
          { name: "Twitter", icon: "X", link: "#" },
          { name: "LinkedIn", icon: "in", link: "#" },
          { name: "Email", icon: "@", link: "mailto:info@lps-hyprops.com" },
        ].map((s) => (
          <a
            key={s.name}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-white/20"
          >
            {s.icon}
          </a>
        ))}
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-xs opacity-80">
        © {new Date().getFullYear()} Hyprops-LPS · Privacy Policy
      </div>
    </div>
  </footer>
);
