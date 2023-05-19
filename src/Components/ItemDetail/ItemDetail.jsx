import "./ItemDetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, nombre, precio, img, idCat, descri }) => {
  return (
    <div className="contenedorItem">
      <Link to={'/'}>
        {" "}
        <button className="boton"> Volver </button>{" "}
      </Link>
      <h2>{nombre} </h2>
      <h3>
        {" "}
        <strong>Precio: </strong>
        {precio}{" "}
      </h3>
      <h3>
        {" "}
        <strong>ID:</strong> {id}{" "}
      </h3>
      <h3>
        {" "}
        <strong>Categoria:</strong> {idCat}{" "}
      </h3>
      <p>
      {descri}
      </p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
