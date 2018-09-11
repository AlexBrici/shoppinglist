import React, { Component } from 'react';
import {Img} from './Item.js'

function ListItem(props){
   
        return (
            <li key={props.index}>
            <b><label> Nume: </label></b>
            {props.name} 
            <b><label> Pret: </label></b>
            {props.price}
            <b> <label> Img: </label></b>
            <Img src={props.img} height="60px"  alt="No input"  />
            <input  
              type="image" 
              src="https://static.thenounproject.com/png/377968-200.png"
              onClick={props.removeFunc.bind(this,props.key)} 
              width="35px"
              height="35px">
            </input>
            </li>
        )
    }

export default ListItem;