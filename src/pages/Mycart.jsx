import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { useCartContext } from "../context/CartContext";

export default function MyCart() {
  const { cart, formattedTotal } = useCartContext();

  return (
    <div>
      {cart.length === 0 ? (
        <div className="list-group-item text-center">
          <b>El carro está vacío</b>
          <Link to={"/services"}>
            <Button variant="primary">Seguir comprando</Button>
          </Link>
        </div>
      ) : (
        <>
          <h6 className="text-start my-5">Resumen de tu compra del pedido</h6>
          <Table responsive>
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((service) => (
                <Cart key={service.id} info={service} />
              ))}
            </tbody>
          </Table>
          <div className="total">
            <h3>Total: ${formattedTotal}</h3>
            <Button>Finalizar</Button>
            <Link to={"/services"}>
              <Button variant="primary">Seguir comprando</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
