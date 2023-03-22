import { Link, NavLink } from "react-router-dom";
import { Cart2 } from "react-bootstrap-icons";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import logo from "../assets/img/servifinder1.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useUserContext } from "../context/UserContext";

export default function NavBar() {
  const { userIn, handleLogout } = useUserContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="mt-0">
        <NavLink to="/">
          <img
            src={logo}
            width="100"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-2">
            <NavLink to="/about">¿Quiénes somos?</NavLink>

            {userIn ? (
              <NavLink to="/" onClick={handleLogout}>
                Cerrar sesión
              </NavLink>
            ) : (
              <>
                <NavLink to="/singin">
                  <SignIn />
                </NavLink>
                <NavLink to="/singup">
                  <SignUp />
                </NavLink>
              </>
            )}

            <NavLink to="/services">Servicios</NavLink>
          </Nav>
          <Nav className=" gap-2">
            {userIn ? (
              <NavDropdown
                title="Mi Cuenta"
                id="collasible-nav-dropdown"
                className="d-flex flex-column"
              >
                <NavLink to="/profile">Perfil</NavLink>
                <NavLink to="/favorites">Mis favoritos</NavLink>
                <NavLink to="/myservice">Mis Publicaciones</NavLink>
              </NavDropdown>
            ) : null}

            {userIn ? (
              <NavLink to="/mycart">
                Mi carro
                <Cart2 />
              </NavLink>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
