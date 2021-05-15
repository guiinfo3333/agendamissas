import React from 'react'
import {ButtonComponent} from './styles'

export interface Props{
    name: string;
    selected?: boolean; 
}

const Button : React.FC<Props> = ({
    name,
    selected
}) =>{
    return (
          <ButtonComponent className={selected?"active":''} >
              {name}
          </ButtonComponent>

     );
}
export default Button;