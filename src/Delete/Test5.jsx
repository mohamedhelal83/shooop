
import React, { Component } from 'react'

 class Test5 extends Component {
  componentWillUnmount() {
    alert("the page will delete are you sure?");
  }
  render() {
    return (
      <div>
        <h2>hello from delete page</h2>
      </div>
    )
  }
}

export default Test5