import React, { useState } from 'react';
import { Games, Players } from "../services";
import { Game } from './game';
import { JoinGame, Lobby, NewPlayer } from './intro';

export const Home = ({ gameId, playerId }) => {
  const [game, setGame] = useState(null);
  const [player, setPlayer] = useState(null);
  const games = new Games();
  const players = new Players();

  const onNewPlayer = async (name) => {
    const result = await players.new(name);
    setPlayer(result);
  }

  const onNewGame = async () => {
    const result = await games.get();
    onGameFound(result, player);
  }

  const onJoinGame = async (name) => {
    const result = await games.find(name);
    onGameFound(result, player);
  }

  const onGameFound = async (game, player) => {
    var result = await games.join(game.id, player.id);
    setGame(result);
  }

  const onStart = async () => {
    const result = await games.start(game.id);
    setGame(result);
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
