export const Item = ({ name, score, index }) => {
  return (
    <div className="item">
      <span>{++index}</span>
      <span>{name}</span>
      <span>{score} Pts</span>
      <span></span>
    </div>
  );
};
