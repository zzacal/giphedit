import { Card } from ".";
export const Hand = ({ cards, onPlay }) => {

  return <>
    <div className="hand">
      {cards.map((c) => (
        <Card key={c.imgUrl} src={c.imgUrl} />
      ))}
    </div>
    <button className="btn-primary">Play</button>
  </>;
};
