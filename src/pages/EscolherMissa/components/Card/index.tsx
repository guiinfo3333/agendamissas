import React from 'react';

import { CardComponent, TitleCard,TitleHorario } from './styles';

export interface Props{
  data: string;
  horario: string; 
  selected?:boolean;
}

const Card: React.FC<Props>= ({
  data,
  horario,
  selected
}) => {
  return (
    <CardComponent className={selected?"active":''}>
        <TitleCard className={selected?"active":''}>{data}</TitleCard>
        <TitleHorario className={selected?"active":''}>{horario}</TitleHorario>
    </CardComponent>
  );
}

export default Card;