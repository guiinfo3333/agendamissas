import React,{useEffect,useState} from 'react'
import Button from './components/button/button'
import { ContainerComponent,Agrupabotoes} from './styles';
import Title from '../../components/Title/title';
import ButtonConfirmar from '../../components/ButtonConfirmar/buttonconfirmar'



const EscolherParoquia : React.FC = () =>{
    function ConsoleLog(){
        console.log("oi")
    }

    return (    
        <>
        <ContainerComponent>
        <Title name="De qual paróquia você é ?"></Title>
        <Agrupabotoes>
        <Button name="Nossa Senhora das Graças" onclick={ConsoleLog}></Button>
        <Button name="Capela São Francisco" onclick={ConsoleLog} selected></Button>
        <Button name="Santa Terezinha" onclick={ConsoleLog}></Button>
        <Button name="Sagrado Coração de Jesus" onclick={ConsoleLog}></Button>
        </Agrupabotoes>
        <ButtonConfirmar name="Confirmar"></ButtonConfirmar>
        </ContainerComponent>
        </>

     );
}
export default EscolherParoquia;