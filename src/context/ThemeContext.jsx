import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(); // prop vanda yo global hunxa so sab ko lagi yeti rakheko ramro

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    // Yo logic le HTML tag ma 'dark' class thapne/hataune garchha
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    // themeprovider vitra j wrap vako hunxa (hamro case maa app.jsx) tei ho children yesko
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);