import "./App.css";
import { DemoCatApi } from "./component/DemoCatApi";
import { Searchcat } from "./component/SearchCat";

function App() {
  return (
    <section className="container w-100">
      <div>cat api</div>
      <Searchcat />
    </section>
  );
}

export default App;
