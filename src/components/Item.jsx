import React from 'react';

function Item ( {product} ) {
  console.log( {product} );

  return (
    <div className='container-item'>
      <h1>Lista de Productos</h1>
      <div> 
         {
          product.map(item => (
            <li key={item.id}>{item.title} {item.price} </li>
          ))
        } 
      </div>
    </div >
  ); 
}

export default Item;