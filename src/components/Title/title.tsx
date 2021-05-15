import React from 'react';
import { TitleComponent } from './styles';

export interface Props{
    name: string;
}

const Title: React.FC<Props> = ({
    name
}) => {
  return (
    <TitleComponent>
        {name}
    </TitleComponent>
  );
}

export default Title;