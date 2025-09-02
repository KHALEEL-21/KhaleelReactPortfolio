// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.scss';

const ThemeToggle: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="themeButtonStyles"
      aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {darkMode ? (
        <span className="sun-icon" title="LightMode">🌞</span>
      ) : (
        <span className="moon-icon" title="DarkMode">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;
