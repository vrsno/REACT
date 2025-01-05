import "./App.css";
import ErrorPage from "./componests/ErrorPage";
import { MainPage } from "./componests/MainPage";
import { SingleMovie } from "./componests/singleMovie";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
