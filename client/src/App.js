import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Switch,} from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import GamePage from './components/GamePage'
import ItemsPage from './components/ItemsPage'
import MavBar from './components/MavBar'
import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle `
@import url('https://fonts.googleapis.com/css?family=Graduate|Roboto');
body{
  margin: 0;
  padding: 0;
  font-family:'Graduate', cursive;
  background: green;
}
.center{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

h1,h2{
  text-align: center;
}
img{
  align-content: center;
}

`

class App extends Component {
  render() {
    return ( <Router >
      <div >
      <Global/>
      <MavBar/>
      <Switch >
      <Route exact path = '/'component = {HomePage}/>
      <Route exact path = '/login'component = {LoginPage}/> 
      <Route exact path = '/users/:userId/'component = {GamePage}/> 
      <Route exact path = '/users/:userId/games/:gameId/item'component = {ItemsPage}/> 
      </Switch> 
      </div> 
      </Router>
    );
  }
}

export default App;