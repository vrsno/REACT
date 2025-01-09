export function Card({ item }) {
  return (
    <div key={item.id} className="item">
      <div className="image">
        <img src={item.urls.small} alt={item.description} />
        <a className="btn-save" href="">
          Guardar
        </a>
        <a className="icon-upload" href="">
          <img src="/uploadicon.png" alt="upload" />
        </a>
        <a className="icon-dots" href="">
          <img src="/dotsicon.png" alt="upload" />
        </a>
      </div>
      <p>{item.description}</p>
      <div>
        <img className="user" src={item.user.profile_image.small} alt="" />
        <span>{item.user.name}</span>
      </div>
    </div>
  );
}
