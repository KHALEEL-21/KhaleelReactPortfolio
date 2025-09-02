// import { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem('darkMode') === 'true';
//   });

//   useEffect(() => {
//     document.body.className = darkMode ? 'dark' : 'light';
//     localStorage.setItem('darkMode', darkMode);
//   }, [darkMode]);

//   return (
//     <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);


import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? saved === 'true' : true; // ✅ default dark mode
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
