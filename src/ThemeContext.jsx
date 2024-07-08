import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  color: 'lightcoral',
  toggle: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('lightcoral');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'lightcoral' ? '#1a1a1a' : 'lightcoral'));
  };

  const contextValue = {
    color: theme,
    toggle: toggleTheme,
  };

  /* //! The ThemeContext.Provider => .Provider is removed */
  return (
    <ThemeContext value={contextValue}>
      {children}
    </ThemeContext>
  );
};
