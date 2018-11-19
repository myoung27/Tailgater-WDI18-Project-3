import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default class GamePage extends Component {

    state = {
        user: {},
        games:[]
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
            -<Link to={`/users/${this.state.user._id}/games/${game._id}`}>{game.name}</Link> <br/>{game.description}
          </div>
        )) }
      </div>
    );
  }
}
