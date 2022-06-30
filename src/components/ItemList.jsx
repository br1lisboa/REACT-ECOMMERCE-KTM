import React from 'react';

function ItemList ( {product} ) {
  console.log( {product} );

  return (
    <div> {product.title}</div >
  ); 
}

export default ItemList;