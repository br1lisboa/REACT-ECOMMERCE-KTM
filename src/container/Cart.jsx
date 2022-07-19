import React, { useContext } from 'react';
import { Shop } from '../context/ShopProvider';
import './styles/Cart.css';
import { Link } from 'react-router-dom';
import ordenGenerada from '../utils/generarOrden';


function Cart() {
  const {cart, deletItem} = useContext(Shop);

  const confirmarOrden = () => {
    const orden = ordenGenerada("Bruno", "Av. Siempre Viva 745", cart, 4500);
    console.log(orden);
    /* guardarOrden(cart, orden) */
  }
  
  

  return (
    <>
    {cart.length === 0 ?
      <div className='mensaje-carrito-vacio'>
        <h3>No hay productos en el carrito!</h3>
        <Link to='/'>Ir al inicio</Link>
      </div>
      :
      <div>
        {cart.map(producto => 
          <div className='cartitem-container' key={producto.id}>
            <h3>Producto: {producto.title}</h3>
            <h4>Cantidad: {producto.quantity}</h4>
            <h4>Precio: ${producto.price}</h4>
            <h4>SubTotal: ${producto.quantity * producto.price}</h4>
            <button onClick={() => deletItem(producto.id)}>DELETE</button>
          </div>)}
          <button onClick={confirmarOrden}>Confirmar Orden</button>
      </div>
    }
    </>
  );
}

export default Cart;