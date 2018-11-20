import React, { Component } from 'react'
import axios from 'axios'


export default class ItemsPage extends Component {
  state ={
    game: {},
    games: {},
    items: []

  }
componentDidMount(){
  const userId = this.props.match.params.userId
  const gameId = this.props.match.params.gameId
  axios.get(`/api/users/${userId}/game/${gameId}/item`).then((res) => {
    console.log(res.data)
    this.setState({items: res.data})
  })
  axios.get(`/api/users/${userId}/game`).then((res) => {
    console.log(res.data)
    this.setState({games: res.data})
  })

}

  handleCreateNewItem = () => {
    const userId = this.props.match.params.userId
    const gameId = this.props.match.params.gameId
    const payload = {
      name: 'Item Name',
      description: 'Item Description',
      quantity:"Item Quantity",
      comments:'Item Comments'

    }
    axios.post(`/api/users/${userId}/game/${gameId}/item`, payload).then(res => {
      const newItem = res.data
      const newStateItem = [...this.state.items, newItem]
      this.setState({ items: newStateItem })
    })
  }

  handleDelete = itemId => {
    const userId = this.props.match.params.userId
    const gameId = this.props.match.params.gameId
    axios.delete(`/api/users/${userId}/game/${gameId}/item`).then(() => {
      const newItem = [...this.state.items]
      const filtered = newItem.filter(item => {
        return item._id !== itemId // ! = =
      })
      this.setState({items: filtered})
    })
  }

  handleChange = (event, itemId) => {
    const { value, name } = event.target
    const newIdeas = [...this.state.items]
    const updatedVals = newIdeas.map(item => {
      if (item._id === itemId){
        item[name] = value
      }
      return item
    }) 

    this.setState({items: updatedVals})
  }

  handleUpdate = (itemId) => {
    const itemToUpdate = this.state.items.find(item => {
      return item._id === itemId
    })
    const userId = this.props.match.params.userId
    const gameId = this.props.match.params.gameId
    axios.patch(`/api/users/${userId}/game/${gameId}/item`, itemToUpdate).then(() => {
      console.log("Updated Item")  
    })
  }



  render() {
    return (
      <div>
        <h1>{this.state.games.name} Items Page</h1>
        <button onClick={this.handleCreateNewItem}>
          New Item
        </button>
        <div>
          {this.state.items.map(item => {
            const deleteItem = () => {
              return this.handleDelete(item._id)
            }
            return (
            <div>
        <input 
          onBlur={() => this.handleUpdate(item._id)}
          onChange={(event) => this.handleChange(event, item._id)} 
          type="text" name="title" 
          value={item.name} 
        />
        <textarea 
          onBlur={() => this.handleUpdate(item._id)}
          onChange={(event) => this.handleChange(event, item._id)} 
          name="description" 
          value={item.description} 
        />
        <textarea 
          onBlur={() => this.handleUpdate(item._id)}
          onChange={(event) => this.handleChange(event, item._id)} 
          name="comments" 
          value={item.comments} 
        />
        <button onClick={deleteItem}>X</button>
      </div>
            )
          })}
      </div>
      </div>
    )
        }
      }
   