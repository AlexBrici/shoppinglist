import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Search from './Search';
import {Button,Img,H1,Textarea,Left,Centered,File} from './Input';

class InputItem  extends Component {
state={name:'',price:0 ,img: ''}
handleSubmit=(event)=>{
    event.preventDefault();
    this.props.addFunction(this.state.name,this.state.price,this.state.img);       
    }
render(){  
return (
       <Left>
        <Centered>
          <H1>Shopping List</H1>
          <hr />
          <form onSubmit={this.handleSubmit}>
          <Textarea  placeholder="nume"
            onChange={(event)=>{this.setState({name:event.target.value})}} /><br/>
          <Textarea  placeholder="pret" 
            onChange={(event)=>{this.setState({price:event.target.value})}} /><br/>
          <File type="file"
            onChange={(event) => this.setState({ img: URL.createObjectURL(event.target.files[0])})} /><br/>
          <Img  src={this.state.img} alt="Preview" /><br/>
          <Button  >Add item</Button><br />
          </form>
          <Search />
        </Centered>
       </Left>
    );
  }
} 
export default InputItem;
