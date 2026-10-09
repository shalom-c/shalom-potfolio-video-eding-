"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Shalom Taki Sunday, home">
          STS<span>.</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="nav-links"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links${isOpen ? " is-open" : ""}`} id="nav-links">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#tools" onClick={closeMenu}>Tools</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            className="nav-cta"
            href="mailto:takisunday3@gmail.com?subject=Video%20editing%20project%20inquiry&body=Hi%20Shalom%2C%0A%0AI%27d%20like%20to%20talk%20about%20a%20video%20editing%20project.%0A%0A"
            onClick={closeMenu}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
