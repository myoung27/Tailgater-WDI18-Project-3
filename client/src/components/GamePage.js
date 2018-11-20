import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default class GamePage extends Component {

    state = {
        user: {},
        games:[],
        newGame: {
            name: '',
            description: '',
            date: ''
        }
    }
    handleChange = (event) => {
        console.log('name', event.target.name)
        console.log('value', event.target.value)
        const updatedNewGame = {...this.state.newGame}
        updatedNewGame[event.target.name] = event.target.value
        this.setState({newGame: updatedNewGame})
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`/api/users/${this.state.user._id}/game`, this.state.newGame).then(res => {
          console.log(res.data)
          this.props.history.push(`/users/${res.data._id}/games`)
        })
        
      }
    
     
    componentDidMount(){
        
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then((res) => {
            console.log(res.data.game)
            this.setState({user: res.data})
        })
        axios.get(`/api/users/${userId}/game`).then((res) => {
            console.log(res.data)
            this.setState({games: res.data})
        })
    }
  render() {
    return (
      <div>
        <h1>Hello {this.state.user.username} !</h1>
        { this.state.games.map((game) => ( 
          <div key={game._id}>
            -<Link to={`/users/${this.state.user._id}/games/${game._id}/item`}>{game.name}</Link> <br/>
            {game.date}
            <br/>
            {game.description}
          </div>
        )) }

        <h3>Don't See Your Game? Create your own tailgating event!</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this.handleChange} value={this.state.newGame.name} type="text" name="name"/>
          </div>
          <div>
            <label htmlFor="description">Description </label>
            <input onChange={this.handleChange} value={this.state.newGame.description} type="text" name="description"/>
          </div>
          <div>
            <label htmlFor="date">Date: </label>
            <input onChange={this.handleChange} value={this.state.newGame.date} type="date" name="date"/>
          </div>
          <button type="submit">Create New Event</button>
        </form>
      </div>
    );
  }
}
      
