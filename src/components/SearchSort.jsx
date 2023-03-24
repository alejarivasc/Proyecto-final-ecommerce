import { useState, useEffect } from "react";
import { Form, Spinner } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card2 from "./Card2";

const SearchSort = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ASC");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/publicaciones.json");
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.log("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const sortServices = () => {
    if (sort === "ASC") {
      return [...results].sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (sort === "DESC") {
      return [...results].sort((a, b) => b.titulo.localeCompare(a.titulo));
    } else if (sort === "low") {
      return [...results].sort((a, b) => a.precio - b.precio);
    } else if (sort === "high") {
      return [...results].sort((a, b) => b.precio - a.precio);
    }
    return results;
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  let results = [];
  if (!search) {
    results = services;
  } else {
    results = services.filter(
      (service) =>
        service.titulo.toLowerCase().includes(search.toLowerCase()) ||
        service.tipo.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>
      <Form>
        <Row>
          <Col className=" d-flex position-relative">
            <Form.Control
              className="mb-4 position-relative"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
              onChange={handleSearch}
              value={search}
            />
            <Search className="my-2 search-icon" style={{ fontSize: "1rem" }} />
          </Col>
          <Col>
            <Form.Select onChange={handleSort} value={sort} className="ms-3">
              <option value="ASC">
                Ordenar por orden alfabético ascendente
              </option>
              <option value="DESC">
                Ordenar por orden alfabético descendente
              </option>
              <option value="low">Ordenar por menor precio</option>
              <option value="high">Ordenar por mayor precio</option>
            </Form.Select>
          </Col>
        </Row>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
          </div>
        ) : (
          <Row className="gap-5 justify-content-center">
            {sortServices().map((service) => (
              <Col md="3">
                <Card2 filtered={service} key={service.id} />
              </Col>
            ))}
          </Row>
        )}
      </Form>
    </div>
  );
};

export default SearchSort;
