import React from 'react';

import { Container } from './styles';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';
import emailIcon from '../../assets/images/icons/email.svg';

export default function Contact() {
  return(
    <Container id="contato">
      <div>
        <h2>Contato</h2>
        <p>Entre em contato comigo!</p>
        
        <a href="mailto:xandebarrosdev@gmail.com">
          <img src={emailIcon}/>
          <p>xandebarrosdev@gmail.com</p>
        </a>

        <a href="tel:+559991172727">
          <img src={whatsIcon}/>
          <p>+55 (99) 99117-2727</p>
        </a>
      </div>
    </Container>
  );
};
