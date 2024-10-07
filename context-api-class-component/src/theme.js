import React from 'react';

// theme.js
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
  red: "red"
};
const ThemeContext = React.createContext({
  theme: themes,
  toggleTheme: () => {},
});

//const ThemeContext = React.createContext('light');

export default ThemeContext;