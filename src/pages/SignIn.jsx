//componente para inicio de sesión
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Button, Form, Modal } from "react-bootstrap";
import { useUserContext } from "../context/UserContext";

export default function SignIn() {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { handleLogin, setUserIn } = useUserContext();

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setErrorMessage("");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    const success = handleLogin(email, password);
    console.log("success:", success);

    if (success) {
      setUserIn(true); // actualizamos el estado userIn en UserProvider
      handleClose();
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <>
      <NavLink variant="primary" onClick={handleShow}>
        Iniciar sesión
      </NavLink>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Bienvenido de nuevo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="user@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <p className="text-danger">{errorMessage}</p>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={handleLoginSubmit}
              >
                Iniciar sesión
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
