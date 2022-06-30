import React from 'react';
import CartWidget from './CartWidget';
import './styles/NavBar.css'

function NavBar () {
	return (
		<div className='contenedor-navbar'>
			<h1 className="navbar-itulo">TITULO</h1>
			<ul className='navbar'>
				<li>HOME</li>
				<li>CATEGORIA 1</li>
				<li>CATEGORIA 2</li>
				<li>CATEGORIA 3</li>
				<li><CartWidget /></li>
			</ul>
		</div>
	);
}

export default NavBar;