import React, { Component } from 'react';
import GamesList from './games/GamesList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
     <GamesList/>
      </div>
    );
  }
}

export default App;
