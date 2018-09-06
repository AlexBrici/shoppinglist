import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import styled from "styled-components"

const Right= styled.div`
    height: 100%;
    width: 50%;
    position: fixed;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
    right: 0;
`
const Centered=styled.div`
position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border: 3px solid;
    border-color: rgb(173,255,158);  
    border-radius:2em 2em 2em ;
    background:rgb(255,168,158);
    padding:2px
    
`
const Img=styled.img`
transition: transform .2s; 
   
margin: 0 auto;
    ${Img}:hover{
      transform: scale(1.8);
    }

`

class ShoppingList extends Component{
 constructor (props)  {
   super(props);
   this._list=props.list;
}
 

 render() {
 
  const listItems=this.props.list.map((_list,index)=>{
    return(<li key={index}>
    <b><label> Nume: </label></b>
    {_list.name} 
    <b><label> Pret: </label></b>
    {_list.price}
    <b> <label> Img: </label></b>
    <Img src={_list.img} height="60px"  alt="No input"  />
    <input  
      type="image" 
      src="https://static.thenounproject.com/png/377968-200.png"
      onClick={this.props.removeFunction.bind(this,index)} 
      width="35px"
      height="35px">
    </input>
    </li>)
  })
  
  return (
    <Right>
      <Centered>
      
      
        <ol>{listItems}</ol>
     
  
      </Centered>
    </Right>
    
  )
 }
}

export default ShoppingList;