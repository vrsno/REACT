import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Form } from "./Form";

export const Card = () => {
  const [query, setQuery] = useState("bad bunny");
  const { data, loading } = useFetch(query);
  //console.log(data);

  if (loading) {
    return <div>Cargandoo</div>;
  }

  return (
    <div className=" text-white row">
      <Form query={query} setQuery={setQuery} />
      {data && data.length > 0 ? (
        data.map((track) => (
          <div
            className="bg-dark col-lg-4 col-md-6 col-sm-2 gap-2 "
            key={track.id}
          >
            <h2 className="mt-2">{track.name}</h2>
            <img className="rounded " src={track.album.images[1].url} alt="" />
            <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ))
      ) : (
        <p>No se encontraron canciones.</p>
      )}
    </div>
  );
};
