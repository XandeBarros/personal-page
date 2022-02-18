import React, { useState } from 'react';

import { Container } from './styles';
import logoLight from '../../assets/images/black-logo.png';
import logoDark from '../../assets/images/white-logo.png';

export default function Header({ onToggleTheme, theme }) {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    console.log(color)
    window.scrollY >= 90 ? setColor(true) : setColor(false); 
  }

  window.addEventListener('scroll', changeColor);

  return(
    <Container>
      <div id="header" className={color ? 'bg-scrolling' : null}>
        <div id="content">
          <img src={theme === 'dark' ? logoDark : logoLight}></img>

          <nav>
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Habilidades</a>
            <a href="#">Portifolio</a>
            <a href="#">Contato</a>
          </nav>
        </div>
      </div>
    </Container>
  );
};
