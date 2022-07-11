import React, { useContext } from 'react';
import { BsBag } from 'react-icons/bs'
import './styles/CartWidget.css'
import { Shop } from '../context/ShopProvider'

function CartWidget () {
  const {cart} = useContext(Shop);


  return (
    <div>
      <div className='navbar-bag'><BsBag/></div>
      {cart.length && <span>({cart.length})</span>}
    </div>
  );
}

export default CartWidget