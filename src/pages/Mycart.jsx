import Cart from "../components/Cart";
import { useCartContext } from "../context/CartContext";



export default function MyCart () {
  const {cart , total} = useCartContext();

  return (
    <div>
    <h6 className="text-start my-5">Resumen de tu compra del pedido</h6>
    <ul className="list-group">
      {cart.map((service) => (
        <Cart key={service.id} info={service} />
      ))}

      {cart.length === 0 && (
        <li className="list-group-item text-center">
          <b>El carro está vacío</b>
        </li>
      )}
      <li className="list-group-item list-group-item-action active text-end">
        <b>Total: ${total()}</b>
      </li>
    </ul>
  </div>
  
  
)}
