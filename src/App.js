import React, { useState, useMemo, useEffect, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import ThemeSelector from './components/ThemeSelector';
import Home from './components/Home';
import About from './components/About';
import Portifolio from './components/Portifolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import themes from './styles/themes';

import data from './Util/data';

export const DataContext = React.createContext(data);

function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark; 
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return(
    <ThemeProvider theme={currentTheme}>
      <DataContext.Provider value={{...data, theme}}>
        <GlobalStyle />
        <Header theme={theme}/>
        <ThemeSelector onToggleTheme={handleToggleTheme} />
        <Home />
        <About />
        <Portifolio />
        <Contact />
        <Footer />
      </DataContext.Provider>
    </ThemeProvider>
  );
};

export default App;
