import { DemoCatApi } from "./DemoCatApi";
import { useSearchCat } from "../hook/useSearchcat";
import { API_KEY } from "../helpers/ApiKey";
import { useState } from "react";

export const Searchcat = () => {
  const [catType, setCatType] = useState("");
  const api = `https://api.thecatapi.com/v1/images/search?limit&breed_ids=${catType}&api_key=${API_KEY}`;

  //const { breeds, loading, handleSetCatType, catType } = useSearchCat(api);

  console.log(catType);

  return (
    <>
      <section className="mb-4 text-center">
        <div className="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu"></ul>
        </div>
      </section>
      <DemoCatApi api={api} />
    </>
  );
};
