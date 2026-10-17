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

function App() {
  return (
    <ThemeProvider>
      <ColorProvider>
        {/* <LanguageProvider> */}
        <div className="app">
          <header className="app-header">
            <a className="brand" href="#home" aria-label="Khaleelullah Sheriff home">
              <span className="brand-mark" aria-hidden="true">K.</span>
              <span>Khaleelullah Sheriff<span className="brand-role"> / Frontend Engineer</span></span>
            </a>
            <nav className="site-nav" aria-label="Main navigation">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a className="nav-resume" href={resumeFile} download="Khaleelullah-Sheriff-Resume.pdf">Resume ↓</a>
              <a className="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
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
