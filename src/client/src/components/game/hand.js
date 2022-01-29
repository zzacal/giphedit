import { useState } from "react";
import { Card } from ".";
export const Hand = ({ cards, onLock }) => {
  const [pick, setPick] = useState(cards[0].id);
  return (
    <>
      <div className="hand">
        {cards.map((c) => (
          <Card
            key={c.id}
            src={c.imgUrl}
            isSelected={pick === c.id}
            onClick={() => setPick(c.id)}
          />
        ))}
      </div>
      <button className="btn-primary" onClick={() => onLock(pick)}>Play</button>
    </>
  );
};
