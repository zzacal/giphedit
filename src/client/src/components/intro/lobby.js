export const Lobby = ({ game, onStart }) => {
  return (
    <>
      <h1>welcome to {game.name}, the best game!</h1>
      <div>
        <h2>players:</h2>
        {game.players.map((p) => (
          <span key={p.id} className="tag">{p.name}</span>
        ))}
      </div>
      <div>
        <button className="btn-primary" onClick={onStart}>Start</button>
      </div>
    </>
  );
};
