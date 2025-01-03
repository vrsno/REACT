import { useState } from "react";

export const FormAddMoney = ({ setCount, setIsValid }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (input === "" || Number(input) < 0) {
      setError(true);
      return;
    }
    setError(false);
    setCount(Number(input));
    setIsValid(true);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="form-add-money">
      <form onSubmit={handleForm}>
        <p>Agregar presupuesto</p>
        <input type="number" placeholder="300$" onChange={handleInputChange} />
        <input type="submit" value="Agregar" />
      </form>
      {error ? <p className="error">Presupuesto invalido</p> : null}
    </div>
  );
};
