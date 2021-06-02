import React,{useState,useEffect} from 'react';
import Glider, { GliderMethods } from 'react-glider';
import Card from '../Card/index'
import axios from '../../../../services/apis';

export interface PaneProps{
    children: string;
    style: string;
    className:string; 
}

export interface Props{
  lista:React.FC[];
}

interface Missas{
  capacidade_id:number;
  igreja_id:number;
  horario?:Date
  ano?:string
  dia?:string
  mes?:string
  hor?:string
}


const Carrousel:React.FC =( ) => {
  
  const[missas,setMissas]=useState<Missas[]>([])
  useEffect(()=>RetornaMissas(),[])

  function RetornaMissas(){
      axios.get<Missas[]>(`missa`).then(res=>{
          ConsertaData(res.data)
      })      
  }

  function ConsertaData(missas:Missas[]):void{
    var missa = {} as Missas
    var objectarray = [] as Missas[]
    for(var i=0;i<missas.length;i++){
      missa.ano=String((missas[i]).horario).split("-")[0]
      missa.mes=RetornaMesString(String((missas[i]).horario).split("-")[1])
      missa.dia=(String((missas[i]).horario).split("-")[2]).split("T")[0]
      console.log((String((missas[i]).horario).split("-")[2]).split("T")[0])
      missa.hor=((String((missas[i]).horario).split("-")[2]).split("T")[1]).split(":")[0]+":"+
      ((String((missas[i]).horario).split("-")[2]).split("T")[1]).split(":")[1]
      objectarray.push(missa)
    }
    setMissas(objectarray)
  }

  function RetornaMesString(mes:string){
    var array:string[] = ["JAN","FEV","ABR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]
    for(var i=0;i<array.length;i++){
      if(mes==String(i+1) || mes=="0"+String(i+1)){
        return array[i]
      }
    }
  }

  const gliderRef = React.useRef<GliderMethods>(null);

  return (
    <>
      <Glider ref={gliderRef} slidesToShow={Number(2)}>
      {missas.map((missa,index) =>(
            <Card dia={missa.dia??""} mes={missa.mes??""} horario={missa.hor??""}></Card>
        ))}
      </Glider>
    </>
  );
};
export default Carrousel;