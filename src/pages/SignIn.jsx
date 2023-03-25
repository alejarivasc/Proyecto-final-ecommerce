//componente para inicio de sesión
import { useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { useUserContext } from "../context/UserContext";
import { ToastContainer, toast } from "react-toastify";

export default function SignIn() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { handleLogin, setUserIn } = useUserContext();

  const handleShow = () => {
    setShow(!show);
    setErrorMessage("");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const success = handleLogin(email, password);

    if (success) {
      setUserIn(true); // actualizamos el estado userIn en UserProvider
      handleShow();
      toast.success("Bienvenido!");
    } else {
      toast.error("Correo o contraseña inválida");
    }
  };

  return (
    <>
      <p
        className={show ? "active-class" : "inactive-class"}
        onClick={handleShow}
      >
        Iniciar sesión
      </p>

      <Modal show={show} onHide={handleShow} className="signin-modal">
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
                className="signin-input"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signin-input"
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                className="btnout"
                variant="secondary"
                onClick={handleShow}
              >
                Cancelar
              </Button>
              <Button
                className="btnsign"
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
      <ToastContainer />
    </>
  );
}
