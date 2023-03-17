import { useState } from "react";

import { Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import MiApi from "./MiApi";
import ServiCard from "./ServiCard";

const SearchSort = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ASC");
  const [loading, setLoading] = useState(false);

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

  const searcher = (e) => {
    setSearch(e.target.value);
  };
  const sortby = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };
  let results = [];
  if (!search) {
    results = services;
  } else {
    results = services.filter(
      (service) =>
        service.titulo.toLowerCase().includes(search.toLocaleLowerCase()) ||
        service.tipo.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  return (
    <div>
      <MiApi setLoading={setLoading} setServices={setServices} />
      <Form>
        <Row>
          <Col className=" d-flex">
            <Search className="my-2" />
            <Form.Control
              className="mb-4"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
              onChange={searcher}
              value={search}
            />
          </Col>
          <Col>
            <Form.Select onChange={sortby} value={sort} className="ms-3">
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
        <Row className="gap-5 justify-content-center">
          {sortServices().map(({ img, titulo, precio, id }) => {
            return (
              <Col md="3" key={id}>
                <ServiCard img={img} titulo={titulo} precio={precio} />
              </Col>
            );
          })}
        </Row>
      </Form>
    </div>
  );
};

export default SearchSort;
