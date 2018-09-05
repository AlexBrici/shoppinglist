import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



class InputItem  extends Component {
    state={name:'',price:0 ,img: ''}
   
     
   
     handleSubmit=(event)=>{
       event.preventDefault();
   
       
   
       this.props.addFunction(this.state.name,this.state.price,this.state.img)
       
   }
   
   
   
   
    render(){ 
    
    return (
       <div className="split left">
       <div className="centered">
        <h1 id="example">Shopping List</h1>
        <hr/>
       <form    onSubmit={this.handleSubmit}>
       <input type="text"  placeholder="nume" className="file example2"
        onChange={(event)=>{this.setState({name:event.target.value})}}/><br/>
       <input type="number"  placeholder="pret" step="5"  className="file example2"
       onChange={(event)=>{
        this.setState({price:event.target.value})}
       }/><br/>
       <input type="file" id="poza" className="file"  
       onChange={(event) => this.setState({ img: URL.createObjectURL(event.target.files[0])})} 
       /><br/>
       <img height="60px" src={this.state.img} alt="Preview" className="zoom2"/><br/>
       <button type="submit" className="button">Add item </button><br/>
       </form>
       </div>
       </div>
     );
   }
   } 

   export default InputItem;
