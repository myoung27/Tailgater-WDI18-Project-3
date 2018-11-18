import React, { Component } from 'react'
import axios from "axios"

export default class LoginPage extends Component {
    state = {
        users: [],
        newUser:{
            username: '',
            password:""
        }
    }
    handleChange = (event) => {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const updatedNewUser = {...this.state.newUser}

        updatedNewUser[event.target.name] = event.target.value
        this.setState({newUser: updatedNewUser})
    }
     handleSubmit = (event) => {
         event.preventDefault()
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

        <h3> Sign-Up</h3>
        <form onSubmit = {this.handleSubmit}>
            <div>
                <label htmlFor="username">User Name</label>
                <input onChange={this.handleChange } value={this.state.newUser.username}type= "text" name= "username"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange } value ={ this.state.newUser.password} type= "password" name= "password"/>
            </div>
            <button type= "submit">Create a User</button>
        </form>
      </div>
    )
  }
}
