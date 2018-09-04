import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList.js';
import InputItem from './InputItem.js'



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



// console.log(event.target.elements.name.value);



  render() {
    console.log(this.state.list);
    console.log(this.state.list.img)
    
    return (
      <div>
      <InputItem addFunction={this.addItem} />
      <ShoppingList list={this.state.list}  removeFunction={this.removeItem} />
      </div>
    );
  }
}


export default App;
