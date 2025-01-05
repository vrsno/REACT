import DeafultImage from "../../public/NoImage.png";
import { Link } from "react-router-dom";

export function ItemMovie({ poster, title, year, id, type }) {
  //console.log(poster, title, id, title, year);

  let image = poster === "N/A" ? DeafultImage : poster;

  return (
    <Link
      to={`/movies/${id}`}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <article>
        <div
          className="item-movie"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="info">
            <h4>{title}</h4>
            <p className="row-info">
              <span>{type}</span>
              <span>{year}</span>
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
