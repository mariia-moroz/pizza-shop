import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(price);
  }, [cartItems, setTotalPrice, totalPrice]);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, totalPrice, setTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
