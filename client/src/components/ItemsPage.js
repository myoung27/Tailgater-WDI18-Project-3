import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Boxes = styled.div`
  display: flex;
  justify-content: space-between ;
  flex-direction: column;
  width: 200px;
  text-align: center;
  border: 2px,solid,black;
  flex-wrap: wrap;
  border: 4px solid black;
`





export default class ItemsPage extends Component {
  state ={
    game: {},
    games: [],
    items: []

  }
componentDidMount(){
  const userId = this.props.match.params.userId
  const gameId = this.props.match.params.gameId
  axios.get(`/api/users/${userId}/games/${gameId}/item`).then((res) => {
    console.log(res.data)
    this.setState({items: res.data})
  })
  

}

  handleCreateNewItem = () => {
    const userId = this.props.match.params.userId
    const gameId = this.props.match.params.gameId
    const payload = {
      name: 'Item Name',
      quantity:"Item Quantity",
      comments:'Item Comments'

    }
    axios.post(`/api/users/${userId}/games/${gameId}/item`, payload).then(res => {
      const newItem = res.data
      const newStateItem = [...this.state.items, newItem]
      this.setState({ items: newStateItem })
    })
  }

  handleDelete = itemId => {
    const userId = this.props.match.params.userId
    const gameId = this.props.match.params.gameId
    axios.delete(`/api/users/${userId}/games/${gameId}/item/${itemId}`).then(() => {
      const newItem = [...this.state.items]
      const filtered = newItem.filter(item => {
        return item._id !== itemId 
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
    axios.patch(`/api/users/${userId}/games/${gameId}/item/${itemId}`, itemToUpdate).then(() => {
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
            <Boxes>
        <textarea
          onBlur={() => this.handleUpdate(item._id)}
          onChange={(event) => this.handleChange(event, item._id)} 
          type="text" name="name" 
          value={item.name} 
        />
        <textarea 
          onBlur={() => this.handleUpdate(item._id)}
          onChange={(event) => this.handleChange(event, item._id)} 
          name="quantity" 
          value={item.quantity} 
        />
        <textarea 
          onBlur={() => this.handleUpdate(item._id)}
          onChange={(event) => this.handleChange(event, item._id)} 
          name="comments" 
          value={item.comments} 
        />
        <button onClick={deleteItem}>Delete this Item</button>
      </Boxes>
            )
          })}
      </div>
      </div>
    )
        }
      }
   