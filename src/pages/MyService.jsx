import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyService() {
  return (
    <div>
      <h2>Mis Publicaciones</h2>
      <Link to="/NewService">
        <Button> Crear publicación </Button>
      </Link>
    </div>
  );
}
