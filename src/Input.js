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
const Img=styled.img`
transition: transform .2s; 
margin: auto;
height: 60px;
${Img}:hover {
transform: scale(1.9);
}
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
const Textarea=styled.input`
border: 1px ;
padding: 10px;
box-shadow: 5px 5px #888888;
border-color: red;
border-radius: 50px;
margin:5px;
background-color: white;
`;
const Left=styled.div`
height: 100%;
width: 50%;
position: fixed;
top: 0;
overflow-x: hidden;
padding-top: 20px;
left:0;
`;
const Centered=styled.div`
padding:20px;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
background:rgb(255,168,158);
border-radius:20px 20px ;
border: 5px solid;
border-color: rgb(173,255,158);
`;
const File=styled.input`
margin: 5px;
`;

export {Button,Img,H1,Textarea,Left,Centered,File};