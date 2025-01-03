export const moneyFormat = (amount) => {
    if (isNaN(amount) || amount === null || amount === undefined) {
      return "$0.00";  // Retorna un valor predeterminado si amount no es un número válido
    }
  
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  