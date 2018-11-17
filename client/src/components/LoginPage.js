import React, { Component } from 'react'
import axios from "axios"

export default class LoginPage extends Component {
    state = {
        users: []
    }

    getAllUsers = () => {
        axios.get('/api/users').then((res)=> {
            this.setState({users: res.data})
        })
    }
    componentDidMount(){
        this.getAllUsers()
    }
  render() {
    return (
      <div>
        <h1>Log-In To Begin!</h1>
        { this.state.users.map((user) => (
            <div key={user._id}>
                {user.username}
            </div>
        )) }
      </div>
    )
  }
}
