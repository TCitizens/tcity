import React, { Component } from 'react';
import Home from './home/homeContainer';  
import { Switch, Route } from 'react-router-dom';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
