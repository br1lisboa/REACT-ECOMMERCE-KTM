import React from 'react';
import CartWidget from './CartWidget';
import './styles/NavBar.css'
import { Link } from 'react-router-dom';

function NavBar () {
	return (
		<div>
		<div className='contenedor-navbar'>
			<h1 className="navbar-itulo">POPURRI</h1>
			<ul className='navbar'>
				<li><Link to='/' className=' li'>HOME</Link></li>
				<li><Link to='/category/electronics' className=' li'>ELECTRONICA</Link></li>
				<li><Link to='/category/jewelery' className=' li'>JOYERIA</Link></li>
				<li><Link to="/category/women's clothing" className=' li'>MUJERES</Link></li>
				<li><Link to="/category/men's clothing" className=' li'>HOMBRES</Link></li>
				<li><CartWidget /></li>
			</ul>
		</div>
		<div>
			<h2 className='navbar-msj'>Compre con tranquilidad..</h2>
		</div>
		</div>
	);
}

export default NavBar;