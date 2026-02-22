import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li>
          <button onClick={() => scrollToSection("home")}>Home</button>
        </li>

        <li>
          <button onClick={() => scrollToSection("about")}>About</button>
        </li>

        <li>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
        </li>

        <li>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </li>

        <li>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
