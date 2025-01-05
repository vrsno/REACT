import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

// import { useFetch } from "../hooks/useFetch";

export const FormSearch = () => {
  const [title, setTitle] = useState("");
  // const data = useFetch(`&s=${title}`);
  const { setQuery, error } = useContext(DataContext);
  console.log(setQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      setQuery(title);
    }
  };

  return (
    <div className="form-search">
      <h2>Old Movies Finder</h2>
      {title}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title movie"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      {error && <p className="error">The movie does not exist</p>}
    </div>
  );
};
