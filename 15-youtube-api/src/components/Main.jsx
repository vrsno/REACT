import { useEffect, useState } from "react";

export const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const username = "TheGrefg";
  const channelId = "UCCEmjNPpJYhGDgaEqeeA4HA";

  const API_KEY = "AIzaSyA__aLKDl2tXYRuGYZ3OCbr-rxB79scADI";
  //para solicitar id del canal en especifico
  //   const url = `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&forUsername=${username}&part=id
  // `;
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&maxResults=20&type=video&part=snippet`;

  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      setData(responseJson.items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  console.log(data);

  return (
    <section className="">
      <div
        className="p-4 container d-flex align-items-start flex-wrap gap-4"
        style={{ minWidth: "90vw" }}
      >
        {loading ? (
          <div>loading..</div>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column"
              style={{ width: "310px" }}
            >
              <img
                className="img-fluid rounded border"
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
              />
              <div
                className="d-flex flex-column"
                style={{ textOverflow: "ellipsis" }}
              >
                {/* Aquí corregimos para que se muestren los valores reales */}
                <p className="mb-0">{item.snippet.title}</p>
                <p className="mb-0">{item.snippet.channelTitle}</p>
                <span className="mb-0">29k visualizaciones ° hace 2 horas</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
