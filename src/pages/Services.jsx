import { useEffect, useState } from "react";
import { Dropdown, Spinner } from "react-bootstrap";

import ServiCard from "../components/ServiCard";

export default function Services() {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
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
    <div className="services-container">
      <h1 className="title"> Lo que necesitas a un click de distancia</h1>
      <div className="float-start" style={{ width: "20%" }}>
        <Dropdown onSelect={handleCategorySelect} className="my-dropdown">
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedCategory ? selectedCategory : "Categorías"}
          </Dropdown.Toggle>
          <Dropdown.Menu className="my-dropdown-menu">
            <Dropdown.Item eventKey={null} className="my-dropdown-item">
              Todas las categorías
            </Dropdown.Item>
            {categories.map((category) => (
              <Dropdown.Item
                eventKey={category}
                key={category}
                className="my-dropdown-item"
              >
                {category}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        )}
        {filteredServices.map((service) => (
          <ServiCard className="img" info={service} key={service.id} />
        ))}
      </div>
    </div>
  );
}
