import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



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
    <img src={_list.img} height="60px" className="zoom2" alt="No input" />
    <input  
      type="image" 
      src="https://static.thenounproject.com/png/377968-200.png"
      onClick={this.props.removeFunction.bind(this,index)} 
      width="35"
      height="35">
    </input>
    </li>)
  })
  
  return (
    <div className="split right ">
      <div className="centered2">
      
      
        <ol>{listItems}</ol>
     
    </div>
    </div>
    
  )
 }
}

export default ShoppingList;