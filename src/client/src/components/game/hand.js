import { Card } from ".";
export const Hand = ({ label, cards, onLock }) => {
  return (
    <>
      <div className="text-center">{label}</div>
      <div className="hand">
        {cards && cards.length ? cards.map((c) => (
          <Card
            key={c.id}
            cardId={c.id}
            src={c.imgUrl}
            isSelected={false}
            onClick={() => onLock(c.id)}
            onLock={() => onLock(c.id)}
          />
        )) : <></>}
      </div>
    </>
  );
};
