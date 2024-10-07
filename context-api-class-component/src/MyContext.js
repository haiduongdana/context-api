import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const user = {
    name: 'Wes',
    age: 100,
    cool: true
}

export const MyContext = React.createContext({
  user: user,
  themes: themes,
  //themes: "themes",
  toggleTheme: () => {},
});

//const MyContext = React.createContext('light');
export default MyContext;