import React from 'react';

import Title  from '../../components/Title/title';
import {ContainerComponent} from './styles'
import {Block} from '@material-ui/icons';
import {blue} from '@material-ui/core/colors';

const Error: React.FC = () => {
  return (
      <ContainerComponent>
      <Title name="Infelizmente, acabaram as vagas ! :("></Title>
      <Block style={{ fontSize:300,color: blue[500]}} />
      </ContainerComponent>
  );
}

export default Error;