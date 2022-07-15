import React, { useContext } from 'react';
import { Shop } from '../context/ShopProvider';
import './styles/Cart.css';
import { Link } from 'react-router-dom';

function Cart() {
  const {cart, deletItem} = useContext(Shop);
  
  

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
      </div>
    }
    </>
  );
}

export default Cart;