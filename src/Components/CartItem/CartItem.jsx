import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.css"

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
      <h4> {item.nombre} </h4>
      <h5> Cantidad: {cantidad} </h5>
      <h5> Precio: $ {item.precio} </h5>
      
      <button className="miBtn" onClick={() => eliminarProducto(item.id)}>
        {" "}
        Eliminar{" "}
      </button>
      <hr />
    </div>
  );
};

export default CartItem;
