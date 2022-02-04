export const Prompt = ({ turn, players, scores, src }) => {
  return (
    <div className="prompt">
      <div className="players">
        {players.map((p) => (
          <div key={p.id} className="nameplate">
            <div className="name h6">{p.name}</div>
            <div className="player-attributes"> 
              <span className="icon">{getIcon(p.id, turn)}</span>
              <span className="score">{scores.get(p.id)}</span>
            </div>
          </div>
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
