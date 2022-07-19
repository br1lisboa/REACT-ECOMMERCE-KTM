import React, { useContext } from 'react';
import { Shop } from '../context/ShopProvider';
import './styles/Cart.css';
import { Link } from 'react-router-dom';
import ordenGenerada from '../utils/generarOrden';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';


function Cart() {
  const {cart, deletItem} = useContext(Shop);

  const confirmarOrden = async () => {
    const orden = ordenGenerada("Bruno", "Av. Siempre Viva 745", cart, 4500);
    //console.log(orden);
    /* guardarOrden(cart, orden) */
    //Aca vamos a añadir un nuevo doc autogenerando id.
    const docRef = await addDoc(collection(db, 'orders'), orden)
    console.log('Document written whith ID: ', docRef.id);
  }
  

  return (
    <>
    {cart.length === 0 ?
      <div className='mensaje-carrito-vacio'>
        <h3>No hay productos en el carrito!</h3>
        <Link to='/'>Ir al inicio</Link>
      </div>
      :
      <div className='container-ci'>
        {cart.map(producto => 
          <div className='cartitem-container' key={producto.id}>
            <h3>Producto: {producto.title}</h3>
            <h4>Cantidad: {producto.quantity}</h4>
            <h4>Precio: ${producto.price}</h4>
            <h4>SubTotal: ${producto.quantity * producto.price}</h4>
            <button className='buton-delete' onClick={() => deletItem(producto.id)}>DELETE</button>
          </div>)}
          <button className='buton-confirm' onClick={confirmarOrden}>Confirmar Orden</button>
      </div>
    }
    </>
  );
}

export default Cart;