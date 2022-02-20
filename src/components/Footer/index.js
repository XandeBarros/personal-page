import React, { useContext } from 'react';

import { Container } from './styles';

import { DataContext } from '../../App';

export default function Footer() {
  const context = useContext(DataContext);

  return(
    <Container>
      <p>{context.footer}</p>
    </Container>
  );
};
