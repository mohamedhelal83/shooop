import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import Test5 from './Test5'


 class Alldelete extends Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }

  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    var myheader;
    if (this.state.show) {
      myheader = <Test5/>;
    };

    return (
      <div>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {myheader}
        <button type="button" onClick={this.delHeader}>delete header</button>
      </div>
    )
  }
}

export default Alldelete;