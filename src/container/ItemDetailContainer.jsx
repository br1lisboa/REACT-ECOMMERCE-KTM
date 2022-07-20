import React, { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';

const ItemDetailContainer = () => {

  const [productDetail, setProductDetail] = useState({});

  const params = useParams();

  useEffect(()=> {
    const getProduct = async () => {
      try {
        //llamo a la referencia del documento
        const docRef = doc(db, "products", params.productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log(docSnap.id);
          console.log("Document data:", docSnap.data());
          const productDetail = {id: docSnap.id, ...docSnap.data()}
          setProductDetail(productDetail)
        } else {
          console.log("No such document!");
        }
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