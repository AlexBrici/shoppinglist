import styled from "styled-components"

const Button =styled.button `
background: black;
color:rgb(1, 215, 39);
border: 2px solid;
border-color: white;
line-height: 1;
margin: 5px;
padding: 10px 20px;
cursor: pointer;
${Button}:hover {
background-color: whitesmoke;
  }
`;
const Textarea=styled.input`
border: 1px ;
padding: 10px;
box-shadow: 5px 5px #888888;
border-color: red;
border-radius: 50px;
margin:5px;
background-color: white;
`;
const H1=styled.h1`
background-color: whitesmoke;
color:rgb(1, 215, 39);
box-shadow: 5px 5px grey;
text-shadow: -1px 0 black, 0 1px black, 1px 0 rgb(255, 0, 0), 0 -1px red;
border: 2px ;
padding: 10px;
border-radius: 20px 10px 40px / 5px 30px;
`;

export {Button,Textarea,H1}