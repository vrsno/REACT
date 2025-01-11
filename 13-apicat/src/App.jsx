import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const API_KEY =
    "live_ggwWMHIfz820fkNHSkGCgu0jbquYNCDpwiPwG4vXpjEoWyoKMNk0pJWMWX5wA7OP";

  const api = `https://api.thecatapi.com/v1/images/search?limit=6&breed_ids=beng&api_key=${API_KEY}`;

  //console.log(api.url);

  const fetchApi = async () => {
    try {
      const response = await fetch(api);
      const responseJson = await response.json();
      setData(responseJson);
    } catch (e) {
      console.error("Error al obtener los datos:", e);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  console.log(data);

  return (
    <section className="container w-100">
      <div>cat api</div>
      <div className="row gap-2">
        {data.map((item) => (
          <div className="col-4" key={item.id}>
            <img
              className="img-fluid rounded "
              src={item.url}
              alt=""
              style={{
                width: item.width !== 200 ? "200px" : `${item.width}px`, // Condición para cambiar el ancho
                height: item.height !== 200 ? "200px" : `${item.height}px`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
