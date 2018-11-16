import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import GamePage from './components/GamePage';
import ItemsPage from './components/ItemsPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path ='/' component ={HomePage} />
          <Route exact path ='/login' component ={LoginPage} />
          <Route exact path ='/game' component ={GamePage}/>
          <Route exact path ='/items' component ={ItemsPage}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
