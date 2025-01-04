import { useState } from "react";
import "./App.css";
import { AddCategory } from "./componentes/AddCategory";
import { DisplayGifs } from "./componentes/DisplayGifs";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <h2>Gifs Expert App</h2>
      <AddCategory setCategory={setCategory} />
      <DisplayGifs category={category} />
    </div>
  );
}

export default App;
