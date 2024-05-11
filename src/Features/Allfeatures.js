import Navbar from "../Home/Navbar";
import Details from "./Details";
import Test2 from "./Test2";

import React, { Component } from 'react'

 class Allfeatures extends Component {
  state = {
    person:[{
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
   changeData = (event)=>{
    this.setState(
      {
        person:[{
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
          firstName : event.target.value,
          lastName : "hegazy",
          color : "white"
        }
      ]
       }
    )
   }
  render() {
    return (
      <div>
           <Navbar/>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <Details/>
           <Test2 sea={this.state.person[2].firstName} />
           <input type="text" onChange={this.changeData}></input>
      </div>
    )
  }
}
export default Allfeatures;


