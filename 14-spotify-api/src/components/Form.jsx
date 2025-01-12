import { useState } from "react";

export const Form = () => {
  const [valueInput, setValueInput] = useState("");
  console.log(valueInput);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBtnSubmit = () => {
    setValueInput(valueInput);
  };

  return (
    <form
      className="bg-success rounded p-4 d-flex gap-2 justify-content-center align-items-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="">buscar cantante</label>
      <input
        type="text"
        placeholder="bad bunny"
        onChange={(e) => setValueInput(e.target.value)}
        value={valueInput}
      />
      <button type="button" onClick={handleBtnSubmit}>
        Buscar
      </button>
    </form>
  );
};
