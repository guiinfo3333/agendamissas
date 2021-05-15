import styled from 'styled-components';


export const ButtonComponent = styled.button`
display:flex;
align-items:center; /*alinhar na vertical*/
justify-content:center;
height:50px;
position:relative;
width:100%;
background-color:var(--primary);
color:var(--terciary);
margin-bottom:30px;
font-family: 'Noto Sans',sans-serif;
font-weight:700;
font-size:15px;
border-radius:8px;
box-shadow:0px 0px 6px var(--terciary);
&.active{
    font-family: 'Noto Sans',sans-serif;
    font-weight:700;
    background-color:var(--secondary);
    color:var(--primary)
}
`;
