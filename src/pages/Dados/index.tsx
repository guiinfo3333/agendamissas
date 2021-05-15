import React from 'react';
import Title from '../../components/Title/title';
import ButtonConfirmar from '../../components/ButtonConfirmar/buttonconfirmar';
import {ContainerComponent} from './styles'

const Dados: React.FC = () => {
  return (
    <ContainerComponent>
    <Title name="Pronto, agora só coloque seu nome :)"></Title>
    <ButtonConfirmar name="Confirmar"></ButtonConfirmar>
    </ContainerComponent>
  );
}

export default Dados;