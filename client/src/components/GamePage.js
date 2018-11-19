import React, { Component } from 'react'
import axios from 'axios'



export default class GamePage extends Component {

    state = {
        user: {}
    }

    componentDidMount(){
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then((res) => {
            console.log(res.data)
            this.setState({user: res.data})
        })
    }
  render() {
    return (
      <div>
        <h1>Hello {this.state.user.username} !</h1>
      </div>
    );
  }
}
