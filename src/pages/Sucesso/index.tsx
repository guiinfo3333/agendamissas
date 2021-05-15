import React from 'react';

import Title  from '../../components/Title/title';
import {ContainerComponent} from './styles'
import {Check} from '@material-ui/icons';
import { blue } from '@material-ui/core/colors';

const Sucesso: React.FC = () => {
  return (
      <ContainerComponent>
      <Title name="Agendado com sucesso, boa missa ! :)"></Title>
      <Check style={{ fontSize:300,color: blue[500]}} />
      </ContainerComponent>
  );
}

export default Sucesso;