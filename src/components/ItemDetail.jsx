import React from 'react';
import './styles/ItemDetail.css'
import ItemCount from './ItemCount';

function ItemDetail( {product} ) {
  console.log(product);

  return (
    <div className='container-detail'>
      <div className='d-img'>
        <img src={product.image} alt="" className='detail-img'/>
      </div>
      <div className='d-det'>
        <h2>{product.title}</h2>
        <h3>$ {product.price}</h3>
        <p>{product.description}</p>
        <ItemCount />
      </div>
    </div>
  )
}

export default ItemDetail