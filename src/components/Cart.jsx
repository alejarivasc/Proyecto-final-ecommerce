import { useCartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

export default function Cart({ info }) {
  const { addService, removeService, serviceAmount } = useCartContext();

  return (
    <tr key={info.id}>
      <td>{info.titulo}</td>
      <td>${info.precio}</td>
      <td>{serviceAmount(info.id)}</td>
      <td>
        <Button variant="outline-danger" onClick={() => removeService(info)}>
          -
        </Button>
        <Button variant="outline-success" onClick={() => addService(info)}>
          +
        </Button>
      </td>
    </tr>
  );
}
