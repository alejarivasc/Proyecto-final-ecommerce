import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState([]);

  const addFavorites = (info) => {
    setFavorites([...favorites, info]);
  };

  const removeFavorites = (id) => {
    setFavorites(favorites.filter((service) => service.id != id));
  };



//   const handleFavorites = (itemId) => {
//     if (favorites.some(item => item==itemId)) setFvorites (favorites.filter(item=> item != itemId))
//     else setFavorites([...favorites, itemId]);
//   };



  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorites, removeFavorites}}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
export const useFavoritesContext = () => useContext(FavoritesContext);

