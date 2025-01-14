export const NavBar = () => {
  return (
    <nav className="p-2 navbar navbar-expand-lg d-flex align-items-center justify-content-between">
      <ul className="navbar-nav d-flex align-items-center">
        <li className="navbar-item me-3" style={{ width: "35px" }}>
          <img className="w-100" src="/ham-menu.webp" alt="" />
        </li>

        <li className="navbar-item" style={{ width: "35px" }}>
          <img className="w-100" src="/youtube.png" alt="" />
        </li>
        <span className="text-bold">YOUTUBE</span>
      </ul>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <form className="form-inline rounded">
            <input
              className="form-control mr-sm-2 "
              style={{ width: "450px" }}
              placeholder="Search"
            />
          </form>
        </li>

        <li className="navbar-item" style={{ width: "35px" }}>
          <img className="w-100" src="/search.png" alt="" />
        </li>

        <li className="navbar-item" style={{ width: "35px" }}>
          <img className="w-100" src="/microphone.png" alt="" />
        </li>
      </ul>

      <ul className="navbar-nav d-flex align-items-center justify-content-center">
        <li className="navbar-item" style={{ width: "35px" }}>
          <img className="w-100" src="/list-point.png" alt="" />
        </li>

        <li className="navbar-item">
          <div className="d-flex align-items-center bg-light border rounded p-1">
            <img src="/user.png" style={{ width: "35px" }} alt="" />
            <span>Acceder</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};
