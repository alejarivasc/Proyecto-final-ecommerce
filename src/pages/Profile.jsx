   import { Link } from "react-router-dom";
   import { Button, Card } from "react-bootstrap";
   import { PersonSquare } from "react-bootstrap-icons";

   import {  useUserContext } from "../context/UserContext";

export default function Profile() {
     const { users  } = useUserContext();

 return (
      <div>
              {users.map((user) => (

        <Card style={{ width: "30rem", marginLeft: "20rem" }} key={user.email}>
          <Card.Header as="h5">
            <PersonSquare className="me-3" />
            Perfil de usuario
          </Card.Header>
          <Card.Body>
            <Card.Text>
            <p>Nombre: {user.name}</p>
              <p>Email: {user.email} </p>
              <p>Fecha de nacimiento: {user.birthdate} </p>
              <p>Dirección: {user.location}</p>
            </Card.Text>
            <Link to="/editprofile">
              <Button> Modifica tus datos </Button>
            </Link>
          </Card.Body>
        </Card> 
              ))}
      </div>
 )}
