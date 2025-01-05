import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { ItemMovie } from "./ItemMovie";

export const Movies = () => {
  const { isLoading, data } = useContext(DataContext);

  console.log("Data in Movies:", data); // Log para verificar los datos que llegan

  const moviesList = Array.isArray(data) ? data : [];

  return (
    <div className="movies-content">
      {!isLoading ? (
        moviesList.length > 0 ? (
          moviesList.map((item) => (
            <ItemMovie
              poster={item.Poster}
              title={item.Title}
              year={item.Year}
              key={item.imdbID}
              id={item.imdbID}
              type={item.Type}
            />
          ))
        ) : (
          <p>No movies found</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
