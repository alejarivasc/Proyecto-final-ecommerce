import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function NewService() {
  return (
    <div>
      <h3 className="text-center mb-5">Crea tu publicación para vender</h3>
      <Form style={{ width: "40rem", marginLeft: "15rem" }}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" placeholder="Titulo del servicio" />
          <Form.Text className="text-muted">¿Que quieres vender? </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="text" placeholder="Hazlo atractivo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Categorías</Form.Label>
          <Form.Control type="text" placeholder="Categoría" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="Precio" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </div>
  );
}
