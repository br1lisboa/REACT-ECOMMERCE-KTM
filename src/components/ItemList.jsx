import React, { useEffect, useState } from 'react';
import Item from '../components/Item';
import './styles/ItemList.css';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

function ItemList () {
  const [productList, setProductList] = useState([]);
  const params = useParams();
  console.log(params);
  

  useEffect( () => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        let productosFiltrados = [...data];
        if (params?.categoryId) {
          productosFiltrados = productosFiltrados.filter(producto => producto.category === params.categoryId)
        }         /* >>>>> ".?" se llama opcional chaining, significa que si "params" viene undefined NO va a hacer lo que indica el IF */
        setProductList(productosFiltrados)
      } catch (error) {
        console.log(error)
      }
    }

    getProducts();
  }, [params]);

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
          <Loading/>
        ) 
      }
    </div>
  );
}

export default ItemList;