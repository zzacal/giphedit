import { Card } from ".";
import "./game.css"
export const Game = ({ game, player }) => {
  console.log(game);
  console.log(player);
  const { hand } = game.players.filter( p => p.id === player.id)[0];
  return (
    <>
      {game.id}
      <div className="prompt">
        <img src={game.turns[0].card.imgUrl} />
      </div>
      <div className="hand">
        {hand.map(c => <Card key={c.imgUrl} src={c.imgUrl} />)}
      </div>
    </>
  );
};
