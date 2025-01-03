import { useState } from "react";
import "./App.css";
import { FormAddMoney } from "./components/FormAndMoney";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(null);

  return (
    <div className="App">
      {count}
      <Header />
      <FormAddMoney setCount={setCount} />
    </div>
  );
}

export default App;
