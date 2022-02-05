import { useState } from "react";

export const JoinGame = ({ name, onCreate, onJoin }) => {
  const [gameId, setGameId] = useState("");
  return <div className="text-center">
    <h2>welcome, {name || "player"}</h2>
    <h2><button className="btn-primary" onClick={onCreate}>Create</button></h2>
    <div>or</div>
    <div className="txt-btn">
      <input type="text" className="input-primary" placeholder="search" onChange={e => setGameId(e.target.value)}></input>
      <button className="btn-primary" onClick={() => onJoin(gameId)}>Join</button>
    </div>
  </div>;
};
