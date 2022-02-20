import React, { useContext } from 'react';

import { Content } from './styles';

import darkIcon from '../../assets/images/icons/dark.svg';
import lightIcon from '../../assets/images/icons/light.svg';

import { DataContext } from '../../App';

export default function ThemeSelector({ onToggleTheme }) {
  const context = useContext(DataContext);

  return(
    <Content onClick={onToggleTheme}>
      <img src={context.theme === 'dark' ? lightIcon : darkIcon}/>
    </Content>
  );
};
