import React, { useState, useEffect } from 'react';
import { InfoIntro, InfoInfo, InfoAbility } from './Infos';

import { Container, CardBox, Card, Infos } from './styles';

import introIcon from '../../assets/images/icons/intro.svg';
import infoIcon from '../../assets/images/icons/info.svg';
import classIcon from '../../assets/images/icons/class.svg';

export default function About() {
  const [content, setContent] = useState('intro');

  return(
    <Container id="sobre">
      <CardBox>
        <Card id="card-intro" className={content === 'intro' ? 'active' : null} onClick={() => {
          setContent('intro');
        }}>
          <div>
            <h3>Introdução</h3>
            <p>Me conheça um pouco ;)</p>
          </div>

          <img src={introIcon} />
        </Card>

        <Card id="card-info" className={content === 'infos' ? 'active' : null} onClick={() => setContent('infos')}>
          <div>
            <h3>Infomações</h3>
            <p>Minhas informações completas</p>
          </div>

          <img src={infoIcon} />
        </Card> 
        
        <Card id="card-skills" className={content === 'abilities' ? 'active' : null} onClick={() => setContent('abilities')}>
          <div>
            <h3>Habilidades</h3>
            <p>Minhas Skills</p>
          </div>

          <img src={classIcon} />
        </Card> 
      </CardBox>

      {content === 'intro' ? <InfoIntro /> : content === 'infos' ? <InfoInfo /> : <InfoAbility />}
    </Container>
  );
};
