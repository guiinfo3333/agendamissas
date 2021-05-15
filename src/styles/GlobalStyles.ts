import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
 *{
     margin:0;
     padding:0;
     box-sizing:border-box;
     
 }
 html,body,#root{
     height:100%;
 }
 *,button,input{
     border:0;
     outline:0;
     font-family: 'Roboto' , sans-serif;
 }
 :root {
    --primary: #ffffff;
    --secondary: #1186CB;
    --terciary: #000000;
    --quartenary:#8C8C8C;
  }
 
 `;