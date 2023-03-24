import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Service({ info }) {
  const { addService } = useCartContext();
  const [serviceData, setServiceData] = useState("");
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const getService = async () => {
    setLoading(true);

    const res = await fetch("/publicaciones.json");
    const data = await res.json();
    const serviceData = data.find((filtered) => filtered.id === params.id);
    console.log(serviceData);
    setServiceData(serviceData);
  };
  useEffect(() => {
    getService();
  }, [params]);

  return (
    <div>
      <Card className="flex-row">
        <Card.Img
          src={serviceData.img}
          className="img-fluid rounded-start h-100 w-50"
          alt={serviceData.titulo}
        />
        <Card.Body className="w-50">
          <Card.Title>{serviceData.titulo}</Card.Title>
          <Card.Text>{serviceData.descripcion_larga}</Card.Text>
          <Card.Text>Ofrecido por: {serviceData.nombre_persona}</Card.Text>
          <Card.Text>Ubicado en: {serviceData.ubicacion}</Card.Text>
          <Card.Text>Precio: {serviceData.precio}</Card.Text>
          <div className="d-flex btnserv mt-auto">
            <Link to={"/mycart"}>
              <Button variant="info" onClick={() => addService(serviceData)}>
                Agregar al carrito
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
