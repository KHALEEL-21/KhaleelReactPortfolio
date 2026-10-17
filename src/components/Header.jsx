import React from "react";
import ThemeToggle from "./ThemeToggle";
import ColorPicker from "./ColorPicker";
import { useTranslation } from "react-i18next";
import "./Header.scss";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="main-header">
      <div className="left-branding">
        <h1 className="name">Khaleelullah Sheriff</h1>
        <p className="role">{t("nav.role")}</p>
      </div>
      <div className="right-controls">
        <ThemeToggle />
        <ColorPicker />
      </div>
    </header>
  );
}

export default Header;
