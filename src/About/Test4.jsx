import React, { Component } from 'react'

 class Test4 extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
   // static getDerivedStateFromProps(props, state) {
      //  return {favoritecolor: props.zaki };
    //}
    shouldComponentUpdate() {
        return true;
    }
    componentDidMount() {
        setTimeout(() => { 
          this.setState({favoritecolor: "yellow"})
        }, 5000)
    }
  render() {
    return (
      <h1>My favorite color is {this.state.favoritecolor}</h1>
    );
  }
}

export default Test4