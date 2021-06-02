import React,{useState,useEffect} from 'react';

import {ContainerComponent} from './styles';
import Title from '../../components/Title/title'
import ButtonConfirmar from '../../components/ButtonConfirmar/buttonconfirmar'
import Carrousel from './components/glider/glider'

const EscolherMissa: React.FC = () => {
  return (
        <ContainerComponent>
            <Title name="Escolha a missa que você quer agendar :)"></Title>
            <Carrousel ></Carrousel>
            <ButtonConfirmar name="Confirmar"></ButtonConfirmar>
        </ContainerComponent>
    );
}

export default EscolherMissa;