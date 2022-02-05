import { useState } from "react";

export const NewPlayer = ({onSubmit}) => {
  const [name, setName] = useState("");
  return <div className="text-center">
    <h1>hello, {name || "player"}!</h1>
    <div className="txt-btn">
      <input type="text" className="input-primary" placeholder="name" value={name} onChange={e => setName(e.target.value)}></input>
      <button className="btn-primary" onClick={() => name && onSubmit(name)}>Go</button>
    </div>
  </div>
};
