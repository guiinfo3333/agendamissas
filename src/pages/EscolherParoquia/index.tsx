import React,{useEffect,useState} from 'react'
import Button from './components/button/button'
import { ContainerComponent,Agrupabotoes} from './styles';
import Title from '../../components/Title/title';
import ButtonConfirmar from '../../components/ButtonConfirmar/buttonconfirmar'
import axios from '../../services/apis';

interface Igrejas{
    id:number;
    nome:string;
    endereco:Date;
}

const EscolherParoquia : React.FC = () =>{

    const[igrejas,setIgreja]=useState<Igrejas[]>([])
    const[selecionado,setSelecionado]=useState<Boolean[]>([])

    useEffect(()=>RetornaIgreja(),[])

    function RetornaIgreja(){
        axios.get<Igrejas[]>(`igreja`).then(res=>{
            var arraytemp=[];
            for(var i=0;i<res.data.length;i++){
                    arraytemp.push(false) 
            }
         setIgreja(res.data)
         setSelecionado(arraytemp)
        })      
    }

    function ModificaSelecionado(numero:number){
        var arraytemp=[];
        for(var i=0;i<selecionado.length;i++){
            arraytemp.push(false) 
        }
        arraytemp[numero]=true
        setSelecionado(arraytemp)
    }

    return (    
        <>
        <ContainerComponent>
        <Title name="De qual paróquia você é ?"></Title>
        <Agrupabotoes>
        {igrejas.map((igreja,index) =>(
            <Button name={igreja.nome} onclick={()=>ModificaSelecionado(index)} selected={selecionado[index]} ></Button>
        ))}
        </Agrupabotoes>
        <ButtonConfirmar name="Confirmar"></ButtonConfirmar>
        </ContainerComponent>
        </>

     );
}
export default EscolherParoquia;