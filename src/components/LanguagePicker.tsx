// src/components/LanguagePicker.tsx
import React, { useState } from 'react';
import { FaLanguage } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import './LanguagePicker.scss';

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'ur', label: 'اردو' },
  { code: 'ar', label: 'العربية' },
  { code: 'ml', label: 'മലയാളം' },
  { code: 'te', label: 'తెలుగు' },
];

const LanguagePicker: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  const handleLanguageSelect = (lang: Language) => {
    i18n.changeLanguage(lang.code);
    setOpen(false);
  };

  return (
    <div className='language-picker-wrapper'>
      <button
        className="language-icon-button"
        title={t('language.choose')}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={t('language.choose')}
      >
        <FaLanguage size={20} className='icon-button' />
      </button>

      {open && (
        <div className="language-options">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={`language-option ${i18n.resolvedLanguage === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageSelect(lang)}
              aria-pressed={i18n.resolvedLanguage === lang.code}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;
