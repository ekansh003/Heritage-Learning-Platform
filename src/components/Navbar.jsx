import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      const sections = ["home", "services", "our-work", "team", "contact"];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">Exploristory</div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/#services"
              className={activeSection === "services" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/#our-work"
              className={activeSection === "our-work" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Our Work
            </Link>
          </li>

          <li>
            <Link
              to="/#team"
              className={activeSection === "team" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Team & Mentors
            </Link>
          </li>

          <li>
            <Link
              to="/#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
