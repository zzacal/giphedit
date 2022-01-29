import { Hand, Prompt } from ".";
import "./game.css";
export const Game = ({ game, player }) => {
  const { hand } = game.players.filter((p) => p.id === player.id)[0];
  const onPlay = () => {};
  return (
    <>
      <Prompt
        src={game.turns[0].card.imgUrl}
        turn={game.turns[0]}
        players={game.players}
      />
      <Hand cards={hand} onPlay={onPlay} />
    </>
  );
};
