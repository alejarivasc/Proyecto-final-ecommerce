import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyService({ publications, handleDelete }) {
  return (
    <div className="ms-5">
      <h2>Mis Publicaciones</h2>

      {publications && publications.length > 0 ? (
        <div className="col">
          <h3>Publicaciones creadas</h3>
          {publications.map((publication) => (
            <Card className="h-100 mb-5" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={publication.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex">
                <div>
                  <Card.Title>{publication.title}</Card.Title>
                  <Card.Text>{publication.description}</Card.Text>
                  <Card.Text>{publication.price}</Card.Text>
                </div>
                <div>
                  <Button
                    variant="primary"
                    onClick={() => handleDelete(publication.id)}
                  >
                    Eliminar
                  </Button>
                  {/* <Link to={"/newservice"}><Button variant="primary" >Crear nueva</Button></Link> */}
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <h4>No hay publicaciones creadas</h4>
          <Link to={"/newservice"}>
            <Button variant="primary">Crear nueva publicación</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
