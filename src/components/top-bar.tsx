import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const NavA: React.FC<{ to: string; label: string; scrolled: boolean }> = ({
  to,
  label,
  scrolled,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm md:text-[15px] font-medium px-3 py-2 transition-colors ${
        isActive
          ? scrolled
            ? "text-neutral-900"
            : "text-white"
          : scrolled
          ? "text-neutral-700 hover:text-neutral-900"
          : "text-white/80 hover:text-white"
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-30 transition-colors duration-300 ${
        scrolled ? "bg-white border-b border-neutral-200" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="LPS-HYPROPS Logo"
            className="max-h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <NavLink
              to="/about"
              className={`px-3 py-2 text-sm font-medium ${
                scrolled
                  ? "text-neutral-700 hover:text-neutral-900"
                  : "text-white hover:text-white/90"
              }`}
            >
              About Us ▾
            </NavLink>
            {aboutOpen && (
              <div className="absolute top-full left-0 w-48 bg-white border border-neutral-200 shadow-lg rounded-lg mt-2">
                {about.map((a) => (
                  <NavLink
                    key={a.to}
                    to={a.to}
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
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
              className={`px-3 py-2 text-sm font-medium ${
                scrolled
                  ? "text-neutral-700 hover:text-neutral-900"
                  : "text-white hover:text-white/90"
              }`}
            >
              Services ▾
            </NavLink>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-72 bg-white border border-neutral-200 shadow-lg rounded-lg mt-2">
                {services.map((s) => (
                  <NavLink
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    {s.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          {nav.map((n) => (
            <NavA key={n.to} to={n.to} label={n.label} scrolled={scrolled} />
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`hidden md:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90 ${
              scrolled
                ? "bg-neutral-900 text-white"
                : "bg-white/10 text-white border border-white/30"
            }`}
          >
            Get in touch
          </Link>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 rounded ${
              scrolled ? "border border-neutral-200" : "border border-white/50"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className={scrolled ? "text-neutral-800" : "text-white"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-4 py-3">
            {/* About Us */}
            <details className="mb-2">
              <summary className="font-medium cursor-pointer">About Us</summary>
              <ul className="pl-4">
                {about.map((a) => (
                  <li key={a.to}>
                    <NavLink to={a.to} onClick={() => setOpen(false)} className="block py-1">
                      {a.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>

            {/* Services */}
            <details className="mb-2">
              <summary className="font-medium cursor-pointer">Services</summary>
              <ul className="pl-4">
                {services.map((s) => (
                  <li key={s.to}>
                    <NavLink to={s.to} onClick={() => setOpen(false)} className="block py-1">
                      {s.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>

            {/* Other nav */}
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
