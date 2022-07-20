import React, { useContext, useState } from 'react';
import './styles/ItemDetail.css'
import ItemCount from './ItemCount';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../context/ShopProvider';

function ItemDetail( {product} ) {
  const {addItem} = useContext(Shop);

  const navigate = useNavigate();

  product.stock = 10;
  const [qtyAdded, setQtyAdded] = useState(0);
  
  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  };
  
  const handleTerminate = () => {
    addItem(product, qtyAdded)
    navigate('/cart')
  }
  
  return (
    <div className='container-detail'>
      <div className='d-img'>
        <img src={product.image} alt="" className='detail-img'/>
      </div>
      <div className='d-det'>
        <h2>{product.title}</h2>
        <h3>Precio: $ {product.price} USD</h3>
        <p>{product.description}</p>
        {!qtyAdded ?
          <ItemCount onConfirm={handleConfirm} maxQuantity={product.stock} /> 
          :
          <button onClick={handleTerminate} className="terminar-compra">Terminar Compra</button>
        }
      </div>
    </div>
  )
}

export default ItemDetail