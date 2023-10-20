import { createContext, useContext, useState } from "react";

const PizzaItemContext = createContext();

export const usePizzaItem = () => {
  return useContext(PizzaItemContext);
};

export const PizzaItemProvider = ({ children }) => {
  const [pizzaSize, setPizzaSize] = useState("");
  const [pizzaPrice, setPizzaPrice] = useState(0);
  const [pizzaToppingsIncluded, SetPizzaToppingsIncluded] = useState(0);
  const [pizzaIngredients, setPizzaIngredients] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <PizzaItemContext.Provider
      value={{
        pizzaSize,
        setPizzaSize,
        pizzaPrice,
        setPizzaPrice,
        pizzaToppingsIncluded,
        SetPizzaToppingsIncluded,
        pizzaIngredients,
        setPizzaIngredients,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </PizzaItemContext.Provider>
  );
};
