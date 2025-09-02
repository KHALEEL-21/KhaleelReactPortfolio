// src/context/ColorContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ColorContextType {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState<string>(() => {
    return localStorage.getItem('primaryColor') || '#4f46e5';
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

export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) throw new Error('useColor must be used within ColorProvider');
  return context;
};
