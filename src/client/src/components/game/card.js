export const Card = ({ playerId, cardId, src, isSelected, onClick, onLock }) => {
  return (
    <span className={`card ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <img src={src} alt="card option" />
      {isSelected ?
        <button className="btn-play glow" onClick={onLock}>
          lock in
        </button>
        : null}
        {playerId}
    </span>
  );
};
