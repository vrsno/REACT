import "./App.css";
import { HamMenu } from "./components/HamMenu";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <header className="container-fluid">
      <NavBar />
      <HamMenu />
    </header>
  );
}

export default App;
