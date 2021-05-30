import React from 'react'
import {ButtonComponent} from './styles'

export interface Props{
    name: string;
    selected?: Boolean; 
    onclick: () => void;
}

const Button : React.FC<Props> = ({
    name,
    selected,
    onclick
}) =>{

    return (
          <ButtonComponent className={selected?"active":''}  onClick={onclick}>
              {name}
          </ButtonComponent>

     );
}
export default Button;