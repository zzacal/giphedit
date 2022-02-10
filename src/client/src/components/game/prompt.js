export const Prompt = ({ turn, players, scores, src }) => {
  return (
    <div className="prompt">
      <div className="prompt-card">
        <img src={src} alt="prompt card" />
      </div>
    </div>
  );
};
