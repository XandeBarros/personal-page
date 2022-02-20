import React, { useContext } from 'react';

import { Container, CardPort } from './styles';

import portFrontEndMentor from '../../assets/images/portifolio/front-end-mentor.jpg';
import portLandingPage from '../../assets/images/portifolio/landing-page.jpg';
import portWeatherApp from '../../assets/images/portifolio/weather-app.jpg';

const portifolioImages = [portFrontEndMentor, portWeatherApp, portLandingPage];

import { DataContext } from '../../App';

export default function Portifolio() {
  const context = useContext(DataContext);

  return (
    <Container id="portifolio">
      {context.portifolio.map((project, index) => (
        <CardPort>
          <a href={project.repo}>
            <h3>{project.title}</h3>
            <img src={portifolioImages[index]}></img>
            <p>{project.description}</p>
          </a>
        </CardPort>
      ))}
    </Container>
  );
};
