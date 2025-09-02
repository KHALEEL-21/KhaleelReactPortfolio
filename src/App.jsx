//app.jsx
import './App.scss';
import { ThemeProvider } from './context/ThemeContext';
import { ColorProvider } from './context/ColorContext';
import ThemeToggle from './components/ThemeToggle';
import ColorPicker from './components/ColorPicker';
import Home from './pages/Home';
import Footer from './components/Footer';
import AppLogoKS from './assets/ks-logo-fnt-trans.png';
import LanguagePicker from './components/LanguagePicker';
// import './i18n';
// import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <ColorProvider>
      {/* <LanguageProvider> */}
        <div className="app">
          <header className="app-header">
            <div className='logoSpace'>
              <img src={AppLogoKS} alt="KS Logo" className="AppLogoKS" />
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
