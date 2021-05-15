import React from 'react'
import Button from './components/button/button'
import { ContainerComponent,Agrupabotoes} from './styles';
import Title from '../../components/Title/title';
import ButtonConfirmar from '../../components/ButtonConfirmar/buttonconfirmar'

const EscolherParoquia : React.FC = () =>{
    return (    
        <>
        <ContainerComponent>
        <Title name="De qual paróquia você é ?"></Title>
        <Agrupabotoes>
        <Button name="Nossa Senhora das Graças" ></Button>
        <Button name="Capela São Francisco" selected></Button>
        <Button name="Santa Terezinha"></Button>
        <Button name="Sagrado Coração de Jesus" ></Button>
        </Agrupabotoes>
        <ButtonConfirmar name="Confirmar"></ButtonConfirmar>
        </ContainerComponent>
        </>

     );
}
export default EscolherParoquia;