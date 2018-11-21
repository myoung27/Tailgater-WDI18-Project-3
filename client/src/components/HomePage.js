import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class HomePage extends Component {
  render() {
    return (
      <div>
       <h1>TailGater</h1> 
       <h2>Your tailored organizational tool for tailgating.</h2>
       <img src="https://media1.tenor.com/images/36189bfb53ca58ab7cc68e2195debfe8/tenor.gif?itemid=9762441" class="center" />
       <br/>
       <h1><Link to={`/login`}>Log-in Here!</Link></h1>
      </div>
    )
  }
}
