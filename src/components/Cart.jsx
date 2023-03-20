import { useCartContext } from "../context/CartContext";


export default function Cart ({ info }) {
const {addService, removeService, serviceAmount} = useCartContext();
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img className="me-3" src={info.img} alt="Pizza" width="100" />
          <div>
            <h5 className="mb-0 name">{info.title}</h5>
            <small className="text-muted">${info.precio}</small>
          </div>
        </div>
        <div className="d-flex gap-1">
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => removeService(info)}
          >
            -
          </button>
          
          <button className="btn btn-outline-dark btn-sm disabled">
            {serviceAmount(info.id)}
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => addService(info)}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}
