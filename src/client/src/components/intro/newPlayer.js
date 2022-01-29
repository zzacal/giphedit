import { useState } from "react";

export const NewPlayer = ({onSubmit}) => {
  const [name, setName] = useState("");
  return <>
    <h1>hello, {name || "player"}!</h1>
    <p>let your friends know whomst you are</p>
    <input type="text" className="input-primary" placeholder="name yourself" value={name} onChange={e => setName(e.target.value)}></input>
    <button className="btn-primary" onClick={() => name && onSubmit(name)}>Go</button>
  </>
};
