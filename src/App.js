import React, { Component } from 'react';
import './App.css';
import Jumbo from './components/jumbo';
import myContext from './Context'

class App extends Component{
  constructor(){
    super();
    this.productDetails = [
      {
        id: 1,
        name: "Acer Gamdias Radeon V2 Gradon Laptop",
        stock: "Yes",
        brand: "Acer",
        price:'1000$'
      },
      {
        id: 2,
        name: "Bag",
        stock: "Yes",
        brand: "Dell",
        price:'30$'
      },
      {
        id: 3,
        name: "Mouse",
        stock: "No",
        brand: "HP",
        price:'70$'
      },
      {
        id: 4,
        name: "Mechanical Keyboard",
        stock: "Yes",
        brand: "Samsung",
        price:'80$'
      },
      {
        id: 5,
        name: "SSD",
        stock: "No",
        brand: "Toshiba",
        price:'350$'
      },
      {
        id: 6,
        name: "Mouse Pad",
        stock: "No",
        brand: "Gamdias",
        price:'1$'
      },
      {
        id: 7,
        name: "Cooling Pad",
        stock: "Yes",
        brand: "Toshiba",
        price:'50$'
      },
    ];
    this.state = {
      productDetails: this.productDetails,
    };
  }
  
  render(){
  return (
    <div className="App">
        <h1 style={{backgroundColor:'beige'}}>Context API <i>mini project</i> </h1>

        <myContext.Provider value={this.state}>
        <Jumbo />
      </myContext.Provider>
    </div>
  );
  }
}

export default App;
