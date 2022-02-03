export const Prompt = ({ turn, players, scores, src }) => {
  return (
    <div className="prompt">
      <div className="players">
        players:
        {players.map((p) => (
          <div key={p.id} className="nameplate">
            {turn.judge.id === p.id ? " 👑" : " ⏰"}{p.name} : {scores.get(p.id)}
          </div>
        ))}
      </div>
      <div className="prompt-card">
        <img src={src} alt="prompt card" />
      </div>
    </div>
  );
};
