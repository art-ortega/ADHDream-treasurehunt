import React, { Component } from 'react';
import Square from './Square'
class Board extends Component {
    constructor(props) {
        super(props)
          this.state = { 
          spaces: ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓"],
          display:["🌴", "🌴", "🌴", "🌴", "🌴", "🌴", "🌴", "🌴", "🌴"],
          counter: 0,
          userStatus: ""
        }
    }
    handleLocation = (index) => {
        let {display,spaces,counter,userStatus} = this.state
        spaces[index] = display[index]
        this.setState({
          spaces:spaces,
          display:display,
          counter:++counter
        })
        if(spaces[index]==="💰"){
          this.setState({userStatus:"You win!"})
        } else if(spaces[index] ==="💣" || counter >3){
          this.setState({userStatus:"You lose!"})
        }

    }

    resetGame = () =>{
        let {spaces,display,counter,userStatus} = this.state;
        spaces = spaces.map(value => value = "❓")
        display = display.map(value => value = "🌴")
        this.setState({
          display:display,
          spaces:spaces,
          counter:0,
          userStatus:""
        })
    }
//creating method to get our random treasure and bomb locations

    randomizer = () => {
      let { spaces,display } = this.state
      let randomTreasure = Math.floor(Math.random() * display.length)
      let randomBomb = Math.floor(Math.random() * display.length)
      while(randomTreasure === randomBomb){
              randomTreasure = Math.floor(Math.random() * display.length)
          }
      display[randomBomb] = "💣"
      display[randomTreasure] = "💰"
      this.setState({display: display})
    }


  render() {
    let {spaces,display,counter,userStatus} = this.state
    let square = spaces.map((value, index) => 
        <Square
        handleLocation = {this.handleLocation}
        randomize = {this.randomize}
        index = { index }
        value = { value }
        counter = {counter}
        userStatus = {userStatus}
        /> )
  

    return (
     <div>
        <p>You have: {4-this.state.counter} tries</p>
        <div className = "board">
          {this.randomizer}
        {square}
        <button onClick = {this.randomizer}> Start Game</button>
        <button onClick = {this.resetGame}> Reset Game</button>
        </div>
        <p>{this.state.userStatus}</p>
      </div>
    );
  }
}

export default Board
