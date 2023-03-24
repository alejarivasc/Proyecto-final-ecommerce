import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Heart } from "react-bootstrap-icons";
import { HeartFill } from "react-bootstrap-icons";

import { useFavoritesContext } from "../context/FavoritesContext";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function ServiCard({ info }) {
  const { favorites, addFavorites, removeFavorites } = useFavoritesContext();
  const { addService } = useCartContext();

  const isFavorite = favorites.some((item) => item.id === info.id);

  const handleAddFavorites = (service) => {
    addFavorites(service);
    toast.success("Añadido a favoritos!");
  };

  const handleRemoveFavorites = (serviceId) => {
    removeFavorites(serviceId);
    toast.success("Eliminado de favoritos!");
  };

  return (
    <div className="col">
      <Card className="h-100 card-continer" style={{ width: "18rem" }}>
        <Card.Img className="card-img-top" variant="top" src={info.img} />
        {isFavorite ? (
          <HeartFill
            className="iconfavv"
            role="button"
            onClick={() => handleRemoveFavorites(info.id)}
          />
        ) : (
          <Heart
            className={isFavorite ? "iconfav" : "iconfavv"}
            role="button"
            onClick={() => handleAddFavorites(info)}
          />
        )}
        <Card.Body className="d-flex">
          <div className="bodycard">
            <Card.Title>{info.titulo}</Card.Title>
            <Card.Text>Precio: $ {info.precio}</Card.Text>
            <div className="button-container">
              <Link to={`/services/${info.id}`}>
                <Button variant="primary">Detalle</Button>
              </Link>
              <Link to={"/mycart"}>
                <Button variant="primary" onClick={() => addService(info)}>
                  Comprar
                </Button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
}
