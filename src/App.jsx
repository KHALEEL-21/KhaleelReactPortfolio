//app.jsx
import "./App.scss";
import { ThemeProvider } from "./context/ThemeContext";
import { ColorProvider } from "./context/ColorContext";
import ThemeToggle from "./components/ThemeToggle";
import ColorPicker from "./components/ColorPicker";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LanguagePicker from "./components/LanguagePicker";
import resumeFile from "./assets/Khaleel_FrontendEngineer_2.pdf";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <ColorProvider>
        {/* <LanguageProvider> */}
        <div className="app">
          <header className="app-header">
            <a className="brand" href="#home" aria-label={t("nav.home")}>
              <span className="brand-mark" aria-hidden="true">K.</span>
              <span>Khaleelullah Sheriff<span className="brand-role"> / {t("nav.role")}</span></span>
            </a>
            <nav className="site-nav" aria-label={t("nav.main")}>
              <a href="#about">{t("nav.about")}</a>
              <a href="#projects">{t("nav.projects")}</a>
              <a href="#skills">{t("nav.skills")}</a>
              <a className="nav-resume" href={resumeFile} download="Khaleelullah-Sheriff-Resume.pdf">{t("nav.resume")} ↓</a>
              <a className="nav-contact" href="#contact">{t("nav.contact")} <span aria-hidden="true">↗</span></a>
            </nav>
            <div className="theme-controls">
              <ThemeToggle />
              <ColorPicker />
              <LanguagePicker />
            </div>
          </header>

          <main>
            <Home />
          </main>

          <Footer />
        </div>
        {/* </LanguageProvider>   */}
      </ColorProvider>
    </ThemeProvider>
  );
}

export default App;
