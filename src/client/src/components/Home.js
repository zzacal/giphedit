import React, { useEffect, useState } from 'react';
import services from "../services";
import { Game } from './game';
import { JoinGame, Lobby, NewPlayer } from './intro';

export const Home = ({ gameId, playerId }) => {
  const [game, setGame] = useState(null);
  const [player, setPlayer] = useState(null);

  const persist = services.getPersistence();
  const games = services.getGameService();
  const players = services.getPlayerService();
  const hub = services.getGameHub(setGame);

  const prstPlayerId = persist.get("playerId");

  useEffect(() => {
    if(!player && prstPlayerId) {
      players.get(prstPlayerId).then(result => {
        setPlayer(result);
      });
    }
  }, [prstPlayerId, player, players])

  const onNewPlayer = async (name) => {
    const result = await players.new(name);
    persist.set("playerId", result.id)
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
    await hub.join(game.id, player.id);
  }

  const onStart = async () => {
    await hub.start(game.id);
  }

  const onPlay = async (cardId) => {
    await hub.play(game.id, player.id, cardId)
  }

  if(!player){
    return <NewPlayer onSubmit={onNewPlayer} />
  } else if (!game) {
    return <JoinGame name={player.name} onCreate={onNewGame} onJoin={onJoinGame} />
  } else if (!game.isStarted) {
    return <Lobby game={game} player={player} onStart={onStart} />
  } else {
    return <Game player={player} game={game} onPlay={onPlay}/>
  }
}
