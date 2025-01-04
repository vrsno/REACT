import { useState } from "react";
import "./App.css";
import Values from "values.js";
import { FormColor } from "./componentes/FormColor";
import { DisplayColors } from "./componentes/DisplayColors";

function App() {
  const [list, setList] = useState(new Values("red").all(10));
  console.log(list);

  return (
    <div>
      <FormColor setList={setList} />
      <DisplayColors list={list} />
    </div>
  );
}

export default App;
