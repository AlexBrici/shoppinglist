import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ListItem from  './ListItem.js'
import {Right,Centered,Img} from './List.js'



class ShoppingList extends Component{
 constructor (props)  {
   super(props);
   this._list=props.list;
}
 render() {
  return (
    <Right>
      <Centered>  
         <ol>
        {this.props.list.map((_list,index) => (
               <ListItem index={index} 
                name={_list.name}
                price={_list.price}
                img={_list.img}
                removeFunc={this.props.removeFunction } />
           ))}
        </ol>
      </Centered>
    </Right>
  )
 }
}
export default ShoppingList;