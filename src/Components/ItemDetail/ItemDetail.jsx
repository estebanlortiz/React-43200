import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img, idCat}) => {
  return (
    <div className='contenedorItem'>
        <h2>{nombre} </h2>
        <h3> <strong>Precio: </strong>{precio} </h3>
        <h3> <strong>ID:</strong> {id} </h3>
        <h3> <strong>Categoria:</strong> {idCat} </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum odit omnis modi consectetur beatae placeat a optio inventore cumque quod aspernatur sequi accusamus hic labore, vitae debitis blanditiis ad quisquam?</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail