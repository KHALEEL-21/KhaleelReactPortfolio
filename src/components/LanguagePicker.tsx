// src/components/LanguagePicker.tsx
import React, { useState } from 'react';
import { FaLanguage } from "react-icons/fa6";
import i18n from 'i18next';
import './LanguagePicker.scss';

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: 'en', label: 'English' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'ml', label: 'മലയാളം' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
];

const LanguagePicker: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLanguage(lang.label);
    i18n.changeLanguage(lang.code);
    setOpen(false);
  };

  return (
    <div className='language-picker-wrapper'>
      <button
        className="language-icon-button"
        title="Choose Language"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
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
