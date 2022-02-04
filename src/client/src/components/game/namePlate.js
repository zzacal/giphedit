export const NamePlate = ({ name, icon, score }) => (
  <div className="nameplate">
    <div className="name">{name}</div>
    <div className="player-attributes">
      <span className="icon">{icon}</span>
      <span className="score">{score}</span>
    </div>
  </div>
);
