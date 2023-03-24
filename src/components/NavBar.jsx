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
    <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
      <Container className="mt-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-class" : "inactive-class"
          }
        >
          <img
            src={logo}
            width="100"
            height="80"
            className="d-inline-block align-top"
            alt="Logo ServiFinder"
          />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-class" : "inactive-class"
              }
              to="/about"
            >
              ¿Quiénes somos?
            </NavLink>

            {userIn ? (
              <NavLink
                to="/"
                onClick={handleLogout}
                className={({ isActive }) =>
                  isActive ? "active-class" : "inactive-class"
                }
              >
                Cerrar sesión
              </NavLink>
            ) : (
              <>
                <div>
                  <SignIn />
                </div>
                <div>
                  <SignUp />
                </div>
              </>
            )}

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "active-class" : "inactive-class"
              }
            >
              Servicios
            </NavLink>
          </Nav>
          <NavLink>
            <Nav className=" gap-2">
              {userIn ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-class" : "inactive-class"
                  }
                >
                  <NavDropdown title="Mi Cuenta" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                          isActive ? "active-class menu" : "inactive-class menu"
                        }
                      >
                        Perfil
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                          isActive ? "active-class menu" : "inactive-class menu"
                        }
                      >
                        Mis favoritos
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/myservice"
                        className={({ isActive }) =>
                          isActive ? "active-class menu" : "inactive-class menu"
                        }
                      >
                        Mis Publicaciones
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavLink>
              ) : null}

              {userIn ? (
                <NavLink
                  to="/mycart"
                  className={({ isActive }) =>
                    isActive ? "active-class" : "inactive-class"
                  }
                >
                  <Cart2 className="carticon" />
                </NavLink>
              ) : null}
            </Nav>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
