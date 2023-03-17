import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Service() {
  const [serviceData, setServiceData] = useState("");
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const getService = async () => {
    setLoading(true);

    const res = await fetch("/publicaciones.json");
    const data = await res.json();
    const serviceData = data.find((info) => info.id === params.id);

    setServiceData(serviceData);
  };
  useEffect(() => {
    getService();
  }, [params]);

  return (
    <div className="card mb-3 mt-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={serviceData.img}
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="fs-1">{serviceData.titulo}</h5>
            <hr />
            <p className="card-text">{serviceData.descripcion_larga}</p>
            <div className="d-flex justify-content-between">
              <h5>
                <b>Precio: ${serviceData.price}</b>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
