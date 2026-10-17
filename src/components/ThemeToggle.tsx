// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import './ThemeToggle.scss';

const ThemeToggle: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="themeButtonStyles"
      aria-label={darkMode ? t('controls.lightMode') : t('controls.darkMode')}
    >
      {darkMode ? (
        <span className="sun-icon" title={t('controls.lightMode')}>🌞</span>
      ) : (
        <span className="moon-icon" title={t('controls.darkMode')}>🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;
