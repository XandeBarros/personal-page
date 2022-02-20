import React, { useState } from 'react';

import { Container } from './styles';
import logoLight from '../../assets/images/black-logo.png';
import logoDark from '../../assets/images/white-logo.png';

export default function Header({ onToggleTheme, theme }) {
  const [isScrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    window.scrollY >= 90 ? setScrolling(true) : setScrolling(false); 
  }

  window.addEventListener('scroll', handleScroll);

  return(
    <Container>
      <div id="header" className={isScrolling ? 'bg-scrolling' : null}>
        <div id="content">
          <img src={theme === 'dark' ? logoDark : logoLight}></img>

          <nav>
            <a href="#">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#portifolio">Portifolio</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </div>
    </Container>
  );
};
