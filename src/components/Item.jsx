import React from 'react';
import './styles/Item.css';
import { useNavigate } from 'react-router-dom';


function Item ( { name, imagen, categoria, precio, id } ) {
  const navigation = useNavigate();

  const handleDetail = () => {
  /*   console.log('Navega hacia el detail'); */
    navigation(`/detail/${id}`)
  }

  return (
    <div className='product-card-container' onClick={handleDetail}>
      <div className="product-car">
        <h3> {name} </h3>
        <img src={imagen} alt="" className="img-car" />
        <p>Categoria: {categoria} </p>
        <p>Precio {precio} </p>
      </div>
    </div >
  ); 
}

export default Item;
