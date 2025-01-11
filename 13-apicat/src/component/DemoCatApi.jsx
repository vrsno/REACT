import { API_KEY } from "../helpers/ApiKey";
import { fetchApi } from "../hook/useApi";

export const DemoCatApi = ({ api }) => {
  const { data, loading } = fetchApi(api);
  console.log(data);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row gap-2">
      {data &&
        data.map((item) => (
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
  );
};
