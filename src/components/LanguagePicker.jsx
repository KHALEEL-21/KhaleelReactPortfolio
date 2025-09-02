import './LanguagePicker.scss';
import { FaLanguage } from "react-icons/fa6";
import { useState } from "react";
import i18n from 'i18next';

const LanguagePicker = () => {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'ml', label: 'മലയാളം' },
    { code: 'es', label: 'Español' },
    { code: 'ar', label: 'العربية' },
  ];

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang.label);
    i18n.changeLanguage(lang.code); // 👈 switch language
    setOpen(false);
  };

  return (
    <div className='language-picker-wrapper'>
      <button 
        className="language-icon-button" 
        title="Choose Language"
        onClick={() => setOpen(!open)}
      >
        <FaLanguage size={22} color='rgb(31, 30, 30)' className='icon-button' />
      </button>

      {open && (
        <div className="language-options">
          {languages.map((lang) => (
            <div 
              key={lang.code}
              className={`language-option ${selectedLanguage === lang.label ? 'active' : ''}`}
              onClick={() => handleLanguageSelect(lang)}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;
