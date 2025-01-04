export const ImageItem = ({ title, url }) => {
  return (
    <div className="">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
