import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { PersonSquare } from "react-bootstrap-icons";

export default function Profile() {
  return (
    <div>
      <Card style={{ width: "30rem", marginLeft: "20rem" }}>
        <Card.Header as="h5">
          <PersonSquare className="me-3" />
          Perfil de usuario
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Nombre: John Doe</p>
            <p>Email: user@mail.com </p>
            <p>Fecha de nacimiento: 01/01/2000 </p>
            <p>Dirección: Santiago, Chile</p>
          </Card.Text>
          <Link to="/editprofile">
            <Button> Modifica tus datos </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
