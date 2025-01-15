export const HamMenu = () => {
  return (
    <section
      className=""
      style={{
        maxHeight: "94vh",
        maxWidth: "200px",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollbarWidth: "thin",
      }}
    >
      <div className="navbar d-flex flex-direction-column gap-3">
        <ul className="navbar-nav w-100  me-2">
          <li className="nav-item ">
            <h2 className="hover-bg-light h6 p-2 p-2 border-pill">Principal</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Shorts</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Suscripciones</h2>
          </li>
        </ul>
        <ul className="navbar-nav w-100 me-2 border-top border-dark">
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2 mt-2">tu</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">historial</h2>
          </li>
        </ul>
        <ul className="navbar-nav border-top border-dark w-100 me-2">
          <h2 className="h5 mt-2">Explorar</h2>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Tendencias</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Musica</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">En vivo</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Videojuegos</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Noticias</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Deportes</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Aprendizaje</h2>
          </li>
        </ul>
        <ul className="navbar-nav border-top border-dark w-100 me-2">
          <h2 className="mt-2 h5">Mas de Youtube</h2>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Youtube</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Youtube Music</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Youtube kids</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Videojuegos</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Noticias</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Deportes</h2>
          </li>
          <li className="nav-item">
            <h2 className="hover-bg-light h6 p-2">Aprendizaje</h2>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">Configuracion</li>
        </ul>
      </div>
    </section>
  );
};
