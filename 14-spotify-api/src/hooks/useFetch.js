import { useEffect, useState } from "react";

export const useFetch = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const TOKEN_AUTH =
    "BQAIt3uSC24PRsYeGnTIpxfa9U7Mhyz3_rAsVVA4KAM3s2WwADew7fVYfOtYFlBruWd7ok1Jxr7EM1h0LNfSC9qN2uHjT3IhLiWRonYjOZBI6evi3EQ";

  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    query
  )}&type=track&limit=15`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN_AUTH}`,
            "Content-Type": "application/json",
          },
        });
        const responseJson = await response.json();
        setData(responseJson.tracks.items); // acceder a los items correctamente
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchData();
    }
  }, [url]); // Dependencia de `url` para que recargue cuando cambie

  return { data, loading };
};
