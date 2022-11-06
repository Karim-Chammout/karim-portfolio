import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

interface ThemeContextType {
  selectedTheme: string;
  themeToggler: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const savedTheme = localStorage.getItem('currentTheme');
  const [selectedTheme, setSelectedTheme] = useState(savedTheme || 'dark');

  const themeToggler = useCallback(() => {
    if (selectedTheme === 'dark') {
      setSelectedTheme('light');
      localStorage.setItem('currentTheme', 'light');
    } else {
      setSelectedTheme('dark');
      localStorage.setItem('currentTheme', 'dark');
    }
  }, [selectedTheme]);

  useEffect(() => {
    if (savedTheme === 'light') {
      setSelectedTheme('light');
    } else {
      setSelectedTheme('dark');
    }
  }, [savedTheme, selectedTheme]);

  const value = useMemo(
    () => ({
      selectedTheme,
      themeToggler,
    }),
    [selectedTheme, themeToggler]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
