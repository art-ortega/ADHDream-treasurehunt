import React, { Component } from 'react';
import './App.css';
import Board from './components/Board.js'

class App extends Component {
    constructor(props) {
        super(props)
        }
  render() {
    return (
     <div>
        <h1>Treasure Hunt</h1>
        <div className = "random">
        <Board />
        </div>
      </div>
    );
  }
}

export default App;
