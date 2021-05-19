import styled from "styled-components";


export const CardComponent = styled.div `
position:relative;
display:flex;
flex-direction:column;
align-items:center;
font-family:'Noto Sans',sans-serif;
background-color:var(--primary);
height:100px !important;
padding-top:10px;
margin-left:10px;
box-shadow:0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
&.active{
    border: 1px solid var(--primary);
    font-weight:700;
    background-color:var(--secondary);
    color:var(--primary)
}
`
export const TitleCard = styled.h1 `
font-weight:bold;
color:var(--terciary);
font-size:20px;
&.active{
    color:var(--primary)
}
`
export const TitleHorario = styled.h1 `
margin-top:20px;
font-weight:bold;
color:var(--secondary);
font-size:19px;
&.active{
    color:var(--primary)
}
`

