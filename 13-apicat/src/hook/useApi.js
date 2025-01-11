import { useEffect, useState } from "react";

export const fetchApi = (api) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(api);
        const responseJson = await response.json();
        setData(responseJson);
      } catch (e) {
        console.error("Error al obtener los datos:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api]);

  return { data, loading };
};
