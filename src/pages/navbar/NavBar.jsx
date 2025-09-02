// Navbar.jsx
import React, { useState } from "react";
import './Navbar.scss';

function Navbar({ projects, skills }) {
  const [dropdown, setDropdown] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="navbar">
      <ul>
        <li
          onMouseEnter={() => setDropdown("projects")}
          onMouseLeave={() => setDropdown(null)}
        >
          Projects
          {dropdown === "projects" && (
            <ul className="dropdown">
              {projects.map((p, i) => (
                <li key={i} onClick={() => scrollTo(`project-${i}`)}>
                  {p.title}
                </li>
              ))}
            </ul>
          )}
        </li>

        <li
          onMouseEnter={() => setDropdown("skills")}
          onMouseLeave={() => setDropdown(null)}
        >
          Skills
          {dropdown === "skills" && (
            <ul className="dropdown">
              {skills.map((s, i) => (
                <li key={i} onClick={() => scrollTo(`skill-${i}`)}>
                  {s.name}
                </li>
              ))}
            </ul>
          )}
        </li>

        <li onClick={() => scrollTo("contact")}>Contact</li>

        <li
          onMouseEnter={() => setDropdown("social")}
          onMouseLeave={() => setDropdown(null)}
        >
          Social Media
          {dropdown === "social" && (
            <ul className="dropdown">
              <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank">GitHub</a></li>
              <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
