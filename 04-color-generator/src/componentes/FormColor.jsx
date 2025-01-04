import { useState } from "react";
import Values from "values.js";

export const FormColor = ({ setList }) => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);

  const handleGenerator = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="form-color">
      <h1>color Palete Generator</h1>
      <form onSubmit={handleGenerator}>
        <input
          type="text"
          placeholder="#fff"
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="submit" value="Generar" />
      </form>
      {error ? <p className="error"> no existe este color..</p> : null}
    </div>
  );
};
