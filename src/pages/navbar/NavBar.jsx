// Navbar.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './Navbar.scss';

function Navbar({ projects, skills }) {
  const { t } = useTranslation();
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
          {t("nav.projects")}
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
          {t("nav.skills")}
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

        <li onClick={() => scrollTo("contact")}>{t("footer.contact")}</li>

        <li
          onMouseEnter={() => setDropdown("social")}
          onMouseLeave={() => setDropdown(null)}
        >
          {t("social.find")}
          {dropdown === "social" && (
            <ul className="dropdown">
              <li><a href="https://linkedin.com" target="_blank">{t("social.linkedin")}</a></li>
              <li><a href="https://github.com" target="_blank">{t("social.github")}</a></li>
              <li><a href="https://instagram.com" target="_blank">{t("social.instagram")}</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
