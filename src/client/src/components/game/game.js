import { Prompt } from ".";
import { Controls } from "./controls";
import "./game.scss";
import { NamePlate } from "./namePlate";

export const Game = ({ game, player, onPlay, onJudge }) => {
  const { turns, players } = game;
  const { hand } = players.filter((p) => p.id === player.id)[0];
  const scores = new Map(players.map(p => [p.id, turns.filter(t => t?.winner?.playerId === p.id).length]));
  const turn = turns[0];

  const isJudging = turns[0]?.judge?.id === player.id
  const played = turns[0]?.plays?.filter((p) => p.playerId === player.id)[0];
  const hasPlayed = !!played;
  const isPlaying = !isJudging && !hasPlayed;

  return (
    <div className="game">
      <div className="layout-top">
        <div className="stats">
          <h3>{game.name}</h3>
          <div className="players">
            {players.map((p) => (
              <NamePlate key={p.id} name={p.name} icon={getIcon(p.id, turn)} score={scores.get(p.id)} />
            ))}
          </div>
        </div>
        <Prompt
          src={game.turns[0].card.imgUrl}
          turn={game.turns[0]}
        />
      </div>
      <Controls isJudging={isJudging}
                plays={turns[0].plays}
                onJudge={onJudge}
                isPlaying={isPlaying}
                hand={hand}
                onPlay={onPlay}
                hasPlayed={hasPlayed}
                played={played} />
    </div>
  );
};

const isPlayed = (playerId, turn) =>
  turn.plays.filter((p) => p.playerId === playerId).length;
const isJudging = (playerId, turn) => turn.judge.id === playerId;
const getIcon = (playerId, turn) =>
  isJudging(playerId, turn) ? "👑" : isPlayed(playerId, turn) ? "✅" : "⏳";

