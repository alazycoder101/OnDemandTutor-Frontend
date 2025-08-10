import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { lightTheme, darkTheme, blueTheme } from '../themes';
import { ConfigProvider } from 'antd';

// Define theme types
export type ThemeType = 'light' | 'dark' | 'blue';

export interface ThemeColors {
  primary: string;
  secondary: string;
  facebook: string;
  info: string;
  warning: string;
  success: string;
  error: string;
  grey: string;
  yellow: string;
  blue: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textQuaternary: string;
  disabledPlaceholder: string;
  divider: string;
  hoverPrimary: string;
  hoverSecondary: string;
  white: string;
  black: string;
  shadowForm: string;
  shadowCart: string;
  shadowDropdown: string;
  shadowCartHover: string;
  shadowPurchased: string;
  shadowPurchasedHover: string;
  shadowButton: string;
  overlayImage: string;
  borderDefault: string;
  borderInput: string;
  starIcon: string;
  descTabBorder: string;
  done: string;
  doneBackground: string;
  processing: string;
  processingBackground: string;
  incoming: string;
  incomingBackground: string;
  cancel: string;
  cancelBackground: string;
  pending: string;
  pendingBackground: string;
  borderSchedule: string;
  toolbarBg: string;
  adminBackground: string;
  background: string;
  backgroundGradient?: string;
}

export interface Theme {
  name: ThemeType;
  colors: ThemeColors;
  transition: {
    primary: string;
  };
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setCurrentTheme: (themeType: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

// Save theme to localStorage
const saveThemeToLocalStorage = (theme: Theme) => {
  try {
    localStorage.setItem('selectedTheme', JSON.stringify(theme));
  } catch (error) {
    console.error('Failed to save theme to local storage:', error);
  }
};

// Load theme from localStorage or use default
const loadThemeFromLocalStorage = (): Theme => {
  try {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      return JSON.parse(savedTheme);
    }
  } catch (error) {
    console.error('Failed to load theme from local storage:', error);
  }

  // Default theme based on system preference or environment variable
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = import.meta.env.VITE_DEFAULT_THEME as ThemeType | undefined;

  if (defaultTheme === 'dark' || (!defaultTheme && prefersDark)) {
    return darkTheme;
  } else if (defaultTheme === 'blue') {
    return blueTheme;
  } else {
    return lightTheme;
  }
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentThemeState] = useState<Theme>(loadThemeFromLocalStorage());

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    for (const color in currentTheme.colors) {
      root.style.setProperty(`--${color}-color`, currentTheme.colors[color as keyof ThemeColors]);
    }
    // Set transition property
    root.style.setProperty('--transition-primary', currentTheme.transition.primary);
  }, [currentTheme]);

  const setTheme = (theme: Theme) => {
    setCurrentThemeState(theme);
    saveThemeToLocalStorage(theme);
  };

  const toggleTheme = () => {
    if (currentTheme.name === 'light') {
      setTheme(darkTheme);
    } else if (currentTheme.name === 'dark') {
      setTheme(blueTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  const setCurrentTheme = (themeType: ThemeType) => {
    switch (themeType) {
      case 'light':
        setTheme(lightTheme);
        break;
      case 'dark':
        setTheme(darkTheme);
        break;
      case 'blue':
        setTheme(blueTheme);
        break;
      default:
        setTheme(lightTheme);
    }
  };

  // Create Ant Design theme config based on current theme
  const antdThemeConfig = {
    token: {
      colorPrimary: currentTheme.colors.primary,
      colorLink: currentTheme.colors.primary,
      colorText: currentTheme.colors.textPrimary,
      colorTextSecondary: currentTheme.colors.textSecondary,
      colorBorder: currentTheme.colors.border,
      colorBgContainer: currentTheme.colors.white,
      colorBgElevated: currentTheme.colors.white,
      fontFamily: 'Roboto',
    },
    components: {
      Button: {
        colorPrimary: currentTheme.colors.primary,
        colorPrimaryHover: currentTheme.colors.primary,
        colorPrimaryActive: currentTheme.colors.primary,
        primaryColor: currentTheme.colors.white,
      },
      Input: {
        colorBorder: currentTheme.colors.borderInput,
        colorText: currentTheme.colors.textPrimary,
        colorTextPlaceholder: currentTheme.colors.disabledPlaceholder,
      },
      Select: {
        colorBorder: currentTheme.colors.borderInput,
        colorText: currentTheme.colors.textPrimary,
      },
      Collapse: {
        colorBorder: currentTheme.colors.border,
        colorText: currentTheme.colors.textPrimary,
        colorTextHeading: currentTheme.colors.textPrimary,
      },
      Form: {
        colorText: currentTheme.colors.textPrimary,
      },
      Typography: {
        colorText: currentTheme.colors.textPrimary,
        colorTextSecondary: currentTheme.colors.textSecondary,
      },
    },
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme, toggleTheme, setCurrentTheme }}>
      <ConfigProvider theme={antdThemeConfig}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};