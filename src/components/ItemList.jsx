import React, { /* useContext, */ useEffect, useState } from 'react';
import Item from '../components/Item';
import './styles/ItemList.css';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';
/* import { Shop } from '../context/ShopProvider'; */

function ItemList () {
  const [productList, setProductList] = useState([]);
  const params = useParams();
  /* console.log(params); */
  

  useEffect( () => {
    const getProducts = async () => {
      try {
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          productos.push({id: doc.id, ...doc.data()})
        });
        console.log(productos);

        /* const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json(); */
        let productosFiltrados = [...productos];
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

  /* const {setEstadoA} = useContext(Shop); */

  /* const handleChangeState = () => {
    setEstadoA('cambio de valor')
  }; */

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
                    {/* <button onClick={handleChangeState}>Cambiar estado</button> */}
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