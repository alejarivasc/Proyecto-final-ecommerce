 import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
 import { useParams } from "react-router-dom";



 export default function Service() {
   const [serviceData, setServiceData] = useState("");
   const [loading, setLoading] = useState(true);

   const params = useParams();


   const getService = async () => {
     setLoading(true);

     const res = await fetch("/publicaciones.json");
     const data = await res.json();
     const serviceData = data.find ((filtered) => filtered.id === params.id);
console.log (serviceData)
     setServiceData(serviceData);
   };
   useEffect(() => {
     getService();
   }, [params]);

   return (

    <div>

<Card className="flex-row">
      <Card.Img src={serviceData.img}
             className="img-fluid rounded-start h-100 w-50"
             alt={serviceData.titulo} 
              />
      <Card.Body className="w-50">
        <Card.Title>{serviceData.titulo}</Card.Title>
        <Card.Text>{serviceData.descripcion_larga}</Card.Text>
        <Card.Text>Ofrecido por: {serviceData.nombre_persona}</Card.Text>
        <Card.Text>Ubicado en: {serviceData.ubicacion}</Card.Text>
        <Card.Text>Precio: {serviceData.precio}</Card.Text>
        <div className="d-flex justify-content-end mt-auto">
          <Button variant="primary" className="mr-2">Agregar al carrito</Button>
          <Button variant="secondary">Agregar a Favoritos</Button>
        </div>
      </Card.Body>
    </Card>





    {/* <Card>
    <Row>
      <Col md={6}>
        <Card.Img variant="top" src={serviceData.img}
             className="img-fluid rounded-start h-100"
             alt={serviceData.titulo} />
      </Col>
      <Col md={6}>
        <Card.Img variant="top" src={serviceData.img}
             className="img-fluid rounded-start h-100"
             alt={serviceData.titulo} />
      </Col>
    </Row>
    <Card.Body>
      <Card.Title>{serviceData.titulo}</Card.Title>
      <Card.Text>
      {serviceData.descripcion_larga}  
          </Card.Text>
          <Card.Text>
          <p>Precio: ${serviceData.price}</p>
          </Card.Text>
    </Card.Body>
    <Row>
      <Col md={6}>
        <Card.Img variant="top" src={serviceData.img}
             className="img-fluid rounded-start h-100"
             alt={serviceData.titulo} />
      </Col>
      <Col md={6}>
        <Card.Img variant="top" src={serviceData.img}
             className="img-fluid rounded-start h-100"
             alt={serviceData.titulo} />
      </Col>
    </Row>
  </Card> */}
    </div>




    //  <div className="card mb-3 mt-5">
    //    <div className="row g-0">
    //      <div className="col-md-4">
    //        <img
             
    //        />
    //      </div>
    //      <div className="col-md-8">
    //        <div className="card-body">
    //          <h5 className="fs-1">{serviceData.titulo}</h5>
    //          <hr />
    //          <p className="card-text">{serviceData.descripcion_larga}</p>
    //          <div className="d-flex justify-content-between">
    //            <h5>
    //              <p>Precio: ${serviceData.price}</p>
    //            </h5>
    //          </div>
    //        </div>
    //      </div>
    //    </div>
    //  </div>
   );
 }
