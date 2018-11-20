import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class LogInPage extends Component {
  state = {
    users: [],
    newUser: {
      username: '',
      name: '',
      password: ''
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
    axios.post('/api/users', this.state.newUser).then(res => {
      console.log(res.data)
      this.props.history.push(`/users/${res.data._id}`)
    })
    
  }

  getAllUsers = () => {
    axios.get('/api/users').then((res) => {
      this.setState({users: res.data})
    })
  }

  componentDidMount(){
    this.getAllUsers()
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <h3>All Users: </h3>
        { this.state.users.map((user) => (
          <div key={user._id}>
            <Link to={`/users/${user._id}`}>{user.username}</Link> -{user.name}
          </div>
        )) }

        <h3>Sign-Up</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input onChange={this.handleChange} value={this.state.newUser.username} type="text" name="username"/>
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this.handleChange} value={this.state.newUser.name} type="text" name="name"/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input onChange={this.handleChange} value={this.state.newUser.password} type="password" name="password"/>
          </div>
          <button type="submit">Create Yourself</button>
        </form>
      </div>
    );
  }
}

export default LogInPage;