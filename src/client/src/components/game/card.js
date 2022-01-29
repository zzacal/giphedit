export const Card = ({ src, isSelected, onClick }) => {
  return (
    <span className={`card ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <img src={src} alt="card option" />
    </span>
  );
};
