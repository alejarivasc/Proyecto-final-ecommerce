import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addService = (service) => {
    const serviceAdded = cart.find((added) => added.id === service.id);

    if (serviceAdded) {
      setCart(
        cart.map((added) => {
          if (added.id === service.id) {
            return { ...serviceAdded, amount: serviceAdded.amount + 1 };
          } else return added;
        })
      );
    } else {
      setCart([...cart, { ...service, amount: 1 }]);
    }
  };
  const removeService = (service) => {
    const serviceAdded = cart.find((added) => added.id === service.id);
    if (serviceAdded.amount === 1) {
      setCart(cart.filter((added) => added.id !== service.id));
    } else {
      setCart(
        cart.map((added) => {
        if (added.id === service.id) {
          return { ...serviceAdded, amount: serviceAdded.amount - 1 };
        } else return added;
      })
      )}};
  const total = () => {
    return cart.reduce((acum, service) => acum + service.precio * service.amount, 0);
  };

  const unformattedTotal = total();
const formattedTotal = Number.isFinite(unformattedTotal)
  ? parseFloat(unformattedTotal.toFixed(2))
  : 0;

  const serviceAmount = (id) => {
    const service = cart.find((added) => added.id === id);
    return service ? service.amount : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addService,
        removeService,
        formattedTotal,
        serviceAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
