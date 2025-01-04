import { SingleColor } from "./SingleColor";

export const DisplayColors = ({ list }) => {
  return (
    <div className="colors-box">
      {list.map((color, index) => (
        <SingleColor key={index} hexColor={color.hex} />
      ))}
    </div>
  );
};
