export const Prompt = ({ turn, players, src }) => {
  return (
    <div className="prompt">
      <div className="players">
        players:
        {players.map((p) => (
          <div key={p.id} className="nameplate">
            {p.name}{turn.judge.id === p.id ? " 👑" : " ⏰"}
          </div>
        ))}
      </div>
      <div className="prompt-card">
        <img src={src} alt="prompt card" />
      </div>
    </div>
  );
};
