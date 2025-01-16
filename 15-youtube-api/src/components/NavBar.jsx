export const NavBar = () => {
  return (
    <nav className=" p-2 navbar navbar-expand-sm d-flex flex-sm-row  justify-content-between align-items-center bg-primary">
      <ul className="navbar-nav d-flex align-items-center justify-content-center">
        <li
          className="navbar-item me-3  d-none d-lg-block"
          style={{ width: "35px" }}
        >
          <img className="w-100" src="/ham-menu.webp" alt="" />
        </li>

        <li className="navbar-item" style={{ width: "35px" }}>
          <img className="w-100" src="/youtube.png" alt="" />
        </li>
        <span className="text-bold d-md-inline-block">YOUTUBE</span>
      </ul>

      <ul className="navbar-nav d-flex align-items-center justify-content-center">
        <li className="navbar-item">
          <form
            className="form-inline rounded"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="input-group">
              <input
                className="form-control d-none d-lg-block"
                style={{ width: "550px" }}
                placeholder="Search"
              />
              <button className="input-group-text" type="submit">
                <img src="/search.png" style={{ width: "30px" }} alt="Search" />
              </button>
            </div>
          </form>
        </li>

        <li
          className="navbar-item d-flex align-items-center  d-none d-lg-block"
          style={{ width: "35px" }}
        >
          <img className="w-100 opacity-50" src="/microphone.png" alt="" />
        </li>
      </ul>

      <ul className="navbar-nav d-flex align-items-center justify-content-center">
        <li
          className="navbar-item  d-none d-lg-block"
          style={{ width: "35px" }}
        >
          <img className="w-100 " src="/list-point.png" alt="" />
        </li>

        <li className="navbar-item">
          <div className="d-flex align-items-center bg-light border rounded p-1">
            <img
              className="me-2 opacity-50"
              src="/user.png"
              style={{ width: "35px" }}
              alt=""
            />
            <span>Acceder</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};
