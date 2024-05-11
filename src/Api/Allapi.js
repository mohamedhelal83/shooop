import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import Appi from './Appi'
import axios from 'axios'

 class Allapi extends Component {
  state = {
    egypt :[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then ((item)=>{
      this.setState(
        {
        egypt :item.data
      }
    )
    } )
  }
  render() {
    return (
      <div>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
         <div className="row">
         {this.state.egypt.map( (result)=>(
          <div className="col-md-4">
            <img src={result.url} className='img-fluid'/>
            <h2 className='text-center'>{result.title}</h2>
            <h6 className='text-center'>{result.id}</h6>
          </div>
        ))}
         </div>
        </div>
      </div>
    )
  }
}

export default Allapi