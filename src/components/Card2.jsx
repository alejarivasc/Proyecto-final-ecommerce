import { Heart, HeartFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { useCartContext } from "../context/CartContext";
import { useFavoritesContext } from "../context/FavoritesContext";
import { ToastContainer, toast } from "react-toastify";

export default function Card2({ filtered }) {
  const { favorites, addFavorites, removeFavorites } = useFavoritesContext();
  const { addService } = useCartContext();

  const isFavorite = favorites.some((item) => item.id === filtered.id);

  const handleAddFavorites = (service) => {
    addFavorites(service);
    toast.success("Añadido a favoritos!");
  };

  const handleRemoveFavorites = (serviceId) => {
    removeFavorites(serviceId);
    toast.success("Eliminado de favoritos!");
  };

  return (
    <>
      <div className="col ">
        <Card className="h-100 card-container" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={filtered.img} className="card-img-top" />
          {isFavorite ? (
            <HeartFill
              className="iconfavv"
              role="button"
              onClick={() => handleRemoveFavorites(filtered.id)}
            />
          ) : (
            <Heart
              className={isFavorite ? "iconfav" : "iconfavv"}
              role="button"
              onClick={() => handleAddFavorites(filtered)}
            />
          )}
          <Card.Body>
            <div className="bodycard">
              <Card.Title>{filtered.titulo}</Card.Title>
              <Card.Text>Precio: $ {filtered.precio}</Card.Text>
              <div className="button-container">
                <Link to={`/services/${filtered.id}`}>
                  <Button variant="primary">Detalle</Button>
                </Link>
                <Link to={"/mycart"}>
                  <Button
                    variant="primary"
                    onClick={() => addService(filtered)}
                  >
                    Comprar
                  </Button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
        <ToastContainer />
      </div>
    </>
  );
}
