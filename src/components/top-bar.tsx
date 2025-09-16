import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export const TopBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all ${
        scrolled ? "bg-white text-neutral-800" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="LPS-HYPROPS Logo"
            className="max-h-16"
          />
        </Link>

        <nav className="hidden md:flex gap-6">
          <NavLink to="/about" className="hover:underline">About Us</NavLink>
          <NavLink to="/services" className="hover:underline">Services</NavLink>
          <NavLink to="/projects" className="hover:underline">Projects</NavLink>
          <NavLink to="/partners" className="hover:underline">Partners</NavLink>
          <NavLink to="/careers" className="hover:underline">Careers</NavLink>
          <NavLink to="/contact" className="hover:underline">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};
