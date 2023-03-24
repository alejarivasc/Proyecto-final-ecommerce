import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useUserContext } from "../context/UserContext";


export default function EditProfile() {
  const { users, handleAddUser, userIn, handleLogout } = useUserContext();
  const currentUser = users.find((user) => user.email === userIn);

  const [name, setName] = useState(currentUser?.name || "");
  const [password, setPassword] = useState(currentUser?.password || "");
  const [birthdate, setBirthdate] = useState(currentUser?.birthdate || "");
  const [location, setLocation] = useState(currentUser?.location || "");

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...currentUser,
      name,
      birthdate,
      location,
    };
    handleAddUser(updatedUser);
    toast.success("Inicia sesión para continuar");
  };

  const handleLogoutClick = () => {
    handleLogout();
    toast.success("Has cerrado sesión");

  };

  return (
    <>
      <h1>Editar perfil</h1>
      <Form onSubmit={handleSaveChanges}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBirthdate">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingresa tu fecha de nacimiento"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formLocation">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu dirección"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
      </Form>
      <Link to={"/signin"}>
        <Button variant="primary" type="submit" onSubmit={handleAddUser}>
          Guardar datos
        </Button>
      </Link>
      <Button variant="danger" onClick={handleLogoutClick}>
        Cerrar sesión
      </Button>
      <ToastContainer/>
    </>
  );
}
