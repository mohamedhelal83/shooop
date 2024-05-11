import React, { Component } from 'react'

export class Test1 extends Component {
  render() {
    return (
      <div>
        <h2>My firstname is {this.props.sea}</h2>
        <h2>My lastname is {this.props.sky}</h2>
        <h2>My color is {this.props.cat}</h2>
      </div>
    )
  }
}

export default Test1