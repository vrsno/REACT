import { useEffect } from "react";
import { moneyFormat } from "../helper.js";

export const Balance = ({ count, subs, spent, setSpent }) => {
  const updateBalance = () => {
    const spent = subs.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
    setSpent(spent);
  };

  useEffect(() => {
    updateBalance();
  }, [subs]);

  return (
    <div className="balance">
      <h3>Presupuesto: {moneyFormat(count)}</h3>
      <h3>Disponible: {moneyFormat(count - spent)}</h3>
      <h3>Gastado: {moneyFormat(spent)}</h3>
    </div>
  );
};
