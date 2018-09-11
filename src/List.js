import styled from "styled-components"

const Right= styled.div`
height: 100%;
width: 50%;
position: fixed;
top: 0;
overflow-x: hidden;
padding-top: 20px;
right: 0;
`;
const Centered=styled.div`
position: absolute; 
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
border: 3px solid;
border-color: rgb(173,255,158);  
border-radius:20px 20px;
background:rgb(255,168,158);
padding:2px 
`;
const Img=styled.img`
transition: transform .2s;  
margin: 0 auto;
${Img}:hover{
transform: scale(1.8);
}
`;


export {Right,Centered,Img}