import { createContext, useContext, useState, useEffect } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState(() => {
    return localStorage.getItem('primaryColor') || '#4f46e5'; // Indigo default
  });

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    localStorage.setItem('primaryColor', primaryColor);
  }, [primaryColor]);

  return (
    <ColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
