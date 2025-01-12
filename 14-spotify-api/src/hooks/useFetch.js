import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const TOKEN_AUTH =
    "BQBB2H7LzPG5JD8EDTXevjdishSlhE1lbPD_3c2YbGY8IoU2GuL_n3eNKYQBXR5XTahEQDabfTLfu7ioBi34m4Uakjyb6T33hGmiJtAduMhOvRkGYzw";

  const query = "bad bunny";
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
        setData(responseJson.tracks.items); // Asegúrate de acceder a los items correctamente
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Dependencia de `url` para que recargue cuando cambie

  return { data, loading };
};
