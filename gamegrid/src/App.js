import React, {Component} from 'react';
import GamesList from './games/GamesList';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <GamesList/>
                </div>
            </Router>
        );
    }
}

export default App;
