import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2> El carrito esta vacio</h2>
        <Link className="miBtn" to="/">
          {" "}
          Ver Productos{" "}
        </Link>
      </>
    );
  }
  return (
    <div>
      {carrito.map((inventario) => (
        <CartItem key={inventario.id} {...inventario} />
      ))}
      <h4>Total: ${total} </h4>
      <h4>Cantidad total: {cantidadTotal} </h4>
      <button className="miBtn" onClick={() => vaciarCarrito()}>
        {" "}
        Vaciar carrito{" "}
      </button>
      <Link className="miBtn" to="/checkout">
        {" "}
        Finalizar Compra{" "}
      </Link>
    </div>
  );
};

export default Cart;
