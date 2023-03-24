import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Instagram } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <hr />
        <Row>
          <Col md={4} className="me-5">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">¿Quiénes Somos?</Link>
              </li>
              <li>
                <Link to="/services">Servicios</Link>
              </li>
              <li>
                <Link to="/help">Ayuda</Link>
              </li>
            </ul>
          </Col>

          <Col md={4} className="ms-0 menu">
            <h3 className="find">Encuentrános en</h3>
            <ul>
              <li>
                {" "}
                <Facebook className="me-2" />
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                {" "}
                <Twitter className="me-2" />
                <a href="https://www.twitter.com/">Twitter</a>
              </li>
              <li>
                {" "}
                <Instagram className="me-2" />
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
