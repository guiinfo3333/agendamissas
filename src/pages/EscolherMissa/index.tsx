import React,{useState,useEffect} from 'react';

import {ContainerComponent} from './styles';
import Title from '../../components/Title/title'
import ButtonConfirmar from '../../components/ButtonConfirmar/buttonconfirmar'
import Carrousel from './components/glider/glider'
import axios from '../../services/apis';
import Card from './components/Card/index'

interface Missas{
    capacidade_id:number;
    igreja_id:number;
    horario:number;
}


const EscolherMissa: React.FC = () => {
    const[igrejas,setIgreja]=useState<Missas[]>([])
    const[lista,setLista]=useState<any[]>([])

    useEffect(()=>RetornaMissas(),[])

    function RetornaMissas(){
        axios.get<Missas[]>(`missa`).then(res=>{
            setIgreja(res.data)
            var lista1=[]
            lista1.push(<Card selected data="15 MAI" horario="13:00"></Card>)
            setLista(lista1)


        })      
    }
  return (
        <ContainerComponent>
            <Title name="Escolha a missa que você quer agendar :)"></Title>
            <Carrousel lista={lista}></Carrousel>
            <ButtonConfirmar name="Confirmar"></ButtonConfirmar>
        </ContainerComponent>
    );
}

export default EscolherMissa;