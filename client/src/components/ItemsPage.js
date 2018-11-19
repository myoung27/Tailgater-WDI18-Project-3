import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ItemsPage extends Component {
  state = {
    user: {},
    ideas: []
  }

  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId
    axios.get(`/api/users/${userId}`).then(res => {
      console.log(res.data)
      this.setState({
        user: res.data,
        ideas: res.data.ideas
      })
    })
  }

  handleCreateNewIdea = () => {
    const userId = this.props.match.params.userId
    const payload = {
      title: 'Idea Title',
      description: 'Idea Description'
    }
    axios.post(`/api/users/${userId}/ideas`, payload).then(res => {
      const newIdea = res.data
      const newStateIdeas = [...this.state.ideas, newIdea]
      this.setState({ ideas: newStateIdeas })
    })
  }

  handleDelete = ideaId => {
    // some unique value
    axios.delete(`/api/ideas/${ideaId}`).then(() => {
      //Remove the idea with ideaID from this.state.ideas
      const newIdeas = [...this.state.ideas]
      // Return only ideas that are NOT the id provided
      const filtered = newIdeas.filter(idea => {
        return idea._id !== ideaId // ! = =
      })
      // Take filtered data and set it to ideas
      this.setState({ideas: filtered})
    })
  }

  handleChange = (event, ideaId) => {
    // const name = event.target.name
    // const value = event.target.value
    const { value, name } = event.target
    const newIdeas = [...this.state.ideas]
    const updatedVals = newIdeas.map(idea => {
      if (idea._id === ideaId){
        idea[name] = value
      }
      return idea
    }) 

    this.setState({ideas: updatedVals})
  }

  handleUpdate = (ideaId) => {
    // Find the individual updated idea from this.state.ideas
    const ideaToUpdate = this.state.ideas.find(idea => {
      return idea._id === ideaId
    })
    // axios post the endpoint with updated data
    axios.patch(`/api/ideas/${ideaId}`, ideaToUpdate).then(() => {
      console.log("Updated Idea")  
    })
    // console .log saved
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.username}'s Idea Page</h1>
        <div onClick={this.handleCreateNewIdea}>
          New Idea
        </div>
        <div>
          {this.state.ideas.map(idea => {
            const deleteIdea = () => {
              return this.handleDelete(idea._id)
            }
            return (
              <div>
                <input 
                  onBlur={() => this.handleUpdate(idea._id)}
                  onChange={(event) => this.handleChange(event, idea._id)} 
                  type="text" name="title" 
                  value={idea.title}/>
                <textarea 
                  onBlur={() => this.handleUpdate(idea._id)}
                  onChange={(event) => this.handleChange(event, idea._id)} 
                  name="description" 
                  value={idea.description} 
                />
                <button onClick={deleteIdea}>X</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
