import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create the theme context
export const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check if user has a saved preference in localStorage, otherwise use system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    
    // Check if user prefers dark mode via system settings
    const userPrefersDark = window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return userPrefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to document when it changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove old theme class
    root.classList.remove('light', 'dark');
    // Add new theme class
    root.classList.add(theme);
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Add prop types validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};