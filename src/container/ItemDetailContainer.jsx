import React, { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});

  const params = useParams();

  /* console.log(params); */

  useEffect(()=> {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
        const data = await response.json();
        setProductDetail(data) 
      } catch (error) {
        console.log(error);
      }
    }

    getProduct()

  }, [params])

	return (
    Object.keys(productDetail).length !== 0 ?
		<ItemDetail product={productDetail}/>
    :
    <Loading/>
	);
}

export default ItemDetailContainer;