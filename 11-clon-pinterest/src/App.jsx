import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { useBookStore } from "./store/bookStore";

import { createApi } from "unsplash-js";
import Masonry from "@mui/lab/Masonry";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [data, setData] = useState([]);
  let index = useRef(1);
  const [hasMore, setHasMore] = useState(true);

  const val = useBookStore((state) => state.value);

  const api = createApi({
    accessKey: import.meta.env.VITE_ACCESS_KEY,
  });
  console.log(data);

  useEffect(() => {
    index.current = 1;
    setHasMore(true);
    api.search
      .getPhotos({ query: val, perPage: 20, page: index.current })
      .then((result) => {
        setData(result.response.results);
      })
      .catch(() => {
        console.log("something went wrong");
      });
  }, [val]);

  const moreData = () => {
    index.current = index.current + 1;
    if (index.current === 3) {
      setHasMore(false);
    }

    api.search
      .getPhotos({ query: val, perPage: 20, page: index.current })
      .then((result) => {
        setData(data.concat(result.response.results));
      })
      .catch(() => {
        console.log("something went wrong");
      });
    console.log("scrollinggg");
  };

  return (
    <div className="container">
      <Header />
      <InfiniteScroll
        dataLength={data.length}
        hasMore={hasMore}
        next={moreData}
        loader={<h4>Loading...</h4>}
        style={{ overflow: "none" }}
      >
        <Masonry
          columns={{ xs: 2, sm: 3, md: 5 }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
          className="masonry"
        >
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Masonry>
      </InfiniteScroll>
      <h2>container</h2>
    </div>
  );
}

export default App;
