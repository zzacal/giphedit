import React, { Component } from 'react';
import { Games, Players } from "../services";

export class Home extends Component {
  static displayName = Home.name;
  games = new Games();
  players = new Players();

  onNewGame = () => {
    this.games.get();
  }

  onJoinGame = () => {
    console.log("join game");
  }

  setGame = (game) => {
    console.log(game);
  }

  render = () => (
    <>
      <h1>Hi there!!</h1>
      <div>
        <button onClick={this.onNewGame}>New Game</button>
      </div>
      <div>
        <input type="text"></input>
        <button onClick={this.onJoinGame}>Join</button>
      </div> 
      <img src="https://media4.giphy.com/media/EIV7o5wWLOd26lmeI2/giphy.gif?cid=c4feef10ajhqk4kovkuy8zvzeb3wm96tv6cj7g9ly074trfg&rid=giphy.gif&ct=g" />
    </>
  )
}
