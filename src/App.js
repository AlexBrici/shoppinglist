import React, { Component } from 'react';
// import logo from './logo.svg';
 import './App.css';
import ShoppingList from './ShoppingList.js';
import InputItem from './InputItem.js'
import styled from "styled-components"

const Div= styled.div`
background-image: url("https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0221/2149/rrwatermelon2-01_shop_preview.png") ;
`;
class App extends Component {
 state={
  list:[]
 }
 addItem=(name,price,img)=>
 {
   this.setState({list: [...this.state.list, {name, price,img}] });
 }
 removeItem=(index)=>{
  this.state.list.splice(index,1);
 this.setState({ list: this.state.list });
 }
  render() {    
    return (
      
      <Div>     
      <InputItem addFunction={this.addItem} />
      <ShoppingList list={this.state.list}  removeFunction={this.removeItem} />
      </Div> 
           
    );
  }
}
export default App;
