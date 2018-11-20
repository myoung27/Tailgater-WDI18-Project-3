import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MavBarStyles = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  background: goldenrod;
  height: 30px;
`

export default class MavBar extends Component {
  render() {
    return (
      <MavBarStyles>
    
      <Link to= '/'> Go Home</Link>
      <Link to= '/login'> Login </Link> 
      <Link to= '/users/${this.state.user._id}'> My Games </Link>
      </MavBarStyles>
    )
  }
}

