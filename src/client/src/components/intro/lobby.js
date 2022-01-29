import "./lobby.css";

export const Lobby = ({ game, player, onStart }) => {
  return (
    <div className="lobby">
      <h1><a id="game-name">{game.name} 📋</a></h1>
      <p>send <span className="h2">☝️</span> that <span className="h2">👆</span> to your friends</p>
      <p>smash that like <span className="h2">(👍)</span> when the gang's all here. <br /> <small>or the dislike button, who cares</small></p>
      <h2>players:</h2>
      <div className="players">
        {game.players.map((p) => (
          <span key={p.id} className="nameplate">{p.id === player.id ? "you: " : ""}{p.name}</span>
        ))}
      </div>
      <div className="sect-start">
        <button className="btn-dislike" onClick={onStart}>👎</button>
        <button className="btn-like" onClick={onStart}>👍</button> 
      </div>
    </div>
  );
};
