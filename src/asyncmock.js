const productos = [
    { nombre: "Shampoo Aminoacidos", precio: 3000, id: "1", img: "../img/shampoo_amino.jpg", idCat: "capilar", descri: "Shampoo Aminoacidos Sedal" },
    { nombre: "Shampoo Nutritivo", precio: 2750, id: "2", img: "../img/shampoo_nutritivo.jpg", idCat: "capilar", descri: "Shampoo Nutritivo Dove"},
    { nombre: "Shampoo Rizos", precio: 3250, id: "3", img: "../img/shampoo_rizos.jpg", idCat: "capilar", descri: "Shampoo Rizos Sedal"},
    { nombre: "Shampoo Sin Sal", precio: 3890, id: "4", img: "../img/shampoo_sinsal.jpg", idCat: "capilar", descri: "Shampoo Sin Sal Algabo" },
    { nombre: "Crema de Enjuague Fleurs", precio: 5200, id: "5", img: "../img/enjuague_fleurs.jpg", idCat: "capilar", descri: "Crema de Enjuague Fleurs" },
    { nombre: "Enjuague Queratina", precio: 5700, id: "6", img: "../img/enjuague_queratina.jpg", idCat: "capilar", descri: "Crema de Enjuague Queratina" },
    { nombre: "Crema facial Probioticos", precio: 4760, id: "7", img: "../img/crema_fa_probio.jpg", idCat: "facial", descri: "Crema Facial Probioticos Bagovit"},
    { nombre: "Crema facial Lidherma", precio: 6800, id: "8", img: "../img/crema_fa_lidherma.jpg", idCat: "facial", descri: "Crema Facial Lidherma" },
    { nombre: "Crema facial Dermaglos", precio: 8950, id: "9", img: "../img/crema_fa_dermaglos.jpg", idCat: "facial", descri: "Crema Facial Dermaglos" },
    { nombre: "Crema corporal Bagovit", precio: 7300, id: "10", img: "../img/crema_cor_bagovit.jpg", idCat: "corporal", descri: "Crema Corporal Bagovit" },
    { nombre: "Crema corporal Cicatricure", precio: 8100, id: "11", img: "../img/crema_cop_cicatricure.jpg", idCat: "corporal", descri: "Crema Corporal Cicatricure" },
    { nombre: "Crema Renovadora", precio: 7540, id: "12", img: "../img/crema_cor_renovadora.jpg", idCat: "corporal", descri: "Crema Renovadora St. Ives" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}
