import React, { createContext, useState } from "react";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const exist = prevCart.find((cartItem) => cartItem.id === item.id);

      if (exist) {
        toast.info(`🛒 Increased quantity of ${item.title}`, {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });

        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      }

      toast.success(`${item.title} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });

      return [...prevCart, { ...item, qty: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
