import React from 'react';

function ItemList ( {product} ) {
  console.log( {product} );

  return (
    <div className='container-itemlist'>
      {/* <h1>Lista de Productos</h1>
      <ul>
        {
          product.map(item => (
            <li key={item.id}>{item.title}</li>
          ))
        }
      </ul> */}
    </div >
  ); 
}

export default ItemList;