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
      `text-sm md:text-[15px] font-medium px-3 py-2 transition ${
        isActive
          ? scrolled
            ? "text-neutral-900"
            : "text-white"
          : scrolled
          ? "text-neutral-700 hover:text-neutral-900"
          : "text-white hover:text-neutral-200"
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`sticky top-0 z-30 transition-all ${
        scrolled
          ? "bg-white border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="LPS-HYPROPS Logo"
            className="max-h-16"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <NavLink
              to="/about"
              className={`px-3 py-2 text-sm font-medium ${
                scrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white hover:text-neutral-200"
              }`}
            >
              About Us ▾
            </NavLink>
            {aboutOpen && (
              <div className="absolute top-full left-0 bg-white border border-neutral-200 shadow-lg rounded-lg mt-2">
                {about.map((a) => (
                  <NavLink
                    key={a.to}
                    to={a.to}
                    className="block px-4 py-2 text-sm hover:bg-neutral-100 text-neutral-700"
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
                scrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white hover:text-neutral-200"
              }`}
            >
              Services ▾
            </NavLink>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white border border-neutral-200 shadow-lg rounded-lg mt-2 w-72">
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

          {/* Other Nav Links */}
          {nav.map((n) => (
            <NavA key={n.to} to={n.to} label={n.label} scrolled={scrolled} />
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
    </header>
  );
};
