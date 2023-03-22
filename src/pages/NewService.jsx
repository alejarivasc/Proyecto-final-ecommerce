import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MyService from "./MyService";

export default function NewService() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [publications, setPublications] = useState([]);
  const [image, setImage] = useState("");

  const handleDelete = (id) => {
    setPublications(publications.filter((service) => service.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, category, price, image); // Imprimir los valores de las variables

    const newPublication = {
      id: Date.now(),
      title,
      description,
      category,
      price,
      image,
    };
    // Aquí agregas la nueva publicación al array de servicios
    setPublications([...publications, newPublication]);

    setTitle("");
    setDescription("");
    setCategory("");
    setPrice("");
    setImage("");
  };

  return (
    <div>
      <Row>
        <Col>
          <h3 className="text-center mb-5"> Crea tu publicación para vender</h3>
          <Form
            style={{ width: "30rem", marginLeft: "1rem" }}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titulo del servicio"
              />
              <Form.Text className="text-muted">
                ¿Que quieres vender?{" "}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Hazlo atractivo"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Categorías</Form.Label>
              <Form.Control
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Categoría"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Precio"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Crear
            </Button>
          </Form>
        </Col>
        <Col>
          <MyService publications={publications} handleDelete={handleDelete} />
        </Col>
      </Row>
    </div>
  );
}
