import React from "react";
import ServiCard from "../components/ServiCard";
import { useFavoritesContext } from "../context/FavoritesContext";


export default function Favorites() {

  const { favorites } = useFavoritesContext();

  return(
    <div id="fav">
          <h2>Tus publicaciones guardadas</h2>
    <div className="galeria grid-columns-4 p-3">
      {favorites.map((service) => {
        return <ServiCard key={service.id} info={service}  favorites />;
      })}
    </div>
  </div>



)}

