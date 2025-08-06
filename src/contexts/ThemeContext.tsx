import React, { createContext, useState, useContext, useEffect } from 'react';
import { lightTheme, darkTheme, blueTheme } from '../themes';

interface ThemeContextType {
  theme: any; // Replace with a more specific type later
  setTheme: (theme: any) => void; // Replace with a more specific type later
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const saveThemeToLocalStorage = (theme: any) => {
  try {
    localStorage.setItem('selectedTheme', JSON.stringify(theme));
  } catch (error) {
    console.error('Failed to save theme to local storage:', error);
  }
};

const loadThemeFromLocalStorage = () => {
  try {
    const savedTheme = localStorage.getItem('selectedTheme');
    return savedTheme ? JSON.parse(savedTheme) : lightTheme;
  } catch (error) {
    console.error('Failed to load theme from local storage:', error);
    return lightTheme;
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setCurrentTheme] = useState(loadThemeFromLocalStorage());

  const setTheme = (theme: any) => {
    setCurrentTheme(theme);
    saveThemeToLocalStorage(theme);
    // Update CSS variables on the document body
    const root = document.documentElement;
    for (const color in theme.colors) {
      root.style.setProperty(`--${color}-color`, theme.colors[color]);
    }
  };

  useEffect(() => {
    // Set initial CSS variables on mount
    const root = document.documentElement;
    for (const color in theme.colors) {
      root.style.setProperty(`--${color}-color`, theme.colors[color]);
    }
  }, [theme]); // Update when theme changes

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};