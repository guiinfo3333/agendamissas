import React from 'react';

import { CardComponent, TitleCard,TitleHorario } from './styles';

export interface Props{
  horario: string;
  dia: string; 
  mes: string; 
  selected?:boolean;
}

const Card: React.FC<Props>= ({
  horario,
  dia,
  mes,
  selected
}) => {
  return (
    <CardComponent className={selected?"active":''}>
        <TitleCard className={selected?"active":''}>{dia} {mes}</TitleCard>
        <TitleHorario className={selected?"active":''}>{horario}</TitleHorario>
    </CardComponent>
  );
}

export default Card;