import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Heart } from "react-bootstrap-icons";
import { HeartFill} from "react-bootstrap-icons";

import { useFavoritesContext } from "../context/FavoritesContext";



export default function ServiCard({info}) {
  const { favorites, addFavorites, removeFavorites } = useFavoritesContext();
// console.log(info.id+ "es favorito?" + favorites)

// const handleClick =() =>{
//   addFavorite (id)
// }
const isFavorite = favorites.some((item) => item.id === info.id);

  return (
    <div className="col">
      <Card className="h-100" style={{ width: "18rem" }}>
        <Card.Img className="productimg"
          variant="top"
           src={info.img}
        />
              {isFavorite  ? (
              <HeartFill className="iconfav" role="button" onClick={() => 
                removeFavorites(info.id)} /> )
        : (<Heart className="iconfav"  role="button" onClick={() =>  addFavorites(info)} />
       ) }
        <Card.Body className="d-flex">
          <div>
            <Card.Title>{info.titulo}</Card.Title>
            <Card.Text>{info.precio}</Card.Text>
          </div>
          <div>
            <Button variant="primary">Comprar</Button>
            <Button variant="primary">Favorito</Button>
                     </div>
        </Card.Body>
      </Card>
    </div>
  );
}
