import SingleItem from "./SimpleItem";

export const DisplayItems = ({ subs, eliminarItem, editItem }) => {
  return (
    <>
      <h2 style={{ display: "block" }}>Subcripciones</h2>
      {subs.map((item) => {
        return (
          <SingleItem
            key={item.id}
            id={item.id}
            price={item.price}
            type={item.type}
            eliminarItem={eliminarItem}
            editItem={editItem}
          ></SingleItem>
        );
      })}
    </>
  );
};
