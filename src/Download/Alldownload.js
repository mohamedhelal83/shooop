import React, { Component } from "react";
import Navbar from "../Home/Navbar";
import Media from "./Media";
import Test3 from "./Test3";

class Alldownload extends Component{
    state = {
        human:[{
          firstName : "mohamed",
          lastName : "helal",
          color : "blue",
          id : 1
        },
        {
          firstName : "ali",
          lastName : "mahmoud",
          color : "yellow",
          id : 2  
        },
        {
          firstName : "mostafa",
          lastName : "hegazy",
          color : "white",
          id : 3
        }
      ]
       }
    render() {
    return(
        <div>
       <Navbar/>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <Media/>
       <Test3 uncle={this.state.human} />
        </div>
    )
}
}
export default Alldownload;