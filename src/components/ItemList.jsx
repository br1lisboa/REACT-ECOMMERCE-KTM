import React, { useEffect, useState } from 'react';
import Item from '../components/ItemList';

function ItemList () {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        setProductList(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getProducts();
  }, []);

  return (
    <>
      {loading? <h1>Cargando productos..</h1> : <Item product={productList}/>}
    </>
  );
}

export default ItemList;