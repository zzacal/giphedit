import { Card, Hand, Prompt } from ".";
import "./game.scss";
export const Game = ({ game, player, onPlay }) => {
  console.log("Game rendered");
  const { turns, players } = game;
  const { hand } = players.filter((p) => p.id === player.id)[0];
  const played = turns[0]?.plays?.filter(p => p.playerId = player.id)[0]
  const turnPlayed = played;

  console.log(turns);
  const controls = turnPlayed ? (
    <Card
      id={played.id}
      src={played.imgUrl}
      isSelected={true}
    />
  ) : (
    <Hand cards={hand} onLock={onPlay} />
  );
  return (
    <>
      <Prompt
        src={game.turns[0].card.imgUrl}
        turn={game.turns[0]}
        players={game.players}
      />
      {controls}
    </>
  );
};
