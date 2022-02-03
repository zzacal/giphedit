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
            cardId={c.id}
            src={c.imgUrl}
            isSelected={pick === c.id}
            onClick={() => setPick(c.id)}
            onLock={() => onLock(c.id)}
          />
        ))}
      </div>
    </>
  );
};
