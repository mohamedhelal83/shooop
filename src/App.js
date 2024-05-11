
import React, { Component } from 'react'
import Navbar from './Home/Navbar';
import Header from "./Home/Header";
import About from "./Home/About";
import Device from "./Home/Device";
import Age from "./Home/Age";
import Download from "./Home/Download";
import Apped from "./Home/Apped";
import Footer from "./Home/Footer";
import Cart from "./Home/Cart";
import Test1 from './Home/Test1';
import { CartProvider } from 'react-use-cart';
 
 class App extends Component {
 state = {
  persons:[{
    firstName : "mohamed",
    lastName : "helal",
    color : "blue"
  },
  {
    firstName : "ali",
    lastName : "mahmoud",
    color : "yellow"  
  },
  {
    firstName : "mostafa",
    lastName : "hegazy",
    color : "white"
  }
]
 }
 dataChange = (newFirstname,newLastname,newColor )=>{
  this.setState(
    {
      persons:[{
        firstName : "ahmed",
        lastName : "badawy",
        color : newColor
      },
      {
        firstName : "hamada",
        lastName : newLastname,
        color : "red"  
      },
      {
        firstName : newFirstname,
        lastName : "samir",
        color : "pink"
      }
    ]
     }
  )
 }
  render(){
   return (
     <CartProvider>
    <Navbar/>
    <Header/>
    <About/>
    <Device/>
    <Age/>
    <Download/>
    <Apped/>
    <Footer/>
    <Cart watch="mohamed" lion="blue"/>
    <Test1 sea={this.state.persons[2].firstName} 
           sky={this.state.persons[1].lastName}
           cat={this.state.persons[0].color}/>
           <button onClick={this.dataChange.bind(this,"roqeia","mohamed","orange")}>Change data</button>
           <button onClick={this.dataChange.bind(this,"yousef","yakot","brown")}>Change data</button>
           <button onClick={this.dataChange.bind(this,"yassin","abdelfattah","rose")}>Change data</button>
           <button onClick={this.dataChange.bind(this,"habiba","abdelrahman","darkblue")}>Change data</button>
           <button onClick={this.dataChange.bind(this,"khadeja","elawady","green")}>Change data</button>
     </CartProvider>
   )
 }
}
 
 export default App
    
  
 


