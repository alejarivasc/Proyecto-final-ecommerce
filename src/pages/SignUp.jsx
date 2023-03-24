// componente para crear usuario
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

import { Button, Form, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

export default function SignUp() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [location, setLocation] = useState("");

  const handleShow = () => {
    setShow(!show);
  };

  const { handleAddUser } = useUserContext();

  const handleCreateUser = () => {
    // Verificar que los campos no estén vacíos
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      birthdate.trim() === "" ||
      location.trim() === ""
    ) {
      toast.error("Por favor llene todos los campos");
      return;
    }

    // Verificar que el correo contenga "@"
    if (!email.includes("@")) {
      toast.error("Por favor ingrese un correo electrónico válido");
      return;
    }

    // Verificar que la contraseña tenga más de 5 caracteres
    if (password.length < 6) {
      toast.error("Por favor ingrese una contraseña de al menos 6 caracteres");
      return;
    }

    const user = { name, email, password, birthdate, location };
    handleAddUser(user);
    console.log({ name, email, password, birthdate, location });
    handleShow();
    toast.success("Usuario creado exitosamente!");
  };

  return (
    <>
      <p
        className={show ? "active-class" : "inactive-class"}
        onClick={handleShow}
      >
        Crear usuario
      </p>

      <Modal show={show} onHide={handleShow} className="signin-modal">
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
                className="signin-input"
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
                className="signin-input"
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
                className="signin-input"
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
                className="signin-input"
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
                className="signin-input"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btnout" onClick={handleShow}>
            Cancelar
          </Button>
          <Link to={"/"}>
            <Button
              className="btnsign"
              variant="primary"
              onClick={handleCreateUser}
            >
              Crear usuario
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}
