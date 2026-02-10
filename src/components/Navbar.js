import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">VIPHRUD</div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/services">Services</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/projects">Projects</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/about">About</NavLink></li>
          <li><NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
