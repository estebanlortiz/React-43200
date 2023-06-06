import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//Importamos el CarritoContext: 
import { CarritoContext } from '../../context/CarritoContext';
//Importo el Hook useContext: 
import { useContext } from 'react';



const ItemDetail = ({ id, nombre, precio, img, idCat, descri, stock}) => {

 //1) Creamos un estado con la cantidad de productos agregados: 
 const [agregarCantidad, setAgregarCantidad] = useState(0);

 //useContext: 
 const {agregarProducto} = useContext(CarritoContext);

 //2) Creamos una función manejadora de la cantidad: 

 const manejadorCantidad = (cantidad) => {
   setAgregarCantidad(cantidad);
   //console.log("Productos agregados:" + cantidad);

   //Ahora acá creo un objeto con el item y la cantidad: 
   const item = {id, nombre, precio}; 
   agregarProducto(item, cantidad);
 }

  return (
    <div className="contenedorItem">
      <Link to={"/"}>
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
      <p>{descri}</p>
      <img src={img} alt={nombre} />
      {
        //Acá empleamos la lógica del montaje y desmontaje de componentes: 
      }
      {
        agregarCantidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  );
};

export default ItemDetail;
