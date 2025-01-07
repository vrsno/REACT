import { SearchEmoji } from "../helpers/SearchEmoji";
import { Item } from "./Item";

export const Result = ({ valueEmoji, darkMode }) => {
  const arrayEmoji = SearchEmoji(valueEmoji);
  console.log(arrayEmoji);

  return (
    <section className="conatiner results">
      {arrayEmoji &&
        arrayEmoji.map((item) => (
          <Item
            key={item.title}
            title={item.title}
            emoji={item.symbol}
            darkMode={darkMode}
          />
        ))}
    </section>
  );
};
