import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Form } from "./Form";

export const Card = () => {
  const { data, loading } = useFetch("bad bunny");
  //console.log(data);
  const [query, setQuery] = useState("");

  if (loading) {
    return <div>Cargandoo</div>;
  }

  return (
    <div className=" text-white row">
      <Form />
      {data && data.length > 0 ? (
        data.map((track) => (
          <div className="bg-dark col-4 gap-2 " key={track.id}>
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
