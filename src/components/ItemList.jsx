import React, { useEffect, useState } from 'react';
import Item from '../components/Item';
import './styles/ItemList.css'

function ItemList () {
  const [productList, setProductList] = useState([]);
  /* console.log(productList); */

  useEffect( () => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        setProductList(data)
      } catch (error) {
        console.log(error)
      }
    }

    getProducts();
  }, []);

  return (
    <div className="product-list-container">
      {
        productList.length ? ( 
          <>
            {
              productList.map((productList) => {
                return (
                  <div key={productList.id} className="generic">
                    <Item
                      name={productList.title}
                      imagen={productList.image}
                      precio={productList.price}
                      categoria={productList.category}
                      id={productList.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando productos...</p>
        ) 
      }
    </div>
  );
}

export default ItemList;