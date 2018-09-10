import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import styled from "styled-components"
import fetchXPath from './fetchxpath';
import {debounce} from 'throttle-debounce';

const Button =styled.button `
background: black;
  color:rgb(1, 215, 39);
  border: 2px solid;
  border-color: white;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  cursor: pointer;
  ${Button}:hover {
    background-color: whitesmoke;
  }
`;
const Img=styled.img`
transition: transform .2s; 
 
margin: 0 auto;
height: 60px;

  ${Img}:hover {
    transform: scale(1.9);
  }
`

const H1=styled.h1`
background-color: whitesmoke;
color:rgb(1, 215, 39);
box-shadow: 5px 5px grey;
text-shadow: -1px 0 black, 0 1px black, 1px 0 rgb(255, 0, 0), 0 -1px red;
border: 2px ;
padding: 10px;
border-radius: 2em 1em 4em / 0.5em 3em;
`
const Textarea=styled.input`
    border: 1px ;
    padding: 10px;
    box-shadow: 5px 5px #888888;
    border-color: red;
    border-radius: 50px;
    outline: none;
    margin: 0.5em;
    background-color: white;
`
const Left=styled.div`
height: 100%;
width: 50%;
position: fixed;
top: 0;
overflow-x: hidden;
padding-top: 20px;
left:0;
`
const Centered=styled.div`
padding:20px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
background:rgb(255,168,158);
border-radius:2em 2em 2em ;
border: 4px solid;
border-color: rgb(173,255,158);
`

const File=styled.input`
  margin: 0.5em;
`


class InputItem  extends Component {
  constructor()
  {
    super();
    this.fetchXPath = debounce( 500, fetchXPath.bind(this) );
  }
  state={name:'',price:0 ,img: ''}
   
     
 
  handleSubmit=(event)=>{
    
    event.preventDefault();
    this.props.addFunction(this.state.name,this.state.price,this.state.img);       
   }

   handleSubmit2=(event)=>{
    event.preventDefault();
    console.log(event.target.elements.product.value);
    this.fetchXPath
    (
      `https://carrefour.ro/unified/search?query=${event.target.elements.product.value}`,
      '//*[@class="product-name"]',
      '//*[@class="product-price"]',
     '//*[@class="product-image"]',
    
      ( productNames, productPrices,productImages) =>
      { 
      for (let i=0;i<10;i++){

        
        console.log( productNames[0].textContent );
        console.log( productPrices[0].textContent+ '\n' );
        console.log( productImages[0].src );
        myWindow.document.write("<b>"+productNames[i].textContent+"</b>  <i>"+productPrices[i].textContent+"</i><br>"+"<img src="+productImages[i].src+"><br>");
    
      }}

    );
  
    var myWindow = window.open("", "MsgWindow", "width=500,height=700");
    
  }
    render(){  
    return (
       <Left>
        <Centered>
          <H1>Shopping List</H1>
          <hr/>
          <form onSubmit={this.handleSubmit}>
          <Textarea  placeholder="nume"
            onChange={(event)=>{this.setState({name:event.target.value})}}/><br/>
          <Textarea  placeholder="pret" 
            onChange={(event)=>{this.setState({price:event.target.value})}}/><br/>
          <File type="file"   
            onChange={(event) => this.setState({ img: URL.createObjectURL(event.target.files[0])})}/><br/>
          <Img  src={this.state.img} alt="Preview" /><br/>
          <Button  >Add item </Button><br/>
          </form>
          <hr/>
          <form onSubmit={this.handleSubmit2}>
          <H1>Suggested</H1>
          <hr></hr>
            <Textarea  name="product"/> <br/>
            <Button>Search</Button>
          </form>
        </Centered>
       </Left>
     );
   }
   } 
export default InputItem;
