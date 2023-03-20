import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


export default function Card2({filtered}) {
  return (
    <div className="col">
      <Card className="h-100" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
           src={filtered.img}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex">
          <div>
            <Card.Title>{filtered.titulo}</Card.Title>
            <Card.Text>{filtered.precio}</Card.Text>
          </div>
          <div>
            <Button variant="primary">Comprar</Button>
            <Link to={`/services/${filtered.id}`}><Button variant="primary" >Ver detalle</Button></Link>

 
                     </div>
        </Card.Body>
      </Card>
    </div>
  );
}
