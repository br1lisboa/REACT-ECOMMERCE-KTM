import React, { /* useContext, */ useEffect, useState } from "react";
import Item from "../components/Item";
import "./styles/ItemList.css";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
// import algoritmoGuardadoAutomatico from '../utils/guardarProductos';

function ItemList() {
  const [productList, setProductList] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        //algoritmoGuardadoAutomatico() // >> Funcion para cargar productos programaticamente
        const q = query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        const productos = [];
        querySnapshot.forEach((doc) => {
          productos.push({ id: doc.id, ...doc.data() });
        });

        let productosFiltrados = [...productos];
        if (params?.categoryId) {
          productosFiltrados = productosFiltrados.filter(
            (producto) => producto.category === params.categoryId
          );
        } // >>>>> ".?" se llama opcional chaining, significa que si "params" viene undefined NO va a hacer lo que indica el IF
        setProductList(productosFiltrados);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [params]);

  return (
    <div>
      <h2>Solo maquinas de calidad superior...</h2>
      <div className="product-list-container">
        {productList.length ? (
          <>
            {productList.map((productList) => {
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
            })}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default ItemList;
