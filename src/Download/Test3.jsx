import React, { Component } from 'react'

 class Test3 extends Component {
  render() {
    var aunt = this.props.uncle;
    var sister = aunt.map( (result)=>{
      if(result.id>2){
        return(
          <div>
            <h2>My firstname is {result.firstName}</h2>
            <h2>My lastname is {result.lastName}</h2>
            <h2>My favorite color is {result.color}</h2>
            <h2>My id is {result.id}</h2>
          </div>
        )
      }
    } );
    return (
        <div>
      {sister}
      </div>
    )
  }
}

export default Test3