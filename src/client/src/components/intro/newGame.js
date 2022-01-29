import { useState } from "react";

export const JoinGame = ({ playerName, onCreate, onJoin }) => {
  const [gameId, setGameId] = useState("");
  return <>
    <h1>welcome, {playerName || "player"}!</h1>
    <div><button className="btn-primary" onClick={onCreate}>Create</button></div>
    <div>
      <input type="text" className="input-primary" placeholder="search" onChange={e => setGameId(e.target.value)}></input>
      <button className="btn-primary" onClick={() => onJoin(gameId)}>Join</button>
    </div>
  </>;
};
