import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of the context value
type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  color: string;
  setColor: (color: string) => void;
};

// Create the ThemeContext with an undefined default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light'); // default theme
  const [color, setColor] = useState('red');   // default color

  // Persist theme and color preferences using localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedColor = localStorage.getItem('color');
    if (savedTheme) setTheme(savedTheme);
    if (savedColor) setColor(savedColor);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('color', color);
  }, [theme, color]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
