import React, { Component, useState } from 'react';
import { Games, Players } from "../services";
import { Game } from './game';
import { JoinGame, Lobby, NewPlayer } from './intro';

export const Home = ({ gameId, playerId }) => {
  const [game, setGame] = useState(null);
  const [player, setPlayer] = useState(null);
  const displayName = Home.name;
  const games = new Games();
  const players = new Players();

  const onNewPlayer = (name) => {
    setPlayer(players.new(name));
  }

  const onNewGame = () => {
    setGame(games.get());
  }

  const onJoinGame = () => {
    setGame(games.find());
  }

  const onStart = () => {
    setGame(games.start());
  }

  if(!player){
    return <NewPlayer onSubmit={onNewPlayer} />
  } else if (!game) {
    return <JoinGame name={player.name} onCreate={onNewGame} onJoin={onJoinGame} />
  } else if (!game.isStarted) {
    return <Lobby game={game} player={player} onStart={onStart} />
  } else {
    return <Game player={player} game={game} />
  }
}
