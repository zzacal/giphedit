import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import services from "../services";
import { Game } from "./game";
import { JoinGame, Lobby, NewPlayer } from "./intro";

const persist = services.getPersistence();
const games = services.getGameService();
const players = services.getPlayerService();
const hub = services.getGameHub();

export const Home = () => {
  const history = useHistory();
  const [game, setGame] = useState(null);
  const [player, setPlayer] = useState(null);
  const [gameId, setGameId] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const wait = async (awaitable) => {
    setIsLoading(true);
    try{
      await awaitable();
    } finally {
      setIsLoading(false);
    }
  };
  const onNewPlayer = async (name) => {
    await wait(async () => {
      const result = await players.new(name);
      persist.set("playerId", result.id);
      setPlayer(result);
    });
  };

  const onNewGame = async () => {
    await wait(async () => {
      const result = await games.get();
      if (result) {
        history.push(`/${result.name}`);
        setGameId(result.id);
      }
    });
  };

  const onJoinGame = async (name) => {
    await wait(async () => {
      if (name) {
        const result = await games.find(name);
        if (result) {
          history.push(`/${result.name}`);
          setGameId(result.id);
        }
      }
    });
  };

  const onStart = async (gameId, turns, hand, rating) => {
    await wait(async () => {
      await hub.start(gameId, player.id, turns, hand, rating, setGame);
    });
  };

  const onPlay = async (cardId) => {
    await wait(async () => {
      await wait(hub.play(game.id, player.id, cardId, setGame));
    });
  };

  const onJudge = async (cardId) => {
    await wait(async () => {
      await hub.judge(game.id, player.id, cardId, setGame);
    });
  };

  const prstPlayerId = persist.get("playerId");
  if (!player && prstPlayerId) {
    players.get(prstPlayerId).then((result) => {
      result && setPlayer(result);
    });
  }

  let params = useParams();
  const paramsGameName = params.gameName;
  if (!gameId && paramsGameName) {
    games.find(paramsGameName).then((result) => result && setGameId(result.id));
  }

  useEffect(() => {
    if (!hub.isConnected && gameId && player?.id) {
      hub.join(gameId, player.id, setGame);
    }
  }, [gameId, player?.id]);

  if (isLoading) {
    return <div class="text-center h2">☕️</div>;
  } else if (!player) {
    return <NewPlayer onSubmit={onNewPlayer} />;
  } else if (!game) {
    return (
      <JoinGame name={player.name} onCreate={onNewGame} onJoin={onJoinGame} />
    );
  } else if (!game.isStarted) {
    return <Lobby game={game} player={player} onStart={onStart} />;
  } else {
    return (
      <Game player={player} game={game} onPlay={onPlay} onJudge={onJudge} />
    );
  }
};
