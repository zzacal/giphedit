import { Card, Hand, Prompt } from ".";
import "./game.scss";
export const Game = ({ game, player, onPlay, onJudge }) => {
  const { turns, players } = game;
  const { hand } = players.filter((p) => p.id === player.id)[0];
  const scores = new Map(players.map(p => [p.id, turns.filter(t => t?.winner?.playerId === p.id).length]));

  const isJudging = turns[0]?.judge?.id === player.id
  const played = turns[0]?.plays?.filter((p) => p.playerId === player.id)[0];
  const hasPlayed = !!played;
  const isPlaying = !isJudging && !hasPlayed;

  const controls = getControls(isJudging, turns[0].plays, onJudge, isPlaying, hand, onPlay, hasPlayed,  played);
  return (
    <>
      <h3>{game.name}</h3>
      <Prompt
        src={game.turns[0].card.imgUrl}
        turn={game.turns[0]}
        players={game.players}
        scores={scores}
      />
      {controls}
    </>
  );
};

const getControls = (
  isJudging,
  plays,
  onJudge,
  isPlaying,
  hand,
  onPlay,
  hasPlayed,
  played,
) => {
  if (isJudging) {
    return <Hand cards={plays} onLock={onJudge} label="Pick the winner" />
  } else if (isPlaying) {
    return <Hand cards={hand} onLock={onPlay} label="Play a card" />;
  } else if (hasPlayed) {
    return <Card id={played.id} src={played.imgUrl} />;
  } else {
    return <></>;
  }
};
