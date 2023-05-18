import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, nombre, precio, img, idCat }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <p> <strong>Precio: </strong>{precio} </p>
            <p> <strong>ID:</strong> {id} </p>
            <p> <strong>Categoria: </strong>{idCat} </p>
            {
 
            }
            <Link to={`/item/${id}`}> <button className='boton'> Ver Mas </button> </Link>
        </div>
    )
}

export default Item