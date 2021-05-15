import React from 'react';
import Glider, { GliderMethods } from 'react-glider';
import Card from '../Card/index'


export interface PaneProps{
    children: string;
    style: string;
    className:string; 
}



const Example = () => {
  const gliderRef = React.useRef<GliderMethods>(null);

  return (
    <>
      <Glider ref={gliderRef} slidesToShow={Number(2)}>
            <Card selected data="15 MAI" horario="13:00"></Card>
            <Card data="15 MAI" horario="13:00"></Card>
            <Card data="15 MAI" horario="13:00"></Card>
            <Card data="15 MAI" horario="13:00"></Card>
            <Card data="15 MAI" horario="13:00"></Card>
      </Glider>
    </>
  );
};
export default Example;