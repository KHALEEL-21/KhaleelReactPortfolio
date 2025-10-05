//app.jsx
import "./App.scss";
import { ThemeProvider } from "./context/ThemeContext";
import { ColorProvider } from "./context/ColorContext";
import ThemeToggle from "./components/ThemeToggle";
import ColorPicker from "./components/ColorPicker";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LanguagePicker from "./components/LanguagePicker";
import kslogo from "./assets/ks-logo.png";

function App() {
  return (
    <ThemeProvider>
      <ColorProvider>
        {/* <LanguageProvider> */}
        <div className="app">
          <header className="app-header">
            <div style={{ marginTop: "4px" }} className="logoSpace">
              <img
                style={{ scale: "1.2", marginTop: "5px" }}
                src={kslogo}
                alt="KS Logo"
                className="AppLogoKS"
              />
            </div>
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
