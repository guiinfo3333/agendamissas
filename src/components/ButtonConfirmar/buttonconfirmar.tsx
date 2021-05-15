import React from 'react';

import {ButtonConfirmarComponent} from './styles';

export interface Props{
    name: string;
}

const ButtonConfirmar: React.FC<Props> = ({
name
}) => {
  return (
    <ButtonConfirmarComponent>
        {name}
    </ButtonConfirmarComponent>
  );
}

export default ButtonConfirmar;