import { useApi } from "../hooks/useApi";
import { ImageItem } from "./ImageItem";

export const DisplayGifs = ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=IgJf2jba3NtqTEuXy9x6iCXBAYnpbAEe&q=${category}&limit=10`;

  const { loading, data } = useApi(url);

  return (
    <div className="container-gifs">
      {loading
        ? data.map((img) => (
            <ImageItem
              key={img.id}
              title={img.title}
              url={img.images.downsized.url}
            />
          ))
        : ""}
    </div>
  );
};
