import { Card, Hand } from "./";
import "./controls.scss";

export const Controls = ({
  isJudging,
  plays,
  onJudge,
  isPlaying,
  hand,
  onPlay,
  hasPlayed,
  played,
}) => <div className="controls">{
  isJudging && plays.length < 1 ? 
    <div className="text-center">waiting</div>
  : isJudging ?
    <Hand cards={plays} onLock={onJudge} label="which do you love?" />
  : isPlaying ?
    <Hand cards={hand} onLock={onPlay} label="play a card" />
  : (hasPlayed) ?
    // <Card id={played.id} src={played.imgUrl} />
    <Hand cards={[played]} onLock={()=>{}} label="you chose" />
  :
   <></>
}</div>;
