import React, { Component } from 'react';
import fetchXPath from './fetchxpath';
import {debounce} from 'throttle-debounce';
import {Button,Textarea,H1} from './SearchStyled'
class Search extends Component{
    constructor()
    {
      super();
      this.fetchXPath = debounce( 500, fetchXPath.bind(this) );
    }   
    handleSubmit=(event)=>{
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
            myWindow.document.write("<b>"+productNames[i].textContent+"</b> <i>"+productPrices[i].textContent+"</i><br>"+"<img src="+productImages[i].src+"><br>");
          }}
        );
        var myWindow = window.open("", "MsgWindow", "width=500,height=700");
      }
    render(){
        return (
             <div>
                <form onSubmit={this.handleSubmit}>
                  <H1>Suggested</H1>
                  <hr/>
                  <Textarea  name="product" placeholder="cauta"/> <br/>
                  <Button>Search</Button>
                 </form>
               </div>
        )
    }
}
export default Search;