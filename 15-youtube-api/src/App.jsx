import "./App.css";
import { HamMenu } from "./components/HamMenu";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <header className="container-fluid" style={{ position: "absolute" }}>
      <div
        className="container-fluid"
        style={{ position: "fixed", zIndex: "1000", backgroundColor: "white" }}
      >
        <NavBar />
      </div>
      <HamMenu />
    </header>
  );
}

export default App;
