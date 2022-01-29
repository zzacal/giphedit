import React, { useState } from 'react';
import { Games, Players } from "../services";
import { Game } from './game';
import { JoinGame, Lobby, NewPlayer } from './intro';

export const Home = ({ gameId, playerId }) => {
  const [game, setGame] = useState(null);
  const [player, setPlayer] = useState(null);
  const games = new Games();
  const players = new Players();

  const onNewPlayer = (name) => {
    setPlayer(players.new(name));
  }

  const onNewGame = () => {
    const game = games.get();
    onGameFound(game, player);
  }

  const onJoinGame = (name) => {
    const game = games.find(name);
    onGameFound(game, player);
  }

  const onGameFound = (game, player) => {
    setGame(games.join(game.id, player.id));
  }

  const onStart = () => {
    setGame(games.start(game.id));
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
