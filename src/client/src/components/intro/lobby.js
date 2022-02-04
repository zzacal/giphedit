import { useState } from "react";
import { NamePlate } from "../game/namePlate";
import "./lobby.scss";

export const Lobby = ({ game, player, onStart }) => {
  const [turns, setTurns] = useState(2);
  const [hand, setHand] = useState(4);
  const [rating, setRating] = useState("g");
  const owner = game.players[0].id;

  return (
    <div className="lobby">
      <h1>
        <button onClick={() => navigator.clipboard.writeText(game.name)}>
          {game.name} 📋
        </button>
      </h1>
      
      <label>players</label>
      <div className="players">
        {game.players.map((p) => (
          <NamePlate key={p.id} name={p.name} score={""} icon={ p.id === owner ? "👑" : "🎩"} />
        ))}
      </div>
      {
        owner === player.id ? (<>
          <div className="game-settings col-10 col-sm-6">
            <label>
              turns
              <input
                type="number"
                className="input-primary"
                value={turns}
                onChange={(e) => setTurns(e.target.value)}
              />
            </label>
            <label>
              hand
              <input
                type="number"
                className="input-primary"
                value={hand}
                onChange={(e) => setHand(e.target.value)}
              />
            </label>
          </div>
          <label>rating</label>
          <div className="game-rating col-10 col-sm-6">
              <RatingOpt rating="g" current={rating} onSet={setRating} />
              <RatingOpt rating="pg" current={rating} onSet={setRating} />
              <RatingOpt rating="pg-13" current={rating} onSet={setRating} />
              <RatingOpt rating="r" current={rating} onSet={setRating} />
          </div>    
        </>) : <></>
      }
      <div className="sect-start">
        <button className="btn-start" onClick={() => onStart(game.id, turns, hand, rating)}>
          START
        </button>
      </div>
    </div>
  );
};

const RatingOpt = ({rating, current, onSet}) => <span className={`rating-opt ${selectedIf(current, rating)}`}     onClick={() => onSet(rating)}>{rating}</span>
const selectedIf = (expected, actual) => expected === actual ? "selected" : ""