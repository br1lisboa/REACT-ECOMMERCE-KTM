//Funcion auxiliar para generar la orden.
const generarOrden = (nombre, direccion, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            direccion: direccion
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }
} 

export default generarOrden;