import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Item.css';


function Item ( { name, imagen, categoria, precio, id } ) {
  
  const navigation = useNavigate();

  const handleDetail = () => { //Navega hacia el detail
    navigation(`/detail/${id}`)
  }

  return (
    <div className='product-card-container' onClick={handleDetail}>
      <div className='img-car-container'>
        <img src={imagen} alt="" className="img-car" />
      </div>
      <div className="product-car">
        <h3> {name} </h3>
        <p>Marca: {categoria} </p>
        <p className='price'>$ {precio} USD <span className='price-off'> 20%off </span></p>
      </div>
    </div >
  ); 
}

export default Item;
