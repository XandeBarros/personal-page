import React, { useContext } from 'react';

import { InfosIntro, InfosInfo, InfosAbility } from './styles';

import { DataContext } from '../../../App';

export const InfoIntro = () => {
  const context = useContext(DataContext);

  return (
    <InfosIntro>
      <h3>{context.cardInfos.intro.title}</h3>
      <p>{context.cardInfos.intro.helloWorld}</p>
      <p>{context.cardInfos.intro.me}</p>
      <p>{context.cardInfos.intro.today}</p>
    </InfosIntro>
  );
};

export const InfoInfo = () => {
  const context = useContext(DataContext);

  return (
    <InfosInfo>
      <h3>{context.cardInfos.infos.title}</h3>
      <p><span>Nome: </span><br />{context.cardInfos.infos.name}</p>
      <p><span>Idade: </span><br />{context.cardInfos.infos.age}</p>
      <p><span>E-mail: </span><br />{context.cardInfos.infos.email}</p>
      <p><span>Whatsapp: </span><br />{context.cardInfos.infos.phone}</p>
      <p><span>Endereço: </span><br />{context.cardInfos.infos.place}</p>
    </InfosInfo>
  );
};

export const InfoAbility = () => {
  const context = useContext(DataContext);

  return (
    <InfosAbility>
      <h3>{context.cardInfos.abilities.title}</h3>
      <div className="skill-bars">
        <div className="bar">
          <div className="info">
            <span>Front-end</span>
          </div>
          <div className="progress-line front-end">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Back-end</span>
          </div>
          <div className="progress-line back-end">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Fullstack</span>
          </div>
          <div className="progress-line fullstack">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>English</span>
          </div>
          <div className="progress-line english">
            <span></span>
          </div>
        </div>
      </div>
    </InfosAbility>
  );
}