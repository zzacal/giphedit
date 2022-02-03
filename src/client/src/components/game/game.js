import { Card, Hand, Prompt } from ".";
import "./game.scss";
export const Game = ({ game, player, onPlay }) => {
  console.log("Game rendered");
  const { turns, players } = game;
  const { hand } = players.filter((p) => p.id === player.id)[0];
  const played = turns[0]?.plays?.filter(p => p.playerId === player.id)[0]
  const turnPlayed = played;

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
      <div>{`game: ${game.id}`}</div>
      <div>{`player: ${player.id}`}</div>
      
      <Prompt
        src={game.turns[0].card.imgUrl}
        turn={game.turns[0]}
        players={game.players}
      />
      {controls}
    </>
  );
};
