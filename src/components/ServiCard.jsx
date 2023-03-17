import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";


export default function ServiCard({ img, titulo, precio, id, info}) {
  return (
    <div class="col">
      <Card className="h-100" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex">
          <div>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>{precio}</Card.Text>
          </div>
          <div>
            <Button variant="primary">Comprar</Button>
            <Button variant="primary">Ver detalle</Button>

            {/* <Link to={`/services/${info.id}`}>
              Ver detalles
            </Link>  */}
                     </div>
        </Card.Body>
      </Card>
    </div>
  );
}
