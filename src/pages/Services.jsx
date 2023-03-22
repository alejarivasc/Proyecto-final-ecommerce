import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

// import MiApi from "../components/MiApi";
import ServiCard from "../components/ServiCard";

export default function Services() {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false); // un estado para mostrar el loading
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/publicaciones.json");
      const data = await res.json();
      setServices(data);
      const categories = [...new Set(data.map((service) => service.tipo))];
      setCategories(categories);
    } catch (error) {
      console.log("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredServices = selectedCategory
    ? services.filter((service) => service.tipo === selectedCategory)
    : services;

  return (
    <div>
      <h1>Servicios</h1>
      <div className="float-start" style={{ width: "20%" }}>
        <h3>Categorías:</h3>
        <Dropdown onSelect={handleCategorySelect}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedCategory ? selectedCategory : "Todas las categorías"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey={null}>Todas las categorías</Dropdown.Item>
            {categories.map((category) => (
              <Dropdown.Item eventKey={category} key={category}>
                {category}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {loading && <h3 className="msg">Cargando... </h3>}
        {filteredServices.map((service) => (
          <ServiCard className="img" info={service} key={service.id} />
        ))}
      </div>
    </div>
  );
}
