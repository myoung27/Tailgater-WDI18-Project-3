import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
  render() {
    return (
      <div>
       <h1>TailGater</h1> 
       <h2>Your tailored organizational tool for tailgating.</h2>
       
       <Link to={`/login`}>Log-in Here!</Link>
      </div>
    )
  }
}
