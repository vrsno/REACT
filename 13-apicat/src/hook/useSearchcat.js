import { useEffect, useState } from "react";

export const useSearchCat = (api) => {
  const [catType, setCatType] = useState("pers");
  const [breeds, setBreeds] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const fecthBreeds = async () => {
      try {
        const response = await response(api);
        const responseJson = await response.json();
        setBreeds(responseJson);
      } catch (e) {
        console.log(e);
      } finally {
        setloading(false);
      }
    };
    fecthBreeds();
  }, [api]);

  const handlesetCatType = (id) => {
    setCatType(id);
  };

  return { handlesetCatType, catType, breeds, loading };
};
