import { useState } from "react";

export const Form = ({ setQuery }) => {
  const [valueInput, setValueInput] = useState("");
  console.log(valueInput);
  // es mejor hacer una sola funcion como la siguiente
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueInput.trim()) {
      // Asegúrate de que no sea vacío no va a ser ya que el state esta definido por defecto
      setQuery(valueInput); // Actualiza el estado del componente padre
    }
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
      <button type="submit">Buscar</button>
    </form>
  );
};
