import React,{useEffect,useState} from 'react'
import Button from './components/button/button'
import { ContainerComponent,Agrupabotoes} from './styles';
import Title from '../../components/Title/title';
import ButtonConfirmar from '../../components/ButtonConfirmar/buttonconfirmar'
import axios from '../../services/apis';

interface Igrejas{
    id:number;
    nome:string;
    endereco:string;
}

const EscolherParoquia : React.FC = () =>{

    const[igrejas,setIgreja]=useState<Igrejas[]>([])
    const[selecionado,setSelecionado]=useState<Boolean[]>([])

    useEffect(()=>RetornaIgreja(),[])

    useEffect(()=>{
     console.log("mudou")
    },[selecionado])

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
        for(var i=0;i<selecionado.length;i++){
            selecionado[i]=false 
        }
        selecionado[numero]=true
        setSelecionado(selecionado)
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