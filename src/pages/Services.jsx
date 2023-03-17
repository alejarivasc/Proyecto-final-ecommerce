import { useState } from "react";
import MiApi from "../components/MiApi";
import ServiCard from "../components/ServiCard";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false); // un estado para mostrar el loading

  return (
    <div>
      <h1>Servicios</h1>
      <MiApi setLoading={setLoading} setServices={setServices} />
      <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {loading && <h3 className="msg">Cargando... </h3>}
          {services.map(({ img, titulo, precio, id }) => {
            return (
              <ServiCard
                className="img"
                img={img}
                titulo={titulo}
                precio={precio}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
