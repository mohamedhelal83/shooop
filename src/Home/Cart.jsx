import React, { Component } from "react";

 class Cart extends Component {
  render(props){
    return(
      <div>
        <h2>my name is {this.props.watch}</h2>
        <h2>my color is {this.props.lion}</h2>
      </div>
    )
  }
}

export default Cart;