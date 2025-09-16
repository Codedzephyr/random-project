import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NavA: React.FC<{ to: string; label: string }> = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm md:text-[15px] font-medium px-3 py-2 transition ${
        isActive ? "text-neutral-900" : "text-neutral-700 hover:text-neutral-900"
      }`
    }
    end
  >
    {label}
  </NavLink>
);

export const TopBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const about = [{ to: "/about", label: "About Us" }];

  const services = [
    { to: "/services/engineering-solutions", label: "Engineering Solutions" },
    { to: "/services/fabrication-construction", label: "Fabrication & Construction" },
    { to: "/services/subsea-life-of-field", label: "Subsea Life of Field" },
    { to: "/services/operations-maintenance", label: "Operations & Maintenance" },
    { to: "/services/manpower-outsourcing", label: "Manpower Outsourcing" },
    { to: "/services/procurement-supply-chain", label: "Procurement & Supply Chain" },
  ];

  const nav = [
    { to: "/projects", label: "Projects" },
    { to: "/partners", label: "Partners" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/90 border-b border-neutral-200 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="LPS-HYPROPS Logo"
            className="max-h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <NavLink
              to="/about"
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              About Us ▾
            </NavLink>
            {aboutOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-neutral-200 shadow-lg rounded-lg">
                {about.map((a) => (
                  <NavLink
                    key={a.to}
                    to={a.to}
                    className="block px-5 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    {a.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink
              to="/services"
              className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              Services ▾
            </NavLink>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-neutral-200 shadow-lg rounded-lg">
                {services.map((s) => (
                  <NavLink
                    key={s.to}
                    to={s.to}
                    className="block px-5 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    {s.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Other Nav Links */}
          {nav.map((n) => (
            <NavA key={n.to} to={n.to} label={n.label} />
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 border border-neutral-200 rounded"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-4 py-3">
            <details className="mb-2">
              <summary className="font-medium cursor-pointer">About Us</summary>
              <ul className="pl-4">
                {about.map((a) => (
                  <li key={a.to}>
                    <NavLink
                      to={a.to}
                      onClick={() => setOpen(false)}
                      className="block py-1"
                    >
                      {a.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>
            <details className="mb-2">
              <summary className="font-medium cursor-pointer">Services</summary>
              <ul className="pl-4">
                {services.map((s) => (
                  <li key={s.to}>
                    <NavLink
                      to={s.to}
                      onClick={() => setOpen(false)}
                      className="block py-1"
                    >
                      {s.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block py-2"
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
