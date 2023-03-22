// componente para crear usuario
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import { useNavigate } from "react-router";
import { useUserContext } from "../context/UserContext";

import { Button, Form, Modal } from "react-bootstrap";

export default function SignUp() {
  // const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [location, setLocation] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { handleAddUser } = useUserContext();

  const handleCreateUser = () => {
    const user = { name, email, password, birthdate, location };
    handleAddUser(user);
    console.log({ name, email, password, birthdate, location });
    handleClose();
  };

  // useEffect(() => {
  //   if (show) {
  //     navigate("/");
  //   }
  // }, [show, navigate]);
  return (
    <>
      <NavLink variant="primary" onClick={handleShow}>
        Crear usuario
      </NavLink>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Bienvenido a nuestro team!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBirthdate">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control
                type="date"
                placeholder="Ingrese la fecha de nacimiento"
                name="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLocation">
              <Form.Label>Ubicación</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la ubicación"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese el correo electrónico"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese la contraseña"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {/* <Button variant="primary" type="submit">
              Crear usuario
            </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Link to={"/"}>
            <Button variant="primary" onClick={handleCreateUser}>
              Crear usuario
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
