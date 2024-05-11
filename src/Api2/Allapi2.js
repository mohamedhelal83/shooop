import React, { Component } from 'react'
import Navbar from '../Home/Navbar'

import axios from 'axios'
import Api2 from './Api2'

 class Allapi2 extends Component {
  state = {
    alex :[]
  }
 componentDidMount(){
  axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
  .then( (item)=>{
    this.setState(
      {
        alex:item.data.recipes
      }
    )
  })
 }
  render() {
    return (
      <div>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Api2/>
      <div className="container">
       <div className="row">
       {this.state.alex.map( (result)=>(
        <div className="col-md-4">
          <img src={result.image_url} className='img-fluid' style={{height:"350px"}}/>
          <h2 className='text-center'>{result.title}</h2>
          <h6 className='text-center'>{result.publisher}</h6>
        </div>
      ))}
       </div>
      </div>
    </div>
    )
  }
}

export default Allapi2