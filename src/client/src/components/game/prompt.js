import { NamePlate } from "./namePlate";

export const Prompt = ({ turn, players, scores, src }) => {
  return (
    <div className="prompt">
      <div className="players">
        {players.map((p) => (
          <NamePlate key={p.id} name={p.name} icon={getIcon(p.id, turn)} score={scores.get(p.id)} />
        ))}
      </div>
      <div className="prompt-card">
        <img src={src} alt="prompt card" />
      </div>
    </div>
  );
};

const isPlayed = (playerId, turn) =>
  turn.plays.filter((p) => p.playerId === playerId).length;
const isJudging = (playerId, turn) => turn.judge.id === playerId;
const getIcon = (playerId, turn) =>
  isJudging(playerId, turn) ? "👑" : isPlayed(playerId, turn) ? "✅" : "⏳";
