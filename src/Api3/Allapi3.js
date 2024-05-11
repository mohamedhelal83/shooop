import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import Api3 from './Api3'
import axios from 'axios'


 class Allapi3 extends Component {
    state = {
        cairo :[]
      }
     componentDidMount(){
      axios.get('js/Apiii.json')
        .then( (item)=>{
          this.setState(
            {
            cairo : item.data.products
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
          <Api3/>
          <div className="container" mp-4>
           <div className="row">
           {this.state.cairo.map( (result)=>(
            <div className="col-md-4">
              <img src={result.images[0]} className='img-fluid' style={{height:"350px"}}/>
              <h2 className='text-center'>{result.title}</h2>
              <h6 className='text-center'>{result.price}$</h6>
            </div>
          ))}
           </div>
          </div>
        </div>
        )
      }
    }

export default Allapi3